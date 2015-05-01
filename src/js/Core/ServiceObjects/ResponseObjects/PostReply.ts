class PostReply extends ServiceObject {
    Subject: string;
    Body: MessageBody;
    BodyPrefix: MessageBody;
    private referenceItem: Item;
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): PostItem { throw new Error("Not implemented."); }
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("Not implemented."); }
    InternalLoad(propertySet: PropertySet): any { throw new Error("Not implemented."); }
    //Save(): PostItem { throw new Error("Not implemented."); }
    //Save(destinationFolderId: FolderId): PostItem { throw new Error("Not implemented."); }
    Save(destinationFolderName: WellKnownFolderName): PostItem { throw new Error("Not implemented."); }
}

export = PostReply;
 //module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
