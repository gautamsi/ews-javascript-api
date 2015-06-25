import {Item} from "../ServiceObjects/Items/Item";
import {ItemSchema} from "../ServiceObjects/Schemas/ItemSchema";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {XmlElementNames} from "../XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {ItemIdWrapperList} from "../../Misc/ItemIdWrapperList";
import {ServiceErrorHandling} from "../../Enumerations/ServiceErrorHandling";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {ServiceObjectType} from "../../Enumerations/ServiceObjectType";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {GetRequest} from "./GetRequest";
export class GetItemRequestBase<TResponse extends ServiceResponse> extends GetRequest<Item, TResponse> {
    private itemIds: ItemIdWrapperList = new ItemIdWrapperList();
    get ItemIds(): ItemIdWrapperList {
        return this.itemIds;
    }
    get EmitTimeZoneHeader(): boolean {
        // currently we do not emit "ItemResponseShapeType.IncludeMimeContent".
        //
        return this.PropertySet.Contains(ItemSchema.MimeContent);
    }
    constructor(service: ExchangeService, errorHandlingMode: ServiceErrorHandling) {
        super(service, errorHandlingMode);
    }

    //AddIdsToRequest(jsonRequest: any, service: ExchangeService): any { throw new Error("GetItemRequestBase.ts - AddIdsToRequest : Not implemented."); }
    GetExpectedResponseMessageCount(): number { return this.ItemIds.Count; }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.GetItemResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.GetItemResponse; }
    GetServiceObjectType(): ServiceObjectType { return ServiceObjectType.Item; }
    GetXmlElementName(): string { return XmlElementNames.GetItem; }
    Validate(): void {
        super.Validate();
        //EwsUtilities.ValidateParamCollection(this.ItemIds, "ItemIds");
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        super.WriteElementsToXml(writer);

        this.ItemIds.WriteToXml(
            writer,
            XmlNamespace.Messages,
            XmlElementNames.ItemIds);
    }
}