import DnsRecordType = require("../Enumerations/DnsRecordType");
import DnsQueryOptions = require("../Enumerations/DnsQueryOptions");
import FreeType = require("../Enumerations/FreeType");
			
 class DnsNativeMethods {
	 private static DNSAPI: string = "dnsapi.dll";
	AllocDnsServerList(dnsServerAddress: any /*System.Net.IPAddress*/): number{ throw new Error("DnsNativeMethods.ts - AllocDnsServerList : Not implemented.");}
	DnsQuery(pszName: string, wType: DnsRecordType, options: DnsQueryOptions, aipServers: number, ppQueryResults: number /*System.IntPtr&*/, pReserved: number): number{ throw new Error("DnsNativeMethods.ts - DnsQuery : Not implemented.");}
	//DnsQuery(domain: string, dnsServerAddress: any /*System.Net.IPAddress*/, recordType: DnsRecordType, ppQueryResults: number /*System.IntPtr&*/): number{ throw new Error("DnsNativeMethods.ts - DnsQuery : Not implemented.");}
	DnsRecordListFree(ptrRecords: number, freeType: FreeType): void{ throw new Error("DnsNativeMethods.ts - DnsRecordListFree : Not implemented.");}
	FreeDnsQueryResults(ptrRecords: number): void{ throw new Error("DnsNativeMethods.ts - FreeDnsQueryResults : Not implemented.");}
}
export = DnsNativeMethods;


//------------modulename->Microsoft.Exchange.WebServices.Dns------------


			
