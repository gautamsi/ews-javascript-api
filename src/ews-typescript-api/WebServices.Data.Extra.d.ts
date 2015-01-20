declare module Microsoft.Exchange.WebServices.Data.AppointmentSchema {
    class FieldUris {
    }
}
declare module Microsoft.Exchange.WebServices.Data.ContactGroupSchema {
    class FieldUris {
    }
}
declare module Microsoft.Exchange.WebServices.Data.ContactSchema {
    class FieldUris {
    }
}
declare module Microsoft.Exchange.WebServices.Data.ConversationSchema {
    class FieldUris {
    }
}
declare module Microsoft.Exchange.WebServices.Data.DelegatePermissions {
    class DelegateFolderPermission {
        PermissionLevel: Microsoft.Exchange.WebServices.Data.DelegateFolderPermissionLevel;
        IsExistingPermissionLevelCustom: boolean;
        Initialize(permissionLevel: Microsoft.Exchange.WebServices.Data.DelegateFolderPermissionLevel): any; //{ throw new Error("Not implemented.");}
        Reset(): any; //{ throw new Error("Not implemented.");}
    }
}
declare module Microsoft.Exchange.WebServices.Data.DiscoverySchemaChanges {
    class SchemaChange {
        MinimumServerVersion: number;
        IsCompatible(versionable: Microsoft.Exchange.WebServices.Data.IDiscoveryVersionable): boolean; //{ throw new Error("Not implemented.");}
    }
}
declare module Microsoft.Exchange.WebServices.Data.EmailMessageSchema {
    class FieldUris {
    }
}
declare module Microsoft.Exchange.WebServices.Data.FolderSchema {
    class FieldUris {
    }
}
declare module Microsoft.Exchange.WebServices.Data.GetStreamingEventsResponse {
}
declare module Microsoft.Exchange.WebServices.Data.GetStreamingEventsResults {
    class NotificationGroup {
        SubscriptionId: string;
        Events: System.Collections.ObjectModel.Collection<Microsoft.Exchange.WebServices.Data.NotificationEvent>;
    }
}
declare module Microsoft.Exchange.WebServices.Data.HangingServiceRequestBase {
    class HandleResponseObject extends System.MulticastDelegate {
        BeginInvoke(response: any, callback: System.AsyncCallback, object: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        EndInvoke(result: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
        Invoke(response: any): any; //{ throw new Error("Not implemented.");}
    }
    class HangingRequestDisconnectHandler extends System.MulticastDelegate {
        BeginInvoke(sender: any, args: Microsoft.Exchange.WebServices.Data.HangingRequestDisconnectEventArgs, callback: System.AsyncCallback, object: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        EndInvoke(result: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
        Invoke(sender: any, args: Microsoft.Exchange.WebServices.Data.HangingRequestDisconnectEventArgs): any; //{ throw new Error("Not implemented.");}
    }
}
declare module Microsoft.Exchange.WebServices.Data.ItemSchema {
    class FieldUris {
    }
}
declare module Microsoft.Exchange.WebServices.Data.MeetingMessageSchema {
    class FieldUris {
    }
}
declare module Microsoft.Exchange.WebServices.Data.MeetingRequestSchema {
    class FieldUris {
    }
}
declare module Microsoft.Exchange.WebServices.Data.MeetingResponseSchema {
    class FieldUris {
    }
}
declare module Microsoft.Exchange.WebServices.Data.PhysicalAddressEntry {
    class PhysicalAddressSchema {
        static XmlElementNames: System.Collections.Generic.List<string>;
        private static xmlElementNames: Microsoft.Exchange.WebServices.Data.LazyMember<T>;
    }
}
declare module Microsoft.Exchange.WebServices.Data.PostItemSchema {
    class FieldUris {
    }
}
declare module Microsoft.Exchange.WebServices.Data.Recurrence {
    class DailyPattern extends Microsoft.Exchange.WebServices.Data.Recurrence.IntervalPattern {
        XmlElementName: string;
    }
    class DailyRegenerationPattern extends Microsoft.Exchange.WebServices.Data.Recurrence.IntervalPattern {
        XmlElementName: string;
        IsRegenerationPattern: boolean;
    }
    class IntervalPattern extends Microsoft.Exchange.WebServices.Data.Recurrence {
        Interval: number;
        private interval: number;
        InternalWritePropertiesToXml(writer: Microsoft.Exchange.WebServices.Data.EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonProperty: Microsoft.Exchange.WebServices.Data.JsonObject, service: Microsoft.Exchange.WebServices.Data.ExchangeService): any; //{ throw new Error("Not implemented.");}
        PatternToJson(service: Microsoft.Exchange.WebServices.Data.ExchangeService): Microsoft.Exchange.WebServices.Data.JsonObject; //{ throw new Error("Not implemented.");}
        TryReadElementFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsServiceXmlReader): boolean; //{ throw new Error("Not implemented.");}
    }
    class MonthlyPattern extends Microsoft.Exchange.WebServices.Data.Recurrence.IntervalPattern {
        XmlElementName: string;
        DayOfMonth: number;
        private dayOfMonth: number;
        InternalValidate(): any; //{ throw new Error("Not implemented.");}
        InternalWritePropertiesToXml(writer: Microsoft.Exchange.WebServices.Data.EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonProperty: Microsoft.Exchange.WebServices.Data.JsonObject, service: Microsoft.Exchange.WebServices.Data.ExchangeService): any; //{ throw new Error("Not implemented.");}
        PatternToJson(service: Microsoft.Exchange.WebServices.Data.ExchangeService): Microsoft.Exchange.WebServices.Data.JsonObject; //{ throw new Error("Not implemented.");}
        TryReadElementFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsServiceXmlReader): boolean; //{ throw new Error("Not implemented.");}
    }
    class MonthlyRegenerationPattern extends Microsoft.Exchange.WebServices.Data.Recurrence.IntervalPattern {
        XmlElementName: string;
        IsRegenerationPattern: boolean;
    }
    class RelativeMonthlyPattern extends Microsoft.Exchange.WebServices.Data.Recurrence.IntervalPattern {
        XmlElementName: string;
        DayOfTheWeekIndex: Microsoft.Exchange.WebServices.Data.DayOfTheWeekIndex;
        DayOfTheWeek: Microsoft.Exchange.WebServices.Data.DayOfTheWeek;
        private dayOfTheWeek: Microsoft.Exchange.WebServices.Data.DayOfTheWeek;
        private dayOfTheWeekIndex: Microsoft.Exchange.WebServices.Data.DayOfTheWeekIndex;
        InternalValidate(): any; //{ throw new Error("Not implemented.");}
        InternalWritePropertiesToXml(writer: Microsoft.Exchange.WebServices.Data.EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonProperty: Microsoft.Exchange.WebServices.Data.JsonObject, service: Microsoft.Exchange.WebServices.Data.ExchangeService): any; //{ throw new Error("Not implemented.");}
        PatternToJson(service: Microsoft.Exchange.WebServices.Data.ExchangeService): Microsoft.Exchange.WebServices.Data.JsonObject; //{ throw new Error("Not implemented.");}
        TryReadElementFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsServiceXmlReader): boolean; //{ throw new Error("Not implemented.");}
    }
    class RelativeYearlyPattern extends Microsoft.Exchange.WebServices.Data.Recurrence {
        XmlElementName: string;
        DayOfTheWeekIndex: Microsoft.Exchange.WebServices.Data.DayOfTheWeekIndex;
        DayOfTheWeek: Microsoft.Exchange.WebServices.Data.DayOfTheWeek;
        Month: Microsoft.Exchange.WebServices.Data.Month;
        private dayOfTheWeek: Microsoft.Exchange.WebServices.Data.DayOfTheWeek;
        private dayOfTheWeekIndex: Microsoft.Exchange.WebServices.Data.DayOfTheWeekIndex;
        private month: Microsoft.Exchange.WebServices.Data.Month;
        InternalValidate(): any; //{ throw new Error("Not implemented.");}
        InternalWritePropertiesToXml(writer: Microsoft.Exchange.WebServices.Data.EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonProperty: Microsoft.Exchange.WebServices.Data.JsonObject, service: Microsoft.Exchange.WebServices.Data.ExchangeService): any; //{ throw new Error("Not implemented.");}
        PatternToJson(service: Microsoft.Exchange.WebServices.Data.ExchangeService): Microsoft.Exchange.WebServices.Data.JsonObject; //{ throw new Error("Not implemented.");}
        TryReadElementFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsServiceXmlReader): boolean; //{ throw new Error("Not implemented.");}
    }
    class WeeklyPattern extends Microsoft.Exchange.WebServices.Data.Recurrence.IntervalPattern {
        XmlElementName: string;
        DaysOfTheWeek: Microsoft.Exchange.WebServices.Data.DayOfTheWeekCollection;
        FirstDayOfWeek: System.DayOfWeek;
        private daysOfTheWeek: Microsoft.Exchange.WebServices.Data.DayOfTheWeekCollection;
        private firstDayOfWeek: System.DayOfWeek;
        DaysOfTheWeekChanged(complexProperty: Microsoft.Exchange.WebServices.Data.ComplexProperty): any; //{ throw new Error("Not implemented.");}
        InternalValidate(): any; //{ throw new Error("Not implemented.");}
        InternalWritePropertiesToXml(writer: Microsoft.Exchange.WebServices.Data.EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonProperty: Microsoft.Exchange.WebServices.Data.JsonObject, service: Microsoft.Exchange.WebServices.Data.ExchangeService): any; //{ throw new Error("Not implemented.");}
        PatternToJson(service: Microsoft.Exchange.WebServices.Data.ExchangeService): Microsoft.Exchange.WebServices.Data.JsonObject; //{ throw new Error("Not implemented.");}
        TryReadElementFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsServiceXmlReader): boolean; //{ throw new Error("Not implemented.");}
    }
    class WeeklyRegenerationPattern extends Microsoft.Exchange.WebServices.Data.Recurrence.IntervalPattern {
        XmlElementName: string;
        IsRegenerationPattern: boolean;
    }
    class YearlyPattern extends Microsoft.Exchange.WebServices.Data.Recurrence {
        XmlElementName: string;
        Month: Microsoft.Exchange.WebServices.Data.Month;
        DayOfMonth: number;
        private month: Microsoft.Exchange.WebServices.Data.Month;
        private dayOfMonth: number;
        InternalValidate(): any; //{ throw new Error("Not implemented.");}
        InternalWritePropertiesToXml(writer: Microsoft.Exchange.WebServices.Data.EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonProperty: Microsoft.Exchange.WebServices.Data.JsonObject, service: Microsoft.Exchange.WebServices.Data.ExchangeService): any; //{ throw new Error("Not implemented.");}
        PatternToJson(service: Microsoft.Exchange.WebServices.Data.ExchangeService): Microsoft.Exchange.WebServices.Data.JsonObject; //{ throw new Error("Not implemented.");}
        TryReadElementFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsServiceXmlReader): boolean; //{ throw new Error("Not implemented.");}
    }
    class YearlyRegenerationPattern extends Microsoft.Exchange.WebServices.Data.Recurrence.IntervalPattern {
        XmlElementName: string;
        IsRegenerationPattern: boolean;
    }
}
declare module Microsoft.Exchange.WebServices.Data.SearchFilter {
    class ContainsSubstring extends Microsoft.Exchange.WebServices.Data.SearchFilter.PropertyBasedFilter {
        ContainmentMode: Microsoft.Exchange.WebServices.Data.ContainmentMode;
        ComparisonMode: Microsoft.Exchange.WebServices.Data.ComparisonMode;
        Value: string;
        private containmentMode: Microsoft.Exchange.WebServices.Data.ContainmentMode;
        private comparisonMode: Microsoft.Exchange.WebServices.Data.ComparisonMode;
        private value: string;
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalToJson(service: Microsoft.Exchange.WebServices.Data.ExchangeService): any; //{ throw new Error("Not implemented.");}
        InternalValidate(): any; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonProperty: Microsoft.Exchange.WebServices.Data.JsonObject, service: Microsoft.Exchange.WebServices.Data.ExchangeService): any; //{ throw new Error("Not implemented.");}
        ReadAttributesFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        TryReadElementFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsServiceXmlReader): boolean; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: Microsoft.Exchange.WebServices.Data.EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: Microsoft.Exchange.WebServices.Data.EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class ExcludesBitmask extends Microsoft.Exchange.WebServices.Data.SearchFilter.PropertyBasedFilter {
        Bitmask: number;
        private bitmask: number;
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalToJson(service: Microsoft.Exchange.WebServices.Data.ExchangeService): any; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonProperty: Microsoft.Exchange.WebServices.Data.JsonObject, service: Microsoft.Exchange.WebServices.Data.ExchangeService): any; //{ throw new Error("Not implemented.");}
        TryReadElementFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsServiceXmlReader): boolean; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: Microsoft.Exchange.WebServices.Data.EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class Exists extends Microsoft.Exchange.WebServices.Data.SearchFilter.PropertyBasedFilter {
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
    }
    class IsEqualTo extends Microsoft.Exchange.WebServices.Data.SearchFilter.RelationalFilter {
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
    }
    class IsGreaterThan extends Microsoft.Exchange.WebServices.Data.SearchFilter.RelationalFilter {
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
    }
    class IsGreaterThanOrEqualTo extends Microsoft.Exchange.WebServices.Data.SearchFilter.RelationalFilter {
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
    }
    class IsLessThan extends Microsoft.Exchange.WebServices.Data.SearchFilter.RelationalFilter {
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
    }
    class IsLessThanOrEqualTo extends Microsoft.Exchange.WebServices.Data.SearchFilter.RelationalFilter {
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
    }
    class IsNotEqualTo extends Microsoft.Exchange.WebServices.Data.SearchFilter.RelationalFilter {
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
    }
    class Not extends Microsoft.Exchange.WebServices.Data.SearchFilter {
        SearchFilter: Microsoft.Exchange.WebServices.Data.SearchFilter;
        private searchFilter: Microsoft.Exchange.WebServices.Data.SearchFilter;
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalToJson(service: Microsoft.Exchange.WebServices.Data.ExchangeService): any; //{ throw new Error("Not implemented.");}
        InternalValidate(): any; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonProperty: Microsoft.Exchange.WebServices.Data.JsonObject, service: Microsoft.Exchange.WebServices.Data.ExchangeService): any; //{ throw new Error("Not implemented.");}
        SearchFilterChanged(complexProperty: Microsoft.Exchange.WebServices.Data.ComplexProperty): any; //{ throw new Error("Not implemented.");}
        TryReadElementFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsServiceXmlReader): boolean; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: Microsoft.Exchange.WebServices.Data.EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class PropertyBasedFilter extends Microsoft.Exchange.WebServices.Data.SearchFilter {
        PropertyDefinition: Microsoft.Exchange.WebServices.Data.PropertyDefinitionBase;
        private propertyDefinition: Microsoft.Exchange.WebServices.Data.PropertyDefinitionBase;
        InternalToJson(service: Microsoft.Exchange.WebServices.Data.ExchangeService): any; //{ throw new Error("Not implemented.");}
        InternalValidate(): any; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonProperty: Microsoft.Exchange.WebServices.Data.JsonObject, service: Microsoft.Exchange.WebServices.Data.ExchangeService): any; //{ throw new Error("Not implemented.");}
        TryReadElementFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsServiceXmlReader): boolean; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: Microsoft.Exchange.WebServices.Data.EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class RelationalFilter extends Microsoft.Exchange.WebServices.Data.SearchFilter.PropertyBasedFilter {
        OtherPropertyDefinition: Microsoft.Exchange.WebServices.Data.PropertyDefinitionBase;
        Value: any;
        private otherPropertyDefinition: Microsoft.Exchange.WebServices.Data.PropertyDefinitionBase;
        private value: any;
        InternalToJson(service: Microsoft.Exchange.WebServices.Data.ExchangeService): any; //{ throw new Error("Not implemented.");}
        InternalValidate(): any; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonProperty: Microsoft.Exchange.WebServices.Data.JsonObject, service: Microsoft.Exchange.WebServices.Data.ExchangeService): any; //{ throw new Error("Not implemented.");}
        TryReadElementFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsServiceXmlReader): boolean; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: Microsoft.Exchange.WebServices.Data.EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class SearchFilterCollection extends Microsoft.Exchange.WebServices.Data.SearchFilter {
        Count: number;
        Item: Microsoft.Exchange.WebServices.Data.SearchFilter;
        LogicalOperator: Microsoft.Exchange.WebServices.Data.LogicalOperator;
        private searchFilters: System.Collections.Generic.List<T>;
        private logicalOperator: Microsoft.Exchange.WebServices.Data.LogicalOperator;
        Add(searchFilter: Microsoft.Exchange.WebServices.Data.SearchFilter): any; //{ throw new Error("Not implemented.");}
        AddRange(searchFilters: System.Collections.Generic.IEnumerable<T>): any; //{ throw new Error("Not implemented.");}
        Clear(): any; //{ throw new Error("Not implemented.");}
        Contains(searchFilter: Microsoft.Exchange.WebServices.Data.SearchFilter): boolean; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalToJson(service: Microsoft.Exchange.WebServices.Data.ExchangeService): any; //{ throw new Error("Not implemented.");}
        InternalValidate(): any; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonProperty: Microsoft.Exchange.WebServices.Data.JsonObject, service: Microsoft.Exchange.WebServices.Data.ExchangeService): any; //{ throw new Error("Not implemented.");}
        Remove(searchFilter: Microsoft.Exchange.WebServices.Data.SearchFilter): any; //{ throw new Error("Not implemented.");}
        RemoveAt(index: number): any; //{ throw new Error("Not implemented.");}
        SearchFilterChanged(complexProperty: Microsoft.Exchange.WebServices.Data.ComplexProperty): any; //{ throw new Error("Not implemented.");}
        TryReadElementFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsServiceXmlReader): boolean; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: Microsoft.Exchange.WebServices.Data.EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteToXml(writer: Microsoft.Exchange.WebServices.Data.EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
}
declare module Microsoft.Exchange.WebServices.Data.SearchFolderSchema {
    class FieldUris {
    }
}
declare module Microsoft.Exchange.WebServices.Data.ServiceObjectSchema {
    class PropertyFieldInfoDelegate extends System.MulticastDelegate {
        BeginInvoke(propertyDefinition: Microsoft.Exchange.WebServices.Data.PropertyDefinition, fieldInfo: System.Reflection.FieldInfo, callback: System.AsyncCallback, object: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        EndInvoke(result: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
        Invoke(propertyDefinition: Microsoft.Exchange.WebServices.Data.PropertyDefinition, fieldInfo: System.Reflection.FieldInfo): any; //{ throw new Error("Not implemented.");}
    }
}
declare module Microsoft.Exchange.WebServices.Data.StreamingSubscriptionConnection {
    class NotificationEventDelegate extends System.MulticastDelegate {
        BeginInvoke(sender: any, args: Microsoft.Exchange.WebServices.Data.NotificationEventArgs, callback: System.AsyncCallback, object: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        EndInvoke(result: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
        Invoke(sender: any, args: Microsoft.Exchange.WebServices.Data.NotificationEventArgs): any; //{ throw new Error("Not implemented.");}
    }
    class SubscriptionErrorDelegate extends System.MulticastDelegate {
        BeginInvoke(sender: any, args: Microsoft.Exchange.WebServices.Data.SubscriptionErrorEventArgs, callback: System.AsyncCallback, object: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        EndInvoke(result: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
        Invoke(sender: any, args: Microsoft.Exchange.WebServices.Data.SubscriptionErrorEventArgs): any; //{ throw new Error("Not implemented.");}
    }
}
declare module Microsoft.Exchange.WebServices.Data.TaskSchema {
    class FieldUris {
    }
}
declare module Microsoft.Exchange.WebServices.Data.TimeZoneTransitionGroup {
    class CustomTimeZoneCreateParams {
        BaseOffsetToUtc: System.TimeSpan;
        StandardDisplayName: string;
        DaylightDisplayName: string;
        HasDaylightPeriod: boolean;
        private baseOffsetToUtc: System.TimeSpan;
        private standardDisplayName: string;
        private daylightDisplayName: string;
    }
}