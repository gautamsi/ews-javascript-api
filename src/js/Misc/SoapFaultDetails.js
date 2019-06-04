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
var ExtensionMethods_1 = require("../ExtensionMethods");
var AltDictionary_1 = require("../AltDictionary");
var EwsLogging_1 = require("../Core/EwsLogging");
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var Exception_1 = require("../Exceptions/Exception");
var ServiceError_1 = require("../Enumerations/ServiceError");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
/**
 * Represents SoapFault details.
 *
 * /remarks/    ews-javascript-api -> removing internal modifier to, this class will be used to pass on to error delegate of promise instead of Exceptions.
 *
 * /remarks/    ews-javascript-api -> 0.9 - Extending from Error object to avoid BlueBird errors when promise is rejected without and Error object
 * /remarks/    ews-javascript-api -> 0.9 - extending from Exception which looks like Error to BlueBird. can not extend from Error. Typescript 1.8+ can not extend builtin objects property, it swallows inheriting properties see  https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
 */
var SoapFaultDetails = /** @class */ (function (_super) {
    __extends(SoapFaultDetails, _super);
    function SoapFaultDetails() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.faultCode = null;
        _this.faultString = null;
        _this.faultActor = null;
        /**
         * Response code returned by EWS requests.
         * Default to InternalServerError.
         */
        _this.responseCode = ServiceError_1.ServiceError.ErrorInternalServerError;
        /**
         * This is returned by Availability requests.
         */
        _this.errorCode = ServiceError_1.ServiceError.NoError;
        /**
         * This is returned by UM requests. It's the name of the exception that was raised.
         */
        _this.exceptionType = null;
        /**
         * When a schema validation error is returned, this is the line number in the request where the error occurred.
         */
        _this.lineNumber = 0;
        /**
         * When a schema validation error is returned, this is the offset into the line of the request where the error occurred.
         */
        _this.positionWithinLine = 0;
        /**
         * Dictionary of key/value pairs from the MessageXml node in the fault. Usually empty but there are a few cases where SOAP faults may include MessageXml details (e.g. CASOverBudgetException includes BackoffTime value).
         */
        _this.errorDetails = new AltDictionary_1.DictionaryWithStringKey();
        /**
         * ews-javascript-api specific: HTTP status code
         */
        _this.HttpStatusCode = 200;
        return _this;
    }
    Object.defineProperty(SoapFaultDetails.prototype, "FaultCode", {
        /**
         * @internal Gets or sets the SOAP fault code.
         *
         * @value   The SOAP fault code.
         */
        get: function () {
            return this.faultCode;
        },
        set: function (value) {
            this.faultCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoapFaultDetails.prototype, "FaultString", {
        /**
         * @internal Gets or sets the SOAP fault string.
         *
         * @value   The fault string.
         */
        get: function () {
            return this.faultString;
        },
        set: function (value) {
            this.faultString = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoapFaultDetails.prototype, "FaultActor", {
        /**
         * @internal Gets or sets the SOAP fault actor.
         *
         * @value   The fault actor.
         */
        get: function () {
            return this.faultActor;
        },
        set: function (value) {
            this.faultActor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoapFaultDetails.prototype, "ResponseCode", {
        /**
         * @internal Gets or sets the response code.
         *
         * @value   The response code.
         */
        get: function () {
            return this.responseCode;
        },
        set: function (value) {
            this.responseCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoapFaultDetails.prototype, "Message", {
        /**
         * @internal Gets or sets the message.
         *
         * @value   The message.
         */
        get: function () {
            return this.message;
        },
        set: function (value) {
            this.message = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoapFaultDetails.prototype, "ErrorCode", {
        /**
         * @internal Gets or sets the error code.
         *
         * @value   The error code.
         */
        get: function () {
            return this.errorCode;
        },
        set: function (value) {
            this.errorCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoapFaultDetails.prototype, "ExceptionType", {
        /**
         * @internal Gets or sets the type of the exception.
         *
         * @value   The type of the exception.
         */
        get: function () {
            return this.exceptionType;
        },
        set: function (value) {
            this.exceptionType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoapFaultDetails.prototype, "LineNumber", {
        /**
         * @internal Gets or sets the line number.
         *
         * @value   The line number.
         */
        get: function () {
            return this.lineNumber;
        },
        set: function (value) {
            this.lineNumber = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoapFaultDetails.prototype, "PositionWithinLine", {
        /**
         * @internal Gets or sets the position within line.
         *
         * @value   The position within line.
         */
        get: function () {
            return this.positionWithinLine;
        },
        set: function (value) {
            this.positionWithinLine = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoapFaultDetails.prototype, "ErrorDetails", {
        /**
         * @internal Gets or sets the error details dictionary.
         *
         * @value   The error details dictionary.
         */
        get: function () {
            return this.errorDetails;
        },
        set: function (value) {
            this.errorDetails = value;
        },
        enumerable: true,
        configurable: true
    });
    // /**
    //  * @private Initializes a new instance of the **SoapFaultDetails** class.
    //  */
    // // constructor() {
    // //     super();
    // // }
    /**
     * @internal Parses the soap:Fault content.
     *
     * @param   {any}   jsObject        The converted Xml JsObject.
     * @return  {SoapFaultDetails}      SOAP fault details.
     */
    SoapFaultDetails.Parse = function (jsObject) {
        var soapFaultDetails = new SoapFaultDetails();
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.SOAPFaultCodeElementName:
                    soapFaultDetails.FaultCode = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.SOAPFaultStringElementName:
                    soapFaultDetails.FaultString = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.SOAPFaultActorElementName:
                    soapFaultDetails.FaultActor = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.SOAPDetailElementName:
                    soapFaultDetails.ParseDetailNode(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
        return soapFaultDetails;
    };
    /**
     * Parses the detail node.
     *
     * @param   {any}   jsObject   The detail node.
     */
    SoapFaultDetails.prototype.ParseDetailNode = function (jsObject) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.EwsResponseCodeElementName:
                    // ServiceError couldn't be mapped to enum value, treat as an ISE
                    this.ResponseCode = ServiceError_1.ServiceError[jsObject[key]] || ServiceError_1.ServiceError.ErrorInternalServerError;
                    ;
                    break;
                case XmlElementNames_1.XmlElementNames.EwsMessageElementName:
                    this.Message = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.EwsLineElementName:
                    this.LineNumber = ExtensionMethods_1.Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.EwsPositionElementName:
                    this.PositionWithinLine = ExtensionMethods_1.Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.EwsErrorCodeElementName:
                    // ServiceError couldn't be mapped to enum value, treat as an ISE
                    this.ErrorCode = ServiceError_1.ServiceError[jsObject[key]] || ServiceError_1.ServiceError.ErrorInternalServerError;
                    break;
                case XmlElementNames_1.XmlElementNames.EwsExceptionTypeElementName:
                    this.ExceptionType = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.MessageXml:
                    this.ParseMessageXml(jsObject[key]);
                    break;
                default:
                    // Ignore any other details
                    break;
            }
        }
    };
    /**
     * Parses the message XML.
     *
     * @param   {any}   jsObject   The message Xml object.
     */
    SoapFaultDetails.prototype.ParseMessageXml = function (jsObject) {
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
                case XmlElementNames_1.XmlElementNames.EwsLineElementName:
                case "LineNumber":
                    this.LineNumber = ExtensionMethods_1.Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.EwsPositionElementName:
                case "LinePosition":
                    this.PositionWithinLine = ExtensionMethods_1.Convert.toNumber(jsObject[key]);
                    break;
                default:
                    if (typeof jsObject[key] === "string") {
                        this.errorDetails.addUpdate(key, jsObject[key]);
                    }
                    EwsLogging_1.EwsLogging.Assert(false, "SoapFaultDetails.ParseMessageXml", "Element: " + key + " - Please report example of this operation to ews-javascript-api repo to improve SoapFault parsing");
                    break;
            }
        }
    };
    return SoapFaultDetails;
}(Exception_1.Exception));
exports.SoapFaultDetails = SoapFaultDetails;
