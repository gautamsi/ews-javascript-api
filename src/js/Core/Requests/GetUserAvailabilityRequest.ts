import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import AttendeeInfo = require("../../Misc/Availability/AttendeeInfo");
import TimeWindow = require("../../Misc/Availability/TimeWindow");
import AvailabilityData = require("../../Enumerations/AvailabilityData");
import AvailabilityOptions = require("../../Misc/Availability/AvailabilityOptions");
import GetUserAvailabilityResults = require("../../Misc/Availability/GetUserAvailabilityResults");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class GetUserAvailabilityRequest extends SimpleServiceRequestBase {
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
    Execute(): GetUserAvailabilityResults { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = GetUserAvailabilityRequest;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
