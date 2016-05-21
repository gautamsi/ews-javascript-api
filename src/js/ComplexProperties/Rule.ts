import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeService} from "../Core/ExchangeService";
import {RuleActions} from "./RuleActions";
import {RulePredicates} from "./RulePredicates";
import {Convert, StringHelper} from "../ExtensionMethods";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents a rule that automatically handles incoming messages.
 * A rule consists of a set of conditions and exceptions that determine whether or not a set of actions should be executed on incoming messages.
 * 
 * @sealed
 */
export class Rule extends ComplexProperty {

	/**
	 * The rule ID.
	 */
	private ruleId: string = null;

	/**
	 * The rule display name.
	 */
	private displayName: string = null;

	/**
	 * The rule priority.
	 */
	private priority: number = 0;

	/**
	 * The rule status of enabled or not.
	 */
	private isEnabled: boolean = false;

	/**
	 * The rule status of is supported or not.
	 */
	private isNotSupported: boolean = false;

	/**
	 * The rule status of in error or not.
	 */
	private isInError: boolean = false;

	/**
	 * The rule conditions. 
	 */
	private conditions: RulePredicates = null;

	/**
	 * The rule actions. 
	 */
	private actions: RuleActions = null;

	/**
	 * The rule exceptions. 
	 */
	private exceptions: RulePredicates = null;

	/**
	 * Gets or sets the Id of this rule.
	 */
	get Id(): string {
		return this.ruleId;
	}
	set Id(value: string) {
		this.SetFieldValue<string>({ getValue: () => this.Id, setValue: (updateValue) => { this.Id = updateValue } }, value);
	}

	/**
	 * Gets or sets the name of this rule as it should be displayed to the user.
	 */
	get DisplayName(): string {
		return this.displayName;
	}
	set DisplayName(value: string) {
		this.SetFieldValue<string>({ getValue: () => this.displayName, setValue: (updateValue) => { this.displayName = updateValue } }, value);
	}

	/**
	 * Gets or sets the priority of this rule, which determines its execution order.
	 */
	get Priority(): number {
		return this.priority;
	}
	set Priority(value: number) {
		this.SetFieldValue<number>({ getValue: () => this.priority, setValue: (updateValue) => { this.priority = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether this rule is enabled.
	 */
	get IsEnabled(): boolean {
		return this.isEnabled;
	}
	set IsEnabled(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.isEnabled, setValue: (updateValue) => { this.isEnabled = updateValue } }, value);
	}

	/**
	 * Gets a value indicating whether this rule can be modified via EWS. If IsNotSupported is true, the rule cannot be modified via EWS.
	 */
	get IsNotSupported(): boolean {
		return this.isNotSupported;
	}

	/**
	 * Gets or sets a value indicating whether this rule has errors. A rule that is in error cannot be processed unless it is updated and the error is corrected.
	 */
	get IsInError(): boolean {
		return this.isInError;
	}
	set IsInError(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.isInError, setValue: (updateValue) => { this.isInError = updateValue } }, value);
	}

	/**
	 * Gets the conditions that determine whether or not this rule should be executed against incoming messages.
	 */
	get Conditions(): RulePredicates {
		return this.conditions;
	}

	/**
	 * Gets the actions that should be executed against incoming messages if the conditions evaluate as true.
	 */
	get Actions(): RuleActions {
		return this.actions;
	}

	/**
	 * Gets the exceptions that determine if this rule should be skipped even if its conditions evaluate to true.
	 */
	get Exceptions(): RulePredicates {
		return this.exceptions;
	}

	/**
	 * Initializes a new instance of the **Rule** class.
	 */
	constructor() {
		super();
		//// New rule has priority as 0 by default //todo: fix 0 or 1 when it it changes in offical repo
		this.priority = 1;
		//// New rule is enabled by default
		this.isEnabled = true;
		this.conditions = new RulePredicates();
		this.actions = new RuleActions();
		this.exceptions = new RulePredicates();
	}

	/**
	 * @internal Validates this instance.
	 */
	InternalValidate(): void {
		super.InternalValidate();
		EwsUtilities.ValidateParam(this.displayName, "DisplayName");
		EwsUtilities.ValidateParam(this.conditions, "Conditions");
		EwsUtilities.ValidateParam(this.exceptions, "Exceptions");
		EwsUtilities.ValidateParam(this.actions, "Actions");
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
				case XmlElementNames.DisplayName:
					this.displayName = jsObject[key];
					break;
				case XmlElementNames.RuleId:
					this.ruleId = jsObject[key];
					break;
				case XmlElementNames.Priority:
					this.priority = Convert.toNumber(jsObject[key]);
					break;
				case XmlElementNames.IsEnabled:
					this.isEnabled = Convert.toBool(jsObject[key]);
					break;
				case XmlElementNames.IsNotSupported:
					this.isNotSupported = Convert.toBool(jsObject[key]);
					break;
				case XmlElementNames.IsInError:
					this.isInError = Convert.toBool(jsObject[key]);
					break;
				case XmlElementNames.Conditions:
					this.conditions.LoadFromXmlJsObject(jsObject[key], service);
					break;
				case XmlElementNames.Actions:
					this.actions.LoadFromXmlJsObject(jsObject[key], service);
					break;
				case XmlElementNames.Exceptions:
					this.exceptions.LoadFromXmlJsObject(jsObject[key], service);
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
		if (!StringHelper.IsNullOrEmpty(this.Id)) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.RuleId,
				this.Id);
		}

		writer.WriteElementValue(
			XmlNamespace.Types,
			XmlElementNames.DisplayName,
			this.DisplayName);
		writer.WriteElementValue(
			XmlNamespace.Types,
			XmlElementNames.Priority,
			this.Priority);
		writer.WriteElementValue(
			XmlNamespace.Types,
			XmlElementNames.IsEnabled,
			this.IsEnabled);
		writer.WriteElementValue(
			XmlNamespace.Types,
			XmlElementNames.IsInError,
			this.IsInError);
		this.Conditions.WriteToXml(writer, XmlElementNames.Conditions);
		this.Exceptions.WriteToXml(writer, XmlElementNames.Exceptions);
		this.Actions.WriteToXml(writer, XmlElementNames.Actions);
	}
}