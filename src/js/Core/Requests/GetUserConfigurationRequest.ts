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
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetUserConfigurationResponse { throw new Error("Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = GetUserConfigurationRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
