class DayOfTheWeekCollection extends ComplexProperty {
    Item: DayOfTheWeek;
    Count: number;
    private items: any[];// System.Collections.Generic.List<T>;
    Add(dayOfTheWeek: DayOfTheWeek): any { throw new Error("Not implemented."); }
    AddRange(daysOfTheWeek: any /*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("Not implemented."); }
    Clear(): any { throw new Error("Not implemented."); }
    GetEnumerator(): any { throw new Error("Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromJsonValue(jsonValue: string): any { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): any { throw new Error("Not implemented."); }
    Remove(dayOfTheWeek: DayOfTheWeek): boolean { throw new Error("Not implemented."); }
    RemoveAt(index: number): any { throw new Error("Not implemented."); }
    ToString(separator?: string): string { throw new Error("Not implemented."); }
    //ToString(): string { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
