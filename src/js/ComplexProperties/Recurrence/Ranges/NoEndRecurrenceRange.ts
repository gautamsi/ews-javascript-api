import {DateTime} from "../../../DateTime";
import {Recurrence} from "../Patterns/Recurrence";
import {XmlElementNames} from "../../../Core/XmlElementNames";

import {RecurrenceRange} from "./RecurrenceRange";
/**
 * @internal Represents recurrence range with no end date.
 */
export class NoEndRecurrenceRange extends RecurrenceRange {

    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    get XmlElementName(): string {
        return XmlElementNames.NoEndRecurrence;
    }

    /**
     * Initializes a new instance of the **NoEndRecurrenceRange** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **NoEndRecurrenceRange** class.
     *
     * @param   {DateTime}   startDate   The start date.
     */
    constructor(startDate: DateTime);
    constructor(startDate: DateTime = null) {
        arguments.length === 0 ? super() : super(startDate);
    }
    /**
     * @internal Setups the recurrence.
     *
     * @param   {Recurrence}   recurrence   The recurrence.
     */
    SetupRecurrence(recurrence: Recurrence): void {
        super.SetupRecurrence(recurrence);

        recurrence.NeverEnds();
    }
}