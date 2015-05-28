import ServiceResponse = require("./ServiceResponse");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class GetEncryptionConfigurationResponse extends ServiceResponse {
    ImageBase64: string;
    EmailText: string;
    PortalText: string;
    DisclaimerText: string;
    private imageBase64: string;
    private emailText: string;
    private portalText: string;
    private disclaimerText: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetEncryptionConfigurationResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}

export=GetEncryptionConfigurationResponse;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
