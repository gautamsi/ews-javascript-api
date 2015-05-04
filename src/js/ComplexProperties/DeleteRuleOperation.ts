import RuleOperation = require("./RuleOperation");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class DeleteRuleOperation extends RuleOperation {
    RuleId: string;
    XmlElementName: string;
    private ruleId: string;
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    InternalValidate(): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = DeleteRuleOperation;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
