import {Convert} from "../ExtensionMethods";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../Core/ExchangeService";
import {ServiceValidationException} from "../Exceptions/ServiceValidationException";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents the minimum and maximum size of a message.
 * 
 * @sealed
 */
export class RulePredicateSizeRange extends ComplexProperty {

	/**
	 * Minimum Size.
	 */
	private minimumSize: number = null; //Nullable

	/**
	 * Mamixmum Size.
	 */
	private maximumSize: number = null; //Nullable

	/**
	 * @Nullable Gets or sets the minimum size, in kilobytes. 
	 * If MinimumSize is set to null, no minimum size applies.
	 */
	get MinimumSize(): number {
		return this.minimumSize;
	}
	set MinimumSize(value: number) {
		this.SetFieldValue<number>({ getValue: () => this.minimumSize, setValue: (updateValue) => { this.minimumSize = updateValue } }, value);
	}

	/**
	 * @Nullable Gets or sets the maximum size, in kilobytes. 
	 * If MaximumSize is set to null, no maximum size applies.
	 */
	get MaximumSize(): number {
		return this.maximumSize;
	}
	set MaximumSize(value: number) {
		this.SetFieldValue<number>({ getValue: () => this.maximumSize, setValue: (updateValue) => { this.maximumSize = updateValue } }, value);
	}

	/**
	 * @internal Initializes a new instance of the **RulePredicateSizeRange** class.
	 */
	constructor() {
		super();
	}

	/**
	 * @internal Validates this instance.
	 */
	InternalValidate(): void {
		super.InternalValidate();
		if (this.minimumSize &&
			this.maximumSize &&
			this.minimumSize > this.maximumSize) {
			throw new ServiceValidationException("MinimumSize cannot be larger than MaximumSize.");
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
				case XmlElementNames.MinimumSize:
                    this.minimumSize = Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames.MaximumSize:
                    this.maximumSize = Convert.toNumber(jsObject[key]);
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
		if (this.MinimumSize) {
			writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.MinimumSize, this.MinimumSize);
		}
		if (this.MaximumSize) {
			writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.MaximumSize, this.MaximumSize);
		}
	}
}