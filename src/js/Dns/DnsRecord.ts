import DnsRecordType = require("../Enumerations/DnsRecordType");
import DnsRecordHeader = require("./DnsRecordHeader");
			
 class DnsRecord {
	RecordType: DnsRecordType;
	Name: string;
	TimeToLive: any /*System.TimeSpan*/;
	private name: string;
	private timeToLive: number;
	Load(header: DnsRecordHeader, dataPointer: number): void{ throw new Error("DnsRecord.ts - Load : Not implemented.");}
}
export = DnsRecord;


//------------modulename->Microsoft.Exchange.WebServices.Dns------------


			
