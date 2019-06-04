"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment-timezone");
var tzmapping_1 = require("./tzmapping");
var tzmappingex_1 = require("./tzmappingex");
var ArgumentException_1 = require("../js/Exceptions/ArgumentException");
var ExtensionMethods_1 = require("../js/ExtensionMethods");
var DateTime_1 = require("./DateTime");
var DayOfWeek_1 = require("../js/Enumerations/DayOfWeek");
var TimeSpan_1 = require("./TimeSpan");
/**
* TimeZoneInfo
*/
var TimeZoneInfo = /** @class */ (function () {
    function TimeZoneInfo(id, baseUtcOffset, displayName, standardDisplayName, daylightDisplayName, adjustmentRules, disableDaylightSavingTime) {
        this._ianaId = null;
        this._displayName = null;
        this._standardDisplayName = null;
        this._daylightDisplayName = null;
        this._supportsDaylightSavingTime = false;
        this._adjustmentRules = [];
        var adjustmentRulesSupportDst;
        //TimeZoneInfo.ValidateTimeZoneInfo(id, baseUtcOffset, adjustmentRules, adjustmentRulesSupportDst);
        this._id = id;
        this._baseUtcOffset = baseUtcOffset;
        this._displayName = displayName;
        this._standardDisplayName = standardDisplayName;
        this._daylightDisplayName = disableDaylightSavingTime ? null : daylightDisplayName;
        //this._supportsDaylightSavingTime = adjustmentRulesSupportDst && !disableDaylightSavingTime;
        this._adjustmentRules = adjustmentRules;
        var tzArray = tzmapping_1.TimeZoneMappingData[id];
        if (ExtensionMethods_1.ArrayHelper.isArray(tzArray)) {
            this._supportsDaylightSavingTime = tzArray[4] && !disableDaylightSavingTime;
        }
    }
    Object.defineProperty(TimeZoneInfo.prototype, "Id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneInfo.prototype, "IanaId", {
        get: function () {
            return this._ianaId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneInfo.prototype, "DisplayName", {
        get: function () {
            return this._displayName || ExtensionMethods_1.StringHelper.Empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneInfo.prototype, "StandardName", {
        get: function () {
            return this._standardDisplayName || ExtensionMethods_1.StringHelper.Empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneInfo.prototype, "DaylightName", {
        get: function () {
            return this._daylightDisplayName || ExtensionMethods_1.StringHelper.Empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneInfo.prototype, "BaseUtcOffset", {
        get: function () {
            return this._baseUtcOffset;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneInfo.prototype, "SupportsDaylightSavingTime", {
        get: function () {
            return this._supportsDaylightSavingTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneInfo, "Local", {
        get: function () {
            if (this._localTimeZone) {
                return this._localTimeZone;
            }
            return this.CreateLocal();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeZoneInfo, "Utc", {
        get: function () {
            return this.s_utcTimeZone;
        },
        enumerable: true,
        configurable: true
    });
    TimeZoneInfo.ConvertTime = function (dateTime, sourceTimeZone, destinationTimeZone) {
        if (sourceTimeZone == null) {
            throw new ArgumentException_1.ArgumentNullException("sourceTimeZone");
        }
        if (destinationTimeZone == null) {
            throw new ArgumentException_1.ArgumentNullException("destinationTimeZone");
        }
        var sourceKind = this.GetCorrespondingKind(sourceTimeZone);
        if (dateTime.Kind != DateTime_1.DateTimeKind.Unspecified && dateTime.Kind != sourceKind) {
            throw new ArgumentException_1.ArgumentException("DateTime Kind mismatch with source time", "sourceTimeZone");
        }
        var targetKind = this.GetCorrespondingKind(destinationTimeZone);
        // handle the special case of Loss-less Local->Local and UTC->UTC)
        if (dateTime.Kind != DateTime_1.DateTimeKind.Unspecified && sourceKind != DateTime_1.DateTimeKind.Unspecified && sourceKind == targetKind) {
            return dateTime;
        }
        var targetIanaId = destinationTimeZone._ianaId;
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(targetIanaId)) {
            if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(destinationTimeZone._id)) {
                throw new ArgumentException_1.ArgumentException("Destination Timezone does not have valid identifier");
            }
            var targetTzData = tzmapping_1.TimeZoneMappingData[destinationTimeZone._id];
            if (!ExtensionMethods_1.ArrayHelper.isArray(targetTzData) || !ExtensionMethods_1.ArrayHelper.isArray(targetTzData[0])) {
                throw new ArgumentException_1.ArgumentException("Destination Timezone does not have valid identifier");
            }
            targetIanaId = targetTzData[0][0];
        }
        return new DateTime_1.DateTime(dateTime.MomentDate.clone().tz(targetIanaId));
    };
    TimeZoneInfo.CreateLocal = function () {
        var tzGuess = moment.tz.guess();
        var offset = moment().utcOffset();
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(tzGuess) || ExtensionMethods_1.StringHelper.IsNullOrEmpty(tzmapping_1.TimeZoneMappingData[tzGuess])) {
            console.log("Unable to guess timezone, switching to Utc");
            tzGuess = "Etc/UTC";
        }
        var tzArray = tzmapping_1.TimeZoneMappingData[tzmapping_1.TimeZoneMappingData[tzGuess]];
        if (ExtensionMethods_1.ArrayHelper.isArray(tzArray)) {
            this._localTimeZone = new TimeZoneInfo(tzmapping_1.TimeZoneMappingData[tzGuess], TimeSpan_1.TimeSpan.FromMinutes(offset), tzArray[1], tzArray[2], tzArray[3], [], false);
        }
        else {
            this._localTimeZone = this.CreateCustomTimeZone(tzmapping_1.TimeZoneMappingData[tzGuess], TimeSpan_1.TimeSpan.FromMinutes(offset), tzmapping_1.TimeZoneMappingData[tzGuess], tzmapping_1.TimeZoneMappingData[tzGuess]);
        }
        this._localTimeZone._ianaId = tzGuess;
        return this._localTimeZone;
    };
    TimeZoneInfo.CreateCustomTimeZone = function (id, baseUtcOffset, displayName, standardDisplayName, daylightDisplayName, adjustmentRules, disableDaylightSavingTime) {
        if (daylightDisplayName === void 0) { daylightDisplayName = null; }
        if (adjustmentRules === void 0) { adjustmentRules = null; }
        if (disableDaylightSavingTime === void 0) { disableDaylightSavingTime = false; }
        if (!disableDaylightSavingTime && adjustmentRules && adjustmentRules.length > 0) {
            adjustmentRules = adjustmentRules.slice(0);
        }
        var tz = new TimeZoneInfo(id, baseUtcOffset, displayName, standardDisplayName, daylightDisplayName || standardDisplayName, adjustmentRules, disableDaylightSavingTime);
        if (id === this.UtcId) {
            tz._ianaId = id;
        }
        return tz;
    };
    TimeZoneInfo.AddTimeZoneMapping = function (source, mappedTz) {
        tzmappingex_1.CustomTimeZoneMappingData[source] = mappedTz;
    };
    TimeZoneInfo.FindSystemTimeZoneById = function (zoneName) {
        var ianaId = ExtensionMethods_1.StringHelper.Empty;
        var winId = ExtensionMethods_1.StringHelper.Empty;
        var mappedTz = tzmapping_1.TimeZoneMappingData[zoneName];
        if (typeof mappedTz === 'undefined') {
            var zoneNameMapped = tzmappingex_1.CustomTimeZoneMappingData[zoneName];
            if (zoneNameMapped) {
                mappedTz = tzmapping_1.TimeZoneMappingData[zoneNameMapped];
            }
            if (typeof mappedTz === 'undefined') {
                throw new Error("TimeZoneInfo->FromZoneName : Can not find zone name in mapped timezone data, try adding custom Map by calling TimeZoneInfo.AddTimeZoneMapping(sourceName, destinationName)");
            }
        }
        var tzArray = mappedTz;
        if (ExtensionMethods_1.ArrayHelper.isArray(mappedTz)) {
            ianaId = mappedTz[0][0];
            winId = zoneName;
        }
        else {
            ianaId = zoneName;
            winId = mappedTz;
            tzArray = tzmapping_1.TimeZoneMappingData[winId];
            if (!ExtensionMethods_1.ArrayHelper.isArray(tzArray)) {
                throw new Error("TimeZoneInfo->FromZoneName : Invalid mapping data");
            }
        }
        var tzinfo = new TimeZoneInfo(winId, TimeSpan_1.TimeSpan.FromMinutes(tzArray[5]), tzArray[1], tzArray[2], tzArray[3], [], !tzArray[4]);
        tzinfo._ianaId = ianaId;
        return tzinfo;
    };
    Object.defineProperty(TimeZoneInfo, "ListWindowsTimeZones", {
        get: function () {
            return function () { return Object.keys(tzmapping_1.TimeZoneMappingData).filter(function (x) { return x.indexOf("/") < 0; }); };
        },
        enumerable: true,
        configurable: true
    });
    TimeZoneInfo.GetCorrespondingKind = function (timeZone) {
        if (timeZone === TimeZoneInfo.Utc)
            return DateTime_1.DateTimeKind.Utc;
        if (timeZone === TimeZoneInfo.Local)
            return DateTime_1.DateTimeKind.Local;
        return DateTime_1.DateTimeKind.Unspecified;
    };
    TimeZoneInfo.GuessLocalTimeZone = function () {
        return moment.tz.guess();
    };
    TimeZoneInfo.prototype.HasSameRules = function (other) {
        if (other == null) {
            throw new ArgumentException_1.ArgumentNullException("other");
        }
        // check the utcOffset and supportsDaylightSavingTime members
        return this._baseUtcOffset === other._baseUtcOffset && this._supportsDaylightSavingTime === other._supportsDaylightSavingTime;
    };
    // static get Utc(): TimeZoneInfo { return this.utc; }
    // private static utc: TimeZoneInfo = new TimeZoneInfo(0);
    // static get Local(): TimeZoneInfo { return this.local; }
    // private static local: TimeZoneInfo = new TimeZoneInfo(moment().local().utcOffset());
    // private offset: number;
    // constructor(offset: number) {
    //     this.offset = offset;
    // }
    // static IsLocalTimeZone(timeZone: TimeZoneInfo) {
    //     return timeZone.offset === this.local.offset;
    // }
    // get DisplayName(): string { return this.offset.toString(); }
    // static ConvertTime(dateTime: DateTime, sourceTZ: TimeZoneInfo, destinationTZ: TimeZoneInfo): DateTime {
    //     var returnDate = new DateTime(dateTime);
    //     //var offset = returnDate.currentUtcOffset + destinationTZ.offset - sourceTZ.offset 
    //     returnDate.utcOffset(destinationTZ.offset);
    //     return returnDate;
    // }
    TimeZoneInfo._localTimeZone = null;
    // constants for TimeZoneInfo.Local and TimeZoneInfo.Utc
    TimeZoneInfo.UtcId = "UTC";
    TimeZoneInfo.LocalId = "Local";
    TimeZoneInfo.s_utcTimeZone = TimeZoneInfo.CreateCustomTimeZone(TimeZoneInfo.UtcId, TimeSpan_1.TimeSpan.Zero, TimeZoneInfo.UtcId, TimeZoneInfo.UtcId);
    // used by GetUtcOffsetFromUtc (DateTime.Now, DateTime.ToLocalTime) for max/min whole-day range checks
    TimeZoneInfo.s_maxDateOnly = new DateTime_1.DateTime(9999, 12, 31);
    TimeZoneInfo.s_minDateOnly = new DateTime_1.DateTime(1, 1, 2);
    return TimeZoneInfo;
}());
exports.TimeZoneInfo = TimeZoneInfo;
(function (TimeZoneInfo) {
    var TimeZoneInfoOptions;
    (function (TimeZoneInfoOptions) {
        TimeZoneInfoOptions[TimeZoneInfoOptions["None"] = 1] = "None";
        TimeZoneInfoOptions[TimeZoneInfoOptions["NoThrowOnInvalidTime"] = 2] = "NoThrowOnInvalidTime";
    })(TimeZoneInfoOptions = TimeZoneInfo.TimeZoneInfoOptions || (TimeZoneInfo.TimeZoneInfoOptions = {}));
    var TimeZoneInfoResult;
    (function (TimeZoneInfoResult) {
        TimeZoneInfoResult[TimeZoneInfoResult["Success"] = 0] = "Success";
        TimeZoneInfoResult[TimeZoneInfoResult["TimeZoneNotFoundException"] = 1] = "TimeZoneNotFoundException";
        TimeZoneInfoResult[TimeZoneInfoResult["InvalidTimeZoneException"] = 2] = "InvalidTimeZoneException";
        TimeZoneInfoResult[TimeZoneInfoResult["SecurityException"] = 3] = "SecurityException";
    })(TimeZoneInfoResult || (TimeZoneInfoResult = {}));
    ;
    var AdjustmentRule = /** @class */ (function () {
        function AdjustmentRule(dateStart, dateEnd, daylightDelta, daylightTransitionStart, daylightTransitionEnd, baseUtcOffsetDelta, noDaylightTransitions) {
            AdjustmentRule.ValidateAdjustmentRule(dateStart, dateEnd, daylightDelta, daylightTransitionStart, daylightTransitionEnd, noDaylightTransitions);
            this._dateStart = dateStart;
            this._dateEnd = dateEnd;
            this._daylightDelta = daylightDelta;
            this._daylightTransitionStart = daylightTransitionStart;
            this._daylightTransitionEnd = daylightTransitionEnd;
            this._baseUtcOffsetDelta = baseUtcOffsetDelta;
            this._noDaylightTransitions = noDaylightTransitions;
        }
        Object.defineProperty(AdjustmentRule.prototype, "DateStart", {
            get: function () {
                return this._dateStart;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AdjustmentRule.prototype, "DateEnd", {
            get: function () {
                return this._dateEnd;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AdjustmentRule.prototype, "DaylightDelta", {
            get: function () {
                return this._daylightDelta;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AdjustmentRule.prototype, "DaylightTransitionStart", {
            get: function () {
                return this._daylightTransitionStart;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AdjustmentRule.prototype, "DaylightTransitionEnd", {
            get: function () {
                return this._daylightTransitionEnd;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AdjustmentRule.prototype, "BaseUtcOffsetDelta", {
            /** @internal */
            get: function () {
                return this._baseUtcOffsetDelta;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AdjustmentRule.prototype, "NoDaylightTransitions", {
            /** @internal */
            get: function () {
                return this._noDaylightTransitions;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AdjustmentRule.prototype, "HasDaylightSaving", {
            /** @internal */
            get: function () {
                return ((this.DaylightDelta.TotalMilliseconds != TimeSpan_1.TimeSpan.Zero.TotalMilliseconds)
                    || ((this.DaylightTransitionStart.TimeOfDay.TotalMilliSeconds != DateTime_1.DateTime.MinValue.TotalMilliSeconds)
                        || (this.DaylightTransitionEnd.TimeOfDay.TotalMilliSeconds != DateTime_1.DateTime.MinValue.AddMilliseconds(1).TotalMilliSeconds)));
            },
            enumerable: true,
            configurable: true
        });
        // IEquatable<AdjustmentRule>
        AdjustmentRule.prototype.Equals = function (other) {
            var equals = ((other != null)
                && ((this._dateStart == other._dateStart)
                    && ((this._dateEnd == other._dateEnd)
                        && ((this._daylightDelta == other._daylightDelta)
                            && (this._baseUtcOffsetDelta == other._baseUtcOffsetDelta)))));
            equals = (equals
                && (this._daylightTransitionEnd.Equals(other._daylightTransitionEnd) && this._daylightTransitionStart.Equals(other._daylightTransitionStart)));
            return equals;
        };
        AdjustmentRule.CreateAdjustmentRule = function (dateStart, dateEnd, daylightDelta, daylightTransitionStart, daylightTransitionEnd, baseUtcOffsetDelta, noDaylightTransitions) {
            if (baseUtcOffsetDelta === void 0) { baseUtcOffsetDelta = TimeSpan_1.TimeSpan.Zero; }
            if (noDaylightTransitions === void 0) { noDaylightTransitions = false; }
            return new AdjustmentRule(dateStart, dateEnd, daylightDelta, daylightTransitionStart, daylightTransitionEnd, baseUtcOffsetDelta, noDaylightTransitions);
        };
        // ----- SECTION: internal utility methods ----------------*
        //
        // When Windows sets the daylight transition start Jan 1st at 12:00 AM, it means the year starts with the daylight saving on. 
        // We have to special case this value and not adjust it when checking if any date is in the daylight saving period. 
        //
        /** @internal */
        AdjustmentRule.prototype.IsStartDateMarkerForBeginningOfYear = function () {
            return !this.NoDaylightTransitions &&
                this.DaylightTransitionStart.Month == 1 && this.DaylightTransitionStart.Day == 1 && this.DaylightTransitionStart.TimeOfDay.Hour == 0 &&
                this.DaylightTransitionStart.TimeOfDay.Minute == 0 && this.DaylightTransitionStart.TimeOfDay.Second == 0 &&
                this._dateStart.Year == this._dateEnd.Year;
        };
        //
        // When Windows sets the daylight transition end Jan 1st at 12:00 AM, it means the year ends with the daylight saving on. 
        // We have to special case this value and not adjust it when checking if any date is in the daylight saving period. 
        //
        /** @internal */
        AdjustmentRule.prototype.IsEndDateMarkerForEndOfYear = function () {
            return !this.NoDaylightTransitions &&
                this.DaylightTransitionEnd.Month == 1 && this.DaylightTransitionEnd.Day == 1 && this.DaylightTransitionEnd.TimeOfDay.Hour == 0 &&
                this.DaylightTransitionEnd.TimeOfDay.Minute == 0 && this.DaylightTransitionEnd.TimeOfDay.Second == 0 &&
                this._dateStart.Year == this._dateEnd.Year;
        };
        //
        // ValidateAdjustmentRule -
        //
        // Helper function that performs all of the validation checks for the 
        // factory methods and deserialization callback
        //
        AdjustmentRule.ValidateAdjustmentRule = function (dateStart, dateEnd, daylightDelta, daylightTransitionStart, daylightTransitionEnd, noDaylightTransitions) {
            if (dateStart.Kind != DateTime_1.DateTimeKind.Unspecified && dateStart.Kind != DateTime_1.DateTimeKind.Utc) {
                throw new ArgumentException_1.ArgumentException("Argument_DateTimeKindMustBeUnspecifiedOrUtc", "dateStart");
            }
            if (dateEnd.Kind != DateTime_1.DateTimeKind.Unspecified && dateEnd.Kind != DateTime_1.DateTimeKind.Utc) {
                throw new ArgumentException_1.ArgumentException("Argument_DateTimeKindMustBeUnspecifiedOrUtc", "dateEnd");
            }
            if (daylightTransitionStart.Equals(daylightTransitionEnd) && !noDaylightTransitions) {
                throw new ArgumentException_1.ArgumentException("Argument_TransitionTimesAreIdentical", "daylightTransitionEnd");
            }
            if (dateStart > dateEnd) {
                throw new ArgumentException_1.ArgumentException("Argument_OutOfOrderDateTimes", "dateStart");
            }
            // This cannot use UtcOffsetOutOfRange to account for the scenario where Samoa moved across the International Date Line,
            // which caused their current BaseUtcOffset to be +13. But on the other side of the line it was UTC-11 (+1 for daylight).
            // So when trying to describe DaylightDeltas for those times, the DaylightDelta needs
            // to be -23 (what it takes to go from UTC+13 to UTC-10)
            if (daylightDelta.TotalHours < -23.0 || daylightDelta.TotalHours > 14.0) {
                throw new ArgumentException_1.ArgumentOutOfRangeException("daylightDelta", daylightDelta, "ArgumentOutOfRange_UtcOffset");
            }
            if (daylightDelta.TotalMilliseconds % TimeSpan_1.TimeSpan.MillisPerMinute != 0) {
                throw new ArgumentException_1.ArgumentException("Argument_TimeSpanHasSeconds", "daylightDelta");
            }
            if (dateStart.TotalMilliSeconds != DateTime_1.DateTime.MinValue.TotalMilliSeconds && dateStart.Kind == DateTime_1.DateTimeKind.Unspecified && dateStart.TimeOfDay.TotalMilliseconds != TimeSpan_1.TimeSpan.Zero.TotalMilliseconds) {
                throw new ArgumentException_1.ArgumentException("Argument_DateTimeHasTimeOfDay", "dateStart");
            }
            if (dateEnd.TotalMilliSeconds != DateTime_1.DateTime.MaxValue.TotalMilliSeconds && dateEnd.Kind == DateTime_1.DateTimeKind.Unspecified && dateEnd.TimeOfDay.TotalMilliseconds != TimeSpan_1.TimeSpan.Zero.TotalMilliseconds) {
                throw new ArgumentException_1.ArgumentException("Argument_DateTimeHasTimeOfDay", "dateEnd");
            }
        };
        return AdjustmentRule;
    }());
    TimeZoneInfo.AdjustmentRule = AdjustmentRule;
    var TransitionTime = /** @class */ (function () {
        function TransitionTime(timeOfDay, month, week, day, dayOfWeek, isFixedDateRule) {
            TransitionTime.ValidateTransitionTime(timeOfDay, month, week, day, dayOfWeek);
            this._timeOfDay = timeOfDay;
            this._month = month;
            this._week = week;
            this._day = day;
            this._dayOfWeek = dayOfWeek;
            this._isFixedDateRule = isFixedDateRule;
        }
        Object.defineProperty(TransitionTime.prototype, "TimeOfDay", {
            get: function () {
                return this._timeOfDay;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransitionTime.prototype, "Month", {
            get: function () {
                return this._month;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransitionTime.prototype, "Week", {
            get: function () {
                return this._week;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransitionTime.prototype, "Day", {
            get: function () {
                return this._day;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransitionTime.prototype, "DayOfWeek", {
            get: function () {
                return this._dayOfWeek;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TransitionTime.prototype, "IsFixedDateRule", {
            get: function () {
                return this._isFixedDateRule;
            },
            enumerable: true,
            configurable: true
        });
        // [Pure]
        // public override bool Equals(object obj) =>
        // obj is TransitionTime && Equals((TransitionTime)obj);
        // public static bool operator == (TransitionTime t1, TransitionTime t2) => t1.Equals(t2);
        // public static bool operator != (TransitionTime t1, TransitionTime t2) => !t1.Equals(t2);
        TransitionTime.prototype.Equals = function (other) {
            return;
            this._isFixedDateRule == other._isFixedDateRule &&
                this._timeOfDay == other._timeOfDay &&
                this._month == other._month &&
                (other._isFixedDateRule ?
                    this._day == other._day :
                    this._week == other._week &&
                        this._dayOfWeek == other._dayOfWeek);
        };
        TransitionTime.prototype.GetHashCode = function () {
            return (this._month ^ this._week << 8);
        };
        ;
        TransitionTime.CreateFixedDateRule = function (timeOfDay, month, day) {
            return new TransitionTime(timeOfDay, month, 1, day, DayOfWeek_1.DayOfWeek.Sunday, true);
        };
        TransitionTime.CreateFloatingDateRule = function (timeOfDay, month, week, dayOfWeek) {
            return new TransitionTime(timeOfDay, month, week, 1, dayOfWeek, false);
        };
        /// <summary>
        /// Helper function that validates a TransitionTime instance.
        /// </summary>
        TransitionTime.ValidateTransitionTime = function (timeOfDay, month, week, day, dayOfWeek) {
            if (timeOfDay.Kind != DateTime_1.DateTimeKind.Unspecified) {
                throw new ArgumentException_1.ArgumentException("Argument_DateTimeKindMustBeUnspecified", "timeOfDay");
            }
            // Month range 1-12
            if (month < 1 || month > 12) {
                throw new ArgumentException_1.ArgumentOutOfRangeException("month", "ArgumentOutOfRange_MonthParam");
            }
            // Day range 1-31
            if (day < 1 || day > 31) {
                throw new ArgumentException_1.ArgumentOutOfRangeException("day", "ArgumentOutOfRange_DayParam");
            }
            // Week range 1-5
            if (week < 1 || week > 5) {
                throw new ArgumentException_1.ArgumentOutOfRangeException("week", "ArgumentOutOfRange_Week");
            }
            // DayOfWeek range 0-6
            if (dayOfWeek < 0 || dayOfWeek > 6) {
                throw new ArgumentException_1.ArgumentOutOfRangeException("dayOfWeek", "ArgumentOutOfRange_DayOfWeek");
            }
            if (timeOfDay.Year != 1 || timeOfDay.Month != 1 || timeOfDay.Day != 1 || (timeOfDay.TotalMilliSeconds % 1 != 0)) {
                throw new ArgumentException_1.ArgumentException("Argument_DateTimeHasTicks", "timeOfDay");
            }
        };
        return TransitionTime;
    }());
    TimeZoneInfo.TransitionTime = TransitionTime;
})(TimeZoneInfo = exports.TimeZoneInfo || (exports.TimeZoneInfo = {}));
exports.TimeZoneInfo = TimeZoneInfo;
