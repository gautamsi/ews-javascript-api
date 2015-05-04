import ComplexProperty = require("./ComplexProperty");
import BodyType = require("../Enumerations/BodyType");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class UniqueBody extends ComplexProperty {
    BodyType: BodyType;
    Text: string;
    IsTruncated: boolean;
    private bodyType: BodyType;
    private text: string;
    private isTruncated: boolean;
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    ToString(): string { throw new Error("Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = UniqueBody;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
