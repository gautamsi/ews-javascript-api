import XmlAttributeNames = require("../Core/XmlAttributeNames");
import XmlNamespace = require("../Enumerations/XmlNamespace");
import PropertySet = require("../Core/PropertySet");
import ExchangeService = require("../Core/ExchangeService");
import ServiceObjectType = require("../Enumerations/ServiceObjectType");
import ServiceRequestBase = require("../Core/Requests/ServiceRequestBase");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import Grouping = require("./Grouping");
class ViewBase {
    PropertySet: PropertySet;
    //private propertySet: PropertySet;
    AddJsonProperties(jsonRequest: any/*JsonObject*/, service: ExchangeService): any { throw new Error("ViewBase.ts - AddJsonProperties : Not implemented."); }
    GetMaxEntriesReturned(): number { throw new Error("abstract - ViewBase.ts - GetMaxEntriesReturned : Not implemented."); }
    GetPropertySetOrDefault(): PropertySet { return this.PropertySet || PropertySet.FirstClassProperties; }
    GetServiceObjectType(): ServiceObjectType { throw new Error("abstract - ViewBase.ts - GetServiceObjectType : Not implemented."); }
    GetViewJsonTypeName(): string { return this.GetViewXmlElementName(); }
    GetViewXmlElementName(): string { throw new Error("abstract - ViewBase.ts - GetViewXmlElementName : Not implemented."); }
    InternalValidate(request: ServiceRequestBase): void {
        if (this.PropertySet !== null && typeof this.PropertySet !== 'undefined') {
            this.PropertySet.InternalValidate();
            this.PropertySet.ValidateForRequest(request, true /*summaryPropertiesOnly*/);
        }
    }
    InternalWritePagingToJson(jsonView: any/*JsonObject*/, service: ExchangeService): any { throw new Error("ViewBase.ts - InternalWritePagingToJson : Not implemented."); }
    InternalWriteSearchSettingsToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): any { throw new Error("abstract - ViewBase.ts - InternalWriteSearchSettingsToXml : Not implemented."); }
    InternalWriteViewToXml(writer: EwsServiceXmlWriter): void {
        var maxEntriesReturned = this.GetMaxEntriesReturned();
        if (!isNaN(maxEntriesReturned)) {
            writer.WriteAttributeValue(undefined, XmlAttributeNames.MaxEntriesReturned, maxEntriesReturned);
        }
    }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("abstract - ViewBase.ts - WriteAttributesToXml : Not implemented."); }
    WriteGroupingToJson(service: ExchangeService, groupBy: Grouping): any { throw new Error("abstract - ViewBase.ts - WriteGroupingToJson : Not implemented."); }
    WriteOrderByToXml(writer: EwsServiceXmlWriter): any { throw new Error("ViewBase.ts - WriteOrderByToXml : Not implemented."); }
    WritePagingToJson(service: ExchangeService): any { throw new Error("ViewBase.ts - WritePagingToJson : Not implemented."); }
    WriteShapeToJson(jsonRequest: any/*JsonObject*/, service: ExchangeService): any { throw new Error("ViewBase.ts - WriteShapeToJson : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, groupBy: Grouping): void {
        this.GetPropertySetOrDefault().WriteToXml(writer, this.GetServiceObjectType());
        writer.WriteStartElement(XmlNamespace.Messages, this.GetViewXmlElementName());
        this.InternalWriteViewToXml(writer);
        writer.WriteEndElement(); // this.GetViewXmlElementName()
        this.InternalWriteSearchSettingsToXml(writer, groupBy);
    }
}
export = ViewBase;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
