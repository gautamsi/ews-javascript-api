			
 interface IEwsHttpWebResponse {
	ContentEncoding: string;
	ContentType: string;
	Headers: any /*System.Net.WebHeaderCollection*/;
	ResponseUri: string /*Uri*/;
	StatusCode: any /*System.Net.HttpStatusCode*/;
	StatusDescription: string;
	ProtocolVersion: any /*System.Version*/;
	Close(): void;
	GetResponseStream(): any /*System.IO.Stream*/;
}
export = IEwsHttpWebResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			