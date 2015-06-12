import {XmlElementNames} from "../../XmlElementNames";
import {ServiceObject} from "../ServiceObject";
import {Item} from "../Items/Item";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {ServiceObjectSchema} from "../Schemas/ServiceObjectSchema";
import {FolderId} from "../../../ComplexProperties/FolderId";
import {MessageDisposition} from "../../../Enumerations/MessageDisposition";
import {DeleteMode} from "../../../Enumerations/DeleteMode";
import {SendCancellationsMode} from "../../../Enumerations/SendCancellationsMode";
import {AffectedTaskOccurrence} from "../../../Enumerations/AffectedTaskOccurrence";
import {PropertySet} from "../../PropertySet";
export class SuppressReadReceipt extends ServiceObject {
    private referenceItem: Item;
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("SuppressReadReceipt.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetSchema(): ServiceObjectSchema { throw new Error("SuppressReadReceipt.ts - GetSchema : Not implemented."); }
    GetXmlElementName(): string { return XmlElementNames.SuppressReadReceipt; }
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): any { throw new Error("SuppressReadReceipt.ts - InternalCreate : Not implemented."); }
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("SuppressReadReceipt.ts - InternalDelete : Not implemented."); }
    InternalLoad(propertySet: PropertySet): any { throw new Error("SuppressReadReceipt.ts - InternalLoad : Not implemented."); }
}




//}




