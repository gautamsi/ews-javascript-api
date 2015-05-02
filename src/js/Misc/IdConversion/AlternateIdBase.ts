class AlternateIdBase {//ISelfValidate, IJsonSerializable
    Format: IdFormat;
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    InternalToJson(jsonObject: JsonObject): any { throw new Error("Not implemented."); }
    InternalValidate(): any { throw new Error("Not implemented."); }
    LoadAttributesFromJson(responseObject: JsonObject): any { throw new Error("Not implemented."); }
    LoadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = AlternateIdBase;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
