import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {RuleOperation} from "../../ComplexProperties/RuleOperation";
import {UpdateInboxRulesResponse} from "../Responses/UpdateInboxRulesResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class UpdateInboxRulesRequest extends SimpleServiceRequestBase {
    MailboxSmtpAddress: string;
    RemoveOutlookRuleBlob: boolean;
    InboxRuleOperations: RuleOperation[];//System.Collections.Generic.IEnumerable<RuleOperation>;
    private mailboxSmtpAddress: string;
    private removeOutlookRuleBlob: boolean;
    private inboxRuleOperations: RuleOperation[];//System.Collections.Generic.IEnumerable<RuleOperation>;
    Execute(): UpdateInboxRulesResponse { throw new Error("UpdateInboxRulesRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("UpdateInboxRulesRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("UpdateInboxRulesRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("UpdateInboxRulesRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("UpdateInboxRulesRequest.ts - ParseResponse : Not implemented."); }
    Validate(): any { throw new Error("UpdateInboxRulesRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("UpdateInboxRulesRequest.ts - WriteElementsToXml : Not implemented."); }
}




//}



