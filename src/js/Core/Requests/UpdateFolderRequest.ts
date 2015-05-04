import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import Folder = require("../ServiceObjects/Folders/Folder");
import ExchangeService = require("../ExchangeService");
import ServiceResponse = require("../Responses/ServiceResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class UpdateFolderRequest extends MultiResponseServiceRequest<ServiceResponse> {
    Folders: Folder[];//System.Collections.Generic.List<Folder>;
    private folders: Folder[];//System.Collections.Generic.List<Folder>;
    CreateServiceResponse(session: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export =UpdateFolderRequest;



    //module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
