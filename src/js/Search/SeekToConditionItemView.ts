import SearchFilter = require("./Filters/SearchFilter");
import ViewBase = require("./ViewBase");
import OffsetBasePoint = require("../Enumerations/OffsetBasePoint");
import ItemTraversal = require("../Enumerations/ItemTraversal");
import OrderByCollection = require("./OrderByCollection");
import ServiceObjectType = require("../Enumerations/ServiceObjectType");
import JsonObject = require("../Core/JsonObject");
import ExchangeService = require("../Core/ExchangeService");
import ServiceRequestBase = require("../Core/Requests/ServiceRequestBase");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import Grouping = require("./Grouping");
			
 class SeekToConditionItemView extends ViewBase {
	PageSize: number;
	OffsetBasePoint: OffsetBasePoint;
	Condition: SearchFilter;
	Traversal: ItemTraversal;
	OrderBy: OrderByCollection;
	private pageSize: number;
	private traversal: ItemTraversal;
	private condition: SearchFilter;
	private offsetBasePoint: OffsetBasePoint;
	private orderBy: OrderByCollection;
	private serviceObjType: ServiceObjectType;
	AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): void{ throw new Error("SeekToConditionItemView.ts - AddJsonProperties : Not implemented.");}
	GetMaxEntriesReturned(): number{ throw new Error("SeekToConditionItemView.ts - GetMaxEntriesReturned : Not implemented.");}
	GetServiceObjectType(): ServiceObjectType{ throw new Error("SeekToConditionItemView.ts - GetServiceObjectType : Not implemented.");}
	GetViewJsonTypeName(): string{ throw new Error("SeekToConditionItemView.ts - GetViewJsonTypeName : Not implemented.");}
	GetViewXmlElementName(): string{ throw new Error("SeekToConditionItemView.ts - GetViewXmlElementName : Not implemented.");}
	InternalValidate(request: ServiceRequestBase): void{ throw new Error("SeekToConditionItemView.ts - InternalValidate : Not implemented.");}
	InternalWritePagingToJson(jsonView: JsonObject, service: ExchangeService): void{ throw new Error("SeekToConditionItemView.ts - InternalWritePagingToJson : Not implemented.");}
	InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void{ throw new Error("SeekToConditionItemView.ts - InternalWriteSearchSettingsToXml : Not implemented.");}
	InternalWriteViewToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SeekToConditionItemView.ts - InternalWriteViewToXml : Not implemented.");}
	SetServiceObjectType(objType: ServiceObjectType): void{ throw new Error("SeekToConditionItemView.ts - SetServiceObjectType : Not implemented.");}
	WriteAttributesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SeekToConditionItemView.ts - WriteAttributesToXml : Not implemented.");}
	WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any{ throw new Error("SeekToConditionItemView.ts - WriteGroupingToJson : Not implemented.");}
	WriteOrderByToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SeekToConditionItemView.ts - WriteOrderByToXml : Not implemented.");}
	WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void{ throw new Error("SeekToConditionItemView.ts - WriteToXml : Not implemented.");}
}
export = SeekToConditionItemView;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
