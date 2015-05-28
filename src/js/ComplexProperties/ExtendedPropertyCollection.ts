import ExtendedProperty = require("./ExtendedProperty");
import ExtendedPropertyDefinition = require("../PropertyDefinitions/ExtendedPropertyDefinition");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

import ComplexPropertyCollection = require("./ComplexPropertyCollection");
class ExtendedPropertyCollection extends ComplexPropertyCollection<ExtendedProperty> {
    CreateComplexProperty(xmlElementName: string): ExtendedProperty { throw new Error("ExtendedPropertyCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): ExtendedProperty { throw new Error("ExtendedPropertyCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: ExtendedProperty): string { throw new Error("ExtendedPropertyCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
    GetOrAddExtendedProperty(propertyDefinition: ExtendedPropertyDefinition): ExtendedProperty { throw new Error("ExtendedPropertyCollection.ts - GetOrAddExtendedProperty : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("ExtendedPropertyCollection.ts - InternalToJson : Not implemented."); }
    LoadFromXmlJsObject(reader: EwsServiceXmlReader, localElementName: string): any { throw new Error("ExtendedPropertyCollection.ts - LoadFromXmlJsObject : Not implemented."); }
    RemoveExtendedProperty(propertyDefinition: ExtendedPropertyDefinition): boolean { throw new Error("ExtendedPropertyCollection.ts - RemoveExtendedProperty : Not implemented."); }
    SetExtendedProperty(propertyDefinition: ExtendedPropertyDefinition, value: any): any { throw new Error("ExtendedPropertyCollection.ts - SetExtendedProperty : Not implemented."); }
    TryGetProperty(propertyDefinition: ExtendedPropertyDefinition, extendedProperty: any): boolean { throw new Error("ExtendedPropertyCollection.ts - TryGetProperty : Not implemented."); }
    TryGetValue(propertyDefinition: ExtendedPropertyDefinition, propertyValue: any): boolean { throw new Error("ExtendedPropertyCollection.ts - TryGetValue : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("ExtendedPropertyCollection.ts - WriteToXml : Not implemented."); }
}
export = ExtendedProperty;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
