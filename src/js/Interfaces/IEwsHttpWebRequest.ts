			
 interface IEwsHttpWebRequest {
	Accept: string;
	AllowAutoRedirect: boolean;
	ClientCertificates: any /*System.Security.Cryptography.X509Certificates.X509CertificateCollection*/;
	ContentType: string;
	CookieContainer: any /*System.Net.CookieContainer*/;
	Credentials: any /*System.Net.ICredentials*/;
	Headers: any /*System.Net.WebHeaderCollection*/;
	Method: string;
	PreAuthenticate: boolean;
	Proxy: any /*System.Net.IWebProxy*/;
	RequestUri: string /*Uri*/;
	Timeout: number;
	UseDefaultCredentials: boolean;
	UserAgent: string;
	KeepAlive: boolean;
	ConnectionGroupName: string;
	Abort(): void;
	BeginGetRequestStream(callback: any /*System.AsyncCallback*/, state: any): any /*System.IAsyncResult*/;
	BeginGetResponse(callback: any /*System.AsyncCallback*/, state: any): any /*System.IAsyncResult*/;
	EndGetRequestStream(asyncResult: any /*System.IAsyncResult*/): any /*System.IO.Stream*/;
	EndGetResponse(asyncResult: any /*System.IAsyncResult*/): IEwsHttpWebResponse;
	GetRequestStream(): any /*System.IO.Stream*/;
	GetResponse(): IEwsHttpWebResponse;
}
export = IEwsHttpWebRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			