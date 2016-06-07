import {ArgumentException} from "../Exceptions/ArgumentException";
import {DateTime} from "../DateTime";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../Core/ExchangeService";
import {Grouping} from "./Grouping";
import {ItemTraversal} from "../Enumerations/ItemTraversal";
import {ServiceObjectType} from "../Enumerations/ServiceObjectType";
import {ServiceRequestBase} from "../Core/Requests/ServiceRequestBase";
import {ServiceValidationException} from "../Exceptions/ServiceValidationException";
import {Strings} from "../Strings";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";

import {ViewBase} from "./ViewBase";
/**
 * Represents a date range view of appointments in calendar folder search operations.
 */
export class CalendarView extends ViewBase {
    
    private traversal: ItemTraversal = ItemTraversal.Shallow;
    private maxItemsReturned: number = null;
    private startDate: DateTime = null;
    private endDate: DateTime = null;

    /**
     * Gets or sets the start date.
     */
    get StartDate(): DateTime {
        return this.startDate;
    }
    set StartDate(value: DateTime) {
        this.startDate = value;
    }

    /**
     * Gets or sets the end date.
     */
    get EndDate(): DateTime {
        return this.endDate;
    }
    set EndDate(value: DateTime) {
        this.endDate = value;
    }

    /**
     * The maximum number of items the search operation should return.
     */
    get MaxItemsReturned(): number {
        return this.maxItemsReturned;
    }
    set MaxItemsReturned(value: number) {
        if (value !== null && value <= 0) {
            throw new ArgumentException(Strings.ValueMustBeGreaterThanZero);
        }
        this.maxItemsReturned = value;
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
     * Initializes a new instance of CalendarView.
     *
     * @param   {DateTime}  startDate          The start date.
     * @param   {DateTime}  endDate            The end date.
     */
    constructor(startDate: DateTime, endDate: DateTime);
    /**
     * Initializes a new instance of CalendarView.
     *
     * @param   {DateTime}  startDate          The start date.
     * @param   {DateTime}  endDate            The end date.
     * @param   {number}    maxItemsReturned   The maximum number of items the search operation should return.
     */
    constructor(startDate: DateTime, endDate: DateTime, maxItemsReturned: number);
    constructor(startDate: DateTime, endDate: DateTime, maxItemsReturned: number = null) {
        super();
        this.startDate = startDate;
        this.endDate = endDate;
        this.MaxItemsReturned = maxItemsReturned;
    }

    /**
     * @internal Gets the maximum number of items or folders the search operation should return.
     *
     * @return  {number}      The maximum number of items the search operation should return.
     */
    GetMaxEntriesReturned(): number { return this.MaxItemsReturned; }

    /**
     * @internal Gets the type of service object this view applies to.
     *
     * @return  {ServiceObjectType}      A ServiceObjectType value.
     */
    GetServiceObjectType(): ServiceObjectType { return ServiceObjectType.Item; }

    /**
     * @internal Gets the name of the view XML element.
     *
     * @return  {string}      XML element name.
     */
    GetViewXmlElementName(): string { return XmlElementNames.CalendarView; }

    /**
     * @internal Validate instance.
     *
     * @param   {ServiceRequestBase}   request   The request using this view.
     */
    InternalValidate(request: ServiceRequestBase): void {
        super.InternalValidate(request);

        if (this.endDate < this.StartDate) {
            throw new ServiceValidationException(Strings.EndDateMustBeGreaterThanStartDate);
        }
    }

    /**
     * @internal Writes the search settings to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer    The writer.
     * @param   {Grouping}              groupBy   The group by clause.
     */
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void { /* No search settings for calendar views. */ }

    /**
     * @internal Write to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    InternalWriteViewToXml(writer: EwsServiceXmlWriter): void {
        super.InternalWriteViewToXml(writer);

        writer.WriteAttributeValue(XmlAttributeNames.StartDate, this.StartDate);
        writer.WriteAttributeValue(XmlAttributeNames.EndDate, this.EndDate);
    }

    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void { writer.WriteAttributeValue(XmlAttributeNames.Traversal, ItemTraversal[this.Traversal]); }

    /**
     * @internal Writes OrderBy property to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer
     */
    WriteOrderByToXml(writer: EwsServiceXmlWriter): void { /* No OrderBy for calendar views. */ }
}