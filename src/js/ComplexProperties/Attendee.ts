import {EmailAddress} from "./EmailAddress";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {MeetingResponseType} from "../Enumerations/MeetingResponseType";
export class Attendee extends EmailAddress {
    ResponseType: MeetingResponseType;
    LastResponseTime: Date;
    private responseType: MeetingResponseType;
    private lastResponseTime: Date;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("Attendee.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Attendee.ts - WriteElementsToXml : Not implemented."); }
}


