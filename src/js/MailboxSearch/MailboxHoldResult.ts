import MailboxHoldStatus = require("./MailboxHoldStatus");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
class MailboxHoldResult {
    HoldId: string;
    Query: string;
    Statuses: MailboxHoldStatus[];
    LoadFromJson(jsonObject: JsonObject): MailboxHoldResult { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): MailboxHoldResult { throw new Error("Not implemented."); }
}
export = MailboxHoldResult;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;



