import ExtractedEntity = require("./ExtractedEntity");
import EmailUserEntityCollection = require("./EmailUserEntityCollection");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");

class TaskSuggestion extends ExtractedEntity {
    TaskString: string;
    Assignees: EmailUserEntityCollection;
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
}
export = TaskSuggestion;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
