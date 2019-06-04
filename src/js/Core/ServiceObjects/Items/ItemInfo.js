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
var Appointment_1 = require("./Appointment");
var Contact_1 = require("./Contact");
var ContactGroup_1 = require("./ContactGroup");
var Conversation_1 = require("./Conversation");
var EmailMessage_1 = require("./EmailMessage");
var Item_1 = require("./Item");
var MeetingCancellation_1 = require("./MeetingCancellation");
var MeetingMessage_1 = require("./MeetingMessage");
var MeetingRequest_1 = require("./MeetingRequest");
var MeetingResponse_1 = require("./MeetingResponse");
var PostItem_1 = require("./PostItem");
var Task_1 = require("./Task");
var ServiceObjectInfo_1 = require("../ServiceObjectInfo");
/**
 ** this is partial section of CreateEwsObjectFromXmlElementName from serviceobjectinfo, other parts are moved to different object type like folderinfo etc.
 * this to is to avoid circular referencing with requirejs/commonjs/nodejs
 */
var ItemInfo = /** @class */ (function (_super) {
    __extends(ItemInfo, _super);
    function ItemInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemInfo.prototype.InitializeServiceObjectClassMap = function () {
        // Appointment
        this.AddServiceObjectType(XmlElementNames_1.XmlElementNames.CalendarItem, "Appointment", function (srv) { return new Appointment_1.Appointment(srv); }, function (itemAttachment, isNew) { return new Appointment_1.Appointment(itemAttachment, isNew); });
        // Contact
        this.AddServiceObjectType(XmlElementNames_1.XmlElementNames.Contact, "Contact", function (srv) { return new Contact_1.Contact(srv); }, function (itemAttachment, isNew) { return new Contact_1.Contact(itemAttachment); });
        // ContactGroup
        this.AddServiceObjectType(XmlElementNames_1.XmlElementNames.DistributionList, "ContactGroup", function (srv) { return new ContactGroup_1.ContactGroup(srv); }, function (itemAttachment, isNew) { return new ContactGroup_1.ContactGroup(itemAttachment); });
        // Conversation
        this.AddServiceObjectType(XmlElementNames_1.XmlElementNames.Conversation, "Conversation", function (srv) { return new Conversation_1.Conversation(srv); }, null);
        // EmailMessage
        this.AddServiceObjectType(XmlElementNames_1.XmlElementNames.Message, "EmailMessage", function (srv) { return new EmailMessage_1.EmailMessage(srv); }, function (itemAttachment, isNew) { return new EmailMessage_1.EmailMessage(itemAttachment); });
        // Item
        this.AddServiceObjectType(XmlElementNames_1.XmlElementNames.Item, "Item", function (srv) { return new Item_1.Item(srv); }, function (itemAttachment, isNew) { return new Item_1.Item(itemAttachment); });
        // MeetingCancellation
        this.AddServiceObjectType(XmlElementNames_1.XmlElementNames.MeetingCancellation, "MeetingCancellation", function (srv) { return new MeetingCancellation_1.MeetingCancellation(srv); }, function (itemAttachment, isNew) { return new MeetingCancellation_1.MeetingCancellation(itemAttachment); });
        // MeetingMessage
        this.AddServiceObjectType(XmlElementNames_1.XmlElementNames.MeetingMessage, "MeetingMessage", function (srv) { return new MeetingMessage_1.MeetingMessage(srv); }, function (itemAttachment, isNew) { return new MeetingMessage_1.MeetingMessage(itemAttachment); });
        // MeetingRequest
        this.AddServiceObjectType(XmlElementNames_1.XmlElementNames.MeetingRequest, "MeetingRequest", function (srv) { return new MeetingRequest_1.MeetingRequest(srv); }, function (itemAttachment, isNew) { return new MeetingRequest_1.MeetingRequest(itemAttachment); });
        // MeetingResponse
        this.AddServiceObjectType(XmlElementNames_1.XmlElementNames.MeetingResponse, "MeetingResponse", function (srv) { return new MeetingResponse_1.MeetingResponse(srv); }, function (itemAttachment, isNew) { return new MeetingResponse_1.MeetingResponse(itemAttachment); });
        // PostItem
        this.AddServiceObjectType(XmlElementNames_1.XmlElementNames.PostItem, "PostItem", function (srv) { return new PostItem_1.PostItem(srv); }, function (itemAttachment, isNew) { return new PostItem_1.PostItem(itemAttachment); });
        // Task
        this.AddServiceObjectType(XmlElementNames_1.XmlElementNames.Task, "Task", function (srv) { return new Task_1.Task(srv); }, function (itemAttachment, isNew) { return new Task_1.Task(itemAttachment); });
    };
    return ItemInfo;
}(ServiceObjectInfo_1.ServiceObjectInfo));
exports.ItemInfo = ItemInfo;
