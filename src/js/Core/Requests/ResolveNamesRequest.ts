class ResolveNamesRequest extends MultiResponseServiceRequest<ResolveNamesResponse> {//IJsonSerializable
    NameToResolve: string;
    ReturnFullContactData: boolean;
    SearchLocation: ResolveNameSearchLocation;
    ContactDataPropertySet: PropertySet;
    ParentFolderIds: FolderIdWrapperList;
    private nameToResolve: string;
    private returnFullContactData: boolean;
    private searchLocation: ResolveNameSearchLocation;
    private contactDataPropertySet: PropertySet;
    private parentFolderIds: FolderIdWrapperList;
    private static searchScopeMap: LazyMember<any/*T*/>;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ResolveNamesResponse { throw new Error("Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = ResolveNamesRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
