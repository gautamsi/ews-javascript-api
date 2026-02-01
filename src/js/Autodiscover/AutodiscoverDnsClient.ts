import { AutodiscoverService } from "./AutodiscoverService";
import { EwsLogging } from "../Core/EwsLogging";
import { StringHelper } from "../ExtensionMethods";
import { TraceFlags } from "../Enumerations/TraceFlags";

interface ADnsSrvRecord {
  priority: number;
  weight: number;
  port: number;
  name: string;
}

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
   * @internal Initializes a new instance of the **AutodiscoverDnsClient** class.
   *
   * @param   {AutodiscoverService}   service   The service.
   */
  constructor(service: AutodiscoverService) {
    this.service = service;
  }

  //#region Instance methods

  /**
   * @internal Finds the Autodiscover host from DNS SRV records.
   *  @remarks    If the domain to lookup is "contoso.com", Autodiscover will use DnsQuery on SRV records for "_autodiscover._tcp.contoso.com". If the query is successful it will return a target domain (e.g. "mail.contoso.com") which will be tried as an Autodiscover endpoint.
   * @param   {string}   domain   The domain.
   * @return  {Promise<string>}   Autodiscover hostname (will be null if lookup failed).
   */
  async FindAutodiscoverHostFromSrv(domain: string): Promise<string> {
    const domainToMatch: string = AutodiscoverDnsClient.AutoDiscoverSrvPrefix + domain;

    const dnsSrvRecord: ADnsSrvRecord = await this.FindBestMatchingSrvRecord(domainToMatch);

    if ((dnsSrvRecord == null) || StringHelper.IsNullOrEmpty(dnsSrvRecord.name)) {
      this.service.TraceMessage(
        TraceFlags.AutodiscoverConfiguration,
        "No appropriate SRV record was found.");
      return null;
    }

    this.service.TraceMessage(
      TraceFlags.AutodiscoverConfiguration,
      StringHelper.Format("DNS query for SRV record for domain {0} found {1}", domain, dnsSrvRecord.name));

    return dnsSrvRecord.name;

  }

  /**
   * Finds the best matching SRV record.
   *
   * @param   {string}   domain   The domain.
   * @return  {Promise<ADnsSrvRecord>}      DnsSrvRecord(will be null if lookup failed).
   */
  private async FindBestMatchingSrvRecord(domain: string): Promise<ADnsSrvRecord> {
    return new Promise((resolve, reject) => {

      let dnsSrvRecordList: ADnsSrvRecord[];
      let dns = null;
      try {
        // try to get the dns client, only works on nodejs, not valid in browser\
        dns = require("dns");
      } catch (error) {
        resolve(null);
        return;
      }

      if (!StringHelper.IsNullOrEmpty(this.service.DnsServerAddress)) {
        const servers = dns.getServers();
        dns.setServers([this.service.DnsServerAddress, ...servers]);
      }

      dns.resolveSrv(domain, (dnsError, dnsSrvRecordList) => {
        if (dnsError) {
          const dnsExcMessage = StringHelper.Format(
            "DnsQuery returned error error '{0}' error code '{1}'.",
            dnsError.message,
            dnsError.code || dnsError.errno);
          resolve(null);
          return;
        }
        this.service.TraceMessage(
          TraceFlags.AutodiscoverConfiguration,
          StringHelper.Format("{0} SRV records were returned.", (dnsSrvRecordList || []).length));

        if (!dnsSrvRecordList || dnsSrvRecordList.length === 0) {
          resolve(null);
          return;
        }

        // filter the addresses with ssl port
        dnsSrvRecordList = dnsSrvRecordList.filter(a => a.port === AutodiscoverDnsClient.SslPort);

        // Records were returned but nothing matched our criteria.
        if (dnsSrvRecordList.length === 0) {
          this.service.TraceMessage(
            TraceFlags.AutodiscoverConfiguration,
            "No appropriate SRV records were found.");
          resolve(null);
          return;
        }

        // sort all records with the same (highest) priority and weight.
        let bestDnsSrvRecordList = dnsSrvRecordList.sort((a, b) => a.priority === b.priority ? b.weight - a.weight : a.priority - b.priority);

        // pick top one which has highest priority and highest weight value
        const priority = bestDnsSrvRecordList[0].priority;
        const weight = bestDnsSrvRecordList[0].weight;

        // filter with highest priority and weight;
        bestDnsSrvRecordList = bestDnsSrvRecordList.filter(a => a.priority === priority && a.weight === weight);

        // The list must contain at least one matching record since we found one earlier.
        EwsLogging.Assert(
          dnsSrvRecordList.length > 0,
          "AutodiscoverDnsClient.FindBestMatchingSrvRecord",
          "At least one DNS SRV record must match the criteria.");

        // If we have multiple records with the same priority and weight, randomly pick one.
        const recordIndex = bestDnsSrvRecordList.length > 1 ? Math.floor(Math.random() * Math.floor(bestDnsSrvRecordList.length)) : 0;
        const bestDnsSrvRecord: ADnsSrvRecord = bestDnsSrvRecordList[recordIndex];
        const traceMessage = StringHelper.Format(
          "Returning SRV record {0} of {1} records. Target: {2}, Priority: {3}, Weight: {4}",
          recordIndex,
          dnsSrvRecordList.length,
          bestDnsSrvRecord.name,
          bestDnsSrvRecord.priority,
          bestDnsSrvRecord.weight);
        this.service.TraceMessage(TraceFlags.AutodiscoverConfiguration, traceMessage);

        resolve(bestDnsSrvRecord);
      });
    });

    //#endregion
  }
}
