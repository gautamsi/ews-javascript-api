/// <reference path="./moment-timezone/moment-timezone.d.ts" />
/// <reference path="./moment/moment-node.d.ts" />
declare module "ews-javascript-api" {

export interface IndexerWithStringKey<TValue> {
    [index: string]: TValue;
}
export interface IndexerWithNumericKey<TValue> {
    [index: number]: TValue;
}
export interface KeyValuePair<TKey, TValue> {
    key: TKey;
    value: TValue;
}
export interface StringKeyPicker<TValue> {
    (value: TValue): string;
}
 class Dictionary<TKey, TValue> {
    /** get all keys */
    Keys: TKey[];
    /**get all items in key,value pair array */
    Items: KeyValuePair<TKey, TValue>[];
    /** get all values */
    Values: TValue[];
    /** get number of objects in dictionary */
    length: number;
    /** get number of objects in the dictionary */
    Count: number;
    constructor(keyPickerFunc: StringKeyPicker<TKey>);
    /** get string values of all keys */
    getStringKeys(): string[];
    /** add value or update the value for key */
    addUpdate(key: TKey, value: TValue): void;
    /** Set value for key */
    set(key: TKey, value: TValue): void;
    /** sets the new entry with old value or optionally new value, use isnull parameter to make sure you are setting a null value instead of old value */
    setEntry(oldKey: string, newKey: TKey): void;
    setEntry(oldKey: TKey, newKey: TKey): void;
    /** get value for key */
    get(key: string): TValue;
    get(key: TKey): TValue;
    /**try get value for key or return exception in IOutParam.exception */
    tryGetValue(key: string, outValue: IOutParam<TValue>): boolean;
    tryGetValue(key: TKey, outValue: IOutParam<TValue>): boolean;
    /**remove key and value for key */
    remove(key: string): boolean;
    remove(key: TKey): boolean;
    /** check if key exist */
    containsKey(key: string): boolean;
    containsKey(key: TKey): boolean;
    /** clear dictionary */
    clear(): void;
}
 class StringPropertyDefinitionBaseDictionary<TKey extends string, TValue extends PropertyDefinitionBase> extends Dictionary<string, TValue> {
}
 class PropertyDefinitionDictionary extends StringPropertyDefinitionBaseDictionary<string, PropertyDefinitionBase> {
}
export interface IndexerWithEnumKey<TKey, TValue> {
    [index: number]: TValue;
}
 class DictionaryWithStringKey<TValue> extends Dictionary<string, TValue> {
    constructor();
}
 class DictionaryWithNumericKey<TValue> extends Dictionary<number, TValue> {
    constructor();
}
 class DictionaryWithPropertyDefitionKey<TKey extends {
    Name?: string;
}, TValue> extends Dictionary<TKey, TValue> {
    constructor();
} enum DateTimeKind {
    Unspecified = 0,
    Utc = 1,
    Local = 2,
}
/**
 * DateTime - basic date time based on moment.js
 */
 class DateTime {
    Kind: DateTimeKind;
    kind: DateTimeKind;
    Date: moment.Moment;
    currentUtcOffset: number;
    static Now: DateTime;
    TotalMilliSeconds: number;
    constructor(date?: DateTime | any, kind?: DateTimeKind);
    Add(quantity: number, unit: string): DateTime;
    static Compare(x: DateTime, y: DateTime): number;
    CompareTo(toDate: DateTime): number;
    Difference(toDate: DateTime): TimeSpan;
    Format(formatting: string): string;
    static Parse(value: any, kind?: DateTimeKind): DateTime;
    ToISOString(): string;
    utcOffset(value: number): void;
    static DateTimeToXSDateTime(dateTime: DateTime): string;
    static DateTimeToXSDate(date: DateTime): string;
}
/**
* TimeZoneInfo
*/
 class TimeZoneInfo {
    static Utc: TimeZoneInfo;
    static Local: TimeZoneInfo;
    constructor(offset: number);
    static IsLocalTimeZone(timeZone: TimeZoneInfo): boolean;
    DisplayName: string;
    static ConvertTime(dateTime: DateTime, sourceTZ: TimeZoneInfo, destinationTZ: TimeZoneInfo): DateTime;
} class TimeSpan implements moment.Duration {
    constructor(args: any);
    humanize(withSuffix?: boolean): string;
    as(units: string): number;
    milliseconds(): number;
    asMilliseconds(): number;
    TotalMilliseconds: number;
    seconds(): number;
    asSeconds(): number;
    TotalSeconds: number;
    minutes(): number;
    asMinutes(): number;
    TotalMinutes: number;
    hours(): number;
    asHours(): number;
    TotalHours: number;
    days(): number;
    asDays(): number;
    TotalDays: number;
    months(): number;
    asMonths(): number;
    TotalMonths: number;
    years(): number;
    asYears(): number;
    TotalYears: number;
    add(n: number, p: string): TimeSpan;
    add(n: number): TimeSpan;
    add(d: TimeSpan): TimeSpan;
    subtract(n: number, p: string): TimeSpan;
    subtract(n: number): TimeSpan;
    subtract(d: TimeSpan): TimeSpan;
    toISOString(): string;
    static Zero: TimeSpan;
    static MaxValueTimeSpan: TimeSpan;
    static MinValueTimeSpan: TimeSpan;
    static FromDays(value: number): TimeSpan;
    static FromHours(value: number): TimeSpan;
    static FromMilliseconds(value: number): TimeSpan;
    static FromMinutes(value: number): TimeSpan;
    static FromSeconds(value: number): TimeSpan;
}/**
 * BootStrap code. to initializes some class to avoid circular reference.
 */
/** Promise type setup */
 function useCustomPromise(promiseObj: IPromiseApi): void; function useCustomXhr(xhrApiObj: IXHRApi): void;
/**#endregion BootStrap code */
 module StringHelper {
    function IsNullOrEmpty(str: string): boolean;
    function Format(source: string, ...args: any[]): string;
    var Empty: string;
    function Repeat(str?: string, times?: number): string;
    function Tabs(times?: number): string;
    function Compare(lhs: string, rhs: string, ignoreCase?: boolean): number;
}
 module EnumHelper {
    function HasFlag(flags: number, checkFlag: number): boolean;
    function ToString(enumObj: any, checkFlag: number, includeZero?: boolean): string;
}
 module ArrayHelper {
    function AddRange<T>(obj: Array<T>, array: Array<T>): void;
    function RemoveEntry<T>(array: Array<T>, entry: T): boolean;
    function Find<T>(array: Array<T>, comparer: (item: T) => boolean): T;
    function OfType<T, U>(array: Array<U>, comparer: (item: U) => boolean): T[];
}
 class TypeSystem {
    static GetProperties(obj: any): string[];
    static GetMethods(obj: any): string[];
    static GetObjectStaticPropertiesByClassName(className: string): string[];
    static GetObjectMethodsByClassName(className: string, instanceMethod?: boolean): string[];
    static GetObjectByClassName(className: string): any;
    static GetJsObjectTypeName(obj: any): string;
    static GetJsObjectTypeName_old(obj: any): string;
}
 class xml2JsObject {
    typeIncludedNS: string[];
    parseXMLNode(xmlNode: Node, soapMode?: boolean, xmlnsRoot?: any): any;
}
export interface ParsedUrl {
    scheme: string;
    authority: string;
    path: string;
    query: string;
    fragment: string;
}
 class UriHelper {
    static parseString(url: string): ParsedUrl;
    static getDomain(url: string): string;
    static getHost(url: string): string;
}
 var DOMParser: any;
 class Convert {
    static toInt(value: any, zeroIfError?: boolean): number;
    static toNumber(value: any): number;
    static toBool(value: any, truefalseString?: boolean, throwIfNotBool?: boolean): boolean;
}
 module base64Helper {
    function btoa(text: string): string;
    function atob(text: string): string;
}export interface IXHROptions {
    type?: string;
    url: string;
    user?: string;
    password?: string;
    headers?: any;
    data?: any;
    responseType?: string;
    customRequestInitializer?: (request: XMLHttpRequest) => void;
}
export interface IPromise<T> {
    cancel?(): void;
    done<U>(onComplete?: (value: T) => any, onError?: (error: any) => any, onProgress?: (progress: any) => void): void;
    then<U>(onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void): IPromise<U>;
    then<U>(onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => U, onProgress?: (progress: any) => void): IPromise<U>;
    then<U>(onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => void, onProgress?: (progress: any) => void): IPromise<U>;
    then<U>(onComplete?: (value: T) => U, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void): IPromise<U>;
    then<U>(onComplete?: (value: T) => U, onError?: (error: any) => U, onProgress?: (progress: any) => void): IPromise<U>;
    then<U>(onComplete?: (value: T) => U, onError?: (error: any) => void, onProgress?: (progress: any) => void): IPromise<U>;
    then<U>(onComplete?: (value: T) => void, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void): IPromise<U>;
    then<U>(onComplete?: (value: T) => void, onError?: (error: any) => U, onProgress?: (progress: any) => void): IPromise<U>;
    then<U>(onComplete?: (value: T) => void, onError?: (error: any) => void, onProgress?: (progress: any) => void): IPromise<U>;
}
export interface IPromiseApi {
    create<T>(init?: (completeDispatch: any, errorDispatch: any, progressDispatch: any) => void, onCancel?: Function): IPromise<T>;
    wrap<U>(value?: U): IPromise<U>;
    type: string;
}
export interface IXHRApi {
    xhr(xhroptions: IXHROptions): IPromise<XMLHttpRequest>;
    type?: string;
}
 class PromiseFactory {
    static create<T>(init?: (completeDispatch: any, errorDispatch: any, progressDispatch: any) => void, onCancel?: Function): IPromise<T>;
    static wrap<U>(value?: U): IPromise<U>;
    static type: string;
    static Promise: IPromiseApi;
    static switchPromise(newPromiseObject: IPromiseApi): void;
} var QPromise: IPromiseApi;
 function setPromise(): void;
 function setPromise(): void; class Strings {
    static CannotRemoveSubscriptionFromLiveConnection: string;
    static ReadAccessInvalidForNonCalendarFolder: string;
    static PropertyDefinitionPropertyMustBeSet: string;
    static ArgumentIsBlankString: string;
    static InvalidAutodiscoverDomainsCount: string;
    static MinutesMustBeBetween0And1439: string;
    static DeleteInvalidForUnsavedUserConfiguration: string;
    static PeriodNotFound: string;
    static InvalidAutodiscoverSmtpAddress: string;
    static InvalidOAuthToken: string;
    static MaxScpHopsExceeded: string;
    static ContactGroupMemberCannotBeUpdatedWithoutBeingLoadedFirst: string;
    static CurrentPositionNotElementStart: string;
    static CannotConvertBetweenTimeZones: string;
    static FrequencyMustBeBetween1And1440: string;
    static CannotSetDelegateFolderPermissionLevelToCustom: string;
    static PartnerTokenIncompatibleWithRequestVersion: string;
    static InvalidAutodiscoverRequest: string;
    static InvalidAsyncResult: string;
    static InvalidMailboxType: string;
    static AttachmentCollectionNotLoaded: string;
    static ParameterIncompatibleWithRequestVersion: string;
    static DayOfWeekIndexMustBeSpecifiedForRecurrencePattern: string;
    static WLIDCredentialsCannotBeUsedWithLegacyAutodiscover: string;
    static PropertyCannotBeUpdated: string;
    static IncompatibleTypeForArray: string;
    static PercentCompleteMustBeBetween0And100: string;
    static AutodiscoverServiceIncompatibleWithRequestVersion: string;
    static InvalidAutodiscoverSmtpAddressesCount: string;
    static ServiceUrlMustBeSet: string;
    static ItemTypeNotCompatible: string;
    static AttachmentItemTypeMismatch: string;
    static UnsupportedWebProtocol: string;
    static EnumValueIncompatibleWithRequestVersion: string;
    static UnexpectedElement: string;
    static InvalidOrderBy: string;
    static NoAppropriateConstructorForItemClass: string;
    static SearchFilterAtIndexIsInvalid: string;
    static DeletingThisObjectTypeNotAuthorized: string;
    static PropertyCannotBeDeleted: string;
    static ValuePropertyMustBeSet: string;
    static TagValueIsOutOfRange: string;
    static ItemToUpdateCannotBeNullOrNew: string;
    static SearchParametersRootFolderIdsEmpty: string;
    static MailboxQueriesParameterIsNotSpecified: string;
    static FolderPermissionHasInvalidUserId: string;
    static InvalidAutodiscoverDomain: string;
    static MailboxesParameterIsNotSpecified: string;
    static ParentFolderDoesNotHaveId: string;
    static DayOfMonthMustBeSpecifiedForRecurrencePattern: string;
    static ClassIncompatibleWithRequestVersion: string;
    static CertificateHasNoPrivateKey: string;
    static InvalidOrUnsupportedTimeZoneDefinition: string;
    static HourMustBeBetween0And23: string;
    static TimeoutMustBeBetween1And1440: string;
    static CredentialsRequired: string;
    static MustLoadOrAssignPropertyBeforeAccess: string;
    static InvalidAutodiscoverServiceResponse: string;
    static CannotCallConnectDuringLiveConnection: string;
    static ObjectDoesNotHaveId: string;
    static CannotAddSubscriptionToLiveConnection: string;
    static MaxChangesMustBeBetween1And512: string;
    static AttributeValueCannotBeSerialized: string;
    static NumberOfDaysMustBePositive: string;
    static SearchFilterMustBeSet: string;
    static EndDateMustBeGreaterThanStartDate: string;
    static InvalidDateTime: string;
    static UpdateItemsDoesNotAllowAttachments: string;
    static TimeoutMustBeGreaterThanZero: string;
    static AutodiscoverInvalidSettingForOutlookProvider: string;
    static InvalidRedirectionResponseReturned: string;
    static ExpectedStartElement: string;
    static DaysOfTheWeekNotSpecified: string;
    static FolderToUpdateCannotBeNullOrNew: string;
    static PartnerTokenRequestRequiresUrl: string;
    static NumberOfOccurrencesMustBeGreaterThanZero: string;
    static StartTimeZoneRequired: string;
    static PropertyAlreadyExistsInOrderByCollection: string;
    static ItemAttachmentMustBeNamed: string;
    static InvalidAutodiscoverSettingsCount: string;
    static LoadingThisObjectTypeNotSupported: string;
    static UserIdForDelegateUserNotSpecified: string;
    static PhoneCallAlreadyDisconnected: string;
    static OperationDoesNotSupportAttachments: string;
    static UnsupportedTimeZonePeriodTransitionTarget: string;
    static IEnumerableDoesNotContainThatManyObject: string;
    static UpdateItemsDoesNotSupportNewOrUnchangedItems: string;
    static ValidationFailed: string;
    static InvalidRecurrencePattern: string;
    static TimeWindowStartTimeMustBeGreaterThanEndTime: string;
    static InvalidAttributeValue: string;
    static FileAttachmentContentIsNotSet: string;
    static AutodiscoverDidNotReturnEwsUrl: string;
    static RecurrencePatternMustHaveStartDate: string;
    static OccurrenceIndexMustBeGreaterThanZero: string;
    static ServiceResponseDoesNotContainXml: string;
    static ItemIsOutOfDate: string;
    static MinuteMustBeBetween0And59: string;
    static NoSoapOrWsSecurityEndpointAvailable: string;
    static ElementNotFound: string;
    static IndexIsOutOfRange: string;
    static PropertyIsReadOnly: string;
    static AttachmentCreationFailed: string;
    static DayOfMonthMustBeBetween1And31: string;
    static ServiceRequestFailed: string;
    static DelegateUserHasInvalidUserId: string;
    static SearchFilterComparisonValueTypeIsNotSupported: string;
    static ElementValueCannotBeSerialized: string;
    static PropertyValueMustBeSpecifiedForRecurrencePattern: string;
    static NonSummaryPropertyCannotBeUsed: string;
    static HoldIdParameterIsNotSpecified: string;
    static TransitionGroupNotFound: string;
    static ObjectTypeNotSupported: string;
    static InvalidTimeoutValue: string;
    static AutodiscoverRedirectBlocked: string;
    static PropertySetCannotBeModified: string;
    static DayOfTheWeekMustBeSpecifiedForRecurrencePattern: string;
    static ServiceObjectAlreadyHasId: string;
    static MethodIncompatibleWithRequestVersion: string;
    static OperationNotSupportedForPropertyDefinitionType: string;
    static InvalidElementStringValue: string;
    static CollectionIsEmpty: string;
    static InvalidFrequencyValue: string;
    static UnexpectedEndOfXmlDocument: string;
    static FolderTypeNotCompatible: string;
    static RequestIncompatibleWithRequestVersion: string;
    static PropertyTypeIncompatibleWhenUpdatingCollection: string;
    static ServerVersionNotSupported: string;
    static DurationMustBeSpecifiedWhenScheduled: string;
    static NoError: string;
    static CannotUpdateNewUserConfiguration: string;
    static ObjectTypeIncompatibleWithRequestVersion: string;
    static NullStringArrayElementInvalid: string;
    static HttpsIsRequired: string;
    static MergedFreeBusyIntervalMustBeSmallerThanTimeWindow: string;
    static SecondMustBeBetween0And59: string;
    static AtLeastOneAttachmentCouldNotBeDeleted: string;
    static IdAlreadyInList: string;
    static BothSearchFilterAndQueryStringCannotBeSpecified: string;
    static AdditionalPropertyIsNull: string;
    static InvalidEmailAddress: string;
    static MaximumRedirectionHopsExceeded: string;
    static AutodiscoverCouldNotBeLocated: string;
    static NoSubscriptionsOnConnection: string;
    static PermissionLevelInvalidForNonCalendarFolder: string;
    static InvalidAuthScheme: string;
    static ValuePropertyNotLoaded: string;
    static PropertyIncompatibleWithRequestVersion: string;
    static OffsetMustBeGreaterThanZero: string;
    static CreateItemsDoesNotAllowAttachments: string;
    static PropertyDefinitionTypeMismatch: string;
    static IntervalMustBeGreaterOrEqualToOne: string;
    static CannotSetPermissionLevelToCustom: string;
    static CannotAddRequestHeader: string;
    static ArrayMustHaveAtLeastOneElement: string;
    static MonthMustBeSpecifiedForRecurrencePattern: string;
    static ValueOfTypeCannotBeConverted: string;
    static ValueCannotBeConverted: string;
    static ServerErrorAndStackTraceDetails: string;
    static FolderPermissionLevelMustBeSet: string;
    static AutodiscoverError: string;
    static ArrayMustHaveSingleDimension: string;
    static InvalidPropertyValueNotInRange: string;
    static RegenerationPatternsOnlyValidForTasks: string;
    static ItemAttachmentCannotBeUpdated: string;
    static EqualityComparisonFilterIsInvalid: string;
    static AutodiscoverServiceRequestRequiresDomainOrUrl: string;
    static InvalidUser: string;
    static AccountIsLocked: string;
    static InvalidDomainName: string;
    static TooFewServiceReponsesReturned: string;
    static CannotSubscribeToStatusEvents: string;
    static InvalidSortByPropertyForMailboxSearch: string;
    static UnexpectedElementType: string;
    static ValueMustBeGreaterThanZero: string;
    static AttachmentCannotBeUpdated: string;
    static CreateItemsDoesNotHandleExistingItems: string;
    static MultipleContactPhotosInAttachment: string;
    static InvalidRecurrenceRange: string;
    static CannotSetBothImpersonatedAndPrivilegedUser: string;
    static NewMessagesWithAttachmentsCannotBeSentDirectly: string;
    static CannotCallDisconnectWithNoLiveConnection: string;
    static IdPropertyMustBeSet: string;
    static ValuePropertyNotAssigned: string;
    static ZeroLengthArrayInvalid: string;
    static HoldMailboxesParameterIsNotSpecified: string;
    static CannotSaveNotNewUserConfiguration: string;
    static ServiceObjectDoesNotHaveId: string;
    static PropertyCollectionSizeMismatch: string;
    static XsDurationCouldNotBeParsed: string;
    static UnknownTimeZonePeriodTransitionType: string;
    static UserPhotoSizeNotSpecified: string;
    static JsonSerializationNotImplemented: string;
    static JsonDeserializationNotImplemented: string;
}
/**
* Uri: c# uri shim for js
*/
 class Uri {
    /**returns string url component, no transformations yet */
    AbsoluteUri: string;
    Host: string;
    Scheme: string;
    constructor(url: string);
    ToString(): string;
    static ParseString(url: string): ParsedUrl;
    static UriSchemeHttp: string;
    static UriSchemeHttps: string;
}
 class XHRFactory {
    static xhr(xhroptions: IXHROptions): IPromise<XMLHttpRequest>;
    static type: string;
    static switchXhr(newXHR: IXHRApi): void;
} class WinJSXHRApi implements IXHRApi {
    xhr(xhroptions: IXHROptions): IPromise<XMLHttpRequest>;
    type: string;
}
 function setXhr(): void;

 class AlternateMailbox {
    Type: string;
    DisplayName: string;
    LegacyDN: string;
    Server: string;
    SmtpAddress: string;
    OwnerSmtpAddress: string;
    LoadFromXml(reader: EwsXmlReader): AlternateMailbox;
    static LoadFromJson(obj: any): AlternateMailbox;
} class AlternateMailboxCollection {
    Entries: AlternateMailbox[];
    static LoadFromXml(reader: EwsXmlReader): AlternateMailboxCollection;
    static LoadFromJson(obj: any): AlternateMailboxCollection;
}
 class AutodiscoverDnsClient {
    FindAutodiscoverHostFromSrv(domain: string): string;
    FindBestMatchingSrvRecord(domain: string): DnsSrvRecord;
}
 class AutodiscoverError {
    Time: string;
    Id: string;
    ErrorCode: number;
    Message: string;
    DebugData: string;
    Parse(reader: EwsXmlReader): AutodiscoverError;
} class AutodiscoverResponseCollection<TResponse extends AutodiscoverResponse> extends AutodiscoverResponse {
    Count: number;
    Item: TResponse;
    Responses: TResponse[];
    constructor();
    __thisIndexer(index: number): TResponse;
    CreateResponseInstance(): TResponse;
    GetEnumerator(): any;
    GetResponseCollectionXmlElementName(): string;
    GetResponseInstanceXmlElementName(): string;
    LoadFromXml(reader: EwsXmlReader, endElementName: string): void;
    LoadFromJson(obj: any): void;
    LoadResponseCollectionFromJson(obj: any): void;
    LoadResponseCollectionFromXml(reader: EwsXmlReader): void;
} class AutodiscoverService extends ExchangeServiceBase {
    static AutodiscoverMaxRedirections: number;
    IsExternal: boolean;
    RedirectionUrlValidationCallback: AutodiscoverRedirectionUrlValidationCallback;
    DnsServerAddress: any;
    EnableScpLookup: boolean;
    GetScpUrlsForDomainCallback: Function;
    Domain: string;
    Url: Uri;
    constructor();
    constructor(domain: string);
    constructor(requestedServerVersion: ExchangeVersion);
    constructor(service: ExchangeServiceBase);
    constructor(url: Uri);
    constructor(domain: string, requestedServerVersion: ExchangeVersion);
    constructor(service: ExchangeServiceBase, requestedServerVersion: ExchangeVersion);
    constructor(url: Uri, domain: string);
    constructor(url: Uri, requestedServerVersion: ExchangeVersion);
    constructor(url: Uri, domain: string, requestedServerVersion: ExchangeVersion);
    CallRedirectionUrlValidationCallback(redirectionUrl: string): boolean;
    DefaultAutodiscoverRedirectionUrlValidationCallback(redirectionUrl: string): boolean;
    GetAutodiscoverEndpointUrl(host: string): IPromise<Uri>;
    GetAutodiscoverServiceHosts(domainName: string): string[];
    GetAutodiscoverServiceUrls(domainName: string): string[];
    GetDomainSettings(domains: string[], settings: DomainSettingName[], requestedVersion: ExchangeVersion): IPromise<GetDomainSettingsResponseCollection>;
    GetDomainSettings(domains: string[], requestedVersion: ExchangeVersion, ...domainSettingNames: DomainSettingName[]): IPromise<GetDomainSettingsResponseCollection>;
    GetDomainSettings(domain: string, requestedVersion: ExchangeVersion, ...domainSettingNames: DomainSettingName[]): IPromise<GetDomainSettingsResponse>;
    GetEndpointsFromHttpResponse(response: XMLHttpRequest): AutodiscoverEndpoints;
    GetRedirectUrl(domainName: string): IPromise<Uri>;
    GetSettings<TGetSettingsResponseCollection, TSettingName>(identities: string[], settings: TSettingName[], requestedVersion: ExchangeVersion, getSettingsMethod: GetSettingsMethod<TGetSettingsResponseCollection, TSettingName>, getDomainMethod: () => string): IPromise<TGetSettingsResponseCollection>;
    GetUserSettings(smtpAddresses: string[], settings: UserSettingName[]): IPromise<GetUserSettingsResponseCollection>;
    GetUserSettings(userSmtpAddress: string, ...userSettingNames: UserSettingName[]): IPromise<GetUserSettingsResponse>;
    GetUsersSettings(userSmtpAddresses: string[], ...userSettingNames: UserSettingName[]): IPromise<GetUserSettingsResponseCollection>;
    InternalGetDomainSettings(domains: string[], settings: DomainSettingName[], requestedVersion: ExchangeVersion, autodiscoverUrlRef: IRefParam<Uri>, thisref: AutodiscoverService, currentHop?: number): IPromise<GetDomainSettingsResponseCollection>;
    InternalGetSoapUserSettings(smtpAddress: string, requestedSettings: UserSettingName[]): IPromise<GetUserSettingsResponse>;
    InternalGetSoapUserSettingsRecursive(smtpAddresses: string[], requestedSettings: UserSettingName[], redirectionEmailAddresses?: string[], currentHop?: number): IPromise<GetUserSettingsResponse>;
    InternalGetUserSettings(smtpAddresses: string[], settings: UserSettingName[], requestedVersion: ExchangeVersion, autodiscoverUrlRef: IRefParam<Uri>, thisref: AutodiscoverService, currentHop?: number): IPromise<GetUserSettingsResponseCollection>;
    ProcessHttpErrorResponse(httpWebResponse: XMLHttpRequest, webException: any): any;
    TraceResponse(response: XMLHttpRequest, memoryStream: any): any;
    TryGetAutodiscoverEndpointUrl(host: string, url: IOutParam<Uri>): IPromise<boolean>;
    TryGetEnabledEndpointsForHost(host: IRefParam<string>, endpoints: IOutParam<AutodiscoverEndpoints>, currentHop?: number): IPromise<boolean>;
    ThrowIfDuplicateRedirection(emailAddress: string, redirectionEmailAddresses: IRefParam<string[]>): void;
    TryGetRedirectionResponse(response: XMLHttpRequest, redirectUrl: IOutParam<Uri>): boolean;
}
export interface GetSettingsMethod<TGetSettingsResponseCollection, TSettingName> {
    (smtpAddresses: string[], settings: TSettingName[], requestedVersion: ExchangeVersion, autodiscoverUrl: IRefParam<Uri>, thisref: AutodiscoverService): IPromise<TGetSettingsResponseCollection>;
}export interface AutodiscoverRedirectionUrlValidationCallback {
    (redirectionUrl: string): boolean;
} class ComparisonHelpers {
    CaseInsensitiveContains(collection: any[], match: string): boolean;
}
 class DirectoryHelper {
    Service: ExchangeServiceBase;
    GetAutodiscoverScpUrlsForDomain(domainName: string): string[];
    GetScpUrlList(domainName: string, ldapPath: string, maxHops: any): string[];
    GetSiteName(): string;
    TraceMessage(message: string): any;
}
 class DocumentSharingLocation {
    ServiceUrl: string;
    LocationUrl: string;
    DisplayName: string;
    SupportedFileExtensions: string[];
    ExternalAccessAllowed: boolean;
    AnonymousAccessAllowed: boolean;
    CanModifyPermissions: boolean;
    IsDefault: boolean;
    LoadFromXml(reader: EwsXmlReader): DocumentSharingLocation;
    static LoadFromJson(obj: any): DocumentSharingLocation;
} class DocumentSharingLocationCollection {
    Entries: DocumentSharingLocation[];
    static LoadFromXml(reader: EwsXmlReader): DocumentSharingLocationCollection;
    static LoadFromJson(obj: any): DocumentSharingLocationCollection;
} class DomainSettingError {
    ErrorCode: AutodiscoverErrorCode;
    ErrorMessage: string;
    SettingName: string;
    LoadFromObject(obj: any): void;
    LoadFromXml(reader: EwsXmlReader): void;
}
 class ProtocolConnection {
    EncryptionMethod: string;
    Hostname: string;
    Port: number;
    LoadFromXml(reader: EwsXmlReader): ProtocolConnection;
} class ProtocolConnectionCollection {
    Connections: ProtocolConnection[];
    constructor();
    static LoadFromXml(reader: EwsXmlReader): ProtocolConnectionCollection;
    static LoadFromJson(obj: any): ProtocolConnectionCollection;
} class UserSettingError {
    ErrorCode: AutodiscoverErrorCode;
    ErrorMessage: string;
    SettingName: string;
    LoadFromXml(reader: EwsXmlReader): any;
    LoadFromJson(obj: any): any;
}
 class WebClientUrl {
    AuthenticationMethods: string;
    Url: string;
    static LoadFromJson(obj: any): WebClientUrl;
    static LoadFromXml(reader: EwsXmlReader): WebClientUrl;
} class WebClientUrlCollection {
    Urls: WebClientUrl[];
    static LoadFromJson(obj: any): WebClientUrlCollection;
    static LoadFromXml(reader: EwsXmlReader): WebClientUrlCollection;
}
 class EwsLogging {
    static DebugLogEnabled: boolean;
    static Assert(condition: boolean, caller: string, message: string): void;
    static Log(message: any, always?: boolean, expandObject?: boolean): void;
    static DebugLog(message: any, expandObject?: boolean): void;
} class EwsServiceJsonReader {
    static ReadAsArray(jsObject: any, xmlElementName: string): any[];
    static ReadBase64ElementValue(obj: any): string;
    static ReadServiceObjectsCollectionFromJson<TServiceObject extends ServiceObject>(jsonResponse: any, service: ExchangeService, collectionJsonElementName: string, getObjectInstanceDelegate: GetObjectInstanceDelegate<TServiceObject>, clearPropertyBag: boolean, requestedPropertySet: PropertySet, summaryPropertiesOnly: boolean): TServiceObject[];
} class EwsServiceMultiResponseXmlReader extends EwsServiceXmlReader {
    Create(stream: any, service: ExchangeService): EwsServiceMultiResponseXmlReader;
    CreateXmlReader(stream: any): any;
    InitializeXmlReader(stream: any): any;
} class EwsServiceXmlReader extends EwsXmlReader {
    Service: ExchangeService;
    constructor(rawXML: string, service: ExchangeService);
    ConvertStringToDateTime(dateTimeString: string): Date;
    ConvertStringToUnspecifiedDate(dateTimeString: string): Date;
    ReadElementValueAsDateTime(): Date;
    ReadElementValueAsUnbiasedDateTimeScopedToServiceTimeZone(): Date;
    ReadElementValueAsUnspecifiedDate(): Date;
} class EwsServiceXmlWriter {
    Service: ExchangeServiceBase;
    static BufferSize: number;
    IsTimeZoneHeaderEmitted: boolean;
    RequireWSSecurityUtilityNamespace: boolean;
    Dispose(): any;
    Flush(): void;
    GetXML(keep?: boolean): string;
    constructor(service: ExchangeServiceBase);
    ConvertObjectToString(value: any): string;
    WriteAttributeString(namespacePrefix: string, localName: string, stringValue: string, alwaysWriteEmptyString?: boolean): void;
    WriteAttributeValue(namespacePrefix: string, localName: string, value: any, alwaysWriteEmptyString?: boolean): void;
    WriteBase64ElementValue(buffer: any): void;
    WriteElementValue(xmlNamespace: XmlNamespace, localName: string, value: any, displayName?: string): void;
    WriteEndElement(): void;
    WriteStartElement(xmlNamespace: XmlNamespace, localName: string): void;
    WriteValue(value: string, name: string): any;
}
 class EwsUtilities {
    static XSFalse: string;
    static XSTrue: string;
    static EwsTypesNamespacePrefix: string;
    static EwsMessagesNamespacePrefix: string;
    static EwsErrorsNamespacePrefix: string;
    static EwsSoapNamespacePrefix: string;
    static EwsXmlSchemaInstanceNamespacePrefix: string;
    static PassportSoapFaultNamespacePrefix: string;
    static WSTrustFebruary2005NamespacePrefix: string;
    static WSAddressingNamespacePrefix: string;
    static AutodiscoverSoapNamespacePrefix: string;
    static WSSecurityUtilityNamespacePrefix: string;
    static WSSecuritySecExtNamespacePrefix: string;
    static EwsTypesNamespace: string;
    static EwsMessagesNamespace: string;
    static EwsErrorsNamespace: string;
    static EwsSoapNamespace: string;
    static EwsSoap12Namespace: string;
    static EwsXmlSchemaInstanceNamespace: string;
    static PassportSoapFaultNamespace: string;
    static WSTrustFebruary2005Namespace: string;
    static WSAddressingNamespace: string;
    static AutodiscoverSoapNamespace: string;
    static WSSecurityUtilityNamespace: string;
    static WSSecuritySecExtNamespace: string;
    static DomainRegex: string;
    static BuildVersion: string;
    static BoolToXSBool(value: boolean): string;
    static BuildEnumDict(enumType: EnumToExchangeVersionMappingHelper): EnumVersionDelegate;
    static GetDictionaryKeyTypeEnum(dictionaryKeyType: DictionaryKeyType): any;
    static ConvertTime(dateTime: DateTime, sourceTimeZone: TimeZoneInfo, destinationTimeZone: TimeZoneInfo): DateTime;
    static CountMatchingChars(str: string, charPredicate: any): number;
    static CreateEwsObjectFromXmlElementName<TServiceObject extends ServiceObject>(service: ExchangeService, xmlElementName: string): TServiceObject;
    static CreateItemFromXmlElementName(itemAttachment: ItemAttachment, xmlElementName: string): Item;
    static DateTimeToXSDate(date: DateTime): string;
    static DateTimeToXSDateTime(dateTime: DateTime): string;
    static DomainFromEmailAddress(emailAddress: string): string;
    static EwsToSystemDayOfWeek(dayOfTheWeek: DayOfTheWeek): any;
    static FindFirstItemOfType<T extends Item>(items: Item[], type: any): T;
    static FormatHttpResponseHeaders(response: any): string;
    static FormatLogMessage(entryKind: string, logEntry: string): string;
    static FormatLogMessageWithXmlContent(entryKind: string, memoryStream: any): string;
    static GetEnumeratedObjectAt(objects: any, index: number): any;
    static GetEnumeratedObjectCount(objects: any): number;
    static GetNamespaceFromUri(namespaceUri: string): XmlNamespace;
    static GetNamespacePrefix(xmlNamespace: XmlNamespace): string;
    static GetNamespaceUri(xmlNamespace: XmlNamespace): string;
    static GetPrintableTypeName(type: any): string;
    static IsLocalTimeZone(timeZone: TimeZoneInfo): boolean;
    static ParseAsUnbiasedDatetimescopedToServicetimeZone(dateString: string, service: ExchangeService): DateTime;
    static ParseEnumValueList<T>(list: any[], value: string, separators: string, enumType: any): void;
    static TimeSpanToXSDuration(timeSpan: TimeSpan): string;
    static TimeSpanToXSTime(timeSpan: TimeSpan): string;
    static XSDurationToTimeSpan(xsDuration: string): TimeSpan;
    static ValidateClassVersion(service: ExchangeService, minimumServerVersion: ExchangeVersion, className: string): any;
    static ValidateDomainNameAllowNull(domainName: string, paramName: string): void;
    static ValidateEnumVersionValue(enumType: EnumToExchangeVersionMappingHelper, enumValue: number, requestVersion: ExchangeVersion): void;
    static ValidateMethodVersion(service: ExchangeService, minimumServerVersion: ExchangeVersion, methodName: string): void;
    static ValidateNonBlankStringParam(param: string, paramName: string): any;
    static ValidateNonBlankStringParamAllowNull(param: string, paramName: string): void;
    static ValidateParam(param: any, paramName: string): void;
    static ValidateParamAllowNull(param: any, paramName: string): void;
    static ValidateParamCollection(collection: any, paramName: string): void;
    static ValidatePropertyVersion(service: ExchangeService, minimumServerVersion: ExchangeVersion, propertyName: string): void;
    static ValidateServiceObjectVersion(serviceObject: ServiceObject, requestVersion: ExchangeVersion): any;
}
export interface EnumToExhcangeVersionDelegateDictionary {
    [index: string]: EnumVersionDelegate;
}
export interface EnumVersionDelegate {
    (value: number): ExchangeVersion;
}
 class EwsXmlReader {
    HasAttributes: boolean;
    IsEmptyElement: boolean;
    LocalName: string;
    NamespacePrefix: string;
    NamespaceUri: string;
    NodeType: number;
    IsRoot: boolean;
    ParentNode: Node;
    CurrentNode: Node;
    Eof: boolean;
    protected xmlDoc: XMLDocument;
    protected currentNode: Node;
    protected treeWalker: TreeWalker;
    JsObject: any;
    constructor(rawXML: string);
    EnsureCurrentNodeIsEndElement(xmlNamespace: XmlNamespace, localName: string): any;
    FormatElementName(namespacePrefix: string, localElementName: string): string;
    GetXmlReaderForNode(): any;
    InitializeXmlReader(stream: any): any;
    InternalReadElement(xmlNamespace: XmlNamespace, localName: string, nodeType: number): any;
    HasRecursiveParent(localName: string, node?: Node): boolean;
    HasRecursiveParentNode(parentNode: Node, parentName: string, node?: Node): boolean;
    IsElement(xmlNamespace: XmlNamespace, localName: string): boolean;
    Read(nodeType?: number): boolean;
    ReadAttributeValue(xmlNamespace: XmlNamespace, attributeName: string): string;
    ReadBase64ElementValue(): any[];
    ReadElementValue(): string;
    ReadEndElement(xmlNamespace: XmlNamespace, localName: string): void;
    ReadEndElementIfNecessary(xmlNamespace: XmlNamespace, localName: string): void;
    ReadInnerXml(): string;
    ReadNullableAttributeValue(attributeName: string): any;
    ReadOuterXml(): string;
    ReadStartElement(xmlNamespace: XmlNamespace, localName: string): void;
    ReadToDescendant(xmlNamespace: XmlNamespace, localName: string): any;
    ReadValue(): string;
    SeekLast(): void;
    SkipCurrentElement(): void;
    SkipElement(xmlNamespace: XmlNamespace, localName: string): any;
    TryReadValue(value: any): boolean;
} class ExchangeServerInfo {
    MajorVersion: number;
    MinorVersion: number;
    MajorBuildNumber: number;
    MinorBuildNumber: number;
    VersionString: string;
    static Parse(jsObject: any): ExchangeServerInfo;
    ToString(): string;
}
 class ExchangeService extends ExchangeServiceBase {
    Url: Uri;
    ImpersonatedUserId: ImpersonatedUserId;
    PrivilegedUserId: PrivilegedUserId;
    ManagementRoles: ManagementRoles;
    PreferredCulture: any;
    DateTimePrecision: DateTimePrecision;
    FileAttachmentContentHandler: IFileAttachmentContentHandler;
    TimeZone: TimeZoneInfo;
    UnifiedMessaging: UnifiedMessaging;
    EnableScpLookup: boolean;
    Exchange2007CompatibilityMode: boolean;
    RenderingMethod: RenderingMode;
    TraceEnablePrettyPrinting: boolean;
    TargetServerVersion: string;
    InternalCreateResponseObject(responseObject: ServiceObject, parentFolderId: FolderId, messageDisposition: MessageDisposition): IPromise<Item[]>;
    BindToFolder(folderId: FolderId, propertySet: PropertySet): IPromise<Folder>;
    BindToFolder<TFolder extends Folder>(folderId: FolderId, propertySet: PropertySet, /** pass Folder or subclass itself, not an instance */ folderType: any): IPromise<TFolder>;
    CopyFolder(folderId: FolderId, destinationFolderId: FolderId): IPromise<Folder>;
    CreateFolder(folder: Folder, parentFolderId: FolderId): IPromise<void>;
    DeleteFolder(folderId: FolderId, deleteMode: DeleteMode): IPromise<void>;
    EmptyFolder(folderId: FolderId, deleteMode: DeleteMode, deleteSubFolders: boolean): IPromise<void>;
    FindFolders(parentFolderId: FolderId, view: FolderView): IPromise<FindFoldersResults>;
    FindFolders(parentFolderName: WellKnownFolderName, view: FolderView): IPromise<FindFoldersResults>;
    FindFolders(parentFolderId: FolderId, searchFilter: SearchFilter, view: FolderView): IPromise<FindFoldersResults>;
    FindFolders(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: FolderView): IPromise<FindFoldersResults>;
    LoadPropertiesForFolder(folder: Folder, propertySet: PropertySet): IPromise<void>;
    MarkAllItemsAsRead(folderId: FolderId, readFlag: boolean, suppressReadReceipts: boolean): IPromise<void>;
    MoveFolder(folderId: FolderId, destinationFolderId: FolderId): IPromise<Folder>;
    UpdateFolder(folder: Folder): IPromise<void>;
    ArchiveItems<TResponse extends ServiceResponse>(itemIds: ItemId[], sourceFolderId: FolderId): IPromise<ServiceResponseCollection<ArchiveItemResponse>>;
    /** new method, //todo: implement other newer code from ews managed api repo //ref:  */
    BindToGroupItems(itemIds: ItemId[], propertySet: PropertySet, anchorMailbox: string): IPromise<ServiceResponseCollection<GetItemResponse>>;
    BindToItem(itemId: ItemId, propertySet: PropertySet): IPromise<Item>;
    BindToItem<TItem extends Item>(itemId: ItemId, propertySet: PropertySet, itemType: any): IPromise<TItem>;
    BindToItems(itemIds: ItemId[], propertySet: PropertySet): IPromise<ServiceResponseCollection<GetItemResponse>>;
    CopyItem(itemId: ItemId, destinationFolderId: FolderId): IPromise<Item>;
    CopyItems(itemIds: ItemId[], destinationFolderId: FolderId): IPromise<ServiceResponseCollection<MoveCopyItemResponse>>;
    CopyItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean): IPromise<ServiceResponseCollection<MoveCopyItemResponse>>;
    CreateItem(item: Item, parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): IPromise<void>;
    CreateItems(items: Item[], parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): IPromise<ServiceResponseCollection<ServiceResponse>>;
    DeleteItem(itemId: ItemId, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): IPromise<void>;
    DeleteItem(itemId: ItemId, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipts: boolean): IPromise<void>;
    DeleteItems(itemIds: ItemId[], deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): IPromise<ServiceResponseCollection<ServiceResponse>>;
    DeleteItems(itemIds: ItemId[], deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipt: boolean): IPromise<ServiceResponseCollection<ServiceResponse>>;
    FindAppointments(parentFolderName: WellKnownFolderName, calendarView: CalendarView): IPromise<FindItemsResults<Appointment>>;
    FindAppointments(parentFolderId: FolderId, calendarView: CalendarView): IPromise<FindItemsResults<Appointment>>;
    FindItems(parentFolderName: WellKnownFolderName, view: ViewBase): IPromise<FindItemsResults<Item>>;
    FindItems(parentFolderId: FolderId, view: ViewBase): IPromise<FindItemsResults<Item>>;
    FindItems(parentFolderId: FolderId, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    FindItems(parentFolderId: FolderId, queryString: string, view: ViewBase): IPromise<FindItemsResults<Item>>;
    FindItems(parentFolderName: WellKnownFolderName, queryString: string, view: ViewBase): IPromise<FindItemsResults<Item>>;
    FindItems(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: ViewBase): IPromise<FindItemsResults<Item>>;
    FindItems(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase): IPromise<FindItemsResults<Item>>;
    FindItems(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    FindItems(parentFolderId: FolderId, queryString: string, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    FindItems(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    FindItems(parentFolderName: WellKnownFolderName, queryString: string, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    FindItems(parentFolderId: FolderId, queryString: string, returnHighlightTerms: boolean, view: ViewBase): IPromise<FindItemsResults<Item>>;
    FindItems(parentFolderId: FolderId, queryString: string, returnHighlightTerms: boolean, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    FindItems<TItem extends Item>(parentFolderIds: FolderId[], searchFilter: SearchFilter, queryString: string, view: ViewBase, groupBy: Grouping, errorHandlingMode: ServiceErrorHandling): IPromise<ServiceResponseCollection<FindItemResponse<TItem>>>;
    InternalBindToItems(itemIds: ItemId[], propertySet: PropertySet, anchorMailbox: string, errorHandling: ServiceErrorHandling): IPromise<ServiceResponseCollection<GetItemResponse>>;
    InternalCopyItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean, errorHandling: ServiceErrorHandling): IPromise<ServiceResponseCollection<MoveCopyItemResponse>>;
    InternalDeleteItems(itemIds: any[], deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, errorHandling: ServiceErrorHandling, suppressReadReceipts: boolean): IPromise<ServiceResponseCollection<ServiceResponse>>;
    InternalLoadPropertiesForItems(items: Item[], propertySet: PropertySet, errorHandling: ServiceErrorHandling): IPromise<ServiceResponseCollection<ServiceResponse>>;
    InternalMoveItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean, errorHandling: ServiceErrorHandling): IPromise<ServiceResponseCollection<MoveCopyItemResponse>>;
    InternalUpdateItems(items: Item[], savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, errorHandling: ServiceErrorHandling, suppressReadReceipt: boolean): IPromise<ServiceResponseCollection<UpdateItemResponse>>;
    LoadPropertiesForItems(items: Item[], propertySet: PropertySet): IPromise<ServiceResponseCollection<ServiceResponse>>;
    MarkAsJunk(itemIds: ItemId[], isJunk: boolean, moveItem: boolean): IPromise<ServiceResponseCollection<MarkAsJunkResponse>>;
    MoveItem(itemId: ItemId, destinationFolderId: FolderId): IPromise<Item>;
    MoveItems(itemIds: ItemId[], destinationFolderId: FolderId): IPromise<ServiceResponseCollection<MoveCopyItemResponse>>;
    MoveItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean): IPromise<ServiceResponseCollection<MoveCopyItemResponse>>;
    SendItem(item: Item, savedCopyDestinationFolderId: FolderId): IPromise<void>;
    UpdateItem(item: Item, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): IPromise<Item>;
    UpdateItem(item: Item, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): IPromise<Item>;
    UpdateItems(items: Item[], savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): IPromise<ServiceResponseCollection<UpdateItemResponse>>;
    UpdateItems(items: Item[], savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): IPromise<ServiceResponseCollection<UpdateItemResponse>>;
    ResolveName(nameToResolve: string): IPromise<NameResolutionCollection>;
    ResolveName(nameToResolve: string, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean): IPromise<NameResolutionCollection>;
    ResolveName(nameToResolve: string, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean, contactDataPropertySet: PropertySet): IPromise<NameResolutionCollection>;
    ResolveName(nameToResolve: string, parentFolderIds: FolderId[], searchScope: ResolveNameSearchLocation, returnContactDetails: boolean): IPromise<NameResolutionCollection>;
    ResolveName(nameToResolve: string, parentFolderIds: FolderId[], searchScope: ResolveNameSearchLocation, returnContactDetails: boolean, contactDataPropertySet: PropertySet): IPromise<NameResolutionCollection>;
    GetUserAvailability(attendees: AttendeeInfo[], timeWindow: TimeWindow, requestedData: AvailabilityData): IPromise<GetUserAvailabilityResults>;
    GetUserAvailability(attendees: AttendeeInfo[], timeWindow: TimeWindow, requestedData: AvailabilityData, options: AvailabilityOptions): IPromise<GetUserAvailabilityResults>;
    /** #region Id conversion operations */
    AutodiscoverUrl(emailAddress: string): IPromise<void>;
    AutodiscoverUrl(emailAddress: string, validateRedirectionUrlCallback: AutodiscoverRedirectionUrlValidationCallback): IPromise<void>;
    static IsMajorMinor(versionPart: string): boolean;
    Validate(): void;
    static ValidateTargetVersion(version: string): void;
    PrepareHttpWebRequest(methodName: string): IXHROptions;
    SetContentType(request: IXHROptions): void;
} class ExchangeServiceBase {
    static AccountIsLocked: any;
    AcceptGzipEncoding: boolean;
    ClientRequestId: string;
    ConnectionGroupName: string;
    CookieContainer: any;
    Credentials: ExchangeCredentials;
    HttpHeaders: {
        [index: string]: string;
    };
    HttpResponseHeaders: {
        [index: string]: string;
    };
    HttpWebRequestFactory: IEwsHttpWebRequestFactory;
    KeepAlive: boolean;
    PreAuthenticate: boolean;
    RequestedServerVersion: ExchangeVersion;
    ReturnClientRequestId: boolean;
    SendClientLatencies: boolean;
    ServerInfo: ExchangeServerInfo;
    static SessionKey: any[];
    SuppressXmlVersionHeader: boolean;
    Timeout: number;
    TimeZone: TimeZoneInfo;
    TimeZoneDefinition: TimeZoneDefinition;
    TraceEnabled: boolean;
    TraceFlags: TraceFlags;
    TraceListener: ITraceListener;
    UseDefaultCredentials: boolean;
    UserAgent: string;
    WebProxy: any;
    protected timeZone: TimeZoneInfo;
    constructor();
    constructor(timeZone: TimeZoneInfo);
    constructor(requestedServerVersion: ExchangeVersion);
    constructor(requestedServerVersion: ExchangeVersion, timeZone: TimeZoneInfo);
    constructor(service: ExchangeServiceBase);
    constructor(service: ExchangeServiceBase, requestedServerVersion: ExchangeVersion);
    ConvertDateTimeToUniversalDateTimeString(value: DateTime): string;
    ConvertStartDateToUnspecifiedDateTime(value: string): DateTime;
    ConvertUniversalDateTimeStringToLocalDateTime(value: string): DateTime;
    DoOnSerializeCustomSoapHeaders(writer: any): void;
    InternalProcessHttpErrorResponse(httpWebResponse: any, webException: any, responseHeadersTraceFlag: TraceFlags, responseTraceFlag: TraceFlags): any;
    IsTraceEnabledFor(traceFlags: TraceFlags): boolean;
    PrepareHttpWebRequestForUrl(url: Uri, acceptGzipEncoding: boolean, allowAutoRedirect: boolean): IXHROptions;
    ProcessHttpErrorResponse(httpWebResponse: XMLHttpRequest, webException: any): any;
    ProcessHttpResponseHeaders(traceType: TraceFlags, response: any): void;
    SaveHttpResponseHeaders(headers: IXHROptions): any;
    SetContentType(request: IXHROptions): void;
    SetCustomUserAgent(userAgent: string): any;
    TraceHttpRequestHeaders(traceType: TraceFlags, request: any): any;
    TraceHttpResponseHeaders(traceType: TraceFlags, response: any): any;
    TraceMessage(traceType: TraceFlags, logEntry: string): any;
    TraceXml(traceType: TraceFlags, stream: any): any;
    Validate(): any;
} class JsonNames {
    static Events: string;
    static NotificationType: string;
    static OldFolderId: string;
    static OldItemId: string;
    static PathToExtendedFieldType: string;
    static PathToIndexedFieldType: string;
    static PathToUnindexedFieldType: string;
    static Path: string;
    static RecurrencePattern: string;
    static RecurrenceRange: string;
} class JsonObject {
    static JsonValueString: string;
} class JsonParser {
    Parse(): JsonObject;
    ParseArray(): any[];
    ParseKeyValuePair(jsonObject: JsonObject): void;
    ParseNumber(valueToken: string): any;
    ParseObject(): JsonObject;
    ParseValue(): any;
    ReadAndValidateToken(token: string, expectedTokenTypes: JsonTokenType[]): JsonTokenType;
    UnescapeString(value: string): string;
}
 class JsonTokenizer {
    AdvanceRegExMatch(): void;
    NextToken(token: string): JsonTokenType;
    Peek(): JsonTokenType;
}
 class LazyMember<T> {
    Member: T;
    constructor(initializationDelegate: InitializeLazyMember<T>);
}
export interface InitializeLazyMember<T> {
    (): T;
} class PropertyBag {
    Properties: DictionaryWithPropertyDefitionKey<PropertyDefinition, any>;
    Owner: ServiceObject;
    IsDirty: boolean;
    Item: any;
    constructor(owner: ServiceObject);
    static AddToChangeList(propertyDefinition: PropertyDefinition, changeList: PropertyDefinition[]): void;
    Clear(): void;
    ClearChangeLog(): void;
    Contains(propertyDefinition: PropertyDefinition): boolean;
    DeleteProperty(propertyDefinition: PropertyDefinition): void;
    GetIsUpdateCallNecessary(): boolean;
    static GetPropertyUpdateItemName(serviceObject: ServiceObject): string;
    GetPropertyValueOrException(propertyDefinition: PropertyDefinition, exception: IOutParam<any>): any;
    InitComplexProperty(complexProperty: ComplexProperty): void;
    IsPropertyLoaded(propertyDefinition: PropertyDefinition): boolean;
    IsPropertyUpdated(propertyDefinition: PropertyDefinition): boolean;
    IsRequestedProperty(propertyDefinition: PropertyDefinition): boolean;
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService, clear: boolean, requestedPropertySet: PropertySet, onlySummaryPropertiesRequested: boolean): void;
    PropertyChanged(complexProperty: ComplexProperty): void;
    _getItem(propertyDefinition: PropertyDefinition): any;
    _setItem(propertyDefinition: PropertyDefinition, value: any): void;
    TryGetProperty(propertyDefinition: PropertyDefinition, propertyValue: IOutParam<any>): boolean;
    TryGetPropertyAs<T>(propertyDefinition: PropertyDefinition, propertyValue: IOutParam<T>): boolean;
    TryGetValue(propertyDefinition: PropertyDefinition, propertyValue: IOutParam<any>): boolean;
    Validate(): void;
    ValidatePropertyValue(propertyDefinition: PropertyDefinition): void;
    WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, propertyDefinition: PropertyDefinition, propertyValue: any): void;
    WriteSetUpdateToXml(writer: EwsServiceXmlWriter, propertyDefinition: PropertyDefinition): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
    WriteToXmlForUpdate(writer: EwsServiceXmlWriter): void;
} class PropertySet {
    static DefaultPropertySetMap: LazyMember<Dictionary<BasePropertySet, string>>;
    static IdOnly: PropertySet;
    static FirstClassProperties: PropertySet;
    BasePropertySet: BasePropertySet;
    RequestedBodyType: BodyType;
    RequestedUniqueBodyType: BodyType;
    RequestedNormalizedBodyType: BodyType;
    Count: number;
    FilterHtmlContent: boolean;
    ConvertHtmlCodePageToUTF8: boolean;
    InlineImageUrlTemplate: string;
    BlockExternalImages: boolean;
    AddBlankTargetToLinks: boolean;
    MaximumBodySize: number;
    get_Item(index: number): PropertyDefinitionBase;
    constructor(basePropertySet?: BasePropertySet, additionalProperties?: PropertyDefinitionBase[]);
    Add(property: PropertyDefinitionBase): void;
    AddRange(properties: PropertyDefinitionBase[]): void;
    Clear(): void;
    Contains(property: PropertyDefinitionBase): boolean;
    static CreateReadonlyPropertySet(basePropertySet: BasePropertySet): PropertySet;
    GetEnumerator(): any;
    GetShapeName(serviceObjectType: ServiceObjectType): string;
    InternalValidate(): void;
    Remove(property: PropertyDefinitionBase): boolean;
    ThrowIfReadonly(): void;
    Validate(): void;
    ValidateForRequest(request: ServiceRequestBase, summaryPropertiesOnly: boolean): void;
    WriteAdditionalPropertiesToXml(writer: EwsServiceXmlWriter, propertyDefinitions: PropertyDefinitionBase[]): void;
    WriteToXml(writer: EwsServiceXmlWriter, serviceObjectType: ServiceObjectType): void;
}
 class SimplePropertyBag<TKey> {
    OnChange: PropertyBagChangedDelegate[];
    AddedItems: TKey[];
    RemovedItems: TKey[];
    ModifiedItems: TKey[];
    constructor(keyPicker: StringKeyPicker<TKey>);
    _getItem(key: TKey): any;
    _setItem(key: TKey, value: any): void;
    Changed(): void;
    ClearChangeLog(): void;
    ContainsKey(key: TKey): boolean;
    GetEnumerator(): any;
    InternalAddItemToChangeList(key: TKey, changeList: TKey[]): void;
    InternalRemoveItem(key: TKey): void;
    TryGetValue(key: TKey, value: IOutParam<any>): boolean;
} module XmlAttributeNames {
    var XmlNs: string;
    var Id: string;
    var ChangeKey: string;
    var RecurringMasterId: string;
    var InstanceIndex: string;
    var OccurrenceId: string;
    var Traversal: string;
    var ViewFilter: string;
    var Offset: string;
    var MaxEntriesReturned: string;
    var BasePoint: string;
    var ResponseClass: string;
    var IndexedPagingOffset: string;
    var TotalItemsInView: string;
    var IncludesLastItemInRange: string;
    var BodyType: string;
    var MessageDisposition: string;
    var SaveItemToFolder: string;
    var RootItemChangeKey: string;
    var DeleteType: string;
    var DeleteSubFolders: string;
    var AffectedTaskOccurrences: string;
    var SendMeetingCancellations: string;
    var SuppressReadReceipts: string;
    var FieldURI: string;
    var FieldIndex: string;
    var ConflictResolution: string;
    var SendMeetingInvitationsOrCancellations: string;
    var CharacterSet: string;
    var HeaderName: string;
    var SendMeetingInvitations: string;
    var Key: string;
    var RoutingType: string;
    var MailboxType: string;
    var DistinguishedPropertySetId: string;
    var PropertySetId: string;
    var PropertyTag: string;
    var PropertyName: string;
    var PropertyId: string;
    var PropertyType: string;
    var TimeZoneName: string;
    var ReturnFullContactData: string;
    var ContactDataShape: string;
    var Numerator: string;
    var Denominator: string;
    var Value: string;
    var ContainmentMode: string;
    var ContainmentComparison: string;
    var Order: string;
    var StartDate: string;
    var EndDate: string;
    var Version: string;
    var Aggregate: string;
    var SearchScope: string;
    var Format: string;
    var Mailbox: string;
    var DestinationFormat: string;
    var FolderId: string;
    var ItemId: string;
    var IncludePermissions: string;
    var InitialName: string;
    var FinalName: string;
    var AuthenticationMethod: string;
    var Time: string;
    var Name: string;
    var Bias: string;
    var Kind: string;
    var SubscribeToAllFolders: string;
    var PublicFolderServer: string;
    var IsArchive: string;
    var ReturnHighlightTerms: string;
    var IsExplicit: string;
    var ClientExtensionUserIdentity: string;
    var ClientExtensionEnabledOnly: string;
    var SetClientExtensionActionId: string;
    var ClientExtensionId: string;
    var ClientExtensionIsAvailable: string;
    var ClientExtensionIsMandatory: string;
    var ClientExtensionIsEnabledByDefault: string;
    var ClientExtensionProvidedTo: string;
    var ClientExtensionType: string;
    var ClientExtensionScope: string;
    var ClientExtensionMarketplaceAssetID: string;
    var ClientExtensionMarketplaceContentMarket: string;
    var ClientExtensionAppStatus: string;
    var ClientExtensionEtoken: string;
    var IsTruncated: string;
    var IsJunk: string;
    var MoveItem: string;
    var Nil: string;
    var Type: string;
} module XmlElementNames {
    var AllProperties: string;
    var ParentFolderIds: string;
    var DistinguishedFolderId: string;
    var ItemId: string;
    var ItemIds: string;
    var FolderId: string;
    var FolderIds: string;
    var OccurrenceItemId: string;
    var RecurringMasterItemId: string;
    var ItemShape: string;
    var FolderShape: string;
    var BaseShape: string;
    var IndexedPageItemView: string;
    var IndexedPageFolderView: string;
    var FractionalPageItemView: string;
    var FractionalPageFolderView: string;
    var SeekToConditionPageItemView: string;
    var ResponseCode: string;
    var RootFolder: string;
    var Folder: string;
    var ContactsFolder: string;
    var TasksFolder: string;
    var SearchFolder: string;
    var Folders: string;
    var Item: string;
    var Items: string;
    var Message: string;
    var Mailbox: string;
    var Body: string;
    var From: string;
    var Sender: string;
    var Name: string;
    var Address: string;
    var EmailAddress: string;
    var RoutingType: string;
    var MailboxType: string;
    var ToRecipients: string;
    var CcRecipients: string;
    var BccRecipients: string;
    var ReplyTo: string;
    var ConversationTopic: string;
    var ConversationIndex: string;
    var IsDeliveryReceiptRequested: string;
    var IsRead: string;
    var IsReadReceiptRequested: string;
    var IsResponseRequested: string;
    var InternetMessageId: string;
    var References: string;
    var ParentItemId: string;
    var ParentFolderId: string;
    var ChildFolderCount: string;
    var DisplayName: string;
    var TotalCount: string;
    var ItemClass: string;
    var FolderClass: string;
    var Subject: string;
    var MimeContent: string;
    var Sensitivity: string;
    var Attachments: string;
    var DateTimeReceived: string;
    var Size: string;
    var Categories: string;
    var Importance: string;
    var InReplyTo: string;
    var IsSubmitted: string;
    var IsAssociated: string;
    var IsDraft: string;
    var IsFromMe: string;
    var IsResend: string;
    var IsUnmodified: string;
    var InternetMessageHeader: string;
    var InternetMessageHeaders: string;
    var DateTimeSent: string;
    var DateTimeCreated: string;
    var ResponseObjects: string;
    var ReminderDueBy: string;
    var ReminderIsSet: string;
    var ReminderMinutesBeforeStart: string;
    var DisplayCc: string;
    var DisplayTo: string;
    var HasAttachments: string;
    var ExtendedProperty: string;
    var Culture: string;
    var FileAttachment: string;
    var ItemAttachment: string;
    var AttachmentIds: string;
    var AttachmentId: string;
    var ContentType: string;
    var ContentLocation: string;
    var ContentId: string;
    var Content: string;
    var SavedItemFolderId: string;
    var MessageText: string;
    var DescriptiveLinkKey: string;
    var ItemChange: string;
    var ItemChanges: string;
    var FolderChange: string;
    var FolderChanges: string;
    var Updates: string;
    var AppendToItemField: string;
    var SetItemField: string;
    var DeleteItemField: string;
    var SetFolderField: string;
    var DeleteFolderField: string;
    var FieldURI: string;
    var RootItemId: string;
    var ReferenceItemId: string;
    var NewBodyContent: string;
    var ReplyToItem: string;
    var ReplyAllToItem: string;
    var ForwardItem: string;
    var AcceptItem: string;
    var TentativelyAcceptItem: string;
    var DeclineItem: string;
    var CancelCalendarItem: string;
    var RemoveItem: string;
    var SuppressReadReceipt: string;
    var SuppressReadReceipts: string;
    var String: string;
    var Start: string;
    var End: string;
    var ProposedStart: string;
    var ProposedEnd: string;
    var OriginalStart: string;
    var IsAllDayEvent: string;
    var LegacyFreeBusyStatus: string;
    var Location: string;
    var When: string;
    var IsMeeting: string;
    var IsCancelled: string;
    var IsRecurring: string;
    var MeetingRequestWasSent: string;
    var CalendarItemType: string;
    var MyResponseType: string;
    var Organizer: string;
    var RequiredAttendees: string;
    var OptionalAttendees: string;
    var Resources: string;
    var ConflictingMeetingCount: string;
    var AdjacentMeetingCount: string;
    var ConflictingMeetings: string;
    var AdjacentMeetings: string;
    var Duration: string;
    var TimeZone: string;
    var AppointmentReplyTime: string;
    var AppointmentSequenceNumber: string;
    var AppointmentState: string;
    var Recurrence: string;
    var FirstOccurrence: string;
    var LastOccurrence: string;
    var ModifiedOccurrences: string;
    var DeletedOccurrences: string;
    var MeetingTimeZone: string;
    var ConferenceType: string;
    var AllowNewTimeProposal: string;
    var IsOnlineMeeting: string;
    var MeetingWorkspaceUrl: string;
    var NetShowUrl: string;
    var JoinOnlineMeetingUrl: string;
    var OnlineMeetingSettings: string;
    var LobbyBypass: string;
    var AccessLevel: string;
    var Presenters: string;
    var CalendarItem: string;
    var CalendarFolder: string;
    var Attendee: string;
    var ResponseType: string;
    var LastResponseTime: string;
    var Occurrence: string;
    var DeletedOccurrence: string;
    var RelativeYearlyRecurrence: string;
    var AbsoluteYearlyRecurrence: string;
    var RelativeMonthlyRecurrence: string;
    var AbsoluteMonthlyRecurrence: string;
    var WeeklyRecurrence: string;
    var DailyRecurrence: string;
    var DailyRegeneration: string;
    var WeeklyRegeneration: string;
    var MonthlyRegeneration: string;
    var YearlyRegeneration: string;
    var NoEndRecurrence: string;
    var EndDateRecurrence: string;
    var NumberedRecurrence: string;
    var Interval: string;
    var DayOfMonth: string;
    var DayOfWeek: string;
    var DaysOfWeek: string;
    var DayOfWeekIndex: string;
    var Month: string;
    var StartDate: string;
    var EndDate: string;
    var StartTime: string;
    var EndTime: string;
    var NumberOfOccurrences: string;
    var AssociatedCalendarItemId: string;
    var IsDelegated: string;
    var IsOutOfDate: string;
    var HasBeenProcessed: string;
    var IsOrganizer: string;
    var MeetingMessage: string;
    var FileAs: string;
    var FileAsMapping: string;
    var GivenName: string;
    var Initials: string;
    var MiddleName: string;
    var NickName: string;
    var CompleteName: string;
    var CompanyName: string;
    var EmailAddresses: string;
    var PhysicalAddresses: string;
    var PhoneNumbers: string;
    var PhoneNumber: string;
    var AssistantName: string;
    var Birthday: string;
    var BusinessHomePage: string;
    var Children: string;
    var Companies: string;
    var ContactSource: string;
    var Department: string;
    var Generation: string;
    var ImAddresses: string;
    var ImAddress: string;
    var JobTitle: string;
    var Manager: string;
    var Mileage: string;
    var OfficeLocation: string;
    var PostalAddressIndex: string;
    var Profession: string;
    var SpouseName: string;
    var Surname: string;
    var WeddingAnniversary: string;
    var HasPicture: string;
    var Title: string;
    var FirstName: string;
    var LastName: string;
    var Suffix: string;
    var FullName: string;
    var YomiFirstName: string;
    var YomiLastName: string;
    var Contact: string;
    var Entry: string;
    var Street: string;
    var City: string;
    var State: string;
    var SharePointSiteUrl: string;
    var Country: string;
    var CountryOrRegion: string;
    var PostalCode: string;
    var PostOfficeBox: string;
    var Members: string;
    var Member: string;
    var AdditionalProperties: string;
    var ExtendedFieldURI: string;
    var Value: string;
    var Values: string;
    var ToFolderId: string;
    var ActualWork: string;
    var AssignedTime: string;
    var BillingInformation: string;
    var ChangeCount: string;
    var CompleteDate: string;
    var Contacts: string;
    var DelegationState: string;
    var Delegator: string;
    var DueDate: string;
    var IsAssignmentEditable: string;
    var IsComplete: string;
    var IsTeamTask: string;
    var Owner: string;
    var PercentComplete: string;
    var Status: string;
    var StatusDescription: string;
    var TotalWork: string;
    var Task: string;
    var MailboxCulture: string;
    var MeetingRequestType: string;
    var IntendedFreeBusyStatus: string;
    var MeetingRequest: string;
    var MeetingResponse: string;
    var MeetingCancellation: string;
    var ChangeHighlights: string;
    var HasLocationChanged: string;
    var HasStartTimeChanged: string;
    var HasEndTimeChanged: string;
    var BaseOffset: string;
    var Offset: string;
    var Standard: string;
    var Daylight: string;
    var Time: string;
    var AbsoluteDate: string;
    var UnresolvedEntry: string;
    var ResolutionSet: string;
    var Resolution: string;
    var DistributionList: string;
    var DLExpansion: string;
    var IndexedFieldURI: string;
    var PullSubscriptionRequest: string;
    var PushSubscriptionRequest: string;
    var StreamingSubscriptionRequest: string;
    var EventTypes: string;
    var EventType: string;
    var Timeout: string;
    var Watermark: string;
    var SubscriptionId: string;
    var SubscriptionIds: string;
    var StatusFrequency: string;
    var URL: string;
    var CallerData: string;
    var Notification: string;
    var Notifications: string;
    var PreviousWatermark: string;
    var MoreEvents: string;
    var TimeStamp: string;
    var UnreadCount: string;
    var OldParentFolderId: string;
    var CopiedEvent: string;
    var CreatedEvent: string;
    var DeletedEvent: string;
    var ModifiedEvent: string;
    var MovedEvent: string;
    var NewMailEvent: string;
    var StatusEvent: string;
    var FreeBusyChangedEvent: string;
    var ExchangeImpersonation: string;
    var ConnectingSID: string;
    var OpenAsAdminOrSystemService: string;
    var LogonType: string;
    var BudgetType: string;
    var ManagementRole: string;
    var UserRoles: string;
    var ApplicationRoles: string;
    var Role: string;
    var SyncFolderId: string;
    var SyncScope: string;
    var SyncState: string;
    var Ignore: string;
    var MaxChangesReturned: string;
    var Changes: string;
    var IncludesLastItemInRange: string;
    var IncludesLastFolderInRange: string;
    var Create: string;
    var Update: string;
    var Delete: string;
    var ReadFlagChange: string;
    var SearchParameters: string;
    var SoftDeleted: string;
    var Shallow: string;
    var Associated: string;
    var BaseFolderId: string;
    var BaseFolderIds: string;
    var SortOrder: string;
    var FieldOrder: string;
    var CanDelete: string;
    var CanRenameOrMove: string;
    var MustDisplayComment: string;
    var HasQuota: string;
    var IsManagedFoldersRoot: string;
    var ManagedFolderId: string;
    var Comment: string;
    var StorageQuota: string;
    var FolderSize: string;
    var HomePage: string;
    var ManagedFolderInformation: string;
    var CalendarView: string;
    var PostedTime: string;
    var PostItem: string;
    var RequestServerVersion: string;
    var PostReplyItem: string;
    var CreateAssociated: string;
    var CreateContents: string;
    var CreateHierarchy: string;
    var Modify: string;
    var Read: string;
    var EffectiveRights: string;
    var LastModifiedName: string;
    var LastModifiedTime: string;
    var ConversationId: string;
    var UniqueBody: string;
    var BodyType: string;
    var NormalizedBodyType: string;
    var UniqueBodyType: string;
    var AttachmentShape: string;
    var UserId: string;
    var UserIds: string;
    var CanCreateItems: string;
    var CanCreateSubFolders: string;
    var IsFolderOwner: string;
    var IsFolderVisible: string;
    var IsFolderContact: string;
    var EditItems: string;
    var DeleteItems: string;
    var ReadItems: string;
    var PermissionLevel: string;
    var CalendarPermissionLevel: string;
    var SID: string;
    var PrimarySmtpAddress: string;
    var DistinguishedUser: string;
    var PermissionSet: string;
    var Permissions: string;
    var Permission: string;
    var CalendarPermissions: string;
    var CalendarPermission: string;
    var GroupBy: string;
    var AggregateOn: string;
    var Groups: string;
    var GroupedItems: string;
    var GroupIndex: string;
    var ConflictResults: string;
    var Count: string;
    var OofSettings: string;
    var UserOofSettings: string;
    var OofState: string;
    var ExternalAudience: string;
    var AllowExternalOof: string;
    var InternalReply: string;
    var ExternalReply: string;
    var Bias: string;
    var DayOrder: string;
    var Year: string;
    var StandardTime: string;
    var DaylightTime: string;
    var MailboxData: string;
    var MailboxDataArray: string;
    var Email: string;
    var AttendeeType: string;
    var ExcludeConflicts: string;
    var FreeBusyViewOptions: string;
    var SuggestionsViewOptions: string;
    var FreeBusyView: string;
    var TimeWindow: string;
    var MergedFreeBusyIntervalInMinutes: string;
    var RequestedView: string;
    var FreeBusyViewType: string;
    var CalendarEventArray: string;
    var CalendarEvent: string;
    var BusyType: string;
    var MergedFreeBusy: string;
    var WorkingHours: string;
    var WorkingPeriodArray: string;
    var WorkingPeriod: string;
    var StartTimeInMinutes: string;
    var EndTimeInMinutes: string;
    var GoodThreshold: string;
    var MaximumResultsByDay: string;
    var MaximumNonWorkHourResultsByDay: string;
    var MeetingDurationInMinutes: string;
    var MinimumSuggestionQuality: string;
    var DetailedSuggestionsWindow: string;
    var CurrentMeetingTime: string;
    var GlobalObjectId: string;
    var SuggestionDayResultArray: string;
    var SuggestionDayResult: string;
    var Date: string;
    var DayQuality: string;
    var SuggestionArray: string;
    var Suggestion: string;
    var MeetingTime: string;
    var IsWorkTime: string;
    var SuggestionQuality: string;
    var AttendeeConflictDataArray: string;
    var UnknownAttendeeConflictData: string;
    var TooBigGroupAttendeeConflictData: string;
    var IndividualAttendeeConflictData: string;
    var GroupAttendeeConflictData: string;
    var NumberOfMembers: string;
    var NumberOfMembersAvailable: string;
    var NumberOfMembersWithConflict: string;
    var NumberOfMembersWithNoData: string;
    var SourceIds: string;
    var AlternateId: string;
    var AlternatePublicFolderId: string;
    var AlternatePublicFolderItemId: string;
    var DelegatePermissions: string;
    var ReceiveCopiesOfMeetingMessages: string;
    var ViewPrivateItems: string;
    var CalendarFolderPermissionLevel: string;
    var TasksFolderPermissionLevel: string;
    var InboxFolderPermissionLevel: string;
    var ContactsFolderPermissionLevel: string;
    var NotesFolderPermissionLevel: string;
    var JournalFolderPermissionLevel: string;
    var DelegateUser: string;
    var DelegateUsers: string;
    var DeliverMeetingRequests: string;
    var MessageXml: string;
    var UserConfiguration: string;
    var UserConfigurationName: string;
    var UserConfigurationProperties: string;
    var Dictionary: string;
    var DictionaryEntry: string;
    var DictionaryKey: string;
    var DictionaryValue: string;
    var XmlData: string;
    var BinaryData: string;
    var FilterHtmlContent: string;
    var ConvertHtmlCodePageToUTF8: string;
    var UnknownEntries: string;
    var UnknownEntry: string;
    var PasswordExpirationDate: string;
    var Flag: string;
    var PersonaPostalAddress: string;
    var PostalAddressType: string;
    var EnhancedLocation: string;
    var LocationDisplayName: string;
    var LocationAnnotation: string;
    var LocationSource: string;
    var LocationUri: string;
    var Latitude: string;
    var Longitude: string;
    var Accuracy: string;
    var Altitude: string;
    var AltitudeAccuracy: string;
    var FormattedAddress: string;
    var Guid: string;
    var PhoneCallId: string;
    var DialString: string;
    var PhoneCallInformation: string;
    var PhoneCallState: string;
    var ConnectionFailureCause: string;
    var SIPResponseCode: string;
    var SIPResponseText: string;
    var WebClientReadFormQueryString: string;
    var WebClientEditFormQueryString: string;
    var Ids: string;
    var Id: string;
    var TimeZoneDefinitions: string;
    var TimeZoneDefinition: string;
    var Periods: string;
    var Period: string;
    var TransitionsGroups: string;
    var TransitionsGroup: string;
    var Transitions: string;
    var Transition: string;
    var AbsoluteDateTransition: string;
    var RecurringDayTransition: string;
    var RecurringDateTransition: string;
    var DateTime: string;
    var TimeOffset: string;
    var Day: string;
    var TimeZoneContext: string;
    var StartTimeZone: string;
    var EndTimeZone: string;
    var ReceivedBy: string;
    var ReceivedRepresenting: string;
    var Uid: string;
    var RecurrenceId: string;
    var DateTimeStamp: string;
    var IsInline: string;
    var IsContactPhoto: string;
    var QueryString: string;
    var HighlightTerms: string;
    var HighlightTerm: string;
    var HighlightTermScope: string;
    var HighlightTermValue: string;
    var CalendarEventDetails: string;
    var ID: string;
    var IsException: string;
    var IsReminderSet: string;
    var IsPrivate: string;
    var FirstDayOfWeek: string;
    var Verb: string;
    var Parameter: string;
    var ReturnValue: string;
    var ReturnNewItemIds: string;
    var DateTimePrecision: string;
    var ConvertInlineImagesToDataUrls: string;
    var InlineImageUrlTemplate: string;
    var BlockExternalImages: string;
    var AddBlankTargetToLinks: string;
    var MaximumBodySize: string;
    var StoreEntryId: string;
    var InstanceKey: string;
    var NormalizedBody: string;
    var PolicyTag: string;
    var ArchiveTag: string;
    var RetentionDate: string;
    var DisableReason: string;
    var AppMarketplaceUrl: string;
    var TextBody: string;
    var IconIndex: string;
    var GlobalIconIndex: string;
    var DraftItemIds: string;
    var HasIrm: string;
    var GlobalHasIrm: string;
    var ApprovalRequestData: string;
    var IsUndecidedApprovalRequest: string;
    var ApprovalDecision: string;
    var ApprovalDecisionMaker: string;
    var ApprovalDecisionTime: string;
    var VotingOptionData: string;
    var VotingOptionDisplayName: string;
    var SendPrompt: string;
    var VotingInformation: string;
    var UserOptions: string;
    var VotingResponse: string;
    var NlgEntityExtractionResult: string;
    var NlgAddresses: string;
    var NlgAddress: string;
    var NlgMeetingSuggestions: string;
    var NlgMeetingSuggestion: string;
    var NlgTaskSuggestions: string;
    var NlgTaskSuggestion: string;
    var NlgBusinessName: string;
    var NlgPeopleName: string;
    var NlgEmailAddresses: string;
    var NlgEmailAddress: string;
    var NlgEmailPosition: string;
    var NlgContacts: string;
    var NlgContact: string;
    var NlgContactString: string;
    var NlgUrls: string;
    var NlgUrl: string;
    var NlgPhoneNumbers: string;
    var NlgPhone: string;
    var NlgAttendees: string;
    var NlgEmailUser: string;
    var NlgLocation: string;
    var NlgSubject: string;
    var NlgMeetingString: string;
    var NlgStartTime: string;
    var NlgEndTime: string;
    var NlgTaskString: string;
    var NlgAssignees: string;
    var NlgPersonName: string;
    var NlgOriginalPhoneString: string;
    var NlgPhoneString: string;
    var NlgType: string;
    var NlgName: string;
    var NlgUserId: string;
    var GetClientAccessToken: string;
    var GetClientAccessTokenResponse: string;
    var GetClientAccessTokenResponseMessage: string;
    var TokenRequests: string;
    var TokenRequest: string;
    var TokenType: string;
    var TokenValue: string;
    var TTL: string;
    var Tokens: string;
    var MarkAsJunk: string;
    var MarkAsJunkResponse: string;
    var MarkAsJunkResponseMessage: string;
    var MovedItemId: string;
    var Conversations: string;
    var Conversation: string;
    var UniqueRecipients: string;
    var GlobalUniqueRecipients: string;
    var UniqueUnreadSenders: string;
    var GlobalUniqueUnreadSenders: string;
    var UniqueSenders: string;
    var GlobalUniqueSenders: string;
    var LastDeliveryTime: string;
    var GlobalLastDeliveryTime: string;
    var GlobalCategories: string;
    var FlagStatus: string;
    var GlobalFlagStatus: string;
    var GlobalHasAttachments: string;
    var MessageCount: string;
    var GlobalMessageCount: string;
    var GlobalUnreadCount: string;
    var GlobalSize: string;
    var ItemClasses: string;
    var GlobalItemClasses: string;
    var GlobalImportance: string;
    var GlobalInferredImportance: string;
    var GlobalItemIds: string;
    var ChangeType: string;
    var ReadFlag: string;
    var TotalConversationsInView: string;
    var IndexedOffset: string;
    var ConversationShape: string;
    var MailboxScope: string;
    var ApplyConversationAction: string;
    var ConversationActions: string;
    var ConversationAction: string;
    var ApplyConversationActionResponse: string;
    var ApplyConversationActionResponseMessage: string;
    var EnableAlwaysDelete: string;
    var ProcessRightAway: string;
    var DestinationFolderId: string;
    var ContextFolderId: string;
    var ConversationLastSyncTime: string;
    var AlwaysCategorize: string;
    var AlwaysDelete: string;
    var AlwaysMove: string;
    var Move: string;
    var Copy: string;
    var SetReadState: string;
    var SetRetentionPolicy: string;
    var DeleteType: string;
    var RetentionPolicyType: string;
    var RetentionPolicyTagId: string;
    var FoldersToIgnore: string;
    var ParentInternetMessageId: string;
    var ConversationNode: string;
    var ConversationNodes: string;
    var MaxItemsToReturn: string;
    var SetTeamMailbox: string;
    var SetTeamMailboxResponse: string;
    var UnpinTeamMailbox: string;
    var UnpinTeamMailboxResponse: string;
    var RoomLists: string;
    var Rooms: string;
    var Room: string;
    var RoomList: string;
    var RoomId: string;
    var Autodiscover: string;
    var BinarySecret: string;
    var Response: string;
    var User: string;
    var LegacyDN: string;
    var DeploymentId: string;
    var Account: string;
    var AccountType: string;
    var Action: string;
    var To: string;
    var RedirectAddr: string;
    var RedirectUrl: string;
    var Protocol: string;
    var Type: string;
    var Server: string;
    var OwnerSmtpAddress: string;
    var ServerDN: string;
    var ServerVersion: string;
    var ServerVersionInfo: string;
    var AD: string;
    var AuthPackage: string;
    var MdbDN: string;
    var EWSUrl: string;
    var EwsPartnerUrl: string;
    var EmwsUrl: string;
    var ASUrl: string;
    var OOFUrl: string;
    var UMUrl: string;
    var OABUrl: string;
    var Internal: string;
    var External: string;
    var OWAUrl: string;
    var Error: string;
    var ErrorCode: string;
    var DebugData: string;
    var Users: string;
    var RequestedSettings: string;
    var Setting: string;
    var GetUserSettingsRequestMessage: string;
    var RequestedServerVersion: string;
    var Request: string;
    var RedirectTarget: string;
    var UserSettings: string;
    var UserSettingErrors: string;
    var GetUserSettingsResponseMessage: string;
    var ErrorMessage: string;
    var UserResponse: string;
    var UserResponses: string;
    var UserSettingError: string;
    var Domain: string;
    var Domains: string;
    var DomainResponse: string;
    var DomainResponses: string;
    var DomainSetting: string;
    var DomainSettings: string;
    var DomainStringSetting: string;
    var DomainSettingError: string;
    var DomainSettingErrors: string;
    var GetDomainSettingsRequestMessage: string;
    var GetDomainSettingsResponseMessage: string;
    var SettingName: string;
    var UserSetting: string;
    var StringSetting: string;
    var WebClientUrlCollectionSetting: string;
    var WebClientUrls: string;
    var WebClientUrl: string;
    var AuthenticationMethods: string;
    var Url: string;
    var AlternateMailboxCollectionSetting: string;
    var AlternateMailboxes: string;
    var AlternateMailbox: string;
    var ProtocolConnectionCollectionSetting: string;
    var ProtocolConnections: string;
    var ProtocolConnection: string;
    var DocumentSharingLocationCollectionSetting: string;
    var DocumentSharingLocations: string;
    var DocumentSharingLocation: string;
    var ServiceUrl: string;
    var LocationUrl: string;
    var SupportedFileExtensions: string;
    var FileExtension: string;
    var ExternalAccessAllowed: string;
    var AnonymousAccessAllowed: string;
    var CanModifyPermissions: string;
    var IsDefault: string;
    var EncryptionMethod: string;
    var Hostname: string;
    var Port: string;
    var Version: string;
    var MajorVersion: string;
    var MinorVersion: string;
    var MajorBuildNumber: string;
    var MinorBuildNumber: string;
    var RequestedVersion: string;
    var PublicFolderServer: string;
    var Ssl: string;
    var SharingUrl: string;
    var EcpUrl: string;
    var EcpUrl_um: string;
    var EcpUrl_aggr: string;
    var EcpUrl_sms: string;
    var EcpUrl_mt: string;
    var EcpUrl_ret: string;
    var EcpUrl_publish: string;
    var EcpUrl_photo: string;
    var ExchangeRpcUrl: string;
    var EcpUrl_connect: string;
    var EcpUrl_tm: string;
    var EcpUrl_tmCreating: string;
    var EcpUrl_tmEditing: string;
    var EcpUrl_tmHiding: string;
    var SiteMailboxCreationURL: string;
    var EcpUrl_extinstall: string;
    var PartnerToken: string;
    var PartnerTokenReference: string;
    var ServerExclusiveConnect: string;
    var AutoDiscoverSMTPAddress: string;
    var CertPrincipalName: string;
    var GroupingInformation: string;
    var MapiHttpEnabled: string;
    var MailboxSmtpAddress: string;
    var RuleId: string;
    var Priority: string;
    var IsEnabled: string;
    var IsNotSupported: string;
    var IsInError: string;
    var Conditions: string;
    var Exceptions: string;
    var Actions: string;
    var InboxRules: string;
    var Rule: string;
    var OutlookRuleBlobExists: string;
    var RemoveOutlookRuleBlob: string;
    var ContainsBodyStrings: string;
    var ContainsHeaderStrings: string;
    var ContainsRecipientStrings: string;
    var ContainsSenderStrings: string;
    var ContainsSubjectOrBodyStrings: string;
    var ContainsSubjectStrings: string;
    var FlaggedForAction: string;
    var FromAddresses: string;
    var FromConnectedAccounts: string;
    var IsApprovalRequest: string;
    var IsAutomaticForward: string;
    var IsAutomaticReply: string;
    var IsEncrypted: string;
    var IsMeetingRequest: string;
    var IsMeetingResponse: string;
    var IsNDR: string;
    var IsPermissionControlled: string;
    var IsSigned: string;
    var IsVoicemail: string;
    var IsReadReceipt: string;
    var MessageClassifications: string;
    var NotSentToMe: string;
    var SentCcMe: string;
    var SentOnlyToMe: string;
    var SentToAddresses: string;
    var SentToMe: string;
    var SentToOrCcMe: string;
    var WithinDateRange: string;
    var WithinSizeRange: string;
    var MinimumSize: string;
    var MaximumSize: string;
    var StartDateTime: string;
    var EndDateTime: string;
    var AssignCategories: string;
    var CopyToFolder: string;
    var FlagMessage: string;
    var ForwardAsAttachmentToRecipients: string;
    var ForwardToRecipients: string;
    var MarkImportance: string;
    var MarkAsRead: string;
    var MoveToFolder: string;
    var PermanentDelete: string;
    var RedirectToRecipients: string;
    var SendSMSAlertToRecipients: string;
    var ServerReplyWithMessage: string;
    var StopProcessingRules: string;
    var CreateRuleOperation: string;
    var SetRuleOperation: string;
    var DeleteRuleOperation: string;
    var Operations: string;
    var RuleOperationErrors: string;
    var RuleOperationError: string;
    var OperationIndex: string;
    var ValidationErrors: string;
    var FieldValue: string;
    var Not: string;
    var Bitmask: string;
    var Constant: string;
    var Restriction: string;
    var Condition: string;
    var Contains: string;
    var Excludes: string;
    var Exists: string;
    var FieldURIOrConstant: string;
    var And: string;
    var Or: string;
    var IsEqualTo: string;
    var IsNotEqualTo: string;
    var IsGreaterThan: string;
    var IsGreaterThanOrEqualTo: string;
    var IsLessThan: string;
    var IsLessThanOrEqualTo: string;
    var PhoneticFullName: string;
    var PhoneticFirstName: string;
    var PhoneticLastName: string;
    var Alias: string;
    var Notes: string;
    var Photo: string;
    var UserSMIMECertificate: string;
    var MSExchangeCertificate: string;
    var DirectoryId: string;
    var ManagerMailbox: string;
    var DirectReports: string;
    var ResponseMessage: string;
    var ResponseMessages: string;
    var FindConversation: string;
    var FindConversationResponse: string;
    var FindConversationResponseMessage: string;
    var GetConversationItems: string;
    var GetConversationItemsResponse: string;
    var GetConversationItemsResponseMessage: string;
    var FindItem: string;
    var FindItemResponse: string;
    var FindItemResponseMessage: string;
    var GetItem: string;
    var GetItemResponse: string;
    var GetItemResponseMessage: string;
    var CreateItem: string;
    var CreateItemResponse: string;
    var CreateItemResponseMessage: string;
    var SendItem: string;
    var SendItemResponse: string;
    var SendItemResponseMessage: string;
    var DeleteItem: string;
    var DeleteItemResponse: string;
    var DeleteItemResponseMessage: string;
    var UpdateItem: string;
    var UpdateItemResponse: string;
    var UpdateItemResponseMessage: string;
    var CopyItem: string;
    var CopyItemResponse: string;
    var CopyItemResponseMessage: string;
    var MoveItem: string;
    var MoveItemResponse: string;
    var MoveItemResponseMessage: string;
    var ArchiveItem: string;
    var ArchiveItemResponse: string;
    var ArchiveItemResponseMessage: string;
    var ArchiveSourceFolderId: string;
    var FindFolder: string;
    var FindFolderResponse: string;
    var FindFolderResponseMessage: string;
    var GetFolder: string;
    var GetFolderResponse: string;
    var GetFolderResponseMessage: string;
    var CreateFolder: string;
    var CreateFolderResponse: string;
    var CreateFolderResponseMessage: string;
    var DeleteFolder: string;
    var DeleteFolderResponse: string;
    var DeleteFolderResponseMessage: string;
    var EmptyFolder: string;
    var EmptyFolderResponse: string;
    var EmptyFolderResponseMessage: string;
    var UpdateFolder: string;
    var UpdateFolderResponse: string;
    var UpdateFolderResponseMessage: string;
    var CopyFolder: string;
    var CopyFolderResponse: string;
    var CopyFolderResponseMessage: string;
    var MoveFolder: string;
    var MoveFolderResponse: string;
    var MoveFolderResponseMessage: string;
    var MarkAllItemsAsRead: string;
    var MarkAllItemsAsReadResponse: string;
    var MarkAllItemsAsReadResponseMessage: string;
    var GetAttachment: string;
    var GetAttachmentResponse: string;
    var GetAttachmentResponseMessage: string;
    var CreateAttachment: string;
    var CreateAttachmentResponse: string;
    var CreateAttachmentResponseMessage: string;
    var DeleteAttachment: string;
    var DeleteAttachmentResponse: string;
    var DeleteAttachmentResponseMessage: string;
    var ResolveNames: string;
    var ResolveNamesResponse: string;
    var ResolveNamesResponseMessage: string;
    var ExpandDL: string;
    var ExpandDLResponse: string;
    var ExpandDLResponseMessage: string;
    var Subscribe: string;
    var SubscribeResponse: string;
    var SubscribeResponseMessage: string;
    var SubscriptionRequest: string;
    var Unsubscribe: string;
    var UnsubscribeResponse: string;
    var UnsubscribeResponseMessage: string;
    var GetEvents: string;
    var GetEventsResponse: string;
    var GetEventsResponseMessage: string;
    var GetStreamingEvents: string;
    var GetStreamingEventsResponse: string;
    var GetStreamingEventsResponseMessage: string;
    var ConnectionStatus: string;
    var ErrorSubscriptionIds: string;
    var ConnectionTimeout: string;
    var HeartbeatFrequency: string;
    var SyncFolderItems: string;
    var SyncFolderItemsResponse: string;
    var SyncFolderItemsResponseMessage: string;
    var SyncFolderHierarchy: string;
    var SyncFolderHierarchyResponse: string;
    var SyncFolderHierarchyResponseMessage: string;
    var GetUserOofSettingsRequest: string;
    var GetUserOofSettingsResponse: string;
    var SetUserOofSettingsRequest: string;
    var SetUserOofSettingsResponse: string;
    var GetUserAvailabilityRequest: string;
    var GetUserAvailabilityResponse: string;
    var FreeBusyResponseArray: string;
    var FreeBusyResponse: string;
    var SuggestionsResponse: string;
    var GetRoomListsRequest: string;
    var GetRoomListsResponse: string;
    var GetRoomsRequest: string;
    var GetRoomsResponse: string;
    var ConvertId: string;
    var ConvertIdResponse: string;
    var ConvertIdResponseMessage: string;
    var AddDelegate: string;
    var AddDelegateResponse: string;
    var DelegateUserResponseMessageType: string;
    var RemoveDelegate: string;
    var RemoveDelegateResponse: string;
    var GetDelegate: string;
    var GetDelegateResponse: string;
    var UpdateDelegate: string;
    var UpdateDelegateResponse: string;
    var CreateUserConfiguration: string;
    var CreateUserConfigurationResponse: string;
    var CreateUserConfigurationResponseMessage: string;
    var DeleteUserConfiguration: string;
    var DeleteUserConfigurationResponse: string;
    var DeleteUserConfigurationResponseMessage: string;
    var GetUserConfiguration: string;
    var GetUserConfigurationResponse: string;
    var GetUserConfigurationResponseMessage: string;
    var UpdateUserConfiguration: string;
    var UpdateUserConfigurationResponse: string;
    var UpdateUserConfigurationResponseMessage: string;
    var PlayOnPhone: string;
    var PlayOnPhoneResponse: string;
    var GetPhoneCall: string;
    var GetPhoneCallResponse: string;
    var DisconnectPhoneCall: string;
    var DisconnectPhoneCallResponse: string;
    var GetServerTimeZones: string;
    var GetServerTimeZonesResponse: string;
    var GetServerTimeZonesResponseMessage: string;
    var GetInboxRules: string;
    var GetInboxRulesResponse: string;
    var UpdateInboxRules: string;
    var UpdateInboxRulesResponse: string;
    var ExecuteDiagnosticMethod: string;
    var ExecuteDiagnosticMethodResponse: string;
    var ExecuteDiagnosticMethodResponseMEssage: string;
    var GetPasswordExpirationDateRequest: string;
    var GetPasswordExpirationDateResponse: string;
    var GetSearchableMailboxes: string;
    var GetSearchableMailboxesResponse: string;
    var GetDiscoverySearchConfiguration: string;
    var GetDiscoverySearchConfigurationResponse: string;
    var GetHoldOnMailboxes: string;
    var GetHoldOnMailboxesResponse: string;
    var SetHoldOnMailboxes: string;
    var SetHoldOnMailboxesResponse: string;
    var SearchMailboxes: string;
    var SearchMailboxesResponse: string;
    var SearchMailboxesResponseMessage: string;
    var GetNonIndexableItemDetails: string;
    var GetNonIndexableItemDetailsResponse: string;
    var GetNonIndexableItemStatistics: string;
    var GetNonIndexableItemStatisticsResponse: string;
    var SearchQueries: string;
    var SearchQuery: string;
    var MailboxQuery: string;
    var Query: string;
    var MailboxSearchScopes: string;
    var MailboxSearchScope: string;
    var SearchScope: string;
    var ResultType: string;
    var SortBy: string;
    var Order: string;
    var Language: string;
    var Deduplication: string;
    var PageSize: string;
    var PageItemReference: string;
    var PageDirection: string;
    var PreviewItemResponseShape: string;
    var ExtendedProperties: string;
    var PageItemSize: string;
    var PageItemCount: string;
    var ItemCount: string;
    var KeywordStats: string;
    var KeywordStat: string;
    var Keyword: string;
    var ItemHits: string;
    var SearchPreviewItem: string;
    var ChangeKey: string;
    var ParentId: string;
    var MailboxId: string;
    var UniqueHash: string;
    var SortValue: string;
    var OwaLink: string;
    var SmtpAddress: string;
    var CreatedTime: string;
    var ReceivedTime: string;
    var SentTime: string;
    var Preview: string;
    var HasAttachment: string;
    var FailedMailboxes: string;
    var FailedMailbox: string;
    var Token: string;
    var Refiners: string;
    var Refiner: string;
    var MailboxStats: string;
    var MailboxStat: string;
    var HoldId: string;
    var ActionType: string;
    var Mailboxes: string;
    var SearchFilter: string;
    var ReferenceId: string;
    var IsMembershipGroup: string;
    var ExpandGroupMembership: string;
    var SearchableMailboxes: string;
    var SearchableMailbox: string;
    var SearchMailboxesResult: string;
    var MailboxHoldResult: string;
    var Statuses: string;
    var MailboxHoldStatuses: string;
    var MailboxHoldStatus: string;
    var AdditionalInfo: string;
    var NonIndexableItemDetail: string;
    var NonIndexableItemStatistic: string;
    var NonIndexableItemDetails: string;
    var NonIndexableItemStatistics: string;
    var NonIndexableItemDetailsResult: string;
    var SearchArchiveOnly: string;
    var ErrorDescription: string;
    var IsPartiallyIndexed: string;
    var IsPermanentFailure: string;
    var AttemptCount: string;
    var LastAttemptTime: string;
    var SearchId: string;
    var DiscoverySearchConfigurations: string;
    var DiscoverySearchConfiguration: string;
    var InPlaceHoldConfigurationOnly: string;
    var InPlaceHoldIdentity: string;
    var ItemHoldPeriod: string;
    var ManagedByOrganization: string;
    var IsExternalMailbox: string;
    var ExternalEmailAddress: string;
    var ExtendedAttributes: string;
    var ExtendedAttribute: string;
    var ExtendedAttributeName: string;
    var ExtendedAttributeValue: string;
    var SearchScopeType: string;
    var GetAppManifestsRequest: string;
    var GetAppManifestsResponse: string;
    var Manifests: string;
    var Manifest: string;
    var Apps: string;
    var App: string;
    var Metadata: string;
    var ActionUrl: string;
    var AppStatus: string;
    var EndNodeUrl: string;
    var GetClientExtensionRequest: string;
    var ClientExtensionUserRequest: string;
    var ClientExtensionUserEnabled: string;
    var ClientExtensionUserDisabled: string;
    var ClientExtensionRequestedIds: string;
    var ClientExtensionIsDebug: string;
    var ClientExtensionRawMasterTableXml: string;
    var GetClientExtensionResponse: string;
    var ClientExtensionSpecificUsers: string;
    var ClientExtensions: string;
    var ClientExtension: string;
    var SetClientExtensionRequest: string;
    var SetClientExtensionActions: string;
    var SetClientExtensionAction: string;
    var SetClientExtensionResponse: string;
    var SetClientExtensionResponseMessage: string;
    var GetEncryptionConfigurationRequest: string;
    var SetEncryptionConfigurationRequest: string;
    var EncryptionConfigurationImageBase64: string;
    var EncryptionConfigurationEmailText: string;
    var EncryptionConfigurationPortalText: string;
    var EncryptionConfigurationDisclaimerText: string;
    var GetEncryptionConfigurationResponse: string;
    var SetEncryptionConfigurationResponse: string;
    var InstallAppRequest: string;
    var InstallAppResponse: string;
    var UninstallAppRequest: string;
    var UninstallAppResponse: string;
    var DisableAppRequest: string;
    var DisableAppResponse: string;
    var GetAppMarketplaceUrlRequest: string;
    var GetAppMarketplaceUrlResponse: string;
    var GetUserRetentionPolicyTags: string;
    var GetUserRetentionPolicyTagsResponse: string;
    var RetentionPolicyTags: string;
    var RetentionPolicyTag: string;
    var RetentionId: string;
    var RetentionPeriod: string;
    var RetentionAction: string;
    var Description: string;
    var IsVisible: string;
    var OptedInto: string;
    var IsArchive: string;
    var SOAPEnvelopeElementName: string;
    var SOAPHeaderElementName: string;
    var SOAPBodyElementName: string;
    var SOAPFaultElementName: string;
    var SOAPFaultCodeElementName: string;
    var SOAPFaultStringElementName: string;
    var SOAPFaultActorElementName: string;
    var SOAPDetailElementName: string;
    var EwsResponseCodeElementName: string;
    var EwsMessageElementName: string;
    var EwsLineElementName: string;
    var EwsPositionElementName: string;
    var EwsErrorCodeElementName: string;
    var EwsExceptionTypeElementName: string;
} class AddressEntity extends ExtractedEntity {
    Address: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class AddressEntityCollection extends ComplexPropertyCollection<AddressEntity> {
    CreateComplexProperty(xmlElementName: string): AddressEntity;
    CreateDefaultComplexProperty(): AddressEntity;
    GetCollectionItemXmlElementName(complexProperty: AddressEntity): string;
}
 class AppointmentOccurrenceId extends ItemId {
    OccurrenceIndex: number;
    GetXmlElementName(): string;
    InternalToJson(service: ExchangeService): any;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
} class ApprovalRequestData extends ComplexProperty {
    IsUndecidedApprovalRequest: boolean;
    ApprovalDecision: number;
    ApprovalDecisionMaker: string;
    ApprovalDecisionTime: Date;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class ArchiveTag extends RetentionTagBase {
} class Attachment extends ComplexProperty {
    Id: string;
    Name: string;
    ContentType: string;
    ContentId: string;
    ContentLocation: string;
    Size: number;
    LastModifiedTime: Date;
    IsInline: boolean;
    IsNew: boolean;
    Owner: Item;
    Service: ExchangeService;
    GetXmlElementName(): string;
    InternalLoad(bodyType: BodyType, additionalProperties: any[]): any;
    InternalToJson(service: ExchangeService): any;
    Load(): any;
    LoadAttachmentIdFromJson(jsonObject: any): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    SetFieldValue(field: any, value: any): any;
    ThrowIfThisIsNotNew(): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class AttachmentCollection extends ComplexPropertyCollection<Attachment> implements IOwnedProperty {
    ___implementsInterface: string[];
    ___typeName: string;
    ___typeGenerics: string[];
    Owner: ServiceObject;
    set(value: any): void;
    AddFileAttachment(fileName: string): FileAttachment;
    AddItemAttachment<TItem extends Item>(): GenericItemAttachment<TItem>;
    Clear(): void;
    ClearChangeLog(): void;
    CreateComplexProperty(xmlElementName: string): Attachment;
    CreateDefaultComplexProperty(): Attachment;
    GetCollectionItemXmlElementName(complexProperty: Attachment): string;
    HasUnprocessedChanges(): boolean;
    InternalCreateAttachments(parentItemId: string, attachments: Attachment[]): void;
    InternalDeleteAttachments(attachments: Attachment[]): void;
    Remove(attachment: Attachment): boolean;
    RemoveAt(index: number): void;
    Save(): void;
    Validate(): void;
} class Attendee extends EmailAddress {
    ResponseType: MeetingResponseType;
    LastResponseTime: Date;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class AttendeeCollection extends ComplexPropertyCollection<Attendee> {
    Add(attendee: Attendee): any;
    Clear(): any;
    CreateComplexProperty(xmlElementName: string): Attendee;
    CreateDefaultComplexProperty(): Attendee;
    GetCollectionItemXmlElementName(attendee: Attendee): string;
    Remove(attendee: Attendee): boolean;
    RemoveAt(index: number): any;
}
 class ByteArrayArray extends ComplexProperty {
    Content: string[];
    InternalToJson(service: ExchangeService): any;
    LoadFromXmlJsObject(jsonCollection: any, serviceExchangeService: any): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class ChangeHighlights extends ComplexProperty {
    HasLocationChanged: boolean;
    Location: string;
    HasStartTimeChanged: boolean;
    Start: Date;
    HasEndTimeChanged: boolean;
    End: Date;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class ClientAccessTokenRequest extends ComplexProperty {
    Id: string;
    TokenType: ClientAccessTokenType;
    Scope: string;
}
 class ClientApp extends ComplexProperty {
    Manifest: XMLDocument;
    Metadata: ClientAppMetadata;
    ReadToXmlDocument(reader: EwsServiceXmlReader): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class ClientAppMetadata extends ComplexProperty {
    EndNodeUrl: string;
    ActionUrl: string;
    AppStatus: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class ClientExtension extends ComplexProperty {
    Type: ExtensionType;
    Scope: ExtensionInstallScope;
    ManifestStream: any;
    MarketplaceAssetID: string;
    MarketplaceContentMarket: string;
    AppStatus: string;
    Etoken: string;
    IsAvailable: boolean;
    IsMandatory: boolean;
    IsEnabledByDefault: boolean;
    ProvidedTo: ClientExtensionProvidedTo;
    SpecificUsers: StringList;
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class CompleteName extends ComplexProperty {
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
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class ComplexProperty {
    ___implementsInterface: string[];
    ___typeName: string;
    Namespace: XmlNamespace;
    OnChange: ComplexPropertyChangedDelegate[];
    constructor();
    Changed(): void;
    ClearChangeLog(): void;
    InternalLoadFromXmlJsObject(jsObject: any, service: ExchangeService, readAction: (jsonProperty: any, service: ExchangeService) => void): void;
    InternalValidate(): void;
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): void;
    ReadTextValueFromXmlJsObject(jsObject: EwsServiceXmlReader): void;
    SetFieldValue<T>(field: IRefParam<T>, value: T): void;
    ReadElementsFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    ReadElementsFromXmlJsObjectToPatch(jsonProperty: any, service: ExchangeService): void;
    UpdateFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    Validate(): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, xmlNamespace?: XmlNamespace): void;
} class ComplexPropertyCollection<TComplexProperty extends ComplexProperty> extends ComplexProperty {
    ___implementsInterface: string[];
    ___typeName: string;
    ___typeGenerics: string[];
    Items: TComplexProperty[];
    AddedItems: TComplexProperty[];
    ModifiedItems: TComplexProperty[];
    RemovedItems: TComplexProperty[];
    Count: number;
    __thisIndexer(index: number): TComplexProperty;
    ClearChangeLog(): void;
    Contains(complexProperty: TComplexProperty): boolean;
    CreateComplexProperty(xmlElementName: string): TComplexProperty;
    CreateDefaultComplexProperty(): TComplexProperty;
    GetCollectionItemXmlElementName(complexProperty: TComplexProperty): string;
    IndexOf(complexProperty: TComplexProperty): number;
    InternalAdd(complexProperty: TComplexProperty, loading?: boolean): void;
    InternalClear(): void;
    InternalRemove(complexProperty: TComplexProperty): boolean;
    InternalRemoveAt(index: number): void;
    InternalToJson(service: ExchangeService): any;
    ItemChanged(complexProperty: ComplexProperty): void;
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    RemoveFromChangeLog(complexProperty: TComplexProperty): void;
    ShouldWriteToRequest(): boolean;
    UpdateFromXmlJsObject(jsObject: any, service: ExchangeService): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, xmlNamespace?: XmlNamespace): void;
    WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition): boolean;
    WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean;
} class ContactEntity extends ExtractedEntity {
    PersonName: string;
    BusinessName: string;
    PhoneNumbers: ContactPhoneEntityCollection;
    Urls: StringList;
    EmailAddresses: StringList;
    Addresses: StringList;
    ContactString: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class ContactEntityCollection extends ComplexPropertyCollection<ContactEntity> {
    CreateComplexProperty(xmlElementName: string): ContactEntity;
    CreateDefaultComplexProperty(): ContactEntity;
    GetCollectionItemXmlElementName(complexProperty: ContactEntity): string;
} class ContactPhoneEntity extends ComplexProperty {
    OriginalPhoneString: string;
    PhoneString: string;
    Type: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class ContactPhoneEntityCollection extends ComplexPropertyCollection<ContactPhoneEntity> {
    CreateComplexProperty(xmlElementName: string): ContactPhoneEntity;
    CreateDefaultComplexProperty(): ContactPhoneEntity;
    GetCollectionItemXmlElementName(complexProperty: ContactPhoneEntity): string;
}
 class ConversationId extends ServiceId {
    GetJsonTypeName(): string;
    GetXmlElementName(): string;
    ToString(): string;
}
 class ConversationNode extends ComplexProperty {
    InternetMessageId: string;
    ParentInternetMessageId: string;
    Items: Item[];
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item;
    GetXmlElementName(): string;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class ConversationNodeCollection extends ComplexPropertyCollection<ConversationNode> {
    CreateComplexProperty(xmlElementName: string): ConversationNode;
    CreateDefaultComplexProperty(): ConversationNode;
    GetCollectionItemXmlElementName(complexProperty: ConversationNode): string;
} class ConversationRequest extends ComplexProperty {
    ConversationId: ConversationId;
    SyncState: string;
    InternalToJson(service: ExchangeService): any;
    InternalValidate(): any;
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any;
} class ConversationResponse extends ComplexProperty {
    ConversationId: ConversationId;
    SyncState: string;
    ConversationNodes: ConversationNodeCollection;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class CreateRuleOperation extends RuleOperation {
    Rule: Rule;
    XmlElementName: string;
    InternalToJson(service: ExchangeService): any;
    InternalValidate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class DelegatePermissions extends ComplexProperty {
    CalendarFolderPermissionLevel: DelegateFolderPermissionLevel;
    TasksFolderPermissionLevel: DelegateFolderPermissionLevel;
    InboxFolderPermissionLevel: DelegateFolderPermissionLevel;
    ContactsFolderPermissionLevel: DelegateFolderPermissionLevel;
    NotesFolderPermissionLevel: DelegateFolderPermissionLevel;
    JournalFolderPermissionLevel: DelegateFolderPermissionLevel;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    Reset(): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    ValidateAddDelegate(): any;
    ValidateUpdateDelegate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
    WritePermissionToJson(jsonProperty: JsonObject, elementName: string): any;
    WritePermissionToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any;
}
 class DelegateUser extends ComplexProperty {
    UserId: UserId;
    Permissions: DelegatePermissions;
    ReceiveCopiesOfMeetingMessages: boolean;
    ViewPrivateItems: boolean;
    InternalToJson(service: ExchangeService): any;
    InternalValidate(): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    ValidateAddDelegate(): any;
    ValidateUpdateDelegate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class DeleteRuleOperation extends RuleOperation {
    RuleId: string;
    XmlElementName: string;
    InternalToJson(service: ExchangeService): any;
    InternalValidate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class DeletedOccurrenceInfo extends ComplexProperty {
    OriginalStart: Date;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class DeletedOccurrenceInfoCollection extends ComplexPropertyCollection<DeletedOccurrenceInfo> {
    CreateComplexProperty(xmlElementName: string): DeletedOccurrenceInfo;
    CreateDefaultComplexProperty(): DeletedOccurrenceInfo;
    GetCollectionItemXmlElementName(complexProperty: DeletedOccurrenceInfo): string;
} class DictionaryEntryProperty<TKey> extends ComplexProperty {
    Key: TKey;
    constructor();
    constructor(key: TKey);
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteDeleteUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, updates: any[]): boolean;
    WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean;
    WriteSetUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition, updates: any[]): boolean;
    WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, ownerDictionaryXmlElementName: string): boolean;
}
 class DictionaryProperty<TKey, TEntry extends DictionaryEntryProperty<any>> extends ComplexProperty {
    Entries: Dictionary<TKey, TEntry>;
    constructor(dictionaryKeyType: DictionaryKeyType);
    ClearChangeLog(): void;
    Contains(key: TKey): boolean;
    CreateEntry(): TEntry;
    CreateEntryInstance(): TEntry;
    EntryChanged(complexProperty: ComplexProperty): void;
    GetEntryXmlElementName(entry: TEntry): string;
    GetFieldIndex(key: TKey): string;
    GetFieldURI(): string;
    InternalAdd(entry: TEntry): void;
    InternalAddOrReplace(entry: TEntry): void;
    InternalRemove(key: TKey): void;
    InternalToJson(service: ExchangeService): any;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, xmlNamespace?: XmlNamespace): void;
    WriteUriToJson(key: TKey): any;
    WriteUriToXml(writer: EwsServiceXmlWriter, key: TKey): void;
}
 class EmailAddress extends ComplexProperty {
    static SmtpRoutingType: string;
    Name: string;
    Address: string;
    RoutingType: string;
    MailboxType: MailboxType;
    Id: ItemId;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    ToString(): string;
    ReadElementsFromXmlJsObject(reader: any): boolean;
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class EmailAddressCollection extends ComplexPropertyCollection<EmailAddress> {
    Add(emailAddress: EmailAddress): any;
    AddRange(emailAddresses: any[]): any;
    Clear(): any;
    CreateComplexProperty(xmlElementName: string): EmailAddress;
    CreateDefaultComplexProperty(): EmailAddress;
    GetCollectionItemXmlElementName(emailAddress: EmailAddress): string;
    Remove(emailAddress: EmailAddress): boolean;
    RemoveAt(index: number): any;
    ShouldWriteToRequest(): boolean;
} class EmailAddressDictionary extends DictionaryProperty<EmailAddressKey, EmailAddressEntry> {
    constructor();
    _getItem(key: EmailAddressKey): EmailAddress;
    _setItem(key: EmailAddressKey, value: EmailAddress): void;
    CreateEntryInstance(): EmailAddressEntry;
    GetFieldURI(): string;
    TryGetValue(key: EmailAddressKey, emailAddress: any): boolean;
} class EmailAddressEntity extends ExtractedEntity {
    EmailAddress: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class EmailAddressEntityCollection extends ComplexPropertyCollection<EmailAddressEntity> {
    CreateComplexProperty(xmlElementName: string): EmailAddressEntity;
    CreateDefaultComplexProperty(): EmailAddressEntity;
    GetCollectionItemXmlElementName(complexProperty: EmailAddressEntity): string;
} class EmailAddressEntry extends DictionaryEntryProperty<EmailAddressKey> {
    EmailAddress: EmailAddress;
    constructor();
    constructor(key: EmailAddressKey, emailAddress: EmailAddress);
    EmailAddressChanged(complexProperty: ComplexProperty): void;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class EmailUserEntity extends ComplexProperty {
    Name: string;
    UserId: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class EmailUserEntityCollection extends ComplexPropertyCollection<EmailUserEntity> {
    CreateComplexProperty(xmlElementName: string): EmailUserEntity;
    CreateDefaultComplexProperty(): EmailUserEntity;
    GetCollectionItemXmlElementName(complexProperty: EmailUserEntity): string;
} class EnhancedLocation extends ComplexProperty {
    DisplayName: string;
    Annotation: string;
    PersonaPostalAddress: PersonaPostalAddress;
    InternalToJson(service: ExchangeService): any;
    InternalValidate(): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    PersonaPostalAddress_OnChange(complexProperty: ComplexProperty): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class EntityExtractionResult extends ComplexProperty {
    Addresses: AddressEntityCollection;
    MeetingSuggestions: MeetingSuggestionCollection;
    TaskSuggestions: TaskSuggestionCollection;
    EmailAddresses: EmailAddressEntityCollection;
    Contacts: ContactEntityCollection;
    Urls: UrlEntityCollection;
    PhoneNumbers: PhoneEntityCollection;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class ExtendedProperty extends ComplexProperty {
    PropertyDefinition: ExtendedPropertyDefinition;
    Value: any;
    constructor(propertyDefinition?: ExtendedPropertyDefinition);
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetStringValue(): string;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class ExtendedPropertyCollection extends ComplexPropertyCollection<ExtendedProperty> {
    CreateComplexProperty(xmlElementName: string): ExtendedProperty;
    CreateDefaultComplexProperty(): ExtendedProperty;
    GetCollectionItemXmlElementName(complexProperty: ExtendedProperty): string;
    GetOrAddExtendedProperty(propertyDefinition: ExtendedPropertyDefinition): ExtendedProperty;
    InternalToJson(service: ExchangeService): any;
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    RemoveExtendedProperty(propertyDefinition: ExtendedPropertyDefinition): boolean;
    SetExtendedProperty(propertyDefinition: ExtendedPropertyDefinition, value: any): void;
    TryGetProperty(propertyDefinition: ExtendedPropertyDefinition, extendedProperty: IOutParam<ExtendedProperty>): boolean;
    TryGetValue<T>(propertyDefinition: ExtendedPropertyDefinition, propertyValue: IOutParam<T>): boolean;
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void;
}
 class ExtractedEntity extends ComplexProperty {
    Position: EmailPosition;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class FileAttachment extends Attachment {
    FileName: string;
    ContentStream: any;
    Content: any[];
    IsContactPhoto: boolean;
    GetXmlElementName(): string;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    ReadElementsFromXmlJsObjectToPatch(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class Flag extends ComplexProperty {
    FlagStatus: ItemFlagStatus;
    StartDate: DateTime;
    DueDate: DateTime;
    CompleteDate: DateTime;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    LoadFromXmlJsObject(jsProperty: any, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class FolderId extends ServiceId {
    FolderName: WellKnownFolderName;
    Mailbox: Mailbox;
    IsValid: boolean;
    constructor(folderName?: WellKnownFolderName, mailbox?: Mailbox);
    Equals(obj: any): boolean;
    GetXmlElementName(): string;
    ToString(): string;
    Validate(version?: ExchangeVersion): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
} class FolderIdCollection extends ComplexPropertyCollection<FolderId> {
    Add(folderId: FolderId): any;
    Clear(): any;
    CreateComplexProperty(xmlElementName: string): FolderId;
    CreateDefaultComplexProperty(): FolderId;
    GetCollectionItemXmlElementName(complexProperty: FolderId): string;
    Remove(folderId: FolderId): boolean;
    RemoveAt(index: number): any;
} class FolderPermission extends ComplexProperty {
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
    constructor();
    constructor(userId: UserId, permissionLevel: FolderPermissionLevel);
    constructor(primarySmtpAddress: string, permissionLevel: FolderPermissionLevel);
    constructor(standardUser: StandardUser, permissionLevel: FolderPermissionLevel);
    AdjustPermissionLevel(): void;
    AssignIndividualPermissions(permission: FolderPermission): void;
    Clone(): FolderPermission;
    InternalToJson(service: ExchangeService, isCalendarFolder: boolean): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    PropertyChanged(complexProperty: ComplexProperty): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    Validate(isCalendarFolder?: boolean, permissionIndex?: number): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter, isCalendarFolder?: boolean): void;
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, xmlNamespace?: XmlNamespace, isCalendarFolder?: boolean): void;
}
 class FolderPermissionCollection extends ComplexPropertyCollection<FolderPermission> {
    UnknownEntries: string[];
    constructor(owner: Folder);
    Add(permission: FolderPermission): void;
    AddRange(permissions: FolderPermission[]): void;
    Clear(): void;
    CreateComplexProperty(xmlElementName: string): FolderPermission;
    CreateDefaultComplexProperty(): FolderPermission;
    GetCollectionItemXmlElementName(complexProperty: FolderPermission): string;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    Remove(permission: FolderPermission): boolean;
    RemoveAt(index: number): void;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class GenericItemAttachment<TItem extends Item> extends ItemAttachment {
    Item: TItem;
    constructor(owner: Item);
}
 class GroupMember extends ComplexProperty {
    Key: string;
    AddressInformation: EmailAddress;
    Status: MemberStatus;
    AddressInformationChanged(complexProperty: ComplexProperty): any;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class GroupMemberCollection extends ComplexPropertyCollection<GroupMember> {
    Add(member: GroupMember): any;
    AddContactEmailAddress(contact: Contact, emailAddressKey: EmailAddressKey): any;
    AddContactGroup(contactGroupId: ItemId): any;
    AddDirectoryContact(address: string, routingType: string): any;
    AddDirectoryPublicFolder(smtpAddress: string): any;
    AddDirectoryUser(address: string, routingType: string): any;
    AddOneOff(displayName: string, address: string, routingType: string): any;
    AddPersonalContact(contactId: ItemId): any;
    AddPublicGroup(smtpAddress: string): any;
    AddRange(members: GroupMember[]): any;
    Clear(): any;
    ClearChangeLog(): any;
    CreateComplexProperty(xmlElementName: string): GroupMember;
    CreateDefaultComplexProperty(): GroupMember;
    Find(key: string): GroupMember;
    GetCollectionItemXmlElementName(member: GroupMember): string;
    InternalValidate(): any;
    Remove(member: GroupMember): boolean;
    RemoveAt(index: number): any;
    WriteDeleteMembersCollectionToXml(writer: EwsServiceXmlWriter): any;
    WriteDeleteMembersToXml(writer: EwsServiceXmlWriter, members: GroupMember[]): any;
    WriteSetOrAppendMembersToXml(writer: EwsServiceXmlWriter, members: GroupMember[], setMode: boolean): any;
} class HighlightTerm extends ComplexProperty {
    Scope: string;
    Value: string;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class ImAddressDictionary extends DictionaryProperty<ImAddressKey, ImAddressEntry> {
    constructor();
    _getItem(key: ImAddressKey): string;
    _setItem(key: ImAddressKey, value: string): void;
    CreateEntryInstance(): ImAddressEntry;
    GetFieldURI(): string;
    TryGetValue(key: ImAddressKey, imAddress: IOutParam<string>): boolean;
} class ImAddressEntry extends DictionaryEntryProperty<ImAddressKey> {
    ImAddress: string;
    constructor();
    constructor(key: ImAddressKey, imAddress: string);
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    LoadFromFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class InternetMessageHeader extends ComplexProperty {
    Name: string;
    Value: string;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any;
    ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any;
    ToString(): string;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class InternetMessageHeaderCollection extends ComplexPropertyCollection<InternetMessageHeader> {
    CreateComplexProperty(xmlElementName: string): InternetMessageHeader;
    CreateDefaultComplexProperty(): InternetMessageHeader;
    Find(name: string): InternetMessageHeader;
    GetCollectionItemXmlElementName(complexProperty: InternetMessageHeader): string;
} class ItemAttachment extends Attachment {
    Item: Item;
    protected item: Item;
    GetXmlElementName(): string;
    InternalToJson(service: ExchangeService): any;
    ItemChanged(serviceObject: ServiceObject): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    ReadElementsFromXmlJsObjectToPatch(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class ItemCollection<TItem> extends ComplexProperty {
    __implements: string[];
    Count: number;
    Item: TItem;
    GetEnumerator(): any;
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): any;
}
 class ItemId extends ServiceId {
    GetXmlElementName(): string;
} class ItemIdCollection extends ComplexPropertyCollection<ItemId> {
    CreateComplexProperty(xmlElementName: string): ItemId;
    CreateDefaultComplexProperty(): ItemId;
    GetCollectionItemXmlElementName(complexProperty: ItemId): string;
} class Mailbox extends ComplexProperty {
    ___implementsInterface: string[];
    ___typeName: string;
    IsValid: boolean;
    Address: string;
    RoutingType: string;
    constructor(address: string, routingType: string);
    Equals(obj: any): boolean;
    InternalValidate(): any;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): any;
    ToString(): string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
    GetSearchString(): string;
}
 class ManagedFolderInformation extends ComplexProperty {
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
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class MeetingSuggestion extends ExtractedEntity {
    Attendees: EmailUserEntityCollection;
    Location: string;
    Subject: string;
    MeetingString: string;
    StartTime: Date;
    EndTime: Date;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class MeetingSuggestionCollection extends ComplexPropertyCollection<MeetingSuggestion> {
    CreateComplexProperty(xmlElementName: string): MeetingSuggestion;
    CreateDefaultComplexProperty(): MeetingSuggestion;
    GetCollectionItemXmlElementName(complexProperty: MeetingSuggestion): string;
} class MeetingTimeZone extends ComplexProperty {
    Name: string;
    BaseOffset: any;
    Standard: TimeChange;
    Daylight: TimeChange;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any;
    ToTimeZoneInfo(): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class MessageBody extends ComplexProperty {
    BodyType: BodyType;
    Text: string;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any;
    ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any;
    ToString(): string;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class MimeContent extends ComplexProperty {
    CharacterSet: string;
    Content: any[];
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any;
    ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any;
    ToString(): string;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class MimeContentBase extends ComplexProperty {
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): void;
    ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): void;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
    InternalToJson(service: ExchangeService): any;
    CharacterSet: string;
    Content: any[];
}
 class MimeContentUTF8 extends MimeContentBase {
    constructor(content: any[]);
    ToString(): string;
}
 class NormalizedBody extends ComplexProperty {
    BodyType: BodyType;
    Text: string;
    IsTruncated: boolean;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any;
    ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any;
    ToString(): string;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class OccurrenceInfo extends ComplexProperty {
    ItemId: ItemId;
    Start: Date;
    End: Date;
    OriginalStart: Date;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class OccurrenceInfoCollection extends ComplexPropertyCollection<OccurrenceInfo> {
    CreateComplexProperty(xmlElementName: string): OccurrenceInfo;
    CreateDefaultComplexProperty(): OccurrenceInfo;
    GetCollectionItemXmlElementName(complexProperty: OccurrenceInfo): string;
} class OnlineMeetingSettings extends ComplexProperty {
    LobbyBypass: LobbyBypass;
    AccessLevel: OnlineMeetingAccessLevel;
    Presenters: Presenters;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class PersonaPostalAddress extends ComplexProperty {
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
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
    WriteToXml(writer: EwsServiceXmlWriter): any;
} class PhoneEntity extends ExtractedEntity {
    OriginalPhoneString: string;
    PhoneString: string;
    Type: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class PhoneEntityCollection extends ComplexPropertyCollection<PhoneEntity> {
    CreateComplexProperty(xmlElementName: string): PhoneEntity;
    CreateDefaultComplexProperty(): PhoneEntity;
    GetCollectionItemXmlElementName(complexProperty: PhoneEntity): string;
} class PhoneNumberDictionary extends DictionaryProperty<PhoneNumberKey, PhoneNumberEntry> {
    constructor();
    _getItem(key: PhoneNumberKey): string;
    _setItem(key: PhoneNumberKey, value: string): void;
    CreateEntryInstance(): PhoneNumberEntry;
    GetFieldURI(): string;
    TryGetValue(key: PhoneNumberKey, phoneNumber: IOutParam<string>): boolean;
}
 class PhoneNumberEntry extends DictionaryEntryProperty<PhoneNumberKey> {
    PhoneNumber: string;
    constructor();
    constructor(key: PhoneNumberKey, imAddress: string);
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class PhysicalAddressDictionary extends DictionaryProperty<PhysicalAddressKey, PhysicalAddressEntry> {
    constructor();
    _getItem(key: PhysicalAddressKey): PhysicalAddressEntry;
    _setItem(key: PhysicalAddressKey, value: PhysicalAddressEntry): void;
    CreateEntryInstance(): PhysicalAddressEntry;
    TryGetValue(key: PhysicalAddressKey, physicalAddress: IOutParam<PhysicalAddressEntry>): boolean;
}/**
 * PhysicalAddressEntry class
 */
 class PhysicalAddressEntry extends DictionaryEntryProperty<PhysicalAddressKey> {
    Street: string;
    City: string;
    State: string;
    CountryOrRegion: string;
    PostalCode: string;
    constructor();
    ClearChangeLog(): void;
    InternalToJson(service: ExchangeService): any;
    InternalWriteDeleteFieldToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, fieldXmlElementName: string): void;
    InternalWriteDeleteUpdateToJson(ewsObject: ServiceObject, propertyName: string, updates: any[]): void;
    LoadFromJson(jsonProperty: any, service: ExchangeService): void;
    PropertyBagChanged(): void;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    WriteDeleteUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, updates: any[]): boolean;
    WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
    WriteSetUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition, updates: any[]): boolean;
    WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, ownerDictionaryXmlElementName: string): boolean;
}
 class PolicyTag extends RetentionTagBase {
}
 class RecurringAppointmentMasterId extends ItemId {
    GetXmlElementName(): string;
    InternalToJson(service: ExchangeService): any;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
} class RetentionTagBase extends ComplexProperty {
    IsExplicit: boolean;
    RetentionId: string;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any;
    ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any;
    ToString(): string;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class Rule extends ComplexProperty {
    Id: string;
    DisplayName: string;
    Priority: number;
    IsEnabled: boolean;
    IsNotSupported: boolean;
    IsInError: boolean;
    Conditions: RulePredicates;
    Actions: RuleActions;
    Exceptions: RulePredicates;
    InternalToJson(service: ExchangeService): any;
    InternalValidate(): void;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class RuleActions extends ComplexProperty {
    AssignCategories: StringList;
    CopyToFolder: FolderId;
    Delete: boolean;
    ForwardAsAttachmentToRecipients: EmailAddressCollection;
    ForwardToRecipients: EmailAddressCollection;
    MarkImportance: any;
    MarkAsRead: boolean;
    MoveToFolder: FolderId;
    PermanentDelete: boolean;
    RedirectToRecipients: EmailAddressCollection;
    SendSMSAlertToRecipients: MobilePhone[];
    ServerReplyWithMessage: ItemId;
    StopProcessingRules: boolean;
    ConvertSMSRecipientsFromEmailAddressCollectionToMobilePhoneCollection(emailCollection: EmailAddressCollection): MobilePhone[];
    ConvertSMSRecipientsFromMobilePhoneCollectionToEmailAddressCollection(recipientCollection: MobilePhone[]): EmailAddressCollection;
    InternalToJson(service: ExchangeService): any;
    InternalValidate(): void;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class RuleCollection extends ComplexProperty {
    OutlookRuleBlobExists: boolean;
    Count: number;
    Item: Rule;
    GetEnumerator(): Rule[];
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class RuleError extends ComplexProperty {
    RuleProperty: RuleProperty;
    ErrorCode: RuleErrorCode;
    ErrorMessage: string;
    Value: string;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class RuleErrorCollection extends ComplexPropertyCollection<RuleError> {
    CreateComplexProperty(xmlElementName: string): RuleError;
    CreateDefaultComplexProperty(): RuleError;
    GetCollectionItemXmlElementName(ruleValidationError: RuleError): string;
}
 class RuleOperation extends ComplexProperty {
    XmlElementName: string;
} class RuleOperationError extends ComplexProperty {
    Operation: RuleOperation;
    Count: number;
    Item: RuleError;
    GetEnumerator(): RuleError[];
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    SetOperationByIndex(operations: RuleOperation[]): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class RuleOperationErrorCollection extends ComplexPropertyCollection<RuleOperationError> {
    CreateComplexProperty(xmlElementName: string): RuleOperationError;
    CreateDefaultComplexProperty(): RuleOperationError;
    GetCollectionItemXmlElementName(operationError: RuleOperationError): string;
}
 class RulePredicateDateRange extends ComplexProperty {
    Start: Date;
    End: Date;
    InternalToJson(service: ExchangeService): any;
    InternalValidate(): void;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class RulePredicateSizeRange extends ComplexProperty {
    MinimumSize: number;
    MaximumSize: number;
    InternalToJson(service: ExchangeService): any;
    InternalValidate(): void;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class RulePredicates extends ComplexProperty {
    Categories: StringList;
    ContainsBodyStrings: StringList;
    ContainsHeaderStrings: StringList;
    ContainsRecipientStrings: StringList;
    ContainsSenderStrings: StringList;
    ContainsSubjectOrBodyStrings: StringList;
    ContainsSubjectStrings: StringList;
    FlaggedForAction: any;
    FromAddresses: EmailAddressCollection;
    HasAttachments: boolean;
    Importance: any;
    IsApprovalRequest: boolean;
    IsAutomaticForward: boolean;
    IsAutomaticReply: boolean;
    IsEncrypted: boolean;
    IsMeetingRequest: boolean;
    IsMeetingResponse: boolean;
    IsNonDeliveryReport: boolean;
    IsPermissionControlled: boolean;
    IsSigned: boolean;
    IsVoicemail: boolean;
    IsReadReceipt: boolean;
    FromConnectedAccounts: StringList;
    ItemClasses: StringList;
    MessageClassifications: StringList;
    NotSentToMe: boolean;
    SentCcMe: boolean;
    SentOnlyToMe: boolean;
    SentToAddresses: EmailAddressCollection;
    SentToMe: boolean;
    SentToOrCcMe: boolean;
    Sensitivity: any;
    WithinDateRange: RulePredicateDateRange;
    WithinSizeRange: RulePredicateSizeRange;
    InternalValidate(): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class SearchFolderParameters extends ComplexProperty {
    Traversal: SearchFolderTraversal;
    RootFolderIds: FolderIdCollection;
    SearchFilter: SearchFilter;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    PropertyChanged(complexProperty: ComplexProperty): any;
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    Validate(): any;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class ServiceId extends ComplexProperty {
    IsValid: boolean;
    protected IsValidProxy(): boolean;
    UniqueId: string;
    ChangeKey: string;
    constructor(uniqueId?: string);
    Assign(source: ServiceId): void;
    Equals(obj: any): boolean;
    GetXmlElementName(): string;
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): void;
    SameIdAndChangeKey(other: ServiceId): boolean;
    ToString(): string;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
} class SetClientExtensionAction extends ComplexProperty {
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class SetRuleOperation extends RuleOperation {
    Rule: Rule;
    XmlElementName: string;
    InternalToJson(service: ExchangeService): any;
    InternalValidate(): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class StringList extends ComplexProperty {
    Count: number;
    Items: string[];
    constructor(stringOrItemXmlElementName?: string | string[]);
    _getItem(index: number): string;
    _setItem(index: number, value: string): void;
    Add(s: string): void;
    AddRange(strings: string[]): void;
    Clear(): void;
    Contains(s: string): boolean;
    Equals(obj: any): boolean;
    GetEnumerator(): any;
    GetHashCode(): number;
    InternalToJson(service: ExchangeService): any;
    Remove(s: string): boolean;
    RemoveAt(index: number): void;
    ToString(): string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class TaskSuggestion extends ExtractedEntity {
    TaskString: string;
    Assignees: EmailUserEntityCollection;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class TaskSuggestionCollection extends ComplexPropertyCollection<TaskSuggestion> {
    CreateComplexProperty(xmlElementName: string): TaskSuggestion;
    CreateDefaultComplexProperty(): TaskSuggestion;
    GetCollectionItemXmlElementName(complexProperty: TaskSuggestion): string;
}
 class TextBody extends MessageBody {
}
 class TimeChange extends ComplexProperty {
    TimeZoneName: string;
    Offset: any;
    Time: Time;
    AbsoluteDate: Date;
    Recurrence: TimeChangeRecurrence;
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class TimeChangeRecurrence extends ComplexProperty {
    DayOfTheWeekIndex: DayOfTheWeekIndex;
    DayOfTheWeek: DayOfTheWeek;
    Month: Month;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class UniqueBody extends ComplexProperty {
    BodyType: BodyType;
    Text: string;
    IsTruncated: boolean;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any;
    ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any;
    ToString(): string;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class UrlEntity extends ExtractedEntity {
    Url: string;
    ReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class UrlEntityCollection extends ComplexPropertyCollection<UrlEntity> {
    CreateComplexProperty(xmlElementName: string): UrlEntity;
    CreateDefaultComplexProperty(): UrlEntity;
    GetCollectionItemXmlElementName(complexProperty: UrlEntity): string;
}
 class UserConfigurationDictionary extends ComplexProperty {
    Item: any;
    Count: number;
    IsDirty: boolean;
    Add(key: any, value: any): any;
    Changed(): any;
    Clear(): any;
    ConstructObject(type: UserConfigurationDictionaryObjectType, value: string[], service: ExchangeService): any;
    ContainsKey(key: any): boolean;
    CreateFromJsonCollection(jsonCollection: any, service: ExchangeService): any;
    GetDictionaryObject(reader: EwsServiceXmlReader): any;
    GetEnumerator(): any;
    GetJsonObject(dictionaryObject: any, service: ExchangeService): JsonObject;
    GetObjectType(reader: EwsServiceXmlReader): UserConfigurationDictionaryObjectType;
    GetObjectValue(valueArray: any): string[];
    GetTypeCode(service: ExchangeServiceBase, dictionaryObject: any, dictionaryObjectType: any, valueAsString: any): any;
    InternalToJson(service: ExchangeService): any;
    LoadEntry(reader: EwsServiceXmlReader): any;
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    Remove(key: any): boolean;
    TryGetValue(key: any, value: any): boolean;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    UpdateFromJsonCollection(jsonCollection: any, service: ExchangeService): any;
    ValidateArrayObject(dictionaryObjectAsArray: Array<any>): any;
    ValidateEntry(key: any, value: any): any;
    ValidateObject(dictionaryObject: any): any;
    ValidateObjectType(type: any): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
    WriteEntryTypeToXml(writer: EwsServiceXmlWriter, dictionaryObjectType: UserConfigurationDictionaryObjectType): any;
    WriteEntryValueToXml(writer: EwsServiceXmlWriter, value: string): any;
    WriteObjectToXml(writer: EwsServiceXmlWriter, xmlElementName: string, dictionaryObject: any): any;
    WriteObjectValueToXml(writer: EwsServiceXmlWriter, dictionaryObject: any): any;
} class UserId extends ComplexProperty {
    SID: string;
    PrimarySmtpAddress: string;
    DisplayName: string;
    StandardUser: StandardUser;
    constructor();
    constructor(standardUser: StandardUser);
    constructor(primarySmtpAddress: string);
    /**this is to shim constructor with easy use within file/module. */
    constructor(primarySmtpAddressOrStandardUser?: string | StandardUser);
    InternalToJson(service: ExchangeService): any;
    IsValid(): boolean;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class VotingInformation extends ComplexProperty {
    UserOptions: VotingOptionData[];
    VotingResponse: string;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class VotingOptionData extends ComplexProperty {
    DisplayName: string;
    SendPrompt: SendPrompt;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}

 class ClientCertificateCredentials extends ExchangeCredentials {
    ClientCertificates: any;
    PrepareWebRequest(request: any): any;
} class ExchangeCredentials {
    static WsSecurityPathSuffix: string;
    UserName: string;
    Password: string;
    constructor();
    constructor(userName: string, password: string);
    AdjustUrl(url: Uri): Uri;
    EmitExtraSoapHeaderNamespaceAliases(writer: any): void;
    static GetUriWithoutSuffix(url: Uri): string;
    PrepareWebRequest(request: IXHROptions): void;
    SerializeExtraSoapHeaders(writer: any, webMethodName: string): void;
} class OAuthCredentials extends ExchangeCredentials {
    constructor(token: string);
    constructor(token: string, verbatim: boolean);
    PrepareWebRequest(request: IXHROptions): void;
} class PartnerTokenCredentials extends WSSecurityBasedCredentials {
    NeedSignature: boolean;
    AdjustUrl(url: Uri): Uri;
    Sign(memoryStream: any): any;
}
 class TokenCredentials extends WSSecurityBasedCredentials {
} class WSSecurityBasedCredentials extends ExchangeCredentials {
    static WsAddressingHeadersFormat: string;
    static WsSecurityHeaderFormat: string;
    static WsuTimeStampFormat: string;
    SecurityToken: string;
    EwsUrl: Uri;
    static NamespaceManager: any;
    AdjustUrl(url: Uri): Uri;
    EmitExtraSoapHeaderNamespaceAliases(writer: any): any;
    PreAuthenticate(): any;
    SerializeExtraSoapHeaders(writer: any, webMethodName: string): any;
    SerializeWSAddressingHeaders(xmlWriter: any, webMethodName: string): any;
    SerializeWSSecurityHeaders(xmlWriter: any): any;
} class WSSecurityUtilityIdSignedXml {
    AddReference(xpath: string): any;
    GetIdElement(document: any, idValue: string): any;
    GetUniqueId(): string;
} class WebCredentials extends ExchangeCredentials {
    Credentials: any;
    AdjustUrl(url: Uri): Uri;
} class WindowsLiveCredentials extends WSSecurityBasedCredentials {
    static XmlEncNamespace: string;
    static WindowsLiveSoapNamespacePrefix: string;
    static RequestSecurityTokenResponseCollectionElementName: string;
    static RequestSecurityTokenResponseElementName: string;
    static EncryptedDataElementName: string;
    static PpElementName: string;
    static ReqstatusElementName: string;
    static SuccessfulReqstatus: string;
    static XmlSignatureReference: string;
    TraceEnabled: boolean;
    TraceListener: ITraceListener;
    WindowsLiveUrl: Uri;
    IsAuthenticated: boolean;
    static DefaultWindowsLiveUrl: Uri;
    EmitTokenRequest(uriForTokenEndpointReference: Uri): any;
    MakeTokenRequestToWindowsLive(uriForTokenEndpointReference: Uri): any;
    ParseWindowsLiveRSTResponseBody(rstResponse: EwsXmlReader): any;
    ProcessTokenResponse(response: any): any;
    ReadWindowsLiveRSTResponseHeaders(rstResponse: EwsXmlReader): any;
    TraceResponse(response: any, memoryStream: any): any;
    TraceWebException(e: any): any;
} class X509CertificateCredentials extends WSSecurityBasedCredentials {
    NeedSignature: boolean;
    AdjustUrl(url: Uri): Uri;
    Sign(memoryStream: any): any;
    ToString(): string;
} class DnsClient {
    DnsQuer<T>(domain: string, dnsServerAddress: any): T[];
}
 class DnsRecord {
    RecordType: DnsRecordType;
    Name: string;
    TimeToLive: any;
    Load(header: DnsRecordHeader, dataPointer: number): void;
}
 class DnsRecordHeader {
    NextRecord: number;
    Name: string;
    RecordType: DnsRecordType;
    DataLength: number;
    Flags: number;
    Ttl: number;
    Reserved: number;
}
 class DnsSrvRecord extends DnsRecord {
    RecordType: DnsRecordType;
    NameTarget: string;
    Priority: number;
    Weight: number;
    Port: number;
    Load(header: DnsRecordHeader, dataPointer: number): void;
} class RetentionPolicyTag {
    DisplayName: string;
    RetentionId: any;
    RetentionPeriod: number;
    Type: ElcFolderType;
    RetentionAction: RetentionActionType;
    Description: string;
    IsVisible: boolean;
    OptedInto: boolean;
    IsArchive: boolean;
    LoadFromJson(jsonObject: JsonObject): RetentionPolicyTag;
    LoadFromXml(reader: EwsServiceXmlReader): RetentionPolicyTag;
} class AccountIsLockedException extends ServiceRemoteException {
    AccountUnlockUrl: Uri;
} class AutodiscoverLocalException extends ServiceLocalException {
    constructor(message?: string, innerException?: Exception);
} class AutodiscoverRemoteException extends ServiceRemoteException {
    Error: AutodiscoverError;
} class AutodiscoverResponseException extends ServiceRemoteException {
    ErrorCode: AutodiscoverErrorCode;
}
 class BatchServiceResponseException<TResponse extends ServiceResponse> extends ServiceRemoteException {
    ServiceResponses: ServiceResponseCollection<TResponse>;
} class CreateAttachmentException extends BatchServiceResponseException<CreateAttachmentResponse> {
} class DeleteAttachmentException extends BatchServiceResponseException<DeleteAttachmentResponse> {
}
 class Exception {
    Message: string;
    InnerException: Exception;
    constructor(message?: string, innerException?: Exception);
}
 class JsonDeserializationNotImplementedException extends ServiceLocalException {
}
 class JsonSerializationNotImplementedException extends Exception {
} class PropertyException extends ServiceLocalException {
    Name: string;
    constructor(message: string, name?: string, innerException?: Exception);
}
 class ServerBusyException extends ServiceResponseException {
    BackOffMilliseconds: number;
}
 class ServiceJsonDeserializationException extends ServiceLocalException {
}
 class ServiceLocalException extends Exception {
    constructor(message?: string, innerException?: Exception);
}
 class ServiceObjectPropertyException extends PropertyException {
    PropertyDefinition: PropertyDefinitionBase;
    constructor(message: string, propertyDefinition: PropertyDefinitionBase, innerException?: Exception);
}
 class ServiceRemoteException extends Exception {
}
 class ServiceRequestException extends ServiceRemoteException {
}
 class ServiceResponseException extends ServiceRemoteException {
    Response: ServiceResponse;
    ErrorCode: ServiceError;
    Message: string;
    constructor(response: ServiceResponse);
}
 class ServiceValidationException extends ServiceLocalException {
}
 class ServiceVersionException extends ServiceLocalException {
}
 class ServiceXmlDeserializationException extends ServiceLocalException {
} class ServiceXmlSerializationException extends ServiceLocalException {
    constructor(message?: string, innerException?: Exception);
}
 class TimeZoneConversionException extends ServiceLocalException {
} class UpdateInboxRulesException extends ServiceRemoteException {
    ServiceResponse: ServiceResponse;
    Errors: RuleOperationErrorCollection;
    ErrorCode: ServiceError;
    ErrorMessage: string;
}/** Indicates which occurrence of a recurring task should be deleted*/
 enum AffectedTaskOccurrence {
    /** All occurrences of the recurring task will be deleted.*/
    AllOccurrences = 0,
    /** Only the current occurrence of the recurring task will be deleted. */
    SpecifiedOccurrenceOnly = 1,
}/** Defines the type of aggregation to perform.*/
 enum AggregateType {
    /** The maximum value is calculated. */
    Minimum = 0,
    /** The minimum value is calculated. */
    Maximum = 1,
} enum AppointmentType {
    Single = 0,
    Occurrence = 1,
    Exception = 2,
    RecurringMaster = 3,
} enum AutodiscoverEndpoints {
    None = 0,
    Legacy = 1,
    Soap = 2,
    WsSecurity = 4,
    WSSecuritySymmetricKey = 8,
    WSSecurityX509Cert = 16,
    OAuth = 32,
} enum AutodiscoverErrorCode {
    NoError = 0,
    RedirectAddress = 1,
    RedirectUrl = 2,
    InvalidUser = 3,
    InvalidRequest = 4,
    InvalidSetting = 5,
    SettingIsNotAvailable = 6,
    ServerBusy = 7,
    InvalidDomain = 8,
    NotFederated = 9,
    InternalServerError = 10,
} enum AutodiscoverResponseType {
    Error = 0,
    RedirectUrl = 1,
    RedirectAddress = 2,
    Success = 3,
} enum AvailabilityData {
    FreeBusy = 0,
    Suggestions = 1,
    FreeBusyAndSuggestions = 2,
} enum BasePropertySet {
    IdOnly = 0,
    FirstClassProperties = 1,
} enum BodyType {
    HTML = 0,
    Text = 1,
} enum ChangeType {
    Create = 0,
    Update = 1,
    Delete = 2,
    ReadFlagChange = 3,
} enum ClientAccessTokenType {
    CallerIdentity = 0,
    ExtensionCallback = 1,
    ScopedToken = 2,
} enum ClientExtensionProvidedTo {
    Everyone = 0,
    SpecificUsers = 1,
} enum ComparisonMode {
    Exact = 0,
    IgnoreCase = 1,
    IgnoreNonSpacingCharacters = 2,
    IgnoreCaseAndNonSpacingCharacters = 3,
} enum ConflictResolutionMode {
    NeverOverwrite = 0,
    AutoResolve = 1,
    AlwaysOverwrite = 2,
} enum ConflictType {
    IndividualAttendeeConflict = 0,
    GroupConflict = 1,
    GroupTooBigConflict = 2,
    UnknownAttendeeConflict = 3,
} enum ConnectingIdType {
    PrincipalName = 0,
    SID = 1,
    SmtpAddress = 2,
} enum ConnectionFailureCause {
    None = 0,
    UserBusy = 1,
    NoAnswer = 2,
    Unavailable = 3,
    Other = 4,
}
 enum ContactSource {
    ActiveDirectory = 0,
    Store = 1,
} enum ContainmentMode {
    FullString = 0,
    Prefixed = 1,
    Substring = 2,
    PrefixOnWords = 3,
    ExactPhrase = 4,
} enum ConversationActionType {
    AlwaysCategorize = 0,
    AlwaysDelete = 1,
    AlwaysMove = 2,
    Delete = 3,
    Move = 4,
    Copy = 5,
    SetReadState = 6,
    SetRetentionPolicy = 7,
    Flag = 8,
} enum ConversationFlagStatus {
    NotFlagged = 0,
    Flagged = 1,
    Complete = 2,
} enum ConversationQueryTraversal {
    Shallow = 0,
    Deep = 1,
} enum ConversationSortOrder {
    TreeOrderAscending = 0,
    TreeOrderDescending = 1,
    DateOrderAscending = 2,
    DateOrderDescending = 3,
} enum DateTimePrecision {
    Default = 0,
    Seconds = 1,
    Milliseconds = 2,
} enum DayOfTheWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Day = 7,
    Weekday = 8,
    WeekendDay = 9,
} enum DayOfTheWeekIndex {
    First = 0,
    Second = 1,
    Third = 2,
    Fourth = 3,
    Last = 4,
} enum DefaultExtendedPropertySet {
    Meeting = 0,
    Appointment = 1,
    Common = 2,
    PublicStrings = 3,
    Address = 4,
    InternetHeaders = 5,
    CalendarAssistant = 6,
    UnifiedMessaging = 7,
    Task = 8,
} enum DelegateFolderPermissionLevel {
    None = 0,
    Editor = 1,
    Reviewer = 2,
    Author = 3,
    Custom = 4,
} enum DeleteMode {
    HardDelete = 0,
    SoftDelete = 1,
    MoveToDeletedItems = 2,
} enum DictionaryKeyType {
    EmailAddressKey = 0,
    ImAddressKey = 1,
    PhoneNumberKey = 2,
    PhysicalAddressKey = 3,
} enum DisableReasonType {
    NoReason = 0,
    OutlookClientPerformance = 1,
    OWAClientPerformance = 2,
    MobileClientPerformance = 3,
}
 enum DnsRecordType {
    A = 1,
    CNAME = 5,
    SOA = 6,
    PTR = 12,
    MX = 15,
    TXT = 16,
    AAAA = 28,
    SRV = 33,
} enum DomainSettingName {
    ExternalEwsUrl = 0,
    ExternalEwsVersion = 1,
} enum EffectiveRights {
    None = 0,
    CreateAssociated = 1,
    CreateContents = 2,
    CreateHierarchy = 4,
    Delete = 8,
    Modify = 16,
    Read = 32,
    ViewPrivateItems = 64,
} enum ElcFolderType {
    Calendar = 1,
    Contacts = 2,
    DeletedItems = 3,
    Drafts = 4,
    Inbox = 5,
    JunkEmail = 6,
    Journal = 7,
    Notes = 8,
    Outbox = 9,
    SentItems = 10,
    Tasks = 11,
    All = 12,
    ManagedCustomFolder = 13,
    RssSubscriptions = 14,
    SyncIssues = 15,
    ConversationHistory = 16,
    Personal = 17,
    RecoverableItems = 18,
    NonIpmRoot = 19,
} enum EmailAddressKey {
    EmailAddress1 = 0,
    EmailAddress2 = 1,
    EmailAddress3 = 2,
} enum EmailPosition {
    LatestReply = 0,
    Other = 1,
    Subject = 2,
    Signature = 3,
}/**custom created to simplify creation of above Enum(s) to ExchangeVersion mapping in EwsUtil, There is no c# like Attribute typesystem and reflection available */
 enum EnumToExchangeVersionMappingHelper {
    WellKnownFolderName = 0,
    /**Item Traversal */
    ItemTraversal = 1,
    ConversationQueryTraversal = 2,
    FileAsMapping = 3,
    EventType = 4,
    MeetingRequestsDeliveryScope = 5,
    ViewFilter = 6,
} enum EventType {
    Status = 0,
    NewMail = 1,
    Deleted = 2,
    Modified = 3,
    Moved = 4,
    Copied = 5,
    Created = 6,
    FreeBusyChanged = 7,
} enum ExchangeVersion {
    Exchange2007_SP1 = 0,
    Exchange2010 = 1,
    Exchange2010_SP1 = 2,
    Exchange2010_SP2 = 3,
    Exchange2013 = 4,
    Exchange2013_SP1 = 5,
    Exchange_Version_Not_Updated = 15000,
} enum ExtensionInstallScope {
    None = 0,
    User = 1,
    Organization = 2,
    Default = 3,
} enum ExtensionType {
    Default = 0,
    Private = 1,
    MarketPlace = 2,
} enum FileAsMapping {
    None = 0,
    SurnameCommaGivenName = 1,
    GivenNameSpaceSurname = 2,
    Company = 3,
    SurnameCommaGivenNameCompany = 4,
    CompanySurnameGivenName = 5,
    SurnameGivenName = 6,
    SurnameGivenNameCompany = 7,
    CompanySurnameCommaGivenName = 8,
    SurnameGivenNameSuffix = 9,
    SurnameSpaceGivenNameCompany = 10,
    CompanySurnameSpaceGivenName = 11,
    SurnameSpaceGivenName = 12,
    DisplayName = 13,
    GivenName = 14,
    SurnameGivenNameMiddleSuffix = 15,
    Surname = 16,
    Empty = 17,
} enum FlaggedForAction {
    Any = 0,
    Call = 1,
    DoNotForward = 2,
    FollowUp = 3,
    FYI = 4,
    Forward = 5,
    NoResponseNecessary = 6,
    Read = 7,
    Reply = 8,
    ReplyToAll = 9,
    Review = 10,
} enum FolderPermissionLevel {
    None = 0,
    Owner = 1,
    PublishingEditor = 2,
    Editor = 3,
    PublishingAuthor = 4,
    Author = 5,
    NoneditingAuthor = 6,
    Reviewer = 7,
    Contributor = 8,
    FreeBusyTimeOnly = 9,
    FreeBusyTimeAndSubjectAndLocation = 10,
    Custom = 11,
} enum FolderPermissionReadAccess {
    None = 0,
    TimeOnly = 1,
    TimeAndSubjectAndLocation = 2,
    FullDetails = 3,
} enum FolderTraversal {
    Shallow = 0,
    Deep = 1,
    SoftDeleted = 2,
} enum FreeBusyViewType {
    None = 0,
    MergedOnly = 1,
    FreeBusy = 2,
    FreeBusyMerged = 3,
    Detailed = 4,
    DetailedMerged = 5,
}
 enum HangingRequestDisconnectReason {
    Clean = 0,
    UserInitiated = 1,
    Timeout = 2,
    Exception = 3,
} enum HoldAction {
    Create = 0,
    Update = 1,
    Remove = 2,
} enum HoldStatus {
    NotOnHold = 0,
    Pending = 1,
    OnHold = 2,
    PartialHold = 3,
    Failed = 4,
}
 enum IconIndex {
    Default = 0,
    PostItem = 1,
    MailRead = 2,
    MailUnread = 3,
    MailReplied = 4,
    MailForwarded = 5,
    MailEncrypted = 6,
    MailSmimeSigned = 7,
    MailEncryptedReplied = 8,
    MailSmimeSignedReplied = 9,
    MailEncryptedForwarded = 10,
    MailSmimeSignedForwarded = 11,
    MailEncryptedRead = 12,
    MailSmimeSignedRead = 13,
    MailIrm = 14,
    MailIrmForwarded = 15,
    MailIrmReplied = 16,
    SmsSubmitted = 17,
    SmsRoutedToDeliveryPoint = 18,
    SmsRoutedToExternalMessagingSystem = 19,
    SmsDelivered = 20,
    OutlookDefaultForContacts = 21,
    AppointmentItem = 22,
    AppointmentRecur = 23,
    AppointmentMeet = 24,
    AppointmentMeetRecur = 25,
    AppointmentMeetNY = 26,
    AppointmentMeetYes = 27,
    AppointmentMeetNo = 28,
    AppointmentMeetMaybe = 29,
    AppointmentMeetCancel = 30,
    AppointmentMeetInfo = 31,
    TaskItem = 32,
    TaskRecur = 33,
    TaskOwned = 34,
    TaskDelegated = 35,
} enum IdFormat {
    EwsLegacyId = 0,
    EwsId = 1,
    EntryId = 2,
    HexEntryId = 3,
    StoreId = 4,
    OwaId = 5,
} enum ImAddressKey {
    ImAddress1 = 0,
    ImAddress2 = 1,
    ImAddress3 = 2,
} enum Importance {
    Low = 0,
    Normal = 1,
    High = 2,
} enum ItemFlagStatus {
    NotFlagged = 0,
    Flagged = 1,
    Complete = 2,
} enum ItemIndexError {
    None = 0,
    GenericError = 1,
    Timeout = 2,
    StaleEvent = 3,
    MailboxOffline = 4,
    AttachmentLimitReached = 5,
    MarsWriterTruncation = 6,
} enum ItemTraversal {
    Shallow = 0,
    SoftDeleted = 1,
    Associated = 2,
} enum JsonTokenType {
    String = 0,
    Number = 1,
    Boolean = 2,
    Null = 3,
    ObjectOpen = 4,
    ObjectClose = 5,
    ArrayOpen = 6,
    ArrayClose = 7,
    Colon = 8,
    Comma = 9,
    EndOfFile = 10,
} enum LegacyFreeBusyStatus {
    Free = 0,
    Tentative = 1,
    Busy = 2,
    OOF = 3,
    WorkingElsewhere = 4,
    NoData = 5,
} enum LobbyBypass {
    Disabled = 0,
    EnabledForGatewayParticipants = 1,
} enum LocationSource {
    None = 0,
    LocationServices = 1,
    PhonebookServices = 2,
    Device = 3,
    Contact = 4,
    Resource = 5,
} enum LogicalOperator {
    And = 0,
    Or = 1,
} enum MailboxSearchLocation {
    PrimaryOnly = 0,
    ArchiveOnly = 1,
    All = 2,
} enum MailboxSearchScopeType {
    LegacyExchangeDN = 0,
    PublicFolder = 1,
    Recipient = 2,
    MailboxGuid = 3,
    AllPublicFolders = 4,
    AllMailboxes = 5,
    SavedSearchId = 6,
    AutoDetect = 7,
} enum MailboxType {
    Unknown = 0,
    OneOff = 1,
    Mailbox = 2,
    PublicFolder = 3,
    PublicGroup = 4,
    ContactGroup = 5,
    Contact = 6,
} enum MapiPropertyType {
    ApplicationTime = 0,
    ApplicationTimeArray = 1,
    Binary = 2,
    BinaryArray = 3,
    Boolean = 4,
    CLSID = 5,
    CLSIDArray = 6,
    Currency = 7,
    CurrencyArray = 8,
    Double = 9,
    DoubleArray = 10,
    Error = 11,
    Float = 12,
    FloatArray = 13,
    Integer = 14,
    IntegerArray = 15,
    Long = 16,
    LongArray = 17,
    Null = 18,
    Object = 19,
    ObjectArray = 20,
    Short = 21,
    ShortArray = 22,
    SystemTime = 23,
    SystemTimeArray = 24,
    String = 25,
    StringArray = 26,
} enum MeetingAttendeeType {
    Organizer = 0,
    Required = 1,
    Optional = 2,
    Room = 3,
    Resource = 4,
} enum MeetingRequestType {
    None = 0,
    FullUpdate = 1,
    InformationalUpdate = 2,
    NewMeetingRequest = 3,
    Outdated = 4,
    SilentUpdate = 5,
    PrincipalWantsCopy = 6,
} enum MeetingRequestsDeliveryScope {
    DelegatesOnly = 0,
    DelegatesAndMe = 1,
    DelegatesAndSendInformationToMe = 2,
    NoForward = 3,
} enum MeetingResponseType {
    Unknown = 0,
    Organizer = 1,
    Tentative = 2,
    Accept = 3,
    Decline = 4,
    NoResponseReceived = 5,
} enum MemberStatus {
    Unrecognized = 0,
    Normal = 1,
    Demoted = 2,
} enum MessageDisposition {
    SaveOnly = 0,
    SendAndSaveCopy = 1,
    SendOnly = 2,
} enum Month {
    January = 1,
    February = 2,
    March = 3,
    April = 4,
    May = 5,
    June = 6,
    July = 7,
    August = 8,
    September = 9,
    October = 10,
    November = 11,
    December = 12,
} enum OffsetBasePoint {
    Beginning = 0,
    End = 1,
} enum OnlineMeetingAccessLevel {
    Locked = 0,
    Invited = 1,
    Internal = 2,
    Everyone = 3,
} enum OofExternalAudience {
    None = 0,
    Known = 1,
    All = 2,
} enum OofState {
    Disabled = 0,
    Enabled = 1,
    Scheduled = 2,
} enum OutlookProtocolType {
    Rpc = 0,
    RpcOverHttp = 1,
    Web = 2,
    Unknown = 3,
} enum PermissionScope {
    None = 0,
    Owned = 1,
    All = 2,
} enum PhoneCallState {
    Idle = 0,
    Connecting = 1,
    Alerted = 2,
    Connected = 3,
    Disconnected = 4,
    Incoming = 5,
    Transferring = 6,
    Forwarding = 7,
} enum PhoneNumberKey {
    AssistantPhone = 0,
    BusinessFax = 1,
    BusinessPhone = 2,
    BusinessPhone2 = 3,
    Callback = 4,
    CarPhone = 5,
    CompanyMainPhone = 6,
    HomeFax = 7,
    HomePhone = 8,
    HomePhone2 = 9,
    Isdn = 10,
    MobilePhone = 11,
    OtherFax = 12,
    OtherTelephone = 13,
    Pager = 14,
    PrimaryPhone = 15,
    RadioPhone = 16,
    Telex = 17,
    TtyTddPhone = 18,
} enum PhysicalAddressIndex {
    None = 0,
    Business = 1,
    Home = 2,
    Other = 3,
} enum PhysicalAddressKey {
    Business = 0,
    Home = 1,
    Other = 2,
} enum Presenters {
    Disabled = 0,
    Internal = 1,
    Everyone = 2,
} enum PreviewItemBaseShape {
    Default = 0,
    Compact = 1,
} enum PrivilegedLogonType {
    Admin = 0,
    SystemService = 1,
} enum PrivilegedUserIdBudgetType {
    /** */
    Default = 0,
    RunningAsBackgroundLoad = 1,
    Unthrottled = 2,
} enum PropertyDefinitionFlags {
    None = 0,
    AutoInstantiateOnRead = 1,
    ReuseInstance = 2,
    CanSet = 4,
    CanUpdate = 8,
    CanDelete = 16,
    CanFind = 32,
    MustBeExplicitlyLoaded = 64,
    UpdateCollectionItems = 128,
} enum RenderingMode {
    Xml = 0,
    JSON = 1,
} enum ResolveNameSearchLocation {
    DirectoryOnly = 0,
    DirectoryThenContacts = 1,
    ContactsOnly = 2,
    ContactsThenDirectory = 3,
} enum ResponseActions {
    None = 0,
    Accept = 1,
    TentativelyAccept = 2,
    Decline = 4,
    Reply = 8,
    ReplyAll = 16,
    Forward = 32,
    Cancel = 64,
    RemoveFromCalendar = 128,
    SuppressReadReceipt = 256,
    PostReply = 512,
} enum ResponseMessageType {
    Reply = 0,
    ReplyAll = 1,
    Forward = 2,
} enum RetentionActionType {
    None = 0,
    MoveToDeletedItems = 1,
    MoveToFolder = 2,
    DeleteAndAllowRecovery = 3,
    PermanentlyDelete = 4,
    MarkAsPastRetentionLimit = 5,
    MoveToArchive = 6,
} enum RetentionType {
    Delete = 0,
    Archive = 1,
} enum RuleErrorCode {
    ADOperationFailure = 0,
    ConnectedAccountNotFound = 1,
    CreateWithRuleId = 2,
    EmptyValueFound = 3,
    DuplicatedPriority = 4,
    DuplicatedOperationOnTheSameRule = 5,
    FolderDoesNotExist = 6,
    InvalidAddress = 7,
    InvalidDateRange = 8,
    InvalidFolderId = 9,
    InvalidSizeRange = 10,
    InvalidValue = 11,
    MessageClassificationNotFound = 12,
    MissingAction = 13,
    MissingParameter = 14,
    MissingRangeValue = 15,
    NotSettable = 16,
    RecipientDoesNotExist = 17,
    RuleNotFound = 18,
    SizeLessThanZero = 19,
    StringValueTooBig = 20,
    UnsupportedAddress = 21,
    UnexpectedError = 22,
    UnsupportedRule = 23,
} enum RuleProperty {
    RuleId = 0,
    DisplayName = 1,
    Priority = 2,
    IsNotSupported = 3,
    Actions = 4,
    ConditionCategories = 5,
    ConditionContainsBodyStrings = 6,
    ConditionContainsHeaderStrings = 7,
    ConditionContainsRecipientStrings = 8,
    ConditionContainsSenderStrings = 9,
    ConditionContainsSubjectOrBodyStrings = 10,
    ConditionContainsSubjectStrings = 11,
    ConditionFlaggedForAction = 12,
    ConditionFromAddresses = 13,
    ConditionFromConnectedAccounts = 14,
    ConditionHasAttachments = 15,
    ConditionImportance = 16,
    ConditionIsApprovalRequest = 17,
    ConditionIsAutomaticForward = 18,
    ConditionIsAutomaticReply = 19,
    ConditionIsEncrypted = 20,
    ConditionIsMeetingRequest = 21,
    ConditionIsMeetingResponse = 22,
    ConditionIsNonDeliveryReport = 23,
    ConditionIsPermissionControlled = 24,
    ConditionIsRead = 25,
    ConditionIsSigned = 26,
    ConditionIsVoicemail = 27,
    ConditionIsReadReceipt = 28,
    ConditionItemClasses = 29,
    ConditionMessageClassifications = 30,
    ConditionNotSentToMe = 31,
    ConditionSentCcMe = 32,
    ConditionSentOnlyToMe = 33,
    ConditionSentToAddresses = 34,
    ConditionSentToMe = 35,
    ConditionSentToOrCcMe = 36,
    ConditionSensitivity = 37,
    ConditionWithinDateRange = 38,
    ConditionWithinSizeRange = 39,
    ExceptionCategories = 40,
    ExceptionContainsBodyStrings = 41,
    ExceptionContainsHeaderStrings = 42,
    ExceptionContainsRecipientStrings = 43,
    ExceptionContainsSenderStrings = 44,
    ExceptionContainsSubjectOrBodyStrings = 45,
    ExceptionContainsSubjectStrings = 46,
    ExceptionFlaggedForAction = 47,
    ExceptionFromAddresses = 48,
    ExceptionFromConnectedAccounts = 49,
    ExceptionHasAttachments = 50,
    ExceptionImportance = 51,
    ExceptionIsApprovalRequest = 52,
    ExceptionIsAutomaticForward = 53,
    ExceptionIsAutomaticReply = 54,
    ExceptionIsEncrypted = 55,
    ExceptionIsMeetingRequest = 56,
    ExceptionIsMeetingResponse = 57,
    ExceptionIsNonDeliveryReport = 58,
    ExceptionIsPermissionControlled = 59,
    ExceptionIsRead = 60,
    ExceptionIsSigned = 61,
    ExceptionIsVoicemail = 62,
    ExceptionItemClasses = 63,
    ExceptionMessageClassifications = 64,
    ExceptionNotSentToMe = 65,
    ExceptionSentCcMe = 66,
    ExceptionSentOnlyToMe = 67,
    ExceptionSentToAddresses = 68,
    ExceptionSentToMe = 69,
    ExceptionSentToOrCcMe = 70,
    ExceptionSensitivity = 71,
    ExceptionWithinDateRange = 72,
    ExceptionWithinSizeRange = 73,
    ActionCategories = 74,
    ActionCopyToFolder = 75,
    ActionDelete = 76,
    ActionForwardAsAttachmentToRecipients = 77,
    ActionForwardToRecipients = 78,
    ActionImportance = 79,
    ActionMarkAsRead = 80,
    ActionMoveToFolder = 81,
    ActionPermanentDelete = 82,
    ActionRedirectToRecipients = 83,
    ActionSendSMSAlertToRecipients = 84,
    ActionServerReplyWithMessage = 85,
    ActionStopProcessingRules = 86,
    IsEnabled = 87,
    IsInError = 88,
    Conditions = 89,
    Exceptions = 90,
} enum SearchFolderTraversal {
    Shallow = 0,
    Deep = 1,
} enum SearchPageDirection {
    Next = 0,
    Previous = 1,
} enum SearchResultType {
    StatisticsOnly = 0,
    PreviewOnly = 1,
} enum SendCancellationsMode {
    SendToNone = 0,
    SendOnlyToAll = 1,
    SendToAllAndSaveCopy = 2,
} enum SendInvitationsMode {
    SendToNone = 0,
    SendOnlyToAll = 1,
    SendToAllAndSaveCopy = 2,
} enum SendInvitationsOrCancellationsMode {
    SendToNone = 0,
    SendOnlyToAll = 1,
    SendOnlyToChanged = 2,
    SendToAllAndSaveCopy = 3,
    SendToChangedAndSaveCopy = 4,
} enum SendPrompt {
    None = 0,
    Send = 1,
    VotingOption = 2,
} enum Sensitivity {
    Normal = 0,
    Personal = 1,
    Private = 2,
    Confidential = 3,
} enum ServiceError {
    NoError = 0,
    ErrorAccessDenied = 1,
    ErrorAccessModeSpecified = 2,
    ErrorAccountDisabled = 3,
    ErrorAddDelegatesFailed = 4,
    ErrorAddressSpaceNotFound = 5,
    ErrorADOperation = 6,
    ErrorADSessionFilter = 7,
    ErrorADUnavailable = 8,
    ErrorAffectedTaskOccurrencesRequired = 9,
    ErrorApplyConversationActionFailed = 10,
    ErrorArchiveMailboxNotEnabled = 11,
    ErrorArchiveFolderPathCreation = 12,
    ErrorArchiveMailboxServiceDiscoveryFailed = 13,
    ErrorAttachmentNestLevelLimitExceeded = 14,
    ErrorAttachmentSizeLimitExceeded = 15,
    ErrorAutoDiscoverFailed = 16,
    ErrorAvailabilityConfigNotFound = 17,
    ErrorBatchProcessingStopped = 18,
    ErrorCalendarCannotMoveOrCopyOccurrence = 19,
    ErrorCalendarCannotUpdateDeletedItem = 20,
    ErrorCalendarCannotUseIdForOccurrenceId = 21,
    ErrorCalendarCannotUseIdForRecurringMasterId = 22,
    ErrorCalendarDurationIsTooLong = 23,
    ErrorCalendarEndDateIsEarlierThanStartDate = 24,
    ErrorCalendarFolderIsInvalidForCalendarView = 25,
    ErrorCalendarInvalidAttributeValue = 26,
    ErrorCalendarInvalidDayForTimeChangePattern = 27,
    ErrorCalendarInvalidDayForWeeklyRecurrence = 28,
    ErrorCalendarInvalidPropertyState = 29,
    ErrorCalendarInvalidPropertyValue = 30,
    ErrorCalendarInvalidRecurrence = 31,
    ErrorCalendarInvalidTimeZone = 32,
    ErrorCalendarIsCancelledForAccept = 33,
    ErrorCalendarIsCancelledForDecline = 34,
    ErrorCalendarIsCancelledForRemove = 35,
    ErrorCalendarIsCancelledForTentative = 36,
    ErrorCalendarIsDelegatedForAccept = 37,
    ErrorCalendarIsDelegatedForDecline = 38,
    ErrorCalendarIsDelegatedForRemove = 39,
    ErrorCalendarIsDelegatedForTentative = 40,
    ErrorCalendarIsNotOrganizer = 41,
    ErrorCalendarIsOrganizerForAccept = 42,
    ErrorCalendarIsOrganizerForDecline = 43,
    ErrorCalendarIsOrganizerForRemove = 44,
    ErrorCalendarIsOrganizerForTentative = 45,
    ErrorCalendarMeetingRequestIsOutOfDate = 46,
    ErrorCalendarOccurrenceIndexIsOutOfRecurrenceRange = 47,
    ErrorCalendarOccurrenceIsDeletedFromRecurrence = 48,
    ErrorCalendarOutOfRange = 49,
    ErrorCalendarViewRangeTooBig = 50,
    ErrorCallerIsInvalidADAccount = 51,
    ErrorCannotArchiveCalendarContactTaskFolderException = 52,
    ErrorCannotArchiveItemsInArchiveMailbox = 53,
    ErrorCannotArchiveItemsInPublicFolders = 54,
    ErrorCannotCreateCalendarItemInNonCalendarFolder = 55,
    ErrorCannotCreateContactInNonContactFolder = 56,
    ErrorCannotCreatePostItemInNonMailFolder = 57,
    ErrorCannotCreateTaskInNonTaskFolder = 58,
    ErrorCannotDeleteObject = 59,
    ErrorCannotDeleteTaskOccurrence = 60,
    ErrorCannotDisableMandatoryExtension = 61,
    ErrorCannotEmptyFolder = 62,
    ErrorCannotGetExternalEcpUrl = 63,
    ErrorCannotGetSourceFolderPath = 64,
    ErrorCannotOpenFileAttachment = 65,
    ErrorCannotSetCalendarPermissionOnNonCalendarFolder = 66,
    ErrorCannotSetNonCalendarPermissionOnCalendarFolder = 67,
    ErrorCannotSetPermissionUnknownEntries = 68,
    ErrorCannotSpecifySearchFolderAsSourceFolder = 69,
    ErrorCannotUseFolderIdForItemId = 70,
    ErrorCannotUseItemIdForFolderId = 71,
    ErrorChangeKeyRequired = 72,
    ErrorChangeKeyRequiredForWriteOperations = 73,
    ErrorClientDisconnected = 74,
    ErrorConnectionFailed = 75,
    ErrorContainsFilterWrongType = 76,
    ErrorContentConversionFailed = 77,
    ErrorCorruptData = 78,
    ErrorCreateItemAccessDenied = 79,
    ErrorCreateManagedFolderPartialCompletion = 80,
    ErrorCreateSubfolderAccessDenied = 81,
    ErrorCrossMailboxMoveCopy = 82,
    ErrorCrossSiteRequest = 83,
    ErrorDataSizeLimitExceeded = 84,
    ErrorDataSourceOperation = 85,
    ErrorDelegateAlreadyExists = 86,
    ErrorDelegateCannotAddOwner = 87,
    ErrorDelegateMissingConfiguration = 88,
    ErrorDelegateNoUser = 89,
    ErrorDelegateValidationFailed = 90,
    ErrorDeleteDistinguishedFolder = 91,
    ErrorDeleteItemsFailed = 92,
    ErrorDistinguishedUserNotSupported = 93,
    ErrorDistributionListMemberNotExist = 94,
    ErrorDuplicateInputFolderNames = 95,
    ErrorDuplicateLegacyDistinguishedName = 96,
    ErrorDuplicateSOAPHeader = 97,
    ErrorDuplicateUserIdsSpecified = 98,
    ErrorEmailAddressMismatch = 99,
    ErrorEventNotFound = 100,
    ErrorExceededConnectionCount = 101,
    ErrorExceededFindCountLimit = 102,
    ErrorExceededSubscriptionCount = 103,
    ErrorExpiredSubscription = 104,
    ErrorExtensionNotFound = 105,
    ErrorFolderCorrupt = 106,
    ErrorFolderExists = 107,
    ErrorFolderNotFound = 108,
    ErrorFolderPropertRequestFailed = 109,
    ErrorFolderSave = 110,
    ErrorFolderSaveFailed = 111,
    ErrorFolderSavePropertyError = 112,
    ErrorFreeBusyDLLimitReached = 113,
    ErrorFreeBusyGenerationFailed = 114,
    ErrorGetServerSecurityDescriptorFailed = 115,
    ErrorImContactLimitReached = 116,
    ErrorImGroupDisplayNameAlreadyExists = 117,
    ErrorImGroupLimitReached = 118,
    ErrorImpersonateUserDenied = 119,
    ErrorImpersonationDenied = 120,
    ErrorImpersonationFailed = 121,
    ErrorInboxRulesValidationError = 122,
    ErrorIncorrectSchemaVersion = 123,
    ErrorIncorrectUpdatePropertyCount = 124,
    ErrorIndividualMailboxLimitReached = 125,
    ErrorInsufficientResources = 126,
    ErrorInternalServerError = 127,
    ErrorInternalServerTransientError = 128,
    ErrorInvalidAccessLevel = 129,
    ErrorInvalidArgument = 130,
    ErrorInvalidAttachmentId = 131,
    ErrorInvalidAttachmentSubfilter = 132,
    ErrorInvalidAttachmentSubfilterTextFilter = 133,
    ErrorInvalidAuthorizationContext = 134,
    ErrorInvalidChangeKey = 135,
    ErrorInvalidClientSecurityContext = 136,
    ErrorInvalidCompleteDate = 137,
    ErrorInvalidContactEmailAddress = 138,
    ErrorInvalidContactEmailIndex = 139,
    ErrorInvalidCrossForestCredentials = 140,
    ErrorInvalidDelegatePermission = 141,
    ErrorInvalidDelegateUserId = 142,
    ErrorInvalidExchangeImpersonationHeaderData = 143,
    ErrorInvalidExcludesRestriction = 144,
    ErrorInvalidExpressionTypeForSubFilter = 145,
    ErrorInvalidExtendedProperty = 146,
    ErrorInvalidExtendedPropertyValue = 147,
    ErrorInvalidExternalSharingInitiator = 148,
    ErrorInvalidExternalSharingSubscriber = 149,
    ErrorInvalidFederatedOrganizationId = 150,
    ErrorInvalidFolderId = 151,
    ErrorInvalidFolderTypeForOperation = 152,
    ErrorInvalidFractionalPagingParameters = 153,
    ErrorInvalidFreeBusyViewType = 154,
    ErrorInvalidGetSharingFolderRequest = 155,
    ErrorInvalidId = 156,
    ErrorInvalidImContactId = 157,
    ErrorInvalidImDistributionGroupSmtpAddress = 158,
    ErrorInvalidImGroupId = 159,
    ErrorInvalidIdEmpty = 160,
    ErrorInvalidIdMalformed = 161,
    ErrorInvalidIdMalformedEwsLegacyIdFormat = 162,
    ErrorInvalidIdMonikerTooLong = 163,
    ErrorInvalidIdNotAnItemAttachmentId = 164,
    ErrorInvalidIdReturnedByResolveNames = 165,
    ErrorInvalidIdStoreObjectIdTooLong = 166,
    ErrorInvalidIdTooManyAttachmentLevels = 167,
    ErrorInvalidIdXml = 168,
    ErrorInvalidIndexedPagingParameters = 169,
    ErrorInvalidInternetHeaderChildNodes = 170,
    ErrorInvalidItemForOperationAcceptItem = 171,
    ErrorInvalidItemForOperationArchiveItem = 172,
    ErrorInvalidItemForOperationCancelItem = 173,
    ErrorInvalidItemForOperationCreateItem = 174,
    ErrorInvalidItemForOperationCreateItemAttachment = 175,
    ErrorInvalidItemForOperationDeclineItem = 176,
    ErrorInvalidItemForOperationExpandDL = 177,
    ErrorInvalidItemForOperationRemoveItem = 178,
    ErrorInvalidItemForOperationSendItem = 179,
    ErrorInvalidItemForOperationTentative = 180,
    ErrorInvalidLogonType = 181,
    ErrorInvalidMailbox = 182,
    ErrorInvalidManagedFolderProperty = 183,
    ErrorInvalidManagedFolderQuota = 184,
    ErrorInvalidManagedFolderSize = 185,
    ErrorInvalidMergedFreeBusyInterval = 186,
    ErrorInvalidNameForNameResolution = 187,
    ErrorInvalidNetworkServiceContext = 188,
    ErrorInvalidOofParameter = 189,
    ErrorInvalidOperation = 190,
    ErrorInvalidOrganizationRelationshipForFreeBusy = 191,
    ErrorInvalidPagingMaxRows = 192,
    ErrorInvalidParentFolder = 193,
    ErrorInvalidPercentCompleteValue = 194,
    ErrorInvalidPermissionSettings = 195,
    ErrorInvalidPhoneCallId = 196,
    ErrorInvalidPhoneNumber = 197,
    ErrorInvalidPropertyAppend = 198,
    ErrorInvalidPropertyDelete = 199,
    ErrorInvalidPropertyForExists = 200,
    ErrorInvalidPropertyForOperation = 201,
    ErrorInvalidPropertyRequest = 202,
    ErrorInvalidPropertySet = 203,
    ErrorInvalidPropertyUpdateSentMessage = 204,
    ErrorInvalidProxySecurityContext = 205,
    ErrorInvalidPullSubscriptionId = 206,
    ErrorInvalidPushSubscriptionUrl = 207,
    ErrorInvalidRecipients = 208,
    ErrorInvalidRecipientSubfilter = 209,
    ErrorInvalidRecipientSubfilterComparison = 210,
    ErrorInvalidRecipientSubfilterOrder = 211,
    ErrorInvalidRecipientSubfilterTextFilter = 212,
    ErrorInvalidReferenceItem = 213,
    ErrorInvalidRequest = 214,
    ErrorInvalidRestriction = 215,
    ErrorInvalidRetentionTagTypeMismatch = 216,
    ErrorInvalidRetentionTagInvisible = 217,
    ErrorInvalidRetentionTagInheritance = 218,
    ErrorInvalidRetentionTagIdGuid = 219,
    ErrorInvalidRoutingType = 220,
    ErrorInvalidScheduledOofDuration = 221,
    ErrorInvalidSchemaVersionForMailboxVersion = 222,
    ErrorInvalidSecurityDescriptor = 223,
    ErrorInvalidSendItemSaveSettings = 224,
    ErrorInvalidSerializedAccessToken = 225,
    ErrorInvalidServerVersion = 226,
    ErrorInvalidSharingData = 227,
    ErrorInvalidSharingMessage = 228,
    ErrorInvalidSid = 229,
    ErrorInvalidSIPUri = 230,
    ErrorInvalidSmtpAddress = 231,
    ErrorInvalidSubfilterType = 232,
    ErrorInvalidSubfilterTypeNotAttendeeType = 233,
    ErrorInvalidSubfilterTypeNotRecipientType = 234,
    ErrorInvalidSubscription = 235,
    ErrorInvalidSubscriptionRequest = 236,
    ErrorInvalidSyncStateData = 237,
    ErrorInvalidTimeInterval = 238,
    ErrorInvalidUserInfo = 239,
    ErrorInvalidUserOofSettings = 240,
    ErrorInvalidUserPrincipalName = 241,
    ErrorInvalidUserSid = 242,
    ErrorInvalidUserSidMissingUPN = 243,
    ErrorInvalidValueForProperty = 244,
    ErrorInvalidWatermark = 245,
    ErrorIPGatewayNotFound = 246,
    ErrorIrresolvableConflict = 247,
    ErrorItemCorrupt = 248,
    ErrorItemNotFound = 249,
    ErrorItemPropertyRequestFailed = 250,
    ErrorItemSave = 251,
    ErrorItemSavePropertyError = 252,
    ErrorLegacyMailboxFreeBusyViewTypeNotMerged = 253,
    ErrorLocalServerObjectNotFound = 254,
    ErrorLogonAsNetworkServiceFailed = 255,
    ErrorMailboxConfiguration = 256,
    ErrorMailboxDataArrayEmpty = 257,
    ErrorMailboxDataArrayTooBig = 258,
    ErrorMailboxFailover = 259,
    ErrorMailboxHoldNotFound = 260,
    ErrorMailboxLogonFailed = 261,
    ErrorMailboxMoveInProgress = 262,
    ErrorMailboxStoreUnavailable = 263,
    ErrorMailRecipientNotFound = 264,
    ErrorMailTipsDisabled = 265,
    ErrorManagedFolderAlreadyExists = 266,
    ErrorManagedFolderNotFound = 267,
    ErrorManagedFoldersRootFailure = 268,
    ErrorMeetingSuggestionGenerationFailed = 269,
    ErrorMessageDispositionRequired = 270,
    ErrorMessageSizeExceeded = 271,
    ErrorMessageTrackingNoSuchDomain = 272,
    ErrorMessageTrackingPermanentError = 273,
    ErrorMessageTrackingTransientError = 274,
    ErrorMimeContentConversionFailed = 275,
    ErrorMimeContentInvalid = 276,
    ErrorMimeContentInvalidBase64String = 277,
    ErrorMissedNotificationEvents = 278,
    ErrorMissingArgument = 279,
    ErrorMissingEmailAddress = 280,
    ErrorMissingEmailAddressForManagedFolder = 281,
    ErrorMissingInformationEmailAddress = 282,
    ErrorMissingInformationReferenceItemId = 283,
    ErrorMissingInformationSharingFolderId = 284,
    ErrorMissingItemForCreateItemAttachment = 285,
    ErrorMissingManagedFolderId = 286,
    ErrorMissingRecipients = 287,
    ErrorMissingUserIdInformation = 288,
    ErrorMoreThanOneAccessModeSpecified = 289,
    ErrorMoveCopyFailed = 290,
    ErrorMoveDistinguishedFolder = 291,
    ErrorMultiLegacyMailboxAccess = 292,
    ErrorNameResolutionMultipleResults = 293,
    ErrorNameResolutionNoMailbox = 294,
    ErrorNameResolutionNoResults = 295,
    ErrorNewEventStreamConnectionOpened = 296,
    ErrorNoApplicableProxyCASServersAvailable = 297,
    ErrorNoCalendar = 298,
    ErrorNoDestinationCASDueToKerberosRequirements = 299,
    ErrorNoDestinationCASDueToSSLRequirements = 300,
    ErrorNoDestinationCASDueToVersionMismatch = 301,
    ErrorNoFolderClassOverride = 302,
    ErrorNoFreeBusyAccess = 303,
    ErrorNonExistentMailbox = 304,
    ErrorNonPrimarySmtpAddress = 305,
    ErrorNoPropertyTagForCustomProperties = 306,
    ErrorNoPublicFolderReplicaAvailable = 307,
    ErrorNoPublicFolderServerAvailable = 308,
    ErrorNoRespondingCASInDestinationSite = 309,
    ErrorNotAllowedExternalSharingByPolicy = 310,
    ErrorNotDelegate = 311,
    ErrorNotEnoughMemory = 312,
    ErrorNotSupportedSharingMessage = 313,
    ErrorObjectTypeChanged = 314,
    ErrorOccurrenceCrossingBoundary = 315,
    ErrorOccurrenceTimeSpanTooBig = 316,
    ErrorOperationNotAllowedWithPublicFolderRoot = 317,
    ErrorOrganizationNotFederated = 318,
    ErrorOutlookRuleBlobExists = 319,
    ErrorParentFolderIdRequired = 320,
    ErrorParentFolderNotFound = 321,
    ErrorPasswordChangeRequired = 322,
    ErrorPasswordExpired = 323,
    ErrorPermissionNotAllowedByPolicy = 324,
    ErrorPhoneNumberNotDialable = 325,
    ErrorPropertyUpdate = 326,
    ErrorPropertyValidationFailure = 327,
    ErrorProxiedSubscriptionCallFailure = 328,
    ErrorProxyCallFailed = 329,
    ErrorProxyGroupSidLimitExceeded = 330,
    ErrorProxyRequestNotAllowed = 331,
    ErrorProxyRequestProcessingFailed = 332,
    ErrorProxyServiceDiscoveryFailed = 333,
    ErrorProxyTokenExpired = 334,
    ErrorPublicFolderRequestProcessingFailed = 335,
    ErrorPublicFolderServerNotFound = 336,
    ErrorQueryFilterTooLong = 337,
    ErrorQuotaExceeded = 338,
    ErrorReadEventsFailed = 339,
    ErrorReadReceiptNotPending = 340,
    ErrorRecurrenceEndDateTooBig = 341,
    ErrorRecurrenceHasNoOccurrence = 342,
    ErrorRemoveDelegatesFailed = 343,
    ErrorRequestAborted = 344,
    ErrorRequestStreamTooBig = 345,
    ErrorRequiredPropertyMissing = 346,
    ErrorResolveNamesInvalidFolderType = 347,
    ErrorResolveNamesOnlyOneContactsFolderAllowed = 348,
    ErrorResponseSchemaValidation = 349,
    ErrorRestrictionTooComplex = 350,
    ErrorRestrictionTooLong = 351,
    ErrorResultSetTooBig = 352,
    ErrorRulesOverQuota = 353,
    ErrorSavedItemFolderNotFound = 354,
    ErrorSchemaValidation = 355,
    ErrorSearchFolderNotInitialized = 356,
    ErrorSendAsDenied = 357,
    ErrorSendMeetingCancellationsRequired = 358,
    ErrorSendMeetingInvitationsOrCancellationsRequired = 359,
    ErrorSendMeetingInvitationsRequired = 360,
    ErrorSentMeetingRequestUpdate = 361,
    ErrorSentTaskRequestUpdate = 362,
    ErrorServerBusy = 363,
    ErrorServiceDiscoveryFailed = 364,
    ErrorSharingNoExternalEwsAvailable = 365,
    ErrorSharingSynchronizationFailed = 366,
    ErrorStaleObject = 367,
    ErrorSubmissionQuotaExceeded = 368,
    ErrorSubscriptionAccessDenied = 369,
    ErrorSubscriptionDelegateAccessNotSupported = 370,
    ErrorSubscriptionNotFound = 371,
    ErrorSubscriptionUnsubscribed = 372,
    ErrorSyncFolderNotFound = 373,
    ErrorTeamMailboxNotFound = 374,
    ErrorTeamMailboxNotLinkedToSharePoint = 375,
    ErrorTeamMailboxUrlValidationFailed = 376,
    ErrorTeamMailboxNotAuthorizedOwner = 377,
    ErrorTeamMailboxActiveToPendingDelete = 378,
    ErrorTeamMailboxFailedSendingNotifications = 379,
    ErrorTeamMailboxErrorUnknown = 380,
    ErrorTimeIntervalTooBig = 381,
    ErrorTimeoutExpired = 382,
    ErrorTimeZone = 383,
    ErrorToFolderNotFound = 384,
    ErrorTokenSerializationDenied = 385,
    ErrorUnableToGetUserOofSettings = 386,
    ErrorUnableToRemoveImContactFromGroup = 387,
    ErrorUnifiedMessagingDialPlanNotFound = 388,
    ErrorUnifiedMessagingRequestFailed = 389,
    ErrorUnifiedMessagingServerNotFound = 390,
    ErrorUnsupportedCulture = 391,
    ErrorUnsupportedMapiPropertyType = 392,
    ErrorUnsupportedMimeConversion = 393,
    ErrorUnsupportedPathForQuery = 394,
    ErrorUnsupportedPathForSortGroup = 395,
    ErrorUnsupportedPropertyDefinition = 396,
    ErrorUnsupportedQueryFilter = 397,
    ErrorUnsupportedRecurrence = 398,
    ErrorUnsupportedSubFilter = 399,
    ErrorUnsupportedTypeForConversion = 400,
    ErrorUpdateDelegatesFailed = 401,
    ErrorUpdatePropertyMismatch = 402,
    ErrorUserNotAllowedByPolicy = 403,
    ErrorUserNotUnifiedMessagingEnabled = 404,
    ErrorUserWithoutFederatedProxyAddress = 405,
    ErrorValueOutOfRange = 406,
    ErrorVirusDetected = 407,
    ErrorVirusMessageDeleted = 408,
    ErrorVoiceMailNotImplemented = 409,
    ErrorWebRequestInInvalidState = 410,
    ErrorWin32InteropError = 411,
    ErrorWorkingHoursSaveFailed = 412,
    ErrorWorkingHoursXmlMalformed = 413,
    ErrorWrongServerVersion = 414,
    ErrorWrongServerVersionDelegate = 415,
    ErrorInvalidClientAccessTokenRequest = 416,
    ErrorInvalidManagementRoleHeader = 417,
    ErrorSearchQueryHasTooManyKeywords = 418,
    ErrorSearchTooManyMailboxes = 419,
    ErrorInvalidRetentionTagNone = 420,
    ErrorDiscoverySearchesDisabled = 421,
    ErrorCalendarSeekToConditionNotSupported = 422,
    ErrorArchiveMailboxSearchFailed = 423,
    ErrorGetRemoteArchiveFolderFailed = 424,
    ErrorFindRemoteArchiveFolderFailed = 425,
    ErrorGetRemoteArchiveItemFailed = 426,
    ErrorExportRemoteArchiveItemsFailed = 427,
    ErrorClientIntentInvalidStateDefinition = 428,
    ErrorClientIntentNotFound = 429,
    ErrorContentIndexingNotEnabled = 430,
    ErrorDeleteUnifiedMessagingPromptFailed = 431,
    ErrorLocationServicesDisabled = 432,
    ErrorLocationServicesInvalidRequest = 433,
    ErrorLocationServicesRequestFailed = 434,
    ErrorLocationServicesRequestTimedOut = 435,
    ErrorWeatherServiceDisabled = 436,
    ErrorMailboxScopeNotAllowedWithoutQueryString = 437,
    ErrorNoSpeechDetected = 438,
    ErrorPromptPublishingOperationFailed = 439,
    ErrorPublicFolderMailboxDiscoveryFailed = 440,
    ErrorPublicFolderOperationFailed = 441,
    ErrorPublicFolderSyncException = 442,
    ErrorRecipientNotFound = 443,
    ErrorRecognizerNotInstalled = 444,
    ErrorSpeechGrammarError = 445,
    ErrorTooManyObjectsOpened = 446,
    ErrorUMServerUnavailable = 447,
    ErrorUnifiedMessagingPromptNotFound = 448,
    ErrorUnifiedMessagingReportDataNotFound = 449,
    ErrorInvalidPhotoSize = 450,
    ErrorCalendarIsGroupMailboxForAccept = 451,
    ErrorCalendarIsGroupMailboxForDecline = 452,
    ErrorCalendarIsGroupMailboxForTentative = 453,
    ErrorCalendarIsGroupMailboxForSuppressReadReceipt = 454,
} enum ServiceErrorHandling {
    ReturnErrors = 0,
    ThrowOnError = 1,
} enum ServiceObjectType {
    Folder = 0,
    Item = 1,
    Conversation = 2,
} enum ServiceResult {
    Success = 0,
    Warning = 1,
    Error = 2,
} enum SetClientExtensionActionId {
    Install = 0,
    Uninstall = 1,
    Configure = 2,
} enum SortDirection {
    Ascending = 0,
    Descending = 1,
} enum StandardUser {
    Default = 0,
    Anonymous = 1,
} enum SuggestionQuality {
    Excellent = 0,
    Good = 1,
    Fair = 2,
    Poor = 3,
} enum SyncFolderItemsScope {
    NormalItems = 0,
    NormalAndAssociatedItems = 1,
} enum TaskDelegationState {
    NoDelegation = 0,
    Unknown = 1,
    Accepted = 2,
    Declined = 3,
} enum TaskMode {
    Normal = 0,
    Request = 1,
    RequestAccepted = 2,
    RequestDeclined = 3,
    Update = 4,
    SelfDelegated = 5,
} enum TaskStatus {
    NotStarted = 0,
    InProgress = 1,
    Completed = 2,
    WaitingOnOthers = 3,
    Deferred = 4,
} enum TeamMailboxLifecycleState {
    Active = 0,
    Closed = 1,
    Unlinked = 2,
    PendingDelete = 3,
} enum TraceFlags {
    None = 0,
    EwsRequest = 1,
    EwsResponse = 2,
    EwsResponseHttpHeaders = 4,
    AutodiscoverRequest = 8,
    AutodiscoverResponse = 16,
    AutodiscoverResponseHttpHeaders = 32,
    AutodiscoverConfiguration = 64,
    DebugMessage = 128,
    EwsRequestHttpHeaders = 256,
    AutodiscoverRequestHttpHeaders = 512,
    All = 9223372036854776000,
} enum UserConfigurationDictionaryObjectType {
    DateTime = 0,
    Boolean = 1,
    Byte = 2,
    String = 3,
    Integer32 = 4,
    UnsignedInteger32 = 5,
    Integer64 = 6,
    UnsignedInteger64 = 7,
    StringArray = 8,
    ByteArray = 9,
} enum UserConfigurationProperties {
    Id = 1,
    Dictionary = 2,
    XmlData = 4,
    BinaryData = 8,
    All = 15,
} enum UserSettingName {
    UserDisplayName = 0,
    UserDN = 1,
    UserDeploymentId = 2,
    InternalMailboxServer = 3,
    InternalRpcClientServer = 4,
    InternalMailboxServerDN = 5,
    InternalEcpUrl = 6,
    InternalEcpVoicemailUrl = 7,
    InternalEcpEmailSubscriptionsUrl = 8,
    InternalEcpTextMessagingUrl = 9,
    InternalEcpDeliveryReportUrl = 10,
    InternalEcpRetentionPolicyTagsUrl = 11,
    InternalEcpPublishingUrl = 12,
    InternalEcpPhotoUrl = 13,
    InternalEcpConnectUrl = 14,
    InternalEcpTeamMailboxUrl = 15,
    InternalEcpTeamMailboxCreatingUrl = 16,
    InternalEcpTeamMailboxEditingUrl = 17,
    InternalEcpTeamMailboxHidingUrl = 18,
    InternalEcpExtensionInstallationUrl = 19,
    InternalEwsUrl = 20,
    InternalEmwsUrl = 21,
    InternalOABUrl = 22,
    InternalPhotosUrl = 23,
    InternalUMUrl = 24,
    InternalWebClientUrls = 25,
    MailboxDN = 26,
    PublicFolderServer = 27,
    ActiveDirectoryServer = 28,
    ExternalMailboxServer = 29,
    ExternalMailboxServerRequiresSSL = 30,
    ExternalMailboxServerAuthenticationMethods = 31,
    EcpVoicemailUrlFragment = 32,
    EcpEmailSubscriptionsUrlFragment = 33,
    EcpTextMessagingUrlFragment = 34,
    EcpDeliveryReportUrlFragment = 35,
    EcpRetentionPolicyTagsUrlFragment = 36,
    EcpPublishingUrlFragment = 37,
    EcpPhotoUrlFragment = 38,
    EcpConnectUrlFragment = 39,
    EcpTeamMailboxUrlFragment = 40,
    EcpTeamMailboxCreatingUrlFragment = 41,
    EcpTeamMailboxEditingUrlFragment = 42,
    EcpExtensionInstallationUrlFragment = 43,
    ExternalEcpUrl = 44,
    ExternalEcpVoicemailUrl = 45,
    ExternalEcpEmailSubscriptionsUrl = 46,
    ExternalEcpTextMessagingUrl = 47,
    ExternalEcpDeliveryReportUrl = 48,
    ExternalEcpRetentionPolicyTagsUrl = 49,
    ExternalEcpPublishingUrl = 50,
    ExternalEcpPhotoUrl = 51,
    ExternalEcpConnectUrl = 52,
    ExternalEcpTeamMailboxUrl = 53,
    ExternalEcpTeamMailboxCreatingUrl = 54,
    ExternalEcpTeamMailboxEditingUrl = 55,
    ExternalEcpTeamMailboxHidingUrl = 56,
    ExternalEcpExtensionInstallationUrl = 57,
    ExternalEwsUrl = 58,
    ExternalEmwsUrl = 59,
    ExternalOABUrl = 60,
    ExternalPhotosUrl = 61,
    ExternalUMUrl = 62,
    ExternalWebClientUrls = 63,
    CrossOrganizationSharingEnabled = 64,
    AlternateMailboxes = 65,
    CasVersion = 66,
    EwsSupportedSchemas = 67,
    InternalPop3Connections = 68,
    ExternalPop3Connections = 69,
    InternalImap4Connections = 70,
    ExternalImap4Connections = 71,
    InternalSmtpConnections = 72,
    ExternalSmtpConnections = 73,
    InternalServerExclusiveConnect = 74,
    ExternalEwsVersion = 75,
    MobileMailboxPolicy = 76,
    DocumentSharingLocations = 77,
    UserMSOnline = 78,
    InternalMailboxServerAuthenticationMethods = 79,
    MailboxVersion = 80,
    SPMySiteHostURL = 81,
    SiteMailboxCreationURL = 82,
    InternalRpcHttpServer = 83,
    InternalRpcHttpConnectivityRequiresSsl = 84,
    InternalRpcHttpAuthenticationMethod = 85,
    ExternalServerExclusiveConnect = 86,
    ExchangeRpcUrl = 87,
    ShowGalAsDefaultView = 88,
    AutoDiscoverSMTPAddress = 89,
    InteropExternalEwsUrl = 90,
    InteropExternalEwsVersion = 91,
    PublicFolderInformation = 92,
    RedirectUrl = 93,
    EwsPartnerUrl = 94,
    CertPrincipalName = 95,
    GroupingInformation = 96,
    MapiHttpEnabled = 97,
} enum ViewFilter {
    All = 0,
    Flagged = 1,
    HasAttachment = 2,
    ToOrCcMe = 3,
    Unread = 4,
    TaskActive = 5,
    TaskOverdue = 6,
    TaskCompleted = 7,
    Suggestions = 8,
    SuggestionsRespond = 9,
    SuggestionsDelete = 10,
} enum WellKnownFolderName {
    Calendar = 0,
    Contacts = 1,
    DeletedItems = 2,
    Drafts = 3,
    Inbox = 4,
    Journal = 5,
    Notes = 6,
    Outbox = 7,
    SentItems = 8,
    Tasks = 9,
    MsgFolderRoot = 10,
    PublicFoldersRoot = 11,
    Root = 12,
    JunkEmail = 13,
    SearchFolders = 14,
    VoiceMail = 15,
    RecoverableItemsRoot = 16,
    RecoverableItemsDeletions = 17,
    RecoverableItemsVersions = 18,
    RecoverableItemsPurges = 19,
    ArchiveRoot = 20,
    ArchiveMsgFolderRoot = 21,
    ArchiveDeletedItems = 22,
    ArchiveRecoverableItemsRoot = 23,
    ArchiveRecoverableItemsDeletions = 24,
    ArchiveRecoverableItemsVersions = 25,
    ArchiveRecoverableItemsPurges = 26,
    SyncIssues = 27,
    Conflicts = 28,
    LocalFailures = 29,
    ServerFailures = 30,
    RecipientCache = 31,
    QuickContacts = 32,
    ConversationHistory = 33,
    ToDoSearch = 34,
} enum XmlNamespace {
    NotSpecified = 0,
    Messages = 1,
    Types = 2,
    Errors = 3,
    Soap = 4,
    Soap12 = 5,
    XmlSchemaInstance = 6,
    PassportSoapFault = 7,
    WSTrustFebruary2005 = 8,
    WSAddressing = 9,
    Autodiscover = 10,
}
export interface ICalendarActionProvider {
    Accept(sendResponse: boolean): CalendarActionResults;
    AcceptTentatively(sendResponse: boolean): CalendarActionResults;
    CreateAcceptMessage(tentative: boolean): AcceptMeetingInvitationMessage;
    CreateDeclineMessage(): DeclineMeetingInvitationMessage;
    Decline(sendResponse: boolean): CalendarActionResults;
}export interface ICustomUpdateSerializer {
    WriteDeleteUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, updates: any): boolean;
    WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean;
    WriteSetUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition, updates: any): boolean;
    WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition): boolean;
}
export interface IEwsHttpWebRequest {
    Accept: string;
    AllowAutoRedirect: boolean;
    ClientCertificates: any;
    ContentType: string;
    CookieContainer: any;
    Credentials: any;
    Headers: any;
    Method: string;
    PreAuthenticate: boolean;
    Proxy: any;
    RequestUri: string;
    Timeout: number;
    UseDefaultCredentials: boolean;
    UserAgent: string;
    KeepAlive: boolean;
    ConnectionGroupName: string;
    Abort(): void;
    BeginGetRequestStream(callback: any, state: any): any;
    BeginGetResponse(callback: any, state: any): any;
    EndGetRequestStream(asyncResult: any): any;
    EndGetResponse(asyncResult: any): IEwsHttpWebResponse;
    GetRequestStream(): any;
    GetResponse(): IEwsHttpWebResponse;
}export interface IEwsHttpWebRequestFactory {
    CreateExceptionResponse(exception: any): IEwsHttpWebResponse;
    CreateRequest(uri: string): IEwsHttpWebRequest;
}export interface IEwsHttpWebResponse {
    ContentEncoding: string;
    ContentType: string;
    Headers: any;
    ResponseUri: string;
    StatusCode: any;
    StatusDescription: string;
    ProtocolVersion: any;
    Close(): void;
    GetResponseStream(): any;
}export interface IFileAttachmentContentHandler {
    GetOutputStream(attachmentId: string): any;
}
export interface IJsonSerializable {
    ToJson(service: ExchangeService): any;
}
export interface IJsonCollectionDeserializer {
    CreateFromJsonCollection(jsonCollection: any[], service: ExchangeService): void;
    UpdateFromJsonCollection(jsonCollection: any[], service: ExchangeService): void;
}export interface IOutParam<T> {
    outValue?: T;
    exception?: any;
    success?: boolean;
}
export interface IOwnedProperty {
    Owner: ServiceObject;
}export interface IRefParam<T> {
    getValue: () => T;
    setValue?: (value: T) => void;
}export interface ISearchStringProvider {
    GetSearchString(): string;
}export interface ISelfValidate {
    Validate(): any;
}export interface ITraceListener {
    Trace(traceType: string, traceMessage: string): void;
}
 class DiscoverySearchConfiguration {
    SearchId: string;
    SearchQuery: string;
    SearchableMailboxes: SearchableMailbox[];
    InPlaceHoldIdentity: string;
    ManagedByOrganization: string;
    Language: string;
    LoadFromJson(jsonObject: JsonObject): DiscoverySearchConfiguration;
    LoadFromXml(reader: EwsServiceXmlReader): DiscoverySearchConfiguration;
} class ExtendedAttributes {
} class FailedSearchMailbox {
    Mailbox: string;
    ErrorCode: number;
    ErrorMessage: string;
    IsArchive: boolean;
    LoadFailedMailboxesXml(rootXmlNamespace: XmlNamespace, reader: EwsServiceXmlReader): FailedSearchMailbox[];
} class KeywordStatisticsSearchResult {
    Keyword: string;
    ItemHits: number;
    Size: number;
}
 class MailboxHoldResult {
    HoldId: string;
    Query: string;
    Statuses: MailboxHoldStatus[];
    LoadFromJson(jsonObject: JsonObject): MailboxHoldResult;
    LoadFromXml(reader: EwsServiceXmlReader): MailboxHoldResult;
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
}
 class MailboxStatisticsItem {
    MailboxId: string;
    DisplayName: string;
    ItemCount: number;
    Size: number;
    LoadFromXml(reader: EwsServiceXmlReader): MailboxStatisticsItem;
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
    LoadFromXml(reader: EwsServiceXmlReader): NonIndexableItem;
} class NonIndexableItemDetailsResult {
    Items: NonIndexableItem[];
    FailedMailboxes: FailedSearchMailbox[];
    LoadFromJson(jsonObject: JsonObject): NonIndexableItemDetailsResult;
    LoadFromXml(reader: EwsServiceXmlReader): NonIndexableItemDetailsResult;
} class NonIndexableItemParameters {
    Mailboxes: string[];
    SearchArchiveOnly: boolean;
}
 class NonIndexableItemStatistic {
    Mailbox: string;
    ItemCount: number;
    ErrorMessage: string;
    LoadFromXml(reader: EwsServiceXmlReader): NonIndexableItemStatistic[];
} class PreviewItemMailbox {
    MailboxId: string;
    PrimarySmtpAddress: string;
} class PreviewItemResponseShape {
    BaseShape: PreviewItemBaseShape;
    AdditionalProperties: ExtendedPropertyDefinition[];
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
} class SearchMailboxesResult {
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
    GetRecipients(reader: EwsServiceXmlReader, elementName: string): string[];
    LoadExtendedPropertiesXml(reader: EwsServiceXmlReader): ExtendedPropertyCollection;
    LoadFromJson(jsonObject: JsonObject): SearchMailboxesResult;
    LoadFromXml(reader: EwsServiceXmlReader): SearchMailboxesResult;
    LoadKeywordStatsXml(reader: EwsServiceXmlReader): KeywordStatisticsSearchResult[];
    LoadPreviewItemsXml(reader: EwsServiceXmlReader): SearchPreviewItem[];
} class SearchPreviewItem {
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
 class SearchRefinerItem {
    Name: string;
    Value: string;
    Count: number;
    Token: string;
    LoadFromXml(reader: EwsServiceXmlReader): SearchRefinerItem;
} class SearchableMailbox {
    Guid: any;
    SmtpAddress: string;
    IsExternalMailbox: boolean;
    ExternalEmailAddress: string;
    DisplayName: string;
    IsMembershipGroup: boolean;
    ReferenceId: string;
    LoadFromJson(jsonObject: JsonObject): SearchableMailbox;
    LoadFromXml(reader: EwsServiceXmlReader): SearchableMailbox;
}
 class SetHoldOnMailboxesParameters {
    ActionType: HoldAction;
    HoldId: string;
    Query: string;
    Mailboxes: string[];
    Language: string;
    InPlaceHoldIdentity: string;
}export interface IDiscoveryVersionable {
    ServerVersion: number;
}
 class DiscoverySchemaChanges {
    static SearchMailboxesExtendedData: DiscoverySchemaChanges.SchemaChange;
    static SearchMailboxesAdditionalSearchScopes: DiscoverySchemaChanges.SchemaChange;
}
 module DiscoverySchemaChanges {
    class SchemaChange {
        MinimumServerVersion: number;
        constructor(serverVersion: number);
        constructor(serverBuild: string);
        IsCompatible(versionable: IDiscoveryVersionable): boolean;
    }
}
 class AbstractFolderIdWrapper {
    GetFolder(): Folder;
    Validate(version: ExchangeVersion): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
 class AbstractItemIdWrapper {
    GetItem(): Item;
    IternalToJson(service: ExchangeService): any;
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
 class CalendarActionResults {
    Appointment: Appointment;
    MeetingRequest: MeetingRequest;
    MeetingResponse: MeetingResponse;
    MeetingCancellation: MeetingCancellation;
    constructor(items: Item[]);
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
    RetentionPolicyTagId: any;
    GetXmlElementName(): string;
    ToJson(service: ExchangeService): any;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class DelegateInformation {
    DelegateUserResponses: DelegateUserResponse[];
    MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
}export interface ComplexPropertyChangedDelegate {
    (complexProperty: ComplexProperty): void;
}
export interface GetObjectInstanceDelegate<T> {
    (service: ExchangeService, xmlElementName: string): T;
}
export interface CustomXmlSerializationDelegate {
    (writer: any): any;
}
export interface ResponseHeadersCapturedHandler {
    (responseHeaders: any): any;
}
export interface ServiceObjectChangedDelegate {
    (serviceObject: ServiceObject): void;
}
export interface PropertyBagChangedDelegate {
    (): void;
}
export interface GetPropertyDefinitionCallback {
    (version: ExchangeVersion): PropertyDefinition;
}
export interface CreateComplexPropertyDelegate<TComplexProperty extends ComplexProperty> {
    (): TComplexProperty;
}
export interface CreateServiceObjectWithServiceParam {
    (srv: ExchangeService): any;
}
export interface CreateServiceObjectWithAttachmentParam {
    (itemAttachment: ItemAttachment, isNew: boolean): any;
} class EwsTraceListener {
    Trace(traceType: string, traceMessage: string): void;
} class ExpandGroupResults {
    Count: number;
    IncludesAllMembers: boolean;
    Members: EmailAddress[];
    GetEnumerator(): EmailAddress[];
    LoadFromXml(reader: EwsServiceXmlReader): void;
} class FolderIdWrapper extends AbstractFolderIdWrapper {
    constructor(folderId: FolderId);
    Validate(version: ExchangeVersion): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
} class FolderIdWrapperList {
    Count: number;
    Add(folder: Folder): void;
    Add(folderId: FolderId): void;
    /**this is to shim add method with easy use within file/module. */
    Add(folderOrId: Folder | FolderId): void;
    AddRange(folders: Folder[]): void;
    AddRange(folderIds: FolderId[]): void;
    Validate(version: ExchangeVersion): void;
    WriteToXml(writer: EwsServiceXmlWriter, ewsNamesapce: XmlNamespace, xmlElementName: string): void;
    __thisIndexer(index: number): AbstractFolderIdWrapper;
}
 class FolderWrapper extends AbstractFolderIdWrapper {
    constructor(folder: Folder);
    GetFolder(): Folder;
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
 class ImpersonatedUserId {
    IdType: ConnectingIdType;
    Id: string;
    constructor(idType?: ConnectingIdType, id?: string);
    WriteToXml(writer: EwsServiceXmlWriter): void;
} class ItemIdWrapper extends AbstractItemIdWrapper {
    constructor(itemId: ItemId);
    IternalToJson(service: ExchangeService): any;
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
 class ItemIdWrapperList {
    Count: number;
    Add(itemId: ItemId): void;
    Add(item: Item): void;
    /**this is to shim add method with easy use within file/module. */
    Add(itemOrId: Item | ItemId): void;
    AddRange(itemIds: ItemId[]): void;
    AddRange(items: Item[]): void;
    GetEnumerator(): any;
    InternalToJson(service: ExchangeService): any;
    WriteToXml(writer: EwsServiceXmlWriter, ewsNamesapce: XmlNamespace, xmlElementName: string): void;
    __thisIndexer(index: number): Item;
} class ItemWrapper extends AbstractItemIdWrapper {
    constructor(item: Item);
    GetItem(): Item;
    IternalToJson(service: ExchangeService): any;
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
 class ManagementRoles {
    constructor(userRoles?: string[], applicationRoles?: string[]);
    WriteRolesToXml(writer: EwsServiceXmlWriter, roles: string[], elementName: string): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
 class MapiTypeConverter {
    static MapiTypeConverterMap: any;
    ChangeType(mapiType: MapiPropertyType, value: any): any;
    ConvertToString(mapiPropType: MapiPropertyType, value: any): string;
    ConvertToValue(mapiPropType: MapiPropertyType, stringValue: string): any;
    IsArrayType(mapiType: MapiPropertyType): boolean;
    ParseMapiIntegerValue(s: string): any;
} class MapiTypeConverterMapEntry {
    Parse: any;
    ConvertToString: any;
    Type: any;
    IsArray: boolean;
    DefaultValue: any;
    ChangeType(value: any): any;
    ConvertToValue(stringValue: string): any;
    ConvertToValueOrDefault(stringValue: string): any;
    ValidateValueAsArray(value: any): any;
}
 class MobilePhone implements ISelfValidate {
    Name: string;
    PhoneNumber: string;
    Validate(): any;
} class NameResolution {
    Mailbox: EmailAddress;
    Contact: Contact;
    constructor(owner: NameResolutionCollection);
    LoadFromJson(jsonProperty: any, service: ExchangeService): void;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
} class NameResolutionCollection {
    Session: ExchangeService;
    Count: number;
    IncludesAllResolutions: boolean;
    constructor(service: ExchangeService);
    _getItem(index: number): NameResolution;
    GetEnumerator(): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
 class PrivilegedUserId {
    IdType: ConnectingIdType;
    Id: string;
    LogonType: PrivilegedLogonType;
    BudgetType: PrivilegedUserIdBudgetType;
    constructor(openType?: PrivilegedLogonType, idType?: ConnectingIdType, id?: string);
    WriteToXml(writer: EwsServiceXmlWriter, requestedServerVersion: ExchangeVersion): void;
}
 class SoapFaultDetails {
    FaultCode: string;
    FaultString: string;
    FaultActor: string;
    ResponseCode: ServiceError;
    Message: string;
    ErrorCode: ServiceError;
    ExceptionType: string;
    LineNumber: number;
    PositionWithinLine: number;
    ErrorDetails: {
        [index: string]: string;
    };
    static ParseFromJson(obj: any): SoapFaultDetails;
    ParseDetailNodeFromJson(obj: any): void;
    ParseMessageXmlFromJson(obj: any): void;
    static Parse(reader: EwsXmlReader, soapNamespace: XmlNamespace): SoapFaultDetails;
    ParseDetailNode(reader: EwsXmlReader): any;
    ParseMessageXml(reader: EwsXmlReader): any;
} class Time {
    Hours: number;
    Minutes: number;
    Seconds: number;
    ConvertToMinutes(): number;
    ToXSTime(): string;
} class UserConfiguration {
    Name: string;
    ParentFolderId: FolderId;
    ItemId: ItemId;
    Dictionary: UserConfigurationDictionary;
    XmlData: any[];
    BinaryData: any[];
    IsDirty: boolean;
    Bind(service: ExchangeService, name: string, parentFolderId: FolderId, properties: UserConfigurationProperties): UserConfiguration;
    Delete(): any;
    GetBase64PropertyValue(bytes: any[]): string;
    GetJsonUserConfigName(service: ExchangeService): JsonObject;
    InitializeProperties(requestedProperties: UserConfigurationProperties): any;
    IsPropertyUpdated(property: UserConfigurationProperties): boolean;
    Load(properties: UserConfigurationProperties): any;
    LoadFromJson(responseObject: JsonObject, service: ExchangeService): any;
    LoadFromXml(reader: EwsServiceXmlReader): any;
    MarkPropertyForUpdate(property: UserConfigurationProperties): any;
    ResetIsDirty(): any;
    Save(name: string, parentFolderName: WellKnownFolderName): any;
    Update(): any;
    ValidatePropertyAccess(property: UserConfigurationProperties): any;
    WriteBinaryDataToXml(writer: EwsServiceXmlWriter): any;
    WriteByteArrayToXml(writer: EwsServiceXmlWriter, byteArray: any[], xmlElementName: string): any;
    WriteToXml(writer: EwsServiceXmlWriter, xmlNamespace: XmlNamespace, xmlElementName: string): any;
    WriteUserConfigurationNameToXml(writer: EwsServiceXmlWriter, xmlNamespace: XmlNamespace, name: string, parentFolderId: FolderId): any;
    WriteXmlDataToXml(writer: EwsServiceXmlWriter): any;
}
 class FolderEvent extends NotificationEvent {
    FolderId: FolderId;
    OldFolderId: FolderId;
    UnreadCount: number;
    InternalLoadFromXml(reader: EwsServiceXmlReader): void;
    LoadFromJson(jsonEvent: JsonObject, service: ExchangeService): void;
}
 class GetEventsResults {
    static XmlElementNameToEventTypeMap: any;
    SubscriptionId: string;
    PreviousWatermark: string;
    NewWatermark: string;
    MoreEventsAvailable: boolean;
    FolderEvents: FolderEvent[];
    ItemEvents: ItemEvent[];
    AllEvents: NotificationEvent[];
    LoadEventsFromJson(jsonEventsArray: any[], service: ExchangeService): void;
    LoadFromJson(eventsResponse: JsonObject, service: ExchangeService): void;
    LoadFromXml(reader: EwsServiceXmlReader): void;
    LoadNotificationEventFromXml(reader: EwsServiceXmlReader, eventElementName: string, eventType: EventType): void;
}
 class GetStreamingEventsResults {
    Notifications: NotificationGroup[];
    LoadFromXml(reader: EwsServiceXmlReader): void;
    LoadNotificationEventFromXml(reader: EwsServiceXmlReader, eventElementName: string, eventType: EventType, notifications: NotificationGroup): void;
}
 class ItemEvent extends NotificationEvent {
    ItemId: ItemId;
    OldItemId: ItemId;
    InternalLoadFromXml(reader: EwsServiceXmlReader): void;
    LoadFromJson(jsonEvent: JsonObject, service: ExchangeService): void;
}
 class NotificationEvent {
    EventType: EventType;
    TimeStamp: Date;
    ParentFolderId: FolderId;
    OldParentFolderId: FolderId;
    InternalLoadFromXml(reader: EwsServiceXmlReader): void;
    LoadFromJson(jsonEvent: JsonObject, service: ExchangeService): void;
    LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): void;
} class NotificationEventArgs {
    Subscription: StreamingSubscription;
    Events: NotificationEvent[];
}
export interface NotificationGroup {
    SubscriptionId: string;
    Events: NotificationEvent[];
} class PullSubscription extends SubscriptionBase {
    MoreEventsAvailable: boolean;
    BeginGetEvents(callback: any, state: any): any;
    BeginUnsubscribe(callback: any, state: any): any;
    EndGetEvents(asyncResult: any): GetEventsResults;
    EndUnsubscribe(asyncResult: any): void;
    GetEvents(): GetEventsResults;
    Unsubscribe(): void;
}
 class PushSubscription extends SubscriptionBase {
} class StreamingSubscription extends SubscriptionBase {
    Service: ExchangeService;
    UsesWatermark: boolean;
    BeginUnsubscribe(callback: any, state: any): any;
    EndUnsubscribe(asyncResult: any): void;
    Unsubscribe(): void;
} class StreamingSubscriptionConnection {
    CurrentSubscriptions: StreamingSubscription[];
    IsOpen: boolean;
    AddSubscription(subscription: StreamingSubscription): void;
    Close(): void;
    Dispose(): void;
    Finalize(): void;
    HandleServiceResponseObject(response: any): void;
    InternalOnDisconnect(ex: Exception): void;
    IssueGeneralFailure(gseResponse: GetStreamingEventsResponse): void;
    IssueNotificationEvents(gseResponse: GetStreamingEventsResponse): void;
    IssueSubscriptionFailures(gseResponse: GetStreamingEventsResponse): void;
    OnRequestDisconnect(sender: any, args: HangingRequestDisconnectEventArgs): void;
    Open(): void;
    RemoveSubscription(subscription: StreamingSubscription): void;
    ThrowIfDisposed(): void;
    ValidateConnectionState(isConnectedExpected: boolean, errorMessage: string): void;
}
 class SubscriptionBase {
    Service: ExchangeService;
    Id: string;
    Watermark: string;
    UsesWatermark: boolean;
    LoadFromJson(jsonResponse: JsonObject, service: ExchangeService): void;
    LoadFromXml(reader: EwsServiceXmlReader): void;
} class SubscriptionErrorEventArgs {
    Subscription: StreamingSubscription;
    Exception: Exception;
} class AttachmentsPropertyDefinition extends ComplexPropertyDefinition<AttachmentCollection> {
    constructor(propertyName: string);
    HasFlag(flag: PropertyDefinitionFlags, version: ExchangeVersion): boolean;
}
 class BoolPropertyDefinition extends GenericPropertyDefinition<boolean> {
    ToString(value?: any): string;
} class ByteArrayPropertyDefinition extends TypedPropertyDefinition {
    IsNullable: boolean;
    Type: any;
    Parse(value: string): any;
    ToString(value?: any): string;
    WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any;
} class ComplexPropertyDefinition<TComplexProperty extends ComplexProperty> extends ComplexPropertyDefinitionBase {
    Type: any;
    constructor(propertyName: string, xmlElementName: string, version: ExchangeVersion, uri?: string, flags?: PropertyDefinitionFlags, propertyCreationDelegate?: CreateComplexPropertyDelegate<TComplexProperty>);
    CreatePropertyInstance(owner: ServiceObject): ComplexProperty;
}
 class ComplexPropertyDefinitionBase extends PropertyDefinition {
    constructor(propertyName: string, xmlElementName: string, version: ExchangeVersion, uri?: string, flags?: PropertyDefinitionFlags);
    CreatePropertyInstance(owner: ServiceObject): ComplexProperty;
    GetPropertyInstance(propertyBag: PropertyBag, complexProperty: IOutParam<ComplexProperty>): boolean;
    InternalLoadCollectionFromJson(jsonCollection: any, service: ExchangeService, propertyBag: PropertyBag): any;
    InternalLoadFromJson(jsonObject: any, service: ExchangeService, propertyBag: PropertyBag): any;
    InternalLoadFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): any;
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): any;
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
} class ContainedPropertyDefinition<TComplexProperty extends ComplexProperty> extends ComplexPropertyDefinition<TComplexProperty> {
    constructor(propertyName: string, xmlElementName: string, containedXmlElementName: string, version: ExchangeVersion, uri?: string, flags?: PropertyDefinitionFlags, propertyCreationDelegate?: CreateComplexPropertyDelegate<TComplexProperty>);
    InternalLoadFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void;
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
}
 class DateTimePropertyDefinition extends PropertyDefinition {
    IsNullable: boolean;
    Type: any;
    constructor(propertyName: string, xmlElementName: string, version: ExchangeVersion, uri?: string, flags?: PropertyDefinitionFlags, isNullable?: boolean);
    GetConvertedDateTime(service: ExchangeServiceBase, propertyBag: PropertyBag, isUpdateOperation: boolean, value: any): DateTime;
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any;
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void;
    ScopeToTimeZone(service: ExchangeServiceBase, dateTime: DateTime, propertyBag: PropertyBag, isUpdateOperation: boolean): DateTime;
    WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any;
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
}
 class DoublePropertyDefinition extends GenericPropertyDefinition<number> {
} class EffectiveRightsPropertyDefinition extends PropertyDefinition {
    Type: any;
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any;
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): any;
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
}
 class ExtendedPropertyDefinition extends PropertyDefinitionBase {
    Id: number;
    MapiType: MapiPropertyType;
    Name: string;
    PropertySet: DefaultExtendedPropertySet;
    PropertySetId: any;
    Tag: number;
    Version: ExchangeVersion;
    Type: any;
    constructor(tag?: number, name?: string, mapiType?: MapiPropertyType, propertySet?: DefaultExtendedPropertySet);
    Equals(obj: any): boolean;
    FormatField(name: string, fieldValue: string): string;
    GetHashCode(): number;
    GetPrintableName(): string;
    GetXmlElementName(): string;
    static IsEqualTo(extPropDef1: ExtendedPropertyDefinition, extPropDef2: ExtendedPropertyDefinition): boolean;
    LoadPropertyValueFromXmlJsObject(jsObject: any): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
} class GenericPropertyDefinition<TPropertyValue> extends TypedPropertyDefinition {
    Type: any;
    Parse(value: string): any;
    WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any;
} class GroupMemberPropertyDefinition extends ServiceObjectPropertyDefinition {
    Key: string;
    Type: any;
    constructor(key?: string);
    GetPrintableName(): string;
    GetXmlElementName(): string;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
} class IndexedPropertyDefinition extends ServiceObjectPropertyDefinition {
    Index: string;
    Type: string;
    constructor(uri: string, index: string);
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetPrintableName(): string;
    GetXmlElementName(): string;
    static IsEqualTo(idxPropDef1: IndexedPropertyDefinition, idxPropDef2: IndexedPropertyDefinition): boolean;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
}
 class IntPropertyDefinition extends GenericPropertyDefinition<number> {
}
 class ListValuePropertyDefinition<TPropertyValue> extends GenericPropertyDefinition<TPropertyValue> {
    Parse(value: string): any;
}
 class MeetingTimeZonePropertyDefinition extends PropertyDefinition {
    Type: any;
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any;
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void;
    WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any;
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
}
 class PermissionSetPropertyDefinition extends ComplexPropertyDefinitionBase {
    Type: any;
    constructor(propertyName: string, xmlElementName: string, version: ExchangeVersion, uri: string, flags: PropertyDefinitionFlags);
    CreatePropertyInstance(owner: ServiceObject): ComplexProperty;
} class PropertyDefinition extends ServiceObjectPropertyDefinition {
    Version: ExchangeVersion;
    IsNullable: boolean;
    XmlElementName: string;
    Name: string;
    constructor(propertyName: string, xmlElementName: string, version: ExchangeVersion, uri?: string, flags?: PropertyDefinitionFlags);
    GetAssociatedInternalProperties(): PropertyDefinition[];
    GetPrintableName(): string;
    HasFlag(flag: PropertyDefinitionFlags, version?: ExchangeVersion): boolean;
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any;
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void;
    RegisterAssociatedInternalProperties(properties: PropertyDefinition[]): any;
    WriteJsonValue(jsonObject: any, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any;
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
} class PropertyDefinitionBase {
    Version: ExchangeVersion;
    Type: any;
    constructor();
    GetPrintableName(): string;
    GetXmlElementName(): string;
    ToString(): string;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
 class RecurrencePropertyDefinition extends PropertyDefinition {
    Type: any;
    GetRecurrenceFromString(recurranceString: string): Recurrence;
    GetRecurrenceRange(recurrenceRangeString: string): RecurrenceRange;
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any;
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): any;
    WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any;
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any;
} class ResponseObjectsPropertyDefinition extends PropertyDefinition {
    IsNullable: boolean;
    Type: any;
    static GetResponseAction(responseActionString: string): ResponseActions;
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any;
    LoadPropertyValueFromXmlJsObject(jsonObject: any, service: ExchangeService, propertyBag: PropertyBag): void;
    WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): void;
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
}
 class ScopedDateTimePropertyDefinition extends DateTimePropertyDefinition {
    constructor(propertyName: string, xmlElementName: string, version: ExchangeVersion, uri?: string, flags?: PropertyDefinitionFlags, getPropertyDefinitionCallback?: GetPropertyDefinitionCallback);
    GetTimeZoneProperty(version: ExchangeVersion): PropertyDefinition;
    ScopeToTimeZone(service: ExchangeServiceBase, dateTime: DateTime, propertyBag: PropertyBag, isUpdateOperation: boolean): DateTime;
}
export interface GetPropertyDefinitionCallback {
    (version: ExchangeVersion): PropertyDefinition;
}
 class ServiceObjectPropertyDefinition extends PropertyDefinitionBase {
    Version: ExchangeVersion;
    Uri: string;
    constructor(uri?: string);
    GetXmlElementName(): string;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
} class StartTimeZonePropertyDefinition extends TimeZonePropertyDefinition {
    HasFlag(flag: PropertyDefinitionFlags, version: ExchangeVersion): boolean;
    RegisterAssociatedInternalProperties(properties: PropertyDefinition[]): void;
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
} class StringPropertyDefinition extends TypedPropertyDefinition {
    IsNullable: boolean;
    Type: any;
    Parse(value: string): any;
    WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any;
} class TaskDelegationStatePropertyDefinition extends GenericPropertyDefinition<TaskDelegationState> {
    Parse(value: string): any;
    ToString(value?: any): string;
} class TimeSpanPropertyDefinition extends GenericPropertyDefinition<any> {
    Parse(value: string): any;
    WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any;
}
 class TimeZonePropertyDefinition extends PropertyDefinition {
    Type: any;
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any;
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): any;
    WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any;
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any;
} class TypedPropertyDefinition extends PropertyDefinition {
    IsNullable: boolean;
    constructor(propertyName: string, xmlElementName: string, version: ExchangeVersion, uri?: string, flags?: PropertyDefinitionFlags, isNullable?: boolean);
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any;
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): any;
    Parse(value: string): any;
    ToString(value?: any): string;
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
} class ExchangeResourceManager {
} class CalendarView extends ViewBase {
    StartDate: Date;
    EndDate: Date;
    MaxItemsReturned: number;
    Traversal: ItemTraversal;
    AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): void;
    GetMaxEntriesReturned(): number;
    GetServiceObjectType(): ServiceObjectType;
    GetViewJsonTypeName(): string;
    GetViewXmlElementName(): string;
    InternalValidate(request: ServiceRequestBase): void;
    InternalWritePagingToJson(jsonView: JsonObject, service: ExchangeService): void;
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void;
    InternalWriteViewToXml(writer: EwsServiceXmlWriter): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any;
    WriteOrderByToXml(writer: EwsServiceXmlWriter): void;
} class ConversationIndexedItemView extends PagedView {
    OrderBy: OrderByCollection;
    Traversal: any;
    ViewFilter: any;
    AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): void;
    GetServiceObjectType(): ServiceObjectType;
    GetViewJsonTypeName(): string;
    GetViewXmlElementName(): string;
    InternalValidate(request: ServiceRequestBase): void;
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteOrderByToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void;
} class FindConversationResults {
    Conversations: Conversation[];
    HighlightTerms: HighlightTerm[];
    TotalCount: number;
    IndexedOffset: number;
}
 class FindFoldersResults {
    TotalCount: number;
    NextPageOffset: number;
    MoreAvailable: boolean;
    Folders: Folder[];
    GetEnumerator(): any;
} class FindItemsResults<TItem extends Item> {
    TotalCount: number;
    NextPageOffset: number;
    MoreAvailable: boolean;
    Items: TItem[];
    HighlightTerms: HighlightTerm[];
    constructor();
}
 class FolderView extends PagedView {
    Traversal: FolderTraversal;
    AddJsonProperties(jsonRequest: any, service: ExchangeService): any;
    GetServiceObjectType(): ServiceObjectType;
    GetViewJsonTypeName(): string;
    GetViewXmlElementName(): string;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
} class GroupedFindItemsResults<TItem extends Item> {
    TotalCount: number;
    NextPageOffset: number;
    MoreAvailable: boolean;
    ItemGroups: ItemGroup<TItem>[];
    GetEnumerator(): any;
} class Grouping {
    SortDirection: SortDirection;
    GroupOn: PropertyDefinitionBase;
    AggregateOn: PropertyDefinitionBase;
    AggregateType: AggregateType;
    /** no need for setter getter */
    constructor();
    constructor(groupOn: PropertyDefinitionBase, sortDirection: SortDirection, aggregateOn: PropertyDefinitionBase, aggregateType: AggregateType);
    InternalValidate(): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
 class ItemGroup<TItem extends Item> {
    GroupIndex: string;
    Items: TItem[];
    constructor(groupIndex: string, items: TItem[]);
}
 class ItemView extends PagedView {
    Traversal: ItemTraversal;
    OrderBy: OrderByCollection;
    constructor(pageSize: number, offset?: number, offsetBasePoint?: OffsetBasePoint);
    AddJsonProperties(jsonRequest: any, service: ExchangeService): any;
    GetServiceObjectType(): ServiceObjectType;
    GetViewJsonTypeName(): string;
    GetViewXmlElementName(): string;
    InternalValidate(request: ServiceRequestBase): void;
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteOrderByToXml(writer: EwsServiceXmlWriter): void;
}
 type PropertyDefinitionSortDirectionPair = KeyValuePair<PropertyDefinitionBase, SortDirection>;
 class OrderByCollection {
    ___implementsInterface: string[];
    Count: number;
    __thisIndexer(index: number): PropertyDefinitionSortDirectionPair;
    Add(propertyDefinition: PropertyDefinitionBase, sortDirection: SortDirection): void;
    Clear(): void;
    Contains(propertyDefinition: PropertyDefinitionBase): boolean;
    GetEnumerator(): any;
    Remove(propertyDefinition: PropertyDefinitionBase): boolean;
    RemoveAt(index: number): void;
    TryGetValue(propertyDefinition: PropertyDefinitionBase, sortDirection: IOutParam<SortDirection>): boolean;
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void;
} class PagedView extends ViewBase {
    PageSize: number;
    OffsetBasePoint: OffsetBasePoint;
    Offset: number;
    constructor(pageSize: number, offset?: number, offsetBasePoint?: OffsetBasePoint);
    GetMaxEntriesReturned(): number;
    InternalValidate(request: ServiceRequestBase): void;
    InternalWritePagingToJson(jsonView: any, service: ExchangeService): any;
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void;
    InternalWriteViewToXml(writer: EwsServiceXmlWriter): void;
    WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any;
    WriteOrderByToXml(writer: EwsServiceXmlWriter): void;
}
 class SeekToConditionItemView extends ViewBase {
    PageSize: number;
    OffsetBasePoint: OffsetBasePoint;
    Condition: SearchFilter;
    Traversal: ItemTraversal;
    OrderBy: OrderByCollection;
    AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): void;
    GetMaxEntriesReturned(): number;
    GetServiceObjectType(): ServiceObjectType;
    GetViewJsonTypeName(): string;
    GetViewXmlElementName(): string;
    InternalValidate(request: ServiceRequestBase): void;
    InternalWritePagingToJson(jsonView: JsonObject, service: ExchangeService): void;
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void;
    InternalWriteViewToXml(writer: EwsServiceXmlWriter): void;
    SetServiceObjectType(objType: ServiceObjectType): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any;
    WriteOrderByToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void;
} class ViewBase {
    PropertySet: PropertySet;
    AddJsonProperties(jsonRequest: any, service: ExchangeService): any;
    GetMaxEntriesReturned(): number;
    GetPropertySetOrDefault(): PropertySet;
    GetServiceObjectType(): ServiceObjectType;
    GetViewJsonTypeName(): string;
    GetViewXmlElementName(): string;
    InternalValidate(request: ServiceRequestBase): void;
    InternalWritePagingToJson(jsonView: any, service: ExchangeService): any;
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any;
    InternalWriteViewToXml(writer: EwsServiceXmlWriter): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any;
    WriteOrderByToXml(writer: EwsServiceXmlWriter): any;
    WritePagingToJson(service: ExchangeService): any;
    WriteShapeToJson(jsonRequest: any, service: ExchangeService): any;
    WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void;
}
 class SafeXmlFactory {
    CreateSafeXmlTextReader(stream: any): any;
    CreateXPathDocument(uri: string, space: any): any;
}
 class SecurityTimestamp {
    static DefaultTimestampValidityDurationString: string;
    static DefaultFormat: string;
    CreationTimeUtc: Date;
    ExpiryTimeUtc: Date;
    Id: string;
    DigestAlgorithm: string;
    static DefaultTimestampValidityDuration: any;
    static DefaultTimeToLive: any;
    GetCreationTimeChars(): any[];
    GetDigest(): any;
    GetExpiryTimeChars(): any[];
    ToChars(utcTime: Date): any[];
    ToString(): string;
}

 class Change {
    ChangeType: ChangeType;
    ServiceObject: ServiceObject;
    Id: ServiceId;
    CreateId(): ServiceId;
} class ChangeCollection<TChange> {
    Count: number;
    Item: TChange;
    SyncState: string;
    MoreChangesAvailable: boolean;
    Add(change: TChange): void;
    GetEnumerator(): TChange[];
} class FolderChange extends Change {
    Folder: Folder;
    FolderId: FolderId;
    CreateId(): ServiceId;
} class ItemChange extends Change {
    Item: Item;
    IsRead: boolean;
    ItemId: ItemId;
    CreateId(): ServiceId;
} class PhoneCall extends ComplexProperty {
    State: PhoneCallState;
    ConnectionFailureCause: ConnectionFailureCause;
    SIPResponseText: string;
    SIPResponseCode: number;
    Disconnect(): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    Refresh(): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class PhoneCallId extends ComplexProperty {
    Id: string;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteToXml(writer: EwsServiceXmlWriter): any;
} class UnifiedMessaging {
    constructor(service: ExchangeService);
    DisconnectPhoneCall(id: PhoneCallId): any;
    GetPhoneCallInformation(id: PhoneCallId): PhoneCall;
    PlayOnPhone(itemId: ItemId, dialString: string): PhoneCall;
} class ConfigurationSettingsBase {
    ResponseType: AutodiscoverResponseType;
    RedirectTarget: string;
    Error: AutodiscoverError;
    ConvertSettings(smtpAddress: string, requestedSettings: UserSettingName[]): GetUserSettingsResponse;
    GetNamespace(): string;
    LoadFromXml(reader: EwsXmlReader): any;
    MakeRedirectionResponse(redirectUrl: Uri): any;
    TryReadCurrentXmlElement(reader: EwsXmlReader): boolean;
} class AutodiscoverRequest {
    Service: AutodiscoverService;
    Url: Uri;
    constructor(service: AutodiscoverService, url: Uri);
    CreateServiceResponse(): AutodiscoverResponse;
    GetRequestXmlElementName(): string;
    GetResponseStream(response: any): any;
    GetResponseXmlElementName(): string;
    GetWsAddressingActionName(): string;
    InternalExecute(): IPromise<AutodiscoverResponse>;
    static IsRedirectionResponse(httpWebResponse: XMLHttpRequest): boolean;
    LoadFromXml(reader: EwsXmlReader): AutodiscoverResponse;
    LoadFromObject(obj: any): AutodiscoverResponse;
    ProcessWebException(webException: XMLHttpRequest): void;
    ReadServerVersionInfo(reader: EwsXmlReader): ExchangeServerInfo;
    ReadSoapBody(reader: EwsXmlReader): AutodiscoverResponse;
    ReadSoapFault(reader: EwsXmlReader): SoapFaultDetails;
    ReadSoapHeader(reader: EwsXmlReader): void;
    ReadSoapHeaders(reader: EwsXmlReader): void;
    Validate(): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteBodyToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
    WriteExtraCustomSoapHeadersToXml(writer: EwsServiceXmlWriter): void;
    WriteSoapRequest(requestUrl: Uri, writer: EwsServiceXmlWriter): void;
}
 class GetDomainSettingsRequest extends AutodiscoverRequest {
    Domains: string[];
    Settings: DomainSettingName[];
    RequestedVersion: ExchangeVersion;
    constructor(service: AutodiscoverService, url: Uri);
    CreateServiceResponse(): AutodiscoverResponse;
    Execute(): IPromise<GetDomainSettingsResponseCollection>;
    GetRequestXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetWsAddressingActionName(): string;
    PostProcessResponses(responses: GetDomainSettingsResponseCollection): any;
    Validate(): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class GetUserSettingsRequest extends AutodiscoverRequest {
    static GetUserSettingsActionUri: string;
    SmtpAddresses: string[];
    Settings: UserSettingName[];
    PartnerToken: string;
    PartnerTokenReference: string;
    constructor(service: AutodiscoverService, url: Uri);
    CreateServiceResponse(): AutodiscoverResponse;
    Execute(): IPromise<GetUserSettingsResponseCollection>;
    GetRequestXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetWsAddressingActionName(): string;
    PostProcessResponses(responses: GetUserSettingsResponseCollection): void;
    ReadSoapHeader(reader: EwsXmlReader): void;
    Validate(): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
    WriteExtraCustomSoapHeadersToXml(writer: EwsServiceXmlWriter): void;
}
 class AutodiscoverResponse {
    ErrorCode: AutodiscoverErrorCode;
    ErrorMessage: string;
    RedirectionUrl: Uri;
    LoadFromXml(reader: EwsXmlReader, endElementName: string): void;
    LoadFromJson(obj: any): void;
}
 class GetDomainSettingsResponse extends AutodiscoverResponse {
    Domain: string;
    RedirectTarget: string;
    Settings: {
        [index: number]: any;
    };
    DomainSettingErrors: DomainSettingError[];
    LoadDomainSettingErrorsFromXml(reader: EwsXmlReader): void;
    LoadDomainSettingsFromXml(reader: EwsXmlReader): void;
    LoadFromXml(reader: EwsXmlReader, parentElementName: string): void;
    ReadSettingFromXml(reader: EwsXmlReader): void;
    LoadDomainSettingErrorsFromJson(obj: any): void;
    LoadDomainSettingsFromJson(obj: any): void;
    LoadFromJson(obj: any): void;
    ReadSettingFromJson(obj: any): void;
} class GetDomainSettingsResponseCollection extends AutodiscoverResponseCollection<GetDomainSettingsResponse> {
    CreateResponseInstance(): GetDomainSettingsResponse;
    GetResponseCollectionXmlElementName(): string;
    GetResponseInstanceXmlElementName(): string;
} class GetUserSettingsResponse extends AutodiscoverResponse {
    SmtpAddress: string;
    RedirectTarget: string;
    Settings: {
        [index: number]: any;
    };
    UserSettingErrors: UserSettingError[];
    constructor();
    LoadFromXml(reader: EwsXmlReader, parentElementName: string): void;
    LoadUserSettingErrorsFromXml(reader: EwsXmlReader): void;
    LoadUserSettingsFromXml(reader: EwsXmlReader): void;
    ReadSettingFromXml(reader: EwsXmlReader): any;
    LoadFromJson(obj: any): void;
    LoadUserSettingErrorsFromJson(obj: any): void;
    LoadUserSettingsFromJson(obj: any): void;
    ReadSettingFromJson(obj: any): void;
    GetSettingValue<T>(setting: UserSettingName): T;
} class GetUserSettingsResponseCollection extends AutodiscoverResponseCollection<GetUserSettingsResponse> {
    CreateResponseInstance(): GetUserSettingsResponse;
    GetResponseCollectionXmlElementName(): string;
    GetResponseInstanceXmlElementName(): string;
}
 class ArchiveItemResponse extends ServiceResponse {
    Item: Item;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item;
    ReadElementsFromJson(responseObject: any, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
} class AttendeeAvailability extends ServiceResponse {
    CalendarEvents: CalendarEvent[];
    ViewType: FreeBusyViewType;
    MergedFreeBusyStatus: LegacyFreeBusyStatus[];
    WorkingHours: WorkingHours;
    LoadFreeBusyViewFromXmlJsObject(jsObject: any, viewType: FreeBusyViewType, service: ExchangeService): void;
}
 class ConvertIdResponse extends ServiceResponse {
    ConvertedId: AlternateIdBase;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class CreateAttachmentResponse extends ServiceResponse {
    Attachment: Attachment;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
} class CreateFolderResponse extends ServiceResponse {
    constructor(folder: Folder);
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder;
    Loaded(): void;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
 class CreateItemResponse extends CreateItemResponseBase {
    constructor(item: Item);
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item;
    Loaded(): void;
}
 class CreateItemResponseBase extends ServiceResponse {
    Items: Item[];
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item;
    ReadElementsFromJson(responseObject: any, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
 class CreateResponseObjectResponse extends CreateItemResponseBase {
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item;
}
 class DelegateManagementResponse extends ServiceResponse {
    DelegateUserResponses: DelegateUserResponse[];
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class DelegateUserResponse extends ServiceResponse {
    DelegateUser: DelegateUser;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class DeleteAttachmentResponse extends ServiceResponse {
    Attachment: Attachment;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class DisableAppResponse extends ServiceResponse {
} class ExecuteDiagnosticMethodResponse extends ServiceResponse {
    ReturnValue: any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class ExpandGroupResponse extends ServiceResponse {
    Members: ExpandGroupResults;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
} class FindConversationResponse extends ServiceResponse {
    Conversations: Conversation[];
    Results: FindConversationResults;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class FindFolderResponse extends ServiceResponse {
    Results: FindFoldersResults;
    constructor(propertySet: PropertySet);
    CreateFolderInstance(service: ExchangeService, xmlElementName: string): Folder;
    ReadElementsFromJson(responseObject: any, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
} class FindItemResponse<TItem extends Item> extends ServiceResponse {
    GroupedFindResults: GroupedFindItemsResults<TItem>;
    Results: FindItemsResults<TItem>;
    constructor(isGrouped: boolean, propertySet: PropertySet);
    CreateItemInstance(service: ExchangeService, xmlElementName: string): TItem;
    InternalReadItemsFromJson(jsonObject: any, propertySet: PropertySet, service: ExchangeService, destinationList: TItem[]): void;
    InternalReadItemsFromXmlJsObject(jsonObject: any, propertySet: PropertySet, service: ExchangeService, destinationList: TItem[]): void;
    ReadElementsFromJson(responseObject: any, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
 class GetAppManifestsResponse extends ServiceResponse {
    Manifests: any;
    Apps: ClientApp[];
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void;
    ReadFromExchange2013(reader: EwsServiceXmlReader): void;
    ReadFromExchange2013Sp1(reader: EwsServiceXmlReader): void;
} class GetAppMarketplaceUrlResponse extends ServiceResponse {
    AppMarketplaceUrl: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void;
}
 class GetAttachmentResponse extends ServiceResponse {
    Attachment: Attachment;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class GetClientAccessTokenResponse extends ServiceResponse {
    Id: string;
    TokenType: ClientAccessTokenType;
    TokenValue: string;
    TTL: number;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void;
}
 class GetClientExtensionResponse extends ServiceResponse {
    ClientExtensions: ClientExtension[];
    RawMasterTableXml: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class GetConversationItemsResponse extends ServiceResponse {
    Conversation: ConversationResponse;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class GetDelegateResponse extends DelegateManagementResponse {
    MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class GetDiscoverySearchConfigurationResponse extends ServiceResponse {
    DiscoverySearchConfigurations: DiscoverySearchConfiguration[];
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
} class GetEncryptionConfigurationResponse extends ServiceResponse {
    ImageBase64: string;
    EmailText: string;
    PortalText: string;
    DisclaimerText: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class GetEventsResponse extends ServiceResponse {
    Results: GetEventsResults;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void;
} class GetFolderResponse extends ServiceResponse {
    Folder: Folder;
    constructor(folder: Folder, propertySet: PropertySet);
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder;
    ReadElementsFromJson(responseObject: any, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
 class GetHoldOnMailboxesResponse extends ServiceResponse {
    HoldResult: MailboxHoldResult;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class GetInboxRulesResponse extends ServiceResponse {
    Rules: RuleCollection;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void;
} class GetItemResponse extends ServiceResponse {
    Item: Item;
    constructor(item: Item, propertySet: PropertySet);
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
 class GetNonIndexableItemDetailsResponse extends ServiceResponse {
    NonIndexableItemsResult: NonIndexableItemDetailsResult;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class GetNonIndexableItemStatisticsResponse extends ServiceResponse {
    NonIndexableStatistics: NonIndexableItemStatistic[];
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
} class GetPasswordExpirationDateResponse extends ServiceResponse {
    PasswordExpirationDate: Date;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class GetPhoneCallResponse extends ServiceResponse {
    PhoneCall: PhoneCall;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class GetRoomListsResponse extends ServiceResponse {
    RoomLists: EmailAddressCollection;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class GetRoomsResponse extends ServiceResponse {
    Rooms: EmailAddress[];
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
} class GetSearchableMailboxesResponse extends ServiceResponse {
    SearchableMailboxes: SearchableMailbox[];
    FailedMailboxes: FailedSearchMailbox[];
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
} class GetServerTimeZonesResponse extends ServiceResponse {
    TimeZones: any[];
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 enum ConnectionStatus {
    OK = 0,
    Closed = 1,
}
 class GetStreamingEventsResponse extends ServiceResponse {
    Results: GetStreamingEventsResults;
    ErrorSubscriptionIds: string[];
    LoadExtraErrorDetailsFromXml(reader: EwsServiceXmlReader, xmlElementName: string): boolean;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void;
}
 class GetUserConfigurationResponse extends ServiceResponse {
    UserConfiguration: UserConfiguration;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
} class GetUserOofSettingsResponse extends ServiceResponse {
    OofSettings: OofSettings;
}
 class GetUserRetentionPolicyTagsResponse extends ServiceResponse {
    RetentionPolicyTags: RetentionPolicyTag[];
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void;
}
 class InstallAppResponse extends ServiceResponse {
}
 class MarkAsJunkResponse extends ServiceResponse {
    MovedItemId: ItemId;
    constructor();
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
 class MoveCopyFolderResponse extends ServiceResponse {
    Folder: Folder;
    constructor();
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder;
    ReadElementsFromJson(responseObject: any, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
 class MoveCopyItemResponse extends ServiceResponse {
    Item: Item;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class PlayOnPhoneResponse extends ServiceResponse {
    PhoneCallId: PhoneCallId;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class ResolveNamesResponse extends ServiceResponse {
    Resolutions: NameResolutionCollection;
    constructor(service: ExchangeService);
    InternalThrowIfNecessary(): void;
    ReadElementsFromJson(responseObject: any, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
 class SearchMailboxesResponse extends ServiceResponse {
    SearchResult: SearchMailboxesResult;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
} class ServiceResponse {
    BatchProcessingStopped: boolean;
    Result: ServiceResult;
    ErrorCode: ServiceError;
    ErrorMessage: string;
    ErrorDetails: {
        [index: string]: string;
    };
    ErrorProperties: PropertyDefinitionBase[];
    /**
     * Initializes a new instance of the @see {@link ServiceResponse} class.
     * @constructor
     */
    constructor();
    /**
     * Initializes a new instance of the <see cref="ServiceResponse"/> class.
     * @constructor
     * @param {SoapFaultDetails} soapFaultDetails The SOAP fault details.
     */
    constructor(soapFaultDetails: SoapFaultDetails);
    /**
     * Initializes a new instance of the <see cref="ServiceResponse"/> class.
     * This is intended to be used by unit tests to create a fake service error response
     * @constructor
     * @param {ServiceError} responseCode Response code
     * @param {string} errorMessage Detailed error message
     */
    constructor(responseCode: ServiceError, errorMessage: string);
    InternalThrowIfNecessary(): void;
    Loaded(): void;
    LoadExtraErrorDetailsFromXml(reader: EwsServiceXmlReader, xmlElementName: string): boolean;
    LoadFromXmlJsObject(responseObject: any, service: ExchangeService): any;
    MapErrorCodeToErrorMessage(): void;
    ParseMessageXml(reader: EwsServiceXmlReader): void;
    ReadElementsFromJson(responseObject: any, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    ThrowIfNecessary(): void;
} class ServiceResponseCollection<TResponse extends ServiceResponse> {
    Count: number;
    OverallResult: ServiceResult;
    Add(response: TResponse): void;
    GetEnumerator(): any;
    __thisIndexer(index: number): TResponse;
}
 class SetEncryptionConfigurationResponse extends ServiceResponse {
}
 class SetHoldOnMailboxesResponse extends ServiceResponse {
    HoldResult: MailboxHoldResult;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
} class SubscribeResponse<TSubscription> extends ServiceResponse {
    Subscription: TSubscription;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class SuggestionsResponse extends ServiceResponse {
    Suggestions: Suggestion[];
    LoadSuggestedDaysFromXml(jsonProperty: any, service: ExchangeService): void;
}
 class SyncFolderHierarchyResponse extends SyncResponse<Folder, FolderChange> {
    SummaryPropertiesOnly: boolean;
    CreateChangeInstance(): FolderChange;
    GetChangeElementName(): string;
    GetChangeIdElementName(): string;
    GetIncludesLastInRangeXmlElementName(): string;
}
 class SyncFolderItemsResponse extends SyncResponse<Item, ItemChange> {
    SummaryPropertiesOnly: boolean;
    CreateChangeInstance(): ItemChange;
    GetChangeElementName(): string;
    GetChangeIdElementName(): string;
    GetIncludesLastInRangeXmlElementName(): string;
}
 class SyncResponse<TServiceObject, TChange> extends ServiceResponse {
    Changes: ChangeCollection<TChange>;
    SummaryPropertiesOnly: boolean;
    CreateChangeInstance(): TChange;
    GetChangeElementName(): string;
    GetChangeIdElementName(): string;
    GetIncludesLastInRangeXmlElementName(): string;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void;
}
 class UninstallAppResponse extends ServiceResponse {
}
 class UpdateFolderResponse extends ServiceResponse {
    constructor(folder: Folder);
    GetObjectInstance(session: ExchangeService, xmlElementName: string): Folder;
    Loaded(): void;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
 class UpdateInboxRulesResponse extends ServiceResponse {
    Errors: RuleOperationErrorCollection;
    LoadExtraErrorDetailsFromXml(reader: EwsServiceXmlReader, xmlElementName: string): boolean;
}
 class UpdateItemResponse extends ServiceResponse {
    ReturnedItem: Item;
    ConflictCount: number;
    constructor(item: Item);
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item;
    Loaded(): void;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
} class AddDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {
    MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
    DelegateUsers: DelegateUser[];
    CreateResponse(): DelegateManagementResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class ApplyConversationActionRequest extends MultiResponseServiceRequest<ServiceResponse> {
    ConversationActions: ConversationAction[];
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class ArchiveItemRequest extends MultiResponseServiceRequest<ArchiveItemResponse> {
    Ids: ItemIdWrapperList;
    SourceFolderId: FolderId;
    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ArchiveItemResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
    WriteIdsToXml(writer: EwsServiceXmlWriter): void;
}
 class AsyncRequestResult {
    ServiceRequest: ServiceRequestBase;
    WebRequest: IEwsHttpWebRequest;
    WebAsyncResult: any;
    AsyncState: any;
    AsyncWaitHandle: any;
    CompletedSynchronously: boolean;
    IsCompleted: boolean;
    ExtractServiceRequest<T>(exchangeService: ExchangeService, asyncResult: any): T;
}
 class ConvertIdRequest extends MultiResponseServiceRequest<ConvertIdResponse> {
    DestinationFormat: IdFormat;
    Ids: AlternateIdBase[];
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ConvertIdResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class CopyFolderRequest extends MoveCopyFolderRequest<MoveCopyFolderResponse> {
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyFolderResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
}
 class CopyItemRequest extends MoveCopyItemRequest<MoveCopyItemResponse> {
    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyItemResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
} class CreateAttachmentRequest extends MultiResponseServiceRequest<CreateAttachmentResponse> {
    EmitTimeZoneHeader: boolean;
    Attachments: Attachment[];
    ParentItemId: string;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): CreateAttachmentResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class CreateFolderRequest extends CreateRequest<Folder, ServiceResponse> {
    Folders: Folder[];
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetObjectCollectionXmlElementName(): string;
    GetParentFolderXmlElementName(): string;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): void;
} class CreateItemRequest extends CreateItemRequestBase<Item, ServiceResponse> {
    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    Validate(): void;
} class CreateItemRequestBase<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends CreateRequest<TServiceObject, TResponse> {
    MessageDisposition: MessageDisposition;
    SendInvitationsMode: SendInvitationsMode;
    Items: TServiceObject[];
    EmitTimeZoneHeader: boolean;
    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling);
    AddJsonProperties(jsonRequest: any, service: ExchangeService): any;
    GetObjectCollectionXmlElementName(): string;
    GetParentFolderXmlElementName(): string;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
}
 class CreateRequest<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {
    Objects: TServiceObject[];
    ParentFolderId: FolderId;
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    AddJsonProperties(jsonRequest: any, service: ExchangeService): any;
    GetExpectedResponseMessageCount(): number;
    GetObjectCollectionXmlElementName(): string;
    GetParentFolderXmlElementName(): string;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class CreateResponseObjectRequest extends CreateItemRequestBase<ServiceObject, CreateResponseObjectResponse> {
    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): CreateResponseObjectResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
} class CreateUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> {
    UserConfiguration: UserConfiguration;
    userConfiguration: UserConfiguration;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class DelegateManagementRequestBase<TResponse> extends SimpleServiceRequestBase {
    Mailbox: Mailbox;
    CreateResponse(): TResponse;
    Execute(): TResponse;
    ParseResponse(reader: EwsServiceXmlReader): any;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class DeleteAttachmentRequest extends MultiResponseServiceRequest<DeleteAttachmentResponse> {
    Attachments: Attachment[];
    CreateServiceResponse(service: ExchangeService, responseIndex: number): DeleteAttachmentResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class DeleteFolderRequest extends DeleteRequest<ServiceResponse> {
    FolderIds: FolderIdWrapperList;
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    InternalToJson(body: any): any;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class DeleteItemRequest extends DeleteRequest<ServiceResponse> {
    ItemIds: ItemIdWrapperList;
    AffectedTaskOccurrences: AffectedTaskOccurrence;
    SendCancellationsMode: SendCancellationsMode;
    SuppressReadReceipts: boolean;
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    InternalToJson(body: any): any;
    Validate(): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class DeleteRequest<TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {
    DeleteMode: DeleteMode;
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    InternalToJson(body: any): any;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
} class DeleteUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> {
    Name: string;
    ParentFolderId: FolderId;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class DisableAppRequest extends SimpleServiceRequestBase {
    Execute(): DisableAppResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class DisconnectPhoneCallRequest extends SimpleServiceRequestBase {
    Id: PhoneCallId;
    Execute(): ServiceResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class EmptyFolderRequest extends DeleteRequest<ServiceResponse> {
    DeleteSubFolders: boolean;
    FolderIds: FolderIdWrapperList;
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    InternalToJson(body: any): any;
    Validate(): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class ExecuteDiagnosticMethodRequest extends MultiResponseServiceRequest<ExecuteDiagnosticMethodResponse> {
    Verb: string;
    Parameter: any;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ExecuteDiagnosticMethodResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class ExpandGroupRequest extends MultiResponseServiceRequest<ExpandGroupResponse> {
    EmailAddress: EmailAddress;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ExpandGroupResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class FindConversationRequest extends SimpleServiceRequestBase {
    View: ViewBase;
    FolderId: FolderIdWrapper;
    QueryString: string;
    ReturnHighlightTerms: boolean;
    MailboxScope: MailboxSearchLocation;
    Execute(): FindConversationResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    Validate(): any;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class FindFolderRequest extends FindRequest<FindFolderResponse> {
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): FindFolderResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
} class FindItemRequest<TItem extends Item> extends FindRequest<FindItemResponse<TItem>> {
    GroupBy: Grouping;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): FindItemResponse<TItem>;
    GetGroupBy(): Grouping;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
}
 class FindRequest<TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {
    ParentFolderIds: FolderIdWrapperList;
    SearchFilter: SearchFilter;
    QueryString: string;
    ReturnHighlightTerms: boolean;
    View: ViewBase;
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    GetExpectedResponseMessageCount(): number;
    GetGroupBy(): Grouping;
    Validate(): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class GetAppManifestsRequest extends SimpleServiceRequestBase {
    ApiVersionSupported: string;
    SchemaVersionSupported: string;
    Execute(): GetAppManifestsResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class GetAppMarketplaceUrlRequest extends SimpleServiceRequestBase {
    ApiVersionSupported: string;
    SchemaVersionSupported: string;
    Execute(): GetAppMarketplaceUrlResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class GetAttachmentRequest extends MultiResponseServiceRequest<GetAttachmentResponse> {
    Attachments: Attachment[];
    AttachmentIds: string[];
    AdditionalProperties: PropertyDefinitionBase[];
    BodyType: BodyType;
    EmitTimeZoneHeader: boolean;
    AddJsonAttachmentIdToList(attachmentIds: any[], attachmentId: string): any;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetAttachmentResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteAttachmentIdXml(writer: EwsServiceXmlWriter, attachmentId: string): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class GetClientAccessTokenRequest extends MultiResponseServiceRequest<GetClientAccessTokenResponse> {
    TokenRequests: ClientAccessTokenRequest[];
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetClientAccessTokenResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class GetClientExtensionRequest extends SimpleServiceRequestBase {
    Execute(): GetClientExtensionResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class GetConversationItemsRequest extends MultiResponseServiceRequest<GetConversationItemsResponse> {
    Conversations: ConversationRequest[];
    ItemProperties: PropertySet;
    FoldersToIgnore: FolderIdCollection;
    MaxItemsToReturn: number;
    SortOrder: ConversationSortOrder;
    MailboxScope: MailboxSearchLocation;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetConversationItemsResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class GetDelegateRequest extends DelegateManagementRequestBase<GetDelegateResponse> {
    UserIds: UserId[];
    IncludePermissions: boolean;
    CreateResponse(): GetDelegateResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class GetDiscoverySearchConfigurationRequest extends SimpleServiceRequestBase {
    SearchId: string;
    ExpandGroupMembership: boolean;
    InPlaceHoldConfigurationOnly: boolean;
    Execute(): GetDiscoverySearchConfigurationResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class GetEncryptionConfigurationRequest extends SimpleServiceRequestBase {
    Execute(): GetEncryptionConfigurationResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class GetEventsRequest extends MultiResponseServiceRequest<GetEventsResponse> {
    SubscriptionId: string;
    Watermark: string;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetEventsResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class GetFolderRequest extends GetFolderRequestBase<GetFolderResponse> {
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetFolderResponse;
} class GetFolderRequestBase<TResponse extends ServiceResponse> extends GetRequest<Folder, TResponse> {
    FolderIds: FolderIdWrapperList;
    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: any);
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetServiceObjectType(): ServiceObjectType;
    GetXmlElementName(): string;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class GetFolderRequestForLoad extends GetFolderRequestBase<ServiceResponse> {
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
}
 class GetHoldOnMailboxesRequest extends SimpleServiceRequestBase {
    HoldId: string;
    Execute(): GetHoldOnMailboxesResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class GetInboxRulesRequest extends SimpleServiceRequestBase {
    MailboxSmtpAddress: string;
    Execute(): GetInboxRulesResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class GetItemRequest extends GetItemRequestBase<GetItemResponse> {
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetItemResponse;
}
 class GetItemRequestBase<TResponse extends ServiceResponse> extends GetRequest<Item, TResponse> {
    ItemIds: ItemIdWrapperList;
    EmitTimeZoneHeader: boolean;
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetServiceObjectType(): ServiceObjectType;
    GetXmlElementName(): string;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class GetItemRequestForLoad extends GetItemRequestBase<ServiceResponse> {
    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
} class GetNonIndexableItemDetailsRequest extends SimpleServiceRequestBase {
    Mailboxes: string[];
    PageSize: number;
    PageItemReference: string;
    PageDirection: SearchPageDirection;
    SearchArchiveOnly: boolean;
    Execute(): GetNonIndexableItemDetailsResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class GetNonIndexableItemStatisticsRequest extends SimpleServiceRequestBase {
    Mailboxes: string[];
    SearchArchiveOnly: boolean;
    Execute(): GetNonIndexableItemStatisticsResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class GetPasswordExpirationDateRequest extends SimpleServiceRequestBase {
    MailboxSmtpAddress: string;
    Execute(): GetPasswordExpirationDateResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class GetPhoneCallRequest extends SimpleServiceRequestBase {
    Id: PhoneCallId;
    Execute(): GetPhoneCallResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class GetRequest<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {
    PropertySet: PropertySet;
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    GetServiceObjectType(): ServiceObjectType;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class GetRoomListsRequest extends SimpleServiceRequestBase {
    Execute(): GetRoomListsResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class GetRoomsRequest extends SimpleServiceRequestBase {
    RoomList: EmailAddress;
    Execute(): GetRoomsResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class GetSearchableMailboxesRequest extends SimpleServiceRequestBase {
    SearchFilter: string;
    ExpandGroupMembership: boolean;
    Execute(): GetSearchableMailboxesResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class GetServerTimeZonesRequest extends MultiResponseServiceRequest<GetServerTimeZonesResponse> {
    Ids: string[];
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetServerTimeZonesResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class GetStreamingEventsRequest extends HangingServiceRequestBase {
    static HeartbeatFrequencyDefault: number;
    HeartbeatFrequency: number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class GetUserAvailabilityRequest extends SimpleServiceRequestBase {
    EmitTimeZoneHeader: boolean;
    IsFreeBusyViewRequested: boolean;
    IsSuggestionsViewRequested: boolean;
    Attendees: AttendeeInfo[];
    TimeWindow: TimeWindow;
    RequestedData: AvailabilityData;
    Options: AvailabilityOptions;
    constructor(service: ExchangeService);
    Execute(): IPromise<GetUserAvailabilityResults>;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(jsonBody: any): any;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class GetUserConfigurationRequest extends MultiResponseServiceRequest<GetUserConfigurationResponse> {
    Name: string;
    ParentFolderId: FolderId;
    UserConfiguration: UserConfiguration;
    Properties: UserConfigurationProperties;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetUserConfigurationResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class GetUserOofSettingsRequest extends SimpleServiceRequestBase {
    SmtpAddress: string;
    Execute(): GetUserOofSettingsResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class GetUserRetentionPolicyTagsRequest extends SimpleServiceRequestBase {
    Execute(): GetUserRetentionPolicyTagsResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class HangingRequestDisconnectEventArgs {
    constructor(reason: HangingRequestDisconnectReason, exception: Exception);
    Reason: HangingRequestDisconnectReason;
    Exception: Exception;
} class HangingServiceRequestBase extends ServiceRequestBase {
    IsConnected: boolean;
    heartbeatFrequencyMilliseconds: number;
    static LogAllWireBytes: boolean;
    Disconnect(): void;
    InternalExecute(): void;
    InternalOnConnect(): void;
    InternalOnDisconnect(reason: HangingRequestDisconnectReason, exception: Exception): void;
    ParseResponses(state: any): void;
    ReadPreamble(ewsXmlReader: EwsServiceXmlReader): void;
}
 class InstallAppRequest extends SimpleServiceRequestBase {
    Execute(): InstallAppResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class MarkAllItemsAsReadRequest extends MultiResponseServiceRequest<ServiceResponse> {
    FolderIds: FolderIdWrapperList;
    ReadFlag: boolean;
    SuppressReadReceipts: boolean;
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class MarkAsJunkRequest extends MultiResponseServiceRequest<MarkAsJunkResponse> {
    ItemIds: ItemIdWrapperList;
    IsJunk: boolean;
    MoveItem: boolean;
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MarkAsJunkResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class MoveCopyFolderRequest<TResponse extends ServiceResponse> extends MoveCopyRequest<Folder, TResponse> {
    FolderIds: FolderIdWrapperList;
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any;
    GetExpectedResponseMessageCount(): number;
    Validate(): void;
    WriteIdsToXml(writer: EwsServiceXmlWriter): void;
}
 class MoveCopyItemRequest<TResponse extends ServiceResponse> extends MoveCopyRequest<Item, TResponse> {
    ItemIds: ItemIdWrapperList;
    ReturnNewItemIds: boolean;
    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling);
    GetExpectedResponseMessageCount(): number;
    Validate(): void;
    WriteIdsToXml(writer: EwsServiceXmlWriter): void;
}
 class MoveCopyRequest<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {
    DestinationFolderId: FolderId;
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    AddIdsToJson(jsonObject: any, service: ExchangeService): any;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
    WriteIdsToXml(writer: EwsServiceXmlWriter): void;
}
 class MoveFolderRequest extends MoveCopyFolderRequest<MoveCopyFolderResponse> {
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyFolderResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
}
 class MoveItemRequest extends MoveCopyItemRequest<MoveCopyItemResponse> {
    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyItemResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
} class MultiResponseServiceRequest<TResponse extends ServiceResponse> extends SimpleServiceRequestBase {
    ErrorHandlingMode: ServiceErrorHandling;
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): TResponse;
    Execute(): IPromise<ServiceResponseCollection<TResponse>>;
    GetExpectedResponseMessageCount(): number;
    GetResponseMessageXmlElementName(): string;
    ParseResponseXMLJsObject(jsObject: any): any;
    ParseResponse(jsonBody: any): any;
} class PlayOnPhoneRequest extends SimpleServiceRequestBase {
    ItemId: ItemId;
    DialString: string;
    Execute(): PlayOnPhoneResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class RemoveDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {
    UserIds: UserId[];
    CreateResponse(): DelegateManagementResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class ResolveNamesRequest extends MultiResponseServiceRequest<ResolveNamesResponse> {
    NameToResolve: string;
    ReturnFullContactData: boolean;
    SearchLocation: ResolveNameSearchLocation;
    ContactDataPropertySet: PropertySet;
    ParentFolderIds: FolderIdWrapperList;
    constructor(service: ExchangeService);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ResolveNamesResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class SearchMailboxesRequest extends MultiResponseServiceRequest<SearchMailboxesResponse> {
    SearchQueries: MailboxQuery[];
    ResultType: SearchResultType;
    PreviewItemResponseShape: PreviewItemResponseShape;
    SortOrder: SortDirection;
    SortByProperty: string;
    Language: string;
    PerformDeduplication: boolean;
    PageSize: number;
    PageItemReference: string;
    PageDirection: SearchPageDirection;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): SearchMailboxesResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class SendItemRequest extends MultiResponseServiceRequest<ServiceResponse> {
    Items: Item[];
    SavedCopyDestinationFolderId: FolderId;
    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class ServiceRequestBase {
    /**        /// <summary>
     *   /// The two contants below are used to set the AnchorMailbox and ExplicitLogonUser values
     *   /// in the request header.
     *   /// </summary>
     *   /// <remarks>
     *   /// Note: Setting this values will route the request directly to the backend hosting the
     *   /// AnchorMailbox. These headers should be used primarily for UnifiedGroup scenario where
     *   /// a request needs to be routed directly to the group mailbox versus the user mailbox.
     *   /// </remarks>
         */
    Service: ExchangeService;
    AnchorMailbox: string;
    SoapFaultDetails: SoapFaultDetails;
    EmitTimeZoneHeader: boolean;
    constructor(service: ExchangeService);
    AddHeaders(webHeaderCollection: any): void;
    GetXmlElementName(): string;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    ParseResponse(jsonBody: any): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
    BuildXHR(): IXHROptions;
    BuildResponseObjectFromJson(jsObject: any): any;
    EmitRequest(request: IXHROptions): void;
    GetEwsHttpWebResponse(request: IXHROptions): IPromise<XMLHttpRequest>;
    GetRequestedServiceVersionString(): string;
    protected ProcessWebException(webException: XMLHttpRequest): void;
    protected ReadResponseXmlJsObject(jsObject: any): any;
    ReadSoapFault(reader: EwsServiceXmlReader): SoapFaultDetails;
    ReadSoapHeader(jsObject: any): any;
    ThrowIfNotSupportedByRequestedServerVersion(): void;
    Validate(): void;
    ValidateAndEmitRequest(request: IXHROptions): IPromise<XMLHttpRequest>;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteBodyToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
 class SetClientExtensionRequest extends MultiResponseServiceRequest<ServiceResponse> {
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class SetEncryptionConfigurationRequest extends SimpleServiceRequestBase {
    ImageBase64: string;
    EmailText: string;
    PortalText: string;
    DisclaimerText: string;
    Execute(): ServiceResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class SetHoldOnMailboxesRequest extends SimpleServiceRequestBase {
    ActionType: HoldAction;
    HoldId: string;
    Query: string;
    Mailboxes: string[];
    Language: string;
    InPlaceHoldIdentity: string;
    ItemHoldPeriod: string;
    Execute(): SetHoldOnMailboxesResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class SetTeamMailboxRequest extends SimpleServiceRequestBase {
    Execute(): ServiceResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class SetUserOofSettingsRequest extends SimpleServiceRequestBase {
    SmtpAddress: string;
    OofSettings: OofSettings;
    Execute(): ServiceResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class SimpleServiceRequestBase extends ServiceRequestBase {
    InternalExecute(): IPromise<any>;
    ReadResponseJson(jsObject: any): any;
    WebRequestAsyncCallback(webAsyncResult: any): any;
}
 class SubscribeRequest<TSubscription> extends MultiResponseServiceRequest<SubscribeResponse<TSubscription>> {
    FolderIds: FolderIdWrapperList;
    EventTypes: EventType[];
    Watermark: string;
    AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): void;
    GetExpectedResponseMessageCount(): number;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetSubscriptionXmlElementName(): string;
    GetXmlElementName(): string;
    InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class SubscribeToPullNotificationsRequest extends SubscribeRequest<PullSubscription> {
    Timeout: number;
    AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): void;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<PullSubscription>;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetSubscriptionXmlElementName(): string;
    InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void;
    Validate(): void;
}
 class SubscribeToPushNotificationsRequest extends SubscribeRequest<PushSubscription> {
    Frequency: number;
    Url: string;
    CallerData: string;
    AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): void;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<PushSubscription>;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetSubscriptionXmlElementName(): string;
    InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void;
    Validate(): void;
}
 class SubscribeToStreamingNotificationsRequest extends SubscribeRequest<StreamingSubscription> {
    AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): void;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<StreamingSubscription>;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetSubscriptionXmlElementName(): string;
    InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void;
    Validate(): void;
}
 class SyncFolderHierarchyRequest extends MultiResponseServiceRequest<SyncFolderHierarchyResponse> {
    PropertySet: PropertySet;
    SyncFolderId: FolderId;
    SyncState: string;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): SyncFolderHierarchyResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class SyncFolderItemsRequest extends MultiResponseServiceRequest<SyncFolderItemsResponse> {
    PropertySet: PropertySet;
    SyncFolderId: FolderId;
    SyncScope: SyncFolderItemsScope;
    SyncState: string;
    IgnoredItemIds: ItemIdWrapperList;
    MaxChangesReturned: number;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): SyncFolderItemsResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class UninstallAppRequest extends SimpleServiceRequestBase {
    Execute(): UninstallAppResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class UnpinTeamMailboxRequest extends SimpleServiceRequestBase {
    Execute(): ServiceResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class UnsubscribeRequest extends MultiResponseServiceRequest<ServiceResponse> {
    SubscriptionId: string;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class UpdateDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {
    MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
    DelegateUsers: DelegateUser[];
    CreateResponse(): DelegateManagementResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class UpdateFolderRequest extends MultiResponseServiceRequest<ServiceResponse> {
    Folders: Folder[];
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    CreateServiceResponse(session: ExchangeService, responseIndex: number): ServiceResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class UpdateInboxRulesRequest extends SimpleServiceRequestBase {
    MailboxSmtpAddress: string;
    RemoveOutlookRuleBlob: boolean;
    InboxRuleOperations: RuleOperation[];
    Execute(): UpdateInboxRulesResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class UpdateItemRequest extends MultiResponseServiceRequest<UpdateItemResponse> {
    EmitTimeZoneHeader: boolean;
    MessageDisposition: MessageDisposition;
    ConflictResolutionMode: ConflictResolutionMode;
    SendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode;
    SuppressReadReceipts: boolean;
    Items: Item[];
    SavedItemsDestinationFolder: FolderId;
    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): UpdateItemResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class UpdateUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> {
    UserConfiguration: UserConfiguration;
    userConfiguration: UserConfiguration;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class ServiceObject {
    PropertyBag: PropertyBag;
    Schema: ServiceObjectSchema;
    Item: any;
    Service: ExchangeService;
    IsNew: boolean;
    IsDirty: boolean;
    constructor(service: ExchangeService);
    /**This Indexer of c# */
    _getItem(propertyDefinition: PropertyDefinitionBase): any;
    Changed(): void;
    ClearChangeLog(): void;
    GetChangeXmlElementName(): string;
    GetDeleteFieldXmlElementName(): string;
    GetExtendedProperties(): ExtendedPropertyCollection;
    GetId(): ServiceId;
    GetIdPropertyDefinition(): PropertyDefinition;
    GetIsCustomDateTimeScopingRequired(): boolean;
    GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean;
    GetLoadedPropertyDefinitions(): PropertyDefinitionBase[];
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetSchema(): ServiceObjectSchema;
    GetSetFieldXmlElementName(): string;
    GetXmlElementName(): string;
    GetXmlElementNameOverride(): string;
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): void;
    InternalLoad(propertySet: PropertySet): IPromise<void>;
    Load(propertySet?: PropertySet): IPromise<void>;
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService, clearPropertyBag: boolean, requestedPropertySet?: PropertySet, summaryPropertiesOnly?: boolean): void;
    ThrowIfThisIsNew(): void;
    ThrowIfThisIsNotNew(): void;
    TryGetExtendedProperty<T>(propertyDefinition: ExtendedPropertyDefinition, propertyValue: IOutParam<T>): boolean;
    TryGetProperty<T>(propertyDefinition: PropertyDefinitionBase, propertyValue: IOutParam<T>): boolean;
    Validate(): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
    WriteToXmlForUpdate(writer: EwsServiceXmlWriter): void;
    InstanceType: string;
    IsAttachment: boolean;
}/**
 * Moved part of CreateEwsObjectFromXmlElementName to different object type like FolderInfo, itemInfo etc
 */
 class ServiceObjectInfo {
    XmlElementNameToServiceObjectClassMap: IndexerWithStringKey<string>;
    ServiceObjectConstructorsWithServiceParam: IndexerWithStringKey<CreateServiceObjectWithServiceParam>;
    ServiceObjectConstructorsWithAttachmentParam: IndexerWithStringKey<CreateServiceObjectWithAttachmentParam>;
    constructor();
    protected AddServiceObjectType(xmlElementName: string, type: string, createServiceObjectWithServiceParam: CreateServiceObjectWithServiceParam, createServiceObjectWithAttachmentParam: CreateServiceObjectWithAttachmentParam): any;
    InitializeServiceObjectClassMap(): any;
    CreateEwsObjectFromXmlElementName<TServiceObject extends ServiceObject>(service: ExchangeService, xmlElementName: string): TServiceObject;
} class CalendarEvent extends ComplexProperty {
    StartTime: Date;
    EndTime: Date;
    FreeBusyStatus: LegacyFreeBusyStatus;
    Details: CalendarEventDetails;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class CalendarEventDetails extends ComplexProperty {
    StoreId: string;
    Subject: string;
    Location: string;
    IsMeeting: boolean;
    IsRecurring: boolean;
    IsException: boolean;
    IsReminderSet: boolean;
    IsPrivate: boolean;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class Conflict extends ComplexProperty {
    ConflictType: ConflictType;
    NumberOfMembers: number;
    NumberOfMembersAvailable: number;
    NumberOfMembersWithConflict: number;
    NumberOfMembersWithNoData: number;
    FreeBusyStatus: LegacyFreeBusyStatus;
    constructor(conflictType: ConflictType);
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
 class OofSettings extends ComplexProperty {
    State: OofState;
    ExternalAudience: OofExternalAudience;
    Duration: TimeWindow;
    InternalReply: OofReply;
    ExternalReply: OofReply;
    AllowExternalOof: OofExternalAudience;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    SerializeOofReply(oofReply: OofReply, writer: EwsServiceXmlWriter, xmlElementName: string): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class Suggestion extends ComplexProperty {
    Date: DateTime;
    Quality: SuggestionQuality;
    TimeSuggestions: TimeSuggestion[];
    constructor();
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
 class TimeSuggestion extends ComplexProperty {
    MeetingTime: DateTime;
    IsWorkTime: boolean;
    Quality: SuggestionQuality;
    Conflicts: Conflict[];
    constructor();
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
 class WorkingHours extends ComplexProperty {
    LegacyTimeZone: LegacyAvailabilityTimeZone;
    TimeZone: moment.Moment;
    DaysOfTheWeek: DayOfTheWeek[];
    StartTime: TimeSpan;
    EndTime: TimeSpan;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
} class WorkingPeriod extends ComplexProperty {
    DaysOfWeek: DayOfTheWeek[];
    StartTime: TimeSpan;
    EndTime: TimeSpan;
    constructor();
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: any): boolean;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
 class DayOfTheWeekCollection extends ComplexProperty {
    Item: DayOfTheWeek;
    Count: number;
    Add(dayOfTheWeek: DayOfTheWeek): any;
    AddRange(daysOfTheWeek: any): any;
    Clear(): any;
    GetEnumerator(): any;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    LoadFromJsonValue(jsonValue: string): any;
    LoadFromXmlJsObject(jsonProperty: JsonObject, service: ExchangeService): void;
    Remove(dayOfTheWeek: DayOfTheWeek): boolean;
    RemoveAt(index: number): any;
    ToString(separator?: string): string;
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any;
}
 class AbsoluteDateTransition extends TimeZoneTransition {
    DateTime: DateTime;
    constructor(timeZoneDefinition: TimeZoneDefinition);
    constructor(timeZoneDefinition: any, targetGroup: TimeZoneTransitionGroup);
    GetXmlElementName(): string;
    InitializeFromTransitionTime(transitionTime: any): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class AbsoluteDayOfMonthTransition extends AbsoluteMonthTransition {
    DayOfMonth: number;
    constructor(timeZoneDefinition: TimeZoneDefinition);
    constructor(timeZoneDefinition: any, targetPeriod: TimeZonePeriod);
    CreateTransitionTime(): any;
    GetXmlElementName(): string;
    InitializeFromTransitionTime(transitionTime: any): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class AbsoluteMonthTransition extends TimeZoneTransition {
    TimeOffset: TimeSpan;
    Month: number;
    constructor(timeZoneDefinition: TimeZoneDefinition);
    constructor(timeZoneDefinition: any, targetPeriod: TimeZonePeriod);
    InitializeFromTransitionTime(transitionTime: any): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class RelativeDayOfMonthTransition extends AbsoluteMonthTransition {
    DayOfTheWeek: DayOfTheWeek;
    WeekIndex: number;
    constructor(timeZoneDefinition: TimeZoneDefinition);
    constructor(timeZoneDefinition: any, targetPeriod: TimeZonePeriod);
    CreateTransitionTime(): any;
    GetXmlElementName(): string;
    InitializeFromTransitionTime(transitionTime: any): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class TimeZoneDefinition extends ComplexProperty {
    Name: string;
    Id: string;
    Periods: DictionaryWithStringKey<TimeZonePeriod>;
    TransitionGroups: DictionaryWithStringKey<TimeZoneTransitionGroup>;
    constructor();
    constructor(timezoneInfo: TimeZoneInfo);
    CompareTransitions(x: TimeZoneTransition, y: TimeZoneTransition): number;
    CreateTransitionGroupToPeriod(timeZonePeriod: TimeZonePeriod): TimeZoneTransitionGroup;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    ToTimeZoneInfo(): any;
    Validate(): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
 class TimeZonePeriod extends ComplexProperty {
    static StandardPeriodId: string;
    static StandardPeriodName: string;
    static DaylightPeriodId: string;
    static DaylightPeriodName: string;
    IsStandardPeriod: boolean;
    Bias: TimeSpan;
    Name: string;
    Id: string;
    constructor();
    LoadFromXmlJsObject(reader: any): any;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
 class TimeZoneTransition extends ComplexProperty {
    TargetPeriod: TimeZonePeriod;
    TargetGroup: TimeZoneTransitionGroup;
    constructor(timeZoneDefinition: TimeZoneDefinition);
    constructor(timeZoneDefinition: any, targetGroup: TimeZoneTransitionGroup);
    constructor(timeZoneDefinition: any, targetPeriod: TimeZonePeriod);
    static AbsoluteDateTransition(timeZoneDefinition: TimeZoneDefinition): AbsoluteDateTransition;
    static RelativeDayOfMonthTransition(timeZoneDefinition: TimeZoneDefinition, targetPeriod?: TimeZonePeriod): RelativeDayOfMonthTransition;
    static AbsoluteDayOfMonthTransition(timeZoneDefinition: TimeZoneDefinition, targetPeriod?: TimeZonePeriod): AbsoluteDayOfMonthTransition;
    Create(timeZoneDefinition: TimeZoneDefinition, xmlElementName: string): TimeZoneTransition;
    CreateTimeZoneTransition(timeZoneDefinition: TimeZoneDefinition, targetPeriod: TimeZonePeriod, transitionTime: any): TimeZoneTransition;
    CreateTransitionTime(): any;
    GetXmlElementName(): string;
    InitializeFromTransitionTime(transitionTime: any): any;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
} class CustomTimeZoneCreateParams {
    BaseOffsetToUtc: TimeSpan;
    StandardDisplayName: string;
    DaylightDisplayName: string;
    HasDaylightPeriod: boolean;
    constructor();
}
 class TimeZoneTransitionGroup extends ComplexProperty {
    SupportsDaylight: boolean;
    Id: string;
    Transitions: TimeZoneTransition[];
    constructor(timeZoneDefinition: TimeZoneDefinition);
    constructor(timeZoneDefinition: any, id: string);
    CreateAdjustmentRule(startDate: Date, endDate: Date): any;
    GetCustomTimeZoneCreationParams(): CustomTimeZoneCreateParams;
    GetDaylightDelta(): TimeSpan;
    InitializeFromAdjustmentRule(adjustmentRule: any, standardPeriod: TimeZonePeriod): any;
    InitializeTransitions(): void;
    LoadFromXmlJsObject(reader: any): any;
    ReadAttributesFromXmlJsObject(reader: any): any;
    ReadElementsFromXmlJsObject(reader: any): boolean;
    Validate(): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
} class AttendeeInfo {
    SmtpAddress: string;
    AttendeeType: MeetingAttendeeType;
    ExcludeConflicts: boolean;
    constructor();
    constructor(smtpAddress?: string);
    constructor(smtpAddress?: string, attendeeType?: MeetingAttendeeType, excludeConflicts?: boolean);
    Validate(): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
} class AvailabilityOptions {
    MergedFreeBusyInterval: number;
    RequestedFreeBusyView: FreeBusyViewType;
    GoodSuggestionThreshold: number;
    MaximumSuggestionsPerDay: number;
    MaximumNonWorkHoursSuggestionsPerDay: number;
    MeetingDuration: number;
    MinimumSuggestionQuality: SuggestionQuality;
    DetailedSuggestionsWindow: TimeWindow;
    CurrentMeetingTime: DateTime;
    GlobalObjectId: string;
    Validate(timeWindow: TimeSpan): void;
    WriteToXml(writer: EwsServiceXmlWriter, request: GetUserAvailabilityRequest): void;
} class GetUserAvailabilityResults {
    SuggestionsResponse: SuggestionsResponse;
    AttendeesAvailability: ServiceResponseCollection<AttendeeAvailability>;
    Suggestions: Suggestion[];
}
 class LegacyAvailabilityTimeZone extends ComplexProperty {
    constructor();
    constructor(timeZone: MomentTimezone);
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    ToTimeZoneInfo(): any;
    ReadElementsFromXmlJsObject(reader: any): boolean;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class LegacyAvailabilityTimeZoneTime extends ComplexProperty {
    HasTransitionTime: boolean;
    Delta: TimeSpan;
    TimeOfDay: TimeSpan;
    DayOrder: number;
    Month: number;
    DayOfTheWeek: DayOfTheWeek;
    Year: number;
    constructor();
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    ToTransitionTime(): any;
    ReadElementsFromXmlJsObject(reader: any): boolean;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class OofReply {
    Culture: string;
    Message: string;
    InternalToJson(service: ExchangeService): JsonObject;
    LoadFromJson(jsonObject: JsonObject, service: ExchangeService): any;
    LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): any;
    ToString(): string;
    WriteEmptyReplyToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any;
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any;
}
 class TimeWindow {
    StartTime: DateTime;
    EndTime: DateTime;
    Duration: TimeSpan;
    constructor();
    constructor(startTime: DateTime, endTime: DateTime);
    LoadFromXmlJsObject(jsonObject: any, service: ExchangeService): void;
    Validate(): void;
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, startTime?: any, endTime?: any): void;
    WriteToXmlUnscopedDatesOnly(writer: EwsServiceXmlWriter, xmlElementName: string): void;
} class AlternateId extends AlternateIdBase {
    static SchemaTypeName: string;
    UniqueId: string;
    Mailbox: string;
    IsArchive: boolean;
    GetXmlElementName(): string;
    InternalToJson(jsonObject: JsonObject): any;
    InternalValidate(): any;
    LoadAttributesFromJson(responseObject: JsonObject): any;
    LoadAttributesFromXml(reader: EwsServiceXmlReader): any;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
} class AlternateIdBase {
    Format: IdFormat;
    GetXmlElementName(): string;
    InternalToJson(jsonObject: JsonObject): any;
    InternalValidate(): any;
    LoadAttributesFromJson(responseObject: JsonObject): any;
    LoadAttributesFromXml(reader: EwsServiceXmlReader): any;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteToXml(writer: EwsServiceXmlWriter): any;
} class AlternatePublicFolderId extends AlternateIdBase {
    static SchemaTypeName: string;
    FolderId: string;
    GetXmlElementName(): string;
    InternalToJson(jsonObject: JsonObject): any;
    LoadAttributesFromJson(responseObject: JsonObject): any;
    LoadAttributesFromXml(reader: EwsServiceXmlReader): any;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
} class AlternatePublicFolderItemId extends AlternatePublicFolderId {
    ItemId: string;
    GetXmlElementName(): string;
    InternalToJson(jsonObject: JsonObject): any;
    LoadAttributesFromJson(responseObject: JsonObject): any;
    LoadAttributesFromXml(reader: EwsServiceXmlReader): any;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
} class SearchFilter extends ComplexProperty {
    GetSearchFilterInstance(localName: string): SearchFilter;
    GetXmlElementName(): string;
    InternalToJson(service: ExchangeService): any;
    LoadFromXmlJsObject(reader: EwsServiceXmlReader): SearchFilter;
    LoadSearchFilterFromJson(jsonObject: any, service: ExchangeService): SearchFilter;
    WriteToXml(writer: EwsServiceXmlWriter): any;
}
 class ContainsSubstring extends PropertyBasedFilter {
    ContainmentMode: ContainmentMode;
    ComparisonMode: ComparisonMode;
    Value: string;
    GetXmlElementName(): string;
    InternalToJson(service: ExchangeService): any;
    InternalValidate(): void;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class ExcludesBitmask extends PropertyBasedFilter {
    Bitmask: number;
    GetXmlElementName(): string;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class Exists extends PropertyBasedFilter {
    GetXmlElementName(): string;
}
 class IsEqualTo extends RelationalFilter {
    GetXmlElementName(): string;
}
 class IsGreaterThan extends RelationalFilter {
    GetXmlElementName(): string;
}
 class IsGreaterThanOrEqualTo extends RelationalFilter {
    GetXmlElementName(): string;
}
 class IsLessThan extends RelationalFilter {
    GetXmlElementName(): string;
}
 class IsLessThanOrEqualTo extends RelationalFilter {
    GetXmlElementName(): string;
}
 class IsNotEqualTo extends RelationalFilter {
    GetXmlElementName(): string;
} class Not extends SearchFilter {
    SearchFilter: SearchFilter;
    GetXmlElementName(): string;
    InternalToJson(service: ExchangeService): any;
    InternalValidate(): void;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    SearchFilterChanged(complexProperty: ComplexProperty): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class PropertyBasedFilter extends SearchFilter {
    PropertyDefinition: PropertyDefinitionBase;
    InternalToJson(service: ExchangeService): any;
    InternalValidate(): void;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
} class RelationalFilter extends PropertyBasedFilter {
    OtherPropertyDefinition: PropertyDefinitionBase;
    Value: any;
    InternalToJson(service: ExchangeService): any;
    InternalValidate(): void;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class SearchFilterCollection extends SearchFilter {
    Count: number;
    Item: SearchFilter;
    LogicalOperator: LogicalOperator;
    Add(searchFilter: SearchFilter): void;
    AddRange(searchFilters: SearchFilter[]): void;
    Clear(): void;
    Contains(searchFilter: SearchFilter): boolean;
    GetEnumerator(): SearchFilter[];
    GetXmlElementName(): string;
    InternalToJson(service: ExchangeService): any;
    InternalValidate(): void;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    Remove(searchFilter: SearchFilter): void;
    RemoveAt(index: number): void;
    SearchFilterChanged(complexProperty: ComplexProperty): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
 class OutlookAccount {
    AccountType: string;
    ResponseType: AutodiscoverResponseType;
    RedirectTarget: string;
    ConvertToUserSettings(requestedSettings: UserSettingName[], response: GetUserSettingsResponse): any;
    LoadFromXml(reader: EwsXmlReader): any;
} class OutlookConfigurationSettings extends ConfigurationSettingsBase {
    ResponseType: AutodiscoverResponseType;
    RedirectTarget: string;
    ConvertSettings(smtpAddress: string, requestedSettings: UserSettingName[]): GetUserSettingsResponse;
    GetNamespace(): string;
    IsAvailableUserSetting(setting: UserSettingName): boolean;
    MakeRedirectionResponse(redirectUrl: Uri): any;
    ReportUnsupportedSettings(requestedSettings: UserSettingName[], response: GetUserSettingsResponse): any;
    TryReadCurrentXmlElement(reader: EwsXmlReader): boolean;
}
 class OutlookProtocol {
    ProtocolType: OutlookProtocolType;
    static AvailableUserSettings: any;
    ConvertEcpFragmentToUrl(fragment: string): string;
    ConvertToUserSettings(requestedSettings: UserSettingName[], response: GetUserSettingsResponse): any;
    LoadFromXml(reader: EwsXmlReader): any;
    LoadWebClientUrlsFromXml(reader: EwsXmlReader, webClientUrls: WebClientUrlCollection, elementName: string): any;
    ProtocolNameToType(protocolName: string): OutlookProtocolType;
}
 class OutlookUser {
    static AvailableUserSettings: UserSettingName[];
    ConvertToUserSettings(requestedSettings: UserSettingName[], response: GetUserSettingsResponse): any;
    LoadFromXml(reader: EwsXmlReader): any;
}
 class Appointment extends Item {
    constructor(x: any, y?: any);
    GetXmlElementName(): string;
}
 class Contact extends Item {
    FileAs: string;
    FileAsMapping: FileAsMapping;
    DisplayName: string;
    GivenName: string;
    Initials: string;
    MiddleName: string;
    NickName: string;
    CompleteName: CompleteName;
    CompanyName: string;
    EmailAddresses: EmailAddressDictionary;
    PhysicalAddresses: PhysicalAddressDictionary;
    PhoneNumbers: PhoneNumberDictionary;
    AssistantName: string;
    Birthday: DateTime;
    BusinessHomePage: string;
    Children: StringList;
    Companies: StringList;
    ContactSource: ContactSource;
    Department: string;
    Generation: string;
    ImAddresses: ImAddressDictionary;
    JobTitle: string;
    Manager: string;
    Mileage: string;
    OfficeLocation: string;
    PostalAddressIndex: PhysicalAddressIndex;
    Profession: string;
    SpouseName: string;
    Surname: string;
    WeddingAnniversary: DateTime;
    HasPicture: boolean;
    PhoneticFullName: string;
    PhoneticFirstName: string;
    PhoneticLastName: string;
    Alias: string;
    Notes: string;
    DirectoryPhoto: number[];
    UserSMIMECertificate: string[];
    MSExchangeCertificate: string[];
    DirectoryId: string;
    ManagerMailbox: EmailAddress;
    DirectReports: EmailAddressCollection;
    constructor(service: ExchangeService);
    constructor(parentAttachment: ItemAttachment);
    Bind(service: ExchangeService, id: ItemId): IPromise<Contact>;
    Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): IPromise<Contact>;
    static Bind(service: ExchangeService, id: ItemId, propertySet?: PropertySet): IPromise<Contact>;
    GetContactPictureAttachment(): FileAttachment;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetSchema(): ServiceObjectSchema;
    GetXmlElementName(): string;
    InternalRemoveContactPicture(): void;
    RemoveContactPicture(): void;
    SetContactPicture(fileNameOrContent: string | number[]): void;
    Validate(): void;
}
 class ContactGroup extends Item {
    GetXmlElementName(): string;
}
 class Conversation extends ServiceObject {
    GetXmlElementName(): string;
} class EmailMessage extends Item {
    ToRecipients: EmailAddressCollection;
    BccRecipients: EmailAddressCollection;
    CcRecipients: EmailAddressCollection;
    ConversationTopic: string;
    ConversationIndex: any[];
    From: EmailAddress;
    IsAssociated: boolean;
    IsDeliveryReceiptRequested: boolean;
    IsRead: boolean;
    IsReadReceiptRequested: boolean;
    IsResponseRequested: boolean;
    InternetMessageId: string;
    References: string;
    ReplyTo: EmailAddressCollection;
    Sender: EmailAddress;
    ReceivedBy: EmailAddress;
    ReceivedRepresenting: EmailAddress;
    ApprovalRequestData: ApprovalRequestData;
    VotingInformation: VotingInformation;
    Bind(service: ExchangeService, id: ItemId): IPromise<EmailMessage>;
    Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): IPromise<EmailMessage>;
    CreateForward(): ResponseMessage;
    CreateReply(replyAll: boolean): ResponseMessage;
    Forward(bodyPrefix: MessageBody, toRecipients: any | any[]): any;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetSchema(): ServiceObjectSchema;
    GetXmlElementName(): string;
    InternalSend(parentFolderId: FolderId, messageDisposition: MessageDisposition): any;
    Reply(bodyPrefix: MessageBody, replyAll: boolean): any;
    Send(): any;
    SendAndSaveCopy(destinationFolderId: FolderId): void;
    SendAndSaveCopy(destinationFolderName: WellKnownFolderName): void;
    SendAndSaveCopy(): void;
    SuppressReadReceipt(): void;
} class Item extends ServiceObject {
    ParentAttachment: ItemAttachment;
    RootItemId: ItemId;
    IsAttachment: boolean;
    IsNew: boolean;
    Id: ItemId;
    MimeContent: MimeContent;
    ParentFolderId: FolderId;
    Sensitivity: Sensitivity;
    Attachments: AttachmentCollection;
    DateTimeReceived: Date;
    Size: number;
    Categories: StringList;
    Culture: string;
    Importance: Importance;
    InReplyTo: string;
    IsSubmitted: boolean;
    IsAssociated: boolean;
    IsDraft: boolean;
    IsFromMe: boolean;
    IsResend: boolean;
    IsUnmodified: boolean;
    InternetMessageHeaders: InternetMessageHeaderCollection;
    DateTimeSent: Date;
    DateTimeCreated: Date;
    AllowedResponseActions: ResponseActions;
    ReminderDueBy: Date;
    IsReminderSet: boolean;
    ReminderMinutesBeforeStart: number;
    DisplayCc: string;
    DisplayTo: string;
    HasAttachments: boolean;
    Body: MessageBody;
    ItemClass: string;
    Subject: string;
    WebClientReadFormQueryString: string;
    WebClientEditFormQueryString: string;
    ExtendedProperties: ExtendedPropertyCollection;
    EffectiveRights: EffectiveRights;
    LastModifiedName: string;
    LastModifiedTime: Date;
    ConversationId: ConversationId;
    UniqueBody: UniqueBody;
    StoreEntryId: number[];
    InstanceKey: number[];
    Flag: Flag;
    NormalizedBody: NormalizedBody;
    EntityExtractionResult: EntityExtractionResult;
    PolicyTag: PolicyTag;
    ArchiveTag: ArchiveTag;
    RetentionDate: Date;
    Preview: string;
    TextBody: TextBody;
    IconIndex: IconIndex;
    DefaultAffectedTaskOccurrences: AffectedTaskOccurrence;
    DefaultSendCancellationsMode: SendCancellationsMode;
    DefaultSendInvitationsMode: SendInvitationsMode;
    DefaultSendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode;
    constructor(svc: ExchangeService);
    constructor(parentAttachment: ItemAttachment);
    Bind(service: ExchangeService, id: ItemId): IPromise<Item>;
    Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): IPromise<Item>;
    Copy(destinationFolderName: WellKnownFolderName): IPromise<Item>;
    Copy(destinationFolderId: FolderId): IPromise<Item>;
    Delete(deleteMode: DeleteMode): IPromise<void>;
    Delete(deleteMode: DeleteMode, suppressReadReceipts: boolean): IPromise<void>;
    GetExtendedProperties(): ExtendedPropertyCollection;
    GetIdPropertyDefinition(): PropertyDefinition;
    GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetSchema(): ServiceObjectSchema;
    GetXmlElementName(): string;
    HasUnprocessedAttachmentChanges(): boolean;
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): IPromise<void>;
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): IPromise<void>;
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipts: boolean): IPromise<void>;
    InternalLoad(propertySet: PropertySet): IPromise<void>;
    InternalUpdate(parentFolderId: FolderId, conflictResolutionMode: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): IPromise<Item>;
    InternalUpdate(parentFolderId: FolderId, conflictResolutionMode: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): IPromise<Item>;
    Move(destinationFolderId: FolderId): IPromise<Item>;
    Move(destinationFolderName: WellKnownFolderName): IPromise<Item>;
    RemoveExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition): boolean;
    Save(): IPromise<void>;
    Save(parentFolderName?: WellKnownFolderName): IPromise<void>;
    Save(parentFolderId?: FolderId): IPromise<void>;
    SetExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition, value: any): any;
    SetSubject(subject: string): any;
    ThrowIfThisIsAttachment(): void;
    Update(conflictResolutionMode: ConflictResolutionMode): IPromise<void>;
    Update(conflictResolutionMode: ConflictResolutionMode, suppressReadReceipts: boolean): IPromise<void>;
    Validate(): void;
    InstanceType: string;
}
/**
 ** this is partial section of CreateEwsObjectFromXmlElementName from serviceobjectinfo, other parts are moved to different object type like folderinfo etc.
 * this to is to avoid circular referencing with requirejs/commonjs/nodejs
 */
 class ItemInfo extends ServiceObjectInfo {
    InitializeServiceObjectClassMap(): any;
}
 class MeetingCancellation extends MeetingMessage {
    GetXmlElementName(): string;
}
 class MeetingMessage extends EmailMessage {
    GetXmlElementName(): string;
}
 class MeetingRequest extends MeetingMessage {
    GetXmlElementName(): string;
}
 class MeetingResponse extends MeetingMessage {
    GetXmlElementName(): string;
}
 class PostItem extends Item {
    GetXmlElementName(): string;
}
 class Task extends Item {
    GetXmlElementName(): string;
} class CalendarFolder extends Folder {
    /**
     * _FolderTYpe -> type of folder, use to avoid folder type detection using instanceof. some cases it has circular loop in nodejs/requirejs
     */
    _FolderType: string;
    constructor(service: ExchangeService);
    GetXmlElementName(): string;
}
 class ContactsFolder extends Folder {
    /**
     * _FolderTYpe -> type of folder, use to avoid folder type detection using instanceof. some cases it has circular loop in nodejs/requirejs
     */
    _FolderType: string;
    GetXmlElementName(): string;
} class Folder extends ServiceObject {
    Id: FolderId;
    ParentFolderId: FolderId;
    ChildFolderCount: number;
    DisplayName: string;
    FolderClass: string;
    TotalCount: number;
    ExtendedProperties: ExtendedPropertyCollection;
    ManagedFolderInformation: ManagedFolderInformation;
    EffectiveRights: EffectiveRights;
    Permissions: FolderPermissionCollection;
    UnreadCount: number;
    PolicyTag: PolicyTag;
    ArchiveTag: ArchiveTag;
    WellKnownFolderName: WellKnownFolderName;
    /**
     * _FolderTYpe -> type of folder, use to avoid folder type detection using instanceof. some cases it has circular loop in nodejs/requirejs
     */
    _FolderType: string;
    constructor(service: ExchangeService);
    static Bind(service: ExchangeService, id: FolderId): IPromise<Folder>;
    static Bind(service: ExchangeService, name: WellKnownFolderName): IPromise<Folder>;
    static Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): IPromise<Folder>;
    static Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): IPromise<Folder>;
    Copy(destinationFolderName: WellKnownFolderName): IPromise<Folder>;
    Copy(destinationFolderId: FolderId): IPromise<Folder>;
    Delete(deleteMode: DeleteMode): IPromise<void>;
    Empty(deleteMode: DeleteMode, deleteSubFolders: boolean): IPromise<void>;
    FindFolders(view: FolderView): IPromise<FindFoldersResults>;
    FindFolders(searchFilter: SearchFilter, view: FolderView): IPromise<FindFoldersResults>;
    FindItems(view: ItemView): IPromise<FindItemsResults<Item>>;
    FindItems(view: ItemView, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    FindItems(queryString: string, view: ItemView): IPromise<FindItemsResults<Item>>;
    FindItems(searchFilter: SearchFilter, view: ItemView): IPromise<FindItemsResults<Item>>;
    FindItems(queryString: string, view: ItemView, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    FindItems(searchFilter: SearchFilter, view: ItemView, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    GetXmlElementName(): string;
    GetChangeXmlElementName(): string;
    GetDeleteFieldXmlElementName(): string;
    GetExtendedProperties(): ExtendedPropertyCollection;
    GetIdPropertyDefinition(): PropertyDefinition;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetSchema(): ServiceObjectSchema;
    GetSetFieldXmlElementName(): string;
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode?: SendCancellationsMode, affectedTaskOccurrences?: AffectedTaskOccurrence): IPromise<void>;
    protected InternalFindItems<TItem extends Item>(queryString: string, view: ViewBase, groupBy: Grouping): IPromise<ServiceResponseCollection<FindItemResponse<TItem>>>;
    protected InternalFindItems<TItem extends Item>(searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): IPromise<ServiceResponseCollection<FindItemResponse<TItem>>>;
    /**this is to shim find items with querystring or searchfilter. */
    protected InternalFindItems<TItem extends Item>(searchFilterOrQueryString: SearchFilter | string, view: ViewBase, groupBy: Grouping): IPromise<ServiceResponseCollection<FindItemResponse<TItem>>>;
    InternalLoad(propertySet: PropertySet): IPromise<void>;
    MarkAllItemsAsRead(suppressReadReceipts: boolean): IPromise<void>;
    MarkAllItemsAsUnread(suppressReadReceipts: boolean): IPromise<void>;
    Move(destinationFolderName: WellKnownFolderName): IPromise<Folder>;
    Move(destinationFolderId: FolderId): IPromise<Folder>;
    RemoveExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition): boolean;
    Save(parentFolderName: WellKnownFolderName): IPromise<void>;
    Save(parentFolderId: FolderId): IPromise<void>;
    SetExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition, value: any): void;
    Update(): IPromise<void>;
    Validate(): void;
    InstanceType: string;
}
/**
 * this is partial section of CreateEwsObjectFromXmlElementName from serviceobjectinfo, other parts are moved to different object type like itemInfo etc.
 * this to is to avoid circular referencing with requirejs/commonjs/nodejs
 */
 class FolderInfo extends ServiceObjectInfo {
    InitializeServiceObjectClassMap(): any;
    CreateEwsObjectFromXmlElementName<TServiceObject extends ServiceObject>(service: ExchangeService, xmlElementName: string): TServiceObject;
}
 class SearchFolder extends Folder {
    /**
     * _FolderTYpe -> type of folder, use to avoid folder type detection using instanceof. some cases it has circular loop in nodejs/requirejs
     */
    _FolderType: string;
    GetXmlElementName(): string;
}
 class TasksFolder extends Folder {
    /**
     * _FolderTYpe -> type of folder, use to avoid folder type detection using instanceof. some cases it has circular loop in nodejs/requirejs
     */
    _FolderType: string;
    GetXmlElementName(): string;
}
 class AcceptMeetingInvitationMessage extends CalendarResponseMessage<MeetingResponse> {
    Tentative: boolean;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetXmlElementNameOverride(): string;
} class CalendarResponseMessage<TMessage> extends CalendarResponseMessageBase<TMessage> {
    Body: MessageBody;
    ToRecipients: EmailAddressCollection;
    CcRecipients: EmailAddressCollection;
    BccRecipients: EmailAddressCollection;
    ItemClass: string;
    Sensitivity: Sensitivity;
    Attachments: AttachmentCollection;
    InternetMessageHeaders: InternetMessageHeaderCollection;
    Sender: EmailAddress;
    GetSchema(): ServiceObjectSchema;
} class CalendarResponseMessageBase<TMessage extends EmailMessage> extends ResponseObject<TMessage> {
    Save(destinationFolderId: FolderId): CalendarActionResults;
    Send(): CalendarActionResults;
    SendAndSaveCopy(destinationFolderId: FolderId): CalendarActionResults;
}
 class CancelMeetingMessage extends CalendarResponseMessageBase<MeetingCancellation> {
    Body: MessageBody;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetSchema(): ServiceObjectSchema;
    GetXmlElementName(): string;
}
 class DeclineMeetingInvitationMessage extends CalendarResponseMessage<MeetingResponse> {
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetXmlElementName(): string;
} class PostReply extends ServiceObject {
    Subject: string;
    Body: MessageBody;
    BodyPrefix: MessageBody;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetSchema(): ServiceObjectSchema;
    GetXmlElementName(): string;
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): PostItem;
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any;
    InternalLoad(propertySet: PropertySet): any;
    Save(destinationFolderName: WellKnownFolderName): PostItem;
} class RemoveFromCalendar extends ServiceObject {
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetSchema(): ServiceObjectSchema;
    GetXmlElementName(): string;
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): Item[];
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any;
    InternalLoad(propertySet: PropertySet): any;
}
 class ResponseMessage extends ResponseObject<EmailMessage> {
    ResponseType: ResponseMessageType;
    Body: MessageBody;
    ToRecipients: EmailAddressCollection;
    CcRecipients: EmailAddressCollection;
    BccRecipients: EmailAddressCollection;
    Subject: string;
    BodyPrefix: MessageBody;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetSchema(): ServiceObjectSchema;
    GetXmlElementName(): string;
    GetXmlElementNameOverride(): string;
}
 class ResponseObject<TMessage> extends ServiceObject {
    IsReadReceiptRequested: boolean;
    IsDeliveryReceiptRequested: boolean;
    GetSchema(): ServiceObjectSchema;
    InternalCreate(destinationFolderId: FolderId, messageDisposition: MessageDisposition): Item[];
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any;
    InternalLoad(propertySet: PropertySet): any;
    Save(destinationFolderId: FolderId): TMessage;
    Send(): any;
    SendAndSaveCopy(destinationFolderId: FolderId): any;
}
 class SuppressReadReceipt extends ServiceObject {
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetSchema(): ServiceObjectSchema;
    GetXmlElementName(): string;
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): any;
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any;
    InternalLoad(propertySet: PropertySet): any;
} class AppointmentSchema extends ItemSchema {
    StartTimeZone: PropertyDefinition;
    EndTimeZone: PropertyDefinition;
    Start: PropertyDefinition;
    End: PropertyDefinition;
    OriginalStart: PropertyDefinition;
    IsAllDayEvent: PropertyDefinition;
    LegacyFreeBusyStatus: PropertyDefinition;
    Location: PropertyDefinition;
    When: PropertyDefinition;
    IsMeeting: PropertyDefinition;
    IsCancelled: PropertyDefinition;
    IsRecurring: PropertyDefinition;
    MeetingRequestWasSent: PropertyDefinition;
    IsResponseRequested: PropertyDefinition;
    AppointmentType: PropertyDefinition;
    MyResponseType: PropertyDefinition;
    Organizer: PropertyDefinition;
    RequiredAttendees: PropertyDefinition;
    OptionalAttendees: PropertyDefinition;
    Resources: PropertyDefinition;
    ConflictingMeetingCount: PropertyDefinition;
    AdjacentMeetingCount: PropertyDefinition;
    ConflictingMeetings: PropertyDefinition;
    AdjacentMeetings: PropertyDefinition;
    Duration: PropertyDefinition;
    TimeZone: PropertyDefinition;
    AppointmentReplyTime: PropertyDefinition;
    AppointmentSequenceNumber: PropertyDefinition;
    AppointmentState: PropertyDefinition;
    Recurrence: PropertyDefinition;
    FirstOccurrence: PropertyDefinition;
    LastOccurrence: PropertyDefinition;
    ModifiedOccurrences: PropertyDefinition;
    DeletedOccurrences: PropertyDefinition;
    MeetingTimeZone: PropertyDefinition;
    ConferenceType: PropertyDefinition;
    AllowNewTimeProposal: PropertyDefinition;
    IsOnlineMeeting: PropertyDefinition;
    MeetingWorkspaceUrl: PropertyDefinition;
    NetShowUrl: PropertyDefinition;
    ICalUid: PropertyDefinition;
    ICalRecurrenceId: PropertyDefinition;
    ICalDateTimeStamp: PropertyDefinition;
    EnhancedLocation: PropertyDefinition;
    JoinOnlineMeetingUrl: PropertyDefinition;
    OnlineMeetingSettings: PropertyDefinition;
    static Instance: AppointmentSchema;
    /**
     *
     */
    constructor();
    RegisterProperties(): void;
    init(): void;
}
 class CalendarResponseObjectSchema extends ServiceObjectSchema {
    static Instance: CalendarResponseObjectSchema;
    RegisterProperties(): void;
} class CancelMeetingMessageSchema extends ServiceObjectSchema {
    static Body: PropertyDefinition;
    static Instance: CancelMeetingMessageSchema;
    RegisterProperties(): void;
} class ContactGroupSchema extends ItemSchema {
    static DisplayName: PropertyDefinition;
    static FileAs: PropertyDefinition;
    static Members: PropertyDefinition;
    static Instance: ContactGroupSchema;
    RegisterProperties(): void;
}
 class ContactSchema extends ItemSchema {
    static FileAs: PropertyDefinition;
    static FileAsMapping: PropertyDefinition;
    static DisplayName: PropertyDefinition;
    static GivenName: PropertyDefinition;
    static Initials: PropertyDefinition;
    static MiddleName: PropertyDefinition;
    static NickName: PropertyDefinition;
    static CompleteName: PropertyDefinition;
    static CompanyName: PropertyDefinition;
    static EmailAddresses: PropertyDefinition;
    static PhysicalAddresses: PropertyDefinition;
    static PhoneNumbers: PropertyDefinition;
    static AssistantName: PropertyDefinition;
    static Birthday: PropertyDefinition;
    static BusinessHomePage: PropertyDefinition;
    static Children: PropertyDefinition;
    static Companies: PropertyDefinition;
    static ContactSource: PropertyDefinition;
    static Department: PropertyDefinition;
    static Generation: PropertyDefinition;
    static ImAddresses: PropertyDefinition;
    static JobTitle: PropertyDefinition;
    static Manager: PropertyDefinition;
    static Mileage: PropertyDefinition;
    static OfficeLocation: PropertyDefinition;
    static PostalAddressIndex: PropertyDefinition;
    static Profession: PropertyDefinition;
    static SpouseName: PropertyDefinition;
    static Surname: PropertyDefinition;
    static WeddingAnniversary: PropertyDefinition;
    static HasPicture: PropertyDefinition;
    static PhoneticFullName: PropertyDefinition;
    static PhoneticFirstName: PropertyDefinition;
    static PhoneticLastName: PropertyDefinition;
    static Alias: PropertyDefinition;
    static Notes: PropertyDefinition;
    static Photo: PropertyDefinition;
    static UserSMIMECertificate: PropertyDefinition;
    static MSExchangeCertificate: PropertyDefinition;
    static DirectoryId: PropertyDefinition;
    static ManagerMailbox: PropertyDefinition;
    static DirectReports: PropertyDefinition;
    static EmailAddress1: IndexedPropertyDefinition;
    static EmailAddress2: IndexedPropertyDefinition;
    static EmailAddress3: IndexedPropertyDefinition;
    static ImAddress1: IndexedPropertyDefinition;
    static ImAddress2: IndexedPropertyDefinition;
    static ImAddress3: IndexedPropertyDefinition;
    static AssistantPhone: IndexedPropertyDefinition;
    static BusinessFax: IndexedPropertyDefinition;
    static BusinessPhone: IndexedPropertyDefinition;
    static BusinessPhone2: IndexedPropertyDefinition;
    static Callback: IndexedPropertyDefinition;
    static CarPhone: IndexedPropertyDefinition;
    static CompanyMainPhone: IndexedPropertyDefinition;
    static HomeFax: IndexedPropertyDefinition;
    static HomePhone: IndexedPropertyDefinition;
    static HomePhone2: IndexedPropertyDefinition;
    static Isdn: IndexedPropertyDefinition;
    static MobilePhone: IndexedPropertyDefinition;
    static OtherFax: IndexedPropertyDefinition;
    static OtherTelephone: IndexedPropertyDefinition;
    static Pager: IndexedPropertyDefinition;
    static PrimaryPhone: IndexedPropertyDefinition;
    static RadioPhone: IndexedPropertyDefinition;
    static Telex: IndexedPropertyDefinition;
    static TtyTddPhone: IndexedPropertyDefinition;
    static BusinessAddressStreet: IndexedPropertyDefinition;
    static BusinessAddressCity: IndexedPropertyDefinition;
    static BusinessAddressState: IndexedPropertyDefinition;
    static BusinessAddressCountryOrRegion: IndexedPropertyDefinition;
    static BusinessAddressPostalCode: IndexedPropertyDefinition;
    static HomeAddressStreet: IndexedPropertyDefinition;
    static HomeAddressCity: IndexedPropertyDefinition;
    static HomeAddressState: IndexedPropertyDefinition;
    static HomeAddressCountryOrRegion: IndexedPropertyDefinition;
    static HomeAddressPostalCode: IndexedPropertyDefinition;
    static OtherAddressStreet: IndexedPropertyDefinition;
    static OtherAddressCity: IndexedPropertyDefinition;
    static OtherAddressState: IndexedPropertyDefinition;
    static OtherAddressCountryOrRegion: IndexedPropertyDefinition;
    static OtherAddressPostalCode: IndexedPropertyDefinition;
    static Instance: ContactSchema;
    RegisterProperties(): void;
} class ConversationSchema extends ServiceObjectSchema {
    static Id: PropertyDefinition;
    static Topic: PropertyDefinition;
    static UniqueRecipients: PropertyDefinition;
    static GlobalUniqueRecipients: PropertyDefinition;
    static UniqueUnreadSenders: PropertyDefinition;
    static GlobalUniqueUnreadSenders: PropertyDefinition;
    static UniqueSenders: PropertyDefinition;
    static GlobalUniqueSenders: PropertyDefinition;
    static LastDeliveryTime: PropertyDefinition;
    static GlobalLastDeliveryTime: PropertyDefinition;
    static Categories: PropertyDefinition;
    static GlobalCategories: PropertyDefinition;
    static FlagStatus: PropertyDefinition;
    static GlobalFlagStatus: PropertyDefinition;
    static HasAttachments: PropertyDefinition;
    static GlobalHasAttachments: PropertyDefinition;
    static MessageCount: PropertyDefinition;
    static GlobalMessageCount: PropertyDefinition;
    static UnreadCount: PropertyDefinition;
    static GlobalUnreadCount: PropertyDefinition;
    static Size: PropertyDefinition;
    static GlobalSize: PropertyDefinition;
    static ItemClasses: PropertyDefinition;
    static GlobalItemClasses: PropertyDefinition;
    static Importance: PropertyDefinition;
    static GlobalImportance: PropertyDefinition;
    static ItemIds: PropertyDefinition;
    static GlobalItemIds: PropertyDefinition;
    static LastModifiedTime: PropertyDefinition;
    static InstanceKey: PropertyDefinition;
    static Preview: PropertyDefinition;
    static IconIndex: PropertyDefinition;
    static GlobalIconIndex: PropertyDefinition;
    static DraftItemIds: PropertyDefinition;
    static HasIrm: PropertyDefinition;
    static GlobalHasIrm: PropertyDefinition;
    static Instance: ConversationSchema;
    RegisterProperties(): void;
} class EmailMessageSchema extends ItemSchema {
    static ToRecipients: PropertyDefinition;
    static BccRecipients: PropertyDefinition;
    static CcRecipients: PropertyDefinition;
    static ConversationIndex: PropertyDefinition;
    static ConversationTopic: PropertyDefinition;
    static From: PropertyDefinition;
    static IsDeliveryReceiptRequested: PropertyDefinition;
    static IsRead: PropertyDefinition;
    static IsReadReceiptRequested: PropertyDefinition;
    static IsResponseRequested: PropertyDefinition;
    static InternetMessageId: PropertyDefinition;
    static References: PropertyDefinition;
    static ReplyTo: PropertyDefinition;
    static Sender: PropertyDefinition;
    static ReceivedBy: PropertyDefinition;
    static ReceivedRepresenting: PropertyDefinition;
    static ApprovalRequestData: PropertyDefinition;
    static VotingInformation: PropertyDefinition;
    static Instance: EmailMessageSchema;
    RegisterProperties(): void;
} class FolderSchema extends ServiceObjectSchema {
    static Id: PropertyDefinition;
    static FolderClass: PropertyDefinition;
    static ParentFolderId: PropertyDefinition;
    static ChildFolderCount: PropertyDefinition;
    static DisplayName: PropertyDefinition;
    static UnreadCount: PropertyDefinition;
    static TotalCount: PropertyDefinition;
    static ManagedFolderInformation: PropertyDefinition;
    static EffectiveRights: PropertyDefinition;
    static Permissions: PropertyDefinition;
    static WellKnownFolderName: PropertyDefinition;
    static PolicyTag: PropertyDefinition;
    static ArchiveTag: PropertyDefinition;
    static Instance: FolderSchema;
    RegisterProperties(): void;
} class ItemSchema extends ServiceObjectSchema {
    static Id: PropertyDefinition;
    static Body: PropertyDefinition;
    static ItemClass: PropertyDefinition;
    static Subject: PropertyDefinition;
    static MimeContent: PropertyDefinition;
    static ParentFolderId: PropertyDefinition;
    static Sensitivity: PropertyDefinition;
    static Attachments: PropertyDefinition;
    static DateTimeReceived: PropertyDefinition;
    static Size: PropertyDefinition;
    static Categories: PropertyDefinition;
    static Importance: PropertyDefinition;
    static InReplyTo: PropertyDefinition;
    static IsSubmitted: PropertyDefinition;
    static IsAssociated: PropertyDefinition;
    static IsDraft: PropertyDefinition;
    static IsFromMe: PropertyDefinition;
    static IsResend: PropertyDefinition;
    static IsUnmodified: PropertyDefinition;
    static InternetMessageHeaders: PropertyDefinition;
    static DateTimeSent: PropertyDefinition;
    static DateTimeCreated: PropertyDefinition;
    static AllowedResponseActions: PropertyDefinition;
    static ReminderDueBy: PropertyDefinition;
    static IsReminderSet: PropertyDefinition;
    static ReminderMinutesBeforeStart: PropertyDefinition;
    static DisplayCc: PropertyDefinition;
    static DisplayTo: PropertyDefinition;
    static HasAttachments: PropertyDefinition;
    static Culture: PropertyDefinition;
    static EffectiveRights: PropertyDefinition;
    static LastModifiedName: PropertyDefinition;
    static LastModifiedTime: PropertyDefinition;
    static WebClientReadFormQueryString: PropertyDefinition;
    static WebClientEditFormQueryString: PropertyDefinition;
    static ConversationId: PropertyDefinition;
    static UniqueBody: PropertyDefinition;
    static StoreEntryId: PropertyDefinition;
    static InstanceKey: PropertyDefinition;
    static NormalizedBody: PropertyDefinition;
    static EntityExtractionResult: PropertyDefinition;
    static Flag: PropertyDefinition;
    static PolicyTag: PropertyDefinition;
    static ArchiveTag: PropertyDefinition;
    static RetentionDate: PropertyDefinition;
    static Preview: PropertyDefinition;
    static TextBody: PropertyDefinition;
    static IconIndex: PropertyDefinition;
    static Instance: ItemSchema;
    RegisterProperties(): void;
} class MeetingCancellationSchema extends MeetingMessageSchema {
    static Start: PropertyDefinition;
    static End: PropertyDefinition;
    static Location: PropertyDefinition;
    static AppointmentType: PropertyDefinition;
    static Recurrence: PropertyDefinition;
    static EnhancedLocation: PropertyDefinition;
    static Instance: MeetingCancellationSchema;
    RegisterProperties(): void;
} class MeetingMessageSchema extends EmailMessageSchema {
    static AssociatedAppointmentId: PropertyDefinition;
    static IsDelegated: PropertyDefinition;
    static IsOutOfDate: PropertyDefinition;
    static HasBeenProcessed: PropertyDefinition;
    static ResponseType: PropertyDefinition;
    static ICalUid: PropertyDefinition;
    static ICalRecurrenceId: PropertyDefinition;
    static ICalDateTimeStamp: PropertyDefinition;
    static IsOrganizer: PropertyDefinition;
    static Instance: MeetingMessageSchema;
    RegisterProperties(): void;
} class MeetingRequestSchema extends MeetingMessageSchema {
    static MeetingRequestType: PropertyDefinition;
    static IntendedFreeBusyStatus: PropertyDefinition;
    static ChangeHighlights: PropertyDefinition;
    static EnhancedLocation: PropertyDefinition;
    static Start: PropertyDefinition;
    static End: PropertyDefinition;
    static OriginalStart: PropertyDefinition;
    static IsAllDayEvent: PropertyDefinition;
    static LegacyFreeBusyStatus: PropertyDefinition;
    static Location: PropertyDefinition;
    static When: PropertyDefinition;
    static IsMeeting: PropertyDefinition;
    static IsCancelled: PropertyDefinition;
    static IsRecurring: PropertyDefinition;
    static MeetingRequestWasSent: PropertyDefinition;
    static AppointmentType: PropertyDefinition;
    static MyResponseType: PropertyDefinition;
    static Organizer: PropertyDefinition;
    static RequiredAttendees: PropertyDefinition;
    static OptionalAttendees: PropertyDefinition;
    static Resources: PropertyDefinition;
    static ConflictingMeetingCount: PropertyDefinition;
    static AdjacentMeetingCount: PropertyDefinition;
    static ConflictingMeetings: PropertyDefinition;
    static AdjacentMeetings: PropertyDefinition;
    static Duration: PropertyDefinition;
    static TimeZone: PropertyDefinition;
    static AppointmentReplyTime: PropertyDefinition;
    static AppointmentSequenceNumber: PropertyDefinition;
    static AppointmentState: PropertyDefinition;
    static Recurrence: PropertyDefinition;
    static FirstOccurrence: PropertyDefinition;
    static LastOccurrence: PropertyDefinition;
    static ModifiedOccurrences: PropertyDefinition;
    static DeletedOccurrences: PropertyDefinition;
    static MeetingTimeZone: PropertyDefinition;
    static StartTimeZone: PropertyDefinition;
    static EndTimeZone: PropertyDefinition;
    static ConferenceType: PropertyDefinition;
    static AllowNewTimeProposal: PropertyDefinition;
    static IsOnlineMeeting: PropertyDefinition;
    static MeetingWorkspaceUrl: PropertyDefinition;
    static NetShowUrl: PropertyDefinition;
    static Instance: MeetingRequestSchema;
    RegisterProperties(): void;
} class MeetingResponseSchema extends MeetingMessageSchema {
    static Start: PropertyDefinition;
    static End: PropertyDefinition;
    static Location: PropertyDefinition;
    static AppointmentType: PropertyDefinition;
    static Recurrence: PropertyDefinition;
    static ProposedStart: PropertyDefinition;
    static ProposedEnd: PropertyDefinition;
    static EnhancedLocation: PropertyDefinition;
    static Instance: MeetingResponseSchema;
    RegisterProperties(): void;
} class PostItemSchema extends ItemSchema {
    static ConversationIndex: PropertyDefinition;
    static ConversationTopic: PropertyDefinition;
    static From: PropertyDefinition;
    static InternetMessageId: PropertyDefinition;
    static IsRead: PropertyDefinition;
    static PostedTime: PropertyDefinition;
    static References: PropertyDefinition;
    static Sender: PropertyDefinition;
    static Instance: PostItemSchema;
    RegisterProperties(): void;
}
 class PostReplySchema extends ServiceObjectSchema {
    static Instance: PostReplySchema;
    RegisterProperties(): void;
}
 class ResponseMessageSchema extends ServiceObjectSchema {
    static Instance: ResponseMessageSchema;
    RegisterProperties(): void;
} class ResponseObjectSchema extends ServiceObjectSchema {
    static ReferenceItemId: PropertyDefinition;
    static BodyPrefix: PropertyDefinition;
    static Instance: ResponseObjectSchema;
    RegisterProperties(): void;
} class SearchFolderSchema extends FolderSchema {
    static SearchParameters: PropertyDefinition;
    static Instance: SearchFolderSchema;
    RegisterProperties(): void;
} class ServiceObjectSchema {
    FirstClassProperties: PropertyDefinition[];
    FirstClassSummaryProperties: PropertyDefinition[];
    IndexedProperties: IndexedPropertyDefinition[];
    static AppointmentSchema: AppointmentSchema;
    static appointmentSchema: AppointmentSchema;
    static ExtendedProperties: PropertyDefinition;
    constructor();
    GetEnumerator(): PropertyDefinition[];
    RegisterIndexedProperty(indexedProperty: IndexedPropertyDefinition): void;
    RegisterInternalProperty(property: PropertyDefinition): void;
    RegisterProperties(): void;
    RegisterProperty(property: PropertyDefinition, isInternal?: boolean): void;
    TryGetPropertyDefinition(xmlElementName: string, propertyDefinition: IOutParam<PropertyDefinition>): boolean;
} class TaskSchema extends ItemSchema {
    static ActualWork: PropertyDefinition;
    static AssignedTime: PropertyDefinition;
    static BillingInformation: PropertyDefinition;
    static ChangeCount: PropertyDefinition;
    static Companies: PropertyDefinition;
    static CompleteDate: PropertyDefinition;
    static Contacts: PropertyDefinition;
    static DelegationState: PropertyDefinition;
    static Delegator: PropertyDefinition;
    static DueDate: PropertyDefinition;
    static Mode: PropertyDefinition;
    static IsComplete: PropertyDefinition;
    static IsRecurring: PropertyDefinition;
    static IsTeamTask: PropertyDefinition;
    static Mileage: PropertyDefinition;
    static Owner: PropertyDefinition;
    static PercentComplete: PropertyDefinition;
    static Recurrence: PropertyDefinition;
    static StartDate: PropertyDefinition;
    static Status: PropertyDefinition;
    static StatusDescription: PropertyDefinition;
    static TotalWork: PropertyDefinition;
    static Instance: TaskSchema;
    RegisterProperties(): void;
} class Recurrence extends ComplexProperty {
    XmlElementName: string;
    IsRegenerationPattern: boolean;
    StartDate: Date;
    HasEnd: boolean;
    NumberOfOccurrences: number;
    EndDate: Date;
    GetFieldValueOrThrowIfNull(value: any, name: string): any;
    InternalToJson(service: ExchangeService): any;
    InternalValidate(): any;
    InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): any;
    IsSame(otherRecurrence: Recurrence): boolean;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    NeverEnds(): any;
    PatternToJson(service: ExchangeService): JsonObject;
    RangeToJson(service: ExchangeService): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class DailyPattern extends IntervalPattern {
    XmlElementName: string;
}
 class DailyRegenerationPattern extends IntervalPattern {
    XmlElementName: string;
    IsRegenerationPattern: boolean;
}
 class IntervalPattern extends Recurrence {
    Interval: number;
    InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    PatternToJson(service: ExchangeService): JsonObject;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class MonthlyPattern extends IntervalPattern {
    XmlElementName: string;
    DayOfMonth: number;
    InternalValidate(): void;
    InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    PatternToJson(service: ExchangeService): JsonObject;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class MonthlyRegenerationPattern extends IntervalPattern {
    XmlElementName: string;
    IsRegenerationPattern: boolean;
}
 class RelativeMonthlyPattern extends IntervalPattern {
    XmlElementName: string;
    DayOfTheWeekIndex: DayOfTheWeekIndex;
    DayOfTheWeek: DayOfTheWeek;
    InternalValidate(): void;
    InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    PatternToJson(service: ExchangeService): JsonObject;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
} class RelativeYearlyPattern extends Recurrence {
    XmlElementName: string;
    DayOfTheWeekIndex: DayOfTheWeekIndex;
    DayOfTheWeek: DayOfTheWeek;
    Month: Month;
    InternalValidate(): void;
    InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    PatternToJson(service: ExchangeService): JsonObject;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class WeeklyPattern extends IntervalPattern {
    XmlElementName: string;
    DaysOfTheWeek: DayOfTheWeekCollection;
    FirstDayOfWeek: any;
    DaysOfTheWeekChanged(complexProperty: ComplexProperty): void;
    InternalValidate(): void;
    InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    PatternToJson(service: ExchangeService): JsonObject;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class WeeklyRegenerationPattern extends IntervalPattern {
    XmlElementName: string;
    IsRegenerationPattern: boolean;
} class YearlyPattern extends Recurrence {
    XmlElementName: string;
    Month: Month;
    DayOfMonth: number;
    InternalValidate(): void;
    InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    PatternToJson(service: ExchangeService): JsonObject;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class YearlyRegenerationPattern extends IntervalPattern {
    XmlElementName: string;
    IsRegenerationPattern: boolean;
} class EndDateRecurrenceRange extends RecurrenceRange {
    XmlElementName: string;
    EndDate: Date;
    AddPropertiesToJson(jsonProperty: JsonObject, service: ExchangeService): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    SetupRecurrence(recurrence: Recurrence): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class NoEndRecurrenceRange extends RecurrenceRange {
    XmlElementName: string;
    SetupRecurrence(recurrence: Recurrence): any;
} class NumberedRecurrenceRange extends RecurrenceRange {
    XmlElementName: string;
    NumberOfOccurrences: number;
    AddPropertiesToJson(jsonProperty: JsonObject, service: ExchangeService): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    SetupRecurrence(recurrence: Recurrence): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
} class RecurrenceRange extends ComplexProperty {
    XmlElementName: string;
    Recurrence: Recurrence;
    StartDate: Date;
    AddPropertiesToJson(jsonProperty: JsonObject, service: ExchangeService): any;
    Changed(): any;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    SetupRecurrence(recurrence: Recurrence): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}

}