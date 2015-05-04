			
 class GetInboxRulesResponse extends ServiceResponse {
	Rules: RuleCollection;
	private ruleCollection: RuleCollection;
	ReadElementsFromXml(reader: EwsServiceXmlReader): void{ throw new Error("Not implemented.");}
}
export = GetInboxRulesResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			