import {PushSubscription} from "../../Notifications/PushSubscription";
import {SubscribeRequest} from "./SubscribeRequest";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {SubscribeResponse} from "../Responses/SubscribeResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## *Not Implemented* 
 */
export class SubscribeToPushNotificationsRequest extends SubscribeRequest<PushSubscription> {
	Frequency: number;
	Url: string /*Uri*/;
	CallerData: string;
	private frequency: number;
	private url: string /*Uri*/;
	private callerData: string;
	AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): void{ throw new Error("SubscribeToPushNotificationsRequest.ts - AddJsonProperties : Not implemented.");}
	CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<PushSubscription>{ throw new Error("SubscribeToPushNotificationsRequest.ts - CreateServiceResponse : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("SubscribeToPushNotificationsRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetSubscriptionXmlElementName(): string{ throw new Error("SubscribeToPushNotificationsRequest.ts - GetSubscriptionXmlElementName : Not implemented.");}
	InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SubscribeToPushNotificationsRequest.ts - InternalWriteElementsToXml : Not implemented.");}
	Validate(): void{ throw new Error("SubscribeToPushNotificationsRequest.ts - Validate : Not implemented.");}
}