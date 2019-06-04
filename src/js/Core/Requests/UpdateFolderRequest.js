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
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var UpdateFolderResponse_1 = require("../Responses/UpdateFolderResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * @internal Represents an UpdateFolder request.
 *
 * @sealed
*/
var UpdateFolderRequest = /** @class */ (function (_super) {
    __extends(UpdateFolderRequest, _super);
    /**
     * @internal Initializes a new instance of the **UpdateFolderRequest** class.
     *
     * @param   {ExchangeService}       service             The service.
     * @param   {ServiceErrorHandling}  errorHandlingMode   Indicates how errors should be handled.
     */
    function UpdateFolderRequest(service, errorHandlingMode) {
        var _this = _super.call(this, service, errorHandlingMode) || this;
        _this.folders = [];
        return _this;
    }
    Object.defineProperty(UpdateFolderRequest.prototype, "Folders", {
        /**
         * Gets the list of folders.
         *
         * @value   The folders.
         */
        get: function () {
            return this.folders;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   session         The session.
     * @param   {number}            responseIndex   Index of the response.
     * @return  {ServiceResponse}   Service response.
     */
    UpdateFolderRequest.prototype.CreateServiceResponse = function (session, responseIndex) {
        return new UpdateFolderResponse_1.UpdateFolderResponse(this.Folders[responseIndex]);
    };
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of expected response messages.
     */
    UpdateFolderRequest.prototype.GetExpectedResponseMessageCount = function () {
        return this.folders.length;
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    UpdateFolderRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      XML element name,
     */
    UpdateFolderRequest.prototype.GetResponseMessageXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.UpdateFolderResponseMessage;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    UpdateFolderRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.UpdateFolderResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    UpdateFolderRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.UpdateFolder;
    };
    /**
     * @internal Validates the request.
     */
    UpdateFolderRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(this.Folders, "Folders");
        for (var _i = 0, _a = this.folders; _i < _a.length; _i++) {
            var folder = _a[_i];
            if ((folder == null) || folder.IsNew) {
                throw new Error(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.FolderToUpdateCannotBeNullOrNew, this.folders.indexOf(folder)));
            }
            folder.Validate();
        }
    };
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    UpdateFolderRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.FolderChanges);
        for (var _i = 0, _a = this.folders; _i < _a.length; _i++) {
            var folder = _a[_i];
            folder.WriteToXmlForUpdate(writer);
        }
        writer.WriteEndElement();
    };
    return UpdateFolderRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.UpdateFolderRequest = UpdateFolderRequest;
