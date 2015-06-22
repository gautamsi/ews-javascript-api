import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
import {RuleError} from "./RuleError";
export class RuleErrorCollection extends ComplexPropertyCollection<RuleError> {
	CreateComplexProperty(xmlElementName: string): RuleError{ throw new Error("RuleErrorCollection.ts - CreateComplexProperty : Not implemented.");}
	CreateDefaultComplexProperty(): RuleError{ throw new Error("RuleErrorCollection.ts - CreateDefaultComplexProperty : Not implemented.");}
	GetCollectionItemXmlElementName(ruleValidationError: RuleError): string{ throw new Error("RuleErrorCollection.ts - GetCollectionItemXmlElementName : Not implemented.");}
}






			

