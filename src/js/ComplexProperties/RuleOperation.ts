import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents an operation to be performed on a rule.
 */
export abstract class RuleOperation extends ComplexProperty {

	/**
	 * @internal Gets the XML element name of the rule operation.
	 */
	get XmlElementName(): string {
		throw new Error("abstract - must implement");
	}

	/**
	 * @internal Initializes a new instance of the **RuleOperation** class.
	 */
	constructor() {
		super();
	}
}