import { AppointmentType } from "../Enumerations/AppointmentType";
import { ContactSource } from "../Enumerations/ContactSource";
import { ConversationFlagStatus } from "../Enumerations/ConversationFlagStatus";
import { EwsLogging } from "../Core/EwsLogging";
import { ExchangeService } from "../Core/ExchangeService";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { FileAsMapping } from "../Enumerations/FileAsMapping";
import { IconIndex } from "../Enumerations/IconIndex";
import { Importance } from "../Enumerations/Importance";
import { LegacyFreeBusyStatus } from "../Enumerations/LegacyFreeBusyStatus";
import { MeetingRequestType } from "../Enumerations/MeetingRequestType";
import { MeetingResponseType } from "../Enumerations/MeetingResponseType";
import { PhysicalAddressIndex } from "../Enumerations/PhysicalAddressIndex";
import { PropertyBag } from "../Core/PropertyBag";
import { PropertyDefinitionFlags } from "../Enumerations/PropertyDefinitionFlags";
import { Sensitivity } from "../Enumerations/Sensitivity";
import { TaskMode } from "../Enumerations/TaskMode";
import { TaskStatus } from "../Enumerations/TaskStatus";
import { WellKnownFolderName } from "../Enumerations/WellKnownFolderName";

import { TypeGuards } from "../Interfaces/TypeGuards";


/**@internal  */
export type GenericEnumType = typeof AppointmentType | typeof ContactSource | typeof ConversationFlagStatus | typeof FileAsMapping | typeof IconIndex | typeof Importance | typeof LegacyFreeBusyStatus | typeof MeetingRequestType | typeof MeetingResponseType | typeof PhysicalAddressIndex | typeof Sensitivity | typeof TaskMode | typeof TaskStatus | typeof WellKnownFolderName;

import { TypedPropertyDefinition } from "./TypedPropertyDefinition";
/**
 * @internal Represents generic property definition.
 */
export class GenericPropertyDefinition<TPropertyValue> extends TypedPropertyDefinition {

    // Type: any;//System.Type;
    /** ews-javascript-api specific - need to capture Enum type based on constructor */
    enumType: GenericEnumType;

    /**
     * @internal Initializes a new instance of the **GenericPropertyDefinition<TPropertyValue>** class.
     *
     * @param   {string}            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}            xmlElementName   Name of the XML element.
     * @param   {string}            uri              The URI.
     * @param   {ExchangeVersion}   version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **GenericPropertyDefinition<TPropertyValue>** class.
     * Added enumType parameter to 
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     * @param   {GenericEnumType}           enumType         Enum type parameter to Parse EwsEnum Attribute using EwsUtility.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion, enumType: GenericEnumType);
    /**
     * @internal Initializes a new instance of the **GenericPropertyDefinition<TPropertyValue>** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     * @param   {boolean}                   isNullable       Indicates that this property definition is for a nullable property.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion, isNullable: boolean);
    constructor(propertyName: string, xmlElementName: string, uri: string, versionOrFlags: ExchangeVersion | PropertyDefinitionFlags, version?: ExchangeVersion, isNullableOrEnumType: boolean | GenericEnumType = false) {
        switch (arguments.length) {
            case 4:
                super(propertyName, xmlElementName, uri, <ExchangeVersion>versionOrFlags);
                break;
            case 6:
                if (typeof isNullableOrEnumType === 'boolean') {
                    super(propertyName, xmlElementName, uri, <PropertyDefinitionFlags>versionOrFlags, version, isNullableOrEnumType);
                }
                else {
                    super(propertyName, xmlElementName, uri, <PropertyDefinitionFlags>versionOrFlags, version);
                    this.enumType = isNullableOrEnumType;
                }
                break;
            default:
                break;
        }
    }

    /**
     * @internal Parses the specified value.
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    Parse(value: string): any {
        //todo: fix converting generictype
        if (TypeGuards.hasEwsEnumAttribute(this.enumType)) {
            return this.enumType.FromEwsEnumString(value);
        }

        // if enum type is set, use this to get enum number instead of string
        if(this.enumType && typeof value === 'string') {
            return this.enumType[value];
        }

        EwsLogging.Assert(false, "GenericPropertyDefinition<TPropertyValue>.Parse", "GenericPropertyDefinition<TPropertyValue> needs to be improved");
        return value;
    }

    /**
     * @internal Convert instance to string.
     *
     * @param   {any}   value   The value.
     * @return  {string}        String representation of property value.
     */
    ToString(value?: any): string {
        if (value === void 0 || value === null) {
            throw new Error("GenericPropertyDefinition: incorrect call of ToString(value): value is undefined/null");
        }

        if (TypeGuards.hasEwsEnumAttribute(this.enumType)) {
            return this.enumType.ToEwsEnumString(value);
        }

        if(this.enumType && typeof value === "number") {
            return this.enumType[value];
        }

        return value.toString();
    }
    toString(value?: any): string {
        return this.ToString(value);
    }
}