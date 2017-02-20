import {DateTime} from "../../../DateTime";
import {EwsServiceXmlWriter} from "../../../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../../../Core/EwsUtilities";
import {ExchangeService} from "../../../Core/ExchangeService";
import {Recurrence} from "../Patterns/Recurrence";
import {XmlElementNames} from "../../../Core/XmlElementNames"; 
import {XmlNamespace} from "../../../Enumerations/XmlNamespace";

import {ComplexProperty} from "../../ComplexProperty";
/**
 * @internal Represents recurrence range with start and end dates.
 */
export abstract class RecurrenceRange extends ComplexProperty {


    private startDate: DateTime = null;
    private recurrence: Recurrence = null;

    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    get XmlElementName(): string { return null; };

    /**
     * @internal Gets or sets the recurrence.
     *
     * @value   The recurrence.
     */
    get Recurrence(): Recurrence {
        return this.recurrence;
    }
    set Recurrence(value: Recurrence) {
        this.recurrence = value;
    }

    /**
     * @internal Gets or sets the start date.
     *
     * @value   The start date.
     */
    get StartDate(): DateTime {
        return this.startDate;
    }
    set StartDate(value: DateTime) {
        this.SetFieldValue<DateTime>({ getValue: () => this.startDate, setValue: (updateValue) => { this.startDate = updateValue } }, value);
    }


    /**
     * @internal Initializes a new instance of the **RecurrenceRange** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **RecurrenceRange** class.
     *
     * @param   {DateTime}   startDate   The start date.
     */
    constructor(startDate: DateTime);
    constructor(startDate: DateTime = null) {
        super();
        this.startDate = startDate;
    }

    /**
     * @internal Changes handler.
     */
    Changed(): void {
        if (this.Recurrence != null) {
            this.Recurrence.Changed();
        }
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        for (let key in jsObject) {
            switch (key) {
                case XmlElementNames.StartDate:

                    let startDate: DateTime = service.ConvertStartDateToUnspecifiedDateTime(jsObject[key]);
                    if (startDate) {
                        this.startDate = startDate;
                    }
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * @internal Setup the recurrence.
     *
     * @param   {Recurrence}   recurrence   The recurrence.
     */
    SetupRecurrence(recurrence: Recurrence): void { recurrence.StartDate = this.StartDate; }



    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.StartDate,
            EwsUtilities.DateTimeToXSDate(this.StartDate));
    }
}