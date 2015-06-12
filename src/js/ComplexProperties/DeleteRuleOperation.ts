import {RuleOperation} from "./RuleOperation";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class DeleteRuleOperation extends RuleOperation {
    RuleId: string;
    XmlElementName: string;
    private ruleId: string;
    InternalToJson(service: ExchangeService): any { throw new Error("DeleteRuleOperation.ts - InternalToJson : Not implemented."); }
    InternalValidate(): any { throw new Error("DeleteRuleOperation.ts - InternalValidate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("DeleteRuleOperation.ts - WriteElementsToXml : Not implemented."); }
}

