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
export class RemoveFromCalendar extends ServiceObject {
    private referenceItem: Item;
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("RemoveFromCalendar.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetSchema(): ServiceObjectSchema { throw new Error("RemoveFromCalendar.ts - GetSchema : Not implemented."); }
    GetXmlElementName(): string { return XmlElementNames.RemoveItem; }
    InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): Item[]/*System.Collections.Generic.List<Item>*/ { throw new Error("RemoveFromCalendar.ts - InternalCreate : Not implemented."); }
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("RemoveFromCalendar.ts - InternalDelete : Not implemented."); }
    InternalLoad(propertySet: PropertySet): any { throw new Error("RemoveFromCalendar.ts - InternalLoad : Not implemented."); }
}




//}




