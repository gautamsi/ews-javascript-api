			
 class SubscribeToPushNotificationsRequest extends SubscribeRequest<PushSubscription> {
	Frequency: number;
	Url: string /*Uri*/;
	CallerData: string;
	private frequency: number;
	private url: string /*Uri*/;
	private callerData: string;
	AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<PushSubscription>{ throw new Error("Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
	GetSubscriptionXmlElementName(): string{ throw new Error("Not implemented.");}
	InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	Validate(): void{ throw new Error("Not implemented.");}
}
export = SubscribeToPushNotificationsRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			