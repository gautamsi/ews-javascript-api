import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {EwsUtilities} from "../EwsUtilities";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {FolderId} from "../../ComplexProperties/FolderId";
import {PropertySet} from "../PropertySet";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ServiceObjectType} from "../../Enumerations/ServiceObjectType";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {SyncFolderHierarchyResponse} from "../Responses/SyncFolderHierarchyResponse";
/**
 * @internal Represents a SyncFolderHierarchy request.
 */
export class SyncFolderHierarchyRequest extends MultiResponseServiceRequest<SyncFolderHierarchyResponse> {

	private propertySet: PropertySet = null;
	private syncFolderId: FolderId = null;
	private syncState: string = null;

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
	CreateServiceResponse(service: ExchangeService, responseIndex: number): SyncFolderHierarchyResponse {
		return new SyncFolderHierarchyResponse(this.PropertySet);
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
		return XmlElementNames.SyncFolderHierarchyResponseMessage;
	}

	/**
	 * @internal Gets the name of the response XML element.
	 *
	 * @return  {string}      XML element name.
	 */
    GetResponseXmlElementName(): string {
		return XmlElementNames.SyncFolderHierarchyResponse;
	}

	/**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      XML element name.
	 */
    GetXmlElementName(): string {
		return XmlElementNames.SyncFolderHierarchy;
	}

	/**
	 * @internal Validate request.
	 */
    Validate(): void {
		super.Validate();
		EwsUtilities.ValidateParam(this.PropertySet, "PropertySet");
		if (this.SyncFolderId != null) {
			this.SyncFolderId.Validate(this.Service.RequestedServerVersion);
		}

		this.PropertySet.ValidateForRequest(this, false /*summaryPropertiesOnly*/);
	}

	/**
	 * @internal Writes the elements to XML writer.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
		this.PropertySet.WriteToXml(writer, ServiceObjectType.Folder);

		if (this.SyncFolderId != null) {
			writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.SyncFolderId);
			this.SyncFolderId.WriteToXml(writer);
			writer.WriteEndElement();
		}

		writer.WriteElementValue(
			XmlNamespace.Messages,
			XmlElementNames.SyncState,
			this.SyncState);
	}
}