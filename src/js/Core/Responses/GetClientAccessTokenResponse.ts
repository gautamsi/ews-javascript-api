import {ClientAccessTokenType} from "../../Enumerations/ClientAccessTokenType";
import {ExchangeService} from "../ExchangeService";
import {Convert} from "../../ExtensionMethods";
import {XmlElementNames} from "../XmlElementNames";

import {ServiceResponse} from "./ServiceResponse";
/**
 * Represents the response to a GetClientAccessToken operation.
 * 
 * @sealed
 */
export class GetClientAccessTokenResponse extends ServiceResponse {

	Id: string;
	TokenType: ClientAccessTokenType;
	TokenValue: string = null;
	TTL: number = 0;

	/**
	 * Initializes a new instance of the **GetClientAccessTokenResponse** class.
	 *
	 * @param   {string}   					id          Id
	 * @param   {ClientAccessTokenType}   	tokenType   Token type
	 */
	constructor(id: string, tokenType: ClientAccessTokenType);
	constructor(id: string = null, tokenType: ClientAccessTokenType = ClientAccessTokenType.CallerIdentity) {
		super();
		this.Id = id;
		this.TokenType = tokenType;
	}

	/**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {

		if (responseObject[XmlElementNames.Token]) {
			let jsObject = responseObject[XmlElementNames.Token];

			this.Id = jsObject[XmlElementNames.Id];
			this.TokenType = ClientAccessTokenType[<string>jsObject[XmlElementNames.TokenType]];
			this.TokenValue = jsObject[XmlElementNames.TokenValue];
			this.TTL = Convert.toNumber(jsObject[XmlElementNames.TTL]);
		}
	}
}