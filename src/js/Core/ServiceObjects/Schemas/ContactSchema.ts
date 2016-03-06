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
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";
import {IndexedPropertyDefinition} from "../../../PropertyDefinitions/IndexedPropertyDefinition";
import {Schemas} from "./Schemas";

import {ItemSchema} from "./ItemSchema";

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

export class ContactSchema extends ItemSchema {
    public FileAs: PropertyDefinition;
    public FileAsMapping: PropertyDefinition;
    public DisplayName: PropertyDefinition;
    public GivenName: PropertyDefinition;
    public Initials: PropertyDefinition;
    public MiddleName: PropertyDefinition;
    public NickName: PropertyDefinition;
    public CompleteName: PropertyDefinition;
    public CompanyName: PropertyDefinition;
    public EmailAddresses: PropertyDefinition;
    public PhysicalAddresses: PropertyDefinition;
    public PhoneNumbers: PropertyDefinition;
    public AssistantName: PropertyDefinition;
    public Birthday: PropertyDefinition;
    public BusinessHomePage: PropertyDefinition;
    public Children: PropertyDefinition;
    public Companies: PropertyDefinition;
    public ContactSource: PropertyDefinition;
    public Department: PropertyDefinition;
    public Generation: PropertyDefinition;
    public ImAddresses: PropertyDefinition;
    public JobTitle: PropertyDefinition;
    public Manager: PropertyDefinition;
    public Mileage: PropertyDefinition;
    public OfficeLocation: PropertyDefinition;
    public PostalAddressIndex: PropertyDefinition;
    public Profession: PropertyDefinition;
    public SpouseName: PropertyDefinition;
    public Surname: PropertyDefinition;
    public WeddingAnniversary: PropertyDefinition;
    public HasPicture: PropertyDefinition;
    public PhoneticFullName: PropertyDefinition;
    public PhoneticFirstName: PropertyDefinition;
    public PhoneticLastName: PropertyDefinition;
    public Alias: PropertyDefinition;
    public Notes: PropertyDefinition;
    public Photo: PropertyDefinition;
    public UserSMIMECertificate: PropertyDefinition;
    public MSExchangeCertificate: PropertyDefinition;
    public DirectoryId: PropertyDefinition;
    public ManagerMailbox: PropertyDefinition;
    public DirectReports: PropertyDefinition;
    public EmailAddress1: IndexedPropertyDefinition;
    public EmailAddress2: IndexedPropertyDefinition;
    public EmailAddress3: IndexedPropertyDefinition;
    public ImAddress1: IndexedPropertyDefinition;
    public ImAddress2: IndexedPropertyDefinition;
    public ImAddress3: IndexedPropertyDefinition;
    public AssistantPhone: IndexedPropertyDefinition;
    public BusinessFax: IndexedPropertyDefinition;
    public BusinessPhone: IndexedPropertyDefinition;
    public BusinessPhone2: IndexedPropertyDefinition;
    public Callback: IndexedPropertyDefinition;
    public CarPhone: IndexedPropertyDefinition;
    public CompanyMainPhone: IndexedPropertyDefinition;
    public HomeFax: IndexedPropertyDefinition;
    public HomePhone: IndexedPropertyDefinition;
    public HomePhone2: IndexedPropertyDefinition;
    public Isdn: IndexedPropertyDefinition;
    public MobilePhone: IndexedPropertyDefinition;
    public OtherFax: IndexedPropertyDefinition;
    public OtherTelephone: IndexedPropertyDefinition;
    public Pager: IndexedPropertyDefinition;
    public PrimaryPhone: IndexedPropertyDefinition;
    public RadioPhone: IndexedPropertyDefinition;
    public Telex: IndexedPropertyDefinition;
    public TtyTddPhone: IndexedPropertyDefinition;
    public BusinessAddressStreet: IndexedPropertyDefinition;
    public BusinessAddressCity: IndexedPropertyDefinition;
    public BusinessAddressState: IndexedPropertyDefinition;
    public BusinessAddressCountryOrRegion: IndexedPropertyDefinition;
    public BusinessAddressPostalCode: IndexedPropertyDefinition;
    public HomeAddressStreet: IndexedPropertyDefinition;
    public HomeAddressCity: IndexedPropertyDefinition;
    public HomeAddressState: IndexedPropertyDefinition;
    public HomeAddressCountryOrRegion: IndexedPropertyDefinition;
    public HomeAddressPostalCode: IndexedPropertyDefinition;
    public OtherAddressStreet: IndexedPropertyDefinition;
    public OtherAddressCity: IndexedPropertyDefinition;
    public OtherAddressState: IndexedPropertyDefinition;
    public OtherAddressCountryOrRegion: IndexedPropertyDefinition;
    public OtherAddressPostalCode: IndexedPropertyDefinition;

    static Instance: ContactSchema = new ContactSchema();

    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(this.FileAs);
        super.RegisterProperty(this.FileAsMapping);
        super.RegisterProperty(this.DisplayName);
        super.RegisterProperty(this.GivenName);
        super.RegisterProperty(this.Initials);
        super.RegisterProperty(this.MiddleName);
        super.RegisterProperty(this.NickName);
        super.RegisterProperty(this.CompleteName);
        super.RegisterProperty(this.CompanyName);
        super.RegisterProperty(this.EmailAddresses);
        super.RegisterProperty(this.PhysicalAddresses);
        super.RegisterProperty(this.PhoneNumbers);
        super.RegisterProperty(this.AssistantName);
        super.RegisterProperty(this.Birthday);
        super.RegisterProperty(this.BusinessHomePage);
        super.RegisterProperty(this.Children);
        super.RegisterProperty(this.Companies);
        super.RegisterProperty(this.ContactSource);
        super.RegisterProperty(this.Department);
        super.RegisterProperty(this.Generation);
        super.RegisterProperty(this.ImAddresses);
        super.RegisterProperty(this.JobTitle);
        super.RegisterProperty(this.Manager);
        super.RegisterProperty(this.Mileage);
        super.RegisterProperty(this.OfficeLocation);
        super.RegisterProperty(this.PostalAddressIndex);
        super.RegisterProperty(this.Profession);
        super.RegisterProperty(this.SpouseName);
        super.RegisterProperty(this.Surname);
        super.RegisterProperty(this.WeddingAnniversary);
        super.RegisterProperty(this.HasPicture);
        super.RegisterProperty(this.PhoneticFullName);
        super.RegisterProperty(this.PhoneticFirstName);
        super.RegisterProperty(this.PhoneticLastName);
        super.RegisterProperty(this.Alias);
        super.RegisterProperty(this.Notes);
        super.RegisterProperty(this.Photo);
        super.RegisterProperty(this.UserSMIMECertificate);
        super.RegisterProperty(this.MSExchangeCertificate);
        super.RegisterProperty(this.DirectoryId);
        super.RegisterProperty(this.ManagerMailbox);
        super.RegisterProperty(this.DirectReports);
        super.RegisterIndexedProperty(this.EmailAddress1);
        super.RegisterIndexedProperty(this.EmailAddress2);
        super.RegisterIndexedProperty(this.EmailAddress3);
        super.RegisterIndexedProperty(this.ImAddress1);
        super.RegisterIndexedProperty(this.ImAddress2);
        super.RegisterIndexedProperty(this.ImAddress3);
        super.RegisterIndexedProperty(this.AssistantPhone);
        super.RegisterIndexedProperty(this.BusinessFax);
        super.RegisterIndexedProperty(this.BusinessPhone);
        super.RegisterIndexedProperty(this.BusinessPhone2);
        super.RegisterIndexedProperty(this.Callback);
        super.RegisterIndexedProperty(this.CarPhone);
        super.RegisterIndexedProperty(this.CompanyMainPhone);
        super.RegisterIndexedProperty(this.HomeFax);
        super.RegisterIndexedProperty(this.HomePhone);
        super.RegisterIndexedProperty(this.HomePhone2);
        super.RegisterIndexedProperty(this.Isdn);
        super.RegisterIndexedProperty(this.MobilePhone);
        super.RegisterIndexedProperty(this.OtherFax);
        super.RegisterIndexedProperty(this.OtherTelephone);
        super.RegisterIndexedProperty(this.Pager);
        super.RegisterIndexedProperty(this.PrimaryPhone);
        super.RegisterIndexedProperty(this.RadioPhone);
        super.RegisterIndexedProperty(this.Telex);
        super.RegisterIndexedProperty(this.TtyTddPhone);
        super.RegisterIndexedProperty(this.BusinessAddressStreet);
        super.RegisterIndexedProperty(this.BusinessAddressCity);
        super.RegisterIndexedProperty(this.BusinessAddressState);
        super.RegisterIndexedProperty(this.BusinessAddressCountryOrRegion);
        super.RegisterIndexedProperty(this.BusinessAddressPostalCode);
        super.RegisterIndexedProperty(this.HomeAddressStreet);
        super.RegisterIndexedProperty(this.HomeAddressCity);
        super.RegisterIndexedProperty(this.HomeAddressState);
        super.RegisterIndexedProperty(this.HomeAddressCountryOrRegion);
        super.RegisterIndexedProperty(this.HomeAddressPostalCode);
        super.RegisterIndexedProperty(this.OtherAddressStreet);
        super.RegisterIndexedProperty(this.OtherAddressCity);
        super.RegisterIndexedProperty(this.OtherAddressState);
        super.RegisterIndexedProperty(this.OtherAddressCountryOrRegion);
        super.RegisterIndexedProperty(this.OtherAddressPostalCode);
    }

    protected init() {
        super.init();
        this.FileAs = new StringPropertyDefinition(
            "FileAs",
            XmlElementNames.FileAs,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.FileAs,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.FileAsMapping = new GenericPropertyDefinition<FileAsMapping>(
            "FileAsMapping",
            XmlElementNames.FileAsMapping,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.FileAsMapping,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.DisplayName = new StringPropertyDefinition(
            "DisplayName",
            XmlElementNames.DisplayName,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.DisplayName,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.GivenName = new StringPropertyDefinition(
            "GivenName",
            XmlElementNames.GivenName,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.GivenName,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.Initials = new StringPropertyDefinition(
            "Initials",
            XmlElementNames.Initials,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Initials,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.MiddleName = new StringPropertyDefinition(
            "MiddleName",
            XmlElementNames.MiddleName,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.MiddleName,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.NickName = new StringPropertyDefinition(
            "Nickname",
            XmlElementNames.NickName,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.NickName,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.CompleteName = new ComplexPropertyDefinition<CompleteName>(
            "CompleteName",
            XmlElementNames.CompleteName,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.CompleteName,
            PropertyDefinitionFlags.CanFind,
            () => { return new CompleteName(); }
        );

        this.CompanyName = new StringPropertyDefinition(
            "CompanyName",
            XmlElementNames.CompanyName,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.CompanyName,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.EmailAddresses = new ComplexPropertyDefinition<EmailAddressDictionary>(
            "EmailAddresses",
            XmlElementNames.EmailAddresses,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.EmailAddresses,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
            () => { return new EmailAddressDictionary(); }
        );
        this.PhysicalAddresses = new ComplexPropertyDefinition<PhysicalAddressDictionary>(
            "PhysicalAddresses",
            XmlElementNames.PhysicalAddresses,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.PhysicalAddresses,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
            () => { return new PhysicalAddressDictionary(); }
        );

        this.PhoneNumbers = new ComplexPropertyDefinition<PhoneNumberDictionary>(
            "PhoneNumbers",
            XmlElementNames.PhoneNumbers,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.PhoneNumbers,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
            () => { return new PhoneNumberDictionary(); }
        );

        this.AssistantName = new StringPropertyDefinition(
            "AssistantName",
            XmlElementNames.AssistantName,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.AssistantName,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.Birthday = new DateTimePropertyDefinition(
            "Birthday",
            XmlElementNames.Birthday,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Birthday,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.BusinessHomePage = new StringPropertyDefinition(
            "BusinessHomePage",
            XmlElementNames.BusinessHomePage,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.BusinessHomePage,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.Children = new ComplexPropertyDefinition<StringList>(
            "Children",
            XmlElementNames.Children,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Children,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            () => { return new StringList(); }
        );

        this.Companies = new ComplexPropertyDefinition<StringList>(
            "Companies",
            XmlElementNames.Companies,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Companies,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            () => { return new StringList(); }
        );

        this.ContactSource = new GenericPropertyDefinition<ContactSource>(
            "ContactSource",
            XmlElementNames.ContactSource,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ContactSource,
            PropertyDefinitionFlags.CanFind
        );

        this.Department = new StringPropertyDefinition(
            "Department",
            XmlElementNames.Department,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Department,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.Generation = new StringPropertyDefinition(
            "Generation",
            XmlElementNames.Generation,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Generation,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.ImAddresses = new ComplexPropertyDefinition<ImAddressDictionary>(
            "ImAddresses",
            XmlElementNames.ImAddresses,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ImAddresses,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
            () => { return new ImAddressDictionary(); }
        );

        this.JobTitle = new StringPropertyDefinition(
            "JobTitle",
            XmlElementNames.JobTitle,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.JobTitle,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.Manager = new StringPropertyDefinition(
            "Manager",
            XmlElementNames.Manager,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Manager,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.Mileage = new StringPropertyDefinition(
            "Mileage",
            XmlElementNames.Mileage,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Mileage,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.OfficeLocation = new StringPropertyDefinition(
            "OfficeLocation",
            XmlElementNames.OfficeLocation,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.OfficeLocation,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.PostalAddressIndex = new GenericPropertyDefinition<PhysicalAddressIndex>(
            "PostalAddressIndex",
            XmlElementNames.PostalAddressIndex,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.PostalAddressIndex,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.Profession = new StringPropertyDefinition(
            "Profession",
            XmlElementNames.Profession,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Profession,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.SpouseName = new StringPropertyDefinition(
            "SpouseName",
            XmlElementNames.SpouseName,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.SpouseName,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.Surname = new StringPropertyDefinition(
            "Surname",
            XmlElementNames.Surname,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Surname,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.WeddingAnniversary = new DateTimePropertyDefinition(
            "WeddingAnniversary",
            XmlElementNames.WeddingAnniversary,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.WeddingAnniversary,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.HasPicture = new BoolPropertyDefinition(
            "HasPicture",
            XmlElementNames.HasPicture,
            ExchangeVersion.Exchange2010,
            FieldUris.HasPicture,
            PropertyDefinitionFlags.CanFind
        );

        this.PhoneticFullName = new StringPropertyDefinition(
            "PhoneticFullName",
            XmlElementNames.PhoneticFullName,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.PhoneticFullName,
            PropertyDefinitionFlags.CanFind
        );

        this.PhoneticFirstName = new StringPropertyDefinition(
            "PhoneticFirstName",
            XmlElementNames.PhoneticFirstName,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.PhoneticFirstName,
            PropertyDefinitionFlags.CanFind
        );

        this.PhoneticLastName = new StringPropertyDefinition(
            "PhoneticLastName",
            XmlElementNames.PhoneticLastName,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.PhoneticLastName,
            PropertyDefinitionFlags.CanFind
        );

        this.Alias = new StringPropertyDefinition(
            "Alias",
            XmlElementNames.Alias,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.Alias,
            PropertyDefinitionFlags.CanFind
        );

        this.Notes = new StringPropertyDefinition(
            "Notes",
            XmlElementNames.Notes,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.Notes,
            PropertyDefinitionFlags.CanFind
        );

        this.Photo = new ByteArrayPropertyDefinition(
            "Photo",
            XmlElementNames.Photo,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.Photo,
            PropertyDefinitionFlags.CanFind
        );

        this.UserSMIMECertificate = new ComplexPropertyDefinition<ByteArrayArray>(
            "UserSMIMECertificate",
            XmlElementNames.UserSMIMECertificate,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.UserSMIMECertificate,
            PropertyDefinitionFlags.CanFind,
            () => { return new ByteArrayArray(); }
        );

        this.MSExchangeCertificate = new ComplexPropertyDefinition<ByteArrayArray>(
            "MSExchangeCertificate",
            XmlElementNames.MSExchangeCertificate,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.MSExchangeCertificate,
            PropertyDefinitionFlags.CanFind,
            () => { return new ByteArrayArray(); }
        );

        this.DirectoryId = new StringPropertyDefinition(
            "DirectoryId",
            XmlElementNames.DirectoryId,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.DirectoryId,
            PropertyDefinitionFlags.CanFind
        );

        this.ManagerMailbox = new ContainedPropertyDefinition<EmailAddress>(
            "ManagerMailbox",
            XmlElementNames.ManagerMailbox,
            XmlElementNames.Mailbox,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.ManagerMailbox,
            PropertyDefinitionFlags.CanFind,
            () => { return new EmailAddress(); }
        );

        this.DirectReports = new ComplexPropertyDefinition<EmailAddressCollection>(
            "DirectReports",
            XmlElementNames.DirectReports,
            ExchangeVersion.Exchange2010_SP1,
            FieldUris.DirectReports,
            PropertyDefinitionFlags.CanFind,
            () => { return new EmailAddressCollection(); }
        );

        this.EmailAddress1 = new IndexedPropertyDefinition(
            FieldUris.EmailAddress,
            "EmailAddress1"
        );

        this.EmailAddress2 = new IndexedPropertyDefinition(
            FieldUris.EmailAddress,
            "EmailAddress2"
        );

        this.EmailAddress3 = new IndexedPropertyDefinition(
            FieldUris.EmailAddress,
            "EmailAddress3"
        );

        this.ImAddress1 = new IndexedPropertyDefinition(
            FieldUris.ImAddress,
            "ImAddress1"
        );

        this.ImAddress2 = new IndexedPropertyDefinition(
            FieldUris.ImAddress,
            "ImAddress2"
        );

        this.ImAddress3 = new IndexedPropertyDefinition(
            FieldUris.ImAddress,
            "ImAddress3"
        );

        this.AssistantPhone = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "AssistantPhone"
        );

        this.BusinessFax = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "BusinessFax"
        );

        this.BusinessPhone = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "BusinessPhone"
        );

        this.BusinessPhone2 = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "BusinessPhone2"
        );

        this.Callback = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "Callback"
        );

        this.CarPhone = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "CarPhone"
        );

        this.CompanyMainPhone = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "CompanyMainPhone"
        );

        this.HomeFax = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "HomeFax"
        );

        this.HomePhone = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "HomePhone"
        );

        this.HomePhone2 = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "HomePhone2"
        );

        this.Isdn = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "Isdn"
        );

        this.MobilePhone = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "MobilePhone"
        );

        this.OtherFax = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "OtherFax"
        );

        this.OtherTelephone = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "OtherTelephone"
        );

        this.Pager = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "Pager"
        );

        this.PrimaryPhone = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "PrimaryPhone"
        );

        this.RadioPhone = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "RadioPhone"
        );

        this.Telex = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "Telex"
        );

        this.TtyTddPhone = new IndexedPropertyDefinition(
            FieldUris.PhoneNumber,
            "TtyTddPhone"
        );

        this.BusinessAddressStreet = new IndexedPropertyDefinition(
            FieldUris.PhysicalAddressStreet,
            "Business"
        );

        this.BusinessAddressCity = new IndexedPropertyDefinition(
            FieldUris.PhysicalAddressCity,
            "Business"
        );

        this.BusinessAddressState = new IndexedPropertyDefinition(
            FieldUris.PhysicalAddressState,
            "Business"
        );

        this.BusinessAddressCountryOrRegion = new IndexedPropertyDefinition(
            FieldUris.PhysicalAddressCountryOrRegion,
            "Business"
        );

        this.BusinessAddressPostalCode = new IndexedPropertyDefinition(
            FieldUris.PhysicalAddressPostalCode,
            "Business"
        );

        this.HomeAddressStreet = new IndexedPropertyDefinition(
            FieldUris.PhysicalAddressStreet,
            "Home"
        );

        this.HomeAddressCity = new IndexedPropertyDefinition(
            FieldUris.PhysicalAddressCity,
            "Home"
        );

        this.HomeAddressState = new IndexedPropertyDefinition(
            FieldUris.PhysicalAddressState,
            "Home"
        );

        this.HomeAddressCountryOrRegion = new IndexedPropertyDefinition(
            FieldUris.PhysicalAddressCountryOrRegion,
            "Home"
        );

        this.HomeAddressPostalCode = new IndexedPropertyDefinition(
            FieldUris.PhysicalAddressPostalCode,
            "Home"
        );

        this.OtherAddressStreet = new IndexedPropertyDefinition(
            FieldUris.PhysicalAddressStreet,
            "Other"
        );

        this.OtherAddressCity = new IndexedPropertyDefinition(
            FieldUris.PhysicalAddressCity,
            "Other"
        );

        this.OtherAddressState = new IndexedPropertyDefinition(
            FieldUris.PhysicalAddressState,
            "Other"
        );

        this.OtherAddressCountryOrRegion = new IndexedPropertyDefinition(
            FieldUris.PhysicalAddressCountryOrRegion,
            "Other"
        );

        this.OtherAddressPostalCode = new IndexedPropertyDefinition(
            FieldUris.PhysicalAddressPostalCode,
            "Other"
        );
    }
}