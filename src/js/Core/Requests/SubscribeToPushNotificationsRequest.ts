import {ArgumentException} from "../../Exceptions/ArgumentException";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {EwsUtilities} from "../EwsUtilities";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {StringHelper} from "../../ExtensionMethods";
import {Strings} from "../../Strings";
import {SubscribeResponse} from "../Responses/SubscribeResponse";
import {Uri} from "../../Uri";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {PushSubscription} from "../../Notifications/PushSubscription";
import {SubscribeRequest} from "./SubscribeRequest";
/**
 * @internal Represents a "push" Subscribe request.
 */
export class SubscribeToPushNotificationsRequest extends SubscribeRequest<PushSubscription> {

	private frequency: number = 30;
	private url: Uri = null;
	private callerData: string = null;

	/**
	 * Gets or sets the frequency.
	 * 
	 * @value	The frequency.
	 */
	get Frequency(): number {
		return this.frequency;
	}
	set Frequency(value: number) {
		this.frequency = value;
	}

	/**
	 * Gets or sets the URL.
	 * 
	 * @value	The URL.
	 */
	get Url(): Uri {
		return this.url;
	}
	set Url(value: Uri) {
		this.url = value;
	}

	/**
	 * Gets or sets the CallerData.
	 * 
	 * @value	The CallerData.
	 */
	get CallerData(): string {
		return this.callerData;
	}
	set CallerData(value: string) {
		this.callerData = value;
	}

	/**
	 * @internal Initializes a new instance of the **SubscribeToPushNotificationsRequest** class.
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
	 * @return  {SubscribeResponse<PushSubscription>}		Service response.
	 */
	CreateServiceResponse(service: ExchangeService, responseIndex: number): SubscribeResponse<PushSubscription> {
		return new SubscribeResponse<PushSubscription>(new PushSubscription(service));
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
		return XmlElementNames.PushSubscriptionRequest;
	}

	/**
	 * @internal Internal method to write XML elements.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
	InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void {
		writer.WriteElementValue(
			XmlNamespace.Types,
			XmlElementNames.StatusFrequency,
			this.Frequency);

		writer.WriteElementValue(
			XmlNamespace.Types,
			XmlElementNames.URL,
			this.Url.ToString());

		if (this.Service.RequestedServerVersion >= ExchangeVersion.Exchange2013
			&& !StringHelper.IsNullOrEmpty(this.callerData)) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.CallerData,
				this.CallerData);
		}
	}

	/**
	 * @internal Validate request.
	 */
	Validate(): void {
		super.Validate();
		EwsUtilities.ValidateParam(this.Url, "Url");
		if ((this.Frequency < 1) || (this.Frequency > 1440)) {
			throw new ArgumentException(StringHelper.Format(Strings.InvalidFrequencyValue, this.Frequency));
		}
	}
}