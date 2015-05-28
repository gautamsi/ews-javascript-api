import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import GetDiscoverySearchConfigurationResponse = require("../Responses/GetDiscoverySearchConfigurationResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class GetDiscoverySearchConfigurationRequest extends SimpleServiceRequestBase {
    SearchId: string;
    ExpandGroupMembership: boolean;
    InPlaceHoldConfigurationOnly: boolean;
    Execute(): GetDiscoverySearchConfigurationResponse { throw new Error("GetDiscoverySearchConfigurationRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetDiscoverySearchConfigurationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetDiscoverySearchConfigurationRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetDiscoverySearchConfigurationRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetDiscoverySearchConfigurationRequest.ts - ParseResponse : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetDiscoverySearchConfigurationRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = GetDiscoverySearchConfigurationRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
