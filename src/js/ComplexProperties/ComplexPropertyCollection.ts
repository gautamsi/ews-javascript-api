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
    ClearChangeLog(): any { throw new Error("Not implemented."); }
    Contains(complexProperty: TComplexProperty): boolean { throw new Error("Not implemented."); }
    CreateComplexProperty(xmlElementName: string): TComplexProperty { throw new Error("Not implemented."); }
    CreateDefaultComplexProperty(): TComplexProperty { throw new Error("Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: TComplexProperty): string { throw new Error("Not implemented."); }
    GetEnumerator(): any { throw new Error("Not implemented."); }
    IndexOf(complexProperty: TComplexProperty): number { throw new Error("Not implemented."); }
    //InternalAdd(complexProperty: TComplexProperty): any { throw new Error("Not implemented."); }
    InternalAdd(complexProperty: TComplexProperty, loading: boolean): any { throw new Error("Not implemented."); }
    InternalClear(): any { throw new Error("Not implemented."); }
    InternalRemove(complexProperty: TComplexProperty): boolean { throw new Error("Not implemented."); }
    InternalRemoveAt(index: number): any { throw new Error("Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    ItemChanged(complexProperty: ComplexProperty): any { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader, localElementName: string, xmlNamespace?: XmlNamespace): any { throw new Error("Not implemented."); }
    //LoadFromXml(reader: EwsServiceXmlReader, localElementName: string): any { throw new Error("Not implemented."); }
    RemoveFromChangeLog(complexProperty: TComplexProperty): any { throw new Error("Not implemented."); }
    ShouldWriteToRequest(): boolean { throw new Error("Not implemented."); }
    UpdateFromXml(reader: EwsServiceXmlReader, xmlElementName: string, xmlNamespace?: XmlNamespace): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, xmlNamespace?: XmlNamespace): any { throw new Error("Not implemented."); }
}
export = ComplexPropertyCollection;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
