import ServiceResponse = require("./ServiceResponse");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
			
 class GetAppManifestsResponse extends ServiceResponse {
	Manifests: any /*System.Collections.ObjectModel.Collection<System.Xml.XmlDocument>*/;
	Apps: ClientApp[] /*System.Collections.ObjectModel.Collection<ClientApp>*/;
	private manifests: any /*System.Collections.ObjectModel.Collection<System.Xml.XmlDocument>*/;
	private apps: ClientApp[] /*System.Collections.ObjectModel.Collection<ClientApp>*/;
	ReadElementsFromXml(reader: EwsServiceXmlReader): void{ throw new Error("Not implemented.");}
	ReadFromExchange2013(reader: EwsServiceXmlReader): void{ throw new Error("Not implemented.");}
	ReadFromExchange2013Sp1(reader: EwsServiceXmlReader): void{ throw new Error("Not implemented.");}
}
export = GetAppManifestsResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
