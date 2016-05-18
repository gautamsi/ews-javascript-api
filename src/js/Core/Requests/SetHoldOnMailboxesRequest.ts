import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {HoldAction} from "../../Enumerations/HoldAction";
import {SetHoldOnMailboxesResponse} from "../Responses/SetHoldOnMailboxesResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## @internal *Not Implemented* 
 */
export class SetHoldOnMailboxesRequest extends SimpleServiceRequestBase {
    ActionType: HoldAction;
    HoldId: string;
    Query: string;
    Mailboxes: string[];
    Language: string;
    InPlaceHoldIdentity: string;
    ItemHoldPeriod: string;
    Execute(): SetHoldOnMailboxesResponse { throw new Error("SetHoldOnMailboxesRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("SetHoldOnMailboxesRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("SetHoldOnMailboxesRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("SetHoldOnMailboxesRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("SetHoldOnMailboxesRequest.ts - ParseResponse : Not implemented."); }
    Validate(): any { throw new Error("SetHoldOnMailboxesRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("SetHoldOnMailboxesRequest.ts - WriteElementsToXml : Not implemented."); }
}