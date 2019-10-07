import { HttpStatusCode } from "../../lib/HttpStatusCode";

/** @internal */			
 export interface IEwsHttpWebResponse {
	ContentEncoding: string;
	ContentType: string;
	Headers: any /*System.Net.WebHeaderCollection*/;
	ResponseUri: string /*Uri*/;
	StatusCode: HttpStatusCode /*System.Net.HttpStatusCode*/;
	StatusDescription: string;
	ProtocolVersion: any /*System.Version*/;
	Close(): void;
	GetResponseStream(): any /*System.IO.Stream*/;
}






			