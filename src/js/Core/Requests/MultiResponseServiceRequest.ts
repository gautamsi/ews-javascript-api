import ServiceJsonDeserializationException = require("../../Exceptions/ServiceJsonDeserializationException");
import Strings = require("../../Strings");
import ServiceResponse = require("../Responses/ServiceResponse");
import ExchangeService = require("../ExchangeService");
import EwsUtilities = require("../EwsUtilities");
import {EwsLogging} from "../EwsLogging";
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import XmlElementNames = require("../XmlElementNames");
import XmlNamespace = require("../../Enumerations/XmlNamespace");
import ServiceResult = require("../../Enumerations/ServiceResult");
import ServiceErrorHandling = require("../../Enumerations/ServiceErrorHandling");
import ServiceResponseCollection = require("../Responses/ServiceResponseCollection");
import ServiceResponseException = require("../../Exceptions/ServiceResponseException");
import ServiceXmlDeserializationException = require("../../Exceptions/ServiceXmlDeserializationException");
import RenderingMode = require("../../Enumerations/RenderingMode");

import {StringHelper} from "../../ExtensionMethods";

import {IPromise} from "../../Interfaces";
import {Promise} from "../../PromiseFactory"

import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
class MultiResponseServiceRequest<TResponse extends ServiceResponse> extends SimpleServiceRequestBase {
    get ErrorHandlingMode(): ServiceErrorHandling { return this.errorHandlingMode; }
    private errorHandlingMode: ServiceErrorHandling;

    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service);
        this.errorHandlingMode = errorHandlingMode;
    }

    CreateServiceResponse(service: ExchangeService, responseIndex: number): TResponse { throw new Error("abstract; must implemented."); }
    //EndExecute(asyncResult: any/*System.IAsyncResult*/): ServiceResponseCollection<TResponse> { throw new Error("MultiResponseServiceRequest.ts - EndExecute : Not implemented."); }
    Execute(): IPromise<ServiceResponseCollection<TResponse>> {

        return Promise((successDelegate, errorDelegate, progressDelegate) => {
            this.InternalExecute().then((value: any) => {
                var serviceResponses = <ServiceResponseCollection<TResponse>>value;

                if (this.ErrorHandlingMode == ServiceErrorHandling.ThrowOnError) {
                    EwsLogging.Assert(
                        serviceResponses.Count == 1,
                        "MultiResponseServiceRequest.Execute",
                        "ServiceErrorHandling.ThrowOnError error handling is only valid for singleton request");

                    serviceResponses.__thisIndexer(0).ThrowIfNecessary();
                }

                //return serviceResponses; //no return succedssdelegates take care of returning


                if (successDelegate)
                    successDelegate(serviceResponses);
                else {
                    if (errorDelegate)
                        errorDelegate(value);
                }
            }, (resperr: any) => {
                    debugger;
                    if (errorDelegate) errorDelegate(resperr);
                });
        });
    }
    GetExpectedResponseMessageCount(): number { throw new Error("Abstract; must implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("Abstract; must implemented."); }
    ParseResponseXMLJsObject(jsObject: any): any {
        var serviceResponses = new ServiceResponseCollection<TResponse>();
        //set context to XmlElementNames.ResponseMessages
        //tod: this can have multiple reponse messages.
        jsObject = jsObject[XmlElementNames.ResponseMessages]
        var jsResponseMessages: any[] = [];
        if (Object.prototype.toString.call(jsObject) === "[object Array]")
            jsResponseMessages = jsObject;
        else
            jsResponseMessages = [jsObject];

        var responseMessageXmlElementName = this.GetResponseMessageXmlElementName();
        
        //for (var i = 0; i < responses.length; i++) {
        for (var i = 0; i < this.GetExpectedResponseMessageCount(); i++) {
            var response: TResponse = this.CreateServiceResponse(this.Service, i);
            response.LoadFromXmlJsObject(jsResponseMessages[i], responseMessageXmlElementName, this.Service);
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

                response.LoadFromJson(jsonResponseObject, this.Service);

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
export = MultiResponseServiceRequest;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
