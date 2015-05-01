

class RemoveFromCalendar extends ServiceObject {
    private referenceItem: Item;
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): Item[]/*System.Collections.Generic.List<Item>*/ { throw new Error("Not implemented."); }
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("Not implemented."); }
    InternalLoad(propertySet: PropertySet): any { throw new Error("Not implemented."); }
}
export = RemoveFromCalendar;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

