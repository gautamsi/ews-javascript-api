			
 class WeeklyPattern extends IntervalPattern {
	XmlElementName: string;
	DaysOfTheWeek: DayOfTheWeekCollection;
	FirstDayOfWeek: any /*System.DayOfWeek*/;
	private daysOfTheWeek: DayOfTheWeekCollection;
	private firstDayOfWeek: any /*System.Nullable<System.DayOfWeek>*/;
	DaysOfTheWeekChanged(complexProperty: ComplexProperty): void{ throw new Error("Not implemented.");}
	InternalValidate(): void{ throw new Error("Not implemented.");}
	InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	PatternToJson(service: ExchangeService): JsonObject{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
}
export = WeeklyPattern;


//------------modulename->Microsoft.Exchange.WebServices.Data.Recurrence------------


			