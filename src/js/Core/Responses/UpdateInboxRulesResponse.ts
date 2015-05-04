			
 class UpdateInboxRulesResponse extends ServiceResponse {
	Errors: RuleOperationErrorCollection;
	private errors: RuleOperationErrorCollection;
	LoadExtraErrorDetailsFromXml(reader: EwsServiceXmlReader, xmlElementName: string): boolean{ throw new Error("Not implemented.");}
}
export = UpdateInboxRulesResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			