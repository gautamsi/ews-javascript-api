import ComplexProperty = require("./ComplexProperty");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class StringList extends ComplexProperty {
    Count: number;
    Item: string;
    private items: string[] /*System.Collections.Generic.List<string>*/;
    private itemXmlElementName: string;
    Add(s: string): any { throw new Error("StringList.ts - Add : Not implemented."); }
    AddRange(strings: string[] /*System.Collections.Generic.IEnumerable<string>*/): any { throw new Error("StringList.ts - AddRange : Not implemented."); }
    Clear(): any { throw new Error("StringList.ts - Clear : Not implemented."); }
    Contains(s: string): boolean { throw new Error("StringList.ts - Contains : Not implemented."); }
    Equals(obj: any): boolean { throw new Error("StringList.ts - Equals : Not implemented."); }
    GetEnumerator(): any { throw new Error("StringList.ts - GetEnumerator : Not implemented."); }
    GetHashCode(): number { throw new Error("StringList.ts - GetHashCode : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("StringList.ts - InternalToJson : Not implemented."); }
    Remove(s: string): boolean { throw new Error("StringList.ts - Remove : Not implemented."); }
    RemoveAt(index: number): any { throw new Error("StringList.ts - RemoveAt : Not implemented."); }
    ToString(): string { throw new Error("StringList.ts - ToString : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("StringList.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("StringList.ts - WriteElementsToXml : Not implemented."); }
}
export = StringList;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
