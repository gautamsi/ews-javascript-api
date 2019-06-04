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
var IdFormat_1 = require("../../Enumerations/IdFormat");
var XmlAttributeNames_1 = require("../../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var AlternateIdBase_1 = require("./AlternateIdBase");
/**
 * Represents the Id of a public folder expressed in a specific format.
 */
var AlternatePublicFolderId = /** @class */ (function (_super) {
    __extends(AlternatePublicFolderId, _super);
    function AlternatePublicFolderId(format, folderId) {
        if (format === void 0) { format = IdFormat_1.IdFormat.EwsLegacyId; }
        if (folderId === void 0) { folderId = null; }
        var _this = _super.call(this, format) || this;
        /**
         * The Id of the public folder.
         */
        _this.FolderId = null;
        _this.FolderId = folderId;
        return _this;
    }
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    AlternatePublicFolderId.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.AlternatePublicFolderId;
    };
    /**
     * @internal Loads the attributes from Xml JsObject.
     *
     * @param   {any}   responseObject   The response object.
     */
    AlternatePublicFolderId.prototype.LoadAttributesFromXmlJsObject = function (responseObject) {
        _super.prototype.LoadAttributesFromXmlJsObject.call(this, responseObject);
        this.FolderId = responseObject[XmlAttributeNames_1.XmlAttributeNames.FolderId];
    };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    AlternatePublicFolderId.prototype.WriteAttributesToXml = function (writer) {
        _super.prototype.WriteAttributesToXml.call(this, writer);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.FolderId, this.FolderId);
    };
    /**
     * @internal Name of schema type used for AlternatePublicFolderId element.
     */
    AlternatePublicFolderId.SchemaTypeName = "AlternatePublicFolderIdType";
    return AlternatePublicFolderId;
}(AlternateIdBase_1.AlternateIdBase));
exports.AlternatePublicFolderId = AlternatePublicFolderId;
