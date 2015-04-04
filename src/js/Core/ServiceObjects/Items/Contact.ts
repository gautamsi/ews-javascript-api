
import Item = require("./Item");
class Contact extends Item {
    constructor(obj: any) { super(obj); }
    //////private static ContactPictureName: string = "ContactPicture.jpg";
    //////FileAs: string;
    //////FileAsMapping: FileAsMapping;
    //////DisplayName: string;
    //////GivenName: string;
    //////Initials: string;
    //////MiddleName: string;
    //////NickName: string;
    //////CompleteName: CompleteName;
    //////CompanyName: string;
    //////EmailAddresses: EmailAddressDictionary;
    //////PhysicalAddresses: PhysicalAddressDictionary;
    //////PhoneNumbers: PhoneNumberDictionary;
    //////AssistantName: string;
    //////Birthday: Date;
    //////BusinessHomePage: string;
    //////Children: StringList;
    //////Companies: StringList;
    //////ContactSource: ContactSource;
    //////Department: string;
    //////Generation: string;
    //////ImAddresses: ImAddressDictionary;
    //////JobTitle: string;
    //////Manager: string;
    //////Mileage: string;
    //////OfficeLocation: string;
    //////PostalAddressIndex: PhysicalAddressIndex;
    //////Profession: string;
    //////SpouseName: string;
    //////Surname: string;
    //////WeddingAnniversary: Date;
    //////HasPicture: boolean;
    //////PhoneticFullName: string;
    //////PhoneticFirstName: string;
    //////PhoneticLastName: string;
    //////Alias: string;
    //////Notes: string;
    //////DirectoryPhoto: System.Byte[];
    //////UserSMIMECertificate: System.Byte[][];
    //////MSExchangeCertificate: System.Byte[][];
    //////DirectoryId: string;
    //////ManagerMailbox: EmailAddress;
    //////DirectReports: EmailAddressCollection;
    //////Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Contact { throw new Error("Not implemented."); }
    //////Bind(service: ExchangeService, id: ItemId): Contact { throw new Error("Not implemented."); }
    //////GetContactPictureAttachment(): FileAttachment { throw new Error("Not implemented."); }
    //////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    //////GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
    //////InternalRemoveContactPicture(): any { throw new Error("Not implemented."); }
    //////RemoveContactPicture(): any { throw new Error("Not implemented."); }
    //////SetContactPicture(content: System.Byte[]): any { throw new Error("Not implemented."); }
    //////SetContactPicture(contentStream: System.IO.Stream): any { throw new Error("Not implemented."); }
    //////SetContactPicture(fileName: string): any { throw new Error("Not implemented."); }
    //////Validate(): any { throw new Error("Not implemented."); }
}

export = Contact;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;