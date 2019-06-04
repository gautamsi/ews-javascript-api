"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment-timezone");
var ArgumentException_1 = require("./Exceptions/ArgumentException");
var TimeSpan_1 = require("./TimeSpan");
var ticksToEpoch = 621355968000000000; //can be used when calculating ticks/ms from Windows date to unix date
exports.msToEpoch = 62135596800000;
var invalidDateTimeMessage = {
    "years": "year is less than 1 or greater than 9999.",
    "months": "month is less than 1 or greater than 12.",
    "days": "day is less than 1 or greater than the number of days in month.",
    "hours": "hour is less than 0 or greater than 23.",
    "minutes": "minute is less than 0 or greater than 59.",
    "seconds": "second is less than 0 or greater than 59.",
    "milliseconds": "millisecond is less than 0 or greater than 999."
};
var DateTimeKind;
(function (DateTimeKind) {
    DateTimeKind[DateTimeKind["Unspecified"] = 0] = "Unspecified";
    DateTimeKind[DateTimeKind["Utc"] = 1] = "Utc";
    DateTimeKind[DateTimeKind["Local"] = 2] = "Local";
})(DateTimeKind = exports.DateTimeKind || (exports.DateTimeKind = {}));
/**
 * DateTime - basic date time based on moment.js
 */
var DateTime = /** @class */ (function () {
    function DateTime(msOrDateOrMomentOrYear, monthOrKind, day, hour, minute, second, millisecond, kind) {
        if (kind === void 0) { kind = DateTimeKind.Unspecified; }
        this.kind = DateTimeKind.Unspecified;
        this.originalDateInput = null;
        var argsLength = arguments.length;
        var momentdate = moment();
        this.kind = kind;
        if (argsLength === 1) {
            if (msOrDateOrMomentOrYear instanceof DateTime) {
                momentdate = msOrDateOrMomentOrYear.MomentDate.clone();
                this.kind = msOrDateOrMomentOrYear.kind;
            }
            else {
                momentdate = moment(msOrDateOrMomentOrYear);
                this.originalDateInput = msOrDateOrMomentOrYear;
            }
        }
        else if (argsLength === 2) {
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
        else {
            var momentInput = {};
            if (argsLength >= 3) {
                momentInput.year = msOrDateOrMomentOrYear;
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
            }
            momentdate = moment(momentInput);
        }
        if (momentdate && !momentdate.isValid()) {
            var invalid = momentdate.invalidAt();
            throw new ArgumentException_1.ArgumentOutOfRangeException(momentValidity[invalid], invalidDateTimeMessage[momentValidity[invalid]]);
        }
        // if (momentdate.isUtc()) {
        //     this.kind = DateTimeKind.Utc
        // }
        // else if (momentdate.isLocal()) {
        //     this.kind = DateTimeKind.Local;
        // }
        this.getMomentDate = function () { return momentdate; };
        this.setMomentDate = function (value) { return momentdate = value; };
    }
    Object.defineProperty(DateTime.prototype, "MomentDate", {
        get: function () { return this.momentDate; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "currentUtcOffset", {
        get: function () { return this.momentDate.utcOffset(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "momentDate", {
        get: function () { return this.getMomentDate(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime, "Now", {
        get: function () {
            return new DateTime(moment());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime, "UtcNow", {
        get: function () {
            return new DateTime(moment.utc());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "TotalMilliSeconds", {
        get: function () {
            return this.momentDate.valueOf();
        },
        enumerable: true,
        configurable: true
    });
    DateTime.prototype.Add = function (quantity, unit) {
        if (unit === void 0) { unit = "ms"; }
        if (typeof quantity !== 'number') {
            quantity = quantity.TotalMilliseconds;
            unit = "ms";
        }
        var date = moment(this.momentDate);
        date.add(quantity, unit);
        return new DateTime(date);
    };
    DateTime.Compare = function (x, y) {
        var diff = x.momentDate.diff(y.momentDate);
        if (diff === 0)
            return 0;
        if (diff < 0)
            return -1;
        return 1;
    };
    DateTime.prototype.CompareTo = function (toDate) {
        return DateTime.Compare(this, toDate);
    };
    DateTime.prototype.Difference = function (toDate) {
        return new TimeSpan_1.TimeSpan(toDate.momentDate.diff(this.momentDate));
    };
    DateTime.prototype.Format = function (formatting) {
        return this.momentDate.format(formatting);
    };
    DateTime.getKindfromMoment = function (m) {
        if (m.isUTC()) {
            return DateTimeKind.Utc;
        }
        if (m.isLocal()) {
            return DateTimeKind.Local;
        }
        return DateTimeKind.Unspecified;
    };
    DateTime.Parse = function (value, kind) {
        if (kind === void 0) { kind = DateTimeKind.Unspecified; }
        var mdate = moment(value);
        var tempDate = null;
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
            throw new ArgumentException_1.ArgumentException("invalid date value");
        }
    };
    DateTime.prototype.ToISOString = function () {
        return this.momentDate.toISOString();
    };
    DateTime.prototype.toString = function () {
        return this.momentDate.toString();
    };
    DateTime.prototype.utcOffset = function (value) {
        this.momentDate.utcOffset(value);
    };
    DateTime.DateimeStringToTimeZone = function (dtStr, zoneStr) {
        return new DateTime(moment.tz(dtStr, zoneStr));
    };
    DateTime.DateTimeToXSDateTime = function (dateTime) {
        var format = 'YYYY-MM-DDTHH:mm:ss.SSSZ'; //using moment format for c#->"yyyy-MM-ddTHH:mm:ss.fff";
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
        return dateTime.Format(format); //, CultureInfo.InvariantCulture);
    };
    DateTime.DateTimeToXSDate = function (date) {
        var format = 'YYYY-MM-DDZ'; //using moment format for c#->"yyyy-MM-dd";
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
        return date.Format(format); //, CultureInfo.InvariantCulture);
    };
    Object.defineProperty(DateTime.prototype, "Date", {
        /* c# DateTime properties */
        get: function () {
            if (this === DateTime.MaxValue || this === DateTime.MinValue) {
                return new DateTime(this.momentDate.utc().format("YYYY-MM-DD"));
            }
            return new DateTime(this.momentDate.format("YYYY-MM-DD"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "Day", {
        get: function () {
            return this.momentDate.date();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "DayOfWeek", {
        get: function () {
            return this.momentDate.day();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "DayOfYear", {
        get: function () {
            return this.momentDate.dayOfYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "Hour", {
        get: function () {
            return this.momentDate.hour();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "Kind", {
        get: function () {
            return this.kind;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "Millisecond", {
        get: function () {
            return this.momentDate.millisecond();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "Minute", {
        get: function () {
            return this.momentDate.minute();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "Month", {
        get: function () {
            return this.momentDate.month() + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "Second", {
        get: function () {
            return this.momentDate.second();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "TimeOfDay", {
        //  public get Ticks(): {
        //      return this.
        //  }
        get: function () {
            return TimeSpan_1.TimeSpan.FromMilliseconds(this.momentDate.millisecond());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "Today", {
        get: function () {
            return new DateTime(moment(this.momentDate.format("LL"), "LL"));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateTime.prototype, "Year", {
        get: function () {
            return this.momentDate.year();
        },
        enumerable: true,
        configurable: true
    });
    /* c# DateTime Methods */
    //CompareTo
    DateTime.prototype.AddDays = function (days) {
        return this.Add(days, exports.unitOfTime.days);
    };
    DateTime.prototype.AddHours = function (hours) {
        return this.Add(hours, exports.unitOfTime.hours);
    };
    DateTime.prototype.AddMilliseconds = function (ms) {
        return this.Add(ms, exports.unitOfTime.ms);
    };
    DateTime.prototype.AddMinutes = function (minutes) {
        return this.Add(minutes, exports.unitOfTime.minutes);
    };
    DateTime.prototype.AddMonths = function (months) {
        return this.Add(months, exports.unitOfTime.months);
    };
    DateTime.prototype.AddSeconds = function (seconds) {
        return this.Add(seconds, exports.unitOfTime.seconds);
    };
    // public AddTicks(ticks: number): DateTime {
    //     return this.Add(ticks, unitOfTime.);
    // }
    DateTime.prototype.AddYears = function (years) {
        return this.Add(years, exports.unitOfTime.years);
    };
    DateTime.DaysInMonth = function (year, month) {
        if (month < 1 || month > 12)
            throw new ArgumentException_1.ArgumentOutOfRangeException("month", invalidDateTimeMessage["months"]);
        // IsLeapYear checks the year argument
        var days = DateTime.IsLeapYear(year) ? DateTime.DaysToMonth366 : DateTime.DaysToMonth365;
        return days[month] - days[month - 1];
    };
    DateTime.prototype.Equals = function (value) {
        if (value instanceof DateTime) {
            return value.TotalMilliSeconds === this.TotalMilliSeconds;
        }
        return false;
    };
    DateTime.Equals = function (t1, t2) {
        return t1.TotalMilliSeconds === t2.TotalMilliSeconds;
    };
    // FromBinary
    // FromFileTime
    // FromFileTimeUtc
    // FromOADate
    // GetHashCode
    DateTime.prototype.IsDaylightSavingTime = function () {
        return this.momentDate.isDST();
    };
    /**
     *  Checks whether a given year is a leap year. This method returns true if year is a leap year, or false if not.
     * @param {number}  year
     */
    DateTime.IsLeapYear = function (year) {
        if (year < 1 || year > 9999) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("year", invalidDateTimeMessage["years"]);
        }
        return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    };
    // ParseExact
    DateTime.SpecifyKind = function (value, kind) {
        return new DateTime(value.TotalMilliSeconds, kind);
    };
    DateTime.prototype.Subtract = function (dateTime) {
        if (dateTime instanceof DateTime) {
            return new TimeSpan_1.TimeSpan(this.TotalMilliSeconds - dateTime.TotalMilliSeconds);
        }
        else {
            return new DateTime(this.TotalMilliSeconds - dateTime.TotalMilliseconds);
        }
    };
    // ToBinary
    // ToFileTime
    // ToFileTimeUtc
    DateTime.prototype.ToLocalTime = function () {
        return new DateTime(this.momentDate.local());
    };
    DateTime.prototype.ToLongDateString = function () {
        return this.momentDate.format("dddd, MMMM D, YYYY");
    };
    DateTime.prototype.ToLongTimeString = function () {
        return this.momentDate.format("LTS");
    };
    // ToOADate
    DateTime.prototype.ToShortDateString = function () {
        return this.MomentDate.format("l");
    };
    DateTime.prototype.ToShortTimeString = function () {
        return this.MomentDate.format("LT");
    };
    DateTime.prototype.ToString = function () {
        return this.toString();
    };
    DateTime.prototype.ToUniversalTime = function () {
        return new DateTime(this.MomentDate.utc());
    };
    DateTime.TryParse = function (s, outDate) {
        try {
            outDate.outValue = DateTime.Parse(s);
            outDate.outValue.kind = this.getKindfromMoment(outDate.outValue.momentDate);
            return true;
        }
        catch (error) {
            outDate.exception = error;
        }
        return false;
    };
    // TryParseExact
    DateTime.prototype.valueOf = function () {
        return this.TotalMilliSeconds;
    };
    DateTime.DaysToMonth365 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
    DateTime.DaysToMonth366 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
    DateTime.MinValue = new DateTime('0001-01-01T00:00:00+00:00');
    DateTime.MaxValue = new DateTime("9999-12-31T23:59:59.9999999+00:00");
    return DateTime;
}());
exports.DateTime = DateTime;
//
// Summary:
//     Defines the formatting options that customize string parsing for some date and
//     time parsing methods.
var DateTimeStyles;
(function (DateTimeStyles) {
    //
    // Summary:
    //     Default formatting options must be used. This value represents the default style
    //     for the System.DateTime.Parse(System.String), System.DateTime.ParseExact(System.String,System.String,System.IFormatProvider),
    //     and System.DateTime.TryParse(System.String,System.DateTime@) methods.
    DateTimeStyles[DateTimeStyles["None"] = 0] = "None";
    //
    // Summary:
    //     Leading white-space characters must be ignored during parsing, except if they
    //     occur in the System.Globalization.DateTimeFormatInfo format patterns.
    DateTimeStyles[DateTimeStyles["AllowLeadingWhite"] = 1] = "AllowLeadingWhite";
    //
    // Summary:
    //     Trailing white-space characters must be ignored during parsing, except if they
    //     occur in the System.Globalization.DateTimeFormatInfo format patterns.
    DateTimeStyles[DateTimeStyles["AllowTrailingWhite"] = 2] = "AllowTrailingWhite";
    /**
     * Summary:
     *	    Extra white-space characters in the middle of the string must be ignored during
     *	    parsing, except if they occur in the System.Globalization.DateTimeFormatInfo
     *	    format patterns.
     */
    DateTimeStyles[DateTimeStyles["AllowInnerWhite"] = 4] = "AllowInnerWhite";
    /**
     * 	Summary:
     *	    Extra white-space characters anywhere in the string must be ignored during parsing,
     *	    except if they occur in the System.Globalization.DateTimeFormatInfo format patterns.
     *	    This value is a combination of the System.Globalization.DateTimeStyles.AllowLeadingWhite,
     *	    System.Globalization.DateTimeStyles.AllowTrailingWhite, and System.Globalization.DateTimeStyles.AllowInnerWhite
     *	    values.
     */
    DateTimeStyles[DateTimeStyles["AllowWhiteSpaces"] = 7] = "AllowWhiteSpaces";
    //
    // Summary:
    //     If the parsed string contains only the time and not the date, the parsing methods
    //     assume the Gregorian date with year = 1, month = 1, and day = 1. If this value
    //     is not used, the current date is assumed.
    DateTimeStyles[DateTimeStyles["NoCurrentDateDefault"] = 8] = "NoCurrentDateDefault";
    //
    // Summary:
    //     Date and time are returned as a Coordinated Universal Time (UTC). If the input
    //     string denotes a local time, through a time zone specifier or System.Globalization.DateTimeStyles.AssumeLocal,
    //     the date and time are converted from the local time to UTC. If the input string
    //     denotes a UTC time, through a time zone specifier or System.Globalization.DateTimeStyles.AssumeUniversal,
    //     no conversion occurs. If the input string does not denote a local or UTC time,
    //     no conversion occurs and the resulting System.DateTime.Kind property is System.DateTimeKind.Unspecified.
    DateTimeStyles[DateTimeStyles["AdjustToUniversal"] = 16] = "AdjustToUniversal";
    //
    // Summary:
    //     If no time zone is specified in the parsed string, the string is assumed to denote
    //     a local time.
    DateTimeStyles[DateTimeStyles["AssumeLocal"] = 32] = "AssumeLocal";
    //
    // Summary:
    //     If no time zone is specified in the parsed string, the string is assumed to denote
    //     a UTC.
    DateTimeStyles[DateTimeStyles["AssumeUniversal"] = 64] = "AssumeUniversal";
    //
    // Summary:
    //     The System.DateTimeKind field of a date is preserved when a System.DateTime object
    //     is converted to a string using the "o" or "r" standard format specifier, and
    //     the string is then converted back to a System.DateTime object.
    DateTimeStyles[DateTimeStyles["RoundtripKind"] = 128] = "RoundtripKind";
})(DateTimeStyles = exports.DateTimeStyles || (exports.DateTimeStyles = {}));
exports.unitOfTime = {
    "year": "year",
    "years": "years",
    "y": "y",
    "month": "month",
    "months": "months",
    "M": "M",
    "week": "week",
    "weeks": "weeks",
    "w": "w",
    "day": "day",
    "days": "days",
    "d": "d",
    "hour": "hour",
    "hours": "hours",
    "h": "h",
    "minute": "minute",
    "minutes": "minutes",
    "m": "m",
    "second": "second",
    "seconds": "seconds",
    "s": "s",
    "millisecond": "millisecond",
    "milliseconds": "milliseconds",
    "ms": "ms",
};
var momentValidity;
(function (momentValidity) {
    momentValidity[momentValidity["years"] = 0] = "years";
    momentValidity[momentValidity["months"] = 1] = "months";
    momentValidity[momentValidity["days"] = 2] = "days";
    momentValidity[momentValidity["hours"] = 3] = "hours";
    momentValidity[momentValidity["minutes"] = 4] = "minutes";
    momentValidity[momentValidity["seconds"] = 5] = "seconds";
    momentValidity[momentValidity["milliseconds"] = 6] = "milliseconds";
})(momentValidity || (momentValidity = {}));
