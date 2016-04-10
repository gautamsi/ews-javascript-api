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
    Add(key: TKey, value: TValue): void;
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
}
import moment = require('moment-timezone');
 enum DateTimeKind {
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
    toString(): string;
    utcOffset(value: number): void;
    static DateTimeToXSDateTime(dateTime: DateTime): string;
    static DateTimeToXSDate(date: DateTime): string;
    static MinValue: DateTime;
    static MaxValue: DateTime;
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
}
 enum DateTimeStyles {
    None = 0,
    AllowLeadingWhite = 1,
    AllowTrailingWhite = 2,
    /**
     * Summary:
     *	    Extra white-space characters in the middle of the string must be ignored during
     *	    parsing, except if they occur in the System.Globalization.DateTimeFormatInfo
     *	    format patterns.
     */
    AllowInnerWhite = 4,
    /**
     * 	Summary:
     *	    Extra white-space characters anywhere in the string must be ignored during parsing,
     *	    except if they occur in the System.Globalization.DateTimeFormatInfo format patterns.
     *	    This value is a combination of the System.Globalization.DateTimeStyles.AllowLeadingWhite,
     *	    System.Globalization.DateTimeStyles.AllowTrailingWhite, and System.Globalization.DateTimeStyles.AllowInnerWhite
     *	    values.
     */
    AllowWhiteSpaces = 7,
    NoCurrentDateDefault = 8,
    AdjustToUniversal = 16,
    AssumeLocal = 32,
    AssumeUniversal = 64,
    RoundtripKind = 128,
}
 function enumerable(value: boolean): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
 function hidden(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
 function hideService(constructor: Function): any;
/**
 * BootStrap code. to initializes some class to avoid circular reference.
 */
/** Promise type setup */ function useCustomPromise(promiseObj: IPromiseApi): void; function useCustomXhr(xhrApiObj: IXHRApi): void;
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
    function AddRange<T>(array: Array<T>, items: Array<T>): void;
    function RemoveEntry<T>(array: Array<T>, entry: T): boolean;
    function Find<T>(array: Array<T>, comparer: (item: T) => boolean): T;
    function OfType<T, U>(array: Array<U>, comparer: (item: U) => boolean): T[];
    /**dirty calculation of max dimension, will return more than one if array contains any array element in first testElementCount items */
    function Rank(array: any[], testElementCount?: number): number;
    function isArray(obj: any): boolean;
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
    static FromBase64String(encodedStr: string): number[];
    static ToBase64String(byteArray: number[]): string;
}
 module base64Helper {
    function btoa(textToEncode: string): string;
    function atob(textToDecode: string): string;
}

/** Guid proxy class */
 class Guid {
    static Empty: Guid;

    constructor(str: string);
    ToString(): string;
    static Parse(str: string): Guid;
}
export interface IXHROptions {
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
    resolve<U>(value?: U | IPromise<U>): IPromise<U>;
    reject<U>(value?: U | IPromise<U>): IPromise<U>;
    type: string;
}
export interface IXHRApi {
    xhr(xhroptions: IXHROptions): IPromise<XMLHttpRequest>;
    type?: string;
}

 class PromiseFactory {
    static create<T>(init?: (completeDispatch: any, errorDispatch: any, progressDispatch: any) => void, onCancel?: Function): IPromise<T>;
    static resolve<U>(value?: U | IPromise<U>): IPromise<U>;
    static reject<U>(value?: U | IPromise<U>): IPromise<U>;
    static type: string;
    static Promise: IPromiseApi;
    static switchPromise(newPromiseObject: IPromiseApi): void;
}
 var QPromise: IPromiseApi;
 function setPromise(): void;

 function setPromise(): void;
 class Strings {
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
 * TypeContainer  - contains Type as properties. Required to evade circular dependency. Initilized in ExchangeWebService.ts which is going to weave type objects.
 */
 class TypeContainer {
    constructor(parameters: any);
    /**
     * Type object of ServiceObject (not instance)
     */
    static ServiceObject: any;
    /**
     * Type object of Folder (not instance)
     */
    static Folder: any;
    /**
     * Type object of CalendarFolder (not instance)
     */
    static CalendarFolder: any;
    /**
     * Type object of ServiceObjectSchema (not instance)
     */
    static ServiceObjectSchema: ServiceObjectSchemaStatic;
    /**
     * Type object of Appointment (not instance)
     */
    static Appointment: any;
    /**
     * Type object of MeetingRequest (not instance)
     */
    static MeetingRequest: any;
    /**
     * Type object of MeetingResponse (not instance)
     */
    static MeetingResponse: any;
    /**
     * Type object of MeetingCancellation (not instance)
     */
    static MeetingCancellation: any;
    /**
     * Type object of Item (not instance)
     */
    static Item: any;
    /**
     * Type object of ItemAttachment (not instance)
     */
    static ItemAttachment: any;
    /**
     * Type object of ItemAttachmentOf **Generic Version of ItemAttachment** (not instance)
     */
    static ItemAttachmentOf: any;
    /**
     * Type object of ExchangeService (not instance)
     */
    static ExchangeService: any;
    /**
     * IndexedPropertyDefinition
     */
    static IndexedPropertyDefinition: IIndexedPropertyDefinition;
    /**
     * ExtendedPropertyDefinition
     */
    static ExtendedPropertyDefinition: IExtendedPropertyDefinition;
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
    toString(): string;
    static ParseString(url: string): ParsedUrl;
    static UriSchemeHttp: string;
    static UriSchemeHttps: string;
}

 class XHRFactory {
    static XHRApi: IXHRApi;
    static switchXhr(newXHR: IXHRApi): void;
}
 class WinJSXHRApi implements IXHRApi {
    xhr(xhroptions: IXHROptions): IPromise<XMLHttpRequest>;
    type: string;
}
 function setXhr(): void;
import 'reflect-metadata';
 var AttachableAttributeMetadata: string;
 function AttachableAttribute(value?: boolean): (target: Function) => void;
import 'reflect-metadata';
 function EwsEnumAttribute(schemaName: string): (target: Function) => void;
import 'reflect-metadata'; function RequiredServerVersionAttribute(version: ExchangeVersion): (target: Function) => void;

 class AlternateMailbox {
    Type: string;
    DisplayName: string;
    LegacyDN: string;
    Server: string;
    SmtpAddress: string;
    OwnerSmtpAddress: string;
    LoadFromXml(reader: EwsXmlReader): AlternateMailbox;
    static LoadFromJson(obj: any): AlternateMailbox;
}
 class AlternateMailboxCollection {
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
}
 class AutodiscoverResponseCollection<TResponse extends AutodiscoverResponse> extends AutodiscoverResponse {
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
}
 class AutodiscoverService extends ExchangeServiceBase {









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

    /**internal method */
    GetUserSettings(smtpAddresses: string[], settings: UserSettingName[]): IPromise<GetUserSettingsResponseCollection>;
    /**
     * Retrieves the specified settings for single SMTP address.
     *
     * @param   {string}   userSmtpAddress    The SMTP addresses of the user.
     * @param   {UserSettingName[]}   userSettingNames   The user setting names.
     * @return  {IPromise<GetUserSettingsResponse>} A UserResponse object containing the requested settings for the specified user.
     */
    GetUserSettings(userSmtpAddress: string, userSettingNames: UserSettingName[]): IPromise<GetUserSettingsResponse>;
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
}
export interface AutodiscoverRedirectionUrlValidationCallback {
    (redirectionUrl: string): boolean;
}
 class ComparisonHelpers {
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
}
 class DocumentSharingLocationCollection {
    Entries: DocumentSharingLocation[];
    static LoadFromXml(reader: EwsXmlReader): DocumentSharingLocationCollection;
    static LoadFromJson(obj: any): DocumentSharingLocationCollection;
}
 class DomainSettingError {
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
}
 class ProtocolConnectionCollection {
    Connections: ProtocolConnection[];
    constructor();
    static LoadFromXml(reader: EwsXmlReader): ProtocolConnectionCollection;
    static LoadFromJson(obj: any): ProtocolConnectionCollection;
}
 class UserSettingError {
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
}
 class WebClientUrlCollection {
    Urls: WebClientUrl[];
    static LoadFromJson(obj: any): WebClientUrlCollection;
    static LoadFromXml(reader: EwsXmlReader): WebClientUrlCollection;
}
 class EwsLogging {
    static DebugLogEnabled: boolean;
    static Assert(condition: boolean, caller: string, message: string): void;
    static Log(message: any, always?: boolean, expandObject?: boolean): void;
    static DebugLog(message: any, expandObject?: boolean): void;
}
 class EwsServiceJsonReader {
    static ReadAsArray(jsObject: any, xmlElementName: string): any[];
    static ReadBase64ElementValue(obj: any): string;
    static ReadServiceObjectsCollectionFromJson<TServiceObject extends ServiceObject>(jsonResponse: any, service: ExchangeService, collectionJsonElementName: string, getObjectInstanceDelegate: GetObjectInstanceDelegate<TServiceObject>, clearPropertyBag: boolean, requestedPropertySet: PropertySet, summaryPropertiesOnly: boolean): TServiceObject[];
}
 class EwsServiceMultiResponseXmlReader extends EwsServiceXmlReader {
    Create(stream: any, service: ExchangeService): EwsServiceMultiResponseXmlReader;
    CreateXmlReader(stream: any): any;
    InitializeXmlReader(stream: any): any;
}
 class EwsServiceXmlReader extends EwsXmlReader {
    Service: ExchangeService;

    constructor(rawXML: string, service: ExchangeService);
    ConvertStringToDateTime(dateTimeString: string): Date;
    ConvertStringToUnspecifiedDate(dateTimeString: string): Date;
    ReadElementValueAsDateTime(): Date;
    ReadElementValueAsUnbiasedDateTimeScopedToServiceTimeZone(): Date;
    ReadElementValueAsUnspecifiedDate(): Date;
}
/**
 * XML writer
 */
 class EwsServiceXmlWriter {
    Service: ExchangeServiceBase;
    /**
     * Buffer size for writing Base64 encoded content.
     *
     */
    static BufferSize: number;
    IsTimeZoneHeaderEmitted: boolean;
    RequireWSSecurityUtilityNamespace: boolean;





    /**
     * UTF-8 encoding that does not create leading Byte order marks
     *
     */

    Dispose(): any;
    Flush(): void;








    /**
     * Gets the xml created by EWS XMl Writer.
     *
     * @param   {boolean}   keep   removes internal cache of XML data if false, otherwise keep the data.
     */
    GetXML(keep?: boolean): string;
    /**
     * Closes XMl tag
     */

    /**
     * Pushes xml uri to internal tracker of used xml uris
     *
     * @param   {string}   prefix     Prefix of uri.
     * @param   {string}   uri        uri itself.
     */

    /**
     * check if an uri exist in internal tracker
     *
     * @param   {string}   prefix     Prefix of uri.
     * @param   {string}   uri        uri itself.
     */

    /**
     * Initializes a new instance of the **EwsServiceXmlWriter** class.
     *
     * @param   {ExchangeServiceBase}   service   The service.
     */
    constructor(service: ExchangeServiceBase);
    /**
     * convert object to a string. transformed TryConvertObjectToString metho from c#
     *
     * @param   {any}     value      The value.
     * @return  {string}  The string representation of value.
     */
    ConvertObjectToString(value: any): string;
    /**
     * Writes the attribute value.
     *
     * @param   {string}   localName     The local name of the attribute.
     * @param   {string}   stringValue   The string value.
     */
    WriteAttributeString(localName: string, stringValue: string): void;
    /**
     * Writes the attribute value.
     *
     * @param   {string}   namespacePrefix   The namespace prefix.
     * @param   {string}   localName         The local name of the attribute.
     * @param   {string}   stringValue       The string value.
     */
    WriteAttributeString(namespacePrefix: string, localName: string, stringValue: string): void;
    /**
     * Writes the attribute value.  Does not emit empty string values.
     *
     * @param   {string}  localName   The local name of the attribute.
     * @param   {any}     value       The value.
     */
    WriteAttributeValue(localName: string, value: any): void;
    /**
     * Writes the attribute value.  Optionally emits empty string values.
     *
     * @param   {string}      localName                The local name of the attribute.
     * @param   {boolean}     alwaysWriteEmptyString   Always emit the empty string as the value.
     * @param   {any}         value                    The value.
     */
    WriteAttributeValue(localName: string, alwaysWriteEmptyString: boolean, value: any): void;
    /**
     * Writes the attribute value.
     *
     * @param   {string}  namespacePrefix   The namespace prefix.
     * @param   {string}  localName         The local name of the attribute.
     * @param   {any}     value             The value.
     */
    WriteAttributeValue(namespacePrefix: string, localName: string, value: any): void;
    /**
     * Writes the base64-encoded element value.
     *
     * @param   {any}   buffer   The buffer.
     */
    WriteBase64ElementValue(buffer: any): void;
    /**
     * Writes the element value.
     *
     * @param   {XmlNamespace}    xmlNamespace   The XML namespace.
     * @param   {string}          localName      The local name of the element.
     * @param   {string}          displayName    The name that should appear in the exception message when the value can not be serialized.
     * @param   {any}             value          The value.
     */
    WriteElementValue(xmlNamespace: XmlNamespace, localName: string, value: any): void;
    /**
     * Writes the element value.
     *
     * @param   {XmlNamespace}    xmlNamespace   The XML namespace.
     * @param   {string}          localName      The local name of the element.
     * @param   {any}             value          The value.
     */
    WriteElementValue(xmlNamespace: XmlNamespace, localName: string, displayName: string, value: any): void;
    /**
     * Writes the end element.
     */
    WriteEndElement(): void;
    /**
     * Writes the start element.
     *
     * @param   {XmlNamespace}    xmlNamespace   The XML namespace.
     * @param   {string}          localName      The local name of the element.
     */
    WriteStartElement(xmlNamespace: XmlNamespace, localName: string): void;
    /**
     * Writes string value.
     *
     * @param   {string}   value   The value.
     * @param   {string}   name    Element name (used for error handling)
     */
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
    static BuildEnumToSchemaDict(enumType: EnumToSchemaMappingHelper): DictionaryWithNumericKey<string>;
    static BuildSchemaToEnumDict(enumType: EnumToSchemaMappingHelper): DictionaryWithStringKey<number>;
    static GetDictionaryKeyTypeEnum(dictionaryKeyType: DictionaryKeyType): any;

    static ConvertTime(dateTime: DateTime, sourceTimeZone: TimeZoneInfo, destinationTimeZone: TimeZoneInfo): DateTime;
    static CountMatchingChars(str: string, charPredicate: any): number;
    static CreateEwsObjectFromXmlElementName<TServiceObject extends ServiceObject>(service: ExchangeService, xmlElementName: string): TServiceObject;
    static CreateItemFromXmlElementName(itemAttachment: ItemAttachment, xmlElementName: string): Item;
    static DateTimeToXSDate(date: DateTime): string;
    static DateTimeToXSDateTime(dateTime: DateTime): string;
    static DomainFromEmailAddress(emailAddress: string): string;
    static EwsToSystemDayOfWeek(dayOfTheWeek: DayOfTheWeek): DayOfWeek;
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
    static ParseEnum(value: string, ewsenum: any): any;
    static ParseAsUnbiasedDatetimescopedToServicetimeZone(dateString: string, service: ExchangeService): DateTime;
    static ParseEnumValueList<T>(list: any[], value: string, separators: string, enumType: any): void;
    static SystemToEwsDayOfTheWeek(dayOfWeek: DayOfWeek): DayOfTheWeek;
    static TimeSpanToXSDuration(timeSpan: TimeSpan): string;

    static TimeSpanToXSTime(timeSpan: TimeSpan): string;
    static XSDurationToTimeSpan(xsDuration: string): TimeSpan;
    static ValidateClassVersion(service: ExchangeService, minimumServerVersion: ExchangeVersion, className: string): any;
    static ValidateDomainNameAllowNull(domainName: string, paramName: string): void;
    /**
     * Validates the enum value against the request version.
     *
     * @param   {EnumToExchangeVersionMappingHelper}   enumType        The enum type mapping helper - specific to ews-javascript-api.
     * @param   {number}   enumValue        The enum value.
     * @param   {ExchangeVersion}   requestVersion   The request version.
     */
    static ValidateEnumVersionValue(enumType: EnumToExchangeVersionMappingHelper, enumValue: number, requestVersion: ExchangeVersion): void;
    static ValidateMethodVersion(service: ExchangeService, minimumServerVersion: ExchangeVersion, methodName: string): void;
    /**
     * Validates string parameter to be non-empty string (null value not allowed).
     *
     * @param   {}   param       The string parameter.
     * @param   {}   paramName   Name of the parameter.
     */
    static ValidateNonBlankStringParam(param: string, paramName: string): void;
    /**
     * Validates string parameter to be non-empty string (null value allowed).
     *
     * @param   {string}   param       The string parameter.
     * @param   {string}   paramName   Name of the parameter.
     */
    static ValidateNonBlankStringParamAllowNull(param: string, paramName: string): void;
    /**
     * Validates parameter (null value not allowed).
     *
     * @param   {any}       param       The param.
     * @param   {string}    paramName   Name of the param.
     */
    static ValidateParam(param: any, paramName: string): void;
    /**
     * Validates parameter (and allows null value).
     *
     * @param   {any}       param       The param.
     * @param   {string}    paramName   Name of the param.
     */
    static ValidateParamAllowNull(param: any, paramName: string): void;
    /**
     * Validates parameter collection.
     *
     * @param   {any[]}     collection   The collection.
     * @param   {string}    paramName    Name of the param.
     */
    static ValidateParamCollection(collection: any[], paramName: string): void;
    /**
     * Validates property version against the request version.
     *
     * @param   {ExchangeService}   service                The Exchange service.
     * @param   {ExchangeVersion}   minimumServerVersion   The minimum server version that supports the property.
     * @param   {string}            propertyName           Name of the property.
     */
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
}
 class ExchangeServerInfo {
    MajorVersion: number;
    MinorVersion: number;
    MajorBuildNumber: number;
    MinorBuildNumber: number;
    VersionString: string;
    static Parse(jsObject: any): ExchangeServerInfo;
    ToString(): string;
}
/**
 * Represents a binding to the **Exchange Web Services**.
 *
 */
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
    /**
     * @internal Create response object.
     *
     * @param   {ServiceObject}          responseObject       The response object.
     * @param   {FolderId}               parentFolderId       The parent folder id.
     * @param   {MessageDisposition}     messageDisposition   The message disposition.
     * @return  {IPromise<Item[]>}       The list of items created or modified as a result of the "creation" of the response object :Promise.
     */
    InternalCreateResponseObject(responseObject: ServiceObject, parentFolderId: FolderId, messageDisposition: MessageDisposition): IPromise<Item[]>;
    /**
     * @internal Binds to folder.
     *
     * @param   {FolderId}           folderId      The folder id.
     * @param   {PropertySet}        propertySet   The property set.
     * @return  {IPromise<TFolder>}  Folder object :Promise.
     */
    BindToFolder(folderId: FolderId, propertySet: PropertySet): IPromise<Folder>;
    /**
     * @internal Binds to folder.
     *
     * @param   {FolderId}           folderId      The folder id.
     * @param   {PropertySet}        propertySet   The property set.
     * @param   {folderType}         propertySet   Type to Cast - pass Folder or subclass itself, not an instance
     * @return  {IPromise<TFolder>}  Folder object :Promise.
     */
    BindToFolder<TFolder extends Folder>(folderId: FolderId, propertySet: PropertySet, /** pass Folder or subclass itself, not an instance */ folderType: any): IPromise<TFolder>;
    /**
     * @internal Copies a folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}           folderId              The folder id.
     * @param   {FolderId}           destinationFolderId   The destination folder id.
     * @return  {IPromise<Folder>}   Copy of folder :Promise.
     */
    CopyFolder(folderId: FolderId, destinationFolderId: FolderId): IPromise<Folder>;
    /**
     * @internal Creates a folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   folder           The folder.
     * @param   {FolderId}   parentFolderId   The parent folder id.
     */
    CreateFolder(folder: Folder, parentFolderId: FolderId): IPromise<void>;
    /**
     * @internal Deletes a folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      folderId     The folder id.
     * @param   {DeleteMode}    deleteMode   The delete mode.
     */
    DeleteFolder(folderId: FolderId, deleteMode: DeleteMode): IPromise<void>;
    /**
     * @internal Empties a folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      folderId           The folder id.
     * @param   {DeleteMode}    deleteMode         The delete mode.
     * @param   {boolean}       deleteSubFolders   if set to true empty folder should also delete sub folders.
     */
    EmptyFolder(folderId: FolderId, deleteMode: DeleteMode, deleteSubFolders: boolean): IPromise<void>;
    /**
     * Obtains a list of folders by searching the sub-folders of the specified folder.
     *
     * @param   {FolderId}                       parentFolderId   The Id of the folder in which to search for folders.
     * @param   {FolderView}                     view             The view controlling the number of folders returned.
     * @return  {IPromise<FindFoldersResults>}   An object representing the results of the search operation :Promise.
     */
    FindFolders(parentFolderId: FolderId, view: FolderView): IPromise<FindFoldersResults>;
    /**
     * Obtains a list of folders by searching the sub-folders of the specified folder.
     *
     * @param   {WellKnownFolderName}            parentFolderName   The name of the folder in which to search for folders.
     * @param   {FolderView}                     view               The view controlling the number of folders returned.
     * @return  {IPromise<FindFoldersResults>}   An object representing the results of the search operation :Promise.
     */
    FindFolders(parentFolderName: WellKnownFolderName, view: FolderView): IPromise<FindFoldersResults>;
    /**
     * Obtains a list of folders by searching the sub-folders of the specified folder.
     *
     * @param   {FolderId}                       parentFolderId   The Id of the folder in which to search for folders.
     * @param   {SearchFilter}                   searchFilter     The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {FolderView}                     view             The view controlling the number of folders returned.
     * @return  {IPromise<FindFoldersResults>}   An object representing the results of the search operation :Promise.
     */
    FindFolders(parentFolderId: FolderId, searchFilter: SearchFilter, view: FolderView): IPromise<FindFoldersResults>;
    /**
     * Obtains a list of folders by searching the sub-folders of the specified folder.
     *
     * @param   {WellKnownFolderName}            parentFolderName   The name of the folder in which to search for folders.
     * @param   {SearchFilter}                   searchFilter       The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {FolderView}                     view               The view controlling the number of folders returned.
     * @return  {IPromise<FindFoldersResults>}   An object representing the results of the search operation :Promise.
     */
    FindFolders(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: FolderView): IPromise<FindFoldersResults>;
    /**
     * Finds folders.
     *
     * @param   {FolderId[]}             parentFolderIds     The parent folder ids.
     * @param   {SearchFilter}           searchFilter        The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {FolderView}             view                The view controlling the number of folders returned.
     * @param   {ServiceErrorHandling}   errorHandlingMode   Indicates the type of error handling should be done.
     * @return  {IPromise<ServiceResponseCollection<FindFolderResponse>>}    Collection of service responses :Promise.
     */

    /**
     * @internal Load specified properties for a folder.
     *
     * @param   {Folder}         folder        The folder.
     * @param   {PropertySet}    propertySet   The property set.
     */
    LoadPropertiesForFolder(folder: Folder, propertySet: PropertySet): IPromise<void>;
    /**
     * @internal Marks all items in folder as read/unread. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      folderId               The folder id.
     * @param   {boolean}       readFlag               If true, items marked as read, otherwise unread.
     * @param   {boolean}       suppressReadReceipts   If true, suppress read receipts for items.
     */
    MarkAllItemsAsRead(folderId: FolderId, readFlag: boolean, suppressReadReceipts: boolean): IPromise<void>;
    /**
     * @internal Move a folder.
     *
     * @param   {FolderId}           folderId              The folder id.
     * @param   {FolderId}           destinationFolderId   The destination folder id.
     * @return  {IPromise<Folder>}   Moved folder :Promise.
     */
    MoveFolder(folderId: FolderId, destinationFolderId: FolderId): IPromise<Folder>;
    /**
     * @internal Updates a folder.
     *
     * @param   {Folder}   folder   The folder.
     */
    UpdateFolder(folder: Folder): IPromise<void>;
    /**
     * Archives multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}   itemIds          The Ids of the items to move.
     * @param   {FolderId}   sourceFolderId   The Id of the folder in primary corresponding to which items are being archived to.
     * @return  {IPromise<ServiceResponseCollection<ArchiveItemResponse>>}                    A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    ArchiveItems<TResponse extends ServiceResponse>(itemIds: ItemId[], sourceFolderId: FolderId): IPromise<ServiceResponseCollection<ArchiveItemResponse>>;
    /**
     * Binds to multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}      itemIds         The Ids of the items to bind to.
     * @param   {PropertySet}   propertySet     The set of properties to load.
     * @param   {string}        anchorMailbox   The SmtpAddress of mailbox that hosts all items we need to bind to
     * @return  {IPromise<ServiceResponseCollection<GetItemResponse>>}                   A ServiceResponseCollection providing results for each of the specified item Ids :Promise.
     */
    BindToGroupItems(itemIds: ItemId[], propertySet: PropertySet, anchorMailbox: string): IPromise<ServiceResponseCollection<GetItemResponse>>;
    /**
     * @internal Binds to item.
     *
     * @param   {ItemId}            itemId        The item id.
     * @param   {PropertySet}       propertySet   The property set.
     * @return  {IPromise<Item>}    Item :Promise.
     */
    BindToItem(itemId: ItemId, propertySet: PropertySet): IPromise<Item>;
    /**
     * @internal Binds to item.
     *
     * @param   {ItemId}            itemId        The item id.
     * @param   {PropertySet}       propertySet   The property set.
     * @param   {<TItem>}          itemType      Item type class ex: Item, EmailMessage etc..
     * @return  {IPromise<Item>}    Item :Promise.
     */
    BindToItem<TItem extends Item>(itemId: ItemId, propertySet: PropertySet, itemType: any): IPromise<TItem>;
    /**
     * Binds to multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}      itemIds       The Ids of the items to bind to.
     * @param   {PropertySet}   propertySet   The set of properties to load.
     * @return  {IPromise<ServiceResponseCollection<GetItemResponse>>}                 A ServiceResponseCollection providing results for each of the specified item Ids :Promise.
     */
    BindToItems(itemIds: ItemId[], propertySet: PropertySet): IPromise<ServiceResponseCollection<GetItemResponse>>;
    /**
     * @internal Copies an item. Calling this method results in a call to EWS.
     *
     * @param   {ItemId}        itemId                The Id of the item to copy.
     * @param   {FolderId}      destinationFolderId   The Id of the folder to copy the item to.
     * @return  {IPromise<Item>}    The copy of the item :Promise.
     */
    CopyItem(itemId: ItemId, destinationFolderId: FolderId): IPromise<Item>;
    /**
     * Copies multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}      itemIds               The Ids of the items to copy.
     * @param   {FolderId}      destinationFolderId   The Id of the folder to copy the items to.
     * @return  {IPromise<ServiceResponseCollection<MoveCopyItemResponse>>}                         A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    CopyItems(itemIds: ItemId[], destinationFolderId: FolderId): IPromise<ServiceResponseCollection<MoveCopyItemResponse>>;
    /**
     * Copies multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}      itemIds               The Ids of the items to copy.
     * @param   {FolderId}      destinationFolderId   The Id of the folder to copy the items to.
     * @param   {boolean}       returnNewItemIds      Flag indicating whether service should return new ItemIds or not.
     * @return  {IPromise<ServiceResponseCollection<MoveCopyItemResponse>>}                         A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    CopyItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean): IPromise<ServiceResponseCollection<MoveCopyItemResponse>>;
    /**
     * @internal Creates an item. Calling this method results in a call to EWS.
     *
     * @param   {Item}                  item                  The item to create.
     * @param   {FolderId}              parentFolderId        The Id of the folder in which to place the newly created item. If null, the item is created in its default folders.
     * @param   {MessageDisposition}    messageDisposition    Indicates the disposition mode for items of type EmailMessage. Required if item is an EmailMessage instance.
     * @param   {SendInvitationsMode}   sendInvitationsMode   Indicates if and how invitations should be sent for item of type Appointment. Required if item is an Appointment instance.
     */
    CreateItem(item: Item, parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): IPromise<void>;
    /**
     * Creates multiple items in a single EWS call. Supported item classes are EmailMessage, Appointment, Contact, PostItem, Task and Item. CreateItems does not support items that have unsaved attachments.
     *
     * @param   {Item[]}                items                 The items to create.
     * @param   {FolderId}              parentFolderId        The Id of the folder in which to place the newly created items. If null, items are created in their default folders.
     * @param   {MessageDisposition}    messageDisposition    Indicates the disposition mode for items of type EmailMessage. Required if items contains at least one EmailMessage instance.
     * @param   {SendInvitationsMode}   sendInvitationsMode   Indicates if and how invitations should be sent for items of type Appointment. Required if items contains at least one Appointment instance.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}                         A ServiceResponseCollection providing creation results for each of the specified items :Promise.
     */
    CreateItems(items: Item[], parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): IPromise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * @internal Deletes an item. Calling this method results in a call to EWS.
     *
     * @param   {ItemId}                    itemId                    The Id of the item to delete.
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether cancellation messages should be sent. Required if the item Id represents an Appointment.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicates which instance of a recurring task should be deleted. Required if item Id represents a Task.
     */
    DeleteItem(itemId: ItemId, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): IPromise<void>;
    /**
     * @internal Deletes an item. Calling this method results in a call to EWS.
     *
     * @param   {ItemId}                    itemId                    The Id of the item to delete.
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether cancellation messages should be sent. Required if the item Id represents an Appointment.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicates which instance of a recurring task should be deleted. Required if item Id represents a Task.
     * @param   {boolean}                   suppressReadReceipts      Whether to suppress read receipts
     */
    DeleteItem(itemId: ItemId, deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipts: boolean): IPromise<void>;
    /**
     * Deletes multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}                  itemIds                   The Ids of the items to delete.
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether cancellation messages should be sent. Required if the item Id represents an Appointment.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicates which instance of a recurring task should be deleted. Required if item Id represents a Task.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      A ServiceResponseCollection providing deletion results for each of the specified item Ids :Promise.
     */
    DeleteItems(itemIds: ItemId[], deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): IPromise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Deletes multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}                  itemIds                   The Ids of the items to delete.
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether cancellation messages should be sent. Required if the item Id represents an Appointment.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicates which instance of a recurring task should be deleted. Required if item Id represents a Task.
     * @param   {boolean}                   suppressReadReceipts      Whether to suppress read receipts
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      A ServiceResponseCollection providing deletion results for each of the specified item Ids :Promise.
     */
    DeleteItems(itemIds: ItemId[], deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipt: boolean): IPromise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Obtains a list of appointments by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName   The name of the calendar folder in which to search for items.
     * @param   {CalendarView}          calendarView     The calendar view controlling the number of appointments returned.
     * @return  {IPromise<FindItemsResults<Appointment>>}                    A collection of appointments representing the contents of the specified folder :Promise.
     */
    FindAppointments(parentFolderName: WellKnownFolderName, calendarView: CalendarView): IPromise<FindItemsResults<Appointment>>;
    /**
     * Obtains a list of appointments by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      parentFolderId   The id of the calendar folder in which to search for items.
     * @param   {CalendarView}  calendarView     The calendar view controlling the number of appointments returned.
     * @return  {IPromise<FindItemsResults<Appointment>>}                    A collection of appointments representing the contents of the specified folder :Promise.
     */
    FindAppointments(parentFolderId: FolderId, calendarView: CalendarView): IPromise<FindItemsResults<Appointment>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
     * @param   {ViewBase}              view                    The view controlling the number of items returned.
     * @return  {IPromise<FindItemsResults<Item>>}              An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderName: WellKnownFolderName, view: ViewBase): IPromise<FindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Along with conversations, a list of highlight terms are returned. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}  parentFolderId         The Id of the folder in which to search for items.
     * @param   {ViewBase}  view                   The view controlling the number of items returned.
     * @return  {IPromise<FindItemsResults<Item>>}      An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderId: FolderId, view: ViewBase): IPromise<FindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      parentFolderId          The Id of the folder in which to search for items.
     * @param   {ViewBase}      view                    The view controlling the number of items returned.
     * @param   {Grouping}      groupBy                 The group by clause.
     * @return  {IPromise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of the specified :Promise.
     */
    FindItems(parentFolderId: FolderId, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Along with conversations, a list of highlight terms are returned. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}  parentFolderId         The Id of the folder in which to search for items.
     * @param   {string}    queryString            The search string to be used for indexed search, if any.
     * @param   {ViewBase}  view                   The view controlling the number of items returned.
     * @return  {IPromise<FindItemsResults<Item>>}      An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderId: FolderId, queryString: string, view: ViewBase): IPromise<FindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
     * @param   {string}                queryString             The search string to be used for indexed search, if any.
     * @param   {ViewBase}              view                    The view controlling the number of items returned.
     * @return  {IPromise<FindItemsResults<Item>>}              An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderName: WellKnownFolderName, queryString: string, view: ViewBase): IPromise<FindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
     * @param   {searchFilter}          searchFilter            The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {ViewBase}              view                    The view controlling the number of items returned.
     * @return  {IPromise<FindItemsResults<Item>>}              An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: ViewBase): IPromise<FindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      parentFolderId          The Id of the folder in which to search for items.
     * @param   {searchFilter}  searchFilter            The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {ViewBase}      view                    The view controlling the number of items returned.
     * @return  {IPromise<FindItemsResults<Item>>}      An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase): IPromise<FindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      parentFolderId          The Id of the folder in which to search for items.
     * @param   {searchFilter}  searchFilter            The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {ViewBase}      view                    The view controlling the number of items returned.
     * @param   {Grouping}      groupBy                 The group by clause.
     * @return  {IPromise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of the specified :Promise.
     */
    FindItems(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      parentFolderId          The Id of the folder in which to search for items.
     * @param   {string}        queryString             The search string to be used for indexed search, if any.
     * @param   {ViewBase}      view                    The view controlling the number of items returned.
     * @param   {Grouping}      groupBy                 The group by clause.
     * @return  {IPromise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of the specified :Promise.
     */
    FindItems(parentFolderId: FolderId, queryString: string, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
     * @param   {searchFilter}          searchFilter            The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {ViewBase}              view                    The view controlling the number of items returned.
     * @param   {Grouping}              groupBy                 The group by clause.
     * @return  {IPromise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of the specified :Promise.
     */
    FindItems(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
     * @param   {string}                queryString             The search string to be used for indexed search, if any.
     * @param   {ViewBase}              view                    The view controlling the number of items returned.
     * @param   {Grouping}              groupBy                 The group by clause.
     * @return  {IPromise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of the specified :Promise.
     */
    FindItems(parentFolderName: WellKnownFolderName, queryString: string, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Along with conversations, a list of highlight terms are returned. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}  parentFolderId         The Id of the folder in which to search for items.
     * @param   {string}    queryString            the search string to be used for indexed search, if any.
     * @param   {boolean}   returnHighlightTerms   Flag indicating if highlight terms should be returned in the response
     * @param   {ViewBase}  view                   The view controlling the number of items returned.
     * @return  {IPromise<FindItemsResults<Item>>}      An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderId: FolderId, queryString: string, returnHighlightTerms: boolean, view: ViewBase): IPromise<FindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Along with conversations, a list of highlight terms are returned. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}  parentFolderId         The Id of the folder in which to search for items.
     * @param   {string}    queryString            the search string to be used for indexed search, if any.
     * @param   {boolean}   returnHighlightTerms   Flag indicating if highlight terms should be returned in the response
     * @param   {ViewBase}  view                   The view controlling the number of items returned.
     * @param   {Grouping}  groupBy                The group by clause.
     * @return  {IPromise<GroupedFindItemsResults<Item>>}       An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderId: FolderId, queryString: string, returnHighlightTerms: boolean, view: ViewBase, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    /**
     * @internal Finds items.
     *
     * @param   {FolderId[]}                parentFolderIds     The parent folder ids.
     * @param   {SearchFilter}              searchFilter        The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {string}                    queryString         query string to be used for indexed search.
     * @param   {ViewBase}                  view                The view controlling the number of items returned.
     * @param   {Grouping}                  groupBy             The group by.
     * @param   {ServiceErrorHandling}      errorHandlingMode   Indicates the type of error handling should be done.
     * @return  {IPromise<ServiceResponseCollection<FindItemResponse<TItem>>>}      Service response collection :Promise.
     */
    FindItems<TItem extends Item>(parentFolderIds: FolderId[], searchFilter: SearchFilter, queryString: string, view: ViewBase, groupBy: Grouping, errorHandlingMode: ServiceErrorHandling): IPromise<ServiceResponseCollection<FindItemResponse<TItem>>>;
    /**
     * Binds to multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}              itemIds         The Ids of the items to bind to.
     * @param   {PropertySet}           propertySet     The set of properties to load.
     * @param   {string}                anchorMailbox   The SmtpAddress of mailbox that hosts all items we need to bind to
     * @param   {ServiceErrorHandling}  errorHandling   Type of error handling to perform.
     * @return  {IPromise<ServiceResponseCollection<GetItemResponse>>}      A ServiceResponseCollection providing results for each of the specified item Ids :Promise.
     */

    /**
     * Copies multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}              itemIds                 The Ids of the items to bind to.
     * @param   {FolderId}              destinationFolderId     The Id of the folder to copy the items to.
     * @param   {boolean}               returnNewItemIds        Flag indicating whether service should return new ItemIds or not.
     * @param   {ServiceErrorHandling}  errorHandling           What type of error handling should be performed.
     * @return  {IPromise<ServiceResponseCollection<MoveCopyItemResponse>>}     A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */

    /**
     * Creates multiple items in a single EWS call. Supported item classes are EmailMessage, Appointment, Contact, PostItem, Task and Item. CreateItems does not support items that have unsaved attachments.
     *
     * @param   {Item[]}                items                 The items to create.
     * @param   {FolderId}              parentFolderId        The Id of the folder in which to place the newly created items. If null, items are created in their default folders.
     * @param   {MessageDisposition}    messageDisposition    Indicates the disposition mode for items of type EmailMessage. Required if items contains at least one EmailMessage instance.
     * @param   {SendInvitationsMode}   sendInvitationsMode   Indicates if and how invitations should be sent for items of type Appointment. Required if items contains at least one Appointment instance.
     * @param   {ServiceErrorHandling}  errorHandling         What type of error handling should be performed.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      A ServiceResponseCollection providing creation results for each of the specified items :Promise.
     */

    /**
     * Deletes multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}                  itemIds                   The Ids of the items to delete.
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether cancellation messages should be sent. Required if any of the item Ids represents an Appointment.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicates which instance of a recurring task should be deleted. Required if any of the item Ids represents a Task.
     * @param   {ServiceErrorHandling}      errorHandling             Type of error handling to perform.
     * @param   {boolean}                   suppressReadReceipts      Whether to suppress read receipts
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      A ServiceResponseCollection providing deletion results for each of the specified item Ids :Promise.
     */

    /**
     * @internal Loads the properties of multiple items in a single call to EWS.
     *
     * @param   {Item[]}                items           The items to load the properties of.
     * @param   {PropertySet}           propertySet     The set of properties to load.
     * @param   {ServiceErrorHandling}  errorHandling   Indicates the type of error handling should be done.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      A ServiceResponseCollection providing results for each of the specified items :Promise.
     */
    InternalLoadPropertiesForItems(items: Item[], propertySet: PropertySet, errorHandling: ServiceErrorHandling): IPromise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Moves multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}              itemIds               The Ids of the items to move.
     * @param   {FolderId}              destinationFolderId   The Id of the folder to move the items to.
     * @param   {boolean}               returnNewItemIds      Flag indicating whether service should return new ItemIds or not.
     * @param   {ServiceErrorHandling}  errorHandling         What type of error handling should be performed.
     * @return  {IPromise<ServiceResponseCollection<MoveCopyItemResponse>>}     A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */

    /**
     * Updates multiple items in a single EWS call. UpdateItems does not support items that have unsaved attachments.
     *
     * @param   {Item[]}                                items                                The items to update.
     * @param   {FolderId}                              savedItemsDestinationFolderId        The folder in which to save sent messages, meeting invitations or cancellations. If null, the messages, meeting invitation or cancellations are saved in the Sent Items folder.
     * @param   {ConflictResolutionMode}                conflictResolution                   The conflict resolution mode.
     * @param   {MessageDisposition}                    messageDisposition                   Indicates the disposition mode for items of type EmailMessage. Required if items contains at least one EmailMessage instance.
     * @param   {SendInvitationsOrCancellationsMode}    sendInvitationsOrCancellationsMode   Indicates if and how invitations and/or cancellations should be sent for items of type Appointment. Required if items contains at least one Appointment instance.
     * @param   {ServiceErrorHandling}                  errorHandling                        What type of error handling should be performed.
     * @param   {boolean}                               suppressReadReceipt                  Whether to suppress read receipts
     * @return  {IPromise<ServiceResponseCollection<UpdateItemResponse>>}                    A ServiceResponseCollection providing update results for each of the specified items :Promise.
     */

    /**
     * Loads the properties of multiple items in a single call to EWS. **Unstable for Extended Properties**
     *
     * @param   {Item[]}        items         The items to load the properties of.
     * @param   {PropertySet}   propertySet   The set of properties to load.
     * @return  {IPromise<ServiceResponseCollection<ServiceResponse>>}      A ServiceResponseCollection providing results for each of the specified items :Promise.
     */
    LoadPropertiesForItems(items: Item[], propertySet: PropertySet): IPromise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Mark items as junk.
     *
     * @param   {ItemId[]}      itemIds    ItemIds for the items to mark
     * @param   {boolean}       isJunk     Whether the items are junk.  If true, senders are add to blocked sender list. If false, senders are removed.
     * @param   {boolean}       moveItem   Whether to move the item.  Items are moved to junk folder if isJunk is true, inbox if isJunk is false.
     * @return  {IPromise<ServiceResponseCollection<MarkAsJunkResponse>>}       A ServiceResponseCollection providing itemIds for each of the moved items :Promise.
     */
    MarkAsJunk(itemIds: ItemId[], isJunk: boolean, moveItem: boolean): IPromise<ServiceResponseCollection<MarkAsJunkResponse>>;
    /**
     * @internal Move an item.
     *
     * @param   {ItemId}    itemId                The Id of the item to move.
     * @param   {FolderId}  destinationFolderId   The Id of the folder to move the item to.
     * @return  {IPromise<Item>}                  The moved item :Promise.
     */
    MoveItem(itemId: ItemId, destinationFolderId: FolderId): IPromise<Item>;
    /**
     * Moves multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}   itemIds               The Ids of the items to move.
     * @param   {FolderId}   destinationFolderId   The Id of the folder to move the items to.
     * @return  {IPromise<ServiceResponseCollection<MoveCopyItemResponse>>}     A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    MoveItems(itemIds: ItemId[], destinationFolderId: FolderId): IPromise<ServiceResponseCollection<MoveCopyItemResponse>>;
    /**
     * Moves multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}   itemIds               The Ids of the items to move.
     * @param   {FolderId}   destinationFolderId   The Id of the folder to move the items to.
     * @param   {boolean}    returnNewItemIds      Flag indicating whether service should return new ItemIds or not.
     * @return  {IPromise<ServiceResponseCollection<MoveCopyItemResponse>>}     A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    MoveItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean): IPromise<ServiceResponseCollection<MoveCopyItemResponse>>;
    /**
     * @internal Sends an item.
     *
     * @param   {Item}      item                           The item.
     * @param   {FolderId}  savedCopyDestinationFolderId   The saved copy destination folder id.
     */
    SendItem(item: Item, savedCopyDestinationFolderId: FolderId): IPromise<void>;
    /**
     * @internal Updates an item.
     *
     * @param   {Item}                                  item                                 The item to update.
     * @param   {FolderId}                              savedItemsDestinationFolderId        The folder in which to save sent messages, meeting invitations or cancellations. If null, the message, meeting invitation or cancellation is saved in the Sent Items folder.
     * @param   {ConflictResolutionMode}                conflictResolution                   The conflict resolution mode.
     * @param   {MessageDisposition}                    messageDisposition                   Indicates the disposition mode for an item of type EmailMessage. Required if item is an EmailMessage instance.
     * @param   {SendInvitationsOrCancellationsMode}    sendInvitationsOrCancellationsMode   Indicates if and how invitations and/or cancellations should be sent for ian tem of type Appointment. Required if item is an Appointment instance.
     * @return  {IPromise<Item>}                                                             Updated item : Promise.
     */
    UpdateItem(item: Item, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): IPromise<Item>;
    /**
     * @internal Updates an item.
     *
     * @param   {Item}                                  item                                 The item to update.
     * @param   {FolderId}                              savedItemsDestinationFolderId        The folder in which to save sent messages, meeting invitations or cancellations. If null, the message, meeting invitation or cancellation is saved in the Sent Items folder.
     * @param   {ConflictResolutionMode}                conflictResolution                   The conflict resolution mode.
     * @param   {MessageDisposition}                    messageDisposition                   Indicates the disposition mode for an item of type EmailMessage. Required if item is an EmailMessage instance.
     * @param   {SendInvitationsOrCancellationsMode}    sendInvitationsOrCancellationsMode   Indicates if and how invitations and/or cancellations should be sent for ian tem of type Appointment. Required if item is an Appointment instance.
     * @param   {boolean}                               suppressReadReceipts                 Whether to suppress read receipts
     * @return  {IPromise<Item>}                                                             Updated item : Promise.
     */
    UpdateItem(item: Item, savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): IPromise<Item>;
    /**
     * Updates multiple items in a single EWS call. UpdateItems does not support items that have unsaved attachments.
     *
     * @param   {Item[]}                                items                                The items to update.
     * @param   {FolderId}                              savedItemsDestinationFolderId        The folder in which to save sent messages, meeting invitations or cancellations. If null, the message, meeting invitation or cancellation is saved in the Sent Items folder.
     * @param   {ConflictResolutionMode}                conflictResolution                   The conflict resolution mode.
     * @param   {MessageDisposition}                    messageDisposition                   Indicates the disposition mode for an item of type EmailMessage. Required if item is an EmailMessage instance.
     * @param   {SendInvitationsOrCancellationsMode}    sendInvitationsOrCancellationsMode   Indicates if and how invitations and/or cancellations should be sent for ian tem of type Appointment. Required if item is an Appointment instance.
     * @return  {IPromise<Item>}                                                             A ServiceResponseCollection providing update results for each of the specified items : Promise.
     */
    UpdateItems(items: Item[], savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): IPromise<ServiceResponseCollection<UpdateItemResponse>>;
    /**
     * Updates multiple items in a single EWS call. UpdateItems does not support items that have unsaved attachments.
     *
     * @param   {Item[]}                                items                                The items to update.
     * @param   {FolderId}                              savedItemsDestinationFolderId        The folder in which to save sent messages, meeting invitations or cancellations. If null, the message, meeting invitation or cancellation is saved in the Sent Items folder.
     * @param   {ConflictResolutionMode}                conflictResolution                   The conflict resolution mode.
     * @param   {MessageDisposition}                    messageDisposition                   Indicates the disposition mode for an item of type EmailMessage. Required if item is an EmailMessage instance.
     * @param   {SendInvitationsOrCancellationsMode}    sendInvitationsOrCancellationsMode   Indicates if and how invitations and/or cancellations should be sent for ian tem of type Appointment. Required if item is an Appointment instance.
     * @param   {boolean}                               suppressReadReceipts                 Whether to suppress read receipts
     * @return  {IPromise<Item>}                                                             A ServiceResponseCollection providing update results for each of the specified items : Promise.
     */
    UpdateItems(items: Item[], savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): IPromise<ServiceResponseCollection<UpdateItemResponse>>;
    /**
     * @internal Creates attachments.
     *
     * @param   {string}            parentItemId   The parent item id.
     * @param   {Attachment[]}      attachments            The attachments.
     * @return  {IPromise<ServiceResponseCollection<CreateAttachmentResponse>>}     Service response collection :Promise.
     */
    CreateAttachments(parentItemId: string, attachments: Attachment[]): IPromise<ServiceResponseCollection<CreateAttachmentResponse>>;
    /**
     * @internal Deletes attachments.
     *
     * @param   {Attachment[]}   attachments   The attachments.
     * @return  {IPromise<ServiceResponseCollection<DeleteAttachmentResponse>>}     Service response collection :Promise.
     */
    DeleteAttachments(attachments: Attachment[]): IPromise<ServiceResponseCollection<DeleteAttachmentResponse>>;
    /**
     * @internal Gets an attachment.
     *
     * @param   {Attachment}                    attachment             The attachment.
     * @param   {BodyType}                      bodyType               Type of the body.
     * @param   {PropertyDefinitionBase[]}      additionalProperties   The additional properties.
     */
    GetAttachment(attachment: Attachment, bodyType: BodyType, additionalProperties: PropertyDefinitionBase[]): IPromise<void>;
    /**
     * Gets attachments.
     *
     * @param   {Attachment[]}                  attachments            The attachments.
     * @param   {BodyType}                      bodyType               Type of the body.
     * @param   {PropertyDefinitionBase[]}      additionalProperties   The additional properties.
     * @return  {IPromise<ServiceResponseCollection<GetAttachmentResponse>>}        Service response collection :Promise.
     */
    GetAttachments(attachments: Attachment[], bodyType: BodyType, additionalProperties: PropertyDefinitionBase[]): IPromise<ServiceResponseCollection<GetAttachmentResponse>>;
    /**
     * Gets attachments.
     *
     * @param   {string[]}                      attachmentIds          The attachment ids.
     * @param   {BodyType}                      bodyType               Type of the body.
     * @param   {PropertyDefinitionBase[]}      additionalProperties   The additional properties.
     * @return  {IPromise<ServiceResponseCollection<GetAttachmentResponse>>}        Service response collection :Promise.
     */
    GetAttachments(attachmentIds: string[], bodyType: BodyType, additionalProperties: PropertyDefinitionBase[]): IPromise<ServiceResponseCollection<GetAttachmentResponse>>;
    /**
     * Gets attachments.
     *
     * @param   {string[]}                      attachmentIds          The attachment ids.
     * @param   {BodyType}                      bodyType               Type of the body.
     * @param   {PropertyDefinitionBase[]}      additionalProperties   The additional properties.
     * @return  {IPromise<ServiceResponseCollection<GetAttachmentResponse>>}        Service response collection :Promise.
     */

    /**
     * Expands a group by retrieving a list of its members. Calling this method results in a call to EWS.
     *
     * @param   {ItemId}   groupId   The Id of the group to expand.
     * @return  {IPromise<ExpandGroupResults>}      An ExpandGroupResults containing the members of the group :Promise.
     */
    ExpandGroup(groupId: ItemId): IPromise<ExpandGroupResults>;
    /**
     * Expands a group by retrieving a list of its members. Calling this method results in a call to EWS.
     *
     * @param   {string}   smtpAddress   The SMTP address of the group to expand.
     * @return  {IPromise<ExpandGroupResults>}      An ExpandGroupResults containing the members of the group :Promise.
     */
    ExpandGroup(smtpAddress: string): IPromise<ExpandGroupResults>;
    /**
     * Expands a group by retrieving a list of its members. Calling this method results in a call to EWS.
     *
     * @param   {EmailAddress}   emailAddress   The e-mail address of the group.
     * @return  {IPromise<ExpandGroupResults>}      An ExpandGroupResults containing the members of the group :Promise.
     */
    ExpandGroup(emailAddress: EmailAddress): IPromise<ExpandGroupResults>;
    /**
     * Expands a group by retrieving a list of its members. Calling this method results in a call to EWS.
     *
     * @param   {string}   address       The SMTP address of the group to expand.
     * @param   {string}   routingType   The routing type of the address of the group to expand.
     * @return  {IPromise<ExpandGroupResults>}      An ExpandGroupResults containing the members of the group :Promise.
     */
    ExpandGroup(address: string, routingType: string): IPromise<ExpandGroupResults>;
    /**
     * Get the password expiration date
     *
     * @param   {string}   mailboxSmtpAddress   The e-mail address of the user.
     * @return  {IPromise<DateTime>}            The password expiration date :Promise.
     */
    GetPasswordExpirationDate(mailboxSmtpAddress: string): IPromise<DateTime>;
    /**
     * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
     *
     * @param   {string}    nameToResolve               The name to resolve.
     * @return  {IPromise<NameResolutionCollection>}    A collection of name resolutions whose names match the one passed as a parameter :Promise.
     */
    ResolveName(nameToResolve: string): IPromise<NameResolutionCollection>;
    /**
     * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
     *
     * @param   {string}                        nameToResolve               The name to resolve.
     * @param   {ResolveNameSearchLocation}     searchScope                 The scope of the search.
     * @param   {boolean}                       returnContactDetails        Indicates whether full contact information should be returned for each of the found contacts.
     * @return  {IPromise<NameResolutionCollection>}                        A collection of name resolutions whose names match the one passed as a parameter :Promise.
     */
    ResolveName(nameToResolve: string, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean): IPromise<NameResolutionCollection>;
    /**
     * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
     *
     * @param   {string}                        nameToResolve               The name to resolve.
     * @param   {ResolveNameSearchLocation}     searchScope                 The scope of the search.
     * @param   {boolean}                       returnContactDetails        Indicates whether full contact information should be returned for each of the found contacts.
     * @param   {PropertySet}                   contactDataPropertySet      The property set for the contct details
     * @return  {IPromise<NameResolutionCollection>}                        A collection of name resolutions whose names match the one passed as a parameter :Promise.
     */
    ResolveName(nameToResolve: string, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean, contactDataPropertySet: PropertySet): IPromise<NameResolutionCollection>;
    /**
     * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
     *
     * @param   {string}                        nameToResolve               The name to resolve.
     * @param   {FolderId[]}                    parentFolderIds             The Ids of the contact folders in which to look for matching contacts.
     * @param   {ResolveNameSearchLocation}     searchScope                 The scope of the search.
     * @param   {boolean}                       returnContactDetails        Indicates whether full contact information should be returned for each of the found contacts.
     * @return  {IPromise<NameResolutionCollection>}                        A collection of name resolutions whose names match the one passed as a parameter :Promise.
     */
    ResolveName(nameToResolve: string, parentFolderIds: FolderId[], searchScope: ResolveNameSearchLocation, returnContactDetails: boolean): IPromise<NameResolutionCollection>;
    /**
     * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
     *
     * @param   {string}                        nameToResolve               The name to resolve.
     * @param   {FolderId[]}                    parentFolderIds             The Ids of the contact folders in which to look for matching contacts.
     * @param   {ResolveNameSearchLocation}     searchScope                 The scope of the search.
     * @param   {boolean}                       returnContactDetails        Indicates whether full contact information should be returned for each of the found contacts.
     * @param   {PropertySet}                   contactDataPropertySet      The property set for the contct details
     * @return  {IPromise<NameResolutionCollection>}                        A collection of name resolutions whose names match the one passed as a parameter :Promise.
     */
    ResolveName(nameToResolve: string, parentFolderIds: FolderId[], searchScope: ResolveNameSearchLocation, returnContactDetails: boolean, contactDataPropertySet: PropertySet): IPromise<NameResolutionCollection>;
    /**
     * Gets detailed information about the availability of a set of users, rooms, and resources within a specified time window.
     *
     * @param   {AttendeeInfo[]}        attendees           The attendees for which to retrieve availability information.
     * @param   {TimeWindow}            timeWindow          The time window in which to retrieve user availability information.
     * @param   {AvailabilityData}      requestedData       The requested data (free/busy and/or suggestions).
     * @return  {IPromise<GetUserAvailabilityResults>}      The availability information for each user appears in a unique FreeBusyResponse object. The order of users in the request determines the order of availability data for each user in the response :Promise.
     */
    GetUserAvailability(attendees: AttendeeInfo[], timeWindow: TimeWindow, requestedData: AvailabilityData): IPromise<GetUserAvailabilityResults>;
    /**
     * Gets detailed information about the availability of a set of users, rooms, and resources within a specified time window.
     *
     * @param   {AttendeeInfo[]}        attendees           The attendees for which to retrieve availability information.
     * @param   {TimeWindow}            timeWindow          The time window in which to retrieve user availability information.
     * @param   {AvailabilityData}      requestedData       The requested data (free/busy and/or suggestions).
     * @param   {AvailabilityOptions}   options             The options controlling the information returned.
     * @return  {IPromise<GetUserAvailabilityResults>}      The availability information for each user appears in a unique FreeBusyResponse object. The order of users in the request determines the order of availability data for each user in the response :Promise.
     */
    GetUserAvailability(attendees: AttendeeInfo[], timeWindow: TimeWindow, requestedData: AvailabilityData, options: AvailabilityOptions): IPromise<GetUserAvailabilityResults>;
    /**
     * Gets Out of Office (OOF) settings for a specific user. Calling this method results in a call to EWS.
     *
     * @param   {}   smtpAddress   The SMTP address of the user for which to retrieve OOF settings.
     * @return  {}                 An OofSettings instance containing OOF information for the specified user.
     */
    GetUserOofSettings(smtpAddress: string): IPromise<OofSettings>;
    SetUserOofSettings(smtpAddress: string, oofSettings: OofSettings): IPromise<void>;
    /** #region Id conversion operations */
    /**
     * Adjusts the service URI based on the current type of credentials.
     *
     * @param   {Uri}   uri   The URI.
     * @return  {Uri}         Adjusted URL.
     */

    /**
     * Initializes the Url property to the Exchange Web Services URL for the specified e-mail address by calling the Autodiscover service.
     *
     * @param   {string}   emailAddress     The email address to use.
     */
    AutodiscoverUrl(emailAddress: string): IPromise<void>;
    /**
     * Initializes the Url property to the Exchange Web Services URL for the specified e-mail address by calling the Autodiscover service.
     *
     * @param   {string}   emailAddress                             The email address to use.
     * @param   {AutodiscoverRedirectionUrlValidationCallback}      validateRedirectionUrlCallback   The callback used to validate redirection URL.
     */
    AutodiscoverUrl(emailAddress: string, validateRedirectionUrlCallback: AutodiscoverRedirectionUrlValidationCallback): IPromise<void>;
    /**
     * Default implementation of AutodiscoverRedirectionUrlValidationCallback. Always returns true indicating that the URL can be used.
     *
     * @param   {string}   redirectionUrl   The redirection URL.
     * @return  {boolean}                    Returns true.
     */

    /**
     * Gets the EWS URL from Autodiscover.
     *
     * @param   {string}                                        emailAddress                     The email address.
     * @param   {ExchangeVersion}                               requestedServerVersion           Exchange version.
     * @param   {AutodiscoverRedirectionUrlValidationCallback}  validateRedirectionUrlCallback   The validate redirection URL callback.
     * @return  {IPromise<Uri>}                                 Ews URL :Promise.
     */

    /**
     * Gets the EWS URL from Autodiscover GetUserSettings response.
     *
     * @param   {GetUserSettingsResponse}   response     The response.
     * @param   {boolean}                   isExternal   If true, Autodiscover call was made externally.
     * @return  {Uri}                       EWS URL.
     */

    static IsMajorMinor(versionPart: string): boolean;
    /**
     * @internal Validates this instance.
     *
     */
    Validate(): void;
    /**
     * @internal Validates a new-style version string. This validation is not as strict as server-side validation.
     *
     * @param   {string}   version   the version string
     */
    static ValidateTargetVersion(version: string): void;
    /**
     * @internal Creates an IXHROptions instance and initializes it with the appropriate parameters, based on the configuration of this service object.
     *
     * @param   {string}   methodName   Name of the method.
     * @return  {IXHROptions}           An instance of IXHROptions to call web service with.
     */
    PrepareHttpWebRequest(methodName: string): IXHROptions;
    ProcessHttpErrorResponse(httpWebResponse: XMLHttpRequest, webException: any): void;
    /**
     * Sets the type of the content.
     *
     * @param   {IXHROptions}   request   The request.
     */
    SetContentType(request: IXHROptions): void;
}
 class ExchangeServiceBase {
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










    XHRApi: IXHRApi;
    GetXHRApi: IXHRApi;
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
}
 class JsonNames {
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
}
 class JsonObject {


    static JsonValueString: string;
}
 class JsonParser {

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
}
 class PropertyBag {
    Properties: DictionaryWithPropertyDefitionKey<PropertyDefinition, any>;
    Owner: ServiceObject;
    IsDirty: boolean;
    Item: any;










    constructor(owner: ServiceObject);
    static AddToChangeList(propertyDefinition: PropertyDefinition, changeList: PropertyDefinition[]): void;
    /**
     * @internal unstable
     */
    Changed(): void;
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
}
 class PropertySet {
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
    _getItem(index: number): PropertyDefinitionBase;
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
    static WriteAdditionalPropertiesToXml(writer: EwsServiceXmlWriter, propertyDefinitions: PropertyDefinitionBase[]): void;
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
}
/**
 * XML attribute names.
 */
 module XmlAttributeNames {
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
    var ClientExtensionInstalledDateTime: string;
    var IsTruncated: string;
    var IsJunk: string;
    var MoveItem: string;
    var Nil: string;
    var Type: string;
}
/**
 * XML element names.
 */
 module XmlElementNames {
    var AllProperties: string;
    var ParentFolderIds: string;
    var DistinguishedFolderId: string;
    var ItemId: string;
    var ItemIds: string;
    var FolderId: string;
    var FolderIds: string;
    var SourceId: string;
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
    var MimeContentUTF8: string;
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
    var IsHidden: string;
    var IsQuickContact: string;
    var IsResend: string;
    var IsUnmodified: string;
    var IsWritable: string;
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
    var NumberOfDays: string;
    var AcceptanceState: string;
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
    var CreationTime: string;
    var People: string;
    var Persona: string;
    var PersonaId: string;
    var PersonaShape: string;
    var RelevanceScore: string;
    var TotalNumberOfPeopleInView: string;
    var FirstMatchingRowIndex: string;
    var FirstLoadedRowIndex: string;
    var YomiCompanyName: string;
    var Emails1: string;
    var Emails2: string;
    var Emails3: string;
    var HomeAddresses: string;
    var BusinessAddresses: string;
    var OtherAddresses: string;
    var BusinessPhoneNumbers: string;
    var BusinessPhoneNumbers2: string;
    var AssistantPhoneNumbers: string;
    var TTYTDDPhoneNumbers: string;
    var HomePhones: string;
    var HomePhones2: string;
    var MobilePhones: string;
    var MobilePhones2: string;
    var CallbackPhones: string;
    var CarPhones: string;
    var HomeFaxes: string;
    var OrganizationMainPhones: string;
    var OtherFaxes: string;
    var OtherTelephones: string;
    var OtherPhones2: string;
    var Pagers: string;
    var RadioPhones: string;
    var TelexNumbers: string;
    var WorkFaxes: string;
    var FileAses: string;
    var CompanyNames: string;
    var DisplayNames: string;
    var DisplayNamePrefixes: string;
    var GivenNames: string;
    var MiddleNames: string;
    var Surnames: string;
    var Generations: string;
    var Nicknames: string;
    var YomiCompanyNames: string;
    var YomiFirstNames: string;
    var YomiLastNames: string;
    var Managers: string;
    var AssistantNames: string;
    var Professions: string;
    var SpouseNames: string;
    var Departments: string;
    var Titles: string;
    var ImAddresses2: string;
    var ImAddresses3: string;
    var DisplayNamePrefix: string;
    var DisplayNameFirstLast: string;
    var DisplayNameLastFirst: string;
    var DisplayNameFirstLastHeader: string;
    var DisplayNameLastFirstHeader: string;
    var IsFavorite: string;
    var Schools: string;
    var Hobbies: string;
    var Locations: string;
    var OfficeLocations: string;
    var BusinessHomePages: string;
    var PersonalHomePages: string;
    var ThirdPartyPhotoUrls: string;
    var Attribution: string;
    var Attributions: string;
    var StringAttributedValue: string;
    var DisplayNameFirstLastSortKey: string;
    var DisplayNameLastFirstSortKey: string;
    var CompanyNameSortKey: string;
    var HomeCitySortKey: string;
    var WorkCitySortKey: string;
    var FileAsId: string;
    var FileAsIds: string;
    var HomeCity: string;
    var WorkCity: string;
    var PersonaType: string;
    var Birthdays: string;
    var BirthdaysLocal: string;
    var WeddingAnniversaries: string;
    var WeddingAnniversariesLocal: string;
    var OriginalDisplayName: string;
    var Person: string;
    var Insights: string;
    var Insight: string;
    var InsightGroupType: string;
    var InsightType: string;
    var InsightSourceType: string;
    var InsightValue: string;
    var InsightSource: string;
    var UpdatedUtcTicks: string;
    var StringInsightValue: string;
    var ProfileInsightValue: string;
    var JobInsightValue: string;
    var UserProfilePicture: string;
    var EducationInsightValue: string;
    var SkillInsightValue: string;
    var DelveDoc: string;
    var CompanyInsightValue: string;
    var ArrayOfInsightValue: string;
    var InsightContent: string;
    var SingleValueInsightContent: string;
    var MultiValueInsightContent: string;
    var ArrayOfInsight: string;
    var PersonType: string;
    var SatoriId: string;
    var DescriptionAttribution: string;
    var ImageUrl: string;
    var ImageUrlAttribution: string;
    var YearFound: string;
    var FinanceSymbol: string;
    var WebsiteUrl: string;
    var Rank: string;
    var Author: string;
    var Created: string;
    var DefaultEncodingURL: string;
    var FileType: string;
    var Data: string;
    var ItemList: string;
    var Avatar: string;
    var JoinedUtcTicks: string;
    var Company: string;
    var StartUtcTicks: string;
    var EndUtcTicks: string;
    var Blob: string;
    var PhotoSize: string;
    var Institute: string;
    var Degree: string;
    var Strength: string;
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
    var SizeRequested: string;
    var HasChanged: string;
    var PictureData: string;
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
    var FindPeople: string;
    var FindPeopleResponse: string;
    var FindPeopleResponseMessage: string;
    var GetPeopleInsights: string;
    var GetPeopleInsightsResponse: string;
    var GetPeopleInsightsResponseMessage: string;
    var GetUserPhoto: string;
    var GetUserPhotoResponse: string;
    var GetUserPhotoResponseMessage: string;
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
    var EncryptionConfigurationOTPEnabled: string;
    var GetEncryptionConfigurationResponse: string;
    var SetEncryptionConfigurationResponse: string;
    var GetOMEConfigurationRequest: string;
    var SetOMEConfigurationRequest: string;
    var OMEConfigurationXml: string;
    var GetOMEConfigurationResponse: string;
    var SetOMEConfigurationResponse: string;
    var InstallAppRequest: string;
    var InstallAppResponse: string;
    var UninstallAppRequest: string;
    var UninstallAppResponse: string;
    var DisableAppRequest: string;
    var DisableAppResponse: string;
    var RegisterConsentRequest: string;
    var RegisterConsentResponse: string;
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
    var GetUserUnifiedGroups: string;
    var RequestedGroupsSets: string;
    var RequestedUnifiedGroupsSetItem: string;
    var SortType: string;
    var FilterType: string;
    var SortDirection: string;
    var GroupsLimit: string;
    var UserSmtpAddress: string;
    var GetUserUnifiedGroupsResponseMessage: string;
    var GroupsSets: string;
    var UnifiedGroupsSet: string;
    var TotalGroups: string;
    var GroupsTag: string;
    var UnifiedGroup: string;
    var MailboxGuid: string;
    var LastVisitedTimeUtc: string;
    var AccessType: string;
    var ExternalDirectoryObjectId: string;
    var GetUnifiedGroupUnseenCount: string;
    var GroupIdentity: string;
    var GroupIdentityType: string;
    var GroupIdentityValue: string;
    var GetUnifiedGroupUnseenCountResponseMessage: string;
    var UnseenCount: string;
    var SetUnifiedGroupLastVisitedTime: string;
    var SetUnifiedGroupLastVisitedTimeResponseMessage: string;
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
}

 class ClientCertificateCredentials extends ExchangeCredentials {
    ClientCertificates: any;

    PrepareWebRequest(request: any): any;
}
 class ExchangeCredentials {
    static WsSecurityPathSuffix: string;
    UserName: string;
    /** Hiding password field from console.log */
    getPassword: () => string;
    setPassword: (value: string) => void;
    Password: string;
    constructor();
    constructor(userName: string, password: string);
    AdjustUrl(url: Uri): Uri;
    EmitExtraSoapHeaderNamespaceAliases(writer: any): void;
    static GetUriWithoutSuffix(url: Uri): string;
    PrepareWebRequest(request: IXHROptions): void;
    SerializeExtraSoapHeaders(writer: any, webMethodName: string): void;
}
 class OAuthCredentials extends ExchangeCredentials {




    constructor(token: string);
    constructor(token: string, verbatim: boolean);
    PrepareWebRequest(request: IXHROptions): void;
}
 class PartnerTokenCredentials extends WSSecurityBasedCredentials {

    NeedSignature: boolean;

    AdjustUrl(url: Uri): Uri;
    Sign(memoryStream: any): any;
}

 class TokenCredentials extends WSSecurityBasedCredentials {
}
 class WSSecurityBasedCredentials extends ExchangeCredentials {
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
}
 class WSSecurityUtilityIdSignedXml {




    AddReference(xpath: string): any;
    GetIdElement(document: any, idValue: string): any;
    GetUniqueId(): string;
}
 class WebCredentials extends ExchangeCredentials {
    Credentials: any;

    AdjustUrl(url: Uri): Uri;
}
 class WindowsLiveCredentials extends WSSecurityBasedCredentials {
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
}
 class X509CertificateCredentials extends WSSecurityBasedCredentials {



    NeedSignature: boolean;


    AdjustUrl(url: Uri): Uri;
    Sign(memoryStream: any): any;
    ToString(): string;
}
 class AddressEntity extends ExtractedEntity {
    Address: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class AddressEntityCollection extends ComplexPropertyCollection<AddressEntity> {
    CreateComplexProperty(xmlElementName: string): AddressEntity;
    CreateDefaultComplexProperty(): AddressEntity;
    GetCollectionItemXmlElementName(complexProperty: AddressEntity): string;
}

 class AppointmentOccurrenceId extends ItemId {

    OccurrenceIndex: number;
    constructor(recurringMasterUniqueId: string, occurrenceIndex: number);
    GetXmlElementName(): string;
    InternalToJson(service: ExchangeService): any;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
}
 class ApprovalRequestData extends ComplexProperty {
    IsUndecidedApprovalRequest: boolean;
    ApprovalDecision: number;
    ApprovalDecisionMaker: string;
    ApprovalDecisionTime: Date;




    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}

 class ArchiveTag extends RetentionTagBase {
}

/**
 * Represents an attachment to an item.
 */
 class Attachment extends ComplexProperty {










    /**
     * Gets the Id of the attachment.
     */
    Id: string;
    /***
     * Gets or sets the name of the attachment.
     */
    Name: string;
    /**
     * Gets or sets the content type of the attachment.
     */
    ContentType: string;
    /**
     * Gets or sets the content Id of the attachment. ContentId can be used as a custom way to identify an attachment in order to reference it from within the body of the item the attachment belongs to.
     */
    ContentId: string;
    /**
     * Gets or sets the content location of the attachment. ContentLocation can be used to associate an attachment with a Url defining its location on the Web.
     */
    ContentLocation: string;
    /**
     * Gets the size of the attachment.
     */
    Size: number;
    /**
     * Gets the date and time when this attachment was last modified.
     */
    LastModifiedTime: DateTime;
    /**
     * Gets or sets a value indicating whether this is an inline attachment. Inline attachments are not visible to end users.
     */
    IsInline: boolean;
    /**
     * @internal True if the attachment has not yet been saved, false otherwise.
     */
    IsNew: boolean;
    /**
     * @internal Gets the owner of the attachment.
     */
    Owner: Item;
    /**
     * @internal Gets the related exchange service.
     */
    Service: ExchangeService;
    /**
     * @internal Initializes a new instance of the Attachment class.
     *
     * @param   {Item}   owner   The owner.
     */
    constructor(owner: Item);
    /**
     * @internal Initializes a new instance of the Attachment class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    constructor(service: ExchangeService);
    /**
     * @internal  @protected unused - only for derived class call
     */
    constructor(ownerOrService: Item | ExchangeService);
    /**
     * Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string;
    /**
     * @internal Load the attachment.
     *
     * @param   {BodyType}                      bodyType               Type of the body.
     * @param   {PropertyDefinitionBase[]}      additionalProperties   The additional properties.
     */
    InternalLoad(bodyType: BodyType, additionalProperties: PropertyDefinitionBase[]): IPromise<void>;
    /**
     * Loads the attachment. Calling this method results in a call to EWS.
     */
    Load(): IPromise<void>;
    /**
     * Loads the attachment id from json.
     *
     * @param   {any}   jsonObject   The json object.
     */

    /**
     * @internal Loads from XMLjsObject.
     *
     * @param   {any}               jsonObject
     * @param   {ExchangeService}   service
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    /**
     * @internal Sets value of field.
     *
     * @remarks  We override the base implementation. Attachments cannot be modified so any attempts the change a property on an existing attachment is an error.
     *
     * @param   {IRefParam<T>}      field   The field.
     * @param   {T}                 value   The value.
     */
    SetFieldValue<T>(field: IRefParam<T>, value: T): void;
    /**
     * @internal Throws exception if this is not a new service object.
     */
    ThrowIfThisIsNotNew(): void;
    /**
     * @internal Validates this instance.
     *
     * @param   {number}   attachmentIndex   Index of this attachment.
     */
    Validate(attachmentIndex?: number): void;
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}

import 'reflect-metadata';
/**
 * Represents an item's attachment collection.
 */
 class AttachmentCollection extends ComplexPropertyCollection<Attachment> implements IOwnedProperty {
    ___implementsInterface: string[];
    ___typeName: string;
    ___typeGenerics: string[];
    /**
     * The item owner that owns this attachment collection
     */

    /**
     * @interface:IOwnedProperty The owner of this attachment collection.
     */
    Owner: ServiceObject;
    /**
     * @internal Initializes a new instance of AttachmentCollection.
     */
    constructor();
    /**
     * Adds a file attachment to the collection.
     *
     * @param   {string}	fileName   The name of the file representing the content of the attachment.
     * @return  {FileAttachment} 		A FileAttachment instance.
     */

    /**
     * Adds a file attachment to the collection.
     *
     * @param   {string}   name       The display name of the new attachment.
     * @param   {string}   fileName   The name of the file representing the content of the attachment.
     * @return  {FileAttachment}      A FileAttachment instance.
     */

    /**
     * Adds a file attachment to the collection. - isContent parameter is required to be true to be able to use bas64 content directly
     *
     * @param   {string}    name       The display name of the new attachment.
     * @param   {string}    fileContent   base64 ontent of the file representing the content of the attachment.
     * @param   {boolean}   isContent   if true used as base64 content of file.
     * @return  {FileAttachment}      A FileAttachment instance.
     */

    /**
     * Adds a file attachment to the collection. - isContent parameter is required to be true to be able to use bas64 content directly
     *
     * @param   {string}    name       The display name of the new attachment.
     * @param   {string}    fileContent   base64 ontent of the file representing the content of the attachment.
     * @return  {FileAttachment}      A FileAttachment instance.
     */
    AddFileAttachment(name: string, content: string): FileAttachment;
    /**
     * Adds an item attachment to the collection
     *
     * @type <TItem>    The type of the item to attach.
     *
     * @param   {any*}      TItem    Item type, not instance
     * @param   {string}    TItemElementName    XML Element Name of the Item class
     * @return  {ItemAttachmentOf<TItem>}      An ItemAttachment instance.
     */
    AddItemAttachment<TItem extends Item>(TItem: any, TItemElementName: string): ItemAttachmentOf<TItem>;
    /**
     * Removes all attachments from this collection.
     */
    Clear(): void;
    /**
     * @internal Disables the change log clearing mechanism. Attachment collections are saved separately from the items they belong to.
     */
    ClearChangeLog(): void;
    /**
     * @internal Instantiate the appropriate attachment type depending on the current XML element name.
     *
     * @param   {string}   xmlElementName   The XML element name from which to determine the type of attachment to create.
     * @return  {Attachment}        An Attachment instance.
     */
    CreateComplexProperty(xmlElementName: string): Attachment;
    CreateDefaultComplexProperty(): Attachment;
    /**
     * @internal Determines the name of the XML element associated with the complexProperty parameter.
     *
     * @param   {Attachment}   complexProperty   The attachment object for which to determine the XML element name with.
     * @return  {string}        The XML element name associated with the complexProperty parameter.
     */
    GetCollectionItemXmlElementName(complexProperty: Attachment): string;
    /**
     * @internal Determines whether there are any unsaved attachment collection changes.
     *
     * @return  {boolean}      True if attachment adds or deletes haven't been processed yet.
     */
    HasUnprocessedChanges(): boolean;
    /**
     * Calls the CreateAttachment web method to create a list of attachments.
     *
     * @param   {string}        parentItemId   The Id of the parent item of the new attachments.
     * @param   {Attachment[]}  attachments    The attachments to create.
     */

    /**
     * Calls the DeleteAttachment web method to delete a list of attachments.
     *
     * @param   {Attachment[]}   attachments   The attachments to delete.
     */

    /**
     * Removes the specified attachment.
     *
     * @param   {Attachment}    attachment   The attachment to remove.
     * @return  {boolean}       True if the attachment was successfully removed from the collection, false otherwise.
     */
    Remove(attachment: Attachment): boolean;
    /**
     * Removes the attachment at the specified index.
     *
     * @param   {number}   index   Index of the attachment to remove.
     */
    RemoveAt(index: number): void;
    /**
     * @internal Saves this collection by creating new attachment and deleting removed ones.
     */
    Save(): IPromise<void>;
    /**
     * @internal Validates this instance.
     */
    Validate(): void;
    /**
     * @internal Validates and saves this instance. **Not in official EWS source, to workaround some promise errors with validate and save**
     */
    ValidateAndSave(): IPromise<void>;
}

/**
 * Represents an attendee to a meeting.
 */
 class Attendee extends EmailAddress {


    /**
     * Gets the type of response the attendee gave to the meeting invitation it received.
     */
    ResponseType: MeetingResponseType;
    /**
     * Gets the date and time when the attendee last responded to a meeting invitation or update.
     */
    LastResponseTime: DateTime;
    /**
     * Initializes a new instance of the **Attendee** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **Attendee** class.
     *
     * @param   {string}   name          The name used to initialize the Attendee.
     */
    constructor(smtpAddress: string);
    /**
     * Initializes a new instance of the **Attendee** class.
     *
     * @param   {string}   name          The name used to initialize the Attendee.
     * @param   {string}   smtpAddress   The SMTP address used to initialize the Attendee.
     */
    constructor(name: string, smtpAddress: string);
    /**
     * Initializes a new instance of the **Attendee** class.
     *
     * @param   {string}   name          The name used to initialize the Attendee.
     * @param   {string}   smtpAddress   The SMTP address used to initialize the Attendee.
     * @param   {string}   routingType   The routing type used to initialize the Attendee.
     */
    constructor(name: string, smtpAddress: string, routingType: string);
    /**
     * Initializes a new instance of the **Attendee** class from an EmailAddress.
     *
     * @param   {EmailAddress}   mailbox   The mailbox used to initialize the Attendee.
     */
    constructor(mailbox: EmailAddress);
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
/**
 * Represents a collection of attendees.
 */
 class AttendeeCollection extends ComplexPropertyCollection<Attendee> {
    /**
     * @internal Initializes a new instance of the **AttendeeCollection** class.
     */
    constructor();
    /**
     * Adds an attendee to the collection.
     *
     * @param   {Attendee}   attendee   The attendee to add.
     */
    Add(attendee: Attendee): void;
    /**
     * Adds a attendee to the collection.
     *
     * @param   {string}   smtpAddress   The SMTP address of the attendee.
     * @return  {Attendee}      An Attendee instance initialized with the provided name and SMTP address.
     */
    Add(smtpAddress: string): Attendee;
    /**
     * Adds a attendee to the collection.
     *
     * @param   {string}   name          The name of the attendee.
     * @param   {string}   smtpAddress   The SMTP address of the attendee.
     * @return  {Attendee}      An Attendee instance initialized with the provided name and SMTP address.
     */
    Add(name: string, smtpAddress: string): Attendee;
    /**
     * Clears the collection.
     */
    Clear(): void;
    /**
     * @internal Creates an Attendee object from an XML element name.
     *
     * @param   {string}   xmlElementName   The XML element name from which to create the attendee.
     * @return  {Attendee}      An Attendee object.
     */
    CreateComplexProperty(xmlElementName: string): Attendee;
    /**
     * @internal Creates the default complex property.
     *
     * @return  {Attendee}      [description]
     */
    CreateDefaultComplexProperty(): Attendee;
    /**
     * @internal Retrieves the XML element name corresponding to the provided Attendee object.
     *
     * @param   {Attendee}   attendee   The Attendee object from which to determine the XML element name.
     * @return  {string}        The XML element name corresponding to the provided Attendee object.
     */
    GetCollectionItemXmlElementName(attendee: Attendee): string;
    /**
     * Removes an attendee from the collection.
     *
     * @param   {Attendee}   attendee   The attendee to remove.
     * @return  {boolean}              True if the attendee was successfully removed from the collection, false otherwise.
     */
    Remove(attendee: Attendee): boolean;
    /**
     * Removes an attendee from the collection.
     *
     * @param   {number}   index   The index of the attendee to remove.
     */
    RemoveAt(index: number): void;
}

 class ByteArrayArray extends ComplexProperty {


    Content: string[];
    InternalToJson(service: ExchangeService): any;
    LoadFromXmlJsObject(jsonCollection: any, serviceExchangeService: any): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class ChangeHighlights extends ComplexProperty {
    HasLocationChanged: boolean;
    Location: string;
    HasStartTimeChanged: boolean;
    Start: Date;
    HasEndTimeChanged: boolean;
    End: Date;






    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class ClientAccessTokenRequest extends ComplexProperty {
    Id: string;
    TokenType: ClientAccessTokenType;
    Scope: string;



}

 class ClientApp extends ComplexProperty {
    Manifest: XMLDocument;
    Metadata: ClientAppMetadata;
    ReadToXmlDocument(reader: EwsServiceXmlReader): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class ClientAppMetadata extends ComplexProperty {
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
}
 class ComplexProperty {
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
}

/**
 * Represents a collection of properties that can be sent to and retrieved from EWS.
 *
 * @type <TComplexProperty>   ComplexProperty type.
 */ class ComplexPropertyCollection<TComplexProperty extends ComplexProperty> extends ComplexProperty {
    ___implementsInterface: string[];
    ___typeName: string;
    ___typeGenerics: string[];




    /**
     * @internal Gets the items.
     *
     * @return The items.
     */
    Items: TComplexProperty[];
    /**
     * @internal Gets the added items.
     *
     * @return The added items.
     */
    AddedItems: TComplexProperty[];
    /**
     * @internal Gets the modified items.
     *
     * @return The modified items
     */
    ModifiedItems: TComplexProperty[];
    /**
     * @internal Gets the removed items.
     *
     * @return The removed items.
     */
    RemovedItems: TComplexProperty[];
    /**
     * Gets the total number of properties in the collection.
     */
    Count: number;
    /**
     * Gets the property at the specified index.
     *
     * @param   {number}   index   The zero-based index of the property to get.
     * @return  {TComplexProperty}           The property at the specified index.
     */
    __thisIndexer(index: number): TComplexProperty;
    /**
     * @internal Initializes a new instance of the  class.
     *
     */
    constructor();
    /**
     * @internal Clears the change log.
     */
    ClearChangeLog(): void;
    /**
     * Determines whether a specific property is in the collection.
     *
     * @param   {TComplexProperty}   complexProperty   The property to locate in the collection.
     * @return  {boolean}           True if the property was found in the collection, false otherwise.
     */
    Contains(complexProperty: TComplexProperty): boolean;
    /**
     * @internal Creates the complex property.
     *
     * @param   {string}   xmlElementName   Name of the XML element.
     * @return  {TComplexProperty}          Complex property instance.
     */
    CreateComplexProperty(xmlElementName: string): TComplexProperty;
    /**
     * @internal Creates the default complex property.
     *
     * @return  {TComplexProperty}      Complex property instance.
     */
    CreateDefaultComplexProperty(): TComplexProperty;
    /**
     * @internal Loads from XMLJsObject collection to create a new collection item.
     *
     * @interface   IJsonCollectionDeserializer
     *
     * @param   {any}               jsObjectCollection   The json collection.
     * @param   {ExchangeService}   service          The service.
     */
    CreateFromXmlJsObjectCollection(jsObjectCollection: any, service: ExchangeService): void;
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {TComplexProperty}   complexProperty   The complex property.
     * @return  {string}            XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: TComplexProperty): string;
    /**
     * Searches for a specific property and return its zero-based index within the collection.
     *
     * @param   {TComplexProperty}   complexProperty   The property to locate in the collection.
     * @return  {number}                     The zero-based index of the property within the collection.
     */
    IndexOf(complexProperty: TComplexProperty): number;
    /**
     * @internal Add complex property.
     *
     * @param   {TComplexProperty}   complexProperty   The complex property.
     */
    InternalAdd(complexProperty: TComplexProperty): void;
    /**
     * @private Add complex property.
     *
     * @param   {TComplexProperty}   complexProperty   The complex property.
     * @param   {boolean}   loading           If true, collection is being loaded.
     */
    InternalAdd(complexProperty: TComplexProperty, loading: boolean): void;
    /**
     * @internal Clear collection.
     */
    InternalClear(): void;
    /**
     * @internal Remove specified complex property.
     *
     * @param   {TComplexProperty}   complexProperty   The complex property.
     * @return  {boolean}           True if the complex property was successfully removed from the collection, false otherwise.
     */
    InternalRemove(complexProperty: TComplexProperty): boolean;
    /**
     * @internal Remote entry at index.
     *
     * @param   {number}   index   The index.
     */
    InternalRemoveAt(index: number): void;
    InternalToJson(service: ExchangeService): any;
    /**
     * @internal Item changed.
     *
     * @param   {ComplexProperty}   complexProperty   The complex property.
     */
    ItemChanged(complexProperty: ComplexProperty): void;
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    /**
     * @internal Removes from change log.
     *
     * @param   {TComplexProperty}   complexProperty   The complex property.
     */
    RemoveFromChangeLog(complexProperty: TComplexProperty): void;
    /**
     * @internal Determine whether we should write collection to XML or not.
     *
     * @return  {boolean}      True if collection contains at least one element.
     */
    ShouldWriteToRequest(): boolean;
    /**
     * @internal Loads from XMLJsObject collection to update collection Items.
     *
     * @interface   IJsonCollectionDeserializer
     *
     * @param   {any}               jsObjectCollection   The XMLJsObject collection.
     * @param   {ExchangeService}   service          The service.
     */
    UpdateFromXmlJsObjectCollection(jsObjectCollection: any, service: ExchangeService): void;
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {XmlNamespace}          xmlNamespace     The XML namespace.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, xmlNamespace?: XmlNamespace): void;
    /**
     * @internal Writes the update to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer               The writer.
     * @param   {ServiceObject}         ewsObject            The ews object.
     * @param   {PropertyDefinition}    propertyDefinition   Property definition.
     * @return  {boolean}               True if property generated serialization.
     */
    WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition): boolean;
    /**
     * @internal Writes the deletion update to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer      The writer.
     * @param   {ServiceObject}         ewsObject   The ews object.
     * @return  {boolean}               True if property generated serialization.
     */
    WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean;
}
 class ContactEntity extends ExtractedEntity {
    PersonName: string;
    BusinessName: string;
    PhoneNumbers: ContactPhoneEntityCollection;
    Urls: StringList;
    EmailAddresses: StringList;
    Addresses: StringList;
    ContactString: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class ContactEntityCollection extends ComplexPropertyCollection<ContactEntity> {
    CreateComplexProperty(xmlElementName: string): ContactEntity;
    CreateDefaultComplexProperty(): ContactEntity;
    GetCollectionItemXmlElementName(complexProperty: ContactEntity): string;
}
 class ContactPhoneEntity extends ComplexProperty {
    OriginalPhoneString: string;
    PhoneString: string;
    Type: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class ContactPhoneEntityCollection extends ComplexPropertyCollection<ContactPhoneEntity> {
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
}
 class ConversationNodeCollection extends ComplexPropertyCollection<ConversationNode> {

    CreateComplexProperty(xmlElementName: string): ConversationNode;
    CreateDefaultComplexProperty(): ConversationNode;
    GetCollectionItemXmlElementName(complexProperty: ConversationNode): string;
}
 class ConversationRequest extends ComplexProperty {
    ConversationId: ConversationId;
    SyncState: string;
    InternalToJson(service: ExchangeService): any;
    InternalValidate(): any;
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any;
}
 class ConversationResponse extends ComplexProperty {
    ConversationId: ConversationId;
    SyncState: string;
    ConversationNodes: ConversationNodeCollection;

    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class CreateRuleOperation extends RuleOperation {
    Rule: Rule;
    XmlElementName: string;

    InternalToJson(service: ExchangeService): any;
    InternalValidate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class DelegatePermissions extends ComplexProperty {
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
}

/**
 * Encapsulates information on the deleted occurrence of a recurring appointment.
 */
 class DeletedOccurrenceInfo extends ComplexProperty {
    /**
     * The original start date and time of the deleted occurrence.
     *
     * @remarks The EWS schema contains a Start property for deleted occurrences but it's really the original start date and time of the occurrence.
     */

    /**
     * Gets the original start date and time of the deleted occurrence.
     */
    OriginalStart: DateTime;
    /**
     * @internal Initializes a new instance of the **DeletedOccurrenceInfo** class.
     */
    constructor();
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
}
/**
 * Represents a collection of deleted occurrence objects.
 */
 class DeletedOccurrenceInfoCollection extends ComplexPropertyCollection<DeletedOccurrenceInfo> {
    /**
     * @internal Initializes a new instance of the **OccurrenceInfoCollection** class.
     */
    constructor();
    /**
     * @internal Creates the complex property.
     *
     * @param   {string}   xmlElementName   Name of the XML element.
     * @return  {DeletedOccurrenceInfo}     OccurenceInfo instance.
     */
    CreateComplexProperty(xmlElementName: string): DeletedOccurrenceInfo;
    /**
     * @internal Creates the default complex property.
     *
     * @return  {DeletedOccurrenceInfo}     Default OccurenceInfo instance.
     */
    CreateDefaultComplexProperty(): DeletedOccurrenceInfo;
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {DeletedOccurrenceInfo}   complexProperty   The complex property.
     * @return  {string}        XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: DeletedOccurrenceInfo): string;
}
 class DictionaryEntryProperty<TKey> extends ComplexProperty {

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

/**
 * Represents an e-mail address.
 */
 class EmailAddress extends ComplexProperty {
    /**
     * SMTP routing type.
     */
    static SmtpRoutingType: string;
    /**
     * Display name.
     */

    /**
     * Email address.
     */

    /**
     * Routing type.
     */

    /**
     * Mailbox type.
     */

    /**
     * ItemId - Contact or PDL.
     */

    /**
     * Gets or sets the name associated with the e-mail address.
     */
    Name: string;
    /**
     * Gets or sets the actual address associated with the e-mail address. The type of the Address property must match the specified routing type. If RoutingType is not set, Address is assumed to be an SMTP address.
     */
    Address: string;
    /**
     * Gets or sets the routing type associated with the e-mail address. If RoutingType is not set, Address is assumed to be an SMTP address.
     */
    RoutingType: string;
    /**
     * Gets or sets the type of the e-mail address.
     */
    MailboxType: MailboxType;
    /**
     * Gets or sets the Id of the contact the e-mail address represents. When Id is specified, Address should be set to null.
     */
    Id: ItemId;
    /**
     * Initializes a new instance of the **EmailAddress** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **EmailAddress** class.
     *
     * @param   {string}        name          The name used to initialize the EmailAddress.
     */
    constructor(smtpAddress: string);
    /**
     * Initializes a new instance of the **EmailAddress** class.
     *
     * @param   {string}        name          The name used to initialize the EmailAddress.
     * @param   {string}        address       The address used to initialize the EmailAddress.
     */
    constructor(name: string, smtpAddress: string);
    /**
     * Initializes a new instance of the **EmailAddress** class.
     *
     * @param   {string}        name          The name used to initialize the EmailAddress.
     * @param   {string}        address       The address used to initialize the EmailAddress.
     * @param   {string}        routingType   The routing type used to initialize the EmailAddress.
     */
    constructor(name: string, address: string, routingType: string);
    /**
     * Initializes a new instance of the **EmailAddress** class.
     *
     * @param   {string}        name          The name used to initialize the EmailAddress.
     * @param   {string}        address       The address used to initialize the EmailAddress.
     * @param   {string}        routingType   The routing type used to initialize the EmailAddress.
     * @param   {MailboxType}   mailboxType   Mailbox type of the participant.
     */
    constructor(name: string, address: string, routingType: string, mailboxType: MailboxType);
    /**
     * Initializes a new instance of the **EmailAddress** class.
     *
     * @param   {string}        name          The name used to initialize the EmailAddress.
     * @param   {string}        address       The address used to initialize the EmailAddress.
     * @param   {string}        routingType   The routing type used to initialize the EmailAddress.
     * @param   {MailboxType}   mailboxType   Mailbox type of the participant.
     * @param   {ItemId}        itemId        ItemId of a Contact or PDL.
     */
    constructor(name: string, address: string, routingType: string, mailboxType: MailboxType, itemId: ItemId);
    /**
     * Initializes a new instance of the **EmailAddress** class from another EmailAddress instance.
     *
     * @param   {EmailAddress}   mailbox   EMailAddress instance to copy.
     */
    constructor(mailbox: EmailAddress);
    constructor(smtpAddressOrMailbox: string | EmailAddress);
    /**
     * Get a string representation for using this instance in a search filter.
     *
     * @return  {string}      String representation of instance.
     */
    GetSearchString(): string;
    ReadElementsFromXmlJsObject(reader: any): boolean;
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    /**
     * Returns a **string** that represents the current **object**.
     *
     * @return  {string}      A **string** that represents the current **object**.
     */
    ToString(): string;
    toString(): string;
    /**
     * Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
/**
 * Represents a collection of e-mail addresses.
 */
 class EmailAddressCollection extends ComplexPropertyCollection<EmailAddress> {
    /**
     * XML element name
     */

    /**
     * @internal Initializes a new instance of the **EmailAddressCollection** class.
     *
     * @remarks Note that XmlElementNames.Mailbox is the collection element name for ArrayOfRecipientsType, not ArrayOfEmailAddressesType.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **EmailAddressCollection** class.
     *
     * @param   {string}   collectionItemXmlElementName   Name of the collection item XML element.
     */
    constructor(collectionItemXmlElementName: string);
    /**
     * Adds an e-mail address to the collection.
     *
     * @param   {EmailAddress}   emailAddress   The e-mail address to add.
     */
    Add(emailAddress: EmailAddress): void;
    /**
     * Adds an e-mail address to the collection.
     *
     * @param   {string}   smtpAddress   The SMTP address used to initialize the e-mail address.
     * @return  {EmailAddress}                 An EmailAddress object initialized with the provided SMTP address.
     */
    Add(smtpAddress: string): EmailAddress;
    /**
     * Adds an e-mail address to the collection.
     *
     * @param   {string}   name          The name used to initialize the e-mail address.
     * @param   {string}   smtpAddress   The SMTP address used to initialize the e-mail address.
     * @return  {EmailAddress}           An EmailAddress object initialized with the provided SMTP address.
     */
    Add(name: string, smtpAddress: string): EmailAddress;
    /**
     * Adds multiple e-mail addresses to the collection.
     *
     * @param   {EmailAddress[]}   emailAddresses   The e-mail addresses to add.
     */
    AddRange(emailAddresses: EmailAddress[]): void;
    /**
     * Adds multiple e-mail addresses to the collection.
     *
     * @param   {string[]}   smtpAddresses   The SMTP addresses used to initialize the e-mail addresses.
     */
    AddRange(smtpAddresses: string[]): void;
    /**
     * Clears the collection.
     */
    Clear(): void;
    /**
     * @internal Creates an EmailAddress object from an XML element name.
     *
     * @param   {string}   xmlElementName   The XML element name from which to create the e-mail address.
     * @return  {EmailAddress}              An EmailAddress object.
     */
    CreateComplexProperty(xmlElementName: string): EmailAddress;
    /**
     * @internal Creates the default complex property.
     *
     * @return  {EmailAddress}      default instance of EmailAddress
     */
    CreateDefaultComplexProperty(): EmailAddress;
    /**
     * @internal Retrieves the XML element name corresponding to the provided EmailAddress object.
     *
     * @param   {EmailAddress}   emailAddress   The EmailAddress object from which to determine the XML element name.
     * @return  {string}        The XML element name corresponding to the provided EmailAddress object.
     */
    GetCollectionItemXmlElementName(emailAddress: EmailAddress): string;
    /**
     * Removes an e-mail address from the collection.
     *
     * @param   {EmailAddress}  emailAddress   The e-mail address to remove.
     * @return  {boolean}       True if the email address was successfully removed from the collection, false otherwise.
     */
    Remove(emailAddress: EmailAddress): boolean;
    /**
     * Removes an e-mail address from the collection.
     *
     * @param   {number}   index   The index of the e-mail address to remove.
     */
    RemoveAt(index: number): void;
    /**
     * @internal Determine whether we should write collection to XML or not.
     *
     * @return  {true}      Always true, even if the collection is empty.
     */
    ShouldWriteToRequest(): boolean;
}

 class EmailAddressDictionary extends DictionaryProperty<EmailAddressKey, EmailAddressEntry> {
    constructor();
    /**
     * Gets or sets the e-mail address at the specified key.
     *
     * @param   {EmailAddressKey}   key   The key of the e-mail address to get or set.
     * @return  {EmailAddress}         The e-mail address at the specified key.
     */
    _getItem(key: EmailAddressKey): EmailAddress;
    /**
     * Gets or sets the e-mail address at the specified key.
     *
     * @param   {EmailAddressKey}   key   The key of the e-mail address to get or set.
     * @return  {EmailAddress}         The e-mail address at the specified key.
     */
    _setItem(key: EmailAddressKey, value: EmailAddress): void;
    /**
     * @internal Creates instance of dictionary entry.
     *
     * @return  {EmailAddressEntry}      New instance.
     */
    CreateEntryInstance(): EmailAddressEntry;
    /**
     * @internal Gets the field URI.
     *
     * @return  {string}      Field URI.
     */
    GetFieldURI(): string;
    /**
     * Tries to get the e-mail address associated with the specified key.
     *
     * @param   {EmailAddressKey}   key            The key.
     * @param   {IOutParam<EmailAddress>}   emailAddress   When this method returns, contains the e-mail address associated with the specified key, if the key is found; otherwise, null. This parameter is passed uninitialized.
     * @return  {boolean}                  true if the Dictionary contains an e-mail address associated with the specified key; otherwise, false.
     */
    TryGetValue(key: EmailAddressKey, emailAddress: IOutParam<EmailAddress>): boolean;
}
 class EmailAddressEntity extends ExtractedEntity {
    EmailAddress: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class EmailAddressEntityCollection extends ComplexPropertyCollection<EmailAddressEntity> {
    CreateComplexProperty(xmlElementName: string): EmailAddressEntity;
    CreateDefaultComplexProperty(): EmailAddressEntity;
    GetCollectionItemXmlElementName(complexProperty: EmailAddressEntity): string;
}
 class EmailAddressEntry extends DictionaryEntryProperty<EmailAddressKey> {

    EmailAddress: EmailAddress;
    constructor();
    constructor(key: EmailAddressKey, emailAddress: EmailAddress);
    EmailAddressChanged(complexProperty: ComplexProperty): void;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class EmailUserEntity extends ComplexProperty {
    Name: string;
    UserId: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class EmailUserEntityCollection extends ComplexPropertyCollection<EmailUserEntity> {
    CreateComplexProperty(xmlElementName: string): EmailUserEntity;
    CreateDefaultComplexProperty(): EmailUserEntity;
    GetCollectionItemXmlElementName(complexProperty: EmailUserEntity): string;
}
/**
 * Represents Enhanced Location.
 */
 class EnhancedLocation extends ComplexProperty {



    /**
     * Gets or sets the Location DisplayName.
     */
    DisplayName: string;
    /**
     * Gets or sets the Location Annotation.
     */
    Annotation: string;
    /**
     * Gets or sets the Persona Postal Address.
     */
    PersonaPostalAddress: PersonaPostalAddress;
    /**
     * @internal Initializes a new instance of the **EnhancedLocation** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **EnhancedLocation** class.
     *
     * @param   {string}   displayName            The location DisplayName.
     */
    constructor(displayName: string);
    /**
     * Initializes a new instance of the **EnhancedLocation** class.
     *
     * @param   {string}   displayName            The location DisplayName.
     * @param   {string}   annotation             The annotation on the location.
     */
    constructor(displayName: string, annotation: string);
    /**
     * Initializes a new instance of the **EnhancedLocation** class.
     *
     * @param   {string}                displayName            The location DisplayName.
     * @param   {string}                annotation             The annotation on the location.
     * @param   {PersonaPostalAddress}  personaPostalAddress   The persona postal address.
     */
    constructor(displayName: string, annotation: string, personaPostalAddress: PersonaPostalAddress);
    /**
     * @internal Validates this instance.
     */
    InternalValidate(): void;
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    /**
     * PersonaPostalAddress OnChange.
     *
     * @param   {ComplexProperty}   complexProperty   ComplexProperty object.
     */

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}

/**
 * Represents an EntityExtractionResult object.
 */
 class EntityExtractionResult extends ComplexProperty {
    /**
     * Gets the extracted Addresses.
     */
    Addresses: AddressEntityCollection;
    /**
     * Gets the extracted MeetingSuggestions.
     */
    MeetingSuggestions: MeetingSuggestionCollection;
    /**
     * Gets the extracted TaskSuggestions.
     */
    TaskSuggestions: TaskSuggestionCollection;
    /**
     * Gets the extracted EmailAddresses.
     */
    EmailAddresses: EmailAddressEntityCollection;
    /**
     * Gets the extracted Contacts.
     */
    Contacts: ContactEntityCollection;
    /**
     * Gets the extracted Urls.
     */
    Urls: UrlEntityCollection;
    /**
     * Gets the extracted PhoneNumbers
     */
    PhoneNumbers: PhoneEntityCollection;
    /**
     * @internal Initializes a new instance of the **EntityExtractionResult** class.
     */
    constructor();
    /**
     * @internal Read element from XMLJsObject.
     *
     * @param   {}   jsObject   xmljsonObject
     * @return  {ExchangeService} the ExchangeService
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
}
 class ExtendedProperty extends ComplexProperty {


    PropertyDefinition: ExtendedPropertyDefinition;
    Value: any;
    constructor(propertyDefinition?: ExtendedPropertyDefinition);
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetStringValue(): string;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class ExtendedPropertyCollection extends ComplexPropertyCollection<ExtendedProperty> {
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
}
/**
 * Represents a file attachment.
 */
 class FileAttachment extends Attachment {



    /**
     * Gets the name of the file the attachment is linked to.
     */
    FileName: string;
    /**
     * Gets the base64 content of the attachment into memory. Content is set only when Load() is called.
     */
    Base64Content: string;
    /**
     * Gets or sets a value indicating whether this attachment is a contact photo.
     */
    IsContactPhoto: boolean;
    /**
     * @internal Initializes a new instance of the **FileAttachment** class.
     *
     * @param   {Item}   owner   The owner of the attachment.
     */
    constructor(owner: Item);
    /**
     * @internal Initializes a new instance of the **FileAttachment** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    constructor(service: ExchangeService);
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string;
    /**
     * @internal Loads from XMLjsObject.
     *
     * @param   {any}               jsonProperty   The json property.
     * @param   {ExchangeService}   service        [description]
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    ReadElementsFromXmlJsObjectToPatch(reader: any): boolean;
    /**
     * @internal Validates this instance.
     *
     * @param   {number}   attachmentIndex   Index of this attachment.
     */
    Validate(attachmentIndex?: number): void;
    /**
     * @internal Writes elements and content to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class Flag extends ComplexProperty {
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
}
 class FolderIdCollection extends ComplexPropertyCollection<FolderId> {
    Add(folderId: FolderId): any;
    Clear(): any;
    CreateComplexProperty(xmlElementName: string): FolderId;
    CreateDefaultComplexProperty(): FolderId;
    GetCollectionItemXmlElementName(complexProperty: FolderId): string;
    Remove(folderId: FolderId): boolean;
    RemoveAt(index: number): any;
}
 class FolderPermission extends ComplexProperty {
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
}
 class GroupMemberCollection extends ComplexPropertyCollection<GroupMember> {

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
}
 class HighlightTerm extends ComplexProperty {
    Scope: string;
    Value: string;


    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class ImAddressDictionary extends DictionaryProperty<ImAddressKey, ImAddressEntry> {
    constructor();
    _getItem(key: ImAddressKey): string;
    _setItem(key: ImAddressKey, value: string): void;
    CreateEntryInstance(): ImAddressEntry;
    GetFieldURI(): string;
    TryGetValue(key: ImAddressKey, imAddress: IOutParam<string>): boolean;
}
 class ImAddressEntry extends DictionaryEntryProperty<ImAddressKey> {

    ImAddress: string;
    constructor();
    constructor(key: ImAddressKey, imAddress: string);
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    LoadFromFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}

/**
 * Represents an Internet message header.
 */
 class InternetMessageHeader extends ComplexProperty {


    /**
     * The name of the header.
     */
    Name: string;
    /**
     * The value of the header.
     */
    Value: string;
    /**
     * @internal Initializes a new instance of the **InternetMessageHeader** class.
     */
    constructor();
    /**
     * @internal Loads from XMLJsObject.
     *
     * @param   {any}   jsonProperty   The json property.
     * @param   {ExchangeService}   service        The ExchangeService instance
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    ReadAttributesFromXmlJsObject(reader: any): any;
    ReadTextValueFromXmlJsObject(reader: any): any;
    /**
     * Obtains a string representation of the header.
     *
     * @return  {string}      The string representation of the header.
     */
    ToString(): string;
    toString(): string;
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class InternetMessageHeaderCollection extends ComplexPropertyCollection<InternetMessageHeader> {
    /**
     * @internal Initializes a new instance of the **InternetMessageHeaderCollection** class.
     */
    constructor();
    /**
     * @internal Creates the complex property.
     *
     * @param   {string}   xmlElementName   Name of the XML element.
     * @return  {InternetMessageHeader}     InternetMessageHeader instance.
     */
    CreateComplexProperty(xmlElementName: string): InternetMessageHeader;
    /**
     * @internal Creates the default complex property.
     *
     * @return  {InternetMessageHeader}      InternetMessageHeader instance.
     */
    CreateDefaultComplexProperty(): InternetMessageHeader;
    /**
     * Find a specific header in the collection.
     *
     * @param   {string}   name   The name of the header to locate.
     * @return  {InternetMessageHeader}     An InternetMessageHeader representing the header with the specified name; null if no header with the specified name was found.
     */
    Find(name: string): InternetMessageHeader;
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {InternetMessageHeader}   complexProperty   The complex property.
     * @return  {string}                     XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: InternetMessageHeader): string;
}

/**
 * Represents an item attachment.
 */
 class ItemAttachment extends Attachment {
    /**
     * The item associated with the attachment.
     */
    protected item: Item;
    /**
     * Gets the item associated with the attachment.
     */
    Item: Item;
    /** to workaround base.Item property accessor of c# //ref: //info: */
    protected _setItem(value: Item): void;
    /**
    * @internal Initializes a new instance of the **ItemAttachment** class.
    *
    * @param   {Item}   owner   The owner of the attachment.
    */
    constructor(owner: Item);
    /**
     * @internal Initializes a new instance of the **ItemAttachment** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    constructor(service: ExchangeService);
    /**
     * @internal Obtains EWS XML element name for this object.
     *
     * @return  {string}      The XML element name.
     */
    GetXmlElementName(): string;
    /**
     * Implements the OnChange event handler for the item associated with the attachment.
     *
     * @param   {ServiceObject}   serviceObject   The service object that triggered the OnChange event.
     */

    /**
     * Loads this attachment.
     *
     * @param   {PropertyDefinitionBase[]}   additionalProperties   The optional additional properties to load.
     */
    Load(additionalProperties: PropertyDefinitionBase[]): IPromise<void>;
    /**
     * Loads this attachment.
     *
     * @param   {BodyType}   bodyType               The body type to load.
     * @param   {PropertyDefinitionBase[]}   additionalProperties   The optional additional properties to load.
     */
    Load(bodyType: BodyType, additionalProperties: PropertyDefinitionBase[]): IPromise<void>;
    /**
     * @internal Loads from XMLjsObject.
     *
     * @param   {any}               jsObject   The json property.
     * @param   {ExchangeService}   service        [description]
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    ReadElementsFromXmlJsObjectToPatch(reader: any): boolean;
    /**
     * @internal Validates this instance.
     *
     * @param   {number}   attachmentIndex   Index of this attachment.
     */
    Validate(attachmentIndex: number): void;
    /**
     * @internal Writes the properties of this object as XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer to write the elements to.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
/**
 * Represents a strongly typed item attachment. **Workaround of ItemAttachment<TItem>** - not allowed in typescript to have two class, one generic and one non-generic
 */
 class ItemAttachmentOf<TItem extends Item> extends ItemAttachment {
    /**
     * Gets the item associated with the attachment.
     */
    Item: TItem;
    /**
     * @internal Initializes a new instance of the  class.
     *
     * @param   {}   owner   The owner of the attachment.
     */
    constructor(owner: Item);
}

/**
 * Represents a collection of items.
 */
 class ItemCollection<TItem extends Item> extends ComplexProperty {
    __implements: string[];

    /**
     * Gets the total number of items in the collection.
     */
    Count: number;
    /**
     * Gets the item at the specified index.
     *
     * @param   {number}   index   The zero-based index of the item to get.
     * @return  {TItem}     The item at the specified index.
     */
    _getItem(index: number): TItem;
    /**
     * Initializes a new instance of the **ItemCollection** class.
     *
     */
    constructor();
    GetEnumerator(): any;
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
}

 class ItemId extends ServiceId {
    constructor();
    constructor(uniqueId: string);
    GetXmlElementName(): string;
}
 class ItemIdCollection extends ComplexPropertyCollection<ItemId> {
    CreateComplexProperty(xmlElementName: string): ItemId;
    CreateDefaultComplexProperty(): ItemId;
    GetCollectionItemXmlElementName(complexProperty: ItemId): string;
}
 class Mailbox extends ComplexProperty {
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
}
 class MeetingSuggestionCollection extends ComplexPropertyCollection<MeetingSuggestion> {
    CreateComplexProperty(xmlElementName: string): MeetingSuggestion;
    CreateDefaultComplexProperty(): MeetingSuggestion;
    GetCollectionItemXmlElementName(complexProperty: MeetingSuggestion): string;
}
 class MeetingTimeZone extends ComplexProperty {
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
    constructor();
    constructor(text: string);
    constructor(bodyType: BodyType, text: string);
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): void;
    ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): void;
    ToString(): string;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class MimeContent extends ComplexProperty {
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
/**
 * Encapsulates information on the occurrence of a recurring appointment.
 */
 class OccurrenceInfo extends ComplexProperty {




    /**
     * Gets the Id of the occurrence.
     */
    ItemId: ItemId;
    /**
     * Gets the start date and time of the occurrence.
     */
    Start: DateTime;
    /**
     * Gets the end date and time of the occurrence.
     */
    End: DateTime;
    /**
     * Gets the original start date and time of the occurrence.
     */
    OriginalStart: DateTime;
    /**
     *  @internal Initializes a new instance of the **OccurrenceInfo** class.
     */
    constructor();
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
}
/**
 * Represents a collection of OccurrenceInfo objects.
 */
 class OccurrenceInfoCollection extends ComplexPropertyCollection<OccurrenceInfo> {
    /**
     * @internal Initializes a new instance of the **OccurrenceInfoCollection** class.
     */
    constructor();
    /**
     * @internal Creates the complex property.
     *
     * @param   {string}   xmlElementName   Name of the XML element.
     * @return  {OccurrenceInfo}        OccurenceInfo instance.
     */
    CreateComplexProperty(xmlElementName: string): OccurrenceInfo;
    /**
     * @internal Creates the default complex property.
     *
     * @return  {OccurrenceInfo}      OccurenceInfo instance.
     */
    CreateDefaultComplexProperty(): OccurrenceInfo;
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {OccurrenceInfo}    complexProperty   The complex property.
     * @return  {string}            XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: OccurrenceInfo): string;
}
/**
 * Represents Lync online meeting settings.
 */
 class OnlineMeetingSettings extends ComplexProperty {



    /**
     * Gets or sets the online meeting setting that describes whether users dialing in by phone have to wait in the lobby.
     */
    LobbyBypass: LobbyBypass;
    /**
     * Gets or sets the online meeting setting that describes access permission to the meeting.
     */
    AccessLevel: OnlineMeetingAccessLevel;
    /**
     * Gets or sets the online meeting setting that defines the meeting leaders.
     */
    Presenters: Presenters;
    /**
     * Initializes a new instance of the **OnlineMeetingSettings** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **OnlineMeetingSettings** class from another OnlineMeetingSettings instance.
     *
     * @param   {OnlineMeetingSettings}   onlineMeetingSettings   OnlineMeetingSettings instance to copy.
     */
    constructor(onlineMeetingSettings: OnlineMeetingSettings);
    /**
     * @internal Initializes a new instance of the **OnlineMeetingSettings** class.
     *
     * @param   {LobbyBypass}               lobbyBypass   The address used to initialize the OnlineMeetingSettings.
     * @param   {OnlineMeetingAccessLevel}  accessLevel   The routing type used to initialize the OnlineMeetingSettings.
     * @param   {Presenters}                presenters    Mailbox type of the participant.
     */
    constructor(lobbyBypass: LobbyBypass, accessLevel: OnlineMeetingAccessLevel, presenters: Presenters);
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
/**
 * Represents PersonaPostalAddress.
 */
 class PersonaPostalAddress extends ComplexProperty {















    /**
     * Gets or sets the Street.
     */
    Street: string;
    /**
     * Gets or sets the City.
     */
    City: string;
    /**
     * Gets or sets the state.
     */
    State: string;
    /**
     * Gets or sets the Country.
     */
    Country: string;
    /**
     * Gets or sets the PostalCode.
     */
    PostalCode: string;
    /**
     * Gets or sets the PostOfficeBox.
     */
    PostOfficeBox: string;
    /**
     * Gets or sets the Type.
     */
    Type: string;
    /**
     * Gets or sets the location source type.
     */
    Source: LocationSource;
    /**
     * Gets or sets the location Uri.
     */
    Uri: string;
    /**
     * Gets or sets a value indicating location latitude.
     */
    Latitude: number;
    /**
     * Gets or sets a value indicating location longitude.
     */
    Longitude: number;
    /**
     * Gets or sets the location accuracy.
     */
    Accuracy: number;
    /**
     * Gets or sets the location altitude.
     */
    Altitude: number;
    /**
     * Gets or sets the location altitude accuracy.
     */
    AltitudeAccuracy: number;
    /**
     * Gets or sets the street address.
     */
    FormattedAddress: string;
    /**
     * @internal Initializes a new instance of the **PersonaPostalAddress** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **PersonaPostalAddress** class.
     *
     * @param   {string}            street             The Street Address.
     * @param   {string}            city               The City value.
     * @param   {string}            state              The State value.
     * @param   {string}            country            The country value.
     * @param   {string}            postalCode         The postal code value.
     * @param   {string}            postOfficeBox      The Post Office Box.
     * @param   {LocationSource}    locationSource     The location Source.
     * @param   {string}            locationUri        The location Uri.
     * @param   {string}            formattedAddress   The location street Address in formatted address.
     * @param   {number}            latitude           The location latitude.
     * @param   {number}            longitude          The location longitude.
     * @param   {number}            accuracy           The location accuracy.
     * @param   {number}            altitude           The location altitude.
     * @param   {number}            altitudeAccuracy   The location altitude Accuracy.
     */
    constructor(street: string, city: string, state: string, country: string, postalCode: string, postOfficeBox: string, locationSource: LocationSource, locationUri: string, formattedAddress: string, latitude: number, longitude: number, accuracy: number, altitude: number, altitudeAccuracy: number);
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
 class PhoneEntity extends ExtractedEntity {
    OriginalPhoneString: string;
    PhoneString: string;
    Type: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class PhoneEntityCollection extends ComplexPropertyCollection<PhoneEntity> {
    CreateComplexProperty(xmlElementName: string): PhoneEntity;
    CreateDefaultComplexProperty(): PhoneEntity;
    GetCollectionItemXmlElementName(complexProperty: PhoneEntity): string;
}
 class PhoneNumberDictionary extends DictionaryProperty<PhoneNumberKey, PhoneNumberEntry> {
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
}
 class PhysicalAddressDictionary extends DictionaryProperty<PhysicalAddressKey, PhysicalAddressEntry> {
    constructor();
    _getItem(key: PhysicalAddressKey): PhysicalAddressEntry;
    _setItem(key: PhysicalAddressKey, value: PhysicalAddressEntry): void;
    CreateEntryInstance(): PhysicalAddressEntry;
    TryGetValue(key: PhysicalAddressKey, physicalAddress: IOutParam<PhysicalAddressEntry>): boolean;
}
/**
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
    constructor(occurrenceId: string);
    GetXmlElementName(): string;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
}
 class RetentionTagBase extends ComplexProperty {
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
}
 class RuleActions extends ComplexProperty {
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
}
 class RuleError extends ComplexProperty {
    RuleProperty: RuleProperty;
    ErrorCode: RuleErrorCode;
    ErrorMessage: string;
    Value: string;




    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class RuleErrorCollection extends ComplexPropertyCollection<RuleError> {
    CreateComplexProperty(xmlElementName: string): RuleError;
    CreateDefaultComplexProperty(): RuleError;
    GetCollectionItemXmlElementName(ruleValidationError: RuleError): string;
}

 class RuleOperation extends ComplexProperty {
    XmlElementName: string;
}
 class RuleOperationError extends ComplexProperty {
    Operation: RuleOperation;
    Count: number;
    Item: RuleError;



    GetEnumerator(): RuleError[];
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    SetOperationByIndex(operations: RuleOperation[]): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class RuleOperationErrorCollection extends ComplexPropertyCollection<RuleOperationError> {
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
}
 class SearchFolderParameters extends ComplexProperty {
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
}
 class ServiceId extends ComplexProperty {
    IsValid: boolean;
    protected IsValidProxy(): boolean;
    UniqueId: string;
    ChangeKey: string;
    constructor();
    constructor(uniqueId: string);
    Assign(source: ServiceId): void;
    Equals(obj: any): boolean;
    GetXmlElementName(): string;
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): void;
    SameIdAndChangeKey(other: ServiceId): boolean;
    ToString(): string;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
 class SetClientExtensionAction extends ComplexProperty {



    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class SetRuleOperation extends RuleOperation {
    Rule: Rule;
    XmlElementName: string;

    InternalToJson(service: ExchangeService): any;
    InternalValidate(): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}

 class StringList extends ComplexProperty {
    Count: number;
    Items: string[];


    constructor();
    constructor(itemXmlElementName: string);
    constructor(strings: string[]);
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
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
    CreateFromXmlJsObjectCollection(jsObjectCollection: any[], service: ExchangeService): void;
    UpdateFromXmlJsObjectCollection(jsObjectCollection: any[], service: ExchangeService): void;
}

 class TaskSuggestion extends ExtractedEntity {
    TaskString: string;
    Assignees: EmailUserEntityCollection;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class TaskSuggestionCollection extends ComplexPropertyCollection<TaskSuggestion> {
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
}
 class TimeChangeRecurrence extends ComplexProperty {
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
}
 class UrlEntity extends ExtractedEntity {
    Url: string;
    ReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class UrlEntityCollection extends ComplexPropertyCollection<UrlEntity> {
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
}
 class UserId extends ComplexProperty {
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
 class DnsClient {


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
}
 class AddressEntity extends ExtractedEntity {
    Address: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
}
 class RetentionPolicyTag {
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
}
 class AccountIsLockedException extends ServiceRemoteException {
    AccountUnlockUrl: Uri;
}

 class ArgumentException extends Exception {
    ParamName: string;
    constructor();
    constructor(message: string);
    constructor(message: string, paramName: string);
    constructor(message: string, innerException: Exception);
    constructor(message: string, paramName: string, innerException: Exception);
}
 class ArgumentNullException extends ArgumentException {
    constructor();
    constructor(paramName: string);
    constructor(paramName: string, message: string);
    constructor(message: string, innerException: Exception);
    constructor(message: string, paramName: string, innerException: Exception);
}
 class ArgumentOutOfRangeException extends ArgumentException {
    actualValue: any;
    /**
     * Gets the value of the argument that caused the exception.
     */
    ActualValue: any;
    constructor();
    constructor(paramName: string);
    constructor(paramName: string, message: string);
    constructor(message: string, innerException: Exception);
    constructor(paramName: string, actualValue: any, message: string);
}
 class AutodiscoverLocalException extends ServiceLocalException {
    constructor(message?: string, innerException?: Exception);
}
 class AutodiscoverRemoteException extends ServiceRemoteException {
    Error: AutodiscoverError;

}
 class AutodiscoverResponseException extends ServiceRemoteException {
    ErrorCode: AutodiscoverErrorCode;

}
/**
 * Represents a remote service exception that can have multiple service responses.
 *
 * @type {TResponse}       The type of the response.
 */
 class BatchServiceResponseException<TResponse extends ServiceResponse> extends ServiceRemoteException {
    /**
     * The list of responses returned by the web method.
     */

    /**
     * Gets a list of responses returned by the web method.
     */
    ServiceResponses: ServiceResponseCollection<TResponse>;
    /**
     * Initializes a new instance of **BatchServiceResponseException**.
     *
     * @param   {ServiceResponseCollection<DeleteAttachmentResponse>}   serviceResponses   The list of responses to be associated with this exception.
     * @param   {string}   message            The message that describes the error.
     */
    constructor(serviceResponses: ServiceResponseCollection<TResponse>, message: string);
    /**
     * Initializes a new instance of **BatchServiceResponseException**.
     *
     * @param   {ServiceResponseCollection<TResponse>}   serviceResponses   The list of responses to be associated with this exception.
     * @param   {string}   message            The message that describes the error.
     * @param   {Exception}   innerException     The exception that is the cause of the current exception.
     */
    constructor(serviceResponses: ServiceResponseCollection<TResponse>, message: string, innerException: Exception);
}
 class CreateAttachmentException extends BatchServiceResponseException<CreateAttachmentResponse> {
}
/**
 * Represents an error that occurs when a call to the DeleteAttachment web method fails.
 */
 class DeleteAttachmentException extends BatchServiceResponseException<DeleteAttachmentResponse> {
    /**
     * Initializes a new instance of **DeleteAttachmentException**.
     *
     * @param   {ServiceResponseCollection<DeleteAttachmentResponse>}   serviceResponses   The list of responses to be associated with this exception.
     * @param   {string}   message            The message that describes the error.
     */
    constructor(serviceResponses: ServiceResponseCollection<DeleteAttachmentResponse>, message: string);
    /**
     * Initializes a new instance of **DeleteAttachmentException**.
     *
     * @param   {ServiceResponseCollection<DeleteAttachmentResponse>}   serviceResponses   The list of responses to be associated with this exception.
     * @param   {string}   message            The message that describes the error.
     * @param   {Exception}   innerException     The exception that is the cause of the current exception.
     */
    constructor(serviceResponses: ServiceResponseCollection<DeleteAttachmentResponse>, message: string, innerException: Exception);
}
 class Exception {
    Message: string;
    InnerException: Exception;
    constructor();
    constructor(message: string);
    constructor(message: string, innerException: Exception);
    /**
     * @override user JSON.stringify for now, todo: impelemtn real Exception tostring
     */
    toString(): string;
}

 class JsonDeserializationNotImplementedException extends ServiceLocalException {
}

 class JsonSerializationNotImplementedException extends Exception {
}

 class NotSupportedException extends Exception {
    ParamName: string;
    constructor();
    constructor(message: string);
    constructor(message: string, innerException: Exception);
}
 class PropertyException extends ServiceLocalException {
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
}
 class ServiceXmlSerializationException extends ServiceLocalException {
    constructor(message?: string, innerException?: Exception);
}

 class TimeZoneConversionException extends ServiceLocalException {
}
 class UpdateInboxRulesException extends ServiceRemoteException {
    ServiceResponse: ServiceResponse;
    Errors: RuleOperationErrorCollection;
    ErrorCode: ServiceError;
    ErrorMessage: string;


}
/** Indicates which occurrence of a recurring task should be deleted*/
 enum AffectedTaskOccurrence {
    /** All occurrences of the recurring task will be deleted.*/
    AllOccurrences = 0,
    /** Only the current occurrence of the recurring task will be deleted. */
    SpecifiedOccurrenceOnly = 1,
}
/** Defines the type of aggregation to perform.*/
 enum AggregateType {
    /** The maximum value is calculated. */
    Minimum = 0,
    /** The minimum value is calculated. */
    Maximum = 1,
}
 enum AppointmentType {
    Single = 0,
    Occurrence = 1,
    Exception = 2,
    RecurringMaster = 3,
}
 enum AutodiscoverEndpoints {
    None = 0,
    Legacy = 1,
    Soap = 2,
    WsSecurity = 4,
    WSSecuritySymmetricKey = 8,
    WSSecurityX509Cert = 16,
    OAuth = 32,
}
 enum AutodiscoverErrorCode {
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
}
 enum AutodiscoverResponseType {
    Error = 0,
    RedirectUrl = 1,
    RedirectAddress = 2,
    Success = 3,
}
 enum AvailabilityData {
    FreeBusy = 0,
    Suggestions = 1,
    FreeBusyAndSuggestions = 2,
}
 enum BasePropertySet {
    IdOnly = 0,
    FirstClassProperties = 1,
}
 enum BodyType {
    HTML = 0,
    Text = 1,
}
 enum ChangeType {
    Create = 0,
    Update = 1,
    Delete = 2,
    ReadFlagChange = 3,
}
 enum ClientAccessTokenType {
    CallerIdentity = 0,
    ExtensionCallback = 1,
    ScopedToken = 2,
}
 enum ClientExtensionProvidedTo {
    Everyone = 0,
    SpecificUsers = 1,
}
 enum ComparisonMode {
    Exact = 0,
    IgnoreCase = 1,
    IgnoreNonSpacingCharacters = 2,
    IgnoreCaseAndNonSpacingCharacters = 3,
}
 enum ConflictResolutionMode {
    NeverOverwrite = 0,
    AutoResolve = 1,
    AlwaysOverwrite = 2,
}
 enum ConflictType {
    IndividualAttendeeConflict = 0,
    GroupConflict = 1,
    GroupTooBigConflict = 2,
    UnknownAttendeeConflict = 3,
}
 enum ConnectingIdType {
    PrincipalName = 0,
    SID = 1,
    SmtpAddress = 2,
}
 enum ConnectionFailureCause {
    None = 0,
    UserBusy = 1,
    NoAnswer = 2,
    Unavailable = 3,
    Other = 4,
}
 enum ContactSource {
    ActiveDirectory = 0,
    Store = 1,
}
 enum ContainmentMode {
    FullString = 0,
    Prefixed = 1,
    Substring = 2,
    PrefixOnWords = 3,
    ExactPhrase = 4,
}
 enum ConversationActionType {
    AlwaysCategorize = 0,
    AlwaysDelete = 1,
    AlwaysMove = 2,
    Delete = 3,
    Move = 4,
    Copy = 5,
    SetReadState = 6,
    SetRetentionPolicy = 7,
    Flag = 8,
}
 enum ConversationFlagStatus {
    NotFlagged = 0,
    Flagged = 1,
    Complete = 2,
}
 enum ConversationQueryTraversal {
    Shallow = 0,
    Deep = 1,
}
 enum ConversationSortOrder {
    TreeOrderAscending = 0,
    TreeOrderDescending = 1,
    DateOrderAscending = 2,
    DateOrderDescending = 3,
}
 enum DateTimePrecision {
    Default = 0,
    Seconds = 1,
    Milliseconds = 2,
}
 enum DayOfTheWeek {
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
}
 enum DayOfTheWeekIndex {
    First = 0,
    Second = 1,
    Third = 2,
    Fourth = 3,
    Last = 4,
}
/**
 * Enum for the day of the week. System.DayOfWeek
 */
 enum DayOfWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
}
 enum DefaultExtendedPropertySet {
    Meeting = 0,
    Appointment = 1,
    Common = 2,
    PublicStrings = 3,
    Address = 4,
    InternetHeaders = 5,
    CalendarAssistant = 6,
    UnifiedMessaging = 7,
    Task = 8,
}
 enum DelegateFolderPermissionLevel {
    None = 0,
    Editor = 1,
    Reviewer = 2,
    Author = 3,
    Custom = 4,
}
 enum DeleteMode {
    HardDelete = 0,
    SoftDelete = 1,
    MoveToDeletedItems = 2,
}
 enum DictionaryKeyType {
    EmailAddressKey = 0,
    ImAddressKey = 1,
    PhoneNumberKey = 2,
    PhysicalAddressKey = 3,
}
 enum DisableReasonType {
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
}
 enum DomainSettingName {
    ExternalEwsUrl = 0,
    ExternalEwsVersion = 1,
}
 enum EffectiveRights {
    None = 0,
    CreateAssociated = 1,
    CreateContents = 2,
    CreateHierarchy = 4,
    Delete = 8,
    Modify = 16,
    Read = 32,
    ViewPrivateItems = 64,
}
 enum ElcFolderType {
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
}
 enum EmailAddressKey {
    EmailAddress1 = 0,
    EmailAddress2 = 1,
    EmailAddress3 = 2,
}
 enum EmailPosition {
    LatestReply = 0,
    Other = 1,
    Subject = 2,
    Signature = 3,
}
/**custom created to simplify creation of above Enum(s) to ExchangeVersion mapping in EwsUtil, There is no c# like Attribute typesystem and reflection available */
 enum EnumToExchangeVersionMappingHelper {
    WellKnownFolderName = 0,
    /**Item Traversal */
    ItemTraversal = 1,
    ConversationQueryTraversal = 2,
    FileAsMapping = 3,
    EventType = 4,
    MeetingRequestsDeliveryScope = 5,
    ViewFilter = 6,
    MailboxType = 7,
}
/**custom created to simplify creation of above Enum(s) to ExchangeVersion mapping in EwsUtil, There is no c# like Attribute typesystem and reflection available */
 enum EnumToSchemaMappingHelper {
    WellKnownFolderName = 0,
    /**Item Traversal */
    ItemTraversal = 1,
    ConversationQueryTraversal = 2,
    FileAsMapping = 3,
    EventType = 4,
    MeetingRequestsDeliveryScope = 5,
    ViewFilter = 6,
    MailboxType = 7,
}
 enum EventType {
    Status = 0,
    NewMail = 1,
    Deleted = 2,
    Modified = 3,
    Moved = 4,
    Copied = 5,
    Created = 6,
    FreeBusyChanged = 7,
}
/**
 * Defines the each available Exchange release version
 */
 enum ExchangeVersion {
    /**
     * Microsoft Exchange 2007, Service Pack 1
     */
    Exchange2007_SP1 = 0,
    /**
     * Microsoft Exchange 2010
     */
    Exchange2010 = 1,
    /**
     * Microsoft Exchange 2010, Service Pack 1
     */
    Exchange2010_SP1 = 2,
    /**
     * Microsoft Exchange 2010, Service Pack 2
     */
    Exchange2010_SP2 = 3,
    /**
     * Microsoft Exchange 2013
     */
    Exchange2013 = 4,
    /**
     * Microsoft Exchange 2013 SP1
     */
    Exchange2013_SP1 = 5,
    /**
     * Microsoft Exchange 2015 (aka Exchange 2016)
     */
    Exchange2015 = 6,
    /**
     * Microsoft Exchange 2016
     */
    Exchange2016 = 7,
    /**
     * Functionality starting 10/05/2015
     */
    V2015_10_05 = 8,
    /** internal tracking of any version not updated in **ews-javascript-api** */
    Exchange_Version_Not_Updated = 15000,
}
 enum ExtensionInstallScope {
    None = 0,
    User = 1,
    Organization = 2,
    Default = 3,
}
 enum ExtensionType {
    Default = 0,
    Private = 1,
    MarketPlace = 2,
}
 enum FileAsMapping {
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
}
 enum FlaggedForAction {
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
}
 enum FolderPermissionLevel {
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
}
 enum FolderPermissionReadAccess {
    None = 0,
    TimeOnly = 1,
    TimeAndSubjectAndLocation = 2,
    FullDetails = 3,
}
 enum FolderTraversal {
    Shallow = 0,
    Deep = 1,
    SoftDeleted = 2,
}
 enum FreeBusyViewType {
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
}
 enum HoldAction {
    Create = 0,
    Update = 1,
    Remove = 2,
}
 enum HoldStatus {
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
}
 enum IdFormat {
    EwsLegacyId = 0,
    EwsId = 1,
    EntryId = 2,
    HexEntryId = 3,
    StoreId = 4,
    OwaId = 5,
}
 enum ImAddressKey {
    ImAddress1 = 0,
    ImAddress2 = 1,
    ImAddress3 = 2,
}
 enum Importance {
    Low = 0,
    Normal = 1,
    High = 2,
}
 enum ItemFlagStatus {
    NotFlagged = 0,
    Flagged = 1,
    Complete = 2,
}
 enum ItemIndexError {
    None = 0,
    GenericError = 1,
    Timeout = 2,
    StaleEvent = 3,
    MailboxOffline = 4,
    AttachmentLimitReached = 5,
    MarsWriterTruncation = 6,
}
 enum ItemTraversal {
    Shallow = 0,
    SoftDeleted = 1,
    Associated = 2,
}
 enum JsonTokenType {
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
}
 enum LegacyFreeBusyStatus {
    Free = 0,
    Tentative = 1,
    Busy = 2,
    OOF = 3,
    WorkingElsewhere = 4,
    NoData = 5,
}
 enum LobbyBypass {
    Disabled = 0,
    EnabledForGatewayParticipants = 1,
}
 enum LocationSource {
    None = 0,
    LocationServices = 1,
    PhonebookServices = 2,
    Device = 3,
    Contact = 4,
    Resource = 5,
}
 enum LogicalOperator {
    And = 0,
    Or = 1,
}
 enum MailboxSearchLocation {
    PrimaryOnly = 0,
    ArchiveOnly = 1,
    All = 2,
}
 enum MailboxSearchScopeType {
    LegacyExchangeDN = 0,
    PublicFolder = 1,
    Recipient = 2,
    MailboxGuid = 3,
    AllPublicFolders = 4,
    AllMailboxes = 5,
    SavedSearchId = 6,
    AutoDetect = 7,
}
/**
 * Defines the type of an EmailAddress object.
 */
 enum MailboxType {
    /**
     * Unknown mailbox type (Exchange 2010 or later).
     */
    Unknown = 0,
    /**
     * The EmailAddress represents a one-off contact (Exchange 2010 or later).
     */
    OneOff = 1,
    /**
     * The EmailAddress represents a mailbox.
     */
    Mailbox = 2,
    /**
     * The EmailAddress represents a public folder.
     */
    PublicFolder = 3,
    /**
     * The EmailAddress represents a Public Group.
     */
    PublicGroup = 4,
    /**
     * The EmailAddress represents a Contact Group.
     */
    ContactGroup = 5,
    /**
     * The EmailAddress represents a store contact or AD mail contact.
     */
    Contact = 6,
    /**
     * The EmailAddress represents a GroupMailbox
     */
    GroupMailbox = 7,
}
/**
 * This is to workaround **EwsEnumAttribute**
 */
 class MailboxTypeParser {
    static ToString(value: MailboxType): string;
    static FromString(value: string): MailboxType;
}
 enum MapiPropertyType {
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
}
/** shim to store type of data in MapiTypeConverterMapEntry */
 enum MapiTypeConverterTypeSystem {
    boolean = 0,
    string = 1,
    number = 2,
    DateTime = 3,
    guid = 4,
    byteArray = 5,
}
 enum MeetingAttendeeType {
    Organizer = 0,
    Required = 1,
    Optional = 2,
    Room = 3,
    Resource = 4,
}
 enum MeetingRequestType {
    None = 0,
    FullUpdate = 1,
    InformationalUpdate = 2,
    NewMeetingRequest = 3,
    Outdated = 4,
    SilentUpdate = 5,
    PrincipalWantsCopy = 6,
}
 enum MeetingRequestsDeliveryScope {
    DelegatesOnly = 0,
    DelegatesAndMe = 1,
    DelegatesAndSendInformationToMe = 2,
    NoForward = 3,
}
 enum MeetingResponseType {
    Unknown = 0,
    Organizer = 1,
    Tentative = 2,
    Accept = 3,
    Decline = 4,
    NoResponseReceived = 5,
}
 enum MemberStatus {
    Unrecognized = 0,
    Normal = 1,
    Demoted = 2,
}
 enum MessageDisposition {
    SaveOnly = 0,
    SendAndSaveCopy = 1,
    SendOnly = 2,
}
 enum Month {
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
}
 enum OffsetBasePoint {
    Beginning = 0,
    End = 1,
}
 enum OnlineMeetingAccessLevel {
    Locked = 0,
    Invited = 1,
    Internal = 2,
    Everyone = 3,
}
 enum OofExternalAudience {
    None = 0,
    Known = 1,
    All = 2,
}
 enum OofState {
    Disabled = 0,
    Enabled = 1,
    Scheduled = 2,
}
 enum OutlookProtocolType {
    Rpc = 0,
    RpcOverHttp = 1,
    Web = 2,
    Unknown = 3,
}
 enum PermissionScope {
    None = 0,
    Owned = 1,
    All = 2,
}
 enum PhoneCallState {
    Idle = 0,
    Connecting = 1,
    Alerted = 2,
    Connected = 3,
    Disconnected = 4,
    Incoming = 5,
    Transferring = 6,
    Forwarding = 7,
}
 enum PhoneNumberKey {
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
}
 enum PhysicalAddressIndex {
    None = 0,
    Business = 1,
    Home = 2,
    Other = 3,
}
 enum PhysicalAddressKey {
    Business = 0,
    Home = 1,
    Other = 2,
}
 enum Presenters {
    Disabled = 0,
    Internal = 1,
    Everyone = 2,
}
 enum PreviewItemBaseShape {
    Default = 0,
    Compact = 1,
}
 enum PrivilegedLogonType {
    Admin = 0,
    SystemService = 1,
}
 enum PrivilegedUserIdBudgetType {
    /** */
    Default = 0,
    RunningAsBackgroundLoad = 1,
    Unthrottled = 2,
}
 enum PropertyDefinitionFlags {
    None = 0,
    AutoInstantiateOnRead = 1,
    ReuseInstance = 2,
    CanSet = 4,
    CanUpdate = 8,
    CanDelete = 16,
    CanFind = 32,
    MustBeExplicitlyLoaded = 64,
    UpdateCollectionItems = 128,
}
 enum RenderingMode {
    Xml = 0,
    JSON = 1,
}
 enum ResolveNameSearchLocation {
    DirectoryOnly = 0,
    DirectoryThenContacts = 1,
    ContactsOnly = 2,
    ContactsThenDirectory = 3,
}
 enum ResponseActions {
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
}
 enum ResponseMessageType {
    Reply = 0,
    ReplyAll = 1,
    Forward = 2,
}
 enum RetentionActionType {
    None = 0,
    MoveToDeletedItems = 1,
    MoveToFolder = 2,
    DeleteAndAllowRecovery = 3,
    PermanentlyDelete = 4,
    MarkAsPastRetentionLimit = 5,
    MoveToArchive = 6,
}
 enum RetentionType {
    Delete = 0,
    Archive = 1,
}
 enum RuleErrorCode {
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
}
 enum RuleProperty {
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
}
 enum SearchFolderTraversal {
    Shallow = 0,
    Deep = 1,
}
 enum SearchPageDirection {
    Next = 0,
    Previous = 1,
}
 enum SearchResultType {
    StatisticsOnly = 0,
    PreviewOnly = 1,
}
 enum SendCancellationsMode {
    SendToNone = 0,
    SendOnlyToAll = 1,
    SendToAllAndSaveCopy = 2,
}
 enum SendInvitationsMode {
    SendToNone = 0,
    SendOnlyToAll = 1,
    SendToAllAndSaveCopy = 2,
}
 enum SendInvitationsOrCancellationsMode {
    SendToNone = 0,
    SendOnlyToAll = 1,
    SendOnlyToChanged = 2,
    SendToAllAndSaveCopy = 3,
    SendToChangedAndSaveCopy = 4,
}
 enum SendPrompt {
    None = 0,
    Send = 1,
    VotingOption = 2,
}
 enum Sensitivity {
    Normal = 0,
    Personal = 1,
    Private = 2,
    Confidential = 3,
}
/**
 * Defines the error codes that can be returned by the Exchange Web Services.
 */
 enum ServiceError {
    /**
     * NoError. Indicates that an error has not occurred.
     */
    NoError = 0,
    /**
     * Access is denied. Check credentials and try again.
     */
    ErrorAccessDenied = 1,
    /**
     * The impersonation authentication header should not be included.
     */
    ErrorAccessModeSpecified = 2,
    /**
     * Account is disabled. Contact the account administrator.
     */
    ErrorAccountDisabled = 3,
    /**
     * Failed to add one or more delegates.
     */
    ErrorAddDelegatesFailed = 4,
    /**
     * ErrorAddressSpaceNotFound
     */
    ErrorAddressSpaceNotFound = 5,
    /**
     * Active Directory operation did not succeed. Try again later.
     */
    ErrorADOperation = 6,
    /**
     * Invalid search criteria.
     */
    ErrorADSessionFilter = 7,
    /**
     * Active Directory is unavailable. Try again later.
     */
    ErrorADUnavailable = 8,
    /**
     * AffectedTaskOccurrences attribute is required for Task items.
     */
    ErrorAffectedTaskOccurrencesRequired = 9,
    /**
     * The conversation action alwayscategorize or alwaysmove or alwaysdelete has failed.
     */
    ErrorApplyConversationActionFailed = 10,
    /**
     * Archive mailbox not enabled
     */
    ErrorArchiveMailboxNotEnabled = 11,
    /**
     * Unable to create the folder in archive mailbox to which the items will be archived
     */
    ErrorArchiveFolderPathCreation = 12,
    /**
     * Unable to discover archive mailbox
     */
    ErrorArchiveMailboxServiceDiscoveryFailed = 13,
    /**
     * The item has attachment at more than the maximum supported nest level.
     */
    ErrorAttachmentNestLevelLimitExceeded = 14,
    /**
     * The file attachment exceeds the maximum supported size.
     */
    ErrorAttachmentSizeLimitExceeded = 15,
    /**
     * ErrorAutoDiscoverFailed
     */
    ErrorAutoDiscoverFailed = 16,
    /**
     * ErrorAvailabilityConfigNotFound
     */
    ErrorAvailabilityConfigNotFound = 17,
    /**
     * Item was not processed as a result of a previous error.
     */
    ErrorBatchProcessingStopped = 18,
    /**
     * Can not move or copy a calendar occurrence.
     */
    ErrorCalendarCannotMoveOrCopyOccurrence = 19,
    /**
     * Cannot update calendar item that has already been deleted.
     */
    ErrorCalendarCannotUpdateDeletedItem = 20,
    /**
     * The Id specified does not represent an occurrence.
     */
    ErrorCalendarCannotUseIdForOccurrenceId = 21,
    /**
     * The specified Id does not represent a recurring master item.
     */
    ErrorCalendarCannotUseIdForRecurringMasterId = 22,
    /**
     * Calendar item duration is too long.
     */
    ErrorCalendarDurationIsTooLong = 23,
    /**
     * EndDate is earlier than StartDate
     */
    ErrorCalendarEndDateIsEarlierThanStartDate = 24,
    /**
     * Cannot request CalendarView for the folder.
     */
    ErrorCalendarFolderIsInvalidForCalendarView = 25,
    /**
     * Attribute has an invalid value.
     */
    ErrorCalendarInvalidAttributeValue = 26,
    /**
     * The value of the DaysOfWeek property is not valid for time change pattern of time zone.
     */
    ErrorCalendarInvalidDayForTimeChangePattern = 27,
    /**
     * The value of the DaysOfWeek property is invalid for a weekly recurrence.
     */
    ErrorCalendarInvalidDayForWeeklyRecurrence = 28,
    /**
     * The property has invalid state.
     */
    ErrorCalendarInvalidPropertyState = 29,
    /**
     * The property has an invalid value.
     */
    ErrorCalendarInvalidPropertyValue = 30,
    /**
     * The recurrence is invalid.
     */
    ErrorCalendarInvalidRecurrence = 31,
    /**
     * TimeZone is invalid.
     */
    ErrorCalendarInvalidTimeZone = 32,
    /**
     * A meeting that's been canceled can't be accepted.
     */
    ErrorCalendarIsCancelledForAccept = 33,
    /**
     * A canceled meeting can't be declined.
     */
    ErrorCalendarIsCancelledForDecline = 34,
    /**
     * A canceled meeting can't be removed.
     */
    ErrorCalendarIsCancelledForRemove = 35,
    /**
     * A canceled meeting can't be accepted tentatively.
     */
    ErrorCalendarIsCancelledForTentative = 36,
    /**
     * AcceptItem action is invalid for a delegated meeting message.
     */
    ErrorCalendarIsDelegatedForAccept = 37,
    /**
     * DeclineItem operation is invalid for a delegated meeting message.
     */
    ErrorCalendarIsDelegatedForDecline = 38,
    /**
     * RemoveItem action is invalid for a delegated meeting message.
     */
    ErrorCalendarIsDelegatedForRemove = 39,
    /**
     * The TentativelyAcceptItem action isn't valid for a delegated meeting message.
     */
    ErrorCalendarIsDelegatedForTentative = 40,
    /**
     * User must be an organizer for CancelCalendarItem action.
     */
    ErrorCalendarIsNotOrganizer = 41,
    /**
     * The user is the organizer of this meeting, and cannot, therefore, accept it.
     */
    ErrorCalendarIsOrganizerForAccept = 42,
    /**
     * The user is the organizer of this meeting, and cannot, therefore, decline it.
     */
    ErrorCalendarIsOrganizerForDecline = 43,
    /**
     * The user is the organizer of this meeting, and cannot, therefore, remove it.
     */
    ErrorCalendarIsOrganizerForRemove = 44,
    /**
     * The user is the organizer of this meeting, and therefore can't tentatively accept it.
     */
    ErrorCalendarIsOrganizerForTentative = 45,
    /**
     * The meeting request is out of date. The calendar couldn't be updated.
     */
    ErrorCalendarMeetingRequestIsOutOfDate = 46,
    /**
     * Occurrence index is out of recurrence range.
     */
    ErrorCalendarOccurrenceIndexIsOutOfRecurrenceRange = 47,
    /**
     * Occurrence with this index was previously deleted from the recurrence.
     */
    ErrorCalendarOccurrenceIsDeletedFromRecurrence = 48,
    /**
     * The calendar property falls out of valid range.
     */
    ErrorCalendarOutOfRange = 49,
    /**
     * The specified view range exceeds the maximum range of two years.
     */
    ErrorCalendarViewRangeTooBig = 50,
    /**
     * Failed to get valid Active Directory information for the calling account. Confirm that it
     * is a valid Active Directory account.
     */
    ErrorCallerIsInvalidADAccount = 51,
    /**
     * Cannot archive items in Calendar, contact to task folders
     */
    ErrorCannotArchiveCalendarContactTaskFolderException = 52,
    /**
     * Cannot archive items in archive mailboxes
     */
    ErrorCannotArchiveItemsInArchiveMailbox = 53,
    /**
     * Cannot archive items in public folders
     */
    ErrorCannotArchiveItemsInPublicFolders = 54,
    /**
     * Cannot create a calendar item in a non-calendar folder.
     */
    ErrorCannotCreateCalendarItemInNonCalendarFolder = 55,
    /**
     * Cannot create a contact in a non-contact folder.
     */
    ErrorCannotCreateContactInNonContactFolder = 56,
    /**
     * Cannot create a post item in a folder that is not a mail folder.
     */
    ErrorCannotCreatePostItemInNonMailFolder = 57,
    /**
     * Cannot create a task in a non-task Folder.
     */
    ErrorCannotCreateTaskInNonTaskFolder = 58,
    /**
     * Object cannot be deleted.
     */
    ErrorCannotDeleteObject = 59,
    /**
     * Deleting a task occurrence is not permitted on non-recurring tasks, on the last
     * occurrence of a recurring task or on a regenerating task.
     */
    ErrorCannotDeleteTaskOccurrence = 60,
    /**
     * Mandatory extensions cannot be disabled by end users
     */
    ErrorCannotDisableMandatoryExtension = 61,
    /**
     * Folder cannot be emptied.
     */
    ErrorCannotEmptyFolder = 62,
    /**
     * Cannot get external ECP URL. This might happen if external ECP URL isn't configured
     */
    ErrorCannotGetExternalEcpUrl = 63,
    /**
     * Unable to read the folder path for the source folder while archiving items
     */
    ErrorCannotGetSourceFolderPath = 64,
    /**
     * The attachment could not be opened.
     */
    ErrorCannotOpenFileAttachment = 65,
    /**
     * Expected a PermissionSet but received a CalendarPermissionSet.
     */
    ErrorCannotSetCalendarPermissionOnNonCalendarFolder = 66,
    /**
     * Expected a CalendarPermissionSet but received a PermissionSet.
     */
    ErrorCannotSetNonCalendarPermissionOnCalendarFolder = 67,
    /**
     * Cannot set UnknownEntries on a PermissionSet or CalendarPermissionSet.
     */
    ErrorCannotSetPermissionUnknownEntries = 68,
    /**
     * Cannot specify search folders as source folders while archiving items
     */
    ErrorCannotSpecifySearchFolderAsSourceFolder = 69,
    /**
     * Expected an item Id but received a folder Id.
     */
    ErrorCannotUseFolderIdForItemId = 70,
    /**
     * Expected a folder Id but received an item Id.
     */
    ErrorCannotUseItemIdForFolderId = 71,
    /**
     * ChangeKey is required if overriding automatic conflict resolution.
     */
    ErrorChangeKeyRequired = 72,
    /**
     * ChangeKey is required for this operation.
     */
    ErrorChangeKeyRequiredForWriteOperations = 73,
    /**
     * ErrorClientDisconnected
     */
    ErrorClientDisconnected = 74,
    /**
     * Connection did not succeed. Try again later.
     */
    ErrorConnectionFailed = 75,
    /**
     * The Contains filter can only be used for string properties.
     */
    ErrorContainsFilterWrongType = 76,
    /**
     * Content conversion failed.
     */
    ErrorContentConversionFailed = 77,
    /**
     * Data is corrupt.
     */
    ErrorCorruptData = 78,
    /**
     * Unable to create item. The user account does not have the right to create items.
     */
    ErrorCreateItemAccessDenied = 79,
    /**
     * Failed to create one or more of the specified managed folders.
     */
    ErrorCreateManagedFolderPartialCompletion = 80,
    /**
     * Unable to create subfolder. The user account does not have the right to create
     * subfolders.
     */
    ErrorCreateSubfolderAccessDenied = 81,
    /**
     * Move and Copy operations across mailbox boundaries are not permitted.
     */
    ErrorCrossMailboxMoveCopy = 82,
    /**
     * This request isn't allowed because the Client Access server that's servicing the request
     * is in a different site than the requested resource. Use Autodiscover to find the correct
     * URL for accessing the specified resource.
     */
    ErrorCrossSiteRequest = 83,
    /**
     * Property exceeds the maximum supported size.
     */
    ErrorDataSizeLimitExceeded = 84,
    /**
     * Invalid data source operation.
     */
    ErrorDataSourceOperation = 85,
    /**
     * The user is already a delegate for the mailbox.
     */
    ErrorDelegateAlreadyExists = 86,
    /**
     * This is an invalid operation. Cannot add owner as delegate.
     */
    ErrorDelegateCannotAddOwner = 87,
    /**
     * Delegate is not configured properly.
     */
    ErrorDelegateMissingConfiguration = 88,
    /**
     * The delegate does not map to a user in the Active Directory.
     */
    ErrorDelegateNoUser = 89,
    /**
     * Cannot add the delegate user. Failed to validate the changes.
     */
    ErrorDelegateValidationFailed = 90,
    /**
     * Distinguished folders cannot be deleted.
     */
    ErrorDeleteDistinguishedFolder = 91,
    /**
     * The deletion failed.
     */
    ErrorDeleteItemsFailed = 92,
    /**
     * DistinguishedUser should not be specified for a Delegate User.
     */
    ErrorDistinguishedUserNotSupported = 93,
    /**
     * The group member doesn't exist.
     */
    ErrorDistributionListMemberNotExist = 94,
    /**
     * The specified list of managed folder names contains duplicate entries.
     */
    ErrorDuplicateInputFolderNames = 95,
    /**
     * A duplicate exchange legacy DN.
     */
    ErrorDuplicateLegacyDistinguishedName = 96,
    /**
     * A duplicate SOAP header was received.
     */
    ErrorDuplicateSOAPHeader = 97,
    /**
     * The specified permission set contains duplicate UserIds.
     */
    ErrorDuplicateUserIdsSpecified = 98,
    /**
     * The email address associated with a folder Id does not match the mailbox you are
     * operating on.
     */
    ErrorEmailAddressMismatch = 99,
    /**
     * The watermark used for creating this subscription was not found.
     */
    ErrorEventNotFound = 100,
    /**
     * You have exceeded the available concurrent connections for your account.  Try again once
     * your other requests have completed.
     */
    ErrorExceededConnectionCount = 101,
    /**
     * You have exceeded the maximum number of objects that can be returned for the find
     * operation. Use paging to reduce the result size and try your request again.
     */
    ErrorExceededFindCountLimit = 102,
    /**
     * You have exceeded the available subscriptions for your account.  Remove unnecessary
     * subscriptions and try your request again.
     */
    ErrorExceededSubscriptionCount = 103,
    /**
     * Subscription information is not available. Subscription is expired.
     */
    ErrorExpiredSubscription = 104,
    /**
     * Extension with id specified was not found
     */
    ErrorExtensionNotFound = 105,
    /**
     * The folder is corrupt.
     */
    ErrorFolderCorrupt = 106,
    /**
     * A folder with the specified name already exists.
     */
    ErrorFolderExists = 107,
    /**
     * The specified folder could not be found in the store.
     */
    ErrorFolderNotFound = 108,
    /**
     * ErrorFolderPropertRequestFailed
     */
    ErrorFolderPropertRequestFailed = 109,
    /**
     * The folder save operation did not succeed.
     */
    ErrorFolderSave = 110,
    /**
     * The save operation failed or partially succeeded.
     */
    ErrorFolderSaveFailed = 111,
    /**
     * The folder save operation failed due to invalid property values.
     */
    ErrorFolderSavePropertyError = 112,
    /**
     * ErrorFreeBusyDLLimitReached
     */
    ErrorFreeBusyDLLimitReached = 113,
    /**
     * ErrorFreeBusyGenerationFailed
     */
    ErrorFreeBusyGenerationFailed = 114,
    /**
     * ErrorGetServerSecurityDescriptorFailed
     */
    ErrorGetServerSecurityDescriptorFailed = 115,
    /**
     * ErrorImContactLimitReached
     */
    ErrorImContactLimitReached = 116,
    /**
     * ErrorImGroupDisplayNameAlreadyExists
     */
    ErrorImGroupDisplayNameAlreadyExists = 117,
    /**
     * ErrorImGroupLimitReached
     */
    ErrorImGroupLimitReached = 118,
    /**
     * The account does not have permission to impersonate the requested user.
     */
    ErrorImpersonateUserDenied = 119,
    /**
     * ErrorImpersonationDenied
     */
    ErrorImpersonationDenied = 120,
    /**
     * Impersonation failed.
     */
    ErrorImpersonationFailed = 121,
    /**
     * ErrorInboxRulesValidationError
     */
    ErrorInboxRulesValidationError = 122,
    /**
     * The request is valid but does not specify the correct server version in the
     * RequestServerVersion SOAP header.  Ensure that the RequestServerVersion SOAP header is
     * set with the correct RequestServerVersionValue.
     */
    ErrorIncorrectSchemaVersion = 123,
    /**
     * An object within a change description must contain one and only one property to modify.
     */
    ErrorIncorrectUpdatePropertyCount = 124,
    /**
     * ErrorIndividualMailboxLimitReached
     */
    ErrorIndividualMailboxLimitReached = 125,
    /**
     * Resources are unavailable. Try again later.
     */
    ErrorInsufficientResources = 126,
    /**
     * An internal server error occurred. The operation failed.
     */
    ErrorInternalServerError = 127,
    /**
     * An internal server error occurred. Try again later.
     */
    ErrorInternalServerTransientError = 128,
    /**
     * ErrorInvalidAccessLevel
     */
    ErrorInvalidAccessLevel = 129,
    /**
     * ErrorInvalidArgument
     */
    ErrorInvalidArgument = 130,
    /**
     * The specified attachment Id is invalid.
     */
    ErrorInvalidAttachmentId = 131,
    /**
     * Attachment subfilters must have a single TextFilter therein.
     */
    ErrorInvalidAttachmentSubfilter = 132,
    /**
     * Attachment subfilters must have a single TextFilter on the display name only.
     */
    ErrorInvalidAttachmentSubfilterTextFilter = 133,
    /**
     * ErrorInvalidAuthorizationContext
     */
    ErrorInvalidAuthorizationContext = 134,
    /**
     * The change key is invalid.
     */
    ErrorInvalidChangeKey = 135,
    /**
     * ErrorInvalidClientSecurityContext
     */
    ErrorInvalidClientSecurityContext = 136,
    /**
     * CompleteDate cannot be set to a date in the future.
     */
    ErrorInvalidCompleteDate = 137,
    /**
     * The e-mail address that was supplied isn't valid.
     */
    ErrorInvalidContactEmailAddress = 138,
    /**
     * The e-mail index supplied isn't valid.
     */
    ErrorInvalidContactEmailIndex = 139,
    /**
     * ErrorInvalidCrossForestCredentials
     */
    ErrorInvalidCrossForestCredentials = 140,
    /**
     * Invalid Delegate Folder Permission.
     */
    ErrorInvalidDelegatePermission = 141,
    /**
     * One or more UserId parameters are invalid. Make sure that the PrimarySmtpAddress, Sid and
     * DisplayName properties refer to the same user when specified.
     */
    ErrorInvalidDelegateUserId = 142,
    /**
     * An ExchangeImpersonation SOAP header must contain a user principal name, user SID, or
     * primary SMTP address.
     */
    ErrorInvalidExchangeImpersonationHeaderData = 143,
    /**
     * Second operand in Excludes expression must be uint compatible.
     */
    ErrorInvalidExcludesRestriction = 144,
    /**
     * FieldURI can only be used in Contains expressions.
     */
    ErrorInvalidExpressionTypeForSubFilter = 145,
    /**
     * The extended property attribute combination is invalid.
     */
    ErrorInvalidExtendedProperty = 146,
    /**
     * The extended property value is inconsistent with its type.
     */
    ErrorInvalidExtendedPropertyValue = 147,
    /**
     * The original sender of the message (initiator field in the sharing metadata) is not
     * valid.
     */
    ErrorInvalidExternalSharingInitiator = 148,
    /**
     * The sharing message is not intended for this caller.
     */
    ErrorInvalidExternalSharingSubscriber = 149,
    /**
     * The organization is either not federated, or it's configured incorrectly.
     */
    ErrorInvalidFederatedOrganizationId = 150,
    /**
     * Folder Id is invalid.
     */
    ErrorInvalidFolderId = 151,
    /**
     * ErrorInvalidFolderTypeForOperation
     */
    ErrorInvalidFolderTypeForOperation = 152,
    /**
     * Invalid fractional paging offset values.
     */
    ErrorInvalidFractionalPagingParameters = 153,
    /**
     * ErrorInvalidFreeBusyViewType
     */
    ErrorInvalidFreeBusyViewType = 154,
    /**
     * Either DataType or SharedFolderId must be specified, but not both.
     */
    ErrorInvalidGetSharingFolderRequest = 155,
    /**
     * The Id is invalid.
     */
    ErrorInvalidId = 156,
    /**
     * The Im Contact id was invalid.
     */
    ErrorInvalidImContactId = 157,
    /**
     * The Im Distribution Group Smtp Address was invalid.
     */
    ErrorInvalidImDistributionGroupSmtpAddress = 158,
    /**
     * The Im Contact id was invalid.
     */
    ErrorInvalidImGroupId = 159,
    /**
     * Id must be non-empty.
     */
    ErrorInvalidIdEmpty = 160,
    /**
     * Id is malformed.
     */
    ErrorInvalidIdMalformed = 161,
    /**
     * The EWS Id is in EwsLegacyId format which is not supported by the Exchange version
     * specified by your request. Please use the ConvertId method to convert from EwsLegacyId
     * to EwsId format.
     */
    ErrorInvalidIdMalformedEwsLegacyIdFormat = 162,
    /**
     * Moniker exceeded allowable length.
     */
    ErrorInvalidIdMonikerTooLong = 163,
    /**
     * The Id does not represent an item attachment.
     */
    ErrorInvalidIdNotAnItemAttachmentId = 164,
    /**
     * ResolveNames returned an invalid Id.
     */
    ErrorInvalidIdReturnedByResolveNames = 165,
    /**
     * Id exceeded allowable length.
     */
    ErrorInvalidIdStoreObjectIdTooLong = 166,
    /**
     * Too many attachment levels.
     */
    ErrorInvalidIdTooManyAttachmentLevels = 167,
    /**
     * The Id Xml is invalid.
     */
    ErrorInvalidIdXml = 168,
    /**
     * The specified indexed paging values are invalid.
     */
    ErrorInvalidIndexedPagingParameters = 169,
    /**
     * Only one child node is allowed when setting an Internet Message Header.
     */
    ErrorInvalidInternetHeaderChildNodes = 170,
    /**
     * Item type is invalid for AcceptItem action.
     */
    ErrorInvalidItemForOperationAcceptItem = 171,
    /**
     * Item type is invalid for ArchiveItem action.
     */
    ErrorInvalidItemForOperationArchiveItem = 172,
    /**
     * Item type is invalid for CancelCalendarItem action.
     */
    ErrorInvalidItemForOperationCancelItem = 173,
    /**
     * Item type is invalid for CreateItem operation.
     */
    ErrorInvalidItemForOperationCreateItem = 174,
    /**
     * Item type is invalid for CreateItemAttachment operation.
     */
    ErrorInvalidItemForOperationCreateItemAttachment = 175,
    /**
     * Item type is invalid for DeclineItem operation.
     */
    ErrorInvalidItemForOperationDeclineItem = 176,
    /**
     * ExpandDL operation does not support this item type.
     */
    ErrorInvalidItemForOperationExpandDL = 177,
    /**
     * Item type is invalid for RemoveItem operation.
     */
    ErrorInvalidItemForOperationRemoveItem = 178,
    /**
     * Item type is invalid for SendItem operation.
     */
    ErrorInvalidItemForOperationSendItem = 179,
    /**
     * The item of this type is invalid for TentativelyAcceptItem action.
     */
    ErrorInvalidItemForOperationTentative = 180,
    /**
     * The logon type isn't valid.
     */
    ErrorInvalidLogonType = 181,
    /**
     * Mailbox is invalid. Verify the specified Mailbox property.
     */
    ErrorInvalidMailbox = 182,
    /**
     * The Managed Folder property is corrupt or otherwise invalid.
     */
    ErrorInvalidManagedFolderProperty = 183,
    /**
     * The managed folder has an invalid quota.
     */
    ErrorInvalidManagedFolderQuota = 184,
    /**
     * The managed folder has an invalid storage limit value.
     */
    ErrorInvalidManagedFolderSize = 185,
    /**
     * ErrorInvalidMergedFreeBusyInterval
     */
    ErrorInvalidMergedFreeBusyInterval = 186,
    /**
     * The specified value is not a valid name for name resolution.
     */
    ErrorInvalidNameForNameResolution = 187,
    /**
     * ErrorInvalidNetworkServiceContext
     */
    ErrorInvalidNetworkServiceContext = 188,
    /**
     * ErrorInvalidOofParameter
     */
    ErrorInvalidOofParameter = 189,
    /**
     * ErrorInvalidOperation
     */
    ErrorInvalidOperation = 190,
    /**
     * ErrorInvalidOrganizationRelationshipForFreeBusy
     */
    ErrorInvalidOrganizationRelationshipForFreeBusy = 191,
    /**
     * MaxEntriesReturned must be greater than zero.
     */
    ErrorInvalidPagingMaxRows = 192,
    /**
     * Cannot create a subfolder within a SearchFolder.
     */
    ErrorInvalidParentFolder = 193,
    /**
     * PercentComplete must be an integer between 0 and 100.
     */
    ErrorInvalidPercentCompleteValue = 194,
    /**
     * The permission settings were not valid.
     */
    ErrorInvalidPermissionSettings = 195,
    /**
     * The phone call ID isn't valid.
     */
    ErrorInvalidPhoneCallId = 196,
    /**
     * The phone number isn't valid.
     */
    ErrorInvalidPhoneNumber = 197,
    /**
     * The append action is not supported for this property.
     */
    ErrorInvalidPropertyAppend = 198,
    /**
     * The delete action is not supported for this property.
     */
    ErrorInvalidPropertyDelete = 199,
    /**
     * Property cannot be used in Exists expression.  Use IsEqualTo instead.
     */
    ErrorInvalidPropertyForExists = 200,
    /**
     * Property is not valid for this operation.
     */
    ErrorInvalidPropertyForOperation = 201,
    /**
     * Property is not valid for this object type.
     */
    ErrorInvalidPropertyRequest = 202,
    /**
     * Set action is invalid for property.
     */
    ErrorInvalidPropertySet = 203,
    /**
     * Update operation is invalid for property of a sent message.
     */
    ErrorInvalidPropertyUpdateSentMessage = 204,
    /**
     * The proxy security context is invalid.
     */
    ErrorInvalidProxySecurityContext = 205,
    /**
     * SubscriptionId is invalid. Subscription is not a pull subscription.
     */
    ErrorInvalidPullSubscriptionId = 206,
    /**
     * URL specified for push subscription is invalid.
     */
    ErrorInvalidPushSubscriptionUrl = 207,
    /**
     * One or more recipients are invalid.
     */
    ErrorInvalidRecipients = 208,
    /**
     * Recipient subfilters are only supported when there are two expressions within a single
     * AND filter.
     */
    ErrorInvalidRecipientSubfilter = 209,
    /**
     * Recipient subfilter must have a comparison filter that tests equality to recipient type
     * or attendee type.
     */
    ErrorInvalidRecipientSubfilterComparison = 210,
    /**
     * Recipient subfilters must have a text filter and a comparison filter in that order.
     */
    ErrorInvalidRecipientSubfilterOrder = 211,
    /**
     * Recipient subfilter must have a TextFilter on the SMTP address only.
     */
    ErrorInvalidRecipientSubfilterTextFilter = 212,
    /**
     * The reference item does not support the requested operation.
     */
    ErrorInvalidReferenceItem = 213,
    /**
     * The request is invalid.
     */
    ErrorInvalidRequest = 214,
    /**
     * The restriction is invalid.
     */
    ErrorInvalidRestriction = 215,
    /**
     * ErrorInvalidRetentionIdTagTypeMismatch.
     */
    ErrorInvalidRetentionTagTypeMismatch = 216,
    /**
     * ErrorInvalidRetentionTagInvisible.
     */
    ErrorInvalidRetentionTagInvisible = 217,
    /**
     * ErrorInvalidRetentionTagInheritance.
     */
    ErrorInvalidRetentionTagInheritance = 218,
    /**
     * ErrorInvalidRetentionTagIdGuid.
     */
    ErrorInvalidRetentionTagIdGuid = 219,
    /**
     * The routing type format is invalid.
     */
    ErrorInvalidRoutingType = 220,
    /**
     * ErrorInvalidScheduledOofDuration
     */
    ErrorInvalidScheduledOofDuration = 221,
    /**
     * The mailbox that was requested doesn't support the specified RequestServerVersion.
     */
    ErrorInvalidSchemaVersionForMailboxVersion = 222,
    /**
     * ErrorInvalidSecurityDescriptor
     */
    ErrorInvalidSecurityDescriptor = 223,
    /**
     * Invalid combination of SaveItemToFolder attribute and SavedItemFolderId element.
     */
    ErrorInvalidSendItemSaveSettings = 224,
    /**
     * Invalid serialized access token.
     */
    ErrorInvalidSerializedAccessToken = 225,
    /**
     * The specified server version is invalid.
     */
    ErrorInvalidServerVersion = 226,
    /**
     * The sharing message metadata is not valid.
     */
    ErrorInvalidSharingData = 227,
    /**
     * The sharing message is not valid.
     */
    ErrorInvalidSharingMessage = 228,
    /**
     * A SID with an invalid format was encountered.
     */
    ErrorInvalidSid = 229,
    /**
     * The SIP address isn't valid.
     */
    ErrorInvalidSIPUri = 230,
    /**
     * The SMTP address format is invalid.
     */
    ErrorInvalidSmtpAddress = 231,
    /**
     * Invalid subFilterType.
     */
    ErrorInvalidSubfilterType = 232,
    /**
     * SubFilterType is not attendee type.
     */
    ErrorInvalidSubfilterTypeNotAttendeeType = 233,
    /**
     * SubFilterType is not recipient type.
     */
    ErrorInvalidSubfilterTypeNotRecipientType = 234,
    /**
     * Subscription is invalid.
     */
    ErrorInvalidSubscription = 235,
    /**
     * A subscription can only be established on a single public folder or on folders from a
     * single mailbox.
     */
    ErrorInvalidSubscriptionRequest = 236,
    /**
     * Synchronization state data is corrupt or otherwise invalid.
     */
    ErrorInvalidSyncStateData = 237,
    /**
     * ErrorInvalidTimeInterval
     */
    ErrorInvalidTimeInterval = 238,
    /**
     * A UserId was not valid.
     */
    ErrorInvalidUserInfo = 239,
    /**
     * ErrorInvalidUserOofSettings
     */
    ErrorInvalidUserOofSettings = 240,
    /**
     * The impersonation principal name is invalid.
     */
    ErrorInvalidUserPrincipalName = 241,
    /**
     * The user SID is invalid or does not map to a user in the Active Directory.
     */
    ErrorInvalidUserSid = 242,
    /**
     * ErrorInvalidUserSidMissingUPN
     */
    ErrorInvalidUserSidMissingUPN = 243,
    /**
     * The specified value is invalid for property.
     */
    ErrorInvalidValueForProperty = 244,
    /**
     * The watermark is invalid.
     */
    ErrorInvalidWatermark = 245,
    /**
     * A valid IP gateway couldn't be found.
     */
    ErrorIPGatewayNotFound = 246,
    /**
     * The send or update operation could not be performed because the change key passed in the
     * request does not match the current change key for the item.
     */
    ErrorIrresolvableConflict = 247,
    /**
     * The item is corrupt.
     */
    ErrorItemCorrupt = 248,
    /**
     * The specified object was not found in the store.
     */
    ErrorItemNotFound = 249,
    /**
     * One or more of the properties requested for this item could not be retrieved.
     */
    ErrorItemPropertyRequestFailed = 250,
    /**
     * The item save operation did not succeed.
     */
    ErrorItemSave = 251,
    /**
     * Item save operation did not succeed.
     */
    ErrorItemSavePropertyError = 252,
    /**
     * ErrorLegacyMailboxFreeBusyViewTypeNotMerged
     */
    ErrorLegacyMailboxFreeBusyViewTypeNotMerged = 253,
    /**
     * ErrorLocalServerObjectNotFound
     */
    ErrorLocalServerObjectNotFound = 254,
    /**
     * ErrorLogonAsNetworkServiceFailed
     */
    ErrorLogonAsNetworkServiceFailed = 255,
    /**
     * Unable to access an account or mailbox.
     */
    ErrorMailboxConfiguration = 256,
    /**
     * ErrorMailboxDataArrayEmpty
     */
    ErrorMailboxDataArrayEmpty = 257,
    /**
     * ErrorMailboxDataArrayTooBig
     */
    ErrorMailboxDataArrayTooBig = 258,
    /**
     * ErrorMailboxFailover
     */
    ErrorMailboxFailover = 259,
    /**
     * The specific mailbox hold is not found.
     */
    ErrorMailboxHoldNotFound = 260,
    /**
     * ErrorMailboxLogonFailed
     */
    ErrorMailboxLogonFailed = 261,
    /**
     * Mailbox move in progress. Try again later.
     */
    ErrorMailboxMoveInProgress = 262,
    /**
     * The mailbox database is temporarily unavailable.
     */
    ErrorMailboxStoreUnavailable = 263,
    /**
     * ErrorMailRecipientNotFound
     */
    ErrorMailRecipientNotFound = 264,
    /**
     * MailTips aren't available for your organization.
     */
    ErrorMailTipsDisabled = 265,
    /**
     * The specified Managed Folder already exists in the mailbox.
     */
    ErrorManagedFolderAlreadyExists = 266,
    /**
     * Unable to find the specified managed folder in the Active Directory.
     */
    ErrorManagedFolderNotFound = 267,
    /**
     * Failed to create or bind to the folder: Managed Folders
     */
    ErrorManagedFoldersRootFailure = 268,
    /**
     * ErrorMeetingSuggestionGenerationFailed
     */
    ErrorMeetingSuggestionGenerationFailed = 269,
    /**
     * MessageDisposition attribute is required.
     */
    ErrorMessageDispositionRequired = 270,
    /**
     * The message exceeds the maximum supported size.
     */
    ErrorMessageSizeExceeded = 271,
    /**
     * The domain specified in the tracking request doesn't exist.
     */
    ErrorMessageTrackingNoSuchDomain = 272,
    /**
     * The log search service can't track this message.
     */
    ErrorMessageTrackingPermanentError = 273,
    /**
     * The log search service isn't currently available. Please try again later.
     */
    ErrorMessageTrackingTransientError = 274,
    /**
     * MIME content conversion failed.
     */
    ErrorMimeContentConversionFailed = 275,
    /**
     * Invalid MIME content.
     */
    ErrorMimeContentInvalid = 276,
    /**
     * Invalid base64 string for MIME content.
     */
    ErrorMimeContentInvalidBase64String = 277,
    /**
     * The subscription has missed events, but will continue service on this connection.
     */
    ErrorMissedNotificationEvents = 278,
    /**
     * ErrorMissingArgument
     */
    ErrorMissingArgument = 279,
    /**
     * When making a request as an account that does not have a mailbox, you must specify the
     * mailbox primary SMTP address for any distinguished folder Ids.
     */
    ErrorMissingEmailAddress = 280,
    /**
     * When making a request with an account that does not have a mailbox, you must specify the
     * primary SMTP address for an existing mailbox.
     */
    ErrorMissingEmailAddressForManagedFolder = 281,
    /**
     * EmailAddress or ItemId must be included in the request.
     */
    ErrorMissingInformationEmailAddress = 282,
    /**
     * ReferenceItemId must be included in the request.
     */
    ErrorMissingInformationReferenceItemId = 283,
    /**
     * SharingFolderId must be included in the request.
     */
    ErrorMissingInformationSharingFolderId = 284,
    /**
     * An item must be specified when creating an item attachment.
     */
    ErrorMissingItemForCreateItemAttachment = 285,
    /**
     * The managed folder Id is missing.
     */
    ErrorMissingManagedFolderId = 286,
    /**
     * A message needs to have at least one recipient.
     */
    ErrorMissingRecipients = 287,
    /**
     * Missing information for delegate user. You must either specify a valid SMTP address or
     * SID.
     */
    ErrorMissingUserIdInformation = 288,
    /**
     * Only one access mode header may be specified.
     */
    ErrorMoreThanOneAccessModeSpecified = 289,
    /**
     * The move or copy operation failed.
     */
    ErrorMoveCopyFailed = 290,
    /**
     * Cannot move distinguished folder.
     */
    ErrorMoveDistinguishedFolder = 291,
    /**
     * ErrorMultiLegacyMailboxAccess
     */
    ErrorMultiLegacyMailboxAccess = 292,
    /**
     * Multiple results were found.
     */
    ErrorNameResolutionMultipleResults = 293,
    /**
     * User must have a mailbox for name resolution operations.
     */
    ErrorNameResolutionNoMailbox = 294,
    /**
     * No results were found.
     */
    ErrorNameResolutionNoResults = 295,
    /**
     * Another connection was opened against this subscription.
     */
    ErrorNewEventStreamConnectionOpened = 296,
    /**
     * Exchange Web Services are not currently available for this request because there are no
     * available Client Access Services Servers in the target AD Site.
     */
    ErrorNoApplicableProxyCASServersAvailable = 297,
    /**
     * ErrorNoCalendar
     */
    ErrorNoCalendar = 298,
    /**
     * Exchange Web Services aren't available for this request because there is no Client Access
     * server with the necessary configuration in the Active Directory site where the mailbox is
     * stored. If the problem continues, click Help.
     */
    ErrorNoDestinationCASDueToKerberosRequirements = 299,
    /**
     * Exchange Web Services aren't currently available for this request because an SSL
     * connection couldn't be established to the Client Access server that should be used for
     * mailbox access. If the problem continues, click Help.
     */
    ErrorNoDestinationCASDueToSSLRequirements = 300,
    /**
     * Exchange Web Services aren't currently available for this request because the Client
     * Access server used for proxying has an older version of Exchange installed than the
     * Client Access server in the mailbox Active Directory site.
     */
    ErrorNoDestinationCASDueToVersionMismatch = 301,
    /**
     * You cannot specify the FolderClass when creating a non-generic folder.
     */
    ErrorNoFolderClassOverride = 302,
    /**
     * ErrorNoFreeBusyAccess
     */
    ErrorNoFreeBusyAccess = 303,
    /**
     * Mailbox does not exist.
     */
    ErrorNonExistentMailbox = 304,
    /**
     * The primary SMTP address must be specified when referencing a mailbox.
     */
    ErrorNonPrimarySmtpAddress = 305,
    /**
     * Custom properties cannot be specified using property tags.  The GUID and Id/Name
     * combination must be used instead.
     */
    ErrorNoPropertyTagForCustomProperties = 306,
    /**
     * ErrorNoPublicFolderReplicaAvailable
     */
    ErrorNoPublicFolderReplicaAvailable = 307,
    /**
     * There are no public folder servers available.
     */
    ErrorNoPublicFolderServerAvailable = 308,
    /**
     * Exchange Web Services are not currently available for this request because none of the
     * Client Access Servers in the destination site could process the request.
     */
    ErrorNoRespondingCASInDestinationSite = 309,
    /**
     * Policy does not allow granting of permissions to external users.
     */
    ErrorNotAllowedExternalSharingByPolicy = 310,
    /**
     * The user is not a delegate for the mailbox.
     */
    ErrorNotDelegate = 311,
    /**
     * There was not enough memory to complete the request.
     */
    ErrorNotEnoughMemory = 312,
    /**
     * The sharing message is not supported.
     */
    ErrorNotSupportedSharingMessage = 313,
    /**
     * Operation would change object type, which is not permitted.
     */
    ErrorObjectTypeChanged = 314,
    /**
     * Modified occurrence is crossing or overlapping adjacent occurrence.
     */
    ErrorOccurrenceCrossingBoundary = 315,
    /**
     * One occurrence of the recurring calendar item overlaps with another occurrence of the
     * same calendar item.
     */
    ErrorOccurrenceTimeSpanTooBig = 316,
    /**
     * Operation not allowed with public folder root.
     */
    ErrorOperationNotAllowedWithPublicFolderRoot = 317,
    /**
     * Organization is not federated.
     */
    ErrorOrganizationNotFederated = 318,
    /**
     * ErrorOutlookRuleBlobExists
     */
    ErrorOutlookRuleBlobExists = 319,
    /**
     * You must specify the parent folder Id for this operation.
     */
    ErrorParentFolderIdRequired = 320,
    /**
     * The specified parent folder could not be found.
     */
    ErrorParentFolderNotFound = 321,
    /**
     * Password change is required.
     */
    ErrorPasswordChangeRequired = 322,
    /**
     * Password has expired. Change password.
     */
    ErrorPasswordExpired = 323,
    /**
     * Policy does not allow granting permission level to user.
     */
    ErrorPermissionNotAllowedByPolicy = 324,
    /**
     * Dialing restrictions are preventing the phone number that was entered from being dialed.
     */
    ErrorPhoneNumberNotDialable = 325,
    /**
     * Property update did not succeed.
     */
    ErrorPropertyUpdate = 326,
    /**
     * At least one property failed validation.
     */
    ErrorPropertyValidationFailure = 327,
    /**
     * Subscription related request failed because EWS could not contact the appropriate CAS
     * server for this request.  If this problem persists, recreate the subscription.
     */
    ErrorProxiedSubscriptionCallFailure = 328,
    /**
     * Request failed because EWS could not contact the appropriate CAS server for this request.
     */
    ErrorProxyCallFailed = 329,
    /**
     * Exchange Web Services (EWS) is not available for this mailbox because the user account
     * associated with the mailbox is a member of too many groups. EWS limits the group
     * membership it can proxy between Client Access Service Servers to 3000.
     */
    ErrorProxyGroupSidLimitExceeded = 330,
    /**
     * ErrorProxyRequestNotAllowed
     */
    ErrorProxyRequestNotAllowed = 331,
    /**
     * ErrorProxyRequestProcessingFailed
     */
    ErrorProxyRequestProcessingFailed = 332,
    /**
     * Exchange Web Services are not currently available for this mailbox because it could not
     * determine the Client Access Services Server to use for the mailbox.
     */
    ErrorProxyServiceDiscoveryFailed = 333,
    /**
     * Proxy token has expired.
     */
    ErrorProxyTokenExpired = 334,
    /**
     * ErrorPublicFolderRequestProcessingFailed
     */
    ErrorPublicFolderRequestProcessingFailed = 335,
    /**
     * ErrorPublicFolderServerNotFound
     */
    ErrorPublicFolderServerNotFound = 336,
    /**
     * The search folder has a restriction that is too long to return.
     */
    ErrorQueryFilterTooLong = 337,
    /**
     * Mailbox has exceeded maximum mailbox size.
     */
    ErrorQuotaExceeded = 338,
    /**
     * Unable to retrieve events for this subscription.  The subscription must be recreated.
     */
    ErrorReadEventsFailed = 339,
    /**
     * Unable to suppress read receipt. Read receipts are not pending.
     */
    ErrorReadReceiptNotPending = 340,
    /**
     * Recurrence end date can not exceed Sep 1, 4500 00:00:00.
     */
    ErrorRecurrenceEndDateTooBig = 341,
    /**
     * Recurrence has no occurrences in the specified range.
     */
    ErrorRecurrenceHasNoOccurrence = 342,
    /**
     * Failed to remove one or more delegates.
     */
    ErrorRemoveDelegatesFailed = 343,
    /**
     * ErrorRequestAborted
     */
    ErrorRequestAborted = 344,
    /**
     * ErrorRequestStreamTooBig
     */
    ErrorRequestStreamTooBig = 345,
    /**
     * Required property is missing.
     */
    ErrorRequiredPropertyMissing = 346,
    /**
     * Cannot perform ResolveNames for non-contact folder.
     */
    ErrorResolveNamesInvalidFolderType = 347,
    /**
     * Only one contacts folder can be specified in request.
     */
    ErrorResolveNamesOnlyOneContactsFolderAllowed = 348,
    /**
     * The response failed schema validation.
     */
    ErrorResponseSchemaValidation = 349,
    /**
     * The restriction or sort order is too complex for this operation.
     */
    ErrorRestrictionTooComplex = 350,
    /**
     * Restriction contained too many elements.
     */
    ErrorRestrictionTooLong = 351,
    /**
     * ErrorResultSetTooBig
     */
    ErrorResultSetTooBig = 352,
    /**
     * ErrorRulesOverQuota
     */
    ErrorRulesOverQuota = 353,
    /**
     * The folder in which items were to be saved could not be found.
     */
    ErrorSavedItemFolderNotFound = 354,
    /**
     * The request failed schema validation.
     */
    ErrorSchemaValidation = 355,
    /**
     * The search folder is not initialized.
     */
    ErrorSearchFolderNotInitialized = 356,
    /**
     * The user account which was used to submit this request does not have the right to send
     * mail on behalf of the specified sending account.
     */
    ErrorSendAsDenied = 357,
    /**
     * SendMeetingCancellations attribute is required for Calendar items.
     */
    ErrorSendMeetingCancellationsRequired = 358,
    /**
     * The SendMeetingInvitationsOrCancellations attribute is required for calendar items.
     */
    ErrorSendMeetingInvitationsOrCancellationsRequired = 359,
    /**
     * The SendMeetingInvitations attribute is required for calendar items.
     */
    ErrorSendMeetingInvitationsRequired = 360,
    /**
     * The meeting request has already been sent and might not be updated.
     */
    ErrorSentMeetingRequestUpdate = 361,
    /**
     * The task request has already been sent and may not be updated.
     */
    ErrorSentTaskRequestUpdate = 362,
    /**
     * The server cannot service this request right now. Try again later.
     */
    ErrorServerBusy = 363,
    /**
     * ErrorServiceDiscoveryFailed
     */
    ErrorServiceDiscoveryFailed = 364,
    /**
     * No external Exchange Web Service URL available.
     */
    ErrorSharingNoExternalEwsAvailable = 365,
    /**
     * Failed to synchronize the sharing folder.
     */
    ErrorSharingSynchronizationFailed = 366,
    /**
     * The current ChangeKey is required for this operation.
     */
    ErrorStaleObject = 367,
    /**
     * The message couldn't be sent because the sender's submission quota was exceeded. Please
     * try again later.
     */
    ErrorSubmissionQuotaExceeded = 368,
    /**
     * Access is denied. Only the subscription owner may access the subscription.
     */
    ErrorSubscriptionAccessDenied = 369,
    /**
     * Subscriptions are not supported for delegate user access.
     */
    ErrorSubscriptionDelegateAccessNotSupported = 370,
    /**
     * The specified subscription was not found.
     */
    ErrorSubscriptionNotFound = 371,
    /**
     * The StreamingSubscription was unsubscribed while the current connection was servicing it.
     */
    ErrorSubscriptionUnsubscribed = 372,
    /**
     * The folder to be synchronized could not be found.
     */
    ErrorSyncFolderNotFound = 373,
    /**
     * ErrorTeamMailboxNotFound
     */
    ErrorTeamMailboxNotFound = 374,
    /**
     * ErrorTeamMailboxNotLinkedToSharePoint
     */
    ErrorTeamMailboxNotLinkedToSharePoint = 375,
    /**
     * ErrorTeamMailboxUrlValidationFailed
     */
    ErrorTeamMailboxUrlValidationFailed = 376,
    /**
     * ErrorTeamMailboxNotAuthorizedOwner
     */
    ErrorTeamMailboxNotAuthorizedOwner = 377,
    /**
     * ErrorTeamMailboxActiveToPendingDelete
     */
    ErrorTeamMailboxActiveToPendingDelete = 378,
    /**
     * ErrorTeamMailboxFailedSendingNotifications
     */
    ErrorTeamMailboxFailedSendingNotifications = 379,
    /**
     * ErrorTeamMailboxErrorUnknown
     */
    ErrorTeamMailboxErrorUnknown = 380,
    /**
     * ErrorTimeIntervalTooBig
     */
    ErrorTimeIntervalTooBig = 381,
    /**
     * ErrorTimeoutExpired
     */
    ErrorTimeoutExpired = 382,
    /**
     * The time zone isn't valid.
     */
    ErrorTimeZone = 383,
    /**
     * The specified target folder could not be found.
     */
    ErrorToFolderNotFound = 384,
    /**
     * The requesting account does not have permission to serialize tokens.
     */
    ErrorTokenSerializationDenied = 385,
    /**
     * ErrorUnableToGetUserOofSettings
     */
    ErrorUnableToGetUserOofSettings = 386,
    /**
     * ErrorUnableToRemoveImContactFromGroup
     */
    ErrorUnableToRemoveImContactFromGroup = 387,
    /**
     * A dial plan could not be found.
     */
    ErrorUnifiedMessagingDialPlanNotFound = 388,
    /**
     * The UnifiedMessaging request failed.
     */
    ErrorUnifiedMessagingRequestFailed = 389,
    /**
     * A connection couldn't be made to the Unified Messaging server.
     */
    ErrorUnifiedMessagingServerNotFound = 390,
    /**
     * The specified item culture is not supported on this server.
     */
    ErrorUnsupportedCulture = 391,
    /**
     * The MAPI property type is not supported.
     */
    ErrorUnsupportedMapiPropertyType = 392,
    /**
     * MIME conversion is not supported for this item type.
     */
    ErrorUnsupportedMimeConversion = 393,
    /**
     * The property can not be used with this type of restriction.
     */
    ErrorUnsupportedPathForQuery = 394,
    /**
     * The property can not be used for sorting or grouping results.
     */
    ErrorUnsupportedPathForSortGroup = 395,
    /**
     * PropertyDefinition is not supported in searches.
     */
    ErrorUnsupportedPropertyDefinition = 396,
    /**
     * QueryFilter type is not supported.
     */
    ErrorUnsupportedQueryFilter = 397,
    /**
     * The specified recurrence is not supported.
     */
    ErrorUnsupportedRecurrence = 398,
    /**
     * Unsupported subfilter type.
     */
    ErrorUnsupportedSubFilter = 399,
    /**
     * Unsupported type for restriction conversion.
     */
    ErrorUnsupportedTypeForConversion = 400,
    /**
     * Failed to update one or more delegates.
     */
    ErrorUpdateDelegatesFailed = 401,
    /**
     * Property for update does not match property in object.
     */
    ErrorUpdatePropertyMismatch = 402,
    /**
     * Policy does not allow granting permissions to user.
     */
    ErrorUserNotAllowedByPolicy = 403,
    /**
     * The user isn't enabled for Unified Messaging
     */
    ErrorUserNotUnifiedMessagingEnabled = 404,
    /**
     * The user doesn't have an SMTP proxy address from a federated domain.
     */
    ErrorUserWithoutFederatedProxyAddress = 405,
    /**
     * The value is out of range.
     */
    ErrorValueOutOfRange = 406,
    /**
     * Virus detected in the message.
     */
    ErrorVirusDetected = 407,
    /**
     * The item has been deleted as a result of a virus scan.
     */
    ErrorVirusMessageDeleted = 408,
    /**
     * The Voice Mail distinguished folder is not implemented.
     */
    ErrorVoiceMailNotImplemented = 409,
    /**
     * ErrorWebRequestInInvalidState
     */
    ErrorWebRequestInInvalidState = 410,
    /**
     * ErrorWin32InteropError
     */
    ErrorWin32InteropError = 411,
    /**
     * ErrorWorkingHoursSaveFailed
     */
    ErrorWorkingHoursSaveFailed = 412,
    /**
     * ErrorWorkingHoursXmlMalformed
     */
    ErrorWorkingHoursXmlMalformed = 413,
    /**
     * The Client Access server version doesn't match the Mailbox server version of the resource
     * that was being accessed. To determine the correct URL to use to access the resource, use
     * Autodiscover with the address of the resource.
     */
    ErrorWrongServerVersion = 414,
    /**
     * The mailbox of the authenticating user and the mailbox of the resource being accessed
     * must have the same Mailbox server version.
     */
    ErrorWrongServerVersionDelegate = 415,
    /**
     * The client access token request is invalid.
     */
    ErrorInvalidClientAccessTokenRequest = 416,
    /**
     * invalid managementrole header value or usage.
     */
    ErrorInvalidManagementRoleHeader = 417,
    /**
     * SearchMailboxes query has too many keywords.
     */
    ErrorSearchQueryHasTooManyKeywords = 418,
    /**
     * SearchMailboxes on too many mailboxes.
     */
    ErrorSearchTooManyMailboxes = 419,
    /**
     * There are no retention tags.
     */
    ErrorInvalidRetentionTagNone = 420,
    /**
     * Discovery Searches are disabled.
     */
    ErrorDiscoverySearchesDisabled = 421,
    /**
     * SeekToConditionPageView not supported for calendar items.
     */
    ErrorCalendarSeekToConditionNotSupported = 422,
    /**
     * Archive mailbox search operation failed.
     */
    ErrorArchiveMailboxSearchFailed = 423,
    /**
     * Get remote archive mailbox folder failed.
     */
    ErrorGetRemoteArchiveFolderFailed = 424,
    /**
     * Find remote archive mailbox folder failed.
     */
    ErrorFindRemoteArchiveFolderFailed = 425,
    /**
     * Get remote archive mailbox item failed.
     */
    ErrorGetRemoteArchiveItemFailed = 426,
    /**
     * Export remote archive mailbox items failed.
     */
    ErrorExportRemoteArchiveItemsFailed = 427,
    /**
     * Invalid state definition.
     */
    ErrorClientIntentInvalidStateDefinition = 428,
    /**
     * Client intent not found.
     */
    ErrorClientIntentNotFound = 429,
    /**
     * The Content Indexing service is required to perform this search, but it's not enabled.
     */
    ErrorContentIndexingNotEnabled = 430,
    /**
     * The custom prompt files you specified couldn't be removed.
     */
    ErrorDeleteUnifiedMessagingPromptFailed = 431,
    /**
     * The location service is disabled.
     */
    ErrorLocationServicesDisabled = 432,
    /**
     * Invalid location service request.
     */
    ErrorLocationServicesInvalidRequest = 433,
    /**
     * The request for location information failed.
     */
    ErrorLocationServicesRequestFailed = 434,
    /**
     * The request for location information timed out.
     */
    ErrorLocationServicesRequestTimedOut = 435,
    /**
     * Weather service is disabled.
     */
    ErrorWeatherServiceDisabled = 436,
    /**
     * Mailbox scope not allowed without a query string.
     */
    ErrorMailboxScopeNotAllowedWithoutQueryString = 437,
    /**
     * No speech detected.
     */
    ErrorNoSpeechDetected = 438,
    /**
     * An error occurred while accessing the custom prompt publishing point.
     */
    ErrorPromptPublishingOperationFailed = 439,
    /**
     * Unable to discover the URL of the public folder mailbox.
     */
    ErrorPublicFolderMailboxDiscoveryFailed = 440,
    /**
     * Public folder operation failed.
     */
    ErrorPublicFolderOperationFailed = 441,
    /**
     * The operation succeeded on the primary public folder mailbox, but failed to sync to the secondary public folder mailbox.
     */
    ErrorPublicFolderSyncException = 442,
    /**
     * Discovery Searches are disabled.
     */
    ErrorRecipientNotFound = 443,
    /**
     * Recognizer not installed.
     */
    ErrorRecognizerNotInstalled = 444,
    /**
     * Speech grammar error.
     */
    ErrorSpeechGrammarError = 445,
    /**
     * Too many concurrent connections opened.
     */
    ErrorTooManyObjectsOpened = 446,
    /**
     * Unified Messaging server unavailable.
     */
    ErrorUMServerUnavailable = 447,
    /**
     * The Unified Messaging custom prompt file you specified couldn't be found.
     */
    ErrorUnifiedMessagingPromptNotFound = 448,
    /**
     * Report data for the UM call summary couldn't be found.
     */
    ErrorUnifiedMessagingReportDataNotFound = 449,
    /**
     * The requested size is invalid.
     */
    ErrorInvalidPhotoSize = 450,
    /**
     * AcceptItem action is invalid for a meeting message in group mailbox.
     */
    ErrorCalendarIsGroupMailboxForAccept = 451,
    /**
     * DeclineItem operation is invalid for a meeting message in group mailbox.
     */
    ErrorCalendarIsGroupMailboxForDecline = 452,
    /**
     * TentativelyAcceptItem action isn't valid for a meeting message in group mailbox.
     */
    ErrorCalendarIsGroupMailboxForTentative = 453,
    /**
     * SuppressReadReceipt action isn't valid for a meeting message in group mailbox.
     */
    ErrorCalendarIsGroupMailboxForSuppressReadReceipt = 454,
    /**
     * The Organization is marked for removal.
     */
    ErrorOrganizationAccessBlocked = 455,
    /**
     * User doesn't have a valid license.
     */
    ErrorInvalidLicense = 456,
    /**
     * Receive quota message per folder is exceeded.
     */
    ErrorMessagePerFolderCountReceiveQuotaExceeded = 457,
    /**
     * Unified group was not found.
     */
    ErrorUnifiedGroupMailboxNotFound = 458,
    /**
     * Invalid channel id.
     */
    ErrorInvalidChannelId = 459,
    /**
     * Another connection is opened on the same channel.
     */
    ErrorNewChannelConnectionOpened = 460,
    /**
     * The channel subscription cannot be found.
     */
    ErrorChannelSubscriptionNotFound = 461,
    /**
     * The channel contains too many subscriptions.
     */
    ErrorExceededChannelSubscriptionCount = 462,
    /**
     * The channel subscription already exists.
     */
    ErrorChannelSubscriptionAlreadyExists = 463,
    /**
     * The given channel subscription id is invalid.
     */
    ErrorInvalidChannelSubscriptionId = 464,
    /**
     * Error indicating that message submission blocked by WASCL for a consumer mailboxes
     */
    ErrorMessageSubmissionBlocked = 465,
    /**
     * Error indicating that number of submitted messages exceeded the limit and message submission is blocked by WASCL
     */
    ErrorExceededMessageLimit = 466,
    /**
     * Error indicating that recipients number for a consumer mailbox has exceeded the limit defined by WASCL
     */
    ErrorExceededMaxRecipientLimitBlock = 467,
    /**
     * Error indicating that access to the consumer mailbox is suspended by WASCL
     */
    ErrorAccountSuspend = 468,
    /**
     * Error indicating that recipients number for a consumer mailbox has exceeded the limit defined by WASCL
     */
    ErrorExceededMaxRecipientLimit = 469,
    /**
     * Error indicating that particular message cannot be sent for a consumer mailbox as it is considered as SPAM by WASCL
     */
    ErrorMessageBlocked = 470,
    /**
     * Error indicating that access to the consumer mailbox is suspended by WASCL
     */
    ErrorAccountSuspendShowTierUpgrade = 471,
    /**
     * Error indicating that message sent from a consumer mailbox has exceeded the limit defined by WASCL
     */
    ErrorExceededMessageLimitShowTierUpgrade = 472,
    /**
     * Error indicating that recipients number for a consumer mailbox has exceeded the limit defined by WASCL
     */
    ErrorExceededMaxRecipientLimitShowTierUpgrade = 473,
}
 enum ServiceErrorHandling {
    ReturnErrors = 0,
    ThrowOnError = 1,
}
 enum ServiceObjectType {
    Folder = 0,
    Item = 1,
    Conversation = 2,
}
 enum ServiceResult {
    Success = 0,
    Warning = 1,
    Error = 2,
}
 enum SetClientExtensionActionId {
    Install = 0,
    Uninstall = 1,
    Configure = 2,
}
 enum SortDirection {
    Ascending = 0,
    Descending = 1,
}
 enum StandardUser {
    Default = 0,
    Anonymous = 1,
}
 enum SuggestionQuality {
    Excellent = 0,
    Good = 1,
    Fair = 2,
    Poor = 3,
}
 enum SyncFolderItemsScope {
    NormalItems = 0,
    NormalAndAssociatedItems = 1,
}
 enum TaskDelegationState {
    NoDelegation = 0,
    Unknown = 1,
    Accepted = 2,
    Declined = 3,
}
 enum TaskMode {
    Normal = 0,
    Request = 1,
    RequestAccepted = 2,
    RequestDeclined = 3,
    Update = 4,
    SelfDelegated = 5,
}
 enum TaskStatus {
    NotStarted = 0,
    InProgress = 1,
    Completed = 2,
    WaitingOnOthers = 3,
    Deferred = 4,
}
 enum TeamMailboxLifecycleState {
    Active = 0,
    Closed = 1,
    Unlinked = 2,
    PendingDelete = 3,
}
 enum TraceFlags {
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
}
 enum UserConfigurationDictionaryObjectType {
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
}
 enum UserConfigurationProperties {
    Id = 1,
    Dictionary = 2,
    XmlData = 4,
    BinaryData = 8,
    All = 15,
}
 enum UserSettingName {
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
}
 enum ViewFilter {
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
}
 enum WellKnownFolderName {
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
}
 enum XmlNamespace {
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
    Accept(sendResponse: boolean): IPromise<CalendarActionResults>;
    AcceptTentatively(sendResponse: boolean): IPromise<CalendarActionResults>;
    CreateAcceptMessage(tentative: boolean): AcceptMeetingInvitationMessage;
    CreateDeclineMessage(): DeclineMeetingInvitationMessage;
    Decline(sendResponse: boolean): IPromise<CalendarActionResults>;
}
export interface ICustomUpdateSerializer {
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
}
export interface IEwsHttpWebRequestFactory {
    CreateExceptionResponse(exception: any): IEwsHttpWebResponse;
    CreateRequest(uri: string): IEwsHttpWebRequest;
}
export interface IEwsHttpWebResponse {
    ContentEncoding: string;
    ContentType: string;
    Headers: any;
    ResponseUri: string;
    StatusCode: any;
    StatusDescription: string;
    ProtocolVersion: any;
    Close(): void;
    GetResponseStream(): any;
}
export interface IFileAttachmentContentHandler {
    GetOutputStream(attachmentId: string): any;
}

export interface IJsonSerializable {
    ToJson(service: ExchangeService): any;
}

export interface IJsonCollectionDeserializer {
    CreateFromJsonCollection(jsonCollection: any[], service: ExchangeService): void;
    UpdateFromJsonCollection(jsonCollection: any[], service: ExchangeService): void;
}
export interface IOutParam<T> {
    outValue?: T;
    exception?: any;
    success?: boolean;
}

export interface IOwnedProperty {
    Owner: ServiceObject;
}
export interface IRefParam<T> {
    getValue: () => T;
    setValue?: (value: T) => void;
}
export interface ISearchStringProvider {
    GetSearchString(): string;
}
export interface ISelfValidate {
    Validate(): any;
}
export interface ITraceListener {
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
}
 class ExtendedAttributes {
}
 class FailedSearchMailbox {
    Mailbox: string;
    ErrorCode: number;
    ErrorMessage: string;
    IsArchive: boolean;
    LoadFailedMailboxesXml(rootXmlNamespace: XmlNamespace, reader: EwsServiceXmlReader): FailedSearchMailbox[];
}
 class KeywordStatisticsSearchResult {
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
}
 class NonIndexableItemDetailsResult {
    Items: NonIndexableItem[];
    FailedMailboxes: FailedSearchMailbox[];
    LoadFromJson(jsonObject: JsonObject): NonIndexableItemDetailsResult;
    LoadFromXml(reader: EwsServiceXmlReader): NonIndexableItemDetailsResult;
}
 class NonIndexableItemParameters {
    Mailboxes: string[];
    SearchArchiveOnly: boolean;
}

 class NonIndexableItemStatistic {
    Mailbox: string;
    ItemCount: number;
    ErrorMessage: string;
    LoadFromXml(reader: EwsServiceXmlReader): NonIndexableItemStatistic[];
}
 class PreviewItemMailbox {
    MailboxId: string;
    PrimarySmtpAddress: string;
}
 class PreviewItemResponseShape {
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
    GetRecipients(reader: EwsServiceXmlReader, elementName: string): string[];
    LoadExtendedPropertiesXml(reader: EwsServiceXmlReader): ExtendedPropertyCollection;
    LoadFromJson(jsonObject: JsonObject): SearchMailboxesResult;
    LoadFromXml(reader: EwsServiceXmlReader): SearchMailboxesResult;
    LoadKeywordStatsXml(reader: EwsServiceXmlReader): KeywordStatisticsSearchResult[];
    LoadPreviewItemsXml(reader: EwsServiceXmlReader): SearchPreviewItem[];
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
}
 class SearchableMailbox {
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
}
export interface IDiscoveryVersionable {
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

/**
 * Represents the results of an action performed on a calendar item or meeting message, such as accepting, tentatively accepting or declining a meeting request.
 *
 */
 class CalendarActionResults {
    /**
     * Gets the meeting that was accepted, tentatively accepted or declined.
     *
     * Remark - When a meeting is accepted or tentatively accepted via an Appointment object,
     * EWS recreates the meeting, and Appointment represents that new version.
     * When a meeting is accepted or tentatively accepted via a MeetingRequest object,
     * EWS creates an associated meeting in the attendee's calendar and Appointment
     * represents that meeting.
     * When declining a meeting via an Appointment object, EWS moves the appointment to
     * the attendee's Deleted Items folder and Appointment represents that moved copy.
     * When declining a meeting via a MeetingRequest object, EWS creates an associated
     * meeting in the attendee's Deleted Items folder, and Appointment represents that
     * meeting.
     * When a meeting is declined via either an Appointment or a MeetingRequest object
     * from the Deleted Items folder, Appointment is null.
     */
    Appointment: Appointment;
    /**
     * Gets the meeting request that was moved to the Deleted Items folder as a result of an attendee accepting, tentatively accepting or declining a meeting request. If the meeting request is accepted, tentatively accepted or declined from the Deleted Items folder, it is permanently deleted and MeetingRequest is null.
     *
     */
    MeetingRequest: MeetingRequest;
    /**
     * Gets the copy of the response that is sent to the organizer of a meeting when the meeting is accepted, tentatively accepted or declined by an attendee. MeetingResponse is null if the attendee chose not to send a response.
     *
     */
    MeetingResponse: MeetingResponse;
    /**
     * Gets the copy of the meeting cancellation message sent by the organizer to the attendees of a meeting when the meeting is cancelled.
     *
     */
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
}
 class DelegateInformation {
    DelegateUserResponses: DelegateUserResponse[];
    MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;


}
export interface ComplexPropertyChangedDelegate {
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
}
 class EwsTraceListener {

    Trace(traceType: string, traceMessage: string): void;
}
 class ExpandGroupResults {


    Count: number;
    IncludesAllMembers: boolean;
    Members: EmailAddress[];
    constructor();
    LoadFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
 class FolderIdWrapper extends AbstractFolderIdWrapper {

    constructor(folderId: FolderId);
    Validate(version: ExchangeVersion): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
 class FolderIdWrapperList {
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
}
 class ItemIdWrapper extends AbstractItemIdWrapper {

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
}
 class ItemWrapper extends AbstractItemIdWrapper {

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

 class MapiTypeConverterMapEntry {
    Parse: (string) => any;
    ConvertToString: (any) => string;
    Type: MapiTypeConverterTypeSystem;
    IsArray: boolean;
    DefaultValue: any;

    constructor(type: MapiTypeConverterTypeSystem, parseMethod: (str: string) => any, convertToStringMethod: (obj: any) => string, isArray?: boolean);
    ChangeType(value: any): any;
    ConvertToValue(stringValue: string): any;
    ConvertToValueOrDefault(stringValue: string): any;
    ValidateValueAsArray(value: any): void;
}

 class MobilePhone implements ISelfValidate {
    Name: string;
    PhoneNumber: string;


    Validate(): any;
}
 class NameResolution {



    Mailbox: EmailAddress;
    Contact: Contact;
    constructor(owner: NameResolutionCollection);
    LoadFromJson(jsonProperty: any, service: ExchangeService): void;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
 class NameResolutionCollection {
    Items: NameResolution[];



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
}
 class Time {
    Hours: number;
    Minutes: number;
    Seconds: number;



    ConvertToMinutes(): number;
    ToXSTime(): string;
}
 class UserConfiguration {



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
}
 class NotificationEventArgs {
    Subscription: StreamingSubscription;
    Events: NotificationEvent[];
}

export interface NotificationGroup {
    SubscriptionId: string;
    Events: NotificationEvent[];
}
 class PullSubscription extends SubscriptionBase {
    MoreEventsAvailable: boolean;

    BeginGetEvents(callback: any, state: any): any;
    BeginUnsubscribe(callback: any, state: any): any;
    EndGetEvents(asyncResult: any): GetEventsResults;
    EndUnsubscribe(asyncResult: any): void;
    GetEvents(): GetEventsResults;
    Unsubscribe(): void;
}

 class PushSubscription extends SubscriptionBase {
}
 class StreamingSubscription extends SubscriptionBase {
    Service: ExchangeService;
    UsesWatermark: boolean;
    BeginUnsubscribe(callback: any, state: any): any;
    EndUnsubscribe(asyncResult: any): void;
    Unsubscribe(): void;
}
 class StreamingSubscriptionConnection {
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
}
 class SubscriptionErrorEventArgs {
    Subscription: StreamingSubscription;
    Exception: Exception;
}
 class ExchangeResourceManager {
}
/**
 * @internal Represents base Attachments property type.
 */
 class AttachmentsPropertyDefinition extends ComplexPropertyDefinition<AttachmentCollection> {

    /**
     * Initializes a new instance of the **AttachmentsPropertyDefinition** class.
     *
     * @param   {string}    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     */
    constructor(propertyName: string);
    /**
     * @internal Determines whether the specified flag is set.
     *
     * @param   {PropertyDefinitionFlags}   flag      The flag.
     * @param   {ExchangeVersion}           version   Requested version.
     * @return  {boolean}                   true if the specified flag is set; otherwise, false.
     */
    HasFlag(flag: PropertyDefinitionFlags, version?: ExchangeVersion): boolean;
}

/**
 * @internal Represents Boolean property definition
 */
 class BoolPropertyDefinition extends GenericPropertyDefinition<boolean> {
    /**
     * @internal Initializes a new instance of the **BoolPropertyDefinition** class.
     *
     * @param   {string}            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}            xmlElementName   Name of the XML element.
     * @param   {string}            uri              The URI.
     * @param   {ExchangeVersion}   version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **BoolPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **BoolPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     * @param   {boolean}                   isNullable       Indicates that this property definition is for a nullable property.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion, isNullable: boolean);
    /**
     * Convert instance to string.
     *
     * @param   {any}       value   The value.
     * @return  {string}    String representation of Boolean property.
     */
    ToString(value?: any): string;
    /**
     * @internal Parses the specified value (added to workaround Generic based value conversion in c#).
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    Parse(value: string): any;
}

/**
 * @internal Represents byte array property definition.
 */
 class ByteArrayPropertyDefinition extends TypedPropertyDefinition {
    /**
     * @internal Gets a value indicating whether this property definition is for a nullable type (ref, int?, bool?...).
     */
    IsNullable: boolean;
    /**
     * @internal Gets the property type.
     */
    Type: any;
    /**
     * @internal Initializes a new instance of the **ByteArrayPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Parses the specified value.
     *
     * @param   {string}   value   The value.
     * @return  {any}           Byte array value.
     */
    Parse(value: string): any;
    /**
     * @internal Converts byte array property to a string.
     *
     * @param   {any}       value   The value.
     * @return  {string}    Byte array value.
     */
    ToString(value?: any): string;
}
/**
 * @internal Represents base complex property type.
 *
 * @type <TComplexProperty> The type of the complex property.
 */
 class ComplexPropertyDefinition<TComplexProperty extends ComplexProperty> extends ComplexPropertyDefinitionBase {
    Type: any;

    /**
     * @internal Initializes a new instance of the **ComplexPropertyDefinition<TComplexProperty>** class.
     *
     * @param   {string}                                            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                                            xmlElementName   Name of the XML element.
     * @param   {string}                                            uri              The URI.
     * @param   {ExchangeVersion}                                   version          The version.
     * @param   {CreateComplexPropertyDelegate<TComplexProperty>}   propertyCreationDelegate   Delegate used to create instances of ComplexProperty.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, version: ExchangeVersion, propertyCreationDelegate: CreateComplexPropertyDelegate<TComplexProperty>);
    /**
     * @internal Initializes a new instance of the **ComplexPropertyDefinition<TComplexProperty>** class.
     *
     * @param   {string}                                            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                                            xmlElementName   Name of the XML element.
     * @param   {PropertyDefinitionFlags}                           flags            The flags.
     * @param   {ExchangeVersion}                                   version          The version.
     * @param   {CreateComplexPropertyDelegate<TComplexProperty>}   propertyCreationDelegate   Delegate used to create instances of ComplexProperty.
     */
    constructor(propertyName: string, xmlElementName: string, flags: PropertyDefinitionFlags, version: ExchangeVersion, propertyCreationDelegate: CreateComplexPropertyDelegate<TComplexProperty>);
    /**
     * @internal Initializes a new instance of the **ComplexPropertyDefinition<TComplexProperty>** class.
     *
     * @param   {string}                                            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                                            xmlElementName   Name of the XML element.
     * @param   {string}                                            uri              The URI.
     * @param   {PropertyDefinitionFlags}                           flags            The flags.
     * @param   {ExchangeVersion}                                   version          The version.
     * @param   {CreateComplexPropertyDelegate<TComplexProperty>}   propertyCreationDelegate   Delegate used to create instances of ComplexProperty.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion, propertyCreationDelegate: CreateComplexPropertyDelegate<TComplexProperty>);
    /**
     * @internal Creates the property instance.
     *
     * @param   {ServiceObject}   owner   The owner.
     * @return  {ComplexProperty}       ComplexProperty instance.
     */
    CreatePropertyInstance(owner: ServiceObject): ComplexProperty;
}
/**
 * @internal Represents abstract complex property definition.
 */
 abstract class ComplexPropertyDefinitionBase extends PropertyDefinition {
    /**
     * @internal Initializes a new instance of the **ComplexPropertyDefinitionBase** class.
     *
     * @param   {string}            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}            xmlElementName   Name of the XML element.
     * @param   {string}            uri              The URI.
     * @param   {ExchangeVersion}   version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **ComplexPropertyDefinitionBase** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **ComplexPropertyDefinitionBase** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Creates the property instance.
     *
     * @param   {ServiceObject}     owner   The owner.
     * @return  {ComplexProperty}   ComplexProperty.
     */
    abstract CreatePropertyInstance(owner: ServiceObject): ComplexProperty;
    /**
     * Gets the property instance.
     *
     * @param   {PropertyBag}       propertyBag       The property bag.
     * @param   {complexProperty}   complexProperty   The property instance.
     * @return  {boolean}    True if the instance is newly created.
     */

    /**
     * @internal Internals the load from XMlJsObject.
     *
     * @param   {any}               jsObject    The json object.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    InternalLoadFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void;
    /**
     * @internal Loads the property value from XMLJsObject.
     *
     * @param   {any}               jsObject         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void;
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
}
/**
 * @internal Represents contained property definition.
 *
 * @type    <TComplexProperty>  ComplexProperty
 */
 class ContainedPropertyDefinition<TComplexProperty extends ComplexProperty> extends ComplexPropertyDefinition<TComplexProperty> {

    /**
     * @internal Initializes a new instance of the **ContainedPropertyDefinition<TComplexProperty>** class.
     *
     * @param   {string}                                            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                                            xmlElementName             Name of the XML element.
     * @param   {string}                                            uri                        The URI.
     * @param   {string}                                            containedXmlElementName    Name of the contained XML element.
     * @param   {PropertyDefinitionFlags}                           flags                      The flags.
     * @param   {ExchangeVersion}                                   version                    The version.
     * @param   {CreateComplexPropertyDelegate<TComplexProperty>}   propertyCreationDelegate   Delegate used to create instances of ComplexProperty.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, containedXmlElementName: string, flags: PropertyDefinitionFlags, version: ExchangeVersion, propertyCreationDelegate: CreateComplexPropertyDelegate<TComplexProperty>);
    /**
     * @internal Load from XMLJsObject.
     *
     * @param   {any}               reader        The reader.
     * @param   {ExchangeService}   service        The Service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    InternalLoadFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void;
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
}
/**
 * @internal Represents DateTime property definition.
 */
 class DateTimePropertyDefinition extends PropertyDefinition {

    /**
     * @internal Gets a value indicating whether this property definition is for a nullable type (ref, int?, bool?...).
     */
    IsNullable: boolean;
    /**
     * Gets the property type.
     */
    Type: any;
    /**
     * @internal Initializes a new instance of the **DateTimePropertyDefinition** class.
     *
     * @param   {string}            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}            xmlElementName   Name of the XML element.
     * @param   {string}            uri              The URI.
     * @param   {ExchangeVersion}   version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **DateTimePropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **DateTimePropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     * @param   {boolean}                   isNullable       Indicates that this property definition is for a nullable property.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion, isNullable: boolean);
    /**
     * Gets the converted date time.
     *
     * @param   {ExchangeServiceBase}   service             The service.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   if set to true [is update operation].
     * @param   {any}                   value               The value.
     * @return  {DateTime}      Converted DateTime value
     */

    /**
     * @internal Loads the property value from XMLJsObject.
     *
     * @param   {any}               value         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void;
    /**
     * @internal Scopes the date time property to the appropriate time zone, if necessary.
     *
     * @param   {ExchangeServiceBase}   service             The service emitting the request.
     * @param   {DateTime}              dateTime            The date time.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the scoping is to be performed in the context of an update operation.
     * @return  {DateTime}              The converted DateTime.
     */
    ScopeToTimeZone(service: ExchangeServiceBase, dateTime: DateTime, propertyBag: PropertyBag, isUpdateOperation: boolean): DateTime;
    /**
     * @internal Writes the property value to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
}

/**
 * @internal Represents double-precision floating point property definition.
 */
 class DoublePropertyDefinition extends GenericPropertyDefinition<number> {
    /**
     * @internal Initializes a new instance of the **DoublePropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Parses the specified value (added to workaround Generic based value conversion in c#).
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    Parse(value: string): any;
}
/**
 * @internal Represents effective rights property definition.
 */
 class EffectiveRightsPropertyDefinition extends PropertyDefinition {
    /**
     * Gets the property type.
     */
    Type: any;
    /**
     * @internal Initializes a new instance of the **EffectiveRightsPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Loads the property value from XMLJsObject.
     *
     * @param   {any}               value         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void;
    /**
     * @internal Writes the property value to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
}
/**
 * Represents the definition of an extended property.
 */
 class ExtendedPropertyDefinition extends PropertyDefinitionBase {













    /**
     * @Nullable Gets the Id of the extended property.
     */
    Id: number;
    /**
     * Gets the MAPI type of the extended property.
     */
    MapiType: MapiPropertyType;
    /**
     * Gets the name of the extended property.
     */
    Name: string;
    /**
     * @Nullable Gets the property set of the extended property.
     */
    PropertySet: DefaultExtendedPropertySet;
    /**
     * @Nullable Gets the property set Id or the extended property.
     * */
    PropertySetId: Guid;
    /**
     * @Nullable Gets the extended property's tag.
     */
    Tag: number;
    /**
     * Gets the minimum Exchange version that supports this extended property.
     *
     * @value {ExchangeVersion} The version.
     */
    Version: ExchangeVersion;
    /**
     * Gets the property type.
     */
    Type: any;
    /**
     * @internal Initializes a new instance of the **ExtendedPropertyDefinition** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **ExtendedPropertyDefinition** class.
     *
     * @param   {MapiPropertyType}  mapiType      The MAPI type of the extended property.
     */
    constructor(mapiType: MapiPropertyType);
    /**
     * Initializes a new instance of the **ExtendedPropertyDefinition** class.
     *
     * @param   {number}            tag        The tag of the extended property.
     * @param   {MapiPropertyType}  mapiType      The MAPI type of the extended property.
     */
    constructor(tag: number, mapiType: MapiPropertyType);
    /**
     * Initializes a new instance of the **ExtendedPropertyDefinition** class.
     *
     * @param   {DefaultExtendedPropertySet}    propertySet   The extended property set of the extended property.
     * @param   {string}                        name          The name of the extended property.
     * @param   {MapiPropertyType}              mapiType      The MAPI type of the extended property.
     */
    constructor(propertySet: DefaultExtendedPropertySet, name: string, mapiType: MapiPropertyType);
    /**
     * Initializes a new instance of the **ExtendedPropertyDefinition** class.
     *
     * @param   {DefaultExtendedPropertySet}    propertySet   The extended property set of the extended property.
     * @param   {number}                        id            The Id of the extended property.
     * @param   {MapiPropertyType}              mapiType      The MAPI type of the extended property.
     */
    constructor(propertySet: DefaultExtendedPropertySet, id: number, mapiType: MapiPropertyType);
    /**
     * Initializes a new instance of the **ExtendedPropertyDefinition** class.
     *
     * @param   {Guid}              propertySetId   The property set Id of the extended property.
     * @param   {string}            name          The name of the extended property.
     * @param   {MapiPropertyType}  mapiType      The MAPI type of the extended property.
     */
    constructor(propertySetId: Guid, name: string, mapiType: MapiPropertyType);
    /**
     * Initializes a new instance of the **ExtendedPropertyDefinition** class.
     *
     * @param   {Guid}              propertySetId   The property set Id of the extended property.
     * @param   {number}            id            The Id of the extended property.
     * @param   {MapiPropertyType}  mapiType      The MAPI type of the extended property.
     */
    constructor(propertySetId: Guid, id: number, mapiType: MapiPropertyType);
    /**
     * Determines whether a given extended property definition is equal to this extended property definition.
     *
     * @param   {any}   obj   The object to check for equality.
     * @return  {boolean}         True if the properties definitions define the same extended property.
     */
    Equals(obj: any): boolean;
    /**
     * @internal Formats the field.
     *
     * @type    <T>        Type of field value.
     * @param   {string}   name         The name.
     * @param   {string}   fieldValue   The field value.
     * @return  {string}                Formatted value.
     */
    FormatField(name: string, fieldValue: string): string;
    /**
     * Serves as a hash function for a particular type.
     *
     * @return  {number}      A hash code for the current System.Object.
     */
    GetHashCode(): number;
    /**
     * @internal Gets the property definition's printable name.
     *
     * @return  {string}      The property definition's printable name.
     */
    GetPrintableName(): string;
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string;
    /**
     * @internal Determines whether two specified instances of ExtendedPropertyDefinition are equal.
     *
     * @param   {ExtendedPropertyDefinition}    extPropDef1   First extended property definition.
     * @param   {ExtendedPropertyDefinition}    extPropDef2   Second extended property definition.
     * @return  {boolean}                       True if extended property definitions are equal.
     */
    static IsEqualTo(extPropDef1: ExtendedPropertyDefinition, extPropDef2: ExtendedPropertyDefinition): boolean;
    /**
     * @internal Loads from XMLJsObject.
     *
     * @param   {any}   jsObject   The json object.
     */
    LoadPropertyValueFromXmlJsObject(jsObject: any): void;
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
}
/**
 * ExtendedPropertyDefinition interface to be used with TypeContainer - removes circular dependency
 */
export interface IExtendedPropertyDefinition {
    new (): ExtendedPropertyDefinition;
    new (mapiType: MapiPropertyType): ExtendedPropertyDefinition;
    new (mapiType: MapiPropertyType, tag: number): ExtendedPropertyDefinition;
    new (mapiType: MapiPropertyType, name: string, propertySet: DefaultExtendedPropertySet): ExtendedPropertyDefinition;
    new (mapiType: MapiPropertyType, id: number, propertySet: DefaultExtendedPropertySet): ExtendedPropertyDefinition;
    new (mapiType: MapiPropertyType, name: string, propertySetId: Guid): ExtendedPropertyDefinition;
    new (mapiType: MapiPropertyType, id: number, propertySetId: Guid): ExtendedPropertyDefinition;
}

/**
 * @internal Represents generic property definition.
 */
 class GenericPropertyDefinition<TPropertyValue> extends TypedPropertyDefinition {
    Type: any;
    /**
     * @internal Initializes a new instance of the **GenericPropertyDefinition<TPropertyValue>** class.
     *
     * @param   {string}            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}            xmlElementName   Name of the XML element.
     * @param   {string}            uri              The URI.
     * @param   {ExchangeVersion}   version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **GenericPropertyDefinition<TPropertyValue>** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **GenericPropertyDefinition<TPropertyValue>** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     * @param   {boolean}                   isNullable       Indicates that this property definition is for a nullable property.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion, isNullable: boolean);
    /**
     * @internal Parses the specified value.
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    Parse(value: string): any;
}
/**
 * @internal Represents the definition of the GroupMember property.
 */
 class GroupMemberPropertyDefinition extends ServiceObjectPropertyDefinition {
    /**
     * FieldUri of IndexedFieldURI for a group member.
     */

    /**
     * Member key. Maps to the Index attribute of IndexedFieldURI element.
     */

    /**
     * Gets or sets the member's key.
     */
    Key: string;
    /**
     * Gets the property type.
     */
    Type: any;
    /**
     * Initializes a new instance of the **GroupMemberPropertyDefinition** class without key.
     */
    constructor();
    /**
     * Initializes a new instance of the **GroupMemberPropertyDefinition** class.
     *
     * @param   {string}   key   The member's key.
     */
    constructor(key: string);
    /**
     * @internal Gets the property definition's printable name.
     *
     * @return  {string}      The property definition's printable name.
     */
    GetPrintableName(): string;
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string;
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
}
/**
 * Represents an indexed property definition.
 */
 class IndexedPropertyDefinition extends ServiceObjectPropertyDefinition {
    /**
     * Index attribute of IndexedFieldURI element.
     */

    /**
     * Gets the index of the property.
     */
    Index: string;
    Type: string;
    /**
     * @internal Initializes a new instance of the **IndexedPropertyDefinition** class.
     *
     * @param   {string}   uri     The FieldURI attribute of the IndexedFieldURI element.
     * @param   {string}   index   The Index attribute of the IndexedFieldURI element.
     */
    constructor(uri: string, index: string);
    /**
     * Determines whether a given indexed property definition is equal to this indexed property definition.
     *
     * @param   {any}   obj   The object to check for equality.
     * @return  {boolean}         True if the properties definitions define the same indexed property.
     */
    Equals(obj: any): boolean;
    /**
     * Serves as a hash function for a particular type.
     *
     * @return  {number}      A hash code for the current System.Object.
     */
    GetHashCode(): number;
    /**
     * @internal Gets the property definition's printable name.
     *
     * @return  {string}      The property definition's printable name.
     */
    GetPrintableName(): string;
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string;
    /**
     * @internal Determines whether two specified instances of IndexedPropertyDefinition are equal.
     *
     * @param   {IndexedPropertyDefinition}    extPropDef1   First extended property definition.
     * @param   {IndexedPropertyDefinition}    extPropDef2   Second extended property definition.
     * @return  {boolean}                      True if extended property definitions are equal.
     */
    static IsEqualTo(idxPropDef1: IndexedPropertyDefinition, idxPropDef2: IndexedPropertyDefinition): boolean;
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
}
/**
 * IndexedPropertyDefinition interface to be used with TypeContainer - removes circular dependency
 */
export interface IIndexedPropertyDefinition {
    new (uri: string, index: string): IndexedPropertyDefinition;
}

/**
 * @internal Represents Integer property defintion.
 */
 class IntPropertyDefinition extends GenericPropertyDefinition<number> {
    /**
     * @internal Initializes a new instance of the **IntPropertyDefinition** class.
     *
     * @param   {string}            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}            xmlElementName   Name of the XML element.
     * @param   {string}            uri              The URI.
     * @param   {ExchangeVersion}   version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **IntPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **IntPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     * @param   {boolean}                   isNullable       Indicates that this property definition is for a nullable property.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion, isNullable: boolean);
    /**
     * @internal Parses the specified value (added to workaround Generic based value conversion in c#).
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    Parse(value: string): any;
}

 class ListValuePropertyDefinition<TPropertyValue> extends GenericPropertyDefinition<TPropertyValue> {
    Parse(value: string): any;
}
/**
 * @internal Represents the definition for the meeting time zone property.
 */
 class MeetingTimeZonePropertyDefinition extends PropertyDefinition {
    /**
     * Gets the property type.
     */
    Type: any;
    /**
     * @internal Initializes a new instance of the **MeetingTimeZonePropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Loads the property value from json.
     *
     * @param   {any}               jsObject         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void;
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
}

/**
 * @internal Represents permission set property definition.
 */
 class PermissionSetPropertyDefinition extends ComplexPropertyDefinitionBase {
    /**
     * Gets the property type.
     */
    Type: any;
    /**
     * @internal Initializes a new instance of the **PermissionSetPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Creates the property instance.
     *
     * @param   {ServiceObject}   owner   The owner.
     * @return  {ComplexProperty}       ComplexProperty.
     */
    CreatePropertyInstance(owner: ServiceObject): ComplexProperty;
}
/**
 * Represents the definition of a folder or item property.
 */
 abstract class PropertyDefinition extends ServiceObjectPropertyDefinition {




    /**
     * @internalGets a value indicating whether this property definition is for a nullable type (ref, int?, bool?...).
     */
    IsNullable: boolean;
    /**
     * Gets the name of the property.
     */
    Name: string;
    /**
     * Gets the minimum Exchange version that supports this property.
     *
     * @value {ExchangeVersion} The version.
     */
    Version: ExchangeVersion;
    /**
     * @internalGets the name of the XML element.
     *
     * @value {string}  The name of the XML element.
     */
    XmlElementName: string;
    /**
     * @internal Initializes a new instance of the **PropertyDefinition** class.
     *
     * @param   {string}            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}            xmlElementName   Name of the XML element.
     * @param   {string}            uri              The URI.
     * @param   {ExchangeVersion}   version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **PropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **PropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internalGets a list of associated internal properties.
     *
     * @return  {PropertyDefinition[]}      A list of PropertyDefinition objects.
     * @remarks This is a hack. It is here (currently) solely to help the API register the MeetingTimeZone property definition that is internal.
     */
    GetAssociatedInternalProperties(): PropertyDefinition[];
    /**
     * @internalGets the property definition's printable name.
     *
     * @return  {string}      The property definition's printable name.
     */
    GetPrintableName(): string;
    /**
     * @internalDetermines whether the specified flag is set.
     *
     * @param   {PropertyDefinitionFlags}   flag   The flag.
     * @return  {boolean}   true if the specified flag is set; otherwise, false.
     */
    HasFlag(flag: PropertyDefinitionFlags): boolean;
    /**
     * @internalDetermines whether the specified flag is set.
     *
     * @param   {PropertyDefinitionFlags}   flag      The flag.
     * @param   {ExchangeVersion}           version   Requested version.
     * @return  {boolean}                   true if the specified flag is set; otherwise, false.
     */
    HasFlag(flag: PropertyDefinitionFlags, version: ExchangeVersion): boolean;
    /**
     * @internal Loads the property value from json.
     *
     * @param   {any}               jsObject         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    abstract LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void;
    /**
     * @internalRegisters associated internal properties.
     *
     * @param   {PropertyDefinition[]}   properties   The list in which to add the associated properties.
     */
    RegisterAssociatedInternalProperties(properties: PropertyDefinition[]): void;
    /**
     * @internalWrites the property value to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    abstract WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
}
/**
 * Represents the base class for all property definitions.
 */
 abstract class PropertyDefinitionBase {
    /**
     * Gets the minimum Exchange version that supports this property.
     *
     * @value {ExchangeVersion} The version.
     */
    Version: ExchangeVersion;
    /**
     * Gets the type of the property.
     */
    Type: any;
    /**
     * @internal Initializes a new instance of the **PropertyDefinitionBase** class.
     */
    constructor();
    /**
     * @internal Gets the property definition's printable name.
     *
     * @return  {string}      The property definition's printable name.
     */
    abstract GetPrintableName(): string;
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    abstract GetXmlElementName(): string;
    ToString(): string;
    /**
     * @internal load from XMLJsObject.
     *
     * @param   {any}   jsonObject   The json object.
     * @return  {PropertyDefinitionBase}        True if property was loaded.
     */
    static LoadFromXmlJsObject(jsObject: any): PropertyDefinitionBase;
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    abstract WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
/**
 * @internal Represenrs recurrence property definition.
 */
 class RecurrencePropertyDefinition extends PropertyDefinition {
    /**
     * Gets the property type.
     */
    Type: any;
    /**
     * @internal Initializes a new instance of the **RecurrencePropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * Gets the recurrence from string.
     *
     * @param   {string}   recurranceString   The recurrance string.
     * @return  {Recurrence}    Recurrence
     */

    /**
     * Gets the recurrence range.
     *
     * @param   {string}            recurrenceRangeString   The recurrence range string.
     * @return  {RecurrenceRange}   RecurrenceRange
     */

    /**
     * @internal Loads the property value from json.
     *
     * @param   {any}               jsObject         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void;
    /**
     * @internal Writes the property value to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
}
 class ResponseObjectsPropertyDefinition extends PropertyDefinition {
    /**
     * @internal Gets a value indicating whether this property definition is for a nullable type (ref, int?, bool?...).
     */
    IsNullable: boolean;
    /**
     * Gets the property type.
     */
    Type: any;
    /**
     * Gets the response action.
     *
     * @param   {string}   responseActionString   The response action string.
     * @return  {ResponseActions}       ResponseActions
     */

    /**
     * @internal Loads the property value from json.
     *
     * @param   {any}               jsObject         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void;
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
}

/**
 * @internal Represents a property definition for DateTime values scoped to a specific time zone property.
 */
 class ScopedDateTimePropertyDefinition extends DateTimePropertyDefinition {

    /**
     * @internal Initializes a new instance of the **ScopedDateTimePropertyDefinition** class.
     *
     * @param   {string}                            propertyName                    Name of the property.
     * @param   {string}                            xmlElementName                  Name of the XML element.
     * @param   {ExchangeVersion}                   version                         The version.
     * @param   {string}                            uri                             The URI.
     * @param   {PropertyDefinitionFlags}           flags                           The flags.
     * @param   {GetPropertyDefinitionCallback}     getPropertyDefinitionCallback   The callback that will be used to retrieve the time zone property.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion, getPropertyDefinitionCallback: GetPropertyDefinitionCallback);
    /**
     * Gets the time zone property to which to scope times.
     *
     * @param   {ExchangeVersion}   version   The EWS version for which the property is to be retrieved.
     * @return  {PropertyDefinition}             The PropertyDefinition of the scoping time zone property.
     */

    /**
     * @internal Scopes the date time property to the appropriate time zone, if necessary.
     *
     * @param   {ExchangeServiceBase}   service             The service emitting the request.
     * @param   {DateTime}              dateTime            The date time.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the scoping is to be performed in the context of an update operation.
     * @return  {DateTime}              The converted DateTime.
     */
    ScopeToTimeZone(service: ExchangeServiceBase, dateTime: DateTime, propertyBag: PropertyBag, isUpdateOperation: boolean): DateTime;
}
/**
 * @internal Defines a callback method used to get a reference to a property definition.
 *
 * @param   {ExchangeVersion}   version   The EWS version for which the property is to be retrieved.
 */
export interface GetPropertyDefinitionCallback {
    (version: ExchangeVersion): PropertyDefinition;
}

/**
 * Represents a property definition for a service object.
 */
 abstract class ServiceObjectPropertyDefinition extends PropertyDefinitionBase {

    /**
     * Gets the minimum Exchange version that supports this property.
     *
     * @value {ExchangeVersion} The version.
     */
    Version: ExchangeVersion;
    /**
     * @internal Gets the URI of the property definition.
     */
    Uri: string;
    /**
     * @internal Initializes a new instance of the **ServiceObjectPropertyDefinition** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **ServiceObjectPropertyDefinition** class.
     *
     * @param   {string}   uri   The URI.
     */
    constructor(uri: string);
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string;
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
}
/**
 * @internal Represents a property definition for properties of type TimeZoneInfo.
 */
 class StartTimeZonePropertyDefinition extends TimeZonePropertyDefinition {
    /**
     * @internal Initializes a new instance of the **StartTimeZonePropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internalDetermines whether the specified flag is set.
     *
     * @param   {PropertyDefinitionFlags}   flag      The flag.
     * @param   {ExchangeVersion}           version   Requested version.
     * @return  {boolean}                   true if the specified flag is set; otherwise, false.
     */
    HasFlag(flag: PropertyDefinitionFlags, version?: ExchangeVersion): boolean;
    /**
     * @internal Registers associated internal properties.
     *
     * @param   {PropertyDefinition[]}   properties   The list in which to add the associated properties.
     */
    RegisterAssociatedInternalProperties(properties: PropertyDefinition[]): void;
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteToXml(writer: EwsServiceXmlWriter): void;
}

/**
 * @internal Represents String property definition.
 */
 class StringPropertyDefinition extends TypedPropertyDefinition {
    /**
     * @internal Gets a value indicating whether this property definition is for a nullable type (ref, int?, bool?...).
     */
    IsNullable: boolean;
    /**
     * @internal Gets the property type.
     */
    Type: any;
    /**
     * @internal Initializes a new instance of the **StringPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Parses the specified value.
     *
     * @param   {string}   value   The value.
     * @return  {any}           String value.
     */
    Parse(value: string): any;
}
/**
 * @internal Represents a task delegation property definition.
 */
 class TaskDelegationStatePropertyDefinition extends GenericPropertyDefinition<TaskDelegationState> {




    /**
     * @internal Initializes a new instance of the **TaskDelegationStatePropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Parses the specified value (added to workaround Generic based value conversion in c#).
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    Parse(value: string): any;
    /**
     * Convert instance to string.
     *
     * @param   {any}       value   The value.
     * @return  {string}    TaskDelegationState value.
     */
    ToString(value?: any): string;
}
/**
 * @internal Represents TimeSpan property definition. based on moment Duration
 */
 class TimeSpanPropertyDefinition extends GenericPropertyDefinition<TimeSpan> {
    /**
     * @internal Initializes a new instance of the **TimeSpanPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Parses the specified value (added to workaround Generic based value conversion in c#).
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    Parse(value: string): any;
    /**
     * Convert instance to string.
     *
     * @param   {any}       value   The value.
     * @return  {string}    TimeSpan value.
     */
    ToString(value?: any): string;
}
/**
 * @internal Represents a property definition for properties of type TimeZoneInfo.
 */
 class TimeZonePropertyDefinition extends PropertyDefinition {
    /**
     * Gets the property type.
     */
    Type: any;
    /**
     * @internal Initializes a new instance of the **TimeZonePropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Loads the property value from json.
     *
     * @param   {any}               jsObject         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void;
    /**
     * @internal Writes the property value to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
}
/**
 * @internal Represents typed property definition.
 */
 abstract class TypedPropertyDefinition extends PropertyDefinition {

    /**
     * @internal Gets a value indicating whether this property definition is for a nullable type (ref, int?, bool?...).
     *
     */
    IsNullable: boolean;
    /**
     * @internal Initializes a new instance of the **TypedPropertyDefinition** class.
     *
     * @param   {string}            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}            xmlElementName   Name of the XML element.
     * @param   {string}            uri              The URI.
     * @param   {ExchangeVersion}   version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **TypedPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **TypedPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     * @param   {boolean}                   isNullable       Indicates that this property definition is for a nullable property.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion, isNullable: boolean);
    /**
     * @internal Loads the property value from XMLJsObject.
     *
     * @param   {any}               value         The JsObject value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void;
    /**
     * @internal Parses the specified value.
     *
     * @param   {string}   value   The value.
     * @return  {any}       Typed value.
     */
    abstract Parse(value: string): any;
    /**
     * @internal Convert instance to string.
     *
     * @param   {any}   value   The value.
     * @return  {string}        String representation of property value.
     */
    ToString(value?: any): string;
    toString(value?: any): string;
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
}

/**
 * Represents a date range view of appointments in calendar folder search operations.
 */
 class CalendarView extends ViewBase {




    /**
     * Gets or sets the start date.
     */
    StartDate: DateTime;
    /**
     * Gets or sets the end date.
     */
    EndDate: DateTime;
    /**
     * The maximum number of items the search operation should return.
     */
    MaxItemsReturned: number;
    /**
     * Gets or sets the search traversal mode. Defaults to ItemTraversal.Shallow.
     */
    Traversal: ItemTraversal;
    /**
     * Initializes a new instance of CalendarView.
     *
     * @param   {DateTime}  startDate          The start date.
     * @param   {DateTime}  endDate            The end date.
     */
    constructor(startDate: DateTime, endDate: DateTime);
    /**
     * Initializes a new instance of CalendarView.
     *
     * @param   {DateTime}  startDate          The start date.
     * @param   {DateTime}  endDate            The end date.
     * @param   {number}    maxItemsReturned   The maximum number of items the search operation should return.
     */
    constructor(startDate: DateTime, endDate: DateTime, maxItemsReturned: number);
    /**
     * @internal Gets the maximum number of items or folders the search operation should return.
     *
     * @return  {number}      The maximum number of items the search operation should return.
     */
    GetMaxEntriesReturned(): number;
    /**
     * @internal Gets the type of service object this view applies to.
     *
     * @return  {ServiceObjectType}      A ServiceObjectType value.
     */
    GetServiceObjectType(): ServiceObjectType;
    /**
     * @internal Gets the name of the view XML element.
     *
     * @return  {string}      XML element name.
     */
    GetViewXmlElementName(): string;
    /**
     * @internal Validate instance.
     *
     * @param   {ServiceRequestBase}   request   The request using this view.
     */
    InternalValidate(request: ServiceRequestBase): void;
    /**
     * @internal Writes the search settings to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer    The writer.
     * @param   {Grouping}              groupBy   The group by clause.
     */
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void;
    /**
     * @internal Write to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    InternalWriteViewToXml(writer: EwsServiceXmlWriter): void;
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    /**
     * @internal Writes OrderBy property to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer
     */
    WriteOrderByToXml(writer: EwsServiceXmlWriter): void;
}
 class ConversationIndexedItemView extends PagedView {
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
}
 class FindConversationResults {
    Conversations: Conversation[];
    HighlightTerms: HighlightTerm[];
    TotalCount: number;
    IndexedOffset: number;
}

/**
 * Represents the results of a folder search operation.
 */
 class FindFoldersResults {




    /**
     * Gets the total number of folders matching the search criteria available in the searched folder.
     */
    TotalCount: number;
    /**
     * Gets the offset that should be used with FolderView to retrieve the next page of folders in a FindFolders operation.
     */
    NextPageOffset: number;
    /**
     * Gets a value indicating whether more folders matching the search criteria.
     */
    MoreAvailable: boolean;
    /**
     * Gets a collection containing the folders that were found by the search operation.
     */
    Folders: Folder[];
    /**
     * Initializes a new instance of the **FindFoldersResults** class.
     *
     */
    constructor();
}
 class FindItemsResults<TItem extends Item> {
    TotalCount: number;
    NextPageOffset: number;
    MoreAvailable: boolean;
    Items: TItem[];
    HighlightTerms: HighlightTerm[];


    constructor();
}

/**
 * Represents the view settings in a folder search operation.
 *
 */
 class FolderView extends PagedView {

    /**
     * Gets or sets the search traversal mode. Defaults to FolderTraversal.Shallow.
     *
     */
    Traversal: FolderTraversal;
    /**
     * Initializes a new instance of the **FolderView** class.
     *
     * @param   {number}   pageSize          The maximum number of elements the search operation should return.
     */
    constructor(pageSize: number);
    /**
     * Initializes a new instance of the **FolderView** class.
     *
     * @param   {number}   pageSize          The maximum number of elements the search operation should return.
     * @param   {number}   offset            The offset of the view from the base point.
     */
    constructor(pageSize: number, offset: number);
    /**
     * Initializes a new instance of the **FolderView** class.
     *
     * @param   {number}   pageSize          The maximum number of elements the search operation should return.
     * @param   {number}   offset            The offset of the view from the base point.
     * @param   {number}   offsetBasePoint   The base point of the offset.
     */
    constructor(pageSize: number, offset: number, offsetBasePoint: OffsetBasePoint);
    /**
     * Gets the type of service object this view applies to.
     *
     * @return  {ServiceObjectType}      A ServiceObjectType value.
     */
    GetServiceObjectType(): ServiceObjectType;
    /**
     * Gets the name of the view XML element.
     *
     * @return  {type}      XML element name.
     */
    GetViewXmlElementName(): string;
    /**
     * Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
}
 class GroupedFindItemsResults<TItem extends Item> {
    TotalCount: number;
    NextPageOffset: number;
    MoreAvailable: boolean;
    ItemGroups: ItemGroup<TItem>[];

    GetEnumerator(): any;
}
 class Grouping {
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
}
 class PagedView extends ViewBase {
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
}
 class ViewBase {
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
}
 class ChangeCollection<TChange> {
    Count: number;
    Item: TChange;
    SyncState: string;
    MoreChangesAvailable: boolean;



    Add(change: TChange): void;
    GetEnumerator(): TChange[];
}
 class FolderChange extends Change {
    Folder: Folder;
    FolderId: FolderId;
    CreateId(): ServiceId;
}
 class ItemChange extends Change {
    Item: Item;
    IsRead: boolean;
    ItemId: ItemId;

    CreateId(): ServiceId;
}
 class PhoneCall extends ComplexProperty {


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
}
 class UnifiedMessaging {

    constructor(service: ExchangeService);
    DisconnectPhoneCall(id: PhoneCallId): any;
    GetPhoneCallInformation(id: PhoneCallId): PhoneCall;
    PlayOnPhone(itemId: ItemId, dialString: string): PhoneCall;
}
 class ConfigurationSettingsBase {
    ResponseType: AutodiscoverResponseType;
    RedirectTarget: string;
    Error: AutodiscoverError;

    ConvertSettings(smtpAddress: string, requestedSettings: UserSettingName[]): GetUserSettingsResponse;
    GetNamespace(): string;
    LoadFromXml(reader: EwsXmlReader): any;
    MakeRedirectionResponse(redirectUrl: Uri): any;
    TryReadCurrentXmlElement(reader: EwsXmlReader): boolean;
}
 class AutodiscoverRequest {
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
}
 class GetDomainSettingsResponseCollection extends AutodiscoverResponseCollection<GetDomainSettingsResponse> {
    CreateResponseInstance(): GetDomainSettingsResponse;
    GetResponseCollectionXmlElementName(): string;
    GetResponseInstanceXmlElementName(): string;
}
 class GetUserSettingsResponse extends AutodiscoverResponse {
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
}
 class GetUserSettingsResponseCollection extends AutodiscoverResponseCollection<GetUserSettingsResponse> {
    CreateResponseInstance(): GetUserSettingsResponse;
    GetResponseCollectionXmlElementName(): string;
    GetResponseInstanceXmlElementName(): string;
}
 abstract class ServiceObject {

    /** workaround for service variable exposer in console.log */




    /**
     * The property bag holding property values for this object.
     */
    PropertyBag: PropertyBag;
    /**
     * Gets the schema associated with this type of object.
     */
    Schema: ServiceObjectSchema;
    /**
     * Gets the ExchangeService the object is bound to.
     */
    Service: ExchangeService;
    /**
     * Indicates whether this object is a real store item, or if it's a local object that has yet to be saved.
     */
    IsNew: boolean;
    /**
     * Gets a value indicating whether the object has been modified and should be saved.
     */
    IsDirty: boolean;
    /**
     * Defines an event that is triggered when the service object changes.
     */

    /**
     * Internal constructor.
     *
     * @param   {ExchangeService}   service   EWS service to which this object belongs.
     */
    constructor(service: ExchangeService);
    /**
     * Gets the value of specified property in this instance.
     * This Indexer of c#
     *
     * @param   {PropertyDefinitionBase}   propertyDefinition   Definition of the property to get.
     */
    _getItem(propertyDefinition: PropertyDefinitionBase): any;
    /**
     * Triggers dispatch of the change event.
     */
    Changed(): void;
    /**
     * Clears the object's change log.
     */
    ClearChangeLog(): void;
    /**
     * Gets the name of the change XML element.
     *
     * @return  {string}      XML element name,
     */
    GetChangeXmlElementName(): string;
    /**
     * Gets the name of the delete field XML element.
     *
     * @return  {string}      XML element name,
     */
    GetDeleteFieldXmlElementName(): string;
    /**
     * Gets the extended properties collection.
     *
     * @return  {ExtendedPropertyCollection}      Extended properties collection.
     */
    GetExtendedProperties(): ExtendedPropertyCollection;
    /**
     * The unique Id of this object.
     *
     * @return  {ServiceId}      A ServiceId instance..
     */
    GetId(): ServiceId;
    /**
     * The property definition for the Id of this object.
     *
     * @return  {PropertyDefinition}      A PropertyDefinition instance.
     */
    GetIdPropertyDefinition(): PropertyDefinition;
    /**
     * Determines whether properties defined with ScopedDateTimePropertyDefinition require custom time zone scoping.
     *
     * @return  {boolean}      true if this item type requires custom scoping for scoped date/time properties; otherwise, false.
     */
    GetIsCustomDateTimeScopingRequired(): boolean;
    /**
     * Gets a value indicating whether a time zone SOAP header should be emitted in a CreateItem or UpdateItem request so this item can be property saved or updated.
     *
     * @param   {boolean}     isUpdateOperation   Indicates whether the operation being petrformed is an update operation.
     * @return  {boolean}     true if a time zone SOAP header should be emitted; otherwise, false.
     */
    GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean;
    /**
     * Gets the collection of loaded property definitions.
     *
     * @return  {PropertyDefinitionBase[]}      Collection of property definitions.
     */
    GetLoadedPropertyDefinitions(): PropertyDefinitionBase[];
    /**
     * Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    /**
     * Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema;
    /**
     * Gets the name of the set field XML element.
     *
     * @return  {string}      XML element name,
     */
    GetSetFieldXmlElementName(): string;
    /**
     * GetXmlElementName retrieves the XmlElementName of this type based on the EwsObjectDefinition attribute that decorates it, if present.
     *
     * @return  {string}      The XML element name associated with this type.
     */
    GetXmlElementName(): string;
    /**
     * This methods lets subclasses of ServiceObject override the default mechanism by which the XML element name associated with their type is retrieved.
     *
     * @return  {string}      The XML element name associated with this type. If this method returns null or empty, the XML element name associated with this type is determined by the EwsObjectDefinition attribute that decorates the type, if present.
     */
    GetXmlElementNameOverride(): string;
    /**
     * Deletes the object.
     *
     * @param   {DeleteMode}              deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}   sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
     * @param   {AffectedTaskOccurrence}  affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
     */
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): IPromise<void>;
    /**
     * Loads the specified set of properties on the object.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     */
    InternalLoad(propertySet: PropertySet): IPromise<void>;
    /**
     * Loads the first class properties. Calling this method results in a call to EWS.
     */
    Load(): IPromise<void>;
    /**
     * Loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     */
    Load(propertySet?: PropertySet): IPromise<void>;
    /**
     * Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     * @param   {boolean}             clearPropertyBag        if set to true [clear property bag].
     * @param   {PropertySet}         requestedPropertySet    The property set.
     * @param   {boolean}             summaryPropertiesOnly   if set to true [summary props only].
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService, clearPropertyBag: boolean, requestedPropertySet?: PropertySet, summaryPropertiesOnly?: boolean): void;
    /**
     * Throws exception if this is a new service object.
     */
    ThrowIfThisIsNew(): void;
    /**
     * Throws exception if this is not a new service object.
     */
    ThrowIfThisIsNotNew(): void;
    /**
     * Try to get the value of a specified extended property in this instance.
     *
     * @param   {ExtendedPropertyDefinition}  propertyDefinition   The property definition.
     * @param   {IOutParam<T>}                propertyValue        The property value.
     * @return  {boolean}                     True if property retrieved, false otherwise.
     */
    TryGetExtendedProperty<T>(propertyDefinition: ExtendedPropertyDefinition, propertyValue: IOutParam<T>): boolean;
    /**
     * Try to get the value of a specified property in this instance.
     *
     * @param   {PropertyDefinitionBase}  propertyDefinition   The property definition.
     * @param   {IOutParam<T>}            propertyValue        The property value.
     * @return  {boolean}                 True if property retrieved, false otherwise.
     */
    TryGetProperty<T>(propertyDefinition: PropertyDefinitionBase, propertyValue: IOutParam<T>): boolean;
    /**
     * Validates this instance.
     */
    Validate(): void;
    /**
     * Writes service object as XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteToXml(writer: EwsServiceXmlWriter): void;
    /**
     * Writes service object for update as XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteToXmlForUpdate(writer: EwsServiceXmlWriter): void;
}
/**
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
    CreateItemFromItemClass(itemAttachment: ItemAttachment, itemClass: string, isNew: boolean): Item;
}

 class ArchiveItemResponse extends ServiceResponse {
    Item: Item;

    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item;
    ReadElementsFromJson(responseObject: any, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
 class AttendeeAvailability extends ServiceResponse {
    CalendarEvents: CalendarEvent[];
    ViewType: FreeBusyViewType;
    MergedFreeBusyStatus: LegacyFreeBusyStatus[];
    WorkingHours: WorkingHours;




    LoadFreeBusyViewFromXmlJsObject(jsObject: any, viewType: FreeBusyViewType, service: ExchangeService): void;
}

/**
 * ## *Not Implemented*
 */
 class ConvertIdResponse extends ServiceResponse {
    ConvertedId: AlternateIdBase;

    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}

/**
 * ## *Not Implemented*
 */
 class CreateAttachmentResponse extends ServiceResponse {
    Attachment: Attachment;

    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class CreateFolderResponse extends ServiceResponse {

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

/**
 * ## *Not Implemented*
 */
 class DelegateManagementResponse extends ServiceResponse {
    DelegateUserResponses: DelegateUserResponse[];



    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}

/**
 * ## *Not Implemented*
 */
 class DelegateUserResponse extends ServiceResponse {
    DelegateUser: DelegateUser;


    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}

/**
 * ## *Not Implemented*
 */
 class DeleteAttachmentResponse extends ServiceResponse {
    Attachment: Attachment;

    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}

/**
 * ## *Not Implemented*
 */
 class DisableAppResponse extends ServiceResponse {
}
/**
 * ## *Not Implemented*
 */
 class ExecuteDiagnosticMethodResponse extends ServiceResponse {
    ReturnValue: any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}

 class ExpandGroupResponse extends ServiceResponse {

    Members: ExpandGroupResults;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
/**
 * ## *Not Implemented*
 */
 class FindConversationResponse extends ServiceResponse {
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
}
 class FindItemResponse<TItem extends Item> extends ServiceResponse {
    GroupedFindResults: GroupedFindItemsResults<TItem>;
    Results: FindItemsResults<TItem>;




    constructor(isGrouped: boolean, propertySet: PropertySet);
    CreateItemInstance(service: ExchangeService, xmlElementName: string): TItem;
    InternalReadItemsFromJson(jsonObject: any, propertySet: PropertySet, service: ExchangeService, destinationList: TItem[]): void;
    InternalReadItemsFromXmlJsObject(jsonObject: any, propertySet: PropertySet, service: ExchangeService, destinationList: TItem[]): void;
    ReadElementsFromJson(responseObject: any, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}

/**
 * ## *Not Implemented*
 */
 class GetAppManifestsResponse extends ServiceResponse {
    Manifests: any;
    Apps: ClientApp[];


    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void;
    ReadFromExchange2013(reader: EwsServiceXmlReader): void;
    ReadFromExchange2013Sp1(reader: EwsServiceXmlReader): void;
}
/**
 * ## *Not Implemented*
 */
 class GetAppMarketplaceUrlResponse extends ServiceResponse {
    AppMarketplaceUrl: string;

    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void;
}

/**
 * Represents the response to an individual attachment retrieval request.
 */
 class GetAttachmentResponse extends ServiceResponse {

    Attachment: Attachment;
    /**
     * @internal Initializes a new instance of the  class.
     *
     * @param   {Attachment}   attachment   The attachment.
     */
    constructor(attachment: Attachment);
    /**
     * @internal Reads response elements from XMLJsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service          The service.
     */
    ReadElementsFromXmlJsObject(jsObject: any, service: ExchangeService): void;
}

/**
 * ## *Not Implemented*
 */
 class GetClientAccessTokenResponse extends ServiceResponse {
    Id: string;
    TokenType: ClientAccessTokenType;
    TokenValue: string;
    TTL: number;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void;
}

/**
 * ## *Not Implemented*
 */
 class GetClientExtensionResponse extends ServiceResponse {
    ClientExtensions: ClientExtension[];
    RawMasterTableXml: string;


    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}

/**
 * ## *Not Implemented*
 */
 class GetConversationItemsResponse extends ServiceResponse {
    Conversation: ConversationResponse;

    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}

/**
 * ## *Not Implemented*
 */
 class GetDelegateResponse extends DelegateManagementResponse {
    MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;

    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}

/**
 * ## *Not Implemented*
 */
 class GetDiscoverySearchConfigurationResponse extends ServiceResponse {
    DiscoverySearchConfigurations: DiscoverySearchConfiguration[];

    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
/**
 * ## *Not Implemented*
 */
 class GetEncryptionConfigurationResponse extends ServiceResponse {
    ImageBase64: string;
    EmailText: string;
    PortalText: string;
    DisclaimerText: string;




    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}

/**
 * ## *Not Implemented*
 */
 class GetEventsResponse extends ServiceResponse {
    Results: GetEventsResults;

    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void;
}
 class GetFolderResponse extends ServiceResponse {
    Folder: Folder;


    constructor(folder: Folder, propertySet: PropertySet);
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder;
    ReadElementsFromJson(responseObject: any, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}

/**
 * ## *Not Implemented*
 */
 class GetHoldOnMailboxesResponse extends ServiceResponse {
    HoldResult: MailboxHoldResult;

    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}

/**
 * ## *Not Implemented*
 */
 class GetInboxRulesResponse extends ServiceResponse {
    Rules: RuleCollection;

    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void;
}
 class GetItemResponse extends ServiceResponse {


    Item: Item;
    constructor(item: Item, propertySet: PropertySet);
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}

/**
 * ## *Not Implemented*
 */
 class GetNonIndexableItemDetailsResponse extends ServiceResponse {
    NonIndexableItemsResult: NonIndexableItemDetailsResult;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}

/**
 * ## *Not Implemented*
 */
 class GetNonIndexableItemStatisticsResponse extends ServiceResponse {
    NonIndexableStatistics: NonIndexableItemStatistic[];
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}

 class GetPasswordExpirationDateResponse extends ServiceResponse {

    PasswordExpirationDate: DateTime;
    ReadElementsFromJson(responseObject: any, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}

/**
 * ## *Not Implemented*
 */
 class GetPhoneCallResponse extends ServiceResponse {
    PhoneCall: PhoneCall;

    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}

/**
 * ## *Not Implemented*
 */
 class GetRoomListsResponse extends ServiceResponse {
    RoomLists: EmailAddressCollection;

    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}

/**
 * ## *Not Implemented*
 */
 class GetRoomsResponse extends ServiceResponse {
    Rooms: EmailAddress[];

    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
/**
 * ## *Not Implemented*
 */
 class GetSearchableMailboxesResponse extends ServiceResponse {
    SearchableMailboxes: SearchableMailbox[];
    FailedMailboxes: FailedSearchMailbox[];

    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
/**
 * ## *Not Implemented*
 */
 class GetServerTimeZonesResponse extends ServiceResponse {
    TimeZones: any[];

    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}

 enum ConnectionStatus {
    OK = 0,
    Closed = 1,
}
/**
 * ## *Not Implemented*
 */
 class GetStreamingEventsResponse extends ServiceResponse {
    Results: GetStreamingEventsResults;
    ErrorSubscriptionIds: string[];


    LoadExtraErrorDetailsFromXml(reader: EwsServiceXmlReader, xmlElementName: string): boolean;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void;
}

/**
 * ## *Not Implemented*
 */
 class GetUserConfigurationResponse extends ServiceResponse {
    UserConfiguration: UserConfiguration;

    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
/**
 * @internal Represents response to GetUserOofSettings request.
 */
 class GetUserOofSettingsResponse extends ServiceResponse {

    /**
     * Gets or sets the OOF settings.
     *
     * @value The oof settings.
     */
    OofSettings: OofSettings;
    /**
     * @internal Initializes a new instance of the **GetUserOofSettingsResponse** class.
     */
    constructor();
}

/**
 * ## *Not Implemented*
 */
 class GetUserRetentionPolicyTagsResponse extends ServiceResponse {
    RetentionPolicyTags: RetentionPolicyTag[];

    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void;
}

/**
 * ## *Not Implemented*
 */
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

/**
 * Represents a response to a Move or Copy operation.
 *
 */
 class MoveCopyItemResponse extends ServiceResponse {

    /**
     * Gets the copied or moved item. Item is null if the copy or move operation was between two mailboxes or between a mailbox and a public folder.
     *
     */
    Item: Item;
    /**
     * @internal Initializes a new instance of the *MoveCopyItemResponse* class.
     *
     */
    constructor();
    /**
     * @internal Gets Item instance.
     *
     * @param   {ExchangeService}   service          The service.
     * @param   {string}            xmlElementName   Name of the XML element.
     * @return  {Item}              Item.
     */
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item;
    /**
     * @internal Reads response elements from XML parsed to JS Object.
     *
     * @param   {any}               responseObject   The response object.
     * @param   {ExchangeService}   service          The service.
     */
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}

/**
 * ## *Not Implemented*
 */
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

/**
 * ## *Not Implemented*
 */
 class SearchMailboxesResponse extends ServiceResponse {
    SearchResult: SearchMailboxesResult;

    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
 class ServiceResponse {
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
}
 class ServiceResponseCollection<TResponse extends ServiceResponse> {
    Count: number;
    Responses: TResponse[];
    OverallResult: ServiceResult;


    Add(response: TResponse): void;
    GetEnumerator(): any;
    __thisIndexer(index: number): TResponse;
}

/**
 * ## *Not Implemented*
 */
 class SetEncryptionConfigurationResponse extends ServiceResponse {
}

/**
 * ## *Not Implemented*
 */
 class SetHoldOnMailboxesResponse extends ServiceResponse {
    HoldResult: MailboxHoldResult;

    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}
/**
 * ## *Not Implemented*
 */
 class SubscribeResponse<TSubscription> extends ServiceResponse {
    Subscription: TSubscription;

    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any;
}

 class SuggestionsResponse extends ServiceResponse {
    Suggestions: Suggestion[];

    LoadSuggestedDaysFromXml(jsonProperty: any, service: ExchangeService): void;
}

/**
 * ## *Not Implemented*
 */
 class SyncFolderHierarchyResponse extends SyncResponse<Folder, FolderChange> {
    SummaryPropertiesOnly: boolean;
    CreateChangeInstance(): FolderChange;
    GetChangeElementName(): string;
    GetChangeIdElementName(): string;
    GetIncludesLastInRangeXmlElementName(): string;
}

/**
 * ## *Not Implemented*
 */
 class SyncFolderItemsResponse extends SyncResponse<Item, ItemChange> {
    SummaryPropertiesOnly: boolean;
    CreateChangeInstance(): ItemChange;
    GetChangeElementName(): string;
    GetChangeIdElementName(): string;
    GetIncludesLastInRangeXmlElementName(): string;
}

/**
 * ## *Not Implemented*
 */
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

/**
 * ## *Not Implemented*
 */
 class UninstallAppResponse extends ServiceResponse {
}

 class UpdateFolderResponse extends ServiceResponse {

    constructor(folder: Folder);
    GetObjectInstance(session: ExchangeService, xmlElementName: string): Folder;
    Loaded(): void;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}

/**
 * ## *Not Implemented*
 */
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
}
/**
 * ## *Not Implemented*
 */
 class AddDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {
    MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
    DelegateUsers: DelegateUser[];


    CreateResponse(): DelegateManagementResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
/**
 * ## *Not Implemented*
 */
 class ApplyConversationActionRequest extends MultiResponseServiceRequest<ServiceResponse> {
    ConversationActions: ConversationAction[];

    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class ArchiveItemRequest extends MultiResponseServiceRequest<ArchiveItemResponse> {
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

/**
 * ## *Not Implemented*
 */
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

/**
 * ## *Not Implemented*
 */
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
}
/**
 * ## *Not Implemented*
 */
 class CreateAttachmentRequest extends MultiResponseServiceRequest<CreateAttachmentResponse> {
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
}
 class CreateFolderRequest extends CreateRequest<Folder, ServiceResponse> {
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
}
 class CreateItemRequest extends CreateItemRequestBase<Item, ServiceResponse> {
    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    Validate(): void;
}
 class CreateItemRequestBase<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends CreateRequest<TServiceObject, TResponse> {
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
}
 class CreateResponseObjectRequest extends CreateItemRequestBase<ServiceObject, CreateResponseObjectResponse> {
    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): CreateResponseObjectResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
}
/**
 * ## *Not Implemented*
 */
 class CreateUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> {
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
}
/**
 * ## *Not Implemented*
 */
 class DelegateManagementRequestBase<TResponse> extends SimpleServiceRequestBase {
    Mailbox: Mailbox;

    CreateResponse(): TResponse;
    Execute(): TResponse;
    ParseResponse(reader: EwsServiceXmlReader): any;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
/**
 * ## *Not Implemented*
 */
 class DeleteAttachmentRequest extends MultiResponseServiceRequest<DeleteAttachmentResponse> {
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
}
 class DeleteRequest<TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {

    DeleteMode: DeleteMode;
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    InternalToJson(body: any): any;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
}
/**
 * ## *Not Implemented*
 */
 class DeleteUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> {
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

/**
 * ## *Not Implemented*
 */
 class DisableAppRequest extends SimpleServiceRequestBase {


    Execute(): DisableAppResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
/**
 * ## *Not Implemented*
 */
 class DisconnectPhoneCallRequest extends SimpleServiceRequestBase {
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

/**
 * ## *Not Implemented*
 */
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
}
 class ExpandGroupRequest extends MultiResponseServiceRequest<ExpandGroupResponse> {

    EmailAddress: EmailAddress;
    constructor(service: ExchangeService);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ExpandGroupResponse;
    GetExpectedResponseMessageCount(): number;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseMessageXmlElementName(): string;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
/**
 * ## *Not Implemented*
 */
 class FindConversationRequest extends SimpleServiceRequestBase {
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
}

/**
 * @internal Represents a **FindItem** request.
 *
 * @type <TItem>   Item type.
 */
 class FindItemRequest<TItem extends Item> extends FindRequest<FindItemResponse<TItem>> {

    /**
     * Gets or sets the group by.
     *
     * @value The group by.
     */
    GroupBy: Grouping;
    /**
     * @internal Initializes a new instance of the **FindItemRequest** class.
     *
     * @param   {ExchangeService}       service             The service.
     * @param   {ServiceErrorHandling}  errorHandlingMode   Indicates how errors should be handled.
     */
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    /**
     * Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}            responseIndex   Index of the response.
     * @return  {FindItemResponse<TItem>}           Service response.
     */
    CreateServiceResponse(service: ExchangeService, responseIndex: number): FindItemResponse<TItem>;
    /**
     * @internal Gets the group by clause.
     *
     * @return  {Grouping}      The group by clause, null if the request does not have or support grouping.
     */
    GetGroupBy(): Grouping;
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      XML element name.
     */
    GetResponseMessageXmlElementName(): string;
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    GetResponseXmlElementName(): string;
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string} XML element name.
     */
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

/**
 * ## *Not Implemented*
 */
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
}

/**
 * @internal Represents a GetAttachment request.
 */
 class GetAttachmentRequest extends MultiResponseServiceRequest<GetAttachmentResponse> {




    /**
     * Gets the attachments.
     *
     * @value The attachments.
     */
    Attachments: Attachment[];
    /**
     * Gets the attachment ids.
     *
     * @value The attachment ids.
     */
    AttachmentIds: string[];
    /**
     * Gets the additional properties.
     *
     * @value The additional properties.
     */
    AdditionalProperties: PropertyDefinitionBase[];
    /**
     * Gets or sets the type of the body.
     *
     * @value The type of the body.
     */
    BodyType: BodyType;
    /**
     * @internal Gets a value indicating whether the TimeZoneContext SOAP header should be emitted.
     *
     * @value *true* if the time zone should be emitted; otherwise, *false*.
     */
    EmitTimeZoneHeader: boolean;
    /**
     * @internal Initializes a new instance of the **GetAttachmentRequest** class.
     *
     * @param   {ExchangeService}       service             The service.
     * @param   {ServiceErrorHandling}  errorHandlingMode   Indicates how errors should be handled.
     */
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}            responseIndex   Index of the response.
     * @return  {GetAttachmentResponse}             Service response.
     */
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetAttachmentResponse;
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of expected response messages.
     */
    GetExpectedResponseMessageCount(): number;
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      XML element name,
     */
    GetResponseMessageXmlElementName(): string;
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    GetResponseXmlElementName(): string;
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    GetXmlElementName(): string;
    /**
     * @internal Validate request.
     */
    Validate(): void;
    /**
     * @internal Writes attachment id elements.
     *
     * @param   {EwsServiceXmlWriter}   writer         The writer.
     * @param   {string}                attachmentId   The attachment id.
     */
    WriteAttachmentIdXml(writer: EwsServiceXmlWriter, attachmentId: string): void;
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
/**
 * ## *Not Implemented*
 */
 class GetClientAccessTokenRequest extends MultiResponseServiceRequest<GetClientAccessTokenResponse> {
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

/**
 * ## *Not Implemented*
 */
 class GetClientExtensionRequest extends SimpleServiceRequestBase {







    Execute(): GetClientExtensionResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
/**
 * ## *Not Implemented*
 */
 class GetConversationItemsRequest extends MultiResponseServiceRequest<GetConversationItemsResponse> {
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

/**
 * ## *Not Implemented*
 */
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

/**
 * ## *Not Implemented*
 */
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

/**
 * ## *Not Implemented*
 */
 class GetEncryptionConfigurationRequest extends SimpleServiceRequestBase {
    Execute(): GetEncryptionConfigurationResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}

/**
 * ## *Not Implemented*
 */
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
}
 class GetFolderRequest extends GetFolderRequestBase<GetFolderResponse> {
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetFolderResponse;
}
 class GetFolderRequestBase<TResponse extends ServiceResponse> extends GetRequest<Folder, TResponse> {
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
}
 class GetFolderRequestForLoad extends GetFolderRequestBase<ServiceResponse> {
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
}

/**
 * ## *Not Implemented*
 */
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

/**
 * ## *Not Implemented*
 */
 class GetInboxRulesRequest extends SimpleServiceRequestBase {
    MailboxSmtpAddress: string;

    Execute(): GetInboxRulesResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class GetItemRequest extends GetItemRequestBase<GetItemResponse> {
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
}
 class GetItemRequestForLoad extends GetItemRequestBase<ServiceResponse> {
    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse;
}
/**
 * ## *Not Implemented*
 */
 class GetNonIndexableItemDetailsRequest extends SimpleServiceRequestBase {
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

/**
 * ## *Not Implemented*
 */
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
    constructor(service: ExchangeService);
    Execute(): IPromise<GetPasswordExpirationDateResponse>;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(jsonBody: any): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
/**
 * ## *Not Implemented*
 */
 class GetPhoneCallRequest extends SimpleServiceRequestBase {
    Id: PhoneCallId;

    Execute(): GetPhoneCallResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class GetRequest<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {
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
}
/**
 * ## *Not Implemented*
 */
 class GetRoomsRequest extends SimpleServiceRequestBase {
    RoomList: EmailAddress;

    Execute(): GetRoomsResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}

/**
 * ## *Not Implemented*
 */
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

/**
 * ## *Not Implemented*
 */
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
}
/**
 * ## *Not Implemented*
 */
 class GetStreamingEventsRequest extends HangingServiceRequestBase {
    static HeartbeatFrequencyDefault: number;
    HeartbeatFrequency: number;



    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class GetUserAvailabilityRequest extends SimpleServiceRequestBase {
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
}
/**
 * ## *Not Implemented*
 */
 class GetUserConfigurationRequest extends MultiResponseServiceRequest<GetUserConfigurationResponse> {

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
/**
 * @internal Represents a GetUserOofSettings request.
 */
 class GetUserOofSettingsRequest extends SimpleServiceRequestBase {

    /**
     * @internal Gets or sets the SMTP address.
     */
    SmtpAddress: string;
    /**
     * @internal Initializes a new instance of the **GetUserOofSettingsRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    constructor(service: ExchangeService);
    /**
     * @internal Executes this request.
     *
     * @return  {IPromise<GetUserOofSettingsResponse>}      Service response.
     */
    Execute(): IPromise<GetUserOofSettingsResponse>;
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    GetResponseXmlElementName(): string;
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    GetXmlElementName(): string;
    /**
     * Parses the response.
     *
     * @param   {any}   jsObjectBody   The jsObjectBody from XmlJsObject.
     * @return  {any}            Response object.
     */
    ParseResponse(jsObjectBody: any): any;
    /**
     * @internal Validate request.
     */
    Validate(): void;
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}

/**
 * ## *Not Implemented*
 */
 class GetUserRetentionPolicyTagsRequest extends SimpleServiceRequestBase {
    Execute(): GetUserRetentionPolicyTagsResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
/**
 * ## *Not Implemented*
 */
 class HangingRequestDisconnectEventArgs {
    constructor(reason: HangingRequestDisconnectReason, exception: Exception);
    Reason: HangingRequestDisconnectReason;
    Exception: Exception;
}
/**
 * ## *Not Implemented*
 */
 class HangingServiceRequestBase extends ServiceRequestBase {

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

/**
 * ## *Not Implemented*
 */
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
}
 class MoveCopyFolderRequest<TResponse extends ServiceResponse> extends MoveCopyRequest<Folder, TResponse> {
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
}
 class MultiResponseServiceRequest<TResponse extends ServiceResponse> extends SimpleServiceRequestBase {
    ErrorHandlingMode: ServiceErrorHandling;

    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling);
    CreateServiceResponse(service: ExchangeService, responseIndex: number): TResponse;
    Execute(): IPromise<ServiceResponseCollection<TResponse>>;
    GetExpectedResponseMessageCount(): number;
    GetResponseMessageXmlElementName(): string;
    ParseResponseXMLJsObject(jsObject: any): any;
    ParseResponse(jsonBody: any): any;
}
/**
 * ## *Not Implemented*
 */
 class PlayOnPhoneRequest extends SimpleServiceRequestBase {
    ItemId: ItemId;
    DialString: string;


    Execute(): PlayOnPhoneResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}

/**
 * ## *Not Implemented*
 */
 class RemoveDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {
    UserIds: UserId[];

    CreateResponse(): DelegateManagementResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    Validate(): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
 class ResolveNamesRequest extends MultiResponseServiceRequest<ResolveNamesResponse> {






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

/**
 * ## *Not Implemented*
 */
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
}
 class SendItemRequest extends MultiResponseServiceRequest<ServiceResponse> {


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
}
 class ServiceRequestBase {
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

/**
 * ## *Not Implemented*
 */
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

/**
 * ## *Not Implemented*
 */
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
}
/**
 * ## *Not Implemented*
 */
 class SetHoldOnMailboxesRequest extends SimpleServiceRequestBase {
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

/**
 * ## *Not Implemented*
 */
 class SetTeamMailboxRequest extends SimpleServiceRequestBase {



    Execute(): ServiceResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}

/**
 * Represents a SetUserOofSettings request.
 */
 class SetUserOofSettingsRequest extends SimpleServiceRequestBase {


    /**
     * Gets or sets the SMTP address.
     */
    SmtpAddress: string;
    /**
     * Gets or sets the oof settings.
     */
    OofSettings: OofSettings;
    /**
     * @internal Initializes a new instance of the **SetUserOofSettingsRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    constructor(service: ExchangeService);
    /**
     * @internal Executes this request.
     *
     * @return  {ServiceResponse}      Service response.
     */
    Execute(): IPromise<ServiceResponse>;
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    GetResponseXmlElementName(): string;
    /**
     * Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string;
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsObjectBody   The jsObjectBody from XmlJsObject.
     * @return  {any}            Service response.
     */
    ParseResponse(jsObjectBody: any): any;
    /**
     * @internal Validate request..
     */
    Validate(): void;
    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class SimpleServiceRequestBase extends ServiceRequestBase {
    InternalExecute(): IPromise<any>;

    ReadResponseJson(jsObject: any): any;
    WebRequestAsyncCallback(webAsyncResult: any): any;
}

/**
 * ## *Not Implemented*
 */
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

/**
 * ## *Not Implemented*
 */
 class SubscribeToPullNotificationsRequest extends SubscribeRequest<PullSubscription> {
    Timeout: number;

    AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): void;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<PullSubscription>;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetSubscriptionXmlElementName(): string;
    InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void;
    Validate(): void;
}

/**
 * ## *Not Implemented*
 */
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

/**
 * ## *Not Implemented*
 */
 class SubscribeToStreamingNotificationsRequest extends SubscribeRequest<StreamingSubscription> {
    AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): void;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<StreamingSubscription>;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetSubscriptionXmlElementName(): string;
    InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void;
    Validate(): void;
}

/**
 * ## *Not Implemented*
 */
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

/**
 * ## *Not Implemented*
 */
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

/**
 * ## *Not Implemented*
 */
 class UninstallAppRequest extends SimpleServiceRequestBase {

    Execute(): UninstallAppResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}

/**
 * ## *Not Implemented*
 */
 class UnpinTeamMailboxRequest extends SimpleServiceRequestBase {

    Execute(): ServiceResponse;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    GetXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}

/**
 * ## *Not Implemented*
 */
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
}
/**
 * ## *Not Implemented*
 */
 class UpdateDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {
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
}
/**
 * ## *Not Implemented*
 */
 class UpdateInboxRulesRequest extends SimpleServiceRequestBase {
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
}
/**
 * ## *Not Implemented*
 */
 class UpdateUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> {
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
}

 class CalendarEvent extends ComplexProperty {




    StartTime: DateTime;
    EndTime: DateTime;
    FreeBusyStatus: LegacyFreeBusyStatus;
    Details: CalendarEventDetails;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
 class CalendarEventDetails extends ComplexProperty {








    StoreId: string;
    Subject: string;
    Location: string;
    IsMeeting: boolean;
    IsRecurring: boolean;
    IsException: boolean;
    IsReminderSet: boolean;
    IsPrivate: boolean;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
 class Conflict extends ComplexProperty {






    ConflictType: ConflictType;
    NumberOfMembers: number;
    NumberOfMembersAvailable: number;
    NumberOfMembersWithConflict: number;
    NumberOfMembersWithNoData: number;
    FreeBusyStatus: LegacyFreeBusyStatus;
    constructor(conflictType: ConflictType);
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}

/**
 * Represents a user's Out of Office (OOF) settings.
 */
 class OofSettings extends ComplexProperty {






    /**
     * Gets or sets the user's OOF state.
     *
     * @value The user's OOF state.
     */
    State: OofState;
    /**
     * Gets or sets a value indicating who should receive external OOF messages.
     */
    ExternalAudience: OofExternalAudience;
    /**
     * Gets or sets the duration of the OOF status when State is set to OofState.Scheduled.
     */
    Duration: TimeWindow;
    /**
     * Gets or sets the OOF response sent other users in the user's domain or trusted domain.
     */
    InternalReply: OofReply;
    /**
     * Gets or sets the OOF response sent to addresses outside the user's domain or trusted domain.
     */
    ExternalReply: OofReply;
    /**
     * Gets a value indicating the authorized external OOF notifications.
     */
    AllowExternalOof: OofExternalAudience;
    /**
     * Initializes a new instance of OofSettings.
     */
    constructor();
    /**
     * @internal Loads from xmlJsObject.
     *
     * @param   {any}               jsObject   The json property.
     * @param   {ExchangeService}   service        [description]
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    /**
     * Serializes an OofReply. Emits an empty OofReply in case the one passed in is null.
     *
     * @param   {OofReply}              oofReply         The oof reply.
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     */

    /**
     * Validates this instance.
     */
    Validate(): void;
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
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
}
 class WorkingPeriod extends ComplexProperty {
    DaysOfWeek: DayOfTheWeek[];
    StartTime: TimeSpan;
    EndTime: TimeSpan;



    constructor();
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: any): boolean;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}

/**
 * Represents a collection of DayOfTheWeek values.
 */
 class DayOfTheWeekCollection extends ComplexProperty {

    get_Item(index: number): DayOfTheWeek;
    Count: number;
    /**
     * @internal Initializes a new instance of the **DayOfTheWeekCollection** class.
     */
    constructor();
    /**
     * Adds a day to the collection if it is not already present.
     *
     * @param   {DayOfTheWeek}   dayOfTheWeek   The day to add.
     */
    Add(dayOfTheWeek: DayOfTheWeek): void;
    /**
     * Adds multiple days to the collection if they are not already present.
     *
     * @param   {}   daysOfTheWeek   The days to add.
     */
    AddRange(daysOfTheWeek: DayOfTheWeek[]): void;
    /**
     * Clears the collection.
     */
    Clear(): void;
    /**
     * @internal Loads service object from XMLJsObject Value.
     *
     * @param   {string}            jsObject                Jason Object converted from XML.
     */
    LoadFromXmlJsObjectValue(jsObjectValue: string): void;
    /**
     * Remove a specific day from the collection.
     *
     * @param   {DayOfTheWeek}   dayOfTheWeek   The day to remove.
     * @return  {boolean}       True if the day was removed from the collection, false otherwise.
     */
    Remove(dayOfTheWeek: DayOfTheWeek): boolean;
    /**
     * Removes the day at a specific index.
     *
     * @param   {number}   index   The index of the day to remove.
     */
    RemoveAt(index: number): void;
    /**
     * Convert to string.
     *
     * @param   {string}   separator   The separator.
     * @return  {string}               String representation of collection.
     */
    ToString(): string;
    /**
     * Convert to string.
     *
     * @param   {string}   separator   The separator.
     * @return  {string}               String representation of collection.
     */
    ToString(separator: string): string;
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}   xmlElementName   Name of the XML element.
     */
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void;
}

 class AbsoluteDateTransition extends TimeZoneTransition {
    DateTime: DateTime;
    constructor(timeZoneDefinition: TimeZoneDefinition);
    constructor(timeZoneDefinition: any, targetGroup: TimeZoneTransitionGroup);
    GetXmlElementName(): string;
    InitializeFromTransitionTime(transitionTime: any): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class AbsoluteDayOfMonthTransition extends AbsoluteMonthTransition {
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
}
 class TimeZoneDefinition extends ComplexProperty {

    Name: string;
    Id: string;
    Periods: DictionaryWithStringKey<TimeZonePeriod>;
    TransitionGroups: DictionaryWithStringKey<TimeZoneTransitionGroup>;



    constructor();
    constructor(timezoneInfo: TimeZoneInfo);
    CompareTransitions(x: TimeZoneTransition, y: TimeZoneTransition): number;
    CreateTransitionGroupToPeriod(timeZonePeriod: TimeZonePeriod): TimeZoneTransitionGroup;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    ToTimeZoneInfo(service?: ExchangeService): any;
    Validate(): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName?: string): void;
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
}
 class CustomTimeZoneCreateParams {



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
}
 class AttendeeInfo {
    SmtpAddress: string;
    AttendeeType: MeetingAttendeeType;
    ExcludeConflicts: boolean;
    constructor();
    constructor(smtpAddress?: string);
    constructor(smtpAddress?: string, attendeeType?: MeetingAttendeeType, excludeConflicts?: boolean);
    Validate(): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
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
    CurrentMeetingTime: DateTime;
    GlobalObjectId: string;
    Validate(timeWindow: TimeSpan): void;
    WriteToXml(writer: EwsServiceXmlWriter, request: GetUserAvailabilityRequest): void;
}
 class GetUserAvailabilityResults {


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
}
/**
 * Represents an Out of Office response.
 */
 class OofReply {


    /**
     * Gets or sets the culture of the reply.
     */
    Culture: string;
    /**
     * Gets or sets the culture of the reply.
     */
    Message: string;
    /**
     * Initializes a new instance of the **OofReply** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **OofReply** class.
     *
     * @param   {string}   message   The reply message.
     */
    constructor(message: string);
    /**
     * @internal Loads from xmlJsObject.
     *
     * @param   {any}   jsObject   The xmlJsObject object.
     * @param   {ExchangeService}   service      The service.
     */
    LoadFromXmlJsObject(jsonObject: any, service: ExchangeService): void;
    /**
     * Obtains a string representation of the reply.
     *
     * @return  {string}      A string containing the reply message.
     */
    ToString(): string;
    toString(): string;
    /**
     * @internal Writes an empty OofReply to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    static WriteEmptyReplyToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void;
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void;
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
}
 class AlternateId extends AlternateIdBase {
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
}
 class AlternateIdBase {
    Format: IdFormat;
    GetXmlElementName(): string;
    InternalToJson(jsonObject: JsonObject): any;
    InternalValidate(): any;
    LoadAttributesFromJson(responseObject: JsonObject): any;
    LoadAttributesFromXml(reader: EwsServiceXmlReader): any;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
    WriteToXml(writer: EwsServiceXmlWriter): any;
}
 class AlternatePublicFolderId extends AlternateIdBase {
    static SchemaTypeName: string;
    FolderId: string;
    GetXmlElementName(): string;
    InternalToJson(jsonObject: JsonObject): any;
    LoadAttributesFromJson(responseObject: JsonObject): any;
    LoadAttributesFromXml(reader: EwsServiceXmlReader): any;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
}
 class AlternatePublicFolderItemId extends AlternatePublicFolderId {
    ItemId: string;

    GetXmlElementName(): string;
    InternalToJson(jsonObject: JsonObject): any;
    LoadAttributesFromJson(responseObject: JsonObject): any;
    LoadAttributesFromXml(reader: EwsServiceXmlReader): any;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any;
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
}
 class Not extends SearchFilter {
    SearchFilter: SearchFilter;

    GetXmlElementName(): string;
    InternalToJson(service: ExchangeService): any;
    InternalValidate(): void;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    SearchFilterChanged(complexProperty: ComplexProperty): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class PropertyBasedFilter extends SearchFilter {
    PropertyDefinition: PropertyDefinitionBase;

    InternalToJson(service: ExchangeService): any;
    InternalValidate(): void;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 class RelationalFilter extends PropertyBasedFilter {
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
 class SearchFilter extends ComplexProperty {
    GetSearchFilterInstance(localName: string): SearchFilter;
    GetXmlElementName(): string;
    InternalToJson(service: ExchangeService): any;
    LoadFromXmlJsObject(reader: EwsServiceXmlReader): SearchFilter;
    LoadSearchFilterFromJson(jsonObject: any, service: ExchangeService): SearchFilter;
    WriteToXml(writer: EwsServiceXmlWriter): any;
}
 class OutlookAccount {



    AccountType: string;
    ResponseType: AutodiscoverResponseType;
    RedirectTarget: string;


    ConvertToUserSettings(requestedSettings: UserSettingName[], response: GetUserSettingsResponse): any;
    LoadFromXml(reader: EwsXmlReader): any;
}
 class OutlookConfigurationSettings extends ConfigurationSettingsBase {
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
/**
 * Represents a folder containing appointments.
 */
 class CalendarFolder extends Folder {
    /**
     * Initializes an unsaved local instance of **CalendarFolder**. To bind to an existing calendar folder, use CalendarFolder.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the calendar folder will be bound.
     */
    constructor(service: ExchangeService);
    /**
     * Binds to an existing folder, whatever its actual type is, and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the calendar folder.
     * @param   {FolderId}          id            The Id of the calendar folder to bind to.
     * @return  {IPromise<CalendarFolder>}      A CalendarFolder instance representing the folder corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: FolderId): IPromise<CalendarFolder>;
    /**
     * Binds to an existing folder, whatever its actual type is, and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the calendar folder.
     * @param   {WellKnownFolderName}   name          The name of the calendar folder to bind to.
     * @return  {IPromise<CalendarFolder>}      A CalendarFolder instance representing the folder corresponding to the specified name :Promise.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName): IPromise<CalendarFolder>;
    /**
     * Binds to an existing folder, whatever its actual type is, and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the calendar folder.
     * @param   {FolderId}          id            The Id of the calendar folder to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {IPromise<CalendarFolder>}      A CalendarFolder instance representing the folder corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): IPromise<CalendarFolder>;
    /**
     * Binds to an existing folder, whatever its actual type is, and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the folder.
     * @param   {WellKnownFolderName}   name          The name of the folder to bind to.
     * @param   {PropertySet}           propertySet   The set of properties to load.
     * @return  {IPromise<CalendarFolder>}      A CalendarFolder instance representing the folder corresponding to the specified name :Promise.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): IPromise<CalendarFolder>;
    /**
     * Obtains a list of appointments by searching the contents of this folder and performing recurrence expansion for recurring appointments. Calling this method results in a call to EWS.
     *
     * @param   {CalendarView}   view   The view controlling the range of appointments returned.
     * @return  {FindItemsResults<Appointment>}          An object representing the results of the search operation.
     */
    FindAppointments(view: CalendarView): IPromise<FindItemsResults<Appointment>>;
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string;
}

/**
 * ## *Not Implemented*
 */
 class ContactsFolder extends Folder {
    /**
     * _FolderTYpe -> type of folder, use to avoid folder type detection using instanceof. some cases it has circular loop in nodejs/requirejs
     */
    GetXmlElementName(): string;
}
 class Folder extends ServiceObject {
    /**
     * Gets the Id of the folder.
     *
     */
    Id: FolderId;
    /**
     * Gets the Id of this folder's parent folder.
     *
     */
    ParentFolderId: FolderId;
    /**
     * Gets the number of child folders this folder has.
     *
     */
    ChildFolderCount: number;
    /**
     * Gets or sets the display name of the folder.
     *
     */
    DisplayName: string;
    /**
     * Gets or sets the custom class name of this folder.
     *
     */
    FolderClass: string;
    /**
     * Gets the total number of items contained in the folder.
     *
     */
    TotalCount: number;
    /**
     * Gets a list of extended properties associated with the folder. **Unstable Need testing**
     *
     */
    ExtendedProperties: ExtendedPropertyCollection;
    /**
     * Gets the Email Lifecycle Management (ELC) information associated with the folder.
     *
     */
    ManagedFolderInformation: ManagedFolderInformation;
    /**
     * Gets a value indicating the effective rights the current authenticated user has on the folder.
     *
     */
    EffectiveRights: EffectiveRights;
    /**
     * Gets a list of permissions for the folder.
     *
     */
    Permissions: FolderPermissionCollection;
    /**
     * Gets the number of unread items in the folder.
     *
     */
    UnreadCount: number;
    /**
     * Gets or sets the policy tag.
     *
     */
    PolicyTag: PolicyTag;
    /**
     * Gets or sets the archive tag.
     *
     */
    ArchiveTag: ArchiveTag;
    /**
     * Gets the well known name of this folder, if any, as a string.
     * **value** - The well known name of this folder as a string, or null if this folder isn't a well known folder.
     *
     */
    WellKnownFolderNameAsString: string;
    /**
     * Gets the well known name of this folder, if any.
     * **value** - The well known name of this folder, or null if this folder isn't a well known folder.
     *
     */
    WellKnownFolderName: WellKnownFolderName;
    /**
     * _FolderTYpe -> type of folder, use to avoid folder type detection using instanceof. some cases it has circular loop in nodejs/requirejs
     */
    /**
     * Initializes an unsaved local instance of **Folder**. To bind to an existing folder, use Folder.Bind() instead.
     *
     * @param   {ExchangeService}   service   EWS service to which this object belongs.
     */
    constructor(service: ExchangeService);
    /**
     * Binds to an existing folder, whatever its actual type is, and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the folder.
     * @param   {FolderId}          id            The Id of the folder to bind to.
     * @return  {IPromise<Folder>}      A Folder instance representing the folder corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: FolderId): IPromise<Folder>;
    /**
     * Binds to an existing folder, whatever its actual type is, and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the folder.
     * @param   {WellKnownFolderName}   name          The name of the folder to bind to.
     * @return  {IPromise<Folder>}      A Folder instance representing the folder corresponding to the specified name :Promise.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName): IPromise<Folder>;
    /**
     * Binds to an existing folder, whatever its actual type is, and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the folder.
     * @param   {FolderId}          id            The Id of the folder to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {IPromise<Folder>}      A Folder instance representing the folder corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): IPromise<Folder>;
    /**
     * Binds to an existing folder, whatever its actual type is, and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the folder.
     * @param   {WellKnownFolderName}   name          The name of the folder to bind to.
     * @param   {PropertySet}           propertySet   The set of properties to load.
     * @return  {IPromise<Folder>}      A Folder instance representing the folder corresponding to the specified name :Promise.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): IPromise<Folder>;
    /**
     * Copies this folder into the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to copy this folder.
     * @return  {IPromise<Folder>}      A Folder representing the copy of this folder :Promise.
     */
    Copy(destinationFolderName: WellKnownFolderName): IPromise<Folder>;
    /**
     * Copies this folder into a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   destinationFolderId    The Id of the folder in which to copy this folder.
     * @return  {IPromise<Folder>}                  A Folder representing the copy of this folder :Promise.
     */
    Copy(destinationFolderId: FolderId): IPromise<Folder>;
    /**
     * Deletes the folder. Calling this method results in a call to EWS.
     *
     * @param   {DeleteMode}   deleteMode   Deletion mode.
     */
    Delete(deleteMode: DeleteMode): IPromise<void>;
    /**
     * Empties the folder. Calling this method results in a call to EWS.
     *
     * @param   {DeleteMode}    deleteMode         The deletion mode.
     * @param   {boolean}       deleteSubFolders   Indicates whether sub-folders should also be deleted.
     */
    Empty(deleteMode: DeleteMode, deleteSubFolders: boolean): IPromise<void>;
    /**
     * Obtains a list of folders by searching the sub-folders of this folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderView}   view           The view controlling the number of folders returned.
     * @return  {IPromise<FindFoldersResults>}      An object representing the results of the search operation :Promise.
     */
    FindFolders(view: FolderView): IPromise<FindFoldersResults>;
    /**
     * Obtains a list of folders by searching the sub-folders of this folder. Calling this method results in a call to EWS.
     *
     * @param   {SearchFilter}      searchFilter    The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {FolderView}        view            The view controlling the number of folders returned.
     * @return  {IPromise<FindFoldersResults>}      An object representing the results of the search operation :Promise.
     */
    FindFolders(searchFilter: SearchFilter, view: FolderView): IPromise<FindFoldersResults>;
    /**
     * Obtains a list of items by searching the contents of this folder. Calling this method results in a call to EWS.
     *
     * @param   {ItemView}  view          The view controlling the number of items returned.
     * @return  {IPromise<FindItemsResults<Item>>}      An object representing the results of the search operation :Promise.
     */
    FindItems(view: ItemView): IPromise<FindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of this folder. Calling this method results in a call to EWS.
     *
     * @param   {ItemView}      view           The view controlling the number of items returned.
     * @param   {Grouping}      groupBy        The grouping criteria.
     * @return  {IPromise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of this folder :Promise.
     */
    FindItems(view: ItemView, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of this folder. Calling this method results in a call to EWS.
     *
     * @param   {string}    queryString   query string to be used for indexed search
     * @param   {ItemView}  view          The view controlling the number of items returned.
     * @return  {IPromise<FindItemsResults<Item>>}      An object representing the results of the search operation :Promise.
     */
    FindItems(queryString: string, view: ItemView): IPromise<FindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of this folder. Calling this method results in a call to EWS.
     *
     * @param   {SearchFilter}  searchFilter   The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {ItemView}      view          The view controlling the number of items returned.
     * @return  {IPromise<FindItemsResults<Item>>}      An object representing the results of the search operation :Promise.
     */
    FindItems(searchFilter: SearchFilter, view: ItemView): IPromise<FindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of this folder. Calling this method results in a call to EWS.
     *
     * @param   {string}        queryString    Query string to be used for indexed search
     * @param   {ItemView}      view           The view controlling the number of items returned.
     * @param   {Grouping}      groupBy        The grouping criteria.
     * @return  {IPromise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of this folder :Promise.
     */
    FindItems(queryString: string, view: ItemView, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of this folder. Calling this method results in a call to EWS.
     *
     * @param   {SearchFilter}  searchFilter   The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {ItemView}      view           The view controlling the number of items returned.
     * @param   {Grouping}      groupBy        The grouping criteria.
     * @return  {IPromise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of this folder :Promise.
     */
    FindItems(searchFilter: SearchFilter, view: ItemView, groupBy: Grouping): IPromise<GroupedFindItemsResults<Item>>;
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string;
    /**
     * @internal Gets the name of the change XML element.
     *
     * @return  {string}      XML element name,
     */
    GetChangeXmlElementName(): string;
    /**
     * @internal Gets the name of the delete field XML element.
     *
     * @return  {string}      XML element name,
     */
    GetDeleteFieldXmlElementName(): string;
    /**
     * @internal Gets a list of extended properties defined on this object.
     *
     * @return  {ExtendedPropertyCollection}      Extended properties collection.
     */
    GetExtendedProperties(): ExtendedPropertyCollection;
    /**
     * @internal Get the property definition for the Id property.
     *
     * @return  {PropertyDefinition}      A PropertyDefinition instance.
     */
    GetIdPropertyDefinition(): PropertyDefinition;
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema;
    /**
     * @internal Gets the name of the set field XML element.
     *
     * @return  {string}      XML element name,
     */
    GetSetFieldXmlElementName(): string;
    /**
     * @internal Deletes the object.
     *
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
     */
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode?: SendCancellationsMode, affectedTaskOccurrences?: AffectedTaskOccurrence): IPromise<void>;
    /**
     * @internal Find items.
     *
     * @param   {string}    queryString   Query string to be used for indexed search
     * @param   {ViewBase}  view          The view controlling the number of items returned.
     * @param   {Grouping}  groupBy       The group by.
     * @return  {IPromise<ServiceResponseCollection<FindItemResponse<TItem>>>}      FindItems response collection :Promise.
     */
    InternalFindItems<TItem extends Item>(queryString: string, view: ViewBase, groupBy: Grouping): IPromise<ServiceResponseCollection<FindItemResponse<TItem>>>;
    /**
     * @internal Find items.
     *
     * @param   {SearchFilter}  searchFilter   The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {ViewBase}      view          The view controlling the number of items returned.
     * @param   {Grouping}      groupBy       The group by.
     * @return  {IPromise<ServiceResponseCollection<FindItemResponse<TItem>>>}      FindItems response collection :Promise.
     */
    InternalFindItems<TItem extends Item>(searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): IPromise<ServiceResponseCollection<FindItemResponse<TItem>>>;
    /**
     * ### ~~*shim used internally to minimize code flow logic from calling functions*~~
    */
    InternalFindItems<TItem extends Item>(searchFilterOrQueryString: SearchFilter | string, view: ViewBase, groupBy: Grouping): IPromise<ServiceResponseCollection<FindItemResponse<TItem>>>;
    /**
     * @internal Loads the specified set of properties on the object.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     */
    InternalLoad(propertySet: PropertySet): IPromise<void>;
    /**
     * Marks all items in folder as read. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   suppressReadReceipts   If true, suppress sending read receipts for items.
     */
    MarkAllItemsAsRead(suppressReadReceipts: boolean): IPromise<void>;
    /**
     * Marks all items in folder as read. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   suppressReadReceipts   If true, suppress sending read receipts for items.
     */
    MarkAllItemsAsUnread(suppressReadReceipts: boolean): IPromise<void>;
    /**
     * Moves this folder to the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to move this folder.
     * @return  {IPromise<Folder>}      A new folder representing this folder in its new location. After Move completes, this folder does not exist anymore :Promise.
     */
    Move(destinationFolderName: WellKnownFolderName): IPromise<Folder>;
    /**
     * Moves this folder to a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   destinationFolderId   The Id of the folder in which to move this folder.
     * @return  {IPromise<Folder>}      A new folder representing this folder in its new location. After Move completes, this folder does not exist anymore :Promise.
     */
    Move(destinationFolderId: FolderId): IPromise<Folder>;
    /**
     * Removes an extended property.
     *
     * @param   {ExtendedPropertyDefinition}   extendedPropertyDefinition   The extended property definition.
     * @return  {boolean}       True if property was removed.
     */
    RemoveExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition): boolean;
    /**
     * Saves this folder in a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName   The name of the folder in which to save this folder.
     */
    Save(parentFolderName: WellKnownFolderName): IPromise<void>;
    /**
     * Saves this folder in a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   parentFolderId   The Id of the folder in which to save this folder.
     */
    Save(parentFolderId: FolderId): IPromise<void>;
    /**
     * Sets the extended property.
     *
     * @param   {ExtendedPropertyDefinition}    extendedPropertyDefinition   The extended property definition.
     * @param   {any}                           value                        The value.
     */
    SetExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition, value: any): void;
    /**
     * Applies the local changes that have been made to this folder. Calling this method results in a call to EWS.
     *
     */
    Update(): IPromise<void>;
    /**
     * @internal Validates this instance.
     *
     */
    Validate(): void;
}

/**
 * this is partial section of CreateEwsObjectFromXmlElementName from serviceobjectinfo, other parts are moved to different object type like itemInfo etc.
 * this to is to avoid circular referencing with requirejs/commonjs/nodejs
 */
 class FolderInfo extends ServiceObjectInfo {
    InitializeServiceObjectClassMap(): any;
    CreateEwsObjectFromXmlElementName<TServiceObject extends ServiceObject>(service: ExchangeService, xmlElementName: string): TServiceObject;
}

/**
 * ## *Not Implemented*
 */
 class SearchFolder extends Folder {
    /**
     * _FolderTYpe -> type of folder, use to avoid folder type detection using instanceof. some cases it has circular loop in nodejs/requirejs
     */
    GetXmlElementName(): string;
}

/**
 * ## *Not Implemented*
 */
 class TasksFolder extends Folder {
    /**
     * _FolderTYpe -> type of folder, use to avoid folder type detection using instanceof. some cases it has circular loop in nodejs/requirejs
     */
    GetXmlElementName(): string;
}

/**
 * Represents an **appointment or a meeting**. Properties available on appointments are defined in the *AppointmentSchema* class.
 */
 class Appointment extends Item implements ICalendarActionProvider {
    /**
     * @internal Gets the default setting for sending cancellations on Delete.
     *
     * @return  {SendCancellationsMode}      If Delete() is called on Appointment, we want to send cancellations and save a copy.
     */
    DefaultSendCancellationsMode: SendCancellationsMode;
    /**
     * @internal Gets the default settings for sending invitations on Save.
     */
    DefaultSendInvitationsMode: SendInvitationsMode;
    /**
     * @internal Gets the default settings for sending invitations or cancellations on Update.
     */
    DefaultSendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode;
    /**
     * Gets or sets the start time of the appointment.
     */
    Start: DateTime;
    /**
     * Gets or sets the end time of the appointment.
     */
    End: DateTime;
    /**
     * Gets the original start time of this appointment.
     */
    OriginalStart: DateTime;
    /**
     * Gets or sets a value indicating whether this appointment is an all day event.
     */
    IsAllDayEvent: boolean;
    /**
     * Gets or sets a value indicating the free/busy status of the owner of this appointment.
     */
    LegacyFreeBusyStatus: LegacyFreeBusyStatus;
    /**
     * Gets or sets the location of this appointment.
     */
    Location: string;
    /**
     * Gets a text indicating when this appointment occurs. The text returned by When is localized using the Exchange Server culture or using the culture specified in the PreferredCulture property of the ExchangeService object this appointment is bound to.
     */
    When: string;
    /**
     * Gets a value indicating whether the appointment is a meeting.
     */
    IsMeeting: boolean;
    /**
     * Gets a value indicating whether the appointment has been cancelled.
     */
    IsCancelled: boolean;
    /**
     * Gets a value indicating whether the appointment is recurring.
     */
    IsRecurring: boolean;
    /**
     * Gets a value indicating whether the meeting request has already been sent.
     */
    MeetingRequestWasSent: boolean;
    /**
     * Gets or sets a value indicating whether responses are requested when invitations are sent for this meeting.
     */
    IsResponseRequested: boolean;
    /**
     * Gets a value indicating the type of this appointment.
     */
    AppointmentType: AppointmentType;
    /**
     * Gets a value indicating what was the last response of the user that loaded this meeting.
     */
    MyResponseType: MeetingResponseType;
    /**
     * Gets the organizer of this meeting. The Organizer property is read-only and is only relevant for attendees.
     * The organizer of a meeting is automatically set to the user that created the meeting.
     */
    Organizer: EmailAddress;
    /**
     * Gets a list of required attendees for this meeting.
     */
    RequiredAttendees: AttendeeCollection;
    /**
     * Gets a list of optional attendeed for this meeting.
     */
    OptionalAttendees: AttendeeCollection;
    /**
     * Gets a list of resources for this meeting.
     */
    Resources: AttendeeCollection;
    /**
     * Gets the number of calendar entries that conflict with this appointment in the authenticated user's calendar.
     */
    ConflictingMeetingCount: number;
    /**
     * Gets the number of calendar entries that are adjacent to this appointment in the authenticated user's calendar.
     */
    AdjacentMeetingCount: number;
    /**
     * Gets a list of meetings that conflict with this appointment in the authenticated user's calendar.
     */
    ConflictingMeetings: ItemCollection<Appointment>;
    /**
     * Gets a list of meetings that is adjacent to this appointment in the authenticated user's calendar.
     */
    AdjacentMeetings: ItemCollection<Appointment>;
    /**
     * Gets the duration of this appointment.
     */
    Duration: TimeSpan;
    /**
     * Gets the name of the time zone this appointment is defined in.
     */
    TimeZone: string;
    /**
     * Gets the time when the attendee replied to the meeting request.
     */
    AppointmentReplyTime: DateTime;
    /**
     * Gets the sequence number of this appointment.
     */
    AppointmentSequenceNumber: number;
    /**
     * Gets the state of this appointment.
     */
    AppointmentState: number;
    /**
     * Gets or sets the recurrence pattern for this appointment. Available recurrence pattern classes include
     * Recurrence.DailyPattern, Recurrence.MonthlyPattern and Recurrence.YearlyPattern.
     */
    Recurrence: Recurrence;
    /**
     * Gets an OccurrenceInfo identifying the first occurrence of this meeting.
     */
    FirstOccurrence: OccurrenceInfo;
    /**
     * Gets an OccurrenceInfo identifying the last occurrence of this meeting.
     */
    LastOccurrence: OccurrenceInfo;
    /**
     * Gets a list of modified occurrences for this meeting.
     */
    ModifiedOccurrences: OccurrenceInfoCollection;
    /**
     * Gets a list of deleted occurrences for this meeting.
     */
    DeletedOccurrences: DeletedOccurrenceInfoCollection;
    /**
     * Gets or sets time zone of the start property of this appointment.
     */
    StartTimeZone: TimeZoneInfo;
    /**
     * Gets or sets time zone of the end property of this appointment.
     */
    EndTimeZone: TimeZoneInfo;
    /**
     * Gets or sets the type of conferencing that will be used during the meeting.
     */
    ConferenceType: number;
    /**
     * Gets or sets a value indicating whether new time proposals are allowed for attendees of this meeting.
     */
    AllowNewTimeProposal: boolean;
    /**
     * Gets or sets a value indicating whether this is an online meeting.
     */
    IsOnlineMeeting: boolean;
    /**
     * Gets or sets the URL of the meeting workspace. A meeting workspace is a shared Web site for planning meetings and tracking results.
     */
    MeetingWorkspaceUrl: string;
    /**
     * Gets or sets the URL of the Microsoft NetShow online meeting.
     */
    NetShowUrl: string;
    /**
     * Gets or sets the ICalendar Uid.
     */
    ICalUid: string;
    /**
     * Gets the ICalendar RecurrenceId.
     */
    ICalRecurrenceId: DateTime;
    /**
     * Gets the ICalendar DateTimeStamp.
     */
    ICalDateTimeStamp: DateTime;
    /**
     * Gets or sets the Enhanced location object.
     */
    EnhancedLocation: EnhancedLocation;
    /**
     * Gets the Url for joining an online meeting
     */
    JoinOnlineMeetingUrl: string;
    /**
     * Gets the Online Meeting Settings
     */
    OnlineMeetingSettings: OnlineMeetingSettings;
    /**
     * Initializes an unsaved local instance of . To bind to an existing appointment, use Appointment.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService instance to which this appointmtnt is bound.
     */
    constructor(svc: ExchangeService);
    /**
     * @internal Initializes a new instance of Appointment.
     *
     * @param   {ItemAttachment}  parentAttachment   Parent attachment.
     * @param   {boolean}         isNew              If true, attachment is new.
     */
    constructor(parentAttachment: ItemAttachment, isNew: boolean);
    /**
     * Accepts the meeting. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {IPromise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation :Promise.
     */
    Accept(sendResponse: boolean): IPromise<CalendarActionResults>;
    /**
     * Tentatively accepts the meeting. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {IPromise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation :Promise.
     */
    AcceptTentatively(sendResponse: boolean): IPromise<CalendarActionResults>;
    /**
     * Binds to an existing appointment and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}     service       The service to use to bind to the appointment.
     * @param   {ItemId}              id            The Id of the appointment to bind to.
     * @return  {IPromise<Appointment>}   An Appointment instance representing the appointment corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId): IPromise<Appointment>;
    /**
    * Binds to an existing appointment and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}     service       The service to use to bind to the appointment.
     * @param   {ItemId}              id            The Id of the appointment to bind to.
     * @param   {PropertySet}         propertySet   The set of properties to load.
     * @return  {IPromise<Appointment>}   An Appointment instance representing the appointment corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): IPromise<Appointment>;
    /**
     * Binds to an occurence of an existing appointment and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}  service             The service to use to bind to the appointment.
     * @param   {ItemId}           recurringMasterId   The Id of the recurring master that the index represents an occurrence of.
     * @param   {number}           occurenceIndex      The index of the occurrence.
     * @return  {IPromise<Appointment>}                An Appointment instance representing the appointment occurence corresponding to the specified occurence index :Promise.
     */
    static BindToOccurrence(service: ExchangeService, recurringMasterId: ItemId, occurenceIndex: number): IPromise<Appointment>;
    /**
     * Binds to an occurence of an existing appointment and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}  service             The service to use to bind to the appointment.
     * @param   {ItemId}           recurringMasterId   The Id of the recurring master that the index represents an occurrence of.
     * @param   {number}           occurenceIndex      The index of the occurrence.
     * @param   {PropertySet}      propertySet         The set of properties to load.
     * @return  {IPromise<Appointment>}                An Appointment instance representing the appointment occurence corresponding to the specified occurence index :Promise.
     */
    static BindToOccurrence(service: ExchangeService, recurringMasterId: ItemId, occurenceIndex: number, propertySet: PropertySet): IPromise<Appointment>;
    /**
     * Binds to the master appointment of a recurring series and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}     service        The service to use to bind to the appointment.
     * @param   {ItemId}              occurrenceId   The Id of one of the occurrences in the series.
     * @return  {IPromise<Appointment>}   An Appointment instance representing the master appointment of the recurring series to which the specified occurrence belongs :Promise.
     */
    static BindToRecurringMaster(service: ExchangeService, occurrenceId: ItemId): IPromise<Appointment>;
    /**
     * Binds to the master appointment of a recurring series and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}     service        The service to use to bind to the appointment.
     * @param   {ItemId}              occurrenceId   The Id of one of the occurrences in the series.
     * @param   {PropertySet}         propertySet    The set of properties to load.
     * @return  {IPromise<Appointment>}   An Appointment instance representing the master appointment of the recurring series to which the specified occurrence belongs :Promise.
     */
    static BindToRecurringMaster(service: ExchangeService, occurrenceId: ItemId, propertySet: PropertySet): IPromise<Appointment>;
    /**
     * Cancels the meeting and sends cancellation messages to all attendees. Calling this method results in a call to EWS.
     *
     * @return  {IPromise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation :Promise.
     */
    CancelMeeting(): IPromise<CalendarActionResults>;
    /**
     * Cancels the meeting and sends cancellation messages to all attendees. Calling this method results in a call to EWS.
     *
     * @param   {string}   cancellationMessageText   Cancellation message text sent to all attendees.
     * @return  {IPromise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation :Promise.
     */
    CancelMeeting(cancellationMessageText: string): IPromise<CalendarActionResults>;
    /**
     * Creates a local meeting acceptance message that can be customized and sent.
     *
     * @param   {boolean}   tentative   Specifies whether the meeting will be tentatively accepted.
     * @return  {AcceptMeetingInvitationMessage}  An AcceptMeetingInvitationMessage representing the meeting acceptance message.
     */
    CreateAcceptMessage(tentative: boolean): AcceptMeetingInvitationMessage;
    /**
     * Creates a local meeting cancellation message that can be customized and sent.
     *
     * @return  {CancelMeetingMessage}    A CancelMeetingMessage representing the meeting cancellation message.
     */
    CreateCancelMeetingMessage(): CancelMeetingMessage;
    /**
     * Creates a local meeting declination message that can be customized and sent.
     *
     * @return  {DeclineMeetingInvitationMessage}      A DeclineMeetingInvitation representing the meeting declination message.
     */
    CreateDeclineMessage(): DeclineMeetingInvitationMessage;
    /**
     * Creates a forward message from this appointment.
     *
     * @return  {ResponseMessage} A ResponseMessage representing the forward response that can subsequently be modified and sent.
     */
    CreateForward(): ResponseMessage;
    /**
     * Creates a reply response to the organizer and/or attendees of the meeting.
     *
     * @param   {boolean}   replyAll   Indicates whether the reply should go to the organizer only or to all the attendees.
     * @return  {ResponseMessage} A ResponseMessage representing the reply response that can subsequently be modified and sent.
     */
    CreateReply(replyAll: boolean): ResponseMessage;
    /**
     * Declines the meeting invitation. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {IPromise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as aresults of this operation :Promise.
     */
    Decline(sendResponse: boolean): IPromise<CalendarActionResults>;
    /**
     * Deletes this appointment. Calling this method results in a call to EWS.
     *
     * @param   {DeleteMode}   deleteMode              The deletion mode.
     * @param   {SendCancellationsMode}   sendCancellationsMode   Specifies if and how cancellations should be sent if this appointment is a meeting.
     */
    Delete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode): IPromise<void>;
    /**
     * Forwards the appointment. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}     bodyPrefix     The prefix to prepend to the original body of the message.
     * @param   {EmailAddress[]}  toRecipients   The recipients to forward the appointment to.
     */
    Forward(bodyPrefix: MessageBody, toRecipients: EmailAddress[]): IPromise<void>;
    /**
     * @internal Determines whether properties defined with ScopedDateTimePropertyDefinition require custom time zone scoping.
     *
     * @return  {boolean}      true if this item type requires custom scoping for scoped date/time properties; otherwise, false.
     */
    GetIsCustomDateTimeScopingRequired(): boolean;
    /**
     * @internal Gets a value indicating whether a time zone SOAP header should be emitted in a CreateItem or UpdateItem request so this item can be property saved or updated.
     *
     * @param   {boolean}   isUpdateOperation   Indicates whether the operation being petrformed is an update operation.
     * @return  {boolean}                       true if a time zone SOAP header should be emitted; otherwise, false.
     */
    GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean;
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema;
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string;
    /**
     * @internal Accepts the meeting.
     *
     * @param   {boolean}   tentative      True if tentative accept.
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {IPromise<CalendarActionResults>}    A CalendarActionResults object containing the various items that were created or modified as aresults of this operation :Promise.
     */
    InternalAccept(tentative: boolean, sendResponse: boolean): IPromise<CalendarActionResults>;
    /**
     * Replies to the organizer and/or the attendees of the meeting. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}     bodyPrefix   The prefix to prepend to the body of the meeting.
     * @param   {boolean}         replyAll     Indicates whether the reply should go to the organizer only or to all the attendees.
     */
    Reply(bodyPrefix: MessageBody, replyAll: boolean): IPromise<void>;
    /**
     * Saves this appointment in the Calendar folder. Calling this method results in at least one call to EWS. Mutliple calls to EWS might be made if attachments have been added.
     *
     * @param   {SendInvitationsMode}   sendInvitationsMode   Specifies if and how invitations should be sent if this appointment is a meeting.
     */
    Save(sendInvitationsMode: SendInvitationsMode): IPromise<void>;
    /**
     * Saves this appointment in the specified folder. Calling this method results in at least one call to EWS. Mutliple calls to EWS might be made if attachments have been added.
     *
     * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to save this appointment.
     * @param   {SendInvitationsMode}   sendInvitationsMode     Specifies if and how invitations should be sent if this appointment is a meeting.
     */
    Save(destinationFolderName: WellKnownFolderName, sendInvitationsMode: SendInvitationsMode): IPromise<void>;
    /**
     * Saves this appointment in the specified folder. Calling this method results in at least one call to EWS. Mutliple calls to EWS might be made if attachments have been added.
     *
     * @param   {FolderId}                destinationFolderId   The Id of the folder in which to save this appointment.
     * @param   {SendInvitationsMode}     sendInvitationsMode   Specifies if and how invitations should be sent if this appointment is a meeting.
     */
    Save(destinationFolderId: FolderId, sendInvitationsMode: SendInvitationsMode): IPromise<void>;
    /**
     * Applies the local changes that have been made to this appointment. Calling this method results in at least one call to EWS. Mutliple calls to EWS might be made if attachments have been added or removed.
     *
     * @param   {ConflictResolutionMode}   conflictResolutionMode               Specifies how conflicts should be resolved.
     * @param   {SendInvitationsOrCancellationsMode}   sendInvitationsOrCancellationsMode   Specifies if and how invitations or cancellations should be sent if this appointment is a meeting.
     */
    Update(conflictResolutionMode: ConflictResolutionMode, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): IPromise<void>;
    /**
     * @internal Validates this instance.
     *
     */
    Validate(): void;
}

/**
 * Represents a **contact**. Properties available on contacts are defined in the *ContactSchema* class.
 *
 */
 class Contact extends Item {

    /**
     * Gets or set the name under which this contact is filed as. FileAs can be manually set or can be automatically calculated based on the value of the FileAsMapping property.
     *
     */
    FileAs: string;
    /**
     * Gets or sets a value indicating how the FileAs property should be automatically calculated.
     *
     */
    FileAsMapping: FileAsMapping;
    /**
     * Gets or sets the display name of the contact.
     *
     */
    DisplayName: string;
    /**
     * Gets or sets the given name of the contact.
     *
     */
    GivenName: string;
    /**
     * Gets or sets the initials of the contact.
     *
     */
    Initials: string;
    /**
     * Gets or sets the middle mame of the contact.
     *
     */
    MiddleName: string;
    /**
     * Gets or sets the nick name of the contact.
     *
     */
    NickName: string;
    /**
     * Gets the complete name of the contact.
     *
     */
    CompleteName: CompleteName;
    /**
     * Gets or sets the compnay name of the contact.
     *
     */
    CompanyName: string;
    /**
     * Gets an indexed list of e-mail addresses for the contact. For example, to set the first e-mail address,
     * use the following syntax: EmailAddresses[EmailAddressKey.EmailAddress1] = "john.doe@contoso.com"
     *
     */
    EmailAddresses: EmailAddressDictionary;
    /**
     * Gets an indexed list of physical addresses for the contact. For example, to set the business address,
     * use the following syntax: PhysicalAddresses[PhysicalAddressKey.Business] = new PhysicalAddressEntry()
     *
     */
    PhysicalAddresses: PhysicalAddressDictionary;
    /**
     * Gets an indexed list of phone numbers for the contact. For example, to set the home phone number,
     * use the following syntax: PhoneNumbers[PhoneNumberKey.HomePhone] = "phone number"
     *
     */
    PhoneNumbers: PhoneNumberDictionary;
    /**
     * Gets or sets the contact's assistant name.
     *
     */
    AssistantName: string;
    /**
     * Gets or sets the birthday of the contact.
     *
     */
    Birthday: DateTime;
    /**
     * Gets or sets the business home page of the contact.
     *
     */
    BusinessHomePage: string;
    /**
     * Gets or sets a list of children for the contact.
     *
     */
    Children: StringList;
    /**
     * Gets or sets a list of companies for the contact.
     *
     */
    Companies: StringList;
    /**
     * Gets the source of the contact.
     *
     */
    ContactSource: ContactSource;
    /**
     * Gets or sets the department of the contact.
     *
     */
    Department: string;
    /**
     * Gets or sets the generation of the contact.
     *
     */
    Generation: string;
    /**
     * Gets an indexed list of Instant Messaging addresses for the contact.
     * For example, to set the first IM address, use the following syntax: ImAddresses[ImAddressKey.ImAddress1] = "john.doe@contoso.com"
     *
     */
    ImAddresses: ImAddressDictionary;
    /**
     * Gets or sets the contact's job title.
     *
     */
    JobTitle: string;
    /**
     * Gets or sets the name of the contact's manager.
     *
     */
    Manager: string;
    /**
     * Gets or sets the mileage for the contact.
     *
     */
    Mileage: string;
    /**
     * Gets or sets the location of the contact's office.
     *
     */
    OfficeLocation: string;
    /**
     * Gets or sets the index of the contact's postal address. When set, PostalAddressIndex refers to an entry in the PhysicalAddresses indexed list.
     *
     */
    PostalAddressIndex: PhysicalAddressIndex;
    /**
     * Gets or sets the contact's profession.
     *
     */
    Profession: string;
    /**
     * Gets or sets the name of the contact's spouse.
     *
     */
    SpouseName: string;
    /**
     * Gets or sets the surname of the contact.
     *
     */
    Surname: string;
    /**
     * Gets or sets the date of the contact's wedding anniversary.
     *
     */
    WeddingAnniversary: DateTime;
    /**
     * Gets a value indicating whether this contact has a picture associated with it.
     *
     */
    HasPicture: boolean;
    /**
     * Gets the full phonetic name from the directory
     *
     */
    PhoneticFullName: string;
    /**
     * Gets the phonetic first name from the directory
     *
     */
    PhoneticFirstName: string;
    /**
     * Gets the phonetic last name from the directory
     *
     */
    PhoneticLastName: string;
    /**
     * Gets the Alias from the directory
     *
     */
    Alias: string;
    /**
     * Get the Notes from the directory
     *
     */
    Notes: string;
    /**
     * Gets the Photo from the directory **Unstable: needs testing**
     *
     */
    DirectoryPhoto: number[];
    /**
     * Gets the User SMIME certificate from the directory **Unstable: needs testing**
     * //ref: cant use bytearray, using base64 decoded string instead -  number[][]
     *
     */
    UserSMIMECertificate: string[];
    /**
     * Gets the MSExchange certificate from the directory **Unstable: needs testing**
     * //ref: cant use bytearray, using base64 decoded string instead -  number[][]
     *
     */
    MSExchangeCertificate: string[];
    /**
     * Gets the DirectoryID as Guid or DN string
     *
     */
    DirectoryId: string;
    /**
     * Gets the manager mailbox information
     *
     */
    ManagerMailbox: EmailAddress;
    /**
     * Get the direct reports mailbox information
     *
     */
    DirectReports: EmailAddressCollection;
    /**
     * Initializes an unsaved local instance of . To bind to an existing contact, use Contact.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the contact will be bound.
     */
    constructor(service: ExchangeService);
    /**
     * @internal Initializes a new instance of the **Contact** class.
     *
     * @param   {ItemAttachment}   parentAttachment   The parent attachment.
     */
    constructor(parentAttachment: ItemAttachment);
    /**
     * Binds to an existing contact and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service         The service to use to bind to the contact.
     * @param   {ItemId}            id              The Id of the contact to bind to.
     * @return  {IPromise<Contact>}                 A Contact instance representing the contact corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId): IPromise<Contact>;
    /**
     * Binds to an existing contact and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service         The service to use to bind to the contact.
     * @param   {ItemId}            id              The Id of the contact to bind to.
     * @param   {PropertySet}       propertySet     The set of properties to load.
     * @return  {IPromise<Contact>}                 A Contact instance representing the contact corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): IPromise<Contact>;
    /**
     * Retrieves the file attachment that holds the contact's picture. **Unstable: needs testing**
     *
     * @return  {FileAttachment}      The file attachment that holds the contact's picture.
     */
    GetContactPictureAttachment(): FileAttachment;
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema;
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string;
    /**
     * Removes the picture from local attachment collection.
     *
     */

    /**
     * Removes the contact's picture.
     *
     */
    RemoveContactPicture(): void;
    /**
     * ## *Not Implemented*
     */
    SetContactPicture(fileNameOrContent: string | number[]): void;
    /**
     * @internal Validates this instance.
     *
     */
    Validate(): void;
}

/**
 * ## *Not Implemented*
 */
 class ContactGroup extends Item {
    GetXmlElementName(): string;
}

/**
 * ## *Not Implemented*
 */
 class Conversation extends ServiceObject {
    GetXmlElementName(): string;
}
/**
 * Represents an **e-mail message**. Properties available on e-mail messages are defined in the *EmailMessageSchema* class.
 *
 */
 class EmailMessage extends Item {
    /**
     * Gets the list of To recipients for the e-mail message.
     *
     */
    ToRecipients: EmailAddressCollection;
    /**
     * Gets the list of Bcc recipients for the e-mail message.
     *
     */
    BccRecipients: EmailAddressCollection;
    /**
     * Gets the list of Cc recipients for the e-mail message.
     *
     */
    CcRecipients: EmailAddressCollection;
    /**
     * Gets the conversation topic of the e-mail message.
     *
     */
    ConversationTopic: string;
    /**
     * Gets the conversation index of the e-mail message.
     *
     */
    ConversationIndex: number[];
    /**
     * Gets or sets the "on behalf" sender of the e-mail message.
     *
     */
    From: EmailAddress;
    /**
     * Gets or sets a value indicating whether this is an associated message.
     *
     */
    IsAssociated: boolean;
    /**
     * Gets or sets a value indicating whether a read receipt is requested for the e-mail message.
     *
     */
    IsDeliveryReceiptRequested: boolean;
    /**
     * Gets or sets a value indicating whether the e-mail message is read.
     *
     */
    IsRead: boolean;
    /**
     * Gets or sets a value indicating whether a read receipt is requested for the e-mail message.
     *
     */
    IsReadReceiptRequested: boolean;
    /**
     * Gets or sets a value indicating whether a response is requested for the e-mail message.
     *
     */
    IsResponseRequested: boolean;
    /**
     * Gets the Internat Message Id of the e-mail message.
     *
     */
    InternetMessageId: string;
    /**
     * Gets or sets the references of the e-mail message.
     *
     */
    References: string;
    /**
     * Gets a list of e-mail addresses to which replies should be addressed.
     *
     */
    ReplyTo: EmailAddressCollection;
    /**
     * Gets or sets the sender of the e-mail message.
     *
     */
    Sender: EmailAddress;
    /**
     * Gets the ReceivedBy property of the e-mail message.
     *
     */
    ReceivedBy: EmailAddress;
    /**
     * Gets the ReceivedRepresenting property of the e-mail message.
     *
     */
    ReceivedRepresenting: EmailAddress;
    /**
     * Gets the ApprovalRequestData property of the e-mail message.
     *
     */
    ApprovalRequestData: ApprovalRequestData;
    /**
     * Gets the VotingInformation property of the e-mail message.
     *
     */
    VotingInformation: VotingInformation;
    /**
     * Initializes an unsaved local instance of . To bind to an existing e-mail message, use EmailMessage.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the e-mail message will be bound.
     */
    constructor(service: ExchangeService);
    /**
     * @internal Initializes a new instance of the **EmailMessage** class.
     *
     * @param   {ItemAttachment}   parentAttachment   The parent attachment.
     */
    constructor(parentAttachment: ItemAttachment);
    /**
     * Binds to an existing e-mail message and loads its first class properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}         service     The service to use to bind to the e-mail message.
     * @param   {ItemId}                  id          The Id of the e-mail message to bind to.
     * @return  {IPromise<EmailMessage>}              An EmailMessage instance representing the e-mail message corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId): IPromise<EmailMessage>;
    /**
     * Binds to an existing e-mail message and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}         service         The service to use to bind to the e-mail message.
     * @param   {ItemId}                  id              The Id of the e-mail message to bind to.
     * @param   {PropertySet}             propertySet     The set of properties to load.
     * @return  {IPromise<EmailMessage>}                  An EmailMessage instance representing the e-mail message corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): IPromise<EmailMessage>;
    /**
     * Creates a forward response to the message.
     *
     * @return  {ResponseMessage}      A ResponseMessage representing the forward response that can subsequently be modified and sent.
     */
    CreateForward(): ResponseMessage;
    /**
     * Creates a reply response to the message.
     *
     * @param   {boolean}             replyAll   Indicates whether the reply should go to all of the original recipients of the message.
     * @return  {ResponseMessage}     A ResponseMessage representing the reply response that can subsequently be modified and sent.
     */
    CreateReply(replyAll: boolean): ResponseMessage;
    /**
     * Forwards the message. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}   bodyPrefix     The prefix to prepend to the original body of the message.
     * @param   {EmailAddress[]}   toRecipients   The recipients to forward the message to.
     */
    Forward(bodyPrefix: MessageBody, toRecipients: EmailAddress[]): IPromise<void>;
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema;
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string;
    /**
     * Send message.
     *
     * @param   {FolderId}            parentFolderId       The parent folder id.
     * @param   {MessageDisposition}  messageDisposition   The message disposition.
     */

    /**
     * Replies to the message. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}   bodyPrefix   The prefix to prepend to the original body of the message.
     * @param   {boolean}   replyAll     Indicates whether the reply should be sent to all of the original recipients of the message.
     */
    Reply(bodyPrefix: MessageBody, replyAll: boolean): IPromise<void>;
    /**
     * Sends this e-mail message. Calling this method results in at least one call to EWS.
     */
    Send(): IPromise<void>;
    /**
     * Sends this e-mail message and saves a copy of it in the Sent Items folder. SendAndSaveCopy does not work if the message has unsaved attachments. In that case, the message must first be saved and then sent. Calling this method results in a call to EWS.
     *
     */
    SendAndSaveCopy(): IPromise<void>;
    /**
     * Sends this e-mail message and saves a copy of it in the specified folder. SendAndSaveCopy does not work if the message has unsaved attachments. In that case, the message must first be saved and then sent. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to save the copy.
     */
    SendAndSaveCopy(destinationFolderName: WellKnownFolderName): IPromise<void>;
    /**
     * Sends this e-mail message and saves a copy of it in the specified folder. SendAndSaveCopy does not work if the
    message has unsaved attachments. In that case, the message must first be saved and then sent. Calling this method
    results in a call to EWS.
     *
     * @param   {FolderId}   destinationFolderId   The Id of the folder in which to save the copy.
     */
    SendAndSaveCopy(destinationFolderId: FolderId): IPromise<void>;
    /**
     * Suppresses the read receipt on the message. Calling this method results in a call to EWS.
     *
     */
    SuppressReadReceipt(): IPromise<void>;
}
/**
 * Represents a generic **Item**. Properties available on items are defined in the *ItemSchema* class.
 *
 */
 class Item extends ServiceObject {

    /**
     * @internal Gets the parent attachment of this item.
     *
     */
    ParentAttachment: ItemAttachment;
    /**
     * @internal Gets Id of the root item for this item.
     *
     */
    RootItemId: ItemId;
    /**
     * Gets a value indicating whether the item is an attachment.
     *
     */
    IsAttachment: boolean;
    /**
     * Gets a value indicating whether this object is a real store item, or if it's a local object that has yet to be saved.
     *
     */
    IsNew: boolean;
    /**
     * Gets the Id of this item.
     *
     */
    Id: ItemId;
    /**
     * Get or sets the MIME content of this item.
     *
     */
    MimeContent: MimeContent;
    /**
     * Gets the Id of the parent folder of this item.
     *
     */
    ParentFolderId: FolderId;
    /**
     * Gets or sets the sensitivity of this item.
     *
     */
    Sensitivity: Sensitivity;
    /**
     * Gets a list of the attachments to this item.
     *
     */
    Attachments: AttachmentCollection;
    /**
     * Gets the time when this item was received.
     *
     */
    DateTimeReceived: Date;
    /**
     * Gets the size of this item.
     *
     */
    Size: number;
    /**
     * Gets or sets the list of categories associated with this item.
     *
     */
    Categories: StringList;
    /**
     * Gets or sets the culture associated with this item.
     *
     */
    Culture: string;
    /**
     * Gets or sets the importance of this item.
     *
     */
    Importance: Importance;
    /**
     * Gets or sets the In-Reply-To reference of this item.
     *
     */
    InReplyTo: string;
    /**
     * Gets a value indicating whether the message has been submitted to be sent.
     *
     */
    IsSubmitted: boolean;
    /**
     * Gets a value indicating whether this is an associated item.
     *
     */
    IsAssociated: boolean;
    /**
     * Gets a value indicating whether the item is is a draft. An item is a draft when it has not yet been sent.
     *
     */
    IsDraft: boolean;
    /**
     * Gets a value indicating whether the item has been sent by the current authenticated user.
     *
     */
    IsFromMe: boolean;
    /**
     * Gets a value indicating whether the item is a resend of another item.
     *
     */
    IsResend: boolean;
    /**
     * Gets a value indicating whether the item has been modified since it was created.
     *
     */
    IsUnmodified: boolean;
    /**
     * Gets a list of Internet headers for this item.
     *
     */
    InternetMessageHeaders: InternetMessageHeaderCollection;
    /**
     * Gets the date and time this item was sent.
     *
     */
    DateTimeSent: Date;
    /**
     * Gets the date and time this item was created.
     *
     */
    DateTimeCreated: Date;
    /**
     * Gets a value indicating which response actions are allowed on this item. Examples of response actions are Reply and Forward.
     *
     */
    AllowedResponseActions: ResponseActions;
    /**
     * Gets or sets the date and time when the reminder is due for this item.
     *
     */
    ReminderDueBy: Date;
    /**
     * Gets or sets a value indicating whether a reminder is set for this item.
     *
     */
    IsReminderSet: boolean;
    /**
     * Gets or sets the number of minutes before the start of this item when the reminder should be triggered.
     *
     */
    ReminderMinutesBeforeStart: number;
    /**
     * Gets a text summarizing the Cc receipients of this item.
     *
     */
    DisplayCc: string;
    /**
     * Gets a text summarizing the To recipients of this item.
     *
     */
    DisplayTo: string;
    /**
     * Gets a value indicating whether the item has attachments.
     *
     */
    HasAttachments: boolean;
    /**
     * Gets or sets the body of this item.
     *
     */
    Body: MessageBody;
    /**
     * Gets or sets the custom class name of this item.
     *
     */
    ItemClass: string;
    /**
     * Gets or sets the subject of this item.
     *
     */
    Subject: string;
    /**
     * Gets the query string that should be appended to the Exchange Web client URL to open this item using the appropriate read form in a web browser.
     *
     */
    WebClientReadFormQueryString: string;
    /**
     * Gets the query string that should be appended to the Exchange Web client URL to open this item using the appropriate edit form in a web browser.
     *
     */
    WebClientEditFormQueryString: string;
    /**
     * Gets a list of extended properties defined on this item.
     *
     */
    ExtendedProperties: ExtendedPropertyCollection;
    /**
     * Gets a value indicating the effective rights the current authenticated user has on this item.
     *
     */
    EffectiveRights: EffectiveRights;
    /**
     * Gets the name of the user who last modified this item.
     *
     */
    LastModifiedName: string;
    /**
     * Gets the date and time this item was last modified.
     *
     */
    LastModifiedTime: Date;
    /**
     * Gets the Id of the conversation this item is part of.
     *
     */
    ConversationId: ConversationId;
    /**
     * Gets the body part that is unique to the conversation this item is part of.
     *
     */
    UniqueBody: UniqueBody;
    /**
     * Gets the store entry id.
     *
     */
    StoreEntryId: number[];
    /**
     * Gets the item instance key.
     *
     */
    InstanceKey: number[];
    /**
     * Get or set the Flag value for this item.
     *
     */
    Flag: Flag;
    /**
     * Gets the normalized body of the item.
     *
     */
    NormalizedBody: NormalizedBody;
    /**
     * Gets the EntityExtractionResult of the item.
     *
     */
    EntityExtractionResult: EntityExtractionResult;
    /**
     * Gets or sets the policy tag.
     *
     */
    PolicyTag: PolicyTag;
    /**
     * Gets or sets the archive tag.
     *
     */
    ArchiveTag: ArchiveTag;
    /**
     * Gets the retention date.
     *
     */
    RetentionDate: Date;
    /**
     * Gets the item Preview.
     *
     */
    Preview: string;
    /**
     * Gets the text body of the item.
     *
     */
    TextBody: TextBody;
    /**
     * Gets the icon index.
     *
     */
    IconIndex: IconIndex;
    /**
     * @internal Gets the default setting for how to treat affected task occurrences on Delete.
     * Subclasses will override this for different default behavior.
     *
     */
    DefaultAffectedTaskOccurrences: AffectedTaskOccurrence;
    /**
     * @internal Gets the default setting for sending cancellations on Delete.
     * Subclasses will override this for different default behavior.
     *
     */
    DefaultSendCancellationsMode: SendCancellationsMode;
    /**
     * @internal Gets the default settings for sending invitations on Save.
     * Subclasses will override this for different default behavior.
     *
     */
    DefaultSendInvitationsMode: SendInvitationsMode;
    /**
     * @internal Gets the default settings for sending invitations or cancellations on Update.
     * Subclasses will override this for different default behavior.
     *
     */
    DefaultSendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode;
    /**
     * @internal Initializes an unsaved local instance of *Item*. To bind to an existing item, use **Item.Bind()** instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the item will be bound.
     */
    constructor(svc: ExchangeService);
    /**
     * @internal Initializes a new instance of the  *Item* class. To bind to an existing item, use **Item.Bind()** instead
     *
     * @param   {ItemAttachment}   parentAttachment   The parent attachment.
     */
    constructor(parentAttachment: ItemAttachment);
    /**
     * @internal ~~**used for super call, easier to manage, do not use in Actual code. //todo:fix - [ ] remove from d.ts file**~~.
     *
     * @param   {ExchangeService | ItemAttachment}   service   The ExchangeService object to which the item will be bound.
     */
    constructor(obj: ExchangeService | ItemAttachment);
    /**
     * Binds to an existing item, whatever its actual type is, and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service         The service to use to bind to the item.
     * @param   {ItemId}            id              The Id of the item to bind to.
     * @return  {IPromise<Item>}                    An Item instance representing the item corresponding to the specified Id :Promise.
     */
    Bind(service: ExchangeService, id: ItemId): IPromise<Item>;
    /**
     * Binds to an existing item, whatever its actual type is, and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service         The service to use to bind to the item.
     * @param   {ItemId}            id              The Id of the item to bind to.
     * @param   {PropertySet}       propertySet     The set of properties to load.
     * @return  {IPromise<Item>}                    An Item instance representing the item corresponding to the specified Id :Promise.
     */
    Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): IPromise<Item>;
    /**
     * Creates a copy of this item in the specified folder. Calling this method results in a call to EWS.
     *
     * Copy returns null if the copy operation is across two mailboxes or between a mailbox and a public folder.
     *
     * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to create a copy of this item.
     * @return  {IPromise<Item>}                                The copy of this item :Promise.
     */
    Copy(destinationFolderName: WellKnownFolderName): IPromise<Item>;
    /**
     * Creates a copy of this item in the specified folder. Calling this method results in a call to EWS.
     *
     *  Copy returns null if the copy operation is across two mailboxes or between a mailbox and a public folder.
     *
     * @param   {FolderId}          destinationFolderId   The Id of the folder in which to create a copy of this item.
     * @return  {IPromise<Item>}                          The copy of this item :Promise.
     */
    Copy(destinationFolderId: FolderId): IPromise<Item>;
    /**
     * Deletes the item. Calling this method results in a call to EWS.
     *
     * @param   {DeleteMode}   deleteMode             The deletion mode.
     */
    Delete(deleteMode: DeleteMode): IPromise<void>;
    /**
     * Deletes the item. Calling this method results in a call to EWS.
     *
     * @param   {DeleteMode}   deleteMode             The deletion mode.
     * @param   {boolean}   suppressReadReceipts   Whether to suppress read receipts
     */
    Delete(deleteMode: DeleteMode, suppressReadReceipts: boolean): IPromise<void>;
    /**
     * @internal Gets a list of extended properties defined on this object.
     *
     * @return  {ExtendedPropertyCollection}      Extended properties collection.
     */
    GetExtendedProperties(): ExtendedPropertyCollection;
    /**
     * @inrtnal The property definition for the Id of this object.
     *
     * @return  {PropertyDefinition}      A PropertyDefinition instance.
     */
    GetIdPropertyDefinition(): PropertyDefinition;
    /**
     * Gets a value indicating whether a time zone SOAP header should be emitted in a CreateItem or UpdateItem request so this item can be property saved or updated.
     *
     * @param   {boolean}   isUpdateOperation   Indicates whether the operation being petrformed is an update operation.
     * @return  {boolean}                       true if a time zone SOAP header should be emitted; otherwise, false.
     */
    GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean;
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema;
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string;
    /**
     * @internal Gets a value indicating whether this instance has unprocessed attachment collection changes.
     *
     * @return  {boolean}      true or false.
     *
     */
    HasUnprocessedAttachmentChanges(): boolean;
    /**
     * @internal Create item.
     *
     * @param   {FolderId}              parentFolderId        The parent folder id.
     * @param   {MessageDisposition}    messageDisposition    The message disposition.
     * @param   {SendInvitationsMode}   sendInvitationsMode   The send invitations mode.
     */
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): IPromise<void>;
    /**
     * @internal Deletes the object.
     *
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
     */
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): IPromise<void>;
    /**
     * @internal Deletes the object.
     *
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
     * @param   {boolean}                   suppressReadReceipts      Whether to suppress read receipts
     */
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipts: boolean): IPromise<void>;
    /**
     * @internal Loads the specified set of properties on the object.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     */
    InternalLoad(propertySet: PropertySet): IPromise<void>;
    /**
     * @internal Update item.
     *
     * @param   {FolderId}                              parentFolderId                       The parent folder id.
     * @param   {ConflictResolutionMode}                conflictResolutionMode               The conflict resolution mode.
     * @param   {MessageDisposition}                    messageDisposition                   The message disposition.
     * @param   {SendInvitationsOrCancellationsMode}    sendInvitationsOrCancellationsMode   The send invitations or cancellations mode.
     * @return  {IPromise<Item>}                        Updated item :Promise.
     */
    InternalUpdate(parentFolderId: FolderId, conflictResolutionMode: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): IPromise<Item>;
    /**
     * @internal Update item.
     *
     * @param   {FolderId}                              parentFolderId                       The parent folder id.
     * @param   {ConflictResolutionMode}                conflictResolutionMode               The conflict resolution mode.
     * @param   {MessageDisposition}                    messageDisposition                   The message disposition.
     * @param   {SendInvitationsOrCancellationsMode}    sendInvitationsOrCancellationsMode   The send invitations or cancellations mode.
     * @param   {boolean}                               suppressReadReceipts                 Whether to suppress read receipts
     * @return  {IPromise<Item>}                        Updated item :Promise.
     */
    InternalUpdate(parentFolderId: FolderId, conflictResolutionMode: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): IPromise<Item>;
    /**
     * Moves this item to a the specified folder. Calling this method results in a call to EWS.
     *
     * Move returns null if the move operation is across two mailboxes or between a mailbox and a public folder.
     *
     * @param   {FolderId}   destinationFolderId    The Id of the folder to which to move this item.
     * @return  {IPromise<Item>}                    The moved copy of this item :Promise.
     */
    Move(destinationFolderId: FolderId): IPromise<Item>;
    /**
     * Moves this item to a the specified folder. Calling this method results in a call to EWS.
     *
     * Move returns null if the move operation is across two mailboxes or between a mailbox and a public folder.
     *
     * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder to which to move this item.
     * @return  {IPromise<Item>}        The moved copy of this item :Promise.
     */
    Move(destinationFolderName: WellKnownFolderName): IPromise<Item>;
    /**
     * Removes an extended property.
     *
     * @param   {ExtendedPropertyDefinition}    extendedPropertyDefinition   The extended property definition.
     * @return  {boolean}                       True if property was removed.
     */
    RemoveExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition): boolean;
    /**
     * Saves this item in the default folder based on the item's type (for example, an e-mail message is saved to the Drafts folder).
     * Calling this method results in at least one call to EWS. Mutliple calls to EWS might be made if attachments have been added.
     *
     */
    Save(): IPromise<void>;
    /**
     * Saves this item in a specific folder. Calling this method results in at least one call to EWS.
     * Mutliple calls to EWS might be made if attachments have been added.
     *
     * @param   {WellKnownFolderName}   parentFolderName   The name of the folder in which to save this item.
     */
    Save(parentFolderName?: WellKnownFolderName): IPromise<void>;
    /**
     * Saves this item in a specific folder. Calling this method results in at least one call to EWS.
     * Mutliple calls to EWS might be made if attachments have been added.
     *
     * @param   {}   parentFolderId   The Id of the folder in which to save this item.
     */
    Save(parentFolderId?: FolderId): IPromise<void>;
    /**
     * Sets the extended property.
     *
     * @param   {ExtendedPropertyDefinition}    extendedPropertyDefinition   The extended property definition.
     * @param   {value}                         value                        The value.
     */
    SetExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition, value: any): void;
    /**
     * @internal Sets the subject.
     *
     */
    SetSubject(subject: string): void;
    /**
     * Throws exception if this is attachment.
     *
     */
    ThrowIfThisIsAttachment(): void;
    /**
     * Applies the local changes that have been made to this item. Calling this method results in at least one call to EWS.
     * Mutliple calls to EWS might be made if attachments have been added or removed.
     *
     * @param   {ConflictResolutionMode}   conflictResolutionMode   The conflict resolution mode.
     */
    Update(conflictResolutionMode: ConflictResolutionMode): IPromise<void>;
    /**
     * Applies the local changes that have been made to this item. Calling this method results in at least one call to EWS.
     * Mutliple calls to EWS might be made if attachments have been added or removed.
     *
     * @param   {ConflictResolutionMode}   conflictResolutionMode   The conflict resolution mode.
     * @param   {boolean}   suppressReadReceipts     Whether to suppress read receipts
     */
    Update(conflictResolutionMode: ConflictResolutionMode, suppressReadReceipts: boolean): IPromise<void>;
    /**
     * @internal Validates this instance.
     *
     */
    Validate(): void;
}

/**
 ** this is partial section of CreateEwsObjectFromXmlElementName from serviceobjectinfo, other parts are moved to different object type like folderinfo etc.
 * this to is to avoid circular referencing with requirejs/commonjs/nodejs
 */
 class ItemInfo extends ServiceObjectInfo {
    InitializeServiceObjectClassMap(): any;
}

/**
 * ## *Not Implemented*
 */
 class MeetingCancellation extends MeetingMessage {
    GetXmlElementName(): string;
}

/**
 * ## *Not Implemented*
 */
 class MeetingMessage extends EmailMessage {
    GetXmlElementName(): string;
}

/**
 * ## *Not Implemented*
 */
 class MeetingRequest extends MeetingMessage {
    GetXmlElementName(): string;
}

/**
 * ## *Not Implemented*
 */
 class MeetingResponse extends MeetingMessage {
    GetXmlElementName(): string;
}

/**
 * ## *Not Implemented*
 */
 class PostItem extends Item {
    GetXmlElementName(): string;
}

/**
 * ## *Not Implemented*
 */
 class Task extends Item {
    GetXmlElementName(): string;
}
/**
 * Represents a meeting acceptance message.
 *
 */
 class AcceptMeetingInvitationMessage extends CalendarResponseMessage<MeetingResponse> {

    /**
     * Gets a value indicating whether the associated meeting is tentatively accepted.
     *
     */
    Tentative: boolean;
    /**
     * Initializes a new instance of the **AcceptMeetingInvitationMessage** class.
     *
     * @param   {Item}            referenceItem   The reference item.
     * @param   {boolean}         tentative       if set to true accept invitation tentatively.
     */
    constructor(referenceItem: Item, tentative: boolean);
    /**
     * Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    /**
     * This methods lets subclasses of ServiceObject override the default mechanism by which the XML element name associated with their type is retrieved.
     *
     * @return  {string}      The XML element name associated with this type. If this method returns null or empty, the XML element name associated with this type is determined by the EwsObjectDefinition attribute that decorates the type, if present.
     */
    GetXmlElementNameOverride(): string;
}
/**
 * Represents the base class for accept, tentatively accept and decline response messages.
 */
 class CalendarResponseMessage<TMessage extends EmailMessage> extends CalendarResponseMessageBase<TMessage> {
    /**
     * Gets or sets the body of the response.
     */
    Body: MessageBody;
    /**
     * Gets a list of recipients the response will be sent to.
     */
    ToRecipients: EmailAddressCollection;
    /**
     * Gets a list of recipients the response will be sent to as Cc.
     */
    CcRecipients: EmailAddressCollection;
    /**
     * Gets a list of recipients this response will be sent to as Bcc.
     */
    BccRecipients: EmailAddressCollection;
    ItemClass: string;
    /**
     * Gets or sets the sensitivity of this response.
     */
    Sensitivity: Sensitivity;
    /**
     * Gets a list of attachments to this response.
     */
    Attachments: AttachmentCollection;
    InternetMessageHeaders: InternetMessageHeaderCollection;
    /**
     * Gets or sets the sender of this response.
     */
    Sender: EmailAddress;
    /**
     * Initializes a new instance of the **CalendarResponseMessage** class.
     *
     * @param   {Item}   referenceItem   The reference item.
     */
    constructor(referenceItem: Item);
    /**
     * Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema;
}

/**
 * Represents the base class for all calendar-related response messages.
 *
 */
 class CalendarResponseMessageBase<TMessage extends EmailMessage> extends ResponseObject<TMessage> {
    /**
    * Initializes a new instance of the **CalendarResponseMessageBase** class.
    *
    * @param   {Item}   referenceItem   The reference item.
    */
    constructor(referenceItem: Item);
    /**
     * Saves the response in the Drafts folder. Calling this method results in a call to EWS.
     *
     * @return  {CalendarActionResults}      A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    Save(): IPromise<CalendarActionResults>;
    /**
     * Saves the response in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}     destinationFolderName   The name of the folder in which to save the response.
     * @return  {CalendarActionResults}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    Save(destinationFolderName: WellKnownFolderName): IPromise<CalendarActionResults>;
    /**
     * Saves the response in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}                destinationFolderId   The Id of the folder in which to save the response.
     * @return  {CalendarActionResults}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    Save(destinationFolderId: FolderId): IPromise<CalendarActionResults>;
    /**
     * Sends this response without saving a copy. Calling this method results in a call to EWS.
     *
     * @return  {CalendarActionResults}      A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    Send(): IPromise<CalendarActionResults>;
    /**
     * Sends this response ans saves a copy in the Sent Items folder. Calling this method results in a call to EWS.
     *
     * @return  {CalendarActionResults}      A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    SendAndSaveCopy(): IPromise<CalendarActionResults>;
    /**
     * Sends this response and saves a copy in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}     destinationFolderName   The name of the folder in which to save the copy of the message.
     * @return  {CalendarActionResults}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    SendAndSaveCopy(destinationFolderName: WellKnownFolderName): IPromise<CalendarActionResults>;
    /**
     * Sends this response ans saves a copy in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}                destinationFolderId   The Id of the folder in which to save the copy of the message.
     * @return  {CalendarActionResults}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    SendAndSaveCopy(destinationFolderId: FolderId): IPromise<CalendarActionResults>;
}
/**
 * Represents a meeting cancellation message.
 *
 */
 class CancelMeetingMessage extends CalendarResponseMessageBase<MeetingCancellation> {
    /**
     * Gets or sets the body of the response.
     *
     */
    Body: MessageBody;
    /**
     * Initializes a new instance of the **CancelMeetingMessage** class.
     *
     * @param   {Item}   referenceItem   The reference item.
     */
    constructor(referenceItem: Item);
    /**
     * Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    /**
     * Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema;
    /**
     * Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string;
}
/**
 * Represents a meeting declination message.
 */
 class DeclineMeetingInvitationMessage extends CalendarResponseMessage<MeetingResponse> {
    /**
     * Initializes a new instance of the **DeclineMeetingInvitationMessage** class.
     *
     * @param   {}   referenceItem   The reference item.
     */
    constructor(referenceItem: Item);
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string;
}
 class PostReply extends ServiceObject {
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
}
 class RemoveFromCalendar extends ServiceObject {

    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetSchema(): ServiceObjectSchema;
    GetXmlElementName(): string;
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): Item[];
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any;
    InternalLoad(propertySet: PropertySet): any;
}
/**
 * Represents the base class for e-mail related responses (Reply, Reply all and Forward).
 *
 */
 class ResponseMessage extends ResponseObject<EmailMessage> {

    /**
     * Gets a value indicating the type of response this object represents.
     *
     */
    ResponseType: ResponseMessageType;
    /**
     * Gets or sets the body of the response.
     *
     */
    Body: MessageBody;
    /**
     * Gets a list of recipients the response will be sent to.
     *
     */
    ToRecipients: EmailAddressCollection;
    /**
     * Gets a list of recipients the response will be sent to as Cc.
     *
     */
    CcRecipients: EmailAddressCollection;
    /**
     * Gets a list of recipients this response will be sent to as Bcc.
     *
     */
    BccRecipients: EmailAddressCollection;
    /**
     * Gets or sets the subject of this response.
     *
     */
    Subject: string;
    /**
     * Gets or sets the body prefix of this response. The body prefix will be prepended to the original
    message's body when the response is created.
     *
     */
    BodyPrefix: MessageBody;
    /**
     * Initializes a new instance of the **ResponseMessage** class.
     *
     * @param   {Item}                    referenceItem   The reference item.
     * @param   {ResponseMessageType}     responseType    Type of the response.
     */
    constructor(referenceItem: Item, responseType: ResponseMessageType);
    /**
     * Gets the minimum required server version.
     *
     * @return  {type}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    /**
     * Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema;
    /**
     * Get XML Element Name - workaround for c# attributes
     */
    GetXmlElementName(): string;
    /**
     * This methods lets subclasses of ServiceObject override the default mechanism by which the XML element name associated with their type is retrieved.
     *
     * @return  {string}      The XML element name associated with this type. If this method returns null or empty, the XML element name associated with this type is determined by the EwsObjectDefinition attribute that decorates the type, if present.
     */
    GetXmlElementNameOverride(): string;
}
/**
 * Represents the base class for all responses that can be sent.
 */
 class ResponseObject<TMessage extends EmailMessage> extends ServiceObject {

    /**
     * Gets or sets a value indicating whether read receipts will be requested from recipients of this response.
     */
    IsReadReceiptRequested: boolean;
    /**
     * Gets or sets a value indicating whether delivery receipts should be sent to the sender.
     */
    IsDeliveryReceiptRequested: boolean;
    /**
     * Initializes a new instance of the **ResponseObject** class.
     *
     * @param   {type}   referenceItem   The reference item.
     */
    constructor(referenceItem: Item);
    /**
     * Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema;
    /**
    * Create the response object.
    *
    * @param   {FolderId}             destinationFolderId   The destination folder id.
    * @param   {MessageDisposition}   messageDisposition    The message disposition.
    * @return  {IPromise<Item[]>}               The list of items returned by EWS.
    */
    InternalCreate(destinationFolderId: FolderId, messageDisposition: MessageDisposition): IPromise<Item[]>;
    /**
     * Deletes the object.
     *
     * @param   {DeleteMode}                  deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}       sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
     * @param   {affectedTaskOccurrences}     affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
     */
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): IPromise<void>;
    /**
     * Loads the specified set of properties on the object.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     */
    InternalLoad(propertySet: PropertySet): IPromise<void>;
    /**
     * Saves the response in the Drafts folder. Calling this method results in a call to EWS.
     *
     * @return  {IPromise<TMessage>}      A TMessage that represents the response.
     */
    Save(): IPromise<TMessage>;
    /**
     * Saves the response in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}     destinationFolderName   The name of the folder in which to save the response.
     * @return  {IPromise<TMessage>}      A TMessage that represents the response.
     */
    Save(destinationFolderName: WellKnownFolderName): IPromise<TMessage>;
    /**
     * Saves the response in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   destinationFolderId   The Id of the folder in which to save the response.
     * @return  {IPromise<TMessage>}                         A TMessage that represents the response.
     */
    Save(destinationFolderId: FolderId): IPromise<TMessage>;
    /**
     * Sends this response without saving a copy. Calling this method results in a call to EWS.
     */
    Send(): IPromise<void>;
    /**
     * Sends this response and saves a copy in the Sent Items folder. Calling this method results in a call to EWS.
     */
    SendAndSaveCopy(): IPromise<void>;
    /**
     * Sends this response and saves a copy in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to save the copy of the message.
     */
    SendAndSaveCopy(destinationFolderName: WellKnownFolderName): IPromise<void>;
    /**
     * Sends this response and saves a copy in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   destinationFolderId   The Id of the folder in which to save the copy of the message.
     */
    SendAndSaveCopy(destinationFolderId: FolderId): IPromise<void>;
}

/**
 * Represents a response object created to supress read receipts for an item.
 *
 */
 class SuppressReadReceipt extends ServiceObject {

    /**
     * Initializes a new instance of the **SuppressReadReceipt** class.
     *
     * @param   {Item}   referenceItem   The reference item.
     */
    constructor(referenceItem: Item);
    /**
     * Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    /**
     * Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema;
    GetXmlElementName(): string;
    /**
     * Create the response object.
     *
     * @param   {FolderId}            parentFolderId       The parent folder id.
     * @param   {MessageDisposition}  messageDisposition   The message disposition.
     */
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): IPromise<void>;
    /**
     * Deletes the object.
     *
     * @param   {DeleteMode}              deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}   sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
     * @param   {AffectedTaskOccurrence}  affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
     */
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): IPromise<void>;
    /**
     * Loads the specified set of properties on the object.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     */
    InternalLoad(propertySet: PropertySet): IPromise<void>;
}
/**
 * Represents the schema for appointment and meeting requests.
 */
 class AppointmentSchema extends ItemSchema {
    /**
     * Defines the **StartTimeZone** property.
     */
    static StartTimeZone: PropertyDefinition;
    /**
     * Defines the **EndTimeZone** property.
     */
    static EndTimeZone: PropertyDefinition;
    /**
     * Defines the **Start** property.
     */
    static Start: PropertyDefinition;
    /**
     * Defines the **End** property.
     */
    static End: PropertyDefinition;
    /**
     * Defines the **OriginalStart** property.
     */
    static OriginalStart: PropertyDefinition;
    /**
     * Defines the **IsAllDayEvent** property.
     */
    static IsAllDayEvent: PropertyDefinition;
    /**
     * Defines the **LegacyFreeBusyStatus** property.
     */
    static LegacyFreeBusyStatus: PropertyDefinition;
    /**
     * Defines the **Location** property.
     */
    static Location: PropertyDefinition;
    /**
     * Defines the **When** property.
     */
    static When: PropertyDefinition;
    /**
     * Defines the **IsMeeting** property.
     */
    static IsMeeting: PropertyDefinition;
    /**
     * Defines the **IsCancelled** property.
     */
    static IsCancelled: PropertyDefinition;
    /**
     * Defines the **IsRecurring** property.
     */
    static IsRecurring: PropertyDefinition;
    /**
     * Defines the **MeetingRequestWasSent** property.
     */
    static MeetingRequestWasSent: PropertyDefinition;
    /**
     * Defines the **IsResponseRequested** property.
     */
    static IsResponseRequested: PropertyDefinition;
    /**
     * Defines the **AppointmentType** property.
     */
    static AppointmentType: PropertyDefinition;
    /**
     * Defines the **MyResponseType** property.
     */
    static MyResponseType: PropertyDefinition;
    /**
     * Defines the **Organizer** property.
     */
    static Organizer: PropertyDefinition;
    /**
     * Defines the **RequiredAttendees** property.
     */
    static RequiredAttendees: PropertyDefinition;
    /**
     * Defines the **OptionalAttendees** property.
     */
    static OptionalAttendees: PropertyDefinition;
    /**
     * Defines the **Resources** property.
     */
    static Resources: PropertyDefinition;
    /**
     * Defines the **ConflictingMeetingCount** property.
     */
    static ConflictingMeetingCount: PropertyDefinition;
    /**
     * Defines the **AdjacentMeetingCount** property.
     */
    static AdjacentMeetingCount: PropertyDefinition;
    /**
     * Defines the **ConflictingMeetings** property.
     */
    static ConflictingMeetings: PropertyDefinition;
    /**
     * Defines the **AdjacentMeetings** property.
     */
    static AdjacentMeetings: PropertyDefinition;
    /**
     * Defines the **Duration** property.
     */
    static Duration: PropertyDefinition;
    /**
     * Defines the **TimeZone** property.
     */
    static TimeZone: PropertyDefinition;
    /**
     * Defines the **AppointmentReplyTime** property.
     */
    static AppointmentReplyTime: PropertyDefinition;
    /**
     * Defines the **AppointmentSequenceNumber** property.
     */
    static AppointmentSequenceNumber: PropertyDefinition;
    /**
     * Defines the **AppointmentState** property.
     */
    static AppointmentState: PropertyDefinition;
    /**
     * Defines the **Recurrence** property.
     */
    static Recurrence: PropertyDefinition;
    /**
     * Defines the **FirstOccurrence** property.
     */
    static FirstOccurrence: PropertyDefinition;
    /**
     * Defines the **LastOccurrence** property.
     */
    static LastOccurrence: PropertyDefinition;
    /**
     * Defines the **ModifiedOccurrences** property.
     */
    static ModifiedOccurrences: PropertyDefinition;
    /**
     * Defines the **DeletedOccurrences** property.
     */
    static DeletedOccurrences: PropertyDefinition;
    /**
     * Defines the **MeetingTimeZone** property.
     */
    static MeetingTimeZone: PropertyDefinition;
    /**
     * Defines the **ConferenceType** property.
     */
    static ConferenceType: PropertyDefinition;
    /**
     * Defines the **AllowNewTimeProposal** property.
     */
    static AllowNewTimeProposal: PropertyDefinition;
    /**
     * Defines the **IsOnlineMeeting** property.
     */
    static IsOnlineMeeting: PropertyDefinition;
    /**
     * Defines the **MeetingWorkspaceUrl** property.
     */
    static MeetingWorkspaceUrl: PropertyDefinition;
    /**
     * Defines the **NetShowUrl** property.
     */
    static NetShowUrl: PropertyDefinition;
    /**
     * Defines the **ICalUid** property.
     */
    static ICalUid: PropertyDefinition;
    /**
     * Defines the **ICalRecurrenceId** property.
     */
    static ICalRecurrenceId: PropertyDefinition;
    /**
     * Defines the **ICalDateTimeStamp** property.
     */
    static ICalDateTimeStamp: PropertyDefinition;
    /**
     * Defines the **EnhancedLocation** property.
     */
    static EnhancedLocation: PropertyDefinition;
    /**
     * Defines the **JoinOnlineMeetingUrl** property.
     */
    static JoinOnlineMeetingUrl: PropertyDefinition;
    /**
     * Defines the **OnlineMeetingSettings** property.
     */
    static OnlineMeetingSettings: PropertyDefinition;
    /**
     * @internal Instance of **AppointmentSchema**
     */
    static Instance: AppointmentSchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents the schema for appointment and meeting requests.
 */
export interface AppointmentSchema {
    /**
     * Defines the **StartTimeZone** property.
     */
    StartTimeZone: PropertyDefinition;
    /**
     * Defines the **EndTimeZone** property.
     */
    EndTimeZone: PropertyDefinition;
    /**
     * Defines the **Start** property.
     */
    Start: PropertyDefinition;
    /**
     * Defines the **End** property.
     */
    End: PropertyDefinition;
    /**
     * Defines the **OriginalStart** property.
     */
    OriginalStart: PropertyDefinition;
    /**
     * Defines the **IsAllDayEvent** property.
     */
    IsAllDayEvent: PropertyDefinition;
    /**
     * Defines the **LegacyFreeBusyStatus** property.
     */
    LegacyFreeBusyStatus: PropertyDefinition;
    /**
     * Defines the **Location** property.
     */
    Location: PropertyDefinition;
    /**
     * Defines the **When** property.
     */
    When: PropertyDefinition;
    /**
     * Defines the **IsMeeting** property.
     */
    IsMeeting: PropertyDefinition;
    /**
     * Defines the **IsCancelled** property.
     */
    IsCancelled: PropertyDefinition;
    /**
     * Defines the **IsRecurring** property.
     */
    IsRecurring: PropertyDefinition;
    /**
     * Defines the **MeetingRequestWasSent** property.
     */
    MeetingRequestWasSent: PropertyDefinition;
    /**
     * Defines the **IsResponseRequested** property.
     */
    IsResponseRequested: PropertyDefinition;
    /**
     * Defines the **AppointmentType** property.
     */
    AppointmentType: PropertyDefinition;
    /**
     * Defines the **MyResponseType** property.
     */
    MyResponseType: PropertyDefinition;
    /**
     * Defines the **Organizer** property.
     */
    Organizer: PropertyDefinition;
    /**
     * Defines the **RequiredAttendees** property.
     */
    RequiredAttendees: PropertyDefinition;
    /**
     * Defines the **OptionalAttendees** property.
     */
    OptionalAttendees: PropertyDefinition;
    /**
     * Defines the **Resources** property.
     */
    Resources: PropertyDefinition;
    /**
     * Defines the **ConflictingMeetingCount** property.
     */
    ConflictingMeetingCount: PropertyDefinition;
    /**
     * Defines the **AdjacentMeetingCount** property.
     */
    AdjacentMeetingCount: PropertyDefinition;
    /**
     * Defines the **ConflictingMeetings** property.
     */
    ConflictingMeetings: PropertyDefinition;
    /**
     * Defines the **AdjacentMeetings** property.
     */
    AdjacentMeetings: PropertyDefinition;
    /**
     * Defines the **Duration** property.
     */
    Duration: PropertyDefinition;
    /**
     * Defines the **TimeZone** property.
     */
    TimeZone: PropertyDefinition;
    /**
     * Defines the **AppointmentReplyTime** property.
     */
    AppointmentReplyTime: PropertyDefinition;
    /**
     * Defines the **AppointmentSequenceNumber** property.
     */
    AppointmentSequenceNumber: PropertyDefinition;
    /**
     * Defines the **AppointmentState** property.
     */
    AppointmentState: PropertyDefinition;
    /**
     * Defines the **Recurrence** property.
     */
    Recurrence: PropertyDefinition;
    /**
     * Defines the **FirstOccurrence** property.
     */
    FirstOccurrence: PropertyDefinition;
    /**
     * Defines the **LastOccurrence** property.
     */
    LastOccurrence: PropertyDefinition;
    /**
     * Defines the **ModifiedOccurrences** property.
     */
    ModifiedOccurrences: PropertyDefinition;
    /**
     * Defines the **DeletedOccurrences** property.
     */
    DeletedOccurrences: PropertyDefinition;
    /**
     * Defines the **MeetingTimeZone** property.
     */
    MeetingTimeZone: PropertyDefinition;
    /**
     * Defines the **ConferenceType** property.
     */
    ConferenceType: PropertyDefinition;
    /**
     * Defines the **AllowNewTimeProposal** property.
     */
    AllowNewTimeProposal: PropertyDefinition;
    /**
     * Defines the **IsOnlineMeeting** property.
     */
    IsOnlineMeeting: PropertyDefinition;
    /**
     * Defines the **MeetingWorkspaceUrl** property.
     */
    MeetingWorkspaceUrl: PropertyDefinition;
    /**
     * Defines the **NetShowUrl** property.
     */
    NetShowUrl: PropertyDefinition;
    /**
     * Defines the **ICalUid** property.
     */
    ICalUid: PropertyDefinition;
    /**
     * Defines the **ICalRecurrenceId** property.
     */
    ICalRecurrenceId: PropertyDefinition;
    /**
     * Defines the **ICalDateTimeStamp** property.
     */
    ICalDateTimeStamp: PropertyDefinition;
    /**
     * Defines the **EnhancedLocation** property.
     */
    EnhancedLocation: PropertyDefinition;
    /**
     * Defines the **JoinOnlineMeetingUrl** property.
     */
    JoinOnlineMeetingUrl: PropertyDefinition;
    /**
     * Defines the **OnlineMeetingSettings** property.
     */
    OnlineMeetingSettings: PropertyDefinition;
    /**
     * @internal Instance of **AppointmentSchema**
     */
    Instance: AppointmentSchema;
}
/**
 * Represents the schema for appointment and meeting requests.
 */
export interface AppointmentSchemaStatic extends AppointmentSchema {
}

/**
 * Represents CalendarResponseObject schema definition.
 */
 class CalendarResponseObjectSchema extends ServiceObjectSchema {
    /**
     * @internal Instance of **CalendarResponseObjectSchema**
     */
    static Instance: CalendarResponseObjectSchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents CalendarResponseObject schema definition.
 */
export interface CalendarResponseObjectSchema {
    /**
     * @internal Instance of **CalendarResponseObjectSchema**
     */
    Instance: CalendarResponseObjectSchema;
}
/**
 * Represents CalendarResponseObject schema definition.
 */
export interface CalendarResponseObjectSchemaStatic extends CalendarResponseObjectSchema {
}
/**
 * Represents CancelMeetingMessage schema definition.
 */
 class CancelMeetingMessageSchema extends ServiceObjectSchema {
    /**
     * Defines the **Body** property.
     */
    static Body: PropertyDefinition;
    /**
     * @internal Instance of **CancelMeetingMessageSchema**
     */
    static Instance: CancelMeetingMessageSchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents CancelMeetingMessage schema definition.
 */
export interface CancelMeetingMessageSchema {
    /**
     * Defines the **Body** property.
     */
    Body: PropertyDefinition;
    /**
     * @internal Instance of **CancelMeetingMessageSchema**
     */
    Instance: CancelMeetingMessageSchema;
}
/**
 * Represents CancelMeetingMessage schema definition.
 */
export interface CancelMeetingMessageSchemaStatic extends CancelMeetingMessageSchema {
}
/**
 * Represents the schema for contact groups.
 */
 class ContactGroupSchema extends ItemSchema {
    /**
     * Defines the **DisplayName** property.
     */
    static DisplayName: PropertyDefinition;
    /**
     * Defines the **FileAs** property.
     */
    static FileAs: PropertyDefinition;
    /**
     * Defines the **Members** property.
     */
    static Members: PropertyDefinition;
    /**
     * @internal Instance of **ContactGroupSchema**
     */
    static Instance: ContactGroupSchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents the schema for contact groups.
 */
export interface ContactGroupSchema {
    /**
     * Defines the **DisplayName** property.
     */
    DisplayName: PropertyDefinition;
    /**
     * Defines the **FileAs** property.
     */
    FileAs: PropertyDefinition;
    /**
     * Defines the **Members** property.
     */
    Members: PropertyDefinition;
    /**
     * @internal Instance of **ContactGroupSchema**
     */
    Instance: ContactGroupSchema;
}
/**
 * Represents the schema for contact groups.
 */
export interface ContactGroupSchemaStatic extends ContactGroupSchema {
}

/**
 * Represents the schem for contacts.
 */
 class ContactSchema extends ItemSchema {
    /**
     * Defines the **FileAs** property.
     */
    static FileAs: PropertyDefinition;
    /**
     * Defines the **FileAsMapping** property.
     */
    static FileAsMapping: PropertyDefinition;
    /**
     * Defines the **DisplayName** property.
     */
    static DisplayName: PropertyDefinition;
    /**
     * Defines the **GivenName** property.
     */
    static GivenName: PropertyDefinition;
    /**
     * Defines the **Initials** property.
     */
    static Initials: PropertyDefinition;
    /**
     * Defines the **MiddleName** property.
     */
    static MiddleName: PropertyDefinition;
    /**
     * Defines the **NickName** property.
     */
    static NickName: PropertyDefinition;
    /**
     * Defines the **CompleteName** property.
     */
    static CompleteName: PropertyDefinition;
    /**
     * Defines the **CompanyName** property.
     */
    static CompanyName: PropertyDefinition;
    /**
     * Defines the **EmailAddresses** property.
     */
    static EmailAddresses: PropertyDefinition;
    /**
     * Defines the **PhysicalAddresses** property.
     */
    static PhysicalAddresses: PropertyDefinition;
    /**
     * Defines the **PhoneNumbers** property.
     */
    static PhoneNumbers: PropertyDefinition;
    /**
     * Defines the **AssistantName** property.
     */
    static AssistantName: PropertyDefinition;
    /**
     * Defines the **Birthday** property.
     */
    static Birthday: PropertyDefinition;
    /**
     * Defines the **BusinessHomePage** property.
     */
    static BusinessHomePage: PropertyDefinition;
    /**
     * Defines the **Children** property.
     */
    static Children: PropertyDefinition;
    /**
     * Defines the **Companies** property.
     */
    static Companies: PropertyDefinition;
    /**
     * Defines the **ContactSource** property.
     */
    static ContactSource: PropertyDefinition;
    /**
     * Defines the **Department** property.
     */
    static Department: PropertyDefinition;
    /**
     * Defines the **Generation** property.
     */
    static Generation: PropertyDefinition;
    /**
     * Defines the **ImAddresses** property.
     */
    static ImAddresses: PropertyDefinition;
    /**
     * Defines the **JobTitle** property.
     */
    static JobTitle: PropertyDefinition;
    /**
     * Defines the **Manager** property.
     */
    static Manager: PropertyDefinition;
    /**
     * Defines the **Mileage** property.
     */
    static Mileage: PropertyDefinition;
    /**
     * Defines the **OfficeLocation** property.
     */
    static OfficeLocation: PropertyDefinition;
    /**
     * Defines the **PostalAddressIndex** property.
     */
    static PostalAddressIndex: PropertyDefinition;
    /**
     * Defines the **Profession** property.
     */
    static Profession: PropertyDefinition;
    /**
     * Defines the **SpouseName** property.
     */
    static SpouseName: PropertyDefinition;
    /**
     * Defines the **Surname** property.
     */
    static Surname: PropertyDefinition;
    /**
     * Defines the **WeddingAnniversary** property.
     */
    static WeddingAnniversary: PropertyDefinition;
    /**
     * Defines the **HasPicture** property.
     */
    static HasPicture: PropertyDefinition;
    /**
     * Defines the **PhoneticFullName** property.
     */
    static PhoneticFullName: PropertyDefinition;
    /**
     * Defines the **PhoneticFirstName** property.
     */
    static PhoneticFirstName: PropertyDefinition;
    /**
     * Defines the **PhoneticLastName** property.
     */
    static PhoneticLastName: PropertyDefinition;
    /**
     * Defines the **Alias** property.
     */
    static Alias: PropertyDefinition;
    /**
     * Defines the **Notes** property.
     */
    static Notes: PropertyDefinition;
    /**
     * Defines the **Photo** property.
     */
    static Photo: PropertyDefinition;
    /**
     * Defines the **UserSMIMECertificate** property.
     */
    static UserSMIMECertificate: PropertyDefinition;
    /**
     * Defines the **MSExchangeCertificate** property.
     */
    static MSExchangeCertificate: PropertyDefinition;
    /**
     * Defines the **DirectoryId** property.
     */
    static DirectoryId: PropertyDefinition;
    /**
     * Defines the **ManagerMailbox** property.
     */
    static ManagerMailbox: PropertyDefinition;
    /**
     * Defines the **DirectReports** property.
     */
    static DirectReports: PropertyDefinition;
    /**
     * Defines the **EmailAddress1** property.
     */
    static EmailAddress1: IndexedPropertyDefinition;
    /**
     * Defines the **EmailAddress2** property.
     */
    static EmailAddress2: IndexedPropertyDefinition;
    /**
     * Defines the **EmailAddress3** property.
     */
    static EmailAddress3: IndexedPropertyDefinition;
    /**
     * Defines the **ImAddress1** property.
     */
    static ImAddress1: IndexedPropertyDefinition;
    /**
     * Defines the **ImAddress2** property.
     */
    static ImAddress2: IndexedPropertyDefinition;
    /**
     * Defines the **ImAddress3** property.
     */
    static ImAddress3: IndexedPropertyDefinition;
    /**
     * Defines the **AssistantPhone** property.
     */
    static AssistantPhone: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessFax** property.
     */
    static BusinessFax: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessPhone** property.
     */
    static BusinessPhone: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessPhone2** property.
     */
    static BusinessPhone2: IndexedPropertyDefinition;
    /**
     * Defines the **Callback** property.
     */
    static Callback: IndexedPropertyDefinition;
    /**
     * Defines the **CarPhone** property.
     */
    static CarPhone: IndexedPropertyDefinition;
    /**
     * Defines the **CompanyMainPhone** property.
     */
    static CompanyMainPhone: IndexedPropertyDefinition;
    /**
     * Defines the **HomeFax** property.
     */
    static HomeFax: IndexedPropertyDefinition;
    /**
     * Defines the **HomePhone** property.
     */
    static HomePhone: IndexedPropertyDefinition;
    /**
     * Defines the **HomePhone2** property.
     */
    static HomePhone2: IndexedPropertyDefinition;
    /**
     * Defines the **Isdn** property.
     */
    static Isdn: IndexedPropertyDefinition;
    /**
     * Defines the **MobilePhone** property.
     */
    static MobilePhone: IndexedPropertyDefinition;
    /**
     * Defines the **OtherFax** property.
     */
    static OtherFax: IndexedPropertyDefinition;
    /**
     * Defines the **OtherTelephone** property.
     */
    static OtherTelephone: IndexedPropertyDefinition;
    /**
     * Defines the **Pager** property.
     */
    static Pager: IndexedPropertyDefinition;
    /**
     * Defines the **PrimaryPhone** property.
     */
    static PrimaryPhone: IndexedPropertyDefinition;
    /**
     * Defines the **RadioPhone** property.
     */
    static RadioPhone: IndexedPropertyDefinition;
    /**
     * Defines the **Telex** property.
     */
    static Telex: IndexedPropertyDefinition;
    /**
     * Defines the **TtyTddPhone** property.
     */
    static TtyTddPhone: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessAddressStreet** property.
     */
    static BusinessAddressStreet: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessAddressCity** property.
     */
    static BusinessAddressCity: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessAddressState** property.
     */
    static BusinessAddressState: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessAddressCountryOrRegion** property.
     */
    static BusinessAddressCountryOrRegion: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessAddressPostalCode** property.
     */
    static BusinessAddressPostalCode: IndexedPropertyDefinition;
    /**
     * Defines the **HomeAddressStreet** property.
     */
    static HomeAddressStreet: IndexedPropertyDefinition;
    /**
     * Defines the **HomeAddressCity** property.
     */
    static HomeAddressCity: IndexedPropertyDefinition;
    /**
     * Defines the **HomeAddressState** property.
     */
    static HomeAddressState: IndexedPropertyDefinition;
    /**
     * Defines the **HomeAddressCountryOrRegion** property.
     */
    static HomeAddressCountryOrRegion: IndexedPropertyDefinition;
    /**
     * Defines the **HomeAddressPostalCode** property.
     */
    static HomeAddressPostalCode: IndexedPropertyDefinition;
    /**
     * Defines the **OtherAddressStreet** property.
     */
    static OtherAddressStreet: IndexedPropertyDefinition;
    /**
     * Defines the **OtherAddressCity** property.
     */
    static OtherAddressCity: IndexedPropertyDefinition;
    /**
     * Defines the **OtherAddressState** property.
     */
    static OtherAddressState: IndexedPropertyDefinition;
    /**
     * Defines the **OtherAddressCountryOrRegion** property.
     */
    static OtherAddressCountryOrRegion: IndexedPropertyDefinition;
    /**
     * Defines the **OtherAddressPostalCode** property.
     */
    static OtherAddressPostalCode: IndexedPropertyDefinition;
    /**
     * @internal Instance of **ContactSchema**
     */
    static Instance: ContactSchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents the schem for contacts.
 */
export interface ContactSchema {
    /**
     * Defines the **FileAs** property.
     */
    FileAs: PropertyDefinition;
    /**
     * Defines the **FileAsMapping** property.
     */
    FileAsMapping: PropertyDefinition;
    /**
     * Defines the **DisplayName** property.
     */
    DisplayName: PropertyDefinition;
    /**
     * Defines the **GivenName** property.
     */
    GivenName: PropertyDefinition;
    /**
     * Defines the **Initials** property.
     */
    Initials: PropertyDefinition;
    /**
     * Defines the **MiddleName** property.
     */
    MiddleName: PropertyDefinition;
    /**
     * Defines the **NickName** property.
     */
    NickName: PropertyDefinition;
    /**
     * Defines the **CompleteName** property.
     */
    CompleteName: PropertyDefinition;
    /**
     * Defines the **CompanyName** property.
     */
    CompanyName: PropertyDefinition;
    /**
     * Defines the **EmailAddresses** property.
     */
    EmailAddresses: PropertyDefinition;
    /**
     * Defines the **PhysicalAddresses** property.
     */
    PhysicalAddresses: PropertyDefinition;
    /**
     * Defines the **PhoneNumbers** property.
     */
    PhoneNumbers: PropertyDefinition;
    /**
     * Defines the **AssistantName** property.
     */
    AssistantName: PropertyDefinition;
    /**
     * Defines the **Birthday** property.
     */
    Birthday: PropertyDefinition;
    /**
     * Defines the **BusinessHomePage** property.
     */
    BusinessHomePage: PropertyDefinition;
    /**
     * Defines the **Children** property.
     */
    Children: PropertyDefinition;
    /**
     * Defines the **Companies** property.
     */
    Companies: PropertyDefinition;
    /**
     * Defines the **ContactSource** property.
     */
    ContactSource: PropertyDefinition;
    /**
     * Defines the **Department** property.
     */
    Department: PropertyDefinition;
    /**
     * Defines the **Generation** property.
     */
    Generation: PropertyDefinition;
    /**
     * Defines the **ImAddresses** property.
     */
    ImAddresses: PropertyDefinition;
    /**
     * Defines the **JobTitle** property.
     */
    JobTitle: PropertyDefinition;
    /**
     * Defines the **Manager** property.
     */
    Manager: PropertyDefinition;
    /**
     * Defines the **Mileage** property.
     */
    Mileage: PropertyDefinition;
    /**
     * Defines the **OfficeLocation** property.
     */
    OfficeLocation: PropertyDefinition;
    /**
     * Defines the **PostalAddressIndex** property.
     */
    PostalAddressIndex: PropertyDefinition;
    /**
     * Defines the **Profession** property.
     */
    Profession: PropertyDefinition;
    /**
     * Defines the **SpouseName** property.
     */
    SpouseName: PropertyDefinition;
    /**
     * Defines the **Surname** property.
     */
    Surname: PropertyDefinition;
    /**
     * Defines the **WeddingAnniversary** property.
     */
    WeddingAnniversary: PropertyDefinition;
    /**
     * Defines the **HasPicture** property.
     */
    HasPicture: PropertyDefinition;
    /**
     * Defines the **PhoneticFullName** property.
     */
    PhoneticFullName: PropertyDefinition;
    /**
     * Defines the **PhoneticFirstName** property.
     */
    PhoneticFirstName: PropertyDefinition;
    /**
     * Defines the **PhoneticLastName** property.
     */
    PhoneticLastName: PropertyDefinition;
    /**
     * Defines the **Alias** property.
     */
    Alias: PropertyDefinition;
    /**
     * Defines the **Notes** property.
     */
    Notes: PropertyDefinition;
    /**
     * Defines the **Photo** property.
     */
    Photo: PropertyDefinition;
    /**
     * Defines the **UserSMIMECertificate** property.
     */
    UserSMIMECertificate: PropertyDefinition;
    /**
     * Defines the **MSExchangeCertificate** property.
     */
    MSExchangeCertificate: PropertyDefinition;
    /**
     * Defines the **DirectoryId** property.
     */
    DirectoryId: PropertyDefinition;
    /**
     * Defines the **ManagerMailbox** property.
     */
    ManagerMailbox: PropertyDefinition;
    /**
     * Defines the **DirectReports** property.
     */
    DirectReports: PropertyDefinition;
    /**
     * Defines the **EmailAddress1** property.
     */
    EmailAddress1: IndexedPropertyDefinition;
    /**
     * Defines the **EmailAddress2** property.
     */
    EmailAddress2: IndexedPropertyDefinition;
    /**
     * Defines the **EmailAddress3** property.
     */
    EmailAddress3: IndexedPropertyDefinition;
    /**
     * Defines the **ImAddress1** property.
     */
    ImAddress1: IndexedPropertyDefinition;
    /**
     * Defines the **ImAddress2** property.
     */
    ImAddress2: IndexedPropertyDefinition;
    /**
     * Defines the **ImAddress3** property.
     */
    ImAddress3: IndexedPropertyDefinition;
    /**
     * Defines the **AssistantPhone** property.
     */
    AssistantPhone: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessFax** property.
     */
    BusinessFax: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessPhone** property.
     */
    BusinessPhone: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessPhone2** property.
     */
    BusinessPhone2: IndexedPropertyDefinition;
    /**
     * Defines the **Callback** property.
     */
    Callback: IndexedPropertyDefinition;
    /**
     * Defines the **CarPhone** property.
     */
    CarPhone: IndexedPropertyDefinition;
    /**
     * Defines the **CompanyMainPhone** property.
     */
    CompanyMainPhone: IndexedPropertyDefinition;
    /**
     * Defines the **HomeFax** property.
     */
    HomeFax: IndexedPropertyDefinition;
    /**
     * Defines the **HomePhone** property.
     */
    HomePhone: IndexedPropertyDefinition;
    /**
     * Defines the **HomePhone2** property.
     */
    HomePhone2: IndexedPropertyDefinition;
    /**
     * Defines the **Isdn** property.
     */
    Isdn: IndexedPropertyDefinition;
    /**
     * Defines the **MobilePhone** property.
     */
    MobilePhone: IndexedPropertyDefinition;
    /**
     * Defines the **OtherFax** property.
     */
    OtherFax: IndexedPropertyDefinition;
    /**
     * Defines the **OtherTelephone** property.
     */
    OtherTelephone: IndexedPropertyDefinition;
    /**
     * Defines the **Pager** property.
     */
    Pager: IndexedPropertyDefinition;
    /**
     * Defines the **PrimaryPhone** property.
     */
    PrimaryPhone: IndexedPropertyDefinition;
    /**
     * Defines the **RadioPhone** property.
     */
    RadioPhone: IndexedPropertyDefinition;
    /**
     * Defines the **Telex** property.
     */
    Telex: IndexedPropertyDefinition;
    /**
     * Defines the **TtyTddPhone** property.
     */
    TtyTddPhone: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessAddressStreet** property.
     */
    BusinessAddressStreet: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessAddressCity** property.
     */
    BusinessAddressCity: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessAddressState** property.
     */
    BusinessAddressState: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessAddressCountryOrRegion** property.
     */
    BusinessAddressCountryOrRegion: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessAddressPostalCode** property.
     */
    BusinessAddressPostalCode: IndexedPropertyDefinition;
    /**
     * Defines the **HomeAddressStreet** property.
     */
    HomeAddressStreet: IndexedPropertyDefinition;
    /**
     * Defines the **HomeAddressCity** property.
     */
    HomeAddressCity: IndexedPropertyDefinition;
    /**
     * Defines the **HomeAddressState** property.
     */
    HomeAddressState: IndexedPropertyDefinition;
    /**
     * Defines the **HomeAddressCountryOrRegion** property.
     */
    HomeAddressCountryOrRegion: IndexedPropertyDefinition;
    /**
     * Defines the **HomeAddressPostalCode** property.
     */
    HomeAddressPostalCode: IndexedPropertyDefinition;
    /**
     * Defines the **OtherAddressStreet** property.
     */
    OtherAddressStreet: IndexedPropertyDefinition;
    /**
     * Defines the **OtherAddressCity** property.
     */
    OtherAddressCity: IndexedPropertyDefinition;
    /**
     * Defines the **OtherAddressState** property.
     */
    OtherAddressState: IndexedPropertyDefinition;
    /**
     * Defines the **OtherAddressCountryOrRegion** property.
     */
    OtherAddressCountryOrRegion: IndexedPropertyDefinition;
    /**
     * Defines the **OtherAddressPostalCode** property.
     */
    OtherAddressPostalCode: IndexedPropertyDefinition;
    /**
     * @internal Instance of **ContactSchema**
     */
    Instance: ContactSchema;
}
/**
 * Represents the schem for contacts.
 */
export interface ContactSchemaStatic extends ContactSchema {
}
/**
 * Represents the schema for Conversation.
 */
 class ConversationSchema extends ServiceObjectSchema {
    /**
     * Defines the **Id** property.
     */
    static Id: PropertyDefinition;
    /**
     * Defines the **Topic** property.
     */
    static Topic: PropertyDefinition;
    /**
     * Defines the **UniqueRecipients** property.
     */
    static UniqueRecipients: PropertyDefinition;
    /**
     * Defines the **GlobalUniqueRecipients** property.
     */
    static GlobalUniqueRecipients: PropertyDefinition;
    /**
     * Defines the **UniqueUnreadSenders** property.
     */
    static UniqueUnreadSenders: PropertyDefinition;
    /**
     * Defines the **GlobalUniqueUnreadSenders** property.
     */
    static GlobalUniqueUnreadSenders: PropertyDefinition;
    /**
     * Defines the **UniqueSenders** property.
     */
    static UniqueSenders: PropertyDefinition;
    /**
     * Defines the **GlobalUniqueSenders** property.
     */
    static GlobalUniqueSenders: PropertyDefinition;
    /**
     * Defines the **LastDeliveryTime** property.
     */
    static LastDeliveryTime: PropertyDefinition;
    /**
     * Defines the **GlobalLastDeliveryTime** property.
     */
    static GlobalLastDeliveryTime: PropertyDefinition;
    /**
     * Defines the **Categories** property.
     */
    static Categories: PropertyDefinition;
    /**
     * Defines the **GlobalCategories** property.
     */
    static GlobalCategories: PropertyDefinition;
    /**
     * Defines the **FlagStatus** property.
     */
    static FlagStatus: PropertyDefinition;
    /**
     * Defines the **GlobalFlagStatus** property.
     */
    static GlobalFlagStatus: PropertyDefinition;
    /**
     * Defines the **HasAttachments** property.
     */
    static HasAttachments: PropertyDefinition;
    /**
     * Defines the **GlobalHasAttachments** property.
     */
    static GlobalHasAttachments: PropertyDefinition;
    /**
     * Defines the **MessageCount** property.
     */
    static MessageCount: PropertyDefinition;
    /**
     * Defines the **GlobalMessageCount** property.
     */
    static GlobalMessageCount: PropertyDefinition;
    /**
     * Defines the **UnreadCount** property.
     */
    static UnreadCount: PropertyDefinition;
    /**
     * Defines the **GlobalUnreadCount** property.
     */
    static GlobalUnreadCount: PropertyDefinition;
    /**
     * Defines the **Size** property.
     */
    static Size: PropertyDefinition;
    /**
     * Defines the **GlobalSize** property.
     */
    static GlobalSize: PropertyDefinition;
    /**
     * Defines the **ItemClasses** property.
     */
    static ItemClasses: PropertyDefinition;
    /**
     * Defines the **GlobalItemClasses** property.
     */
    static GlobalItemClasses: PropertyDefinition;
    /**
     * Defines the **Importance** property.
     */
    static Importance: PropertyDefinition;
    /**
     * Defines the **GlobalImportance** property.
     */
    static GlobalImportance: PropertyDefinition;
    /**
     * Defines the **ItemIds** property.
     */
    static ItemIds: PropertyDefinition;
    /**
     * Defines the **GlobalItemIds** property.
     */
    static GlobalItemIds: PropertyDefinition;
    /**
     * Defines the **LastModifiedTime** property.
     */
    static LastModifiedTime: PropertyDefinition;
    /**
     * Defines the **InstanceKey** property.
     */
    static InstanceKey: PropertyDefinition;
    /**
     * Defines the **Preview** property.
     */
    static Preview: PropertyDefinition;
    /**
     * Defines the **IconIndex** property.
     */
    static IconIndex: PropertyDefinition;
    /**
     * Defines the **GlobalIconIndex** property.
     */
    static GlobalIconIndex: PropertyDefinition;
    /**
     * Defines the **DraftItemIds** property.
     */
    static DraftItemIds: PropertyDefinition;
    /**
     * Defines the **HasIrm** property.
     */
    static HasIrm: PropertyDefinition;
    /**
     * Defines the **GlobalHasIrm** property.
     */
    static GlobalHasIrm: PropertyDefinition;
    /**
     * @internal Instance of **ConversationSchema**
     */
    static Instance: ConversationSchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents the schema for Conversation.
 */
export interface ConversationSchema {
    /**
     * Defines the **Id** property.
     */
    Id: PropertyDefinition;
    /**
     * Defines the **Topic** property.
     */
    Topic: PropertyDefinition;
    /**
     * Defines the **UniqueRecipients** property.
     */
    UniqueRecipients: PropertyDefinition;
    /**
     * Defines the **GlobalUniqueRecipients** property.
     */
    GlobalUniqueRecipients: PropertyDefinition;
    /**
     * Defines the **UniqueUnreadSenders** property.
     */
    UniqueUnreadSenders: PropertyDefinition;
    /**
     * Defines the **GlobalUniqueUnreadSenders** property.
     */
    GlobalUniqueUnreadSenders: PropertyDefinition;
    /**
     * Defines the **UniqueSenders** property.
     */
    UniqueSenders: PropertyDefinition;
    /**
     * Defines the **GlobalUniqueSenders** property.
     */
    GlobalUniqueSenders: PropertyDefinition;
    /**
     * Defines the **LastDeliveryTime** property.
     */
    LastDeliveryTime: PropertyDefinition;
    /**
     * Defines the **GlobalLastDeliveryTime** property.
     */
    GlobalLastDeliveryTime: PropertyDefinition;
    /**
     * Defines the **Categories** property.
     */
    Categories: PropertyDefinition;
    /**
     * Defines the **GlobalCategories** property.
     */
    GlobalCategories: PropertyDefinition;
    /**
     * Defines the **FlagStatus** property.
     */
    FlagStatus: PropertyDefinition;
    /**
     * Defines the **GlobalFlagStatus** property.
     */
    GlobalFlagStatus: PropertyDefinition;
    /**
     * Defines the **HasAttachments** property.
     */
    HasAttachments: PropertyDefinition;
    /**
     * Defines the **GlobalHasAttachments** property.
     */
    GlobalHasAttachments: PropertyDefinition;
    /**
     * Defines the **MessageCount** property.
     */
    MessageCount: PropertyDefinition;
    /**
     * Defines the **GlobalMessageCount** property.
     */
    GlobalMessageCount: PropertyDefinition;
    /**
     * Defines the **UnreadCount** property.
     */
    UnreadCount: PropertyDefinition;
    /**
     * Defines the **GlobalUnreadCount** property.
     */
    GlobalUnreadCount: PropertyDefinition;
    /**
     * Defines the **Size** property.
     */
    Size: PropertyDefinition;
    /**
     * Defines the **GlobalSize** property.
     */
    GlobalSize: PropertyDefinition;
    /**
     * Defines the **ItemClasses** property.
     */
    ItemClasses: PropertyDefinition;
    /**
     * Defines the **GlobalItemClasses** property.
     */
    GlobalItemClasses: PropertyDefinition;
    /**
     * Defines the **Importance** property.
     */
    Importance: PropertyDefinition;
    /**
     * Defines the **GlobalImportance** property.
     */
    GlobalImportance: PropertyDefinition;
    /**
     * Defines the **ItemIds** property.
     */
    ItemIds: PropertyDefinition;
    /**
     * Defines the **GlobalItemIds** property.
     */
    GlobalItemIds: PropertyDefinition;
    /**
     * Defines the **LastModifiedTime** property.
     */
    LastModifiedTime: PropertyDefinition;
    /**
     * Defines the **InstanceKey** property.
     */
    InstanceKey: PropertyDefinition;
    /**
     * Defines the **Preview** property.
     */
    Preview: PropertyDefinition;
    /**
     * Defines the **IconIndex** property.
     */
    IconIndex: PropertyDefinition;
    /**
     * Defines the **GlobalIconIndex** property.
     */
    GlobalIconIndex: PropertyDefinition;
    /**
     * Defines the **DraftItemIds** property.
     */
    DraftItemIds: PropertyDefinition;
    /**
     * Defines the **HasIrm** property.
     */
    HasIrm: PropertyDefinition;
    /**
     * Defines the **GlobalHasIrm** property.
     */
    GlobalHasIrm: PropertyDefinition;
    /**
     * @internal Instance of **ConversationSchema**
     */
    Instance: ConversationSchema;
}
/**
 * Represents the schema for Conversation.
 */
export interface ConversationSchemaStatic extends ConversationSchema {
}
/**
 * Represents the schema for e-mail messages.
 */
 class EmailMessageSchema extends ItemSchema {
    /**
     * Defines the **ToRecipients** property.
     */
    static ToRecipients: PropertyDefinition;
    /**
     * Defines the **BccRecipients** property.
     */
    static BccRecipients: PropertyDefinition;
    /**
     * Defines the **CcRecipients** property.
     */
    static CcRecipients: PropertyDefinition;
    /**
     * Defines the **ConversationIndex** property.
     */
    static ConversationIndex: PropertyDefinition;
    /**
     * Defines the **ConversationTopic** property.
     */
    static ConversationTopic: PropertyDefinition;
    /**
     * Defines the **From** property.
     */
    static From: PropertyDefinition;
    /**
     * Defines the **IsDeliveryReceiptRequested** property.
     */
    static IsDeliveryReceiptRequested: PropertyDefinition;
    /**
     * Defines the **IsRead** property.
     */
    static IsRead: PropertyDefinition;
    /**
     * Defines the **IsReadReceiptRequested** property.
     */
    static IsReadReceiptRequested: PropertyDefinition;
    /**
     * Defines the **IsResponseRequested** property.
     */
    static IsResponseRequested: PropertyDefinition;
    /**
     * Defines the **InternetMessageId** property.
     */
    static InternetMessageId: PropertyDefinition;
    /**
     * Defines the **References** property.
     */
    static References: PropertyDefinition;
    /**
     * Defines the **ReplyTo** property.
     */
    static ReplyTo: PropertyDefinition;
    /**
     * Defines the **Sender** property.
     */
    static Sender: PropertyDefinition;
    /**
     * Defines the **ReceivedBy** property.
     */
    static ReceivedBy: PropertyDefinition;
    /**
     * Defines the **ReceivedRepresenting** property.
     */
    static ReceivedRepresenting: PropertyDefinition;
    /**
     * Defines the **ApprovalRequestData** property.
     */
    static ApprovalRequestData: PropertyDefinition;
    /**
     * Defines the **VotingInformation** property.
     */
    static VotingInformation: PropertyDefinition;
    /**
     * @internal Instance of **EmailMessageSchema**
     */
    static Instance: EmailMessageSchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents the schema for e-mail messages.
 */
export interface EmailMessageSchema {
    /**
     * Defines the **ToRecipients** property.
     */
    ToRecipients: PropertyDefinition;
    /**
     * Defines the **BccRecipients** property.
     */
    BccRecipients: PropertyDefinition;
    /**
     * Defines the **CcRecipients** property.
     */
    CcRecipients: PropertyDefinition;
    /**
     * Defines the **ConversationIndex** property.
     */
    ConversationIndex: PropertyDefinition;
    /**
     * Defines the **ConversationTopic** property.
     */
    ConversationTopic: PropertyDefinition;
    /**
     * Defines the **From** property.
     */
    From: PropertyDefinition;
    /**
     * Defines the **IsDeliveryReceiptRequested** property.
     */
    IsDeliveryReceiptRequested: PropertyDefinition;
    /**
     * Defines the **IsRead** property.
     */
    IsRead: PropertyDefinition;
    /**
     * Defines the **IsReadReceiptRequested** property.
     */
    IsReadReceiptRequested: PropertyDefinition;
    /**
     * Defines the **IsResponseRequested** property.
     */
    IsResponseRequested: PropertyDefinition;
    /**
     * Defines the **InternetMessageId** property.
     */
    InternetMessageId: PropertyDefinition;
    /**
     * Defines the **References** property.
     */
    References: PropertyDefinition;
    /**
     * Defines the **ReplyTo** property.
     */
    ReplyTo: PropertyDefinition;
    /**
     * Defines the **Sender** property.
     */
    Sender: PropertyDefinition;
    /**
     * Defines the **ReceivedBy** property.
     */
    ReceivedBy: PropertyDefinition;
    /**
     * Defines the **ReceivedRepresenting** property.
     */
    ReceivedRepresenting: PropertyDefinition;
    /**
     * Defines the **ApprovalRequestData** property.
     */
    ApprovalRequestData: PropertyDefinition;
    /**
     * Defines the **VotingInformation** property.
     */
    VotingInformation: PropertyDefinition;
    /**
     * @internal Instance of **EmailMessageSchema**
     */
    Instance: EmailMessageSchema;
}
/**
 * Represents the schema for e-mail messages.
 */
export interface EmailMessageSchemaStatic extends EmailMessageSchema {
}
/**
 * Represents the schema for folders.
 */
 class FolderSchema extends ServiceObjectSchema {
    /**
     * Defines the **Id** property.
     */
    static Id: PropertyDefinition;
    /**
     * Defines the **FolderClass** property.
     */
    static FolderClass: PropertyDefinition;
    /**
     * Defines the **ParentFolderId** property.
     */
    static ParentFolderId: PropertyDefinition;
    /**
     * Defines the **ChildFolderCount** property.
     */
    static ChildFolderCount: PropertyDefinition;
    /**
     * Defines the **DisplayName** property.
     */
    static DisplayName: PropertyDefinition;
    /**
     * Defines the **UnreadCount** property.
     */
    static UnreadCount: PropertyDefinition;
    /**
     * Defines the **TotalCount** property.
     */
    static TotalCount: PropertyDefinition;
    /**
     * Defines the **ManagedFolderInformation** property.
     */
    static ManagedFolderInformation: PropertyDefinition;
    /**
     * Defines the **EffectiveRights** property.
     */
    static EffectiveRights: PropertyDefinition;
    /**
     * Defines the **Permissions** property.
     */
    static Permissions: PropertyDefinition;
    /**
     * Defines the **WellKnownFolderName** property.
     */
    static WellKnownFolderName: PropertyDefinition;
    /**
     * Defines the **PolicyTag** property.
     */
    static PolicyTag: PropertyDefinition;
    /**
     * Defines the **ArchiveTag** property.
     */
    static ArchiveTag: PropertyDefinition;
    /**
     * @internal Instance of **FolderSchema**
     */
    static Instance: FolderSchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents the schema for folders.
 */
export interface FolderSchema {
    /**
     * Defines the **Id** property.
     */
    Id: PropertyDefinition;
    /**
     * Defines the **FolderClass** property.
     */
    FolderClass: PropertyDefinition;
    /**
     * Defines the **ParentFolderId** property.
     */
    ParentFolderId: PropertyDefinition;
    /**
     * Defines the **ChildFolderCount** property.
     */
    ChildFolderCount: PropertyDefinition;
    /**
     * Defines the **DisplayName** property.
     */
    DisplayName: PropertyDefinition;
    /**
     * Defines the **UnreadCount** property.
     */
    UnreadCount: PropertyDefinition;
    /**
     * Defines the **TotalCount** property.
     */
    TotalCount: PropertyDefinition;
    /**
     * Defines the **ManagedFolderInformation** property.
     */
    ManagedFolderInformation: PropertyDefinition;
    /**
     * Defines the **EffectiveRights** property.
     */
    EffectiveRights: PropertyDefinition;
    /**
     * Defines the **Permissions** property.
     */
    Permissions: PropertyDefinition;
    /**
     * Defines the **WellKnownFolderName** property.
     */
    WellKnownFolderName: PropertyDefinition;
    /**
     * Defines the **PolicyTag** property.
     */
    PolicyTag: PropertyDefinition;
    /**
     * Defines the **ArchiveTag** property.
     */
    ArchiveTag: PropertyDefinition;
    /**
     * @internal Instance of **FolderSchema**
     */
    Instance: FolderSchema;
}
/**
 * Represents the schema for folders.
 */
export interface FolderSchemaStatic extends FolderSchema {
}
/**
 * Represents the schema for generic items.
 */
 class ItemSchema extends ServiceObjectSchema {
    /**
     * Defines the **Id** property.
     */
    static Id: PropertyDefinition;
    /**
     * Defines the **Body** property.
     */
    static Body: PropertyDefinition;
    /**
     * Defines the **ItemClass** property.
     */
    static ItemClass: PropertyDefinition;
    /**
     * Defines the **Subject** property.
     */
    static Subject: PropertyDefinition;
    /**
     * Defines the **MimeContent** property.
     */
    static MimeContent: PropertyDefinition;
    /**
     * Defines the **ParentFolderId** property.
     */
    static ParentFolderId: PropertyDefinition;
    /**
     * Defines the **Sensitivity** property.
     */
    static Sensitivity: PropertyDefinition;
    /**
     * Defines the **Attachments** property.
     */
    static Attachments: PropertyDefinition;
    /**
     * Defines the **DateTimeReceived** property.
     */
    static DateTimeReceived: PropertyDefinition;
    /**
     * Defines the **Size** property.
     */
    static Size: PropertyDefinition;
    /**
     * Defines the **Categories** property.
     */
    static Categories: PropertyDefinition;
    /**
     * Defines the **Importance** property.
     */
    static Importance: PropertyDefinition;
    /**
     * Defines the **InReplyTo** property.
     */
    static InReplyTo: PropertyDefinition;
    /**
     * Defines the **IsSubmitted** property.
     */
    static IsSubmitted: PropertyDefinition;
    /**
     * Defines the **IsAssociated** property.
     */
    static IsAssociated: PropertyDefinition;
    /**
     * Defines the **IsDraft** property.
     */
    static IsDraft: PropertyDefinition;
    /**
     * Defines the **IsFromMe** property.
     */
    static IsFromMe: PropertyDefinition;
    /**
     * Defines the **IsResend** property.
     */
    static IsResend: PropertyDefinition;
    /**
     * Defines the **IsUnmodified** property.
     */
    static IsUnmodified: PropertyDefinition;
    /**
     * Defines the **InternetMessageHeaders** property.
     */
    static InternetMessageHeaders: PropertyDefinition;
    /**
     * Defines the **DateTimeSent** property.
     */
    static DateTimeSent: PropertyDefinition;
    /**
     * Defines the **DateTimeCreated** property.
     */
    static DateTimeCreated: PropertyDefinition;
    /**
     * Defines the **AllowedResponseActions** property.
     */
    static AllowedResponseActions: PropertyDefinition;
    /**
     * Defines the **ReminderDueBy** property.
     */
    static ReminderDueBy: PropertyDefinition;
    /**
     * Defines the **IsReminderSet** property.
     */
    static IsReminderSet: PropertyDefinition;
    /**
     * Defines the **ReminderMinutesBeforeStart** property.
     */
    static ReminderMinutesBeforeStart: PropertyDefinition;
    /**
     * Defines the **DisplayCc** property.
     */
    static DisplayCc: PropertyDefinition;
    /**
     * Defines the **DisplayTo** property.
     */
    static DisplayTo: PropertyDefinition;
    /**
     * Defines the **HasAttachments** property.
     */
    static HasAttachments: PropertyDefinition;
    /**
     * Defines the **Culture** property.
     */
    static Culture: PropertyDefinition;
    /**
     * Defines the **EffectiveRights** property.
     */
    static EffectiveRights: PropertyDefinition;
    /**
     * Defines the **LastModifiedName** property.
     */
    static LastModifiedName: PropertyDefinition;
    /**
     * Defines the **LastModifiedTime** property.
     */
    static LastModifiedTime: PropertyDefinition;
    /**
     * Defines the **WebClientReadFormQueryString** property.
     */
    static WebClientReadFormQueryString: PropertyDefinition;
    /**
     * Defines the **WebClientEditFormQueryString** property.
     */
    static WebClientEditFormQueryString: PropertyDefinition;
    /**
     * Defines the **ConversationId** property.
     */
    static ConversationId: PropertyDefinition;
    /**
     * Defines the **UniqueBody** property.
     */
    static UniqueBody: PropertyDefinition;
    /**
     * Defines the **StoreEntryId** property.
     */
    static StoreEntryId: PropertyDefinition;
    /**
     * Defines the **InstanceKey** property.
     */
    static InstanceKey: PropertyDefinition;
    /**
     * Defines the **NormalizedBody** property.
     */
    static NormalizedBody: PropertyDefinition;
    /**
     * Defines the **EntityExtractionResult** property.
     */
    static EntityExtractionResult: PropertyDefinition;
    /**
     * Defines the **Flag** property.
     */
    static Flag: PropertyDefinition;
    /**
     * Defines the **PolicyTag** property.
     */
    static PolicyTag: PropertyDefinition;
    /**
     * Defines the **ArchiveTag** property.
     */
    static ArchiveTag: PropertyDefinition;
    /**
     * Defines the **RetentionDate** property.
     */
    static RetentionDate: PropertyDefinition;
    /**
     * Defines the **Preview** property.
     */
    static Preview: PropertyDefinition;
    /**
     * Defines the **TextBody** property.
     */
    static TextBody: PropertyDefinition;
    /**
     * Defines the **IconIndex** property.
     */
    static IconIndex: PropertyDefinition;
    /**
     * @internal Instance of **ItemSchema**
     */
    static Instance: ItemSchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents the schema for generic items.
 */
export interface ItemSchema {
    /**
     * Defines the **Id** property.
     */
    Id: PropertyDefinition;
    /**
     * Defines the **Body** property.
     */
    Body: PropertyDefinition;
    /**
     * Defines the **ItemClass** property.
     */
    ItemClass: PropertyDefinition;
    /**
     * Defines the **Subject** property.
     */
    Subject: PropertyDefinition;
    /**
     * Defines the **MimeContent** property.
     */
    MimeContent: PropertyDefinition;
    /**
     * Defines the **ParentFolderId** property.
     */
    ParentFolderId: PropertyDefinition;
    /**
     * Defines the **Sensitivity** property.
     */
    Sensitivity: PropertyDefinition;
    /**
     * Defines the **Attachments** property.
     */
    Attachments: PropertyDefinition;
    /**
     * Defines the **DateTimeReceived** property.
     */
    DateTimeReceived: PropertyDefinition;
    /**
     * Defines the **Size** property.
     */
    Size: PropertyDefinition;
    /**
     * Defines the **Categories** property.
     */
    Categories: PropertyDefinition;
    /**
     * Defines the **Importance** property.
     */
    Importance: PropertyDefinition;
    /**
     * Defines the **InReplyTo** property.
     */
    InReplyTo: PropertyDefinition;
    /**
     * Defines the **IsSubmitted** property.
     */
    IsSubmitted: PropertyDefinition;
    /**
     * Defines the **IsAssociated** property.
     */
    IsAssociated: PropertyDefinition;
    /**
     * Defines the **IsDraft** property.
     */
    IsDraft: PropertyDefinition;
    /**
     * Defines the **IsFromMe** property.
     */
    IsFromMe: PropertyDefinition;
    /**
     * Defines the **IsResend** property.
     */
    IsResend: PropertyDefinition;
    /**
     * Defines the **IsUnmodified** property.
     */
    IsUnmodified: PropertyDefinition;
    /**
     * Defines the **InternetMessageHeaders** property.
     */
    InternetMessageHeaders: PropertyDefinition;
    /**
     * Defines the **DateTimeSent** property.
     */
    DateTimeSent: PropertyDefinition;
    /**
     * Defines the **DateTimeCreated** property.
     */
    DateTimeCreated: PropertyDefinition;
    /**
     * Defines the **AllowedResponseActions** property.
     */
    AllowedResponseActions: PropertyDefinition;
    /**
     * Defines the **ReminderDueBy** property.
     */
    ReminderDueBy: PropertyDefinition;
    /**
     * Defines the **IsReminderSet** property.
     */
    IsReminderSet: PropertyDefinition;
    /**
     * Defines the **ReminderMinutesBeforeStart** property.
     */
    ReminderMinutesBeforeStart: PropertyDefinition;
    /**
     * Defines the **DisplayCc** property.
     */
    DisplayCc: PropertyDefinition;
    /**
     * Defines the **DisplayTo** property.
     */
    DisplayTo: PropertyDefinition;
    /**
     * Defines the **HasAttachments** property.
     */
    HasAttachments: PropertyDefinition;
    /**
     * Defines the **Culture** property.
     */
    Culture: PropertyDefinition;
    /**
     * Defines the **EffectiveRights** property.
     */
    EffectiveRights: PropertyDefinition;
    /**
     * Defines the **LastModifiedName** property.
     */
    LastModifiedName: PropertyDefinition;
    /**
     * Defines the **LastModifiedTime** property.
     */
    LastModifiedTime: PropertyDefinition;
    /**
     * Defines the **WebClientReadFormQueryString** property.
     */
    WebClientReadFormQueryString: PropertyDefinition;
    /**
     * Defines the **WebClientEditFormQueryString** property.
     */
    WebClientEditFormQueryString: PropertyDefinition;
    /**
     * Defines the **ConversationId** property.
     */
    ConversationId: PropertyDefinition;
    /**
     * Defines the **UniqueBody** property.
     */
    UniqueBody: PropertyDefinition;
    /**
     * Defines the **StoreEntryId** property.
     */
    StoreEntryId: PropertyDefinition;
    /**
     * Defines the **InstanceKey** property.
     */
    InstanceKey: PropertyDefinition;
    /**
     * Defines the **NormalizedBody** property.
     */
    NormalizedBody: PropertyDefinition;
    /**
     * Defines the **EntityExtractionResult** property.
     */
    EntityExtractionResult: PropertyDefinition;
    /**
     * Defines the **Flag** property.
     */
    Flag: PropertyDefinition;
    /**
     * Defines the **PolicyTag** property.
     */
    PolicyTag: PropertyDefinition;
    /**
     * Defines the **ArchiveTag** property.
     */
    ArchiveTag: PropertyDefinition;
    /**
     * Defines the **RetentionDate** property.
     */
    RetentionDate: PropertyDefinition;
    /**
     * Defines the **Preview** property.
     */
    Preview: PropertyDefinition;
    /**
     * Defines the **TextBody** property.
     */
    TextBody: PropertyDefinition;
    /**
     * Defines the **IconIndex** property.
     */
    IconIndex: PropertyDefinition;
    /**
     * @internal Instance of **ItemSchema**
     */
    Instance: ItemSchema;
}
/**
 * Represents the schema for generic items.
 */
export interface ItemSchemaStatic extends ItemSchema {
}
/**
 * Represents the schema for meeting cancellation.
 */
 class MeetingCancellationSchema extends MeetingMessageSchema {
    /**
     * Defines the **Start** property.
     */
    static Start: PropertyDefinition;
    /**
     * Defines the **End** property.
     */
    static End: PropertyDefinition;
    /**
     * Defines the **Location** property.
     */
    static Location: PropertyDefinition;
    /**
     * Defines the **AppointmentType** property.
     */
    static AppointmentType: PropertyDefinition;
    /**
     * Defines the **Recurrence** property.
     */
    static Recurrence: PropertyDefinition;
    /**
     * Defines the **EnhancedLocation** property.
     */
    static EnhancedLocation: PropertyDefinition;
    /**
     * @internal Instance of **MeetingCancellationSchema**
     */
    static Instance: MeetingCancellationSchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents the schema for meeting cancellation.
 */
export interface MeetingCancellationSchema {
    /**
     * Defines the **Start** property.
     */
    Start: PropertyDefinition;
    /**
     * Defines the **End** property.
     */
    End: PropertyDefinition;
    /**
     * Defines the **Location** property.
     */
    Location: PropertyDefinition;
    /**
     * Defines the **AppointmentType** property.
     */
    AppointmentType: PropertyDefinition;
    /**
     * Defines the **Recurrence** property.
     */
    Recurrence: PropertyDefinition;
    /**
     * Defines the **EnhancedLocation** property.
     */
    EnhancedLocation: PropertyDefinition;
    /**
     * @internal Instance of **MeetingCancellationSchema**
     */
    Instance: MeetingCancellationSchema;
}
/**
 * Represents the schema for meeting cancellation.
 */
export interface MeetingCancellationSchemaStatic extends MeetingCancellationSchema {
}
/**
 * Represents the schema for meeting messages.
 */
 class MeetingMessageSchema extends EmailMessageSchema {
    /**
     * Defines the **AssociatedAppointmentId** property.
     */
    static AssociatedAppointmentId: PropertyDefinition;
    /**
     * Defines the **IsDelegated** property.
     */
    static IsDelegated: PropertyDefinition;
    /**
     * Defines the **IsOutOfDate** property.
     */
    static IsOutOfDate: PropertyDefinition;
    /**
     * Defines the **HasBeenProcessed** property.
     */
    static HasBeenProcessed: PropertyDefinition;
    /**
     * Defines the **ResponseType** property.
     */
    static ResponseType: PropertyDefinition;
    /**
     * Defines the **ICalUid** property.
     */
    static ICalUid: PropertyDefinition;
    /**
     * Defines the **ICalRecurrenceId** property.
     */
    static ICalRecurrenceId: PropertyDefinition;
    /**
     * Defines the **ICalDateTimeStamp** property.
     */
    static ICalDateTimeStamp: PropertyDefinition;
    /**
     * Defines the **IsOrganizer** property.
     */
    static IsOrganizer: PropertyDefinition;
    /**
     * @internal Instance of **MeetingMessageSchema**
     */
    static Instance: MeetingMessageSchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents the schema for meeting messages.
 */
export interface MeetingMessageSchema {
    /**
     * Defines the **AssociatedAppointmentId** property.
     */
    AssociatedAppointmentId: PropertyDefinition;
    /**
     * Defines the **IsDelegated** property.
     */
    IsDelegated: PropertyDefinition;
    /**
     * Defines the **IsOutOfDate** property.
     */
    IsOutOfDate: PropertyDefinition;
    /**
     * Defines the **HasBeenProcessed** property.
     */
    HasBeenProcessed: PropertyDefinition;
    /**
     * Defines the **ResponseType** property.
     */
    ResponseType: PropertyDefinition;
    /**
     * Defines the **ICalUid** property.
     */
    ICalUid: PropertyDefinition;
    /**
     * Defines the **ICalRecurrenceId** property.
     */
    ICalRecurrenceId: PropertyDefinition;
    /**
     * Defines the **ICalDateTimeStamp** property.
     */
    ICalDateTimeStamp: PropertyDefinition;
    /**
     * Defines the **IsOrganizer** property.
     */
    IsOrganizer: PropertyDefinition;
    /**
     * @internal Instance of **MeetingMessageSchema**
     */
    Instance: MeetingMessageSchema;
}
/**
 * Represents the schema for meeting messages.
 */
export interface MeetingMessageSchemaStatic extends MeetingMessageSchema {
}
/**
 * Represents the schema for meeting requests.
 */
 class MeetingRequestSchema extends MeetingMessageSchema {
    /**
     * Defines the **MeetingRequestType** property.
     */
    static MeetingRequestType: PropertyDefinition;
    /**
     * Defines the **IntendedFreeBusyStatus** property.
     */
    static IntendedFreeBusyStatus: PropertyDefinition;
    /**
     * Defines the **ChangeHighlights** property.
     */
    static ChangeHighlights: PropertyDefinition;
    /**
     * Defines the **EnhancedLocation** property.
     */
    static EnhancedLocation: PropertyDefinition;
    /**
     * Defines the **Start** property.
     */
    static Start: PropertyDefinition;
    /**
     * Defines the **End** property.
     */
    static End: PropertyDefinition;
    /**
     * Defines the **OriginalStart** property.
     */
    static OriginalStart: PropertyDefinition;
    /**
     * Defines the **IsAllDayEvent** property.
     */
    static IsAllDayEvent: PropertyDefinition;
    /**
     * Defines the **LegacyFreeBusyStatus** property.
     */
    static LegacyFreeBusyStatus: PropertyDefinition;
    /**
     * Defines the **Location** property.
     */
    static Location: PropertyDefinition;
    /**
     * Defines the **When** property.
     */
    static When: PropertyDefinition;
    /**
     * Defines the **IsMeeting** property.
     */
    static IsMeeting: PropertyDefinition;
    /**
     * Defines the **IsCancelled** property.
     */
    static IsCancelled: PropertyDefinition;
    /**
     * Defines the **IsRecurring** property.
     */
    static IsRecurring: PropertyDefinition;
    /**
     * Defines the **MeetingRequestWasSent** property.
     */
    static MeetingRequestWasSent: PropertyDefinition;
    /**
     * Defines the **AppointmentType** property.
     */
    static AppointmentType: PropertyDefinition;
    /**
     * Defines the **MyResponseType** property.
     */
    static MyResponseType: PropertyDefinition;
    /**
     * Defines the **Organizer** property.
     */
    static Organizer: PropertyDefinition;
    /**
     * Defines the **RequiredAttendees** property.
     */
    static RequiredAttendees: PropertyDefinition;
    /**
     * Defines the **OptionalAttendees** property.
     */
    static OptionalAttendees: PropertyDefinition;
    /**
     * Defines the **Resources** property.
     */
    static Resources: PropertyDefinition;
    /**
     * Defines the **ConflictingMeetingCount** property.
     */
    static ConflictingMeetingCount: PropertyDefinition;
    /**
     * Defines the **AdjacentMeetingCount** property.
     */
    static AdjacentMeetingCount: PropertyDefinition;
    /**
     * Defines the **ConflictingMeetings** property.
     */
    static ConflictingMeetings: PropertyDefinition;
    /**
     * Defines the **AdjacentMeetings** property.
     */
    static AdjacentMeetings: PropertyDefinition;
    /**
     * Defines the **Duration** property.
     */
    static Duration: PropertyDefinition;
    /**
     * Defines the **TimeZone** property.
     */
    static TimeZone: PropertyDefinition;
    /**
     * Defines the **AppointmentReplyTime** property.
     */
    static AppointmentReplyTime: PropertyDefinition;
    /**
     * Defines the **AppointmentSequenceNumber** property.
     */
    static AppointmentSequenceNumber: PropertyDefinition;
    /**
     * Defines the **AppointmentState** property.
     */
    static AppointmentState: PropertyDefinition;
    /**
     * Defines the **Recurrence** property.
     */
    static Recurrence: PropertyDefinition;
    /**
     * Defines the **FirstOccurrence** property.
     */
    static FirstOccurrence: PropertyDefinition;
    /**
     * Defines the **LastOccurrence** property.
     */
    static LastOccurrence: PropertyDefinition;
    /**
     * Defines the **ModifiedOccurrences** property.
     */
    static ModifiedOccurrences: PropertyDefinition;
    /**
     * Defines the **DeletedOccurrences** property.
     */
    static DeletedOccurrences: PropertyDefinition;
    /**
     * Defines the **MeetingTimeZone** property.
     */
    static MeetingTimeZone: PropertyDefinition;
    /**
     * Defines the **StartTimeZone** property.
     */
    static StartTimeZone: PropertyDefinition;
    /**
     * Defines the **EndTimeZone** property.
     */
    static EndTimeZone: PropertyDefinition;
    /**
     * Defines the **ConferenceType** property.
     */
    static ConferenceType: PropertyDefinition;
    /**
     * Defines the **AllowNewTimeProposal** property.
     */
    static AllowNewTimeProposal: PropertyDefinition;
    /**
     * Defines the **IsOnlineMeeting** property.
     */
    static IsOnlineMeeting: PropertyDefinition;
    /**
     * Defines the **MeetingWorkspaceUrl** property.
     */
    static MeetingWorkspaceUrl: PropertyDefinition;
    /**
     * Defines the **NetShowUrl** property.
     */
    static NetShowUrl: PropertyDefinition;
    /**
     * @internal Instance of **MeetingRequestSchema**
     */
    static Instance: MeetingRequestSchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents the schema for meeting requests.
 */
export interface MeetingRequestSchema {
    /**
     * Defines the **MeetingRequestType** property.
     */
    MeetingRequestType: PropertyDefinition;
    /**
     * Defines the **IntendedFreeBusyStatus** property.
     */
    IntendedFreeBusyStatus: PropertyDefinition;
    /**
     * Defines the **ChangeHighlights** property.
     */
    ChangeHighlights: PropertyDefinition;
    /**
     * Defines the **EnhancedLocation** property.
     */
    EnhancedLocation: PropertyDefinition;
    /**
     * Defines the **Start** property.
     */
    Start: PropertyDefinition;
    /**
     * Defines the **End** property.
     */
    End: PropertyDefinition;
    /**
     * Defines the **OriginalStart** property.
     */
    OriginalStart: PropertyDefinition;
    /**
     * Defines the **IsAllDayEvent** property.
     */
    IsAllDayEvent: PropertyDefinition;
    /**
     * Defines the **LegacyFreeBusyStatus** property.
     */
    LegacyFreeBusyStatus: PropertyDefinition;
    /**
     * Defines the **Location** property.
     */
    Location: PropertyDefinition;
    /**
     * Defines the **When** property.
     */
    When: PropertyDefinition;
    /**
     * Defines the **IsMeeting** property.
     */
    IsMeeting: PropertyDefinition;
    /**
     * Defines the **IsCancelled** property.
     */
    IsCancelled: PropertyDefinition;
    /**
     * Defines the **IsRecurring** property.
     */
    IsRecurring: PropertyDefinition;
    /**
     * Defines the **MeetingRequestWasSent** property.
     */
    MeetingRequestWasSent: PropertyDefinition;
    /**
     * Defines the **AppointmentType** property.
     */
    AppointmentType: PropertyDefinition;
    /**
     * Defines the **MyResponseType** property.
     */
    MyResponseType: PropertyDefinition;
    /**
     * Defines the **Organizer** property.
     */
    Organizer: PropertyDefinition;
    /**
     * Defines the **RequiredAttendees** property.
     */
    RequiredAttendees: PropertyDefinition;
    /**
     * Defines the **OptionalAttendees** property.
     */
    OptionalAttendees: PropertyDefinition;
    /**
     * Defines the **Resources** property.
     */
    Resources: PropertyDefinition;
    /**
     * Defines the **ConflictingMeetingCount** property.
     */
    ConflictingMeetingCount: PropertyDefinition;
    /**
     * Defines the **AdjacentMeetingCount** property.
     */
    AdjacentMeetingCount: PropertyDefinition;
    /**
     * Defines the **ConflictingMeetings** property.
     */
    ConflictingMeetings: PropertyDefinition;
    /**
     * Defines the **AdjacentMeetings** property.
     */
    AdjacentMeetings: PropertyDefinition;
    /**
     * Defines the **Duration** property.
     */
    Duration: PropertyDefinition;
    /**
     * Defines the **TimeZone** property.
     */
    TimeZone: PropertyDefinition;
    /**
     * Defines the **AppointmentReplyTime** property.
     */
    AppointmentReplyTime: PropertyDefinition;
    /**
     * Defines the **AppointmentSequenceNumber** property.
     */
    AppointmentSequenceNumber: PropertyDefinition;
    /**
     * Defines the **AppointmentState** property.
     */
    AppointmentState: PropertyDefinition;
    /**
     * Defines the **Recurrence** property.
     */
    Recurrence: PropertyDefinition;
    /**
     * Defines the **FirstOccurrence** property.
     */
    FirstOccurrence: PropertyDefinition;
    /**
     * Defines the **LastOccurrence** property.
     */
    LastOccurrence: PropertyDefinition;
    /**
     * Defines the **ModifiedOccurrences** property.
     */
    ModifiedOccurrences: PropertyDefinition;
    /**
     * Defines the **DeletedOccurrences** property.
     */
    DeletedOccurrences: PropertyDefinition;
    /**
     * Defines the **MeetingTimeZone** property.
     */
    MeetingTimeZone: PropertyDefinition;
    /**
     * Defines the **StartTimeZone** property.
     */
    StartTimeZone: PropertyDefinition;
    /**
     * Defines the **EndTimeZone** property.
     */
    EndTimeZone: PropertyDefinition;
    /**
     * Defines the **ConferenceType** property.
     */
    ConferenceType: PropertyDefinition;
    /**
     * Defines the **AllowNewTimeProposal** property.
     */
    AllowNewTimeProposal: PropertyDefinition;
    /**
     * Defines the **IsOnlineMeeting** property.
     */
    IsOnlineMeeting: PropertyDefinition;
    /**
     * Defines the **MeetingWorkspaceUrl** property.
     */
    MeetingWorkspaceUrl: PropertyDefinition;
    /**
     * Defines the **NetShowUrl** property.
     */
    NetShowUrl: PropertyDefinition;
    /**
     * @internal Instance of **MeetingRequestSchema**
     */
    Instance: MeetingRequestSchema;
}
/**
 * Represents the schema for meeting requests.
 */
export interface MeetingRequestSchemaStatic extends MeetingRequestSchema {
}
/**
 * Represents the schema for meeting response
 */
 class MeetingResponseSchema extends MeetingMessageSchema {
    /**
     * Defines the **Start** property.
     */
    static Start: PropertyDefinition;
    /**
     * Defines the **End** property.
     */
    static End: PropertyDefinition;
    /**
     * Defines the **Location** property.
     */
    static Location: PropertyDefinition;
    /**
     * Defines the **AppointmentType** property.
     */
    static AppointmentType: PropertyDefinition;
    /**
     * Defines the **Recurrence** property.
     */
    static Recurrence: PropertyDefinition;
    /**
     * Defines the **ProposedStart** property.
     */
    static ProposedStart: PropertyDefinition;
    /**
     * Defines the **ProposedEnd** property.
     */
    static ProposedEnd: PropertyDefinition;
    /**
     * Defines the **EnhancedLocation** property.
     */
    static EnhancedLocation: PropertyDefinition;
    /**
     * @internal Instance of **MeetingResponseSchema**
     */
    static Instance: MeetingResponseSchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents the schema for meeting response
 */
export interface MeetingResponseSchema {
    /**
     * Defines the **Start** property.
     */
    Start: PropertyDefinition;
    /**
     * Defines the **End** property.
     */
    End: PropertyDefinition;
    /**
     * Defines the **Location** property.
     */
    Location: PropertyDefinition;
    /**
     * Defines the **AppointmentType** property.
     */
    AppointmentType: PropertyDefinition;
    /**
     * Defines the **Recurrence** property.
     */
    Recurrence: PropertyDefinition;
    /**
     * Defines the **ProposedStart** property.
     */
    ProposedStart: PropertyDefinition;
    /**
     * Defines the **ProposedEnd** property.
     */
    ProposedEnd: PropertyDefinition;
    /**
     * Defines the **EnhancedLocation** property.
     */
    EnhancedLocation: PropertyDefinition;
    /**
     * @internal Instance of **MeetingResponseSchema**
     */
    Instance: MeetingResponseSchema;
}
/**
 * Represents the schema for meeting response
 */
export interface MeetingResponseSchemaStatic extends MeetingResponseSchema {
}
/**
 * Represents the schema for post items.
 */
 class PostItemSchema extends ItemSchema {
    /**
     * Defines the **ConversationIndex** property.
     */
    static ConversationIndex: PropertyDefinition;
    /**
     * Defines the **ConversationTopic** property.
     */
    static ConversationTopic: PropertyDefinition;
    /**
     * Defines the **From** property.
     */
    static From: PropertyDefinition;
    /**
     * Defines the **InternetMessageId** property.
     */
    static InternetMessageId: PropertyDefinition;
    /**
     * Defines the **IsRead** property.
     */
    static IsRead: PropertyDefinition;
    /**
     * Defines the **PostedTime** property.
     */
    static PostedTime: PropertyDefinition;
    /**
     * Defines the **References** property.
     */
    static References: PropertyDefinition;
    /**
     * Defines the **Sender** property.
     */
    static Sender: PropertyDefinition;
    /**
     * @internal Instance of **PostItemSchema**
     */
    static Instance: PostItemSchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents the schema for post items.
 */
export interface PostItemSchema {
    /**
     * Defines the **ConversationIndex** property.
     */
    ConversationIndex: PropertyDefinition;
    /**
     * Defines the **ConversationTopic** property.
     */
    ConversationTopic: PropertyDefinition;
    /**
     * Defines the **From** property.
     */
    From: PropertyDefinition;
    /**
     * Defines the **InternetMessageId** property.
     */
    InternetMessageId: PropertyDefinition;
    /**
     * Defines the **IsRead** property.
     */
    IsRead: PropertyDefinition;
    /**
     * Defines the **PostedTime** property.
     */
    PostedTime: PropertyDefinition;
    /**
     * Defines the **References** property.
     */
    References: PropertyDefinition;
    /**
     * Defines the **Sender** property.
     */
    Sender: PropertyDefinition;
    /**
     * @internal Instance of **PostItemSchema**
     */
    Instance: PostItemSchema;
}
/**
 * Represents the schema for post items.
 */
export interface PostItemSchemaStatic extends PostItemSchema {
}

/**
 * Represents PostReply schema definition.
 */
 class PostReplySchema extends ServiceObjectSchema {
    /**
     * @internal Instance of **PostReplySchema**
     */
    static Instance: PostReplySchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents PostReply schema definition.
 */
export interface PostReplySchema {
    /**
     * @internal Instance of **PostReplySchema**
     */
    Instance: PostReplySchema;
}
/**
 * Represents PostReply schema definition.
 */
export interface PostReplySchemaStatic extends PostReplySchema {
}

/**
 * Represents ResponseMessage schema definition.
 */
 class ResponseMessageSchema extends ServiceObjectSchema {
    /**
     * @internal Instance of **ResponseMessageSchema**
     */
    static Instance: ResponseMessageSchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents ResponseMessage schema definition.
 */
export interface ResponseMessageSchema {
    /**
     * @internal Instance of **ResponseMessageSchema**
     */
    Instance: ResponseMessageSchema;
}
/**
 * Represents ResponseMessage schema definition.
 */
export interface ResponseMessageSchemaStatic extends ResponseMessageSchema {
}
/**
 * Represents ResponseObject schema definition.
 */
 class ResponseObjectSchema extends ServiceObjectSchema {
    /**
     * Defines the **ReferenceItemId** property.
     */
    static ReferenceItemId: PropertyDefinition;
    /**
     * Defines the **BodyPrefix** property.
     */
    static BodyPrefix: PropertyDefinition;
    /**
     * @internal Instance of **ResponseObjectSchema**
     */
    static Instance: ResponseObjectSchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents ResponseObject schema definition.
 */
export interface ResponseObjectSchema {
    /**
     * Defines the **ReferenceItemId** property.
     */
    ReferenceItemId: PropertyDefinition;
    /**
     * Defines the **BodyPrefix** property.
     */
    BodyPrefix: PropertyDefinition;
    /**
     * @internal Instance of **ResponseObjectSchema**
     */
    Instance: ResponseObjectSchema;
}
/**
 * Represents ResponseObject schema definition.
 */
export interface ResponseObjectSchemaStatic extends ResponseObjectSchema {
}
/**
 * Schemas - container for all schema objects
 */
 class Schemas {
    static AppointmentSchema: AppointmentSchema;
    static CalendarResponseObjectSchema: CalendarResponseObjectSchema;
    static CancelMeetingMessageSchema: CancelMeetingMessageSchema;
    static ContactGroupSchema: ContactGroupSchema;
    static ContactSchema: ContactSchema;
    static ConversationSchema: ConversationSchema;
    static EmailMessageSchema: EmailMessageSchema;
    static FolderSchema: FolderSchema;
    static ItemSchema: ItemSchema;
    static MeetingCancellationSchema: MeetingCancellationSchema;
    static MeetingMessageSchema: MeetingMessageSchema;
    static MeetingRequestSchema: MeetingRequestSchema;
    static MeetingResponseSchema: MeetingResponseSchema;
    static PostItemSchema: PostItemSchema;
    static PostReplySchema: PostReplySchema;
    static ResponseMessageSchema: ResponseMessageSchema;
    static ResponseObjectSchema: ResponseObjectSchema;
    static SearchFolderSchema: SearchFolderSchema;
    static ServiceObjectSchema: ServiceObjectSchema;
    static TaskSchema: TaskSchema;

}
/**
 * Represents the schema for search folders.
 */
 class SearchFolderSchema extends FolderSchema {
    /**
     * Defines the **SearchParameters** property.
     */
    static SearchParameters: PropertyDefinition;
    /**
     * @internal Instance of **SearchFolderSchema**
     */
    static Instance: SearchFolderSchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents the schema for search folders.
 */
export interface SearchFolderSchema {
    /**
     * Defines the **SearchParameters** property.
     */
    SearchParameters: PropertyDefinition;
    /**
     * @internal Instance of **SearchFolderSchema**
     */
    Instance: SearchFolderSchema;
}
/**
 * Represents the schema for search folders.
 */
export interface SearchFolderSchemaStatic extends SearchFolderSchema {
}
/**
 * Represents the base class for all item and folder schemas.
 */
 abstract class ServiceObjectSchema {





    /**
     * @internal Gets the list of first class properties for this service object type.
     */
    FirstClassProperties: PropertyDefinition[];
    /**
     * @internal Gets the list of first class summary properties for this service object type.
     */
    FirstClassSummaryProperties: PropertyDefinition[];
    /**
     * @internal Gets the list of indexed properties for this service object type.
     */
    IndexedProperties: IndexedPropertyDefinition[];
    /**
     * Defines the **ExtendedProperties** property.
     */
    static ExtendedProperties: PropertyDefinition;

    /**
     * @internal Finds the property definition.
     *
     * @param   {string}   uri   The URI.
     * @return  {PropertyDefinitionBase}    Property definition.
     */
    static FindPropertyDefinition(uri: string): PropertyDefinitionBase;
    /**
     * @internal Initializes a new instance of the **ServiceObjectSchema** class.
     */
    constructor();
    GetEnumerator(): PropertyDefinition[];
    protected init(): void;
    /**
     * @internal Registers an indexed property.
     *
     * @param   {IndexedPropertyDefinition}   indexedProperty   The indexed property to register.
     */
    RegisterIndexedProperty(indexedProperty: IndexedPropertyDefinition): void;
    /**
     * @internal Registers an internal schema property.
     *
     * @param   {any}                   registeringSchemaClass     SchemaClass calling this method - workaround for fieldUri registration oterhwise it registers super/parent class static properties as well. TypeScript does not provide a way to detect inherited property, hasOwnProperty returns true for parent static property
     * @param   {PropertyDefinition}   property   The property to register.
     */
    RegisterInternalProperty(registeringSchemaClass: any, property: PropertyDefinition): void;
    /**
     * @internal Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
    /**
     * @internal Registers a schema property. - workaround for fieldUri registration oterhwise it registers super/parent class static properties as well. TypeScript does not provide a way to detect inherited property, hasOwnProperty returns true
     *
     * @param   {any}                   registeringSchemaClass     SchemaClass calling this method - workaround for fieldUri registration oterhwise it registers super/parent class static properties as well. TypeScript does not provide a way to detect inherited property, hasOwnProperty returns true for parent static property
     * @param   {PropertyDefinition}    property     The property to register.
     */
    RegisterProperty(registeringSchemaClass: any, property: PropertyDefinition): void;
    /**
     * @private Registers a schema property.
     *
     * @param   {any}                   registeringSchemaClass     SchemaClass calling this method - workaround for fieldUri registration oterhwise it registers super/parent class static properties as well. TypeScript does not provide a way to detect inherited property, hasOwnProperty returns true for parent static property
     * @param   {PropertyDefinition}   property     The property to register.
     * @param   {boolean}   isInternal   Indicates whether the property is internal or should be visible to developers.
     */
    RegisterProperty(registeringSchemaClass: any, property: PropertyDefinition, isInternal: boolean): void;
    /**
     * @internal Tries to get property definition.
     *
     * @param   {string}   xmlElementName           Name of the XML element.
     * @param   {IOutParam<PropertyDefinition>}     propertyDefinition   The property definition.
     * @return  {boolean}                           True if property definition exists.
     */
    TryGetPropertyDefinition(xmlElementName: string, propertyDefinition: IOutParam<PropertyDefinition>): boolean;
}
/**
 * Represents the base class for all item and folder schemas.
 */
export interface ServiceObjectSchema {
    /**
     * Defines the **ExtendedProperties** property.
     */
    ExtendedProperties: PropertyDefinition;
    /**
     * @internal Finds the property definition.
     *
     * @param   {string}   uri   The URI.
     * @return  {PropertyDefinitionBase}    Property definition.
     */
    FindPropertyDefinition(uri: string): PropertyDefinitionBase;
}
/**
 * Represents the base class for all item and folder schemas.
 */
export interface ServiceObjectSchemaStatic extends ServiceObjectSchema {
}
/**
 * Represents the schema for task items.
 */
 class TaskSchema extends ItemSchema {
    /**
     * Defines the **ActualWork** property.
     */
    static ActualWork: PropertyDefinition;
    /**
     * Defines the **AssignedTime** property.
     */
    static AssignedTime: PropertyDefinition;
    /**
     * Defines the **BillingInformation** property.
     */
    static BillingInformation: PropertyDefinition;
    /**
     * Defines the **ChangeCount** property.
     */
    static ChangeCount: PropertyDefinition;
    /**
     * Defines the **Companies** property.
     */
    static Companies: PropertyDefinition;
    /**
     * Defines the **CompleteDate** property.
     */
    static CompleteDate: PropertyDefinition;
    /**
     * Defines the **Contacts** property.
     */
    static Contacts: PropertyDefinition;
    /**
     * Defines the **DelegationState** property.
     */
    static DelegationState: PropertyDefinition;
    /**
     * Defines the **Delegator** property.
     */
    static Delegator: PropertyDefinition;
    /**
     * Defines the **DueDate** property.
     */
    static DueDate: PropertyDefinition;
    /**
     * Defines the **Mode** property.
     */
    static Mode: PropertyDefinition;
    /**
     * Defines the **IsComplete** property.
     */
    static IsComplete: PropertyDefinition;
    /**
     * Defines the **IsRecurring** property.
     */
    static IsRecurring: PropertyDefinition;
    /**
     * Defines the **IsTeamTask** property.
     */
    static IsTeamTask: PropertyDefinition;
    /**
     * Defines the **Mileage** property.
     */
    static Mileage: PropertyDefinition;
    /**
     * Defines the **Owner** property.
     */
    static Owner: PropertyDefinition;
    /**
     * Defines the **PercentComplete** property.
     */
    static PercentComplete: PropertyDefinition;
    /**
     * Defines the **Recurrence** property.
     */
    static Recurrence: PropertyDefinition;
    /**
     * Defines the **StartDate** property.
     */
    static StartDate: PropertyDefinition;
    /**
     * Defines the **Status** property.
     */
    static Status: PropertyDefinition;
    /**
     * Defines the **StatusDescription** property.
     */
    static StatusDescription: PropertyDefinition;
    /**
     * Defines the **TotalWork** property.
     */
    static TotalWork: PropertyDefinition;
    /**
     * @internal Instance of **TaskSchema**
     */
    static Instance: TaskSchema;
    /**
     * Registers properties.
     *
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents the schema for task items.
 */
export interface TaskSchema {
    /**
     * Defines the **ActualWork** property.
     */
    ActualWork: PropertyDefinition;
    /**
     * Defines the **AssignedTime** property.
     */
    AssignedTime: PropertyDefinition;
    /**
     * Defines the **BillingInformation** property.
     */
    BillingInformation: PropertyDefinition;
    /**
     * Defines the **ChangeCount** property.
     */
    ChangeCount: PropertyDefinition;
    /**
     * Defines the **Companies** property.
     */
    Companies: PropertyDefinition;
    /**
     * Defines the **CompleteDate** property.
     */
    CompleteDate: PropertyDefinition;
    /**
     * Defines the **Contacts** property.
     */
    Contacts: PropertyDefinition;
    /**
     * Defines the **DelegationState** property.
     */
    DelegationState: PropertyDefinition;
    /**
     * Defines the **Delegator** property.
     */
    Delegator: PropertyDefinition;
    /**
     * Defines the **DueDate** property.
     */
    DueDate: PropertyDefinition;
    /**
     * Defines the **Mode** property.
     */
    Mode: PropertyDefinition;
    /**
     * Defines the **IsComplete** property.
     */
    IsComplete: PropertyDefinition;
    /**
     * Defines the **IsRecurring** property.
     */
    IsRecurring: PropertyDefinition;
    /**
     * Defines the **IsTeamTask** property.
     */
    IsTeamTask: PropertyDefinition;
    /**
     * Defines the **Mileage** property.
     */
    Mileage: PropertyDefinition;
    /**
     * Defines the **Owner** property.
     */
    Owner: PropertyDefinition;
    /**
     * Defines the **PercentComplete** property.
     */
    PercentComplete: PropertyDefinition;
    /**
     * Defines the **Recurrence** property.
     */
    Recurrence: PropertyDefinition;
    /**
     * Defines the **StartDate** property.
     */
    StartDate: PropertyDefinition;
    /**
     * Defines the **Status** property.
     */
    Status: PropertyDefinition;
    /**
     * Defines the **StatusDescription** property.
     */
    StatusDescription: PropertyDefinition;
    /**
     * Defines the **TotalWork** property.
     */
    TotalWork: PropertyDefinition;
    /**
     * @internal Instance of **TaskSchema**
     */
    Instance: TaskSchema;
}
/**
 * Represents the schema for task items.
 */
export interface TaskSchemaStatic extends TaskSchema {
}
/**
 * Represents a recurrence pattern where each occurrence happens a specific number of days after the previous one.
 */
 class DailyPattern extends IntervalPattern {
    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    XmlElementName: string;
    /**
     * Initializes a new instance of the **DailyPattern** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **DailyPattern** class.
     *
     * @param   {DateTime}  startDate   The date and time when the recurrence starts.
     * @param   {number}    interval    The number of days between each occurrence.
     */
    constructor(startDate: DateTime, interval: number);
}
/**
 * Represents a regeneration pattern, as used with recurring tasks, where each occurrence happens a specified number of days after the previous one is completed.
 */
 class DailyRegenerationPattern extends IntervalPattern {
    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    XmlElementName: string;
    /**
     * Gets a value indicating whether this instance is a regeneration pattern.
     *
     * @value   *true* if this instance is a regeneration pattern; otherwise, *false*.</value>
     */
    IsRegenerationPattern: boolean;
    /**
     * Initializes a new instance of the **DailyRegenerationPattern** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **DailyRegenerationPattern** class.
     *
     * @param   {DateTime}   startDate   The date and time when the recurrence starts.
     * @param   {number}   interval    The number of days between the current occurrence and the next, after the current occurrence is completed.
     */
    constructor(startDate: DateTime, interval: number);
}
/**
 * Represents a recurrence pattern where each occurrence happens at a specific interval after the previous one.
 */
 abstract class IntervalPattern extends Recurrence {

    /**
     * Gets or sets the interval between occurrences.
     */
    Interval: number;
    /**
     * @internal Initializes a new instance of the **IntervalPattern** class.
     */
    constructor();
    /**
     * @internal nitializes a new instance of the **IntervalPattern** class.
     *
     * @param   {DateTime}  startDate   The date and time when the recurrence starts.
     * @param   {number}    interval    The number of days between each occurrence.
     */
    constructor(startDate: DateTime, interval: number);
    /**
     * @internal Write properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void;
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
}
/**
 * Represents a recurrence pattern where each occurrence happens on a specific day a specific number of months after the previous one.
 */
 class MonthlyPattern extends IntervalPattern {

    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    XmlElementName: string;
    /**
     * Gets or sets the day of the month when each occurrence happens. DayOfMonth must be between 1 and 31.
     */
    DayOfMonth: number;
    /**
     * Initializes a new instance of the **MonthlyPattern** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **MonthlyPattern** class.
     *
     * @param   {DateTime}  startDate    The date and time when the recurrence starts.
     * @param   {number}    interval     The number of months between each occurrence.
     * @param   {number}    dayOfMonth   The day of the month when each occurrence happens.
     */
    constructor(startDate: DateTime, interval: number, dayOfMonth: number);
    /**
     * @internal Validates this instance.
     */
    InternalValidate(): void;
    /**
     * @internal Write properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void;
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
}
/**
 * Represents a regeneration pattern, as used with recurring tasks, where each occurrence happens a specified number of months after the previous one is completed.
 */
 class MonthlyRegenerationPattern extends IntervalPattern {
    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    XmlElementName: string;
    /**
     * Gets a value indicating whether this instance is a regeneration pattern.
     *
     * @value   *true* if this instance is a regeneration pattern; otherwise, *false*.</value>
     */
    IsRegenerationPattern: boolean;
    /**
     * Initializes a new instance of the **MonthlyRegenerationPattern** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **MonthlyRegenerationPattern** class.
     *
     * @param   {DateTime}   startDate   The date and time when the recurrence starts.
     * @param   {number}   interval    The number of days between the current occurrence and the next, after the current occurrence is completed.
     */
    constructor(startDate: DateTime, interval: number);
}
/**
 * Represents a recurrence pattern where each occurrence happens on a relative day a specific number of months after the previous one.
*/
 class RelativeMonthlyPattern extends IntervalPattern {


    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    XmlElementName: string;
    /**
     * Gets or sets the relative position of the day specified in DayOfTheWeek within the month.
     */
    DayOfTheWeekIndex: DayOfTheWeekIndex;
    /**
     * The day of the week when each occurrence happens.
     */
    DayOfTheWeek: DayOfTheWeek;
    /**
     * Initializes a new instance of the **RelativeMonthlyPattern** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **RelativeMonthlyPattern** class.
     *
     * @param   {DateTime}              startDate           The date and time when the recurrence starts.
     * @param   {number}                interval            The number of months between each occurrence.
     * @param   {DayOfTheWeek}          dayOfTheWeek        The day of the week each occurrence happens.
     * @param   {DayOfTheWeekIndex}   dayOfTheWeekIndex   The relative position of the day within the month.
     */
    constructor(startDate: DateTime, interval: number, dayOfTheWeek: DayOfTheWeek, dayOfTheWeekIndex: DayOfTheWeekIndex);
    /**
     * @internal Validates this instance.
     */
    InternalValidate(): void;
    /**
     * @internal Write properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void;
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
}

/**
 * Represents a recurrence pattern where each occurrence happens on a relative day every year.
 */
 class RelativeYearlyPattern extends Recurrence {



    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    XmlElementName: string;
    /**
     * Gets or sets the relative position of the day specified in DayOfTheWeek within the month.
     */
    DayOfTheWeekIndex: DayOfTheWeekIndex;
    /**
     * Gets or sets the day of the week when each occurrence happens.
     */
    DayOfTheWeek: DayOfTheWeek;
    /**
     * Gets or sets the month of the year when each occurrence happens.
     */
    Month: Month;
    /**
     * Initializes a new instance of the **RelativeYearlyPattern** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **RelativeYearlyPattern** class.
     *
     * @param   {DateTime}              startDate           The date and time when the recurrence starts.
     * @param   {Month}                 month               The month of the year each occurrence happens.
     * @param   {DayOfTheWeek}          dayOfTheWeek        The day of the week each occurrence happens.
     * @param   {DayOfTheWeekIndex}     dayOfTheWeekIndex   The relative position of the day within the month.
     */
    constructor(startDate: DateTime, month: Month, dayOfTheWeek: DayOfTheWeek, dayOfTheWeekIndex: DayOfTheWeekIndex);
    /**
     * @internal Validates this instance.
     */
    InternalValidate(): void;
    /**
     * @internal Write properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void;
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
}

/**
 * Represents a recurrence pattern where each occurrence happens on specific days a specific number of weeks after the previous one.
 */
 class WeeklyPattern extends IntervalPattern {


    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    XmlElementName: string;
    /**
     * Gets the list of the days of the week when occurrences happen.
     */
    DaysOfTheWeek: DayOfTheWeekCollection;
    /**
     * Gets or sets the first day of the week for this recurrence.
     */
    FirstDayOfWeek: DayOfWeek;
    /**
     * Initializes a new instance of the **WeeklyPattern** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **WeeklyPattern** class.
     *
     * @param   {DateTime}          startDate       The date and time when the recurrence starts.
     * @param   {number}            interval        The number of weeks between each occurrence.
     * @param   {DayOfTheWeek[]}    daysOfTheWeek   The days of the week when occurrences happen.
     */
    constructor(startDate: DateTime, interval: number, daysOfTheWeek: DayOfTheWeek[]);
    /**
     * Change event handler.
     *
     * @param   {ComplexProperty}   complexProperty   The complex property.
     */

    /**
     * @internal Validates this instance.
     */
    InternalValidate(): void;
    /**
     * @internal Write properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void;
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
}
/**
 * Represents a regeneration pattern, as used with recurring tasks, where each occurrence happens a specified number of weeks after the previous one is completed.
 */
 class WeeklyRegenerationPattern extends IntervalPattern {
    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    XmlElementName: string;
    /**
     * Gets a value indicating whether this instance is a regeneration pattern.
     *
     * @value   *true* if this instance is a regeneration pattern; otherwise, *false*.</value>
     */
    IsRegenerationPattern: boolean;
    /**
     * Initializes a new instance of the  class.
     */
    constructor();
    /**
     * Initializes a new instance of the  class.
     *
     * @param   {DateTime}   startDate   The date and time when the recurrence starts.
     * @param   {interval}   interval    The number of weeks between the current occurrence and the next, after the current occurrence is completed.
     */
    constructor(startDate: DateTime, interval: number);
}

/**
 * Represents a recurrence pattern where each occurrence happens on a specific day every year.
 */
 class YearlyPattern extends Recurrence {


    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    XmlElementName: string;
    /**
     * Gets or sets the month of the year when each occurrence happens.
     */
    Month: Month;
    /**
     * Gets or sets the day of the month when each occurrence happens. DayOfMonth must be between 1 and 31.
     */
    DayOfMonth: number;
    /**
     * Initializes a new instance of the **YearlyPattern** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **YearlyPattern** class.
     *
     * @param   {DateTime}  startDate    The date and time when the recurrence starts.
     * @param   {Month}     month        The month of the year each occurrence happens.
     * @param   {number}    dayOfMonth   The day of the month each occurrence happens.
     */
    constructor(startDate: DateTime, month: Month, dayOfMonth: number);
    /**
     * @internal Validates this instance.
     */
    InternalValidate(): void;
    /**
     * @internal Write properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void;
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
}
/**
 * Represents a regeneration pattern, as used with recurring tasks, where each occurrence happens a specified number of years after the previous one is completed.
 */
 class YearlyRegenerationPattern extends IntervalPattern {
    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    XmlElementName: string;
    /**
     * Gets a value indicating whether this instance is a regeneration pattern.
     *
     * @value   *true* if this instance is a regeneration pattern; otherwise, *false*.</value>
     */
    IsRegenerationPattern: boolean;
    /**
     * Initializes a new instance of the **YearlyRegenerationPattern** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **YearlyRegenerationPattern** class.
     *
     * @param   {DateTime}   startDate   The date and time when the recurrence starts.
     * @param   {number}   interval    The number of years between the current occurrence and the next, after the current occurrence is completed.
     */
    constructor(startDate: DateTime, interval: number);
}
/**
 * Represents a recurrence pattern, as used by Appointment and Task items.
 */
 class Recurrence extends ComplexProperty {
    startDate: DateTime;
    numberOfOccurrences: number;
    endDate: DateTime;
    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    XmlElementName: string;
    /**
     * @internal Gets a value indicating whether this instance is regeneration pattern.
     *
     * @value   *true* if this instance is regeneration pattern; otherwise, *false*.
     */
    IsRegenerationPattern: boolean;
    /**
     * Gets or sets the date and time when the recurrence start.
     */
    StartDate: DateTime;
    /**
     * Gets a value indicating whether the pattern has a fixed number of occurrences or an end date.
     */
    HasEnd: boolean;
    /**
     * Gets or sets the number of occurrences after which the recurrence ends. Setting NumberOfOccurrences resets EndDate.
     */
    NumberOfOccurrences: number;
    /**
     * Gets or sets the date after which the recurrence ends. Setting EndDate resets NumberOfOccurrences.
     */
    EndDate: DateTime;
    /**
     * @internal Initializes a new instance of the **Recurrence** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **Recurrence** class.
     *
     * @param   {DateTime}   startDate   The start date.
     */
    constructor(startDate: DateTime);
    /**
     * Gets a property value or throw if null.
     *
     * @typeparam   {T}     Value type.
     * @param   {T}         value   The value.
     * @param   {string}    name    The property name.
     * @return  {T}         Property value
     */
    GetFieldValueOrThrowIfNull<T>(value: any, name: string): T;
    /**
     * @internal Validates this instance.
     */
    InternalValidate(): void;
    /**
     * @internal Write properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    InternalWritePropertiesToXml(writer: EwsServiceXmlWriter): void;
    /**
     * Compares two objects by converting them to JSON and comparing their string values
     *
     * @param   {Recurrence}    otherRecurrence   object to compare to
     * @return  {boolean}       true if the objects serialize to the same string
     */
    IsSame(otherRecurrence: Recurrence): boolean;
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    /**
     * Sets up this recurrence so that it never ends. Calling NeverEnds is equivalent to setting both NumberOfOccurrences and EndDate to null.
     */
    NeverEnds(): void;
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}
 module Recurrence {
    var DailyPattern: any;
    var DailyRegenerationPattern: any;
    var IntervalPattern: any;
    var MonthlyPattern: any;
    var MonthlyRegenerationPattern: any;
    var RelativeMonthlyPattern: any;
    var RelativeYearlyPattern: any;
    var WeeklyPattern: any;
    var WeeklyRegenerationPattern: any;
    var YearlyPattern: any;
    var YearlyRegenerationPattern: any;
}

/**
 * @internal Represents recurrent range with an end date.
 */
 class EndDateRecurrenceRange extends RecurrenceRange {

    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    XmlElementName: string;
    /**
     * Gets or sets the end date.
     *
     * @value   The end date.
     */
    EndDate: DateTime;
    /**
     * Initializes a new instance of the **EndDateRecurrenceRange** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **EndDateRecurrenceRange** class.
     *
     * @param   {DateTime}   startDate   The start date.
     * @param   {DateTime}   endDate     The end date.
     */
    constructor(startDate: DateTime, endDate: DateTime);
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    /**
     * @internal Setups the recurrence.
     *
     * @param   {Recurrence}   recurrence   The recurrence.
     */
    SetupRecurrence(recurrence: Recurrence): void;
    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}

/**
 * @internal Represents recurrence range with no end date.
 */
 class NoEndRecurrenceRange extends RecurrenceRange {
    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    XmlElementName: string;
    /**
     * Initializes a new instance of the **NoEndRecurrenceRange** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **NoEndRecurrenceRange** class.
     *
     * @param   {DateTime}   startDate   The start date.
     */
    constructor(startDate: DateTime);
    /**
     * @internal Setups the recurrence.
     *
     * @param   {Recurrence}   recurrence   The recurrence.
     */
    SetupRecurrence(recurrence: Recurrence): void;
}

/**
 * @internal Represents recurrence range with start and number of occurance.
 */
 class NumberedRecurrenceRange extends RecurrenceRange {

    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    XmlElementName: string;
    /**
     * Gets or sets the number of occurrences.
     *
     * @value   The number of occurrences.
     */
    NumberOfOccurrences: number;
    /**
     * Initializes a new instance of the **NumberedRecurrenceRange** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **NumberedRecurrenceRange** class.
     *
     * @param   {DateTime}   startDate             The start date.
     * @param   {number}   numberOfOccurrences   The number of occurrences.
     */
    constructor(startDate: DateTime, numberOfOccurrences: number);
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    /**
     * Setups the recurrence.
     *
     * @param   {Recurrence}   recurrence   The recurrence.
     */
    SetupRecurrence(recurrence: Recurrence): void;
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}

/**
 * @internal Represents recurrence range with start and end dates.
 */
 abstract class RecurrenceRange extends ComplexProperty {


    /**
     * @internal Gets the name of the XML element.
     *
     * @value   The name of the XML element.
     */
    XmlElementName: string;
    /**
     * @internal Gets or sets the recurrence.
     *
     * @value   The recurrence.
     */
    Recurrence: Recurrence;
    /**
     * @internal Gets or sets the start date.
     *
     * @value   The start date.
     */
    StartDate: DateTime;
    /**
     * @internal Initializes a new instance of the **RecurrenceRange** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **RecurrenceRange** class.
     *
     * @param   {DateTime}   startDate   The start date.
     */
    constructor(startDate: DateTime);
    /**
     * @internal Changes handler.
     */
    Changed(): void;
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    /**
     * @internal Setup the recurrence.
     *
     * @param   {Recurrence}   recurrence   The recurrence.
     */
    SetupRecurrence(recurrence: Recurrence): void;
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
}

}