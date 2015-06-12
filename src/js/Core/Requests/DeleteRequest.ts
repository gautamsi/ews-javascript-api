import {ServiceResponse} from "../Responses/ServiceResponse";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {DeleteMode} from "../../Enumerations/DeleteMode";
import {JsonObject} from "../JsonObject";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class DeleteRequest<TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {//IJsonSerializable
    DeleteMode: DeleteMode;
    private deleteMode: DeleteMode;
    InternalToJson(body: JsonObject): any { throw new Error("DeleteRequest.ts - InternalToJson : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("DeleteRequest.ts - WriteAttributesToXml : Not implemented."); }
}


//}




