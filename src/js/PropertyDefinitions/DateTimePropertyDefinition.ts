import {PropertyException} from "../Exceptions/PropertyException";
import {Strings} from "../Strings";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {ExchangeServiceBase} from "../Core/ExchangeServiceBase";
import {PropertyBag} from "../Core/PropertyBag";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {DateTime, DateTimeKind, TimeZoneInfo} from "../DateTime";
import {StringHelper} from "../ExtensionMethods";

import {PropertyDefinition} from "./PropertyDefinition";
export class DateTimePropertyDefinition extends PropertyDefinition {
    get IsNullable(): boolean { return this.isNullable; }
    Type: any;//System.Type;
    private isNullable: boolean = false;
    constructor(
        propertyName: string,
        xmlElementName: string,
        version: ExchangeVersion,
        uri?: string,
        flags?: PropertyDefinitionFlags,
        isNullable: boolean = false) {
        super(propertyName, xmlElementName, version, uri, flags);
    }
    GetConvertedDateTime(service: ExchangeServiceBase, propertyBag: PropertyBag, isUpdateOperation: boolean, value: any): DateTime {
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
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("DateTimePropertyDefinition.ts - LoadPropertyValueFromJson : Not implemented."); }
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void {
        var stringValue: string = jsObject;//.toString();
        //debug: //ref: check for datetime value
        if (!StringHelper.IsNullOrEmpty(stringValue)) {
            var value = service.ConvertUniversalDateTimeStringToLocalDateTime(stringValue);
            propertyBag._setItem(this, service.ConvertUniversalDateTimeStringToLocalDateTime(stringValue));
        }
    }
    ScopeToTimeZone(service: ExchangeServiceBase, dateTime: DateTime, propertyBag: PropertyBag, isUpdateOperation: boolean): DateTime {
        try {
            var convertedDateTime: DateTime = EwsUtilities.ConvertTime(
                dateTime,
                service.TimeZone,
                TimeZoneInfo.Utc);

            return new DateTime(convertedDateTime, DateTimeKind.Utc);
        }
        catch (e)//TimeZoneConversionException
        {
            throw new PropertyException(
                StringHelper.Format(Strings.InvalidDateTime, dateTime),
                this.Name,
                e);
        }
    }
    WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("DateTimePropertyDefinition.ts - WriteJsonValue : Not implemented."); }
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
