import { DateTime, DateTimeKind } from "../DateTime";
import { EwsLogging } from "../Core/EwsLogging";
import { EwsUtilities } from "../Core/EwsUtilities";
import { ExchangeServiceBase } from "../Core/ExchangeServiceBase";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { IOutParam } from "../Interfaces/IOutParam";
import { PropertyBag } from "../Core/PropertyBag";
import { PropertyDefinition } from "./PropertyDefinition";
import { PropertyDefinitionFlags } from "../Enumerations/PropertyDefinitionFlags";
import { PropertyException } from "../Exceptions/PropertyException";
import { StringHelper } from "../ExtensionMethods";
import { Strings } from "../Strings";
import { TimeZoneConversionException } from "../Exceptions/TimeZoneConversionException";
import { TimeZoneInfo } from "../TimeZoneInfo";


import { DateTimePropertyDefinition } from "./DateTimePropertyDefinition";
/**
 * @internal Represents a property definition for DateTime values scoped to a specific time zone property.
 */
export class ScopedDateTimePropertyDefinition extends DateTimePropertyDefinition {

    private getPropertyDefinitionCallback: GetPropertyDefinitionCallback;

    /**
     * @internal Initializes a new instance of the **ScopedDateTimePropertyDefinition** class.
     *
     * @param   {string}                            propertyName                    Name of the property.
     * @param   {string}                            xmlElementName                  Name of the XML element.
     * @param   {ExchangeVersion}                   version                         The version.
     * @param   {string}                            uri                             The URI.
     * @param   {PropertyDefinitionFlags}           flags                           The flags.
     * @param   {GetPropertyDefinitionCallback}     getPropertyDefinitionCallback   The callback that will be used to retrieve the time zone property.
     */
    constructor(
        propertyName: string,
        xmlElementName: string,
        uri: string,
        flags: PropertyDefinitionFlags,
        version: ExchangeVersion,
        getPropertyDefinitionCallback: GetPropertyDefinitionCallback) {
        super(propertyName, xmlElementName, uri, flags, version);
        EwsLogging.Assert(
            getPropertyDefinitionCallback != null,
            "ScopedDateTimePropertyDefinition.ctor",
            "getPropertyDefinitionCallback is null.");
        this.getPropertyDefinitionCallback = getPropertyDefinitionCallback;

    }

    /**
     * Gets the time zone property to which to scope times.
     *
     * @param   {ExchangeVersion}   version   The EWS version for which the property is to be retrieved.
     * @return  {PropertyDefinition}             The PropertyDefinition of the scoping time zone property.
     */
    private GetTimeZoneProperty(version: ExchangeVersion): PropertyDefinition {
        var timeZoneProperty: PropertyDefinition = this.getPropertyDefinitionCallback(version);

        EwsLogging.Assert(
            timeZoneProperty != null,
            "ScopedDateTimePropertyDefinition.GetTimeZoneProperty",
            "timeZoneProperty is null.");

        return timeZoneProperty;
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
        EwsLogging.DebugLog("[ScopedDateTimePropertyDefinition.ScopeToTimeZone]: TimeZone info has been updated, Please report any bugs to github");
        if (!propertyBag.Owner.GetIsCustomDateTimeScopingRequired()) {
            // Most item types do not require a custom scoping mechanism. For those item types,
            // use the default scoping mechanism.
            return super.ScopeToTimeZone(
                service,
                dateTime,
                propertyBag,
                isUpdateOperation);
        }
        else {
            // Appointment, however, requires a custom scoping mechanism which is based on an
            // associated time zone property.
            var timeZoneProperty: PropertyDefinition = this.GetTimeZoneProperty(service.RequestedServerVersion);
            var timeZonePropertyValue: IOutParam<any> = { outValue: null };

            var timeZonePropertyIsSet: boolean = propertyBag.TryGetProperty(timeZoneProperty, timeZonePropertyValue);

            if (timeZonePropertyValue.outValue != null && propertyBag.IsPropertyUpdated(timeZoneProperty)) {
                // If we have the associated time zone property handy and if it has been updated locally,
                // then we scope the date time to that time zone.
                try {
                    var convertedDateTime: DateTime = EwsUtilities.ConvertTime(
                        dateTime,
                        <TimeZoneInfo>timeZonePropertyValue.outValue,
                        TimeZoneInfo.Utc);

                    // This is necessary to stamp the date/time with the Local kind.
                    return new DateTime(convertedDateTime.TotalMilliSeconds, DateTimeKind.Utc);
                }
                catch (e) {
                    throw new PropertyException(
                        StringHelper.Format(Strings.InvalidDateTime, dateTime),
                        this.Name,
                        <TimeZoneConversionException>e);
                }
            }
            else {
                if (isUpdateOperation) {
                    // In an update operation, what we do depends on what version of EWS
                    // we are targeting.
                    if (service.RequestedServerVersion == ExchangeVersion.Exchange2007_SP1) {
                        // For Exchange 2007 SP1, we still need to scope to the service's time zone.
                        return super.ScopeToTimeZone(
                            service,
                            dateTime,
                            propertyBag,
                            isUpdateOperation);
                    }
                    else {
                        // Otherwise, we let the server scope to the appropriate time zone.
                        return dateTime;
                    }
                }
                else {
                    // In a Create operation, always scope to the service's time zone.
                    return super.ScopeToTimeZone(
                        service,
                        dateTime,
                        propertyBag,
                        isUpdateOperation);
                }
            }
        }
    }
}

/**
 * @internal Defines a callback method used to get a reference to a property definition.
 *
 * @param   {ExchangeVersion}   version   The EWS version for which the property is to be retrieved.
 */
export interface GetPropertyDefinitionCallback {
    (version: ExchangeVersion): PropertyDefinition
}