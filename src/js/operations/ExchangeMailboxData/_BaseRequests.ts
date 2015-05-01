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
    //module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


    export class DeleteRequest<TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {
        DeleteMode: DeleteMode;
        private deleteMode: DeleteMode;
        InternalToJson(body: JsonObject): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    //module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

    export class MoveCopyRequest<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {
        DestinationFolderId: FolderId;
        private destinationFolderId: FolderId;
        AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteIdsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    //module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;



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

     //module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;




    

}