import {ServiceResponse} from "./ServiceResponse";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
/**
 * ## *Not Implemented* 
 */
export class GetServerTimeZonesResponse extends ServiceResponse {
    TimeZones: any[];// System.Collections.ObjectModel.Collection<System.TimeZoneInfo>;
    private timeZones: any[];//System.Collections.ObjectModel.Collection<System.TimeZoneInfo>;
    /**@internal */
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetServerTimeZonesResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}