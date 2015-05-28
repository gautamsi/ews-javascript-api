import ServiceObject = require("../ServiceObject");
import Item = require("../Items/Item");
import ServiceObjectSchema = require("../Schemas/ServiceObjectSchema");
import FolderId = require("../../../ComplexProperties/FolderId");
import MessageDisposition = require("../../../Enumerations/MessageDisposition");
import DeleteMode = require("../../../Enumerations/DeleteMode");
import SendCancellationsMode = require("../../../Enumerations/SendCancellationsMode");
import AffectedTaskOccurrence = require("../../../Enumerations/AffectedTaskOccurrence");
import PropertySet = require("../../PropertySet");
import WellKnownFolderName = require("../../../Enumerations/WellKnownFolderName");

class ResponseObject<TMessage> extends ServiceObject {
    IsReadReceiptRequested: boolean;
    IsDeliveryReceiptRequested: boolean;
    private referenceItem: Item;
    GetSchema(): ServiceObjectSchema { throw new Error("ResponseObject.ts - GetSchema : Not implemented."); }
    InternalCreate(destinationFolderId: FolderId, messageDisposition: MessageDisposition): Item[] { throw new Error("ResponseObject.ts - InternalCreate : Not implemented."); }
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("ResponseObject.ts - InternalDelete : Not implemented."); }
    InternalLoad(propertySet: PropertySet): any { throw new Error("ResponseObject.ts - InternalLoad : Not implemented."); }
    Save(destinationFolderId: FolderId): TMessage { throw new Error("ResponseObject.ts - Save : Not implemented."); }
    //Save(destinationFolderName: WellKnownFolderName): TMessage { throw new Error("ResponseObject.ts - Save : Not implemented."); }
    //Save(): TMessage { throw new Error("ResponseObject.ts - Save : Not implemented."); }
    Send(): any { throw new Error("ResponseObject.ts - Send : Not implemented."); }
    SendAndSaveCopy(destinationFolderId: FolderId): any { throw new Error("ResponseObject.ts - SendAndSaveCopy : Not implemented."); }
    //SendAndSaveCopy(destinationFolderName: WellKnownFolderName): any { throw new Error("ResponseObject.ts - SendAndSaveCopy : Not implemented."); }
    //SendAndSaveCopy(): any { throw new Error("ResponseObject.ts - SendAndSaveCopy : Not implemented."); }
}

export = ResponseObject;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


