import {ExchangeService} from "../Core/ExchangeService";
import {RuleErrorCode} from "../Enumerations/RuleErrorCode";
import {RuleProperty} from "../Enumerations/RuleProperty";
import {XmlElementNames} from "../Core/XmlElementNames";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents an error that occurred as a result of executing a rule operation. 
 * 
 * @sealed
 */
export class RuleError extends ComplexProperty {

	/**
	 * Rule property.
	 */
	private ruleProperty: RuleProperty = RuleProperty.RuleId;

	/**
	 * Rule validation error code.
	 */
	private errorCode: RuleErrorCode = RuleErrorCode.ADOperationFailure;

	/**
	 * Error message.
	 */
	private errorMessage: string = null;

	/**
	 * Field value.
	 */
	private value: string = null;

	/**
	 * Gets the property which failed validation.
	 */
	get RuleProperty(): RuleProperty {
		return this.ruleProperty;
	}

	/**
	 * Gets the validation error code.
	 */
	get ErrorCode(): RuleErrorCode {
		return this.errorCode;
	}

	/**
	 * Gets the error message.
	 */
	get ErrorMessage(): string {
		return this.errorMessage;
	}

	/**
	 * Gets the value that failed validation.
	 */
	get Value(): string {
		return this.value;
	}

	/**
	 * @internal Initializes a new instance of the **RuleError** class.
	 */
	constructor() {
		super();
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
				case XmlElementNames.FieldURI:
                    this.ruleProperty = RuleProperty[<string>jsObject[key]];
                    break;
                case XmlElementNames.ErrorCode:
                    this.errorCode = RuleErrorCode[<string>jsObject[key]];
                    break;
                case XmlElementNames.ErrorMessage:
                    this.errorMessage = jsObject[key];
                    break;
                case XmlElementNames.FieldValue:
                    this.value = jsObject[key];
                    break;
                default:
                    break;
			}
		}
	}
}