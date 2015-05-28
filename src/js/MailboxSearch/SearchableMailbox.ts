import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
class SearchableMailbox {
    Guid: any;//System.Guid;
    SmtpAddress: string;
    IsExternalMailbox: boolean;
    ExternalEmailAddress: string;
    DisplayName: string;
    IsMembershipGroup: boolean;
    ReferenceId: string;
    LoadFromJson(jsonObject: JsonObject): SearchableMailbox { throw new Error("SearchableMailbox.ts - LoadFromJson : Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): SearchableMailbox { throw new Error("SearchableMailbox.ts - LoadFromXml : Not implemented."); }
}
export = SearchableMailbox;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
