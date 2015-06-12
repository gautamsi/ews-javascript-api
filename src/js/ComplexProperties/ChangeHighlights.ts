import {ComplexProperty} from "./ComplexProperty";
import {JsonObject} from "../Core/JsonObject";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class ChangeHighlights extends ComplexProperty {
    HasLocationChanged: boolean;
    Location: string;
    HasStartTimeChanged: boolean;
    Start: Date;
    HasEndTimeChanged: boolean;
    End: Date;
    private hasLocationChanged: boolean;
    private location: string;
    private hasStartTimeChanged: boolean;
    private start: Date;
    private hasEndTimeChanged: boolean;
    private end: Date;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("ChangeHighlights.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ChangeHighlights.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}

