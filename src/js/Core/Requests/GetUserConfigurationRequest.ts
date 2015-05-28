import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import FolderId = require("../../ComplexProperties/FolderId");
import UserConfiguration = require("../../Misc/UserConfiguration");
import UserConfigurationProperties = require("../../Enumerations/UserConfigurationProperties");
import ExchangeService = require("../ExchangeService");
import GetUserConfigurationResponse = require("../Responses/GetUserConfigurationResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class GetUserConfigurationRequest extends MultiResponseServiceRequest<GetUserConfigurationResponse> { //IJsonSerializable
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
export = GetUserConfigurationRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
