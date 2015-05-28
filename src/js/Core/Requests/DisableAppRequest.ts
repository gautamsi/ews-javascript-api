import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import DisableReasonType = require("../../Enumerations/DisableReasonType");
import DisableAppResponse = require("../Responses/DisableAppResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class DisableAppRequest extends SimpleServiceRequestBase {
	private Id: string;
	private DisableReason: DisableReasonType;
	Execute(): DisableAppResponse{ throw new Error("DisableAppRequest.ts - Execute : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("DisableAppRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("DisableAppRequest.ts - GetResponseXmlElementName : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("DisableAppRequest.ts - GetXmlElementName : Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("DisableAppRequest.ts - ParseResponse : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("DisableAppRequest.ts - WriteElementsToXml : Not implemented.");}
}
export = DisableAppRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
