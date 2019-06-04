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
var XmlElementNames_1 = require("../../XmlElementNames");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var Schemas_1 = require("../Schemas/Schemas");
var CalendarResponseMessageBase_1 = require("./CalendarResponseMessageBase");
/**
 * Represents a meeting cancellation message.
 *
 */
var CancelMeetingMessage = /** @class */ (function (_super) {
    __extends(CancelMeetingMessage, _super);
    /**
     * Initializes a new instance of the **CancelMeetingMessage** class.
     *
     * @param   {Item}   referenceItem   The reference item.
     */
    function CancelMeetingMessage(referenceItem) {
        return _super.call(this, referenceItem) || this;
    }
    Object.defineProperty(CancelMeetingMessage.prototype, "Body", {
        /**
         * Gets or sets the body of the response.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.CancelMeetingMessageSchema.Body);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.CancelMeetingMessageSchema.Body, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    CancelMeetingMessage.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    /**
     * Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    CancelMeetingMessage.prototype.GetSchema = function () { return Schemas_1.Schemas.CancelMeetingMessageSchema.Instance; };
    /**
     * Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    CancelMeetingMessage.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.CancelCalendarItem; };
    return CancelMeetingMessage;
}(CalendarResponseMessageBase_1.CalendarResponseMessageBase));
exports.CancelMeetingMessage = CancelMeetingMessage;
