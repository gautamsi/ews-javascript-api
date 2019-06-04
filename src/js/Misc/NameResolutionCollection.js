"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var ExtensionMethods_1 = require("../ExtensionMethods");
var EwsLogging_1 = require("../Core/EwsLogging");
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var NameResolution_1 = require("./NameResolution");
var Strings_1 = require("../Strings");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
/**
 * Represents a list of suggested name resolutions.
 *
 * @sealed
 */
var NameResolutionCollection = /** @class */ (function () {
    /**
     * @internal Initializes a new instance of the **NameResolutionCollection** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function NameResolutionCollection(service) {
        this.service = null;
        this.includesAllResolutions = false;
        this.items = [];
        EwsLogging_1.EwsLogging.Assert(service !== null, "NameResolutionSet.ctor", "service is null.");
        this.service = service;
    }
    Object.defineProperty(NameResolutionCollection.prototype, "Session", {
        /**
         * @internal Gets the session.
         *
         * @value   The Session.
         */
        get: function () {
            return this.service;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NameResolutionCollection.prototype, "Count", {
        /**
         * Gets the total number of elements in the list.
         */
        get: function () {
            return this.items.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NameResolutionCollection.prototype, "IncludesAllResolutions", {
        /**
         * Gets a value indicating whether more suggested resolutions are available. ResolveName only returns a maximum of 100 name resolutions.
         * When IncludesAllResolutions is false, there were more than 100 matching names on the server. To narrow the search, provide a more precise name to ResolveName.
         */
        get: function () {
            return this.includesAllResolutions;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the name resolution at the specified index.
     *
     * @param   {number}   index    The index of the name resolution to get.
     * @return  {NameResolution}    The name resolution at the speicfied index.
     */
    NameResolutionCollection.prototype._getItem = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index", Strings_1.Strings.IndexIsOutOfRange);
        }
        return this.items[index];
    };
    /**
     *  Returns an enumerator that iterates through the collection. this case this.items
     */
    NameResolutionCollection.prototype.GetEnumerator = function () {
        return this.items;
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    NameResolutionCollection.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        var totalItemsInView;
        var resolutions;
        for (var key in jsonProperty) {
            switch (key) {
                case XmlAttributeNames_1.XmlAttributeNames.TotalItemsInView:
                    totalItemsInView = ExtensionMethods_1.Convert.toNumber(jsonProperty[key]);
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.IncludesLastItemInRange:
                    this.includesAllResolutions = ExtensionMethods_1.Convert.toBool(jsonProperty[key]);
                    break;
                // This label only exists for Json objects.  The XML doesn't have a "Resolutions"
                // element.  
                // This was necessary becaue of the lack of attributes in JSON
                //
                case XmlElementNames_1.XmlElementNames.Resolution:
                    resolutions = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsonProperty, key);
                    for (var _i = 0, resolutions_1 = resolutions; _i < resolutions_1.length; _i++) {
                        var resolution = resolutions_1[_i];
                        var nameResolution = new NameResolution_1.NameResolution(this);
                        nameResolution.LoadFromXmlJsObject(resolution, service);
                        this.items.push(nameResolution);
                    }
                    break;
                default:
                    break;
            }
        }
    };
    return NameResolutionCollection;
}());
exports.NameResolutionCollection = NameResolutionCollection;
