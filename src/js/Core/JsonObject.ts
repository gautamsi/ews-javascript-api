import JsonWriter = require("./JsonWriter");
			
 class JsonObject extends System.Collections.Generic.Dictionary<string, any> {
	Add(name: string, value: number): void{ throw new Error("Not implemented.");}
	//Add(name: string, value: JsonObject): void{ throw new Error("Not implemented.");}
	//Add(name: string, value: string): void{ throw new Error("Not implemented.");}
	//Add(name: string, value: System.Enum): void{ throw new Error("Not implemented.");}
	//Add(name: string, value: boolean): void{ throw new Error("Not implemented.");}
	//Add(name: string, value: number): void{ throw new Error("Not implemented.");}
	//Add(name: string, value: number): void{ throw new Error("Not implemented.");}
	//Add(name: string, value: number): void{ throw new Error("Not implemented.");}
	//Add(name: string, value: any): void{ throw new Error("Not implemented.");}
	//Add(name: string, value: any[] /*System.Collections.Generic.IEnumerable<any>*/): void{ throw new Error("Not implemented.");}
	AddBase64(key: string, buffer: any /*System.Byte[]*/): void{ throw new Error("Not implemented.");}
	//AddBase64(key: string, stream: any /*System.IO.Stream*/): void{ throw new Error("Not implemented.");}
	//AddBase64(key: string, buffer: any /*System.Byte[]*/, offset: number, count: number): void{ throw new Error("Not implemented.");}
	AddTypeParameter(typeName: string): void{ throw new Error("Not implemented.");}
	HasTypeProperty(): boolean{ throw new Error("Not implemented.");}
	InternalAdd(name: string, value: any): void{ throw new Error("Not implemented.");}
	ReadAsArray(key: string): any[]{ throw new Error("Not implemented.");}
	ReadAsBase64Content(key: string): any /*System.Byte[]*/{ throw new Error("Not implemented.");}
	//ReadAsBase64Content(key: string, stream: any /*System.IO.Stream*/): void{ throw new Error("Not implemented.");}
	ReadAsBool(key: string): boolean{ throw new Error("Not implemented.");}
	ReadAsDouble(key: string): number{ throw new Error("Not implemented.");}
	ReadAsInt(key: string): number{ throw new Error("Not implemented.");}
	ReadAsJsonObject(key: string): JsonObject{ throw new Error("Not implemented.");}
	ReadAsString(key: string): string{ throw new Error("Not implemented.");}
	ReadEnumValue(key: string): T{ throw new Error("Not implemented.");}
	ReadTypeString(): string{ throw new Error("Not implemented.");}
	SerializeToJson(stream: any /*System.IO.Stream*/): void{ throw new Error("Not implemented.");}
	//SerializeToJson(stream: any /*System.IO.Stream*/, prettyPrint: boolean): void{ throw new Error("Not implemented.");}
	ValidateObject(entry: any): void{ throw new Error("Not implemented.");}
	WriteKeyValuePair(writer: JsonWriter, key: string, value: any): void{ throw new Error("Not implemented.");}
	WriteValue(writer: JsonWriter, value: any): void{ throw new Error("Not implemented.");}
}
export = JsonObject;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
