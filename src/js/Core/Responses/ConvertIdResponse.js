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
var AlternateId_1 = require("../../Misc/IdConversion/AlternateId");
var AlternatePublicFolderId_1 = require("../../Misc/IdConversion/AlternatePublicFolderId");
var AlternatePublicFolderItemId_1 = require("../../Misc/IdConversion/AlternatePublicFolderItemId");
var EwsLogging_1 = require("../EwsLogging");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * Represents the response to an individual Id conversion operation.
 *
 * @sealed
 */
var ConvertIdResponse = /** @class */ (function (_super) {
    __extends(ConvertIdResponse, _super);
    /**
     * @internal Initializes a new instance of the **ConvertIdResponse** class.
     */
    function ConvertIdResponse() {
        return _super.call(this) || this;
    }
    Object.defineProperty(ConvertIdResponse.prototype, "ConvertedId", {
        /**
         * Gets the converted Id.
         */
        get: function () {
            return this.convertedId;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ConvertIdResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        var responseObject = jsObject[XmlElementNames_1.XmlElementNames.AlternateId];
        var alternateIdClass = responseObject[XmlAttributeNames_1.XmlAttributeNames.Type];
        if (alternateIdClass) {
            alternateIdClass = alternateIdClass.replace("t:", "");
        }
        switch (alternateIdClass) {
            case AlternateId_1.AlternateId.SchemaTypeName:
                this.convertedId = new AlternateId_1.AlternateId();
                break;
            case AlternatePublicFolderId_1.AlternatePublicFolderId.SchemaTypeName:
                this.convertedId = new AlternatePublicFolderId_1.AlternatePublicFolderId();
                break;
            case AlternatePublicFolderItemId_1.AlternatePublicFolderItemId.SchemaTypeName:
                this.convertedId = new AlternatePublicFolderItemId_1.AlternatePublicFolderItemId();
                break;
            default:
                EwsLogging_1.EwsLogging.Assert(false, "ConvertIdResponse.ReadElementsFromXml", ExtensionMethods_1.StringHelper.Format("Unknown alternate Id class: {0}", alternateIdClass));
                break;
        }
        this.convertedId.LoadAttributesFromXmlJsObject(responseObject);
    };
    return ConvertIdResponse;
}(ServiceResponse_1.ServiceResponse));
exports.ConvertIdResponse = ConvertIdResponse;
