
    class LegacyAvailabilityTimeZoneTime extends ComplexProperty {
        HasTransitionTime: boolean;
        Delta: any /*System.TimeSpan*/;
        TimeOfDay: any /*System.TimeSpan*/;
        DayOrder: number;
        Month: number;
        DayOfTheWeek: DayOfTheWeek;
        Year: number;
        private delta: any /*System.TimeSpan*/;
        private year: number;
        private month: number;
        private dayOrder: number;
        private dayOfTheWeek: DayOfTheWeek;
        private timeOfDay: any /*System.TimeSpan*/;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ToTransitionTime(): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
