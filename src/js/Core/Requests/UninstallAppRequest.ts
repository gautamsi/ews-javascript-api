import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {UninstallAppResponse} from "../Responses/UninstallAppResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## @internal *Not Implemented* 
 */
export class UninstallAppRequest extends SimpleServiceRequestBase {
	private ID: string;
	Execute(): UninstallAppResponse{ throw new Error("UninstallAppRequest.ts - Execute : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("UninstallAppRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("UninstallAppRequest.ts - GetResponseXmlElementName : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("UninstallAppRequest.ts - GetXmlElementName : Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("UninstallAppRequest.ts - ParseResponse : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("UninstallAppRequest.ts - WriteElementsToXml : Not implemented.");}
}