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
        EmailAddressChanged(complexProperty: ComplexProperty): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
export = EmailAddressEntry;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
