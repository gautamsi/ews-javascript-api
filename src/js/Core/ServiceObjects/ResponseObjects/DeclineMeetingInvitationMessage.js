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
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var XmlElementNames_1 = require("../../XmlElementNames");
var CalendarResponseMessage_1 = require("./CalendarResponseMessage");
/**
 * Represents a meeting declination message.
 */
var DeclineMeetingInvitationMessage = /** @class */ (function (_super) {
    __extends(DeclineMeetingInvitationMessage, _super);
    /**
     * Initializes a new instance of the **DeclineMeetingInvitationMessage** class.
     *
     * @param   {Item}   referenceItem   The reference item.
     */
    function DeclineMeetingInvitationMessage(referenceItem) {
        return _super.call(this, referenceItem) || this;
    }
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    DeclineMeetingInvitationMessage.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    DeclineMeetingInvitationMessage.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.DeclineItem; };
    return DeclineMeetingInvitationMessage;
}(CalendarResponseMessage_1.CalendarResponseMessage));
exports.DeclineMeetingInvitationMessage = DeclineMeetingInvitationMessage;
