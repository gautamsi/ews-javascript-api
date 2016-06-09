import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../Core/ExchangeService";
import {Grouping} from "./Grouping";
import {OffsetBasePoint} from "../Enumerations/OffsetBasePoint";
import {ServiceRequestBase} from "../Core/Requests/ServiceRequestBase";
import {Strings} from "../Strings";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";

import {ViewBase} from "./ViewBase";
/**
 * Represents a view settings that support paging in a search operation.
 */
export abstract class PagedView extends ViewBase { //abstract

    private pageSize: number = 0;
    private offsetBasePoint: OffsetBasePoint = OffsetBasePoint.Beginning;
    private offset: number = 0;

    /**
     * The maximum number of items or folders the search operation should return.
     */
    get PageSize(): number { return this.pageSize; }
    set PageSize(value) {
        if (value <= 0) {
            throw new Error(Strings.ValueMustBeGreaterThanZero);
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
     * Gets or sets the offset.
     */
    get Offset(): number { return this.offset; }
    set Offset(value) {
        if (value >= 0) {
            this.offset = value;
        }
        else {
            throw new Error(Strings.OffsetMustBeGreaterThanZero);
        }
    };

    /**
     * Initializes a new instance of the **PagedView** class.
     *
     * @param   {number}   pageSize          The maximum number of elements the search operation should return.
     */
    constructor(pageSize: number);
    /**
     * Initializes a new instance of the **PagedView** class.
     *
     * @param   {number}   pageSize          The maximum number of elements the search operation should return.
     * @param   {number}   offset            The offset of the view from the base point.
     */
    constructor(pageSize: number, offset: number);
    /**
     * Initializes a new instance of the **PagedView** class.
     *
     * @param   {number}   pageSize          The maximum number of elements the search operation should return.
     * @param   {number}   offset            The offset of the view from the base point.
     * @param   {number}   offsetBasePoint   The base point of the offset.
     */
    constructor(pageSize: number, offset: number, offsetBasePoint: OffsetBasePoint);
    constructor(pageSize: number, offset: number = 0, offsetBasePoint: OffsetBasePoint = OffsetBasePoint.Beginning) {
        super();
        this.pageSize = pageSize;
        this.Offset = offset;
        this.OffsetBasePoint = offsetBasePoint;
    }

    /**
     * @internal Gets the maximum number of items or folders the search operation should return.
     *
     * @return  {number?}      The maximum number of items or folders that should be returned by the search operation.
     */
    GetMaxEntriesReturned(): number { return this.PageSize; }

    /**
     * @internal Validates this view.
     *
     * @param   {ServiceRequestBase}   request   The request using this view.
     */
    InternalValidate(request: ServiceRequestBase): void { super.InternalValidate(request); }

    /**
     * @internal Writes the search settings to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer    The writer.
     * @param   {Grouping}              groupBy   The group by clause.
     */
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void {
        if (groupBy !== null && typeof groupBy !== 'undefined') {
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
        writer.WriteAttributeValue(XmlAttributeNames.Offset, this.Offset);
        writer.WriteAttributeValue(XmlAttributeNames.BasePoint, OffsetBasePoint[this.OffsetBasePoint]);
    }

    /**
	 * @internal Writes OrderBy property to XML.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteOrderByToXml(writer: EwsServiceXmlWriter): void {
        /* No order by for paged view*/
    }
}