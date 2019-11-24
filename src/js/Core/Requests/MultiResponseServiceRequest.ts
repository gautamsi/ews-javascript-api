import { ServiceJsonDeserializationException } from "../../Exceptions/ServiceJsonDeserializationException";
import { Strings } from "../../Strings";
import { ServiceResponse } from "../Responses/ServiceResponse";
import { ExchangeService } from "../ExchangeService";
import { EwsUtilities } from "../EwsUtilities";
import { EwsLogging } from "../EwsLogging";
import { EwsServiceJsonReader } from "../EwsServiceJsonReader";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";
import { ServiceResult } from "../../Enumerations/ServiceResult";
import { ServiceErrorHandling } from "../../Enumerations/ServiceErrorHandling";
import { ServiceResponseCollection } from "../Responses/ServiceResponseCollection";
import { ServiceResponseException } from "../../Exceptions/ServiceResponseException";
import { ServiceXmlDeserializationException } from "../../Exceptions/ServiceXmlDeserializationException";
import { RenderingMode } from "../../Enumerations/RenderingMode";
import { StringHelper } from "../../ExtensionMethods";
import { Promise } from "../../Promise";

import { SimpleServiceRequestBase } from "./SimpleServiceRequestBase";
/** @internal */
export class MultiResponseServiceRequest<TResponse extends ServiceResponse> extends SimpleServiceRequestBase {
  get ErrorHandlingMode(): ServiceErrorHandling { return this.errorHandlingMode; }
  private errorHandlingMode: ServiceErrorHandling;

  constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
    super(service);
    this.errorHandlingMode = errorHandlingMode;
  }

  CreateServiceResponse(service: ExchangeService, responseIndex: number): TResponse { throw new Error("abstract; must implemented."); }
  //EndExecute(asyncResult: any/*System.IAsyncResult*/): ServiceResponseCollection<TResponse> { throw new Error("MultiResponseServiceRequest.ts - EndExecute : Not implemented."); }
  async Execute(): Promise<ServiceResponseCollection<TResponse>> {

    const serviceResponses: ServiceResponseCollection<TResponse> = await this.InternalExecute()

    if (this.ErrorHandlingMode == ServiceErrorHandling.ThrowOnError) {
      EwsLogging.Assert(
        serviceResponses.Count == 1,
        "MultiResponseServiceRequest.Execute",
        "ServiceErrorHandling.ThrowOnError error handling is only valid for singleton request");

      serviceResponses.__thisIndexer(0).ThrowIfNecessary();
    }

    //return serviceResponses; //no return succedssdelegates take care of returning

    return serviceResponses;
  }
  GetExpectedResponseMessageCount(): number { throw new Error("Abstract; must implemented."); }
  GetResponseMessageXmlElementName(): string { throw new Error("Abstract; must implemented."); }
  ParseResponseXMLJsObject(jsObject: any): any {
    var serviceResponses = new ServiceResponseCollection<TResponse>();
    //set context to XmlElementNames.ResponseMessages
    //todo: this can have multiple reponse messages.
    var jsResponseMessages: any = jsObject[XmlElementNames.ResponseMessages]
    // if (!Array.isArray(jsResponseMessages)) {
    //     jsResponseMessages = [jsResponseMessages];
    // }

    var responseMessageXmlElementName = this.GetResponseMessageXmlElementName();
    let responseMessages = EwsServiceJsonReader.ReadAsArray(jsResponseMessages, responseMessageXmlElementName);
    //for (var i = 0; i < responses.length; i++) {
    for (var i = 0; i < this.GetExpectedResponseMessageCount(); i++) {
      var response: TResponse = this.CreateServiceResponse(this.Service, i);
      //ref: check need for responseMessageXmlElementName
      var jsResponseMessage = responseMessages[i];
      response.LoadFromXmlJsObject(jsResponseMessage, this.Service)//, responseMessageXmlElementName, this.Service);
      // Add the response to the list after it has been deserialized because the response
      // list updates an overall result as individual responses are added to it.
      serviceResponses.Add(response);
    }

    // If there's a general error in batch processing,
    // the server will return a single response message containing the error
    // (for example, if the SavedItemFolderId is bogus in a batch CreateItem
    // call). In this case, throw a ServiceResponsException. Otherwise this
    // is an unexpected server error.
    if (serviceResponses.Count < this.GetExpectedResponseMessageCount()) {
      if ((serviceResponses.Count >= 1) && (serviceResponses.__thisIndexer(0).Result == ServiceResult.Error)) {
        throw new ServiceResponseException(serviceResponses.__thisIndexer(0));
      }
      else {
        throw new ServiceXmlDeserializationException(
          StringHelper.Format(
            Strings.TooFewServiceReponsesReturned,
            this.GetResponseMessageXmlElementName(),
            this.GetExpectedResponseMessageCount(),
            serviceResponses.Count));
      }
    }

    return serviceResponses;
  }
  ParseResponse(jsonBody: any): any {

    if (this.Service.RenderingMethod === RenderingMode.JSON) {
      throw new Error("not implemented");

      var serviceResponses = new ServiceResponseCollection<TResponse>();
      var jsonResponseMessages: any[] = jsonBody[XmlElementNames.ResponseMessages][XmlElementNames.Items];

      var responseCtr: number = 0;
      for (var jsonResponseObject of jsonResponseMessages) {
        var response: TResponse = this.CreateServiceResponse(this.Service, responseCtr);

        response.LoadFromXmlJsObject(jsonResponseObject, this.Service);

        // Add the response to the list after it has been deserialized because the response
        // list updates an overall result as individual responses are added to it.
        serviceResponses.Add(response);

        responseCtr++;
      }

      if (serviceResponses.Count < this.GetExpectedResponseMessageCount()) {
        if ((serviceResponses.Count == 1) && (serviceResponses[0].Result == ServiceResult.Error)) {
          throw new ServiceResponseException(serviceResponses[0]);
        }
        else {
          throw new ServiceJsonDeserializationException();
        }
      }
      return serviceResponses;
    }
    else {
      return this.ParseResponseXMLJsObject(jsonBody);
    }
  }
}