module Microsoft.Exchange.WebServices.Autodiscover {
    export enum AutodiscoverErrorCode {
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
        InternalServerError = 10
    }
    export enum AutodiscoverResponseType {
        Error = 0,
        RedirectUrl = 1,
        RedirectAddress = 2,
        Success = 3
    }
    export enum DomainSettingName {
        ExternalEwsUrl = 0,
        ExternalEwsVersion = 1
    }
    export enum OutlookProtocolType {
        Rpc = 0,
        RpcOverHttp = 1,
        Web = 2,
        Unknown = 3
    }
    export enum UserSettingName {
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
        MapiHttpEnabled = 97
    }
}
module Microsoft.Exchange.WebServices.Data {
    export enum AffectedTaskOccurrence {
        AllOccurrences = 0,
        SpecifiedOccurrenceOnly = 1
    }
    export enum AggregateType {
        Minimum = 0,
        Maximum = 1
    }
    export enum AppointmentType {
        Single = 0,
        Occurrence = 1,
        Exception = 2,
        RecurringMaster = 3
    }
    export enum AutodiscoverEndpoints {
        None = 0,
        Legacy = 1,
        Soap = 2,
        WsSecurity = 4,
        WSSecuritySymmetricKey = 8,
        WSSecurityX509Cert = 16,
        OAuth = 32
    }
    export enum AvailabilityData {
        FreeBusy = 0,
        Suggestions = 1,
        FreeBusyAndSuggestions = 2
    }
    export enum BasePropertySet {
        IdOnly = 0,
        FirstClassProperties = 1
    }
    export enum BodyType {
        HTML = 0,
        Text = 1
    }
    export enum ChangeType {
        Create = 0,
        Update = 1,
        Delete = 2,
        ReadFlagChange = 3
    }
    export enum ClientAccessTokenType {
        CallerIdentity = 0,
        ExtensionCallback = 1,
        ScopedToken = 2
    }
    export enum ClientExtensionProvidedTo {
        Everyone = 0,
        SpecificUsers = 1
    }
    export enum ComparisonMode {
        Exact = 0,
        IgnoreCase = 1,
        IgnoreNonSpacingCharacters = 2,
        IgnoreCaseAndNonSpacingCharacters = 3
    }
    export enum ConflictResolutionMode {
        NeverOverwrite = 0,
        AutoResolve = 1,
        AlwaysOverwrite = 2
    }
    export enum ConflictType {
        IndividualAttendeeConflict = 0,
        GroupConflict = 1,
        GroupTooBigConflict = 2,
        UnknownAttendeeConflict = 3
    }
    export enum ConnectingIdType {
        PrincipalName = 0,
        SID = 1,
        SmtpAddress = 2
    }
    export enum ConnectionFailureCause {
        None = 0,
        UserBusy = 1,
        NoAnswer = 2,
        Unavailable = 3,
        Other = 4
    }
    export enum ContactSource {
        ActiveDirectory = 0,
        Store = 1
    }
    export enum ContainmentMode {
        FullString = 0,
        Prefixed = 1,
        Substring = 2,
        PrefixOnWords = 3,
        ExactPhrase = 4
    }
    export enum ConversationActionType {
        AlwaysCategorize = 0,
        AlwaysDelete = 1,
        AlwaysMove = 2,
        Delete = 3,
        Move = 4,
        Copy = 5,
        SetReadState = 6,
        SetRetentionPolicy = 7,
        Flag = 8
    }
    export enum ConversationFlagStatus {
        NotFlagged = 0,
        Flagged = 1,
        Complete = 2
    }
    export enum ConversationQueryTraversal {
        Shallow = 0,
        Deep = 1
    }
    export enum ConversationSortOrder {
        TreeOrderAscending = 0,
        TreeOrderDescending = 1,
        DateOrderAscending = 2,
        DateOrderDescending = 3
    }
    export enum DateTimePrecision {
        Default = 0,
        Seconds = 1,
        Milliseconds = 2
    }
    export enum DayOfTheWeek {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6,
        Day = 7,
        Weekday = 8,
        WeekendDay = 9
    }
    export enum DayOfTheWeekIndex {
        First = 0,
        Second = 1,
        Third = 2,
        Fourth = 3,
        Last = 4
    }
    export enum DefaultExtendedPropertySet {
        Meeting = 0,
        Appointment = 1,
        Common = 2,
        PublicStrings = 3,
        Address = 4,
        InternetHeaders = 5,
        CalendarAssistant = 6,
        UnifiedMessaging = 7,
        Task = 8
    }
    export enum DelegateFolderPermissionLevel {
        None = 0,
        Editor = 1,
        Reviewer = 2,
        Author = 3,
        Custom = 4
    }
    export enum DeleteMode {
        HardDelete = 0,
        SoftDelete = 1,
        MoveToDeletedItems = 2
    }
    export enum DisableReasonType {
        NoReason = 0,
        OutlookClientPerformance = 1,
        OWAClientPerformance = 2,
        MobileClientPerformance = 3
    }
    export enum EffectiveRights {
        None = 0,
        CreateAssociated = 1,
        CreateContents = 2,
        CreateHierarchy = 4,
        Delete = 8,
        Modify = 16,
        Read = 32,
        ViewPrivateItems = 64
    }
    export enum ElcFolderType {
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
        NonIpmRoot = 19
    }
    export enum EmailAddressKey {
        EmailAddress1 = 0,
        EmailAddress2 = 1,
        EmailAddress3 = 2
    }
    export enum EmailPosition {
        LatestReply = 0,
        Other = 1,
        Subject = 2,
        Signature = 3
    }
    export enum EventType {
        Status = 0,
        NewMail = 1,
        Deleted = 2,
        Modified = 3,
        Moved = 4,
        Copied = 5,
        Created = 6,
        FreeBusyChanged = 7
    }
    export enum ExchangeVersion {
        Exchange2007_SP1 = 0,
        Exchange2010 = 1,
        Exchange2010_SP1 = 2,
        Exchange2010_SP2 = 3,
        Exchange2013 = 4,
        Exchange2013_SP1 = 5
    }
    export enum ExtensionInstallScope {
        None = 0,
        User = 1,
        Organization = 2,
        Default = 3
    }
    export enum ExtensionType {
        Default = 0,
        Private = 1,
        MarketPlace = 2
    }
    export enum FileAsMapping {
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
        Empty = 17
    }
    export enum FlaggedForAction {
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
        Review = 10
    }
    export enum FolderPermissionLevel {
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
        Custom = 11
    }
    export enum FolderPermissionReadAccess {
        None = 0,
        TimeOnly = 1,
        TimeAndSubjectAndLocation = 2,
        FullDetails = 3
    }
    export enum FolderTraversal {
        Shallow = 0,
        Deep = 1,
        SoftDeleted = 2
    }
    export enum FreeBusyViewType {
        None = 0,
        MergedOnly = 1,
        FreeBusy = 2,
        FreeBusyMerged = 3,
        Detailed = 4,
        DetailedMerged = 5
    }
    export enum HangingRequestDisconnectReason {
        Clean = 0,
        UserInitiated = 1,
        Timeout = 2,
        Exception = 3
    }
    export enum HoldAction {
        Create = 0,
        Update = 1,
        Remove = 2
    }
    export enum HoldStatus {
        NotOnHold = 0,
        Pending = 1,
        OnHold = 2,
        PartialHold = 3,
        Failed = 4
    }
    export enum IconIndex {
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
        TaskDelegated = 35
    }
    export enum IdFormat {
        EwsLegacyId = 0,
        EwsId = 1,
        EntryId = 2,
        HexEntryId = 3,
        StoreId = 4,
        OwaId = 5
    }
    export enum ImAddressKey {
        ImAddress1 = 0,
        ImAddress2 = 1,
        ImAddress3 = 2
    }
    export enum Importance {
        Low = 0,
        Normal = 1,
        High = 2
    }
    export enum ItemFlagStatus {
        NotFlagged = 0,
        Flagged = 1,
        Complete = 2
    }
    export enum ItemIndexError {
        None = 0,
        GenericError = 1,
        Timeout = 2,
        StaleEvent = 3,
        MailboxOffline = 4,
        AttachmentLimitReached = 5,
        MarsWriterTruncation = 6
    }
    export enum ItemTraversal {
        Shallow = 0,
        SoftDeleted = 1,
        Associated = 2
    }
    export enum JsonTokenType {
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
    export enum LegacyFreeBusyStatus {
        Free = 0,
        Tentative = 1,
        Busy = 2,
        OOF = 3,
        WorkingElsewhere = 4,
        NoData = 5
    }
    export enum LobbyBypass {
        Disabled = 0,
        EnabledForGatewayParticipants = 1
    }
    export enum LocationSource {
        None = 0,
        LocationServices = 1,
        PhonebookServices = 2,
        Device = 3,
        Contact = 4,
        Resource = 5
    }
    export enum LogicalOperator {
        And = 0,
        Or = 1
    }
    export enum MailboxSearchLocation {
        PrimaryOnly = 0,
        ArchiveOnly = 1,
        All = 2
    }
    export enum MailboxSearchScopeType {
        LegacyExchangeDN = 0,
        PublicFolder = 1,
        Recipient = 2,
        MailboxGuid = 3,
        AllPublicFolders = 4,
        AllMailboxes = 5,
        SavedSearchId = 6,
        AutoDetect = 7
    }
    export enum MailboxType {
        Unknown = 0,
        OneOff = 1,
        Mailbox = 2,
        PublicFolder = 3,
        PublicGroup = 4,
        ContactGroup = 5,
        Contact = 6
    }
    export enum MapiPropertyType {
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
        StringArray = 26
    }
    export enum MeetingAttendeeType {
        Organizer = 0,
        Required = 1,
        Optional = 2,
        Room = 3,
        Resource = 4
    }
    export enum MeetingRequestsDeliveryScope {
        DelegatesOnly = 0,
        DelegatesAndMe = 1,
        DelegatesAndSendInformationToMe = 2,
        NoForward = 3
    }
    export enum MeetingRequestType {
        None = 0,
        FullUpdate = 1,
        InformationalUpdate = 2,
        NewMeetingRequest = 3,
        Outdated = 4,
        SilentUpdate = 5,
        PrincipalWantsCopy = 6
    }
    export enum MeetingResponseType {
        Unknown = 0,
        Organizer = 1,
        Tentative = 2,
        Accept = 3,
        Decline = 4,
        NoResponseReceived = 5
    }
    export enum MemberStatus {
        Unrecognized = 0,
        Normal = 1,
        Demoted = 2
    }
    export enum MessageDisposition {
        SaveOnly = 0,
        SendAndSaveCopy = 1,
        SendOnly = 2
    }
    export enum Month {
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
        December = 12
    }
    export enum OffsetBasePoint {
        Beginning = 0,
        End = 1
    }
    export enum OnlineMeetingAccessLevel {
        Locked = 0,
        Invited = 1,
        Internal = 2,
        Everyone = 3
    }
    export enum OofExternalAudience {
        None = 0,
        Known = 1,
        All = 2
    }
    export enum OofState {
        Disabled = 0,
        Enabled = 1,
        Scheduled = 2
    }
    export enum PermissionScope {
        None = 0,
        Owned = 1,
        All = 2
    }
    export enum PhoneCallState {
        Idle = 0,
        Connecting = 1,
        Alerted = 2,
        Connected = 3,
        Disconnected = 4,
        Incoming = 5,
        Transferring = 6,
        Forwarding = 7
    }
    export enum PhoneNumberKey {
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
        TtyTddPhone = 18
    }
    export enum PhysicalAddressIndex {
        None = 0,
        Business = 1,
        Home = 2,
        Other = 3
    }
    export enum PhysicalAddressKey {
        Business = 0,
        Home = 1,
        Other = 2
    }
    export enum Presenters {
        Disabled = 0,
        Internal = 1,
        Everyone = 2
    }
    export enum PreviewItemBaseShape {
        Default = 0,
        Compact = 1
    }
    export enum PrivilegedLogonType {
        Admin = 0,
        SystemService = 1
    }
    export enum PrivilegedUserIdBudgetType {
        Default = 0,
        RunningAsBackgroundLoad = 1,
        Unthrottled = 2
    }
    export enum PropertyDefinitionFlags {
        None = 0,
        AutoInstantiateOnRead = 1,
        ReuseInstance = 2,
        CanSet = 4,
        CanUpdate = 8,
        CanDelete = 16,
        CanFind = 32,
        MustBeExplicitlyLoaded = 64,
        UpdateCollectionItems = 128
    }
    export enum ResolveNameSearchLocation {
        DirectoryOnly = 0,
        DirectoryThenContacts = 1,
        ContactsOnly = 2,
        ContactsThenDirectory = 3
    }
    export enum ResponseActions {
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
        PostReply = 512
    }
    export enum ResponseMessageType {
        Reply = 0,
        ReplyAll = 1,
        Forward = 2
    }
    export enum RetentionActionType {
        None = 0,
        MoveToDeletedItems = 1,
        MoveToFolder = 2,
        DeleteAndAllowRecovery = 3,
        PermanentlyDelete = 4,
        MarkAsPastRetentionLimit = 5,
        MoveToArchive = 6
    }
    export enum RetentionType {
        Delete = 0,
        Archive = 1
    }
    export enum RuleErrorCode {
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
        UnsupportedRule = 23
    }
    export enum RuleProperty {
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
        Exceptions = 90
    }
    export enum SearchFolderTraversal {
        Shallow = 0,
        Deep = 1
    }
    export enum SearchPageDirection {
        Next = 0,
        Previous = 1
    }
    export enum SearchResultType {
        StatisticsOnly = 0,
        PreviewOnly = 1
    }
    export enum SendCancellationsMode {
        SendToNone = 0,
        SendOnlyToAll = 1,
        SendToAllAndSaveCopy = 2
    }
    export enum SendInvitationsMode {
        SendToNone = 0,
        SendOnlyToAll = 1,
        SendToAllAndSaveCopy = 2
    }
    export enum SendInvitationsOrCancellationsMode {
        SendToNone = 0,
        SendOnlyToAll = 1,
        SendOnlyToChanged = 2,
        SendToAllAndSaveCopy = 3,
        SendToChangedAndSaveCopy = 4
    }
    export enum SendPrompt {
        None = 0,
        Send = 1,
        VotingOption = 2
    }
    export enum Sensitivity {
        Normal = 0,
        Personal = 1,
        Private = 2,
        Confidential = 3
    }
    export enum ServiceError {
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
        ErrorCalendarIsGroupMailboxForSuppressReadReceipt = 454
    }
    export enum ServiceErrorHandling {
        ReturnErrors = 0,
        ThrowOnError = 1
    }
    export enum ServiceObjectType {
        Folder = 0,
        Item = 1,
        Conversation = 2
    }
    export enum ServiceResult {
        Success = 0,
        Warning = 1,
        Error = 2
    }
    export enum SetClientExtensionActionId {
        Install = 0,
        Uninstall = 1,
        Configure = 2
    }
    export enum SortDirection {
        Ascending = 0,
        Descending = 1
    }
    export enum StandardUser {
        Default = 0,
        Anonymous = 1
    }
    export enum SuggestionQuality {
        Excellent = 0,
        Good = 1,
        Fair = 2,
        Poor = 3
    }
    export enum SyncFolderItemsScope {
        NormalItems = 0,
        NormalAndAssociatedItems = 1
    }
    export enum TaskDelegationState {
        NoDelegation = 0,
        Unknown = 1,
        Accepted = 2,
        Declined = 3
    }
    export enum TaskMode {
        Normal = 0,
        Request = 1,
        RequestAccepted = 2,
        RequestDeclined = 3,
        Update = 4,
        SelfDelegated = 5
    }
    export enum TaskStatus {
        NotStarted = 0,
        InProgress = 1,
        Completed = 2,
        WaitingOnOthers = 3,
        Deferred = 4
    }
    export enum TeamMailboxLifecycleState {
        Active = 0,
        Closed = 1,
        Unlinked = 2,
        PendingDelete = 3
    }
    export enum TraceFlags {
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
        All = 9223372036854775807
    }
    export enum UserConfigurationDictionaryObjectType {
        DateTime = 0,
        Boolean = 1,
        Byte = 2,
        String = 3,
        Integer32 = 4,
        UnsignedInteger32 = 5,
        Integer64 = 6,
        UnsignedInteger64 = 7,
        StringArray = 8,
        ByteArray = 9
    }
    export enum UserConfigurationProperties {
        Id = 1,
        Dictionary = 2,
        XmlData = 4,
        BinaryData = 8,
        All = 15
    }
    export enum ViewFilter {
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
        SuggestionsDelete = 10
    }
    export enum WellKnownFolderName {
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
        ToDoSearch = 34
    }
    export enum XmlNamespace {
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
        Autodiscover = 10
    }
}

// - moved to file where GetStreamingEventsResponse is located
//module Microsoft.Exchange.WebServices.Data.GetStreamingEventsResponse {
//    export enum ConnectionStatus {
//        OK = 0,
//        Closed = 1
//    }
//}
module Microsoft.Exchange.WebServices.Dns {
    export enum DnsRecordType {
        A = 1,
        CNAME = 5,
        SOA = 6,
        PTR = 12,
        MX = 15,
        TXT = 16,
        AAAA = 28,
        SRV = 33
    }
}
module Microsoft.Exchange.WebServices.Dns.DnsNativeMethods {
    export enum DnsQueryOptions {
        DNS_QUERY_STANDARD = 0
    }
    export enum FreeType {
        RecordList = 1
    }
}
module Microsoft.Exchange.WebServices.Strings {
    export enum IDs {
        CannotRemoveSubscriptionFromLiveConnection = 1631423810,
        ReadAccessInvalidForNonCalendarFolder = 3355844483,
        PropertyDefinitionPropertyMustBeSet = 1413133863,
        ArgumentIsBlankString = 2808916828,
        InvalidAutodiscoverDomainsCount = 2110564001,
        MinutesMustBeBetween0And1439 = 3846446647,
        DeleteInvalidForUnsavedUserConfiguration = 3725066606,
        PeriodNotFound = 732877372,
        InvalidAutodiscoverSmtpAddress = 742945049,
        InvalidOAuthToken = 2371807741,
        MaxScpHopsExceeded = 540781291,
        ContactGroupMemberCannotBeUpdatedWithoutBeingLoadedFirst = 412932664,
        CurrentPositionNotElementStart = 3932722495,
        CannotConvertBetweenTimeZones = 1762296216,
        FrequencyMustBeBetween1And1440 = 2947629837,
        CannotSetDelegateFolderPermissionLevelToCustom = 4255072555,
        PartnerTokenIncompatibleWithRequestVersion = 231532733,
        InvalidAutodiscoverRequest = 216906786,
        InvalidAsyncResult = 2795977038,
        InvalidMailboxType = 1875536889,
        AttachmentCollectionNotLoaded = 368467777,
        ParameterIncompatibleWithRequestVersion = 1937216341,
        DayOfWeekIndexMustBeSpecifiedForRecurrencePattern = 814325722,
        WLIDCredentialsCannotBeUsedWithLegacyAutodiscover = 365885070,
        PropertyCannotBeUpdated = 2534953608,
        IncompatibleTypeForArray = 3820761979,
        PercentCompleteMustBeBetween0And100 = 3936886128,
        AutodiscoverServiceIncompatibleWithRequestVersion = 460414997,
        InvalidAutodiscoverSmtpAddressesCount = 1774410042,
        ServiceUrlMustBeSet = 1922401890,
        ItemTypeNotCompatible = 4181025268,
        AttachmentItemTypeMismatch = 1516841384,
        UnsupportedWebProtocol = 3620572079,
        EnumValueIncompatibleWithRequestVersion = 777131942,
        UnexpectedElement = 2080190431,
        InvalidOrderBy = 162617974,
        NoAppropriateConstructorForItemClass = 3730786468,
        SearchFilterAtIndexIsInvalid = 1334400254,
        DeletingThisObjectTypeNotAuthorized = 3957228737,
        PropertyCannotBeDeleted = 2011990502,
        ValuePropertyMustBeSet = 49538054,
        TagValueIsOutOfRange = 4177209255,
        ItemToUpdateCannotBeNullOrNew = 893972063,
        SearchParametersRootFolderIdsEmpty = 2492696699,
        MailboxQueriesParameterIsNotSpecified = 2182404464,
        FolderPermissionHasInvalidUserId = 3079787672,
        InvalidAutodiscoverDomain = 95137117,
        MailboxesParameterIsNotSpecified = 1274908260,
        ParentFolderDoesNotHaveId = 3207115397,
        DayOfMonthMustBeSpecifiedForRecurrencePattern = 190140884,
        ClassIncompatibleWithRequestVersion = 886236812,
        CertificateHasNoPrivateKey = 956539910,
        InvalidOrUnsupportedTimeZoneDefinition = 2660350763,
        HourMustBeBetween0And23 = 980862610,
        TimeoutMustBeBetween1And1440 = 1864811546,
        CredentialsRequired = 107509017,
        MustLoadOrAssignPropertyBeforeAccess = 1301287431,
        InvalidAutodiscoverServiceResponse = 2421645987,
        CannotCallConnectDuringLiveConnection = 3637880390,
        ObjectDoesNotHaveId = 1990317298,
        CannotAddSubscriptionToLiveConnection = 2374077290,
        MaxChangesMustBeBetween1And512 = 3989266019,
        AttributeValueCannotBeSerialized = 3745271395,
        SearchFilterMustBeSet = 2182989540,
        EndDateMustBeGreaterThanStartDate = 2696927076,
        InvalidDateTime = 3410810540,
        UpdateItemsDoesNotAllowAttachments = 2505974152,
        TimeoutMustBeGreaterThanZero = 3210574608,
        AutodiscoverInvalidSettingForOutlookProvider = 81925120,
        InvalidRedirectionResponseReturned = 706868687,
        ExpectedStartElement = 3728006586,
        DaysOfTheWeekNotSpecified = 2925351706,
        FolderToUpdateCannotBeNullOrNew = 2887145506,
        PartnerTokenRequestRequiresUrl = 1709653493,
        NumberOfOccurrencesMustBeGreaterThanZero = 4020293177,
        JsonSerializationNotImplemented = 537341821,
        StartTimeZoneRequired = 263088904,
        PropertyAlreadyExistsInOrderByCollection = 2291792901,
        ItemAttachmentMustBeNamed = 2209938519,
        InvalidAutodiscoverSettingsCount = 2688936715,
        LoadingThisObjectTypeNotSupported = 1313605428,
        UserIdForDelegateUserNotSpecified = 3460610998,
        PhoneCallAlreadyDisconnected = 2720737469,
        OperationDoesNotSupportAttachments = 1464025756,
        UnsupportedTimeZonePeriodTransitionTarget = 98512741,
        IEnumerableDoesNotContainThatManyObject = 474853648,
        UpdateItemsDoesNotSupportNewOrUnchangedItems = 953072612,
        ValidationFailed = 1341796948,
        InvalidRecurrencePattern = 3636462697,
        TimeWindowStartTimeMustBeGreaterThanEndTime = 4170253059,
        InvalidAttributeValue = 369811396,
        FileAttachmentContentIsNotSet = 2449142619,
        AutodiscoverDidNotReturnEwsUrl = 628121484,
        RecurrencePatternMustHaveStartDate = 423461609,
        OccurrenceIndexMustBeGreaterThanZero = 1396112272,
        ServiceResponseDoesNotContainXml = 1981959699,
        ItemIsOutOfDate = 2560682386,
        MinuteMustBeBetween0And59 = 3637133283,
        NoSoapOrWsSecurityEndpointAvailable = 3954825173,
        ElementNotFound = 3189440097,
        IndexIsOutOfRange = 4223767916,
        PropertyIsReadOnly = 869119007,
        AttachmentCreationFailed = 2817837707,
        DayOfMonthMustBeBetween1And31 = 3133762315,
        ServiceRequestFailed = 2091738407,
        DelegateUserHasInvalidUserId = 129422921,
        SearchFilterComparisonValueTypeIsNotSupported = 1069581653,
        ElementValueCannotBeSerialized = 4258284629,
        PropertyValueMustBeSpecifiedForRecurrencePattern = 2924950297,
        NonSummaryPropertyCannotBeUsed = 2436895661,
        HoldIdParameterIsNotSpecified = 134310332,
        TransitionGroupNotFound = 21384399,
        ObjectTypeNotSupported = 4144876524,
        InvalidTimeoutValue = 3454211069,
        AutodiscoverRedirectBlocked = 3339063014,
        PropertySetCannotBeModified = 3717641032,
        DayOfTheWeekMustBeSpecifiedForRecurrencePattern = 3877446129,
        ServiceObjectAlreadyHasId = 3918321785,
        MethodIncompatibleWithRequestVersion = 4274338115,
        OperationNotSupportedForPropertyDefinitionType = 2727810523,
        InvalidElementStringValue = 3934659801,
        CollectionIsEmpty = 500353177,
        InvalidFrequencyValue = 885177846,
        UnexpectedEndOfXmlDocument = 546825189,
        FolderTypeNotCompatible = 3578997681,
        RequestIncompatibleWithRequestVersion = 3451337077,
        PropertyTypeIncompatibleWhenUpdatingCollection = 4148083232,
        ServerVersionNotSupported = 603284986,
        DurationMustBeSpecifiedWhenScheduled = 666454105,
        NoError = 1005127777,
        CannotUpdateNewUserConfiguration = 3972010693,
        ObjectTypeIncompatibleWithRequestVersion = 2438108153,
        NullStringArrayElementInvalid = 3604837092,
        HttpsIsRequired = 333950754,
        MergedFreeBusyIntervalMustBeSmallerThanTimeWindow = 2480357954,
        SecondMustBeBetween0And59 = 328519365,
        AtLeastOneAttachmentCouldNotBeDeleted = 3596957401,
        IdAlreadyInList = 1233804470,
        BothSearchFilterAndQueryStringCannotBeSpecified = 3295662635,
        AdditionalPropertyIsNull = 3383788511,
        InvalidEmailAddress = 2316486059,
        MaximumRedirectionHopsExceeded = 1588497945,
        AutodiscoverCouldNotBeLocated = 3097538091,
        NoSubscriptionsOnConnection = 2715578908,
        PermissionLevelInvalidForNonCalendarFolder = 1063351272,
        InvalidAuthScheme = 2845550636,
        JsonDeserializationNotImplemented = 311071154,
        ValuePropertyNotLoaded = 2743202310,
        PropertyIncompatibleWithRequestVersion = 843308875,
        OffsetMustBeGreaterThanZero = 2437116628,
        CreateItemsDoesNotAllowAttachments = 690508625,
        PropertyDefinitionTypeMismatch = 2445370550,
        IntervalMustBeGreaterOrEqualToOne = 2129318611,
        CannotSetPermissionLevelToCustom = 961741172,
        CannotAddRequestHeader = 2921139860,
        ArrayMustHaveAtLeastOneElement = 4264880578,
        MonthMustBeSpecifiedForRecurrencePattern = 567828041,
        ValueOfTypeCannotBeConverted = 3869807514,
        ValueCannotBeConverted = 788051255,
        ServerErrorAndStackTraceDetails = 1481761255,
        FolderPermissionLevelMustBeSet = 2586079185,
        AutodiscoverError = 4003396996,
        ArrayMustHaveSingleDimension = 3066801652,
        InvalidPropertyValueNotInRange = 2233059550,
        RegenerationPatternsOnlyValidForTasks = 1453973661,
        ItemAttachmentCannotBeUpdated = 914733855,
        EqualityComparisonFilterIsInvalid = 1467147488,
        AutodiscoverServiceRequestRequiresDomainOrUrl = 2950491364,
        InvalidUser = 3929050450,
        AccountIsLocked = 2901788841,
        InvalidDomainName = 2762661174,
        TooFewServiceReponsesReturned = 710118117,
        CannotSubscribeToStatusEvents = 463464377,
        InvalidSortByPropertyForMailboxSearch = 1066736932,
        UnexpectedElementType = 2100812591,
        ValueMustBeGreaterThanZero = 691200302,
        AttachmentCannotBeUpdated = 2292458752,
        CreateItemsDoesNotHandleExistingItems = 3912371609,
        MultipleContactPhotosInAttachment = 2967125165,
        InvalidRecurrenceRange = 3387532664,
        CannotSetBothImpersonatedAndPrivilegedUser = 4210899574,
        NewMessagesWithAttachmentsCannotBeSentDirectly = 1565629292,
        CannotCallDisconnectWithNoLiveConnection = 3633425214,
        IdPropertyMustBeSet = 3940556486,
        ValuePropertyNotAssigned = 1562822901,
        ZeroLengthArrayInvalid = 4061174908,
        HoldMailboxesParameterIsNotSpecified = 3345946933,
        CannotSaveNotNewUserConfiguration = 2270311116,
        ServiceObjectDoesNotHaveId = 2111195463,
        PropertyCollectionSizeMismatch = 491519754,
        XsDurationCouldNotBeParsed = 2861470707,
        UnknownTimeZonePeriodTransitionType = 2279096081
    }
}

