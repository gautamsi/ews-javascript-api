import DnsRecordType = require("../Enumerations/DnsRecordType");
			
 class DnsRecordHeader {
	NextRecord: number;
	Name: string;
	RecordType: DnsRecordType;
	DataLength: number;
	Flags: number;
	Ttl: number;
	Reserved: number;
}
export = DnsRecordHeader;


//------------modulename->Microsoft.Exchange.WebServices.Dns------------


			
