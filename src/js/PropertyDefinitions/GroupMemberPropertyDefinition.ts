import ServiceObjectPropertyDefinition = require("./ServiceObjectPropertyDefinition");
import XmlElementNames = require("../Core/XmlElementNames");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import {StringHelper} from "../ExtensionMethods";
import XmlAttributeNames = require("../Core/XmlAttributeNames");
class GroupMemberPropertyDefinition extends ServiceObjectPropertyDefinition {
    private static FieldUri: string = "distributionlist:Members:Member";
    Key: string;
    Type: any;// System.Type;
    //private key: string;

    constructor(key?: string) {
        super(GroupMemberPropertyDefinition.FieldUri);
        this.Key = key;
    }
    //AddJsonProperties(jsonPropertyDefinition: JsonObject, service: ExchangeService): any { throw new Error("GroupMemberPropertyDefinition.ts - AddJsonProperties : Not implemented."); }
    //GetJsonType(): string { throw new Error("GroupMemberPropertyDefinition.ts - GetJsonType : Not implemented."); }

    GetPrintableName(): string { return StringHelper.Format("{0}:{1}", GroupMemberPropertyDefinition.FieldUri, this.Key); }
    GetXmlElementName(): string { return XmlElementNames.IndexedFieldURI; }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        super.WriteAttributesToXml(writer);
        writer.WriteAttributeValue("", XmlAttributeNames.FieldIndex, this.Key);
    }
}
export = GroupMemberPropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
