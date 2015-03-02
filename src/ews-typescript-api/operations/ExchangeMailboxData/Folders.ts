module Microsoft.Exchange.WebServices.Data {


    export class CreateFolderRequest extends CreateRequest<Folder, ServiceResponse> {
        Folders: Folder[];//System.Collections.Generic.IEnumerable<Folder>;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetObjectCollectionXmlElementName(): string { throw new Error("Not implemented."); }
        GetParentFolderXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
    }
    export class DeleteFolderRequest extends DeleteRequest<ServiceResponse> {
        FolderIds: FolderIdWrapperList;
        private folderIds: FolderIdWrapperList;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InternalToJson(body: JsonObject): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class EmptyFolderRequest extends DeleteRequest<ServiceResponse> {
        FolderIds: FolderIdWrapperList;
        DeleteSubFolders: boolean;
        private folderIds: FolderIdWrapperList;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InternalToJson(body: JsonObject): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class UpdateFolderRequest extends MultiResponseServiceRequest<ServiceResponse> {
        Folders: Folder[];//System.Collections.Generic.List<Folder>;
        private folders: Folder[];//System.Collections.Generic.List<Folder>;
        CreateServiceResponse(session: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class MoveCopyFolderRequest<TResponse extends ServiceResponse> extends MoveCopyRequest<Folder, TResponse> {
        FolderIds: FolderIdWrapperList;
        private folderIds: FolderIdWrapperList;
        AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteIdsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class MoveFolderRequest extends MoveCopyFolderRequest<MoveCopyFolderResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyFolderResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
    }
    export class CopyFolderRequest extends MoveCopyFolderRequest<MoveCopyFolderResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyFolderResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
    }
    export class MoveCopyFolderResponse extends ServiceResponse {
        Folder: Folder;
        private folder: Folder;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }

    export class FindFolderRequest extends FindRequest<FindFolderResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): FindFolderResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
    }
    export class FindFolderResponse extends ServiceResponse {
        Results: FindFoldersResults;
        private results: FindFoldersResults;
        private propertySet: PropertySet;
        CreateFolderInstance(service: ExchangeService, xmlElementName: string): Folder { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class FindFoldersResults {
        TotalCount: number;
        NextPageOffset: number;
        MoreAvailable: boolean;
        Folders: Folder[];//System.Collections.ObjectModel.Collection<Folder>;
        private totalCount: number;
        private nextPageOffset: number;
        private moreAvailable: boolean;
        private folders: Folder[];//System.Collections.ObjectModel.Collection<Folder>;
        GetEnumerator(): any { throw new Error("Not implemented."); }
    }

    export class GetFolderRequestBase<TResponse extends ServiceResponse> extends GetRequest<Folder, TResponse> {
        get FolderIds(): FolderIdWrapperList { return this.folderIds; } //todo - implement
        private folderIds: FolderIdWrapperList = new FolderIdWrapperList();

        constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling) {
            super(service, errorHandlingModeServiceErrorHandling);
        }

        //AddIdsToRequest(jsonRequest: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number { return this.FolderIds.Count; }
        GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
        GetResponseMessageXmlElementName(): string { return XmlElementNames.GetFolderResponseMessage; }
        GetResponseXmlElementName(): string { return XmlElementNames.GetFolderResponse; }
        GetServiceObjectType(): ServiceObjectType { return ServiceObjectType.Folder; }
        GetXmlElementName(): string { return XmlElementNames.GetFolder; }
        Validate(): void {
            super.Validate();
            debugger;
            //EwsUtilities.ValidateParamCollection(this.FolderIds, "FolderIds");
            //this.FolderIds.Validate(this.Service.RequestedServerVersion);
        }
        WriteElementsToXml(writer: EwsServiceXmlWriter): void {
            super.WriteElementsToXml(writer);

            this.FolderIds.WriteToXml(
                writer,
                XmlNamespace.Messages,
                XmlElementNames.FolderIds);
        }
    }

    export class GetFolderRequest extends GetFolderRequestBase<GetFolderResponse> {
        constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
            super(service, errorHandlingMode);
        }
        CreateServiceResponse(service: ExchangeService, responseIndex: number): GetFolderResponse {
            return new GetFolderResponse(this.FolderIds._propGet(responseIndex).GetFolder(), this.PropertySet);
        }
    }

    export class GetFolderRequestForLoad extends GetFolderRequestBase<ServiceResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("Not implemented."); }
    }

    export class GetFolderResponse extends ServiceResponse {
        get Folder(): Folder { return this.folder; }
        private folder: Folder;
        private propertySet: PropertySet;

        constructor(folder: Folder, propertySet: PropertySet) {
            super();

            this.folder = folder;
            this.propertySet = propertySet;

            EwsUtilities.Assert(
                this.propertySet != null,
                "GetFolderResponse.ctor",
                "PropertySet should not be null");
        }

        GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder {
            if (this.Folder != null) {
                return this.Folder;
            }
            else {
                return EwsUtilities.CreateEwsObjectFromXmlElementName<Folder>(service, xmlElementName);
            }
        }
        //ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): void {
            super.ReadElementsFromXml(reader);

            var folders: Folder[] = reader.ReadServiceObjectsCollectionFromXml<Folder>(
                XmlElementNames.Folders,
                this.GetObjectInstance,
                true,               /* clearPropertyBag */
                this.propertySet,   /* requestedPropertySet */
                false);             /* summaryPropertiesOnly */

            this.folder = folders[0];
        }
    }

    export class CreateFolderResponse extends ServiceResponse {
        private folder: Folder;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Folder { throw new Error("Not implemented."); }
        Loaded(): any { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class UpdateFolderResponse extends ServiceResponse {
        private folder: Folder;
        GetObjectInstance(session: ExchangeService, xmlElementName: string): Folder { throw new Error("Not implemented."); }
        Loaded(): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }

}
