import AlternateIdBase = require("./AlternateIdBase");
import JsonObject = require("../../Core/JsonObject");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
class AlternateId extends AlternateIdBase {
    UniqueId: string;
    Mailbox: string;
    IsArchive: boolean;
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    InternalToJson(jsonObject: JsonObject): any { throw new Error("Not implemented."); }
    InternalValidate(): any { throw new Error("Not implemented."); }
    LoadAttributesFromJson(responseObject: JsonObject): any { throw new Error("Not implemented."); }
    LoadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = AlternateId;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
