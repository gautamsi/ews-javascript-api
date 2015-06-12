import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
import {RuleOperationError} from "./RuleOperationError";
export class RuleOperationErrorCollection extends ComplexPropertyCollection<RuleOperationError> {
    CreateComplexProperty(xmlElementName: string): RuleOperationError { throw new Error("RuleOperationErrorCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): RuleOperationError { throw new Error("RuleOperationErrorCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(operationError: RuleOperationError): string { throw new Error("RuleOperationErrorCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}


