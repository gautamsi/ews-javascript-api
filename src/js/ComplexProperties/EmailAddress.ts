import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {ItemId} from "./ItemId";
import {IRefParam} from "../interfaces/IRefParam";
import {MailboxType, MailboxTypeParser} from "../Enumerations/MailboxType";
import {XmlElementNames} from "../Core/XmlElementNames";
import {StringHelper} from "../ExtensionMethods";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ComplexProperty} from "./ComplexProperty";
export class EmailAddress extends ComplexProperty {
    static SmtpRoutingType: string = "SMTP";
    private name: string = null;
    private address: string = null;
    private routingType: string = null;
    private mailboxType: MailboxType = null;
    private id: ItemId = null;
    set Name(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.name, setValue: (updateValue) => { this.name = updateValue } }, value);
    }
    get Name(): string {
        return this.name;
    }
    set Address(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.address, setValue: (updateValue) => { this.address = updateValue } }, value);
    }
    get Address(): string {
        return this.address;
    }
    set RoutingType(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.routingType, setValue: (updateValue) => { this.routingType = updateValue } }, value);
    }
    get RoutingType(): string {
        return this.routingType;
    }
    set MailboxType(value: MailboxType) {
        this.SetFieldValue<MailboxType>({ getValue: () => this.mailboxType, setValue: (updateValue) => { this.mailboxType = updateValue } }, value);
    }
    get MailboxType(): MailboxType {
        return this.mailboxType;
    }
    set Id(value: ItemId) {
        this.SetFieldValue<ItemId>({ getValue: () => this.id, setValue: (updateValue) => { this.id = updateValue } }, value);
    }
    get Id(): ItemId {
        return this.id;
    }

    InternalToJson(service: ExchangeService): any { throw new Error("EmailAddress.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("EmailAddress.ts - LoadFromJson : Not implemented."); }
    ToString(): string {
        var addressPart: string = null;

        if (StringHelper.IsNullOrEmpty(this.Address)) {
            return StringHelper.Empty;
        }

        if (!StringHelper.IsNullOrEmpty(this.RoutingType)) {
            addressPart = this.RoutingType + ":" + this.Address;
        }
        else {
            addressPart = this.Address;
        }

        if (!StringHelper.IsNullOrEmpty(this.Name)) {
            return this.Name + " <" + addressPart + ">";
        }
        else {
            return addressPart;
        }
    }
    ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("EmailAddress.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    //todo: implement UpdateFromXmlJsObject
    
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {//xmlElementName: string, xmlNamespace?: XmlNamespace
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames.Name:
                    this.name = jsonProperty[key];//.ReadAsString(key);
                    break;
                case XmlElementNames.EmailAddress:
                    this.address = jsonProperty[key];//.ReadAsString(key);
                    break;
                case XmlElementNames.RoutingType:
                    this.routingType = jsonProperty[key];//.ReadAsString(key);
                    break;
                case XmlElementNames.MailboxType:
                    this.mailboxType = MailboxTypeParser.FromString(jsonProperty[key]) //.ReadEnumValue<MailboxType>(key);
                    break;
                case XmlElementNames.ItemId:
                    this.id = new ItemId();
                    this.id.LoadFromXmlJsObject(jsonProperty[key], service);
                    break;
                default:
                    break;
            }
        }
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Name, this.Name);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.EmailAddress, this.Address);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.RoutingType, this.RoutingType);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.MailboxType, MailboxTypeParser.ToString(this.MailboxType));

        if (this.Id != null) {
            this.Id.WriteToXml(writer);//, XmlElementNames.ItemId);
        }
    }
}

