import ComplexPropertyCollection = require("./ComplexPropertyCollection");
import RuleError = require("./RuleError");
			
 class RuleErrorCollection extends ComplexPropertyCollection<RuleError> {
	CreateComplexProperty(xmlElementName: string): RuleError{ throw new Error("RuleErrorCollection.ts - CreateComplexProperty : Not implemented.");}
	CreateDefaultComplexProperty(): RuleError{ throw new Error("RuleErrorCollection.ts - CreateDefaultComplexProperty : Not implemented.");}
	GetCollectionItemXmlElementName(ruleValidationError: RuleError): string{ throw new Error("RuleErrorCollection.ts - GetCollectionItemXmlElementName : Not implemented.");}
}
export = RuleErrorCollection;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
