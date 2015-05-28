import PullSubscription = require("../../Notifications/PullSubscription");
import SubscribeRequest = require("./SubscribeRequest");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import SubscribeResponse = require("../Responses/SubscribeResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class SubscribeToPullNotificationsRequest extends SubscribeRequest<PullSubscription> {
	Timeout: number;
	private timeout: number;
	AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): void{ throw new Error("SubscribeToPullNotificationsRequest.ts - AddJsonProperties : Not implemented.");}
	CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<PullSubscription>{ throw new Error("SubscribeToPullNotificationsRequest.ts - CreateServiceResponse : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("SubscribeToPullNotificationsRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetSubscriptionXmlElementName(): string{ throw new Error("SubscribeToPullNotificationsRequest.ts - GetSubscriptionXmlElementName : Not implemented.");}
	InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SubscribeToPullNotificationsRequest.ts - InternalWriteElementsToXml : Not implemented.");}
	Validate(): void{ throw new Error("SubscribeToPullNotificationsRequest.ts - Validate : Not implemented.");}
}
export = SubscribeToPullNotificationsRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
