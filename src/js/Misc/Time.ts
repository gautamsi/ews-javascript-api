import { ArgumentException } from "../Exceptions/ArgumentException";
import { DateTime } from "../DateTime";
import { StringHelper } from "../ExtensionMethods";
import { Strings } from "../Strings";

/**
 * @internal Represents a time.
 * @sealed
 */
export class Time {

	private hours: number = 0;
	private minutes: number = 0;
	private seconds: number = 0;

	/**
	 * @internal Gets or sets the hours.
	 */
	get Hours(): number {
		return this.hours;
	}
	set Hours(value: number) {
		if (value >= 0 && value < 24) {
			this.hours = value;
			return;
		}
		throw new ArgumentException(Strings.HourMustBeBetween0And23);
	}

	/**
	 * @internal Gets or sets the minutes.
	 */
	get Minutes(): number {
		return this.minutes;
	}
	set Minutes(value: number) {
		if (value >= 0 && value < 60) {
			this.minutes = value;
			return;
		}
		throw new ArgumentException(Strings.MinuteMustBeBetween0And59);
	}

	/**
	 * @internal Gets or sets the seconds.
	 */
	get Seconds(): number {
		return this.seconds;
	}
	set Seconds(value: number) {
		if (value >= 0 && value < 60) {
			this.seconds = value;
			return;
		}
		throw new ArgumentException(Strings.SecondMustBeBetween0And59);
	}

	/**
	 * @internal Initializes a new instance of **Time** class.
	 */
	constructor();
	/**
	 * @internal Initializes a new instance of **Time** class.
	 * @param   {number}   minutes   The minutes.
	 */
	constructor(minutes: number);
	/**
	 * @internal Initializes a new instance of **Time** class.
	 * @param   {DateTime}   dateTime   The DateTime to extract the time part of.
	 */
	constructor(dateTime: DateTime);
	/**
	 * @internal Initializes a new instance of **Time** class.
	 *
	 * @param   {number}   hours     The hours.
	 * @param   {number}   minutes   The minutes.
	 * @param   {number}   seconds   The seconds.
	 */
	constructor(hours: number, minutes: number, seconds: number);
	constructor(minutesOrDateTimeOrHours?: number | DateTime, minutes?: number, seconds?: number) {
		if (arguments.length === 1) {
			if (typeof minutesOrDateTimeOrHours === 'number') {
				if (minutes < 0 || minutes >= 1440) {
					throw new ArgumentException(
						Strings.MinutesMustBeBetween0And1439,
						"minutes");
				}

				this.Hours = minutesOrDateTimeOrHours / 60;
				this.Minutes = minutesOrDateTimeOrHours % 60;
				this.Seconds = 0;
			}
			else {
				this.Hours = minutesOrDateTimeOrHours.Hour;
				this.Minutes = minutesOrDateTimeOrHours.Minute;
				this.Seconds = minutesOrDateTimeOrHours.Second;
			}
		}
		if (arguments.length === 3) {
			this.Hours = <number>minutesOrDateTimeOrHours;
			this.Minutes = minutes;
			this.Seconds = seconds;
		}
	}

	/**
	 * @internal Converts the time into a number of minutes since 12:00AM.
	 *
	 * @return  {number}      The number of minutes since 12:00AM the time represents.
	 */
	ConvertToMinutes(): number {
		return this.Minutes + (this.Hours * 60);
	}

	/**
	 * @internal Convert Time to XML Schema time.
	 *
	 * @return  {string}      String in XML Schema time format.
	 */
	ToXSTime(): string {
		return StringHelper.Format(
			"{0:00}:{1:00}:{2:00}",
			this.Hours,
			this.Minutes,
			this.Seconds);
	}
}
