import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import ExchangeService = require("../ExchangeService");
import ServiceResponse = require("../Responses/ServiceResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class UnsubscribeRequest extends MultiResponseServiceRequest<ServiceResponse> {
	SubscriptionId: string;
	CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse{ throw new Error("UnsubscribeRequest.ts - CreateServiceResponse : Not implemented.");}
	GetExpectedResponseMessageCount(): number{ throw new Error("UnsubscribeRequest.ts - GetExpectedResponseMessageCount : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("UnsubscribeRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetResponseMessageXmlElementName(): string{ throw new Error("UnsubscribeRequest.ts - GetResponseMessageXmlElementName : Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("UnsubscribeRequest.ts - GetResponseXmlElementName : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("UnsubscribeRequest.ts - GetXmlElementName : Not implemented.");}
	Validate(): void{ throw new Error("UnsubscribeRequest.ts - Validate : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("UnsubscribeRequest.ts - WriteElementsToXml : Not implemented.");}
}
export = UnsubscribeRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
