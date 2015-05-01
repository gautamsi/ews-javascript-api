   class ByteArrayPropertyDefinition extends TypedPropertyDefinition {
        IsNullable: boolean;
        Type: System.Type;
        Parse(value: string): any { throw new Error("Not implemented."); }
        ToString(value: any): string { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }
export = ByteArrayPropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
