import ComplexProperty = require("./ComplexProperty");
import Rule = require("./Rule");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
			
 class RuleCollection extends ComplexProperty {
	OutlookRuleBlobExists: boolean;
	Count: number;
	Item: Rule;
	private outlookRuleBlobExists: boolean;
	private rules: Rule[] /*System.Collections.Generic.List<Rule>*/;
	GetEnumerator(): Rule[] /*System.Collections.Generic.IEnumerator<Rule>*/{ throw new Error("RuleCollection.ts - GetEnumerator : Not implemented.");}
	TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("RuleCollection.ts - TryReadElementFromXmlJsObject : Not implemented.");}
}
export = RuleCollection;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
