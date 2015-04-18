module Microsoft.Exchange.WebServices.Data{
    export class GetDiscoverySearchConfigurationRequest extends SimpleServiceRequestBase {
        SearchId: string;
        ExpandGroupMembership: boolean;
        InPlaceHoldConfigurationOnly: boolean;
        Execute(): GetDiscoverySearchConfigurationResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class GetDiscoverySearchConfigurationResponse extends ServiceResponse {
        DiscoverySearchConfigurations: DiscoverySearchConfiguration[];
        private configurations: any[];//System.Collections.Generic.List<T>;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class DiscoverySearchConfiguration {
        SearchId: string;
        SearchQuery: string;
        SearchableMailboxes: SearchableMailbox[];
        InPlaceHoldIdentity: string;
        ManagedByOrganization: string;
        Language: string;
        LoadFromJson(jsonObject: JsonObject): DiscoverySearchConfiguration { throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): DiscoverySearchConfiguration { throw new Error("Not implemented.");}
    }

    export class GetHoldOnMailboxesRequest extends SimpleServiceRequestBase {
        HoldId: string;
        Execute(): GetHoldOnMailboxesResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class GetHoldOnMailboxesResponse extends ServiceResponse {
        HoldResult: MailboxHoldResult;
        private holdResult: MailboxHoldResult;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class MailboxHoldResult {
        HoldId: string;
        Query: string;
        Statuses: MailboxHoldStatus[];
        LoadFromJson(jsonObject: JsonObject): MailboxHoldResult{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): MailboxHoldResult{ throw new Error("Not implemented.");}
    }
    export class MailboxHoldStatus {
        Mailbox: string;
        Status: HoldStatus;
        AdditionalInfo: string;
    }
    export class GetNonIndexableItemDetailsRequest extends SimpleServiceRequestBase {
        Mailboxes: string[];
        PageSize: number;
        PageItemReference: string;
        PageDirection: SearchPageDirection;
        SearchArchiveOnly: boolean;
        Execute(): GetNonIndexableItemDetailsResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class GetNonIndexableItemDetailsResponse extends ServiceResponse {
        NonIndexableItemsResult: NonIndexableItemDetailsResult;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class NonIndexableItemDetailsResult {
        Items: NonIndexableItem[];
        FailedMailboxes: FailedSearchMailbox[];
        LoadFromJson(jsonObject: JsonObject): NonIndexableItemDetailsResult{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): NonIndexableItemDetailsResult{ throw new Error("Not implemented.");}
    }
    export class NonIndexableItem {
        ItemId: ItemId;
        ErrorCode: ItemIndexError;
        ErrorDescription: string;
        IsPartiallyIndexed: boolean;
        IsPermanentFailure: boolean;
        AttemptCount: number;
        LastAttemptTime: Date;
        AdditionalInfo: string;
        SortValue: string;
        LoadFromXml(reader: EwsServiceXmlReader): NonIndexableItem{ throw new Error("Not implemented.");}
    }
    export class NonIndexableItemParameters {
        Mailboxes: string[];
        SearchArchiveOnly: boolean;
    }
    export class GetNonIndexableItemStatisticsRequest extends SimpleServiceRequestBase {
        Mailboxes: string[];
        SearchArchiveOnly: boolean;
        Execute(): GetNonIndexableItemStatisticsResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class GetNonIndexableItemStatisticsResponse extends ServiceResponse {
        NonIndexableStatistics: NonIndexableItemStatistic[];//System.Collections.Generic.List<NonIndexableItemStatistic>;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class NonIndexableItemStatistic {
        Mailbox: string;
        ItemCount: number;
        ErrorMessage: string;
        LoadFromXml(reader: EwsServiceXmlReader): NonIndexableItemStatistic[]/*System.Collections.Generic.List<NonIndexableItemStatistic>*/{ throw new Error("Not implemented.");}
    }

    export class GetSearchableMailboxesRequest extends SimpleServiceRequestBase {
        SearchFilter: string;
        ExpandGroupMembership: boolean;
        Execute(): GetSearchableMailboxesResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class GetSearchableMailboxesResponse extends ServiceResponse {
        SearchableMailboxes: SearchableMailbox[];
        FailedMailboxes: FailedSearchMailbox[];
        private searchableMailboxes: any[];//System.Collections.Generic.List<T>;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class SearchableMailbox {
        Guid: any;//System.Guid;
        SmtpAddress: string;
        IsExternalMailbox: boolean;
        ExternalEmailAddress: string;
        DisplayName: string;
        IsMembershipGroup: boolean;
        ReferenceId: string;
        LoadFromJson(jsonObject: JsonObject): SearchableMailbox { throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): SearchableMailbox { throw new Error("Not implemented.");}
    }

    export class FailedSearchMailbox {
        Mailbox: string;
        ErrorCode: number;
        ErrorMessage: string;
        IsArchive: boolean;
        LoadFailedMailboxesXml(rootXmlNamespace: XmlNamespace, reader: EwsServiceXmlReader): FailedSearchMailbox[] { throw new Error("Not implemented.");}
    }
    export class SearchMailboxesParameters {
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
    export class SearchMailboxesResult {
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
        GetRecipients(reader: EwsServiceXmlReader, elementName: string): string[] { throw new Error("Not implemented.");}
        LoadExtendedPropertiesXml(reader: EwsServiceXmlReader): ExtendedPropertyCollection { throw new Error("Not implemented.");}
        LoadFromJson(jsonObject: JsonObject): SearchMailboxesResult { throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): SearchMailboxesResult { throw new Error("Not implemented.");}
        LoadKeywordStatsXml(reader: EwsServiceXmlReader): KeywordStatisticsSearchResult[] { throw new Error("Not implemented.");}
        LoadPreviewItemsXml(reader: EwsServiceXmlReader): SearchPreviewItem[] { throw new Error("Not implemented.");}
    }
    export class SearchPreviewItem {
        Id: ItemId;
        Mailbox: PreviewItemMailbox;
        ParentId: ItemId;
        ItemClass: string;
        UniqueHash: string;
        SortValue: string;
        OwaLink: string;
        Sender: string;
        ToRecipients: string[];
        CcRecipients: string[];
        BccRecipients: string[];
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
    export class SearchRefinerItem {
        Name: string;
        Value: string;
        Count: number;
        Token: string;
        LoadFromXml(reader: EwsServiceXmlReader): SearchRefinerItem { throw new Error("Not implemented.");}
    }
    export class PreviewItemMailbox {
        MailboxId: string;
        PrimarySmtpAddress: string;
    }
    export class PreviewItemResponseShape {
        BaseShape: PreviewItemBaseShape;
        AdditionalProperties: ExtendedPropertyDefinition[];
    }
    export class MailboxQuery {
        Query: string;
        MailboxSearchScopes: MailboxSearchScope[];
    }
    export class MailboxSearchScope {
        Mailbox: string;
        SearchScope: MailboxSearchLocation;
        SearchScopeType: MailboxSearchScopeType;
        ExtendedAttributes: ExtendedAttributes;
        private searchScope: MailboxSearchLocation;
        private scopeType: MailboxSearchScopeType;
    }
    export class MailboxStatisticsItem {
        MailboxId: string;
        DisplayName: string;
        ItemCount: number;
        Size: number;
        LoadFromXml(reader: EwsServiceXmlReader): MailboxStatisticsItem { throw new Error("Not implemented.");}
    }
    export class KeywordStatisticsSearchResult {
        Keyword: string;
        ItemHits: number;
        Size: number;
    }
    export class SearchMailboxesRequest extends MultiResponseServiceRequest<SearchMailboxesResponse> {
        SearchQueries: MailboxQuery[];//System.Collections.Generic.List<MailboxQuery>;
        ResultType: SearchResultType;
        PreviewItemResponseShape: PreviewItemResponseShape;
        SortOrder: SortDirection;
        SortByProperty: string;
        Language: string;
        PerformDeduplication: boolean;
        PageSize: number;
        PageItemReference: string;
        PageDirection: SearchPageDirection;
        private /*IDiscoveryVersionable.*/ServerVersion: number;
        private searchQueries: MailboxQuery[];//System.Collections.Generic.List<MailboxQuery>;
        private searchResultType: SearchResultType;
        private sortOrder: SortDirection;
        private sortByProperty: string;
        private performDeduplication: boolean;
        private pageSize: number;
        private pageItemReference: string;
        private pageDirection: SearchPageDirection;
        private previewItemResponseShape: PreviewItemResponseShape;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): SearchMailboxesResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        //ParseResponse(jsonBody: JsonObject): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class SearchMailboxesResponse extends ServiceResponse {
        SearchResult: SearchMailboxesResult;
        private searchResult: SearchMailboxesResult;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }

    export class SetHoldOnMailboxesRequest extends SimpleServiceRequestBase {
        ActionType: HoldAction;
        HoldId: string;
        Query: string;
        Mailboxes: string[];
        Language: string;
        InPlaceHoldIdentity: string;
        ItemHoldPeriod: string;
        Execute(): SetHoldOnMailboxesResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class SetHoldOnMailboxesResponse extends ServiceResponse {
        HoldResult: MailboxHoldResult;
        private holdResult: MailboxHoldResult;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }


}
