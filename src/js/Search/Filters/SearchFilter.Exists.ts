import {PropertyDefinitionBase} from "../../PropertyDefinitions/PropertyDefinitionBase";
import {XmlElementNames} from "../../Core/XmlElementNames";

import {PropertyBasedFilter} from "./SearchFilter.PropertyBasedFilter";
/**
 * Represents a search filter checking if a field is set. Applications can use ExistsFilter to define conditions such as "Field IS SET".
 */
export class Exists extends PropertyBasedFilter {

	/**
	 * Initializes a new instance of the **Exists** class.
	 */
	constructor();
	/**
	 * Initializes a new instance of the **Exists** class.
	 *
	 * @param   {PropertyDefinitionBase}   	propertyDefinition   The definition of the property to check the existence of. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
	 */
	constructor(propertyDefinition: PropertyDefinitionBase);
	constructor(propertyDefinition?: PropertyDefinitionBase) {
		arguments.length === 0 ? super() : super(propertyDefinition);
	}

	/**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      XML element name.
	 */
    GetXmlElementName(): string { return XmlElementNames.Exists; }
}

export interface IExists {
	new (): Exists;
	new (propertyDefinition: PropertyDefinitionBase): Exists;
}