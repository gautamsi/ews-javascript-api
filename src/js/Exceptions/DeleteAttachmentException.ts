import {DeleteAttachmentResponse} from "../Core/Responses/DeleteAttachmentResponse";
import {Exception} from "./Exception";
import {BatchServiceResponseException} from "./BatchServiceResponseException";
export class DeleteAttachmentException extends BatchServiceResponseException<DeleteAttachmentResponse> {
}