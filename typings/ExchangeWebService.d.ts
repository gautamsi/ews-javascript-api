declare module "ews-javascript-api" {
import * as moment from 'moment-timezone';
import { FetchStream, fetchUrl, FetchOptions } from 'fetch';

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
    readonly Keys: TKey[];
    /**get all items in key,value pair array */
    readonly Items: KeyValuePair<TKey, TValue>[];
    /** get all values */
    readonly Values: TValue[];
    /** get number of objects in dictionary */
    readonly length: number;
    /** get number of objects in the dictionary */
    readonly Count: number;
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
export interface IndexerWithEnumKey<TKey, TValue> {
    [index: number]: TValue;
}
/**
 * Represents an alternate mailbox.
 * @sealed
 */
 class AlternateMailbox {
    /**
     * Gets the alternate mailbox type.
     */
    /** @internal set */
    Type: string;
    /**
     * Gets the alternate mailbox display name.
     */
    /** @internal set */
    DisplayName: string;
    /**
     * Gets the alternate mailbox legacy DN.
     */
    /** @internal set */
    LegacyDN: string;
    /**
     * Gets the alernate mailbox server.
     */
    /** @internal set */
    Server: string;
    /**
     * Gets the alternate mailbox address.
     * It has value only when Server and LegacyDN is empty.
     */
    /** @internal set */
    SmtpAddress: string;
    /**
     * Gets the alternate mailbox owner SmtpAddress.
     */
    /** @internal set */
    OwnerSmtpAddress: string;
}
/**
 * Represents a user setting that is a collection of alternate mailboxes.
 * @sealed
 */
 class AlternateMailboxCollection {
    entries: AlternateMailbox[];
    /**
     * Gets the collection of alternate mailboxes.
     */
    /** @private set */
    Entries: AlternateMailbox[];
}/**
 * Represents an error returned by the Autodiscover service.
 * @sealed
 */
 class AutodiscoverError {
    /**
     * Gets the time when the error was returned.
     */
    readonly Time: string;
    /**
     * Gets a hash of the name of the computer that is running Microsoft Exchange Server that has the Client Access server role installed.
     */
    readonly Id: string;
    /**
     * Gets the error code.
     */
    readonly ErrorCode: number;
    /**
     * Gets the error message.
     */
    readonly Message: string;
    /**
     * Gets the debug data.
     */
    readonly DebugData: string;
    /**
     * Parses the XML Js Object creates an Autodiscover error.
     *
     * @param   {any}   jsObject   The object.
     * @return  {AutodiscoverError}            An Autodiscover error.
     */
    Parse(jsObject: any): AutodiscoverError;
}
/**
 * Represents a collection of responses to a call to the Autodiscover service.
 * @typeparam {TResponse} The type of the responses in the collection.
 */
 abstract class AutodiscoverResponseCollection<TResponse extends AutodiscoverResponse> extends AutodiscoverResponse {
    /**
     * Gets the number of responses in the collection.
     */
    readonly Count: number;
    /**
     * Gets the response at the specified index.
     *
     * @param   {number}   index   Index.
     * @returns {TResponse} TResponse at the index
     */
    __thisIndexer(index: number): TResponse;
    /**
     * Gets an enumerator that iterates through the elements of the collection.
     *
     * @return  {TResponse[]}      An IEnumerator for the collection.
     */
    GetEnumerator(): TResponse[];
}
/**
 * Represents a binding to the Exchange Autodiscover Service.
 * @sealed
 */
 class AutodiscoverService extends ExchangeServiceBase {
    /**
     * Maximum number of Url (or address) redirections that will be followed by an Autodiscover call
     *
     * @static
     */
    static AutodiscoverMaxRedirections: number;
    /**
     *  Set Autodiscover hard coded url for Office 365, useful in GCC and O365 in China. This is also helpful if O365 need changing url for some reason (beta testing, transition to different url), no need to update lib
     *
     * @static
     * @type {string}
     */
    static Office365AutodiscoverUrl: string;
    /**
     *  Set Autodiscover hard coded check for header when it is auto redirected (skip 302 and follow the redirect in lib, likely browsers)
     *
     * @static
     * @type {string}
     */
    static Office365AutodiscoverRedirectHeader: string;
    /**
     *  Set Autodiscover hard coded check for header value when it is auto redirected (skip 302 and follow the redirect in lib, likely browsers)
     *
     * @static
     * @type {string}
     */
    static Office365AutodiscoverRedirectHeaderValue: string;
    Domain: string;
    Url: Uri;
    IsExternal: boolean | null;
    RedirectionUrlValidationCallback: AutodiscoverRedirectionUrlValidationCallback;
    DnsServerAddress: any;
    EnableScpLookup: boolean;
    /**
     * Initializes a new instance of the **AutodiscoverService** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **AutodiscoverService** class.
     *
     * @param   {ExchangeVersion}   requestedServerVersion   The requested server version.
     */
    constructor(requestedServerVersion: ExchangeVersion);
    /**
     * Initializes a new instance of the **AutodiscoverService** class.
     *
     * @param   {string}    domain  The domain that will be used to determine the URL of the service.
     */
    constructor(domain: string);
    /**
     * Initializes a new instance of the **AutodiscoverService** class.
     *
     * @param   {Uri}               url                      The URL of the service.
     * @param   {string}            domain                   The domain that will be used to determine the URL of the service.
     * @param   {ExchangeVersion}   requestedServerVersion   The requested server version.
     */
    constructor(domain: string, requestedServerVersion: ExchangeVersion);
    /**
     * Initializes a new instance of the **AutodiscoverService** class.
     *
     * @param   {Uri}   url The URL of the service.
     */
    constructor(url: Uri);
    /**
     * Initializes a new instance of the **AutodiscoverService** class.
     *
     * @param   {Uri}               url                      The URL of the service.
     * @param   {ExchangeVersion}   requestedServerVersion   The requested server version.
     */
    constructor(url: Uri, requestedServerVersion: ExchangeVersion);
    /**
     * Disables SCP lookup if duplicate email address redirection.
     *
     * @param   {string}    emailAddress                The email address to use.
     * @param   {string[]}  redirectionEmailAddresses   The list of prior redirection email addresses.
     */
    DisableScpLookupIfDuplicateRedirection(emailAddress: string, redirectionEmailAddresses: string[]): void;
    /**
     * Retrieves the specified settings for a set of domains.
     *
     * @param   {string[]}                  domains             The SMTP addresses of the domains.
     * @param   {ExchangeVersion}           requestedVersion    Requested version of the Exchange service.
     * @param   {...DomainSettingName[]}    domainSettingNames  The domain setting names.
     * @return  {Promise<GetDomainSettingsResponseCollection>}  A GetDomainSettingsResponseCollection object containing the responses for each individual domain.
     */
    GetDomainSettings(domains: string[], requestedVersion: ExchangeVersion, ...domainSettingNames: DomainSettingName[]): Promise<GetDomainSettingsResponseCollection>;
    /**
     * Retrieves the specified settings for a domain.
     *
     * @param   {string}                    domain               The domain.
     * @param   {ExchangeVersion}           requestedVersion     Requested version of the Exchange service.
     * @param   {...DomainSettingName[]}    domainSettingNames   The domain setting names.
     * @return  {Promise<GetDomainSettingsResponse>}  A DomainResponse object containing the requested settings for the specified domain.
     */
    GetDomainSettings(domain: string, requestedVersion: ExchangeVersion, ...domainSettingNames: DomainSettingName[]): Promise<GetDomainSettingsResponse>;
    /**
     * Retrieves the specified settings for single SMTP address.
     * @remarks This method handles will run the entire Autodiscover "discovery" algorithm and will follow address and URL redirections.
     * @param   {string}   userSmtpAddress    The SMTP addresses of the user.
     * @param   {UserSettingName[]}   userSettingNames   The user setting names.
     * @return  {Promise<GetUserSettingsResponse>} A UserResponse object containing the requested settings for the specified user.
     */
    GetUserSettings(userSmtpAddress: string, userSettingNames: UserSettingName[]): Promise<GetUserSettingsResponse>;
    /**
     * Retrieves the specified settings for a set of users.
     *
     * @param   {string[]}              userSmtpAddresses   The SMTP addresses of the users.
     * @param   {...UserSettingName[]}  userSettingNames    The user setting names.
     * @return  {Promise<GetUserSettingsResponseCollection>}    A GetUserSettingsResponseCollection object containing the responses for each individual user.
     */
    GetUsersSettings(userSmtpAddresses: string[], ...userSettingNames: UserSettingName[]): Promise<GetUserSettingsResponseCollection>;
    ProcessHttpErrorResponse(httpWebResponse: XMLHttpRequest, webException: any): any;
    TraceResponse(response: XMLHttpRequest, memoryStream: any): any;
    ThrowIfDuplicateRedirection(emailAddress: string, redirectionEmailAddresses: IRefParam<string[]>): void;
}
export interface GetSettingsMethod<TGetSettingsResponseCollection, TSettingName> {
    (smtpAddresses: string[], settings: TSettingName[], requestedVersion: ExchangeVersion, autodiscoverUrl: IRefParam<Uri>): Promise<TGetSettingsResponseCollection>;
}
export interface AutodiscoverRedirectionUrlValidationCallback {
    (redirectionUrl: string): boolean;
} class OutlookUser {
    static AvailableUserSettings: UserSettingName[];
    ConvertToUserSettings(requestedSettings: UserSettingName[], response: GetUserSettingsResponse): any;
}
 class DirectoryHelper {
    Service: ExchangeServiceBase;
    GetAutodiscoverScpUrlsForDomain(domainName: string): string[];
    GetScpUrlList(domainName: string, ldapPath: string, maxHops: any): string[];
    GetSiteName(): string;
    TraceMessage(message: string): any;
}
/**
 * Represents a sharing location.
 * @sealed
 */
 class DocumentSharingLocation {
    /**
     * Gets the URL of the web service to use to manipulate documents at the sharing location.
     */
    readonly ServiceUrl: string;
    /**
     * Gets the URL of the sharing location (for viewing the contents in a web browser).
     */
    readonly LocationUrl: string;
    /**
     * Gets the display name of the location.
     */
    readonly DisplayName: string;
    /**
     * Gets the space-separated list of file extensions that are allowed at the location.
     * @remarks Example:  "docx pptx xlsx"
     */
    readonly SupportedFileExtensions: string[];
    /**
     * Gets a flag indicating whether external users (outside the enterprise/tenant) can view documents at the location.
     */
    readonly ExternalAccessAllowed: boolean;
    /**
     * Gets a flag indicating whether anonymous users can view documents at the location.
     */
    readonly AnonymousAccessAllowed: boolean;
    /**
     * Gets a flag indicating whether the user can modify permissions for documents at the location.
     * @remarks This will be true for the user's "My Site," for example. However, documents at team and project sites will typically be ACLed by the site owner, so the user will not be able to modify permissions. This will most likely by false even if the caller is the owner, to avoid surprises. They should go to SharePoint to modify permissions for team and project sites.
     */
    readonly CanModifyPermissions: boolean;
    /**
     * Gets a flag indicating whether this location is the user's default location.  This will generally be their My Site.
     */
    readonly IsDefault: boolean;
}
/**
 * Represents a user setting that is a collection of alternate mailboxes.
 * @sealed
 */
 class DocumentSharingLocationCollection {
    /**
     * Gets the collection of alternate mailboxes.
     */
    readonly Entries: DocumentSharingLocation[];
}
/**
 * Represents an error from a GetDomainSettings request.
 * @sealed
 */
 class DomainSettingError {
    /**
     * Gets the error code.
     */
    readonly ErrorCode: AutodiscoverErrorCode;
    /**
     * Gets the error message.
     */
    readonly ErrorMessage: string;
    /**
     * Gets the name of the setting.
     */
    readonly SettingName: string;
}
/**
 * Represents the email Protocol connection settings for pop/imap/smtp protocols.
 * @sealed
 */
 class ProtocolConnection {
    /**
     * Gets or sets the encryption method.
     */
    EncryptionMethod: string;
    /**
     * Gets or sets the Hostname.
     */
    Hostname: string;
    /**
     * Gets or sets the port number.
     */
    Port: number;
}
/**
 * Represents a user setting that is a collection of protocol connection.
 * @sealed
 */
 class ProtocolConnectionCollection {
    Connections: ProtocolConnection[];
}/**
 * Represents the base class for all responses returned by the Autodiscover service.
 */
 abstract class AutodiscoverResponse {
    /**
     * Gets the error code that was returned by the service.
     */
    /** @internal */
    ErrorCode: AutodiscoverErrorCode;
    /**
     * Gets the error message that was returned by the service.
     */
    /** @internal */
    ErrorMessage: string;
}
/**
 * Represents the response to a GetDomainSettings call for an individual domain.
 * @sealed
 */
 class GetDomainSettingsResponse extends AutodiscoverResponse {
    /**
     * Gets the domain this response applies to.
     */
    /** @internal */
    Domain: string;
    /**
     * Gets the redirectionTarget (URL or email address)
     */
    readonly RedirectTarget: string;
    /**
     * Gets the requested settings for the domain.
     */
    readonly Settings: Dictionary<DomainSettingName, any>;
    /**
     * Gets error information for settings that could not be returned.
     */
    readonly DomainSettingErrors: DomainSettingError[];
    /**
     * Initializes a new instance of the **GetDomainSettingsResponse** class.
     */
    constructor();
}
/**
 * Represents a collection of responses to GetDomainSettings
 * @sealed
 */
 class GetDomainSettingsResponseCollection extends AutodiscoverResponseCollection<GetDomainSettingsResponse> {
    /**
     * Initializes a new instance of the **GetDomainSettingsResponseCollection<GetDomainSettingsResponse>** class.
     */
    constructor();
}
/**
 * Represents the response to a GetUsersSettings call for an individual user.
 * @sealed
 */
 class GetUserSettingsResponse extends AutodiscoverResponse {
    /**
     * Gets the SMTP address this response applies to.
     */
    /** @internal */
    SmtpAddress: string;
    /**
     * Gets the redirectionTarget (URL or email address)
     */
    /** @internal */
    RedirectTarget: string;
    /**
     * Gets the requested settings for the user.
     */
    /** @internal */
    Settings: Dictionary<UserSettingName, any>;
    /**
     * Gets error information for settings that could not be returned.
     */
    /** @internal */
    UserSettingErrors: UserSettingError[];
    /**
     * Initializes a new instance of the **GetUserSettingsResponse** class.
     */
    constructor();
    /**
     * Reads user setting from XML jsObject.
     *
     * @param   {any} jsObject  Json Object converted from XML.
     */
    ReadSettingFromXmlJsObject(jsObject: any): void;
    /**
     * Tries the get the user setting value.
     *
     * @param   {UserSettingName}   setting   The setting.
     * @return  {T}  The setting value.
     */
    GetSettingValue<T>(setting: UserSettingName): T;
}
/**
 * Represents a collection of responses to GetUserSettings
 * @sealed
 */
 class GetUserSettingsResponseCollection extends AutodiscoverResponseCollection<GetUserSettingsResponse> {
    /**
     * Initializes a new instance of the **GetUserSettingsResponseCollection<GetUserSettingsResponse>** class.
     */
    constructor();
}
/**
 * Represents an error from a GetUserSettings request.
 * @sealed
 */
 class UserSettingError {
    /**
     * Gets the error code.
     */
    /** @internal */
    ErrorCode: AutodiscoverErrorCode;
    /**
     * Gets the error message.
     */
    /** @internal */
    ErrorMessage: string;
    /**
     * Gets the name of the setting.
     */
    /** @internal */
    SettingName: string;
}
/**
 * Represents the URL of the Exchange web client.
 * @sealed
 */
 class WebClientUrl {
    /**
     * Gets the authentication methods.
     */
    /** @internal set */
    AuthenticationMethods: string;
    /**
     * Gets the URL.
     */
    /** @internal set */
    Url: string;
}
/**
 * Represents a user setting that is a collection of Exchange web client URLs.
 * @sealed
 */
 class WebClientUrlCollection {
    /**
     * Gets the URLs.
     */
    readonly Urls: WebClientUrl[];
}
/**
 * Represents an AddressEntity object.
 */
 class AddressEntity extends ExtractedEntity {
    /**
     * Gets the meeting suggestion Location.
     */
    Address: string;
    /**
     * Initializes a new instance of the **AddressEntity** class.
     */
    constructor();
}
/**
 * Represents a collection of AddressEntity objects.
 */
 class AddressEntityCollection extends ComplexPropertyCollection<AddressEntity> {
}
 class AppointmentOccurrenceId extends ItemId {
    OccurrenceIndex: number;
    constructor(recurringMasterUniqueId: string, occurrenceIndex: number);
    GetXmlElementName(): string;
    InternalToJson(service: ExchangeService): any;
}
 class ApprovalRequestData extends ComplexProperty {
    IsUndecidedApprovalRequest: boolean;
    ApprovalDecision: number;
    ApprovalDecisionMaker: string;
    ApprovalDecisionTime: Date;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
}
/**
 * Represents the archive tag of an item or folder.
 */
 class ArchiveTag extends RetentionTagBase {
    /**
     * Initializes a new instance of the **ArchiveTag** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **ArchiveTag** class.
     *
     * @param   {boolean}   isExplicit    Is explicit.
     * @param   {Guid}      retentionId   Retention id.
     */
    constructor(isExplicit: boolean, retentionId: Guid);
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
     * Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string;
    /**
     * Loads the attachment. Calling this method results in a call to EWS.
     */
    Load(): Promise<void>;
}
/**
 * Represents an item's attachment collection.
 */
 class AttachmentCollection extends ComplexPropertyCollection<Attachment> implements IOwnedProperty {
    ___typeGenerics: string[];
    /**
     * @interface:IOwnedProperty The owner of this attachment collection.
     */
    Owner: ServiceObject;
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
    AddItemAttachment<TItem extends Item>(TItem: typeof Item, TItemElementName: string): ItemAttachmentOf<TItem>;
    /**
     * Removes all attachments from this collection.
     */
    Clear(): void;
    CreateDefaultComplexProperty(): Attachment;
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
}
/**
 * Represents an attendee to a meeting.
 */
 class Attendee extends EmailAddress {
    /**
     * Gets the type of response the attendee gave to the meeting invitation it received.
     */
    readonly ResponseType: MeetingResponseType;
    /**
     * Gets the date and time when the attendee last responded to a meeting invitation or update.
     */
    readonly LastResponseTime: DateTime;
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
}
/**
 * Represents a collection of attendees.
 */
 class AttendeeCollection extends ComplexPropertyCollection<Attendee> {
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
 class CalendarEvent extends ComplexProperty {
    readonly StartTime: DateTime;
    readonly EndTime: DateTime;
    readonly FreeBusyStatus: LegacyFreeBusyStatus;
    readonly Details: CalendarEventDetails;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
 class CalendarEventDetails extends ComplexProperty {
    readonly StoreId: string;
    readonly Subject: string;
    readonly Location: string;
    readonly IsMeeting: boolean;
    readonly IsRecurring: boolean;
    readonly IsException: boolean;
    readonly IsReminderSet: boolean;
    readonly IsPrivate: boolean;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
 class Conflict extends ComplexProperty {
    readonly ConflictType: ConflictType;
    readonly NumberOfMembers: number;
    readonly NumberOfMembersAvailable: number;
    readonly NumberOfMembersWithConflict: number;
    readonly NumberOfMembersWithNoData: number;
    readonly FreeBusyStatus: LegacyFreeBusyStatus;
    constructor(conflictType: ConflictType);
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
/**
 * Represents a user's Out of Office (OOF) settings.
 */
 class OofSettings extends ComplexProperty implements ISelfValidate {
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
     * Validates this instance.
     */
    Validate(): void;
}
 class Suggestion extends ComplexProperty {
    readonly Date: DateTime;
    readonly Quality: SuggestionQuality;
    readonly TimeSuggestions: TimeSuggestion[];
    constructor();
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
 class TimeSuggestion extends ComplexProperty {
    readonly MeetingTime: DateTime;
    readonly IsWorkTime: boolean;
    readonly Quality: SuggestionQuality;
    readonly Conflicts: Conflict[];
    constructor();
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
 class WorkingHours extends ComplexProperty {
    LegacyTimeZone: LegacyAvailabilityTimeZone;
    readonly TimeZone: TimeZoneInfo;
    readonly DaysOfTheWeek: DayOfTheWeek[];
    readonly StartTime: TimeSpan;
    readonly EndTime: TimeSpan;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
 class WorkingPeriod extends ComplexProperty {
    readonly DaysOfWeek: DayOfTheWeek[];
    readonly StartTime: TimeSpan;
    readonly EndTime: TimeSpan;
    constructor();
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(reader: any): boolean;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
 class ByteArrayArray extends ComplexProperty {
    readonly Content: string[];
    InternalToJson(service: ExchangeService): any;
    LoadFromXmlJsObject(jsonCollection: any, serviceExchangeService: any): void;
}
/**
 * Encapsulates information on the changehighlights of a meeting request.
 *
 * @sealed
 */
 class ChangeHighlights extends ComplexProperty {
    /**
     * Gets a value indicating whether the location has changed.
     */
    readonly HasLocationChanged: boolean;
    /**
     * Gets the old location
     */
    readonly Location: string;
    /**
     * Gets a value indicating whether the the start time has changed.
     */
    readonly HasStartTimeChanged: boolean;
    /**
     * Gets the old start date and time of the meeting.
     */
    readonly Start: DateTime;
    /**
     * Gets a value indicating whether the the end time has changed.
     */
    readonly HasEndTimeChanged: boolean;
    /**
     * Gets the old end date and time of the meeting.
     */
    readonly End: DateTime;
}
/**
 * Represents a client token access request
 */
 class ClientAccessTokenRequest extends ComplexProperty {
    /**
     * Gets the App Id.
     */
    readonly Id: string;
    /**
     * Gets token type.
     */
    readonly TokenType: ClientAccessTokenType;
    /**
     * Gets the token scope.
     */
    readonly Scope: string;
    /**
     * Initializes a new instance of the **ClientAccessTokenRequest** class.
     *
     * @param   {string}                    id          id
     * @param   {ClientAccessTokenType}     tokenType   The tokenType.
     * @param   {string}                    scope       The scope.
     */
    constructor(id: string, tokenType: ClientAccessTokenType);
    /**
     * Initializes a new instance of the **ClientAccessTokenRequest** class.
     *
     * @param   {string}                    id          id
     * @param   {ClientAccessTokenType}     tokenType   The tokenType.
     * @param   {string}                    scope       The scope.
     */
    constructor(id: string, tokenType: ClientAccessTokenType, scope: string);
}
/**
 * Represents a app in GetAppManifests response.
 *
 * @sealed
 */
 class ClientApp extends ComplexProperty {
    /**
     * The manifest for the app.
     *
     * internal set
     */
    Manifest: string;
    /**
     * Metadata related to the app.
     *
     * internal set
     */
    Metadata: ClientAppMetadata;
    /**
     * Initializes a new instance of the **ClientApp** class.
     */
    constructor();
}
/**
 * Represents a ClientAppMetadata object.
 *
 * @sealed
 */
 class ClientAppMetadata extends ComplexProperty {
    /**
     * The End node url for the app.
     *
     * @private set
     */
    EndNodeUrl: string;
    /**
     * The action url for the app.
     *
     * @private set
     */
    ActionUrl: string;
    /**
     * The app status for the app.
     *
     * @private set
     */
    AppStatus: string;
    /**
     * Initializes a new instance of the **ClientAppMetadata** class.
     */
    constructor();
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
}
/**
 * Represents the complete name of a contact.
 */
 class CompleteName extends ComplexProperty {
    /**
     * Gets the contact's title.
     */
    readonly Title: string;
    /**
     * Gets the given name (first name) of the contact.
     */
    readonly GivenName: string;
    /**
     * Gets the middle name of the contact.
     */
    readonly MiddleName: string;
    /**
     * Gets the surname (last name) of the contact.
     */
    readonly Surname: string;
    /**
     * Gets the suffix of the contact.
     */
    readonly Suffix: string;
    /**
     * Gets the initials of the contact.
     */
    readonly Initials: string;
    /**
     * Gets the full name of the contact.
     */
    readonly FullName: string;
    /**
     * Gets the nickname of the contact.
     */
    readonly NickName: string;
    /**
     * Gets the Yomi given name (first name) of the contact.
     */
    readonly YomiGivenName: string;
    /**
     * Gets the Yomi surname (last name) of the contact.
     */
    readonly YomiSurname: string;
}
/**
 * Represents a property that can be sent to or retrieved from EWS.
 */
 class ComplexProperty {
    OnChange: ComplexPropertyChangedDelegate[];
    constructor();
    Changed(): void;
    ClearChangeLog(): void;
    InternalLoadFromXmlJsObject(jsObject: any, service: ExchangeService, //xmlNamespace: XmlNamespace, xmlElementName: string,
    readAction: (jsonProperty: any, service: ExchangeService) => void): void;
    InternalValidate(): void;
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    SetFieldValue<T>(field: IRefParam<T>, value: T): void;
    ReadElementsFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    ReadElementsFromXmlJsObjectToPatch(jsonProperty: any, service: ExchangeService): void;
    UpdateFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    Validate(): void;
}
/**
 * Represents a collection of properties that can be sent to and retrieved from EWS.
 *
 * @type <TComplexProperty>   ComplexProperty type.
 */
 abstract class ComplexPropertyCollection<TComplexProperty extends ComplexProperty> extends ComplexProperty implements IEnumerable<TComplexProperty>, ICustomUpdateSerializer {
    ___typeGenerics: string[];
    /**
     * Gets the total number of properties in the collection.
     */
    readonly Count: number;
    /**
     * Gets the property at the specified index.
     *
     * @param   {number}   index   The zero-based index of the property to get.
     * @return  {TComplexProperty}           The property at the specified index.
     */
    _getItem(index: number): TComplexProperty;
    /**
     * Determines whether a specific property is in the collection.
     *
     * @param   {TComplexProperty}   complexProperty   The property to locate in the collection.
     * @return  {boolean}           True if the property was found in the collection, false otherwise.
     */
    Contains(complexProperty: TComplexProperty): boolean;
    /**
     *  Returns an enumerator that iterates through the collection. this case this.items
     */
    GetEnumerator(): TComplexProperty[];
    /**
     * Searches for a specific property and return its zero-based index within the collection.
     *
     * @param   {TComplexProperty}   complexProperty   The property to locate in the collection.
     * @return  {number}                     The zero-based index of the property within the collection.
     */
    IndexOf(complexProperty: TComplexProperty): number;
    /**
     * @private Add complex property.
     *
     * @param   {TComplexProperty}   complexProperty   The complex property.
     * @param   {boolean}   loading           If true, collection is being loaded.
     */
    InternalAdd(complexProperty: TComplexProperty, loading: boolean): void;
}
/**
 * Represents an ContactEntity object.
 */
 class ContactEntity extends ExtractedEntity {
    /**
     * Gets the contact entity PersonName.
     */
    PersonName: string;
    /**
     * Gets the contact entity BusinessName.
     */
    BusinessName: string;
    /**
     * Gets the contact entity PhoneNumbers.
     */
    PhoneNumbers: ContactPhoneEntityCollection;
    /**
     * Gets the contact entity Urls.
     */
    Urls: StringList;
    /**
     * Gets the contact entity EmailAddresses.
     */
    EmailAddresses: StringList;
    /**
     * Gets the contact entity Addresses.
     */
    Addresses: StringList;
    /**
     * Gets the contact entity ContactString.
     */
    ContactString: string;
    /**
     * Initializes a new instance of the **ContactEntity** class.
     */
    constructor();
}
/**
 * Represents a collection of ContactEntity objects.
 */
 class ContactEntityCollection extends ComplexPropertyCollection<ContactEntity> {
}
/**
 * Represents an ContactPhoneEntity object.
 */
 class ContactPhoneEntity extends ComplexProperty {
    /**
     * Gets the phone entity OriginalPhoneString.
     */
    OriginalPhoneString: string;
    /**
     * Gets the phone entity PhoneString.
     */
    PhoneString: string;
    /**
     * Gets the phone entity Type.
     */
    Type: string;
    /**
     * Initializes a new instance of the **ContactPhoneEntity** class.
     */
    constructor();
}
/**
 * Represents a collection of ContactPhoneEntity objects.
 */
 class ContactPhoneEntityCollection extends ComplexPropertyCollection<ContactPhoneEntity> {
}
/**
 * Represents the Id of a Conversation.
 */
 class ConversationId extends ServiceId {
    /**
     * Initializes a new instance of **ConversationId**.
     */
    constructor();
    /**
     * Initializes a new instance of **ConversationId**.
     *
     * @param   {string}   uniqueId   The unique Id used to initialize the **ConversationId**.
     */
    constructor(uniqueId: string);
    /**
     * Gets a string representation of the Conversation Id.
     *
     * @return  {string}      The string representation of the conversation id.
     */
    ToString(): string;
    toString(): string;
}
/**
 * Represents the response to a GetConversationItems operation.
 *
 * @sealed
 */
 class ConversationNode extends ComplexProperty {
    /**
     * Gets or sets the Internet message id of the node.
     */
    InternetMessageId: string;
    /**
     * Gets or sets the Internet message id of the parent node.
     */
    ParentInternetMessageId: string;
    /**
     * Gets or sets the items.
     */
    Items: Item[];
}
/**
 * Represents a collection of conversation items.
 *
 * @sealed
 */
 class ConversationNodeCollection extends ComplexPropertyCollection<ConversationNode> {
}
/**
 *
 *
 * @sealed
 */
 class ConversationRequest extends ComplexProperty implements ISelfValidate {
    /**
     * Gets or sets the conversation id.
     */
    ConversationId: ConversationId;
    /**
     * Gets or sets the sync state representing the current state of the conversation for synchronization purposes.
     */
    SyncState: string;
    /**
     * Initializes a new instance of the **ConversationRequest** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **ConversationRequest** class.
     *
     * @param   {ConversationId}    conversationId   The conversation id.
     * @param   {string}            syncState        State of the sync.
     */
    constructor(conversationId: ConversationId, syncState: string);
}
/**
 *
 *
 * @sealed
 */
 class ConversationResponse extends ComplexProperty {
    /**
     * Gets the conversation id.
     *
     * internal set
     */
    ConversationId: ConversationId;
    /**
     * Gets the sync state.
     *
     * internal set
     */
    SyncState: string;
    /**
     * Gets the conversation nodes.
     *
     * internal set
     */
    ConversationNodes: ConversationNodeCollection;
}
/**
 * Represents an operation to create a new rule.
 *
 * @sealed
 */
 class CreateRuleOperation extends RuleOperation {
    /**
     * Gets or sets the rule to be created.
     */
    Rule: Rule;
    /**
     * Initializes a new instance of the **CreateRuleOperation** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **CreateRuleOperation** class.
     *
     * @param   {Rule}   rule   The inbox rule to create.
     */
    constructor(rule: Rule);
}
/**
 * Represents the permissions of a delegate user.
 *
 * @sealed
 */
 class DelegatePermissions extends ComplexProperty {
    /**
     * Gets or sets the delegate user's permission on the principal's calendar.
     */
    CalendarFolderPermissionLevel: DelegateFolderPermissionLevel;
    /**
     * Gets or sets the delegate user's permission on the principal's tasks folder.
     */
    TasksFolderPermissionLevel: DelegateFolderPermissionLevel;
    /**
     * Gets or sets the delegate user's permission on the principal's inbox.
     */
    InboxFolderPermissionLevel: DelegateFolderPermissionLevel;
    /**
     * Gets or sets the delegate user's permission on the principal's contacts folder.
     */
    ContactsFolderPermissionLevel: DelegateFolderPermissionLevel;
    /**
     * Gets or sets the delegate user's permission on the principal's notes folder.
     */
    NotesFolderPermissionLevel: DelegateFolderPermissionLevel;
    /**
     * Gets or sets the delegate user's permission on the principal's journal folder.
     */
    JournalFolderPermissionLevel: DelegateFolderPermissionLevel;
}
/**
 * Represents a delegate user.
 *
 * @sealed
 */
 class DelegateUser extends ComplexProperty {
    /**
     * Gets the user Id of the delegate user.
     */
    readonly UserId: UserId;
    /**
     * Gets the list of delegate user's permissions.
     */
    readonly Permissions: DelegatePermissions;
    /**
     * Gets or sets a value indicating if the delegate user should receive copies of meeting requests.
     */
    ReceiveCopiesOfMeetingMessages: boolean;
    /**
     * Gets or sets a value indicating if the delegate user should be able to view the principal's private items.
     */
    ViewPrivateItems: boolean;
    /**
     * Initializes a new instance of the **DelegateUser** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **DelegateUser** class.
     *
     * @param   {string}   primarySmtpAddress   The primary SMTP address of the delegate user.
     */
    constructor(primarySmtpAddress: string);
    /**
     * Initializes a new instance of the **DelegateUser** class.
     *
     * @param   {StandardUser}   standardUser   The standard delegate user.
     */
    constructor(standardUser: StandardUser);
}
/**
 * Encapsulates information on the deleted occurrence of a recurring appointment.
 */
 class DeletedOccurrenceInfo extends ComplexProperty {
    /**
     * Gets the original start date and time of the deleted occurrence.
     */
    readonly OriginalStart: DateTime;
}
/**
 * Represents a collection of deleted occurrence objects.
 */
 class DeletedOccurrenceInfoCollection extends ComplexPropertyCollection<DeletedOccurrenceInfo> {
}
/**
 * Represents an operation to delete an existing rule.
 *
 * @sealed
 */
 class DeleteRuleOperation extends RuleOperation {
    /**
     * Gets or sets the Id of the rule to delete.
     */
    RuleId: string;
    /**
     * Initializes a new instance of the **DeleteRuleOperation** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **DeleteRuleOperation** class.
     *
     * @param   {string}   ruleId   The Id of the inbox rule to delete.
     */
    constructor(ruleId: string);
}
/**
 * Represents an entry of a DictionaryProperty object.
 * @remarks All descendants of DictionaryEntryProperty must implement a parameterless constructor. That constructor does not have to be public.
 * @typeparam   {TKey}     The type of the key used by this dictionary.
 * [EditorBrowsable(EditorBrowsableState.Never)]
 */
 class DictionaryEntryProperty<TKey> extends ComplexProperty {
    /** ews-javascript-api specific workaround for inheritance */
    protected keyType: any;
    /**
     * Gets or sets the key.
     * @value   The key.
     */
    Key: TKey;
}
/**
 * Represents a generic dictionary that can be sent to or retrieved from EWS.
 *
 * @typeparam   <TKey>      The type of key.
 * @typeparam   <TEntry>    The type of entry.
 */
 abstract class DictionaryProperty<TKey, TEntry extends DictionaryEntryProperty<TKey>> extends ComplexProperty implements ICustomUpdateSerializer {
    /**
     * Gets the entries.
     *
     * @value   The entries.
     */
    readonly Entries: Dictionary<TKey, TEntry>;
    /**
     * Determines whether this instance contains the specified key.
     *
     * @param   {TKey}      key   The key.
     * @return  {boolean}   true if this instance contains the specified key; otherwise, false.
     */
    Contains(key: TKey): boolean;
    /**
     * Remove entry based on key.
     *
     * @param   {TKey}   key   The key.
     */
    InternalRemove(key: TKey): void;
}
/**
 * Represents an e-mail address.
 */
 class EmailAddress extends ComplexProperty implements ISearchStringProvider {
    /**
     * SMTP routing type.
     */
    static SmtpRoutingType: string;
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
     * ISearchStringProvider.GetSearchString
     *
     * @return  {string}      String representation of instance.
     */
    GetSearchString(): string;
    ReadElementsFromXmlJsObject(reader: any): boolean;
    /**
     * Returns a **string** that represents the current **object**.
     *
     * @return  {string}      A **string** that represents the current **object**.
     */
    ToString(): string;
    toString(): string;
}
/**
 * Represents a collection of e-mail addresses.
 */
 class EmailAddressCollection extends ComplexPropertyCollection<EmailAddress> {
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
     * Tries to get the e-mail address associated with the specified key.
     *
     * @param   {EmailAddressKey}   key            The key.
     * @param   {IOutParam<EmailAddress>}   emailAddress   When this method returns, contains the e-mail address associated with the specified key, if the key is found; otherwise, null. This parameter is passed uninitialized.
     * @return  {boolean}                  true if the Dictionary contains an e-mail address associated with the specified key; otherwise, false.
     */
    TryGetValue(key: EmailAddressKey, emailAddress: IOutParam<EmailAddress>): boolean;
}
/**
 * Represents an EmailAddressEntity object.
 */
 class EmailAddressEntity extends ExtractedEntity {
    /**
     * Gets the meeting suggestion Location.
     */
    EmailAddress: string;
}
/**
 * Represents a collection of EmailAddressEntity objects.
 */
 class EmailAddressEntityCollection extends ComplexPropertyCollection<EmailAddressEntity> {
}
 class EmailAddressEntry extends DictionaryEntryProperty<EmailAddressKey> {
    EmailAddress: EmailAddress;
    constructor();
    constructor(key: EmailAddressKey, emailAddress: EmailAddress);
    EmailAddressChanged(complexProperty: ComplexProperty): void;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
/**
 * Represents an EmailUserEntity object.
 */
 class EmailUserEntity extends ComplexProperty {
    /**
     * Gets the EmailUser entity Name.
     */
    Name: string;
    /**
     * Gets the EmailUser entity UserId.
     */
    UserId: string;
    /**
     * Initializes a new instance of the **EmailUserEntity** class.
     */
    constructor();
}
/**
 * Represents a collection of EmailUserEntity objects.
 */
 class EmailUserEntityCollection extends ComplexPropertyCollection<EmailUserEntity> {
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
}
 class ExtendedProperty extends ComplexProperty {
    readonly PropertyDefinition: ExtendedPropertyDefinition;
    Value: any;
    constructor(propertyDefinition?: ExtendedPropertyDefinition);
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetStringValue(): string;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
 class ExtendedPropertyCollection extends ComplexPropertyCollection<ExtendedProperty> implements ICustomUpdateSerializer {
    CreateComplexProperty(xmlElementName: string): ExtendedProperty;
    CreateDefaultComplexProperty(): ExtendedProperty;
    GetCollectionItemXmlElementName(complexProperty: ExtendedProperty): string;
    GetOrAddExtendedProperty(propertyDefinition: ExtendedPropertyDefinition): ExtendedProperty;
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    RemoveExtendedProperty(propertyDefinition: ExtendedPropertyDefinition): boolean;
    SetExtendedProperty(propertyDefinition: ExtendedPropertyDefinition, value: any): void;
    TryGetProperty(propertyDefinition: ExtendedPropertyDefinition, extendedProperty: IOutParam<ExtendedProperty>): boolean;
    TryGetValue<T>(propertyDefinition: ExtendedPropertyDefinition, propertyValue: IOutParam<T>): boolean;
}
/**
 * Represents an ExtractedEntity object.
 */
 abstract class ExtractedEntity extends ComplexProperty {
    /**
     * Gets the Position.
     */
    Position: EmailPosition;
    /**
     * Initializes a new instance of the **ExtractedEntity** class.
     */
    constructor();
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
    ReadElementsFromXmlJsObjectToPatch(reader: any): boolean;
}
/**
 * Encapsulates information on the occurrence of a recurring appointment.
 */
 class Flag extends ComplexProperty {
    /**
     * Gets or sets the flag status.
     */
    FlagStatus: ItemFlagStatus;
    /**
     * Gets the start date.
     */
    StartDate: DateTime;
    /**
     * Gets the due date.
     */
    DueDate: DateTime;
    /**
     * Gets the complete date.
     */
    CompleteDate: DateTime;
    /**
     * Initializes a new instance of the **Flag** class.
     */
    constructor();
}
/**
 * Represents the Id of a folder.
 *
 * @class FolderId
 * @extends {ServiceId}
 */
 class FolderId extends ServiceId {
    /**
     * Gets the name of the folder associated with the folder Id. Name and Id are mutually exclusive; if one is set, the other is null.
     *
     * @readonly
     * @type {WellKnownFolderName}
     */
    readonly FolderName: WellKnownFolderName;
    /**
     * Gets the mailbox of the folder. Mailbox is only set when FolderName is set.
     *
     * @readonly
     * @type {Mailbox}
     */
    readonly Mailbox: Mailbox;
    /**
     * True if this instance is valid, false otherthise.
     *
     * @value   *true* if this instance is valid; otherwise, *false*.
     */
    readonly IsValid: boolean;
    /**
     * Initializes a new instance of the **FolderId** class. Use this constructor to link this FolderId to an existing folder that you have the unique Id of.
    *
    * @param   {String} uniqueId The unique Id used to initialize the FolderId.
    */
    constructor(uniqueId: string);
    /**
     * Initializes a new instance of the **FolderId** class. Use this constructor to link this FolderId to a well known folder (e.g. Inbox, Calendar or Contacts).
    *
    * @param   {WellKnownFolderName}    folderName  The folder name used to initialize the FolderId.
    */
    constructor(folderName: WellKnownFolderName);
    /**
     * Initializes a new instance of the **FolderId** class. Use this constructor to link this FolderId to a well known folder (e.g. Inbox, Calendar or Contacts) in a specific mailbox.
    *
    * @param   {WellKnownFolderName}    folderName   The folder name used to initialize the FolderId.
    * @param   {Mailbox}                mailbox      The mailbox used to initialize the FolderId.
    */
    constructor(folderName: WellKnownFolderName, mailbox: Mailbox);
    /**
     * Determines whether the specified *FolderId* is equal to the current *FolderId*.
     * We do not consider the ChangeKey for FolderId.Equals.
     *
     * @param   {any}       obj   The  to compare with the current .
     * @return  {boolean}   true if the specified  is equal to the current ; otherwise, false.
     */
    Equals(obj: any): boolean;
    /**
     * Returns a *String* that represents the current *FolderId*.
     *
     * @return  {string}      A *String* that represents the current *FolderId*.
     */
    ToString(): string;
}
/**
 * Represents a collection of folder Ids.
 *
 * @sealed
 */
 class FolderIdCollection extends ComplexPropertyCollection<FolderId> {
    /**
     * Adds a folder Id to the collection.
     *
     * @param   {FolderId}   folderId   The folder Id to add.
     */
    Add(folderId: FolderId): void;
    /**
     * Adds a well-known folder to the collection.
     *
     * @param   {WellKnownFolderName}   folderName   The well known folder to add.
     * @return  {FolderId}      A FolderId encapsulating the specified Id.
     */
    Add(folderName: WellKnownFolderName): FolderId;
    /**
     * Clears the collection.
     */
    Clear(): void;
    /**
     * Removes the specified folder Id from the collection.
     *
     * @param   {FolderId}   folderId   The folder Id to remove from the collection.
     * @return  {boolean}    True if the folder id was successfully removed from the collection, false otherwise.
     */
    Remove(folderId: FolderId): boolean;
    /**
     * Removes the specified well-known folder from the collection.
     *
     * @param   {WellKnownFolderName}   folderName   The well-knwon folder to remove from the collection.
     * @return  {boolean}               True if the well-known folder was successfully removed from the collection, false otherwise.
     */
    Remove(folderName: WellKnownFolderName): boolean;
    /**
     * Removes the folder Id at the specified index.
     *
     * @param   {number}   index   The zero-based index of the folder Id to remove.
     */
    RemoveAt(index: number): void;
}
/**
 * Represents a permission on a folder.
 *
 * @sealed
 */
 class FolderPermission extends ComplexProperty {
    /**
     * Gets the Id of the user the permission applies to.
     */
    UserId: UserId;
    /**
     * Gets or sets a value indicating whether the user can create new items.
     */
    CanCreateItems: boolean;
    /**
     * Gets or sets a value indicating whether the user can create sub-folders.
     */
    CanCreateSubFolders: boolean;
    /**
     * Gets or sets a value indicating whether the user owns the folder.
     */
    IsFolderOwner: boolean;
    /**
     * Gets or sets a value indicating whether the folder is visible to the user.
     */
    IsFolderVisible: boolean;
    /**
     * Gets or sets a value indicating whether the user is a contact for the folder.
     */
    IsFolderContact: boolean;
    /**
     * Gets or sets a value indicating if/how the user can edit existing items.
     */
    EditItems: PermissionScope;
    /**
     * Gets or sets a value indicating if/how the user can delete existing items.
     */
    DeleteItems: PermissionScope;
    /**
     * Gets or sets the read items access permission.
     */
    ReadItems: FolderPermissionReadAccess;
    /**
     * Gets or sets the permission level.
     */
    PermissionLevel: FolderPermissionLevel;
    /**
     * Gets the permission level that Outlook would display for this folder permission.
     */
    readonly DisplayPermissionLevel: FolderPermissionLevel;
    /**
     * Initializes a new instance of the **FolderPermission** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **FolderPermission** class.
     *
     * @param   {UserId}                    userId            The Id of the user  the permission applies to.
     * @param   {FolderPermissionLevel}     permissionLevel   The level of the permission.
     */
    constructor(userId: UserId, permissionLevel: FolderPermissionLevel);
    /**
     * Initializes a new instance of the **FolderPermission** class.
     *
     * @param   {string}                    primarySmtpAddress  The primary SMTP address of the user the permission applies to.
     * @param   {FolderPermissionLevel}     permissionLevel     The level of the permission.
     */
    constructor(primarySmtpAddress: string, permissionLevel: FolderPermissionLevel);
    /**
     * Initializes a new instance of the **FolderPermission** class.
     *
     * @param   {StandardUser}              standardUser        The standard user the permission applies to.
     * @param   {FolderPermissionLevel}     permissionLevel     The level of the permission.
     */
    constructor(standardUser: StandardUser, permissionLevel: FolderPermissionLevel);
}
/**
 * Represents a collection of folder permissions.
 *
 * @sealed
 */
 class FolderPermissionCollection extends ComplexPropertyCollection<FolderPermission> {
    /**
     * Gets a list of unknown user Ids in the collection.
     */
    readonly UnknownEntries: string[];
    /**
     * Initializes a new instance of the **FolderPermissionCollection** class.
     *
     * @param   {Folder}   owner   The folder owner.
     */
    constructor(owner: Folder);
    /**
     * Adds a permission to the collection.
     *
     * @param   {FolderPermission}   permission   The permission to add.
     */
    Add(permission: FolderPermission): void;
    /**
     * Adds the specified permissions to the collection.
     *
     * @param   {FolderPermission[]}   permissions   The permissions to add.
     */
    AddRange(permissions: FolderPermission[]): void;
    /**
     * Clears this collection.
     */
    Clear(): void;
    /**
     * Removes a permission from the collection.
     *
     * @param   {FolderPermission}  permission   The permission to remove.
     * @return  {boolean}           True if the folder permission was successfully removed from the collection, false otherwise.
     */
    Remove(permission: FolderPermission): boolean;
    /**
     * Removes a permission from the collection.
     *
     * @param   {number}   index   The zero-based index of the permission to remove.
     */
    RemoveAt(index: number): void;
}
/**
 * Represents a group member
 * [RequiredServerVersion(ExchangeVersion.Exchange2010)] ** needs implementation
 */
 class GroupMember extends ComplexProperty {
    /**
     * ets the key of the member.
     */
    readonly Key: string;
    /**
     * Gets the address information of the member.
     */
    /**
    * @internal Sets the address information of the member.
    */
    AddressInformation: EmailAddress;
    /**
     * Gets the status of the member.
     */
    readonly Status: MemberStatus;
    /**
     * Initializes a new instance of the **GroupMember** class.
     *
     */
    constructor();
    /**
     * Initializes a new instance of the **GroupMember** class.
     *
     * @param   {string}   smtpAddress   The SMTP address of the member.
     */
    constructor(smtpAddress: string);
    /**
     * Initializes a new instance of the **GroupMember** class.
     *
     * @param   {ItemId}   contactGroupId   The Id of the contact group to link the member to.
     */
    constructor(contactGroupId: ItemId);
    /**
     * Initializes a new instance of the **GroupMember** class.
     *
     * @param   {EmailAddress}   addressInformation   The e-mail address of the member.
     */
    constructor(addressInformation: EmailAddress);
    /**
     * Initializes a new instance of the **GroupMember** class.
     *
     * @param   {string}   smtpAddress   The SMTP address of the member.
     * @param   {MailboxType}   mailboxType   The mailbox type of the member.
     */
    constructor(smtpAddress: string, mailboxType: MailboxType);
    /**
     * Initializes a new instance of the **GroupMember** class.
     *
     * @param   {string}   name          The name of the one-off member.
     * @param   {string}   smtpAddress   The SMTP address of the one-off member.
     */
    constructor(name: string, smtpAddress: string);
    /**
     * Initializes a new instance of the **GroupMember** class.
     *
     * @param   {ItemId}   contactId       The Id of the contact member.
     * @param   {string}   addressToLink   The Id of the contact to link the member to.
     */
    constructor(contactId: ItemId, addressToLink: string);
    /**
     * Initializes a new instance of the **GroupMember** class from a Contact instance indexed by the specified key.
     *
     * @param   {Contact}           contact           The contact to link to.
     * @param   {EmailAddressKey}   emailAddressKey   The contact's e-mail address to link to.
     */
    constructor(contact: Contact, emailAddressKey: EmailAddressKey);
    /**
     * Initializes a new instance of the **GroupMember** class.
     *
     * @param   {string}   address       The address of the member.
     * @param   {string}   routingType   The routing type of the address.
     * @param   {MailboxType}   mailboxType   The mailbox type of the member.
     */
    constructor(address: string, routingType: string, mailboxType: MailboxType);
    /**
     * Initializes a new instance of the **GroupMember** class.
     *
     * @param   {string}   name          The name of the one-off member.
     * @param   {string}   address       The address of the one-off member.
     * @param   {string}   routingType   The routing type of the address.
     */
    constructor(name: string, address: string, routingType: string);
}
/**
 * Represents a collection of members of GroupMember type.
 * @sealed
 */
 class GroupMemberCollection extends ComplexPropertyCollection<GroupMember> implements ICustomUpdateSerializer {
    /**
     * Initializes a new instance of the  class.
     *
     */
    constructor();
    /**
     * Adds a member to the collection.
     *
     * @param   {GroupMember}   member   The member to add.
     */
    Add(member: GroupMember): void;
    /**
     * Adds a member that is linked to a specific e-mail address of a contact.
     *
     * @param   {Contact}   contact           The contact to link to.
     * @param   {EmailAddressKey}   emailAddressKey   The contact's e-mail address to link to.
     */
    AddContactEmailAddress(contact: Contact, emailAddressKey: EmailAddressKey): void;
    /**
     * Adds a member linked to a Contact Group.
     *
     * @param   {ItemId}   contactGroupId   The Id of the contact group.
     */
    AddContactGroup(contactGroupId: ItemId): void;
    /**
     * Adds a member linked to an Active Directory contact.
     *
     * @param   {string}   smtpAddress   The SMTP address of the Active Directory contact.
     */
    AddDirectoryContact(smtpAddress: string): void;
    /**
     * Adds a member linked to an Active Directory contact.
     *
     * @param   {string}   address       The address of the Active Directory contact.
     * @param   {string}   routingType   The routing type of the address.
     */
    AddDirectoryContact(address: string, routingType: string): void;
    /**
     * Adds a member linked to a mail-enabled Public Folder.
     *
     * @param   {string}   smtpAddress   The SMTP address of the mail-enabled Public Folder.
     */
    AddDirectoryPublicFolder(smtpAddress: string): void;
    /**
     * Adds a member linked to an Active Directory user.
     *
     * @param   {string}   smtpAddress   The SMTP address of the member.
     */
    AddDirectoryUser(smtpAddress: string): void;
    /**
     * Adds a member linked to an Active Directory user.
     *
     * @param   {string}   address       The address of the member.
     * @param   {string}   routingType   The routing type of the address.
     */
    AddDirectoryUser(address: string, routingType: string): void;
    /**
     * Adds a one-off member.
     *
     * @param   {string}   displayName   The display name of the member.
     * @param   {string}   smtpAddress   The SMTP address of the member.
     */
    AddOneOff(displayName: string, smtpAddress: string): void;
    /**
     * Adds a one-off member.
     *
     * @param   {string}   displayName   The display name of the member.
     * @param   {string}   address       The address of the member.
     * @param   {string}   routingType   The routing type of the address.
     */
    AddOneOff(displayName: string, address: string, routingType: string): void;
    /**
     * Adds a member linked to a contact's first available e-mail address.
     *
     * @param   {ItemId}   contactId   The Id of the contact.
     */
    AddPersonalContact(contactId: ItemId): void;
    /**
     * Adds a member linked to a specific contact's e-mail address.
     *
     * @param   {ItemId}   contactId       The Id of the contact.
     * @param   {string}   addressToLink   The contact's address to link to.
     */
    AddPersonalContact(contactId: ItemId, addressToLink: string): void;
    /**
     * Adds a member linked to a Public Group.
     *
     * @param   {string}   smtpAddress   The SMTP address of the Public Group.
     */
    AddPublicGroup(smtpAddress: string): void;
    /**
     * Adds multiple members to the collection.
     *
     * @param   {GroupMember[]}   members   The members to add.
     */
    AddRange(members: GroupMember[]): void;
    /**
     * Clears the collection.
     */
    Clear(): void;
    /**
     * Finds the member with the specified key in the collection.
     * Members that have not yet been saved do not have a key.
     *
     * @param   {}   key   The key of the member to find.
     * @return  {}         The member with the specified key.
     */
    Find(key: string): GroupMember;
    /**
     * Removes a member from the collection.
     *
     * @param   {GroupMember}   member   The member to remove.
     * @return  {boolean}       True if the group member was successfully removed from the collection, false otherwise.
     */
    Remove(member: GroupMember): boolean;
    /**
     * Removes a member at the specified index.
     *
     * @param   {number}   index   The index of the member to remove.
     */
    RemoveAt(index: number): void;
}
/**
 * Represents an AQS highlight term.
 *
 * @sealed
 */
 class HighlightTerm extends ComplexProperty {
    /**
     * Gets term scope.
     */
    readonly Scope: string;
    /**
     * Gets term value.
     */
    readonly Value: string;
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
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
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
     * Obtains a string representation of the header.
     *
     * @return  {string}      The string representation of the header.
     */
    ToString(): string;
    toString(): string;
}
/**
 * Represents a collection of Internet message headers.
 */
 class InternetMessageHeaderCollection extends ComplexPropertyCollection<InternetMessageHeader> {
    /**
     * Find a specific header in the collection.
     *
     * @param   {string}   name   The name of the header to locate.
     * @return  {InternetMessageHeader}     An InternetMessageHeader representing the header with the specified name; null if no header with the specified name was found.
     */
    Find(name: string): InternetMessageHeader;
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
     * Loads this attachment.
     *
     * @param   {PropertyDefinitionBase[]}   additionalProperties   The optional additional properties to load.
     */
    Load(additionalProperties?: PropertyDefinitionBase[]): Promise<void>;
    /**
     * Loads this attachment.
     *
     * @param   {BodyType}   bodyType               The body type to load.
     * @param   {PropertyDefinitionBase[]}   additionalProperties   The optional additional properties to load.
     */
    Load(bodyType?: BodyType, additionalProperties?: PropertyDefinitionBase[]): Promise<void>;
    ReadElementsFromXmlJsObjectToPatch(reader: any): boolean;
}
/**
 * Represents a strongly typed item attachment. **Workaround of ItemAttachment<TItem>** - not allowed in typescript to have two class, one generic and one non-generic
 */
 class ItemAttachmentOf<TItem extends Item> extends ItemAttachment {
    /**
     * Gets the item associated with the attachment.
     */
    Item: TItem;
}
/**
 * Represents a collection of items.
 */
 class ItemCollection<TItem extends Item> extends ComplexProperty {
    __implements: string[];
    /**
     * Gets the total number of items in the collection.
     */
    readonly Count: number;
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
}
/**
 * Represents the Id of an Exchange item.
 *
 * @class ItemId
 * @extends {ServiceId}
 */
 class ItemId extends ServiceId {
    /**
     * Initializes a new instance of the **ItemId**.
     */
    constructor();
    /**
     * Initializes a new instance of the **ItemId**.
     *
     * @param   {String} uniqueId   The unique Id used to initialize the ItemId
     */
    constructor(uniqueId: string);
}
/**
 * Represents a collection of item Ids.
 *
 * @sealed
 */
 class ItemIdCollection extends ComplexPropertyCollection<ItemId> {
}
/**
 * Represents a mailbox reference.
 */
 class Mailbox extends ComplexProperty implements ISearchStringProvider {
    /**
     * True if this instance is valid, false otherthise.
     *
     * @value   *true* if this instance is valid; otherwise, *false*.
     */
    readonly IsValid: boolean;
    /**
     * Gets or sets the address used to refer to the user mailbox.
     */
    Address: string;
    /**
     * Gets or sets the routing type of the address used to refer to the user mailbox.
     */
    RoutingType: string;
    /**
     * Initializes a new instance of the **Mailbox** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **Mailbox** class.
     *
     * @param   {string}   smtpAddress   The primary SMTP address of the mailbox.
     */
    constructor(smtpAddress: string);
    /**
     * Initializes a new instance of the **Mailbox** class.
     *
     * @param   {string}   address       The address used to reference the user mailbox.
     * @param   {string}   routingType   The routing type of the address used to reference the user mailbox.
     */
    constructor(address: string, routingType: string);
    /**
     * Determines whether the specified  is equal to the current .
     *
     * @param   {any}   obj   The  to compare with the current .
     * @return  {boolean}       true if the specified  is equal to the current ; otherwise, false.
     *
     * @exception   {NullReferenceException}    The **obj** parameter is null.
     */
    Equals(obj: any): boolean;
    /**
     * Returns a  that represents the current .
     *
     * @return  {string}      A **String** that represents the current **Object**.
     */
    ToString(): string;
    toString(): string;
    /**
     * Get a string representation for using this instance in a search filter.
     * ISearchStringProvider.GetSearchString
     *
     * @return  {string}      String representation of instance.
     */
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
}
/**
 * Represents an MeetingSuggestion object.
 */
 class MeetingSuggestion extends ExtractedEntity {
    /**
     * Gets the meeting suggestion Attendees.
     */
    Attendees: EmailUserEntityCollection;
    /**
     * Gets the meeting suggestion Location.
     */
    Location: string;
    /**
     * Gets the meeting suggestion Subject.
     */
    Subject: string;
    /**
     * Gets the meeting suggestion MeetingString.
     */
    MeetingString: string;
    /**
     * Gets the meeting suggestion StartTime.
     */
    StartTime: DateTime;
    /**
     * Gets the meeting suggestion EndTime.
     */
    EndTime: DateTime;
}
/**
 * Represents a collection of MeetingSuggestion objects.
 */
 class MeetingSuggestionCollection extends ComplexPropertyCollection<MeetingSuggestion> {
} class MessageBody extends ComplexProperty {
    BodyType: BodyType;
    Text: string;
    constructor();
    constructor(text: string);
    constructor(bodyType: BodyType, text: string);
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void;
    ToString(): string;
}
/**
 * Represents the MIME content of an item.
 */
 class MimeContent extends MimeContentBase {
    /**
     * Initializes a new instance of the **MimeContent** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **MimeContent** class.
     *
     * @param   {string}   characterSet   The character set of the content.
     * @param   {string}   content        The content.
     */
    constructor(characterSet: string, content: string);
    /**
     * Returns a **String** that represents the current **Object**.
     *
     * @return  {string}      A **String** that represents the current **Object**.
     */
    ToString(): string;
    toString(): string;
}
/**
 * Represents the MIME content of an item.
 */
 abstract class MimeContentBase extends ComplexProperty {
    /**
     * to set XMLElementName when reading XML JsObject value.
     */
    protected xmlElementName: string;
    /**
     * Gets or sets the character set of the content.
     */
    CharacterSet: string;
    /**
     * Gets or sets the content.  - ews-javascript-api this is base64 value without encoding applied.
     */
    Content: string;
}
/**
 * Represents the MIME content of an item.
 */
 class MimeContentUTF8 extends MimeContentBase {
    /**
     * Initializes a new instance of the **MimeContentUTF8** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **MimeContentUTF8** class.
     *
     * @param   {string}   characterSet   The character set of the content.
     * @param   {string}   content        The content.
     */
    constructor(characterSet: string);
    /**
     * Returns a **String** that represents the current **Object**.
     *
     * @return  {string}      A **String** that represents the current **Object**.
     */
    ToString(): string;
    toString(): string;
}
/**
 * Represents the normalized body of an item - the HTML fragment representation of the body.
 */
 class NormalizedBody extends ComplexProperty {
    /**
     * Gets the type of the normalized body's text.
     */
    BodyType: BodyType;
    /**
     * Gets the text of the normalized body.
     */
    Text: string;
    /**
     * Gets whether the body is truncated.
     */
    IsTruncated: boolean;
    /**
     * Initializes a new instance of the **NormalizedBody** class.
     */
    constructor();
    /**
     * Returns a **String** that represents the current **Object**.
     *
     * @return  {string}      A **String** that represents the current **Object**.
     */
    ToString(): string;
    toString(): string;
}
/**
 * Encapsulates information on the occurrence of a recurring appointment.
 */
 class OccurrenceInfo extends ComplexProperty {
    /**
     * Gets the Id of the occurrence.
     */
    readonly ItemId: ItemId;
    /**
     * Gets the start date and time of the occurrence.
     */
    readonly Start: DateTime;
    /**
     * Gets the end date and time of the occurrence.
     */
    readonly End: DateTime;
    /**
     * Gets the original start date and time of the occurrence.
     */
    readonly OriginalStart: DateTime;
}
/**
 * Represents a collection of OccurrenceInfo objects.
 */
 class OccurrenceInfoCollection extends ComplexPropertyCollection<OccurrenceInfo> {
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
}
/**
 * Represents an PhoneEntity object.
 */
 class PhoneEntity extends ExtractedEntity {
    /**
     * Gets the phone entity OriginalPhoneString.
     */
    OriginalPhoneString: string;
    /**
     * Gets the phone entity PhoneString.
     */
    PhoneString: string;
    /**
     * Gets the phone entity Type.
     */
    Type: string;
}
/**
 * Represents a collection of PhoneEntity objects.
 */
 class PhoneEntityCollection extends ComplexPropertyCollection<PhoneEntity> {
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
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
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
    InternalWriteDeleteUpdateToJson(ewsObject: ServiceObject, propertyName: string, updates: any[]): void;
    LoadFromJson(jsonProperty: any, service: ExchangeService): void;
    PropertyBagChanged(): void;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
    WriteDeleteUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, updates: any[]): boolean;
    WriteSetUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition, updates: any[]): boolean;
}
/**
 * Represents the policy tag of an item or folder.
 */
 class PolicyTag extends RetentionTagBase {
    /**
     * Initializes a new instance of the **PolicyTag** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **PolicyTag** class.
     *
     * @param   {boolean}   isExplicit    Is explicit.
     * @param   {Guid}      retentionId   Retention id.
     */
    constructor(isExplicit: boolean, retentionId: Guid);
}
/**
 * Represents a collection of DayOfTheWeek values.
 */
 class DayOfTheWeekCollection extends ComplexProperty implements IEnumerable<DayOfTheWeek> {
    readonly Count: number;
    /**
     * Gets the DayOfTheWeek at a specific index in the collection.
     *
     * @param   {number}        index   Index
     * @return  {DayOfTheWeek}  DayOfTheWeek at index
     */
    _getItem(index: number): DayOfTheWeek;
    /**
     * Adds a day to the collection if it is not already present.
     *
     * @param   {DayOfTheWeek}   dayOfTheWeek   The day to add.
     */
    Add(dayOfTheWeek: DayOfTheWeek): void;
    /**
     * Adds multiple days to the collection if they are not already present.
     *
     * @param   {DayOfTheWeek[]}   daysOfTheWeek   The days to add.
     */
    AddRange(daysOfTheWeek: DayOfTheWeek[]): void;
    /**
     * Clears the collection.
     */
    Clear(): void;
    /**
     *  Returns an enumerator that iterates through the collection. this case this.items
     */
    GetEnumerator(): DayOfTheWeek[];
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
}
/**
 * Represents a recurrence pattern, as used by Appointment and Task items.
 */
 class Recurrence extends ComplexProperty {
    startDate: DateTime;
    numberOfOccurrences: number;
    endDate: DateTime;
    /**
     * Gets or sets the date and time when the recurrence start.
     */
    StartDate: DateTime;
    /**
     * Gets a value indicating whether the pattern has a fixed number of occurrences or an end date.
     */
    readonly HasEnd: boolean;
    /**
     * Gets or sets the number of occurrences after which the recurrence ends. Setting NumberOfOccurrences resets EndDate.
     */
    NumberOfOccurrences: number;
    /**
     * Gets or sets the date after which the recurrence ends. Setting EndDate resets NumberOfOccurrences.
     */
    EndDate: DateTime;
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
     * Compares two objects by converting them to JSON and comparing their string values
     *
     * @param   {Recurrence}    otherRecurrence   object to compare to
     * @return  {boolean}       true if the objects serialize to the same string
     */
    IsSame(otherRecurrence: Recurrence): boolean;
    /**
     * Sets up this recurrence so that it never ends. Calling NeverEnds is equivalent to setting both NumberOfOccurrences and EndDate to null.
     */
    NeverEnds(): void;
}
 module Recurrence {
    var DailyPattern: new () => DailyPattern;
    var DailyRegenerationPattern: new () => DailyRegenerationPattern;
    var IntervalPattern: new () => IntervalPattern;
    var MonthlyPattern: new () => MonthlyPattern;
    var MonthlyRegenerationPattern: new () => MonthlyRegenerationPattern;
    var RelativeMonthlyPattern: new () => RelativeMonthlyPattern;
    var RelativeYearlyPattern: new () => RelativeYearlyPattern;
    var WeeklyPattern: new () => WeeklyPattern;
    var WeeklyRegenerationPattern: new () => WeeklyRegenerationPattern;
    var YearlyPattern: new () => YearlyPattern;
    var YearlyRegenerationPattern: new () => YearlyRegenerationPattern;
}
/**
 * Represents a recurrence pattern where each occurrence happens a specific number of days after the previous one.
 */
 class DailyPattern extends IntervalPattern {
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
     * Gets a value indicating whether this instance is a regeneration pattern.
     *
     * @value   *true* if this instance is a regeneration pattern; otherwise, *false*.</value>
     */
    readonly IsRegenerationPattern: boolean;
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
}
/**
 * Represents a recurrence pattern where each occurrence happens on a specific day a specific number of months after the previous one.
 */
 class MonthlyPattern extends IntervalPattern {
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
}
/**
 * Represents a regeneration pattern, as used with recurring tasks, where each occurrence happens a specified number of months after the previous one is completed.
 */
 class MonthlyRegenerationPattern extends IntervalPattern {
    /**
     * Gets a value indicating whether this instance is a regeneration pattern.
     *
     * @value   *true* if this instance is a regeneration pattern; otherwise, *false*.</value>
     */
    readonly IsRegenerationPattern: boolean;
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
}
/**
 * Represents a recurrence pattern where each occurrence happens on a relative day every year.
 */
 class RelativeYearlyPattern extends Recurrence {
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
}
/**
 * Represents a recurrence pattern where each occurrence happens on specific days a specific number of weeks after the previous one.
 */
 class WeeklyPattern extends IntervalPattern {
    /**
     * Gets the list of the days of the week when occurrences happen.
     */
    readonly DaysOfTheWeek: DayOfTheWeekCollection;
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
}
/**
 * Represents a regeneration pattern, as used with recurring tasks, where each occurrence happens a specified number of weeks after the previous one is completed.
 */
 class WeeklyRegenerationPattern extends IntervalPattern {
    /**
     * Gets a value indicating whether this instance is a regeneration pattern.
     *
     * @value   *true* if this instance is a regeneration pattern; otherwise, *false*.</value>
     */
    readonly IsRegenerationPattern: boolean;
    /**
     * Initializes a new instance of the **WeeklyRegenerationPattern** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **WeeklyRegenerationPattern** class.
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
}
/**
 * Represents a regeneration pattern, as used with recurring tasks, where each occurrence happens a specified number of years after the previous one is completed.
 */
 class YearlyRegenerationPattern extends IntervalPattern {
    /**
     * Gets a value indicating whether this instance is a regeneration pattern.
     *
     * @value   *true* if this instance is a regeneration pattern; otherwise, *false*.</value>
     */
    readonly IsRegenerationPattern: boolean;
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
 class RecurringAppointmentMasterId extends ItemId {
    constructor(occurrenceId: string);
    GetXmlElementName(): string;
}
/**
 * Represents the retention tag of an item.
 */
 class RetentionTagBase extends ComplexProperty {
    /**
     * Gets or sets if the tag is explicit.
     */
    IsExplicit: boolean;
    /**
     * Gets or sets the retention id.
     */
    RetentionId: Guid;
    /**
     * Initializes a new instance of the **RetentionTagBase** class.
     *
     * @param {string}  xmlElementName   Xml element name.
     */
    constructor(xmlElementName: string);
    /**
     * Returns a **String** that represents the current **Object**.
     *
     * @return  {string}      A **String** that represents the current **Object**.
     */
    ToString(): string;
    toString(): string;
}
/**
 * Represents a rule that automatically handles incoming messages.
 * A rule consists of a set of conditions and exceptions that determine whether or not a set of actions should be executed on incoming messages.
 *
 * @sealed
 */
 class Rule extends ComplexProperty {
    /**
     * Gets or sets the Id of this rule.
     */
    Id: string;
    /**
     * Gets or sets the name of this rule as it should be displayed to the user.
     */
    DisplayName: string;
    /**
     * Gets or sets the priority of this rule, which determines its execution order.
     */
    Priority: number;
    /**
     * Gets or sets a value indicating whether this rule is enabled.
     */
    IsEnabled: boolean;
    /**
     * Gets a value indicating whether this rule can be modified via EWS. If IsNotSupported is true, the rule cannot be modified via EWS.
     */
    readonly IsNotSupported: boolean;
    /**
     * Gets or sets a value indicating whether this rule has errors. A rule that is in error cannot be processed unless it is updated and the error is corrected.
     */
    IsInError: boolean;
    /**
     * Gets the conditions that determine whether or not this rule should be executed against incoming messages.
     */
    readonly Conditions: RulePredicates;
    /**
     * Gets the actions that should be executed against incoming messages if the conditions evaluate as true.
     */
    readonly Actions: RuleActions;
    /**
     * Gets the exceptions that determine if this rule should be skipped even if its conditions evaluate to true.
     */
    readonly Exceptions: RulePredicates;
    /**
     * Initializes a new instance of the **Rule** class.
     */
    constructor();
}
/**
 * Represents the set of actions available for a rule.
 *
 * @sealed
 */
 class RuleActions extends ComplexProperty {
    /**
     * Gets the categories that should be stamped on incoming messages.
     * To disable stamping incoming messages with categories, set AssignCategories to null.
     */
    readonly AssignCategories: StringList;
    /**
     * Gets or sets the Id of the folder incoming messages should be copied to.
     * To disable copying incoming messages to a folder, set CopyToFolder to null.
     */
    CopyToFolder: FolderId;
    /**
     * Gets or sets a value indicating whether incoming messages should be automatically moved to the Deleted Items folder.
     */
    Delete: boolean;
    /**
     * Gets the e-mail addresses to which incoming messages should be forwarded as attachments.
     * To disable forwarding incoming messages as attachments, empty the ForwardAsAttachmentToRecipients list.
     */
    readonly ForwardAsAttachmentToRecipients: EmailAddressCollection;
    /**
     * Gets the e-mail addresses to which incoming messages should be forwarded.
     * To disable forwarding incoming messages, empty the ForwardToRecipients list.
     */
    readonly ForwardToRecipients: EmailAddressCollection;
    /**
     * @Nullable Gets or sets the importance that should be stamped on incoming messages.
     * To disable the stamping of incoming messages with an importance, set MarkImportance to null.
     */
    MarkImportance: Importance;
    /**
     * Gets or sets a value indicating whether incoming messages should be marked as read.
     */
    MarkAsRead: boolean;
    /**
     * Gets or sets the Id of the folder to which incoming messages should be moved.
     * To disable the moving of incoming messages to a folder, set CopyToFolder to null.
     */
    MoveToFolder: FolderId;
    /**
     * Gets or sets a value indicating whether incoming messages should be permanently deleted. When a message is permanently deleted, it is never saved into the recipient's mailbox. To delete a message after it has been saved into the recipient's mailbox, use the Delete action.
     */
    PermanentDelete: boolean;
    /**
     * Gets the e-mail addresses to which incoming messages should be redirecteded.
     * To disable redirection of incoming messages, empty the RedirectToRecipients list. Unlike forwarded mail, redirected mail maintains the original sender and recipients.
     */
    readonly RedirectToRecipients: EmailAddressCollection;
    /**
     * Gets the phone numbers to which an SMS alert should be sent.
     * To disable sending SMS alerts for incoming messages, empty the SendSMSAlertToRecipients list.
     */
    readonly SendSMSAlertToRecipients: MobilePhone[];
    /**
     * Gets or sets the Id of the template message that should be sent as a reply to incoming messages.
     * To disable automatic replies, set ServerReplyWithMessage to null.
     */
    ServerReplyWithMessage: ItemId;
    /**
     * Gets or sets a value indicating whether subsequent rules should be evaluated.
     */
    StopProcessingRules: boolean;
}
/**
 * Represents a collection of rules.
 *
 * @sealed
 */
 class RuleCollection extends ComplexProperty implements IEnumerable<Rule> {
    /**
     * Gets a value indicating whether an Outlook rule blob exists in the user's mailbox. To update rules with EWS when the Outlook rule blob exists, call SetInboxRules passing true as the value of the removeOutlookBlob parameter.
     */
    OutlookRuleBlobExists: boolean;
    /**
     * Gets the number of rules in this collection.
     */
    readonly Count: number;
    /**
     * Gets the rule at the specified index in the collection.
     *
     * @param   {number}   index   The index of the rule to get.
     * @return  {Rule}	The rule at the specified index.
     */
    _getItem(index: number): Rule;
    /**
     *  Returns an enumerator that iterates through the collection. this case this.rules
     */
    GetEnumerator(): Rule[];
}
/**
 * Represents an error that occurred as a result of executing a rule operation.
 *
 * @sealed
 */
 class RuleError extends ComplexProperty {
    /**
     * Gets the property which failed validation.
     */
    readonly RuleProperty: RuleProperty;
    /**
     * Gets the validation error code.
     */
    readonly ErrorCode: RuleErrorCode;
    /**
     * Gets the error message.
     */
    readonly ErrorMessage: string;
    /**
     * Gets the value that failed validation.
     */
    readonly Value: string;
}/**
 * Represents an operation to be performed on a rule.
 */
 abstract class RuleOperation extends ComplexProperty {
}
/**
 * Represents an error that occurred while processing a rule operation.
 *
 * @sealed
 */
 class RuleOperationError extends ComplexProperty implements IEnumerable<RuleError> {
    /**
     * Gets the operation that resulted in an error.
     */
    readonly Operation: RuleOperation;
    /**
     * Gets the number of rule errors in the list.
     */
    readonly Count: number;
    /**
     * Gets the rule error at the specified index.
     *
     * @param   {number}   index   The index of the rule error to get.
     * @return  {RuleError}	The rule error at the specified index.
     */
    _getItem(index: number): RuleError;
    /**
     *  Returns an enumerator that iterates through the collection. this case this.rules
     */
    GetEnumerator(): RuleError[];
}
/**
 * Represents a collection of rule operation errors.
 *
 * @sealed
 */
 class RuleOperationErrorCollection extends ComplexPropertyCollection<RuleOperationError> {
}
/**
 * Represents the date and time range within which messages have been received.
 *
 * @sealed
 */
 class RulePredicateDateRange extends ComplexProperty {
    /**
     * @Nullable Gets or sets the range start date and time.
     * If Start is set to null, no start date applies.
     */
    Start: DateTime;
    /**
     * @Nullable Gets or sets the range end date and time.
     * If End is set to null, no end date applies.
     */
    End: DateTime;
}
/**
 * Represents the set of conditions and exceptions available for a rule.
 *
 * @sealed
 */
 class RulePredicates extends ComplexProperty {
    /**
     * Gets the categories that an incoming message should be stamped with for the condition or exception to apply.
     * To disable this predicate, empty the list.
     */
    readonly Categories: StringList;
    /**
     * Gets the strings that should appear in the body of incoming messages for the condition or exception to apply.
     * To disable this predicate, empty the list.
     */
    readonly ContainsBodyStrings: StringList;
    /**
     * Gets the strings that should appear in the headers of incoming messages for the condition or exception to apply.
     * To disable this predicate, empty the list.
     */
    readonly ContainsHeaderStrings: StringList;
    /**
     * Gets the strings that should appear in either the To or Cc fields of incoming messages for the condition or exception to apply.
     * To disable this predicate, empty the list.
     */
    readonly ContainsRecipientStrings: StringList;
    /**
     * Gets the strings that should appear in the From field of incoming messages for the condition or exception to apply.
     * To disable this predicate, empty the list.
     */
    readonly ContainsSenderStrings: StringList;
    /**
     * Gets the strings that should appear in either the body or the subject of incoming messages for the condition or exception to apply.
     * To disable this predicate, empty the list.
     */
    readonly ContainsSubjectOrBodyStrings: StringList;
    /**
     * Gets the strings that should appear in the subject of incoming messages for the condition or exception to apply.
     * To disable this predicate, empty the list.
     */
    readonly ContainsSubjectStrings: StringList;
    /**
     * @Nullable Gets or sets the flag for action value that should appear on incoming messages for the condition or execption to apply.
     * To disable this predicate, set it to null.
     */
    FlaggedForAction: FlaggedForAction;
    /**
     * Gets the e-mail addresses of the senders of incoming messages for the condition or exception to apply.
     * To disable this predicate, empty the list.
     */
    readonly FromAddresses: EmailAddressCollection;
    /**
     * Gets or sets a value indicating whether incoming messages must have attachments for the condition or exception to apply.
     */
    HasAttachments: boolean;
    /**
     * @Nullable Gets or sets the importance that should be stamped on incoming messages for the condition or exception to apply.
     * To disable this predicate, set it to null.
     */
    Importance: Importance;
    /**
     * Gets or sets a value indicating whether incoming messages must be approval requests for the condition or exception to apply.
     */
    IsApprovalRequest: boolean;
    /**
     * Gets or sets a value indicating whether incoming messages must be automatic forwards for the condition or exception to apply.
     */
    IsAutomaticForward: boolean;
    /**
     * Gets or sets a value indicating whether incoming messages must be automatic replies for the condition or exception to apply.
     */
    IsAutomaticReply: boolean;
    /**
     * Gets or sets a value indicating whether incoming messages must be S/MIME encrypted for the condition or exception to apply.
     */
    IsEncrypted: boolean;
    /**
     * Gets or sets a value indicating whether incoming messages must be meeting requests for the condition or exception to apply.
     */
    IsMeetingRequest: boolean;
    /**
     * Gets or sets a value indicating whether incoming messages must be meeting responses for the condition or exception to apply.
     */
    IsMeetingResponse: boolean;
    /**
     * Gets or sets a value indicating whether incoming messages must be non-delivery reports (NDR) for the condition or exception to apply.
     */
    IsNonDeliveryReport: boolean;
    /**
     * Gets or sets a value indicating whether incoming messages must be permission controlled (RMS protected) for the condition or exception to apply.
     */
    IsPermissionControlled: boolean;
    /**
     * Gets or sets a value indicating whether incoming messages must be S/MIME signed for the condition or exception to apply.
     */
    IsSigned: boolean;
    /**
     * Gets or sets a value indicating whether incoming messages must be voice mails for the condition or exception to apply.
     */
    IsVoicemail: boolean;
    /**
     * Gets or sets a value indicating whether incoming messages must be read receipts for the condition or exception to apply.
     */
    IsReadReceipt: boolean;
    /**
     * Gets the e-mail account names from which incoming messages must have been aggregated for the condition or exception to apply.
     * To disable this predicate, empty the list.
     */
    readonly FromConnectedAccounts: StringList;
    /**
     * Gets the item classes that must be stamped on incoming messages for the condition or exception to apply.
     * To disable this predicate, empty the list.
     */
    readonly ItemClasses: StringList;
    /**
     * Gets the message classifications that must be stamped on incoming messages for the condition or exception to apply.
     * To disable this predicate, empty the list.
     */
    readonly MessageClassifications: StringList;
    /**
     * Gets or sets a value indicating whether the owner of the mailbox must NOT be a To recipient of the incoming messages for the condition or exception to apply.
     */
    NotSentToMe: boolean;
    /**
     * Gets or sets a value indicating whether the owner of the mailbox must be a Cc recipient of incoming messages for the condition or exception to apply.
     */
    SentCcMe: boolean;
    /**
     * Gets or sets a value indicating whether the owner of the mailbox must be the only To recipient of incoming messages for the condition or exception to apply.
     */
    SentOnlyToMe: boolean;
    /**
     * Gets the e-mail addresses incoming messages must have been sent to for the condition or exception to apply.
     * To disable this predicate, empty the list.
     */
    readonly SentToAddresses: EmailAddressCollection;
    /**
     * Gets or sets a value indicating whether the owner of the mailbox must be a To recipient of incoming messages for the condition or exception to apply.
     */
    SentToMe: boolean;
    /**
     * Gets or sets a value indicating whether the owner of the mailbox must be either a To or Cc recipient of incoming messages for the condition or exception to apply.
     */
    SentToOrCcMe: boolean;
    /**
     * @Nullable Gets or sets the sensitivity that must be stamped on incoming messages for the condition or exception to apply.
     * To disable this predicate, set it to null.
     */
    Sensitivity: Sensitivity;
    /**
     * Gets the date range within which incoming messages must have been received for the condition or exception to apply.
     * To disable this predicate, set both its Start and End properties to null.
     */
    readonly WithinDateRange: RulePredicateDateRange;
    /**
     * Gets the minimum and maximum sizes incoming messages must have for the condition or exception to apply.
     * To disable this predicate, set both its MinimumSize and MaximumSize properties to null.
     */
    readonly WithinSizeRange: RulePredicateSizeRange;
}
/**
 * Represents the minimum and maximum size of a message.
 *
 * @sealed
 */
 class RulePredicateSizeRange extends ComplexProperty {
    /**
     * @Nullable Gets or sets the minimum size, in kilobytes.
     * If MinimumSize is set to null, no minimum size applies.
     */
    MinimumSize: number;
    /**
     * @Nullable Gets or sets the maximum size, in kilobytes.
     * If MaximumSize is set to null, no maximum size applies.
     */
    MaximumSize: number;
}
 class SearchFolderParameters extends ComplexProperty {
    Traversal: SearchFolderTraversal;
    RootFolderIds: FolderIdCollection;
    SearchFilter: SearchFilter;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    PropertyChanged(complexProperty: ComplexProperty): any;
    Validate(): any;
}
/**
 * Represents the Id of an Exchange object.
 *
 * @abstract
 * @class ServiceId
 * @extends {ComplexProperty}
 */
 abstract class ServiceId extends ComplexProperty {
    /**
     *Gets the unique Id of the Exchange object.
     *
     * @type {string}
     */
    UniqueId: string;
    /**
     *Gets the change key associated with the Exchange object. The change key represents the the version of the associated item or folder.
     *
     * @type {string}
     */
    ChangeKey: string;
    /**
     * True if this instance is valid, false otherthise.
     *
     * @value   *true* if this instance is valid; otherwise, *false*.
     */
    readonly IsValid: boolean;
    /**
     * Initializes a new instance of the **ServiceId** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **ServiceId** class.
     *
     * @param   {string}   uniqueId   The unique id.
     */
    constructor(uniqueId: string);
    /**
     * Determines whether the specified *ServiceId* is equal to the current *ServiceId*.
     * We do not consider the ChangeKey for ServiceId.Equals.
     *
     * @param   {any}       obj   The  to compare with the current .
     * @return  {boolean}   true if the specified  is equal to the current ; otherwise, false.
     */
    Equals(obj: any): boolean;
    /**
     * Determines whether two ServiceId instances are equal (including ChangeKeys)
     *
     * @param   {ServiceId}   other   The ServiceId to compare with the current ServiceId.
     */
    SameIdAndChangeKey(other: ServiceId): boolean;
    /**
     * Returns a *String* that represents the current *ServiceId*.
     *
     * @return  {string}      A *String* that represents the current *ServiceId*.
     */
    ToString(): string;
}
 class SetClientExtensionAction extends ComplexProperty {
}
/**
 * Represents an operation to update an existing rule.
 *
 * @sealed
 */
 class SetRuleOperation extends RuleOperation {
    /**
     * Gets or sets the rule to be updated.
     */
    Rule: Rule;
    /**
     * Initializes a new instance of the **SetRuleOperation** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **SetRuleOperation** class.
     *
     * @param   {Rule}   rule   The inbox rule to update.
     */
    constructor(rule: Rule);
}
/**
 * Represents a list of strings.
 *
 * @sealed
 */
 class StringList extends ComplexProperty implements IEnumerable<string> {
    /**
     * Gets the number of strings in the list.
     */
    readonly Count: number;
    /**
     * Initializes a new instance of the **StringList** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **StringList** class.
     *
     * @param   {string}   itemXmlElementName   Name of the item XML element.
     */
    constructor(itemXmlElementName: string);
    /**
     * Initializes a new instance of the **StringList** class.
     *
     * @param   {string[]}   strings   The strings.
     */
    constructor(strings: string[]);
    /**
     * Gets or sets the string at the specified index.
     *
     * @param   {number}    index   The index of the string to get or set.
     * @return  {string}    The string at the specified index.
     */
    _getItem(index: number): string;
    /**
     * Gets or sets the string at the specified index.
     *
     * @param   {number}    index   The index of the string to get or set.
     * @return  {string}    The string at the specified index.
     */
    _setItem(index: number, value: string): void;
    /**
     * Adds a string to the list.
     *
     * @param   {string}   s   The string to add.
     */
    Add(s: string): void;
    /**
     * Adds multiple strings to the list.
     *
     * @param   {string[]}   strings   The strings to add.
     */
    AddRange(strings: string[]): void;
    /**
     * Clears the list.
     */
    Clear(): void;
    /**
     * Determines whether the list contains a specific string.
     *
     * @param   {string}    s   The string to check the presence of.
     * @return  {boolean}   True if s is present in the list, false otherwise.
     */
    Contains(s: string): boolean;
    Equals(obj: any): boolean;
    /**
     *  Returns an enumerator that iterates through the collection. this case this.items
     */
    GetEnumerator(): string[];
    GetHashCode(): number;
    /**
     * Removes a string from the list.
     *
     * @param   {string}   s   The string to remove.
     * @return  {boolean}       True is s was removed, false otherwise.
     */
    Remove(s: string): boolean;
    /**
     * Removes the string at the specified position from the list.
     *
     * @param   {number}   index   The index of the string to remove.
     */
    RemoveAt(index: number): void;
    /**
     * Generates a string representation of all the items in the list.
     *
     * @return  {string}      A comma-separated list of the strings present in the list.
     */
    ToString(): string;
}
/**
 * Represents an TaskSuggestion object.
 */
 class TaskSuggestion extends ExtractedEntity {
    /**
     * Gets the meeting suggestion TaskString.
     */
    TaskString: string;
    /**
     * Gets the meeting suggestion Assignees.
     */
    Assignees: EmailUserEntityCollection;
}
/**
 * Represents a collection of TaskSuggestion objects.
 */
 class TaskSuggestionCollection extends ComplexPropertyCollection<TaskSuggestion> {
}
/**
 * Represents the body of a message.
 */
 class TextBody extends MessageBody {
    /**
     * Initializes a new instance of the **TextBody** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **TextBody** class.
     *
     * @param   {string}   text   The text of the message body.
     */
    constructor(text: string);
}
 module TimeZoneTransition {
    var AbsoluteDateTransition: any;
    var AbsoluteDayOfMonthTransition: any;
    var RelativeDayOfMonthTransition: any;
}
 module TimeZoneTransitionGroup {
}
/**
 * Represents the body part of an item that is unique to the conversation the item is part of.
 */
 class UniqueBody extends ComplexProperty {
    /**
     * Gets the type of the normalized body's text.
     */
    readonly BodyType: BodyType;
    /**
     * Gets the text of the normalized body.
     */
    readonly Text: string;
    /**
     * Gets whether the body is truncated.
     */
    readonly IsTruncated: boolean;
    /**
     * Initializes a new instance of the **UniqueBody** class.
     */
    constructor();
    /**
     * Returns a **String** that represents the current **Object**.
     *
     * @return  {string}      A **String** that represents the current **Object**.
     */
    ToString(): string;
    toString(): string;
}
/**
 * Represents an UrlEntity object.
 */
 class UrlEntity extends ExtractedEntity {
    Url: string;
    /**
     * Initializes a new instance of the **UrlEntity** class.
     */
    constructor();
}
/**
 * Represents a collection of UrlEntity objects.
 */
 class UrlEntityCollection extends ComplexPropertyCollection<UrlEntity> {
}
/**
 * Represents a user configuration's Dictionary property.
 *
 * @sealed
 */
 class UserConfigurationDictionary extends ComplexProperty {
    /**
     * required before initializing new UserConfigurationDictionary
     */
    static _dictionaryKeyPicker: (key: any) => string;
    /**
     * Gets the number of elements in the user configuration dictionary.
     */
    readonly Count: number;
    /**
     * Gets or sets the element with the specified key.
     *
     * @param   {string | DateTime | boolean | number}                          key   The key of the element to get or set.
     * @return  {DateTime | string | number | boolean | string[] | number[]}    The element with the specified key.
     */
    _getItem(key: string | DateTime | boolean | number): DateTime | string | number | boolean | string[] | number[];
    /**
     * Gets or sets the element with the specified key.
     *
     * @param   {string | DateTime | boolean | number}                          key     The key of the element to get or set.
     * @param  {DateTime | string | number | boolean | string[] | number[]}     value    The element value to update at specified key.
     */
    _setItem(key: string | DateTime | boolean | number, value: DateTime | string | number | boolean | string[] | number[]): void;
    /**
     * Adds an element with the provided key and value to the user configuration dictionary.
     *
     * @param   {string | DateTime | boolean | number}                          key     The object to use as the key of the element to add. **Restrict usage of byteArray or complex type for key, consider using string and number only**.
     * @param   {DateTime | string | number | boolean | string[] | number[]}    value   The object to use as the value of the element to add.
     */
    Add(key: string | DateTime | boolean | number, value: DateTime | string | number | boolean | string[] | number[]): void;
    /**
     * Removes all items from the user configuration dictionary.
     */
    Clear(): void;
    /**
     * Determines whether the user configuration dictionary contains an element with the specified key.
     *
     * @param   {any}   key     The key to locate in the user configuration dictionary.
     * @return  {boolean}       true if the user configuration dictionary contains an element with the key; otherwise false.
     */
    ContainsKey(key: any): boolean;
    GetEnumerator(): Dictionary<any, any>;
    /**
     * Removes the element with the specified key from the user configuration dictionary.
     *
     * @param   {key}   key     The key of the element to remove.
     * @return  {boolean}       true if the element is successfully removed; otherwise false.
     */
    Remove(key: any): boolean;
    /**
     * Gets the value associated with the specified key.
     *
     * @param   {any}   key     The key whose value to get.
     * @param   {any}   value   When this method returns, the value associated with the specified key, if the key is found; otherwise, null.
     * @return  {boolean}       true if the user configuration dictionary contains the key; otherwise false.
     */
    TryGetValue(key: any, value: IOutParam<any>): boolean;
}
/**
 * Represents the Id of a user.
 *
 * @sealed
 */
 class UserId extends ComplexProperty {
    /**
     * Gets or sets the SID of the user.
     */
    SID: string;
    /**
     * Gets or sets the primary SMTP address or the user.
     */
    PrimarySmtpAddress: string;
    /**
     * Gets or sets the display name of the user.
     */
    DisplayName: string;
    /**
     * Gets or sets a value indicating which standard user the user represents.
     *
     * @Nullable
     */
    StandardUser: StandardUser;
    /**
     * Initializes a new instance of the **UserId** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **UserId** class.
     *
     * @param   {StandardUser}   standardUser   The StandardUser value used to initialize the UserId.
     */
    constructor(standardUser: StandardUser);
    /**
     * Initializes a new instance of the **UserId** class.
     *
     * @param   {string}   primarySmtpAddress   The primary SMTP address used to initialize the UserId.
     */
    constructor(primarySmtpAddress: string);
}
/**
 * Represents voting information.
 * @sealed
 */
 class VotingInformation extends ComplexProperty {
    /**
     * Gets the list of user options.
     */
    readonly UserOptions: VotingOptionData[];
    /**
     * Gets the voting response.
     */
    readonly VotingResponse: string;
}
/**
 * Represents voting option information.
 * @sealed
 */
 class VotingOptionData extends ComplexProperty {
    /**
     * Gets the display name for the voting option.
     */
    readonly DisplayName: string;
    /**
     * Gets the send prompt.
     */
    readonly SendPrompt: SendPrompt;
}
 class ConfigurationApi {
    static ConfigureXHR(xhrApi: IXHRApi): void;
    static SetXHROptions(fetchOptions: FetchOptions): void;
    static ConfigurePromise(promise: PromiseConstructor): void;
}
 class EwsLogging {
    static DebugLogEnabled: boolean;
    static Assert(condition: boolean, caller: string, message: string, always?: boolean): void;
    static Log(message: any, always?: boolean, expandObject?: boolean): void;
    static DebugLog(message: any, expandObject?: boolean): void;
}
 class EwsServiceJsonReader {
    static ReadAsArray(jsObject: any, xmlElementName: string): any[];
    static ReadBase64ElementValue(obj: any): string;
    static ReadServiceObjectsCollectionFromJson<TServiceObject extends ServiceObject>(jsonResponse: any, service: ExchangeService, collectionJsonElementName: string, getObjectInstanceDelegate: GetObjectInstanceDelegate<TServiceObject>, clearPropertyBag: boolean, requestedPropertySet: PropertySet, summaryPropertiesOnly: boolean): TServiceObject[];
} type RequiredServerVersionEnums = typeof ConversationQueryTraversal | typeof EventType | typeof FileAsMapping | typeof ItemTraversal | typeof MailboxType | typeof MeetingRequestsDeliveryScope | typeof ViewFilter | typeof WellKnownFolderName;
export interface EnumToExhcangeVersionDelegateDictionary {
    [index: string]: EnumVersionDelegate;
}
export interface EnumVersionDelegate {
    (value: number): ExchangeVersion;
} class ExchangeServerInfo {
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
    /**
     * Gets or sets the URL of the Exchange Web Services.
     */
    Url: Uri;
    /**
     * Gets or sets the Id of the user that EWS should impersonate.
     */
    ImpersonatedUserId: ImpersonatedUserId;
    /**
     * [summary]
     */
    ManagementRoles: ManagementRoles;
    /**
     * Gets or sets the DateTime precision for DateTime values returned from Exchange Web Services.
     */
    DateTimePrecision: DateTimePrecision;
    /**
     * Gets or sets a file attachment content handler.
     */
    FileAttachmentContentHandler: IFileAttachmentContentHandler;
    /**
     * Gets the time zone this service is scoped to.
     */
    readonly TimeZone: TimeZoneInfo;
    /**
     * Provides access to the Unified Messaging functionalities.
     */
    readonly UnifiedMessaging: UnifiedMessaging;
    /**
     * Gets or sets a value indicating whether the AutodiscoverUrl method should perform SCP (Service Connection Point) record lookup when determining the Autodiscover service URL.
     */
    EnableScpLookup: boolean;
    /**
     * Gets or sets a value indicating whether trace output is pretty printed.
     */
    TraceEnablePrettyPrinting: boolean;
    /**
     * Obtains a list of folders by searching the sub-folders of the specified folder.
     *
     * @param   {FolderId}                       parentFolderId   The Id of the folder in which to search for folders.
     * @param   {FolderView}                     view             The view controlling the number of folders returned.
     * @return  {Promise<FindFoldersResults>}    An object representing the results of the search operation :Promise.
     */
    FindFolders(parentFolderId: FolderId, view: FolderView): Promise<FindFoldersResults>;
    /**
     * Obtains a list of folders by searching the sub-folders of the specified folder.
     *
     * @param   {WellKnownFolderName}            parentFolderName   The name of the folder in which to search for folders.
     * @param   {FolderView}                     view               The view controlling the number of folders returned.
     * @return  {Promise<FindFoldersResults>}    An object representing the results of the search operation :Promise.
     */
    FindFolders(parentFolderName: WellKnownFolderName, view: FolderView): Promise<FindFoldersResults>;
    /**
     * Obtains a list of folders by searching the sub-folders of the specified folder.
     *
     * @param   {FolderId}                       parentFolderId   The Id of the folder in which to search for folders.
     * @param   {SearchFilter}                   searchFilter     The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {FolderView}                     view             The view controlling the number of folders returned.
     * @return  {Promise<FindFoldersResults>}    An object representing the results of the search operation :Promise.
     */
    FindFolders(parentFolderId: FolderId, searchFilter: SearchFilter, view: FolderView): Promise<FindFoldersResults>;
    /**
     * Obtains a list of folders by searching the sub-folders of the specified folder.
     *
     * @param   {WellKnownFolderName}            parentFolderName   The name of the folder in which to search for folders.
     * @param   {SearchFilter}                   searchFilter       The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {FolderView}                     view               The view controlling the number of folders returned.
     * @return  {Promise<FindFoldersResults>}    An object representing the results of the search operation :Promise.
     */
    FindFolders(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: FolderView): Promise<FindFoldersResults>;
    /**
     * Archives multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}   itemIds          The Ids of the items to move.
     * @param   {FolderId}   sourceFolderId   The Id of the folder in primary corresponding to which items are being archived to.
     * @return  {Promise<ServiceResponseCollection<ArchiveItemResponse>>}                     A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    ArchiveItems<TResponse extends ServiceResponse>(itemIds: ItemId[], sourceFolderId: FolderId): Promise<ServiceResponseCollection<ArchiveItemResponse>>;
    /**
     * Binds to multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}      itemIds         The Ids of the items to bind to.
     * @param   {PropertySet}   propertySet     The set of properties to load.
     * @param   {string}        anchorMailbox   The SmtpAddress of mailbox that hosts all items we need to bind to
     * @return  {Promise<ServiceResponseCollection<GetItemResponse>>}                    A ServiceResponseCollection providing results for each of the specified item Ids :Promise.
     */
    BindToGroupItems(itemIds: ItemId[], propertySet: PropertySet, anchorMailbox: string): Promise<ServiceResponseCollection<GetItemResponse>>;
    /**
     * Binds to multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}      itemIds       The Ids of the items to bind to.
     * @param   {PropertySet}   propertySet   The set of properties to load.
     * @return  {Promise<ServiceResponseCollection<GetItemResponse>>}                  A ServiceResponseCollection providing results for each of the specified item Ids :Promise.
     */
    BindToItems(itemIds: ItemId[], propertySet: PropertySet): Promise<ServiceResponseCollection<GetItemResponse>>;
    /**
     * Copies multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}      itemIds               The Ids of the items to copy.
     * @param   {FolderId}      destinationFolderId   The Id of the folder to copy the items to.
     * @return  {Promise<ServiceResponseCollection<MoveCopyItemResponse>>}                          A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    CopyItems(itemIds: ItemId[], destinationFolderId: FolderId): Promise<ServiceResponseCollection<MoveCopyItemResponse>>;
    /**
     * Copies multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}      itemIds               The Ids of the items to copy.
     * @param   {FolderId}      destinationFolderId   The Id of the folder to copy the items to.
     * @param   {boolean}       returnNewItemIds      Flag indicating whether service should return new ItemIds or not.
     * @return  {Promise<ServiceResponseCollection<MoveCopyItemResponse>>}                          A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    CopyItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean): Promise<ServiceResponseCollection<MoveCopyItemResponse>>;
    /**
     * Creates multiple items in a single EWS call. Supported item classes are EmailMessage, Appointment, Contact, PostItem, Task and Item. CreateItems does not support items that have unsaved attachments.
     *
     * @param   {Item[]}                items                 The items to create.
     * @param   {FolderId}              parentFolderId        The Id of the folder in which to place the newly created items. If null, items are created in their default folders.
     * @param   {MessageDisposition}    messageDisposition    Indicates the disposition mode for items of type EmailMessage. Required if items contains at least one EmailMessage instance.
     * @param   {SendInvitationsMode}   sendInvitationsMode   Indicates if and how invitations should be sent for items of type Appointment. Required if items contains at least one Appointment instance.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}                          A ServiceResponseCollection providing creation results for each of the specified items :Promise.
     */
    CreateItems(items: Item[], parentFolderId: FolderId, messageDisposition: MessageDisposition, sendInvitationsMode: SendInvitationsMode): Promise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Deletes multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}                  itemIds                   The Ids of the items to delete.
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether cancellation messages should be sent. Required if the item Id represents an Appointment.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicates which instance of a recurring task should be deleted. Required if item Id represents a Task.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       A ServiceResponseCollection providing deletion results for each of the specified item Ids :Promise.
     */
    DeleteItems(itemIds: ItemId[], deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): Promise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Deletes multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}                  itemIds                   The Ids of the items to delete.
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether cancellation messages should be sent. Required if the item Id represents an Appointment.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicates which instance of a recurring task should be deleted. Required if item Id represents a Task.
     * @param   {boolean}                   suppressReadReceipts      Whether to suppress read receipts
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       A ServiceResponseCollection providing deletion results for each of the specified item Ids :Promise.
     */
    DeleteItems(itemIds: ItemId[], deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence, suppressReadReceipt: boolean): Promise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Obtains a list of appointments by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName   The name of the calendar folder in which to search for items.
     * @param   {CalendarView}          calendarView     The calendar view controlling the number of appointments returned.
     * @return  {Promise<FindItemsResults<Appointment>>}                     A collection of appointments representing the contents of the specified folder :Promise.
     */
    FindAppointments(parentFolderName: WellKnownFolderName, calendarView: CalendarView): Promise<FindItemsResults<Appointment>>;
    /**
     * Obtains a list of appointments by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      parentFolderId   The id of the calendar folder in which to search for items.
     * @param   {CalendarView}  calendarView     The calendar view controlling the number of appointments returned.
     * @return  {Promise<FindItemsResults<Appointment>>}                     A collection of appointments representing the contents of the specified folder :Promise.
     */
    FindAppointments(parentFolderId: FolderId, calendarView: CalendarView): Promise<FindItemsResults<Appointment>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
     * @param   {ViewBase}              view                    The view controlling the number of items returned.
     * @return  {Promise<FindItemsResults<Item>>}               An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderName: WellKnownFolderName, view: ViewBase): Promise<FindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Along with conversations, a list of highlight terms are returned. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}  parentFolderId         The Id of the folder in which to search for items.
     * @param   {ViewBase}  view                   The view controlling the number of items returned.
     * @return  {Promise<FindItemsResults<Item>>}       An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderId: FolderId, view: ViewBase): Promise<FindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      parentFolderId          The Id of the folder in which to search for items.
     * @param   {ViewBase}      view                    The view controlling the number of items returned.
     * @param   {Grouping}      groupBy                 The group by clause.
     * @return  {Promise<GroupedFindItemsResults<Item>>}        A collection of grouped items representing the contents of the specified :Promise.
     */
    FindItems(parentFolderId: FolderId, view: ViewBase, groupBy: Grouping): Promise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Along with conversations, a list of highlight terms are returned. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}  parentFolderId         The Id of the folder in which to search for items.
     * @param   {string}    queryString            The search string to be used for indexed search, if any.
     * @param   {ViewBase}  view                   The view controlling the number of items returned.
     * @return  {Promise<FindItemsResults<Item>>}       An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderId: FolderId, queryString: string, view: ViewBase): Promise<FindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
     * @param   {string}                queryString             The search string to be used for indexed search, if any.
     * @param   {ViewBase}              view                    The view controlling the number of items returned.
     * @return  {Promise<FindItemsResults<Item>>}               An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderName: WellKnownFolderName, queryString: string, view: ViewBase): Promise<FindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
     * @param   {searchFilter}          searchFilter            The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {ViewBase}              view                    The view controlling the number of items returned.
     * @return  {Promise<FindItemsResults<Item>>}               An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: ViewBase): Promise<FindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      parentFolderId          The Id of the folder in which to search for items.
     * @param   {searchFilter}  searchFilter            The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {ViewBase}      view                    The view controlling the number of items returned.
     * @return  {Promise<FindItemsResults<Item>>}       An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase): Promise<FindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      parentFolderId          The Id of the folder in which to search for items.
     * @param   {searchFilter}  searchFilter            The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {ViewBase}      view                    The view controlling the number of items returned.
     * @param   {Grouping}      groupBy                 The group by clause.
     * @return  {Promise<GroupedFindItemsResults<Item>>}        A collection of grouped items representing the contents of the specified :Promise.
     */
    FindItems(parentFolderId: FolderId, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): Promise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      parentFolderId          The Id of the folder in which to search for items.
     * @param   {string}        queryString             The search string to be used for indexed search, if any.
     * @param   {ViewBase}      view                    The view controlling the number of items returned.
     * @param   {Grouping}      groupBy                 The group by clause.
     * @return  {Promise<GroupedFindItemsResults<Item>>}        A collection of grouped items representing the contents of the specified :Promise.
     */
    FindItems(parentFolderId: FolderId, queryString: string, view: ViewBase, groupBy: Grouping): Promise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
     * @param   {searchFilter}          searchFilter            The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {ViewBase}              view                    The view controlling the number of items returned.
     * @param   {Grouping}              groupBy                 The group by clause.
     * @return  {Promise<GroupedFindItemsResults<Item>>}        A collection of grouped items representing the contents of the specified :Promise.
     */
    FindItems(parentFolderName: WellKnownFolderName, searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): Promise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   parentFolderName        The name of the folder in which to search for items.
     * @param   {string}                queryString             The search string to be used for indexed search, if any.
     * @param   {ViewBase}              view                    The view controlling the number of items returned.
     * @param   {Grouping}              groupBy                 The group by clause.
     * @return  {Promise<GroupedFindItemsResults<Item>>}        A collection of grouped items representing the contents of the specified :Promise.
     */
    FindItems(parentFolderName: WellKnownFolderName, queryString: string, view: ViewBase, groupBy: Grouping): Promise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Along with conversations, a list of highlight terms are returned. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}  parentFolderId         The Id of the folder in which to search for items.
     * @param   {string}    queryString            the search string to be used for indexed search, if any.
     * @param   {boolean}   returnHighlightTerms   Flag indicating if highlight terms should be returned in the response
     * @param   {ViewBase}  view                   The view controlling the number of items returned.
     * @return  {Promise<FindItemsResults<Item>>}       An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderId: FolderId, queryString: string, returnHighlightTerms: boolean, view: ViewBase): Promise<FindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of a specific folder. Along with conversations, a list of highlight terms are returned. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}  parentFolderId         The Id of the folder in which to search for items.
     * @param   {string}    queryString            the search string to be used for indexed search, if any.
     * @param   {boolean}   returnHighlightTerms   Flag indicating if highlight terms should be returned in the response
     * @param   {ViewBase}  view                   The view controlling the number of items returned.
     * @param   {Grouping}  groupBy                The group by clause.
     * @return  {Promise<GroupedFindItemsResults<Item>>}        An object representing the results of the search operation :Promise.
     */
    FindItems(parentFolderId: FolderId, queryString: string, returnHighlightTerms: boolean, view: ViewBase, groupBy: Grouping): Promise<GroupedFindItemsResults<Item>>;
    /**
     * Loads the properties of multiple items in a single call to EWS. **Unstable for Extended Properties**
     *
     * @param   {Item[]}        items         The items to load the properties of.
     * @param   {PropertySet}   propertySet   The set of properties to load.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       A ServiceResponseCollection providing results for each of the specified items :Promise.
     */
    LoadPropertiesForItems(items: Item[], propertySet: PropertySet): Promise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Mark items as junk.
     *
     * @param   {ItemId[]}      itemIds    ItemIds for the items to mark
     * @param   {boolean}       isJunk     Whether the items are junk.  If true, senders are add to blocked sender list. If false, senders are removed.
     * @param   {boolean}       moveItem   Whether to move the item.  Items are moved to junk folder if isJunk is true, inbox if isJunk is false.
     * @return  {Promise<ServiceResponseCollection<MarkAsJunkResponse>>}        A ServiceResponseCollection providing itemIds for each of the moved items :Promise.
     */
    MarkAsJunk(itemIds: ItemId[], isJunk: boolean, moveItem: boolean): Promise<ServiceResponseCollection<MarkAsJunkResponse>>;
    /**
     * Moves multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}   itemIds               The Ids of the items to move.
     * @param   {FolderId}   destinationFolderId   The Id of the folder to move the items to.
     * @return  {Promise<ServiceResponseCollection<MoveCopyItemResponse>>}      A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    MoveItems(itemIds: ItemId[], destinationFolderId: FolderId): Promise<ServiceResponseCollection<MoveCopyItemResponse>>;
    /**
     * Moves multiple items in a single call to EWS.
     *
     * @param   {ItemId[]}   itemIds               The Ids of the items to move.
     * @param   {FolderId}   destinationFolderId   The Id of the folder to move the items to.
     * @param   {boolean}    returnNewItemIds      Flag indicating whether service should return new ItemIds or not.
     * @return  {Promise<ServiceResponseCollection<MoveCopyItemResponse>>}      A ServiceResponseCollection providing copy results for each of the specified item Ids :Promise.
     */
    MoveItems(itemIds: ItemId[], destinationFolderId: FolderId, returnNewItemIds: boolean): Promise<ServiceResponseCollection<MoveCopyItemResponse>>;
    /**
     * Updates multiple items in a single EWS call. UpdateItems does not support items that have unsaved attachments.
     *
     * @param   {Item[]}                                items                                The items to update.
     * @param   {FolderId}                              savedItemsDestinationFolderId        The folder in which to save sent messages, meeting invitations or cancellations. If null, the message, meeting invitation or cancellation is saved in the Sent Items folder.
     * @param   {ConflictResolutionMode}                conflictResolution                   The conflict resolution mode.
     * @param   {MessageDisposition}                    messageDisposition                   Indicates the disposition mode for an item of type EmailMessage. Required if item is an EmailMessage instance.
     * @param   {SendInvitationsOrCancellationsMode}    sendInvitationsOrCancellationsMode   Indicates if and how invitations and/or cancellations should be sent for ian tem of type Appointment. Required if item is an Appointment instance.
     * @return  {Promise<Item>}                                                              A ServiceResponseCollection providing update results for each of the specified items : Promise.
     */
    UpdateItems(items: Item[], savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): Promise<ServiceResponseCollection<UpdateItemResponse>>;
    /**
     * Updates multiple items in a single EWS call. UpdateItems does not support items that have unsaved attachments.
     *
     * @param   {Item[]}                                items                                The items to update.
     * @param   {FolderId}                              savedItemsDestinationFolderId        The folder in which to save sent messages, meeting invitations or cancellations. If null, the message, meeting invitation or cancellation is saved in the Sent Items folder.
     * @param   {ConflictResolutionMode}                conflictResolution                   The conflict resolution mode.
     * @param   {MessageDisposition}                    messageDisposition                   Indicates the disposition mode for an item of type EmailMessage. Required if item is an EmailMessage instance.
     * @param   {SendInvitationsOrCancellationsMode}    sendInvitationsOrCancellationsMode   Indicates if and how invitations and/or cancellations should be sent for ian tem of type Appointment. Required if item is an Appointment instance.
     * @param   {boolean}                               suppressReadReceipts                 Whether to suppress read receipts
     * @return  {Promise<Item>}                                                              A ServiceResponseCollection providing update results for each of the specified items : Promise.
     */
    UpdateItems(items: Item[], savedItemsDestinationFolderId: FolderId, conflictResolution: ConflictResolutionMode, messageDisposition: MessageDisposition, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode, suppressReadReceipts: boolean): Promise<ServiceResponseCollection<UpdateItemResponse>>;
    /**
     * Gets attachments.
     *
     * @param   {Attachment[]}                  attachments            The attachments.
     * @param   {BodyType}                      bodyType               Type of the body.
     * @param   {PropertyDefinitionBase[]}      additionalProperties   The additional properties.
     * @return  {Promise<ServiceResponseCollection<GetAttachmentResponse>>}         Service response collection :Promise.
     */
    GetAttachments(attachments: Attachment[], bodyType: BodyType, additionalProperties: PropertyDefinitionBase[]): Promise<ServiceResponseCollection<GetAttachmentResponse>>;
    /**
     * Gets attachments.
     *
     * @param   {string[]}                      attachmentIds          The attachment ids.
     * @param   {BodyType}                      bodyType               Type of the body.
     * @param   {PropertyDefinitionBase[]}      additionalProperties   The additional properties.
     * @return  {Promise<ServiceResponseCollection<GetAttachmentResponse>>}         Service response collection :Promise.
     */
    GetAttachments(attachmentIds: string[], bodyType: BodyType, additionalProperties: PropertyDefinitionBase[]): Promise<ServiceResponseCollection<GetAttachmentResponse>>;
    /**
     * Expands a group by retrieving a list of its members. Calling this method results in a call to EWS.
     *
     * @param   {ItemId}   groupId   The Id of the group to expand.
     * @return  {Promise<ExpandGroupResults>}       An ExpandGroupResults containing the members of the group :Promise.
     */
    ExpandGroup(groupId: ItemId): Promise<ExpandGroupResults>;
    /**
     * Expands a group by retrieving a list of its members. Calling this method results in a call to EWS.
     *
     * @param   {string}   smtpAddress   The SMTP address of the group to expand.
     * @return  {Promise<ExpandGroupResults>}       An ExpandGroupResults containing the members of the group :Promise.
     */
    ExpandGroup(smtpAddress: string): Promise<ExpandGroupResults>;
    /**
     * Expands a group by retrieving a list of its members. Calling this method results in a call to EWS.
     *
     * @param   {EmailAddress}   emailAddress   The e-mail address of the group.
     * @return  {Promise<ExpandGroupResults>}       An ExpandGroupResults containing the members of the group :Promise.
     */
    ExpandGroup(emailAddress: EmailAddress): Promise<ExpandGroupResults>;
    /**
     * Expands a group by retrieving a list of its members. Calling this method results in a call to EWS.
     *
     * @param   {string}   address       The SMTP address of the group to expand.
     * @param   {string}   routingType   The routing type of the address of the group to expand.
     * @return  {Promise<ExpandGroupResults>}       An ExpandGroupResults containing the members of the group :Promise.
     */
    ExpandGroup(address: string, routingType: string): Promise<ExpandGroupResults>;
    /**
     * Get the password expiration date
     *
     * @param   {string}   mailboxSmtpAddress   The e-mail address of the user.
     * @return  {Promise<DateTime>}             The password expiration date :Promise.
     */
    GetPasswordExpirationDate(mailboxSmtpAddress: string): Promise<DateTime>;
    /**
     * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
     *
     * @param   {string}    nameToResolve               The name to resolve.
     * @return  {Promise<NameResolutionCollection>}     A collection of name resolutions whose names match the one passed as a parameter :Promise.
     */
    ResolveName(nameToResolve: string): Promise<NameResolutionCollection>;
    /**
     * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
     *
     * @param   {string}                        nameToResolve               The name to resolve.
     * @param   {ResolveNameSearchLocation}     searchScope                 The scope of the search.
     * @param   {boolean}                       returnContactDetails        Indicates whether full contact information should be returned for each of the found contacts.
     * @return  {Promise<NameResolutionCollection>}                         A collection of name resolutions whose names match the one passed as a parameter :Promise.
     */
    ResolveName(nameToResolve: string, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean): Promise<NameResolutionCollection>;
    /**
     * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
     *
     * @param   {string}                        nameToResolve               The name to resolve.
     * @param   {ResolveNameSearchLocation}     searchScope                 The scope of the search.
     * @param   {boolean}                       returnContactDetails        Indicates whether full contact information should be returned for each of the found contacts.
     * @param   {PropertySet}                   contactDataPropertySet      The property set for the contct details
     * @return  {Promise<NameResolutionCollection>}                         A collection of name resolutions whose names match the one passed as a parameter :Promise.
     */
    ResolveName(nameToResolve: string, searchScope: ResolveNameSearchLocation, returnContactDetails: boolean, contactDataPropertySet: PropertySet): Promise<NameResolutionCollection>;
    /**
     * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
     *
     * @param   {string}                        nameToResolve               The name to resolve.
     * @param   {FolderId[]}                    parentFolderIds             The Ids of the contact folders in which to look for matching contacts.
     * @param   {ResolveNameSearchLocation}     searchScope                 The scope of the search.
     * @param   {boolean}                       returnContactDetails        Indicates whether full contact information should be returned for each of the found contacts.
     * @return  {Promise<NameResolutionCollection>}                         A collection of name resolutions whose names match the one passed as a parameter :Promise.
     */
    ResolveName(nameToResolve: string, parentFolderIds: FolderId[], searchScope: ResolveNameSearchLocation, returnContactDetails: boolean): Promise<NameResolutionCollection>;
    /**
     * Finds contacts in the Global Address List and/or in specific contact folders that have names that match the one passed as a parameter. Calling this method results in a call to EWS.
     *
     * @param   {string}                        nameToResolve               The name to resolve.
     * @param   {FolderId[]}                    parentFolderIds             The Ids of the contact folders in which to look for matching contacts.
     * @param   {ResolveNameSearchLocation}     searchScope                 The scope of the search.
     * @param   {boolean}                       returnContactDetails        Indicates whether full contact information should be returned for each of the found contacts.
     * @param   {PropertySet}                   contactDataPropertySet      The property set for the contct details
     * @return  {Promise<NameResolutionCollection>}                         A collection of name resolutions whose names match the one passed as a parameter :Promise.
     */
    ResolveName(nameToResolve: string, parentFolderIds: FolderId[], searchScope: ResolveNameSearchLocation, returnContactDetails: boolean, contactDataPropertySet: PropertySet): Promise<NameResolutionCollection>;
    /**
     * Retrieves the latests events associated with a pull subscription. Calling this method results in a call to EWS.
     *
     * @param   {string}   subscriptionId   The Id of the pull subscription for which to get the events.
     * @param   {string}   watermark        The watermark representing the point in time where to start receiving events.
     * @return  {Promise<GetEventsResults>}     A GetEventsResults containing a list of events associated with the subscription.
     */
    GetEvents(subscriptionId: string, watermark: string): Promise<GetEventsResults>;
    /**
     * Set a TeamMailbox
     *
     * @param   {EmailAddress}                  emailAddress        TeamMailbox email address
     * @param   {Uri}                           sharePointSiteUrl   SharePoint site URL
     * @param   {TeamMailboxLifecycleState}     state               TeamMailbox lifecycle state
     * @return  {Promise<void>}     Promise.
     */
    SetTeamMailbox(emailAddress: EmailAddress, sharePointSiteUrl: Uri, state: TeamMailboxLifecycleState): Promise<void>;
    /**
     * Subscribes to pull notifications. Calling this method results in a call to EWS   :Promise.
     *
     * @param   {FolderId[]}        folderIds    The Ids of the folder to subscribe to.
     * @param   {number}            timeout      The timeout, in minutes, after which the subscription expires. Timeout must be between 1 and 1440.
     * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
     * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
     * @return  {Promise<PullSubscription>}      A PullSubscription representing the new subscription.
     */
    SubscribeToPullNotifications(folderIds: FolderId[], timeout: number, watermark: string, ...eventTypes: EventType[]): Promise<PullSubscription>;
    /**
     * Subscribes to pull notifications on all folders in the authenticated user's mailbox. Calling this method results in a call to EWS.   :Promise.
     *
     * @param   {FolderId[]}        folderIds    The Ids of the folder to subscribe to.
     * @param   {number}            timeout      The timeout, in minutes, after which the subscription expires. Timeout must be between 1 and 1440.
     * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
     * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
     * @return  {Promise<PullSubscription>}      A PullSubscription representing the new subscription.
     */
    SubscribeToPullNotificationsOnAllFolders(timeout: number, watermark: string, ...eventTypes: EventType[]): Promise<PullSubscription>;
    /**
     * Subscribes to push notifications. Calling this method results in a call to EWS.
     *
     * @param   {FolderId[]}        folderIds    The Ids of the folder to subscribe to.
     * @param   {Uri}               url          The URL of the Web Service endpoint the Exchange server should push events to.
     * @param   {number}            frequency    The frequency, in minutes, at which the Exchange server should contact the Web Service endpoint. Frequency must be between 1 and 1440.
     * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
     * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
     * @return  {Promise<PushSubscription>}      A PushSubscription representing the new subscription  :Promise.
     */
    SubscribeToPushNotifications(folderIds: FolderId[], url: Uri, frequency: number, watermark: string, ...eventTypes: EventType[]): Promise<PushSubscription>;
    /**
     * Subscribes to push notifications. Calling this method results in a call to EWS.
     *
     * @param   {FolderId[]}        folderIds    The Ids of the folder to subscribe to.
     * @param   {Uri}               url          The URL of the Web Service endpoint the Exchange server should push events to.
     * @param   {number}            frequency    The frequency, in minutes, at which the Exchange server should contact the Web Service endpoint. Frequency must be between 1 and 1440.
     * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
     * @param   {string}            callerData   Optional caller data that will be returned the call back.
     * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
     * @return  {Promise<PushSubscription>}      A PushSubscription representing the new subscription  :Promise.
     */
    SubscribeToPushNotifications(folderIds: FolderId[], url: Uri, frequency: number, watermark: string, callerData: string, ...eventTypes: EventType[]): Promise<PushSubscription>;
    /**
     * Subscribes to push notifications on all folders in the authenticated user's mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Uri}               url          The URL of the Web Service endpoint the Exchange server should push events to.
     * @param   {number}            frequency    The frequency, in minutes, at which the Exchange server should contact the Web Service endpoint. Frequency must be between 1 and 1440.
     * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
     * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
     * @return  {Promise<PushSubscription>}      A PushSubscription representing the new subscription    :Promise.
     */
    SubscribeToPushNotificationsOnAllFolders(url: Uri, frequency: number, watermark: string, ...eventTypes: EventType[]): Promise<PushSubscription>;
    /**
     * Subscribes to push notifications on all folders in the authenticated user's mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Uri}               url          The URL of the Web Service endpoint the Exchange server should push events to.
     * @param   {number}            frequency    The frequency, in minutes, at which the Exchange server should contact the Web Service endpoint. Frequency must be between 1 and 1440.
     * @param   {string}            watermark    An optional watermark representing a previously opened subscription.
     * @param   {string}            callerData   Optional caller data that will be returned the call back.
     * @param   {...EventType[]}    eventTypes   The event types to subscribe to.
     * @return  {Promise<PushSubscription>}      A PushSubscription representing the new subscription    :Promise.
     */
    SubscribeToPushNotificationsOnAllFolders(url: Uri, frequency: number, watermark: string, callerData: string, ...eventTypes: EventType[]): Promise<PushSubscription>;
    /**
     * Subscribes to streaming notifications. Calling this method results in a call to EWS.
     *
     * @param   {FolderId[]}   folderIds    The Ids of the folder to subscribe to.
     * @param   {EventType[]}   eventTypes   The event types to subscribe to.
     * @return  {Promise<StreamingSubscription>}        A StreamingSubscription representing the new subscription   :Promise.
     */
    SubscribeToStreamingNotifications(folderIds: FolderId[], ...eventTypes: EventType[]): Promise<StreamingSubscription>;
    /**
     * Subscribes to streaming notifications on all folders in the authenticated user's mailbox. Calling this method results in a call to EWS.
     *
     * @param   {EventType[]}   eventTypes   The event types to subscribe to.
     * @return  {Promise<StreamingSubscription>}        A StreamingSubscription representing the new subscription   :Promise.
     */
    SubscribeToStreamingNotificationsOnAllFolders(...eventTypes: EventType[]): Promise<StreamingSubscription>;
    /**
     * Unpin a TeamMailbox
     *
     * @param   {EmailAddress}      emailAddress        TeamMailbox email address
     * @return  {Promise<void>}     Promise.
     */
    UnpinTeamMailbox(emailAddress: EmailAddress): Promise<void>;
    /**
     * Synchronizes the items of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}              syncFolderId         The Id of the folder containing the items to synchronize with.
     * @param   {PropertySet}           propertySet          The set of properties to retrieve for synchronized items.
     * @param   {ItemId[]}              ignoredItemIds       The optional list of item Ids that should be ignored.
     * @param   {number}                maxChangesReturned   The maximum number of changes that should be returned.
     * @param   {number}                numberOfDays         Limit the changes returned to this many days ago; 0 means no limit.
     * @param   {SyncFolderItemsScope}  syncScope            The sync scope identifying items to include in the ChangeCollection.
     * @param   {string}                syncState            The optional sync state representing the point in time when to start the synchronization.
     * @return  {Promise<ChangeCollection<ItemChange>>}      A ChangeCollection containing a list of changes that occurred in the specified folder   :Promise.
     */
    SyncFolderItems(syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: ItemId[], maxChangesReturned: number, syncScope: SyncFolderItemsScope, syncState: string): Promise<ChangeCollection<ItemChange>>;
    /**
     * Synchronizes the items of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}              syncFolderId         The Id of the folder containing the items to synchronize with.
     * @param   {PropertySet}           propertySet          The set of properties to retrieve for synchronized items.
     * @param   {ItemId[]}              ignoredItemIds       The optional list of item Ids that should be ignored.
     * @param   {number}                maxChangesReturned   The maximum number of changes that should be returned.
     * @param   {number}                numberOfDays         Limit the changes returned to this many days ago; 0 means no limit.
     * @param   {SyncFolderItemsScope}  syncScope            The sync scope identifying items to include in the ChangeCollection.
     * @param   {string}                syncState            The optional sync state representing the point in time when to start the synchronization.
     * @return  {Promise<ChangeCollection<ItemChange>>}      A ChangeCollection containing a list of changes that occurred in the specified folder   :Promise.
     */
    SyncFolderItems(syncFolderId: FolderId, propertySet: PropertySet, ignoredItemIds: ItemId[], maxChangesReturned: number, numberOfDays: number, syncScope: SyncFolderItemsScope, syncState: string): Promise<ChangeCollection<ItemChange>>;
    /**
     * Synchronizes the sub-folders of a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      syncFolderId   The Id of the folder containing the items to synchronize with. A null value indicates the root folder of the mailbox.
     * @param   {PropertySet}   propertySet    The set of properties to retrieve for synchronized items.
     * @param   {string}        syncState      The optional sync state representing the point in time when to start the synchronization.
     * @return  {Promise<ChangeCollection<FolderChange>>}       A ChangeCollection containing a list of changes that occurred in the specified folder   :Promise.
     */
    SyncFolderHierarchy(syncFolderId: FolderId, propertySet: PropertySet, syncState: string): Promise<ChangeCollection<FolderChange>>;
    /**
     * Synchronizes the entire folder hierarchy of the mailbox this Service is connected to. Calling this method results in a call to EWS.
     *
     * @param   {PropertySet}   propertySet    The set of properties to retrieve for synchronized items.
     * @param   {string}        syncState      The optional sync state representing the point in time when to start the synchronization.
     * @return  {Promise<ChangeCollection<FolderChange>>}       A ChangeCollection containing a list of changes that occurred in the specified folder   :Promise.
     */
    SyncFolderHierarchy(propertySet: PropertySet, syncState: string): Promise<ChangeCollection<FolderChange>>;
    /**
     * Retrieves a collection of all room lists in the organization.
     *
     * @return  {Promise<EmailAddressCollection[]>}     A collection of EmailAddress objects representing all the rooms within the specifed room list   :Promise.
     */
    GetRoomLists(): Promise<EmailAddressCollection>;
    /**
     * Retrieves a collection of all rooms in the specified room list in the organization.
     *
     * @param   {EmailAddress}   emailAddress   The e-mail address of the room list.
     * @return  {Promise<EmailAddress[]>}       A collection of EmailAddress objects representing all the rooms within the specifed room list   :Promise.
     */
    GetRooms(emailAddress: EmailAddress): Promise<EmailAddress[]>;
    /**
     * Gets detailed information about the availability of a set of users, rooms, and resources within a specified time window.
     *
     * @param   {AttendeeInfo[]}        attendees           The attendees for which to retrieve availability information.
     * @param   {TimeWindow}            timeWindow          The time window in which to retrieve user availability information.
     * @param   {AvailabilityData}      requestedData       The requested data (free/busy and/or suggestions).
     * @return  {Promise<GetUserAvailabilityResults>}       The availability information for each user appears in a unique FreeBusyResponse object. The order of users in the request determines the order of availability data for each user in the response :Promise.
     */
    GetUserAvailability(attendees: AttendeeInfo[], timeWindow: TimeWindow, requestedData: AvailabilityData): Promise<GetUserAvailabilityResults>;
    /**
     * Gets detailed information about the availability of a set of users, rooms, and resources within a specified time window.
     *
     * @param   {AttendeeInfo[]}        attendees           The attendees for which to retrieve availability information.
     * @param   {TimeWindow}            timeWindow          The time window in which to retrieve user availability information.
     * @param   {AvailabilityData}      requestedData       The requested data (free/busy and/or suggestions).
     * @param   {AvailabilityOptions}   options             The options controlling the information returned.
     * @return  {Promise<GetUserAvailabilityResults>}       The availability information for each user appears in a unique FreeBusyResponse object. The order of users in the request determines the order of availability data for each user in the response :Promise.
     */
    GetUserAvailability(attendees: AttendeeInfo[], timeWindow: TimeWindow, requestedData: AvailabilityData, options: AvailabilityOptions): Promise<GetUserAvailabilityResults>;
    /**
     * Gets Out of Office (OOF) settings for a specific user. Calling this method results in a call to EWS.
     *
     * @param   {string}   smtpAddress   The SMTP address of the user for which to retrieve OOF settings.
     * @return  {Promise<OofSettings>}   An OofSettings instance containing OOF information for the specified user.
     */
    GetUserOofSettings(smtpAddress: string): Promise<OofSettings>;
    /**
     * Sets the Out of Office (OOF) settings for a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {string}        smtpAddress   The SMTP address of the user for which to set OOF settings.
     * @param   {OofSettings}   oofSettings   The OOF settings.
     * @return  {Promise<void>}      Promise.
     */
    SetUserOofSettings(smtpAddress: string, oofSettings: OofSettings): Promise<void>;
    /**
     * Sets up a conversation so that any item received within that conversation is no longer categorized. Calling this method results in a call to EWS.
     *
     * @param   {ConversationId[]}  conversationId         The id of the conversation.
     * @param   {boolean}           processSynchronously   Indicates whether the method should return only once disabling this rule and removing the categories from existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    DisableAlwaysCategorizeItemsInConversations(conversationId: ConversationId[], processSynchronously: boolean): Promise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Sets up a conversation so that any item received within that conversation is no longer moved to Deleted Items folder. Calling this method results in a call to EWS.
     *
     * @param   {ConversationId[]}  conversationId         The id of the conversation.
     * @param   {boolean}           processSynchronously   Indicates whether the method should return only once disabling this rule and restoring the items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    DisableAlwaysDeleteItemsInConversations(conversationId: ConversationId[], processSynchronously: boolean): Promise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Sets up a conversation so that any item received within that conversation is no longer moved to a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {ConversationId[]}  conversationIds        The conversation ids.
     * @param   {boolean}           processSynchronously   Indicates whether the method should return only once disabling this rule is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    DisableAlwaysMoveItemsInConversations(conversationIds: ConversationId[], processSynchronously: boolean): Promise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Sets up a conversation so that any item received within that conversation is always categorized. Calling this method results in a call to EWS.
     *
     * @param   {ConversationId[]}  conversationId         The id of the conversation.
     * @param   {string[]}          categories             The categories that should be stamped on items in the conversation.
     * @param   {boolean}           processSynchronously   Indicates whether the method should return only once enabling this rule and stamping existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    EnableAlwaysCategorizeItemsInConversations(conversationId: ConversationId[], categories: string[], processSynchronously: boolean): Promise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Sets up a conversation so that any item received within that conversation is always moved to Deleted Items folder. Calling this method results in a call to EWS.
     *
     * @param   {ConversationId[]}  conversationId         The id of the conversation.
     * @param   {boolean}           processSynchronously   Indicates whether the method should return only once enabling this rule and deleting existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    EnableAlwaysDeleteItemsInConversations(conversationId: ConversationId[], processSynchronously: boolean): Promise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Sets up a conversation so that any item received within that conversation is always moved to a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {ConversationId[]}  conversationId         The id of the conversation.
     * @param   {FolderId}          destinationFolderId    The Id of the folder to which conversation items should be moved.
     * @param   {boolean}           processSynchronously   Indicates whether the method should return only once enabling this rule and moving existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    EnableAlwaysMoveItemsInConversations(conversationId: ConversationId[], destinationFolderId: FolderId, processSynchronously: boolean): Promise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Retrieves a collection of all Conversations in the specified Folder.
     *
     * @param   {ViewBase}   view       The view controlling the number of conversations returned.
     * @param   {FolderId}   folderId   The Id of the folder in which to search for conversations.
     * @return  {Promise<Conversation[]>}       Collection of conversations.
     */
    FindConversation(view: ViewBase, folderId: FolderId): Promise<Conversation[]>;
    /**
     * Retrieves a collection of all Conversations in the specified Folder.
     *
     * @param   {ViewBase}  view                   The view controlling the number of conversations returned.
     * @param   {FolderId}  folderId               The Id of the folder in which to search for conversations.
     * @param   {string}    queryString            The query string for which the search is being performed
     * @return  {Promise<FindConversationResults>}      FindConversation results    :Promise.
     */
    FindConversation(view: ViewBase, folderId: FolderId, queryString: string): Promise<Conversation[]>;
    /**
     * Searches for and retrieves a collection of Conversations in the specified Folder. Along with conversations, a list of highlight terms are returned.
     *
     * @param   {ViewBase}  view                   The view controlling the number of conversations returned.
     * @param   {FolderId}  folderId               The Id of the folder in which to search for conversations.
     * @param   {string}    queryString            The query string for which the search is being performed
     * @param   {boolean}   returnHighlightTerms   Flag indicating if highlight terms should be returned in the response
     * @return  {Promise<FindConversationResults>}      FindConversation results    :Promise.
     */
    FindConversation(view: ViewBase, folderId: FolderId, queryString: string, returnHighlightTerms: boolean): Promise<FindConversationResults>;
    /**
     * Searches for and retrieves a collection of Conversations in the specified Folder. Along with conversations, a list of highlight terms are returned.
     *
     * @param   {ViewBase}                  view                   The view controlling the number of conversations returned.
     * @param   {FolderId}                  folderId               The Id of the folder in which to search for conversations.
     * @param   {string}                    queryString            The query string for which the search is being performed
     * @param   {boolean}                   returnHighlightTerms   Flag indicating if highlight terms should be returned in the response
     * @param   {MailboxSearchLocation?}    mailboxScope           The mailbox scope to reference.
     * @return  {Promise<FindConversationResults>}      FindConversation results    :Promise.
     */
    FindConversation(view: ViewBase, folderId: FolderId, queryString: string, returnHighlightTerms: boolean, mailboxScope: MailboxSearchLocation): Promise<FindConversationResults>;
    /**
     * Retrieves a collection of all Conversations in the specified Folder.
     *
     * @param   {ViewBase}  view            The view controlling the number of conversations returned.
     * @param   {FolderId}  folderId        The Id of the folder in which to search for conversations.
     * @param   {string}    anchorMailbox   The anchorMailbox Smtp address to route the request directly to group mailbox.
     * @return  {Promise<Conversation[]>}   Collection of conversations :Promise.
     */
    FindGroupConversation(view: ViewBase, folderId: FolderId, anchorMailbox: string): Promise<Conversation[]>;
    /**
     * Gets the items for a set of conversations.
     *
     * @param   {ConversationRequest[]}     conversations     Conversations with items to load.
     * @param   {PropertySet}               propertySet       The set of properties to load.
     * @param   {FolderId[]}                foldersToIgnore   The folders to ignore.
     * @param   {ConversationSortOrder}     sortOrder         Conversation item sort order.
     * @return  {Promise<ServiceResponseCollection<GetConversationItemsResponse>>}      GetConversationItems response    :Promise.
     */
    GetConversationItems(conversations: ConversationRequest[], propertySet: PropertySet, foldersToIgnore: FolderId[], sortOrder: ConversationSortOrder): Promise<ServiceResponseCollection<GetConversationItemsResponse>>;
    /**
     * Gets the items for a set of conversations.
     *
     * @param   {ConversationRequest[]}     conversations     Conversations with items to load.
     * @param   {PropertySet}               propertySet       The set of properties to load.
     * @param   {FolderId[]}                foldersToIgnore   The folders to ignore.
     * @param   {ConversationSortOrder}     sortOrder         Conversation item sort order.
     * @param   {MailboxSearchLocation}     mailboxScope      The mailbox scope to reference.
     * @return  {Promise<ServiceResponseCollection<GetConversationItemsResponse>>}      GetConversationItems response    :Promise.
     */
    GetConversationItems(conversations: ConversationRequest[], propertySet: PropertySet, foldersToIgnore: FolderId[], sortOrder: ConversationSortOrder, mailboxScope: MailboxSearchLocation): Promise<ServiceResponseCollection<GetConversationItemsResponse>>;
    /**
     * Gets the items for a conversation.
     *
     * @param   {ConversationId}            conversationId    The conversation id.
     * @param   {PropertySet}               propertySet       The set of properties to load.
     * @param   {string}                    syncState         The optional sync state representing the point in time when to start the synchronization.
     * @param   {FolderId[]}                foldersToIgnore   The folders to ignore.
     * @param   {ConversationSortOrder}     sortOrder         Conversation item sort order.
     * @return  {Promise<ConversationResponse>}               GetConversationItems response    :Promise.
     */
    GetConversationItems(conversationId: ConversationId, propertySet: PropertySet, syncState: string, foldersToIgnore: FolderId[], sortOrder: ConversationSortOrder): Promise<ConversationResponse>;
    /**
     * Gets the items for a conversation.
     *
     * /remarks/    This API designed to be used primarily in groups scenarios where we want to set the anchor mailbox header so that request is routed directly to the group mailbox backend server.
     * @param   {ConversationId}            conversationId    The conversation id.
     * @param   {PropertySet}               propertySet       The set of properties to load.
     * @param   {string}                    syncState         The optional sync state representing the point in time when to start the synchronization.
     * @param   {FolderId[]}                foldersToIgnore   The folders to ignore.
     * @param   {ConversationSortOrder}     sortOrder         Conversation item sort order.
     * @param   {string}                    anchorMailbox     The smtp address of the mailbox hosting the conversations
     * @return  {Promise<ConversationResponse>}               ConversationResponseType response :Promise.
     */
    GetGroupConversationItems(conversationId: ConversationId, propertySet: PropertySet, syncState: string, foldersToIgnore: FolderId[], sortOrder: ConversationSortOrder, anchorMailbox: string): Promise<ConversationResponse>;
    /**
     * Copies the items in the specified conversation to the specified destination folder. Calling this method results in a call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}     idLastSyncTimePairs   The pairs of Id of conversation whose items should be copied and the date and time conversation was last synced (Items received after that date will not be copied).
     * @param   {FolderId}                                      contextFolderId       The context folder id.
     * @param   {FolderId}                                      destinationFolderId   The destination folder id.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    CopyItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId: FolderId, destinationFolderId: FolderId): Promise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Deletes the items in the specified conversation. Calling this method results in a call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}     idLastSyncTimePairs   The pairs of Id of conversation whose items should be deleted and the date and time conversation was last synced (Items received after that date will not be deleted).
     * @param   {FolderId}                                      contextFolderId       The Id of the folder that contains the conversation.
     * @param   {DeleteMode}                                    deleteMode            The deletion mode.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    DeleteItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId: FolderId, deleteMode: DeleteMode): Promise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Moves the items in the specified conversation to the specified destination folder. Calling this method results in a call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}     idLastSyncTimePairs   The pairs of Id of conversation whose items should be moved and the dateTime conversation was last synced (Items received after that dateTime will not be moved).
     * @param   {FolderId}                                      contextFolderId       The Id of the folder that contains the conversation.
     * @param   {FolderId}                                      destinationFolderId   The Id of the destination folder.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    MoveItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId: FolderId, destinationFolderId: FolderId): Promise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Sets flag status for items in conversation. Calling this method would result in call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}   idLastSyncTimePairs   The pairs of Id of conversation whose items should have their read state set and the date and time conversation was last synced (Items received after that date will not have their read state set).
     * @param   {FolderId}   contextFolderId       The Id of the folder that contains the conversation.
     * @param   {Flag}   flagStatus            Flag status to apply to conversation items.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    SetFlagStatusForItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId: FolderId, flagStatus: Flag): Promise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Sets the read state for items in conversation. Calling this method would result in call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}     idLastSyncTimePairs    The pairs of Id of conversation whose items should have their read state set and the date and time conversation was last synced (Items received after that date will not have their read state set).
     * @param   {FolderId}                                      contextFolderId        The Id of the folder that contains the conversation.
     * @param   {boolean}                                       isRead                 if set to true, conversation items are marked as read; otherwise they are marked as unread.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    SetReadStateForItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId: FolderId, isRead: boolean): Promise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Sets the read state for items in conversation. Calling this method would result in call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}     idLastSyncTimePairs    The pairs of Id of conversation whose items should have their read state set and the date and time conversation was last synced (Items received after that date will not have their read state set).
     * @param   {FolderId}                                      contextFolderId        The Id of the folder that contains the conversation.
     * @param   {boolean}                                       isRead                 if set to true, conversation items are marked as read; otherwise they are marked as unread.
     * @param   {boolean}                                       suppressReadReceipts   if set to *true* read receipts are suppressed.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    SetReadStateForItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId: FolderId, isRead: boolean, suppressReadReceipts: boolean): Promise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Sets the retention policy for items in conversation. Calling this method would result in call to EWS.
     *
     * @param   {KeyValuePair<ConversationId, DateTime?>[]}     idLastSyncTimePairs    The pairs of Id of conversation whose items should have their retention policy set and the date and time conversation was last synced (Items received after that date will not have their retention policy set).
     * @param   {FolderId}                                      contextFolderId        The Id of the folder that contains the conversation.
     * @param   {RetentionType}                                 retentionPolicyType    Retention policy type.
     * @param   {Guid?}                                         retentionPolicyTagId   Retention policy tag id.  Null will clear the policy.
     * @return  {Promise<ServiceResponseCollection<ServiceResponse>>}       :Promise
     */
    SetRetentionPolicyForItemsInConversations(idLastSyncTimePairs: KeyValuePair<ConversationId, DateTime>[], // IEnumerable<KeyValuePair<ConversationId, DateTime?>> idTimePairs, - DateTime is Nullable
    contextFolderId: FolderId, retentionPolicyType: RetentionType, retentionPolicyTagId: Guid): Promise<ServiceResponseCollection<ServiceResponse>>;
    /**
     * Converts Id from one format to another in a single call to EWS.
     *
     * @param   {AlternateIdBase}   id                 The Id to convert.
     * @param   {IdFormat}          destinationFormat   The destination format.
     * @return  {Promise<AlternateIdBase>}     The converted Id :Promise.
     */
    ConvertId(id: AlternateIdBase, destinationFormat: IdFormat): Promise<AlternateIdBase>;
    /**
     * Converts multiple Ids from one format to another in a single call to EWS.
     *
     * @param   {AlternateIdBase[]}     ids                 The Ids to convert.
     * @param   {IdFormat}              destinationFormat   The destination format.
     * @return  {Promise<ServiceResponseCollection<ConvertIdResponse>>}     A ServiceResponseCollection providing conversion results for each specified Ids :Promise.
     */
    ConvertIds(ids: AlternateIdBase[], destinationFormat: IdFormat): Promise<ServiceResponseCollection<ConvertIdResponse>>;
    /**
     * Adds delegates to a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Mailbox}                       mailbox                        The mailbox to add delegates to.
     * @param   {MeetingRequestsDeliveryScope}  meetingRequestsDeliveryScope   Indicates how meeting requests should be sent to delegates.
     * @param   {...DelegateUser[]}             delegateUsers                  The delegate users to add.
     * @return  {Promise<DelegateUserResponse[]>}       A collection of DelegateUserResponse objects providing the results of the operation :Promise.
     */
    AddDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, ...delegateUsers: DelegateUser[]): Promise<DelegateUserResponse[]>;
    /**
     * Adds delegates to a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Mailbox}                       mailbox                        The mailbox to add delegates to.
     * @param   {MeetingRequestsDeliveryScope}  meetingRequestsDeliveryScope   Indicates how meeting requests should be sent to delegates.
     * @param   {DelegateUser[]}                delegateUsers                  The delegate users to add.
     * @return  {Promise<DelegateUserResponse[]>}       A collection of DelegateUserResponse objects providing the results of the operation :Promise.
     */
    AddDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: DelegateUser[]): Promise<DelegateUserResponse[]>;
    /**
     * Retrieves the delegates of a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Mailbox}       mailbox                 The mailbox to retrieve the delegates of.
     * @param   {boolean}       includePermissions      Indicates whether detailed permissions should be returned fro each delegate.
     * @param   {...UserId[]}   userIds                 The optional Ids of the delegate users to retrieve.
     * @return  {Promise<DelegateInformation>}          A GetDelegateResponse providing the results of the operation    :Promise.
     */
    GetDelegates(mailbox: Mailbox, includePermissions: boolean, ...userIds: UserId[]): Promise<DelegateInformation>;
    /**
     * Retrieves the delegates of a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Mailbox}   mailbox                 The mailbox to retrieve the delegates of.
     * @param   {boolean}   includePermissions      Indicates whether detailed permissions should be returned fro each delegate.
     * @param   {UserId[]}  userIds                 The optional Ids of the delegate users to retrieve.
     * @return  {Promise<DelegateInformation>}      A GetDelegateResponse providing the results of the operation    :Promise.
     */
    GetDelegates(mailbox: Mailbox, includePermissions: boolean, userIds: UserId[]): Promise<DelegateInformation>;
    /**
     * Removes delegates on a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Mailbox}       mailbox   The mailbox to remove delegates from.
     * @param   {...UserId[]}   userIds   The Ids of the delegate users to remove.
     * @return  {Promise<DelegateUserResponse[]>}       A collection of DelegateUserResponse objects providing the results of the operation :Promise.
     */
    RemoveDelegates(mailbox: Mailbox, ...userIds: UserId[]): Promise<DelegateUserResponse[]>;
    /**
     * Removes delegates on a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Mailbox}   mailbox   The mailbox to remove delegates from.
     * @param   {UserId[]}  userIds   The Ids of the delegate users to remove.
     * @return  {Promise<DelegateUserResponse[]>}       A collection of DelegateUserResponse objects providing the results of the operation :Promise.
     */
    RemoveDelegates(mailbox: Mailbox, userIds: UserId[]): Promise<DelegateUserResponse[]>;
    /**
     * Updates delegates on a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Mailbox}                       mailbox                        The mailbox to update delegates on.
     * @param   {MeetingRequestsDeliveryScope}  meetingRequestsDeliveryScope   Indicates how meeting requests should be sent to delegates.
     * @param   {...DelegateUser[]}             delegateUsers                  The delegate users to update.
     * @return  {Promise<DelegateUserResponse[]>}       A collection of DelegateUserResponse objects providing the results of the operation :Promise.
     */
    UpdateDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, ...delegateUsers: DelegateUser[]): Promise<DelegateUserResponse[]>;
    /**
     * Updates delegates on a specific mailbox. Calling this method results in a call to EWS.
     *
     * @param   {Mailbox}                       mailbox                        The mailbox to update delegates on.
     * @param   {MeetingRequestsDeliveryScope}  meetingRequestsDeliveryScope   Indicates how meeting requests should be sent to delegates.
     * @param   {DelegateUser[]}                delegateUsers                  The delegate users to update.
     * @return  {Promise<DelegateUserResponse[]>}       A collection of DelegateUserResponse objects providing the results of the operation :Promise.
     */
    UpdateDelegates(mailbox: Mailbox, meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope, delegateUsers: DelegateUser[]): Promise<DelegateUserResponse[]>;
    /**
     * Creates a UserConfiguration.
     *
     * @param   {UserConfiguration}   userConfiguration   The UserConfiguration.
     * @return  {Promise<void>}       :Promise.
     */
    CreateUserConfiguration(userConfiguration: UserConfiguration): Promise<void>;
    /**
     * Deletes a UserConfiguration.
     *
     * @param   {string}    name             Name of the UserConfiguration to retrieve.
     * @param   {FolderId}  parentFolderId   Id of the folder containing the UserConfiguration.
     * @return  {Promise<void>}     :Promise.
     */
    DeleteUserConfiguration(name: string, parentFolderId: FolderId): Promise<void>;
    /**
     * Gets a UserConfiguration.
     *
     * @param   {string}                        name             Name of the UserConfiguration to retrieve.
     * @param   {FolderId}                      parentFolderId   Id of the folder containing the UserConfiguration.
     * @param   {UserConfigurationProperties}   properties       Properties to retrieve.
     * @return  {Promise<UserConfiguration>}    A UserConfiguration.
     */
    GetUserConfiguration(name: string, parentFolderId: FolderId, properties: UserConfigurationProperties): Promise<UserConfiguration>;
    /**
     * Loads the properties of the specified userConfiguration.
     *
     * @param   {UserConfiguration}             userConfiguration   The userConfiguration containing properties to load.
     * @param   {UserConfigurationProperties}   properties          Properties to retrieve.
     * @return  {Promise<void>}                 :Promise.
     */
    LoadPropertiesForUserConfiguration(userConfiguration: UserConfiguration, properties: UserConfigurationProperties): Promise<void>;
    /**
     * Updates a UserConfiguration.
     *
     * @param   {UserConfiguration}   userConfiguration   The UserConfiguration.
     * @return  {Promise<void>}       :Promise.
     */
    UpdateUserConfiguration(userConfiguration: UserConfiguration): Promise<void>;
    /**
     * Retrieves the inbox rules of the specified user.
     *
     * @return  {Promise<RuleCollection>}       A RuleCollection object containing the inbox rules of the specified user    :Promise.
     */
    GetInboxRules(): Promise<RuleCollection>;
    /**
     * Retrieves the inbox rules of the specified user.
     *
     * @param   {string}   mailboxSmtpAddress   The SMTP address of the user whose inbox rules should be retrieved.
     * @return  {Promise<RuleCollection>}       A RuleCollection object containing the inbox rules of the specified user    :Promise.
     */
    GetInboxRules(mailboxSmtpAddress: string): Promise<RuleCollection>;
    /**
     * Update the specified user's inbox rules by applying the specified operations.
     *
     * @param   {RuleOperation[]}   operations              The operations that should be applied to the user's inbox rules.
     * @param   {boolean}           removeOutlookRuleBlob   Indicate whether or not to remove Outlook Rule Blob.
     * @param   {boolean}           mailboxSmtpAddress      The SMTP address of the user whose inbox rules should be updated.
     * @return  {Promise<void>}     :Promise
     */
    UpdateInboxRules(operations: RuleOperation[], removeOutlookRuleBlob: boolean, mailboxSmtpAddress: string): Promise<void>;
    /**
     * Update the specified user's inbox rules by applying the specified operations.
     *
     * @param   {RuleOperation[]}   operations              The operations that should be applied to the user's inbox rules.
     * @param   {boolean}           removeOutlookRuleBlob   Indicate whether or not to remove Outlook Rule Blob.
     * @return  {Promise<void>}     :Promise
     */
    UpdateInboxRules(operations: RuleOperation[], removeOutlookRuleBlob: boolean): Promise<void>;
    /**
     * Get dicovery search configuration
     *
     * @param   {string}    searchId                       Search Id
     * @param   {boolean}   expandGroupMembership          True if want to expand group membership
     * @param   {boolean}   inPlaceHoldConfigurationOnly   True if only want the inplacehold configuration
     * @return  {Promise<GetDiscoverySearchConfigurationResponse>}      Service response object    :Promise.
     */
    GetDiscoverySearchConfiguration(searchId: string, expandGroupMembership: boolean, inPlaceHoldConfigurationOnly: boolean): Promise<GetDiscoverySearchConfigurationResponse>;
    /**
     * Get hold on mailboxes
     *
     * @param   {string}   holdId   Hold id
     * @return  {Promise<GetHoldOnMailboxesResponse>}       Service response object
     */
    GetHoldOnMailboxes(holdId: string): Promise<GetHoldOnMailboxesResponse>;
    /**
     * Get non indexable item details
     *
     * @param   {string[]}  mailboxes           Array of mailbox legacy DN
     * @return  {Promise<GetNonIndexableItemDetailsResponse>}       Service response object :Promise.
     */
    GetNonIndexableItemDetails(mailboxes: string[]): Promise<GetNonIndexableItemDetailsResponse>;
    /**
     * Get non indexable item details
     *
     * @param   {string[]}              mailboxes           Array of mailbox legacy DN
     * @param   {number}                pageSize            The page size
     * @param   {string}                pageItemReference   Page item reference
     * @param   {SearchPageDirection}   pageDirection       Page direction
     * @return  {Promise<GetNonIndexableItemDetailsResponse>}       Service response object :Promise.
     */
    GetNonIndexableItemDetails(mailboxes: string[], pageSize: number, pageItemReference: string, pageDirection: SearchPageDirection): Promise<GetNonIndexableItemDetailsResponse>;
    /**
     * Get non indexable item details
     *
     * @param   {GetNonIndexableItemDetailsParameters}   parameters   Get non indexable item details parameters
     * @return  {Promise<GetNonIndexableItemDetailsResponse>}         Service response object   :Promise.
     */
    GetNonIndexableItemDetails(parameters: GetNonIndexableItemDetailsParameters): Promise<GetNonIndexableItemDetailsResponse>;
    /**
     * Get non indexable item statistics
     *
     * @param   {string[]}   mailboxes   Array of mailbox legacy DN
     * @return  {Promise<GetNonIndexableItemStatisticsResponse>}    Service response object :Promise.
     */
    GetNonIndexableItemStatistics(mailboxes: string[]): Promise<GetNonIndexableItemStatisticsResponse>;
    /**
     * Get non indexable item statistics
     *
     * @param   {GetNonIndexableItemStatisticsParameters}   parameters   Get non indexable item statistics parameters
     * @return  {Promise<GetNonIndexableItemStatisticsResponse>}         Service response object :Promise.
     */
    GetNonIndexableItemStatistics(parameters: GetNonIndexableItemStatisticsParameters): Promise<GetNonIndexableItemStatisticsResponse>;
    /**
     * Get searchable mailboxes
     *
     * @param   {string}    searchFilter            Search filter
     * @param   {boolean}   expandGroupMembership   True if want to expand group membership
     * @return  {Promise<GetSearchableMailboxesResponse>}       Service response object :Promise
     */
    GetSearchableMailboxes(searchFilter: string, expandGroupMembership: boolean): Promise<GetSearchableMailboxesResponse>;
    /**
     * Search mailboxes
     *
     * @param   {SearchMailboxesParameters}   searchParameters   Search mailboxes parameters
     * @return  {Promise<ServiceResponseCollection<SearchMailboxesResponse>>}       Collection of search mailboxes response object  :Promise.
     */
    SearchMailboxes(searchParameters: SearchMailboxesParameters): Promise<ServiceResponseCollection<SearchMailboxesResponse>>;
    /**
     * Search mailboxes
     *
     * @param   {MailboxQuery[]}        mailboxQueries      Collection of query and mailboxes
     * @param   {SearchResultType}      resultType          Search result type
     * @return  {Promise<ServiceResponseCollection<SearchMailboxesResponse>>}       Collection of search mailboxes response object  :Promise.
     */
    SearchMailboxes(mailboxQueries: MailboxQuery[], resultType: SearchResultType): Promise<ServiceResponseCollection<SearchMailboxesResponse>>;
    /**
     * Search mailboxes
     *
     * @param   {MailboxQuery[]}        mailboxQueries      Collection of query and mailboxes
     * @param   {SearchResultType}      resultType          Search result type
     * @param   {string}                sortByProperty      Sort by property name
     * @param   {SortDirection}         sortOrder           Sort order
     * @param   {number}                pageSize            Page size
     * @param   {SearchPageDirection}   pageDirection       Page navigation direction
     * @param   {string}                pageItemReference   Item reference used for paging
     * @return  {Promise<ServiceResponseCollection<SearchMailboxesResponse>>}       Collection of search mailboxes response object  :Promise.
     */
    SearchMailboxes(mailboxQueries: MailboxQuery[], resultType: SearchResultType, sortByProperty: string, sortOrder: SortDirection, pageSize: number, pageDirection: SearchPageDirection, pageItemReference: string): Promise<ServiceResponseCollection<SearchMailboxesResponse>>;
    /**
     * Set hold on mailboxes
     *
     * @param   {SetHoldOnMailboxesParameters}  parameters      Set hold parameters
     * @return  {Promise<SetHoldOnMailboxesResponse>}   Service response object :Promise.
     */
    SetHoldOnMailboxes(parameters: SetHoldOnMailboxesParameters): Promise<SetHoldOnMailboxesResponse>;
    /**
     * Set hold on mailboxes
     *
     * @param   {string}        holdId          Hold id
     * @param   {HoldAction}    actionType      Action type
     * @param   {string}        query           Query string
     * @param   {string[]}      mailboxes       Collection of mailboxes
     * @return  {Promise<SetHoldOnMailboxesResponse>}   Service response object :Promise.
     */
    SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, mailboxes: String[]): Promise<SetHoldOnMailboxesResponse>;
    /**
     * Set hold on mailboxes
     *
     * @param   {string}        holdId                Hold id
     * @param   {HoldAction}    actionType            Action type
     * @param   {string}        query                 Query string
     * @param   {string}        inPlaceHoldIdentity   in-place hold identity
     * @return  {Promise<SetHoldOnMailboxesResponse>}   Service response object :Promise.
     */
    SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, inPlaceHoldIdentity: string): Promise<SetHoldOnMailboxesResponse>;
    /**
     * Set hold on mailboxes
     *
     * @param   {string}        holdId                Hold id
     * @param   {HoldAction}    actionType            Action type
     * @param   {string}        query                 Query string
     * @param   {string}        inPlaceHoldIdentity   in-place hold identity
     * @param   {string}        itemHoldPeriod        item hold period
     * @return  {Promise<SetHoldOnMailboxesResponse>}   Service response object :Promise.
     */
    SetHoldOnMailboxes(holdId: string, actionType: HoldAction, query: string, inPlaceHoldIdentity: string, itemHoldPeriod: string): Promise<SetHoldOnMailboxesResponse>;
    /**
     * Get user retention policy tags.
     *
     * @return  {Promise<GetUserRetentionPolicyTagsResponse>}       Service response object.
     */
    GetUserRetentionPolicyTags(): Promise<GetUserRetentionPolicyTagsResponse>;
    /**
     * Initializes the Url property to the Exchange Web Services URL for the specified e-mail address by calling the Autodiscover service.
     *
     * @param   {string}   emailAddress     The email address to use.
     */
    AutodiscoverUrl(emailAddress: string): Promise<void>;
    /**
     * Initializes the Url property to the Exchange Web Services URL for the specified e-mail address by calling the Autodiscover service.
     *
     * @param   {string}   emailAddress                             The email address to use.
     * @param   {AutodiscoverRedirectionUrlValidationCallback}      validateRedirectionUrlCallback   The callback used to validate redirection URL.
     */
    AutodiscoverUrl(emailAddress: string, validateRedirectionUrlCallback: AutodiscoverRedirectionUrlValidationCallback): Promise<void>;
    /**
     * GetClientAccessToken
     *
     * @param   {KeyValuePair<string, ClientAccessTokenType>[]}   idAndTypes   Id and Types
     * @return  {Promise<ServiceResponseCollection<GetClientAccessTokenResponse>>}      A ServiceResponseCollection providing token results for each of the specified id and types  :Promise.
     */
    GetClientAccessToken(idAndTypes: KeyValuePair<string, ClientAccessTokenType>[]): Promise<ServiceResponseCollection<GetClientAccessTokenResponse>>;
    /**
     * GetClientAccessToken
     *
     * @param   {ClientAccessTokenRequest[]}   tokenRequests   Token requests array
     * @return  {Promise<ServiceResponseCollection<GetClientAccessTokenResponse>>}      A ServiceResponseCollection providing token results for each of the specified id and types  :Promise.
     */
    GetClientAccessToken(tokenRequests: ClientAccessTokenRequest[]): Promise<ServiceResponseCollection<GetClientAccessTokenResponse>>;
    /**
     * Get the app manifests.
     *
     * @return  {Promise<string[]>}              Collection of manifests xml file as base64 encoded string :Promise.
     */
    GetAppManifests(): Promise<string[]>;
    /**
     * Get the app manifests.  Works with Exchange 2013 SP1 or later EWS.
     *
     * @param   {string}   apiVersionSupported      The api version supported by the client.
     * @param   {string}   schemaVersionSupported   The schema version supported by the client.
     * @return  {Promise<ClientApp[]>}              Collection of manifests :Promise.
     */
    GetAppManifests(apiVersionSupported: string, schemaVersionSupported: string): Promise<ClientApp[]>;
    /**
     * Get App Marketplace Url.
     *
     * /remarks/                        Exception will be thrown for errors.
     * @return  {Promise<string>}       marketplace url as string :Promise.
     */
    GetAppMarketplaceUrl(): Promise<string>;
    /**
     * Get App Marketplace Url.  Works with Exchange 2013 SP1 or later EWS.
     *
     * /remarks/                                    Exception will be thrown for errors.
     * @param   {string}   apiVersionSupported      The api version supported by the client.
     * @param   {string}   schemaVersionSupported   The schema version supported by the client.
     * @return  {Promise<string>}                   marketplace url as string :Promise.
     */
    GetAppMarketplaceUrl(apiVersionSupported: string, schemaVersionSupported: string): Promise<string>;
    /**
     * Disable an App.
     *
     * /remarks/    Exception will be thrown for errors.
     * @param   {string}                id              App ID
     * @param   {DisableReasonType}     disableReason   Disable reason
     * @return  {Promise<void>}         :Promise.
     */
    DisableApp(id: string, disableReason: DisableReasonType): Promise<void>;
    /**
     * Install an App.
     *
     * /remarks/    Exception will be thrown for errors.
     * @param   {string}   manifestStream   The manifest's plain text XML as base64 encoded string.
     * @return  {Promise<void>}     :Promise.
     */
    InstallApp(manifestStream: string): Promise<void>;
    /**
     * Uninstall an App.
     *
     * /remarks/    Exception will be thrown for errors.
     * @param   {string}   id   App ID
     * @return  {Promise<void>}     :Promise.
     */
    UninstallApp(id: string): Promise<void>;
    static IsMajorMinor(versionPart: string): boolean;
    /**
     * Sets the type of the content.
     *
     * @param   {IXHROptions}   request   The request.
     */
    SetContentType(request: IXHROptions): void;
    /**
     * Get the TimeZoneInfo objects from server
     *
     * @returns {Promise<TimeZoneInfo[]>}
     */
    GetServerTimeZones(): Promise<TimeZoneInfo[]>;
}
/**
 * Represents an abstract binding to an Exchange Service.
 */
 abstract class ExchangeServiceBase {
    OnResponseHeadersCaptured: ResponseHeadersCapturedHandler;
    protected timeZone: TimeZoneInfo;
    /**
     * Provides an event that applications can implement to emit custom SOAP headers in requests that are sent to Exchange.
     * @event
     */
    OnSerializeCustomSoapHeaders: CustomXmlSerializationDelegate;
    /**
     * Gets or sets a value indicating whether client latency info is push to server.
     */
    SendClientLatencies: boolean;
    /**
     * Gets or sets a value indicating whether tracing is enabled.
     */
    TraceEnabled: boolean;
    /**
     * Gets or sets the trace flags.
     */
    TraceFlags: TraceFlags;
    /**
     * Gets or sets the trace listener.
     */
    TraceListener: ITraceListener;
    /**
     * Gets or sets the credentials used to authenticate with the Exchange Web Services. Setting the Credentials property automatically sets the UseDefaultCredentials to false.
     */
    Credentials: ExchangeCredentials;
    /**
     * Gets or sets the timeout used when sending HTTP requests and when receiving HTTP responses, in milliseconds. Defaults to 100000.
     */
    Timeout: number;
    /**
     * Gets or sets a value that indicates whether HTTP pre-authentication should be performed.
     */
    PreAuthenticate: boolean;
    /**
     * Gets or sets a value indicating whether GZip compression encoding should be accepted.
     * @remarks This value will tell the server that the client is able to handle GZip compression encoding. The server will only send Gzip compressed content if it has been configured to do so.
     * @remarks {ewsjs} not used in ewsjs
     */
    AcceptGzipEncoding: boolean;
    /**
     * Gets the requested server version.
     */
    readonly RequestedServerVersion: ExchangeVersion;
    /**
     * Gets or sets the user agent.
     */
    UserAgent: string;
    /**
     * Gets information associated with the server that processed the last request. Will be null if no requests have been processed.
     */
    /** @internal set */
    ServerInfo: ExchangeServerInfo;
    /**
     * Gets or sets if the request to the internet resource should contain a Connection HTTP header with the value Keep-alive
     */
    KeepAlive: boolean;
    /**
     * Gets or sets the name of the connection group for the request.
     */
    ConnectionGroupName: string;
    /**
     * Gets or sets the request id for the request.
     */
    ClientRequestId: string;
    /**
     * Gets or sets a flag to indicate whether the client requires the server side to return the  request id.
     */
    ReturnClientRequestId: boolean;
    /**
     * Gets a collection of HTTP headers that will be sent with each request to EWS.
     */
    readonly HttpHeaders: Dictionary<string, string>;
    /**
     * Gets a collection of HTTP headers from the last response.
     */
    readonly HttpResponseHeaders: Dictionary<string, string>;
    XHRApi: IXHRApi;
    /**
     * Initializes a new instance of the **ExchangeServiceBase** class.
     *
     */
    constructor();
    /**
     * Initializes a new instance of the **ExchangeServiceBase** class.
     *
     * @param   {TimeZoneInfo}   timeZone   The time zone to which the service is scoped.
     */
    constructor(timeZone: TimeZoneInfo);
    /**
     * Initializes a new instance of the **ExchangeServiceBase** class.
     *
     * @param   {ExchangeVersion}   requestedServerVersion   The requested server version.
     */
    constructor(requestedServerVersion: ExchangeVersion);
    /**
     * Initializes a new instance of the **ExchangeServiceBase** class.
     *
     * @param   {ExchangeVersion}   requestedServerVersion   The requested server version.
     * @param   {TimeZoneInfo}      timeZone                 The time zone to which the service is scoped.
     */
    constructor(requestedServerVersion: ExchangeVersion, timeZone: TimeZoneInfo);
}
/**
 * JSON names not shared with the XmlElementNames or XmlAttributeNames classes.
 */
 module JsonNames {
    var Events: string;
    var NotificationType: string;
    var OldFolderId: string;
    var OldItemId: string;
    var PathToExtendedFieldType: string;
    var PathToIndexedFieldType: string;
    var PathToUnindexedFieldType: string;
    var Path: string;
    var RecurrencePattern: string;
    var RecurrenceRange: string;
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
    readonly Member: T;
    constructor(initializationDelegate: InitializeLazyMember<T>);
}
export interface InitializeLazyMember<T> {
    (): T;
} type DefaultPropertySetDictionary = LazyMember<Dictionary<BasePropertySet, string>>;
/**
 * Represents a set of item or folder properties. Property sets are used to indicate what properties of an item or folder should be loaded when binding to an existing item or folder or when loading an item or folder's properties.
 *
 * @sealed
 */
 class PropertySet implements ISelfValidate, IEnumerable<PropertyDefinitionBase> {
    /**
     * Returns a predefined property set that only includes the Id property.
     */
    static readonly IdOnly: PropertySet;
    /**
     * Returns a predefined property set that includes the first class properties of an item or folder.
     */
    static readonly FirstClassProperties: PropertySet;
    /**
     * Gets or sets the base property set the property set is based upon.
     */
    BasePropertySet: BasePropertySet;
    /**
     * Gets or sets type of body that should be loaded on items. If RequestedBodyType is null, body is returned as HTML if available, plain text otherwise.
     *
     * @Nullable
     */
    RequestedBodyType: BodyType;
    /**
     * Gets or sets type of body that should be loaded on items. If null, the should return the same value as body type.
     *
     * @nullable
     */
    RequestedUniqueBodyType: BodyType;
    /**
     * Gets or sets type of normalized body that should be loaded on items. If null, the should return the same value as body type.
     *
     * @nullable
     */
    RequestedNormalizedBodyType: BodyType;
    /**
     * Gets the number of explicitly added properties in this set.
     */
    readonly Count: number;
    /**
     * Gets or sets value indicating whether or not to filter potentially unsafe HTML content from message bodies.
     *
     * @nullable
     */
    FilterHtmlContent: boolean;
    /**
     * Gets or sets value indicating whether or not to convert HTML code page to UTF8 encoding.
     *
     * @nullable
     */
    ConvertHtmlCodePageToUTF8: boolean;
    /**
     * Gets or sets a value of the URL template to use for the src attribute of inline IMG elements.
     *
     * @nullable
     */
    InlineImageUrlTemplate: string;
    /**
     * Gets or sets value indicating whether or not to convert inline images to data URLs.
     *
     * @nullable
     */
    BlockExternalImages: boolean;
    /**
     * Gets or sets value indicating whether or not to add blank target attribute to anchor links.
     *
     * @nullable
     */
    AddBlankTargetToLinks: boolean;
    /**
     * Gets or sets the maximum size of the body to be retrieved.
     *
     * @nullable
     *
     * @value   The maximum size of the body to be retrieved.
     */
    MaximumBodySize: number;
    /**
     * Initializes a new instance of **PropertySet** based upon BasePropertySet.IdOnly.
     */
    constructor();
    /**
     * Initializes a new instance of **PropertySet** based upon BasePropertySet.IdOnly.
     *
     * @param   {BasePropertySet}   basePropertySet        The base property set to base the property set upon.
     */
    constructor(basePropertySet: BasePropertySet);
    /**
     * Initializes a new instance of **PropertySet** based upon BasePropertySet.IdOnly.
     *
     * @param   {PropertyDefinitionBase[]}  additionalProperties   Additional properties to include in the property set. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     */
    constructor(additionalProperties: PropertyDefinitionBase[]);
    /**
     * Initializes a new instance of **PropertySet**.
     *
     * @param   {PropertyDefinitionBase[]}  additionalProperties   Additional properties to include in the property set. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     */
    constructor(...additionalProperties: PropertyDefinitionBase[]);
    /**
     * Initializes a new instance of **PropertySet**.
     *
     * @param   {BasePropertySet}           basePropertySet        The base property set to base the property set upon.
     * @param   {PropertyDefinitionBase[]}  additionalProperties   Additional properties to include in the property set. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     */
    constructor(basePropertySet: BasePropertySet, additionalProperties: PropertyDefinitionBase[]);
    /**
     * Initializes a new instance of **PropertySet**.
     *
     * @param   {BasePropertySet}           basePropertySet        The base property set to base the property set upon.
     * @param   {PropertyDefinitionBase[]}  additionalProperties   Additional properties to include in the property set. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     */
    constructor(basePropertySet: BasePropertySet, ...additionalProperties: PropertyDefinitionBase[]);
    /**
     * Gets the **PropertyDefinitionBase** at the specified index. this[int] indexer
     *
     * @param   {number}   index   Index.
     */
    _getItem(index: number): PropertyDefinitionBase;
    /**
     * Adds the specified property to the property set.
     *
     * @param   {PropertyDefinitionBase}   property   The property to add.
     */
    Add(property: PropertyDefinitionBase): void;
    /**
     * Adds the specified properties to the property set.
     *
     * @param   {PropertyDefinitionBase[]}   properties   The properties to add.
     */
    AddRange(properties: PropertyDefinitionBase[]): void;
    /**
     * Remove all explicitly added properties from the property set.
     */
    Clear(): void;
    /**
     * Determines whether the specified property has been explicitly added to this property set using the Add or AddRange methods.
     *
     * @param   {PropertyDefinitionBase}    property   The property.
     * @return  {boolean}                   true if this property set contains the specified propert]; otherwise, false.
     */
    Contains(property: PropertyDefinitionBase): boolean;
    /**
     *  Returns an enumerator that iterates through the collection. this case this.additionalProperties itself
     */
    GetEnumerator(): PropertyDefinitionBase[];
    /**
     * Removes the specified property from the set.
     *
     * @param   {PropertyDefinitionBase}    property   The property to remove.
     * @return  {boolean}                   true if the property was successfully removed, false otherwise.
     */
    Remove(property: PropertyDefinitionBase): boolean;
    /**
     * Implements ISelfValidate.Validate. Validates this property set.
     */
    Validate(): void;
}
 class ArchiveItemResponse extends ServiceResponse {
    Item: Item;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item;
    ReadElementsFromJson(responseObject: any, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
 class AttendeeAvailability extends ServiceResponse {
    readonly CalendarEvents: CalendarEvent[];
    readonly ViewType: FreeBusyViewType;
    readonly MergedFreeBusyStatus: LegacyFreeBusyStatus[];
    readonly WorkingHours: WorkingHours;
    LoadFreeBusyViewFromXmlJsObject(jsObject: any, viewType: FreeBusyViewType, service: ExchangeService): void;
}
/**
 * Represents the response to an individual Id conversion operation.
 *
 * @sealed
 */
 class ConvertIdResponse extends ServiceResponse {
    /**
     * Gets the converted Id.
     */
    readonly ConvertedId: AlternateIdBase;
}
/**
 * Represents the response to an individual attachment creation operation.
 * @sealed
 */
 class CreateAttachmentResponse extends ServiceResponse {
    /**
     * Gets the attachment that was created.
     */
    readonly Attachment: Attachment;
    /**
     * Initializes a new instance of the **CreateAttachmentResponse** class.
     *
     * @param   {Attachment}   attachment   The attachment.
     */
    constructor(attachment: Attachment);
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
    readonly Items: Item[];
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item;
    ReadElementsFromJson(responseObject: any, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
 class CreateResponseObjectResponse extends CreateItemResponseBase {
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item;
}/**
 * Represents the response to an individual delegate user manipulation (add, remove, update) operation.
 *
 * @sealed
 */
 class DelegateUserResponse extends ServiceResponse {
    /**
     * The delegate user that was involved in the operation.
     */
    readonly DelegateUser: DelegateUser;
}
/**
 * Represents the response to an individual attachment deletion operation.
 * @sealed
 */
 class DeleteAttachmentResponse extends ServiceResponse {
    /**
     * Gets the attachment that was deleted.
     */
    readonly Attachment: Attachment;
    /**
     * Initializes a new instance of the **DeleteAttachmentResponse** class.
     *
     * @param   {Attachment}   attachment   The attachment.
     */
    constructor(attachment: Attachment);
}/**
 * ## *Not Implemented*
 */
 class ExecuteDiagnosticMethodResponse extends ServiceResponse {
    ReturnValue: any;
}
 class ExpandGroupResponse extends ServiceResponse {
    readonly Members: ExpandGroupResults;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
} class FindFolderResponse extends ServiceResponse {
    readonly Results: FindFoldersResults;
    constructor(propertySet: PropertySet);
    CreateFolderInstance(service: ExchangeService, xmlElementName: string): Folder;
    ReadElementsFromJson(responseObject: any, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
 class FindItemResponse<TItem extends Item> extends ServiceResponse {
    readonly GroupedFindResults: GroupedFindItemsResults<TItem>;
    readonly Results: FindItemsResults<TItem>;
    constructor(isGrouped: boolean, propertySet: PropertySet);
    CreateItemInstance(service: ExchangeService, xmlElementName: string): TItem;
    InternalReadItemsFromJson(jsonObject: any, propertySet: PropertySet, service: ExchangeService, destinationList: TItem[]): void;
    InternalReadItemsFromXmlJsObject(jsonObject: any, propertySet: PropertySet, service: ExchangeService, destinationList: TItem[]): void;
    ReadElementsFromJson(responseObject: any, service: ExchangeService): void;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
/**
 * Represents the response to an individual attachment retrieval request.
 */
 class GetAttachmentResponse extends ServiceResponse {
    readonly Attachment: Attachment;
}
/**
 * Represents the response to a GetClientAccessToken operation.
 *
 * @sealed
 */
 class GetClientAccessTokenResponse extends ServiceResponse {
    Id: string;
    TokenType: ClientAccessTokenType;
    TokenValue: string;
    TTL: number;
    /**
     * Initializes a new instance of the **GetClientAccessTokenResponse** class.
     *
     * @param   {string}   					id          Id
     * @param   {ClientAccessTokenType}   	tokenType   Token type
     */
    constructor(id: string, tokenType: ClientAccessTokenType);
}
/**
 * ## *Not Implemented*
 */
 class GetClientExtensionResponse extends ServiceResponse {
    ClientExtensions: ClientExtension[];
    RawMasterTableXml: string;
}
/**
 * Represents the response to a GetConversationItems operation.
 *
 * @sealed
 */
 class GetConversationItemsResponse extends ServiceResponse {
    /**
     * Gets or sets the conversation.
     *
     * @value   The conversation.
     */
    Conversation: ConversationResponse;
}/**
 * Represents the GetDiscoverySearchConfiguration response.
 *
 * @sealed
 */
 class GetDiscoverySearchConfigurationResponse extends ServiceResponse {
    /**
     * Searchable mailboxes result
     */
    readonly DiscoverySearchConfigurations: DiscoverySearchConfiguration[];
}
/**
 * ## *Not Implemented*
 */
 class GetEncryptionConfigurationResponse extends ServiceResponse {
    ImageBase64: string;
    EmailText: string;
    PortalText: string;
    DisclaimerText: string;
} class GetFolderResponse extends ServiceResponse {
    readonly Folder: Folder;
    constructor(folder: Folder, propertySet: PropertySet);
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
/**
 * Represents the GetHoldOnMailboxes response.
 *
 * @sealed
 */
 class GetHoldOnMailboxesResponse extends ServiceResponse {
    /**
     * Mailbox hold result
     */
    readonly HoldResult: MailboxHoldResult;
} class GetItemResponse extends ServiceResponse {
    readonly Item: Item;
    constructor(item: Item, propertySet: PropertySet);
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
/**
 * Represents the GetNonIndexableItemDetails response.
 *
 * @sealed
 */
 class GetNonIndexableItemDetailsResponse extends ServiceResponse {
    /**
     * Non indexable item result
     *
     * internal set
     */
    NonIndexableItemsResult: NonIndexableItemDetailsResult;
}
/**
 * Represents the GetNonIndexableItemStatistics response.
 *
 * @sealed
 */
 class GetNonIndexableItemStatisticsResponse extends ServiceResponse {
    /**
     * List of non indexable statistic
     */
    NonIndexableStatistics: NonIndexableItemStatistic[];
}
 class GetPasswordExpirationDateResponse extends ServiceResponse {
    readonly PasswordExpirationDate: DateTime;
    ReadElementsFromJson(responseObject: any, service: ExchangeService): any;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
/**
 * ## *Not Implemented*
 */
 class GetPhoneCallResponse extends ServiceResponse {
    PhoneCall: PhoneCall;
}
/**
 * Represents the GetSearchableMailboxes response.
 *
 * @sealed
 */
 class GetSearchableMailboxesResponse extends ServiceResponse {
    /**
     * Searchable mailboxes result
     */
    readonly SearchableMailboxes: SearchableMailbox[];
    /**
     * Failed mailboxes
     */
    FailedMailboxes: FailedSearchMailbox[];
}
/**
 * internal Represents the response to a GetServerTimeZones request.
 */
 class GetServerTimeZonesResponse extends ServiceResponse {
    /**
     * Gets the time zones returned by the associated GetServerTimeZones request.
     * @value   The time zones.
     */
    readonly TimeZones: TimeZoneInfo[];
}/**
 * Represents the GetUserRetentionPolicyTagsResponse response.
 *
 * @sealed
 */
 class GetUserRetentionPolicyTagsResponse extends ServiceResponse {
    /**
     * Retention policy tags result.
     */
    readonly RetentionPolicyTags: RetentionPolicyTag[];
} class MarkAsJunkResponse extends ServiceResponse {
    MovedItemId: ItemId;
    constructor();
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
 class MoveCopyFolderResponse extends ServiceResponse {
    readonly Folder: Folder;
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
    readonly Item: Item;
}
/**
 * ## *Not Implemented*
 */
 class PlayOnPhoneResponse extends ServiceResponse {
    PhoneCallId: PhoneCallId;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any;
}
 class ResolveNamesResponse extends ServiceResponse {
    readonly Resolutions: NameResolutionCollection;
    constructor(service: ExchangeService);
    InternalThrowIfNecessary(): void;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
}
/**
 * Represents the SearchMailboxes response.
 *
 * @sealed
 */
 class SearchMailboxesResponse extends ServiceResponse {
    /**
     * Search mailboxes result
     */
    /**@internal set*/
    SearchResult: SearchMailboxesResult;
}
/**
 * Represents the standard response to an Exchange Web Services operation.
 */
 class ServiceResponse {
    /**
     * Gets the result associated with this response.
     */
    readonly Result: ServiceResult;
    /**
     * Gets the error code associated with this response.
     */
    readonly ErrorCode: ServiceError;
    /**
     * Gets a detailed error message associated with the response. If Result is set to Success, ErrorMessage returns null.
     * ErrorMessage is localized according to the PreferredCulture property of the ExchangeService object that was used to call the method that generated the response.
     */
    readonly ErrorMessage: string;
    /**
     * Gets error details associated with the response. If Result is set to Success, ErrorDetailsDictionary returns null.
     * Error details will only available for some error codes. For example, when error code is ErrorRecurrenceHasNoOccurrence, the ErrorDetailsDictionary will contain keys for EffectiveStartDate and EffectiveEndDate.
     *
     * @value   The error details dictionary.
     */
    readonly ErrorDetails: Dictionary<string, string>;
    /**
     * Gets information about property errors associated with the response. If Result is set to Success, ErrorProperties returns null.
     * ErrorProperties is only available for some error codes. For example, when the error code is ErrorInvalidPropertyForOperation, ErrorProperties will contain the definition of the property that was invalid for the request.
     *
     * @value   The error properties list.
     */
    readonly ErrorProperties: PropertyDefinitionBase[];
    /**
     * Parses the message XML.
     *
     * @param   {any}   jsObject   The MessageXml Object.
     */
    ParseMessageXml(jsObject: any): void;
}
/**
 * Represents a strogly typed list of service responses.
 * @sealed
 * @typeparam   {TResponse}     The type of response stored in the list.
 */
 class ServiceResponseCollection<TResponse extends ServiceResponse> implements IEnumerable<TResponse> {
    /**
     * Gets the total number of responses in the list.
     */
    readonly Count: number;
    readonly Responses: TResponse[];
    /**
     * Gets a value indicating the overall result of the request that generated this response collection.
     * If all of the responses have their Result property set to Success, OverallResult returns Success.
     * If at least one response has its Result property set to Warning and all other responses have their Result property set to Success, OverallResult returns Warning.
     * If at least one response has a its Result set to Error, OverallResult returns Error.
     */
    readonly OverallResult: ServiceResult;
    /**
     * Gets an enumerator that iterates through the elements of the collection.
     *
     * @return  {TResponse[]}      An IEnumerator for the collection.
     */
    GetEnumerator(): TResponse[];
    /**
     * Gets the response at the specified index.
     *
     * @param   {number}        index   The zero-based index of the response to get.
     * @return  {TResponse}     The response at the specified index.
     */
    __thisIndexer(index: number): TResponse;
}
/**
 * ## *Not Implemented*
 */
 class SetEncryptionConfigurationResponse extends ServiceResponse {
}
/**
 * Represents the SetHoldOnMailboxes response.
 *
 * @sealed
 */
 class SetHoldOnMailboxesResponse extends ServiceResponse {
    /**
     * Mailbox hold result
     */
    readonly HoldResult: MailboxHoldResult;
} class SuggestionsResponse extends ServiceResponse {
    readonly Suggestions: Suggestion[];
    LoadSuggestedDaysFromXml(jsonProperty: any, service: ExchangeService): void;
}
/**
 * Represents the response to a folder synchronization operation.
 *
 * @sealed
 */
 class SyncFolderHierarchyResponse extends SyncResponse<Folder, FolderChange> {
}
/**
 * Represents the response to a folder items synchronization operation.
 *
 * @sealed
 */
 class SyncFolderItemsResponse extends SyncResponse<Item, ItemChange> {
}
/**
 * Represents the base response class for synchronuization operations.
 *
 * @sealed
 * @typeparam	{TServiceObject}	ServiceObject type.
 * @typeparam	{TChange}	Change type.
 */
 abstract class SyncResponse<TServiceObject extends ServiceObject, TChange extends Change> extends ServiceResponse {
    /**
     * Gets a list of changes that occurred on the synchronized folder.
     */
    readonly Changes: ChangeCollection<TChange>;
} class UpdateFolderResponse extends ServiceResponse {
    constructor(folder: Folder);
    GetObjectInstance(session: ExchangeService, xmlElementName: string): Folder;
    Loaded(): void;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
} class UpdateItemResponse extends ServiceResponse {
    readonly ReturnedItem: Item;
    readonly ConflictCount: number;
    constructor(item: Item);
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item;
    Loaded(): void;
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void;
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
     * Binds to an existing calendar folder and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the calendar folder.
     * @param   {FolderId}          id            The Id of the calendar folder to bind to.
     * @return  {Promise<CalendarFolder>}      A CalendarFolder instance representing the folder corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: FolderId): Promise<CalendarFolder>;
    /**
     * Binds to an existing calendar folder and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the calendar folder.
     * @param   {WellKnownFolderName}   name          The name of the calendar folder to bind to.
     * @return  {Promise<CalendarFolder>}      A CalendarFolder instance representing the folder corresponding to the specified name :Promise.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName): Promise<CalendarFolder>;
    /**
     * Binds to an existing calendar folder and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the calendar folder.
     * @param   {FolderId}          id            The Id of the calendar folder to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {Promise<CalendarFolder>}      A CalendarFolder instance representing the folder corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): Promise<CalendarFolder>;
    /**
     * Binds to an existing calendar folder and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the folder.
     * @param   {WellKnownFolderName}   name          The name of the folder to bind to.
     * @param   {PropertySet}           propertySet   The set of properties to load.
     * @return  {Promise<CalendarFolder>}      A CalendarFolder instance representing the folder corresponding to the specified name :Promise.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): Promise<CalendarFolder>;
    /**
     * Obtains a list of appointments by searching the contents of this folder and performing recurrence expansion for recurring appointments. Calling this method results in a call to EWS.
     *
     * @param   {CalendarView}   view   The view controlling the range of appointments returned.
     * @return  {FindItemsResults<Appointment>}          An object representing the results of the search operation.
     */
    FindAppointments(view: CalendarView): Promise<FindItemsResults<Appointment>>;
}
/**
 * Represents a folder containing contacts.
 */
 class ContactsFolder extends Folder {
    /**
     * Initializes an unsaved local instance of **ContactsFolder**. To bind to an existing contacts folder, use ContactsFolder.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the contacts folder will be bound.
     */
    constructor(service: ExchangeService);
    /**
     * Binds to an existing contacts folder and loads the specified set of properties.
     *
     * @param   {ExchangeService}   service         The service to use to bind to the contacts folder.
     * @param   {FolderId}          id              The Id of the contacts folder to bind to.
     * @param   {PropertySet}       propertySet     The set of properties to load.
     * @return  {Promise<ContactsFolder>}      A ContactsFolder instance representing the contacts folder with the specified name :Promise.
     */
    static Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): Promise<ContactsFolder>;
    /**
     * Binds to an existing contacts folder and loads its first class properties.
     *
     * @param   {ExchangeService}   service         The service to use to bind to the contacts folder.
     * @param   {FolderId}          id              The Id of the contacts folder to bind to.
     * @return  {Promise<ContactsFolder>}      A ContactsFolder instance representing the contacts folder with the specified name :Promise.
     */
    static Bind(service: ExchangeService, id: FolderId): Promise<ContactsFolder>;
    /**
     * Binds to an existing contacts folder and loads the specified set of properties.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the contacts folder.
     * @param   {WellKnownFolderName}   name          The name of the contacts folder to bind to.
     * @param   {PropertySet}           propertySet   The set of properties to load.
     * @return  {Promise<ContactsFolder>}      A ContactsFolder instance representing the contacts folder with the specified name :Promise.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): Promise<ContactsFolder>;
    /**
     * Binds to an existing contacts folder and loads its first class properties.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the contacts folder.
     * @param   {WellKnownFolderName}   name          The name of the contacts folder to bind to.
     * @return  {Promise<ContactsFolder>}      A ContactsFolder instance representing the contacts folder with the specified name :Promise.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName): Promise<ContactsFolder>;
}
 class Folder extends ServiceObject {
    /**
     * Gets the Id of the folder.
     *
     */
    readonly Id: FolderId;
    /**
     * Gets the Id of this folder's parent folder.
     *
     */
    readonly ParentFolderId: FolderId;
    /**
     * Gets the number of child folders this folder has.
     *
     */
    readonly ChildFolderCount: number;
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
    readonly TotalCount: number;
    /**
     * Gets a list of extended properties associated with the folder. **Unstable Need testing**
     *
     */
    readonly ExtendedProperties: ExtendedPropertyCollection;
    /**
     * Gets the Email Lifecycle Management (ELC) information associated with the folder.
     *
     */
    readonly ManagedFolderInformation: ManagedFolderInformation;
    /**
     * Gets a value indicating the effective rights the current authenticated user has on the folder.
     *
     */
    readonly EffectiveRights: EffectiveRights;
    /**
     * Gets a list of permissions for the folder.
     *
     */
    readonly Permissions: FolderPermissionCollection;
    /**
     * Gets the number of unread items in the folder.
     *
     */
    readonly UnreadCount: number;
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
    readonly WellKnownFolderNameAsString: string;
    /**
     * Gets the well known name of this folder, if any.
     * **value** - The well known name of this folder, or null if this folder isn't a well known folder.
     *
     */
    readonly WellKnownFolderName: WellKnownFolderName;
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
     * @return  {Promise<Folder>}      A Folder instance representing the folder corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: FolderId): Promise<Folder>;
    /**
     * Binds to an existing folder, whatever its actual type is, and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the folder.
     * @param   {WellKnownFolderName}   name          The name of the folder to bind to.
     * @return  {Promise<Folder>}      A Folder instance representing the folder corresponding to the specified name :Promise.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName): Promise<Folder>;
    /**
     * Binds to an existing folder, whatever its actual type is, and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the folder.
     * @param   {FolderId}          id            The Id of the folder to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {Promise<Folder>}      A Folder instance representing the folder corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): Promise<Folder>;
    /**
     * Binds to an existing folder, whatever its actual type is, and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the folder.
     * @param   {WellKnownFolderName}   name          The name of the folder to bind to.
     * @param   {PropertySet}           propertySet   The set of properties to load.
     * @return  {Promise<Folder>}      A Folder instance representing the folder corresponding to the specified name :Promise.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): Promise<Folder>;
    /**
     * Copies this folder into the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to copy this folder.
     * @return  {Promise<Folder>}      A Folder representing the copy of this folder :Promise.
     */
    Copy(destinationFolderName: WellKnownFolderName): Promise<Folder>;
    /**
     * Copies this folder into a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   destinationFolderId    The Id of the folder in which to copy this folder.
     * @return  {Promise<Folder>}                  A Folder representing the copy of this folder :Promise.
     */
    Copy(destinationFolderId: FolderId): Promise<Folder>;
    /**
     * Deletes the folder. Calling this method results in a call to EWS.
     *
     * @param   {DeleteMode}   deleteMode   Deletion mode.
     */
    Delete(deleteMode: DeleteMode): Promise<void>;
    /**
     * Empties the folder. Calling this method results in a call to EWS.
     *
     * @param   {DeleteMode}    deleteMode         The deletion mode.
     * @param   {boolean}       deleteSubFolders   Indicates whether sub-folders should also be deleted.
     */
    Empty(deleteMode: DeleteMode, deleteSubFolders: boolean): Promise<void>;
    /**
     * Obtains a list of folders by searching the sub-folders of this folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderView}   view           The view controlling the number of folders returned.
     * @return  {Promise<FindFoldersResults>}      An object representing the results of the search operation :Promise.
     */
    FindFolders(view: FolderView): Promise<FindFoldersResults>;
    /**
     * Obtains a list of folders by searching the sub-folders of this folder. Calling this method results in a call to EWS.
     *
     * @param   {SearchFilter}      searchFilter    The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {FolderView}        view            The view controlling the number of folders returned.
     * @return  {Promise<FindFoldersResults>}      An object representing the results of the search operation :Promise.
     */
    FindFolders(searchFilter: SearchFilter, view: FolderView): Promise<FindFoldersResults>;
    /**
     * Obtains a list of items by searching the contents of this folder. Calling this method results in a call to EWS.
     *
     * @param   {ItemView}  view          The view controlling the number of items returned.
     * @return  {Promise<FindItemsResults<Item>>}      An object representing the results of the search operation :Promise.
     */
    FindItems(view: ItemView): Promise<FindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of this folder. Calling this method results in a call to EWS.
     *
     * @param   {ItemView}      view           The view controlling the number of items returned.
     * @param   {Grouping}      groupBy        The grouping criteria.
     * @return  {Promise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of this folder :Promise.
     */
    FindItems(view: ItemView, groupBy: Grouping): Promise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of this folder. Calling this method results in a call to EWS.
     *
     * @param   {string}    queryString   query string to be used for indexed search
     * @param   {ItemView}  view          The view controlling the number of items returned.
     * @return  {Promise<FindItemsResults<Item>>}      An object representing the results of the search operation :Promise.
     */
    FindItems(queryString: string, view: ItemView): Promise<FindItemsResults<Item>>;
    /**
     * Obtains a list of items by searching the contents of this folder. Calling this method results in a call to EWS.
     *
     * @param   {SearchFilter}  searchFilter   The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {ItemView}      view          The view controlling the number of items returned.
     * @return  {Promise<FindItemsResults<Item>>}      An object representing the results of the search operation :Promise.
     */
    FindItems(searchFilter: SearchFilter, view: ItemView): Promise<FindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of this folder. Calling this method results in a call to EWS.
     *
     * @param   {string}        queryString    Query string to be used for indexed search
     * @param   {ItemView}      view           The view controlling the number of items returned.
     * @param   {Grouping}      groupBy        The grouping criteria.
     * @return  {Promise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of this folder :Promise.
     */
    FindItems(queryString: string, view: ItemView, groupBy: Grouping): Promise<GroupedFindItemsResults<Item>>;
    /**
     * Obtains a grouped list of items by searching the contents of this folder. Calling this method results in a call to EWS.
     *
     * @param   {SearchFilter}  searchFilter   The search filter. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection
     * @param   {ItemView}      view           The view controlling the number of items returned.
     * @param   {Grouping}      groupBy        The grouping criteria.
     * @return  {Promise<GroupedFindItemsResults<Item>>}       A collection of grouped items representing the contents of this folder :Promise.
     */
    FindItems(searchFilter: SearchFilter, view: ItemView, groupBy: Grouping): Promise<GroupedFindItemsResults<Item>>;
    /**
     * ### ~~*shim used internally to minimize code flow logic from calling functions*~~
    */
    InternalFindItems<TItem extends Item>(searchFilterOrQueryString: SearchFilter | string, view: ViewBase, groupBy: Grouping): Promise<ServiceResponseCollection<FindItemResponse<TItem>>>;
    /**
     * Marks all items in folder as read. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   suppressReadReceipts   If true, suppress sending read receipts for items.
     */
    MarkAllItemsAsRead(suppressReadReceipts: boolean): Promise<void>;
    /**
     * Marks all items in folder as read. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   suppressReadReceipts   If true, suppress sending read receipts for items.
     */
    MarkAllItemsAsUnread(suppressReadReceipts: boolean): Promise<void>;
    /**
     * Moves this folder to the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to move this folder.
     * @return  {Promise<Folder>}      A new folder representing this folder in its new location. After Move completes, this folder does not exist anymore :Promise.
     */
    Move(destinationFolderName: WellKnownFolderName): Promise<Folder>;
    /**
     * Moves this folder to a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   destinationFolderId   The Id of the folder in which to move this folder.
     * @return  {Promise<Folder>}      A new folder representing this folder in its new location. After Move completes, this folder does not exist anymore :Promise.
     */
    Move(destinationFolderId: FolderId): Promise<Folder>;
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
    Save(parentFolderName: WellKnownFolderName): Promise<void>;
    /**
     * Saves this folder in a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   parentFolderId   The Id of the folder in which to save this folder.
     */
    Save(parentFolderId: FolderId): Promise<void>;
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
    Update(): Promise<void>;
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
 * Represents a search folder.
 */
 class SearchFolder extends Folder {
    /**
     * Gets the search parameters associated with the search folder.
     */
    readonly SearchParameters: SearchFolderParameters;
    /**
     * Initializes an unsaved local instance of **SearchFolder**. To bind to an existing contacts folder, use SearchFolder.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the contacts folder will be bound.
     */
    constructor(service: ExchangeService);
    /**
     * Binds to an existing search folder and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the search folder.
     * @param   {FolderId}          id            The Id of the search folder to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {Promise<SearchFolder>}        A SearchFolder instance representing the search folder corresponding to the specified Id.
     */
    static Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): Promise<SearchFolder>;
    /**
     * Binds to an existing search folder and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the search folder.
     * @param   {FolderId}          id            The Id of the search folder to bind to.
     * @return  {Promise<SearchFolder>}        A SearchFolder instance representing the search folder corresponding to the specified Id.
     */
    static Bind(service: ExchangeService, id: FolderId): Promise<SearchFolder>;
    /**
     * Binds to an existing search folder and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the search folder.
     * @param   {WellKnownFolderName}   name          The name of the search folder to bind to.
     * @param   {PropertySet}           propertySet   The set of properties to load.
     * @return  {Promise<SearchFolder>}            A SearchFolder instance representing the search folder with the specified name.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): Promise<SearchFolder>;
    /**
     * Binds to an existing search folder and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the search folder.
     * @param   {WellKnownFolderName}   name          The name of the search folder to bind to.
     * @return  {Promise<SearchFolder>}            A SearchFolder instance representing the search folder with the specified name.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName): Promise<SearchFolder>;
}
/**
 * Represents a folder containing task items.
 */
 class TasksFolder extends Folder {
    /**
     * Initializes an unsaved local instance of **SearchFolder**. To bind to an existing contacts folder, use SearchFolder.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the contacts folder will be bound.
     */
    constructor(service: ExchangeService);
    /**
     * Binds to an existing tasks folder and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the tasks folder.
     * @param   {FolderId}          id            The Id of the tasks folder to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {Promise<TasksFolder>}         A TasksFolder instance representing the task folder corresponding to the specified Id.
     */
    static Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): Promise<TasksFolder>;
    /**
     * Binds to an existing tasks folder and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the tasks folder.
     * @param   {FolderId}          id            The Id of the tasks folder to bind to.
     * @return  {Promise<TasksFolder>}         A TasksFolder instance representing the task folder corresponding to the specified Id.
     */
    static Bind(service: ExchangeService, id: FolderId): Promise<TasksFolder>;
    /**
     * Binds to an existing tasks folder and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the tasks folder.
     * @param   {WellKnownFolderName}   name          The name of the tasks folder to bind to.
     * @param   {PropertySet}           propertySet   The set of properties to load.
     * @return  {Promise<TasksFolder>}         A TasksFolder instance representing the tasks folder with the specified name.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): Promise<TasksFolder>;
    /**
     * Binds to an existing tasks folder and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}       service       The service to use to bind to the tasks folder.
     * @param   {WellKnownFolderName}   name          The name of the tasks folder to bind to.
     * @return  {Promise<TasksFolder>}         A TasksFolder instance representing the tasks folder with the specified name.
     */
    static Bind(service: ExchangeService, name: WellKnownFolderName): Promise<TasksFolder>;
}
/**
 * Represents an **appointment or a meeting**. Properties available on appointments are defined in the *AppointmentSchema* class.
 */
 class Appointment extends Item implements ICalendarActionProvider {
    /** required to check [Attachable] attribute, AttachmentCollection.AddItemAttachment<TItem>() checks for non inherited [Attachable] attribute.*/
    static readonly Attachable: boolean;
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
    readonly OriginalStart: DateTime;
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
     * Gets a text indicating when this appointment occurs.
     * The text returned by When is localized using the Exchange Server culture or using the culture specified in the PreferredCulture property of the ExchangeService object this appointment is bound to.
     */
    readonly When: string;
    /**
     * Gets a value indicating whether the appointment is a meeting.
     */
    readonly IsMeeting: boolean;
    /**
     * Gets a value indicating whether the appointment has been cancelled.
     */
    readonly IsCancelled: boolean;
    /**
     * Gets a value indicating whether the appointment is recurring.
     */
    readonly IsRecurring: boolean;
    /**
     * Gets a value indicating whether the meeting request has already been sent.
     */
    readonly MeetingRequestWasSent: boolean;
    /**
    * Gets or sets a value indicating whether responses are requested when invitations are sent for this meeting.
    */
    IsResponseRequested: boolean;
    /**
     * Gets a value indicating the type of this appointment.
     */
    readonly AppointmentType: AppointmentType;
    /**
     * Gets a value indicating what was the last response of the user that loaded this meeting.
     */
    readonly MyResponseType: MeetingResponseType;
    /**
     * Gets the organizer of this meeting. The Organizer property is read-only and is only relevant for attendees.
     * The organizer of a meeting is automatically set to the user that created the meeting.
     */
    readonly Organizer: EmailAddress;
    /**
     * Gets a list of required attendees for this meeting.
     */
    readonly RequiredAttendees: AttendeeCollection;
    /**
     * Gets a list of optional attendeed for this meeting.
     */
    readonly OptionalAttendees: AttendeeCollection;
    /**
     * Gets a list of resources for this meeting.
     */
    readonly Resources: AttendeeCollection;
    /**
     * Gets the number of calendar entries that conflict with this appointment in the authenticated user's calendar.
     */
    readonly ConflictingMeetingCount: number;
    /**
     * Gets the number of calendar entries that are adjacent to this appointment in the authenticated user's calendar.
     */
    readonly AdjacentMeetingCount: number;
    /**
     * Gets a list of meetings that conflict with this appointment in the authenticated user's calendar.
     */
    readonly ConflictingMeetings: ItemCollection<Appointment>;
    /**
     * Gets a list of meetings that is adjacent to this appointment in the authenticated user's calendar.
     */
    readonly AdjacentMeetings: ItemCollection<Appointment>;
    /**
     * Gets the duration of this appointment.
     */
    readonly Duration: TimeSpan;
    /**
     * Gets the name of the time zone this appointment is defined in.
     */
    readonly TimeZone: string;
    /**
     * Gets the time when the attendee replied to the meeting request.
     */
    readonly AppointmentReplyTime: DateTime;
    /**
     * Gets the sequence number of this appointment.
     */
    readonly AppointmentSequenceNumber: number;
    /**
     * Gets the state of this appointment.
     */
    readonly AppointmentState: number;
    /**
     * Gets or sets the recurrence pattern for this appointment. Available recurrence pattern classes include
     * Recurrence.DailyPattern, Recurrence.MonthlyPattern and Recurrence.YearlyPattern.
     */
    Recurrence: Recurrence;
    /**
     * Gets an OccurrenceInfo identifying the first occurrence of this meeting.
     */
    readonly FirstOccurrence: OccurrenceInfo;
    /**
     * Gets an OccurrenceInfo identifying the last occurrence of this meeting.
     */
    readonly LastOccurrence: OccurrenceInfo;
    /**
     * Gets a list of modified occurrences for this meeting.
     */
    readonly ModifiedOccurrences: OccurrenceInfoCollection;
    /**
     * Gets a list of deleted occurrences for this meeting.
     */
    readonly DeletedOccurrences: DeletedOccurrenceInfoCollection;
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
    readonly ICalRecurrenceId: DateTime;
    /**
     * Gets the ICalendar DateTimeStamp.
     */
    readonly ICalDateTimeStamp: DateTime;
    /**
     * Gets or sets the Enhanced location object.
     */
    EnhancedLocation: EnhancedLocation;
    /**
     * Gets the Url for joining an online meeting
     */
    readonly JoinOnlineMeetingUrl: string;
    /**
     * Gets the Online Meeting Settings
     */
    readonly OnlineMeetingSettings: OnlineMeetingSettings;
    /**
     * Initializes an unsaved local instance of . To bind to an existing appointment, use Appointment.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService instance to which this appointmtnt is bound.
     */
    constructor(svc: ExchangeService);
    /**
     * Accepts the meeting. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {Promise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation :Promise.
     */
    Accept(sendResponse: boolean): Promise<CalendarActionResults>;
    /**
     * Tentatively accepts the meeting. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {Promise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation :Promise.
     */
    AcceptTentatively(sendResponse: boolean): Promise<CalendarActionResults>;
    /**
     * Binds to an existing appointment and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}     service       The service to use to bind to the appointment.
     * @param   {ItemId}              id            The Id of the appointment to bind to.
     * @return  {Promise<Appointment>}   An Appointment instance representing the appointment corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId): Promise<Appointment>;
    /**
    * Binds to an existing appointment and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}     service       The service to use to bind to the appointment.
     * @param   {ItemId}              id            The Id of the appointment to bind to.
     * @param   {PropertySet}         propertySet   The set of properties to load.
     * @return  {Promise<Appointment>}   An Appointment instance representing the appointment corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Promise<Appointment>;
    /**
     * Binds to an occurence of an existing appointment and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}  service             The service to use to bind to the appointment.
     * @param   {ItemId}           recurringMasterId   The Id of the recurring master that the index represents an occurrence of.
     * @param   {number}           occurenceIndex      The index of the occurrence.
     * @return  {Promise<Appointment>}                 An Appointment instance representing the appointment occurence corresponding to the specified occurence index :Promise.
     */
    static BindToOccurrence(service: ExchangeService, recurringMasterId: ItemId, occurenceIndex: number): Promise<Appointment>;
    /**
     * Binds to an occurence of an existing appointment and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}  service             The service to use to bind to the appointment.
     * @param   {ItemId}           recurringMasterId   The Id of the recurring master that the index represents an occurrence of.
     * @param   {number}           occurenceIndex      The index of the occurrence.
     * @param   {PropertySet}      propertySet         The set of properties to load.
     * @return  {Promise<Appointment>}                 An Appointment instance representing the appointment occurence corresponding to the specified occurence index :Promise.
     */
    static BindToOccurrence(service: ExchangeService, recurringMasterId: ItemId, occurenceIndex: number, propertySet: PropertySet): Promise<Appointment>;
    /**
     * Binds to the master appointment of a recurring series and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}     service        The service to use to bind to the appointment.
     * @param   {ItemId}              occurrenceId   The Id of one of the occurrences in the series.
     * @return  {Promise<Appointment>}   An Appointment instance representing the master appointment of the recurring series to which the specified occurrence belongs :Promise.
     */
    static BindToRecurringMaster(service: ExchangeService, occurrenceId: ItemId): Promise<Appointment>;
    /**
     * Binds to the master appointment of a recurring series and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}     service        The service to use to bind to the appointment.
     * @param   {ItemId}              occurrenceId   The Id of one of the occurrences in the series.
     * @param   {PropertySet}         propertySet    The set of properties to load.
     * @return  {Promise<Appointment>}   An Appointment instance representing the master appointment of the recurring series to which the specified occurrence belongs :Promise.
     */
    static BindToRecurringMaster(service: ExchangeService, occurrenceId: ItemId, propertySet: PropertySet): Promise<Appointment>;
    /**
     * Cancels the meeting and sends cancellation messages to all attendees. Calling this method results in a call to EWS.
     *
     * @return  {Promise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation :Promise.
     */
    CancelMeeting(): Promise<CalendarActionResults>;
    /**
     * Cancels the meeting and sends cancellation messages to all attendees. Calling this method results in a call to EWS.
     *
     * @param   {string}   cancellationMessageText   Cancellation message text sent to all attendees.
     * @return  {Promise<CalendarActionResults>}     A CalendarActionResults object containing the various items that were created or modified as a results of this operation :Promise.
     */
    CancelMeeting(cancellationMessageText: string): Promise<CalendarActionResults>;
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
     * @return  {Promise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as aresults of this operation :Promise.
     */
    Decline(sendResponse: boolean): Promise<CalendarActionResults>;
    /** ## internal - do not use on Appointment class */
    Delete(deleteMode: DeleteMode, suppressReadReceipts?: boolean): Promise<void>;
    /**
     * Deletes this appointment. Calling this method results in a call to EWS.
     *
     * @param   {DeleteMode}   deleteMode              The deletion mode.
     * @param   {SendCancellationsMode}   sendCancellationsMode   Specifies if and how cancellations should be sent if this appointment is a meeting.
     */
    Delete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode): Promise<void>;
    /**
     * Forwards the appointment. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}     bodyPrefix     The prefix to prepend to the original body of the message.
     * @param   {EmailAddress[]}  toRecipients   The recipients to forward the appointment to.
     */
    Forward(bodyPrefix: MessageBody, toRecipients: EmailAddress[]): void;
    /**
     * Forwards the appointment. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}     bodyPrefix     The prefix to prepend to the original body of the message.
     * @param   {EmailAddress[]}  ...toRecipients   The recipients to forward the appointment to.
     */
    Forward(bodyPrefix: MessageBody, ...toRecipients: EmailAddress[]): void;
    /**
     * Replies to the organizer and/or the attendees of the meeting. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}     bodyPrefix   The prefix to prepend to the body of the meeting.
     * @param   {boolean}         replyAll     Indicates whether the reply should go to the organizer only or to all the attendees.
     */
    Reply(bodyPrefix: MessageBody, replyAll: boolean): Promise<void>;
    /**
     * Saves this appointment in the Calendar folder. Calling this method results in at least one call to EWS. Mutliple calls to EWS might be made if attachments have been added.
     * ### sendInvitationsMode not optional, see github issue #52
     *
     * @param   {SendInvitationsMode}   sendInvitationsMode   *not Optional* Specifies if and how invitations should be sent if this appointment is a meeting.
     */
    Save(sendInvitationsMode?: SendInvitationsMode): Promise<void>;
    /**
     * Saves this appointment in the specified folder. Calling this method results in at least one call to EWS. Mutliple calls to EWS might be made if attachments have been added.
     * ### sendInvitationsMode not optional, see github issue #52
     *
     * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to save this appointment.
     * @param   {SendInvitationsMode}   sendInvitationsMode     *not Optional* Specifies if and how invitations should be sent if this appointment is a meeting.
     */
    Save(destinationFolderName: WellKnownFolderName, sendInvitationsMode?: SendInvitationsMode): Promise<void>;
    /**
     * Saves this appointment in the specified folder. Calling this method results in at least one call to EWS. Mutliple calls to EWS might be made if attachments have been added.
     * ### sendInvitationsMode not optional, see github issue #52
     *
     * @param   {FolderId}                destinationFolderId   The Id of the folder in which to save this appointment.
     * @param   {SendInvitationsMode}     sendInvitationsMode   *not Optional* Specifies if and how invitations should be sent if this appointment is a meeting.
     */
    Save(destinationFolderId: FolderId, sendInvitationsMode?: SendInvitationsMode): Promise<void>;
    /** ## internal - do not use on Appointment class */
    Update(conflictResolutionMode: ConflictResolutionMode): Promise<void>;
    /**
     * Applies the local changes that have been made to this appointment. Calling this method results in at least one call to EWS. Mutliple calls to EWS might be made if attachments have been added or removed.
     * ### sendInvitationsOrCancellationsMode not optional, see github issue #52
     *
     * @param   {ConflictResolutionMode}   conflictResolutionMode               Specifies how conflicts should be resolved.
     * @param   {SendInvitationsOrCancellationsMode}   sendInvitationsOrCancellationsMode   Specifies if and how invitations or cancellations should be sent if this appointment is a meeting.
     */
    Update(conflictResolutionMode: ConflictResolutionMode, sendInvitationsOrCancellationsMode?: SendInvitationsOrCancellationsMode): Promise<void>;
}
/**
 * Represents a **contact**. Properties available on contacts are defined in the *ContactSchema* class.
 *
 */
 class Contact extends Item {
    /** required to check [Attachable] attribute, AttachmentCollection.AddItemAttachment<TItem>() checks for non inherited [Attachable] attribute. */
    static readonly Attachable: boolean;
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
    readonly CompleteName: CompleteName;
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
    readonly EmailAddresses: EmailAddressDictionary;
    /**
     * Gets an indexed list of physical addresses for the contact. For example, to set the business address,
     * use the following syntax: PhysicalAddresses[PhysicalAddressKey.Business] = new PhysicalAddressEntry()
     *
     */
    readonly PhysicalAddresses: PhysicalAddressDictionary;
    /**
     * Gets an indexed list of phone numbers for the contact. For example, to set the home phone number,
     * use the following syntax: PhoneNumbers[PhoneNumberKey.HomePhone] = "phone number"
     *
     */
    readonly PhoneNumbers: PhoneNumberDictionary;
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
    readonly ContactSource: ContactSource;
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
    readonly ImAddresses: ImAddressDictionary;
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
    readonly HasPicture: boolean;
    /**
     * Gets the full phonetic name from the directory
     *
     */
    readonly PhoneticFullName: string;
    /**
     * Gets the phonetic first name from the directory
     *
     */
    readonly PhoneticFirstName: string;
    /**
     * Gets the phonetic last name from the directory
     *
     */
    readonly PhoneticLastName: string;
    /**
     * Gets the Alias from the directory
     *
     */
    readonly Alias: string;
    /**
     * Get the Notes from the directory
     *
     */
    readonly Notes: string;
    /**
     * Gets the Photo from the directory **Unstable: needs testing**
     *
     */
    readonly DirectoryPhoto: number[];
    /**
     * Gets the User SMIME certificate from the directory **Unstable: needs testing**
     * //ref: cant use bytearray, using base64 decoded string instead -  number[][]
     *
     */
    readonly UserSMIMECertificate: string[];
    /**
     * Gets the MSExchange certificate from the directory **Unstable: needs testing**
     * //ref: cant use bytearray, using base64 decoded string instead -  number[][]
     *
     */
    readonly MSExchangeCertificate: string[];
    /**
     * Gets the DirectoryID as Guid or DN string
     *
     */
    readonly DirectoryId: string;
    /**
     * Gets the manager mailbox information
     *
     */
    readonly ManagerMailbox: EmailAddress;
    /**
     * Get the direct reports mailbox information
     *
     */
    readonly DirectReports: EmailAddressCollection;
    /**
     * Initializes an unsaved local instance of . To bind to an existing contact, use Contact.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the contact will be bound.
     */
    constructor(service: ExchangeService);
    /**
     * Binds to an existing contact and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service         The service to use to bind to the contact.
     * @param   {ItemId}            id              The Id of the contact to bind to.
     * @return  {Promise<Contact>}                 A Contact instance representing the contact corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId): Promise<Contact>;
    /**
     * Binds to an existing contact and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service         The service to use to bind to the contact.
     * @param   {ItemId}            id              The Id of the contact to bind to.
     * @param   {PropertySet}       propertySet     The set of properties to load.
     * @return  {Promise<Contact>}                 A Contact instance representing the contact corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Promise<Contact>;
    /**
     * Retrieves the file attachment that holds the contact's picture. **Unstable: needs testing**
     *
     * @return  {FileAttachment}      The file attachment that holds the contact's picture.
     */
    GetContactPictureAttachment(): FileAttachment;
    /**
     * Removes the contact's picture.     *
     */
    RemoveContactPicture(): void;
    /**
     * Sets the contact's picture using the base64 content of file.
     *
     * @param   {string}    base64Content       base64 content of picture attachment.
     * @param   {string}    attachmentName      name of the picture attachment.
     *
     */
    SetContactPicture(base64Content: string, attachmentName: string): void;
}
/**
 * Represents a Contact Group. Properties available on contact groups are defined in the ContactGroupSchema class.
 */
 class ContactGroup extends Item {
    /**
     * Gets the name under which this contact group is filed as.
     *
     * [RequiredServerVersion(ExchangeVersion.Exchange2010)]
     */
    readonly FileAs: string;
    /**
     * Gets or sets the display name of the contact group.
     */
    DisplayName: string;
    /**
     * Gets the members of the contact group.
     *
     * [RequiredServerVersion(ExchangeVersion.Exchange2010)]
     */
    readonly Members: GroupMemberCollection;
    /**
     * Initializes an unsaved local instance of the **ContactGroup** class.
     *
     * @param   {ExchangeService}   service   EWS service to which this object belongs.
     */
    constructor(service: ExchangeService);
    /**
     * Binds to an existing contact group and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the contact group.
     * @param   {ItemId}            id            The Id of the contact group to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {Promise<ContactGroup>}    A ContactGroup instance representing the contact group corresponding to the specified Id    :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Promise<ContactGroup>;
    /**
     * Binds to an existing contact group and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the contact group.
     * @param   {ItemId}            id            The Id of the contact group to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {Promise<ContactGroup>}    A ContactGroup instance representing the contact group corresponding to the specified Id    :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId): Promise<ContactGroup>;
}
/**
 * Represents a collection of Conversation related properties.
 * Properties available on this object are defined in the ConversationSchema class.
 */
 class Conversation extends ServiceObject {
    /**
     * Gets the Id of this Conversation.
     */
    readonly Id: ConversationId;
    /**
     * Gets the topic of this Conversation.
     */
    readonly Topic: string;
    /**
     * Gets a list of all the people who have received messages in this conversation in the current folder only.
     */
    readonly UniqueRecipients: StringList;
    /**
     * Gets a list of all the people who have received messages in this conversation across all folders in the mailbox.
     */
    readonly GlobalUniqueRecipients: StringList;
    /**
     * Gets a list of all the people who have sent messages that are currently unread in this conversation in the current folder only.
     */
    readonly UniqueUnreadSenders: StringList;
    /**
     * Gets a list of all the people who have sent messages that are currently unread in this conversation across all folders in the mailbox.
     */
    readonly GlobalUniqueUnreadSenders: StringList;
    /**
     * Gets a list of all the people who have sent messages in this conversation in the current folder only.
     */
    readonly UniqueSenders: StringList;
    /**
     * Gets a list of all the people who have sent messages in this conversation across all folders in the mailbox.
     */
    readonly GlobalUniqueSenders: StringList;
    /**
     * Gets the delivery time of the message that was last received in this conversation in the current folder only.
     */
    readonly LastDeliveryTime: DateTime;
    /**
     * Gets the delivery time of the message that was last received in this conversation across all folders in the mailbox.
     */
    readonly GlobalLastDeliveryTime: DateTime;
    /**
     * Gets a list summarizing the categories stamped on messages in this conversation, in the current folder only.
     */
    readonly Categories: StringList;
    /**
     * Gets a list summarizing the categories stamped on messages in this conversation, across all folders in the mailbox.
     */
    readonly GlobalCategories: StringList;
    /**
     * Gets the flag status for this conversation, calculated by aggregating individual messages flag status in the current folder.
     */
    readonly FlagStatus: ConversationFlagStatus;
    /**
     * Gets the flag status for this conversation, calculated by aggregating individual messages flag status across all folders in the mailbox.
     */
    readonly GlobalFlagStatus: ConversationFlagStatus;
    /**
     * Gets a value indicating if at least one message in this conversation, in the current folder only, has an attachment.
     */
    readonly HasAttachments: boolean;
    /**
     * Gets a value indicating if at least one message in this conversation, across all folders in the mailbox, has an attachment.
     */
    readonly GlobalHasAttachments: boolean;
    /**
     * Gets the total number of messages in this conversation in the current folder only.
     */
    readonly MessageCount: number;
    /**
     * Gets the total number of messages in this conversation across all folders in the mailbox.
     */
    readonly GlobalMessageCount: number;
    /**
     * Gets the total number of unread messages in this conversation in the current folder only.
     */
    readonly UnreadCount: number;
    /**
     * Gets the total number of unread messages in this conversation across all folders in the mailbox.
     */
    readonly GlobalUnreadCount: number;
    /**
     * Gets the size of this conversation, calculated by adding the sizes of all messages in the conversation in the current folder only.
     */
    readonly Size: number;
    /**
     * Gets the size of this conversation, calculated by adding the sizes of all messages in the conversation across all folders in the mailbox.
     */
    readonly GlobalSize: number;
    /**
     * Gets a list summarizing the classes of the items in this conversation, in the current folder only.
     */
    readonly ItemClasses: StringList;
    /**
     * Gets a list summarizing the classes of the items in this conversation, across all folders in the mailbox.
     */
    readonly GlobalItemClasses: StringList;
    /**
     * Gets the importance of this conversation, calculated by aggregating individual messages importance in the current folder only.
     */
    readonly Importance: Importance;
    /**
     * Gets the importance of this conversation, calculated by aggregating individual messages importance across all folders in the mailbox.
     */
    readonly GlobalImportance: Importance;
    /**
     * Gets the Ids of the messages in this conversation, in the current folder only.
     */
    readonly ItemIds: ItemIdCollection;
    /**
     * Gets the Ids of the messages in this conversation, across all folders in the mailbox.
     */
    readonly GlobalItemIds: ItemIdCollection;
    /**
     * Gets the date and time this conversation was last modified.
     */
    readonly LastModifiedTime: DateTime;
    /**
     * Gets the conversation instance key.
     */
    readonly InstanceKey: number[];
    /**
     * Gets the conversation Preview.
     */
    readonly Preview: string;
    /**
     * Gets the conversation IconIndex.
     */
    readonly IconIndex: IconIndex;
    /**
     * Gets the conversation global IconIndex.
     */
    readonly GlobalIconIndex: IconIndex;
    /**
     * Gets the draft item ids.
     */
    readonly DraftItemIds: ItemIdCollection;
    /**
     * Gets a value indicating if at least one message in this conversation, in the current folder only, is an IRM.
     */
    readonly HasIrm: boolean;
    /**
     * Gets a value indicating if at least one message in this conversation, across all folders in the mailbox, is an IRM.
     */
    readonly GlobalHasIrm: boolean;
    /**
     * Clear flags for conversation items. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   contextFolderId   The Id of the folder items must belong to in order to be unflagged. If contextFolderId is null, flags for items in conversation across the entire mailbox are cleared.
     * @return  {Promise<void>}    Promise
     */
    ClearItemFlags(contextFolderId: FolderId): Promise<void>;
    /**
     * Copies items in the specified conversation to a specific folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   contextFolderId       The Id of the folder items must belong to in order to be copied. If contextFolderId is null, items across the entire mailbox are copied.
     * @param   {FolderId}   destinationFolderId   The Id of the destination folder.
     * @return  {Promise<void>}    Promise
     */
    CopyItemsInConversation(contextFolderId: FolderId, destinationFolderId: FolderId): Promise<void>;
    /**
     * Deletes items in the specified conversation.
     * Calling this method results in a call to EWS.
     *
     * @param   {FolderId}      contextFolderId   The Id of the folder items must belong to in order to be deleted. If contextFolderId is null, items across the entire mailbox are deleted.
     * @param   {DeleteMode}    deleteMode        The deletion mode.
     * @return  {Promise<void>}    Promise
     */
    DeleteItems(contextFolderId: FolderId, deleteMode: DeleteMode): Promise<void>;
    /**
     * Sets up a conversation so that any item received within that conversation is no longer categorized.
     * Calling this method results in a call to EWS.
     *
     * @param   {boolean}   processSynchronously   **<not used>**Indicates whether the method should return only once disabling this rule and removing the categories from existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<void>}    Promise
     */
    DisableAlwaysCategorizeItems(processSynchronously: boolean): Promise<void>;
    /**
     * Sets up a conversation so that any item received within that conversation is no longer moved to Deleted Items folder.
     * Calling this method results in a call to EWS.
     *
     * @param   {boolean}   processSynchronously   Indicates whether the method should return only once disabling this rule and restoring the items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<void>}    Promise
     */
    DisableAlwaysDeleteItems(processSynchronously: boolean): Promise<void>;
    /**
     * Sets up a conversation so that any item received within that conversation is no longer moved to a specific folder.
     * Calling this method results in a call to EWS.
     *
     * @param   {boolean}   processSynchronously   Indicates whether the method should return only once disabling this rule is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<void>}    Promise
     */
    DisableAlwaysMoveItemsInConversation(processSynchronously: boolean): Promise<void>;
    /**
     * Sets up a conversation so that any item received within that conversation is always categorized.
     * Calling this method results in a call to EWS.
     *
     * @param   {string[]}  categories             The categories that should be stamped on items in the conversation.
     * @param   {boolean}   processSynchronously   Indicates whether the method should return only once enabling this rule and stamping existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<void>}    Promise
     */
    EnableAlwaysCategorizeItems(categories: string[], processSynchronously: boolean): Promise<void>;
    /**
     * Sets up a conversation so that any item received within that conversation is always moved to Deleted Items folder.
     * Calling this method results in a call to EWS.
     *
     * @param   {boolean}   processSynchronously   Indicates whether the method should return only once enabling this rule and deleting existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<void>}    Promise
     */
    EnableAlwaysDeleteItems(processSynchronously: boolean): Promise<void>;
    /**
     * Sets up a conversation so that any item received within that conversation is always moved to a specific folder.
     * Calling this method results in a call to EWS.
     *
     * @param   {FolderId}  destinationFolderId    The Id of the folder to which conversation items should be moved.
     * @param   {boolean}   processSynchronously   Indicates whether the method should return only once enabling this rule and moving existing items in the conversation is completely done. If processSynchronously is false, the method returns immediately.
     * @return  {Promise<void>}    Promise
     */
    EnableAlwaysMoveItems(destinationFolderId: FolderId, processSynchronously: boolean): Promise<void>;
    /**
     * Flags conversation items. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   contextFolderId   The Id of the folder items must belong to in order to be flagged. If contextFolderId is null, items in conversation across the entire mailbox are flagged.
     * @param   {DateTime}   startDate         The start date (can be null).
     * @param   {DateTime}   dueDate           The due date (can be null).
     * @return  {Promise<void>}    Promise
     */
    FlagItems(contextFolderId: FolderId, startDate: DateTime, dueDate: DateTime): Promise<void>;
    /**
     * Flag conversation items as complete. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   contextFolderId   The Id of the folder items must belong to in order to be flagged as complete. If contextFolderId is null, items in conversation across the entire mailbox are marked as complete.
     * @param   {DateTime}   completeDate      The complete date (can be null).
     * @return  {Promise<void>}    Promise
     */
    FlagItemsComplete(contextFolderId: FolderId, completeDate: DateTime): Promise<void>;
    /**
     * The property definition for the Id of this object.
     *
     * @return  {PropertyDefinition}      A PropertyDefinition instance.
     */
    GetIdPropertyDefinition(): PropertyDefinition;
    /**
     * Moves items in the specified conversation to a specific folder.
     * Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   contextFolderId       The Id of the folder items must belong to in order to be moved. If contextFolderId is null, items across the entire mailbox are moved.
     * @param   {FolderId}   destinationFolderId   The Id of the destination folder.
     * @return  {Promise<void>}    Promise
     */
    MoveItemsInConversation(contextFolderId: FolderId, destinationFolderId: FolderId): Promise<void>;
    /**
     * Sets the read state of items in the specified conversation. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}  contextFolderId   The Id of the folder items must belong to in order for their read state to be set. If contextFolderId is null, the read states of items across the entire mailbox are set.
     * @param   {boolean}   isRead            if set to true, conversation items are marked as read; otherwise they are marked as unread.
     * @return  {Promise<void>}    Promise
     */
    SetReadStateForItemsInConversation(contextFolderId: FolderId, isRead: boolean): Promise<void>;
    /**
     * Sets the read state of items in the specified conversation. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}  contextFolderId        The Id of the folder items must belong to in order for their read state to be set. If contextFolderId is null, the read states of items across the entire mailbox are set.
     * @param   {boolean}   isRead                 if set to true, conversation items are marked as read; otherwise they are marked as unread.
     * @param   {boolean}   suppressReadReceipts   if set to true read receipts are suppressed.
     * @return  {Promise<void>}    Promise
     */
    SetReadStateForItemsInConversation(contextFolderId: FolderId, isRead: boolean, suppressReadReceipts: boolean): Promise<void>;
    /**
     * Sets the retention policy of items in the specified conversation. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}          contextFolderId        The Id of the folder items must belong to in order for their retention policy to be set. If contextFolderId is null, the retention policy of items across the entire mailbox are set.
     * @param   {RetentionType}     retentionPolicyType    Retention policy type.
     * @param   {Guid}              retentionPolicyTagId   Retention policy tag id.  Null will clear the policy.
     * @return  {Promise<void>}    Promise
     */
    SetRetentionPolicyForItemsInConversation(contextFolderId: FolderId, retentionPolicyType: RetentionType, retentionPolicyTagId: Guid): Promise<void>;
}
/**
 * Represents an **e-mail message**. Properties available on e-mail messages are defined in the *EmailMessageSchema* class.
 *
 */
 class EmailMessage extends Item {
    /** required to check [Attachable] attribute, AttachmentCollection.AddItemAttachment<TItem>() checks for non inherited [Attachable] attribute. */
    static readonly Attachable: boolean;
    /**
     * Gets the list of To recipients for the e-mail message.
     *
     */
    readonly ToRecipients: EmailAddressCollection;
    /**
     * Gets the list of Bcc recipients for the e-mail message.
     *
     */
    readonly BccRecipients: EmailAddressCollection;
    /**
     * Gets the list of Cc recipients for the e-mail message.
     *
     */
    readonly CcRecipients: EmailAddressCollection;
    /**
     * Gets the conversation topic of the e-mail message.
     *
     */
    readonly ConversationTopic: string;
    /**
     * Gets the conversation index of the e-mail message.
     *
     */
    readonly ConversationIndex: number[];
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
    readonly InternetMessageId: string;
    /**
     * Gets or sets the references of the e-mail message.
     *
     */
    References: string;
    /**
     * Gets a list of e-mail addresses to which replies should be addressed.
     *
     */
    readonly ReplyTo: EmailAddressCollection;
    /**
     * Gets or sets the sender of the e-mail message.
     *
     */
    Sender: EmailAddress;
    /**
     * Gets the ReceivedBy property of the e-mail message.
     *
     */
    readonly ReceivedBy: EmailAddress;
    /**
     * Gets the ReceivedRepresenting property of the e-mail message.
     *
     */
    readonly ReceivedRepresenting: EmailAddress;
    /**
     * Gets the ApprovalRequestData property of the e-mail message.
     *
     */
    readonly ApprovalRequestData: ApprovalRequestData;
    /**
     * Gets the VotingInformation property of the e-mail message.
     *
     */
    readonly VotingInformation: VotingInformation;
    /**
     * Initializes an unsaved local instance of **EmailMessage**. To bind to an existing e-mail message, use EmailMessage.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the e-mail message will be bound.
     */
    constructor(service: ExchangeService);
    /**
     * Binds to an existing e-mail message and loads its first class properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}         service     The service to use to bind to the e-mail message.
     * @param   {ItemId}                  id          The Id of the e-mail message to bind to.
     * @return  {Promise<EmailMessage>}              An EmailMessage instance representing the e-mail message corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId): Promise<EmailMessage>;
    /**
     * Binds to an existing e-mail message and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}         service         The service to use to bind to the e-mail message.
     * @param   {ItemId}                  id              The Id of the e-mail message to bind to.
     * @param   {PropertySet}             propertySet     The set of properties to load.
     * @return  {Promise<EmailMessage>}                  An EmailMessage instance representing the e-mail message corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Promise<EmailMessage>;
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
    Forward(bodyPrefix: MessageBody, toRecipients: EmailAddress[]): Promise<void>;
    /**
     * Replies to the message. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}   bodyPrefix   The prefix to prepend to the original body of the message.
     * @param   {boolean}   replyAll     Indicates whether the reply should be sent to all of the original recipients of the message.
     */
    Reply(bodyPrefix: MessageBody, replyAll: boolean): Promise<void>;
    /**
     * Sends this e-mail message. Calling this method results in at least one call to EWS.
     */
    Send(): Promise<void>;
    /**
     * Sends this e-mail message and saves a copy of it in the Sent Items folder. SendAndSaveCopy does not work if the message has unsaved attachments. In that case, the message must first be saved and then sent. Calling this method results in a call to EWS.
     *
     */
    SendAndSaveCopy(): Promise<void>;
    /**
     * Sends this e-mail message and saves a copy of it in the specified folder. SendAndSaveCopy does not work if the message has unsaved attachments. In that case, the message must first be saved and then sent. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to save the copy.
     */
    SendAndSaveCopy(destinationFolderName: WellKnownFolderName): Promise<void>;
    /**
     * Sends this e-mail message and saves a copy of it in the specified folder. SendAndSaveCopy does not work if the
    message has unsaved attachments. In that case, the message must first be saved and then sent. Calling this method
    results in a call to EWS.
     *
     * @param   {FolderId}   destinationFolderId   The Id of the folder in which to save the copy.
     */
    SendAndSaveCopy(destinationFolderId: FolderId): Promise<void>;
    /**
     * Suppresses the read receipt on the message. Calling this method results in a call to EWS.
     *
     */
    SuppressReadReceipt(): Promise<void>;
}
/**
 * Represents a generic **Item**. Properties available on items are defined in the *ItemSchema* class.
 *
 */
 class Item extends ServiceObject {
    /** required to check [Attachable] attribute, AttachmentCollection.AddItemAttachment<TItem>() checks for non inherited [Attachable] attribute. */
    static readonly Attachable: boolean;
    /**
     * Gets a value indicating whether the item is an attachment.
     *
     */
    readonly IsAttachment: boolean;
    /**
     * Gets a value indicating whether this object is a real store item, or if it's a local object that has yet to be saved.
     *
     */
    readonly IsNew: boolean;
    /**
     * Gets the Id of this item.
     *
     */
    readonly Id: ItemId;
    /**
     * Get or sets the MIME content of this item.
     *
     */
    MimeContent: MimeContent;
    /**
     * Gets the Id of the parent folder of this item.
     *
     */
    readonly ParentFolderId: FolderId;
    /**
     * Gets or sets the sensitivity of this item.
     *
     */
    Sensitivity: Sensitivity;
    /**
     * Gets a list of the attachments to this item.
     *
     */
    readonly Attachments: AttachmentCollection;
    /**
     * Gets the time when this item was received.
     *
     */
    readonly DateTimeReceived: DateTime;
    /**
     * Gets the size of this item.
     *
     */
    readonly Size: number;
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
    readonly IsSubmitted: boolean;
    /**
     * Gets a value indicating whether this is an associated item.
     *
     */
    readonly IsAssociated: boolean;
    /**
     * Gets a value indicating whether the item is is a draft. An item is a draft when it has not yet been sent.
     *
     */
    readonly IsDraft: boolean;
    /**
     * Gets a value indicating whether the item has been sent by the current authenticated user.
     *
     */
    readonly IsFromMe: boolean;
    /**
     * Gets a value indicating whether the item is a resend of another item.
     *
     */
    readonly IsResend: boolean;
    /**
     * Gets a value indicating whether the item has been modified since it was created.
     *
     */
    readonly IsUnmodified: boolean;
    /**
     * Gets a list of Internet headers for this item.
     *
     */
    readonly InternetMessageHeaders: InternetMessageHeaderCollection;
    /**
     * Gets the date and time this item was sent.
     *
     */
    readonly DateTimeSent: DateTime;
    /**
     * Gets the date and time this item was created.
     *
     */
    readonly DateTimeCreated: DateTime;
    /**
     * Gets a value indicating which response actions are allowed on this item. Examples of response actions are Reply and Forward.
     *
     */
    readonly AllowedResponseActions: ResponseActions;
    /**
     * Gets or sets the date and time when the reminder is due for this item.
     *
     */
    ReminderDueBy: DateTime;
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
    readonly DisplayCc: string;
    /**
     * Gets a text summarizing the To recipients of this item.
     *
     */
    readonly DisplayTo: string;
    /**
     * Gets a value indicating whether the item has attachments.
     *
     */
    readonly HasAttachments: boolean;
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
    readonly WebClientReadFormQueryString: string;
    /**
     * Gets the query string that should be appended to the Exchange Web client URL to open this item using the appropriate edit form in a web browser.
     *
     */
    readonly WebClientEditFormQueryString: string;
    /**
     * Gets a list of extended properties defined on this item.
     *
     */
    readonly ExtendedProperties: ExtendedPropertyCollection;
    /**
     * Gets a value indicating the effective rights the current authenticated user has on this item.
     *
     */
    readonly EffectiveRights: EffectiveRights;
    /**
     * Gets the name of the user who last modified this item.
     *
     */
    readonly LastModifiedName: string;
    /**
     * Gets the date and time this item was last modified.
     *
     */
    readonly LastModifiedTime: DateTime;
    /**
     * Gets the Id of the conversation this item is part of.
     *
     */
    readonly ConversationId: ConversationId;
    /**
     * Gets the body part that is unique to the conversation this item is part of.
     *
     */
    readonly UniqueBody: UniqueBody;
    /**
     * Gets the store entry id.
     *
     */
    readonly StoreEntryId: number[];
    /**
     * Gets the item instance key.
     *
     */
    readonly InstanceKey: number[];
    /**
     * Get or set the Flag value for this item.
     *
     */
    Flag: Flag;
    /**
     * Gets the normalized body of the item.
     *
     */
    readonly NormalizedBody: NormalizedBody;
    /**
     * Gets the EntityExtractionResult of the item.
     *
     */
    readonly EntityExtractionResult: EntityExtractionResult;
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
    readonly RetentionDate: DateTime;
    /**
     * Gets the item Preview.
     *
     */
    readonly Preview: string;
    /**
     * Gets the text body of the item.
     *
     */
    readonly TextBody: TextBody;
    /**
     * Gets the icon index.
     *
     */
    readonly IconIndex: IconIndex;
    /**
     * Binds to an existing item, whatever its actual type is, and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service         The service to use to bind to the item.
     * @param   {ItemId}            id              The Id of the item to bind to.
     * @return  {Promise<Item>}                    An Item instance representing the item corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId): Promise<Item>;
    /**
     * Binds to an existing item, whatever its actual type is, and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service         The service to use to bind to the item.
     * @param   {ItemId}            id              The Id of the item to bind to.
     * @param   {PropertySet}       propertySet     The set of properties to load.
     * @return  {Promise<Item>}                    An Item instance representing the item corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Promise<Item>;
    /**
     * Creates a copy of this item in the specified folder. Calling this method results in a call to EWS.
     *
     * Copy returns null if the copy operation is across two mailboxes or between a mailbox and a public folder.
     *
     * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to create a copy of this item.
     * @return  {Promise<Item>}                                The copy of this item :Promise.
     */
    Copy(destinationFolderName: WellKnownFolderName): Promise<Item>;
    /**
     * Creates a copy of this item in the specified folder. Calling this method results in a call to EWS.
     *
     *  Copy returns null if the copy operation is across two mailboxes or between a mailbox and a public folder.
     *
     * @param   {FolderId}          destinationFolderId   The Id of the folder in which to create a copy of this item.
     * @return  {Promise<Item>}                          The copy of this item :Promise.
     */
    Copy(destinationFolderId: FolderId): Promise<Item>;
    /**
     * Deletes the item. Calling this method results in a call to EWS.
     *
     * @param   {DeleteMode}   deleteMode             The deletion mode.
     */
    Delete(deleteMode: DeleteMode): Promise<void>;
    /**
     * Deletes the item. Calling this method results in a call to EWS.
     *
     * @param   {DeleteMode}   deleteMode             The deletion mode.
     * @param   {boolean}   suppressReadReceipts   Whether to suppress read receipts
     */
    Delete(deleteMode: DeleteMode, suppressReadReceipts: boolean): Promise<void>;
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
     * Moves this item to a the specified folder. Calling this method results in a call to EWS.
     *
     * Move returns null if the move operation is across two mailboxes or between a mailbox and a public folder.
     *
     * @param   {FolderId}   destinationFolderId    The Id of the folder to which to move this item.
     * @return  {Promise<Item>}                    The moved copy of this item :Promise.
     */
    Move(destinationFolderId: FolderId): Promise<Item>;
    /**
     * Moves this item to a the specified folder. Calling this method results in a call to EWS.
     *
     * Move returns null if the move operation is across two mailboxes or between a mailbox and a public folder.
     *
     * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder to which to move this item.
     * @return  {Promise<Item>}        The moved copy of this item :Promise.
     */
    Move(destinationFolderName: WellKnownFolderName): Promise<Item>;
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
    Save(): Promise<void>;
    /**
     * Saves this item in a specific folder. Calling this method results in at least one call to EWS.
     * Mutliple calls to EWS might be made if attachments have been added.
     *
     * @param   {WellKnownFolderName}   parentFolderName   The name of the folder in which to save this item.
     */
    Save(parentFolderName?: WellKnownFolderName): Promise<void>;
    /**
     * Saves this item in a specific folder. Calling this method results in at least one call to EWS.
     * Mutliple calls to EWS might be made if attachments have been added.
     *
     * @param   {FolderId}   parentFolderId   The Id of the folder in which to save this item.
     */
    Save(parentFolderId?: FolderId): Promise<void>;
    /**
     * Sets the extended property.
     *
     * @param   {ExtendedPropertyDefinition}    extendedPropertyDefinition   The extended property definition.
     * @param   {value}                         value                        The value.
     */
    SetExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition, value: any): void;
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
    Update(conflictResolutionMode: ConflictResolutionMode): Promise<void>;
    /**
     * Applies the local changes that have been made to this item. Calling this method results in at least one call to EWS.
     * Mutliple calls to EWS might be made if attachments have been added or removed.
     *
     * @param   {ConflictResolutionMode}   conflictResolutionMode   The conflict resolution mode.
     * @param   {boolean}   suppressReadReceipts     Whether to suppress read receipts
     */
    Update(conflictResolutionMode: ConflictResolutionMode, suppressReadReceipts: boolean): Promise<void>;
}
/**
 ** this is partial section of CreateEwsObjectFromXmlElementName from serviceobjectinfo, other parts are moved to different object type like folderinfo etc.
 * this to is to avoid circular referencing with requirejs/commonjs/nodejs
 */
 class ItemInfo extends ServiceObjectInfo {
    InitializeServiceObjectClassMap(): any;
}
/**
 * Represents a meeting cancellation message. Properties available on meeting messages are defined in the MeetingMessageSchema class.
 */
 class MeetingCancellation extends MeetingMessage {
    /**
     * Gets the start time of the appointment.
     */
    readonly Start: DateTime;
    /**
     * Gets the end time of the appointment.
     */
    readonly End: DateTime;
    /**
     * Gets the location of this appointment.
     */
    readonly Location: string;
    /**
     * Gets the recurrence pattern for this meeting request.
     */
    readonly Recurrence: Recurrence;
    /**
     * Gets the Enhanced location object.
     */
    readonly EnhancedLocation: EnhancedLocation;
    /**
     * Binds to an existing meeting cancellation message and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the meeting cancellation message.
     * @param   {ItemId}            id            The Id of the meeting cancellation message to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {Promise<MeetingCancellation>}   A MeetingCancellation instance representing the meeting cancellation message corresponding to the specified Id   :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Promise<MeetingCancellation>;
    /**
     * Binds to an existing meeting cancellation message and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the meeting cancellation message.
     * @param   {ItemId}            id            The Id of the meeting cancellation message to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {Promise<MeetingCancellation>}   A MeetingCancellation instance representing the meeting cancellation message corresponding to the specified Id   :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId): Promise<MeetingCancellation>;
    /**
     * Removes the meeting associated with the cancellation message from the user's calendar.
     *
     * @return  {Promise<CalendarActionResults>}      A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    RemoveMeetingFromCalendar(): Promise<CalendarActionResults>;
}
/**
 * Represents a meeting-related message. Properties available on meeting messages are defined in the MeetingMessageSchema class.
 */
 class MeetingMessage extends EmailMessage {
    /**
     * Gets the Id of the appointment associated with the meeting message.
     */
    readonly AssociatedAppointmentId: ItemId;
    /**
     * Gets a value indicating whether the meeting message is delegated.
     */
    readonly IsDelegated: boolean;
    /**
     * Gets a value indicating whether the meeting message is out of date.
     */
    readonly IsOutOfDate: boolean;
    /**
     * Gets a value indicating whether the meeting message has been processed by Exchange (i.e. Exchange has noted the arrival of a meeting request and has created the associated meeting item in the calendar).
     */
    readonly HasBeenProcessed: boolean;
    /**
     * Gets the isorganizer property for this meeting
     *
     * @Nullable
     */
    readonly IsOrganizer: boolean;
    /**
     * Gets the type of response the meeting message represents.
     */
    readonly ResponseType: MeetingResponseType;
    /**
     * Gets the ICalendar Uid.
     */
    readonly ICalUid: string;
    /**
     * Gets the ICalendar RecurrenceId.
     *
     * @Nullable
     */
    readonly ICalRecurrenceId: DateTime;
    /**
     * Gets the ICalendar DateTimeStamp.
     */
    readonly ICalDateTimeStamp: DateTime;
    /**
     * Binds to an existing meeting message and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the meeting message.
     * @param   {ItemId}            id            The Id of the meeting message to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {Promise<MeetingMessage>}  A MeetingMessage instance representing the meeting message corresponding to the specified Id    :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Promise<MeetingMessage>;
    /**
     * Binds to an existing meeting message and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the meeting message.
     * @param   {ItemId}            id            The Id of the meeting message to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {Promise<MeetingMessage>}  A MeetingMessage instance representing the meeting message corresponding to the specified Id    :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId): Promise<MeetingMessage>;
}
/**
 * Represents a meeting request that an attendee can accept or decline. Properties available on meeting requests are defined in the MeetingRequestSchema class.
 */
 class MeetingRequest extends MeetingMessage implements ICalendarActionProvider {
    /**
     * Gets the type of this meeting request.
     */
    readonly MeetingRequestType: MeetingRequestType;
    /**
     * Gets the a value representing the intended free/busy status of the meeting.
     */
    readonly IntendedFreeBusyStatus: LegacyFreeBusyStatus;
    /**
     * Gets the change highlights of the meeting request.
     */
    readonly ChangeHighlights: ChangeHighlights;
    /**
     * Gets the Enhanced location object.
     */
    readonly EnhancedLocation: EnhancedLocation;
    /**
     * Gets the start time of the appointment.
     */
    readonly Start: DateTime;
    /**
     * Gets the end time of the appointment.
     */
    readonly End: DateTime;
    /**
     * Gets the original start time of this appointment.
     */
    readonly OriginalStart: DateTime;
    /**
     * Gets a value indicating whether this appointment is an all day event.
     */
    readonly IsAllDayEvent: boolean;
    /**
     * Gets a value indicating the free/busy status of the owner of this appointment.
     */
    readonly LegacyFreeBusyStatus: LegacyFreeBusyStatus;
    /**
     * Gets the location of this appointment.
     */
    readonly Location: string;
    /**
     * Gets a text indicating when this appointment occurs.
     * The text returned by When is localized using the Exchange Server culture or using the culture specified in the PreferredCulture property of the ExchangeService object this appointment is bound to.
     */
    readonly When: string;
    /**
     * Gets a value indicating whether the appointment is a meeting.
     */
    readonly IsMeeting: boolean;
    /**
     * Gets a value indicating whether the appointment has been cancelled.
     */
    readonly IsCancelled: boolean;
    /**
     * Gets a value indicating whether the appointment is recurring.
     */
    readonly IsRecurring: boolean;
    /**
     * Gets a value indicating whether the meeting request has already been sent.
     */
    readonly MeetingRequestWasSent: boolean;
    /**
     * Gets a value indicating the type of this appointment.
     */
    readonly AppointmentType: AppointmentType;
    /**
     * Gets a value indicating what was the last response of the user that loaded this meeting.
     */
    readonly MyResponseType: MeetingResponseType;
    /**
     * Gets the organizer of this meeting.
     */
    readonly Organizer: EmailAddress;
    /**
     * Gets a list of required attendees for this meeting.
     */
    readonly RequiredAttendees: AttendeeCollection;
    /**
     * Gets a list of optional attendeed for this meeting.
     */
    readonly OptionalAttendees: AttendeeCollection;
    /**
     * Gets a list of resources for this meeting.
     */
    readonly Resources: AttendeeCollection;
    /**
     * Gets the number of calendar entries that conflict with this appointment in the authenticated user's calendar.
     */
    readonly ConflictingMeetingCount: number;
    /**
     * Gets the number of calendar entries that are adjacent to this appointment in the authenticated user's calendar.
     */
    readonly AdjacentMeetingCount: number;
    /**
     * Gets a list of meetings that conflict with this appointment in the authenticated user's calendar.
     */
    readonly ConflictingMeetings: ItemCollection<Appointment>;
    /**
     * Gets a list of meetings that are adjucent to this appointment in the authenticated user's calendar.
     */
    readonly AdjacentMeetings: ItemCollection<Appointment>;
    /**
     * Gets the duration of this appointment.
     */
    readonly Duration: TimeSpan;
    /**
     * Gets the name of the time zone this appointment is defined in.
     */
    readonly TimeZone: string;
    /**
     * Gets the time when the attendee replied to the meeting request.
     */
    readonly AppointmentReplyTime: DateTime;
    /**
     * Gets the sequence number of this appointment.
     */
    readonly AppointmentSequenceNumber: number;
    /**
     * Gets the state of this appointment.
     */
    readonly AppointmentState: number;
    /**
     * Gets the recurrence pattern for this meeting request.
     */
    readonly Recurrence: Recurrence;
    /**
     * Gets an OccurrenceInfo identifying the first occurrence of this meeting.
     */
    readonly FirstOccurrence: OccurrenceInfo;
    /**
     * Gets an OccurrenceInfo identifying the last occurrence of this meeting.
     */
    readonly LastOccurrence: OccurrenceInfo;
    /**
     * Gets a list of modified occurrences for this meeting.
     */
    readonly ModifiedOccurrences: OccurrenceInfoCollection;
    /**
     * Gets a list of deleted occurrences for this meeting.
     */
    readonly DeletedOccurrences: DeletedOccurrenceInfoCollection;
    /**
     * Gets time zone of the start property of this meeting request.
     */
    readonly StartTimeZone: TimeZoneInfo;
    /**
     * Gets time zone of the end property of this meeting request.
     */
    readonly EndTimeZone: TimeZoneInfo;
    /**
     * Gets the type of conferencing that will be used during the meeting.
     */
    readonly ConferenceType: number;
    /**
     * Gets a value indicating whether new time proposals are allowed for attendees of this meeting.
     */
    readonly AllowNewTimeProposal: boolean;
    /**
     * Gets a value indicating whether this is an online meeting.
     */
    readonly IsOnlineMeeting: boolean;
    /**
     * Gets the URL of the meeting workspace. A meeting workspace is a shared Web site for planning meetings and tracking results.
     */
    readonly MeetingWorkspaceUrl: string;
    /**
     * Gets the URL of the Microsoft NetShow online meeting.
     */
    readonly NetShowUrl: string;
    /**
     * Accepts the meeting. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {Promise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation    :Promise.
     */
    Accept(sendResponse: boolean): Promise<CalendarActionResults>;
    /**
     * Tentatively accepts the meeting. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {Promise<CalendarActionResults>}       A CalendarActionResults object containing the various items that were created or modified as a results of this operation    :Promise.
     */
    AcceptTentatively(sendResponse: boolean): Promise<CalendarActionResults>;
    /**
     * Binds to an existing meeting request and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the meeting request.
     * @param   {ItemId}            id            The Id of the meeting request to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {Promise<MeetingRequest>}        A MeetingRequest instance representing the meeting request corresponding to the specified Id  :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Promise<MeetingRequest>;
    /**
     * Binds to an existing meeting request and loads its first class properties.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the meeting request.
     * @param   {ItemId}            id            The Id of the meeting request to bind to.
     * @return  {Promise<MeetingRequest>}        A MeetingRequest instance representing the meeting request corresponding to the specified Id  :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId): Promise<MeetingRequest>;
    /**
     * Creates a local meeting acceptance message that can be customized and sent.
     *
     * @param   {boolean}   tentative   Specifies whether the meeting will be tentatively accepted.
     * @return  {AcceptMeetingInvitationMessage}        An AcceptMeetingInvitationMessage representing the meeting acceptance message.
     */
    CreateAcceptMessage(tentative: boolean): AcceptMeetingInvitationMessage;
    /**
     * Creates a local meeting declination message that can be customized and sent.
     *
     * @return  {DeclineMeetingInvitationMessage}      A DeclineMeetingInvitation representing the meeting declination message.
     */
    CreateDeclineMessage(): DeclineMeetingInvitationMessage;
    /**
     * Declines the meeting invitation. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {Promise<CalendarActionResults>}       A CalendarActionResults object containing the various items that were created or modified as a results of this operation    :Promise.
     */
    Decline(sendResponse: boolean): Promise<CalendarActionResults>;
}
/**
 * Represents a response to a meeting request. Properties available on meeting messages are defined in the MeetingMessageSchema class.
 */
 class MeetingResponse extends MeetingMessage {
    /**
     * Gets the start time of the appointment.
     */
    readonly Start: DateTime;
    /**
     * Gets the end time of the appointment.
     */
    readonly End: DateTime;
    /**
     * Gets the location of this appointment.
     */
    readonly Location: string;
    /**
     * Gets the recurrence pattern for this meeting request.
     */
    readonly Recurrence: Recurrence;
    /**
     * Gets the proposed start time of the appointment.
     */
    readonly ProposedStart: DateTime;
    /**
     * Gets the proposed end time of the appointment.
     */
    readonly ProposedEnd: DateTime;
    /**
     * Gets the Enhanced location object.
     */
    readonly EnhancedLocation: EnhancedLocation;
    /**
     * Binds to an existing meeting response and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the meeting response.
     * @param   {ItemId}            id            The Id of the meeting response to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {Promise<MeetingResponse>}       A MeetingResponse instance representing the meeting response corresponding to the specified Id    :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Promise<MeetingResponse>;
    /**
     * Binds to an existing meeting response and loads its first class properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the meeting response.
     * @param   {ItemId}            id            The Id of the meeting response to bind to.
     * @return  {Promise<MeetingResponse>}       A MeetingResponse instance representing the meeting response corresponding to the specified Id    :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId): Promise<MeetingResponse>;
}
/**
 * Represents a post item. Properties available on post items are defined in the PostItemSchema class.
 *
 * @sealed
 */
 class PostItem extends Item {
    /** required to check [Attachable] attribute, AttachmentCollection.AddItemAttachment<TItem>() checks for non inherited [Attachable] attribute. */
    static readonly Attachable: boolean;
    /**
     * Gets the conversation index of the post item.
     */
    readonly ConversationIndex: number[];
    /**
     * Gets the conversation topic of the post item.
     */
    readonly ConversationTopic: string;
    /**
     * Gets or sets the "on behalf" poster of the post item.
     */
    From: EmailAddress;
    /**
     * Gets the Internet message Id of the post item.
     */
    readonly InternetMessageId: string;
    /**
     * Gets or sets a value indicating whether the post item is read.
     */
    IsRead: boolean;
    /**
     * Gets the the date and time when the post item was posted.
     */
    readonly PostedTime: DateTime;
    /**
     * Gets or sets the references of the post item.
     */
    References: string;
    /**
     * Gets or sets the sender (poster) of the post item.
     */
    Sender: EmailAddress;
    /**
     * Initializes an unsaved local instance of **PostItem**. To bind to an existing post item, use PostItem.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the e-mail message will be bound.
     */
    constructor(service: ExchangeService);
    /**
     * Binds to an existing post item and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the post item.
     * @param   {ItemId}            id            The Id of the post item to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {Promise<PostItem>}              An PostItem instance representing the post item corresponding to the specified Id  :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Promise<PostItem>;
    /**
     * Binds to an existing post item and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the post item.
     * @param   {ItemId}            id            The Id of the post item to bind to.
     * @return  {Promise<PostItem>}              An PostItem instance representing the post item corresponding to the specified Id  :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId): Promise<PostItem>;
    /**
     * Creates a forward response to the post item.
     *
     * @return  {ResponseMessage}      A ResponseMessage representing the forward response that can subsequently be modified and sent.
     */
    CreateForward(): ResponseMessage;
    /**
     * Creates a post reply to this post item.
     *
     * @return  {PostReply}      A PostReply that can be modified and saved.
     */
    CreatePostReply(): PostReply;
    /**
     * Creates a e-mail reply response to the post item.
     *
     * @param   {boolean}   replyAll   Indicates whether the reply should go to everyone involved in the thread.
     * @return  {ResponseMessage}      A ResponseMessage representing the e-mail reply response that can subsequently be modified and sent.
     */
    CreateReply(replyAll: boolean): ResponseMessage;
    /**
     * Forwards the post item. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}           bodyPrefix     The prefix to prepend to the original body of the post item.
     * @param   {...EmailAddress[]}     toRecipients   The recipients to forward the post item to.
     * @return  {Promise<void>}        :Promise.
     */
    Forward(bodyPrefix: MessageBody, ...toRecipients: EmailAddress[]): Promise<void>;
    /**
     * Forwards the post item. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}       bodyPrefix     The prefix to prepend to the original body of the post item.
     * @param   {EmailAddress[]}    toRecipients   The recipients to forward the post item to.
     * @return  {Promise<void>}    :Promise.
     */
    Forward(bodyPrefix: MessageBody, toRecipients: EmailAddress[]): Promise<void>;
    /**
     * Posts a reply to this post item. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}   bodyPrefix   Body prefix.
     * @return  {Promise<void>}    :Promise.
     */
    PostReply(bodyPrefix: MessageBody): Promise<void>;
    /**
     * Replies to the post item. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}   bodyPrefix   The prefix to prepend to the original body of the post item.
     * @param   {boolean}       replyAll     Indicates whether the reply should be sent to everyone involved in the thread.
     * @return  {Promise<void>}    :Promise.
     */
    Reply(bodyPrefix: MessageBody, replyAll: boolean): Promise<void>;
}
/**
 * Represents a Task item. Properties available on tasks are defined in the TaskSchema class.
 */
 class Task extends Item {
    /** required to check [Attachable] attribute, AttachmentCollection.AddItemAttachment<TItem>() checks for non inherited [Attachable] attribute. */
    static readonly Attachable: boolean;
    /**
     * @nullable Gets or sets the actual amount of time that is spent on the task.
     */
    ActualWork: number;
    /**
     * @nullable Gets the date and time the task was assigned.
     */
    readonly AssignedTime: DateTime;
    /**
     * Gets or sets the billing information of the task.
     */
    BillingInformation: string;
    /**
     * Gets the number of times the task has changed since it was created.
     */
    readonly ChangeCount: number;
    /**
     * Gets or sets a list of companies associated with the task.
     */
    Companies: StringList;
    /**
     * @nullable Gets or sets the date and time on which the task was completed.
     */
    CompleteDate: DateTime;
    /**
     * Gets or sets a list of contacts associated with the task.
     */
    Contacts: StringList;
    /**
     * Gets the current delegation state of the task.
     */
    readonly DelegationState: TaskDelegationState;
    /**
     * Gets the name of the delegator of this task.
     */
    readonly Delegator: string;
    /**
     * @nullable    Gets or sets the date and time on which the task is due.
     */
    DueDate: DateTime;
    /**
     * Gets a value indicating the mode of the task.
     */
    readonly Mode: TaskMode;
    /**
     * Gets a value indicating whether the task is complete.
     */
    readonly IsComplete: boolean;
    /**
     * Gets a value indicating whether the task is recurring.
     */
    readonly IsRecurring: boolean;
    /**
     * Gets a value indicating whether the task is a team task.
     */
    readonly IsTeamTask: boolean;
    /**
     * Gets or sets the mileage of the task.
     */
    Mileage: string;
    /**
     * Gets the name of the owner of the task.
     */
    readonly Owner: string;
    /**
     * Gets or sets the completeion percentage of the task. PercentComplete must be between 0 and 100.
     */
    PercentComplete: number;
    /**
     * Gets or sets the recurrence pattern for this task. Available recurrence pattern classes include Recurrence.
     * DailyPattern, Recurrence.MonthlyPattern and Recurrence.YearlyPattern.
     */
    Recurrence: Recurrence;
    /**
     * @nullable    Gets or sets the date and time on which the task starts.
     */
    StartDate: DateTime;
    /**
     * Gets or sets the status of the task.
     */
    Status: TaskStatus;
    /**
     * Gets a string representing the status of the task, localized according to the PreferredCulture property of the ExchangeService object the task is bound to.
     */
    readonly StatusDescription: string;
    /**
     * @nullable Gets or sets the total amount of work spent on the task.
     */
    TotalWork: number;
    /**
     * Initializes an unsaved local instance of **Task**. To bind to an existing task, use Task.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService instance to which this task is bound.
     */
    constructor(service: ExchangeService);
    /**
     * Binds to an existing task and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the task.
     * @param   {ItemId}            id            The Id of the task to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {Promise<Task>}    A Task instance representing the task corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Promise<Task>;
    /**
     * Binds to an existing task and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the task.
     * @param   {ItemId}            id            The Id of the task to bind to.
     * @return  {Promise<Task>}    A Task instance representing the task corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId): Promise<Task>;
    /**
     * Deletes the current occurrence of a recurring task. After the current occurrence isdeleted, the task represents the next occurrence.
     * Developers should call Load to retrieve the new property values of the task.
     * Calling this method results in a call to EWS.
     *
     * @param   {DeleteMode}   deleteMode   The deletion mode.
     * @return  {Promise<void>}            :Promise.
     */
    DeleteCurrentOccurrence(deleteMode: DeleteMode): Promise<void>;
    /**
     * Applies the local changes that have been made to this task. Calling this method results in at least one call to EWS.
     * Mutliple calls to EWS might be made if attachments have been added or removed.
     *
     * @param   {ConflictResolutionMode}    conflictResolutionMode   Specifies how conflicts should be resolved.
     * @return  {Promise<Task>}            A Task object representing the completed occurrence if the task is recurring and the update marks it as completed; or a Task object representing the current occurrence if the task is recurring and the uypdate changed its recurrence pattern; or null in every other case    :Promise.
     */
    Update(conflictResolutionMode: ConflictResolutionMode): Promise<Task>;
    /** ##internal ~~ workaround GitHub #52 */
    Update(conflictResolutionMode: ConflictResolutionMode): Promise<any>;
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
    readonly Tentative: boolean;
    /**
     * Initializes a new instance of the **AcceptMeetingInvitationMessage** class.
     *
     * @param   {Item}            referenceItem   The reference item.
     * @param   {boolean}         tentative       if set to true accept invitation tentatively.
     */
    constructor(referenceItem: Item, tentative: boolean);
}
/**
 * Represents the base class for accept, tentatively accept and decline response messages.
 *
 * @typeparam   {TMessage}     The type of message that is created when this response message is saved.
 */
 abstract class CalendarResponseMessage<TMessage extends EmailMessage> extends CalendarResponseMessageBase<TMessage> {
    /**
     * Gets or sets the body of the response.
     */
    Body: MessageBody;
    /**
     * Gets a list of recipients the response will be sent to.
     */
    readonly ToRecipients: EmailAddressCollection;
    /**
     * Gets a list of recipients the response will be sent to as Cc.
     */
    readonly CcRecipients: EmailAddressCollection;
    /**
     * Gets a list of recipients this response will be sent to as Bcc.
     */
    readonly BccRecipients: EmailAddressCollection;
    ItemClass: string;
    /**
     * Gets or sets the sensitivity of this response.
     */
    Sensitivity: Sensitivity;
    /**
     * Gets a list of attachments to this response.
     */
    readonly Attachments: AttachmentCollection;
    readonly InternetMessageHeaders: InternetMessageHeaderCollection;
    /**
     * Gets or sets the sender of this response.
     */
    Sender: EmailAddress;
}
/**
 * Represents the base class for all calendar-related response messages.
 *
 * @typeparam   {TMessage}     The type of message that is created when this response message is saved.
 */
 abstract class CalendarResponseMessageBase<TMessage extends EmailMessage> extends ResponseObject<TMessage> {
    /**
     * Saves the response in the Drafts folder. Calling this method results in a call to EWS.
     *
     * @return  {CalendarActionResults}      A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    Save(): Promise<CalendarActionResults | any>;
    /**
     * Saves the response in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}     destinationFolderName   The name of the folder in which to save the response.
     * @return  {CalendarActionResults}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    Save(destinationFolderName: WellKnownFolderName): Promise<CalendarActionResults | any>;
    /**
     * Saves the response in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}                destinationFolderId   The Id of the folder in which to save the response.
     * @return  {CalendarActionResults}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    Save(destinationFolderId: FolderId): Promise<CalendarActionResults | any>;
    /**
     * Sends this response without saving a copy. Calling this method results in a call to EWS.
     *
     * @return  {CalendarActionResults}      A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    Send(): Promise<CalendarActionResults | any>;
    /**
     * Sends this response ans saves a copy in the Sent Items folder. Calling this method results in a call to EWS.
     *
     * @return  {CalendarActionResults}      A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    SendAndSaveCopy(): Promise<CalendarActionResults | any>;
    /**
     * Sends this response and saves a copy in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}     destinationFolderName   The name of the folder in which to save the copy of the message.
     * @return  {CalendarActionResults}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    SendAndSaveCopy(destinationFolderName: WellKnownFolderName): Promise<CalendarActionResults | any>;
    /**
     * Sends this response ans saves a copy in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}                destinationFolderId   The Id of the folder in which to save the copy of the message.
     * @return  {CalendarActionResults}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    SendAndSaveCopy(destinationFolderId: FolderId): Promise<CalendarActionResults | any>;
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
     * @param   {Item}   referenceItem   The reference item.
     */
    constructor(referenceItem: Item);
}
/**
 * Represents a reply to a post item.
 *
 * @sealed
 */
 class PostReply extends ServiceObject {
    /**
     * Gets or sets the subject of the post reply.
     */
    Subject: string;
    /**
     * Gets or sets the body of the post reply.
     */
    Body: MessageBody;
    /**
     * Gets or sets the body prefix that should be prepended to the original post item's body.
     */
    BodyPrefix: MessageBody;
    /**
     * Saves the post reply in the same folder as the original post item. Calling this method results in a call to EWS.
     *
     * @return  {Promise<PostItem>}    A PostItem representing the posted reply :Promise.
     */
    Save(): Promise<PostItem>;
    /**
     * Saves the post reply in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   destinationFolderId   The Id of the folder in which to save the post reply.
     * @return  {Promise<PostItem>}    A PostItem representing the posted reply :Promise.
     */
    Save(destinationFolderId: FolderId): Promise<PostItem>;
    /**
     * Saves the post reply in a specified folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to save the post reply.
     * @return  {Promise<PostItem>}    A PostItem representing the posted reply :Promise.
     */
    Save(destinationFolderName: WellKnownFolderName): Promise<PostItem>;
}/**
 * Represents the base class for e-mail related responses (Reply, Reply all and Forward).
 *
 */
 class ResponseMessage extends ResponseObject<EmailMessage> {
    /**
     * Gets a value indicating the type of response this object represents.
     *
     */
    readonly ResponseType: ResponseMessageType;
    /**
     * Gets or sets the body of the response.
     *
     */
    Body: MessageBody;
    /**
     * Gets a list of recipients the response will be sent to.
     *
     */
    readonly ToRecipients: EmailAddressCollection;
    /**
     * Gets a list of recipients the response will be sent to as Cc.
     *
     */
    readonly CcRecipients: EmailAddressCollection;
    /**
     * Gets a list of recipients this response will be sent to as Bcc.
     *
     */
    readonly BccRecipients: EmailAddressCollection;
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
 *
 * @typeparam   {TMessage}     Type of message.
 */
 abstract class ResponseObject<TMessage extends EmailMessage> extends ServiceObject {
    /**
     * Gets or sets a value indicating whether read receipts will be requested from recipients of this response.
     */
    IsReadReceiptRequested: boolean;
    /**
     * Gets or sets a value indicating whether delivery receipts should be sent to the sender.
     */
    IsDeliveryReceiptRequested: boolean;
    /**
     * Saves the response in the Drafts folder. Calling this method results in a call to EWS.
     *
     * @return  {Promise<TMessage>}      A TMessage that represents the response.
     */
    Save(): Promise<TMessage>;
    /**
     * Saves the response in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}     destinationFolderName   The name of the folder in which to save the response.
     * @return  {Promise<TMessage>}      A TMessage that represents the response.
     */
    Save(destinationFolderName: WellKnownFolderName): Promise<TMessage>;
    /**
     * Saves the response in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   destinationFolderId   The Id of the folder in which to save the response.
     * @return  {Promise<TMessage>}                         A TMessage that represents the response.
     */
    Save(destinationFolderId: FolderId): Promise<TMessage>;
    /**
     * Sends this response without saving a copy. Calling this method results in a call to EWS.
     */
    Send(): Promise<void>;
    /**
     * Sends this response and saves a copy in the Sent Items folder. Calling this method results in a call to EWS.
     */
    SendAndSaveCopy(): Promise<void>;
    /**
     * Sends this response and saves a copy in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to save the copy of the message.
     */
    SendAndSaveCopy(destinationFolderName: WellKnownFolderName): Promise<void>;
    /**
     * Sends this response and saves a copy in the specified folder. Calling this method results in a call to EWS.
     *
     * @param   {FolderId}   destinationFolderId   The Id of the folder in which to save the copy of the message.
     */
    SendAndSaveCopy(destinationFolderId: FolderId): Promise<void>;
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
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): Promise<void>;
    /**
     * Deletes the object.
     *
     * @param   {DeleteMode}              deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}   sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
     * @param   {AffectedTaskOccurrence}  affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
     */
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): Promise<void>;
    /**
     * Loads the specified set of properties on the object.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     */
    InternalLoad(propertySet: PropertySet): Promise<void>;
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents CalendarResponseObject schema definition.
 */
export interface CalendarResponseObjectSchema {
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents PostReply schema definition.
 */
export interface PostReplySchema {
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void;
}
/**
 * Represents ResponseMessage schema definition.
 */
export interface ResponseMessageSchema {
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
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
}
/**
 * Represents the schema for search folders.
 */
export interface SearchFolderSchemaStatic extends SearchFolderSchema {
}
/**
 * Represents the base class for all item and folder schemas.
 */
 abstract class ServiceObjectSchema implements IEnumerable<PropertyDefinition> {
    /**
     * Defines the **ExtendedProperties** property.
     */
    static ExtendedProperties: PropertyDefinition;
    /**
     *  Returns an enumerator that iterates through the collection. this case this.visibleProperties
     */
    GetEnumerator(): PropertyDefinition[];
    protected init(): void;
    /**
     * @private Registers a schema property.
     *
     * @param   {any}                   registeringSchemaClass     SchemaClass calling this method - workaround for fieldUri registration oterhwise it registers super/parent class static properties as well. TypeScript does not provide a way to detect inherited property, hasOwnProperty returns true for parent static property
     * @param   {PropertyDefinition}   property     The property to register.
     * @param   {boolean}   isInternal   Indicates whether the property is internal or should be visible to developers.
     */
    RegisterProperty(registeringSchemaClass: any, property: PropertyDefinition, isInternal: boolean): void;
}
/**
 * Represents the base class for all item and folder schemas.
 */
export interface ServiceObjectSchema {
    /**
     * Defines the **ExtendedProperties** property.
     */
    ExtendedProperties: PropertyDefinition;
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
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
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
}
/**
 * Represents the schema for task items.
 */
export interface TaskSchemaStatic extends TaskSchema {
}
/**
 * Represents the base abstract class for all item and folder types.
 */
 abstract class ServiceObject {
    /** workaround for service variable exposer in console.log */
    /**
     * Gets the schema associated with this type of object.
     */
    readonly Schema: ServiceObjectSchema;
    /**
     * Gets the ExchangeService the object is bound to.
     */
    /**@internal set*/
    Service: ExchangeService;
    /**
     * Indicates whether this object is a real store item, or if it's a local object that has yet to be saved.
     */
    readonly IsNew: boolean;
    /**
     * Gets a value indicating whether the object has been modified and should be saved.
     */
    readonly IsDirty: boolean;
    /**
     * Gets the value of specified property in this instance.
     * This Indexer of c#
     *
     * @param   {PropertyDefinitionBase}   propertyDefinition   Definition of the property to get.
     */
    _getItem(propertyDefinition: PropertyDefinitionBase): any;
    /**
     * Gets the collection of loaded property definitions.
     *
     * @return  {PropertyDefinitionBase[]}      Collection of property definitions.
     */
    GetLoadedPropertyDefinitions(): PropertyDefinitionBase[];
    /**
     * Loads the first class properties. Calling this method results in a call to EWS.
     */
    Load(): Promise<void>;
    /**
     * Loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     */
    Load(propertySet?: PropertySet): Promise<void>;
    /**
     * Try to get the value of a specified property in this instance.
     *
     * @param   {PropertyDefinitionBase}  propertyDefinition   The property definition.
     * @param   {IOutParam<T>}            propertyValue        The property value.
     * @return  {boolean}                 True if property retrieved, false otherwise.
     */
    TryGetProperty<T>(propertyDefinition: PropertyDefinitionBase, propertyValue: IOutParam<T>): boolean;
}
/**
 * Moved part of CreateEwsObjectFromXmlElementName to different object type like FolderInfo, itemInfo etc
 */
 class ServiceObjectInfo {
    readonly XmlElementNameToServiceObjectClassMap: IndexerWithStringKey<string>;
    readonly ServiceObjectConstructorsWithServiceParam: IndexerWithStringKey<CreateServiceObjectWithServiceParam>;
    readonly ServiceObjectConstructorsWithAttachmentParam: IndexerWithStringKey<CreateServiceObjectWithAttachmentParam>;
    constructor();
    protected AddServiceObjectType(xmlElementName: string, type: string, createServiceObjectWithServiceParam: CreateServiceObjectWithServiceParam, createServiceObjectWithAttachmentParam: CreateServiceObjectWithAttachmentParam): any;
    InitializeServiceObjectClassMap(): any;
    CreateEwsObjectFromXmlElementName<TServiceObject extends ServiceObject>(service: ExchangeService, xmlElementName: string): TServiceObject;
    CreateItemFromItemClass(itemAttachment: ItemAttachment, itemClass: string, isNew: boolean): Item;
    static IsFolderType(xmlElementName: string): boolean;
}
 class SimplePropertyBag<TKey> {
    OnChange: PropertyBagChangedDelegate[];
    readonly AddedItems: TKey[];
    readonly RemovedItems: TKey[];
    readonly ModifiedItems: TKey[];
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
    /** per github issue #120 */
    var IncludeNonIndexableItems: string;
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
 abstract class ExchangeCredentials {
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
 class WebCredentials extends ExchangeCredentials {
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
    ProcessTokenResponse(response: any): any;
    TraceResponse(response: any, memoryStream: any): any;
    TraceWebException(e: any): any;
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
 class X509CertificateCredentials extends WSSecurityBasedCredentials {
    NeedSignature: boolean;
    AdjustUrl(url: Uri): Uri;
    Sign(memoryStream: any): any;
    ToString(): string;
}
 const msToEpoch: number;
 enum DateTimeKind {
    Unspecified = 0,
    Utc = 1,
    Local = 2
}
/**
 * DateTime - basic date time based on moment.js
 */
 class DateTime {
    kind: DateTimeKind;
    readonly MomentDate: moment.Moment;
    readonly currentUtcOffset: number;
    static readonly Now: DateTime;
    static readonly UtcNow: DateTime;
    readonly TotalMilliSeconds: number;
    constructor(ms: number);
    constructor(date: DateTime);
    constructor(momentInput: moment.MomentInput);
    constructor(ms: number, kind: DateTimeKind);
    constructor(year: number, month: number, day: number);
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number);
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number);
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number, kind: DateTimeKind);
    Add(ts: TimeSpan): DateTime;
    Add(quantity: number, unit: moment.unitOfTime.Base): DateTime;
    static Compare(x: DateTime, y: DateTime): number;
    CompareTo(toDate: DateTime): number;
    Difference(toDate: DateTime): TimeSpan;
    Format(formatting: string): string;
    static Parse(value: any, kind?: DateTimeKind): DateTime;
    ToISOString(): string;
    toString(): string;
    utcOffset(value: number): void;
    static DateimeStringToTimeZone(dtStr: string, zoneStr: string): DateTime;
    static DateTimeToXSDateTime(dateTime: DateTime): string;
    static DateTimeToXSDate(date: DateTime): string;
    static MinValue: DateTime;
    static MaxValue: DateTime;
    readonly Date: DateTime;
    readonly Day: number;
    readonly DayOfWeek: DayOfWeek;
    readonly DayOfYear: number;
    readonly Hour: number;
    readonly Kind: DateTimeKind;
    readonly Millisecond: number;
    readonly Minute: number;
    readonly Month: number;
    readonly Second: number;
    readonly TimeOfDay: TimeSpan;
    readonly Today: DateTime;
    readonly Year: number;
    AddDays(days: number): DateTime;
    AddHours(hours: number): DateTime;
    AddMilliseconds(ms: number): DateTime;
    AddMinutes(minutes: number): DateTime;
    AddMonths(months: number): DateTime;
    AddSeconds(seconds: number): DateTime;
    AddYears(years: number): DateTime;
    static DaysInMonth(year: number, month: number): number;
    Equals(value: any | DateTime): boolean;
    static Equals(t1: DateTime, t2: DateTime): boolean;
    IsDaylightSavingTime(): boolean;
    /**
     *  Checks whether a given year is a leap year. This method returns true if year is a leap year, or false if not.
     * @param {number}  year
     */
    static IsLeapYear(year: number): boolean;
    static SpecifyKind(value: DateTime, kind: DateTimeKind): DateTime;
    Subtract(date: DateTime): TimeSpan;
    Subtract(ts: TimeSpan): DateTime;
    ToLocalTime(): DateTime;
    ToLongDateString(): string;
    ToLongTimeString(): string;
    ToShortDateString(): string;
    ToShortTimeString(): string;
    ToString(): string;
    ToUniversalTime(): DateTime;
    static TryParse(s: string | moment.MomentInput, outDate: IOutParam<DateTime>): boolean;
    valueOf(): number;
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
    RoundtripKind = 128
}
 var unitOfTime: {
    "year": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "years": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "y": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "month": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "months": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "M": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "week": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "weeks": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "w": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "day": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "days": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "d": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "hour": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "hours": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "h": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "minute": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "minutes": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "m": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "second": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "seconds": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "s": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "millisecond": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "milliseconds": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
    "ms": "year" | "years" | "y" | "month" | "months" | "M" | "week" | "weeks" | "w" | "day" | "days" | "d" | "hour" | "hours" | "h" | "minute" | "minutes" | "m" | "second" | "seconds" | "s" | "millisecond" | "milliseconds" | "ms";
};
 class DnsClient {
    DnsQuer<T>(domain: string, dnsServerAddress: any): T[];
}/**
 * Represents retention policy tag object.
 *
 * @sealed
 */
 class RetentionPolicyTag {
    /**
     * Retention policy tag display name.
     */
    DisplayName: string;
    /**
     * Retention Id.
     */
    RetentionId: Guid;
    /**
     * Retention period in time span.
     */
    RetentionPeriod: number;
    /**
     * Retention type.
     */
    Type: ElcFolderType;
    /**
     * Retention action.
     */
    RetentionAction: RetentionActionType;
    /**
     * Retention policy tag description.
     */
    Description: string;
    /**
     * Is this a visible tag?
     */
    IsVisible: boolean;
    /**
     * Is this a opted into tag?
     */
    OptedInto: boolean;
    /**
     * Is this an archive tag?
     */
    IsArchive: boolean;
    /**
     * Constructor
     */
    constructor();
    /**
     * Constructor for retention policy tag.
     *
     * @param   {string}   displayName       Display name.
     * @param   {Guid}   retentionId       Retention id.
     * @param   {number}   retentionPeriod   Retention period.
     * @param   {ElcFolderType}   type              Retention folder type.
     * @param   {RetentionActionType}   retentionAction   Retention action.
     * @param   {boolean}   isVisible         Is visible.
     * @param   {boolean}   optedInto         Opted into.
     * @param   {boolean}   isArchive         Is archive tag.
     */
    constructor(displayName: string, retentionId: Guid, retentionPeriod: number, type: ElcFolderType, retentionAction: RetentionActionType, isVisible: boolean, optedInto: boolean, isArchive: boolean);
}
/**
 * Indicates which occurrence of a recurring task should be deleted
 */
 enum AffectedTaskOccurrence {
    /**
     * All occurrences of the recurring task will be deleted.
     */
    AllOccurrences = 0,
    /**
     * Only the current occurrence of the recurring task will be deleted.
     */
    SpecifiedOccurrenceOnly = 1
}
/**
 * Defines the type of aggregation to perform.
 */
 enum AggregateType {
    /**
     * The maximum value is calculated.
     */
    Minimum = 0,
    /**
     * The minimum value is calculated.
     */
    Maximum = 1
}
/**
 * Defines the type of an appointment.
 */
 enum AppointmentType {
    /**
     * The appointment is non-recurring.
     */
    Single = 0,
    /**
     * The appointment is an occurrence of a recurring appointment.
     */
    Occurrence = 1,
    /**
     * The appointment is an exception of a recurring appointment.
     */
    Exception = 2,
    /**
     * The appointment is the recurring master of a series.
     */
    RecurringMaster = 3
}/**
 * Defines the error codes that can be returned by the Autodiscover service.
 */
 enum AutodiscoverErrorCode {
    /**
     * There was no Error.
     */
    NoError = 0,
    /**
     * The caller must follow the e-mail address redirection that was returned by Autodiscover.
     */
    RedirectAddress = 1,
    /**
     * The caller must follow the URL redirection that was returned by Autodiscover.
     */
    RedirectUrl = 2,
    /**
     * The user that was passed in the request is invalid.
     */
    InvalidUser = 3,
    /**
     * The request is invalid.
     */
    InvalidRequest = 4,
    /**
     * A specified setting is invalid.
     */
    InvalidSetting = 5,
    /**
     * A specified setting is not available.
     */
    SettingIsNotAvailable = 6,
    /**
     * The server is too busy to process the request.
     */
    ServerBusy = 7,
    /**
     * The requested domain is not valid.
     */
    InvalidDomain = 8,
    /**
     * The organization is not federated.
     */
    NotFederated = 9,
    /**
     * Internal server error.
     */
    InternalServerError = 10
}/**
 * Defines the type of data that can be requested via GetUserAvailability.
 */
 enum AvailabilityData {
    /**
     * Only return free/busy data.
     */
    FreeBusy = 0,
    /**
     * Only return suggestions.
     */
    Suggestions = 1,
    /**
     * Return both free/busy data and suggestions.
     */
    FreeBusyAndSuggestions = 2
}
/**
 * Defines base property sets that are used as the base for custom property sets.
 */
 enum BasePropertySet {
    /**
     * Only includes the Id of items and folders.
     */
    IdOnly = 0,
    /**
     * Includes all the first class properties of items and folders.
     */
    FirstClassProperties = 1
}
/**
 * Defines the type of body of an item.
 */
 enum BodyType {
    /**
     * The body is formatted in HTML.
     */
    HTML = 0,
    /**
     * The body is in plain text.
     */
    Text = 1
}
/**
 * Defines the type of change of a synchronization event.
 */
 enum ChangeType {
    /**
     * An item or folder was created.
     */
    Create = 0,
    /**
     * An item or folder was modified.
     */
    Update = 1,
    /**
     * An item or folder was deleted.
     */
    Delete = 2,
    /**
     * An item's IsRead flag was changed.
     */
    ReadFlagChange = 3
}
/**
 * Defines the type of ClientAccessTokenType
 */
 enum ClientAccessTokenType {
    /**
     * CallerIdentity
     */
    CallerIdentity = 0,
    /**
     * ExtensionCallback.
     */
    ExtensionCallback = 1,
    /**
     * ScopedToken
     */
    ScopedToken = 2
}
/**
 * Defines the type of ClientExtensionProvidedTo.
 */
 enum ClientExtensionProvidedTo {
    /**
     * Everyone
     */
    Everyone = 0,
    /**
     * SpecificUsers
     */
    SpecificUsers = 1
}
/**
 * Defines the way values are compared in search filters.
 */
 enum ComparisonMode {
    /**
     * The comparison is exact.
     */
    Exact = 0,
    /**
     * The comparison ignores casing.
     */
    IgnoreCase = 1,
    /**
     * The comparison ignores spacing characters.
     */
    IgnoreNonSpacingCharacters = 2,
    /**
     * The comparison ignores casing and spacing characters.
     */
    IgnoreCaseAndNonSpacingCharacters = 3
}
/**
 * Defines how conflict resolutions are handled in update operations.
 */
 enum ConflictResolutionMode {
    /**
     * Local property changes are discarded.
     */
    NeverOverwrite = 0,
    /**
     * Local property changes are applied to the server unless the server-side copy is more recent than the local copy.
     */
    AutoResolve = 1,
    /**
     * Local property changes overwrite server-side changes.
     */
    AlwaysOverwrite = 2
}
/**
 * Defines the conflict types that can be returned in meeting time suggestions.
 */
 enum ConflictType {
    /**
     * There is a conflict with an indicidual attendee.
     */
    IndividualAttendeeConflict = 0,
    /**
     * There is a conflict with at least one member of a group.
     */
    GroupConflict = 1,
    /**
     * There is a conflict with at least one member of a group, but the group was too big for detailed information to be returned.
     */
    GroupTooBigConflict = 2,
    /**
     * There is a conflict with an unresolvable attendee or an attendee that is not a user, group, or contact.
     */
    UnknownAttendeeConflict = 3
}
/**
 * Defines the type of Id of a ConnectingId object.
 */
 enum ConnectingIdType {
    /**
     * The connecting Id is a principal name.
     */
    PrincipalName = 0,
    /**
     * The Id is an SID.
     */
    SID = 1,
    /**
     * The Id is an SMTP address.
     */
    SmtpAddress = 2
}
/**
 * The ConnectionFailureCause enumeration
 */
 enum ConnectionFailureCause {
    /**
     * None
     */
    None = 0,
    /**
     * UserBusy
     */
    UserBusy = 1,
    /**
     * NoAnswer
     */
    NoAnswer = 2,
    /**
     * Unavailable
     */
    Unavailable = 3,
    /**
     * Other
     */
    Other = 4
}
/**
 * The consent states enumeration
 */
 enum ConsentState {
    /**
     * User has closed the consent page or has not responded yet.
     */
    NotResponded = 0,
    /**
     * User has requested to disable the extension.
     */
    NotConsented = 1,
    /**
     * User has requested to enable the extension.
     */
    Consented = 2
}
/**
 * Defines the source of a contact or group.
 */
 enum ContactSource {
    /**
     * The contact or group is stored in the Global Address List
     */
    ActiveDirectory = 0,
    /**
     * The contact or group is stored in Exchange.
     */
    Store = 1
}
/**
 * Defines the containment mode for Contains search filters.
 */
 enum ContainmentMode {
    /**
     * The comparison is between the full string and the constant. The property value and the supplied constant are precisely the same.
     */
    FullString = 0,
    /**
     * The comparison is between the string prefix and the constant.
     */
    Prefixed = 1,
    /**
     * The comparison is between a substring of the string and the constant.
     */
    Substring = 2,
    /**
     * The comparison is between a prefix on individual words in the string and the constant.
     */
    PrefixOnWords = 3,
    /**
     * The comparison is between an exact phrase in the string and the constant.
     */
    ExactPhrase = 4
}/**
 * Defines the flag status of a Conversation.
 */
 enum ConversationFlagStatus {
    /**
     * Not Flagged
     */
    NotFlagged = 0,
    /**
     * Flagged
     */
    Flagged = 1,
    /**
     * Complete
     */
    Complete = 2
}
/**
 * Defines the folder traversal depth in queries.
 */
 enum ConversationQueryTraversal {
    /**
     * Shallow traversal
     */
    Shallow = 0,
    /**
     * Deep traversal
     */
    Deep = 1
}
 module ConversationQueryTraversal {
    /**RequiredServerVersionAttribute */
    function RequiredServerVersion(value: ConversationQueryTraversal): ExchangeVersion;
}
/**
 * Defines the order in which conversation nodes should be returned by GetConversationItems.
 */
 enum ConversationSortOrder {
    /**
     * Tree order, ascending
     */
    TreeOrderAscending = 0,
    /**
     * Tree order, descending.
     */
    TreeOrderDescending = 1,
    /**
     * Chronological order, ascending.
     */
    DateOrderAscending = 2,
    /**
     * Chronological order, descending.
     */
    DateOrderDescending = 3
}
/**
 * Defines the precision for returned DateTime values
 */
 enum DateTimePrecision {
    /**
     * Default value.  No SOAP header emitted.
     */
    Default = 0,
    /**
     * Seconds
     */
    Seconds = 1,
    /**
     * Milliseconds
     */
    Milliseconds = 2
}
/**
 * Specifies the day of the week.
 *
 * /remarks/    For the standard days of the week (Sunday, Monday...) the DayOfTheWeek enum value is the same as the System.DayOfWeek enum type.
 * These values can be safely cast between the two enum types. The special days of the week (Day, Weekday and WeekendDay) are used for monthly and yearly recurrences and cannot be cast to System.DayOfWeek values.
 */
 enum DayOfTheWeek {
    /**
     * Sunday
     */
    Sunday = 0,
    /**
     * Monday
     */
    Monday = 1,
    /**
     * Tuesday
     */
    Tuesday = 2,
    /**
     * Wednesday
     */
    Wednesday = 3,
    /**
     * Thursday
     */
    Thursday = 4,
    /**
     * Friday
     */
    Friday = 5,
    /**
     * Saturday
     */
    Saturday = 6,
    /**
     * Any day of the week
     */
    Day = 7,
    /**
     * Any day of the usual business week (Monday-Friday)
     */
    Weekday = 8,
    /**
     * Any weekend day (Saturday or Sunday)
     */
    WeekendDay = 9
}
/**
 * Defines the index of a week day within a month.
 */
 enum DayOfTheWeekIndex {
    /**
     * The first specific day of the week in the month. For example, the first Tuesday of the month.
     */
    First = 0,
    /**
     * The second specific day of the week in the month. For example, the second Tuesday of the month.
     */
    Second = 1,
    /**
     * The third specific day of the week in the month. For example, the third Tuesday of the month.
     */
    Third = 2,
    /**
     * The fourth specific day of the week in the month. For example, the fourth Tuesday of the month.
     */
    Fourth = 3,
    /**
     * The last specific day of the week in the month. For example, the last Tuesday of the month.
     */
    Last = 4
}
/**
 * Enum for the day of the week.
 * System.DayOfWeek
 */
 enum DayOfWeek {
    /**
     * Sunday
     */
    Sunday = 0,
    /**
     * Monday
     */
    Monday = 1,
    /**
     * Tuesday
     */
    Tuesday = 2,
    /**
     * Wednesday
     */
    Wednesday = 3,
    /**
     * Thursday
     */
    Thursday = 4,
    /**
     * Friday
     */
    Friday = 5,
    /**
     * Saturday
     */
    Saturday = 6
}
/**
 * Defines the default sets of extended properties.
 */
 enum DefaultExtendedPropertySet {
    /**
     * The Meeting extended property set.
     */
    Meeting = 0,
    /**
     * The Appointment extended property set.
     */
    Appointment = 1,
    /**
     * The Common extended property set.
     */
    Common = 2,
    /**
     * The PublicStrings extended property set.
     */
    PublicStrings = 3,
    /**
     * The Address extended property set.
     */
    Address = 4,
    /**
     * The InternetHeaders extended property set.
     */
    InternetHeaders = 5,
    /**
     * The CalendarAssistant extended property set.
     */
    CalendarAssistant = 6,
    /**
     * The UnifiedMessaging extended property set.
     */
    UnifiedMessaging = 7,
    /**
     * The Task extended property set.
     */
    Task = 8
}
/**
 *
 */
 enum DelegateFolderPermissionLevel {
    /**
     * The delegate has no permissions.
     */
    None = 0,
    /**
     * The delegate has Editor permissions.
     */
    Editor = 1,
    /**
     * The delegate has Reviewer permissions.
     */
    Reviewer = 2,
    /**
     * The delegate has Author permissions.
     */
    Author = 3,
    /**
     * The delegate has Custom permissions.
     */
    Custom = 4
}
/**
 * Represents deletion modes.
 */
 enum DeleteMode {
    /**
     * The item or folder will be permanently deleted.
     */
    HardDelete = 0,
    /**
     * The item or folder will be moved to the dumpster. Items and folders in the dumpster can be recovered.
     */
    SoftDelete = 1,
    /**
     * The item or folder will be moved to the mailbox' Deleted Items folder.
     */
    MoveToDeletedItems = 2
}
 enum DictionaryKeyType {
    EmailAddressKey = 0,
    ImAddressKey = 1,
    PhoneNumberKey = 2,
    PhysicalAddressKey = 3
}
/**
 * Disable reason type
 */
 enum DisableReasonType {
    /**
     * Extension is being disabled with no reason
     */
    NoReason = 0,
    /**
     * Extension is being disabled from Outlook due to performance reasons
     */
    OutlookClientPerformance = 1,
    /**
     * Extension is being disabled from OWA due to performance reasons
     */
    OWAClientPerformance = 2,
    /**
     * Extension is being disabled from MOWA due to performance reasons
     */
    MobileClientPerformance = 3
}/**
 * Domain setting names.
 */
 enum DomainSettingName {
    /**
     * The external URL of the Exchange Web Services.
     */
    ExternalEwsUrl = 0,
    /**
     * The version of the Exchange server hosting the URL of the Exchange Web Services.
     */
    ExternalEwsVersion = 1
}
/**
 * Defines the effective user rights associated with an item or folder.
 *
 * [Flags]
 */
 enum EffectiveRights {
    /**
     * The user has no acces right on the item or folder.
     */
    None = 0,
    /**
     * The user can create associated items (FAI)
     */
    CreateAssociated = 1,
    /**
     * The user can create items.
     */
    CreateContents = 2,
    /**
     * The user can create sub-folders.
     */
    CreateHierarchy = 4,
    /**
     * The user can delete items and/or folders.
     */
    Delete = 8,
    /**
     * The user can modify the properties of items and/or folders.
     */
    Modify = 16,
    /**
     * The user can read the contents of items.
     */
    Read = 32,
    /**
     * The user can view private items.
     */
    ViewPrivateItems = 64
}
/**
 * Defines the folder type of a retention policy tag.
 */
 enum ElcFolderType {
    /**
     * Calendar folder.
     */
    Calendar = 1,
    /**
     * Contacts folder.
     */
    Contacts = 2,
    /**
     * Deleted Items.
     */
    DeletedItems = 3,
    /**
     * Drafts folder.
     */
    Drafts = 4,
    /**
     * Inbox.
     */
    Inbox = 5,
    /**
     * Junk mail
     */
    JunkEmail = 6,
    /**
     * Journal.
     */
    Journal = 7,
    /**
     * Notes.
     */
    Notes = 8,
    /**
     * Outbox.
     */
    Outbox = 9,
    /**
     * Sent Items.
     */
    SentItems = 10,
    /**
     * Tasks folder.
     */
    Tasks = 11,
    /**
     * Policy applies to all folders that do not have a policy.
     */
    All = 12,
    /**
     * Policy is for an organizational policy.
     */
    ManagedCustomFolder = 13,
    /**
     * Policy is for the RSS Subscription (default) folder.
     */
    RssSubscriptions = 14,
    /**
     * Policy is for the Sync Issues (default) folder.
     */
    SyncIssues = 15,
    /**
     * Policy is for the Conversation History (default) folder.
     * This folder is used by the Office Communicator to archive IM conversations.
     */
    ConversationHistory = 16,
    /**
     * Policy is for the personal folders.
     */
    Personal = 17,
    /**
     * Policy is for Dumpster 2.0.
     */
    RecoverableItems = 18,
    /**
     * Non IPM Subtree root.
     */
    NonIpmRoot = 19
}
/**
 * Defines e-mail address entries for a contact.
 */
 enum EmailAddressKey {
    /**
     * The first e-mail address.
     */
    EmailAddress1 = 0,
    /**
     * The second e-mail address.
     */
    EmailAddress2 = 1,
    /**
     * The third e-mail address.
     */
    EmailAddress3 = 2
}
/**
 * Defines the email position of an extracted entity.
 */
 enum EmailPosition {
    /**
     * The position is in the latest reply.
     */
    LatestReply = 0,
    /**
     * The position is not in the latest reply.
     */
    Other = 1,
    /**
     * The position is in the subject.
     */
    Subject = 2,
    /**
     * The position is in the signature.
     */
    Signature = 3
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
    MailboxType = 7
}
/**
 * Defines the types of event that can occur in a folder.
 */
 enum EventType {
    /**
     * This event is sent to a client application by push notifications to indicate that the subscription is still alive.
     */
    Status = 0,
    /**
     * This event indicates that a new e-mail message was received.
     */
    NewMail = 1,
    /**
     * This event indicates that an item or folder has been deleted.
     */
    Deleted = 2,
    /**
     * This event indicates that an item or folder has been modified.
     */
    Modified = 3,
    /**
     * This event indicates that an item or folder has been moved to another folder.
     */
    Moved = 4,
    /**
     * This event indicates that an item or folder has been copied to another folder.
     */
    Copied = 5,
    /**
     * This event indicates that a new item or folder has been created.
     */
    Created = 6,
    /**
     * This event indicates that free/busy has changed. This is only supported in 2010 SP1 or later
     */
    FreeBusyChanged = 7
}
 module EventType {
    /**RequiredServerVersionAttribute */
    function RequiredServerVersion(value: EventType): ExchangeVersion;
    /**EwsEnumAttribute */
    function FromEwsEnumString(value: string): EventType;
    /**EwsEnumAttribute */
    function ToEwsEnumString(value: EventType): string;
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
    Exchange_Version_Not_Updated = 15000
}
/**
 * Defines the type of ExtensionInstallScope.
 */
 enum ExtensionInstallScope {
    /**
     * None
     */
    None = 0,
    /**
     * User
     */
    User = 1,
    /**
     * Organization
     */
    Organization = 2,
    /**
     * Exchange Default
     */
    Default = 3
}
/**
 * Defines the type of ExtensionType.
 */
 enum ExtensionType {
    /**
     * Default
     */
    Default = 0,
    /**
     * Private
     */
    Private = 1,
    /**
     * MarketPlace
     */
    MarketPlace = 2
}
/**
 * Defines the way the FileAs property of a contact is automatically formatted.
 */
 enum FileAsMapping {
    /**
     * No automatic formatting is used.
     */
    None = 0,
    /**
     * Surname, GivenName
     */
    SurnameCommaGivenName = 1,
    /**
     * GivenName Surname
     */
    GivenNameSpaceSurname = 2,
    /**
     * Company
     */
    Company = 3,
    /**
     * Surname, GivenName (Company)
     */
    SurnameCommaGivenNameCompany = 4,
    /**
     * Company (SurnameGivenName)
     */
    CompanySurnameGivenName = 5,
    /**
     * SurnameGivenName
     */
    SurnameGivenName = 6,
    /**
     * SurnameGivenName (Company)
     */
    SurnameGivenNameCompany = 7,
    /**
     * Company (Surname, GivenName)
     */
    CompanySurnameCommaGivenName = 8,
    /**
     * SurnameGivenName Suffix
     */
    SurnameGivenNameSuffix = 9,
    /**
     * Surname GivenName (Company)
     */
    SurnameSpaceGivenNameCompany = 10,
    /**
     * Company (Surname GivenName)
     */
    CompanySurnameSpaceGivenName = 11,
    /**
     * Surname GivenName
     */
    SurnameSpaceGivenName = 12,
    /**
     * Display Name (Exchange 2010 or later).
     */
    DisplayName = 13,
    /**
     * GivenName (Exchange 2010 or later).
     */
    GivenName = 14,
    /**
     * Surname GivenName Middle Suffix (Exchange 2010 or later).
     */
    SurnameGivenNameMiddleSuffix = 15,
    /**
     * Surname (Exchange 2010 or later).
     */
    Surname = 16,
    /**
     * Empty (Exchange 2010 or later).
     */
    Empty = 17
}
 module FileAsMapping {
    /**RequiredServerVersionAttribute */
    function RequiredServerVersion(value: FileAsMapping): ExchangeVersion;
    /**EwsEnumAttribute */
    function FromEwsEnumString(value: string): FileAsMapping;
    /**EwsEnumAttribute */
    function ToEwsEnumString(value: FileAsMapping): string;
}
/**
 * Defines the follow-up actions that may be stamped on a message.
 */
 enum FlaggedForAction {
    /**
     * The message is flagged with any action.
     */
    Any = 0,
    /**
     * The recipient is requested to call the sender.
     */
    Call = 1,
    /**
     * The recipient is requested not to forward the message.
     */
    DoNotForward = 2,
    /**
     * The recipient is requested to follow up on the message.
     */
    FollowUp = 3,
    /**
     * The recipient received the message for information.
     */
    FYI = 4,
    /**
     * The recipient is requested to forward the message.
     */
    Forward = 5,
    /**
     * The recipient is informed that a response to the message is not required.
     */
    NoResponseNecessary = 6,
    /**
     * The recipient is requested to read the message.
     */
    Read = 7,
    /**
     * The recipient is requested to reply to the sender of the message.
     */
    Reply = 8,
    /**
     * The recipient is requested to reply to everyone the message was sent to.
     */
    ReplyToAll = 9,
    /**
     * The recipient is requested to review the message.
     */
    Review = 10
}
/**
 * Defines permission levels for calendar folders.
 */
 enum FolderPermissionLevel {
    /**
     * No permission is granted.
     */
    None = 0,
    /**
     * The Owner level.
     */
    Owner = 1,
    /**
     * The Publishing Editor level.
     */
    PublishingEditor = 2,
    /**
     * The Editor level.
     */
    Editor = 3,
    /**
     * The Publishing Author level.
     */
    PublishingAuthor = 4,
    /**
     * The Author level.
     */
    Author = 5,
    /**
     * The Nonediting Author level.
     */
    NoneditingAuthor = 6,
    /**
     * The Reviewer level.
     */
    Reviewer = 7,
    /**
     * The Contributor level.
     */
    Contributor = 8,
    /**
     * The Free/busy Time Only level. (Can only be applied to Calendar folders).
     */
    FreeBusyTimeOnly = 9,
    /**
     * The Free/busy Time, Subject and Location level. (Can only be applied to Calendar folders).
     */
    FreeBusyTimeAndSubjectAndLocation = 10,
    /**
     * The Custom level.
     */
    Custom = 11
}
/**
 * Defines a user's read access permission on items in a non-calendar folder.
 */
 enum FolderPermissionReadAccess {
    /**
     * The user has no read access on the items in the folder.
     */
    None = 0,
    /**
     * The user can read the start and end date and time of appointments. (Can only be applied to Calendar folders).
     */
    TimeOnly = 1,
    /**
     * The user can read the start and end date and time, subject and location of appointments. (Can only be applied to Calendar folders).
     */
    TimeAndSubjectAndLocation = 2,
    /**
     * The user has access to the full details of items.
     */
    FullDetails = 3
}
/**
 * Defines the scope of FindFolders operations.
 */
 enum FolderTraversal {
    /**
     * Only direct sub-folders are retrieved.
     */
    Shallow = 0,
    /**
     * The entire hierarchy of sub-folders is retrieved.
     */
    Deep = 1,
    /**
     * Only soft deleted folders are retrieved.
     */
    SoftDeleted = 2
}
/**
 * Defines the type of free/busy information returned by a GetUserAvailability operation.
 */
 enum FreeBusyViewType {
    /**
     * No view could be returned. This value cannot be specified in a call to GetUserAvailability.
     */
    None = 0,
    /**
     * Represents an aggregated free/busy stream. In cross-forest scenarios in which the target user in one forest does not have an Availability service configured, the Availability service of the requestor retrieves the target user's free/busy information from the free/busy public folder.
     * Because public folders only store free/busy information in merged form, MergedOnly is the only available information.
     */
    MergedOnly = 1,
    /**
     * Represents the legacy status information: free, busy, tentative, and OOF. This also includes the start/end times of the appointments. This view is richer than the legacy free/busy view because individual meeting start and end times are provided instead of an aggregated free/busy stream.
     */
    FreeBusy = 2,
    /**
     * Represents all the properties in FreeBusy with a stream of merged free/busy availability information.
     */
    FreeBusyMerged = 3,
    /**
     * Represents the legacy status information: free, busy, tentative, and OOF; the start/end times of the appointments; and various properties of the appointment such as subject, location, and importance.
     * This requested view will return the maximum amount of information for which the requesting user is privileged.
     * If merged free/busy information only is available, as with requesting information for users in a Microsoft Exchange Server 2003 forest, MergedOnly will be returned.
     * Otherwise, FreeBusy or Detailed will be returned.
     */
    Detailed = 4,
    /**
     * Represents all the properties in Detailed with a stream of merged free/busy availability information.
     * If only merged free/busy information is available, for example if the mailbox exists on a computer running Exchange 2003, MergedOnly will be returned.
     * Otherwise, FreeBusyMerged or DetailedMerged will be returned.
     */
    DetailedMerged = 5
}
/**
 * Defines the response types from a GetUserPhoto request
 */
 enum GetUserPhotoStatus {
    /**
     * The photo was successfully returned
     */
    PhotoReturned = 0,
    /**
     * The photo has not changed since it was last obtained
     */
    PhotoUnchanged = 1,
    /**
     * The photo or user was not found on the server
     */
    PhotoOrUserNotFound = 2
}/**
 * Defines the hold action.
 */
 enum HoldAction {
    /**
     * Create new hold
     */
    Create = 0,
    /**
     * Update query associated with a hold
     */
    Update = 1,
    /**
     * Release the hold
     */
    Remove = 2
}
/**
 * Defines the hold status.
 */
 enum HoldStatus {
    /**
     * Not on hold
     */
    NotOnHold = 0,
    /**
     * Placing/removing hold is in-progress
     */
    Pending = 1,
    /**
     * On hold
     */
    OnHold = 2,
    /**
     * Some mailboxes are on hold and some are not
     */
    PartialHold = 3,
    /**
     * The hold operation failed
     */
    Failed = 4
}
/**
 * The values indicate the types of item icons to display.
 */
 enum IconIndex {
    /**
     * A default icon.
     */
    Default = 0,
    /**
     * Post Item
     */
    PostItem = 1,
    /**
     * Icon read
     */
    MailRead = 2,
    /**
     * Icon unread
     */
    MailUnread = 3,
    /**
     * Icon replied
     */
    MailReplied = 4,
    /**
     * Icon forwarded
     */
    MailForwarded = 5,
    /**
     * Icon encrypted
     */
    MailEncrypted = 6,
    /**
     * Icon S/MIME signed
     */
    MailSmimeSigned = 7,
    /**
     * Icon encrypted replied
     */
    MailEncryptedReplied = 8,
    /**
     * Icon S/MIME signed replied
     */
    MailSmimeSignedReplied = 9,
    /**
     * Icon encrypted forwarded
     */
    MailEncryptedForwarded = 10,
    /**
     * Icon S/MIME signed forwarded
     */
    MailSmimeSignedForwarded = 11,
    /**
     * Icon encrypted read
     */
    MailEncryptedRead = 12,
    /**
     * Icon S/MIME signed read
     */
    MailSmimeSignedRead = 13,
    /**
     * IRM-protected mail
     */
    MailIrm = 14,
    /**
     * IRM-protected mail forwarded
     */
    MailIrmForwarded = 15,
    /**
     * IRM-protected mail replied
     */
    MailIrmReplied = 16,
    /**
     * Icon sms routed to external messaging system
     */
    SmsSubmitted = 17,
    /**
     * Icon sms routed to external messaging system
     */
    SmsRoutedToDeliveryPoint = 18,
    /**
     * Icon sms routed to external messaging system
     */
    SmsRoutedToExternalMessagingSystem = 19,
    /**
     * Icon sms routed to external messaging system
     */
    SmsDelivered = 20,
    /**
     * Outlook Default for Contacts
     */
    OutlookDefaultForContacts = 21,
    /**
     * Icon appointment item
     */
    AppointmentItem = 22,
    /**
     * Icon appointment recur
     */
    AppointmentRecur = 23,
    /**
     * Icon appointment meet
     */
    AppointmentMeet = 24,
    /**
     * Icon appointment meet recur
     */
    AppointmentMeetRecur = 25,
    /**
     * Icon appointment meet NY
     */
    AppointmentMeetNY = 26,
    /**
     * Icon appointment meet yes
     */
    AppointmentMeetYes = 27,
    /**
     * Icon appointment meet no
     */
    AppointmentMeetNo = 28,
    /**
     * Icon appointment meet maybe
     */
    AppointmentMeetMaybe = 29,
    /**
     * Icon appointment meet cancel
     */
    AppointmentMeetCancel = 30,
    /**
     * Icon appointment meet info
     */
    AppointmentMeetInfo = 31,
    /**
     * Icon task item
     */
    TaskItem = 32,
    /**
     * Icon task recur
     */
    TaskRecur = 33,
    /**
     * Icon task owned
     */
    TaskOwned = 34,
    /**
     * Icon task delegated
     */
    TaskDelegated = 35
}
/**
 * Defines supported Id formats in ConvertId operations.
 */
 enum IdFormat {
    /**
     * The EWS Id format used in Exchange 2007 RTM.
     */
    EwsLegacyId = 0,
    /**
     * The EWS Id format used in Exchange 2007 SP1 and above.
     */
    EwsId = 1,
    /**
     * The base64-encoded PR_ENTRYID property.
     */
    EntryId = 2,
    /**
     * The hexadecimal representation  of the PR_ENTRYID property.
     */
    HexEntryId = 3,
    /**
     * The Store Id format.
     */
    StoreId = 4,
    /**
     * The Outlook Web Access Id format.
     */
    OwaId = 5
}
/**
 * Defines Instant Messaging address entries for a contact.
 */
 enum ImAddressKey {
    /**
     * The first Instant Messaging address.
     */
    ImAddress1 = 0,
    /**
     * The second Instant Messaging address.
     */
    ImAddress2 = 1,
    /**
     * The third Instant Messaging address.
     */
    ImAddress3 = 2
}
/**
 * Defines the importance of an item.
 */
 enum Importance {
    /**
     * Low importance.
     */
    Low = 0,
    /**
     * Normal importance.
     */
    Normal = 1,
    /**
     * High importance.
     */
    High = 2
}
/**
 * Defines the flag status of an Item.
 */
 enum ItemFlagStatus {
    /**
     * Not Flagged.
     */
    NotFlagged = 0,
    /**
     * Flagged.
     */
    Flagged = 1,
    /**
     * Complete.
     */
    Complete = 2
}
/**
 * Item index error
 */
 enum ItemIndexError {
    /**
     * None
     */
    None = 0,
    /**
     * Generic Error
     */
    GenericError = 1,
    /**
     * Timeout
     */
    Timeout = 2,
    /**
     * Stale Event
     */
    StaleEvent = 3,
    /**
     * Mailbox Offline
     */
    MailboxOffline = 4,
    /**
     * Too many attachments to index
     */
    AttachmentLimitReached = 5,
    /**
     * Data is truncated
     */
    MarsWriterTruncation = 6
}
/**
 * Defines the scope of FindItems operations.
 */
 enum ItemTraversal {
    /**
     * All non deleted items in the specified folder are retrieved.
     */
    Shallow = 0,
    /**
     * Only soft-deleted items are retrieved.
     */
    SoftDeleted = 1,
    /**
     * Only associated items are retrieved (Exchange 2010 or later).
     */
    Associated = 2
}
 module ItemTraversal {
    /**RequiredServerVersionAttribute */
    function RequiredServerVersion(value: ItemTraversal): ExchangeVersion;
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
    EndOfFile = 10
}
/**
 * Defines the legacy free/busy status associated with an appointment.
 */
 enum LegacyFreeBusyStatus {
    /**
     * The time slot associated with the appointment appears as free.
     */
    Free = 0,
    /**
     * The time slot associated with the appointment appears as tentative.
     */
    Tentative = 1,
    /**
     * The time slot associated with the appointment appears as busy.
     */
    Busy = 2,
    /**
     * The time slot associated with the appointment appears as Out of Office.
     */
    OOF = 3,
    /**
     * The time slot associated with the appointment appears as working else where.
     */
    WorkingElsewhere = 4,
    /**
     * No free/busy status is associated with the appointment.
     */
    NoData = 5
}
/**
 * Online Meeting Lobby Bypass options.
 */
 enum LobbyBypass {
    /**
     * Disabled.
     */
    Disabled = 0,
    /**
     * Enabled for gateway participants.
     */
    EnabledForGatewayParticipants = 1
}
/**
 * Source of resolution.
 */
 enum LocationSource {
    /**
     * Unresolved
     */
    None = 0,
    /**
     * Resolved by external location services (such as Bing, Google, etc)
     */
    LocationServices = 1,
    /**
     * Resolved by external phonebook services (such as Bing, Google, etc)
     */
    PhonebookServices = 2,
    /**
     * Revolved by a GPS enabled device (such as cellphone)
     */
    Device = 3,
    /**
     * Sourced from a contact card
     */
    Contact = 4,
    /**
     * Sourced from a resource (such as a conference room)
     */
    Resource = 5
}
/**
 * Defines a logical operator as used by search filter collections.
 */
 enum LogicalOperator {
    /**
     * The AND operator.
     */
    And = 0,
    /**
     * The OR operator.
     */
    Or = 1
}
/**
 * Defines the location for mailbox search.
 */
 enum MailboxSearchLocation {
    /**
     * Primary only (Exchange 2013 or later).
     */
    PrimaryOnly = 0,
    /**
     * Archive only (Exchange 2013 or later).
     */
    ArchiveOnly = 1,
    /**
     * Both Primary and Archive (Exchange 2013 or later).
     */
    All = 2
}
 module MailboxSearchLocation {
    /**RequiredServerVersionAttribute */
    function RequiredServerVersion(value: MailboxSearchLocation): ExchangeVersion;
}/**
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
     * The EmailAddress represents a GroupMailbox (Exchange 2015/2016 or later).
     */
    GroupMailbox = 7
}
 module MailboxType {
    /**RequiredServerVersionAttribute */
    function RequiredServerVersion(value: MailboxType): ExchangeVersion;
    /**EwsEnumAttribute */
    function FromEwsEnumString(value: string): MailboxType;
    /**EwsEnumAttribute */
    function ToEwsEnumString(value: MailboxType): string;
}
/**
 * Defines the MAPI type of an extended property.
 */
 enum MapiPropertyType {
    /**
     * The property is of type ApplicationTime.
     */
    ApplicationTime = 0,
    /**
     * The property is of type ApplicationTimeArray.
     */
    ApplicationTimeArray = 1,
    /**
     * The property is of type Binary.
     */
    Binary = 2,
    /**
     * The property is of type BinaryArray.
     */
    BinaryArray = 3,
    /**
     * The property is of type Boolean.
     */
    Boolean = 4,
    /**
     * The property is of type CLSID.
     */
    CLSID = 5,
    /**
     * The property is of type CLSIDArray.
     */
    CLSIDArray = 6,
    /**
     * The property is of type Currency.
     */
    Currency = 7,
    /**
     * The property is of type CurrencyArray.
     */
    CurrencyArray = 8,
    /**
     * The property is of type Double.
     */
    Double = 9,
    /**
     * The property is of type DoubleArray.
     */
    DoubleArray = 10,
    /**
     * The property is of type Error.
     */
    Error = 11,
    /**
     * The property is of type Float.
     */
    Float = 12,
    /**
     * The property is of type FloatArray.
     */
    FloatArray = 13,
    /**
     * The property is of type Integer.
     */
    Integer = 14,
    /**
     * The property is of type IntegerArray.
     */
    IntegerArray = 15,
    /**
     * The property is of type Long.
     */
    Long = 16,
    /**
     * The property is of type LongArray.
     */
    LongArray = 17,
    /**
     * The property is of type Null.
     */
    Null = 18,
    /**
     * The property is of type Object.
     */
    Object = 19,
    /**
     * The property is of type ObjectArray.
     */
    ObjectArray = 20,
    /**
     * The property is of type Short.
     */
    Short = 21,
    /**
     * The property is of type ShortArray.
     */
    ShortArray = 22,
    /**
     * The property is of type SystemTime.
     */
    SystemTime = 23,
    /**
     * The property is of type SystemTimeArray.
     */
    SystemTimeArray = 24,
    /**
     * The property is of type String.
     */
    String = 25,
    /**
     * The property is of type StringArray.
     */
    StringArray = 26
}
/** shim to store type of data in MapiTypeConverterMapEntry */
 enum MapiTypeConverterTypeSystem {
    boolean = 0,
    string = 1,
    number = 2,
    DateTime = 3,
    guid = 4,
    byteArray = 5
}
/**
 * The attendee is the organizer of the meeting.
 */
 enum MeetingAttendeeType {
    /**
     * The attendee is the organizer of the meeting.
     */
    Organizer = 0,
    /**
     * The attendee is required.
     */
    Required = 1,
    /**
     * The attendee is optional.
     */
    Optional = 2,
    /**
     * The attendee is a room.
     */
    Room = 3,
    /**
     * The attendee is a resource.
     */
    Resource = 4
}
/**
 * Defines how meeting requests are sent to delegates.
 */
 enum MeetingRequestsDeliveryScope {
    /**
     * Meeting requests are sent to delegates only.
     */
    DelegatesOnly = 0,
    /**
     * Meeting requests are sent to delegates and to the owner of the mailbox.
     */
    DelegatesAndMe = 1,
    /**
     * Meeting requests are sent to delegates and informational messages are sent to the owner of the mailbox.
     */
    DelegatesAndSendInformationToMe = 2,
    /**
     * Meeting requests are not sent to delegates.  This value is supported only for Exchange 2010 SP1 or later server versions.
     */
    NoForward = 3
}
 module MeetingRequestsDeliveryScope {
    /**RequiredServerVersionAttribute */
    function RequiredServerVersion(value: MeetingRequestsDeliveryScope): ExchangeVersion;
}
/**
 * Defines the type of a meeting request.
 */
 enum MeetingRequestType {
    /**
     * Undefined meeting request type.
     */
    None = 0,
    /**
     * The meeting request is an update to the original meeting.
     */
    FullUpdate = 1,
    /**
     * The meeting request is an information update.
     */
    InformationalUpdate = 2,
    /**
     * The meeting request is for a new meeting.
     */
    NewMeetingRequest = 3,
    /**
     * The meeting request is outdated.
     */
    Outdated = 4,
    /**
     * The meeting update is a silent update to an existing meeting.
     */
    SilentUpdate = 5,
    /**
     * The meeting update was forwarded to a delegate, and this copy is informational.
     */
    PrincipalWantsCopy = 6
}
/**
 * Defines the types of response given to a meeting request.
 */
 enum MeetingResponseType {
    /**
     * The response type is unknown.
     */
    Unknown = 0,
    /**
     * There was no response. The authenticated is the organizer of the meeting.
     */
    Organizer = 1,
    /**
     * The meeting was tentatively accepted.
     */
    Tentative = 2,
    /**
     * The meeting was accepted.
     */
    Accept = 3,
    /**
     * The meeting was declined.
     */
    Decline = 4,
    /**
     * No response was received for the meeting.
     */
    NoResponseReceived = 5
}
/**
 * Defines the status of group members.
 */
 enum MemberStatus {
    /**
     * The member is unrecognized.
     */
    Unrecognized = 0,
    /**
     * The member is normal.
     */
    Normal = 1,
    /**
     * The member is demoted.
     */
    Demoted = 2
}
/**
 * Defines how messages are disposed of in CreateItem and UpdateItem operations.
 */
 enum MessageDisposition {
    /**
     * Messages are saved but not sent.
     */
    SaveOnly = 0,
    /**
     * Messages are sent and a copy is saved.
     */
    SendAndSaveCopy = 1,
    /**
     * Messages are sent but no copy is saved.
     */
    SendOnly = 2
}
/**
 * Defines months of the year.
 */
 enum Month {
    /**
     * January.
     */
    January = 1,
    /**
     * February.
     */
    February = 2,
    /**
     * March.
     */
    March = 3,
    /**
     * April.
     */
    April = 4,
    /**
     * May.
     */
    May = 5,
    /**
     * June.
     */
    June = 6,
    /**
     * July.
     */
    July = 7,
    /**
     * August.
     */
    August = 8,
    /**
     * September.
     */
    September = 9,
    /**
     * October.
     */
    October = 10,
    /**
     * November.
     */
    November = 11,
    /**
     * December.
     */
    December = 12
}
/**
 * Defines the offset's base point in a paged view.
 */
 enum OffsetBasePoint {
    /**
     * The offset is from the beginning of the view.
     */
    Beginning = 0,
    /**
     * The offset is from the end of the view.
     */
    End = 1
}
/**
 * Online Meeting Access Level options.
 */
 enum OnlineMeetingAccessLevel {
    /**
     * Locked.
     */
    Locked = 0,
    /**
     * Invited.
     */
    Invited = 1,
    /**
     * Internal.
     */
    Internal = 2,
    /**
     * Everyone.
     */
    Everyone = 3
}
/**
 * Defines the external audience of an Out of Office notification.
 */
 enum OofExternalAudience {
    /**
     * No external recipients should receive Out of Office notifications.
     */
    None = 0,
    /**
     * Only recipients that are in the user's Contacts frolder should receive Out of Office notifications.
     */
    Known = 1,
    /**
     * All recipients should receive Out of Office notifications.
     */
    All = 2
}
/**
 * Defines a user's Out of Office Assistant status.
 */
 enum OofState {
    /**
     * The assistant is diabled.
     */
    Disabled = 0,
    /**
     * The assistant is enabled.
     */
    Enabled = 1,
    /**
     * The assistant is scheduled.
     */
    Scheduled = 2
}/**
 * Defines the scope of a user's permission on a folders.
 */
 enum PermissionScope {
    /**
     * The user does not have the associated permission.
     */
    None = 0,
    /**
     * The user has the associated permission on items that it owns.
     */
    Owned = 1,
    /**
     * The user has the associated permission on all items.
     */
    All = 2
}
/**
 * The PhoneCallState enumeration
 */
 enum PhoneCallState {
    /**
     * Idle.
     */
    Idle = 0,
    /**
     * Connecting.
     */
    Connecting = 1,
    /**
     * Alerted.
     */
    Alerted = 2,
    /**
     * Connected.
     */
    Connected = 3,
    /**
     * Disconnected.
     */
    Disconnected = 4,
    /**
     * Incoming.
     */
    Incoming = 5,
    /**
     * Transferring.
     */
    Transferring = 6,
    /**
     * Forwarding.
     */
    Forwarding = 7
}
/**
 * Defines phone number entries for a contact.
 */
 enum PhoneNumberKey {
    /**
     * The assistant's phone number.
     */
    AssistantPhone = 0,
    /**
     * The business fax number.
     */
    BusinessFax = 1,
    /**
     * The business phone number.
     */
    BusinessPhone = 2,
    /**
     * The second business phone number.
     */
    BusinessPhone2 = 3,
    /**
     * The callback number.
     */
    Callback = 4,
    /**
     * The car phone number.
     */
    CarPhone = 5,
    /**
     * The company's main phone number.
     */
    CompanyMainPhone = 6,
    /**
     * The home fax number.
     */
    HomeFax = 7,
    /**
     * The home phone number.
     */
    HomePhone = 8,
    /**
     * The second home phone number.
     */
    HomePhone2 = 9,
    /**
     * The ISDN number.
     */
    Isdn = 10,
    /**
     * The mobile phone number.
     */
    MobilePhone = 11,
    /**
     * An alternate fax number.
     */
    OtherFax = 12,
    /**
     * An alternate phone number.
     */
    OtherTelephone = 13,
    /**
     * The pager number.
     */
    Pager = 14,
    /**
     * The primary phone number.
     */
    PrimaryPhone = 15,
    /**
     * The radio phone number.
     */
    RadioPhone = 16,
    /**
     * The Telex number
     */
    Telex = 17,
    /**
     * The TTY/TTD phone number.
     */
    TtyTddPhone = 18
}
/**
 * Defines a physical address index.
 */
 enum PhysicalAddressIndex {
    /**
     * None.
     */
    None = 0,
    /**
     * The business address.
     */
    Business = 1,
    /**
     * The home address.
     */
    Home = 2,
    /**
     * The alternate address.
     */
    Other = 3
}
/**
 * Defines physical address entries for a contact.
 */
 enum PhysicalAddressKey {
    /**
     * The business address.
     */
    Business = 0,
    /**
     * The home address.
     */
    Home = 1,
    /**
     * An alternate address.
     */
    Other = 2
}
/**
 * Online Meeting Presenters options.
 */
 enum Presenters {
    /**
     * Disabled.
     */
    Disabled = 0,
    /**
     * Internal.
     */
    Internal = 1,
    /**
     * Everyone.
     */
    Everyone = 2
}
/**
 * Preview item base shape
 */
 enum PreviewItemBaseShape {
    /**
     * Default (all properties required for showing preview by default)
     */
    Default = 0,
    /**
     * Compact (only a set of core properties)
     */
    Compact = 1
}/**
 * The rendering method.
 */
 enum RenderingMode {
    /**
     * XML
     */
    Xml = 0,
    /**
     * Javascript Object Notation
     */
    JSON = 1
}
/**
 * Defines the location where a ResolveName operation searches for contacts.
 */
 enum ResolveNameSearchLocation {
    /**
     * The name is resolved against the Global Address List.
     */
    DirectoryOnly = 0,
    /**
     * The name is resolved against the Global Address List and then against the Contacts folder if no match was found.
     */
    DirectoryThenContacts = 1,
    /**
     * The name is resolved against the Contacts folder.
     */
    ContactsOnly = 2,
    /**
     * The name is resolved against the Contacts folder and then against the Global Address List if no match was found.
     */
    ContactsThenDirectory = 3
}
/**
 * Defines the response actions that can be taken on an item.
 *
 * [Flags]
 */
 enum ResponseActions {
    /**
     * No action can be taken.
     */
    None = 0,
    /**
     * The item can be accepted.
     */
    Accept = 1,
    /**
     * The item can be tentatively accepted.
     */
    TentativelyAccept = 2,
    /**
     * The item can be declined.
     */
    Decline = 4,
    /**
     * The item can be replied to.
     */
    Reply = 8,
    /**
     * The item can be replied to all.
     */
    ReplyAll = 16,
    /**
     * The item can be forwarded.
     */
    Forward = 32,
    /**
     * The item can be cancelled.
     */
    Cancel = 64,
    /**
     * The item can be removed from the calendar.
     */
    RemoveFromCalendar = 128,
    /**
     * The item's read receipt can be suppressed.
     */
    SuppressReadReceipt = 256,
    /**
     * A reply to the item can be posted.
     */
    PostReply = 512
}
/**
 * Defines the type of a ResponseMessage object.
 */
 enum ResponseMessageType {
    /**
     * The ResponseMessage is a reply to the sender of a message.
     */
    Reply = 0,
    /**
     * The ResponseMessage is a reply to the sender and all the recipients of a message.
     */
    ReplyAll = 1,
    /**
     * The ResponseMessage is a forward.
     */
    Forward = 2
}
/**
 * Defines the action of a retention policy tag.
 */
 enum RetentionActionType {
    /**
     * Never tags (RetentionEnabled = false) do not have retention action in the FAI.
     */
    None = 0,
    /**
     * Expired items will be moved to the Deleted Items folder.
     */
    MoveToDeletedItems = 1,
    /**
     * Expired items will be moved to the organizational folder specified in the ExpirationDestination field.
     */
    MoveToFolder = 2,
    /**
     * Expired items will be soft deleted.
     */
    DeleteAndAllowRecovery = 3,
    /**
     * Expired items will be hard deleted.
     */
    PermanentlyDelete = 4,
    /**
     * Expired items will be tagged as expired.
     */
    MarkAsPastRetentionLimit = 5,
    /**
     * Expired items will be moved to the archive.
     */
    MoveToArchive = 6
}
/**
 * Defines the retention type.
 */
 enum RetentionType {
    /**
     * Delete retention.
     */
    Delete = 0,
    /**
     * Archive retention.
     */
    Archive = 1
}
/**
 * Defines the error codes identifying why a rule failed validation.
 */
 enum RuleErrorCode {
    /**
     * Active Directory operation failed.
     */
    ADOperationFailure = 0,
    /**
     * The e-mail account specified in the FromConnectedAccounts predicate was not found.
     */
    ConnectedAccountNotFound = 1,
    /**
     * The Rule object in a CreateInboxRuleOperation has an Id.
     * The Ids of new  rules are generated server side and should not be provided by the client.
     */
    CreateWithRuleId = 2,
    /**
     * The value is empty. An empty value is not allowed for the property.
     */
    EmptyValueFound = 3,
    /**
     * There already is a rule with the same priority.
     */
    DuplicatedPriority = 4,
    /**
     * There are multiple operations against the same rule.
     * Only one operation per rule is allowed.
     */
    DuplicatedOperationOnTheSameRule = 5,
    /**
     * The folder does not exist in the user's mailbox.
     */
    FolderDoesNotExist = 6,
    /**
     * The e-mail address is invalid.
     */
    InvalidAddress = 7,
    /**
     * The date range is invalid.
     */
    InvalidDateRange = 8,
    /**
     * The folder Id is invalid.
     */
    InvalidFolderId = 9,
    /**
     * The size range is invalid.
     */
    InvalidSizeRange = 10,
    /**
     * The value is invalid.
     */
    InvalidValue = 11,
    /**
     * The message classification was not found.
     */
    MessageClassificationNotFound = 12,
    /**
     * No action was specified. At least one action must be specified.
     */
    MissingAction = 13,
    /**
     * The required parameter is missing.
     */
    MissingParameter = 14,
    /**
     * The range value is missing.
     */
    MissingRangeValue = 15,
    /**
     * The property cannot be modified.
     */
    NotSettable = 16,
    /**
     * The recipient does not exist.
     */
    RecipientDoesNotExist = 17,
    /**
     * The rule was not found.
     */
    RuleNotFound = 18,
    /**
     * The size is less than zero.
     */
    SizeLessThanZero = 19,
    /**
     * The string value is too big.
     */
    StringValueTooBig = 20,
    /**
     * The address is unsupported.
     */
    UnsupportedAddress = 21,
    /**
     * An unexpected error occured.
     */
    UnexpectedError = 22,
    /**
     * The rule is not supported.
     */
    UnsupportedRule = 23
}
/**
 * Defines the available properties of a rule.
 */
 enum RuleProperty {
    /**
     * The RuleId property of a rule.
     */
    RuleId = 0,
    /**
     * The DisplayName property of a rule.
     */
    DisplayName = 1,
    /**
     * The Priority property of a rule.
     */
    Priority = 2,
    /**
     * The IsNotSupported property of a rule.
     */
    IsNotSupported = 3,
    /**
     * The Actions property of a rule.
     */
    Actions = 4,
    /**
     * The Categories property of a rule's set of conditions.
     */
    ConditionCategories = 5,
    /**
     * The ContainsBodyStrings property of a rule's set of conditions.
     */
    ConditionContainsBodyStrings = 6,
    /**
     * The ContainsHeaderStrings property of a rule's set of conditions.
     */
    ConditionContainsHeaderStrings = 7,
    /**
     * The ContainsRecipientStrings property of a rule's set of conditions.
     */
    ConditionContainsRecipientStrings = 8,
    /**
     * The ContainsSenderStrings property of a rule's set of conditions.
     */
    ConditionContainsSenderStrings = 9,
    /**
     * The ContainsSubjectOrBodyStrings property of a rule's set of conditions.
     */
    ConditionContainsSubjectOrBodyStrings = 10,
    /**
     * The ContainsSubjectStrings property of a rule's set of conditions.
     */
    ConditionContainsSubjectStrings = 11,
    /**
     * The FlaggedForAction property of a rule's set of conditions.
     */
    ConditionFlaggedForAction = 12,
    /**
     * The FromAddresses property of a rule's set of conditions.
     */
    ConditionFromAddresses = 13,
    /**
     * The FromConnectedAccounts property of a rule's set of conditions.
     */
    ConditionFromConnectedAccounts = 14,
    /**
     * The HasAttachments property of a rule's set of conditions.
     */
    ConditionHasAttachments = 15,
    /**
     * The Importance property of a rule's set of conditions.
     */
    ConditionImportance = 16,
    /**
     * The IsApprovalRequest property of a rule's set of conditions.
     */
    ConditionIsApprovalRequest = 17,
    /**
     * The IsAutomaticForward property of a rule's set of conditions.
     */
    ConditionIsAutomaticForward = 18,
    /**
     * The IsAutomaticReply property of a rule's set of conditions.
     */
    ConditionIsAutomaticReply = 19,
    /**
     * The IsEncrypted property of a rule's set of conditions.
     */
    ConditionIsEncrypted = 20,
    /**
     * The IsMeetingRequest property of a rule's set of conditions.
     */
    ConditionIsMeetingRequest = 21,
    /**
     * The IsMeetingResponse property of a rule's set of conditions.
     */
    ConditionIsMeetingResponse = 22,
    /**
     * The IsNonDeliveryReport property of a rule's set of conditions.
     */
    ConditionIsNonDeliveryReport = 23,
    /**
     * The IsPermissionControlled property of a rule's set of conditions.
     */
    ConditionIsPermissionControlled = 24,
    /**
     * The IsRead property of a rule's set of conditions.
     */
    ConditionIsRead = 25,
    /**
     * The IsSigned property of a rule's set of conditions.
     */
    ConditionIsSigned = 26,
    /**
     * The IsVoicemail property of a rule's set of conditions.
     */
    ConditionIsVoicemail = 27,
    /**
     * The IsReadReceipt property of a rule's set of conditions.
     */
    ConditionIsReadReceipt = 28,
    /**
     * The ItemClasses property of a rule's set of conditions.
     */
    ConditionItemClasses = 29,
    /**
     * The MessageClassifications property of a rule's set of conditions.
     */
    ConditionMessageClassifications = 30,
    /**
     * The NotSentToMe property of a rule's set of conditions.
     */
    ConditionNotSentToMe = 31,
    /**
     * The SentCcMe property of a rule's set of conditions.
     */
    ConditionSentCcMe = 32,
    /**
     * The SentOnlyToMe property of a rule's set of conditions.
     */
    ConditionSentOnlyToMe = 33,
    /**
     * The SentToAddresses property of a rule's set of conditions.
     */
    ConditionSentToAddresses = 34,
    /**
     * The SentToMe property of a rule's set of conditions.
     */
    ConditionSentToMe = 35,
    /**
     * The SentToOrCcMe property of a rule's set of conditions.
     */
    ConditionSentToOrCcMe = 36,
    /**
     * The Sensitivity property of a rule's set of conditions.
     */
    ConditionSensitivity = 37,
    /**
     * The WithinDateRange property of a rule's set of conditions.
     */
    ConditionWithinDateRange = 38,
    /**
     * The WithinSizeRange property of a rule's set of conditions.
     */
    ConditionWithinSizeRange = 39,
    /**
     * The Categories property of a rule's set of exceptions.
     */
    ExceptionCategories = 40,
    /**
     * The ContainsBodyStrings property of a rule's set of exceptions.
     */
    ExceptionContainsBodyStrings = 41,
    /**
     * The ContainsHeaderStrings property of a rule's set of exceptions.
     */
    ExceptionContainsHeaderStrings = 42,
    /**
     * The ContainsRecipientStrings property of a rule's set of exceptions.
     */
    ExceptionContainsRecipientStrings = 43,
    /**
     * The ContainsSenderStrings property of a rule's set of exceptions.
     */
    ExceptionContainsSenderStrings = 44,
    /**
     * The ContainsSubjectOrBodyStrings property of a rule's set of exceptions.
     */
    ExceptionContainsSubjectOrBodyStrings = 45,
    /**
     * The ContainsSubjectStrings property of a rule's set of exceptions.
     */
    ExceptionContainsSubjectStrings = 46,
    /**
     * The FlaggedForAction property of a rule's set of exceptions.
     */
    ExceptionFlaggedForAction = 47,
    /**
     * The FromAddresses property of a rule's set of exceptions.
     */
    ExceptionFromAddresses = 48,
    /**
     * The FromConnectedAccounts property of a rule's set of exceptions.
     */
    ExceptionFromConnectedAccounts = 49,
    /**
     * The HasAttachments property of a rule's set of exceptions.
     */
    ExceptionHasAttachments = 50,
    /**
     * The Importance property of a rule's set of exceptions.
     */
    ExceptionImportance = 51,
    /**
     * The IsApprovalRequest property of a rule's set of exceptions.
     */
    ExceptionIsApprovalRequest = 52,
    /**
     * The IsAutomaticForward property of a rule's set of exceptions.
     */
    ExceptionIsAutomaticForward = 53,
    /**
     * The IsAutomaticReply property of a rule's set of exceptions.
     */
    ExceptionIsAutomaticReply = 54,
    /**
     * The IsEncrypted property of a rule's set of exceptions.
     */
    ExceptionIsEncrypted = 55,
    /**
     * The IsMeetingRequest property of a rule's set of exceptions.
     */
    ExceptionIsMeetingRequest = 56,
    /**
     * The IsMeetingResponse property of a rule's set of exceptions.
     */
    ExceptionIsMeetingResponse = 57,
    /**
     * The IsNonDeliveryReport property of a rule's set of exceptions.
     */
    ExceptionIsNonDeliveryReport = 58,
    /**
     * The IsPermissionControlled property of a rule's set of exceptions.
     */
    ExceptionIsPermissionControlled = 59,
    /**
     * The IsRead property of a rule's set of exceptions.
     */
    ExceptionIsRead = 60,
    /**
     * The IsSigned property of a rule's set of exceptions.
     */
    ExceptionIsSigned = 61,
    /**
     * The IsVoicemail property of a rule's set of exceptions.
     */
    ExceptionIsVoicemail = 62,
    /**
     * The ItemClasses property of a rule's set of exceptions.
     */
    ExceptionItemClasses = 63,
    /**
     * The MessageClassifications property of a rule's set of exceptions.
     */
    ExceptionMessageClassifications = 64,
    /**
     * The NotSentToMe property of a rule's set of exceptions.
     */
    ExceptionNotSentToMe = 65,
    /**
     * The SentCcMe property of a rule's set of exceptions.
     */
    ExceptionSentCcMe = 66,
    /**
     * The SentOnlyToMe property of a rule's set of exceptions.
     */
    ExceptionSentOnlyToMe = 67,
    /**
     * The SentToAddresses property of a rule's set of exceptions.
     */
    ExceptionSentToAddresses = 68,
    /**
     * The SentToMe property of a rule's set of exceptions.
     */
    ExceptionSentToMe = 69,
    /**
     * The SentToOrCcMe property of a rule's set of exceptions.
     */
    ExceptionSentToOrCcMe = 70,
    /**
     * The Sensitivity property of a rule's set of exceptions.
     */
    ExceptionSensitivity = 71,
    /**
     * The WithinDateRange property of a rule's set of exceptions.
     */
    ExceptionWithinDateRange = 72,
    /**
     * The WithinSizeRange property of a rule's set of exceptions.
     */
    ExceptionWithinSizeRange = 73,
    /**
     * The Categories property in a rule's set of actions.
     */
    ActionCategories = 74,
    /**
     * The CopyToFolder property in a rule's set of actions.
     */
    ActionCopyToFolder = 75,
    /**
     * The Delete property in a rule's set of actions.
     */
    ActionDelete = 76,
    /**
     * The ForwardAsAttachmentToRecipients property in a rule's set of actions.
     */
    ActionForwardAsAttachmentToRecipients = 77,
    /**
     * The ForwardToRecipients property in a rule's set of actions.
     */
    ActionForwardToRecipients = 78,
    /**
     * The Importance property in a rule's set of actions.
     */
    ActionImportance = 79,
    /**
     * The MarkAsRead property in a rule's set of actions.
     */
    ActionMarkAsRead = 80,
    /**
     * The MoveToFolder property in a rule's set of actions.
     */
    ActionMoveToFolder = 81,
    /**
     * The PermanentDelete property in a rule's set of actions.
     */
    ActionPermanentDelete = 82,
    /**
     * The RedirectToRecipients property in a rule's set of actions.
     */
    ActionRedirectToRecipients = 83,
    /**
     * The SendSMSAlertToRecipients property in a rule's set of actions.
     */
    ActionSendSMSAlertToRecipients = 84,
    /**
     * The ServerReplyWithMessage property in a rule's set of actions.
     */
    ActionServerReplyWithMessage = 85,
    /**
     * The StopProcessingRules property in a rule's set of actions.
     */
    ActionStopProcessingRules = 86,
    /**
     * The IsEnabled property of a rule, indicating if the rule is enabled.
     */
    IsEnabled = 87,
    /**
     * The IsInError property of a rule, indicating if the rule is in error.
     */
    IsInError = 88,
    /**
     * The Conditions property of a rule, contains all conditions of the rule.
     */
    Conditions = 89,
    /**
     * The Exceptions property of a rule, contains all exceptions of the rule.
     */
    Exceptions = 90
}
 module RuleProperty {
    /**EwsEnumAttribute */
    function FromEwsEnumString(value: string): RuleProperty;
    /**EwsEnumAttribute */
    function ToEwsEnumString(value: RuleProperty): string;
}
/**
 * Defines the scope of a search folder.
 */
 enum SearchFolderTraversal {
    /**
     * Items belonging to the root folder are retrieved.
     */
    Shallow = 0,
    /**
     * Items belonging to the root folder and its sub-folders are retrieved.
     */
    Deep = 1
}
/**
 * Defines the page direction for mailbox search.
 */
 enum SearchPageDirection {
    /**
     * Navigate to next page.
     */
    Next = 0,
    /**
     * Navigate to previous page.
     */
    Previous = 1
}
/**
 * Defines the type of search result.
 */
 enum SearchResultType {
    /**
     * Keyword statistics only.
     */
    StatisticsOnly = 0,
    /**
     * Preview only.
     */
    PreviewOnly = 1
}
/**
 * Defines how meeting cancellations should be sent to attendees when an appointment is deleted.
 */
 enum SendCancellationsMode {
    /**
     * No meeting cancellation is sent.
     */
    SendToNone = 0,
    /**
     * Meeting cancellations are sent to all attendees.
     */
    SendOnlyToAll = 1,
    /**
     * Meeting cancellations are sent to all attendees and a copy of the cancellation message is saved in the organizer's Sent Items folder.
     */
    SendToAllAndSaveCopy = 2
}
/**
 * Defines if/how meeting invitations are sent.
 */
 enum SendInvitationsMode {
    /**
     * No meeting invitation is sent.
     */
    SendToNone = 0,
    /**
     * Meeting invitations are sent to all attendees.
     */
    SendOnlyToAll = 1,
    /**
     * Meeting invitations are sent to all attendees and a copy of the invitation message is saved.
     */
    SendToAllAndSaveCopy = 2
}
/**
 * Defines if/how meeting invitations or cancellations should be sent to attendees when an appointment is updated.
 */
 enum SendInvitationsOrCancellationsMode {
    /**
     * No meeting invitation/cancellation is sent.
     */
    SendToNone = 0,
    /**
     * Meeting invitations/cancellations are sent to all attendees.
     */
    SendOnlyToAll = 1,
    /**
     * Meeting invitations/cancellations are sent only to attendees that have been added or modified.
     */
    SendOnlyToChanged = 2,
    /**
     * Meeting invitations/cancellations are sent to all attendees and a copy is saved in the organizer's Sent Items folder.
     */
    SendToAllAndSaveCopy = 3,
    /**
     * Meeting invitations/cancellations are sent only to attendees that have been added or modified and a copy is saved in the organizer's Sent Items folder.
     */
    SendToChangedAndSaveCopy = 4
}
/**
 * The values indicate the types of item icons to display.
 */
 enum SendPrompt {
    /**
     * None
     */
    None = 0,
    /**
     * Send
     */
    Send = 1,
    /**
     * VotingOption
     */
    VotingOption = 2
}
/**
 * Defines the sensitivity of an item.
 */
 enum Sensitivity {
    /**
     * The item has a normal sensitivity.
     */
    Normal = 0,
    /**
     * The item is personal.
     */
    Personal = 1,
    /**
     * The item is private.
     */
    Private = 2,
    /**
     * The item is confidential.
     */
    Confidential = 3
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
    ErrorExceededMaxRecipientLimitShowTierUpgrade = 473
}/**
 * Defines the type of a service object.
 */
 enum ServiceObjectType {
    /**
     * The object is a folder.
     */
    Folder = 0,
    /**
     * The object is an item.
     */
    Item = 1,
    /**
     * Data represents a conversation
     */
    Conversation = 2,
    /**
     * Data represents a persona
     */
    Persona = 3
}
/**
 * Defines the result of a call to an EWS method.
 * Values in this enumeration have to be ordered from lowest to highest severity.
 */
 enum ServiceResult {
    /**
     * The call was successful
     */
    Success = 0,
    /**
     * The call triggered at least one warning
     */
    Warning = 1,
    /**
     * The call triggered at least one error
     */
    Error = 2
}
/**
 * Defines the type of SetClientExtensionActionId.
 */
 enum SetClientExtensionActionId {
    /**
     * Install
     */
    Install = 0,
    /**
     * Uninstall
     */
    Uninstall = 1,
    /**
     * Configure
     */
    Configure = 2
}
/**
 * Defines a sort direction
 */
 enum SortDirection {
    /**
     * The sort is performed in ascending order.
     */
    Ascending = 0,
    /**
     * The sort is performed in descending order.
     */
    Descending = 1
}
/**
 * Defines a standard delegate user.
 */
 enum StandardUser {
    /**
     * The Default delegate user, used to define default delegation permissions.
     */
    Default = 0,
    /**
     * The Anonymous delegate user, used to define delegate permissions for unauthenticated users.
     */
    Anonymous = 1
}
/**
 * Defines the quality of an availability suggestion.
 */
 enum SuggestionQuality {
    /**
     * The suggestion is excellent.
     */
    Excellent = 0,
    /**
     * The suggestion is good.
     */
    Good = 1,
    /**
     * The suggestion is fair.
     */
    Fair = 2,
    /**
     * The suggestion is poor.
     */
    Poor = 3
}
/**
 * Determines items to be included in a SyncFolderItems response.
 */
 enum SyncFolderItemsScope {
    /**
     * Include only normal items in the response.
     */
    NormalItems = 0,
    /**
     * Include normal and associated items in the response.
     */
    NormalAndAssociatedItems = 1
}
/**
 * This maps to the bogus TaskDelegationState in the EWS schema.
 * The schema enum has 6 values, but EWS should never return anything but values between 0 and 3, so we should be safe without mappings for EWS's Declined and Max values
 */
 enum TaskDelegationState {
    /**
     * The task is not delegated
     */
    NoDelegation = 0,
    /**
     * The task's delegation state is unknown.
     */
    Unknown = 1,
    /**
     * The task was delegated and the delegation was accepted.
     */
    Accepted = 2,
    /**
     * The task was delegated but the delegation was declined.
     */
    Declined = 3
}
/**
 * Defines the modes of a Task.
 */
 enum TaskMode {
    /**
     * The task is normal
     */
    Normal = 0,
    /**
     * The task is a task assignment request
     */
    Request = 1,
    /**
     * The task assignment request was accepted
     */
    RequestAccepted = 2,
    /**
     * The task assignment request was declined
     */
    RequestDeclined = 3,
    /**
     * The task has been updated
     */
    Update = 4,
    /**
     * The task is self delegated
     */
    SelfDelegated = 5
}
/**
 * Defines the execution status of a task.
 */
 enum TaskStatus {
    /**
     * The execution of the task is not started.
     */
    NotStarted = 0,
    /**
     * The execution of the task is in progress.
     */
    InProgress = 1,
    /**
     * The execution of the task is completed.
     */
    Completed = 2,
    /**
     * The execution of the task is waiting on others.
     */
    WaitingOnOthers = 3,
    /**
     * The execution of the task is deferred.
     */
    Deferred = 4
}
/**
 * TeamMailbox lifecycle state
 */
 enum TeamMailboxLifecycleState {
    /**
     * Active
     */
    Active = 0,
    /**
     * Closed
     */
    Closed = 1,
    /**
     * Unlinked
     */
    Unlinked = 2,
    /**
     * PendingDelete
     */
    PendingDelete = 3
}
 module TeamMailboxLifecycleState {
    /**EwsEnumAttribute */
    function FromEwsEnumString(value: string): TeamMailboxLifecycleState;
    /**EwsEnumAttribute */
    function ToEwsEnumString(value: TeamMailboxLifecycleState): string;
}
/**
 * Defines flags to control tracing details
 *
 * [Flags]
 */
 enum TraceFlags {
    /**
     * No tracing.
     */
    None = 0,
    /**
     * Trace EWS request messages.
     */
    EwsRequest = 1,
    /**
     * Trace EWS response messages.
     */
    EwsResponse = 2,
    /**
     * Trace EWS response HTTP headers.
     */
    EwsResponseHttpHeaders = 4,
    /**
     * Trace Autodiscover request messages.
     */
    AutodiscoverRequest = 8,
    /**
     * Trace Autodiscover response messages.
     */
    AutodiscoverResponse = 16,
    /**
     * Trace Autodiscover response HTTP headers.
     */
    AutodiscoverResponseHttpHeaders = 32,
    /**
     * Trace Autodiscover configuration logic.
     */
    AutodiscoverConfiguration = 64,
    /**
     * Trace messages used in debugging the Exchange Web Services Managed API
     */
    DebugMessage = 128,
    /**
     * Trace EWS request HTTP headers.
     */
    EwsRequestHttpHeaders = 256,
    /**
     * Trace Autodiscover request HTTP headers.
     */
    AutodiscoverRequestHttpHeaders = 512,
    /**
     * Trace EWS timezone related logic.
     */
    EwsTimeZones = 1024,
    /**
     * All trace types enabled.
     */
    All = 9223372036854776000
}
/**
 * Identifies the user configuration dictionary key and value types.
 */
 enum UserConfigurationDictionaryObjectType {
    /**
     * DateTime type.
     */
    DateTime = 0,
    /**
     * Boolean type.
     */
    Boolean = 1,
    /**
     * Byte type.
     */
    Byte = 2,
    /**
     * String type.
     */
    String = 3,
    /**
     * 32-bit integer type.
     */
    Integer32 = 4,
    /**
     * 32-bit unsigned integer type.
     */
    UnsignedInteger32 = 5,
    /**
     * 64-bit integer type.
     */
    Integer64 = 6,
    /**
     * 64-bit unsigned integer type.
     */
    UnsignedInteger64 = 7,
    /**
     * String array type.
     */
    StringArray = 8,
    /**
     * Byte array type
     */
    ByteArray = 9
}
/**
 * Identifies the user configuration properties to retrieve.
 *
 * [Flags]
 */
 enum UserConfigurationProperties {
    /**
     * Retrieve the Id property.
     */
    Id = 1,
    /**
     * Retrieve the Dictionary property.
     */
    Dictionary = 2,
    /**
     * Retrieve the XmlData property.
     */
    XmlData = 4,
    /**
     * Retrieve the BinaryData property.
     */
    BinaryData = 8,
    /**
     * Retrieve all properties.
     */
    All = 15
}
/**
 * User settings that can be requested using GetUserSettings.
 *
 * /remarks/  Add new values to the end and keep in sync with Microsoft.Exchange.Autodiscover.ConfigurationSettings.UserConfigurationSettingName.
 */
 enum UserSettingName {
    /**
     * The display name of the user.
     */
    UserDisplayName = 0,
    /**
     * The legacy distinguished name of the user.
     */
    UserDN = 1,
    /**
     * The deployment Id of the user.
     */
    UserDeploymentId = 2,
    /**
     * The fully qualified domain name of the mailbox server.
     */
    InternalMailboxServer = 3,
    /**
     * The fully qualified domain name of the RPC client server.
     */
    InternalRpcClientServer = 4,
    /**
     * The legacy distinguished name of the mailbox server.
     */
    InternalMailboxServerDN = 5,
    /**
     * The internal URL of the Exchange Control Panel.
     */
    InternalEcpUrl = 6,
    /**
     * The internal URL of the Exchange Control Panel for VoiceMail Customization.
     */
    InternalEcpVoicemailUrl = 7,
    /**
     * The internal URL of the Exchange Control Panel for Email Subscriptions.
     */
    InternalEcpEmailSubscriptionsUrl = 8,
    /**
     * The internal URL of the Exchange Control Panel for Text Messaging.
     */
    InternalEcpTextMessagingUrl = 9,
    /**
     * The internal URL of the Exchange Control Panel for Delivery Reports.
     */
    InternalEcpDeliveryReportUrl = 10,
    /**
     * The internal URL of the Exchange Control Panel for RetentionPolicy Tags.
     */
    InternalEcpRetentionPolicyTagsUrl = 11,
    /**
     * The internal URL of the Exchange Control Panel for Publishing.
     */
    InternalEcpPublishingUrl = 12,
    /**
     * The internal URL of the Exchange Control Panel for photos.
     */
    InternalEcpPhotoUrl = 13,
    /**
     * The internal URL of the Exchange Control Panel for People Connect subscriptions.
     */
    InternalEcpConnectUrl = 14,
    /**
     * The internal URL of the Exchange Control Panel for Team Mailbox.
     */
    InternalEcpTeamMailboxUrl = 15,
    /**
     * The internal URL of the Exchange Control Panel for creating Team Mailbox.
     */
    InternalEcpTeamMailboxCreatingUrl = 16,
    /**
     * The internal URL of the Exchange Control Panel for editing Team Mailbox.
     */
    InternalEcpTeamMailboxEditingUrl = 17,
    /**
     * The internal URL of the Exchange Control Panel for hiding Team Mailbox.
     */
    InternalEcpTeamMailboxHidingUrl = 18,
    /**
     * The internal URL of the Exchange Control Panel for the extension installation.
     */
    InternalEcpExtensionInstallationUrl = 19,
    /**
     * The internal URL of the Exchange Web Services.
     */
    InternalEwsUrl = 20,
    /**
     * The internal URL of the Exchange Management Web Services.
     */
    InternalEmwsUrl = 21,
    /**
     * The internal URL of the Offline Address Book.
     */
    InternalOABUrl = 22,
    /**
     * The internal URL of the Photos service.
     */
    InternalPhotosUrl = 23,
    /**
     * The internal URL of the Unified Messaging services.
     */
    InternalUMUrl = 24,
    /**
     * The internal URLs of the Exchange web client.
     */
    InternalWebClientUrls = 25,
    /**
     * The distinguished name of the mailbox database of the user's mailbox.
     */
    MailboxDN = 26,
    /**
     * The name of the Public Folders server.
     */
    PublicFolderServer = 27,
    /**
     * The name of the Active Directory server.
     */
    ActiveDirectoryServer = 28,
    /**
     * The name of the RPC over HTTP server.
     */
    ExternalMailboxServer = 29,
    /**
     * Indicates whether the RPC over HTTP server requires SSL.
     */
    ExternalMailboxServerRequiresSSL = 30,
    /**
     * The authentication methods supported by the RPC over HTTP server.
     */
    ExternalMailboxServerAuthenticationMethods = 31,
    /**
     * The URL fragment of the Exchange Control Panel for VoiceMail Customization.
     */
    EcpVoicemailUrlFragment = 32,
    /**
     * The URL fragment of the Exchange Control Panel for Email Subscriptions.
     */
    EcpEmailSubscriptionsUrlFragment = 33,
    /**
     * The URL fragment of the Exchange Control Panel for Text Messaging.
     */
    EcpTextMessagingUrlFragment = 34,
    /**
     * The URL fragment of the Exchange Control Panel for Delivery Reports.
     */
    EcpDeliveryReportUrlFragment = 35,
    /**
     * The URL fragment of the Exchange Control Panel for RetentionPolicy Tags.
     */
    EcpRetentionPolicyTagsUrlFragment = 36,
    /**
     * The URL fragment of the Exchange Control Panel for Publishing.
     */
    EcpPublishingUrlFragment = 37,
    /**
     * The URL fragment of the Exchange Control Panel for photos.
     */
    EcpPhotoUrlFragment = 38,
    /**
     * The URL fragment of the Exchange Control Panel for People Connect.
     */
    EcpConnectUrlFragment = 39,
    /**
     * The URL fragment of the Exchange Control Panel for Team Mailbox.
     */
    EcpTeamMailboxUrlFragment = 40,
    /**
     * The URL fragment of the Exchange Control Panel for creating Team Mailbox.
     */
    EcpTeamMailboxCreatingUrlFragment = 41,
    /**
     * The URL fragment of the Exchange Control Panel for editing Team Mailbox.
     */
    EcpTeamMailboxEditingUrlFragment = 42,
    /**
     * The URL fragment of the Exchange Control Panel for installing extension.
     */
    EcpExtensionInstallationUrlFragment = 43,
    /**
     * The external URL of the Exchange Control Panel.
     */
    ExternalEcpUrl = 44,
    /**
     * The external URL of the Exchange Control Panel for VoiceMail Customization.
     */
    ExternalEcpVoicemailUrl = 45,
    /**
     * The external URL of the Exchange Control Panel for Email Subscriptions.
     */
    ExternalEcpEmailSubscriptionsUrl = 46,
    /**
     * The external URL of the Exchange Control Panel for Text Messaging.
     */
    ExternalEcpTextMessagingUrl = 47,
    /**
     * The external URL of the Exchange Control Panel for Delivery Reports.
     */
    ExternalEcpDeliveryReportUrl = 48,
    /**
     * The external URL of the Exchange Control Panel for RetentionPolicy Tags.
     */
    ExternalEcpRetentionPolicyTagsUrl = 49,
    /**
     * The external URL of the Exchange Control Panel for Publishing.
     */
    ExternalEcpPublishingUrl = 50,
    /**
     * The external URL of the Exchange Control Panel for photos.
     */
    ExternalEcpPhotoUrl = 51,
    /**
     * The external URL of the Exchange Control Panel for People Connect subscriptions.
     */
    ExternalEcpConnectUrl = 52,
    /**
     * The external URL of the Exchange Control Panel for Team Mailbox.
     */
    ExternalEcpTeamMailboxUrl = 53,
    /**
     * The external URL of the Exchange Control Panel for creating Team Mailbox.
     */
    ExternalEcpTeamMailboxCreatingUrl = 54,
    /**
     * The external URL of the Exchange Control Panel for editing Team Mailbox.
     */
    ExternalEcpTeamMailboxEditingUrl = 55,
    /**
     * The external URL of the Exchange Control Panel for hiding Team Mailbox.
     */
    ExternalEcpTeamMailboxHidingUrl = 56,
    /**
     * The external URL of the Exchange Control Panel for the extension installation.
     */
    ExternalEcpExtensionInstallationUrl = 57,
    /**
     * The external URL of the Exchange Web Services.
     */
    ExternalEwsUrl = 58,
    /**
     * The external URL of the Exchange Management Web Services.
     */
    ExternalEmwsUrl = 59,
    /**
     * The external URL of the Offline Address Book.
     */
    ExternalOABUrl = 60,
    /**
     * The external URL of the Photos service.
     */
    ExternalPhotosUrl = 61,
    /**
     * The external URL of the Unified Messaging services.
     */
    ExternalUMUrl = 62,
    /**
     * The external URLs of the Exchange web client.
     */
    ExternalWebClientUrls = 63,
    /**
     * Indicates that cross-organization sharing is enabled.
     */
    CrossOrganizationSharingEnabled = 64,
    /**
     * Collection of alternate mailboxes.
     */
    AlternateMailboxes = 65,
    /**
     * The version of the Client Access Server serving the request (e.g. 14.XX.YYY.ZZZ)
     */
    CasVersion = 66,
    /**
     * Comma-separated list of schema versions supported by Exchange Web Services. The schema version values  /// will be the same as the values of the ExchangeServerVersion enumeration.
     */
    EwsSupportedSchemas = 67,
    /**
     * The internal connection settings list for pop protocol
     */
    InternalPop3Connections = 68,
    /**
     * The external connection settings list for pop protocol
     */
    ExternalPop3Connections = 69,
    /**
     * The internal connection settings list for imap4 protocol
     */
    InternalImap4Connections = 70,
    /**
     * The external connection settings list for imap4 protocol
     */
    ExternalImap4Connections = 71,
    /**
     * The internal connection settings list for smtp protocol
     */
    InternalSmtpConnections = 72,
    /**
     * The external connection settings list for smtp protocol
     */
    ExternalSmtpConnections = 73,
    /**
     * If set to "Off" then clients should not connect via this protocol.  /// The protocol contents are for informational purposes only.
     */
    InternalServerExclusiveConnect = 74,
    /**
     * The version of the Exchange Web Services server ExternalEwsUrl is pointing to.
     */
    ExternalEwsVersion = 75,
    /**
     * Mobile Mailbox policy settings.
     */
    MobileMailboxPolicy = 76,
    /**
     * Document sharing locations and their settings.
     */
    DocumentSharingLocations = 77,
    /**
     * Whether the user account is an MSOnline account.
     */
    UserMSOnline = 78,
    /**
     * The authentication methods supported by the RPC client server.
     */
    InternalMailboxServerAuthenticationMethods = 79,
    /**
     * Version of the server hosting the user's mailbox.
     */
    MailboxVersion = 80,
    /**
     * Sharepoint MySite Host URL.
     */
    SPMySiteHostURL = 81,
    /**
     * Site mailbox creation URL in SharePoint.
     */
    SiteMailboxCreationURL = 82,
    /**
     * The FQDN of the server used for internal RPC/HTTP connectivity.
     */
    InternalRpcHttpServer = 83,
    /**
     * Indicates whether SSL is required for internal RPC/HTTP connectivity.
     */
    InternalRpcHttpConnectivityRequiresSsl = 84,
    /**
     * The authentication method used for internal RPC/HTTP connectivity.
     */
    InternalRpcHttpAuthenticationMethod = 85,
    /**
     * If set to "On" then clients should only connect via this protocol.
     */
    ExternalServerExclusiveConnect = 86,
    /**
     * If set, then clients can call the server via XTC
     */
    ExchangeRpcUrl = 87,
    /**
     * If set to false then clients should not show the GAL by default, but show the contact list.
     */
    ShowGalAsDefaultView = 88,
    /**
     * AutoDiscover Primary SMTP Address for the user.
     */
    AutoDiscoverSMTPAddress = 89,
    /**
     * The 'interop' external URL of the Exchange Web Services.  /// By interop it means a URL to E14 (or later) server that can serve mailboxes  /// that are hosted in downlevel server (E2K3 and earlier).
     */
    InteropExternalEwsUrl = 90,
    /**
     * Version of server InteropExternalEwsUrl is pointing to.
     */
    InteropExternalEwsVersion = 91,
    /**
     * Public Folder (Hierarchy) information
     */
    PublicFolderInformation = 92,
    /**
     * The version appropriate URL of the AutoDiscover service that should answer this query.
     */
    RedirectUrl = 93,
    /**
     * The URL of the Exchange Web Services for Office365 partners.
     */
    EwsPartnerUrl = 94,
    /**
     * SSL certificate name
     */
    CertPrincipalName = 95,
    /**
     * The grouping hint for certain clients.
     */
    GroupingInformation = 96,
    /**
     * MapiHttpEnabled ///todo: not available any more in official repo
     */
    MapiHttpEnabled = 97,
    /**
     * Internal OutlookService URL
     */
    InternalOutlookServiceUrl = 98,
    /**
     * External OutlookService URL
     */
    ExternalOutlookServiceUrl = 99
}
/**
 * Defines the view filter for queries.
 */
 enum ViewFilter {
    /**
     * Show all item (no filter)
     */
    All = 0,
    /**
     * Item has flag
     */
    Flagged = 1,
    /**
     * Item has attachment
     */
    HasAttachment = 2,
    /**
     * Item is to or cc me
     */
    ToOrCcMe = 3,
    /**
     * Item is unread
     */
    Unread = 4,
    /**
     * Active task items
     */
    TaskActive = 5,
    /**
     * Overdue task items
     */
    TaskOverdue = 6,
    /**
     * Completed task items
     */
    TaskCompleted = 7,
    /**
     * Suggestions (aka Predicted Actions) from the Inference engine
     */
    Suggestions = 8,
    /**
     * Respond suggestions
     */
    SuggestionsRespond = 9,
    /**
     * Delete suggestions
     */
    SuggestionsDelete = 10
}
 module ViewFilter {
    /**RequiredServerVersionAttribute */
    function RequiredServerVersion(value: ViewFilter): ExchangeVersion;
}
/**
 * The values in this enumeration must match the values of the DistinguishedFolderIdNameType type in the schema.
 */
 enum WellKnownFolderName {
    /**
     * The Calendar folder.
     */
    Calendar = 0,
    /**
     * The Contacts folder.
     */
    Contacts = 1,
    /**
     * The Deleted Items folder
     */
    DeletedItems = 2,
    /**
     * The Drafts folder.
     */
    Drafts = 3,
    /**
     * The Inbox folder.
     */
    Inbox = 4,
    /**
     * The Journal folder.
     */
    Journal = 5,
    /**
     * The Notes folder.
     */
    Notes = 6,
    /**
     * The Outbox folder.
     */
    Outbox = 7,
    /**
     * The Sent Items folder.
     */
    SentItems = 8,
    /**
     * The Tasks folder.
     */
    Tasks = 9,
    /**
     * The message folder root.
     */
    MsgFolderRoot = 10,
    /**
     * The root of the Public Folders hierarchy.
     */
    PublicFoldersRoot = 11,
    /**
     * The root of the mailbox.
     */
    Root = 12,
    /**
     * The Junk E-mail folder.
     */
    JunkEmail = 13,
    /**
     * The Search Folders folder, also known as the Finder folder.
     */
    SearchFolders = 14,
    /**
     * The Voicemail folder.
     */
    VoiceMail = 15,
    /**
     * The Dumpster 2.0 root folder.
     */
    RecoverableItemsRoot = 16,
    /**
     * The Dumpster 2.0 soft deletions folder.
     */
    RecoverableItemsDeletions = 17,
    /**
     * The Dumpster 2.0 versions folder.
     */
    RecoverableItemsVersions = 18,
    /**
     * The Dumpster 2.0 hard deletions folder.
     */
    RecoverableItemsPurges = 19,
    /**
     * The Dumpster 2.0 discovery hold folder
     */
    RecoverableItemsDiscoveryHolds = 20,
    /**
     * The root of the archive mailbox.
     */
    ArchiveRoot = 21,
    /**
     * The root of the archive mailbox.
     */
    ArchiveInbox = 22,
    /**
     * The message folder root in the archive mailbox.
     */
    ArchiveMsgFolderRoot = 23,
    /**
     * The Deleted Items folder in the archive mailbox
     */
    ArchiveDeletedItems = 24,
    /**
     * The Dumpster 2.0 root folder in the archive mailbox.
     */
    ArchiveRecoverableItemsRoot = 25,
    /**
     * The Dumpster 2.0 soft deletions folder in the archive mailbox.
     */
    ArchiveRecoverableItemsDeletions = 26,
    /**
     * The Dumpster 2.0 versions folder in the archive mailbox.
     */
    ArchiveRecoverableItemsVersions = 27,
    /**
     * The Dumpster 2.0 hard deletions folder in the archive mailbox.
     */
    ArchiveRecoverableItemsPurges = 28,
    /**
     * The Dumpster 2.0 discovery hold folder in the archive mailbox.
     */
    ArchiveRecoverableItemsDiscoveryHolds = 29,
    /**
     * The Sync Issues folder.
     */
    SyncIssues = 30,
    /**
     * The Conflicts folder
     */
    Conflicts = 31,
    /**
     * The Local failures folder
     */
    LocalFailures = 32,
    /**
     * The Server failures folder
     */
    ServerFailures = 33,
    /**
     * The Recipient Cache folder
     */
    RecipientCache = 34,
    /**
     * The Quick Contacts folder
     */
    QuickContacts = 35,
    /**
     * Conversation history folder
     */
    ConversationHistory = 36,
    /**
     * AdminAuditLogs folder
     */
    AdminAuditLogs = 37,
    /**
     * ToDo search folder
     */
    ToDoSearch = 38,
    /**
     * MyContacts folder
     */
    MyContacts = 39,
    /**
     * Directory (GAL)
     * It is not a mailbox folder. It only indicates any GAL operation.
     */
    Directory = 40,
    /**
     * IMContactList folder
     */
    IMContactList = 41,
    /**
     * PeopleConnect folder
     */
    PeopleConnect = 42,
    /**
     * Favorites folder
     */
    Favorites = 43
}
 module WellKnownFolderName {
    /**RequiredServerVersionAttribute */
    function RequiredServerVersion(value: WellKnownFolderName): ExchangeVersion;
}/**
 * Represents an error that occurs when the account that is being accessed is locked and requires user interaction to be unlocked.
 */
 class AccountIsLockedException extends ServiceRemoteException {
    /**
     * Gets the URL of a web page where the user can navigate to unlock his or her account.
     *
     * internal set
     */
    AccountUnlockUrl: Uri;
    /**
     * Initializes a new instance of the **AccountIsLockedException** class.
     *
     * @param   {string}        message            Error message text.
     * @param   {Uri}           accountUnlockUrl   URL for client to visit to unlock account.
     * @param   {Exception}     innerException     Inner exception.
     */
    constructor(message: string, accountUnlockUrl: Uri, innerException: Exception);
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
    readonly ActualValue: any;
    constructor();
    constructor(paramName: string);
    constructor(paramName: string, message: string);
    constructor(message: string, innerException: Exception);
    constructor(paramName: string, actualValue: any, message: string);
}
 class AutodiscoverLocalException extends ServiceLocalException {
    /**
     * Initializes a new instance of **AutodiscoverLocalException**.
     */
    constructor();
    /**
     * Initializes a new instance of **AutodiscoverLocalException**.
     *
     * @param   {string}   message            The message that describes the error.
     */
    constructor(message: string);
    /**
     * Initializes a new instance of **AutodiscoverLocalException**.
     *
     * @param   {string}   message            The message that describes the error.
     * @param   {Exception}   innerException     The exception that is the cause of the current exception.
     */
    constructor(message: string, innerException: Exception);
}
/**
 * Represents an exception that is thrown when the Autodiscover service returns an error.
 */
 class AutodiscoverRemoteException extends ServiceRemoteException {
    /**
     * Gets the error.
     *  @value the Error
     */
    readonly Error: AutodiscoverError;
    /**
     * Initializes a new instance of the **AutodiscoverRemoteException** class.
     *
     * @param   {AutodiscoverError} error   The error.
     */
    constructor(error: AutodiscoverError);
    /**
     * Initializes a new instance of the **AutodiscoverRemoteException** class.
     *
     * @param   {string}            message     The message.
     * @param   {AutodiscoverError} error       The error.
     */
    constructor(message: string, error: AutodiscoverError);
    /**
     * Initializes a new instance of the **AutodiscoverRemoteException** class.
     *
     * @param   {string}            message          The message.
     * @param   {AutodiscoverError} error            The error.
     * @param   {Exception}         innerException   The inner exception.
     */
    constructor(message: string, error: AutodiscoverError, innerException: Exception);
}
/**
 * Represents an exception from an autodiscover error response.
 *
 * @extends {ServiceRemoteException}
 */
 class AutodiscoverResponseException extends ServiceRemoteException {
    /**
     * Gets the ErrorCode for the exception.
     */
    readonly ErrorCode: AutodiscoverErrorCode;
}
/**
 * Represents a remote service exception that can have multiple service responses.
 *
 * @type {TResponse}       The type of the response.
 */
 class BatchServiceResponseException<TResponse extends ServiceResponse> extends ServiceRemoteException {
    /**
     * Gets a list of responses returned by the web method.
     */
    readonly ServiceResponses: ServiceResponseCollection<TResponse>;
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
    stack: string;
    InnerException: Exception;
    readonly Message: string;
    constructor();
    constructor(message: string);
    constructor(message: string, innerException: Exception);
    /**
     * @override user JSON.stringify for now, todo: impelemtn real Exception tostring
     */
    toString(): string;
    ToString(): string;
}
 class InvalidOperationException extends Exception {
    ParamName: string;
    constructor();
    constructor(message: string);
    constructor(message: string, innerException: Exception);
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
/**
 * Represents an error that occurs when a service operation fails locally (e.g. validation error).
 */
 class ServiceLocalException extends Exception {
    /**
     * Initializes a new instance of **ServiceVersionException**.
     */
    constructor();
    /**
     * Initializes a new instance of **ServiceVersionException**.
     *
     * @param   {string}   message            The message that describes the error.
     */
    constructor(message: string);
    /**
     * Initializes a new instance of **ServiceVersionException**.
     *
     * @param   {string}   message            The message that describes the error.
     * @param   {Exception}   innerException     The exception that is the cause of the current exception.
     */
    constructor(message: string, innerException: Exception);
}
 class ServiceObjectPropertyException extends PropertyException {
    PropertyDefinition: PropertyDefinitionBase;
    constructor(message: string, propertyDefinition: PropertyDefinitionBase, innerException?: Exception);
}
/**
 * Represents an error that occurs when a service operation fails remotely.
 */
 class ServiceRemoteException extends Exception {
    /**
     * ServiceRemoteException Constructor.
     */
    constructor();
    /**
     * ServiceRemoteException Constructor.
     *
     * @param   {string}    message          Error message text.
     */
    constructor(message: string);
    /**
     * ServiceRemoteException Constructor.
     *
     * @param   {string}        message          Error message text.
     * @param   {Exception}     innerException   Inner exception.
     */
    constructor(message: string, innerException: Exception);
}
 class ServiceRequestException extends ServiceRemoteException {
}
 class ServiceRequestUnauthorizedException extends ServiceRequestException {
}
/**
 * Represents a remote service exception that has a single response.
 */
 class ServiceResponseException extends ServiceRemoteException {
    /**
     * Gets the ServiceResponse for the exception.
     */
    readonly Response: ServiceResponse;
    /**
     * Gets the service error code.
     */
    readonly ErrorCode: ServiceError;
    /**
     * Gets a message that describes the current exception.
     *
     * @returns The error message that explains the reason for the exception.
     */
    readonly Message: string;
}
/**
 * Represents an error that occurs when a validation check fails.
 *
 * @sealed
 */
 class ServiceValidationException extends ServiceLocalException {
    /**
     * Initializes a new instance of **ServiceValidationException**.
     */
    constructor();
    /**
     * Initializes a new instance of **ServiceValidationException**.
     *
     * @param   {string}   message            The message that describes the error.
     */
    constructor(message: string);
    /**
     * Initializes a new instance of **ServiceValidationException**.
     *
     * @param   {string}   message            The message that describes the error.
     * @param   {Exception}   innerException     The exception that is the cause of the current exception.
     */
    constructor(message: string, innerException: Exception);
}
/**
 * Represents an error that occurs when a request cannot be handled due to a service version mismatch.
 *
 * @sealed
 */
 class ServiceVersionException extends ServiceLocalException {
    /**
     * Initializes a new instance of **ServiceVersionException**.
     */
    constructor();
    /**
     * Initializes a new instance of **ServiceVersionException**.
     *
     * @param   {string}   message            The message that describes the error.
     */
    constructor(message: string);
    /**
     * Initializes a new instance of **ServiceVersionException**.
     *
     * @param   {string}   message            The message that describes the error.
     * @param   {Exception}   innerException     The exception that is the cause of the current exception.
     */
    constructor(message: string, innerException: Exception);
}
 class ServiceXmlDeserializationException extends ServiceLocalException {
}
 class ServiceXmlSerializationException extends ServiceLocalException {
    /**
     * Initializes a new instance of **ServiceXmlSerializationException**.
     */
    constructor();
    /**
     * Initializes a new instance of **ServiceXmlSerializationException**.
     *
     * @param   {string}   message            The message that describes the error.
     */
    constructor(message: string);
    /**
     * Initializes a new instance of **ServiceXmlSerializationException**.
     *
     * @param   {string}   message            The message that describes the error.
     * @param   {Exception}   innerException     The exception that is the cause of the current exception.
     */
    constructor(message: string, innerException: Exception);
}
 class TimeZoneConversionException extends ServiceLocalException {
}
/**
 * Represents an exception thrown when an error occurs as a result of calling the UpdateInboxRules operation.
 *
 * @sealed
 */
 class UpdateInboxRulesException extends ServiceRemoteException {
    /**
     * Gets the ServiceResponse for the exception.
     */
    readonly ServiceResponse: ServiceResponse;
    /**
     * Gets the rule operation error collection.
     */
    readonly Errors: RuleOperationErrorCollection;
    /**
     * Gets the rule operation error code.
     */
    readonly ErrorCode: ServiceError;
    /**
     * Gets the rule operation error message.
     */
    readonly ErrorMessage: string;
}
/**
 * BootStrap code. to initializes some class to avoid circular reference.
 */
/** Promise type setup *//** XHR setup */
/** TimeZoneTransitions *//**#endregion BootStrap code */ module StringHelper {
    function IsNullOrEmpty(str: string): boolean;
    function Format(source: string, ...args: any[]): string;
    var Empty: string;
    function Repeat(str?: string, times?: number): string;
    function Tabs(times?: number): string;
    function Compare(lhs: string, rhs: string, ignoreCase?: boolean): number;
}
 module EnumHelper {
    function HasFlag(flags: number, checkFlag: number): boolean;
    /**
     * Writes "," separated values from Enumertion anf enum Flags
     *
     * @export
     * @param {*} enumObj The Enumeration Object itself, for example 'ExchangeVersion' as the parameter Value.
     * @param {number} checkFlag Flag value(s) to convert to string
     * @param {boolean} [includeZero=false] include the default 0 value in the string, usually false
     * @returns {string} returns the coma "," separated string representation of Flags
     */
    function ToString(enumObj: any, checkFlag: number, includeZero?: boolean): string;
}
/**
 * explicitly checks if the obj is null or undefined
 * @param obj input to be checked
 */
 function isNullOrUndefined(obj: any): boolean;
/**
 * explicitly checks if the obj has value and it is NOT null or undefined
 * @param obj input to be checked
 */
 function hasValue(obj: any): boolean;
 module ArrayHelper {
    function AddRange<T>(array: Array<T>, items: Array<T>, uniqueOnly?: boolean): void;
    function RemoveEntry<T>(array: Array<T>, entry: T, comparer?: (T: any) => boolean): boolean;
    function Find<T>(array: Array<T>, comparer: (item: T) => boolean): T;
    function IndexOf<T>(array: Array<T>, comparer: (item: T) => boolean): number;
    function OfType<T, U>(array: Array<T>, comparer: (item: T) => boolean): U[];
    /**dirty calculation of max dimension, will return more than one if array contains any array element in first testElementCount items */
    function Rank(array: any[], testElementCount?: number): number;
    function isArray<T>(obj: any): obj is T[];
}
 class TypeSystem {
    static GetProperties(obj: any): string[];
    static GetMethods(obj: any): string[];
    static GetObjectStaticPropertiesByClassName(className: string): string[];
    static GetObjectMethodsByClassName(className: string, instanceMethod?: boolean): string[];
    static GetObjectByClassName(className: string): any;
    static GetJsObjectTypeName(obj: any): string;
    static GetJsObjectOnlyChildName(obj: any): string;
    static GetJsObjectTypeName_old(obj: any): string;
    static IsGenericType(value: any): boolean;
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
    static ParseStrict: boolean;
    static Empty: Guid;
    constructor();
    constructor(str: string);
    ToString(): string;
    toString(): string;
    static NewGuid(): Guid;
    static Parse(str: string): Guid;
    static TryParse(str: any, _parsed_output?: {
        guid: Guid;
    }): boolean;
}
export interface IXHROptions {
    type?: string;
    url: string;
    user?: string;
    password?: string;
    headers?: any;
    data?: any;
    responseType?: string;
    allowRedirect?: boolean;
    customRequestInitializer?: (request: XMLHttpRequest) => void;
}
export interface IXHRProgress {
    type: 'data' | 'header' | 'end' | 'error';
    data?: string;
    chunk?: string;
    progress?: number;
    done?: boolean;
    headers?: any;
    originalHeaders?: any;
    error?: any;
}
export interface IXHRApi {
    xhr(xhroptions: IXHROptions, progressDelegate?: (progressData: IXHRProgress) => void): Promise<XMLHttpRequest>;
    xhrStream(xhroptions: IXHROptions, progressDelegate: (progressData: IXHRProgress) => void): Promise<XMLHttpRequest>;
    disconnect(): void;
    apiName?: string;
}
export interface ICalendarActionProvider {
    Accept(sendResponse: boolean): Promise<CalendarActionResults>;
    AcceptTentatively(sendResponse: boolean): Promise<CalendarActionResults>;
    CreateAcceptMessage(tentative: boolean): AcceptMeetingInvitationMessage;
    CreateDeclineMessage(): DeclineMeetingInvitationMessage;
    Decline(sendResponse: boolean): Promise<CalendarActionResults>;
}
export interface ICustomUpdateSerializer {
}
export interface IEnumerable<T> {
    GetEnumerator(): Array<T>;
}export interface IFileAttachmentContentHandler {
    GetOutputStream(attachmentId: string): any;
}
export interface IJsonCollectionDeserializer {
    CreateFromJsonCollection(jsonCollection: any[], service: ExchangeService): void;
    UpdateFromJsonCollection(jsonCollection: any[], service: ExchangeService): void;
}
export interface IJsonSerializable {
    ToJson(service: ExchangeService): any;
}
export interface IOutParam<T> {
    outValue: T;
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
/**
 * ITraceListener handles message tracing.
 */
export interface ITraceListener {
    /**
     * Handles a trace message
     *
     * @param   {string}   traceType      Type of trace message.
     * @param   {string}   traceMessage   The trace message.
     */
    Trace(traceType: string, traceMessage: string): void;
}
export interface HasEwsEnumAttribute {
    FromEwsEnumString(value: string): any;
    ToEwsEnumString(value: any): string;
}
export interface HasRequiredServerVersionAttribute {
    RequiredServerVersion(value: WellKnownFolderName): ExchangeVersion;
}
/**
 * Represents mailbox query object.
 *
 * @sealed
 */
 class DiscoverySearchConfiguration {
    /**
     * Search Id
     */
    SearchId: string;
    /**
     * Search query
     */
    SearchQuery: string;
    /**
     * Set of mailbox and scope pair
     */
    SearchableMailboxes: SearchableMailbox[];
    /**
     * In-Place hold identity
     */
    InPlaceHoldIdentity: string;
    /**
     * Managed by organization
     */
    ManagedByOrganization: string;
    /**
     * Language
     */
    Language: string;
}
/**
 * Class ExtendedAttribute
 *
 * @sealed
 */
 class ExtendedAttribute {
    /**
     * Gets or sets the name.
     *
     * @value The name.
     */
    Name: string;
    /**
     * Gets or sets the value.
     *
     * @value The value.
     */
    Value: string;
    /**
     * Initializes a new instance of the **ExtendedAttribute** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **ExtendedAttribute** class.
     *
     * @param   {string}   name    The name.
     * @param   {string}   value   The value.
     */
    constructor(name: string, value: string);
}
/**
 * Represents failed mailbox to be searched
 *
 * @sealed
 */
 class FailedSearchMailbox {
    Mailbox: string;
    ErrorCode: number;
    ErrorMessage: string;
    IsArchive: boolean;
    /**
     * Constructor
     *
     * @param   {string}    mailbox        Mailbox identifier
     * @param   {number}    errorCode      Error code
     * @param   {string}    errorMessage   Error message
     */
    constructor(mailbox: string, errorCode: number, errorMessage: string);
    /**
     * Constructor
     *
     * @param   {string}    mailbox        Mailbox identifier
     * @param   {number}    errorCode      Error code
     * @param   {string}    errorMessage   Error message
     * @param   {boolean}   isArchive      True if it is mailbox archive
     */
    constructor(mailbox: string, errorCode: number, errorMessage: string, isArchive: boolean);
}
/**
 * Represents the keyword statistics result.
 *
 * @sealed
 */
 class KeywordStatisticsSearchResult {
    /**
     * Keyword string
     */
    Keyword: string;
    /**
     * Number of item hits
     */
    ItemHits: number;
    /**
     * Total size
     * [CLSCompliant(false)]
     */
    Size: number;
}
/**
 * Represents mailbox hold result
 *
 * @sealed
 */
 class MailboxHoldResult {
    /**
     * Hold id
     */
    HoldId: string;
    /**
     * Query
     */
    Query: string;
    /**
     * Collection of mailbox status
     */
    Statuses: MailboxHoldStatus[];
}
/**
 * Represents mailbox hold status
 *
 * @sealed
 */
 class MailboxHoldStatus {
    /**
     * Mailbox
     */
    Mailbox: string;
    /**
     * Hold Status
     */
    Status: HoldStatus;
    /**
     * Additional Info
     */
    AdditionalInfo: string;
    /**
     * Constructor
     */
    constructor();
    /**
     * Constructor
     *
     * @param   {string}        mailbox          Mailbox
     * @param   {HoldStatus}    status           Hold status
     * @param   {string}        additionalInfo   Additional info
     */
    constructor(mailbox: string, status: HoldStatus, additionalInfo: string);
}
/**
 * Represents mailbox query object.
 *
 * @sealed
 */
 class MailboxQuery {
    /**
     * Search query
     */
    Query: string;
    /**
     * Set of mailbox and scope pair
     */
    MailboxSearchScopes: MailboxSearchScope[];
    /**
     * Constructor
     *
     * @param   {string}                query          Search query
     * @param   {MailboxSearchScope[]}  searchScopes   Set of mailbox and scope pair
     */
    constructor(query: string, searchScopes: MailboxSearchScope[]);
}
/**
 * Represents mailbox search scope object.
 */
 class MailboxSearchScope {
    /**
     * Mailbox
     */
    Mailbox: string;
    /**
     * Search scope
     */
    SearchScope: MailboxSearchLocation;
    /**
     * Gets the extended data.
     *
     * @value The extended data.
     */
    ExtendedAttributes: ExtendedAttribute[];
    /**
     * Constructor
     *
     * @param   {string}   mailbox       Mailbox
     * @param   {MailboxSearchLocation}   searchScope   Search scope
     */
    constructor(mailbox: string, searchScope: MailboxSearchLocation);
}
/**
 * Mailbox statistics item
 *
 * @sealed
 */
 class MailboxStatisticsItem {
    /**
     * Mailbox id
     */
    MailboxId: string;
    /**
     * Display name
     */
    DisplayName: string;
    /**
     * Item count
     */
    ItemCount: number;
    /**
     * Total size
     * [CLSCompliant(false)]
     */
    Size: number;
}
/**
 * Represents non indexable item.
 *
 * @sealed
 */
 class NonIndexableItem {
    /**
     * Item Identity
     */
    ItemId: ItemId;
    /**
     * Error code
     */
    ErrorCode: ItemIndexError;
    /**
     * Error description
     */
    ErrorDescription: string;
    /**
     * Is partially indexed
     */
    IsPartiallyIndexed: boolean;
    /**
     * Is permanent failure
     */
    IsPermanentFailure: boolean;
    /**
     * Attempt count
     */
    AttemptCount: number;
    /**
     * Last attempt time
     */
    LastAttemptTime: DateTime;
    /**
     * Additional info
     */
    AdditionalInfo: string;
    /**
     * Sort value
     */
    SortValue: string;
}
/**
 * Represents non indexable item details result.
 *
 * @sealed
 */
 class NonIndexableItemDetailsResult {
    /**
     * Collection of items
     */
    Items: NonIndexableItem[];
    /**
     * Failed mailboxes
     */
    FailedMailboxes: FailedSearchMailbox[];
}
/**
 * Represents non indexable item parameters base class
 */
 abstract class NonIndexableItemParameters {
    /**
     * List of mailboxes (in legacy DN format)
     */
    Mailboxes: string[];
    /**
     * Search archive only
     */
    SearchArchiveOnly: boolean;
}
/**
 * Represents get non indexable item statistics parameters.
 *
 * @sealed
 */
 class GetNonIndexableItemStatisticsParameters extends NonIndexableItemParameters {
}
/**
 * Represents get non indexable item details parameters.
 *
 * @sealed
 */
 class GetNonIndexableItemDetailsParameters extends NonIndexableItemParameters {
    /**
     * @Nullable Page size
     */
    PageSize: number;
    /**
     * Page item reference
     */
    PageItemReference: string;
    /**
     * @Nullable Search page direction
     */
    PageDirection: SearchPageDirection;
}
/**
 * Represents non indexable item statistic.
 *
 * @sealed
 */
 class NonIndexableItemStatistic {
    /**
     * Mailbox legacy DN
     */
    Mailbox: string;
    /**
     * Item count
     */
    ItemCount: number;
    /**
     * Error message
     */
    ErrorMessage: string;
}
/**
 * Represents mailbox object for preview item.
 *
 * @sealed
 */
 class PreviewItemMailbox {
    /**
     * Mailbox id
     */
    MailboxId: string;
    /**
     * Primary smtp address
     */
    PrimarySmtpAddress: string;
    /**
     * Constructor
     */
    constructor();
    /**
     * Constructor
     *
     * @param   {string}   mailboxId            Mailbox id
     * @param   {string}   primarySmtpAddress   Primary smtp address
     */
    constructor(mailboxId: string, primarySmtpAddress: string);
}
/**
 * Represents preview item response shape
 *
 * @sealed
 */
 class PreviewItemResponseShape {
    /**
     * Mailbox identifier
     */
    BaseShape: PreviewItemBaseShape;
    /**
     * Additional properties (must be in form of extended properties)
     */
    AdditionalProperties: ExtendedPropertyDefinition[];
    /**
     * Constructor
     */
    constructor();
    /**
     * Constructor
     *
     * @param   {PreviewItemBaseShape}          baseShape              Preview item base shape
     * @param   {ExtendedPropertyDefinition[]}  additionalProperties   Additional properties (must be in form of extended properties)
     */
    constructor(baseShape: PreviewItemBaseShape, additionalProperties: ExtendedPropertyDefinition[]);
}
/**
 * Represents searchable mailbox object
 *
 * @sealed
 */
 class SearchableMailbox {
    /**
     * Guid
     */
    Guid: Guid;
    /**
     * Smtp address
     */
    SmtpAddress: string;
    /**
     * If true, this is an external mailbox
     */
    IsExternalMailbox: boolean;
    /**
     * External email address for the mailbox
     */
    ExternalEmailAddress: string;
    /**
     * Display name
     */
    DisplayName: string;
    /**
     * Is a membership group
     */
    IsMembershipGroup: boolean;
    /**
     * Reference id
     */
    ReferenceId: string;
    /**
     * Constructor
     */
    constructor();
    /**
     * Constructor
     *
     * @param   {Guid}      guid                   Guid
     * @param   {string}    smtpAddress            Smtp address
     * @param   {boolean}   isExternalMailbox      If true, this is an external mailbox
     * @param   {string}    externalEmailAddress   External email address
     * @param   {string}    displayName            Display name
     * @param   {boolean}   isMembershipGroup      Is a membership group
     * @param   {string}    referenceId            Reference id
     */
    constructor(guid: Guid, smtpAddress: string, isExternalMailbox: boolean, externalEmailAddress: string, displayName: string, isMembershipGroup: boolean, referenceId: string);
}
/**
 * Represents search mailbox parameters.
 *
 * @sealed
 */
 class SearchMailboxesParameters {
    /**
     * Search queries
     */
    SearchQueries: MailboxQuery[];
    /**
     * Result type
     */
    ResultType: SearchResultType;
    /**
     * Sort by property
     */
    SortBy: string;
    /**
     * Sort direction
     */
    SortOrder: SortDirection;
    /**
     * Perform deduplication
     */
    PerformDeduplication: boolean;
    /**
     * Page size
     */
    PageSize: number;
    /**
     * Search page direction
     */
    PageDirection: SearchPageDirection;
    /**
     * Page item reference
     */
    PageItemReference: string;
    /**
     * Preview item response shape
     */
    PreviewItemResponseShape: PreviewItemResponseShape;
    /**
     * Query language
     */
    Language: string;
}
/**
 * Represents search mailbox result.
 *
 * @sealed
 */
 class SearchMailboxesResult {
    /**
     * Search queries
     */
    SearchQueries: MailboxQuery[];
    /**
     * Result type
     */
    ResultType: SearchResultType;
    /**
     * Item count
     */
    ItemCount: number;
    /**
     * Total size
     * [CLSCompliant(false)]
     */
    Size: number;
    /**
     * Page item count
     */
    PageItemCount: number;
    /**
     * Total page item size
     * [CLSCompliant(false)]
     */
    PageItemSize: number;
    /**
     * Keyword statistics search result
     */
    KeywordStats: KeywordStatisticsSearchResult[];
    /**
     * Search preview items
     */
    PreviewItems: SearchPreviewItem[];
    /**
     * Failed mailboxes
     */
    FailedMailboxes: FailedSearchMailbox[];
    /**
     * Refiners
     */
    Refiners: SearchRefinerItem[];
    /**
     * Mailbox statistics
     */
    MailboxStats: MailboxStatisticsItem[];
    /**
     * Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     * @return  {SearchMailboxesResult}     Search result object
     */
    static LoadFromXmlJsObject(jsObject: any, service: ExchangeService): SearchMailboxesResult;
}
/**
 * Represents search preview item.
 *
 * @sealed
 */
 class SearchPreviewItem {
    /**
     * Item id
     */
    Id: ItemId;
    /**
     * Mailbox
     */
    Mailbox: PreviewItemMailbox;
    /**
     * Parent item id
     */
    ParentId: ItemId;
    /**
     * Item Class
     */
    ItemClass: string;
    /**
     * Unique hash
     */
    UniqueHash: string;
    /**
     * Sort Value
     */
    SortValue: string;
    /**
     * OWA Link
     */
    OwaLink: string;
    /**
     * Sender
     */
    Sender: string;
    /**
     * To recipients
     */
    ToRecipients: string[];
    /**
     * Cc recipients
     */
    CcRecipients: string[];
    /**
     * Bcc recipients
     */
    BccRecipients: string[];
    /**
     * Created Time
     */
    CreatedTime: DateTime;
    /**
     * Received Time
     */
    ReceivedTime: DateTime;
    /**
     * Sent Time
     */
    SentTime: DateTime;
    /**
     * Subject
     */
    Subject: string;
    /**
     * Item size
     */
    Size: number;
    /**
     * Preview
     */
    Preview: string;
    /**
     * Importance
     */
    Importance: Importance;
    /**
     * Read
     */
    Read: boolean;
    /**
     * Has attachment
     */
    HasAttachment: boolean;
    /**
     * Extended properties
     */
    ExtendedProperties: ExtendedPropertyCollection;
}
/**
 * Search refiner item
 */
 class SearchRefinerItem {
    /**
     * Refiner name
     */
    Name: string;
    /**
     * Refiner value
     */
    Value: string;
    /**
     * Refiner count
     */
    Count: number;
    /**
     * Refiner token, essentially comprises of an operator (i.e. ':' or '>') plus the refiner value The caller such as Sharepoint can simply append this to refiner name for query refinement
     */
    Token: string;
}
/**
 * Represents set hold on mailboxes parameters.
 *
 * @sealed
 */
 class SetHoldOnMailboxesParameters {
    /**
     * Action type
     */
    ActionType: HoldAction;
    /**
     * Hold id
     */
    HoldId: string;
    /**
     * Query
     */
    Query: string;
    /**
     * Collection of mailboxes
     */
    Mailboxes: string[];
    /**
     * Query language
     */
    Language: string;
    /**
     * In-place hold identity
     */
    InPlaceHoldIdentity: string;
    /**
     * Item hold period
     * *The text value can be "Unlimited" or the string value of any Timespan value.*
     *
     * per github issue #120
     */
    ItemHoldPeriod: string;
    /**
     * Include Non Indexable Items
     *
     * per github issue #120
     */
    IncludeNonIndexableItems: boolean;
    /**
     * Perform deduplication
     *
     * per github issue #120
     */
    PerformDeduplication: boolean;
}
/**
 * Interface IDiscoveryVersionable.
 * This interface will be used to store versioning information on the request
 *
 */
export interface IDiscoveryVersionable {
    /**
     * Gets or sets the server version.
     *
     * @value The server version.
     */
    ServerVersion: number;
}
/**
 * Class Feature
 */
 class SchemaChange {
    /**
     * Gets the minimum server version.
     *
     * @value The minimum server version.
     */
    MinimumServerVersion: number;
    /**
     * Initializes a new instance of the **SchemaChange** class.
     *
     * @param   {number}   serverVersion   The server version.
     */
    constructor(serverVersion: number);
    /**
     * Initializes a new instance of the **SchemaChange** class.
     *
     * @param   {string}   serverBuild   The server build.
     */
    constructor(serverBuild: string);
    /**
     * Determines whether the specified versionable is compatible.
     *
     * @param   {IDiscoveryVersionable}   versionable   The versionable.
     * @return  {boolean}                 *true* if the specified versionable is compatible; otherwise, *false*.
     */
    IsCompatible(versionable: IDiscoveryVersionable): boolean;
}
/**
 * Class DiscoverySchemaChanges
 * This class is a catalog of schema changes in discovery with the minimum server version in which they were introduced When making a schema change
 * - First make the server side changes and check them in
 * - Create SchemaChange() entry here for the change and the version at which it was checked int
 * - In the request
 *  - Implement IDiscoveryVersionable
 *  - In the Validate method verify if any new schema parameters are compatible if not error out
 *  - In the WriteXml method downgrade the schema based on compatability checks
 * Eg, SearchMailboxesRequest.cs
 *
 * @static
 */
 class DiscoverySchemaChanges {
    /**
     * Gets the search mailboxes extended data.
     *
     * @value The search mailboxes extended data.
     */
    static SearchMailboxesExtendedData: SchemaChange;
    /**
     * Gets the search mailboxes additional search scopes.
     *
     * The search mailboxes additional search scopes.
     */
    static SearchMailboxesAdditionalSearchScopes: SchemaChange;
}
 class AbstractFolderIdWrapper {
    GetFolder(): Folder;
    Validate(version: ExchangeVersion): void;
}
 class AbstractItemIdWrapper {
    GetItem(): Item;
    IternalToJson(service: ExchangeService): any;
}
/**
 * Represents information about an attendee for which to request availability information.
 *
 * @sealed
 */
 class AttendeeInfo implements ISelfValidate {
    /**
     * Gets or sets the SMTP address of this attendee.
     */
    SmtpAddress: string;
    /**
     * Gets or sets the type of this attendee.
     */
    AttendeeType: MeetingAttendeeType;
    /**
     * Gets or sets a value indicating whether times when this attendee is not available should be returned.
     */
    ExcludeConflicts: boolean;
    /**
     * Initializes a new instance of the **AttendeeInfo** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **AttendeeInfo** class.
     *
     * @param   {string}    smtpAddress        The SMTP address of the attendee.
     */
    constructor(smtpAddress: string);
    /**
     * Initializes a new instance of the **AttendeeInfo** class.
     *
     * @param   {string}                smtpAddress        The SMTP address of the attendee.
     * @param   {MeetingAttendeeType}   attendeeType       The yype of the attendee.
     * @param   {boolean}               excludeConflicts   Indicates whether times when this attendee is not available should be returned.
     */
    constructor(smtpAddress: string, attendeeType: MeetingAttendeeType, excludeConflicts: boolean);
    /**
     * Validates this instance.
     *
     * ISelfValidate.Validate
     */
    Validate(): void;
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
}
 class GetUserAvailabilityResults {
    SuggestionsResponse: SuggestionsResponse;
    AttendeesAvailability: ServiceResponseCollection<AttendeeAvailability>;
    readonly Suggestions: Suggestion[];
}
 class LegacyAvailabilityTimeZone extends ComplexProperty {
    constructor();
    constructor(timeZoneInfo: TimeZoneInfo);
    ToTimeZoneInfo(): TimeZoneInfo;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
 class LegacyAvailabilityTimeZoneTime extends ComplexProperty {
    readonly HasTransitionTime: boolean;
    Delta: TimeSpan;
    TimeOfDay: TimeSpan;
    DayOrder: number;
    Month: number;
    DayOfTheWeek: DayOfTheWeek;
    Year: number;
    constructor();
    ToTransitionTime(): TimeZoneInfo.TransitionTime;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
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
     * Obtains a string representation of the reply.
     *
     * @return  {string}      A string containing the reply message.
     */
    ToString(): string;
    toString(): string;
}
/**
 * Represents a time period.
 *
 * @sealed
 */
 class TimeWindow implements ISelfValidate {
    /**
     * Gets or sets the start date and time.
     */
    StartTime: DateTime;
    /**
     * Gets or sets the end date and time.
     */
    EndTime: DateTime;
    /**
     * Initializes a new instance of the **TimeWindow** class.
     *
     * @param   {DateTime}   startTime   The start date and time.
     * @param   {DateTime}   endTime     The end date and time.
     */
    constructor(startTime: DateTime, endTime: DateTime);
    /**
     * Validates this instance.
     *
     * ISelfValidate.Validate
     */
    Validate(): void;
}
/**
 * Represents the results of an action performed on a calendar item or meeting message, such as accepting, tentatively accepting or declining a meeting request.
 *
 * @sealed
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
    readonly Appointment: Appointment;
    /**
     * Gets the meeting request that was moved to the Deleted Items folder as a result of an attendee accepting, tentatively accepting or declining a meeting request. If the meeting request is accepted, tentatively accepted or declined from the Deleted Items folder, it is permanently deleted and MeetingRequest is null.
     *
     */
    readonly MeetingRequest: MeetingRequest;
    /**
     * Gets the copy of the response that is sent to the organizer of a meeting when the meeting is accepted, tentatively accepted or declined by an attendee. MeetingResponse is null if the attendee chose not to send a response.
     *
     */
    readonly MeetingResponse: MeetingResponse;
    /**
     * Gets the copy of the meeting cancellation message sent by the organizer to the attendees of a meeting when the meeting is cancelled.
     *
     */
    readonly MeetingCancellation: MeetingCancellation;
}/**
 * Represents the results of a GetDelegates operation.
 *
 * @sealed
 */
 class DelegateInformation {
    /**
     * Gets a list of responses for each of the delegate users concerned by the operation.
     */
    readonly DelegateUserResponses: DelegateUserResponse[];
    /**
     * Gets a value indicating if and how meeting requests are delivered to delegates.
     */
    readonly MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
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
    (responseHeaders: Dictionary<string, string>): void;
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
export interface TextWriter {
    Write(message: any): void;
}
/**
 * Represents the results of an ExpandGroup operation.
 *
 * @sealed
 */
 class ExpandGroupResults implements IEnumerable<EmailAddress> {
    /**
     * Gets the number of members that were returned by the ExpandGroup operation.
     * Count might be less than the total number of members in the group, in which case the value of the IncludesAllMembers is false.
     */
    readonly Count: number;
    /**
     * Gets a value indicating whether all the members of the group have been returned by ExpandGroup.
     */
    readonly IncludesAllMembers: boolean;
    /**
     * Gets the members of the expanded group.
     */
    readonly Members: EmailAddress[];
    /**
     *  Returns an enumerator that iterates through the collection. this case this.members
     */
    GetEnumerator(): EmailAddress[];
}
 class FolderIdWrapper extends AbstractFolderIdWrapper {
    constructor(folderId: FolderId);
    Validate(version: ExchangeVersion): void;
} class FolderWrapper extends AbstractFolderIdWrapper {
    constructor(folder: Folder);
    GetFolder(): Folder;
}
/**
 * Represents an Id expressed in a specific format.
 */
 class AlternateId extends AlternateIdBase {
    /**
     * Gets or sets the Id.
     */
    UniqueId: string;
    /**
     * Gets or sets the mailbox to which the Id belongs.
     */
    Mailbox: string;
    /**
     * Gets or sets the type (primary or archive) mailbox to which the Id belongs.
     */
    IsArchive: boolean;
    /**
     * Initializes a new instance of the **AlternateId** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **AlternateId** class.
     *
     * @param   {IdFormat}  format      The format the Id is expressed in.
     * @param   {string}    id          The Id.
     * @param   {string}    mailbox     The SMTP address of the mailbox that the Id belongs to.
     */
    constructor(format: IdFormat, id: string, mailbox: string);
    /**
     * Initializes a new instance of the **AlternateId** class.
     *
     * @param   {IdFormat}  format      The format the Id is expressed in.
     * @param   {string}    id          The Id.
     * @param   {string}    mailbox     The SMTP address of the mailbox that the Id belongs to.
     * @param   {boolean}   isArchive   Primary (false) or archive (true) mailbox.
     */
    constructor(format: IdFormat, id: string, mailbox: string, isArchive: boolean);
}
/**
 * Represents the base class for Id expressed in a specific format.
 */
 abstract class AlternateIdBase implements ISelfValidate {
    /**
     * Gets or sets the format in which the Id in expressed.
     */
    Format: IdFormat;
    /**
     * Initializes a new instance of the **AlternateIdBase** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **AlternateIdBase** class.
     *
     * @param   {IdFormat}   format   The format.
     */
    constructor(format: IdFormat);
    /**
     * Validate this instance.
     * ISelfValidate.Validate
     *
     */
    Validate(): void;
}
/**
 * Represents the Id of a public folder expressed in a specific format.
 */
 class AlternatePublicFolderId extends AlternateIdBase {
    /**
     * The Id of the public folder.
     */
    FolderId: string;
    /**
     * Initializes a new instance of **AlternatePublicFolderId** class.
     */
    constructor();
    /**
     * Initializes a new instance of **AlternatePublicFolderId** class.
     *
     * @param   {IdFormat}   format     The format in which the public folder Id is expressed.
     * @param   {string}   folderId   The Id of the public folder.
     */
    constructor(format: IdFormat, folderId: string);
}
/**
 * Represents the Id of a public folder item expressed in a specific format.
 */
 class AlternatePublicFolderItemId extends AlternatePublicFolderId {
    /**
     * The Id of the public folder item.
     */
    ItemId: string;
    /**
     * Initializes a new instance of the **AlternatePublicFolderItemId** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **AlternatePublicFolderItemId** class.
     *
     * @param   {IdFormat}  format     The format in which the public folder item Id is expressed.
     * @param   {string}    folderId   The Id of the parent public folder of the public folder item.
     * @param   {string}    itemId     The Id of the public folder item.
     */
    constructor(format: IdFormat, folderId: string, itemId: string);
}
 class ImpersonatedUserId {
    IdType: ConnectingIdType;
    Id: string;
    constructor(idType?: ConnectingIdType, id?: string);
}
 class ItemIdWrapper extends AbstractItemIdWrapper {
    constructor(itemId: ItemId);
    IternalToJson(service: ExchangeService): any;
} class ItemWrapper extends AbstractItemIdWrapper {
    constructor(item: Item);
    GetItem(): Item;
    IternalToJson(service: ExchangeService): any;
}
 class ManagementRoles {
    constructor(userRoles?: string[], applicationRoles?: string[]);
}
 type MapiTypeConverterMap = Dictionary<MapiPropertyType, MapiTypeConverterMapEntry>;
 class MapiTypeConverter {
    static readonly MapiTypeConverterMap: MapiTypeConverterMap;
    static ChangeType(mapiType: MapiPropertyType, value: any): any;
    static ConvertToString(mapiPropType: MapiPropertyType, value: any): string;
    static ConvertToValue(mapiPropType: MapiPropertyType, stringValue: string): any;
    static ConvertToValue(mapiPropType: MapiPropertyType, strings: string[]): any[];
    static IsArrayType(mapiType: MapiPropertyType): boolean;
    static ParseMapiIntegerValue(s: string): any;
}
 class MapiTypeConverterMapEntry {
    Parse: (string: any) => any;
    ConvertToString: (any: any) => string;
    Type: MapiTypeConverterTypeSystem;
    IsArray: boolean;
    readonly DefaultValue: any;
    constructor(type: MapiTypeConverterTypeSystem, parseMethod: (str: string) => any, convertToStringMethod: (obj: any) => string, isArray?: boolean);
    ChangeType(value: any): any;
    ConvertToValue(stringValue: string): any;
    ConvertToValueOrDefault(stringValue: string): any;
    ValidateValueAsArray(value: any): void;
}
/**
 * Represents a mobile phone.
 *
 * @sealed
 */
 class MobilePhone implements ISelfValidate {
    /**
     * Gets or sets the name associated with this mobile phone.
     */
    Name: string;
    /**
     * Gets or sets the number of this mobile phone.
     */
    PhoneNumber: string;
    /**
     * Initializes a new instance of the **MobilePhone** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **MobilePhone** class.
     *
     * @param   {string}   name          The name associated with the mobile phone.
     * @param   {string}   phoneNumber   The mobile phone number.
     */
    constructor(name: string, phoneNumber: string);
    /**
     * Validates this instance.
     * ISelfValidate.Validate
     */
    Validate(): void;
}
 class NameResolution {
    readonly Mailbox: EmailAddress;
    readonly Contact: Contact;
    constructor(owner: NameResolutionCollection);
    LoadFromJson(jsonProperty: any, service: ExchangeService): void;
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void;
}
/**
 * Represents a list of suggested name resolutions.
 *
 * @sealed
 */
 class NameResolutionCollection implements IEnumerable<NameResolution> {
    /**
     * Gets the total number of elements in the list.
     */
    readonly Count: number;
    /**
     * Gets a value indicating whether more suggested resolutions are available. ResolveName only returns a maximum of 100 name resolutions.
     * When IncludesAllResolutions is false, there were more than 100 matching names on the server. To narrow the search, provide a more precise name to ResolveName.
     */
    readonly IncludesAllResolutions: boolean;
    /**
     * Gets the name resolution at the specified index.
     *
     * @param   {number}   index    The index of the name resolution to get.
     * @return  {NameResolution}    The name resolution at the speicfied index.
     */
    _getItem(index: number): NameResolution;
    /**
     *  Returns an enumerator that iterates through the collection. this case this.items
     */
    GetEnumerator(): NameResolution[];
}/**
 * Represents SoapFault details.
 *
 * /remarks/    ews-javascript-api -> removing internal modifier to, this class will be used to pass on to error delegate of promise instead of Exceptions.
 *
 * /remarks/    ews-javascript-api -> 0.9 - Extending from Error object to avoid BlueBird errors when promise is rejected without and Error object
 * /remarks/    ews-javascript-api -> 0.9 - extending from Exception which looks like Error to BlueBird. can not extend from Error. Typescript 1.8+ can not extend builtin objects property, it swallows inheriting properties see  https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
 */
 class SoapFaultDetails extends Exception {
    /**
     * Message text of the error.
     */
    message: string;
    /**
     * Exception generated based on ExchangeService parsing
     * Exception property to carry this to caller.
     */
    Exception: Exception;
    /**
     * ews-javascript-api specific: HTTP status code
     */
    HttpStatusCode: number;
} type base64String = string;
/**
 * Represents an object that can be used to store user-defined configuration settings.
 */
 class UserConfiguration {
    /**
     * Gets the name of the user configuration.
     * internal set
     */
    Name: string;
    /**
     * Gets the Id of the folder containing the user configuration.
     * internal set
     */
    ParentFolderId: FolderId;
    /**
     * Gets the Id of the user configuration.
     */
    readonly ItemId: ItemId;
    /**
     * Gets the dictionary of the user configuration.
     */
    readonly Dictionary: UserConfigurationDictionary;
    /**
     * Gets or sets the xml data of the user configuration.
     * ### base64 encoded value, not the memory stream or byte[]
     */
    XmlData: base64String;
    /**
     *  Gets or sets the binary data of the user configuration.
     * ### base64 encoded value, not the memory stream or byte[]
     */
    BinaryData: base64String;
    /**
     * Gets a value indicating whether this user configuration has been modified.
     */
    readonly IsDirty: boolean;
    /**
     * Initializes a new instance of **UserConfiguration** class.
     *
     * @param   {ExchangeService}   service               The service to which the user configuration is bound.
     */
    constructor(service: ExchangeService);
    /**
     * Binds to an existing user configuration and loads the specified properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}               service          The service to which the user configuration is bound.
     * @param   {string}                        name             The name of the user configuration.
     * @param   {FolderId}                      parentFolderId   The Id of the folder containing the user configuration.
     * @param   {UserConfigurationProperties}   properties       The properties to load.
     * @return  {Promise<UserConfiguration>}   A user configuration Instance   :Promise.
     */
    static Bind(service: ExchangeService, name: string, parentFolderId: FolderId, properties: UserConfigurationProperties): Promise<UserConfiguration>;
    /**
     * Binds to an existing user configuration and loads the specified properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}               service             The service to which the user configuration is bound.
     * @param   {string}                        name                The name of the user configuration.
     * @param   {parentFolderName}              parentFolderName    The name of the folder containing the user configuration.
     * @param   {UserConfigurationProperties}   properties          The properties to load.
     * @return  {Promise<UserConfiguration>}   A user configuration Instance   :Promise.
     */
    static Bind(service: ExchangeService, name: string, parentFolderName: WellKnownFolderName, properties: UserConfigurationProperties): Promise<UserConfiguration>;
    /**
     * Deletes the user configuration.
     * Calling this method results in a call to EWS.
     * @return  {Promise<void>}    :Promise.
     */
    Delete(): Promise<void>;
    /**
     * Loads the specified properties on the user configuration.
     * Calling this method results in a call to EWS.
     * @return  {Promise<void>}    :Promise.
     */
    Load(properties: UserConfigurationProperties): Promise<void>;
    /**
     * Saves the user configuration. Calling this method results in a call to EWS.
     *
     * @param   {string}                name             The name of the user configuration.
     * @param   {WellKnownFolderName}   parentFolderName   The Id of the folder in which to save the user configuration.
     * @return  {Promise<void>}        :Promise.
     */
    Save(name: string, parentFolderName: WellKnownFolderName): Promise<void>;
    /**
     * Saves the user configuration. Calling this method results in a call to EWS.
     *
     * @param   {string}        name             The name of the user configuration.
     * @param   {FolderId}      parentFolderId   The Id of the folder in which to save the user configuration.
     * @return  {Promise<void>}                 :Promise.
     */
    Save(name: string, parentFolderId: FolderId): Promise<void>;
    /**
     * Updates the user configuration by applying local changes to the Exchange server.
     * Calling this method results in a call to EWS.
     * @return  {Promise<void>}    :Promise.
     */
    Update(): Promise<void>;
    /**
     * Determines whether the specified property may be accessed.
     *
     * @param   {UserConfigurationProperties}   property   Property to access.
     */
    ValidatePropertyAccess(property: UserConfigurationProperties): void;
}
/**
 * Represents an event that applies to a folder.
 */
 class FolderEvent extends NotificationEvent {
    /**
     * Gets the Id of the folder this event applies to.
     */
    readonly FolderId: FolderId;
    /**
     * Gets the Id of the folder that was moved or copied. OldFolderId is only meaningful when EventType is equal to either EventType.Moved or EventType.Copied. For all other event types, OldFolderId is null.
     */
    readonly OldFolderId: FolderId;
    /**
     * Gets the new number of unread messages. This is is only meaningful when EventType is equal to EventType.Modified. For all other event types, UnreadCount is null.
     */
    readonly UnreadCount: number;
}
/**
 * Represents a collection of notification events.
 */
 class GetEventsResults {
    /**
     * Gets the XML element name to event type mapping.
     *
     * @value	The XML element name to event type mapping.
     */
    static readonly XmlElementNameToEventTypeMap: Dictionary<string, EventType>;
    /**
     * Gets the collection of folder events.
     *
     * @value	The folder events.
     */
    readonly FolderEvents: FolderEvent[];
    /**
     * Gets the collection of item events.
     *
     * @value	The item events.
     */
    readonly ItemEvents: ItemEvent[];
    /**
     * Gets the collection of all events.
     *
     * @value	The events.
     */
    readonly AllEvents: NotificationEvent[];
}/**
 * Represents an event that applies to an item.
 */
 class ItemEvent extends NotificationEvent {
    /**
     * Gets the Id of the item this event applies to.
     */
    readonly ItemId: ItemId;
    /**
     * Gets the Id of the item that was moved or copied. OldItemId is only meaningful when EventType is equal to either EventType.Moved or EventType.Copied.
     * For all other event types, OldItemId is null.
     */
    readonly OldItemId: ItemId;
}
/**
 * Represents an event as exposed by push and pull notifications.
 */
 abstract class NotificationEvent {
    /**
     * Gets the type of this event.
     */
    readonly EventType: EventType;
    /**
     * Gets the date and time when the event occurred.
     */
    readonly TimeStamp: DateTime;
    /**
     * Gets the Id of the parent folder of the item or folder this event applie to.
     */
    ParentFolderId: FolderId;
    /**
     * Gets the Id of the old parent folder of the item or folder this event applies to.
     * OldParentFolderId is only meaningful when EventType is equal to either EventType.Moved or EventType.Copied.
     * For all other event types, OldParentFolderId is null.
     */
    OldParentFolderId: FolderId;
}
/**
 * Provides data to a StreamingSubscriptionConnection's OnNotificationEvent event.
 */
 class NotificationEventArgs {
    /**
     * Gets the subscription for which notifications have been received.
     *
     * internal set
     */
    Subscription: StreamingSubscription;
    /**
     * Gets the events that were received.
     *
     * internal set
     */
    Events: NotificationEvent[];
}/**
 * Represents a pull subscription.
 *
 * @sealed
 */
 class PullSubscription extends SubscriptionBase {
    /**
     * Gets a value indicating whether more events are available on the server.
     * MoreEventsAvailable is undefined (null) until GetEvents is called.
     */
    readonly MoreEventsAvailable: boolean;
    /**
     * Obtains a collection of events that occurred on the subscribed folders since the point in time defined by the Watermark property. When GetEvents succeeds, Watermark is updated.
     *
     * @return  {Promise<GetEventsResults>}      Returns a collection of events that occurred since the last watermark	:Promise.
     */
    GetEvents(): Promise<GetEventsResults>;
    /**
     * Unsubscribes from the pull subscription.
     */
    Unsubscribe(): Promise<void>;
}
/**
 * Represents a push subscriptions.
 *
 * @sealed
 */
 class PushSubscription extends SubscriptionBase {
}
/**
 * Represents a streaming subscription.
 *
 * @sealed
 */
 class StreamingSubscription extends SubscriptionBase {
    /**
     * Gets the service used to create this subscription.
     */
    readonly Service: ExchangeService;
    /**
     * Gets a value indicating whether this subscription uses watermarks.
     */
    protected readonly UsesWatermark: boolean;
    /**
     * Unsubscribes from the streaming subscription.
     */
    Unsubscribe(): Promise<void>;
}
/**
 * Represents a connection to an ongoing stream of events.
 *
 * @sealed
 */
 class StreamingSubscriptionConnection {
    /**
     * Occurs when notifications are received from the server.
     */
    OnNotificationEvent: NotificationEventDelegate[];
    /**
     * Occurs when a subscription encounters an error.
     */
    OnSubscriptionError: SubscriptionErrorDelegate[];
    /**
     * Occurs when a streaming subscription connection is disconnected from the server.
     */
    OnDisconnect: SubscriptionErrorDelegate[];
    /**
     * Occurs when a streaming subscription connection gets headers from the server.
     */
    OnResponseHeader: ResponseHeaderDelegate[];
    /**
     * Getting the current subscriptions in this connection.
     */
    readonly CurrentSubscriptions: StreamingSubscription[];
    /**
     * Gets a value indicating whether this connection is opened
     */
    readonly IsOpen: boolean;
    /**
     * Initializes a new instance of the **StreamingSubscriptionConnection** class.
     *
     * @param   {ExchangeService}   		service         The ExchangeService instance this connection uses to connect to the server.
     * @param   {number}   					lifetime        The maximum time, in minutes, the connection will remain open. Lifetime must be between 1 and 30.
     */
    constructor(service: ExchangeService, lifetime: number);
    /**
     * Initializes a new instance of the **StreamingSubscriptionConnection** class.
     *
     * @param   {ExchangeService}   		service         The ExchangeService instance this connection uses to connect to the server.
     * @param   {StreamingSubscription[]}   subscriptions   The streaming subscriptions this connection is receiving events for.
     * @param   {number}   					lifetime        The maximum time, in minutes, the connection will remain open. Lifetime must be between 1 and 30.
     */
    constructor(service: ExchangeService, subscriptions: StreamingSubscription[], lifetime: number);
    /**
     * Adds a subscription to this connection.
     *
     * @param   {StreamingSubscription}   subscription   The subscription to add.
     */
    AddSubscription(subscription: StreamingSubscription): void;
    /**
     * Closes this connection so it stops receiving events from the server.
     * This terminates a long-standing call to EWS.
     *
     * @exception	{InvalidOperationException}		Thrown when Close is called while not connected.
     */
    Close(): void;
    /**
     * Frees resources associated with this StreamingSubscriptionConnection.
     */
    Dispose(): void;
    /**
     * @private Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
     *
     * @param   {boolean}   suppressFinalizer   Value indicating whether to suppress the garbage collector's finalizer..
     */
    Dispose(suppressFinalizer: boolean): void;
    /**
     * Opens this connection so it starts receiving events from the server.
     * This results in a long-standing call to EWS.
     *
     * @exception	{InvalidOperationException}		Thrown when Open is called while connected.
     */
    Open(): Promise<void>;
    /**
     * Removes the specified streaming subscription from the connection.
     *
     * @param   {StreamingSubscription}   subscription   The subscription to remove.
     */
    RemoveSubscription(subscription: StreamingSubscription): void;
    /**
     * Throws if disposed.
     */
    ThrowIfDisposed(): void;
    /**
     * Validates the state of the connection.
     *
     * @param   {boolean}   isConnectedExpected   Value indicating whether we expect to be currently connected.
     * @param   {string}   	errorMessage          The error message.
     */
    ValidateConnectionState(isConnectedExpected: boolean, errorMessage: string): void;
}
/**
 * Represents a delegate that is invoked when notifications are received from the server
 *
 * @param   {any}   					sender   The StreamingSubscriptionConnection instance that received the events.
 * @param   {NotificationEventArgs}   	args     The event data.
 */
export interface NotificationEventDelegate {
    (sender: any, args: NotificationEventArgs): void;
}
/**
 * Represents a delegate that is invoked when an error occurs within a streaming subscription connection.
 *
 * @param   {any}   						sender   The StreamingSubscriptionConnection instance within which the error occurred.
 * @param   {SubscriptionErrorEventArgs}   	args     The event data.
 */
export interface SubscriptionErrorDelegate {
    (sender: any, args: SubscriptionErrorEventArgs): void;
}
/**
 * Represents a delegate that is invoked when an error occurs within a streaming subscription connection.
 *
 * @param   {any}   						sender   The StreamingSubscriptionConnection instance within which the error occurred.
 * @param   {SubscriptionErrorEventArgs}   	args     The event data.
 */
export interface ResponseHeaderDelegate {
    (header: any): void;
}
/**
 * Represents the base class for event subscriptions.
 */
 abstract class SubscriptionBase {
    protected service: ExchangeService;
    /**
     * Gets the session.
     *
     * @value The session.
     */
    readonly Service: ExchangeService;
    /**
     * Gets the Id of the subscription.
     *
     * internal set
     */
    Id: string;
    /**
     * Gets the latest watermark of the subscription. Watermark is always null for streaming subscriptions.
     *
     * internal set
     */
    Watermark: string;
    /**
     * Gets whether or not this subscription uses watermarks.
     */
    protected readonly UsesWatermark: boolean;
}
/**
 * Provides data to a StreamingSubscriptionConnection's OnSubscriptionError and OnDisconnect events.
 */
 class SubscriptionErrorEventArgs {
    /**
     * Gets the subscription for which an error occurred. If Subscription is null, the error applies to the entire connection.
     *
     * internal set
     */
    Subscription: StreamingSubscription;
    /**
     * Gets the exception representing the error. If Exception is null, the connection was cleanly closed by the server.
     *
     * internal set
     */
    Exception: Exception;
}
/**
 * Represents the completion of an asynchronous operation
 * @typescript 2.1.1 lib.es6.d.ts Promise Description
 */
export interface Promise<T> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult>(onfulfilled: ((value: T) => T | PromiseLike<T>) | undefined | null, onrejected: (reason: any) => TResult | PromiseLike<TResult>): Promise<T | TResult>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult>(onfulfilled: (value: T) => TResult | PromiseLike<TResult>, onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<TResult>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1, TResult2>(onfulfilled: (value: T) => TResult1 | PromiseLike<TResult1>, onrejected: (reason: any) => TResult2 | PromiseLike<TResult2>): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch(onrejected?: ((reason: any) => T | PromiseLike<T>) | undefined | null): Promise<T>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult>(onrejected: (reason: any) => TResult | PromiseLike<TResult>): Promise<T | TResult>;
}
export interface PromiseLike<T> {
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then(onfulfilled?: ((value: T) => T | PromiseLike<T>) | undefined | null, onrejected?: ((reason: any) => T | PromiseLike<T>) | undefined | null): PromiseLike<T>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult>(onfulfilled: ((value: T) => T | PromiseLike<T>) | undefined | null, onrejected: (reason: any) => TResult | PromiseLike<TResult>): PromiseLike<T | TResult>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult>(onfulfilled: (value: T) => TResult | PromiseLike<TResult>, onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): PromiseLike<TResult>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1, TResult2>(onfulfilled: (value: T) => TResult1 | PromiseLike<TResult1>, onrejected: (reason: any) => TResult2 | PromiseLike<TResult2>): PromiseLike<TResult1 | TResult2>;
}
export interface PromiseConstructor {
    /**
      * A reference to the prototype.
      */
    readonly prototype: Promise<any>;
    /**
     * Creates a new Promise.
     * @param executor A callback used to initialize the promise. This callback is passed two arguments:
     * a resolve callback used resolve the promise with a value or the result of another promise,
     * and a reject callback used to reject the promise with a provided reason or error.
     */
    new <T>(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;
    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4, T5, T6, T7>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): Promise<[T1, T2, T3, T4, T5, T6, T7]>;
    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4, T5, T6>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): Promise<[T1, T2, T3, T4, T5, T6]>;
    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4, T5>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>]): Promise<[T1, T2, T3, T4, T5]>;
    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3, T4>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>]): Promise<[T1, T2, T3, T4]>;
    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2, T3>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): Promise<[T1, T2, T3]>;
    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T1, T2>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): Promise<[T1, T2]>;
    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    all<T>(values: (T | PromiseLike<T>)[]): Promise<T[]>;
    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]): Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10>;
    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T1, T2, T3, T4, T5, T6, T7, T8, T9>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]): Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;
    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T1, T2, T3, T4, T5, T6, T7, T8>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]): Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>;
    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T1, T2, T3, T4, T5, T6, T7>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]): Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7>;
    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T1, T2, T3, T4, T5, T6>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]): Promise<T1 | T2 | T3 | T4 | T5 | T6>;
    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T1, T2, T3, T4, T5>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>]): Promise<T1 | T2 | T3 | T4 | T5>;
    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T1, T2, T3, T4>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>]): Promise<T1 | T2 | T3 | T4>;
    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T1, T2, T3>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]): Promise<T1 | T2 | T3>;
    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T1, T2>(values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]): Promise<T1 | T2>;
    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
    race<T>(values: (T | PromiseLike<T>)[]): Promise<T>;
    /**
     * Creates a new rejected promise for the provided reason.
     * @param reason The reason the promise was rejected.
     * @returns A new rejected Promise.
     */
    reject(reason: any): Promise<never>;
    /**
     * Creates a new rejected promise for the provided reason.
     * @param reason The reason the promise was rejected.
     * @returns A new rejected Promise.
     */
    reject<T>(reason: any): Promise<T>;
    /**
      * Creates a new resolved promise for the provided value.
      * @param value A promise.
      * @returns A promise whose internal state matches the provided promise.
      */
    resolve<T>(value: T | PromiseLike<T>): Promise<T>;
    /**
     * Creates a new resolved promise .
     * @returns A resolved promise.
     */
    resolve(): Promise<void>;
}
 var Promise: PromiseConstructor;
 function ConfigurePromise(promise: PromiseConstructor): void;/**
 * Represents the definition of an extended property.
 */
 class ExtendedPropertyDefinition extends PropertyDefinitionBase {
    /**
     * @Nullable Gets the Id of the extended property.
     */
    readonly Id: number;
    /**
     * Gets the MAPI type of the extended property.
     */
    readonly MapiType: MapiPropertyType;
    /**
     * Gets the name of the extended property.
     */
    readonly Name: string;
    /**
     * @Nullable Gets the property set of the extended property.
     */
    readonly PropertySet: DefaultExtendedPropertySet;
    /**
     * @Nullable Gets the property set Id or the extended property.
     * */
    readonly PropertySetId: Guid;
    /**
     * @Nullable Gets the extended property's tag.
     */
    readonly Tag: number;
    /**
     * Gets the minimum Exchange version that supports this extended property.
     *
     * @value {ExchangeVersion} The version.
     */
    readonly Version: ExchangeVersion;
    /**
     * Gets the property type.
     */
    Type: any;
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
     * Serves as a hash function for a particular type.
     *
     * @return  {number}      A hash code for the current System.Object.
     */
    GetHashCode(): number;
}
/**
 * ExtendedPropertyDefinition interface to be used with TypeContainer - removes circular dependency
 */
export interface IExtendedPropertyDefinition {
    new (): ExtendedPropertyDefinition;
    new (mapiType: MapiPropertyType): ExtendedPropertyDefinition;
    new (tag: number, mapiType: MapiPropertyType): ExtendedPropertyDefinition;
    new (propertySet: DefaultExtendedPropertySet, name: string, mapiType: MapiPropertyType): ExtendedPropertyDefinition;
    new (propertySet: DefaultExtendedPropertySet, id: number, mapiType: MapiPropertyType): ExtendedPropertyDefinition;
    new (propertySetId: Guid, name: string, mapiType: MapiPropertyType): ExtendedPropertyDefinition;
    new (propertySetId: Guid, id: number, mapiType: MapiPropertyType): ExtendedPropertyDefinition;
}
/**
 * Represents an indexed property definition.
 */
 class IndexedPropertyDefinition extends ServiceObjectPropertyDefinition {
    /**
     * Gets the index of the property.
     */
    readonly Index: string;
    readonly Type: string;
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
}
/**
 * IndexedPropertyDefinition interface to be used with TypeContainer - removes circular dependency
 */
export interface IIndexedPropertyDefinition {
    new (uri: string, index: string): IndexedPropertyDefinition;
}
/**
 * Represents the definition of a folder or item property.
 */
 abstract class PropertyDefinition extends ServiceObjectPropertyDefinition {
    /**
     * Gets the name of the property.
     */
    Name: string;
    /**
     * Gets the minimum Exchange version that supports this property.
     *
     * @value {ExchangeVersion} The version.
     */
    readonly Version: ExchangeVersion;
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
    readonly Type: any;
    ToString(): string;
} class ResponseObjectsPropertyDefinition extends PropertyDefinition {
    /**
     * Gets the property type.
     */
    Type: any;
}/**
 * Represents a property definition for a service object.
 */
 abstract class ServiceObjectPropertyDefinition extends PropertyDefinitionBase {
    /**
     * Gets the minimum Exchange version that supports this property.
     *
     * @value {ExchangeVersion} The version.
     */
    readonly Version: ExchangeVersion;
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
}
/**
 * Represents the view settings in a folder search operation.
 *
 * @sealed
 */
 class ConversationIndexedItemView extends PagedView {
    /**
     * Gets the properties against which the returned items should be ordered.
     */
    readonly OrderBy: OrderByCollection;
    /**
     * Gets or sets the conversation query traversal mode.
     *
     * @Nullable
     */
    Traversal: ConversationQueryTraversal;
    /**
     * Gets or sets the view filter.
     *
     * @Nullable
     */
    ViewFilter: ViewFilter;
    /**
     * Initializes a new instance of the **ItemView** class.
     *
     * @param   {number}   pageSize          The maximum number of elements the search operation should return.
     */
    constructor(pageSize: number);
    /**
     * Initializes a new instance of the **ItemView** class.
     *
     * @param   {number}   pageSize          The maximum number of elements the search operation should return.
     * @param   {number}   offset            The offset of the view from the base point.
     */
    constructor(pageSize: number, offset: number);
    /**
     * Initializes a new instance of the **ItemView** class.
     *
     * @param   {number}   pageSize          The maximum number of elements the search operation should return.
     * @param   {number}   offset            The offset of the view from the base point.
     * @param   {number}   offsetBasePoint   The base point of the offset.
     */
    constructor(pageSize: number, offset: number, offsetBasePoint: OffsetBasePoint);
}
/**
 * Represents a search filter that checks for the presence of a substring inside a text property. Applications can use ContainsSubstring to define conditions such as "Field CONTAINS Value" or "Field IS PREFIXED WITH Value".
 */
 class ContainsSubstring extends PropertyBasedFilter {
    /**
     * Gets or sets the containment mode.
     */
    ContainmentMode: ContainmentMode;
    /**
     * Gets or sets the comparison mode.
     */
    ComparisonMode: ComparisonMode;
    /**
     * Gets or sets the value to compare the specified property with.
     */
    Value: string;
    /**
     * Initializes a new instance of the **ContainsSubstring** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **ContainsSubstring** class.
     *
     * @param   {PropertyDefinitionBase}   	propertyDefinition   The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     * @param   {string}   					value                The value to compare with.
     */
    constructor(propertyDefinition: PropertyDefinitionBase, value: string);
    /**
     * Initializes a new instance of the **ContainsSubstring** class.
     *
     * @param   {PropertyDefinitionBase}   	propertyDefinition   The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     * @param   {string}   					value                The value to compare with.
     * @param   {ContainmentMode}   		containmentMode      The containment mode.
     * @param   {ComparisonMode}   			comparisonMode       The comparison mode.
     */
    constructor(propertyDefinition: PropertyDefinitionBase, value: string, containmentMode: ContainmentMode, comparisonMode: ComparisonMode);
}
export interface IContainsSubstring {
    new (): ContainsSubstring;
    new (propertyDefinition: PropertyDefinitionBase, value: string): ContainsSubstring;
    new (propertyDefinition: PropertyDefinitionBase, value: string, containmentMode: ContainmentMode, comparisonMode: ComparisonMode): ContainsSubstring;
}
/**
 * Represents the base search filter class. Use descendant search filter classes such as SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection to define search filters.
 */
 abstract class SearchFilter extends ComplexProperty {
    /**
     * Initializes a new instance of the **SearchFilter** class.
     */
    constructor();
    /**
     * Gets the search filter instance.
     *
     * @param {string} localName Name of the local.
     * @returns {SearchFilter}
     */
    static GetSearchFilterInstance(localName: string): SearchFilter;
}
 module SearchFilter {
    var ContainsSubstring: IContainsSubstring;
    var ExcludesBitmask: IExcludesBitmask;
    var Exists: IExists;
    var IsEqualTo: IIsEqualTo;
    var IsGreaterThan: IIsGreaterThan;
    var IsGreaterThanOrEqualTo: IIsGreaterThanOrEqualTo;
    var IsLessThan: IIsLessThan;
    var IsLessThanOrEqualTo: IIsLessThanOrEqualTo;
    var IsNotEqualTo: IIsNotEqualTo;
    var Not: INot;
    var PropertyBasedFilter: IPropertyBasedFilter;
    var RelationalFilter: IRelationalFilter;
    var SearchFilterCollection: ISearchFilterCollection;
}
/**
 * Represents a bitmask exclusion search filter. Applications can use ExcludesBitExcludesBitmaskFilter to define conditions such as "(OrdinalField and 0x0010) != 0x0010"
 */
 class ExcludesBitmask extends PropertyBasedFilter {
    /**
     * Gets or sets the bitmask to compare the property with.
     */
    Bitmask: number;
    /**
     * Initializes a new instance of the **ExcludesBitmask** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **ExcludesBitmask** class.
     *
     * @param   {PropertyDefinitionBase}   	propertyDefinition   The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     * @param   {number}   					bitmask              The bitmask to compare with.
     */
    constructor(propertyDefinition: PropertyDefinitionBase, bitmask: number);
}
export interface IExcludesBitmask {
    new (): ExcludesBitmask;
    new (propertyDefinition: PropertyDefinitionBase, bitmask: number): ExcludesBitmask;
}
/**
 * Represents a search filter checking if a field is set. Applications can use ExistsFilter to define conditions such as "Field IS SET".
 */
 class Exists extends PropertyBasedFilter {
    /**
     * Initializes a new instance of the **Exists** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **Exists** class.
     *
     * @param   {PropertyDefinitionBase}   	propertyDefinition   The definition of the property to check the existence of. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     */
    constructor(propertyDefinition: PropertyDefinitionBase);
}
export interface IExists {
    new (): Exists;
    new (propertyDefinition: PropertyDefinitionBase): Exists;
}
/**
 * Represents a search filter that checks if a property is equal to a given value or other property.
 */
 class IsEqualTo extends RelationalFilter {
    /**
     * Initializes a new instance of the **IsEqualTo** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **IsEqualTo** class.
     *
     * @param   {PropertyDefinitionBase}   propertyDefinition        The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     * @param   {PropertyDefinitionBase}   otherPropertyDefinition   The definition of the property to compare with. Property definitions are available on schema classes (EmailMessageSchema, AppointmentSchema, etc.)
     */
    constructor(propertyDefinition: PropertyDefinitionBase, otherPropertyDefinition: PropertyDefinitionBase);
    /**
     * Initializes a new instance of the **IsEqualTo** class.
     *
     * @param   {PropertyDefinitionBase}   	propertyDefinition   The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     * @param   {any}   					value                The value to compare the property with.
     */
    constructor(propertyDefinition: PropertyDefinitionBase, value: any);
}
export interface IIsEqualTo {
    new (): IsEqualTo;
    new (propertyDefinition: PropertyDefinitionBase, otherPropertyDefinition: PropertyDefinitionBase): IsEqualTo;
    new (propertyDefinition: PropertyDefinitionBase, value: any): IsEqualTo;
}
/**
 * Represents a search filter that checks if a property is greater than a given value or other property.
 */
 class IsGreaterThan extends RelationalFilter {
    /**
     * Initializes a new instance of the **IsGreaterThan** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **IsGreaterThan** class.
     *
     * @param   {PropertyDefinitionBase}   propertyDefinition        The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     * @param   {PropertyDefinitionBase}   otherPropertyDefinition   The definition of the property to compare with. Property definitions are available on schema classes (EmailMessageSchema, AppointmentSchema, etc.)
     */
    constructor(propertyDefinition: PropertyDefinitionBase, otherPropertyDefinition: PropertyDefinitionBase);
    /**
     * Initializes a new instance of the **IsGreaterThan** class.
     *
     * @param   {PropertyDefinitionBase}   	propertyDefinition   The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     * @param   {any}   					value                The value to compare the property with.
     */
    constructor(propertyDefinition: PropertyDefinitionBase, value: any);
}
export interface IIsGreaterThan {
    new (): IsGreaterThan;
    new (propertyDefinition: PropertyDefinitionBase, otherPropertyDefinition: PropertyDefinitionBase): IsGreaterThan;
    new (propertyDefinition: PropertyDefinitionBase, value: any): IsGreaterThan;
}
/**
 * Represents a search filter that checks if a property is greater than or equal to a given value or other property.
 */
 class IsGreaterThanOrEqualTo extends RelationalFilter {
    /**
     * Initializes a new instance of the **IsGreaterThanOrEqualTo** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **IsGreaterThanOrEqualTo** class.
     *
     * @param   {PropertyDefinitionBase}   propertyDefinition        The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     * @param   {PropertyDefinitionBase}   otherPropertyDefinition   The definition of the property to compare with. Property definitions are available on schema classes (EmailMessageSchema, AppointmentSchema, etc.)
     */
    constructor(propertyDefinition: PropertyDefinitionBase, otherPropertyDefinition: PropertyDefinitionBase);
    /**
     * Initializes a new instance of the **IsGreaterThanOrEqualTo** class.
     *
     * @param   {PropertyDefinitionBase}   	propertyDefinition   The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     * @param   {any}   					value                The value to compare the property with.
     */
    constructor(propertyDefinition: PropertyDefinitionBase, value: any);
}
export interface IIsGreaterThanOrEqualTo {
    new (): IsGreaterThanOrEqualTo;
    new (propertyDefinition: PropertyDefinitionBase, otherPropertyDefinition: PropertyDefinitionBase): IsGreaterThanOrEqualTo;
    new (propertyDefinition: PropertyDefinitionBase, value: any): IsGreaterThanOrEqualTo;
}
/**
 * Represents a search filter that checks if a property is less than a given value or other property.
 */
 class IsLessThan extends RelationalFilter {
    /**
     * Initializes a new instance of the **IsLessThan** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **IsLessThan** class.
     *
     * @param   {PropertyDefinitionBase}   propertyDefinition        The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     * @param   {PropertyDefinitionBase}   otherPropertyDefinition   The definition of the property to compare with. Property definitions are available on schema classes (EmailMessageSchema, AppointmentSchema, etc.)
     */
    constructor(propertyDefinition: PropertyDefinitionBase, otherPropertyDefinition: PropertyDefinitionBase);
    /**
     * Initializes a new instance of the **IsLessThan** class.
     *
     * @param   {PropertyDefinitionBase}   	propertyDefinition   The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     * @param   {any}   					value                The value to compare the property with.
     */
    constructor(propertyDefinition: PropertyDefinitionBase, value: any);
}
export interface IIsLessThan {
    new (): IsLessThan;
    new (propertyDefinition: PropertyDefinitionBase, otherPropertyDefinition: PropertyDefinitionBase): IsLessThan;
    new (propertyDefinition: PropertyDefinitionBase, value: any): IsLessThan;
}
/**
 * Represents a search filter that checks if a property is less than or equal to a given value or other property.
 */
 class IsLessThanOrEqualTo extends RelationalFilter {
    /**
     * Initializes a new instance of the **IsLessThanOrEqualTo** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **IsLessThanOrEqualTo** class.
     *
     * @param   {PropertyDefinitionBase}   propertyDefinition        The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     * @param   {PropertyDefinitionBase}   otherPropertyDefinition   The definition of the property to compare with. Property definitions are available on schema classes (EmailMessageSchema, AppointmentSchema, etc.)
     */
    constructor(propertyDefinition: PropertyDefinitionBase, otherPropertyDefinition: PropertyDefinitionBase);
    /**
     * Initializes a new instance of the **IsLessThanOrEqualTo** class.
     *
     * @param   {PropertyDefinitionBase}   	propertyDefinition   The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     * @param   {any}   					value                The value to compare the property with.
     */
    constructor(propertyDefinition: PropertyDefinitionBase, value: any);
}
export interface IIsLessThanOrEqualTo {
    new (): IsLessThanOrEqualTo;
    new (propertyDefinition: PropertyDefinitionBase, otherPropertyDefinition: PropertyDefinitionBase): IsLessThanOrEqualTo;
    new (propertyDefinition: PropertyDefinitionBase, value: any): IsLessThanOrEqualTo;
}
/**
 * Represents a search filter that checks if a property is not equal to a given value or other property.
 */
 class IsNotEqualTo extends RelationalFilter {
    /**
     * Initializes a new instance of the **IsNotEqualTo** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **IsNotEqualTo** class.
     *
     * @param   {PropertyDefinitionBase}   propertyDefinition        The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     * @param   {PropertyDefinitionBase}   otherPropertyDefinition   The definition of the property to compare with. Property definitions are available on schema classes (EmailMessageSchema, AppointmentSchema, etc.)
     */
    constructor(propertyDefinition: PropertyDefinitionBase, otherPropertyDefinition: PropertyDefinitionBase);
    /**
     * Initializes a new instance of the **IsNotEqualTo** class.
     *
     * @param   {PropertyDefinitionBase}   	propertyDefinition   The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     * @param   {any}   					value                The value to compare the property with.
     */
    constructor(propertyDefinition: PropertyDefinitionBase, value: any);
}
export interface IIsNotEqualTo {
    new (): IsNotEqualTo;
    new (propertyDefinition: PropertyDefinitionBase, otherPropertyDefinition: PropertyDefinitionBase): IsNotEqualTo;
    new (propertyDefinition: PropertyDefinitionBase, value: any): IsNotEqualTo;
}
/**
 * Represents a search filter that negates another. Applications can use NotFilter to define conditions such as "NOT(other filter)".
 */
 class Not extends SearchFilter {
    /**
     * Gets or sets the search filter to negate. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection.
     */
    SearchFilter: SearchFilter;
    /**
     * Initializes a new instance of the **Not** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **Not** class.
     *
     * @param   {SearchFilter}   searchFilter   The search filter to negate. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection.
     */
    constructor(searchFilter: SearchFilter);
    /**
     * Gets or sets the search filter to negate. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection.
     */
    SearchFilterChanged(complexProperty: ComplexProperty): void;
}
export interface INot {
    new (): Not;
    new (searchFilter: SearchFilter): Not;
}
 abstract class PropertyBasedFilter extends SearchFilter {
    /**
     * Gets or sets the definition of the property that is involved in the search filter. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     */
    PropertyDefinition: PropertyDefinitionBase;
}
export interface IPropertyBasedFilter {
    new (): PropertyBasedFilter;
    new (propertyDefinition: PropertyDefinitionBase): PropertyBasedFilter;
}
/**
 * Represents the base class for relational filters (for example, IsEqualTo, IsGreaterThan or IsLessThanOrEqualTo).
 */
 abstract class RelationalFilter extends PropertyBasedFilter {
    /**
     * Gets or sets the definition of the property to compare with. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     * The OtherPropertyDefinition and Value properties are mutually exclusive; setting one resets the other to null.
     */
    OtherPropertyDefinition: PropertyDefinitionBase;
    /**
     * Gets or sets the value to compare with. The Value and OtherPropertyDefinition properties are mutually exclusive; setting one resets the other to null.
     */
    Value: any;
    /**
     * Initializes a new instance of the **RelationalFilter** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **RelationalFilter** class.
     *
     * @param   {PropertyDefinitionBase}   propertyDefinition        The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     * @param   {PropertyDefinitionBase}   otherPropertyDefinition   The definition of the property to compare with. Property definitions are available on schema classes (EmailMessageSchema, AppointmentSchema, etc.)
     */
    constructor(propertyDefinition: PropertyDefinitionBase, otherPropertyDefinition: PropertyDefinitionBase);
    /**
     * Initializes a new instance of the **RelationalFilter** class.
     *
     * @param   {PropertyDefinitionBase}   	propertyDefinition   The definition of the property that is being compared. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     * @param   {any}   					value                The value to compare the property with.
     */
    constructor(propertyDefinition: PropertyDefinitionBase, value: any);
}
export interface IRelationalFilter {
    new (): RelationalFilter;
    new (propertyDefinition: PropertyDefinitionBase, otherPropertyDefinition: PropertyDefinitionBase): RelationalFilter;
    new (propertyDefinition: PropertyDefinitionBase, value: any): RelationalFilter;
}
/**
 * Represents a collection of search filters linked by a logical operator. Applications can use SearchFilterCollection to define complex search filters such as "Condition1 AND Condition2".
 */
 class SearchFilterCollection extends SearchFilter implements IEnumerable<SearchFilter> {
    /**
     * Gets the total number of search filters in the collection.
     */
    readonly Count: number;
    /**
     * Gets or sets the logical operator that links the serach filters in this collection.
     */
    LogicalOperator: LogicalOperator;
    /**
     * Initializes a new instance of the **SearchFilterCollection** class. The LogicalOperator property is initialized to LogicalOperator.And.
     */
    constructor();
    /**
     * Initializes a new instance of the **SearchFilterCollection** class.
     *
     * @param   {LogicalOperator}   logicalOperator   The logical operator used to initialize the collection.
     */
    constructor(logicalOperator: LogicalOperator);
    /**
     * Initializes a new instance of the **SearchFilterCollection** class.
     *
     * @param   {LogicalOperator}   logicalOperator   The logical operator used to initialize the collection.
     * @param   {SearchFilter[]}   	searchFilters     The search filters to add to the collection.
     */
    constructor(logicalOperator: LogicalOperator, searchFilters: SearchFilter[]);
    /**
     * Initializes a new instance of the **SearchFilterCollection** class.
     *
     * @param   {LogicalOperator}   logicalOperator   The logical operator used to initialize the collection.
     * @param   {...SearchFilter[]}   	...searchFilters     The search filters to add to the collection.
     */
    constructor(logicalOperator: LogicalOperator, ...searchFilters: SearchFilter[]);
    /**
     * Gets or sets the search filter at the specified index.
     *
     * @param   {number}   index   The zero-based index of the search filter to get or set.
     * @return  {SearchFilter}           The search filter at the specified index.
     */
    _getItem(index: number): SearchFilter;
    /**
     * Gets or sets the search filter at the specified index.
     *
     * @param   {number}   index   The zero-based index of the search filter to get or set.
     * @return  {SearchFilter}           The search filter at the specified index.
     */
    _setItem(index: number, value: SearchFilter): void;
    /**
     * Adds a search filter of any type to the collection.
     *
     * @param   {SearchFilter}   searchFilter   The search filter to add. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection.
     */
    Add(searchFilter: SearchFilter): void;
    /**
     * Adds multiple search filters to the collection.
     *
     * @param   {SearchFilter[]}   searchFilters   The search filters to add. Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection.
     */
    AddRange(searchFilters: SearchFilter[]): void;
    /**
     * Clears the collection.
     */
    Clear(): void;
    /**
     * Determines whether a specific search filter is in the collection.
     *
     * @param   {SearchFilter} 	searchFilter   The search filter to locate in the collection.
     * @return  {boolean}		True is the search filter was found in the collection, false otherwise.
     */
    Contains(searchFilter: SearchFilter): boolean;
    /**
     *  Returns an enumerator that iterates through the collection. this case this.items
     */
    GetEnumerator(): SearchFilter[];
    /**
     * Removes a search filter from the collection.
     *
     * @param   {SearchFilter}   searchFilter   The search filter to remove.
     */
    Remove(searchFilter: SearchFilter): void;
    /**
     * Removes the search filter at the specified index from the collection.
     *
     * @param   {number}   index   The zero-based index of the search filter to remove.
     */
    RemoveAt(index: number): void;
}
export interface ISearchFilterCollection {
    new (): SearchFilterCollection;
    new (logicalOperator: LogicalOperator): SearchFilterCollection;
    new (logicalOperator: LogicalOperator, searchFilters: SearchFilter[]): SearchFilterCollection;
}
/**
 * Represents the results of an conversation search operation.
 *
 * @sealed
 */
 class FindConversationResults {
    /**
     * Gets a collection containing the conversations that were found by the search operation.
     */
    Conversations: Conversation[];
    /**
     * Gets a collection containing the HighlightTerms that were returned by the search operation.
     */
    HighlightTerms: HighlightTerm[];
    /**
     * Gets the total count of conversations in view.
     */
    TotalCount: number;
    /**
     * Gets the indexed offset of the first conversation by the search operation.
     */
    IndexedOffset: number;
}
/**
 * Represents the results of a folder search operation.
 *
 * @sealed
 */
 class FindFoldersResults implements IEnumerable<Folder> {
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
    readonly Folders: Folder[];
    /**
     *  Returns an enumerator that iterates through the collection. this case this.items
     */
    GetEnumerator(): Folder[];
}
/**
 * Represents the results of an item search operation.
 *
 * @sealed
 * @type    {TItem}  Item type
 */
 class FindItemsResults<TItem extends Item> {
    /**
     * Gets the total number of items matching the search criteria available in the searched folder.
     */
    TotalCount: number;
    /**
     * Gets the offset that should be used with ItemView to retrieve the next page of items in a FindItems operation.
     */
    NextPageOffset: number;
    /**
     * Gets a value indicating whether more items matching the search criteria are available in the searched folder.
     */
    MoreAvailable: boolean;
    /**
     * Gets a collection containing the items that were found by the search operation.
     */
    readonly Items: TItem[];
    /**
     * Gets a collection containing the highlight terms that were found by the search operation.
     */
    readonly HighlightTerms: HighlightTerm[];
}
/**
 * Represents the view settings in a folder search operation.
 *
 * @sealed
 */
 class FolderView extends PagedView {
    /**
     * Gets or sets the search traversal mode. Defaults to FolderTraversal.Shallow.     *
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
}
/**
 * Represents the results of an item search operation.
 *
 * @sealed
 * @type    {TItem} The type of item returned by the search operation.
 */
 class GroupedFindItemsResults<TItem extends Item> {
    /**
     * Gets the total number of items matching the search criteria available in the searched folder.
     */
    TotalCount: number;
    /**
     * Gets the offset that should be used with ItemView to retrieve the next page of items in a FindItems operation.
     */
    NextPageOffset: number;
    /**
     * Gets a value indicating whether more items corresponding to the search criteria are available in the searched folder.
     */
    MoreAvailable: boolean;
    /**
     * Gets the item groups returned by the search operation.
     */
    readonly ItemGroups: ItemGroup<TItem>[];
    GetEnumerator(): any;
}
/**
 * Represents grouping options in item search operations.
 *
 * @sealed
 */
 class Grouping implements ISelfValidate {
    /**
     * Gets or sets the sort direction.
     */
    SortDirection: SortDirection;
    /**
     * Gets or sets the property to group on.
     */
    GroupOn: PropertyDefinitionBase;
    /**
     * Gets or sets the property to aggregate on.
     */
    AggregateOn: PropertyDefinitionBase;
    /**
     * Gets or sets the types of aggregate to calculate.
     */
    AggregateType: AggregateType;
    /** no need for setter getter */
    /**
     * Initializes a new instance of the **Grouping** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **Grouping** class.
     *
     * @param   {PropertyDefinitionBase}   groupOn         The property to group on.
     * @param   {SortDirection}   sortDirection   The sort direction.
     * @param   {PropertyDefinitionBase}   aggregateOn     The property to aggregate on.
     * @param   {AggregateType}   aggregateType   The type of aggregate to calculate.
     */
    constructor(groupOn: PropertyDefinitionBase, sortDirection: SortDirection, aggregateOn: PropertyDefinitionBase, aggregateType: AggregateType);
    /**
     * Implements ISelfValidate.Validate. Validates this grouping.
     */
    Validate(): void;
}
 class ItemGroup<TItem extends Item> {
    GroupIndex: string;
    Items: TItem[];
    constructor(groupIndex: string, items: TItem[]);
}
/**
 * Represents the view settings in a folder search operation.
 *
 * @sealed
 */
 class ItemView extends PagedView {
    /**
     * Gets or sets the search traversal mode. Defaults to ItemTraversal.Shallow.
     */
    Traversal: ItemTraversal;
    /**
     * Gets the properties against which the returned items should be ordered.
     */
    readonly OrderBy: OrderByCollection;
    /**
     * Initializes a new instance of the **ItemView** class.
     *
     * @param   {number}   pageSize          The maximum number of elements the search operation should return.
     */
    constructor(pageSize: number);
    /**
     * Initializes a new instance of the **ItemView** class.
     *
     * @param   {number}   pageSize          The maximum number of elements the search operation should return.
     * @param   {number}   offset            The offset of the view from the base point.
     */
    constructor(pageSize: number, offset: number);
    /**
     * Initializes a new instance of the **ItemView** class.
     *
     * @param   {number}   pageSize          The maximum number of elements the search operation should return.
     * @param   {number}   offset            The offset of the view from the base point.
     * @param   {number}   offsetBasePoint   The base point of the offset.
     */
    constructor(pageSize: number, offset: number, offsetBasePoint: OffsetBasePoint);
}
 type PropertyDefinitionSortDirectionPair = KeyValuePair<PropertyDefinitionBase, SortDirection>;
/**
 * Represents an ordered collection of property definitions qualified with a sort direction.
 *
 * @sealed
 */
 class OrderByCollection implements IEnumerable<PropertyDefinitionSortDirectionPair> {
    /**
     * Gets the number of elements contained in the collection.
     */
    readonly Count: number;
    /**
     * Gets the element at the specified index from the collection.
     *
     * @param   {number}   index   Index.
     */
    _getItem(index: number): PropertyDefinitionSortDirectionPair;
    /**
     * Adds the specified property definition / sort direction pair to the collection.
     *
     * @param   {PropertyDefinitionBase}    propertyDefinition   The property definition.
     * @param   {SortDirection}             sortDirection        The sort direction.
     */
    Add(propertyDefinition: PropertyDefinitionBase, sortDirection: SortDirection): void;
    /**
     * Removes all elements from the collection.
     */
    Clear(): void;
    /**
     *  Returns an enumerator that iterates through the collection. this case this.propDefSortOrderPairList
     */
    GetEnumerator(): PropertyDefinitionSortDirectionPair[];
    /**
     * Tries to get the value for a property definition in the collection.
     *
     * @param   {PropertyDefinitionBase}    propertyDefinition   The property definition.
     * @param   {IOutParam<SortDirection>}  sortDirection        The sort direction.
     * @return  {boolean}                   True if collection contains property definition, otherwise false.
     */
    TryGetValue(propertyDefinition: PropertyDefinitionBase, sortDirection: IOutParam<SortDirection>): boolean;
}
/**
 * Represents a view settings that support paging in a search operation.
 */
 abstract class PagedView extends ViewBase {
    /**
     * The maximum number of items or folders the search operation should return.
     */
    PageSize: number;
    /**
     * Gets or sets the base point of the offset.
     */
    OffsetBasePoint: OffsetBasePoint;
    /**
     * Gets or sets the offset.
     */
    Offset: number;
    /**
     * Initializes a new instance of the **PagedView** class.
     *
     * @param   {number}   pageSize          The maximum number of elements the search operation should return.
     */
    constructor(pageSize: number);
    /**
     * Initializes a new instance of the **PagedView** class.
     *
     * @param   {number}   pageSize          The maximum number of elements the search operation should return.
     * @param   {number}   offset            The offset of the view from the base point.
     */
    constructor(pageSize: number, offset: number);
    /**
     * Initializes a new instance of the **PagedView** class.
     *
     * @param   {number}   pageSize          The maximum number of elements the search operation should return.
     * @param   {number}   offset            The offset of the view from the base point.
     * @param   {number}   offsetBasePoint   The base point of the offset.
     */
    constructor(pageSize: number, offset: number, offsetBasePoint: OffsetBasePoint);
}
/**
 * Represents the view settings in a folder search operation.
 *
 * @sealed
 */
 class SeekToConditionItemView extends ViewBase {
    /**
     * The maximum number of items or folders the search operation should return.
     */
    PageSize: number;
    /**
     * Gets or sets the base point of the offset.
     */
    OffsetBasePoint: OffsetBasePoint;
    /**
     * Gets or sets the condition for seek.
     * Available search filter classes include SearchFilter.IsEqualTo, SearchFilter.ContainsSubstring and SearchFilter.SearchFilterCollection.
     * If SearchFilter is null, no search filters are applied.
     */
    Condition: SearchFilter;
    /**
     * Gets or sets the search traversal mode. Defaults to ItemTraversal.Shallow.
     */
    Traversal: ItemTraversal;
    /**
     * Gets the properties against which the returned items should be ordered.
     */
    readonly OrderBy: OrderByCollection;
    /**
     * Initializes a new instance of the **SeekToConditionItemView** class.
     *
     * @param   {SearchFilter}	condition         Condition to be used when seeking.
     * @param   {number}		pageSize          The maximum number of elements the search operation should return.
     */
    constructor(condition: SearchFilter, pageSize: number);
    /**
     * Initializes a new instance of the **SeekToConditionItemView** class.
     *
     * @param   {SearchFilter}   	condition         Condition to be used when seeking.
     * @param   {number}   			pageSize          The maximum number of elements the search operation should return.
     * @param   {OffsetBasePoint}   offsetBasePoint   The base point of the offset.
     */
    constructor(condition: SearchFilter, pageSize: number, offsetBasePoint: OffsetBasePoint);
}
/**
 * Represents the base view class for search operations.
 */
 abstract class ViewBase {
    /**
     * Gets or sets the property set. PropertySet determines which properties will be loaded on found items. If PropertySet is null, all first class properties are loaded on found items.
     */
    PropertySet: PropertySet;
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
 * Represents a change as returned by a synchronization operation.
 */
 abstract class Change {
    /**
     * Gets the type of the change.
     */
    ChangeType: ChangeType;
}
/**
 * Represents a collection of changes as returned by a synchronization operation.
 *
 * @sealed
 * @typeparam	{TChange}	Type representing the type of change (e.g. FolderChange or ItemChange)
 */
 class ChangeCollection<TChange extends Change> implements IEnumerable<TChange> {
    ___typeGenerics: string[];
    /**
     * Gets the number of changes in the collection.
     */
    readonly Count: number;
    /**
     * Gets the SyncState blob returned by a synchronization operation.
     */
    SyncState: string;
    /**
     * Gets a value indicating whether the there are more changes to be synchronized from the server.
     */
    MoreChangesAvailable: boolean;
    /**
     * Gets an individual change from the change collection.
     *
     * @param   {number}   index   Zero-based index.
     * @return  {TChange}		An single change.
     */
    _getItem(index: number): TChange;
    /**
     *  Returns an enumerator that iterates through the collection. this case this.changes
     */
    GetEnumerator(): TChange[];
}
/**
 * Represents a change on a folder as returned by a synchronization operation.
 *
 * @sealed
 */
 class FolderChange extends Change {
    /**
     * Gets the folder the change applies to. Folder is null when ChangeType is equal to ChangeType.Delete. In that case, use the FolderId property to retrieve the Id of the folder that was deleted.
     */
    readonly Folder: Folder;
    /**
     * Gets the Id of the folder the change applies to.
     */
    readonly FolderId: FolderId;
}
/**
 * Represents a change on an item as returned by a synchronization operation.
 *
 * @sealed
 */
 class ItemChange extends Change {
    /**
     * Gets the item the change applies to. Item is null when ChangeType is equal to either ChangeType.Delete or ChangeType.ReadFlagChange. In those cases, use the ItemId property to retrieve the Id of the item that was deleted or whose IsRead property changed.
     */
    readonly Item: Item;
    /**
     * Gets the IsRead property for the item that the change applies to. IsRead is only valid when ChangeType is equal to ChangeType.ReadFlagChange.
     */
    IsRead: boolean;
    /**
     * Gets the Id of the item the change applies to.
     */
    readonly ItemId: ItemId;
}
 class TimeSpan {
    constructor(ms: number);
    constructor(duration: moment.DurationInputArg1 | moment.DurationInputObject);
    constructor(hours: number, minutes: number, seconds: any);
    constructor(days: number, hours: number, minutes: number, seconds: any);
    constructor(days: number, hours: number, minutes: number, seconds: number, milliseconds: any);
    humanize(withSuffix?: boolean): string;
    as(units: moment.unitOfTime.Base): number;
    readonly Milliseconds: number;
    readonly TotalMilliseconds: number;
    readonly Seconds: number;
    readonly TotalSeconds: number;
    readonly Minutes: number;
    readonly TotalMinutes: number;
    readonly Hours: number;
    readonly TotalHours: number;
    readonly Days: number;
    readonly TotalDays: number;
    readonly Months: number;
    readonly TotalMonths: number;
    readonly Years: number;
    readonly TotalYears: number;
    readonly Weeks: number;
    readonly Totalweeks: number;
    Add(num: number, unit: moment.unitOfTime.Base): TimeSpan;
    Add(ms: number): TimeSpan;
    Add(ts: TimeSpan): TimeSpan;
    Subtract(n: number, p: moment.unitOfTime.Base): TimeSpan;
    Subtract(n: number): TimeSpan;
    Subtract(d: TimeSpan): TimeSpan;
    ToISOString(): string;
    ToJSON(): string;
    static readonly Zero: TimeSpan;
    static readonly MaxValueTimeSpan: TimeSpan;
    static readonly MinValueTimeSpan: TimeSpan;
    static FromDays(value: number): TimeSpan;
    static FromHours(value: number): TimeSpan;
    static FromMilliseconds(value: number): TimeSpan;
    static FromMinutes(value: number): TimeSpan;
    static FromSeconds(value: number): TimeSpan;
    valueOf(): number;
    toString(): string;
}
/**
* TimeZoneInfo
*/
 class TimeZoneInfo {
    readonly Id: string;
    readonly IanaId: string;
    readonly DisplayName: string;
    readonly StandardName: string;
    readonly DaylightName: string;
    readonly BaseUtcOffset: TimeSpan;
    readonly SupportsDaylightSavingTime: boolean;
    static readonly Local: TimeZoneInfo;
    static readonly Utc: TimeZoneInfo;
    static ConvertTime(dateTime: DateTime, sourceTimeZone: TimeZoneInfo, destinationTimeZone: TimeZoneInfo): DateTime;
    static CreateCustomTimeZone(id: string, baseUtcOffset: TimeSpan, displayName: string, standardDisplayName: string): TimeZoneInfo;
    static CreateCustomTimeZone(id: string, baseUtcOffset: TimeSpan, displayName: string, standardDisplayName: string, daylightDisplayName: string, adjustmentRules: TimeZoneInfo.AdjustmentRule[]): TimeZoneInfo;
    static CreateCustomTimeZone(id: string, baseUtcOffset: TimeSpan, displayName: string, standardDisplayName: string, daylightDisplayName: string, adjustmentRules: TimeZoneInfo.AdjustmentRule[], disableDaylightSavingTime: boolean): TimeZoneInfo;
    static AddTimeZoneMapping(source: string, mappedTz: string): void;
    static FindSystemTimeZoneById(zoneName: string): TimeZoneInfo;
    static readonly ListWindowsTimeZones: () => string[];
    static GuessLocalTimeZone(): string;
    HasSameRules(other: TimeZoneInfo): boolean;
}
 module TimeZoneInfo {
    enum TimeZoneInfoOptions {
        None = 1,
        NoThrowOnInvalidTime = 2
    }
    class AdjustmentRule {
        readonly DateStart: DateTime;
        readonly DateEnd: DateTime;
        readonly DaylightDelta: TimeSpan;
        readonly DaylightTransitionStart: TransitionTime;
        readonly DaylightTransitionEnd: TransitionTime;
        Equals(other: AdjustmentRule): boolean;
        static CreateAdjustmentRule(dateStart: DateTime, dateEnd: DateTime, daylightDelta: TimeSpan, daylightTransitionStart: TransitionTime, daylightTransitionEnd: TransitionTime): AdjustmentRule;
    }
    class TransitionTime {
        readonly TimeOfDay: DateTime;
        readonly Month: number;
        readonly Week: number;
        readonly Day: number;
        readonly DayOfWeek: DayOfWeek;
        readonly IsFixedDateRule: boolean;
        Equals(other: TransitionTime): boolean;
        GetHashCode(): number;
        static CreateFixedDateRule(timeOfDay: DateTime, month: number, day: number): TransitionTime;
        static CreateFloatingDateRule(timeOfDay: DateTime, month: number, week: number, dayOfWeek: DayOfWeek): TransitionTime;
    }
} let TimeZoneMappingData: {
    "America/Aruba": string;
    "Europe/Copenhagen": string;
    "Europe/Brussels": string;
    "Africa/Tunis": string;
    "America/Pangnirtung": string;
    "Africa/Malabo": string;
    "America/Guyana": string;
    "W. Mongolia Standard Time": (string | number | boolean | string[])[];
    "Russia Time Zone 10": (string | number | boolean | string[])[];
    "Ekaterinburg Standard Time": (string | number | boolean | string[])[];
    "Australia/Lindeman": string;
    "Asia/Famagusta": string;
    "America/Mendoza": string;
    "Indian/Cocos": string;
    "America/North_Dakota/Beulah": string;
    "America/Los_Angeles": string;
    "Sakhalin Standard Time": (string | number | boolean | string[])[];
    "Altai Standard Time": (string | number | boolean | string[])[];
    "Pacific/Guam": string;
    "Pacific/Nauru": string;
    "Africa/Brazzaville": string;
    "Europe/Jersey": string;
    "Newfoundland Standard Time": (string | number | boolean | string[])[];
    "Europe/Vaduz": string;
    "Pacific/Ponape": string;
    "America/Indiana/Knox": string;
    "America/Argentina/Ushuaia": string;
    "Tasmania Standard Time": (string | number | boolean | string[])[];
    "Asia/Jakarta": string;
    "Europe/Vilnius": string;
    "Africa/Kigali": string;
    "America/St_Kitts": string;
    "Indian/Kerguelen": string;
    "Africa/Libreville": string;
    "West Pacific Standard Time": (string | number | boolean | string[])[];
    "Atlantic Standard Time": (string | number | boolean | string[])[];
    "W. Central Africa Standard Time": (string | number | boolean | string[])[];
    "Etc/GMT+8": string;
    "Atlantic/Faeroe": string;
    "America/Sitka": string;
    "UTC": (string | number | boolean | string[])[];
    "Fiji Standard Time": (string | number | boolean | string[])[];
    "Pacific/Kosrae": string;
    "West Asia Standard Time": (string | number | boolean | string[])[];
    "Europe/Belgrade": string;
    "Mid-Atlantic Standard Time": (string | number | boolean)[];
    "Magallanes Standard Time": (string | number | boolean)[];
    "Kamchatka Standard Time": (string | number | boolean)[];
    "America/Guatemala": string;
    "Asia/Singapore": string;
    "Indian/Mayotte": string;
    "Nepal Standard Time": (string | number | boolean | string[])[];
    "UTC-11": (string | number | boolean | string[])[];
    "Asia/Qatar": string;
    "Georgian Standard Time": (string | number | boolean | string[])[];
    "Europe/Simferopol": string;
    "Etc/GMT+10": string;
    "Australia/Adelaide": string;
    "America/Fort_Nelson": string;
    "Transbaikal Standard Time": (string | number | boolean | string[])[];
    "Aleutian Standard Time": (string | number | boolean | string[])[];
    "America/Cayman": string;
    "Pacific Standard Time (Mexico)": (string | number | boolean | string[])[];
    "America/Thule": string;
    "America/Puerto_Rico": string;
    "Asia/Dili": string;
    "Pacific/Kiritimati": string;
    "Europe/Ljubljana": string;
    "Europe/Tirane": string;
    "Etc/GMT-5": string;
    "Etc/GMT+9": string;
    "Europe/Gibraltar": string;
    "America/Manaus": string;
    "America/Argentina/San_Luis": string;
    "Venezuela Standard Time": (string | number | boolean | string[])[];
    "Cen. Australia Standard Time": (string | number | boolean | string[])[];
    "America/Guayaquil": string;
    "Afghanistan Standard Time": (string | number | boolean | string[])[];
    "Mauritius Standard Time": (string | number | boolean | string[])[];
    "New Zealand Standard Time": (string | number | boolean | string[])[];
    "US Mountain Standard Time": (string | number | boolean | string[])[];
    "Tokyo Standard Time": (string | number | boolean | string[])[];
    "Asia/Sakhalin": string;
    "Europe/Astrakhan": string;
    "America/Catamarca": string;
    "Africa/Lubumbashi": string;
    "America/Boise": string;
    "America/Glace_Bay": string;
    "America/Tegucigalpa": string;
    "America/Chicago": string;
    "Etc/GMT+6": string;
    "Antarctica/Macquarie": string;
    "Europe/Kirov": string;
    "America/Campo_Grande": string;
    "Indian/Mauritius": string;
    "America/La_Paz": string;
    "Russian Standard Time": (string | number | boolean | string[])[];
    "America/Miquelon": string;
    "Asia/Tbilisi": string;
    "Asia/Aden": string;
    "Asia/Tehran": string;
    "Asia/Colombo": string;
    "America/Lower_Princes": string;
    "Azores Standard Time": (string | number | boolean | string[])[];
    "America/Santo_Domingo": string;
    "Iran Standard Time": (string | number | boolean | string[])[];
    "Mountain Standard Time (Mexico)": (string | number | boolean | string[])[];
    "Central Europe Standard Time": (string | number | boolean | string[])[];
    "Asia/Beirut": string;
    "America/Denver": string;
    "America/Halifax": string;
    "America/Barbados": string;
    "Pacific/Noumea": string;
    "Jordan Standard Time": (string | number | boolean | string[])[];
    "Singapore Standard Time": (string | number | boolean | string[])[];
    "Pacific/Rarotonga": string;
    "Asia/Saigon": string;
    "Europe/Lisbon": string;
    "America/Jamaica": string;
    "Atlantic/Stanley": string;
    "Europe/Sarajevo": string;
    "Africa/Abidjan": string;
    "Europe/London": string;
    "Australia/Lord_Howe": string;
    "Africa/Kinshasa": string;
    "Africa/Accra": string;
    "India Standard Time": (string | number | boolean | string[])[];
    "Europe/Kiev": string;
    "America/Caracas": string;
    "Europe/Guernsey": string;
    "Africa/Nairobi": string;
    "Asia/Gaza": string;
    "America/Kentucky/Monticello": string;
    "Europe/Sofia": string;
    "America/Edmonton": string;
    "Asia/Almaty": string;
    "Asia/Anadyr": string;
    "Asia/Pontianak": string;
    "Europe/Madrid": string;
    "Asia/Kamchatka": string;
    "Atlantic/Bermuda": string;
    "Namibia Standard Time": (string | number | boolean | string[])[];
    "Pacific/Tarawa": string;
    "Montevideo Standard Time": (string | number | boolean | string[])[];
    "America/Costa_Rica": string;
    "Hawaiian Standard Time": (string | number | boolean | string[])[];
    "Asia/Calcutta": string;
    "Asia/Pyongyang": string;
    "Pacific/Palau": string;
    "America/Asuncion": string;
    "Sri Lanka Standard Time": (string | number | boolean | string[])[];
    "Asia/Dubai": string;
    "Mountain Standard Time": (string | number | boolean | string[])[];
    "America/Havana": string;
    "Asia/Jerusalem": string;
    "Pacific/Gambier": string;
    "America/Araguaina": string;
    "Pacific/Midway": string;
    "Asia/Manila": string;
    "MST7MDT": string;
    "Europe/Bucharest": string;
    "Asia/Baghdad": string;
    "Asia/Novokuznetsk": string;
    "Antarctica/DumontDUrville": string;
    "Africa/Blantyre": string;
    "Libya Standard Time": (string | number | boolean | string[])[];
    "Samoa Standard Time": (string | number | boolean | string[])[];
    "Pacific/Efate": string;
    "Europe/Volgograd": string;
    "America/Argentina/Tucuman": string;
    "America/St_Lucia": string;
    "Europe/Budapest": string;
    "Etc/GMT+1": string;
    "Asia/Nicosia": string;
    "Asia/Kuching": string;
    "America/Chihuahua": string;
    "Asia/Choibalsan": string;
    "Europe/Zagreb": string;
    "America/Martinique": string;
    "FLE Standard Time": (string | number | boolean | string[])[];
    "America/Swift_Current": string;
    "America/Hermosillo": string;
    "Etc/GMT-9": string;
    "America/Santarem": string;
    "Pacific/Fakaofo": string;
    "Greenwich Standard Time": (string | number | boolean | string[])[];
    "W. Australia Standard Time": (string | number | boolean | string[])[];
    "Pacific/Wake": string;
    "America/Merida": string;
    "America/Scoresbysund": string;
    "Asia/Barnaul": string;
    "Asia/Seoul": string;
    "America/Inuvik": string;
    "America/Rainy_River": string;
    "Pacific/Tahiti": string;
    "America/Iqaluit": string;
    "Europe/Moscow": string;
    "Korea Standard Time": (string | number | boolean | string[])[];
    "Paraguay Standard Time": (string | number | boolean | string[])[];
    "Asia/Riyadh": string;
    "Central European Standard Time": (string | number | boolean | string[])[];
    "Europe/Samara": string;
    "Central Standard Time (Mexico)": (string | number | boolean | string[])[];
    "America/Indiana/Winamac": string;
    "North Asia East Standard Time": (string | number | boolean | string[])[];
    "Asia/Yekaterinburg": string;
    "Africa/Addis_Ababa": string;
    "Haiti Standard Time": (string | number | boolean | string[])[];
    "Asia/Jayapura": string;
    "Etc/GMT-1": string;
    "Europe/Skopje": string;
    "America/Dominica": string;
    "Turks And Caicos Standard Time": (string | number | boolean | string[])[];
    "Pacific/Kwajalein": string;
    "Etc/GMT": string;
    "AUS Eastern Standard Time": (string | number | boolean | string[])[];
    "Antarctica/Vostok": string;
    "E. Europe Standard Time": (string | number | boolean | string[])[];
    "Pacific/Majuro": string;
    "CST6CDT": string;
    "Indian/Mahe": string;
    "America/Yellowknife": string;
    "Etc/GMT+5": string;
    "Marquesas Standard Time": (string | number | boolean | string[])[];
    "Atlantic/Madeira": string;
    "Pacific/Tongatapu": string;
    "Europe/Andorra": string;
    "America/Boa_Vista": string;
    "Europe/Vienna": string;
    "Asia/Muscat": string;
    "America/Winnipeg": string;
    "America/Nassau": string;
    "Asia/Aqtobe": string;
    "Antarctica/McMurdo": string;
    "Eastern Standard Time": (string | number | boolean | string[])[];
    "America/Anguilla": string;
    "Africa/Ouagadougou": string;
    "Etc/GMT-4": string;
    "Atlantic/Azores": string;
    "Europe/Mariehamn": string;
    "Pacific/Saipan": string;
    "Etc/UTC": string;
    "Australia/Currie": string;
    "America/Louisville": string;
    "E. Africa Standard Time": (string | number | boolean | string[])[];
    "E. South America Standard Time": (string | number | boolean | string[])[];
    "Europe/Uzhgorod": string;
    "America/El_Salvador": string;
    "Pacific/Johnston": string;
    "Syria Standard Time": (string | number | boolean | string[])[];
    "America/Toronto": string;
    "Asia/Bishkek": string;
    "Atlantic/Canary": string;
    "America/Dawson": string;
    "Bougainville Standard Time": (string | number | boolean | string[])[];
    "Alaskan Standard Time": (string | number | boolean | string[])[];
    "America/Curacao": string;
    "America/Eirunepe": string;
    "Asia/Ust-Nera": string;
    "SA Pacific Standard Time": (string | number | boolean | string[])[];
    "Africa/Lome": string;
    "Pacific/Pago_Pago": string;
    "America/Cambridge_Bay": string;
    "America/Indianapolis": string;
    "America/Indiana/Vevay": string;
    "Antarctica/Davis": string;
    "Asia/Srednekolymsk": string;
    "America/Bogota": string;
    "Europe/Saratov": string;
    "UTC+13": (string | number | boolean)[];
    "Europe/Vatican": string;
    "Belarus Standard Time": (string | number | boolean | string[])[];
    "Europe/Riga": string;
    "Arctic/Longyearbyen": string;
    "Asia/Tashkent": string;
    "America/Guadeloupe": string;
    "Africa/Conakry": string;
    "America/Port-au-Prince": string;
    "America/Belize": string;
    "South Africa Standard Time": (string | number | boolean | string[])[];
    "Europe/Warsaw": string;
    "Africa/Dakar": string;
    "UTC-08": (string | number | boolean | string[])[];
    "America/Vancouver": string;
    "Europe/Ulyanovsk": string;
    "Europe/Amsterdam": string;
    "Cuba Standard Time": (string | number | boolean | string[])[];
    "Asia/Baku": string;
    "Asia/Ulaanbaatar": string;
    "America/Argentina/Rio_Gallegos": string;
    "North Korea Standard Time": (string | number | boolean | string[])[];
    "Indian/Maldives": string;
    "SA Western Standard Time": (string | number | boolean | string[])[];
    "Central Pacific Standard Time": (string | number | boolean | string[])[];
    "America/Dawson_Creek": string;
    "Africa/Dar_es_Salaam": string;
    "America/Rankin_Inlet": string;
    "America/Antigua": string;
    "Asia/Thimphu": string;
    "Chatham Islands Standard Time": (string | number | boolean | string[])[];
    "America/North_Dakota/New_Salem": string;
    "America/Ojinaga": string;
    "Africa/Asmera": string;
    "Europe/San_Marino": string;
    "Pacific/Pitcairn": string;
    "Europe/Isle_of_Man": string;
    "North Asia Standard Time": (string | number | boolean | string[])[];
    "America/Danmarkshavn": string;
    "America/Mexico_City": string;
    "Africa/Banjul": string;
    "Europe/Zurich": string;
    "America/St_Johns": string;
    "Pacific/Apia": string;
    "Pacific/Niue": string;
    "Etc/GMT-3": string;
    "America/Fortaleza": string;
    "China Standard Time": (string | number | boolean | string[])[];
    "America/Mazatlan": string;
    "Asia/Samarkand": string;
    "America/Adak": string;
    "Russia Time Zone 3": (string | number | boolean | string[])[];
    "Taipei Standard Time": (string | number | boolean | string[])[];
    "America/Montreal": string;
    "Russia Time Zone 11": (string | number | boolean | string[])[];
    "Arabian Standard Time": (string | number | boolean | string[])[];
    "Asia/Oral": string;
    "Asia/Brunei": string;
    "Bangladesh Standard Time": (string | number | boolean | string[])[];
    "America/Bahia_Banderas": string;
    "Africa/Khartoum": string;
    "Asia/Hovd": string;
    "Antarctica/Mawson": string;
    "Africa/Maseru": string;
    "Asia/Aqtau": string;
    "Europe/Chisinau": string;
    "Africa/Douala": string;
    "Asia/Hong_Kong": string;
    "Africa/Ndjamena": string;
    "Indian/Reunion": string;
    "Asia/Krasnoyarsk": string;
    "America/Buenos_Aires": string;
    "America/Grand_Turk": string;
    "US Eastern Standard Time": (string | number | boolean | string[])[];
    "Etc/GMT-6": string;
    "Europe/Monaco": string;
    "W. Europe Standard Time": (string | number | boolean | string[])[];
    "America/Montevideo": string;
    "America/St_Thomas": string;
    "Africa/Monrovia": string;
    "Etc/GMT-8": string;
    "Saint Pierre Standard Time": (string | number | boolean | string[])[];
    "America/Coral_Harbour": string;
    "Africa/Djibouti": string;
    "Asia/Kabul": string;
    "America/Port_of_Spain": string;
    "Atlantic/Reykjavik": string;
    "Central Standard Time": (string | number | boolean | string[])[];
    "Australia/Melbourne": string;
    "Africa/Freetown": string;
    "Asia/Atyrau": string;
    "Africa/Lagos": string;
    "Europe/Helsinki": string;
    "Asia/Karachi": string;
    "America/Regina": string;
    "Tocantins Standard Time": (string | number | boolean | string[])[];
    "Antarctica/Rothera": string;
    "Etc/GMT+3": string;
    "Dateline Standard Time": (string | number | boolean | string[])[];
    "Australia/Sydney": string;
    "Etc/GMT+12": string;
    "PST8PDT": string;
    "Canada Central Standard Time": (string | number | boolean | string[])[];
    "Lord Howe Standard Time": (string | number | boolean | string[])[];
    "Europe/Busingen": string;
    "Turkey Standard Time": (string | number | boolean | string[])[];
    "Africa/Bamako": string;
    "America/Grenada": string;
    "America/Kralendijk": string;
    "America/Indiana/Petersburg": string;
    "Etc/GMT+4": string;
    "GTB Standard Time": (string | number | boolean | string[])[];
    "Asia/Vientiane": string;
    "Africa/Lusaka": string;
    "Europe/Oslo": string;
    "Australia/Hobart": string;
    "Central Asia Standard Time": (string | number | boolean | string[])[];
    "Etc/GMT+7": string;
    "Kaliningrad Standard Time": (string | number | boolean | string[])[];
    "Yakutsk Standard Time": (string | number | boolean | string[])[];
    "Caucasus Standard Time": (string | number | boolean | string[])[];
    "EST5EDT": string;
    "Egypt Standard Time": (string | number | boolean | string[])[];
    "Europe/Dublin": string;
    "Pacific/Norfolk": string;
    "Arabic Standard Time": (string | number | boolean | string[])[];
    "Antarctica/Casey": string;
    "America/Porto_Velho": string;
    "Pakistan Standard Time": (string | number | boolean | string[])[];
    "SE Asia Standard Time": (string | number | boolean | string[])[];
    "Asia/Hebron": string;
    "Africa/Windhoek": string;
    "SA Eastern Standard Time": (string | number | boolean | string[])[];
    "Asia/Tokyo": string;
    "Pacific/Honolulu": string;
    "Asia/Magadan": string;
    "Omsk Standard Time": (string | number | boolean | string[])[];
    "America/New_York": string;
    "Europe/Berlin": string;
    "Easter Island Standard Time": (string | number | boolean | string[])[];
    "Central America Standard Time": (string | number | boolean | string[])[];
    "N. Central Asia Standard Time": (string | number | boolean | string[])[];
    "Asia/Rangoon": string;
    "America/Argentina/La_Rioja": string;
    "Myanmar Standard Time": (string | number | boolean | string[])[];
    "Etc/GMT-12": string;
    "Africa/Juba": string;
    "Etc/GMT-11": string;
    "America/Yakutat": string;
    "Pacific/Port_Moresby": string;
    "Atlantic/South_Georgia": string;
    "Australia/Darwin": string;
    "America/Nipigon": string;
    "America/Panama": string;
    "America/Cordoba": string;
    "Europe/Stockholm": string;
    "America/Rio_Branco": string;
    "Europe/Prague": string;
    "Antarctica/Palmer": string;
    "America/Whitehorse": string;
    "Pacific/Enderbury": string;
    "UTC+12": (string | number | boolean | string[])[];
    "UTC-09": (string | number | boolean | string[])[];
    "AUS Central Standard Time": (string | number | boolean | string[])[];
    "Line Islands Standard Time": (string | number | boolean | string[])[];
    "Africa/Mbabane": string;
    "Asia/Dushanbe": string;
    "America/Indiana/Marengo": string;
    "America/Punta_Arenas": string;
    "America/Maceio": string;
    "America/Menominee": string;
    "America/Anchorage": string;
    "Norfolk Standard Time": (string | number | boolean | string[])[];
    "America/Monterrey": string;
    "America/Paramaribo": string;
    "Africa/Gaborone": string;
    "Morocco Standard Time": (string | number | boolean | string[])[];
    "Australia/Brisbane": string;
    "West Bank Standard Time": (string | number | boolean | string[])[];
    "America/St_Barthelemy": string;
    "America/Montserrat": string;
    "America/St_Vincent": string;
    "America/Goose_Bay": string;
    "America/Argentina/Salta": string;
    "Europe/Malta": string;
    "Australia/Perth": string;
    "Azerbaijan Standard Time": (string | number | boolean | string[])[];
    "Asia/Katmandu": string;
    "Pacific/Bougainville": string;
    "Asia/Phnom_Penh": string;
    "Africa/Porto-Novo": string;
    "America/Tortola": string;
    "Tomsk Standard Time": (string | number | boolean | string[])[];
    "Romance Standard Time": (string | number | boolean | string[])[];
    "America/Matamoros": string;
    "America/Bahia": string;
    "Indian/Chagos": string;
    "America/Godthab": string;
    "Africa/Luanda": string;
    "America/Resolute": string;
    "Asia/Omsk": string;
    "Indian/Christmas": string;
    "Africa/El_Aaiun": string;
    "America/Metlakatla": string;
    "Europe/Athens": string;
    "Asia/Kuala_Lumpur": string;
    "Europe/Zaporozhye": string;
    "Asia/Khandyga": string;
    "Arab Standard Time": (string | number | boolean | string[])[];
    "America/Moncton": string;
    "Europe/Bratislava": string;
    "Etc/GMT-2": string;
    "Antarctica/Syowa": string;
    "Etc/GMT+11": string;
    "America/Argentina/San_Juan": string;
    "Asia/Ashgabat": string;
    "Indian/Comoro": string;
    "Asia/Shanghai": string;
    "Asia/Yakutsk": string;
    "Aus Central W. Standard Time": (string | number | boolean | string[])[];
    "America/Managua": string;
    "Africa/Nouakchott": string;
    "America/North_Dakota/Center": string;
    "Africa/Algiers": string;
    "Europe/Rome": string;
    "Pacific/Wallis": string;
    "Europe/Tallinn": string;
    "Australia/Broken_Hill": string;
    "Etc/GMT-14": string;
    "Africa/Casablanca": string;
    "Pacific Standard Time": (string | number | boolean | string[])[];
    "Pacific/Galapagos": string;
    "Africa/Bissau": string;
    "Pacific/Fiji": string;
    "Asia/Kuwait": string;
    "America/Cuiaba": string;
    "Pacific/Funafuti": string;
    "Etc/GMT-7": string;
    "Africa/Kampala": string;
    "Europe/Istanbul": string;
    "America/Thunder_Bay": string;
    "America/Creston": string;
    "Pacific/Easter": string;
    "Middle East Standard Time": (string | number | boolean | string[])[];
    "America/Detroit": string;
    "America/Cancun": string;
    "Asia/Macau": string;
    "Eastern Standard Time (Mexico)": (string | number | boolean | string[])[];
    "America/Indiana/Vincennes": string;
    "Asia/Bahrain": string;
    "Argentina Standard Time": (string | number | boolean | string[])[];
    "Asia/Irkutsk": string;
    "Asia/Novosibirsk": string;
    "America/Noronha": string;
    "Africa/Maputo": string;
    "America/Sao_Paulo": string;
    "Europe/Podgorica": string;
    "Etc/GMT+2": string;
    "Pacific/Marquesas": string;
    "America/Blanc-Sablon": string;
    "Asia/Yerevan": string;
    "Atlantic/Cape_Verde": string;
    "Pacific/Auckland": string;
    "America/Phoenix": string;
    "Pacific/Truk": string;
    "Greenland Standard Time": (string | number | boolean | string[])[];
    "Africa/Mogadishu": string;
    "Pacific SA Standard Time": (string | number | boolean | string[])[];
    "Asia/Urumqi": string;
    "Asia/Chita": string;
    "America/Lima": string;
    "Australia/Eucla": string;
    "Asia/Damascus": string;
    "Europe/Minsk": string;
    "Africa/Bujumbura": string;
    "Asia/Makassar": string;
    "Saratov Standard Time": (string | number | boolean)[];
    "Ulaanbaatar Standard Time": (string | number | boolean | string[])[];
    "Asia/Amman": string;
    "Tonga Standard Time": (string | number | boolean | string[])[];
    "Atlantic/St_Helena": string;
    "America/Santiago": string;
    "UTC-02": (string | number | boolean | string[])[];
    "Europe/Luxembourg": string;
    "Africa/Cairo": string;
    "America/Recife": string;
    "America/Indiana/Tell_City": string;
    "Africa/Niamey": string;
    "America/Juneau": string;
    "Asia/Qyzylorda": string;
    "Asia/Bangkok": string;
    "Magadan Standard Time": (string | number | boolean | string[])[];
    "Africa/Johannesburg": string;
    "America/Santa_Isabel": string;
    "Astrakhan Standard Time": (string | number | boolean | string[])[];
    "America/Cayenne": string;
    "Africa/Tripoli": string;
    "Africa/Bangui": string;
    "Asia/Tomsk": string;
    "Central Brazilian Standard Time": (string | number | boolean | string[])[];
    "Africa/Harare": string;
    "Europe/Kaliningrad": string;
    "Israel Standard Time": (string | number | boolean | string[])[];
    "E. Australia Standard Time": (string | number | boolean | string[])[];
    "America/Marigot": string;
    "Asia/Dhaka": string;
    "Etc/GMT-10": string;
    "Europe/Paris": string;
    "America/Nome": string;
    "America/Belem": string;
    "Africa/Sao_Tome": string;
    "Asia/Taipei": string;
    "Pacific/Chatham": string;
    "Asia/Vladivostok": string;
    "Vladivostok Standard Time": (string | number | boolean | string[])[];
    "America/Tijuana": string;
    "Etc/GMT-13": string;
    "Pacific/Guadalcanal": string;
    "Indian/Antananarivo": string;
    "Africa/Ceuta": string;
    "America/Jujuy": string;
    "Cape Verde Standard Time": (string | number | boolean | string[])[];
    "GMT Standard Time": (string | number | boolean | string[])[];
    "Bahia Standard Time": (string | number | boolean | string[])[];
};
 let CustomTimeZoneMappingData: {
    'tzone://Microsoft/Utc': string;
};
 class PhoneCall extends ComplexProperty {
    State: PhoneCallState;
    ConnectionFailureCause: ConnectionFailureCause;
    SIPResponseText: string;
    SIPResponseCode: number;
    Disconnect(): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
    Refresh(): any;
}
 class PhoneCallId extends ComplexProperty {
    Id: string;
    InternalToJson(service: ExchangeService): any;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any;
}
 class UnifiedMessaging {
    constructor(service: ExchangeService);
    DisconnectPhoneCall(id: PhoneCallId): any;
    GetPhoneCallInformation(id: PhoneCallId): PhoneCall;
    PlayOnPhone(itemId: ItemId, dialString: string): PhoneCall;
}
/**
* Uri: c# uri shim for js
*/
 class Uri {
    /**returns string url component, no transformations yet */
    readonly AbsoluteUri: string;
    readonly Host: string;
    readonly Scheme: string;
    constructor(url: string);
    ToString(): string;
    toString(): string;
    static ParseString(url: string): ParsedUrl;
    static UriSchemeHttp: string;
    static UriSchemeHttps: string;
}/**
 * Default implementation of XHRApi using fetch
 */
 class XHRDefault implements IXHRApi {
    static FetchStream: typeof FetchStream;
    static fetchUrl: typeof fetchUrl;
    static defaultOptions: FetchOptions;
    fetchOptions: FetchOptions;
    xhr(xhroptions: IXHROptions, progressDelegate?: (progressData: IXHRProgress) => void): Promise<XMLHttpRequest>;
    xhrStream(xhroptions: IXHROptions, progressDelegate: (progressData: IXHRProgress) => void): Promise<XMLHttpRequest>;
    disconnect(): void;
    readonly apiName: string;
    constructor(fetchOptions?: FetchOptions);
}
export interface xFetchOptions {
    /** how many redirects allowed, defaults to 10 */
    maxRedirects: number;
    /** set to true if redirects are not allowed, defaults to false */
    disableRedirects: boolean;
    /** optional header fields, in the form of {'Header-Field':'value'} */
    headers: {
        [key: string]: (any);
    };
    /** maximum allowd length for the file, the remainder is cut off. Defaults to Infinity */
    maxResponseLength: number;
    /** defaults to GET */
    method: string;
    /** request body */
    payload: string;
    /** set to false, to disable content gzipping, needed for Node v0.5.9 which has buggy zlib */
    disableGzip: boolean;
    /** an array of cookie definitions in the form of ['name=val'] */
    cookies: any;
    /** for sharing cookies between requests, see below */
    cookieJar: any;
    /** valid for fetchUrl */
    outputEncoding: string;
    /** valid for fetchUrl, set to true to disable automatic charset decoding to utf-8 */
    disableDecoding: boolean;
    /** valid for fetchUrl, set input encoding */
    overrideCharset: string;
    /** use high performance asyncronous DNS resolution based on c-ares instead of a thread pool calling getaddrinfo(3) */
    asyncDnsLoookup: boolean;
    /** set a timeout in ms */
    timeout: number;
    /** pass-through http.request agent parameter for https */
    agentHttps: any;
    /** pass-through http.request agent parameter for http */
    agentHttp: any;
    /** pass-through http.request agent parameter as fallback, if agentHttps or agentHttp are not specified */
    agent: any;
    /** whether to reject self-signed certificates (true, default behavior), or ignore and allow them (false) */
    rejectUnauthorized: boolean;
    /** is the username for Basic auth */
    user: string;
    /** is the password for Basic auth */
    pass: string;
}
 class XHRFactory {
    static xhrHelper: IXHRApi;
    static readonly XHRApi: IXHRApi;
    static newXHRApi(): XHRDefault;
}
 class XHROutlook implements IXHRApi {
    xhr(xhroptions: IXHROptions, progressDelegate?: (progressData: IXHRProgress) => void): Promise<XMLHttpRequest>;
    xhrStream(xhroptions: IXHROptions, progressDelegate: (progressData: IXHRProgress) => void): Promise<XMLHttpRequest>;
    disconnect(): void;
    readonly apiName: string;
    constructor();
}
 function ConfigureForOutlook(): void;
}