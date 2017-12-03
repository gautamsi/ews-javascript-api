import { Attachment } from "../../ComplexProperties/Attachment";
import { ExchangeService } from "../ExchangeService";
import { XmlAttributeNames } from "../XmlAttributeNames";
import { XmlElementNames } from "../XmlElementNames";


import { ServiceResponse } from "./ServiceResponse";
import { EwsLogging } from "../EwsLogging";
import { StringHelper } from "../../ExtensionMethods";
/**
 * Represents the response to an individual attachment deletion operation.
 * @sealed
 */
export class DeleteAttachmentResponse extends ServiceResponse {

    private attachment: Attachment = null;

    /**
     * Gets the attachment that was deleted.
     */
    get Attachment(): Attachment {
        return this.attachment;
    }

    /**
     * Initializes a new instance of the **DeleteAttachmentResponse** class.
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
        if (responseObject[XmlElementNames.RootItemId]) {
            let jsRootItemId = responseObject[XmlElementNames.RootItemId];
            let changeKey;

            if (jsRootItemId[XmlAttributeNames.RootItemChangeKey] &&
                !StringHelper.IsNullOrEmpty(changeKey = jsRootItemId[XmlAttributeNames.RootItemChangeKey]) &&
                this.attachment.Owner != null) {
                this.attachment.Owner.RootItemId.ChangeKey = changeKey;
            }
        }
    }
}
