import {ArgumentException} from "../../Exceptions/ArgumentException";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {StringHelper} from "../../ExtensionMethods";
import {Strings} from "../../Strings";
import {SubscribeResponse} from "../Responses/SubscribeResponse";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {PullSubscription} from "../../Notifications/PullSubscription";
import {SubscribeRequest} from "./SubscribeRequest";
/**
 * @internal Represents a "pull" Subscribe request.
 */
export class SubscribeToPullNotificationsRequest extends SubscribeRequest<PullSubscription> {

	private timeout: number = 30;

	/**
	 * Gets or sets the timeout.
	 * 
	 * @value	The timeout.
	 */
	get Timeout(): number {
		return this.timeout;
	}
	set Timeout(value: number) {
		this.timeout = value;
	}

	/**
	 * @internal Initializes a new instance of the **SubscribeToPullNotificationsRequest** class.
	 *
	 * @param   {ExchangeService}   service   The service.
	 */
	constructor(service: ExchangeService) {
		super(service);
	}

	/**
	 * @internal Creates the service response.
	 *
	 * @param   {ExchangeService}   service         The service.
	 * @param   {number}   			responseIndex   Index of the response.
	 * @return  {SubscribeResponse<PullSubscription>}		Service response.
	 */
	CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<PullSubscription> {
		return new SubscribeResponse<PullSubscription>(new PullSubscription(service));
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
	 * @internal Gets the name of the subscription XML element.
	 *
	 * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
	 */
	GetSubscriptionXmlElementName(): string {
		return XmlElementNames.PullSubscriptionRequest;
	}

	/**
	 * @internal Internal method to write XML elements.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
	InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void {
		writer.WriteElementValue(
			XmlNamespace.Types,
			XmlElementNames.Timeout,
			this.Timeout);
	}

	/**
	 * @internal Validate request.
	 */
	Validate(): void {
		super.Validate();
		if ((this.Timeout < 1) || (this.Timeout > 1440)) {
			throw new ArgumentException(StringHelper.Format(Strings.InvalidTimeoutValue, this.Timeout));
		}
	}
}