import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {EwsUtilities} from "../EwsUtilities";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
/**
 * @internal Represents an Unsubscribe request.
 */
export class UnsubscribeRequest extends MultiResponseServiceRequest<ServiceResponse> {

	/**
	 * Gets or sets the subscription id.
	 */
	SubscriptionId: string;

	/**
	 * @internal Initializes a new instance of the **UnsubscribeRequest** class.
	 *
	 * @param   {ExchangeService}   service   The service.
	 */
	constructor(service: ExchangeService) {
		super(service, ServiceErrorHandling.ThrowOnError);
	}

	/**
	 * @internal Creates service response.
	 *
	 * @param   {ExchangeService}   service         The service.
	 * @param   {number}   			responseIndex   Index of the response.
	 * @return  {ServiceResponse}	Service response.
	 */
	CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { return new ServiceResponse(); }

	/**
	 * @internal Gets the expected response message count.
	 *
	 * @return  {number}      Number of expected response messages.
	 */
	GetExpectedResponseMessageCount(): number { return 1; }

	/**
	 * @internal Gets the request version.
	 *
	 * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
	 */
	GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }

	/**
	 * @internal Gets the name of the response message XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
	GetResponseMessageXmlElementName(): string { return XmlElementNames.UnsubscribeResponseMessage; }

	/**
	 * @internal Gets the name of the response XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
	GetResponseXmlElementName(): string { return XmlElementNames.UnsubscribeResponse; }

	/**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
	GetXmlElementName(): string { return XmlElementNames.Unsubscribe; }

	/**
	 * @internal Validate the request.
	 */
	Validate(): void {
		super.Validate();
		EwsUtilities.ValidateNonBlankStringParam(this.SubscriptionId, "SubscriptionId");
	}

	/**
	 * @internal Writes XML elements.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
	WriteElementsToXml(writer: EwsServiceXmlWriter): void {
		writer.WriteElementValue(
			XmlNamespace.Messages,
			XmlElementNames.SubscriptionId,
			this.SubscriptionId);
	}
}