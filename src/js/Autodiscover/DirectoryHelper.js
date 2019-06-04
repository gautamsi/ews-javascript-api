"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DirectoryHelper = /** @class */ (function () {
    function DirectoryHelper() {
    }
    DirectoryHelper.prototype.GetAutodiscoverScpUrlsForDomain = function (domainName) { throw new Error("DirectoryHelper.ts - GetAutodiscoverScpUrlsForDomain : Not implemented."); };
    DirectoryHelper.prototype.GetScpUrlList = function (domainName, ldapPath, maxHops) { throw new Error("DirectoryHelper.ts - GetScpUrlList : Not implemented."); };
    DirectoryHelper.prototype.GetSiteName = function () { throw new Error("DirectoryHelper.ts - GetSiteName : Not implemented."); };
    DirectoryHelper.prototype.TraceMessage = function (message) { throw new Error("DirectoryHelper.ts - TraceMessage : Not implemented."); };
    //private service: ExchangeServiceBase;
    DirectoryHelper.AutodiscoverMaxScpHops = 10;
    DirectoryHelper.ScpUrlGuidString = "77378F46-2C66-4aa9-A6A6-3E7A48B19596";
    DirectoryHelper.ScpPtrGuidString = "67661d7F-8FC4-4fa7-BFAC-E1D7794C1F68";
    DirectoryHelper.ScpFilterString = "(&(objectClass=serviceConnectionPoint)(|(keywords=67661d7F-8FC4-4fa7-BFAC-E1D7794C1F68)(keywords=77378F46-2C66-4aa9-A6A6-3E7A48B19596)))";
    return DirectoryHelper;
}());
exports.DirectoryHelper = DirectoryHelper;
