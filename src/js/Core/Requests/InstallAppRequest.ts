import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {InstallAppResponse} from "../Responses/InstallAppResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class InstallAppRequest extends SimpleServiceRequestBase {
	private manifestStream: any /*System.IO.Stream*/;
	Execute(): InstallAppResponse{ throw new Error("InstallAppRequest.ts - Execute : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("InstallAppRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("InstallAppRequest.ts - GetResponseXmlElementName : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("InstallAppRequest.ts - GetXmlElementName : Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("InstallAppRequest.ts - ParseResponse : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("InstallAppRequest.ts - WriteElementsToXml : Not implemented.");}
}






			

