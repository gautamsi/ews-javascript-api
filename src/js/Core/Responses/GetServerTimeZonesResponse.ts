class GetServerTimeZonesResponse extends ServiceResponse {
    TimeZones: any[];// System.Collections.ObjectModel.Collection<System.TimeZoneInfo>;
    private timeZones: any[];//System.Collections.ObjectModel.Collection<System.TimeZoneInfo>;
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = GetServerTimeZonesResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;