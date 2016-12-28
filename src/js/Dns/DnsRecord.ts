import {DnsRecordType} from "../Enumerations/DnsRecordType";
import {DnsRecordHeader} from "./DnsRecordHeader";
/**@internal */
export class DnsRecord {
	RecordType: DnsRecordType;
	Name: string;
	TimeToLive: any /*System.TimeSpan*/;
	private name: string;
	private timeToLive: number;
	Load(header: DnsRecordHeader, dataPointer: number): void{ throw new Error("DnsRecord.ts - Load : Not implemented.");}
}



//------------modulename->Microsoft.Exchange.WebServices.Dns------------


			

