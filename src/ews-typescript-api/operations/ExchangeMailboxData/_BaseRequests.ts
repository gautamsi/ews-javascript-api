module Microsoft.Exchange.WebServices.Data {

    export class CreateRequest<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {
        Objects: TServiceObject[];//System.Collections.Generic.IEnumerable<TServiceObject>;
        ParentFolderId: FolderId;
        private parentFolderId: FolderId;
        private objects: TServiceObject;//System.Collections.Generic.IEnumerable<TServiceObject>;
        AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetObjectCollectionXmlElementName(): string { throw new Error("Not implemented."); }
        GetParentFolderXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }


    export class DeleteRequest<TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {
        DeleteMode: DeleteMode;
        private deleteMode: DeleteMode;
        InternalToJson(body: JsonObject): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class MoveCopyRequest<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {
        DestinationFolderId: FolderId;
        private destinationFolderId: FolderId;
        AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteIdsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }



    export class FindRequest<TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {
        ParentFolderIds: FolderIdWrapperList;
        SearchFilter: SearchFilter;
        QueryString: string;
        ReturnHighlightTerms: boolean;
        View: ViewBase;
        private parentFolderIds: FolderIdWrapperList;
        private searchFilter: SearchFilter;
        private queryString: string;
        private returnHighlightTerms: boolean;
        private view: ViewBase;
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetGroupBy(): Grouping { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class GetRequest<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> { //implements IJsonSerializable
        PropertySet: PropertySet;
        //private propertySet: PropertySet;
        constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling) {
            super(service, errorHandlingModeServiceErrorHandling);
        }
        //abstract - AddIdsToRequest(jsonRequest: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        //IJsonSerializable.ToJson(ExchangeService service): any {
        //    JsonObject jsonRequest = new JsonObject();

        //    this.propertySet.WriteGetShapeToJson(jsonRequest, service, this.GetServiceObjectType());
        //    this.AddIdsToRequest(jsonRequest, service);

        //    return jsonRequest;
        //}
        GetServiceObjectType(): ServiceObjectType { throw new Error("Abstract; must implemented."); }
        Validate(): void {
            super.Validate();
            debugger;//todo: implement propertyset
            //EwsUtilities.ValidateParam(this.PropertySet, "PropertySet");
            //this.PropertySet.ValidateForRequest(this, false /*summaryPropertiesOnly*/);
        }
        WriteElementsToXml(writer: EwsServiceXmlWriter): void { this.PropertySet.WriteToXml(writer, this.GetServiceObjectType()); }
    }


    export class FolderId extends ServiceId {
        get FolderName(): WellKnownFolderName { return this.folderName; }
        get Mailbox(): Mailbox { return this.mailbox; }
        public get IsValid(): boolean {

            if (this.FolderName) {
                return (this.Mailbox == null) || this.Mailbox.IsValid;
            }
            else {
                return super.IsValidProxy();
            }
        }

        private folderName: WellKnownFolderName;
        private mailbox: Mailbox;

        constructor(uniqueId?: string, folderName?: WellKnownFolderName, mailbox?: Mailbox) {
            super(uniqueId);

            this.mailbox = mailbox;
            this.folderName = folderName;
        }
        Equals(obj: any): boolean {
            if (this === obj) {
                return true;
            }
            else {
                var other: FolderId = obj;

                if (!(other instanceof FolderId)) {
                    return false;
                }
                else if (this.FolderName) {
                    if (other.FolderName && this.FolderName === other.FolderName) {
                        if (this.Mailbox != null) {
                            return this.Mailbox.Equals(other.Mailbox);
                        }
                        else if (other.Mailbox == null) {
                            return true;
                        }
                    }
                }
                else if (super.Equals(other)) {
                    return true;
                }

                return false;
            }
        }
        //GetHashCode(): number { throw new Error("Not implemented."); }
        GetXmlElementName(): string { return this.FolderName ? XmlElementNames.DistinguishedFolderId : XmlElementNames.FolderId; }
        //InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        ToString(): string {
            if (this.IsValid) {
                if (this.FolderName) {
                    if ((this.mailbox != null) && this.mailbox.IsValid) {
                        return string.Format("{0} ({1})", WellKnownFolderName[this.folderName], this.Mailbox.ToString());
                    }
                    else {
                        return WellKnownFolderName[this.FolderName];
                    }
                }
                else {
                    return super.ToString();
                }
            }
            else {
                return "";
            }
        }
        Validate(version?: ExchangeVersion): void {
            if (version) {
                // The FolderName property is a WellKnownFolderName, an enumeration type. If the property
                // is set, make sure that the value is valid for the request version.
                if (this.FolderName) {
                    //EwsUtilities.ValidateEnumVersionValue(this.FolderName, version); - alternate validation using next line
                    ExchangeVersionValidator.ValidateWellKnownFolderName(this.folderName, version);
                }
            }
            else {
                super.Validate();
            }
        }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
            if (this.FolderName) {
                writer.WriteAttributeValue(null, XmlAttributeNames.Id, WellKnownFolderName[this.FolderName].toLowerCase());

                if (this.Mailbox != null) {
                    this.Mailbox.WriteToXml(writer, XmlElementNames.Mailbox);
                }
            }
            else {
                super.WriteAttributesToXml(writer);
            }
        }
    }
    export class AbstractFolderIdWrapper { //IJsonSerializable
        GetFolder(): Folder { return null; }
        //InternalToJson(service: ExchangeService): void { throw new Error("Not implemented."); }
        //object IJsonSerializable.ToJson(ExchangeService service)
        //{
        //      return this.InternalToJson(service);
        //}
        Validate(version: ExchangeVersion): void { /*throw new Error("Not implemented.");*/ }
        WriteToXml(writer: EwsServiceXmlWriter): void { throw new Error("abstract; must implemented."); }
    }
    export class FolderIdWrapperList { //IEnumerable<AbstractFolderIdWrapper>
        get Count(): number { return this.ids.length; }
        //Item: AbstractFolderIdWrapper;
        private ids: AbstractFolderIdWrapper[] = [];// System.Collections.Generic.List<AbstractFolderIdWrapper>;
        Add(folder: Folder): void;// { this.ids.push(new FolderWrapper(folder)) }
        Add(folderId: FolderId): void;// { throw new Error("Not implemented."); }
        Add(folderOrId: any): void {
            if (folderOrId instanceof Folder)
                this.ids.push(new FolderWrapper(folderOrId))
            else if (folderOrId instanceof FolderId)
                this.ids.push(new FolderIdWrapper(folderOrId));
            else
                throw new Error("should not be seeing this. inside FolderIDWrapperList.Add, trying to overload methods.");
        }
        AddRange(folders: Folder[] /*System.Collections.Generic.IEnumerable<Folder>*/): void;// { throw new Error("Not implemented."); }
        AddRange(folderIds: FolderId[] /*System.Collections.Generic.IEnumerable<T>*/): void;// { throw new Error("Not implemented."); }
        AddRange(foldersOrIds: any[]): void {
            if (foldersOrIds != null) {
                for (var folderOrId in foldersOrIds) {
                /*FolderId folderId*/this.Add(folderOrId);
                }
            }
        }
        //GetEnumerator(): any { throw new Error("Not implemented."); }
        //InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        Validate(version: ExchangeVersion): void {
            for (var item in this.ids) {
                var folderIdWrapper: AbstractFolderIdWrapper = item;
                folderIdWrapper.Validate(version);
            }
        }
        WriteToXml(writer: EwsServiceXmlWriter, ewsNamesapce: XmlNamespace, xmlElementName: string): void {
            if (this.Count > 0) {
                writer.WriteStartElement(ewsNamesapce, xmlElementName);

                for (var item in this.ids) {
                    var folderIdWrapper: AbstractFolderIdWrapper = item;
                    folderIdWrapper.WriteToXml(writer);
                }

                writer.WriteEndElement();
            }
        }

        _propGet(index: number): AbstractFolderIdWrapper {
            return this.ids[index];
        }
    }
    export class FolderWrapper extends AbstractFolderIdWrapper {
        private folder: Folder;

        constructor(folder: Folder) {
            super();
            EwsUtilities.Assert(
                folder != null,
                "FolderWrapper.ctor",
                "folder is null");
            EwsUtilities.Assert(
                !folder.IsNew,
                "FolderWrapper.ctor",
                "folder does not have an Id");

            this.folder = folder;
        }

        GetFolder(): Folder { return this.folder; }
        //InternalToJson(service: ExchangeService): void{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter): void { this.folder.Id.WriteToXml(writer); }
    }
    export class FolderIdWrapper extends AbstractFolderIdWrapper {
        private folderId: FolderId;

        constructor(folderId: FolderId) {
            super();
            EwsUtilities.Assert(
                folderId != null,
                "FolderIdWrapper.ctor",
                "folderId is null");

            this.folderId = folderId;
        }

        //InternalToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
        Validate(version: ExchangeVersion): void { this.folderId.Validate(version); }
        WriteToXml(writer: EwsServiceXmlWriter): void { this.folderId.WriteToXml(writer); }
    }

    export class Flag extends ComplexProperty {
        FlagStatus: ItemFlagStatus;
        StartDate: Date;
        DueDate: Date;
        CompleteDate: Date;
        private flagStatus: ItemFlagStatus;
        private startDate: Date;
        private dueDate: Date;
        private completeDate: Date;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class ViewBase {
        PropertySet: PropertySet;
        private propertySet: PropertySet;
        AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        GetMaxEntriesReturned(): number { throw new Error("Not implemented."); }
        GetPropertySetOrDefault(): PropertySet { throw new Error("Not implemented."); }
        GetServiceObjectType(): ServiceObjectType { throw new Error("Not implemented."); }
        GetViewJsonTypeName(): string { throw new Error("Not implemented."); }
        GetViewXmlElementName(): string { throw new Error("Not implemented."); }
        InternalValidate(request: ServiceRequestBase): any { throw new Error("Not implemented."); }
        InternalWritePagingToJson(jsonView: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("Not implemented."); }
        InternalWriteViewToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any { throw new Error("Not implemented."); }
        WriteOrderByToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WritePagingToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        WriteShapeToJson(jsonRequest: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("Not implemented."); }
    }

}