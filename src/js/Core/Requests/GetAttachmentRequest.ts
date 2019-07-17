import { ArgumentException } from "../../Exceptions/ArgumentException";
import { Attachment } from "../../ComplexProperties/Attachment";
import { BodyType } from "../../Enumerations/BodyType";
import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { EwsUtilities } from "../EwsUtilities";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { PropertyDefinitionBase } from "../../PropertyDefinitions/PropertyDefinitionBase";
import { PropertySet } from "../PropertySet";
import { Schemas } from "../ServiceObjects/Schemas/Schemas";
import { ServiceErrorHandling } from "../../Enumerations/ServiceErrorHandling";
import { StringHelper, hasValue } from "../../ExtensionMethods";
import { Strings } from "../../Strings";
import { XmlAttributeNames } from "../XmlAttributeNames";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { GetAttachmentResponse } from "../Responses/GetAttachmentResponse";
import { MultiResponseServiceRequest } from "./MultiResponseServiceRequest";
/**
 * @internal Represents a GetAttachment request. 
 */
export class GetAttachmentRequest extends MultiResponseServiceRequest<GetAttachmentResponse> { //IJsonSerializable
    private attachments: Attachment[] = [];
    private attachmentIds: string[] = [];
    private additionalProperties: PropertyDefinitionBase[] = [];
    private bodyType: BodyType = null;

    /**
     * Gets the attachments.
     * 
     * @value The attachments.
     */
    get Attachments(): Attachment[] {
        return this.attachments;
    }

    /**
     * Gets the attachment ids.
     * 
     * @value The attachment ids.
     */
    get AttachmentIds(): string[] {
        return this.attachmentIds;
    }

    /**
     * Gets the additional properties.
     * 
     * @value The additional properties.
     */
    get AdditionalProperties(): PropertyDefinitionBase[] {
        return this.additionalProperties;
    }

    /**
     * Gets or sets the type of the body.
     * 
     * @value The type of the body.
     */
    get BodyType(): BodyType {
        return this.bodyType;
    }
    set BodyType(value: BodyType) {
        this.bodyType = value;
    }

    /**
     * @internal Gets a value indicating whether the TimeZoneContext SOAP header should be emitted.
     * 
     * @value *true* if the time zone should be emitted; otherwise, *false*.
     */
    get EmitTimeZoneHeader(): boolean {
        return this.additionalProperties.indexOf(Schemas.ItemSchema.MimeContent) >= 0;
    }

    /**
     * @internal Initializes a new instance of the **GetAttachmentRequest** class.
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
     * @return  {GetAttachmentResponse}             Service response.
     */
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetAttachmentResponse {
        return new GetAttachmentResponse(this.Attachments.length > 0 ? this.Attachments[responseIndex] : null);
    }

    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of expected response messages.
     */
    GetExpectedResponseMessageCount(): number { return this.Attachments.length + this.AttachmentIds.length; }

    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }

    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      XML element name,
     */
    GetResponseMessageXmlElementName(): string { return XmlElementNames.GetAttachmentResponseMessage; }

    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    GetResponseXmlElementName(): string { return XmlElementNames.GetAttachmentResponse; }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    GetXmlElementName(): string { return XmlElementNames.GetAttachment; }

    /**
     * @internal Validate request.
     */
    Validate(): void {
        super.Validate();
        if (this.Attachments.length > 0) {
            EwsUtilities.ValidateParamCollection(this.Attachments, "Attachments");
        }

        if (this.AttachmentIds.length > 0) {
            EwsUtilities.ValidateParamCollection(this.AttachmentIds, "AttachmentIds");
        }

        if (this.AttachmentIds.length == 0 && this.Attachments.length == 0) {
            throw new ArgumentException(Strings.CollectionIsEmpty, "Attachments/AttachmentIds");
        }
        for (let i = 0; i < this.AdditionalProperties.length; i++) {
            EwsUtilities.ValidateParam(this.AdditionalProperties[i], StringHelper.Format("AdditionalProperties[{0}]", i));
        }
    }

    /**
     * @internal Writes attachment id elements.
     *
     * @param   {EwsServiceXmlWriter}   writer         The writer.
     * @param   {string}                attachmentId   The attachment id.
     */
    WriteAttachmentIdXml(writer: EwsServiceXmlWriter, attachmentId: string): void {
        writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.AttachmentId);
        writer.WriteAttributeValue(XmlAttributeNames.Id, attachmentId);
        writer.WriteEndElement();
    }

    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        if (this.BodyType || this.AdditionalProperties.length > 0) {
            writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.AttachmentShape);

            if (hasValue(this.BodyType)) {
                writer.WriteElementValue(
                    XmlNamespace.Types,
                    XmlElementNames.BodyType,
                    BodyType[this.BodyType]);
            }

            if (this.AdditionalProperties.length > 0) {
                PropertySet.WriteAdditionalPropertiesToXml(writer, this.AdditionalProperties);
            }

            writer.WriteEndElement(); // AttachmentShape
        }

        writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.AttachmentIds);

        for (let attachment of this.Attachments) {
            this.WriteAttachmentIdXml(writer, attachment.Id);
        }

        for (let attachmentId of this.AttachmentIds) {
            this.WriteAttachmentIdXml(writer, attachmentId);
        }

        writer.WriteEndElement();
    }
}