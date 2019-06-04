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
var EwsUtilities_1 = require("../Core/EwsUtilities");
var MeetingResponseType_1 = require("../Enumerations/MeetingResponseType");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var EmailAddress_1 = require("./EmailAddress");
/**
 * Represents an attendee to a meeting.
 */
var Attendee = /** @class */ (function (_super) {
    __extends(Attendee, _super);
    function Attendee(smtpAddressOrNameOrMailbox, smtpAddress, routingType) {
        var _this = this;
        switch (arguments.length) {
            case 1:
                _this = _super.call(this, smtpAddressOrNameOrMailbox) || this;
                if (typeof smtpAddressOrNameOrMailbox === 'string') {
                    EwsUtilities_1.EwsUtilities.ValidateParam(smtpAddressOrNameOrMailbox, "smtpAddress");
                }
                break;
            case 2:
                _this = _super.call(this, smtpAddressOrNameOrMailbox, smtpAddress) || this;
                break;
            case 3:
                _this = _super.call(this, smtpAddressOrNameOrMailbox, smtpAddress, routingType) || this;
                break;
            default:
                _this = _super.call(this) || this;
                break;
        }
        _this.responseType = null;
        _this.lastResponseTime = null;
        return _this;
    }
    Object.defineProperty(Attendee.prototype, "ResponseType", {
        /**
         * Gets the type of response the attendee gave to the meeting invitation it received.
         */
        get: function () {
            return this.responseType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Attendee.prototype, "LastResponseTime", {
        /**
         * Gets the date and time when the attendee last responded to a meeting invitation or update.
         */
        get: function () {
            return this.lastResponseTime;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    Attendee.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            if (key.indexOf("__") === 0) {
                continue;
            }
            switch (key) {
                case XmlElementNames_1.XmlElementNames.Mailbox:
                    _super.prototype.LoadFromXmlJsObject.call(this, jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.ResponseType:
                    this.responseType = MeetingResponseType_1.MeetingResponseType[jsObject[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.LastResponseTime:
                    this.lastResponseTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    Attendee.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(this.Namespace, XmlElementNames_1.XmlElementNames.Mailbox);
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteEndElement();
    };
    return Attendee;
}(EmailAddress_1.EmailAddress));
exports.Attendee = Attendee;
