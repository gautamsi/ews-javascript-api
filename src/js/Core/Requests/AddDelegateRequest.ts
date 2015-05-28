import DelegateManagementRequestBase = require("./DelegateManagementRequestBase");
import MeetingRequestsDeliveryScope = require("../../Enumerations/MeetingRequestsDeliveryScope");
import DelegateUser = require("../../ComplexProperties/DelegateUser");
import DelegateManagementResponse = require("../Responses/DelegateManagementResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class AddDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {
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
export = AddDelegateRequest;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
