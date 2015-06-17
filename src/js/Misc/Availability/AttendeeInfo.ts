import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {MeetingAttendeeType} from "../../Enumerations/MeetingAttendeeType";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class AttendeeInfo {
    SmtpAddress: string = null;
    AttendeeType: MeetingAttendeeType = MeetingAttendeeType.Required;
    ExcludeConflicts: boolean = false;
    // private smtpAddress: string; backing property not neede
    // private attendeeType: MeetingAttendeeType;
    // private excludeConflicts: boolean;
    
    constructor();
    constructor(smtpAddress?: string);
    constructor(smtpAddress?: string, attendeeType?: MeetingAttendeeType, excludeConflicts?: boolean);
    constructor(smtpAddress?: string, attendeeType: MeetingAttendeeType = MeetingAttendeeType.Required, excludeConflicts: boolean = false) {
        this.SmtpAddress = smtpAddress;
        this.AttendeeType = attendeeType;
        this.ExcludeConflicts = excludeConflicts;
    }

    Validate(): void {
        //EwsUtilities.ValidateParam(this.smtpAddress, "SmtpAddress");
    }
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



