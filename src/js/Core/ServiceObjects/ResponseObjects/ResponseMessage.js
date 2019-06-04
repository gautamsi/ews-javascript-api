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
var Schemas_1 = require("../Schemas/Schemas");
var XmlElementNames_1 = require("../../XmlElementNames");
var EwsLogging_1 = require("../../EwsLogging");
var ResponseMessageType_1 = require("../../../Enumerations/ResponseMessageType");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var ResponseObject_1 = require("./ResponseObject");
/**
 * Represents the base class for e-mail related responses (Reply, Reply all and Forward).
 *
 */
var ResponseMessage = /** @class */ (function (_super) {
    __extends(ResponseMessage, _super);
    /**
     * Initializes a new instance of the **ResponseMessage** class.
     *
     * @param   {Item}                    referenceItem   The reference item.
     * @param   {ResponseMessageType}     responseType    Type of the response.
     */
    function ResponseMessage(referenceItem, responseType) {
        var _this = _super.call(this, referenceItem) || this;
        _this.responseType = ResponseMessageType_1.ResponseMessageType.Reply;
        _this.responseType = responseType;
        return _this;
    }
    Object.defineProperty(ResponseMessage.prototype, "ResponseType", {
        /**
         * Gets a value indicating the type of response this object represents.
         *
         */
        get: function () {
            return this.responseType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponseMessage.prototype, "Body", {
        /**
         * Gets or sets the body of the response.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.Body);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.Body, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponseMessage.prototype, "ToRecipients", {
        /**
         * Gets a list of recipients the response will be sent to.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.ToRecipients);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponseMessage.prototype, "CcRecipients", {
        /**
         * Gets a list of recipients the response will be sent to as Cc.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.CcRecipients);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponseMessage.prototype, "BccRecipients", {
        /**
         * Gets a list of recipients this response will be sent to as Bcc.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.BccRecipients);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponseMessage.prototype, "Subject", {
        /**
         * Gets or sets the subject of this response.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.Subject);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.Subject, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponseMessage.prototype, "BodyPrefix", {
        /**
         * Gets or sets the body prefix of this response. The body prefix will be prepended to the original
        message's body when the response is created.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ResponseObjectSchema.BodyPrefix);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ResponseObjectSchema.BodyPrefix, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the minimum required server version.
     *
     * @return  {type}      Earliest Exchange version in which this service object type is supported.
     */
    ResponseMessage.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    /**
     * Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    ResponseMessage.prototype.GetSchema = function () { return Schemas_1.Schemas.ResponseMessageSchema.Instance; };
    /**
     * Get XML Element Name - workaround for c# attributes
     */
    ResponseMessage.prototype.GetXmlElementName = function () { return this.GetXmlElementNameOverride(); };
    /**
     * This methods lets subclasses of ServiceObject override the default mechanism by which the XML element name associated with their type is retrieved.
     *
     * @return  {string}      The XML element name associated with this type. If this method returns null or empty, the XML element name associated with this type is determined by the EwsObjectDefinition attribute that decorates the type, if present.
     */
    ResponseMessage.prototype.GetXmlElementNameOverride = function () {
        switch (this.responseType) {
            case ResponseMessageType_1.ResponseMessageType.Reply:
                return XmlElementNames_1.XmlElementNames.ReplyToItem;
            case ResponseMessageType_1.ResponseMessageType.ReplyAll:
                return XmlElementNames_1.XmlElementNames.ReplyAllToItem;
            case ResponseMessageType_1.ResponseMessageType.Forward:
                return XmlElementNames_1.XmlElementNames.ForwardItem;
            default:
                EwsLogging_1.EwsLogging.Assert(false, "ResponseMessage.GetXmlElementNameOverride", "An unexpected value for responseType could not be handled.");
                return null; // Because the compiler wants it
        }
    };
    return ResponseMessage;
}(ResponseObject_1.ResponseObject));
exports.ResponseMessage = ResponseMessage;
