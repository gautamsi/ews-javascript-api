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
var SuggestionQuality_1 = require("../../Enumerations/SuggestionQuality");
var TimeSuggestion_1 = require("./TimeSuggestion");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var DateTime_1 = require("../../DateTime");
var EwsServiceJsonReader_1 = require("../../Core/EwsServiceJsonReader");
var ComplexProperty_1 = require("../ComplexProperty");
var EwsLogging_1 = require("../../Core/EwsLogging");
var Suggestion = /** @class */ (function (_super) {
    __extends(Suggestion, _super);
    function Suggestion() {
        var _this = _super.call(this) || this;
        _this.date = null;
        _this.quality = SuggestionQuality_1.SuggestionQuality.Excellent;
        _this.timeSuggestions = []; /*System.Collections.ObjectModel.Collection<TimeSuggestion>;*/
        return _this;
    }
    Object.defineProperty(Suggestion.prototype, "Date", {
        get: function () {
            return this.date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Suggestion.prototype, "Quality", {
        get: function () {
            return this.quality;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Suggestion.prototype, "TimeSuggestions", {
        get: function () {
            return this.timeSuggestions;
        },
        enumerable: true,
        configurable: true
    });
    //LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("Suggestion.ts - LoadFromJson : Not implemented."); }
    Suggestion.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        this.date = DateTime_1.DateTime.Parse(jsonProperty[XmlElementNames_1.XmlElementNames.Date]);
        EwsLogging_1.EwsLogging.Log("bug: Suggestion->LoadFromXml:    need to change to millisecond and with datetimekind", true);
        //debugger;
        this.quality = SuggestionQuality_1.SuggestionQuality[jsonProperty[XmlElementNames_1.XmlElementNames.DayQuality]];
        var suggestionArrayObj = jsonProperty[XmlElementNames_1.XmlElementNames.SuggestionArray];
        var suggestions = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(suggestionArrayObj, XmlElementNames_1.XmlElementNames.Suggestion);
        for (var _i = 0, suggestions_1 = suggestions; _i < suggestions_1.length; _i++) {
            var suggestion = suggestions_1[_i];
            var timeSuggestion = new TimeSuggestion_1.TimeSuggestion();
            timeSuggestion.LoadFromXmlJsObject(suggestion, service);
            this.timeSuggestions.push(timeSuggestion);
        }
    };
    return Suggestion;
}(ComplexProperty_1.ComplexProperty));
exports.Suggestion = Suggestion;
