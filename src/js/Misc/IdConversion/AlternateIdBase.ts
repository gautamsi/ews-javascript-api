import IdFormat = require("../../Enumerations/IdFormat");
import JsonObject = require("../../Core/JsonObject");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
class AlternateIdBase {//ISelfValidate, IJsonSerializable
    Format: IdFormat;
    GetXmlElementName(): string { throw new Error("AlternateIdBase.ts - GetXmlElementName : Not implemented."); }
    InternalToJson(jsonObject: JsonObject): any { throw new Error("AlternateIdBase.ts - InternalToJson : Not implemented."); }
    InternalValidate(): any { throw new Error("AlternateIdBase.ts - InternalValidate : Not implemented."); }
    LoadAttributesFromJson(responseObject: JsonObject): any { throw new Error("AlternateIdBase.ts - LoadAttributesFromJson : Not implemented."); }
    LoadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("AlternateIdBase.ts - LoadAttributesFromXml : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("AlternateIdBase.ts - WriteAttributesToXml : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("AlternateIdBase.ts - WriteToXml : Not implemented."); }
}
export = AlternateIdBase;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
