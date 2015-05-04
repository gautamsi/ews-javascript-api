import ServiceResponse = require("../Responses/ServiceResponse");
import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import DeleteMode = require("../../Enumerations/DeleteMode");
import JsonObject = require("../JsonObject");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class DeleteRequest<TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {//IJsonSerializable
    DeleteMode: DeleteMode;
    private deleteMode: DeleteMode;
    InternalToJson(body: JsonObject): any { throw new Error("Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = DeleteRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

