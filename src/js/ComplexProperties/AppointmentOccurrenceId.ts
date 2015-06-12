import {ItemId} from "./ItemId";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";

export class AppointmentOccurrenceId extends ItemId {
    OccurrenceIndex: number;
    private occurrenceIndex: number;
    GetXmlElementName(): string { throw new Error("AppointmentOccurrenceId.ts - GetXmlElementName : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("AppointmentOccurrenceId.ts - InternalToJson : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("AppointmentOccurrenceId.ts - WriteAttributesToXml : Not implemented."); }
}

