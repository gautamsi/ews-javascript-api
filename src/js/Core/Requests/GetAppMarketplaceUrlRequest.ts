import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {GetAppMarketplaceUrlResponse} from "../Responses/GetAppMarketplaceUrlResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class GetAppMarketplaceUrlRequest extends SimpleServiceRequestBase {
	ApiVersionSupported: string;
	SchemaVersionSupported: string;
	Execute(): GetAppMarketplaceUrlResponse{ throw new Error("GetAppMarketplaceUrlRequest.ts - Execute : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("GetAppMarketplaceUrlRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("GetAppMarketplaceUrlRequest.ts - GetResponseXmlElementName : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("GetAppMarketplaceUrlRequest.ts - GetXmlElementName : Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("GetAppMarketplaceUrlRequest.ts - ParseResponse : Not implemented.");}
	Validate(): void{ throw new Error("GetAppMarketplaceUrlRequest.ts - Validate : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("GetAppMarketplaceUrlRequest.ts - WriteElementsToXml : Not implemented.");}
}






			

