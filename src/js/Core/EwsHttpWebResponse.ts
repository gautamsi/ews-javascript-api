import IEwsHttpWebResponse = require("../Interfaces/IEwsHttpWebResponse");
			
 class EwsHttpWebResponse implements IEwsHttpWebResponse{
	private ContentEncoding: string;
	private ContentType: string;
	private Headers: any /*System.Net.WebHeaderCollection*/;
	private ResponseUri: string /*Uri*/;
	private StatusCode: any /*System.Net.HttpStatusCode*/;
	private StatusDescription: string;
	private ProtocolVersion: any /*System.Version*/;
	private response: any /*System.Net.HttpWebResponse*/;
}
export = EwsHttpWebResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
