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
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var SuggestionQuality_1 = require("../../Enumerations/SuggestionQuality");
var ConflictType_1 = require("../../Enumerations/ConflictType");
var Conflict_1 = require("./Conflict");
var EwsServiceJsonReader_1 = require("../../Core/EwsServiceJsonReader");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var EwsLogging_1 = require("../../Core/EwsLogging");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var ComplexProperty_1 = require("../ComplexProperty");
var TimeSuggestion = /** @class */ (function (_super) {
    __extends(TimeSuggestion, _super);
    function TimeSuggestion() {
        var _this = _super.call(this) || this;
        _this.meetingTime = null;
        _this.isWorkTime = false;
        _this.quality = SuggestionQuality_1.SuggestionQuality.Excellent;
        _this.conflicts = []; // System.Collections.ObjectModel.Collection<Conflict>;
        return _this;
    }
    Object.defineProperty(TimeSuggestion.prototype, "MeetingTime", {
        get: function () {
            return this.meetingTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSuggestion.prototype, "IsWorkTime", {
        get: function () {
            return this.isWorkTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSuggestion.prototype, "Quality", {
        get: function () {
            return this.quality;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSuggestion.prototype, "Conflicts", {
        get: function () {
            return this.conflicts;
        },
        enumerable: true,
        configurable: true
    });
    //LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("TimeSuggestion.ts - LoadFromJson : Not implemented."); }
    TimeSuggestion.prototype.LoadFromXmlJsObject = function (jsonProperty, service) {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.MeetingTime:
                    this.meetingTime = EwsUtilities_1.EwsUtilities.ParseAsUnbiasedDatetimescopedToServicetimeZone(jsonProperty[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.IsWorkTime:
                    this.isWorkTime = ExtensionMethods_1.Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.SuggestionQuality:
                    this.quality = SuggestionQuality_1.SuggestionQuality[jsonProperty[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.AttendeeConflictDataArray:
                    var jsConflictDataArray = jsonProperty[key];
                    for (var conflictKey in jsConflictDataArray) {
                        if (conflictKey.indexOf("__") === 0)
                            continue;
                        var conflictType = ConflictType_1.ConflictType.IndividualAttendeeConflict;
                        var jsConflicts = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsConflictDataArray, conflictKey);
                        switch (conflictKey) {
                            case XmlElementNames_1.XmlElementNames.UnknownAttendeeConflictData:
                                conflictType = ConflictType_1.ConflictType.UnknownAttendeeConflict;
                                break;
                            case XmlElementNames_1.XmlElementNames.TooBigGroupAttendeeConflictData:
                                conflictType = ConflictType_1.ConflictType.GroupTooBigConflict;
                                break;
                            case XmlElementNames_1.XmlElementNames.IndividualAttendeeConflictData:
                                conflictType = ConflictType_1.ConflictType.IndividualAttendeeConflict;
                                break;
                            case XmlElementNames_1.XmlElementNames.GroupAttendeeConflictData:
                                conflictType = ConflictType_1.ConflictType.GroupConflict;
                                break;
                            default:
                                EwsLogging_1.EwsLogging.Assert(false, "TimeSuggestion.TryReadElementFromJson", ExtensionMethods_1.StringHelper.Format("The {0} element name does not map to any AttendeeConflict descendant.", ExtensionMethods_1.TypeSystem.GetJsObjectTypeName(jsConflicts)));
                                // The following line to please the compiler
                                break;
                        }
                        for (var _i = 0, jsConflicts_1 = jsConflicts; _i < jsConflicts_1.length; _i++) {
                            var conflictItem = jsConflicts_1[_i];
                            var conflict = new Conflict_1.Conflict(conflictType);
                            conflict.LoadFromXmlJsObject(conflictItem, service);
                            this.conflicts.push(conflict);
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    };
    return TimeSuggestion;
}(ComplexProperty_1.ComplexProperty));
exports.TimeSuggestion = TimeSuggestion;
