			
 class RelationalFilter extends PropertyBasedFilter {
	OtherPropertyDefinition: PropertyDefinitionBase;
	Value: any;
	private otherPropertyDefinition: PropertyDefinitionBase;
	private value: any;
	InternalToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
	InternalValidate(): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = RelationalFilter;


//------------modulename->Microsoft.Exchange.WebServices.Data.SearchFilter------------


			