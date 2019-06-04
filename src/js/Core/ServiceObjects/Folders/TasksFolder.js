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
 * Represents a folder containing task items.
 */
var TasksFolder = /** @class */ (function (_super) {
    __extends(TasksFolder, _super);
    /**
     * Initializes an unsaved local instance of **SearchFolder**. To bind to an existing contacts folder, use SearchFolder.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the contacts folder will be bound.
     */
    function TasksFolder(service) {
        return _super.call(this, service) || this;
    }
    TasksFolder.Bind = function (service, idOrName, propertySet) {
        if (propertySet === void 0) { propertySet = PropertySet_1.PropertySet.FirstClassProperties; }
        if (idOrName instanceof FolderId_1.FolderId) {
            return service.BindToFolder(idOrName, propertySet, TypeContainer_1.TypeContainer.TasksFolder);
        }
        else if (typeof idOrName === 'number') {
            return service.BindToFolder(new FolderId_1.FolderId(idOrName), propertySet, TypeContainer_1.TypeContainer.TasksFolder);
        }
        EwsLogging_1.EwsLogging.Assert(false, "TasksFolder.Bind", "unknown paramete type");
        throw new Error("unknow parameter type. this should not be  reached");
    };
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    TasksFolder.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    TasksFolder.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.TasksFolder; };
    return TasksFolder;
}(Folder_1.Folder));
exports.TasksFolder = TasksFolder;
