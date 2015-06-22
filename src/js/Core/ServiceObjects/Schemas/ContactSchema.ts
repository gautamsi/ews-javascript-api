import {XmlElementNames} from "../../XmlElementNames";
import {FileAsMapping} from "../../../Enumerations/FileAsMapping";
import {ContactSource} from "../../../Enumerations/ContactSource";
import {PhysicalAddressIndex} from "../../../Enumerations/PhysicalAddressIndex";
import {StringPropertyDefinition} from "../../../PropertyDefinitions/StringPropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {GenericPropertyDefinition} from "../../../PropertyDefinitions/GenericPropertyDefinition";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {CompleteName} from "../../../ComplexProperties/CompleteName";
import {EmailAddressDictionary} from "../../../ComplexProperties/EmailAddressDictionary";
import {PhysicalAddressDictionary} from "../../../ComplexProperties/PhysicalAddressDictionary";
import {PhoneNumberDictionary} from "../../../ComplexProperties/PhoneNumberDictionary";
import {DateTimePropertyDefinition} from "../../../PropertyDefinitions/DateTimePropertyDefinition";
import {StringList} from "../../../ComplexProperties/StringList";
import {ImAddressDictionary} from "../../../ComplexProperties/ImAddressDictionary";
import {BoolPropertyDefinition} from "../../../PropertyDefinitions/BoolPropertyDefinition";
import {ByteArrayPropertyDefinition} from "../../../PropertyDefinitions/ByteArrayPropertyDefinition";
import {ByteArrayArray} from "../../../ComplexProperties/ByteArrayArray";
import {ContainedPropertyDefinition} from "../../../PropertyDefinitions/ContainedPropertyDefinition";
import {EmailAddress} from "../../../ComplexProperties/EmailAddress";
import {EmailAddressCollection} from "../../../ComplexProperties/EmailAddressCollection";
import {ItemSchema} from "./ItemSchema";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";
import {IndexedPropertyDefinition} from "../../../PropertyDefinitions/IndexedPropertyDefinition";


//module ContactSchema {
module FieldUris {
    export var FileAs: string = "contacts:FileAs";
    export var FileAsMapping: string = "contacts:FileAsMapping";
    export var DisplayName: string = "contacts:DisplayName";
    export var GivenName: string = "contacts:GivenName";
    export var Initials: string = "contacts:Initials";
    export var MiddleName: string = "contacts:MiddleName";
    export var NickName: string = "contacts:Nickname";
    export var CompleteName: string = "contacts:CompleteName";
    export var CompanyName: string = "contacts:CompanyName";
    export var EmailAddress: string = "contacts:EmailAddress";
    export var EmailAddresses: string = "contacts:EmailAddresses";
    export var PhysicalAddresses: string = "contacts:PhysicalAddresses";
    export var PhoneNumber: string = "contacts:PhoneNumber";
    export var PhoneNumbers: string = "contacts:PhoneNumbers";
    export var AssistantName: string = "contacts:AssistantName";
    export var Birthday: string = "contacts:Birthday";
    export var BusinessHomePage: string = "contacts:BusinessHomePage";
    export var Children: string = "contacts:Children";
    export var Companies: string = "contacts:Companies";
    export var ContactSource: string = "contacts:ContactSource";
    export var Department: string = "contacts:Department";
    export var Generation: string = "contacts:Generation";
    export var ImAddress: string = "contacts:ImAddress";
    export var ImAddresses: string = "contacts:ImAddresses";
    export var JobTitle: string = "contacts:JobTitle";
    export var Manager: string = "contacts:Manager";
    export var Mileage: string = "contacts:Mileage";
    export var OfficeLocation: string = "contacts:OfficeLocation";
    export var PhysicalAddressCity: string = "contacts:PhysicalAddress:City";
    export var PhysicalAddressCountryOrRegion: string = "contacts:PhysicalAddress:CountryOrRegion";
    export var PhysicalAddressState: string = "contacts:PhysicalAddress:State";
    export var PhysicalAddressStreet: string = "contacts:PhysicalAddress:Street";
    export var PhysicalAddressPostalCode: string = "contacts:PhysicalAddress:PostalCode";
    export var PostalAddressIndex: string = "contacts:PostalAddressIndex";
    export var Profession: string = "contacts:Profession";
    export var SpouseName: string = "contacts:SpouseName";
    export var Surname: string = "contacts:Surname";
    export var WeddingAnniversary: string = "contacts:WeddingAnniversary";
    export var HasPicture: string = "contacts:HasPicture";
    export var PhoneticFullName: string = "contacts:PhoneticFullName";
    export var PhoneticFirstName: string = "contacts:PhoneticFirstName";
    export var PhoneticLastName: string = "contacts:PhoneticLastName";
    export var Alias: string = "contacts:Alias";
    export var Notes: string = "contacts:Notes";
    export var Photo: string = "contacts:Photo";
    export var UserSMIMECertificate: string = "contacts:UserSMIMECertificate";
    export var MSExchangeCertificate: string = "contacts:MSExchangeCertificate";
    export var DirectoryId: string = "contacts:DirectoryId";
    export var ManagerMailbox: string = "contacts:ManagerMailbox";
    export var DirectReports: string = "contacts:DirectReports";
}
//}
export class ContactSchema extends ItemSchema {
    static FileAs: PropertyDefinition = new StringPropertyDefinition(
        "FileAs", 
        XmlElementNames.FileAs, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.FileAs, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static FileAsMapping: PropertyDefinition = new GenericPropertyDefinition<FileAsMapping>(
        "FileAsMapping", 
        XmlElementNames.FileAsMapping, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.FileAsMapping, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static DisplayName: PropertyDefinition = new StringPropertyDefinition(
        "DisplayName", 
        XmlElementNames.DisplayName, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.DisplayName, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static GivenName: PropertyDefinition = new StringPropertyDefinition(
        "GivenName", 
        XmlElementNames.GivenName, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.GivenName, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static Initials: PropertyDefinition = new StringPropertyDefinition(
        "Initials", 
        XmlElementNames.Initials, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Initials, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static MiddleName: PropertyDefinition = new StringPropertyDefinition(
        "MiddleName", 
        XmlElementNames.MiddleName, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.MiddleName, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static NickName: PropertyDefinition = new StringPropertyDefinition(
        "Nickname", 
        XmlElementNames.NickName,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.NickName, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static CompleteName: PropertyDefinition = new ComplexPropertyDefinition<CompleteName>(
        "CompleteName", 
        XmlElementNames.CompleteName, 
        ExchangeVersion.Exchange2007_SP1, 
        FieldUris.CompleteName, 
        PropertyDefinitionFlags.CanFind, 
        () => { return new CompleteName(); }
            );
    
    static CompanyName: PropertyDefinition = new StringPropertyDefinition(
        "CompanyName", 
        XmlElementNames.CompanyName, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.CompanyName, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static EmailAddresses: PropertyDefinition = new ComplexPropertyDefinition<EmailAddressDictionary>(
        "EmailAddresses", 
        XmlElementNames.EmailAddresses, 
        ExchangeVersion.Exchange2007_SP1, 
        FieldUris.EmailAddresses, 
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate, 
        () => { return new EmailAddressDictionary(); }
            );
    static PhysicalAddresses: PropertyDefinition = new ComplexPropertyDefinition<PhysicalAddressDictionary>(
        "PhysicalAddresses", 
        XmlElementNames.PhysicalAddresses, 
        ExchangeVersion.Exchange2007_SP1, 
        FieldUris.PhysicalAddresses, 
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate, 
        () => { return new PhysicalAddressDictionary(); }
            );
    
    static PhoneNumbers: PropertyDefinition = new ComplexPropertyDefinition<PhoneNumberDictionary>(
        "PhoneNumbers", 
        XmlElementNames.PhoneNumbers, 
        ExchangeVersion.Exchange2007_SP1, 
        FieldUris.PhoneNumbers, 
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate, 
        () => { return new PhoneNumberDictionary(); }
            );
    
    static AssistantName: PropertyDefinition = new StringPropertyDefinition(
        "AssistantName", 
        XmlElementNames.AssistantName, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.AssistantName, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static Birthday: PropertyDefinition = new DateTimePropertyDefinition(
        "Birthday", 
        XmlElementNames.Birthday, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Birthday, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static BusinessHomePage: PropertyDefinition = new StringPropertyDefinition(
        "BusinessHomePage", 
        XmlElementNames.BusinessHomePage, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.BusinessHomePage, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static Children: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "Children", 
        XmlElementNames.Children, 
        ExchangeVersion.Exchange2007_SP1, 
        FieldUris.Children, 
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind, 
        () => { return new StringList(); }
        );
    
    static Companies: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "Companies", 
        XmlElementNames.Companies, 
        ExchangeVersion.Exchange2007_SP1, 
        FieldUris.Companies, 
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind, 
        () => { return new StringList(); }
        );
    
    static ContactSource: PropertyDefinition = new GenericPropertyDefinition<ContactSource>(
        "ContactSource", 
        XmlElementNames.ContactSource, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ContactSource, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static Department: PropertyDefinition = new StringPropertyDefinition(
        "Department", 
        XmlElementNames.Department, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Department, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static Generation: PropertyDefinition = new StringPropertyDefinition(
        "Generation", 
        XmlElementNames.Generation, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Generation, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static ImAddresses: PropertyDefinition = new ComplexPropertyDefinition<ImAddressDictionary>(
        "ImAddresses", 
        XmlElementNames.ImAddresses, 
        ExchangeVersion.Exchange2007_SP1, 
        FieldUris.ImAddresses, 
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate, 
        () => { return new ImAddressDictionary(); }
        );
    
    static JobTitle: PropertyDefinition = new StringPropertyDefinition(
        "JobTitle", 
        XmlElementNames.JobTitle, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.JobTitle, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static Manager: PropertyDefinition = new StringPropertyDefinition(
        "Manager", 
        XmlElementNames.Manager, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Manager, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static Mileage: PropertyDefinition = new StringPropertyDefinition(
        "Mileage", 
        XmlElementNames.Mileage, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Mileage, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static OfficeLocation: PropertyDefinition = new StringPropertyDefinition(
        "OfficeLocation", 
        XmlElementNames.OfficeLocation, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.OfficeLocation, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static PostalAddressIndex: PropertyDefinition = new GenericPropertyDefinition<PhysicalAddressIndex>(
        "PostalAddressIndex", 
        XmlElementNames.PostalAddressIndex, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.PostalAddressIndex, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static Profession: PropertyDefinition = new StringPropertyDefinition(
        "Profession", 
        XmlElementNames.Profession, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Profession, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static SpouseName: PropertyDefinition = new StringPropertyDefinition(
        "SpouseName", 
        XmlElementNames.SpouseName, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.SpouseName, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static Surname: PropertyDefinition = new StringPropertyDefinition(
        "Surname", 
        XmlElementNames.Surname, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Surname, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static WeddingAnniversary: PropertyDefinition = new DateTimePropertyDefinition(
        "WeddingAnniversary", 
        XmlElementNames.WeddingAnniversary, 
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.WeddingAnniversary, 
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind 
        );
    
    static HasPicture: PropertyDefinition = new BoolPropertyDefinition(
        "HasPicture", 
        XmlElementNames.HasPicture, 
        ExchangeVersion.Exchange2010,
        FieldUris.HasPicture, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static PhoneticFullName: PropertyDefinition = new StringPropertyDefinition(
        "PhoneticFullName", 
        XmlElementNames.PhoneticFullName, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.PhoneticFullName, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static PhoneticFirstName: PropertyDefinition = new StringPropertyDefinition(
        "PhoneticFirstName", 
        XmlElementNames.PhoneticFirstName, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.PhoneticFirstName, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static PhoneticLastName: PropertyDefinition = new StringPropertyDefinition(
        "PhoneticLastName", 
        XmlElementNames.PhoneticLastName, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.PhoneticLastName, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static Alias: PropertyDefinition = new StringPropertyDefinition(
        "Alias", 
        XmlElementNames.Alias, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.Alias, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static Notes: PropertyDefinition = new StringPropertyDefinition(
        "Notes", 
        XmlElementNames.Notes, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.Notes, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static Photo: PropertyDefinition = new ByteArrayPropertyDefinition(
        "Photo", 
        XmlElementNames.Photo, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.Photo, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static UserSMIMECertificate: PropertyDefinition = new ComplexPropertyDefinition<ByteArrayArray>(
        "UserSMIMECertificate", 
        XmlElementNames.UserSMIMECertificate, 
        ExchangeVersion.Exchange2010_SP1, 
        FieldUris.UserSMIMECertificate, 
        PropertyDefinitionFlags.CanFind, 
        () => { return new ByteArrayArray(); }
        );
    
    static MSExchangeCertificate: PropertyDefinition = new ComplexPropertyDefinition<ByteArrayArray>(
        "MSExchangeCertificate", 
        XmlElementNames.MSExchangeCertificate, 
        ExchangeVersion.Exchange2010_SP1, 
        FieldUris.MSExchangeCertificate, 
        PropertyDefinitionFlags.CanFind, 
        () => { return new ByteArrayArray(); }
        );
    
    static DirectoryId: PropertyDefinition = new StringPropertyDefinition(
        "DirectoryId", 
        XmlElementNames.DirectoryId, 
        ExchangeVersion.Exchange2010_SP1,
        FieldUris.DirectoryId, 
        PropertyDefinitionFlags.CanFind 
        );
    
    static ManagerMailbox: PropertyDefinition = new ContainedPropertyDefinition<EmailAddress>(
        "ManagerMailbox", 
        XmlElementNames.ManagerMailbox, 
        XmlElementNames.Mailbox, 
        ExchangeVersion.Exchange2010_SP1, 
        FieldUris.ManagerMailbox, 
        PropertyDefinitionFlags.CanFind, 
        () => { return new EmailAddress(); }
        );
    
    static DirectReports: PropertyDefinition = new ComplexPropertyDefinition<EmailAddressCollection>(
        "DirectReports", 
        XmlElementNames.DirectReports, 
        ExchangeVersion.Exchange2010_SP1, 
        FieldUris.DirectReports, 
        PropertyDefinitionFlags.CanFind, 
        () => { return new EmailAddressCollection(); }
        );
    
    static EmailAddress1: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.EmailAddress, 
        "EmailAddress1"
        );
    
    static EmailAddress2: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.EmailAddress, 
        "EmailAddress2"
        );
    
    static EmailAddress3: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.EmailAddress, 
        "EmailAddress3"
        );
    
    static ImAddress1: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.ImAddress, 
        "ImAddress1"
        );
    
    static ImAddress2: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.ImAddress, 
        "ImAddress2"
        );
    
    static ImAddress3: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.ImAddress, 
        "ImAddress3"
        );
    
    static AssistantPhone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "AssistantPhone"
        );
    
    static BusinessFax: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "BusinessFax"
        );
    
    static BusinessPhone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "BusinessPhone"
        );
    
    static BusinessPhone2: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "BusinessPhone2"
        );
    
    static Callback: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "Callback"
        );
    
    static CarPhone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "CarPhone"
        );
    
    static CompanyMainPhone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "CompanyMainPhone"
        );
    
    static HomeFax: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "HomeFax"
        );
    
    static HomePhone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "HomePhone"
        );
    
    static HomePhone2: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "HomePhone2"
        );
    
    static Isdn: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "Isdn"
        );
    
    static MobilePhone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "MobilePhone"
        );
    
    static OtherFax: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "OtherFax"
        );
    
    static OtherTelephone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "OtherTelephone"
        );
    
    static Pager: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "Pager"
        );
    
    static PrimaryPhone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "PrimaryPhone"
        );
    
    static RadioPhone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "RadioPhone"
        );
    
    static Telex: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "Telex"
        );
    
    static TtyTddPhone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber, 
        "TtyTddPhone"
        );
    
    static BusinessAddressStreet: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressStreet, 
        "Business"
        );
    
    static BusinessAddressCity: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressCity, 
        "Business"
        );
    
    static BusinessAddressState: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressState, 
        "Business"
        );
    
    static BusinessAddressCountryOrRegion: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressCountryOrRegion, 
        "Business"
        );
    
    static BusinessAddressPostalCode: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressPostalCode, 
        "Business"
        );
    
    static HomeAddressStreet: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressStreet, 
        "Home"
        );
    
    static HomeAddressCity: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressCity, 
        "Home"
        );
    
    static HomeAddressState: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressState, 
        "Home"
        );
    
    static HomeAddressCountryOrRegion: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressCountryOrRegion, 
        "Home"
        );
    
    static HomeAddressPostalCode: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressPostalCode, 
        "Home"
        );
    
    static OtherAddressStreet: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressStreet, 
        "Other"
        );
    
    static OtherAddressCity: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressCity, 
        "Other"
        );
    
    static OtherAddressState: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressState, 
        "Other"
        );
    
    static OtherAddressCountryOrRegion: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressCountryOrRegion, 
        "Other"
        );
    
    static OtherAddressPostalCode: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressPostalCode, 
        "Other"
        );
    
    static Instance: ContactSchema = new ContactSchema();
    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(ContactSchema.FileAs);
        super.RegisterProperty(ContactSchema.FileAsMapping);
        super.RegisterProperty(ContactSchema.DisplayName);
        super.RegisterProperty(ContactSchema.GivenName);
        super.RegisterProperty(ContactSchema.Initials);
        super.RegisterProperty(ContactSchema.MiddleName);
        super.RegisterProperty(ContactSchema.NickName);
        super.RegisterProperty(ContactSchema.CompleteName);
        super.RegisterProperty(ContactSchema.CompanyName);
        super.RegisterProperty(ContactSchema.EmailAddresses);
        super.RegisterProperty(ContactSchema.PhysicalAddresses);
        super.RegisterProperty(ContactSchema.PhoneNumbers);
        super.RegisterProperty(ContactSchema.AssistantName);
        super.RegisterProperty(ContactSchema.Birthday);
        super.RegisterProperty(ContactSchema.BusinessHomePage);
        super.RegisterProperty(ContactSchema.Children);
        super.RegisterProperty(ContactSchema.Companies);
        super.RegisterProperty(ContactSchema.ContactSource);
        super.RegisterProperty(ContactSchema.Department);
        super.RegisterProperty(ContactSchema.Generation);
        super.RegisterProperty(ContactSchema.ImAddresses);
        super.RegisterProperty(ContactSchema.JobTitle);
        super.RegisterProperty(ContactSchema.Manager);
        super.RegisterProperty(ContactSchema.Mileage);
        super.RegisterProperty(ContactSchema.OfficeLocation);
        super.RegisterProperty(ContactSchema.PostalAddressIndex);
        super.RegisterProperty(ContactSchema.Profession);
        super.RegisterProperty(ContactSchema.SpouseName);
        super.RegisterProperty(ContactSchema.Surname);
        super.RegisterProperty(ContactSchema.WeddingAnniversary);
        super.RegisterProperty(ContactSchema.HasPicture);
        super.RegisterProperty(ContactSchema.PhoneticFullName);
        super.RegisterProperty(ContactSchema.PhoneticFirstName);
        super.RegisterProperty(ContactSchema.PhoneticLastName);
        super.RegisterProperty(ContactSchema.Alias);
        super.RegisterProperty(ContactSchema.Notes);
        super.RegisterProperty(ContactSchema.Photo);
        super.RegisterProperty(ContactSchema.UserSMIMECertificate);
        super.RegisterProperty(ContactSchema.MSExchangeCertificate);
        super.RegisterProperty(ContactSchema.DirectoryId);
        super.RegisterProperty(ContactSchema.ManagerMailbox);
        super.RegisterProperty(ContactSchema.DirectReports);
        super.RegisterIndexedProperty(ContactSchema.EmailAddress1);
        super.RegisterIndexedProperty(ContactSchema.EmailAddress2);
        super.RegisterIndexedProperty(ContactSchema.EmailAddress3);
        super.RegisterIndexedProperty(ContactSchema.ImAddress1);
        super.RegisterIndexedProperty(ContactSchema.ImAddress2);
        super.RegisterIndexedProperty(ContactSchema.ImAddress3);
        super.RegisterIndexedProperty(ContactSchema.AssistantPhone);
        super.RegisterIndexedProperty(ContactSchema.BusinessFax);
        super.RegisterIndexedProperty(ContactSchema.BusinessPhone);
        super.RegisterIndexedProperty(ContactSchema.BusinessPhone2);
        super.RegisterIndexedProperty(ContactSchema.Callback);
        super.RegisterIndexedProperty(ContactSchema.CarPhone);
        super.RegisterIndexedProperty(ContactSchema.CompanyMainPhone);
        super.RegisterIndexedProperty(ContactSchema.HomeFax);
        super.RegisterIndexedProperty(ContactSchema.HomePhone);
        super.RegisterIndexedProperty(ContactSchema.HomePhone2);
        super.RegisterIndexedProperty(ContactSchema.Isdn);
        super.RegisterIndexedProperty(ContactSchema.MobilePhone);
        super.RegisterIndexedProperty(ContactSchema.OtherFax);
        super.RegisterIndexedProperty(ContactSchema.OtherTelephone);
        super.RegisterIndexedProperty(ContactSchema.Pager);
        super.RegisterIndexedProperty(ContactSchema.PrimaryPhone);
        super.RegisterIndexedProperty(ContactSchema.RadioPhone);
        super.RegisterIndexedProperty(ContactSchema.Telex);
        super.RegisterIndexedProperty(ContactSchema.TtyTddPhone);
        super.RegisterIndexedProperty(ContactSchema.BusinessAddressStreet);
        super.RegisterIndexedProperty(ContactSchema.BusinessAddressCity);
        super.RegisterIndexedProperty(ContactSchema.BusinessAddressState);
        super.RegisterIndexedProperty(ContactSchema.BusinessAddressCountryOrRegion);
        super.RegisterIndexedProperty(ContactSchema.BusinessAddressPostalCode);
        super.RegisterIndexedProperty(ContactSchema.HomeAddressStreet);
        super.RegisterIndexedProperty(ContactSchema.HomeAddressCity);
        super.RegisterIndexedProperty(ContactSchema.HomeAddressState);
        super.RegisterIndexedProperty(ContactSchema.HomeAddressCountryOrRegion);
        super.RegisterIndexedProperty(ContactSchema.HomeAddressPostalCode);
        super.RegisterIndexedProperty(ContactSchema.OtherAddressStreet);
        super.RegisterIndexedProperty(ContactSchema.OtherAddressCity);
        super.RegisterIndexedProperty(ContactSchema.OtherAddressState);
        super.RegisterIndexedProperty(ContactSchema.OtherAddressCountryOrRegion);
        super.RegisterIndexedProperty(ContactSchema.OtherAddressPostalCode);
    }
}