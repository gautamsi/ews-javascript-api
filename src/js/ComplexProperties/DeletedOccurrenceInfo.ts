import {ComplexProperty} from "./ComplexProperty";
import {JsonObject} from "../Core/JsonObject";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class DeletedOccurrenceInfo extends ComplexProperty {
    OriginalStart: Date;
    private originalStart: Date;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("DeletedOccurrenceInfo.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("DeletedOccurrenceInfo.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}

