import {ServiceObject} from "../ServiceObjects/ServiceObject";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {FolderId} from "../../ComplexProperties/FolderId";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class MoveCopyRequest<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {//IJsonSerializable
    DestinationFolderId: FolderId;
    private destinationFolderId: FolderId;
    AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("MoveCopyRequest.ts - AddIdsToJson : Not implemented."); }
    Validate(): any { throw new Error("MoveCopyRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("MoveCopyRequest.ts - WriteElementsToXml : Not implemented."); }
    WriteIdsToXml(writer: EwsServiceXmlWriter): any { throw new Error("MoveCopyRequest.ts - WriteIdsToXml : Not implemented."); }
}


//}



