import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeService} from "../Core/ExchangeService";
import {Rule} from "./Rule";
import {XmlElementNames} from "../Core/XmlElementNames";

import {RuleOperation} from "./RuleOperation";
/**
 * Represents an operation to update an existing rule.
 * 
 * @sealed
 */
export class SetRuleOperation extends RuleOperation {

    /**
     * Inbox rule to be updated.
     */
    private rule: Rule;

    /**
     * Gets or sets the rule to be updated.
     */
    get Rule(): Rule {
        return this.rule;
    }
    set Rule(value: Rule) {
        this.SetFieldValue<Rule>({ getValue: () => this.rule, setValue: (updateValue) => { this.rule = updateValue } }, value);
    }

    /**
     * @internal Gets the Xml element name of the SetRuleOperation object.
     */
    get XmlElementName(): string {
        return XmlElementNames.SetRuleOperation;
    }

    /**
     * Initializes a new instance of the **SetRuleOperation** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **SetRuleOperation** class.
     *
     * @param   {Rule}   rule   The inbox rule to update.
     */
    constructor(rule: Rule);
    constructor(rule: Rule = null) {
        super();
        this.rule = rule;
    }

    /**
	 * @internal Validates this instance.
	 */
    InternalValidate(): void {
        EwsUtilities.ValidateParam(this.rule, "Rule");
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        for (let key in jsObject) {
            switch (key) {
                case XmlElementNames.Rule:
                    this.rule = new Rule();
                    this.rule.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                default:
                    break;
            }
        }
    }

    /**
	 * @internal Writes the elements to XML writer.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        this.Rule.WriteToXml(writer, XmlElementNames.Rule);
    }
}