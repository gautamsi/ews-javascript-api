"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FreeBusyViewType_1 = require("../../Enumerations/FreeBusyViewType");
var SuggestionQuality_1 = require("../../Enumerations/SuggestionQuality");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var Strings_1 = require("../../Strings");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var TimeSpan_1 = require("../../TimeSpan");
var AvailabilityOptions = /** @class */ (function () {
    function AvailabilityOptions() {
        this.mergedFreeBusyInterval = 30;
        this.requestedFreeBusyView = FreeBusyViewType_1.FreeBusyViewType.Detailed;
        this.goodSuggestionThreshold = 25;
        this.maximumSuggestionsPerDay = 10;
        this.maximumNonWorkHoursSuggestionsPerDay = 0;
        this.meetingDuration = 60;
        this.minimumSuggestionQuality = SuggestionQuality_1.SuggestionQuality.Fair;
        this.detailedSuggestionsWindow = null;
        this.currentMeetingTime = null;
        this.globalObjectId = null;
    }
    Object.defineProperty(AvailabilityOptions.prototype, "MergedFreeBusyInterval", {
        get: function () {
            return this.mergedFreeBusyInterval;
        },
        set: function (value) {
            if (value < 5 || value > 1440) {
                throw new Error(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.InvalidPropertyValueNotInRange, "MergedFreeBusyInterval", 5, 1440)); //ArgumentException
            }
            this.mergedFreeBusyInterval = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AvailabilityOptions.prototype, "RequestedFreeBusyView", {
        get: function () {
            return this.requestedFreeBusyView;
        },
        set: function (value) {
            this.requestedFreeBusyView = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AvailabilityOptions.prototype, "GoodSuggestionThreshold", {
        get: function () {
            return this.goodSuggestionThreshold;
        },
        set: function (value) {
            if (value < 1 || value > 49) {
                throw new Error(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.InvalidPropertyValueNotInRange, "GoodSuggestionThreshold", 1, 49)); //ArgumentException
            }
            this.goodSuggestionThreshold = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AvailabilityOptions.prototype, "MaximumSuggestionsPerDay", {
        get: function () {
            return this.maximumSuggestionsPerDay;
        },
        set: function (value) {
            if (value < 0 || value > 48) {
                throw new Error(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.InvalidPropertyValueNotInRange, "MaximumSuggestionsPerDay", 0, 48)); //ArgumentException
            }
            this.maximumSuggestionsPerDay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AvailabilityOptions.prototype, "MaximumNonWorkHoursSuggestionsPerDay", {
        get: function () {
            return this.maximumNonWorkHoursSuggestionsPerDay;
        },
        set: function (value) {
            if (value < 0 || value > 48) {
                throw new Error(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.InvalidPropertyValueNotInRange, "MaximumNonWorkHoursSuggestionsPerDay", 0, 48)); //ArgumentException
            }
            this.maximumNonWorkHoursSuggestionsPerDay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AvailabilityOptions.prototype, "MeetingDuration", {
        get: function () {
            return this.meetingDuration;
        },
        set: function (value) {
            if (value < 30 || value > 1440) {
                throw new Error(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.InvalidPropertyValueNotInRange, "MeetingDuration", 30, 1440)); //ArgumentException
            }
            this.meetingDuration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AvailabilityOptions.prototype, "MinimumSuggestionQuality", {
        get: function () {
            return this.minimumSuggestionQuality;
        },
        set: function (value) {
            this.minimumSuggestionQuality = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AvailabilityOptions.prototype, "DetailedSuggestionsWindow", {
        get: function () {
            return this.detailedSuggestionsWindow;
        },
        set: function (value) {
            this.detailedSuggestionsWindow = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AvailabilityOptions.prototype, "CurrentMeetingTime", {
        get: function () {
            return this.currentMeetingTime;
        },
        set: function (value) {
            this.currentMeetingTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AvailabilityOptions.prototype, "GlobalObjectId", {
        get: function () {
            return this.globalObjectId;
        },
        set: function (value) {
            this.globalObjectId = value;
        },
        enumerable: true,
        configurable: true
    });
    AvailabilityOptions.prototype.Validate = function (timeWindow) {
        if (TimeSpan_1.TimeSpan.FromMinutes(this.MergedFreeBusyInterval) > timeWindow) {
            throw new Error(Strings_1.Strings.MergedFreeBusyIntervalMustBeSmallerThanTimeWindow); //, "MergedFreeBusyInterval");//ArgumentException
        }
        EwsUtilities_1.EwsUtilities.ValidateParamAllowNull(this.DetailedSuggestionsWindow, "DetailedSuggestionsWindow");
    };
    /** @internal */
    AvailabilityOptions.prototype.WriteToXml = function (writer, request) {
        if (request.IsFreeBusyViewRequested) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.FreeBusyViewOptions);
            request.TimeWindow.WriteToXmlUnscopedDatesOnly(writer, XmlElementNames_1.XmlElementNames.TimeWindow);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MergedFreeBusyIntervalInMinutes, this.MergedFreeBusyInterval);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.RequestedView, FreeBusyViewType_1.FreeBusyViewType[this.RequestedFreeBusyView]);
            writer.WriteEndElement(); // FreeBusyViewOptions
        }
        if (request.IsSuggestionsViewRequested) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.SuggestionsViewOptions);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.GoodThreshold, this.GoodSuggestionThreshold);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MaximumResultsByDay, this.MaximumSuggestionsPerDay);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MaximumNonWorkHourResultsByDay, this.MaximumNonWorkHoursSuggestionsPerDay);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MeetingDurationInMinutes, this.MeetingDuration);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MinimumSuggestionQuality, SuggestionQuality_1.SuggestionQuality[this.MinimumSuggestionQuality]);
            var timeWindowToSerialize = this.DetailedSuggestionsWindow === null ?
                request.TimeWindow :
                this.DetailedSuggestionsWindow;
            timeWindowToSerialize.WriteToXmlUnscopedDatesOnly(writer, XmlElementNames_1.XmlElementNames.DetailedSuggestionsWindow);
            if (this.CurrentMeetingTime !== null) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.CurrentMeetingTime, this.CurrentMeetingTime);
            }
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.GlobalObjectId, this.GlobalObjectId);
            writer.WriteEndElement(); // SuggestionsViewOptions
        }
    };
    return AvailabilityOptions;
}());
exports.AvailabilityOptions = AvailabilityOptions;
