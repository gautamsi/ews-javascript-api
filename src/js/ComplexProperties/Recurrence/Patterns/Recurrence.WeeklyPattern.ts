import {ComplexProperty} from "../../ComplexProperty";
import {DateTime} from "../../../DateTime";
import {DayOfTheWeekCollection} from "../DayOfTheWeekCollection";
import {DayOfTheWeek} from "../../../Enumerations/DayOfTheWeek";
import {DayOfWeek} from "../../../Enumerations/DayOfWeek";
import {EwsServiceXmlWriter} from "../../../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../../../Core/EwsUtilities";
import {ExchangeService} from "../../../Core/ExchangeService";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {ServiceValidationException} from "../../../Exceptions/ServiceValidationException";
import {Strings} from "../../../Strings";
import {XmlElementNames} from "../../../Core/XmlElementNames";
import {XmlNamespace} from "../../../Enumerations/XmlNamespace";

import {IntervalPattern} from "./Recurrence.IntervalPattern";
/**
 * Represents a recurrence pattern where each occurrence happens on specific days a specific number of weeks after the previous one.
 */
export class WeeklyPattern extends IntervalPattern {

    private daysOfTheWeek: DayOfTheWeekCollection;
    private firstDayOfWeek: DayOfWeek;

    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    get XmlElementName(): string {
        return XmlElementNames.WeeklyRecurrence;
    }

    /**
     * Gets the list of the days of the week when occurrences happen.
     */
    get DaysOfTheWeek(): DayOfTheWeekCollection {
        return this.daysOfTheWeek;
    }

    /**
     * Gets or sets the first day of the week for this recurrence.
     */
    get FirstDayOfWeek(): DayOfWeek {
        return super.GetFieldValueOrThrowIfNull<DayOfWeek>(this.firstDayOfWeek, "FirstDayOfWeek");
    }
    set FirstDayOfWeek(value: DayOfWeek) {
        this.SetFieldValue<DayOfWeek>({ getValue: () => this.firstDayOfWeek, setValue: (updateValue) => { this.firstDayOfWeek = updateValue } }, value);
    }

    /**
     * Initializes a new instance of the **WeeklyPattern** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **WeeklyPattern** class.
     *
     * @param   {DateTime}          startDate       The date and time when the recurrence starts.
     * @param   {number}            interval        The number of weeks between each occurrence.
     * @param   {DayOfTheWeek[]}    daysOfTheWeek   The days of the week when occurrences happen.
     */
    constructor(startDate: DateTime, interval: number, daysOfTheWeek: DayOfTheWeek[]);
    constructor(startDate?: DateTime, interval?: number, daysOfTheWeek: DayOfTheWeek[] = []) {
        if (arguments.length === 0) {
            super();
            this.daysOfTheWeek.OnChange.push(this.DaysOfTheWeekChanged);
        }
        else {
            super(startDate, interval);
        }
        this.firstDayOfWeek = null;
        this.daysOfTheWeek = new DayOfTheWeekCollection()
        this.daysOfTheWeek.AddRange(daysOfTheWeek);
    }

    /**
     * Change event handler.
     *
     * @param   {ComplexProperty}   complexProperty   The complex property.
     */
    private DaysOfTheWeekChanged(complexProperty: ComplexProperty): void { this.Changed(); }

    /**
     * @internal Validates this instance.
     */
    InternalValidate(): void {
        super.InternalValidate();

        if (this.DaysOfTheWeek.Count == 0) {
            throw new ServiceValidationException(Strings.DaysOfTheWeekNotSpecified);
        }
    }

    /**
     * @internal Write properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void {
        super.InternalWritePropertiesToXml(writer);

        this.DaysOfTheWeek.WriteToXml(writer, XmlElementNames.DaysOfWeek);

        if (this.firstDayOfWeek) {
            //  We only allow the "FirstDayOfWeek" parameter for the Exchange2010_SP1 schema
            //  version.
            //
            EwsUtilities.ValidatePropertyVersion(
                <ExchangeService>writer.Service,
                ExchangeVersion.Exchange2010_SP1,
                "FirstDayOfWeek");

            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.FirstDayOfWeek,
                this.firstDayOfWeek);
        }
    }


    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        super.LoadFromXmlJsObject(jsObject, service);

        for (let key in jsObject) {
            switch (key) {
                case XmlElementNames.DaysOfWeek:
                    this.DaysOfTheWeek.LoadFromXmlJsObjectValue(jsObject[key]);
                    break;
                case XmlElementNames.FirstDayOfWeek:
                    this.FirstDayOfWeek = DayOfWeek[<string>jsObject[key]];
                    break;
                default:
                    break;
            }
        }
    }
}