import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import ExchangeService = require("../ExchangeService");
import ServiceResponse = require("../Responses/ServiceResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class SetClientExtensionRequest extends MultiResponseServiceRequest<ServiceResponse> {
    private actions: any[];//System.Collections.Generic.List<T>;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("SetClientExtensionRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("SetClientExtensionRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("SetClientExtensionRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("SetClientExtensionRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("SetClientExtensionRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("SetClientExtensionRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("SetClientExtensionRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("SetClientExtensionRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = SetClientExtensionRequest;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
