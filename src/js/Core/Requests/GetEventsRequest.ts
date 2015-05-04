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
	CreateServiceResponse(service: ExchangeService, responseIndex: number): GetEventsResponse{ throw new Error("Not implemented.");}
	GetExpectedResponseMessageCount(): number{ throw new Error("Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
	GetResponseMessageXmlElementName(): string{ throw new Error("Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	Validate(): void{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = GetEventsRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
