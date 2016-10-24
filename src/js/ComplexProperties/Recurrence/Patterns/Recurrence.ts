import {ArgumentException} from "../../../Exceptions/ArgumentException";
import {DailyPattern} from "./Recurrence.DailyPattern";
import {DailyRegenerationPattern} from "./Recurrence.DailyRegenerationPattern";
import {DateTime} from "../../../DateTime";
import {EndDateRecurrenceRange} from "../Ranges/EndDateRecurrenceRange";
import {EwsServiceXmlWriter} from "../../../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../../../Core/ExchangeService";
import {IntervalPattern} from "./Recurrence.IntervalPattern";
import {MonthlyPattern} from "./Recurrence.MonthlyPattern";
import {MonthlyRegenerationPattern} from "./Recurrence.MonthlyRegenerationPattern";
import {NoEndRecurrenceRange} from "../Ranges/NoEndRecurrenceRange";
import {NumberedRecurrenceRange} from "../Ranges/NumberedRecurrenceRange";
import {RecurrenceRange} from "../Ranges/RecurrenceRange";
import {RelativeMonthlyPattern} from "./Recurrence.RelativeMonthlyPattern";
import {RelativeYearlyPattern} from "./Recurrence.RelativeYearlyPattern";
import {ServiceValidationException} from "../../../Exceptions/ServiceValidationException";
import {StringHelper} from "../../../ExtensionMethods";
import {Strings} from "../../../Strings";
import {WeeklyPattern} from "./Recurrence.WeeklyPattern";
import {WeeklyRegenerationPattern} from "./Recurrence.WeeklyRegenerationPattern";
import {XmlNamespace} from "../../../Enumerations/XmlNamespace";
import {YearlyPattern} from "./Recurrence.YearlyPattern";
import {YearlyRegenerationPattern} from "./Recurrence.YearlyRegenerationPattern";

import {ComplexProperty} from "../../ComplexProperty";
/**
 * Represents a recurrence pattern, as used by Appointment and Task items.
 */
export class Recurrence extends ComplexProperty {

    startDate: DateTime = null;
    numberOfOccurrences: number = null;
    endDate: DateTime = null;

    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    get XmlElementName(): string { return null; };

    /**
     * @internal Gets a value indicating whether this instance is regeneration pattern.
     *
     * @value   *true* if this instance is regeneration pattern; otherwise, *false*.
     */
    get IsRegenerationPattern(): boolean {
        return false;
    }

    /**
     * Gets or sets the date and time when the recurrence start.
     */
    get StartDate(): DateTime {
        return this.GetFieldValueOrThrowIfNull<DateTime>(this.startDate, "StartDate");
    }
    set StartDate(value: DateTime) {
        this.startDate = new DateTime(value);
    }

    /**
     * Gets a value indicating whether the pattern has a fixed number of occurrences or an end date.
     */
    get HasEnd(): boolean {
        return this.numberOfOccurrences !== null || this.endDate !== null;
    }

    /**
     * Gets or sets the number of occurrences after which the recurrence ends. Setting NumberOfOccurrences resets EndDate.
     */
    get NumberOfOccurrences(): number {
        return this.numberOfOccurrences;
    }
    set NumberOfOccurrences(value: number) {
        if (value < 1) {
            throw new ArgumentException(Strings.NumberOfOccurrencesMustBeGreaterThanZero);
        }
        this.SetFieldValue<number>({ getValue: () => this.numberOfOccurrences, setValue: (updateValue) => { this.numberOfOccurrences = updateValue } }, value);
        this.endDate = null;
    }

    /**
     * Gets or sets the date after which the recurrence ends. Setting EndDate resets NumberOfOccurrences.
     */
    get EndDate(): DateTime {
        return this.endDate;
    }
    set EndDate(value: DateTime) {
        this.SetFieldValue<DateTime>({ getValue: () => this.endDate, setValue: (updateValue) => { this.endDate = updateValue } }, value);
        this.numberOfOccurrences = null;
    }

    /**
     * @internal Initializes a new instance of the **Recurrence** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **Recurrence** class.
     *
     * @param   {DateTime}   startDate   The start date.
     */
    constructor(startDate: DateTime);
    constructor(startDate?: DateTime) {
        super();
        if (arguments.length === 1) {
            this.startDate = startDate;
        }
    }

    /**
     * Gets a property value or throw if null.
     *
     * @typeparam   {T}     Value type.
     * @param   {T}         value   The value.
     * @param   {string}    name    The property name.
     * @return  {T}         Property value
     */
    GetFieldValueOrThrowIfNull<T>(value: any, name: string): T {
        if (typeof value !== 'undefined' && value !== null) {
            return value;
        }
        else {
            throw new ServiceValidationException(
                StringHelper.Format(Strings.PropertyValueMustBeSpecifiedForRecurrencePattern, name));
        }
    }

    /**
     * @internal Validates this instance.
     */
    InternalValidate(): void {
        super.InternalValidate();

        if (!this.startDate) {
            throw new ServiceValidationException(Strings.RecurrencePatternMustHaveStartDate);
        }
    }

    /**
     * @internal Write properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void {/** virtual method */ }

    /**
     * Compares two objects by converting them to JSON and comparing their string values
     *
     * @param   {Recurrence}    otherRecurrence   object to compare to
     * @return  {boolean}       true if the objects serialize to the same string
     */
    IsSame(otherRecurrence: Recurrence): boolean {
        throw new Error("Recurrence.ts - IsSame : Not implemented. - no method calls it");
        // if (otherRecurrence == null) {
        //     return false;
        // }

        // string jsonString;
        // using(MemoryStream memoryStream = new MemoryStream())
        // {
        //     ((JsonObject)this.InternalToJson(null)).SerializeToJson(memoryStream);
        //     memoryStream.Position = 0;
        //     using(StreamReader reader = new StreamReader(memoryStream))
        //     {
        //         jsonString = reader.ReadToEnd();
        //     }
        // }

        // string otherJsonString;
        // using(MemoryStream memoryStream = new MemoryStream())
        // {
        //     ((JsonObject)otherRecurrence.InternalToJson(null)).SerializeToJson(memoryStream);
        //     memoryStream.Position = 0;
        //     using(StreamReader reader = new StreamReader(memoryStream))
        //     {
        //         otherJsonString = reader.ReadToEnd();
        //     }
        // }

        // return String.Equals(jsonString, otherJsonString, StringComparison.Ordinal);
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {        
    }

    /**
     * Sets up this recurrence so that it never ends. Calling NeverEnds is equivalent to setting both NumberOfOccurrences and EndDate to null.
     */
    NeverEnds(): void {
        this.numberOfOccurrences = null;
        this.endDate = null;
        this.Changed();
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Types, this.XmlElementName);
        this.InternalWritePropertiesToXml(writer);
        writer.WriteEndElement();

        let range: RecurrenceRange;

        if (!this.HasEnd) {
            range = new NoEndRecurrenceRange(this.StartDate);
        }
        else if (this.NumberOfOccurrences) {
            range = new NumberedRecurrenceRange(this.StartDate, this.NumberOfOccurrences);
        }
        else {
            range = new EndDateRecurrenceRange(this.StartDate, this.EndDate);
        }

        range.WriteToXml(writer, range.XmlElementName);
    }
}

export module Recurrence {
    export var DailyPattern: new () => DailyPattern;
    export var DailyRegenerationPattern: new () => DailyRegenerationPattern;
    export var IntervalPattern: new () => IntervalPattern;
    export var MonthlyPattern: new () => MonthlyPattern;
    export var MonthlyRegenerationPattern: new () => MonthlyRegenerationPattern;
    export var RelativeMonthlyPattern: new () => RelativeMonthlyPattern;
    export var RelativeYearlyPattern: new () => RelativeYearlyPattern;
    export var WeeklyPattern: new () => WeeklyPattern;
    export var WeeklyRegenerationPattern: new () => WeeklyRegenerationPattern;
    export var YearlyPattern: new () => YearlyPattern;
    export var YearlyRegenerationPattern: new () => YearlyRegenerationPattern;
}