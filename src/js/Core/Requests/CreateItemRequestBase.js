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
var XmlElementNames_1 = require("../XmlElementNames");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var MessageDisposition_1 = require("../../Enumerations/MessageDisposition");
var SendInvitationsMode_1 = require("../../Enumerations/SendInvitationsMode");
var CreateRequest_1 = require("./CreateRequest");
/** @internal */
var CreateItemRequestBase = /** @class */ (function (_super) {
    __extends(CreateItemRequestBase, _super);
    function CreateItemRequestBase(service, errorHandlingModeServiceErrorHandling) {
        var _this = _super.call(this, service, errorHandlingModeServiceErrorHandling) || this;
        //private messageDisposition: MessageDisposition; - backing property not needed
        //private sendInvitationsMode: SendInvitationsMode;
        _this.MessageDisposition = null;
        _this.SendInvitationsMode = null;
        return _this;
    }
    Object.defineProperty(CreateItemRequestBase.prototype, "Items", {
        get: function () {
            return this.Objects;
        },
        set: function (value) {
            this.Objects = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateItemRequestBase.prototype, "EmitTimeZoneHeader", {
        get: function () {
            for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
                var serviceObject = _a[_i];
                if (serviceObject.GetIsTimeZoneHeaderRequired(false /* isUpdateOperation */)) {
                    return true;
                }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    CreateItemRequestBase.prototype.AddJsonProperties = function (jsonRequest, service) { throw new Error("CreateItemRequestBase.ts - AddJsonProperties : Not implemented."); };
    CreateItemRequestBase.prototype.GetObjectCollectionXmlElementName = function () { return XmlElementNames_1.XmlElementNames.Items; };
    CreateItemRequestBase.prototype.GetParentFolderXmlElementName = function () { return XmlElementNames_1.XmlElementNames.SavedItemFolderId; };
    CreateItemRequestBase.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.CreateItemResponseMessage; };
    CreateItemRequestBase.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.CreateItemResponse; };
    CreateItemRequestBase.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.CreateItem; };
    CreateItemRequestBase.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateParam(this.Items, "Items");
    };
    /**@internal */
    CreateItemRequestBase.prototype.WriteAttributesToXml = function (writer) {
        _super.prototype.WriteAttributesToXml.call(this, writer);
        if (this.MessageDisposition !== null) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.MessageDisposition, MessageDisposition_1.MessageDisposition[this.MessageDisposition]);
        }
        if (this.SendInvitationsMode !== null) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.SendMeetingInvitations, SendInvitationsMode_1.SendInvitationsMode[this.SendInvitationsMode]);
        }
    };
    return CreateItemRequestBase;
}(CreateRequest_1.CreateRequest));
exports.CreateItemRequestBase = CreateItemRequestBase;
