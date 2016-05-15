import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {UserConfiguration} from "../../Misc/UserConfiguration";
import {ExchangeService} from "../ExchangeService";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## @internal *Not Implemented* 
 */
export class UpdateUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> {//IJsonSerializable
    UserConfiguration: UserConfiguration;
    userConfiguration: UserConfiguration;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("UpdateUserConfigurationRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("UpdateUserConfigurationRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("UpdateUserConfigurationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("UpdateUserConfigurationRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("UpdateUserConfigurationRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("UpdateUserConfigurationRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("UpdateUserConfigurationRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("UpdateUserConfigurationRequest.ts - WriteElementsToXml : Not implemented."); }
}