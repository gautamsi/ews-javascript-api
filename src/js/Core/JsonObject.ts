import JsonWriter = require("./JsonWriter");
			
 class JsonObject /*extends System.Collections.Generic.Dictionary<string, any>*/ {
	 	private static TypeAttribute: string = "__type";
        private static JsonTypeNamespace: string = "Exchange";
        static JsonValueString: string = "Value";
	Add(name: string, value: number): void{ throw new Error("JsonObject.ts - Add : Not implemented.");}
	//Add(name: string, value: JsonObject): void{ throw new Error("JsonObject.ts - Add : Not implemented.");}
	//Add(name: string, value: string): void{ throw new Error("JsonObject.ts - Add : Not implemented.");}
	//Add(name: string, value: System.Enum): void{ throw new Error("JsonObject.ts - Add : Not implemented.");}
	//Add(name: string, value: boolean): void{ throw new Error("JsonObject.ts - Add : Not implemented.");}
	//Add(name: string, value: number): void{ throw new Error("JsonObject.ts - Add : Not implemented.");}
	//Add(name: string, value: number): void{ throw new Error("JsonObject.ts - Add : Not implemented.");}
	//Add(name: string, value: number): void{ throw new Error("JsonObject.ts - Add : Not implemented.");}
	//Add(name: string, value: any): void{ throw new Error("JsonObject.ts - Add : Not implemented.");}
	//Add(name: string, value: any[] /*System.Collections.Generic.IEnumerable<any>*/): void{ throw new Error("JsonObject.ts - Add : Not implemented.");}
	AddBase64(key: string, buffer: any /*System.Byte[]*/): void{ throw new Error("JsonObject.ts - AddBase64 : Not implemented.");}
	//AddBase64(key: string, stream: any /*System.IO.Stream*/): void{ throw new Error("JsonObject.ts - AddBase64 : Not implemented.");}
	//AddBase64(key: string, buffer: any /*System.Byte[]*/, offset: number, count: number): void{ throw new Error("JsonObject.ts - AddBase64 : Not implemented.");}
	AddTypeParameter(typeName: string): void{ throw new Error("JsonObject.ts - AddTypeParameter : Not implemented.");}
	HasTypeProperty(): boolean{ throw new Error("JsonObject.ts - HasTypeProperty : Not implemented.");}
	InternalAdd(name: string, value: any): void{ throw new Error("JsonObject.ts - InternalAdd : Not implemented.");}
	ReadAsArray(key: string): any[]{ throw new Error("JsonObject.ts - ReadAsArray : Not implemented.");}
	ReadAsBase64Content(key: string): any /*System.Byte[]*/{ throw new Error("JsonObject.ts - ReadAsBase64Content : Not implemented.");}
	//ReadAsBase64Content(key: string, stream: any /*System.IO.Stream*/): void{ throw new Error("JsonObject.ts - ReadAsBase64Content : Not implemented.");}
	ReadAsBool(key: string): boolean{ throw new Error("JsonObject.ts - ReadAsBool : Not implemented.");}
	ReadAsDouble(key: string): number{ throw new Error("JsonObject.ts - ReadAsDouble : Not implemented.");}
	ReadAsInt(key: string): number{ throw new Error("JsonObject.ts - ReadAsInt : Not implemented.");}
	ReadAsJsonObject(key: string): JsonObject{ throw new Error("JsonObject.ts - ReadAsJsonObject : Not implemented.");}
	ReadAsString(key: string): string{ throw new Error("JsonObject.ts - ReadAsString : Not implemented.");}
	ReadEnumValue<T>(key: string): T{ throw new Error("JsonObject.ts - ReadEnumValue<T> : Not implemented.");}
	ReadTypeString(): string{ throw new Error("JsonObject.ts - ReadTypeString : Not implemented.");}
	SerializeToJson(stream: any /*System.IO.Stream*/): void{ throw new Error("JsonObject.ts - SerializeToJson : Not implemented.");}
	//SerializeToJson(stream: any /*System.IO.Stream*/, prettyPrint: boolean): void{ throw new Error("JsonObject.ts - SerializeToJson : Not implemented.");}
	ValidateObject(entry: any): void{ throw new Error("JsonObject.ts - ValidateObject : Not implemented.");}
	WriteKeyValuePair(writer: JsonWriter, key: string, value: any): void{ throw new Error("JsonObject.ts - WriteKeyValuePair : Not implemented.");}
	WriteValue(writer: JsonWriter, value: any): void{ throw new Error("JsonObject.ts - WriteValue : Not implemented.");}
}
export = JsonObject;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
