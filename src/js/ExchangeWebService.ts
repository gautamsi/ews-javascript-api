
/**
 * BootStrap code. to initializes some class to avoid circular reference. 
 */


/** Promise type setup */
export { Promise } from "./Promise";

/** XHR setup */
export { IXHRApi, IXHROptions, IXHRProgress, } from "./Interfaces";
export { ConfigurationApi } from "./ConfigurationApi";
export { XHRFactory } from "./XHRFactory";

/**Schema Bootstrapping */
import { Schemas } from "./Core/ServiceObjects/Schemas/Schemas";
import { ServiceObjectSchema } from "./Core/ServiceObjects/Schemas/ServiceObjectSchema";

import { ConversationSchema } from "./Core/ServiceObjects/Schemas/ConversationSchema"; // [ServiceObjectSchema]
Schemas.ConversationSchema = <any>ConversationSchema;

import { FolderSchema } from "./Core/ServiceObjects/Schemas/FolderSchema"; // [ServiceObjectSchema]
Schemas.FolderSchema = <any>FolderSchema;

import { SearchFolderSchema } from "./Core/ServiceObjects/Schemas/SearchFolderSchema"; // [FolderSchema]
Schemas.SearchFolderSchema = <any>SearchFolderSchema;

import { ItemSchema } from "./Core/ServiceObjects/Schemas/ItemSchema"; // [ServiceObjectSchema] AppointmentSchema
Schemas.ItemSchema = <any>ItemSchema;

import { AppointmentSchema } from "./Core/ServiceObjects/Schemas/AppointmentSchema"; // [ItemSchema]
Schemas.AppointmentSchema = <any>AppointmentSchema;

import { ContactSchema } from "./Core/ServiceObjects/Schemas/ContactSchema"; // [ItemSchema]
Schemas.ContactSchema = <any>ContactSchema;

import { ContactGroupSchema } from "./Core/ServiceObjects/Schemas/ContactGroupSchema"; // [ItemSchema] ContactSchema
Schemas.ContactGroupSchema = <any>ContactGroupSchema;

import { EmailMessageSchema } from "./Core/ServiceObjects/Schemas/EmailMessageSchema"; // [ItemSchema]
Schemas.EmailMessageSchema = <any>EmailMessageSchema;

import { MeetingMessageSchema } from "./Core/ServiceObjects/Schemas/MeetingMessageSchema"; // [EmailMessageSchema] AppointmentSchema
Schemas.MeetingMessageSchema = <any>MeetingMessageSchema;

import { MeetingCancellationSchema } from "./Core/ServiceObjects/Schemas/MeetingCancellationSchema"; // [MeetingMessageSchema] AppointmentSchema
Schemas.MeetingCancellationSchema = <any>MeetingCancellationSchema;

import { MeetingResponseSchema } from "./Core/ServiceObjects/Schemas/MeetingResponseSchema"; // [MeetingMessageSchema] AppointmentSchema
Schemas.MeetingResponseSchema = <any>MeetingResponseSchema;

import { MeetingRequestSchema } from "./Core/ServiceObjects/Schemas/MeetingRequestSchema"; // [MeetingMessageSchema] AppointmentSchema
Schemas.MeetingRequestSchema = <any>MeetingRequestSchema;

import { PostItemSchema } from "./Core/ServiceObjects/Schemas/PostItemSchema"; // [ItemSchema] EmailMessageSchema
Schemas.PostItemSchema = <any>PostItemSchema;

import { TaskSchema } from "./Core/ServiceObjects/Schemas/TaskSchema"; // [ItemSchema]
Schemas.TaskSchema = <any>TaskSchema;

import { ResponseObjectSchema } from "./Core/ServiceObjects/Schemas/ResponseObjectSchema"; // [ServiceObjectSchema]
Schemas.ResponseObjectSchema = <any>ResponseObjectSchema;

import { PostReplySchema } from "./Core/ServiceObjects/Schemas/PostReplySchema"; // [ServiceObjectSchema] ItemSchema, ResponseObjectSchema
Schemas.PostReplySchema = <any>PostReplySchema;

import { ResponseMessageSchema } from "./Core/ServiceObjects/Schemas/ResponseMessageSchema"; // [ServiceObjectSchema] ItemSchema, EmailMessageSchema, ResponseObjectSchema
Schemas.ResponseMessageSchema = <any>ResponseMessageSchema;

import { CancelMeetingMessageSchema } from "./Core/ServiceObjects/Schemas/CancelMeetingMessageSchema"; // [ServiceObjectSchema] EmailMessageSchema, ResponseObjectSchema
Schemas.CancelMeetingMessageSchema = <any>CancelMeetingMessageSchema;

import { CalendarResponseObjectSchema } from "./Core/ServiceObjects/Schemas/CalendarResponseObjectSchema"; // [ServiceObjectSchema] ItemSchema, EmailMessageSchema, ResponseObjectSchema
Schemas.CalendarResponseObjectSchema = <any>CalendarResponseObjectSchema;

export {
    ServiceObjectSchema, ConversationSchema, FolderSchema, SearchFolderSchema, ItemSchema, AppointmentSchema, ContactSchema, ContactGroupSchema, EmailMessageSchema,
    MeetingMessageSchema, MeetingCancellationSchema, MeetingResponseSchema, MeetingRequestSchema, PostItemSchema, TaskSchema, ResponseObjectSchema, PostReplySchema,
    ResponseMessageSchema, CancelMeetingMessageSchema, CalendarResponseObjectSchema
}

/**
 * Bootstrap typecontainer
 */
import { TypeContainer } from "./TypeContainer";
TypeContainer.ServiceObjectSchema = <any>ServiceObjectSchema;

import { ServiceObject } from "./Core/ServiceObjects/ServiceObject";
import { Folder } from "./Core/ServiceObjects/Folders/Folder";
import { CalendarFolder } from "./Core/ServiceObjects/Folders/CalendarFolder";
import { ContactsFolder } from "./Core/ServiceObjects/Folders/ContactsFolder";
import { SearchFolder } from "./Core/ServiceObjects/Folders/SearchFolder";
import { TasksFolder } from "./Core/ServiceObjects/Folders/TasksFolder";
import { Appointment } from "./Core/ServiceObjects/Items/Appointment";
import { Item } from "./Core/ServiceObjects/Items/Item";
import { ItemAttachment } from "./ComplexProperties/ItemAttachment";
import { ItemAttachmentOf } from "./ComplexProperties/ItemAttachmentOf";
import { MeetingCancellation } from "./Core/ServiceObjects/Items/MeetingCancellation";
import { MeetingRequest } from "./Core/ServiceObjects/Items/MeetingRequest";
import { MeetingResponse } from "./Core/ServiceObjects/Items/MeetingResponse";

import { ExchangeService } from "./Core/ExchangeService";

import { IndexedPropertyDefinition } from "./PropertyDefinitions/IndexedPropertyDefinition";
import { ExtendedPropertyDefinition } from "./PropertyDefinitions/ExtendedPropertyDefinition";

TypeContainer.ServiceObject = ServiceObject;
TypeContainer.Folder = Folder;
TypeContainer.CalendarFolder = CalendarFolder;
TypeContainer.ContactsFolder = ContactsFolder;
TypeContainer.SearchFolder = SearchFolder;
TypeContainer.TasksFolder = TasksFolder;
TypeContainer.Item = Item;
TypeContainer.Appointment = Appointment;
TypeContainer.MeetingRequest = MeetingRequest;
TypeContainer.MeetingResponse = MeetingResponse;
TypeContainer.MeetingCancellation = MeetingCancellation;
TypeContainer.ItemAttachment = ItemAttachment;
TypeContainer.ItemAttachmentOf = ItemAttachmentOf
TypeContainer.ExchangeService = ExchangeService;

TypeContainer.IndexedPropertyDefinition = IndexedPropertyDefinition;
TypeContainer.ExtendedPropertyDefinition = ExtendedPropertyDefinition;


export { ServiceObject, Folder, CalendarFolder, ContactsFolder, SearchFolder, TasksFolder }
export { Appointment, ExchangeService, Item, ItemAttachment, ItemAttachmentOf, MeetingCancellation }
export { MeetingRequest, MeetingResponse, IndexedPropertyDefinition, ExtendedPropertyDefinition }

/** TimeZoneTransitions */
export { TimeZoneTransition } from "./ComplexProperties/TimeZones/TimeZoneTransition";
import { AbsoluteDateTransition } from "./ComplexProperties/TimeZones/AbsoluteDateTransition";
import { AbsoluteDayOfMonthTransition } from "./ComplexProperties/TimeZones/AbsoluteDayOfMonthTransition";
//import {AbsoluteMonthTransition} from "./ComplexProperties/TimeZones/AbsoluteMonthTransition";
import { RelativeDayOfMonthTransition } from "./ComplexProperties/TimeZones/RelativeDayOfMonthTransition";
//export { TimeZoneDefinition } from "./ComplexProperties/TimeZones/TimeZoneDefinition";
export { TimeZonePeriod } from "./ComplexProperties/TimeZones/TimeZonePeriod";

TypeContainer.AbsoluteDateTransition = AbsoluteDateTransition;
TypeContainer.AbsoluteDayOfMonthTransition = AbsoluteDayOfMonthTransition;
TypeContainer.RelativeDayOfMonthTransition = RelativeDayOfMonthTransition;

export { AbsoluteDateTransition, AbsoluteDayOfMonthTransition, RelativeDayOfMonthTransition }


import { Recurrence } from "./ComplexProperties/Recurrence/Patterns/Recurrence";
import { DailyPattern } from "./ComplexProperties/Recurrence/Patterns/Recurrence.DailyPattern";
import { DailyRegenerationPattern } from "./ComplexProperties/Recurrence/Patterns/Recurrence.DailyRegenerationPattern";
import { IntervalPattern } from "./ComplexProperties/Recurrence/Patterns/Recurrence.IntervalPattern";
import { MonthlyPattern } from "./ComplexProperties/Recurrence/Patterns/Recurrence.MonthlyPattern";
import { MonthlyRegenerationPattern } from "./ComplexProperties/Recurrence/Patterns/Recurrence.MonthlyRegenerationPattern";
import { RelativeMonthlyPattern } from "./ComplexProperties/Recurrence/Patterns/Recurrence.RelativeMonthlyPattern";
import { RelativeYearlyPattern } from "./ComplexProperties/Recurrence/Patterns/Recurrence.RelativeYearlyPattern";
import { WeeklyPattern } from "./ComplexProperties/Recurrence/Patterns/Recurrence.WeeklyPattern";
import { WeeklyRegenerationPattern } from "./ComplexProperties/Recurrence/Patterns/Recurrence.WeeklyRegenerationPattern";
import { YearlyPattern } from "./ComplexProperties/Recurrence/Patterns/Recurrence.YearlyPattern";
import { YearlyRegenerationPattern } from "./ComplexProperties/Recurrence/Patterns/Recurrence.YearlyRegenerationPattern";

Recurrence.DailyPattern = DailyPattern;
Recurrence.DailyRegenerationPattern = DailyRegenerationPattern;
Recurrence.IntervalPattern = <any>IntervalPattern;
Recurrence.MonthlyPattern = MonthlyPattern;
Recurrence.MonthlyRegenerationPattern = MonthlyRegenerationPattern;
Recurrence.RelativeMonthlyPattern = RelativeMonthlyPattern;
Recurrence.RelativeYearlyPattern = RelativeYearlyPattern;
Recurrence.WeeklyPattern = WeeklyPattern;
Recurrence.WeeklyRegenerationPattern = WeeklyRegenerationPattern;
Recurrence.YearlyPattern = YearlyPattern;
Recurrence.YearlyRegenerationPattern = YearlyRegenerationPattern;

export { Recurrence }

import { SearchFilter } from "./Search/Filters/SearchFilter";
import { ContainsSubstring } from "./Search/Filters/SearchFilter.ContainsSubstring";
import { ExcludesBitmask } from "./Search/Filters/SearchFilter.ExcludesBitmask";
import { Exists } from "./Search/Filters/SearchFilter.Exists";
import { IsEqualTo } from "./Search/Filters/SearchFilter.IsEqualTo";
import { IsGreaterThan } from "./Search/Filters/SearchFilter.IsGreaterThan";
import { IsGreaterThanOrEqualTo } from "./Search/Filters/SearchFilter.IsGreaterThanOrEqualTo";
import { IsLessThan } from "./Search/Filters/SearchFilter.IsLessThan";
import { IsLessThanOrEqualTo } from "./Search/Filters/SearchFilter.IsLessThanOrEqualTo";
import { IsNotEqualTo } from "./Search/Filters/SearchFilter.IsNotEqualTo";
import { Not } from "./Search/Filters/SearchFilter.Not";
import { PropertyBasedFilter } from "./Search/Filters/SearchFilter.PropertyBasedFilter";
import { RelationalFilter } from "./Search/Filters/SearchFilter.RelationalFilter";
import { SearchFilterCollection } from "./Search/Filters/SearchFilter.SearchFilterCollection";

SearchFilter.ContainsSubstring = ContainsSubstring;
SearchFilter.ExcludesBitmask = ExcludesBitmask;
SearchFilter.Exists = Exists;
SearchFilter.IsEqualTo = IsEqualTo;
SearchFilter.IsGreaterThan = IsGreaterThan;
SearchFilter.IsGreaterThanOrEqualTo = IsGreaterThanOrEqualTo;
SearchFilter.IsLessThan = IsLessThan;
SearchFilter.IsLessThanOrEqualTo = IsLessThanOrEqualTo;
SearchFilter.IsNotEqualTo = IsNotEqualTo;
SearchFilter.Not = Not;
SearchFilter.PropertyBasedFilter = <any>PropertyBasedFilter;
SearchFilter.RelationalFilter = <any>RelationalFilter;
SearchFilter.SearchFilterCollection = SearchFilterCollection;

export { SearchFilter };

/**#endregion BootStrap code */


export { AbstractFolderIdWrapper } from "./Misc/AbstractFolderIdWrapper";
export { AbstractItemIdWrapper } from "./Misc/AbstractItemIdWrapper";
export { AcceptMeetingInvitationMessage } from "./Core/ServiceObjects/ResponseObjects/AcceptMeetingInvitationMessage";
export { AccountIsLockedException } from "./Exceptions/AccountIsLockedException";
export { AddDelegateRequest } from "./Core/Requests/AddDelegateRequest";
export { AddressEntity } from "./ComplexProperties/AddressEntity";
export { AddressEntityCollection } from "./ComplexProperties/AddressEntityCollection";
export { AffectedTaskOccurrence } from "./Enumerations/AffectedTaskOccurrence";
export { AggregateType } from "./Enumerations/AggregateType";

export { Dictionary } from "./AltDictionary";
export { AlternateId } from "./Misc/IdConversion/AlternateId";
export { AlternateIdBase } from "./Misc/IdConversion/AlternateIdBase";
export { AlternateMailbox } from "./Autodiscover/AlternateMailbox";
export { AlternateMailboxCollection } from "./Autodiscover/AlternateMailboxCollection";
export { AlternatePublicFolderId } from "./Misc/IdConversion/AlternatePublicFolderId";
export { AlternatePublicFolderItemId } from "./Misc/IdConversion/AlternatePublicFolderItemId";
export { ApplyConversationActionRequest } from "./Core/Requests/ApplyConversationActionRequest";


export { AppointmentOccurrenceId } from "./ComplexProperties/AppointmentOccurrenceId";
export { AppointmentType } from "./Enumerations/AppointmentType";
export { ApprovalRequestData } from "./ComplexProperties/ApprovalRequestData";
export { ArchiveItemRequest } from "./Core/Requests/ArchiveItemRequest";
export { ArchiveItemResponse } from "./Core/Responses/ArchiveItemResponse";
export { ArchiveTag } from "./ComplexProperties/ArchiveTag";
export { AsyncRequestResult } from "./Core/Requests/AsyncRequestResult";
export { Attachment } from "./ComplexProperties/Attachment";
export { AttachmentCollection } from "./ComplexProperties/AttachmentCollection";
export { AttachmentsPropertyDefinition } from "./PropertyDefinitions/AttachmentsPropertyDefinition";
export { Attendee } from "./ComplexProperties/Attendee";
export { AttendeeAvailability } from "./Core/Responses/AttendeeAvailability";
export { AttendeeCollection } from "./ComplexProperties/AttendeeCollection";
export { AttendeeInfo } from "./Misc/Availability/AttendeeInfo";
export { AutodiscoverDnsClient } from "./Autodiscover/AutodiscoverDnsClient";
export { AutodiscoverEndpoints } from "./Enumerations/AutodiscoverEndpoints";
export { AutodiscoverError } from "./Autodiscover/AutodiscoverError";
export { AutodiscoverErrorCode } from "./Enumerations/AutodiscoverErrorCode";
export { AutodiscoverLocalException } from "./Exceptions/AutodiscoverLocalException";
export { AutodiscoverRemoteException } from "./Exceptions/AutodiscoverRemoteException";
export { AutodiscoverRequest } from "./Autodiscover/Requests/AutodiscoverRequest";
export { AutodiscoverResponse } from "./Autodiscover/Responses/AutodiscoverResponse";
export { AutodiscoverResponseCollection } from "./Autodiscover/AutodiscoverResponseCollection";
export { AutodiscoverResponseException } from "./Exceptions/AutodiscoverResponseException";
export { AutodiscoverResponseType } from "./Enumerations/AutodiscoverResponseType";
export { AutodiscoverService } from "./Autodiscover/AutodiscoverService";

export { AutodiscoverRedirectionUrlValidationCallback } from "./Autodiscover/AutodiscoverServiceDelegates";
export { AvailabilityData } from "./Enumerations/AvailabilityData";
export { AvailabilityOptions } from "./Misc/Availability/AvailabilityOptions";
export { BasePropertySet } from "./Enumerations/BasePropertySet";

//export {BasicAuthModuleForUTF8} from "./Credentials/BasicAuthModuleForUTF8";
export { BatchServiceResponseException } from "./Exceptions/BatchServiceResponseException";
export { BodyType } from "./Enumerations/BodyType";
export { BoolPropertyDefinition } from "./PropertyDefinitions/BoolPropertyDefinition";
//export {BulkTransfer} from "./operations/BulkTransfer/BulkTransfer";
export { ByteArrayArray } from "./ComplexProperties/ByteArrayArray";
export { ByteArrayPropertyDefinition } from "./PropertyDefinitions/ByteArrayPropertyDefinition";
export { CalendarActionResults } from "./Misc/CalendarActionResults";

export { CalendarEvent } from "./ComplexProperties/Availability/CalendarEvent";
export { CalendarEventDetails } from "./ComplexProperties/Availability/CalendarEventDetails";
export { CalendarResponseMessage } from "./Core/ServiceObjects/ResponseObjects/CalendarResponseMessage";
export { CalendarResponseMessageBase } from "./Core/ServiceObjects/ResponseObjects/CalendarResponseMessageBase";
export { CalendarView } from "./Search/CalendarView";
export { CancelMeetingMessage } from "./Core/ServiceObjects/ResponseObjects/CancelMeetingMessage";
export { Change } from "./Sync/Change";
export { ChangeCollection } from "./Sync/ChangeCollection";
export { ChangeHighlights } from "./ComplexProperties/ChangeHighlights";
export { ChangeType } from "./Enumerations/ChangeType";
export { ClientAccessTokenRequest } from "./ComplexProperties/ClientAccessTokenRequest";
export { ClientAccessTokenType } from "./Enumerations/ClientAccessTokenType";
export { ClientApp } from "./ComplexProperties/ClientApp";
export { ClientAppMetadata } from "./ComplexProperties/ClientAppMetadata";
export { ClientCertificateCredentials } from "./Credentials/ClientCertificateCredentials";
export { ClientExtension } from "./ComplexProperties/ClientExtension";
export { ClientExtensionProvidedTo } from "./Enumerations/ClientExtensionProvidedTo";
export { ComparisonHelpers } from "./Autodiscover/ComparisonHelpers";
export { ComparisonMode } from "./Enumerations/ComparisonMode";
export { CompleteName } from "./ComplexProperties/CompleteName";
export { ComplexProperty } from "./ComplexProperties/ComplexProperty";
export { ComplexPropertyCollection } from "./ComplexProperties/ComplexPropertyCollection";
export { ComplexPropertyDefinition } from "./PropertyDefinitions/ComplexPropertyDefinition";
export { ComplexPropertyDefinitionBase } from "./PropertyDefinitions/ComplexPropertyDefinitionBase";
export { ConfigurationSettingsBase } from "./Autodiscover/ConfigurationSettings/ConfigurationSettingsBase";
export { Conflict } from "./ComplexProperties/Availability/Conflict";
export { ConflictResolutionMode } from "./Enumerations/ConflictResolutionMode";
export { ConflictType } from "./Enumerations/ConflictType";
export { ConnectingIdType } from "./Enumerations/ConnectingIdType";
export { ConnectionFailureCause } from "./Enumerations/ConnectionFailureCause";
//export {ConnectionStatus} from "./Enumerations/ConnectionStatus";
export { Contact } from "./Core/ServiceObjects/Items/Contact";
export { ContactEntity } from "./ComplexProperties/ContactEntity";
export { ContactEntityCollection } from "./ComplexProperties/ContactEntityCollection";
export { ContactGroup } from "./Core/ServiceObjects/Items/ContactGroup";
export { ContactPhoneEntity } from "./ComplexProperties/ContactPhoneEntity";
export { ContactPhoneEntityCollection } from "./ComplexProperties/ContactPhoneEntityCollection";
export { ContactSource } from "./Enumerations/ContactSource";
export { ContainedPropertyDefinition } from "./PropertyDefinitions/ContainedPropertyDefinition";
export { ContainmentMode } from "./Enumerations/ContainmentMode";
export { Conversation } from "./Core/ServiceObjects/Items/Conversation";
export { ConversationAction } from "./Misc/ConversationAction";
export { ConversationActionType } from "./Enumerations/ConversationActionType";
export { ConversationFlagStatus } from "./Enumerations/ConversationFlagStatus";
export { ConversationId } from "./ComplexProperties/ConversationId";
export { ConversationIndexedItemView } from "./Search/ConversationIndexedItemView";
export { ConversationNode } from "./ComplexProperties/ConversationNode";
export { ConversationNodeCollection } from "./ComplexProperties/ConversationNodeCollection";
export { ConversationQueryTraversal } from "./Enumerations/ConversationQueryTraversal";
export { ConversationRequest } from "./ComplexProperties/ConversationRequest";
export { ConversationResponse } from "./ComplexProperties/ConversationResponse";
export { ConversationSortOrder } from "./Enumerations/ConversationSortOrder";
export { ConvertIdRequest } from "./Core/Requests/ConvertIdRequest";
export { ConvertIdResponse } from "./Core/Responses/ConvertIdResponse";
export { CopyFolderRequest } from "./Core/Requests/CopyFolderRequest";
export { CopyItemRequest } from "./Core/Requests/CopyItemRequest";
export { CreateAttachmentException } from "./Exceptions/CreateAttachmentException";
export { CreateAttachmentRequest } from "./Core/Requests/CreateAttachmentRequest";
export { CreateAttachmentResponse } from "./Core/Responses/CreateAttachmentResponse";
export { CreateFolderRequest } from "./Core/Requests/CreateFolderRequest";
export { CreateFolderResponse } from "./Core/Responses/CreateFolderResponse";
export { CreateItemRequest } from "./Core/Requests/CreateItemRequest";
export { CreateItemRequestBase } from "./Core/Requests/CreateItemRequestBase";
export { CreateItemResponse } from "./Core/Responses/CreateItemResponse";
export { CreateItemResponseBase } from "./Core/Responses/CreateItemResponseBase";
export { CreateRequest } from "./Core/Requests/CreateRequest";
export { CreateResponseObjectRequest } from "./Core/Requests/CreateResponseObjectRequest";
export { CreateResponseObjectResponse } from "./Core/Responses/CreateResponseObjectResponse";
export { CreateRuleOperation } from "./ComplexProperties/CreateRuleOperation";
export { CreateUserConfigurationRequest } from "./Core/Requests/CreateUserConfigurationRequest";
export { DateTime, DateTimeKind } from "./DateTime";
export { TimeSpan } from "./TimeSpan";
export { TimeZoneInfo } from "./TimeZoneInfo";
export { DateTimePrecision } from "./Enumerations/DateTimePrecision";
export { DateTimePropertyDefinition } from "./PropertyDefinitions/DateTimePropertyDefinition";
export { DayOfTheWeek } from "./Enumerations/DayOfTheWeek";
export { DayOfTheWeekCollection } from "./ComplexProperties/Recurrence/DayOfTheWeekCollection";
export { DayOfTheWeekIndex } from "./Enumerations/DayOfTheWeekIndex";
export { DeclineMeetingInvitationMessage } from "./Core/ServiceObjects/ResponseObjects/DeclineMeetingInvitationMessage";
export { DefaultExtendedPropertySet } from "./Enumerations/DefaultExtendedPropertySet";
export { DelegateFolderPermissionLevel } from "./Enumerations/DelegateFolderPermissionLevel";
export { DelegateInformation } from "./Misc/DelegateInformation";
export { DelegateManagementRequestBase } from "./Core/Requests/DelegateManagementRequestBase";
export { DelegateManagementResponse } from "./Core/Responses/DelegateManagementResponse";
export { DelegatePermissions } from "./ComplexProperties/DelegatePermissions";
//export {DelegateTypes} from "./Misc/DelegateTypes";
export { DelegateUser } from "./ComplexProperties/DelegateUser";
export { DelegateUserResponse } from "./Core/Responses/DelegateUserResponse";
export { DeleteAttachmentException } from "./Exceptions/DeleteAttachmentException";
export { DeleteAttachmentRequest } from "./Core/Requests/DeleteAttachmentRequest";
export { DeleteAttachmentResponse } from "./Core/Responses/DeleteAttachmentResponse";
export { DeletedOccurrenceInfo } from "./ComplexProperties/DeletedOccurrenceInfo";
export { DeletedOccurrenceInfoCollection } from "./ComplexProperties/DeletedOccurrenceInfoCollection";
export { DeleteFolderRequest } from "./Core/Requests/DeleteFolderRequest";
export { DeleteItemRequest } from "./Core/Requests/DeleteItemRequest";
export { DeleteMode } from "./Enumerations/DeleteMode";
export { DeleteRequest } from "./Core/Requests/DeleteRequest";
export { DeleteRuleOperation } from "./ComplexProperties/DeleteRuleOperation";
export { DeleteUserConfigurationRequest } from "./Core/Requests/DeleteUserConfigurationRequest";
export { DictionaryEntryProperty } from "./ComplexProperties/DictionaryEntryProperty";
export { DictionaryProperty } from "./ComplexProperties/DictionaryProperty";
export { DirectoryHelper } from "./Autodiscover/DirectoryHelper";
export { DisableAppRequest } from "./Core/Requests/DisableAppRequest";
export { DisableAppResponse } from "./Core/Responses/DisableAppResponse";
export { DisableReasonType } from "./Enumerations/DisableReasonType";
export { DisconnectPhoneCallRequest } from "./Core/Requests/DisconnectPhoneCallRequest";
export { DiscoverySearchConfiguration } from "./MailboxSearch/DiscoverySearchConfiguration";
export { DnsClient } from "./Dns/DnsClient";
// export {DnsException} from "./Exceptions/DnsException";
// export {DnsNativeMethods} from "./Dns/DnsNativeMethods";
// export {DnsQueryOptions} from "./Enumerations/DnsQueryOptions";
export { DnsRecord } from "./Dns/DnsRecord";
export { DnsRecordHeader } from "./Dns/DnsRecordHeader";
export { DnsRecordType } from "./Enumerations/DnsRecordType";
export { DnsSrvRecord } from "./Dns/DnsSrvRecord";
export { DocumentSharingLocation } from "./Autodiscover/DocumentSharingLocation";
export { DocumentSharingLocationCollection } from "./Autodiscover/DocumentSharingLocationCollection";
export { DomainSettingError } from "./Autodiscover/DomainSettingError";
export { DomainSettingName } from "./Enumerations/DomainSettingName";

export { DoublePropertyDefinition } from "./PropertyDefinitions/DoublePropertyDefinition";
export { EffectiveRights } from "./Enumerations/EffectiveRights";
export { EffectiveRightsPropertyDefinition } from "./PropertyDefinitions/EffectiveRightsPropertyDefinition";
export { ElcFolderType } from "./Enumerations/ElcFolderType";
export { EmailAddress } from "./ComplexProperties/EmailAddress";
export { EmailAddressCollection } from "./ComplexProperties/EmailAddressCollection";
export { EmailAddressDictionary } from "./ComplexProperties/EmailAddressDictionary";
export { EmailAddressEntity } from "./ComplexProperties/EmailAddressEntity";
export { EmailAddressEntityCollection } from "./ComplexProperties/EmailAddressEntityCollection";
export { EmailAddressEntry } from "./ComplexProperties/EmailAddressEntry";
export { EmailAddressKey } from "./Enumerations/EmailAddressKey";
export { EmailMessage } from "./Core/ServiceObjects/Items/EmailMessage";

export { EmailPosition } from "./Enumerations/EmailPosition";
export { EmailUserEntity } from "./ComplexProperties/EmailUserEntity";
export { EmailUserEntityCollection } from "./ComplexProperties/EmailUserEntityCollection";
export { EmptyFolderRequest } from "./Core/Requests/EmptyFolderRequest";
export { EndDateRecurrenceRange } from "./ComplexProperties/Recurrence/Ranges/EndDateRecurrenceRange";
export { EnhancedLocation } from "./ComplexProperties/EnhancedLocation";
export { EntityExtractionResult } from "./ComplexProperties/EntityExtractionResult";
export { EventType } from "./Enumerations/EventType";
export { EwsLogging } from "./Core/EwsLogging";

export { EwsServiceJsonReader } from "./Core/EwsServiceJsonReader";
export { EwsServiceMultiResponseXmlReader } from "./Core/EwsServiceMultiResponseXmlReader";
export { EwsServiceXmlReader } from "./Core/EwsServiceXmlReader";
export { EwsServiceXmlWriter } from "./Core/EwsServiceXmlWriter";
export { EwsTraceListener } from "./Misc/EwsTraceListener";
export { EwsUtilities } from "./Core/EwsUtilities";

export { EwsXmlReader } from "./Core/EwsXmlReader";
export { Exception } from "./Exceptions/Exception";
export { ExchangeCredentials } from "./Credentials/ExchangeCredentials";

export { ExchangeServerInfo } from "./Core/ExchangeServerInfo";

export { ExchangeServiceBase } from "./Core/ExchangeServiceBase";
export { ExchangeVersion } from "./Enumerations/ExchangeVersion";

export { ExecuteDiagnosticMethodRequest } from "./Core/Requests/ExecuteDiagnosticMethodRequest";
export { ExecuteDiagnosticMethodResponse } from "./Core/Responses/ExecuteDiagnosticMethodResponse";
export { ExpandGroupRequest } from "./Core/Requests/ExpandGroupRequest";
export { ExpandGroupResponse } from "./Core/Responses/ExpandGroupResponse";
export { ExpandGroupResults } from "./Misc/ExpandGroupResults";
export { ExtendedAttribute } from "./MailboxSearch/ExtendedAttribute";
export { ExtendedProperty } from "./ComplexProperties/ExtendedProperty";
export { ExtendedPropertyCollection } from "./ComplexProperties/ExtendedPropertyCollection";
export { ExtensionInstallScope } from "./Enumerations/ExtensionInstallScope";
export { DOMParser, Convert, ArrayHelper, base64Helper, EnumHelper, StringHelper, TypeSystem, UriHelper, xml2JsObject } from "./ExtensionMethods";

export { ExtensionType } from "./Enumerations/ExtensionType";
export { ExtractedEntity } from "./ComplexProperties/ExtractedEntity";
export { FailedSearchMailbox } from "./MailboxSearch/FailedSearchMailbox";
export { FileAsMapping } from "./Enumerations/FileAsMapping";
export { FileAttachment } from "./ComplexProperties/FileAttachment";
export { FindConversationRequest } from "./Core/Requests/FindConversationRequest";
export { FindConversationResponse } from "./Core/Responses/FindConversationResponse";
export { FindConversationResults } from "./Search/FindConversationResults";
export { FindFolderRequest } from "./Core/Requests/FindFolderRequest";
export { FindFolderResponse } from "./Core/Responses/FindFolderResponse";
export { FindFoldersResults } from "./Search/FindFoldersResults";
export { FindItemRequest } from "./Core/Requests/FindItemRequest";
export { FindItemResponse } from "./Core/Responses/FindItemResponse";
export { FindItemsResults } from "./Search/FindItemsResults";
export { FindRequest } from "./Core/Requests/FindRequest";
export { Flag } from "./ComplexProperties/Flag";
export { FlaggedForAction } from "./Enumerations/FlaggedForAction";
export { FolderChange } from "./Sync/FolderChange";
export { FolderEvent } from "./Notifications/FolderEvent";
export { FolderId } from "./ComplexProperties/FolderId";

export { FolderIdCollection } from "./ComplexProperties/FolderIdCollection";
export { FolderIdWrapper } from "./Misc/FolderIdWrapper";
export { FolderIdWrapperList } from "./Misc/FolderIdWrapperList";
export { FolderInfo } from "./Core/ServiceObjects/Folders/FolderInfo";
export { FolderPermission } from "./ComplexProperties/FolderPermission";
export { FolderPermissionCollection } from "./ComplexProperties/FolderPermissionCollection";
export { FolderPermissionLevel } from "./Enumerations/FolderPermissionLevel";
export { FolderPermissionReadAccess } from "./Enumerations/FolderPermissionReadAccess";
export { FolderTraversal } from "./Enumerations/FolderTraversal";
export { FolderView } from "./Search/FolderView";
export { FolderWrapper } from "./Misc/FolderWrapper";
export { FreeBusyViewType } from "./Enumerations/FreeBusyViewType";
//export {FreeType} from "./Enumerations/FreeType"; - with DnsNativeMethods
export { GenericPropertyDefinition } from "./PropertyDefinitions/GenericPropertyDefinition";
export { GetAppManifestsRequest } from "./Core/Requests/GetAppManifestsRequest";
export { GetAppManifestsResponse } from "./Core/Responses/GetAppManifestsResponse";
export { GetAppMarketplaceUrlRequest } from "./Core/Requests/GetAppMarketplaceUrlRequest";
export { GetAppMarketplaceUrlResponse } from "./Core/Responses/GetAppMarketplaceUrlResponse";
export { GetAttachmentRequest } from "./Core/Requests/GetAttachmentRequest";
export { GetAttachmentResponse } from "./Core/Responses/GetAttachmentResponse";
export { GetClientAccessTokenRequest } from "./Core/Requests/GetClientAccessTokenRequest";
export { GetClientAccessTokenResponse } from "./Core/Responses/GetClientAccessTokenResponse";
export { GetClientExtensionRequest } from "./Core/Requests/GetClientExtensionRequest";
export { GetClientExtensionResponse } from "./Core/Responses/GetClientExtensionResponse";
export { GetConversationItemsRequest } from "./Core/Requests/GetConversationItemsRequest";
export { GetConversationItemsResponse } from "./Core/Responses/GetConversationItemsResponse";
export { GetDelegateRequest } from "./Core/Requests/GetDelegateRequest";
export { GetDelegateResponse } from "./Core/Responses/GetDelegateResponse";
export { GetDiscoverySearchConfigurationRequest } from "./Core/Requests/GetDiscoverySearchConfigurationRequest";
export { GetDiscoverySearchConfigurationResponse } from "./Core/Responses/GetDiscoverySearchConfigurationResponse";
export { GetDomainSettingsRequest } from "./Autodiscover/Requests/GetDomainSettingsRequest";
export { GetDomainSettingsResponse } from "./Autodiscover/Responses/GetDomainSettingsResponse";
export { GetDomainSettingsResponseCollection } from "./Autodiscover/Responses/GetDomainSettingsResponseCollection";
export { GetEncryptionConfigurationRequest } from "./Core/Requests/GetEncryptionConfigurationRequest";
export { GetEncryptionConfigurationResponse } from "./Core/Responses/GetEncryptionConfigurationResponse";
export { GetEventsRequest } from "./Core/Requests/GetEventsRequest";
export { GetEventsResponse } from "./Core/Responses/GetEventsResponse";
export { GetEventsResults } from "./Notifications/GetEventsResults";
export { GetFolderRequest } from "./Core/Requests/GetFolderRequest";
export { GetFolderRequestBase } from "./Core/Requests/GetFolderRequestBase";
export { GetFolderRequestForLoad } from "./Core/Requests/GetFolderRequestForLoad";
export { GetFolderResponse } from "./Core/Responses/GetFolderResponse";
export { GetHoldOnMailboxesRequest } from "./Core/Requests/GetHoldOnMailboxesRequest";
export { GetHoldOnMailboxesResponse } from "./Core/Responses/GetHoldOnMailboxesResponse";
export { GetInboxRulesRequest } from "./Core/Requests/GetInboxRulesRequest";
export { GetInboxRulesResponse } from "./Core/Responses/GetInboxRulesResponse";
export { GetItemRequest } from "./Core/Requests/GetItemRequest";
export { GetItemRequestBase } from "./Core/Requests/GetItemRequestBase";
export { GetItemRequestForLoad } from "./Core/Requests/GetItemRequestForLoad";
export { GetItemResponse } from "./Core/Responses/GetItemResponse";
export { GetNonIndexableItemDetailsRequest } from "./Core/Requests/GetNonIndexableItemDetailsRequest";
export { GetNonIndexableItemDetailsResponse } from "./Core/Responses/GetNonIndexableItemDetailsResponse";
export { GetNonIndexableItemStatisticsRequest } from "./Core/Requests/GetNonIndexableItemStatisticsRequest";
export { GetNonIndexableItemStatisticsResponse } from "./Core/Responses/GetNonIndexableItemStatisticsResponse";
export { GetPasswordExpirationDateRequest } from "./Core/Requests/GetPasswordExpirationDateRequest";
export { GetPasswordExpirationDateResponse } from "./Core/Responses/GetPasswordExpirationDateResponse";
export { GetPhoneCallRequest } from "./Core/Requests/GetPhoneCallRequest";
export { GetPhoneCallResponse } from "./Core/Responses/GetPhoneCallResponse";
export { GetRequest } from "./Core/Requests/GetRequest";
export { GetRoomListsRequest } from "./Core/Requests/GetRoomListsRequest";
export { GetRoomListsResponse } from "./Core/Responses/GetRoomListsResponse";
export { GetRoomsRequest } from "./Core/Requests/GetRoomsRequest";
export { GetRoomsResponse } from "./Core/Responses/GetRoomsResponse";
export { GetSearchableMailboxesRequest } from "./Core/Requests/GetSearchableMailboxesRequest";
export { GetSearchableMailboxesResponse } from "./Core/Responses/GetSearchableMailboxesResponse";
export { GetServerTimeZonesRequest } from "./Core/Requests/GetServerTimeZonesRequest";
export { GetServerTimeZonesResponse } from "./Core/Responses/GetServerTimeZonesResponse";
export { GetStreamingEventsRequest } from "./Core/Requests/GetStreamingEventsRequest";
export { GetStreamingEventsResponse } from "./Core/Responses/GetStreamingEventsResponse";
export { GetStreamingEventsResults } from "./Notifications/GetStreamingEventsResults";
export { GetUserAvailabilityRequest } from "./Core/Requests/GetUserAvailabilityRequest";
export { GetUserAvailabilityResults } from "./Misc/Availability/GetUserAvailabilityResults";
export { GetUserConfigurationRequest } from "./Core/Requests/GetUserConfigurationRequest";
export { GetUserConfigurationResponse } from "./Core/Responses/GetUserConfigurationResponse";
export { GetUserOofSettingsRequest } from "./Core/Requests/GetUserOofSettingsRequest";
export { GetUserOofSettingsResponse } from "./Core/Responses/GetUserOofSettingsResponse";
export { GetUserRetentionPolicyTagsRequest } from "./Core/Requests/GetUserRetentionPolicyTagsRequest";
export { GetUserRetentionPolicyTagsResponse } from "./Core/Responses/GetUserRetentionPolicyTagsResponse";
export { GetUserSettingsRequest } from "./Autodiscover/Requests/GetUserSettingsRequest";
export { GetUserSettingsResponse } from "./Autodiscover/Responses/GetUserSettingsResponse";
export { GetUserSettingsResponseCollection } from "./Autodiscover/Responses/GetUserSettingsResponseCollection";
export { GroupedFindItemsResults } from "./Search/GroupedFindItemsResults";
export { Grouping } from "./Search/Grouping";

export { GroupMember } from "./ComplexProperties/GroupMember";
export { GroupMemberCollection } from "./ComplexProperties/GroupMemberCollection";
export { GroupMemberPropertyDefinition } from "./PropertyDefinitions/GroupMemberPropertyDefinition";
export { Guid } from "./Guid";
export { HangingRequestDisconnectEventArgs } from "./Core/Requests/HangingRequestDisconnectEventArgs";
export { HangingRequestDisconnectReason } from "./Enumerations/HangingRequestDisconnectReason";
export { HangingServiceRequestBase } from "./Core/Requests/HangingServiceRequestBase";
//export {HangingTraceStream} from "./Misc/HangingTraceStream";
export { HighlightTerm } from "./ComplexProperties/HighlightTerm";
export { HoldAction } from "./Enumerations/HoldAction";
export { HoldStatus } from "./Enumerations/HoldStatus";
export { ICalendarActionProvider } from "./Interfaces/ICalendarActionProvider";
export { IconIndex } from "./Enumerations/IconIndex";
export { ICustomUpdateSerializer } from "./Interfaces/ICustomXmlUpdateSerializer";
export { IdFormat } from "./Enumerations/IdFormat";
//export {IDs} from "./Enumerations/IDs"; - resourcedictionary uses in c#
export { IEwsHttpWebRequest } from "./Interfaces/IEwsHttpWebRequest";
export { IEwsHttpWebRequestFactory } from "./Interfaces/IEwsHttpWebRequestFactory";
export { IEwsHttpWebResponse } from "./Interfaces/IEwsHttpWebResponse";
export { IFileAttachmentContentHandler } from "./Interfaces/IFileAttachmentContentHandler";
export { IJsonCollectionDeserializer } from "./Interfaces/IJsonCollectionDeserializer";
//export {IJSonSerializable} from "./Interfaces/IJSonSerializable";
export { ImAddressDictionary } from "./ComplexProperties/ImAddressDictionary";
export { ImAddressEntry } from "./ComplexProperties/ImAddressEntry";
export { ImAddressKey } from "./Enumerations/ImAddressKey";
export { ImpersonatedUserId } from "./Misc/ImpersonatedUserId";
export { Importance } from "./Enumerations/Importance";
export { InstallAppRequest } from "./Core/Requests/InstallAppRequest";
export { InstallAppResponse } from "./Core/Responses/InstallAppResponse";
export { InternetMessageHeader } from "./ComplexProperties/InternetMessageHeader";
export { InternetMessageHeaderCollection } from "./ComplexProperties/InternetMessageHeaderCollection";
export { IntPropertyDefinition } from "./PropertyDefinitions/IntPropertyDefinition";
export { IOutParam } from "./Interfaces/IOutParam";
export { IOwnedProperty } from "./Interfaces/IOwnedProperty";
export { IRefParam } from "./Interfaces/IRefParam";
export { ISearchStringProvider } from "./Interfaces/ISearchStringProvider";
export { ISelfValidate } from "./Interfaces/ISelfValidate";

export { ItemChange } from "./Sync/ItemChange";
export { ItemCollection } from "./ComplexProperties/ItemCollection";
export { ItemEvent } from "./Notifications/ItemEvent";
export { ItemFlagStatus } from "./Enumerations/ItemFlagStatus";
export { ItemGroup } from "./Search/ItemGroup";
export { ItemId } from "./ComplexProperties/ItemId";
export { ItemIdCollection } from "./ComplexProperties/ItemIdCollection";
export { ItemIdWrapper } from "./Misc/ItemIdWrapper";
export { ItemIdWrapperList } from "./Misc/ItemIdWrapperList";
export { ItemIndexError } from "./Enumerations/ItemIndexError";
export { ItemInfo } from "./Core/ServiceObjects/Items/ItemInfo";

export { ItemTraversal } from "./Enumerations/ItemTraversal";
export { ItemView } from "./Search/ItemView";

export { ItemWrapper } from "./Misc/ItemWrapper";
export { ITraceListener } from "./Interfaces/ITraceListener";
export { JsonDeserializationNotImplementedException } from "./Exceptions/JsonDeserializationNotImplementedException";
export { JsonNames } from "./Core/JsonNames";
export { JsonObject } from "./Core/JsonObject";
export { JsonParser } from "./Core/JsonParser";
export { JsonSerializationNotImplementedException } from "./Exceptions/JsonSerializationNotImplementedException";
export { JsonTokenizer } from "./Core/JsonTokenizer";
export { JsonTokenType } from "./Enumerations/JsonTokenType";
export { KeywordStatisticsSearchResult } from "./MailboxSearch/KeywordStatisticsSearchResult";
export { LazyMember } from "./Core/LazyMember";
export { LegacyAvailabilityTimeZone } from "./Misc/Availability/LegacyAvailabilityTimeZone";
export { LegacyAvailabilityTimeZoneTime } from "./Misc/Availability/LegacyAvailabilityTimeZoneTime";
export { LegacyFreeBusyStatus } from "./Enumerations/LegacyFreeBusyStatus";
export { ListValuePropertyDefinition } from "./PropertyDefinitions/ListValuePropertyDefinition";
export { LobbyBypass } from "./Enumerations/LobbyBypass";
export { LocationSource } from "./Enumerations/LocationSource";
export { LogicalOperator } from "./Enumerations/LogicalOperator";
export { Mailbox } from "./ComplexProperties/Mailbox";
export { MailboxHoldResult } from "./MailboxSearch/MailboxHoldResult";
export { MailboxHoldStatus } from "./MailboxSearch/MailboxHoldStatus";
export { MailboxQuery } from "./MailboxSearch/MailboxQuery";
export { MailboxSearchLocation } from "./Enumerations/MailboxSearchLocation";
export { MailboxSearchScope } from "./MailboxSearch/MailboxSearchScope";
export { MailboxSearchScopeType } from "./Enumerations/MailboxSearchScopeType";
export { MailboxStatisticsItem } from "./MailboxSearch/MailboxStatisticsItem";
export { MailboxType } from "./Enumerations/MailboxType";
//export {MailTips} from "./operations/MailTips/MailTips";
export { ManagedFolderInformation } from "./ComplexProperties/ManagedFolderInformation";
export { ManagementRoles } from "./Misc/ManagementRoles";
export { MapiPropertyType } from "./Enumerations/MapiPropertyType";
export { MapiTypeConverter } from "./Misc/MapiTypeConverter";
export { MapiTypeConverterMapEntry } from "./Misc/MapiTypeConverterMapEntry";
export { MarkAllItemsAsReadRequest } from "./Core/Requests/MarkAllItemsAsReadRequest";
export { MarkAsJunkRequest } from "./Core/Requests/MarkAsJunkRequest";
export { MarkAsJunkResponse } from "./Core/Responses/MarkAsJunkResponse";
export { MeetingAttendeeType } from "./Enumerations/MeetingAttendeeType";

export { MeetingMessage } from "./Core/ServiceObjects/Items/MeetingMessage";

export { MeetingRequestsDeliveryScope } from "./Enumerations/MeetingRequestsDeliveryScope";
export { MeetingRequestType } from "./Enumerations/MeetingRequestType";

export { MeetingResponseType } from "./Enumerations/MeetingResponseType";
export { MeetingSuggestion } from "./ComplexProperties/MeetingSuggestion";
export { MeetingSuggestionCollection } from "./ComplexProperties/MeetingSuggestionCollection";
export { MeetingTimeZone } from "./ComplexProperties/MeetingTimeZone";
export { MeetingTimeZonePropertyDefinition } from "./PropertyDefinitions/MeetingTimeZonePropertyDefinition";
export { MemberStatus } from "./Enumerations/MemberStatus";
export { MessageBody } from "./ComplexProperties/MessageBody";
export { MessageDisposition } from "./Enumerations/MessageDisposition";
//export {MessageTracking} from "./operations/MessageTracking/MessageTracking";
export { MimeContent } from "./ComplexProperties/MimeContent";
export { MimeContentBase } from "./ComplexProperties/MimeContentBase";
export { MimeContentUTF8 } from "./ComplexProperties/MimeContentUTF8";
export { MobilePhone } from "./Misc/MobilePhone";
export { Month } from "./Enumerations/Month";
export { MoveCopyFolderRequest } from "./Core/Requests/MoveCopyFolderRequest";
export { MoveCopyFolderResponse } from "./Core/Responses/MoveCopyFolderResponse";
export { MoveCopyItemRequest } from "./Core/Requests/MoveCopyItemRequest";
export { MoveCopyItemResponse } from "./Core/Responses/MoveCopyItemResponse";
export { MoveCopyRequest } from "./Core/Requests/MoveCopyRequest";
export { MoveFolderRequest } from "./Core/Requests/MoveFolderRequest";
export { MoveItemRequest } from "./Core/Requests/MoveItemRequest";
export { MultiResponseServiceRequest } from "./Core/Requests/MultiResponseServiceRequest";
export { NameResolution } from "./Misc/NameResolution";
export { NameResolutionCollection } from "./Misc/NameResolutionCollection";
export { NoEndRecurrenceRange } from "./ComplexProperties/Recurrence/Ranges/NoEndRecurrenceRange";
export { NonIndexableItem } from "./MailboxSearch/NonIndexableItem";
export { NonIndexableItemDetailsResult } from "./MailboxSearch/NonIndexableItemDetailsResult";
export { NonIndexableItemParameters, GetNonIndexableItemDetailsParameters, GetNonIndexableItemStatisticsParameters } from "./MailboxSearch/NonIndexableItemParameters";
export { NonIndexableItemStatistic } from "./MailboxSearch/NonIndexableItemStatistic";
export { NormalizedBody } from "./ComplexProperties/NormalizedBody";
export { NotificationEvent } from "./Notifications/NotificationEvent";
export { NotificationEventArgs } from "./Notifications/NotificationEventArgs";
export { NotificationGroup } from "./Notifications/NotificationGroup";
export { NumberedRecurrenceRange } from "./ComplexProperties/Recurrence/Ranges/NumberedRecurrenceRange";
export { OAuthCredentials } from "./Credentials/OAuthCredentials";
export { OccurrenceInfo } from "./ComplexProperties/OccurrenceInfo";
export { OccurrenceInfoCollection } from "./ComplexProperties/OccurrenceInfoCollection";
export { OffsetBasePoint } from "./Enumerations/OffsetBasePoint";
export { OnlineMeetingAccessLevel } from "./Enumerations/OnlineMeetingAccessLevel";
export { OnlineMeetingSettings } from "./ComplexProperties/OnlineMeetingSettings";
export { OofExternalAudience } from "./Enumerations/OofExternalAudience";
export { OofReply } from "./Misc/Availability/OofReply";
export { OofSettings } from "./ComplexProperties/Availability/OofSettings";
export { OofState } from "./Enumerations/OofState";
export { OrderByCollection } from "./Search/OrderByCollection";
export { OutlookAccount } from "./Autodiscover/ConfigurationSettings/Outlook/OutlookAccount";
export { OutlookConfigurationSettings } from "./Autodiscover/ConfigurationSettings/Outlook/OutlookConfigurationSettings";
export { OutlookProtocol } from "./Autodiscover/ConfigurationSettings/Outlook/OutlookProtocol";
export { OutlookProtocolType } from "./Enumerations/OutlookProtocolType";
export { OutlookUser } from "./Autodiscover/ConfigurationSettings/Outlook/OutlookUser";
export { PagedView } from "./Search/PagedView";
export { PartnerTokenCredentials } from "./Credentials/PartnerTokenCredentials";
//export {PermissionSetPropertyDefinition} from "./PropertyDefinitions/PermissionCollectionPropertyDefinition";
export { PermissionScope } from "./Enumerations/PermissionScope";
export { PermissionSetPropertyDefinition } from "./PropertyDefinitions/PermissionSetPropertyDefinition";
//export {Persona} from "./operations/Persona/Persona";
export { PersonaPostalAddress } from "./ComplexProperties/PersonaPostalAddress";
export { PhoneCall } from "./UnifiedMessaging/PhoneCall";
export { PhoneCallId } from "./UnifiedMessaging/PhoneCallId";
export { PhoneCallState } from "./Enumerations/PhoneCallState";
export { PhoneEntity } from "./ComplexProperties/PhoneEntity";
export { PhoneEntityCollection } from "./ComplexProperties/PhoneEntityCollection";
export { PhoneNumberDictionary } from "./ComplexProperties/PhoneNumberDictionary";
export { PhoneNumberEntry } from "./ComplexProperties/PhoneNumberEntry";
export { PhoneNumberKey } from "./Enumerations/PhoneNumberKey";
export { PhysicalAddressDictionary } from "./ComplexProperties/PhysicalAddressDictionary";
export { PhysicalAddressEntry } from "./ComplexProperties/PhysicalAddressEntry";
export { PhysicalAddressIndex } from "./Enumerations/PhysicalAddressIndex";
export { PhysicalAddressKey } from "./Enumerations/PhysicalAddressKey";
export { PlayOnPhoneRequest } from "./Core/Requests/PlayOnPhoneRequest";
export { PlayOnPhoneResponse } from "./Core/Responses/PlayOnPhoneResponse";
export { PolicyTag } from "./ComplexProperties/PolicyTag";
export { PostItem } from "./Core/ServiceObjects/Items/PostItem";
export { PostReply } from "./Core/ServiceObjects/ResponseObjects/PostReply";
export { Presenters } from "./Enumerations/Presenters";
export { PreviewItemBaseShape } from "./Enumerations/PreviewItemBaseShape";
export { PreviewItemMailbox } from "./MailboxSearch/PreviewItemMailbox";
export { PreviewItemResponseShape } from "./MailboxSearch/PreviewItemResponseShape";
export { PrivilegedLogonType } from "./Enumerations/PrivilegedLogonType";
export { PrivilegedUserId } from "./Misc/PrivilegedUserId";
export { PrivilegedUserIdBudgetType } from "./Enumerations/PrivilegedUserIdBudgetType";
export { PropertyBag } from "./Core/PropertyBag";
export { PropertyDefinition } from "./PropertyDefinitions/PropertyDefinition";
export { PropertyDefinitionBase } from "./PropertyDefinitions/PropertyDefinitionBase";
export { PropertyDefinitionFlags } from "./Enumerations/PropertyDefinitionFlags";
export { PropertyException } from "./Exceptions/PropertyException";
export { PropertySet } from "./Core/PropertySet";

export { ProtocolConnection } from "./Autodiscover/ProtocolConnection";
export { ProtocolConnectionCollection } from "./Autodiscover/ProtocolConnectionCollection";
export { PullSubscription } from "./Notifications/PullSubscription";
export { PushSubscription } from "./Notifications/PushSubscription";
export { RecurrencePropertyDefinition } from "./PropertyDefinitions/RecurrencePropertyDefinition";
export { RecurrenceRange } from "./ComplexProperties/Recurrence/Ranges/RecurrenceRange";
export { RecurringAppointmentMasterId } from "./ComplexProperties/RecurringAppointmentMasterId";
//export {Reminder} from "./operations/ExchangeMailboxData/Reminder";
export { RemoveDelegateRequest } from "./Core/Requests/RemoveDelegateRequest";
export { RemoveFromCalendar } from "./Core/ServiceObjects/ResponseObjects/RemoveFromCalendar";
export { RenderingMode } from "./Enumerations/RenderingMode";
export { ResolveNameSearchLocation } from "./Enumerations/ResolveNameSearchLocation";
export { ResolveNamesRequest } from "./Core/Requests/ResolveNamesRequest";
export { ResolveNamesResponse } from "./Core/Responses/ResolveNamesResponse";
export { ResponseActions } from "./Enumerations/ResponseActions";
export { ResponseMessage } from "./Core/ServiceObjects/ResponseObjects/ResponseMessage";
export { ResponseMessageType } from "./Enumerations/ResponseMessageType";
export { ResponseObject } from "./Core/ServiceObjects/ResponseObjects/ResponseObject";
export { ResponseObjectsPropertyDefinition } from "./PropertyDefinitions/ResponseObjectsPropertyDefinition";
export { RetentionActionType } from "./Enumerations/RetentionActionType";
export { RetentionPolicyTag } from "./Elc/RetentionPolicyTag";
export { RetentionTagBase } from "./ComplexProperties/RetentionTagBase";
export { RetentionType } from "./Enumerations/RetentionType";
export { Rule } from "./ComplexProperties/Rule";
export { RuleActions } from "./ComplexProperties/RuleActions";
export { RuleCollection } from "./ComplexProperties/RuleCollection";
export { RuleError } from "./ComplexProperties/RuleError";
export { RuleErrorCode } from "./Enumerations/RuleErrorCode";
export { RuleErrorCollection } from "./ComplexProperties/RuleErrorCollection";
export { RuleOperation } from "./ComplexProperties/RuleOperation";
export { RuleOperationError } from "./ComplexProperties/RuleOperationError";
export { RuleOperationErrorCollection } from "./ComplexProperties/RuleOperationErrorCollection";
export { RulePredicateDateRange } from "./ComplexProperties/RulePredicateDateRange";
export { RulePredicates } from "./ComplexProperties/RulePredicates";
export { RulePredicateSizeRange } from "./ComplexProperties/RulePredicateSizeRange";
export { RuleProperty } from "./Enumerations/RuleProperty";
//export {SafeXmlDocument} from "./Security/SafeXmlDocument";
export { SafeXmlFactory } from "./Security/SafeXmlFactory";
//export {SafeXmlSchema} from "./Security/SafeXmlSchema";
export { ScopedDateTimePropertyDefinition } from "./PropertyDefinitions/ScopedDateTimePropertyDefinition";
export { SearchableMailbox } from "./MailboxSearch/SearchableMailbox";
export { SearchFolderParameters } from "./ComplexProperties/SearchFolderParameters";
export { SearchFolderTraversal } from "./Enumerations/SearchFolderTraversal";
export { SearchMailboxesParameters } from "./MailboxSearch/SearchMailboxesParameters";
export { SearchMailboxesRequest } from "./Core/Requests/SearchMailboxesRequest";
export { SearchMailboxesResponse } from "./Core/Responses/SearchMailboxesResponse";
export { SearchMailboxesResult } from "./MailboxSearch/SearchMailboxesResult";
export { SearchPageDirection } from "./Enumerations/SearchPageDirection";
export { SearchPreviewItem } from "./MailboxSearch/SearchPreviewItem";
export { SearchRefinerItem } from "./MailboxSearch/SearchRefinerItem";
export { SearchResultType } from "./Enumerations/SearchResultType";
export { SecurityTimestamp } from "./Security/SecurityTimestamp";
export { SeekToConditionItemView } from "./Search/SeekToConditionItemView";
export { SendCancellationsMode } from "./Enumerations/SendCancellationsMode";
export { SendInvitationsMode } from "./Enumerations/SendInvitationsMode";
export { SendInvitationsOrCancellationsMode } from "./Enumerations/SendInvitationsOrCancellationsMode";
export { SendItemRequest } from "./Core/Requests/SendItemRequest";
export { SendPrompt } from "./Enumerations/SendPrompt";
export { Sensitivity } from "./Enumerations/Sensitivity";
export { ServerBusyException } from "./Exceptions/ServerBusyException";
//export {ServiceConfiguration} from "./operations/ServiceConfiguration/ServiceConfiguration";
export { ServiceError } from "./Enumerations/ServiceError";
export { ServiceErrorHandling } from "./Enumerations/ServiceErrorHandling";
export { ServiceId } from "./ComplexProperties/ServiceId";
export { ServiceJsonDeserializationException } from "./Exceptions/ServiceJsonDeserializationException";
export { ServiceLocalException } from "./Exceptions/ServiceLocalException";
export { ServiceObjectInfo } from "./Core/ServiceObjects/ServiceObjectInfo";
export { ServiceObjectPropertyDefinition } from "./PropertyDefinitions/ServiceObjectPropertyDefinition";
export { ServiceObjectPropertyException } from "./Exceptions/ServiceObjectPropertyException";
export { ServiceObjectType } from "./Enumerations/ServiceObjectType";
export { ServiceRemoteException } from "./Exceptions/ServiceRemoteException";
export { ServiceRequestBase } from "./Core/Requests/ServiceRequestBase";
export { ServiceRequestException } from "./Exceptions/ServiceRequestException";
export { ServiceResponse } from "./Core/Responses/ServiceResponse";
export { ServiceResponseCollection } from "./Core/Responses/ServiceResponseCollection";
export { ServiceResponseException } from "./Exceptions/ServiceResponseException";
export { ServiceResult } from "./Enumerations/ServiceResult";
export { ServiceValidationException } from "./Exceptions/ServiceValidationException";
export { ServiceVersionException } from "./Exceptions/ServiceVersionException";
export { ServiceXmlDeserializationException } from "./Exceptions/ServiceXmlDeserializationException";
export { ServiceXmlSerializationException } from "./Exceptions/ServiceXmlSerializationException";
export { SetClientExtensionAction } from "./ComplexProperties/SetClientExtensionAction";
export { SetClientExtensionActionId } from "./Enumerations/SetClientExtensionActionId";
export { SetClientExtensionRequest } from "./Core/Requests/SetClientExtensionRequest";
export { SetEncryptionConfigurationRequest } from "./Core/Requests/SetEncryptionConfigurationRequest";
export { SetEncryptionConfigurationResponse } from "./Core/Responses/SetEncryptionConfigurationResponse";
export { SetHoldOnMailboxesParameters } from "./MailboxSearch/SetHoldOnMailboxesParameters";
export { SetHoldOnMailboxesRequest } from "./Core/Requests/SetHoldOnMailboxesRequest";
export { SetHoldOnMailboxesResponse } from "./Core/Responses/SetHoldOnMailboxesResponse";
export { SetRuleOperation } from "./ComplexProperties/SetRuleOperation";
export { SetTeamMailboxRequest } from "./Core/Requests/SetTeamMailboxRequest";
export { SetUserOofSettingsRequest } from "./Core/Requests/SetUserOofSettingsRequest";
//export {Sharing} from "./operations/Sharing/Sharing";
export { SimplePropertyBag } from "./Core/SimplePropertyBag";
export { SimpleServiceRequestBase } from "./Core/Requests/SimpleServiceRequestBase";
export { SoapFaultDetails } from "./Misc/SoapFaultDetails";
export { SortDirection } from "./Enumerations/SortDirection";

export { StandardUser } from "./Enumerations/StandardUser";
export { StartTimeZonePropertyDefinition } from "./PropertyDefinitions/StartTimeZonePropertyDefinition";
export { StreamingSubscription } from "./Notifications/StreamingSubscription";
export { StreamingSubscriptionConnection, ResponseHeaderDelegate } from "./Notifications/StreamingSubscriptionConnection";
export { StringList } from "./ComplexProperties/StringList";
export { StringPropertyDefinition } from "./PropertyDefinitions/StringPropertyDefinition";
export { Strings } from "./Strings";
export { SubscribeRequest } from "./Core/Requests/SubscribeRequest";
export { SubscribeResponse } from "./Core/Responses/SubscribeResponse";
export { SubscribeToPullNotificationsRequest } from "./Core/Requests/SubscribeToPullNotificationsRequest";
export { SubscribeToPushNotificationsRequest } from "./Core/Requests/SubscribeToPushNotificationsRequest";
export { SubscribeToStreamingNotificationsRequest } from "./Core/Requests/SubscribeToStreamingNotificationsRequest";
export { SubscriptionBase } from "./Notifications/SubscriptionBase";
export { SubscriptionErrorEventArgs } from "./Notifications/SubscriptionErrorEventArgs";
export { Suggestion } from "./ComplexProperties/Availability/Suggestion";
export { SuggestionQuality } from "./Enumerations/SuggestionQuality";
export { SuggestionsResponse } from "./Core/Responses/SuggestionsResponse";
export { SuppressReadReceipt } from "./Core/ServiceObjects/ResponseObjects/SuppressReadReceipt";
export { SyncFolderHierarchyRequest } from "./Core/Requests/SyncFolderHierarchyRequest";
export { SyncFolderHierarchyResponse } from "./Core/Responses/SyncFolderHierarchyResponse";
export { SyncFolderItemsRequest } from "./Core/Requests/SyncFolderItemsRequest";
export { SyncFolderItemsResponse } from "./Core/Responses/SyncFolderItemsResponse";
export { SyncFolderItemsScope } from "./Enumerations/SyncFolderItemsScope";
export { SyncResponse } from "./Core/Responses/SyncResponse";
export { Task } from "./Core/ServiceObjects/Items/Task";
export { TaskDelegationState } from "./Enumerations/TaskDelegationState";
export { TaskDelegationStatePropertyDefinition } from "./PropertyDefinitions/TaskDelegationStatePropertyDefinition";
export { TaskMode } from "./Enumerations/TaskMode";
export { TaskStatus } from "./Enumerations/TaskStatus";
export { TaskSuggestion } from "./ComplexProperties/TaskSuggestion";
export { TaskSuggestionCollection } from "./ComplexProperties/TaskSuggestionCollection";
export { TeamMailboxLifecycleState } from "./Enumerations/TeamMailboxLifecycleState";
export { TextBody } from "./ComplexProperties/TextBody";
export { Time } from "./Misc/Time";
export { TimeChange } from "./ComplexProperties/TimeChange";
export { TimeChangeRecurrence } from "./ComplexProperties/TimeChangeRecurrence";
export { TimeSpanPropertyDefinition } from "./PropertyDefinitions/TimeSpanPropertyDefinition";
export { TimeSuggestion } from "./ComplexProperties/Availability/TimeSuggestion";
export { TimeWindow } from "./Misc/Availability/TimeWindow";
export { TimeZoneConversionException } from "./Exceptions/TimeZoneConversionException";
export { TimeZonePropertyDefinition } from "./PropertyDefinitions/TimeZonePropertyDefinition";
export { TimeZoneTransitionGroup } from "./ComplexProperties/TimeZones/TimeZoneTransitionGroup";
export { TokenCredentials } from "./Credentials/TokenCredentials";
export { TraceFlags } from "./Enumerations/TraceFlags";
export { TypedPropertyDefinition } from "./PropertyDefinitions/TypedPropertyDefinition";
//export {UnifiedContactStore} from "./operations/UnifiedContactStore/UnifiedContactStore";
export { UnifiedMessaging } from "./UnifiedMessaging/UnifiedMessaging";
export { UninstallAppRequest } from "./Core/Requests/UninstallAppRequest";
export { UninstallAppResponse } from "./Core/Responses/UninstallAppResponse";
export { UniqueBody } from "./ComplexProperties/UniqueBody";
export { UnpinTeamMailboxRequest } from "./Core/Requests/UnpinTeamMailboxRequest";
export { UnsubscribeRequest } from "./Core/Requests/UnsubscribeRequest";
export { UpdateDelegateRequest } from "./Core/Requests/UpdateDelegateRequest";
export { UpdateFolderRequest } from "./Core/Requests/UpdateFolderRequest";
export { UpdateFolderResponse } from "./Core/Responses/UpdateFolderResponse";
export { UpdateInboxRulesException } from "./Exceptions/UpdateInboxRulesException";
export { UpdateInboxRulesRequest } from "./Core/Requests/UpdateInboxRulesRequest";
export { UpdateInboxRulesResponse } from "./Core/Responses/UpdateInboxRulesResponse";
export { UpdateItemRequest } from "./Core/Requests/UpdateItemRequest";
export { UpdateItemResponse } from "./Core/Responses/UpdateItemResponse";
export { UpdateUserConfigurationRequest } from "./Core/Requests/UpdateUserConfigurationRequest";
export { Uri } from "./Uri";
export { UrlEntity } from "./ComplexProperties/UrlEntity";
export { UrlEntityCollection } from "./ComplexProperties/UrlEntityCollection";
export { UserConfiguration } from "./Misc/UserConfiguration";
export { UserConfigurationDictionary } from "./ComplexProperties/UserConfigurationDictionary";
export { UserConfigurationDictionaryObjectType } from "./Enumerations/UserConfigurationDictionaryObjectType";
export { UserConfigurationProperties } from "./Enumerations/UserConfigurationProperties";
export { UserId } from "./ComplexProperties/UserId";
export { UserSettingError } from "./Autodiscover/UserSettingError";
export { UserSettingName } from "./Enumerations/UserSettingName";

//export {Utilities} from "./operations/ExchangeMailboxData/Utilities";
export { DiscoverySchemaChanges } from "./MailboxSearch/Versioning";
export { ViewBase } from "./Search/ViewBase";
export { ViewFilter } from "./Enumerations/ViewFilter";
export { VotingInformation } from "./ComplexProperties/VotingInformation";
export { VotingOptionData } from "./ComplexProperties/VotingOptionData";
export { WebClientUrl } from "./Autodiscover/WebClientUrl";
export { WebClientUrlCollection } from "./Autodiscover/WebClientUrlCollection";
export { WebCredentials } from "./Credentials/WebCredentials";
export { WellKnownFolderName } from "./Enumerations/WellKnownFolderName";
export { WindowsLiveCredentials } from "./Credentials/WindowsLiveCredentials";
export { WorkingHours } from "./ComplexProperties/Availability/WorkingHours";
export { WorkingPeriod } from "./ComplexProperties/Availability/WorkingPeriod";
export { WSSecurityBasedCredentials } from "./Credentials/WSSecurityBasedCredentials";
export { WSSecurityUtilityIdSignedXml } from "./Credentials/WSSecurityUtilityIdSignedXml";
export { X509CertificateCredentials } from "./Credentials/X509CertificateCredentials";
export { XmlAttributeNames } from "./Core/XmlAttributeNames";
//export {XmlDtdException} from "./Security/XmlDtdException";
export { XmlElementNames } from "./Core/XmlElementNames";
export { XmlNamespace } from "./Enumerations/XmlNamespace";