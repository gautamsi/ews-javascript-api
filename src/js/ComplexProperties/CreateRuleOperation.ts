import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeService} from "../Core/ExchangeService";
import {Rule} from "./Rule";
import {XmlElementNames} from "../Core/XmlElementNames";

import {RuleOperation} from "./RuleOperation";
/**
 * Represents an operation to create a new rule.
 * 
 * @sealed
 */
export class CreateRuleOperation extends RuleOperation {

    /**
     * Inbox rule to be created.
     */
    private rule: Rule;

    /**
     * Gets or sets the rule to be created.
     */
    get Rule(): Rule {
        return this.rule;
    }
    set Rule(value: Rule) {
        this.SetFieldValue<Rule>({ getValue: () => this.rule, setValue: (updateValue) => { this.rule = updateValue } }, value);
    }

    /**
     * @internal Gets the Xml element name of the CreateRuleOperation object.
     */
    get XmlElementName(): string {
        return XmlElementNames.CreateRuleOperation;
    }

    /**
     * Initializes a new instance of the **CreateRuleOperation** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **CreateRuleOperation** class.
     *
     * @param   {Rule}   rule   The inbox rule to create.
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
	 * @internal Writes the elements to XML writer.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        this.Rule.WriteToXml(writer, XmlElementNames.Rule);
    }
}