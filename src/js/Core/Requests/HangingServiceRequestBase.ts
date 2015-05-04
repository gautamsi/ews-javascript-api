import HangingRequestDisconnectEventArgs = require("./HangingRequestDisconnectEventArgs");
import ServiceRequestBase = require("./ServiceRequestBase");
import IEwsHttpWebResponse = require("../../Interfaces/IEwsHttpWebResponse");
import IEwsHttpWebRequest = require("../../Interfaces/IEwsHttpWebRequest");
import HangingRequestDisconnectReason = require("../../Enumerations/HangingRequestDisconnectReason");
import Exception = require("../../Exceptions/Exception");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");

class HangingServiceRequestBase extends ServiceRequestBase {
	IsConnected: boolean;
	private responseHandler: HandleResponseObject;
	private response: IEwsHttpWebResponse;
	private request: IEwsHttpWebRequest;
	heartbeatFrequencyMilliseconds: number;
	private lockObject: any;
	private OnDisconnect: HangingRequestDisconnectHandler;
	static LogAllWireBytes: boolean;
	Disconnect(): void { throw new Error("Not implemented."); }
	//Disconnect(reason: HangingRequestDisconnectReason, exception: Exception): void{ throw new Error("Not implemented.");}
	InternalExecute(): void { throw new Error("Not implemented."); }
	InternalOnConnect(): void { throw new Error("Not implemented."); }
	InternalOnDisconnect(reason: HangingRequestDisconnectReason, exception: Exception): void { throw new Error("Not implemented."); }
	ParseResponses(state: any): void { throw new Error("Not implemented."); }
	ReadPreamble(ewsXmlReader: EwsServiceXmlReader): void { throw new Error("Not implemented."); }
}

interface HangingRequestDisconnectHandler {
	(sender: any, args: HangingRequestDisconnectEventArgs): void;
}

interface HandleResponseObject {
	(response: any): void;
}




export = HangingServiceRequestBase;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
