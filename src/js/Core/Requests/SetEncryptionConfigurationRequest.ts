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
    Execute(): ServiceResponse { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}

export = SetEncryptionConfigurationRequest;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
