import AlternatePublicFolderId = require("./AlternatePublicFolderId");
import JsonObject = require("../../Core/JsonObject");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
class AlternatePublicFolderItemId extends AlternatePublicFolderId {
    ItemId: string;
    private itemId: string;
    GetXmlElementName(): string { throw new Error("AlternatePublicFolderItemId.ts - GetXmlElementName : Not implemented."); }
    InternalToJson(jsonObject: JsonObject): any { throw new Error("AlternatePublicFolderItemId.ts - InternalToJson : Not implemented."); }
    LoadAttributesFromJson(responseObject: JsonObject): any { throw new Error("AlternatePublicFolderItemId.ts - LoadAttributesFromJson : Not implemented."); }
    LoadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("AlternatePublicFolderItemId.ts - LoadAttributesFromXml : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("AlternatePublicFolderItemId.ts - WriteAttributesToXml : Not implemented."); }
}
export = AlternatePublicFolderItemId;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
