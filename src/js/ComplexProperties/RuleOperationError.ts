import { ArgumentOutOfRangeException } from "../Exceptions/ArgumentException";
import { Convert } from "../ExtensionMethods";
import { EwsServiceJsonReader } from "../Core/EwsServiceJsonReader";
import { ExchangeService } from "../Core/ExchangeService";
import { IEnumerable } from "../Interfaces/IEnumerable";
import { RuleError } from "./RuleError";
import { RuleErrorCollection } from "./RuleErrorCollection";
import { RuleOperation } from "./RuleOperation";
import { XmlElementNames } from "../Core/XmlElementNames";

import { ComplexProperty } from "./ComplexProperty";
/**
 * Represents an error that occurred while processing a rule operation.
 * 
 * @sealed
 */
export class RuleOperationError extends ComplexProperty implements IEnumerable<RuleError>{


	/**
	 * Index of the operation mapping to the error.
	 */
	private operationIndex: number = 0;

	/**
	 * RuleOperation object mapping to the error.
	 */
	private operation: RuleOperation = null;

	/**
	 * RuleError Collection.
	 */
	private ruleErrors: RuleErrorCollection = null;

	/**
	 * Gets the operation that resulted in an error.
	 */
	get Operation(): RuleOperation {
		return this.operation;
	}

	/**
	 * Gets the number of rule errors in the list.
	 */
	get Count(): number {
		return this.ruleErrors.Count;
	}

	/**
     * Gets the rule error at the specified index.
     *
     * @param   {number}   index   The index of the rule error to get.
     * @return  {RuleError}	The rule error at the specified index.
     */
	_getItem(index: number): RuleError {
		if (index < 0 || index >= this.ruleErrors.Count) {
			throw new ArgumentOutOfRangeException("Index");
		}
		return this.ruleErrors._getItem(index);
	}

	/**
	 * @internal Initializes a new instance of the **RuleOperationError** class.
	 */
	constructor() {
		super();
	}

	/**
     *  Returns an enumerator that iterates through the collection. this case this.rules
     */
	GetEnumerator(): RuleError[] {
		return this.ruleErrors.GetEnumerator();
	}

	/**
	 * @internal Set operation property by the index of a given opeation enumerator.
	 *
	 * @param   {RuleOperation[]}   operations   Operation enumerator.
	 */
	SetOperationByIndex(operations: RuleOperation[]): void {

		this.operation = operations[this.operationIndex];
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
				case XmlElementNames.OperationIndex:
					this.operationIndex = Convert.toNumber(jsObject[key]);
					break;
				case XmlElementNames.ValidationErrors:
					this.ruleErrors = new RuleErrorCollection();
					this.ruleErrors.CreateFromXmlJsObjectCollection(jsObject[key], service);
					break;
				default:
					break;
			}
		}
	}
}