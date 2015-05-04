			
 class RulePredicateDateRange extends ComplexProperty {
	Start: Date;
	End: Date;
	private start: Date;
	private end: Date;
	InternalToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
	InternalValidate(): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = RulePredicateDateRange;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			