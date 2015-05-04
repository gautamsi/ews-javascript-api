import NotificationEvent = require("./NotificationEvent");
import FolderId = require("../ComplexProperties/FolderId");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import JsonObject = require("../Core/JsonObject");
import ExchangeService = require("../Core/ExchangeService");
			
 class FolderEvent extends NotificationEvent {
	FolderId: FolderId;
	OldFolderId: FolderId;
	UnreadCount: number;
	private folderId: FolderId;
	private oldFolderId: FolderId;
	private unreadCount: number;
	InternalLoadFromXml(reader: EwsServiceXmlReader): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonEvent: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
}
export = FolderEvent;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
