import {Strings} from "../Strings";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";

import {ItemId} from "./ItemId";
export class AppointmentOccurrenceId extends ItemId {
    private occurrenceIndex: number;
    get OccurrenceIndex(): number {
        return this.occurrenceIndex;
    }
    set OccurrenceIndex(value: number) {
        if (value < 1) {
            throw new Error(Strings.OccurrenceIndexMustBeGreaterThanZero);//ArgumentException
        }
        this.occurrenceIndex = value;
    }
    constructor(recurringMasterUniqueId: string, occurrenceIndex: number) {
        super(recurringMasterUniqueId);
        this.OccurrenceIndex = occurrenceIndex;
    }

    GetXmlElementName(): string { return XmlElementNames.OccurrenceItemId; }
    InternalToJson(service: ExchangeService): any { throw new Error("AppointmentOccurrenceId.ts - InternalToJson : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(null, XmlAttributeNames.RecurringMasterId, this.UniqueId);
        writer.WriteAttributeValue(null, XmlAttributeNames.InstanceIndex, this.OccurrenceIndex);
    }
}