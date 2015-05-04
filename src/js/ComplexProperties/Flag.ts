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
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

