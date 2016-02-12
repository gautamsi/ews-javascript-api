import {ClientApp} from "../../ComplexProperties/ClientApp";
import {ServiceResponse} from "./ServiceResponse";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
/**
 * ## *Not Implemented* 
 */
export class GetAppManifestsResponse extends ServiceResponse {
	Manifests: any /*System.Collections.ObjectModel.Collection<System.Xml.XmlDocument>*/;
	Apps: ClientApp[] /*System.Collections.ObjectModel.Collection<ClientApp>*/;
	private manifests: any /*System.Collections.ObjectModel.Collection<System.Xml.XmlDocument>*/;
	private apps: ClientApp[] /*System.Collections.ObjectModel.Collection<ClientApp>*/;
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void{ throw new Error("GetAppManifestsResponse.ts - ReadElementsFromXmlJsObject : Not implemented.");}
	ReadFromExchange2013(reader: EwsServiceXmlReader): void{ throw new Error("GetAppManifestsResponse.ts - ReadFromExchange2013 : Not implemented.");}
	ReadFromExchange2013Sp1(reader: EwsServiceXmlReader): void{ throw new Error("GetAppManifestsResponse.ts - ReadFromExchange2013Sp1 : Not implemented.");}
}