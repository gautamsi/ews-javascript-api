"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var FailedSearchMailbox_1 = require("./FailedSearchMailbox");
var NonIndexableItem_1 = require("./NonIndexableItem");
var XmlElementNames_1 = require("../Core/XmlElementNames");
/**
 * Represents non indexable item details result.
 *
 * @sealed
 */
var NonIndexableItemDetailsResult = /** @class */ (function () {
    function NonIndexableItemDetailsResult() {
        /**
         * Collection of items
         */
        this.Items = null;
        /**
         * Failed mailboxes
         */
        this.FailedMailboxes = null;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     * @return  {NonIndexableItemDetailsResult}       Non indexable item details result object
     */
    NonIndexableItemDetailsResult.LoadFromXmlJsObject = function (jsObject, service) {
        var nonIndexableItemDetailsResult = new NonIndexableItemDetailsResult();
        if (jsObject[XmlElementNames_1.XmlElementNames.Items]) {
            nonIndexableItemDetailsResult.Items = [];
            for (var _i = 0, _a = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames_1.XmlElementNames.Items], XmlElementNames_1.XmlElementNames.NonIndexableItemDetail); _i < _a.length; _i++) {
                var nonIndexableItem = _a[_i];
                nonIndexableItemDetailsResult.Items.push(NonIndexableItem_1.NonIndexableItem.LoadFromXmlJsObject(nonIndexableItem, service));
            }
            if (nonIndexableItemDetailsResult.Items.length === 0) {
                nonIndexableItemDetailsResult.Items = null;
            }
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.FailedMailboxes]) {
            nonIndexableItemDetailsResult.FailedMailboxes = FailedSearchMailbox_1.FailedSearchMailbox.LoadFromXmlJsObject(jsObject[XmlElementNames_1.XmlElementNames.FailedMailboxes], service);
        }
        return nonIndexableItemDetailsResult;
    };
    return NonIndexableItemDetailsResult;
}());
exports.NonIndexableItemDetailsResult = NonIndexableItemDetailsResult;
