class MapiTypeConverterMapEntry {
    Parse: /*System.Func<string, any>*/any;
    ConvertToString: /*System.Func<any, string>*/any;
    Type: /*System.Type*/any;
    IsArray: boolean;
    DefaultValue: any;
    private static defaultValueMap: /*LazyMember<T>*/any;
    ChangeType(value: any): any { throw new Error("Not implemented."); }
    ConvertToValue(stringValue: string): any { throw new Error("Not implemented."); }
    ConvertToValueOrDefault(stringValue: string): any { throw new Error("Not implemented."); }
    ValidateValueAsArray(value: any): any { throw new Error("Not implemented."); }
}

export= MapiTypeConverterMapEntry;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
