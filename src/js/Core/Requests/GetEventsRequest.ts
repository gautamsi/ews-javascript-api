import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {ExchangeService} from "../ExchangeService";
import {GetEventsResponse} from "../Responses/GetEventsResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## *Not Implemented* 
 */
export class GetEventsRequest extends MultiResponseServiceRequest<GetEventsResponse> {
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