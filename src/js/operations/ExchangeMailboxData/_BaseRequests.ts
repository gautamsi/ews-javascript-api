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


}