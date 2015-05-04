import ComplexPropertyCollection = require("./ComplexPropertyCollection");
import RuleOperationError = require("./RuleOperationError");

class RuleOperationErrorCollection extends ComplexPropertyCollection<RuleOperationError> {
    CreateComplexProperty(xmlElementName: string): RuleOperationError { throw new Error("Not implemented."); }
    CreateDefaultComplexProperty(): RuleOperationError { throw new Error("Not implemented."); }
    GetCollectionItemXmlElementName(operationError: RuleOperationError): string { throw new Error("Not implemented."); }
}

export = RuleOperationErrorCollection;
