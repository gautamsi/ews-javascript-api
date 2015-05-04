import ComplexProperty = require("./ComplexProperty");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class StringList extends ComplexProperty {
    Count: number;
    Item: string;
    private items: string[] /*System.Collections.Generic.List<string>*/;
    private itemXmlElementName: string;
    Add(s: string): any { throw new Error("Not implemented."); }
    AddRange(strings: string[] /*System.Collections.Generic.IEnumerable<string>*/): any { throw new Error("Not implemented."); }
    Clear(): any { throw new Error("Not implemented."); }
    Contains(s: string): boolean { throw new Error("Not implemented."); }
    Equals(obj: any): boolean { throw new Error("Not implemented."); }
    GetEnumerator(): any { throw new Error("Not implemented."); }
    GetHashCode(): number { throw new Error("Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    Remove(s: string): boolean { throw new Error("Not implemented."); }
    RemoveAt(index: number): any { throw new Error("Not implemented."); }
    ToString(): string { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = StringList;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
