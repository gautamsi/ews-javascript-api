import {Attachment} from "../../ComplexProperties/Attachment";
import {FileAttachment} from "../../ComplexProperties/FileAttachment";
import {ItemAttachment} from "../../ComplexProperties/ItemAttachment";
import {ExchangeService} from "../ExchangeService";
import {StringHelper, ArrayHelper} from "../../ExtensionMethods";
import {XmlElementNames} from "../XmlElementNames";

import {ServiceResponse} from "./ServiceResponse";
/**
 * Represents the response to an individual attachment retrieval request.
 */
export class GetAttachmentResponse extends ServiceResponse {
    private attachment: Attachment = null;
    get Attachment(): Attachment {
        return this.attachment;
    }

    /**
     * @internal Initializes a new instance of the  class.
     *
     * @param   {Attachment}   attachment   The attachment.
     */
    constructor(attachment: Attachment) {
        super();
        this.attachment = attachment;
    }

    /**
     * @internal Reads response elements from XMLJsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service          The service.
     */
    ReadElementsFromXmlJsObject(jsObject: any, service: ExchangeService): void {

        if (jsObject[XmlElementNames.Attachments]) {
            let attachmentContainer = jsObject[XmlElementNames.Attachments];
            let attachment = attachmentContainer[XmlElementNames.FileAttachment] || attachmentContainer[XmlElementNames.ItemAttachment] || attachmentContainer;
            if (this.attachment == null) {
                if (attachmentContainer[XmlElementNames.FileAttachment]) {
                    this.attachment = new FileAttachment(service);
                }
                else if (attachmentContainer[XmlElementNames.ItemAttachment]) {
                    this.attachment = <any><any>new ItemAttachment(service);
                }
            }

            if (this.attachment != null) {
                this.attachment.LoadFromXmlJsObject(attachment, service);
            }
        }
    }
}