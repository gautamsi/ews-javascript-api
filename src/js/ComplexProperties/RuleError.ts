			
 class RuleError extends ComplexProperty {
	RuleProperty: RuleProperty;
	ErrorCode: RuleErrorCode;
	ErrorMessage: string;
	Value: string;
	private ruleProperty: RuleProperty;
	private errorCode: RuleErrorCode;
	private errorMessage: string;
	private value: string;
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
}
export = RuleError;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			