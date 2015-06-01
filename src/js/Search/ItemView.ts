import EnumToExchangeVersionMappingHelper = require("../Enumerations/EnumToExchangeVersionMappingHelper");
import OffsetBasePoint = require("../Enumerations/OffsetBasePoint");
import XmlElementNames = require("../Core/XmlElementNames");
import EwsUtilities = require("../Core/EwsUtilities");
import XmlAttributeNames = require("../Core/XmlAttributeNames");
import PagedView = require("./PagedView");
import ItemTraversal = require("../Enumerations/ItemTraversal");
import OrderByCollection = require("./OrderByCollection");
import ExchangeService = require("../Core/ExchangeService");
import ServiceObjectType = require("../Enumerations/ServiceObjectType");
import ServiceRequestBase = require("../Core/Requests/ServiceRequestBase");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import Grouping = require("./Grouping");
class ItemView extends PagedView {
    Traversal: ItemTraversal = ItemTraversal.Shallow;
    get OrderBy(): OrderByCollection { return this.orderBy; }
    //private traversal: ItemTraversal; - not needed 
    private orderBy: OrderByCollection = new OrderByCollection();
    constructor(
        pageSize: number,
        offset: number = 0,
        offsetBasePoint: OffsetBasePoint = OffsetBasePoint.Beginning) {
        super(pageSize, offset, offsetBasePoint)
    }
    AddJsonProperties(jsonRequest: any/*JsonObject*/, service: ExchangeService): any { throw new Error("ItemView.ts - AddJsonProperties : Not implemented."); }
    GetServiceObjectType(): ServiceObjectType { return ServiceObjectType.Item; }
    GetViewJsonTypeName(): string { throw new Error("ItemView.ts - GetViewJsonTypeName : Not implemented."); }
    GetViewXmlElementName(): string { return XmlElementNames.IndexedPageItemView; }
    InternalValidate(request: ServiceRequestBase): void {
        super.InternalValidate(request);
        EwsUtilities.ValidateEnumVersionValue(EnumToExchangeVersionMappingHelper.ItemTraversal, this.Traversal, request.Service.RequestedServerVersion);
    }
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void { super.InternalWriteSearchSettingsToXml(writer, groupBy); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(undefined, XmlAttributeNames.Traversal, ItemTraversal[this.Traversal]);
    }
    WriteOrderByToXml(writer: EwsServiceXmlWriter): void { this.orderBy.WriteToXml(writer, XmlElementNames.SortOrder); }
}
export = ItemView;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
