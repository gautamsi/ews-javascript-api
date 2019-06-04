"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @internal Defines supported Outlook protocls.
 */
var OutlookProtocolType;
(function (OutlookProtocolType) {
    /**
     * The Remote Procedure Call (RPC) protocol.
     */
    OutlookProtocolType[OutlookProtocolType["Rpc"] = 0] = "Rpc";
    /**
     * The Remote Procedure Call (RPC) over HTTP protocol.
     */
    OutlookProtocolType[OutlookProtocolType["RpcOverHttp"] = 1] = "RpcOverHttp";
    /**
     * The Web protocol.
     */
    OutlookProtocolType[OutlookProtocolType["Web"] = 2] = "Web";
    /**
     * The protocol is unknown.
     */
    OutlookProtocolType[OutlookProtocolType["Unknown"] = 3] = "Unknown";
})(OutlookProtocolType = exports.OutlookProtocolType || (exports.OutlookProtocolType = {}));
