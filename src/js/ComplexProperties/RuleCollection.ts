import {ComplexProperty} from "./ComplexProperty";
import {Rule} from "./Rule";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class RuleCollection extends ComplexProperty {
	OutlookRuleBlobExists: boolean;
	Count: number;
	Item: Rule;
	private outlookRuleBlobExists: boolean;
	private rules: Rule[] /*System.Collections.Generic.List<Rule>*/;
	GetEnumerator(): Rule[] /*System.Collections.Generic.IEnumerator<Rule>*/{ throw new Error("RuleCollection.ts - GetEnumerator : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("RuleCollection.ts - TryReadElementFromXmlJsObject : Not implemented.");}
}






			

