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
var ExtensionMethods_1 = require("../ExtensionMethods");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Encapsulates information on the changehighlights of a meeting request.
 *
 * @sealed
 */
var ChangeHighlights = /** @class */ (function (_super) {
    __extends(ChangeHighlights, _super);
    /**
     * @internal Initializes a new instance of the **ChangeHighlights** class.
     */
    function ChangeHighlights() {
        var _this = _super.call(this) || this;
        _this.hasLocationChanged = false;
        _this.location = null;
        _this.hasStartTimeChanged = false;
        _this.start = null;
        _this.hasEndTimeChanged = false;
        _this.end = null;
        return _this;
    }
    Object.defineProperty(ChangeHighlights.prototype, "HasLocationChanged", {
        /**
         * Gets a value indicating whether the location has changed.
         */
        get: function () {
            return this.hasLocationChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangeHighlights.prototype, "Location", {
        /**
         * Gets the old location
         */
        get: function () {
            return this.location;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangeHighlights.prototype, "HasStartTimeChanged", {
        /**
         * Gets a value indicating whether the the start time has changed.
         */
        get: function () {
            return this.hasStartTimeChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangeHighlights.prototype, "Start", {
        /**
         * Gets the old start date and time of the meeting.
         */
        get: function () {
            return this.start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangeHighlights.prototype, "HasEndTimeChanged", {
        /**
         * Gets a value indicating whether the the end time has changed.
         */
        get: function () {
            return this.hasEndTimeChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChangeHighlights.prototype, "End", {
        /**
         * Gets the old end date and time of the meeting.
         */
        get: function () {
            return this.end;
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
    ChangeHighlights.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.HasLocationChanged:
                    this.hasLocationChanged = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.Location:
                    this.location = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.HasStartTimeChanged:
                    this.hasStartTimeChanged = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.Start:
                    this.start = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.HasEndTimeChanged:
                    this.hasEndTimeChanged = ExtensionMethods_1.Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.End:
                    this.end = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    };
    return ChangeHighlights;
}(ComplexProperty_1.ComplexProperty));
exports.ChangeHighlights = ChangeHighlights;
