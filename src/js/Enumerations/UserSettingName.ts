
/**
 * User settings that can be requested using GetUserSettings.
 * 
 * /remarks/  Add new values to the end and keep in sync with Microsoft.Exchange.Autodiscover.ConfigurationSettings.UserConfigurationSettingName.
 */
export enum UserSettingName {

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
  /// </summary>
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