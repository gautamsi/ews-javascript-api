
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ServiceObjectSchema} from "../Core/ServiceObjects/Schemas/ServiceObjectSchema";

import {IOutParam} from "../Interfaces/IOutParam";
export class PropertyDefinitionBase {
    Version: ExchangeVersion;
    Type: any; //System.Type;
    constructor() { }
    //AddJsonProperties(jsonPropertyDefinition: JsonObject, service: ExchangeService): any{ throw new Error("PropertyDefinitionBase.ts - AddJsonProperties : Not implemented.");}
    //GetJsonType(): string{ throw new Error("PropertyDefinitionBase.ts - GetJsonType : Not implemented.");}
    GetPrintableName(): string { throw new Error("PropertyDefinitionBase - GetPrintableName: abstract methos, must implement"); }
    GetXmlElementName(): string { throw new Error("PropertyDefinitionBase - GetXmlElementName: abstract methos, must implement"); }
    ToString(): string { return this.GetPrintableName(); }
    //TryLoadFromJson(jsonObject: JsonObject): PropertyDefinitionBase{ throw new Error("PropertyDefinitionBase.ts - TryLoadFromJson : Not implemented.");}

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
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void { throw new Error("PropertyDefinitionBase - WriteAttributesToXml: abstract methos, must implement"); }
    WriteToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Types, this.GetXmlElementName());
        this.WriteAttributesToXml(writer);
        writer.WriteEndElement();
    }
}