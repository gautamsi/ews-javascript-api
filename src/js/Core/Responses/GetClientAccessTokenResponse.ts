import {ServiceResponse} from "./ServiceResponse";
import {ClientAccessTokenType} from "../../Enumerations/ClientAccessTokenType";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
/**
 * ## *Not Implemented* 
 */
export class GetClientAccessTokenResponse extends ServiceResponse {
	Id: string;
	TokenType: ClientAccessTokenType;
	TokenValue: string;
	TTL: number;
	ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): void{ throw new Error("GetClientAccessTokenResponse.ts - ReadElementsFromJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void{ throw new Error("GetClientAccessTokenResponse.ts - ReadElementsFromXmlJsObject : Not implemented.");}
}