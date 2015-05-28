import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import UserConfiguration = require("../../Misc/UserConfiguration");
import ExchangeService = require("../ExchangeService");
import ServiceResponse = require("../Responses/ServiceResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class UpdateUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> {//IJsonSerializable
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
export = UpdateUserConfigurationRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
