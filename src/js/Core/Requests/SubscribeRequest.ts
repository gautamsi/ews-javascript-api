import SubscribeResponse = require("../Responses/SubscribeResponse");
import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import FolderIdWrapperList = require("../../Misc/FolderIdWrapperList");
import EventType = require("../../Enumerations/EventType");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class SubscribeRequest<TSubscription> extends MultiResponseServiceRequest<SubscribeResponse<TSubscription>> {
	FolderIds: FolderIdWrapperList;
	EventTypes: EventType[] /*System.Collections.Generic.List<EventType>*/;
	Watermark: string;
	AddJsonProperties(jsonSubscribeRequest: JsonObject, service: ExchangeService): void{ throw new Error("SubscribeRequest.ts - AddJsonProperties : Not implemented.");}
	GetExpectedResponseMessageCount(): number{ throw new Error("SubscribeRequest.ts - GetExpectedResponseMessageCount : Not implemented.");}
	GetResponseMessageXmlElementName(): string{ throw new Error("SubscribeRequest.ts - GetResponseMessageXmlElementName : Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("SubscribeRequest.ts - GetResponseXmlElementName : Not implemented.");}
	GetSubscriptionXmlElementName(): string{ throw new Error("SubscribeRequest.ts - GetSubscriptionXmlElementName : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("SubscribeRequest.ts - GetXmlElementName : Not implemented.");}
	InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SubscribeRequest.ts - InternalWriteElementsToXml : Not implemented.");}
	Validate(): void{ throw new Error("SubscribeRequest.ts - Validate : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SubscribeRequest.ts - WriteElementsToXml : Not implemented.");}
}
export = SubscribeRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
