import {ExchangeService} from "../Core/ExchangeService";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class SubscriptionBase {
	Service: ExchangeService;
	Id: string;
	Watermark: string;
	UsesWatermark: boolean;
	private service: ExchangeService;
	private id: string;
	private watermark: string;
	LoadFromJson(jsonResponse: JsonObject, service: ExchangeService): void{ throw new Error("SubscriptionBase.ts - LoadFromJson : Not implemented.");}
	LoadFromXml(reader: EwsServiceXmlReader): void{ throw new Error("SubscriptionBase.ts - LoadFromXml : Not implemented.");}
}






			

