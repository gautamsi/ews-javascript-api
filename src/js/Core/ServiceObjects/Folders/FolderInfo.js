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
var XmlElementNames_1 = require("../../XmlElementNames");
var CalendarFolder_1 = require("./CalendarFolder");
var ContactsFolder_1 = require("./ContactsFolder");
var Folder_1 = require("./Folder");
var SearchFolder_1 = require("./SearchFolder");
var TasksFolder_1 = require("./TasksFolder");
var ServiceObjectInfo_1 = require("../ServiceObjectInfo");
/**
 * this is partial section of CreateEwsObjectFromXmlElementName from serviceobjectinfo, other parts are moved to different object type like itemInfo etc.
 * this to is to avoid circular referencing with requirejs/commonjs/nodejs
 */
var FolderInfo = /** @class */ (function (_super) {
    __extends(FolderInfo, _super);
    function FolderInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FolderInfo.prototype.InitializeServiceObjectClassMap = function () {
        // CalendarFolder
        this.AddServiceObjectType(XmlElementNames_1.XmlElementNames.CalendarFolder, "CalendarFolder", function (srv) { return new CalendarFolder_1.CalendarFolder(srv); }, null);
        // ContactsFolder
        this.AddServiceObjectType(XmlElementNames_1.XmlElementNames.ContactsFolder, "ContactsFolder", function (srv) { return new ContactsFolder_1.ContactsFolder(srv); }, null);
        // Folder
        this.AddServiceObjectType(XmlElementNames_1.XmlElementNames.Folder, "Folder", function (srv) { return new Folder_1.Folder(srv); }, null);
        // SearchFolder
        this.AddServiceObjectType(XmlElementNames_1.XmlElementNames.SearchFolder, "SearchFolder", function (srv) { return new SearchFolder_1.SearchFolder(srv); }, null);
        // TasksFolder
        this.AddServiceObjectType(XmlElementNames_1.XmlElementNames.TasksFolder, "TasksFolder", function (srv) { return new TasksFolder_1.TasksFolder(srv); }, null);
    };
    FolderInfo.prototype.CreateEwsObjectFromXmlElementName = function (service, xmlElementName) {
        //var itemClass = this.XmlElementNameToServiceObjectClassMap[xmlElementName];
        //if (itemClass) {
        //    return new itemClass(service);
        //no need of itemclass due to lack of type conversion and dictionary implementation in javascript
        var creationDelegate = this.ServiceObjectConstructorsWithServiceParam[xmlElementName];
        if (creationDelegate) {
            return creationDelegate(service);
        }
        else
            return null;
    };
    return FolderInfo;
}(ServiceObjectInfo_1.ServiceObjectInfo));
exports.FolderInfo = FolderInfo;
