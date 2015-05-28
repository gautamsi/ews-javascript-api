import DictionaryEntryProperty = require("./DictionaryEntryProperty");
import EmailAddressKey = require("../Enumerations/EmailAddressKey");
import EmailAddress = require("./EmailAddress");
import ComplexProperty = require("./ComplexProperty");
import ExchangeService = require("../Core/ExchangeService");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
  class EmailAddressEntry extends DictionaryEntryProperty<EmailAddressKey> {
        EmailAddress: EmailAddress;
        private emailAddress: EmailAddress;
        EmailAddressChanged(complexProperty: ComplexProperty): any { throw new Error("EmailAddressEntry.ts - EmailAddressChanged : Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("EmailAddressEntry.ts - InternalToJson : Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("EmailAddressEntry.ts - LoadFromJson : Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("EmailAddressEntry.ts - ReadAttributesFromXml : Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("EmailAddressEntry.ts - ReadTextValueFromXml : Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("EmailAddressEntry.ts - WriteAttributesToXml : Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("EmailAddressEntry.ts - WriteElementsToXml : Not implemented."); }
    }
export = EmailAddressEntry;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
