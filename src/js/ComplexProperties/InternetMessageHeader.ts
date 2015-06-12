import {ComplexProperty} from "./ComplexProperty";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class InternetMessageHeader extends ComplexProperty {
    Name: string;
    Value: string;
    private name: string;
    private value: string;
    InternalToJson(service: ExchangeService): any { throw new Error("InternetMessageHeader.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("InternetMessageHeader.ts - LoadFromJson : Not implemented."); }
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("InternetMessageHeader.ts - ReadAttributesFromXml : Not implemented."); }
    ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("InternetMessageHeader.ts - ReadTextValueFromXml : Not implemented."); }
    ToString(): string { throw new Error("InternetMessageHeader.ts - ToString : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("InternetMessageHeader.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("InternetMessageHeader.ts - WriteElementsToXml : Not implemented."); }
}


//}



