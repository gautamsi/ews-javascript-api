"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @internal */
var OutlookProtocol = /** @class */ (function () {
    function OutlookProtocol() {
    }
    OutlookProtocol.prototype.ConvertEcpFragmentToUrl = function (fragment) { throw new Error("OutlookProtocol.ts - ConvertEcpFragmentToUrl : Not implemented."); };
    OutlookProtocol.prototype.ConvertToUserSettings = function (requestedSettings, response) { throw new Error("OutlookProtocol.ts - ConvertToUserSettings : Not implemented."); };
    //LoadFromXml(reader: EwsXmlReader): any { throw new Error("OutlookProtocol.ts - LoadFromXml : Not implemented."); }
    //LoadWebClientUrlsFromXml(reader: EwsXmlReader, webClientUrls: WebClientUrlCollection, elementName: string): any { throw new Error("OutlookProtocol.ts - LoadWebClientUrlsFromXml : Not implemented."); }
    OutlookProtocol.prototype.ProtocolNameToType = function (protocolName) { throw new Error("OutlookProtocol.ts - ProtocolNameToType : Not implemented."); };
    OutlookProtocol.EXPR = "EXPR";
    OutlookProtocol.EXCH = "EXCH";
    OutlookProtocol.WEB = "WEB";
    return OutlookProtocol;
}());
exports.OutlookProtocol = OutlookProtocol;
