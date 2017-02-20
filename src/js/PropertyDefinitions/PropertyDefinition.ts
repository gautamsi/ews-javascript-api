import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { ExchangeService } from "../Core/ExchangeService";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { PropertyBag } from "../Core/PropertyBag";
import { PropertyDefinitionFlags } from "../Enumerations/PropertyDefinitionFlags";
import { ServiceObjectSchema } from "../Core/ServiceObjects/Schemas/ServiceObjectSchema";
import { StringHelper } from "../ExtensionMethods";
import { XmlElementNames } from "../Core/XmlElementNames";

import { ServiceObjectPropertyDefinition } from "./ServiceObjectPropertyDefinition";
/**
 * Represents the definition of a folder or item property.
 */
export abstract class PropertyDefinition extends ServiceObjectPropertyDefinition {

    private xmlElementName: string;
    private flags: PropertyDefinitionFlags;
    private name: string;
    private version: ExchangeVersion;

    /**
     * @internal Gets a value indicating whether this property definition is for a nullable type (ref, int?, bool?...).
     */
    get IsNullable(): boolean { return true; }

    /**
     * Gets the name of the property.
     */
    get Name(): string {
        if (StringHelper.IsNullOrEmpty(this.name)) {
            throw new Error("PropertyDefinition.Name - incorrectly registered propertynames - info: fixed by initializing names in respective serviceobjectschema static properties. fix if receive this error");
            //todo:fix: can not use this to initialize names, ServiceObjectSchema creates circular loops in modules.
            //ServiceObjectSchema.InitializeSchemaPropertyNames(); //info: fixed by initializing names in respective serviceobjectschema static properties. fix if receive this error
            //fix - did not work , shifted to statically initialize by constructer in this class ServiceObjectSchemaExtension.InitializeSchemaPropertyNames(); //info: fixed by initializing names in respective serviceobjectschema static properties. fix if receive this error
        }
        return this.name;
    }
    set Name(value: string) { this.name = value; }

    /**
     * Gets the minimum Exchange version that supports this property.
     *
     * @value {ExchangeVersion} The version.
     */
    get Version(): ExchangeVersion { return this.version; }

    /**
     * @internal Gets the name of the XML element.
     * 
     * @value {string}  The name of the XML element.
     */
    get XmlElementName(): string { return this.xmlElementName; }

    /**
     * @internal Initializes a new instance of the **PropertyDefinition** class.
     *
     * @param   {string}            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}            xmlElementName   Name of the XML element.
     * @param   {string}            uri              The URI.
     * @param   {ExchangeVersion}   version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **PropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **PropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    constructor(propertyName: string, xmlElementName: string, uriOrFlags: string | PropertyDefinitionFlags, versionOrFlags: PropertyDefinitionFlags | ExchangeVersion, version?: ExchangeVersion) {
        typeof uriOrFlags === 'string' ? super(uriOrFlags) : super();

        this.name = propertyName;
        this.xmlElementName = xmlElementName;
        this.flags = typeof uriOrFlags === 'string' ? PropertyDefinitionFlags.None : uriOrFlags;

        switch (arguments.length) {
            case 4:
                this.version = <ExchangeVersion>versionOrFlags;
                break;
            case 5:
                this.version = version;
                this.flags = <PropertyDefinitionFlags>versionOrFlags;
                break;
            default:
                break;
        }
    }

    /**
     * @internal Gets a list of associated internal properties.
     *
     * /remarks/    This is a hack. It is here (currently) solely to help the API register the MeetingTimeZone property definition that is internal.
     * @return  {PropertyDefinition[]}      A list of PropertyDefinition objects.
     */
    GetAssociatedInternalProperties(): PropertyDefinition[] /*System.Collections.Generic.List<PropertyDefinition>*/ {
        var properties: PropertyDefinition[] = [];

        this.RegisterAssociatedInternalProperties(properties);

        return properties;
    }

    /**
     * @internal Gets the property definition's printable name.
     *
     * @return  {string}      The property definition's printable name.
     */
    GetPrintableName(): string { return this.Name; }

    /**
     * @internal Determines whether the specified flag is set.
     *
     * @param   {PropertyDefinitionFlags}   flag   The flag.
     * @return  {boolean}   true if the specified flag is set; otherwise, false.
     */
    HasFlag(flag: PropertyDefinitionFlags): boolean;
    /**
     * @internal Determines whether the specified flag is set.
     *
     * @param   {PropertyDefinitionFlags}   flag      The flag.
     * @param   {ExchangeVersion}           version   Requested version.
     * @return  {boolean}                   true if the specified flag is set; otherwise, false.
     */
    HasFlag(flag: PropertyDefinitionFlags, version: ExchangeVersion): boolean;
    HasFlag(flag: PropertyDefinitionFlags, version?: ExchangeVersion): boolean {
        return (this.flags & flag) == flag;
    }

    /**
     * @internal Loads the property value from json.
     *
     * @param   {any}               jsObject         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    abstract LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void;

    /**
     * @internal Registers associated internal properties.
     *
     * @param   {PropertyDefinition[]}   properties   The list in which to add the associated properties.
     */
    RegisterAssociatedInternalProperties(properties: PropertyDefinition[]): void {
    }

    /**
     * @internal Writes the property value to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    abstract WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
}