import {FolderIdWrapperList} from "../../Misc/FolderIdWrapperList";
import {ExchangeService} from "../ExchangeService";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
/** @internal */
export class MarkAllItemsAsReadRequest extends MultiResponseServiceRequest<ServiceResponse> {//IJsonSerializable
    private folderIds: FolderIdWrapperList = new FolderIdWrapperList();
    get FolderIds(): FolderIdWrapperList {
        return this.folderIds;
    }
    ReadFlag: boolean = false;
    SuppressReadReceipts: boolean = false;
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }

    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { return new ServiceResponse(); }
    GetExpectedResponseMessageCount(): number { return this.FolderIds.Count; }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2013; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.MarkAllItemsAsReadResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.MarkAllItemsAsReadResponse; }
    GetXmlElementName(): string { return XmlElementNames.MarkAllItemsAsRead; }
    Validate(): void {
        super.Validate();
        //EwsUtilities.ValidateParam(this.FolderIds, "FolderIds");
        this.FolderIds.Validate(this.Service.RequestedServerVersion);
    }
    /**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.ReadFlag, this.ReadFlag);
        writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.SuppressReadReceipts, this.SuppressReadReceipts);

        this.FolderIds.WriteToXml(
            writer,
            XmlNamespace.Messages,
            XmlElementNames.FolderIds);
    }
}


