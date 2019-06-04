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
var ServiceLocalException_1 = require("../../Exceptions/ServiceLocalException");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var TimeZonePeriod_1 = require("./TimeZonePeriod");
var TimeZoneTransitionGroup_1 = require("./TimeZoneTransitionGroup");
var TypeContainer_1 = require("../../TypeContainer");
var XmlAttributeNames_1 = require("../../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("../ComplexProperty");
/**
 * @internal Represents the base class for all time zone transitions.
 */
var TimeZoneTransition = /** @class */ (function (_super) {
    __extends(TimeZoneTransition, _super);
    function TimeZoneTransition(timeZoneDefinition, targetPeriodOrGroup) {
        var _this = _super.call(this) || this;
        _this.timeZoneDefinition = timeZoneDefinition;
        if (targetPeriodOrGroup instanceof TimeZonePeriod_1.TimeZonePeriod) {
            _this.targetPeriod = targetPeriodOrGroup;
        }
        else if (targetPeriodOrGroup instanceof TimeZoneTransitionGroup_1.TimeZoneTransitionGroup) {
            _this.targetGroup = targetPeriodOrGroup;
        }
        return _this;
    }
    Object.defineProperty(TimeZoneTransition.prototype, "TargetPeriod", {
        /**
         * @internal Gets the target period of the transition.
         */
        get: function () {
            return this.targetPeriod;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneTransition.prototype, "TargetGroup", {
        /**
         * @internal Gets the target transition group of the transition.
         */
        get: function () {
            return this.targetGroup;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates a time zone period transition of the appropriate type given an XML element name.
     *
     * @param   {TimeZoneDefinition}    timeZoneDefinition   The time zone definition to which the transition will belong.
     * @param   {string}                xmlElementName       The XML element name.
     * @return  {TimeZoneTransition}    A TimeZonePeriodTransition instance.
     */
    TimeZoneTransition.Create = function (timeZoneDefinition, xmlElementName) {
        switch (xmlElementName) {
            case XmlElementNames_1.XmlElementNames.AbsoluteDateTransition:
                return new TypeContainer_1.TypeContainer.AbsoluteDateTransition(timeZoneDefinition);
            case XmlElementNames_1.XmlElementNames.RecurringDayTransition:
                return new TypeContainer_1.TypeContainer.RelativeDayOfMonthTransition(timeZoneDefinition);
            case XmlElementNames_1.XmlElementNames.RecurringDateTransition:
                return new TypeContainer_1.TypeContainer.AbsoluteDayOfMonthTransition(timeZoneDefinition);
            case XmlElementNames_1.XmlElementNames.Transition:
                return new TimeZoneTransition(timeZoneDefinition);
            default:
                throw new ServiceLocalException_1.ServiceLocalException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.UnknownTimeZonePeriodTransitionType, xmlElementName));
        }
    };
    /**
     * @internal Creates a time zone transition based on the specified transition time.
     *
     * @param   {TimeZoneDefinition}            timeZoneDefinition   The time zone definition that will own the transition.
     * @param   {TimeZonePeriod}                targetPeriod         The period the transition will target.
     * @param   {TimeZoneInfo.TransitionTime}   transitionTime       The transition time to initialize from.
     * @return  {TimeZoneTransition}            A TimeZoneTransition.
     */
    TimeZoneTransition.CreateTimeZoneTransition = function (timeZoneDefinition, targetPeriod, transitionTime) {
        var transition;
        if (transitionTime.IsFixedDateRule) {
            transition = new TypeContainer_1.TypeContainer.AbsoluteDayOfMonthTransition(timeZoneDefinition, targetPeriod);
        }
        else {
            transition = new TypeContainer_1.TypeContainer.RelativeDayOfMonthTransition(timeZoneDefinition, targetPeriod);
        }
        transition.InitializeFromTransitionTime(transitionTime);
        return transition;
    };
    /**
     * @internal Creates a time zone transition time.
     * @virtual
     *
     * @return  {TimeZoneInfo.TransitionTime}      A TimeZoneInfo.TransitionTime.
     */
    TimeZoneTransition.prototype.CreateTransitionTime = function () {
        throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.InvalidOrUnsupportedTimeZoneDefinition);
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    TimeZoneTransition.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.Transition;
    };
    /**
     * @internal Initializes this transition based on the specified transition time.
     * @virtual
     *
     * @param   {TimeZoneInfo.TransitionTime}   transitionTime   The transition time to initialize from.
     */
    TimeZoneTransition.prototype.InitializeFromTransitionTime = function (transitionTime) { };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    TimeZoneTransition.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.To:
                    var targetKind = jsObject[key][XmlAttributeNames_1.XmlAttributeNames.Kind];
                    var targetId = jsObject[key][XmlElementNames_1.XmlElementNames.To];
                    switch (targetKind) {
                        case TimeZoneTransition.PeriodTarget:
                            var targetPeriod = { outValue: null };
                            if (!this.timeZoneDefinition.Periods.tryGetValue(targetId, targetPeriod)) {
                                throw new ServiceLocalException_1.ServiceLocalException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PeriodNotFound, targetId));
                            }
                            else {
                                this.targetPeriod = targetPeriod.outValue;
                            }
                            break;
                        case TimeZoneTransition.GroupTarget:
                            var targetGroup = { outValue: null };
                            if (!this.timeZoneDefinition.TransitionGroups.tryGetValue(targetId, targetGroup)) {
                                throw new ServiceLocalException_1.ServiceLocalException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.TransitionGroupNotFound, targetId));
                            }
                            else {
                                this.targetGroup = targetGroup.outValue;
                            }
                            break;
                        default:
                            throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.UnsupportedTimeZonePeriodTransitionTarget);
                    }
                    break;
            }
        }
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    TimeZoneTransition.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.To);
        if (this.targetPeriod != null) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Kind, TimeZoneTransition.PeriodTarget);
            writer.WriteValue(this.targetPeriod.Id, XmlElementNames_1.XmlElementNames.To);
        }
        else {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Kind, TimeZoneTransition.GroupTarget);
            writer.WriteValue(this.targetGroup.Id, XmlElementNames_1.XmlElementNames.To);
        }
        writer.WriteEndElement(); // To
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    TimeZoneTransition.prototype.WriteToXml = function (writer) {
        _super.prototype.WriteToXml.call(this, writer, this.GetXmlElementName());
    };
    TimeZoneTransition.PeriodTarget = "Period";
    TimeZoneTransition.GroupTarget = "Group";
    return TimeZoneTransition;
}(ComplexProperty_1.ComplexProperty));
exports.TimeZoneTransition = TimeZoneTransition;
(function (TimeZoneTransition) {
})(TimeZoneTransition = exports.TimeZoneTransition || (exports.TimeZoneTransition = {}));
exports.TimeZoneTransition = TimeZoneTransition;
