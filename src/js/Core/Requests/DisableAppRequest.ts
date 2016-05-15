import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {DisableReasonType} from "../../Enumerations/DisableReasonType";
import {DisableAppResponse} from "../Responses/DisableAppResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## @internal *Not Implemented* 
 */
export class DisableAppRequest extends SimpleServiceRequestBase {
	private Id: string;
	private DisableReason: DisableReasonType;
	Execute(): DisableAppResponse{ throw new Error("DisableAppRequest.ts - Execute : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("DisableAppRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("DisableAppRequest.ts - GetResponseXmlElementName : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("DisableAppRequest.ts - GetXmlElementName : Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("DisableAppRequest.ts - ParseResponse : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("DisableAppRequest.ts - WriteElementsToXml : Not implemented.");}
}