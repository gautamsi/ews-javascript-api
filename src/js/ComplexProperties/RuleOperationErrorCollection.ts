import ComplexPropertyCollection = require("./ComplexPropertyCollection");
import RuleOperationError = require("./RuleOperationError");

class RuleOperationErrorCollection extends ComplexPropertyCollection<RuleOperationError> {
    CreateComplexProperty(xmlElementName: string): RuleOperationError { throw new Error("RuleOperationErrorCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): RuleOperationError { throw new Error("RuleOperationErrorCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(operationError: RuleOperationError): string { throw new Error("RuleOperationErrorCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}

export = RuleOperationErrorCollection;
