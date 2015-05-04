			
 class RuleCollection extends ComplexProperty {
	OutlookRuleBlobExists: boolean;
	Count: number;
	Item: Rule;
	private outlookRuleBlobExists: boolean;
	private rules: Rule[] /*System.Collections.Generic.List<Rule>*/;
	GetEnumerator(): Rule[] /*System.Collections.Generic.IEnumerator<Rule>*/{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
}
export = RuleCollection;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			