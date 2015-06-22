import {ServiceObject} from "../ServiceObject";
import {IndexerWithStringKey} from "../../../AltDictionary";

import {CreateServiceObjectWithServiceParam} from "../../../Misc/DelegateTypes";

import {XmlElementNames} from "../../XmlElementNames";
import {ExchangeService} from "../../ExchangeService";

import {CalendarFolder} from "./CalendarFolder";
import {ContactsFolder} from "./ContactsFolder";
import {Folder} from "./Folder";
import {SearchFolder} from "./SearchFolder";
import {TasksFolder} from "./TasksFolder";

import {ServiceObjectInfo} from "../ServiceObjectInfo";
/**
 * this is partial section of CreateEwsObjectFromXmlElementName from serviceobjectinfo, other parts are moved to different object type like itemInfo etc. 
 * this to is to avoid circular referencing with requirejs/commonjs/nodejs
 */
export class FolderInfo extends ServiceObjectInfo {

InitializeServiceObjectClassMap(): any {
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
        else return null;

    }
}