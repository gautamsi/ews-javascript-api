import {ExchangeService} from "../Core/ExchangeService";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ImAddressKey} from "../Enumerations/ImAddressKey";
import {DictionaryEntryProperty} from "./DictionaryEntryProperty";
export class ImAddressEntry extends DictionaryEntryProperty<ImAddressKey> {
    private imAddress: string = null;
    get ImAddress(): string {
        return this.imAddress;
    }
    set ImAddress(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.imAddress, setValue: (address: string) => { this.imAddress = address } }, value);
    }
    constructor();
    constructor(key: ImAddressKey, imAddress: string);
    constructor(key: ImAddressKey = ImAddressKey.ImAddress1, imAddress: string = null) {
        super(key);
        this.imAddress = imAddress;
    }

    InternalToJson(service: ExchangeService): any { throw new Error("ImAddressEntry.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("ImAddressEntry.ts - LoadFromJson : Not implemented."); }
    LoadFromFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        this.Key = <ImAddressKey><any>ImAddressKey[jsonProperty[XmlAttributeNames.Key]];
        this.ImAddress = jsonProperty[XmlElementNames.ImAddress];
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void { writer.WriteValue(this.ImAddress, XmlElementNames.ImAddress); }
}