import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import RuleOperation = require("../../ComplexProperties/RuleOperation");
import UpdateInboxRulesResponse = require("../Responses/UpdateInboxRulesResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class UpdateInboxRulesRequest extends SimpleServiceRequestBase {
    MailboxSmtpAddress: string;
    RemoveOutlookRuleBlob: boolean;
    InboxRuleOperations: RuleOperation[];//System.Collections.Generic.IEnumerable<RuleOperation>;
    private mailboxSmtpAddress: string;
    private removeOutlookRuleBlob: boolean;
    private inboxRuleOperations: RuleOperation[];//System.Collections.Generic.IEnumerable<RuleOperation>;
    Execute(): UpdateInboxRulesResponse { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}

export = UpdateInboxRulesRequest;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
