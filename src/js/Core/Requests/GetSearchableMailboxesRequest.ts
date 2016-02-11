import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {GetSearchableMailboxesResponse} from "../Responses/GetSearchableMailboxesResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## *Not Implemented* 
 */
export class GetSearchableMailboxesRequest extends SimpleServiceRequestBase {
    SearchFilter: string;
    ExpandGroupMembership: boolean;
    Execute(): GetSearchableMailboxesResponse { throw new Error("GetSearchableMailboxesRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetSearchableMailboxesRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetSearchableMailboxesRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetSearchableMailboxesRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetSearchableMailboxesRequest.ts - ParseResponse : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetSearchableMailboxesRequest.ts - WriteElementsToXml : Not implemented."); }
}