import PushSubscription = require("../../Notifications/PushSubscription");
import SubscribeRequest = require("./SubscribeRequest");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import SubscribeResponse = require("../Responses/SubscribeResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class SubscribeToPushNotificationsRequest extends SubscribeRequest<PushSubscription> {
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
export = SubscribeToPushNotificationsRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
