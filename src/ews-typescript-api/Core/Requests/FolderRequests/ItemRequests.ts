module Microsoft.Exchange.WebServices.Data {
    class GetItemRequestBase<TResponse> extends GetRequest<TServiceObject, TResponse> {
        ItemIds: ItemIdWrapperList;
        EmitTimeZoneHeader: boolean;
        private itemIds: ItemIdWrapperList;
        AddIdsToRequest(jsonRequest: JsonObject, service: ExchangeService): any; //{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number; //{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion; //{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string; //{ throw new Error("Not implemented.");}
        GetServiceObjectType(): ServiceObjectType; //{ throw new Error("Not implemented.");}
        GetXmlElementName(): string; //{ throw new Error("Not implemented.");}
        Validate(): any; //{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any; //{ throw new Error("Not implemented.");}
    }

    class GetItemRequest extends GetItemRequestBase<GetItemResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): GetItemResponse; //{ throw new Error("Not implemented.");}
    }
    class GetItemRequestForLoad extends GetItemRequestBase<ServiceResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse; //{ throw new Error("Not implemented.");}
    }

}