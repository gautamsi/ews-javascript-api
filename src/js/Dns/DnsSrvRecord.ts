import {DnsRecord} from "./DnsRecord";
import {DnsRecordType} from "../Enumerations/DnsRecordType";
import {DnsRecordHeader} from "./DnsRecordHeader";
/** @internal */
export class DnsSrvRecord extends DnsRecord {
	RecordType: DnsRecordType;
	NameTarget: string;
	Priority: number;
	Weight: number;
	Port: number;
	private target: string;
	private priority: number;
	private weight: number;
	private port: number;
	Load(header: DnsRecordHeader, dataPointer: number): void{ throw new Error("DnsSrvRecord.ts - Load : Not implemented.");}
}



//------------modulename->Microsoft.Exchange.WebServices.Dns------------


			

