import {ComplexProperty} from "../ComplexProperty";
import {OofState} from "../../Enumerations/OofState";
import {OofExternalAudience} from "../../Enumerations/OofExternalAudience";
import {TimeWindow} from "../../Misc/Availability/TimeWindow";
import {OofReply} from "../../Misc/Availability/OofReply";
import {ExchangeService} from "../../Core/ExchangeService";
import {JsonObject} from "../../Core/JsonObject";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
export class OofSettings extends ComplexProperty {
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
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("OofSettings.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("OofSettings.ts - WriteElementsToXml : Not implemented."); }
}



//}



