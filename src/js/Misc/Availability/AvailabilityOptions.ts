import {FreeBusyViewType} from "../../Enumerations/FreeBusyViewType";
import {SuggestionQuality} from "../../Enumerations/SuggestionQuality";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {TimeWindow} from "./TimeWindow";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../../Core/EwsUtilities";
import {DateTime, TimeSpan} from "../../DateTime";
import {Strings} from "../../Strings";
import {StringHelper} from "../../ExtensionMethods";
import {GetUserAvailabilityRequest} from "../../Core/Requests/GetUserAvailabilityRequest";
export class AvailabilityOptions {
    private mergedFreeBusyInterval: number = 30;
    private requestedFreeBusyView: FreeBusyViewType = FreeBusyViewType.Detailed;
    private goodSuggestionThreshold: number = 25;
    private maximumSuggestionsPerDay: number = 10;
    private maximumNonWorkHoursSuggestionsPerDay: number = 0;
    private meetingDuration: number = 60;
    private minimumSuggestionQuality: SuggestionQuality = SuggestionQuality.Fair;
    private detailedSuggestionsWindow: TimeWindow = null;
    private currentMeetingTime: DateTime = null;
    private globalObjectId: string = null;

    get MergedFreeBusyInterval(): number {
        return this.mergedFreeBusyInterval;
    }
    set MergedFreeBusyInterval(value: number) {
        if (value < 5 || value > 1440) {
            throw new Error(StringHelper.Format(Strings.InvalidPropertyValueNotInRange, "MergedFreeBusyInterval", 5, 1440));//ArgumentException
        }
        this.mergedFreeBusyInterval = value;
    }
    get RequestedFreeBusyView(): FreeBusyViewType {
        return this.requestedFreeBusyView;
    }
    set RequestedFreeBusyView(value: FreeBusyViewType) {
        this.requestedFreeBusyView = value;
    }
    get GoodSuggestionThreshold(): number {
        return this.goodSuggestionThreshold;
    }
    set GoodSuggestionThreshold(value: number) {
        if (value < 1 || value > 49) {
            throw new Error(StringHelper.Format(Strings.InvalidPropertyValueNotInRange, "GoodSuggestionThreshold", 1, 49));//ArgumentException
        }
        this.goodSuggestionThreshold = value;
    }
    get MaximumSuggestionsPerDay(): number {
        return this.maximumSuggestionsPerDay;
    }
    set MaximumSuggestionsPerDay(value: number) {
        if (value < 0 || value > 48) {
            throw new Error(StringHelper.Format(Strings.InvalidPropertyValueNotInRange, "MaximumSuggestionsPerDay", 0, 48));//ArgumentException
        }
        this.maximumSuggestionsPerDay = value;
    }
    get MaximumNonWorkHoursSuggestionsPerDay(): number {
        return this.maximumNonWorkHoursSuggestionsPerDay;
    }
    set MaximumNonWorkHoursSuggestionsPerDay(value: number) {
        if (value < 0 || value > 48) {
            throw new Error(StringHelper.Format(Strings.InvalidPropertyValueNotInRange, "MaximumNonWorkHoursSuggestionsPerDay", 0, 48));//ArgumentException
        }
        this.maximumNonWorkHoursSuggestionsPerDay = value;
    }
    get MeetingDuration(): number {
        return this.meetingDuration;
    }
    set MeetingDuration(value: number) {
        if (value < 30 || value > 1440) {
            throw new Error(StringHelper.Format(Strings.InvalidPropertyValueNotInRange, "MeetingDuration", 30, 1440));//ArgumentException
        }
        this.meetingDuration = value;
    }
    get MinimumSuggestionQuality(): SuggestionQuality {
        return this.minimumSuggestionQuality;
    }
    set MinimumSuggestionQuality(value: SuggestionQuality) {
        this.minimumSuggestionQuality = value;
    }
    get DetailedSuggestionsWindow(): TimeWindow {
        return this.detailedSuggestionsWindow;
    }
    set DetailedSuggestionsWindow(value: TimeWindow) {
        this.detailedSuggestionsWindow = value;
    }
    get CurrentMeetingTime(): DateTime {
        return this.currentMeetingTime;
    }
    set CurrentMeetingTime(value: DateTime) {
        this.currentMeetingTime = value;
    }
    get GlobalObjectId(): string {
        return this.globalObjectId;
    }
    set GlobalObjectId(value: string) {
        this.globalObjectId = value;
    }
    Validate(timeWindow: TimeSpan): void {
        if (TimeSpan.FromMinutes(this.MergedFreeBusyInterval) > timeWindow) {
            throw new Error(Strings.MergedFreeBusyIntervalMustBeSmallerThanTimeWindow);//, "MergedFreeBusyInterval");//ArgumentException
        }

        EwsUtilities.ValidateParamAllowNull(this.DetailedSuggestionsWindow, "DetailedSuggestionsWindow");
    }
    /** @internal */
    WriteToXml(writer: EwsServiceXmlWriter, request: GetUserAvailabilityRequest): void {
        if (request.IsFreeBusyViewRequested) {
            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.FreeBusyViewOptions);

            request.TimeWindow.WriteToXmlUnscopedDatesOnly(writer, XmlElementNames.TimeWindow);

            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.MergedFreeBusyIntervalInMinutes,
                this.MergedFreeBusyInterval);

            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.RequestedView,
                FreeBusyViewType[this.RequestedFreeBusyView]);

            writer.WriteEndElement(); // FreeBusyViewOptions
        }

        if (request.IsSuggestionsViewRequested) {
            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.SuggestionsViewOptions);

            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.GoodThreshold,
                this.GoodSuggestionThreshold);

            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.MaximumResultsByDay,
                this.MaximumSuggestionsPerDay);

            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.MaximumNonWorkHourResultsByDay,
                this.MaximumNonWorkHoursSuggestionsPerDay);

            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.MeetingDurationInMinutes,
                this.MeetingDuration);

            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.MinimumSuggestionQuality,
                SuggestionQuality[this.MinimumSuggestionQuality]);

            var timeWindowToSerialize: TimeWindow = this.DetailedSuggestionsWindow === null ?
                request.TimeWindow :
                this.DetailedSuggestionsWindow;

            timeWindowToSerialize.WriteToXmlUnscopedDatesOnly(writer, XmlElementNames.DetailedSuggestionsWindow);

            if (this.CurrentMeetingTime !== null) {
                writer.WriteElementValue(
                    XmlNamespace.Types,
                    XmlElementNames.CurrentMeetingTime,
                    this.CurrentMeetingTime);
            }

            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.GlobalObjectId,
                this.GlobalObjectId);

            writer.WriteEndElement(); // SuggestionsViewOptions
        }
    }
}


