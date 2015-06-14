import {AttendeeInfo} from "../../Misc/Availability/AttendeeInfo";
import {TimeWindow} from "../../Misc/Availability/TimeWindow";
import {AvailabilityData} from "../../Enumerations/AvailabilityData";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {ServiceError} from "../../Enumerations/ServiceError";
import {AvailabilityOptions} from "../../Misc/Availability/AvailabilityOptions";
import {LegacyAvailabilityTimeZone} from "../../Misc/Availability/LegacyAvailabilityTimeZone";
import {GetUserAvailabilityResults} from "../../Misc/Availability/GetUserAvailabilityResults";
import {IPromise} from "../../Interfaces";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {ExchangeService} from "../ExchangeService";
import {XmlElementNames} from "../XmlElementNames";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {AttendeeAvailability} from "../Responses/AttendeeAvailability";
import {SuggestionsResponse} from "../Responses/SuggestionsResponse";
import {ServiceResponseCollection} from "../Responses/ServiceResponseCollection";
import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
export class GetUserAvailabilityRequest extends SimpleServiceRequestBase {
    get EmitTimeZoneHeader(): boolean { return true; }
    get IsFreeBusyViewRequested(): boolean { return this.RequestedData == AvailabilityData.FreeBusy || this.RequestedData == AvailabilityData.FreeBusyAndSuggestions; }
    get IsSuggestionsViewRequested(): boolean { return this.RequestedData == AvailabilityData.Suggestions || this.RequestedData == AvailabilityData.FreeBusyAndSuggestions; }
    Attendees: AttendeeInfo[] = [];//System.Collections.Generic.IEnumerable<AttendeeInfo>;
    TimeWindow: TimeWindow = null;
    RequestedData: AvailabilityData = AvailabilityData.FreeBusyAndSuggestions;
    Options: AvailabilityOptions = null;
    // private attendees: AttendeeInfo[];//System.Collections.Generic.IEnumerable<AttendeeInfo>; - no need of backing field
    // private timeWindow: TimeWindow;
    // private requestedData: AvailabilityData;
    // private options: AvailabilityOptions;
    constructor(service: ExchangeService) {
        super(service);
    }
    Execute(): IPromise<GetUserAvailabilityResults> { return <IPromise<GetUserAvailabilityResults>>this.InternalExecute(); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetResponseXmlElementName(): string { return XmlElementNames.GetUserAvailabilityResponse; }
    GetXmlElementName(): string { return XmlElementNames.GetUserAvailabilityRequest; }
    ParseResponse(jsonBody: any): any {
        var serviceResponse = new GetUserAvailabilityResults();

        if (this.IsFreeBusyViewRequested) {
            serviceResponse.AttendeesAvailability = new ServiceResponseCollection<AttendeeAvailability>();
            var responseArray: any = jsonBody[XmlElementNames.FreeBusyResponseArray];
            var responseMessages: any[] = responseArray[XmlElementNames.FreeBusyResponse];
            if (!Array.isArray(responseArray)) {
                responseMessages = [responseMessages];
            }
            for (var responseMessage of responseMessages) {
                var freeBusyResponse: AttendeeAvailability = new AttendeeAvailability();
                freeBusyResponse.LoadFromXmlJsObject(responseMessage[XmlElementNames.ResponseMessage], this.Service);
                if (freeBusyResponse.ErrorCode == ServiceError.NoError) {
                    freeBusyResponse.LoadFreeBusyViewFromXmlJsObject(responseMessage[XmlElementNames.FreeBusyView], this.Options.RequestedFreeBusyView, this.Service);
                }
                serviceResponse.AttendeesAvailability.Add(freeBusyResponse);
            }
        }
        if (this.IsSuggestionsViewRequested) {
            serviceResponse.SuggestionsResponse = new SuggestionsResponse();

            var suggestionResponse = jsonBody[XmlElementNames.SuggestionsResponse];

            serviceResponse.SuggestionsResponse.LoadFromXmlJsObject(suggestionResponse[XmlElementNames.ResponseMessage], this.Service);

            if (serviceResponse.SuggestionsResponse.ErrorCode == ServiceError.NoError) {
                serviceResponse.SuggestionsResponse.LoadSuggestedDaysFromXml(reader);
            }
        }

        return serviceResponse;
    }
    Validate(): void {
        super.Validate();
        this.Options.Validate(this.TimeWindow.Duration);
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        // Only serialize the TimeZone property against an Exchange 2007 SP1 server.
        // Against Exchange 2010, the time zone is emitted in the request's SOAP header.
        if (writer.Service.RequestedServerVersion == ExchangeVersion.Exchange2007_SP1) {
            //todo: implement TimeZone and then LegacyAvailabilityTimeZone
            // var legacyTimeZone:LegacyAvailabilityTimeZone = new LegacyAvailabilityTimeZone(writer.Service.TimeZone);

            // legacyTimeZone.WriteToXml(writer, XmlElementNames.TimeZone);
        }

        writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.MailboxDataArray);

        for (var attendee in this.Attendees) {
            attendee.WriteToXml(writer);
        }

        writer.WriteEndElement(); // MailboxDataArray

        this.Options.WriteToXml(writer, this);
    }
}

