import { DiscoverySchemaChanges, IDiscoveryVersionable } from "../../MailboxSearch/Versioning";
import { EwsServiceJsonReader } from "../EwsServiceJsonReader";
import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { MailboxQuery } from "../../MailboxSearch/MailboxQuery";
import { MailboxSearchLocation } from "../../Enumerations/MailboxSearchLocation";
import { MailboxSearchScope } from "../../MailboxSearch/MailboxSearchScope";
import { MailboxSearchScopeType } from "../../Enumerations/MailboxSearchScopeType";
import { PreviewItemBaseShape } from "../../Enumerations/PreviewItemBaseShape";
import { PreviewItemResponseShape } from "../../MailboxSearch/PreviewItemResponseShape";
import { PropertyDefinitionBase } from "../../PropertyDefinitions/PropertyDefinitionBase";
import { SearchPageDirection } from "../../Enumerations/SearchPageDirection";
import { SearchResultType } from "../../Enumerations/SearchResultType";
import { ServiceErrorHandling } from "../../Enumerations/ServiceErrorHandling";
import { ServiceObjectSchema } from "../ServiceObjects/Schemas/ServiceObjectSchema";
import { ServiceResponseCollection } from "../Responses/ServiceResponseCollection";
import { ServiceValidationException } from "../../Exceptions/ServiceValidationException";
import { ServiceVersionException } from "../../Exceptions/ServiceVersionException";
import { SortDirection } from "../../Enumerations/SortDirection";
import { StringHelper } from "../../ExtensionMethods";
import { Strings } from "../../Strings";
import { XmlElementNames } from "../XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { SearchMailboxesResponse } from "../Responses/SearchMailboxesResponse";
import { MultiResponseServiceRequest } from "./MultiResponseServiceRequest";
/**
 * @internal Represents a SearchMailboxesRequest request. 
 * 
 * @sealed
 */
export class SearchMailboxesRequest extends MultiResponseServiceRequest<SearchMailboxesResponse> implements IDiscoveryVersionable {

    private searchQueries: MailboxQuery[] = [];
    private searchResultType: SearchResultType = SearchResultType.PreviewOnly;
    private sortOrder: SortDirection = SortDirection.Ascending;
    private sortByProperty: string = null;
    private performDeduplication: boolean = false;
    private pageSize: number = 0;
    private pageItemReference: string = null;
    private pageDirection: SearchPageDirection = SearchPageDirection.Next;
    private previewItemResponseShape: PreviewItemResponseShape = null;

    /**
     * Collection of query + mailboxes
     */
    get SearchQueries(): MailboxQuery[] {
        return this.searchQueries;
    }
    set SearchQueries(value: MailboxQuery[]) {
        this.searchQueries = value;
    }

    /**
     * Search result type
     */
    get ResultType(): SearchResultType {
        return this.searchResultType;
    }
    set ResultType(value: SearchResultType) {
        this.searchResultType = value;
    }

    /**
     * Preview item response shape
     */
    get PreviewItemResponseShape(): PreviewItemResponseShape {
        return this.previewItemResponseShape;
    }
    set PreviewItemResponseShape(value: PreviewItemResponseShape) {
        this.previewItemResponseShape = value;
    }

    /**
     * Sort order
     */
    get SortOrder(): SortDirection {
        return this.sortOrder;
    }
    set SortOrder(value: SortDirection) {
        this.sortOrder = value;
    }

    /**
     * Sort by property name
     */
    get SortByProperty(): string {
        return this.sortByProperty;
    }
    set SortByProperty(value: string) {
        this.sortByProperty = value;
    }

    /**
     * Query language
     */
    Language: string = null;

    /**
     * Perform deduplication or not
     */
    get PerformDeduplication(): boolean {
        return this.performDeduplication;
    }
    set PerformDeduplication(value: boolean) {
        this.performDeduplication = value;
    }

    /**
     * Page size
     */
    get PageSize(): number {
        return this.pageSize;
    }
    set PageSize(value: number) {
        this.pageSize = value;
    }

    /**
     * Page item reference
     */
    get PageItemReference(): string {
        return this.pageItemReference;
    }
    set PageItemReference(value: string) {
        this.pageItemReference = value;
    }

    /**
     * Page direction
     */
    get PageDirection(): SearchPageDirection {
        return this.pageDirection;
    }
    set PageDirection(value: SearchPageDirection) {
        this.pageDirection = value;
    }

    /**
     * Gets or sets the server version.
     * @interface IDiscoveryVersionable
     */
    ServerVersion: number = 0;

    /**
	 * @internal Initializes a new instance of the **SearchMailboxesRequest** class.
	 *
	 * @param   {ExchangeService}       service   The service.
     * @param   {ServiceErrorHandling}  errorHandlingMode   Indicates how errors should be handled.
	 */
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }

    /**
	 * @internal Creates the service response.
	 *
	 * @param   {ExchangeService}   service         The service.
	 * @param   {number}   			responseIndex   Index of the response.
	 * @return  {SearchMailboxesResponse}	Service response.
	 */
    CreateServiceResponse(service: ExchangeService, responseIndex: number): SearchMailboxesResponse {
        return new SearchMailboxesResponse();
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
        return ExchangeVersion.Exchange2013;
    }

    /**
	 * @internal Gets the name of the response message XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
    GetResponseMessageXmlElementName(): string {
        return XmlElementNames.SearchMailboxesResponseMessage;
    }

    /**
	 * @internal Gets the name of the response XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
    GetResponseXmlElementName(): string {
        return XmlElementNames.SearchMailboxesResponse;
    }

    /**
	 * @internal Gets the name of the XML element.
	 *
	 * @return  {string}      Xml element name.
	 */
    GetXmlElementName(): string {
        return XmlElementNames.SearchMailboxes;
    }

    /**
     * @internal Parses the response.
     * See O15:324151 (OfficeDev bug/issue not visible to external world) on why we need to override ParseResponse here instead of calling the one in MultiResponseServiceRequest.cs 
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    ParseResponse(jsonBody: any): any {
        let serviceResponses: ServiceResponseCollection<SearchMailboxesResponse> = new ServiceResponseCollection<SearchMailboxesResponse>();

        let jsResponseMessages = EwsServiceJsonReader.ReadAsArray(jsonBody[XmlElementNames.ResponseMessages], this.GetResponseMessageXmlElementName());

        for (let jsResponseObject of jsResponseMessages) {
            let response: SearchMailboxesResponse = new SearchMailboxesResponse();
            response.LoadFromXmlJsObject(jsResponseObject, this.Service);
            serviceResponses.Add(response);
        }

        return serviceResponses;
    }

    /**
	 * @internal Validate the request.
	 */
    Validate(): void {
        super.Validate();

        if (this.SearchQueries == null || this.SearchQueries.length == 0) {
            throw new ServiceValidationException(Strings.MailboxQueriesParameterIsNotSpecified);
        }

        for (let searchQuery of this.SearchQueries) {
            if (searchQuery.MailboxSearchScopes == null || searchQuery.MailboxSearchScopes.length == 0) {
                throw new ServiceValidationException(Strings.MailboxQueriesParameterIsNotSpecified);
            }

            for (let searchScope of searchQuery.MailboxSearchScopes) {
                if (searchScope.ExtendedAttributes != null && searchScope.ExtendedAttributes.length > 0 && !DiscoverySchemaChanges.SearchMailboxesExtendedData.IsCompatible(this)) {
                    throw new ServiceVersionException(
                        StringHelper.Format(
                            Strings.ClassIncompatibleWithRequestVersion,
                            "ExtendedAttribute", //typeof (ExtendedAttribute).Name,
                            DiscoverySchemaChanges.SearchMailboxesExtendedData.MinimumServerVersion));
                }

                if (searchScope.SearchScopeType != MailboxSearchScopeType.LegacyExchangeDN && (!DiscoverySchemaChanges.SearchMailboxesExtendedData.IsCompatible(this) || !DiscoverySchemaChanges.SearchMailboxesAdditionalSearchScopes.IsCompatible(this))) {
                    throw new ServiceVersionException(
                        StringHelper.Format(
                            Strings.EnumValueIncompatibleWithRequestVersion,
                            MailboxSearchScopeType[searchScope.SearchScopeType],
                            "MailboxSearchScopeType", //typeof (MailboxSearchScopeType).Name,
                            DiscoverySchemaChanges.SearchMailboxesAdditionalSearchScopes.MinimumServerVersion));
                }
            }
        }

        if (!StringHelper.IsNullOrEmpty(this.SortByProperty)) {
            let prop: PropertyDefinitionBase = null;
            try {
                prop = ServiceObjectSchema.FindPropertyDefinition(this.SortByProperty);
            }
            catch (ex) { //KeyNotFoundException
            }

            if (prop == null) {
                throw new ServiceValidationException(StringHelper.Format(Strings.InvalidSortByPropertyForMailboxSearch, this.SortByProperty));
            }
        }
    }

    /**
     * @internal Writes XML elements.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.SearchQueries);
        for (let mailboxQuery of this.SearchQueries) {
            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.MailboxQuery);
            writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Query, mailboxQuery.Query);
            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.MailboxSearchScopes);
            for (let mailboxSearchScope of mailboxQuery.MailboxSearchScopes) {
                // The checks here silently downgrade the schema based on compatability checks, to recieve errors use the validate method
                if (mailboxSearchScope.SearchScopeType == MailboxSearchScopeType.LegacyExchangeDN || DiscoverySchemaChanges.SearchMailboxesAdditionalSearchScopes.IsCompatible(this)) {
                    writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.MailboxSearchScope);
                    writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Mailbox, mailboxSearchScope.Mailbox);
                    writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.SearchScope, MailboxSearchLocation[mailboxSearchScope.SearchScope]);

                    if (DiscoverySchemaChanges.SearchMailboxesExtendedData.IsCompatible(this)) {
                        writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.ExtendedAttributes);

                        if (mailboxSearchScope.SearchScopeType != MailboxSearchScopeType.LegacyExchangeDN) {
                            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.ExtendedAttribute);
                            writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.ExtendedAttributeName, XmlElementNames.SearchScopeType);
                            writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.ExtendedAttributeValue, MailboxSearchScopeType[mailboxSearchScope.SearchScopeType]);
                            writer.WriteEndElement();
                        }

                        if (mailboxSearchScope.ExtendedAttributes != null && mailboxSearchScope.ExtendedAttributes.length > 0) {
                            for (let attribute of mailboxSearchScope.ExtendedAttributes) {
                                writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.ExtendedAttribute);
                                writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.ExtendedAttributeName, attribute.Name);
                                writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.ExtendedAttributeValue, attribute.Value);
                                writer.WriteEndElement();
                            }
                        }

                        writer.WriteEndElement();  // ExtendedData
                    }

                    writer.WriteEndElement();   // MailboxSearchScope
                }
            }

            writer.WriteEndElement();   // MailboxSearchScopes
            writer.WriteEndElement();   // MailboxQuery
        }

        writer.WriteEndElement();   // SearchQueries
        writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.ResultType, SearchResultType[this.ResultType]);

        if (this.PreviewItemResponseShape != null) {
            writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.PreviewItemResponseShape);
            writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.BaseShape, PreviewItemBaseShape[this.PreviewItemResponseShape.BaseShape]);
            if (this.PreviewItemResponseShape.AdditionalProperties != null && this.PreviewItemResponseShape.AdditionalProperties.length > 0) {
                writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.AdditionalProperties);
                for (let additionalProperty of this.PreviewItemResponseShape.AdditionalProperties) {
                    additionalProperty.WriteToXml(writer);
                }

                writer.WriteEndElement();   // AdditionalProperties
            }

            writer.WriteEndElement();   // PreviewItemResponseShape
        }

        if (!StringHelper.IsNullOrEmpty(this.SortByProperty)) {
            writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.SortBy);
            writer.WriteAttributeValue(XmlElementNames.Order, SortDirection[this.SortOrder]);
            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.FieldURI);
            writer.WriteAttributeValue(XmlElementNames.FieldURI, this.sortByProperty);
            writer.WriteEndElement();   // FieldURI
            writer.WriteEndElement();   // SortBy
        }

        // Language
        if (!StringHelper.IsNullOrEmpty(this.Language)) {
            writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.Language, this.Language);
        }

        // Dedupe
        writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.Deduplication, this.performDeduplication);

        if (this.PageSize > 0) {
            writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.PageSize, this.PageSize);
        }

        if (!StringHelper.IsNullOrEmpty(this.PageItemReference)) {
            writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.PageItemReference, this.PageItemReference);
        }

        writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.PageDirection, SearchPageDirection[this.PageDirection]);
    }
}