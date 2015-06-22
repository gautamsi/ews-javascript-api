import {CreateAttachmentResponse} from "../Core/Responses/CreateAttachmentResponse";
import {Exception} from "./Exception";
import {BatchServiceResponseException} from "./BatchServiceResponseException";
export class CreateAttachmentException extends BatchServiceResponseException<CreateAttachmentResponse> {
}