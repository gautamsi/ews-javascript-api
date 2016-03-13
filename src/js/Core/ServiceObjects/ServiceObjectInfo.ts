import {ServiceObject} from "./ServiceObject";
import {IndexerWithStringKey} from "../../AltDictionary";
import {Item} from "./Items/Item";

import {CreateServiceObjectWithAttachmentParam, CreateServiceObjectWithServiceParam} from "../../Misc/DelegateTypes";

import {XmlElementNames} from "../XmlElementNames";
import {ExchangeService} from "../ExchangeService";
import {ItemAttachment} from "../../ComplexProperties/ItemAttachment";

/**
 * Moved part of CreateEwsObjectFromXmlElementName to different object type like FolderInfo, itemInfo etc
 */
export class ServiceObjectInfo {

    get XmlElementNameToServiceObjectClassMap(): IndexerWithStringKey<string> { return this.xmlElementNameToServiceObjectClassMap; }//  System.Collections.Generic.Dictionary<string, System.Type>;
    get ServiceObjectConstructorsWithServiceParam(): IndexerWithStringKey<CreateServiceObjectWithServiceParam> { return this.serviceObjectConstructorsWithServiceParam; }// System.Collections.Generic.Dictionary<System.Type, CreateServiceObjectWithServiceParam>;
    get ServiceObjectConstructorsWithAttachmentParam(): IndexerWithStringKey<CreateServiceObjectWithAttachmentParam> { return this.serviceObjectConstructorsWithAttachmentParam; }//System.Collections.Generic.Dictionary<System.Type, CreateServiceObjectWithAttachmentParam>;
    private xmlElementNameToServiceObjectClassMap: IndexerWithStringKey<string>;//System.Collections.Generic.Dictionary<string, System.Type>;
    private serviceObjectConstructorsWithServiceParam: IndexerWithStringKey<CreateServiceObjectWithServiceParam>;//System.Collections.Generic.Dictionary<System.Type, CreateServiceObjectWithServiceParam>;
    private serviceObjectConstructorsWithAttachmentParam: IndexerWithStringKey<CreateServiceObjectWithAttachmentParam>;//System.Collections.Generic.Dictionary<System.Type, CreateServiceObjectWithAttachmentParam>;

    constructor() {
        this.xmlElementNameToServiceObjectClassMap = {};
        this.serviceObjectConstructorsWithServiceParam = {};
        this.serviceObjectConstructorsWithAttachmentParam = {};

        this.InitializeServiceObjectClassMap();
    }

    protected AddServiceObjectType(xmlElementName: string, type: string /*System.Type*/, createServiceObjectWithServiceParam: CreateServiceObjectWithServiceParam, createServiceObjectWithAttachmentParam: CreateServiceObjectWithAttachmentParam): any {
        this.xmlElementNameToServiceObjectClassMap[xmlElementName] = type;
        this.serviceObjectConstructorsWithServiceParam[xmlElementName] = createServiceObjectWithServiceParam;
        if (createServiceObjectWithAttachmentParam) { //!= null) {
            this.serviceObjectConstructorsWithAttachmentParam[xmlElementName] = createServiceObjectWithAttachmentParam;
        }
    }

    InitializeServiceObjectClassMap(): any {
        throw new Error("abstract - ServiceObjectInfo.ts - InitializeServiceObjectClassMap: must be implemented")
        
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
    }

    CreateEwsObjectFromXmlElementName<TServiceObject extends ServiceObject>(service: ExchangeService, xmlElementName: string): TServiceObject {
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

    }

    CreateItemFromItemClass(itemAttachment: ItemAttachment, itemClass: string  /*System.Type*/, isNew: boolean): Item {
        var creationDelegate = this.ServiceObjectConstructorsWithAttachmentParam[itemClass];

        if (creationDelegate) {
            return creationDelegate(itemAttachment, isNew);
        }
        else {
            return null;
        }
    }
}


