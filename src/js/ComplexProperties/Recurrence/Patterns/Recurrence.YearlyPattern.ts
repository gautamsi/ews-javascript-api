			
 class YearlyPattern extends Recurrence {
	XmlElementName: string;
	Month: Month;
	DayOfMonth: number;
	private month: any /*Nullable<Month>*/;
	private dayOfMonth: number;
	InternalValidate(): void{ throw new Error("Not implemented.");}
	InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	PatternToJson(service: ExchangeService): JsonObject{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
}
export = YearlyPattern;


//------------modulename->Microsoft.Exchange.WebServices.Data.Recurrence------------


			