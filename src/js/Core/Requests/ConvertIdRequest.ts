import {AlternateIdBase} from "../../Misc/IdConversion/AlternateIdBase";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {EwsUtilities} from "../EwsUtilities";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {IdFormat} from "../../Enumerations/IdFormat";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {XmlAttributeNames} from "../XmlAttributeNames";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {ConvertIdResponse} from "../Responses/ConvertIdResponse";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
/**
 * @internal Represents a ConvertId request.
 * 
 * @sealed
 */
export class ConvertIdRequest extends MultiResponseServiceRequest<ConvertIdResponse> {//IJsonSerializable

    private destinationFormat: IdFormat = IdFormat.EwsId;
    private ids: AlternateIdBase[] = [];

    /**
     * Gets or sets the destination format.
     * 
     * @value   The destination format.
     */
    get DestinationFormat(): IdFormat {
        return this.destinationFormat;
    }
    set DestinationFormat(value: IdFormat) {
        this.destinationFormat = value;
    }

    /**
     * Gets the ids.
     * 
     * @value   The ids.
     */
    get Ids(): AlternateIdBase[] {
        return this.ids;
    }

    /**
     * @internal Initializes a new instance of the  class.
     *
     * @param   {ExchangeService}   service             The service.
     * @param   {ServiceErrorHandling}   errorHandlingMode   Indicates how errors should be handled.
     */
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }

    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}            responseIndex   Index of the response.
     * @return  {ConvertIdResponse}     Service response.
     */
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ConvertIdResponse {
        return new ConvertIdResponse();
    }

    /**
	 * @internal Gets the expected response message count.
	 *
	 * @return  {number}      Number of expected response messages.
	 */
    GetExpectedResponseMessageCount(): number {
        return this.Ids.length;
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
        return XmlElementNames.ConvertIdResponseMessage;
    }

    /**
	 * @internal Gets the name of the response XML element.
	 *
	 * @return  {string}      XML element name,
	 */
    GetResponseXmlElementName(): string {
        return XmlElementNames.ConvertIdResponse;
    }

    /**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      XML element name,
	 */
    GetXmlElementName(): string {
        return XmlElementNames.ConvertId;
    }

    /**
     * @internal Validate request.
     */
    Validate(): void {
        super.Validate();
        EwsUtilities.ValidateParamCollection(this.Ids, "Ids");
    }

    /**
	 * @internal Writes the elements to XML writer.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(XmlAttributeNames.DestinationFormat, IdFormat[this.DestinationFormat]);

        writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.SourceIds);

        for (let alternateId of this.Ids) {
            alternateId.WriteToXml(writer);
        }

        writer.WriteEndElement(); // SourceIds
    }
}