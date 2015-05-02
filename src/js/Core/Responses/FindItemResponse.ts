class FindItemResponse<TItem extends Item> extends ServiceResponse {
    GroupedFindResults: GroupedFindItemsResults<TItem>;
    Results: FindItemsResults<TItem>;
    private results: FindItemsResults<TItem>;
    private isGrouped: boolean;
    private groupedFindResults: GroupedFindItemsResults<TItem>;
    private propertySet: PropertySet;
    CreateItemInstance(service: ExchangeService, xmlElementName: string): TItem { throw new Error("Not implemented."); }
    InternalReadItemsFromJson(jsonObject: JsonObject, propertySet: PropertySet, service: ExchangeService, destinationList: TItem[]/*System.Collections.Generic.IList<TItem>*/): any { throw new Error("Not implemented."); }
    InternalReadItemsFromXml(reader: EwsServiceXmlReader, propertySet: PropertySet, destinationList: TItem[]/*System.Collections.Generic.IList<TItem>*/): any { throw new Error("Not implemented."); }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = FindItemResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
