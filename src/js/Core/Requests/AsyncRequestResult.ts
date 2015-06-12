import {ServiceRequestBase} from "./ServiceRequestBase";
import {IEwsHttpWebRequest} from "../../Interfaces/IEwsHttpWebRequest";
import {ExchangeService} from "../ExchangeService";
export class AsyncRequestResult {
	ServiceRequest: ServiceRequestBase;
	WebRequest: IEwsHttpWebRequest;
	WebAsyncResult: any /*System.IAsyncResult*/;
	AsyncState: any;
	AsyncWaitHandle: any /*System.Threading.WaitHandle*/;
	CompletedSynchronously: boolean;
	IsCompleted: boolean;
	ExtractServiceRequest<T>(exchangeService: ExchangeService, asyncResult: any /*System.IAsyncResult*/): T{ throw new Error("AsyncRequestResult.ts - ExtractServiceRequest<T> : Not implemented.");}
}






			

