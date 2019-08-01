import { DnsSrvRecord } from "../Dns/DnsSrvRecord";
import { AutodiscoverService } from "./AutodiscoverService";

/**
 * @internal Class that reads AutoDiscover configuration information from DNS.
 */
export class AutodiscoverDnsClient {
    //#region Constants
    /**
     * SRV DNS prefix to lookup.
     *
     * @static
     */
    private static AutoDiscoverSrvPrefix: string = "_autodiscover._tcp.";

    /**
     * We are only interested in records that use SSL.
     *
     * @static
     */
    private static SslPort: number = 443;
    //#endregion

    /**
     * Random selector in the case of ties.
     *
     * @static
     */
    private static randomTieBreakerSelector: any;
    
    /**
     * AutodiscoverService using this DNS reader.
     */
    private service: AutodiscoverService;

    /**
     * Initializes a new instance of the **AutodiscoverDnsClient** class.
     *
     * @param   {AutodiscoverService}   service   The service.
     */    
    constructor(service: AutodiscoverService) {
        this.service = service;
    }
    
    FindAutodiscoverHostFromSrv(domain: string): string { throw new Error("AutodiscoverDnsClient.ts - FindAutodiscoverHostFromSrv : Not implemented."); }
    FindBestMatchingSrvRecord(domain: string): DnsSrvRecord { throw new Error("AutodiscoverDnsClient.ts - FindBestMatchingSrvRecord : Not implemented."); }
}
