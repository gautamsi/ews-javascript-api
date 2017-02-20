import { EwsServiceJsonReader } from "../EwsServiceJsonReader";
import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { GetStreamingEventsResponse } from "../Responses/GetStreamingEventsResponse";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { HangingServiceRequestBase, HandleResponseObject } from "./HangingServiceRequestBase";
/**
 * @internal Represents a GetStreamingEvents request.
 */
export class GetStreamingEventsRequest extends HangingServiceRequestBase {

	static HeartbeatFrequencyDefault: number = 45000;

	/**
	 * @internal Allow test code to change heartbeat value
	 * /remarks/	set only.
	 */
	static set HeartbeatFrequency(value: number) {
		this.heartbeatFrequency = value;
	}
	private subscriptionIds: string[];
	private connectionTimeout: number;
	private static heartbeatFrequency: number = GetStreamingEventsRequest.HeartbeatFrequencyDefault;

	/**
	 * @internal Initializes a new instance of the **GetStreamingEventsRequest** class.
	 *
	 * @param   {ExchangeService}   	service                The service.
	 * @param   {HandleResponseObject} 	serviceObjectHandler   Callback method to handle response objects received.
	 * @param   {string[]}   			subscriptionIds        List of subscription ids to listen to on this request.
	 * @param   {number}   				connectionTimeout      Connection timeout, in minutes.
	 */
	constructor(service: ExchangeService,
		serviceObjectHandler: HandleResponseObject,
		subscriptionIds: string[],
		connectionTimeout: number) {
		super(service, serviceObjectHandler, GetStreamingEventsRequest.heartbeatFrequency);
		this.subscriptionIds = subscriptionIds;
		this.connectionTimeout = connectionTimeout;
	}

	/**
	 * @internal Gets the request version.
	 *
	 * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
	 */
	GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2010_SP1; }

	/**
	 * @internal Gets the name of the response XML element.
	 *
	 * @return  {string}      XML element name.
	 */
	GetResponseXmlElementName(): string { return XmlElementNames.GetStreamingEventsResponse; }

	/**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      XML element name.
	 */
	GetXmlElementName(): string { return XmlElementNames.GetStreamingEvents; }

	/**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
	ParseResponse(jsBody: any): any {
		var jsResponseMessages: any = jsBody[XmlElementNames.ResponseMessages]

		let response = new GetStreamingEventsResponse(this);
		response.LoadFromXmlJsObject(jsResponseMessages[XmlElementNames.GetStreamingEventsResponseMessage], this.Service);

		return response;

	}

	/**
	 * @internal Writes the elements to XML writer.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
	WriteElementsToXml(writer: EwsServiceXmlWriter): void {
		writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.SubscriptionIds);

		for (let id of this.subscriptionIds) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.SubscriptionId,
				id);
		}

		writer.WriteEndElement();

		writer.WriteElementValue(
			XmlNamespace.Messages,
			XmlElementNames.ConnectionTimeout,
			this.connectionTimeout);
	}
}