import {DnsSrvRecord} from "../Dns/DnsSrvRecord";
import {AutodiscoverService} from "./AutodiscoverService";
export class AutodiscoverDnsClient {
    private service: AutodiscoverService;
    private static randomTieBreakerSelector: any;
    private static AutoDiscoverSrvPrefix: string = "_autodiscover._tcp.";
    private static SslPort: number = 443;
    FindAutodiscoverHostFromSrv(domain: string): string { throw new Error("AutodiscoverDnsClient.ts - FindAutodiscoverHostFromSrv : Not implemented."); }
    FindBestMatchingSrvRecord(domain: string): DnsSrvRecord { throw new Error("AutodiscoverDnsClient.ts - FindBestMatchingSrvRecord : Not implemented."); }
}
