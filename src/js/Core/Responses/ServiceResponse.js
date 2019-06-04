"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AltDictionary_1 = require("../../AltDictionary");
var EwsLogging_1 = require("../EwsLogging");
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var ExtendedPropertyDefinition_1 = require("../../PropertyDefinitions/ExtendedPropertyDefinition");
var IndexedPropertyDefinition_1 = require("../../PropertyDefinitions/IndexedPropertyDefinition");
var ServiceError_1 = require("../../Enumerations/ServiceError");
var ServiceObjectSchema_1 = require("../ServiceObjects/Schemas/ServiceObjectSchema");
var ServiceResponseException_1 = require("../../Exceptions/ServiceResponseException");
var ServiceResult_1 = require("../../Enumerations/ServiceResult");
var Strings_1 = require("../../Strings");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var XmlElementNames_1 = require("../XmlElementNames");
/**
 * Represents the standard response to an Exchange Web Services operation.
 */
var ServiceResponse = /** @class */ (function () {
    function ServiceResponse(soapFaultDetailsOrResponseCode, errorMessage) {
        this.errorDetails = new AltDictionary_1.DictionaryWithStringKey();
        this.errorProperties = [];
        var argsLength = arguments.length;
        if (argsLength == 0)
            return;
        if (typeof soapFaultDetailsOrResponseCode === 'number') { //(responseCode: ServiceError, errorMessage: string)
            this.result = ServiceResult_1.ServiceResult.Error;
            this.errorCode = soapFaultDetailsOrResponseCode;
            this.errorMessage = errorMessage;
            this.errorDetails = null;
        }
        else { //(soapFaultDetails: SoapFaultDetails)
            this.result = ServiceResult_1.ServiceResult.Error;
            this.errorCode = soapFaultDetailsOrResponseCode.ResponseCode;
            this.errorMessage = soapFaultDetailsOrResponseCode.FaultString;
            this.errorDetails = soapFaultDetailsOrResponseCode.ErrorDetails;
        }
    }
    ;
    Object.defineProperty(ServiceResponse.prototype, "BatchProcessingStopped", {
        /**
         * @internal Gets a value indicating whether a batch request stopped processing before the end.
         */
        get: function () {
            return (this.result == ServiceResult_1.ServiceResult.Warning) && (this.errorCode == ServiceError_1.ServiceError.ErrorBatchProcessingStopped);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceResponse.prototype, "Result", {
        /**
         * Gets the result associated with this response.
         */
        get: function () {
            return this.result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceResponse.prototype, "ErrorCode", {
        /**
         * Gets the error code associated with this response.
         */
        get: function () {
            return this.errorCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceResponse.prototype, "ErrorMessage", {
        /**
         * Gets a detailed error message associated with the response. If Result is set to Success, ErrorMessage returns null.
         * ErrorMessage is localized according to the PreferredCulture property of the ExchangeService object that was used to call the method that generated the response.
         */
        get: function () {
            return this.errorMessage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceResponse.prototype, "ErrorDetails", {
        /**
         * Gets error details associated with the response. If Result is set to Success, ErrorDetailsDictionary returns null.
         * Error details will only available for some error codes. For example, when error code is ErrorRecurrenceHasNoOccurrence, the ErrorDetailsDictionary will contain keys for EffectiveStartDate and EffectiveEndDate.
         *
         * @value   The error details dictionary.
         */
        get: function () {
            return this.errorDetails;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceResponse.prototype, "ErrorProperties", {
        /**
         * Gets information about property errors associated with the response. If Result is set to Success, ErrorProperties returns null.
         * ErrorProperties is only available for some error codes. For example, when the error code is ErrorInvalidPropertyForOperation, ErrorProperties will contain the definition of the property that was invalid for the request.
         *
         * @value   The error properties list.
         */
        get: function () {
            return this.errorProperties;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Internal method that throws a ServiceResponseException if this response has its Result property set to Error.
     */
    ServiceResponse.prototype.InternalThrowIfNecessary = function () {
        if (this.Result == ServiceResult_1.ServiceResult.Error) {
            throw new ServiceResponseException_1.ServiceResponseException(this);
        }
    };
    /**
     * @internal Called when the response has been loaded from XML.
     */
    ServiceResponse.prototype.Loaded = function () { };
    /**
     * @internal Loads extra error details from XML
     *
     * @param   {any}               responseObject      Json Object converted from XML.
     * @param   {ExchangeService}   service             The service.
     */
    ServiceResponse.prototype.LoadExtraErrorDetailsFromXmlJsObject = function (responseObject, service) {
        if (responseObject[XmlElementNames_1.XmlElementNames.MessageXml]) {
            this.ParseMessageXml(responseObject[XmlElementNames_1.XmlElementNames.MessageXml]);
        }
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 responseObject        Json Object converted from XML.
     * @param   {ExchangeService}     service               The service.
     */
    ServiceResponse.prototype.LoadFromXmlJsObject = function (responseObject, service) {
        this.result = ServiceResult_1.ServiceResult[responseObject[XmlAttributeNames_1.XmlAttributeNames.ResponseClass]];
        this.errorCode = ServiceError_1.ServiceError[responseObject[XmlElementNames_1.XmlElementNames.ResponseCode]];
        // TODO: Deal with a JSON version of "LoadExtraDetailsFromXml"
        if (this.result == ServiceResult_1.ServiceResult.Warning || this.result == ServiceResult_1.ServiceResult.Error) {
            this.errorMessage = responseObject[XmlElementNames_1.XmlElementNames.MessageText];
            this.LoadExtraErrorDetailsFromXmlJsObject(responseObject, service);
        }
        if (this.result == ServiceResult_1.ServiceResult.Success || this.result == ServiceResult_1.ServiceResult.Warning) {
            if (!this.BatchProcessingStopped) {
                this.ReadElementsFromXmlJsObject(responseObject, service);
            }
        }
        this.MapErrorCodeToErrorMessage();
        this.Loaded();
    };
    /**
     * @internal Called after the response has been loaded from XML in order to map error codes to "better" error messages.
     */
    ServiceResponse.prototype.MapErrorCodeToErrorMessage = function () {
        // Use a better error message when an item cannot be updated because its changeKey is old.
        if (this.ErrorCode == ServiceError_1.ServiceError.ErrorIrresolvableConflict) {
            this.errorMessage = Strings_1.Strings.ItemIsOutOfDate;
        }
    };
    /**
     * Parses the message XML.
     *
     * @param   {any}   jsObject   The MessageXml Object.
     */
    ServiceResponse.prototype.ParseMessageXml = function (jsObject) {
        var _this = this;
        for (var key in jsObject) {
            if (key.indexOf("__") === 0) {
                continue;
            }
            switch (key) {
                case XmlElementNames_1.XmlElementNames.Value:
                    var values = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject, key);
                    values.forEach(function (value, index) {
                        var name = value[XmlAttributeNames_1.XmlAttributeNames.Name];
                        if (name) {
                            if (_this.ErrorDetails.containsKey(name)) {
                                name = name + " - " + (index + 1);
                            }
                            _this.errorDetails.Add(name, value[key]);
                        }
                    });
                    break;
                case XmlElementNames_1.XmlElementNames.FieldURI:
                    this.errorProperties.push(ServiceObjectSchema_1.ServiceObjectSchema.FindPropertyDefinition(jsObject[key][XmlAttributeNames_1.XmlAttributeNames.FieldURI]));
                    break;
                case XmlElementNames_1.XmlElementNames.IndexedFieldURI:
                    var indexFieldUriObject = jsObject[key];
                    this.errorProperties.push(new IndexedPropertyDefinition_1.IndexedPropertyDefinition(indexFieldUriObject[XmlAttributeNames_1.XmlAttributeNames.FieldURI], indexFieldUriObject[XmlAttributeNames_1.XmlAttributeNames.FieldIndex]));
                    break;
                case XmlElementNames_1.XmlElementNames.ExtendedFieldURI:
                    var extendedPropDef = new ExtendedPropertyDefinition_1.ExtendedPropertyDefinition();
                    extendedPropDef.LoadPropertyValueFromXmlJsObject(jsObject[key]);
                    this.errorProperties.push(extendedPropDef);
                    break;
                default:
                    EwsLogging_1.EwsLogging.Assert(false, "ServiceResponse.ParseMessageXml", "Element: " + key + " - Please report example of this operation to ews-javascript-api repo to improve SoapFault parsing");
                    break;
            }
        }
    };
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ServiceResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        /* virtualvoid to be implemented throw new Error("Not implemented.");*/
        var caller = "ServiceResponse->child";
        try {
            caller = this.constructor.name;
        }
        catch (e) { }
        EwsLogging_1.EwsLogging.Assert(caller === "ServiceResponse", caller + ".ReadElementsFromXmlJsObject", "BatchProcessingStopped is false but ReadElementsFromXmlJsObject is not available in derived class to call.");
    };
    /**
     * @internal Throws a ServiceResponseException if this response has its Result property set to Error.
     */
    ServiceResponse.prototype.ThrowIfNecessary = function () {
        this.InternalThrowIfNecessary();
    };
    return ServiceResponse;
}());
exports.ServiceResponse = ServiceResponse;
