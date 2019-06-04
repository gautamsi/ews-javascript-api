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
var FindConversationResponse_1 = require("../Responses/FindConversationResponse");
var MailboxSearchLocation_1 = require("../../Enumerations/MailboxSearchLocation");
var SeekToConditionItemView_1 = require("../../Search/SeekToConditionItemView");
var ServiceObjectType_1 = require("../../Enumerations/ServiceObjectType");
var ServiceVersionException_1 = require("../../Exceptions/ServiceVersionException");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a request to a Find Conversation operation
 *
 * @sealed
 */
var FindConversationRequest = /** @class */ (function (_super) {
    __extends(FindConversationRequest, _super);
    /**
     * @internal Initializes a new instance of the **FindConversationRequest** class.
     *
     * @param   {service}   service   The service.
     */
    function FindConversationRequest(service) {
        var _this = _super.call(this, service) || this;
        _this.view = null;
        _this.folderId = null;
        _this.queryString = null;
        _this.returnHighlightTerms = false;
        _this.mailboxScope = null;
        return _this;
    }
    Object.defineProperty(FindConversationRequest.prototype, "View", {
        /**
         * Gets or sets the view controlling the number of conversations returned.
         */
        get: function () {
            return this.view;
        },
        set: function (value) {
            this.view = value;
            if (this.view instanceof SeekToConditionItemView_1.SeekToConditionItemView) {
                this.view.SetServiceObjectType(ServiceObjectType_1.ServiceObjectType.Conversation);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FindConversationRequest.prototype, "FolderId", {
        /**
         * @internal Gets or sets folder id
         */
        get: function () {
            return this.folderId;
        },
        set: function (value) {
            this.folderId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FindConversationRequest.prototype, "QueryString", {
        /**
         * @internal Gets or sets the query string for search value.
         */
        get: function () {
            return this.queryString;
        },
        set: function (value) {
            this.queryString = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FindConversationRequest.prototype, "ReturnHighlightTerms", {
        /**
         * @internal Gets or sets the query string highlight terms.
         */
        get: function () {
            return this.returnHighlightTerms;
        },
        set: function (value) {
            this.returnHighlightTerms = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FindConversationRequest.prototype, "MailboxScope", {
        /**
         * @internal Gets or sets the mailbox search location to include in the search.
         */
        get: function () {
            return this.mailboxScope;
        },
        set: function (value) {
            this.mailboxScope = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Executes this request.
     *
     * @return  {Promise<FindConversationResponse>}      Service response  :Promise.
     */
    FindConversationRequest.prototype.Execute = function () {
        return this.InternalExecute().then(function (serviceResponse) {
            serviceResponse.ThrowIfNecessary();
            return serviceResponse;
        });
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    FindConversationRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    FindConversationRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.FindConversationResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    FindConversationRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.FindConversation;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    FindConversationRequest.prototype.ParseResponse = function (jsonBody) {
        var response = new FindConversationResponse_1.FindConversationResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Validate request.
     */
    FindConversationRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        this.view.InternalValidate(this);
        // query string parameter is only valid for Exchange2013 or higher
        //
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.queryString) &&
            this.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ParameterIncompatibleWithRequestVersion, "queryString", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
        }
        // ReturnHighlightTerms parameter is only valid for Exchange2013 or higher
        //
        if (this.ReturnHighlightTerms &&
            this.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ParameterIncompatibleWithRequestVersion, "returnHighlightTerms", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
        }
        // SeekToConditionItemView is only valid for Exchange2013 or higher
        //
        if ((this.View instanceof SeekToConditionItemView_1.SeekToConditionItemView) && //todo: better detection of types with "is"
            this.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ParameterIncompatibleWithRequestVersion, "SeekToConditionItemView", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
        }
        // MailboxScope is only valid for Exchange2013 or higher
        //
        if (this.MailboxScope &&
            this.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ParameterIncompatibleWithRequestVersion, "MailboxScope", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
        }
    };
    /**
     * @internal Writes XML attributes.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    FindConversationRequest.prototype.WriteAttributesToXml = function (writer) {
        this.View.WriteAttributesToXml(writer);
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    FindConversationRequest.prototype.WriteElementsToXml = function (writer) {
        // Emit the view element
        //
        this.View.WriteToXml(writer, null);
        // Emit the Sort Order
        //
        this.View.WriteOrderByToXml(writer);
        // Emit the Parent Folder Id
        //
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ParentFolderId);
        this.FolderId.WriteToXml(writer);
        writer.WriteEndElement();
        // Emit the MailboxScope flag
        // 
        if (this.MailboxScope) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.MailboxScope, MailboxSearchLocation_1.MailboxSearchLocation[this.MailboxScope]);
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.queryString)) {
            // Emit the QueryString
            //
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.QueryString);
            if (this.ReturnHighlightTerms) {
                writer.WriteAttributeString(XmlAttributeNames_1.XmlAttributeNames.ReturnHighlightTerms, this.ReturnHighlightTerms.toString().toLowerCase()); //todo: better tolower() .ToString().ToLowerInvariant());
            }
            writer.WriteValue(this.queryString, XmlElementNames_1.XmlElementNames.QueryString);
            writer.WriteEndElement();
        }
        if (this.Service.RequestedServerVersion >= ExchangeVersion_1.ExchangeVersion.Exchange2013) {
            if (this.View.PropertySet != null) {
                this.View.PropertySet.WriteToXml(writer, ServiceObjectType_1.ServiceObjectType.Conversation);
            }
        }
    };
    return FindConversationRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.FindConversationRequest = FindConversationRequest;
