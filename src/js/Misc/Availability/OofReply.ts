import ExchangeService = require("../../Core/ExchangeService");
import JsonObject = require("../../Core/JsonObject");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
class OofReply {
    Culture: string;
    Message: string;
    private culture: string;
    private message: string;
    InternalToJson(service: ExchangeService): JsonObject { throw new Error("Not implemented."); }
    LoadFromJson(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): any { throw new Error("Not implemented."); }
    ToString(): string { throw new Error("Not implemented."); }
    WriteEmptyReplyToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("Not implemented."); }
}
export = OofReply;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
