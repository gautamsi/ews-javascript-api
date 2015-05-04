import ClientAccessTokenRequest = require("../../ComplexProperties/ClientAccessTokenRequest");
import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import ExchangeService = require("../ExchangeService");
import GetClientAccessTokenResponse = require("../Responses/GetClientAccessTokenResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class GetClientAccessTokenRequest extends MultiResponseServiceRequest<GetClientAccessTokenResponse> {
	TokenRequests: ClientAccessTokenRequest[];
	CreateServiceResponse(service: ExchangeService, responseIndex: number): GetClientAccessTokenResponse{ throw new Error("Not implemented.");}
	GetExpectedResponseMessageCount(): number{ throw new Error("Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
	GetResponseMessageXmlElementName(): string{ throw new Error("Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	Validate(): void{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = GetClientAccessTokenRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
