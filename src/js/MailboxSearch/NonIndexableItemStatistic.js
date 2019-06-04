"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../ExtensionMethods");
var XmlElementNames_1 = require("../Core/XmlElementNames");
/**
 * Represents non indexable item statistic.
 *
 * @sealed
 */
var NonIndexableItemStatistic = /** @class */ (function () {
    function NonIndexableItemStatistic() {
        /**
         * Mailbox legacy DN
         */
        this.Mailbox = null;
        /**
         * Item count
         */
        this.ItemCount = 0;
        /**
         * Error message
         */
        this.ErrorMessage = null;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     * @return  {NonIndexableItemStatistic}       non indexable item statistic object
     */
    NonIndexableItemStatistic.LoadFromXmlJsObject = function (jsObject, service) {
        var result = new NonIndexableItemStatistic();
        if (jsObject[XmlElementNames_1.XmlElementNames.Mailbox]) {
            result.Mailbox = jsObject[XmlElementNames_1.XmlElementNames.Mailbox];
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.ItemCount]) {
            result.ItemCount = ExtensionMethods_1.Convert.toNumber(jsObject[XmlElementNames_1.XmlElementNames.ItemCount]);
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.ErrorMessage]) {
            result.ErrorMessage = jsObject[XmlElementNames_1.XmlElementNames.ErrorMessage];
        }
        return result;
    };
    return NonIndexableItemStatistic;
}());
exports.NonIndexableItemStatistic = NonIndexableItemStatistic;
