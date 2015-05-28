import Item = require("../ServiceObjects/Items/Item");
import ServiceResponse = require("./ServiceResponse");
import GroupedFindItemsResults = require("../../Search/GroupedFindItemsResults");
import FindItemsResults = require("../../Search/FindItemsResults");
import PropertySet = require("../PropertySet");
import ExchangeService = require("../ExchangeService");
import JsonObject = require("../JsonObject");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class FindItemResponse<TItem extends Item> extends ServiceResponse {
    GroupedFindResults: GroupedFindItemsResults<TItem>;
    Results: FindItemsResults<TItem>;
    private results: FindItemsResults<TItem>;
    private isGrouped: boolean;
    private groupedFindResults: GroupedFindItemsResults<TItem>;
    private propertySet: PropertySet;
    CreateItemInstance(service: ExchangeService, xmlElementName: string): TItem { throw new Error("FindItemResponse.ts - CreateItemInstance : Not implemented."); }
    InternalReadItemsFromJson(jsonObject: JsonObject, propertySet: PropertySet, service: ExchangeService, destinationList: TItem[]/*System.Collections.Generic.IList<TItem>*/): any { throw new Error("FindItemResponse.ts - InternalReadItemsFromJson : Not implemented."); }
    InternalReadItemsFromXml(reader: EwsServiceXmlReader, propertySet: PropertySet, destinationList: TItem[]/*System.Collections.Generic.IList<TItem>*/): any { throw new Error("FindItemResponse.ts - InternalReadItemsFromXml : Not implemented."); }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("FindItemResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("FindItemResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}
export = FindItemResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
