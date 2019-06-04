"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var ExtensionMethods_1 = require("../ExtensionMethods");
var Strings_1 = require("../Strings");
/**
 * @internal Represents a time.
 * @sealed
 */
var Time = /** @class */ (function () {
    function Time(minutesOrDateTimeOrHours, minutes, seconds) {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        if (arguments.length === 1) {
            if (typeof minutesOrDateTimeOrHours === 'number') {
                if (minutes < 0 || minutes >= 1440) {
                    throw new ArgumentException_1.ArgumentException(Strings_1.Strings.MinutesMustBeBetween0And1439, "minutes");
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
            this.Hours = minutesOrDateTimeOrHours;
            this.Minutes = minutes;
            this.Seconds = seconds;
        }
    }
    Object.defineProperty(Time.prototype, "Hours", {
        /**
         * @internal Gets or sets the hours.
         */
        get: function () {
            return this.hours;
        },
        set: function (value) {
            if (value >= 0 && value < 24) {
                this.hours = value;
                return;
            }
            throw new ArgumentException_1.ArgumentException(Strings_1.Strings.HourMustBeBetween0And23);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "Minutes", {
        /**
         * @internal Gets or sets the minutes.
         */
        get: function () {
            return this.minutes;
        },
        set: function (value) {
            if (value >= 0 && value < 60) {
                this.minutes = value;
                return;
            }
            throw new ArgumentException_1.ArgumentException(Strings_1.Strings.MinuteMustBeBetween0And59);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time.prototype, "Seconds", {
        /**
         * @internal Gets or sets the seconds.
         */
        get: function () {
            return this.seconds;
        },
        set: function (value) {
            if (value >= 0 && value < 60) {
                this.seconds = value;
                return;
            }
            throw new ArgumentException_1.ArgumentException(Strings_1.Strings.SecondMustBeBetween0And59);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Converts the time into a number of minutes since 12:00AM.
     *
     * @return  {number}      The number of minutes since 12:00AM the time represents.
     */
    Time.prototype.ConvertToMinutes = function () {
        return this.Minutes + (this.Hours * 60);
    };
    /**
     * @internal Convert Time to XML Schema time.
     *
     * @return  {string}      String in XML Schema time format.
     */
    Time.prototype.ToXSTime = function () {
        return ExtensionMethods_1.StringHelper.Format("{0:00}:{1:00}:{2:00}", this.Hours, this.Minutes, this.Seconds);
    };
    return Time;
}());
exports.Time = Time;
