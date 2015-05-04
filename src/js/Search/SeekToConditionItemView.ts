			
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
	AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	GetMaxEntriesReturned(): number{ throw new Error("Not implemented.");}
	GetServiceObjectType(): ServiceObjectType{ throw new Error("Not implemented.");}
	GetViewJsonTypeName(): string{ throw new Error("Not implemented.");}
	GetViewXmlElementName(): string{ throw new Error("Not implemented.");}
	InternalValidate(request: ServiceRequestBase): void{ throw new Error("Not implemented.");}
	InternalWritePagingToJson(jsonView: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void{ throw new Error("Not implemented.");}
	InternalWriteViewToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	SetServiceObjectType(objType: ServiceObjectType): void{ throw new Error("Not implemented.");}
	WriteAttributesToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any{ throw new Error("Not implemented.");}
	WriteOrderByToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void{ throw new Error("Not implemented.");}
}
export = SeekToConditionItemView;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			