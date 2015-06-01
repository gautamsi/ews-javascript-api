import ComplexProperty = require("./ComplexProperty");
import JsonObject = require("../Core/JsonObject");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
class ApprovalRequestData extends ComplexProperty {
    IsUndecidedApprovalRequest: boolean;
    ApprovalDecision: number;
    ApprovalDecisionMaker: string;
    ApprovalDecisionTime: Date;
    private isUndecidedApprovalRequest: boolean;
    private approvalDecision: number;
    private approvalDecisionMaker: string;
    private approvalDecisionTime: Date;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("ApprovalRequestData.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ApprovalRequestData.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
export = ApprovalRequestData;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
