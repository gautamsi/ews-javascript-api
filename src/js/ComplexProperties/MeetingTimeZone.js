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
var EwsUtilities_1 = require("../Core/EwsUtilities");
var ExtensionMethods_1 = require("../ExtensionMethods");
var TimeChange_1 = require("./TimeChange");
var TimeZoneInfo_1 = require("../TimeZoneInfo");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * @internal Represents a time zone in which a meeting is defined.
 * @sealed
 */
var MeetingTimeZone = /** @class */ (function (_super) {
    __extends(MeetingTimeZone, _super);
    function MeetingTimeZone(timeZoneOrName) {
        if (timeZoneOrName === void 0) { timeZoneOrName = null; }
        var _this = _super.call(this) || this;
        _this.name = null;
        _this.baseOffset = null;
        _this.standard = null;
        _this.daylight = null;
        if (arguments.length === 1) {
            if (timeZoneOrName instanceof TimeZoneInfo_1.TimeZoneInfo) {
                // Unfortunately, MeetingTimeZone does not support all the time transition types
                // supported by TimeZoneInfo. That leaves us unable to accurately convert TimeZoneInfo
                // into MeetingTimeZone. So we don't... Instead, we emit the time zone's Id and
                // hope the server will find a match (which it should).
                _this.Name = timeZoneOrName.Id;
            }
            else {
                _this.name = timeZoneOrName;
            }
        }
        return _this;
    }
    Object.defineProperty(MeetingTimeZone.prototype, "Name", {
        /**
         * Gets or sets the name of the time zone.
         */
        get: function () {
            return this.name;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.name; }, setValue: function (fieldValue) { _this.name = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingTimeZone.prototype, "BaseOffset", {
        /**
         * Gets or sets the base offset of the time zone from the UTC time zone.
         */
        get: function () {
            return this.baseOffset;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.baseOffset; }, setValue: function (fieldValue) { _this.baseOffset = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingTimeZone.prototype, "Standard", {
        /**
         * Gets or sets a TimeChange defining when the time changes to Standard Time.
         */
        get: function () {
            return this.standard;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.standard; }, setValue: function (fieldValue) { _this.standard = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingTimeZone.prototype, "Daylight", {
        /**
         * Gets or sets a TimeChange defining when the time changes to Daylight Saving Time.
         */
        get: function () {
            return this.daylight;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.daylight; }, setValue: function (fieldValue) { _this.daylight = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    MeetingTimeZone.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.BaseOffset:
                    this.baseOffset = EwsUtilities_1.EwsUtilities.XSDurationToTimeSpan(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.Standard:
                    this.standard = new TimeChange_1.TimeChange();
                    this.standard.LoadFromXmlJsObject(jsonProperty[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.Daylight:
                    this.daylight = new TimeChange_1.TimeChange();
                    this.daylight.LoadFromXmlJsObject(jsonProperty[key], service);
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.TimeZoneName:
                    this.name = jsonProperty[key];
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * @internal Converts this meeting time zone into a TimeZoneInfo structure.
    */
    MeetingTimeZone.prototype.ToTimeZoneInfo = function () {
        // MeetingTimeZone.ToTimeZoneInfo throws ArgumentNullException if name is null
        // TimeZoneName is optional, may not show in the response.
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Name)) {
            return null;
        }
        var result = null;
        try {
            result = TimeZoneInfo_1.TimeZoneInfo.FindSystemTimeZoneById(this.Name);
        }
        catch (exception) {
            // Could not find a time zone with that Id on the local system.
        }
        // Again, we cannot accurately convert MeetingTimeZone into TimeZoneInfo
        // because TimeZoneInfo doesn't support absolute date transitions. So if
        // there is no system time zone that has a matching Id, we return null.
        return result;
    };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    MeetingTimeZone.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.TimeZoneName, this.Name);
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    MeetingTimeZone.prototype.WriteElementsToXml = function (writer) {
        if (this.BaseOffset) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.BaseOffset, EwsUtilities_1.EwsUtilities.TimeSpanToXSDuration(this.BaseOffset));
        }
        if (this.Standard != null) {
            this.Standard.WriteToXml(writer, XmlElementNames_1.XmlElementNames.Standard);
        }
        if (this.Daylight != null) {
            this.Daylight.WriteToXml(writer, XmlElementNames_1.XmlElementNames.Daylight);
        }
    };
    return MeetingTimeZone;
}(ComplexProperty_1.ComplexProperty));
exports.MeetingTimeZone = MeetingTimeZone;
