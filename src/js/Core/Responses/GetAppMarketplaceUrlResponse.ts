import {ServiceResponse} from "./ServiceResponse";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
/**
 * ## *Not Implemented* 
 */
export class GetAppMarketplaceUrlResponse extends ServiceResponse {
	AppMarketplaceUrl: string;
	private appMarketplaceUrl: string;
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void{ throw new Error("GetAppMarketplaceUrlResponse.ts - ReadElementsFromXmlJsObject : Not implemented.");}
}