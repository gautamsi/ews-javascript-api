import altDict = require("../../AltDictionary");
import IndexerWithStringKey = altDict.IndexerWithStringKey;

import XmlElementNames = require("../XmlElementNames");
import ExchangeService = require("../ExchangeService");
import ItemAttachment = require("../../ComplexProperties/ItemAttachment");
import Appointment = require("./Items/Appointment");
import Item = require("./Items/Item");
import CalendarFolder = require("./Folders/CalendarFolder");
import Contact = require("./Items/Contact");
import ContactsFolder = require("./Folders/ContactsFolder");
import ContactGroup = require("./Items/ContactGroup");
import Conversation = require("./Items/Conversation");
import EmailMessage = require("./Items/EmailMessage");
import Folder = require("./Folders/Folder");
import MeetingMessage = require("./Items/MeetingMessage");
import MeetingCancellation = require("./Items/MeetingCancellation");
import MeetingRequest = require("./Items/MeetingRequest");
import MeetingResponse = require("./Items/MeetingResponse");
import PostItem = require("./Items/PostItem");
import Task = require("./Items/Task");
import TasksFolder = require("../ServiceObjects/Folders/ContactsFolder");
import SearchFolder = require("./Folders/SearchFolder");


class ServiceObjectInfo {

    get XmlElementNameToServiceObjectClassMap(): IndexerWithStringKey<any> { return this.xmlElementNameToServiceObjectClassMap; }//  System.Collections.Generic.Dictionary<string, System.Type>;
    get ServiceObjectConstructorsWithServiceParam(): IndexerWithStringKey<CreateServiceObjectWithServiceParam> { return this.serviceObjectConstructorsWithServiceParam; }// System.Collections.Generic.Dictionary<System.Type, CreateServiceObjectWithServiceParam>;
    get ServiceObjectConstructorsWithAttachmentParam(): IndexerWithStringKey<CreateServiceObjectWithAttachmentParam> { return this.serviceObjectConstructorsWithAttachmentParam; }//System.Collections.Generic.Dictionary<System.Type, CreateServiceObjectWithAttachmentParam>;
    private xmlElementNameToServiceObjectClassMap: IndexerWithStringKey<any>;//System.Collections.Generic.Dictionary<string, System.Type>;
    private serviceObjectConstructorsWithServiceParam: IndexerWithStringKey<CreateServiceObjectWithServiceParam>;//System.Collections.Generic.Dictionary<System.Type, CreateServiceObjectWithServiceParam>;
    private serviceObjectConstructorsWithAttachmentParam: IndexerWithStringKey<CreateServiceObjectWithAttachmentParam>;//System.Collections.Generic.Dictionary<System.Type, CreateServiceObjectWithAttachmentParam>;

    constructor() {
        this.xmlElementNameToServiceObjectClassMap = {};
        this.serviceObjectConstructorsWithServiceParam = {};
        this.serviceObjectConstructorsWithAttachmentParam = {};

        this.InitializeServiceObjectClassMap();
    }

    AddServiceObjectType(xmlElementName: string, type: string /*System.Type*/, createServiceObjectWithServiceParam: CreateServiceObjectWithServiceParam, createServiceObjectWithAttachmentParam: CreateServiceObjectWithAttachmentParam): any {
        this.xmlElementNameToServiceObjectClassMap[xmlElementName] = type;
        this.serviceObjectConstructorsWithServiceParam[xmlElementName] = createServiceObjectWithServiceParam;
        if (createServiceObjectWithAttachmentParam) { //!= null) {
            this.serviceObjectConstructorsWithAttachmentParam[xmlElementName] = createServiceObjectWithAttachmentParam;
        }
    }
    InitializeServiceObjectClassMap(): any {
        // Appointment
        this.AddServiceObjectType(
            XmlElementNames.CalendarItem,
            "Appointment",
            (srv) => { return new Appointment(srv); },
            (itemAttachment, isNew) => { return new Appointment(itemAttachment, isNew); });

        // CalendarFolder
        this.AddServiceObjectType(
            XmlElementNames.CalendarFolder,
            "CalendarFolder",
            (srv) => { return new CalendarFolder(srv); },
            null);

        // Contact
        this.AddServiceObjectType(
            XmlElementNames.Contact,
            "Contact",
            (srv) => { return new Contact(srv); },
            (itemAttachment, isNew) => { return new Contact(itemAttachment); });

        // ContactsFolder
        this.AddServiceObjectType(
            XmlElementNames.ContactsFolder,
            "ContactsFolder",
            (srv) => { return new ContactsFolder(srv); },
            null);

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

        // Folder
        this.AddServiceObjectType(
            XmlElementNames.Folder,
            "Folder",
            (srv) => { return new Folder(srv); },
            null);

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

        // SearchFolder
        this.AddServiceObjectType(
            XmlElementNames.SearchFolder,
            "SearchFolder",
            (srv) => { return new SearchFolder(srv); },
            null);

        // Task
        this.AddServiceObjectType(
            XmlElementNames.Task,
            "Task",
            (srv) => { return new Task(srv); },
            (itemAttachment, isNew) => { return new Task(itemAttachment); });

        // TasksFolder
        this.AddServiceObjectType(
            XmlElementNames.TasksFolder,
            "TasksFolder",
            (srv) => { return new TasksFolder(srv); },
            null);
    }
}


export = ServiceObjectInfo;


interface CreateServiceObjectWithServiceParam {
    (srv: ExchangeService): any;
}

interface CreateServiceObjectWithAttachmentParam {
    (itemAttachment: ItemAttachment, isNew: boolean): any
}

    //class CreateServiceObjectWithAttachmentParam extends System.MulticastDelegate {
    //    BeginInvoke(itemAttachment: ItemAttachment, isNew: boolean, callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("Not implemented.");}
    //    EndInvoke(result: System.IAsyncResult): any{ throw new Error("Not implemented.");}
    //    Invoke(itemAttachment: ItemAttachment, isNew: boolean): any{ throw new Error("Not implemented.");}
    //}
    //class CreateServiceObjectWithServiceParam extends System.MulticastDelegate {
    //    BeginInvoke(srv: ExchangeService, callback: System.AsyncCallback, object: any): System.IAsyncResult{ throw new Error("Not implemented.");}
    //    EndInvoke(result: System.IAsyncResult): any{ throw new Error("Not implemented.");}
    //    Invoke(srv: ExchangeService): any{ throw new Error("Not implemented.");}
    //}
