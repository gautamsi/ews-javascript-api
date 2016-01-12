import {XmlElementNames} from "../Core/XmlElementNames";
import {ServiceId} from "./ServiceId";
export class ItemId extends ServiceId {
    constructor();
    constructor(uniqueId: string);
    constructor(uniqueId?: string) {
        if (arguments.length === 0) {
            super();
            return;
        }
        super(uniqueId);
    }
    GetXmlElementName(): string { return XmlElementNames.ItemId; }
}
