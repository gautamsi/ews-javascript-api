import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {ExchangeService} from "../ExchangeService";
import {RuleOperationErrorCollection} from "../../ComplexProperties/RuleOperationErrorCollection";
import {XmlElementNames} from "../XmlElementNames";

import {ServiceResponse} from "./ServiceResponse";
/**
 * @internal Represents the response to a UpdateInboxRulesResponse operation.
 * 
 * @sealed
 */
export class UpdateInboxRulesResponse extends ServiceResponse {

	/**
	 * Rule operation error collection.
	 */
	private errors: RuleOperationErrorCollection = null;

	/**
	 * @internal Gets the rule operation errors in the response.
	 */
	get Errors(): RuleOperationErrorCollection {
		return this.errors;
	}

	/**
     * @internal Initializes a new instance of the **UpdateInboxRulesResponse** class. 
     */
    constructor() {
		super();
		this.errors = new RuleOperationErrorCollection();
	}

	/**
     * @internal Loads extra error details from XML
     *
     * @param   {any}   			responseObject      Json Object converted from XML.
     * @param   {ExchangeService}   service             The service.    
     */
    LoadExtraErrorDetailsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
		super.LoadExtraErrorDetailsFromXmlJsObject(responseObject, service);
        if (responseObject[XmlElementNames.RuleOperationErrors]) {
			this.errors.CreateFromXmlJsObjectCollection(responseObject[XmlElementNames.RuleOperationErrors][XmlElementNames.RuleOperationError], service);
		}
	}
}