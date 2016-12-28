import { ArgumentOutOfRangeException } from "../Exceptions/ArgumentException";
import { EwsServiceJsonReader } from "../Core/EwsServiceJsonReader";
import { ExchangeService } from "../Core/ExchangeService";
import { IEnumerable } from "../Interfaces/IEnumerable";
import { Rule } from "./Rule";
import { XmlElementNames } from "../Core/XmlElementNames";

import { ComplexProperty } from "./ComplexProperty";
/**
 * Represents a collection of rules.
 * 
 * @sealed
 */
export class RuleCollection extends ComplexProperty implements IEnumerable<Rule> {

	/**
	 * The OutlookRuleBlobExists flag.
	 */
	private outlookRuleBlobExists: boolean = false;

	/**
	 * The rules in the rule collection.
	 */
	private rules: Rule[] = null;

	/**
	 * Gets a value indicating whether an Outlook rule blob exists in the user's mailbox. To update rules with EWS when the Outlook rule blob exists, call SetInboxRules passing true as the value of the removeOutlookBlob parameter.
	 */
	get OutlookRuleBlobExists(): boolean {
		return this.outlookRuleBlobExists;
	}
	set OutlookRuleBlobExists(value: boolean) {
		this.outlookRuleBlobExists = value;
	}

	/**
	 * Gets the number of rules in this collection.
	 */
	get Count(): number {
		return this.rules.length;
	}

	/**
     * Gets the rule at the specified index in the collection.
     *
     * @param   {number}   index   The index of the rule to get.
     * @return  {Rule}	The rule at the specified index.
     */
	_getItem(index: number): Rule {
		if (index < 0 || index >= this.rules.length) {
			throw new ArgumentOutOfRangeException("Index");
		}
		return this.rules[index];
	}

	/**
	 * @internal Initializes a new instance of the **RuleCollection** class.
	 */
	constructor() {
		super();
		this.rules = [];
	}

	/**
     *  Returns an enumerator that iterates through the collection. this case this.rules
     */
	GetEnumerator(): Rule[] {
		return this.rules;
	}

	/**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
	LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
		let jsRules = EwsServiceJsonReader.ReadAsArray(jsObject, XmlElementNames.Rule);
		for (let jsRule of jsRules) {
			let rule: Rule = new Rule();
			rule.LoadFromXmlJsObject(jsRule, service)
			this.rules.push(rule);
		}
	}
}