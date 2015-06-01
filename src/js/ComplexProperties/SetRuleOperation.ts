import RuleOperation = require("./RuleOperation");
import Rule = require("./Rule");
import ExchangeService = require("../Core/ExchangeService");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class SetRuleOperation extends RuleOperation {
    Rule: Rule;
    XmlElementName: string;
    private rule: Rule;
    InternalToJson(service: ExchangeService): any { throw new Error("SetRuleOperation.ts - InternalToJson : Not implemented."); }
    InternalValidate(): any { throw new Error("SetRuleOperation.ts - InternalValidate : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("SetRuleOperation.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("SetRuleOperation.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("SetRuleOperation.ts - WriteElementsToXml : Not implemented."); }
}
export = SetRuleOperation;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

