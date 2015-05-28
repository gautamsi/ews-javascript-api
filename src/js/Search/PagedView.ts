import ViewBase = require("./ViewBase");
import OffsetBasePoint = require("../Enumerations/OffsetBasePoint");
import ServiceRequestBase = require("../Core/Requests/ServiceRequestBase");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import Grouping = require("./Grouping");
class PagedView extends ViewBase {
    PageSize: number;
    OffsetBasePoint: OffsetBasePoint;
    Offset: number;
    private pageSize: number;
    private offsetBasePoint: OffsetBasePoint;
    private offset: number;
    GetMaxEntriesReturned(): number { throw new Error("PagedView.ts - GetMaxEntriesReturned : Not implemented."); }
    InternalValidate(request: ServiceRequestBase): any { throw new Error("PagedView.ts - InternalValidate : Not implemented."); }
    InternalWritePagingToJson(jsonView: any/*JsonObject*/, service: ExchangeService): any { throw new Error("PagedView.ts - InternalWritePagingToJson : Not implemented."); }
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("PagedView.ts - InternalWriteSearchSettingsToXml : Not implemented."); }
    InternalWriteViewToXml(writer: EwsServiceXmlWriter): any { throw new Error("PagedView.ts - InternalWriteViewToXml : Not implemented."); }
    WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any { throw new Error("PagedView.ts - WriteGroupingToJson : Not implemented."); }
    WriteOrderByToXml(writer: EwsServiceXmlWriter): any { throw new Error("PagedView.ts - WriteOrderByToXml : Not implemented."); }
}
export = PagedView;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
