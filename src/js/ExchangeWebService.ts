import {ServiceObjectSchema} from "./Core/ServiceObjects/Schemas/ServiceObjectSchema";
import {AppointmentSchema} from "./Core/ServiceObjects/Schemas/AppointmentSchema";

/**
 * BootStraper code. to initializes some class to avoid circular reference. 
 */

ServiceObjectSchema.AppointmentSchema = AppointmentSchema.Instance;

export { ServiceObjectSchema, AppointmentSchema};
// import {OutlookAccount} from "./Autodiscover/ConfigurationSettings/Outlook/OutlookAccount";
// import {OutlookConfigurationSettings} from "./Autodiscover/ConfigurationSettings/Outlook/OutlookConfigurationSettings";
// import {OutlookProtocol} from "./Autodiscover/ConfigurationSettings/Outlook/OutlookProtocol";
// import {OutlookUser} from "./Autodiscover/ConfigurationSettings/Outlook/OutlookUser";
// import {ConfigurationSettingsBase} from "./Autodiscover/ConfigurationSettings/ConfigurationSettingsBase";
// import {AutodiscoverRequest} from "./Autodiscover/Requests/AutodiscoverRequest";
// import {GetDomainSettingsRequest} from "./Autodiscover/Requests/GetDomainSettingsRequest";
// import {GetUserSettingsRequest} from "./Autodiscover/Requests/GetUserSettingsRequest";
// import {AutodiscoverResponse} from "./Autodiscover/Responses/AutodiscoverResponse";
// import {GetDomainSettingsResponse} from "./Autodiscover/Responses/GetDomainSettingsResponse";
// import {GetDomainSettingsResponseCollection} from "./Autodiscover/Responses/GetDomainSettingsResponseCollection";
// import {GetUserSettingsResponse} from "./Autodiscover/Responses/GetUserSettingsResponse";
// import {GetUserSettingsResponseCollection} from "./Autodiscover/Responses/GetUserSettingsResponseCollection";
// import {AlternateMailbox} from "./Autodiscover/AlternateMailbox";
// import {AlternateMailboxCollection} from "./Autodiscover/AlternateMailboxCollection";
// import {AutodiscoverDnsClient} from "./Autodiscover/AutodiscoverDnsClient";
// import {AutodiscoverError} from "./Autodiscover/AutodiscoverError";
// import {AutodiscoverResponseCollection} from "./Autodiscover/AutodiscoverResponseCollection";
// import {AutodiscoverService} from "./Autodiscover/AutodiscoverService";
// import {AutodiscoverServiceDelegates} from "./Autodiscover/AutodiscoverServiceDelegates";
// import {ComparisonHelpers} from "./Autodiscover/ComparisonHelpers";
// import {DirectoryHelper} from "./Autodiscover/DirectoryHelper";
// import {DocumentSharingLocation} from "./Autodiscover/DocumentSharingLocation";
// import {DocumentSharingLocationCollection} from "./Autodiscover/DocumentSharingLocationCollection";
// import {DomainSettingError} from "./Autodiscover/DomainSettingError";
// import {ProtocolConnection} from "./Autodiscover/ProtocolConnection";
// import {ProtocolConnectionCollection} from "./Autodiscover/ProtocolConnectionCollection";
// import {UserSettingError} from "./Autodiscover/UserSettingError";
// import {WebClientUrl} from "./Autodiscover/WebClientUrl";
// import {WebClientUrlCollection} from "./Autodiscover/WebClientUrlCollection";
// import {CalendarEvent} from "./ComplexProperties/Availability/CalendarEvent";
// import {CalendarEventDetails} from "./ComplexProperties/Availability/CalendarEventDetails";
// import {Conflict} from "./ComplexProperties/Availability/Conflict";
// import {OofSettings} from "./ComplexProperties/Availability/OofSettings";
// import {Suggestion} from "./ComplexProperties/Availability/Suggestion";
// import {TimeSuggestion} from "./ComplexProperties/Availability/TimeSuggestion";
// import {WorkingHours} from "./ComplexProperties/Availability/WorkingHours";
// import {WorkingPeriod} from "./ComplexProperties/Availability/WorkingPeriod";
// import {Recurrence} from "./ComplexProperties/Recurrence/Patterns/Recurrence";
// import {Recurrence_DailyPattern} from "./ComplexProperties/Recurrence/Patterns/Recurrence_DailyPattern";
// import {Recurrence_DailyRegenerationPattern} from "./ComplexProperties/Recurrence/Patterns/Recurrence_DailyRegenerationPattern";
// import {Recurrence_IntervalPattern} from "./ComplexProperties/Recurrence/Patterns/Recurrence_IntervalPattern";
// import {Recurrence_MonthlyPattern} from "./ComplexProperties/Recurrence/Patterns/Recurrence_MonthlyPattern";
// import {Recurrence_MonthlyRegenerationPattern} from "./ComplexProperties/Recurrence/Patterns/Recurrence_MonthlyRegenerationPattern";
// import {Recurrence_RelativeMonthlyPattern} from "./ComplexProperties/Recurrence/Patterns/Recurrence_RelativeMonthlyPattern";
// import {Recurrence_RelativeYearlyPattern} from "./ComplexProperties/Recurrence/Patterns/Recurrence_RelativeYearlyPattern";
// import {Recurrence_WeeklyPattern} from "./ComplexProperties/Recurrence/Patterns/Recurrence_WeeklyPattern";
// import {Recurrence_WeeklyRegenerationPattern} from "./ComplexProperties/Recurrence/Patterns/Recurrence_WeeklyRegenerationPattern";
// import {Recurrence_YearlyPattern} from "./ComplexProperties/Recurrence/Patterns/Recurrence_YearlyPattern";
// import {Recurrence_YearlyRegenerationPattern} from "./ComplexProperties/Recurrence/Patterns/Recurrence_YearlyRegenerationPattern";
// import {EndDateRecurrenceRange} from "./ComplexProperties/Recurrence/Ranges/EndDateRecurrenceRange";
// import {NoEndRecurrenceRange} from "./ComplexProperties/Recurrence/Ranges/NoEndRecurrenceRange";
// import {NumberedRecurrenceRange} from "./ComplexProperties/Recurrence/Ranges/NumberedRecurrenceRange";
// import {RecurrenceRange} from "./ComplexProperties/Recurrence/Ranges/RecurrenceRange";
// import {DayOfTheWeekCollection} from "./ComplexProperties/Recurrence/DayOfTheWeekCollection";
// import {AbsoluteDateTransition} from "./ComplexProperties/TimeZones/AbsoluteDateTransition";
// import {AbsoluteDayOfMonthTransition} from "./ComplexProperties/TimeZones/AbsoluteDayOfMonthTransition";
// import {AbsoluteMonthTransition} from "./ComplexProperties/TimeZones/AbsoluteMonthTransition";
// import {RelativeDayOfMonthTransition} from "./ComplexProperties/TimeZones/RelativeDayOfMonthTransition";
// import {TimeZoneDefinition} from "./ComplexProperties/TimeZones/TimeZoneDefinition";
// import {TimeZonePeriod} from "./ComplexProperties/TimeZones/TimeZonePeriod";
// import {TimeZoneTransition} from "./ComplexProperties/TimeZones/TimeZoneTransition";
// import {TimeZoneTransitionGroup} from "./ComplexProperties/TimeZones/TimeZoneTransitionGroup";
// import {AddressEntity} from "./ComplexProperties/AddressEntity";
// import {AddressEntityCollection} from "./ComplexProperties/AddressEntityCollection";
// import {AppointmentOccurrenceId} from "./ComplexProperties/AppointmentOccurrenceId";
// import {ApprovalRequestData} from "./ComplexProperties/ApprovalRequestData";
// import {ArchiveTag} from "./ComplexProperties/ArchiveTag";
// import {Attachment} from "./ComplexProperties/Attachment";
// import {AttachmentCollection} from "./ComplexProperties/AttachmentCollection";
// import {Attendee} from "./ComplexProperties/Attendee";
// import {AttendeeCollection} from "./ComplexProperties/AttendeeCollection";
// import {ByteArrayArray} from "./ComplexProperties/ByteArrayArray";
// import {ChangeHighlights} from "./ComplexProperties/ChangeHighlights";
// import {ClientAccessTokenRequest} from "./ComplexProperties/ClientAccessTokenRequest";
// import {ClientApp} from "./ComplexProperties/ClientApp";
// import {ClientAppMetadata} from "./ComplexProperties/ClientAppMetadata";
// import {ClientExtension} from "./ComplexProperties/ClientExtension";
// import {CompleteName} from "./ComplexProperties/CompleteName";
// import {ComplexProperty} from "./ComplexProperties/ComplexProperty";
// import {ComplexPropertyCollection} from "./ComplexProperties/ComplexPropertyCollection";
// import {ContactEntity} from "./ComplexProperties/ContactEntity";
// import {ContactEntityCollection} from "./ComplexProperties/ContactEntityCollection";
// import {ContactPhoneEntity} from "./ComplexProperties/ContactPhoneEntity";
// import {ContactPhoneEntityCollection} from "./ComplexProperties/ContactPhoneEntityCollection";
// import {ConversationId} from "./ComplexProperties/ConversationId";
// import {ConversationNode} from "./ComplexProperties/ConversationNode";
// import {ConversationNodeCollection} from "./ComplexProperties/ConversationNodeCollection";
// import {ConversationRequest} from "./ComplexProperties/ConversationRequest";
// import {ConversationResponse} from "./ComplexProperties/ConversationResponse";
// import {CreateRuleOperation} from "./ComplexProperties/CreateRuleOperation";
// import {DelegatePermissions} from "./ComplexProperties/DelegatePermissions";
// import {DelegateUser} from "./ComplexProperties/DelegateUser";
// import {DeletedOccurrenceInfo} from "./ComplexProperties/DeletedOccurrenceInfo";
// import {DeletedOccurrenceInfoCollection} from "./ComplexProperties/DeletedOccurrenceInfoCollection";
// import {DeleteRuleOperation} from "./ComplexProperties/DeleteRuleOperation";
// import {DictionaryEntryProperty} from "./ComplexProperties/DictionaryEntryProperty";
// import {DictionaryProperty} from "./ComplexProperties/DictionaryProperty";
// import {EmailAddress} from "./ComplexProperties/EmailAddress";
// import {EmailAddressCollection} from "./ComplexProperties/EmailAddressCollection";
// import {EmailAddressDictionary} from "./ComplexProperties/EmailAddressDictionary";
// import {EmailAddressEntity} from "./ComplexProperties/EmailAddressEntity";
// import {EmailAddressEntityCollection} from "./ComplexProperties/EmailAddressEntityCollection";
// import {EmailAddressEntry} from "./ComplexProperties/EmailAddressEntry";
// import {EmailUserEntity} from "./ComplexProperties/EmailUserEntity";
// import {EmailUserEntityCollection} from "./ComplexProperties/EmailUserEntityCollection";
// import {EnhancedLocation} from "./ComplexProperties/EnhancedLocation";
// import {EntityExtractionResult} from "./ComplexProperties/EntityExtractionResult";
// import {ExtendedProperty} from "./ComplexProperties/ExtendedProperty";
// import {ExtendedPropertyCollection} from "./ComplexProperties/ExtendedPropertyCollection";
// import {ExtractedEntity} from "./ComplexProperties/ExtractedEntity";
// import {FileAttachment} from "./ComplexProperties/FileAttachment";
// import {Flag} from "./ComplexProperties/Flag";
// import {FolderId} from "./ComplexProperties/FolderId";
// import {FolderIdCollection} from "./ComplexProperties/FolderIdCollection";
// import {FolderPermission} from "./ComplexProperties/FolderPermission";
// import {FolderPermissionCollection} from "./ComplexProperties/FolderPermissionCollection";
// import {GenericItemAttachment} from "./ComplexProperties/GenericItemAttachment";
// import {GroupMember} from "./ComplexProperties/GroupMember";
// import {GroupMemberCollection} from "./ComplexProperties/GroupMemberCollection";
// import {HighlightTerm} from "./ComplexProperties/HighlightTerm";
// import {ImAddressDictionary} from "./ComplexProperties/ImAddressDictionary";
// import {ImAddressEntry} from "./ComplexProperties/ImAddressEntry";
// import {InternetMessageHeader} from "./ComplexProperties/InternetMessageHeader";
// import {InternetMessageHeaderCollection} from "./ComplexProperties/InternetMessageHeaderCollection";
// import {ItemAttachment} from "./ComplexProperties/ItemAttachment";
// import {ItemCollection} from "./ComplexProperties/ItemCollection";
// import {ItemId} from "./ComplexProperties/ItemId";
// import {ItemIdCollection} from "./ComplexProperties/ItemIdCollection";
// import {Mailbox} from "./ComplexProperties/Mailbox";
// import {ManagedFolderInformation} from "./ComplexProperties/ManagedFolderInformation";
// import {MeetingSuggestion} from "./ComplexProperties/MeetingSuggestion";
// import {MeetingSuggestionCollection} from "./ComplexProperties/MeetingSuggestionCollection";
// import {MeetingTimeZone} from "./ComplexProperties/MeetingTimeZone";
// import {MessageBody} from "./ComplexProperties/MessageBody";
// import {MimeContent} from "./ComplexProperties/MimeContent";
// import {MimeContentBase} from "./ComplexProperties/MimeContentBase";
// import {MimeContentUTF8} from "./ComplexProperties/MimeContentUTF8";
// import {NormalizedBody} from "./ComplexProperties/NormalizedBody";
// import {OccurrenceInfo} from "./ComplexProperties/OccurrenceInfo";
// import {OccurrenceInfoCollection} from "./ComplexProperties/OccurrenceInfoCollection";
// import {OnlineMeetingSettings} from "./ComplexProperties/OnlineMeetingSettings";
// import {PersonaPostalAddress} from "./ComplexProperties/PersonaPostalAddress";
// import {PhoneEntity} from "./ComplexProperties/PhoneEntity";
// import {PhoneEntityCollection} from "./ComplexProperties/PhoneEntityCollection";
// import {PhoneNumberDictionary} from "./ComplexProperties/PhoneNumberDictionary";
// import {PhoneNumberEntry} from "./ComplexProperties/PhoneNumberEntry";
// import {PhysicalAddressDictionary} from "./ComplexProperties/PhysicalAddressDictionary";
// import {PhysicalAddressEntry} from "./ComplexProperties/PhysicalAddressEntry";
// import {PolicyTag} from "./ComplexProperties/PolicyTag";
// import {RecurringAppointmentMasterId} from "./ComplexProperties/RecurringAppointmentMasterId";
// import {RetentionTagBase} from "./ComplexProperties/RetentionTagBase";
// import {Rule} from "./ComplexProperties/Rule";
// import {RuleActions} from "./ComplexProperties/RuleActions";
// import {RuleCollection} from "./ComplexProperties/RuleCollection";
// import {RuleError} from "./ComplexProperties/RuleError";
// import {RuleErrorCollection} from "./ComplexProperties/RuleErrorCollection";
// import {RuleOperation} from "./ComplexProperties/RuleOperation";
// import {RuleOperationError} from "./ComplexProperties/RuleOperationError";
// import {RuleOperationErrorCollection} from "./ComplexProperties/RuleOperationErrorCollection";
// import {RulePredicateDateRange} from "./ComplexProperties/RulePredicateDateRange";
// import {RulePredicates} from "./ComplexProperties/RulePredicates";
// import {RulePredicateSizeRange} from "./ComplexProperties/RulePredicateSizeRange";
// import {SearchFolderParameters} from "./ComplexProperties/SearchFolderParameters";
// import {ServiceId} from "./ComplexProperties/ServiceId";
// import {SetClientExtensionAction} from "./ComplexProperties/SetClientExtensionAction";
// import {SetRuleOperation} from "./ComplexProperties/SetRuleOperation";
// import {StringList} from "./ComplexProperties/StringList";
// import {TaskSuggestion} from "./ComplexProperties/TaskSuggestion";
// import {TaskSuggestionCollection} from "./ComplexProperties/TaskSuggestionCollection";
// import {TextBody} from "./ComplexProperties/TextBody";
// import {TimeChange} from "./ComplexProperties/TimeChange";
// import {TimeChangeRecurrence} from "./ComplexProperties/TimeChangeRecurrence";
// import {UniqueBody} from "./ComplexProperties/UniqueBody";
// import {UrlEntity} from "./ComplexProperties/UrlEntity";
// import {UrlEntityCollection} from "./ComplexProperties/UrlEntityCollection";
// import {UserConfigurationDictionary} from "./ComplexProperties/UserConfigurationDictionary";
// import {UserId} from "./ComplexProperties/UserId";
// import {VotingInformation} from "./ComplexProperties/VotingInformation";
// import {VotingOptionData} from "./ComplexProperties/VotingOptionData";
// import {AddDelegateRequest} from "./Core/Requests/AddDelegateRequest";
// import {ApplyConversationActionRequest} from "./Core/Requests/ApplyConversationActionRequest";
// import {ArchiveItemRequest} from "./Core/Requests/ArchiveItemRequest";
// import {AsyncRequestResult} from "./Core/Requests/AsyncRequestResult";
// import {ConvertIdRequest} from "./Core/Requests/ConvertIdRequest";
// import {CopyFolderRequest} from "./Core/Requests/CopyFolderRequest";
// import {CopyItemRequest} from "./Core/Requests/CopyItemRequest";
// import {CreateAttachmentRequest} from "./Core/Requests/CreateAttachmentRequest";
// import {CreateFolderRequest} from "./Core/Requests/CreateFolderRequest";
// import {CreateItemRequest} from "./Core/Requests/CreateItemRequest";
// import {CreateItemRequestBase} from "./Core/Requests/CreateItemRequestBase";
// import {CreateRequest} from "./Core/Requests/CreateRequest";
// import {CreateResponseObjectRequest} from "./Core/Requests/CreateResponseObjectRequest";
// import {CreateUserConfigurationRequest} from "./Core/Requests/CreateUserConfigurationRequest";
// import {DelegateManagementRequestBase} from "./Core/Requests/DelegateManagementRequestBase";
// import {DeleteAttachmentRequest} from "./Core/Requests/DeleteAttachmentRequest";
// import {DeleteFolderRequest} from "./Core/Requests/DeleteFolderRequest";
// import {DeleteItemRequest} from "./Core/Requests/DeleteItemRequest";
// import {DeleteRequest} from "./Core/Requests/DeleteRequest";
// import {DeleteUserConfigurationRequest} from "./Core/Requests/DeleteUserConfigurationRequest";
// import {DisableAppRequest} from "./Core/Requests/DisableAppRequest";
// import {DisconnectPhoneCallRequest} from "./Core/Requests/DisconnectPhoneCallRequest";
// import {EmptyFolderRequest} from "./Core/Requests/EmptyFolderRequest";
// import {ExecuteDiagnosticMethodRequest} from "./Core/Requests/ExecuteDiagnosticMethodRequest";
// import {ExpandGroupRequest} from "./Core/Requests/ExpandGroupRequest";
// import {FindConversationRequest} from "./Core/Requests/FindConversationRequest";
// import {FindFolderRequest} from "./Core/Requests/FindFolderRequest";
// import {FindItemRequest} from "./Core/Requests/FindItemRequest";
// import {FindRequest} from "./Core/Requests/FindRequest";
// import {GetAppManifestsRequest} from "./Core/Requests/GetAppManifestsRequest";
// import {GetAppMarketplaceUrlRequest} from "./Core/Requests/GetAppMarketplaceUrlRequest";
// import {GetAttachmentRequest} from "./Core/Requests/GetAttachmentRequest";
// import {GetClientAccessTokenRequest} from "./Core/Requests/GetClientAccessTokenRequest";
// import {GetClientExtensionRequest} from "./Core/Requests/GetClientExtensionRequest";
// import {GetConversationItemsRequest} from "./Core/Requests/GetConversationItemsRequest";
// import {GetDelegateRequest} from "./Core/Requests/GetDelegateRequest";
// import {GetDiscoverySearchConfigurationRequest} from "./Core/Requests/GetDiscoverySearchConfigurationRequest";
// import {GetEncryptionConfigurationRequest} from "./Core/Requests/GetEncryptionConfigurationRequest";
// import {GetEventsRequest} from "./Core/Requests/GetEventsRequest";
// import {GetFolderRequest} from "./Core/Requests/GetFolderRequest";
// import {GetFolderRequestBase} from "./Core/Requests/GetFolderRequestBase";
// import {GetFolderRequestForLoad} from "./Core/Requests/GetFolderRequestForLoad";
// import {GetHoldOnMailboxesRequest} from "./Core/Requests/GetHoldOnMailboxesRequest";
// import {GetInboxRulesRequest} from "./Core/Requests/GetInboxRulesRequest";
// import {GetItemRequest} from "./Core/Requests/GetItemRequest";
// import {GetItemRequestBase} from "./Core/Requests/GetItemRequestBase";
// import {GetItemRequestForLoad} from "./Core/Requests/GetItemRequestForLoad";
// import {GetNonIndexableItemDetailsRequest} from "./Core/Requests/GetNonIndexableItemDetailsRequest";
// import {GetNonIndexableItemStatisticsRequest} from "./Core/Requests/GetNonIndexableItemStatisticsRequest";
// import {GetPasswordExpirationDateRequest} from "./Core/Requests/GetPasswordExpirationDateRequest";
// import {GetPhoneCallRequest} from "./Core/Requests/GetPhoneCallRequest";
// import {GetRequest} from "./Core/Requests/GetRequest";
// import {GetRoomListsRequest} from "./Core/Requests/GetRoomListsRequest";
// import {GetRoomsRequest} from "./Core/Requests/GetRoomsRequest";
// import {GetSearchableMailboxesRequest} from "./Core/Requests/GetSearchableMailboxesRequest";
// import {GetServerTimeZonesRequest} from "./Core/Requests/GetServerTimeZonesRequest";
// import {GetStreamingEventsRequest} from "./Core/Requests/GetStreamingEventsRequest";
// import {GetUserAvailabilityRequest} from "./Core/Requests/GetUserAvailabilityRequest";
// import {GetUserConfigurationRequest} from "./Core/Requests/GetUserConfigurationRequest";
// import {GetUserOofSettingsRequest} from "./Core/Requests/GetUserOofSettingsRequest";
// import {GetUserRetentionPolicyTagsRequest} from "./Core/Requests/GetUserRetentionPolicyTagsRequest";
// import {HangingRequestDisconnectEventArgs} from "./Core/Requests/HangingRequestDisconnectEventArgs";
// import {HangingServiceRequestBase} from "./Core/Requests/HangingServiceRequestBase";
// import {InstallAppRequest} from "./Core/Requests/InstallAppRequest";
// import {MarkAllItemsAsReadRequest} from "./Core/Requests/MarkAllItemsAsReadRequest";
// import {MarkAsJunkRequest} from "./Core/Requests/MarkAsJunkRequest";
// import {MoveCopyFolderRequest} from "./Core/Requests/MoveCopyFolderRequest";
// import {MoveCopyItemRequest} from "./Core/Requests/MoveCopyItemRequest";
// import {MoveCopyRequest} from "./Core/Requests/MoveCopyRequest";
// import {MoveFolderRequest} from "./Core/Requests/MoveFolderRequest";
// import {MoveItemRequest} from "./Core/Requests/MoveItemRequest";
// import {MultiResponseServiceRequest} from "./Core/Requests/MultiResponseServiceRequest";
// import {PlayOnPhoneRequest} from "./Core/Requests/PlayOnPhoneRequest";
// import {RemoveDelegateRequest} from "./Core/Requests/RemoveDelegateRequest";
// import {ResolveNamesRequest} from "./Core/Requests/ResolveNamesRequest";
// import {SearchMailboxesRequest} from "./Core/Requests/SearchMailboxesRequest";
// import {SendItemRequest} from "./Core/Requests/SendItemRequest";
// import {ServiceRequestBase} from "./Core/Requests/ServiceRequestBase";
// import {SetClientExtensionRequest} from "./Core/Requests/SetClientExtensionRequest";
// import {SetEncryptionConfigurationRequest} from "./Core/Requests/SetEncryptionConfigurationRequest";
// import {SetHoldOnMailboxesRequest} from "./Core/Requests/SetHoldOnMailboxesRequest";
// import {SetTeamMailboxRequest} from "./Core/Requests/SetTeamMailboxRequest";
// import {SetUserOofSettingsRequest} from "./Core/Requests/SetUserOofSettingsRequest";
// import {SimpleServiceRequestBase} from "./Core/Requests/SimpleServiceRequestBase";
// import {SubscribeRequest} from "./Core/Requests/SubscribeRequest";
// import {SubscribeToPullNotificationsRequest} from "./Core/Requests/SubscribeToPullNotificationsRequest";
// import {SubscribeToPushNotificationsRequest} from "./Core/Requests/SubscribeToPushNotificationsRequest";
// import {SubscribeToStreamingNotificationsRequest} from "./Core/Requests/SubscribeToStreamingNotificationsRequest";
// import {SyncFolderHierarchyRequest} from "./Core/Requests/SyncFolderHierarchyRequest";
// import {SyncFolderItemsRequest} from "./Core/Requests/SyncFolderItemsRequest";
// import {UninstallAppRequest} from "./Core/Requests/UninstallAppRequest";
// import {UnpinTeamMailboxRequest} from "./Core/Requests/UnpinTeamMailboxRequest";
// import {UnsubscribeRequest} from "./Core/Requests/UnsubscribeRequest";
// import {UpdateDelegateRequest} from "./Core/Requests/UpdateDelegateRequest";
// import {UpdateFolderRequest} from "./Core/Requests/UpdateFolderRequest";
// import {UpdateInboxRulesRequest} from "./Core/Requests/UpdateInboxRulesRequest";
// import {UpdateItemRequest} from "./Core/Requests/UpdateItemRequest";
// import {UpdateUserConfigurationRequest} from "./Core/Requests/UpdateUserConfigurationRequest";
// import {ArchiveItemResponse} from "./Core/Responses/ArchiveItemResponse";
// import {AttendeeAvailability} from "./Core/Responses/AttendeeAvailability";
// import {ConvertIdResponse} from "./Core/Responses/ConvertIdResponse";
// import {CreateAttachmentResponse} from "./Core/Responses/CreateAttachmentResponse";
// import {CreateFolderResponse} from "./Core/Responses/CreateFolderResponse";
// import {CreateItemResponse} from "./Core/Responses/CreateItemResponse";
// import {CreateItemResponseBase} from "./Core/Responses/CreateItemResponseBase";
// import {CreateResponseObjectResponse} from "./Core/Responses/CreateResponseObjectResponse";
// import {DelegateManagementResponse} from "./Core/Responses/DelegateManagementResponse";
// import {DelegateUserResponse} from "./Core/Responses/DelegateUserResponse";
// import {DeleteAttachmentResponse} from "./Core/Responses/DeleteAttachmentResponse";
// import {DisableAppResponse} from "./Core/Responses/DisableAppResponse";
// import {ExecuteDiagnosticMethodResponse} from "./Core/Responses/ExecuteDiagnosticMethodResponse";
// import {ExpandGroupResponse} from "./Core/Responses/ExpandGroupResponse";
// import {FindConversationResponse} from "./Core/Responses/FindConversationResponse";
// import {FindFolderResponse} from "./Core/Responses/FindFolderResponse";
// import {FindItemResponse} from "./Core/Responses/FindItemResponse";
// import {GetAppManifestsResponse} from "./Core/Responses/GetAppManifestsResponse";
// import {GetAppMarketplaceUrlResponse} from "./Core/Responses/GetAppMarketplaceUrlResponse";
// import {GetAttachmentResponse} from "./Core/Responses/GetAttachmentResponse";
// import {GetClientAccessTokenResponse} from "./Core/Responses/GetClientAccessTokenResponse";
// import {GetClientExtensionResponse} from "./Core/Responses/GetClientExtensionResponse";
// import {GetConversationItemsResponse} from "./Core/Responses/GetConversationItemsResponse";
// import {GetDelegateResponse} from "./Core/Responses/GetDelegateResponse";
// import {GetDiscoverySearchConfigurationResponse} from "./Core/Responses/GetDiscoverySearchConfigurationResponse";
// import {GetEncryptionConfigurationResponse} from "./Core/Responses/GetEncryptionConfigurationResponse";
// import {GetEventsResponse} from "./Core/Responses/GetEventsResponse";
// import {GetFolderResponse} from "./Core/Responses/GetFolderResponse";
// import {GetHoldOnMailboxesResponse} from "./Core/Responses/GetHoldOnMailboxesResponse";
// import {GetInboxRulesResponse} from "./Core/Responses/GetInboxRulesResponse";
// import {GetItemResponse} from "./Core/Responses/GetItemResponse";
// import {GetNonIndexableItemDetailsResponse} from "./Core/Responses/GetNonIndexableItemDetailsResponse";
// import {GetNonIndexableItemStatisticsResponse} from "./Core/Responses/GetNonIndexableItemStatisticsResponse";
// import {GetPasswordExpirationDateResponse} from "./Core/Responses/GetPasswordExpirationDateResponse";
// import {GetPhoneCallResponse} from "./Core/Responses/GetPhoneCallResponse";
// import {GetRoomListsResponse} from "./Core/Responses/GetRoomListsResponse";
// import {GetRoomsResponse} from "./Core/Responses/GetRoomsResponse";
// import {GetSearchableMailboxesResponse} from "./Core/Responses/GetSearchableMailboxesResponse";
// import {GetServerTimeZonesResponse} from "./Core/Responses/GetServerTimeZonesResponse";
// import {GetStreamingEventsResponse} from "./Core/Responses/GetStreamingEventsResponse";
// import {GetUserConfigurationResponse} from "./Core/Responses/GetUserConfigurationResponse";
// import {GetUserOofSettingsResponse} from "./Core/Responses/GetUserOofSettingsResponse";
// import {GetUserRetentionPolicyTagsResponse} from "./Core/Responses/GetUserRetentionPolicyTagsResponse";
// import {InstallAppResponse} from "./Core/Responses/InstallAppResponse";
// import {MarkAsJunkResponse} from "./Core/Responses/MarkAsJunkResponse";
// import {MoveCopyFolderResponse} from "./Core/Responses/MoveCopyFolderResponse";
// import {MoveCopyItemResponse} from "./Core/Responses/MoveCopyItemResponse";
// import {PlayOnPhoneResponse} from "./Core/Responses/PlayOnPhoneResponse";
// import {ResolveNamesResponse} from "./Core/Responses/ResolveNamesResponse";
// import {SearchMailboxesResponse} from "./Core/Responses/SearchMailboxesResponse";
// import {ServiceResponse} from "./Core/Responses/ServiceResponse";
// import {ServiceResponseCollection} from "./Core/Responses/ServiceResponseCollection";
// import {SetEncryptionConfigurationResponse} from "./Core/Responses/SetEncryptionConfigurationResponse";
// import {SetHoldOnMailboxesResponse} from "./Core/Responses/SetHoldOnMailboxesResponse";
// import {SubscribeResponse} from "./Core/Responses/SubscribeResponse";
// import {SuggestionsResponse} from "./Core/Responses/SuggestionsResponse";
// import {SyncFolderHierarchyResponse} from "./Core/Responses/SyncFolderHierarchyResponse";
// import {SyncFolderItemsResponse} from "./Core/Responses/SyncFolderItemsResponse";
// import {SyncResponse} from "./Core/Responses/SyncResponse";
// import {UninstallAppResponse} from "./Core/Responses/UninstallAppResponse";
// import {UpdateFolderResponse} from "./Core/Responses/UpdateFolderResponse";
// import {UpdateInboxRulesResponse} from "./Core/Responses/UpdateInboxRulesResponse";
// import {UpdateItemResponse} from "./Core/Responses/UpdateItemResponse";
// import {CalendarFolder} from "./Core/ServiceObjects/Folders/CalendarFolder";
// import {ContactsFolder} from "./Core/ServiceObjects/Folders/ContactsFolder";
// import {Folder} from "./Core/ServiceObjects/Folders/Folder";
// import {FolderInfo} from "./Core/ServiceObjects/Folders/FolderInfo";
// import {SearchFolder} from "./Core/ServiceObjects/Folders/SearchFolder";
// import {TasksFolder} from "./Core/ServiceObjects/Folders/TasksFolder";
// import {Appointment} from "./Core/ServiceObjects/Items/Appointment";
// import {Contact} from "./Core/ServiceObjects/Items/Contact";
// import {ContactGroup} from "./Core/ServiceObjects/Items/ContactGroup";
// import {Conversation} from "./Core/ServiceObjects/Items/Conversation";
// import {EmailMessage} from "./Core/ServiceObjects/Items/EmailMessage";
// import {Item} from "./Core/ServiceObjects/Items/Item";
// import {ItemInfo} from "./Core/ServiceObjects/Items/ItemInfo";
// import {MeetingCancellation} from "./Core/ServiceObjects/Items/MeetingCancellation";
// import {MeetingMessage} from "./Core/ServiceObjects/Items/MeetingMessage";
// import {MeetingRequest} from "./Core/ServiceObjects/Items/MeetingRequest";
// import {MeetingResponse} from "./Core/ServiceObjects/Items/MeetingResponse";
// import {PostItem} from "./Core/ServiceObjects/Items/PostItem";
// import {Task} from "./Core/ServiceObjects/Items/Task";
// import {AcceptMeetingInvitationMessage} from "./Core/ServiceObjects/ResponseObjects/AcceptMeetingInvitationMessage";
// import {CalendarResponseMessage} from "./Core/ServiceObjects/ResponseObjects/CalendarResponseMessage";
// import {CalendarResponseMessageBase} from "./Core/ServiceObjects/ResponseObjects/CalendarResponseMessageBase";
// import {CancelMeetingMessage} from "./Core/ServiceObjects/ResponseObjects/CancelMeetingMessage";
// import {DeclineMeetingInvitationMessage} from "./Core/ServiceObjects/ResponseObjects/DeclineMeetingInvitationMessage";
// import {PostReply} from "./Core/ServiceObjects/ResponseObjects/PostReply";
// import {RemoveFromCalendar} from "./Core/ServiceObjects/ResponseObjects/RemoveFromCalendar";
// import {ResponseMessage} from "./Core/ServiceObjects/ResponseObjects/ResponseMessage";
// import {ResponseObject} from "./Core/ServiceObjects/ResponseObjects/ResponseObject";
// import {SuppressReadReceipt} from "./Core/ServiceObjects/ResponseObjects/SuppressReadReceipt";
// import {AppointmentSchema} from "./Core/ServiceObjects/Schemas/AppointmentSchema";
// import {CalendarResponseObjectSchema} from "./Core/ServiceObjects/Schemas/CalendarResponseObjectSchema";
// import {CancelMeetingMessageSchema} from "./Core/ServiceObjects/Schemas/CancelMeetingMessageSchema";
// import {ContactGroupSchema} from "./Core/ServiceObjects/Schemas/ContactGroupSchema";
// import {ContactSchema} from "./Core/ServiceObjects/Schemas/ContactSchema";
// import {ConversationSchema} from "./Core/ServiceObjects/Schemas/ConversationSchema";
// import {EmailMessageSchema} from "./Core/ServiceObjects/Schemas/EmailMessageSchema";
// import {FolderSchema} from "./Core/ServiceObjects/Schemas/FolderSchema";
// import {ItemSchema} from "./Core/ServiceObjects/Schemas/ItemSchema";
// import {MeetingCancellationSchema} from "./Core/ServiceObjects/Schemas/MeetingCancellationSchema";
// import {MeetingMessageSchema} from "./Core/ServiceObjects/Schemas/MeetingMessageSchema";
// import {MeetingRequestSchema} from "./Core/ServiceObjects/Schemas/MeetingRequestSchema";
// import {MeetingResponseSchema} from "./Core/ServiceObjects/Schemas/MeetingResponseSchema";
// import {PostItemSchema} from "./Core/ServiceObjects/Schemas/PostItemSchema";
// import {PostReplySchema} from "./Core/ServiceObjects/Schemas/PostReplySchema";
// import {ResponseMessageSchema} from "./Core/ServiceObjects/Schemas/ResponseMessageSchema";
// import {ResponseObjectSchema} from "./Core/ServiceObjects/Schemas/ResponseObjectSchema";
// import {Schemas} from "./Core/ServiceObjects/Schemas/Schemas";
// import {SearchFolderSchema} from "./Core/ServiceObjects/Schemas/SearchFolderSchema";
// import {ServiceObjectSchema} from "./Core/ServiceObjects/Schemas/ServiceObjectSchema";
// import {TaskSchema} from "./Core/ServiceObjects/Schemas/TaskSchema";
// import {ServiceObject} from "./Core/ServiceObjects/ServiceObject";
// import {ServiceObjectInfo} from "./Core/ServiceObjects/ServiceObjectInfo";
// import {EwsHttpWebRequest} from "./Core/EwsHttpWebRequest";
// import {EwsHttpWebRequestFactory} from "./Core/EwsHttpWebRequestFactory";
// import {EwsHttpWebResponse} from "./Core/EwsHttpWebResponse";
// import {EwsLogging} from "./Core/EwsLogging";
// import {EwsServiceJsonReader} from "./Core/EwsServiceJsonReader";
// import {EwsServiceMultiResponseXmlReader} from "./Core/EwsServiceMultiResponseXmlReader";
// import {EwsServiceXmlReader} from "./Core/EwsServiceXmlReader";
// import {EwsServiceXmlWriter} from "./Core/EwsServiceXmlWriter";
// import {EwsUtilities} from "./Core/EwsUtilities";
// import {EwsXmlReader} from "./Core/EwsXmlReader";
// import {ExchangeServerInfo} from "./Core/ExchangeServerInfo";
// import {ExchangeService} from "./Core/ExchangeService";
// import {ExchangeServiceBase} from "./Core/ExchangeServiceBase";
// import {JsonNames} from "./Core/JsonNames";
// import {JsonObject} from "./Core/JsonObject";
// import {JsonParser} from "./Core/JsonParser";
// import {JsonTokenizer} from "./Core/JsonTokenizer";
// import {JsonWriter} from "./Core/JsonWriter";
// import {LazyMember} from "./Core/LazyMember";
// import {PropertyBag} from "./Core/PropertyBag";
// import {PropertySet} from "./Core/PropertySet";
// import {SimplePropertyBag} from "./Core/SimplePropertyBag";
// import {XmlAttributeNames} from "./Core/XmlAttributeNames";
// import {XmlElementNames} from "./Core/XmlElementNames";
// import {BasicAuthModuleForUTF8} from "./Credentials/BasicAuthModuleForUTF8";
// import {ClientCertificateCredentials} from "./Credentials/ClientCertificateCredentials";
// import {ExchangeCredentials} from "./Credentials/ExchangeCredentials";
// import {OAuthCredentials} from "./Credentials/OAuthCredentials";
// import {PartnerTokenCredentials} from "./Credentials/PartnerTokenCredentials";
// import {TokenCredentials} from "./Credentials/TokenCredentials";
// import {WebCredentials} from "./Credentials/WebCredentials";
// import {WindowsLiveCredentials} from "./Credentials/WindowsLiveCredentials";
// import {WSSecurityBasedCredentials} from "./Credentials/WSSecurityBasedCredentials";
// import {WSSecurityUtilityIdSignedXml} from "./Credentials/WSSecurityUtilityIdSignedXml";
// import {X509CertificateCredentials} from "./Credentials/X509CertificateCredentials";
// import {DnsClient} from "./Dns/DnsClient";
// import {DnsNativeMethods} from "./Dns/DnsNativeMethods";
// import {DnsRecord} from "./Dns/DnsRecord";
// import {DnsRecordHeader} from "./Dns/DnsRecordHeader";
// import {DnsSrvRecord} from "./Dns/DnsSrvRecord";
// import {AddressEntity} from "./ComplexProperties/AddressEntity";
// import {RetentionPolicyTag} from "./Elc/RetentionPolicyTag";
// import {AffectedTaskOccurrence} from "./Enumerations/AffectedTaskOccurrence";
// import {AggregateType} from "./Enumerations/AggregateType";
// import {AppointmentType} from "./Enumerations/AppointmentType";
// import {AutodiscoverEndpoints} from "./Enumerations/AutodiscoverEndpoints";
// import {AutodiscoverErrorCode} from "./Enumerations/AutodiscoverErrorCode";
// import {AutodiscoverResponseType} from "./Enumerations/AutodiscoverResponseType";
// import {AvailabilityData} from "./Enumerations/AvailabilityData";
// import {BasePropertySet} from "./Enumerations/BasePropertySet";
// import {BodyType} from "./Enumerations/BodyType";
// import {ChangeType} from "./Enumerations/ChangeType";
// import {ClientAccessTokenType} from "./Enumerations/ClientAccessTokenType";
// import {ClientExtensionProvidedTo} from "./Enumerations/ClientExtensionProvidedTo";
// import {ComparisonMode} from "./Enumerations/ComparisonMode";
// import {ConflictResolutionMode} from "./Enumerations/ConflictResolutionMode";
// import {ConflictType} from "./Enumerations/ConflictType";
// import {ConnectingIdType} from "./Enumerations/ConnectingIdType";
// import {ConnectionFailureCause} from "./Enumerations/ConnectionFailureCause";
// import {ConnectionStatus} from "./Enumerations/ConnectionStatus";
// import {ContactSource} from "./Enumerations/ContactSource";
// import {ContainmentMode} from "./Enumerations/ContainmentMode";
// import {ConversationActionType} from "./Enumerations/ConversationActionType";
// import {ConversationFlagStatus} from "./Enumerations/ConversationFlagStatus";
// import {ConversationQueryTraversal} from "./Enumerations/ConversationQueryTraversal";
// import {ConversationSortOrder} from "./Enumerations/ConversationSortOrder";
// import {DateTimePrecision} from "./Enumerations/DateTimePrecision";
// import {DayOfTheWeek} from "./Enumerations/DayOfTheWeek";
// import {DayOfTheWeekIndex} from "./Enumerations/DayOfTheWeekIndex";
// import {DefaultExtendedPropertySet} from "./Enumerations/DefaultExtendedPropertySet";
// import {DelegateFolderPermissionLevel} from "./Enumerations/DelegateFolderPermissionLevel";
// import {DeleteMode} from "./Enumerations/DeleteMode";
// import {DisableReasonType} from "./Enumerations/DisableReasonType";
// import {DnsQueryOptions} from "./Enumerations/DnsQueryOptions";
// import {DnsRecordType} from "./Enumerations/DnsRecordType";
// import {DomainSettingName} from "./Enumerations/DomainSettingName";
// import {EffectiveRights} from "./Enumerations/EffectiveRights";
// import {ElcFolderType} from "./Enumerations/ElcFolderType";
// import {EmailAddressKey} from "./Enumerations/EmailAddressKey";
// import {EmailPosition} from "./Enumerations/EmailPosition";
// import {EnumToExchangeVersionMappingHelper} from "./Enumerations/EnumToExchangeVersionMappingHelper";
// import {EventType} from "./Enumerations/EventType";
// import {ExchangeVersion} from "./Enumerations/ExchangeVersion";
// import {ExtensionInstallScope} from "./Enumerations/ExtensionInstallScope";
// import {ExtensionType} from "./Enumerations/ExtensionType";
// import {FileAsMapping} from "./Enumerations/FileAsMapping";
// import {FlaggedForAction} from "./Enumerations/FlaggedForAction";
// import {FolderPermissionLevel} from "./Enumerations/FolderPermissionLevel";
// import {FolderPermissionReadAccess} from "./Enumerations/FolderPermissionReadAccess";
// import {FolderTraversal} from "./Enumerations/FolderTraversal";
// import {FreeBusyViewType} from "./Enumerations/FreeBusyViewType";
// import {FreeType} from "./Enumerations/FreeType";
// import {HangingRequestDisconnectReason} from "./Enumerations/HangingRequestDisconnectReason";
// import {HoldAction} from "./Enumerations/HoldAction";
// import {HoldStatus} from "./Enumerations/HoldStatus";
// import {IconIndex} from "./Enumerations/IconIndex";
// import {IdFormat} from "./Enumerations/IdFormat";
// import {IDs} from "./Enumerations/IDs";
// import {ImAddressKey} from "./Enumerations/ImAddressKey";
// import {Importance} from "./Enumerations/Importance";
// import {ItemFlagStatus} from "./Enumerations/ItemFlagStatus";
// import {ItemIndexError} from "./Enumerations/ItemIndexError";
// import {ItemTraversal} from "./Enumerations/ItemTraversal";
// import {JsonTokenType} from "./Enumerations/JsonTokenType";
// import {LegacyFreeBusyStatus} from "./Enumerations/LegacyFreeBusyStatus";
// import {LobbyBypass} from "./Enumerations/LobbyBypass";
// import {LocationSource} from "./Enumerations/LocationSource";
// import {LogicalOperator} from "./Enumerations/LogicalOperator";
// import {MailboxSearchLocation} from "./Enumerations/MailboxSearchLocation";
// import {MailboxSearchScopeType} from "./Enumerations/MailboxSearchScopeType";
// import {MailboxType} from "./Enumerations/MailboxType";
// import {MapiPropertyType} from "./Enumerations/MapiPropertyType";
// import {MeetingAttendeeType} from "./Enumerations/MeetingAttendeeType";
// import {MeetingRequestsDeliveryScope} from "./Enumerations/MeetingRequestsDeliveryScope";
// import {MeetingRequestType} from "./Enumerations/MeetingRequestType";
// import {MeetingResponseType} from "./Enumerations/MeetingResponseType";
// import {MemberStatus} from "./Enumerations/MemberStatus";
// import {MessageDisposition} from "./Enumerations/MessageDisposition";
// import {Month} from "./Enumerations/Month";
// import {OffsetBasePoint} from "./Enumerations/OffsetBasePoint";
// import {OnlineMeetingAccessLevel} from "./Enumerations/OnlineMeetingAccessLevel";
// import {OofExternalAudience} from "./Enumerations/OofExternalAudience";
// import {OofState} from "./Enumerations/OofState";
// import {OutlookProtocolType} from "./Enumerations/OutlookProtocolType";
// import {PermissionScope} from "./Enumerations/PermissionScope";
// import {PhoneCallState} from "./Enumerations/PhoneCallState";
// import {PhoneNumberKey} from "./Enumerations/PhoneNumberKey";
// import {PhysicalAddressIndex} from "./Enumerations/PhysicalAddressIndex";
// import {PhysicalAddressKey} from "./Enumerations/PhysicalAddressKey";
// import {Presenters} from "./Enumerations/Presenters";
// import {PreviewItemBaseShape} from "./Enumerations/PreviewItemBaseShape";
// import {PrivilegedLogonType} from "./Enumerations/PrivilegedLogonType";
// import {PrivilegedUserIdBudgetType} from "./Enumerations/PrivilegedUserIdBudgetType";
// import {PropertyDefinitionFlags} from "./Enumerations/PropertyDefinitionFlags";
// import {RenderingMode} from "./Enumerations/RenderingMode";
// import {ResolveNameSearchLocation} from "./Enumerations/ResolveNameSearchLocation";
// import {ResponseActions} from "./Enumerations/ResponseActions";
// import {ResponseMessageType} from "./Enumerations/ResponseMessageType";
// import {RetentionActionType} from "./Enumerations/RetentionActionType";
// import {RetentionType} from "./Enumerations/RetentionType";
// import {RuleErrorCode} from "./Enumerations/RuleErrorCode";
// import {RuleProperty} from "./Enumerations/RuleProperty";
// import {SearchFolderTraversal} from "./Enumerations/SearchFolderTraversal";
// import {SearchPageDirection} from "./Enumerations/SearchPageDirection";
// import {SearchResultType} from "./Enumerations/SearchResultType";
// import {SendCancellationsMode} from "./Enumerations/SendCancellationsMode";
// import {SendInvitationsMode} from "./Enumerations/SendInvitationsMode";
// import {SendInvitationsOrCancellationsMode} from "./Enumerations/SendInvitationsOrCancellationsMode";
// import {SendPrompt} from "./Enumerations/SendPrompt";
// import {Sensitivity} from "./Enumerations/Sensitivity";
// import {ServiceError} from "./Enumerations/ServiceError";
// import {ServiceErrorHandling} from "./Enumerations/ServiceErrorHandling";
// import {ServiceObjectType} from "./Enumerations/ServiceObjectType";
// import {ServiceResult} from "./Enumerations/ServiceResult";
// import {SetClientExtensionActionId} from "./Enumerations/SetClientExtensionActionId";
// import {SortDirection} from "./Enumerations/SortDirection";
// import {StandardUser} from "./Enumerations/StandardUser";
// import {SuggestionQuality} from "./Enumerations/SuggestionQuality";
// import {SyncFolderItemsScope} from "./Enumerations/SyncFolderItemsScope";
// import {TaskDelegationState} from "./Enumerations/TaskDelegationState";
// import {TaskMode} from "./Enumerations/TaskMode";
// import {TaskStatus} from "./Enumerations/TaskStatus";
// import {TeamMailboxLifecycleState} from "./Enumerations/TeamMailboxLifecycleState";
// import {TraceFlags} from "./Enumerations/TraceFlags";
// import {UserConfigurationDictionaryObjectType} from "./Enumerations/UserConfigurationDictionaryObjectType";
// import {UserConfigurationProperties} from "./Enumerations/UserConfigurationProperties";
// import {UserSettingName} from "./Enumerations/UserSettingName";
// import {ViewFilter} from "./Enumerations/ViewFilter";
// import {WellKnownFolderName} from "./Enumerations/WellKnownFolderName";
// import {XmlNamespace} from "./Enumerations/XmlNamespace";
// import {AccountIsLockedException} from "./Exceptions/AccountIsLockedException";
// import {AutodiscoverLocalException} from "./Exceptions/AutodiscoverLocalException";
// import {AutodiscoverRemoteException} from "./Exceptions/AutodiscoverRemoteException";
// import {AutodiscoverResponseException} from "./Exceptions/AutodiscoverResponseException";
// import {BatchServiceResponseException} from "./Exceptions/BatchServiceResponseException";
// import {CreateAttachmentException} from "./Exceptions/CreateAttachmentException";
// import {DeleteAttachmentException} from "./Exceptions/DeleteAttachmentException";
// import {DnsException} from "./Exceptions/DnsException";
// import {Exception} from "./Exceptions/Exception";
// import {JsonDeserializationNotImplementedException} from "./Exceptions/JsonDeserializationNotImplementedException";
// import {JsonSerializationNotImplementedException} from "./Exceptions/JsonSerializationNotImplementedException";
// import {PropertyException} from "./Exceptions/PropertyException";
// import {ServerBusyException} from "./Exceptions/ServerBusyException";
// import {ServiceJsonDeserializationException} from "./Exceptions/ServiceJsonDeserializationException";
// import {ServiceLocalException} from "./Exceptions/ServiceLocalException";
// import {ServiceObjectPropertyException} from "./Exceptions/ServiceObjectPropertyException";
// import {ServiceRemoteException} from "./Exceptions/ServiceRemoteException";
// import {ServiceRequestException} from "./Exceptions/ServiceRequestException";
// import {ServiceResponseException} from "./Exceptions/ServiceResponseException";
// import {ServiceValidationException} from "./Exceptions/ServiceValidationException";
// import {ServiceVersionException} from "./Exceptions/ServiceVersionException";
// import {ServiceXmlDeserializationException} from "./Exceptions/ServiceXmlDeserializationException";
// import {ServiceXmlSerializationException} from "./Exceptions/ServiceXmlSerializationException";
// import {TimeZoneConversionException} from "./Exceptions/TimeZoneConversionException";
// import {UpdateInboxRulesException} from "./Exceptions/UpdateInboxRulesException";
// import {ICalendarActionProvider} from "./Interfaces/ICalendarActionProvider";
// import {ICustomXmlUpdateSerializer} from "./Interfaces/ICustomXmlUpdateSerializer";
// import {IEwsHttpWebRequest} from "./Interfaces/IEwsHttpWebRequest";
// import {IEwsHttpWebRequestFactory} from "./Interfaces/IEwsHttpWebRequestFactory";
// import {IEwsHttpWebResponse} from "./Interfaces/IEwsHttpWebResponse";
// import {IFileAttachmentContentHandler} from "./Interfaces/IFileAttachmentContentHandler";
// import {IJsonCollectionDeserializer} from "./Interfaces/IJsonCollectionDeserializer";
// import {IJSonSerializable} from "./Interfaces/IJSonSerializable";
// import {IOutParam} from "./Interfaces/IOutParam";
// import {IOwnedProperty} from "./Interfaces/IOwnedProperty";
// import {IRefParam} from "./Interfaces/IRefParam";
// import {ISearchStringProvider} from "./Interfaces/ISearchStringProvider";
// import {ISelfValidate} from "./Interfaces/ISelfValidate";
// import {ITraceListener} from "./Interfaces/ITraceListener";
// import {DiscoverySearchConfiguration} from "./MailboxSearch/DiscoverySearchConfiguration";
// import {ExtendedAttributes} from "./MailboxSearch/ExtendedAttributes";
// import {FailedSearchMailbox} from "./MailboxSearch/FailedSearchMailbox";
// import {KeywordStatisticsSearchResult} from "./MailboxSearch/KeywordStatisticsSearchResult";
// import {MailboxHoldResult} from "./MailboxSearch/MailboxHoldResult";
// import {MailboxHoldStatus} from "./MailboxSearch/MailboxHoldStatus";
// import {MailboxQuery} from "./MailboxSearch/MailboxQuery";
// import {MailboxSearchScope} from "./MailboxSearch/MailboxSearchScope";
// import {MailboxStatisticsItem} from "./MailboxSearch/MailboxStatisticsItem";
// import {NonIndexableItem} from "./MailboxSearch/NonIndexableItem";
// import {NonIndexableItemDetailsResult} from "./MailboxSearch/NonIndexableItemDetailsResult";
// import {NonIndexableItemParameters} from "./MailboxSearch/NonIndexableItemParameters";
// import {NonIndexableItemStatistic} from "./MailboxSearch/NonIndexableItemStatistic";
// import {PreviewItemMailbox} from "./MailboxSearch/PreviewItemMailbox";
// import {PreviewItemResponseShape} from "./MailboxSearch/PreviewItemResponseShape";
// import {SearchableMailbox} from "./MailboxSearch/SearchableMailbox";
// import {SearchMailboxesParameters} from "./MailboxSearch/SearchMailboxesParameters";
// import {SearchMailboxesResult} from "./MailboxSearch/SearchMailboxesResult";
// import {SearchPreviewItem} from "./MailboxSearch/SearchPreviewItem";
// import {SearchRefinerItem} from "./MailboxSearch/SearchRefinerItem";
// import {SetHoldOnMailboxesParameters} from "./MailboxSearch/SetHoldOnMailboxesParameters";
// import {Versioning} from "./MailboxSearch/Versioning";
// import {AttendeeInfo} from "./Misc/Availability/AttendeeInfo";
// import {AvailabilityOptions} from "./Misc/Availability/AvailabilityOptions";
// import {GetUserAvailabilityResults} from "./Misc/Availability/GetUserAvailabilityResults";
// import {LegacyAvailabilityTimeZone} from "./Misc/Availability/LegacyAvailabilityTimeZone";
// import {LegacyAvailabilityTimeZoneTime} from "./Misc/Availability/LegacyAvailabilityTimeZoneTime";
// import {OofReply} from "./Misc/Availability/OofReply";
// import {TimeWindow} from "./Misc/Availability/TimeWindow";
// import {AlternateId} from "./Misc/IdConversion/AlternateId";
// import {AlternateIdBase} from "./Misc/IdConversion/AlternateIdBase";
// import {AlternatePublicFolderId} from "./Misc/IdConversion/AlternatePublicFolderId";
// import {AlternatePublicFolderItemId} from "./Misc/IdConversion/AlternatePublicFolderItemId";
// import {AbstractFolderIdWrapper} from "./Misc/AbstractFolderIdWrapper";
// import {AbstractItemIdWrapper} from "./Misc/AbstractItemIdWrapper";
// import {CalendarActionResults} from "./Misc/CalendarActionResults";
// import {ConversationAction} from "./Misc/ConversationAction";
// import {DelegateInformation} from "./Misc/DelegateInformation";
// import {DelegateTypes} from "./Misc/DelegateTypes";
// import {EwsTraceListener} from "./Misc/EwsTraceListener";
// import {ExpandGroupResults} from "./Misc/ExpandGroupResults";
// import {FolderIdWrapper} from "./Misc/FolderIdWrapper";
// import {FolderIdWrapperList} from "./Misc/FolderIdWrapperList";
// import {FolderWrapper} from "./Misc/FolderWrapper";
// import {HangingTraceStream} from "./Misc/HangingTraceStream";
// import {ImpersonatedUserId} from "./Misc/ImpersonatedUserId";
// import {ItemIdWrapper} from "./Misc/ItemIdWrapper";
// import {ItemIdWrapperList} from "./Misc/ItemIdWrapperList";
// import {ItemWrapper} from "./Misc/ItemWrapper";
// import {ManagementRoles} from "./Misc/ManagementRoles";
// import {MapiTypeConverter} from "./Misc/MapiTypeConverter";
// import {MapiTypeConverterMapEntry} from "./Misc/MapiTypeConverterMapEntry";
// import {MobilePhone} from "./Misc/MobilePhone";
// import {NameResolution} from "./Misc/NameResolution";
// import {NameResolutionCollection} from "./Misc/NameResolutionCollection";
// import {PrivilegedUserId} from "./Misc/PrivilegedUserId";
// import {SoapFaultDetails} from "./Misc/SoapFaultDetails";
// import {Time} from "./Misc/Time";
// import {UserConfiguration} from "./Misc/UserConfiguration";
// import {FolderEvent} from "./Notifications/FolderEvent";
// import {GetEventsResults} from "./Notifications/GetEventsResults";
// import {GetStreamingEventsResults} from "./Notifications/GetStreamingEventsResults";
// import {ItemEvent} from "./Notifications/ItemEvent";
// import {NotificationEvent} from "./Notifications/NotificationEvent";
// import {NotificationEventArgs} from "./Notifications/NotificationEventArgs";
// import {NotificationGroup} from "./Notifications/NotificationGroup";
// import {PullSubscription} from "./Notifications/PullSubscription";
// import {PushSubscription} from "./Notifications/PushSubscription";
// import {StreamingSubscription} from "./Notifications/StreamingSubscription";
// import {StreamingSubscriptionConnection} from "./Notifications/StreamingSubscriptionConnection";
// import {SubscriptionBase} from "./Notifications/SubscriptionBase";
// import {SubscriptionErrorEventArgs} from "./Notifications/SubscriptionErrorEventArgs";
// import {BulkTransfer} from "./operations/BulkTransfer/BulkTransfer";
// import {Reminder} from "./operations/ExchangeMailboxData/Reminder";
// import {Utilities} from "./operations/ExchangeMailboxData/Utilities";
// import {MailTips} from "./operations/MailTips/MailTips";
// import {MessageTracking} from "./operations/MessageTracking/MessageTracking";
// import {Persona} from "./operations/Persona/Persona";
// import {ServiceConfiguration} from "./operations/ServiceConfiguration/ServiceConfiguration";
// import {Sharing} from "./operations/Sharing/Sharing";
// import {UnifiedContactStore} from "./operations/UnifiedContactStore/UnifiedContactStore";
// import {AttachmentsPropertyDefinition} from "./PropertyDefinitions/AttachmentsPropertyDefinition";
// import {BoolPropertyDefinition} from "./PropertyDefinitions/BoolPropertyDefinition";
// import {ByteArrayPropertyDefinition} from "./PropertyDefinitions/ByteArrayPropertyDefinition";
// import {ComplexPropertyDefinition} from "./PropertyDefinitions/ComplexPropertyDefinition";
// import {ComplexPropertyDefinitionBase} from "./PropertyDefinitions/ComplexPropertyDefinitionBase";
// import {ContainedPropertyDefinition} from "./PropertyDefinitions/ContainedPropertyDefinition";
// import {DateTimePropertyDefinition} from "./PropertyDefinitions/DateTimePropertyDefinition";
// import {DoublePropertyDefinition} from "./PropertyDefinitions/DoublePropertyDefinition";
// import {EffectiveRightsPropertyDefinition} from "./PropertyDefinitions/EffectiveRightsPropertyDefinition";
// import {ExtendedPropertyDefinition} from "./PropertyDefinitions/ExtendedPropertyDefinition";
// import {GenericPropertyDefinition} from "./PropertyDefinitions/GenericPropertyDefinition";
// import {GroupMemberPropertyDefinition} from "./PropertyDefinitions/GroupMemberPropertyDefinition";
// import {IndexedPropertyDefinition} from "./PropertyDefinitions/IndexedPropertyDefinition";
// import {IntPropertyDefinition} from "./PropertyDefinitions/IntPropertyDefinition";
// import {ListValuePropertyDefinition} from "./PropertyDefinitions/ListValuePropertyDefinition";
// import {MeetingTimeZonePropertyDefinition} from "./PropertyDefinitions/MeetingTimeZonePropertyDefinition";
// import {PermissionCollectionPropertyDefinition} from "./PropertyDefinitions/PermissionCollectionPropertyDefinition";
// import {PermissionSetPropertyDefinition} from "./PropertyDefinitions/PermissionSetPropertyDefinition";
// import {PropertyDefinition} from "./PropertyDefinitions/PropertyDefinition";
// import {PropertyDefinitionBase} from "./PropertyDefinitions/PropertyDefinitionBase";
// import {RecurrencePropertyDefinition} from "./PropertyDefinitions/RecurrencePropertyDefinition";
// import {ResponseObjectsPropertyDefinition} from "./PropertyDefinitions/ResponseObjectsPropertyDefinition";
// import {ScopedDateTimePropertyDefinition} from "./PropertyDefinitions/ScopedDateTimePropertyDefinition";
// import {ServiceObjectPropertyDefinition} from "./PropertyDefinitions/ServiceObjectPropertyDefinition";
// import {StartTimeZonePropertyDefinition} from "./PropertyDefinitions/StartTimeZonePropertyDefinition";
// import {StringPropertyDefinition} from "./PropertyDefinitions/StringPropertyDefinition";
// import {TaskDelegationStatePropertyDefinition} from "./PropertyDefinitions/TaskDelegationStatePropertyDefinition";
// import {TimeSpanPropertyDefinition} from "./PropertyDefinitions/TimeSpanPropertyDefinition";
// import {TimeZonePropertyDefinition} from "./PropertyDefinitions/TimeZonePropertyDefinition";
// import {TypedPropertyDefinition} from "./PropertyDefinitions/TypedPropertyDefinition";
// import {ExchangeResourceManager} from "./ResourceManager/ExchangeResourceManager";
// import {LocalizedString} from "./ResourceManager/LocalizedString";
// import {SearchFilter} from "./Search/Filters/SearchFilter";
// import {SearchFilter_ContainsSubstring} from "./Search/Filters/SearchFilter_ContainsSubstring";
// import {SearchFilter_ExcludesBitmask} from "./Search/Filters/SearchFilter_ExcludesBitmask";
// import {SearchFilter_Exists} from "./Search/Filters/SearchFilter_Exists";
// import {SearchFilter_IsEqualTo} from "./Search/Filters/SearchFilter_IsEqualTo";
// import {SearchFilter_IsGreaterThan} from "./Search/Filters/SearchFilter_IsGreaterThan";
// import {SearchFilter_IsGreaterThanOrEqualTo} from "./Search/Filters/SearchFilter_IsGreaterThanOrEqualTo";
// import {SearchFilter_IsLessThan} from "./Search/Filters/SearchFilter_IsLessThan";
// import {SearchFilter_IsLessThanOrEqualTo} from "./Search/Filters/SearchFilter_IsLessThanOrEqualTo";
// import {SearchFilter_IsNotEqualTo} from "./Search/Filters/SearchFilter_IsNotEqualTo";
// import {SearchFilter_Not} from "./Search/Filters/SearchFilter_Not";
// import {SearchFilter_PropertyBasedFilter} from "./Search/Filters/SearchFilter_PropertyBasedFilter";
// import {SearchFilter_RelationalFilter} from "./Search/Filters/SearchFilter_RelationalFilter";
// import {SearchFilter_SearchFilterCollection} from "./Search/Filters/SearchFilter_SearchFilterCollection";
// import {CalendarView} from "./Search/CalendarView";
// import {ConversationIndexedItemView} from "./Search/ConversationIndexedItemView";
// import {FindConversationResults} from "./Search/FindConversationResults";
// import {FindFoldersResults} from "./Search/FindFoldersResults";
// import {FindItemsResults} from "./Search/FindItemsResults";
// import {FolderView} from "./Search/FolderView";
// import {GroupedFindItemsResults} from "./Search/GroupedFindItemsResults";
// import {Grouping} from "./Search/Grouping";
// import {ItemGroup} from "./Search/ItemGroup";
// import {ItemView} from "./Search/ItemView";
// import {OrderByCollection} from "./Search/OrderByCollection";
// import {PagedView} from "./Search/PagedView";
// import {SeekToConditionItemView} from "./Search/SeekToConditionItemView";
// import {ViewBase} from "./Search/ViewBase";
// import {SafeXmlDocument} from "./Security/SafeXmlDocument";
// import {SafeXmlFactory} from "./Security/SafeXmlFactory";
// import {SafeXmlSchema} from "./Security/SafeXmlSchema";
// import {SecurityTimestamp} from "./Security/SecurityTimestamp";
// import {XmlDtdException} from "./Security/XmlDtdException";
// import {Change} from "./Sync/Change";
// import {ChangeCollection} from "./Sync/ChangeCollection";
// import {FolderChange} from "./Sync/FolderChange";
// import {ItemChange} from "./Sync/ItemChange";
// import {PhoneCall} from "./UnifiedMessaging/PhoneCall";
// import {PhoneCallId} from "./UnifiedMessaging/PhoneCallId";
// import {UnifiedMessaging} from "./UnifiedMessaging/UnifiedMessaging";
// import {AltDictionary} from "./AltDictionary";
// import {Constants} from "./Constants";
// import {Data1} from "./Data1";
// import {DateTime} from "./DateTime";
// import {ExchangeWebService} from "./";
// import {ExtensionMethods} from "./ExtensionMethods";
// import {Interfaces} from "./Interfaces";
// import {Microsoft.Exchange.WebServices.d__} from "./Microsoft.Exchange.WebServices.d__";
// import {PromiseFactory} from "./PromiseFactory";
// import {Promise_Q} from "./Promise_Q";
// import {Promise_WinJS} from "./Promise_WinJS";
// import {Strings} from "./Strings";
// import {System.Constants.d} from "./System.Constants.d";
// import {System.d} from "./System.d";
// import {System.Enums.d} from "./System.Enums.d";
// import {WebService.Extra} from "./WebService.Extra";
// import {WebServices.Data.Extra.d} from "./WebServices.Data.Extra.d";
// import {XHRFactory} from "./XHRFactory";
// import {XHRFactory_WinJS} from "./XHRFactory_WinJS";

export {
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
