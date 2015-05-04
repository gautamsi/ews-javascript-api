			
 class SearchFilterCollection extends SearchFilter {
	Count: number;
	Item: SearchFilter;
	LogicalOperator: LogicalOperator;
	private searchFilters: SearchFilter[] /*System.Collections.Generic.List<SearchFilter>*/;
	private logicalOperator: LogicalOperator;
	Add(searchFilter: SearchFilter): void{ throw new Error("Not implemented.");}
	AddRange(searchFilters: SearchFilter[] /*System.Collections.Generic.IEnumerable<SearchFilter>*/): void{ throw new Error("Not implemented.");}
	Clear(): void{ throw new Error("Not implemented.");}
	Contains(searchFilter: SearchFilter): boolean{ throw new Error("Not implemented.");}
	GetEnumerator(): SearchFilter[] /*System.Collections.Generic.IEnumerator<SearchFilter>*/{ throw new Error("Not implemented.");}
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	InternalToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
	InternalValidate(): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	Remove(searchFilter: SearchFilter): void{ throw new Error("Not implemented.");}
	RemoveAt(index: number): void{ throw new Error("Not implemented.");}
	SearchFilterChanged(complexProperty: ComplexProperty): void{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	WriteToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = SearchFilterCollection;


//------------modulename->Microsoft.Exchange.WebServices.Data.SearchFilter------------


			