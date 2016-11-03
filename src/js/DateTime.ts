import { ArgumentOutOfRangeException } from "./Exceptions/ArgumentException";
import moment = require('moment-timezone');

export enum DateTimeKind {
    Unspecified = 0,
    Utc = 1,
    Local = 2,
}

/**
 * DateTime - basic date time based on moment.js
 */
export class DateTime {
    get Kind(): DateTimeKind { return this.kind; }
    kind: DateTimeKind = DateTimeKind.Unspecified;
    get Date(): moment.Moment { return this.momentDate; }
    get currentUtcOffset(): number { return this.momentDate.utcOffset(); }
    private momentDate: moment.Moment = moment();
    static get Now(): DateTime { return new DateTime(moment()); }
    get TotalMilliSeconds(): number { return this.momentDate.valueOf() }
    constructor(date?: DateTime | any, kind: DateTimeKind = DateTimeKind.Local) {
        if (date instanceof DateTime) {
            this.momentDate = date.Date.clone();
        }
        else {
            this.momentDate = moment(date);
        }
        this.kind = kind;

    }

    Add(quantity: number, unit: moment.UnitOfTime): DateTime {
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

    static Parse(value: any, kind: DateTimeKind = DateTimeKind.Unspecified): DateTime {
        return new DateTime(value, kind);
    }
    ToISOString(): string { return this.momentDate.toISOString(); }
    toString(): string { return this.ToISOString(); }
    utcOffset(value: number) { this.momentDate.utcOffset(value); }



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

}

/**
* TimeZoneInfo
*/
export class TimeZoneInfo {

    static get Utc(): TimeZoneInfo { return this.utc; }
    private static utc: TimeZoneInfo = new TimeZoneInfo(0);

    static get Local(): TimeZoneInfo { return this.local; }
    private static local: TimeZoneInfo = new TimeZoneInfo(moment().local().utcOffset());

    private offset: number;

    constructor(offset: number) {
        this.offset = offset;
    }

    static IsLocalTimeZone(timeZone: TimeZoneInfo) {
        return timeZone.offset === this.local.offset;
    }
    get DisplayName(): string { return this.offset.toString(); }

    static ConvertTime(dateTime: DateTime, sourceTZ: TimeZoneInfo, destinationTZ: TimeZoneInfo): DateTime {
        var returnDate = new DateTime(dateTime);
        //var offset = returnDate.currentUtcOffset + destinationTZ.offset - sourceTZ.offset 
        returnDate.utcOffset(destinationTZ.offset);
        return returnDate;
    }
}

export { moment };

export class TimeSpan implements moment.Duration {
    private duration: moment.Duration;
    constructor(args: any) {
        this.duration = moment.duration(args);
    }
    humanize(withSuffix?: boolean): string { return this.duration.humanize(withSuffix); }

    as(units: string): number { return this.duration.as(units); }

    /** @internal TODO: to be removed in 0.7. */
    milliseconds(): number { return this.duration.milliseconds(); }
    /** @internal TODO: to be removed in 0.7. */
    asMilliseconds(): number { return this.duration.asMilliseconds(); }

    Milliseconds(): number { return this.duration.milliseconds(); }
    get TotalMilliseconds(): number { return this.duration.asMilliseconds(); }

    /** @internal TODO: to be removed in 0.7. */
    seconds(): number { return this.duration.seconds(); }
    /** @internal TODO: to be removed in 0.7. */
    asSeconds(): number { return this.duration.asSeconds(); }

    Seconds(): number { return this.duration.seconds(); }
    get TotalSeconds(): number { return this.duration.asSeconds(); }

    /** @internal TODO: to be removed in 0.7. */
    minutes(): number { return this.duration.minutes(); }
    /** @internal TODO: to be removed in 0.7. */
    asMinutes(): number { return this.duration.asMinutes(); }

    Minutes(): number { return this.duration.minutes(); }
    get TotalMinutes(): number { return this.duration.asMinutes(); }

    /** @internal TODO: to be removed in 0.7. */
    hours(): number { return this.duration.hours(); }
    /** @internal TODO: to be removed in 0.7. */
    asHours(): number { return this.duration.asHours(); }

    Hours(): number { return this.duration.hours(); }
    get TotalHours(): number { return this.duration.asHours(); }

    /** @internal TODO: to be removed in 0.7. */
    days(): number { return this.duration.days(); }
    /** @internal TODO: to be removed in 0.7. */
    asDays(): number { return this.duration.asDays(); }

    Days(): number { return this.duration.days(); }
    get TotalDays(): number { return this.duration.asDays(); }

    /** @internal TODO: to be removed in 0.7. */
    months(): number { return this.duration.months(); }
    /** @internal TODO: to be removed in 0.7. */
    asMonths(): number { return this.duration.asMonths(); }

    Months(): number { return this.duration.months(); }
    get TotalMonths(): number { return this.duration.asMonths(); }

    /** @internal TODO: to be removed in 0.7. */
    years(): number { return this.duration.years(); }
    /** @internal TODO: to be removed in 0.7. */
    asYears(): number { return this.duration.asYears(); }

    Years(): number { return this.duration.years(); }
    get TotalYears(): number { return this.duration.asYears(); }

    /** @internal TODO: to be removed in 0.7. */
    weeks(): number { return this.duration.weeks() }
    /** @internal TODO: to be removed in 0.7. */
    asWeeks(): number { return this.duration.asWeeks(); }

    Weeks(): number { return this.duration.weeks() }
    get Totalweeks(): number { return this.duration.asWeeks() }

    /** @internal TODO: to be removed in 0.7. */
    add(n: number, p: moment.UnitOfTime): TimeSpan;
    /** @internal TODO: to be removed in 0.7. */
    add(n: number): TimeSpan;
    /** @internal TODO: to be removed in 0.7. */
    add(d: TimeSpan): TimeSpan;
    add(a: any, p?: moment.UnitOfTime): TimeSpan {
        if (arguments.length === 1) {
            return new TimeSpan(this.duration.add(a));
        }
        else {
            return new TimeSpan(this.duration.add(a, p));
        }
    }

    Add(n: number, p: moment.UnitOfTime): TimeSpan;
    Add(n: number): TimeSpan;
    Add(d: TimeSpan): TimeSpan;
    Add(a: any, p?: moment.UnitOfTime): TimeSpan {
        if (arguments.length === 1) {
            return new TimeSpan(this.duration.add(a));
        }
        else {
            return new TimeSpan(this.duration.add(a, p));
        }
    }

    /** @internal TODO: to be removed in 0.7. */
    subtract(n: number, p: moment.UnitOfTime): TimeSpan;
    /** @internal TODO: to be removed in 0.7. */
    subtract(n: number): TimeSpan;
    /** @internal TODO: to be removed in 0.7. */
    subtract(d: TimeSpan): TimeSpan;
    subtract(a: any, p?: moment.UnitOfTime): TimeSpan {
        if (arguments.length === 1) {
            return new TimeSpan(this.duration.subtract(a));
        }
        else {
            return new TimeSpan(this.duration.subtract(a, p));
        }
    }

    Subtract(n: number, p: moment.UnitOfTime): TimeSpan;
    Subtract(n: number): TimeSpan;
    Subtract(d: TimeSpan): TimeSpan;
    Subtract(a: any, p?: moment.UnitOfTime): TimeSpan {
        if (arguments.length === 1) {
            return new TimeSpan(this.duration.subtract(a));
        }
        else {
            return new TimeSpan(this.duration.subtract(a, p));
        }
    }

    /** @internal TODO: to be removed in 0.7. */
    toISOString(): string { return this.duration.toISOString(); }
    ToISOString(): string { return this.duration.toISOString(); }

    /** @internal TODO: to be removed in 0.7. */
    toJSON(): string { return this.duration.toJSON(); }
    ToJSON(): string { return this.duration.toJSON(); }

    private static MillisPerSecond: number = 1000; //const
    private static MillisPerMinute: number = TimeSpan.MillisPerSecond * 60; //     60,000 //const
    private static MillisPerHour: number = TimeSpan.MillisPerMinute * 60;   //  3,600,000 //const
    private static MillisPerDay: number = TimeSpan.MillisPerHour * 24;      // 86,400,000 //const

    private static MaxSeconds: number = Number.MAX_VALUE / TimeSpan.MillisPerSecond;// TimeSpan.TicksPerSecond; //const
    private static MinSeconds: number = Number.MIN_VALUE / TimeSpan.MillisPerSecond;// TimeSpan.TicksPerSecond; //const

    private static MaxMilliSeconds: number = Number.MAX_VALUE;/// TimeSpan.TicksPerMillisecond; //const
    private static MinMilliSeconds: number = Number.MIN_VALUE;/// TimeSpan.TicksPerMillisecond; //const

    //private static  TicksPerTenthSecond:number = TimeSpan.TicksPerMillisecond * 100; //const

    public static Zero: TimeSpan = new TimeSpan(0);//readonly

    public static MaxValueTimeSpan = new TimeSpan(Number.MAX_VALUE);//readonly
    public static MinValueTimeSpan = new TimeSpan(Number.MIN_VALUE);//readonly

    public static FromDays(value: number): TimeSpan { return new TimeSpan(value * TimeSpan.MillisPerDay); }
    public static FromHours(value: number): TimeSpan { return new TimeSpan(value * TimeSpan.MillisPerHour); }
    public static FromMilliseconds(value: number): TimeSpan { return new TimeSpan(value); }
    public static FromMinutes(value: number): TimeSpan { return new TimeSpan(value * TimeSpan.MillisPerMinute); }
    public static FromSeconds(value: number): TimeSpan { return new TimeSpan(value * TimeSpan.MillisPerSecond); }


}
module TimeSpan2 {
    /** TimeSpan basics from c# using momentjs */
    class TimeSpan {
        // non ticks use in js - public static     TicksPerMillisecond:number =  10000; //const
        // non ticks use in js - private static  MillisecondsPerTick:number = 1.0 / TimeSpan.TicksPerMillisecond; //const

        // non ticks use in js - public static  TicksPerSecond:number = TimeSpan.TicksPerMillisecond * 1000;   // 10,000,000 //const
        // non ticks use in js - private static  SecondsPerTick:number =  1.0 / TimeSpan.TicksPerSecond;         // 0.0001 //const

        // non ticks use in js - public static  TicksPerMinute:number = TimeSpan.TicksPerSecond * 60;         // 600,000,000 //const
        // non ticks use in js - private static  MinutesPerTick:number = 1.0 / TimeSpan.TicksPerMinute; // 1.6666666666667e-9 //const

        // non ticks use in js - public static  TicksPerHour:number = TimeSpan.TicksPerMinute * 60;        // 36,000,000,000 //const
        // non ticks use in js - private static  HoursPerTick:number = 1.0 / TimeSpan.TicksPerHour; // 2.77777777777777778e-11 //const

        // non ticks use in js - public static  TicksPerDay:number = TimeSpan.TicksPerHour * 24;          // 864,000,000,000 //const
        // non ticks use in js - private static  DaysPerTick:number = 1.0 / TimeSpan.TicksPerDay; // 1.1574074074074074074e-12 //const

        private static MillisPerSecond: number = 1000; //const
        private static MillisPerMinute: number = TimeSpan.MillisPerSecond * 60; //     60,000 //const
        private static MillisPerHour: number = TimeSpan.MillisPerMinute * 60;   //  3,600,000 //const
        private static MillisPerDay: number = TimeSpan.MillisPerHour * 24;      // 86,400,000 //const

        private static MaxSeconds: number = Number.MAX_VALUE / TimeSpan.MillisPerSecond;// TimeSpan.TicksPerSecond; //const
        private static MinSeconds: number = Number.MIN_VALUE / TimeSpan.MillisPerSecond;// TimeSpan.TicksPerSecond; //const

        private static MaxMilliSeconds: number = Number.MAX_VALUE;/// TimeSpan.TicksPerMillisecond; //const
        private static MinMilliSeconds: number = Number.MIN_VALUE;/// TimeSpan.TicksPerMillisecond; //const

        //private static  TicksPerTenthSecond:number = TimeSpan.TicksPerMillisecond * 100; //const

        public static Zero: TimeSpan = new TimeSpan(0);//readonly

        public static MaxValueTimeSpan = new TimeSpan(Number.MAX_VALUE);//readonly
        public static MinValueTimeSpan = new TimeSpan(Number.MIN_VALUE);//readonly

        private _millis: number = 0;

        public constructor(milliseconds: number);
        public constructor(hours: number, minutes: number, seconds: number);
        public constructor(days: number, hours: number, minutes: number, seconds: number);
        public constructor(days: number, hours: number, minutes: number, seconds: number, milliseconds: number);
        public constructor(millisOrHrsOrDays: number, minsOrHrs?: number, secsOrMins?: number, seconds?: number, milliseconds?: number) {
            var argsLength: number = arguments.length;
            var millis = 0;
            if (typeof milliseconds !== 'undefined')
                millis = milliseconds;

            switch (argsLength) {
                case 1:
                    this._millis = millisOrHrsOrDays;
                    break;
                case 3:
                    this._millis = TimeSpan.TimeToTicks(millisOrHrsOrDays, minsOrHrs, secsOrMins);
                    break;
                case 4:
                case 5:
                    var totalSeconds = millisOrHrsOrDays * 24 * 3600 + minsOrHrs * 3600 + secsOrMins * 60 + seconds;
                    if (totalSeconds > TimeSpan.MaxSeconds || totalSeconds < TimeSpan.MinSeconds)
                        throw new ArgumentOutOfRangeException("DateTime.ts - TimeSpan.ctor - Overflow_TimeSpanTooLong");
                    this._millis = totalSeconds * TimeSpan.MillisPerSecond + millis;
                    break
                default:
                    throw new Error("DateTime.ts - TimeSpan.ctor - invalid number of arguments");
            }

        }

        private static TimeToTicks(hour: number, minute: number, second: number): number {
            // totalSeconds is bounded by 2^31 * 2^12 + 2^31 * 2^8 + 2^31,
            // which is less than 2^44, meaning we won't overflow totalSeconds.
            var totalSeconds = hour * 3600 + minute * 60 + second;
            if (totalSeconds > this.MaxSeconds || totalSeconds < this.MinSeconds)
                throw new ArgumentOutOfRangeException("DateTime.ts - TimeSpan.TimeToTicks - Overflow_TimeSpanTooLong");
            return totalSeconds * this.MillisPerSecond;
        }

        public get Days(): number { return Math.floor(this._millis / TimeSpan.MillisPerDay); }
        public get Hours(): number { return Math.floor(this._millis / TimeSpan.MillisPerHour); }
        public get Milliseconds(): number { return Math.floor(this._millis); }
        public get Minutes(): number { return Math.floor(this._millis / TimeSpan.MillisPerMinute); }
        public get Seconds(): number { return Math.floor(this._millis / TimeSpan.MillisPerSecond); }
        //public get Ticks(): number { return Math.floor( this._millis / TimeSpan.); }
        public get TotalDays(): number { return this._millis / TimeSpan.MillisPerDay; }
        public get TotalHours(): number { return this._millis / TimeSpan.MillisPerHour; }
        public get TotalMilliseconds(): number { return this._millis; }
        public get TotalMinutes(): number { return this._millis / TimeSpan.MillisPerMinute; }
        public get TotalSeconds(): number { return this._millis / TimeSpan.MillisPerSecond; }
        // Compares two TimeSpan values, returning an integer that indicates their
        // relationship.
        //
        public static Compare(t1: TimeSpan, t2: TimeSpan): number {
            if (t1._millis > t2._millis) return 1;
            if (t1._millis < t2._millis) return -1;
            return 0;
        }
        public static Equals(t1: TimeSpan, t2: TimeSpan): boolean { return t1._millis === t2._millis; }
        public static FromDays(value: number): TimeSpan { return new TimeSpan(value * TimeSpan.MillisPerDay); }
        public static FromHours(value: number): TimeSpan { return new TimeSpan(value * TimeSpan.MillisPerHour); }
        public static FromMilliseconds(value: number): TimeSpan { return new TimeSpan(value); }
        public static FromMinutes(value: number): TimeSpan { return new TimeSpan(value * TimeSpan.MillisPerMinute); }
        public static FromSeconds(value: number): TimeSpan { return new TimeSpan(value * TimeSpan.MillisPerSecond); }
        //public static FromTicks(value: number): TimeSpan{ return new TimeSpan(value * TimeSpan.MillisPerDay); }
        public static Parse(s: string): TimeSpan {
            return null;
        }
        //public static Parse(input: string, formatProvider: IFormatProvider): TimeSpan;

        //public static ParseExact(string input, string[] formats, IFormatProvider formatProvider): TimeSpan;
        //public static ParseExact(string input, string format, IFormatProvider formatProvider): TimeSpan;
        //public static ParseExact(string input, string[] formats, IFormatProvider formatProvider, TimeSpanStyles styles): TimeSpan;
        //public static ParseExact(string input, string format, IFormatProvider formatProvider, TimeSpanStyles styles): TimeSpan;
        //public static TryParse(string s, out TimeSpan result): boolean;
        //public static TryParse(string input, IFormatProvider formatProvider, out TimeSpan result): boolean;
        //public static TryParseExact(string input, string[] formats, IFormatProvider formatProvider, out TimeSpan result): boolean;
        //public static TryParseExact(string input, string format, IFormatProvider formatProvider, out TimeSpan result): boolean;
        //public static TryParseExact(string input, string[] formats, IFormatProvider formatProvider, TimeSpanStyles styles, out TimeSpan result): boolean;
        //public static TryParseExact(string input, string format, IFormatProvider formatProvider, TimeSpanStyles styles, out TimeSpan result): boolean { }
        public Add(ts: TimeSpan): TimeSpan {
            var result = this._millis + ts._millis;
            // Overflow if signs of operands was identical and result's sign was opposite.
            // >> 63 gives the sign bit (either 64 1's or 64 0's).
            if ((this._millis >>> 63 === ts._millis >> 63) && (this.Milliseconds >>> 63 !== result >> 63))
                throw new Error("Overflow_TimeSpanTooLong");//OverflowException
            return new TimeSpan(result);
        }
        public CompareTo(value: TimeSpan): number;
        public CompareTo(value: any): number;
        public CompareTo(value: any): number {
            if (!(value instanceof TimeSpan))
                throw new Error("Arg_MustBeTimeSpan");//ArgumentException
            var m: number = (<TimeSpan>value)._millis;
            if (this._millis > m) return 1;
            if (this._millis < m) return -1;
            return 0;
        }
        // public Duration(): TimeSpan;
        // public Equals(objTimeSpan): boolean;
        // public override bool Equals(object value);
        // public override int GetHashCode();
        // public Negate(): TimeSpan;
        // public Subtract(ts: TimeSpan): TimeSpan;
        // public ToString(): string;
        // public ToString(format: string): string;
        // public ToString(format: string, formatProvider: IFormatProvider): string;



        // public static TimeSpan operator + (TimeSpan t);
        // public static TimeSpan operator + (TimeSpan t1, TimeSpan t2);
        // public static TimeSpan operator - (TimeSpan t);
        // public static TimeSpan operator - (TimeSpan t1, TimeSpan t2);
        // public static bool operator == (TimeSpan t1, TimeSpan t2);
        // public static bool operator != (TimeSpan t1, TimeSpan t2);
        // public static bool operator <(TimeSpan t1, TimeSpan t2);
        // public static bool operator >(TimeSpan t1, TimeSpan t2);
        // public static bool operator <= (TimeSpan t1, TimeSpan t2);
        // public static bool operator >= (TimeSpan t1, TimeSpan t2);

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