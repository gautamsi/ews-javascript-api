import {ServiceResponse} from "./ServiceResponse";
import {RetentionPolicyTag} from "../../Elc/RetentionPolicyTag";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class GetUserRetentionPolicyTagsResponse extends ServiceResponse {
	RetentionPolicyTags: RetentionPolicyTag[];
	private retentionPolicyTags: RetentionPolicyTag[] /*System.Collections.Generic.List<RetentionPolicyTag>*/;
	ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): void{ throw new Error("GetUserRetentionPolicyTagsResponse.ts - ReadElementsFromJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void{ throw new Error("GetUserRetentionPolicyTagsResponse.ts - ReadElementsFromXmlJsObject : Not implemented.");}
}






			

