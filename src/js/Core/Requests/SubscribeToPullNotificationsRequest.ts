			
 class SubscribeToPullNotificationsRequest extends SubscribeRequest<PullSubscription> {
	Timeout: number;
	private timeout: number;
	AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<PullSubscription>{ throw new Error("Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
	GetSubscriptionXmlElementName(): string{ throw new Error("Not implemented.");}
	InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	Validate(): void{ throw new Error("Not implemented.");}
}
export = SubscribeToPullNotificationsRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			