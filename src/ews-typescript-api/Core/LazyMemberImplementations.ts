module Microsoft.Exchange.WebServices.Data {
    export class LazyMember<T> {
        get Member(): T {
            if (!this.initialized) {
                //lock(this.lockObject)
                //{
                if (!this.initialized) {
                    this.lazyMember = this.initializationDelegate();
                }
                this.initialized = true;
                //}
            }
            return this.lazyMember;
        }
        private lazyMember: T;
        private initializationDelegate: InitializeLazyMember<T>;//() => T;
        private lockObject: any;
        private initialized: boolean = false;

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="initializationDelegate">The initialization delegate to call for the item on first access
        /// </param>
        constructor(initializationDelegate: InitializeLazyMember<T>) {
            this.initializationDelegate = initializationDelegate;
        }
    }

    interface InitializeLazyMember<T> {
        (): T;
    }

    //export class InitializeLazyMember<T> extends System.MulticastDelegate {
    //    BeginInvoke(callback: System.AsyncCallback, object: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
    //    EndInvoke(result: System.IAsyncResult): T; //{ throw new Error("Not implemented.");}
    //    Invoke(): T; //{ throw new Error("Not implemented.");}
    //}


    export interface CreateServiceObjectWithServiceParam {
        (srv: ExchangeService): any;
    }

    export interface CreateServiceObjectWithAttachmentParam {
        (itemAttachment: ItemAttachment,
        isNew: boolean): any
    }

    export class ServiceObjectInfo {

        get XmlElementNameToServiceObjectClassMap(): IndexerWithStringKey<any> { return this.xmlElementNameToServiceObjectClassMap;}//  System.Collections.Generic.Dictionary<string, System.Type>;
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

        AddServiceObjectType(xmlElementName: string, type: any /*System.Type*/, createServiceObjectWithServiceParam: CreateServiceObjectWithServiceParam, createServiceObjectWithAttachmentParam: CreateServiceObjectWithAttachmentParam): any {
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
                Appointment,
                (srv) => { return new Appointment(srv); },
                (itemAttachment, isNew) => { return new Appointment(itemAttachment, isNew); });

            // CalendarFolder
            this.AddServiceObjectType(
                XmlElementNames.CalendarFolder,
                CalendarFolder,
                (srv) => { return new CalendarFolder(srv); },
                null);

            // Contact
            this.AddServiceObjectType(
                XmlElementNames.Contact,
                Contact,
                (srv) => { return new Contact(srv); },
                (itemAttachment, isNew) => { return new Contact(itemAttachment); });

            // ContactsFolder
            this.AddServiceObjectType(
                XmlElementNames.ContactsFolder,
                typeof (ContactsFolder),
                (srv) => { return new ContactsFolder(srv); },
                null);

            // ContactGroup
            this.AddServiceObjectType(
                XmlElementNames.DistributionList,
                typeof (ContactGroup),
                (srv) => { return new ContactGroup(srv); },
                (itemAttachment, isNew) => { return new ContactGroup(itemAttachment); });

            // Conversation
            this.AddServiceObjectType(
                XmlElementNames.Conversation,
                typeof (Conversation),
                (srv) => { return new Conversation(srv); },
                null);

            // EmailMessage
            this.AddServiceObjectType(
                XmlElementNames.Message,
                typeof (EmailMessage),
                (srv) => { return new EmailMessage(srv); },
                (itemAttachment, isNew) => { return new EmailMessage(itemAttachment); });

            // Folder
            this.AddServiceObjectType(
                XmlElementNames.Folder,
                typeof (Folder),
                (srv) => { return new Folder(srv); },
                null);

            // Item
            this.AddServiceObjectType(
                XmlElementNames.Item,
                typeof (Item),
                (srv) => { return new Item(srv); },
                (itemAttachment, isNew) => { return new Item(itemAttachment); });

            // MeetingCancellation
            this.AddServiceObjectType(
                XmlElementNames.MeetingCancellation,
                typeof (MeetingCancellation),
                (srv) => { return new MeetingCancellation(srv); },
                (itemAttachment, isNew) => { return new MeetingCancellation(itemAttachment); });

            // MeetingMessage
            this.AddServiceObjectType(
                XmlElementNames.MeetingMessage,
                typeof (MeetingMessage),
                (srv) => { return new MeetingMessage(srv); },
                (itemAttachment, isNew) => { return new MeetingMessage(itemAttachment); });

            // MeetingRequest
            this.AddServiceObjectType(
                XmlElementNames.MeetingRequest,
                typeof (MeetingRequest),
                (srv) => { return new MeetingRequest(srv); },
                (itemAttachment, isNew) => { return new MeetingRequest(itemAttachment); });

            // MeetingResponse
            this.AddServiceObjectType(
                XmlElementNames.MeetingResponse,
                typeof (MeetingResponse),
                (srv) => { return new MeetingResponse(srv); },
                (itemAttachment, isNew) => { return new MeetingResponse(itemAttachment); });

            // PostItem
            this.AddServiceObjectType(
                XmlElementNames.PostItem,
                typeof (PostItem),
                (srv) => { return new PostItem(srv); },
                (itemAttachment, isNew) => { return new PostItem(itemAttachment); });

            // SearchFolder
            this.AddServiceObjectType(
                XmlElementNames.SearchFolder,
                typeof (SearchFolder),
                (srv) => { return new SearchFolder(srv); },
                null);

            // Task
            this.AddServiceObjectType(
                XmlElementNames.Task,
                typeof (Task),
                (srv) => { return new Task(srv); },
                (itemAttachment, isNew) => { return new Task(itemAttachment); });

            // TasksFolder
            this.AddServiceObjectType(
                XmlElementNames.TasksFolder,
                typeof (TasksFolder),
                (srv) => { return new TasksFolder(srv); },
                null);
        }
    }
    //class CreateServiceObjectWithAttachmentParam extends System.MulticastDelegate {
    //    BeginInvoke(itemAttachment: ItemAttachment, isNew: boolean, callback: System.AsyncCallback, object: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
    //    EndInvoke(result: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
    //    Invoke(itemAttachment: ItemAttachment, isNew: boolean): any; //{ throw new Error("Not implemented.");}
    //}
    //class CreateServiceObjectWithServiceParam extends System.MulticastDelegate {
    //    BeginInvoke(srv: ExchangeService, callback: System.AsyncCallback, object: any): System.IAsyncResult; //{ throw new Error("Not implemented.");}
    //    EndInvoke(result: System.IAsyncResult): any; //{ throw new Error("Not implemented.");}
    //    Invoke(srv: ExchangeService): any; //{ throw new Error("Not implemented.");}
    //}

}