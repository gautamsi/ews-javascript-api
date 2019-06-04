"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Versioning_1 = require("../../MailboxSearch/Versioning");
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var MailboxSearchLocation_1 = require("../../Enumerations/MailboxSearchLocation");
var MailboxSearchScopeType_1 = require("../../Enumerations/MailboxSearchScopeType");
var PreviewItemBaseShape_1 = require("../../Enumerations/PreviewItemBaseShape");
var SearchPageDirection_1 = require("../../Enumerations/SearchPageDirection");
var SearchResultType_1 = require("../../Enumerations/SearchResultType");
var ServiceObjectSchema_1 = require("../ServiceObjects/Schemas/ServiceObjectSchema");
var ServiceResponseCollection_1 = require("../Responses/ServiceResponseCollection");
var ServiceValidationException_1 = require("../../Exceptions/ServiceValidationException");
var ServiceVersionException_1 = require("../../Exceptions/ServiceVersionException");
var SortDirection_1 = require("../../Enumerations/SortDirection");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SearchMailboxesResponse_1 = require("../Responses/SearchMailboxesResponse");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * @internal Represents a SearchMailboxesRequest request.
 *
 * @sealed
 */
var SearchMailboxesRequest = /** @class */ (function (_super) {
    __extends(SearchMailboxesRequest, _super);
    /**
     * @internal Initializes a new instance of the **SearchMailboxesRequest** class.
     *
     * @param   {ExchangeService}       service   The service.
     * @param   {ServiceErrorHandling}  errorHandlingMode   Indicates how errors should be handled.
     */
    function SearchMailboxesRequest(service, errorHandlingMode) {
        var _this = _super.call(this, service, errorHandlingMode) || this;
        _this.searchQueries = [];
        _this.searchResultType = SearchResultType_1.SearchResultType.PreviewOnly;
        _this.sortOrder = SortDirection_1.SortDirection.Ascending;
        _this.sortByProperty = null;
        _this.performDeduplication = false;
        _this.pageSize = 0;
        _this.pageItemReference = null;
        _this.pageDirection = SearchPageDirection_1.SearchPageDirection.Next;
        _this.previewItemResponseShape = null;
        /**
         * Query language
         */
        _this.Language = null;
        /**
         * Gets or sets the server version.
         * @interface IDiscoveryVersionable
         */
        _this.ServerVersion = 0;
        return _this;
    }
    Object.defineProperty(SearchMailboxesRequest.prototype, "SearchQueries", {
        /**
         * Collection of query + mailboxes
         */
        get: function () {
            return this.searchQueries;
        },
        set: function (value) {
            this.searchQueries = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchMailboxesRequest.prototype, "ResultType", {
        /**
         * Search result type
         */
        get: function () {
            return this.searchResultType;
        },
        set: function (value) {
            this.searchResultType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchMailboxesRequest.prototype, "PreviewItemResponseShape", {
        /**
         * Preview item response shape
         */
        get: function () {
            return this.previewItemResponseShape;
        },
        set: function (value) {
            this.previewItemResponseShape = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchMailboxesRequest.prototype, "SortOrder", {
        /**
         * Sort order
         */
        get: function () {
            return this.sortOrder;
        },
        set: function (value) {
            this.sortOrder = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchMailboxesRequest.prototype, "SortByProperty", {
        /**
         * Sort by property name
         */
        get: function () {
            return this.sortByProperty;
        },
        set: function (value) {
            this.sortByProperty = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchMailboxesRequest.prototype, "PerformDeduplication", {
        /**
         * Perform deduplication or not
         */
        get: function () {
            return this.performDeduplication;
        },
        set: function (value) {
            this.performDeduplication = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchMailboxesRequest.prototype, "PageSize", {
        /**
         * Page size
         */
        get: function () {
            return this.pageSize;
        },
        set: function (value) {
            this.pageSize = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchMailboxesRequest.prototype, "PageItemReference", {
        /**
         * Page item reference
         */
        get: function () {
            return this.pageItemReference;
        },
        set: function (value) {
            this.pageItemReference = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchMailboxesRequest.prototype, "PageDirection", {
        /**
         * Page direction
         */
        get: function () {
            return this.pageDirection;
        },
        set: function (value) {
            this.pageDirection = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}   			responseIndex   Index of the response.
     * @return  {SearchMailboxesResponse}	Service response.
     */
    SearchMailboxesRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new SearchMailboxesResponse_1.SearchMailboxesResponse();
    };
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of expected response messages.
     */
    SearchMailboxesRequest.prototype.GetExpectedResponseMessageCount = function () {
        return 1;
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    SearchMailboxesRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
    };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      Xml element name.
     */
    SearchMailboxesRequest.prototype.GetResponseMessageXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.SearchMailboxesResponseMessage;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      Xml element name.
     */
    SearchMailboxesRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.SearchMailboxesResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      Xml element name.
     */
    SearchMailboxesRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.SearchMailboxes;
    };
    /**
     * @internal Parses the response.
     * See O15:324151 (OfficeDev bug/issue not visible to external world) on why we need to override ParseResponse here instead of calling the one in MultiResponseServiceRequest.cs
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    SearchMailboxesRequest.prototype.ParseResponse = function (jsonBody) {
        var serviceResponses = new ServiceResponseCollection_1.ServiceResponseCollection();
        var jsResponseMessages = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsonBody[XmlElementNames_1.XmlElementNames.ResponseMessages], this.GetResponseMessageXmlElementName());
        for (var _i = 0, jsResponseMessages_1 = jsResponseMessages; _i < jsResponseMessages_1.length; _i++) {
            var jsResponseObject = jsResponseMessages_1[_i];
            var response = new SearchMailboxesResponse_1.SearchMailboxesResponse();
            response.LoadFromXmlJsObject(jsResponseObject, this.Service);
            serviceResponses.Add(response);
        }
        return serviceResponses;
    };
    /**
     * @internal Validate the request.
     */
    SearchMailboxesRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        if (this.SearchQueries == null || this.SearchQueries.length == 0) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.MailboxQueriesParameterIsNotSpecified);
        }
        for (var _i = 0, _a = this.SearchQueries; _i < _a.length; _i++) {
            var searchQuery = _a[_i];
            if (searchQuery.MailboxSearchScopes == null || searchQuery.MailboxSearchScopes.length == 0) {
                throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.MailboxQueriesParameterIsNotSpecified);
            }
            for (var _b = 0, _c = searchQuery.MailboxSearchScopes; _b < _c.length; _b++) {
                var searchScope = _c[_b];
                if (searchScope.ExtendedAttributes != null && searchScope.ExtendedAttributes.length > 0 && !Versioning_1.DiscoverySchemaChanges.SearchMailboxesExtendedData.IsCompatible(this)) {
                    throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ClassIncompatibleWithRequestVersion, "ExtendedAttribute", //typeof (ExtendedAttribute).Name,
                    Versioning_1.DiscoverySchemaChanges.SearchMailboxesExtendedData.MinimumServerVersion));
                }
                if (searchScope.SearchScopeType != MailboxSearchScopeType_1.MailboxSearchScopeType.LegacyExchangeDN && (!Versioning_1.DiscoverySchemaChanges.SearchMailboxesExtendedData.IsCompatible(this) || !Versioning_1.DiscoverySchemaChanges.SearchMailboxesAdditionalSearchScopes.IsCompatible(this))) {
                    throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.EnumValueIncompatibleWithRequestVersion, MailboxSearchScopeType_1.MailboxSearchScopeType[searchScope.SearchScopeType], "MailboxSearchScopeType", //typeof (MailboxSearchScopeType).Name,
                    Versioning_1.DiscoverySchemaChanges.SearchMailboxesAdditionalSearchScopes.MinimumServerVersion));
                }
            }
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.SortByProperty)) {
            var prop = null;
            try {
                prop = ServiceObjectSchema_1.ServiceObjectSchema.FindPropertyDefinition(this.SortByProperty);
            }
            catch (ex) { //KeyNotFoundException
            }
            if (prop == null) {
                throw new ServiceValidationException_1.ServiceValidationException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.InvalidSortByPropertyForMailboxSearch, this.SortByProperty));
            }
        }
    };
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    SearchMailboxesRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SearchQueries);
        for (var _i = 0, _a = this.SearchQueries; _i < _a.length; _i++) {
            var mailboxQuery = _a[_i];
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MailboxQuery);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Query, mailboxQuery.Query);
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MailboxSearchScopes);
            for (var _b = 0, _c = mailboxQuery.MailboxSearchScopes; _b < _c.length; _b++) {
                var mailboxSearchScope = _c[_b];
                // The checks here silently downgrade the schema based on compatability checks, to recieve errors use the validate method
                if (mailboxSearchScope.SearchScopeType == MailboxSearchScopeType_1.MailboxSearchScopeType.LegacyExchangeDN || Versioning_1.DiscoverySchemaChanges.SearchMailboxesAdditionalSearchScopes.IsCompatible(this)) {
                    writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MailboxSearchScope);
                    writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Mailbox, mailboxSearchScope.Mailbox);
                    writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.SearchScope, MailboxSearchLocation_1.MailboxSearchLocation[mailboxSearchScope.SearchScope]);
                    if (Versioning_1.DiscoverySchemaChanges.SearchMailboxesExtendedData.IsCompatible(this)) {
                        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ExtendedAttributes);
                        if (mailboxSearchScope.SearchScopeType != MailboxSearchScopeType_1.MailboxSearchScopeType.LegacyExchangeDN) {
                            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ExtendedAttribute);
                            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ExtendedAttributeName, XmlElementNames_1.XmlElementNames.SearchScopeType);
                            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ExtendedAttributeValue, MailboxSearchScopeType_1.MailboxSearchScopeType[mailboxSearchScope.SearchScopeType]);
                            writer.WriteEndElement();
                        }
                        if (mailboxSearchScope.ExtendedAttributes != null && mailboxSearchScope.ExtendedAttributes.length > 0) {
                            for (var _d = 0, _e = mailboxSearchScope.ExtendedAttributes; _d < _e.length; _d++) {
                                var attribute = _e[_d];
                                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ExtendedAttribute);
                                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ExtendedAttributeName, attribute.Name);
                                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ExtendedAttributeValue, attribute.Value);
                                writer.WriteEndElement();
                            }
                        }
                        writer.WriteEndElement(); // ExtendedData
                    }
                    writer.WriteEndElement(); // MailboxSearchScope
                }
            }
            writer.WriteEndElement(); // MailboxSearchScopes
            writer.WriteEndElement(); // MailboxQuery
        }
        writer.WriteEndElement(); // SearchQueries
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ResultType, SearchResultType_1.SearchResultType[this.ResultType]);
        if (this.PreviewItemResponseShape != null) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.PreviewItemResponseShape);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.BaseShape, PreviewItemBaseShape_1.PreviewItemBaseShape[this.PreviewItemResponseShape.BaseShape]);
            if (this.PreviewItemResponseShape.AdditionalProperties != null && this.PreviewItemResponseShape.AdditionalProperties.length > 0) {
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.AdditionalProperties);
                for (var _f = 0, _g = this.PreviewItemResponseShape.AdditionalProperties; _f < _g.length; _f++) {
                    var additionalProperty = _g[_f];
                    additionalProperty.WriteToXml(writer);
                }
                writer.WriteEndElement(); // AdditionalProperties
            }
            writer.WriteEndElement(); // PreviewItemResponseShape
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.SortByProperty)) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SortBy);
            writer.WriteAttributeValue(XmlElementNames_1.XmlElementNames.Order, SortDirection_1.SortDirection[this.SortOrder]);
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.FieldURI);
            writer.WriteAttributeValue(XmlElementNames_1.XmlElementNames.FieldURI, this.sortByProperty);
            writer.WriteEndElement(); // FieldURI
            writer.WriteEndElement(); // SortBy
        }
        // Language
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Language)) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.Language, this.Language);
        }
        // Dedupe
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.Deduplication, this.performDeduplication);
        if (this.PageSize > 0) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.PageSize, this.PageSize);
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.PageItemReference)) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.PageItemReference, this.PageItemReference);
        }
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.PageDirection, SearchPageDirection_1.SearchPageDirection[this.PageDirection]);
    };
    return SearchMailboxesRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.SearchMailboxesRequest = SearchMailboxesRequest;
