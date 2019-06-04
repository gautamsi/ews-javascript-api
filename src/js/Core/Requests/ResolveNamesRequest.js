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
var ResolveNameSearchLocation_1 = require("../../Enumerations/ResolveNameSearchLocation");
var PropertySet_1 = require("../PropertySet");
var FolderIdWrapperList_1 = require("../../Misc/FolderIdWrapperList");
var ServiceErrorHandling_1 = require("../../Enumerations/ServiceErrorHandling");
var LazyMember_1 = require("../LazyMember");
var EwsLogging_1 = require("../EwsLogging");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var AltDictionary_1 = require("../../AltDictionary");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var ResolveNamesResponse_1 = require("../Responses/ResolveNamesResponse");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/** @internal */
var ResolveNamesRequest = /** @class */ (function (_super) {
    __extends(ResolveNamesRequest, _super);
    function ResolveNamesRequest(service) {
        var _this = _super.call(this, service, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError) || this;
        _this.nameToResolve = null;
        _this.returnFullContactData = false;
        _this.searchLocation = ResolveNameSearchLocation_1.ResolveNameSearchLocation.DirectoryOnly;
        _this.contactDataPropertySet = null;
        _this.parentFolderIds = new FolderIdWrapperList_1.FolderIdWrapperList();
        return _this;
    }
    Object.defineProperty(ResolveNamesRequest.prototype, "NameToResolve", {
        get: function () {
            return this.nameToResolve;
        },
        set: function (value) {
            this.nameToResolve = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolveNamesRequest.prototype, "ReturnFullContactData", {
        get: function () {
            return this.returnFullContactData;
        },
        set: function (value) {
            this.returnFullContactData = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolveNamesRequest.prototype, "SearchLocation", {
        get: function () {
            return this.searchLocation;
        },
        set: function (value) {
            this.searchLocation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolveNamesRequest.prototype, "ContactDataPropertySet", {
        get: function () {
            return this.contactDataPropertySet;
        },
        set: function (value) {
            this.contactDataPropertySet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResolveNamesRequest.prototype, "ParentFolderIds", {
        get: function () {
            return this.parentFolderIds;
        },
        enumerable: true,
        configurable: true
    });
    ResolveNamesRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new ResolveNamesResponse_1.ResolveNamesResponse(service); };
    ResolveNamesRequest.prototype.GetExpectedResponseMessageCount = function () { return 1; };
    ResolveNamesRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    ResolveNamesRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ResolveNamesResponseMessage; };
    ResolveNamesRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ResolveNamesResponse; };
    ResolveNamesRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ResolveNames; };
    ResolveNamesRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateNonBlankStringParam(this.NameToResolve, "NameToResolve");
    };
    /**@internal */
    ResolveNamesRequest.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.ReturnFullContactData, this.ReturnFullContactData);
        var searchScope = { outValue: null };
        ResolveNamesRequest.searchScopeMap.Member.tryGetValue(this.SearchLocation, searchScope);
        EwsLogging_1.EwsLogging.Assert(!ExtensionMethods_1.StringHelper.IsNullOrEmpty(searchScope.outValue), "ResolveNameRequest.WriteAttributesToXml", "The specified search location cannot be mapped to an EWS search scope.");
        var propertySet = { outValue: null };
        if (this.contactDataPropertySet != null) {
            PropertySet_1.PropertySet.DefaultPropertySetMap.Member.tryGetValue(this.contactDataPropertySet.BasePropertySet, propertySet);
        }
        if (!this.Service.Exchange2007CompatibilityMode) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.SearchScope, searchScope.outValue);
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(propertySet.outValue)) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.ContactDataShape, propertySet.outValue);
        }
    };
    /**@internal */
    ResolveNamesRequest.prototype.WriteElementsToXml = function (writer) {
        this.ParentFolderIds.WriteToXml(writer, XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ParentFolderIds);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.UnresolvedEntry, this.NameToResolve);
    };
    ResolveNamesRequest.searchScopeMap = new LazyMember_1.LazyMember(function () {
        var map = new AltDictionary_1.Dictionary(function (rnsl) { return ResolveNameSearchLocation_1.ResolveNameSearchLocation[rnsl]; });
        map.Add(ResolveNameSearchLocation_1.ResolveNameSearchLocation.DirectoryOnly, "ActiveDirectory");
        map.Add(ResolveNameSearchLocation_1.ResolveNameSearchLocation.DirectoryThenContacts, "ActiveDirectoryContacts");
        map.Add(ResolveNameSearchLocation_1.ResolveNameSearchLocation.ContactsOnly, "Contacts");
        map.Add(ResolveNameSearchLocation_1.ResolveNameSearchLocation.ContactsThenDirectory, "ContactsActiveDirectory");
        return map;
    });
    return ResolveNamesRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.ResolveNamesRequest = ResolveNamesRequest;
