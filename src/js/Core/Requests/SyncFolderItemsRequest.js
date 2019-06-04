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
var ArgumentException_1 = require("../../Exceptions/ArgumentException");
var EwsUtilities_1 = require("../EwsUtilities");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var ItemIdWrapperList_1 = require("../../Misc/ItemIdWrapperList");
var ServiceErrorHandling_1 = require("../../Enumerations/ServiceErrorHandling");
var ServiceObjectType_1 = require("../../Enumerations/ServiceObjectType");
var ServiceVersionException_1 = require("../../Exceptions/ServiceVersionException");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var SyncFolderItemsScope_1 = require("../../Enumerations/SyncFolderItemsScope");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
var SyncFolderItemsResponse_1 = require("../Responses/SyncFolderItemsResponse");
/**
 * @internal Represents a SyncFolderItems request.
 */
var SyncFolderItemsRequest = /** @class */ (function (_super) {
    __extends(SyncFolderItemsRequest, _super);
    /**
     * @internal Initializes a new instance of the **SyncFolderItemsRequest** class.
     *
     * @param   {ExchangeService}   	service             The service.
     */
    function SyncFolderItemsRequest(service) {
        var _this = _super.call(this, service, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError) || this;
        _this.propertySet = null;
        _this.syncFolderId = null;
        _this.syncScope = SyncFolderItemsScope_1.SyncFolderItemsScope.NormalItems;
        _this.syncState = null;
        _this.ignoredItemIds = new ItemIdWrapperList_1.ItemIdWrapperList();
        _this.maxChangesReturned = 100;
        _this.numberOfDays = 0;
        return _this;
    }
    Object.defineProperty(SyncFolderItemsRequest.prototype, "PropertySet", {
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
    Object.defineProperty(SyncFolderItemsRequest.prototype, "SyncFolderId", {
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
    Object.defineProperty(SyncFolderItemsRequest.prototype, "SyncScope", {
        /**
         * Gets or sets the scope of the sync.
         *
         * @value	The scope of the sync.
         */
        get: function () {
            return this.syncScope;
        },
        set: function (value) {
            this.syncScope = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SyncFolderItemsRequest.prototype, "SyncState", {
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
    Object.defineProperty(SyncFolderItemsRequest.prototype, "IgnoredItemIds", {
        /**
         * Gets the list of ignored item ids.
         *
         * @value	The ignored item ids.
         */
        get: function () {
            return this.ignoredItemIds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SyncFolderItemsRequest.prototype, "MaxChangesReturned", {
        /**
         * Gets or sets the maximum number of changes returned by SyncFolderItems.
         * Values must be between 1 and 512.
         * Default is 100.
         */
        get: function () {
            return this.maxChangesReturned;
        },
        set: function (value) {
            if (value >= 1 && value <= 512) {
                this.maxChangesReturned = value;
            }
            else {
                throw new ArgumentException_1.ArgumentException(Strings_1.Strings.MaxChangesMustBeBetween1And512);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SyncFolderItemsRequest.prototype, "NumberOfDays", {
        /**
         * Gets or sets the number of days of content returned by SyncFolderItems.
         * Zero means return all content.
         * Default is zero.
         */
        get: function () {
            return this.numberOfDays;
        },
        set: function (value) {
            if (value >= 0) {
                this.numberOfDays = value;
            }
            else {
                throw new ArgumentException_1.ArgumentException(Strings_1.Strings.NumberOfDaysMustBePositive);
            }
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
    SyncFolderItemsRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new SyncFolderItemsResponse_1.SyncFolderItemsResponse(this.PropertySet);
    };
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of items in response.
     */
    SyncFolderItemsRequest.prototype.GetExpectedResponseMessageCount = function () {
        return 1;
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    SyncFolderItemsRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      XML element name.
     */
    SyncFolderItemsRequest.prototype.GetResponseMessageXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.SyncFolderItemsResponseMessage;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    SyncFolderItemsRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.SyncFolderItemsResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    SyncFolderItemsRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.SyncFolderItems;
    };
    /**
     * @internal Validate request.
     */
    SyncFolderItemsRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParam(this.PropertySet, "PropertySet");
        EwsUtilities_1.EwsUtilities.ValidateParam(this.SyncFolderId, "SyncFolderId");
        this.SyncFolderId.Validate(this.Service.RequestedServerVersion);
        // SyncFolderItemsScope enum was introduced with Exchange2010.  Only
        // value NormalItems is valid with previous server versions.
        if (this.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2010 &&
            this.syncScope != SyncFolderItemsScope_1.SyncFolderItemsScope.NormalItems) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.EnumValueIncompatibleWithRequestVersion, SyncFolderItemsScope_1.SyncFolderItemsScope[this.syncScope], "SyncFolderItemsScope", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2010]));
        }
        // NumberOfDays was introduced with Exchange 2013.
        if (this.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013 &&
            this.NumberOfDays != 0) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ParameterIncompatibleWithRequestVersion, "numberOfDays", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
        }
        // SyncFolderItems can only handle summary properties
        this.PropertySet.ValidateForRequest(this, true /*summaryPropertiesOnly*/);
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    SyncFolderItemsRequest.prototype.WriteElementsToXml = function (writer) {
        this.PropertySet.WriteToXml(writer, ServiceObjectType_1.ServiceObjectType.Item);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SyncFolderId);
        this.SyncFolderId.WriteToXml(writer);
        writer.WriteEndElement();
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SyncState, this.SyncState);
        this.IgnoredItemIds.WriteToXml(writer, XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.Ignore);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.MaxChangesReturned, this.MaxChangesReturned);
        if (this.Service.RequestedServerVersion >= ExchangeVersion_1.ExchangeVersion.Exchange2010) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SyncScope, SyncFolderItemsScope_1.SyncFolderItemsScope[this.syncScope]);
        }
        if (this.NumberOfDays != 0) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.NumberOfDays, this.numberOfDays);
        }
    };
    return SyncFolderItemsRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.SyncFolderItemsRequest = SyncFolderItemsRequest;
