import {EmailAddress} from "../../ComplexProperties/EmailAddress";
import {TeamMailboxLifecycleState} from "../../Enumerations/TeamMailboxLifecycleState";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {Uri} from "../../Uri";
import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
export class SetTeamMailboxRequest extends SimpleServiceRequestBase {
    private emailAddress: EmailAddress;
    private sharePointSiteUrl: Uri;
    private state: TeamMailboxLifecycleState;
    Execute(): ServiceResponse { throw new Error("SetTeamMailboxRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("SetTeamMailboxRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("SetTeamMailboxRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("SetTeamMailboxRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("SetTeamMailboxRequest.ts - ParseResponse : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("SetTeamMailboxRequest.ts - WriteElementsToXml : Not implemented."); }
}