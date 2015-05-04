import IEwsHttpWebResponse = require("./IEwsHttpWebResponse");
import IEwsHttpWebRequest = require("./IEwsHttpWebRequest");
			
 interface IEwsHttpWebRequestFactory {
	CreateExceptionResponse(exception: any /*System.Net.WebException*/): IEwsHttpWebResponse;
	CreateRequest(uri: string /*Uri*/): IEwsHttpWebRequest;
}
export = IEwsHttpWebRequestFactory;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
