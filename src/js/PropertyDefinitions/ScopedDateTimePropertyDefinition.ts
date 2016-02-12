import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {PropertyDefinition} from "./PropertyDefinition";
import {ExchangeServiceBase} from "../Core/ExchangeServiceBase";
import {EwsLogging} from "../Core/EwsLogging";
import {EwsUtilities} from "../Core/EwsUtilities";
import {PropertyBag} from "../Core/PropertyBag";
import {DateTime, DateTimeKind, TimeZoneInfo} from "../DateTime";
import {IOutParam} from "../Interfaces/IOutParam";
import {StringHelper} from "../ExtensionMethods";
import {Strings} from "../Strings";
import {PropertyException} from "../Exceptions/PropertyException";
import {TimeZoneConversionException} from "../Exceptions/TimeZoneConversionException";


import {DateTimePropertyDefinition} from "./DateTimePropertyDefinition";
/**
 * Represents a property definition for DateTime values scoped to a specific time zone property.
 */
export class ScopedDateTimePropertyDefinition extends DateTimePropertyDefinition {
    private getPropertyDefinitionCallback: GetPropertyDefinitionCallback;
    /**
     * Initializes a new instance of the  class.
     *
     * @param   {type}   xmlElementName                  Name of the XML element.
     * @param   {type}   uri                             The URI.
     * @param   {type}   flags                           The flags.
     * @param   {type}   version                         The version.
     * @param   {type}   getPropertyDefinitionCallback   The callback that will be used to retrieve the time zone property.
     */
    constructor(
        propertyName: string,
        xmlElementName: string,
        version: ExchangeVersion,
        uri?: string,
        flags?: PropertyDefinitionFlags,
        getPropertyDefinitionCallback?: GetPropertyDefinitionCallback) {
        super(propertyName, xmlElementName, version, uri, flags);
        EwsLogging.Assert(
            getPropertyDefinitionCallback != null,
            "ScopedDateTimePropertyDefinition.ctor",
            "getPropertyDefinitionCallback is null.");
        this.getPropertyDefinitionCallback = getPropertyDefinitionCallback;

    }
    /**
     * Gets the time zone property to which to scope times.
     *
     * @param   {type}   version   The EWS version for which the property is to be retrieved.
     * @return  {type}             The PropertyDefinition of the scoping time zone property.
     */
    GetTimeZoneProperty(version: ExchangeVersion): PropertyDefinition {
        var timeZoneProperty: PropertyDefinition = this.getPropertyDefinitionCallback(version);

        EwsLogging.Assert(
            timeZoneProperty != null,
            "ScopedDateTimePropertyDefinition.GetTimeZoneProperty",
            "timeZoneProperty is null.");

        return timeZoneProperty;
    }
    /**
     * Scopes the date time property to the appropriate time zone, if necessary.
     *
     * @param   {type}   service             The service emitting the request.
     * @param   {type}   dateTime            The date time.
     * @param   {type}   propertyBag         The property bag.
     * @param   {type}   isUpdateOperation   Indicates whether the scoping is to be performed in the context of an update operation.
     * @return  {type}                       The converted DateTime.
     */
    ScopeToTimeZone(service: ExchangeServiceBase, dateTime: DateTime, propertyBag: PropertyBag, isUpdateOperation: boolean): DateTime {
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
                    return new DateTime(convertedDateTime, DateTimeKind.Utc);
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
 * Defines a callback method used to get a reference to a property definition.
 *
 * @param   {ExchangeVersion}   version   The EWS version for which the property is to be retrieved.
 */
export interface GetPropertyDefinitionCallback {
    (version: ExchangeVersion): PropertyDefinition
}