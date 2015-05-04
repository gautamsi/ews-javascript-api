import NotificationEvent = require("./NotificationEvent");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import JsonObject = require("../Core/JsonObject");
import ExchangeService = require("../Core/ExchangeService");
			
 class ItemEvent extends NotificationEvent {
	ItemId: ItemId;
	OldItemId: ItemId;
	private itemId: ItemId;
	private oldItemId: ItemId;
	InternalLoadFromXml(reader: EwsServiceXmlReader): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonEvent: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
}
export = ItemEvent;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
