import {ComplexProperty} from "./ComplexProperty";
import {BodyType} from "../Enumerations/BodyType";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class MessageBody extends ComplexProperty {
    BodyType: BodyType;
    Text: string;
    private bodyType: BodyType;
    private text: string;
    InternalToJson(service: ExchangeService): any { throw new Error("MessageBody.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("MessageBody.ts - LoadFromJson : Not implemented."); }
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("MessageBody.ts - ReadAttributesFromXml : Not implemented."); }
    ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("MessageBody.ts - ReadTextValueFromXml : Not implemented."); }
    ToString(): string { throw new Error("MessageBody.ts - ToString : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("MessageBody.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("MessageBody.ts - WriteElementsToXml : Not implemented."); }
}


//}



