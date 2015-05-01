
    class WorkingPeriod extends ComplexProperty {
        DaysOfWeek: DayOfTheWeek /*System.Collections.ObjectModel.Collection<DayOfTheWeek>*/;
        StartTime: any /*System.TimeSpan*/;
        EndTime: any /*System.TimeSpan*/;
        private daysOfWeek: DayOfTheWeek /*System.Collections.ObjectModel.Collection<DayOfTheWeek>*/;
        private startTime: any /*System.TimeSpan*/;
        private endTime: any /*System.TimeSpan*/;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

