import ServiceObject = require("../ServiceObject");
import Item = require("../Items/Item");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import ServiceObjectSchema = require("../Schemas/ServiceObjectSchema");
import FolderId = require("../../../ComplexProperties/FolderId");
import MessageDisposition = require("../../../Enumerations/MessageDisposition");
import DeleteMode = require("../../../Enumerations/DeleteMode");
import SendCancellationsMode = require("../../../Enumerations/SendCancellationsMode");
import AffectedTaskOccurrence = require("../../../Enumerations/AffectedTaskOccurrence");
import PropertySet = require("../../PropertySet");

    class SuppressReadReceipt extends ServiceObject {
        private referenceItem: Item;
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
        InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): any { throw new Error("Not implemented."); }
        InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("Not implemented."); }
        InternalLoad(propertySet: PropertySet): any { throw new Error("Not implemented."); }
}

export = SuppressReadReceipt;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

