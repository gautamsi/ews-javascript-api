import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../Core/EwsUtilities";
import { ExchangeService } from "../Core/ExchangeService";
import { Grouping } from "./Grouping";
import { ItemTraversal } from "../Enumerations/ItemTraversal";
import { OffsetBasePoint } from "../Enumerations/OffsetBasePoint";
import { OrderByCollection } from "./OrderByCollection";
import { ServiceObjectType } from "../Enumerations/ServiceObjectType";
import { ServiceRequestBase } from "../Core/Requests/ServiceRequestBase";
import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlElementNames } from "../Core/XmlElementNames";

import { PagedView } from "./PagedView";
/**
 * Represents the view settings in a folder search operation.
 * 
 * @sealed
 */
export class ItemView extends PagedView {

    private traversal: ItemTraversal = ItemTraversal.Shallow;
    private orderBy: OrderByCollection = new OrderByCollection();

    /**
     * Gets or sets the search traversal mode. Defaults to ItemTraversal.Shallow.
     */
    get Traversal(): ItemTraversal {
        return this.traversal;
    }
    set Traversal(value: ItemTraversal) {
        this.traversal = value;
    }

    /**
     * Gets the properties against which the returned items should be ordered.
     */
    get OrderBy(): OrderByCollection { return this.orderBy; }

    /**
     * Initializes a new instance of the **ItemView** class.
     *
     * @param   {number}   pageSize          The maximum number of elements the search operation should return.
     */
    constructor(pageSize: number);
    /**
     * Initializes a new instance of the **ItemView** class.
     *
     * @param   {number}   pageSize          The maximum number of elements the search operation should return.
     * @param   {number}   offset            The offset of the view from the base point.
     */
    constructor(pageSize: number, offset: number);
    /**
     * Initializes a new instance of the **ItemView** class.
     *
     * @param   {number}   pageSize          The maximum number of elements the search operation should return.
     * @param   {number}   offset            The offset of the view from the base point.
     * @param   {number}   offsetBasePoint   The base point of the offset.
     */
    constructor(pageSize: number, offset: number, offsetBasePoint: OffsetBasePoint);
    constructor(pageSize: number, offset: number = 0, offsetBasePoint: OffsetBasePoint = OffsetBasePoint.Beginning) {
        super(pageSize, offset, offsetBasePoint);
    }

    /**
     * @internal Gets the type of service object this view applies to.
     *
     * @return  {ServiceObjectType}      A ServiceObjectType value.
     */
    GetServiceObjectType(): ServiceObjectType { return ServiceObjectType.Item; }

    /**
     * @internal Gets the name of the view XML element.
     *
     * @return  {type}      XML element name.
     */
    GetViewXmlElementName(): string { return XmlElementNames.IndexedPageItemView; }

    /**
     * @internal Validates this view.
     *
     * @param   {ServiceRequestBase}   request   The request using this view.
     */
    InternalValidate(request: ServiceRequestBase): void {
        super.InternalValidate(request);
        EwsUtilities.ValidateEnumVersionValue(ItemTraversal, this.Traversal, request.Service.RequestedServerVersion, "ItemTraversal");
    }

    /**
     * @internal Writes the search settings to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer    The writer.
     * @param   {Grouping}              groupBy   The group by clause.
     */
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void {
        super.InternalWriteSearchSettingsToXml(writer, groupBy);
    }

    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(XmlAttributeNames.Traversal, ItemTraversal[this.Traversal]);
    }

    /**
	 * @internal Writes OrderBy property to XML.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteOrderByToXml(writer: EwsServiceXmlWriter): void {
        this.orderBy.WriteToXml(writer, XmlElementNames.SortOrder);
    }
}
