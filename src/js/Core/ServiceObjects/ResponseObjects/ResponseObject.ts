import {ServiceObject} from "../ServiceObject";
import {Item} from "../Items/Item";
import {ServiceObjectSchema} from "../Schemas/ServiceObjectSchema";
import {FolderId} from "../../../ComplexProperties/FolderId";
import {MessageDisposition} from "../../../Enumerations/MessageDisposition";
import {DeleteMode} from "../../../Enumerations/DeleteMode";
import {SendCancellationsMode} from "../../../Enumerations/SendCancellationsMode";
import {AffectedTaskOccurrence} from "../../../Enumerations/AffectedTaskOccurrence";
import {PropertySet} from "../../PropertySet";
import {WellKnownFolderName} from "../../../Enumerations/WellKnownFolderName";
export class ResponseObject<TMessage> extends ServiceObject {
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

