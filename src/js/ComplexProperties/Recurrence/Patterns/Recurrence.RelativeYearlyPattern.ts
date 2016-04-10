import {DateTime} from "../../../DateTime";
import {DayOfTheWeekIndex} from "../../../Enumerations/DayOfTheWeekIndex";
import {DayOfTheWeek} from "../../../Enumerations/DayOfTheWeek";
import {EwsServiceXmlWriter} from "../../../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../../../Core/ExchangeService";
import {Month} from "../../../Enumerations/Month";
import {ServiceValidationException} from "../../../Exceptions/ServiceValidationException";
import {Strings} from "../../../Strings";
import {XmlElementNames} from "../../../Core/XmlElementNames";
import {XmlNamespace} from "../../../Enumerations/XmlNamespace";

import {Recurrence} from "./Recurrence";
/**
 * Represents a recurrence pattern where each occurrence happens on a relative day every year.
 */
export class RelativeYearlyPattern extends Recurrence {

    private dayOfTheWeek: DayOfTheWeek;
    private dayOfTheWeekIndex: DayOfTheWeekIndex;
    private month: Month;

    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    get XmlElementName(): string {
        return XmlElementNames.RelativeYearlyRecurrence;
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
     * Gets or sets the day of the week when each occurrence happens.
     */
    get DayOfTheWeek(): DayOfTheWeek {
        return super.GetFieldValueOrThrowIfNull<DayOfTheWeek>(this.dayOfTheWeek, "DayOfTheWeek");
    }
    set DayOfTheWeek(value: DayOfTheWeek) {
        this.SetFieldValue<DayOfTheWeek>({ getValue: () => this.dayOfTheWeek, setValue: (updateValue) => { this.dayOfTheWeek = updateValue } }, value);
    }

    /**
     * Gets or sets the month of the year when each occurrence happens.
     */
    get Month(): Month {
        return super.GetFieldValueOrThrowIfNull<Month>(this.month, "Month");
    }
    set Month(value: Month) {
        this.SetFieldValue<Month>({ getValue: () => this.month, setValue: (updateValue) => { this.month = updateValue } }, value);
    }


    /**
     * Initializes a new instance of the **RelativeYearlyPattern** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **RelativeYearlyPattern** class.
     *
     * @param   {DateTime}              startDate           The date and time when the recurrence starts.
     * @param   {Month}                 month               The month of the year each occurrence happens.
     * @param   {DayOfTheWeek}          dayOfTheWeek        The day of the week each occurrence happens.
     * @param   {DayOfTheWeekIndex}     dayOfTheWeekIndex   The relative position of the day within the month.
     */
    constructor(startDate: DateTime, month: Month, dayOfTheWeek: DayOfTheWeek, dayOfTheWeekIndex: DayOfTheWeekIndex);
    constructor(startDate?: DateTime, month: Month = null, dayOfTheWeek: DayOfTheWeek = null, dayOfTheWeekIndex: DayOfTheWeekIndex = null) {
        if (arguments.length === 0) {
            super();
            this.dayOfTheWeek = null;
            this.dayOfTheWeekIndex = null;
            return;
        }
        super(startDate);
        this.Month = month;
        this.DayOfTheWeek = dayOfTheWeek;
        this.DayOfTheWeekIndex = dayOfTheWeekIndex;
    }

    /**
     * @internal Validates this instance.
     */
    InternalValidate(): void {
        super.InternalValidate();

        if (!this.dayOfTheWeekIndex) {
            throw new ServiceValidationException(Strings.DayOfWeekIndexMustBeSpecifiedForRecurrencePattern);
        }

        if (!this.dayOfTheWeek) {
            throw new ServiceValidationException(Strings.DayOfTheWeekMustBeSpecifiedForRecurrencePattern);
        }

        if (!this.month) {
            throw new ServiceValidationException(Strings.MonthMustBeSpecifiedForRecurrencePattern);
        }
    }

    /**
     * @internal Write properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void {
        super.InternalWritePropertiesToXml(writer);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.DaysOfWeek,
            this.DayOfTheWeek);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.DayOfWeekIndex,
            this.DayOfTheWeekIndex);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.Month,
            this.Month);
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
                case XmlElementNames.Month:
                    this.month = Month[<string>jsObject[key]];
                    break;
                default:
                    break;
            }
        }
    }
}