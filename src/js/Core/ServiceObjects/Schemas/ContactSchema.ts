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

/**
 * FieldURIs for contacts.
 */
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

/**
 * Represents the schem for contacts.
 */
export class ContactSchema extends ItemSchema {

    /**
     * Defines the **FileAs** property.
     */
    public FileAs: PropertyDefinition;

    /**
     * Defines the **FileAsMapping** property.
     */
    public FileAsMapping: PropertyDefinition;

    /**
     * Defines the **DisplayName** property.
     */
    public DisplayName: PropertyDefinition;

    /**
     * Defines the **GivenName** property.
     */
    public GivenName: PropertyDefinition;

    /**
     * Defines the **Initials** property.
     */
    public Initials: PropertyDefinition;

    /**
     * Defines the **MiddleName** property.
     */
    public MiddleName: PropertyDefinition;

    /**
     * Defines the **NickName** property.
     */
    public NickName: PropertyDefinition;

    /**
     * Defines the **CompleteName** property.
     */
    public CompleteName: PropertyDefinition;

    /**
     * Defines the **CompanyName** property.
     */
    public CompanyName: PropertyDefinition;

    /**
     * Defines the **EmailAddresses** property.
     */
    public EmailAddresses: PropertyDefinition;

    /**
     * Defines the **PhysicalAddresses** property.
     */
    public PhysicalAddresses: PropertyDefinition;

    /**
     * Defines the **PhoneNumbers** property.
     */
    public PhoneNumbers: PropertyDefinition;

    /**
     * Defines the **AssistantName** property.
     */
    public AssistantName: PropertyDefinition;

    /**
     * Defines the **Birthday** property.
     */
    public Birthday: PropertyDefinition;

    /**
     * Defines the **BusinessHomePage** property.
     */
    public BusinessHomePage: PropertyDefinition;

    /**
     * Defines the **Children** property.
     */
    public Children: PropertyDefinition;

    /**
     * Defines the **Companies** property.
     */
    public Companies: PropertyDefinition;

    /**
     * Defines the **ContactSource** property.
     */
    public ContactSource: PropertyDefinition;

    /**
     * Defines the **Department** property.
     */
    public Department: PropertyDefinition;

    /**
     * Defines the **Generation** property.
     */
    public Generation: PropertyDefinition;

    /**
     * Defines the **ImAddresses** property.
     */
    public ImAddresses: PropertyDefinition;

    /**
     * Defines the **JobTitle** property.
     */
    public JobTitle: PropertyDefinition;

    /**
     * Defines the **Manager** property.
     */
    public Manager: PropertyDefinition;

    /**
     * Defines the **Mileage** property.
     */
    public Mileage: PropertyDefinition;

    /**
     * Defines the **OfficeLocation** property.
     */
    public OfficeLocation: PropertyDefinition;

    /**
     * Defines the **PostalAddressIndex** property.
     */
    public PostalAddressIndex: PropertyDefinition;

    /**
     * Defines the **Profession** property.
     */
    public Profession: PropertyDefinition;

    /**
     * Defines the **SpouseName** property.
     */
    public SpouseName: PropertyDefinition;

    /**
     * Defines the **Surname** property.
     */
    public Surname: PropertyDefinition;

    /**
     * Defines the **WeddingAnniversary** property.
     */
    public WeddingAnniversary: PropertyDefinition;

    /**
     * Defines the **HasPicture** property.
     */
    public HasPicture: PropertyDefinition;

    /**
     * Defines the **PhoneticFullName** property.
     */
    public PhoneticFullName: PropertyDefinition;

    /**
     * Defines the **PhoneticFirstName** property.
     */
    public PhoneticFirstName: PropertyDefinition;

    /**
     * Defines the **PhoneticLastName** property.
     */
    public PhoneticLastName: PropertyDefinition;

    /**
     * Defines the **Alias** property.
     */
    public Alias: PropertyDefinition;

    /**
     * Defines the **Notes** property.
     */
    public Notes: PropertyDefinition;

    /**
     * Defines the **Photo** property.
     */
    public Photo: PropertyDefinition;

    /**
     * Defines the **UserSMIMECertificate** property.
     */
    public UserSMIMECertificate: PropertyDefinition;

    /**
     * Defines the **MSExchangeCertificate** property.
     */
    public MSExchangeCertificate: PropertyDefinition;

    /**
     * Defines the **DirectoryId** property.
     */
    public DirectoryId: PropertyDefinition;

    /**
     * Defines the **ManagerMailbox** property.
     */
    public ManagerMailbox: PropertyDefinition;

    /**
     * Defines the **DirectReports** property.
     */
    public DirectReports: PropertyDefinition;

    /**
     * Defines the **EmailAddress1** property.
     */
    public EmailAddress1: IndexedPropertyDefinition;

    /**
     * Defines the **EmailAddress2** property.
     */
    public EmailAddress2: IndexedPropertyDefinition;

    /**
     * Defines the **EmailAddress3** property.
     */
    public EmailAddress3: IndexedPropertyDefinition;

    /**
     * Defines the **ImAddress1** property.
     */
    public ImAddress1: IndexedPropertyDefinition;

    /**
     * Defines the **ImAddress2** property.
     */
    public ImAddress2: IndexedPropertyDefinition;

    /**
     * Defines the **ImAddress3** property.
     */
    public ImAddress3: IndexedPropertyDefinition;

    /**
     * Defines the **AssistantPhone** property.
     */
    public AssistantPhone: IndexedPropertyDefinition;

    /**
     * Defines the **BusinessFax** property.
     */
    public BusinessFax: IndexedPropertyDefinition;

    /**
     * Defines the **BusinessPhone** property.
     */
    public BusinessPhone: IndexedPropertyDefinition;

    /**
     * Defines the **BusinessPhone2** property.
     */
    public BusinessPhone2: IndexedPropertyDefinition;

    /**
     * Defines the **Callback** property.
     */
    public Callback: IndexedPropertyDefinition;

    /**
     * Defines the **CarPhone** property.
     */
    public CarPhone: IndexedPropertyDefinition;

    /**
     * Defines the **CompanyMainPhone** property.
     */
    public CompanyMainPhone: IndexedPropertyDefinition;

    /**
     * Defines the **HomeFax** property.
     */
    public HomeFax: IndexedPropertyDefinition;

    /**
     * Defines the **HomePhone** property.
     */
    public HomePhone: IndexedPropertyDefinition;

    /**
     * Defines the **HomePhone2** property.
     */
    public HomePhone2: IndexedPropertyDefinition;

    /**
     * Defines the **Isdn** property.
     */
    public Isdn: IndexedPropertyDefinition;

    /**
     * Defines the **MobilePhone** property.
     */
    public MobilePhone: IndexedPropertyDefinition;

    /**
     * Defines the **OtherFax** property.
     */
    public OtherFax: IndexedPropertyDefinition;

    /**
     * Defines the **OtherTelephone** property.
     */
    public OtherTelephone: IndexedPropertyDefinition;

    /**
     * Defines the **Pager** property.
     */
    public Pager: IndexedPropertyDefinition;

    /**
     * Defines the **PrimaryPhone** property.
     */
    public PrimaryPhone: IndexedPropertyDefinition;

    /**
     * Defines the **RadioPhone** property.
     */
    public RadioPhone: IndexedPropertyDefinition;

    /**
     * Defines the **Telex** property.
     */
    public Telex: IndexedPropertyDefinition;

    /**
     * Defines the **TtyTddPhone** property.
     */
    public TtyTddPhone: IndexedPropertyDefinition;

    /**
     * Defines the **BusinessAddressStreet** property.
     */
    public BusinessAddressStreet: IndexedPropertyDefinition;

    /**
     * Defines the **BusinessAddressCity** property.
     */
    public BusinessAddressCity: IndexedPropertyDefinition;

    /**
     * Defines the **BusinessAddressState** property.
     */
    public BusinessAddressState: IndexedPropertyDefinition;

    /**
     * Defines the **BusinessAddressCountryOrRegion** property.
     */
    public BusinessAddressCountryOrRegion: IndexedPropertyDefinition;

    /**
     * Defines the **BusinessAddressPostalCode** property.
     */
    public BusinessAddressPostalCode: IndexedPropertyDefinition;

    /**
     * Defines the **HomeAddressStreet** property.
     */
    public HomeAddressStreet: IndexedPropertyDefinition;

    /**
     * Defines the **HomeAddressCity** property.
     */
    public HomeAddressCity: IndexedPropertyDefinition;

    /**
     * Defines the **HomeAddressState** property.
     */
    public HomeAddressState: IndexedPropertyDefinition;

    /**
     * Defines the **HomeAddressCountryOrRegion** property.
     */
    public HomeAddressCountryOrRegion: IndexedPropertyDefinition;

    /**
     * Defines the **HomeAddressPostalCode** property.
     */
    public HomeAddressPostalCode: IndexedPropertyDefinition;

    /**
     * Defines the **OtherAddressStreet** property.
     */
    public OtherAddressStreet: IndexedPropertyDefinition;

    /**
     * Defines the **OtherAddressCity** property.
     */
    public OtherAddressCity: IndexedPropertyDefinition;

    /**
     * Defines the **OtherAddressState** property.
     */
    public OtherAddressState: IndexedPropertyDefinition;

    /**
     * Defines the **OtherAddressCountryOrRegion** property.
     */
    public OtherAddressCountryOrRegion: IndexedPropertyDefinition;

    /**
     * Defines the **OtherAddressPostalCode** property.
     */
    public OtherAddressPostalCode: IndexedPropertyDefinition;

    /**
     * @internal Instance of **ContactSchema** 
     */
    static Instance: ContactSchema = new ContactSchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
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
            FieldUris.FileAs,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.FileAsMapping = new GenericPropertyDefinition<FileAsMapping>(
            "FileAsMapping",
            XmlElementNames.FileAsMapping,
            FieldUris.FileAsMapping,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.DisplayName = new StringPropertyDefinition(
            "DisplayName",
            XmlElementNames.DisplayName,
            FieldUris.DisplayName,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.GivenName = new StringPropertyDefinition(
            "GivenName",
            XmlElementNames.GivenName,
            FieldUris.GivenName,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Initials = new StringPropertyDefinition(
            "Initials",
            XmlElementNames.Initials,
            FieldUris.Initials,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.MiddleName = new StringPropertyDefinition(
            "MiddleName",
            XmlElementNames.MiddleName,
            FieldUris.MiddleName,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.NickName = new StringPropertyDefinition(
            "Nickname",
            XmlElementNames.NickName,
            FieldUris.NickName,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.CompleteName = new ComplexPropertyDefinition<CompleteName>(
            "CompleteName",
            XmlElementNames.CompleteName,
            FieldUris.CompleteName,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new CompleteName(); }
        );

        this.CompanyName = new StringPropertyDefinition(
            "CompanyName",
            XmlElementNames.CompanyName,
            FieldUris.CompanyName,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.EmailAddresses = new ComplexPropertyDefinition<EmailAddressDictionary>(
            "EmailAddresses",
            XmlElementNames.EmailAddresses,
            FieldUris.EmailAddresses,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new EmailAddressDictionary(); }
        );
        this.PhysicalAddresses = new ComplexPropertyDefinition<PhysicalAddressDictionary>(
            "PhysicalAddresses",
            XmlElementNames.PhysicalAddresses,
            FieldUris.PhysicalAddresses,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new PhysicalAddressDictionary(); }
        );

        this.PhoneNumbers = new ComplexPropertyDefinition<PhoneNumberDictionary>(
            "PhoneNumbers",
            XmlElementNames.PhoneNumbers,
            FieldUris.PhoneNumbers,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new PhoneNumberDictionary(); }
        );

        this.AssistantName = new StringPropertyDefinition(
            "AssistantName",
            XmlElementNames.AssistantName,
            FieldUris.AssistantName,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Birthday = new DateTimePropertyDefinition(
            "Birthday",
            XmlElementNames.Birthday,
            FieldUris.Birthday,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.BusinessHomePage = new StringPropertyDefinition(
            "BusinessHomePage",
            XmlElementNames.BusinessHomePage,
            FieldUris.BusinessHomePage,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Children = new ComplexPropertyDefinition<StringList>(
            "Children",
            XmlElementNames.Children,
            FieldUris.Children,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new StringList(); }
        );

        this.Companies = new ComplexPropertyDefinition<StringList>(
            "Companies",
            XmlElementNames.Companies,
            FieldUris.Companies,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new StringList(); }
        );

        this.ContactSource = new GenericPropertyDefinition<ContactSource>(
            "ContactSource",
            XmlElementNames.ContactSource,
            FieldUris.ContactSource,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Department = new StringPropertyDefinition(
            "Department",
            XmlElementNames.Department,
            FieldUris.Department,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Generation = new StringPropertyDefinition(
            "Generation",
            XmlElementNames.Generation,
            FieldUris.Generation,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.ImAddresses = new ComplexPropertyDefinition<ImAddressDictionary>(
            "ImAddresses",
            XmlElementNames.ImAddresses,
            FieldUris.ImAddresses,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new ImAddressDictionary(); }
        );

        this.JobTitle = new StringPropertyDefinition(
            "JobTitle",
            XmlElementNames.JobTitle,
            FieldUris.JobTitle,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Manager = new StringPropertyDefinition(
            "Manager",
            XmlElementNames.Manager,
            FieldUris.Manager,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Mileage = new StringPropertyDefinition(
            "Mileage",
            XmlElementNames.Mileage,
            FieldUris.Mileage,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.OfficeLocation = new StringPropertyDefinition(
            "OfficeLocation",
            XmlElementNames.OfficeLocation,
            FieldUris.OfficeLocation,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.PostalAddressIndex = new GenericPropertyDefinition<PhysicalAddressIndex>(
            "PostalAddressIndex",
            XmlElementNames.PostalAddressIndex,
            FieldUris.PostalAddressIndex,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Profession = new StringPropertyDefinition(
            "Profession",
            XmlElementNames.Profession,
            FieldUris.Profession,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.SpouseName = new StringPropertyDefinition(
            "SpouseName",
            XmlElementNames.SpouseName,
            FieldUris.SpouseName,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Surname = new StringPropertyDefinition(
            "Surname",
            XmlElementNames.Surname,
            FieldUris.Surname,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.WeddingAnniversary = new DateTimePropertyDefinition(
            "WeddingAnniversary",
            XmlElementNames.WeddingAnniversary,
            FieldUris.WeddingAnniversary,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.HasPicture = new BoolPropertyDefinition(
            "HasPicture",
            XmlElementNames.HasPicture,
            FieldUris.HasPicture,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010
        );

        this.PhoneticFullName = new StringPropertyDefinition(
            "PhoneticFullName",
            XmlElementNames.PhoneticFullName,
            FieldUris.PhoneticFullName,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.PhoneticFirstName = new StringPropertyDefinition(
            "PhoneticFirstName",
            XmlElementNames.PhoneticFirstName,
            FieldUris.PhoneticFirstName,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.PhoneticLastName = new StringPropertyDefinition(
            "PhoneticLastName",
            XmlElementNames.PhoneticLastName,
            FieldUris.PhoneticLastName,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.Alias = new StringPropertyDefinition(
            "Alias",
            XmlElementNames.Alias,
            FieldUris.Alias,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.Notes = new StringPropertyDefinition(
            "Notes",
            XmlElementNames.Notes,
            FieldUris.Notes,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.Photo = new ByteArrayPropertyDefinition(
            "Photo",
            XmlElementNames.Photo,
            FieldUris.Photo,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.UserSMIMECertificate = new ComplexPropertyDefinition<ByteArrayArray>(
            "UserSMIMECertificate",
            XmlElementNames.UserSMIMECertificate,
            FieldUris.UserSMIMECertificate,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1,
            () => { return new ByteArrayArray(); }
        );

        this.MSExchangeCertificate = new ComplexPropertyDefinition<ByteArrayArray>(
            "MSExchangeCertificate",
            XmlElementNames.MSExchangeCertificate,
            FieldUris.MSExchangeCertificate,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1,
            () => { return new ByteArrayArray(); }
        );

        this.DirectoryId = new StringPropertyDefinition(
            "DirectoryId",
            XmlElementNames.DirectoryId,
            FieldUris.DirectoryId,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1
        );

        this.ManagerMailbox = new ContainedPropertyDefinition<EmailAddress>(
            "ManagerMailbox",
            XmlElementNames.ManagerMailbox,
            XmlElementNames.Mailbox,
            FieldUris.ManagerMailbox,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1,
            () => { return new EmailAddress(); }
        );

        this.DirectReports = new ComplexPropertyDefinition<EmailAddressCollection>(
            "DirectReports",
            XmlElementNames.DirectReports,
            FieldUris.DirectReports,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2010_SP1,
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