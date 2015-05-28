import StreamingSubscription = require("../../Notifications/StreamingSubscription");
import SubscribeRequest = require("./SubscribeRequest");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import SubscribeResponse = require("../Responses/SubscribeResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class SubscribeToStreamingNotificationsRequest extends SubscribeRequest<StreamingSubscription> {
	AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): void{ throw new Error("SubscribeToStreamingNotificationsRequest.ts - AddJsonProperties : Not implemented.");}
	CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<StreamingSubscription>{ throw new Error("SubscribeToStreamingNotificationsRequest.ts - CreateServiceResponse : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("SubscribeToStreamingNotificationsRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetSubscriptionXmlElementName(): string{ throw new Error("SubscribeToStreamingNotificationsRequest.ts - GetSubscriptionXmlElementName : Not implemented.");}
	InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SubscribeToStreamingNotificationsRequest.ts - InternalWriteElementsToXml : Not implemented.");}
	Validate(): void{ throw new Error("SubscribeToStreamingNotificationsRequest.ts - Validate : Not implemented.");}
}
export = SubscribeToStreamingNotificationsRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
