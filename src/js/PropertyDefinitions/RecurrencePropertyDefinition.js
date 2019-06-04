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
var EndDateRecurrenceRange_1 = require("../ComplexProperties/Recurrence/Ranges/EndDateRecurrenceRange");
var NoEndRecurrenceRange_1 = require("../ComplexProperties/Recurrence/Ranges/NoEndRecurrenceRange");
var NumberedRecurrenceRange_1 = require("../ComplexProperties/Recurrence/Ranges/NumberedRecurrenceRange");
var Recurrence_1 = require("../ComplexProperties/Recurrence/Patterns/Recurrence");
var ServiceXmlDeserializationException_1 = require("../Exceptions/ServiceXmlDeserializationException");
var ExtensionMethods_1 = require("../ExtensionMethods");
var Strings_1 = require("../Strings");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var PropertyDefinition_1 = require("./PropertyDefinition");
/**
 * @internal Represenrs recurrence property definition.
 */
var RecurrencePropertyDefinition = /** @class */ (function (_super) {
    __extends(RecurrencePropertyDefinition, _super);
    /**
     * @internal Initializes a new instance of the **RecurrencePropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    function RecurrencePropertyDefinition(propertyName, xmlElementName, uri, flags, version) {
        return _super.call(this, propertyName, xmlElementName, uri, flags, version) || this;
    }
    /**
     * Gets the recurrence from string.
     *
     * @param   {string}   recurranceString   The recurrance string.
     * @return  {Recurrence}    Recurrence
     */
    RecurrencePropertyDefinition.GetRecurrenceFromString = function (recurranceString) {
        var recurrence;
        switch (recurranceString) {
            case XmlElementNames_1.XmlElementNames.RelativeYearlyRecurrence:
                recurrence = new Recurrence_1.Recurrence.RelativeYearlyPattern();
                break;
            case XmlElementNames_1.XmlElementNames.AbsoluteYearlyRecurrence:
                recurrence = new Recurrence_1.Recurrence.YearlyPattern();
                break;
            case XmlElementNames_1.XmlElementNames.RelativeMonthlyRecurrence:
                recurrence = new Recurrence_1.Recurrence.RelativeMonthlyPattern();
                break;
            case XmlElementNames_1.XmlElementNames.AbsoluteMonthlyRecurrence:
                recurrence = new Recurrence_1.Recurrence.MonthlyPattern();
                break;
            case XmlElementNames_1.XmlElementNames.DailyRecurrence:
                recurrence = new Recurrence_1.Recurrence.DailyPattern();
                break;
            case XmlElementNames_1.XmlElementNames.DailyRegeneration:
                recurrence = new Recurrence_1.Recurrence.DailyRegenerationPattern();
                break;
            case XmlElementNames_1.XmlElementNames.WeeklyRecurrence:
                recurrence = new Recurrence_1.Recurrence.WeeklyPattern();
                break;
            case XmlElementNames_1.XmlElementNames.WeeklyRegeneration:
                recurrence = new Recurrence_1.Recurrence.WeeklyRegenerationPattern();
                break;
            case XmlElementNames_1.XmlElementNames.MonthlyRegeneration:
                recurrence = new Recurrence_1.Recurrence.MonthlyRegenerationPattern();
                break;
            case XmlElementNames_1.XmlElementNames.YearlyRegeneration:
                recurrence = new Recurrence_1.Recurrence.YearlyRegenerationPattern();
                break;
            default:
                //info: //ref: cannot throw, need to keep null/undefined to successfully parse XMLJsObject
                //throw new ServiceXmlDeserializationException(StringHelper.Format(Strings.InvalidRecurrencePattern, recurranceString));
                break;
        }
        return recurrence;
    };
    /**
     * Gets the recurrence range.
     *
     * @param   {string}            recurrenceRangeString   The recurrence range string.
     * @return  {RecurrenceRange}   RecurrenceRange
     */
    RecurrencePropertyDefinition.GetRecurrenceRange = function (recurrenceRangeString) {
        var range;
        switch (recurrenceRangeString) {
            case XmlElementNames_1.XmlElementNames.NoEndRecurrence:
                range = new NoEndRecurrenceRange_1.NoEndRecurrenceRange();
                break;
            case XmlElementNames_1.XmlElementNames.EndDateRecurrence:
                range = new EndDateRecurrenceRange_1.EndDateRecurrenceRange();
                break;
            case XmlElementNames_1.XmlElementNames.NumberedRecurrence:
                range = new NumberedRecurrenceRange_1.NumberedRecurrenceRange();
                break;
            default:
                //info: //ref: cannot throw, need to keep null/undefined to successfully parse XMLJsObject
                //throw new ServiceXmlDeserializationException(StringHelper.Format(Strings.InvalidRecurrenceRange, recurrenceRangeString)); 
                break;
        }
        return range;
    };
    /**
     * @internal Loads the property value from json.
     *
     * @param   {any}               jsObject         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    RecurrencePropertyDefinition.prototype.LoadPropertyValueFromXmlJsObject = function (jsObject, service, propertyBag) {
        var recurrence;
        var range;
        var props = "";
        for (var key in jsObject) {
            if (key.indexOf("__") === 0) //skip xmljsobject conversion entries like __type and __prefix
                continue;
            if (RecurrencePropertyDefinition.recurrences.indexOf(key) >= 0) {
                recurrence = RecurrencePropertyDefinition.GetRecurrenceFromString(key);
                recurrence.LoadFromXmlJsObject(jsObject[key], service);
            }
            if (RecurrencePropertyDefinition.recurrenceRanges.indexOf(key) >= 0) {
                range = RecurrencePropertyDefinition.GetRecurrenceRange(key);
                range.LoadFromXmlJsObject(jsObject[key], service);
            }
            props += key + ",";
        }
        if (props.length > 1 && props.lastIndexOf(",") === props.length - 1) {
            props = props.substr(0, props.length - 1);
        }
        if (!recurrence) {
            throw new ServiceXmlDeserializationException_1.ServiceXmlDeserializationException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.InvalidRecurrencePattern, props));
        }
        if (!range) {
            throw new ServiceXmlDeserializationException_1.ServiceXmlDeserializationException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.InvalidRecurrenceRange, props));
        }
        range.SetupRecurrence(recurrence);
        propertyBag._setItem(this, recurrence);
    };
    /**
     * @internal Writes the property value to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    RecurrencePropertyDefinition.prototype.WritePropertyValueToXml = function (writer, propertyBag, isUpdateOperation) {
        var value = propertyBag._getItem(this);
        if (value) {
            value.WriteToXml(writer, XmlElementNames_1.XmlElementNames.Recurrence);
        }
    };
    /**
     * not in ews-managed-api - use to find which recurrence is being used.
     */
    RecurrencePropertyDefinition.recurrences = [XmlElementNames_1.XmlElementNames.AbsoluteMonthlyRecurrence, XmlElementNames_1.XmlElementNames.AbsoluteYearlyRecurrence, XmlElementNames_1.XmlElementNames.DailyRecurrence, XmlElementNames_1.XmlElementNames.DailyRegeneration, XmlElementNames_1.XmlElementNames.MonthlyRegeneration, XmlElementNames_1.XmlElementNames.RelativeMonthlyRecurrence, XmlElementNames_1.XmlElementNames.RelativeYearlyRecurrence, XmlElementNames_1.XmlElementNames.WeeklyRecurrence, XmlElementNames_1.XmlElementNames.WeeklyRegeneration, XmlElementNames_1.XmlElementNames.YearlyRegeneration];
    /**
     * not in ews-managed-api - use to find which recurrence range is being used.
     */
    RecurrencePropertyDefinition.recurrenceRanges = [XmlElementNames_1.XmlElementNames.NoEndRecurrence, XmlElementNames_1.XmlElementNames.EndDateRecurrence, XmlElementNames_1.XmlElementNames.NumberedRecurrence];
    return RecurrencePropertyDefinition;
}(PropertyDefinition_1.PropertyDefinition));
exports.RecurrencePropertyDefinition = RecurrencePropertyDefinition;
