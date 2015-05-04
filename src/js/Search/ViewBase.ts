import PropertySet = require("../Core/PropertySet");
import ExchangeService = require("../Core/ExchangeService");
import ServiceObjectType = require("../Enumerations/ServiceObjectType");
import ServiceRequestBase = require("../Core/Requests/ServiceRequestBase");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import Grouping = require("./Grouping");
class ViewBase {
    PropertySet: PropertySet;
    private propertySet: PropertySet;
    AddJsonProperties(jsonRequest: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
    GetMaxEntriesReturned(): number { throw new Error("Not implemented."); }
    GetPropertySetOrDefault(): PropertySet { throw new Error("Not implemented."); }
    GetServiceObjectType(): ServiceObjectType { throw new Error("Not implemented."); }
    GetViewJsonTypeName(): string { throw new Error("Not implemented."); }
    GetViewXmlElementName(): string { throw new Error("Not implemented."); }
    InternalValidate(request: ServiceRequestBase): any { throw new Error("Not implemented."); }
    InternalWritePagingToJson(jsonView: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("Not implemented."); }
    InternalWriteViewToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any { throw new Error("Not implemented."); }
    WriteOrderByToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WritePagingToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    WriteShapeToJson(jsonRequest: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("Not implemented."); }
}
export = ViewBase;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
