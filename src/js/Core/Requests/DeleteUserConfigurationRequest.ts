import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import FolderId = require("../../ComplexProperties/FolderId");
import ExchangeService = require("../ExchangeService");
import ServiceResponse = require("../Responses/ServiceResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class DeleteUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> { //: IJsonSerializable
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
export = DeleteUserConfigurationRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
