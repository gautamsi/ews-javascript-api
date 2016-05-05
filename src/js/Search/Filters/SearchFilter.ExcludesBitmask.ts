import {Convert} from '../../ExtensionMethods';
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../../Core/ExchangeService";
import {PropertyDefinitionBase} from "../../PropertyDefinitions/PropertyDefinitionBase";
import {XmlAttributeNames} from "../../Core/XmlAttributeNames";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {PropertyBasedFilter} from "./SearchFilter.PropertyBasedFilter";
/**
 * Represents a bitmask exclusion search filter. Applications can use ExcludesBitExcludesBitmaskFilter to define conditions such as "(OrdinalField and 0x0010) != 0x0010"
 */
export class ExcludesBitmask extends PropertyBasedFilter {

	private bitmask: number;

	/**
	 * Gets or sets the bitmask to compare the property with.
	 */
	get Bitmask(): number {
		return this.bitmask;
	}
	set Bitmask(value: number) {
		this.SetFieldValue<number>({ getValue: () => this.bitmask, setValue: (updateValue) => { this.bitmask = updateValue } }, value);
	}

	/**
	 * Initializes a new instance of the **ExcludesBitmask** class.
	 */
	constructor();
	/**
	 * Initializes a new instance of the **ExcludesBitmask** class.
	 *
	 * @param   {PropertyDefinitionBase}   	propertyDefinition   The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
	 * @param   {number}   					bitmask              The bitmask to compare with.
	 */
	constructor(propertyDefinition: PropertyDefinitionBase, bitmask: number);
	constructor(propertyDefinition?: PropertyDefinitionBase, bitmask: number = 0) {
		arguments.length === 0 ? super() : super(propertyDefinition);
		this.bitmask = bitmask;
	}

	/**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      XML element name.
	 */
    GetXmlElementName(): string { return XmlElementNames.Excludes; }

	/**
     * @internal Loads service object from XML.
     *
     * @param   {any}               jsObject                Json Object converted from XML.
     * @param   {ExchangeService}   service                 The service.    
     * @param   {string}            typeName                 type name, when provided prevent call for type name check.    
	 * @return  {SearchFilter}      SearchFilter instance.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
		super.LoadFromXmlJsObject(jsObject, service);

		this.bitmask = Convert.toInt(jsObject[XmlElementNames.Bitmask][XmlElementNames.Value]);
	}

	/**
	 * @internal Writes the elements to XML.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
	WriteElementsToXml(writer: EwsServiceXmlWriter): void {
		super.WriteElementsToXml(writer);

		writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Bitmask);
		writer.WriteAttributeValue(XmlAttributeNames.Value, this.Bitmask);
		writer.WriteEndElement(); // Bitmask
	}
}

export interface IExcludesBitmask {
	new (): ExcludesBitmask;
	new (propertyDefinition: PropertyDefinitionBase, bitmask: number): ExcludesBitmask;
}