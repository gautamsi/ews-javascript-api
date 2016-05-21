import {DateTime} from "../DateTime";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../Core/ExchangeService";
import {ServiceValidationException} from "../Exceptions/ServiceValidationException";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents the date and time range within which messages have been received.
 * 
 * @sealed
 */
export class RulePredicateDateRange extends ComplexProperty {

	/**
	 * The start DateTime.
	 */
	private start: DateTime = null; //Nullable

	/**
	 * The end DateTime.
	 */
	private end: DateTime = null; //Nullable

	/**
	 * @Nullable Gets or sets the range start date and time. 
	 * If Start is set to null, no start date applies.
	 */
	get Start(): DateTime {
		return this.start;
	}
	set Start(value: DateTime) {
		this.SetFieldValue<DateTime>({ getValue: () => this.start, setValue: (updateValue) => { this.start = updateValue } }, value);
	}

	/**
	 * @Nullable Gets or sets the range end date and time. 
	 * If End is set to null, no end date applies.
	 */
	get End(): DateTime {
		return this.end;
	}
	set End(value: DateTime) {
		this.SetFieldValue<DateTime>({ getValue: () => this.end, setValue: (updateValue) => { this.end = updateValue } }, value);
	}

	/**
	 * @internal Initializes a new instance of the **RulePredicateDateRange** class.
	 */
	constructor() {
		super();
	}

	/**
	 * @internal Validates this instance.
	 */
	InternalValidate(): void {
		super.InternalValidate();
		if (this.start &&
			this.end &&
			this.start.TotalMilliSeconds > this.end.TotalMilliSeconds) {
			throw new ServiceValidationException("Start date time cannot be bigger than end date time.");
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
				case XmlElementNames.StartDateTime:
					this.start = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                case XmlElementNames.EndDateTime:
                    this.end = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
					break;
                default:
                    break;
			}
		}
	}

	/**
	 * @internal Writes the elements to XML writer.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
		if (this.Start) {
			writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.StartDateTime, this.Start);
		}
		if (this.End) {
			writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.EndDateTime, this.End);
		}
	}
}