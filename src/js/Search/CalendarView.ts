import {ViewBase} from "./ViewBase";
import {ItemTraversal} from "../Enumerations/ItemTraversal";
import {JsonObject} from "../Core/JsonObject";
import {ExchangeService} from "../Core/ExchangeService";
import {ServiceObjectType} from "../Enumerations/ServiceObjectType";
import {ServiceRequestBase} from "../Core/Requests/ServiceRequestBase";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {Grouping} from "./Grouping";
export class CalendarView extends ViewBase {
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






			

