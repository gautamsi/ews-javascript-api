import {ExchangeService} from "../Core/ExchangeService";
import {NameResolution} from "./NameResolution";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class NameResolutionCollection {//IEnumerable<NameResolution>
    Session: ExchangeService;
    Count: number;
    IncludesAllResolutions: boolean;
    Item: NameResolution;
    private service: ExchangeService;
    private includesAllResolutions: boolean;
    private items: any[];//System.Collections.Generic.List<T>;
    GetEnumerator(): any { throw new Error("NameResolutionCollection.ts - GetEnumerator : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("NameResolutionCollection.ts - LoadFromJson : Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("NameResolutionCollection.ts - LoadFromXml : Not implemented."); }
}


//}



