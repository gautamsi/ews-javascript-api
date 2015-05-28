import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import ResolveNameSearchLocation = require("../../Enumerations/ResolveNameSearchLocation");
import PropertySet = require("../PropertySet");
import FolderIdWrapperList = require("../../Misc/FolderIdWrapperList");
import LazyMember = require("../LazyMember");
import ExchangeService = require("../ExchangeService");
import ResolveNamesResponse = require("../Responses/ResolveNamesResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
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
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ResolveNamesResponse { throw new Error("ResolveNamesRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("ResolveNamesRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("ResolveNamesRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("ResolveNamesRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("ResolveNamesRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("ResolveNamesRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("ResolveNamesRequest.ts - Validate : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("ResolveNamesRequest.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("ResolveNamesRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = ResolveNamesRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
