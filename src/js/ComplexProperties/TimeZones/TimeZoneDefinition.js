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
var AbsoluteDateTransition_1 = require("./AbsoluteDateTransition");
var DateTime_1 = require("../../DateTime");
var AltDictionary_1 = require("../../AltDictionary");
var EwsServiceJsonReader_1 = require("../../Core/EwsServiceJsonReader");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var ServiceLocalException_1 = require("../../Exceptions/ServiceLocalException");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var TimeSpan_1 = require("../../TimeSpan");
var TimeZoneInfo_1 = require("../../TimeZoneInfo");
var TimeZonePeriod_1 = require("./TimeZonePeriod");
var TimeZoneTransition_1 = require("./TimeZoneTransition");
var TimeZoneTransitionGroup_1 = require("./TimeZoneTransitionGroup");
var TraceFlags_1 = require("../../Enumerations/TraceFlags");
var XmlAttributeNames_1 = require("../../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("../ComplexProperty");
/**
 * @internal Represents a time zone period as defined in the EWS schema.
 */
var TimeZoneDefinition = /** @class */ (function (_super) {
    __extends(TimeZoneDefinition, _super);
    function TimeZoneDefinition(timeZoneInfo) {
        if (timeZoneInfo === void 0) { timeZoneInfo = null; }
        var _this = _super.call(this) || this;
        _this.periods = new AltDictionary_1.DictionaryWithStringKey();
        _this.transitionGroups = new AltDictionary_1.DictionaryWithStringKey();
        _this.transitions = [];
        if (timeZoneInfo != null && typeof timeZoneInfo !== 'undefined') {
            _this.Id = timeZoneInfo.Id;
            _this.Name = timeZoneInfo.DisplayName;
            // TimeZoneInfo only supports one standard period, which bias is the time zone's base
            // offset to UTC.
            var standardPeriod = new TimeZonePeriod_1.TimeZonePeriod();
            standardPeriod.Id = TimeZonePeriod_1.TimeZonePeriod.StandardPeriodId;
            standardPeriod.Name = TimeZonePeriod_1.TimeZonePeriod.StandardPeriodName;
            standardPeriod.Bias = new TimeSpan_1.TimeSpan(-timeZoneInfo.BaseUtcOffset.TotalMilliseconds);
            //ref: very complex to calculate timezone rules and transitions. it works without adding those elements as they are optional, need to find scenario where it is mandatory.
            // let adjustmentRules: TimeZoneInfo.AdjustmentRule[] = []; // = timeZoneInfo.GetAdjustmentRules();
            // let transitionToStandardPeriod: TimeZoneTransition = new TimeZoneTransition(this, standardPeriod);
            // if (adjustmentRules.length == 0) {
            //     this.periods.Add(standardPeriod.Id, standardPeriod);
            //     // If the time zone info doesn't support Daylight Saving Time, we just need to
            //     // create one transition to one group with one transition to the standard period.
            //     let transitionGroup: TimeZoneTransitionGroup = new TimeZoneTransitionGroup(this, "0");
            //     transitionGroup.Transitions.push(transitionToStandardPeriod);
            //     this.transitionGroups.Add(transitionGroup.Id, transitionGroup);
            //     let initialTransition: TimeZoneTransition = new TimeZoneTransition(this, transitionGroup);
            //     this.transitions.push(initialTransition);
            // }
            // else {
            //     for (let i = 0; i < adjustmentRules.length; i++) {
            //         let transitionGroup: TimeZoneTransitionGroup = new TimeZoneTransitionGroup(this, this.transitionGroups.Count.toString());
            //         transitionGroup.InitializeFromAdjustmentRule(adjustmentRules[i], standardPeriod);
            //         this.transitionGroups.Add(transitionGroup.Id, transitionGroup);
            //         let transition: TimeZoneTransition;
            //         if (i == 0) {
            //             // If the first adjustment rule's start date in not undefined (DateTime.MinValue)
            //             // we need to add a dummy group with a single, simple transition to the Standard
            //             // period and a group containing the transitions mapping to the adjustment rule.
            //             if (adjustmentRules[i].DateStart > DateTime.MinValue.Date) {
            //                 let transitionToDummyGroup: TimeZoneTransition = new TimeZoneTransition(
            //                     this,
            //                     this.CreateTransitionGroupToPeriod(standardPeriod));
            //                 this.transitions.push(transitionToDummyGroup);
            //                 let absoluteDateTransition: AbsoluteDateTransition = new AbsoluteDateTransition(this, transitionGroup);
            //                 absoluteDateTransition.DateTime = adjustmentRules[i].DateStart;
            //                 transition = absoluteDateTransition;
            //                 this.periods.Add(standardPeriod.Id, standardPeriod);
            //             }
            //             else {
            //                 transition = new TimeZoneTransition(this, transitionGroup);
            //             }
            //         }
            //         else {
            //             let absoluteDateTransition: AbsoluteDateTransition = new AbsoluteDateTransition(this, transitionGroup);
            //             absoluteDateTransition.DateTime = adjustmentRules[i].DateStart;
            //             transition = absoluteDateTransition;
            //         }
            //         this.transitions.push(transition);
            //     }
            //     // If the last adjustment rule's end date is not undefined (DateTime.MaxValue),
            //     // we need to create another absolute date transition that occurs the date after
            //     // the last rule's end date. We target this additional transition to a group that
            //     // contains a single simple transition to the Standard period.
            //     let lastAdjustmentRuleEndDate: DateTime = adjustmentRules[adjustmentRules.length - 1].DateEnd;
            //     if (lastAdjustmentRuleEndDate < DateTime.MaxValue.Date) {
            //         let transitionToDummyGroup: AbsoluteDateTransition = new AbsoluteDateTransition(
            //             this,
            //             this.CreateTransitionGroupToPeriod(standardPeriod));
            //         transitionToDummyGroup.DateTime = lastAdjustmentRuleEndDate.AddDays(1);
            //         this.transitions.push(transitionToDummyGroup);
            //     }
            // }
        }
        return _this;
    }
    Object.defineProperty(TimeZoneDefinition.prototype, "Periods", {
        /**
         * @internal Gets the periods associated with this time zone definition, indexed by Id.
         */
        get: function () {
            return this.periods;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneDefinition.prototype, "TransitionGroups", {
        /**
         * @internal Gets the transition groups associated with this time zone definition, indexed by Id.
         */
        get: function () {
            return this.transitionGroups;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Compares the transitions.
     *
     * @param   {TimeZoneTransition}   x   The first transition.
     * @param   {TimeZoneTransition}   y   The second transition.
     * @return  {number}       A negative number if x is less than y, 0 if x and y are equal, a positive number if x is greater than y.
     */
    TimeZoneDefinition.prototype.CompareTransitions = function (x, y) {
        if (x == y) {
            return 0;
        }
        else if (x instanceof TimeZoneTransition_1.TimeZoneTransition) {
            return -1;
        }
        else if (y instanceof TimeZoneTransition_1.TimeZoneTransition) {
            return 1;
        }
        else {
            var firstTransition = x;
            var secondTransition = y;
            return DateTime_1.DateTime.Compare(firstTransition.DateTime, secondTransition.DateTime);
        }
    };
    /**
     * Adds a transition group with a single transition to the specified period.
     *
     * @param   {TimeZonePeriod}   timeZonePeriod   The time zone period.
     * @return  {TimeZoneTransitionGroup}           A TimeZoneTransitionGroup.
     */
    TimeZoneDefinition.prototype.CreateTransitionGroupToPeriod = function (timeZonePeriod) {
        var transitionToPeriod = new TimeZoneTransition_1.TimeZoneTransition(this, timeZonePeriod);
        var transitionGroup = new TimeZoneTransitionGroup_1.TimeZoneTransitionGroup(this, this.transitionGroups.Count.toString());
        transitionGroup.Transitions.push(transitionToPeriod);
        this.transitionGroups.Add(transitionGroup.Id, transitionGroup);
        return transitionGroup;
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    TimeZoneDefinition.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlAttributeNames_1.XmlAttributeNames.Name:
                    this.Name = jsObject[key];
                    break;
                case XmlAttributeNames_1.XmlAttributeNames.Id:
                    this.Id = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.Periods:
                    var jsperiods = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject[key], XmlElementNames_1.XmlElementNames.Period);
                    for (var _i = 0, jsperiods_1 = jsperiods; _i < jsperiods_1.length; _i++) {
                        var jsPeriod = jsperiods_1[_i];
                        var period = new TimeZonePeriod_1.TimeZonePeriod();
                        period.LoadFromXmlJsObject(jsPeriod, service);
                        // OM:1648848 Bad timezone data from clients can include duplicate rules
                        // for one year, with duplicate ID. In that case, let the first one win.
                        if (!this.periods.containsKey(period.Id)) {
                            this.periods.Add(period.Id, period);
                        }
                        else {
                            service.TraceMessage(TraceFlags_1.TraceFlags.EwsTimeZones, ExtensionMethods_1.StringHelper.Format("An entry with the same key (Id) '{0}' already exists in Periods. Cannot add another one. Existing entry: [Name='{1}', Bias='{2}']. Entry to skip: [Name='{3}', Bias='{4}'].", period.Id, this.Periods.get(period.Id).Name, this.Periods.get(period.Id).Bias, period.Name, period.Bias));
                        }
                    }
                    break;
                case XmlElementNames_1.XmlElementNames.TransitionsGroups:
                    var arrayOfTransitionsType = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject[key], XmlElementNames_1.XmlElementNames.TransitionsGroup);
                    for (var _a = 0, arrayOfTransitionsType_1 = arrayOfTransitionsType; _a < arrayOfTransitionsType_1.length; _a++) {
                        var arrayOfTransitionsTypeInstance = arrayOfTransitionsType_1[_a];
                        var transitionGroup = new TimeZoneTransitionGroup_1.TimeZoneTransitionGroup(this);
                        transitionGroup.LoadFromXmlJsObject(arrayOfTransitionsTypeInstance, service);
                        this.transitionGroups.addUpdate(transitionGroup.Id, transitionGroup);
                    }
                    break;
                case XmlElementNames_1.XmlElementNames.Transitions:
                    for (var _key in jsObject[key]) {
                        if (TimeZoneTransitionGroup_1.TimeZoneTransitionGroup.transitionTypes.indexOf(_key) >= 0) {
                            var transitions = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject[key], _key);
                            for (var _b = 0, transitions_1 = transitions; _b < transitions_1.length; _b++) {
                                var item = transitions_1[_b];
                                var transition = TimeZoneTransition_1.TimeZoneTransition.Create(this, _key);
                                transition.LoadFromXmlJsObject(item, service);
                                this.transitions.push(transition);
                            }
                        }
                    }
                    break;
                default:
                    break;
            }
        }
        // EWS can return a TimeZone definition with no Id. Generate a new Id in this case.
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Id)) {
            var nameValue = ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Name) ? ExtensionMethods_1.StringHelper.Empty : this.Name;
            //this.Id = TimeZoneDefinition.NoIdPrefix + Math.abs(nameValue.GetHashCode()).ToString();
            this.Id = TimeZoneDefinition.NoIdPrefix + nameValue;
        }
        this.transitions.sort(this.CompareTransitions);
    };
    /**
     * @internal Converts this time zone definition into a TimeZoneInfo structure.
     *
     * @param   {ExchangeService}   service   The service.
     * @return  {TimeZoneInfo}      A TimeZoneInfo representing the same time zone as this definition.
     */
    TimeZoneDefinition.prototype.ToTimeZoneInfo = function (service, parse) {
        if (parse === void 0) { parse = false; }
        this.Validate();
        if (!parse) {
            //ref: skipped creation based on server data, directly creating using TimeZone Mapping data. complex to translate Windows TimeZoneInfo subclasses to javascript.
            return TimeZoneInfo_1.TimeZoneInfo.FindSystemTimeZoneById(this.Id);
        }
        var result;
        // Retrieve the base offset to UTC, standard and daylight display names from
        // the last transition group, which is the one that currently applies given that
        // transitions are ordered chronologically.
        var creationParams = this.transitions[this.transitions.length - 1].TargetGroup.GetCustomTimeZoneCreationParams();
        var adjustmentRules = [];
        var startDate = DateTime_1.DateTime.MinValue;
        var endDate;
        var effectiveEndDate;
        for (var i = 0; i < this.transitions.length; i++) {
            if (i < this.transitions.length - 1) {
                endDate = this.transitions[i + 1].DateTime;
                effectiveEndDate = endDate.AddDays(-1);
            }
            else {
                endDate = DateTime_1.DateTime.MaxValue;
                effectiveEndDate = endDate;
            }
            // OM:1648848 Due to bad timezone data from clients the 
            // startDate may not always come before the effectiveEndDate
            if (startDate < effectiveEndDate) {
                var adjustmentRule = this.transitions[i].TargetGroup.CreateAdjustmentRule(startDate, effectiveEndDate);
                if (adjustmentRule != null) {
                    adjustmentRules.push(adjustmentRule);
                }
                startDate = endDate;
            }
            else {
                // service.TraceMessage(
                //     TraceFlags.EwsTimeZones,
                //         string.Format(
                //             "The startDate '{0}' is not before the effectiveEndDate '{1}'. Will skip creating adjustment rule.",
                //             startDate,
                //             effectiveEndDate));
            }
        }
        if (adjustmentRules.length == 0) {
            // If there are no adjustment rule, the time zone does not support Daylight
            // saving time.
            result = TimeZoneInfo_1.TimeZoneInfo.CreateCustomTimeZone(this.Id, creationParams.BaseOffsetToUtc, this.Name, creationParams.StandardDisplayName);
        }
        else {
            result = TimeZoneInfo_1.TimeZoneInfo.CreateCustomTimeZone(this.Id, creationParams.BaseOffsetToUtc, this.Name, creationParams.StandardDisplayName, creationParams.DaylightDisplayName, adjustmentRules);
        }
        return result;
    };
    /**
     * @internal Validates this time zone definition.
     */
    TimeZoneDefinition.prototype.Validate = function () {
        // The definition must have at least one period, one transition group and one transition,
        // and there must be as many transitions as there are transition groups.
        if (this.periods.Count < 1 || this.transitions.length < 1 || this.transitionGroups.Count < 1 ||
            this.transitionGroups.Count != this.transitions.length) {
            throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
        }
        // The first transition must be of type TimeZoneTransition.
        if (!(this.transitions[0] instanceof TimeZoneTransition_1.TimeZoneTransition)) {
            throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
        }
        // All transitions must be to transition groups and be either TimeZoneTransition or
        // AbsoluteDateTransition instances.
        for (var _i = 0, _a = this.transitions; _i < _a.length; _i++) {
            var transition = _a[_i];
            //Type transitionType = transition.GetType();
            if (!(transition instanceof TimeZoneTransition_1.TimeZoneTransition) && !(transition instanceof AbsoluteDateTransition_1.AbsoluteDateTransition)) {
                throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
            }
            if (transition.TargetGroup == null) {
                throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
            }
        }
        // All transition groups must be valid.
        for (var _b = 0, _c = this.transitionGroups.Values; _b < _c.length; _b++) {
            var transitionGroup = _c[_b];
            transitionGroup.Validate();
        }
    };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    TimeZoneDefinition.prototype.WriteAttributesToXml = function (writer) {
        // The Name attribute is only supported in Exchange 2010 and above.
        if (writer.Service.RequestedServerVersion != ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Name, this.Name);
        }
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Id, this.Id);
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    TimeZoneDefinition.prototype.WriteElementsToXml = function (writer) {
        // We only emit the full time zone definition against Exchange 2010 servers and above.
        if (writer.Service.RequestedServerVersion != ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1) {
            if (this.periods.Count > 0) {
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Periods);
                for (var _i = 0, _a = this.periods.Items; _i < _a.length; _i++) {
                    var keyValuePair = _a[_i];
                    keyValuePair.value.WriteToXml(writer);
                }
                writer.WriteEndElement(); // Periods
            }
            if (this.transitionGroups.Count > 0) {
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.TransitionsGroups);
                for (var _b = 0, _c = this.transitionGroups.Items; _b < _c.length; _b++) {
                    var transitionPair = _c[_b];
                    transitionPair.value.WriteToXml(writer);
                }
                writer.WriteEndElement(); // TransitionGroups
            }
            if (this.transitions.length > 0) {
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Transitions);
                for (var _d = 0, _e = this.transitions; _d < _e.length; _d++) {
                    var transition = _e[_d];
                    transition.WriteToXml(writer);
                }
                writer.WriteEndElement(); // Transitions
            }
        }
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    TimeZoneDefinition.prototype.WriteToXml = function (writer) {
        _super.prototype.WriteToXml.call(this, writer, XmlElementNames_1.XmlElementNames.TimeZoneDefinition);
    };
    /**
     * Prefix for generated ids.
     */
    TimeZoneDefinition.NoIdPrefix = "NoId_";
    return TimeZoneDefinition;
}(ComplexProperty_1.ComplexProperty));
exports.TimeZoneDefinition = TimeZoneDefinition;
