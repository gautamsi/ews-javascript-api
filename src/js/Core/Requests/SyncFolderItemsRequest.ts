import {ArgumentException} from "../../Exceptions/ArgumentException";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {EwsUtilities} from "../EwsUtilities";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {FolderId} from "../../ComplexProperties/FolderId";
import {ItemIdWrapperList} from "../../Misc/ItemIdWrapperList";
import {PropertySet} from "../PropertySet";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ServiceObjectType} from "../../Enumerations/ServiceObjectType";
import {ServiceVersionException} from "../../Exceptions/ServiceVersionException";
import {StringHelper} from "../../ExtensionMethods";
import {Strings} from "../../Strings";
import {SyncFolderItemsScope} from "../../Enumerations/SyncFolderItemsScope";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {SyncFolderItemsResponse} from "../Responses/SyncFolderItemsResponse";
/**
 * @internal Represents a SyncFolderItems request.
 */
export class SyncFolderItemsRequest extends MultiResponseServiceRequest<SyncFolderItemsResponse> {

	private propertySet: PropertySet = null;
	private syncFolderId: FolderId = null;
	private syncScope: SyncFolderItemsScope = SyncFolderItemsScope.NormalItems;
	private syncState: string = null;
	private ignoredItemIds: ItemIdWrapperList = new ItemIdWrapperList();
	private maxChangesReturned: number = 100;
	private numberOfDays: number = 0;

	/**
	 * Gets or sets the property set.
	 * 
	 * @value	The property set
	 */
	get PropertySet(): PropertySet {
		return this.propertySet;
	}
	set PropertySet(value: PropertySet) {
		this.propertySet = value;
	}

	/**
	 * Gets or sets the sync folder id.
	 * 
	 * @value	The sync folder id.
	 */
	get SyncFolderId(): FolderId {
		return this.syncFolderId;
	}
	set SyncFolderId(value: FolderId) {
		this.syncFolderId = value;
	}

	/**
	 * Gets or sets the scope of the sync.
	 * 
	 * @value	The scope of the sync.
	 */
	get SyncScope(): SyncFolderItemsScope {
		return this.syncScope;
	}
	set SyncScope(value: SyncFolderItemsScope) {
		this.syncScope = value;
	}

	/**
	 * Gets or sets the state of the sync.
	 * 
	 * @value	The state of the sync.
	 */
	get SyncState(): string {
		return this.syncState;
	}
	set SyncState(value: string) {
		this.syncState = value;
	}

	/**
	 * Gets the list of ignored item ids.
	 * 
	 * @value	The ignored item ids.
	 */
	get IgnoredItemIds(): ItemIdWrapperList {
		return this.ignoredItemIds;
	}

	/**
	 * Gets or sets the maximum number of changes returned by SyncFolderItems.
	 * Values must be between 1 and 512.
	 * Default is 100.
	 */
	get MaxChangesReturned(): number {
		return this.maxChangesReturned;
	}
	set MaxChangesReturned(value: number) {
		if (value >= 1 && value <= 512) {
			this.maxChangesReturned = value;
		}
		else {
			throw new ArgumentException(Strings.MaxChangesMustBeBetween1And512);
		}
	}

	/**
	 * Gets or sets the number of days of content returned by SyncFolderItems.
	 * Zero means return all content.
	 * Default is zero.
	 */
	get NumberOfDays(): number {
		return this.numberOfDays;
	}
	set NumberOfDays(value: number) {
		if (value >= 0) {
			this.numberOfDays = value;
		}
		else {
			throw new ArgumentException(Strings.NumberOfDaysMustBePositive);
		}
	}

	/**
	 * @internal Initializes a new instance of the **SyncFolderItemsRequest** class.
	 *
	 * @param   {ExchangeService}   	service             The service.
	 */
	constructor(service: ExchangeService) {
		super(service, ServiceErrorHandling.ThrowOnError);
	}

	/**
	 * @internal Creates the service response.
	 *
	 * @param   {ExchangeService}   service         The service.
	 * @param   {number}   			responseIndex   Index of the response.
	 * @return  {SyncFolderItemsResponse}		Response object.
	 */
	CreateServiceResponse(service: ExchangeService, responseIndex: number): SyncFolderItemsResponse {
		return new SyncFolderItemsResponse(this.PropertySet);
	}

	/**
	 * @internal Gets the expected response message count.
	 *
	 * @return  {number}      Number of items in response.
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
	 * @return  {string}      XML element name.
	 */
    GetResponseMessageXmlElementName(): string {
		return XmlElementNames.SyncFolderItemsResponseMessage;
	}

	/**
	 * @internal Gets the name of the response XML element.
	 *
	 * @return  {string}      XML element name.
	 */
    GetResponseXmlElementName(): string {
		return XmlElementNames.SyncFolderItemsResponse;
	}

	/**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      XML element name.
	 */
    GetXmlElementName(): string {
		return XmlElementNames.SyncFolderItems;
	}

	/**
	 * @internal Validate request.
	 */
    Validate(): void {
		super.Validate();
		EwsUtilities.ValidateParam(this.PropertySet, "PropertySet");
		EwsUtilities.ValidateParam(this.SyncFolderId, "SyncFolderId");
		this.SyncFolderId.Validate(this.Service.RequestedServerVersion);

		// SyncFolderItemsScope enum was introduced with Exchange2010.  Only
		// value NormalItems is valid with previous server versions.
		if (this.Service.RequestedServerVersion < ExchangeVersion.Exchange2010 &&
			this.syncScope != SyncFolderItemsScope.NormalItems) {
			throw new ServiceVersionException(
				StringHelper.Format(
					Strings.EnumValueIncompatibleWithRequestVersion,
					SyncFolderItemsScope[this.syncScope],
					"SyncFolderItemsScope",
					ExchangeVersion.Exchange2010));
		}

		// NumberOfDays was introduced with Exchange 2013.
		if (this.Service.RequestedServerVersion < ExchangeVersion.Exchange2013 &&
			this.NumberOfDays != 0) {
			throw new ServiceVersionException(
				StringHelper.Format(
					Strings.ParameterIncompatibleWithRequestVersion,
					"numberOfDays",
					ExchangeVersion.Exchange2013));
		}

		// SyncFolderItems can only handle summary properties
		this.PropertySet.ValidateForRequest(this, true /*summaryPropertiesOnly*/);
	}

	/**
	 * @internal Writes the elements to XML writer.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
		this.PropertySet.WriteToXml(writer, ServiceObjectType.Item);

		writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.SyncFolderId);
		this.SyncFolderId.WriteToXml(writer);
		writer.WriteEndElement();

		writer.WriteElementValue(
			XmlNamespace.Messages,
			XmlElementNames.SyncState,
			this.SyncState);

		this.IgnoredItemIds.WriteToXml(
			writer,
			XmlNamespace.Messages,
			XmlElementNames.Ignore);

		writer.WriteElementValue(
			XmlNamespace.Messages,
			XmlElementNames.MaxChangesReturned,
			this.MaxChangesReturned);

		if (this.Service.RequestedServerVersion >= ExchangeVersion.Exchange2010) {
			writer.WriteElementValue(
				XmlNamespace.Messages,
				XmlElementNames.SyncScope,
				SyncFolderItemsScope[this.syncScope]);
		}

		if (this.NumberOfDays != 0) {
			writer.WriteElementValue(
				XmlNamespace.Messages,
				XmlElementNames.NumberOfDays,
				this.numberOfDays);
		}
	}
}