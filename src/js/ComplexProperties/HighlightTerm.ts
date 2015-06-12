import {ComplexProperty} from "./ComplexProperty";
import {JsonObject} from "../Core/JsonObject";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class HighlightTerm extends ComplexProperty {
    Scope: string;
    Value: string;
    private scope: string;
    private value: string;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("HighlightTerm.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("HighlightTerm.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


