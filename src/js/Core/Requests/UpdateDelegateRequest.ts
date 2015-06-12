import {DelegateManagementRequestBase} from "./DelegateManagementRequestBase";
import {MeetingRequestsDeliveryScope} from "../../Enumerations/MeetingRequestsDeliveryScope";
import {DelegateUser} from "../../ComplexProperties/DelegateUser";
import {DelegateManagementResponse} from "../Responses/DelegateManagementResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class UpdateDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {
    MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
    DelegateUsers: DelegateUser[];//System.Collections.Generic.List<DelegateUser>;
    private delegateUsers: DelegateUser[];//System.Collections.Generic.List<DelegateUser>;
    private meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
    CreateResponse(): DelegateManagementResponse { throw new Error("UpdateDelegateRequest.ts - CreateResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("UpdateDelegateRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("UpdateDelegateRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("UpdateDelegateRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("UpdateDelegateRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("UpdateDelegateRequest.ts - WriteElementsToXml : Not implemented."); }
}



//}



