import ExchangeService = require("../Core/ExchangeService");
import NameResolution = require("./NameResolution");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
class NameResolutionCollection {//IEnumerable<NameResolution>
    Session: ExchangeService;
    Count: number;
    IncludesAllResolutions: boolean;
    Item: NameResolution;
    private service: ExchangeService;
    private includesAllResolutions: boolean;
    private items: any[];//System.Collections.Generic.List<T>;
    GetEnumerator(): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = NameResolutionCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
