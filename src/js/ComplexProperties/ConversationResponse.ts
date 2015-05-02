class ConversationResponse extends ComplexProperty {
    ConversationId: ConversationId;
    SyncState: string;
    ConversationNodes: ConversationNodeCollection;
    private propertySet: PropertySet;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
}
export = ConversationResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

