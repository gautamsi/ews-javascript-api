import {ArgumentException, ArgumentNullException} from "../Exceptions/ArgumentException";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../Core/ExchangeService";
import {Grouping} from "./Grouping";
import {ItemTraversal} from "../Enumerations/ItemTraversal";
import {OffsetBasePoint} from "../Enumerations/OffsetBasePoint";
import {OrderByCollection} from "./OrderByCollection";
import {SearchFilter} from "./Filters/SearchFilter";
import {ServiceObjectType} from "../Enumerations/ServiceObjectType";
import {ServiceRequestBase} from "../Core/Requests/ServiceRequestBase";
import {Strings} from "../Strings";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ViewBase} from "./ViewBase";
/**
 * Represents the view settings in a folder search operation.
 * 
 * @sealed
 */
export class SeekToConditionItemView extends ViewBase {

	private pageSize: number = null;
	private traversal: ItemTraversal = ItemTraversal.Shallow;
	private condition: SearchFilter = null;
	private offsetBasePoint: OffsetBasePoint = OffsetBasePoint.Beginning;
	private orderBy: OrderByCollection = new OrderByCollection();
	private serviceObjType: ServiceObjectType = ServiceObjectType.Folder;

	/**
	 * The maximum number of items or folders the search operation should return.
	 */
	get PageSize(): number {
		return this.pageSize;
	}
	set PageSize(value: number) {
		if (value <= 0) {
			throw new ArgumentException(Strings.ValueMustBeGreaterThanZero);
		}
		this.pageSize = value;
	}

	/**
	 * Gets or sets the base point of the offset.
	 */
	get OffsetBasePoint(): OffsetBasePoint {
		return this.offsetBasePoint;
	}
	set OffsetBasePoint(value: OffsetBasePoint) {
		this.offsetBasePoint = value;
	}

	/**
	 * Gets or sets the condition for seek. 
	 * Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection. 
	 * If SearchFilter is null, no search filters are applied.
	 */
	get Condition(): SearchFilter {
		return this.condition;
	}
	set Condition(value: SearchFilter) {
		if (value === null) {
			throw new ArgumentNullException("Condition");
		}
		this.condition = value;
	}

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
	get OrderBy(): OrderByCollection {
		return this.orderBy;
	}

	/**
	 * Initializes a new instance of the **SeekToConditionItemView** class.
	 *
	 * @param   {SearchFilter}	condition         Condition to be used when seeking.
	 * @param   {number}		pageSize          The maximum number of elements the search operation should return.
	 */
	constructor(condition: SearchFilter, pageSize: number);
	/**
	 * Initializes a new instance of the **SeekToConditionItemView** class.
	 *
	 * @param   {SearchFilter}   	condition         Condition to be used when seeking.
	 * @param   {number}   			pageSize          The maximum number of elements the search operation should return.
	 * @param   {OffsetBasePoint}   offsetBasePoint   The base point of the offset.
	 */
	constructor(condition: SearchFilter, pageSize: number, offsetBasePoint: OffsetBasePoint);
	constructor(condition: SearchFilter, pageSize: number, offsetBasePoint: OffsetBasePoint = OffsetBasePoint.Beginning) {
		super();
		this.condition = condition;
		this.pageSize = pageSize;
		this.serviceObjType = ServiceObjectType.Item;
		this.offsetBasePoint = offsetBasePoint;
	}

	/**
     * @internal Gets the maximum number of items or folders the search operation should return.
     *
     * @return  {number?}      The maximum number of items or folders that should be returned by the search operation.
     */
    GetMaxEntriesReturned(): number {
		return this.PageSize;
	}

	/**
     * @internal Gets the type of service object this view applies to.
     *
     * @return  {ServiceObjectType}      A ServiceObjectType value.
     */
    GetServiceObjectType(): ServiceObjectType {
		return this.serviceObjType;
	}

	/**
     * @internal Gets the name of the view XML element.
     *
     * @return  {string}      XML element name.
     */
    GetViewXmlElementName(): string {
		return XmlElementNames.SeekToConditionPageItemView;
	}

	/**
     * @internal Validates this view.
     *
     * @param   {ServiceRequestBase}   request   The request using this view.
     */
    InternalValidate(request: ServiceRequestBase): void {
		super.InternalValidate(request);
	}

	/**
     * @internal Writes the search settings to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer    The writer.
     * @param   {Grouping}              groupBy   The group by clause.
     */
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void {
		if (groupBy != null) {
			groupBy.WriteToXml(writer);
		}
	}

	/**
	 * @internal Writes this view to XML.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    InternalWriteViewToXml(writer: EwsServiceXmlWriter): void {
		super.InternalWriteViewToXml(writer);

		writer.WriteAttributeValue(XmlAttributeNames.BasePoint, this.OffsetBasePoint);

		if (this.Condition != null) {
			writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Condition);
			this.Condition.WriteToXml(writer);
			writer.WriteEndElement(); // Restriction
		}
	}

	/**
     * @internal Sets the type of service object this view applies to.
     *
     * @return  {ServiceObjectType}      Service object type
     */
    SetServiceObjectType(objType: ServiceObjectType): void {
		this.serviceObjType = objType;
	}

	/**
	 * @internal Writes the attributes to XML.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
		if (this.serviceObjType == ServiceObjectType.Item) {
			writer.WriteAttributeValue(XmlAttributeNames.Traversal, this.Traversal);
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
		if (this.serviceObjType == ServiceObjectType.Item) {
			this.GetPropertySetOrDefault().WriteToXml(writer, this.GetServiceObjectType());
		}

		writer.WriteStartElement(XmlNamespace.Messages, this.GetViewXmlElementName());

		this.InternalWriteViewToXml(writer);

		writer.WriteEndElement(); // this.GetViewXmlElementName()
	}
}