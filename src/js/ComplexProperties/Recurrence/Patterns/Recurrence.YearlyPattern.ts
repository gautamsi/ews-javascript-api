import {ArgumentOutOfRangeException} from "../../../Exceptions/ArgumentException";
import {Convert} from "../../../ExtensionMethods";
import {DateTime} from "../../../DateTime";
import {EwsServiceXmlReader} from "../../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../../../Core/ExchangeService";
import {Month} from "../../../Enumerations/Month";
import {ServiceValidationException} from "../../../Exceptions/ServiceValidationException";
import {Strings} from "../../../Strings";
import {XmlElementNames} from "../../../Core/XmlElementNames";
import {XmlNamespace} from "../../../Enumerations/XmlNamespace";

import {Recurrence} from "./Recurrence";
/**
 * Represents a recurrence pattern where each occurrence happens on a specific day every year.
 */
export class YearlyPattern extends Recurrence {

    private month: Month;
    private dayOfMonth: number;

    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    get XmlElementName(): string {
        return XmlElementNames.AbsoluteYearlyRecurrence;
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
     * Gets or sets the day of the month when each occurrence happens. DayOfMonth must be between 1 and 31.
     */
    get DayOfMonth(): number {
        return super.GetFieldValueOrThrowIfNull<number>(this.dayOfMonth, "DayOfMonth");
    }
    set DayOfMonth(value: number) {
        if (value < 1 || value > 31) {
            throw new ArgumentOutOfRangeException("DayOfMonth", Strings.DayOfMonthMustBeBetween1And31);
        }
        this.SetFieldValue<number>({ getValue: () => this.dayOfMonth, setValue: (updateValue) => { this.dayOfMonth = updateValue } }, value);
    }


    /**
     * Initializes a new instance of the **YearlyPattern** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **YearlyPattern** class.
     *
     * @param   {DateTime}  startDate    The date and time when the recurrence starts.
     * @param   {Month}     month        The month of the year each occurrence happens.
     * @param   {number}    dayOfMonth   The day of the month each occurrence happens.
     */
    constructor(startDate: DateTime, month: Month, dayOfMonth: number);
    constructor(startDate?: DateTime, month: Month = null, dayOfMonth: number = null) {
        if (arguments.length === 0) {
            super();
            this.month = null;
            this.dayOfMonth = null;
            return;
        }
        super(startDate);
        this.Month = month;
        this.DayOfMonth = dayOfMonth;
    }

    /**
     * @internal Validates this instance.
     */
    InternalValidate(): void {
        super.InternalValidate();

        if (!this.month) {
            throw new ServiceValidationException(Strings.MonthMustBeSpecifiedForRecurrencePattern);
        }

        if (!this.dayOfMonth) {
            throw new ServiceValidationException(Strings.DayOfMonthMustBeSpecifiedForRecurrencePattern);
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
            XmlElementNames.DayOfMonth,
            this.DayOfMonth);

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
                case XmlElementNames.DayOfMonth:
                    this.dayOfMonth = Convert.toNumber(jsObject[key]);
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