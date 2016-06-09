import {ItemIdWrapperList} from "../../Misc/ItemIdWrapperList";
import {AffectedTaskOccurrence} from "../../Enumerations/AffectedTaskOccurrence";
import {SendCancellationsMode} from "../../Enumerations/SendCancellationsMode";
import {XmlAttributeNames} from "../XmlAttributeNames";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ServiceVersionException} from "../../Exceptions/ServiceVersionException";
import {ExchangeService} from "../ExchangeService";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {StringHelper} from "../../ExtensionMethods";
import {Strings} from "../../Strings";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {DeleteRequest} from "./DeleteRequest";
/** @internal */
export class DeleteItemRequest extends DeleteRequest<ServiceResponse> {

    private itemIds: ItemIdWrapperList = new ItemIdWrapperList();
    private affectedTaskOccurrences: AffectedTaskOccurrence = null;
    private sendCancellationsMode: SendCancellationsMode = null;
    get ItemIds(): ItemIdWrapperList {
        return this.itemIds;
    }
    get AffectedTaskOccurrences(): AffectedTaskOccurrence {
        return this.affectedTaskOccurrences;
    }
    set AffectedTaskOccurrences(value: AffectedTaskOccurrence) {
        this.affectedTaskOccurrences = value;
    }
    get SendCancellationsMode(): SendCancellationsMode {
        return this.sendCancellationsMode;
    }
    set SendCancellationsMode(value: SendCancellationsMode) {
        this.sendCancellationsMode = value;
    }
    SuppressReadReceipts: boolean = false;

    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { return new ServiceResponse(); }
    GetExpectedResponseMessageCount(): number { return this.itemIds.Count; }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.DeleteItemResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.DeleteItemResponse; }
    GetXmlElementName(): string { return XmlElementNames.DeleteItem; }
    InternalToJson(body: any): any { throw new Error("DeleteItemRequest.ts - InternalToJson : Not implemented."); }
    Validate(): void {
        super.Validate();
        //EwsUtilities.ValidateParam(this.ItemIds, "ItemIds");

        if (this.SuppressReadReceipts && this.Service.RequestedServerVersion < ExchangeVersion.Exchange2013) {
            throw new ServiceVersionException(
                StringHelper.Format(
                    Strings.ParameterIncompatibleWithRequestVersion,
                    "SuppressReadReceipts",
                    ExchangeVersion[ExchangeVersion.Exchange2013]));
        }
    }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        super.WriteAttributesToXml(writer);

        if (this.AffectedTaskOccurrences !== null) {
            writer.WriteAttributeValue(
                XmlAttributeNames.AffectedTaskOccurrences,
                this.AffectedTaskOccurrences);
        }

        if (this.SendCancellationsMode !== null) {
            writer.WriteAttributeValue(
                XmlAttributeNames.SendMeetingCancellations,
                this.SendCancellationsMode);
        }

        if (this.SuppressReadReceipts) {
            writer.WriteAttributeValue(XmlAttributeNames.SuppressReadReceipts, true);
        }
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        this.itemIds.WriteToXml(
            writer,
            XmlNamespace.Messages,
            XmlElementNames.ItemIds);
    }
}