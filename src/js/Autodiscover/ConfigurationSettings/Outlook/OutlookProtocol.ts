import LazyMember = require("../../../Core/LazyMember");
import OutlookProtocolType = require("../../../Enumerations/OutlookProtocolType");
import UserSettingName = require("../../../Enumerations/UserSettingName");
import WebClientUrlCollection = require("../../WebClientUrlCollection");
import GetUserSettingsResponse = require("../../Responses/GetUserSettingsResponse");
import EwsXmlReader = require("../../../Core/EwsXmlReader");

class OutlookProtocol {
    private static EXPR: string = "EXPR";
    private static EXCH: string = "EXCH";
    private static WEB: string = "WEB";
    ProtocolType: OutlookProtocolType;
    private ConverterDictionary: any;//System.Collections.Generic.Dictionary<UserSettingName, System.Func<OutlookProtocol, any>>;
    static AvailableUserSettings: any;//System.Collections.Generic.List<UserSettingName>;
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
    private externalOutlookWebAccessUrls: WebClientUrlCollection;
    private internalOutlookWebAccessUrls: WebClientUrlCollection;
    private static commonProtocolSettings: LazyMember<any>;
    private static internalProtocolSettings: LazyMember<any>;
    private static externalProtocolSettings: LazyMember<any>;
    private static internalProtocolConverterDictionary: LazyMember<any>;
    private static externalProtocolConverterDictionary: LazyMember<any>;
    private static webProtocolConverterDictionary: LazyMember<any>;
    private static availableUserSettings: LazyMember<any>;
    private static protocolNameToTypeMap: LazyMember<any>;
    ConvertEcpFragmentToUrl(fragment: string): string { throw new Error("Not implemented."); }
    ConvertToUserSettings(requestedSettings: UserSettingName[], response: GetUserSettingsResponse): any { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsXmlReader): any { throw new Error("Not implemented."); }
    LoadWebClientUrlsFromXml(reader: EwsXmlReader, webClientUrls: WebClientUrlCollection, elementName: string): any { throw new Error("Not implemented."); }
    ProtocolNameToType(protocolName: string): OutlookProtocolType { throw new Error("Not implemented."); }
}
export = OutlookProtocol;

//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;
