import MessageBody = require("../../../ComplexProperties/MessageBody");
import ServiceObject = require("../ServiceObject");
import Item = require("../Items/Item");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import ServiceObjectSchema = require("../Schemas/ServiceObjectSchema");
import FolderId = require("../../../ComplexProperties/FolderId");
import MessageDisposition = require("../../../Enumerations/MessageDisposition");
import PostItem = require("../Items/PostItem");
import DeleteMode = require("../../../Enumerations/DeleteMode");
import SendCancellationsMode = require("../../../Enumerations/SendCancellationsMode");
import AffectedTaskOccurrence = require("../../../Enumerations/AffectedTaskOccurrence");
import PropertySet = require("../../PropertySet");
import WellKnownFolderName = require("../../../Enumerations/WellKnownFolderName");
class PostReply extends ServiceObject {
    Subject: string;
    Body: MessageBody;
    BodyPrefix: MessageBody;
    private referenceItem: Item;
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("PostReply.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetSchema(): ServiceObjectSchema { throw new Error("PostReply.ts - GetSchema : Not implemented."); }
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): PostItem { throw new Error("PostReply.ts - InternalCreate : Not implemented."); }
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("PostReply.ts - InternalDelete : Not implemented."); }
    InternalLoad(propertySet: PropertySet): any { throw new Error("PostReply.ts - InternalLoad : Not implemented."); }
    //Save(): PostItem { throw new Error("PostReply.ts - Save : Not implemented."); }
    //Save(destinationFolderId: FolderId): PostItem { throw new Error("PostReply.ts - Save : Not implemented."); }
    Save(destinationFolderName: WellKnownFolderName): PostItem { throw new Error("PostReply.ts - Save : Not implemented."); }
}

export = PostReply;
 //module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
