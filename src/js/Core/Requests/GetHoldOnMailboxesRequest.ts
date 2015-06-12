import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {GetHoldOnMailboxesResponse} from "../Responses/GetHoldOnMailboxesResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class GetHoldOnMailboxesRequest extends SimpleServiceRequestBase {
    HoldId: string;
    Execute(): GetHoldOnMailboxesResponse { throw new Error("GetHoldOnMailboxesRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetHoldOnMailboxesRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetHoldOnMailboxesRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetHoldOnMailboxesRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetHoldOnMailboxesRequest.ts - ParseResponse : Not implemented."); }
    Validate(): any { throw new Error("GetHoldOnMailboxesRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetHoldOnMailboxesRequest.ts - WriteElementsToXml : Not implemented."); }
}


//}



