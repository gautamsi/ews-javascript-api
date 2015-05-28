import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import ExchangeService = require("../ExchangeService");
import GetEventsResponse = require("../Responses/GetEventsResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class GetEventsRequest extends MultiResponseServiceRequest<GetEventsResponse> {
	SubscriptionId: string;
	Watermark: string;
	private subscriptionId: string;
	private watermark: string;
	CreateServiceResponse(service: ExchangeService, responseIndex: number): GetEventsResponse{ throw new Error("GetEventsRequest.ts - CreateServiceResponse : Not implemented.");}
	GetExpectedResponseMessageCount(): number{ throw new Error("GetEventsRequest.ts - GetExpectedResponseMessageCount : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("GetEventsRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetResponseMessageXmlElementName(): string{ throw new Error("GetEventsRequest.ts - GetResponseMessageXmlElementName : Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("GetEventsRequest.ts - GetResponseXmlElementName : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("GetEventsRequest.ts - GetXmlElementName : Not implemented.");}
	Validate(): void{ throw new Error("GetEventsRequest.ts - Validate : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("GetEventsRequest.ts - WriteElementsToXml : Not implemented.");}
}
export = GetEventsRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
