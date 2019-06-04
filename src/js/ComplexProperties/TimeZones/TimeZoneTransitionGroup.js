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
var TimeSpan_1 = require("../../TimeSpan");
var TimeZoneInfo_1 = require("../../TimeZoneInfo");
var EwsServiceJsonReader_1 = require("../../Core/EwsServiceJsonReader");
var ServiceLocalException_1 = require("../../Exceptions/ServiceLocalException");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var TimeZonePeriod_1 = require("./TimeZonePeriod");
var TimeZoneTransition_1 = require("./TimeZoneTransition");
var XmlAttributeNames_1 = require("../../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var ComplexProperty_1 = require("../ComplexProperty");
/**
 * @internal Represents a group of time zone period transitions.
 */
var TimeZoneTransitionGroup = /** @class */ (function (_super) {
    __extends(TimeZoneTransitionGroup, _super);
    function TimeZoneTransitionGroup(timeZoneDefinition, id) {
        var _this = _super.call(this) || this;
        //private id: string;
        _this.transitions = [];
        _this.timeZoneDefinition = timeZoneDefinition;
        _this.Id = id;
        return _this;
    }
    Object.defineProperty(TimeZoneTransitionGroup.prototype, "SupportsDaylight", {
        /**
         * @internal Gets a value indicating whether this group contains a transition to the Daylight period.
         *
         * @value   *true* if this group contains a transition to daylight; otherwise, *false*.
         */
        get: function () {
            return this.transitions.length == 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneTransitionGroup.prototype, "TransitionToDaylight", {
        /**
         * Gets the transition to the Daylight period.
         */
        get: function () {
            this.InitializeTransitions();
            return this.transitionToDaylight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneTransitionGroup.prototype, "TransitionToStandard", {
        /**
         * Gets the transition to the Standard period.
         */
        get: function () {
            this.InitializeTransitions();
            return this.transitionToStandard;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneTransitionGroup.prototype, "Transitions", {
        /**
         * @internal Gets the transitions in this group.
         */
        get: function () {
            return this.transitions;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates a time zone adjustment rule.
     *
     * @param   {DateTime}   startDate   The start date of the adjustment rule.
     * @param   {DateTime}   endDate     The end date of the adjustment rule.
     * @return  {TimeZoneInfo.AdjustmentRule}   An TimeZoneInfo.AdjustmentRule.
     */
    TimeZoneTransitionGroup.prototype.CreateAdjustmentRule = function (startDate, endDate) {
        // If there is only one transition, we can't create an adjustment rule. We have to assume
        // that the base offset to UTC is unchanged.
        if (this.transitions.length == 1) {
            return null;
        }
        return TimeZoneInfo_1.TimeZoneInfo.AdjustmentRule.CreateAdjustmentRule(startDate.Date, endDate.Date, this.GetDaylightDelta(), this.TransitionToDaylight.CreateTransitionTime(), this.TransitionToStandard.CreateTransitionTime());
    };
    /**
     * @internal Gets the offset to UTC based on this group's transitions.
     *
     * @returns {TimeZoneTransitionGroup.CustomTimeZoneCreateParams}
     */
    TimeZoneTransitionGroup.prototype.GetCustomTimeZoneCreationParams = function () {
        var result = new TimeZoneTransitionGroup.CustomTimeZoneCreateParams();
        if (this.TransitionToDaylight != null) {
            result.DaylightDisplayName = this.TransitionToDaylight.TargetPeriod.Name;
        }
        result.StandardDisplayName = this.TransitionToStandard.TargetPeriod.Name;
        // Assume that the standard period's offset is the base offset to UTC.
        // EWS returns a positive offset for time zones that are behind UTC, and
        // a negative one for time zones ahead of UTC. TimeZoneInfo does it the other
        // way around.
        result.BaseOffsetToUtc = new TimeSpan_1.TimeSpan(-this.TransitionToStandard.TargetPeriod.Bias);
        return result;
    };
    /**
     * @internal Gets the delta offset for the daylight.
     *
     * @returns {TimeSpan}
     */
    TimeZoneTransitionGroup.prototype.GetDaylightDelta = function () {
        if (this.SupportsDaylight) {
            // EWS returns a positive offset for time zones that are behind UTC, and
            // a negative one for time zones ahead of UTC. TimeZoneInfo does it the other
            // way around.
            return this.TransitionToStandard.TargetPeriod.Bias.Subtract(this.TransitionToDaylight.TargetPeriod.Bias);
        }
        else {
            return TimeSpan_1.TimeSpan.Zero;
        }
    };
    /**
     * Initializes this transition group based on the specified asjustment rule.
     *
     * @param   {TimeZoneInfo.AdjustmentRule}   adjustmentRule   The adjustment rule to initialize from.
     * @param   {TimeZonePeriod}                standardPeriod   A reference to the pre-created standard period.
     */
    TimeZoneTransitionGroup.prototype.InitializeFromAdjustmentRule = function (adjustmentRule, standardPeriod) {
        var daylightPeriod = new TimeZonePeriod_1.TimeZonePeriod();
        // Generate an Id of the form "Daylight/2008"
        daylightPeriod.Id = ExtensionMethods_1.StringHelper.Format("{0}/{1}", TimeZonePeriod_1.TimeZonePeriod.DaylightPeriodId, adjustmentRule.DateStart.Year);
        daylightPeriod.Name = TimeZonePeriod_1.TimeZonePeriod.DaylightPeriodName;
        daylightPeriod.Bias = new TimeSpan_1.TimeSpan(standardPeriod.Bias.TotalMilliseconds - adjustmentRule.DaylightDelta.TotalMilliseconds);
        this.timeZoneDefinition.Periods.Add(daylightPeriod.Id, daylightPeriod);
        this.transitionToDaylight = TimeZoneTransition_1.TimeZoneTransition.CreateTimeZoneTransition(this.timeZoneDefinition, daylightPeriod, adjustmentRule.DaylightTransitionStart);
        var standardPeriodToSet = new TimeZonePeriod_1.TimeZonePeriod();
        standardPeriodToSet.Id = ExtensionMethods_1.StringHelper.Format("{0}/{1}", standardPeriod.Id, adjustmentRule.DateStart.Year);
        standardPeriodToSet.Name = standardPeriod.Name;
        standardPeriodToSet.Bias = standardPeriod.Bias;
        this.timeZoneDefinition.Periods.Add(standardPeriodToSet.Id, standardPeriodToSet);
        this.transitionToStandard = TimeZoneTransition_1.TimeZoneTransition.CreateTimeZoneTransition(this.timeZoneDefinition, standardPeriodToSet, adjustmentRule.DaylightTransitionEnd);
        this.transitions.push(this.transitionToDaylight);
        this.transitions.push(this.transitionToStandard);
    };
    /**
     * Initializes the private members holding references to the transitions to the Daylight and Standard periods.
     */
    TimeZoneTransitionGroup.prototype.InitializeTransitions = function () {
        if (this.transitionToStandard == null) {
            for (var _i = 0, _a = this.transitions; _i < _a.length; _i++) {
                var transition = _a[_i];
                if (transition.TargetPeriod.IsStandardPeriod || (this.transitions.length == 1)) {
                    this.transitionToStandard = transition;
                }
                else {
                    this.transitionToDaylight = transition;
                }
            }
        }
        // If we didn't find a Standard period, this is an invalid time zone group.
        if (this.transitionToStandard == null) {
            throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
        }
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    TimeZoneTransitionGroup.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        if (jsObject[XmlElementNames_1.XmlElementNames.Id]) {
            this.Id = jsObject[XmlElementNames_1.XmlElementNames.Id];
        }
        for (var key in jsObject) {
            if (TimeZoneTransitionGroup.transitionTypes.indexOf(key) >= 0) {
                var transitions = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject, key);
                for (var _i = 0, transitions_1 = transitions; _i < transitions_1.length; _i++) {
                    var item = transitions_1[_i];
                    var transition = TimeZoneTransition_1.TimeZoneTransition.Create(this.timeZoneDefinition, key);
                    transition.LoadFromXmlJsObject(item, service);
                    this.transitions.push(transition);
                }
            }
        }
    };
    /**
     * @internal Validates this transition group.
     */
    TimeZoneTransitionGroup.prototype.Validate = function () {
        // There must be exactly one or two transitions in the group.
        if (this.transitions.length < 1 || this.transitions.length > 2) {
            throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
        }
        // If there is only one transition, it must be of type TimeZoneTransition
        if (this.transitions.length == 1 && !(this.transitions[0] instanceof TimeZoneTransition_1.TimeZoneTransition)) {
            throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
        }
        // If there are two transitions, none of them should be of type TimeZoneTransition
        if (this.transitions.length == 2) {
            for (var _i = 0, _a = this.transitions; _i < _a.length; _i++) {
                var transition = _a[_i];
                try {
                    var type = transition.constructor.name;
                    //if (transition instanceof TimeZoneTransition) { // ref:  can not use due to prototype chain issue
                    if (type === "TimeZoneTransition") {
                        throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
                    }
                }
                catch (error) {
                }
            }
        }
        // All the transitions in the group must be to a period.
        for (var _b = 0, _c = this.transitions; _b < _c.length; _b++) {
            var transition = _c[_b];
            if (transition.TargetPeriod == null) {
                throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
            }
        }
    };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    TimeZoneTransitionGroup.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Id, this.Id);
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    TimeZoneTransitionGroup.prototype.WriteElementsToXml = function (writer) {
        for (var _i = 0, _a = this.transitions; _i < _a.length; _i++) {
            var transition = _a[_i];
            transition.WriteToXml(writer);
        }
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    TimeZoneTransitionGroup.prototype.WriteToXml = function (writer) {
        _super.prototype.WriteToXml.call(this, writer, XmlElementNames_1.XmlElementNames.TransitionsGroup);
    };
    /** @internal */
    TimeZoneTransitionGroup.transitionTypes = [XmlElementNames_1.XmlElementNames.AbsoluteDateTransition, XmlElementNames_1.XmlElementNames.RecurringDayTransition, XmlElementNames_1.XmlElementNames.RecurringDateTransition, XmlElementNames_1.XmlElementNames.Transition];
    return TimeZoneTransitionGroup;
}(ComplexProperty_1.ComplexProperty));
exports.TimeZoneTransitionGroup = TimeZoneTransitionGroup;
(function (TimeZoneTransitionGroup) {
    /**
     * @internal Represents custom time zone creation parameters.
     */
    var CustomTimeZoneCreateParams = /** @class */ (function () {
        /**
         * @internal Initializes a new instance of the **CustomTimeZoneCreateParams** class.
         */
        function CustomTimeZoneCreateParams() {
            this.baseOffsetToUtc = null;
            this.standardDisplayName = null;
            this.daylightDisplayName = null;
        }
        Object.defineProperty(CustomTimeZoneCreateParams.prototype, "BaseOffsetToUtc", {
            /**
             * @internal Gets or sets the base offset to UTC.
             */
            get: function () {
                return this.baseOffsetToUtc;
            },
            set: function (value) {
                this.baseOffsetToUtc = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomTimeZoneCreateParams.prototype, "StandardDisplayName", {
            /**
             * @internal Gets or sets the display name of the standard period.
             */
            get: function () {
                return this.standardDisplayName;
            },
            set: function (value) {
                this.standardDisplayName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomTimeZoneCreateParams.prototype, "DaylightDisplayName", {
            /**
             * @internal Gets or sets the display name of the daylight period.
             */
            get: function () {
                return this.daylightDisplayName;
            },
            set: function (value) {
                this.daylightDisplayName = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CustomTimeZoneCreateParams.prototype, "HasDaylightPeriod", {
            /**
             * @internal Gets a value indicating whether the custom time zone should have a daylight period.
             *
             * @value   *true* if the custom time zone should have a daylight period; otherwise, *false*.
             */
            get: function () {
                return !ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.daylightDisplayName);
            },
            enumerable: true,
            configurable: true
        });
        return CustomTimeZoneCreateParams;
    }());
    TimeZoneTransitionGroup.CustomTimeZoneCreateParams = CustomTimeZoneCreateParams;
})(TimeZoneTransitionGroup = exports.TimeZoneTransitionGroup || (exports.TimeZoneTransitionGroup = {}));
exports.TimeZoneTransitionGroup = TimeZoneTransitionGroup;
