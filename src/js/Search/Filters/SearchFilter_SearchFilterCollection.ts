import LogicalOperator = require("../../Enumerations/LogicalOperator");
import ExchangeService = require("../../Core/ExchangeService");
import JsonObject = require("../../Core/JsonObject");
import ComplexProperty = require("../../ComplexProperties/ComplexProperty");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");

import SearchFilter = require("./SearchFilter");
class SearchFilterCollection extends SearchFilter {
	Count: number;
	Item: SearchFilter;
	LogicalOperator: LogicalOperator;
	private searchFilters: SearchFilter[] /*System.Collections.Generic.List<SearchFilter>*/;
	private logicalOperator: LogicalOperator;
	Add(searchFilter: SearchFilter): void{ throw new Error("SearchFilter_SearchFilterCollection.ts - Add : Not implemented.");}
	AddRange(searchFilters: SearchFilter[] /*System.Collections.Generic.IEnumerable<SearchFilter>*/): void{ throw new Error("SearchFilter_SearchFilterCollection.ts - AddRange : Not implemented.");}
	Clear(): void{ throw new Error("SearchFilter_SearchFilterCollection.ts - Clear : Not implemented.");}
	Contains(searchFilter: SearchFilter): boolean{ throw new Error("SearchFilter_SearchFilterCollection.ts - Contains : Not implemented.");}
	GetEnumerator(): SearchFilter[] /*System.Collections.Generic.IEnumerator<SearchFilter>*/{ throw new Error("SearchFilter_SearchFilterCollection.ts - GetEnumerator : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("SearchFilter_SearchFilterCollection.ts - GetXmlElementName : Not implemented.");}
	InternalToJson(service: ExchangeService): any{ throw new Error("SearchFilter_SearchFilterCollection.ts - InternalToJson : Not implemented.");}
	InternalValidate(): void{ throw new Error("SearchFilter_SearchFilterCollection.ts - InternalValidate : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("SearchFilter_SearchFilterCollection.ts - LoadFromJson : Not implemented.");}
	Remove(searchFilter: SearchFilter): void{ throw new Error("SearchFilter_SearchFilterCollection.ts - Remove : Not implemented.");}
	RemoveAt(index: number): void{ throw new Error("SearchFilter_SearchFilterCollection.ts - RemoveAt : Not implemented.");}
	SearchFilterChanged(complexProperty: ComplexProperty): void{ throw new Error("SearchFilter_SearchFilterCollection.ts - SearchFilterChanged : Not implemented.");}
	TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("SearchFilter_SearchFilterCollection.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SearchFilter_SearchFilterCollection.ts - WriteElementsToXml : Not implemented.");}
	WriteToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SearchFilter_SearchFilterCollection.ts - WriteToXml : Not implemented.");}
}
export = SearchFilterCollection;


//------------modulename->Microsoft.Exchange.WebServices.Data.SearchFilter------------
