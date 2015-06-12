import {MeetingAttendeeType} from "../../Enumerations/MeetingAttendeeType";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class AttendeeInfo {
    SmtpAddress: string;
    AttendeeType: MeetingAttendeeType;
    ExcludeConflicts: boolean;
    private smtpAddress: string;
    private attendeeType: MeetingAttendeeType;
    private excludeConflicts: boolean;
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("AttendeeInfo.ts - WriteToXml : Not implemented."); }
}



//}



