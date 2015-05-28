import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import GetAppManifestsResponse = require("../Responses/GetAppManifestsResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
			
 class GetAppManifestsRequest extends SimpleServiceRequestBase {
	ApiVersionSupported: string;
	SchemaVersionSupported: string;
	Execute(): GetAppManifestsResponse{ throw new Error("GetAppManifestsRequest.ts - Execute : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("GetAppManifestsRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("GetAppManifestsRequest.ts - GetResponseXmlElementName : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("GetAppManifestsRequest.ts - GetXmlElementName : Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("GetAppManifestsRequest.ts - ParseResponse : Not implemented.");}
	Validate(): void{ throw new Error("GetAppManifestsRequest.ts - Validate : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("GetAppManifestsRequest.ts - WriteElementsToXml : Not implemented.");}
}
export = GetAppManifestsRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
