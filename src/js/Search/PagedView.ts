class PagedView extends ViewBase {
    PageSize: number;
    OffsetBasePoint: OffsetBasePoint;
    Offset: number;
    private pageSize: number;
    private offsetBasePoint: OffsetBasePoint;
    private offset: number;
    GetMaxEntriesReturned(): number { throw new Error("Not implemented."); }
    InternalValidate(request: ServiceRequestBase): any { throw new Error("Not implemented."); }
    InternalWritePagingToJson(jsonView: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("Not implemented."); }
    InternalWriteViewToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any { throw new Error("Not implemented."); }
    WriteOrderByToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = PagedView;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
