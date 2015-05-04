import JsonTokenizer = require("./JsonTokenizer");
import JsonObject = require("./JsonObject");
import JsonTokenType = require("../Enumerations/JsonTokenType");
			
 class JsonParser {
	private tokenizer: JsonTokenizer;
	Parse(): JsonObject{ throw new Error("Not implemented.");}
	ParseArray(): any[]{ throw new Error("Not implemented.");}
	ParseKeyValuePair(jsonObject: JsonObject): void{ throw new Error("Not implemented.");}
	ParseNumber(valueToken: string): any{ throw new Error("Not implemented.");}
	ParseObject(): JsonObject{ throw new Error("Not implemented.");}
	ParseValue(): any{ throw new Error("Not implemented.");}
	ReadAndValidateToken(token: string, expectedTokenTypes: JsonTokenType[]): JsonTokenType{ throw new Error("Not implemented.");}
	UnescapeString(value: string): string{ throw new Error("Not implemented.");}
}
export = JsonParser;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
