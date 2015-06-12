import {ItemId} from "./ItemId";
import {ComplexProperty} from "./ComplexProperty";
import {JsonObject} from "../Core/JsonObject";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class OccurrenceInfo extends ComplexProperty {
    ItemId: ItemId;
    Start: Date;
    End: Date;
    OriginalStart: Date;
    private itemId: ItemId;
    private start: Date;
    private end: Date;
    private originalStart: Date;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("OccurrenceInfo.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("OccurrenceInfo.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


//}



