import ServiceResponse = require("../Responses/ServiceResponse");
import ExchangeService = require("../ExchangeService");
import EwsUtilities = require("../EwsUtilities");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import XmlElementNames = require("../XmlElementNames");
import XmlNamespace = require("../../Enumerations/XmlNamespace");
import ServiceResult = require("../../Enumerations/ServiceResult");
import ServiceErrorHandling = require("../../Enumerations/ServiceErrorHandling");
import ServiceResponseCollection = require("../Responses/ServiceResponseCollection");
import ServiceResponseException = require("../../Exceptions/ServiceResponseException");
import ServiceXmlDeserializationException = require("../../Exceptions/ServiceXmlDeserializationException");

import ExtensionMethods = require("../../ExtensionMethods");
import String = ExtensionMethods.stringFormatting;

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
    //EndExecute(asyncResult: any/*System.IAsyncResult*/): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
    Execute(): IPromise<ServiceResponseCollection<TResponse>> {

        return Promise((successDelegate, errorDelegate, progressDelegate) => {
            this.InternalExecute().then((value: any) => {
                var serviceResponses = <ServiceResponseCollection<TResponse>>value;

                if (this.ErrorHandlingMode == ServiceErrorHandling.ThrowOnError) {
                    EwsUtilities.Assert(
                        serviceResponses.Count == 1,
                        "MultiResponseServiceRequest.Execute",
                        "ServiceErrorHandling.ThrowOnError error handling is only valid for singleton request");

                    serviceResponses.__thisIndexer(0).ThrowIfNecessary();
                }

                //return serviceResponses;


                if (successDelegate)
                    successDelegate(serviceResponses);
                else {
                    if (errorDelegate)
                        errorDelegate(value);
                }
            },(resperr: any) => {
                    debugger;
                    if (errorDelegate) errorDelegate(resperr);
                });
        });
    }
    GetExpectedResponseMessageCount(): number { throw new Error("Abstract; must implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("Abstract; must implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any {
        var serviceResponses = new ServiceResponseCollection<TResponse>();

        reader.ReadStartElement(XmlNamespace.Messages, XmlElementNames.ResponseMessages);

        for (var i = 0; i < this.GetExpectedResponseMessageCount(); i++) {
            // Read ahead to see if we've reached the end of the response messages early.
            reader.Read(); debugger;
            if (reader.HasRecursiveParent(XmlElementNames.ResponseMessages)) {
                break;
            }

            var response = this.CreateServiceResponse(reader.Service, i);

            response.LoadFromXml(reader, this.GetResponseMessageXmlElementName());

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
            if ((serviceResponses.Count == 1) && (serviceResponses.__thisIndexer(0).Result == ServiceResult.Error)) {
                throw new ServiceResponseException(serviceResponses.__thisIndexer(0));
            }
            else {
                throw new ServiceXmlDeserializationException(
                    String.Format(
                        "there are less than expected responses;element:{0},  expected:{1}, actual{2}",//Strings.TooFewServiceReponsesReturned,
                        this.GetResponseMessageXmlElementName(),
                        this.GetExpectedResponseMessageCount(),
                        serviceResponses.Count));
            }
        }

        reader.ReadEndElementIfNecessary(XmlNamespace.Messages, XmlElementNames.ResponseMessages);

        return serviceResponses;
    }
    ParseResponseObject(object:any): any {
        var serviceResponses = new ServiceResponseCollection<TResponse>();
        throw new Error("missing implementaytion");
        // reader.ReadStartElement(XmlNamespace.Messages, XmlElementNames.ResponseMessages);
        //
        // for (var i = 0; i < this.GetExpectedResponseMessageCount(); i++) {
        //     // Read ahead to see if we've reached the end of the response messages early.
        //     reader.Read(); debugger;
        //     if (reader.HasRecursiveParent(XmlElementNames.ResponseMessages)) {
        //         break;
        //     }
        //
        //     var response = this.CreateServiceResponse(reader.Service, i);
        //
        //     response.LoadFromXml(reader, this.GetResponseMessageXmlElementName());
        //
        //     // Add the response to the list after it has been deserialized because the response
        //     // list updates an overall result as individual responses are added to it.
        //     serviceResponses.Add(response);
        //}

        // // If there's a general error in batch processing,
        // // the server will return a single response message containing the error
        // // (for example, if the SavedItemFolderId is bogus in a batch CreateItem
        // // call). In this case, throw a ServiceResponsException. Otherwise this
        // // is an unexpected server error.
        // if (serviceResponses.Count < this.GetExpectedResponseMessageCount()) {
        //     if ((serviceResponses.Count == 1) && (serviceResponses[0].Result == ServiceResult.Error)) {
        //         throw new ServiceResponseException(serviceResponses[0]);
        //     }
        //     else {
        //         throw new ServiceXmlDeserializationException(
        //             String.Format(
        //                 "there are less than expected responses;element:{0},  expected:{1}, actual{2}",//Strings.TooFewServiceReponsesReturned,
        //                 this.GetResponseMessageXmlElementName(),
        //                 this.GetExpectedResponseMessageCount(),
        //                 serviceResponses.Count));
        //     }
        // }
        //
        // reader.ReadEndElementIfNecessary(XmlNamespace.Messages, XmlElementNames.ResponseMessages);
        //
        // return serviceResponses;
    }

    //ParseResponse(jsonBody: JsonObject): any { throw new Error("Not implemented."); }
}
export = MultiResponseServiceRequest;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
