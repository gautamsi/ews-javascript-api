import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {GetNonIndexableItemStatisticsResponse} from "../Responses/GetNonIndexableItemStatisticsResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## *Not Implemented* 
 */
export class GetNonIndexableItemStatisticsRequest extends SimpleServiceRequestBase {
    Mailboxes: string[];
    SearchArchiveOnly: boolean;
    Execute(): GetNonIndexableItemStatisticsResponse { throw new Error("GetNonIndexableItemStatisticsRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetNonIndexableItemStatisticsRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetNonIndexableItemStatisticsRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetNonIndexableItemStatisticsRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetNonIndexableItemStatisticsRequest.ts - ParseResponse : Not implemented."); }
    Validate(): any { throw new Error("GetNonIndexableItemStatisticsRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetNonIndexableItemStatisticsRequest.ts - WriteElementsToXml : Not implemented."); }
}