import Item = require("../ServiceObjects/Items/Item");
import GroupedFindItemsResults = require("../../Search/GroupedFindItemsResults");
import FindItemsResults = require("../../Search/FindItemsResults");
import PropertySet = require("../PropertySet");
import ExchangeService = require("../ExchangeService");
import JsonObject = require("../JsonObject");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import {EwsLogging} from "../EwsLogging";
import ServiceResponse = require("./ServiceResponse");
class FindItemResponse<TItem extends Item> extends ServiceResponse {
    get GroupedFindResults(): GroupedFindItemsResults<TItem>{return this.groupedFindResults;}
    get Results(): FindItemsResults<TItem>{return this.results;}
    private results: FindItemsResults<TItem>;
    private isGrouped: boolean;
    private groupedFindResults: GroupedFindItemsResults<TItem>;
    private propertySet: PropertySet;
    
    constructor ( isGrouped:boolean, propertySet:PropertySet){
        super();
        this.isGrouped = isGrouped;
            this.propertySet = propertySet;

            EwsLogging.Assert(
                this.propertySet != null,
                "FindItemResponse.ctor",
                "PropertySet should not be null");
    }
    CreateItemInstance(service: ExchangeService, xmlElementName: string): TItem { 
        return EwsUtilities.CreateEwsObjectFromXmlElementName<TItem>(service, xmlElementName);
        }
    InternalReadItemsFromJson(jsonObject: JsonObject, propertySet: PropertySet, service: ExchangeService, destinationList: TItem[]/*System.Collections.Generic.IList<TItem>*/): any { throw new Error("FindItemResponse.ts - InternalReadItemsFromJson : Not implemented."); }
    InternalReadItemsFromXmlJsObject(jsObejct:any, propertySet: PropertySet, destinationList: TItem[]/*System.Collections.Generic.IList<TItem>*/): void { 
        throw new Error("FindItemResponse.ts - InternalReadItemsFromXml : Not implemented."); 
        }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): void { throw new Error("FindItemResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): void { 
        throw new Error("FindItemResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); 
        }
}
export = FindItemResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
