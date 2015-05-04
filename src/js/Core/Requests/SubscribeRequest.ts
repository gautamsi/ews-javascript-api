			
 class SubscribeRequest<TSubscription> extends MultiResponseServiceRequest<SubscribeResponse<TSubscription>> {
	FolderIds: FolderIdWrapperList;
	EventTypes: EventType[] /*System.Collections.Generic.List<EventType>*/;
	Watermark: string;
	AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	GetExpectedResponseMessageCount(): number{ throw new Error("Not implemented.");}
	GetResponseMessageXmlElementName(): string{ throw new Error("Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
	GetSubscriptionXmlElementName(): string{ throw new Error("Not implemented.");}
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	Validate(): void{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = SubscribeRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			