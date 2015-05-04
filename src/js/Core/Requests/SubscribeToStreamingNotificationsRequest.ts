import SubscribeRequest = require("./SubscribeRequest");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import SubscribeResponse = require("../Responses/SubscribeResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class SubscribeToStreamingNotificationsRequest extends SubscribeRequest<StreamingSubscription> {
	AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<StreamingSubscription>{ throw new Error("Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
	GetSubscriptionXmlElementName(): string{ throw new Error("Not implemented.");}
	InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	Validate(): void{ throw new Error("Not implemented.");}
}
export = SubscribeToStreamingNotificationsRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
