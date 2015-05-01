
    class Recurrence extends ComplexProperty {
        XmlElementName: string;
        IsRegenerationPattern: boolean;
        StartDate: Date;
        HasEnd: boolean;
        NumberOfOccurrences: number;
        EndDate: Date;
        private startDate: Date;
        private numberOfOccurrences: number;
        private endDate: Date;
        GetFieldValueOrThrowIfNull(value: any, name: string): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        IsSame(otherRecurrence: Recurrence): boolean { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        NeverEnds(): any { throw new Error("Not implemented."); }
        PatternToJson(service: ExchangeService): JsonObject { throw new Error("Not implemented."); }
        RangeToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
