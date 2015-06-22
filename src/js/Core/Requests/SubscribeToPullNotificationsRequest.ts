import {PullSubscription} from "../../Notifications/PullSubscription";
import {SubscribeRequest} from "./SubscribeRequest";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {SubscribeResponse} from "../Responses/SubscribeResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class SubscribeToPullNotificationsRequest extends SubscribeRequest<PullSubscription> {
	Timeout: number;
	private timeout: number;
	AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): void{ throw new Error("SubscribeToPullNotificationsRequest.ts - AddJsonProperties : Not implemented.");}
	CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<PullSubscription>{ throw new Error("SubscribeToPullNotificationsRequest.ts - CreateServiceResponse : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("SubscribeToPullNotificationsRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetSubscriptionXmlElementName(): string{ throw new Error("SubscribeToPullNotificationsRequest.ts - GetSubscriptionXmlElementName : Not implemented.");}
	InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SubscribeToPullNotificationsRequest.ts - InternalWriteElementsToXml : Not implemented.");}
	Validate(): void{ throw new Error("SubscribeToPullNotificationsRequest.ts - Validate : Not implemented.");}
}






			

