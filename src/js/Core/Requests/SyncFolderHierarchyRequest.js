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
var EwsUtilities_1 = require("../EwsUtilities");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var ServiceErrorHandling_1 = require("../../Enumerations/ServiceErrorHandling");
var ServiceObjectType_1 = require("../../Enumerations/ServiceObjectType");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
var SyncFolderHierarchyResponse_1 = require("../Responses/SyncFolderHierarchyResponse");
/**
 * @internal Represents a SyncFolderHierarchy request.
 */
var SyncFolderHierarchyRequest = /** @class */ (function (_super) {
    __extends(SyncFolderHierarchyRequest, _super);
    /**
     * @internal Initializes a new instance of the **SyncFolderItemsRequest** class.
     *
     * @param   {ExchangeService}   	service             The service.
     */
    function SyncFolderHierarchyRequest(service) {
        var _this = _super.call(this, service, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError) || this;
        _this.propertySet = null;
        _this.syncFolderId = null;
        _this.syncState = null;
        return _this;
    }
    Object.defineProperty(SyncFolderHierarchyRequest.prototype, "PropertySet", {
        /**
         * Gets or sets the property set.
         *
         * @value	The property set
         */
        get: function () {
            return this.propertySet;
        },
        set: function (value) {
            this.propertySet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SyncFolderHierarchyRequest.prototype, "SyncFolderId", {
        /**
         * Gets or sets the sync folder id.
         *
         * @value	The sync folder id.
         */
        get: function () {
            return this.syncFolderId;
        },
        set: function (value) {
            this.syncFolderId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SyncFolderHierarchyRequest.prototype, "SyncState", {
        /**
         * Gets or sets the state of the sync.
         *
         * @value	The state of the sync.
         */
        get: function () {
            return this.syncState;
        },
        set: function (value) {
            this.syncState = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}   			responseIndex   Index of the response.
     * @return  {SyncFolderItemsResponse}		Response object.
     */
    SyncFolderHierarchyRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new SyncFolderHierarchyResponse_1.SyncFolderHierarchyResponse(this.PropertySet);
    };
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of items in response.
     */
    SyncFolderHierarchyRequest.prototype.GetExpectedResponseMessageCount = function () {
        return 1;
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    SyncFolderHierarchyRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      XML element name.
     */
    SyncFolderHierarchyRequest.prototype.GetResponseMessageXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.SyncFolderHierarchyResponseMessage;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    SyncFolderHierarchyRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.SyncFolderHierarchyResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    SyncFolderHierarchyRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.SyncFolderHierarchy;
    };
    /**
     * @internal Validate request.
     */
    SyncFolderHierarchyRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParam(this.PropertySet, "PropertySet");
        if (this.SyncFolderId != null) {
            this.SyncFolderId.Validate(this.Service.RequestedServerVersion);
        }
        this.PropertySet.ValidateForRequest(this, false /*summaryPropertiesOnly*/);
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    SyncFolderHierarchyRequest.prototype.WriteElementsToXml = function (writer) {
        this.PropertySet.WriteToXml(writer, ServiceObjectType_1.ServiceObjectType.Folder);
        if (this.SyncFolderId != null) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SyncFolderId);
            this.SyncFolderId.WriteToXml(writer);
            writer.WriteEndElement();
        }
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SyncState, this.SyncState);
    };
    return SyncFolderHierarchyRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.SyncFolderHierarchyRequest = SyncFolderHierarchyRequest;
