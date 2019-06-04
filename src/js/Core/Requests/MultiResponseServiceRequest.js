"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceJsonDeserializationException_1 = require("../../Exceptions/ServiceJsonDeserializationException");
var Strings_1 = require("../../Strings");
var EwsLogging_1 = require("../EwsLogging");
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResult_1 = require("../../Enumerations/ServiceResult");
var ServiceErrorHandling_1 = require("../../Enumerations/ServiceErrorHandling");
var ServiceResponseCollection_1 = require("../Responses/ServiceResponseCollection");
var ServiceResponseException_1 = require("../../Exceptions/ServiceResponseException");
var ServiceXmlDeserializationException_1 = require("../../Exceptions/ServiceXmlDeserializationException");
var RenderingMode_1 = require("../../Enumerations/RenderingMode");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Promise_1 = require("../../Promise");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/** @internal */
var MultiResponseServiceRequest = /** @class */ (function (_super) {
    __extends(MultiResponseServiceRequest, _super);
    function MultiResponseServiceRequest(service, errorHandlingMode) {
        var _this = _super.call(this, service) || this;
        _this.errorHandlingMode = errorHandlingMode;
        return _this;
    }
    Object.defineProperty(MultiResponseServiceRequest.prototype, "ErrorHandlingMode", {
        get: function () { return this.errorHandlingMode; },
        enumerable: true,
        configurable: true
    });
    MultiResponseServiceRequest.prototype.CreateServiceResponse = function (service, responseIndex) { throw new Error("abstract; must implemented."); };
    //EndExecute(asyncResult: any/*System.IAsyncResult*/): ServiceResponseCollection<TResponse> { throw new Error("MultiResponseServiceRequest.ts - EndExecute : Not implemented."); }
    MultiResponseServiceRequest.prototype.Execute = function () {
        var _this = this;
        return new Promise_1.Promise(function (successDelegate, errorDelegate) {
            _this.InternalExecute().then(function (value) {
                var serviceResponses = value;
                if (_this.ErrorHandlingMode == ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError) {
                    EwsLogging_1.EwsLogging.Assert(serviceResponses.Count == 1, "MultiResponseServiceRequest.Execute", "ServiceErrorHandling.ThrowOnError error handling is only valid for singleton request");
                    try {
                        serviceResponses.__thisIndexer(0).ThrowIfNecessary();
                    }
                    catch (error) {
                        if (errorDelegate) {
                            errorDelegate(error);
                        }
                    }
                }
                //return serviceResponses; //no return succedssdelegates take care of returning
                if (successDelegate) {
                    successDelegate(serviceResponses);
                }
            }, function (resperr) {
                //debugger;
                if (errorDelegate) {
                    errorDelegate(resperr);
                }
            });
        });
    };
    MultiResponseServiceRequest.prototype.GetExpectedResponseMessageCount = function () { throw new Error("Abstract; must implemented."); };
    MultiResponseServiceRequest.prototype.GetResponseMessageXmlElementName = function () { throw new Error("Abstract; must implemented."); };
    MultiResponseServiceRequest.prototype.ParseResponseXMLJsObject = function (jsObject) {
        var serviceResponses = new ServiceResponseCollection_1.ServiceResponseCollection();
        //set context to XmlElementNames.ResponseMessages
        //todo: this can have multiple reponse messages.
        var jsResponseMessages = jsObject[XmlElementNames_1.XmlElementNames.ResponseMessages];
        // if (!Array.isArray(jsResponseMessages)) {
        //     jsResponseMessages = [jsResponseMessages];
        // }
        var responseMessageXmlElementName = this.GetResponseMessageXmlElementName();
        var responseMessages = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsResponseMessages, responseMessageXmlElementName);
        //for (var i = 0; i < responses.length; i++) {
        for (var i = 0; i < this.GetExpectedResponseMessageCount(); i++) {
            var response = this.CreateServiceResponse(this.Service, i);
            //ref: check need for responseMessageXmlElementName
            var jsResponseMessage = responseMessages[i];
            response.LoadFromXmlJsObject(jsResponseMessage, this.Service); //, responseMessageXmlElementName, this.Service);
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
            if ((serviceResponses.Count >= 1) && (serviceResponses.__thisIndexer(0).Result == ServiceResult_1.ServiceResult.Error)) {
                throw new ServiceResponseException_1.ServiceResponseException(serviceResponses.__thisIndexer(0));
            }
            else {
                throw new ServiceXmlDeserializationException_1.ServiceXmlDeserializationException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.TooFewServiceReponsesReturned, this.GetResponseMessageXmlElementName(), this.GetExpectedResponseMessageCount(), serviceResponses.Count));
            }
        }
        return serviceResponses;
    };
    MultiResponseServiceRequest.prototype.ParseResponse = function (jsonBody) {
        if (this.Service.RenderingMethod === RenderingMode_1.RenderingMode.JSON) {
            throw new Error("not implemented");
            var serviceResponses = new ServiceResponseCollection_1.ServiceResponseCollection();
            var jsonResponseMessages = jsonBody[XmlElementNames_1.XmlElementNames.ResponseMessages][XmlElementNames_1.XmlElementNames.Items];
            var responseCtr = 0;
            for (var _i = 0, jsonResponseMessages_1 = jsonResponseMessages; _i < jsonResponseMessages_1.length; _i++) {
                var jsonResponseObject = jsonResponseMessages_1[_i];
                var response = this.CreateServiceResponse(this.Service, responseCtr);
                response.LoadFromXmlJsObject(jsonResponseObject, this.Service);
                // Add the response to the list after it has been deserialized because the response
                // list updates an overall result as individual responses are added to it.
                serviceResponses.Add(response);
                responseCtr++;
            }
            if (serviceResponses.Count < this.GetExpectedResponseMessageCount()) {
                if ((serviceResponses.Count == 1) && (serviceResponses[0].Result == ServiceResult_1.ServiceResult.Error)) {
                    throw new ServiceResponseException_1.ServiceResponseException(serviceResponses[0]);
                }
                else {
                    throw new ServiceJsonDeserializationException_1.ServiceJsonDeserializationException();
                }
            }
            return serviceResponses;
        }
        else {
            return this.ParseResponseXMLJsObject(jsonBody);
        }
    };
    return MultiResponseServiceRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.MultiResponseServiceRequest = MultiResponseServiceRequest;
