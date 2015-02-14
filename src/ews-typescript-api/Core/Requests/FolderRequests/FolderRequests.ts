module Microsoft.Exchange.WebServices.Data {
    export class GetFolderRequestBase<TResponse extends ServiceResponse> extends GetRequest<Folder, TResponse> {
        get FolderIds(): FolderIdWrapperList { return this.folderIds; } //todo - implement
        private folderIds: FolderIdWrapperList = new FolderIdWrapperList();

        constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling) {
            super(service, errorHandlingModeServiceErrorHandling);
        }

        //AddIdsToRequest(jsonRequest: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number { return this.FolderIds.Count;}
        GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1;}
        GetResponseMessageXmlElementName(): string { return XmlElementNames.GetFolderResponseMessage;}
        GetResponseXmlElementName(): string { return XmlElementNames.GetFolderResponse;}
        GetServiceObjectType(): ServiceObjectType { return ServiceObjectType.Folder;}
        GetXmlElementName(): string { return XmlElementNames.GetFolder;}
        Validate(): void{
            super.Validate();
            debugger;
            //EwsUtilities.ValidateParamCollection(this.FolderIds, "FolderIds");
            //this.FolderIds.Validate(this.Service.RequestedServerVersion);
        }
        WriteElementsToXml(writer: EwsServiceXmlWriter): void{
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
        CreateServiceResponse(service: ExchangeService, responseIndex: number): GetFolderResponse{
            return new GetFolderResponse(this.FolderIds._propGet(responseIndex).GetFolder(), this.PropertySet);
        }
    }

    export class GetFolderRequestForLoad extends GetFolderRequestBase<ServiceResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse{ throw new Error("Not implemented.");}
    }



    export class GetFolderResponse extends ServiceResponse {
        get Folder(): Folder { return this.folder; }
        private folder: Folder;
        private propertySet: PropertySet;

        constructor(folder:Folder, propertySet:PropertySet) {
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


    export interface GetObjectInstanceDelegate<T> {
        (service: ExchangeService, xmlElementName: string): T; 
    }

}