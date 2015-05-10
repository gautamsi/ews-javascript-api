import ExtractedEntity = require("./ExtractedEntity");
import EmailUserEntityCollection = require("./EmailUserEntityCollection");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");

class MeetingSuggestion extends ExtractedEntity {
    Attendees: EmailUserEntityCollection;
    Location: string;
    Subject: string;
    MeetingString: string;
    StartTime: Date;
    EndTime: Date;
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
}
export = MeetingSuggestion;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
