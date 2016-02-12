import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {GetInboxRulesResponse} from "../Responses/GetInboxRulesResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## *Not Implemented* 
 */
export class GetInboxRulesRequest extends SimpleServiceRequestBase {
	MailboxSmtpAddress: string;
	private mailboxSmtpAddress: string;
	Execute(): GetInboxRulesResponse{ throw new Error("GetInboxRulesRequest.ts - Execute : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("GetInboxRulesRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("GetInboxRulesRequest.ts - GetResponseXmlElementName : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("GetInboxRulesRequest.ts - GetXmlElementName : Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("GetInboxRulesRequest.ts - ParseResponse : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("GetInboxRulesRequest.ts - WriteElementsToXml : Not implemented.");}
}