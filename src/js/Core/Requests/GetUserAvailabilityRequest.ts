import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {AttendeeInfo} from "../../Misc/Availability/AttendeeInfo";
import {TimeWindow} from "../../Misc/Availability/TimeWindow";
import {AvailabilityData} from "../../Enumerations/AvailabilityData";
import {AvailabilityOptions} from "../../Misc/Availability/AvailabilityOptions";
import {GetUserAvailabilityResults} from "../../Misc/Availability/GetUserAvailabilityResults";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class GetUserAvailabilityRequest extends SimpleServiceRequestBase {
    EmitTimeZoneHeader: boolean;
    IsFreeBusyViewRequested: boolean;
    IsSuggestionsViewRequested: boolean;
    Attendees: AttendeeInfo[];//System.Collections.Generic.IEnumerable<AttendeeInfo>;
    TimeWindow: TimeWindow;
    RequestedData: AvailabilityData;
    Options: AvailabilityOptions;
    private attendees: AttendeeInfo[];//System.Collections.Generic.IEnumerable<AttendeeInfo>;
    private timeWindow: TimeWindow;
    private requestedData: AvailabilityData;
    private options: AvailabilityOptions;
    Execute(): GetUserAvailabilityResults { throw new Error("GetUserAvailabilityRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetUserAvailabilityRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetUserAvailabilityRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetUserAvailabilityRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetUserAvailabilityRequest.ts - ParseResponse : Not implemented."); }
    Validate(): any { throw new Error("GetUserAvailabilityRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetUserAvailabilityRequest.ts - WriteElementsToXml : Not implemented."); }
}



//}



