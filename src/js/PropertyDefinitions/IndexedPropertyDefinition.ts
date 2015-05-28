import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import XmlAttributeNames = require("../Core/XmlAttributeNames");
import XmlElementNames = require("../Core/XmlElementNames");

import {StringHelper} from "../ExtensionMethods";

import ServiceObjectPropertyDefinition = require("./ServiceObjectPropertyDefinition");
class IndexedPropertyDefinition extends ServiceObjectPropertyDefinition {
    get Index(): string { return this.index; }
    get Type(): string { return 'string'; /*return typeof string;*/ } //System.Type;
    private index: string;

    constructor(uri: string, index: string) {
        super(uri);
        this.index = index;
    }

    //AddJsonProperties(jsonPropertyDefinition: JsonObject, service: ExchangeService): any { throw new Error("IndexedPropertyDefinition.ts - AddJsonProperties : Not implemented."); }
    Equals(obj: any): boolean {
        var propertyDefinition = <IndexedPropertyDefinition>obj;
        return IndexedPropertyDefinition.IsEqualTo(propertyDefinition, this);
    }
    GetHashCode(): number { throw new Error("IndexedPropertyDefinition.ts - GetHashCode : Not implemented."); }
    //GetJsonType(): string { throw new Error("IndexedPropertyDefinition.ts - GetJsonType : Not implemented."); }
    GetPrintableName(): string { return StringHelper.Format("{0}:{1}", this.Uri, this.Index); }
    GetXmlElementName(): string { return XmlElementNames.IndexedFieldURI; }
    static IsEqualTo(idxPropDef1: IndexedPropertyDefinition, idxPropDef2: IndexedPropertyDefinition): boolean {
        return idxPropDef1 === idxPropDef2 ||
            (idxPropDef1.Uri == idxPropDef2.Uri &&
                idxPropDef1.Index == idxPropDef2.Index);
    }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        super.WriteAttributesToXml(writer);
        writer.WriteAttributeValue("", XmlAttributeNames.FieldIndex, this.Index);
    }
}
export = IndexedPropertyDefinition;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
