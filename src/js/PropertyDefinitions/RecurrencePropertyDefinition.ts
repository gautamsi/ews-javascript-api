import { EndDateRecurrenceRange } from "../ComplexProperties/Recurrence/Ranges/EndDateRecurrenceRange";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { ExchangeService } from "../Core/ExchangeService";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { JsonNames } from "../Core/JsonNames";
import { NoEndRecurrenceRange } from "../ComplexProperties/Recurrence/Ranges/NoEndRecurrenceRange";
import { NumberedRecurrenceRange } from "../ComplexProperties/Recurrence/Ranges/NumberedRecurrenceRange";
import { PropertyBag } from "../Core/PropertyBag";
import { PropertyDefinitionFlags } from "../Enumerations/PropertyDefinitionFlags";
import { Recurrence } from "../ComplexProperties/Recurrence/Patterns/Recurrence";
import { RecurrenceRange } from "../ComplexProperties/Recurrence/Ranges/RecurrenceRange";
import { ServiceXmlDeserializationException } from "../Exceptions/ServiceXmlDeserializationException";
import { StringHelper } from "../ExtensionMethods";
import { Strings } from "../Strings";
import { XmlElementNames } from "../Core/XmlElementNames";

import { PropertyDefinition } from "./PropertyDefinition";
/**
 * @internal Represenrs recurrence property definition.
 */
export class RecurrencePropertyDefinition extends PropertyDefinition {

    /**
     * not in ews-managed-api - use to find which recurrence is being used. 
     */
    private static recurrences: string[] = [XmlElementNames.AbsoluteMonthlyRecurrence, XmlElementNames.AbsoluteYearlyRecurrence, XmlElementNames.DailyRecurrence, XmlElementNames.DailyRegeneration, XmlElementNames.MonthlyRegeneration, XmlElementNames.RelativeMonthlyRecurrence, XmlElementNames.RelativeYearlyRecurrence, XmlElementNames.WeeklyRecurrence, XmlElementNames.WeeklyRegeneration, XmlElementNames.YearlyRegeneration];

    /**
     * not in ews-managed-api - use to find which recurrence range is being used. 
     */
    private static recurrenceRanges: string[] = [XmlElementNames.NoEndRecurrence, XmlElementNames.EndDateRecurrence, XmlElementNames.NumberedRecurrence];

    /**
     * Gets the property type.
     */
    Type: any;//System.Type;

    /**
     * @internal Initializes a new instance of the **RecurrencePropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion) {
        super(propertyName, xmlElementName, uri, flags, version);
    }

    /**
     * Gets the recurrence from string.
     *
     * @param   {string}   recurranceString   The recurrance string.
     * @return  {Recurrence}    Recurrence
     */
    private static GetRecurrenceFromString(recurranceString: string): Recurrence {
        let recurrence: Recurrence;

        switch (recurranceString) {
            case XmlElementNames.RelativeYearlyRecurrence:
                recurrence = new Recurrence.RelativeYearlyPattern();
                break;
            case XmlElementNames.AbsoluteYearlyRecurrence:
                recurrence = new Recurrence.YearlyPattern();
                break;
            case XmlElementNames.RelativeMonthlyRecurrence:
                recurrence = new Recurrence.RelativeMonthlyPattern();
                break;
            case XmlElementNames.AbsoluteMonthlyRecurrence:
                recurrence = new Recurrence.MonthlyPattern();
                break;
            case XmlElementNames.DailyRecurrence:
                recurrence = new Recurrence.DailyPattern();
                break;
            case XmlElementNames.DailyRegeneration:
                recurrence = new Recurrence.DailyRegenerationPattern();
                break;
            case XmlElementNames.WeeklyRecurrence:
                recurrence = new Recurrence.WeeklyPattern();
                break;
            case XmlElementNames.WeeklyRegeneration:
                recurrence = new Recurrence.WeeklyRegenerationPattern();
                break;
            case XmlElementNames.MonthlyRegeneration:
                recurrence = new Recurrence.MonthlyRegenerationPattern();
                break;
            case XmlElementNames.YearlyRegeneration:
                recurrence = new Recurrence.YearlyRegenerationPattern();
                break;
            default:
                //info: //ref: cannot throw, need to keep null/undefined to successfully parse XMLJsObject
                //throw new ServiceXmlDeserializationException(StringHelper.Format(Strings.InvalidRecurrencePattern, recurranceString));
                break;
        }
        return recurrence;
    }

    /**
     * Gets the recurrence range.
     *
     * @param   {string}            recurrenceRangeString   The recurrence range string.
     * @return  {RecurrenceRange}   RecurrenceRange
     */
    private static GetRecurrenceRange(recurrenceRangeString: string): RecurrenceRange {
        let range: RecurrenceRange;

        switch (recurrenceRangeString) {
            case XmlElementNames.NoEndRecurrence:
                range = new NoEndRecurrenceRange();
                break;
            case XmlElementNames.EndDateRecurrence:
                range = new EndDateRecurrenceRange();
                break;
            case XmlElementNames.NumberedRecurrence:
                range = new NumberedRecurrenceRange();
                break;
            default:
                //info: //ref: cannot throw, need to keep null/undefined to successfully parse XMLJsObject
                //throw new ServiceXmlDeserializationException(StringHelper.Format(Strings.InvalidRecurrenceRange, recurrenceRangeString)); 
                break;
        }
        return range;
    }

    /**
     * @internal Loads the property value from json.
     *
     * @param   {any}               jsObject         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void {
        let recurrence: Recurrence;
        let range: RecurrenceRange;
        let props = "";

        for (let key in jsObject) {
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
            throw new ServiceXmlDeserializationException(StringHelper.Format(Strings.InvalidRecurrencePattern, props));
        }
        if (!range) {
            throw new ServiceXmlDeserializationException(StringHelper.Format(Strings.InvalidRecurrenceRange, props));
        }

        range.SetupRecurrence(recurrence);
        propertyBag._setItem(this, recurrence);

    }

    /**
     * @internal Writes the property value to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void {
        let value: Recurrence = <Recurrence>propertyBag._getItem(this);
        if (value) {
            value.WriteToXml(writer, XmlElementNames.Recurrence);
        }
    }
}
