
/**
 * @internal DNS record types.
 */
export enum DnsRecordType {
    
    /**
     * RFC 1034/1035 Address Record
     */
    A = 0x0001,//1
    
    /**
     * Canonical Name Record
     */
    CNAME = 0x0005,//5
    
    /**
     * Start of Authority Record
     */
    SOA = 0x0006,//6
    
    /**
     * Pointer Record
     */
    PTR = 0x000c,//12
    
    /**
     * Mail Exchange Record
     */
    MX = 0x000f,//15
    
    /**
     * Text Record
     */
    TXT = 0x0010,//16,
    
    /**
     * RFC 1886 (IPv6 Address)
     */
    AAAA = 0x001c,//28,
    
    /**
     * Service location - RFC 2052
     */
    SRV = 0x0021,//33
}