import {RuleOperation} from "./RuleOperation";
import {Rule} from "./Rule";
import {ExchangeService} from "../Core/ExchangeService";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class SetRuleOperation extends RuleOperation {
    Rule: Rule;
    XmlElementName: string;
    private rule: Rule;
    InternalToJson(service: ExchangeService): any { throw new Error("SetRuleOperation.ts - InternalToJson : Not implemented."); }
    InternalValidate(): any { throw new Error("SetRuleOperation.ts - InternalValidate : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("SetRuleOperation.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("SetRuleOperation.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("SetRuleOperation.ts - WriteElementsToXml : Not implemented."); }
}


//}




