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
	AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): void{ throw new Error("CalendarView.ts - AddJsonProperties : Not implemented.");}
	GetMaxEntriesReturned(): number{ throw new Error("CalendarView.ts - GetMaxEntriesReturned : Not implemented.");}
	GetServiceObjectType(): ServiceObjectType{ throw new Error("CalendarView.ts - GetServiceObjectType : Not implemented.");}
	GetViewJsonTypeName(): string{ throw new Error("CalendarView.ts - GetViewJsonTypeName : Not implemented.");}
	GetViewXmlElementName(): string{ throw new Error("CalendarView.ts - GetViewXmlElementName : Not implemented.");}
	InternalValidate(request: ServiceRequestBase): void{ throw new Error("CalendarView.ts - InternalValidate : Not implemented.");}
	InternalWritePagingToJson(jsonView: JsonObject, service: ExchangeService): void{ throw new Error("CalendarView.ts - InternalWritePagingToJson : Not implemented.");}
	InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void{ throw new Error("CalendarView.ts - InternalWriteSearchSettingsToXml : Not implemented.");}
	InternalWriteViewToXml(writer: EwsServiceXmlWriter): void{ throw new Error("CalendarView.ts - InternalWriteViewToXml : Not implemented.");}
	WriteAttributesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("CalendarView.ts - WriteAttributesToXml : Not implemented.");}
	WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any{ throw new Error("CalendarView.ts - WriteGroupingToJson : Not implemented.");}
	WriteOrderByToXml(writer: EwsServiceXmlWriter): void{ throw new Error("CalendarView.ts - WriteOrderByToXml : Not implemented.");}
}
export = CalendarView;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
