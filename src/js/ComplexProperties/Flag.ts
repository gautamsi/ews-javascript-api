import {DateTime} from "../DateTime";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeService} from "../Core/ExchangeService";
import {ItemFlagStatus} from "../Enumerations/ItemFlagStatus";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Encapsulates information on the occurrence of a recurring appointment. 
 */
export class Flag extends ComplexProperty {
    private flagStatus: ItemFlagStatus = ItemFlagStatus.NotFlagged;
    private startDate: DateTime = null;
    private dueDate: DateTime = null;
    private completeDate: DateTime = null;

    /**
     * Gets or sets the flag status.
     */
    get FlagStatus(): ItemFlagStatus {
        return this.flagStatus;
    }
    set FlagStatus(value: ItemFlagStatus) {
        this.SetFieldValue<ItemFlagStatus>({ getValue: () => this.flagStatus, setValue: (updateValue) => { this.flagStatus = updateValue } }, value);
    }

    /**
     * Gets the start date.
     */
    get StartDate(): DateTime {
        return this.startDate;
    }
    set StartDate(value: DateTime) {
        this.SetFieldValue<DateTime>({ getValue: () => this.startDate, setValue: (updateValue) => { this.startDate = updateValue } }, value);
    }

    /**
     * Gets the due date.
     */
    get DueDate(): DateTime {
        return this.dueDate;
    }
    set DueDate(value: DateTime) {
        this.SetFieldValue<DateTime>({ getValue: () => this.dueDate, setValue: (updateValue) => { this.dueDate = updateValue } }, value);
    }

    /**
     * Gets the complete date.
     */
    get CompleteDate(): DateTime {
        return this.completeDate;
    }
    set CompleteDate(value: DateTime) {
        this.SetFieldValue<DateTime>({ getValue: () => this.completeDate, setValue: (updateValue) => { this.completeDate = updateValue } }, value);
    }

    /**
     * Initializes a new instance of the **Flag** class.
     */
    constructor() {
        super();
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames.FlagStatus:
                    this.flagStatus = ItemFlagStatus[<string>jsObject[key]];
                    break;
                case XmlElementNames.StartDate:
                    this.startDate = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                case XmlElementNames.DueDate:
                    this.dueDate = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                case XmlElementNames.CompleteDate:
                    this.completeDate = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * @internal Validates this instance.
     */
    Validate(): void {
        EwsUtilities.ValidateParam(this.flagStatus, "FlagStatus");
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.FlagStatus, ItemFlagStatus[this.FlagStatus]);

        if (this.FlagStatus == ItemFlagStatus.Flagged && this.StartDate != null && this.DueDate != null) {
            writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.StartDate, this.StartDate);
            writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.DueDate, this.DueDate);
        }
        else if (this.FlagStatus == ItemFlagStatus.Complete && this.CompleteDate != null) {
            writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.CompleteDate, this.CompleteDate);
        }
    }
}