"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../ExtensionMethods");
var DateTime_1 = require("../DateTime");
var ItemId_1 = require("../ComplexProperties/ItemId");
var ItemIndexError_1 = require("../Enumerations/ItemIndexError");
var XmlElementNames_1 = require("../Core/XmlElementNames");
/**
 * Represents non indexable item.
 *
 * @sealed
 */
var NonIndexableItem = /** @class */ (function () {
    function NonIndexableItem() {
        /**
         * Item Identity
         */
        this.ItemId = null;
        /**
         * Error code
         */
        this.ErrorCode = ItemIndexError_1.ItemIndexError.None;
        /**
         * Error description
         */
        this.ErrorDescription = null;
        /**
         * Is partially indexed
         */
        this.IsPartiallyIndexed = false;
        /**
         * Is permanent failure
         */
        this.IsPermanentFailure = false;
        /**
         * Attempt count
         */
        this.AttemptCount = 0;
        /**
         * Last attempt time
         */
        this.LastAttemptTime = null;
        /**
         * Additional info
         */
        this.AdditionalInfo = null;
        /**
         * Sort value
         */
        this.SortValue = null;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     * @return  {NonIndexableItemDetailsResult}       Non indexable item details result object
     */
    NonIndexableItem.LoadFromXmlJsObject = function (jsObject, service) {
        var result = new NonIndexableItem();
        if (jsObject[XmlElementNames_1.XmlElementNames.ItemId]) {
            result.ItemId = new ItemId_1.ItemId();
            result.ItemId.LoadFromXmlJsObject(jsObject[XmlElementNames_1.XmlElementNames.ItemId], service);
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.ErrorDescription]) {
            result.ErrorDescription = jsObject[XmlElementNames_1.XmlElementNames.ErrorDescription];
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.IsPartiallyIndexed]) {
            result.IsPartiallyIndexed = ExtensionMethods_1.Convert.toBool(jsObject[XmlElementNames_1.XmlElementNames.IsPartiallyIndexed]);
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.IsPermanentFailure]) {
            result.IsPermanentFailure = ExtensionMethods_1.Convert.toBool(jsObject[XmlElementNames_1.XmlElementNames.IsPermanentFailure]);
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.AttemptCount]) {
            result.AttemptCount = ExtensionMethods_1.Convert.toNumber(jsObject[XmlElementNames_1.XmlElementNames.AttemptCount]);
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.LastAttemptTime]) {
            result.LastAttemptTime = DateTime_1.DateTime.Parse(jsObject[XmlElementNames_1.XmlElementNames.LastAttemptTime]);
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.AdditionalInfo]) {
            result.AdditionalInfo = jsObject[XmlElementNames_1.XmlElementNames.AdditionalInfo];
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.SortValue]) {
            result.SortValue = jsObject[XmlElementNames_1.XmlElementNames.SortValue];
        }
        return result;
    };
    return NonIndexableItem;
}());
exports.NonIndexableItem = NonIndexableItem;
