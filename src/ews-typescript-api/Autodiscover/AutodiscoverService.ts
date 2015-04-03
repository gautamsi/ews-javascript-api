import ExchangeVersion = require("../Enumerations/ExchangeVersion");//enum
import ExchangeServiceBase = require("../Core/ExchangeServiceBase");
import EwsUtilities = require("../Core/EwsUtilities");
import UserSettingName = require("../Enumerations/UserSettingName");
import DomainSettingName = require("../Enumerations/DomainSettingName");
import GetDomainSettingsRequest = require("./Requests/GetDomainSettingsRequest");
import GetDomainSettingsResponse = require("./Responses/GetDomainSettingsResponse");
import GetUserSettingsResponse = require("./Responses/GetUserSettingsResponse");
import GetUserSettingsRequest = require("./Requests/GetUserSettingsRequest");

import ExtensionMethods = require("../ExtensionMethods");


class AutodiscoverService extends ExchangeServiceBase {
    get Domain(): string {
        return this.domain;
    }
    get Url(): string {
        return this.url;
    }//System.Uri;
    IsExternal: boolean;
    //RedirectionUrlValidationCallback: AutodiscoverRedirectionUrlValidationCallback;
    DnsServerAddress: any;// System.Net.IPAddress;
    EnableScpLookup: boolean;
    GetScpUrlsForDomainCallback: Function;// System.Func<string, System.Collections.Generic.ICollection<string>>;
    private domain: string;
    private isExternal: boolean;
    private url: string;//System.Uri;
    //private redirectionUrlValidationCallback: AutodiscoverRedirectionUrlValidationCallback;
    //private dnsClient: AutodiscoverDnsClient;
    private dnsServerAddress: any;// System.Net.IPAddress;
    private enableScpLookup: boolean;
    private static LegacyPathRegex: any;


    private static AutodiscoverLegacyPath: string = "/autodiscover/autodiscover.xml";
    private static AutodiscoverLegacyUrl: string = "{0}://{1}" + AutodiscoverService.AutodiscoverLegacyPath;
    private static AutodiscoverLegacyHttpsUrl: string = "https://{0}" + AutodiscoverService.AutodiscoverLegacyPath;
    private static AutodiscoverLegacyHttpUrl: string = "http://{0}" + AutodiscoverService.AutodiscoverLegacyPath;
    private static AutodiscoverSoapHttpsUrl: string = "https://{0}/autodiscover/autodiscover.svc";
    private static AutodiscoverSoapWsSecurityHttpsUrl: string = AutodiscoverService.AutodiscoverSoapHttpsUrl + "/wssecurity";
    private static AutodiscoverSoapWsSecuritySymmetricKeyHttpsUrl: string = AutodiscoverService.AutodiscoverSoapHttpsUrl + "/wssecurity/symmetrickey";
    private static AutodiscoverSoapWsSecurityX509CertHttpsUrl: string = AutodiscoverService.AutodiscoverSoapHttpsUrl + "/wssecurity/x509cert";
    private static AutodiscoverRequestNamespace: string = "http://schemas.microsoft.com/exchange/autodiscover/outlook/requestschema/2006";
    static AutodiscoverMaxRedirections: number = 10;
    private static AutodiscoverSoapEnabledHeaderName: string = "X-SOAP-Enabled";
    private static AutodiscoverWsSecurityEnabledHeaderName: string = "X-WSSecurity-Enabled";
    private static AutodiscoverWsSecuritySymmetricKeyEnabledHeaderName: string = "X-WSSecurity-SymmetricKey-Enabled";
    private static AutodiscoverWsSecurityX509CertEnabledHeaderName: string = "X-WSSecurity-X509Cert-Enabled";
    private static AutodiscoverOAuthEnabledHeaderName: string = "X-OAuth-Enabled";
    private static MinimumRequestVersionForAutoDiscoverSoapService: ExchangeVersion = ExchangeVersion.Exchange2010;


    constructor(
        url: string,
        domain: string,
        requestedServerVersion: ExchangeVersion) {
        super(requestedServerVersion);

        EwsUtilities.ValidateDomainNameAllowNull(domain, "domain");

        this.url = url;
        this.domain = domain;
    }


    CallRedirectionUrlValidationCallback(redirectionUrl: string): boolean { throw new Error("Not implemented."); }
    DefaultAutodiscoverRedirectionUrlValidationCallback(redirectionUrl: string): boolean { throw new Error("Not implemented."); }
    DefaultGetScpUrlsForDomain(domainName: string): string[] { return null; }// System.Collections.Generic.ICollection<string>{ throw new Error("Not implemented.");}
    //DisableScpLookupIfDuplicateRedirection(emailAddress: string, redirectionEmailAddresses: string[]): any{ throw new Error("Not implemented.");}
    GetAutodiscoverEndpointUrl(host: string): string {//System.Uri{
        var autodiscoverUrl: string;

        //if (this.TryGetAutodiscoverEndpointUrl(host, out autodiscoverUrl)) {
        //    return autodiscoverUrl;
        //}
        //else {
        //    throw new AutodiscoverLocalException(Strings.NoSoapOrWsSecurityEndpointAvailable);
        //}

        return "";
    }
    GetAutodiscoverServiceHosts(domainName: string, scpHostCount: number): string[] { throw new Error("Not implemented."); }
    GetAutodiscoverServiceUrls(domainName: string, scpHostCount: number): string[] {// System.Collections.Generic.List<T>{
        var urls: string[];

        if (this.enableScpLookup) {
            // Get SCP URLs
            //Func < string, ICollection <string>> callback = this.GetScpUrlsForDomainCallback ?? this.DefaultGetScpUrlsForDomain;
            //ICollection < string> scpUrls = callback(domainName);
            //foreach(string str in scpUrls)
            //{
            //    urls.Add(new Uri(str));
            //}
        }

        scpHostCount = urls.length;

        // As a fallback, add autodiscover URLs base on the domain name.
        urls.push(ExtensionMethods.stringFormatting.Format(AutodiscoverService.AutodiscoverLegacyHttpsUrl, "autodiscover." + domainName));
        urls.push(ExtensionMethods.stringFormatting.Format(AutodiscoverService.AutodiscoverLegacyHttpsUrl, domainName));

        return urls;
    }
    //GetDomainSettings(domains: System.Collections.Generic.List<string>, settings: System.Collections.Generic.List<DomainSettingName>, requestedVersion: Data.ExchangeVersion): GetDomainSettingsResponseCollection{ throw new Error("Not implemented.");}
    //GetDomainSettings(domains: System.Collections.Generic.IEnumerable<string>, requestedVersion: Data.ExchangeVersion, domainSettingNames: any): GetDomainSettingsResponseCollection{ throw new Error("Not implemented.");}
    //GetDomainSettings(domain: string, requestedVersion: Data.ExchangeVersion, domainSettingNames: DomainSettingName[]): GetDomainSettingsResponse{
    GetDomainSettings(domain: string, domainSettingNames: DomainSettingName[]): WinJS.Promise<GetDomainSettingsResponse> {
        var request = new GetDomainSettingsRequest(this, this.url);
        request.Settings = domainSettingNames;
        request.Domains = [domain];
        var response = request.Execute();
        return <any>response;
    }

    //GetEndpointsFromHttpWebResponse(response: Data.IEwsHttpWebResponse): Data.AutodiscoverEndpoints{ throw new Error("Not implemented.");}
    //GetLegacyUserSettings(emailAddress: string): any{ throw new Error("Not implemented.");}
    //GetLegacyUserSettingsAtUrl(emailAddress: string, url: System.Uri): any{ throw new Error("Not implemented.");}
    //GetRedirectionUrlFromDnsSrvRecord(domainName: string): System.Uri{ throw new Error("Not implemented.");}
    //GetRedirectUrl(domainName: string): System.Uri{ throw new Error("Not implemented.");}
    //GetSettings(identities: System.Collections.Generic.List<string>, settings: System.Collections.Generic.List<T>, requestedVersion: Data.ExchangeVersion, getSettingsMethod: AutodiscoverService.GetSettingsMethod<TGetSettingsResponseCollection, TSettingName>, getDomainMethod: any): any{ throw new Error("Not implemented.");}
    GetUserSettings(userSmtpAddresses: string[], userSettingNames: UserSettingName[]): WinJS.Promise<GetUserSettingsResponse> {
        var request = new GetUserSettingsRequest(this, this.url);
        request.Settings = userSettingNames;
        request.SmtpAddresses = userSmtpAddresses;

        var response = request.Execute();
        return <any>response;
    }
    //GetUserSettings(smtpAddresses: System.Collections.Generic.List<string>, settings: System.Collections.Generic.List<UserSettingName>): GetUserSettingsResponseCollection{ throw new Error("Not implemented.");}
    //GetUsersSettings(userSmtpAddresses: System.Collections.Generic.IEnumerable<string>, userSettingNames: any): GetUserSettingsResponseCollection{ throw new Error("Not implemented.");}
    //InternalGetDomainSettings(domains: System.Collections.Generic.List<string>, settings: System.Collections.Generic.List<DomainSettingName>, requestedVersion: Data.ExchangeVersion, autodiscoverUrl: any): GetDomainSettingsResponseCollection{ throw new Error("Not implemented.");}
    //InternalGetLegacyUserSettings(emailAddress: string, requestedSettings: System.Collections.Generic.List<UserSettingName>): GetUserSettingsResponse{ throw new Error("Not implemented.");}
    //InternalGetLegacyUserSettings(emailAddress: string, redirectionEmailAddresses: System.Collections.Generic.List<string>, currentHop: any): any{ throw new Error("Not implemented.");}
    //InternalGetSoapUserSettings(smtpAddress: string, requestedSettings: System.Collections.Generic.List<UserSettingName>): GetUserSettingsResponse{ throw new Error("Not implemented.");}
    //InternalGetUserSettings(smtpAddresses: System.Collections.Generic.List<string>, settings: System.Collections.Generic.List<UserSettingName>, requestedVersion: Data.ExchangeVersion, autodiscoverUrl: any): GetUserSettingsResponseCollection{ throw new Error("Not implemented.");}
    //PrepareHttpWebRequestForUrl(url: System.Uri): Data.IEwsHttpWebRequest{ throw new Error("Not implemented.");}
    //ProcessHttpErrorResponse(httpWebResponse: Data.IEwsHttpWebResponse, webException: any): any{ throw new Error("Not implemented.");}
    ProcessHttpErrorResponse(httpWebResponse: XMLHttpRequest, webException: any): any { /*throw new Error("Not implemented.")*/; }
    TraceResponse(response: XMLHttpRequest, memoryStream: any): any {
        //todo: implement tracing

        //this.ProcessHttpResponseHeaders(TraceFlags.AutodiscoverResponseHttpHeaders, response);

        //if (this.TraceEnabled) {
        //    if (!string.IsNullOrEmpty(response.ContentType) &&
        //        (response.ContentType.StartsWith("text/", StringComparison.OrdinalIgnoreCase) ||
        //        response.ContentType.StartsWith("application/soap", StringComparison.OrdinalIgnoreCase))) {
        //        this.TraceXml(TraceFlags.AutodiscoverResponse, memoryStream);
        //    }
        //    else {
        //        this.TraceMessage(TraceFlags.AutodiscoverResponse, "Non-textual response");
        //    }
        //}
    }
    //TryGetAutodiscoverEndpointUrl(host: string, url: any): boolean{ throw new Error("Not implemented.");}
    //TryGetEnabledEndpointsForHost(host: any, endpoints: any): boolean{ throw new Error("Not implemented.");}
    //TryGetPartnerAccess(targetTenantDomain: string, partnerAccessCredentials: any, targetTenantAutodiscoverUrl: any): boolean{ throw new Error("Not implemented.");}
    //TryGetRedirectionResponse(response: Data.IEwsHttpWebResponse, redirectUrl: any): boolean{ throw new Error("Not implemented.");}
    //TryLastChanceHostRedirection(emailAddress: string, redirectionUrl: string, settings: any): boolean{ throw new Error("Not implemented.");}
    //WriteLegacyAutodiscoverRequest(emailAddress: string, settings: ConfigurationSettingsBase, writer: any): any{ throw new Error("Not implemented.");}
}

export = AutodiscoverService;

    //export module AutodiscoverService {
    //    export var private static AutodiscoverLegacyPath: string = "/autodiscover/autodiscover.xml";
    //    export var private static AutodiscoverLegacyUrl: string = "{0}://{1}/autodiscover/autodiscover.xml";
    //    export var private static AutodiscoverLegacyHttpsUrl: string = "https://{0}/autodiscover/autodiscover.xml";
    //    export var private static AutodiscoverLegacyHttpUrl: string = "http://{0}/autodiscover/autodiscover.xml";
    //    export var private static AutodiscoverSoapHttpsUrl: string = "https://{0}/autodiscover/autodiscover.svc";
    //    export var private static AutodiscoverSoapWsSecurityHttpsUrl: string = "https://{0}/autodiscover/autodiscover.svc/wssecurity";
    //    export var private static AutodiscoverSoapWsSecuritySymmetricKeyHttpsUrl: string = "https://{0}/autodiscover/autodiscover.svc/wssecurity/symmetrickey";
    //    export var private static AutodiscoverSoapWsSecurityX509CertHttpsUrl: string = "https://{0}/autodiscover/autodiscover.svc/wssecurity/x509cert";
    //    export var private static AutodiscoverRequestNamespace: string = "http://schemas.microsoft.com/exchange/autodiscover/outlook/requestschema/2006";
    //    export var static AutodiscoverMaxRedirections: number = 10;
    //    export var private static AutodiscoverSoapEnabledHeaderName: string = "X-SOAP-Enabled";
    //    export var private static AutodiscoverWsSecurityEnabledHeaderName: string = "X-WSSecurity-Enabled";
    //    export var private static AutodiscoverWsSecuritySymmetricKeyEnabledHeaderName: string = "X-WSSecurity-SymmetricKey-Enabled";
    //    export var private static AutodiscoverWsSecurityX509CertEnabledHeaderName: string = "X-WSSecurity-X509Cert-Enabled";
    //    export var private static AutodiscoverOAuthEnabledHeaderName: string = "X-OAuth-Enabled";
    //    export var private static MinimumRequestVersionForAutoDiscoverSoapService: Data.ExchangeVersion = Exchange2010;
    //}

//todo convert to delegate type interface
interface GetSettingsMethod<TGetSettingsResponseCollection, TSettingName> {
    (smtpAddresses: string[], settings: TSettingName[], requestedVersion: ExchangeVersion, autodiscoverUrl: any /*System.Uri*/ ): TGetSettingsResponseCollection
}
//class GetSettingsMethod<TGetSettingsResponseCollection, TSettingName> extends System.MulticastDelegate {
//    BeginInvoke(smtpAddresses: System.Collections.Generic.List<string>, settings: System.Collections.Generic.List<T>, requestedVersion: Data.ExchangeVersion, autodiscoverUrl: any, callback: System.AsyncCallback, object: any): System.IAsyncResult { throw new Error("Not implemented."); }
//    EndInvoke(autodiscoverUrl: any, result: System.IAsyncResult): TGetSettingsResponseCollection { throw new Error("Not implemented."); }
//    Invoke(smtpAddresses: System.Collections.Generic.List<string>, settings: System.Collections.Generic.List<T>, requestedVersion: Data.ExchangeVersion, autodiscoverUrl: any): TGetSettingsResponseCollection { throw new Error("Not implemented."); }
//}



//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;