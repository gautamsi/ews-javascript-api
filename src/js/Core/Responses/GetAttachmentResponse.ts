import {ServiceResponse} from "./ServiceResponse";
import {Attachment} from "../../ComplexProperties/Attachment";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class GetAttachmentResponse extends ServiceResponse {
    Attachment: Attachment;
    private attachment: Attachment;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("GetAttachmentResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetAttachmentResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}


//}



