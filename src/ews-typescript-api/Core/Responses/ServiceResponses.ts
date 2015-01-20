module Microsoft.Exchange.WebServices.Data {

    export class ServiceResponse {
        get BatchProcessingStopped(): boolean { return (this.result == ServiceResult.Warning) && (this.errorCode == ServiceError.ErrorBatchProcessingStopped); }
        get Result(): ServiceResult { return this.result; }
        get ErrorCode(): ServiceError { return this.errorCode; }
        ErrorMessage: string;
        get ErrorDetails(): { [index: string]: string; } /*System.Collections.Generic.IDictionary<string, string>*/ { return this.errorDetails; }
        get ErrorProperties() { return this.errorProperties; }//System.Collections.ObjectModel.Collection<PropertyDefinitionBase>;
        private result: ServiceResult;
        private errorCode: ServiceError;
        //private errorMessage: string;
        private errorDetails: { [index: string]: string; } = {}; /*System.Collections.Generic.Dictionary<string, string>*/
        private errorProperties: PropertyDefinitionBase[] = [];// System.Collections.ObjectModel.Collection<PropertyDefinitionBase>;

        constructor(soapFaultDetails?: SoapFaultDetails, responseCode?: ServiceError, errorMessage?: string) {

            if (soapFaultDetails) {
                this.result = ServiceResult.Error;
                this.errorCode = soapFaultDetails.ResponseCode;
                this.ErrorMessage = soapFaultDetails.FaultString;
                this.errorDetails = soapFaultDetails.ErrorDetails;
            }

            if (responseCode) {
                this.result = ServiceResult.Error;
                this.errorCode = responseCode;
                this.ErrorMessage = errorMessage;
                this.errorDetails = null;
            }
        }

        InternalThrowIfNecessary(): void {
            if (this.Result == ServiceResult.Error) {
                throw new ServiceResponseException(this);
            }
        }
        Loaded(): void { /* virtual void to be implemented throw new Error("Not implemented.");*/ }
        LoadExtraErrorDetailsFromXml(reader: EwsServiceXmlReader, xmlElementName: string): boolean {
            if (reader.IsElement(XmlNamespace.Messages, XmlElementNames.MessageXml) && !reader.IsEmptyElement) {
                this.ParseMessageXml(reader);

                return true;
            }
            else {
                return false;
            }
        }
        //LoadFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): void {
            if (!reader.IsElement(XmlNamespace.Messages, xmlElementName)) {
                reader.ReadStartElement(XmlNamespace.Messages, xmlElementName);
            }

            var attribute = reader.ReadAttributeValue(null, XmlAttributeNames.ResponseClass);
            debugger;
            this.result = ServiceResult[attribute];


            if (this.result == ServiceResult.Success || this.result == ServiceResult.Warning) {
                if (this.result == ServiceResult.Warning) {
                    reader.Read();
                    if (reader.IsElement(XmlNamespace.Messages, XmlElementNames.MessageText)) {
                        this.ErrorMessage = reader.ReadElementValue();
                    } else debugger;
                }
                reader.Read();
                if (reader.IsElement(XmlNamespace.Messages, XmlElementNames.ResponseCode))
                    this.errorCode = ServiceError[reader.ReadElementValue()];//XmlNamespace.Messages, XmlElementNames.ResponseCode);
                else debugger;
                if (this.result == ServiceResult.Warning) {
                    reader.Read();
                    if (reader.IsElement(XmlNamespace.Messages, XmlElementNames.DescriptiveLinkKey))
                        reader.ReadElementValue();
                    else debugger;
                }

                // If batch processing stopped, EWS returns an empty element. Skip over it.
                if (this.BatchProcessingStopped) {
                    do {
                        reader.Read();
                    }
                    while (!reader.HasRecursiveParent(xmlElementName));
                }
                else {
                    this.ReadElementsFromXml(reader);

                    reader.ReadEndElementIfNecessary(XmlNamespace.Messages, xmlElementName);
                }
            }
            else {
                reader.Read();
                this.ErrorMessage = reader.ReadElementValue();//XmlNamespace.Messages, XmlElementNames.MessageText);
                reader.Read();
                this.errorCode = ServiceError[reader.ReadElementValue()];//XmlNamespace.Messages, XmlElementNames.ResponseCode);

                reader.Read();//ElementValue<int>(XmlNamespace.Messages, XmlElementNames.DescriptiveLinkKey);

                while (reader.HasRecursiveParent(/*XmlNamespace.Messages, */xmlElementName)) {
                    reader.Read();

                    //if (reader.IsStartElement()) {
                    if (!this.LoadExtraErrorDetailsFromXml(reader, reader.LocalName)) {
                        reader.SkipCurrentElement();
                    }
                    //}
                }
                reader.SeekLast();
            }

            this.MapErrorCodeToErrorMessage();

            this.Loaded();
        }
        MapErrorCodeToErrorMessage(): void {
            // Use a better error message when an item cannot be updated because its changeKey is old.
            if (this.ErrorCode == ServiceError.ErrorIrresolvableConflict) {
                this.ErrorMessage = "item is out of date";// Strings.ItemIsOutOfDate;
            }
        }
        ParseMessageXml(reader: EwsServiceXmlReader): void {
            do {
                debugger;
                reader.Read();

                //if (reader.IsStartElement()) {
                switch (reader.LocalName) {
                    case XmlElementNames.Value:
                        this.errorDetails[reader.ReadAttributeValue(null,XmlAttributeNames.Name)] =  reader.ReadElementValue();
                        break;

                    case XmlElementNames.FieldURI:
                        this.errorProperties.push(ServiceObjectSchema.FindPropertyDefinition(reader.ReadAttributeValue(null,XmlAttributeNames.FieldURI)));
                        break;

                    case XmlElementNames.IndexedFieldURI:
                        this.errorProperties.push(
                            new IndexedPropertyDefinition(
                                reader.ReadAttributeValue(null,XmlAttributeNames.FieldURI),
                                reader.ReadAttributeValue(null,XmlAttributeNames.FieldIndex)));
                        break;

                    case XmlElementNames.ExtendedFieldURI:
                        var extendedPropDef = new ExtendedPropertyDefinition();
                        extendedPropDef.LoadFromXml(reader);
                        this.errorProperties.push(extendedPropDef);
                        break;

                    default:
                        break;
                }
                //}
            }
            while (!reader.HasRecursiveParent(/*XmlNamespace.Messages,*/ XmlElementNames.MessageXml));
            reader.SeekLast();
        }
        //ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): void { /* virtualvoid to be implemented throw new Error("Not implemented.");*/ }
        ThrowIfNecessary(): void { this.InternalThrowIfNecessary(); }
    }


    export class ArchiveItemResponse extends ServiceResponse {
        Item: Item;
        private item: Item;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class AttendeeAvailability extends ServiceResponse {
        CalendarEvents: System.Collections.ObjectModel.Collection<CalendarEvent>;
        ViewType: FreeBusyViewType;
        MergedFreeBusyStatus: System.Collections.ObjectModel.Collection<LegacyFreeBusyStatus>;
        WorkingHours: WorkingHours;
        private calendarEvents: System.Collections.ObjectModel.Collection<CalendarEvent>;
        private mergedFreeBusyStatus: System.Collections.ObjectModel.Collection<LegacyFreeBusyStatus>;
        private viewType: FreeBusyViewType;
        private workingHours: WorkingHours;
        LoadFreeBusyViewFromXml(reader: EwsServiceXmlReader, viewType: FreeBusyViewType): any { throw new Error("Not implemented."); }
    }
    export class ConvertIdResponse extends ServiceResponse {
        ConvertedId: AlternateIdBase;
        private convertedId: AlternateIdBase;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class CreateAttachmentResponse extends ServiceResponse {
        Attachment: Attachment;
        private attachment: Attachment;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class CreateFolderResponse extends ServiceResponse {
        private folder: Folder;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder { throw new Error("Not implemented."); }
        Loaded(): any { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class CreateItemResponseBase extends ServiceResponse {
        Items: System.Collections.Generic.List<Item>;
        private items: System.Collections.Generic.List<Item>;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class DelegateManagementResponse extends ServiceResponse {
        DelegateUserResponses: System.Collections.ObjectModel.Collection<DelegateUserResponse>;
        private readDelegateUsers: boolean;
        private delegateUsers: System.Collections.Generic.List<DelegateUser>;
        private delegateUserResponses: System.Collections.ObjectModel.Collection<DelegateUserResponse>;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class DelegateUserResponse extends ServiceResponse {
        DelegateUser: DelegateUser;
        private readDelegateUser: boolean;
        private delegateUser: DelegateUser;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class DeleteAttachmentResponse extends ServiceResponse {
        Attachment: Attachment;
        private attachment: Attachment;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class DisableAppResponse extends ServiceResponse {
    }
    export class ExecuteDiagnosticMethodResponse extends ServiceResponse {
        ReturnValue: System.Xml.XmlDocument;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class ExpandGroupResponse extends ServiceResponse {
        Members: ExpandGroupResults;
        private members: ExpandGroupResults;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class FindConversationResponse extends ServiceResponse {
        Conversations: System.Collections.ObjectModel.Collection<Conversation>;
        Results: FindConversationResults;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class FindFolderResponse extends ServiceResponse {
        Results: FindFoldersResults;
        private results: FindFoldersResults;
        private propertySet: PropertySet;
        CreateFolderInstance(service: ExchangeService, xmlElementName: string): Folder { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class FindItemResponse<TItem> extends ServiceResponse {
        GroupedFindResults: GroupedFindItemsResults<TItem>;
        Results: FindItemsResults<TItem>;
        private results: FindItemsResults<TItem>;
        private isGrouped: boolean;
        private groupedFindResults: GroupedFindItemsResults<TItem>;
        private propertySet: PropertySet;
        CreateItemInstance(service: ExchangeService, xmlElementName: string): TItem { throw new Error("Not implemented."); }
        InternalReadItemsFromJson(jsonObject: JsonObject, propertySet: PropertySet, service: ExchangeService, destinationList: System.Collections.Generic.IList<TItem>): any { throw new Error("Not implemented."); }
        InternalReadItemsFromXml(reader: EwsServiceXmlReader, propertySet: PropertySet, destinationList: System.Collections.Generic.IList<TItem>): any { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetAppManifestsResponse extends ServiceResponse {
        Manifests: System.Collections.ObjectModel.Collection<System.Xml.XmlDocument>;
        Apps: System.Collections.ObjectModel.Collection<ClientApp>;
        private manifests: System.Collections.ObjectModel.Collection<System.Xml.XmlDocument>;
        private apps: System.Collections.ObjectModel.Collection<ClientApp>;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadFromExchange2013(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadFromExchange2013Sp1(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetAppMarketplaceUrlResponse extends ServiceResponse {
        AppMarketplaceUrl: string;
        private appMarketplaceUrl: string;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetAttachmentResponse extends ServiceResponse {
        Attachment: Attachment;
        private attachment: Attachment;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetClientAccessTokenResponse extends ServiceResponse {
        Id: string;
        TokenType: ClientAccessTokenType;
        TokenValue: string;
        TTL: number;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetClientExtensionResponse extends ServiceResponse {
        ClientExtensions: System.Collections.ObjectModel.Collection<ClientExtension>;
        RawMasterTableXml: string;
        private clientExtension: System.Collections.ObjectModel.Collection<ClientExtension>;
        private rawMasterTableXml: string;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetConversationItemsResponse extends ServiceResponse {
        Conversation: ConversationResponse;
        private propertySet: PropertySet;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetDiscoverySearchConfigurationResponse extends ServiceResponse {
        DiscoverySearchConfigurations: DiscoverySearchConfiguration[];
        private configurations: System.Collections.Generic.List<T>;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetEncryptionConfigurationResponse extends ServiceResponse {
        ImageBase64: string;
        EmailText: string;
        PortalText: string;
        DisclaimerText: string;
        private imageBase64: string;
        private emailText: string;
        private portalText: string;
        private disclaimerText: string;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetEventsResponse extends ServiceResponse {
        Results: GetEventsResults;
        private results: GetEventsResults;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }

    export class GetFolderResponse extends ServiceResponse {
        get Folder(): Folder { return this.folder;}
        private folder: Folder;
        private propertySet: PropertySet;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder {
            if (this.Folder != null) {
                return this.Folder;
            }
            else {
                return EwsUtilities.CreateEwsObjectFromXmlElementName<Folder>(service, xmlElementName);
            }
        }
        //ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): void {
            super.ReadElementsFromXml(reader);

            var folders: Folder = reader.ReadServiceObjectsCollectionFromXml<Folder>(
                XmlElementNames.Folders,
                this.GetObjectInstance,
                true,               /* clearPropertyBag */
                this.propertySet,   /* requestedPropertySet */
                false);             /* summaryPropertiesOnly */

            this.folder = folders[0];
        }
    }

    export class GetHoldOnMailboxesResponse extends ServiceResponse {
        HoldResult: MailboxHoldResult;
        private holdResult: MailboxHoldResult;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetInboxRulesResponse extends ServiceResponse {
        Rules: RuleCollection;
        private ruleCollection: RuleCollection;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetItemResponse extends ServiceResponse {
        Item: Item;
        private item: Item;
        private propertySet: PropertySet;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetNonIndexableItemDetailsResponse extends ServiceResponse {
        NonIndexableItemsResult: NonIndexableItemDetailsResult;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetNonIndexableItemStatisticsResponse extends ServiceResponse {
        NonIndexableStatistics: System.Collections.Generic.List<NonIndexableItemStatistic>;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetPasswordExpirationDateResponse extends ServiceResponse {
        PasswordExpirationDate: Date;
        private passwordExpirationDate: Date;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetPhoneCallResponse extends ServiceResponse {
        PhoneCall: PhoneCall;
        private phoneCall: PhoneCall;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetRoomListsResponse extends ServiceResponse {
        RoomLists: EmailAddressCollection;
        private roomLists: EmailAddressCollection;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetRoomsResponse extends ServiceResponse {
        Rooms: System.Collections.ObjectModel.Collection<EmailAddress>;
        private rooms: System.Collections.ObjectModel.Collection<EmailAddress>;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetSearchableMailboxesResponse extends ServiceResponse {
        SearchableMailboxes: SearchableMailbox[];
        FailedMailboxes: FailedSearchMailbox[];
        private searchableMailboxes: System.Collections.Generic.List<T>;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetServerTimeZonesResponse extends ServiceResponse {
        TimeZones: System.Collections.ObjectModel.Collection<System.TimeZoneInfo>;
        private timeZones: System.Collections.ObjectModel.Collection<System.TimeZoneInfo>;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetStreamingEventsResponse extends ServiceResponse {
        Results: GetStreamingEventsResults;
        ErrorSubscriptionIds: System.Collections.Generic.List<string>;
        private results: GetStreamingEventsResults;
        private request: HangingServiceRequestBase;
        LoadExtraErrorDetailsFromXml(reader: EwsServiceXmlReader, xmlElementName: string): boolean { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetUserConfigurationResponse extends ServiceResponse {
        UserConfiguration: UserConfiguration;
        private userConfiguration: UserConfiguration;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetUserOofSettingsResponse extends ServiceResponse {
        OofSettings: OofSettings;
        private oofSettings: OofSettings;
    }
    export class GetUserRetentionPolicyTagsResponse extends ServiceResponse {
        RetentionPolicyTags: RetentionPolicyTag[];
        private retentionPolicyTags: System.Collections.Generic.List<T>;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class InstallAppResponse extends ServiceResponse {
    }

    export class MarkAsJunkResponse extends ServiceResponse {
        MovedItemId: ItemId;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class MoveCopyFolderResponse extends ServiceResponse {
        Folder: Folder;
        private folder: Folder;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class MoveCopyItemResponse extends ServiceResponse {
        Item: Item;
        private item: Item;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class PlayOnPhoneResponse extends ServiceResponse {
        PhoneCallId: PhoneCallId;
        private phoneCallId: PhoneCallId;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class ResolveNamesResponse extends ServiceResponse {
        Resolutions: NameResolutionCollection;
        private resolutions: NameResolutionCollection;
        InternalThrowIfNecessary(): any { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class SearchMailboxesResponse extends ServiceResponse {
        SearchResult: SearchMailboxesResult;
        private searchResult: SearchMailboxesResult;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class SetEncryptionConfigurationResponse extends ServiceResponse {
    }
    export class SetHoldOnMailboxesResponse extends ServiceResponse {
        HoldResult: MailboxHoldResult;
        private holdResult: MailboxHoldResult;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class SubscribeResponse<TSubscription> extends ServiceResponse {
        Subscription: TSubscription;
        private subscription: TSubscription;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class SuggestionsResponse extends ServiceResponse {
        Suggestions: System.Collections.ObjectModel.Collection<Suggestion>;
        private daySuggestions: System.Collections.ObjectModel.Collection<Suggestion>;
        LoadSuggestedDaysFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class SyncResponse<TServiceObject, TChange> extends ServiceResponse {
        Changes: ChangeCollection<TChange>;
        SummaryPropertiesOnly: boolean;
        private changes: ChangeCollection<TChange>;
        private propertySet: PropertySet;
        CreateChangeInstance(): TChange { throw new Error("Not implemented."); }
        GetChangeElementName(): string { throw new Error("Not implemented."); }
        GetChangeIdElementName(): string { throw new Error("Not implemented."); }
        GetIncludesLastInRangeXmlElementName(): string { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class UninstallAppResponse extends ServiceResponse {
    }
    export class UpdateFolderResponse extends ServiceResponse {
        private folder: Folder;
        GetObjectInstance(session: ExchangeService, xmlElementName: string): Folder { throw new Error("Not implemented."); }
        Loaded(): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class UpdateInboxRulesResponse extends ServiceResponse {
        Errors: RuleOperationErrorCollection;
        private errors: RuleOperationErrorCollection;
        LoadExtraErrorDetailsFromXml(reader: EwsServiceXmlReader, xmlElementName: string): boolean { throw new Error("Not implemented."); }
    }
    export class UpdateItemResponse extends ServiceResponse {
        ReturnedItem: Item;
        ConflictCount: number;
        private item: Item;
        private returnedItem: Item;
        private conflictCount: number;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("Not implemented."); }
        Loaded(): any { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }

    class ServiceResponseCollection<TResponse> {
        Count: number;
        Item: TResponse;
        OverallResult: ServiceResult;
        private responses: System.Collections.Generic.List<T>;
        private overallResult: ServiceResult;
        Add(response: TResponse): any { throw new Error("Not implemented."); }
        GetEnumerator(): any { throw new Error("Not implemented."); }
    }

    class SyncFolderHierarchyResponse extends SyncResponse<Folder, FolderChange> {
        SummaryPropertiesOnly: boolean;
        CreateChangeInstance(): FolderChange { throw new Error("Not implemented."); }
        GetChangeElementName(): string { throw new Error("Not implemented."); }
        GetChangeIdElementName(): string { throw new Error("Not implemented."); }
        GetIncludesLastInRangeXmlElementName(): string { throw new Error("Not implemented."); }
    }
    class SyncFolderItemsResponse extends SyncResponse<Item, ItemChange> {
        SummaryPropertiesOnly: boolean;
        CreateChangeInstance(): ItemChange { throw new Error("Not implemented."); }
        GetChangeElementName(): string { throw new Error("Not implemented."); }
        GetChangeIdElementName(): string { throw new Error("Not implemented."); }
        GetIncludesLastInRangeXmlElementName(): string { throw new Error("Not implemented."); }
    }

    class CreateItemResponse extends CreateItemResponseBase {
        private item: Item;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("Not implemented."); }
        Loaded(): any { throw new Error("Not implemented."); }
    }
    class CreateResponseObjectResponse extends CreateItemResponseBase {
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("Not implemented."); }
    }


}