module Microsoft.Exchange.WebServices.Data {

    export class ServiceObject {
        get PropertyBag(): PropertyBag { return this.propertyBag; }
        get Schema(): ServiceObjectSchema { return this.GetSchema(); }
        Item: any;
        Service: ExchangeService;
        get IsNew(): boolean {
            var id = this.GetId();
            debugger;
            return id == null ? true : !id.IsValid;
        }
        get IsDirty(): boolean {
            return this.PropertyBag.IsDirty;
        }
        private lockObject: any = {};
        //private service: ExchangeService;
        private propertyBag: PropertyBag;
        private xmlElementName: string;
        private OnChange: Function;//todo: fix type-  ServiceObjectChangedDelegate;

        constructor(service: ExchangeService) {
            //EwsUtilities.ValidateParam(service, "service");
            //EwsUtilities.ValidateServiceObjectVersion(this, service.RequestedServerVersion);

            this.Service = service;
            this.propertyBag = new PropertyBag(this);
        }

        PropertyDefinition(propertyDefinition: PropertyDefinitionBase): any { 
            var propertyValue;

            var propDef: PropertyDefinition = <PropertyDefinition>propertyDefinition;
            if (propDef != null) {
                debugger;
                return this.PropertyBag._propGet[propDef.Name];
            }
            else {
                var extendedPropDef: ExtendedPropertyDefinition = <ExtendedPropertyDefinition>propertyDefinition;
                if (extendedPropDef != null) {
                    if (this.TryGetExtendedProperty(extendedPropDef, propertyValue)) {
                        return propertyValue;
                    }
                    else {
                        throw new ServiceObjectPropertyException("must load assigned property before load"/*Strings.MustLoadOrAssignPropertyBeforeAccess*/, propertyDefinition);
                    }
                }
                else {
                    // Other subclasses of PropertyDefinitionBase are not supported.
                    throw new Error(string.Format(
                        "not supported for property definition type: {0}",
                        propertyDefinition.constructor));
                }
            }
        }

        Changed(): void {
            if (this.OnChange != null) {
                this.OnChange(this);
            }
        }
        ClearChangeLog(): void { this.PropertyBag.ClearChangeLog(); }
        GetChangeXmlElementName(): string { return XmlElementNames.ItemChange; }
        GetDeleteFieldXmlElementName(): string { return XmlElementNames.DeleteItemField; }
        GetExtendedProperties(): ExtendedPropertyCollection { return null; }
        GetId(): ServiceId {
            var idPropertyDefinition = this.GetIdPropertyDefinition();

            var serviceId = null;
            debugger;
            if (idPropertyDefinition != null) {
                this.PropertyBag.TryGetValue(idPropertyDefinition, serviceId);
            }

            return <ServiceId> serviceId;
        }
        GetIdPropertyDefinition(): PropertyDefinition { return null; }
        GetIsCustomDateTimeScopingRequired(): boolean { return false; }
        GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean { return false; }
        GetLoadedPropertyDefinitions(): PropertyDefinitionBase /*System.Collections.ObjectModel.Collection<PropertyDefinitionBase>*/
        {
            //var propDefs: PropertyDefinitionBase[] = [];
            //for(var propDef in this.PropertyBag.Properties.Keys)
            //{
            //    propDefs.Add(propDef);
            //}

            //if (this.GetExtendedProperties() != null) {
            //    foreach(ExtendedProperty extProp in this.GetExtendedProperties())
            //    {
            //        propDefs.Add(extProp.PropertyDefinition);
            //    }
            //}

            //return propDefs;
            return null;
        }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("abstract method, must implement"); }
        GetSchema(): ServiceObjectSchema { throw new Error("abstract method, must implement"); }
        GetSetFieldXmlElementName(): string { return XmlElementNames.SetItemField; }
        GetXmlElementName(): string {
            debugger;
            throw new Error("this must be overridden by derived class");
            if (string.IsNullOrEmpty(this.xmlElementName))
                this.xmlElementName = this.GetXmlElementNameOverride();

            //EwsUtilities.Assert(
            //    !string.IsNullOrEmpty(this.xmlElementName),
            //    "EwsObject.GetXmlElementName",
            //    string.Format("The class {0} does not have an associated XML element name.", this.GetType().Name));

            return this.xmlElementName;
        }
        GetXmlElementNameOverride(): string { return null; }
        InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): void
        { throw new Error("abstract method, must implement"); }
        InternalLoad(propertySet: PropertySet): void { throw new Error("abstract method, must implement"); }
        //Load(): any { throw new Error("Not implemented."); }
        Load(propertySet?: PropertySet): void {
            this.InternalLoad(propertySet || PropertySet.FirstClassProperties);
        }
        //LoadFromJson(jsonObject: JsonObject, service: ExchangeService, clearPropertyBag: boolean): any { throw new Error("Not implemented."); }
        //LoadFromJson(jsonServiceObject: JsonObject, service: ExchangeService, clearPropertyBag: boolean, requestedPropertySet: PropertySet, summaryPropertiesOnly: boolean): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader, clearPropertyBag: boolean, requestedPropertySet: PropertySet = null, summaryPropertiesOnly: boolean = false): void {
            this.PropertyBag.LoadFromXml(
                reader,
                clearPropertyBag,
                requestedPropertySet,
                summaryPropertiesOnly);
        }
        //LoadFromXml(reader: EwsServiceXmlReader, clearPropertyBag: boolean): any { throw new Error("could Not implemented."); 
        //    this.PropertyBag.LoadFromXml(
        //        reader,
        //        clearPropertyBag,
        //        null,       /* propertySet */
        //        false);     /* summaryPropertiesOnly */
        //}

        /// <summary>
        /// Throws exception if this is a new service object.
        /// </summary>
        ThrowIfThisIsNew(): void {
            if (this.IsNew) {
                throw new Error("service object does not have id");//InvalidOperationException(Strings.ServiceObjectDoesNotHaveId);
            }
        }
        /// <summary>
        /// Throws exception if this is not a new service object.
        /// </summary>
        ThrowIfThisIsNotNew(): void {
            if (!this.IsNew) {
                throw new Error("service object already have id");//InvalidOperationException(Strings.ServiceObjectAlreadyHasId);
            }
        }
        //ToJson(service: ExchangeService, isUpdateOperation: boolean): any { return this.PropertyBag.ToJson(service, isUpdateOperation);}
        TryGetExtendedProperty(propertyDefinition: ExtendedPropertyDefinition, propertyValue: any): boolean { throw new Error("Need implementation."); }
        TryGetProperty<T>(propertyDefinition: PropertyDefinitionBase, propertyValue: any): boolean { throw new Error("Need implementation."); }
        //TryGetProperty(propertyDefinition: PropertyDefinitionBase, propertyValue: any): boolean { throw new Error("Not implemented."); }
        Validate(): void { this.PropertyBag.Validate(); }
        //WriteToJsonForUpdate(service: ExchangeService): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): void { this.PropertyBag.WriteToXml(writer); }
        WriteToXmlForUpdate(writer: EwsServiceXmlWriter): void { this.PropertyBag.WriteToXmlForUpdate(writer); }
    }

    export class Conversation extends ServiceObject {
        Id: ConversationId;
        Topic: string;
        UniqueRecipients: StringList;
        GlobalUniqueRecipients: StringList;
        UniqueUnreadSenders: StringList;
        GlobalUniqueUnreadSenders: StringList;
        UniqueSenders: StringList;
        GlobalUniqueSenders: StringList;
        LastDeliveryTime: Date;
        GlobalLastDeliveryTime: Date;
        Categories: StringList;
        GlobalCategories: StringList;
        FlagStatus: ConversationFlagStatus;
        GlobalFlagStatus: ConversationFlagStatus;
        HasAttachments: boolean;
        GlobalHasAttachments: boolean;
        MessageCount: number;
        GlobalMessageCount: number;
        UnreadCount: number;
        GlobalUnreadCount: number;
        Size: number;
        GlobalSize: number;
        ItemClasses: StringList;
        GlobalItemClasses: StringList;
        Importance: Importance;
        GlobalImportance: Importance;
        ItemIds: ItemIdCollection;
        GlobalItemIds: ItemIdCollection;
        LastModifiedTime: Date;
        InstanceKey: any[];// System.Byte[];
        Preview: string;
        IconIndex: IconIndex;
        GlobalIconIndex: IconIndex;
        DraftItemIds: ItemIdCollection;
        HasIrm: boolean;
        GlobalHasIrm: boolean;
        ClearItemFlags(contextFolderId: FolderId): any { throw new Error("Not implemented."); }
        CopyItemsInConversation(contextFolderId: FolderId, destinationFolderId: FolderId): any { throw new Error("Not implemented."); }
        DeleteItems(contextFolderId: FolderId, deleteMode: DeleteMode): any { throw new Error("Not implemented."); }
        DisableAlwaysCategorizeItems(processSynchronously: boolean): any { throw new Error("Not implemented."); }
        DisableAlwaysDeleteItems(processSynchronously: boolean): any { throw new Error("Not implemented."); }
        DisableAlwaysMoveItemsInConversation(processSynchronously: boolean): any { throw new Error("Not implemented."); }
        EnableAlwaysCategorizeItems(categories: string[]/*System.Collections.Generic.IEnumerable<string>*/, processSynchronously: boolean): any { throw new Error("Not implemented."); }
        EnableAlwaysDeleteItems(processSynchronously: boolean): any { throw new Error("Not implemented."); }
        EnableAlwaysMoveItems(destinationFolderId: FolderId, processSynchronously: boolean): any { throw new Error("Not implemented."); }
        FlagItems(contextFolderId: FolderId, startDate: Date, dueDate: Date): any { throw new Error("Not implemented."); }
        FlagItemsComplete(contextFolderId: FolderId, completeDate: Date): any { throw new Error("Not implemented."); }
        GetChangeXmlElementName(): string { throw new Error("Not implemented."); }
        GetDeleteFieldXmlElementName(): string { throw new Error("Not implemented."); }
        GetExtendedProperties(): ExtendedPropertyCollection { throw new Error("Not implemented."); }
        GetIdPropertyDefinition(): PropertyDefinition { throw new Error("Not implemented."); }
        GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
        GetSetFieldXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string {

            return XmlElementNames.Conversation;
        }
        InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("Not implemented."); }
        InternalLoad(propertySet: PropertySet): any { throw new Error("Not implemented."); }
        MoveItemsInConversation(contextFolderId: FolderId, destinationFolderId: FolderId): any { throw new Error("Not implemented."); }
        //SetReadStateForItemsInConversation(contextFolderId: FolderId, isRead: boolean): any { throw new Error("Not implemented."); }
        SetReadStateForItemsInConversation(contextFolderId: FolderId, isRead: boolean, suppressReadReceipts: boolean): any { throw new Error("Not implemented."); }
        SetRetentionPolicyForItemsInConversation(contextFolderId: FolderId, retentionPolicyType: RetentionType, retentionPolicyTagId: any /*System.Guid*/): any { throw new Error("Not implemented."); }
    }
    export class PostReply extends ServiceObject {
        Subject: string;
        Body: MessageBody;
        BodyPrefix: MessageBody;
        private referenceItem: Item;
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
        InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): PostItem { throw new Error("Not implemented."); }
        InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("Not implemented."); }
        InternalLoad(propertySet: PropertySet): any { throw new Error("Not implemented."); }
        //Save(): PostItem { throw new Error("Not implemented."); }
        //Save(destinationFolderId: FolderId): PostItem { throw new Error("Not implemented."); }
        Save(destinationFolderName: WellKnownFolderName): PostItem { throw new Error("Not implemented."); }
    }
    export class RemoveFromCalendar extends ServiceObject {
        private referenceItem: Item;
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
        InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): Item[]/*System.Collections.Generic.List<Item>*/ { throw new Error("Not implemented."); }
        InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("Not implemented."); }
        InternalLoad(propertySet: PropertySet): any { throw new Error("Not implemented."); }
    }
    export class SuppressReadReceipt extends ServiceObject {
        private referenceItem: Item;
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
        InternalCreate(parentFolderId: FolderId, messageDisposition: MessageDisposition): any { throw new Error("Not implemented."); }
        InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("Not implemented."); }
        InternalLoad(propertySet: PropertySet): any { throw new Error("Not implemented."); }
    }


}