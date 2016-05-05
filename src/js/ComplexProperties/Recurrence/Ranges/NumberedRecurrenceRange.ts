import {Convert} from "../../../ExtensionMethods";
import {DateTime} from "../../../DateTime";
import {EwsServiceXmlWriter} from "../../../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../../../Core/ExchangeService";
import {Recurrence} from "../Patterns/Recurrence";
import {XmlElementNames} from "../../../Core/XmlElementNames";
import {XmlNamespace} from "../../../Enumerations/XmlNamespace";

import {RecurrenceRange} from "./RecurrenceRange";
/**
 * @internal Represents recurrence range with start and number of occurance.
 */
export class NumberedRecurrenceRange extends RecurrenceRange {

    private numberOfOccurrences: number;

    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    get XmlElementName(): string {
        return XmlElementNames.NumberedRecurrence;
    }

    /**
     * Gets or sets the number of occurrences.
     *
     * @value   The number of occurrences.
     */
    get NumberOfOccurrences(): number {
        return this.numberOfOccurrences;
    }
    set NumberOfOccurrences(value: number) {
        this.SetFieldValue<number>({ getValue: () => this.numberOfOccurrences, setValue: (updateValue) => { this.numberOfOccurrences = updateValue } }, value);

    }


    /**
     * Initializes a new instance of the **NumberedRecurrenceRange** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **NumberedRecurrenceRange** class.
     *
     * @param   {DateTime}   startDate             The start date.
     * @param   {number}   numberOfOccurrences   The number of occurrences.
     */
    constructor(startDate: DateTime, numberOfOccurrences: number);
    constructor(startDate: DateTime = null, numberOfOccurrences: number = null) {
        if (arguments.length === 0) {
            super();
            return;
        }
        super(startDate);
        this.numberOfOccurrences = numberOfOccurrences;

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
                case XmlElementNames.NumberOfOccurrences:
                    this.numberOfOccurrences = Convert.toNumber(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * Setups the recurrence.
     *
     * @param   {Recurrence}   recurrence   The recurrence.
     */
    SetupRecurrence(recurrence: Recurrence): void {
        super.SetupRecurrence(recurrence);

        recurrence.NumberOfOccurrences = this.NumberOfOccurrences;
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        super.WriteElementsToXml(writer);

            if (this.NumberOfOccurrences)
            {
                writer.WriteElementValue(
                    XmlNamespace.Types,
                    XmlElementNames.NumberOfOccurrences,
                    this.NumberOfOccurrences);
            }
    }
}