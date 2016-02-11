import {StreamingSubscription} from "../../Notifications/StreamingSubscription";
import {SubscribeRequest} from "./SubscribeRequest";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {SubscribeResponse} from "../Responses/SubscribeResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## *Not Implemented* 
 */
export class SubscribeToStreamingNotificationsRequest extends SubscribeRequest<StreamingSubscription> {
	AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): void{ throw new Error("SubscribeToStreamingNotificationsRequest.ts - AddJsonProperties : Not implemented.");}
	CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<StreamingSubscription>{ throw new Error("SubscribeToStreamingNotificationsRequest.ts - CreateServiceResponse : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("SubscribeToStreamingNotificationsRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetSubscriptionXmlElementName(): string{ throw new Error("SubscribeToStreamingNotificationsRequest.ts - GetSubscriptionXmlElementName : Not implemented.");}
	InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SubscribeToStreamingNotificationsRequest.ts - InternalWriteElementsToXml : Not implemented.");}
	Validate(): void{ throw new Error("SubscribeToStreamingNotificationsRequest.ts - Validate : Not implemented.");}
}