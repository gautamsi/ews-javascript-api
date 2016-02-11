import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {SearchPageDirection} from "../../Enumerations/SearchPageDirection";
import {GetNonIndexableItemDetailsResponse} from "../Responses/GetNonIndexableItemDetailsResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## *Not Implemented* 
 */
export class GetNonIndexableItemDetailsRequest extends SimpleServiceRequestBase {
    Mailboxes: string[];
    PageSize: number;
    PageItemReference: string;
    PageDirection: SearchPageDirection;
    SearchArchiveOnly: boolean;
    Execute(): GetNonIndexableItemDetailsResponse { throw new Error("GetNonIndexableItemDetailsRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetNonIndexableItemDetailsRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetNonIndexableItemDetailsRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetNonIndexableItemDetailsRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetNonIndexableItemDetailsRequest.ts - ParseResponse : Not implemented."); }
    Validate(): any { throw new Error("GetNonIndexableItemDetailsRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetNonIndexableItemDetailsRequest.ts - WriteElementsToXml : Not implemented."); }
}