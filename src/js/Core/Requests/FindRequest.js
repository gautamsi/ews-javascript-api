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
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var ServiceVersionException_1 = require("../../Exceptions/ServiceVersionException");
var Strings_1 = require("../../Strings");
var SeekToConditionItemView_1 = require("../../Search/SeekToConditionItemView");
var ServiceLocalException_1 = require("../../Exceptions/ServiceLocalException");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var FolderIdWrapperList_1 = require("../../Misc/FolderIdWrapperList");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/** @internal */
var FindRequest = /** @class */ (function (_super) {
    __extends(FindRequest, _super);
    //private searchFilter: SearchFilter;  - no backing property needed
    //private queryString: string;
    //private returnHighlightTerms: boolean;
    //private view: ViewBase;
    function FindRequest(service, errorHandlingMode) {
        var _this = _super.call(this, service, errorHandlingMode) || this;
        _this.SearchFilter = null;
        _this.QueryString = null;
        _this.ReturnHighlightTerms = null;
        _this.View = null;
        _this.parentFolderIds = new FolderIdWrapperList_1.FolderIdWrapperList();
        return _this;
    }
    Object.defineProperty(FindRequest.prototype, "ParentFolderIds", {
        get: function () { return this.parentFolderIds; },
        enumerable: true,
        configurable: true
    });
    FindRequest.prototype.GetExpectedResponseMessageCount = function () { return this.ParentFolderIds.Count; };
    FindRequest.prototype.GetGroupBy = function () { return null; };
    FindRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        this.View.InternalValidate(this);
        // query string parameter is only valid for Exchange2010 or higher
        //
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.QueryString) &&
            this.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2010) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ParameterIncompatibleWithRequestVersion, "queryString", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2010]));
        }
        // ReturnHighlightTerms parameter is only valid for Exchange2013 or higher
        //
        if (this.ReturnHighlightTerms &&
            this.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ParameterIncompatibleWithRequestVersion, "returnHighlightTerms", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
        }
        // SeekToConditionItemView is only valid for Exchange2013 or higher
        //
        if ((this.View instanceof SeekToConditionItemView_1.SeekToConditionItemView) &&
            this.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ParameterIncompatibleWithRequestVersion, "SeekToConditionItemView", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.QueryString) &&
            this.SearchFilter != null) {
            throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.BothSearchFilterAndQueryStringCannotBeSpecified);
        }
    };
    /**@internal */
    FindRequest.prototype.WriteAttributesToXml = function (writer) {
        _super.prototype.WriteAttributesToXml.call(this, writer);
        this.View.WriteAttributesToXml(writer);
    };
    /**@internal */
    FindRequest.prototype.WriteElementsToXml = function (writer) {
        this.View.WriteToXml(writer, this.GetGroupBy());
        if (this.SearchFilter != null) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.Restriction);
            this.SearchFilter.WriteToXml(writer);
            writer.WriteEndElement(); // Restriction
        }
        this.View.WriteOrderByToXml(writer);
        this.ParentFolderIds.WriteToXml(writer, XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ParentFolderIds);
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.QueryString)) {
            // Emit the QueryString
            //
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.QueryString);
            if (this.ReturnHighlightTerms) {
                writer.WriteAttributeString(XmlAttributeNames_1.XmlAttributeNames.ReturnHighlightTerms, this.ReturnHighlightTerms.toString());
            }
            writer.WriteValue(this.QueryString, XmlElementNames_1.XmlElementNames.QueryString);
            writer.WriteEndElement();
        }
    };
    return FindRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.FindRequest = FindRequest;
