import {XmlElementNames} from "../Core/XmlElementNames";

import {RuleError} from "./RuleError";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * @internal Represents a collection of rule validation errors.
 * 
 * @sealed
 */
export class RuleErrorCollection extends ComplexPropertyCollection<RuleError> {

	/**
     * @internal Initializes a new instance of the **RuleErrorCollection** class.
     */
    constructor() {
        super();
    }

    /**
     * @internal Creates an RuleError object from an XML element name.
     *
     * @param   {string}   xmlElementName   The XML element name from which to create the RuleError object.
     * @return  {RuleError}        A RuleError object.
     */
    CreateComplexProperty(xmlElementName: string): RuleError {
		if (xmlElementName == XmlElementNames.Error) {
			return new RuleError();
		}
		else {
			return null;
		}
	}

	/**
     * @internal Creates the default complex property.
     *
     * @return  {RuleError}      A RuleError object.
     */
    CreateDefaultComplexProperty(): RuleError {
		return new RuleError();
	}

	/**
     * @internal Retrieves the XML element name corresponding to the provided RuleError object.
     *
     * @param   {RuleError}		ruleValidationError   The RuleError object from which to determine the XML element name.
     * @return  {string}		The XML element name corresponding to the provided RuleError object.
     */
    GetCollectionItemXmlElementName(ruleValidationError: RuleError): string {
		return XmlElementNames.Error;
	}
}