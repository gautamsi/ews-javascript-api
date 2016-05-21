import {Convert} from "../../ExtensionMethods";
import {ExchangeService} from "../ExchangeService";
import {RuleCollection} from "../../ComplexProperties/RuleCollection";
import {XmlElementNames} from "../XmlElementNames";

import {ServiceResponse} from "./ServiceResponse";
/**
 * @internal Represents the response to a GetInboxRules operation.
 * 
 * @sealed
 */
export class GetInboxRulesResponse extends ServiceResponse {

	/**
	 * Rule collection.
	 */
	private ruleCollection: RuleCollection;

	/**
	 * @internal Gets the rule collection in the response.
	 */
	get Rules(): RuleCollection {
		return this.ruleCollection;
	}

	/**
	 * @internal Initializes a new instance of the **GetInboxRulesResponse** class.
	 */
	constructor() {
		super()
		this.ruleCollection = new RuleCollection();
	}

	/**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
		this.ruleCollection.OutlookRuleBlobExists = Convert.toBool(responseObject[XmlElementNames.OutlookRuleBlobExists]);
		if (responseObject[XmlElementNames.InboxRules]) {
			this.ruleCollection.LoadFromXmlJsObject(responseObject[XmlElementNames.InboxRules], service);
		}
	}
}