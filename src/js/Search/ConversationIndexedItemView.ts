import {ConversationQueryTraversal} from "../Enumerations/ConversationQueryTraversal";
import {EnumToExchangeVersionMappingHelper} from "../Enumerations/EnumToExchangeVersionMappingHelper";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeService} from "../Core/ExchangeService";
import {Grouping} from "./Grouping";
import {OffsetBasePoint} from "../Enumerations/OffsetBasePoint";
import {OrderByCollection} from "./OrderByCollection";
import {ServiceObjectType} from "../Enumerations/ServiceObjectType";
import {ServiceRequestBase} from "../Core/Requests/ServiceRequestBase";
import {ViewFilter} from "../Enumerations/ViewFilter";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {PagedView} from "./PagedView";
/**
 * Represents the view settings in a folder search operation.
 * 
 * @sealed
 */
export class ConversationIndexedItemView extends PagedView {

	private orderBy: OrderByCollection = new OrderByCollection();
	private traversal: ConversationQueryTraversal = null;
	private viewFilter: ViewFilter = null;

	/**
	 * Gets the properties against which the returned items should be ordered.
	 */
	get OrderBy(): OrderByCollection {
		return this.orderBy;
	}

	/**
	 * Gets or sets the conversation query traversal mode. 
	 * 
	 * @Nullable
	 */
	get Traversal(): ConversationQueryTraversal {
		return this.traversal;
	}
	set Traversal(value: ConversationQueryTraversal) {
		this.traversal = value;
	}

	/**
	 * Gets or sets the view filter. 
	 * 
	 * @Nullable
	 */
	get ViewFilter(): ViewFilter {
		return this.viewFilter;
	}
	set ViewFilter(value: ViewFilter) {
		this.viewFilter = value;
	}

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
    GetServiceObjectType(): ServiceObjectType {
		return ServiceObjectType.Conversation;
	}

	/**
     * @internal Gets the name of the view XML element.
     *
     * @return  {type}      XML element name.
     */
    GetViewXmlElementName(): string {
		return XmlElementNames.IndexedPageItemView;
	}

	/**
     * @internal Validates this view.
     *
     * @param   {ServiceRequestBase}   request   The request using this view.
     */
    InternalValidate(request: ServiceRequestBase): void {
		super.InternalValidate(request);

		if (this.Traversal) {
			EwsUtilities.ValidateEnumVersionValue(EnumToExchangeVersionMappingHelper.ConversationQueryTraversal, this.traversal, request.Service.RequestedServerVersion);
		}

		if (this.ViewFilter) {
			EwsUtilities.ValidateEnumVersionValue(EnumToExchangeVersionMappingHelper.ViewFilter, this.viewFilter, request.Service.RequestedServerVersion);
		}
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
		if (this.Traversal) {
			writer.WriteAttributeValue(XmlAttributeNames.Traversal, ConversationQueryTraversal[this.Traversal]);
		}

		if (this.ViewFilter) {
			writer.WriteAttributeValue(XmlAttributeNames.ViewFilter, ViewFilter[this.ViewFilter]);
		}
	}

	/**
	 * @internal Writes OrderBy property to XML.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteOrderByToXml(writer: EwsServiceXmlWriter): void {
		this.orderBy.WriteToXml(writer, XmlElementNames.SortOrder);
	}

	/**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer    The writer.
     * @param   {Grouping}              groupBy   The group by clause.
     */
    WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void {
		writer.WriteStartElement(XmlNamespace.Messages, this.GetViewXmlElementName());

		this.InternalWriteViewToXml(writer);

		writer.WriteEndElement(); // this.GetViewXmlElementName()
	}
}