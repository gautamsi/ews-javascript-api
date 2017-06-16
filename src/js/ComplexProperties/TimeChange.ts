import { DateTime, DateTimeKind } from "../DateTime";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../Core/EwsUtilities";
import { ExchangeService } from "../Core/ExchangeService";
import { Time } from "../Misc/Time";
import { TimeChangeRecurrence } from "./TimeChangeRecurrence";
import { TimeSpan } from "../TimeSpan";
import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

import { ComplexProperty } from "./ComplexProperty";
/**
 * @internal Represents a change of time for a time zone.
 * @sealed
 */
export class TimeChange extends ComplexProperty {

    private timeZoneName: string = null;
    private offset: TimeSpan = null;
    private time: Time = null;
    private absoluteDate: DateTime = null;
    private recurrence: TimeChangeRecurrence = null;

    /**
     * Gets or sets the name of the associated time zone.
     */
    get TimeZoneName(): string {
        return this.timeZoneName;
    }
    set TimeZoneName(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.timeZoneName, setValue: (fieldValue) => { this.timeZoneName = fieldValue } }, value);
    }

    /**
     * Gets or sets the offset since the beginning of the year when the change occurs.
     */
    get Offset(): TimeSpan {
        return this.offset;
    }
    set Offset(value: TimeSpan) {
        this.SetFieldValue<TimeSpan>({ getValue: () => this.offset, setValue: (fieldValue) => { this.offset = fieldValue } }, value);
    }

    /**
     * Gets or sets the time at which the change occurs.
     */
    get Time(): Time {
        return this.time;
    }
    set Time(value: Time) {
        this.SetFieldValue<Time>({ getValue: () => this.time, setValue: (fieldValue) => { this.time = fieldValue } }, value);
    }

    /**
     * Gets or sets the absolute date at which the change occurs. AbsoluteDate and Recurrence are mutually exclusive; setting one resets the other.
     */
    get AbsoluteDate(): DateTime {
        return this.absoluteDate;
    }
    set AbsoluteDate(value: DateTime) {
        this.SetFieldValue<DateTime>({ getValue: () => this.absoluteDate, setValue: (fieldValue) => { this.absoluteDate = fieldValue } }, value);
        if (this.absoluteDate != null) {
            this.recurrence = null;
        }
    }

    /**
     * Gets or sets the recurrence pattern defining when the change occurs. Recurrence and AbsoluteDate are mutually exclusive; setting one resets the other.
     */
    get Recurrence(): TimeChangeRecurrence {
        return this.recurrence;
    }
    set Recurrence(value: TimeChangeRecurrence) {
        this.SetFieldValue<TimeChangeRecurrence>({ getValue: () => this.recurrence, setValue: (fieldValue) => { this.recurrence = fieldValue } }, value);
        if (this.recurrence != null) {
            this.absoluteDate = null;
        }
    }

    /**
     * Initializes a new instance of the **TimeChange** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **TimeChange** class.
     *
     * @param   {TimeSpan}  offset   The offset since the beginning of the year when the change occurs.
     */
    constructor(offset: TimeSpan);
    /**
     * Initializes a new instance of the **TimeChange** class.
     *
     * @param   {TimeSpan}  offset   The offset since the beginning of the year when the change occurs.
     * @param   {Time}      time     The time at which the change occurs.
     */
    constructor(offset: TimeSpan, time: Time);
    constructor(offset: TimeSpan = null, time: Time = null) {
        super();
        if (offset) {
            this.offset = offset;
        }
        if (time) {
            this.time = time
        }
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        for (let key in jsonProperty) {
            switch (key) {
                case XmlElementNames.Offset:
                    this.offset = EwsUtilities.XSDurationToTimeSpan(jsonProperty[key]);
                case XmlElementNames.RelativeYearlyRecurrence:
                    this.Recurrence = new TimeChangeRecurrence();
                    this.Recurrence.LoadFromXmlJsObject(jsonProperty[key], service);
                case XmlElementNames.AbsoluteDate:
                    let dateTime: DateTime = DateTime.Parse(jsonProperty[key]);

                    // TODO: BUG
                    this.absoluteDate = new DateTime(dateTime.ToUniversalTime().TotalMilliSeconds, DateTimeKind.Unspecified);
                case XmlElementNames.Time:
                    this.time = new Time(DateTime.Parse(jsonProperty[key]));
                default:
            }
        }
    }

    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(XmlAttributeNames.TimeZoneName, this.TimeZoneName);
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        if (this.Offset) {
            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.Offset,
                EwsUtilities.TimeSpanToXSDuration(this.Offset));
        }

        if (this.Recurrence != null) {
            this.Recurrence.WriteToXml(writer, XmlElementNames.RelativeYearlyRecurrence);
        }

        if (this.AbsoluteDate) {
            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.AbsoluteDate,
                EwsUtilities.DateTimeToXSDate(new DateTime(this.AbsoluteDate.TotalMilliSeconds, DateTimeKind.Unspecified)));
        }

        if (this.Time != null) {
            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.Time,
                this.Time.ToXSTime());
        }
    }
}
