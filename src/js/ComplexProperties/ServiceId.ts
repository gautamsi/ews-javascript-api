import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../Core/EwsUtilities";
import { ExchangeService } from "../Core/ExchangeService";
import { StringHelper } from "../ExtensionMethods";
import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

import { ComplexProperty } from "./ComplexProperty";
/**
 * Represents the Id of an Exchange object.
 *
 * @abstract
 * @class ServiceId
 * @extends {ComplexProperty}
 */
export abstract class ServiceId extends ComplexProperty {
    /**
     *Gets the unique Id of the Exchange object.
     *
     * @type {string}
     */
    UniqueId: string;

    /**
     *Gets the change key associated with the Exchange object. The change key represents the the version of the associated item or folder.
     *
     * @type {string}
     */
    ChangeKey: string;

    /**
     * True if this instance is valid, false otherthise.
     * 
     * @value   *true* if this instance is valid; otherwise, *false*.
     */
    public get IsValid(): boolean {
        return this.IsValidProxy();
    }

    /** @internal IsValid proxy to be able to call super. from inherited child */
    protected IsValidProxy(): boolean {
        return !StringHelper.IsNullOrEmpty(this.UniqueId);
    }

    /**
     * Initializes a new instance of the **ServiceId** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **ServiceId** class.
     *
     * @param   {string}   uniqueId   The unique id.
     */
    constructor(uniqueId: string);
    constructor(uniqueId?: string) {
        super();
        if (!StringHelper.IsNullOrEmpty(uniqueId)) {
            EwsUtilities.ValidateParam(uniqueId, "uniqueId");
            this.UniqueId = uniqueId;
        }
    }

    /**
     * @internal Assigns from existing id.
     *
     * @param   {ServiceId}   source   The source.
     */
    Assign(source: ServiceId): void {
        this.UniqueId = source.UniqueId;
        this.ChangeKey = source.ChangeKey;
    }

    /**
     * Determines whether the specified *ServiceId* is equal to the current *ServiceId*.
     * We do not consider the ChangeKey for ServiceId.Equals.
     *
     * @param   {any}       obj   The  to compare with the current .
     * @return  {boolean}   true if the specified  is equal to the current ; otherwise, false.
     */
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

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string { throw new Error("abstract method must implement."); }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
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

    /**
     * Determines whether two ServiceId instances are equal (including ChangeKeys)
     *
     * @param   {ServiceId}   other   The ServiceId to compare with the current ServiceId.
     */
    SameIdAndChangeKey(other: ServiceId): boolean {
        if (this.Equals(other)) {
            return ((this.ChangeKey == null) && (other.ChangeKey == null)) ||
                this.ChangeKey === other.ChangeKey;
        }
        else {
            return false;
        }
    }

    /**
     * Returns a *String* that represents the current *ServiceId*.
     *
     * @return  {string}      A *String* that represents the current *ServiceId*.
     */
    ToString(): string {
        return (this.UniqueId == null) ? "" : this.UniqueId;
    }

    /**
     * @internal Writes attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(XmlAttributeNames.Id, this.UniqueId);
        writer.WriteAttributeValue(XmlAttributeNames.ChangeKey, this.ChangeKey);
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     * @param   {XmlNamespace}          xmlNamespace     The XML namespace.
     */
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName?: string, xmlNamespace?: XmlNamespace): void {
        if (arguments.length > 2) {
            super.WriteToXml(writer, xmlElementName, xmlNamespace);
        }
        else if (arguments.length > 1) {
            super.WriteToXml(writer, xmlElementName);
        }
        else {
            super.WriteToXml(writer, this.GetXmlElementName());
        }
    }
}