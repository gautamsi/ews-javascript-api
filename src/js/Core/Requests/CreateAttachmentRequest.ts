import { ArrayHelper } from "../../ExtensionMethods";
import { Attachment } from "../../ComplexProperties/Attachment";
import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { EwsUtilities } from "../EwsUtilities";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { ItemAttachment } from "../../ComplexProperties/ItemAttachment";
import { ServiceErrorHandling } from "../../Enumerations/ServiceErrorHandling";
import { XmlAttributeNames } from "../XmlAttributeNames";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { CreateAttachmentResponse } from "../Responses/CreateAttachmentResponse";
import { MultiResponseServiceRequest } from "./MultiResponseServiceRequest";
/**
 * @internal Represents a CreateAttachment request.
 * @sealed
 */
export class CreateAttachmentRequest extends MultiResponseServiceRequest<CreateAttachmentResponse> { //IJsonSerializable

    private parentItemId: string = null;
    private attachments: Attachment[] = [];

    /**
     * @internal Gets a value indicating whether the TimeZoneContext SOAP header should be emitted.
     */
    get EmitTimeZoneHeader(): boolean {
        for (let itemAttachment of ArrayHelper.OfType<Attachment, ItemAttachment>(this.attachments, (item) => item instanceof ItemAttachment)) {
            if ((itemAttachment.Item != null) && itemAttachment.Item.GetIsTimeZoneHeaderRequired(false /* isUpdateOperation */)) {
                return true;
            }
        }
        return false;
    }

    /**
     * Gets the attachments.
     */
    get Attachments(): Attachment[] {
        return this.attachments;
    }
    set ParentItemId(value: string) {
        this.parentItemId = value;
    }

    /**
     * Gets or sets the parent item id.
     * @value   The parent item id.
     */
    get ParentItemId(): string {
        return this.parentItemId;
    }

    /**
     * @internal Initializes a new instance of the **CreateAttachmentRequest** class.
     *
     * @param   {ExchangeService}       service             The service.
     * @param   {ServiceErrorHandling}  errorHandlingMode   Indicates how errors should be handled.
     */
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }

    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}            responseIndex   Index of the response.
     * @return  {CreateAttachmentResponse}     Service response.
     */
    CreateServiceResponse(service: ExchangeService, responseIndex: number): CreateAttachmentResponse {
        return new CreateAttachmentResponse(this.Attachments[responseIndex]);
    }

    /**
	 * @internal Gets the expected response message count.
	 *
	 * @return  {number}      Number of expected response messages.
	 */
    GetExpectedResponseMessageCount(): number {
        return this.Attachments.length;
    }

    /**
	 * @internal Gets the request version.
	 *
	 * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
	 */
    GetMinimumRequiredServerVersion(): ExchangeVersion {
        return ExchangeVersion.Exchange2007_SP1;
    }

    /**
	 * @internal Gets the name of the response message XML element.
	 *
	 * @return  {string}      XML element name,
	 */
    GetResponseMessageXmlElementName(): string {
        return XmlElementNames.CreateAttachmentResponseMessage;
    }

    /**
	 * @internal Gets the name of the response XML element.
	 *
	 * @return  {string}      XML element name,
	 */
    GetResponseXmlElementName(): string {
        return XmlElementNames.CreateAttachmentResponse;
    }

    /**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      XML element name,
	 */
    GetXmlElementName(): string {
        return XmlElementNames.CreateAttachment;
    }

    /**
     * @internal Validate request.
     */
    Validate(): void {
        super.Validate();
        EwsUtilities.ValidateParam(this.ParentItemId, "ParentItemId");
    }

    /**
	 * @internal Writes the elements to XML writer.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.ParentItemId);
        writer.WriteAttributeValue(XmlAttributeNames.Id, this.ParentItemId);
        writer.WriteEndElement();

        writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.Attachments);
        for (let attachment of this.Attachments) {
            attachment.WriteToXml(writer, attachment.GetXmlElementName());
        }
        writer.WriteEndElement();
    }
}
