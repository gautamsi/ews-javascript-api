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
var MessageDisposition_1 = require("../../Enumerations/MessageDisposition");
var ConflictResolutionMode_1 = require("../../Enumerations/ConflictResolutionMode");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SendInvitationsOrCancellationsMode_1 = require("../../Enumerations/SendInvitationsOrCancellationsMode");
var ServiceVersionException_1 = require("../../Exceptions/ServiceVersionException");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var Strings_1 = require("../../Strings");
var UpdateItemResponse_1 = require("../Responses/UpdateItemResponse");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/** @internal */
var UpdateItemRequest = /** @class */ (function (_super) {
    __extends(UpdateItemRequest, _super);
    function UpdateItemRequest(service, errorHandlingModeServiceErrorHandling) {
        var _this = _super.call(this, service, errorHandlingModeServiceErrorHandling) || this;
        _this.items = [];
        _this.savedItemsDestinationFolder = null;
        _this.conflictResolutionMode = 0;
        _this.messageDisposition = null;
        _this.sendInvitationsOrCancellationsMode = null;
        _this.SuppressReadReceipts = false;
        return _this;
    }
    Object.defineProperty(UpdateItemRequest.prototype, "EmitTimeZoneHeader", {
        get: function () {
            for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.GetIsTimeZoneHeaderRequired(true /* isUpdateOpeartion */)) {
                    return true;
                }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateItemRequest.prototype, "MessageDisposition", {
        get: function () {
            return this.messageDisposition;
        },
        set: function (value) {
            this.messageDisposition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateItemRequest.prototype, "ConflictResolutionMode", {
        get: function () {
            return this.conflictResolutionMode;
        },
        set: function (value) {
            this.conflictResolutionMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateItemRequest.prototype, "SendInvitationsOrCancellationsMode", {
        get: function () {
            return this.sendInvitationsOrCancellationsMode;
        },
        set: function (value) {
            this.sendInvitationsOrCancellationsMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateItemRequest.prototype, "Items", {
        get: function () {
            return this.items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateItemRequest.prototype, "SavedItemsDestinationFolder", {
        get: function () {
            return this.savedItemsDestinationFolder;
        },
        set: function (value) {
            this.savedItemsDestinationFolder = value;
        },
        enumerable: true,
        configurable: true
    });
    UpdateItemRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new UpdateItemResponse_1.UpdateItemResponse(this.Items[responseIndex]); };
    UpdateItemRequest.prototype.GetExpectedResponseMessageCount = function () { return this.items.length; };
    UpdateItemRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    UpdateItemRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.UpdateItemResponseMessage; };
    UpdateItemRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.UpdateItemResponse; };
    UpdateItemRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.UpdateItem; };
    UpdateItemRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateParamCollection(this.Items, "Items");
        for (var i = 0; i < this.Items.length; i++) {
            if ((this.Items[i] == null) || this.Items[i].IsNew) {
                throw new Error(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ItemToUpdateCannotBeNullOrNew, i)); //ArgumentException
            }
        }
        if (this.SavedItemsDestinationFolder != null) {
            this.SavedItemsDestinationFolder.Validate(this.Service.RequestedServerVersion);
        }
        // Validate each item.
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var item = _a[_i];
            item.Validate();
        }
        if (this.SuppressReadReceipts && this.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ParameterIncompatibleWithRequestVersion, "SuppressReadReceipts", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
        }
    };
    /**@internal */
    UpdateItemRequest.prototype.WriteAttributesToXml = function (writer) {
        _super.prototype.WriteAttributesToXml.call(this, writer);
        if (this.MessageDisposition !== null) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.MessageDisposition, MessageDisposition_1.MessageDisposition[this.MessageDisposition]);
        }
        if (this.SuppressReadReceipts) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.SuppressReadReceipts, true);
        }
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.ConflictResolution, ConflictResolutionMode_1.ConflictResolutionMode[this.ConflictResolutionMode]);
        if (this.SendInvitationsOrCancellationsMode !== null) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.SendMeetingInvitationsOrCancellations, SendInvitationsOrCancellationsMode_1.SendInvitationsOrCancellationsMode[this.SendInvitationsOrCancellationsMode]);
        }
    };
    /**@internal */
    UpdateItemRequest.prototype.WriteElementsToXml = function (writer) {
        if (this.SavedItemsDestinationFolder != null) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SavedItemFolderId);
            this.SavedItemsDestinationFolder.WriteToXml(writer);
            writer.WriteEndElement();
        }
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ItemChanges);
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            item.WriteToXmlForUpdate(writer);
        }
        writer.WriteEndElement();
    };
    return UpdateItemRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.UpdateItemRequest = UpdateItemRequest;
