import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {FolderId} from "../../ComplexProperties/FolderId";
import {UserConfiguration} from "../../Misc/UserConfiguration";
import {UserConfigurationProperties} from "../../Enumerations/UserConfigurationProperties";
import {ExchangeService} from "../ExchangeService";
import {GetUserConfigurationResponse} from "../Responses/GetUserConfigurationResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## @internal *Not Implemented* 
 */
export class GetUserConfigurationRequest extends MultiResponseServiceRequest<GetUserConfigurationResponse> { //IJsonSerializable
    private static EnumDelimiter: string = ",";

    Name: string;
    ParentFolderId: FolderId;
    UserConfiguration: UserConfiguration;
    Properties: UserConfigurationProperties;
    private name: string;
    private parentFolderId: FolderId;
    private properties: UserConfigurationProperties;
    private userConfiguration: UserConfiguration;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetUserConfigurationResponse { throw new Error("GetUserConfigurationRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("GetUserConfigurationRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetUserConfigurationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("GetUserConfigurationRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetUserConfigurationRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetUserConfigurationRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("GetUserConfigurationRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetUserConfigurationRequest.ts - WriteElementsToXml : Not implemented."); }
}