import PropertySet = require("../Core/PropertySet");
import ExchangeService = require("../Core/ExchangeService");
import ServiceObjectType = require("../Enumerations/ServiceObjectType");
import ServiceRequestBase = require("../Core/Requests/ServiceRequestBase");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import Grouping = require("./Grouping");
class ViewBase {
    PropertySet: PropertySet;
    private propertySet: PropertySet;
    AddJsonProperties(jsonRequest: any/*JsonObject*/, service: ExchangeService): any { throw new Error("ViewBase.ts - AddJsonProperties : Not implemented."); }
    GetMaxEntriesReturned(): number { throw new Error("ViewBase.ts - GetMaxEntriesReturned : Not implemented."); }
    GetPropertySetOrDefault(): PropertySet { throw new Error("ViewBase.ts - GetPropertySetOrDefault : Not implemented."); }
    GetServiceObjectType(): ServiceObjectType { throw new Error("ViewBase.ts - GetServiceObjectType : Not implemented."); }
    GetViewJsonTypeName(): string { throw new Error("ViewBase.ts - GetViewJsonTypeName : Not implemented."); }
    GetViewXmlElementName(): string { throw new Error("ViewBase.ts - GetViewXmlElementName : Not implemented."); }
    InternalValidate(request: ServiceRequestBase): any { throw new Error("ViewBase.ts - InternalValidate : Not implemented."); }
    InternalWritePagingToJson(jsonView: any/*JsonObject*/, service: ExchangeService): any { throw new Error("ViewBase.ts - InternalWritePagingToJson : Not implemented."); }
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("ViewBase.ts - InternalWriteSearchSettingsToXml : Not implemented."); }
    InternalWriteViewToXml(writer: EwsServiceXmlWriter): any { throw new Error("ViewBase.ts - InternalWriteViewToXml : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("ViewBase.ts - WriteAttributesToXml : Not implemented."); }
    WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any { throw new Error("ViewBase.ts - WriteGroupingToJson : Not implemented."); }
    WriteOrderByToXml(writer: EwsServiceXmlWriter): any { throw new Error("ViewBase.ts - WriteOrderByToXml : Not implemented."); }
    WritePagingToJson(service: ExchangeService): any { throw new Error("ViewBase.ts - WritePagingToJson : Not implemented."); }
    WriteShapeToJson(jsonRequest: any/*JsonObject*/, service: ExchangeService): any { throw new Error("ViewBase.ts - WriteShapeToJson : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("ViewBase.ts - WriteToXml : Not implemented."); }
}
export = ViewBase;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
