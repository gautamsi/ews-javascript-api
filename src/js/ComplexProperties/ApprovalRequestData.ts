import {ComplexProperty} from "./ComplexProperty";
import {JsonObject} from "../Core/JsonObject";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class ApprovalRequestData extends ComplexProperty {
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

