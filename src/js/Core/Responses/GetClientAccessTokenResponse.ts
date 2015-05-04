import ServiceResponse = require("./ServiceResponse");
import ClientAccessTokenType = require("../../Enumerations/ClientAccessTokenType");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
			
 class GetClientAccessTokenResponse extends ServiceResponse {
	Id: string;
	TokenType: ClientAccessTokenType;
	TokenValue: string;
	TTL: number;
	ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	ReadElementsFromXml(reader: EwsServiceXmlReader): void{ throw new Error("Not implemented.");}
}
export = GetClientAccessTokenResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
