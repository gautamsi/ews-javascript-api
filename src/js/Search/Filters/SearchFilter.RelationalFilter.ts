import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../../Core/ExchangeService";
import {PropertyDefinitionBase} from "../../PropertyDefinitions/PropertyDefinitionBase";
import {ServiceValidationException} from '../../Exceptions/ServiceValidationException';
import {StringHelper, TypeSystem} from '../../ExtensionMethods';
import {Strings} from "../../Strings";
import {XmlAttributeNames} from "../../Core/XmlAttributeNames";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {PropertyBasedFilter} from "./SearchFilter.PropertyBasedFilter";
/**
 * Represents the base class for relational filters (for example, IsEqualTo, IsGreaterThan or IsLessThanOrEqualTo).
 */
export abstract class RelationalFilter extends PropertyBasedFilter {

    private otherPropertyDefinition: PropertyDefinitionBase;
    private value: any;

    /**
     * Gets or sets the definition of the property to compare with. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.) 
     * The OtherPropertyDefinition and Value properties are mutually exclusive; setting one resets the other to null.
     */
    get OtherPropertyDefinition(): PropertyDefinitionBase {
        return this.otherPropertyDefinition;
    }
    set OtherPropertyDefinition(value: PropertyDefinitionBase) {
        this.SetFieldValue<PropertyDefinitionBase>({ getValue: () => this.otherPropertyDefinition, setValue: (updateValue) => { this.otherPropertyDefinition = updateValue } }, value);
        this.value = null;
    }

    /**
     * Gets or sets the value to compare with. The Value and OtherPropertyDefinition properties are mutually exclusive; setting one resets the other to null.
     */
    get Value(): any {
        return this.value;
    }
    set Value(value: any) {
        this.SetFieldValue<any>({ getValue: () => this.value, setValue: (updateValue) => { this.value = updateValue } }, value);
        this.otherPropertyDefinition = null;
    }

    /**
	 * Initializes a new instance of the **RelationalFilter** class.
	 */
    constructor();
	/**
	 * Initializes a new instance of the **RelationalFilter** class.
	 *
	 * @param   {PropertyDefinitionBase}   propertyDefinition        The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
	 * @param   {PropertyDefinitionBase}   otherPropertyDefinition   The definition of the property to compare with. Property definitions are available on schema classes (EmailMessageSchema, AppointmentSchema, etc.)
	 */
    constructor(propertyDefinition: PropertyDefinitionBase, otherPropertyDefinition: PropertyDefinitionBase);
	/**
	 * Initializes a new instance of the **RelationalFilter** class.
	 *
	 * @param   {PropertyDefinitionBase}   	propertyDefinition   The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
	 * @param   {any}   					value                The value to compare the property with.
	 */
    constructor(propertyDefinition: PropertyDefinitionBase, value: any);
    constructor(propertyDefinition: PropertyDefinitionBase = null, otherPropertyDefinitionOrValue: any | PropertyDefinitionBase = null) {
        arguments.length === 0 ? super() : super(propertyDefinition);
        if (arguments.length === 0) {
            return;
        }

        if (otherPropertyDefinitionOrValue instanceof PropertyDefinitionBase) {
            this.otherPropertyDefinition = otherPropertyDefinitionOrValue;
        }
        else {
            this.value = otherPropertyDefinitionOrValue;
        }
    }

	/**
	 * @internal Validate instance.
	 */
    InternalValidate(): void {
        super.InternalValidate();

        if (this.otherPropertyDefinition == null && this.value == null) {
            throw new ServiceValidationException(Strings.EqualityComparisonFilterIsInvalid);
        }
        else if (this.value != null) {
            // All common value types (String, Int32, DateTime, ...) implement IConvertible.
            // Value types that don't implement IConvertible must implement ISearchStringProvider 
            // in order to be used in a search filter.
            if (!(TypeSystem.IsGenericType(this.value) || (typeof this.value.GetSearchString === 'function'))) // checking - ISearchStringProvider
            {
                throw new ServiceValidationException(
                    StringHelper.Format(Strings.SearchFilterComparisonValueTypeIsNotSupported, (<any>this.constructor).name));
            }
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

        let jsonFieldUriOrConstant = jsObject[XmlElementNames.FieldURIOrConstant];

        if (TypeSystem.GetJsObjectTypeName(jsonFieldUriOrConstant) == XmlElementNames.Constant) {
            this.value = jsonFieldUriOrConstant[XmlElementNames.Value];
        }
        else {
            this.otherPropertyDefinition = PropertyDefinitionBase.LoadFromXmlJsObject(jsObject);
        }
    }

	/**
	 * @internal Writes the elements to XML.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        super.WriteElementsToXml(writer);

        writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.FieldURIOrConstant);

        if (this.Value != null) {
            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Constant);
            writer.WriteAttributeValue(XmlAttributeNames.Value, true /* alwaysWriteEmptyString */, this.Value);
            writer.WriteEndElement(); // Constant
        }
        else {
            this.OtherPropertyDefinition.WriteToXml(writer);
        }

        writer.WriteEndElement(); // FieldURIOrConstant
    }
}

export interface IRelationalFilter {
    new (): RelationalFilter;
    new (propertyDefinition: PropertyDefinitionBase, otherPropertyDefinition: PropertyDefinitionBase): RelationalFilter;
    new (propertyDefinition: PropertyDefinitionBase, value: any): RelationalFilter;
}