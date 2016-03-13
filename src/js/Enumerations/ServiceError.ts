/**
 * Defines the error codes that can be returned by the Exchange Web Services.
 */
export enum ServiceError {
    /**
     * NoError. Indicates that an error has not occurred.
     */
    NoError = 0,
    /**
     * Access is denied. Check credentials and try again.
     */
    ErrorAccessDenied,
    /**
     * The impersonation authentication header should not be included.
     */
    ErrorAccessModeSpecified,
    /**
     * Account is disabled. Contact the account administrator.
     */
    ErrorAccountDisabled,
    /**
     * Failed to add one or more delegates.
     */
    ErrorAddDelegatesFailed,
    /**
     * ErrorAddressSpaceNotFound
     */
    ErrorAddressSpaceNotFound,
    /**
     * Active Directory operation did not succeed. Try again later.
     */
    ErrorADOperation,
    /**
     * Invalid search criteria.
     */
    ErrorADSessionFilter,
    /**
     * Active Directory is unavailable. Try again later.
     */
    ErrorADUnavailable,
    /**
     * AffectedTaskOccurrences attribute is required for Task items.
     */
    ErrorAffectedTaskOccurrencesRequired,
    /**
     * The conversation action alwayscategorize or alwaysmove or alwaysdelete has failed.
     */
    ErrorApplyConversationActionFailed,
    /**
     * Archive mailbox not enabled
     */
    ErrorArchiveMailboxNotEnabled,
    /**
     * Unable to create the folder in archive mailbox to which the items will be archived
     */
    ErrorArchiveFolderPathCreation,
    /**
     * Unable to discover archive mailbox
     */
    ErrorArchiveMailboxServiceDiscoveryFailed,
    /**
     * The item has attachment at more than the maximum supported nest level.
     */
    ErrorAttachmentNestLevelLimitExceeded,
    /**
     * The file attachment exceeds the maximum supported size.
     */
    ErrorAttachmentSizeLimitExceeded,
    /**
     * ErrorAutoDiscoverFailed
     */
    ErrorAutoDiscoverFailed,
    /**
     * ErrorAvailabilityConfigNotFound
     */
    ErrorAvailabilityConfigNotFound,
    /**
     * Item was not processed as a result of a previous error.
     */
    ErrorBatchProcessingStopped,
    /**
     * Can not move or copy a calendar occurrence.
     */
    ErrorCalendarCannotMoveOrCopyOccurrence,
    /**
     * Cannot update calendar item that has already been deleted.
     */
    ErrorCalendarCannotUpdateDeletedItem,
    /**
     * The Id specified does not represent an occurrence.
     */
    ErrorCalendarCannotUseIdForOccurrenceId,
    /**
     * The specified Id does not represent a recurring master item.
     */
    ErrorCalendarCannotUseIdForRecurringMasterId,
    /**
     * Calendar item duration is too long.
     */
    ErrorCalendarDurationIsTooLong,
    /**
     * EndDate is earlier than StartDate
     */
    ErrorCalendarEndDateIsEarlierThanStartDate,
    /**
     * Cannot request CalendarView for the folder.
     */
    ErrorCalendarFolderIsInvalidForCalendarView,
    /**
     * Attribute has an invalid value.
     */
    ErrorCalendarInvalidAttributeValue,
    /**
     * The value of the DaysOfWeek property is not valid for time change pattern of time zone.
     */
    ErrorCalendarInvalidDayForTimeChangePattern,
    /**
     * The value of the DaysOfWeek property is invalid for a weekly recurrence.
     */
    ErrorCalendarInvalidDayForWeeklyRecurrence,
    /**
     * The property has invalid state.
     */
    ErrorCalendarInvalidPropertyState,
    /**
     * The property has an invalid value.
     */
    ErrorCalendarInvalidPropertyValue,
    /**
     * The recurrence is invalid.
     */
    ErrorCalendarInvalidRecurrence,
    /**
     * TimeZone is invalid.
     */
    ErrorCalendarInvalidTimeZone,
    /**
     * A meeting that's been canceled can't be accepted.
     */
    ErrorCalendarIsCancelledForAccept,
    /**
     * A canceled meeting can't be declined.
     */
    ErrorCalendarIsCancelledForDecline,
    /**
     * A canceled meeting can't be removed.
     */
    ErrorCalendarIsCancelledForRemove,
    /**
     * A canceled meeting can't be accepted tentatively.
     */
    ErrorCalendarIsCancelledForTentative,
    /**
     * AcceptItem action is invalid for a delegated meeting message.
     */
    ErrorCalendarIsDelegatedForAccept,
    /**
     * DeclineItem operation is invalid for a delegated meeting message.
     */
    ErrorCalendarIsDelegatedForDecline,
    /**
     * RemoveItem action is invalid for a delegated meeting message.
     */
    ErrorCalendarIsDelegatedForRemove,
    /**
     * The TentativelyAcceptItem action isn't valid for a delegated meeting message.
     */
    ErrorCalendarIsDelegatedForTentative,
    /**
     * User must be an organizer for CancelCalendarItem action.
     */
    ErrorCalendarIsNotOrganizer,
    /**
     * The user is the organizer of this meeting, and cannot, therefore, accept it.
     */
    ErrorCalendarIsOrganizerForAccept,
    /**
     * The user is the organizer of this meeting, and cannot, therefore, decline it.
     */
    ErrorCalendarIsOrganizerForDecline,
    /**
     * The user is the organizer of this meeting, and cannot, therefore, remove it.
     */
    ErrorCalendarIsOrganizerForRemove,
    /**
     * The user is the organizer of this meeting, and therefore can't tentatively accept it.
     */
    ErrorCalendarIsOrganizerForTentative,
    /**
     * The meeting request is out of date. The calendar couldn't be updated.
     */
    ErrorCalendarMeetingRequestIsOutOfDate,
    /**
     * Occurrence index is out of recurrence range.
     */
    ErrorCalendarOccurrenceIndexIsOutOfRecurrenceRange,
    /**
     * Occurrence with this index was previously deleted from the recurrence.
     */
    ErrorCalendarOccurrenceIsDeletedFromRecurrence,
    /**
     * The calendar property falls out of valid range.
     */
    ErrorCalendarOutOfRange,
    /**
     * The specified view range exceeds the maximum range of two years.
     */
    ErrorCalendarViewRangeTooBig,
    /**
     * Failed to get valid Active Directory information for the calling account. Confirm that it
     * is a valid Active Directory account.
     */
    ErrorCallerIsInvalidADAccount,
    /**
     * Cannot archive items in Calendar, contact to task folders
     */
    ErrorCannotArchiveCalendarContactTaskFolderException,
    /**
     * Cannot archive items in archive mailboxes
     */
    ErrorCannotArchiveItemsInArchiveMailbox,
    /**
     * Cannot archive items in public folders
     */
    ErrorCannotArchiveItemsInPublicFolders,
    /**
     * Cannot create a calendar item in a non-calendar folder.
     */
    ErrorCannotCreateCalendarItemInNonCalendarFolder,
    /**
     * Cannot create a contact in a non-contact folder.
     */
    ErrorCannotCreateContactInNonContactFolder,
    /**
     * Cannot create a post item in a folder that is not a mail folder.
     */
    ErrorCannotCreatePostItemInNonMailFolder,
    /**
     * Cannot create a task in a non-task Folder.
     */
    ErrorCannotCreateTaskInNonTaskFolder,
    /**
     * Object cannot be deleted.
     */
    ErrorCannotDeleteObject,
    /**
     * Deleting a task occurrence is not permitted on non-recurring tasks, on the last
     * occurrence of a recurring task or on a regenerating task.
     */
    ErrorCannotDeleteTaskOccurrence,
    /**
     * Mandatory extensions cannot be disabled by end users
     */
    ErrorCannotDisableMandatoryExtension,
    /**
     * Folder cannot be emptied.
     */
    ErrorCannotEmptyFolder,
    /**
     * Cannot get external ECP URL. This might happen if external ECP URL isn't configured
     */
    ErrorCannotGetExternalEcpUrl,
    /**
     * Unable to read the folder path for the source folder while archiving items
     */
    ErrorCannotGetSourceFolderPath,
    /**
     * The attachment could not be opened.
     */
    ErrorCannotOpenFileAttachment,
    /**
     * Expected a PermissionSet but received a CalendarPermissionSet.
     */
    ErrorCannotSetCalendarPermissionOnNonCalendarFolder,
    /**
     * Expected a CalendarPermissionSet but received a PermissionSet.
     */
    ErrorCannotSetNonCalendarPermissionOnCalendarFolder,
    /**
     * Cannot set UnknownEntries on a PermissionSet or CalendarPermissionSet.
     */
    ErrorCannotSetPermissionUnknownEntries,
    /**
     * Cannot specify search folders as source folders while archiving items
     */
    ErrorCannotSpecifySearchFolderAsSourceFolder,
    /**
     * Expected an item Id but received a folder Id.
     */
    ErrorCannotUseFolderIdForItemId,
    /**
     * Expected a folder Id but received an item Id.
     */
    ErrorCannotUseItemIdForFolderId,
    /**
     * ChangeKey is required if overriding automatic conflict resolution.
     */
    ErrorChangeKeyRequired,
    /**
     * ChangeKey is required for this operation.
     */
    ErrorChangeKeyRequiredForWriteOperations,
    /**
     * ErrorClientDisconnected
     */
    ErrorClientDisconnected,
    /**
     * Connection did not succeed. Try again later.
     */
    ErrorConnectionFailed,
    /**
     * The Contains filter can only be used for string properties.
     */
    ErrorContainsFilterWrongType,
    /**
     * Content conversion failed.
     */
    ErrorContentConversionFailed,
    /**
     * Data is corrupt.
     */
    ErrorCorruptData,
    /**
     * Unable to create item. The user account does not have the right to create items.
     */
    ErrorCreateItemAccessDenied,
    /**
     * Failed to create one or more of the specified managed folders.
     */
    ErrorCreateManagedFolderPartialCompletion,
    /**
     * Unable to create subfolder. The user account does not have the right to create
     * subfolders.
     */
    ErrorCreateSubfolderAccessDenied,
    /**
     * Move and Copy operations across mailbox boundaries are not permitted.
     */
    ErrorCrossMailboxMoveCopy,
    /**
     * This request isn't allowed because the Client Access server that's servicing the request
     * is in a different site than the requested resource. Use Autodiscover to find the correct
     * URL for accessing the specified resource.
     */
    ErrorCrossSiteRequest,
    /**
     * Property exceeds the maximum supported size.
     */
    ErrorDataSizeLimitExceeded,
    /**
     * Invalid data source operation.
     */
    ErrorDataSourceOperation,
    /**
     * The user is already a delegate for the mailbox.
     */
    ErrorDelegateAlreadyExists,
    /**
     * This is an invalid operation. Cannot add owner as delegate.
     */
    ErrorDelegateCannotAddOwner,
    /**
     * Delegate is not configured properly.
     */
    ErrorDelegateMissingConfiguration,
    /**
     * The delegate does not map to a user in the Active Directory.
     */
    ErrorDelegateNoUser,
    /**
     * Cannot add the delegate user. Failed to validate the changes.
     */
    ErrorDelegateValidationFailed,
    /**
     * Distinguished folders cannot be deleted.
     */
    ErrorDeleteDistinguishedFolder,
    /**
     * The deletion failed.
     */
    ErrorDeleteItemsFailed,
    /**
     * DistinguishedUser should not be specified for a Delegate User.
     */
    ErrorDistinguishedUserNotSupported,
    /**
     * The group member doesn't exist.
     */
    ErrorDistributionListMemberNotExist,
    /**
     * The specified list of managed folder names contains duplicate entries.
     */
    ErrorDuplicateInputFolderNames,
    /**
     * A duplicate exchange legacy DN.
     */
    ErrorDuplicateLegacyDistinguishedName,
    /**
     * A duplicate SOAP header was received.
     */
    ErrorDuplicateSOAPHeader,
    /**
     * The specified permission set contains duplicate UserIds.
     */
    ErrorDuplicateUserIdsSpecified,
    /**
     * The email address associated with a folder Id does not match the mailbox you are
     * operating on.
     */
    ErrorEmailAddressMismatch,
    /**
     * The watermark used for creating this subscription was not found.
     */
    ErrorEventNotFound,
    /**
     * You have exceeded the available concurrent connections for your account.  Try again once
     * your other requests have completed.
     */
    ErrorExceededConnectionCount,
    /**
     * You have exceeded the maximum number of objects that can be returned for the find
     * operation. Use paging to reduce the result size and try your request again.
     */
    ErrorExceededFindCountLimit,
    /**
     * You have exceeded the available subscriptions for your account.  Remove unnecessary
     * subscriptions and try your request again.
     */
    ErrorExceededSubscriptionCount,
    /**
     * Subscription information is not available. Subscription is expired.
     */
    ErrorExpiredSubscription,
    /**
     * Extension with id specified was not found
     */
    ErrorExtensionNotFound,
    /**
     * The folder is corrupt.
     */
    ErrorFolderCorrupt,
    /**
     * A folder with the specified name already exists.
     */
    ErrorFolderExists,
    /**
     * The specified folder could not be found in the store.
     */
    ErrorFolderNotFound,
    /**
     * ErrorFolderPropertRequestFailed
     */
    ErrorFolderPropertRequestFailed,
    /**
     * The folder save operation did not succeed.
     */
    ErrorFolderSave,
    /**
     * The save operation failed or partially succeeded.
     */
    ErrorFolderSaveFailed,
    /**
     * The folder save operation failed due to invalid property values.
     */
    ErrorFolderSavePropertyError,
    /**
     * ErrorFreeBusyDLLimitReached
     */
    ErrorFreeBusyDLLimitReached,
    /**
     * ErrorFreeBusyGenerationFailed
     */
    ErrorFreeBusyGenerationFailed,
    /**
     * ErrorGetServerSecurityDescriptorFailed
     */
    ErrorGetServerSecurityDescriptorFailed,
    /**
     * ErrorImContactLimitReached
     */
    ErrorImContactLimitReached,
    /**
     * ErrorImGroupDisplayNameAlreadyExists
     */
    ErrorImGroupDisplayNameAlreadyExists,
    /**
     * ErrorImGroupLimitReached
     */
    ErrorImGroupLimitReached,
    /**
     * The account does not have permission to impersonate the requested user.
     */
    ErrorImpersonateUserDenied,
    /**
     * ErrorImpersonationDenied
     */
    ErrorImpersonationDenied,
    /**
     * Impersonation failed.
     */
    ErrorImpersonationFailed,
    /**
     * ErrorInboxRulesValidationError
     */
    ErrorInboxRulesValidationError,
    /**
     * The request is valid but does not specify the correct server version in the
     * RequestServerVersion SOAP header.  Ensure that the RequestServerVersion SOAP header is
     * set with the correct RequestServerVersionValue.
     */
    ErrorIncorrectSchemaVersion,
    /**
     * An object within a change description must contain one and only one property to modify.
     */
    ErrorIncorrectUpdatePropertyCount,
    /**
     * ErrorIndividualMailboxLimitReached
     */
    ErrorIndividualMailboxLimitReached,
    /**
     * Resources are unavailable. Try again later.
     */
    ErrorInsufficientResources,
    /**
     * An internal server error occurred. The operation failed.
     */
    ErrorInternalServerError,
    /**
     * An internal server error occurred. Try again later.
     */
    ErrorInternalServerTransientError,
    /**
     * ErrorInvalidAccessLevel
     */
    ErrorInvalidAccessLevel,
    /**
     * ErrorInvalidArgument
     */
    ErrorInvalidArgument,
    /**
     * The specified attachment Id is invalid.
     */
    ErrorInvalidAttachmentId,
    /**
     * Attachment subfilters must have a single TextFilter therein.
     */
    ErrorInvalidAttachmentSubfilter,
    /**
     * Attachment subfilters must have a single TextFilter on the display name only.
     */
    ErrorInvalidAttachmentSubfilterTextFilter,
    /**
     * ErrorInvalidAuthorizationContext
     */
    ErrorInvalidAuthorizationContext,
    /**
     * The change key is invalid.
     */
    ErrorInvalidChangeKey,
    /**
     * ErrorInvalidClientSecurityContext
     */
    ErrorInvalidClientSecurityContext,
    /**
     * CompleteDate cannot be set to a date in the future.
     */
    ErrorInvalidCompleteDate,
    /**
     * The e-mail address that was supplied isn't valid.
     */
    ErrorInvalidContactEmailAddress,
    /**
     * The e-mail index supplied isn't valid.
     */
    ErrorInvalidContactEmailIndex,
    /**
     * ErrorInvalidCrossForestCredentials
     */
    ErrorInvalidCrossForestCredentials,
    /**
     * Invalid Delegate Folder Permission.
     */
    ErrorInvalidDelegatePermission,
    /**
     * One or more UserId parameters are invalid. Make sure that the PrimarySmtpAddress, Sid and
     * DisplayName properties refer to the same user when specified.
     */
    ErrorInvalidDelegateUserId,
    /**
     * An ExchangeImpersonation SOAP header must contain a user principal name, user SID, or
     * primary SMTP address.
     */
    ErrorInvalidExchangeImpersonationHeaderData,
    /**
     * Second operand in Excludes expression must be uint compatible.
     */
    ErrorInvalidExcludesRestriction,
    /**
     * FieldURI can only be used in Contains expressions.
     */
    ErrorInvalidExpressionTypeForSubFilter,
    /**
     * The extended property attribute combination is invalid.
     */
    ErrorInvalidExtendedProperty,
    /**
     * The extended property value is inconsistent with its type.
     */
    ErrorInvalidExtendedPropertyValue,
    /**
     * The original sender of the message (initiator field in the sharing metadata) is not
     * valid.
     */
    ErrorInvalidExternalSharingInitiator,
    /**
     * The sharing message is not intended for this caller.
     */
    ErrorInvalidExternalSharingSubscriber,
    /**
     * The organization is either not federated, or it's configured incorrectly.
     */
    ErrorInvalidFederatedOrganizationId,
    /**
     * Folder Id is invalid.
     */
    ErrorInvalidFolderId,
    /**
     * ErrorInvalidFolderTypeForOperation
     */
    ErrorInvalidFolderTypeForOperation,
    /**
     * Invalid fractional paging offset values.
     */
    ErrorInvalidFractionalPagingParameters,
    /**
     * ErrorInvalidFreeBusyViewType
     */
    ErrorInvalidFreeBusyViewType,
    /**
     * Either DataType or SharedFolderId must be specified, but not both.
     */
    ErrorInvalidGetSharingFolderRequest,
    /**
     * The Id is invalid.
     */
    ErrorInvalidId,
    /**
     * The Im Contact id was invalid.
     */
    ErrorInvalidImContactId,
    /**
     * The Im Distribution Group Smtp Address was invalid.
     */
    ErrorInvalidImDistributionGroupSmtpAddress,
    /**
     * The Im Contact id was invalid.
     */
    ErrorInvalidImGroupId,
    /**
     * Id must be non-empty.
     */
    ErrorInvalidIdEmpty,
    /**
     * Id is malformed.
     */
    ErrorInvalidIdMalformed,
    /**
     * The EWS Id is in EwsLegacyId format which is not supported by the Exchange version
     * specified by your request. Please use the ConvertId method to convert from EwsLegacyId 
     * to EwsId format.
     */
    ErrorInvalidIdMalformedEwsLegacyIdFormat,
    /**
     * Moniker exceeded allowable length.
     */
    ErrorInvalidIdMonikerTooLong,
    /**
     * The Id does not represent an item attachment.
     */
    ErrorInvalidIdNotAnItemAttachmentId,
    /**
     * ResolveNames returned an invalid Id.
     */
    ErrorInvalidIdReturnedByResolveNames,
    /**
     * Id exceeded allowable length.
     */
    ErrorInvalidIdStoreObjectIdTooLong,
    /**
     * Too many attachment levels.
     */
    ErrorInvalidIdTooManyAttachmentLevels,
    /**
     * The Id Xml is invalid.
     */
    ErrorInvalidIdXml,
    /**
     * The specified indexed paging values are invalid.
     */
    ErrorInvalidIndexedPagingParameters,
    /**
     * Only one child node is allowed when setting an Internet Message Header.
     */
    ErrorInvalidInternetHeaderChildNodes,
    /**
     * Item type is invalid for AcceptItem action.
     */
    ErrorInvalidItemForOperationAcceptItem,
    /**
     * Item type is invalid for ArchiveItem action.
     */
    ErrorInvalidItemForOperationArchiveItem,
    /**
     * Item type is invalid for CancelCalendarItem action.
     */
    ErrorInvalidItemForOperationCancelItem,
    /**
     * Item type is invalid for CreateItem operation.
     */
    ErrorInvalidItemForOperationCreateItem,
    /**
     * Item type is invalid for CreateItemAttachment operation.
     */
    ErrorInvalidItemForOperationCreateItemAttachment,
    /**
     * Item type is invalid for DeclineItem operation.
     */
    ErrorInvalidItemForOperationDeclineItem,
    /**
     * ExpandDL operation does not support this item type.
     */
    ErrorInvalidItemForOperationExpandDL,
    /**
     * Item type is invalid for RemoveItem operation.
     */
    ErrorInvalidItemForOperationRemoveItem,
    /**
     * Item type is invalid for SendItem operation.
     */
    ErrorInvalidItemForOperationSendItem,
    /**
     * The item of this type is invalid for TentativelyAcceptItem action.
     */
    ErrorInvalidItemForOperationTentative,
    /**
     * The logon type isn't valid.
     */
    ErrorInvalidLogonType,
    /**
     * Mailbox is invalid. Verify the specified Mailbox property.
     */
    ErrorInvalidMailbox,
    /**
     * The Managed Folder property is corrupt or otherwise invalid.
     */
    ErrorInvalidManagedFolderProperty,
    /**
     * The managed folder has an invalid quota.
     */
    ErrorInvalidManagedFolderQuota,
    /**
     * The managed folder has an invalid storage limit value.
     */
    ErrorInvalidManagedFolderSize,
    /**
     * ErrorInvalidMergedFreeBusyInterval
     */
    ErrorInvalidMergedFreeBusyInterval,
    /**
     * The specified value is not a valid name for name resolution.
     */
    ErrorInvalidNameForNameResolution,
    /**
     * ErrorInvalidNetworkServiceContext
     */
    ErrorInvalidNetworkServiceContext,
    /**
     * ErrorInvalidOofParameter
     */
    ErrorInvalidOofParameter,
    /**
     * ErrorInvalidOperation
     */
    ErrorInvalidOperation,
    /**
     * ErrorInvalidOrganizationRelationshipForFreeBusy
     */
    ErrorInvalidOrganizationRelationshipForFreeBusy,
    /**
     * MaxEntriesReturned must be greater than zero.
     */
    ErrorInvalidPagingMaxRows,
    /**
     * Cannot create a subfolder within a SearchFolder.
     */
    ErrorInvalidParentFolder,
    /**
     * PercentComplete must be an integer between 0 and 100.
     */
    ErrorInvalidPercentCompleteValue,
    /**
     * The permission settings were not valid.
     */
    ErrorInvalidPermissionSettings,
    /**
     * The phone call ID isn't valid.
     */
    ErrorInvalidPhoneCallId,
    /**
     * The phone number isn't valid.
     */
    ErrorInvalidPhoneNumber,
    /**
     * The append action is not supported for this property.
     */
    ErrorInvalidPropertyAppend,
    /**
     * The delete action is not supported for this property.
     */
    ErrorInvalidPropertyDelete,
    /**
     * Property cannot be used in Exists expression.  Use IsEqualTo instead.
     */
    ErrorInvalidPropertyForExists,
    /**
     * Property is not valid for this operation.
     */
    ErrorInvalidPropertyForOperation,
    /**
     * Property is not valid for this object type.
     */
    ErrorInvalidPropertyRequest,
    /**
     * Set action is invalid for property.
     */
    ErrorInvalidPropertySet,
    /**
     * Update operation is invalid for property of a sent message.
     */
    ErrorInvalidPropertyUpdateSentMessage,
    /**
     * The proxy security context is invalid.
     */
    ErrorInvalidProxySecurityContext,
    /**
     * SubscriptionId is invalid. Subscription is not a pull subscription.
     */
    ErrorInvalidPullSubscriptionId,
    /**
     * URL specified for push subscription is invalid.
     */
    ErrorInvalidPushSubscriptionUrl,
    /**
     * One or more recipients are invalid.
     */
    ErrorInvalidRecipients,
    /**
     * Recipient subfilters are only supported when there are two expressions within a single
     * AND filter.
     */
    ErrorInvalidRecipientSubfilter,
    /**
     * Recipient subfilter must have a comparison filter that tests equality to recipient type
     * or attendee type.
     */
    ErrorInvalidRecipientSubfilterComparison,
    /**
     * Recipient subfilters must have a text filter and a comparison filter in that order.
     */
    ErrorInvalidRecipientSubfilterOrder,
    /**
     * Recipient subfilter must have a TextFilter on the SMTP address only.
     */
    ErrorInvalidRecipientSubfilterTextFilter,
    /**
     * The reference item does not support the requested operation.
     */
    ErrorInvalidReferenceItem,
    /**
     * The request is invalid.
     */
    ErrorInvalidRequest,
    /**
     * The restriction is invalid.
     */
    ErrorInvalidRestriction,
    /**
     * ErrorInvalidRetentionIdTagTypeMismatch.
     */
    ErrorInvalidRetentionTagTypeMismatch,
    /**
     * ErrorInvalidRetentionTagInvisible.
     */
    ErrorInvalidRetentionTagInvisible,
    /**
     * ErrorInvalidRetentionTagInheritance.
     */
    ErrorInvalidRetentionTagInheritance,
    /**
     * ErrorInvalidRetentionTagIdGuid.
     */
    ErrorInvalidRetentionTagIdGuid,
    /**
     * The routing type format is invalid.
     */
    ErrorInvalidRoutingType,
    /**
     * ErrorInvalidScheduledOofDuration
     */
    ErrorInvalidScheduledOofDuration,
    /**
     * The mailbox that was requested doesn't support the specified RequestServerVersion.
     */
    ErrorInvalidSchemaVersionForMailboxVersion,
    /**
     * ErrorInvalidSecurityDescriptor
     */
    ErrorInvalidSecurityDescriptor,
    /**
     * Invalid combination of SaveItemToFolder attribute and SavedItemFolderId element.
     */
    ErrorInvalidSendItemSaveSettings,
    /**
     * Invalid serialized access token.
     */
    ErrorInvalidSerializedAccessToken,
    /**
     * The specified server version is invalid.
     */
    ErrorInvalidServerVersion,
    /**
     * The sharing message metadata is not valid.
     */
    ErrorInvalidSharingData,
    /**
     * The sharing message is not valid.
     */
    ErrorInvalidSharingMessage,
    /**
     * A SID with an invalid format was encountered.
     */
    ErrorInvalidSid,
    /**
     * The SIP address isn't valid.
     */
    ErrorInvalidSIPUri,
    /**
     * The SMTP address format is invalid.
     */
    ErrorInvalidSmtpAddress,
    /**
     * Invalid subFilterType.
     */
    ErrorInvalidSubfilterType,
    /**
     * SubFilterType is not attendee type.
     */
    ErrorInvalidSubfilterTypeNotAttendeeType,
    /**
     * SubFilterType is not recipient type.
     */
    ErrorInvalidSubfilterTypeNotRecipientType,
    /**
     * Subscription is invalid.
     */
    ErrorInvalidSubscription,
    /**
     * A subscription can only be established on a single public folder or on folders from a
     * single mailbox.
     */
    ErrorInvalidSubscriptionRequest,
    /**
     * Synchronization state data is corrupt or otherwise invalid.
     */
    ErrorInvalidSyncStateData,
    /**
     * ErrorInvalidTimeInterval
     */
    ErrorInvalidTimeInterval,
    /**
     * A UserId was not valid.
     */
    ErrorInvalidUserInfo,
    /**
     * ErrorInvalidUserOofSettings
     */
    ErrorInvalidUserOofSettings,
    /**
     * The impersonation principal name is invalid.
     */
    ErrorInvalidUserPrincipalName,
    /**
     * The user SID is invalid or does not map to a user in the Active Directory.
     */
    ErrorInvalidUserSid,
    /**
     * ErrorInvalidUserSidMissingUPN
     */
    ErrorInvalidUserSidMissingUPN,
    /**
     * The specified value is invalid for property.
     */
    ErrorInvalidValueForProperty,
    /**
     * The watermark is invalid.
     */
    ErrorInvalidWatermark,
    /**
     * A valid IP gateway couldn't be found.
     */
    ErrorIPGatewayNotFound,
    /**
     * The send or update operation could not be performed because the change key passed in the
     * request does not match the current change key for the item.
     */
    ErrorIrresolvableConflict,
    /**
     * The item is corrupt.
     */
    ErrorItemCorrupt,
    /**
     * The specified object was not found in the store.
     */
    ErrorItemNotFound,
    /**
     * One or more of the properties requested for this item could not be retrieved.
     */
    ErrorItemPropertyRequestFailed,
    /**
     * The item save operation did not succeed.
     */
    ErrorItemSave,
    /**
     * Item save operation did not succeed.
     */
    ErrorItemSavePropertyError,
    /**
     * ErrorLegacyMailboxFreeBusyViewTypeNotMerged
     */
    ErrorLegacyMailboxFreeBusyViewTypeNotMerged,
    /**
     * ErrorLocalServerObjectNotFound
     */
    ErrorLocalServerObjectNotFound,
    /**
     * ErrorLogonAsNetworkServiceFailed
     */
    ErrorLogonAsNetworkServiceFailed,
    /**
     * Unable to access an account or mailbox.
     */
    ErrorMailboxConfiguration,
    /**
     * ErrorMailboxDataArrayEmpty
     */
    ErrorMailboxDataArrayEmpty,
    /**
     * ErrorMailboxDataArrayTooBig
     */
    ErrorMailboxDataArrayTooBig,
    /**
     * ErrorMailboxFailover
     */
    ErrorMailboxFailover,
    /**
     * The specific mailbox hold is not found.
     */
    ErrorMailboxHoldNotFound,
    /**
     * ErrorMailboxLogonFailed
     */
    ErrorMailboxLogonFailed,
    /**
     * Mailbox move in progress. Try again later.
     */
    ErrorMailboxMoveInProgress,
    /**
     * The mailbox database is temporarily unavailable.
     */
    ErrorMailboxStoreUnavailable,
    /**
     * ErrorMailRecipientNotFound
     */
    ErrorMailRecipientNotFound,
    /**
     * MailTips aren't available for your organization.
     */
    ErrorMailTipsDisabled,
    /**
     * The specified Managed Folder already exists in the mailbox.
     */
    ErrorManagedFolderAlreadyExists,
    /**
     * Unable to find the specified managed folder in the Active Directory.
     */
    ErrorManagedFolderNotFound,
    /**
     * Failed to create or bind to the folder: Managed Folders
     */
    ErrorManagedFoldersRootFailure,
    /**
     * ErrorMeetingSuggestionGenerationFailed
     */
    ErrorMeetingSuggestionGenerationFailed,
    /**
     * MessageDisposition attribute is required.
     */
    ErrorMessageDispositionRequired,
    /**
     * The message exceeds the maximum supported size.
     */
    ErrorMessageSizeExceeded,
    /**
     * The domain specified in the tracking request doesn't exist.
     */
    ErrorMessageTrackingNoSuchDomain,
    /**
     * The log search service can't track this message.
     */
    ErrorMessageTrackingPermanentError,
    /**
     * The log search service isn't currently available. Please try again later.
     */
    ErrorMessageTrackingTransientError,
    /**
     * MIME content conversion failed.
     */
    ErrorMimeContentConversionFailed,
    /**
     * Invalid MIME content.
     */
    ErrorMimeContentInvalid,
    /**
     * Invalid base64 string for MIME content.
     */
    ErrorMimeContentInvalidBase64String,
    /**
     * The subscription has missed events, but will continue service on this connection.
     */
    ErrorMissedNotificationEvents,
    /**
     * ErrorMissingArgument
     */
    ErrorMissingArgument,
    /**
     * When making a request as an account that does not have a mailbox, you must specify the
     * mailbox primary SMTP address for any distinguished folder Ids.
     */
    ErrorMissingEmailAddress,
    /**
     * When making a request with an account that does not have a mailbox, you must specify the
     * primary SMTP address for an existing mailbox.
     */
    ErrorMissingEmailAddressForManagedFolder,
    /**
     * EmailAddress or ItemId must be included in the request.
     */
    ErrorMissingInformationEmailAddress,
    /**
     * ReferenceItemId must be included in the request.
     */
    ErrorMissingInformationReferenceItemId,
    /**
     * SharingFolderId must be included in the request.
     */
    ErrorMissingInformationSharingFolderId,
    /**
     * An item must be specified when creating an item attachment.
     */
    ErrorMissingItemForCreateItemAttachment,
    /**
     * The managed folder Id is missing.
     */
    ErrorMissingManagedFolderId,
    /**
     * A message needs to have at least one recipient.
     */
    ErrorMissingRecipients,
    /**
     * Missing information for delegate user. You must either specify a valid SMTP address or
     * SID.
     */
    ErrorMissingUserIdInformation,
    /**
     * Only one access mode header may be specified.
     */
    ErrorMoreThanOneAccessModeSpecified,
    /**
     * The move or copy operation failed.
     */
    ErrorMoveCopyFailed,
    /**
     * Cannot move distinguished folder.
     */
    ErrorMoveDistinguishedFolder,
    /**
     * ErrorMultiLegacyMailboxAccess
     */
    ErrorMultiLegacyMailboxAccess,
    /**
     * Multiple results were found.
     */
    ErrorNameResolutionMultipleResults,
    /**
     * User must have a mailbox for name resolution operations.
     */
    ErrorNameResolutionNoMailbox,
    /**
     * No results were found.
     */
    ErrorNameResolutionNoResults,
    /**
     * Another connection was opened against this subscription.
     */
    ErrorNewEventStreamConnectionOpened,
    /**
     * Exchange Web Services are not currently available for this request because there are no
     * available Client Access Services Servers in the target AD Site.
     */
    ErrorNoApplicableProxyCASServersAvailable,
    /**
     * ErrorNoCalendar
     */
    ErrorNoCalendar,
    /**
     * Exchange Web Services aren't available for this request because there is no Client Access
     * server with the necessary configuration in the Active Directory site where the mailbox is
     * stored. If the problem continues, click Help.
     */
    ErrorNoDestinationCASDueToKerberosRequirements,
    /**
     * Exchange Web Services aren't currently available for this request because an SSL
     * connection couldn't be established to the Client Access server that should be used for
     * mailbox access. If the problem continues, click Help.
     */
    ErrorNoDestinationCASDueToSSLRequirements,
    /**
     * Exchange Web Services aren't currently available for this request because the Client
     * Access server used for proxying has an older version of Exchange installed than the
     * Client Access server in the mailbox Active Directory site.
     */
    ErrorNoDestinationCASDueToVersionMismatch,
    /**
     * You cannot specify the FolderClass when creating a non-generic folder.
     */
    ErrorNoFolderClassOverride,
    /**
     * ErrorNoFreeBusyAccess
     */
    ErrorNoFreeBusyAccess,
    /**
     * Mailbox does not exist.
     */
    ErrorNonExistentMailbox,
    /**
     * The primary SMTP address must be specified when referencing a mailbox.
     */
    ErrorNonPrimarySmtpAddress,
    /**
     * Custom properties cannot be specified using property tags.  The GUID and Id/Name
     * combination must be used instead.
     */
    ErrorNoPropertyTagForCustomProperties,
    /**
     * ErrorNoPublicFolderReplicaAvailable
     */
    ErrorNoPublicFolderReplicaAvailable,
    /**
     * There are no public folder servers available.
     */
    ErrorNoPublicFolderServerAvailable,
    /**
     * Exchange Web Services are not currently available for this request because none of the
     * Client Access Servers in the destination site could process the request.
     */
    ErrorNoRespondingCASInDestinationSite,
    /**
     * Policy does not allow granting of permissions to external users.
     */
    ErrorNotAllowedExternalSharingByPolicy,
    /**
     * The user is not a delegate for the mailbox.
     */
    ErrorNotDelegate,
    /**
     * There was not enough memory to complete the request.
     */
    ErrorNotEnoughMemory,
    /**
     * The sharing message is not supported.
     */
    ErrorNotSupportedSharingMessage,
    /**
     * Operation would change object type, which is not permitted.
     */
    ErrorObjectTypeChanged,
    /**
     * Modified occurrence is crossing or overlapping adjacent occurrence.
     */
    ErrorOccurrenceCrossingBoundary,
    /**
     * One occurrence of the recurring calendar item overlaps with another occurrence of the
     * same calendar item.
     */
    ErrorOccurrenceTimeSpanTooBig,
    /**
     * Operation not allowed with public folder root.
     */
    ErrorOperationNotAllowedWithPublicFolderRoot,
    /**
     * Organization is not federated.
     */
    ErrorOrganizationNotFederated,
    /**
     * ErrorOutlookRuleBlobExists
     */
    ErrorOutlookRuleBlobExists,
    /**
     * You must specify the parent folder Id for this operation.
     */
    ErrorParentFolderIdRequired,
    /**
     * The specified parent folder could not be found.
     */
    ErrorParentFolderNotFound,
    /**
     * Password change is required.
     */
    ErrorPasswordChangeRequired,
    /**
     * Password has expired. Change password.
     */
    ErrorPasswordExpired,
    /**
     * Policy does not allow granting permission level to user.
     */
    ErrorPermissionNotAllowedByPolicy,
    /**
     * Dialing restrictions are preventing the phone number that was entered from being dialed.
     */
    ErrorPhoneNumberNotDialable,
    /**
     * Property update did not succeed.
     */
    ErrorPropertyUpdate,
    /**
     * At least one property failed validation.
     */
    ErrorPropertyValidationFailure,
    /**
     * Subscription related request failed because EWS could not contact the appropriate CAS
     * server for this request.  If this problem persists, recreate the subscription.
     */
    ErrorProxiedSubscriptionCallFailure,
    /**
     * Request failed because EWS could not contact the appropriate CAS server for this request.
     */
    ErrorProxyCallFailed,
    /**
     * Exchange Web Services (EWS) is not available for this mailbox because the user account
     * associated with the mailbox is a member of too many groups. EWS limits the group
     * membership it can proxy between Client Access Service Servers to 3000.
     */
    ErrorProxyGroupSidLimitExceeded,
    /**
     * ErrorProxyRequestNotAllowed
     */
    ErrorProxyRequestNotAllowed,
    /**
     * ErrorProxyRequestProcessingFailed
     */
    ErrorProxyRequestProcessingFailed,
    /**
     * Exchange Web Services are not currently available for this mailbox because it could not
     * determine the Client Access Services Server to use for the mailbox.
     */
    ErrorProxyServiceDiscoveryFailed,
    /**
     * Proxy token has expired.
     */
    ErrorProxyTokenExpired,
    /**
     * ErrorPublicFolderRequestProcessingFailed
     */
    ErrorPublicFolderRequestProcessingFailed,
    /**
     * ErrorPublicFolderServerNotFound
     */
    ErrorPublicFolderServerNotFound,
    /**
     * The search folder has a restriction that is too long to return.
     */
    ErrorQueryFilterTooLong,
    /**
     * Mailbox has exceeded maximum mailbox size.
     */
    ErrorQuotaExceeded,
    /**
     * Unable to retrieve events for this subscription.  The subscription must be recreated.
     */
    ErrorReadEventsFailed,
    /**
     * Unable to suppress read receipt. Read receipts are not pending.
     */
    ErrorReadReceiptNotPending,
    /**
     * Recurrence end date can not exceed Sep 1, 4500 00:00:00.
     */
    ErrorRecurrenceEndDateTooBig,
    /**
     * Recurrence has no occurrences in the specified range.
     */
    ErrorRecurrenceHasNoOccurrence,
    /**
     * Failed to remove one or more delegates.
     */
    ErrorRemoveDelegatesFailed,
    /**
     * ErrorRequestAborted
     */
    ErrorRequestAborted,
    /**
     * ErrorRequestStreamTooBig
     */
    ErrorRequestStreamTooBig,
    /**
     * Required property is missing.
     */
    ErrorRequiredPropertyMissing,
    /**
     * Cannot perform ResolveNames for non-contact folder.
     */
    ErrorResolveNamesInvalidFolderType,
    /**
     * Only one contacts folder can be specified in request.
     */
    ErrorResolveNamesOnlyOneContactsFolderAllowed,
    /**
     * The response failed schema validation.
     */
    ErrorResponseSchemaValidation,
    /**
     * The restriction or sort order is too complex for this operation.
     */
    ErrorRestrictionTooComplex,
    /**
     * Restriction contained too many elements.
     */
    ErrorRestrictionTooLong,
    /**
     * ErrorResultSetTooBig
     */
    ErrorResultSetTooBig,
    /**
     * ErrorRulesOverQuota
     */
    ErrorRulesOverQuota,
    /**
     * The folder in which items were to be saved could not be found.
     */
    ErrorSavedItemFolderNotFound,
    /**
     * The request failed schema validation.
     */
    ErrorSchemaValidation,
    /**
     * The search folder is not initialized.
     */
    ErrorSearchFolderNotInitialized,
    /**
     * The user account which was used to submit this request does not have the right to send
     * mail on behalf of the specified sending account.
     */
    ErrorSendAsDenied,
    /**
     * SendMeetingCancellations attribute is required for Calendar items.
     */
    ErrorSendMeetingCancellationsRequired,
    /**
     * The SendMeetingInvitationsOrCancellations attribute is required for calendar items.
     */
    ErrorSendMeetingInvitationsOrCancellationsRequired,
    /**
     * The SendMeetingInvitations attribute is required for calendar items.
     */
    ErrorSendMeetingInvitationsRequired,
    /**
     * The meeting request has already been sent and might not be updated.
     */
    ErrorSentMeetingRequestUpdate,
    /**
     * The task request has already been sent and may not be updated.
     */
    ErrorSentTaskRequestUpdate,
    /**
     * The server cannot service this request right now. Try again later.
     */
    ErrorServerBusy,
    /**
     * ErrorServiceDiscoveryFailed
     */
    ErrorServiceDiscoveryFailed,
    /**
     * No external Exchange Web Service URL available.
     */
    ErrorSharingNoExternalEwsAvailable,
    /**
     * Failed to synchronize the sharing folder.
     */
    ErrorSharingSynchronizationFailed,
    /**
     * The current ChangeKey is required for this operation.
     */
    ErrorStaleObject,
    /**
     * The message couldn't be sent because the sender's submission quota was exceeded. Please
     * try again later.
     */
    ErrorSubmissionQuotaExceeded,
    /**
     * Access is denied. Only the subscription owner may access the subscription.
     */
    ErrorSubscriptionAccessDenied,
    /**
     * Subscriptions are not supported for delegate user access.
     */
    ErrorSubscriptionDelegateAccessNotSupported,
    /**
     * The specified subscription was not found.
     */
    ErrorSubscriptionNotFound,
    /**
     * The StreamingSubscription was unsubscribed while the current connection was servicing it.
     */
    ErrorSubscriptionUnsubscribed,
    /**
     * The folder to be synchronized could not be found.
     */
    ErrorSyncFolderNotFound,
    /**
     * ErrorTeamMailboxNotFound
     */
    ErrorTeamMailboxNotFound,
    /**
     * ErrorTeamMailboxNotLinkedToSharePoint
     */
    ErrorTeamMailboxNotLinkedToSharePoint,
    /**
     * ErrorTeamMailboxUrlValidationFailed
     */
    ErrorTeamMailboxUrlValidationFailed,
    /**
     * ErrorTeamMailboxNotAuthorizedOwner
     */
    ErrorTeamMailboxNotAuthorizedOwner,
    /**
     * ErrorTeamMailboxActiveToPendingDelete
     */
    ErrorTeamMailboxActiveToPendingDelete,
    /**
     * ErrorTeamMailboxFailedSendingNotifications
     */
    ErrorTeamMailboxFailedSendingNotifications,
    /**
     * ErrorTeamMailboxErrorUnknown
     */
    ErrorTeamMailboxErrorUnknown,
    /**
     * ErrorTimeIntervalTooBig
     */
    ErrorTimeIntervalTooBig,
    /**
     * ErrorTimeoutExpired
     */
    ErrorTimeoutExpired,
    /**
     * The time zone isn't valid.
     */
    ErrorTimeZone,
    /**
     * The specified target folder could not be found.
     */
    ErrorToFolderNotFound,
    /**
     * The requesting account does not have permission to serialize tokens.
     */
    ErrorTokenSerializationDenied,
    /**
     * ErrorUnableToGetUserOofSettings
     */
    ErrorUnableToGetUserOofSettings,
    /**
     * ErrorUnableToRemoveImContactFromGroup
     */
    ErrorUnableToRemoveImContactFromGroup,
    /**
     * A dial plan could not be found.
     */
    ErrorUnifiedMessagingDialPlanNotFound,
    /**
     * The UnifiedMessaging request failed.
     */
    ErrorUnifiedMessagingRequestFailed,
    /**
     * A connection couldn't be made to the Unified Messaging server.
     */
    ErrorUnifiedMessagingServerNotFound,
    /**
     * The specified item culture is not supported on this server.
     */
    ErrorUnsupportedCulture,
    /**
     * The MAPI property type is not supported.
     */
    ErrorUnsupportedMapiPropertyType,
    /**
     * MIME conversion is not supported for this item type.
     */
    ErrorUnsupportedMimeConversion,
    /**
     * The property can not be used with this type of restriction.
     */
    ErrorUnsupportedPathForQuery,
    /**
     * The property can not be used for sorting or grouping results.
     */
    ErrorUnsupportedPathForSortGroup,
    /**
     * PropertyDefinition is not supported in searches.
     */
    ErrorUnsupportedPropertyDefinition,
    /**
     * QueryFilter type is not supported.
     */
    ErrorUnsupportedQueryFilter,
    /**
     * The specified recurrence is not supported.
     */
    ErrorUnsupportedRecurrence,
    /**
     * Unsupported subfilter type.
     */
    ErrorUnsupportedSubFilter,
    /**
     * Unsupported type for restriction conversion.
     */
    ErrorUnsupportedTypeForConversion,
    /**
     * Failed to update one or more delegates.
     */
    ErrorUpdateDelegatesFailed,
    /**
     * Property for update does not match property in object.
     */
    ErrorUpdatePropertyMismatch,
    /**
     * Policy does not allow granting permissions to user.
     */
    ErrorUserNotAllowedByPolicy,
    /**
     * The user isn't enabled for Unified Messaging
     */
    ErrorUserNotUnifiedMessagingEnabled,
    /**
     * The user doesn't have an SMTP proxy address from a federated domain.
     */
    ErrorUserWithoutFederatedProxyAddress,
    /**
     * The value is out of range.
     */
    ErrorValueOutOfRange,
    /**
     * Virus detected in the message.
     */
    ErrorVirusDetected,
    /**
     * The item has been deleted as a result of a virus scan.
     */
    ErrorVirusMessageDeleted,
    /**
     * The Voice Mail distinguished folder is not implemented.
     */
    ErrorVoiceMailNotImplemented,
    /**
     * ErrorWebRequestInInvalidState
     */
    ErrorWebRequestInInvalidState,
    /**
     * ErrorWin32InteropError
     */
    ErrorWin32InteropError,
    /**
     * ErrorWorkingHoursSaveFailed
     */
    ErrorWorkingHoursSaveFailed,
    /**
     * ErrorWorkingHoursXmlMalformed
     */
    ErrorWorkingHoursXmlMalformed,
    /**
     * The Client Access server version doesn't match the Mailbox server version of the resource
     * that was being accessed. To determine the correct URL to use to access the resource, use
     * Autodiscover with the address of the resource.
     */
    ErrorWrongServerVersion,
    /**
     * The mailbox of the authenticating user and the mailbox of the resource being accessed
     * must have the same Mailbox server version.
     */
    ErrorWrongServerVersionDelegate,
    /**
     * The client access token request is invalid.
     */
    ErrorInvalidClientAccessTokenRequest,
    /**
     * invalid managementrole header value or usage.
     */
    ErrorInvalidManagementRoleHeader,
    /**
     * SearchMailboxes query has too many keywords.
     */
    ErrorSearchQueryHasTooManyKeywords,
    /**
     * SearchMailboxes on too many mailboxes.
     */
    ErrorSearchTooManyMailboxes,
    /**
     * There are no retention tags.
     */
    ErrorInvalidRetentionTagNone,
    /**
     * Discovery Searches are disabled.
     */
    ErrorDiscoverySearchesDisabled,
    /**
     * SeekToConditionPageView not supported for calendar items.
     */
    ErrorCalendarSeekToConditionNotSupported,
    /**
     * Archive mailbox search operation failed.
     */
    ErrorArchiveMailboxSearchFailed,
    /**
     * Get remote archive mailbox folder failed.
     */
    ErrorGetRemoteArchiveFolderFailed,
    /**
     * Find remote archive mailbox folder failed.
     */
    ErrorFindRemoteArchiveFolderFailed,
    /**
     * Get remote archive mailbox item failed.
     */
    ErrorGetRemoteArchiveItemFailed,
    /**
     * Export remote archive mailbox items failed.
     */
    ErrorExportRemoteArchiveItemsFailed,
    /**
     * Invalid state definition.
     */
    ErrorClientIntentInvalidStateDefinition,
    /**
     * Client intent not found.
     */
    ErrorClientIntentNotFound,
    /**
     * The Content Indexing service is required to perform this search, but it's not enabled.
     */
    ErrorContentIndexingNotEnabled,
    /**
     * The custom prompt files you specified couldn't be removed.
     */
    ErrorDeleteUnifiedMessagingPromptFailed,
    /**
     * The location service is disabled.
     */
    ErrorLocationServicesDisabled,
    /**
     * Invalid location service request.
     */
    ErrorLocationServicesInvalidRequest,
    /**
     * The request for location information failed.
     */
    ErrorLocationServicesRequestFailed,
    /**
     * The request for location information timed out.
     */
    ErrorLocationServicesRequestTimedOut,
    /**
     * Weather service is disabled.
     */
    ErrorWeatherServiceDisabled,
    /**
     * Mailbox scope not allowed without a query string.
     */
    ErrorMailboxScopeNotAllowedWithoutQueryString,
    /**
     * No speech detected.
     */
    ErrorNoSpeechDetected,
    /**
     * An error occurred while accessing the custom prompt publishing point.
     */
    ErrorPromptPublishingOperationFailed,
    /**
     * Unable to discover the URL of the public folder mailbox.
     */
    ErrorPublicFolderMailboxDiscoveryFailed,
    /**
     * Public folder operation failed.
     */
    ErrorPublicFolderOperationFailed,
    /**
     * The operation succeeded on the primary public folder mailbox, but failed to sync to the secondary public folder mailbox.
     */
    ErrorPublicFolderSyncException,
    /**
     * Discovery Searches are disabled.
     */
    ErrorRecipientNotFound,
    /**
     * Recognizer not installed.
     */
    ErrorRecognizerNotInstalled,
    /**
     * Speech grammar error.
     */
    ErrorSpeechGrammarError,
    /**
     * Too many concurrent connections opened.
     */
    ErrorTooManyObjectsOpened,
    /**
     * Unified Messaging server unavailable.
     */
    ErrorUMServerUnavailable,
    /**
     * The Unified Messaging custom prompt file you specified couldn't be found.
     */
    ErrorUnifiedMessagingPromptNotFound,
    /**
     * Report data for the UM call summary couldn't be found.
     */
    ErrorUnifiedMessagingReportDataNotFound,
    /**
     * The requested size is invalid.
     */
    ErrorInvalidPhotoSize,
    /**
     * AcceptItem action is invalid for a meeting message in group mailbox.
     */
    ErrorCalendarIsGroupMailboxForAccept,
    /**
     * DeclineItem operation is invalid for a meeting message in group mailbox.
     */
    ErrorCalendarIsGroupMailboxForDecline,
    /**
     * TentativelyAcceptItem action isn't valid for a meeting message in group mailbox.
     */
    ErrorCalendarIsGroupMailboxForTentative,
    /**
     * SuppressReadReceipt action isn't valid for a meeting message in group mailbox.
     */
    ErrorCalendarIsGroupMailboxForSuppressReadReceipt,
    /**
     * The Organization is marked for removal.
     */
    ErrorOrganizationAccessBlocked,
    /**
     * User doesn't have a valid license.
     */
    ErrorInvalidLicense,
    /**
     * Receive quota message per folder is exceeded.
     */
    ErrorMessagePerFolderCountReceiveQuotaExceeded,
    /**
     * Unified group was not found.
     */
    ErrorUnifiedGroupMailboxNotFound,
    /**
     * Invalid channel id.
     */
    ErrorInvalidChannelId,
    /**
     * Another connection is opened on the same channel.
     */
    ErrorNewChannelConnectionOpened,
    /**
     * The channel subscription cannot be found.
     */
    ErrorChannelSubscriptionNotFound,
    /**
     * The channel contains too many subscriptions.
     */
    ErrorExceededChannelSubscriptionCount,
    /**
     * The channel subscription already exists.
     */
    ErrorChannelSubscriptionAlreadyExists,
    /**
     * The given channel subscription id is invalid.
     */
    ErrorInvalidChannelSubscriptionId,
    
    /* #region Error codes to map WASCL errors */
    
    /**
     * Error indicating that message submission blocked by WASCL for a consumer mailboxes
     */
    ErrorMessageSubmissionBlocked,
    /**
     * Error indicating that number of submitted messages exceeded the limit and message submission is blocked by WASCL
     */
    ErrorExceededMessageLimit,
    /**
     * Error indicating that recipients number for a consumer mailbox has exceeded the limit defined by WASCL
     */
    ErrorExceededMaxRecipientLimitBlock,
    /**
     * Error indicating that access to the consumer mailbox is suspended by WASCL
     */
    ErrorAccountSuspend,
    /**
     * Error indicating that recipients number for a consumer mailbox has exceeded the limit defined by WASCL
     */
    ErrorExceededMaxRecipientLimit,
    /**
     * Error indicating that particular message cannot be sent for a consumer mailbox as it is considered as SPAM by WASCL
     */
    ErrorMessageBlocked,
    /**
     * Error indicating that access to the consumer mailbox is suspended by WASCL
     */
    ErrorAccountSuspendShowTierUpgrade,
    /**
     * Error indicating that message sent from a consumer mailbox has exceeded the limit defined by WASCL
     */
    ErrorExceededMessageLimitShowTierUpgrade,
    /**
     * Error indicating that recipients number for a consumer mailbox has exceeded the limit defined by WASCL
     */
    ErrorExceededMaxRecipientLimitShowTierUpgrade,
 
    /* #endregion */
}