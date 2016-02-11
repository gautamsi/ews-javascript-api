import {HangingRequestDisconnectEventArgs} from "./HangingRequestDisconnectEventArgs";
import {ServiceRequestBase} from "./ServiceRequestBase";
import {IEwsHttpWebResponse} from "../../Interfaces/IEwsHttpWebResponse";
import {IEwsHttpWebRequest} from "../../Interfaces/IEwsHttpWebRequest";
import {HangingRequestDisconnectReason} from "../../Enumerations/HangingRequestDisconnectReason";
import {Exception} from "../../Exceptions/Exception";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
/**
 * ## *Not Implemented* 
 */
export class HangingServiceRequestBase extends ServiceRequestBase {
	private static BufferSize: number = 4096;
	IsConnected: boolean;
	private responseHandler: HandleResponseObject;
	private response: IEwsHttpWebResponse;
	private request: IEwsHttpWebRequest;
	heartbeatFrequencyMilliseconds: number;
	private lockObject: any;
	private OnDisconnect: HangingRequestDisconnectHandler;
	static LogAllWireBytes: boolean;
	Disconnect(): void { throw new Error("HangingServiceRequestBase.ts - Disconnect : Not implemented."); }
	//Disconnect(reason: HangingRequestDisconnectReason, exception: Exception): void{ throw new Error("HangingServiceRequestBase.ts - Disconnect : Not implemented.");}
	InternalExecute(): void { throw new Error("HangingServiceRequestBase.ts - InternalExecute : Not implemented."); }
	InternalOnConnect(): void { throw new Error("HangingServiceRequestBase.ts - InternalOnConnect : Not implemented."); }
	InternalOnDisconnect(reason: HangingRequestDisconnectReason, exception: Exception): void { throw new Error("HangingServiceRequestBase.ts - InternalOnDisconnect : Not implemented."); }
	ParseResponses(state: any): void { throw new Error("HangingServiceRequestBase.ts - ParseResponses : Not implemented."); }
	ReadPreamble(ewsXmlReader: EwsServiceXmlReader): void { throw new Error("HangingServiceRequestBase.ts - ReadPreamble : Not implemented."); }
}

interface HangingRequestDisconnectHandler {
	(sender: any, args: HangingRequestDisconnectEventArgs): void;
}

interface HandleResponseObject {
	(response: any): void;
}