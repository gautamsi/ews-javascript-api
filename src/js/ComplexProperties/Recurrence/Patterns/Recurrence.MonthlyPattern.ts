import {ArgumentOutOfRangeException} from "../../../Exceptions/ArgumentException";
import {Convert} from "../../../ExtensionMethods";
import {DateTime} from "../../../DateTime";
import {EwsServiceXmlWriter} from "../../../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../../../Core/ExchangeService";
import {ServiceValidationException} from "../../../Exceptions/ServiceValidationException";
import {Strings} from "../../../Strings";
import {XmlElementNames} from "../../../Core/XmlElementNames";
import {XmlNamespace} from "../../../Enumerations/XmlNamespace";

import {IntervalPattern} from "./Recurrence.IntervalPattern";
/**
 * Represents a recurrence pattern where each occurrence happens on a specific day a specific number of months after the previous one.
 */
export class MonthlyPattern extends IntervalPattern {

    private dayOfMonth: number;

    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    get XmlElementName(): string {
        return XmlElementNames.AbsoluteMonthlyRecurrence;
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
     * Initializes a new instance of the **MonthlyPattern** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **MonthlyPattern** class.
     *
     * @param   {DateTime}  startDate    The date and time when the recurrence starts.
     * @param   {number}    interval     The number of months between each occurrence.
     * @param   {number}    dayOfMonth   The day of the month when each occurrence happens.
     */
    constructor(startDate: DateTime, interval: number, dayOfMonth: number);
    constructor(startDate?: DateTime, interval?: number, dayOfMonth: number = null) {
        if (arguments.length === 0) {
            super()
            this.dayOfMonth = null;
            return;
        }
        super(startDate, interval);
        this.DayOfMonth = dayOfMonth;
    }

    /**
     * @internal Validates this instance.
     */
    InternalValidate(): void {
        super.InternalValidate();

        if (!this.dayOfMonth) {
            throw new ServiceValidationException(Strings.DayOfMonthMustBeBetween1And31);
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
                default:
                    break;
            }
        }
    }
}