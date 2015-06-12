import {IdFormat} from "../../Enumerations/IdFormat";
import {JsonObject} from "../../Core/JsonObject";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class AlternateIdBase {//ISelfValidate, IJsonSerializable
    Format: IdFormat;
    GetXmlElementName(): string { throw new Error("AlternateIdBase.ts - GetXmlElementName : Not implemented."); }
    InternalToJson(jsonObject: JsonObject): any { throw new Error("AlternateIdBase.ts - InternalToJson : Not implemented."); }
    InternalValidate(): any { throw new Error("AlternateIdBase.ts - InternalValidate : Not implemented."); }
    LoadAttributesFromJson(responseObject: JsonObject): any { throw new Error("AlternateIdBase.ts - LoadAttributesFromJson : Not implemented."); }
    LoadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("AlternateIdBase.ts - LoadAttributesFromXml : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("AlternateIdBase.ts - WriteAttributesToXml : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("AlternateIdBase.ts - WriteToXml : Not implemented."); }
}


//}



