import {ServiceResponse} from "./ServiceResponse";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class GetServerTimeZonesResponse extends ServiceResponse {
    TimeZones: any[];// System.Collections.ObjectModel.Collection<System.TimeZoneInfo>;
    private timeZones: any[];//System.Collections.ObjectModel.Collection<System.TimeZoneInfo>;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetServerTimeZonesResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}


//}



