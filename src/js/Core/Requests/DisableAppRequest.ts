import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import DisableReasonType = require("../../Enumerations/DisableReasonType");
import DisableAppResponse = require("../Responses/DisableAppResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class DisableAppRequest extends SimpleServiceRequestBase {
	private Id: string;
	private DisableReason: DisableReasonType;
	Execute(): DisableAppResponse{ throw new Error("Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = DisableAppRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
