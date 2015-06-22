import {ItemId} from "../ComplexProperties/ItemId";
import {NotificationEvent} from "./NotificationEvent";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {JsonObject} from "../Core/JsonObject";
import {ExchangeService} from "../Core/ExchangeService";
export class ItemEvent extends NotificationEvent {
	ItemId: ItemId;
	OldItemId: ItemId;
	private itemId: ItemId;
	private oldItemId: ItemId;
	InternalLoadFromXml(reader: EwsServiceXmlReader): void{ throw new Error("ItemEvent.ts - InternalLoadFromXml : Not implemented.");}
	LoadFromJson(jsonEvent: JsonObject, service: ExchangeService): void{ throw new Error("ItemEvent.ts - LoadFromJson : Not implemented.");}
}






			

