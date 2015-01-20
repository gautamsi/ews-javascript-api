declare module Microsoft.Exchange.WebServices.Autodiscover {
    class AlternateMailbox {
        Type: string;
        DisplayName: string;
        LegacyDN: string;
        Server: string;
        SmtpAddress: string;
        OwnerSmtpAddress: string;
        private type: string;
        private displayName: string;
        private legacyDN: string;
        private server: string;
        private smtpAddress: string;
        private ownerSmtpAddress: string;
        LoadFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsXmlReader): Microsoft.Exchange.WebServices.Autodiscover.AlternateMailbox; //{ throw new Error("Not implemented.");}
    }
    class AutodiscoverDnsClient {
        private service: Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverService;
        private static randomTieBreakerSelector: any;
        FindAutodiscoverHostFromSrv(domain: string): string; //{ throw new Error("Not implemented.");}
        FindBestMatchingSrvRecord(domain: string): Microsoft.Exchange.WebServices.Dns.DnsSrvRecord; //{ throw new Error("Not implemented.");}
    }
    class AutodiscoverError {
        Time: string;
        Id: string;
        ErrorCode: number;
        Message: string;
        DebugData: string;
        private time: string;
        private id: string;
        private errorCode: number;
        private message: string;
        private debugData: string;
        Parse(reader: Microsoft.Exchange.WebServices.Data.EwsXmlReader): Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverError; //{ throw new Error("Not implemented.");}
    }
    class AutodiscoverRedirectionUrlValidationCallback extends System.MulticastDelegate {
        BeginInvoke(redirectionUrl: string, callback: System.AsyncCallback, object: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
        EndInvoke(result: System.IAsyncResult): boolean; //{ throw new Error("Not implemented.");}
        Invoke(redirectionUrl: string): boolean; //{ throw new Error("Not implemented.");}
    }
    class AutodiscoverRemoteException extends Microsoft.Exchange.WebServices.Data.ServiceRemoteException {
        Error: Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverError;
        private error: Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverError;
    }
    class AutodiscoverResponseException extends Microsoft.Exchange.WebServices.Data.ServiceRemoteException {
        ErrorCode: Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverErrorCode;
        private errorCode: Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverErrorCode;
    }
    class ComparisonHelpers {
        CaseInsensitiveContains(collection: System.Collections.ICollection, match: string): boolean; //{ throw new Error("Not implemented.");}
    }
    class ConfigurationSettingsBase {
        ResponseType: Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverResponseType;
        RedirectTarget: string;
        Error: Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverError;
        private error: Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverError;
        ConvertSettings(smtpAddress: string, requestedSettings: System.Collections.Generic.List<Microsoft.Exchange.WebServices.Autodiscover.UserSettingName>): Microsoft.Exchange.WebServices.Autodiscover.GetUserSettingsResponse; //{ throw new Error("Not implemented.");}
        GetNamespace(): string; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsXmlReader): any; //{ throw new Error("Not implemented.");}
        MakeRedirectionResponse(redirectUrl: System.Uri): any; //{ throw new Error("Not implemented.");}
        TryReadCurrentXmlElement(reader: Microsoft.Exchange.WebServices.Data.EwsXmlReader): boolean; //{ throw new Error("Not implemented.");}
    }
    class DirectoryHelper {
        Service: Microsoft.Exchange.WebServices.Data.ExchangeServiceBase;
        private service: Microsoft.Exchange.WebServices.Data.ExchangeServiceBase;
        GetAutodiscoverScpUrlsForDomain(domainName: string): System.Collections.Generic.List<string>; //{ throw new Error("Not implemented.");}
        GetScpUrlList(domainName: string, ldapPath: string, maxHops: any): System.Collections.Generic.List<string>; //{ throw new Error("Not implemented.");}
        GetSiteName(): string; //{ throw new Error("Not implemented.");}
        TraceMessage(message: string): any; //{ throw new Error("Not implemented.");}
    }
    class DocumentSharingLocation {
        ServiceUrl: string;
        LocationUrl: string;
        DisplayName: string;
        SupportedFileExtensions: System.Collections.Generic.IEnumerable<string>;
        ExternalAccessAllowed: boolean;
        AnonymousAccessAllowed: boolean;
        CanModifyPermissions: boolean;
        IsDefault: boolean;
        private serviceUrl: string;
        private locationUrl: string;
        private displayName: string;
        private supportedFileExtensions: System.Collections.Generic.IEnumerable<string>;
        private externalAccessAllowed: boolean;
        private anonymousAccessAllowed: boolean;
        private canModifyPermissions: boolean;
        private isDefault: boolean;
        LoadFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsXmlReader): Microsoft.Exchange.WebServices.Autodiscover.DocumentSharingLocation; //{ throw new Error("Not implemented.");}
    }
    class OutlookAccount {
        AccountType: string;
        ResponseType: Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverResponseType;
        RedirectTarget: string;
        private protocols: System.Collections.Generic.Dictionary<TKey, TValue>;
        private alternateMailboxes: Microsoft.Exchange.WebServices.Autodiscover.AlternateMailboxCollection;
        ConvertToUserSettings(requestedSettings: System.Collections.Generic.List<Microsoft.Exchange.WebServices.Autodiscover.UserSettingName>, response: Microsoft.Exchange.WebServices.Autodiscover.GetUserSettingsResponse): any; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsXmlReader): any; //{ throw new Error("Not implemented.");}
    }
    class OutlookConfigurationSettings extends Microsoft.Exchange.WebServices.Autodiscover.ConfigurationSettingsBase {
        ResponseType: Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverResponseType;
        RedirectTarget: string;
        private user: Microsoft.Exchange.WebServices.Autodiscover.OutlookUser;
        private account: Microsoft.Exchange.WebServices.Autodiscover.OutlookAccount;
        private static allOutlookProviderSettings: Microsoft.Exchange.WebServices.Data.LazyMember<T>;
        ConvertSettings(smtpAddress: string, requestedSettings: System.Collections.Generic.List<Microsoft.Exchange.WebServices.Autodiscover.UserSettingName>): Microsoft.Exchange.WebServices.Autodiscover.GetUserSettingsResponse; //{ throw new Error("Not implemented.");}
        GetNamespace(): string; //{ throw new Error("Not implemented.");}
        IsAvailableUserSetting(setting: Microsoft.Exchange.WebServices.Autodiscover.UserSettingName): boolean; //{ throw new Error("Not implemented.");}
        MakeRedirectionResponse(redirectUrl: System.Uri): any; //{ throw new Error("Not implemented.");}
        ReportUnsupportedSettings(requestedSettings: System.Collections.Generic.List<Microsoft.Exchange.WebServices.Autodiscover.UserSettingName>, response: Microsoft.Exchange.WebServices.Autodiscover.GetUserSettingsResponse): any; //{ throw new Error("Not implemented.");}
        TryReadCurrentXmlElement(reader: Microsoft.Exchange.WebServices.Data.EwsXmlReader): boolean; //{ throw new Error("Not implemented.");}
    }
    class OutlookProtocol {
        ProtocolType: Microsoft.Exchange.WebServices.Autodiscover.OutlookProtocolType;
        private ConverterDictionary: System.Collections.Generic.Dictionary<Microsoft.Exchange.WebServices.Autodiscover.UserSettingName, System.Func<Microsoft.Exchange.WebServices.Autodiscover.OutlookProtocol, any>>;
        static AvailableUserSettings: System.Collections.Generic.List<Microsoft.Exchange.WebServices.Autodiscover.UserSettingName>;
        private activeDirectoryServer: string;
        private authPackage: string;
        private availabilityServiceUrl: string;
        private ecpUrl: string;
        private ecpUrlAggr: string;
        private ecpUrlMt: string;
        private ecpUrlPublish: string;
        private ecpUrlPhoto: string;
        private ecpUrlConnect: string;
        private ecpUrlRet: string;
        private ecpUrlSms: string;
        private ecpUrlUm: string;
        private ecpUrlTm: string;
        private ecpUrlTmCreating: string;
        private ecpUrlTmEditing: string;
        private ecpUrlTmHiding: string;
        private siteMailboxCreationURL: string;
        private ecpUrlExtInstall: string;
        private exchangeWebServicesUrl: string;
        private exchangeManagementWebServicesUrl: string;
        private mailboxDN: string;
        private offlineAddressBookUrl: string;
        private exchangeRpcUrl: string;
        private exchangeWebServicesPartnerUrl: string;
        private publicFolderServer: string;
        private server: string;
        private serverDN: string;
        private unifiedMessagingUrl: string;
        private sharingEnabled: boolean;
        private sslEnabled: boolean;
        private serverExclusiveConnect: boolean;
        private certPrincipalName: string;
        private groupingInformation: string;
        private MapiHttpEnabled: boolean;
        private externalOutlookWebAccessUrls: Microsoft.Exchange.WebServices.Autodiscover.WebClientUrlCollection;
        private internalOutlookWebAccessUrls: Microsoft.Exchange.WebServices.Autodiscover.WebClientUrlCollection;
        private static commonProtocolSettings: Microsoft.Exchange.WebServices.Data.LazyMember<T>;
        private static internalProtocolSettings: Microsoft.Exchange.WebServices.Data.LazyMember<T>;
        private static externalProtocolSettings: Microsoft.Exchange.WebServices.Data.LazyMember<T>;
        private static internalProtocolConverterDictionary: Microsoft.Exchange.WebServices.Data.LazyMember<T>;
        private static externalProtocolConverterDictionary: Microsoft.Exchange.WebServices.Data.LazyMember<T>;
        private static webProtocolConverterDictionary: Microsoft.Exchange.WebServices.Data.LazyMember<T>;
        private static availableUserSettings: Microsoft.Exchange.WebServices.Data.LazyMember<T>;
        private static protocolNameToTypeMap: Microsoft.Exchange.WebServices.Data.LazyMember<T>;
        ConvertEcpFragmentToUrl(fragment: string): string; //{ throw new Error("Not implemented.");}
        ConvertToUserSettings(requestedSettings: System.Collections.Generic.List<Microsoft.Exchange.WebServices.Autodiscover.UserSettingName>, response: Microsoft.Exchange.WebServices.Autodiscover.GetUserSettingsResponse): any; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsXmlReader): any; //{ throw new Error("Not implemented.");}
        LoadWebClientUrlsFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsXmlReader, webClientUrls: Microsoft.Exchange.WebServices.Autodiscover.WebClientUrlCollection, elementName: string): any; //{ throw new Error("Not implemented.");}
        ProtocolNameToType(protocolName: string): Microsoft.Exchange.WebServices.Autodiscover.OutlookProtocolType; //{ throw new Error("Not implemented.");}
    }
    class OutlookUser {
        static AvailableUserSettings: System.Collections.Generic.IEnumerable<Microsoft.Exchange.WebServices.Autodiscover.UserSettingName>;
        private displayName: string;
        private legacyDN: string;
        private deploymentId: string;
        private autodiscoverAMTPAddress: string;
        private static converterDictionary: Microsoft.Exchange.WebServices.Data.LazyMember<T>;
        ConvertToUserSettings(requestedSettings: System.Collections.Generic.List<Microsoft.Exchange.WebServices.Autodiscover.UserSettingName>, response: Microsoft.Exchange.WebServices.Autodiscover.GetUserSettingsResponse): any; //{ throw new Error("Not implemented.");}
        LoadFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsXmlReader): any; //{ throw new Error("Not implemented.");}
    }
    class ProtocolConnection {
        EncryptionMethod: string;
        Hostname: string;
        Port: number;
        private encryptionMethod: string;
        private hostname: string;
        private port: number;
        LoadFromXml(reader: Microsoft.Exchange.WebServices.Data.EwsXmlReader): Microsoft.Exchange.WebServices.Autodiscover.ProtocolConnection; //{ throw new Error("Not implemented.");}
    }
}
