import {ArrayHelper, StringHelper} from "../../ExtensionMethods";
import {ConversationRequest} from "../../ComplexProperties/ConversationRequest";
import {ConversationSortOrder} from "../../Enumerations/ConversationSortOrder";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {FolderIdCollection} from "../../ComplexProperties/FolderIdCollection";
import {MailboxSearchLocation} from "../../Enumerations/MailboxSearchLocation";
import {PropertySet} from "../PropertySet";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ServiceObjectType} from "../../Enumerations/ServiceObjectType";
import {ServiceVersionException} from "../../Exceptions/ServiceVersionException";
import {Strings} from "../../Strings";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

import {GetConversationItemsResponse} from "../Responses/GetConversationItemsResponse";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
/**
 * @internal Represents a request to a GetConversationItems operation
 * 
 * @sealed
 */
export class GetConversationItemsRequest extends MultiResponseServiceRequest<GetConversationItemsResponse> {//IJsonSerializable

    /**
     * @internal Gets or sets the conversations.
     */
    Conversations: ConversationRequest[] = null;

    /**
     * Gets or sets the item properties.
     */
    ItemProperties: PropertySet = null;

    /**
     * @internal Gets or sets the folders to ignore.
     */
    FoldersToIgnore: FolderIdCollection = null;

    /**
     * @internal Gets or sets the maximum number of items to return.
     * 
     * @Nullable
     */
    MaxItemsToReturn: number = null;

    /**
     * @internal Gets or sets the conversation sort order.
     * 
     * @Nullable
     */
    SortOrder: ConversationSortOrder = null;

    /**
     * @internal Gets or sets the mailbox search location to include in the search.
     * 
     * @Nullable
     */
    MailboxScope: MailboxSearchLocation = null;

    /**
	 * @internal Initializes a new instance of the **GetConversationItemsRequest** class.
	 *
	 * @param   {ExchangeService}       service   The service.
	 * @param   {ServiceErrorHandling}  errorHandlingMode   Indicates how errors should be handled.
	 */
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }

    /**
	 * @internal Creates service response.
	 *
	 * @param   {ExchangeService}   service         The service.
	 * @param   {number}   			responseIndex   Index of the response.
	 * @return  {GetConversationItemsResponse}	    Service response.
	 */
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetConversationItemsResponse {
        return new GetConversationItemsResponse(this.ItemProperties);
    }

    /**
	 * @internal Gets the expected response message count.
	 *
	 * @return  {number}      Number of expected response messages.
	 */
    GetExpectedResponseMessageCount(): number {
        return this.Conversations ? this.Conversations.length : 0;
    }

    /**
	 * @internal Gets the request version.
	 *
	 * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
	 */
    GetMinimumRequiredServerVersion(): ExchangeVersion {
        return ExchangeVersion.Exchange2013;
    }

    /**
	 * @internal Gets the name of the response message XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
    GetResponseMessageXmlElementName(): string {
        return XmlElementNames.GetConversationItemsResponseMessage;
    }

    /**
	 * @internal Gets the name of the response XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
    GetResponseXmlElementName(): string {
        return XmlElementNames.GetConversationItemsResponse;
    }

    /**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
    GetXmlElementName(): string {
        return XmlElementNames.GetConversationItems;
    }

    /**
	 * @internal Validate the request.
	 */
    Validate(): void {
        super.Validate();

        // SearchScope is only valid for Exchange2013 or higher
        //
        if (this.MailboxScope &&
            this.Service.RequestedServerVersion < ExchangeVersion.Exchange2013) {
            throw new ServiceVersionException(
                StringHelper.Format(
                    Strings.ParameterIncompatibleWithRequestVersion,
                    "MailboxScope",
                    ExchangeVersion.Exchange2013));
        }
    }

    /**
	 * @internal Writes XML attributes.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        super.WriteAttributesToXml(writer);
    }

    /**
	 * @internal Writes XML elements.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        this.ItemProperties.WriteToXml(writer, ServiceObjectType.Item);

        //this.FoldersToIgnore.WriteToXml(writer, XmlNamespace.Messages, XmlElementNames.FoldersToIgnore);
        this.FoldersToIgnore.WriteToXml(writer, XmlElementNames.FoldersToIgnore, XmlNamespace.Messages); //info: temp workaround github #52 

        if (this.MaxItemsToReturn) {
            writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.MaxItemsToReturn, this.MaxItemsToReturn);
        }

        if (this.SortOrder) {
            writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.SortOrder, this.SortOrder);
        }

        if (this.MailboxScope) {
            writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.MailboxScope, this.MailboxScope);
        }

        writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.Conversations);

        this.Conversations.forEach((conversation) => conversation.WriteToXml(writer, XmlElementNames.Conversation));
        writer.WriteEndElement();
    }
}