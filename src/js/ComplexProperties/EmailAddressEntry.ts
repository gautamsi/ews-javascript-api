import {EmailAddressKey} from "../Enumerations/EmailAddressKey";
import {IRefParam} from "../Interfaces/IRefParam";
import {DictionaryKeyType} from "../Enumerations/DictionaryKeyType";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {MailboxType} from "../Enumerations/MailboxType";
import {EmailAddress} from "./EmailAddress";
import {ComplexProperty} from "./ComplexProperty";
import {ExchangeService} from "../Core/ExchangeService";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {DictionaryEntryProperty} from "./DictionaryEntryProperty";
export class EmailAddressEntry extends DictionaryEntryProperty<EmailAddressKey> {
    private emailAddress: EmailAddress = null;
    get EmailAddress(): EmailAddress {
        return this.emailAddress;
    }
    set EmailAddress(value: EmailAddress) {
        this.SetFieldValue<EmailAddress>({ getValue: () => this.emailAddress, setValue: (address: EmailAddress) => { this.emailAddress = address } }, value);

        if (this.emailAddress != null) {
            this.emailAddress.OnChange.push(this.EmailAddressChanged.bind(this));
        }
    }

    constructor();
    constructor(key: EmailAddressKey, emailAddress: EmailAddress);
    constructor(key: EmailAddressKey = EmailAddressKey.EmailAddress1, emailAddress: EmailAddress = new EmailAddress()) {
        super(key);
        this.keyType = EmailAddressKey;
        this.emailAddress = emailAddress;
        if (this.emailAddress != null) {
            this.emailAddress.OnChange.push(this.EmailAddressChanged.bind(this));
        }
    }
    EmailAddressChanged(complexProperty: ComplexProperty): void { this.Changed(); }
    InternalToJson(service: ExchangeService): any { throw new Error("EmailAddressEntry.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("EmailAddressEntry.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlAttributeNames.Key:
                    this.Key = <EmailAddressKey><any>EmailAddressKey[jsonProperty[key]];
                    break;
                case XmlAttributeNames.Name:
                    this.EmailAddress.Name = jsonProperty[key];
                    break;
                case XmlAttributeNames.RoutingType:
                    this.EmailAddress.RoutingType = jsonProperty[key];
                    break;
                case XmlAttributeNames.MailboxType:
                    this.EmailAddress.MailboxType = MailboxType.FromEwsEnumString(jsonProperty[key]);
                    break;
                case XmlElementNames.EmailAddress:
                    this.EmailAddress.Address = jsonProperty[key];
                    break;
            }
        }
        //ref: ews-javascript-api specific workaround for text node in complexproperty
        if (jsonProperty[XmlElementNames.Entry]) {
            if (this.emailAddress.Address === null) {
                this.emailAddress.Address = jsonProperty[XmlElementNames.Entry];
            }
        }
    }
    // ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("EmailAddressEntry.ts - ReadAttributesFromXml : Not implemented."); }
    // ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("EmailAddressEntry.ts - ReadTextValueFromXml : Not implemented."); }
    /**@internal */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        super.WriteAttributesToXml(writer);

        if (writer.Service.RequestedServerVersion > ExchangeVersion.Exchange2007_SP1) {
            writer.WriteAttributeValue(XmlAttributeNames.Name, this.EmailAddress.Name);
            writer.WriteAttributeValue(XmlAttributeNames.RoutingType, this.EmailAddress.RoutingType);
            if (this.EmailAddress.MailboxType != MailboxType.Unknown) {
                writer.WriteAttributeValue(XmlAttributeNames.MailboxType, MailboxType.ToEwsEnumString(this.EmailAddress.MailboxType));
            }
        }
    }
    /**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void { writer.WriteValue(this.EmailAddress.Address, XmlElementNames.EmailAddress); }
}
