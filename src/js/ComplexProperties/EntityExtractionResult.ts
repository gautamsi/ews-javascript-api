

    class EntityExtractionResult extends ComplexProperty {
        Addresses: AddressEntityCollection;
        MeetingSuggestions: MeetingSuggestionCollection;
        TaskSuggestions: TaskSuggestionCollection;
        EmailAddresses: EmailAddressEntityCollection;
        Contacts: ContactEntityCollection;
        Urls: UrlEntityCollection;
        PhoneNumbers: PhoneEntityCollection;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
