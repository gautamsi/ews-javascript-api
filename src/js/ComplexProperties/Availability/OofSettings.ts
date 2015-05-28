import ComplexProperty = require("../ComplexProperty");
import OofState = require("../../Enumerations/OofState");
import OofExternalAudience = require("../../Enumerations/OofExternalAudience");
import TimeWindow = require("../../Misc/Availability/TimeWindow");
import OofReply = require("../../Misc/Availability/OofReply");
import ExchangeService = require("../../Core/ExchangeService");
import JsonObject = require("../../Core/JsonObject");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
class OofSettings extends ComplexProperty {
    State: OofState;
    ExternalAudience: OofExternalAudience;
    Duration: TimeWindow;
    InternalReply: OofReply;
    ExternalReply: OofReply;
    AllowExternalOof: OofExternalAudience;
    private state: OofState;
    private externalAudience: OofExternalAudience;
    private allowExternalOof: OofExternalAudience;
    private duration: TimeWindow;
    private internalReply: OofReply;
    private externalReply: OofReply;
    InternalToJson(service: ExchangeService): any { throw new Error("OofSettings.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("OofSettings.ts - LoadFromJson : Not implemented."); }
    SerializeOofReply(oofReply: OofReply, writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("OofSettings.ts - SerializeOofReply : Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("OofSettings.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("OofSettings.ts - WriteElementsToXml : Not implemented."); }
}
export = OofSettings;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
