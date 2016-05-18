import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {FolderId} from "../../ComplexProperties/FolderId";
import {ExchangeService} from "../ExchangeService";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## @internal *Not Implemented* 
 */
export class DeleteUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> { //: IJsonSerializable
    Name: string;
    ParentFolderId: FolderId;
    private name: string;
    private parentFolderId: FolderId;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("DeleteUserConfigurationRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("DeleteUserConfigurationRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("DeleteUserConfigurationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("DeleteUserConfigurationRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("DeleteUserConfigurationRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("DeleteUserConfigurationRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("DeleteUserConfigurationRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("DeleteUserConfigurationRequest.ts - WriteElementsToXml : Not implemented."); }
}