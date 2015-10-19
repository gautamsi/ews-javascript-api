import {EnumToExchangeVersionMappingHelper} from "../Enumerations/EnumToExchangeVersionMappingHelper";
import {OffsetBasePoint} from "../Enumerations/OffsetBasePoint";
import {XmlElementNames} from "../Core/XmlElementNames";
import {EwsUtilities} from "../Core/EwsUtilities";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {PagedView} from "./PagedView";
import {ItemTraversal} from "../Enumerations/ItemTraversal";
import {OrderByCollection} from "./OrderByCollection";
import {ExchangeService} from "../Core/ExchangeService";
import {ServiceObjectType} from "../Enumerations/ServiceObjectType";
import {ServiceRequestBase} from "../Core/Requests/ServiceRequestBase";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {Grouping} from "./Grouping";
export class ItemView extends PagedView {
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
        writer.WriteAttributeValue(XmlAttributeNames.Traversal, ItemTraversal[this.Traversal]);
    }
    WriteOrderByToXml(writer: EwsServiceXmlWriter): void { this.orderBy.WriteToXml(writer, XmlElementNames.SortOrder); }
}
