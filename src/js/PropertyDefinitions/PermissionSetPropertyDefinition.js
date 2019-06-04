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
var FolderPermissionCollection_1 = require("../ComplexProperties/FolderPermissionCollection");
var TypeContainer_1 = require("../TypeContainer");
var EwsLogging_1 = require("../Core/EwsLogging");
var ComplexPropertyDefinitionBase_1 = require("./ComplexPropertyDefinitionBase");
/**
 * @internal Represents permission set property definition.
 */
var PermissionSetPropertyDefinition = /** @class */ (function (_super) {
    __extends(PermissionSetPropertyDefinition, _super);
    /**
     * @internal Initializes a new instance of the **PermissionSetPropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    function PermissionSetPropertyDefinition(propertyName, xmlElementName, uri, flags, version) {
        return _super.call(this, propertyName, xmlElementName, uri, flags, version) || this;
    }
    Object.defineProperty(PermissionSetPropertyDefinition.prototype, "Type", {
        /**
         * Gets the property type.
         */
        get: function () {
            return undefined; // new Type("FolderPermissionCollection");
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates the property instance.
     *
     * @param   {ServiceObject}   owner   The owner.
     * @return  {ComplexProperty}       ComplexProperty.
     */
    PermissionSetPropertyDefinition.prototype.CreatePropertyInstance = function (owner) {
        var folder = owner instanceof TypeContainer_1.TypeContainer.Folder ? owner : null;
        EwsLogging_1.EwsLogging.Assert(folder !== null, "PermissionCollectionPropertyDefinition.CreatePropertyInstance", "The owner parameter is not of type Folder or a derived class.");
        return new FolderPermissionCollection_1.FolderPermissionCollection(folder);
    };
    return PermissionSetPropertyDefinition;
}(ComplexPropertyDefinitionBase_1.ComplexPropertyDefinitionBase));
exports.PermissionSetPropertyDefinition = PermissionSetPropertyDefinition;
