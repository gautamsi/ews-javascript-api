import {DateTime} from "../../../DateTime";
import {XmlElementNames} from "../../../Core/XmlElementNames";

import {IntervalPattern} from "./Recurrence.IntervalPattern";
/**
 * Represents a regeneration pattern, as used with recurring tasks, where each occurrence happens a specified number of years after the previous one is completed.
 */
export class YearlyRegenerationPattern extends IntervalPattern {

    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    get XmlElementName(): string {
        return XmlElementNames.MonthlyRegeneration;
    }

    /**
     * Gets a value indicating whether this instance is a regeneration pattern.
     *
     * @value   *true* if this instance is a regeneration pattern; otherwise, *false*.</value>
     */
    get IsRegenerationPattern(): boolean {
        return true;
    }

    /**
     * Initializes a new instance of the **YearlyRegenerationPattern** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **YearlyRegenerationPattern** class.
     *
     * @param   {DateTime}   startDate   The date and time when the recurrence starts.
     * @param   {number}   interval    The number of years between the current occurrence and the next, after the current occurrence is completed.
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