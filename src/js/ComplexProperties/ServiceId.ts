import XmlNamespace = require("../Enumerations/XmlNamespace");
import EwsUtilities = require("../Core/EwsUtilities");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import XmlAttributeNames = require("../Core/XmlAttributeNames");

import {StringHelper} from "../ExtensionMethods";

import ComplexProperty = require("./ComplexProperty");
class ServiceId extends ComplexProperty {
    public get IsValid(): boolean { return this.IsValidProxy(); }
    protected IsValidProxy(): boolean { return !StringHelper.IsNullOrEmpty(this.UniqueId); } //proxy to be able to call super. from inherited child
    UniqueId: string;
    ChangeKey: string;
    //private changeKey: string; not needed for proxy
    //private uniqueId: string; - not needed for proxy

    constructor(uniqueId?: string) {
        super();
        if (!StringHelper.IsNullOrEmpty(uniqueId)) {
            EwsUtilities.ValidateParam(uniqueId, "uniqueId");
            this.UniqueId = uniqueId;
        }
    }

    Assign(source: ServiceId): void {
        this.UniqueId = source.UniqueId;
        this.ChangeKey = source.ChangeKey;
    }
    Equals(obj: any): boolean {
        if (this === obj) {//object.ReferenceEquals(this, obj)) {
            return true;
        }
        else {
            var other: ServiceId = obj;

            if (!(other instanceof ServiceId)) {// == null) {
                return false;
            }
            else if (!(this.IsValid && other.IsValid)) {
                return false;
            }
            else {
                return this.UniqueId === other.UniqueId;//.Equals(other.UniqueId);
            }
        }
    }
    //GetHashCode(): number { return this.IsValid ? this.UniqueId.GetHashCode() : super.GetHashCode();}
    //GetJsonTypeName(): string { throw new Error("ServiceId.ts - GetJsonTypeName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("abstract method must implement."); }
    //InternalToJson(service: ExchangeService): any { throw new Error("ServiceId.ts - InternalToJson : Not implemented."); }
    //LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("ServiceId.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsObject: any, xmlElementName: string, xmlNamespace?: XmlNamespace): void {
        for (var key in jsObject) {
            switch (key) {
                case XmlAttributeNames.Id:
                    this.UniqueId = jsObject[key];
                    break;
                case XmlAttributeNames.ChangeKey:
                    this.ChangeKey = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    }
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): void {
        this.UniqueId = reader.ReadAttributeValue(null, XmlAttributeNames.Id);
        this.ChangeKey = reader.ReadAttributeValue(null, XmlAttributeNames.ChangeKey);
    }
    SameIdAndChangeKey(other: ServiceId): boolean {
        if (this.Equals(other)) {
            return ((this.ChangeKey == null) && (other.ChangeKey == null)) ||
                this.ChangeKey === other.ChangeKey;
        }
        else {
            return false;
        }
    }
    ToString(): string { return (this.UniqueId == null) ? "" : this.UniqueId; }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue("", XmlAttributeNames.Id, this.UniqueId);
        writer.WriteAttributeValue("", XmlAttributeNames.ChangeKey, this.ChangeKey);
    }
    WriteToXml(writer: EwsServiceXmlWriter): void {
        super.WriteToXml(writer, this.GetXmlElementName());
    }
}
export = ServiceId;
