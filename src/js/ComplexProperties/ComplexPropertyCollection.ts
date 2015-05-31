import ExchangeService = require("../Core/ExchangeService");
import XmlNamespace = require("../Enumerations/XmlNamespace");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

import ComplexProperty = require("./ComplexProperty");
class ComplexPropertyCollection<TComplexProperty> extends ComplexProperty {
    ___implementsInterface: string[] = ["ISelfValidate", "IJsonSerializable", "IEnumerable<TComplexProperty>", "ICustomUpdateSerializer", "IJsonCollectionDeserialize"];
    ___typeName: string = "ComplexPropertyCollection";
    ___typeGenerics: string[] = ["ComplexProperty"];

    Items: TComplexProperty[] = [];  //System.Collections.Generic.List<TComplexProperty>;
    AddedItems: TComplexProperty[] = [];  //System.Collections.Generic.List<TComplexProperty>;
    ModifiedItems: TComplexProperty[] = [];  //System.Collections.Generic.List<TComplexProperty>;
    RemovedItems: TComplexProperty[] = [];  //System.Collections.Generic.List<TComplexProperty>;
    Count: number;
    Item: TComplexProperty;
    private items: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
    private addedItems: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
    private modifiedItems: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
    private removedItems: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
    ClearChangeLog(): any { throw new Error("ComplexPropertyCollection.ts - ClearChangeLog : Not implemented."); }
    Contains(complexProperty: TComplexProperty): boolean { throw new Error("ComplexPropertyCollection.ts - Contains : Not implemented."); }
    CreateComplexProperty(xmlElementName: string): TComplexProperty { throw new Error("ComplexPropertyCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): TComplexProperty { throw new Error("ComplexPropertyCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: TComplexProperty): string { throw new Error("ComplexPropertyCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
    GetEnumerator(): any { throw new Error("ComplexPropertyCollection.ts - GetEnumerator : Not implemented."); }
    IndexOf(complexProperty: TComplexProperty): number { throw new Error("ComplexPropertyCollection.ts - IndexOf : Not implemented."); }
    //InternalAdd(complexProperty: TComplexProperty): any { throw new Error("ComplexPropertyCollection.ts - InternalAdd : Not implemented."); }
    InternalAdd(complexProperty: TComplexProperty, loading: boolean = false): any { throw new Error("ComplexPropertyCollection.ts - InternalAdd : Not implemented."); }
    InternalClear(): any { throw new Error("ComplexPropertyCollection.ts - InternalClear : Not implemented."); }
    InternalRemove(complexProperty: TComplexProperty): boolean { throw new Error("ComplexPropertyCollection.ts - InternalRemove : Not implemented."); }
    InternalRemoveAt(index: number): any { throw new Error("ComplexPropertyCollection.ts - InternalRemoveAt : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("ComplexPropertyCollection.ts - InternalToJson : Not implemented."); }
    ItemChanged(complexProperty: ComplexProperty): any { throw new Error("ComplexPropertyCollection.ts - ItemChanged : Not implemented."); }
    LoadFromXmlJsObject(reader: EwsServiceXmlReader, localElementName: string, xmlNamespace?: XmlNamespace): any { throw new Error("ComplexPropertyCollection.ts - LoadFromXmlJsObject : Not implemented."); }
    //LoadFromXml(reader: EwsServiceXmlReader, localElementName: string): any { throw new Error("ComplexPropertyCollection.ts - LoadFromXml : Not implemented."); }
    RemoveFromChangeLog(complexProperty: TComplexProperty): any { throw new Error("ComplexPropertyCollection.ts - RemoveFromChangeLog : Not implemented."); }
    ShouldWriteToRequest(): boolean { throw new Error("ComplexPropertyCollection.ts - ShouldWriteToRequest : Not implemented."); }
    UpdateFromXmlJsObject(reader: EwsServiceXmlReader, xmlElementName: string, xmlNamespace?: XmlNamespace): any { throw new Error("ComplexPropertyCollection.ts - UpdateFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("ComplexPropertyCollection.ts - WriteElementsToXml : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, xmlNamespace?: XmlNamespace): any { throw new Error("ComplexPropertyCollection.ts - WriteToXml : Not implemented."); }
}
export = ComplexPropertyCollection;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
