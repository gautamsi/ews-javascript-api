"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../ExtensionMethods");
var XmlElementNames_1 = require("../Core/XmlElementNames");
/**
 * Search refiner item
 */
var SearchRefinerItem = /** @class */ (function () {
    function SearchRefinerItem() {
        /**
         * Refiner name
         */
        this.Name = null;
        /**
         * Refiner value
         */
        this.Value = null;
        /**
         * Refiner count
         */
        this.Count = 0;
        /**
         * Refiner token, essentially comprises of an operator (i.e. ':' or '>') plus the refiner value The caller such as Sharepoint can simply append this to refiner name for query refinement
         */
        this.Token = null;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     * @return  {SearchRefinerItem}
     */
    SearchRefinerItem.LoadFromXmlJsObject = function (jsObject, service) {
        var sri = new SearchRefinerItem();
        sri.Name = jsObject[XmlElementNames_1.XmlElementNames.Name];
        sri.Value = jsObject[XmlElementNames_1.XmlElementNames.Value];
        sri.Count = ExtensionMethods_1.Convert.toNumber(jsObject[XmlElementNames_1.XmlElementNames.Count]);
        sri.Token = jsObject[XmlElementNames_1.XmlElementNames.Token];
        return sri;
    };
    return SearchRefinerItem;
}());
exports.SearchRefinerItem = SearchRefinerItem;
