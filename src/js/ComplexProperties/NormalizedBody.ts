import ComplexProperty = require("./ComplexProperty");
import BodyType = require("../Enumerations/BodyType");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class NormalizedBody extends ComplexProperty {
    BodyType: BodyType;
    Text: string;
    IsTruncated: boolean;
    private bodyType: BodyType;
    private text: string;
    private isTruncated: boolean;
    InternalToJson(service: ExchangeService): any { throw new Error("NormalizedBody.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("NormalizedBody.ts - LoadFromJson : Not implemented."); }
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("NormalizedBody.ts - ReadAttributesFromXml : Not implemented."); }
    ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("NormalizedBody.ts - ReadTextValueFromXml : Not implemented."); }
    ToString(): string { throw new Error("NormalizedBody.ts - ToString : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("NormalizedBody.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("NormalizedBody.ts - WriteElementsToXml : Not implemented."); }
}
export = NormalizedBody;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
