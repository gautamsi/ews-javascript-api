import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import IdFormat = require("../../Enumerations/IdFormat");
import AlternateIdBase = require("../../Misc/IdConversion/AlternateIdBase");
import ExchangeService = require("../ExchangeService");
import ConvertIdResponse = require("../Responses/ConvertIdResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class ConvertIdRequest extends MultiResponseServiceRequest<ConvertIdResponse> {//IJsonSerializable
    DestinationFormat: IdFormat;
    Ids: AlternateIdBase[];//System.Collections.Generic.List<AlternateIdBase>;
    private destinationFormat: IdFormat;
    private ids: AlternateIdBase[];//System.Collections.Generic.List<AlternateIdBase>;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ConvertIdResponse { throw new Error("Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = ConvertIdRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
