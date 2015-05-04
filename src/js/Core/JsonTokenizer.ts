import JsonTokenType = require("../Enumerations/JsonTokenType");
			
 class JsonTokenizer {
	private currentMatch: any /*System.Text.RegularExpressions.Match*/;
	private nextTokenType: JsonTokenType;
	private nextToken: string;
	private nextTokenPeeked: boolean;
	private static jsonStringRegEx: any /*System.Text.RegularExpressions.Regex*/;
	private static jsonNumberRegEx: any /*System.Text.RegularExpressions.Regex*/;
	private static jsonBooleanRegEx: any /*System.Text.RegularExpressions.Regex*/;
	private static jsonNullRegEx: any /*System.Text.RegularExpressions.Regex*/;
	private static jsonOpenObjectRegEx: any /*System.Text.RegularExpressions.Regex*/;
	private static jsonCloseObjectRegEx: any /*System.Text.RegularExpressions.Regex*/;
	private static jsonOpenArrayRegEx: any /*System.Text.RegularExpressions.Regex*/;
	private static jsonCloseArrayRegEx: any /*System.Text.RegularExpressions.Regex*/;
	private static jsonColonRegEx: any /*System.Text.RegularExpressions.Regex*/;
	private static jsonCommaRegEx: any /*System.Text.RegularExpressions.Regex*/;
	private static whitespaceRegEx: any /*System.Text.RegularExpressions.Regex*/;
	private static tokenDictionary: any /*System.Collections.Generic.Dictionary<JsonTokenType, System.Text.RegularExpressions.Regex>*/;
	private static fullTokenizerRegex: any /*System.Text.RegularExpressions.Regex*/;
	AdvanceRegExMatch(): void{ throw new Error("Not implemented.");}
	NextToken(token: string): JsonTokenType{ throw new Error("Not implemented.");}
	Peek(): JsonTokenType{ throw new Error("Not implemented.");}
}
export = JsonTokenizer;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
