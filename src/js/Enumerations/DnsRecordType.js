"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @internal DNS record types.
 */
var DnsRecordType;
(function (DnsRecordType) {
    /**
     * RFC 1034/1035 Address Record
     */
    DnsRecordType[DnsRecordType["A"] = 1] = "A";
    /**
     * Canonical Name Record
     */
    DnsRecordType[DnsRecordType["CNAME"] = 5] = "CNAME";
    /**
     * Start of Authority Record
     */
    DnsRecordType[DnsRecordType["SOA"] = 6] = "SOA";
    /**
     * Pointer Record
     */
    DnsRecordType[DnsRecordType["PTR"] = 12] = "PTR";
    /**
     * Mail Exchange Record
     */
    DnsRecordType[DnsRecordType["MX"] = 15] = "MX";
    /**
     * Text Record
     */
    DnsRecordType[DnsRecordType["TXT"] = 16] = "TXT";
    /**
     * RFC 1886 (IPv6 Address)
     */
    DnsRecordType[DnsRecordType["AAAA"] = 28] = "AAAA";
    /**
     * Service location - RFC 2052
     */
    DnsRecordType[DnsRecordType["SRV"] = 33] = "SRV";
})(DnsRecordType = exports.DnsRecordType || (exports.DnsRecordType = {}));
