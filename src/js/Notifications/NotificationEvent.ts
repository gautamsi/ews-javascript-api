			
 class NotificationEvent {
	EventType: EventType;
	TimeStamp: Date;
	ParentFolderId: FolderId;
	OldParentFolderId: FolderId;
	private eventType: EventType;
	private timestamp: Date;
	private parentFolderId: FolderId;
	private oldParentFolderId: FolderId;
	InternalLoadFromXml(reader: EwsServiceXmlReader): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonEvent: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): void{ throw new Error("Not implemented.");}
}
export = NotificationEvent;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			