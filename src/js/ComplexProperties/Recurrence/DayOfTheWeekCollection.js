"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentException_1 = require("../../Exceptions/ArgumentException");
var DayOfTheWeek_1 = require("../../Enumerations/DayOfTheWeek");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("../ComplexProperty");
/**
 * Represents a collection of DayOfTheWeek values.
 */
var DayOfTheWeekCollection = /** @class */ (function (_super) {
    __extends(DayOfTheWeekCollection, _super);
    /**
     * @internal Initializes a new instance of the **DayOfTheWeekCollection** class.
     */
    function DayOfTheWeekCollection() {
        var _this = _super.call(this) || this;
        _this.items = [];
        return _this;
    }
    Object.defineProperty(DayOfTheWeekCollection.prototype, "Count", {
        get: function () {
            return this.items.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the DayOfTheWeek at a specific index in the collection.
     *
     * @param   {number}        index   Index
     * @return  {DayOfTheWeek}  DayOfTheWeek at index
     */
    DayOfTheWeekCollection.prototype._getItem = function (index) {
        return this.items[index];
    };
    /**
     * Adds a day to the collection if it is not already present.
     *
     * @param   {DayOfTheWeek}   dayOfTheWeek   The day to add.
     */
    DayOfTheWeekCollection.prototype.Add = function (dayOfTheWeek) {
        if (this.items.indexOf(dayOfTheWeek) < 0) {
            this.items.push(dayOfTheWeek);
            this.Changed();
        }
    };
    /**
     * Adds multiple days to the collection if they are not already present.
     *
     * @param   {DayOfTheWeek[]}   daysOfTheWeek   The days to add.
     */
    DayOfTheWeekCollection.prototype.AddRange = function (daysOfTheWeek) {
        for (var _i = 0, daysOfTheWeek_1 = daysOfTheWeek; _i < daysOfTheWeek_1.length; _i++) {
            var dayOfTheWeek = daysOfTheWeek_1[_i];
            this.Add(dayOfTheWeek);
        }
    };
    /**
     * Clears the collection.
     */
    DayOfTheWeekCollection.prototype.Clear = function () {
        if (this.Count > 0) {
            this.items.splice(0);
            this.Changed();
        }
    };
    /**
     *  Returns an enumerator that iterates through the collection. this case this.items
     */
    DayOfTheWeekCollection.prototype.GetEnumerator = function () {
        return this.items;
    };
    /**
     * @internal Loads service object from XMLJsObject Value.
     *
     * @param   {string}            jsObject                Json Object converted from XML.
     */
    DayOfTheWeekCollection.prototype.LoadFromXmlJsObjectValue = function (jsObjectValue) {
        EwsUtilities_1.EwsUtilities.ParseEnumValueList(this.items, jsObjectValue, ' ', DayOfTheWeek_1.DayOfTheWeek);
    };
    /**
     * Remove a specific day from the collection.
     *
     * @param   {DayOfTheWeek}   dayOfTheWeek   The day to remove.
     * @return  {boolean}       True if the day was removed from the collection, false otherwise.
     */
    DayOfTheWeekCollection.prototype.Remove = function (dayOfTheWeek) {
        if (this.items.indexOf(dayOfTheWeek)) {
            var result = this.items.splice(this.items.indexOf(dayOfTheWeek));
            if (result.length > 0) {
                this.Changed();
            }
            return result.length > 0;
        }
        return false;
    };
    /**
     * Removes the day at a specific index.
     *
     * @param   {number}   index   The index of the day to remove.
     */
    DayOfTheWeekCollection.prototype.RemoveAt = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index", Strings_1.Strings.IndexIsOutOfRange);
        }
        this.items.splice(index);
        this.Changed();
    };
    DayOfTheWeekCollection.prototype.ToString = function (separator) {
        if (separator === void 0) { separator = " "; }
        if (this.Count == 0) {
            return ExtensionMethods_1.StringHelper.Empty;
        }
        else {
            var daysOfTheWeekArray = new Array(this.Count);
            for (var i = 0; i < this.Count; i++) {
                daysOfTheWeekArray[i] = DayOfTheWeek_1.DayOfTheWeek[this.items[i]];
            }
            return daysOfTheWeekArray.join(separator);
        }
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}   xmlElementName   Name of the XML element.
     */
    DayOfTheWeekCollection.prototype.WriteToXml = function (writer, xmlElementName) {
        var daysOfWeekAsString = this.ToString(" ");
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(daysOfWeekAsString)) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DaysOfWeek, daysOfWeekAsString);
        }
    };
    return DayOfTheWeekCollection;
}(ComplexProperty_1.ComplexProperty));
exports.DayOfTheWeekCollection = DayOfTheWeekCollection;
