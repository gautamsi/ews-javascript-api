			
 class ExcludesBitmask extends PropertyBasedFilter {
	Bitmask: number;
	private bitmask: number;
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	InternalToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = ExcludesBitmask;


//------------modulename->Microsoft.Exchange.WebServices.Data.SearchFilter------------


			