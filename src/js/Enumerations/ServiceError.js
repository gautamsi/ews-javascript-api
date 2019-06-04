"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the error codes that can be returned by the Exchange Web Services.
 */
var ServiceError;
(function (ServiceError) {
    /**
     * NoError. Indicates that an error has not occurred.
     */
    ServiceError[ServiceError["NoError"] = 0] = "NoError";
    /**
     * Access is denied. Check credentials and try again.
     */
    ServiceError[ServiceError["ErrorAccessDenied"] = 1] = "ErrorAccessDenied";
    /**
     * The impersonation authentication header should not be included.
     */
    ServiceError[ServiceError["ErrorAccessModeSpecified"] = 2] = "ErrorAccessModeSpecified";
    /**
     * Account is disabled. Contact the account administrator.
     */
    ServiceError[ServiceError["ErrorAccountDisabled"] = 3] = "ErrorAccountDisabled";
    /**
     * Failed to add one or more delegates.
     */
    ServiceError[ServiceError["ErrorAddDelegatesFailed"] = 4] = "ErrorAddDelegatesFailed";
    /**
     * ErrorAddressSpaceNotFound
     */
    ServiceError[ServiceError["ErrorAddressSpaceNotFound"] = 5] = "ErrorAddressSpaceNotFound";
    /**
     * Active Directory operation did not succeed. Try again later.
     */
    ServiceError[ServiceError["ErrorADOperation"] = 6] = "ErrorADOperation";
    /**
     * Invalid search criteria.
     */
    ServiceError[ServiceError["ErrorADSessionFilter"] = 7] = "ErrorADSessionFilter";
    /**
     * Active Directory is unavailable. Try again later.
     */
    ServiceError[ServiceError["ErrorADUnavailable"] = 8] = "ErrorADUnavailable";
    /**
     * AffectedTaskOccurrences attribute is required for Task items.
     */
    ServiceError[ServiceError["ErrorAffectedTaskOccurrencesRequired"] = 9] = "ErrorAffectedTaskOccurrencesRequired";
    /**
     * The conversation action alwayscategorize or alwaysmove or alwaysdelete has failed.
     */
    ServiceError[ServiceError["ErrorApplyConversationActionFailed"] = 10] = "ErrorApplyConversationActionFailed";
    /**
     * Archive mailbox not enabled
     */
    ServiceError[ServiceError["ErrorArchiveMailboxNotEnabled"] = 11] = "ErrorArchiveMailboxNotEnabled";
    /**
     * Unable to create the folder in archive mailbox to which the items will be archived
     */
    ServiceError[ServiceError["ErrorArchiveFolderPathCreation"] = 12] = "ErrorArchiveFolderPathCreation";
    /**
     * Unable to discover archive mailbox
     */
    ServiceError[ServiceError["ErrorArchiveMailboxServiceDiscoveryFailed"] = 13] = "ErrorArchiveMailboxServiceDiscoveryFailed";
    /**
     * The item has attachment at more than the maximum supported nest level.
     */
    ServiceError[ServiceError["ErrorAttachmentNestLevelLimitExceeded"] = 14] = "ErrorAttachmentNestLevelLimitExceeded";
    /**
     * The file attachment exceeds the maximum supported size.
     */
    ServiceError[ServiceError["ErrorAttachmentSizeLimitExceeded"] = 15] = "ErrorAttachmentSizeLimitExceeded";
    /**
     * ErrorAutoDiscoverFailed
     */
    ServiceError[ServiceError["ErrorAutoDiscoverFailed"] = 16] = "ErrorAutoDiscoverFailed";
    /**
     * ErrorAvailabilityConfigNotFound
     */
    ServiceError[ServiceError["ErrorAvailabilityConfigNotFound"] = 17] = "ErrorAvailabilityConfigNotFound";
    /**
     * Item was not processed as a result of a previous error.
     */
    ServiceError[ServiceError["ErrorBatchProcessingStopped"] = 18] = "ErrorBatchProcessingStopped";
    /**
     * Can not move or copy a calendar occurrence.
     */
    ServiceError[ServiceError["ErrorCalendarCannotMoveOrCopyOccurrence"] = 19] = "ErrorCalendarCannotMoveOrCopyOccurrence";
    /**
     * Cannot update calendar item that has already been deleted.
     */
    ServiceError[ServiceError["ErrorCalendarCannotUpdateDeletedItem"] = 20] = "ErrorCalendarCannotUpdateDeletedItem";
    /**
     * The Id specified does not represent an occurrence.
     */
    ServiceError[ServiceError["ErrorCalendarCannotUseIdForOccurrenceId"] = 21] = "ErrorCalendarCannotUseIdForOccurrenceId";
    /**
     * The specified Id does not represent a recurring master item.
     */
    ServiceError[ServiceError["ErrorCalendarCannotUseIdForRecurringMasterId"] = 22] = "ErrorCalendarCannotUseIdForRecurringMasterId";
    /**
     * Calendar item duration is too long.
     */
    ServiceError[ServiceError["ErrorCalendarDurationIsTooLong"] = 23] = "ErrorCalendarDurationIsTooLong";
    /**
     * EndDate is earlier than StartDate
     */
    ServiceError[ServiceError["ErrorCalendarEndDateIsEarlierThanStartDate"] = 24] = "ErrorCalendarEndDateIsEarlierThanStartDate";
    /**
     * Cannot request CalendarView for the folder.
     */
    ServiceError[ServiceError["ErrorCalendarFolderIsInvalidForCalendarView"] = 25] = "ErrorCalendarFolderIsInvalidForCalendarView";
    /**
     * Attribute has an invalid value.
     */
    ServiceError[ServiceError["ErrorCalendarInvalidAttributeValue"] = 26] = "ErrorCalendarInvalidAttributeValue";
    /**
     * The value of the DaysOfWeek property is not valid for time change pattern of time zone.
     */
    ServiceError[ServiceError["ErrorCalendarInvalidDayForTimeChangePattern"] = 27] = "ErrorCalendarInvalidDayForTimeChangePattern";
    /**
     * The value of the DaysOfWeek property is invalid for a weekly recurrence.
     */
    ServiceError[ServiceError["ErrorCalendarInvalidDayForWeeklyRecurrence"] = 28] = "ErrorCalendarInvalidDayForWeeklyRecurrence";
    /**
     * The property has invalid state.
     */
    ServiceError[ServiceError["ErrorCalendarInvalidPropertyState"] = 29] = "ErrorCalendarInvalidPropertyState";
    /**
     * The property has an invalid value.
     */
    ServiceError[ServiceError["ErrorCalendarInvalidPropertyValue"] = 30] = "ErrorCalendarInvalidPropertyValue";
    /**
     * The recurrence is invalid.
     */
    ServiceError[ServiceError["ErrorCalendarInvalidRecurrence"] = 31] = "ErrorCalendarInvalidRecurrence";
    /**
     * TimeZone is invalid.
     */
    ServiceError[ServiceError["ErrorCalendarInvalidTimeZone"] = 32] = "ErrorCalendarInvalidTimeZone";
    /**
     * A meeting that's been canceled can't be accepted.
     */
    ServiceError[ServiceError["ErrorCalendarIsCancelledForAccept"] = 33] = "ErrorCalendarIsCancelledForAccept";
    /**
     * A canceled meeting can't be declined.
     */
    ServiceError[ServiceError["ErrorCalendarIsCancelledForDecline"] = 34] = "ErrorCalendarIsCancelledForDecline";
    /**
     * A canceled meeting can't be removed.
     */
    ServiceError[ServiceError["ErrorCalendarIsCancelledForRemove"] = 35] = "ErrorCalendarIsCancelledForRemove";
    /**
     * A canceled meeting can't be accepted tentatively.
     */
    ServiceError[ServiceError["ErrorCalendarIsCancelledForTentative"] = 36] = "ErrorCalendarIsCancelledForTentative";
    /**
     * AcceptItem action is invalid for a delegated meeting message.
     */
    ServiceError[ServiceError["ErrorCalendarIsDelegatedForAccept"] = 37] = "ErrorCalendarIsDelegatedForAccept";
    /**
     * DeclineItem operation is invalid for a delegated meeting message.
     */
    ServiceError[ServiceError["ErrorCalendarIsDelegatedForDecline"] = 38] = "ErrorCalendarIsDelegatedForDecline";
    /**
     * RemoveItem action is invalid for a delegated meeting message.
     */
    ServiceError[ServiceError["ErrorCalendarIsDelegatedForRemove"] = 39] = "ErrorCalendarIsDelegatedForRemove";
    /**
     * The TentativelyAcceptItem action isn't valid for a delegated meeting message.
     */
    ServiceError[ServiceError["ErrorCalendarIsDelegatedForTentative"] = 40] = "ErrorCalendarIsDelegatedForTentative";
    /**
     * User must be an organizer for CancelCalendarItem action.
     */
    ServiceError[ServiceError["ErrorCalendarIsNotOrganizer"] = 41] = "ErrorCalendarIsNotOrganizer";
    /**
     * The user is the organizer of this meeting, and cannot, therefore, accept it.
     */
    ServiceError[ServiceError["ErrorCalendarIsOrganizerForAccept"] = 42] = "ErrorCalendarIsOrganizerForAccept";
    /**
     * The user is the organizer of this meeting, and cannot, therefore, decline it.
     */
    ServiceError[ServiceError["ErrorCalendarIsOrganizerForDecline"] = 43] = "ErrorCalendarIsOrganizerForDecline";
    /**
     * The user is the organizer of this meeting, and cannot, therefore, remove it.
     */
    ServiceError[ServiceError["ErrorCalendarIsOrganizerForRemove"] = 44] = "ErrorCalendarIsOrganizerForRemove";
    /**
     * The user is the organizer of this meeting, and therefore can't tentatively accept it.
     */
    ServiceError[ServiceError["ErrorCalendarIsOrganizerForTentative"] = 45] = "ErrorCalendarIsOrganizerForTentative";
    /**
     * The meeting request is out of date. The calendar couldn't be updated.
     */
    ServiceError[ServiceError["ErrorCalendarMeetingRequestIsOutOfDate"] = 46] = "ErrorCalendarMeetingRequestIsOutOfDate";
    /**
     * Occurrence index is out of recurrence range.
     */
    ServiceError[ServiceError["ErrorCalendarOccurrenceIndexIsOutOfRecurrenceRange"] = 47] = "ErrorCalendarOccurrenceIndexIsOutOfRecurrenceRange";
    /**
     * Occurrence with this index was previously deleted from the recurrence.
     */
    ServiceError[ServiceError["ErrorCalendarOccurrenceIsDeletedFromRecurrence"] = 48] = "ErrorCalendarOccurrenceIsDeletedFromRecurrence";
    /**
     * The calendar property falls out of valid range.
     */
    ServiceError[ServiceError["ErrorCalendarOutOfRange"] = 49] = "ErrorCalendarOutOfRange";
    /**
     * The specified view range exceeds the maximum range of two years.
     */
    ServiceError[ServiceError["ErrorCalendarViewRangeTooBig"] = 50] = "ErrorCalendarViewRangeTooBig";
    /**
     * Failed to get valid Active Directory information for the calling account. Confirm that it
     * is a valid Active Directory account.
     */
    ServiceError[ServiceError["ErrorCallerIsInvalidADAccount"] = 51] = "ErrorCallerIsInvalidADAccount";
    /**
     * Cannot archive items in Calendar, contact to task folders
     */
    ServiceError[ServiceError["ErrorCannotArchiveCalendarContactTaskFolderException"] = 52] = "ErrorCannotArchiveCalendarContactTaskFolderException";
    /**
     * Cannot archive items in archive mailboxes
     */
    ServiceError[ServiceError["ErrorCannotArchiveItemsInArchiveMailbox"] = 53] = "ErrorCannotArchiveItemsInArchiveMailbox";
    /**
     * Cannot archive items in public folders
     */
    ServiceError[ServiceError["ErrorCannotArchiveItemsInPublicFolders"] = 54] = "ErrorCannotArchiveItemsInPublicFolders";
    /**
     * Cannot create a calendar item in a non-calendar folder.
     */
    ServiceError[ServiceError["ErrorCannotCreateCalendarItemInNonCalendarFolder"] = 55] = "ErrorCannotCreateCalendarItemInNonCalendarFolder";
    /**
     * Cannot create a contact in a non-contact folder.
     */
    ServiceError[ServiceError["ErrorCannotCreateContactInNonContactFolder"] = 56] = "ErrorCannotCreateContactInNonContactFolder";
    /**
     * Cannot create a post item in a folder that is not a mail folder.
     */
    ServiceError[ServiceError["ErrorCannotCreatePostItemInNonMailFolder"] = 57] = "ErrorCannotCreatePostItemInNonMailFolder";
    /**
     * Cannot create a task in a non-task Folder.
     */
    ServiceError[ServiceError["ErrorCannotCreateTaskInNonTaskFolder"] = 58] = "ErrorCannotCreateTaskInNonTaskFolder";
    /**
     * Object cannot be deleted.
     */
    ServiceError[ServiceError["ErrorCannotDeleteObject"] = 59] = "ErrorCannotDeleteObject";
    /**
     * Deleting a task occurrence is not permitted on non-recurring tasks, on the last
     * occurrence of a recurring task or on a regenerating task.
     */
    ServiceError[ServiceError["ErrorCannotDeleteTaskOccurrence"] = 60] = "ErrorCannotDeleteTaskOccurrence";
    /**
     * Mandatory extensions cannot be disabled by end users
     */
    ServiceError[ServiceError["ErrorCannotDisableMandatoryExtension"] = 61] = "ErrorCannotDisableMandatoryExtension";
    /**
     * Folder cannot be emptied.
     */
    ServiceError[ServiceError["ErrorCannotEmptyFolder"] = 62] = "ErrorCannotEmptyFolder";
    /**
     * Cannot get external ECP URL. This might happen if external ECP URL isn't configured
     */
    ServiceError[ServiceError["ErrorCannotGetExternalEcpUrl"] = 63] = "ErrorCannotGetExternalEcpUrl";
    /**
     * Unable to read the folder path for the source folder while archiving items
     */
    ServiceError[ServiceError["ErrorCannotGetSourceFolderPath"] = 64] = "ErrorCannotGetSourceFolderPath";
    /**
     * The attachment could not be opened.
     */
    ServiceError[ServiceError["ErrorCannotOpenFileAttachment"] = 65] = "ErrorCannotOpenFileAttachment";
    /**
     * Expected a PermissionSet but received a CalendarPermissionSet.
     */
    ServiceError[ServiceError["ErrorCannotSetCalendarPermissionOnNonCalendarFolder"] = 66] = "ErrorCannotSetCalendarPermissionOnNonCalendarFolder";
    /**
     * Expected a CalendarPermissionSet but received a PermissionSet.
     */
    ServiceError[ServiceError["ErrorCannotSetNonCalendarPermissionOnCalendarFolder"] = 67] = "ErrorCannotSetNonCalendarPermissionOnCalendarFolder";
    /**
     * Cannot set UnknownEntries on a PermissionSet or CalendarPermissionSet.
     */
    ServiceError[ServiceError["ErrorCannotSetPermissionUnknownEntries"] = 68] = "ErrorCannotSetPermissionUnknownEntries";
    /**
     * Cannot specify search folders as source folders while archiving items
     */
    ServiceError[ServiceError["ErrorCannotSpecifySearchFolderAsSourceFolder"] = 69] = "ErrorCannotSpecifySearchFolderAsSourceFolder";
    /**
     * Expected an item Id but received a folder Id.
     */
    ServiceError[ServiceError["ErrorCannotUseFolderIdForItemId"] = 70] = "ErrorCannotUseFolderIdForItemId";
    /**
     * Expected a folder Id but received an item Id.
     */
    ServiceError[ServiceError["ErrorCannotUseItemIdForFolderId"] = 71] = "ErrorCannotUseItemIdForFolderId";
    /**
     * ChangeKey is required if overriding automatic conflict resolution.
     */
    ServiceError[ServiceError["ErrorChangeKeyRequired"] = 72] = "ErrorChangeKeyRequired";
    /**
     * ChangeKey is required for this operation.
     */
    ServiceError[ServiceError["ErrorChangeKeyRequiredForWriteOperations"] = 73] = "ErrorChangeKeyRequiredForWriteOperations";
    /**
     * ErrorClientDisconnected
     */
    ServiceError[ServiceError["ErrorClientDisconnected"] = 74] = "ErrorClientDisconnected";
    /**
     * Connection did not succeed. Try again later.
     */
    ServiceError[ServiceError["ErrorConnectionFailed"] = 75] = "ErrorConnectionFailed";
    /**
     * The Contains filter can only be used for string properties.
     */
    ServiceError[ServiceError["ErrorContainsFilterWrongType"] = 76] = "ErrorContainsFilterWrongType";
    /**
     * Content conversion failed.
     */
    ServiceError[ServiceError["ErrorContentConversionFailed"] = 77] = "ErrorContentConversionFailed";
    /**
     * Data is corrupt.
     */
    ServiceError[ServiceError["ErrorCorruptData"] = 78] = "ErrorCorruptData";
    /**
     * Unable to create item. The user account does not have the right to create items.
     */
    ServiceError[ServiceError["ErrorCreateItemAccessDenied"] = 79] = "ErrorCreateItemAccessDenied";
    /**
     * Failed to create one or more of the specified managed folders.
     */
    ServiceError[ServiceError["ErrorCreateManagedFolderPartialCompletion"] = 80] = "ErrorCreateManagedFolderPartialCompletion";
    /**
     * Unable to create subfolder. The user account does not have the right to create
     * subfolders.
     */
    ServiceError[ServiceError["ErrorCreateSubfolderAccessDenied"] = 81] = "ErrorCreateSubfolderAccessDenied";
    /**
     * Move and Copy operations across mailbox boundaries are not permitted.
     */
    ServiceError[ServiceError["ErrorCrossMailboxMoveCopy"] = 82] = "ErrorCrossMailboxMoveCopy";
    /**
     * This request isn't allowed because the Client Access server that's servicing the request
     * is in a different site than the requested resource. Use Autodiscover to find the correct
     * URL for accessing the specified resource.
     */
    ServiceError[ServiceError["ErrorCrossSiteRequest"] = 83] = "ErrorCrossSiteRequest";
    /**
     * Property exceeds the maximum supported size.
     */
    ServiceError[ServiceError["ErrorDataSizeLimitExceeded"] = 84] = "ErrorDataSizeLimitExceeded";
    /**
     * Invalid data source operation.
     */
    ServiceError[ServiceError["ErrorDataSourceOperation"] = 85] = "ErrorDataSourceOperation";
    /**
     * The user is already a delegate for the mailbox.
     */
    ServiceError[ServiceError["ErrorDelegateAlreadyExists"] = 86] = "ErrorDelegateAlreadyExists";
    /**
     * This is an invalid operation. Cannot add owner as delegate.
     */
    ServiceError[ServiceError["ErrorDelegateCannotAddOwner"] = 87] = "ErrorDelegateCannotAddOwner";
    /**
     * Delegate is not configured properly.
     */
    ServiceError[ServiceError["ErrorDelegateMissingConfiguration"] = 88] = "ErrorDelegateMissingConfiguration";
    /**
     * The delegate does not map to a user in the Active Directory.
     */
    ServiceError[ServiceError["ErrorDelegateNoUser"] = 89] = "ErrorDelegateNoUser";
    /**
     * Cannot add the delegate user. Failed to validate the changes.
     */
    ServiceError[ServiceError["ErrorDelegateValidationFailed"] = 90] = "ErrorDelegateValidationFailed";
    /**
     * Distinguished folders cannot be deleted.
     */
    ServiceError[ServiceError["ErrorDeleteDistinguishedFolder"] = 91] = "ErrorDeleteDistinguishedFolder";
    /**
     * The deletion failed.
     */
    ServiceError[ServiceError["ErrorDeleteItemsFailed"] = 92] = "ErrorDeleteItemsFailed";
    /**
     * DistinguishedUser should not be specified for a Delegate User.
     */
    ServiceError[ServiceError["ErrorDistinguishedUserNotSupported"] = 93] = "ErrorDistinguishedUserNotSupported";
    /**
     * The group member doesn't exist.
     */
    ServiceError[ServiceError["ErrorDistributionListMemberNotExist"] = 94] = "ErrorDistributionListMemberNotExist";
    /**
     * The specified list of managed folder names contains duplicate entries.
     */
    ServiceError[ServiceError["ErrorDuplicateInputFolderNames"] = 95] = "ErrorDuplicateInputFolderNames";
    /**
     * A duplicate exchange legacy DN.
     */
    ServiceError[ServiceError["ErrorDuplicateLegacyDistinguishedName"] = 96] = "ErrorDuplicateLegacyDistinguishedName";
    /**
     * A duplicate SOAP header was received.
     */
    ServiceError[ServiceError["ErrorDuplicateSOAPHeader"] = 97] = "ErrorDuplicateSOAPHeader";
    /**
     * The specified permission set contains duplicate UserIds.
     */
    ServiceError[ServiceError["ErrorDuplicateUserIdsSpecified"] = 98] = "ErrorDuplicateUserIdsSpecified";
    /**
     * The email address associated with a folder Id does not match the mailbox you are
     * operating on.
     */
    ServiceError[ServiceError["ErrorEmailAddressMismatch"] = 99] = "ErrorEmailAddressMismatch";
    /**
     * The watermark used for creating this subscription was not found.
     */
    ServiceError[ServiceError["ErrorEventNotFound"] = 100] = "ErrorEventNotFound";
    /**
     * You have exceeded the available concurrent connections for your account.  Try again once
     * your other requests have completed.
     */
    ServiceError[ServiceError["ErrorExceededConnectionCount"] = 101] = "ErrorExceededConnectionCount";
    /**
     * You have exceeded the maximum number of objects that can be returned for the find
     * operation. Use paging to reduce the result size and try your request again.
     */
    ServiceError[ServiceError["ErrorExceededFindCountLimit"] = 102] = "ErrorExceededFindCountLimit";
    /**
     * You have exceeded the available subscriptions for your account.  Remove unnecessary
     * subscriptions and try your request again.
     */
    ServiceError[ServiceError["ErrorExceededSubscriptionCount"] = 103] = "ErrorExceededSubscriptionCount";
    /**
     * Subscription information is not available. Subscription is expired.
     */
    ServiceError[ServiceError["ErrorExpiredSubscription"] = 104] = "ErrorExpiredSubscription";
    /**
     * Extension with id specified was not found
     */
    ServiceError[ServiceError["ErrorExtensionNotFound"] = 105] = "ErrorExtensionNotFound";
    /**
     * The folder is corrupt.
     */
    ServiceError[ServiceError["ErrorFolderCorrupt"] = 106] = "ErrorFolderCorrupt";
    /**
     * A folder with the specified name already exists.
     */
    ServiceError[ServiceError["ErrorFolderExists"] = 107] = "ErrorFolderExists";
    /**
     * The specified folder could not be found in the store.
     */
    ServiceError[ServiceError["ErrorFolderNotFound"] = 108] = "ErrorFolderNotFound";
    /**
     * ErrorFolderPropertRequestFailed
     */
    ServiceError[ServiceError["ErrorFolderPropertRequestFailed"] = 109] = "ErrorFolderPropertRequestFailed";
    /**
     * The folder save operation did not succeed.
     */
    ServiceError[ServiceError["ErrorFolderSave"] = 110] = "ErrorFolderSave";
    /**
     * The save operation failed or partially succeeded.
     */
    ServiceError[ServiceError["ErrorFolderSaveFailed"] = 111] = "ErrorFolderSaveFailed";
    /**
     * The folder save operation failed due to invalid property values.
     */
    ServiceError[ServiceError["ErrorFolderSavePropertyError"] = 112] = "ErrorFolderSavePropertyError";
    /**
     * ErrorFreeBusyDLLimitReached
     */
    ServiceError[ServiceError["ErrorFreeBusyDLLimitReached"] = 113] = "ErrorFreeBusyDLLimitReached";
    /**
     * ErrorFreeBusyGenerationFailed
     */
    ServiceError[ServiceError["ErrorFreeBusyGenerationFailed"] = 114] = "ErrorFreeBusyGenerationFailed";
    /**
     * ErrorGetServerSecurityDescriptorFailed
     */
    ServiceError[ServiceError["ErrorGetServerSecurityDescriptorFailed"] = 115] = "ErrorGetServerSecurityDescriptorFailed";
    /**
     * ErrorImContactLimitReached
     */
    ServiceError[ServiceError["ErrorImContactLimitReached"] = 116] = "ErrorImContactLimitReached";
    /**
     * ErrorImGroupDisplayNameAlreadyExists
     */
    ServiceError[ServiceError["ErrorImGroupDisplayNameAlreadyExists"] = 117] = "ErrorImGroupDisplayNameAlreadyExists";
    /**
     * ErrorImGroupLimitReached
     */
    ServiceError[ServiceError["ErrorImGroupLimitReached"] = 118] = "ErrorImGroupLimitReached";
    /**
     * The account does not have permission to impersonate the requested user.
     */
    ServiceError[ServiceError["ErrorImpersonateUserDenied"] = 119] = "ErrorImpersonateUserDenied";
    /**
     * ErrorImpersonationDenied
     */
    ServiceError[ServiceError["ErrorImpersonationDenied"] = 120] = "ErrorImpersonationDenied";
    /**
     * Impersonation failed.
     */
    ServiceError[ServiceError["ErrorImpersonationFailed"] = 121] = "ErrorImpersonationFailed";
    /**
     * ErrorInboxRulesValidationError
     */
    ServiceError[ServiceError["ErrorInboxRulesValidationError"] = 122] = "ErrorInboxRulesValidationError";
    /**
     * The request is valid but does not specify the correct server version in the
     * RequestServerVersion SOAP header.  Ensure that the RequestServerVersion SOAP header is
     * set with the correct RequestServerVersionValue.
     */
    ServiceError[ServiceError["ErrorIncorrectSchemaVersion"] = 123] = "ErrorIncorrectSchemaVersion";
    /**
     * An object within a change description must contain one and only one property to modify.
     */
    ServiceError[ServiceError["ErrorIncorrectUpdatePropertyCount"] = 124] = "ErrorIncorrectUpdatePropertyCount";
    /**
     * ErrorIndividualMailboxLimitReached
     */
    ServiceError[ServiceError["ErrorIndividualMailboxLimitReached"] = 125] = "ErrorIndividualMailboxLimitReached";
    /**
     * Resources are unavailable. Try again later.
     */
    ServiceError[ServiceError["ErrorInsufficientResources"] = 126] = "ErrorInsufficientResources";
    /**
     * An internal server error occurred. The operation failed.
     */
    ServiceError[ServiceError["ErrorInternalServerError"] = 127] = "ErrorInternalServerError";
    /**
     * An internal server error occurred. Try again later.
     */
    ServiceError[ServiceError["ErrorInternalServerTransientError"] = 128] = "ErrorInternalServerTransientError";
    /**
     * ErrorInvalidAccessLevel
     */
    ServiceError[ServiceError["ErrorInvalidAccessLevel"] = 129] = "ErrorInvalidAccessLevel";
    /**
     * ErrorInvalidArgument
     */
    ServiceError[ServiceError["ErrorInvalidArgument"] = 130] = "ErrorInvalidArgument";
    /**
     * The specified attachment Id is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidAttachmentId"] = 131] = "ErrorInvalidAttachmentId";
    /**
     * Attachment subfilters must have a single TextFilter therein.
     */
    ServiceError[ServiceError["ErrorInvalidAttachmentSubfilter"] = 132] = "ErrorInvalidAttachmentSubfilter";
    /**
     * Attachment subfilters must have a single TextFilter on the display name only.
     */
    ServiceError[ServiceError["ErrorInvalidAttachmentSubfilterTextFilter"] = 133] = "ErrorInvalidAttachmentSubfilterTextFilter";
    /**
     * ErrorInvalidAuthorizationContext
     */
    ServiceError[ServiceError["ErrorInvalidAuthorizationContext"] = 134] = "ErrorInvalidAuthorizationContext";
    /**
     * The change key is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidChangeKey"] = 135] = "ErrorInvalidChangeKey";
    /**
     * ErrorInvalidClientSecurityContext
     */
    ServiceError[ServiceError["ErrorInvalidClientSecurityContext"] = 136] = "ErrorInvalidClientSecurityContext";
    /**
     * CompleteDate cannot be set to a date in the future.
     */
    ServiceError[ServiceError["ErrorInvalidCompleteDate"] = 137] = "ErrorInvalidCompleteDate";
    /**
     * The e-mail address that was supplied isn't valid.
     */
    ServiceError[ServiceError["ErrorInvalidContactEmailAddress"] = 138] = "ErrorInvalidContactEmailAddress";
    /**
     * The e-mail index supplied isn't valid.
     */
    ServiceError[ServiceError["ErrorInvalidContactEmailIndex"] = 139] = "ErrorInvalidContactEmailIndex";
    /**
     * ErrorInvalidCrossForestCredentials
     */
    ServiceError[ServiceError["ErrorInvalidCrossForestCredentials"] = 140] = "ErrorInvalidCrossForestCredentials";
    /**
     * Invalid Delegate Folder Permission.
     */
    ServiceError[ServiceError["ErrorInvalidDelegatePermission"] = 141] = "ErrorInvalidDelegatePermission";
    /**
     * One or more UserId parameters are invalid. Make sure that the PrimarySmtpAddress, Sid and
     * DisplayName properties refer to the same user when specified.
     */
    ServiceError[ServiceError["ErrorInvalidDelegateUserId"] = 142] = "ErrorInvalidDelegateUserId";
    /**
     * An ExchangeImpersonation SOAP header must contain a user principal name, user SID, or
     * primary SMTP address.
     */
    ServiceError[ServiceError["ErrorInvalidExchangeImpersonationHeaderData"] = 143] = "ErrorInvalidExchangeImpersonationHeaderData";
    /**
     * Second operand in Excludes expression must be uint compatible.
     */
    ServiceError[ServiceError["ErrorInvalidExcludesRestriction"] = 144] = "ErrorInvalidExcludesRestriction";
    /**
     * FieldURI can only be used in Contains expressions.
     */
    ServiceError[ServiceError["ErrorInvalidExpressionTypeForSubFilter"] = 145] = "ErrorInvalidExpressionTypeForSubFilter";
    /**
     * The extended property attribute combination is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidExtendedProperty"] = 146] = "ErrorInvalidExtendedProperty";
    /**
     * The extended property value is inconsistent with its type.
     */
    ServiceError[ServiceError["ErrorInvalidExtendedPropertyValue"] = 147] = "ErrorInvalidExtendedPropertyValue";
    /**
     * The original sender of the message (initiator field in the sharing metadata) is not
     * valid.
     */
    ServiceError[ServiceError["ErrorInvalidExternalSharingInitiator"] = 148] = "ErrorInvalidExternalSharingInitiator";
    /**
     * The sharing message is not intended for this caller.
     */
    ServiceError[ServiceError["ErrorInvalidExternalSharingSubscriber"] = 149] = "ErrorInvalidExternalSharingSubscriber";
    /**
     * The organization is either not federated, or it's configured incorrectly.
     */
    ServiceError[ServiceError["ErrorInvalidFederatedOrganizationId"] = 150] = "ErrorInvalidFederatedOrganizationId";
    /**
     * Folder Id is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidFolderId"] = 151] = "ErrorInvalidFolderId";
    /**
     * ErrorInvalidFolderTypeForOperation
     */
    ServiceError[ServiceError["ErrorInvalidFolderTypeForOperation"] = 152] = "ErrorInvalidFolderTypeForOperation";
    /**
     * Invalid fractional paging offset values.
     */
    ServiceError[ServiceError["ErrorInvalidFractionalPagingParameters"] = 153] = "ErrorInvalidFractionalPagingParameters";
    /**
     * ErrorInvalidFreeBusyViewType
     */
    ServiceError[ServiceError["ErrorInvalidFreeBusyViewType"] = 154] = "ErrorInvalidFreeBusyViewType";
    /**
     * Either DataType or SharedFolderId must be specified, but not both.
     */
    ServiceError[ServiceError["ErrorInvalidGetSharingFolderRequest"] = 155] = "ErrorInvalidGetSharingFolderRequest";
    /**
     * The Id is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidId"] = 156] = "ErrorInvalidId";
    /**
     * The Im Contact id was invalid.
     */
    ServiceError[ServiceError["ErrorInvalidImContactId"] = 157] = "ErrorInvalidImContactId";
    /**
     * The Im Distribution Group Smtp Address was invalid.
     */
    ServiceError[ServiceError["ErrorInvalidImDistributionGroupSmtpAddress"] = 158] = "ErrorInvalidImDistributionGroupSmtpAddress";
    /**
     * The Im Contact id was invalid.
     */
    ServiceError[ServiceError["ErrorInvalidImGroupId"] = 159] = "ErrorInvalidImGroupId";
    /**
     * Id must be non-empty.
     */
    ServiceError[ServiceError["ErrorInvalidIdEmpty"] = 160] = "ErrorInvalidIdEmpty";
    /**
     * Id is malformed.
     */
    ServiceError[ServiceError["ErrorInvalidIdMalformed"] = 161] = "ErrorInvalidIdMalformed";
    /**
     * The EWS Id is in EwsLegacyId format which is not supported by the Exchange version
     * specified by your request. Please use the ConvertId method to convert from EwsLegacyId
     * to EwsId format.
     */
    ServiceError[ServiceError["ErrorInvalidIdMalformedEwsLegacyIdFormat"] = 162] = "ErrorInvalidIdMalformedEwsLegacyIdFormat";
    /**
     * Moniker exceeded allowable length.
     */
    ServiceError[ServiceError["ErrorInvalidIdMonikerTooLong"] = 163] = "ErrorInvalidIdMonikerTooLong";
    /**
     * The Id does not represent an item attachment.
     */
    ServiceError[ServiceError["ErrorInvalidIdNotAnItemAttachmentId"] = 164] = "ErrorInvalidIdNotAnItemAttachmentId";
    /**
     * ResolveNames returned an invalid Id.
     */
    ServiceError[ServiceError["ErrorInvalidIdReturnedByResolveNames"] = 165] = "ErrorInvalidIdReturnedByResolveNames";
    /**
     * Id exceeded allowable length.
     */
    ServiceError[ServiceError["ErrorInvalidIdStoreObjectIdTooLong"] = 166] = "ErrorInvalidIdStoreObjectIdTooLong";
    /**
     * Too many attachment levels.
     */
    ServiceError[ServiceError["ErrorInvalidIdTooManyAttachmentLevels"] = 167] = "ErrorInvalidIdTooManyAttachmentLevels";
    /**
     * The Id Xml is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidIdXml"] = 168] = "ErrorInvalidIdXml";
    /**
     * The specified indexed paging values are invalid.
     */
    ServiceError[ServiceError["ErrorInvalidIndexedPagingParameters"] = 169] = "ErrorInvalidIndexedPagingParameters";
    /**
     * Only one child node is allowed when setting an Internet Message Header.
     */
    ServiceError[ServiceError["ErrorInvalidInternetHeaderChildNodes"] = 170] = "ErrorInvalidInternetHeaderChildNodes";
    /**
     * Item type is invalid for AcceptItem action.
     */
    ServiceError[ServiceError["ErrorInvalidItemForOperationAcceptItem"] = 171] = "ErrorInvalidItemForOperationAcceptItem";
    /**
     * Item type is invalid for ArchiveItem action.
     */
    ServiceError[ServiceError["ErrorInvalidItemForOperationArchiveItem"] = 172] = "ErrorInvalidItemForOperationArchiveItem";
    /**
     * Item type is invalid for CancelCalendarItem action.
     */
    ServiceError[ServiceError["ErrorInvalidItemForOperationCancelItem"] = 173] = "ErrorInvalidItemForOperationCancelItem";
    /**
     * Item type is invalid for CreateItem operation.
     */
    ServiceError[ServiceError["ErrorInvalidItemForOperationCreateItem"] = 174] = "ErrorInvalidItemForOperationCreateItem";
    /**
     * Item type is invalid for CreateItemAttachment operation.
     */
    ServiceError[ServiceError["ErrorInvalidItemForOperationCreateItemAttachment"] = 175] = "ErrorInvalidItemForOperationCreateItemAttachment";
    /**
     * Item type is invalid for DeclineItem operation.
     */
    ServiceError[ServiceError["ErrorInvalidItemForOperationDeclineItem"] = 176] = "ErrorInvalidItemForOperationDeclineItem";
    /**
     * ExpandDL operation does not support this item type.
     */
    ServiceError[ServiceError["ErrorInvalidItemForOperationExpandDL"] = 177] = "ErrorInvalidItemForOperationExpandDL";
    /**
     * Item type is invalid for RemoveItem operation.
     */
    ServiceError[ServiceError["ErrorInvalidItemForOperationRemoveItem"] = 178] = "ErrorInvalidItemForOperationRemoveItem";
    /**
     * Item type is invalid for SendItem operation.
     */
    ServiceError[ServiceError["ErrorInvalidItemForOperationSendItem"] = 179] = "ErrorInvalidItemForOperationSendItem";
    /**
     * The item of this type is invalid for TentativelyAcceptItem action.
     */
    ServiceError[ServiceError["ErrorInvalidItemForOperationTentative"] = 180] = "ErrorInvalidItemForOperationTentative";
    /**
     * The logon type isn't valid.
     */
    ServiceError[ServiceError["ErrorInvalidLogonType"] = 181] = "ErrorInvalidLogonType";
    /**
     * Mailbox is invalid. Verify the specified Mailbox property.
     */
    ServiceError[ServiceError["ErrorInvalidMailbox"] = 182] = "ErrorInvalidMailbox";
    /**
     * The Managed Folder property is corrupt or otherwise invalid.
     */
    ServiceError[ServiceError["ErrorInvalidManagedFolderProperty"] = 183] = "ErrorInvalidManagedFolderProperty";
    /**
     * The managed folder has an invalid quota.
     */
    ServiceError[ServiceError["ErrorInvalidManagedFolderQuota"] = 184] = "ErrorInvalidManagedFolderQuota";
    /**
     * The managed folder has an invalid storage limit value.
     */
    ServiceError[ServiceError["ErrorInvalidManagedFolderSize"] = 185] = "ErrorInvalidManagedFolderSize";
    /**
     * ErrorInvalidMergedFreeBusyInterval
     */
    ServiceError[ServiceError["ErrorInvalidMergedFreeBusyInterval"] = 186] = "ErrorInvalidMergedFreeBusyInterval";
    /**
     * The specified value is not a valid name for name resolution.
     */
    ServiceError[ServiceError["ErrorInvalidNameForNameResolution"] = 187] = "ErrorInvalidNameForNameResolution";
    /**
     * ErrorInvalidNetworkServiceContext
     */
    ServiceError[ServiceError["ErrorInvalidNetworkServiceContext"] = 188] = "ErrorInvalidNetworkServiceContext";
    /**
     * ErrorInvalidOofParameter
     */
    ServiceError[ServiceError["ErrorInvalidOofParameter"] = 189] = "ErrorInvalidOofParameter";
    /**
     * ErrorInvalidOperation
     */
    ServiceError[ServiceError["ErrorInvalidOperation"] = 190] = "ErrorInvalidOperation";
    /**
     * ErrorInvalidOrganizationRelationshipForFreeBusy
     */
    ServiceError[ServiceError["ErrorInvalidOrganizationRelationshipForFreeBusy"] = 191] = "ErrorInvalidOrganizationRelationshipForFreeBusy";
    /**
     * MaxEntriesReturned must be greater than zero.
     */
    ServiceError[ServiceError["ErrorInvalidPagingMaxRows"] = 192] = "ErrorInvalidPagingMaxRows";
    /**
     * Cannot create a subfolder within a SearchFolder.
     */
    ServiceError[ServiceError["ErrorInvalidParentFolder"] = 193] = "ErrorInvalidParentFolder";
    /**
     * PercentComplete must be an integer between 0 and 100.
     */
    ServiceError[ServiceError["ErrorInvalidPercentCompleteValue"] = 194] = "ErrorInvalidPercentCompleteValue";
    /**
     * The permission settings were not valid.
     */
    ServiceError[ServiceError["ErrorInvalidPermissionSettings"] = 195] = "ErrorInvalidPermissionSettings";
    /**
     * The phone call ID isn't valid.
     */
    ServiceError[ServiceError["ErrorInvalidPhoneCallId"] = 196] = "ErrorInvalidPhoneCallId";
    /**
     * The phone number isn't valid.
     */
    ServiceError[ServiceError["ErrorInvalidPhoneNumber"] = 197] = "ErrorInvalidPhoneNumber";
    /**
     * The append action is not supported for this property.
     */
    ServiceError[ServiceError["ErrorInvalidPropertyAppend"] = 198] = "ErrorInvalidPropertyAppend";
    /**
     * The delete action is not supported for this property.
     */
    ServiceError[ServiceError["ErrorInvalidPropertyDelete"] = 199] = "ErrorInvalidPropertyDelete";
    /**
     * Property cannot be used in Exists expression.  Use IsEqualTo instead.
     */
    ServiceError[ServiceError["ErrorInvalidPropertyForExists"] = 200] = "ErrorInvalidPropertyForExists";
    /**
     * Property is not valid for this operation.
     */
    ServiceError[ServiceError["ErrorInvalidPropertyForOperation"] = 201] = "ErrorInvalidPropertyForOperation";
    /**
     * Property is not valid for this object type.
     */
    ServiceError[ServiceError["ErrorInvalidPropertyRequest"] = 202] = "ErrorInvalidPropertyRequest";
    /**
     * Set action is invalid for property.
     */
    ServiceError[ServiceError["ErrorInvalidPropertySet"] = 203] = "ErrorInvalidPropertySet";
    /**
     * Update operation is invalid for property of a sent message.
     */
    ServiceError[ServiceError["ErrorInvalidPropertyUpdateSentMessage"] = 204] = "ErrorInvalidPropertyUpdateSentMessage";
    /**
     * The proxy security context is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidProxySecurityContext"] = 205] = "ErrorInvalidProxySecurityContext";
    /**
     * SubscriptionId is invalid. Subscription is not a pull subscription.
     */
    ServiceError[ServiceError["ErrorInvalidPullSubscriptionId"] = 206] = "ErrorInvalidPullSubscriptionId";
    /**
     * URL specified for push subscription is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidPushSubscriptionUrl"] = 207] = "ErrorInvalidPushSubscriptionUrl";
    /**
     * One or more recipients are invalid.
     */
    ServiceError[ServiceError["ErrorInvalidRecipients"] = 208] = "ErrorInvalidRecipients";
    /**
     * Recipient subfilters are only supported when there are two expressions within a single
     * AND filter.
     */
    ServiceError[ServiceError["ErrorInvalidRecipientSubfilter"] = 209] = "ErrorInvalidRecipientSubfilter";
    /**
     * Recipient subfilter must have a comparison filter that tests equality to recipient type
     * or attendee type.
     */
    ServiceError[ServiceError["ErrorInvalidRecipientSubfilterComparison"] = 210] = "ErrorInvalidRecipientSubfilterComparison";
    /**
     * Recipient subfilters must have a text filter and a comparison filter in that order.
     */
    ServiceError[ServiceError["ErrorInvalidRecipientSubfilterOrder"] = 211] = "ErrorInvalidRecipientSubfilterOrder";
    /**
     * Recipient subfilter must have a TextFilter on the SMTP address only.
     */
    ServiceError[ServiceError["ErrorInvalidRecipientSubfilterTextFilter"] = 212] = "ErrorInvalidRecipientSubfilterTextFilter";
    /**
     * The reference item does not support the requested operation.
     */
    ServiceError[ServiceError["ErrorInvalidReferenceItem"] = 213] = "ErrorInvalidReferenceItem";
    /**
     * The request is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidRequest"] = 214] = "ErrorInvalidRequest";
    /**
     * The restriction is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidRestriction"] = 215] = "ErrorInvalidRestriction";
    /**
     * ErrorInvalidRetentionIdTagTypeMismatch.
     */
    ServiceError[ServiceError["ErrorInvalidRetentionTagTypeMismatch"] = 216] = "ErrorInvalidRetentionTagTypeMismatch";
    /**
     * ErrorInvalidRetentionTagInvisible.
     */
    ServiceError[ServiceError["ErrorInvalidRetentionTagInvisible"] = 217] = "ErrorInvalidRetentionTagInvisible";
    /**
     * ErrorInvalidRetentionTagInheritance.
     */
    ServiceError[ServiceError["ErrorInvalidRetentionTagInheritance"] = 218] = "ErrorInvalidRetentionTagInheritance";
    /**
     * ErrorInvalidRetentionTagIdGuid.
     */
    ServiceError[ServiceError["ErrorInvalidRetentionTagIdGuid"] = 219] = "ErrorInvalidRetentionTagIdGuid";
    /**
     * The routing type format is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidRoutingType"] = 220] = "ErrorInvalidRoutingType";
    /**
     * ErrorInvalidScheduledOofDuration
     */
    ServiceError[ServiceError["ErrorInvalidScheduledOofDuration"] = 221] = "ErrorInvalidScheduledOofDuration";
    /**
     * The mailbox that was requested doesn't support the specified RequestServerVersion.
     */
    ServiceError[ServiceError["ErrorInvalidSchemaVersionForMailboxVersion"] = 222] = "ErrorInvalidSchemaVersionForMailboxVersion";
    /**
     * ErrorInvalidSecurityDescriptor
     */
    ServiceError[ServiceError["ErrorInvalidSecurityDescriptor"] = 223] = "ErrorInvalidSecurityDescriptor";
    /**
     * Invalid combination of SaveItemToFolder attribute and SavedItemFolderId element.
     */
    ServiceError[ServiceError["ErrorInvalidSendItemSaveSettings"] = 224] = "ErrorInvalidSendItemSaveSettings";
    /**
     * Invalid serialized access token.
     */
    ServiceError[ServiceError["ErrorInvalidSerializedAccessToken"] = 225] = "ErrorInvalidSerializedAccessToken";
    /**
     * The specified server version is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidServerVersion"] = 226] = "ErrorInvalidServerVersion";
    /**
     * The sharing message metadata is not valid.
     */
    ServiceError[ServiceError["ErrorInvalidSharingData"] = 227] = "ErrorInvalidSharingData";
    /**
     * The sharing message is not valid.
     */
    ServiceError[ServiceError["ErrorInvalidSharingMessage"] = 228] = "ErrorInvalidSharingMessage";
    /**
     * A SID with an invalid format was encountered.
     */
    ServiceError[ServiceError["ErrorInvalidSid"] = 229] = "ErrorInvalidSid";
    /**
     * The SIP address isn't valid.
     */
    ServiceError[ServiceError["ErrorInvalidSIPUri"] = 230] = "ErrorInvalidSIPUri";
    /**
     * The SMTP address format is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidSmtpAddress"] = 231] = "ErrorInvalidSmtpAddress";
    /**
     * Invalid subFilterType.
     */
    ServiceError[ServiceError["ErrorInvalidSubfilterType"] = 232] = "ErrorInvalidSubfilterType";
    /**
     * SubFilterType is not attendee type.
     */
    ServiceError[ServiceError["ErrorInvalidSubfilterTypeNotAttendeeType"] = 233] = "ErrorInvalidSubfilterTypeNotAttendeeType";
    /**
     * SubFilterType is not recipient type.
     */
    ServiceError[ServiceError["ErrorInvalidSubfilterTypeNotRecipientType"] = 234] = "ErrorInvalidSubfilterTypeNotRecipientType";
    /**
     * Subscription is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidSubscription"] = 235] = "ErrorInvalidSubscription";
    /**
     * A subscription can only be established on a single public folder or on folders from a
     * single mailbox.
     */
    ServiceError[ServiceError["ErrorInvalidSubscriptionRequest"] = 236] = "ErrorInvalidSubscriptionRequest";
    /**
     * Synchronization state data is corrupt or otherwise invalid.
     */
    ServiceError[ServiceError["ErrorInvalidSyncStateData"] = 237] = "ErrorInvalidSyncStateData";
    /**
     * ErrorInvalidTimeInterval
     */
    ServiceError[ServiceError["ErrorInvalidTimeInterval"] = 238] = "ErrorInvalidTimeInterval";
    /**
     * A UserId was not valid.
     */
    ServiceError[ServiceError["ErrorInvalidUserInfo"] = 239] = "ErrorInvalidUserInfo";
    /**
     * ErrorInvalidUserOofSettings
     */
    ServiceError[ServiceError["ErrorInvalidUserOofSettings"] = 240] = "ErrorInvalidUserOofSettings";
    /**
     * The impersonation principal name is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidUserPrincipalName"] = 241] = "ErrorInvalidUserPrincipalName";
    /**
     * The user SID is invalid or does not map to a user in the Active Directory.
     */
    ServiceError[ServiceError["ErrorInvalidUserSid"] = 242] = "ErrorInvalidUserSid";
    /**
     * ErrorInvalidUserSidMissingUPN
     */
    ServiceError[ServiceError["ErrorInvalidUserSidMissingUPN"] = 243] = "ErrorInvalidUserSidMissingUPN";
    /**
     * The specified value is invalid for property.
     */
    ServiceError[ServiceError["ErrorInvalidValueForProperty"] = 244] = "ErrorInvalidValueForProperty";
    /**
     * The watermark is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidWatermark"] = 245] = "ErrorInvalidWatermark";
    /**
     * A valid IP gateway couldn't be found.
     */
    ServiceError[ServiceError["ErrorIPGatewayNotFound"] = 246] = "ErrorIPGatewayNotFound";
    /**
     * The send or update operation could not be performed because the change key passed in the
     * request does not match the current change key for the item.
     */
    ServiceError[ServiceError["ErrorIrresolvableConflict"] = 247] = "ErrorIrresolvableConflict";
    /**
     * The item is corrupt.
     */
    ServiceError[ServiceError["ErrorItemCorrupt"] = 248] = "ErrorItemCorrupt";
    /**
     * The specified object was not found in the store.
     */
    ServiceError[ServiceError["ErrorItemNotFound"] = 249] = "ErrorItemNotFound";
    /**
     * One or more of the properties requested for this item could not be retrieved.
     */
    ServiceError[ServiceError["ErrorItemPropertyRequestFailed"] = 250] = "ErrorItemPropertyRequestFailed";
    /**
     * The item save operation did not succeed.
     */
    ServiceError[ServiceError["ErrorItemSave"] = 251] = "ErrorItemSave";
    /**
     * Item save operation did not succeed.
     */
    ServiceError[ServiceError["ErrorItemSavePropertyError"] = 252] = "ErrorItemSavePropertyError";
    /**
     * ErrorLegacyMailboxFreeBusyViewTypeNotMerged
     */
    ServiceError[ServiceError["ErrorLegacyMailboxFreeBusyViewTypeNotMerged"] = 253] = "ErrorLegacyMailboxFreeBusyViewTypeNotMerged";
    /**
     * ErrorLocalServerObjectNotFound
     */
    ServiceError[ServiceError["ErrorLocalServerObjectNotFound"] = 254] = "ErrorLocalServerObjectNotFound";
    /**
     * ErrorLogonAsNetworkServiceFailed
     */
    ServiceError[ServiceError["ErrorLogonAsNetworkServiceFailed"] = 255] = "ErrorLogonAsNetworkServiceFailed";
    /**
     * Unable to access an account or mailbox.
     */
    ServiceError[ServiceError["ErrorMailboxConfiguration"] = 256] = "ErrorMailboxConfiguration";
    /**
     * ErrorMailboxDataArrayEmpty
     */
    ServiceError[ServiceError["ErrorMailboxDataArrayEmpty"] = 257] = "ErrorMailboxDataArrayEmpty";
    /**
     * ErrorMailboxDataArrayTooBig
     */
    ServiceError[ServiceError["ErrorMailboxDataArrayTooBig"] = 258] = "ErrorMailboxDataArrayTooBig";
    /**
     * ErrorMailboxFailover
     */
    ServiceError[ServiceError["ErrorMailboxFailover"] = 259] = "ErrorMailboxFailover";
    /**
     * The specific mailbox hold is not found.
     */
    ServiceError[ServiceError["ErrorMailboxHoldNotFound"] = 260] = "ErrorMailboxHoldNotFound";
    /**
     * ErrorMailboxLogonFailed
     */
    ServiceError[ServiceError["ErrorMailboxLogonFailed"] = 261] = "ErrorMailboxLogonFailed";
    /**
     * Mailbox move in progress. Try again later.
     */
    ServiceError[ServiceError["ErrorMailboxMoveInProgress"] = 262] = "ErrorMailboxMoveInProgress";
    /**
     * The mailbox database is temporarily unavailable.
     */
    ServiceError[ServiceError["ErrorMailboxStoreUnavailable"] = 263] = "ErrorMailboxStoreUnavailable";
    /**
     * ErrorMailRecipientNotFound
     */
    ServiceError[ServiceError["ErrorMailRecipientNotFound"] = 264] = "ErrorMailRecipientNotFound";
    /**
     * MailTips aren't available for your organization.
     */
    ServiceError[ServiceError["ErrorMailTipsDisabled"] = 265] = "ErrorMailTipsDisabled";
    /**
     * The specified Managed Folder already exists in the mailbox.
     */
    ServiceError[ServiceError["ErrorManagedFolderAlreadyExists"] = 266] = "ErrorManagedFolderAlreadyExists";
    /**
     * Unable to find the specified managed folder in the Active Directory.
     */
    ServiceError[ServiceError["ErrorManagedFolderNotFound"] = 267] = "ErrorManagedFolderNotFound";
    /**
     * Failed to create or bind to the folder: Managed Folders
     */
    ServiceError[ServiceError["ErrorManagedFoldersRootFailure"] = 268] = "ErrorManagedFoldersRootFailure";
    /**
     * ErrorMeetingSuggestionGenerationFailed
     */
    ServiceError[ServiceError["ErrorMeetingSuggestionGenerationFailed"] = 269] = "ErrorMeetingSuggestionGenerationFailed";
    /**
     * MessageDisposition attribute is required.
     */
    ServiceError[ServiceError["ErrorMessageDispositionRequired"] = 270] = "ErrorMessageDispositionRequired";
    /**
     * The message exceeds the maximum supported size.
     */
    ServiceError[ServiceError["ErrorMessageSizeExceeded"] = 271] = "ErrorMessageSizeExceeded";
    /**
     * The domain specified in the tracking request doesn't exist.
     */
    ServiceError[ServiceError["ErrorMessageTrackingNoSuchDomain"] = 272] = "ErrorMessageTrackingNoSuchDomain";
    /**
     * The log search service can't track this message.
     */
    ServiceError[ServiceError["ErrorMessageTrackingPermanentError"] = 273] = "ErrorMessageTrackingPermanentError";
    /**
     * The log search service isn't currently available. Please try again later.
     */
    ServiceError[ServiceError["ErrorMessageTrackingTransientError"] = 274] = "ErrorMessageTrackingTransientError";
    /**
     * MIME content conversion failed.
     */
    ServiceError[ServiceError["ErrorMimeContentConversionFailed"] = 275] = "ErrorMimeContentConversionFailed";
    /**
     * Invalid MIME content.
     */
    ServiceError[ServiceError["ErrorMimeContentInvalid"] = 276] = "ErrorMimeContentInvalid";
    /**
     * Invalid base64 string for MIME content.
     */
    ServiceError[ServiceError["ErrorMimeContentInvalidBase64String"] = 277] = "ErrorMimeContentInvalidBase64String";
    /**
     * The subscription has missed events, but will continue service on this connection.
     */
    ServiceError[ServiceError["ErrorMissedNotificationEvents"] = 278] = "ErrorMissedNotificationEvents";
    /**
     * ErrorMissingArgument
     */
    ServiceError[ServiceError["ErrorMissingArgument"] = 279] = "ErrorMissingArgument";
    /**
     * When making a request as an account that does not have a mailbox, you must specify the
     * mailbox primary SMTP address for any distinguished folder Ids.
     */
    ServiceError[ServiceError["ErrorMissingEmailAddress"] = 280] = "ErrorMissingEmailAddress";
    /**
     * When making a request with an account that does not have a mailbox, you must specify the
     * primary SMTP address for an existing mailbox.
     */
    ServiceError[ServiceError["ErrorMissingEmailAddressForManagedFolder"] = 281] = "ErrorMissingEmailAddressForManagedFolder";
    /**
     * EmailAddress or ItemId must be included in the request.
     */
    ServiceError[ServiceError["ErrorMissingInformationEmailAddress"] = 282] = "ErrorMissingInformationEmailAddress";
    /**
     * ReferenceItemId must be included in the request.
     */
    ServiceError[ServiceError["ErrorMissingInformationReferenceItemId"] = 283] = "ErrorMissingInformationReferenceItemId";
    /**
     * SharingFolderId must be included in the request.
     */
    ServiceError[ServiceError["ErrorMissingInformationSharingFolderId"] = 284] = "ErrorMissingInformationSharingFolderId";
    /**
     * An item must be specified when creating an item attachment.
     */
    ServiceError[ServiceError["ErrorMissingItemForCreateItemAttachment"] = 285] = "ErrorMissingItemForCreateItemAttachment";
    /**
     * The managed folder Id is missing.
     */
    ServiceError[ServiceError["ErrorMissingManagedFolderId"] = 286] = "ErrorMissingManagedFolderId";
    /**
     * A message needs to have at least one recipient.
     */
    ServiceError[ServiceError["ErrorMissingRecipients"] = 287] = "ErrorMissingRecipients";
    /**
     * Missing information for delegate user. You must either specify a valid SMTP address or
     * SID.
     */
    ServiceError[ServiceError["ErrorMissingUserIdInformation"] = 288] = "ErrorMissingUserIdInformation";
    /**
     * Only one access mode header may be specified.
     */
    ServiceError[ServiceError["ErrorMoreThanOneAccessModeSpecified"] = 289] = "ErrorMoreThanOneAccessModeSpecified";
    /**
     * The move or copy operation failed.
     */
    ServiceError[ServiceError["ErrorMoveCopyFailed"] = 290] = "ErrorMoveCopyFailed";
    /**
     * Cannot move distinguished folder.
     */
    ServiceError[ServiceError["ErrorMoveDistinguishedFolder"] = 291] = "ErrorMoveDistinguishedFolder";
    /**
     * ErrorMultiLegacyMailboxAccess
     */
    ServiceError[ServiceError["ErrorMultiLegacyMailboxAccess"] = 292] = "ErrorMultiLegacyMailboxAccess";
    /**
     * Multiple results were found.
     */
    ServiceError[ServiceError["ErrorNameResolutionMultipleResults"] = 293] = "ErrorNameResolutionMultipleResults";
    /**
     * User must have a mailbox for name resolution operations.
     */
    ServiceError[ServiceError["ErrorNameResolutionNoMailbox"] = 294] = "ErrorNameResolutionNoMailbox";
    /**
     * No results were found.
     */
    ServiceError[ServiceError["ErrorNameResolutionNoResults"] = 295] = "ErrorNameResolutionNoResults";
    /**
     * Another connection was opened against this subscription.
     */
    ServiceError[ServiceError["ErrorNewEventStreamConnectionOpened"] = 296] = "ErrorNewEventStreamConnectionOpened";
    /**
     * Exchange Web Services are not currently available for this request because there are no
     * available Client Access Services Servers in the target AD Site.
     */
    ServiceError[ServiceError["ErrorNoApplicableProxyCASServersAvailable"] = 297] = "ErrorNoApplicableProxyCASServersAvailable";
    /**
     * ErrorNoCalendar
     */
    ServiceError[ServiceError["ErrorNoCalendar"] = 298] = "ErrorNoCalendar";
    /**
     * Exchange Web Services aren't available for this request because there is no Client Access
     * server with the necessary configuration in the Active Directory site where the mailbox is
     * stored. If the problem continues, click Help.
     */
    ServiceError[ServiceError["ErrorNoDestinationCASDueToKerberosRequirements"] = 299] = "ErrorNoDestinationCASDueToKerberosRequirements";
    /**
     * Exchange Web Services aren't currently available for this request because an SSL
     * connection couldn't be established to the Client Access server that should be used for
     * mailbox access. If the problem continues, click Help.
     */
    ServiceError[ServiceError["ErrorNoDestinationCASDueToSSLRequirements"] = 300] = "ErrorNoDestinationCASDueToSSLRequirements";
    /**
     * Exchange Web Services aren't currently available for this request because the Client
     * Access server used for proxying has an older version of Exchange installed than the
     * Client Access server in the mailbox Active Directory site.
     */
    ServiceError[ServiceError["ErrorNoDestinationCASDueToVersionMismatch"] = 301] = "ErrorNoDestinationCASDueToVersionMismatch";
    /**
     * You cannot specify the FolderClass when creating a non-generic folder.
     */
    ServiceError[ServiceError["ErrorNoFolderClassOverride"] = 302] = "ErrorNoFolderClassOverride";
    /**
     * ErrorNoFreeBusyAccess
     */
    ServiceError[ServiceError["ErrorNoFreeBusyAccess"] = 303] = "ErrorNoFreeBusyAccess";
    /**
     * Mailbox does not exist.
     */
    ServiceError[ServiceError["ErrorNonExistentMailbox"] = 304] = "ErrorNonExistentMailbox";
    /**
     * The primary SMTP address must be specified when referencing a mailbox.
     */
    ServiceError[ServiceError["ErrorNonPrimarySmtpAddress"] = 305] = "ErrorNonPrimarySmtpAddress";
    /**
     * Custom properties cannot be specified using property tags.  The GUID and Id/Name
     * combination must be used instead.
     */
    ServiceError[ServiceError["ErrorNoPropertyTagForCustomProperties"] = 306] = "ErrorNoPropertyTagForCustomProperties";
    /**
     * ErrorNoPublicFolderReplicaAvailable
     */
    ServiceError[ServiceError["ErrorNoPublicFolderReplicaAvailable"] = 307] = "ErrorNoPublicFolderReplicaAvailable";
    /**
     * There are no public folder servers available.
     */
    ServiceError[ServiceError["ErrorNoPublicFolderServerAvailable"] = 308] = "ErrorNoPublicFolderServerAvailable";
    /**
     * Exchange Web Services are not currently available for this request because none of the
     * Client Access Servers in the destination site could process the request.
     */
    ServiceError[ServiceError["ErrorNoRespondingCASInDestinationSite"] = 309] = "ErrorNoRespondingCASInDestinationSite";
    /**
     * Policy does not allow granting of permissions to external users.
     */
    ServiceError[ServiceError["ErrorNotAllowedExternalSharingByPolicy"] = 310] = "ErrorNotAllowedExternalSharingByPolicy";
    /**
     * The user is not a delegate for the mailbox.
     */
    ServiceError[ServiceError["ErrorNotDelegate"] = 311] = "ErrorNotDelegate";
    /**
     * There was not enough memory to complete the request.
     */
    ServiceError[ServiceError["ErrorNotEnoughMemory"] = 312] = "ErrorNotEnoughMemory";
    /**
     * The sharing message is not supported.
     */
    ServiceError[ServiceError["ErrorNotSupportedSharingMessage"] = 313] = "ErrorNotSupportedSharingMessage";
    /**
     * Operation would change object type, which is not permitted.
     */
    ServiceError[ServiceError["ErrorObjectTypeChanged"] = 314] = "ErrorObjectTypeChanged";
    /**
     * Modified occurrence is crossing or overlapping adjacent occurrence.
     */
    ServiceError[ServiceError["ErrorOccurrenceCrossingBoundary"] = 315] = "ErrorOccurrenceCrossingBoundary";
    /**
     * One occurrence of the recurring calendar item overlaps with another occurrence of the
     * same calendar item.
     */
    ServiceError[ServiceError["ErrorOccurrenceTimeSpanTooBig"] = 316] = "ErrorOccurrenceTimeSpanTooBig";
    /**
     * Operation not allowed with public folder root.
     */
    ServiceError[ServiceError["ErrorOperationNotAllowedWithPublicFolderRoot"] = 317] = "ErrorOperationNotAllowedWithPublicFolderRoot";
    /**
     * Organization is not federated.
     */
    ServiceError[ServiceError["ErrorOrganizationNotFederated"] = 318] = "ErrorOrganizationNotFederated";
    /**
     * ErrorOutlookRuleBlobExists
     */
    ServiceError[ServiceError["ErrorOutlookRuleBlobExists"] = 319] = "ErrorOutlookRuleBlobExists";
    /**
     * You must specify the parent folder Id for this operation.
     */
    ServiceError[ServiceError["ErrorParentFolderIdRequired"] = 320] = "ErrorParentFolderIdRequired";
    /**
     * The specified parent folder could not be found.
     */
    ServiceError[ServiceError["ErrorParentFolderNotFound"] = 321] = "ErrorParentFolderNotFound";
    /**
     * Password change is required.
     */
    ServiceError[ServiceError["ErrorPasswordChangeRequired"] = 322] = "ErrorPasswordChangeRequired";
    /**
     * Password has expired. Change password.
     */
    ServiceError[ServiceError["ErrorPasswordExpired"] = 323] = "ErrorPasswordExpired";
    /**
     * Policy does not allow granting permission level to user.
     */
    ServiceError[ServiceError["ErrorPermissionNotAllowedByPolicy"] = 324] = "ErrorPermissionNotAllowedByPolicy";
    /**
     * Dialing restrictions are preventing the phone number that was entered from being dialed.
     */
    ServiceError[ServiceError["ErrorPhoneNumberNotDialable"] = 325] = "ErrorPhoneNumberNotDialable";
    /**
     * Property update did not succeed.
     */
    ServiceError[ServiceError["ErrorPropertyUpdate"] = 326] = "ErrorPropertyUpdate";
    /**
     * At least one property failed validation.
     */
    ServiceError[ServiceError["ErrorPropertyValidationFailure"] = 327] = "ErrorPropertyValidationFailure";
    /**
     * Subscription related request failed because EWS could not contact the appropriate CAS
     * server for this request.  If this problem persists, recreate the subscription.
     */
    ServiceError[ServiceError["ErrorProxiedSubscriptionCallFailure"] = 328] = "ErrorProxiedSubscriptionCallFailure";
    /**
     * Request failed because EWS could not contact the appropriate CAS server for this request.
     */
    ServiceError[ServiceError["ErrorProxyCallFailed"] = 329] = "ErrorProxyCallFailed";
    /**
     * Exchange Web Services (EWS) is not available for this mailbox because the user account
     * associated with the mailbox is a member of too many groups. EWS limits the group
     * membership it can proxy between Client Access Service Servers to 3000.
     */
    ServiceError[ServiceError["ErrorProxyGroupSidLimitExceeded"] = 330] = "ErrorProxyGroupSidLimitExceeded";
    /**
     * ErrorProxyRequestNotAllowed
     */
    ServiceError[ServiceError["ErrorProxyRequestNotAllowed"] = 331] = "ErrorProxyRequestNotAllowed";
    /**
     * ErrorProxyRequestProcessingFailed
     */
    ServiceError[ServiceError["ErrorProxyRequestProcessingFailed"] = 332] = "ErrorProxyRequestProcessingFailed";
    /**
     * Exchange Web Services are not currently available for this mailbox because it could not
     * determine the Client Access Services Server to use for the mailbox.
     */
    ServiceError[ServiceError["ErrorProxyServiceDiscoveryFailed"] = 333] = "ErrorProxyServiceDiscoveryFailed";
    /**
     * Proxy token has expired.
     */
    ServiceError[ServiceError["ErrorProxyTokenExpired"] = 334] = "ErrorProxyTokenExpired";
    /**
     * ErrorPublicFolderRequestProcessingFailed
     */
    ServiceError[ServiceError["ErrorPublicFolderRequestProcessingFailed"] = 335] = "ErrorPublicFolderRequestProcessingFailed";
    /**
     * ErrorPublicFolderServerNotFound
     */
    ServiceError[ServiceError["ErrorPublicFolderServerNotFound"] = 336] = "ErrorPublicFolderServerNotFound";
    /**
     * The search folder has a restriction that is too long to return.
     */
    ServiceError[ServiceError["ErrorQueryFilterTooLong"] = 337] = "ErrorQueryFilterTooLong";
    /**
     * Mailbox has exceeded maximum mailbox size.
     */
    ServiceError[ServiceError["ErrorQuotaExceeded"] = 338] = "ErrorQuotaExceeded";
    /**
     * Unable to retrieve events for this subscription.  The subscription must be recreated.
     */
    ServiceError[ServiceError["ErrorReadEventsFailed"] = 339] = "ErrorReadEventsFailed";
    /**
     * Unable to suppress read receipt. Read receipts are not pending.
     */
    ServiceError[ServiceError["ErrorReadReceiptNotPending"] = 340] = "ErrorReadReceiptNotPending";
    /**
     * Recurrence end date can not exceed Sep 1, 4500 00:00:00.
     */
    ServiceError[ServiceError["ErrorRecurrenceEndDateTooBig"] = 341] = "ErrorRecurrenceEndDateTooBig";
    /**
     * Recurrence has no occurrences in the specified range.
     */
    ServiceError[ServiceError["ErrorRecurrenceHasNoOccurrence"] = 342] = "ErrorRecurrenceHasNoOccurrence";
    /**
     * Failed to remove one or more delegates.
     */
    ServiceError[ServiceError["ErrorRemoveDelegatesFailed"] = 343] = "ErrorRemoveDelegatesFailed";
    /**
     * ErrorRequestAborted
     */
    ServiceError[ServiceError["ErrorRequestAborted"] = 344] = "ErrorRequestAborted";
    /**
     * ErrorRequestStreamTooBig
     */
    ServiceError[ServiceError["ErrorRequestStreamTooBig"] = 345] = "ErrorRequestStreamTooBig";
    /**
     * Required property is missing.
     */
    ServiceError[ServiceError["ErrorRequiredPropertyMissing"] = 346] = "ErrorRequiredPropertyMissing";
    /**
     * Cannot perform ResolveNames for non-contact folder.
     */
    ServiceError[ServiceError["ErrorResolveNamesInvalidFolderType"] = 347] = "ErrorResolveNamesInvalidFolderType";
    /**
     * Only one contacts folder can be specified in request.
     */
    ServiceError[ServiceError["ErrorResolveNamesOnlyOneContactsFolderAllowed"] = 348] = "ErrorResolveNamesOnlyOneContactsFolderAllowed";
    /**
     * The response failed schema validation.
     */
    ServiceError[ServiceError["ErrorResponseSchemaValidation"] = 349] = "ErrorResponseSchemaValidation";
    /**
     * The restriction or sort order is too complex for this operation.
     */
    ServiceError[ServiceError["ErrorRestrictionTooComplex"] = 350] = "ErrorRestrictionTooComplex";
    /**
     * Restriction contained too many elements.
     */
    ServiceError[ServiceError["ErrorRestrictionTooLong"] = 351] = "ErrorRestrictionTooLong";
    /**
     * ErrorResultSetTooBig
     */
    ServiceError[ServiceError["ErrorResultSetTooBig"] = 352] = "ErrorResultSetTooBig";
    /**
     * ErrorRulesOverQuota
     */
    ServiceError[ServiceError["ErrorRulesOverQuota"] = 353] = "ErrorRulesOverQuota";
    /**
     * The folder in which items were to be saved could not be found.
     */
    ServiceError[ServiceError["ErrorSavedItemFolderNotFound"] = 354] = "ErrorSavedItemFolderNotFound";
    /**
     * The request failed schema validation.
     */
    ServiceError[ServiceError["ErrorSchemaValidation"] = 355] = "ErrorSchemaValidation";
    /**
     * The search folder is not initialized.
     */
    ServiceError[ServiceError["ErrorSearchFolderNotInitialized"] = 356] = "ErrorSearchFolderNotInitialized";
    /**
     * The user account which was used to submit this request does not have the right to send
     * mail on behalf of the specified sending account.
     */
    ServiceError[ServiceError["ErrorSendAsDenied"] = 357] = "ErrorSendAsDenied";
    /**
     * SendMeetingCancellations attribute is required for Calendar items.
     */
    ServiceError[ServiceError["ErrorSendMeetingCancellationsRequired"] = 358] = "ErrorSendMeetingCancellationsRequired";
    /**
     * The SendMeetingInvitationsOrCancellations attribute is required for calendar items.
     */
    ServiceError[ServiceError["ErrorSendMeetingInvitationsOrCancellationsRequired"] = 359] = "ErrorSendMeetingInvitationsOrCancellationsRequired";
    /**
     * The SendMeetingInvitations attribute is required for calendar items.
     */
    ServiceError[ServiceError["ErrorSendMeetingInvitationsRequired"] = 360] = "ErrorSendMeetingInvitationsRequired";
    /**
     * The meeting request has already been sent and might not be updated.
     */
    ServiceError[ServiceError["ErrorSentMeetingRequestUpdate"] = 361] = "ErrorSentMeetingRequestUpdate";
    /**
     * The task request has already been sent and may not be updated.
     */
    ServiceError[ServiceError["ErrorSentTaskRequestUpdate"] = 362] = "ErrorSentTaskRequestUpdate";
    /**
     * The server cannot service this request right now. Try again later.
     */
    ServiceError[ServiceError["ErrorServerBusy"] = 363] = "ErrorServerBusy";
    /**
     * ErrorServiceDiscoveryFailed
     */
    ServiceError[ServiceError["ErrorServiceDiscoveryFailed"] = 364] = "ErrorServiceDiscoveryFailed";
    /**
     * No external Exchange Web Service URL available.
     */
    ServiceError[ServiceError["ErrorSharingNoExternalEwsAvailable"] = 365] = "ErrorSharingNoExternalEwsAvailable";
    /**
     * Failed to synchronize the sharing folder.
     */
    ServiceError[ServiceError["ErrorSharingSynchronizationFailed"] = 366] = "ErrorSharingSynchronizationFailed";
    /**
     * The current ChangeKey is required for this operation.
     */
    ServiceError[ServiceError["ErrorStaleObject"] = 367] = "ErrorStaleObject";
    /**
     * The message couldn't be sent because the sender's submission quota was exceeded. Please
     * try again later.
     */
    ServiceError[ServiceError["ErrorSubmissionQuotaExceeded"] = 368] = "ErrorSubmissionQuotaExceeded";
    /**
     * Access is denied. Only the subscription owner may access the subscription.
     */
    ServiceError[ServiceError["ErrorSubscriptionAccessDenied"] = 369] = "ErrorSubscriptionAccessDenied";
    /**
     * Subscriptions are not supported for delegate user access.
     */
    ServiceError[ServiceError["ErrorSubscriptionDelegateAccessNotSupported"] = 370] = "ErrorSubscriptionDelegateAccessNotSupported";
    /**
     * The specified subscription was not found.
     */
    ServiceError[ServiceError["ErrorSubscriptionNotFound"] = 371] = "ErrorSubscriptionNotFound";
    /**
     * The StreamingSubscription was unsubscribed while the current connection was servicing it.
     */
    ServiceError[ServiceError["ErrorSubscriptionUnsubscribed"] = 372] = "ErrorSubscriptionUnsubscribed";
    /**
     * The folder to be synchronized could not be found.
     */
    ServiceError[ServiceError["ErrorSyncFolderNotFound"] = 373] = "ErrorSyncFolderNotFound";
    /**
     * ErrorTeamMailboxNotFound
     */
    ServiceError[ServiceError["ErrorTeamMailboxNotFound"] = 374] = "ErrorTeamMailboxNotFound";
    /**
     * ErrorTeamMailboxNotLinkedToSharePoint
     */
    ServiceError[ServiceError["ErrorTeamMailboxNotLinkedToSharePoint"] = 375] = "ErrorTeamMailboxNotLinkedToSharePoint";
    /**
     * ErrorTeamMailboxUrlValidationFailed
     */
    ServiceError[ServiceError["ErrorTeamMailboxUrlValidationFailed"] = 376] = "ErrorTeamMailboxUrlValidationFailed";
    /**
     * ErrorTeamMailboxNotAuthorizedOwner
     */
    ServiceError[ServiceError["ErrorTeamMailboxNotAuthorizedOwner"] = 377] = "ErrorTeamMailboxNotAuthorizedOwner";
    /**
     * ErrorTeamMailboxActiveToPendingDelete
     */
    ServiceError[ServiceError["ErrorTeamMailboxActiveToPendingDelete"] = 378] = "ErrorTeamMailboxActiveToPendingDelete";
    /**
     * ErrorTeamMailboxFailedSendingNotifications
     */
    ServiceError[ServiceError["ErrorTeamMailboxFailedSendingNotifications"] = 379] = "ErrorTeamMailboxFailedSendingNotifications";
    /**
     * ErrorTeamMailboxErrorUnknown
     */
    ServiceError[ServiceError["ErrorTeamMailboxErrorUnknown"] = 380] = "ErrorTeamMailboxErrorUnknown";
    /**
     * ErrorTimeIntervalTooBig
     */
    ServiceError[ServiceError["ErrorTimeIntervalTooBig"] = 381] = "ErrorTimeIntervalTooBig";
    /**
     * ErrorTimeoutExpired
     */
    ServiceError[ServiceError["ErrorTimeoutExpired"] = 382] = "ErrorTimeoutExpired";
    /**
     * The time zone isn't valid.
     */
    ServiceError[ServiceError["ErrorTimeZone"] = 383] = "ErrorTimeZone";
    /**
     * The specified target folder could not be found.
     */
    ServiceError[ServiceError["ErrorToFolderNotFound"] = 384] = "ErrorToFolderNotFound";
    /**
     * The requesting account does not have permission to serialize tokens.
     */
    ServiceError[ServiceError["ErrorTokenSerializationDenied"] = 385] = "ErrorTokenSerializationDenied";
    /**
     * ErrorUnableToGetUserOofSettings
     */
    ServiceError[ServiceError["ErrorUnableToGetUserOofSettings"] = 386] = "ErrorUnableToGetUserOofSettings";
    /**
     * ErrorUnableToRemoveImContactFromGroup
     */
    ServiceError[ServiceError["ErrorUnableToRemoveImContactFromGroup"] = 387] = "ErrorUnableToRemoveImContactFromGroup";
    /**
     * A dial plan could not be found.
     */
    ServiceError[ServiceError["ErrorUnifiedMessagingDialPlanNotFound"] = 388] = "ErrorUnifiedMessagingDialPlanNotFound";
    /**
     * The UnifiedMessaging request failed.
     */
    ServiceError[ServiceError["ErrorUnifiedMessagingRequestFailed"] = 389] = "ErrorUnifiedMessagingRequestFailed";
    /**
     * A connection couldn't be made to the Unified Messaging server.
     */
    ServiceError[ServiceError["ErrorUnifiedMessagingServerNotFound"] = 390] = "ErrorUnifiedMessagingServerNotFound";
    /**
     * The specified item culture is not supported on this server.
     */
    ServiceError[ServiceError["ErrorUnsupportedCulture"] = 391] = "ErrorUnsupportedCulture";
    /**
     * The MAPI property type is not supported.
     */
    ServiceError[ServiceError["ErrorUnsupportedMapiPropertyType"] = 392] = "ErrorUnsupportedMapiPropertyType";
    /**
     * MIME conversion is not supported for this item type.
     */
    ServiceError[ServiceError["ErrorUnsupportedMimeConversion"] = 393] = "ErrorUnsupportedMimeConversion";
    /**
     * The property can not be used with this type of restriction.
     */
    ServiceError[ServiceError["ErrorUnsupportedPathForQuery"] = 394] = "ErrorUnsupportedPathForQuery";
    /**
     * The property can not be used for sorting or grouping results.
     */
    ServiceError[ServiceError["ErrorUnsupportedPathForSortGroup"] = 395] = "ErrorUnsupportedPathForSortGroup";
    /**
     * PropertyDefinition is not supported in searches.
     */
    ServiceError[ServiceError["ErrorUnsupportedPropertyDefinition"] = 396] = "ErrorUnsupportedPropertyDefinition";
    /**
     * QueryFilter type is not supported.
     */
    ServiceError[ServiceError["ErrorUnsupportedQueryFilter"] = 397] = "ErrorUnsupportedQueryFilter";
    /**
     * The specified recurrence is not supported.
     */
    ServiceError[ServiceError["ErrorUnsupportedRecurrence"] = 398] = "ErrorUnsupportedRecurrence";
    /**
     * Unsupported subfilter type.
     */
    ServiceError[ServiceError["ErrorUnsupportedSubFilter"] = 399] = "ErrorUnsupportedSubFilter";
    /**
     * Unsupported type for restriction conversion.
     */
    ServiceError[ServiceError["ErrorUnsupportedTypeForConversion"] = 400] = "ErrorUnsupportedTypeForConversion";
    /**
     * Failed to update one or more delegates.
     */
    ServiceError[ServiceError["ErrorUpdateDelegatesFailed"] = 401] = "ErrorUpdateDelegatesFailed";
    /**
     * Property for update does not match property in object.
     */
    ServiceError[ServiceError["ErrorUpdatePropertyMismatch"] = 402] = "ErrorUpdatePropertyMismatch";
    /**
     * Policy does not allow granting permissions to user.
     */
    ServiceError[ServiceError["ErrorUserNotAllowedByPolicy"] = 403] = "ErrorUserNotAllowedByPolicy";
    /**
     * The user isn't enabled for Unified Messaging
     */
    ServiceError[ServiceError["ErrorUserNotUnifiedMessagingEnabled"] = 404] = "ErrorUserNotUnifiedMessagingEnabled";
    /**
     * The user doesn't have an SMTP proxy address from a federated domain.
     */
    ServiceError[ServiceError["ErrorUserWithoutFederatedProxyAddress"] = 405] = "ErrorUserWithoutFederatedProxyAddress";
    /**
     * The value is out of range.
     */
    ServiceError[ServiceError["ErrorValueOutOfRange"] = 406] = "ErrorValueOutOfRange";
    /**
     * Virus detected in the message.
     */
    ServiceError[ServiceError["ErrorVirusDetected"] = 407] = "ErrorVirusDetected";
    /**
     * The item has been deleted as a result of a virus scan.
     */
    ServiceError[ServiceError["ErrorVirusMessageDeleted"] = 408] = "ErrorVirusMessageDeleted";
    /**
     * The Voice Mail distinguished folder is not implemented.
     */
    ServiceError[ServiceError["ErrorVoiceMailNotImplemented"] = 409] = "ErrorVoiceMailNotImplemented";
    /**
     * ErrorWebRequestInInvalidState
     */
    ServiceError[ServiceError["ErrorWebRequestInInvalidState"] = 410] = "ErrorWebRequestInInvalidState";
    /**
     * ErrorWin32InteropError
     */
    ServiceError[ServiceError["ErrorWin32InteropError"] = 411] = "ErrorWin32InteropError";
    /**
     * ErrorWorkingHoursSaveFailed
     */
    ServiceError[ServiceError["ErrorWorkingHoursSaveFailed"] = 412] = "ErrorWorkingHoursSaveFailed";
    /**
     * ErrorWorkingHoursXmlMalformed
     */
    ServiceError[ServiceError["ErrorWorkingHoursXmlMalformed"] = 413] = "ErrorWorkingHoursXmlMalformed";
    /**
     * The Client Access server version doesn't match the Mailbox server version of the resource
     * that was being accessed. To determine the correct URL to use to access the resource, use
     * Autodiscover with the address of the resource.
     */
    ServiceError[ServiceError["ErrorWrongServerVersion"] = 414] = "ErrorWrongServerVersion";
    /**
     * The mailbox of the authenticating user and the mailbox of the resource being accessed
     * must have the same Mailbox server version.
     */
    ServiceError[ServiceError["ErrorWrongServerVersionDelegate"] = 415] = "ErrorWrongServerVersionDelegate";
    /**
     * The client access token request is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidClientAccessTokenRequest"] = 416] = "ErrorInvalidClientAccessTokenRequest";
    /**
     * invalid managementrole header value or usage.
     */
    ServiceError[ServiceError["ErrorInvalidManagementRoleHeader"] = 417] = "ErrorInvalidManagementRoleHeader";
    /**
     * SearchMailboxes query has too many keywords.
     */
    ServiceError[ServiceError["ErrorSearchQueryHasTooManyKeywords"] = 418] = "ErrorSearchQueryHasTooManyKeywords";
    /**
     * SearchMailboxes on too many mailboxes.
     */
    ServiceError[ServiceError["ErrorSearchTooManyMailboxes"] = 419] = "ErrorSearchTooManyMailboxes";
    /**
     * There are no retention tags.
     */
    ServiceError[ServiceError["ErrorInvalidRetentionTagNone"] = 420] = "ErrorInvalidRetentionTagNone";
    /**
     * Discovery Searches are disabled.
     */
    ServiceError[ServiceError["ErrorDiscoverySearchesDisabled"] = 421] = "ErrorDiscoverySearchesDisabled";
    /**
     * SeekToConditionPageView not supported for calendar items.
     */
    ServiceError[ServiceError["ErrorCalendarSeekToConditionNotSupported"] = 422] = "ErrorCalendarSeekToConditionNotSupported";
    /**
     * Archive mailbox search operation failed.
     */
    ServiceError[ServiceError["ErrorArchiveMailboxSearchFailed"] = 423] = "ErrorArchiveMailboxSearchFailed";
    /**
     * Get remote archive mailbox folder failed.
     */
    ServiceError[ServiceError["ErrorGetRemoteArchiveFolderFailed"] = 424] = "ErrorGetRemoteArchiveFolderFailed";
    /**
     * Find remote archive mailbox folder failed.
     */
    ServiceError[ServiceError["ErrorFindRemoteArchiveFolderFailed"] = 425] = "ErrorFindRemoteArchiveFolderFailed";
    /**
     * Get remote archive mailbox item failed.
     */
    ServiceError[ServiceError["ErrorGetRemoteArchiveItemFailed"] = 426] = "ErrorGetRemoteArchiveItemFailed";
    /**
     * Export remote archive mailbox items failed.
     */
    ServiceError[ServiceError["ErrorExportRemoteArchiveItemsFailed"] = 427] = "ErrorExportRemoteArchiveItemsFailed";
    /**
     * Invalid state definition.
     */
    ServiceError[ServiceError["ErrorClientIntentInvalidStateDefinition"] = 428] = "ErrorClientIntentInvalidStateDefinition";
    /**
     * Client intent not found.
     */
    ServiceError[ServiceError["ErrorClientIntentNotFound"] = 429] = "ErrorClientIntentNotFound";
    /**
     * The Content Indexing service is required to perform this search, but it's not enabled.
     */
    ServiceError[ServiceError["ErrorContentIndexingNotEnabled"] = 430] = "ErrorContentIndexingNotEnabled";
    /**
     * The custom prompt files you specified couldn't be removed.
     */
    ServiceError[ServiceError["ErrorDeleteUnifiedMessagingPromptFailed"] = 431] = "ErrorDeleteUnifiedMessagingPromptFailed";
    /**
     * The location service is disabled.
     */
    ServiceError[ServiceError["ErrorLocationServicesDisabled"] = 432] = "ErrorLocationServicesDisabled";
    /**
     * Invalid location service request.
     */
    ServiceError[ServiceError["ErrorLocationServicesInvalidRequest"] = 433] = "ErrorLocationServicesInvalidRequest";
    /**
     * The request for location information failed.
     */
    ServiceError[ServiceError["ErrorLocationServicesRequestFailed"] = 434] = "ErrorLocationServicesRequestFailed";
    /**
     * The request for location information timed out.
     */
    ServiceError[ServiceError["ErrorLocationServicesRequestTimedOut"] = 435] = "ErrorLocationServicesRequestTimedOut";
    /**
     * Weather service is disabled.
     */
    ServiceError[ServiceError["ErrorWeatherServiceDisabled"] = 436] = "ErrorWeatherServiceDisabled";
    /**
     * Mailbox scope not allowed without a query string.
     */
    ServiceError[ServiceError["ErrorMailboxScopeNotAllowedWithoutQueryString"] = 437] = "ErrorMailboxScopeNotAllowedWithoutQueryString";
    /**
     * No speech detected.
     */
    ServiceError[ServiceError["ErrorNoSpeechDetected"] = 438] = "ErrorNoSpeechDetected";
    /**
     * An error occurred while accessing the custom prompt publishing point.
     */
    ServiceError[ServiceError["ErrorPromptPublishingOperationFailed"] = 439] = "ErrorPromptPublishingOperationFailed";
    /**
     * Unable to discover the URL of the public folder mailbox.
     */
    ServiceError[ServiceError["ErrorPublicFolderMailboxDiscoveryFailed"] = 440] = "ErrorPublicFolderMailboxDiscoveryFailed";
    /**
     * Public folder operation failed.
     */
    ServiceError[ServiceError["ErrorPublicFolderOperationFailed"] = 441] = "ErrorPublicFolderOperationFailed";
    /**
     * The operation succeeded on the primary public folder mailbox, but failed to sync to the secondary public folder mailbox.
     */
    ServiceError[ServiceError["ErrorPublicFolderSyncException"] = 442] = "ErrorPublicFolderSyncException";
    /**
     * Discovery Searches are disabled.
     */
    ServiceError[ServiceError["ErrorRecipientNotFound"] = 443] = "ErrorRecipientNotFound";
    /**
     * Recognizer not installed.
     */
    ServiceError[ServiceError["ErrorRecognizerNotInstalled"] = 444] = "ErrorRecognizerNotInstalled";
    /**
     * Speech grammar error.
     */
    ServiceError[ServiceError["ErrorSpeechGrammarError"] = 445] = "ErrorSpeechGrammarError";
    /**
     * Too many concurrent connections opened.
     */
    ServiceError[ServiceError["ErrorTooManyObjectsOpened"] = 446] = "ErrorTooManyObjectsOpened";
    /**
     * Unified Messaging server unavailable.
     */
    ServiceError[ServiceError["ErrorUMServerUnavailable"] = 447] = "ErrorUMServerUnavailable";
    /**
     * The Unified Messaging custom prompt file you specified couldn't be found.
     */
    ServiceError[ServiceError["ErrorUnifiedMessagingPromptNotFound"] = 448] = "ErrorUnifiedMessagingPromptNotFound";
    /**
     * Report data for the UM call summary couldn't be found.
     */
    ServiceError[ServiceError["ErrorUnifiedMessagingReportDataNotFound"] = 449] = "ErrorUnifiedMessagingReportDataNotFound";
    /**
     * The requested size is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidPhotoSize"] = 450] = "ErrorInvalidPhotoSize";
    /**
     * AcceptItem action is invalid for a meeting message in group mailbox.
     */
    ServiceError[ServiceError["ErrorCalendarIsGroupMailboxForAccept"] = 451] = "ErrorCalendarIsGroupMailboxForAccept";
    /**
     * DeclineItem operation is invalid for a meeting message in group mailbox.
     */
    ServiceError[ServiceError["ErrorCalendarIsGroupMailboxForDecline"] = 452] = "ErrorCalendarIsGroupMailboxForDecline";
    /**
     * TentativelyAcceptItem action isn't valid for a meeting message in group mailbox.
     */
    ServiceError[ServiceError["ErrorCalendarIsGroupMailboxForTentative"] = 453] = "ErrorCalendarIsGroupMailboxForTentative";
    /**
     * SuppressReadReceipt action isn't valid for a meeting message in group mailbox.
     */
    ServiceError[ServiceError["ErrorCalendarIsGroupMailboxForSuppressReadReceipt"] = 454] = "ErrorCalendarIsGroupMailboxForSuppressReadReceipt";
    /**
     * The Organization is marked for removal.
     */
    ServiceError[ServiceError["ErrorOrganizationAccessBlocked"] = 455] = "ErrorOrganizationAccessBlocked";
    /**
     * User doesn't have a valid license.
     */
    ServiceError[ServiceError["ErrorInvalidLicense"] = 456] = "ErrorInvalidLicense";
    /**
     * Receive quota message per folder is exceeded.
     */
    ServiceError[ServiceError["ErrorMessagePerFolderCountReceiveQuotaExceeded"] = 457] = "ErrorMessagePerFolderCountReceiveQuotaExceeded";
    /**
     * Unified group was not found.
     */
    ServiceError[ServiceError["ErrorUnifiedGroupMailboxNotFound"] = 458] = "ErrorUnifiedGroupMailboxNotFound";
    /**
     * Invalid channel id.
     */
    ServiceError[ServiceError["ErrorInvalidChannelId"] = 459] = "ErrorInvalidChannelId";
    /**
     * Another connection is opened on the same channel.
     */
    ServiceError[ServiceError["ErrorNewChannelConnectionOpened"] = 460] = "ErrorNewChannelConnectionOpened";
    /**
     * The channel subscription cannot be found.
     */
    ServiceError[ServiceError["ErrorChannelSubscriptionNotFound"] = 461] = "ErrorChannelSubscriptionNotFound";
    /**
     * The channel contains too many subscriptions.
     */
    ServiceError[ServiceError["ErrorExceededChannelSubscriptionCount"] = 462] = "ErrorExceededChannelSubscriptionCount";
    /**
     * The channel subscription already exists.
     */
    ServiceError[ServiceError["ErrorChannelSubscriptionAlreadyExists"] = 463] = "ErrorChannelSubscriptionAlreadyExists";
    /**
     * The given channel subscription id is invalid.
     */
    ServiceError[ServiceError["ErrorInvalidChannelSubscriptionId"] = 464] = "ErrorInvalidChannelSubscriptionId";
    /* #region Error codes to map WASCL errors */
    /**
     * Error indicating that message submission blocked by WASCL for a consumer mailboxes
     */
    ServiceError[ServiceError["ErrorMessageSubmissionBlocked"] = 465] = "ErrorMessageSubmissionBlocked";
    /**
     * Error indicating that number of submitted messages exceeded the limit and message submission is blocked by WASCL
     */
    ServiceError[ServiceError["ErrorExceededMessageLimit"] = 466] = "ErrorExceededMessageLimit";
    /**
     * Error indicating that recipients number for a consumer mailbox has exceeded the limit defined by WASCL
     */
    ServiceError[ServiceError["ErrorExceededMaxRecipientLimitBlock"] = 467] = "ErrorExceededMaxRecipientLimitBlock";
    /**
     * Error indicating that access to the consumer mailbox is suspended by WASCL
     */
    ServiceError[ServiceError["ErrorAccountSuspend"] = 468] = "ErrorAccountSuspend";
    /**
     * Error indicating that recipients number for a consumer mailbox has exceeded the limit defined by WASCL
     */
    ServiceError[ServiceError["ErrorExceededMaxRecipientLimit"] = 469] = "ErrorExceededMaxRecipientLimit";
    /**
     * Error indicating that particular message cannot be sent for a consumer mailbox as it is considered as SPAM by WASCL
     */
    ServiceError[ServiceError["ErrorMessageBlocked"] = 470] = "ErrorMessageBlocked";
    /**
     * Error indicating that access to the consumer mailbox is suspended by WASCL
     */
    ServiceError[ServiceError["ErrorAccountSuspendShowTierUpgrade"] = 471] = "ErrorAccountSuspendShowTierUpgrade";
    /**
     * Error indicating that message sent from a consumer mailbox has exceeded the limit defined by WASCL
     */
    ServiceError[ServiceError["ErrorExceededMessageLimitShowTierUpgrade"] = 472] = "ErrorExceededMessageLimitShowTierUpgrade";
    /**
     * Error indicating that recipients number for a consumer mailbox has exceeded the limit defined by WASCL
     */
    ServiceError[ServiceError["ErrorExceededMaxRecipientLimitShowTierUpgrade"] = 473] = "ErrorExceededMaxRecipientLimitShowTierUpgrade";
    /* #endregion */
})(ServiceError = exports.ServiceError || (exports.ServiceError = {}));
