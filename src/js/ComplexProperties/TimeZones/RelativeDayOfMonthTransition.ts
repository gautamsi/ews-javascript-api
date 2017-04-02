import { Convert } from "../../ExtensionMethods";
import { DateTime } from "../../DateTime";
import { DayOfTheWeek } from "../../Enumerations/DayOfTheWeek";
import { EwsLogging } from "../../Core/EwsLogging";
import { EwsServiceXmlWriter } from "../../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../../Core/EwsUtilities";
import { ExchangeService } from "../../Core/ExchangeService";
import { TimeZoneDefinition } from "./TimeZoneDefinition";
import { TimeZoneInfo } from "../../TimeZoneInfo";
import { TimeZonePeriod } from "./TimeZonePeriod";
import { XmlElementNames } from "../../Core/XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { AbsoluteMonthTransition } from "./AbsoluteMonthTransition";
/**
 * @internal Represents a time zone period transition that occurs on a relative day of a specific month.
 */
export class RelativeDayOfMonthTransition extends AbsoluteMonthTransition {

	private dayOfTheWeek: DayOfTheWeek = DayOfTheWeek.Sunday;
	private weekIndex: number = null;

	/**
	 * @internal Gets the day of the week when the transition occurs.
	 */
	get DayOfTheWeek(): DayOfTheWeek {
		return this.dayOfTheWeek;
	}

	/**
	 * @internal Gets the index of the week in the month when the transition occurs.
	 */
	get WeekIndex(): number {
		return this.weekIndex;
	}

	/**
     * @internal Initializes a new instance of the **RelativeDayOfMonthTransition** class.
     *
     * @param   {TimeZoneDefinition}    timeZoneDefinition   The time zone definition this transition belongs to.
     */
	constructor(timeZoneDefinition: TimeZoneDefinition);
    /**
     * @internal Initializes a new instance of the **RelativeDayOfMonthTransition** class.
     *
     * @param   {TimeZoneDefinition}    timeZoneDefinition   The time zone definition this transition belongs to.
     * @param   {TimeZonePeriod}        targetPeriod         The period the transition will target.
     */
	constructor(timeZoneDefinition: TimeZoneDefinition, targetPeriod: TimeZonePeriod);
	constructor(timeZoneDefinition: TimeZoneDefinition, targetPeriod?: TimeZonePeriod) {
		super(timeZoneDefinition, targetPeriod);
	}

	/**
     * @internal Creates a time zone transition time.
     * @virtual
     *
     * @return  {TimeZoneInfo.TransitionTime}      A TimeZoneInfo.TransitionTime.
     */
	CreateTransitionTime(): TimeZoneInfo.TransitionTime {
		return TimeZoneInfo.TransitionTime.CreateFloatingDateRule(
			new DateTime(this.TimeOffset.Milliseconds),
			this.Month,
			this.WeekIndex == -1 ? 5 : this.WeekIndex,
			EwsUtilities.EwsToSystemDayOfWeek(this.DayOfTheWeek));
	}

	/**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
	GetXmlElementName(): string {
		return XmlElementNames.RecurringDayTransition;
	}

	/**
     * @internal Initializes this transition based on the specified transition time.
     * @virtual
     *
     * @param   {TimeZoneInfo.TransitionTime}   transitionTime   The transition time to initialize from.
     */
	InitializeFromTransitionTime(transitionTime: TimeZoneInfo.TransitionTime): void {
		super.InitializeFromTransitionTime(transitionTime);

		this.dayOfTheWeek = EwsUtilities.SystemToEwsDayOfTheWeek(transitionTime.DayOfWeek);

		// TimeZoneInfo uses week indices from 1 to 5, 5 being the last week of the month.
		// EWS uses -1 to denote the last week of the month.
		this.weekIndex = transitionTime.Week == 5 ? -1 : transitionTime.Week;
	}

	/**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
	LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
		super.LoadFromXmlJsObject(jsObject, service);

		if (jsObject[XmlElementNames.DayOfWeek]) {
			this.dayOfTheWeek = DayOfTheWeek[<string>jsObject[XmlElementNames.DayOfWeek]];
		}

		if (jsObject[XmlElementNames.Occurrence]) {
			this.weekIndex = Convert.toInt(jsObject[XmlElementNames.Occurrence]);
		}
	}

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
	WriteElementsToXml(writer: EwsServiceXmlWriter): void {
		super.WriteElementsToXml(writer);

		writer.WriteElementValue(
			XmlNamespace.Types,
			XmlElementNames.DayOfWeek,
			DayOfTheWeek[this.dayOfTheWeek]);

		writer.WriteElementValue(
			XmlNamespace.Types,
			XmlElementNames.Occurrence,
			this.weekIndex);
	}
}
