import { CreateComplexPropertyDelegate } from "../Misc/DelegateTypes";
import { EwsLogging } from "../Core/EwsLogging";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { IOwnedProperty } from "../Interfaces/IOwnedProperty";
import { PropertyDefinitionFlags } from "../Enumerations/PropertyDefinitionFlags";
import { ServiceObject } from "../Core/ServiceObjects/ServiceObject";
import { TypeGuards } from "../Interfaces/TypeGuards"

import { ComplexProperty } from "../ComplexProperties/ComplexProperty";
import { ComplexPropertyDefinitionBase } from "./ComplexPropertyDefinitionBase";
/**
 * @internal Represents base complex property type.
 * 
 * @type <TComplexProperty> The type of the complex property.
 */
export class ComplexPropertyDefinition<TComplexProperty extends ComplexProperty> extends ComplexPropertyDefinitionBase {
    
    Type: any;// System.Type; //todo: implement Type using typeof type
    
    private propertyCreationDelegate: CreateComplexPropertyDelegate<TComplexProperty>;


    /**
     * @internal Initializes a new instance of the **ComplexPropertyDefinition<TComplexProperty>** class.
     *
     * @param   {string}                                            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                                            xmlElementName   Name of the XML element.
     * @param   {string}                                            uri              The URI.
     * @param   {ExchangeVersion}                                   version          The version.
     * @param   {CreateComplexPropertyDelegate<TComplexProperty>}   propertyCreationDelegate   Delegate used to create instances of ComplexProperty. 
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, version: ExchangeVersion, propertyCreationDelegate: CreateComplexPropertyDelegate<TComplexProperty>);
    /**
     * @internal Initializes a new instance of the **ComplexPropertyDefinition<TComplexProperty>** class.
     *
     * @param   {string}                                            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                                            xmlElementName   Name of the XML element.
     * @param   {PropertyDefinitionFlags}                           flags            The flags.
     * @param   {ExchangeVersion}                                   version          The version.
     * @param   {CreateComplexPropertyDelegate<TComplexProperty>}   propertyCreationDelegate   Delegate used to create instances of ComplexProperty. 
     */
    constructor(propertyName: string, xmlElementName: string, flags: PropertyDefinitionFlags, version: ExchangeVersion, propertyCreationDelegate: CreateComplexPropertyDelegate<TComplexProperty>);
    /**
     * @internal Initializes a new instance of the **ComplexPropertyDefinition<TComplexProperty>** class.
     *
     * @param   {string}                                            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                                            xmlElementName   Name of the XML element.
     * @param   {string}                                            uri              The URI.
     * @param   {PropertyDefinitionFlags}                           flags            The flags.
     * @param   {ExchangeVersion}                                   version          The version.
     * @param   {CreateComplexPropertyDelegate<TComplexProperty>}   propertyCreationDelegate   Delegate used to create instances of ComplexProperty.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion, propertyCreationDelegate: CreateComplexPropertyDelegate<TComplexProperty>);
    constructor(propertyName: string, xmlElementName: string, uriOrFlags: string | PropertyDefinitionFlags, versionOrFlags: PropertyDefinitionFlags | ExchangeVersion, versionOrDelegate?: ExchangeVersion | CreateComplexPropertyDelegate<TComplexProperty>, propertyCreationDelegate?: CreateComplexPropertyDelegate<TComplexProperty>) {
        switch (arguments.length) {
            case 5:
                super(propertyName, xmlElementName, <any>uriOrFlags, <ExchangeVersion>versionOrFlags);
                this.propertyCreationDelegate = <CreateComplexPropertyDelegate<TComplexProperty>>versionOrDelegate;
                EwsLogging.Assert(
                    this.propertyCreationDelegate != null,
                    "ComplexPropertyDefinition ctor",
                    "CreateComplexPropertyDelegate cannot be null");
                break;
            case 6:
                super(propertyName, xmlElementName, <string>uriOrFlags, <PropertyDefinitionFlags>versionOrFlags, <ExchangeVersion>versionOrDelegate);
                this.propertyCreationDelegate = propertyCreationDelegate;
                break;
            default:
                break;
        }
    }

    /**
     * @internal Creates the property instance.
     *
     * @param   {ServiceObject}   owner   The owner.
     * @return  {ComplexProperty}       ComplexProperty instance.
     */
    CreatePropertyInstance(owner: ServiceObject): ComplexProperty {

        var complexProperty: TComplexProperty = this.propertyCreationDelegate();

        if (TypeGuards.isIOwnedProperty(complexProperty)) { //IOwnedProperty ownedProperty = complexProperty as IOwnedProperty;
            complexProperty.Owner = owner;
        }

        if (complexProperty)
            return complexProperty;
    }
}