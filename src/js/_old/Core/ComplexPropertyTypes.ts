import enums = require('../Enums');
import XmlNamespace = enums.Data.XmlNamespace;

module Microsoft.Exchange.WebServices.Data {
    export class ApprovalRequestData extends ComplexProperty {
        IsUndecidedApprovalRequest: boolean;
        ApprovalDecision: number;
        ApprovalDecisionMaker: string;
        ApprovalDecisionTime: Date;
        private isUndecidedApprovalRequest: boolean;
        private approvalDecision: number;
        private approvalDecisionMaker: string;
        private approvalDecisionTime: Date;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class ByteArrayArray extends ComplexProperty {
        private static ItemXmlElementName: string = "Base64Binary";
        Content: any[];// System.Byte[][];
        private content: any[];// System.Byte[][];//System.Collections.Generic.List<T>;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class CalendarEvent extends ComplexProperty {
        StartTime: Date;
        EndTime: Date;
        FreeBusyStatus: LegacyFreeBusyStatus;
        Details: CalendarEventDetails;
        private startTime: Date;
        private endTime: Date;
        private freeBusyStatus: LegacyFreeBusyStatus;
        private details: CalendarEventDetails;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class CalendarEventDetails extends ComplexProperty {
        StoreId: string;
        Subject: string;
        Location: string;
        IsMeeting: boolean;
        IsRecurring: boolean;
        IsException: boolean;
        IsReminderSet: boolean;
        IsPrivate: boolean;
        private storeId: string;
        private subject: string;
        private location: string;
        private isMeeting: boolean;
        private isRecurring: boolean;
        private isException: boolean;
        private isReminderSet: boolean;
        private isPrivate: boolean;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class ChangeHighlights extends ComplexProperty {
        HasLocationChanged: boolean;
        Location: string;
        HasStartTimeChanged: boolean;
        Start: Date;
        HasEndTimeChanged: boolean;
        End: Date;
        private hasLocationChanged: boolean;
        private location: string;
        private hasStartTimeChanged: boolean;
        private start: Date;
        private hasEndTimeChanged: boolean;
        private end: Date;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class ClientAccessTokenRequest extends ComplexProperty {
        Id: string;
        TokenType: ClientAccessTokenType;
        Scope: string;
        private id: string;
        private tokenType: ClientAccessTokenType;
        private scope: string;
    }
    export class ClientApp extends ComplexProperty {
        Manifest: XMLDocument;// System.Xml.XmlDocument;
        Metadata: ClientAppMetadata;
        ReadToXmlDocument(reader: EwsServiceXmlReader): SafeXmlDocument { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class ClientAppMetadata extends ComplexProperty {
        EndNodeUrl: string;
        ActionUrl: string;
        AppStatus: string;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class ClientExtension extends ComplexProperty {
        Type: ExtensionType;
        Scope: ExtensionInstallScope;
        ManifestStream: any;// System.IO.Stream;
        MarketplaceAssetID: string;
        MarketplaceContentMarket: string;
        AppStatus: string;
        Etoken: string;
        IsAvailable: boolean;
        IsMandatory: boolean;
        IsEnabledByDefault: boolean;
        ProvidedTo: ClientExtensionProvidedTo;
        SpecificUsers: StringList;
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class CompleteName extends ComplexProperty {
        Title: string;
        GivenName: string;
        MiddleName: string;
        Surname: string;
        Suffix: string;
        Initials: string;
        FullName: string;
        NickName: string;
        YomiGivenName: string;
        YomiSurname: string;
        private title: string;
        private givenName: string;
        private middleName: string;
        private surname: string;
        private suffix: string;
        private initials: string;
        private fullName: string;
        private nickname: string;
        private yomiGivenName: string;
        private yomiSurname: string;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class ConversationNode extends ComplexProperty {
        InternetMessageId: string;
        ParentInternetMessageId: string;
        Items: Item[];// System.Collections.Generic.List<Item>;
        private propertySet: PropertySet;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class DayOfTheWeekCollection extends ComplexProperty {
        Item: DayOfTheWeek;
        Count: number;
        private items: any[];// System.Collections.Generic.List<T>;
        Add(dayOfTheWeek: DayOfTheWeek): any { throw new Error("Not implemented."); }
        AddRange(daysOfTheWeek:any /*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("Not implemented."); }
        Clear(): any { throw new Error("Not implemented."); }
        GetEnumerator(): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJsonValue(jsonValue: string): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): any { throw new Error("Not implemented."); }
        Remove(dayOfTheWeek: DayOfTheWeek): boolean { throw new Error("Not implemented."); }
        RemoveAt(index: number): any { throw new Error("Not implemented."); }
        ToString(separator?: string): string { throw new Error("Not implemented."); }
        //ToString(): string { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("Not implemented."); }
    }
    export class DeletedOccurrenceInfo extends ComplexProperty {
        OriginalStart: Date;
        private originalStart: Date;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class DictionaryEntryProperty<TKey> extends ComplexProperty {
        Key: TKey;
        private key: TKey;
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteDeleteUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, updates:any[] /*System.Collections.Generic.List<T>*/): boolean { throw new Error("Not implemented."); }
        WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean { throw new Error("Not implemented."); }
        WriteSetUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition, updates: any[]/*System.Collections.Generic.List<T>*/): boolean { throw new Error("Not implemented."); }
        WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, ownerDictionaryXmlElementName: string): boolean { throw new Error("Not implemented."); }
    }
    export class DictionaryProperty<TKey, TEntry> extends ComplexProperty {
        Entries: any;// System.Collections.Generic.Dictionary<TKey, TEntry>;
        private entries: any;//System.Collections.Generic.Dictionary<TKey, TEntry>;
        private removedEntries: any;// System.Collections.Generic.Dictionary<TKey, TEntry>;
        private addedEntries: any[];// System.Collections.Generic.List<T>;
        private modifiedEntries: any[];// System.Collections.Generic.List<T>;
        ClearChangeLog(): any { throw new Error("Not implemented."); }
        Contains(key: TKey): boolean { throw new Error("Not implemented."); }
        CreateEntry(reader: EwsServiceXmlReader): TEntry { throw new Error("Not implemented."); }
        CreateEntryInstance(): TEntry { throw new Error("Not implemented."); }
        EntryChanged(complexProperty: ComplexProperty): any { throw new Error("Not implemented."); }
        GetEntryXmlElementName(entry: TEntry): string { throw new Error("Not implemented."); }
        GetFieldIndex(key: TKey): string { throw new Error("Not implemented."); }
        GetFieldURI(): string { throw new Error("Not implemented."); }
        InternalAdd(entry: TEntry): any { throw new Error("Not implemented."); }
        InternalAddOrReplace(entry: TEntry): any { throw new Error("Not implemented."); }
        InternalRemove(key: TKey): any { throw new Error("Not implemented."); }
        //InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        //LoadFromXml(reader: EwsServiceXmlReader, localElementName: string): any { throw new Error("Not implemented."); }
        //WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        //WriteToXml(writer: EwsServiceXmlWriter, xmlNamespace: XmlNamespace, xmlElementName: string): any { throw new Error("Not implemented."); }
        //WriteUriToJson(key: TKey): JsonObject { throw new Error("Not implemented."); }
        //WriteUriToXml(writer: EwsServiceXmlWriter, key: TKey): any { throw new Error("Not implemented."); }
    }
    export class EnhancedLocation extends ComplexProperty {
        DisplayName: string;
        Annotation: string;
        PersonaPostalAddress: PersonaPostalAddress;
        private displayName: string;
        private annotation: string;
        private personaPostalAddress: PersonaPostalAddress;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        PersonaPostalAddress_OnChange(complexProperty: ComplexProperty): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class GroupMember extends ComplexProperty {
        Key: string;
        AddressInformation: EmailAddress;
        Status: MemberStatus;
        private addressInformation: EmailAddress;
        private status: MemberStatus;
        private key: string;
        AddressInformationChanged(complexProperty: ComplexProperty): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class ItemCollection<TItem> extends ComplexProperty {
        Count: number;
        Item: TItem;
        private items: any[];// System.Collections.Generic.List<T>;
        GetEnumerator(): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader, localElementName: string): any { throw new Error("Not implemented."); }
    }
    export class LegacyAvailabilityTimeZone extends ComplexProperty {
        private bias: any /*System.TimeSpan*/;
        private standardTime: LegacyAvailabilityTimeZoneTime;
        private daylightTime: LegacyAvailabilityTimeZoneTime;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ToTimeZoneInfo(): any /*System.TimeZoneInfo*/ { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class LegacyAvailabilityTimeZoneTime extends ComplexProperty {
        HasTransitionTime: boolean;
        Delta: any /*System.TimeSpan*/;
        TimeOfDay: any /*System.TimeSpan*/;
        DayOrder: number;
        Month: number;
        DayOfTheWeek: DayOfTheWeek;
        Year: number;
        private delta: any /*System.TimeSpan*/;
        private year: number;
        private month: number;
        private dayOrder: number;
        private dayOfTheWeek: DayOfTheWeek;
        private timeOfDay: any /*System.TimeSpan*/;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ToTransitionTime(): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class MeetingTimeZone extends ComplexProperty {
        Name: string;
        BaseOffset: any /*System.TimeSpan*/;
        Standard: TimeChange;
        Daylight: TimeChange;
        private name: string;
        private baseOffset: any /*System.TimeSpan*/;
        private standard: TimeChange;
        private daylight: TimeChange;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ToTimeZoneInfo(): any /*System.TimeZoneInfo*/ { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class OccurrenceInfo extends ComplexProperty {
        ItemId: ItemId;
        Start: Date;
        End: Date;
        OriginalStart: Date;
        private itemId: ItemId;
        private start: Date;
        private end: Date;
        private originalStart: Date;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class OnlineMeetingSettings extends ComplexProperty {
        LobbyBypass: LobbyBypass;
        AccessLevel: OnlineMeetingAccessLevel;
        Presenters: Presenters;
        private lobbyBypass: LobbyBypass;
        private accessLevel: OnlineMeetingAccessLevel;
        private presenters: Presenters;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class PersonaPostalAddress extends ComplexProperty {
        Street: string;
        City: string;
        State: string;
        Country: string;
        PostalCode: string;
        PostOfficeBox: string;
        Type: string;
        Source: LocationSource;
        Uri: string;
        Latitude: number;
        Longitude: number;
        Accuracy: number;
        Altitude: number;
        AltitudeAccuracy: number;
        FormattedAddress: string;
        private street: string;
        private city: string;
        private state: string;
        private country: string;
        private postalCode: string;
        private postOfficeBox: string;
        private type: string;
        private latitude: number;
        private longitude: number;
        private accuracy: number;
        private altitude: number;
        private altitudeAccuracy: number;
        private formattedAddress: string;
        private uri: string;
        private source: LocationSource;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class Recurrence extends ComplexProperty {
        XmlElementName: string;
        IsRegenerationPattern: boolean;
        StartDate: Date;
        HasEnd: boolean;
        NumberOfOccurrences: number;
        EndDate: Date;
        private startDate: Date;
        private numberOfOccurrences: number;
        private endDate: Date;
        GetFieldValueOrThrowIfNull(value: any, name: string): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        IsSame(otherRecurrence: Recurrence): boolean { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        NeverEnds(): any { throw new Error("Not implemented."); }
        PatternToJson(service: ExchangeService): JsonObject { throw new Error("Not implemented."); }
        RangeToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class RecurrenceRange extends ComplexProperty {
        XmlElementName: string;
        Recurrence: Recurrence;
        StartDate: Date;
        private startDate: Date;
        private recurrence: Recurrence;
        AddPropertiesToJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        Changed(): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        SetupRecurrence(recurrence: Recurrence): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class SearchFolderParameters extends ComplexProperty {
        Traversal: SearchFolderTraversal;
        RootFolderIds: FolderIdCollection;
        SearchFilter: SearchFilter;
        private traversal: SearchFolderTraversal;
        private rootFolderIds: FolderIdCollection;
        private searchFilter: SearchFilter;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        PropertyChanged(complexProperty: ComplexProperty): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class SetClientExtensionAction extends ComplexProperty {
        private setClientExtensionActionId: SetClientExtensionActionId;
        private extensionId: string;
        private clientExtension: ClientExtension;
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class TimeChange extends ComplexProperty {
        TimeZoneName: string;
        Offset: any /*System.TimeSpan*/;
        Time: Time;
        AbsoluteDate: Date;
        Recurrence: TimeChangeRecurrence;
        private timeZoneName: string;
        private offset: any /*System.TimeSpan*/;
        private time: Time;
        private absoluteDate: Date;
        private recurrence: TimeChangeRecurrence;
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class TimeChangeRecurrence extends ComplexProperty {
        DayOfTheWeekIndex: DayOfTheWeekIndex;
        DayOfTheWeek: DayOfTheWeek;
        Month: Month;
        private dayOfTheWeek: DayOfTheWeek;
        private dayOfTheWeekIndex: DayOfTheWeekIndex;
        private month: Month;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class TimeZoneDefinition extends ComplexProperty {
        private static NoIdPrefix: string = "NoId_";
        Name: string;
        Id: string;
        Periods: IndexerWithStringKey<TimeZonePeriod>;// System.Collections.Generic.Dictionary<string, TimeZonePeriod>;
        TransitionGroups: IndexerWithStringKey<TimeZoneTransitionGroup>;// System.Collections.Generic.Dictionary<string, TimeZoneTransitionGroup>;
        private name: string;
        private id: string;
        private periods: IndexerWithStringKey<TimeZonePeriod>;// System.Collections.Generic.Dictionary<string, TimeZonePeriod>;
        private transitionGroups: IndexerWithStringKey<TimeZoneTransitionGroup>;// System.Collections.Generic.Dictionary<string, TimeZoneTransitionGroup>;
        private transitions: TimeZoneTransition[];//System.Collections.Generic.List<TimeZoneTransition>;
        CompareTransitions(x: TimeZoneTransition, y: TimeZoneTransition): number { throw new Error("Not implemented."); }
        CreateTransitionGroupToPeriod(timeZonePeriod: TimeZonePeriod): TimeZoneTransitionGroup { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ToTimeZoneInfo(): any /*System.TimeZoneInfo*/ { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): void {
            super.WriteToXml(writer, XmlElementNames.TimeZoneDefinition, this.Namespace);
        }
    }
    export class TimeZonePeriod extends ComplexProperty {
        static StandardPeriodId: string = "Std";
        static StandardPeriodName: string = "Standard";
        static DaylightPeriodId: string = "Dlt";
        static DaylightPeriodName: string = "Daylight";
        IsStandardPeriod: boolean;
        Bias: any /*System.TimeSpan*/;
        Name: string;
        Id: string;
        private bias: any /*System.TimeSpan*/;
        private name: string;
        private id: string;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class TimeZoneTransition extends ComplexProperty {
        private static PeriodTarget: string = "Period";
        private static GroupTarget: string = "Group";

        TargetPeriod: TimeZonePeriod;
        TargetGroup: TimeZoneTransitionGroup;
        private timeZoneDefinition: TimeZoneDefinition;
        private targetPeriod: TimeZonePeriod;
        private targetGroup: TimeZoneTransitionGroup;
        Create(timeZoneDefinition: TimeZoneDefinition, xmlElementName: string): TimeZoneTransition { throw new Error("Not implemented."); }
        CreateTimeZoneTransition(timeZoneDefinition: TimeZoneDefinition, targetPeriod: TimeZonePeriod, transitionTime: any): TimeZoneTransition { throw new Error("Not implemented."); }
        CreateTransitionTime(): any { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InitializeFromTransitionTime(transitionTime: any): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class TimeZoneTransitionGroup extends ComplexProperty {
        SupportsDaylight: boolean;
        private TransitionToDaylight: TimeZoneTransition;
        private TransitionToStandard: TimeZoneTransition;
        Id: string;
        Transitions: TimeZoneTransition[];//System.Collections.Generic.List<TimeZoneTransition>;
        private timeZoneDefinition: TimeZoneDefinition;
        private id: string;
        private transitions: TimeZoneTransition[];//System.Collections.Generic.List<TimeZoneTransition>;
        private transitionToStandard: TimeZoneTransition;
        private transitionToDaylight: TimeZoneTransition;
        CreateAdjustmentRule(startDate: Date, endDate: Date): any { throw new Error("Not implemented."); }
        GetCustomTimeZoneCreationParams(): TimeZoneTransitionGroup.CustomTimeZoneCreateParams { throw new Error("Not implemented."); }
        GetDaylightDelta(): any /*System.TimeSpan*/ { throw new Error("Not implemented."); }
        InitializeFromAdjustmentRule(adjustmentRule: any, standardPeriod: TimeZonePeriod): any { throw new Error("Not implemented."); }
        InitializeTransitions(): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class VotingInformation extends ComplexProperty {
        UserOptions: VotingOptionData[];//System.Collections.ObjectModel.Collection<VotingOptionData>;
        VotingResponse: string;
        private userOptions: VotingOptionData[];//System.Collections.ObjectModel.Collection<VotingOptionData>;
        private votingResponse: string;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class VotingOptionData extends ComplexProperty {
        DisplayName: string;
        SendPrompt: SendPrompt;
        private displayName: string;
        private sendPrompt: SendPrompt;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class WorkingHours extends ComplexProperty {
        TimeZone: any;//System.TimeZoneInfo;
        DaysOfTheWeek: DayOfTheWeek /*System.Collections.ObjectModel.Collection<DayOfTheWeek>*/;
        StartTime: any /*System.TimeSpan*/;
        EndTime: any /*System.TimeSpan*/;
        private timeZone: any;//System.TimeZoneInfo;
        private daysOfTheWeek: DayOfTheWeek /*System.Collections.ObjectModel.Collection<DayOfTheWeek>*/;
        private startTime: any /*System.TimeSpan*/;
        private endTime: any /*System.TimeSpan*/;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class WorkingPeriod extends ComplexProperty {
        DaysOfWeek: DayOfTheWeek /*System.Collections.ObjectModel.Collection<DayOfTheWeek>*/;
        StartTime: any /*System.TimeSpan*/;
        EndTime: any /*System.TimeSpan*/;
        private daysOfWeek: DayOfTheWeek /*System.Collections.ObjectModel.Collection<DayOfTheWeek>*/;
        private startTime: any /*System.TimeSpan*/;
        private endTime: any /*System.TimeSpan*/;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }

    export class AttendeeCollection extends ComplexPropertyCollection<Attendee> {
        Add(attendee: Attendee): any { throw new Error("Not implemented."); }
        Add(smtpAddress: string): Attendee { throw new Error("Not implemented."); }
        Add(name: string, smtpAddress: string): Attendee { throw new Error("Not implemented."); }
        Clear(): any { throw new Error("Not implemented."); }
        CreateComplexProperty(xmlElementName: string): Attendee { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): Attendee { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(attendee: Attendee): string { throw new Error("Not implemented."); }
        Remove(attendee: Attendee): boolean { throw new Error("Not implemented."); }
        RemoveAt(index: number): any { throw new Error("Not implemented."); }
    }
    export class ConversationNodeCollection extends ComplexPropertyCollection<ConversationNode> {
        private propertySet: PropertySet;
        CreateComplexProperty(xmlElementName: string): ConversationNode { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): ConversationNode { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: ConversationNode): string { throw new Error("Not implemented."); }
    }
    export class DeletedOccurrenceInfoCollection extends ComplexPropertyCollection<DeletedOccurrenceInfo> {
        CreateComplexProperty(xmlElementName: string): DeletedOccurrenceInfo { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): DeletedOccurrenceInfo { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: DeletedOccurrenceInfo): string { throw new Error("Not implemented."); }
    }
    export class FolderIdCollection extends ComplexPropertyCollection<FolderId> {
        Add(folderId: FolderId): any { throw new Error("Not implemented."); }
        Add(folderName: WellKnownFolderName): FolderId { throw new Error("Not implemented."); }
        Clear(): any { throw new Error("Not implemented."); }
        CreateComplexProperty(xmlElementName: string): FolderId { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): FolderId { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: FolderId): string { throw new Error("Not implemented."); }
        Remove(folderId: FolderId): boolean { throw new Error("Not implemented."); }
        Remove(folderName: WellKnownFolderName): boolean { throw new Error("Not implemented."); }
        RemoveAt(index: number): any { throw new Error("Not implemented."); }
    }
    export class GroupMemberCollection extends ComplexPropertyCollection<GroupMember> {
        private collectionIsCleared: boolean;
        Add(member: GroupMember): any { throw new Error("Not implemented."); }
        AddContactEmailAddress(contact: Contact, emailAddressKey: EmailAddressKey): any { throw new Error("Not implemented."); }
        AddContactGroup(contactGroupId: ItemId): any { throw new Error("Not implemented."); }
        AddDirectoryContact(address: string, routingType: string): any { throw new Error("Not implemented."); }
        AddDirectoryContact(smtpAddress: string): any { throw new Error("Not implemented."); }
        AddDirectoryPublicFolder(smtpAddress: string): any { throw new Error("Not implemented."); }
        AddDirectoryUser(address: string, routingType: string): any { throw new Error("Not implemented."); }
        AddDirectoryUser(smtpAddress: string): any { throw new Error("Not implemented."); }
        AddOneOff(displayName: string, address: string, routingType: string): any { throw new Error("Not implemented."); }
        AddOneOff(displayName: string, smtpAddress: string): any { throw new Error("Not implemented."); }
        AddPersonalContact(contactId: ItemId): any { throw new Error("Not implemented."); }
        AddPersonalContact(contactId: ItemId, addressToLink: string): any { throw new Error("Not implemented."); }
        AddPublicGroup(smtpAddress: string): any { throw new Error("Not implemented."); }
        AddRange(members: System.Collections.Generic.IEnumerable<T>): any { throw new Error("Not implemented."); }
        Clear(): any { throw new Error("Not implemented."); }
        ClearChangeLog(): any { throw new Error("Not implemented."); }
        CreateComplexProperty(xmlElementName: string): GroupMember { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): GroupMember { throw new Error("Not implemented."); }
        Find(key: string): GroupMember { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(member: GroupMember): string { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        Remove(member: GroupMember): boolean { throw new Error("Not implemented."); }
        RemoveAt(index: number): any { throw new Error("Not implemented."); }
        WriteDeleteMembersCollectionToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteDeleteMembersToXml(writer: EwsServiceXmlWriter, members: System.Collections.Generic.List<GroupMember>): any { throw new Error("Not implemented."); }
        WriteSetOrAppendMembersToXml(writer: EwsServiceXmlWriter, members: System.Collections.Generic.List<GroupMember>, setMode: boolean): any { throw new Error("Not implemented."); }
    }
    export class ItemIdCollection extends ComplexPropertyCollection<ItemId> {
        CreateComplexProperty(xmlElementName: string): ItemId { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): ItemId { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: ItemId): string { throw new Error("Not implemented."); }
    }
    export class OccurrenceInfoCollection extends ComplexPropertyCollection<OccurrenceInfo> {
        CreateComplexProperty(xmlElementName: string): OccurrenceInfo { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): OccurrenceInfo { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: OccurrenceInfo): string { throw new Error("Not implemented."); }
    }


    export class EmailAddressDictionary extends DictionaryProperty<EmailAddressKey, EmailAddressEntry> {
        Item: EmailAddress;
        CreateEntryInstance(): EmailAddressEntry { throw new Error("Not implemented."); }
        GetFieldURI(): string { throw new Error("Not implemented."); }
        TryGetValue(key: EmailAddressKey, emailAddress: any): boolean { throw new Error("Not implemented."); }
    }
    export class ImAddressDictionary extends DictionaryProperty<ImAddressKey, ImAddressEntry> {
        Item: string;
        CreateEntryInstance(): ImAddressEntry { throw new Error("Not implemented."); }
        GetFieldURI(): string { throw new Error("Not implemented."); }
        TryGetValue(key: ImAddressKey, imAddress: any): boolean { throw new Error("Not implemented."); }
    }
    export class PhoneNumberDictionary extends DictionaryProperty<PhoneNumberKey, PhoneNumberEntry> {
        Item: string;
        CreateEntryInstance(): PhoneNumberEntry { throw new Error("Not implemented."); }
        GetFieldURI(): string { throw new Error("Not implemented."); }
        TryGetValue(key: PhoneNumberKey, phoneNumber: any): boolean { throw new Error("Not implemented."); }
    }
    export class PhysicalAddressDictionary extends DictionaryProperty<PhysicalAddressKey, PhysicalAddressEntry> {
        Item: PhysicalAddressEntry;
        CreateEntryInstance(): PhysicalAddressEntry { throw new Error("Not implemented."); }
        TryGetValue(key: PhysicalAddressKey, physicalAddress: any): boolean { throw new Error("Not implemented."); }
    }






    export class AppointmentOccurrenceId extends ItemId {
        OccurrenceIndex: number;
        private occurrenceIndex: number;
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class RecurringAppointmentMasterId extends ItemId {
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }


    export class CreateRuleOperation extends RuleOperation {
        Rule: Rule;
        XmlElementName: string;
        private rule: Rule;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class DeleteRuleOperation extends RuleOperation {
        RuleId: string;
        XmlElementName: string;
        private ruleId: string;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class SetRuleOperation extends RuleOperation {
        Rule: Rule;
        XmlElementName: string;
        private rule: Rule;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class EndDateRecurrenceRange extends RecurrenceRange {
        XmlElementName: string;
        EndDate: Date;
        private endDate: Date;
        AddPropertiesToJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        SetupRecurrence(recurrence: Recurrence): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class NoEndRecurrenceRange extends RecurrenceRange {
        XmlElementName: string;
        SetupRecurrence(recurrence: Recurrence): any { throw new Error("Not implemented."); }
    }
    export class NumberedRecurrenceRange extends RecurrenceRange {
        XmlElementName: string;
        NumberOfOccurrences: number;
        private numberOfOccurrences: number;
        AddPropertiesToJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        SetupRecurrence(recurrence: Recurrence): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }





    export class EmailAddressEntry extends DictionaryEntryProperty<EmailAddressKey> {
        EmailAddress: EmailAddress;
        private emailAddress: EmailAddress;
        EmailAddressChanged(complexProperty: ComplexProperty): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class ImAddressEntry extends DictionaryEntryProperty<ImAddressKey> {
        ImAddress: string;
        private imAddress: string;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class PhoneNumberEntry extends DictionaryEntryProperty<PhoneNumberKey> {
        PhoneNumber: string;
        private phoneNumber: string;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class PhysicalAddressEntry extends DictionaryEntryProperty<PhysicalAddressKey> {
        Street: string;
        City: string;
        State: string;
        CountryOrRegion: string;
        PostalCode: string;
        private propertyBag: SimplePropertyBag<TKey>;
        ClearChangeLog(): any { throw new Error("Not implemented."); }
        GetFieldUri(xmlElementName: string): string { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalWriteDeleteFieldToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, fieldXmlElementName: string): any { throw new Error("Not implemented."); }
        InternalWriteDeleteUpdateToJson(ewsObject: ServiceObject, propertyName: string, updates: System.Collections.Generic.List<T>): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        PropertyBagChanged(): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteDeleteUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, updates: System.Collections.Generic.List<T>): boolean { throw new Error("Not implemented."); }
        WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteSetUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition, updates: System.Collections.Generic.List<T>): boolean { throw new Error("Not implemented."); }
        WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, ownerDictionaryXmlElementName: string): boolean { throw new Error("Not implemented."); }
    }


    export class Attendee extends EmailAddress {
        ResponseType: MeetingResponseType;
        LastResponseTime: Date;
        private responseType: MeetingResponseType;
        private lastResponseTime: Date;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }




    export class AbsoluteDateTransition extends TimeZoneTransition {
        DateTime: Date;
        private dateTime: Date;
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InitializeFromTransitionTime(transitionTime: any): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class AbsoluteMonthTransition extends TimeZoneTransition {
        TimeOffset: System.TimeSpan;
        Month: number;
        private timeOffset: System.TimeSpan;
        private month: number;
        InitializeFromTransitionTime(transitionTime: any): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }


    export class AbsoluteDayOfMonthTransition extends AbsoluteMonthTransition {
        DayOfMonth: number;
        private dayOfMonth: number;
        CreateTransitionTime(): any { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InitializeFromTransitionTime(transitionTime: any): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }


    export class EntityExtractionResult extends ComplexProperty {
        Addresses: AddressEntityCollection;
        MeetingSuggestions: MeetingSuggestionCollection;
        TaskSuggestions: TaskSuggestionCollection;
        EmailAddresses: EmailAddressEntityCollection;
        Contacts: ContactEntityCollection;
        Urls: UrlEntityCollection;
        PhoneNumbers: PhoneEntityCollection;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class ExtractedEntity extends ComplexProperty {
        Position: EmailPosition;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class AddressEntity extends ExtractedEntity {
        Address: string;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class AddressEntityCollection extends ComplexPropertyCollection<AddressEntity> {
        CreateComplexProperty(xmlElementName: string): AddressEntity { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): AddressEntity { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: AddressEntity): string { throw new Error("Not implemented."); }
    }
    export class MeetingSuggestion extends ExtractedEntity {
        Attendees: EmailUserEntityCollection;
        Location: string;
        Subject: string;
        MeetingString: string;
        StartTime: Date;
        EndTime: Date;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class MeetingSuggestionCollection extends ComplexPropertyCollection<MeetingSuggestion> {
        CreateComplexProperty(xmlElementName: string): MeetingSuggestion { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): MeetingSuggestion { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: MeetingSuggestion): string { throw new Error("Not implemented."); }
    }
    export class EmailUserEntity extends ComplexProperty {
        Name: string;
        UserId: string;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class EmailUserEntityCollection extends ComplexPropertyCollection<EmailUserEntity> {
        CreateComplexProperty(xmlElementName: string): EmailUserEntity { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): EmailUserEntity { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: EmailUserEntity): string { throw new Error("Not implemented."); }
    }
    export class TaskSuggestion extends ExtractedEntity {
        TaskString: string;
        Assignees: EmailUserEntityCollection;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class TaskSuggestionCollection extends ComplexPropertyCollection<TaskSuggestion> {
        CreateComplexProperty(xmlElementName: string): TaskSuggestion { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): TaskSuggestion { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: TaskSuggestion): string { throw new Error("Not implemented."); }
    }
    export class EmailAddressEntity extends ExtractedEntity {
        EmailAddress: string;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class EmailAddressEntityCollection extends ComplexPropertyCollection<EmailAddressEntity> {
        CreateComplexProperty(xmlElementName: string): EmailAddressEntity { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): EmailAddressEntity { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: EmailAddressEntity): string { throw new Error("Not implemented."); }
    }
    export class ContactEntity extends ExtractedEntity {
        PersonName: string;
        BusinessName: string;
        PhoneNumbers: ContactPhoneEntityCollection;
        Urls: StringList;
        EmailAddresses: StringList;
        Addresses: StringList;
        ContactString: string;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class ContactEntityCollection extends ComplexPropertyCollection<ContactEntity> {
        CreateComplexProperty(xmlElementName: string): ContactEntity { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): ContactEntity { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: ContactEntity): string { throw new Error("Not implemented."); }
    }
    export class ContactPhoneEntity extends ComplexProperty {
        OriginalPhoneString: string;
        PhoneString: string;
        Type: string;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class ContactPhoneEntityCollection extends ComplexPropertyCollection<ContactPhoneEntity> {
        CreateComplexProperty(xmlElementName: string): ContactPhoneEntity { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): ContactPhoneEntity { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: ContactPhoneEntity): string { throw new Error("Not implemented."); }
    }
    export class StringList extends ComplexProperty {
        Count: number;
        Item: string;
        private items: string[] /*System.Collections.Generic.List<string>*/;
        private itemXmlElementName: string;
        Add(s: string): any { throw new Error("Not implemented."); }
        AddRange(strings: string[] /*System.Collections.Generic.IEnumerable<string>*/): any { throw new Error("Not implemented."); }
        Clear(): any { throw new Error("Not implemented."); }
        Contains(s: string): boolean { throw new Error("Not implemented."); }
        Equals(obj: any): boolean { throw new Error("Not implemented."); }
        GetEnumerator(): any { throw new Error("Not implemented."); }
        GetHashCode(): number { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        Remove(s: string): boolean { throw new Error("Not implemented."); }
        RemoveAt(index: number): any { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class UrlEntity extends ExtractedEntity {
        Url: string;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class UrlEntityCollection extends ComplexPropertyCollection<UrlEntity> {
        CreateComplexProperty(xmlElementName: string): UrlEntity { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): UrlEntity { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: UrlEntity): string { throw new Error("Not implemented."); }
    }
    export class PhoneEntity extends ExtractedEntity {
        OriginalPhoneString: string;
        PhoneString: string;
        Type: string;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class PhoneEntityCollection extends ComplexPropertyCollection<PhoneEntity> {
        CreateComplexProperty(xmlElementName: string): PhoneEntity { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): PhoneEntity { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: PhoneEntity): string { throw new Error("Not implemented."); }
    }
    export class UniqueBody extends ComplexProperty {
        BodyType: BodyType;
        Text: string;
        IsTruncated: boolean;
        private bodyType: BodyType;
        private text: string;
        private isTruncated: boolean;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class InternetMessageHeader extends ComplexProperty {
        Name: string;
        Value: string;
        private name: string;
        private value: string;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class InternetMessageHeaderCollection extends ComplexPropertyCollection<InternetMessageHeader> {
        CreateComplexProperty(xmlElementName: string): InternetMessageHeader { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): InternetMessageHeader { throw new Error("Not implemented."); }
        Find(name: string): InternetMessageHeader { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: InternetMessageHeader): string { throw new Error("Not implemented."); }
    }
    export class MimeContent extends ComplexProperty {
        CharacterSet: string;
        Content: any[];//System.Byte[];
        private characterSet: string;
        private content: any[];//System.Byte[];
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }




    export class AttachmentCollection extends ComplexPropertyCollection<Attachment> {
        //private IOwnedProperty.Owner: ServiceObject;
        private owner: Item;
        AddFileAttachment(fileName: string): FileAttachment { throw new Error("Not implemented."); }
        //AddFileAttachment(name: string, fileName: string): FileAttachment { throw new Error("Not implemented."); }
        //AddFileAttachment(name: string, contentStream: any/*System.IO.Stream*/): FileAttachment { throw new Error("Not implemented."); }
        //AddFileAttachment(name: string, content: any[]/*System.Byte[]*/): FileAttachment { throw new Error("Not implemented."); }
        //AddItemAttachment(): ItemAttachment/*<TItem>*/ { throw new Error("Not implemented."); }
        Clear(): any { throw new Error("Not implemented."); }
        ClearChangeLog(): any { throw new Error("Not implemented."); }
        CreateComplexProperty(xmlElementName: string): Attachment { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): Attachment { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: Attachment): string { throw new Error("Not implemented."); }
        HasUnprocessedChanges(): boolean { throw new Error("Not implemented."); }
        InternalCreateAttachments(parentItemId: string, attachments: any[]/*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("Not implemented."); }
        InternalDeleteAttachments(attachments: any[]/*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("Not implemented."); }
        Remove(attachment: Attachment): boolean { throw new Error("Not implemented."); }
        RemoveAt(index: number): any { throw new Error("Not implemented."); }
        Save(): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
    }
    export class FileAttachment extends Attachment {
        FileName: string;
        ContentStream: any;//System.IO.Stream;
        Content: any[];//System.Byte[];
        IsContactPhoto: boolean;
        private fileName: string;
        private contentStream: any;//System.IO.Stream;
        private content: any[];//System.Byte[];
        private loadToStream: any;//System.IO.Stream;
        private isContactPhoto: boolean;
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        //Load(stream: System.IO.Stream): any { throw new Error("Not implemented."); }
        //Load(fileName: string): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        TryReadElementFromXmlToPatch(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        //Validate(attachmentIndex: number): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }


    export class RetentionTagBase extends ComplexProperty {
        IsExplicit: boolean;
        RetentionId: string /*System.Guid*/;
        private xmlElementName: string;
        private isExplicit: boolean;
        private retentionId: string /*System.Guid*/;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class ArchiveTag extends RetentionTagBase {
    }
    export class PolicyTag extends RetentionTagBase {
    }


    export class FolderPermissionCollection extends ComplexPropertyCollection<FolderPermission> {
        private InnerCollectionXmlElementName: string;
        private CollectionItemXmlElementName: string;
        UnknownEntries: string[];// System.Collections.ObjectModel.Collection<string>;
        private isCalendarFolder: boolean;
        private unknownEntries: string[];// System.Collections.ObjectModel.Collection<string>;
        Add(permission: FolderPermission): any { throw new Error("Not implemented."); }
        AddRange(permissions: FolderPermission[]/*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("Not implemented."); }
        Clear(): any { throw new Error("Not implemented."); }
        CreateComplexProperty(xmlElementName: string): FolderPermission { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): FolderPermission { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: FolderPermission): string { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader, localElementName: string): any { throw new Error("Not implemented."); }
        Remove(permission: FolderPermission): boolean { throw new Error("Not implemented."); }
        RemoveAt(index: number): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }


    export class ItemId extends ServiceId {
        GetXmlElementName(): string { throw new Error("Not implemented."); }
    }
    export class ConversationId extends ServiceId {
        GetJsonTypeName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
    }


    export class ManagedFolderInformation extends ComplexProperty {
        CanDelete: boolean;
        CanRenameOrMove: boolean;
        MustDisplayComment: boolean;
        HasQuota: boolean;
        IsManagedFoldersRoot: boolean;
        ManagedFolderId: string;
        Comment: string;
        StorageQuota: number;
        FolderSize: number;
        HomePage: string;
        private canDelete: boolean;
        private canRenameOrMove: boolean;
        private mustDisplayComment: boolean;
        private hasQuota: boolean;
        private isManagedFoldersRoot: boolean;
        private managedFolderId: string;
        private comment: string;
        private storageQuota: number;
        private folderSize: number;
        private homePage: string;
        LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class SearchFilter extends ComplexProperty {
        GetSearchFilterInstance(localName: string): SearchFilter { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader): SearchFilter { throw new Error("Not implemented."); }
        LoadSearchFilterFromJson(jsonObject: any/*JsonObject*/, service: ExchangeService): SearchFilter { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class FolderPermission extends ComplexProperty {
        UserId: UserId;
        CanCreateItems: boolean;
        CanCreateSubFolders: boolean;
        IsFolderOwner: boolean;
        IsFolderVisible: boolean;
        IsFolderContact: boolean;
        EditItems: PermissionScope;
        DeleteItems: PermissionScope;
        ReadItems: FolderPermissionReadAccess;
        PermissionLevel: FolderPermissionLevel;
        DisplayPermissionLevel: FolderPermissionLevel;
        private userId: UserId;
        private canCreateItems: boolean;
        private canCreateSubFolders: boolean;
        private isFolderOwner: boolean;
        private isFolderVisible: boolean;
        private isFolderContact: boolean;
        private editItems: PermissionScope;
        private deleteItems: PermissionScope;
        private readItems: FolderPermissionReadAccess;
        private permissionLevel: FolderPermissionLevel;
        //private static defaultPermissions: LazyMember<T>;
        //private static levelVariants: LazyMember<T>;
        AdjustPermissionLevel(): any { throw new Error("Not implemented."); }
        AssignIndividualPermissions(permission: FolderPermission): any { throw new Error("Not implemented."); }
        Clone(): FolderPermission { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService, isCalendarFolder: boolean): any { throw new Error("Not implemented."); }
        IsEqualTo(permission: FolderPermission): boolean { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string, xmlNamespace: XmlNamespace): void { throw new Error("Not implemented."); }
        PropertyChanged(complexProperty: ComplexProperty): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        //Validate(isCalendarFolder: boolean, permissionIndex: number): void { throw new Error("Not implemented."); }
        Validate(): void { throw new Error("Not implemented."); }
        //WriteElementsToXml(writer: EwsServiceXmlWriter, isCalendarFolder: boolean): any { throw new Error("Not implemented."); }
        //WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, isCalendarFolder: boolean): any { throw new Error("Not implemented."); }
    }
    export class UserId extends ComplexProperty {
        SID: string;
        PrimarySmtpAddress: string;
        DisplayName: string;
        StandardUser: StandardUser;
        private sID: string;
        private primarySmtpAddress: string;
        private displayName: string;
        private standardUser: StandardUser;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        IsValid(): boolean { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class Flag extends ComplexProperty {
        FlagStatus: ItemFlagStatus;
        StartDate: Date;
        DueDate: Date;
        CompleteDate: Date;
        private flagStatus: ItemFlagStatus;
        private startDate: Date;
        private dueDate: Date;
        private completeDate: Date;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class MessageBody extends ComplexProperty {
        BodyType: BodyType;
        Text: string;
        private bodyType: BodyType;
        private text: string;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class TextBody extends MessageBody {
    }
    export class NormalizedBody extends ComplexProperty {
        BodyType: BodyType;
        Text: string;
        IsTruncated: boolean;
        private bodyType: BodyType;
        private text: string;
        private isTruncated: boolean;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

}

import _export = Microsoft.Exchange.WebServices.Data;
export = _export;
