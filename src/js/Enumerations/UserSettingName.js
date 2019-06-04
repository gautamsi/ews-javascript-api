"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * User settings that can be requested using GetUserSettings.
 *
 * /remarks/  Add new values to the end and keep in sync with Microsoft.Exchange.Autodiscover.ConfigurationSettings.UserConfigurationSettingName.
 */
var UserSettingName;
(function (UserSettingName) {
    /**
     * The display name of the user.
     */
    UserSettingName[UserSettingName["UserDisplayName"] = 0] = "UserDisplayName";
    /**
     * The legacy distinguished name of the user.
     */
    UserSettingName[UserSettingName["UserDN"] = 1] = "UserDN";
    /**
     * The deployment Id of the user.
     */
    UserSettingName[UserSettingName["UserDeploymentId"] = 2] = "UserDeploymentId";
    /**
     * The fully qualified domain name of the mailbox server.
     */
    UserSettingName[UserSettingName["InternalMailboxServer"] = 3] = "InternalMailboxServer";
    /**
     * The fully qualified domain name of the RPC client server.
     */
    UserSettingName[UserSettingName["InternalRpcClientServer"] = 4] = "InternalRpcClientServer";
    /**
     * The legacy distinguished name of the mailbox server.
     */
    UserSettingName[UserSettingName["InternalMailboxServerDN"] = 5] = "InternalMailboxServerDN";
    /**
     * The internal URL of the Exchange Control Panel.
     */
    UserSettingName[UserSettingName["InternalEcpUrl"] = 6] = "InternalEcpUrl";
    /**
     * The internal URL of the Exchange Control Panel for VoiceMail Customization.
     */
    UserSettingName[UserSettingName["InternalEcpVoicemailUrl"] = 7] = "InternalEcpVoicemailUrl";
    /**
     * The internal URL of the Exchange Control Panel for Email Subscriptions.
     */
    UserSettingName[UserSettingName["InternalEcpEmailSubscriptionsUrl"] = 8] = "InternalEcpEmailSubscriptionsUrl";
    /**
     * The internal URL of the Exchange Control Panel for Text Messaging.
     */
    UserSettingName[UserSettingName["InternalEcpTextMessagingUrl"] = 9] = "InternalEcpTextMessagingUrl";
    /**
     * The internal URL of the Exchange Control Panel for Delivery Reports.
     */
    UserSettingName[UserSettingName["InternalEcpDeliveryReportUrl"] = 10] = "InternalEcpDeliveryReportUrl";
    /**
     * The internal URL of the Exchange Control Panel for RetentionPolicy Tags.
     */
    UserSettingName[UserSettingName["InternalEcpRetentionPolicyTagsUrl"] = 11] = "InternalEcpRetentionPolicyTagsUrl";
    /**
     * The internal URL of the Exchange Control Panel for Publishing.
     */
    UserSettingName[UserSettingName["InternalEcpPublishingUrl"] = 12] = "InternalEcpPublishingUrl";
    /**
     * The internal URL of the Exchange Control Panel for photos.
     */
    UserSettingName[UserSettingName["InternalEcpPhotoUrl"] = 13] = "InternalEcpPhotoUrl";
    /**
     * The internal URL of the Exchange Control Panel for People Connect subscriptions.
     */
    UserSettingName[UserSettingName["InternalEcpConnectUrl"] = 14] = "InternalEcpConnectUrl";
    /**
     * The internal URL of the Exchange Control Panel for Team Mailbox.
     */
    UserSettingName[UserSettingName["InternalEcpTeamMailboxUrl"] = 15] = "InternalEcpTeamMailboxUrl";
    /**
     * The internal URL of the Exchange Control Panel for creating Team Mailbox.
     */
    UserSettingName[UserSettingName["InternalEcpTeamMailboxCreatingUrl"] = 16] = "InternalEcpTeamMailboxCreatingUrl";
    /**
     * The internal URL of the Exchange Control Panel for editing Team Mailbox.
     */
    UserSettingName[UserSettingName["InternalEcpTeamMailboxEditingUrl"] = 17] = "InternalEcpTeamMailboxEditingUrl";
    /**
     * The internal URL of the Exchange Control Panel for hiding Team Mailbox.
     */
    UserSettingName[UserSettingName["InternalEcpTeamMailboxHidingUrl"] = 18] = "InternalEcpTeamMailboxHidingUrl";
    /**
     * The internal URL of the Exchange Control Panel for the extension installation.
     */
    UserSettingName[UserSettingName["InternalEcpExtensionInstallationUrl"] = 19] = "InternalEcpExtensionInstallationUrl";
    /**
     * The internal URL of the Exchange Web Services.
     */
    UserSettingName[UserSettingName["InternalEwsUrl"] = 20] = "InternalEwsUrl";
    /**
     * The internal URL of the Exchange Management Web Services.
     */
    UserSettingName[UserSettingName["InternalEmwsUrl"] = 21] = "InternalEmwsUrl";
    /**
     * The internal URL of the Offline Address Book.
     */
    UserSettingName[UserSettingName["InternalOABUrl"] = 22] = "InternalOABUrl";
    /**
     * The internal URL of the Photos service.
     */
    UserSettingName[UserSettingName["InternalPhotosUrl"] = 23] = "InternalPhotosUrl";
    /**
     * The internal URL of the Unified Messaging services.
     */
    UserSettingName[UserSettingName["InternalUMUrl"] = 24] = "InternalUMUrl";
    /**
     * The internal URLs of the Exchange web client.
     */
    UserSettingName[UserSettingName["InternalWebClientUrls"] = 25] = "InternalWebClientUrls";
    /**
     * The distinguished name of the mailbox database of the user's mailbox.
     */
    UserSettingName[UserSettingName["MailboxDN"] = 26] = "MailboxDN";
    /**
     * The name of the Public Folders server.
     */
    UserSettingName[UserSettingName["PublicFolderServer"] = 27] = "PublicFolderServer";
    /**
     * The name of the Active Directory server.
     */
    UserSettingName[UserSettingName["ActiveDirectoryServer"] = 28] = "ActiveDirectoryServer";
    /**
     * The name of the RPC over HTTP server.
     */
    UserSettingName[UserSettingName["ExternalMailboxServer"] = 29] = "ExternalMailboxServer";
    /**
     * Indicates whether the RPC over HTTP server requires SSL.
     */
    UserSettingName[UserSettingName["ExternalMailboxServerRequiresSSL"] = 30] = "ExternalMailboxServerRequiresSSL";
    /**
     * The authentication methods supported by the RPC over HTTP server.
     */
    UserSettingName[UserSettingName["ExternalMailboxServerAuthenticationMethods"] = 31] = "ExternalMailboxServerAuthenticationMethods";
    /**
     * The URL fragment of the Exchange Control Panel for VoiceMail Customization.
     */
    UserSettingName[UserSettingName["EcpVoicemailUrlFragment"] = 32] = "EcpVoicemailUrlFragment";
    /**
     * The URL fragment of the Exchange Control Panel for Email Subscriptions.
     */
    UserSettingName[UserSettingName["EcpEmailSubscriptionsUrlFragment"] = 33] = "EcpEmailSubscriptionsUrlFragment";
    /**
     * The URL fragment of the Exchange Control Panel for Text Messaging.
     */
    UserSettingName[UserSettingName["EcpTextMessagingUrlFragment"] = 34] = "EcpTextMessagingUrlFragment";
    /**
     * The URL fragment of the Exchange Control Panel for Delivery Reports.
     */
    UserSettingName[UserSettingName["EcpDeliveryReportUrlFragment"] = 35] = "EcpDeliveryReportUrlFragment";
    /**
     * The URL fragment of the Exchange Control Panel for RetentionPolicy Tags.
     */
    UserSettingName[UserSettingName["EcpRetentionPolicyTagsUrlFragment"] = 36] = "EcpRetentionPolicyTagsUrlFragment";
    /**
     * The URL fragment of the Exchange Control Panel for Publishing.
     */
    UserSettingName[UserSettingName["EcpPublishingUrlFragment"] = 37] = "EcpPublishingUrlFragment";
    /**
     * The URL fragment of the Exchange Control Panel for photos.
     */
    UserSettingName[UserSettingName["EcpPhotoUrlFragment"] = 38] = "EcpPhotoUrlFragment";
    /**
     * The URL fragment of the Exchange Control Panel for People Connect.
     */
    UserSettingName[UserSettingName["EcpConnectUrlFragment"] = 39] = "EcpConnectUrlFragment";
    /**
     * The URL fragment of the Exchange Control Panel for Team Mailbox.
     */
    UserSettingName[UserSettingName["EcpTeamMailboxUrlFragment"] = 40] = "EcpTeamMailboxUrlFragment";
    /**
     * The URL fragment of the Exchange Control Panel for creating Team Mailbox.
     */
    UserSettingName[UserSettingName["EcpTeamMailboxCreatingUrlFragment"] = 41] = "EcpTeamMailboxCreatingUrlFragment";
    /**
     * The URL fragment of the Exchange Control Panel for editing Team Mailbox.
     */
    UserSettingName[UserSettingName["EcpTeamMailboxEditingUrlFragment"] = 42] = "EcpTeamMailboxEditingUrlFragment";
    /**
     * The URL fragment of the Exchange Control Panel for installing extension.
     */
    UserSettingName[UserSettingName["EcpExtensionInstallationUrlFragment"] = 43] = "EcpExtensionInstallationUrlFragment";
    /**
     * The external URL of the Exchange Control Panel.
     */
    UserSettingName[UserSettingName["ExternalEcpUrl"] = 44] = "ExternalEcpUrl";
    /**
     * The external URL of the Exchange Control Panel for VoiceMail Customization.
     */
    UserSettingName[UserSettingName["ExternalEcpVoicemailUrl"] = 45] = "ExternalEcpVoicemailUrl";
    /**
     * The external URL of the Exchange Control Panel for Email Subscriptions.
     */
    UserSettingName[UserSettingName["ExternalEcpEmailSubscriptionsUrl"] = 46] = "ExternalEcpEmailSubscriptionsUrl";
    /**
     * The external URL of the Exchange Control Panel for Text Messaging.
     */
    UserSettingName[UserSettingName["ExternalEcpTextMessagingUrl"] = 47] = "ExternalEcpTextMessagingUrl";
    /**
     * The external URL of the Exchange Control Panel for Delivery Reports.
     */
    UserSettingName[UserSettingName["ExternalEcpDeliveryReportUrl"] = 48] = "ExternalEcpDeliveryReportUrl";
    /**
     * The external URL of the Exchange Control Panel for RetentionPolicy Tags.
     */
    UserSettingName[UserSettingName["ExternalEcpRetentionPolicyTagsUrl"] = 49] = "ExternalEcpRetentionPolicyTagsUrl";
    /**
     * The external URL of the Exchange Control Panel for Publishing.
     */
    UserSettingName[UserSettingName["ExternalEcpPublishingUrl"] = 50] = "ExternalEcpPublishingUrl";
    /**
     * The external URL of the Exchange Control Panel for photos.
     */
    UserSettingName[UserSettingName["ExternalEcpPhotoUrl"] = 51] = "ExternalEcpPhotoUrl";
    /**
     * The external URL of the Exchange Control Panel for People Connect subscriptions.
     */
    UserSettingName[UserSettingName["ExternalEcpConnectUrl"] = 52] = "ExternalEcpConnectUrl";
    /**
     * The external URL of the Exchange Control Panel for Team Mailbox.
     */
    UserSettingName[UserSettingName["ExternalEcpTeamMailboxUrl"] = 53] = "ExternalEcpTeamMailboxUrl";
    /**
     * The external URL of the Exchange Control Panel for creating Team Mailbox.
     */
    UserSettingName[UserSettingName["ExternalEcpTeamMailboxCreatingUrl"] = 54] = "ExternalEcpTeamMailboxCreatingUrl";
    /**
     * The external URL of the Exchange Control Panel for editing Team Mailbox.
     */
    UserSettingName[UserSettingName["ExternalEcpTeamMailboxEditingUrl"] = 55] = "ExternalEcpTeamMailboxEditingUrl";
    /**
     * The external URL of the Exchange Control Panel for hiding Team Mailbox.
     */
    UserSettingName[UserSettingName["ExternalEcpTeamMailboxHidingUrl"] = 56] = "ExternalEcpTeamMailboxHidingUrl";
    /**
     * The external URL of the Exchange Control Panel for the extension installation.
     */
    UserSettingName[UserSettingName["ExternalEcpExtensionInstallationUrl"] = 57] = "ExternalEcpExtensionInstallationUrl";
    /**
     * The external URL of the Exchange Web Services.
     */
    UserSettingName[UserSettingName["ExternalEwsUrl"] = 58] = "ExternalEwsUrl";
    /**
     * The external URL of the Exchange Management Web Services.
     */
    UserSettingName[UserSettingName["ExternalEmwsUrl"] = 59] = "ExternalEmwsUrl";
    /**
     * The external URL of the Offline Address Book.
     */
    UserSettingName[UserSettingName["ExternalOABUrl"] = 60] = "ExternalOABUrl";
    /**
     * The external URL of the Photos service.
     */
    UserSettingName[UserSettingName["ExternalPhotosUrl"] = 61] = "ExternalPhotosUrl";
    /**
     * The external URL of the Unified Messaging services.
     */
    UserSettingName[UserSettingName["ExternalUMUrl"] = 62] = "ExternalUMUrl";
    /**
     * The external URLs of the Exchange web client.
     */
    UserSettingName[UserSettingName["ExternalWebClientUrls"] = 63] = "ExternalWebClientUrls";
    /**
     * Indicates that cross-organization sharing is enabled.
     */
    UserSettingName[UserSettingName["CrossOrganizationSharingEnabled"] = 64] = "CrossOrganizationSharingEnabled";
    /**
     * Collection of alternate mailboxes.
     */
    UserSettingName[UserSettingName["AlternateMailboxes"] = 65] = "AlternateMailboxes";
    /**
     * The version of the Client Access Server serving the request (e.g. 14.XX.YYY.ZZZ)
     */
    UserSettingName[UserSettingName["CasVersion"] = 66] = "CasVersion";
    /**
     * Comma-separated list of schema versions supported by Exchange Web Services. The schema version values  /// will be the same as the values of the ExchangeServerVersion enumeration.
     */
    UserSettingName[UserSettingName["EwsSupportedSchemas"] = 67] = "EwsSupportedSchemas";
    /**
     * The internal connection settings list for pop protocol
     */
    UserSettingName[UserSettingName["InternalPop3Connections"] = 68] = "InternalPop3Connections";
    /**
     * The external connection settings list for pop protocol
     */
    UserSettingName[UserSettingName["ExternalPop3Connections"] = 69] = "ExternalPop3Connections";
    /**
     * The internal connection settings list for imap4 protocol
     */
    UserSettingName[UserSettingName["InternalImap4Connections"] = 70] = "InternalImap4Connections";
    /**
     * The external connection settings list for imap4 protocol
     */
    UserSettingName[UserSettingName["ExternalImap4Connections"] = 71] = "ExternalImap4Connections";
    /**
     * The internal connection settings list for smtp protocol
     */
    UserSettingName[UserSettingName["InternalSmtpConnections"] = 72] = "InternalSmtpConnections";
    /**
     * The external connection settings list for smtp protocol
     */
    UserSettingName[UserSettingName["ExternalSmtpConnections"] = 73] = "ExternalSmtpConnections";
    /**
     * If set to "Off" then clients should not connect via this protocol.  /// The protocol contents are for informational purposes only.
     */
    UserSettingName[UserSettingName["InternalServerExclusiveConnect"] = 74] = "InternalServerExclusiveConnect";
    /**
     * The version of the Exchange Web Services server ExternalEwsUrl is pointing to.
     */
    UserSettingName[UserSettingName["ExternalEwsVersion"] = 75] = "ExternalEwsVersion";
    /**
     * Mobile Mailbox policy settings.
     */
    UserSettingName[UserSettingName["MobileMailboxPolicy"] = 76] = "MobileMailboxPolicy";
    /**
     * Document sharing locations and their settings.
     */
    UserSettingName[UserSettingName["DocumentSharingLocations"] = 77] = "DocumentSharingLocations";
    /**
     * Whether the user account is an MSOnline account.
     */
    UserSettingName[UserSettingName["UserMSOnline"] = 78] = "UserMSOnline";
    /**
     * The authentication methods supported by the RPC client server.
     */
    UserSettingName[UserSettingName["InternalMailboxServerAuthenticationMethods"] = 79] = "InternalMailboxServerAuthenticationMethods";
    /**
     * Version of the server hosting the user's mailbox.
     */
    UserSettingName[UserSettingName["MailboxVersion"] = 80] = "MailboxVersion";
    /**
     * Sharepoint MySite Host URL.
     */
    UserSettingName[UserSettingName["SPMySiteHostURL"] = 81] = "SPMySiteHostURL";
    /**
     * Site mailbox creation URL in SharePoint.
     */
    /// </summary>
    UserSettingName[UserSettingName["SiteMailboxCreationURL"] = 82] = "SiteMailboxCreationURL";
    /**
     * The FQDN of the server used for internal RPC/HTTP connectivity.
     */
    UserSettingName[UserSettingName["InternalRpcHttpServer"] = 83] = "InternalRpcHttpServer";
    /**
     * Indicates whether SSL is required for internal RPC/HTTP connectivity.
     */
    UserSettingName[UserSettingName["InternalRpcHttpConnectivityRequiresSsl"] = 84] = "InternalRpcHttpConnectivityRequiresSsl";
    /**
     * The authentication method used for internal RPC/HTTP connectivity.
     */
    UserSettingName[UserSettingName["InternalRpcHttpAuthenticationMethod"] = 85] = "InternalRpcHttpAuthenticationMethod";
    /**
     * If set to "On" then clients should only connect via this protocol.
     */
    UserSettingName[UserSettingName["ExternalServerExclusiveConnect"] = 86] = "ExternalServerExclusiveConnect";
    /**
     * If set, then clients can call the server via XTC
     */
    UserSettingName[UserSettingName["ExchangeRpcUrl"] = 87] = "ExchangeRpcUrl";
    /**
     * If set to false then clients should not show the GAL by default, but show the contact list.
     */
    UserSettingName[UserSettingName["ShowGalAsDefaultView"] = 88] = "ShowGalAsDefaultView";
    /**
     * AutoDiscover Primary SMTP Address for the user.
     */
    UserSettingName[UserSettingName["AutoDiscoverSMTPAddress"] = 89] = "AutoDiscoverSMTPAddress";
    /**
     * The 'interop' external URL of the Exchange Web Services.  /// By interop it means a URL to E14 (or later) server that can serve mailboxes  /// that are hosted in downlevel server (E2K3 and earlier).
     */
    UserSettingName[UserSettingName["InteropExternalEwsUrl"] = 90] = "InteropExternalEwsUrl";
    /**
     * Version of server InteropExternalEwsUrl is pointing to.
     */
    UserSettingName[UserSettingName["InteropExternalEwsVersion"] = 91] = "InteropExternalEwsVersion";
    /**
     * Public Folder (Hierarchy) information
     */
    UserSettingName[UserSettingName["PublicFolderInformation"] = 92] = "PublicFolderInformation";
    /**
     * The version appropriate URL of the AutoDiscover service that should answer this query.
     */
    UserSettingName[UserSettingName["RedirectUrl"] = 93] = "RedirectUrl";
    /**
     * The URL of the Exchange Web Services for Office365 partners.
     */
    UserSettingName[UserSettingName["EwsPartnerUrl"] = 94] = "EwsPartnerUrl";
    /**
     * SSL certificate name
     */
    UserSettingName[UserSettingName["CertPrincipalName"] = 95] = "CertPrincipalName";
    /**
     * The grouping hint for certain clients.
     */
    UserSettingName[UserSettingName["GroupingInformation"] = 96] = "GroupingInformation";
    /**
     * MapiHttpEnabled ///todo: not available any more in official repo
     */
    UserSettingName[UserSettingName["MapiHttpEnabled"] = 97] = "MapiHttpEnabled";
    /**
     * Internal OutlookService URL
     */
    UserSettingName[UserSettingName["InternalOutlookServiceUrl"] = 98] = "InternalOutlookServiceUrl";
    /**
     * External OutlookService URL
     */
    UserSettingName[UserSettingName["ExternalOutlookServiceUrl"] = 99] = "ExternalOutlookServiceUrl";
})(UserSettingName = exports.UserSettingName || (exports.UserSettingName = {}));
