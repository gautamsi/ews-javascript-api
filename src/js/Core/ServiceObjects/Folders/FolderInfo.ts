import ServiceObject = require("../ServiceObject");
import {IndexerWithStringKey} from "../../../AltDictionary";

import {CreateServiceObjectWithServiceParam} from "../../../Misc/DelegateTypes";

import XmlElementNames = require("../../XmlElementNames");
import ExchangeService = require("../../ExchangeService");
import CalendarFolder = require("./CalendarFolder");
import ContactsFolder = require("./ContactsFolder");
import Folder = require("./Folder");
import TasksFolder = require("./ContactsFolder");
import SearchFolder = require("./SearchFolder");


class FolderInfo {

    get XmlElementNameToServiceObjectClassMap(): IndexerWithStringKey<any> { return this.xmlElementNameToServiceObjectClassMap; }//  System.Collections.Generic.Dictionary<string, System.Type>;
    get ServiceObjectConstructorsWithServiceParam(): IndexerWithStringKey<CreateServiceObjectWithServiceParam> { return this.serviceObjectConstructorsWithServiceParam; }// System.Collections.Generic.Dictionary<System.Type, CreateServiceObjectWithServiceParam>;
    private xmlElementNameToServiceObjectClassMap: IndexerWithStringKey<string>;//System.Collections.Generic.Dictionary<string, System.Type>;
    private serviceObjectConstructorsWithServiceParam: IndexerWithStringKey<CreateServiceObjectWithServiceParam>;//System.Collections.Generic.Dictionary<System.Type, CreateServiceObjectWithServiceParam>;

    constructor() {
        this.xmlElementNameToServiceObjectClassMap = {};
        this.serviceObjectConstructorsWithServiceParam = {};

        this.InitializeServiceObjectClassMap();
    }

    private AddServiceObjectType(xmlElementName: string, type: string /*System.Type*/, createServiceObjectWithServiceParam: CreateServiceObjectWithServiceParam): void {
        this.xmlElementNameToServiceObjectClassMap[xmlElementName] = type;
        this.serviceObjectConstructorsWithServiceParam[xmlElementName] = createServiceObjectWithServiceParam;
    }
    InitializeServiceObjectClassMap(): any {
        // CalendarFolder
        this.AddServiceObjectType(
            XmlElementNames.CalendarFolder,
            "CalendarFolder",
            (srv) => { return new CalendarFolder(srv); });

        // ContactsFolder
        this.AddServiceObjectType(
            XmlElementNames.ContactsFolder,
            "ContactsFolder",
            (srv) => { return new ContactsFolder(srv); });

        // Folder
        this.AddServiceObjectType(
            XmlElementNames.Folder,
            "Folder",
            (srv) => { return new Folder(srv); });


        // SearchFolder
        this.AddServiceObjectType(
            XmlElementNames.SearchFolder,
            "SearchFolder",
            (srv) => { return new SearchFolder(srv); });

        // TasksFolder
        this.AddServiceObjectType(
            XmlElementNames.TasksFolder,
            "TasksFolder",
            (srv) => { return new TasksFolder(srv); });
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


export = FolderInfo;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

