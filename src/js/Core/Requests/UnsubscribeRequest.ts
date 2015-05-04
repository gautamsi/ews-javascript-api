			
 class UnsubscribeRequest extends MultiResponseServiceRequest<ServiceResponse> {
	SubscriptionId: string;
	CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse{ throw new Error("Not implemented.");}
	GetExpectedResponseMessageCount(): number{ throw new Error("Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
	GetResponseMessageXmlElementName(): string{ throw new Error("Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	Validate(): void{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = UnsubscribeRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			