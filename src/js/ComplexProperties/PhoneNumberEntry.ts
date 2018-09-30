import {ExchangeService} from "../Core/ExchangeService";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {PhysicalAddressKey} from "../Enumerations/PhysicalAddressKey";
import {SimplePropertyBag} from "../Core/SimplePropertyBag";
import {ServiceObject} from "../Core/ServiceObjects/ServiceObject";
import {PropertyDefinition} from "../PropertyDefinitions/PropertyDefinition";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";
import {PhoneNumberKey} from "../Enumerations/PhoneNumberKey";
import {DictionaryEntryProperty} from "./DictionaryEntryProperty";
export class PhoneNumberEntry extends DictionaryEntryProperty<PhoneNumberKey> {
    private phoneNumber: string = null;
    get PhoneNumber(): string {
        return this.phoneNumber;
    }
    set PhoneNumber(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.phoneNumber, setValue: (address: string) => { this.phoneNumber = address } }, value);
    }
    constructor();
    constructor(key: PhoneNumberKey, imAddress: string);
    constructor(key: PhoneNumberKey = PhoneNumberKey.AssistantPhone, phoneNumber: string = null) {
        super(key);
        this.keyType= PhoneNumberKey;
        this.phoneNumber = phoneNumber;
    }
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        this.Key = <PhoneNumberKey><any>PhoneNumberKey[jsonProperty[XmlAttributeNames.Key]];
        this.phoneNumber = jsonProperty[XmlElementNames.Entry];//PhoneNumber
    } 
    /**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void { writer.WriteValue(this.PhoneNumber, XmlElementNames.PhoneNumber); }
}