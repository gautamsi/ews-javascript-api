import StringList = require("../../ComplexProperties/StringList");
import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import GetClientExtensionResponse = require("../Responses/GetClientExtensionResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class GetClientExtensionRequest extends SimpleServiceRequestBase {
    private requestedExtensionIds: StringList;
    private shouldReturnEnabledOnly: boolean;
    private isUserScope: boolean;
    private userId: string;
    private userEnabledExtensionIds: StringList;
    private userDisabledExtensionIds: StringList;
    private isDebug: boolean;
    Execute(): GetClientExtensionResponse { throw new Error("GetClientExtensionRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetClientExtensionRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetClientExtensionRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetClientExtensionRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetClientExtensionRequest.ts - ParseResponse : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetClientExtensionRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = GetClientExtensionRequest;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
