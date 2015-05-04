import ServiceResponse = require("./ServiceResponse");
import Attachment = require("../../ComplexProperties/Attachment");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class GetAttachmentResponse extends ServiceResponse {
    Attachment: Attachment;
    private attachment: Attachment;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = GetAttachmentResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
