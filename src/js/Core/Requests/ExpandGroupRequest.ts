import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {EmailAddress} from "../../ComplexProperties/EmailAddress";
import {ExchangeService} from "../ExchangeService";
import {ExpandGroupResponse} from "../Responses/ExpandGroupResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class ExpandGroupRequest extends MultiResponseServiceRequest<ExpandGroupResponse> {
    EmailAddress: EmailAddress;
    private emailAddress: EmailAddress;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ExpandGroupResponse { throw new Error("ExpandGroupRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("ExpandGroupRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("ExpandGroupRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("ExpandGroupRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("ExpandGroupRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("ExpandGroupRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("ExpandGroupRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("ExpandGroupRequest.ts - WriteElementsToXml : Not implemented."); }
}




//}



