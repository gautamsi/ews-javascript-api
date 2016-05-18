import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {EwsUtilities} from "../EwsUtilities";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {GetEventsResponse} from "../Responses/GetEventsResponse";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
/**
 * @internal GetEvents request
 */
export class GetEventsRequest extends MultiResponseServiceRequest<GetEventsResponse> {

	private subscriptionId: string = null;
	private watermark: string = null;

	/**
	 * Gets or sets the subscription id.
	 * 
	 * @value	The subscription id.
	 */
	get SubscriptionId(): string {
		return this.subscriptionId;
	}
	set SubscriptionId(value: string) {
		this.subscriptionId = value;
	}

	/**
	 * Gets or sets the watermark.
	 * 
	 * @value	The watermark.
	 */
	get Watermark(): string {
		return this.watermark;
	}
	set Watermark(value: string) {
		this.watermark = value;
	}

	/**
	 * @internal Initializes a new instance of the **GetEventsRequest** class.
	 *
	 * @param   {ExchangeService}   service   The service.
	 */
	constructor(service: ExchangeService) {
		super(service, ServiceErrorHandling.ThrowOnError);
	}

	/**
	 * @internal Creates the service response.
	 *
	 * @param   {ExchangeService}   service         The service.
	 * @param   {number}   			responseIndex   Index of the response.
	 * @return  {GetEventsResponse}		Service response.
	 */
	CreateServiceResponse(service: ExchangeService, responseIndex: number): GetEventsResponse {
		return new GetEventsResponse();
	}

	/**
	 * @internal Gets the expected response message count.
	 *
	 * @return  {number}      Number of expected response messages.
	 */
	GetExpectedResponseMessageCount(): number {
		return 1;
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
		return XmlElementNames.GetEventsResponseMessage;
	}

	/**
	 * @internal Gets the name of the response XML element.
	 *
	 * @return  {string}      XML element name.
	 */
	GetResponseXmlElementName(): string {
		return XmlElementNames.GetEventsResponse;
	}

	/**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      XML element name.
	 */
	GetXmlElementName(): string {
		return XmlElementNames.GetEvents;
	}

	/**
	 * @internal Validate request.
	 */
	Validate(): void {
		super.Validate();
		EwsUtilities.ValidateNonBlankStringParam(this.SubscriptionId, "SubscriptionId");
		EwsUtilities.ValidateNonBlankStringParam(this.Watermark, "Watermark");
	}

	/**
	 * @internal Writes the elements to XML writer.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
	WriteElementsToXml(writer: EwsServiceXmlWriter): void {
		writer.WriteElementValue(
			XmlNamespace.Messages,
			XmlElementNames.SubscriptionId,
			this.SubscriptionId);

		writer.WriteElementValue(
			XmlNamespace.Messages,
			XmlElementNames.Watermark,
			this.Watermark);
	}
}