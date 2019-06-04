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
var Guid_1 = require("../Guid");
var ExtensionMethods_1 = require("../ExtensionMethods");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents the retention tag of an item.
 */
var RetentionTagBase = /** @class */ (function (_super) {
    __extends(RetentionTagBase, _super);
    /**
     * Initializes a new instance of the **RetentionTagBase** class.
     *
     * @param {string}  xmlElementName   Xml element name.
     */
    function RetentionTagBase(xmlElementName) {
        var _this = _super.call(this) || this;
        /**
         * Xml element name.
         */
        _this.xmlElementName = null;
        /**
         * Is explicit.
         */
        _this.isExplicit = false;
        /**
         * Retention id.
         */
        _this.retentionId = null;
        _this.xmlElementName = xmlElementName;
        return _this;
    }
    Object.defineProperty(RetentionTagBase.prototype, "IsExplicit", {
        /**
         * Gets or sets if the tag is explicit.
         */
        get: function () {
            return this.isExplicit;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.isExplicit; }, setValue: function (updateValue) { _this.isExplicit = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RetentionTagBase.prototype, "RetentionId", {
        /**
         * Gets or sets the retention id.
         */
        get: function () {
            return this.retentionId;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.retentionId; }, setValue: function (updateValue) { _this.retentionId = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    RetentionTagBase.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlAttributeNames_1.XmlAttributeNames.IsExplicit:
                    this.isExplicit = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case this.xmlElementName:
                    this.retentionId = new Guid_1.Guid(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * Returns a **String** that represents the current **Object**.
     *
     * @return  {string}      A **String** that represents the current **Object**.
     */
    RetentionTagBase.prototype.ToString = function () {
        if (this.retentionId == null || this.retentionId == Guid_1.Guid.Empty) {
            return ExtensionMethods_1.StringHelper.Empty;
        }
        else {
            return this.retentionId.ToString();
        }
    };
    RetentionTagBase.prototype.toString = function () { return this.ToString(); };
    /**
     * @internal Writes attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    RetentionTagBase.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.IsExplicit, this.isExplicit);
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    RetentionTagBase.prototype.WriteElementsToXml = function (writer) {
        if (this.retentionId != null && this.retentionId != Guid_1.Guid.Empty) {
            writer.WriteValue(this.retentionId.ToString(), this.xmlElementName);
        }
    };
    return RetentionTagBase;
}(ComplexProperty_1.ComplexProperty));
exports.RetentionTagBase = RetentionTagBase;
