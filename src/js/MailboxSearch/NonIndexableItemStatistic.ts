class NonIndexableItemStatistic {
    Mailbox: string;
    ItemCount: number;
    ErrorMessage: string;
    LoadFromXml(reader: EwsServiceXmlReader): NonIndexableItemStatistic[]/*System.Collections.Generic.List<NonIndexableItemStatistic>*/ { throw new Error("Not implemented."); }
}
export = NonIndexableItemStatistic;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
