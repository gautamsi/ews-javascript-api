import {XmlElementNames} from "../../XmlElementNames";
import {AttachableAttribute} from "../../../Attributes/AttachableAttribute";

import {MeetingMessage} from "./MeetingMessage";
/**
 * ## *Not Implemented* 
 */
@AttachableAttribute(true)
export class MeetingResponse extends MeetingMessage {
    //////Start: Date;
    //////End: Date;
    //////Location: string;
    //////Recurrence: Recurrence;
    //////ProposedStart: Date;
    //////ProposedEnd: Date;
    //////EnhancedLocation: EnhancedLocation;
    //////Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): MeetingResponse { throw new Error("MeetingResponse.ts - Bind : Not implemented."); }
    //////Bind(service: ExchangeService, id: ItemId): MeetingResponse { throw new Error("MeetingResponse.ts - Bind : Not implemented."); }
    //////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("MeetingResponse.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    //////GetSchema(): ServiceObjectSchema { throw new Error("MeetingResponse.ts - GetSchema : Not implemented."); }
    GetXmlElementName(): string { return XmlElementNames.MeetingResponse; }
}