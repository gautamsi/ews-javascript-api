import ClientAccessTokenRequest = require("../../ComplexProperties/ClientAccessTokenRequest");
import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import ExchangeService = require("../ExchangeService");
import GetClientAccessTokenResponse = require("../Responses/GetClientAccessTokenResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class GetClientAccessTokenRequest extends MultiResponseServiceRequest<GetClientAccessTokenResponse> {
	TokenRequests: ClientAccessTokenRequest[];
	CreateServiceResponse(service: ExchangeService, responseIndex: number): GetClientAccessTokenResponse{ throw new Error("GetClientAccessTokenRequest.ts - CreateServiceResponse : Not implemented.");}
	GetExpectedResponseMessageCount(): number{ throw new Error("GetClientAccessTokenRequest.ts - GetExpectedResponseMessageCount : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("GetClientAccessTokenRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetResponseMessageXmlElementName(): string{ throw new Error("GetClientAccessTokenRequest.ts - GetResponseMessageXmlElementName : Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("GetClientAccessTokenRequest.ts - GetResponseXmlElementName : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("GetClientAccessTokenRequest.ts - GetXmlElementName : Not implemented.");}
	Validate(): void{ throw new Error("GetClientAccessTokenRequest.ts - Validate : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("GetClientAccessTokenRequest.ts - WriteElementsToXml : Not implemented.");}
}
export = GetClientAccessTokenRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
