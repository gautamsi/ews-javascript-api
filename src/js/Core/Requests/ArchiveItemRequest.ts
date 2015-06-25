import {FolderId} from "../../ComplexProperties/FolderId";
import {ItemIdWrapperList} from "../../Misc/ItemIdWrapperList";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {ExchangeService} from "../ExchangeService";
import {ArchiveItemResponse} from "../Responses/ArchiveItemResponse";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
export class ArchiveItemRequest extends MultiResponseServiceRequest<ArchiveItemResponse> {//IJsonSerializable
    get Ids(): ItemIdWrapperList { return this.ids; }
    private sourceFolderId: FolderId;
    private ids: ItemIdWrapperList = new ItemIdWrapperList();
    get SourceFolderId(): FolderId {
        return this.sourceFolderId;
    }
    set SourceFolderId(value: FolderId) {
        this.sourceFolderId = value;
    }

    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling) {
        super(service, errorHandlingModeServiceErrorHandling);
    }

    //AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("ArchiveItemRequest.ts - AddIdsToJson : Not implemented."); }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ArchiveItemResponse { return new ArchiveItemResponse(); }
    GetExpectedResponseMessageCount(): number { return this.ids.Count; }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2013; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.ArchiveItemResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.ArchiveItemResponse; }
    GetXmlElementName(): string { return XmlElementNames.ArchiveItem; }
    Validate(): void {
        //EwsUtilities.ValidateParam(this.sourceFolderId, "SourceFolderId");
        this.sourceFolderId.Validate(this.Service.RequestedServerVersion);
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.ArchiveSourceFolderId);
        this.SourceFolderId.WriteToXml(writer);
        writer.WriteEndElement();

        this.WriteIdsToXml(writer);
    }
    WriteIdsToXml(writer: EwsServiceXmlWriter): void {
        this.Ids.WriteToXml(
            writer,
            XmlNamespace.Messages,
            XmlElementNames.ItemIds);
    }
}