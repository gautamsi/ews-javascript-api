import moment = require('moment-timezone');
import { ArgumentOutOfRangeException, ArgumentException } from "./Exceptions/ArgumentException";
import { DayOfWeek } from "./Enumerations/DayOfWeek";
import { IOutParam } from "./Interfaces/IOutParam";
import { StringHelper } from "./ExtensionMethods";
import { TimeSpan } from "./TimeSpan";

const ticksToEpoch: number = 621355968000000000; //can be used when calculating ticks/ms from Windows date to unix date
export const msToEpoch: number = 62135596800000;

const invalidDateTimeMessage = {
    "years": "year is less than 1 or greater than 9999.",
    "months": "month is less than 1 or greater than 12.",
    "days": "day is less than 1 or greater than the number of days in month.",
    "hours": "hour is less than 0 or greater than 23.",
    "minutes": "minute is less than 0 or greater than 59.",
    "seconds": "second is less than 0 or greater than 59.",
    "milliseconds": "millisecond is less than 0 or greater than 999."
};

export enum DateTimeKind {
    Unspecified = 0,
    Utc = 1,
    Local = 2,
}

/**
 * DateTime - basic date time based on moment.js
 */
export class DateTime {

    private static readonly DaysToMonth365: number[] = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
    private static readonly DaysToMonth366: number[] = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];

    kind: DateTimeKind = DateTimeKind.Unspecified;
    get MomentDate(): moment.Moment { return this.momentDate; }
    get currentUtcOffset(): number { return this.momentDate.utcOffset(); }
    private get momentDate(): moment.Moment { return this.getMomentDate(); }
    private getMomentDate: Function
    private setMomentDate: Function
    private originalDateInput: any = null;

    public static get Now(): DateTime {
        return new DateTime(moment());
    }

    public static get UtcNow(): DateTime {
        return new DateTime(moment.utc());
    }
    get TotalMilliSeconds(): number {
        return this.momentDate.valueOf()
    }

    constructor(ms: number);
    constructor(date: DateTime);
    constructor(momentInput: moment.MomentInput);
    constructor(ms: number, kind: DateTimeKind);
    constructor(year: number, month: number, day: number);
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number);
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number);
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number, kind: DateTimeKind);

    constructor(msOrDateOrMomentOrYear?: number | DateTime | moment.MomentInput,
        monthOrKind?: number | DateTimeKind,
        day?: number,
        hour?: number,
        minute?: number,
        second?: number,
        millisecond?: number,
        kind?: DateTimeKind) {


        let argsLength = arguments.length;
        let momentdate: moment.Moment = moment();

        if (argsLength === 1) {
            if (msOrDateOrMomentOrYear instanceof DateTime) {
                momentdate = msOrDateOrMomentOrYear.MomentDate.clone();
            }
            else {
                momentdate = moment(msOrDateOrMomentOrYear);
                this.originalDateInput = msOrDateOrMomentOrYear;
            }
        }
        else {
            if (argsLength === 2) {
                if (monthOrKind === DateTimeKind.Utc && !(msOrDateOrMomentOrYear instanceof moment)) {
                    momentdate = moment.utc(msOrDateOrMomentOrYear);
                }
                else {
                    momentdate = moment(msOrDateOrMomentOrYear);
                }
                this.kind = monthOrKind;
                if (this.kind === DateTimeKind.Unspecified && !(msOrDateOrMomentOrYear instanceof moment)) {
                    this.originalDateInput = msOrDateOrMomentOrYear;
                }
            }
            let momentInput: moment.MomentInputObject = {};
            if (argsLength >= 3) {
                momentInput.year = <number>msOrDateOrMomentOrYear;
                momentInput.month = monthOrKind - 1;
                momentInput.day = day;
            }
            if (argsLength >= 6) {
                momentInput.hour = hour;
                momentInput.minute = minute;
                momentInput.second = second;
            }

            if (argsLength >= 7) {
                momentInput.millisecond = millisecond;
                this.kind = kind || this.kind;
            }

            momentdate = moment(momentInput);

        }
        if (momentdate && !momentdate.isValid()) {
            let invalid = momentdate.invalidAt();
            throw new ArgumentOutOfRangeException(momentValidity[invalid], invalidDateTimeMessage[momentValidity[invalid]]);
        }

        if (momentdate.isUtc()) {
            this.kind = DateTimeKind.Utc
        }
        else if (momentdate.isLocal()) {
            this.kind = DateTimeKind.Local;
        }

        this.getMomentDate = () => momentdate;
        this.setMomentDate = (value) => momentdate = value;
    }


    Add(ts: TimeSpan, ): DateTime;
    Add(quantity: number, unit: moment.unitOfTime.Base): DateTime;
    Add(quantity: number | TimeSpan, unit: moment.unitOfTime.Base = "ms"): DateTime {
        if (typeof quantity !== 'number') {
            quantity = quantity.TotalMilliseconds;
            unit = "ms"
        }
        var date: moment.Moment = moment(this.momentDate);
        date.add(quantity, unit);
        return new DateTime(date);
    }

    static Compare(x: DateTime, y: DateTime): number {
        var diff: number = x.momentDate.diff(y.momentDate);
        if (diff === 0) return 0;
        if (diff < 0) return -1;
        return 1;
    }

    CompareTo(toDate: DateTime): number {
        return DateTime.Compare(this, toDate);
    }

    Difference(toDate: DateTime): TimeSpan {
        return new TimeSpan(this.momentDate.diff(toDate.momentDate));
    }

    Format(formatting: string): string {
        return this.momentDate.format(formatting);
    }

    private static getKindfromMoment(m: moment.Moment): DateTimeKind {
        if (m.isUTC()) {
            return DateTimeKind.Utc;
        }
        if (m.isLocal()) {
            return DateTimeKind.Local;
        }
        return DateTimeKind.Unspecified;
    }
    static Parse(value: any, kind: DateTimeKind = DateTimeKind.Unspecified): DateTime {
        let mdate = moment(value);
        let tempDate: DateTime = null;
        if (mdate.isValid()) {
            switch (kind) {
                case DateTimeKind.Local:
                    tempDate = new DateTime(mdate.local());
                    tempDate.kind = kind;
                    return tempDate;
                case DateTimeKind.Utc:
                    tempDate = new DateTime(moment.utc(value));
                    tempDate.kind = kind;
                    return tempDate;
                default:
                    tempDate = new DateTime(mdate);
                    tempDate.originalDateInput = value;
                    tempDate.kind = kind;
                    return tempDate;
            }
        }
        else {
            throw new ArgumentException("invalid date value");
        }
    }

    ToISOString(): string {
        return this.momentDate.toISOString();
    }

    toString(): string {
        return this.ToISOString();
    }

    utcOffset(value: number) {
        this.momentDate.utcOffset(value);
    }

    static DateimeStringToTimeZone(dtStr: string, zoneStr: string): DateTime {
        return new DateTime(moment.tz(dtStr, zoneStr));
    }

    static DateTimeToXSDateTime(dateTime: DateTime): string {
        var format = 'YYYY-MM-DDTHH:mm:ss.SSSZ';//using moment format for c#->"yyyy-MM-ddTHH:mm:ss.fff";

        // switch (dateTime.Kind) {
        // 	case DateTimeKind.Utc:
        // 		format += "Z";
        // 		break;
        // 	case DateTimeKind.Local:
        // 		format += "zzz";
        // 		break;
        // 	default:
        // 		break;
        // }

        // Depending on the current culture, DateTime formatter will replace ':' with 
        // the DateTimeFormatInfo.TimeSeparator property which may not be ':'. Force the proper string
        // to be used by using the InvariantCulture.
        return dateTime.Format(format);//, CultureInfo.InvariantCulture);
    }
    static DateTimeToXSDate(date: DateTime): string {
        var format = 'YYYY-MM-DDZ';//using moment format for c#->"yyyy-MM-dd";

        // switch (date.Kind) {
        // 	case DateTimeKind.Utc:
        // 		format = "yyyy-MM-ddZ";
        // 		break;
        // 	case DateTimeKind.Unspecified:
        // 		format = "yyyy-MM-dd";
        // 		break;
        // 	default: // DateTimeKind.Local is remaining
        // 		format = "yyyy-MM-ddzzz";
        // 		break;
        // }

        // Depending on the current culture, DateTime formatter will 
        // translate dates from one culture to another (e.g. Gregorian to Lunar).  The server
        // however, considers all dates to be in Gregorian, so using the InvariantCulture will
        // ensure this.
        return date.Format(format);//, CultureInfo.InvariantCulture);
    }
    static MinValue: DateTime = new DateTime('0001-01-01T00:00:00+00:00');
    static MaxValue: DateTime = new DateTime("9999-12-31T23:59:59.9999999+00:00");

    /* c# DateTime properties */

    public get Date(): DateTime {
        return new DateTime(this.momentDate.format("Y-MM-DD"));
    }
    public get Day(): number {
        return this.momentDate.date();
    }
    public get DayOfWeek(): DayOfWeek {
        return this.momentDate.day();
    }
    public get DayOfYear(): number {
        return this.momentDate.dayOfYear();
    }
    public get Hour(): number {
        return this.momentDate.hour();
    }
    public get Kind(): DateTimeKind {
        return this.kind;
    }
    public get Millisecond(): number {
        return this.momentDate.millisecond();
    }
    public get Minute(): number {
        return this.momentDate.minute();
    }
    public get Month(): number {
        return this.momentDate.month() + 1;
    }

    public get Second(): number {
        return this.momentDate.second();
    }
    //  public get Ticks(): {
    //      return this.
    //  }
    public get TimeOfDay(): TimeSpan {
        return TimeSpan.FromMilliseconds(this.momentDate.millisecond());
    }
    public get Today(): DateTime {
        return new DateTime(moment(this.momentDate.format("LL"), "LL"));
    }
    public get Year(): number {
        return this.momentDate.year();
    }

    /* c# DateTime Methods */

    //CompareTo

    public AddDays(days: number): DateTime {
        return this.Add(days, unitOfTime.days);
    }

    public AddHours(hours: number): DateTime {
        return this.Add(hours, unitOfTime.hours);
    }
    public AddMilliseconds(ms: number): DateTime {
        return this.Add(ms, unitOfTime.ms);
    }
    public AddMinutes(minutes: number): DateTime {
        return this.Add(minutes, unitOfTime.minutes);
    }
    public AddMonths(months: number): DateTime {
        return this.Add(months, unitOfTime.months);
    }
    public AddSeconds(seconds: number): DateTime {
        return this.Add(seconds, unitOfTime.seconds);
    }
    // public AddTicks(ticks: number): DateTime {
    //     return this.Add(ticks, unitOfTime.);
    // }
    public AddYears(years: number): DateTime {
        return this.Add(years, unitOfTime.years);
    }

    public static DaysInMonth(year: number, month: number) {
        if (month < 1 || month > 12)
            throw new ArgumentOutOfRangeException("month", invalidDateTimeMessage["months"]);
        // IsLeapYear checks the year argument
        let days: number[] = DateTime.IsLeapYear(year) ? DateTime.DaysToMonth366 : DateTime.DaysToMonth365;
        return days[month] - days[month - 1];
    }
    Equals(value: any | DateTime): boolean {
        if (value instanceof DateTime) {
            return value.TotalMilliSeconds === this.TotalMilliSeconds;
        }
        return false;
    }
    public static Equals(t1: DateTime, t2: DateTime): boolean {
        return t1.TotalMilliSeconds === t2.TotalMilliSeconds;
    }
    // FromBinary
    // FromFileTime
    // FromFileTimeUtc
    // FromOADate

    // GetHashCode

    IsDaylightSavingTime(): boolean {
        return this.momentDate.isDST();
    }

    /**
     *  Checks whether a given year is a leap year. This method returns true if year is a leap year, or false if not.
     * @param {number}  year 
     */
    public static IsLeapYear(year: number): boolean {
        if (year < 1 || year > 9999) {
            throw new ArgumentOutOfRangeException("year", invalidDateTimeMessage["years"]);
        }
        return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    }


    // ParseExact

    public static SpecifyKind(value: DateTime, kind: DateTimeKind) {
        return new DateTime(value.TotalMilliSeconds, kind);
    }

    Subtract(date: DateTime): TimeSpan;
    Subtract(ts: TimeSpan): DateTime;
    Subtract(dateTime: DateTime | TimeSpan): DateTime | TimeSpan {
        if (dateTime instanceof DateTime) {
            return new TimeSpan(this.TotalMilliSeconds - dateTime.TotalMilliSeconds);
        }
        else {
            return new DateTime(this.TotalMilliSeconds - dateTime.TotalMilliseconds);
        }
    }

    // ToBinary
    // ToFileTime
    // ToFileTimeUtc

    ToLocalTime(): DateTime {
        return new DateTime(this.momentDate.local());
    }

    ToLongDateString(): string {
        return this.momentDate.format("dddd, MMMM D, YYYY");
    }

    ToLongTimeString(): string {
        return this.momentDate.format("LTS");
    }

    // ToOADate


    ToShortDateString(): string {
        return this.MomentDate.format("l");
    }

    ToString(): string {
        return this.toString();
    }


    ToUniversalTime(): DateTime {
        return new DateTime(this.MomentDate.utc());
    }

    static TryParse(s: string | moment.MomentInput, outDate: IOutParam<DateTime>) {
        try {
            outDate.outValue = DateTime.Parse(s);
            outDate.outValue.kind = this.getKindfromMoment(outDate.outValue.momentDate);
            return true;
        } catch (error) {
            outDate.exception = error;
        }
        return false;
    }

    // TryParseExact
    valueOf(): number {
        return this.TotalMilliSeconds;
    }
}

//
// Summary:
//     Defines the formatting options that customize string parsing for some date and
//     time parsing methods.
export enum DateTimeStyles {
    //
    // Summary:
    //     Default formatting options must be used. This value represents the default style
    //     for the System.DateTime.Parse(System.String), System.DateTime.ParseExact(System.String,System.String,System.IFormatProvider),
    //     and System.DateTime.TryParse(System.String,System.DateTime@) methods.
    None = 0,
    //
    // Summary:
    //     Leading white-space characters must be ignored during parsing, except if they
    //     occur in the System.Globalization.DateTimeFormatInfo format patterns.
    AllowLeadingWhite = 1,
    //
    // Summary:
    //     Trailing white-space characters must be ignored during parsing, except if they
    //     occur in the System.Globalization.DateTimeFormatInfo format patterns.
    AllowTrailingWhite = 2,
	/**
	 * Summary:
	 *	    Extra white-space characters in the middle of the string must be ignored during
	 *	    parsing, except if they occur in the System.Globalization.DateTimeFormatInfo
	 *	    format patterns.
	 */
    AllowInnerWhite = 4,

	/**
	 * 	Summary:
	 *	    Extra white-space characters anywhere in the string must be ignored during parsing,
	 *	    except if they occur in the System.Globalization.DateTimeFormatInfo format patterns.
	 *	    This value is a combination of the System.Globalization.DateTimeStyles.AllowLeadingWhite,
	 *	    System.Globalization.DateTimeStyles.AllowTrailingWhite, and System.Globalization.DateTimeStyles.AllowInnerWhite
	 *	    values.
	 */
    AllowWhiteSpaces = 7,
    //
    // Summary:
    //     If the parsed string contains only the time and not the date, the parsing methods
    //     assume the Gregorian date with year = 1, month = 1, and day = 1. If this value
    //     is not used, the current date is assumed.
    NoCurrentDateDefault = 8,
    //
    // Summary:
    //     Date and time are returned as a Coordinated Universal Time (UTC). If the input
    //     string denotes a local time, through a time zone specifier or System.Globalization.DateTimeStyles.AssumeLocal,
    //     the date and time are converted from the local time to UTC. If the input string
    //     denotes a UTC time, through a time zone specifier or System.Globalization.DateTimeStyles.AssumeUniversal,
    //     no conversion occurs. If the input string does not denote a local or UTC time,
    //     no conversion occurs and the resulting System.DateTime.Kind property is System.DateTimeKind.Unspecified.
    AdjustToUniversal = 16,
    //
    // Summary:
    //     If no time zone is specified in the parsed string, the string is assumed to denote
    //     a local time.
    AssumeLocal = 32,
    //
    // Summary:
    //     If no time zone is specified in the parsed string, the string is assumed to denote
    //     a UTC.
    AssumeUniversal = 64,
    //
    // Summary:
    //     The System.DateTimeKind field of a date is preserved when a System.DateTime object
    //     is converted to a string using the "o" or "r" standard format specifier, and
    //     the string is then converted back to a System.DateTime object.
    RoundtripKind = 128
}

export var unitOfTime = {
    "year": <moment.unitOfTime.Base>"year",
    "years": <moment.unitOfTime.Base>"years",
    "y": <moment.unitOfTime.Base>"y",
    "month": <moment.unitOfTime.Base>"month",
    "months": <moment.unitOfTime.Base>"months",
    "M": <moment.unitOfTime.Base>"M",
    "week": <moment.unitOfTime.Base>"week",
    "weeks": <moment.unitOfTime.Base>"weeks",
    "w": <moment.unitOfTime.Base>"w",
    "day": <moment.unitOfTime.Base>"day",
    "days": <moment.unitOfTime.Base>"days",
    "d": <moment.unitOfTime.Base>"d",
    "hour": <moment.unitOfTime.Base>"hour",
    "hours": <moment.unitOfTime.Base>"hours",
    "h": <moment.unitOfTime.Base>"h",
    "minute": <moment.unitOfTime.Base>"minute",
    "minutes": <moment.unitOfTime.Base>"minutes",
    "m": <moment.unitOfTime.Base>"m",
    "second": <moment.unitOfTime.Base>"second",
    "seconds": <moment.unitOfTime.Base>"seconds",
    "s": <moment.unitOfTime.Base>"s",
    "millisecond": <moment.unitOfTime.Base>"millisecond",
    "milliseconds": <moment.unitOfTime.Base>"milliseconds",
    "ms": <moment.unitOfTime.Base>"ms",
}

enum momentValidity {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
}

