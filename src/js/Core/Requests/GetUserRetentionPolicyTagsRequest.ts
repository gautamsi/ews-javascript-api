import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {GetUserRetentionPolicyTagsResponse} from "../Responses/GetUserRetentionPolicyTagsResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## @internal *Not Implemented* 
 */
export class GetUserRetentionPolicyTagsRequest extends SimpleServiceRequestBase {
	Execute(): GetUserRetentionPolicyTagsResponse{ throw new Error("GetUserRetentionPolicyTagsRequest.ts - Execute : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("GetUserRetentionPolicyTagsRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("GetUserRetentionPolicyTagsRequest.ts - GetResponseXmlElementName : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("GetUserRetentionPolicyTagsRequest.ts - GetXmlElementName : Not implemented.");}
	ParseResponse(reader: EwsServiceXmlReader): any{ throw new Error("GetUserRetentionPolicyTagsRequest.ts - ParseResponse : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("GetUserRetentionPolicyTagsRequest.ts - WriteElementsToXml : Not implemented.");}
}