import ConversationId = require("./ConversationId");
import ComplexProperty = require("./ComplexProperty");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class ConversationRequest extends ComplexProperty {//ISelfValidate, IJsonSerializable
    ConversationId: ConversationId;
    SyncState: string;
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    InternalValidate(): any { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("Not implemented."); }
}
export = ConversationRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
