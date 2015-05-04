import NonIndexableItem = require("./NonIndexableItem");
import FailedSearchMailbox = require("./FailedSearchMailbox");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
class NonIndexableItemDetailsResult {
    Items: NonIndexableItem[];
    FailedMailboxes: FailedSearchMailbox[];
    LoadFromJson(jsonObject: JsonObject): NonIndexableItemDetailsResult { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): NonIndexableItemDetailsResult { throw new Error("Not implemented."); }
}
export = NonIndexableItemDetailsResult;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
