import Item = require("../ServiceObjects/Items/Item");
import FindRequest = require("./FindRequest");
import Grouping = require("../../Search/Grouping");
import ExchangeService = require("../ExchangeService");
import FindItemResponse = require("../Responses/FindItemResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
class FindItemRequest<TItem extends Item> extends FindRequest<FindItemResponse<TItem>> {
    GroupBy: Grouping;
    private groupBy: Grouping;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): FindItemResponse<TItem> { throw new Error("Not implemented."); }
    GetGroupBy(): Grouping { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
}
export = FindItemRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
