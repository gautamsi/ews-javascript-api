import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {EmailAddress} from "../../ComplexProperties/EmailAddress";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## *Not Implemented* 
 */
export class UnpinTeamMailboxRequest extends SimpleServiceRequestBase {
    private emailAddress: EmailAddress;
    Execute(): ServiceResponse { throw new Error("UnpinTeamMailboxRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("UnpinTeamMailboxRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("UnpinTeamMailboxRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("UnpinTeamMailboxRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("UnpinTeamMailboxRequest.ts - ParseResponse : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("UnpinTeamMailboxRequest.ts - WriteElementsToXml : Not implemented."); }
}