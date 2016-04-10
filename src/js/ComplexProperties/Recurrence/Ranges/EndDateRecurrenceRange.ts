import {DateTime} from "../../../DateTime";
import {EwsServiceXmlWriter} from "../../../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../../../Core/EwsUtilities";
import {ExchangeService} from "../../../Core/ExchangeService";
import {Recurrence} from "../Patterns/Recurrence";
import {XmlElementNames} from "../../../Core/XmlElementNames";
import {XmlNamespace} from "../../../Enumerations/XmlNamespace";

import {RecurrenceRange} from "./RecurrenceRange";
/**
 * @internal Represents recurrent range with an end date.
 */
export class EndDateRecurrenceRange extends RecurrenceRange {

    private endDate: DateTime;

    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    get XmlElementName(): string {
        return XmlElementNames.EndDateRecurrence;
    }

    /**
     * Gets or sets the end date.
     *
     * @value   The end date.
     */
    get EndDate(): DateTime {
        return this.endDate;
    }
    set EndDate(value: DateTime) {
        this.SetFieldValue<DateTime>({ getValue: () => this.endDate, setValue: (updateValue) => { this.endDate = updateValue } }, value);
    }

    /**
     * Initializes a new instance of the **EndDateRecurrenceRange** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **EndDateRecurrenceRange** class.
     *
     * @param   {DateTime}   startDate   The start date.
     * @param   {DateTime}   endDate     The end date.
     */
    constructor(startDate: DateTime, endDate: DateTime);
    constructor(startDate?: DateTime, endDate: DateTime = null) {
        if (arguments.length === 0) {
            super()
        }
        else {
            super(startDate)
        }
        this.endDate = endDate;
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
                case XmlElementNames.EndDate:
                    this.endDate = service.ConvertStartDateToUnspecifiedDateTime(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * @internal Setups the recurrence.
     *
     * @param   {Recurrence}   recurrence   The recurrence.
     */
    SetupRecurrence(recurrence: Recurrence): void {
        super.SetupRecurrence(recurrence);

        recurrence.EndDate = this.EndDate;
    }

    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        super.WriteElementsToXml(writer);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.EndDate,
            EwsUtilities.DateTimeToXSDate(this.EndDate));
    }
}