import {ServiceResponse} from "./ServiceResponse";
import {RuleCollection} from "../../ComplexProperties/RuleCollection";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
/**
 * ## *Not Implemented* 
 */
export class GetInboxRulesResponse extends ServiceResponse {
	Rules: RuleCollection;
	private ruleCollection: RuleCollection;
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void{ throw new Error("GetInboxRulesResponse.ts - ReadElementsFromXmlJsObject : Not implemented.");}
}