import * as moment from 'moment-timezone';
import { TimeZoneMappingData } from "./tzmapping";
import { CustomTimeZoneMappingData } from "./tzmappingex";

import { ArgumentOutOfRangeException, ArgumentException, ArgumentNullException } from "../js/Exceptions/ArgumentException";
import { ArrayHelper, StringHelper } from "../js/ExtensionMethods";
import { DateTime, DateTimeKind } from "./DateTime";
import { DayOfWeek } from "../js/Enumerations/DayOfWeek";
import { TimeSpan } from "./TimeSpan";

/**
* TimeZoneInfo
*/
export class TimeZoneInfo {

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


    private static _localTimeZone: TimeZoneInfo = null;
    private readonly _id: string;
    private _ianaId: string = null;
    private readonly _displayName: string = null;
    private readonly _standardDisplayName: string = null;
    private readonly _daylightDisplayName: string = null;
    private readonly _baseUtcOffset: TimeSpan;
    private readonly _supportsDaylightSavingTime: boolean = false;
    private readonly _adjustmentRules: TimeZoneInfo.AdjustmentRule[] = [];

    // constants for TimeZoneInfo.Local and TimeZoneInfo.Utc
    private static readonly UtcId: string = "UTC";
    private static readonly LocalId: string = "Local";

    private static readonly s_utcTimeZone: TimeZoneInfo = TimeZoneInfo.CreateCustomTimeZone(TimeZoneInfo.UtcId, TimeSpan.Zero, TimeZoneInfo.UtcId, TimeZoneInfo.UtcId);

    // used by GetUtcOffsetFromUtc (DateTime.Now, DateTime.ToLocalTime) for max/min whole-day range checks
    private static readonly s_maxDateOnly: DateTime = new DateTime(9999, 12, 31);
    private static readonly s_minDateOnly: DateTime = new DateTime(1, 1, 2);

    public get Id(): string {
        return this._id;
    }

    public get IanaId(): string {
        return this._ianaId;
    }

    public get DisplayName(): string {
        return this._displayName || StringHelper.Empty;
    }
    public get StandardName(): string {
        return this._standardDisplayName || StringHelper.Empty;
    }
    public get DaylightName(): string {
        return this._daylightDisplayName || StringHelper.Empty;
    }
    public get BaseUtcOffset(): TimeSpan {
        return this._baseUtcOffset;
    }
    public get SupportsDaylightSavingTime(): boolean {
        return this._supportsDaylightSavingTime;
    }

    public static get Local(): TimeZoneInfo {
        if (this._localTimeZone) {
            return this._localTimeZone;
        }
        return this.CreateLocal();
    }

    public static get Utc(): TimeZoneInfo {
        return this.s_utcTimeZone;
    }

    private constructor(
        id: string,
        baseUtcOffset: TimeSpan,
        displayName: string,
        standardDisplayName: string,
        daylightDisplayName: string,
        adjustmentRules: TimeZoneInfo.AdjustmentRule[],
        disableDaylightSavingTime: boolean) {

        let adjustmentRulesSupportDst: boolean;
        //TimeZoneInfo.ValidateTimeZoneInfo(id, baseUtcOffset, adjustmentRules, adjustmentRulesSupportDst);

        this._id = id;
        this._baseUtcOffset = baseUtcOffset;
        this._displayName = displayName;
        this._standardDisplayName = standardDisplayName;
        this._daylightDisplayName = disableDaylightSavingTime ? null : daylightDisplayName;
        //this._supportsDaylightSavingTime = adjustmentRulesSupportDst && !disableDaylightSavingTime;
        this._adjustmentRules = adjustmentRules;

        let tzArray = TimeZoneMappingData[id];
        if (ArrayHelper.isArray(tzArray)) {
            this._supportsDaylightSavingTime = tzArray[4] && !disableDaylightSavingTime;
        }
    }

    public static ConvertTime(dateTime: DateTime, sourceTimeZone: TimeZoneInfo, destinationTimeZone: TimeZoneInfo): DateTime {
        if (sourceTimeZone == null) {
            throw new ArgumentNullException("sourceTimeZone");
        }

        if (destinationTimeZone == null) {
            throw new ArgumentNullException("destinationTimeZone");
        }
        let sourceKind: DateTimeKind = this.GetCorrespondingKind(sourceTimeZone);
        if (dateTime.Kind != DateTimeKind.Unspecified && dateTime.Kind != sourceKind) {
            throw new ArgumentException("DateTime Kind mismatch with source time", "sourceTimeZone");
        }

        let targetKind: DateTimeKind = this.GetCorrespondingKind(destinationTimeZone);

        // handle the special case of Loss-less Local->Local and UTC->UTC)
        if (dateTime.Kind != DateTimeKind.Unspecified && sourceKind != DateTimeKind.Unspecified && sourceKind == targetKind) {
            return dateTime;
        }

        let targetIanaId = destinationTimeZone._ianaId;
        if (StringHelper.IsNullOrEmpty(targetIanaId)) {
            if (StringHelper.IsNullOrEmpty(destinationTimeZone._id)) {
                throw new ArgumentException("Destination Timezone does not have valid identifier")
            }
            let targetTzData = TimeZoneMappingData[destinationTimeZone._id] as string[];
            if (!ArrayHelper.isArray(targetTzData) || !ArrayHelper.isArray(targetTzData[0])) {
                throw new ArgumentException("Destination Timezone does not have valid identifier")
            }
            targetIanaId = targetTzData[0][0];
        }
        return new DateTime(dateTime.MomentDate.clone().tz(targetIanaId));
    }


    private static CreateLocal(): TimeZoneInfo {
        let tzGuess: string = moment.tz.guess();
        let offset: number = moment().utcOffset();
        if (StringHelper.IsNullOrEmpty(tzGuess) || StringHelper.IsNullOrEmpty(TimeZoneMappingData[tzGuess])) {
            console.assert(false, "Unabele to guess timezone, switching to Utc");
            return this.Utc;
        }
        let tzArray: any[] = TimeZoneMappingData[TimeZoneMappingData[tzGuess]];


        if (ArrayHelper.isArray<any>(tzArray)) {
            this._localTimeZone = new TimeZoneInfo(TimeZoneMappingData[tzGuess], TimeSpan.FromMinutes(offset), tzArray[1], <string>tzArray[2], <string>tzArray[3], [], false);
        }
        else {
            this._localTimeZone = this.CreateCustomTimeZone(TimeZoneMappingData[tzGuess], TimeSpan.FromMinutes(offset), TimeZoneMappingData[tzGuess], TimeZoneMappingData[tzGuess]);
        }
        this._localTimeZone._ianaId = tzGuess;
        return this._localTimeZone;

    }

    public static CreateCustomTimeZone(id: string, baseUtcOffset: TimeSpan, displayName: string, standardDisplayName: string): TimeZoneInfo;
    public static CreateCustomTimeZone(id: string, baseUtcOffset: TimeSpan, displayName: string, standardDisplayName: string, daylightDisplayName: string, adjustmentRules: TimeZoneInfo.AdjustmentRule[]): TimeZoneInfo;
    public static CreateCustomTimeZone(id: string, baseUtcOffset: TimeSpan, displayName: string, standardDisplayName: string, daylightDisplayName: string, adjustmentRules: TimeZoneInfo.AdjustmentRule[], disableDaylightSavingTime: boolean): TimeZoneInfo;
    public static CreateCustomTimeZone(
        id: string,
        baseUtcOffset: TimeSpan,
        displayName: string,
        standardDisplayName: string,
        daylightDisplayName: string = null,
        adjustmentRules: TimeZoneInfo.AdjustmentRule[] = null,
        disableDaylightSavingTime: boolean = false): TimeZoneInfo {
        if (!disableDaylightSavingTime && adjustmentRules && adjustmentRules.length > 0) {
            adjustmentRules = adjustmentRules.slice(0);
        }

        let tz = new TimeZoneInfo(
            id,
            baseUtcOffset,
            displayName,
            standardDisplayName,
            daylightDisplayName || standardDisplayName,
            adjustmentRules,
            disableDaylightSavingTime);
        if (id === this.UtcId) {
            tz._ianaId = id;
        }
        return tz;
    }

    public static AddTimeZoneMapping(source: string, mappedTz: string) {
        CustomTimeZoneMappingData[source] = mappedTz;
    }

    public static FindSystemTimeZoneById(zoneName: string): TimeZoneInfo {
        let ianaId = StringHelper.Empty;
        let winId = StringHelper.Empty;

        let mappedTz: string | any[] = TimeZoneMappingData[zoneName];
        if (typeof mappedTz === 'undefined') {
            let zoneNameMapped = CustomTimeZoneMappingData[zoneName];
            if (zoneNameMapped) {
                mappedTz = TimeZoneMappingData[zoneNameMapped];
            }
            if (typeof mappedTz === 'undefined') {
                throw new Error("TimeZoneInfo->FromZoneName : Can not find zone name in mapped timezone data, try adding custom Map by calling TimeZoneInfo.AddTimeZoneMapping(sourceName, destinationName)");
            }
        }
        let tzArray = mappedTz;

        if (ArrayHelper.isArray<any>(mappedTz)) {
            ianaId = mappedTz[0][0];
            winId = zoneName;
        } else {
            ianaId = zoneName;
            winId = mappedTz;
            tzArray = TimeZoneMappingData[winId];
            if (!ArrayHelper.isArray(tzArray)) {
                throw new Error("TimeZoneInfo->FromZoneName : Invalid mapping data")
            }
        }

        let tzinfo = new TimeZoneInfo(winId, TimeSpan.FromMinutes(tzArray[5]), tzArray[1], tzArray[2], tzArray[3], [], !tzArray[4])
        tzinfo._ianaId = ianaId;
        return tzinfo;
    }

    public static get ListWindowsTimeZones(): () => string[] {
        return () => Object.keys(TimeZoneMappingData).filter(x => x.indexOf("/") < 0);
    }
    private static GetCorrespondingKind(timeZone: TimeZoneInfo): DateTimeKind {
        if (timeZone === TimeZoneInfo.Utc) return DateTimeKind.Utc;
        if (timeZone === TimeZoneInfo.Local) return DateTimeKind.Local;
        return DateTimeKind.Unspecified;

    }

    public static GuessLocalTimeZone(): string {
        return moment.tz.guess();
    }

    public HasSameRules(other: TimeZoneInfo): boolean {
        if (other == null) {
            throw new ArgumentNullException("other");
        }

        // check the utcOffset and supportsDaylightSavingTime members
        return this._baseUtcOffset === other._baseUtcOffset && this._supportsDaylightSavingTime === other._supportsDaylightSavingTime;
    }

}

export module TimeZoneInfo {

    export enum TimeZoneInfoOptions {
        None = 1,
        NoThrowOnInvalidTime = 2
    }

    enum TimeZoneInfoResult {
        Success = 0,
        TimeZoneNotFoundException = 1,
        InvalidTimeZoneException = 2,
        SecurityException = 3
    };

    export class AdjustmentRule {
        // ---- SECTION:  members supporting exposed properties -------------*
        private readonly _dateStart: DateTime;
        private readonly _dateEnd: DateTime;
        private readonly _daylightDelta: TimeSpan;
        private readonly _daylightTransitionStart: TransitionTime;
        private readonly _daylightTransitionEnd: TransitionTime;
        private readonly _baseUtcOffsetDelta: TimeSpan;   // delta from the default Utc offset (utcOffset = defaultUtcOffset + m_baseUtcOffsetDelta)
        private readonly _noDaylightTransitions: boolean;

        public get DateStart(): DateTime {
            return this._dateStart;
        }

        public get DateEnd(): DateTime {
            return this._dateEnd;
        }

        public get DaylightDelta(): TimeSpan {
            return this._daylightDelta;
        }

        public get DaylightTransitionStart(): TransitionTime {
            return this._daylightTransitionStart;
        }

        public get DaylightTransitionEnd(): TransitionTime {
            return this._daylightTransitionEnd;
        }

        /** @internal */
        get BaseUtcOffsetDelta(): TimeSpan {
            return this._baseUtcOffsetDelta;
        }

        /** @internal */
        get NoDaylightTransitions(): boolean {
            return this._noDaylightTransitions;
        }

        /** @internal */
        get HasDaylightSaving(): boolean {
            return ((this.DaylightDelta.TotalMilliseconds != TimeSpan.Zero.TotalMilliseconds)
                || ((this.DaylightTransitionStart.TimeOfDay.TotalMilliSeconds != DateTime.MinValue.TotalMilliSeconds)
                    || (this.DaylightTransitionEnd.TimeOfDay.TotalMilliSeconds != DateTime.MinValue.AddMilliseconds(1).TotalMilliSeconds)));
        }

        private constructor(
            dateStart: DateTime,
            dateEnd: DateTime,
            daylightDelta: TimeSpan,
            daylightTransitionStart: TransitionTime,
            daylightTransitionEnd: TransitionTime,
            baseUtcOffsetDelta: TimeSpan,
            noDaylightTransitions: boolean) {
            AdjustmentRule.ValidateAdjustmentRule(dateStart, dateEnd, daylightDelta,
                daylightTransitionStart, daylightTransitionEnd, noDaylightTransitions);

            this._dateStart = dateStart;
            this._dateEnd = dateEnd;
            this._daylightDelta = daylightDelta;
            this._daylightTransitionStart = daylightTransitionStart;
            this._daylightTransitionEnd = daylightTransitionEnd;
            this._baseUtcOffsetDelta = baseUtcOffsetDelta;
            this._noDaylightTransitions = noDaylightTransitions;
        }


        // IEquatable<AdjustmentRule>
        public Equals(other: AdjustmentRule): boolean {
            let equals: boolean = ((other != null)
                && ((this._dateStart == other._dateStart)
                    && ((this._dateEnd == other._dateEnd)
                        && ((this._daylightDelta == other._daylightDelta)
                            && (this._baseUtcOffsetDelta == other._baseUtcOffsetDelta)))));
            equals = (equals
                && (this._daylightTransitionEnd.Equals(other._daylightTransitionEnd) && this._daylightTransitionStart.Equals(other._daylightTransitionStart)));
            return equals;
        }



        // public /* override */ GetHashCode(): number {
        //     return this._dateStart.GetHashCode();
        // }


        static CreateAdjustmentRule(
            dateStart: DateTime,
            dateEnd: DateTime,
            daylightDelta: TimeSpan,
            daylightTransitionStart: TransitionTime,
            daylightTransitionEnd: TransitionTime): AdjustmentRule;
        /** @internal */
        static CreateAdjustmentRule(
            dateStart: DateTime,
            dateEnd: DateTime,
            daylightDelta: TimeSpan,
            daylightTransitionStart: TransitionTime,
            daylightTransitionEnd: TransitionTime,
            baseUtcOffsetDelta: TimeSpan,
            noDaylightTransitions: boolean): AdjustmentRule;
        static CreateAdjustmentRule(
            dateStart: DateTime,
            dateEnd: DateTime,
            daylightDelta: TimeSpan,
            daylightTransitionStart: TransitionTime,
            daylightTransitionEnd: TransitionTime,
            baseUtcOffsetDelta: TimeSpan = TimeSpan.Zero,
            noDaylightTransitions: boolean = false): AdjustmentRule {
            return new AdjustmentRule(
                dateStart,
                dateEnd,
                daylightDelta,
                daylightTransitionStart,
                daylightTransitionEnd,
                baseUtcOffsetDelta,
                noDaylightTransitions);
        }


        // ----- SECTION: internal utility methods ----------------*

        //
        // When Windows sets the daylight transition start Jan 1st at 12:00 AM, it means the year starts with the daylight saving on. 
        // We have to special case this value and not adjust it when checking if any date is in the daylight saving period. 
        //
        /** @internal */
        IsStartDateMarkerForBeginningOfYear(): boolean {
            return !this.NoDaylightTransitions &&
                this.DaylightTransitionStart.Month == 1 && this.DaylightTransitionStart.Day == 1 && this.DaylightTransitionStart.TimeOfDay.Hour == 0 &&
                this.DaylightTransitionStart.TimeOfDay.Minute == 0 && this.DaylightTransitionStart.TimeOfDay.Second == 0 &&
                this._dateStart.Year == this._dateEnd.Year;
        }

        //
        // When Windows sets the daylight transition end Jan 1st at 12:00 AM, it means the year ends with the daylight saving on. 
        // We have to special case this value and not adjust it when checking if any date is in the daylight saving period. 
        //
        /** @internal */
        IsEndDateMarkerForEndOfYear(): boolean {
            return !this.NoDaylightTransitions &&
                this.DaylightTransitionEnd.Month == 1 && this.DaylightTransitionEnd.Day == 1 && this.DaylightTransitionEnd.TimeOfDay.Hour == 0 &&
                this.DaylightTransitionEnd.TimeOfDay.Minute == 0 && this.DaylightTransitionEnd.TimeOfDay.Second == 0 &&
                this._dateStart.Year == this._dateEnd.Year;
        }

        //
        // ValidateAdjustmentRule -
        //
        // Helper function that performs all of the validation checks for the 
        // factory methods and deserialization callback
        //
        private static ValidateAdjustmentRule(
            dateStart: DateTime,
            dateEnd: DateTime,
            daylightDelta: TimeSpan,
            daylightTransitionStart: TransitionTime,
            daylightTransitionEnd: TransitionTime,
            noDaylightTransitions: boolean): void {

            if (dateStart.Kind != DateTimeKind.Unspecified && dateStart.Kind != DateTimeKind.Utc) {
                throw new ArgumentException("Argument_DateTimeKindMustBeUnspecifiedOrUtc", "dateStart");
            }

            if (dateEnd.Kind != DateTimeKind.Unspecified && dateEnd.Kind != DateTimeKind.Utc) {
                throw new ArgumentException("Argument_DateTimeKindMustBeUnspecifiedOrUtc", "dateEnd");
            }

            if (daylightTransitionStart.Equals(daylightTransitionEnd) && !noDaylightTransitions) {
                throw new ArgumentException("Argument_TransitionTimesAreIdentical", "daylightTransitionEnd");
            }

            if (dateStart > dateEnd) {
                throw new ArgumentException("Argument_OutOfOrderDateTimes", "dateStart");
            }

            // This cannot use UtcOffsetOutOfRange to account for the scenario where Samoa moved across the International Date Line,
            // which caused their current BaseUtcOffset to be +13. But on the other side of the line it was UTC-11 (+1 for daylight).
            // So when trying to describe DaylightDeltas for those times, the DaylightDelta needs
            // to be -23 (what it takes to go from UTC+13 to UTC-10)
            if (daylightDelta.TotalHours < -23.0 || daylightDelta.TotalHours > 14.0) {
                throw new ArgumentOutOfRangeException("daylightDelta", daylightDelta, "ArgumentOutOfRange_UtcOffset");
            }

            if (daylightDelta.TotalMilliseconds % TimeSpan.MillisPerMinute != 0) {
                throw new ArgumentException("Argument_TimeSpanHasSeconds", "daylightDelta");
            }

            if (dateStart.TotalMilliSeconds != DateTime.MinValue.TotalMilliSeconds && dateStart.Kind == DateTimeKind.Unspecified && dateStart.TimeOfDay.TotalMilliseconds != TimeSpan.Zero.TotalMilliseconds) {
                throw new ArgumentException("Argument_DateTimeHasTimeOfDay", "dateStart");
            }

            if (dateEnd.TotalMilliSeconds != DateTime.MaxValue.TotalMilliSeconds && dateEnd.Kind == DateTimeKind.Unspecified && dateEnd.TimeOfDay.TotalMilliseconds != TimeSpan.Zero.TotalMilliseconds) {
                throw new ArgumentException("Argument_DateTimeHasTimeOfDay", "dateEnd");
            }
        }
    }


    export class TransitionTime {

        private readonly _timeOfDay: DateTime;
        private readonly _month: number; //byte
        private readonly _week: number; //byte
        private readonly _day: number; //byte
        private readonly _dayOfWeek: DayOfWeek;
        private readonly _isFixedDateRule: boolean;

        public get TimeOfDay(): DateTime {
            return this._timeOfDay;
        }

        public get Month(): number {
            return this._month;
        }

        public get Week(): number {
            return this._week;
        }

        public get Day(): number {
            return this._day;
        }

        public get DayOfWeek(): DayOfWeek {
            return this._dayOfWeek;
        }

        public get IsFixedDateRule(): boolean {
            return this._isFixedDateRule;
        }

        // [Pure]

        // public override bool Equals(object obj) =>
        // obj is TransitionTime && Equals((TransitionTime)obj);

        // public static bool operator == (TransitionTime t1, TransitionTime t2) => t1.Equals(t2);

        // public static bool operator != (TransitionTime t1, TransitionTime t2) => !t1.Equals(t2);

        public Equals(other: TransitionTime): boolean {
            return
            this._isFixedDateRule == other._isFixedDateRule &&
                this._timeOfDay == other._timeOfDay &&
                this._month == other._month &&
                (other._isFixedDateRule ?
                    this._day == other._day :
                    this._week == other._week &&
                    this._dayOfWeek == other._dayOfWeek);
        }

        public GetHashCode(): number {
            return (this._month ^ this._week << 8)
        };

        private constructor(timeOfDay: DateTime, month: number, week: number, day: number, dayOfWeek: DayOfWeek, isFixedDateRule: boolean) {
            TransitionTime.ValidateTransitionTime(timeOfDay, month, week, day, dayOfWeek);

            this._timeOfDay = timeOfDay;
            this._month = month;
            this._week = week;
            this._day = day;
            this._dayOfWeek = dayOfWeek;
            this._isFixedDateRule = isFixedDateRule;
        }

        public static CreateFixedDateRule(timeOfDay: DateTime, month: number, day: number): TransitionTime {

            return new TransitionTime(timeOfDay, month, 1, day, DayOfWeek.Sunday, true);
        }

        public static CreateFloatingDateRule(timeOfDay: DateTime, month: number, week: number, dayOfWeek: DayOfWeek): TransitionTime {

            return new TransitionTime(timeOfDay, month, week, 1, dayOfWeek, false);
        }

        /// <summary>
        /// Helper function that validates a TransitionTime instance.
        /// </summary>
        private static ValidateTransitionTime(timeOfDay: DateTime, month: number, week: number, day: number, dayOfWeek: DayOfWeek): void {
            if (timeOfDay.Kind != DateTimeKind.Unspecified) {
                throw new ArgumentException("Argument_DateTimeKindMustBeUnspecified", "timeOfDay");
            }

            // Month range 1-12
            if (month < 1 || month > 12) {
                throw new ArgumentOutOfRangeException("month", "ArgumentOutOfRange_MonthParam");
            }

            // Day range 1-31
            if (day < 1 || day > 31) {
                throw new ArgumentOutOfRangeException("day", "ArgumentOutOfRange_DayParam");
            }

            // Week range 1-5
            if (week < 1 || week > 5) {
                throw new ArgumentOutOfRangeException("week", "ArgumentOutOfRange_Week");
            }

            // DayOfWeek range 0-6
            if (dayOfWeek < 0 || dayOfWeek > 6) {
                throw new ArgumentOutOfRangeException("dayOfWeek", "ArgumentOutOfRange_DayOfWeek");
            }

            if (timeOfDay.Year != 1 || timeOfDay.Month != 1 || timeOfDay.Day != 1 || (timeOfDay.TotalMilliSeconds % 1 != 0)) {
                throw new ArgumentException("Argument_DateTimeHasTicks", "timeOfDay");
            }
        }
    }

}