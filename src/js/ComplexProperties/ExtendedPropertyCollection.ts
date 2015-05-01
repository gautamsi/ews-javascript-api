
import ComplexPropertyCollection = require("./ComplexPropertyCollection");
class ExtendedPropertyCollection extends ComplexPropertyCollection<ExtendedProperty> {
    CreateComplexProperty(xmlElementName: string): ExtendedProperty { throw new Error("Not implemented."); }
    CreateDefaultComplexProperty(): ExtendedProperty { throw new Error("Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: ExtendedProperty): string { throw new Error("Not implemented."); }
    GetOrAddExtendedProperty(propertyDefinition: ExtendedPropertyDefinition): ExtendedProperty { throw new Error("Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader, localElementName: string): any { throw new Error("Not implemented."); }
    RemoveExtendedProperty(propertyDefinition: ExtendedPropertyDefinition): boolean { throw new Error("Not implemented."); }
    SetExtendedProperty(propertyDefinition: ExtendedPropertyDefinition, value: any): any { throw new Error("Not implemented."); }
    TryGetProperty(propertyDefinition: ExtendedPropertyDefinition, extendedProperty: any): boolean { throw new Error("Not implemented."); }
    TryGetValue(propertyDefinition: ExtendedPropertyDefinition, propertyValue: any): boolean { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("Not implemented."); }
}
export = ExtendedProperty;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
