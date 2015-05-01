
class OccurrenceInfo extends ComplexProperty {
    ItemId: ItemId;
    Start: Date;
    End: Date;
    OriginalStart: Date;
    private itemId: ItemId;
    private start: Date;
    private end: Date;
    private originalStart: Date;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
