"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XmlElementNames_1 = require("../XmlElementNames");
/**
 * Moved part of CreateEwsObjectFromXmlElementName to different object type like FolderInfo, itemInfo etc
 */
var ServiceObjectInfo = /** @class */ (function () {
    function ServiceObjectInfo() {
        this.xmlElementNameToServiceObjectClassMap = {};
        this.serviceObjectConstructorsWithServiceParam = {};
        this.serviceObjectConstructorsWithAttachmentParam = {};
        this.InitializeServiceObjectClassMap();
    }
    Object.defineProperty(ServiceObjectInfo.prototype, "XmlElementNameToServiceObjectClassMap", {
        get: function () { return this.xmlElementNameToServiceObjectClassMap; } //  System.Collections.Generic.Dictionary<string, System.Type>;
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceObjectInfo.prototype, "ServiceObjectConstructorsWithServiceParam", {
        get: function () { return this.serviceObjectConstructorsWithServiceParam; } // System.Collections.Generic.Dictionary<System.Type, CreateServiceObjectWithServiceParam>;
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceObjectInfo.prototype, "ServiceObjectConstructorsWithAttachmentParam", {
        get: function () { return this.serviceObjectConstructorsWithAttachmentParam; } //System.Collections.Generic.Dictionary<System.Type, CreateServiceObjectWithAttachmentParam>;
        ,
        enumerable: true,
        configurable: true
    });
    ServiceObjectInfo.prototype.AddServiceObjectType = function (xmlElementName, type /*System.Type*/, createServiceObjectWithServiceParam, createServiceObjectWithAttachmentParam) {
        this.xmlElementNameToServiceObjectClassMap[xmlElementName] = type;
        this.serviceObjectConstructorsWithServiceParam[xmlElementName] = createServiceObjectWithServiceParam;
        if (createServiceObjectWithAttachmentParam) { //!= null) {
            this.serviceObjectConstructorsWithAttachmentParam[xmlElementName] = createServiceObjectWithAttachmentParam;
        }
    };
    ServiceObjectInfo.prototype.InitializeServiceObjectClassMap = function () {
        throw new Error("abstract - ServiceObjectInfo.ts - InitializeServiceObjectClassMap: must be implemented");
        /**
         * Folder Types ->  folderinfo
              
        // CalendarFolder
        this.AddServiceObjectType(
            XmlElementNames.CalendarFolder,
            "CalendarFolder",
            (srv) => { return new CalendarFolder(srv); },
            null);
                 
        // ContactsFolder
        this.AddServiceObjectType(
            XmlElementNames.ContactsFolder,
            "ContactsFolder",
            (srv) => { return new ContactsFolder(srv); },
            null);

        // Folder
        this.AddServiceObjectType(
            XmlElementNames.Folder,
            "Folder",
            (srv) => { return new Folder(srv); },
            null);

        // SearchFolder
        this.AddServiceObjectType(
            XmlElementNames.SearchFolder,
            "SearchFolder",
            (srv) => { return new SearchFolder(srv); },
            null);

        // TasksFolder
        this.AddServiceObjectType(
            XmlElementNames.TasksFolder,
            "TasksFolder",
            (srv) => { return new TasksFolder(srv); },
            null);
            
        */
        /**
         * Item Types -> iteminfo
        
        // Appointment
        this.AddServiceObjectType(
            XmlElementNames.CalendarItem,
            "Appointment",
            (srv) => { return new Appointment(srv); },
            (itemAttachment, isNew) => { return new Appointment(itemAttachment, isNew); });


        // Contact
        this.AddServiceObjectType(
            XmlElementNames.Contact,
            "Contact",
            (srv) => { return new Contact(srv); },
            (itemAttachment, isNew) => { return new Contact(itemAttachment); });

        // ContactGroup
        this.AddServiceObjectType(
            XmlElementNames.DistributionList,
            "ContactGroup",
            (srv) => { return new ContactGroup(srv); },
            (itemAttachment, isNew) => { return new ContactGroup(itemAttachment); });

        // Conversation
        this.AddServiceObjectType(
            XmlElementNames.Conversation,
            "Conversation",
            (srv) => { return new Conversation(srv); },
            null);

        // EmailMessage
        this.AddServiceObjectType(
            XmlElementNames.Message,
            "EmailMessage",
            (srv) => { return new EmailMessage(srv); },
            (itemAttachment, isNew) => { return new EmailMessage(itemAttachment); });

        // Item
        this.AddServiceObjectType(
            XmlElementNames.Item,
            "Item",
            (srv) => { return new Item(srv); },
            (itemAttachment, isNew) => { return new Item(itemAttachment); });

        // MeetingCancellation
        this.AddServiceObjectType(
            XmlElementNames.MeetingCancellation,
            "MeetingCancellation",
            (srv) => { return new MeetingCancellation(srv); },
            (itemAttachment, isNew) => { return new MeetingCancellation(itemAttachment); });

        // MeetingMessage
        this.AddServiceObjectType(
            XmlElementNames.MeetingMessage,
            "MeetingMessage",
            (srv) => { return new MeetingMessage(srv); },
            (itemAttachment, isNew) => { return new MeetingMessage(itemAttachment); });

        // MeetingRequest
        this.AddServiceObjectType(
            XmlElementNames.MeetingRequest,
            "MeetingRequest",
            (srv) => { return new MeetingRequest(srv); },
            (itemAttachment, isNew) => { return new MeetingRequest(itemAttachment); });

        // MeetingResponse
        this.AddServiceObjectType(
            XmlElementNames.MeetingResponse,
            "MeetingResponse",
            (srv) => { return new MeetingResponse(srv); },
            (itemAttachment, isNew) => { return new MeetingResponse(itemAttachment); });

        // PostItem
        this.AddServiceObjectType(
            XmlElementNames.PostItem,
            "PostItem",
            (srv) => { return new PostItem(srv); },
            (itemAttachment, isNew) => { return new PostItem(itemAttachment); });

        // Task
        this.AddServiceObjectType(
            XmlElementNames.Task,
            "Task",
            (srv) => { return new Task(srv); },
            (itemAttachment, isNew) => { return new Task(itemAttachment); });

        */
    };
    ServiceObjectInfo.prototype.CreateEwsObjectFromXmlElementName = function (service, xmlElementName) {
        //var itemClass = this.XmlElementNameToServiceObjectClassMap[xmlElementName];
        //if (itemClass) {
        //    return new itemClass(service);
        //no need of itemclass due to lack of type conversion and dictionary implementation in javascript
        var creationDelegate = this.ServiceObjectConstructorsWithServiceParam[xmlElementName];
        if (creationDelegate) {
            return creationDelegate(service);
        }
        else {
            return null;
        }
    };
    ServiceObjectInfo.prototype.CreateItemFromItemClass = function (itemAttachment, itemClass /*System.Type*/, isNew) {
        var creationDelegate = this.ServiceObjectConstructorsWithAttachmentParam[itemClass];
        if (creationDelegate) {
            return creationDelegate(itemAttachment, isNew);
        }
        else {
            return null;
        }
    };
    ServiceObjectInfo.IsFolderType = function (xmlElementName) {
        var folderTypes = [
            XmlElementNames_1.XmlElementNames.CalendarFolder,
            XmlElementNames_1.XmlElementNames.ContactsFolder,
            XmlElementNames_1.XmlElementNames.Folder,
            XmlElementNames_1.XmlElementNames.SearchFolder,
            XmlElementNames_1.XmlElementNames.TasksFolder,
        ];
        var itemType = [
            XmlElementNames_1.XmlElementNames.CalendarItem,
            XmlElementNames_1.XmlElementNames.Contact,
            XmlElementNames_1.XmlElementNames.DistributionList,
            XmlElementNames_1.XmlElementNames.Conversation,
            XmlElementNames_1.XmlElementNames.Message,
            XmlElementNames_1.XmlElementNames.Item,
            XmlElementNames_1.XmlElementNames.MeetingCancellation,
            XmlElementNames_1.XmlElementNames.MeetingMessage,
            XmlElementNames_1.XmlElementNames.MeetingRequest,
            XmlElementNames_1.XmlElementNames.MeetingResponse,
            XmlElementNames_1.XmlElementNames.PostItem,
            XmlElementNames_1.XmlElementNames.Task,
        ];
        return folderTypes.indexOf(xmlElementName) >= 0;
    };
    return ServiceObjectInfo;
}());
exports.ServiceObjectInfo = ServiceObjectInfo;
