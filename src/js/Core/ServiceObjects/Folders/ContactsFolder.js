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
var EwsLogging_1 = require("../../EwsLogging");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var FolderId_1 = require("../../../ComplexProperties/FolderId");
var PropertySet_1 = require("../../PropertySet");
var TypeContainer_1 = require("../../../TypeContainer");
var XmlElementNames_1 = require("../../XmlElementNames");
var Folder_1 = require("./Folder");
/**
 * Represents a folder containing contacts.
 */
var ContactsFolder = /** @class */ (function (_super) {
    __extends(ContactsFolder, _super);
    /**
     * Initializes an unsaved local instance of **ContactsFolder**. To bind to an existing contacts folder, use ContactsFolder.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the contacts folder will be bound.
     */
    function ContactsFolder(service) {
        return _super.call(this, service) || this;
    }
    ContactsFolder.Bind = function (service, idOrName, propertySet) {
        if (propertySet === void 0) { propertySet = PropertySet_1.PropertySet.FirstClassProperties; }
        if (idOrName instanceof FolderId_1.FolderId) {
            return service.BindToFolder(idOrName, propertySet, TypeContainer_1.TypeContainer.ContactsFolder);
        }
        else if (typeof idOrName === 'number') {
            return service.BindToFolder(new FolderId_1.FolderId(idOrName), propertySet, TypeContainer_1.TypeContainer.ContactsFolder);
        }
        EwsLogging_1.EwsLogging.Assert(false, "ContactsFolder.Bind", "unknown paramete type");
        throw new Error("unknow parameter type. this should not be  reached");
    };
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    ContactsFolder.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    ContactsFolder.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ContactsFolder; };
    return ContactsFolder;
}(Folder_1.Folder));
exports.ContactsFolder = ContactsFolder;
