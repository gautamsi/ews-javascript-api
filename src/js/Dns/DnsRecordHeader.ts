import {DnsRecordType} from "../Enumerations/DnsRecordType";
/** @internal */
export class DnsRecordHeader {
	NextRecord: number;
	Name: string;
	RecordType: DnsRecordType;
	DataLength: number;
	Flags: number;
	Ttl: number;
	Reserved: number;
}



//------------modulename->Microsoft.Exchange.WebServices.Dns------------


			

