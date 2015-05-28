import ExchangeService = require("../../Core/ExchangeService");
import JsonObject = require("../../Core/JsonObject");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
class OofReply {
    Culture: string;
    Message: string;
    private culture: string;
    private message: string;
    InternalToJson(service: ExchangeService): JsonObject { throw new Error("OofReply.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("OofReply.ts - LoadFromJson : Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): any { throw new Error("OofReply.ts - LoadFromXml : Not implemented."); }
    ToString(): string { throw new Error("OofReply.ts - ToString : Not implemented."); }
    WriteEmptyReplyToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("OofReply.ts - WriteEmptyReplyToXml : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("OofReply.ts - WriteToXml : Not implemented."); }
}
export = OofReply;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
