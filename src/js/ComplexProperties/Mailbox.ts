import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import XmlElementNames = require("../Core/XmlElementNames");

import XmlNamespace = require("../Enumerations/XmlNamespace");

import {StringHelper} from "../ExtensionMethods";

import ComplexProperty = require("./ComplexProperty");
class Mailbox extends ComplexProperty {
    ___implementsInterface: string[] = ["ISelfValidate", "IJsonSerializable", "GetSearchString"];
    ___typeName: string = "Mailbox";
    get IsValid(): boolean { return !StringHelper.IsNullOrEmpty(this.Address); }
    Address: string;
    RoutingType: string;

    constructor(address: string, routingType: string) {
        super();

        this.Address = address;
        this.RoutingType = routingType;
    }

    Equals(obj: any): boolean {
        if (this === obj) {
            return true;
        }
        else {
            var other: Mailbox = obj;

            if (!(other instanceof Mailbox)) {
                return false;
            }
            else if (((this.Address == null) && (other.Address == null)) ||
                ((this.Address != null) && this.Address === other.Address)) {
                return ((this.RoutingType == null) && (other.RoutingType == null)) ||
                    ((this.RoutingType != null) && this.RoutingType === other.RoutingType);
            }
            else {
                return false;
            }
        }
    }
    //GetHashCode(): number { throw new Error("Mailbox.ts - GetHashCode : Not implemented."); }
    //InternalToJson(service: ExchangeService): any { throw new Error("Mailbox.ts - InternalToJson : Not implemented."); }
    InternalValidate(): any {
        super.InternalValidate();

        debugger; //check for validity implement next line of codes
        //EwsUtilities.ValidateNonBlankStringParamAllowNull(this.Address, "address");
        //EwsUtilities.ValidateNonBlankStringParamAllowNull(this.RoutingType, "routingType");
    }
    //LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Mailbox.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): any {
        debugger;
        if (jsonProperty[XmlElementNames.EmailAddress]) {
            this.Address = jsonProperty[XmlElementNames.EmailAddress];//.ReadAsString(XmlElementNames.EmailAddress);
        }

        if (jsonProperty[XmlElementNames.RoutingType]) {
            this.RoutingType = jsonProperty[XmlElementNames.RoutingType];//.ReadAsString(XmlElementNames.RoutingType);
        }
    }
    ToString(): string {
        if (!this.IsValid) {
            return StringHelper.Empty;
        }
        else if (!StringHelper.IsNullOrEmpty(this.RoutingType)) {
            return this.RoutingType + ":" + this.Address;
        }
        else {
            return this.Address;
        }
    }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean {
        switch (reader.LocalName) {
            case XmlElementNames.EmailAddress:
                this.Address = reader.ReadElementValue();
                return true;
            case XmlElementNames.RoutingType:
                this.RoutingType = reader.ReadElementValue();
                return true;
            default:
                return false;
        }
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.EmailAddress, this.Address);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.RoutingType, this.RoutingType);
    }

    GetSearchString(): string //ISearchStringProvider.GetSearchString
    {
        return this.Address;
    }
}
export = Mailbox;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
