import {DateTime} from "../../../DateTime";
import {DayOfTheWeekIndex} from "../../../Enumerations/DayOfTheWeekIndex";
import {DayOfTheWeek} from "../../../Enumerations/DayOfTheWeek";
import {EwsServiceXmlWriter} from "../../../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../../../Core/ExchangeService";
import {ServiceValidationException} from "../../../Exceptions/ServiceValidationException";
import {Strings} from "../../../Strings";
import {XmlElementNames} from "../../../Core/XmlElementNames";
import {XmlNamespace} from "../../../Enumerations/XmlNamespace";

import {IntervalPattern} from "./Recurrence.IntervalPattern";
/**
 * Represents a recurrence pattern where each occurrence happens on a relative day a specific number of months after the previous one. 
*/
export class RelativeMonthlyPattern extends IntervalPattern {

    private dayOfTheWeek: DayOfTheWeek;
    private dayOfTheWeekIndex: DayOfTheWeekIndex;

    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    get XmlElementName(): string {
        return XmlElementNames.RelativeMonthlyRecurrence;
    }

    /**
     * Gets or sets the relative position of the day specified in DayOfTheWeek within the month.
     */
    get DayOfTheWeekIndex(): DayOfTheWeekIndex {
        return super.GetFieldValueOrThrowIfNull<DayOfTheWeekIndex>(this.dayOfTheWeekIndex, "DayOfTheWeekIndex");
    }
    set DayOfTheWeekIndex(value: DayOfTheWeekIndex) {
        this.SetFieldValue<DayOfTheWeekIndex>({ getValue: () => this.dayOfTheWeekIndex, setValue: (updateValue) => { this.dayOfTheWeekIndex = updateValue } }, value);
    }

    /**
     * The day of the week when each occurrence happens.
     */
    get DayOfTheWeek(): DayOfTheWeek {
        return super.GetFieldValueOrThrowIfNull<DayOfTheWeek>(this.dayOfTheWeek, "DayOfTheWeek");
    }
    set DayOfTheWeek(value: DayOfTheWeek) {
        this.SetFieldValue<DayOfTheWeek>({ getValue: () => this.dayOfTheWeek, setValue: (updateValue) => { this.dayOfTheWeek = updateValue } }, value);
    }


    /**
     * Initializes a new instance of the **RelativeMonthlyPattern** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **RelativeMonthlyPattern** class.
     *
     * @param   {DateTime}              startDate           The date and time when the recurrence starts.
     * @param   {number}                interval            The number of months between each occurrence.
     * @param   {DayOfTheWeek}          dayOfTheWeek        The day of the week each occurrence happens.
     * @param   {DayOfTheWeekIndex}   dayOfTheWeekIndex   The relative position of the day within the month.
     */
    constructor(startDate: DateTime, interval: number, dayOfTheWeek: DayOfTheWeek, dayOfTheWeekIndex: DayOfTheWeekIndex);
    constructor(startDate?: DateTime, interval?: number, dayOfTheWeek: DayOfTheWeek = null, dayOfTheWeekIndex: DayOfTheWeekIndex = null) {
        if (arguments.length === 0) {
            super();
            this.dayOfTheWeek = null;
            this.dayOfTheWeekIndex = null;
            return;
        }
        super(startDate, interval);
        this.DayOfTheWeek = dayOfTheWeek;
        this.DayOfTheWeekIndex = dayOfTheWeekIndex;
    }

    /**
     * @internal Validates this instance.
     */
    InternalValidate(): void {
        super.InternalValidate();

        if (!this.dayOfTheWeek) {
            throw new ServiceValidationException(Strings.DayOfTheWeekMustBeSpecifiedForRecurrencePattern);
        }

        if (!this.dayOfTheWeekIndex) {
            throw new ServiceValidationException(Strings.DayOfWeekIndexMustBeSpecifiedForRecurrencePattern);
        }
    }

    /**
     * @internal Write properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void {
        super.InternalValidate();

        if (!this.dayOfTheWeek) {
            throw new ServiceValidationException(Strings.DayOfTheWeekMustBeSpecifiedForRecurrencePattern);
        }

        if (!this.dayOfTheWeekIndex) {
            throw new ServiceValidationException(Strings.DayOfWeekIndexMustBeSpecifiedForRecurrencePattern);
        }
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        super.LoadFromXmlJsObject(jsObject, service);

        for (let key in jsObject) {
            switch (key) {
                case XmlElementNames.DaysOfWeek:
                    this.dayOfTheWeek = DayOfTheWeek[<string>jsObject[key]];
                    break;
                case XmlElementNames.DayOfWeekIndex:
                    this.dayOfTheWeekIndex = DayOfTheWeekIndex[<string>jsObject[key]];
                    break;
                default:
                    break;
            }
        }
    }
}