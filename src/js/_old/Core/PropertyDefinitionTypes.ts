module Microsoft.Exchange.WebServices.Data {


    export class GroupMemberPropertyDefinition extends ServiceObjectPropertyDefinition {
        private static FieldUri: string = "distributionlist:Members:Member";
        Key: string;
        Type: any;// System.Type;
        //private key: string;

        constructor(key: string) {
            super(GroupMemberPropertyDefinition.FieldUri);
            this.Key = key;
        }
        //AddJsonProperties(jsonPropertyDefinition: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        //GetJsonType(): string { throw new Error("Not implemented."); }

        GetPrintableName(): string { return string.Format("{0}:{1}", GroupMemberPropertyDefinition.FieldUri, this.Key); }
        GetXmlElementName(): string { return XmlElementNames.IndexedFieldURI; }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
            super.WriteAttributesToXml(writer);
            writer.WriteAttributeValue("", XmlAttributeNames.FieldIndex, this.Key);
        }
    }

    export class DateTimePropertyDefinition extends PropertyDefinition {
        IsNullable: boolean;
        Type: System.Type;
        private isNullable: boolean;
        GetConvertedDateTime(service: ExchangeServiceBase, propertyBag: PropertyBag, isUpdateOperation: boolean, value: any): Date { throw new Error("Not implemented."); }
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        ScopeToTimeZone(service: ExchangeServiceBase, dateTime: Date, propertyBag: PropertyBag, isUpdateOperation: boolean): Date { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }
    export class EffectiveRightsPropertyDefinition extends PropertyDefinition {
        Type: System.Type;
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }
    export class MeetingTimeZonePropertyDefinition extends PropertyDefinition {
        Type: System.Type;
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }
    export class RecurrencePropertyDefinition extends PropertyDefinition {
        Type: System.Type;
        GetRecurrenceFromString(recurranceString: string): Recurrence { throw new Error("Not implemented."); }
        GetRecurrenceRange(recurrenceRangeString: string): RecurrenceRange { throw new Error("Not implemented."); }
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }
    export class ResponseObjectsPropertyDefinition extends PropertyDefinition {
        IsNullable: boolean;
        Type: System.Type;
        GetResponseAction(responseActionString: string): ResponseActions { throw new Error("Not implemented."); }
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }
    export class TimeZonePropertyDefinition extends PropertyDefinition {
        Type: System.Type;
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }
    export class TypedPropertyDefinition extends PropertyDefinition {
        IsNullable: boolean;
        private isNullable: boolean;
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        Parse(value: string): any { throw new Error("Not implemented."); }
        ToString(value: any): string { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }

    export class ScopedDateTimePropertyDefinition extends DateTimePropertyDefinition {
        private getPropertyDefinitionCallback: GetPropertyDefinitionCallback;
        GetTimeZoneProperty(version: ExchangeVersion): PropertyDefinition { throw new Error("Not implemented."); }
        ScopeToTimeZone(service: ExchangeServiceBase, dateTime: Date, propertyBag: PropertyBag, isUpdateOperation: boolean): Date { throw new Error("Not implemented."); }
    }

    export class StartTimeZonePropertyDefinition extends TimeZonePropertyDefinition {
        HasFlag(flag: PropertyDefinitionFlags, version: ExchangeVersion): boolean { throw new Error("Not implemented."); }
        RegisterAssociatedInternalProperties(properties: System.Collections.Generic.List<PropertyDefinition>): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class PermissionSetPropertyDefinition extends ComplexPropertyDefinitionBase {
        Type: System.Type;
        CreatePropertyInstance(owner: ServiceObject): ComplexProperty { throw new Error("Not implemented."); }
    }

    export class StringPropertyDefinition extends TypedPropertyDefinition {
        IsNullable: boolean;
        Type: System.Type;
        Parse(value: string): any { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }

    export class ByteArrayPropertyDefinition extends TypedPropertyDefinition {
        IsNullable: boolean;
        Type: System.Type;
        Parse(value: string): any { throw new Error("Not implemented."); }
        ToString(value: any): string { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }


    export class ComplexPropertyDefinition<TComplexProperty> extends ComplexPropertyDefinitionBase {
        Type: System.Type;
        private propertyCreationDelegate: CreateComplexPropertyDelegate<TComplexProperty>;
        CreatePropertyInstance(owner: ServiceObject): ComplexProperty { throw new Error("Not implemented."); }
    }

    export class ContainedPropertyDefinition<TComplexProperty> extends ComplexPropertyDefinition<TComplexProperty> {
        private containedXmlElementName: string;
        InternalLoadFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }

    export class AttachmentsPropertyDefinition extends ComplexPropertyDefinition<AttachmentCollection> {
        private static Exchange2010SP2PropertyDefinitionFlags: PropertyDefinitionFlags;
        HasFlag(flag: PropertyDefinitionFlags, version: ExchangeVersion): boolean { throw new Error("Not implemented."); }
    }


    export class GenericPropertyDefinition<TPropertyValue> extends TypedPropertyDefinition {
        Type: System.Type;
        Parse(value: string): any { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }


    export class ListValuePropertyDefinition<TPropertyValue> extends GenericPropertyDefinition<TPropertyValue> {
        Parse(value: string): any { throw new Error("Not implemented."); }
    }

    export class BoolPropertyDefinition extends GenericPropertyDefinition<boolean> {
        ToString(value: any): string { throw new Error("Not implemented."); }
    }
    export class DoublePropertyDefinition extends GenericPropertyDefinition<number> {
    }
    export class IntPropertyDefinition extends GenericPropertyDefinition<number> {
    export class TaskDelegationStatePropertyDefinition extends GenericPropertyDefinition<TaskDelegationState> {
        private static NoMatch: string = "NoMatch";
        private static OwnNew: string = "OwnNew";
        private static Owned: string = "Owned";
        private static Accepted: string = "Accepted";

        Parse(value: string): any { throw new Error("Not implemented."); }
        ToString(value: any): string { throw new Error("Not implemented."); }
    }
    export class TimeSpanPropertyDefinition extends GenericPropertyDefinition<System.TimeSpan> {
        Parse(value: string): any { throw new Error("Not implemented."); }
        ToString(value: any): string { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }


}