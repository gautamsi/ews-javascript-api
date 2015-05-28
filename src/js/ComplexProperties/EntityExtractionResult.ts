import AddressEntityCollection = require("./AddressEntityCollection");
import MeetingSuggestionCollection = require("./MeetingSuggestionCollection");
import TaskSuggestionCollection = require("./TaskSuggestionCollection");
import EmailAddressEntityCollection = require("./EmailAddressEntityCollection");
import ContactEntityCollection = require("./ContactEntityCollection");
import UrlEntityCollection = require("./UrlEntityCollection");
import PhoneEntityCollection = require("./PhoneEntityCollection");
import ComplexProperty = require("./ComplexProperty");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");


class EntityExtractionResult extends ComplexProperty {
    Addresses: AddressEntityCollection;
    MeetingSuggestions: MeetingSuggestionCollection;
    TaskSuggestions: TaskSuggestionCollection;
    EmailAddresses: EmailAddressEntityCollection;
    Contacts: ContactEntityCollection;
    Urls: UrlEntityCollection;
    PhoneNumbers: PhoneEntityCollection;
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("EntityExtractionResult.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
export = EntityExtractionResult;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
