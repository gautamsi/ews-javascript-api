
import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import XmlAttributeNames = require("../Core/XmlAttributeNames");
import XmlElementNames = require("../Core/XmlElementNames");
import XmlNamespace = require("../Enumerations/XmlNamespace");

import ServiceObjectSchema = require("../Core/ServiceObjects/Schemas/ServiceObjectSchema");

import IOutParam = require("../Interfaces/IOutParam");

class PropertyDefinitionBase {
    Version: ExchangeVersion;
    Type: any; //System.Type;
    constructor() { }
    //AddJsonProperties(jsonPropertyDefinition: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
    //GetJsonType(): string{ throw new Error("Not implemented.");}
    GetPrintableName(): string { throw new Error("abstract methos, must implement"); }
    GetXmlElementName(): string { throw new Error("abstract methos, must implement"); }
    ToString(): string { return this.GetPrintableName(); }
    //TryLoadFromJson(jsonObject: JsonObject): PropertyDefinitionBase{ throw new Error("Not implemented.");}

    //ToDO --------------removed due to circular dependency issuew ith commonjs and requirejs --------------find fix if needed based on searchfilter.propertybasedFilter------------ move to separate file so that it does not attract circular dependency
    ////static TryLoadFromXml(reader: EwsServiceXmlReader, outParam: IOutParam<PropertyDefinitionBase> /* propertyDefinition: any*/): boolean {
    ////    //var propertyDefinition = null;
    ////    outParam.value = null;
    ////    switch (reader.LocalName) {
    ////        case XmlElementNames.FieldURI:
    ////            debugger;//todo: implement serviceobjectschema method
    ////            outParam.value /*propertyDefinition*/ = ServiceObjectSchema.FindPropertyDefinition(reader.ReadAttributeValue(XmlNamespace.NotSpecified, XmlAttributeNames.FieldURI));
    ////            reader.SkipCurrentElement();
    ////            return true;
    ////        case XmlElementNames.IndexedFieldURI:
    ////            outParam.value = new IndexedPropertyDefinition(
    ////                reader.ReadAttributeValue(XmlNamespace.NotSpecified, XmlAttributeNames.FieldURI),
    ////                reader.ReadAttributeValue(XmlNamespace.NotSpecified, XmlAttributeNames.FieldIndex));
    ////            reader.SkipCurrentElement();
    ////            return true;
    ////        case XmlElementNames.ExtendedFieldURI:
    ////            outParam.value = new ExtendedPropertyDefinition();
    ////            (<ExtendedPropertyDefinition>outParam.value).LoadFromXml(reader);
    ////            return true;
    ////        default:
    ////            return false;
    ////    }
    ////}
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void { throw new Error("abstract methos, must implement"); }
    WriteToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Types, this.GetXmlElementName());
        this.WriteAttributesToXml(writer);
        writer.WriteEndElement();
    }
}
export = PropertyDefinitionBase;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
