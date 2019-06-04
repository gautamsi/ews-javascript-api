"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines flags to control tracing details
 *
 * [Flags]
 */
var TraceFlags;
(function (TraceFlags) {
    /**
     * No tracing.
     */
    TraceFlags[TraceFlags["None"] = 0] = "None";
    /**
     * Trace EWS request messages.
     */
    TraceFlags[TraceFlags["EwsRequest"] = 1] = "EwsRequest";
    /**
     * Trace EWS response messages.
     */
    TraceFlags[TraceFlags["EwsResponse"] = 2] = "EwsResponse";
    /**
     * Trace EWS response HTTP headers.
     */
    TraceFlags[TraceFlags["EwsResponseHttpHeaders"] = 4] = "EwsResponseHttpHeaders";
    /**
     * Trace Autodiscover request messages.
     */
    TraceFlags[TraceFlags["AutodiscoverRequest"] = 8] = "AutodiscoverRequest";
    /**
     * Trace Autodiscover response messages.
     */
    TraceFlags[TraceFlags["AutodiscoverResponse"] = 16] = "AutodiscoverResponse";
    /**
     * Trace Autodiscover response HTTP headers.
     */
    TraceFlags[TraceFlags["AutodiscoverResponseHttpHeaders"] = 32] = "AutodiscoverResponseHttpHeaders";
    /**
     * Trace Autodiscover configuration logic.
     */
    TraceFlags[TraceFlags["AutodiscoverConfiguration"] = 64] = "AutodiscoverConfiguration";
    /**
     * Trace messages used in debugging the Exchange Web Services Managed API
     */
    TraceFlags[TraceFlags["DebugMessage"] = 128] = "DebugMessage";
    /**
     * Trace EWS request HTTP headers.
     */
    TraceFlags[TraceFlags["EwsRequestHttpHeaders"] = 256] = "EwsRequestHttpHeaders";
    /**
     * Trace Autodiscover request HTTP headers.
     */
    TraceFlags[TraceFlags["AutodiscoverRequestHttpHeaders"] = 512] = "AutodiscoverRequestHttpHeaders";
    /**
     * Trace EWS timezone related logic.
     */
    TraceFlags[TraceFlags["EwsTimeZones"] = 1024] = "EwsTimeZones";
    /**
     * All trace types enabled.
     */
    TraceFlags[TraceFlags["All"] = 9223372036854776000] = "All";
})(TraceFlags = exports.TraceFlags || (exports.TraceFlags = {}));
