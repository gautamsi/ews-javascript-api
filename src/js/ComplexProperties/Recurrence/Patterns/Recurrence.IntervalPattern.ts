import { ArgumentOutOfRangeException } from "../../../Exceptions/ArgumentException";
import { DateTime } from "../../../DateTime";
import { EwsServiceXmlWriter } from "../../../Core/EwsServiceXmlWriter";
import { ExchangeService } from "../../../Core/ExchangeService";
import { Strings } from "../../../Strings";
import { XmlElementNames } from "../../../Core/XmlElementNames";
import { XmlNamespace } from "../../../Enumerations/XmlNamespace";

import { Recurrence } from "./Recurrence";
/**
 * Represents a recurrence pattern where each occurrence happens at a specific interval after the previous one.
 */
export abstract class IntervalPattern extends Recurrence {

    private interval: number;

    /**
     * Gets or sets the interval between occurrences. 
     */
    get Interval(): number {
        return this.interval;
    }
    set Interval(value: number) {
        if (value < 1) {
            throw new ArgumentOutOfRangeException("value", Strings.IntervalMustBeGreaterOrEqualToOne);
        }
        this.SetFieldValue<number>({ getValue: () => this.interval, setValue: (updateValue) => { this.interval = updateValue } }, value);

    }

    /**
     * @internal Initializes a new instance of the **IntervalPattern** class.
     */
    constructor();
    /**
     * @internal nitializes a new instance of the **IntervalPattern** class.
     *
     * @param   {DateTime}  startDate   The date and time when the recurrence starts.
     * @param   {number}    interval    The number of days between each occurrence.
     */
    constructor(startDate: DateTime, interval: number);
    constructor(startDate?: DateTime, interval: number = 1) {
        if (arguments.length === 0) {
            super();
            this.interval = 1;
            return;
        }
        super(startDate);
        if (interval < 1) {
            throw new ArgumentOutOfRangeException("interval", Strings.IntervalMustBeGreaterOrEqualToOne);
        }

        this.Interval = interval;
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
            XmlElementNames.Interval,
            this.Interval);
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
                case XmlElementNames.Interval:
                    this.interval = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    }
}