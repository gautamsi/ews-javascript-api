import { DayOfTheWeek } from "../Enumerations/DayOfTheWeek";
import { DayOfTheWeekIndex } from "../Enumerations/DayOfTheWeekIndex";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { ExchangeService } from "../Core/ExchangeService";
import { Month } from "../Enumerations/Month";
import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

import { ComplexProperty } from "./ComplexProperty";
/**
 * @internal Represents a recurrence pattern for a time change in a time zone.
 * @sealed
 */
export class TimeChangeRecurrence extends ComplexProperty {

    private dayOfTheWeek: DayOfTheWeek;
    private dayOfTheWeekIndex: DayOfTheWeekIndex;
    private month: Month;

    /**
     * Gets or sets the index of the day in the month at which the time change occurs.
     */
    get DayOfTheWeekIndex(): DayOfTheWeekIndex {
        return this.dayOfTheWeekIndex;
    }
    set DayOfTheWeekIndex(value: DayOfTheWeekIndex) {
    }

    /**
     * Gets or sets the day of the week the time change occurs.
     */
    get DayOfTheWeek(): DayOfTheWeek {
        return this.dayOfTheWeek;
    }
    set DayOfTheWeek(value: DayOfTheWeek) {
    }

    /**
     * Gets or sets the month the time change occurs.
     */
    get Month(): Month {
        return this.month;
    }
    set Month(value: Month) {
    }

    /**
     * Initializes a new instance of the **TimeChangeRecurrence** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **TimeChangeRecurrence** class.
     *
     * @param   {DayOfTheWeekIndex} dayOfTheWeekIndex   The index of the day in the month at which the time change occurs.
     * @param   {DayOfTheWeek}      dayOfTheWeek        The day of the week the time change occurs.
     * @param   {Month}             month               The month the time change occurs.
     */
    constructor(dayOfTheWeekIndex: DayOfTheWeekIndex, dayOfTheWeek: DayOfTheWeek, month: Month);
    constructor(dayOfTheWeekIndex: DayOfTheWeekIndex = null, dayOfTheWeek: DayOfTheWeek = null, month: Month = null) {
        super();
        this.dayOfTheWeekIndex = dayOfTheWeekIndex;
        this.dayOfTheWeek = dayOfTheWeek;
        this.month = month;
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
                case XmlElementNames.DaysOfWeek:
                    this.dayOfTheWeek = DayOfTheWeek[<string>jsonProperty[key]];
                case XmlElementNames.DayOfWeekIndex:
                    this.dayOfTheWeekIndex = DayOfTheWeekIndex[<string>jsonProperty[key]];
                case XmlElementNames.Month:
                    this.month = Month[<string>jsonProperty[key]];
                default:
            }
        }
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        if (this.DayOfTheWeek) {
            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.DaysOfWeek,
                this.DayOfTheWeek);
        }

        if (this.dayOfTheWeekIndex) {
            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.DayOfWeekIndex,
                this.DayOfTheWeekIndex);
        }

        if (this.Month) {
            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.Month,
                this.Month);
        }
    }
}
