import {FolderIdWrapperList} from "../../Misc/FolderIdWrapperList";
import {ExchangeService} from "../ExchangeService";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {XmlAttributeNames} from "../XmlAttributeNames";
import {DeleteRequest} from "./DeleteRequest";
export class EmptyFolderRequest extends DeleteRequest<ServiceResponse> {
    DeleteSubFolders: boolean = false;
    private folderIds: FolderIdWrapperList = new FolderIdWrapperList();
    get FolderIds(): FolderIdWrapperList {
        return this.folderIds;
    }
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { return new ServiceResponse(); }
    GetExpectedResponseMessageCount(): number { return this.FolderIds.Count; }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2010_SP1; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.EmptyFolderResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.EmptyFolderResponse; }
    GetXmlElementName(): string { return XmlElementNames.EmptyFolder; }
    InternalToJson(body: any): any { throw new Error("EmptyFolderRequest.ts - InternalToJson : Not implemented."); }
    Validate(): void {
        super.Validate();
        //EwsUtilities.ValidateParam(this.FolderIds, "FolderIds");
        this.FolderIds.Validate(this.Service.RequestedServerVersion);
    }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        super.WriteAttributesToXml(writer);

        writer.WriteAttributeValue(null, XmlAttributeNames.DeleteSubFolders, this.DeleteSubFolders);
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        this.FolderIds.WriteToXml(
            writer,
            XmlNamespace.Messages,
            XmlElementNames.FolderIds);
    }
}
