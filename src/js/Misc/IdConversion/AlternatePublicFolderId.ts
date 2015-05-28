import AlternateIdBase = require("./AlternateIdBase");
import JsonObject = require("../../Core/JsonObject");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
class AlternatePublicFolderId extends AlternateIdBase {
    static SchemaTypeName: string = "AlternatePublicFolderIdType";
    FolderId: string;
    GetXmlElementName(): string { throw new Error("AlternatePublicFolderId.ts - GetXmlElementName : Not implemented."); }
    InternalToJson(jsonObject: JsonObject): any { throw new Error("AlternatePublicFolderId.ts - InternalToJson : Not implemented."); }
    LoadAttributesFromJson(responseObject: JsonObject): any { throw new Error("AlternatePublicFolderId.ts - LoadAttributesFromJson : Not implemented."); }
    LoadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("AlternatePublicFolderId.ts - LoadAttributesFromXml : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("AlternatePublicFolderId.ts - WriteAttributesToXml : Not implemented."); }
}
export = AlternatePublicFolderId;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
