import XmlAttributeNames = require("../Core/XmlAttributeNames");
import ViewBase = require("./ViewBase");
import OffsetBasePoint = require("../Enumerations/OffsetBasePoint");
import ServiceRequestBase = require("../Core/Requests/ServiceRequestBase");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import Strings = require("../Strings");
import Grouping = require("./Grouping");
class PagedView extends ViewBase {
    get PageSize(): number { return this.pageSize; }
    set PageSize(value) {
        if (value <= 0) {
            throw new Error(Strings.ValueMustBeGreaterThanZero);
        }
        this.pageSize = value;
    }
    OffsetBasePoint: OffsetBasePoint;
    get Offset(): number { return this.offset; }
    set Offset(value) {
        if (value >= 0) {
            this.offset = value;
        }
        else {
            throw new Error(Strings.OffsetMustBeGreaterThanZero);
        }
    };

    private pageSize: number;
    //private offsetBasePoint: OffsetBasePoint; //not used as there is not difference in auto proerpty get or set.
    private offset: number;
    constructor(pageSize: number,
        offset: number,
        offsetBasePoint: OffsetBasePoint) {
        super();
        this.PageSize = pageSize;
        if (typeof offset !== 'undefined') {
            this.Offset = offset;
        }
        if (typeof offsetBasePoint !== 'undefined') {
            this.OffsetBasePoint = offsetBasePoint;
        }
    }
    GetMaxEntriesReturned(): number { return this.PageSize; }
    InternalValidate(request: ServiceRequestBase): void { super.InternalValidate(request); }
    InternalWritePagingToJson(jsonView: any/*JsonObject*/, service: ExchangeService): any { throw new Error("PagedView.ts - InternalWritePagingToJson : Not implemented."); }
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void {
        if (groupBy !== null && typeof groupBy !== 'undefined') {
            groupBy.WriteToXml(writer);
        }
    }
    InternalWriteViewToXml(writer: EwsServiceXmlWriter): void {
        super.InternalWriteViewToXml(writer);
        writer.WriteAttributeValue(undefined, XmlAttributeNames.Offset, this.Offset);
        writer.WriteAttributeValue(undefined, XmlAttributeNames.BasePoint, this.OffsetBasePoint);
    }
    WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any { throw new Error("PagedView.ts - WriteGroupingToJson : Not implemented."); }
    WriteOrderByToXml(writer: EwsServiceXmlWriter): void { /* No order by for paged view*/ }
}
export = PagedView;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
