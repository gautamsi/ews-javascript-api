import {XmlElementNames} from "../Core/XmlElementNames";
import {Strings} from "../Strings";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {ComplexProperty} from "./ComplexProperty";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class StringList extends ComplexProperty { // IEnumerable<string>, IJsonCollectionDeserializer
    get Count(): number { return this.items.length; }
    get Items(): string[] { return this.items; }
    private items: string[] = [];// /*System.Collections.Generic.List<string>*/;
    private itemXmlElementName: string = XmlElementNames.String;

    constructor(stringOrItemXmlElementName?: string| string[]) {
        super();
        if (typeof stringOrItemXmlElementName !== 'undefined') {
            if (typeof stringOrItemXmlElementName === 'string') {
                this.itemXmlElementName = stringOrItemXmlElementName;
            }
            else {
                this.AddRange(stringOrItemXmlElementName);
            }
        }
    }

    _getItem(index: number): string {
        if (index < 0 || index >= this.Count) {
            throw new Error("index - " + Strings.IndexIsOutOfRange);//ArgumentOutOfRangeException
        }
        return this.items[index];
    }
    _setItem(index: number, value: string): void {
        if (index < 0 || index >= this.Count) {
            throw new Error("index - " + Strings.IndexIsOutOfRange);//ArgumentOutOfRangeException
        }
        if (this.items[index] !== value) {
            this.items[index] = value;
            this.Changed();
        }
    }


    Add(s: string): void {
        this.items.push(s);
        this.Changed();
    }
    AddRange(strings: string[] /*System.Collections.Generic.IEnumerable<string>*/): void {
        var changed = false;

        for (var s of strings) {
            if (!this.Contains(s)) {
                this.items.push(s);
                changed = true;
            }
        }

        if (changed) {
            this.Changed();
        }
    }
    Clear(): void {
        this.items.splice(0);
        this.Changed();
    }
    Contains(s: string): boolean { return this.items.indexOf(s) >= 0; }
    Equals(obj: any): boolean { throw new Error("StringList.ts - Equals : Not implemented."); }
    GetEnumerator(): any { throw new Error("StringList.ts - GetEnumerator : Not implemented."); }
    GetHashCode(): number { throw new Error("StringList.ts - GetHashCode : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("StringList.ts - InternalToJson : Not implemented."); }
    Remove(s: string): boolean {
        var index = this.items.indexOf(s);
        if (index >= 0) {
            this.RemoveAt(index);
            this.Changed();
            return true;
        }
        return false;
    }
    RemoveAt(index: number): void {
        if (index < 0 || index >= this.Count) {
            throw new Error("index - " + Strings.IndexIsOutOfRange);//ArgumentOutOfRangeException
        }
        this.items.splice(index, 1);
        this.Changed();
    }
    ToString(): string { return this.items.join(","); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { debugger; throw new Error("StringList.ts - TryReadElementFromXmlJsObject : Not implemented."); return null;}
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        for (var item of this.items) {
            writer.WriteStartElement(XmlNamespace.Types, this.itemXmlElementName);
            writer.WriteValue(item, this.itemXmlElementName);
            writer.WriteEndElement();
        }
    }
}


//}



