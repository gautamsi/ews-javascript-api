import {DictionaryEntryProperty} from "./DictionaryEntryProperty";
import {EmailAddressKey} from "../Enumerations/EmailAddressKey";
import {EmailAddress} from "./EmailAddress";
import {ComplexProperty} from "./ComplexProperty";
import {ExchangeService} from "../Core/ExchangeService";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class EmailAddressEntry extends DictionaryEntryProperty<EmailAddressKey> {
        EmailAddress: EmailAddress;
        private emailAddress: EmailAddress;
        EmailAddressChanged(complexProperty: ComplexProperty): any { throw new Error("EmailAddressEntry.ts - EmailAddressChanged : Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("EmailAddressEntry.ts - InternalToJson : Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("EmailAddressEntry.ts - LoadFromJson : Not implemented."); }
        ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("EmailAddressEntry.ts - ReadAttributesFromXml : Not implemented."); }
        ReadTextValueFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("EmailAddressEntry.ts - ReadTextValueFromXml : Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("EmailAddressEntry.ts - WriteAttributesToXml : Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("EmailAddressEntry.ts - WriteElementsToXml : Not implemented."); }
    }



