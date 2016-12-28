import {FolderIdWrapperList} from "../../Misc/FolderIdWrapperList";
import {ExchangeService} from "../ExchangeService";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {DeleteRequest} from "./DeleteRequest";
/** @internal */
export class DeleteFolderRequest extends DeleteRequest<ServiceResponse> {
    private folderIds: FolderIdWrapperList = new FolderIdWrapperList();
    get FolderIds(): FolderIdWrapperList {
        return this.folderIds;
    }
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service,errorHandlingMode);
    }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { return new ServiceResponse(); }
    GetExpectedResponseMessageCount(): number { return this.FolderIds.Count; }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.DeleteFolderResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.DeleteFolderResponse; }
    GetXmlElementName(): string { return XmlElementNames.DeleteFolder; }
    InternalToJson(body: any): any { throw new Error("DeleteFolderRequest.ts - InternalToJson : Not implemented."); }
    Validate(): void {
        super.Validate();
        //EwsUtilities.ValidateParam(this.FolderIds, "FolderIds");
        this.FolderIds.Validate(this.Service.RequestedServerVersion);
    }
    /**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        this.FolderIds.WriteToXml(
            writer,
            XmlNamespace.Messages,
            XmlElementNames.FolderIds);
    }
}