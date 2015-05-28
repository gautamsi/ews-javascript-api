import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import ServiceResponse = require("../Responses/ServiceResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class SetEncryptionConfigurationRequest extends SimpleServiceRequestBase {
    ImageBase64: string;
    EmailText: string;
    PortalText: string;
    DisclaimerText: string;
    private imageBase64: string;
    private emailText: string;
    private portalText: string;
    private disclaimerText: string;
    Execute(): ServiceResponse { throw new Error("SetEncryptionConfigurationRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("SetEncryptionConfigurationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("SetEncryptionConfigurationRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("SetEncryptionConfigurationRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("SetEncryptionConfigurationRequest.ts - ParseResponse : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("SetEncryptionConfigurationRequest.ts - WriteElementsToXml : Not implemented."); }
}

export = SetEncryptionConfigurationRequest;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
