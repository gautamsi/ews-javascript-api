module Microsoft.Exchange.WebServices.Data {
    export class GetFolderRequestBase<TResponse> extends GetRequest<Folder, TResponse> {
        FolderIds: FolderIdWrapperList;
        private folderIds: FolderIdWrapperList;
        AddIdsToRequest(jsonRequest: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
        GetServiceObjectType(): ServiceObjectType{ throw new Error("Not implemented.");}
        GetXmlElementName(): string{ throw new Error("Not implemented.");}
        Validate(): any{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
    }

    export class GetFolderRequest extends GetFolderRequestBase<GetFolderResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): GetFolderResponse{
            return new GetFolderResponse(this.FolderIds[responseIndex].GetFolder(), this.PropertySet);
        }
    }

    export class GetFolderRequestForLoad extends GetFolderRequestBase<ServiceResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse{ throw new Error("Not implemented.");}
    }

}