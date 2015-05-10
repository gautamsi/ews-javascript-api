import CalendarEventDetails = require("./CalendarEventDetails");
import ComplexProperty = require("../ComplexProperty");
import LegacyFreeBusyStatus = require("../../Enumerations/LegacyFreeBusyStatus");
import JsonObject = require("../../Core/JsonObject");
import ExchangeService = require("../../Core/ExchangeService");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
class CalendarEvent extends ComplexProperty {
    StartTime: Date;
    EndTime: Date;
    FreeBusyStatus: LegacyFreeBusyStatus;
    Details: CalendarEventDetails;
    private startTime: Date;
    private endTime: Date;
    private freeBusyStatus: LegacyFreeBusyStatus;
    private details: CalendarEventDetails;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
}
export = CalendarEvent;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
