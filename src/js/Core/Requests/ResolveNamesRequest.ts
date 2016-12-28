import {ResolveNameSearchLocation} from "../../Enumerations/ResolveNameSearchLocation";
import {PropertySet} from "../PropertySet";
import {FolderIdWrapperList} from "../../Misc/FolderIdWrapperList";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {LazyMember} from "../LazyMember";
import {EwsLogging} from "../EwsLogging";
import {XmlAttributeNames} from "../XmlAttributeNames";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {ExchangeService} from "../ExchangeService";
import {Dictionary} from "../../AltDictionary";
import {StringHelper} from "../../ExtensionMethods";
import {IOutParam} from "../../Interfaces/IOutParam"
import {ResolveNamesResponse} from "../Responses/ResolveNamesResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
/** @internal */
export class ResolveNamesRequest extends MultiResponseServiceRequest<ResolveNamesResponse> {//IJsonSerializable

    
    private static searchScopeMap: LazyMember<Dictionary<ResolveNameSearchLocation, string>> = new LazyMember<Dictionary<ResolveNameSearchLocation, string>>(() => {
        var map: Dictionary<ResolveNameSearchLocation, string> = new Dictionary<ResolveNameSearchLocation, string>((rnsl) => ResolveNameSearchLocation[rnsl]);
        map.Add(ResolveNameSearchLocation.DirectoryOnly, "ActiveDirectory");
        map.Add(ResolveNameSearchLocation.DirectoryThenContacts, "ActiveDirectoryContacts");
        map.Add(ResolveNameSearchLocation.ContactsOnly, "Contacts");
        map.Add(ResolveNameSearchLocation.ContactsThenDirectory, "ContactsActiveDirectory");
        return map;
    });

    private nameToResolve: string = null;
    private returnFullContactData: boolean = false;
    private searchLocation: ResolveNameSearchLocation = ResolveNameSearchLocation.DirectoryOnly;
    private contactDataPropertySet: PropertySet = null;
    private parentFolderIds: FolderIdWrapperList = new FolderIdWrapperList();
    set NameToResolve(value: string) {
        this.nameToResolve = value;
    }
    get NameToResolve(): string {
        return this.nameToResolve;
    }
    get ReturnFullContactData(): boolean {
        return this.returnFullContactData;
    }
    set ReturnFullContactData(value: boolean) {
        this.returnFullContactData = value;
    }
    get SearchLocation(): ResolveNameSearchLocation {
        return this.searchLocation;
    }
    set SearchLocation(value: ResolveNameSearchLocation) {
        this.searchLocation = value;
    }
    get ContactDataPropertySet(): PropertySet {
        return this.contactDataPropertySet;
    }
    set ContactDataPropertySet(value: PropertySet) {
        this.contactDataPropertySet = value;
    }
    get ParentFolderIds(): FolderIdWrapperList {
        return this.parentFolderIds;
    }

    constructor(service: ExchangeService) {
        super(service, ServiceErrorHandling.ThrowOnError);
    }

    CreateServiceResponse(service: ExchangeService, responseIndex: number): ResolveNamesResponse {return new ResolveNamesResponse(service);}
    GetExpectedResponseMessageCount(): number { return 1; }
    GetMinimumRequiredServerVersion(): ExchangeVersion {return ExchangeVersion.Exchange2007_SP1; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.ResolveNamesResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.ResolveNamesResponse; }
    GetXmlElementName(): string { return XmlElementNames.ResolveNames;}
    Validate(): void {
        super.Validate();
        //EwsUtilities.ValidateNonBlankStringParam(this.NameToResolve, "NameToResolve");
    }
    /**@internal */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(            
                XmlAttributeNames.ReturnFullContactData,
                this.ReturnFullContactData);

            var searchScope:IOutParam<string> = {outValue:null};

            ResolveNamesRequest.searchScopeMap.Member.tryGetValue(this.SearchLocation, searchScope);

            EwsLogging.Assert(
                !StringHelper.IsNullOrEmpty(searchScope.outValue),
                "ResolveNameRequest.WriteAttributesToXml",
                "The specified search location cannot be mapped to an EWS search scope.");

            var propertySet:IOutParam<string>  = {outValue:null};
            if (this.contactDataPropertySet != null)
            {
                PropertySet.DefaultPropertySetMap.Member.tryGetValue(this.contactDataPropertySet.BasePropertySet, propertySet);
            }

            if (!this.Service.Exchange2007CompatibilityMode)
            {
                writer.WriteAttributeValue(XmlAttributeNames.SearchScope, searchScope.outValue);
            }
            if (!StringHelper.IsNullOrEmpty(propertySet.outValue))
            {
                writer.WriteAttributeValue(XmlAttributeNames.ContactDataShape, propertySet.outValue);
            }
    }
    /**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
            this.ParentFolderIds.WriteToXml(
                writer,
                XmlNamespace.Messages,
                XmlElementNames.ParentFolderIds);

            writer.WriteElementValue(
                XmlNamespace.Messages,
                XmlElementNames.UnresolvedEntry,
                this.NameToResolve);
    }
}