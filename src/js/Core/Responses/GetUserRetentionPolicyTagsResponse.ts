import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
import {ExchangeService} from "../ExchangeService";
import {RetentionPolicyTag} from "../../Elc/RetentionPolicyTag";
import {XmlElementNames} from "../XmlElementNames";

import {ServiceResponse} from "./ServiceResponse";
/**
 * Represents the GetUserRetentionPolicyTagsResponse response.
 * 
 * @sealed
 */
export class GetUserRetentionPolicyTagsResponse extends ServiceResponse {

	private retentionPolicyTags: RetentionPolicyTag[] = [];

	/**
	 * Retention policy tags result.
	 */
	get RetentionPolicyTags(): RetentionPolicyTag[] {
		return this.retentionPolicyTags;
	}

	/**
	 * @internal Initializes a new instance of the **GetUserRetentionPolicyTagsResponse** class.
	 */
	constructor() {
		super()
	}

	/**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
		this.retentionPolicyTags.splice(0);

		if (responseObject[XmlElementNames.RetentionPolicyTags]) {
			for (let retentionPolicyTagObject of EwsServiceJsonReader.ReadAsArray(responseObject[XmlElementNames.RetentionPolicyTags], XmlElementNames.RetentionPolicyTag)) {
				this.retentionPolicyTags.push(RetentionPolicyTag.LoadFromXmlJsObject(retentionPolicyTagObject));
			}
		}
	}
}