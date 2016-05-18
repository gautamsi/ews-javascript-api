import {Item} from "../ServiceObjects/Items/Item";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {ItemIdWrapperList} from "../../Misc/ItemIdWrapperList";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {MoveCopyRequest} from "./MoveCopyRequest";
/** @internal */
export class MoveCopyItemRequest<TResponse extends ServiceResponse> extends MoveCopyRequest<Item, TResponse> {
    get ItemIds(): ItemIdWrapperList { return this.itemIds; }
    ReturnNewItemIds: boolean = null;//nullable
    private itemIds: ItemIdWrapperList = new ItemIdWrapperList();

    constructor(service: ExchangeService, errorHandlingModeServiceErrorHandling: ServiceErrorHandling) {
        super(service, errorHandlingModeServiceErrorHandling);
    }

    //AddIdsToJson(jsonObject: any, service: ExchangeService): any { throw new Error("MoveCopyItemRequest.ts - AddIdsToJson : Not implemented."); }
    GetExpectedResponseMessageCount(): number { return this.ItemIds.Count; }
    Validate(): void {
        super.Validate();
        //EwsUtilities.ValidateParam(this.ItemIds, "ItemIds");
    }
    WriteIdsToXml(writer: EwsServiceXmlWriter): void {
        this.ItemIds.WriteToXml(
            writer,
            XmlNamespace.Messages,
            XmlElementNames.ItemIds);

        if (this.ReturnNewItemIds) {
            writer.WriteElementValue(
                XmlNamespace.Messages,
                XmlElementNames.ReturnNewItemIds,
                this.ReturnNewItemIds);
        }
    }
}