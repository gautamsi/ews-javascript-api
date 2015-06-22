import {NotificationEvent} from "./NotificationEvent";
import {FolderId} from "../ComplexProperties/FolderId";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {JsonObject} from "../Core/JsonObject";
import {ExchangeService} from "../Core/ExchangeService";
export class FolderEvent extends NotificationEvent {
	FolderId: FolderId;
	OldFolderId: FolderId;
	UnreadCount: number;
	private folderId: FolderId;
	private oldFolderId: FolderId;
	private unreadCount: number;
	InternalLoadFromXml(reader: EwsServiceXmlReader): void{ throw new Error("FolderEvent.ts - InternalLoadFromXml : Not implemented.");}
	LoadFromJson(jsonEvent: JsonObject, service: ExchangeService): void{ throw new Error("FolderEvent.ts - LoadFromJson : Not implemented.");}
}






			

