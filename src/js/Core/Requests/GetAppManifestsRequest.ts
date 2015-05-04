import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import GetAppManifestsResponse = require("../Responses/GetAppManifestsResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class GetAppManifestsRequest extends SimpleServiceRequestBase {
	ApiVersionSupported: string;
	SchemaVersionSupported: string;
	Execute(): GetAppManifestsResponse{ throw new Error("Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
	Validate(): void{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = GetAppManifestsRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
