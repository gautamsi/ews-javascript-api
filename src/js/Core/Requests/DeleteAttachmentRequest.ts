import { Attachment } from "../../ComplexProperties/Attachment";
import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { EwsUtilities } from "../EwsUtilities";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { ServiceErrorHandling } from "../../Enumerations/ServiceErrorHandling";
import { StringHelper } from "../../ExtensionMethods";
import { XmlAttributeNames } from "../XmlAttributeNames";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { DeleteAttachmentResponse } from "../Responses/DeleteAttachmentResponse";
import { MultiResponseServiceRequest } from "./MultiResponseServiceRequest";
/**
 * Represents a DeleteAttachment request.
 * @sealed
 */
export class DeleteAttachmentRequest extends MultiResponseServiceRequest<DeleteAttachmentResponse> {//IJsonSerializable

    private attachments: Attachment[];

    /**
     * Gets the attachments.
     * @value   The attachments.
     */
    get Attachments(): Attachment[] {
        return this.attachments;
    }

    /**
     * @internal Initializes a new instance of the **DeleteAttachmentRequest** class.
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
     * @return  {DeleteAttachmentResponse}     Service response.
     */
    CreateServiceResponse(service: ExchangeService, responseIndex: number): DeleteAttachmentResponse {
        return new DeleteAttachmentResponse(this.Attachments[responseIndex]);
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
        return XmlElementNames.DeleteAttachmentResponseMessage;
    }

    /**
	 * @internal Gets the name of the response XML element.
	 *
	 * @return  {string}      XML element name,
	 */
    GetResponseXmlElementName(): string {
        return XmlElementNames.DeleteAttachmentResponse;
    }

    /**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      XML element name,
	 */
    GetXmlElementName(): string {
        return XmlElementNames.DeleteAttachment;
    }

    /**
     * @internal Validate request.
     */
    Validate(): void {
        super.Validate();
        EwsUtilities.ValidateParamCollection(this.Attachments, "Attachments");
        for (let i = 0; i < this.Attachments.length; i++) {
            EwsUtilities.ValidateParam(this.Attachments[i].Id, StringHelper.Format("Attachment[{0}].Id", i));
        }
    }

    /**
	 * @internal Writes the elements to XML writer.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.AttachmentIds);

        for (let attachment of this.Attachments) {
            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.AttachmentId);
            writer.WriteAttributeValue(XmlAttributeNames.Id, attachment.Id);
            writer.WriteEndElement();
        }

        writer.WriteEndElement();
    }
}