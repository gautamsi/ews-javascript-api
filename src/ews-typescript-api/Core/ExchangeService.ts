module Microsoft.Exchange.WebServices.Data {
    export class ExchangeServiceBase {
        static AccountIsLocked: System.Net.HttpStatusCode = 456;

        CookieContainer: any;//System.Net.CookieContainer;
        TimeZone: any;//System.TimeZoneInfo;
        TimeZoneDefinition: TimeZoneDefinition;
        SendClientLatencies: boolean;
        TraceEnabled: boolean;
        TraceFlags: TraceFlags;
        TraceListener: ITraceListener;
        Credentials: ExchangeCredentials;
        UseDefaultCredentials: boolean;
        Timeout: number;
        PreAuthenticate: boolean;
        AcceptGzipEncoding: boolean;
        RequestedServerVersion: ExchangeVersion;
        UserAgent: string;
        ServerInfo: ExchangeServerInfo;
        WebProxy: any;//System.Net.IWebProxy;
        KeepAlive: boolean;
        ConnectionGroupName: string;
        ClientRequestId: string;
        ReturnClientRequestId: boolean;
        HttpHeaders: any;//System.Collections.Generic.IDictionary<string, string>;
        HttpResponseHeaders: any;//System.Collections.Generic.IDictionary<string, string>;
        static SessionKey: any;//System.Byte[];
        HttpWebRequestFactory: IEwsHttpWebRequestFactory;
        SuppressXmlVersionHeader: boolean;
        private requestedServerVersion: ExchangeVersion;
        private OnResponseHeadersCaptured: ResponseHeadersCapturedHandler;
        private credentials: ExchangeCredentials;
        private useDefaultCredentials: boolean;
        private timeout: number;
        private traceEnabled: boolean;
        private sendClientLatencies: boolean;
        private traceFlags: TraceFlags;
        private traceListener: ITraceListener;
        private preAuthenticate: boolean;
        private userAgent: string;
        private acceptGzipEncoding: boolean;
        private keepAlive: boolean;
        private connectionGroupName: string;
        private clientRequestId: string;
        private returnClientRequestId: boolean;
        private cookieContainer: any;//System.Net.CookieContainer;
        private timeZone: any;//System.TimeZoneInfo;
        private timeZoneDefinition: TimeZoneDefinition;
        private serverInfo: ExchangeServerInfo;
        private webProxy: any;//System.Net.IWebProxy;
        private httpHeaders: any;//System.Collections.Generic.IDictionary<string, string>;
        private httpResponseHeaders: any;//System.Collections.Generic.IDictionary<string, string>;
        private ewsHttpWebRequestFactory: IEwsHttpWebRequestFactory;
        private OnSerializeCustomSoapHeaders: Function;// CustomXmlSerializationDelegate;
        private static lockObj: any;
        private static binarySecret: any;//System.Byte[];
        private static defaultUserAgent: string;

        constructor(requestedServerVersion: ExchangeVersion) {
            this.RequestedServerVersion = requestedServerVersion;
        }


        //ConvertDateTimeToUniversalDateTimeString(value: Date): string{ throw new Error("Not implemented.");}
        //ConvertStartDateToUnspecifiedDateTime(value: string): Date{ throw new Error("Not implemented.");}
        //ConvertUniversalDateTimeStringToLocalDateTime(value: string): Date{ throw new Error("Not implemented.");}
        DoOnSerializeCustomSoapHeaders(writer: any /*System.Xml.XmlWriter*/): void{ 
            EwsUtilities.Assert(
                writer != null,
                "ExchangeService.DoOnSerializeCustomSoapHeaders",
                "writer is null");

            if (this.OnSerializeCustomSoapHeaders != null) {
                this.OnSerializeCustomSoapHeaders(writer);
            }
        }
        //InternalProcessHttpErrorResponse(httpWebResponse: IEwsHttpWebResponse, webException: any, responseHeadersTraceFlag: TraceFlags, responseTraceFlag: TraceFlags): any{ throw new Error("Not implemented.");}
        IsTraceEnabledFor(traceFlags: TraceFlags): boolean { return this.TraceEnabled && ((this.TraceFlags & traceFlags) != 0); }
        //PrepareHttpWebRequestForUrl(url: System.Uri, acceptGzipEncoding: boolean, allowAutoRedirect: boolean): IEwsHttpWebRequest{ throw new Error("Not implemented.");}
        //ProcessHttpErrorResponse(httpWebResponse: IEwsHttpWebResponse, webException: any): any{ throw new Error("Not implemented.");}
        //ProcessHttpResponseHeaders(traceType: TraceFlags, response: IEwsHttpWebResponse): any{ throw new Error("Not implemented.");}
        //SaveHttpResponseHeaders(headers: System.Net.WebHeaderCollection): any{ throw new Error("Not implemented.");}
        //SetContentType(request: IEwsHttpWebRequest): any{ throw new Error("Not implemented.");}
        //SetCustomUserAgent(userAgent: string): any{ throw new Error("Not implemented.");}
        //TraceHttpRequestHeaders(traceType: TraceFlags, request: IEwsHttpWebRequest): any{ throw new Error("Not implemented.");}
        //TraceHttpResponseHeaders(traceType: TraceFlags, response: IEwsHttpWebResponse): any{ throw new Error("Not implemented.");}
        //TraceMessage(traceType: TraceFlags, logEntry: string): any{ throw new Error("Not implemented.");}
        //TraceXml(traceType: TraceFlags, stream: any): any{ throw new Error("Not implemented.");}
        //Validate(): any{ throw new Error("Not implemented.");}
    }
    export class ExchangeService extends ExchangeServiceBase {
        private static TargetServerVersionHeaderName: string = "X-EWS-TargetVersion";
        Url: System.Uri;
        ImpersonatedUserId: ImpersonatedUserId;
        PrivilegedUserId: PrivilegedUserId;
        ManagementRoles: ManagementRoles;
        PreferredCulture: System.Globalization.CultureInfo;
        DateTimePrecision: DateTimePrecision;
        FileAttachmentContentHandler: IFileAttachmentContentHandler;
        TimeZone: System.TimeZoneInfo;
        UnifiedMessaging: UnifiedMessaging;
        EnableScpLookup: boolean;
        Exchange2007CompatibilityMode: boolean;
        RenderingMethod: ExchangeService.RenderingMode;
        TraceEnablePrettyPrinting: boolean;
        TargetServerVersion: string;
        private url: System.Uri;
        private preferredCulture: System.Globalization.CultureInfo;
        private dateTimePrecision: DateTimePrecision;
        private impersonatedUserId: ImpersonatedUserId;
        private privilegedUserId: PrivilegedUserId;
        private managementRoles: ManagementRoles;
        private fileAttachmentContentHandler: IFileAttachmentContentHandler;
        private unifiedMessaging: UnifiedMessaging;
        private enableScpLookup: boolean;
        private renderingMode: ExchangeService.RenderingMode;
        private traceEnablePrettyPrinting: boolean;
        private targetServerVersion: string;
        private exchange2007CompatibilityMode: boolean;
        AddDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: System.Collections.Generic.IEnumerable<T>): System.Collections.ObjectModel.Collection<DelegateUserResponse>{ throw new Error("Not implemented.");}
        AddDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: any): System.Collections.ObjectModel.Collection<DelegateUserResponse>{ throw new Error("Not implemented.");}
        AdjustServiceUriFromCredentials(uri: System.Uri): System.Uri{ throw new Error("Not implemented.");}
        ApplyConversationAction(actionType: ConversationActionType, conversationIds: System.Collections.Generic.IEnumerable<T>, processRightAway: boolean, categories: StringList, enableAlwaysDelete: boolean, destinationFolderId: FolderId, errorHandlingMode: ServiceErrorHandling): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        ApplyConversationOneTimeAction(actionType: ConversationActionType, idTimePairs: System.Collections.Generic.IEnumerable<T>, contextFolderId: FolderId, destinationFolderId: FolderId, deleteType: DeleteMode, isRead: boolean, retentionPolicyType: RetentionType, retentionPolicyTagId: System.Guid, flag: Flag, suppressReadReceipts: boolean, errorHandlingMode: ServiceErrorHandling): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        ArchiveItems(itemIds: System.Collections.Generic.IEnumerable<T>, sourceFolderId: FolderId): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        AutodiscoverUrl(emailAddress: string, validateRedirectionUrlCallback: Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverRedirectionUrlValidationCallback): any{ throw new Error("Not implemented.");}
        AutodiscoverUrl(emailAddress: string): any{ throw new Error("Not implemented.");}
        BeginGetEvents(callback: System.AsyncCallback, state: any, subscriptionId: string, watermark: string): System.IAsyncResult{ throw new Error("Not implemented.");}
        BeginGetNonIndexableItemDetails(callback: System.AsyncCallback, state: any, parameters: GetNonIndexableItemDetailsParameters): System.IAsyncResult{ throw new Error("Not implemented.");}
        BeginGetNonIndexableItemStatistics(callback: System.AsyncCallback, state: any, parameters: GetNonIndexableItemStatisticsParameters): System.IAsyncResult{ throw new Error("Not implemented.");}
        BeginSearchMailboxes(callback: System.AsyncCallback, state: any, searchParameters: SearchMailboxesParameters): System.IAsyncResult{ throw new Error("Not implemented.");}
        BeginSubscribeToPullNotifications(callback: System.AsyncCallback, state: any, folderIds: System.Collections.Generic.IEnumerable<T>, timeout: number, watermark: string, eventTypes: any): System.IAsyncResult{ throw new Error("Not implemented.");}
        BeginSubscribeToPullNotificationsOnAllFolders(callback: System.AsyncCallback, state: any, timeout: number, watermark: string, eventTypes: any): System.IAsyncResult{ throw new Error("Not implemented.");}
        BeginSubscribeToPushNotifications(callback: System.AsyncCallback, state: any, folderIds: System.Collections.Generic.IEnumerable<T>, url: System.Uri, frequency: number, watermark: string, eventTypes: any): System.IAsyncResult{ throw new Error("Not implemented.");}
        BeginSubscribeToPushNotifications(callback: System.AsyncCallback, state: any, folderIds: System.Collections.Generic.IEnumerable<T>, url: System.Uri, frequency: number, watermark: string, callerData: string, eventTypes: any): System.IAsyncResult{ throw new Error("Not implemented.");}
        BeginSubscribeToPushNotificationsOnAllFolders(callback: System.AsyncCallback, state: any, url: System.Uri, frequency: number, watermark: string, eventTypes: any): System.IAsyncResult{ throw new Error("Not implemented.");}
        BeginSubscribeToPushNotificationsOnAllFolders(callback: System.AsyncCallback, state: any, url: System.Uri, frequency: number, watermark: string, callerData: string, eventTypes: any): System.IAsyncResult{ throw new Error("Not implemented.");}
        BeginSubscribeToStreamingNotifications(callback: System.AsyncCallback, state: any, folderIds: System.Collections.Generic.IEnumerable<T>, eventTypes: any): System.IAsyncResult{ throw new Error("Not implemented.");}
        BeginSubscribeToStreamingNotificationsOnAllFolders(callback: System.AsyncCallback, state: any, eventTypes: any): System.IAsyncResult{ throw new Error("Not implemented.");}
        BeginSyncFolderHierarchy(callback: System.AsyncCallback, state: any, propertySet: PropertySet, syncState: string): System.IAsyncResult{ throw new Error("Not implemented.");}
        BeginSyncFolderHierarchy(callback: System.AsyncCallback, state: any, syncFolderId: FolderId, propertySet: PropertySet, syncState: string): System.IAsyncResult{ throw new Error("Not implemented.");}
        BeginSyncFolderItems(callback: System.AsyncCallback, state: any, syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: System.Collections.Generic.IEnumerable<T>, maxChangesReturned: number, syncScope: SyncFolderItemsScope, syncState: string): System.IAsyncResult{ throw new Error("Not implemented.");}
        BeginUnsubscribe(callback: System.AsyncCallback, state: any, subscriptionId: string): System.IAsyncResult{ throw new Error("Not implemented.");}
        BindToFolderAs<TFolder extends Folder>(folderId: FolderId, propertySet: PropertySet): TFolder {
            var result = this.BindToFolder(folderId, propertySet);
            debugger;
            if (result instanceof Folder) //todo: implement instanceOf TFolder
            {
                return <TFolder>result;
            }
            else
            {
        //throw new ServiceLocalException(
        //    string.Format(
        //        Strings.FolderTypeNotCompatible,
        //        result.GetType().Name,
        //        typeof (TFolder).Name));
    }
        }
        BindToFolder(folderId: FolderId, propertySet: PropertySet): Folder{
            EwsUtilities.ValidateParam(folderId, "folderId");
            EwsUtilities.ValidateParam(propertySet, "propertySet");

            var request: GetFolderRequest = new GetFolderRequest(this, ServiceErrorHandling.ThrowOnError);

            request.FolderIds.Add(folderId);
            request.PropertySet = propertySet;

            ServiceResponseCollection < GetFolderResponse > responses = request.Execute();

            return responses[0].Folder;
        }
        BindToItem(itemId: ItemId, propertySet: PropertySet): Item{ throw new Error("Not implemented.");}
        BindToItem(itemId: ItemId, propertySet: PropertySet): any{ throw new Error("Not implemented.");}
        BindToItems(itemIds: System.Collections.Generic.IEnumerable<T>, propertySet: PropertySet): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        BuildGetEventsRequest(subscriptionId: string, watermark: string): GetEventsRequest{ throw new Error("Not implemented.");}
        BuildSubscribeToPullNotificationsRequest(folderIds: System.Collections.Generic.IEnumerable<T>, timeout: number, watermark: string, eventTypes: any): SubscribeToPullNotificationsRequest{ throw new Error("Not implemented.");}
        BuildSubscribeToPushNotificationsRequest(folderIds: System.Collections.Generic.IEnumerable<T>, url: System.Uri, frequency: number, watermark: string, callerData: string, eventTypes: any): SubscribeToPushNotificationsRequest{ throw new Error("Not implemented.");}
        BuildSubscribeToStreamingNotificationsRequest(folderIds: System.Collections.Generic.IEnumerable<T>, eventTypes: any): SubscribeToStreamingNotificationsRequest{ throw new Error("Not implemented.");}
        BuildSyncFolderHierarchyRequest(syncFolderId: FolderId, propertySet: PropertySet, syncState: string): SyncFolderHierarchyRequest{ throw new Error("Not implemented.");}
        BuildSyncFolderItemsRequest(syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: System.Collections.Generic.IEnumerable<T>, maxChangesReturned: number, syncScope: SyncFolderItemsScope, syncState: string): SyncFolderItemsRequest{ throw new Error("Not implemented.");}
        BuildUnsubscribeRequest(subscriptionId: string): UnsubscribeRequest{ throw new Error("Not implemented.");}
        ConvertId(id: AlternateIdBase, destinationFormat: IdFormat): AlternateIdBase{ throw new Error("Not implemented.");}
        ConvertIds(ids: System.Collections.Generic.IEnumerable<T>, destinationFormat: IdFormat): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        CopyFolder(folderId: FolderId, destinationFolderId: FolderId): Folder{ throw new Error("Not implemented.");}
        CopyItem(itemId: ItemId, destinationFolderId: FolderId): Item{ throw new Error("Not implemented.");}
        CopyItems(itemIds: System.Collections.Generic.IEnumerable<T>, destinationFolderId: FolderId): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        CopyItems(itemIds: System.Collections.Generic.IEnumerable<T>, destinationFolderId: FolderId, returnNewItemIds: boolean): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        CopyItemsInConversations(idLastSyncTimePairs: System.Collections.Generic.IEnumerable<T>, contextFolderId: FolderId, destinationFolderId: FolderId): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        CreateAttachments(parentItemId: string, attachments: System.Collections.Generic.IEnumerable<T>): ServiceResponseCollection<CreateAttachmentResponse>{ throw new Error("Not implemented.");}
        CreateFolder(folder: Folder, parentFolderId: FolderId): any{ throw new Error("Not implemented.");}
        CreateGetNonIndexableItemDetailsRequest(parameters: GetNonIndexableItemDetailsParameters): GetNonIndexableItemDetailsRequest{ throw new Error("Not implemented.");}
        CreateGetNonIndexableItemStatisticsRequest(parameters: GetNonIndexableItemStatisticsParameters): GetNonIndexableItemStatisticsRequest{ throw new Error("Not implemented.");}
        CreateItem(item: Item, parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): any{ throw new Error("Not implemented.");}
        CreateItems(items: System.Collections.Generic.IEnumerable<Item>, parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        CreateSearchMailboxesRequest(searchParameters: SearchMailboxesParameters): SearchMailboxesRequest{ throw new Error("Not implemented.");}
        CreateUserConfiguration(userConfiguration: UserConfiguration): any{ throw new Error("Not implemented.");}
        DefaultAutodiscoverRedirectionUrlValidationCallback(redirectionUrl: string): boolean{ throw new Error("Not implemented.");}
        DeleteAttachments(attachments: System.Collections.Generic.IEnumerable<T>): ServiceResponseCollection<DeleteAttachmentResponse>{ throw new Error("Not implemented.");}
        DeleteFolder(folderId: FolderId, deleteMode: DeleteMode): any{ throw new Error("Not implemented.");}
        DeleteItem(itemId: ItemId, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipts: boolean): any{ throw new Error("Not implemented.");}
        DeleteItem(itemId: ItemId, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any{ throw new Error("Not implemented.");}
        DeleteItems(itemIds: System.Collections.Generic.IEnumerable<T>, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        DeleteItems(itemIds: System.Collections.Generic.IEnumerable<T>, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipt: boolean): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        DeleteItemsInConversations(idLastSyncTimePairs: System.Collections.Generic.IEnumerable<T>, contextFolderId: FolderId, deleteMode: DeleteMode): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        DeleteUserConfiguration(name: string, parentFolderId: FolderId): any{ throw new Error("Not implemented.");}
        DisableAlwaysCategorizeItemsInConversations(conversationId: System.Collections.Generic.IEnumerable<T>, processSynchronously: boolean): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        DisableAlwaysDeleteItemsInConversations(conversationId: System.Collections.Generic.IEnumerable<T>, processSynchronously: boolean): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        DisableAlwaysMoveItemsInConversations(conversationIds: System.Collections.Generic.IEnumerable<T>, processSynchronously: boolean): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        DisableApp(id: string, disableReason: DisableReasonType): any{ throw new Error("Not implemented.");}
        EmptyFolder(folderId: FolderId, deleteMode: DeleteMode, deleteSubFolders: boolean): any{ throw new Error("Not implemented.");}
        EnableAlwaysCategorizeItemsInConversations(conversationId: System.Collections.Generic.IEnumerable<T>, categories: System.Collections.Generic.IEnumerable<string>, processSynchronously: boolean): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        EnableAlwaysDeleteItemsInConversations(conversationId: System.Collections.Generic.IEnumerable<T>, processSynchronously: boolean): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        EnableAlwaysMoveItemsInConversations(conversationId: System.Collections.Generic.IEnumerable<T>, destinationFolderId: FolderId, processSynchronously: boolean): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        EndGetEvents(asyncResult: System.IAsyncResult): GetEventsResults{ throw new Error("Not implemented.");}
        EndGetNonIndexableItemDetails(asyncResult: System.IAsyncResult): GetNonIndexableItemDetailsResponse{ throw new Error("Not implemented.");}
        EndGetNonIndexableItemStatistics(asyncResult: System.IAsyncResult): GetNonIndexableItemStatisticsResponse{ throw new Error("Not implemented.");}
        EndSearchMailboxes(asyncResult: System.IAsyncResult): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        EndSubscribeToPullNotifications(asyncResult: System.IAsyncResult): PullSubscription{ throw new Error("Not implemented.");}
        EndSubscribeToPushNotifications(asyncResult: System.IAsyncResult): PushSubscription{ throw new Error("Not implemented.");}
        EndSubscribeToStreamingNotifications(asyncResult: System.IAsyncResult): StreamingSubscription{ throw new Error("Not implemented.");}
        EndSyncFolderHierarchy(asyncResult: System.IAsyncResult): ChangeCollection<FolderChange>{ throw new Error("Not implemented.");}
        EndSyncFolderItems(asyncResult: System.IAsyncResult): ChangeCollection<ItemChange>{ throw new Error("Not implemented.");}
        EndUnsubscribe(asyncResult: System.IAsyncResult): any{ throw new Error("Not implemented.");}
        ExecuteDiagnosticMethod(verb: string, parameter: System.Xml.XmlNode): System.Xml.XmlDocument{ throw new Error("Not implemented.");}
        ExpandGroup(address: string, routingType: string): ExpandGroupResults{ throw new Error("Not implemented.");}
        ExpandGroup(groupId: ItemId): ExpandGroupResults{ throw new Error("Not implemented.");}
        ExpandGroup(smtpAddress: string): ExpandGroupResults{ throw new Error("Not implemented.");}
        ExpandGroup(emailAddress: EmailAddress): ExpandGroupResults{ throw new Error("Not implemented.");}
        FindAppointments(parentFolderName: WellKnownFolderName, calendarView: CalendarView): FindItemsResults<TItem>{ throw new Error("Not implemented.");}
        FindAppointments(parentFolderId: FolderId, calendarView: CalendarView): FindItemsResults<TItem>{ throw new Error("Not implemented.");}
        FindConversation(view: ViewBase, folderId: FolderId): System.Collections.Generic.ICollection<T>{ throw new Error("Not implemented.");}
        FindConversation(view: ViewBase, folderId: FolderId, queryString: string, returnHighlightTerms: boolean): FindConversationResults{ throw new Error("Not implemented.");}
        FindConversation(view: ViewBase, folderId: FolderId, queryString: string): System.Collections.Generic.ICollection<T>{ throw new Error("Not implemented.");}
        FindConversation(view: ViewBase, folderId: FolderId, queryString: string, returnHighlightTerms: boolean, mailboxScope: MailboxSearchLocation): FindConversationResults{ throw new Error("Not implemented.");}
        FindFolders(parentFolderId: FolderId, searchFilter: SearchFilter, view: FolderView): FindFoldersResults{ throw new Error("Not implemented.");}
        FindFolders(parentFolderId: FolderId, view: FolderView): FindFoldersResults{ throw new Error("Not implemented.");}
        FindFolders(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: FolderView): FindFoldersResults{ throw new Error("Not implemented.");}
        FindFolders(parentFolderName: WellKnownFolderName, view: FolderView): FindFoldersResults{ throw new Error("Not implemented.");}
        FindItems(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): GroupedFindItemsResults<TItem>{ throw new Error("Not implemented.");}
        FindItems(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): GroupedFindItemsResults<TItem>{ throw new Error("Not implemented.");}
        FindItems(parentFolderName: WellKnownFolderName, queryString: string, view: ViewBase, groupBy: Grouping): GroupedFindItemsResults<TItem>{ throw new Error("Not implemented.");}
        FindItems(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        FindItems(parentFolderId: FolderId, view: ViewBase, groupBy: Grouping): GroupedFindItemsResults<TItem>{ throw new Error("Not implemented.");}
        FindItems(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase): FindItemsResults<TItem>{ throw new Error("Not implemented.");}
        FindItems(parentFolderName: WellKnownFolderName, view: ViewBase): FindItemsResults<TItem>{ throw new Error("Not implemented.");}
        FindItems(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: ViewBase): FindItemsResults<TItem>{ throw new Error("Not implemented.");}
        FindItems(parentFolderId: FolderId, queryString: string, returnHighlightTerms: boolean, view: ViewBase): FindItemsResults<TItem>{ throw new Error("Not implemented.");}
        FindItems(parentFolderName: WellKnownFolderName, queryString: string, view: ViewBase): FindItemsResults<TItem>{ throw new Error("Not implemented.");}
        FindItems(parentFolderId: FolderId, queryString: string, view: ViewBase): FindItemsResults<TItem>{ throw new Error("Not implemented.");}
        FindItems(parentFolderId: FolderId, queryString: string, view: ViewBase, groupBy: Grouping): GroupedFindItemsResults<TItem>{ throw new Error("Not implemented.");}
        FindItems(parentFolderIds: System.Collections.Generic.IEnumerable<T>, searchFilter: SearchFilter, queryString: string, view: ViewBase, groupBy: Grouping, errorHandlingMode: ServiceErrorHandling): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        FindItems(parentFolderId: FolderId, view: ViewBase): FindItemsResults<TItem>{ throw new Error("Not implemented.");}
        FindItems(parentFolderId: FolderId, queryString: string, returnHighlightTerms: boolean, view: ViewBase, groupBy: Grouping): GroupedFindItemsResults<TItem>{ throw new Error("Not implemented.");}
        GetAppManifests(apiVersionSupported: string, schemaVersionSupported: string): System.Collections.ObjectModel.Collection<ClientApp>{ throw new Error("Not implemented.");}
        GetAppManifests(): System.Collections.ObjectModel.Collection<System.Xml.XmlDocument>{ throw new Error("Not implemented.");}
        GetAppMarketplaceUrl(apiVersionSupported: string, schemaVersionSupported: string): string{ throw new Error("Not implemented.");}
        GetAppMarketplaceUrl(): string{ throw new Error("Not implemented.");}
        GetAttachment(attachment: Attachment, bodyType: BodyType, additionalProperties: System.Collections.Generic.IEnumerable<T>): any{ throw new Error("Not implemented.");}
        GetAttachments(attachments: any, bodyType: BodyType, additionalProperties: System.Collections.Generic.IEnumerable<T>): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        GetAttachments(attachmentIds: System.String[], bodyType: BodyType, additionalProperties: System.Collections.Generic.IEnumerable<T>): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        GetAutodiscoverUrl(emailAddress: string, requestedServerVersion: ExchangeVersion, validateRedirectionUrlCallback: Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverRedirectionUrlValidationCallback): System.Uri{ throw new Error("Not implemented.");}
        GetClientAccessToken(tokenRequests: ClientAccessTokenRequest[]): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        GetClientAccessToken(idAndTypes: System.Collections.Generic.IEnumerable<T>): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        GetClientExtension(requestedExtensionIds: StringList, shouldReturnEnabledOnly: boolean, isUserScope: boolean, userId: string, userEnabledExtensionIds: StringList, userDisabledExtensionIds: StringList, isDebug: boolean): GetClientExtensionResponse{ throw new Error("Not implemented.");}
        GetConversationItems(conversations: System.Collections.Generic.IEnumerable<T>, propertySet: PropertySet, foldersToIgnore: System.Collections.Generic.IEnumerable<T>, sortOrder: ConversationSortOrder): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        GetConversationItems(conversationId: ConversationId, propertySet: PropertySet, syncState: string, foldersToIgnore: System.Collections.Generic.IEnumerable<T>, sortOrder: ConversationSortOrder): ConversationResponse{ throw new Error("Not implemented.");}
        GetConversationItems(conversations: System.Collections.Generic.IEnumerable<T>, propertySet: PropertySet, foldersToIgnore: System.Collections.Generic.IEnumerable<T>, sortOrder: ConversationSortOrder, mailboxScope: MailboxSearchLocation): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        GetDelegates(mailbox: Mailbox, includePermissions: boolean, userIds: System.Collections.Generic.IEnumerable<T>): DelegateInformation{ throw new Error("Not implemented.");}
        GetDelegates(mailbox: Mailbox, includePermissions: boolean, userIds: any): DelegateInformation{ throw new Error("Not implemented.");}
        GetDiscoverySearchConfiguration(searchId: string, expandGroupMembership: boolean, inPlaceHoldConfigurationOnly: boolean): GetDiscoverySearchConfigurationResponse{ throw new Error("Not implemented.");}
        GetEncryptionConfiguration(): GetEncryptionConfigurationResponse{ throw new Error("Not implemented.");}
        GetEvents(subscriptionId: string, watermark: string): GetEventsResults{ throw new Error("Not implemented.");}
        GetEwsUrlFromResponse(response: Microsoft.Exchange.WebServices.Autodiscover.GetUserSettingsResponse, isExternal: boolean): System.Uri{ throw new Error("Not implemented.");}
        GetHoldOnMailboxes(holdId: string): GetHoldOnMailboxesResponse{ throw new Error("Not implemented.");}
        GetInboxRules(): RuleCollection{ throw new Error("Not implemented.");}
        GetInboxRules(mailboxSmtpAddress: string): RuleCollection{ throw new Error("Not implemented.");}
        GetNonIndexableItemDetails(mailboxes: System.String[]): GetNonIndexableItemDetailsResponse{ throw new Error("Not implemented.");}
        GetNonIndexableItemDetails(mailboxes: System.String[], pageSize: number, pageItemReference: string, pageDirection: SearchPageDirection): GetNonIndexableItemDetailsResponse{ throw new Error("Not implemented.");}
        GetNonIndexableItemDetails(parameters: GetNonIndexableItemDetailsParameters): GetNonIndexableItemDetailsResponse{ throw new Error("Not implemented.");}
        GetNonIndexableItemStatistics(parameters: GetNonIndexableItemStatisticsParameters): GetNonIndexableItemStatisticsResponse{ throw new Error("Not implemented.");}
        GetNonIndexableItemStatistics(mailboxes: System.String[]): GetNonIndexableItemStatisticsResponse{ throw new Error("Not implemented.");}
        GetPasswordExpirationDate(mailboxSmtpAddress: string): Date{ throw new Error("Not implemented.");}
        GetRoomLists(): EmailAddressCollection{ throw new Error("Not implemented.");}
        GetRooms(emailAddress: EmailAddress): System.Collections.ObjectModel.Collection<EmailAddress>{ throw new Error("Not implemented.");}
        GetSearchableMailboxes(searchFilter: string, expandGroupMembership: boolean): GetSearchableMailboxesResponse{ throw new Error("Not implemented.");}
        GetUserAvailability(attendees: System.Collections.Generic.IEnumerable<AttendeeInfo>, timeWindow: TimeWindow, requestedData: AvailabilityData, options: AvailabilityOptions): GetUserAvailabilityResults{ throw new Error("Not implemented.");}
        GetUserAvailability(attendees: System.Collections.Generic.IEnumerable<AttendeeInfo>, timeWindow: TimeWindow, requestedData: AvailabilityData): GetUserAvailabilityResults{ throw new Error("Not implemented.");}
        GetUserConfiguration(name: string, parentFolderId: FolderId, properties: UserConfigurationProperties): UserConfiguration{ throw new Error("Not implemented.");}
        GetUserOofSettings(smtpAddress: string): OofSettings{ throw new Error("Not implemented.");}
        GetUserRetentionPolicyTags(): GetUserRetentionPolicyTagsResponse{ throw new Error("Not implemented.");}
        InstallApp(manifestStream: System.IO.Stream): any{ throw new Error("Not implemented.");}
        InternalBindToItems(itemIds: System.Collections.Generic.IEnumerable<T>, propertySet: PropertySet, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        InternalConvertIds(ids: System.Collections.Generic.IEnumerable<T>, destinationFormat: IdFormat, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        InternalCopyItems(itemIds: System.Collections.Generic.IEnumerable<T>, destinationFolderId: FolderId, returnNewItemIds: boolean, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        InternalCreateItems(items: System.Collections.Generic.IEnumerable<Item>, parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        InternalCreateResponseObject(responseObject: ServiceObject, parentFolderId: FolderId, messageDisposition: MessageDisposition): System.Collections.Generic.List<Item>{ throw new Error("Not implemented.");}
        InternalDeleteItems(itemIds: System.Collections.Generic.IEnumerable<T>, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, errorHandling: ServiceErrorHandling, suppressReadReceipts: boolean): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        InternalFindFolders(parentFolderIds: System.Collections.Generic.IEnumerable<T>, searchFilter: SearchFilter, view: FolderView, errorHandlingMode: ServiceErrorHandling): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        InternalGetAttachments(attachments: System.Collections.Generic.IEnumerable<T>, bodyType: BodyType, additionalProperties: System.Collections.Generic.IEnumerable<T>, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        InternalGetConversationItems(conversations: System.Collections.Generic.IEnumerable<T>, propertySet: PropertySet, foldersToIgnore: System.Collections.Generic.IEnumerable<T>, sortOrder: ConversationSortOrder, mailboxScope: MailboxSearchLocation, maxItemsToReturn: number, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        InternalLoadPropertiesForItems(items: System.Collections.Generic.IEnumerable<Item>, propertySet: PropertySet, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        InternalMoveItems(itemIds: System.Collections.Generic.IEnumerable<T>, destinationFolderId: FolderId, returnNewItemIds: boolean, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        InternalUpdateItems(items: System.Collections.Generic.IEnumerable<Item>, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, errorHandling: ServiceErrorHandling, suppressReadReceipt: boolean): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        IsMajorMinor(versionPart: string): boolean{ throw new Error("Not implemented.");}
        LoadPropertiesForFolder(folder: Folder, propertySet: PropertySet): any{ throw new Error("Not implemented.");}
        LoadPropertiesForItems(items: System.Collections.Generic.IEnumerable<Item>, propertySet: PropertySet): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        LoadPropertiesForUserConfiguration(userConfiguration: UserConfiguration, properties: UserConfigurationProperties): any{ throw new Error("Not implemented.");}
        MarkAllItemsAsRead(folderId: FolderId, readFlag: boolean, suppressReadReceipts: boolean): any{ throw new Error("Not implemented.");}
        MarkAsJunk(itemIds: System.Collections.Generic.IEnumerable<T>, isJunk: boolean, moveItem: boolean): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        MoveFolder(folderId: FolderId, destinationFolderId: FolderId): Folder{ throw new Error("Not implemented.");}
        MoveItem(itemId: ItemId, destinationFolderId: FolderId): Item{ throw new Error("Not implemented.");}
        MoveItems(itemIds: System.Collections.Generic.IEnumerable<T>, destinationFolderId: FolderId): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        MoveItems(itemIds: System.Collections.Generic.IEnumerable<T>, destinationFolderId: FolderId, returnNewItemIds: boolean): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        MoveItemsInConversations(idLastSyncTimePairs: System.Collections.Generic.IEnumerable<T>, contextFolderId: FolderId, destinationFolderId: FolderId): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        PrepareHttpWebRequest(methodName: string): IEwsHttpWebRequest{ throw new Error("Not implemented.");}
        ProcessHttpErrorResponse(httpWebResponse: XMLHttpRequest /*IEwsHttpWebResponse*/, webException: any): any{ throw new Error("Not implemented.");}
        RemoveDelegates(mailbox: Mailbox, userIds: System.Collections.Generic.IEnumerable<T>): System.Collections.ObjectModel.Collection<DelegateUserResponse>{ throw new Error("Not implemented.");}
        RemoveDelegates(mailbox: Mailbox, userIds: any): System.Collections.ObjectModel.Collection<DelegateUserResponse>{ throw new Error("Not implemented.");}
        ResolveName(nameToResolve: string, parentFolderIds: System.Collections.Generic.IEnumerable<T>, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean, contactDataPropertySet: PropertySet): NameResolutionCollection{ throw new Error("Not implemented.");}
        ResolveName(nameToResolve: string, parentFolderIds: System.Collections.Generic.IEnumerable<T>, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean): NameResolutionCollection{ throw new Error("Not implemented.");}
        ResolveName(nameToResolve: string): NameResolutionCollection{ throw new Error("Not implemented.");}
        ResolveName(nameToResolve: string, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean, contactDataPropertySet: PropertySet): NameResolutionCollection{ throw new Error("Not implemented.");}
        ResolveName(nameToResolve: string, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean): NameResolutionCollection{ throw new Error("Not implemented.");}
        SearchMailboxes(mailboxQueries: System.Collections.Generic.IEnumerable<T>, resultType: SearchResultType): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        SearchMailboxes(mailboxQueries: System.Collections.Generic.IEnumerable<T>, resultType: SearchResultType, sortByProperty: string, sortOrder: SortDirection, pageSize: number, pageDirection: SearchPageDirection, pageItemReference: string): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        SearchMailboxes(searchParameters: SearchMailboxesParameters): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        SendItem(item: Item, savedCopyDestinationFolderId: FolderId): any{ throw new Error("Not implemented.");}
        SetClientExtension(actions: System.Collections.Generic.List<T>): any{ throw new Error("Not implemented.");}
        SetContentType(request: IEwsHttpWebRequest): any{ throw new Error("Not implemented.");}
        SetEncryptionConfiguration(imageBase64: string, emailText: string, portalText: string, disclaimerText: string): any{ throw new Error("Not implemented.");}
        SetFlagStatusForItemsInConversations(idLastSyncTimePairs: System.Collections.Generic.IEnumerable<T>, contextFolderId: FolderId, flagStatus: Flag): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, inPlaceHoldIdentity: string, itemHoldPeriod: string): SetHoldOnMailboxesResponse{ throw new Error("Not implemented.");}
        SetHoldOnMailboxes(parameters: SetHoldOnMailboxesParameters): SetHoldOnMailboxesResponse{ throw new Error("Not implemented.");}
        SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, mailboxes: System.String[]): SetHoldOnMailboxesResponse{ throw new Error("Not implemented.");}
        SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, inPlaceHoldIdentity: string): SetHoldOnMailboxesResponse{ throw new Error("Not implemented.");}
        SetReadStateForItemsInConversations(idLastSyncTimePairs: System.Collections.Generic.IEnumerable<T>, contextFolderId: FolderId, isRead: boolean, suppressReadReceipts: boolean): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        SetReadStateForItemsInConversations(idLastSyncTimePairs: System.Collections.Generic.IEnumerable<T>, contextFolderId: FolderId, isRead: boolean): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        SetRetentionPolicyForItemsInConversations(idLastSyncTimePairs: System.Collections.Generic.IEnumerable<T>, contextFolderId: FolderId, retentionPolicyType: RetentionType, retentionPolicyTagId: System.Guid): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        SetTeamMailbox(emailAddress: EmailAddress, sharePointSiteUrl: System.Uri, state: TeamMailboxLifecycleState): any{ throw new Error("Not implemented.");}
        SetUserOofSettings(smtpAddress: string, oofSettings: OofSettings): any{ throw new Error("Not implemented.");}
        SubscribeToPullNotifications(folderIds: System.Collections.Generic.IEnumerable<T>, timeout: number, watermark: string, eventTypes: any): PullSubscription{ throw new Error("Not implemented.");}
        SubscribeToPullNotificationsOnAllFolders(timeout: number, watermark: string, eventTypes: any): PullSubscription{ throw new Error("Not implemented.");}
        SubscribeToPushNotifications(folderIds: System.Collections.Generic.IEnumerable<T>, url: System.Uri, frequency: number, watermark: string, callerData: string, eventTypes: any): PushSubscription{ throw new Error("Not implemented.");}
        SubscribeToPushNotifications(folderIds: System.Collections.Generic.IEnumerable<T>, url: System.Uri, frequency: number, watermark: string, eventTypes: any): PushSubscription{ throw new Error("Not implemented.");}
        SubscribeToPushNotificationsOnAllFolders(url: System.Uri, frequency: number, watermark: string, callerData: string, eventTypes: any): PushSubscription{ throw new Error("Not implemented.");}
        SubscribeToPushNotificationsOnAllFolders(url: System.Uri, frequency: number, watermark: string, eventTypes: any): PushSubscription{ throw new Error("Not implemented.");}
        SubscribeToStreamingNotifications(folderIds: System.Collections.Generic.IEnumerable<T>, eventTypes: any): StreamingSubscription{ throw new Error("Not implemented.");}
        SubscribeToStreamingNotificationsOnAllFolders(eventTypes: any): StreamingSubscription{ throw new Error("Not implemented.");}
        SyncFolderHierarchy(propertySet: PropertySet, syncState: string): ChangeCollection<FolderChange>{ throw new Error("Not implemented.");}
        SyncFolderHierarchy(syncFolderId: FolderId, propertySet: PropertySet, syncState: string): ChangeCollection<FolderChange>{ throw new Error("Not implemented.");}
        SyncFolderItems(syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: System.Collections.Generic.IEnumerable<T>, maxChangesReturned: number, syncScope: SyncFolderItemsScope, syncState: string): ChangeCollection<ItemChange>{ throw new Error("Not implemented.");}
        UninstallApp(id: string): any{ throw new Error("Not implemented.");}
        UnpinTeamMailbox(emailAddress: EmailAddress): any{ throw new Error("Not implemented.");}
        Unsubscribe(subscriptionId: string): any{ throw new Error("Not implemented.");}
        UpdateDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: any): System.Collections.ObjectModel.Collection<DelegateUserResponse>{ throw new Error("Not implemented.");}
        UpdateDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: System.Collections.Generic.IEnumerable<T>): System.Collections.ObjectModel.Collection<DelegateUserResponse>{ throw new Error("Not implemented.");}
        UpdateFolder(folder: Folder): any{ throw new Error("Not implemented.");}
        UpdateInboxRules(operations: System.Collections.Generic.IEnumerable<RuleOperation>, removeOutlookRuleBlob: boolean, mailboxSmtpAddress: string): any{ throw new Error("Not implemented.");}
        UpdateInboxRules(operations: System.Collections.Generic.IEnumerable<RuleOperation>, removeOutlookRuleBlob: boolean): any{ throw new Error("Not implemented.");}
        UpdateItem(item: Item, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): Item{ throw new Error("Not implemented.");}
        UpdateItem(item: Item, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): Item{ throw new Error("Not implemented.");}
        UpdateItems(items: System.Collections.Generic.IEnumerable<Item>, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        UpdateItems(items: System.Collections.Generic.IEnumerable<Item>, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): ServiceResponseCollection<TResponse>{ throw new Error("Not implemented.");}
        UpdateUserConfiguration(userConfiguration: UserConfiguration): any{ throw new Error("Not implemented.");}
        Validate(): any{ throw new Error("Not implemented.");}
        ValidateTargetVersion(version: string): any{ throw new Error("Not implemented.");}
    }

    module Microsoft.Exchange.WebServices.Data.ExchangeService {
        export enum RenderingMode {
            Xml = 0,
            JSON = 1
        }
    }
}