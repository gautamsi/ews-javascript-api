import {AlternatePublicFolderId} from "./AlternatePublicFolderId";
import {JsonObject} from "../../Core/JsonObject";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class AlternatePublicFolderItemId extends AlternatePublicFolderId {
    ItemId: string;
    private itemId: string;
    GetXmlElementName(): string { throw new Error("AlternatePublicFolderItemId.ts - GetXmlElementName : Not implemented."); }
    InternalToJson(jsonObject: JsonObject): any { throw new Error("AlternatePublicFolderItemId.ts - InternalToJson : Not implemented."); }
    LoadAttributesFromJson(responseObject: JsonObject): any { throw new Error("AlternatePublicFolderItemId.ts - LoadAttributesFromJson : Not implemented."); }
    LoadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("AlternatePublicFolderItemId.ts - LoadAttributesFromXml : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("AlternatePublicFolderItemId.ts - WriteAttributesToXml : Not implemented."); }
}


//}



