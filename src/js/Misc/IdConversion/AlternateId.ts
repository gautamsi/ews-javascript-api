import {AlternateIdBase} from "./AlternateIdBase";
import {JsonObject} from "../../Core/JsonObject";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class AlternateId extends AlternateIdBase {
    static SchemaTypeName: string = "AlternateIdType";
    UniqueId: string;
    Mailbox: string;
    IsArchive: boolean;
    GetXmlElementName(): string { throw new Error("AlternateId.ts - GetXmlElementName : Not implemented."); }
    InternalToJson(jsonObject: JsonObject): any { throw new Error("AlternateId.ts - InternalToJson : Not implemented."); }
    InternalValidate(): any { throw new Error("AlternateId.ts - InternalValidate : Not implemented."); }
    LoadAttributesFromJson(responseObject: JsonObject): any { throw new Error("AlternateId.ts - LoadAttributesFromJson : Not implemented."); }
    LoadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("AlternateId.ts - LoadAttributesFromXml : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("AlternateId.ts - WriteAttributesToXml : Not implemented."); }
}


//}



