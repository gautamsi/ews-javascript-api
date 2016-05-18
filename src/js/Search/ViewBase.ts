import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {PropertySet} from "../Core/PropertySet";
import {ExchangeService} from "../Core/ExchangeService";
import {ServiceObjectType} from "../Enumerations/ServiceObjectType";
import {ServiceRequestBase} from "../Core/Requests/ServiceRequestBase";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {Grouping} from "./Grouping";
export class ViewBase {
    PropertySet: PropertySet;
    //private propertySet: PropertySet;
    AddJsonProperties(jsonRequest: any/*JsonObject*/, service: ExchangeService): any { throw new Error("ViewBase.ts - AddJsonProperties : Not implemented."); }
    GetMaxEntriesReturned(): number { throw new Error("abstract - ViewBase.ts - GetMaxEntriesReturned : Not implemented."); }
    GetPropertySetOrDefault(): PropertySet { return this.PropertySet || PropertySet.FirstClassProperties; }
    GetServiceObjectType(): ServiceObjectType { throw new Error("abstract - ViewBase.ts - GetServiceObjectType : Not implemented."); }
    GetViewJsonTypeName(): string { return this.GetViewXmlElementName(); }
    GetViewXmlElementName(): string { throw new Error("abstract - ViewBase.ts - GetViewXmlElementName : Not implemented."); }
    /** @internal */
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
            writer.WriteAttributeValue(XmlAttributeNames.MaxEntriesReturned, maxEntriesReturned);
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