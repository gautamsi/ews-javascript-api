import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {UserConfiguration} from "../../Misc/UserConfiguration";
import {ExchangeService} from "../ExchangeService";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class CreateUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> { //: IJsonSerializable
    UserConfiguration: UserConfiguration;
    userConfiguration: UserConfiguration;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("CreateUserConfigurationRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("CreateUserConfigurationRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("CreateUserConfigurationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("CreateUserConfigurationRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("CreateUserConfigurationRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("CreateUserConfigurationRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("CreateUserConfigurationRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("CreateUserConfigurationRequest.ts - WriteElementsToXml : Not implemented."); }
}


//}



