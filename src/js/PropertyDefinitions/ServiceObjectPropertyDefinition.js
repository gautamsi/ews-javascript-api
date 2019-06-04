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
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var EwsLogging_1 = require("../Core/EwsLogging");
var ExtensionMethods_1 = require("../ExtensionMethods");
var PropertyDefinitionBase_1 = require("./PropertyDefinitionBase");
/**
 * Represents a property definition for a service object.
 */
var ServiceObjectPropertyDefinition = /** @class */ (function (_super) {
    __extends(ServiceObjectPropertyDefinition, _super);
    function ServiceObjectPropertyDefinition(uri) {
        if (uri === void 0) { uri = null; }
        var _this = _super.call(this) || this;
        _this.uri = null;
        if (arguments.length == 1) {
            EwsLogging_1.EwsLogging.Assert(!ExtensionMethods_1.StringHelper.IsNullOrEmpty(uri), "ServiceObjectPropertyDefinition.ctor", "uri is null or empty");
            _this.uri = uri;
        }
        return _this;
    }
    Object.defineProperty(ServiceObjectPropertyDefinition.prototype, "Version", {
        /**
         * Gets the minimum Exchange version that supports this property.
         *
         * @value {ExchangeVersion} The version.
         */
        get: function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceObjectPropertyDefinition.prototype, "Uri", {
        /**
         * @internal Gets the URI of the property definition.
         */
        get: function () { return this.uri; },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    ServiceObjectPropertyDefinition.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.FieldURI; };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ServiceObjectPropertyDefinition.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.FieldURI, this.Uri);
    };
    return ServiceObjectPropertyDefinition;
}(PropertyDefinitionBase_1.PropertyDefinitionBase));
exports.ServiceObjectPropertyDefinition = ServiceObjectPropertyDefinition;
