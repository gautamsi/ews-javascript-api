import JsonTokenizer = require("./JsonTokenizer");
import JsonObject = require("./JsonObject");
import JsonTokenType = require("../Enumerations/JsonTokenType");
			
 class JsonParser {
	private tokenizer: JsonTokenizer;
	Parse(): JsonObject{ throw new Error("JsonParser.ts - Parse : Not implemented.");}
	ParseArray(): any[]{ throw new Error("JsonParser.ts - ParseArray : Not implemented.");}
	ParseKeyValuePair(jsonObject: JsonObject): void{ throw new Error("JsonParser.ts - ParseKeyValuePair : Not implemented.");}
	ParseNumber(valueToken: string): any{ throw new Error("JsonParser.ts - ParseNumber : Not implemented.");}
	ParseObject(): JsonObject{ throw new Error("JsonParser.ts - ParseObject : Not implemented.");}
	ParseValue(): any{ throw new Error("JsonParser.ts - ParseValue : Not implemented.");}
	ReadAndValidateToken(token: string, expectedTokenTypes: JsonTokenType[]): JsonTokenType{ throw new Error("JsonParser.ts - ReadAndValidateToken : Not implemented.");}
	UnescapeString(value: string): string{ throw new Error("JsonParser.ts - UnescapeString : Not implemented.");}
}
export = JsonParser;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
