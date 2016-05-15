import {ItemIdWrapperList} from "../../Misc/ItemIdWrapperList";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {XmlAttributeNames} from "../XmlAttributeNames";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {MarkAsJunkResponse} from "../Responses/MarkAsJunkResponse";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
/** @internal */
export class MarkAsJunkRequest extends MultiResponseServiceRequest<MarkAsJunkResponse> {//IJsonSerializable
    private itemIds: ItemIdWrapperList = new ItemIdWrapperList();
    get ItemIds(): ItemIdWrapperList {
        return this.itemIds;
    }
    IsJunk: boolean = false;
    MoveItem: boolean = false;
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MarkAsJunkResponse { return new MarkAsJunkResponse(); }
    GetExpectedResponseMessageCount(): number { return this.itemIds.Count; }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2013; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.MarkAsJunkResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.MarkAsJunkResponse; }
    GetXmlElementName(): string { return XmlElementNames.MarkAsJunk; }
    Validate(): void {
        super.Validate();
        //EwsUtilities.ValidateParam(this.ItemIds, "ItemIds");
    }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(XmlAttributeNames.IsJunk, this.IsJunk);
        writer.WriteAttributeValue(XmlAttributeNames.MoveItem, this.MoveItem);
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void { this.itemIds.WriteToXml(writer, XmlNamespace.Messages, XmlElementNames.ItemIds); }
}