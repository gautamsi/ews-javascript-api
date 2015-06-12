import {ServiceResponse} from "./ServiceResponse";
import {Attachment} from "../../ComplexProperties/Attachment";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class DeleteAttachmentResponse extends ServiceResponse {
    Attachment: Attachment;
    private attachment: Attachment;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("DeleteAttachmentResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("DeleteAttachmentResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}


//}





