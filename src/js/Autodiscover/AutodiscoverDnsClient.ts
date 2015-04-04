import AutodiscoverService = require("./AutodiscoverService");
class AutodiscoverDnsClient {
    private service: AutodiscoverService;
    private static randomTieBreakerSelector: any;
    private static AutoDiscoverSrvPrefix: string = "_autodiscover._tcp.";
    private static SslPort: number = 443;
    FindAutodiscoverHostFromSrv(domain: string): string { throw new Error("Not implemented."); }
    FindBestMatchingSrvRecord(domain: string): DnsSrvRecord { throw new Error("Not implemented."); }
}
export = AutodiscoverDnsClient;

//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;