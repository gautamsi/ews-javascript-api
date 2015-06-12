import {XmlElementNames} from "../Core/XmlElementNames";
import {ServiceId} from "./ServiceId";
export class ItemId extends ServiceId {
    GetXmlElementName(): string { return XmlElementNames.ItemId; }
}
