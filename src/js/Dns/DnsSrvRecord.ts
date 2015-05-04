import DnsRecord = require("./DnsRecord");
import DnsRecordType = require("../Enumerations/DnsRecordType");
import DnsRecordHeader = require("./DnsRecordHeader");
			
 class DnsSrvRecord extends DnsRecord {
	RecordType: DnsRecordType;
	NameTarget: string;
	Priority: number;
	Weight: number;
	Port: number;
	private target: string;
	private priority: number;
	private weight: number;
	private port: number;
	Load(header: DnsRecordHeader, dataPointer: number): void{ throw new Error("Not implemented.");}
}
export = DnsSrvRecord;


//------------modulename->Microsoft.Exchange.WebServices.Dns------------


			
