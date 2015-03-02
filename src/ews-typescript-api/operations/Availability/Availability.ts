module Microsoft.Exchange.WebServices.Data {
    export class GetUserAvailabilityRequest extends SimpleServiceRequestBase {
        EmitTimeZoneHeader: boolean;
        IsFreeBusyViewRequested: boolean;
        IsSuggestionsViewRequested: boolean;
        Attendees: AttendeeInfo[];//System.Collections.Generic.IEnumerable<AttendeeInfo>;
        TimeWindow: TimeWindow;
        RequestedData: AvailabilityData;
        Options: AvailabilityOptions;
        private attendees: AttendeeInfo[];//System.Collections.Generic.IEnumerable<AttendeeInfo>;
        private timeWindow: TimeWindow;
        private requestedData: AvailabilityData;
        private options: AvailabilityOptions;
        Execute(): GetUserAvailabilityResults { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class GetRoomListsRequest extends SimpleServiceRequestBase {
        Execute(): GetRoomListsResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class GetRoomsRequest extends SimpleServiceRequestBase {
        RoomList: EmailAddress;
        private roomList: EmailAddress;
        Execute(): GetRoomsResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class GetUserOofSettingsRequest extends SimpleServiceRequestBase {
        SmtpAddress: string;
        private smtpAddress: string;
        Execute(): GetUserOofSettingsResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class SetUserOofSettingsRequest extends SimpleServiceRequestBase {
        SmtpAddress: string;
        OofSettings: OofSettings;
        private smtpAddress: string;
        private oofSettings: OofSettings;
        Execute(): ServiceResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }


    export class GetUserOofSettingsResponse extends ServiceResponse {
        OofSettings: OofSettings;
        private oofSettings: OofSettings;
    }
    export class OofSettings extends ComplexProperty {
        State: OofState;
        ExternalAudience: OofExternalAudience;
        Duration: TimeWindow;
        InternalReply: OofReply;
        ExternalReply: OofReply;
        AllowExternalOof: OofExternalAudience;
        private state: OofState;
        private externalAudience: OofExternalAudience;
        private allowExternalOof: OofExternalAudience;
        private duration: TimeWindow;
        private internalReply: OofReply;
        private externalReply: OofReply;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        SerializeOofReply(oofReply: OofReply, writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    class OofReply {
        Culture: string;
        Message: string;
        private culture: string;
        private message: string;
        InternalToJson(service: ExchangeService): JsonObject{ throw new Error("Not implemented.");}
        LoadFromJson(jsonObject: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): any{ throw new Error("Not implemented.");}
        ToString(): string{ throw new Error("Not implemented.");}
        WriteEmptyReplyToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any{ throw new Error("Not implemented.");}
    }


    export class GetRoomsResponse extends ServiceResponse {
        Rooms: EmailAddress[];//System.Collections.ObjectModel.Collection<EmailAddress>;
        private rooms: EmailAddress[];//System.Collections.ObjectModel.Collection<EmailAddress>;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }


    export class GetRoomListsResponse extends ServiceResponse {
        RoomLists: EmailAddressCollection;
        private roomLists: EmailAddressCollection;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }


    export class EmailAddress extends ComplexProperty {
        static SmtpRoutingType: string = "SMTP";
        Name: string;
        Address: string;
        RoutingType: string;
        MailboxType: MailboxType;
        Id: ItemId;
        private name: string;
        private address: string;
        private routingType: string;
        private mailboxType: MailboxType;
        private id: ItemId;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class AttendeeAvailability extends ServiceResponse {
        CalendarEvents: CalendarEvent[];//System.Collections.ObjectModel.Collection<CalendarEvent>;
        ViewType: FreeBusyViewType;
        MergedFreeBusyStatus: LegacyFreeBusyStatus[];//System.Collections.ObjectModel.Collection<LegacyFreeBusyStatus>;
        WorkingHours: WorkingHours;
        private calendarEvents: CalendarEvent[];//System.Collections.ObjectModel.Collection<CalendarEvent>;
        private mergedFreeBusyStatus: LegacyFreeBusyStatus[];//System.Collections.ObjectModel.Collection<LegacyFreeBusyStatus>;
        private viewType: FreeBusyViewType;
        private workingHours: WorkingHours;
        LoadFreeBusyViewFromXml(reader: EwsServiceXmlReader, viewType: FreeBusyViewType): any { throw new Error("Not implemented."); }
    }

    export class AttendeeInfo {
        SmtpAddress: string;
        AttendeeType: MeetingAttendeeType;
        ExcludeConflicts: boolean;
        private smtpAddress: string;
        private attendeeType: MeetingAttendeeType;
        private excludeConflicts: boolean;
        WriteToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
    }
    export class AvailabilityOptions {
        MergedFreeBusyInterval: number;
        RequestedFreeBusyView: FreeBusyViewType;
        GoodSuggestionThreshold: number;
        MaximumSuggestionsPerDay: number;
        MaximumNonWorkHoursSuggestionsPerDay: number;
        MeetingDuration: number;
        MinimumSuggestionQuality: SuggestionQuality;
        DetailedSuggestionsWindow: TimeWindow;
        CurrentMeetingTime: Date;
        GlobalObjectId: string;
        private mergedFreeBusyInterval: number;
        private requestedFreeBusyView: FreeBusyViewType;
        private goodSuggestionThreshold: number;
        private maximumSuggestionsPerDay: number;
        private maximumNonWorkHoursSuggestionsPerDay: number;
        private meetingDuration: number;
        private minimumSuggestionQuality: SuggestionQuality;
        private detailedSuggestionsWindow: TimeWindow;
        private currentMeetingTime: Date;
        private globalObjectId: string;
        Validate(timeWindow: any /*System.TimeSpan*/): any{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter, request: GetUserAvailabilityRequest): any{ throw new Error("Not implemented.");}
    }
    export class TimeWindow {
        StartTime: Date;
        EndTime: Date;
        Duration: any;//System.TimeSpan;
        private startTime: Date;
        private endTime: Date;
        InternalToJson(service: ExchangeService): JsonObject{ throw new Error("Not implemented.");}
        LoadFromJson(jsonObject: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, startTime: any, endTime: any): any{ throw new Error("Not implemented.");}
        //WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any{ throw new Error("Not implemented.");}
        WriteToXmlUnscopedDatesOnly(writer: EwsServiceXmlWriter, xmlElementName: string): any{ throw new Error("Not implemented.");}
    }
    class GetUserAvailabilityResults {
        SuggestionsResponse: SuggestionsResponse;
        AttendeesAvailability: ServiceResponseCollection<AttendeeAvailability>;
        Suggestions: Suggestion[];//System.Collections.ObjectModel.Collection<Suggestion>;
        private attendeesAvailability: ServiceResponseCollection<AttendeeAvailability>;
        private suggestionsResponse: SuggestionsResponse;
    }

    export class SuggestionsResponse extends ServiceResponse {
        Suggestions: Suggestion[];//System.Collections.ObjectModel.Collection<Suggestion>;
        private daySuggestions: Suggestion[];//System.Collections.ObjectModel.Collection<Suggestion>;
        LoadSuggestedDaysFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class Suggestion extends ComplexProperty {
        Date: Date;
        Quality: SuggestionQuality;
        TimeSuggestions: TimeSuggestion[] /*System.Collections.ObjectModel.Collection<TimeSuggestion>*/;
        private date: Date;
        private quality: SuggestionQuality;
        private timeSuggestions: TimeSuggestion[]; /*System.Collections.ObjectModel.Collection<TimeSuggestion>;*/
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }

    export class TimeSuggestion extends ComplexProperty {
        MeetingTime: Date;
        IsWorkTime: boolean;
        Quality: SuggestionQuality;
        Conflicts: Conflict[];// System.Collections.ObjectModel.Collection<Conflict>;
        private meetingTime: Date;
        private isWorkTime: boolean;
        private quality: SuggestionQuality;
        private conflicts: Conflict[];// System.Collections.ObjectModel.Collection<Conflict>;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class Conflict extends ComplexProperty {
        ConflictType: ConflictType;
        NumberOfMembers: number;
        NumberOfMembersAvailable: number;
        NumberOfMembersWithConflict: number;
        NumberOfMembersWithNoData: number;
        FreeBusyStatus: LegacyFreeBusyStatus;
        private conflictType: ConflictType;
        private numberOfMembers: number;
        private numberOfMembersAvailable: number;
        private numberOfMembersWithConflict: number;
        private numberOfMembersWithNoData: number;
        private freeBusyStatus: LegacyFreeBusyStatus;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }

}