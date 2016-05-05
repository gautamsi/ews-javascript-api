import {ComparisonMode} from "../../Enumerations/ComparisonMode";
import {ContainmentMode} from "../../Enumerations/ContainmentMode";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../../Core/ExchangeService";
import {PropertyDefinitionBase} from "../../PropertyDefinitions/PropertyDefinitionBase";
import {ServiceValidationException} from '../../Exceptions/ServiceValidationException';
import {StringHelper} from '../../ExtensionMethods';
import {Strings} from "../../Strings";
import {XmlAttributeNames} from "../../Core/XmlAttributeNames";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {PropertyBasedFilter} from "./SearchFilter.PropertyBasedFilter";
/**
 * Represents a search filter that checks for the presence of a substring inside a text property. Applications can use ContainsSubstring to define conditions such as "Field CONTAINS Value" or "Field IS PREFIXED WITH Value".
 */
export class ContainsSubstring extends PropertyBasedFilter {

	private containmentMode: ContainmentMode; // = ContainmentMode.Substring;
	private comparisonMode: ComparisonMode; // = ComparisonMode.IgnoreCase;
	private value: string; // = null;

	/**
	 * Gets or sets the containment mode.
	 */
	get ContainmentMode(): ContainmentMode {
		return this.containmentMode;
	}
	set ContainmentMode(value: ContainmentMode) {
		this.SetFieldValue<ContainmentMode>({ getValue: () => this.containmentMode, setValue: (updateValue) => { this.containmentMode = updateValue } }, value);
	}

	/**
	 * Gets or sets the comparison mode.
	 */
	get ComparisonMode(): ComparisonMode {
		return this.comparisonMode;
	}
	set ComparisonMode(value: ComparisonMode) {
		this.SetFieldValue<ComparisonMode>({ getValue: () => this.comparisonMode, setValue: (updateValue) => { this.comparisonMode = updateValue } }, value);
	}

	/**
	 * Gets or sets the value to compare the specified property with.
	 */
	get Value(): string {
		return this.value;
	}
	set Value(value: string) {
		this.SetFieldValue<string>({ getValue: () => this.value, setValue: (updateValue) => { this.value = updateValue } }, value);
	}

	/**
	 * Initializes a new instance of the **ContainsSubstring** class.
	 */
	constructor();
	/**
	 * Initializes a new instance of the **ContainsSubstring** class.
	 *
	 * @param   {PropertyDefinitionBase}   	propertyDefinition   The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
	 * @param   {string}   					value                The value to compare with.
	 */
	constructor(propertyDefinition: PropertyDefinitionBase, value: string);
	/**
	 * Initializes a new instance of the **ContainsSubstring** class.
	 *
	 * @param   {PropertyDefinitionBase}   	propertyDefinition   The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
	 * @param   {string}   					value                The value to compare with.
	 * @param   {ContainmentMode}   		containmentMode      The containment mode.
	 * @param   {ComparisonMode}   			comparisonMode       The comparison mode.
	 */
	constructor(propertyDefinition: PropertyDefinitionBase, value: string, containmentMode: ContainmentMode, comparisonMode: ComparisonMode);
	constructor(propertyDefinition: PropertyDefinitionBase = null, value: string = null, containmentMode: ContainmentMode = ContainmentMode.Substring, comparisonMode: ComparisonMode = ComparisonMode.IgnoreCase) {
		arguments.length === 0 ? super() : super(propertyDefinition);
		this.value = value;
		this.containmentMode = containmentMode;
		this.comparisonMode = comparisonMode;
	}

	/**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      XML element name.
	 */
	GetXmlElementName(): string { return XmlElementNames.Contains; }

	/**
	 * @internal Validate instance.
	 */
	InternalValidate(): void {
		super.InternalValidate();

		if (StringHelper.IsNullOrEmpty(this.value)) {
			throw new ServiceValidationException(Strings.ValuePropertyMustBeSet);
		}
	}

	/**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
		super.LoadFromXmlJsObject(jsObject, service);

		this.value = jsObject[XmlElementNames.Constant][XmlElementNames.Value];
		this.containmentMode = ContainmentMode[<string>jsObject[XmlAttributeNames.ContainmentMode]];
		this.comparisonMode = ComparisonMode[<string>jsObject[XmlAttributeNames.ContainmentComparison]];
	}

	/**
	 * @internal Writes the attributes to XML.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
	WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
		super.WriteAttributesToXml(writer);

		writer.WriteAttributeValue(XmlAttributeNames.ContainmentMode, this.ContainmentMode);
		writer.WriteAttributeValue(XmlAttributeNames.ContainmentComparison, this.ComparisonMode);
	}

	/**
	 * @internal Writes the elements to XML.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
	WriteElementsToXml(writer: EwsServiceXmlWriter): void {
		super.WriteElementsToXml(writer);

		writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Constant);
		writer.WriteAttributeValue(XmlAttributeNames.Value, this.Value);
		writer.WriteEndElement(); // Constant
	}
}

export interface IContainsSubstring {
	new (): ContainsSubstring;
	new (propertyDefinition: PropertyDefinitionBase, value: string): ContainsSubstring;
	new (propertyDefinition: PropertyDefinitionBase, value: string, containmentMode: ContainmentMode, comparisonMode: ComparisonMode): ContainsSubstring;
}