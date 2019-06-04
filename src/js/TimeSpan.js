"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment-timezone");
var ArgumentException_1 = require("../js/Exceptions/ArgumentException");
var TimeSpan = /** @class */ (function () {
    function TimeSpan(daysOrHoursOrMsOrDuration, hoursOrMinutes, minutesOrSeconds, seconds, milliseconds) {
        var duration = null;
        var argsLength = arguments.length;
        if (argsLength === 1) {
            duration = moment.duration(daysOrHoursOrMsOrDuration);
        }
        else {
            var momentInput = {};
            if (argsLength === 3) {
                momentInput.hours = daysOrHoursOrMsOrDuration;
                momentInput.minutes = hoursOrMinutes;
                momentInput.seconds = minutesOrSeconds;
            }
            if (argsLength >= 4) {
                momentInput.days = daysOrHoursOrMsOrDuration;
                momentInput.hours = hoursOrMinutes;
                momentInput.minutes = minutesOrSeconds;
                momentInput.seconds = seconds;
            }
            if (argsLength === 5) {
                momentInput.millisecond = milliseconds;
            }
            duration = moment.duration(momentInput);
        }
        this.getMomentDuration = function () { return duration; };
        this.setMomentDuration = function (value) { return duration = value; };
    }
    Object.defineProperty(TimeSpan.prototype, "duration", {
        get: function () { return this.getMomentDuration(); },
        enumerable: true,
        configurable: true
    });
    TimeSpan.prototype.humanize = function (withSuffix) { return this.duration.humanize(withSuffix); };
    TimeSpan.prototype.as = function (units) { return this.duration.as(units); };
    Object.defineProperty(TimeSpan.prototype, "Milliseconds", {
        get: function () {
            return this.duration.milliseconds();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "TotalMilliseconds", {
        get: function () {
            return this.duration.asMilliseconds();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "Seconds", {
        get: function () {
            return this.duration.seconds();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "TotalSeconds", {
        get: function () {
            return this.duration.asSeconds();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "Minutes", {
        get: function () {
            return this.duration.minutes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "TotalMinutes", {
        get: function () {
            return this.duration.asMinutes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "Hours", {
        get: function () {
            return this.duration.hours();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "TotalHours", {
        get: function () {
            return this.duration.asHours();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "Days", {
        get: function () {
            return this.duration.days();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "TotalDays", {
        get: function () {
            return this.duration.asDays();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "Months", {
        get: function () {
            return this.duration.months();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "TotalMonths", {
        get: function () {
            return this.duration.asMonths();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "Years", {
        get: function () {
            return this.duration.years();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "TotalYears", {
        get: function () {
            return this.duration.asYears();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "Weeks", {
        get: function () {
            return this.duration.weeks();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeSpan.prototype, "Totalweeks", {
        get: function () {
            return this.duration.asWeeks();
        },
        enumerable: true,
        configurable: true
    });
    TimeSpan.prototype.Add = function (a, p) {
        if (arguments.length === 1) {
            return new TimeSpan(typeof a === 'number' ? this.duration.add(a) : a.TotalMilliseconds);
        }
        else {
            return new TimeSpan(this.duration.add(a, p));
        }
    };
    TimeSpan.prototype.Subtract = function (a, p) {
        if (arguments.length === 1) {
            return new TimeSpan(this.duration.subtract(a));
        }
        else {
            return new TimeSpan(this.duration.subtract(a, p));
        }
    };
    TimeSpan.prototype.ToISOString = function () { return this.duration.toISOString(); };
    TimeSpan.prototype.ToJSON = function () { return this.duration.toJSON(); };
    TimeSpan.FromDays = function (value) {
        return new TimeSpan(value * TimeSpan.MillisPerDay);
    };
    TimeSpan.FromHours = function (value) {
        return new TimeSpan(value * TimeSpan.MillisPerHour);
    };
    TimeSpan.FromMilliseconds = function (value) {
        return new TimeSpan(value);
    };
    TimeSpan.FromMinutes = function (value) {
        return new TimeSpan(value * TimeSpan.MillisPerMinute);
    };
    TimeSpan.FromSeconds = function (value) {
        return new TimeSpan(value * TimeSpan.MillisPerSecond);
    };
    TimeSpan.prototype.valueOf = function () {
        return this.duration.asMilliseconds();
    };
    TimeSpan.prototype.toString = function () {
        return this.duration.toISOString();
    };
    /** @internal */
    TimeSpan.MillisPerSecond = 1000; //const
    /** @internal */
    TimeSpan.MillisPerMinute = TimeSpan.MillisPerSecond * 60; //     60,000 //const
    /** @internal */
    TimeSpan.MillisPerHour = TimeSpan.MillisPerMinute * 60; //  3,600,000 //const
    /** @internal */
    TimeSpan.MillisPerDay = TimeSpan.MillisPerHour * 24; // 86,400,000 //const
    TimeSpan.MaxSeconds = Number.MAX_VALUE / TimeSpan.MillisPerSecond; // TimeSpan.TicksPerSecond; //const
    TimeSpan.MinSeconds = Number.MIN_VALUE / TimeSpan.MillisPerSecond; // TimeSpan.TicksPerSecond; //const
    TimeSpan.MaxMilliSeconds = Number.MAX_VALUE; /// TimeSpan.TicksPerMillisecond; //const
    TimeSpan.MinMilliSeconds = Number.MIN_VALUE; /// TimeSpan.TicksPerMillisecond; //const
    //private static  TicksPerTenthSecond:number = TimeSpan.TicksPerMillisecond * 100; //const
    TimeSpan.Zero = new TimeSpan(0); //readonly
    TimeSpan.MaxValueTimeSpan = new TimeSpan(Number.MAX_VALUE); //readonly
    TimeSpan.MinValueTimeSpan = new TimeSpan(Number.MIN_VALUE); //readonly
    return TimeSpan;
}());
exports.TimeSpan = TimeSpan;
var TimeSpan2;
(function (TimeSpan2) {
    /** TimeSpan basics from c# using momentjs */
    var TimeSpan = /** @class */ (function () {
        function TimeSpan(millisOrHrsOrDays, minsOrHrs, secsOrMins, seconds, milliseconds) {
            this._millis = 0;
            var argsLength = arguments.length;
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
                        throw new ArgumentException_1.ArgumentOutOfRangeException("DateTime.ts - TimeSpan.ctor - Overflow_TimeSpanTooLong");
                    this._millis = totalSeconds * TimeSpan.MillisPerSecond + millis;
                    break;
                default:
                    throw new Error("DateTime.ts - TimeSpan.ctor - invalid number of arguments");
            }
        }
        TimeSpan.TimeToTicks = function (hour, minute, second) {
            // totalSeconds is bounded by 2^31 * 2^12 + 2^31 * 2^8 + 2^31,
            // which is less than 2^44, meaning we won't overflow totalSeconds.
            var totalSeconds = hour * 3600 + minute * 60 + second;
            if (totalSeconds > this.MaxSeconds || totalSeconds < this.MinSeconds)
                throw new ArgumentException_1.ArgumentOutOfRangeException("DateTime.ts - TimeSpan.TimeToTicks - Overflow_TimeSpanTooLong");
            return totalSeconds * this.MillisPerSecond;
        };
        Object.defineProperty(TimeSpan.prototype, "Days", {
            get: function () { return Math.floor(this._millis / TimeSpan.MillisPerDay); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "Hours", {
            get: function () { return Math.floor(this._millis / TimeSpan.MillisPerHour); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "Milliseconds", {
            get: function () { return Math.floor(this._millis); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "Minutes", {
            get: function () { return Math.floor(this._millis / TimeSpan.MillisPerMinute); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "Seconds", {
            get: function () { return Math.floor(this._millis / TimeSpan.MillisPerSecond); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "TotalDays", {
            //public get Ticks(): number { return Math.floor( this._millis / TimeSpan.); }
            get: function () { return this._millis / TimeSpan.MillisPerDay; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "TotalHours", {
            get: function () { return this._millis / TimeSpan.MillisPerHour; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "TotalMilliseconds", {
            get: function () { return this._millis; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "TotalMinutes", {
            get: function () { return this._millis / TimeSpan.MillisPerMinute; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "TotalSeconds", {
            get: function () { return this._millis / TimeSpan.MillisPerSecond; },
            enumerable: true,
            configurable: true
        });
        // Compares two TimeSpan values, returning an integer that indicates their
        // relationship.
        //
        TimeSpan.Compare = function (t1, t2) {
            if (t1._millis > t2._millis)
                return 1;
            if (t1._millis < t2._millis)
                return -1;
            return 0;
        };
        TimeSpan.Equals = function (t1, t2) { return t1._millis === t2._millis; };
        TimeSpan.FromDays = function (value) { return new TimeSpan(value * TimeSpan.MillisPerDay); };
        TimeSpan.FromHours = function (value) { return new TimeSpan(value * TimeSpan.MillisPerHour); };
        TimeSpan.FromMilliseconds = function (value) { return new TimeSpan(value); };
        TimeSpan.FromMinutes = function (value) { return new TimeSpan(value * TimeSpan.MillisPerMinute); };
        TimeSpan.FromSeconds = function (value) { return new TimeSpan(value * TimeSpan.MillisPerSecond); };
        //public static FromTicks(value: number): TimeSpan{ return new TimeSpan(value * TimeSpan.MillisPerDay); }
        TimeSpan.Parse = function (s) {
            return null;
        };
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
        TimeSpan.prototype.Add = function (ts) {
            var result = this._millis + ts._millis;
            // Overflow if signs of operands was identical and result's sign was opposite.
            // >> 63 gives the sign bit (either 64 1's or 64 0's).
            if ((this._millis >>> 63 === ts._millis >> 63) && (this.Milliseconds >>> 63 !== result >> 63))
                throw new Error("Overflow_TimeSpanTooLong"); //OverflowException
            return new TimeSpan(result);
        };
        TimeSpan.prototype.CompareTo = function (value) {
            if (!(value instanceof TimeSpan))
                throw new Error("Arg_MustBeTimeSpan"); //ArgumentException
            var m = value._millis;
            if (this._millis > m)
                return 1;
            if (this._millis < m)
                return -1;
            return 0;
        };
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
        TimeSpan.MillisPerSecond = 1000; //const
        TimeSpan.MillisPerMinute = TimeSpan.MillisPerSecond * 60; //     60,000 //const
        TimeSpan.MillisPerHour = TimeSpan.MillisPerMinute * 60; //  3,600,000 //const
        TimeSpan.MillisPerDay = TimeSpan.MillisPerHour * 24; // 86,400,000 //const
        TimeSpan.MaxSeconds = Number.MAX_VALUE / TimeSpan.MillisPerSecond; // TimeSpan.TicksPerSecond; //const
        TimeSpan.MinSeconds = Number.MIN_VALUE / TimeSpan.MillisPerSecond; // TimeSpan.TicksPerSecond; //const
        TimeSpan.MaxMilliSeconds = Number.MAX_VALUE; /// TimeSpan.TicksPerMillisecond; //const
        TimeSpan.MinMilliSeconds = Number.MIN_VALUE; /// TimeSpan.TicksPerMillisecond; //const
        //private static  TicksPerTenthSecond:number = TimeSpan.TicksPerMillisecond * 100; //const
        TimeSpan.Zero = new TimeSpan(0); //readonly
        TimeSpan.MaxValueTimeSpan = new TimeSpan(Number.MAX_VALUE); //readonly
        TimeSpan.MinValueTimeSpan = new TimeSpan(Number.MIN_VALUE); //readonly
        return TimeSpan;
    }());
})(TimeSpan2 || (TimeSpan2 = {}));
