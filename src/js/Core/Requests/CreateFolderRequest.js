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
var CreateFolderResponse_1 = require("../Responses/CreateFolderResponse");
var XmlElementNames_1 = require("../XmlElementNames");
//import {EwsUtilities} from "../EwsUtilities";
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var Strings_1 = require("../../Strings");
var CreateRequest_1 = require("./CreateRequest");
/** @internal */
var CreateFolderRequest = /** @class */ (function (_super) {
    __extends(CreateFolderRequest, _super);
    function CreateFolderRequest(service, errorHandlingMode) {
        return _super.call(this, service, errorHandlingMode) || this;
    }
    Object.defineProperty(CreateFolderRequest.prototype, "Folders", {
        get: function () {
            return this.Objects;
        },
        set: function (value) {
            this.Objects = value;
        },
        enumerable: true,
        configurable: true
    });
    CreateFolderRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        //return new CreateFolderResponse(<Folder>EwsUtilities.GetEnumeratedObjectAt(this.Folders, responseIndex));
        if (this.Folders.length <= responseIndex) {
            throw new Error(Strings_1.Strings.IEnumerableDoesNotContainThatManyObject);
        }
        return new CreateFolderResponse_1.CreateFolderResponse(this.Folders[responseIndex]);
    };
    CreateFolderRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    CreateFolderRequest.prototype.GetObjectCollectionXmlElementName = function () { return XmlElementNames_1.XmlElementNames.Folders; };
    CreateFolderRequest.prototype.GetParentFolderXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ParentFolderId; };
    CreateFolderRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.CreateFolderResponseMessage; };
    CreateFolderRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.CreateFolderResponse; };
    CreateFolderRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.CreateFolder; };
    CreateFolderRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        //EwsUtilities.ValidateParam(this.Folders, "Folders");
        // Validate each folder.
        for (var _i = 0, _a = this.Folders; _i < _a.length; _i++) {
            var folder = _a[_i];
            folder.Validate();
        }
    };
    return CreateFolderRequest;
}(CreateRequest_1.CreateRequest));
exports.CreateFolderRequest = CreateFolderRequest;
