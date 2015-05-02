class Grouping { //: ISelfValidate, IJsonSerializable
    SortDirection: SortDirection;
    GroupOn: PropertyDefinitionBase;
    AggregateOn: PropertyDefinitionBase;
    AggregateType: AggregateType;
    private sortDirection: SortDirection;
    private groupOn: PropertyDefinitionBase;
    private aggregateOn: PropertyDefinitionBase;
    private aggregateType: AggregateType;
    InternalValidate(): any { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = Grouping;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;