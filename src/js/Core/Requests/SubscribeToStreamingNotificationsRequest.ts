import {ArgumentException} from "../../Exceptions/ArgumentException";
import {ArrayHelper, StringHelper} from "../../ExtensionMethods";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {SubscribeResponse} from "../Responses/SubscribeResponse";
import {XmlElementNames} from "../XmlElementNames";

import {StreamingSubscription} from "../../Notifications/StreamingSubscription";
import {SubscribeRequest} from "./SubscribeRequest";
/**
 * @internal Represents a *Streaming* Subscribe request.
 */
export class SubscribeToStreamingNotificationsRequest extends SubscribeRequest<StreamingSubscription> {

	/**
	 * @internal Initializes a new instance of the **SubscribeToStreamingNotificationsRequest** class.
	 *
	 * @param   {ExchangeService}   service   The service.
	 */
	constructor(service: ExchangeService) {
		super(service);
	}

	/**
	 * @internal Creates service response.
	 *
	 * @param   {ExchangeService}   service         The service.
	 * @param   {number}   			responseIndex   Index of the response.
	 * @return  {SubscribeResponse<StreamingSubscription>}	Service response.
	 */
	CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<StreamingSubscription> {
		return new SubscribeResponse<StreamingSubscription>(new StreamingSubscription(service));
	}

	/**
	 * @internal Gets the request version.
	 *
	 * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
	 */
	GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2010_SP1; }

	/**
	 * @internal Gets the name of the subscription XML element.
	 *
	 * @return  {string}      XML element name,
	 */
	GetSubscriptionXmlElementName(): string { return XmlElementNames.StreamingSubscriptionRequest; }

	/**
	 * @internal Internal method to write XML elements.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
	InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void {
	}

	/**
	 * @internal Validate request.
	 */
	Validate(): void {
		super.Validate();

		if (!StringHelper.IsNullOrEmpty(this.Watermark)) {
			throw new ArgumentException("Watermarks cannot be used with StreamingSubscriptions.", "Watermark");
		}
	}
}