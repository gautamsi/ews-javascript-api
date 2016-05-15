import {DelegateManagementRequestBase} from "./DelegateManagementRequestBase";
import {MeetingRequestsDeliveryScope} from "../../Enumerations/MeetingRequestsDeliveryScope";
import {DelegateUser} from "../../ComplexProperties/DelegateUser";
import {DelegateManagementResponse} from "../Responses/DelegateManagementResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## @internal *Not Implemented* 
 */
export class AddDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {
    MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
    DelegateUsers: DelegateUser[];//System.Collections.Generic.List<DelegateUser>;
    private delegateUsers: DelegateUser[];//System.Collections.Generic.List<DelegateUser>;
    private meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
    CreateResponse(): DelegateManagementResponse { throw new Error("AddDelegateRequest.ts - CreateResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("AddDelegateRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("AddDelegateRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("AddDelegateRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("AddDelegateRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("AddDelegateRequest.ts - WriteElementsToXml : Not implemented."); }
}