import EmailAddress = require("./EmailAddress");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import MeetingResponseType = require("../Enumerations/MeetingResponseType");
class Attendee extends EmailAddress {
    ResponseType: MeetingResponseType;
    LastResponseTime: Date;
    private responseType: MeetingResponseType;
    private lastResponseTime: Date;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("Attendee.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Attendee.ts - WriteElementsToXml : Not implemented."); }
}

export = Attendee;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
