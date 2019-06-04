"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Strings_1 = require("../Strings");
var OAuthCredentials_1 = require("../Credentials/OAuthCredentials");
var X509CertificateCredentials_1 = require("../Credentials/X509CertificateCredentials");
var PartnerTokenCredentials_1 = require("../Credentials/PartnerTokenCredentials");
var WindowsLiveCredentials_1 = require("../Credentials/WindowsLiveCredentials");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var EwsLogging_1 = require("../Core/EwsLogging");
var AutodiscoverEndpoints_1 = require("../Enumerations/AutodiscoverEndpoints");
var TraceFlags_1 = require("../Enumerations/TraceFlags");
var AutodiscoverErrorCode_1 = require("../Enumerations/AutodiscoverErrorCode");
var GetDomainSettingsRequest_1 = require("./Requests/GetDomainSettingsRequest");
var GetUserSettingsRequest_1 = require("./Requests/GetUserSettingsRequest");
//import {WindowsLiveCredentials} from "../Credentials/WindowsLiveCredentials";
var AutodiscoverLocalException_1 = require("../Exceptions/AutodiscoverLocalException");
var ServiceVersionException_1 = require("../Exceptions/ServiceVersionException");
var ServiceValidationException_1 = require("../Exceptions/ServiceValidationException");
var ExtensionMethods_1 = require("../ExtensionMethods");
var Uri_1 = require("../Uri");
var ExchangeServiceBase_1 = require("../Core/ExchangeServiceBase");
var AutodiscoverService = /** @class */ (function (_super) {
    __extends(AutodiscoverService, _super);
    function AutodiscoverService(domainUrlServiceOrVersion, domainOrVersion, version) {
        if (version === void 0) { version = ExchangeVersion_1.ExchangeVersion.Exchange2010; }
        var _this = this;
        var argsLength = arguments.length;
        if (argsLength > 3) {
            throw new Error("AutodiscoverService.ts - ctor with " + argsLength + " parameters, invalid number of arguments, check documentation and try again.");
        }
        //EwsUtilities.ValidateDomainNameAllowNull(domainOrVersion, "domain"); 
        var domain = null;
        var url = null;
        var service = null;
        var requestedServerVersion = ExchangeVersion_1.ExchangeVersion.Exchange2010;
        var hasService = false;
        var hasVersion = false;
        if (argsLength >= 1) {
            if (domainUrlServiceOrVersion instanceof Uri_1.Uri) {
                url = domainUrlServiceOrVersion;
            }
            else if (domainUrlServiceOrVersion instanceof ExchangeServiceBase_1.ExchangeServiceBase) {
                service = domainUrlServiceOrVersion;
                hasService = true;
            }
            else if (typeof domainUrlServiceOrVersion === 'string') {
                domain = domainUrlServiceOrVersion;
            }
            else if (typeof domainUrlServiceOrVersion === 'number') {
                requestedServerVersion = domainUrlServiceOrVersion;
                hasVersion = true;
            }
        }
        if (argsLength >= 2) {
            if (typeof domainOrVersion === 'string') {
                if (!(domainUrlServiceOrVersion instanceof Uri_1.Uri)) {
                    throw new Error("AutodiscoverService.ts - ctor with " + argsLength + " parameters - incorrect uses of parameter at 1st position, it must be Uri when using string at 2nd place");
                }
                domain = domainOrVersion;
            }
            else if (typeof domainOrVersion === 'number') {
                requestedServerVersion = domainOrVersion;
            }
        }
        if (argsLength === 3) {
            requestedServerVersion = version;
        }
        if (service !== null && typeof service !== 'undefined') {
            _this = _super.call(this, service, requestedServerVersion) || this;
        }
        else {
            _this = _super.call(this, requestedServerVersion) || this;
            _this.url = url;
            _this.domain = domain;
        }
        return _this;
    }
    Object.defineProperty(AutodiscoverService.prototype, "Domain", {
        //private isExternal: boolean;
        //private redirectionUrlValidationCallback: AutodiscoverRedirectionUrlValidationCallback;
        //private dnsClient: AutodiscoverDnsClient;
        //private dnsServerAddress: any;// System.Net.IPAddress;
        //private enableScpLookup: boolean;
        get: function () {
            return this.domain;
        },
        set: function (value) {
            this.domain = value;
            if (value)
                this.url = undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutodiscoverService.prototype, "Url", {
        get: function () {
            return this.url;
        },
        set: function (value) {
            if (value)
                this.domain = value.Host;
            this.url = value;
        },
        enumerable: true,
        configurable: true
    });
    AutodiscoverService.prototype.CallRedirectionUrlValidationCallback = function (redirectionUrl) {
        var callback = (this.RedirectionUrlValidationCallback == null)
            ? this.DefaultAutodiscoverRedirectionUrlValidationCallback
            : this.RedirectionUrlValidationCallback;
        return callback(redirectionUrl);
    };
    AutodiscoverService.prototype.DefaultAutodiscoverRedirectionUrlValidationCallback = function (redirectionUrl) {
        throw new AutodiscoverLocalException_1.AutodiscoverLocalException(ExtensionMethods_1.StringHelper.Format("Autodiscover redirection is blocked for url: {0}" /*Strings.AutodiscoverRedirectBlocked*/, redirectionUrl));
    };
    //DefaultGetScpUrlsForDomain(domainName: string): string[] { return null; }// System.Collections.Generic.ICollection<string>{ throw new Error("AutodiscoverService.ts - DefaultGetScpUrlsForDomain : Not implemented.");}
    //DisableScpLookupIfDuplicateRedirection(emailAddress: string, redirectionEmailAddresses: string[]): any{ throw new Error("AutodiscoverService.ts - DisableScpLookupIfDuplicateRedirection : Not implemented.");}
    AutodiscoverService.prototype.GetAutodiscoverEndpointUrl = function (host) {
        var autodiscoverUrlOut = { outValue: null };
        return this.TryGetAutodiscoverEndpointUrl(host, autodiscoverUrlOut)
            .then(function (value) {
            if (value) {
                return autodiscoverUrlOut.outValue;
            }
            else {
                throw new AutodiscoverLocalException_1.AutodiscoverLocalException("no soap or WsSecurity endpoint available" /*Strings.NoSoapOrWsSecurityEndpointAvailable*/);
            }
        }, function (err) {
            throw new AutodiscoverLocalException_1.AutodiscoverLocalException("no soap or WsSecurity endpoint available" /*Strings.NoSoapOrWsSecurityEndpointAvailable*/);
        });
    };
    //--done
    AutodiscoverService.prototype.GetAutodiscoverServiceHosts = function (domainName) {
        var serviceHosts = [];
        var urls = this.GetAutodiscoverServiceUrls(domainName);
        for (var _a = 0, urls_1 = urls; _a < urls_1.length; _a++) {
            var url = urls_1[_a];
            serviceHosts.push(ExtensionMethods_1.UriHelper.getHost(url));
        }
        return serviceHosts;
    };
    //--done
    AutodiscoverService.prototype.GetAutodiscoverServiceUrls = function (domainName) {
        var urls = [];
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
        urls.push(ExtensionMethods_1.StringHelper.Format(AutodiscoverService.AutodiscoverLegacyHttpsUrl, "autodiscover." + domainName));
        urls.push(ExtensionMethods_1.StringHelper.Format(AutodiscoverService.AutodiscoverLegacyHttpsUrl, domainName));
        return urls;
    };
    AutodiscoverService.prototype.GetDomainSettings = function (domainOrDomainNames, settingsOrVersion, versionOrSettingNames //...params DomainSettingName[]
    ) {
        // EwsUtilities.ValidateParam(domains, "domains");
        // EwsUtilities.ValidateParam(settings, "settings");
        var requestedVersion = null;
        var settings = [];
        if (arguments.length <= 3) {
            if (Array.isArray(settingsOrVersion)) {
                settings = settingsOrVersion;
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
            requestedVersion = settingsOrVersion;
        }
        var isCollection = true;
        var domains = domainOrDomainNames;
        if (!Array.isArray(domainOrDomainNames)) {
            domains = [domainOrDomainNames];
            isCollection = false;
        }
        return this.GetSettings(domains, settings, requestedVersion, this.InternalGetDomainSettings, function () { return domains[0]; }).then(function (value) {
            if (isCollection) {
                return value;
            }
            else {
                return value.__thisIndexer(0);
            }
        }, function (error) {
            throw error;
        });
        // var request = new GetDomainSettingsRequest(this, this.url);
        // request.Settings = domainSettingNames;
        // request.Domains = [domain];
        // var response = request.Execute();
        // return <any>response;
    };
    //previous name - GetEndpointsFromHttpWebResponse
    AutodiscoverService.prototype.GetEndpointsFromHttpResponse = function (response) {
        var endpoints = AutodiscoverEndpoints_1.AutodiscoverEndpoints.Legacy;
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(response.getResponseHeader(AutodiscoverService.AutodiscoverSoapEnabledHeaderName))) {
            endpoints |= AutodiscoverEndpoints_1.AutodiscoverEndpoints.Soap;
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(response.getResponseHeader(AutodiscoverService.AutodiscoverWsSecurityEnabledHeaderName))) {
            endpoints |= AutodiscoverEndpoints_1.AutodiscoverEndpoints.WsSecurity;
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(response.getResponseHeader(AutodiscoverService.AutodiscoverWsSecuritySymmetricKeyEnabledHeaderName))) {
            endpoints |= AutodiscoverEndpoints_1.AutodiscoverEndpoints.WSSecuritySymmetricKey;
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(response.getResponseHeader(AutodiscoverService.AutodiscoverWsSecurityX509CertEnabledHeaderName))) {
            endpoints |= AutodiscoverEndpoints_1.AutodiscoverEndpoints.WSSecurityX509Cert;
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(response.getResponseHeader(AutodiscoverService.AutodiscoverOAuthEnabledHeaderName))) {
            endpoints |= AutodiscoverEndpoints_1.AutodiscoverEndpoints.OAuth;
        }
        return endpoints;
    };
    //GetLegacyUserSettings(emailAddress: string): any{ throw new Error("AutodiscoverService.ts - GetLegacyUserSettings : Not implemented.");}
    //GetLegacyUserSettingsAtUrl(emailAddress: string, url: Uri): any{ throw new Error("AutodiscoverService.ts - GetLegacyUserSettingsAtUrl : Not implemented.");}
    //GetRedirectionUrlFromDnsSrvRecord(domainName: string): Uri{ throw new Error("AutodiscoverService.ts - GetRedirectionUrlFromDnsSrvRecord : Not implemented.");}
    AutodiscoverService.prototype.GetRedirectUrl = function (domainName) {
        var _this = this;
        var url = ExtensionMethods_1.StringHelper.Format(AutodiscoverService.AutodiscoverLegacyHttpUrl, "autodiscover." + domainName);
        this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("Trying to get Autodiscover redirection URL from {0}.", url));
        var xhrOptions = {
            type: "GET",
            url: url,
        };
        return this.XHRApi.xhr(xhrOptions)
            .then(function (response) {
            if (response != null) {
                _this.TraceMessage(TraceFlags_1.TraceFlags.All, "***hard checking for office 365 with node.js http request and presence of header x-federationtrusttokenissueruri= urn:federation:MicrosoftOnline");
                var redirectUrl = null;
                if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(response.getResponseHeader("x-federationtrusttokenissueruri"))) {
                    if (response.getResponseHeader("x-federationtrusttokenissueruri") === "urn:federation:MicrosoftOnline")
                        redirectUrl = "https://autodiscover-s.outlook.com/autodiscover/autodiscover.svc";
                    return new Uri_1.Uri(redirectUrl);
                }
                //if (this.TryGetRedirectionResponse(response, redirectUrl)) {
                //    return redirectUrl;
                //}
            }
            _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, "No Autodiscover redirection URL was returned.");
            return null;
        }, function (resperr) {
            if (resperr.status === 0) {
                //catch (IOException ex)
                _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("I/O error: {0}", "unable to connect"));
            }
            else {
                //catch (WebException ex)
                _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("--Request error: {0}, {1}", resperr.status, resperr.statusText));
                //todo: possible?
                // The exception response factory requires a valid HttpWebResponse,
                // but there will be no web response if the web request couldn't be
                // actually be issued (e.g. due to DNS error).
                //if (ex.Response != null) {
                //    response = this.HttpWebRequestFactory.CreateExceptionResponse(ex);
                //}
            }
            if (resperr.status === 401) { //unauthorized in case it was redirected, checking header now
                _this.TraceMessage(TraceFlags_1.TraceFlags.All, "***hard checking for office 365 with node.js http request and presence of header x-federationtrusttokenissueruri= urn:federation:MicrosoftOnline");
                var redirectUrl = null;
                if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(resperr.getResponseHeader("x-federationtrusttokenissueruri"))) {
                    if (resperr.getResponseHeader("x-federationtrusttokenissueruri") === "urn:federation:MicrosoftOnline") {
                        redirectUrl = "https://autodiscover-s.outlook.com/autodiscover/autodiscover.svc";
                        _this.TraceMessage(TraceFlags_1.TraceFlags.All, "possible hard match for O365 based on federation header (could be any legitimate 302 redirect - less likely)\r\n trying to connect to O365 multitenent autodiscover url: " + redirectUrl);
                    }
                    return new Uri_1.Uri(redirectUrl);
                }
            }
            return null;
        });
    };
    AutodiscoverService.prototype.GetSettings = function (identities, settings, requestedVersion, getSettingsMethod, getDomainMethod) {
        var _this = this;
        // Autodiscover service only exists in E14 or later.
        if (this.RequestedServerVersion < AutodiscoverService.MinimumRequestVersionForAutoDiscoverSoapService) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.AutodiscoverServiceIncompatibleWithRequestVersion, AutodiscoverService.MinimumRequestVersionForAutoDiscoverSoapService));
        }
        var response = null;
        var autodiscoverUrlRef = { getValue: function () { return _this.Url; }, setValue: function (url) { return _this.url = url; } };
        // If Url is specified, call service directly.
        if (this.Url != null) {
            return getSettingsMethod(identities, settings, requestedVersion, autodiscoverUrlRef, this)
                .then(function (response) {
                _this.Url = autodiscoverUrlRef.getValue();
                return response;
            });
        }
        // If Domain is specified, determine endpoint Url and call service.
        else if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Domain)) {
            return this.GetAutodiscoverEndpointUrl(this.Domain)
                .then(function (adsvcurl) {
                autodiscoverUrlRef = { getValue: function () { return adsvcurl; } };
                return getSettingsMethod(identities, settings, requestedVersion, autodiscoverUrlRef, _this)
                    .then(function (response) {
                    // If we got this far, response was successful, set Url.
                    _this.Url = autodiscoverUrlRef.getValue();
                    return response;
                });
            });
        }
        // No Url or Domain specified, need to figure out which endpoint(s) to try.
        else {
            // Assume caller is not inside the Intranet, regardless of whether SCP Urls
            // were returned or not. SCP Urls are only relevent if one of them returns
            // valid Autodiscover settings.
            this.IsExternal = true;
            var autodiscoverOutUrl = { outValue: undefined };
            var domainName = getDomainMethod();
            var scpHostCount;
            var hosts = this.GetAutodiscoverServiceHosts(domainName); //, scpHostCount);
            if (hosts.length == 0) {
                throw new ServiceValidationException_1.ServiceValidationException("autodiscover service request requires domain or url"
                /*Strings.AutodiscoverServiceRequestRequiresDomainOrUrl*/ );
            }
            return this.GetSettingsRecursiveLookup(identities, settings, requestedVersion, getSettingsMethod, autodiscoverUrlRef, hosts).then(function (response) {
                return response;
            }, function (err) {
                _this.TraceMessage(TraceFlags_1.TraceFlags.DebugMessage, "--hard checking for office 365 with node.js http request and presence of header x-federationtrusttokenissueruri: urn:federation:MicrosoftOnline. All other redirection wil fail");
                // Next-to-last chance: try unauthenticated GET over HTTP to be redirected to appropriate service endpoint.
                return _this.GetRedirectUrl(domainName).then(function (autodiscoverUrl) {
                    if ((autodiscoverUrl != null) &&
                        _this.CallRedirectionUrlValidationCallback(autodiscoverUrl.ToString())) {
                        return _this.TryGetAutodiscoverEndpointUrl(autodiscoverUrl.Host, { outValue: autodiscoverUrl }).then(function (value) {
                            if (value) {
                                return getSettingsMethod(identities, settings, requestedVersion, { getValue: function () { return autodiscoverUrl; } }, _this).then(function (response) {
                                    // If we got this far, response was successful, set Url.
                                    _this.Url = autodiscoverUrl;
                                    return response;
                                });
                            }
                        });
                    }
                }, function (err) {
                    throw new AutodiscoverLocalException_1.AutodiscoverLocalException("Autodiscover could not be located, skipped srv record lookup, not implement in this js version" /*Strings.AutodiscoverCouldNotBeLocated*/);
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
    };
    AutodiscoverService.prototype.GetSettingsRecursiveLookup = function (identities, settings, requestedVersion, getSettingsMethod, autodiscoverUrlRef, hosts, currentHostIndex) {
        //        for (var currentHostIndex = 0; currentHostIndex < hosts.length; currentHostIndex++) {
        var _this = this;
        if (currentHostIndex === void 0) { currentHostIndex = 0; }
        if (currentHostIndex >= hosts.length)
            throw new AutodiscoverLocalException_1.AutodiscoverLocalException("***cannot determine based on autodiscover host names");
        var host = hosts[currentHostIndex];
        // var isScpHost:bool = currentHostIndex < scpHostCount;
        var autodiscoverUrlOut = { outValue: null };
        return this.TryGetAutodiscoverEndpointUrl(host, autodiscoverUrlOut)
            .then(function (value) {
            if (value) {
                // If we got this far, the response was successful, set Url.
                _this.Url = autodiscoverUrlOut.outValue;
                return getSettingsMethod(identities, settings, requestedVersion, autodiscoverUrlRef, _this).then(function (response) {
                    // Not external if Autodiscover endpoint found via SCP returned the settings.
                    //if (isScpHost) {
                    //    this.IsExternal = false;
                    //}
                    return response;
                });
            }
            else {
                currentHostIndex++;
                return _this.GetSettingsRecursiveLookup(identities, settings, requestedVersion, getSettingsMethod, autodiscoverUrlRef, hosts, currentHostIndex);
            }
        }, function (err) {
            currentHostIndex++;
            return _this.GetSettingsRecursiveLookup(identities, settings, requestedVersion, getSettingsMethod, autodiscoverUrlRef, hosts, currentHostIndex);
        });
    };
    AutodiscoverService.prototype.GetUserSettings = function (smtpAddresses, userSettings) {
        var userSettingNames = [];
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
            return this.GetSettings(smtpAddresses, userSettingNames, null, this.InternalGetUserSettings, function () { return EwsUtilities_1.EwsUtilities.DomainFromEmailAddress(smtpAddresses[0]); });
        }
        var userSmtpAddress = smtpAddresses;
        //List < UserSettingName > requestedSettings = new List<UserSettingName>(userSettingNames);
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(userSmtpAddress)) {
            throw new ServiceValidationException_1.ServiceValidationException("invalid autodiscover smtp address" /*Strings.InvalidAutodiscoverSmtpAddress*/);
        }
        var requestedSettings = userSettingNames || [];
        if (requestedSettings.length == 0) {
            throw new ServiceValidationException_1.ServiceValidationException("invalid autodiscover setting count" /*Strings.InvalidAutodiscoverSettingsCount*/);
        }
        if (this.RequestedServerVersion < AutodiscoverService.MinimumRequestVersionForAutoDiscoverSoapService) {
            return this.InternalGetLegacyUserSettings(userSmtpAddress, requestedSettings);
        }
        else {
            return this.InternalGetSoapUserSettings(userSmtpAddress, requestedSettings);
        }
    };
    AutodiscoverService.prototype.GetUsersSettings = function (userSmtpAddresses) {
        var userSettingNames = [];
        for (var _a = 1; _a < arguments.length; _a++) {
            userSettingNames[_a - 1] = arguments[_a];
        }
        if (this.RequestedServerVersion < AutodiscoverService.MinimumRequestVersionForAutoDiscoverSoapService) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(/*Strings.AutodiscoverServiceIncompatibleWithRequestVersion*/ "autodiscover service is incompatible with requested versio, minimum versi supported is {0}", AutodiscoverService.MinimumRequestVersionForAutoDiscoverSoapService));
        }
        ////var smtpAddresses: string[] = []// new List<string>(userSmtpAddresses);
        ////if (userSmtpAddresses)
        ////    userSmtpAddresses.forEach((s) => smtpAddresses.push(s));
        ////else throw new Error("invalid input");
        ////var settingNames: UserSettingName[] = [];// List<UserSettingName>(userSettingNames);
        ////if(userSettingNames)
        ////userSettingNames.forEach((s)=> settingNames.push());
        return this.GetUserSettings(userSmtpAddresses, userSettingNames); //calls getsettings
    };
    AutodiscoverService.prototype.InternalGetDomainSettings = function (domains, settings, requestedVersion, autodiscoverUrlRef, thisref, currentHop) {
        var _this = this;
        if (currentHop === void 0) { currentHop = 0; }
        // The response to GetDomainSettings can be a redirection. Execute GetDomainSettings until we get back 
        // a valid response or we've followed too many redirections.
        currentHop++;
        if (currentHop > AutodiscoverService.AutodiscoverMaxRedirections) {
            this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("Maximum number of redirection hops {0} exceeded", AutodiscoverService.AutodiscoverMaxRedirections));
            throw new AutodiscoverLocalException_1.AutodiscoverLocalException(Strings_1.Strings.AutodiscoverCouldNotBeLocated);
        }
        //BUG  - Typescript bug, reference for "this" inside multiple layers of IPromise points to global this object;
        //(may be not) - this functional is called as delegate under Promise chaining, loss poiters to this.
        //var request: GetUserSettingsRequest = new GetUserSettingsRequest(this, autodiscoverUrlRef.refvalue);
        var request = new GetDomainSettingsRequest_1.GetDomainSettingsRequest(thisref, autodiscoverUrlRef.getValue());
        request.Settings = settings;
        request.Domains = domains;
        return request.Execute().then(function (response) {
            // Did we get redirected?
            if (response.ErrorCode == AutodiscoverErrorCode_1.AutodiscoverErrorCode.RedirectUrl && response.RedirectionUrl != null) {
                _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("Request to {0} returned redirection to {1}", autodiscoverUrlRef.getValue().ToString(), response.RedirectionUrl.ToString()));
                // this url need be brought back to the caller.
                //
                autodiscoverUrlRef.setValue(response.RedirectionUrl);
                return _this.InternalGetDomainSettings(domains, settings, requestedVersion, autodiscoverUrlRef, thisref, currentHop);
            }
            else {
                return response;
            }
        });
    };
    AutodiscoverService.prototype.InternalGetLegacyUserSettings = function (emailAddress, requestedSettings) {
        throw new Error("Not implemented.");
    };
    AutodiscoverService.prototype.InternalGetLegacyUserSettingsPrivate = function (emailAddress, redirectionEmailAddresses, currentHop) {
        throw new Error("Not implemented.");
    };
    AutodiscoverService.prototype.InternalGetSoapUserSettings = function (smtpAddress, requestedSettings) {
        var smtpAddresses = [];
        smtpAddresses.push(smtpAddress);
        var redirectionEmailAddresses = [];
        redirectionEmailAddresses.push(smtpAddress.toLowerCase());
        return this.InternalGetSoapUserSettingsRecursive(smtpAddresses, requestedSettings, redirectionEmailAddresses);
    };
    AutodiscoverService.prototype.InternalGetSoapUserSettingsRecursive = function (smtpAddresses, requestedSettings, redirectionEmailAddresses, currentHop) {
        var _this = this;
        if (redirectionEmailAddresses === void 0) { redirectionEmailAddresses = []; }
        if (currentHop === void 0) { currentHop = 0; }
        currentHop++;
        //if (currentHop > AutodiscoverService.AutodiscoverMaxRedirections)
        //    throw new AutodiscoverLocalException(Strings.AutodiscoverCouldNotBeLocated);
        return this.GetUserSettings(smtpAddresses, requestedSettings)
            .then(function (resp) {
            var response = resp.Responses[0];
            switch (response.ErrorCode) {
                case AutodiscoverErrorCode_1.AutodiscoverErrorCode.RedirectAddress:
                    _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverResponse, ExtensionMethods_1.StringHelper.Format("Autodiscover service returned redirection email address '{0}'.", response.RedirectTarget));
                    smtpAddresses.splice(0);
                    smtpAddresses.push(response.RedirectTarget.toLowerCase());
                    _this.Url = null;
                    _this.Domain = null;
                    // If this email address was already tried, we may have a loop
                    // in SCP lookups. Disable consideration of SCP records.
                    _this.ThrowIfDuplicateRedirection(response.RedirectTarget, { getValue: function () { return redirectionEmailAddresses; } });
                    return _this.InternalGetSoapUserSettingsRecursive(smtpAddresses, requestedSettings, redirectionEmailAddresses, currentHop);
                    break;
                case AutodiscoverErrorCode_1.AutodiscoverErrorCode.RedirectUrl:
                    _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverResponse, ExtensionMethods_1.StringHelper.Format("Autodiscover service returned redirection URL '{0}'.", response.RedirectTarget));
                    _this.Url = _this.Credentials.AdjustUrl(new Uri_1.Uri(response.RedirectTarget));
                    return _this.InternalGetSoapUserSettingsRecursive(smtpAddresses, requestedSettings, redirectionEmailAddresses, currentHop);
                    break;
                case AutodiscoverErrorCode_1.AutodiscoverErrorCode.NoError:
                default:
                    return response;
                //return IPromise.as(response);
            }
        }, function (err) {
            throw err;
        });
    };
    AutodiscoverService.prototype.InternalGetUserSettings = function (smtpAddresses, settings, requestedVersion, autodiscoverUrlRef, thisref, currentHop) {
        var _this = this;
        if (currentHop === void 0) { currentHop = 0; }
        // The response to GetUserSettings can be a redirection. Execute GetUserSettings until we get back
        // a valid response or we've followed too many redirections.
        //this function is called recursively for that
        currentHop++;
        if (currentHop > AutodiscoverService.AutodiscoverMaxRedirections) {
            this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("Maximum number of redirection hops {0} exceeded", AutodiscoverService.AutodiscoverMaxRedirections));
            throw new AutodiscoverLocalException_1.AutodiscoverLocalException("Autodiscover settings could not be located, max redirection reached" /*Strings.AutodiscoverCouldNotBeLocated*/);
        }
        //BUG  - Typescript bug, reference for "this" inside multiple layers of IPromise points to global this object;
        //(may be not) - this functional is called as delegate under Promise chaining, loss poiters to this.
        //var request: GetUserSettingsRequest = new GetUserSettingsRequest(this, autodiscoverUrlRef.refvalue);
        var request = new GetUserSettingsRequest_1.GetUserSettingsRequest(thisref, autodiscoverUrlRef.getValue());
        request.SmtpAddresses = smtpAddresses;
        request.Settings = settings;
        return request.Execute().then(function (response) {
            // Did we get redirected?
            if (response.ErrorCode == AutodiscoverErrorCode_1.AutodiscoverErrorCode.RedirectUrl && response.RedirectionUrl != null) {
                _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("Request to {0} returned redirection to {1}", autodiscoverUrlRef.getValue().ToString(), response.RedirectionUrl.ToString()));
                // this url need be brought back to the caller.
                //
                autodiscoverUrlRef.setValue(response.RedirectionUrl);
                return _this.InternalGetUserSettings(smtpAddresses, settings, requestedVersion, autodiscoverUrlRef, thisref, currentHop);
            }
            else {
                return response;
            }
        });
    };
    //PrepareHttpWebRequestForUrl(url: Uri): Data.IEwsHttpWebRequest{ throw new Error("AutodiscoverService.ts - PrepareHttpWebRequestForUrl : Not implemented.");}
    //ProcessHttpErrorResponse(httpWebResponse: Data.IEwsHttpWebResponse, webException: any): any{ throw new Error("AutodiscoverService.ts - ProcessHttpErrorResponse : Not implemented.");}
    AutodiscoverService.prototype.ProcessHttpErrorResponse = function (httpWebResponse, webException) { /*throw new Error("Not implemented.")*/ ; };
    AutodiscoverService.prototype.TraceResponse = function (response, memoryStream) {
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
    };
    AutodiscoverService.prototype.TryGetAutodiscoverEndpointUrl = function (host, url) {
        var _this = this;
        url.outValue = null;
        var endpointsOut = { outValue: AutodiscoverEndpoints_1.AutodiscoverEndpoints.None };
        return this.TryGetEnabledEndpointsForHost({ getValue: function () { return host; }, setValue: function (value) { return host = value; } }, endpointsOut).then(function (value) {
            if (value) {
                url.outValue = new Uri_1.Uri(ExtensionMethods_1.StringHelper.Format(AutodiscoverService.AutodiscoverSoapHttpsUrl, host));
                var endpoints = endpointsOut.outValue;
                // Make sure that at least one of the non-legacy endpoints is available.
                if (((endpoints & AutodiscoverEndpoints_1.AutodiscoverEndpoints.Soap) != AutodiscoverEndpoints_1.AutodiscoverEndpoints.Soap) &&
                    ((endpoints & AutodiscoverEndpoints_1.AutodiscoverEndpoints.WsSecurity) != AutodiscoverEndpoints_1.AutodiscoverEndpoints.WsSecurity) &&
                    ((endpoints & AutodiscoverEndpoints_1.AutodiscoverEndpoints.WSSecuritySymmetricKey) != AutodiscoverEndpoints_1.AutodiscoverEndpoints.WSSecuritySymmetricKey) &&
                    ((endpoints & AutodiscoverEndpoints_1.AutodiscoverEndpoints.WSSecurityX509Cert) != AutodiscoverEndpoints_1.AutodiscoverEndpoints.WSSecurityX509Cert) &&
                    ((endpoints & AutodiscoverEndpoints_1.AutodiscoverEndpoints.OAuth) != AutodiscoverEndpoints_1.AutodiscoverEndpoints.OAuth)) {
                    _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("No Autodiscover endpoints are available  for host {0}", host));
                    return false;
                }
                // If we have WLID credentials, make sure that we have a WS-Security endpoint
                return true;
                if (_this.Credentials instanceof WindowsLiveCredentials_1.WindowsLiveCredentials) {
                    if ((endpoints & AutodiscoverEndpoints_1.AutodiscoverEndpoints.WsSecurity) != AutodiscoverEndpoints_1.AutodiscoverEndpoints.WsSecurity) {
                        _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("No Autodiscover WS-Security endpoint is available for host {0}", host));
                        return false;
                    }
                    else {
                        url.outValue = new Uri_1.Uri(ExtensionMethods_1.StringHelper.Format(AutodiscoverService.AutodiscoverSoapWsSecurityHttpsUrl, host));
                    }
                }
                else if (_this.Credentials instanceof PartnerTokenCredentials_1.PartnerTokenCredentials) {
                    if ((endpoints & AutodiscoverEndpoints_1.AutodiscoverEndpoints.WSSecuritySymmetricKey) != AutodiscoverEndpoints_1.AutodiscoverEndpoints.WSSecuritySymmetricKey) {
                        _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("No Autodiscover WS-Security/SymmetricKey endpoint is available for host {0}", host));
                        return false;
                    }
                    else {
                        url.outValue = new Uri_1.Uri(ExtensionMethods_1.StringHelper.Format(AutodiscoverService.AutodiscoverSoapWsSecuritySymmetricKeyHttpsUrl, host));
                    }
                }
                else if (_this.Credentials instanceof X509CertificateCredentials_1.X509CertificateCredentials) {
                    if ((endpoints & AutodiscoverEndpoints_1.AutodiscoverEndpoints.WSSecurityX509Cert) != AutodiscoverEndpoints_1.AutodiscoverEndpoints.WSSecurityX509Cert) {
                        _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("No Autodiscover WS-Security/X509Cert endpoint is available for host {0}", host));
                        return false;
                    }
                    else {
                        url.outValue = new Uri_1.Uri(ExtensionMethods_1.StringHelper.Format(AutodiscoverService.AutodiscoverSoapWsSecurityX509CertHttpsUrl, host));
                    }
                }
                else if (_this.Credentials instanceof OAuthCredentials_1.OAuthCredentials) {
                    // If the credential is OAuthCredentials, no matter whether we have
                    // the corresponding x-header, we will go with OAuth.
                    url.outValue = new Uri_1.Uri(ExtensionMethods_1.StringHelper.Format(AutodiscoverService.AutodiscoverSoapHttpsUrl, host));
                }
                return true;
            }
            else {
                _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("No Autodiscover endpoints are available for host {0}", host));
                return false;
            }
        }, function (err) { throw err; });
    };
    AutodiscoverService.prototype.TryGetEnabledEndpointsForHost = function (host, endpoints, currentHop) {
        var _this = this;
        if (currentHop === void 0) { currentHop = 0; }
        this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("Determining which endpoints are enabled for host {0}", host.getValue()));
        currentHop++;
        // We may get redirected to another host. And therefore need to limit the number
        // of redirections we'll tolerate.
        if (currentHop > AutodiscoverService.AutodiscoverMaxRedirections) {
            this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("Maximum number of redirection hops {0} exceeded", AutodiscoverService.AutodiscoverMaxRedirections));
            throw new AutodiscoverLocalException_1.AutodiscoverLocalException("Maximum redirection hop reached" /*Strings.MaximumRedirectionHopsExceeded*/);
        }
        var autoDiscoverUrl = ExtensionMethods_1.StringHelper.Format(AutodiscoverService.AutodiscoverLegacyHttpsUrl, host.getValue());
        endpoints.outValue = AutodiscoverEndpoints_1.AutodiscoverEndpoints.None;
        var xhrOptions = {
            type: "GET",
            url: autoDiscoverUrl,
        };
        //todo - optimize code, need to apply logic in failed errors as 401 go to onerror of xhr;
        return this.XHRApi.xhr(xhrOptions)
            .then(function (response) {
            if (response != null) {
                var redirectUrl = null;
                ;
                if ( /*"returns false aleways"*/_this.TryGetRedirectionResponse(response, { outValue: redirectUrl })) {
                    _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("Host returned redirection to host '{0}'", redirectUrl.Host));
                    host.setValue(ExtensionMethods_1.UriHelper.getHost(redirectUrl));
                }
                else {
                    endpoints.outValue = _this.GetEndpointsFromHttpResponse(response);
                    _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("Host returned enabled endpoint flags: {0}", ExtensionMethods_1.EnumHelper.ToString(AutodiscoverEndpoints_1.AutodiscoverEndpoints, endpoints.outValue)));
                    return true;
                }
            }
            else {
                return false;
            }
        }, function (resperr) {
            if (resperr.status === 0) {
                //catch (IOException ex)
                _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("I/O error: {0}", "unable to connect"));
            }
            else if (resperr.status === 401) {
                endpoints.outValue = _this.GetEndpointsFromHttpResponse(resperr);
                _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("Host returned enabled endpoint flags: {0}", ExtensionMethods_1.EnumHelper.ToString(AutodiscoverEndpoints_1.AutodiscoverEndpoints, endpoints.outValue)));
                return true;
            }
            else {
                //catch (WebException ex)
                _this.TraceMessage(TraceFlags_1.TraceFlags.AutodiscoverConfiguration, ExtensionMethods_1.StringHelper.Format("Request error: {0}, {1}", resperr.status, resperr.statusText));
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
    };
    AutodiscoverService.prototype.ThrowIfDuplicateRedirection = function (emailAddress, redirectionEmailAddresses) {
        // SMTP addresses are case-insensitive so entries are converted to lower-case.
        emailAddress = emailAddress.toLowerCase();
        if (redirectionEmailAddresses.getValue().indexOf(emailAddress) >= 0) {
            //this.EnableScpLookup = false;
            throw new AutodiscoverLocalException_1.AutodiscoverLocalException("Detected redirection loop, Redirection address already tried");
        }
        else {
            var oldcount = redirectionEmailAddresses.getValue().length;
            redirectionEmailAddresses.getValue().push(emailAddress);
            if (oldcount === redirectionEmailAddresses.getValue().length) {
                throw new Error("AutodiscoverService.ts - error in ref param logic, need to fix array type getter");
            }
            EwsLogging_1.EwsLogging.Assert(false, "AutodiscoverService.ts - ThrowIfDuplicateRedirection", "AutodiscoverService.ts - array getter worked:), remove this message and throw statement");
        }
    };
    //TryGetPartnerAccess(targetTenantDomain: string, partnerAccessCredentials: any, targetTenantAutodiscoverUrl: any): boolean{ throw new Error("AutodiscoverService.ts - TryGetPartnerAccess : Not implemented.");}
    AutodiscoverService.prototype.TryGetRedirectionResponse = function (response, redirectUrl) {
        this.TraceMessage(TraceFlags_1.TraceFlags.DebugMessage, "cant determine redirectionResponse, 302 redirect code does not work in browser xhr and in Node.js http response");
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
    };
    AutodiscoverService.AutodiscoverLegacyPath = "/autodiscover/autodiscover.xml";
    AutodiscoverService.AutodiscoverLegacyUrl = "{0}://{1}" + AutodiscoverService.AutodiscoverLegacyPath;
    AutodiscoverService.AutodiscoverLegacyHttpsUrl = "https://{0}" + AutodiscoverService.AutodiscoverLegacyPath;
    AutodiscoverService.AutodiscoverLegacyHttpUrl = "http://{0}" + AutodiscoverService.AutodiscoverLegacyPath;
    AutodiscoverService.AutodiscoverSoapHttpsUrl = "https://{0}/autodiscover/autodiscover.svc";
    AutodiscoverService.AutodiscoverSoapWsSecurityHttpsUrl = AutodiscoverService.AutodiscoverSoapHttpsUrl + "/wssecurity";
    AutodiscoverService.AutodiscoverSoapWsSecuritySymmetricKeyHttpsUrl = AutodiscoverService.AutodiscoverSoapHttpsUrl + "/wssecurity/symmetrickey";
    AutodiscoverService.AutodiscoverSoapWsSecurityX509CertHttpsUrl = AutodiscoverService.AutodiscoverSoapHttpsUrl + "/wssecurity/x509cert";
    AutodiscoverService.AutodiscoverRequestNamespace = "http://schemas.microsoft.com/exchange/autodiscover/outlook/requestschema/2006";
    AutodiscoverService.AutodiscoverMaxRedirections = 10;
    AutodiscoverService.AutodiscoverSoapEnabledHeaderName = "X-SOAP-Enabled";
    AutodiscoverService.AutodiscoverWsSecurityEnabledHeaderName = "X-WSSecurity-Enabled";
    AutodiscoverService.AutodiscoverWsSecuritySymmetricKeyEnabledHeaderName = "X-WSSecurity-SymmetricKey-Enabled";
    AutodiscoverService.AutodiscoverWsSecurityX509CertEnabledHeaderName = "X-WSSecurity-X509Cert-Enabled";
    AutodiscoverService.AutodiscoverOAuthEnabledHeaderName = "X-OAuth-Enabled";
    AutodiscoverService.LegacyPathRegex = new RegExp("\/autodiscover/([^/]+/)*autodiscover.xml");
    AutodiscoverService.MinimumRequestVersionForAutoDiscoverSoapService = ExchangeVersion_1.ExchangeVersion.Exchange2010;
    return AutodiscoverService;
}(ExchangeServiceBase_1.ExchangeServiceBase));
exports.AutodiscoverService = AutodiscoverService;
//class GetSettingsMethod<TGetSettingsResponseCollection, TSettingName> extends System.MulticastDelegate {
//    BeginInvoke(smtpAddresses: System.Collections.Generic.List<string>, settings: System.Collections.Generic.List<T>, requestedVersion: Data.ExchangeVersion, autodiscoverUrl: any, callback: System.AsyncCallback, object: any): System.IAsyncResult { throw new Error("AutodiscoverService.ts - BeginInvoke : Not implemented."); }
//    EndInvoke(autodiscoverUrl: any, result: System.IAsyncResult): TGetSettingsResponseCollection { throw new Error("AutodiscoverService.ts - EndInvoke : Not implemented."); }
//    Invoke(smtpAddresses: System.Collections.Generic.List<string>, settings: System.Collections.Generic.List<T>, requestedVersion: Data.ExchangeVersion, autodiscoverUrl: any): TGetSettingsResponseCollection { throw new Error("AutodiscoverService.ts - Invoke : Not implemented."); }
//}
