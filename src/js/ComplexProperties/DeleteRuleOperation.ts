import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeService} from "../Core/ExchangeService";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {RuleOperation} from "./RuleOperation";
/**
 * Represents an operation to delete an existing rule.
 * 
 * @sealed
 */
export class DeleteRuleOperation extends RuleOperation {

    /**
     * Id of the inbox rule to delete.
     */
    private ruleId: string;

    /**
     * Gets or sets the Id of the rule to delete.
     */
    get RuleId(): string {
        return this.ruleId;
    }
    set RuleId(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.ruleId, setValue: (updateValue) => { this.ruleId = updateValue } }, value);
    }

    /**
     * @internal Gets the Xml element name of the DeleteRuleOperation object.
     */
    get XmlElementName(): string {
        return XmlElementNames.DeleteRuleOperation;
    }

    /**
     * Initializes a new instance of the **DeleteRuleOperation** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **DeleteRuleOperation** class.
     *
     * @param   {string}   ruleId   The Id of the inbox rule to delete.
     */
    constructor(ruleId: string);
    constructor(ruleId: string = null) {
        super();
        this.ruleId = ruleId;
    }

    /**
	 * @internal Validates this instance.
	 */
    InternalValidate(): void {
        EwsUtilities.ValidateParam(this.ruleId, "RuleId");
    }

    /**
	 * @internal Writes the elements to XML writer.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.RuleId, this.RuleId);
    }
}