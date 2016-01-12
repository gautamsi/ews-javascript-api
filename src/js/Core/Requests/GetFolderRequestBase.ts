import {Folder} from "../ServiceObjects/Folders/Folder";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {ServiceObjectType} from "../../Enumerations/ServiceObjectType";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {FolderIdWrapperList} from "../../Misc/FolderIdWrapperList";

import {GetRequest} from "./GetRequest";
export class GetFolderRequestBase<TResponse extends ServiceResponse> extends GetRequest<Folder, TResponse> {
    get FolderIds(): FolderIdWrapperList { return this.folderIds; }
    private folderIds: FolderIdWrapperList = new FolderIdWrapperList();

    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling:any) {
        super(service, errorHandlingModeServiceErrorHandling);
    }

    //AddIdsToRequest(jsonRequest: JsonObject, service: ExchangeService): any{ throw new Error("GetFolderRequestBase.ts - AddIdsToRequest : Not implemented.");}
    GetExpectedResponseMessageCount(): number { return this.FolderIds.Count; }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.GetFolderResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.GetFolderResponse; }
    GetServiceObjectType(): ServiceObjectType { return ServiceObjectType.Folder; }
    GetXmlElementName(): string { return XmlElementNames.GetFolder; }
    Validate(): void {
        super.Validate();
        //EwsUtilities.ValidateParamCollection(this.FolderIds, "FolderIds");
        this.FolderIds.Validate(this.Service.RequestedServerVersion);
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        super.WriteElementsToXml(writer);

        this.FolderIds.WriteToXml(
            writer,
            XmlNamespace.Messages,
            XmlElementNames.FolderIds);
    }
}