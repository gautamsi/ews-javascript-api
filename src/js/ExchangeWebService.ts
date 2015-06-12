import ServiceObjectSchema = require("./Core/ServiceObjects/Schemas/ServiceObjectSchema");
import AppointmentSchema = require("./Core/ServiceObjects/Schemas/AppointmentSchema");

/**
 * BootStraper code. to initializes some class to avoid circular reference. 
 */

ServiceObjectSchema.AppointmentSchema = AppointmentSchema.Instance;

export { ServiceObjectSchema, AppointmentSchema};
//export = ServiceObjectSchema;
// import AttachableAttribute = require("./Attributes/AttachableAttribute");
// import EwsEnumAttribute = require("./Attributes/EwsEnumAttribute");
// import RequiredServerVersionAttribute = require("./Attributes/RequiredServerVersionAttribute");
// import SchemaAttribute = require("./Attributes/SchemaAttribute");
// import ServiceObjectDefinitionAttribute = require("./Attributes/ServiceObjectDefinitionAttribute");
// import OutlookAccount = require("./Autodiscover/ConfigurationSettings/Outlook/OutlookAccount");
// import OutlookConfigurationSettings = require("./Autodiscover/ConfigurationSettings/Outlook/OutlookConfigurationSettings");
// import OutlookProtocol = require("./Autodiscover/ConfigurationSettings/Outlook/OutlookProtocol");
// import OutlookUser = require("./Autodiscover/ConfigurationSettings/Outlook/OutlookUser");
// import ConfigurationSettingsBase = require("./Autodiscover/ConfigurationSettings/ConfigurationSettingsBase");
// import AutodiscoverRequest = require("./Autodiscover/Requests/AutodiscoverRequest");
// import GetDomainSettingsRequest = require("./Autodiscover/Requests/GetDomainSettingsRequest");
// import GetUserSettingsRequest = require("./Autodiscover/Requests/GetUserSettingsRequest");
// import AutodiscoverResponse = require("./Autodiscover/Responses/AutodiscoverResponse");
// import GetDomainSettingsResponse = require("./Autodiscover/Responses/GetDomainSettingsResponse");
// import GetDomainSettingsResponseCollection = require("./Autodiscover/Responses/GetDomainSettingsResponseCollection");
// import GetUserSettingsResponse = require("./Autodiscover/Responses/GetUserSettingsResponse");
// import GetUserSettingsResponseCollection = require("./Autodiscover/Responses/GetUserSettingsResponseCollection");
// import AlternateMailbox = require("./Autodiscover/AlternateMailbox");
// import AlternateMailboxCollection = require("./Autodiscover/AlternateMailboxCollection");
// import AutodiscoverDnsClient = require("./Autodiscover/AutodiscoverDnsClient");
// import AutodiscoverError = require("./Autodiscover/AutodiscoverError");
// import AutodiscoverResponseCollection = require("./Autodiscover/AutodiscoverResponseCollection");
// import AutodiscoverService = require("./Autodiscover/AutodiscoverService");
// import AutodiscoverServiceDelegates = require("./Autodiscover/AutodiscoverServiceDelegates");
// import ComparisonHelpers = require("./Autodiscover/ComparisonHelpers");
// import DirectoryHelper = require("./Autodiscover/DirectoryHelper");
// import DocumentSharingLocation = require("./Autodiscover/DocumentSharingLocation");
// import DocumentSharingLocationCollection = require("./Autodiscover/DocumentSharingLocationCollection");
// import DomainSettingError = require("./Autodiscover/DomainSettingError");
// import ProtocolConnection = require("./Autodiscover/ProtocolConnection");
// import ProtocolConnectionCollection = require("./Autodiscover/ProtocolConnectionCollection");
// import UserSettingError = require("./Autodiscover/UserSettingError");
// import WebClientUrl = require("./Autodiscover/WebClientUrl");
// import WebClientUrlCollection = require("./Autodiscover/WebClientUrlCollection");
// import CalendarEvent = require("./ComplexProperties/Availability/CalendarEvent");
// import CalendarEventDetails = require("./ComplexProperties/Availability/CalendarEventDetails");
// import Conflict = require("./ComplexProperties/Availability/Conflict");
// import OofSettings = require("./ComplexProperties/Availability/OofSettings");
// import Suggestion = require("./ComplexProperties/Availability/Suggestion");
// import TimeSuggestion = require("./ComplexProperties/Availability/TimeSuggestion");
// import WorkingHours = require("./ComplexProperties/Availability/WorkingHours");
// import WorkingPeriod = require("./ComplexProperties/Availability/WorkingPeriod");
// import Recurrence = require("./ComplexProperties/Recurrence/Patterns/Recurrence");
// import Recurrence_DailyPattern = require("./ComplexProperties/Recurrence/Patterns/Recurrence_DailyPattern");
// import Recurrence_DailyRegenerationPattern = require("./ComplexProperties/Recurrence/Patterns/Recurrence_DailyRegenerationPattern");
// import Recurrence_IntervalPattern = require("./ComplexProperties/Recurrence/Patterns/Recurrence_IntervalPattern");
// import Recurrence_MonthlyPattern = require("./ComplexProperties/Recurrence/Patterns/Recurrence_MonthlyPattern");
// import Recurrence_MonthlyRegenerationPattern = require("./ComplexProperties/Recurrence/Patterns/Recurrence_MonthlyRegenerationPattern");
// import Recurrence_RelativeMonthlyPattern = require("./ComplexProperties/Recurrence/Patterns/Recurrence_RelativeMonthlyPattern");
// import Recurrence_RelativeYearlyPattern = require("./ComplexProperties/Recurrence/Patterns/Recurrence_RelativeYearlyPattern");
// import Recurrence_WeeklyPattern = require("./ComplexProperties/Recurrence/Patterns/Recurrence_WeeklyPattern");
// import Recurrence_WeeklyRegenerationPattern = require("./ComplexProperties/Recurrence/Patterns/Recurrence_WeeklyRegenerationPattern");
// import Recurrence_YearlyPattern = require("./ComplexProperties/Recurrence/Patterns/Recurrence_YearlyPattern");
// import Recurrence_YearlyRegenerationPattern = require("./ComplexProperties/Recurrence/Patterns/Recurrence_YearlyRegenerationPattern");
// import EndDateRecurrenceRange = require("./ComplexProperties/Recurrence/Ranges/EndDateRecurrenceRange");
// import NoEndRecurrenceRange = require("./ComplexProperties/Recurrence/Ranges/NoEndRecurrenceRange");
// import NumberedRecurrenceRange = require("./ComplexProperties/Recurrence/Ranges/NumberedRecurrenceRange");
// import RecurrenceRange = require("./ComplexProperties/Recurrence/Ranges/RecurrenceRange");
// import DayOfTheWeekCollection = require("./ComplexProperties/Recurrence/DayOfTheWeekCollection");
// import AbsoluteDateTransition = require("./ComplexProperties/TimeZones/AbsoluteDateTransition");
// import AbsoluteDayOfMonthTransition = require("./ComplexProperties/TimeZones/AbsoluteDayOfMonthTransition");
// import AbsoluteMonthTransition = require("./ComplexProperties/TimeZones/AbsoluteMonthTransition");
// import RelativeDayOfMonthTransition = require("./ComplexProperties/TimeZones/RelativeDayOfMonthTransition");
// import TimeZoneDefinition = require("./ComplexProperties/TimeZones/TimeZoneDefinition");
// import TimeZonePeriod = require("./ComplexProperties/TimeZones/TimeZonePeriod");
// import TimeZoneTransition = require("./ComplexProperties/TimeZones/TimeZoneTransition");
// import TimeZoneTransitionGroup = require("./ComplexProperties/TimeZones/TimeZoneTransitionGroup");
// import AddressEntity = require("./ComplexProperties/AddressEntity");
// import AddressEntityCollection = require("./ComplexProperties/AddressEntityCollection");
// import AppointmentOccurrenceId = require("./ComplexProperties/AppointmentOccurrenceId");
// import ApprovalRequestData = require("./ComplexProperties/ApprovalRequestData");
// import ArchiveTag = require("./ComplexProperties/ArchiveTag");
// import Attachment = require("./ComplexProperties/Attachment");
// import AttachmentCollection = require("./ComplexProperties/AttachmentCollection");
// import Attendee = require("./ComplexProperties/Attendee");
// import AttendeeCollection = require("./ComplexProperties/AttendeeCollection");
// import ByteArrayArray = require("./ComplexProperties/ByteArrayArray");
// import ChangeHighlights = require("./ComplexProperties/ChangeHighlights");
// import ClientAccessTokenRequest = require("./ComplexProperties/ClientAccessTokenRequest");
// import ClientApp = require("./ComplexProperties/ClientApp");
// import ClientAppMetadata = require("./ComplexProperties/ClientAppMetadata");
// import ClientExtension = require("./ComplexProperties/ClientExtension");
// import CompleteName = require("./ComplexProperties/CompleteName");
// import ComplexProperty = require("./ComplexProperties/ComplexProperty");
// import ComplexPropertyCollection = require("./ComplexProperties/ComplexPropertyCollection");
// import ContactEntity = require("./ComplexProperties/ContactEntity");
// import ContactEntityCollection = require("./ComplexProperties/ContactEntityCollection");
// import ContactPhoneEntity = require("./ComplexProperties/ContactPhoneEntity");
// import ContactPhoneEntityCollection = require("./ComplexProperties/ContactPhoneEntityCollection");
// import ConversationId = require("./ComplexProperties/ConversationId");
// import ConversationNode = require("./ComplexProperties/ConversationNode");
// import ConversationNodeCollection = require("./ComplexProperties/ConversationNodeCollection");
// import ConversationRequest = require("./ComplexProperties/ConversationRequest");
// import ConversationResponse = require("./ComplexProperties/ConversationResponse");
// import CreateRuleOperation = require("./ComplexProperties/CreateRuleOperation");
// import DelegatePermissions = require("./ComplexProperties/DelegatePermissions");
// import DelegateUser = require("./ComplexProperties/DelegateUser");
// import DeletedOccurrenceInfo = require("./ComplexProperties/DeletedOccurrenceInfo");
// import DeletedOccurrenceInfoCollection = require("./ComplexProperties/DeletedOccurrenceInfoCollection");
// import DeleteRuleOperation = require("./ComplexProperties/DeleteRuleOperation");
// import DictionaryEntryProperty = require("./ComplexProperties/DictionaryEntryProperty");
// import DictionaryProperty = require("./ComplexProperties/DictionaryProperty");
// import EmailAddress = require("./ComplexProperties/EmailAddress");
// import EmailAddressCollection = require("./ComplexProperties/EmailAddressCollection");
// import EmailAddressDictionary = require("./ComplexProperties/EmailAddressDictionary");
// import EmailAddressEntity = require("./ComplexProperties/EmailAddressEntity");
// import EmailAddressEntityCollection = require("./ComplexProperties/EmailAddressEntityCollection");
// import EmailAddressEntry = require("./ComplexProperties/EmailAddressEntry");
// import EmailUserEntity = require("./ComplexProperties/EmailUserEntity");
// import EmailUserEntityCollection = require("./ComplexProperties/EmailUserEntityCollection");
// import EnhancedLocation = require("./ComplexProperties/EnhancedLocation");
// import EntityExtractionResult = require("./ComplexProperties/EntityExtractionResult");
// import ExtendedProperty = require("./ComplexProperties/ExtendedProperty");
// import ExtendedPropertyCollection = require("./ComplexProperties/ExtendedPropertyCollection");
// import ExtractedEntity = require("./ComplexProperties/ExtractedEntity");
// import FileAttachment = require("./ComplexProperties/FileAttachment");
// import Flag = require("./ComplexProperties/Flag");
// import FolderId = require("./ComplexProperties/FolderId");
// import FolderIdCollection = require("./ComplexProperties/FolderIdCollection");
// import FolderPermission = require("./ComplexProperties/FolderPermission");
// import FolderPermissionCollection = require("./ComplexProperties/FolderPermissionCollection");
// import GenericItemAttachment = require("./ComplexProperties/GenericItemAttachment");
// import GroupMember = require("./ComplexProperties/GroupMember");
// import GroupMemberCollection = require("./ComplexProperties/GroupMemberCollection");
// import HighlightTerm = require("./ComplexProperties/HighlightTerm");
// import ImAddressDictionary = require("./ComplexProperties/ImAddressDictionary");
// import ImAddressEntry = require("./ComplexProperties/ImAddressEntry");
// import InternetMessageHeader = require("./ComplexProperties/InternetMessageHeader");
// import InternetMessageHeaderCollection = require("./ComplexProperties/InternetMessageHeaderCollection");
// import ItemAttachment = require("./ComplexProperties/ItemAttachment");
// import ItemCollection = require("./ComplexProperties/ItemCollection");
// import ItemId = require("./ComplexProperties/ItemId");
// import ItemIdCollection = require("./ComplexProperties/ItemIdCollection");
// import Mailbox = require("./ComplexProperties/Mailbox");
// import ManagedFolderInformation = require("./ComplexProperties/ManagedFolderInformation");
// import MeetingSuggestion = require("./ComplexProperties/MeetingSuggestion");
// import MeetingSuggestionCollection = require("./ComplexProperties/MeetingSuggestionCollection");
// import MeetingTimeZone = require("./ComplexProperties/MeetingTimeZone");
// import MessageBody = require("./ComplexProperties/MessageBody");
// import MimeContent = require("./ComplexProperties/MimeContent");
// import MimeContentBase = require("./ComplexProperties/MimeContentBase");
// import MimeContentUTF8 = require("./ComplexProperties/MimeContentUTF8");
// import NormalizedBody = require("./ComplexProperties/NormalizedBody");
// import OccurrenceInfo = require("./ComplexProperties/OccurrenceInfo");
// import OccurrenceInfoCollection = require("./ComplexProperties/OccurrenceInfoCollection");
// import OnlineMeetingSettings = require("./ComplexProperties/OnlineMeetingSettings");
// import PersonaPostalAddress = require("./ComplexProperties/PersonaPostalAddress");
// import PhoneEntity = require("./ComplexProperties/PhoneEntity");
// import PhoneEntityCollection = require("./ComplexProperties/PhoneEntityCollection");
// import PhoneNumberDictionary = require("./ComplexProperties/PhoneNumberDictionary");
// import PhoneNumberEntry = require("./ComplexProperties/PhoneNumberEntry");
// import PhysicalAddressDictionary = require("./ComplexProperties/PhysicalAddressDictionary");
// import PhysicalAddressEntry = require("./ComplexProperties/PhysicalAddressEntry");
// import PolicyTag = require("./ComplexProperties/PolicyTag");
// import RecurringAppointmentMasterId = require("./ComplexProperties/RecurringAppointmentMasterId");
// import RetentionTagBase = require("./ComplexProperties/RetentionTagBase");
// import Rule = require("./ComplexProperties/Rule");
// import RuleActions = require("./ComplexProperties/RuleActions");
// import RuleCollection = require("./ComplexProperties/RuleCollection");
// import RuleError = require("./ComplexProperties/RuleError");
// import RuleErrorCollection = require("./ComplexProperties/RuleErrorCollection");
// import RuleOperation = require("./ComplexProperties/RuleOperation");
// import RuleOperationError = require("./ComplexProperties/RuleOperationError");
// import RuleOperationErrorCollection = require("./ComplexProperties/RuleOperationErrorCollection");
// import RulePredicateDateRange = require("./ComplexProperties/RulePredicateDateRange");
// import RulePredicates = require("./ComplexProperties/RulePredicates");
// import RulePredicateSizeRange = require("./ComplexProperties/RulePredicateSizeRange");
// import SearchFolderParameters = require("./ComplexProperties/SearchFolderParameters");
// import ServiceId = require("./ComplexProperties/ServiceId");
// import SetClientExtensionAction = require("./ComplexProperties/SetClientExtensionAction");
// import SetRuleOperation = require("./ComplexProperties/SetRuleOperation");
// import StringList = require("./ComplexProperties/StringList");
// import TaskSuggestion = require("./ComplexProperties/TaskSuggestion");
// import TaskSuggestionCollection = require("./ComplexProperties/TaskSuggestionCollection");
// import TextBody = require("./ComplexProperties/TextBody");
// import TimeChange = require("./ComplexProperties/TimeChange");
// import TimeChangeRecurrence = require("./ComplexProperties/TimeChangeRecurrence");
// import UniqueBody = require("./ComplexProperties/UniqueBody");
// import UrlEntity = require("./ComplexProperties/UrlEntity");
// import UrlEntityCollection = require("./ComplexProperties/UrlEntityCollection");
// import UserConfigurationDictionary = require("./ComplexProperties/UserConfigurationDictionary");
// import UserId = require("./ComplexProperties/UserId");
// import VotingInformation = require("./ComplexProperties/VotingInformation");
// import VotingOptionData = require("./ComplexProperties/VotingOptionData");
// import AddDelegateRequest = require("./Core/Requests/AddDelegateRequest");
// import ApplyConversationActionRequest = require("./Core/Requests/ApplyConversationActionRequest");
// import ArchiveItemRequest = require("./Core/Requests/ArchiveItemRequest");
// import AsyncRequestResult = require("./Core/Requests/AsyncRequestResult");
// import ConvertIdRequest = require("./Core/Requests/ConvertIdRequest");
// import CopyFolderRequest = require("./Core/Requests/CopyFolderRequest");
// import CopyItemRequest = require("./Core/Requests/CopyItemRequest");
// import CreateAttachmentRequest = require("./Core/Requests/CreateAttachmentRequest");
// import CreateFolderRequest = require("./Core/Requests/CreateFolderRequest");
// import CreateItemRequest = require("./Core/Requests/CreateItemRequest");
// import CreateItemRequestBase = require("./Core/Requests/CreateItemRequestBase");
// import CreateRequest = require("./Core/Requests/CreateRequest");
// import CreateResponseObjectRequest = require("./Core/Requests/CreateResponseObjectRequest");
// import CreateUserConfigurationRequest = require("./Core/Requests/CreateUserConfigurationRequest");
// import DelegateManagementRequestBase = require("./Core/Requests/DelegateManagementRequestBase");
// import DeleteAttachmentRequest = require("./Core/Requests/DeleteAttachmentRequest");
// import DeleteFolderRequest = require("./Core/Requests/DeleteFolderRequest");
// import DeleteItemRequest = require("./Core/Requests/DeleteItemRequest");
// import DeleteRequest = require("./Core/Requests/DeleteRequest");
// import DeleteUserConfigurationRequest = require("./Core/Requests/DeleteUserConfigurationRequest");
// import DisableAppRequest = require("./Core/Requests/DisableAppRequest");
// import DisconnectPhoneCallRequest = require("./Core/Requests/DisconnectPhoneCallRequest");
// import EmptyFolderRequest = require("./Core/Requests/EmptyFolderRequest");
// import ExecuteDiagnosticMethodRequest = require("./Core/Requests/ExecuteDiagnosticMethodRequest");
// import ExpandGroupRequest = require("./Core/Requests/ExpandGroupRequest");
// import FindConversationRequest = require("./Core/Requests/FindConversationRequest");
// import FindFolderRequest = require("./Core/Requests/FindFolderRequest");
// import FindItemRequest = require("./Core/Requests/FindItemRequest");
// import FindRequest = require("./Core/Requests/FindRequest");
// import GetAppManifestsRequest = require("./Core/Requests/GetAppManifestsRequest");
// import GetAppMarketplaceUrlRequest = require("./Core/Requests/GetAppMarketplaceUrlRequest");
// import GetAttachmentRequest = require("./Core/Requests/GetAttachmentRequest");
// import GetClientAccessTokenRequest = require("./Core/Requests/GetClientAccessTokenRequest");
// import GetClientExtensionRequest = require("./Core/Requests/GetClientExtensionRequest");
// import GetConversationItemsRequest = require("./Core/Requests/GetConversationItemsRequest");
// import GetDelegateRequest = require("./Core/Requests/GetDelegateRequest");
// import GetDiscoverySearchConfigurationRequest = require("./Core/Requests/GetDiscoverySearchConfigurationRequest");
// import GetEncryptionConfigurationRequest = require("./Core/Requests/GetEncryptionConfigurationRequest");
// import GetEventsRequest = require("./Core/Requests/GetEventsRequest");
// import GetFolderRequest = require("./Core/Requests/GetFolderRequest");
// import GetFolderRequestBase = require("./Core/Requests/GetFolderRequestBase");
// import GetFolderRequestForLoad = require("./Core/Requests/GetFolderRequestForLoad");
// import GetHoldOnMailboxesRequest = require("./Core/Requests/GetHoldOnMailboxesRequest");
// import GetInboxRulesRequest = require("./Core/Requests/GetInboxRulesRequest");
// import GetItemRequest = require("./Core/Requests/GetItemRequest");
// import GetItemRequestBase = require("./Core/Requests/GetItemRequestBase");
// import GetItemRequestForLoad = require("./Core/Requests/GetItemRequestForLoad");
// import GetNonIndexableItemDetailsRequest = require("./Core/Requests/GetNonIndexableItemDetailsRequest");
// import GetNonIndexableItemStatisticsRequest = require("./Core/Requests/GetNonIndexableItemStatisticsRequest");
// import GetPasswordExpirationDateRequest = require("./Core/Requests/GetPasswordExpirationDateRequest");
// import GetPhoneCallRequest = require("./Core/Requests/GetPhoneCallRequest");
// import GetRequest = require("./Core/Requests/GetRequest");
// import GetRoomListsRequest = require("./Core/Requests/GetRoomListsRequest");
// import GetRoomsRequest = require("./Core/Requests/GetRoomsRequest");
// import GetSearchableMailboxesRequest = require("./Core/Requests/GetSearchableMailboxesRequest");
// import GetServerTimeZonesRequest = require("./Core/Requests/GetServerTimeZonesRequest");
// import GetStreamingEventsRequest = require("./Core/Requests/GetStreamingEventsRequest");
// import GetUserAvailabilityRequest = require("./Core/Requests/GetUserAvailabilityRequest");
// import GetUserConfigurationRequest = require("./Core/Requests/GetUserConfigurationRequest");
// import GetUserOofSettingsRequest = require("./Core/Requests/GetUserOofSettingsRequest");
// import GetUserRetentionPolicyTagsRequest = require("./Core/Requests/GetUserRetentionPolicyTagsRequest");
// import HangingRequestDisconnectEventArgs = require("./Core/Requests/HangingRequestDisconnectEventArgs");
// import HangingServiceRequestBase = require("./Core/Requests/HangingServiceRequestBase");
// import InstallAppRequest = require("./Core/Requests/InstallAppRequest");
// import MarkAllItemsAsReadRequest = require("./Core/Requests/MarkAllItemsAsReadRequest");
// import MarkAsJunkRequest = require("./Core/Requests/MarkAsJunkRequest");
// import MoveCopyFolderRequest = require("./Core/Requests/MoveCopyFolderRequest");
// import MoveCopyItemRequest = require("./Core/Requests/MoveCopyItemRequest");
// import MoveCopyRequest = require("./Core/Requests/MoveCopyRequest");
// import MoveFolderRequest = require("./Core/Requests/MoveFolderRequest");
// import MoveItemRequest = require("./Core/Requests/MoveItemRequest");
// import MultiResponseServiceRequest = require("./Core/Requests/MultiResponseServiceRequest");
// import PlayOnPhoneRequest = require("./Core/Requests/PlayOnPhoneRequest");
// import RemoveDelegateRequest = require("./Core/Requests/RemoveDelegateRequest");
// import ResolveNamesRequest = require("./Core/Requests/ResolveNamesRequest");
// import SearchMailboxesRequest = require("./Core/Requests/SearchMailboxesRequest");
// import SendItemRequest = require("./Core/Requests/SendItemRequest");
// import ServiceRequestBase = require("./Core/Requests/ServiceRequestBase");
// import SetClientExtensionRequest = require("./Core/Requests/SetClientExtensionRequest");
// import SetEncryptionConfigurationRequest = require("./Core/Requests/SetEncryptionConfigurationRequest");
// import SetHoldOnMailboxesRequest = require("./Core/Requests/SetHoldOnMailboxesRequest");
// import SetTeamMailboxRequest = require("./Core/Requests/SetTeamMailboxRequest");
// import SetUserOofSettingsRequest = require("./Core/Requests/SetUserOofSettingsRequest");
// import SimpleServiceRequestBase = require("./Core/Requests/SimpleServiceRequestBase");
// import SubscribeRequest = require("./Core/Requests/SubscribeRequest");
// import SubscribeToPullNotificationsRequest = require("./Core/Requests/SubscribeToPullNotificationsRequest");
// import SubscribeToPushNotificationsRequest = require("./Core/Requests/SubscribeToPushNotificationsRequest");
// import SubscribeToStreamingNotificationsRequest = require("./Core/Requests/SubscribeToStreamingNotificationsRequest");
// import SyncFolderHierarchyRequest = require("./Core/Requests/SyncFolderHierarchyRequest");
// import SyncFolderItemsRequest = require("./Core/Requests/SyncFolderItemsRequest");
// import UninstallAppRequest = require("./Core/Requests/UninstallAppRequest");
// import UnpinTeamMailboxRequest = require("./Core/Requests/UnpinTeamMailboxRequest");
// import UnsubscribeRequest = require("./Core/Requests/UnsubscribeRequest");
// import UpdateDelegateRequest = require("./Core/Requests/UpdateDelegateRequest");
// import UpdateFolderRequest = require("./Core/Requests/UpdateFolderRequest");
// import UpdateInboxRulesRequest = require("./Core/Requests/UpdateInboxRulesRequest");
// import UpdateItemRequest = require("./Core/Requests/UpdateItemRequest");
// import UpdateUserConfigurationRequest = require("./Core/Requests/UpdateUserConfigurationRequest");
// import ArchiveItemResponse = require("./Core/Responses/ArchiveItemResponse");
// import AttendeeAvailability = require("./Core/Responses/AttendeeAvailability");
// import ConvertIdResponse = require("./Core/Responses/ConvertIdResponse");
// import CreateAttachmentResponse = require("./Core/Responses/CreateAttachmentResponse");
// import CreateFolderResponse = require("./Core/Responses/CreateFolderResponse");
// import CreateItemResponse = require("./Core/Responses/CreateItemResponse");
// import CreateItemResponseBase = require("./Core/Responses/CreateItemResponseBase");
// import CreateResponseObjectResponse = require("./Core/Responses/CreateResponseObjectResponse");
// import DelegateManagementResponse = require("./Core/Responses/DelegateManagementResponse");
// import DelegateUserResponse = require("./Core/Responses/DelegateUserResponse");
// import DeleteAttachmentResponse = require("./Core/Responses/DeleteAttachmentResponse");
// import DisableAppResponse = require("./Core/Responses/DisableAppResponse");
// import ExecuteDiagnosticMethodResponse = require("./Core/Responses/ExecuteDiagnosticMethodResponse");
// import ExpandGroupResponse = require("./Core/Responses/ExpandGroupResponse");
// import FindConversationResponse = require("./Core/Responses/FindConversationResponse");
// import FindFolderResponse = require("./Core/Responses/FindFolderResponse");
// import FindItemResponse = require("./Core/Responses/FindItemResponse");
// import GetAppManifestsResponse = require("./Core/Responses/GetAppManifestsResponse");
// import GetAppMarketplaceUrlResponse = require("./Core/Responses/GetAppMarketplaceUrlResponse");
// import GetAttachmentResponse = require("./Core/Responses/GetAttachmentResponse");
// import GetClientAccessTokenResponse = require("./Core/Responses/GetClientAccessTokenResponse");
// import GetClientExtensionResponse = require("./Core/Responses/GetClientExtensionResponse");
// import GetConversationItemsResponse = require("./Core/Responses/GetConversationItemsResponse");
// import GetDelegateResponse = require("./Core/Responses/GetDelegateResponse");
// import GetDiscoverySearchConfigurationResponse = require("./Core/Responses/GetDiscoverySearchConfigurationResponse");
// import GetEncryptionConfigurationResponse = require("./Core/Responses/GetEncryptionConfigurationResponse");
// import GetEventsResponse = require("./Core/Responses/GetEventsResponse");
// import GetFolderResponse = require("./Core/Responses/GetFolderResponse");
// import GetHoldOnMailboxesResponse = require("./Core/Responses/GetHoldOnMailboxesResponse");
// import GetInboxRulesResponse = require("./Core/Responses/GetInboxRulesResponse");
// import GetItemResponse = require("./Core/Responses/GetItemResponse");
// import GetNonIndexableItemDetailsResponse = require("./Core/Responses/GetNonIndexableItemDetailsResponse");
// import GetNonIndexableItemStatisticsResponse = require("./Core/Responses/GetNonIndexableItemStatisticsResponse");
// import GetPasswordExpirationDateResponse = require("./Core/Responses/GetPasswordExpirationDateResponse");
// import GetPhoneCallResponse = require("./Core/Responses/GetPhoneCallResponse");
// import GetRoomListsResponse = require("./Core/Responses/GetRoomListsResponse");
// import GetRoomsResponse = require("./Core/Responses/GetRoomsResponse");
// import GetSearchableMailboxesResponse = require("./Core/Responses/GetSearchableMailboxesResponse");
// import GetServerTimeZonesResponse = require("./Core/Responses/GetServerTimeZonesResponse");
// import GetStreamingEventsResponse = require("./Core/Responses/GetStreamingEventsResponse");
// import GetUserConfigurationResponse = require("./Core/Responses/GetUserConfigurationResponse");
// import GetUserOofSettingsResponse = require("./Core/Responses/GetUserOofSettingsResponse");
// import GetUserRetentionPolicyTagsResponse = require("./Core/Responses/GetUserRetentionPolicyTagsResponse");
// import InstallAppResponse = require("./Core/Responses/InstallAppResponse");
// import MarkAsJunkResponse = require("./Core/Responses/MarkAsJunkResponse");
// import MoveCopyFolderResponse = require("./Core/Responses/MoveCopyFolderResponse");
// import MoveCopyItemResponse = require("./Core/Responses/MoveCopyItemResponse");
// import PlayOnPhoneResponse = require("./Core/Responses/PlayOnPhoneResponse");
// import ResolveNamesResponse = require("./Core/Responses/ResolveNamesResponse");
// import SearchMailboxesResponse = require("./Core/Responses/SearchMailboxesResponse");
// import ServiceResponse = require("./Core/Responses/ServiceResponse");
// import ServiceResponseCollection = require("./Core/Responses/ServiceResponseCollection");
// import SetEncryptionConfigurationResponse = require("./Core/Responses/SetEncryptionConfigurationResponse");
// import SetHoldOnMailboxesResponse = require("./Core/Responses/SetHoldOnMailboxesResponse");
// import SubscribeResponse = require("./Core/Responses/SubscribeResponse");
// import SuggestionsResponse = require("./Core/Responses/SuggestionsResponse");
// import SyncFolderHierarchyResponse = require("./Core/Responses/SyncFolderHierarchyResponse");
// import SyncFolderItemsResponse = require("./Core/Responses/SyncFolderItemsResponse");
// import SyncResponse = require("./Core/Responses/SyncResponse");
// import UninstallAppResponse = require("./Core/Responses/UninstallAppResponse");
// import UpdateFolderResponse = require("./Core/Responses/UpdateFolderResponse");
// import UpdateInboxRulesResponse = require("./Core/Responses/UpdateInboxRulesResponse");
// import UpdateItemResponse = require("./Core/Responses/UpdateItemResponse");
// import CalendarFolder = require("./Core/ServiceObjects/Folders/CalendarFolder");
// import ContactsFolder = require("./Core/ServiceObjects/Folders/ContactsFolder");
// import Folder = require("./Core/ServiceObjects/Folders/Folder");
// import FolderInfo = require("./Core/ServiceObjects/Folders/FolderInfo");
// import SearchFolder = require("./Core/ServiceObjects/Folders/SearchFolder");
// import TasksFolder = require("./Core/ServiceObjects/Folders/TasksFolder");
// import Appointment = require("./Core/ServiceObjects/Items/Appointment");
// import Contact = require("./Core/ServiceObjects/Items/Contact");
// import ContactGroup = require("./Core/ServiceObjects/Items/ContactGroup");
// import Conversation = require("./Core/ServiceObjects/Items/Conversation");
// import EmailMessage = require("./Core/ServiceObjects/Items/EmailMessage");
// import Item = require("./Core/ServiceObjects/Items/Item");
// import ItemInfo = require("./Core/ServiceObjects/Items/ItemInfo");
// import MeetingCancellation = require("./Core/ServiceObjects/Items/MeetingCancellation");
// import MeetingMessage = require("./Core/ServiceObjects/Items/MeetingMessage");
// import MeetingRequest = require("./Core/ServiceObjects/Items/MeetingRequest");
// import MeetingResponse = require("./Core/ServiceObjects/Items/MeetingResponse");
// import PostItem = require("./Core/ServiceObjects/Items/PostItem");
// import Task = require("./Core/ServiceObjects/Items/Task");
// import AcceptMeetingInvitationMessage = require("./Core/ServiceObjects/ResponseObjects/AcceptMeetingInvitationMessage");
// import CalendarResponseMessage = require("./Core/ServiceObjects/ResponseObjects/CalendarResponseMessage");
// import CalendarResponseMessageBase = require("./Core/ServiceObjects/ResponseObjects/CalendarResponseMessageBase");
// import CancelMeetingMessage = require("./Core/ServiceObjects/ResponseObjects/CancelMeetingMessage");
// import DeclineMeetingInvitationMessage = require("./Core/ServiceObjects/ResponseObjects/DeclineMeetingInvitationMessage");
// import PostReply = require("./Core/ServiceObjects/ResponseObjects/PostReply");
// import RemoveFromCalendar = require("./Core/ServiceObjects/ResponseObjects/RemoveFromCalendar");
// import ResponseMessage = require("./Core/ServiceObjects/ResponseObjects/ResponseMessage");
// import ResponseObject = require("./Core/ServiceObjects/ResponseObjects/ResponseObject");
// import SuppressReadReceipt = require("./Core/ServiceObjects/ResponseObjects/SuppressReadReceipt");
// import AppointmentSchema = require("./Core/ServiceObjects/Schemas/AppointmentSchema");
// import CalendarResponseObjectSchema = require("./Core/ServiceObjects/Schemas/CalendarResponseObjectSchema");
// import CancelMeetingMessageSchema = require("./Core/ServiceObjects/Schemas/CancelMeetingMessageSchema");
// import ContactGroupSchema = require("./Core/ServiceObjects/Schemas/ContactGroupSchema");
// import ContactSchema = require("./Core/ServiceObjects/Schemas/ContactSchema");
// import ConversationSchema = require("./Core/ServiceObjects/Schemas/ConversationSchema");
// import EmailMessageSchema = require("./Core/ServiceObjects/Schemas/EmailMessageSchema");
// import FolderSchema = require("./Core/ServiceObjects/Schemas/FolderSchema");
// import ItemSchema = require("./Core/ServiceObjects/Schemas/ItemSchema");
// import MeetingCancellationSchema = require("./Core/ServiceObjects/Schemas/MeetingCancellationSchema");
// import MeetingMessageSchema = require("./Core/ServiceObjects/Schemas/MeetingMessageSchema");
// import MeetingRequestSchema = require("./Core/ServiceObjects/Schemas/MeetingRequestSchema");
// import MeetingResponseSchema = require("./Core/ServiceObjects/Schemas/MeetingResponseSchema");
// import PostItemSchema = require("./Core/ServiceObjects/Schemas/PostItemSchema");
// import PostReplySchema = require("./Core/ServiceObjects/Schemas/PostReplySchema");
// import ResponseMessageSchema = require("./Core/ServiceObjects/Schemas/ResponseMessageSchema");
// import ResponseObjectSchema = require("./Core/ServiceObjects/Schemas/ResponseObjectSchema");
// import Schemas = require("./Core/ServiceObjects/Schemas/Schemas");
// import SearchFolderSchema = require("./Core/ServiceObjects/Schemas/SearchFolderSchema");
// import ServiceObjectSchema = require("./Core/ServiceObjects/Schemas/ServiceObjectSchema");
// import TaskSchema = require("./Core/ServiceObjects/Schemas/TaskSchema");
// import ServiceObject = require("./Core/ServiceObjects/ServiceObject");
// import ServiceObjectInfo = require("./Core/ServiceObjects/ServiceObjectInfo");
// import EwsHttpWebRequest = require("./Core/EwsHttpWebRequest");
// import EwsHttpWebRequestFactory = require("./Core/EwsHttpWebRequestFactory");
// import EwsHttpWebResponse = require("./Core/EwsHttpWebResponse");
// import EwsLogging = require("./Core/EwsLogging");
// import EwsServiceJsonReader = require("./Core/EwsServiceJsonReader");
// import EwsServiceMultiResponseXmlReader = require("./Core/EwsServiceMultiResponseXmlReader");
// import EwsServiceXmlReader = require("./Core/EwsServiceXmlReader");
// import EwsServiceXmlWriter = require("./Core/EwsServiceXmlWriter");
// import EwsUtilities = require("./Core/EwsUtilities");
// import EwsXmlReader = require("./Core/EwsXmlReader");
// import ExchangeServerInfo = require("./Core/ExchangeServerInfo");
// import ExchangeService = require("./Core/ExchangeService");
// import ExchangeServiceBase = require("./Core/ExchangeServiceBase");
// import JsonNames = require("./Core/JsonNames");
// import JsonObject = require("./Core/JsonObject");
// import JsonParser = require("./Core/JsonParser");
// import JsonTokenizer = require("./Core/JsonTokenizer");
// import JsonWriter = require("./Core/JsonWriter");
// import LazyMember = require("./Core/LazyMember");
// import PropertyBag = require("./Core/PropertyBag");
// import PropertySet = require("./Core/PropertySet");
// import SimplePropertyBag = require("./Core/SimplePropertyBag");
// import XmlAttributeNames = require("./Core/XmlAttributeNames");
// import XmlElementNames = require("./Core/XmlElementNames");
// import BasicAuthModuleForUTF8 = require("./Credentials/BasicAuthModuleForUTF8");
// import ClientCertificateCredentials = require("./Credentials/ClientCertificateCredentials");
// import ExchangeCredentials = require("./Credentials/ExchangeCredentials");
// import OAuthCredentials = require("./Credentials/OAuthCredentials");
// import PartnerTokenCredentials = require("./Credentials/PartnerTokenCredentials");
// import TokenCredentials = require("./Credentials/TokenCredentials");
// import WebCredentials = require("./Credentials/WebCredentials");
// import WindowsLiveCredentials = require("./Credentials/WindowsLiveCredentials");
// import WSSecurityBasedCredentials = require("./Credentials/WSSecurityBasedCredentials");
// import WSSecurityUtilityIdSignedXml = require("./Credentials/WSSecurityUtilityIdSignedXml");
// import X509CertificateCredentials = require("./Credentials/X509CertificateCredentials");
// import DnsClient = require("./Dns/DnsClient");
// import DnsNativeMethods = require("./Dns/DnsNativeMethods");
// import DnsRecord = require("./Dns/DnsRecord");
// import DnsRecordHeader = require("./Dns/DnsRecordHeader");
// import DnsSrvRecord = require("./Dns/DnsSrvRecord");
// import AddressEntity = require("./ComplexProperties/AddressEntity");
// import RetentionPolicyTag = require("./Elc/RetentionPolicyTag");
// import AffectedTaskOccurrence = require("./Enumerations/AffectedTaskOccurrence");
// import AggregateType = require("./Enumerations/AggregateType");
// import AppointmentType = require("./Enumerations/AppointmentType");
// import AutodiscoverEndpoints = require("./Enumerations/AutodiscoverEndpoints");
// import AutodiscoverErrorCode = require("./Enumerations/AutodiscoverErrorCode");
// import AutodiscoverResponseType = require("./Enumerations/AutodiscoverResponseType");
// import AvailabilityData = require("./Enumerations/AvailabilityData");
// import BasePropertySet = require("./Enumerations/BasePropertySet");
// import BodyType = require("./Enumerations/BodyType");
// import ChangeType = require("./Enumerations/ChangeType");
// import ClientAccessTokenType = require("./Enumerations/ClientAccessTokenType");
// import ClientExtensionProvidedTo = require("./Enumerations/ClientExtensionProvidedTo");
// import ComparisonMode = require("./Enumerations/ComparisonMode");
// import ConflictResolutionMode = require("./Enumerations/ConflictResolutionMode");
// import ConflictType = require("./Enumerations/ConflictType");
// import ConnectingIdType = require("./Enumerations/ConnectingIdType");
// import ConnectionFailureCause = require("./Enumerations/ConnectionFailureCause");
// import ConnectionStatus = require("./Enumerations/ConnectionStatus");
// import ContactSource = require("./Enumerations/ContactSource");
// import ContainmentMode = require("./Enumerations/ContainmentMode");
// import ConversationActionType = require("./Enumerations/ConversationActionType");
// import ConversationFlagStatus = require("./Enumerations/ConversationFlagStatus");
// import ConversationQueryTraversal = require("./Enumerations/ConversationQueryTraversal");
// import ConversationSortOrder = require("./Enumerations/ConversationSortOrder");
// import DateTimePrecision = require("./Enumerations/DateTimePrecision");
// import DayOfTheWeek = require("./Enumerations/DayOfTheWeek");
// import DayOfTheWeekIndex = require("./Enumerations/DayOfTheWeekIndex");
// import DefaultExtendedPropertySet = require("./Enumerations/DefaultExtendedPropertySet");
// import DelegateFolderPermissionLevel = require("./Enumerations/DelegateFolderPermissionLevel");
// import DeleteMode = require("./Enumerations/DeleteMode");
// import DisableReasonType = require("./Enumerations/DisableReasonType");
// import DnsQueryOptions = require("./Enumerations/DnsQueryOptions");
// import DnsRecordType = require("./Enumerations/DnsRecordType");
// import DomainSettingName = require("./Enumerations/DomainSettingName");
// import EffectiveRights = require("./Enumerations/EffectiveRights");
// import ElcFolderType = require("./Enumerations/ElcFolderType");
// import EmailAddressKey = require("./Enumerations/EmailAddressKey");
// import EmailPosition = require("./Enumerations/EmailPosition");
// import EnumToExchangeVersionMappingHelper = require("./Enumerations/EnumToExchangeVersionMappingHelper");
// import EventType = require("./Enumerations/EventType");
// import ExchangeVersion = require("./Enumerations/ExchangeVersion");
// import ExtensionInstallScope = require("./Enumerations/ExtensionInstallScope");
// import ExtensionType = require("./Enumerations/ExtensionType");
// import FileAsMapping = require("./Enumerations/FileAsMapping");
// import FlaggedForAction = require("./Enumerations/FlaggedForAction");
// import FolderPermissionLevel = require("./Enumerations/FolderPermissionLevel");
// import FolderPermissionReadAccess = require("./Enumerations/FolderPermissionReadAccess");
// import FolderTraversal = require("./Enumerations/FolderTraversal");
// import FreeBusyViewType = require("./Enumerations/FreeBusyViewType");
// import FreeType = require("./Enumerations/FreeType");
// import HangingRequestDisconnectReason = require("./Enumerations/HangingRequestDisconnectReason");
// import HoldAction = require("./Enumerations/HoldAction");
// import HoldStatus = require("./Enumerations/HoldStatus");
// import IconIndex = require("./Enumerations/IconIndex");
// import IdFormat = require("./Enumerations/IdFormat");
// import IDs = require("./Enumerations/IDs");
// import ImAddressKey = require("./Enumerations/ImAddressKey");
// import Importance = require("./Enumerations/Importance");
// import ItemFlagStatus = require("./Enumerations/ItemFlagStatus");
// import ItemIndexError = require("./Enumerations/ItemIndexError");
// import ItemTraversal = require("./Enumerations/ItemTraversal");
// import JsonTokenType = require("./Enumerations/JsonTokenType");
// import LegacyFreeBusyStatus = require("./Enumerations/LegacyFreeBusyStatus");
// import LobbyBypass = require("./Enumerations/LobbyBypass");
// import LocationSource = require("./Enumerations/LocationSource");
// import LogicalOperator = require("./Enumerations/LogicalOperator");
// import MailboxSearchLocation = require("./Enumerations/MailboxSearchLocation");
// import MailboxSearchScopeType = require("./Enumerations/MailboxSearchScopeType");
// import MailboxType = require("./Enumerations/MailboxType");
// import MapiPropertyType = require("./Enumerations/MapiPropertyType");
// import MeetingAttendeeType = require("./Enumerations/MeetingAttendeeType");
// import MeetingRequestsDeliveryScope = require("./Enumerations/MeetingRequestsDeliveryScope");
// import MeetingRequestType = require("./Enumerations/MeetingRequestType");
// import MeetingResponseType = require("./Enumerations/MeetingResponseType");
// import MemberStatus = require("./Enumerations/MemberStatus");
// import MessageDisposition = require("./Enumerations/MessageDisposition");
// import Month = require("./Enumerations/Month");
// import OffsetBasePoint = require("./Enumerations/OffsetBasePoint");
// import OnlineMeetingAccessLevel = require("./Enumerations/OnlineMeetingAccessLevel");
// import OofExternalAudience = require("./Enumerations/OofExternalAudience");
// import OofState = require("./Enumerations/OofState");
// import OutlookProtocolType = require("./Enumerations/OutlookProtocolType");
// import PermissionScope = require("./Enumerations/PermissionScope");
// import PhoneCallState = require("./Enumerations/PhoneCallState");
// import PhoneNumberKey = require("./Enumerations/PhoneNumberKey");
// import PhysicalAddressIndex = require("./Enumerations/PhysicalAddressIndex");
// import PhysicalAddressKey = require("./Enumerations/PhysicalAddressKey");
// import Presenters = require("./Enumerations/Presenters");
// import PreviewItemBaseShape = require("./Enumerations/PreviewItemBaseShape");
// import PrivilegedLogonType = require("./Enumerations/PrivilegedLogonType");
// import PrivilegedUserIdBudgetType = require("./Enumerations/PrivilegedUserIdBudgetType");
// import PropertyDefinitionFlags = require("./Enumerations/PropertyDefinitionFlags");
// import RenderingMode = require("./Enumerations/RenderingMode");
// import ResolveNameSearchLocation = require("./Enumerations/ResolveNameSearchLocation");
// import ResponseActions = require("./Enumerations/ResponseActions");
// import ResponseMessageType = require("./Enumerations/ResponseMessageType");
// import RetentionActionType = require("./Enumerations/RetentionActionType");
// import RetentionType = require("./Enumerations/RetentionType");
// import RuleErrorCode = require("./Enumerations/RuleErrorCode");
// import RuleProperty = require("./Enumerations/RuleProperty");
// import SearchFolderTraversal = require("./Enumerations/SearchFolderTraversal");
// import SearchPageDirection = require("./Enumerations/SearchPageDirection");
// import SearchResultType = require("./Enumerations/SearchResultType");
// import SendCancellationsMode = require("./Enumerations/SendCancellationsMode");
// import SendInvitationsMode = require("./Enumerations/SendInvitationsMode");
// import SendInvitationsOrCancellationsMode = require("./Enumerations/SendInvitationsOrCancellationsMode");
// import SendPrompt = require("./Enumerations/SendPrompt");
// import Sensitivity = require("./Enumerations/Sensitivity");
// import ServiceError = require("./Enumerations/ServiceError");
// import ServiceErrorHandling = require("./Enumerations/ServiceErrorHandling");
// import ServiceObjectType = require("./Enumerations/ServiceObjectType");
// import ServiceResult = require("./Enumerations/ServiceResult");
// import SetClientExtensionActionId = require("./Enumerations/SetClientExtensionActionId");
// import SortDirection = require("./Enumerations/SortDirection");
// import StandardUser = require("./Enumerations/StandardUser");
// import SuggestionQuality = require("./Enumerations/SuggestionQuality");
// import SyncFolderItemsScope = require("./Enumerations/SyncFolderItemsScope");
// import TaskDelegationState = require("./Enumerations/TaskDelegationState");
// import TaskMode = require("./Enumerations/TaskMode");
// import TaskStatus = require("./Enumerations/TaskStatus");
// import TeamMailboxLifecycleState = require("./Enumerations/TeamMailboxLifecycleState");
// import TraceFlags = require("./Enumerations/TraceFlags");
// import UserConfigurationDictionaryObjectType = require("./Enumerations/UserConfigurationDictionaryObjectType");
// import UserConfigurationProperties = require("./Enumerations/UserConfigurationProperties");
// import UserSettingName = require("./Enumerations/UserSettingName");
// import ViewFilter = require("./Enumerations/ViewFilter");
// import WellKnownFolderName = require("./Enumerations/WellKnownFolderName");
// import XmlNamespace = require("./Enumerations/XmlNamespace");
// import AccountIsLockedException = require("./Exceptions/AccountIsLockedException");
// import AutodiscoverLocalException = require("./Exceptions/AutodiscoverLocalException");
// import AutodiscoverRemoteException = require("./Exceptions/AutodiscoverRemoteException");
// import AutodiscoverResponseException = require("./Exceptions/AutodiscoverResponseException");
// import BatchServiceResponseException = require("./Exceptions/BatchServiceResponseException");
// import CreateAttachmentException = require("./Exceptions/CreateAttachmentException");
// import DeleteAttachmentException = require("./Exceptions/DeleteAttachmentException");
// import DnsException = require("./Exceptions/DnsException");
// import Exception = require("./Exceptions/Exception");
// import JsonDeserializationNotImplementedException = require("./Exceptions/JsonDeserializationNotImplementedException");
// import JsonSerializationNotImplementedException = require("./Exceptions/JsonSerializationNotImplementedException");
// import PropertyException = require("./Exceptions/PropertyException");
// import ServerBusyException = require("./Exceptions/ServerBusyException");
// import ServiceJsonDeserializationException = require("./Exceptions/ServiceJsonDeserializationException");
// import ServiceLocalException = require("./Exceptions/ServiceLocalException");
// import ServiceObjectPropertyException = require("./Exceptions/ServiceObjectPropertyException");
// import ServiceRemoteException = require("./Exceptions/ServiceRemoteException");
// import ServiceRequestException = require("./Exceptions/ServiceRequestException");
// import ServiceResponseException = require("./Exceptions/ServiceResponseException");
// import ServiceValidationException = require("./Exceptions/ServiceValidationException");
// import ServiceVersionException = require("./Exceptions/ServiceVersionException");
// import ServiceXmlDeserializationException = require("./Exceptions/ServiceXmlDeserializationException");
// import ServiceXmlSerializationException = require("./Exceptions/ServiceXmlSerializationException");
// import TimeZoneConversionException = require("./Exceptions/TimeZoneConversionException");
// import UpdateInboxRulesException = require("./Exceptions/UpdateInboxRulesException");
// import ICalendarActionProvider = require("./Interfaces/ICalendarActionProvider");
// import ICustomXmlUpdateSerializer = require("./Interfaces/ICustomXmlUpdateSerializer");
// import IEwsHttpWebRequest = require("./Interfaces/IEwsHttpWebRequest");
// import IEwsHttpWebRequestFactory = require("./Interfaces/IEwsHttpWebRequestFactory");
// import IEwsHttpWebResponse = require("./Interfaces/IEwsHttpWebResponse");
// import IFileAttachmentContentHandler = require("./Interfaces/IFileAttachmentContentHandler");
// import IJsonCollectionDeserializer = require("./Interfaces/IJsonCollectionDeserializer");
// import IJSonSerializable = require("./Interfaces/IJSonSerializable");
// import IOutParam = require("./Interfaces/IOutParam");
// import IOwnedProperty = require("./Interfaces/IOwnedProperty");
// import IRefParam = require("./Interfaces/IRefParam");
// import ISearchStringProvider = require("./Interfaces/ISearchStringProvider");
// import ISelfValidate = require("./Interfaces/ISelfValidate");
// import ITraceListener = require("./Interfaces/ITraceListener");
// import DiscoverySearchConfiguration = require("./MailboxSearch/DiscoverySearchConfiguration");
// import ExtendedAttributes = require("./MailboxSearch/ExtendedAttributes");
// import FailedSearchMailbox = require("./MailboxSearch/FailedSearchMailbox");
// import KeywordStatisticsSearchResult = require("./MailboxSearch/KeywordStatisticsSearchResult");
// import MailboxHoldResult = require("./MailboxSearch/MailboxHoldResult");
// import MailboxHoldStatus = require("./MailboxSearch/MailboxHoldStatus");
// import MailboxQuery = require("./MailboxSearch/MailboxQuery");
// import MailboxSearchScope = require("./MailboxSearch/MailboxSearchScope");
// import MailboxStatisticsItem = require("./MailboxSearch/MailboxStatisticsItem");
// import NonIndexableItem = require("./MailboxSearch/NonIndexableItem");
// import NonIndexableItemDetailsResult = require("./MailboxSearch/NonIndexableItemDetailsResult");
// import NonIndexableItemParameters = require("./MailboxSearch/NonIndexableItemParameters");
// import NonIndexableItemStatistic = require("./MailboxSearch/NonIndexableItemStatistic");
// import PreviewItemMailbox = require("./MailboxSearch/PreviewItemMailbox");
// import PreviewItemResponseShape = require("./MailboxSearch/PreviewItemResponseShape");
// import SearchableMailbox = require("./MailboxSearch/SearchableMailbox");
// import SearchMailboxesParameters = require("./MailboxSearch/SearchMailboxesParameters");
// import SearchMailboxesResult = require("./MailboxSearch/SearchMailboxesResult");
// import SearchPreviewItem = require("./MailboxSearch/SearchPreviewItem");
// import SearchRefinerItem = require("./MailboxSearch/SearchRefinerItem");
// import SetHoldOnMailboxesParameters = require("./MailboxSearch/SetHoldOnMailboxesParameters");
// import Versioning = require("./MailboxSearch/Versioning");
// import AttendeeInfo = require("./Misc/Availability/AttendeeInfo");
// import AvailabilityOptions = require("./Misc/Availability/AvailabilityOptions");
// import GetUserAvailabilityResults = require("./Misc/Availability/GetUserAvailabilityResults");
// import LegacyAvailabilityTimeZone = require("./Misc/Availability/LegacyAvailabilityTimeZone");
// import LegacyAvailabilityTimeZoneTime = require("./Misc/Availability/LegacyAvailabilityTimeZoneTime");
// import OofReply = require("./Misc/Availability/OofReply");
// import TimeWindow = require("./Misc/Availability/TimeWindow");
// import AlternateId = require("./Misc/IdConversion/AlternateId");
// import AlternateIdBase = require("./Misc/IdConversion/AlternateIdBase");
// import AlternatePublicFolderId = require("./Misc/IdConversion/AlternatePublicFolderId");
// import AlternatePublicFolderItemId = require("./Misc/IdConversion/AlternatePublicFolderItemId");
// import AbstractFolderIdWrapper = require("./Misc/AbstractFolderIdWrapper");
// import AbstractItemIdWrapper = require("./Misc/AbstractItemIdWrapper");
// import CalendarActionResults = require("./Misc/CalendarActionResults");
// import ConversationAction = require("./Misc/ConversationAction");
// import DelegateInformation = require("./Misc/DelegateInformation");
// import DelegateTypes = require("./Misc/DelegateTypes");
// import EwsTraceListener = require("./Misc/EwsTraceListener");
// import ExpandGroupResults = require("./Misc/ExpandGroupResults");
// import FolderIdWrapper = require("./Misc/FolderIdWrapper");
// import FolderIdWrapperList = require("./Misc/FolderIdWrapperList");
// import FolderWrapper = require("./Misc/FolderWrapper");
// import HangingTraceStream = require("./Misc/HangingTraceStream");
// import ImpersonatedUserId = require("./Misc/ImpersonatedUserId");
// import ItemIdWrapper = require("./Misc/ItemIdWrapper");
// import ItemIdWrapperList = require("./Misc/ItemIdWrapperList");
// import ItemWrapper = require("./Misc/ItemWrapper");
// import ManagementRoles = require("./Misc/ManagementRoles");
// import MapiTypeConverter = require("./Misc/MapiTypeConverter");
// import MapiTypeConverterMapEntry = require("./Misc/MapiTypeConverterMapEntry");
// import MobilePhone = require("./Misc/MobilePhone");
// import NameResolution = require("./Misc/NameResolution");
// import NameResolutionCollection = require("./Misc/NameResolutionCollection");
// import PrivilegedUserId = require("./Misc/PrivilegedUserId");
// import SoapFaultDetails = require("./Misc/SoapFaultDetails");
// import Time = require("./Misc/Time");
// import UserConfiguration = require("./Misc/UserConfiguration");
// import FolderEvent = require("./Notifications/FolderEvent");
// import GetEventsResults = require("./Notifications/GetEventsResults");
// import GetStreamingEventsResults = require("./Notifications/GetStreamingEventsResults");
// import ItemEvent = require("./Notifications/ItemEvent");
// import NotificationEvent = require("./Notifications/NotificationEvent");
// import NotificationEventArgs = require("./Notifications/NotificationEventArgs");
// import NotificationGroup = require("./Notifications/NotificationGroup");
// import PullSubscription = require("./Notifications/PullSubscription");
// import PushSubscription = require("./Notifications/PushSubscription");
// import StreamingSubscription = require("./Notifications/StreamingSubscription");
// import StreamingSubscriptionConnection = require("./Notifications/StreamingSubscriptionConnection");
// import SubscriptionBase = require("./Notifications/SubscriptionBase");
// import SubscriptionErrorEventArgs = require("./Notifications/SubscriptionErrorEventArgs");
// import BulkTransfer = require("./operations/BulkTransfer/BulkTransfer");
// import Reminder = require("./operations/ExchangeMailboxData/Reminder");
// import Utilities = require("./operations/ExchangeMailboxData/Utilities");
// import MailTips = require("./operations/MailTips/MailTips");
// import MessageTracking = require("./operations/MessageTracking/MessageTracking");
// import Persona = require("./operations/Persona/Persona");
// import ServiceConfiguration = require("./operations/ServiceConfiguration/ServiceConfiguration");
// import Sharing = require("./operations/Sharing/Sharing");
// import UnifiedContactStore = require("./operations/UnifiedContactStore/UnifiedContactStore");
// import AttachmentsPropertyDefinition = require("./PropertyDefinitions/AttachmentsPropertyDefinition");
// import BoolPropertyDefinition = require("./PropertyDefinitions/BoolPropertyDefinition");
// import ByteArrayPropertyDefinition = require("./PropertyDefinitions/ByteArrayPropertyDefinition");
// import ComplexPropertyDefinition = require("./PropertyDefinitions/ComplexPropertyDefinition");
// import ComplexPropertyDefinitionBase = require("./PropertyDefinitions/ComplexPropertyDefinitionBase");
// import ContainedPropertyDefinition = require("./PropertyDefinitions/ContainedPropertyDefinition");
// import DateTimePropertyDefinition = require("./PropertyDefinitions/DateTimePropertyDefinition");
// import DoublePropertyDefinition = require("./PropertyDefinitions/DoublePropertyDefinition");
// import EffectiveRightsPropertyDefinition = require("./PropertyDefinitions/EffectiveRightsPropertyDefinition");
// import ExtendedPropertyDefinition = require("./PropertyDefinitions/ExtendedPropertyDefinition");
// import GenericPropertyDefinition = require("./PropertyDefinitions/GenericPropertyDefinition");
// import GroupMemberPropertyDefinition = require("./PropertyDefinitions/GroupMemberPropertyDefinition");
// import IndexedPropertyDefinition = require("./PropertyDefinitions/IndexedPropertyDefinition");
// import IntPropertyDefinition = require("./PropertyDefinitions/IntPropertyDefinition");
// import ListValuePropertyDefinition = require("./PropertyDefinitions/ListValuePropertyDefinition");
// import MeetingTimeZonePropertyDefinition = require("./PropertyDefinitions/MeetingTimeZonePropertyDefinition");
// import PermissionCollectionPropertyDefinition = require("./PropertyDefinitions/PermissionCollectionPropertyDefinition");
// import PermissionSetPropertyDefinition = require("./PropertyDefinitions/PermissionSetPropertyDefinition");
// import PropertyDefinition = require("./PropertyDefinitions/PropertyDefinition");
// import PropertyDefinitionBase = require("./PropertyDefinitions/PropertyDefinitionBase");
// import RecurrencePropertyDefinition = require("./PropertyDefinitions/RecurrencePropertyDefinition");
// import ResponseObjectsPropertyDefinition = require("./PropertyDefinitions/ResponseObjectsPropertyDefinition");
// import ScopedDateTimePropertyDefinition = require("./PropertyDefinitions/ScopedDateTimePropertyDefinition");
// import ServiceObjectPropertyDefinition = require("./PropertyDefinitions/ServiceObjectPropertyDefinition");
// import StartTimeZonePropertyDefinition = require("./PropertyDefinitions/StartTimeZonePropertyDefinition");
// import StringPropertyDefinition = require("./PropertyDefinitions/StringPropertyDefinition");
// import TaskDelegationStatePropertyDefinition = require("./PropertyDefinitions/TaskDelegationStatePropertyDefinition");
// import TimeSpanPropertyDefinition = require("./PropertyDefinitions/TimeSpanPropertyDefinition");
// import TimeZonePropertyDefinition = require("./PropertyDefinitions/TimeZonePropertyDefinition");
// import TypedPropertyDefinition = require("./PropertyDefinitions/TypedPropertyDefinition");
// import ExchangeResourceManager = require("./ResourceManager/ExchangeResourceManager");
// import LocalizedString = require("./ResourceManager/LocalizedString");
// import SearchFilter = require("./Search/Filters/SearchFilter");
// import SearchFilter_ContainsSubstring = require("./Search/Filters/SearchFilter_ContainsSubstring");
// import SearchFilter_ExcludesBitmask = require("./Search/Filters/SearchFilter_ExcludesBitmask");
// import SearchFilter_Exists = require("./Search/Filters/SearchFilter_Exists");
// import SearchFilter_IsEqualTo = require("./Search/Filters/SearchFilter_IsEqualTo");
// import SearchFilter_IsGreaterThan = require("./Search/Filters/SearchFilter_IsGreaterThan");
// import SearchFilter_IsGreaterThanOrEqualTo = require("./Search/Filters/SearchFilter_IsGreaterThanOrEqualTo");
// import SearchFilter_IsLessThan = require("./Search/Filters/SearchFilter_IsLessThan");
// import SearchFilter_IsLessThanOrEqualTo = require("./Search/Filters/SearchFilter_IsLessThanOrEqualTo");
// import SearchFilter_IsNotEqualTo = require("./Search/Filters/SearchFilter_IsNotEqualTo");
// import SearchFilter_Not = require("./Search/Filters/SearchFilter_Not");
// import SearchFilter_PropertyBasedFilter = require("./Search/Filters/SearchFilter_PropertyBasedFilter");
// import SearchFilter_RelationalFilter = require("./Search/Filters/SearchFilter_RelationalFilter");
// import SearchFilter_SearchFilterCollection = require("./Search/Filters/SearchFilter_SearchFilterCollection");
// import CalendarView = require("./Search/CalendarView");
// import ConversationIndexedItemView = require("./Search/ConversationIndexedItemView");
// import FindConversationResults = require("./Search/FindConversationResults");
// import FindFoldersResults = require("./Search/FindFoldersResults");
// import FindItemsResults = require("./Search/FindItemsResults");
// import FolderView = require("./Search/FolderView");
// import GroupedFindItemsResults = require("./Search/GroupedFindItemsResults");
// import Grouping = require("./Search/Grouping");
// import ItemGroup = require("./Search/ItemGroup");
// import ItemView = require("./Search/ItemView");
// import OrderByCollection = require("./Search/OrderByCollection");
// import PagedView = require("./Search/PagedView");
// import SeekToConditionItemView = require("./Search/SeekToConditionItemView");
// import ViewBase = require("./Search/ViewBase");
// import SafeXmlDocument = require("./Security/SafeXmlDocument");
// import SafeXmlFactory = require("./Security/SafeXmlFactory");
// import SafeXmlSchema = require("./Security/SafeXmlSchema");
// import SecurityTimestamp = require("./Security/SecurityTimestamp");
// import XmlDtdException = require("./Security/XmlDtdException");
// import Change = require("./Sync/Change");
// import ChangeCollection = require("./Sync/ChangeCollection");
// import FolderChange = require("./Sync/FolderChange");
// import ItemChange = require("./Sync/ItemChange");
// import PhoneCall = require("./UnifiedMessaging/PhoneCall");
// import PhoneCallId = require("./UnifiedMessaging/PhoneCallId");
// import UnifiedMessaging = require("./UnifiedMessaging/UnifiedMessaging");
// import AltDictionary = require("./AltDictionary");
// import Constants = require("./Constants");
// import Data1 = require("./Data1");
// import DateTime = require("./DateTime");
// import ExchangeWebService = require("./");
// import ExtensionMethods = require("./ExtensionMethods");
// import Interfaces = require("./Interfaces");
// import Microsoft.Exchange.WebServices.d__ = require("./Microsoft.Exchange.WebServices.d__");
// import PromiseFactory = require("./PromiseFactory");
// import Promise_Q = require("./Promise_Q");
// import Promise_WinJS = require("./Promise_WinJS");
// import Strings = require("./Strings");
// import System.Constants.d = require("./System.Constants.d");
// import System.d = require("./System.d");
// import System.Enums.d = require("./System.Enums.d");
// import WebService.Extra = require("./WebService.Extra");
// import WebServices.Data.Extra.d = require("./WebServices.Data.Extra.d");
// import XHRFactory = require("./XHRFactory");
// import XHRFactory_WinJS = require("./XHRFactory_WinJS");
export {
// AttachableAttribute,
// EwsEnumAttribute,
// RequiredServerVersionAttribute,
// SchemaAttribute,
// ServiceObjectDefinitionAttribute,
// OutlookAccount,
// OutlookConfigurationSettings,
// OutlookProtocol,
// OutlookUser,
// ConfigurationSettingsBase,
// AutodiscoverRequest,
// GetDomainSettingsRequest,
// GetUserSettingsRequest,
// AutodiscoverResponse,
// GetDomainSettingsResponse,
// GetDomainSettingsResponseCollection,
// GetUserSettingsResponse,
// GetUserSettingsResponseCollection,
// AlternateMailbox,
// AlternateMailboxCollection,
// AutodiscoverDnsClient,
// AutodiscoverError,
// AutodiscoverResponseCollection,
// AutodiscoverService,
// AutodiscoverServiceDelegates,
// ComparisonHelpers,
// DirectoryHelper,
// DocumentSharingLocation,
// DocumentSharingLocationCollection,
// DomainSettingError,
// ProtocolConnection,
// ProtocolConnectionCollection,
// UserSettingError,
// WebClientUrl,
// WebClientUrlCollection,
// CalendarEvent,
// CalendarEventDetails,
// Conflict,
// OofSettings,
// Suggestion,
// TimeSuggestion,
// WorkingHours,
// WorkingPeriod,
// Recurrence,
// Recurrence_DailyPattern,
// Recurrence_DailyRegenerationPattern,
// Recurrence_IntervalPattern,
// Recurrence_MonthlyPattern,
// Recurrence_MonthlyRegenerationPattern,
// Recurrence_RelativeMonthlyPattern,
// Recurrence_RelativeYearlyPattern,
// Recurrence_WeeklyPattern,
// Recurrence_WeeklyRegenerationPattern,
// Recurrence_YearlyPattern,
// Recurrence_YearlyRegenerationPattern,
// EndDateRecurrenceRange,
// NoEndRecurrenceRange,
// NumberedRecurrenceRange,
// RecurrenceRange,
// DayOfTheWeekCollection,
// AbsoluteDateTransition,
// AbsoluteDayOfMonthTransition,
// AbsoluteMonthTransition,
// RelativeDayOfMonthTransition,
// TimeZoneDefinition,
// TimeZonePeriod,
// TimeZoneTransition,
// TimeZoneTransitionGroup,
// AddressEntity,
// AddressEntityCollection,
// AppointmentOccurrenceId,
// ApprovalRequestData,
// ArchiveTag,
// Attachment,
// AttachmentCollection,
// Attendee,
// AttendeeCollection,
// ByteArrayArray,
// ChangeHighlights,
// ClientAccessTokenRequest,
// ClientApp,
// ClientAppMetadata,
// ClientExtension,
// CompleteName,
// ComplexProperty,
// ComplexPropertyCollection,
// ContactEntity,
// ContactEntityCollection,
// ContactPhoneEntity,
// ContactPhoneEntityCollection,
// ConversationId,
// ConversationNode,
// ConversationNodeCollection,
// ConversationRequest,
// ConversationResponse,
// CreateRuleOperation,
// DelegatePermissions,
// DelegateUser,
// DeletedOccurrenceInfo,
// DeletedOccurrenceInfoCollection,
// DeleteRuleOperation,
// DictionaryEntryProperty,
// DictionaryProperty,
// EmailAddress,
// EmailAddressCollection,
// EmailAddressDictionary,
// EmailAddressEntity,
// EmailAddressEntityCollection,
// EmailAddressEntry,
// EmailUserEntity,
// EmailUserEntityCollection,
// EnhancedLocation,
// EntityExtractionResult,
// ExtendedProperty,
// ExtendedPropertyCollection,
// ExtractedEntity,
// FileAttachment,
// Flag,
// FolderId,
// FolderIdCollection,
// FolderPermission,
// FolderPermissionCollection,
// GenericItemAttachment,
// GroupMember,
// GroupMemberCollection,
// HighlightTerm,
// ImAddressDictionary,
// ImAddressEntry,
// InternetMessageHeader,
// InternetMessageHeaderCollection,
// ItemAttachment,
// ItemCollection,
// ItemId,
// ItemIdCollection,
// Mailbox,
// ManagedFolderInformation,
// MeetingSuggestion,
// MeetingSuggestionCollection,
// MeetingTimeZone,
// MessageBody,
// MimeContent,
// MimeContentBase,
// MimeContentUTF8,
// NormalizedBody,
// OccurrenceInfo,
// OccurrenceInfoCollection,
// OnlineMeetingSettings,
// PersonaPostalAddress,
// PhoneEntity,
// PhoneEntityCollection,
// PhoneNumberDictionary,
// PhoneNumberEntry,
// PhysicalAddressDictionary,
// PhysicalAddressEntry,
// PolicyTag,
// RecurringAppointmentMasterId,
// RetentionTagBase,
// Rule,
// RuleActions,
// RuleCollection,
// RuleError,
// RuleErrorCollection,
// RuleOperation,
// RuleOperationError,
// RuleOperationErrorCollection,
// RulePredicateDateRange,
// RulePredicates,
// RulePredicateSizeRange,
// SearchFolderParameters,
// ServiceId,
// SetClientExtensionAction,
// SetRuleOperation,
// StringList,
// TaskSuggestion,
// TaskSuggestionCollection,
// TextBody,
// TimeChange,
// TimeChangeRecurrence,
// UniqueBody,
// UrlEntity,
// UrlEntityCollection,
// UserConfigurationDictionary,
// UserId,
// VotingInformation,
// VotingOptionData,
// AddDelegateRequest,
// ApplyConversationActionRequest,
// ArchiveItemRequest,
// AsyncRequestResult,
// ConvertIdRequest,
// CopyFolderRequest,
// CopyItemRequest,
// CreateAttachmentRequest,
// CreateFolderRequest,
// CreateItemRequest,
// CreateItemRequestBase,
// CreateRequest,
// CreateResponseObjectRequest,
// CreateUserConfigurationRequest,
// DelegateManagementRequestBase,
// DeleteAttachmentRequest,
// DeleteFolderRequest,
// DeleteItemRequest,
// DeleteRequest,
// DeleteUserConfigurationRequest,
// DisableAppRequest,
// DisconnectPhoneCallRequest,
// EmptyFolderRequest,
// ExecuteDiagnosticMethodRequest,
// ExpandGroupRequest,
// FindConversationRequest,
// FindFolderRequest,
// FindItemRequest,
// FindRequest,
// GetAppManifestsRequest,
// GetAppMarketplaceUrlRequest,
// GetAttachmentRequest,
// GetClientAccessTokenRequest,
// GetClientExtensionRequest,
// GetConversationItemsRequest,
// GetDelegateRequest,
// GetDiscoverySearchConfigurationRequest,
// GetEncryptionConfigurationRequest,
// GetEventsRequest,
// GetFolderRequest,
// GetFolderRequestBase,
// GetFolderRequestForLoad,
// GetHoldOnMailboxesRequest,
// GetInboxRulesRequest,
// GetItemRequest,
// GetItemRequestBase,
// GetItemRequestForLoad,
// GetNonIndexableItemDetailsRequest,
// GetNonIndexableItemStatisticsRequest,
// GetPasswordExpirationDateRequest,
// GetPhoneCallRequest,
// GetRequest,
// GetRoomListsRequest,
// GetRoomsRequest,
// GetSearchableMailboxesRequest,
// GetServerTimeZonesRequest,
// GetStreamingEventsRequest,
// GetUserAvailabilityRequest,
// GetUserConfigurationRequest,
// GetUserOofSettingsRequest,
// GetUserRetentionPolicyTagsRequest,
// HangingRequestDisconnectEventArgs,
// HangingServiceRequestBase,
// InstallAppRequest,
// MarkAllItemsAsReadRequest,
// MarkAsJunkRequest,
// MoveCopyFolderRequest,
// MoveCopyItemRequest,
// MoveCopyRequest,
// MoveFolderRequest,
// MoveItemRequest,
// MultiResponseServiceRequest,
// PlayOnPhoneRequest,
// RemoveDelegateRequest,
// ResolveNamesRequest,
// SearchMailboxesRequest,
// SendItemRequest,
// ServiceRequestBase,
// SetClientExtensionRequest,
// SetEncryptionConfigurationRequest,
// SetHoldOnMailboxesRequest,
// SetTeamMailboxRequest,
// SetUserOofSettingsRequest,
// SimpleServiceRequestBase,
// SubscribeRequest,
// SubscribeToPullNotificationsRequest,
// SubscribeToPushNotificationsRequest,
// SubscribeToStreamingNotificationsRequest,
// SyncFolderHierarchyRequest,
// SyncFolderItemsRequest,
// UninstallAppRequest,
// UnpinTeamMailboxRequest,
// UnsubscribeRequest,
// UpdateDelegateRequest,
// UpdateFolderRequest,
// UpdateInboxRulesRequest,
// UpdateItemRequest,
// UpdateUserConfigurationRequest,
// ArchiveItemResponse,
// AttendeeAvailability,
// ConvertIdResponse,
// CreateAttachmentResponse,
// CreateFolderResponse,
// CreateItemResponse,
// CreateItemResponseBase,
// CreateResponseObjectResponse,
// DelegateManagementResponse,
// DelegateUserResponse,
// DeleteAttachmentResponse,
// DisableAppResponse,
// ExecuteDiagnosticMethodResponse,
// ExpandGroupResponse,
// FindConversationResponse,
// FindFolderResponse,
// FindItemResponse,
// GetAppManifestsResponse,
// GetAppMarketplaceUrlResponse,
// GetAttachmentResponse,
// GetClientAccessTokenResponse,
// GetClientExtensionResponse,
// GetConversationItemsResponse,
// GetDelegateResponse,
// GetDiscoverySearchConfigurationResponse,
// GetEncryptionConfigurationResponse,
// GetEventsResponse,
// GetFolderResponse,
// GetHoldOnMailboxesResponse,
// GetInboxRulesResponse,
// GetItemResponse,
// GetNonIndexableItemDetailsResponse,
// GetNonIndexableItemStatisticsResponse,
// GetPasswordExpirationDateResponse,
// GetPhoneCallResponse,
// GetRoomListsResponse,
// GetRoomsResponse,
// GetSearchableMailboxesResponse,
// GetServerTimeZonesResponse,
// GetStreamingEventsResponse,
// GetUserConfigurationResponse,
// GetUserOofSettingsResponse,
// GetUserRetentionPolicyTagsResponse,
// InstallAppResponse,
// MarkAsJunkResponse,
// MoveCopyFolderResponse,
// MoveCopyItemResponse,
// PlayOnPhoneResponse,
// ResolveNamesResponse,
// SearchMailboxesResponse,
// ServiceResponse,
// ServiceResponseCollection,
// SetEncryptionConfigurationResponse,
// SetHoldOnMailboxesResponse,
// SubscribeResponse,
// SuggestionsResponse,
// SyncFolderHierarchyResponse,
// SyncFolderItemsResponse,
// SyncResponse,
// UninstallAppResponse,
// UpdateFolderResponse,
// UpdateInboxRulesResponse,
// UpdateItemResponse,
// CalendarFolder,
// ContactsFolder,
// Folder,
// FolderInfo,
// SearchFolder,
// TasksFolder,
// Appointment,
// Contact,
// ContactGroup,
// Conversation,
// EmailMessage,
// Item,
// ItemInfo,
// MeetingCancellation,
// MeetingMessage,
// MeetingRequest,
// MeetingResponse,
// PostItem,
// Task,
// AcceptMeetingInvitationMessage,
// CalendarResponseMessage,
// CalendarResponseMessageBase,
// CancelMeetingMessage,
// DeclineMeetingInvitationMessage,
// PostReply,
// RemoveFromCalendar,
// ResponseMessage,
// ResponseObject,
// SuppressReadReceipt,
// AppointmentSchema,
// CalendarResponseObjectSchema,
// CancelMeetingMessageSchema,
// ContactGroupSchema,
// ContactSchema,
// ConversationSchema,
// EmailMessageSchema,
// FolderSchema,
// ItemSchema,
// MeetingCancellationSchema,
// MeetingMessageSchema,
// MeetingRequestSchema,
// MeetingResponseSchema,
// PostItemSchema,
// PostReplySchema,
// ResponseMessageSchema,
// ResponseObjectSchema,
// Schemas,
// SearchFolderSchema,
// ServiceObjectSchema,
// TaskSchema,
// ServiceObject,
// ServiceObjectInfo,
// EwsHttpWebRequest,
// EwsHttpWebRequestFactory,
// EwsHttpWebResponse,
// EwsLogging,
// EwsServiceJsonReader,
// EwsServiceMultiResponseXmlReader,
// EwsServiceXmlReader,
// EwsServiceXmlWriter,
// EwsUtilities,
// EwsXmlReader,
// ExchangeServerInfo,
// ExchangeService,
// ExchangeServiceBase,
// JsonNames,
// JsonObject,
// JsonParser,
// JsonTokenizer,
// JsonWriter,
// LazyMember,
// PropertyBag,
// PropertySet,
// SimplePropertyBag,
// XmlAttributeNames,
// XmlElementNames,
// BasicAuthModuleForUTF8,
// ClientCertificateCredentials,
// ExchangeCredentials,
// OAuthCredentials,
// PartnerTokenCredentials,
// TokenCredentials,
// WebCredentials,
// WindowsLiveCredentials,
// WSSecurityBasedCredentials,
// WSSecurityUtilityIdSignedXml,
// X509CertificateCredentials,
// DnsClient,
// DnsNativeMethods,
// DnsRecord,
// DnsRecordHeader,
// DnsSrvRecord,
// AddressEntity,
// RetentionPolicyTag,
// AffectedTaskOccurrence,
// AggregateType,
// AppointmentType,
// AutodiscoverEndpoints,
// AutodiscoverErrorCode,
// AutodiscoverResponseType,
// AvailabilityData,
// BasePropertySet,
// BodyType,
// ChangeType,
// ClientAccessTokenType,
// ClientExtensionProvidedTo,
// ComparisonMode,
// ConflictResolutionMode,
// ConflictType,
// ConnectingIdType,
// ConnectionFailureCause,
// ConnectionStatus,
// ContactSource,
// ContainmentMode,
// ConversationActionType,
// ConversationFlagStatus,
// ConversationQueryTraversal,
// ConversationSortOrder,
// DateTimePrecision,
// DayOfTheWeek,
// DayOfTheWeekIndex,
// DefaultExtendedPropertySet,
// DelegateFolderPermissionLevel,
// DeleteMode,
// DisableReasonType,
// DnsQueryOptions,
// DnsRecordType,
// DomainSettingName,
// EffectiveRights,
// ElcFolderType,
// EmailAddressKey,
// EmailPosition,
// EnumToExchangeVersionMappingHelper,
// EventType,
// ExchangeVersion,
// ExtensionInstallScope,
// ExtensionType,
// FileAsMapping,
// FlaggedForAction,
// FolderPermissionLevel,
// FolderPermissionReadAccess,
// FolderTraversal,
// FreeBusyViewType,
// FreeType,
// HangingRequestDisconnectReason,
// HoldAction,
// HoldStatus,
// IconIndex,
// IdFormat,
// IDs,
// ImAddressKey,
// Importance,
// ItemFlagStatus,
// ItemIndexError,
// ItemTraversal,
// JsonTokenType,
// LegacyFreeBusyStatus,
// LobbyBypass,
// LocationSource,
// LogicalOperator,
// MailboxSearchLocation,
// MailboxSearchScopeType,
// MailboxType,
// MapiPropertyType,
// MeetingAttendeeType,
// MeetingRequestsDeliveryScope,
// MeetingRequestType,
// MeetingResponseType,
// MemberStatus,
// MessageDisposition,
// Month,
// OffsetBasePoint,
// OnlineMeetingAccessLevel,
// OofExternalAudience,
// OofState,
// OutlookProtocolType,
// PermissionScope,
// PhoneCallState,
// PhoneNumberKey,
// PhysicalAddressIndex,
// PhysicalAddressKey,
// Presenters,
// PreviewItemBaseShape,
// PrivilegedLogonType,
// PrivilegedUserIdBudgetType,
// PropertyDefinitionFlags,
// RenderingMode,
// ResolveNameSearchLocation,
// ResponseActions,
// ResponseMessageType,
// RetentionActionType,
// RetentionType,
// RuleErrorCode,
// RuleProperty,
// SearchFolderTraversal,
// SearchPageDirection,
// SearchResultType,
// SendCancellationsMode,
// SendInvitationsMode,
// SendInvitationsOrCancellationsMode,
// SendPrompt,
// Sensitivity,
// ServiceError,
// ServiceErrorHandling,
// ServiceObjectType,
// ServiceResult,
// SetClientExtensionActionId,
// SortDirection,
// StandardUser,
// SuggestionQuality,
// SyncFolderItemsScope,
// TaskDelegationState,
// TaskMode,
// TaskStatus,
// TeamMailboxLifecycleState,
// TraceFlags,
// UserConfigurationDictionaryObjectType,
// UserConfigurationProperties,
// UserSettingName,
// ViewFilter,
// WellKnownFolderName,
// XmlNamespace,
// AccountIsLockedException,
// AutodiscoverLocalException,
// AutodiscoverRemoteException,
// AutodiscoverResponseException,
// BatchServiceResponseException,
// CreateAttachmentException,
// DeleteAttachmentException,
// DnsException,
// Exception,
// JsonDeserializationNotImplementedException,
// JsonSerializationNotImplementedException,
// PropertyException,
// ServerBusyException,
// ServiceJsonDeserializationException,
// ServiceLocalException,
// ServiceObjectPropertyException,
// ServiceRemoteException,
// ServiceRequestException,
// ServiceResponseException,
// ServiceValidationException,
// ServiceVersionException,
// ServiceXmlDeserializationException,
// ServiceXmlSerializationException,
// TimeZoneConversionException,
// UpdateInboxRulesException,
// ICalendarActionProvider,
// ICustomXmlUpdateSerializer,
// IEwsHttpWebRequest,
// IEwsHttpWebRequestFactory,
// IEwsHttpWebResponse,
// IFileAttachmentContentHandler,
// IJsonCollectionDeserializer,
// IJSonSerializable,
// IOutParam,
// IOwnedProperty,
// IRefParam,
// ISearchStringProvider,
// ISelfValidate,
// ITraceListener,
// DiscoverySearchConfiguration,
// ExtendedAttributes,
// FailedSearchMailbox,
// KeywordStatisticsSearchResult,
// MailboxHoldResult,
// MailboxHoldStatus,
// MailboxQuery,
// MailboxSearchScope,
// MailboxStatisticsItem,
// NonIndexableItem,
// NonIndexableItemDetailsResult,
// NonIndexableItemParameters,
// NonIndexableItemStatistic,
// PreviewItemMailbox,
// PreviewItemResponseShape,
// SearchableMailbox,
// SearchMailboxesParameters,
// SearchMailboxesResult,
// SearchPreviewItem,
// SearchRefinerItem,
// SetHoldOnMailboxesParameters,
// Versioning,
// AttendeeInfo,
// AvailabilityOptions,
// GetUserAvailabilityResults,
// LegacyAvailabilityTimeZone,
// LegacyAvailabilityTimeZoneTime,
// OofReply,
// TimeWindow,
// AlternateId,
// AlternateIdBase,
// AlternatePublicFolderId,
// AlternatePublicFolderItemId,
// AbstractFolderIdWrapper,
// AbstractItemIdWrapper,
// CalendarActionResults,
// ConversationAction,
// DelegateInformation,
// DelegateTypes,
// EwsTraceListener,
// ExpandGroupResults,
// FolderIdWrapper,
// FolderIdWrapperList,
// FolderWrapper,
// HangingTraceStream,
// ImpersonatedUserId,
// ItemIdWrapper,
// ItemIdWrapperList,
// ItemWrapper,
// ManagementRoles,
// MapiTypeConverter,
// MapiTypeConverterMapEntry,
// MobilePhone,
// NameResolution,
// NameResolutionCollection,
// PrivilegedUserId,
// SoapFaultDetails,
// Time,
// UserConfiguration,
// FolderEvent,
// GetEventsResults,
// GetStreamingEventsResults,
// ItemEvent,
// NotificationEvent,
// NotificationEventArgs,
// NotificationGroup,
// PullSubscription,
// PushSubscription,
// StreamingSubscription,
// StreamingSubscriptionConnection,
// SubscriptionBase,
// SubscriptionErrorEventArgs,
// BulkTransfer,
// Reminder,
// Utilities,
// MailTips,
// MessageTracking,
// Persona,
// ServiceConfiguration,
// Sharing,
// UnifiedContactStore,
// AttachmentsPropertyDefinition,
// BoolPropertyDefinition,
// ByteArrayPropertyDefinition,
// ComplexPropertyDefinition,
// ComplexPropertyDefinitionBase,
// ContainedPropertyDefinition,
// DateTimePropertyDefinition,
// DoublePropertyDefinition,
// EffectiveRightsPropertyDefinition,
// ExtendedPropertyDefinition,
// GenericPropertyDefinition,
// GroupMemberPropertyDefinition,
// IndexedPropertyDefinition,
// IntPropertyDefinition,
// ListValuePropertyDefinition,
// MeetingTimeZonePropertyDefinition,
// PermissionCollectionPropertyDefinition,
// PermissionSetPropertyDefinition,
// PropertyDefinition,
// PropertyDefinitionBase,
// RecurrencePropertyDefinition,
// ResponseObjectsPropertyDefinition,
// ScopedDateTimePropertyDefinition,
// ServiceObjectPropertyDefinition,
// StartTimeZonePropertyDefinition,
// StringPropertyDefinition,
// TaskDelegationStatePropertyDefinition,
// TimeSpanPropertyDefinition,
// TimeZonePropertyDefinition,
// TypedPropertyDefinition,
// ExchangeResourceManager,
// LocalizedString,
// SearchFilter,
// SearchFilter_ContainsSubstring,
// SearchFilter_ExcludesBitmask,
// SearchFilter_Exists,
// SearchFilter_IsEqualTo,
// SearchFilter_IsGreaterThan,
// SearchFilter_IsGreaterThanOrEqualTo,
// SearchFilter_IsLessThan,
// SearchFilter_IsLessThanOrEqualTo,
// SearchFilter_IsNotEqualTo,
// SearchFilter_Not,
// SearchFilter_PropertyBasedFilter,
// SearchFilter_RelationalFilter,
// SearchFilter_SearchFilterCollection,
// CalendarView,
// ConversationIndexedItemView,
// FindConversationResults,
// FindFoldersResults,
// FindItemsResults,
// FolderView,
// GroupedFindItemsResults,
// Grouping,
// ItemGroup,
// ItemView,
// OrderByCollection,
// PagedView,
// SeekToConditionItemView,
// ViewBase,
// SafeXmlDocument,
// SafeXmlFactory,
// SafeXmlSchema,
// SecurityTimestamp,
// XmlDtdException,
// Change,
// ChangeCollection,
// FolderChange,
// ItemChange,
// PhoneCall,
// PhoneCallId,
// UnifiedMessaging,
// AltDictionary,
// Constants,
// Data1,
// DateTime,
// ExchangeWebService,
// ExtensionMethods,
// Interfaces,
// Microsoft.Exchange.WebServices.d__,
// PromiseFactory,
// Promise_Q,
// Promise_WinJS,
// Strings,
// System.Constants.d,
// System.d,
// System.Enums.d,
// WebService.Extra,
// WebServices.Data.Extra.d,
// XHRFactory,
// XHRFactory_WinJS,
};
