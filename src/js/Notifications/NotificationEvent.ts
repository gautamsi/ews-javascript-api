import {EventType} from "../Enumerations/EventType";
import {FolderId} from "../ComplexProperties/FolderId";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {JsonObject} from "../Core/JsonObject";
import {ExchangeService} from "../Core/ExchangeService";
export class NotificationEvent {
	EventType: EventType;
	TimeStamp: Date;
	ParentFolderId: FolderId;
	OldParentFolderId: FolderId;
	private eventType: EventType;
	private timestamp: Date;
	private parentFolderId: FolderId;
	private oldParentFolderId: FolderId;
	InternalLoadFromXml(reader: EwsServiceXmlReader): void{ throw new Error("NotificationEvent.ts - InternalLoadFromXml : Not implemented.");}
	LoadFromJson(jsonEvent: JsonObject, service: ExchangeService): void{ throw new Error("NotificationEvent.ts - LoadFromJson : Not implemented.");}
	LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): void{ throw new Error("NotificationEvent.ts - LoadFromXml : Not implemented.");}
}






			

