//import {WindowsLiveCredentials} from "../Credentials/WindowsLiveCredentials";
import {AutodiscoverDnsClient} from "./AutodiscoverDnsClient";
import {AutodiscoverEndpoints} from "../Enumerations/AutodiscoverEndpoints";
import {AutodiscoverErrorCode} from "../Enumerations/AutodiscoverErrorCode";
import {AutodiscoverLocalException} from "../Exceptions/AutodiscoverLocalException";
import {AutodiscoverRedirectionUrlValidationCallback} from "./AutodiscoverServiceDelegates";
import {AutodiscoverRequest} from "./Requests/AutodiscoverRequest";
import {DomainSettingName} from "../Enumerations/DomainSettingName";
import {EwsLogging} from "../Core/EwsLogging";
import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {GetDomainSettingsRequest} from "./Requests/GetDomainSettingsRequest";
import {GetDomainSettingsResponse} from "./Responses/GetDomainSettingsResponse";
import {GetDomainSettingsResponseCollection} from "./Responses/GetDomainSettingsResponseCollection";
import {GetUserSettingsRequest} from "./Requests/GetUserSettingsRequest";
import {GetUserSettingsResponse} from "./Responses/GetUserSettingsResponse";
import {GetUserSettingsResponseCollection} from "./Responses/GetUserSettingsResponseCollection";
import {IOutParam} from "../Interfaces/IOutParam";
import {IPromise, IXHROptions} from "../Interfaces";
import {IRefParam} from "../Interfaces/IRefParam";
import {OAuthCredentials} from "../Credentials/OAuthCredentials";
import {PartnerTokenCredentials} from "../Credentials/PartnerTokenCredentials";
import {PromiseFactory} from "../PromiseFactory";
import {ServiceValidationException} from "../Exceptions/ServiceValidationException";
import {ServiceVersionException} from "../Exceptions/ServiceVersionException";
import {StringHelper, EnumHelper, UriHelper} from "../ExtensionMethods";
import {Strings} from "../Strings";
import {TraceFlags} from "../Enumerations/TraceFlags";
import {Uri} from "../Uri";
import {UserSettingName} from "../Enumerations/UserSettingName";
import {WindowsLiveCredentials} from "../Credentials/WindowsLiveCredentials";
import {X509CertificateCredentials} from "../Credentials/X509CertificateCredentials";
import {XHRFactory} from "../XHRFactory";

import {ExchangeServiceBase} from "../Core/ExchangeServiceBase";
/**
 * Represents a binding to the Exchange Autodiscover Service.
 * 
 * @sealed
 */
export class AutodiscoverService extends ExchangeServiceBase {

    /* #region Static members */

    /**
     * Autodiscover legacy path
     */
    private static AutodiscoverLegacyPath: string = "/autodiscover/autodiscover.xml";

    /**
     * Autodiscover legacy Url with protocol fill-in
     */
    private static AutodiscoverLegacyUrl: string = "{0}://{1}" + AutodiscoverService.AutodiscoverLegacyPath;

    /**
     * Autodiscover legacy HTTPS Url
     */
    private static AutodiscoverLegacyHttpsUrl: string = "https://{0}" + AutodiscoverService.AutodiscoverLegacyPath;

    /**
     * Autodiscover legacy HTTP Url
     */
    private static AutodiscoverLegacyHttpUrl: string = "http://{0}" + AutodiscoverService.AutodiscoverLegacyPath;

    /**
     * Autodiscover SOAP HTTPS Url
     */
    private static AutodiscoverSoapHttpsUrl: string = "https://{0}/autodiscover/autodiscover.svc";

    /**
     * Autodiscover SOAP WS-Security HTTPS Url
     */
    private static AutodiscoverSoapWsSecurityHttpsUrl: string = AutodiscoverService.AutodiscoverSoapHttpsUrl + "/wssecurity";

    /**
     * Autodiscover SOAP WS-Security symmetrickey HTTPS Url
     */
    private static AutodiscoverSoapWsSecuritySymmetricKeyHttpsUrl: string = AutodiscoverService.AutodiscoverSoapHttpsUrl + "/wssecurity/symmetrickey";

    /**
     * Autodiscover SOAP WS-Security x509cert HTTPS Url
     */
    private static AutodiscoverSoapWsSecurityX509CertHttpsUrl: string = AutodiscoverService.AutodiscoverSoapHttpsUrl + "/wssecurity/x509cert";

    /**
     * Autodiscover request namespace
     */
    private static AutodiscoverRequestNamespace: string = "http://schemas.microsoft.com/exchange/autodiscover/outlook/requestschema/2006";

    /**
     * Legacy path regular expression.
     */
    private static LegacyPathRegex: RegExp = new RegExp("\/autodiscover/([^/]+/)*autodiscover.xml"); //info: c#: new Regex(@"/autodiscover/([^/]+/)*autodiscover.xml", RegexOptions.Compiled | RegexOptions.IgnoreCase);

    /**
     * @internal Maximum number of Url (or address) redirections that will be followed by an Autodiscover call
     */
    static AutodiscoverMaxRedirections: number = 10;

    /**
     * HTTP header indicating that SOAP Autodiscover service is enabled.
     */
    private static AutodiscoverSoapEnabledHeaderName: string = "X-SOAP-Enabled";

    /**
     * HTTP header indicating that WS-Security Autodiscover service is enabled.
     */
    private static AutodiscoverWsSecurityEnabledHeaderName: string = "X-WSSecurity-Enabled";

    /**
     * HTTP header indicating that WS-Security/SymmetricKey Autodiscover service is enabled.
     */
    private static AutodiscoverWsSecuritySymmetricKeyEnabledHeaderName: string = "X-WSSecurity-SymmetricKey-Enabled";

    /**
     * HTTP header indicating that WS-Security/X509Cert Autodiscover service is enabled.
     */
    private static AutodiscoverWsSecurityX509CertEnabledHeaderName: string = "X-WSSecurity-X509Cert-Enabled";

    /**
     * HTTP header indicating that OAuth Autodiscover service is enabled.
     */
    private static AutodiscoverOAuthEnabledHeaderName: string = "X-OAuth-Enabled";

    /**
     * Minimum request version for Autodiscover SOAP service.
     */
    private static MinimumRequestVersionForAutoDiscoverSoapService: ExchangeVersion = ExchangeVersion.Exchange2010;

    /* #endregion Static members */



    private domain: string;
    private isExternal: boolean; //Nullable
    private url: Uri;
    private redirectionUrlValidationCallback: AutodiscoverRedirectionUrlValidationCallback;
    private dnsClient: AutodiscoverDnsClient;
    private dnsServerAddress: any /** IPAddress */;
    private enableScpLookup: boolean;

    /**
     * Gets or sets the domain this service is bound to. When this property is set, the domain name is used to automatically determine the Autodiscover service URL.
     */
    get Domain(): string {
        return this.domain;
    }
    set Domain(value: string) {
        EwsUtilities.ValidateDomainNameAllowNull(value, "Domain");
        if (value !== null) {
            this.url = null;
        }
        this.domain = value;
    }

    /**
     * Gets or sets the URL this service is bound to.
     */
    get Url(): Uri {
        return this.url;
    }
    set Url(value: Uri) {
        // If Url property is set to non-null value, Domain property is set to host portion of Url.
        if (value != null) {
            this.domain = value.Host;
        }
        this.url = value;
    }

    /**
     * Gets a value indicating whether the Autodiscover service that URL points to is internal (inside the corporate network) or external (outside the corporate network).
     * 
     * @Nullable
     * 
     * @remarks IsExternal is null in the following cases:
     *  - This instance has been created with a domain name and no method has been called,
     *  - This instance has been created with a URL.
     */
    get IsExternal(): boolean {
        return this.isExternal;
    }
    /**@internal Set */
    set IsExternal(value: boolean) {
        this.isExternal = value;
    }

    /**
     * Gets or sets the redirection URL validation callback.
     * 
     * @value   The redirection URL validation callback.
     */
    get RedirectionUrlValidationCallback(): AutodiscoverRedirectionUrlValidationCallback {
        return this.redirectionUrlValidationCallback;
    }
    set RedirectionUrlValidationCallback(value: AutodiscoverRedirectionUrlValidationCallback) {
        this.redirectionUrlValidationCallback = value;
    }

    /**
     * @internal Gets or sets the DNS server address.
     */
    get DnsServerAddress(): any /** IPAddress */ {
        return this.dnsServerAddress;
    }
    set DnsServerAddress(value: any /** IPAddress */) {
        this.dnsServerAddress = value;
    }

    /**
     *  Gets or sets a value indicating whether the AutodiscoverService should perform SCP (ServiceConnectionPoint) record lookup when determining the Autodiscover service URL.
     */
    get EnableScpLookup(): boolean {
        return this.enableScpLookup;
    }
    set EnableScpLookup(value: boolean) {
        this.enableScpLookup = value;
    }

    /**
     * Gets or sets the delegate used to resolve Autodiscover SCP urls for a specified domain.
     */
    GetScpUrlsForDomainCallback: (string) => string[];// System.Func<string, System.Collections.Generic.ICollection<string>>;

    /**
     * Initializes a new instance of the **AutodiscoverService** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **AutodiscoverService** class.
     *
     * @param   {ExchangeVersion}   requestedServerVersion   The requested server version.
     */
    constructor(requestedServerVersion: ExchangeVersion);
    /**
     * Initializes a new instance of the **AutodiscoverService** class.
     *
     * @param   {string}    domain                   The domain that will be used to determine the URL of the service.
     */
    constructor(domain: string);
    /**
     * Initializes a new instance of the **AutodiscoverService** class.
     *
     * @param   {string}            domain                   The domain that will be used to determine the URL of the service.
     * @param   {ExchangeVersion}   requestedServerVersion   The requested server version.
     */
    constructor(domain: string, requestedServerVersion: ExchangeVersion);
    /**
     * Initializes a new instance of the **AutodiscoverService** class.
     *
     * @param   {Uri}   url                      The URL of the service.
     */
    constructor(url: Uri);
    /**
     * Initializes a new instance of the **AutodiscoverService** class.
     *
     * @param   {Uri}               url                      The URL of the service.
     * @param   {ExchangeVersion}   requestedServerVersion   The requested server version.
     */
    constructor(url: Uri, requestedServerVersion: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **AutodiscoverService** class.
     *
     * @param   {Uri}       url                      The URL of the service.
     * @param   {string}    domain                   The domain that will be used to determine the URL of the service.
     */
    constructor(url: Uri, domain: string);
    /**
     * @internal Initializes a new instance of the **AutodiscoverService** class.
     *
     * @param   {Uri}               url                      The URL of the service.
     * @param   {string}            domain                   The domain that will be used to determine the URL of the service.
     * @param   {ExchangeVersion}   requestedServerVersion   The requested server version.
     */
    constructor(url: Uri, domain: string, requestedServerVersion: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **AutodiscoverService** class.
     *
     * @param   {ExchangeServiceBase}   service                  The other service.
     */    
    constructor(service: ExchangeServiceBase);
    /**
     * @internal Initializes a new instance of the **AutodiscoverService** class.
     *
     * @param   {ExchangeServiceBase}   service                  The other service.
     * @param   {ExchangeVersion}       requestedServerVersion   The requested server version.
     */    
    constructor(service: ExchangeServiceBase, requestedServerVersion: ExchangeVersion);
    constructor(
        domainUrlServiceOrVersion?: string | Uri | ExchangeServiceBase | ExchangeVersion,
        domainOrVersion?: string | ExchangeVersion,
        version: ExchangeVersion = ExchangeVersion.Exchange2010
    ) {
        var argsLength = arguments.length;

        if (argsLength > 3) {
            throw new Error("AutodiscoverService.ts - ctor with " + argsLength + " parameters, invalid number of arguments, check documentation and try again.");
        }

        let domain: string = null;
        let url: Uri = null;
        let service: ExchangeServiceBase = null;
        let requestedServerVersion: ExchangeVersion = ExchangeVersion.Exchange2010;
        let hasService: boolean = false;
        let hasVersion: boolean = false;

        if (argsLength >= 1) {
            if (domainUrlServiceOrVersion instanceof Uri) {
                url = domainUrlServiceOrVersion;
                domain = url.Host;
                EwsUtilities.ValidateDomainNameAllowNull(domain, "domain");
            }
            else if (domainUrlServiceOrVersion instanceof ExchangeServiceBase) {
                service = domainUrlServiceOrVersion;
                requestedServerVersion = service.RequestedServerVersion;
                hasService = true;
            }
            else if (typeof domainUrlServiceOrVersion === 'string') {
                domain = domainUrlServiceOrVersion;
                EwsUtilities.ValidateDomainNameAllowNull(domain, "domain");
            }
            else if (typeof domainUrlServiceOrVersion === 'number') {
                requestedServerVersion = domainUrlServiceOrVersion;
                hasVersion = true;
            }
        }
        if (argsLength >= 2) {
            if (typeof domainOrVersion === 'string') {
                if (!(domainUrlServiceOrVersion instanceof Uri)) {
                    throw new Error("AutodiscoverService.ts - ctor with " + argsLength + " parameters - incorrect uses of parameter at 1st position, it must be Uri when using string at 2nd place");
                }
                domain = domainOrVersion;
                EwsUtilities.ValidateDomainNameAllowNull(domain, "domain");
            }
            else if (typeof domainOrVersion === 'number') {
                requestedServerVersion = domainOrVersion;
            }
        }
        if (argsLength === 3) {
            requestedServerVersion = version;
        }

        if (hasService) {
            super(service, requestedServerVersion);
        }
        else {
            super(requestedServerVersion);
        }

        this.domain = domain;
        this.isExternal = null;
        this.url = url;
        this.redirectionUrlValidationCallback = null;
        this.dnsClient = new AutodiscoverDnsClient();
        this.dnsServerAddress = null;
        this.enableScpLookup = false;
    }

    /**
     * Calls the redirection URL validation callback.
     *
     * @param   {string}   redirectionUrl   The redirection URL.
     * @return  {boolean}                   True if redirection should be followed.
     */
    private CallRedirectionUrlValidationCallback(redirectionUrl: string): boolean {
        var callback: AutodiscoverRedirectionUrlValidationCallback = (this.RedirectionUrlValidationCallback == null)
            ? this.DefaultAutodiscoverRedirectionUrlValidationCallback
            : this.RedirectionUrlValidationCallback;

        return callback(redirectionUrl);
    }

    DefaultAutodiscoverRedirectionUrlValidationCallback(redirectionUrl: string): boolean {
        throw new AutodiscoverLocalException(StringHelper.Format("Autodiscover redirection is blocked for url: {0}"/*Strings.AutodiscoverRedirectBlocked*/, redirectionUrl));
    }

    //DefaultGetScpUrlsForDomain(domainName: string): string[] { return null; }// System.Collections.Generic.ICollection<string>{ throw new Error("AutodiscoverService.ts - DefaultGetScpUrlsForDomain : Not implemented.");}
    //DisableScpLookupIfDuplicateRedirection(emailAddress: string, redirectionEmailAddresses: string[]): any{ throw new Error("AutodiscoverService.ts - DisableScpLookupIfDuplicateRedirection : Not implemented.");}
    
    GetAutodiscoverEndpointUrl(host: string): IPromise<Uri> {
        var autodiscoverUrlOut: IOutParam<Uri> = { outValue: null };

        return this.TryGetAutodiscoverEndpointUrl(host, autodiscoverUrlOut).then((value) => {
            if (value) {
                return autodiscoverUrlOut.outValue;
            }
            else {
                throw new AutodiscoverLocalException("no soap or WsSecurity endpoint available"/*Strings.NoSoapOrWsSecurityEndpointAvailable*/);
            }
        }, (err) => {
            throw new AutodiscoverLocalException("no soap or WsSecurity endpoint available"/*Strings.NoSoapOrWsSecurityEndpointAvailable*/);
        });
    }

    //--done
    GetAutodiscoverServiceHosts(domainName: string): string[] {

        var serviceHosts: string[] = [];
        var urls = this.GetAutodiscoverServiceUrls(domainName);
        for (var url of urls) {
            serviceHosts.push(UriHelper.getHost(url));
        }

        return serviceHosts;
    }
    //--done
    GetAutodiscoverServiceUrls(domainName: string): string[] {// System.Collections.Generic.List<T>{
        var urls: string[] = [];

        if (this.EnableScpLookup) {
            // Get SCP URLs
            //Func < string, ICollection <string>> callback = this.GetScpUrlsForDomainCallback ?? this.DefaultGetScpUrlsForDomain;
            //ICollection < string> scpUrls = callback(domainName);
            //foreach(string str in scpUrls)
            //{
            //    urls.Add(new Uri(str));
            //}
        }
        //scpHostCount = urls.length;

        // As a fallback, add autodiscover URLs base on the domain name.
        urls.push(StringHelper.Format(AutodiscoverService.AutodiscoverLegacyHttpsUrl, "autodiscover." + domainName));
        urls.push(StringHelper.Format(AutodiscoverService.AutodiscoverLegacyHttpsUrl, domainName));

        return urls;
    }
    GetDomainSettings(domains: string[], settings: DomainSettingName[], requestedVersion: ExchangeVersion): IPromise<GetDomainSettingsResponseCollection>;
    GetDomainSettings(domains: string[], requestedVersion: ExchangeVersion, ...domainSettingNames: DomainSettingName[]): IPromise<GetDomainSettingsResponseCollection>;
    GetDomainSettings(domain: string, requestedVersion: ExchangeVersion, ...domainSettingNames: DomainSettingName[]): IPromise<GetDomainSettingsResponse>

    GetDomainSettings(
        domainOrDomainNames: string | string[],
        settingsOrVersion: ExchangeVersion | DomainSettingName[],
        versionOrSettingNames: ExchangeVersion | any //...params DomainSettingName[]
    ): IPromise<GetDomainSettingsResponse | GetDomainSettingsResponseCollection> {

        // EwsUtilities.ValidateParam(domains, "domains");
        // EwsUtilities.ValidateParam(settings, "settings");

        var requestedVersion: ExchangeVersion = null;
        var settings: DomainSettingName[] = [];
        if (arguments.length <= 3) {
            if (Array.isArray(settingsOrVersion)) {
                settings = <DomainSettingName[]>settingsOrVersion;
                requestedVersion = versionOrSettingNames;
            }
            else {
                settings.push(arguments[2]);
            }
        }
        else {
            if (settingsOrVersion !== null && typeof settingsOrVersion !== 'number') {
                throw new Error("AutodiscoverService.ts - GetDomainSettings with " + arguments.length + " incorrect uses of parameter at 2nd position, it must be ExchangeVersion or null when using DomainSettingName[] ...params at 3rd place");
            }
            for (var _i = 2; _i < arguments.length; _i++) {
                settings[_i - 2] = arguments[_i];
            }
            requestedVersion = <ExchangeVersion>settingsOrVersion;
        }
        var isCollection: boolean = true;
        var domains: string[] = <string[]>domainOrDomainNames;
        if (!Array.isArray(domainOrDomainNames)) {
            domains = [<string>domainOrDomainNames]
            isCollection = false;
        }


        return this.GetSettings<GetDomainSettingsResponseCollection, DomainSettingName>(
            domains,
            settings,
            requestedVersion,
            this.InternalGetDomainSettings,
            () => { return domains[0]; }).then((value: GetDomainSettingsResponseCollection) => {
                if (isCollection) {
                    return value;
                }
                else {
                    return value.__thisIndexer(0);
                }
            }, (error) => {
                throw error;
            });

        // var request = new GetDomainSettingsRequest(this, this.url);
        // request.Settings = domainSettingNames;
        // request.Domains = [domain];
        // var response = request.Execute();
        // return <any>response;
    }

    //previous name - GetEndpointsFromHttpWebResponse
    GetEndpointsFromHttpResponse(response: XMLHttpRequest): AutodiscoverEndpoints {
        var endpoints: AutodiscoverEndpoints = AutodiscoverEndpoints.Legacy;
        if (!StringHelper.IsNullOrEmpty(response.getResponseHeader(AutodiscoverService.AutodiscoverSoapEnabledHeaderName))) {
            endpoints |= AutodiscoverEndpoints.Soap;
        }
        if (!StringHelper.IsNullOrEmpty(response.getResponseHeader(AutodiscoverService.AutodiscoverWsSecurityEnabledHeaderName))) {
            endpoints |= AutodiscoverEndpoints.WsSecurity;
        }
        if (!StringHelper.IsNullOrEmpty(response.getResponseHeader(AutodiscoverService.AutodiscoverWsSecuritySymmetricKeyEnabledHeaderName))) {
            endpoints |= AutodiscoverEndpoints.WSSecuritySymmetricKey;
        }
        if (!StringHelper.IsNullOrEmpty(response.getResponseHeader(AutodiscoverService.AutodiscoverWsSecurityX509CertEnabledHeaderName))) {
            endpoints |= AutodiscoverEndpoints.WSSecurityX509Cert;
        }
        if (!StringHelper.IsNullOrEmpty(response.getResponseHeader(AutodiscoverService.AutodiscoverOAuthEnabledHeaderName))) {
            endpoints |= AutodiscoverEndpoints.OAuth;
        }
        return endpoints;
    }
    //GetLegacyUserSettings(emailAddress: string): any{ throw new Error("AutodiscoverService.ts - GetLegacyUserSettings : Not implemented.");}
    //GetLegacyUserSettingsAtUrl(emailAddress: string, url: Uri): any{ throw new Error("AutodiscoverService.ts - GetLegacyUserSettingsAtUrl : Not implemented.");}
    //GetRedirectionUrlFromDnsSrvRecord(domainName: string): Uri{ throw new Error("AutodiscoverService.ts - GetRedirectionUrlFromDnsSrvRecord : Not implemented.");}
    GetRedirectUrl(domainName: string): IPromise<Uri> {
        var url: string = StringHelper.Format(AutodiscoverService.AutodiscoverLegacyHttpUrl, "autodiscover." + domainName);

        this.TraceMessage(
            TraceFlags.AutodiscoverConfiguration,
            StringHelper.Format("Trying to get Autodiscover redirection URL from {0}.", url));

        var xhrOptions: IXHROptions = {
            type: "GET",
            url: url,
        };
        return this.GetXHRApi.xhr(xhrOptions)
            .then((response: XMLHttpRequest) => {
                if (response != null) {

                    this.TraceMessage(TraceFlags.All,
                        "***hard checking for office 365 with node.js http request and presence of header x-federationtrusttokenissueruri= urn:federation:MicrosoftOnline");

                    var redirectUrl: string = null;
                    if (!StringHelper.IsNullOrEmpty(response.getResponseHeader("x-federationtrusttokenissueruri"))) {
                        if (response.getResponseHeader("x-federationtrusttokenissueruri") === "urn:federation:MicrosoftOnline")
                            redirectUrl = "https://autodiscover-s.outlook.com/autodiscover/autodiscover.svc";
                        return new Uri(redirectUrl);
                    }
                    //if (this.TryGetRedirectionResponse(response, redirectUrl)) {
                    //    return redirectUrl;
                    //}
                }

                this.TraceMessage(
                    TraceFlags.AutodiscoverConfiguration,
                    "No Autodiscover redirection URL was returned.");

                return null;

            }, (resperr: XMLHttpRequest) => {
                if (resperr.status === 0) {
                    //catch (IOException ex)
                    this.TraceMessage(
                        TraceFlags.AutodiscoverConfiguration,
                        StringHelper.Format("I/O error: {0}", "unable to connect"));
                } else {
                    //catch (WebException ex)
                    this.TraceMessage(
                        TraceFlags.AutodiscoverConfiguration,
                        StringHelper.Format("--Request error: {0}, {1}", resperr.status, resperr.statusText));

                    //todo: possible?
                    // The exception response factory requires a valid HttpWebResponse,
                    // but there will be no web response if the web request couldn't be
                    // actually be issued (e.g. due to DNS error).
                    //if (ex.Response != null) {
                    //    response = this.HttpWebRequestFactory.CreateExceptionResponse(ex);
                    //}
                }
                if (resperr.status === 401) {//unauthorized in case it was redirected, checking header now
                    this.TraceMessage(TraceFlags.All,
                        "***hard checking for office 365 with node.js http request and presence of header x-federationtrusttokenissueruri= urn:federation:MicrosoftOnline");

                    var redirectUrl: string = null;
                    if (!StringHelper.IsNullOrEmpty(resperr.getResponseHeader("x-federationtrusttokenissueruri"))) {
                        if (resperr.getResponseHeader("x-federationtrusttokenissueruri") === "urn:federation:MicrosoftOnline") {
                            redirectUrl = "https://autodiscover-s.outlook.com/autodiscover/autodiscover.svc";
                            this.TraceMessage(TraceFlags.All,
                                "possible hard match for O365 based on federation header (could be any legitimate 302 redirect - less likely)\r\n trying to connect to O365 multitenent autodiscover url: " + redirectUrl);
                        }
                        return new Uri(redirectUrl);
                    }
                }
                return null;
            });
    }
    GetSettings<TGetSettingsResponseCollection, TSettingName>(
        identities: string[], settings: TSettingName[], requestedVersion: ExchangeVersion,
        getSettingsMethod: GetSettingsMethod<TGetSettingsResponseCollection, TSettingName>,
        getDomainMethod: () => string): IPromise<TGetSettingsResponseCollection> {
        // Autodiscover service only exists in E14 or later.
        if (this.RequestedServerVersion < AutodiscoverService.MinimumRequestVersionForAutoDiscoverSoapService) {
            throw new ServiceVersionException(
                StringHelper.Format(
                    Strings.AutodiscoverServiceIncompatibleWithRequestVersion,
                    AutodiscoverService.MinimumRequestVersionForAutoDiscoverSoapService));
        }

        var response: IPromise<TGetSettingsResponseCollection> = null;
        var autodiscoverUrlRef: IRefParam<Uri> = { getValue: () => this.Url, setValue: (url) => this.url = url };

        // If Url is specified, call service directly.
        if (this.Url != null) {

            return getSettingsMethod(
                identities,
                settings,
                requestedVersion,
                autodiscoverUrlRef, this)
                .then((response) => {
                    this.Url = autodiscoverUrlRef.getValue();
                    return response;
                });
        }

        // If Domain is specified, determine endpoint Url and call service.
        else if (!StringHelper.IsNullOrEmpty(this.Domain)) {
            return this.GetAutodiscoverEndpointUrl(this.Domain).then((adsvcurl) => {
                autodiscoverUrlRef = { getValue: () => adsvcurl };
                return getSettingsMethod(
                    identities,
                    settings,
                    requestedVersion,
                    autodiscoverUrlRef, this).then((response) => {
                        // If we got this far, response was successful, set Url.
                        this.Url = autodiscoverUrlRef.getValue();
                        return response;
                    });
            }, (err) => {
                //throw err;
            });
        }

        // No Url or Domain specified, need to figure out which endpoint(s) to try.
        else {
            // Assume caller is not inside the Intranet, regardless of whether SCP Urls
            // were returned or not. SCP Urls are only relevent if one of them returns
            // valid Autodiscover settings.

            this.IsExternal = true;

            var autodiscoverOutUrl: IOutParam<Uri> = { outValue: undefined };

            var domainName: string = getDomainMethod();

            var scpHostCount: number;
            var hosts = this.GetAutodiscoverServiceHosts(domainName);//, scpHostCount);

            if (hosts.length == 0) {
                throw new ServiceValidationException("autodiscover service request requires domain or url"
                    /*Strings.AutodiscoverServiceRequestRequiresDomainOrUrl*/);
            }



            return this.GetSettingsRecursiveLookup(identities, settings, requestedVersion, getSettingsMethod, autodiscoverUrlRef, hosts).then((response) => {
                return response;
            }, (err) => {

                this.TraceMessage(TraceFlags.DebugMessage,
                    "--hard checking for office 365 with node.js http request and presence of header x-federationtrusttokenissueruri: urn:federation:MicrosoftOnline. All other redirection wil fail");
                // Next-to-last chance: try unauthenticated GET over HTTP to be redirected to appropriate service endpoint.
                return this.GetRedirectUrl(domainName).then((autodiscoverUrl) => {
                    if ((autodiscoverUrl != null) &&
                        this.CallRedirectionUrlValidationCallback(autodiscoverUrl.ToString())) {
                        return this.TryGetAutodiscoverEndpointUrl(autodiscoverUrl.Host, { outValue: autodiscoverUrl }).then((value) => {
                            if (value) {
                                return getSettingsMethod(
                                    identities,
                                    settings,
                                    requestedVersion,
                                    { getValue: () => autodiscoverUrl }, this).then((response) => {
                                        // If we got this far, response was successful, set Url.
                                        this.Url = autodiscoverUrl;
                                        return response;
                                    });
                            }
                        });
                    }
                }, (err) => {
                    throw new AutodiscoverLocalException("Autodiscover could not be located, skipped srv record lookup, not implement in this js version"/*Strings.AutodiscoverCouldNotBeLocated*/);
                });
            });




            /// ------- SRV record resolution not implemented ------- /// Last Chance: try to read autodiscover SRV Record from DNS. If we find one, use
            ////// the hostname returned to construct an Autodiscover endpoint URL.
            ////autodiscoverUrl = this.GetRedirectionUrlFromDnsSrvRecord(domainName);
            ////if ((autodiscoverUrl != null) &&
            ////    this.CallRedirectionUrlValidationCallback(autodiscoverUrl.ToString()) &&
            ////    this.TryGetAutodiscoverEndpointUrl(autodiscoverUrl.Host, out autodiscoverUrl)) {
            ////    response = getSettingsMethod(
            ////        identities,
            ////        settings,
            ////        requestedVersion,
            ////        ref autodiscoverUrl);

            ////    // If we got this far, the response was successful, set Url.
            ////    this.Url = autodiscoverUrl;

            ////    return response;
            ////}
            ////else {
            ////    throw new AutodiscoverLocalException(Strings.AutodiscoverCouldNotBeLocated);
            ////}
        }
    }

    private GetSettingsRecursiveLookup<TGetSettingsResponseCollection, TSettingName>(
        identities: string[], settings: TSettingName[], requestedVersion: ExchangeVersion,
        getSettingsMethod: GetSettingsMethod<TGetSettingsResponseCollection, TSettingName>,
        autodiscoverUrlRef: IRefParam<Uri>, hosts: string[], currentHostIndex: number = 0): IPromise<TGetSettingsResponseCollection> {
        //        for (var currentHostIndex = 0; currentHostIndex < hosts.length; currentHostIndex++) {

        if (currentHostIndex >= hosts.length) throw new AutodiscoverLocalException("***cannot determine based on autodiscover host names");

        var host = hosts[currentHostIndex];
        // var isScpHost:bool = currentHostIndex < scpHostCount;
        return this.TryGetAutodiscoverEndpointUrl(host, autodiscoverUrlRef).then((value) => {
            if (value) {
                return getSettingsMethod(
                    identities,
                    settings,
                    requestedVersion,
                    autodiscoverUrlRef, this).then((response) => {
                        // If we got this far, the response was successful, set Url.
                        this.Url = autodiscoverUrlRef.getValue();

                        // Not external if Autodiscover endpoint found via SCP returned the settings.
                        //if (isScpHost) {
                        //    this.IsExternal = false;
                        //}
                        return response;
                    });
            } else {
                currentHostIndex++;
                return this.GetSettingsRecursiveLookup(identities, settings, requestedVersion, getSettingsMethod, autodiscoverUrlRef, hosts, currentHostIndex);
            }
        }, (err) => {
            currentHostIndex++;
            return this.GetSettingsRecursiveLookup(identities, settings, requestedVersion, getSettingsMethod, autodiscoverUrlRef, hosts, currentHostIndex);
        });
    }

    /**internal method */
    public GetUserSettings(smtpAddresses: string[], settings: UserSettingName[]): IPromise<GetUserSettingsResponseCollection>;
    /**
     * Retrieves the specified settings for single SMTP address.
     *
     * @param   {string}   userSmtpAddress    The SMTP addresses of the user.
     * @param   {UserSettingName[]}   userSettingNames   The user setting names.
     * @return  {IPromise<GetUserSettingsResponse>} A UserResponse object containing the requested settings for the specified user.
     */
    public GetUserSettings(userSmtpAddress: string, userSettingNames: UserSettingName[]): IPromise<GetUserSettingsResponse>;
    public GetUserSettings(userSmtpAddress: string, ...userSettingNames: UserSettingName[]): IPromise<GetUserSettingsResponse>;
    public GetUserSettings(smtpAddresses: string | string[], userSettings: any): IPromise<GetUserSettingsResponse | GetUserSettingsResponseCollection> {
        var userSettingNames: UserSettingName[] = [];
        if (arguments.length === 2) {
            if (Array.isArray(userSettings)) {
                userSettingNames = userSettings;
            }
            else {
                userSettingNames.push(arguments[1]);
            }
        }
        else {
            for (var _i = 1; _i < arguments.length; _i++) {
                userSettingNames[_i - 1] = arguments[_i];
            }
        }

        if (Array.isArray(smtpAddresses)) {
            //EwsUtilities.ValidateParam(smtpAddresses, "smtpAddresses");
            //EwsUtilities.ValidateParam(settings, "settings");

            return this.GetSettings<GetUserSettingsResponseCollection, UserSettingName>(
                <string[]>smtpAddresses,
                userSettingNames,
                null,
                this.InternalGetUserSettings,
                () => { return EwsUtilities.DomainFromEmailAddress(smtpAddresses[0]); });
        }

        var userSmtpAddress: string = <string>smtpAddresses;
        //List < UserSettingName > requestedSettings = new List<UserSettingName>(userSettingNames);

        if (StringHelper.IsNullOrEmpty(userSmtpAddress)) {
            throw new ServiceValidationException("invalid autodiscover smtp address" /*Strings.InvalidAutodiscoverSmtpAddress*/);
        }
        var requestedSettings = userSettingNames || [];

        if (requestedSettings.length == 0) {
            throw new ServiceValidationException("invalid autodiscover setting count" /*Strings.InvalidAutodiscoverSettingsCount*/);
        }

        if (this.RequestedServerVersion < AutodiscoverService.MinimumRequestVersionForAutoDiscoverSoapService) {
            return this.InternalGetLegacyUserSettings(userSmtpAddress, requestedSettings);
        }
        else {
            return this.InternalGetSoapUserSettings(userSmtpAddress, requestedSettings);
        }
    }

    public GetUsersSettings(userSmtpAddresses: string[], ...userSettingNames: UserSettingName[]): IPromise<GetUserSettingsResponseCollection> {

        if (this.RequestedServerVersion < AutodiscoverService.MinimumRequestVersionForAutoDiscoverSoapService) {
            throw new ServiceVersionException(
                StringHelper.Format(/*Strings.AutodiscoverServiceIncompatibleWithRequestVersion*/ "autodiscover service is incompatible with requested versio, minimum versi supported is {0}",
                    AutodiscoverService.MinimumRequestVersionForAutoDiscoverSoapService));
        }

        ////var smtpAddresses: string[] = []// new List<string>(userSmtpAddresses);
        ////if (userSmtpAddresses)
        ////    userSmtpAddresses.forEach((s) => smtpAddresses.push(s));
        ////else throw new Error("invalid input");
        ////var settingNames: UserSettingName[] = [];// List<UserSettingName>(userSettingNames);
        ////if(userSettingNames)
        ////userSettingNames.forEach((s)=> settingNames.push());

        return this.GetUserSettings(userSmtpAddresses, userSettingNames); //calls getsettings
    }
    InternalGetDomainSettings(domains: string[], settings: DomainSettingName[], requestedVersion: ExchangeVersion, autodiscoverUrlRef: IRefParam<Uri>, thisref: AutodiscoverService, currentHop: number = 0): IPromise<GetDomainSettingsResponseCollection> {

        // The response to GetDomainSettings can be a redirection. Execute GetDomainSettings until we get back 
        // a valid response or we've followed too many redirections.
        currentHop++;
        if (currentHop > AutodiscoverService.AutodiscoverMaxRedirections) {
            this.TraceMessage(
                TraceFlags.AutodiscoverConfiguration,
                StringHelper.Format("Maximum number of redirection hops {0} exceeded", AutodiscoverService.AutodiscoverMaxRedirections));

            throw new AutodiscoverLocalException(Strings.AutodiscoverCouldNotBeLocated);
        }
        //BUG  - Typescript bug, reference for "this" inside multiple layers of IPromise points to global this object;
        //(may be not) - this functional is called as delegate under Promise chaining, loss poiters to this.
        //var request: GetUserSettingsRequest = new GetUserSettingsRequest(this, autodiscoverUrlRef.refvalue);
        var request = new GetDomainSettingsRequest(thisref, autodiscoverUrlRef.getValue());
        request.Settings = settings;
        request.Domains = domains;
        return request.Execute().then((response) => {
            // Did we get redirected?
            if (response.ErrorCode == AutodiscoverErrorCode.RedirectUrl && response.RedirectionUrl != null) {
                this.TraceMessage(
                    TraceFlags.AutodiscoverConfiguration,
                    StringHelper.Format("Request to {0} returned redirection to {1}", autodiscoverUrlRef.getValue().ToString(), response.RedirectionUrl.ToString()));

                // this url need be brought back to the caller.
                //
                autodiscoverUrlRef.setValue(response.RedirectionUrl);
                return this.InternalGetDomainSettings(domains, settings, requestedVersion, autodiscoverUrlRef, thisref, currentHop);
            }
            else {
                return response;
            }
        }, (err) => {

        });
    }
    private InternalGetLegacyUserSettings(emailAddress: string, requestedSettings: UserSettingName[]): IPromise<GetUserSettingsResponse> {
        throw new Error("Not implemented.");
    }
    private InternalGetLegacyUserSettingsPrivate<Tsettings>(
        emailAddress: string, redirectionEmailAddresses: string[],
        currentHop: IRefParam<number>): Tsettings {
        throw new Error("Not implemented.");
    }
    InternalGetSoapUserSettings(smtpAddress: string, requestedSettings: UserSettingName[]): IPromise<GetUserSettingsResponse> {
        var smtpAddresses: string[] = [];
        smtpAddresses.push(smtpAddress);

        var redirectionEmailAddresses: string[] = [];
        redirectionEmailAddresses.push(smtpAddress.toLowerCase());
        return this.InternalGetSoapUserSettingsRecursive(smtpAddresses, requestedSettings, redirectionEmailAddresses);
    }
    InternalGetSoapUserSettingsRecursive(smtpAddresses: string[], requestedSettings: UserSettingName[],
        redirectionEmailAddresses: string[] = [], currentHop: number = 0): IPromise<GetUserSettingsResponse> {

        currentHop++;
        //if (currentHop > AutodiscoverService.AutodiscoverMaxRedirections)
        //    throw new AutodiscoverLocalException(Strings.AutodiscoverCouldNotBeLocated);

        return this.GetUserSettings(smtpAddresses, requestedSettings).then((resp) => {
            var response = resp.Responses[0];
            switch (response.ErrorCode) {
                case AutodiscoverErrorCode.RedirectAddress:
                    this.TraceMessage(
                        TraceFlags.AutodiscoverResponse,
                        StringHelper.Format("Autodiscover service returned redirection email address '{0}'.", response.RedirectTarget));

                    smtpAddresses.splice(0);
                    smtpAddresses.push(response.RedirectTarget.toLowerCase());
                    this.Url = null;
                    this.Domain = null;

                    // If this email address was already tried, we may have a loop
                    // in SCP lookups. Disable consideration of SCP records.
                    this.ThrowIfDuplicateRedirection(response.RedirectTarget, { getValue: () => redirectionEmailAddresses });
                    return this.InternalGetSoapUserSettingsRecursive(smtpAddresses, requestedSettings, redirectionEmailAddresses, currentHop);
                    break;

                case AutodiscoverErrorCode.RedirectUrl:
                    this.TraceMessage(
                        TraceFlags.AutodiscoverResponse,
                        StringHelper.Format("Autodiscover service returned redirection URL '{0}'.", response.RedirectTarget));

                    this.Url = this.Credentials.AdjustUrl(new Uri(response.RedirectTarget));
                    return this.InternalGetSoapUserSettingsRecursive(smtpAddresses, requestedSettings, redirectionEmailAddresses, currentHop);
                    break;

                case AutodiscoverErrorCode.NoError:
                default:
                    return response;
                //return IPromise.as(response);
            }
        }, (err) => {
            throw err;
        });


    }
    InternalGetUserSettings(smtpAddresses: string[], settings: UserSettingName[],
        requestedVersion: ExchangeVersion, autodiscoverUrlRef: IRefParam<Uri>, thisref: AutodiscoverService, currentHop: number = 0): IPromise<GetUserSettingsResponseCollection> {

        // The response to GetUserSettings can be a redirection. Execute GetUserSettings until we get back
        // a valid response or we've followed too many redirections.
        //this function is called recursively for that
        currentHop++;
        if (currentHop > AutodiscoverService.AutodiscoverMaxRedirections) {
            this.TraceMessage(
                TraceFlags.AutodiscoverConfiguration,
                StringHelper.Format("Maximum number of redirection hops {0} exceeded", AutodiscoverService.AutodiscoverMaxRedirections));

            throw new AutodiscoverLocalException("Autodiscover settings could not be located, max redirection reached"/*Strings.AutodiscoverCouldNotBeLocated*/);
        }
        //BUG  - Typescript bug, reference for "this" inside multiple layers of IPromise points to global this object;
        //(may be not) - this functional is called as delegate under Promise chaining, loss poiters to this.
        //var request: GetUserSettingsRequest = new GetUserSettingsRequest(this, autodiscoverUrlRef.refvalue);
        var request: GetUserSettingsRequest = new GetUserSettingsRequest(thisref, autodiscoverUrlRef.getValue());

        request.SmtpAddresses = smtpAddresses;
        request.Settings = settings;
        return request.Execute().then((response) => {
            // Did we get redirected?
            if (response.ErrorCode == AutodiscoverErrorCode.RedirectUrl && response.RedirectionUrl != null) {
                this.TraceMessage(
                    TraceFlags.AutodiscoverConfiguration,
                    StringHelper.Format("Request to {0} returned redirection to {1}", autodiscoverUrlRef.getValue().ToString(), response.RedirectionUrl.ToString()));

                // this url need be brought back to the caller.
                //
                autodiscoverUrlRef.setValue(response.RedirectionUrl);
                return this.InternalGetUserSettings(smtpAddresses, settings, requestedVersion, autodiscoverUrlRef, thisref, currentHop);
            }
            else {
                return response;
            }
        }, (err) => {

        });
    }
    //PrepareHttpWebRequestForUrl(url: Uri): Data.IEwsHttpWebRequest{ throw new Error("AutodiscoverService.ts - PrepareHttpWebRequestForUrl : Not implemented.");}
    //ProcessHttpErrorResponse(httpWebResponse: Data.IEwsHttpWebResponse, webException: any): any{ throw new Error("AutodiscoverService.ts - ProcessHttpErrorResponse : Not implemented.");}
    ProcessHttpErrorResponse(httpWebResponse: XMLHttpRequest, webException: any): any { /*throw new Error("Not implemented.")*/; }
    TraceResponse(response: XMLHttpRequest, memoryStream: any): any {
        //todo: implement tracing

        //this.ProcessHttpResponseHeaders(TraceFlags.AutodiscoverResponseHttpHeaders, response);

        //if (this.TraceEnabled) {
        //    if (!StringHelper.IsNullOrEmpty(response.ContentType) &&
        //        (response.ContentType.StartsWith("text/", StringComparison.OrdinalIgnoreCase) ||
        //        response.ContentType.StartsWith("application/soap", StringComparison.OrdinalIgnoreCase))) {
        //        this.TraceXml(TraceFlags.AutodiscoverResponse, memoryStream);
        //    }
        //    else {
        //        this.TraceMessage(TraceFlags.AutodiscoverResponse, "Non-textual response");
        //    }
        //}
    }
    TryGetAutodiscoverEndpointUrl(host: string, url: IOutParam<Uri>): IPromise<boolean> {
        url.outValue = null;

        var endpointsOut: IOutParam<AutodiscoverEndpoints> = { outValue: AutodiscoverEndpoints.None };
        return this.TryGetEnabledEndpointsForHost({ getValue: () => host, setValue: (value) => host = value }, endpointsOut).then((value) => {
            if (value) {
                url.outValue = new Uri(StringHelper.Format(AutodiscoverService.AutodiscoverSoapHttpsUrl, host));
                var endpoints = endpointsOut.outValue;
                // Make sure that at least one of the non-legacy endpoints is available.
                if (((endpoints & AutodiscoverEndpoints.Soap) != AutodiscoverEndpoints.Soap) &&
                    ((endpoints & AutodiscoverEndpoints.WsSecurity) != AutodiscoverEndpoints.WsSecurity) &&
                    ((endpoints & AutodiscoverEndpoints.WSSecuritySymmetricKey) != AutodiscoverEndpoints.WSSecuritySymmetricKey) &&
                    ((endpoints & AutodiscoverEndpoints.WSSecurityX509Cert) != AutodiscoverEndpoints.WSSecurityX509Cert) &&
                    ((endpoints & AutodiscoverEndpoints.OAuth) != AutodiscoverEndpoints.OAuth)) {
                    this.TraceMessage(
                        TraceFlags.AutodiscoverConfiguration,
                        StringHelper.Format("No Autodiscover endpoints are available  for host {0}", host));

                    return false;
                }

                // If we have WLID credentials, make sure that we have a WS-Security endpoint
                return true;
                if (this.Credentials instanceof WindowsLiveCredentials) {
                    if ((endpoints & AutodiscoverEndpoints.WsSecurity) != AutodiscoverEndpoints.WsSecurity) {
                        this.TraceMessage(
                            TraceFlags.AutodiscoverConfiguration,
                            StringHelper.Format("No Autodiscover WS-Security endpoint is available for host {0}", host));

                        return false;
                    }
                    else {
                        url.outValue = new Uri(StringHelper.Format(AutodiscoverService.AutodiscoverSoapWsSecurityHttpsUrl, host));
                    }
                }
                else if (this.Credentials instanceof PartnerTokenCredentials) {
                    if ((endpoints & AutodiscoverEndpoints.WSSecuritySymmetricKey) != AutodiscoverEndpoints.WSSecuritySymmetricKey) {
                        this.TraceMessage(
                            TraceFlags.AutodiscoverConfiguration,
                            StringHelper.Format("No Autodiscover WS-Security/SymmetricKey endpoint is available for host {0}", host));

                        return false;
                    }
                    else {
                        url.outValue = new Uri(StringHelper.Format(AutodiscoverService.AutodiscoverSoapWsSecuritySymmetricKeyHttpsUrl, host));
                    }
                }
                else if (this.Credentials instanceof X509CertificateCredentials) {
                    if ((endpoints & AutodiscoverEndpoints.WSSecurityX509Cert) != AutodiscoverEndpoints.WSSecurityX509Cert) {
                        this.TraceMessage(
                            TraceFlags.AutodiscoverConfiguration,
                            StringHelper.Format("No Autodiscover WS-Security/X509Cert endpoint is available for host {0}", host));

                        return false;
                    }
                    else {
                        url.outValue = new Uri(StringHelper.Format(AutodiscoverService.AutodiscoverSoapWsSecurityX509CertHttpsUrl, host));
                    }
                }
                else if (this.Credentials instanceof OAuthCredentials) {
                    // If the credential is OAuthCredentials, no matter whether we have
                    // the corresponding x-header, we will go with OAuth.
                    url.outValue = new Uri(StringHelper.Format(AutodiscoverService.AutodiscoverSoapHttpsUrl, host));
                }

                return true;
            }
            else {
                this.TraceMessage(
                    TraceFlags.AutodiscoverConfiguration,
                    StringHelper.Format("No Autodiscover endpoints are available for host {0}", host));

                return false;
            }
        }, (err) => { throw err; });
    }
    TryGetEnabledEndpointsForHost(host: IRefParam<string>, endpoints: IOutParam<AutodiscoverEndpoints>, currentHop: number = 0): IPromise<boolean> {

        this.TraceMessage(
            TraceFlags.AutodiscoverConfiguration,
            StringHelper.Format("Determining which endpoints are enabled for host {0}", host.getValue()));
        currentHop++;

        // We may get redirected to another host. And therefore need to limit the number
        // of redirections we'll tolerate.
        if (currentHop > AutodiscoverService.AutodiscoverMaxRedirections) {
            this.TraceMessage(
                TraceFlags.AutodiscoverConfiguration,
                StringHelper.Format("Maximum number of redirection hops {0} exceeded", AutodiscoverService.AutodiscoverMaxRedirections));

            throw new AutodiscoverLocalException("Maximum redirection hop reached"/*Strings.MaximumRedirectionHopsExceeded*/);
        }

        var autoDiscoverUrl: string = StringHelper.Format(AutodiscoverService.AutodiscoverLegacyHttpsUrl, host.getValue());

        endpoints.outValue = AutodiscoverEndpoints.None;

        var xhrOptions: IXHROptions = {
            type: "GET",
            url: autoDiscoverUrl,
        };


        //todo - optimize code, need to apply logic in failed errors as 401 go to onerror of xhr;
        return this.GetXHRApi.xhr(xhrOptions)
            .then((response: XMLHttpRequest) => {
                if (response != null) {
                    var redirectUrl: any = null;;
                    if ( /*"returns false aleways"*/ this.TryGetRedirectionResponse(response, { outValue: redirectUrl })) {
                        this.TraceMessage(
                            TraceFlags.AutodiscoverConfiguration,
                            StringHelper.Format("Host returned redirection to host '{0}'", redirectUrl.Host));

                        host.setValue(UriHelper.getHost(redirectUrl));
                    } else {
                        endpoints.outValue = this.GetEndpointsFromHttpResponse(response);

                        this.TraceMessage(
                            TraceFlags.AutodiscoverConfiguration,
                            StringHelper.Format("Host returned enabled endpoint flags: {0}", EnumHelper.ToString(AutodiscoverEndpoints, endpoints.outValue)));
                        return true;
                    }
                } else {
                    return false;
                }

            }, (resperr: XMLHttpRequest) => {

                if (resperr.status === 0) {
                    //catch (IOException ex)
                    this.TraceMessage(
                        TraceFlags.AutodiscoverConfiguration,
                        StringHelper.Format("I/O error: {0}", "unable to connect"));
                } else if (resperr.status === 401) {
                    endpoints.outValue = this.GetEndpointsFromHttpResponse(resperr);

                    this.TraceMessage(
                        TraceFlags.AutodiscoverConfiguration,
                        StringHelper.Format("Host returned enabled endpoint flags: {0}", EnumHelper.ToString(AutodiscoverEndpoints, endpoints.outValue)));
                    return true;
                } else {
                    //catch (WebException ex)
                    this.TraceMessage(
                        TraceFlags.AutodiscoverConfiguration,
                        StringHelper.Format("Request error: {0}, {1}", resperr.status, resperr.statusText));

                    //todo: possible?
                    // The exception response factory requires a valid HttpWebResponse,
                    // but there will be no web response if the web request couldn't be
                    // actually be issued (e.g. due to DNS error).
                    //if (ex.Response != null) {
                    //    response = this.HttpWebRequestFactory.CreateExceptionResponse(ex);
                    //}
                }
                return false;
            });

    }
    ThrowIfDuplicateRedirection(emailAddress: string, redirectionEmailAddresses: IRefParam<string[]>): void {

        // SMTP addresses are case-insensitive so entries are converted to lower-case.
        emailAddress = emailAddress.toLowerCase();

        if (redirectionEmailAddresses.getValue().indexOf(emailAddress) >= 0) {
            //this.EnableScpLookup = false;
            throw new AutodiscoverLocalException("Detected redirection loop, Redirection address already tried");
        }
        else {
            var oldcount = redirectionEmailAddresses.getValue().length;
            redirectionEmailAddresses.getValue().push(emailAddress);
            if (oldcount === redirectionEmailAddresses.getValue().length) {
                throw new Error("AutodiscoverService.ts - error in ref param logic, need to fix array type getter");
            }
            EwsLogging.Assert(false,
                "AutodiscoverService.ts - ThrowIfDuplicateRedirection",
                "AutodiscoverService.ts - array getter worked:), remove this message and throw statement");
        }

    }

    //TryGetPartnerAccess(targetTenantDomain: string, partnerAccessCredentials: any, targetTenantAutodiscoverUrl: any): boolean{ throw new Error("AutodiscoverService.ts - TryGetPartnerAccess : Not implemented.");}
    TryGetRedirectionResponse(response: XMLHttpRequest, redirectUrl: IOutParam<Uri>): boolean {
        this.TraceMessage(TraceFlags.DebugMessage,
            "cant determine redirectionResponse, 302 redirect code does not work in browser xhr and in Node.js http response");


        //redirectUrl.outValue = null;
        //if (AutodiscoverRequest.IsRedirectionResponse(response)) {
        //    // Get the redirect location and verify that it's valid.
        //    var location = response.getResponseHeader("Location");//. [HttpResponseHeader.Location];

        //    if (!StringHelper.IsNullOrEmpty(location)) {
        //        try
        //        {
        //            redirectUrl.outValue = location;

        //            // Check if URL is SSL and that the path matches.
        //            var match =  LegacyPathRegex.Match(redirectUrl.AbsolutePath);
        //            if ((redirectUrl.Scheme == UriHelper.UriSchemeHttps) &&
        //                match.Success) {
        //                this.TraceMessage(
        //                    TraceFlags.AutodiscoverConfiguration,
        //                    StringHelper.Format("Redirection URL found: '{0}'", redirectUrl));

        //                return true;
        //            }
        //        }
        //        catch (UriFormatException) {
        //            this.TraceMessage(
        //                TraceFlags.AutodiscoverConfiguration,
        //                StringHelper.Format("Invalid redirection URL was returned: '{0}'", location));
        //            return false;
        //        }
        //    }
        //}

        return false;
    }
    //TryLastChanceHostRedirection(emailAddress: string, redirectionUrl: string, settings: any): boolean{ throw new Error("AutodiscoverService.ts - TryLastChanceHostRedirection : Not implemented.");}
    //WriteLegacyAutodiscoverRequest(emailAddress: string, settings: ConfigurationSettingsBase, writer: any): any{ throw new Error("AutodiscoverService.ts - WriteLegacyAutodiscoverRequest : Not implemented.");}
}

//ref: converted to delegate type interface
export interface GetSettingsMethod<TGetSettingsResponseCollection, TSettingName> {
    (smtpAddresses: string[], settings: TSettingName[], requestedVersion: ExchangeVersion, autodiscoverUrl: IRefParam<Uri>, thisref: AutodiscoverService): IPromise<TGetSettingsResponseCollection>
}
//class GetSettingsMethod<TGetSettingsResponseCollection, TSettingName> extends System.MulticastDelegate {
//    BeginInvoke(smtpAddresses: System.Collections.Generic.List<string>, settings: System.Collections.Generic.List<T>, requestedVersion: Data.ExchangeVersion, autodiscoverUrl: any, callback: System.AsyncCallback, object: any): System.IAsyncResult { throw new Error("AutodiscoverService.ts - BeginInvoke : Not implemented."); }
//    EndInvoke(autodiscoverUrl: any, result: System.IAsyncResult): TGetSettingsResponseCollection { throw new Error("AutodiscoverService.ts - EndInvoke : Not implemented."); }
//    Invoke(smtpAddresses: System.Collections.Generic.List<string>, settings: System.Collections.Generic.List<T>, requestedVersion: Data.ExchangeVersion, autodiscoverUrl: any): TGetSettingsResponseCollection { throw new Error("AutodiscoverService.ts - Invoke : Not implemented."); }
//}


