import {XmlElementNames} from "../../XmlElementNames";
import {MessageBody} from "../../../ComplexProperties/MessageBody";
import {ServiceObject} from "../ServiceObject";
import {Item} from "../Items/Item";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {ServiceObjectSchema} from "../Schemas/ServiceObjectSchema";
import {FolderId} from "../../../ComplexProperties/FolderId";
import {MessageDisposition} from "../../../Enumerations/MessageDisposition";
import {PostItem} from "../Items/PostItem";
import {DeleteMode} from "../../../Enumerations/DeleteMode";
import {SendCancellationsMode} from "../../../Enumerations/SendCancellationsMode";
import {AffectedTaskOccurrence} from "../../../Enumerations/AffectedTaskOccurrence";
import {PropertySet} from "../../PropertySet";
import {WellKnownFolderName} from "../../../Enumerations/WellKnownFolderName";
export class PostReply extends ServiceObject {
    Subject: string;
    Body: MessageBody;
    BodyPrefix: MessageBody;
    private referenceItem: Item;
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("PostReply.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetSchema(): ServiceObjectSchema { throw new Error("PostReply.ts - GetSchema : Not implemented."); }
    GetXmlElementName(): string { return XmlElementNames.PostReplyItem; }
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): PostItem { throw new Error("PostReply.ts - InternalCreate : Not implemented."); }
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("PostReply.ts - InternalDelete : Not implemented."); }
    InternalLoad(propertySet: PropertySet): any { throw new Error("PostReply.ts - InternalLoad : Not implemented."); }
    //Save(): PostItem { throw new Error("PostReply.ts - Save : Not implemented."); }
    //Save(destinationFolderId: FolderId): PostItem { throw new Error("PostReply.ts - Save : Not implemented."); }
    Save(destinationFolderName: WellKnownFolderName): PostItem { throw new Error("PostReply.ts - Save : Not implemented."); }
}

 //
//}



