import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {ResolveNameSearchLocation} from "../../Enumerations/ResolveNameSearchLocation";
import {PropertySet} from "../PropertySet";
import {FolderIdWrapperList} from "../../Misc/FolderIdWrapperList";
import {LazyMember} from "../LazyMember";
import {ExchangeService} from "../ExchangeService";
import {ResolveNamesResponse} from "../Responses/ResolveNamesResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class ResolveNamesRequest extends MultiResponseServiceRequest<ResolveNamesResponse> {//IJsonSerializable
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


//}



