declare module Microsoft.Exchange.WebServices.Data {
    class AbstractItemIdWrapper {
        GetItem(): Item; //{ throw new Error("Not implemented.");}
        IternalToJson(service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class AddDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {
        MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
        DelegateUsers: System.Collections.Generic.List<DelegateUser>;
        private delegateUsers: System.Collections.Generic.List<DelegateUser>;
        private meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
        CreateResponse(): DelegateManagementResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class AlternateId extends AlternateIdBase {
        UniqueId: string;
        Mailbox: string;
        IsArchive: boolean;
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalToJson(jsonObject: JsonObject): any; //{ throw new Error("Not implemented.");}
        InternalValidate(): any; //{ throw new Error("Not implemented.");}
        LoadAttributesFromJson(responseObject: JsonObject): any; //{ throw new Error("Not implemented.");}
        LoadAttributesFromXml(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class AlternateIdBase {
        Format: IdFormat;
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalToJson(jsonObject: JsonObject): any; //{ throw new Error("Not implemented.");}
        InternalValidate(): any; //{ throw new Error("Not implemented.");}
        LoadAttributesFromJson(responseObject: JsonObject): any; //{ throw new Error("Not implemented.");}
        LoadAttributesFromXml(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class AlternatePublicFolderId extends AlternateIdBase {
        FolderId: string;
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalToJson(jsonObject: JsonObject): any; //{ throw new Error("Not implemented.");}
        LoadAttributesFromJson(responseObject: JsonObject): any; //{ throw new Error("Not implemented.");}
        LoadAttributesFromXml(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class AlternatePublicFolderItemId extends AlternatePublicFolderId {
        ItemId: string;
        private itemId: string;
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalToJson(jsonObject: JsonObject): any; //{ throw new Error("Not implemented.");}
        LoadAttributesFromJson(responseObject: JsonObject): any; //{ throw new Error("Not implemented.");}
        LoadAttributesFromXml(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class AsyncRequestResult {
        ServiceRequest: ServiceRequestBase;
        WebRequest: IEwsHttpWebRequest;
        WebAsyncResult: System.IAsyncResult;
        AsyncState: any;
        AsyncWaitHandle: System.Threading.WaitHandle;
        CompletedSynchronously: boolean;
        IsCompleted: boolean;
        ExtractServiceRequest(exchangeService: ExchangeService, asyncResult: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
    }
    class AttachableAttribute extends System.Attribute {
    }
    class AttendeeInfo {
        SmtpAddress: string;
        AttendeeType: MeetingAttendeeType;
        ExcludeConflicts: boolean;
        private smtpAddress: string;
        private attendeeType: MeetingAttendeeType;
        private excludeConflicts: boolean;
        WriteToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class AvailabilityOptions {
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
        Validate(timeWindow: System.TimeSpan): any; //{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter, request: GetUserAvailabilityRequest): any; //{ throw new Error("Not implemented.");}
    }
    class CalendarActionResults {
        Appointment: Appointment;
        MeetingRequest: MeetingRequest;
        MeetingResponse: MeetingResponse;
        MeetingCancellation: MeetingCancellation;
        private appointment: Appointment;
        private meetingRequest: MeetingRequest;
        private meetingResponse: MeetingResponse;
        private meetingCancellation: MeetingCancellation;
    }
    class CalendarView extends ViewBase {
        StartDate: Date;
        EndDate: Date;
        MaxItemsReturned: number;
        Traversal: ItemTraversal;
        private traversal: ItemTraversal;
        private maxItemsReturned: number;
        private startDate: Date;
        private endDate: Date;
        AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        GetMaxEntriesReturned(): number; //{ throw new Error("Not implemented.");}
        GetServiceObjectType(): ServiceObjectType; //{ throw new Error("Not implemented.");}
        GetViewJsonTypeName(): string; //{ throw new Error("Not implemented.");}
        GetViewXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalValidate(request: ServiceRequestBase): any; //{ throw new Error("Not implemented.");}
        InternalWritePagingToJson(jsonView: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any; //{ throw new Error("Not implemented.");}
        InternalWriteViewToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any; //{ throw new Error("Not implemented.");}
        WriteOrderByToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class Change {
        ChangeType: ChangeType;
        ServiceObject: ServiceObject;
        Id: ServiceId;
        private changeType: ChangeType;
        private serviceObject: ServiceObject;
        private id: ServiceId;
        CreateId(): ServiceId; //{ throw new Error("Not implemented.");}
    }
    class ChangeCollection<TChange> {
        Count: number;
        Item: TChange;
        SyncState: string;
        MoreChangesAvailable: boolean;
        private changes: System.Collections.Generic.List<T>;
        private syncState: string;
        private moreChangesAvailable: boolean;
        Add(change: TChange): any; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
    }
    class ClientCertificateCredentials extends ExchangeCredentials {
        ClientCertificates: System.Security.Cryptography.X509Certificates.X509CertificateCollection;
        private clientCertificates: System.Security.Cryptography.X509Certificates.X509CertificateCollection;
        PrepareWebRequest(request: IEwsHttpWebRequest): any; //{ throw new Error("Not implemented.");}
    }
    class ConversationAction {
        Action: ConversationActionType;
        ConversationId: ConversationId;
        ProcessRightAway: boolean;
        Categories: StringList;
        EnableAlwaysDelete: boolean;
        IsRead: boolean;
        SuppressReadReceipts: boolean;
        DeleteType: DeleteMode;
        Flag: Flag;
        ConversationLastSyncTime: Date;
        ContextFolderId: FolderIdWrapper;
        DestinationFolderId: FolderIdWrapper;
        RetentionPolicyType: RetentionType;
        RetentionPolicyTagId: System.Guid;
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ToJson(service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class ConversationIndexedItemView extends PagedView {
        OrderBy: OrderByCollection;
        Traversal: ConversationQueryTraversal;
        ViewFilter: ViewFilter;
        private orderBy: OrderByCollection;
        private traversal: ConversationQueryTraversal;
        private viewFilter: ViewFilter;
        AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        GetServiceObjectType(): ServiceObjectType; //{ throw new Error("Not implemented.");}
        GetViewJsonTypeName(): string; //{ throw new Error("Not implemented.");}
        GetViewXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalValidate(request: ServiceRequestBase): any; //{ throw new Error("Not implemented.");}
        InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteOrderByToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any; //{ throw new Error("Not implemented.");}
    }
    class CopyFolderRequest extends MoveCopyFolderRequest<MoveCopyFolderResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyFolderResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
    }
    class CopyItemRequest extends MoveCopyItemRequest<MoveCopyItemResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyItemResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
    }
    class CreateComplexPropertyDelegate<TComplexProperty> extends System.MulticastDelegate {
        BeginInvoke(callback: System.AsyncCallback, object: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        EndInvoke(result: System.IAsyncResult): TComplexProperty; //{ throw new Error("Not implemented.");}
        Invoke(): TComplexProperty; //{ throw new Error("Not implemented.");}
    }
    class CreateItemRequestBase<TServiceObject, TResponse> extends CreateRequest<TServiceObject, TResponse> {
        EmitTimeZoneHeader: boolean;
        MessageDisposition: MessageDisposition;
        SendInvitationsMode: SendInvitationsMode;
        Items: System.Collections.Generic.IEnumerable<TServiceObject>;
        private messageDisposition: MessageDisposition;
        private sendInvitationsMode: SendInvitationsMode;
        AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        GetObjectCollectionXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetParentFolderXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class CreateResponseObjectRequest extends CreateItemRequestBase<ServiceObject, CreateResponseObjectResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): CreateResponseObjectResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
    }
    class CustomXmlSerializationDelegate extends System.MulticastDelegate {
        BeginInvoke(writer: System.Xml.XmlWriter, callback: System.AsyncCallback, object: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        EndInvoke(result: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
        Invoke(writer: System.Xml.XmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class DelegateInformation {
        DelegateUserResponses: System.Collections.ObjectModel.Collection<DelegateUserResponse>;
        MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
        private delegateUserResponses: System.Collections.ObjectModel.Collection<DelegateUserResponse>;
        private meetingReqestsDeliveryScope: MeetingRequestsDeliveryScope;
    }
    class DiscoverySchemaChanges {
        static SearchMailboxesExtendedData: DiscoverySchemaChanges.SchemaChange;
        static SearchMailboxesAdditionalSearchScopes: DiscoverySchemaChanges.SchemaChange;
    }
    class DiscoverySearchConfiguration {
        SearchId: string;
        SearchQuery: string;
        SearchableMailboxes: SearchableMailbox[];
        InPlaceHoldIdentity: string;
        ManagedByOrganization: string;
        Language: string;
        LoadFromJson(jsonObject: JsonObject): DiscoverySearchConfiguration; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): DiscoverySearchConfiguration; //{ throw new Error("Not implemented.");}
    }
    class EwsEnumAttribute extends System.Attribute {
        SchemaName: string;
        private schemaName: string;
    }
    class EwsHttpWebRequest {
        private IEwsHttpWebRequest.Accept: string;
        private IEwsHttpWebRequest.AllowAutoRedirect: boolean;
        private IEwsHttpWebRequest.ClientCertificates: System.Security.Cryptography.X509Certificates.X509CertificateCollection;
        private IEwsHttpWebRequest.ContentType: string;
        private IEwsHttpWebRequest.CookieContainer: System.Net.CookieContainer;
        private IEwsHttpWebRequest.Credentials: System.Net.ICredentials;
        private IEwsHttpWebRequest.Headers: System.Net.WebHeaderCollection;
        private IEwsHttpWebRequest.Method: string;
        private IEwsHttpWebRequest.Proxy: System.Net.IWebProxy;
        private IEwsHttpWebRequest.PreAuthenticate: boolean;
        private IEwsHttpWebRequest.RequestUri: System.Uri;
        private IEwsHttpWebRequest.Timeout: number;
        private IEwsHttpWebRequest.UseDefaultCredentials: boolean;
        private IEwsHttpWebRequest.UserAgent: string;
        KeepAlive: boolean;
        ConnectionGroupName: string;
        private request: any;
    }
    class EwsHttpWebRequestFactory {
    }
    class EwsHttpWebResponse {
        private IEwsHttpWebResponse.ContentEncoding: string;
        private IEwsHttpWebResponse.ContentType: string;
        private IEwsHttpWebResponse.Headers: System.Net.WebHeaderCollection;
        private IEwsHttpWebResponse.ResponseUri: System.Uri;
        private IEwsHttpWebResponse.StatusCode: System.Net.HttpStatusCode;
        private IEwsHttpWebResponse.StatusDescription: string;
        private IEwsHttpWebResponse.ProtocolVersion: System.Version;
        private response: any;
    }
    class EwsServiceJsonReader {
        Service: ExchangeService;
        ReadServiceObjectsCollectionFromJson(jsonResponse: JsonObject, collectionJsonElementName: string, getObjectInstanceDelegate: GetObjectInstanceDelegate<T>, clearPropertyBag: boolean, requestedPropertySet: PropertySet, summaryPropertiesOnly: boolean): System.Collections.Generic.List<T>; //{ throw new Error("Not implemented.");}
    }
    class EwsServiceMultiResponseXmlReader extends EwsServiceXmlReader {
        Create(stream: System.IO.Stream, service: ExchangeService): EwsServiceMultiResponseXmlReader; //{ throw new Error("Not implemented.");}
        CreateXmlReader(stream: System.IO.Stream): any; //{ throw new Error("Not implemented.");}
        InitializeXmlReader(stream: System.IO.Stream): any; //{ throw new Error("Not implemented.");}
    }
    class EwsTraceListener {
        private writer: System.IO.TextWriter;
        Trace(traceType: string, traceMessage: string): any; //{ throw new Error("Not implemented.");}
    }
    class iiiiiiExchangeCredentials {
        NeedSignature: boolean;
        AdjustUrl(url: System.Uri): System.Uri; //{ throw new Error("Not implemented.");}
        EmitExtraSoapHeaderNamespaceAliases(writer: System.Xml.XmlWriter): any; //{ throw new Error("Not implemented.");}
        GetUriWithoutSuffix(url: System.Uri): string; //{ throw new Error("Not implemented.");}
        PreAuthenticate(): any; //{ throw new Error("Not implemented.");}
        PrepareWebRequest(request: IEwsHttpWebRequest): any; //{ throw new Error("Not implemented.");}
        SerializeExtraSoapHeaders(writer: System.Xml.XmlWriter, webMethodName: string): any; //{ throw new Error("Not implemented.");}
        SerializeWSSecurityHeaders(writer: System.Xml.XmlWriter): any; //{ throw new Error("Not implemented.");}
        Sign(memoryStream: any): any; //{ throw new Error("Not implemented.");}
    }
    class ExchangeResourceManager extends System.Resources.ResourceManager {
        BaseName: string;
        AssemblyName: string;
        private static resourceManagers: any;
        private static lockObject: any;
        GetResourceManager(baseName: string, assembly: System.Reflection.Assembly): ExchangeResourceManager; //{ throw new Error("Not implemented.");}
        GetString(name: string): string; //{ throw new Error("Not implemented.");}
        GetString(name: string, culture: System.Globalization.CultureInfo): string; //{ throw new Error("Not implemented.");}
    }
    class ExpandGroupResults {
        Count: number;
        IncludesAllMembers: boolean;
        Members: System.Collections.ObjectModel.Collection<EmailAddress>;
        private includesAllMembers: boolean;
        private members: System.Collections.ObjectModel.Collection<EmailAddress>;
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
    }
    class ExtendedAttribute {
        Name: string;
        Value: string;
    }
    class ExtendedAttributes extends System.Collections.Generic.List<ExtendedAttribute> {
    }
    class FailedSearchMailbox {
        Mailbox: string;
        ErrorCode: number;
        ErrorMessage: string;
        IsArchive: boolean;
        LoadFailedMailboxesXml(rootXmlNamespace: XmlNamespace, reader: EwsServiceXmlReader): FailedSearchMailbox[]; //{ throw new Error("Not implemented.");}
    }
    class FindConversationResults {
        Conversations: System.Collections.ObjectModel.Collection<Conversation>;
        HighlightTerms: System.Collections.ObjectModel.Collection<HighlightTerm>;
        TotalCount: number;
        IndexedOffset: number;
    }
    class FindFolderRequest extends FindRequest<FindFolderResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): FindFolderResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
    }
    class FindFoldersResults {
        TotalCount: number;
        NextPageOffset: number;
        MoreAvailable: boolean;
        Folders: System.Collections.ObjectModel.Collection<Folder>;
        private totalCount: number;
        private nextPageOffset: number;
        private moreAvailable: boolean;
        private folders: System.Collections.ObjectModel.Collection<Folder>;
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
    }
    class FindItemRequest<TItem> extends FindRequest<TResponse> {
        GroupBy: Grouping;
        private groupBy: Grouping;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): FindItemResponse<TItem>; //{ throw new Error("Not implemented.");}
        GetGroupBy(): Grouping; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
    }
    class FindItemsResults<TItem> {
        TotalCount: number;
        NextPageOffset: number;
        MoreAvailable: boolean;
        Items: System.Collections.ObjectModel.Collection<TItem>;
        HighlightTerms: System.Collections.ObjectModel.Collection<HighlightTerm>;
        private totalCount: number;
        private nextPageOffset: number;
        private moreAvailable: boolean;
        private items: System.Collections.ObjectModel.Collection<TItem>;
        private highlightTerms: System.Collections.ObjectModel.Collection<HighlightTerm>;
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
    }
    class FolderChange extends Change {
        Folder: Folder;
        FolderId: FolderId;
        CreateId(): ServiceId; //{ throw new Error("Not implemented.");}
    }
    class FolderEvent extends NotificationEvent {
        FolderId: FolderId;
        OldFolderId: FolderId;
        UnreadCount: number;
        private folderId: FolderId;
        private oldFolderId: FolderId;
        private unreadCount: number;
        InternalLoadFromXml(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonEvent: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
    }
    
    class FolderView extends PagedView {
        Traversal: FolderTraversal;
        private traversal: FolderTraversal;
        AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        GetServiceObjectType(): ServiceObjectType; //{ throw new Error("Not implemented.");}
        GetViewJsonTypeName(): string; //{ throw new Error("Not implemented.");}
        GetViewXmlElementName(): string; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    
    class GetDelegateRequest extends DelegateManagementRequestBase<GetDelegateResponse> {
        UserIds: System.Collections.Generic.List<UserId>;
        IncludePermissions: boolean;
        private userIds: System.Collections.Generic.List<UserId>;
        private includePermissions: boolean;
        CreateResponse(): GetDelegateResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class GetDelegateResponse extends DelegateManagementResponse {
        MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
        private meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
    }
    class GetEventsResults {
        static XmlElementNameToEventTypeMap: System.Collections.Generic.Dictionary<string, EventType>;
        SubscriptionId: string;
        PreviousWatermark: string;
        NewWatermark: string;
        MoreEventsAvailable: boolean;
        FolderEvents: System.Collections.Generic.IEnumerable<FolderEvent>;
        ItemEvents: System.Collections.Generic.IEnumerable<ItemEvent>;
        AllEvents: System.Collections.ObjectModel.Collection<NotificationEvent>;
        private newWatermark: string;
        private subscriptionId: string;
        private previousWatermark: string;
        private moreEventsAvailable: boolean;
        private events: System.Collections.ObjectModel.Collection<NotificationEvent>;
        private static xmlElementNameToEventTypeMap: LazyMember<T>;
        LoadEventsFromJson(jsonEventsArray: any, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        LoadFromJson(eventsResponse: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        LoadNotificationEventFromXml(reader: EwsServiceXmlReader, eventElementName: string, eventType: EventType): any; //{ throw new Error("Not implemented.");}
    }
    class GetNonIndexableItemDetailsParameters extends NonIndexableItemParameters {
        PageSize: number;
        PageItemReference: string;
        PageDirection: SearchPageDirection;
    }
    class GetNonIndexableItemStatisticsParameters extends NonIndexableItemParameters {
    }
    
    class GetPropertyDefinitionCallback extends System.MulticastDelegate {
        BeginInvoke(version: ExchangeVersion, callback: System.AsyncCallback, object: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        EndInvoke(result: System.IAsyncResult): PropertyDefinition; //{ throw new Error("Not implemented.");}
        Invoke(version: ExchangeVersion): PropertyDefinition; //{ throw new Error("Not implemented.");}
    }
    class GetStreamingEventsRequest extends HangingServiceRequestBase {
        HeartbeatFrequency: number;
        private subscriptionIds: System.Collections.Generic.IEnumerable<string>;
        private connectionTimeout: number;
        private static heartbeatFrequency: number;
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        ParseResponse(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class GetStreamingEventsResults {
        Notifications: System.Collections.ObjectModel.Collection<GetStreamingEventsResults.NotificationGroup>;
        private events: System.Collections.ObjectModel.Collection<GetStreamingEventsResults.NotificationGroup>;
        LoadFromXml(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        LoadNotificationEventFromXml(reader: EwsServiceXmlReader, eventElementName: string, eventType: EventType, notifications: GetStreamingEventsResults.NotificationGroup): any; //{ throw new Error("Not implemented.");}
    }
    class GetUserAvailabilityResults {
        SuggestionsResponse: SuggestionsResponse;
        AttendeesAvailability: ServiceResponseCollection<AttendeeAvailability>;
        Suggestions: System.Collections.ObjectModel.Collection<Suggestion>;
        private attendeesAvailability: ServiceResponseCollection<AttendeeAvailability>;
        private suggestionsResponse: SuggestionsResponse;
    }
    class GroupedFindItemsResults<TItem> {
        TotalCount: number;
        NextPageOffset: number;
        MoreAvailable: boolean;
        ItemGroups: System.Collections.ObjectModel.Collection<ItemGroup<TItem>>;
        private totalCount: number;
        private nextPageOffset: number;
        private moreAvailable: boolean;
        private itemGroups: System.Collections.ObjectModel.Collection<ItemGroup<TItem>>;
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
    }
    class Grouping {
        SortDirection: SortDirection;
        GroupOn: PropertyDefinitionBase;
        AggregateOn: PropertyDefinitionBase;
        AggregateType: AggregateType;
        private sortDirection: SortDirection;
        private groupOn: PropertyDefinitionBase;
        private aggregateOn: PropertyDefinitionBase;
        private aggregateType: AggregateType;
        InternalValidate(): any; //{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class HangingRequestDisconnectEventArgs extends System.EventArgs {
        Reason: HangingRequestDisconnectReason;
        Exception: System.Exception;
    }
    class HangingServiceRequestBase extends ServiceRequestBase {
        IsConnected: boolean;
        private responseHandler: HangingServiceRequestBase.HandleResponseObject;
        private response: IEwsHttpWebResponse;
        private request: IEwsHttpWebRequest;
        heartbeatFrequencyMilliseconds: number;
        private lockObject: any;
        private OnDisconnect: HangingServiceRequestBase.HangingRequestDisconnectHandler;
        static LogAllWireBytes: boolean;
        Disconnect(): any; //{ throw new Error("Not implemented.");}
        Disconnect(reason: HangingRequestDisconnectReason, exception: System.Exception): any; //{ throw new Error("Not implemented.");}
        InternalExecute(): any; //{ throw new Error("Not implemented.");}
        InternalOnConnect(): any; //{ throw new Error("Not implemented.");}
        InternalOnDisconnect(reason: HangingRequestDisconnectReason, exception: System.Exception): any; //{ throw new Error("Not implemented.");}
        ParseResponses(state: any): any; //{ throw new Error("Not implemented.");}
        ReadPreamble(ewsXmlReader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
    }
    class HangingTraceStream extends System.IO.Stream {
        CanRead: boolean;
        CanSeek: boolean;
        CanWrite: boolean;
        Length: number;
        Position: number;
        private underlyingStream: System.IO.Stream;
        private service: ExchangeService;
        private responseCopy: any;
        Flush(): any; //{ throw new Error("Not implemented.");}
        Read(buffer: System.Byte[], offset: number, count: number): number; //{ throw new Error("Not implemented.");}
        Seek(offset: number, origin: System.IO.SeekOrigin): number; //{ throw new Error("Not implemented.");}
        SetLength(value: number): any; //{ throw new Error("Not implemented.");}
        SetResponseCopy(responseCopy: any): any; //{ throw new Error("Not implemented.");}
        Write(buffer: System.Byte[], offset: number, count: number): any; //{ throw new Error("Not implemented.");}
    }
    interface ICalendarActionProvider {
        Accept(sendResponse: boolean): CalendarActionResults;
        AcceptTentatively(sendResponse: boolean): CalendarActionResults;
        CreateAcceptMessage(tentative: boolean): AcceptMeetingInvitationMessage;
        CreateDeclineMessage(): DeclineMeetingInvitationMessage;
        Decline(sendResponse: boolean): CalendarActionResults;
    }
    interface ICustomUpdateSerializer {
        WriteDeleteUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, updates: System.Collections.Generic.List<T>): boolean;
        WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean;
        WriteSetUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition, updates: System.Collections.Generic.List<T>): boolean;
        WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition): boolean;
    }
    interface IDiscoveryVersionable {
        ServerVersion: number;
    }
    interface IFileAttachmentContentHandler {
        GetOutputStream(attachmentId: string): System.IO.Stream;
    }
    interface IJsonCollectionDeserializer {
        CreateFromJsonCollection(jsonCollection: any, service: ExchangeService): any;
        UpdateFromJsonCollection(jsonCollection: any, service: ExchangeService): any;
    }
    interface IJsonSerializable {
        ToJson(service: ExchangeService): any;
    }
    interface ILocalizedString {
        LocalizedString: LocalizedString;
    }
    interface IOwnedProperty {
        Owner: ServiceObject;
    }
    interface ISearchStringProvider {
        GetSearchString(): string;
    }
    interface ISelfValidate {
        Validate(): any;
    }
    class ItemChange extends Change {
        Item: Item;
        IsRead: boolean;
        ItemId: ItemId;
        private isRead: boolean;
        CreateId(): ServiceId; //{ throw new Error("Not implemented.");}
    }
    class ItemEvent extends NotificationEvent {
        ItemId: ItemId;
        OldItemId: ItemId;
        private itemId: ItemId;
        private oldItemId: ItemId;
        InternalLoadFromXml(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonEvent: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
    }
    class ItemGroup<TItem> {
        GroupIndex: string;
        Items: System.Collections.ObjectModel.Collection<TItem>;
    }
    class ItemIdWrapper extends AbstractItemIdWrapper {
        private itemId: ItemId;
        IternalToJson(service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class ItemIdWrapperList {
        Count: number;
        Item: Item;
        private itemIds: System.Collections.Generic.List<T>;
        Add(item: Item): any; //{ throw new Error("Not implemented.");}
        Add(itemId: ItemId): any; //{ throw new Error("Not implemented.");}
        AddRange(items: System.Collections.Generic.IEnumerable<Item>): any; //{ throw new Error("Not implemented.");}
        AddRange(itemIds: System.Collections.Generic.IEnumerable<T>): any; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        InternalToJson(service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter, ewsNamesapce: XmlNamespace, xmlElementName: string): any; //{ throw new Error("Not implemented.");}
    }
    class ItemView extends PagedView {
        Traversal: ItemTraversal;
        OrderBy: OrderByCollection;
        private traversal: ItemTraversal;
        private orderBy: OrderByCollection;
        AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        GetServiceObjectType(): ServiceObjectType; //{ throw new Error("Not implemented.");}
        GetViewJsonTypeName(): string; //{ throw new Error("Not implemented.");}
        GetViewXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalValidate(request: ServiceRequestBase): any; //{ throw new Error("Not implemented.");}
        InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteOrderByToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class ItemWrapper extends AbstractItemIdWrapper {
        private item: Item;
        GetItem(): Item; //{ throw new Error("Not implemented.");}
        IternalToJson(service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    interface ITraceListener {
        Trace(traceType: string, traceMessage: string): any;
    }
    class JsonNames {
    }
    class JsonObject extends System.Collections.Generic.Dictionary<string, any> {
        Add(name: string, value: number): any; //{ throw new Error("Not implemented.");}
        Add(name: string, value: JsonObject): any; //{ throw new Error("Not implemented.");}
        Add(name: string, value: string): any; //{ throw new Error("Not implemented.");}
        Add(name: string, value: any): any; //{ throw new Error("Not implemented.");}
        Add(name: string, value: boolean): any; //{ throw new Error("Not implemented.");}
        Add(name: string, value: number): any; //{ throw new Error("Not implemented.");}
        Add(name: string, value: number): any; //{ throw new Error("Not implemented.");}
        Add(name: string, value: number): any; //{ throw new Error("Not implemented.");}
        Add(name: string, value: any): any; //{ throw new Error("Not implemented.");}
        Add(name: string, value: System.Collections.Generic.IEnumerable<any>): any; //{ throw new Error("Not implemented.");}
        AddBase64(key: string, buffer: System.Byte[]): any; //{ throw new Error("Not implemented.");}
        AddBase64(key: string, stream: System.IO.Stream): any; //{ throw new Error("Not implemented.");}
        AddBase64(key: string, buffer: System.Byte[], offset: number, count: number): any; //{ throw new Error("Not implemented.");}
        AddTypeParameter(typeName: string): any; //{ throw new Error("Not implemented.");}
        HasTypeProperty(): boolean; //{ throw new Error("Not implemented.");}
        InternalAdd(name: string, value: any): any; //{ throw new Error("Not implemented.");}
        ReadAsArray(key: string): any; //{ throw new Error("Not implemented.");}
        ReadAsBase64Content(key: string): System.Byte[]; //{ throw new Error("Not implemented.");}
        ReadAsBase64Content(key: string, stream: System.IO.Stream): any; //{ throw new Error("Not implemented.");}
        ReadAsBool(key: string): boolean; //{ throw new Error("Not implemented.");}
        ReadAsDouble(key: string): number; //{ throw new Error("Not implemented.");}
        ReadAsInt(key: string): number; //{ throw new Error("Not implemented.");}
        ReadAsJsonObject(key: string): JsonObject; //{ throw new Error("Not implemented.");}
        ReadAsString(key: string): string; //{ throw new Error("Not implemented.");}
        ReadEnumValue(key: string): any; //{ throw new Error("Not implemented.");}
        ReadTypeString(): string; //{ throw new Error("Not implemented.");}
        SerializeToJson(stream: System.IO.Stream): any; //{ throw new Error("Not implemented.");}
        SerializeToJson(stream: System.IO.Stream, prettyPrint: boolean): any; //{ throw new Error("Not implemented.");}
        ValidateObject(entry: any): any; //{ throw new Error("Not implemented.");}
        WriteKeyValuePair(writer: JsonWriter, key: string, value: any): any; //{ throw new Error("Not implemented.");}
        WriteValue(writer: JsonWriter, value: any): any; //{ throw new Error("Not implemented.");}
    }
    class JsonParser {
        private tokenizer: JsonTokenizer;
        Parse(): JsonObject; //{ throw new Error("Not implemented.");}
        ParseArray(): any; //{ throw new Error("Not implemented.");}
        ParseKeyValuePair(jsonObject: JsonObject): any; //{ throw new Error("Not implemented.");}
        ParseNumber(valueToken: string): any; //{ throw new Error("Not implemented.");}
        ParseObject(): JsonObject; //{ throw new Error("Not implemented.");}
        ParseValue(): any; //{ throw new Error("Not implemented.");}
        ReadAndValidateToken(token: any, expectedTokenTypes: any): JsonTokenType; //{ throw new Error("Not implemented.");}
        UnescapeString(value: string): string; //{ throw new Error("Not implemented.");}
    }
    class JsonTokenizer {
        private currentMatch: any;
        private nextTokenType: JsonTokenType;
        private nextToken: string;
        private nextTokenPeeked: boolean;
        private static jsonStringRegEx: any;
        private static jsonNumberRegEx: any;
        private static jsonBooleanRegEx: any;
        private static jsonNullRegEx: any;
        private static jsonOpenObjectRegEx: any;
        private static jsonCloseObjectRegEx: any;
        private static jsonOpenArrayRegEx: any;
        private static jsonCloseArrayRegEx: any;
        private static jsonColonRegEx: any;
        private static jsonCommaRegEx: any;
        private static whitespaceRegEx: any;
        private static tokenDictionary: System.Collections.Generic.Dictionary<TKey, TValue>;
        private static fullTokenizerRegex: any;
        AdvanceRegExMatch(): any; //{ throw new Error("Not implemented.");}
        NextToken(token: any): JsonTokenType; //{ throw new Error("Not implemented.");}
        Peek(): JsonTokenType; //{ throw new Error("Not implemented.");}
    }
    class JsonWriter extends System.IO.TextWriter {
        Encoding: System.Text.Encoding;
        ShouldCloseStream: boolean;
        private outStream: System.IO.Stream;
        private shouldCloseStream: boolean;
        private prettyPrint: boolean;
        private writingStringValue: boolean;
        private smallBuffer: System.Byte[];
        private singleCharBuffer: any;
        private closures: any;
        private closureHasMembers: any;
        AddingValue(): any; //{ throw new Error("Not implemented.");}
        Dispose(disposing: boolean): any; //{ throw new Error("Not implemented.");}
        PopClosure(): any; //{ throw new Error("Not implemented.");}
        PushArrayClosure(): any; //{ throw new Error("Not implemented.");}
        PushObjectClosure(): any; //{ throw new Error("Not implemented.");}
        Write(value: string): any; //{ throw new Error("Not implemented.");}
        WriteIndentation(): any; //{ throw new Error("Not implemented.");}
        WriteInternal(value: string): any; //{ throw new Error("Not implemented.");}
        WriteKey(key: string): any; //{ throw new Error("Not implemented.");}
        WriteNullValue(): any; //{ throw new Error("Not implemented.");}
        WriteQuote(): any; //{ throw new Error("Not implemented.");}
        WriteValue(value: number): any; //{ throw new Error("Not implemented.");}
        WriteValue(value: number): any; //{ throw new Error("Not implemented.");}
        WriteValue(value: number): any; //{ throw new Error("Not implemented.");}
        WriteValue(value: any): any; //{ throw new Error("Not implemented.");}
        WriteValue(value: boolean): any; //{ throw new Error("Not implemented.");}
        WriteValue(value: string): any; //{ throw new Error("Not implemented.");}
        WriteValue(value: Date): any; //{ throw new Error("Not implemented.");}
        WriteValue(value: number): any; //{ throw new Error("Not implemented.");}
    }
    class KeywordStatisticsSearchResult {
        Keyword: string;
        ItemHits: number;
        Size: number;
    }
    
    class LocalizedString {
        private ILocalizedString.LocalizedString: LocalizedString;
        IsEmpty: boolean;
        BaseId: number;
        private Id: string;
        private Inserts: any;
        private ResourceManager: ExchangeResourceManager;
        static Empty: LocalizedString;
        Equals(obj: any): boolean; //{ throw new Error("Not implemented.");}
        Equals(obj: LocalizedString): boolean; //{ throw new Error("Not implemented.");}
        GetHashCode(): number; //{ throw new Error("Not implemented.");}
        Join(separator: any, value: any): LocalizedString; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
        ToString(formatProvider: System.IFormatProvider): string; //{ throw new Error("Not implemented.");}
        TranslateObject(badObject: any, formatProvider: System.IFormatProvider): any; //{ throw new Error("Not implemented.");}
    }
    class MailboxHoldResult {
        HoldId: string;
        Query: string;
        Statuses: MailboxHoldStatus[];
        LoadFromJson(jsonObject: JsonObject): MailboxHoldResult; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): MailboxHoldResult; //{ throw new Error("Not implemented.");}
    }
    class MailboxHoldStatus {
        Mailbox: string;
        Status: HoldStatus;
        AdditionalInfo: string;
    }
    class MailboxQuery {
        Query: string;
        MailboxSearchScopes: MailboxSearchScope[];
    }
    class MailboxSearchScope {
        Mailbox: string;
        SearchScope: MailboxSearchLocation;
        SearchScopeType: MailboxSearchScopeType;
        ExtendedAttributes: ExtendedAttributes;
        private searchScope: MailboxSearchLocation;
        private scopeType: MailboxSearchScopeType;
    }
    class MailboxStatisticsItem {
        MailboxId: string;
        DisplayName: string;
        ItemCount: number;
        Size: number;
        LoadFromXml(reader: EwsServiceXmlReader): MailboxStatisticsItem; //{ throw new Error("Not implemented.");}
    }
    class MapiTypeConverter {
        static MapiTypeConverterMap: System.Collections.Generic.Dictionary<MapiPropertyType, MapiTypeConverterMapEntry>;
        private static mapiTypeConverterMap: LazyMember<T>;
        ChangeType(mapiType: MapiPropertyType, value: any): any; //{ throw new Error("Not implemented.");}
        ConvertToString(mapiPropType: MapiPropertyType, value: any): string; //{ throw new Error("Not implemented.");}
        ConvertToValue(mapiPropType: MapiPropertyType, stringValue: string): any; //{ throw new Error("Not implemented.");}
        ConvertToValue(mapiPropType: MapiPropertyType, strings: System.Collections.Generic.IEnumerable<string>): System.Array; //{ throw new Error("Not implemented.");}
        IsArrayType(mapiType: MapiPropertyType): boolean; //{ throw new Error("Not implemented.");}
        ParseMapiIntegerValue(s: string): any; //{ throw new Error("Not implemented.");}
    }
    class MapiTypeConverterMapEntry {
        Parse: System.Func<string, any>;
        ConvertToString: System.Func<any, string>;
        Type: System.Type;
        IsArray: boolean;
        DefaultValue: any;
        private static defaultValueMap: LazyMember<T>;
        ChangeType(value: any): any; //{ throw new Error("Not implemented.");}
        ConvertToValue(stringValue: string): any; //{ throw new Error("Not implemented.");}
        ConvertToValueOrDefault(stringValue: string): any; //{ throw new Error("Not implemented.");}
        ValidateValueAsArray(value: any): any; //{ throw new Error("Not implemented.");}
    }
    class MobilePhone {
        Name: string;
        PhoneNumber: string;
        private name: string;
        private phoneNumber: string;
    }
    class MoveCopyFolderRequest<TResponse> extends MoveCopyRequest<TServiceObject, TResponse> {
        FolderIds: FolderIdWrapperList;
        private folderIds: FolderIdWrapperList;
        AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteIdsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class MoveCopyItemRequest<TResponse> extends MoveCopyRequest<TServiceObject, TResponse> {
        ItemIds: ItemIdWrapperList;
        ReturnNewItemIds: boolean;
        private itemIds: ItemIdWrapperList;
        AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteIdsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class MoveFolderRequest extends MoveCopyFolderRequest<MoveCopyFolderResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyFolderResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
    }
    class MoveItemRequest extends MoveCopyItemRequest<MoveCopyItemResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyItemResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
    }
    class NameResolution {
        Mailbox: EmailAddress;
        Contact: Contact;
        private owner: NameResolutionCollection;
        private mailbox: EmailAddress;
        private contact: Contact;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
    }
    class NameResolutionCollection {
        Session: ExchangeService;
        Count: number;
        IncludesAllResolutions: boolean;
        Item: NameResolution;
        private service: ExchangeService;
        private includesAllResolutions: boolean;
        private items: System.Collections.Generic.List<T>;
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
    }
    class NonIndexableItem {
        ItemId: ItemId;
        ErrorCode: ItemIndexError;
        ErrorDescription: string;
        IsPartiallyIndexed: boolean;
        IsPermanentFailure: boolean;
        AttemptCount: number;
        LastAttemptTime: Date;
        AdditionalInfo: string;
        SortValue: string;
        LoadFromXml(reader: EwsServiceXmlReader): NonIndexableItem; //{ throw new Error("Not implemented.");}
    }
    class NonIndexableItemDetailsResult {
        Items: NonIndexableItem[];
        FailedMailboxes: FailedSearchMailbox[];
        LoadFromJson(jsonObject: JsonObject): NonIndexableItemDetailsResult; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): NonIndexableItemDetailsResult; //{ throw new Error("Not implemented.");}
    }
    class NonIndexableItemParameters {
        Mailboxes: System.String[];
        SearchArchiveOnly: boolean;
    }
    class NonIndexableItemStatistic {
        Mailbox: string;
        ItemCount: number;
        ErrorMessage: string;
        LoadFromXml(reader: EwsServiceXmlReader): System.Collections.Generic.List<NonIndexableItemStatistic>; //{ throw new Error("Not implemented.");}
    }
    class NotificationEvent {
        EventType: EventType;
        TimeStamp: Date;
        ParentFolderId: FolderId;
        OldParentFolderId: FolderId;
        private eventType: EventType;
        private timestamp: Date;
        private parentFolderId: FolderId;
        private oldParentFolderId: FolderId;
        InternalLoadFromXml(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonEvent: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): any; //{ throw new Error("Not implemented.");}
    }
    class NotificationEventArgs extends System.EventArgs {
        Subscription: StreamingSubscription;
        Events: System.Collections.Generic.IEnumerable<NotificationEvent>;
    }
    class OAuthCredentials extends ExchangeCredentials {
        private token: string;
        private credentials: System.Net.ICredentials;
        private static validTokenPattern: any;
        PrepareWebRequest(request: IEwsHttpWebRequest): any; //{ throw new Error("Not implemented.");}
    }
    class OofReply {
        Culture: string;
        Message: string;
        private culture: string;
        private message: string;
        InternalToJson(service: ExchangeService): JsonObject; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonObject: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): any; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
        WriteEmptyReplyToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any; //{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any; //{ throw new Error("Not implemented.");}
    }
    class OrderByCollection {
        Count: number;
        Item: System.Collections.Generic.KeyValuePair<PropertyDefinitionBase, SortDirection>;
        private propDefSortOrderPairList: System.Collections.Generic.List<T>;
        Add(propertyDefinition: PropertyDefinitionBase, sortDirection: SortDirection): any; //{ throw new Error("Not implemented.");}
        Clear(): any; //{ throw new Error("Not implemented.");}
        Contains(propertyDefinition: PropertyDefinitionBase): boolean; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        Remove(propertyDefinition: PropertyDefinitionBase): boolean; //{ throw new Error("Not implemented.");}
        RemoveAt(index: number): any; //{ throw new Error("Not implemented.");}
        TryGetValue(propertyDefinition: PropertyDefinitionBase, sortDirection: any): boolean; //{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any; //{ throw new Error("Not implemented.");}
    }
    class PagedView extends ViewBase {
        PageSize: number;
        OffsetBasePoint: OffsetBasePoint;
        Offset: number;
        private pageSize: number;
        private offsetBasePoint: OffsetBasePoint;
        private offset: number;
        GetMaxEntriesReturned(): number; //{ throw new Error("Not implemented.");}
        InternalValidate(request: ServiceRequestBase): any; //{ throw new Error("Not implemented.");}
        InternalWritePagingToJson(jsonView: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any; //{ throw new Error("Not implemented.");}
        InternalWriteViewToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any; //{ throw new Error("Not implemented.");}
        WriteOrderByToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class PartnerTokenCredentials extends WSSecurityBasedCredentials {
        NeedSignature: boolean;
        private keyInfoNode: any;
        AdjustUrl(url: System.Uri): System.Uri; //{ throw new Error("Not implemented.");}
        PrepareWebRequest(request: IEwsHttpWebRequest): any; //{ throw new Error("Not implemented.");}
        Sign(memoryStream: any): any; //{ throw new Error("Not implemented.");}
    }
    class PreviewItemMailbox {
        MailboxId: string;
        PrimarySmtpAddress: string;
    }
    class PreviewItemResponseShape {
        BaseShape: PreviewItemBaseShape;
        AdditionalProperties: ExtendedPropertyDefinition[];
    }
    class PropertyBagChangedDelegate extends System.MulticastDelegate {
        BeginInvoke(callback: System.AsyncCallback, object: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        EndInvoke(result: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
        Invoke(): any; //{ throw new Error("Not implemented.");}
    }
    class PullSubscription extends SubscriptionBase {
        MoreEventsAvailable: boolean;
        private moreEventsAvailable: boolean;
        BeginGetEvents(callback: System.AsyncCallback, state: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        BeginUnsubscribe(callback: System.AsyncCallback, state: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        EndGetEvents(asyncResult: System.IAsyncResult): GetEventsResults; //{ throw new Error("Not implemented.");}
        EndUnsubscribe(asyncResult: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
        GetEvents(): GetEventsResults; //{ throw new Error("Not implemented.");}
        Unsubscribe(): any; //{ throw new Error("Not implemented.");}
    }
    class PushSubscription extends SubscriptionBase {
    }
    class RelativeDayOfMonthTransition extends AbsoluteMonthTransition {
        DayOfTheWeek: DayOfTheWeek;
        WeekIndex: number;
        private dayOfTheWeek: DayOfTheWeek;
        private weekIndex: number;
        CreateTransitionTime(): any; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InitializeFromTransitionTime(transitionTime: any): any; //{ throw new Error("Not implemented.");}
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class RemoveDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {
        UserIds: System.Collections.Generic.List<UserId>;
        private userIds: System.Collections.Generic.List<UserId>;
        CreateResponse(): DelegateManagementResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class RequiredServerVersionAttribute extends System.Attribute {
        Version: ExchangeVersion;
        private version: ExchangeVersion;
    }
    class ResponseHeadersCapturedHandler extends System.MulticastDelegate {
        BeginInvoke(responseHeaders: System.Net.WebHeaderCollection, callback: System.AsyncCallback, object: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        EndInvoke(result: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
        Invoke(responseHeaders: System.Net.WebHeaderCollection): any; //{ throw new Error("Not implemented.");}
    }
    class RetentionPolicyTag {
        DisplayName: string;
        RetentionId: System.Guid;
        RetentionPeriod: number;
        Type: ElcFolderType;
        RetentionAction: RetentionActionType;
        Description: string;
        IsVisible: boolean;
        OptedInto: boolean;
        IsArchive: boolean;
        LoadFromJson(jsonObject: JsonObject): RetentionPolicyTag; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): RetentionPolicyTag; //{ throw new Error("Not implemented.");}
    }
    class SafeXmlDocument extends System.Xml.XmlDocument {
        private settings: System.Xml.XmlReaderSettings;
        Load(inStream: System.IO.Stream): any; //{ throw new Error("Not implemented.");}
        Load(filename: string): any; //{ throw new Error("Not implemented.");}
        Load(txtReader: any): any; //{ throw new Error("Not implemented.");}
        Load(reader: any): any; //{ throw new Error("Not implemented.");}
        LoadXml(xml: string): any; //{ throw new Error("Not implemented.");}
    }
    class SafeXmlFactory {
        private static defaultSettings: System.Xml.XmlReaderSettings;
        CreateSafeXmlTextReader(stream: System.IO.Stream): any; //{ throw new Error("Not implemented.");}
        CreateSafeXmlTextReader(xmlFragment: string, fragType: System.Xml.XmlNodeType, context: any): any; //{ throw new Error("Not implemented.");}
        CreateSafeXmlTextReader(url: string, input: any, nt: System.Xml.XmlNameTable): any; //{ throw new Error("Not implemented.");}
        CreateSafeXmlTextReader(url: string, input: System.IO.Stream, nt: System.Xml.XmlNameTable): any; //{ throw new Error("Not implemented.");}
        CreateSafeXmlTextReader(input: any, nt: System.Xml.XmlNameTable): any; //{ throw new Error("Not implemented.");}
        CreateSafeXmlTextReader(url: string, nt: System.Xml.XmlNameTable): any; //{ throw new Error("Not implemented.");}
        CreateSafeXmlTextReader(xmlFragment: System.IO.Stream, fragType: System.Xml.XmlNodeType, context: any): any; //{ throw new Error("Not implemented.");}
        CreateSafeXmlTextReader(url: string, input: System.IO.Stream): any; //{ throw new Error("Not implemented.");}
        CreateSafeXmlTextReader(input: System.IO.Stream, nt: System.Xml.XmlNameTable): any; //{ throw new Error("Not implemented.");}
        CreateSafeXmlTextReader(input: any): any; //{ throw new Error("Not implemented.");}
        CreateSafeXmlTextReader(url: string): any; //{ throw new Error("Not implemented.");}
        CreateSafeXmlTextReader(url: string, input: any): any; //{ throw new Error("Not implemented.");}
        CreateXPathDocument(uri: string, space: System.Xml.XmlSpace): any; //{ throw new Error("Not implemented.");}
        CreateXPathDocument(stream: System.IO.Stream): any; //{ throw new Error("Not implemented.");}
        CreateXPathDocument(uri: string): any; //{ throw new Error("Not implemented.");}
        CreateXPathDocument(textReader: any): any; //{ throw new Error("Not implemented.");}
        CreateXPathDocument(reader: any): any; //{ throw new Error("Not implemented.");}
        CreateXPathDocument(reader: any, space: System.Xml.XmlSpace): any; //{ throw new Error("Not implemented.");}
    }
    class SafeXmlSchema extends System.Xml.Schema.XmlSchema {
        private static defaultSettings: System.Xml.XmlReaderSettings;
        Read(stream: System.IO.Stream, validationEventHandler: any): System.Xml.Schema.XmlSchema; //{ throw new Error("Not implemented.");}
        Read(reader: any, validationEventHandler: any): System.Xml.Schema.XmlSchema; //{ throw new Error("Not implemented.");}
        Read(reader: any, validationEventHandler: any): System.Xml.Schema.XmlSchema; //{ throw new Error("Not implemented.");}
    }
    class SchemaAttribute extends System.Attribute {
    }
    class SearchableMailbox {
        Guid: System.Guid;
        SmtpAddress: string;
        IsExternalMailbox: boolean;
        ExternalEmailAddress: string;
        DisplayName: string;
        IsMembershipGroup: boolean;
        ReferenceId: string;
        LoadFromJson(jsonObject: JsonObject): SearchableMailbox; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): SearchableMailbox; //{ throw new Error("Not implemented.");}
    }
    class SearchMailboxesParameters {
        SearchQueries: MailboxQuery[];
        ResultType: SearchResultType;
        SortBy: string;
        SortOrder: SortDirection;
        PerformDeduplication: boolean;
        PageSize: number;
        PageDirection: SearchPageDirection;
        PageItemReference: string;
        PreviewItemResponseShape: PreviewItemResponseShape;
        Language: string;
    }
    class SearchMailboxesResult {
        SearchQueries: MailboxQuery[];
        ResultType: SearchResultType;
        ItemCount: number;
        Size: number;
        PageItemCount: number;
        PageItemSize: number;
        KeywordStats: KeywordStatisticsSearchResult[];
        PreviewItems: SearchPreviewItem[];
        FailedMailboxes: FailedSearchMailbox[];
        Refiners: SearchRefinerItem[];
        MailboxStats: MailboxStatisticsItem[];
        GetRecipients(reader: EwsServiceXmlReader, elementName: string): System.String[]; //{ throw new Error("Not implemented.");}
        LoadExtendedPropertiesXml(reader: EwsServiceXmlReader): ExtendedPropertyCollection; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonObject: JsonObject): SearchMailboxesResult; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): SearchMailboxesResult; //{ throw new Error("Not implemented.");}
        LoadKeywordStatsXml(reader: EwsServiceXmlReader): KeywordStatisticsSearchResult[]; //{ throw new Error("Not implemented.");}
        LoadPreviewItemsXml(reader: EwsServiceXmlReader): SearchPreviewItem[]; //{ throw new Error("Not implemented.");}
    }
    class SearchPreviewItem {
        Id: ItemId;
        Mailbox: PreviewItemMailbox;
        ParentId: ItemId;
        ItemClass: string;
        UniqueHash: string;
        SortValue: string;
        OwaLink: string;
        Sender: string;
        ToRecipients: System.String[];
        CcRecipients: System.String[];
        BccRecipients: System.String[];
        CreatedTime: Date;
        ReceivedTime: Date;
        SentTime: Date;
        Subject: string;
        Size: number;
        Preview: string;
        Importance: Importance;
        Read: boolean;
        HasAttachment: boolean;
        ExtendedProperties: ExtendedPropertyCollection;
    }
    class SearchRefinerItem {
        Name: string;
        Value: string;
        Count: number;
        Token: string;
        LoadFromXml(reader: EwsServiceXmlReader): SearchRefinerItem; //{ throw new Error("Not implemented.");}
    }
    class SecurityTimestamp {
        CreationTimeUtc: Date;
        ExpiryTimeUtc: Date;
        Id: string;
        DigestAlgorithm: string;
        private id: string;
        private digestAlgorithm: string;
        private digest: System.Byte[];
        private computedCreationTimeUtc: any;
        private computedExpiryTimeUtc: any;
        private creationTimeUtc: Date;
        private expiryTimeUtc: Date;
        static DefaultTimestampValidityDuration: System.TimeSpan;
        static DefaultTimeToLive: System.TimeSpan;
        GetCreationTimeChars(): any; //{ throw new Error("Not implemented.");}
        GetDigest(): System.Byte[]; //{ throw new Error("Not implemented.");}
        GetExpiryTimeChars(): any; //{ throw new Error("Not implemented.");}
        ToChars(utcTime: any): any; //{ throw new Error("Not implemented.");}
        ToChars(n: number, buffer: any, offset: any, count: number): any; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
    }
    class SeekToConditionItemView extends ViewBase {
        PageSize: number;
        OffsetBasePoint: OffsetBasePoint;
        Condition: SearchFilter;
        Traversal: ItemTraversal;
        OrderBy: OrderByCollection;
        private pageSize: number;
        private traversal: ItemTraversal;
        private condition: SearchFilter;
        private offsetBasePoint: OffsetBasePoint;
        private orderBy: OrderByCollection;
        private serviceObjType: ServiceObjectType;
        AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        GetMaxEntriesReturned(): number; //{ throw new Error("Not implemented.");}
        GetServiceObjectType(): ServiceObjectType; //{ throw new Error("Not implemented.");}
        GetViewJsonTypeName(): string; //{ throw new Error("Not implemented.");}
        GetViewXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalValidate(request: ServiceRequestBase): any; //{ throw new Error("Not implemented.");}
        InternalWritePagingToJson(jsonView: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any; //{ throw new Error("Not implemented.");}
        InternalWriteViewToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        SetServiceObjectType(objType: ServiceObjectType): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any; //{ throw new Error("Not implemented.");}
        WriteOrderByToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any; //{ throw new Error("Not implemented.");}
    }
    class ServiceObjectChangedDelegate extends System.MulticastDelegate {
        BeginInvoke(serviceObject: ServiceObject, callback: System.AsyncCallback, object: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        EndInvoke(result: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
        Invoke(serviceObject: ServiceObject): any; //{ throw new Error("Not implemented.");}
    }
    class ServiceObjectDefinitionAttribute extends System.Attribute {
        XmlElementName: string;
        ReturnedByServer: boolean;
        private xmlElementName: string;
        private returnedByServer: boolean;
    }

    class SetHoldOnMailboxesParameters {
        ActionType: HoldAction;
        HoldId: string;
        Query: string;
        Mailboxes: System.String[];
        Language: string;
        InPlaceHoldIdentity: string;
    }
    class SimplePropertyBag<TKey> {
        AddedItems: System.Collections.Generic.IEnumerable<TKey>;
        RemovedItems: System.Collections.Generic.IEnumerable<TKey>;
        ModifiedItems: System.Collections.Generic.IEnumerable<TKey>;
        Item: any;
        private items: System.Collections.Generic.Dictionary<TKey, TValue>;
        private removedItems: System.Collections.Generic.List<T>;
        private addedItems: System.Collections.Generic.List<T>;
        private modifiedItems: System.Collections.Generic.List<T>;
        private OnChange: PropertyBagChangedDelegate;
        Changed(): any; //{ throw new Error("Not implemented.");}
        ClearChangeLog(): any; //{ throw new Error("Not implemented.");}
        ContainsKey(key: TKey): boolean; //{ throw new Error("Not implemented.");}
        GetEnumerator(): any; //{ throw new Error("Not implemented.");}
        InternalAddItemToChangeList(key: TKey, changeList: System.Collections.Generic.List<T>): any; //{ throw new Error("Not implemented.");}
        InternalRemoveItem(key: TKey): any; //{ throw new Error("Not implemented.");}
        TryGetValue(key: TKey, value: any): boolean; //{ throw new Error("Not implemented.");}
    }
    class StreamingSubscription extends SubscriptionBase {
        Service: ExchangeService;
        UsesWatermark: boolean;
        BeginUnsubscribe(callback: System.AsyncCallback, state: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        EndUnsubscribe(asyncResult: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
        Unsubscribe(): any; //{ throw new Error("Not implemented.");}
    }
    class StreamingSubscriptionConnection {
        CurrentSubscriptions: System.Collections.Generic.IEnumerable<StreamingSubscription>;
        IsOpen: boolean;
        private subscriptions: System.Collections.Generic.Dictionary<TKey, TValue>;
        private connectionTimeout: number;
        private session: ExchangeService;
        private isDisposed: boolean;
        private currentHangingRequest: GetStreamingEventsRequest;
        private lockObject: any;
        private OnNotificationEvent: StreamingSubscriptionConnection.NotificationEventDelegate;
        private OnSubscriptionError: StreamingSubscriptionConnection.SubscriptionErrorDelegate;
        private OnDisconnect: StreamingSubscriptionConnection.SubscriptionErrorDelegate;
        AddSubscription(subscription: StreamingSubscription): any; //{ throw new Error("Not implemented.");}
        Close(): any; //{ throw new Error("Not implemented.");}
        Dispose(): any; //{ throw new Error("Not implemented.");}
        Dispose(suppressFinalizer: boolean): any; //{ throw new Error("Not implemented.");}
        Finalize(): any; //{ throw new Error("Not implemented.");}
        HandleServiceResponseObject(response: any): any; //{ throw new Error("Not implemented.");}
        InternalOnDisconnect(ex: System.Exception): any; //{ throw new Error("Not implemented.");}
        IssueGeneralFailure(gseResponse: GetStreamingEventsResponse): any; //{ throw new Error("Not implemented.");}
        IssueNotificationEvents(gseResponse: GetStreamingEventsResponse): any; //{ throw new Error("Not implemented.");}
        IssueSubscriptionFailures(gseResponse: GetStreamingEventsResponse): any; //{ throw new Error("Not implemented.");}
        OnRequestDisconnect(sender: any, args: HangingRequestDisconnectEventArgs): any; //{ throw new Error("Not implemented.");}
        Open(): any; //{ throw new Error("Not implemented.");}
        RemoveSubscription(subscription: StreamingSubscription): any; //{ throw new Error("Not implemented.");}
        ThrowIfDisposed(): any; //{ throw new Error("Not implemented.");}
        ValidateConnectionState(isConnectedExpected: boolean, errorMessage: string): any; //{ throw new Error("Not implemented.");}
    }
    class SubscribeToPullNotificationsRequest extends SubscribeRequest<PullSubscription> {
        Timeout: number;
        private timeout: number;
        AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<PullSubscription>; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetSubscriptionXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalWriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
    }
    class SubscribeToPushNotificationsRequest extends SubscribeRequest<PushSubscription> {
        Frequency: number;
        Url: System.Uri;
        CallerData: string;
        private frequency: number;
        private url: System.Uri;
        private callerData: string;
        AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<PushSubscription>; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetSubscriptionXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalWriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
    }
    class SubscribeToStreamingNotificationsRequest extends SubscribeRequest<StreamingSubscription> {
        AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<StreamingSubscription>; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetSubscriptionXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalWriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
    }
    class SubscriptionBase {
        Service: ExchangeService;
        Id: string;
        Watermark: string;
        UsesWatermark: boolean;
        private service: ExchangeService;
        private id: string;
        private watermark: string;
        LoadFromJson(jsonResponse: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
    }
    class SubscriptionErrorEventArgs extends System.EventArgs {
        Subscription: StreamingSubscription;
        Exception: System.Exception;
    }

    class Time {
        Hours: number;
        Minutes: number;
        Seconds: number;
        private hours: number;
        private minutes: number;
        private seconds: number;
        ConvertToMinutes(): number; //{ throw new Error("Not implemented.");}
        ToXSTime(): string; //{ throw new Error("Not implemented.");}
    }
    class TimeWindow {
        StartTime: Date;
        EndTime: Date;
        Duration: System.TimeSpan;
        private startTime: Date;
        private endTime: Date;
        InternalToJson(service: ExchangeService): JsonObject; //{ throw new Error("Not implemented.");}
        LoadFromJson(jsonObject: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, startTime: any, endTime: any): any; //{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any; //{ throw new Error("Not implemented.");}
        WriteToXmlUnscopedDatesOnly(writer: EwsServiceXmlWriter, xmlElementName: string): any; //{ throw new Error("Not implemented.");}
    }
    class TokenCredentials extends WSSecurityBasedCredentials {
        PrepareWebRequest(request: IEwsHttpWebRequest): any; //{ throw new Error("Not implemented.");}
    }
    class UnifiedMessaging {
        private service: ExchangeService;
        DisconnectPhoneCall(id: PhoneCallId): any; //{ throw new Error("Not implemented.");}
        GetPhoneCallInformation(id: PhoneCallId): PhoneCall; //{ throw new Error("Not implemented.");}
        PlayOnPhone(itemId: ItemId, dialString: string): PhoneCall; //{ throw new Error("Not implemented.");}
    }
    class UpdateDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {
        MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
        DelegateUsers: System.Collections.Generic.List<DelegateUser>;
        private delegateUsers: System.Collections.Generic.List<DelegateUser>;
        private meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
        CreateResponse(): DelegateManagementResponse; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class UserConfiguration {
        Name: string;
        ParentFolderId: FolderId;
        ItemId: ItemId;
        Dictionary: UserConfigurationDictionary;
        XmlData: System.Byte[];
        BinaryData: System.Byte[];
        IsDirty: boolean;
        private service: ExchangeService;
        private name: string;
        private parentFolderId: FolderId;
        private itemId: ItemId;
        private dictionary: UserConfigurationDictionary;
        private xmlData: System.Byte[];
        private binaryData: System.Byte[];
        private propertiesAvailableForAccess: UserConfigurationProperties;
        private updatedProperties: UserConfigurationProperties;
        private isNew: boolean;
        Bind(service: ExchangeService, name: string, parentFolderId: FolderId, properties: UserConfigurationProperties): UserConfiguration; //{ throw new Error("Not implemented.");}
        Bind(service: ExchangeService, name: string, parentFolderName: WellKnownFolderName, properties: UserConfigurationProperties): UserConfiguration; //{ throw new Error("Not implemented.");}
        Delete(): any; //{ throw new Error("Not implemented.");}
        GetBase64PropertyValue(bytes: System.Byte[]): string; //{ throw new Error("Not implemented.");}
        GetJsonUserConfigName(service: ExchangeService): JsonObject; //{ throw new Error("Not implemented.");}
        GetJsonUserConfigName(service: ExchangeService, parentFolderId: FolderId, name: string): JsonObject; //{ throw new Error("Not implemented.");}
        InitializeProperties(requestedProperties: UserConfigurationProperties): any; //{ throw new Error("Not implemented.");}
        IsPropertyUpdated(property: UserConfigurationProperties): boolean; //{ throw new Error("Not implemented.");}
        Load(properties: UserConfigurationProperties): any; //{ throw new Error("Not implemented.");}
        LoadFromJson(responseObject: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): any; //{ throw new Error("Not implemented.");}
        MarkPropertyForUpdate(property: UserConfigurationProperties): any; //{ throw new Error("Not implemented.");}
        ResetIsDirty(): any; //{ throw new Error("Not implemented.");}
        Save(name: string, parentFolderName: WellKnownFolderName): any; //{ throw new Error("Not implemented.");}
        Save(name: string, parentFolderId: FolderId): any; //{ throw new Error("Not implemented.");}
        Update(): any; //{ throw new Error("Not implemented.");}
        ValidatePropertyAccess(property: UserConfigurationProperties): any; //{ throw new Error("Not implemented.");}
        WriteBinaryDataToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteByteArrayToXml(writer: EwsServiceXmlWriter, byteArray: System.Byte[], xmlElementName: string): any; //{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter, xmlNamespace: XmlNamespace, xmlElementName: string): any; //{ throw new Error("Not implemented.");}
        WriteUserConfigurationNameToXml(writer: EwsServiceXmlWriter, xmlNamespace: XmlNamespace, name: string, parentFolderId: FolderId): any; //{ throw new Error("Not implemented.");}
        WriteXmlDataToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }
    class ViewBase {
        PropertySet: PropertySet;
        private propertySet: PropertySet;
        AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        GetMaxEntriesReturned(): number; //{ throw new Error("Not implemented.");}
        GetPropertySetOrDefault(): PropertySet; //{ throw new Error("Not implemented.");}
        GetServiceObjectType(): ServiceObjectType; //{ throw new Error("Not implemented.");}
        GetViewJsonTypeName(): string; //{ throw new Error("Not implemented.");}
        GetViewXmlElementName(): string; //{ throw new Error("Not implemented.");}
        InternalValidate(request: ServiceRequestBase): any; //{ throw new Error("Not implemented.");}
        InternalWritePagingToJson(jsonView: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any; //{ throw new Error("Not implemented.");}
        InternalWriteViewToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any; //{ throw new Error("Not implemented.");}
        WriteOrderByToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
        WritePagingToJson(service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        WriteShapeToJson(jsonRequest: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any; //{ throw new Error("Not implemented.");}
    }
    class WebAsyncCallStateAnchor {
        ServiceRequest: ServiceRequestBase;
        WebRequest: IEwsHttpWebRequest;
        AsyncState: any;
        AsyncCallback: System.AsyncCallback;
    }
    class WebCredentials extends ExchangeCredentials {
        Credentials: System.Net.ICredentials;
        private credentials: System.Net.ICredentials;
        AdjustUrl(url: System.Uri): System.Uri; //{ throw new Error("Not implemented.");}
        PrepareWebRequest(request: IEwsHttpWebRequest): any; //{ throw new Error("Not implemented.");}
    }
    class WindowsLiveCredentials extends WSSecurityBasedCredentials {
        TraceEnabled: boolean;
        TraceListener: ITraceListener;
        WindowsLiveUrl: System.Uri;
        IsAuthenticated: boolean;
        private windowsLiveId: string;
        private password: string;
        private windowsLiveUrl: System.Uri;
        private isAuthenticated: boolean;
        private traceEnabled: boolean;
        private traceListener: ITraceListener;
        static DefaultWindowsLiveUrl: System.Uri;
        EmitTokenRequest(uriForTokenEndpointReference: System.Uri): any; //{ throw new Error("Not implemented.");}
        MakeTokenRequestToWindowsLive(uriForTokenEndpointReference: System.Uri): any; //{ throw new Error("Not implemented.");}
        ParseWindowsLiveRSTResponseBody(rstResponse: EwsXmlReader): any; //{ throw new Error("Not implemented.");}
        PrepareWebRequest(request: IEwsHttpWebRequest): any; //{ throw new Error("Not implemented.");}
        ProcessTokenResponse(response: any): any; //{ throw new Error("Not implemented.");}
        ReadWindowsLiveRSTResponseHeaders(rstResponse: EwsXmlReader): any; //{ throw new Error("Not implemented.");}
        TraceResponse(response: any, memoryStream: any): any; //{ throw new Error("Not implemented.");}
        TraceWebException(e: any): any; //{ throw new Error("Not implemented.");}
    }
    
    class WSSecurityUtilityIdSignedXml extends System.Security.Cryptography.Xml.SignedXml {
        private document: System.Xml.XmlDocument;
        private ids: System.Collections.Generic.Dictionary<TKey, TValue>;
        private static nextId: number;
        private static commonPrefix: string;
        AddReference(xpath: string): any; //{ throw new Error("Not implemented.");}
        GetIdElement(document: System.Xml.XmlDocument, idValue: string): System.Xml.XmlElement; //{ throw new Error("Not implemented.");}
        GetUniqueId(): string; //{ throw new Error("Not implemented.");}
    }
    class X509CertificateCredentials extends WSSecurityBasedCredentials {
        NeedSignature: boolean;
        private certificate: any;
        private keyInfoClause: any;
        AdjustUrl(url: System.Uri): System.Uri; //{ throw new Error("Not implemented.");}
        PrepareWebRequest(request: IEwsHttpWebRequest): any; //{ throw new Error("Not implemented.");}
        Sign(memoryStream: any): any; //{ throw new Error("Not implemented.");}
        ToString(): string; //{ throw new Error("Not implemented.");}
    }
    class XmlAttributeNames {
    }
    class XmlElementNames {
    }
}