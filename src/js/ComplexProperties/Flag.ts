import ComplexProperty = require("./ComplexProperty");
import ItemFlagStatus = require("../Enumerations/ItemFlagStatus");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class Flag extends ComplexProperty {
    FlagStatus: ItemFlagStatus;
    StartDate: Date;
    DueDate: Date;
    CompleteDate: Date;
    private flagStatus: ItemFlagStatus;
    private startDate: Date;
    private dueDate: Date;
    private completeDate: Date;
    InternalToJson(service: ExchangeService): any { throw new Error("Flag.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Flag.ts - LoadFromJson : Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("Flag.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    Validate(): any { throw new Error("Flag.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Flag.ts - WriteElementsToXml : Not implemented."); }
}
export = Flag;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

