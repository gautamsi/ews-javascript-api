import {ServiceResponse} from "./ServiceResponse";
import {RuleOperationErrorCollection} from "../../ComplexProperties/RuleOperationErrorCollection";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class UpdateInboxRulesResponse extends ServiceResponse {
	Errors: RuleOperationErrorCollection;
	private errors: RuleOperationErrorCollection;
	LoadExtraErrorDetailsFromXml(reader: EwsServiceXmlReader, xmlElementName: string): boolean{ throw new Error("UpdateInboxRulesResponse.ts - LoadExtraErrorDetailsFromXml : Not implemented.");}
}






			

