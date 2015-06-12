import {RuleOperation} from "./RuleOperation";
import {Rule} from "./Rule";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class CreateRuleOperation extends RuleOperation {
    Rule: Rule;
    XmlElementName: string;
    private rule: Rule;
    InternalToJson(service: ExchangeService): any { throw new Error("CreateRuleOperation.ts - InternalToJson : Not implemented."); }
    InternalValidate(): any { throw new Error("CreateRuleOperation.ts - InternalValidate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("CreateRuleOperation.ts - WriteElementsToXml : Not implemented."); }
}


