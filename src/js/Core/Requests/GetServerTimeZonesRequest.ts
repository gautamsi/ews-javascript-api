import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import ExchangeService = require("../ExchangeService");
import GetServerTimeZonesResponse = require("../Responses/GetServerTimeZonesResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class GetServerTimeZonesRequest extends MultiResponseServiceRequest<GetServerTimeZonesResponse> {
    Ids: string[];//System.Collections.Generic.IEnumerable<string>;
    private ids: string[];//System.Collections.Generic.IEnumerable<string>;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetServerTimeZonesResponse { throw new Error("GetServerTimeZonesRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("GetServerTimeZonesRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetServerTimeZonesRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("GetServerTimeZonesRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetServerTimeZonesRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetServerTimeZonesRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("GetServerTimeZonesRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetServerTimeZonesRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = GetServerTimeZonesRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
