import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../../Core/ExchangeService";
import {PropertyDefinitionBase} from "../../PropertyDefinitions/PropertyDefinitionBase";
import {ServiceValidationException} from '../../Exceptions/ServiceValidationException';
import {Strings} from "../../Strings";
import {XmlElementNames} from "../../Core/XmlElementNames";

import {SearchFilter} from "./SearchFilter";
export abstract class PropertyBasedFilter extends SearchFilter {

	private propertyDefinition: PropertyDefinitionBase = null;

	/**
	 * Gets or sets the definition of the property that is involved in the search filter. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
	 */
	get PropertyDefinition(): PropertyDefinitionBase {
		return this.propertyDefinition;
	}
	set PropertyDefinition(value: PropertyDefinitionBase) {
		this.SetFieldValue<PropertyDefinitionBase>({ getValue: () => this.propertyDefinition, setValue: (updateValue) => { this.propertyDefinition = updateValue } }, value);
	}

	/**
	 * @internal Initializes a new instance of the **PropertyBasedFilter** class.˝
	 */
	constructor();
	/**
	 * @internal Initializes a new instance of the **PropertyBasedFilter** class.
	 *
	 * @param   {PropertyDefinitionBase}   propertyDefinition   The property definition.
	 */
	constructor(propertyDefinition: PropertyDefinitionBase);
	constructor(propertyDefinition?: PropertyDefinitionBase) {
		super();
		if (arguments.length === 1) {
			this.propertyDefinition = propertyDefinition;
		}
	}

	/**
	 * @internal Validate instance.
	 */
	InternalValidate(): void {
		if (this.propertyDefinition == null) {
			throw new ServiceValidationException(Strings.PropertyDefinitionPropertyMustBeSet);
		}
	}

	/**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
		this.PropertyDefinition = PropertyDefinitionBase.LoadFromXmlJsObject(jsObject);
	}

	/**
	 * @internal Writes the elements to XML.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
	WriteElementsToXml(writer: EwsServiceXmlWriter): void { this.PropertyDefinition.WriteToXml(writer); }
}

export interface IPropertyBasedFilter {
	new (): PropertyBasedFilter;
	new (propertyDefinition: PropertyDefinitionBase): PropertyBasedFilter;
}