import {XmlElementNames} from "../Core/XmlElementNames";

import {RuleOperationError} from "./RuleOperationError";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents a collection of rule operation errors.
 * 
 * @sealed
 */
export class RuleOperationErrorCollection extends ComplexPropertyCollection<RuleOperationError> {

    /**
     * @internal Initializes a new instance of the **RuleOperationErrorCollection** class.
     */
    constructor() {
        super();
    }

    /**
     * @internal Creates an RuleOperationError object from an XML element name.
     *
     * @param   {string}   xmlElementName   The XML element name from which to create the RuleOperationError object.
     * @return  {RuleOperationError}        A RuleOperationError object.
     */
    CreateComplexProperty(xmlElementName: string): RuleOperationError {
        if (xmlElementName == XmlElementNames.RuleOperationError) {
            return new RuleOperationError();
        }
        else {
            return null;
        }
    }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {RuleOperationError}      A RuleOperationError object.
     */
    CreateDefaultComplexProperty(): RuleOperationError {
        return new RuleOperationError();
    }

    /**
     * @internal Retrieves the XML element name corresponding to the provided RuleOperationError object.
     *
     * @param   {RuleOperationError}    operationError   The RuleOperationError object from which to determine the XML element name.
     * @return  {string}                The XML element name corresponding to the provided RuleOperationError object.
     */
    GetCollectionItemXmlElementName(operationError: RuleOperationError): string {
        return XmlElementNames.RuleOperationError;
    }
}