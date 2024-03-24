import * as moment from "moment-timezone";

import { ArgumentOutOfRangeException, ArgumentException } from "../js/Exceptions/ArgumentException";

export class TimeSpan {
    private get duration(): moment.Duration { return this.getMomentDuration(); }
    private getMomentDuration: () => moment.Duration;
    private setMomentDuration: (value) => void;

    constructor(ms: number);
    constructor(duration: moment.DurationInputArg1 | moment.DurationInputObject);
    constructor(hours: number, minutes: number, seconds);
    constructor(days: number, hours: number, minutes: number, seconds);
    constructor(days: number, hours: number, minutes: number, seconds: number, milliseconds);
    constructor(daysOrHoursOrMsOrDuration: number | moment.Duration,
        hoursOrMinutes?: number,
        minutesOrSeconds?: number,
        seconds?: number,
        milliseconds?: number) {

        let duration: moment.Duration = null;
        let argsLength = arguments.length;

        if (argsLength === 1) {
            duration = moment.duration(daysOrHoursOrMsOrDuration);
        }
        else {

            let momentInput: moment.DurationInputObject = {};

            if (argsLength === 3) {
                momentInput.hours = <number>daysOrHoursOrMsOrDuration;
                momentInput.minutes = hoursOrMinutes;
                momentInput.seconds = minutesOrSeconds;
            }
            if (argsLength >= 4) {
                momentInput.days = <number>daysOrHoursOrMsOrDuration;
                momentInput.hours = hoursOrMinutes;
                momentInput.minutes = minutesOrSeconds;
                momentInput.seconds = seconds;
            }
            if (argsLength === 5) {
                momentInput.millisecond = milliseconds;
            }
            duration = moment.duration(momentInput);
        }


        this.getMomentDuration = () => duration;
        this.setMomentDuration = (value) => duration = value;
    }

    humanize(withSuffix?: boolean): string { return this.duration.humanize(withSuffix); }

    as(units: moment.unitOfTime.Base): number { return this.duration.as(units); }

    get Milliseconds(): number {
        return this.duration.milliseconds();
    }
    get TotalMilliseconds(): number {
        return this.duration.asMilliseconds();
    }

    get Seconds(): number {
        return this.duration.seconds();
    }
    get TotalSeconds(): number {
        return this.duration.asSeconds();
    }

    get Minutes(): number {
        return this.duration.minutes();
    }
    get TotalMinutes(): number {
        return this.duration.asMinutes();
    }

    get Hours(): number {
        return this.duration.hours();
    }
    get TotalHours(): number {
        return this.duration.asHours();
    }

    get Days(): number {
        return this.duration.days();
    }
    get TotalDays(): number {
        return this.duration.asDays();
    }

    get Months(): number {
        return this.duration.months();
    }
    get TotalMonths(): number {
        return this.duration.asMonths();
    }

    get Years(): number {
        return this.duration.years();
    }
    get TotalYears(): number {
        return this.duration.asYears();
    }

    get Weeks(): number {
        return this.duration.weeks()
    }
    get Totalweeks(): number {
        return this.duration.asWeeks()
    }

    Add(num: number, unit: moment.unitOfTime.Base): TimeSpan;
    Add(ms: number): TimeSpan;
    Add(ts: TimeSpan): TimeSpan;
    Add(a: number | TimeSpan, p?: moment.unitOfTime.Base): TimeSpan {
        if (arguments.length === 1) {
            return new TimeSpan(typeof a === 'number' ? this.duration.add(a) : a.TotalMilliseconds);
        }
        else {
            return new TimeSpan(this.duration.add(a as number, p));
        }
    }

    Subtract(n: number, p: moment.unitOfTime.Base): TimeSpan;
    Subtract(n: number): TimeSpan;
    Subtract(d: TimeSpan): TimeSpan;
    Subtract(a: any, p?: moment.unitOfTime.Base): TimeSpan {
        if (arguments.length === 1) {
            return new TimeSpan(this.duration.subtract(a));
        }
        else {
            return new TimeSpan(this.duration.subtract(a, p));
        }
    }

    ToISOString(): string { return this.duration.toISOString(); }

    ToJSON(): string { return this.duration.toJSON(); }

    /** @internal */
    public static MillisPerSecond: number = 1000; //const
    /** @internal */
    public static MillisPerMinute: number = TimeSpan.MillisPerSecond * 60; //     60,000 //const
    /** @internal */
    public static MillisPerHour: number = TimeSpan.MillisPerMinute * 60;   //  3,600,000 //const
    /** @internal */
    public static MillisPerDay: number = TimeSpan.MillisPerHour * 24;      // 86,400,000 //const

    private static MaxSeconds: number = Number.MAX_VALUE / TimeSpan.MillisPerSecond;// TimeSpan.TicksPerSecond; //const
    private static MinSeconds: number = Number.MIN_VALUE / TimeSpan.MillisPerSecond;// TimeSpan.TicksPerSecond; //const

    private static MaxMilliSeconds: number = Number.MAX_VALUE;/// TimeSpan.TicksPerMillisecond; //const
    private static MinMilliSeconds: number = Number.MIN_VALUE;/// TimeSpan.TicksPerMillisecond; //const

    //private static  TicksPerTenthSecond:number = TimeSpan.TicksPerMillisecond * 100; //const

    public static readonly Zero: TimeSpan = new TimeSpan(0);//readonly

    public static readonly MaxValueTimeSpan = new TimeSpan(Number.MAX_VALUE);//readonly
    public static readonly MinValueTimeSpan = new TimeSpan(Number.MIN_VALUE);//readonly


    public static FromDays(value: number): TimeSpan {
        return new TimeSpan(value * TimeSpan.MillisPerDay);
    }
    public static FromHours(value: number): TimeSpan {
        return new TimeSpan(value * TimeSpan.MillisPerHour);
    }
    public static FromMilliseconds(value: number): TimeSpan {
        return new TimeSpan(value);
    }
    public static FromMinutes(value: number): TimeSpan {
        return new TimeSpan(value * TimeSpan.MillisPerMinute);
    }
    public static FromSeconds(value: number): TimeSpan {
        return new TimeSpan(value * TimeSpan.MillisPerSecond);
    }

    valueOf() {
        return this.duration.asMilliseconds();
    }
    toString() {
        return this.duration.toISOString();
    }    
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
            let argsLength: number = arguments.length;
            let millis = 0;
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
                    let totalSeconds = millisOrHrsOrDays * 24 * 3600 + minsOrHrs * 3600 + secsOrMins * 60 + seconds;
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
            let totalSeconds = hour * 3600 + minute * 60 + second;
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
            let result = this._millis + ts._millis;
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
            let m: number = (<TimeSpan>value)._millis;
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
