import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import EmailAddress = require("../../ComplexProperties/EmailAddress");
import ExchangeService = require("../ExchangeService");
import ExpandGroupResponse = require("../Responses/ExpandGroupResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class ExpandGroupRequest extends MultiResponseServiceRequest<ExpandGroupResponse> {
    EmailAddress: EmailAddress;
    private emailAddress: EmailAddress;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ExpandGroupResponse { throw new Error("Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = ExpandGroupRequest;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
