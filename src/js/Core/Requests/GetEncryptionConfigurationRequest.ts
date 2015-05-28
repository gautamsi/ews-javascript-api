import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import GetEncryptionConfigurationResponse = require("../Responses/GetEncryptionConfigurationResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class GetEncryptionConfigurationRequest extends SimpleServiceRequestBase {
    Execute(): GetEncryptionConfigurationResponse { throw new Error("GetEncryptionConfigurationRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetEncryptionConfigurationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetEncryptionConfigurationRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetEncryptionConfigurationRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetEncryptionConfigurationRequest.ts - ParseResponse : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetEncryptionConfigurationRequest.ts - WriteElementsToXml : Not implemented."); }
}

export = GetEncryptionConfigurationRequest;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
