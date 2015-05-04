import ViewBase = require("./ViewBase");
import ItemTraversal = require("../Enumerations/ItemTraversal");
import JsonObject = require("../Core/JsonObject");
import ExchangeService = require("../Core/ExchangeService");
import ServiceObjectType = require("../Enumerations/ServiceObjectType");
import ServiceRequestBase = require("../Core/Requests/ServiceRequestBase");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import Grouping = require("./Grouping");
			
 class CalendarView extends ViewBase {
	StartDate: Date;
	EndDate: Date;
	MaxItemsReturned: number;
	Traversal: ItemTraversal;
	private traversal: ItemTraversal;
	private maxItemsReturned: number;
	private startDate: Date;
	private endDate: Date;
	AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	GetMaxEntriesReturned(): number{ throw new Error("Not implemented.");}
	GetServiceObjectType(): ServiceObjectType{ throw new Error("Not implemented.");}
	GetViewJsonTypeName(): string{ throw new Error("Not implemented.");}
	GetViewXmlElementName(): string{ throw new Error("Not implemented.");}
	InternalValidate(request: ServiceRequestBase): void{ throw new Error("Not implemented.");}
	InternalWritePagingToJson(jsonView: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void{ throw new Error("Not implemented.");}
	InternalWriteViewToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	WriteAttributesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any{ throw new Error("Not implemented.");}
	WriteOrderByToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = CalendarView;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
