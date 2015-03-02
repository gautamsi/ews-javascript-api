module Microsoft.Exchange.WebServices.Data {
    export class ExchangeServiceBase {
        static AccountIsLocked: System.Net.HttpStatusCode = 456;

        AcceptGzipEncoding: boolean;
        ClientRequestId: string;
        ConnectionGroupName: string;
        CookieContainer: any;//System.Net.CookieContainer;
        Credentials: ExchangeCredentials;
        HttpHeaders: { [index: string]: string };//System.Collections.Generic.IDictionary<string, string>;
        HttpResponseHeaders: {[index:string]:string};//System.Collections.Generic.IDictionary<string, string>;
        HttpWebRequestFactory: IEwsHttpWebRequestFactory;
        KeepAlive: boolean;
        PreAuthenticate: boolean;
        get RequestedServerVersion(): ExchangeVersion { return this.requestedServerVersion;}
        ReturnClientRequestId: boolean;
        SendClientLatencies: boolean;
        ServerInfo: ExchangeServerInfo;
        static SessionKey: any;//System.Byte[];
        SuppressXmlVersionHeader: boolean;
        Timeout: number;
        TimeZone: any;//System.TimeZoneInfo;
        TimeZoneDefinition: TimeZoneDefinition;
        TraceEnabled: boolean;
        TraceFlags: TraceFlags;
        TraceListener: ITraceListener;
        UseDefaultCredentials: boolean;
        UserAgent: string;
        WebProxy: any;//System.Net.IWebProxy;

        //private acceptGzipEncoding: boolean;
        private clientRequestId: string;
        private connectionGroupName: string;
        //private cookieContainer: any;//System.Net.CookieContainer;
        private credentials: ExchangeCredentials;
        private ewsHttpWebRequestFactory: IEwsHttpWebRequestFactory;
        private httpHeaders: { [index: string]: string };//System.Collections.Generic.IDictionary<string, string>;
        private httpResponseHeaders: { [index: string]: string };//System.Collections.Generic.IDictionary<string, string>;
        private keepAlive: boolean;
        private OnResponseHeadersCaptured: ResponseHeadersCapturedHandler;
        private OnSerializeCustomSoapHeaders: Function;// CustomXmlSerializationDelegate;
        private preAuthenticate: boolean;
        private requestedServerVersion: ExchangeVersion;
        private returnClientRequestId: boolean;
        private sendClientLatencies: boolean;
        private serverInfo: ExchangeServerInfo;
        private timeout: number;
        private timeZone: any;//System.TimeZoneInfo;
        private timeZoneDefinition: TimeZoneDefinition;
        private traceEnabled: boolean;
        private traceFlags: TraceFlags;
        private traceListener: ITraceListener;
        private useDefaultCredentials: boolean;
        private userAgent: string;
        private webProxy: any;//System.Net.IWebProxy;

        private static lockObj: any;
        private static binarySecret: any;//System.Byte[];
        private static defaultUserAgent: string;

        constructor(requestedServerVersion: ExchangeVersion) {
            this.requestedServerVersion = requestedServerVersion;
        }


        ConvertDateTimeToUniversalDateTimeString(value: Date): string{ throw new Error("Not implemented.");}
        ConvertStartDateToUnspecifiedDateTime(value: string): Date{ throw new Error("Not implemented.");}
        ConvertUniversalDateTimeStringToLocalDateTime(value: string): Date{ throw new Error("Not implemented.");}
        DoOnSerializeCustomSoapHeaders(writer: any /*System.Xml.XmlWriter*/): void {
            EwsUtilities.Assert(
                writer != null,
                "ExchangeService.DoOnSerializeCustomSoapHeaders",
                "writer is null");

            if (this.OnSerializeCustomSoapHeaders != null) {
                this.OnSerializeCustomSoapHeaders(writer);
            }
        }
        InternalProcessHttpErrorResponse(httpWebResponse: IEwsHttpWebResponse, webException: any, responseHeadersTraceFlag: TraceFlags, responseTraceFlag: TraceFlags): any{ throw new Error("Not implemented.");}
        IsTraceEnabledFor(traceFlags: TraceFlags): boolean { return this.TraceEnabled && ((this.TraceFlags & traceFlags) != 0); }
        PrepareHttpWebRequestForUrl(url: string/*System.Uri*/, acceptGzipEncoding: boolean, allowAutoRedirect: boolean): WinJS.IXHROptions /*IEwsHttpWebRequest*/{
            // Verify that the protocol is something that we can handle
            if (url.toLowerCase().indexOf("https") != 0)// .Scheme != Uri.UriSchemeHttp) && (url.Scheme != Uri.UriSchemeHttps)) {
                throw new ServiceLocalException("unsupported web protocol" + url);//string.Format(Strings.UnsupportedWebProtocol, url.Scheme));
            
            var request: WinJS.IXHROptions = { url:url };
            request.headers = {};


            //request.PreAuthenticate = this.PreAuthenticate;
            //request.Timeout = this.Timeout; //todo: implement this within WinJS.Promise

            this.SetContentType(request);

            request.type = "POST";
            request.headers["User-Agent"] = this.UserAgent || ExchangeService.defaultUserAgent;
            //request.AllowAutoRedirect = allowAutoRedirect;

            //todo: figure out next 3 lines
            //request.CookieContainer = this.CookieContainer;
            //request.KeepAlive = this.keepAlive;
            //request.ConnectionGroupName = this.connectionGroupName;

            if (acceptGzipEncoding) {
                request.headers["Accept-Encoding"] = "gzip,deflate";
            }

            if (!string.IsNullOrEmpty(this.clientRequestId)) {
                request.headers["client-request-id"] =  this.clientRequestId;
                if (this.returnClientRequestId) {
                    request.headers["return-client-request-id"]  = "true";
                }
            }

            //if (this.webProxy != null) {
            //    request.Proxy = this.webProxy;
            //}

            if (this.HttpHeaders) {
                for (var kv in this.HttpHeaders) {
                    request.headers[kv] = this.HttpHeaders[kv];
                }
            }

            //request.UseDefaultCredentials = this.UseDefaultCredentials;
            if (!this.UseDefaultCredentials) {
                var serviceCredentials = this.Credentials;
                if (serviceCredentials == null) {
                    throw new ServiceLocalException("credential is required"/*Strings.CredentialsRequired*/);
                }

                // Make sure that credentials have been authenticated if required
                //serviceCredentials.PreAuthenticate(); //todo: fix preauthenticate if possible

                // Apply credentials to the request
                serviceCredentials.PrepareWebRequest(request);
            }
            else debugger;

            this.httpResponseHeaders = {};

            return request;
        }
        ProcessHttpErrorResponse(httpWebResponse: XMLHttpRequest/*IEwsHttpWebResponse*/, webException: any): any{ throw new Error("Not implemented.");}
        ProcessHttpResponseHeaders(traceType: TraceFlags, response: IEwsHttpWebResponse): any{ throw new Error("Not implemented.");}
        SaveHttpResponseHeaders(headers: any/* System.Net.WebHeaderCollection*/): any{ throw new Error("Not implemented.");}
        SetContentType(request: WinJS.IXHROptions /*IEwsHttpWebRequest*/): void{
            request.headers["Content-Type"] = "text/xml; charset=utf-8";
            request.headers["Accept"] = "text/xml";
        }
        SetCustomUserAgent(userAgent: string): any{ throw new Error("Not implemented.");}
        TraceHttpRequestHeaders(traceType: TraceFlags, request: IEwsHttpWebRequest): any{ throw new Error("Not implemented.");}
        TraceHttpResponseHeaders(traceType: TraceFlags, response: IEwsHttpWebResponse): any{ throw new Error("Not implemented.");}
        TraceMessage(traceType: TraceFlags, logEntry: string): any{ throw new Error("Not implemented.");}
        TraceXml(traceType: TraceFlags, stream: any): any{ throw new Error("Not implemented.");}
        Validate(): any{ throw new Error("Not implemented.");}
    }
    export class ExchangeService extends ExchangeServiceBase {
        private static TargetServerVersionHeaderName: string = "X-EWS-TargetVersion";
        Url: string;//System.Uri;
        ImpersonatedUserId: ImpersonatedUserId;
        PrivilegedUserId: PrivilegedUserId;
        ManagementRoles: ManagementRoles;
        PreferredCulture: any;//System.Globalization.CultureInfo;
        DateTimePrecision: DateTimePrecision;
        FileAttachmentContentHandler: IFileAttachmentContentHandler;
        TimeZone: any;// System.TimeZoneInfo;
        UnifiedMessaging: UnifiedMessaging;
        EnableScpLookup: boolean;
        Exchange2007CompatibilityMode: boolean;
        RenderingMethod:Microsoft.Exchange.WebServices.Data.ExchangeService.RenderingMode;
        TraceEnablePrettyPrinting: boolean;
        TargetServerVersion: string;
        private url: string;//System.Uri;
        private preferredCulture: any;// System.Globalization.CultureInfo;
        private dateTimePrecision: DateTimePrecision;
        private impersonatedUserId: ImpersonatedUserId;
        private privilegedUserId: PrivilegedUserId;
        private managementRoles: ManagementRoles;
        private fileAttachmentContentHandler: IFileAttachmentContentHandler;
        private unifiedMessaging: UnifiedMessaging;
        private enableScpLookup: boolean;
        private renderingMode: Microsoft.Exchange.WebServices.Data.ExchangeService.RenderingMode;
        private traceEnablePrettyPrinting: boolean;
        private targetServerVersion: string;
        private exchange2007CompatibilityMode: boolean;
        AddDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: any[] /*System.Collections.Generic.IEnumerable<T>*/): DelegateUserResponse[]/*System.Collections.ObjectModel.Collection<DelegateUserResponse>*/ { throw new Error("Not implemented."); }
        //AddDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: any): System.Collections.ObjectModel.Collection<DelegateUserResponse> { throw new Error("Not implemented."); }
        AdjustServiceUriFromCredentials(uri: string /*System.Uri*/): string/*System.Uri*/ {
            return (this.Credentials != null)
                ? this.Credentials.AdjustUrl(uri)
                : uri;
        }
        ApplyConversationAction<TResponse extends ServiceResponse>(actionType: ConversationActionType, conversationIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, processRightAway: boolean, categories: StringList, enableAlwaysDelete: boolean, destinationFolderId: FolderId, errorHandlingMode: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        ApplyConversationOneTimeAction<TResponse extends ServiceResponse>(actionType: ConversationActionType, idTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, destinationFolderId: FolderId, deleteType: DeleteMode, isRead: boolean, retentionPolicyType: RetentionType, retentionPolicyTagId: any /*System.Guid*/, flag: Flag, suppressReadReceipts: boolean, errorHandlingMode: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        ArchiveItems<TResponse extends ServiceResponse>(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, sourceFolderId: FolderId): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        AutodiscoverUrl(emailAddress: string, validateRedirectionUrlCallback: any/*Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverRedirectionUrlValidationCallback*/): any { throw new Error("Not implemented."); }
        //AutodiscoverUrl(emailAddress: string): any { throw new Error("Not implemented."); }
        BeginGetEvents(callback: Function /*System.AsyncCallback*/, state: any, subscriptionId: string, watermark: string): Function /*System.IAsyncResult*/ { throw new Error("Not implemented."); }
        BeginGetNonIndexableItemDetails(callback: Function /*System.AsyncCallback*/, state: any, parameters: GetNonIndexableItemDetailsParameters): Function /*System.IAsyncResult*/ { throw new Error("Not implemented."); }
        BeginGetNonIndexableItemStatistics(callback: Function /*System.AsyncCallback*/, state: any, parameters: GetNonIndexableItemStatisticsParameters): Function /*System.IAsyncResult*/ { throw new Error("Not implemented."); }
        BeginSearchMailboxes(callback: Function /*System.AsyncCallback*/, state: any, searchParameters: SearchMailboxesParameters): Function /*System.IAsyncResult*/ { throw new Error("Not implemented."); }
        BeginSubscribeToPullNotifications(callback: Function /*System.AsyncCallback*/, state: any, folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, timeout: number, watermark: string, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("Not implemented."); }
        BeginSubscribeToPullNotificationsOnAllFolders(callback: Function /*System.AsyncCallback*/, state: any, timeout: number, watermark: string, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("Not implemented."); }
        BeginSubscribeToPushNotifications(callback: Function /*System.AsyncCallback*/, state: any, folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, url: string /*System.Uri*/, frequency: number, watermark: string, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("Not implemented."); }
        //BeginSubscribeToPushNotifications(callback: Function /*System.AsyncCallback*/, state: any, folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, url: string /*System.Uri*/, frequency: number, watermark: string, callerData: string, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("Not implemented."); }
        BeginSubscribeToPushNotificationsOnAllFolders(callback: Function /*System.AsyncCallback*/, state: any, url: string /*System.Uri*/, frequency: number, watermark: string, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("Not implemented."); }
        //BeginSubscribeToPushNotificationsOnAllFolders(callback: Function /*System.AsyncCallback*/, state: any, url: string /*System.Uri*/, frequency: number, watermark: string, callerData: string, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("Not implemented."); }
        BeginSubscribeToStreamingNotifications(callback: Function /*System.AsyncCallback*/, state: any, folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("Not implemented."); }
        BeginSubscribeToStreamingNotificationsOnAllFolders(callback: Function /*System.AsyncCallback*/, state: any, eventTypes: any): Function /*System.IAsyncResult*/ { throw new Error("Not implemented."); }
        BeginSyncFolderHierarchy(callback: Function /*System.AsyncCallback*/, state: any, propertySet: PropertySet, syncState: string): Function /*System.IAsyncResult*/ { throw new Error("Not implemented."); }
        //BeginSyncFolderHierarchy(callback: Function /*System.AsyncCallback*/, state: any, syncFolderId: FolderId, propertySet: PropertySet, syncState: string): Function /*System.IAsyncResult*/ { throw new Error("Not implemented."); }
        BeginSyncFolderItems(callback: Function /*System.AsyncCallback*/, state: any, syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, maxChangesReturned: number, syncScope: SyncFolderItemsScope, syncState: string): Function /*System.IAsyncResult*/ { throw new Error("Not implemented."); }
        BeginUnsubscribe(callback: Function /*System.AsyncCallback*/, state: any, subscriptionId: string): Function /*System.IAsyncResult*/ { throw new Error("Not implemented."); }
        BindToFolderAs<TFolder extends Folder>(folderId: FolderId, propertySet: PropertySet): TFolder {
            var result = this.BindToFolder(folderId, propertySet);
            debugger;
            if (result instanceof Folder) //todo: implement instanceOf TFolder
            {
                return <TFolder>result;
            }
            else {
                //throw new ServiceLocalException(
                //    string.Format(
                //        Strings.FolderTypeNotCompatible,
                //        result.GetType().Name,
                //        typeof (TFolder).Name));
            }
        }

        BindToFolder(folderId: FolderId, propertySet: PropertySet): Folder {
            EwsUtilities.ValidateParam(folderId, "folderId");
            EwsUtilities.ValidateParam(propertySet, "propertySet");

            var request: GetFolderRequest = new GetFolderRequest(this, ServiceErrorHandling.ThrowOnError);

            request.FolderIds.Add(folderId);
            request.PropertySet = propertySet;

            var responses: ServiceResponseCollection<GetFolderResponse> =<any> request.Execute();

            return responses[0].Folder;
        }
        //BindToItem(itemId: ItemId, propertySet: PropertySet): Item { throw new Error("Not implemented."); }
        ////BindToItem(itemId: ItemId, propertySet: PropertySet): any { throw new Error("Not implemented."); }
        //BindToItems(itemIds: TResponse[] /*System.Collections.Generic.IEnumerable<T>*/, propertySet: PropertySet): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //BuildGetEventsRequest(subscriptionId: string, watermark: string): GetEventsRequest { throw new Error("Not implemented."); }
        //BuildSubscribeToPullNotificationsRequest(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, timeout: number, watermark: string, eventTypes: any): SubscribeToPullNotificationsRequest { throw new Error("Not implemented."); }
        //BuildSubscribeToPushNotificationsRequest(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, url: string /*System.Uri*/, frequency: number, watermark: string, callerData: string, eventTypes: any): SubscribeToPushNotificationsRequest { throw new Error("Not implemented."); }
        //BuildSubscribeToStreamingNotificationsRequest(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, eventTypes: any): SubscribeToStreamingNotificationsRequest { throw new Error("Not implemented."); }
        //BuildSyncFolderHierarchyRequest(syncFolderId: FolderId, propertySet: PropertySet, syncState: string): SyncFolderHierarchyRequest { throw new Error("Not implemented."); }
        //BuildSyncFolderItemsRequest(syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, maxChangesReturned: number, syncScope: SyncFolderItemsScope, syncState: string): SyncFolderItemsRequest { throw new Error("Not implemented."); }
        //BuildUnsubscribeRequest(subscriptionId: string): UnsubscribeRequest { throw new Error("Not implemented."); }
        //ConvertId(id: AlternateIdBase, destinationFormat: IdFormat): AlternateIdBase { throw new Error("Not implemented."); }
        //ConvertIds(ids: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFormat: IdFormat): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //CopyFolder(folderId: FolderId, destinationFolderId: FolderId): Folder { throw new Error("Not implemented."); }
        //CopyItem(itemId: ItemId, destinationFolderId: FolderId): Item { throw new Error("Not implemented."); }
        //CopyItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        ////CopyItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId, returnNewItemIds: boolean): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //CopyItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, destinationFolderId: FolderId): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //CreateAttachments(parentItemId: string, attachments: any[] /*System.Collections.Generic.IEnumerable<T>*/): ServiceResponseCollection<CreateAttachmentResponse> { throw new Error("Not implemented."); }
        //CreateFolder(folder: Folder, parentFolderId: FolderId): any { throw new Error("Not implemented."); }
        //CreateGetNonIndexableItemDetailsRequest(parameters: GetNonIndexableItemDetailsParameters): GetNonIndexableItemDetailsRequest { throw new Error("Not implemented."); }
        //CreateGetNonIndexableItemStatisticsRequest(parameters: GetNonIndexableItemStatisticsParameters): GetNonIndexableItemStatisticsRequest { throw new Error("Not implemented."); }
        //CreateItem(item: Item, parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): any { throw new Error("Not implemented."); }
        //CreateItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //CreateSearchMailboxesRequest(searchParameters: SearchMailboxesParameters): SearchMailboxesRequest { throw new Error("Not implemented."); }
        //CreateUserConfiguration(userConfiguration: UserConfiguration): any { throw new Error("Not implemented."); }
        //DefaultAutodiscoverRedirectionUrlValidationCallback(redirectionUrl: string): boolean { throw new Error("Not implemented."); }
        //DeleteAttachments(attachments: any[] /*System.Collections.Generic.IEnumerable<T>*/): ServiceResponseCollection<DeleteAttachmentResponse> { throw new Error("Not implemented."); }
        //DeleteFolder(folderId: FolderId, deleteMode: DeleteMode): any { throw new Error("Not implemented."); }
        //DeleteItem(itemId: ItemId, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipts: boolean): any { throw new Error("Not implemented."); }
        ////DeleteItem(itemId: ItemId, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("Not implemented."); }
        ////DeleteItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        ////DeleteItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipt: boolean): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //DeleteItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, deleteMode: DeleteMode): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //DeleteUserConfiguration(name: string, parentFolderId: FolderId): any { throw new Error("Not implemented."); }
        //DisableAlwaysCategorizeItemsInConversations(conversationId: any[] /*System.Collections.Generic.IEnumerable<T>*/, processSynchronously: boolean): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //DisableAlwaysDeleteItemsInConversations(conversationId: any[] /*System.Collections.Generic.IEnumerable<T>*/, processSynchronously: boolean): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //DisableAlwaysMoveItemsInConversations(conversationIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, processSynchronously: boolean): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //DisableApp(id: string, disableReason: DisableReasonType): any { throw new Error("Not implemented."); }
        //EmptyFolder(folderId: FolderId, deleteMode: DeleteMode, deleteSubFolders: boolean): any { throw new Error("Not implemented."); }
        //EnableAlwaysCategorizeItemsInConversations(conversationId: any[] /*System.Collections.Generic.IEnumerable<T>*/, categories: System.Collections.Generic.IEnumerable<string>, processSynchronously: boolean): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //EnableAlwaysDeleteItemsInConversations(conversationId: any[] /*System.Collections.Generic.IEnumerable<T>*/, processSynchronously: boolean): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //EnableAlwaysMoveItemsInConversations(conversationId: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId, processSynchronously: boolean): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //EndGetEvents(asyncResult: Function /*System.IAsyncResult*/): GetEventsResults { throw new Error("Not implemented."); }
        //EndGetNonIndexableItemDetails(asyncResult: Function /*System.IAsyncResult*/): GetNonIndexableItemDetailsResponse { throw new Error("Not implemented."); }
        //EndGetNonIndexableItemStatistics(asyncResult: Function /*System.IAsyncResult*/): GetNonIndexableItemStatisticsResponse { throw new Error("Not implemented."); }
        //EndSearchMailboxes(asyncResult: Function /*System.IAsyncResult*/): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //EndSubscribeToPullNotifications(asyncResult: Function /*System.IAsyncResult*/): PullSubscription { throw new Error("Not implemented."); }
        //EndSubscribeToPushNotifications(asyncResult: Function /*System.IAsyncResult*/): PushSubscription { throw new Error("Not implemented."); }
        //EndSubscribeToStreamingNotifications(asyncResult: Function /*System.IAsyncResult*/): StreamingSubscription { throw new Error("Not implemented."); }
        //EndSyncFolderHierarchy(asyncResult: Function /*System.IAsyncResult*/): ChangeCollection<FolderChange> { throw new Error("Not implemented."); }
        //EndSyncFolderItems(asyncResult: Function /*System.IAsyncResult*/): ChangeCollection<ItemChange> { throw new Error("Not implemented."); }
        //EndUnsubscribe(asyncResult: Function /*System.IAsyncResult*/): any { throw new Error("Not implemented."); }
        //ExecuteDiagnosticMethod(verb: string, parameter: System.Xml.XmlNode): System.Xml.XmlDocument { throw new Error("Not implemented."); }
        //ExpandGroup(address: string, routingType: string): ExpandGroupResults { throw new Error("Not implemented."); }
        ////ExpandGroup(groupId: ItemId): ExpandGroupResults { throw new Error("Not implemented."); }
        ////ExpandGroup(smtpAddress: string): ExpandGroupResults { throw new Error("Not implemented."); }
        ////ExpandGroup(emailAddress: EmailAddress): ExpandGroupResults { throw new Error("Not implemented."); }
        //FindAppointments(parentFolderName: WellKnownFolderName, calendarView: CalendarView): FindItemsResults<TItem> { throw new Error("Not implemented."); }
        ////FindAppointments(parentFolderId: FolderId, calendarView: CalendarView): FindItemsResults<TItem> { throw new Error("Not implemented."); }
        ////FindConversation(view: ViewBase, folderId: FolderId): System.Collections.Generic.ICollection<T> { throw new Error("Not implemented."); }
        ////FindConversation(view: ViewBase, folderId: FolderId, queryString: string, returnHighlightTerms: boolean): FindConversationResults { throw new Error("Not implemented."); }
        ////FindConversation(view: ViewBase, folderId: FolderId, queryString: string): System.Collections.Generic.ICollection<T> { throw new Error("Not implemented."); }
        ////FindConversation(view: ViewBase, folderId: FolderId, queryString: string, returnHighlightTerms: boolean, mailboxScope: MailboxSearchLocation): FindConversationResults { throw new Error("Not implemented."); }
        //FindFolders(parentFolderId: FolderId, searchFilter: SearchFilter, view: FolderView): FindFoldersResults { throw new Error("Not implemented."); }
        ////FindFolders(parentFolderId: FolderId, view: FolderView): FindFoldersResults { throw new Error("Not implemented."); }
        ////FindFolders(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: FolderView): FindFoldersResults { throw new Error("Not implemented."); }
        ////FindFolders(parentFolderName: WellKnownFolderName, view: FolderView): FindFoldersResults { throw new Error("Not implemented."); }
        //FindItems(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): GroupedFindItemsResults<TItem> { throw new Error("Not implemented."); }
        ////FindItems(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): GroupedFindItemsResults<TItem> { throw new Error("Not implemented."); }
        ////FindItems(parentFolderName: WellKnownFolderName, queryString: string, view: ViewBase, groupBy: Grouping): GroupedFindItemsResults<TItem> { throw new Error("Not implemented."); }
        ////FindItems(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        ////FindItems(parentFolderId: FolderId, view: ViewBase, groupBy: Grouping): GroupedFindItemsResults<TItem> { throw new Error("Not implemented."); }
        ////FindItems(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase): FindItemsResults<TItem> { throw new Error("Not implemented."); }
        ////FindItems(parentFolderName: WellKnownFolderName, view: ViewBase): FindItemsResults<TItem> { throw new Error("Not implemented."); }
        ////FindItems(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: ViewBase): FindItemsResults<TItem> { throw new Error("Not implemented."); }
        ////FindItems(parentFolderId: FolderId, queryString: string, returnHighlightTerms: boolean, view: ViewBase): FindItemsResults<TItem> { throw new Error("Not implemented."); }
        ////FindItems(parentFolderName: WellKnownFolderName, queryString: string, view: ViewBase): FindItemsResults<TItem> { throw new Error("Not implemented."); }
        ////FindItems(parentFolderId: FolderId, queryString: string, view: ViewBase): FindItemsResults<TItem> { throw new Error("Not implemented."); }
        ////FindItems(parentFolderId: FolderId, queryString: string, view: ViewBase, groupBy: Grouping): GroupedFindItemsResults<TItem> { throw new Error("Not implemented."); }
        ////FindItems(parentFolderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, searchFilter: SearchFilter, queryString: string, view: ViewBase, groupBy: Grouping, errorHandlingMode: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        ////FindItems(parentFolderId: FolderId, view: ViewBase): FindItemsResults<TItem> { throw new Error("Not implemented."); }
        ////FindItems(parentFolderId: FolderId, queryString: string, returnHighlightTerms: boolean, view: ViewBase, groupBy: Grouping): GroupedFindItemsResults<TItem> { throw new Error("Not implemented."); }
        //GetAppManifests(apiVersionSupported: string, schemaVersionSupported: string): System.Collections.ObjectModel.Collection<ClientApp> { throw new Error("Not implemented."); }
        ////GetAppManifests(): System.Collections.ObjectModel.Collection<System.Xml.XmlDocument> { throw new Error("Not implemented."); }
        //GetAppMarketplaceUrl(apiVersionSupported: string, schemaVersionSupported: string): string { throw new Error("Not implemented."); }
        ////GetAppMarketplaceUrl(): string { throw new Error("Not implemented."); }
        //GetAttachment(attachment: Attachment, bodyType: BodyType, additionalProperties: any[] /*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("Not implemented."); }
        ////GetAttachments(attachments: any, bodyType: BodyType, additionalProperties: any[] /*System.Collections.Generic.IEnumerable<T>*/): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        ////GetAttachments(attachmentIds: System.String[], bodyType: BodyType, additionalProperties: any[] /*System.Collections.Generic.IEnumerable<T>*/): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //GetAutodiscoverUrl(emailAddress: string, requestedServerVersion: ExchangeVersion, validateRedirectionUrlCallback: Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverRedirectionUrlValidationCallback): string /*System.Uri*/ { throw new Error("Not implemented."); }
        //GetClientAccessToken(tokenRequests: ClientAccessTokenRequest[]): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        ////GetClientAccessToken(idAndTypes: any[] /*System.Collections.Generic.IEnumerable<T>*/): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //GetClientExtension(requestedExtensionIds: StringList, shouldReturnEnabledOnly: boolean, isUserScope: boolean, userId: string, userEnabledExtensionIds: StringList, userDisabledExtensionIds: StringList, isDebug: boolean): GetClientExtensionResponse { throw new Error("Not implemented."); }
        //GetConversationItems(conversations: any[] /*System.Collections.Generic.IEnumerable<T>*/, propertySet: PropertySet, foldersToIgnore: any[] /*System.Collections.Generic.IEnumerable<T>*/, sortOrder: ConversationSortOrder): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        ////GetConversationItems(conversationId: ConversationId, propertySet: PropertySet, syncState: string, foldersToIgnore: any[] /*System.Collections.Generic.IEnumerable<T>*/, sortOrder: ConversationSortOrder): ConversationResponse { throw new Error("Not implemented."); }
        ////GetConversationItems(conversations: any[] /*System.Collections.Generic.IEnumerable<T>*/, propertySet: PropertySet, foldersToIgnore: any[] /*System.Collections.Generic.IEnumerable<T>*/, sortOrder: ConversationSortOrder, mailboxScope: MailboxSearchLocation): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //GetDelegates(mailbox: Mailbox, includePermissions: boolean, userIds: any[] /*System.Collections.Generic.IEnumerable<T>*/): DelegateInformation { throw new Error("Not implemented."); }
        ////GetDelegates(mailbox: Mailbox, includePermissions: boolean, userIds: any): DelegateInformation { throw new Error("Not implemented."); }
        //GetDiscoverySearchConfiguration(searchId: string, expandGroupMembership: boolean, inPlaceHoldConfigurationOnly: boolean): GetDiscoverySearchConfigurationResponse { throw new Error("Not implemented."); }
        //GetEncryptionConfiguration(): GetEncryptionConfigurationResponse { throw new Error("Not implemented."); }
        //GetEvents(subscriptionId: string, watermark: string): GetEventsResults { throw new Error("Not implemented."); }
        //GetEwsUrlFromResponse(response: Microsoft.Exchange.WebServices.Autodiscover.GetUserSettingsResponse, isExternal: boolean): string /*System.Uri*/ { throw new Error("Not implemented."); }
        //GetHoldOnMailboxes(holdId: string): GetHoldOnMailboxesResponse { throw new Error("Not implemented."); }
        //GetInboxRules(): RuleCollection { throw new Error("Not implemented."); }
        ////GetInboxRules(mailboxSmtpAddress: string): RuleCollection { throw new Error("Not implemented."); }
        //GetNonIndexableItemDetails(mailboxes: System.String[]): GetNonIndexableItemDetailsResponse { throw new Error("Not implemented."); }
        ////GetNonIndexableItemDetails(mailboxes: System.String[], pageSize: number, pageItemReference: string, pageDirection: SearchPageDirection): GetNonIndexableItemDetailsResponse { throw new Error("Not implemented."); }
        ////GetNonIndexableItemDetails(parameters: GetNonIndexableItemDetailsParameters): GetNonIndexableItemDetailsResponse { throw new Error("Not implemented."); }
        //GetNonIndexableItemStatistics(parameters: GetNonIndexableItemStatisticsParameters): GetNonIndexableItemStatisticsResponse { throw new Error("Not implemented."); }
        ////GetNonIndexableItemStatistics(mailboxes: System.String[]): GetNonIndexableItemStatisticsResponse { throw new Error("Not implemented."); }
        //GetPasswordExpirationDate(mailboxSmtpAddress: string): Date { throw new Error("Not implemented."); }
        //GetRoomLists(): EmailAddressCollection { throw new Error("Not implemented."); }
        //GetRooms(emailAddress: EmailAddress): System.Collections.ObjectModel.Collection<EmailAddress> { throw new Error("Not implemented."); }
        //GetSearchableMailboxes(searchFilter: string, expandGroupMembership: boolean): GetSearchableMailboxesResponse { throw new Error("Not implemented."); }
        //GetUserAvailability(attendees: System.Collections.Generic.IEnumerable<AttendeeInfo>, timeWindow: TimeWindow, requestedData: AvailabilityData, options: AvailabilityOptions): GetUserAvailabilityResults { throw new Error("Not implemented."); }
        ////GetUserAvailability(attendees: System.Collections.Generic.IEnumerable<AttendeeInfo>, timeWindow: TimeWindow, requestedData: AvailabilityData): GetUserAvailabilityResults { throw new Error("Not implemented."); }
        //GetUserConfiguration(name: string, parentFolderId: FolderId, properties: UserConfigurationProperties): UserConfiguration { throw new Error("Not implemented."); }
        //GetUserOofSettings(smtpAddress: string): OofSettings { throw new Error("Not implemented."); }
        //GetUserRetentionPolicyTags(): GetUserRetentionPolicyTagsResponse { throw new Error("Not implemented."); }
        //InstallApp(manifestStream: any /*System.IO.Stream*/): any { throw new Error("Not implemented."); }
        //InternalBindToItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, propertySet: PropertySet, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //InternalConvertIds(ids: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFormat: IdFormat, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //InternalCopyItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId, returnNewItemIds: boolean, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //InternalCreateItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //InternalCreateResponseObject(responseObject: ServiceObject, parentFolderId: FolderId, messageDisposition: MessageDisposition): System.Collections.Generic.List<Item> { throw new Error("Not implemented."); }
        //InternalDeleteItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, errorHandling: ServiceErrorHandling, suppressReadReceipts: boolean): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //InternalFindFolders(parentFolderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, searchFilter: SearchFilter, view: FolderView, errorHandlingMode: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //InternalGetAttachments(attachments: any[] /*System.Collections.Generic.IEnumerable<T>*/, bodyType: BodyType, additionalProperties: any[] /*System.Collections.Generic.IEnumerable<T>*/, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //InternalGetConversationItems(conversations: any[] /*System.Collections.Generic.IEnumerable<T>*/, propertySet: PropertySet, foldersToIgnore: any[] /*System.Collections.Generic.IEnumerable<T>*/, sortOrder: ConversationSortOrder, mailboxScope: MailboxSearchLocation, maxItemsToReturn: number, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //InternalLoadPropertiesForItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, propertySet: PropertySet, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //InternalMoveItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId, returnNewItemIds: boolean, errorHandling: ServiceErrorHandling): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //InternalUpdateItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, errorHandling: ServiceErrorHandling, suppressReadReceipt: boolean): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //IsMajorMinor(versionPart: string): boolean { throw new Error("Not implemented."); }
        //LoadPropertiesForFolder(folder: Folder, propertySet: PropertySet): any { throw new Error("Not implemented."); }
        //LoadPropertiesForItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, propertySet: PropertySet): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //LoadPropertiesForUserConfiguration(userConfiguration: UserConfiguration, properties: UserConfigurationProperties): any { throw new Error("Not implemented."); }
        //MarkAllItemsAsRead(folderId: FolderId, readFlag: boolean, suppressReadReceipts: boolean): any { throw new Error("Not implemented."); }
        //MarkAsJunk(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, isJunk: boolean, moveItem: boolean): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //MoveFolder(folderId: FolderId, destinationFolderId: FolderId): Folder { throw new Error("Not implemented."); }
        //MoveItem(itemId: ItemId, destinationFolderId: FolderId): Item { throw new Error("Not implemented."); }
        //MoveItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        ////MoveItems(itemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, destinationFolderId: FolderId, returnNewItemIds: boolean): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //MoveItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, destinationFolderId: FolderId): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        ////PrepareHttpWebRequest(methodName: string): IEwsHttpWebRequest { throw new Error("Not implemented."); }
        PrepareHttpWebRequest(methodName: string): WinJS.IXHROptions {
            var endpoint = this.Url;
            //this.RegisterCustomBasicAuthModule();

            if (this.RenderingMethod == Microsoft.Exchange.WebServices.Data.ExchangeService.RenderingMode.JSON) {
                //endpoint = new Uri(
                //    endpoint,
                //    string.Format("{0}/{1}{2}", endpoint.AbsolutePath, methodName, endpoint.Query));
            }
            else {
                endpoint = this.AdjustServiceUriFromCredentials(endpoint);
            }

            var request = this.PrepareHttpWebRequestForUrl(
                endpoint,
                this.AcceptGzipEncoding,
                true);

            if (!string.IsNullOrEmpty(this.TargetServerVersion)) {
                request.headers[ExchangeService.TargetServerVersionHeaderName] = this.TargetServerVersion;
            }

            return request;
        }
        //ProcessHttpErrorResponse(httpWebResponse: XMLHttpRequest /*IEwsHttpWebResponse*/, webException: any): any { throw new Error("Not implemented."); }
        //RemoveDelegates(mailbox: Mailbox, userIds: any[] /*System.Collections.Generic.IEnumerable<T>*/): System.Collections.ObjectModel.Collection<DelegateUserResponse> { throw new Error("Not implemented."); }
        ////RemoveDelegates(mailbox: Mailbox, userIds: any): System.Collections.ObjectModel.Collection<DelegateUserResponse> { throw new Error("Not implemented."); }
        //ResolveName(nameToResolve: string, parentFolderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean, contactDataPropertySet: PropertySet): NameResolutionCollection { throw new Error("Not implemented."); }
        ////ResolveName(nameToResolve: string, parentFolderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean): NameResolutionCollection { throw new Error("Not implemented."); }
        ////ResolveName(nameToResolve: string): NameResolutionCollection { throw new Error("Not implemented."); }
        ////ResolveName(nameToResolve: string, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean, contactDataPropertySet: PropertySet): NameResolutionCollection { throw new Error("Not implemented."); }
        ////ResolveName(nameToResolve: string, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean): NameResolutionCollection { throw new Error("Not implemented."); }
        //SearchMailboxes(mailboxQueries: any[] /*System.Collections.Generic.IEnumerable<T>*/, resultType: SearchResultType): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        ////SearchMailboxes(mailboxQueries: any[] /*System.Collections.Generic.IEnumerable<T>*/, resultType: SearchResultType, sortByProperty: string, sortOrder: SortDirection, pageSize: number, pageDirection: SearchPageDirection, pageItemReference: string): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        ////SearchMailboxes(searchParameters: SearchMailboxesParameters): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //SendItem(item: Item, savedCopyDestinationFolderId: FolderId): any { throw new Error("Not implemented."); }
        //SetClientExtension(actions: Function[] /*System.Collections.Generic.List<T>*/): any { throw new Error("Not implemented."); }
        SetContentType(request: WinJS.IXHROptions /*IEwsHttpWebRequest*/): void {
            if (this.renderingMode == Microsoft.Exchange.WebServices.Data.ExchangeService.RenderingMode.Xml) {
                request.headers["Content-Type"] = "text/xml; charset=utf-8";
                request.headers["Accept"] = "text/xml";
            }
            else if (this.renderingMode == Microsoft.Exchange.WebServices.Data.ExchangeService.RenderingMode.JSON) {
                request.headers["Content-Type"] = "application/json; charset=utf-8";
                request.headers["Accept"] = "application/json";
            }
            else {
                super.SetContentType(request);
            }
        }
        //SetEncryptionConfiguration(imageBase64: string, emailText: string, portalText: string, disclaimerText: string): any { throw new Error("Not implemented."); }
        //SetFlagStatusForItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, flagStatus: Flag): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, inPlaceHoldIdentity: string, itemHoldPeriod: string): SetHoldOnMailboxesResponse { throw new Error("Not implemented."); }
        ////SetHoldOnMailboxes(parameters: SetHoldOnMailboxesParameters): SetHoldOnMailboxesResponse { throw new Error("Not implemented."); }
        ////SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, mailboxes: System.String[]): SetHoldOnMailboxesResponse { throw new Error("Not implemented."); }
        ////SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, inPlaceHoldIdentity: string): SetHoldOnMailboxesResponse { throw new Error("Not implemented."); }
        //SetReadStateForItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, isRead: boolean, suppressReadReceipts: boolean): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        ////SetReadStateForItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, isRead: boolean): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //SetRetentionPolicyForItemsInConversations(idLastSyncTimePairs: any[] /*System.Collections.Generic.IEnumerable<T>*/, contextFolderId: FolderId, retentionPolicyType: RetentionType, retentionPolicyTagId: any /*System.Guid*/): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //SetTeamMailbox(emailAddress: EmailAddress, sharePointSiteUrl: string /*System.Uri*/, state: TeamMailboxLifecycleState): any { throw new Error("Not implemented."); }
        //SetUserOofSettings(smtpAddress: string, oofSettings: OofSettings): any { throw new Error("Not implemented."); }
        //SubscribeToPullNotifications(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, timeout: number, watermark: string, eventTypes: any): PullSubscription { throw new Error("Not implemented."); }
        //SubscribeToPullNotificationsOnAllFolders(timeout: number, watermark: string, eventTypes: any): PullSubscription { throw new Error("Not implemented."); }
        //SubscribeToPushNotifications(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, url: string /*System.Uri*/, frequency: number, watermark: string, callerData: string, eventTypes: any): PushSubscription { throw new Error("Not implemented."); }
        ////SubscribeToPushNotifications(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, url: string /*System.Uri*/, frequency: number, watermark: string, eventTypes: any): PushSubscription { throw new Error("Not implemented."); }
        //SubscribeToPushNotificationsOnAllFolders(url: string /*System.Uri*/, frequency: number, watermark: string, callerData: string, eventTypes: any): PushSubscription { throw new Error("Not implemented."); }
        ////SubscribeToPushNotificationsOnAllFolders(url: string /*System.Uri*/, frequency: number, watermark: string, eventTypes: any): PushSubscription { throw new Error("Not implemented."); }
        //SubscribeToStreamingNotifications(folderIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, eventTypes: any): StreamingSubscription { throw new Error("Not implemented."); }
        //SubscribeToStreamingNotificationsOnAllFolders(eventTypes: any): StreamingSubscription { throw new Error("Not implemented."); }
        //SyncFolderHierarchy(propertySet: PropertySet, syncState: string): ChangeCollection<FolderChange> { throw new Error("Not implemented."); }
        ////SyncFolderHierarchy(syncFolderId: FolderId, propertySet: PropertySet, syncState: string): ChangeCollection<FolderChange> { throw new Error("Not implemented."); }
        //SyncFolderItems(syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: any[] /*System.Collections.Generic.IEnumerable<T>*/, maxChangesReturned: number, syncScope: SyncFolderItemsScope, syncState: string): ChangeCollection<ItemChange> { throw new Error("Not implemented."); }
        //UninstallApp(id: string): any { throw new Error("Not implemented."); }
        //UnpinTeamMailbox(emailAddress: EmailAddress): any { throw new Error("Not implemented."); }
        //Unsubscribe(subscriptionId: string): any { throw new Error("Not implemented."); }
        //UpdateDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: any): System.Collections.ObjectModel.Collection<DelegateUserResponse> { throw new Error("Not implemented."); }
        ////UpdateDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: any[] /*System.Collections.Generic.IEnumerable<T>*/): System.Collections.ObjectModel.Collection<DelegateUserResponse> { throw new Error("Not implemented."); }
        //UpdateFolder(folder: Folder): any { throw new Error("Not implemented."); }
        //UpdateInboxRules(operations: System.Collections.Generic.IEnumerable<RuleOperation>, removeOutlookRuleBlob: boolean, mailboxSmtpAddress: string): any { throw new Error("Not implemented."); }
        ////UpdateInboxRules(operations: System.Collections.Generic.IEnumerable<RuleOperation>, removeOutlookRuleBlob: boolean): any { throw new Error("Not implemented."); }
        //UpdateItem(item: Item, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): Item { throw new Error("Not implemented."); }
        ////UpdateItem(item: Item, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): Item { throw new Error("Not implemented."); }
        //UpdateItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        ////UpdateItems(items: Item[] /*System.Collections.Generic.IEnumerable<Item>*/, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        //UpdateUserConfiguration(userConfiguration: UserConfiguration): any { throw new Error("Not implemented."); }
        //Validate(): any { throw new Error("Not implemented."); }
        //ValidateTargetVersion(version: string): any { throw new Error("Not implemented."); }
    }

    export module Microsoft.Exchange.WebServices.Data.ExchangeService {
        export enum RenderingMode {
            Xml = 0,
            JSON = 1
        }
    }

    
}

//declare module "Exchange.Data" {
//    var _temp = Microsoft.Exchange.WebServices.Data;
//    export =_temp;
//}