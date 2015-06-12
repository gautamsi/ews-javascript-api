import {XmlElementNames} from "../XmlElementNames";
import {Item} from "../ServiceObjects/Items/Item";
import {FindRequest} from "./FindRequest";
import {Grouping} from "../../Search/Grouping";
import {ExchangeService} from "../ExchangeService";
import {FindItemResponse} from "../Responses/FindItemResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
export class FindItemRequest<TItem extends Item> extends FindRequest<FindItemResponse<TItem>> {
    GroupBy: Grouping;
    //private groupBy: Grouping; - auto property is ok
    CreateServiceResponse(service: ExchangeService, responseIndex: number): FindItemResponse<TItem> { return new FindItemResponse<TItem>(this.GroupBy != null, this.View.GetPropertySetOrDefault());}
    GetGroupBy(): Grouping { return this.GroupBy; }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.FindItemResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.FindItemResponse; }
    GetXmlElementName(): string { return XmlElementNames.FindItem; }
}