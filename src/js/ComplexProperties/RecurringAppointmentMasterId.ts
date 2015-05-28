import ItemId = require("./ItemId");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class RecurringAppointmentMasterId extends ItemId {
    GetXmlElementName(): string { throw new Error("RecurringAppointmentMasterId.ts - GetXmlElementName : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("RecurringAppointmentMasterId.ts - InternalToJson : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("RecurringAppointmentMasterId.ts - WriteAttributesToXml : Not implemented."); }
}
export = RecurringAppointmentMasterId;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
