import ComplexProperty = require("./ComplexProperty");
import JsonObject = require("../Core/JsonObject");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
    class ChangeHighlights extends ComplexProperty {
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
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
