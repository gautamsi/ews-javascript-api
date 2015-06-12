import {ComplexProperty} from "./ComplexProperty";
import {BodyType} from "../Enumerations/BodyType";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class UniqueBody extends ComplexProperty {
    BodyType: BodyType;
    Text: string;
    IsTruncated: boolean;
    private bodyType: BodyType;
    private text: string;
    private isTruncated: boolean;
    InternalToJson(service: ExchangeService): any { throw new Error("UniqueBody.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("UniqueBody.ts - LoadFromJson : Not implemented."); }
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("UniqueBody.ts - ReadAttributesFromXml : Not implemented."); }
    ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("UniqueBody.ts - ReadTextValueFromXml : Not implemented."); }
    ToString(): string { throw new Error("UniqueBody.ts - ToString : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("UniqueBody.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("UniqueBody.ts - WriteElementsToXml : Not implemented."); }
}


//}



