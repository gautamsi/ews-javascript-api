"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var MeetingAttendeeType_1 = require("../../Enumerations/MeetingAttendeeType");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
/**
 * Represents information about an attendee for which to request availability information.
 *
 * @sealed
 */
var AttendeeInfo = /** @class */ (function () {
    function AttendeeInfo(smtpAddress, attendeeType, excludeConflicts) {
        if (smtpAddress === void 0) { smtpAddress = null; }
        if (attendeeType === void 0) { attendeeType = MeetingAttendeeType_1.MeetingAttendeeType.Required; }
        if (excludeConflicts === void 0) { excludeConflicts = false; }
        /**
         * Gets or sets the SMTP address of this attendee.
         */
        this.SmtpAddress = null;
        /**
         * Gets or sets the type of this attendee.
         */
        this.AttendeeType = MeetingAttendeeType_1.MeetingAttendeeType.Required;
        /**
         * Gets or sets a value indicating whether times when this attendee is not available should be returned.
         */
        this.ExcludeConflicts = false;
        this.SmtpAddress = smtpAddress;
        this.AttendeeType = attendeeType;
        this.ExcludeConflicts = excludeConflicts;
    }
    /**
     * Validates this instance.
     *
     * ISelfValidate.Validate
     */
    AttendeeInfo.prototype.Validate = function () {
        EwsUtilities_1.EwsUtilities.ValidateParam(this.SmtpAddress, "SmtpAddress");
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    AttendeeInfo.prototype.WriteToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MailboxData);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Email);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Address, this.SmtpAddress);
        writer.WriteEndElement(); // Email
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.AttendeeType, MeetingAttendeeType_1.MeetingAttendeeType[this.AttendeeType]);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ExcludeConflicts, this.ExcludeConflicts);
        writer.WriteEndElement(); // MailboxData
    };
    return AttendeeInfo;
}());
exports.AttendeeInfo = AttendeeInfo;
