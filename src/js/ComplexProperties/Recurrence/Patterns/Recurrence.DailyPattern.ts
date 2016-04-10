import {DateTime} from "../../../DateTime";
import {XmlElementNames} from "../../../Core/XmlElementNames";

import {IntervalPattern} from "./Recurrence.IntervalPattern";
/**
 * Represents a recurrence pattern where each occurrence happens a specific number of days after the previous one.
 */
export class DailyPattern extends IntervalPattern {

    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    get XmlElementName(): string {
        return XmlElementNames.DailyRecurrence;
    }

    /**
     * Initializes a new instance of the **DailyPattern** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **DailyPattern** class.
     *
     * @param   {DateTime}  startDate   The date and time when the recurrence starts.
     * @param   {number}    interval    The number of days between each occurrence.
     */
    constructor(startDate: DateTime, interval: number);
    constructor(startDate?: DateTime, interval?: number) {
        if (arguments.length === 0) {
            super();
            return;
        }
        super(startDate, interval);
    }
}