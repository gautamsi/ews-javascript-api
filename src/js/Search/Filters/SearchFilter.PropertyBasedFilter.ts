			
 class PropertyBasedFilter extends SearchFilter {
	PropertyDefinition: PropertyDefinitionBase;
	private propertyDefinition: PropertyDefinitionBase;
	InternalToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
	InternalValidate(): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = PropertyBasedFilter;


//------------modulename->Microsoft.Exchange.WebServices.Data.SearchFilter------------


			