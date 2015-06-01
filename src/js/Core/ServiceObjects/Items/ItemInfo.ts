import ServiceObject = require("../ServiceObject");
import {IndexerWithStringKey} from "../../../AltDictionary";

import {CreateServiceObjectWithServiceParam} from "../../../Misc/DelegateTypes";

import XmlElementNames = require("../../XmlElementNames");
import ExchangeService = require("../../ExchangeService");


import Appointment = require("./Appointment");
import Contact = require("./Contact");
import ContactGroup = require("./ContactGroup");
import Conversation = require("./Conversation");
import EmailMessage = require("./EmailMessage");
import Item = require("./Item");
import MeetingCancellation = require("./MeetingCancellation");
import MeetingMessage = require("./MeetingMessage");
import MeetingRequest = require("./MeetingRequest");
import MeetingResponse = require("./MeetingResponse");
import PostItem = require("./PostItem");
import Task = require("./Task");

import ServiceObjectInfo = require("../ServiceObjectInfo");
/**
 ** this is partial section of CreateEwsObjectFromXmlElementName from serviceobjectinfo, other parts are moved to different object type like folderinfo etc. 
 * this to is to avoid circular referencing with requirejs/commonjs/nodejs
 */
class ItemInfo extends ServiceObjectInfo {

    InitializeServiceObjectClassMap(): any {
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

    }
}


export = ItemInfo;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

