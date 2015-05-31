import XmlElementNames = require("../XmlElementNames");
import Item = require("../ServiceObjects/Items/Item");
import FindRequest = require("./FindRequest");
import Grouping = require("../../Search/Grouping");
import ExchangeService = require("../ExchangeService");
import FindItemResponse = require("../Responses/FindItemResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
class FindItemRequest<TItem extends Item> extends FindRequest<FindItemResponse<TItem>> {
    GroupBy: Grouping;
    //private groupBy: Grouping; - auto property is ok
    CreateServiceResponse(service: ExchangeService, responseIndex: number): FindItemResponse<TItem> { return new FindItemResponse<TItem>(this.GroupBy != null, this.View.GetPropertySetOrDefault());}
    GetGroupBy(): Grouping { return this.GroupBy; }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetResponseMessageXmlElementName(): string { return XmlElementNames.FindItemResponseMessage; }
    GetResponseXmlElementName(): string { return XmlElementNames.FindItemResponse; }
    GetXmlElementName(): string { return XmlElementNames.FindItem; }
}
export = FindItemRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
