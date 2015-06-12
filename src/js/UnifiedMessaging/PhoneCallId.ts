import {ComplexProperty} from "../ComplexProperties/ComplexProperty";
import {ExchangeService} from "../Core/ExchangeService";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class PhoneCallId extends ComplexProperty {
    Id: string;
    private id: string;
    InternalToJson(service: ExchangeService): any { throw new Error("PhoneCallId.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("PhoneCallId.ts - LoadFromJson : Not implemented."); }
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("PhoneCallId.ts - ReadAttributesFromXml : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("PhoneCallId.ts - WriteAttributesToXml : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("PhoneCallId.ts - WriteToXml : Not implemented."); }
}


//}



