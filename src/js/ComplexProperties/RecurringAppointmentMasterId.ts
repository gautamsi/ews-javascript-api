import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";

import {ItemId} from "./ItemId";
export class RecurringAppointmentMasterId extends ItemId {
    constructor(occurrenceId: string) {
        super(occurrenceId);
    }
    GetXmlElementName(): string { return XmlElementNames.RecurringMasterItemId; }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(null, XmlAttributeNames.OccurrenceId, this.UniqueId);
        writer.WriteAttributeValue(null, XmlAttributeNames.ChangeKey, this.ChangeKey);
    }
}
