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
var ArgumentException_1 = require("../../../Exceptions/ArgumentException");
var DateTime_1 = require("../../../DateTime");
var EndDateRecurrenceRange_1 = require("../Ranges/EndDateRecurrenceRange");
var NoEndRecurrenceRange_1 = require("../Ranges/NoEndRecurrenceRange");
var NumberedRecurrenceRange_1 = require("../Ranges/NumberedRecurrenceRange");
var ServiceValidationException_1 = require("../../../Exceptions/ServiceValidationException");
var ExtensionMethods_1 = require("../../../ExtensionMethods");
var Strings_1 = require("../../../Strings");
var XmlNamespace_1 = require("../../../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("../../ComplexProperty");
/**
 * Represents a recurrence pattern, as used by Appointment and Task items.
 */
var Recurrence = /** @class */ (function (_super) {
    __extends(Recurrence, _super);
    function Recurrence(startDate) {
        var _this = _super.call(this) || this;
        _this.startDate = null;
        _this.numberOfOccurrences = null;
        _this.endDate = null;
        if (arguments.length === 1) {
            _this.startDate = startDate;
        }
        return _this;
    }
    Object.defineProperty(Recurrence.prototype, "XmlElementName", {
        /**
         * @internal Gets the name of the XML element.
         *
         * @value   The name of the XML element.
         */
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Recurrence.prototype, "IsRegenerationPattern", {
        /**
         * @internal Gets a value indicating whether this instance is regeneration pattern.
         *
         * @value   *true* if this instance is regeneration pattern; otherwise, *false*.
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Recurrence.prototype, "StartDate", {
        /**
         * Gets or sets the date and time when the recurrence start.
         */
        get: function () {
            return this.GetFieldValueOrThrowIfNull(this.startDate, "StartDate");
        },
        set: function (value) {
            this.startDate = new DateTime_1.DateTime(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Recurrence.prototype, "HasEnd", {
        /**
         * Gets a value indicating whether the pattern has a fixed number of occurrences or an end date.
         */
        get: function () {
            return this.numberOfOccurrences !== null || this.endDate !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Recurrence.prototype, "NumberOfOccurrences", {
        /**
         * Gets or sets the number of occurrences after which the recurrence ends. Setting NumberOfOccurrences resets EndDate.
         */
        get: function () {
            return this.numberOfOccurrences;
        },
        set: function (value) {
            var _this = this;
            if (value < 1) {
                throw new ArgumentException_1.ArgumentException(Strings_1.Strings.NumberOfOccurrencesMustBeGreaterThanZero);
            }
            this.SetFieldValue({ getValue: function () { return _this.numberOfOccurrences; }, setValue: function (updateValue) { _this.numberOfOccurrences = updateValue; } }, value);
            this.endDate = null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Recurrence.prototype, "EndDate", {
        /**
         * Gets or sets the date after which the recurrence ends. Setting EndDate resets NumberOfOccurrences.
         */
        get: function () {
            return this.endDate;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.endDate; }, setValue: function (updateValue) { _this.endDate = updateValue; } }, value);
            this.numberOfOccurrences = null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets a property value or throw if null.
     *
     * @typeparam   {T}     Value type.
     * @param   {T}         value   The value.
     * @param   {string}    name    The property name.
     * @return  {T}         Property value
     */
    Recurrence.prototype.GetFieldValueOrThrowIfNull = function (value, name) {
        if (typeof value !== 'undefined' && value !== null) {
            return value;
        }
        else {
            throw new ServiceValidationException_1.ServiceValidationException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyValueMustBeSpecifiedForRecurrencePattern, name));
        }
    };
    /**
     * @internal Validates this instance.
     */
    Recurrence.prototype.InternalValidate = function () {
        _super.prototype.InternalValidate.call(this);
        if (!this.startDate) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.RecurrencePatternMustHaveStartDate);
        }
    };
    /**
     * @internal Write properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    Recurrence.prototype.InternalWritePropertiesToXml = function (writer) { };
    /**
     * Compares two objects by converting them to JSON and comparing their string values
     *
     * @param   {Recurrence}    otherRecurrence   object to compare to
     * @return  {boolean}       true if the objects serialize to the same string
     */
    Recurrence.prototype.IsSame = function (otherRecurrence) {
        throw new Error("Recurrence.ts - IsSame : Not implemented. - no method calls it");
        // if (otherRecurrence == null) {
        //     return false;
        // }
        // string jsonString;
        // using(MemoryStream memoryStream = new MemoryStream())
        // {
        //     ((JsonObject)this.InternalToJson(null)).SerializeToJson(memoryStream);
        //     memoryStream.Position = 0;
        //     using(StreamReader reader = new StreamReader(memoryStream))
        //     {
        //         jsonString = reader.ReadToEnd();
        //     }
        // }
        // string otherJsonString;
        // using(MemoryStream memoryStream = new MemoryStream())
        // {
        //     ((JsonObject)otherRecurrence.InternalToJson(null)).SerializeToJson(memoryStream);
        //     memoryStream.Position = 0;
        //     using(StreamReader reader = new StreamReader(memoryStream))
        //     {
        //         otherJsonString = reader.ReadToEnd();
        //     }
        // }
        // return String.Equals(jsonString, otherJsonString, StringComparison.Ordinal);
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    Recurrence.prototype.LoadFromXmlJsObject = function (jsObject, service) {
    };
    /**
     * Sets up this recurrence so that it never ends. Calling NeverEnds is equivalent to setting both NumberOfOccurrences and EndDate to null.
     */
    Recurrence.prototype.NeverEnds = function () {
        this.numberOfOccurrences = null;
        this.endDate = null;
        this.Changed();
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    Recurrence.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.XmlElementName);
        this.InternalWritePropertiesToXml(writer);
        writer.WriteEndElement();
        var range;
        if (!this.HasEnd) {
            range = new NoEndRecurrenceRange_1.NoEndRecurrenceRange(this.StartDate);
        }
        else if (this.NumberOfOccurrences) {
            range = new NumberedRecurrenceRange_1.NumberedRecurrenceRange(this.StartDate, this.NumberOfOccurrences);
        }
        else {
            range = new EndDateRecurrenceRange_1.EndDateRecurrenceRange(this.StartDate, this.EndDate);
        }
        range.WriteToXml(writer, range.XmlElementName);
    };
    return Recurrence;
}(ComplexProperty_1.ComplexProperty));
exports.Recurrence = Recurrence;
(function (Recurrence) {
})(Recurrence = exports.Recurrence || (exports.Recurrence = {}));
exports.Recurrence = Recurrence;
