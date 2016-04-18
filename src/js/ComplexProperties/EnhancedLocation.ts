import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeService} from "../Core/ExchangeService";
import {PersonaPostalAddress} from "./PersonaPostalAddress";
import {StringHelper} from "../ExtensionMethods";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents Enhanced Location.
 */
export class EnhancedLocation extends ComplexProperty {

    private displayName: string = null;
    private annotation: string = null;
    private personaPostalAddress: PersonaPostalAddress = null;

    /**
     * Gets or sets the Location DisplayName.
     */
    get DisplayName(): string {
        return this.displayName;
    }
    set DisplayName(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.displayName, setValue: (fieldValue) => { this.displayName = fieldValue } }, value);
    }

    /**
     * Gets or sets the Location Annotation.
     */
    get Annotation(): string {
        return this.annotation;
    }
    set Annotation(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.annotation, setValue: (fieldValue) => { this.annotation = fieldValue } }, value);
    }

    /**
     * Gets or sets the Persona Postal Address.
     */
    get PersonaPostalAddress(): PersonaPostalAddress {
        return this.personaPostalAddress;
    }
    set PersonaPostalAddress(value: PersonaPostalAddress) {
        if (this.personaPostalAddress !== value) {
            if (this.personaPostalAddress !== null) {
                //todo: implement OnChange delegate/event
                //this.personaPostalAddress.OnChange.pop(this.PersonaPostalAddress_OnChange);
            }

            this.SetFieldValue<PersonaPostalAddress>({ getValue: () => this.personaPostalAddress, setValue: (fieldValue) => { this.personaPostalAddress = fieldValue } }, value);

            //todo: implement OnChange delegate/event
            //this.personaPostalAddress.OnChange.push(this.PersonaPostalAddress_OnChange);
        }
    }

    /**
     * @internal Initializes a new instance of the **EnhancedLocation** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **EnhancedLocation** class.
     *
     * @param   {string}   displayName            The location DisplayName.
     */
    constructor(displayName: string);
    /**
     * Initializes a new instance of the **EnhancedLocation** class.
     *
     * @param   {string}   displayName            The location DisplayName.
     * @param   {string}   annotation             The annotation on the location.
     */
    constructor(displayName: string, annotation: string);
    /**
     * Initializes a new instance of the **EnhancedLocation** class.
     *
     * @param   {string}                displayName            The location DisplayName.
     * @param   {string}                annotation             The annotation on the location.
     * @param   {PersonaPostalAddress}  personaPostalAddress   The persona postal address.
     */
    constructor(displayName: string, annotation: string, personaPostalAddress: PersonaPostalAddress);
    constructor(displayName?: string, annotation: string = StringHelper.Empty, personaPostalAddress: PersonaPostalAddress = new PersonaPostalAddress()) {
        super();

        this.displayName = displayName;
        this.annotation = annotation;
        this.personaPostalAddress = personaPostalAddress;
        //todo: implement OnChange delegate/event
        //this.personaPostalAddress.OnChange += new ComplexPropertyChangedDelegate(PersonaPostalAddress_OnChange);
    }

    /**
     * @internal Validates this instance.
     */
    InternalValidate(): void {
        super.InternalValidate();
        EwsUtilities.ValidateParam(this.displayName, "DisplayName");
        EwsUtilities.ValidateParamAllowNull(this.annotation, "Annotation");
        EwsUtilities.ValidateParamAllowNull(this.personaPostalAddress, "PersonaPostalAddress");
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
                case XmlElementNames.LocationDisplayName:
                    this.displayName = jsObject[key];
                    break;
                case XmlElementNames.LocationAnnotation:
                    this.annotation = jsObject[key];
                    break;
                case XmlElementNames.PersonaPostalAddress:
                    this.personaPostalAddress = new PersonaPostalAddress();
                    this.personaPostalAddress.LoadFromXmlJsObject(jsObject[key], service);
                    //todo: implement OnChange delegate/event
                    //this.personaPostalAddress.OnChange += new ComplexPropertyChangedDelegate(PersonaPostalAddress_OnChange);
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * PersonaPostalAddress OnChange.
     *
     * @param   {ComplexProperty}   complexProperty   ComplexProperty object.
     */
    private PersonaPostalAddress_OnChange(complexProperty: ComplexProperty): void { this.Changed(); }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.LocationDisplayName, this.displayName);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.LocationAnnotation, this.annotation);
        this.personaPostalAddress.WriteToXml(writer);
    }
}