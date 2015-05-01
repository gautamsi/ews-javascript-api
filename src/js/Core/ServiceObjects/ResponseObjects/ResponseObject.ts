
class ResponseObject<TMessage> extends ServiceObject {
    IsReadReceiptRequested: boolean;
    IsDeliveryReceiptRequested: boolean;
    private referenceItem: Item;
    GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
    InternalCreate(destinationFolderId: FolderId, messageDisposition: MessageDisposition): System.Collections.Generic.List<Item> { throw new Error("Not implemented."); }
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("Not implemented."); }
    InternalLoad(propertySet: PropertySet): any { throw new Error("Not implemented."); }
    Save(destinationFolderId: FolderId): TMessage { throw new Error("Not implemented."); }
    Save(destinationFolderName: WellKnownFolderName): TMessage { throw new Error("Not implemented."); }
    Save(): TMessage { throw new Error("Not implemented."); }
    Send(): any { throw new Error("Not implemented."); }
    SendAndSaveCopy(destinationFolderId: FolderId): any { throw new Error("Not implemented."); }
    SendAndSaveCopy(destinationFolderName: WellKnownFolderName): any { throw new Error("Not implemented."); }
    SendAndSaveCopy(): any { throw new Error("Not implemented."); }
}

export = ResponseObject;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


