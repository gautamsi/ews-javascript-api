import { Attachment } from "../../ComplexProperties/Attachment";
import { ExchangeService } from "../ExchangeService";
import { EwsServiceJsonReader } from "../EwsServiceJsonReader";
import { EwsLogging } from "../EwsLogging";

import { ServiceResponse } from "./ServiceResponse";
import { XmlElementNames } from "../XmlElementNames";
/**
 * Represents the response to an individual attachment creation operation.
 * @sealed
 */
export class CreateAttachmentResponse extends ServiceResponse {

    private attachment: Attachment = null;

    /**
     * Gets the attachment that was created.
     */
    get Attachment(): Attachment {
        return this.attachment;
    }

    /**
     * Initializes a new instance of the **CreateAttachmentResponse** class.
     *
     * @param   {Attachment}   attachment   The attachment.
     */
    constructor(attachment: Attachment) {
        super();
        EwsLogging.Assert(
            attachment != null,
            "CreateAttachmentResponse.ctor",
            "attachment is null");

        this.attachment = attachment;
    }

    /**
      * @internal Reads response elements from Xml JsObject.
      *
      * @param   {any}               jsObject   The response object.
      * @param   {ExchangeService}   service    The service.
      */
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        let attachmentArray: any[] = EwsServiceJsonReader.ReadAsArray(responseObject, XmlElementNames.Attachments);

        if (attachmentArray != null && attachmentArray.length > 0) {
            let attachmenTypetArray = EwsServiceJsonReader.ReadAsArray(attachmentArray[0], XmlElementNames.ItemAttachment);
            if (attachmenTypetArray.length > 0) {
                this.attachment.LoadFromXmlJsObject(attachmenTypetArray[0], service);
                return;
            }

            attachmenTypetArray = EwsServiceJsonReader.ReadAsArray(attachmentArray[0], XmlElementNames.FileAttachment);
            if (attachmenTypetArray.length > 0) {
                this.attachment.LoadFromXmlJsObject(attachmenTypetArray[0], service);
            }
        }
    }
}
