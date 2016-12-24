import { EwsServiceXmlWriter } from "../../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../../Core/EwsUtilities";
import { ISelfValidate } from "../../Interfaces/ISelfValidate";
import { MeetingAttendeeType } from "../../Enumerations/MeetingAttendeeType";
import { XmlElementNames } from "../../Core/XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

/**
 * Represents information about an attendee for which to request availability information.
 * 
 * @sealed
 */
export class AttendeeInfo implements ISelfValidate {

    /**
     * Gets or sets the SMTP address of this attendee.
     */
    SmtpAddress: string = null;

    /** 
     * Gets or sets the type of this attendee.
     */
    AttendeeType: MeetingAttendeeType = MeetingAttendeeType.Required;

    /**
     * Gets or sets a value indicating whether times when this attendee is not available should be returned.
     */
    ExcludeConflicts: boolean = false;

    /**
     * Initializes a new instance of the **AttendeeInfo** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **AttendeeInfo** class.
     *
     * @param   {string}    smtpAddress        The SMTP address of the attendee.
     */
    constructor(smtpAddress: string);
    /**
     * Initializes a new instance of the **AttendeeInfo** class.
     *
     * @param   {string}                smtpAddress        The SMTP address of the attendee.
     * @param   {MeetingAttendeeType}   attendeeType       The yype of the attendee.
     * @param   {boolean}               excludeConflicts   Indicates whether times when this attendee is not available should be returned.
     */
    constructor(smtpAddress: string, attendeeType: MeetingAttendeeType, excludeConflicts: boolean);
    constructor(smtpAddress: string = null, attendeeType: MeetingAttendeeType = MeetingAttendeeType.Required, excludeConflicts: boolean = false) {
        this.SmtpAddress = smtpAddress;
        this.AttendeeType = attendeeType;
        this.ExcludeConflicts = excludeConflicts;
    }

    /**
     * Validates this instance.
     * 
     * ISelfValidate.Validate
     */
    Validate(): void {
        EwsUtilities.ValidateParam(this.SmtpAddress, "SmtpAddress");
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.MailboxData);

        writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Email);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Address, this.SmtpAddress);
        writer.WriteEndElement(); // Email

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.AttendeeType,
            MeetingAttendeeType[this.AttendeeType]);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.ExcludeConflicts,
            this.ExcludeConflicts);

        writer.WriteEndElement(); // MailboxData
    }
}