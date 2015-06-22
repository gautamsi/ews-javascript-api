import {AlternateIdBase} from "./AlternateIdBase";
import {JsonObject} from "../../Core/JsonObject";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class AlternatePublicFolderId extends AlternateIdBase {
    static SchemaTypeName: string = "AlternatePublicFolderIdType";
    FolderId: string;
    GetXmlElementName(): string { throw new Error("AlternatePublicFolderId.ts - GetXmlElementName : Not implemented."); }
    InternalToJson(jsonObject: JsonObject): any { throw new Error("AlternatePublicFolderId.ts - InternalToJson : Not implemented."); }
    LoadAttributesFromJson(responseObject: JsonObject): any { throw new Error("AlternatePublicFolderId.ts - LoadAttributesFromJson : Not implemented."); }
    LoadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("AlternatePublicFolderId.ts - LoadAttributesFromXml : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("AlternatePublicFolderId.ts - WriteAttributesToXml : Not implemented."); }
}


//}



