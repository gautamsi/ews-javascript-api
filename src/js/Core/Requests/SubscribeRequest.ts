import {ArrayHelper, StringHelper} from "../../ExtensionMethods";
import {EnumToExchangeVersionMappingHelper} from "../../Enumerations/EnumToExchangeVersionMappingHelper";
import {EventType} from "../../Enumerations/EventType";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {EwsUtilities} from "../EwsUtilities";
import {ExchangeService} from "../ExchangeService";
import {FolderIdWrapperList} from "../../Misc/FolderIdWrapperList";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ServiceValidationException} from "../../Exceptions/ServiceValidationException";
import {Strings} from "../../Strings";
import {XmlAttributeNames} from "../XmlAttributeNames";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {SubscribeResponse} from "../Responses/SubscribeResponse";
import {SubscriptionBase} from "../../Notifications/SubscriptionBase";
/**
 * @internal Represents an abstract Subscribe request.
 * 
 * @typeparam	{TSubscription}		The type of the subscription.
 */
export abstract class SubscribeRequest<TSubscription extends SubscriptionBase> extends MultiResponseServiceRequest<SubscribeResponse<TSubscription>> {

	/**
	 * Gets the folder ids.
	 * 
	 * @private set
	 */
	FolderIds: FolderIdWrapperList;

	/**
	 * Gets the event types.
	 * 
	 * @private set
	 */
	EventTypes: EventType[];

	/**
	 * Gets or sets the watermark.
	 */
	Watermark: string;

	/**
	 * @internal Initializes a new instance of the **SubscribeRequest<TSubscription>** class.
	 *
	 * @param   {ExchangeService}   service   The service.
	 */
	constructor(service: ExchangeService) {
		super(service, ServiceErrorHandling.ThrowOnError);
		this.FolderIds = new FolderIdWrapperList();
		this.EventTypes = [];
	}

	/**
	 * @internal Gets the expected response message count.
	 *
	 * @return  {number}      Number of expected response messages.
	 */
	GetExpectedResponseMessageCount(): number { return 1; }

	/**
	 * @internal Gets the name of the response message XML element.
	 *
	 * @return  {string}      XML element name,
	 */
	GetResponseMessageXmlElementName(): string { return XmlElementNames.SubscribeResponseMessage; }

	/**
	 * @internal Gets the name of the response XML element.
	 *
	 * @return  {string}      XML element name,
	 */
	GetResponseXmlElementName(): string { return XmlElementNames.SubscribeResponse; }

	/**
	 * @internal Gets the name of the subscription XML element.
	 *
	 * @return  {string}      XML element name,
	 */
	abstract GetSubscriptionXmlElementName(): string;

	/**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      XML element name,
	 */
	GetXmlElementName(): string { return XmlElementNames.Subscribe; }

	/**
	 * @internal Internal method to write XML elements.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
	abstract InternalWriteElementsToXml(writer: EwsServiceXmlWriter): void;

	/**
	 * @internal Validate request.
	 */
	Validate(): void {
		super.Validate();
		EwsUtilities.ValidateParam(this.FolderIds, "FolderIds");
		EwsUtilities.ValidateParamCollection(this.EventTypes, "EventTypes");
		this.FolderIds.Validate(this.Service.RequestedServerVersion);

		// Check that caller isn't trying to subscribe to Status events.
		if (ArrayHelper.OfType<EventType, EventType>(this.EventTypes, (eventType) => eventType === EventType.Status).length > 0) { //  this.EventTypes.Count<EventType>(eventType => (eventType == EventType.Status)) > 0)
			throw new ServiceValidationException(Strings.CannotSubscribeToStatusEvents);
		}

		// If Watermark was specified, make sure it's not a blank string.
		if (!StringHelper.IsNullOrEmpty(this.Watermark)) {
			EwsUtilities.ValidateNonBlankStringParam(this.Watermark, "Watermark");
		}

		this.EventTypes.forEach((eventType) => {
			EwsUtilities.ValidateEnumVersionValue(EnumToExchangeVersionMappingHelper.EventType, eventType, this.Service.RequestedServerVersion);
		});
	}

	/**
	 * @internal Writes XML elements.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
	WriteElementsToXml(writer: EwsServiceXmlWriter): void {

		writer.WriteStartElement(XmlNamespace.Messages, this.GetSubscriptionXmlElementName());

		if (this.FolderIds.Count == 0) {
			writer.WriteAttributeValue(
				XmlAttributeNames.SubscribeToAllFolders,
				true);
		}

		this.FolderIds.WriteToXml(
			writer,
			XmlNamespace.Types,
			XmlElementNames.FolderIds);

		writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.EventTypes);
		for (let eventType of this.EventTypes) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.EventType,
				EventType[eventType] + "Event");
		}
		writer.WriteEndElement();

		if (!StringHelper.IsNullOrEmpty(this.Watermark)) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.Watermark,
				this.Watermark);
		}

		this.InternalWriteElementsToXml(writer);

		writer.WriteEndElement();
	}
}