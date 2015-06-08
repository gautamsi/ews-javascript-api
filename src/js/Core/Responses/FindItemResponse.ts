import XmlElementNames = require("../XmlElementNames");
import XmlAttributeNames = require("../XmlAttributeNames");
import ItemGroup = require("../../Search/ItemGroup");
import HighlightTerm = require("../../ComplexProperties/HighlightTerm");
import EwsUtilities = require("../EwsUtilities");
import Item = require("../ServiceObjects/Items/Item");
import ItemInfo = require("../ServiceObjects/Items/ItemInfo");
import GroupedFindItemsResults = require("../../Search/GroupedFindItemsResults");
import FindItemsResults = require("../../Search/FindItemsResults");
import PropertySet = require("../PropertySet");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceJsonReader = require("../EwsServiceJsonReader");
import {EwsLogging} from "../EwsLogging";
import {Convert} from "../../ExtensionMethods"

import ServiceResponse = require("./ServiceResponse");
class FindItemResponse<TItem extends Item> extends ServiceResponse {
    get GroupedFindResults(): GroupedFindItemsResults<TItem> { return this.groupedFindResults; }
    get Results(): FindItemsResults<TItem> { return this.results; }
    private results: FindItemsResults<TItem>;
    private isGrouped: boolean = false;
    private groupedFindResults: GroupedFindItemsResults<TItem>;
    private propertySet: PropertySet;

    constructor(isGrouped: boolean, propertySet: PropertySet) {
        super();
        this.isGrouped = isGrouped;
        this.propertySet = propertySet;

        EwsLogging.Assert(
            this.propertySet != null,
            "FindItemResponse.ctor",
            "PropertySet should not be null");
    }
    CreateItemInstance(service: ExchangeService, xmlElementName: string): TItem {
        var itemInfo = new ItemInfo();
        return itemInfo.CreateEwsObjectFromXmlElementName<TItem>(service, xmlElementName);
        //return EwsUtilities.CreateEwsObjectFromXmlElementName<TItem>(service, xmlElementName);
    }
    InternalReadItemsFromJson(jsonObject: any /*JsonObject*/, propertySet: PropertySet, service: ExchangeService, destinationList: TItem[]/*System.Collections.Generic.IList<TItem>*/): void { throw new Error("FindItemResponse.ts - InternalReadItemsFromJson : Not implemented."); }
    InternalReadItemsFromXmlJsObject(jsonObject: any, propertySet: PropertySet, service: ExchangeService, destinationList: TItem[]/*System.Collections.Generic.IList<TItem>*/): void {
        EwsLogging.Assert(
            destinationList != null,
            "FindItemResponse.InternalReadItemsFromJson",
            "destinationList is null.");

        if (jsonObject[XmlElementNames.Items]) {
            var items: TItem[] = EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson<TItem>(
                jsonObject,
                service,
                XmlElementNames.Items,
                this.CreateItemInstance,
                true,               /* clearPropertyBag */
                this.propertySet,   /* requestedPropertySet */
                true);              /* summaryPropertiesOnly */

            items.forEach((item, index) => { destinationList.push(item) });
        }
    }
    ReadElementsFromJson(responseObject: any /*JsonObject*/, service: ExchangeService): void { throw new Error("FindItemResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        super.ReadElementsFromXmlJsObject(responseObject, service);

        var rootFolder = responseObject[XmlElementNames.RootFolder];
        var totalItemsInView: number = Number(rootFolder[XmlAttributeNames.TotalItemsInView]);
        var moreItemsAvailable: boolean = !Convert.toBool(rootFolder[XmlAttributeNames.IncludesLastItemInRange]);

        // Ignore IndexedPagingOffset attribute if moreItemsAvailable is false.
        var nextPageOffset: number = null;
        if (moreItemsAvailable) {
            if (rootFolder[XmlAttributeNames.IndexedPagingOffset]) {
                nextPageOffset = Number(rootFolder[XmlAttributeNames.IndexedPagingOffset]);
            }
        }

        if (!this.isGrouped) {
            this.results = new FindItemsResults<TItem>();
            this.results.TotalCount = totalItemsInView;
            this.results.NextPageOffset = nextPageOffset;
            this.results.MoreAvailable = moreItemsAvailable;
            this.InternalReadItemsFromXmlJsObject(
                rootFolder,
                this.propertySet,
                service,
                this.results.Items);
        }
        else {
            this.groupedFindResults = new GroupedFindItemsResults<TItem>();
            this.groupedFindResults.TotalCount = totalItemsInView;
            this.groupedFindResults.NextPageOffset = nextPageOffset;
            this.groupedFindResults.MoreAvailable = moreItemsAvailable;

            if (rootFolder[XmlElementNames.Groups]) {
                var jsGroups: any[] = EwsServiceJsonReader.ReadAsArray(rootFolder, XmlElementNames.Groups);

                for (var jsGroup of jsGroups) //jsGroups.OfType<JsonObject>()
                {
                    if (jsGroup[XmlElementNames.GroupedItems]) {
                        var jsGroupedItemCollection: any[] = EwsServiceJsonReader.ReadAsArray(jsGroup, XmlElementNames.GroupedItems);
                        for (var jsGroupedItem of jsGroupedItemCollection) {
                            var groupIndex: string = jsGroupedItem[XmlElementNames.GroupIndex];

                            var itemList: TItem[] = [];// new List<TItem>();
                            this.InternalReadItemsFromXmlJsObject(
                                jsGroupedItem,
                                this.propertySet,
                                service,
                                itemList);
                            debugger;
                            this.groupedFindResults.ItemGroups.push(new ItemGroup<TItem>(groupIndex, itemList));
                        }
                    }
                }
            }
        }
        debugger;
        debugger;
        //todo: check highlight terms and grouping.
        if (responseObject[XmlElementNames.HighlightTerms]) {
            var highlightTermElements: any[] = EwsServiceJsonReader.ReadAsArray(responseObject, XmlElementNames.HighlightTerms);
            for (var highlightTermElement of highlightTermElements) {
                if (highlightTermElement[XmlElementNames.HighlightTerm]) {
                    var highlightTermObjects = EwsServiceJsonReader.ReadAsArray(highlightTermElement, XmlElementNames.HighlightTerm);
                    for (var jsonHighlightTerm of highlightTermObjects) {
                        var term: HighlightTerm = new HighlightTerm();
                        term.LoadFromJson(jsonHighlightTerm, service);
                        this.results.HighlightTerms.push(term);
                    }
                }
            }
        }
    }
}
export = FindItemResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
