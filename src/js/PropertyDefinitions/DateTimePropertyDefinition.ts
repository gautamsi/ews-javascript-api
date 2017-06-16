import { DateTime, DateTimeKind } from "../DateTime";
import { EwsLogging } from "../Core/EwsLogging";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../Core/EwsUtilities";
import { ExchangeService } from "../Core/ExchangeService";
import { ExchangeServiceBase } from "../Core/ExchangeServiceBase";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { PropertyBag } from "../Core/PropertyBag";
import { PropertyDefinitionFlags } from "../Enumerations/PropertyDefinitionFlags";
import { PropertyException } from "../Exceptions/PropertyException";
import { StringHelper } from "../ExtensionMethods";
import { Strings } from "../Strings";
import { TimeZoneInfo } from "../TimeZoneInfo";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

import { PropertyDefinition } from "./PropertyDefinition";
/**
 * @internal Represents DateTime property definition.
 */
export class DateTimePropertyDefinition extends PropertyDefinition {

    private isNullable: boolean;
    /**
     * @internal Gets a value indicating whether this property definition is for a nullable type (ref, int?, bool?...).
     */
    get IsNullable(): boolean { return this.isNullable; }

    /**
     * Gets the property type.
     */
    Type: any;//System.Type;

    /**
     * @internal Initializes a new instance of the **DateTimePropertyDefinition** class.
     *
     * @param   {string}            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}            xmlElementName   Name of the XML element.
     * @param   {string}            uri              The URI.
     * @param   {ExchangeVersion}   version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **DateTimePropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **DateTimePropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     * @param   {boolean}                   isNullable       Indicates that this property definition is for a nullable property.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion, isNullable: boolean);
    constructor(propertyName: string, xmlElementName: string, uri: string, versionOrFlags: ExchangeVersion | PropertyDefinitionFlags, version?: ExchangeVersion, isNullable?: boolean) {
        switch (arguments.length) {
            case 4:
                super(propertyName, xmlElementName, uri, <ExchangeVersion>versionOrFlags);
                break;
            case 5:
            case 6:
                super(propertyName, xmlElementName, uri, <PropertyDefinitionFlags>versionOrFlags, version);
                break;
            default:
                break;
        }
        this.isNullable = isNullable || false;
    }

    /**
     * Gets the converted date time.
     *
     * @param   {ExchangeServiceBase}   service             The service.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   if set to true [is update operation].
     * @param   {any}                   value               The value.
     * @return  {DateTime}      Converted DateTime value
     */
    private GetConvertedDateTime(service: ExchangeServiceBase, propertyBag: PropertyBag, isUpdateOperation: boolean, value: any): DateTime {
        EwsLogging.Assert(false, "DateTimePropertyDefinition.GetConvertedDateTime", "TimeZone info could be misleading, It should be used as UTC in all cases until fixed");

        var dateTime = DateTime.Parse(value);
        var convertedDateTime: DateTime;
        //debug: //todo: find datetimekind
        // If the date/time is unspecified, we may need to scope it to time zone.
        if (dateTime.Kind == DateTimeKind.Unspecified) {
            convertedDateTime = this.ScopeToTimeZone(
                service,
                value,
                propertyBag,
                isUpdateOperation);
        }
        else {
            convertedDateTime = dateTime;
        }
        return convertedDateTime;
    }

    /**
     * @internal Loads the property value from XMLJsObject.
     *
     * @param   {any}               value         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void {
        var stringValue: string = jsObject;//.toString();
        //debug: //ref: check for datetime value
        if (!StringHelper.IsNullOrEmpty(stringValue)) {
            var value = service.ConvertUniversalDateTimeStringToLocalDateTime(stringValue);
            propertyBag._setItem(this, service.ConvertUniversalDateTimeStringToLocalDateTime(stringValue));
        }
    }

    /**
     * @internal Scopes the date time property to the appropriate time zone, if necessary.
     *
     * @param   {ExchangeServiceBase}   service             The service emitting the request.
     * @param   {DateTime}              dateTime            The date time.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the scoping is to be performed in the context of an update operation.
     * @return  {DateTime}              The converted DateTime.
     */
    ScopeToTimeZone(service: ExchangeServiceBase, dateTime: DateTime, propertyBag: PropertyBag, isUpdateOperation: boolean): DateTime {
        EwsLogging.Assert(false, "DateTimePropertyDefinition.ScopeToTimeZone", "TimeZone info could be misleading, It should be used as UTC in all cases until fixed");
        try {
            var convertedDateTime: DateTime = EwsUtilities.ConvertTime(
                dateTime,
                service.TimeZone,
                TimeZoneInfo.Utc);

            return new DateTime(convertedDateTime.TotalMilliSeconds, DateTimeKind.Utc);
        }
        catch (e)//TimeZoneConversionException
        {
            throw new PropertyException(
                StringHelper.Format(Strings.InvalidDateTime, dateTime),
                this.Name,
                e);
        }
    }

    /**
     * @internal Writes the property value to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void {
        var value = propertyBag._getItem(this);
        if (value != null) {
            writer.WriteStartElement(XmlNamespace.Types, this.XmlElementName);

            var convertedDateTime: DateTime = this.GetConvertedDateTime(writer.Service, propertyBag, isUpdateOperation, value);

            writer.WriteValue(EwsUtilities.DateTimeToXSDateTime(convertedDateTime), this.Name);

            writer.WriteEndElement();
        }
    }
}
