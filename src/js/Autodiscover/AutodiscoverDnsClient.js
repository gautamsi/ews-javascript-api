"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**@internal */
var AutodiscoverDnsClient = /** @class */ (function () {
    function AutodiscoverDnsClient() {
    }
    AutodiscoverDnsClient.prototype.FindAutodiscoverHostFromSrv = function (domain) { throw new Error("AutodiscoverDnsClient.ts - FindAutodiscoverHostFromSrv : Not implemented."); };
    AutodiscoverDnsClient.prototype.FindBestMatchingSrvRecord = function (domain) { throw new Error("AutodiscoverDnsClient.ts - FindBestMatchingSrvRecord : Not implemented."); };
    AutodiscoverDnsClient.AutoDiscoverSrvPrefix = "_autodiscover._tcp.";
    AutodiscoverDnsClient.SslPort = 443;
    return AutodiscoverDnsClient;
}());
exports.AutodiscoverDnsClient = AutodiscoverDnsClient;
