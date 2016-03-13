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
    public static FileAs: PropertyDefinition = new StringPropertyDefinition(
        "FileAs",
        XmlElementNames.FileAs,
        FieldUris.FileAs,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **FileAsMapping** property.
     */
    public static FileAsMapping: PropertyDefinition = new GenericPropertyDefinition<FileAsMapping>(
        "FileAsMapping",
        XmlElementNames.FileAsMapping,
        FieldUris.FileAsMapping,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **DisplayName** property.
     */
    public static DisplayName: PropertyDefinition = new StringPropertyDefinition(
        "DisplayName",
        XmlElementNames.DisplayName,
        FieldUris.DisplayName,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **GivenName** property.
     */
    public static GivenName: PropertyDefinition = new StringPropertyDefinition(
        "GivenName",
        XmlElementNames.GivenName,
        FieldUris.GivenName,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Initials** property.
     */
    public static Initials: PropertyDefinition = new StringPropertyDefinition(
        "Initials",
        XmlElementNames.Initials,
        FieldUris.Initials,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **MiddleName** property.
     */
    public static MiddleName: PropertyDefinition = new StringPropertyDefinition(
        "MiddleName",
        XmlElementNames.MiddleName,
        FieldUris.MiddleName,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **NickName** property.
     */
    public static NickName: PropertyDefinition = new StringPropertyDefinition(
        "Nickname",
        XmlElementNames.NickName,
        FieldUris.NickName,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **CompleteName** property.
     */
    public static CompleteName: PropertyDefinition = new ComplexPropertyDefinition<CompleteName>(
        "CompleteName",
        XmlElementNames.CompleteName,
        FieldUris.CompleteName,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new CompleteName(); }
    );

    /**
     * Defines the **CompanyName** property.
     */
    public static CompanyName: PropertyDefinition = new StringPropertyDefinition(
        "CompanyName",
        XmlElementNames.CompanyName,
        FieldUris.CompanyName,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **EmailAddresses** property.
     */
    public static EmailAddresses: PropertyDefinition = new ComplexPropertyDefinition<EmailAddressDictionary>(
        "EmailAddresses",
        XmlElementNames.EmailAddresses,
        FieldUris.EmailAddresses,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new EmailAddressDictionary(); }
    );
    /**
     * Defines the **PhysicalAddresses** property.
     */
    public static PhysicalAddresses: PropertyDefinition = new ComplexPropertyDefinition<PhysicalAddressDictionary>(
        "PhysicalAddresses",
        XmlElementNames.PhysicalAddresses,
        FieldUris.PhysicalAddresses,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new PhysicalAddressDictionary(); }
    );

    /**
     * Defines the **PhoneNumbers** property.
     */
    public static PhoneNumbers: PropertyDefinition = new ComplexPropertyDefinition<PhoneNumberDictionary>(
        "PhoneNumbers",
        XmlElementNames.PhoneNumbers,
        FieldUris.PhoneNumbers,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new PhoneNumberDictionary(); }
    );

    /**
     * Defines the **AssistantName** property.
     */
    public static AssistantName: PropertyDefinition = new StringPropertyDefinition(
        "AssistantName",
        XmlElementNames.AssistantName,
        FieldUris.AssistantName,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Birthday** property.
     */
    public static Birthday: PropertyDefinition = new DateTimePropertyDefinition(
        "Birthday",
        XmlElementNames.Birthday,
        FieldUris.Birthday,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **BusinessHomePage** property.
     */
    public static BusinessHomePage: PropertyDefinition = new StringPropertyDefinition(
        "BusinessHomePage",
        XmlElementNames.BusinessHomePage,
        FieldUris.BusinessHomePage,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Children** property.
     */
    public static Children: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "Children",
        XmlElementNames.Children,
        FieldUris.Children,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new StringList(); }
    );

    /**
     * Defines the **Companies** property.
     */
    public static Companies: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "Companies",
        XmlElementNames.Companies,
        FieldUris.Companies,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new StringList(); }
    );

    /**
     * Defines the **ContactSource** property.
     */
    public static ContactSource: PropertyDefinition = new GenericPropertyDefinition<ContactSource>(
        "ContactSource",
        XmlElementNames.ContactSource,
        FieldUris.ContactSource,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Department** property.
     */
    public static Department: PropertyDefinition = new StringPropertyDefinition(
        "Department",
        XmlElementNames.Department,
        FieldUris.Department,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Generation** property.
     */
    public static Generation: PropertyDefinition = new StringPropertyDefinition(
        "Generation",
        XmlElementNames.Generation,
        FieldUris.Generation,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **ImAddresses** property.
     */
    public static ImAddresses: PropertyDefinition = new ComplexPropertyDefinition<ImAddressDictionary>(
        "ImAddresses",
        XmlElementNames.ImAddresses,
        FieldUris.ImAddresses,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new ImAddressDictionary(); }
    );

    /**
     * Defines the **JobTitle** property.
     */
    public static JobTitle: PropertyDefinition = new StringPropertyDefinition(
        "JobTitle",
        XmlElementNames.JobTitle,
        FieldUris.JobTitle,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Manager** property.
     */
    public static Manager: PropertyDefinition = new StringPropertyDefinition(
        "Manager",
        XmlElementNames.Manager,
        FieldUris.Manager,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Mileage** property.
     */
    public static Mileage: PropertyDefinition = new StringPropertyDefinition(
        "Mileage",
        XmlElementNames.Mileage,
        FieldUris.Mileage,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **OfficeLocation** property.
     */
    public static OfficeLocation: PropertyDefinition = new StringPropertyDefinition(
        "OfficeLocation",
        XmlElementNames.OfficeLocation,
        FieldUris.OfficeLocation,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **PostalAddressIndex** property.
     */
    public static PostalAddressIndex: PropertyDefinition = new GenericPropertyDefinition<PhysicalAddressIndex>(
        "PostalAddressIndex",
        XmlElementNames.PostalAddressIndex,
        FieldUris.PostalAddressIndex,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Profession** property.
     */
    public static Profession: PropertyDefinition = new StringPropertyDefinition(
        "Profession",
        XmlElementNames.Profession,
        FieldUris.Profession,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **SpouseName** property.
     */
    public static SpouseName: PropertyDefinition = new StringPropertyDefinition(
        "SpouseName",
        XmlElementNames.SpouseName,
        FieldUris.SpouseName,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Surname** property.
     */
    public static Surname: PropertyDefinition = new StringPropertyDefinition(
        "Surname",
        XmlElementNames.Surname,
        FieldUris.Surname,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **WeddingAnniversary** property.
     */
    public static WeddingAnniversary: PropertyDefinition = new DateTimePropertyDefinition(
        "WeddingAnniversary",
        XmlElementNames.WeddingAnniversary,
        FieldUris.WeddingAnniversary,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **HasPicture** property.
     */
    public static HasPicture: PropertyDefinition = new BoolPropertyDefinition(
        "HasPicture",
        XmlElementNames.HasPicture,
        FieldUris.HasPicture,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010
    );

    /**
     * Defines the **PhoneticFullName** property.
     */
    public static PhoneticFullName: PropertyDefinition = new StringPropertyDefinition(
        "PhoneticFullName",
        XmlElementNames.PhoneticFullName,
        FieldUris.PhoneticFullName,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **PhoneticFirstName** property.
     */
    public static PhoneticFirstName: PropertyDefinition = new StringPropertyDefinition(
        "PhoneticFirstName",
        XmlElementNames.PhoneticFirstName,
        FieldUris.PhoneticFirstName,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **PhoneticLastName** property.
     */
    public static PhoneticLastName: PropertyDefinition = new StringPropertyDefinition(
        "PhoneticLastName",
        XmlElementNames.PhoneticLastName,
        FieldUris.PhoneticLastName,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **Alias** property.
     */
    public static Alias: PropertyDefinition = new StringPropertyDefinition(
        "Alias",
        XmlElementNames.Alias,
        FieldUris.Alias,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **Notes** property.
     */
    public static Notes: PropertyDefinition = new StringPropertyDefinition(
        "Notes",
        XmlElementNames.Notes,
        FieldUris.Notes,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **Photo** property.
     */
    public static Photo: PropertyDefinition = new ByteArrayPropertyDefinition(
        "Photo",
        XmlElementNames.Photo,
        FieldUris.Photo,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **UserSMIMECertificate** property.
     */
    public static UserSMIMECertificate: PropertyDefinition = new ComplexPropertyDefinition<ByteArrayArray>(
        "UserSMIMECertificate",
        XmlElementNames.UserSMIMECertificate,
        FieldUris.UserSMIMECertificate,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1,
        () => { return new ByteArrayArray(); }
    );

    /**
     * Defines the **MSExchangeCertificate** property.
     */
    public static MSExchangeCertificate: PropertyDefinition = new ComplexPropertyDefinition<ByteArrayArray>(
        "MSExchangeCertificate",
        XmlElementNames.MSExchangeCertificate,
        FieldUris.MSExchangeCertificate,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1,
        () => { return new ByteArrayArray(); }
    );

    /**
     * Defines the **DirectoryId** property.
     */
    public static DirectoryId: PropertyDefinition = new StringPropertyDefinition(
        "DirectoryId",
        XmlElementNames.DirectoryId,
        FieldUris.DirectoryId,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1
    );

    /**
     * Defines the **ManagerMailbox** property.
     */
    public static ManagerMailbox: PropertyDefinition = new ContainedPropertyDefinition<EmailAddress>(
        "ManagerMailbox",
        XmlElementNames.ManagerMailbox,
        FieldUris.ManagerMailbox,
        XmlElementNames.Mailbox,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1,
        () => { return new EmailAddress(); }
    );

    /**
     * Defines the **DirectReports** property.
     */
    public static DirectReports: PropertyDefinition = new ComplexPropertyDefinition<EmailAddressCollection>(
        "DirectReports",
        XmlElementNames.DirectReports,
        FieldUris.DirectReports,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2010_SP1,
        () => { return new EmailAddressCollection(); }
    );

    /**
     * Defines the **EmailAddress1** property.
     */
    public static EmailAddress1: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.EmailAddress,
        "EmailAddress1"
    );

    /**
     * Defines the **EmailAddress2** property.
     */
    public static EmailAddress2: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.EmailAddress,
        "EmailAddress2"
    );

    /**
     * Defines the **EmailAddress3** property.
     */
    public static EmailAddress3: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.EmailAddress,
        "EmailAddress3"
    );

    /**
     * Defines the **ImAddress1** property.
     */
    public static ImAddress1: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.ImAddress,
        "ImAddress1"
    );

    /**
     * Defines the **ImAddress2** property.
     */
    public static ImAddress2: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.ImAddress,
        "ImAddress2"
    );

    /**
     * Defines the **ImAddress3** property.
     */
    public static ImAddress3: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.ImAddress,
        "ImAddress3"
    );

    /**
     * Defines the **AssistantPhone** property.
     */
    public static AssistantPhone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "AssistantPhone"
    );

    /**
     * Defines the **BusinessFax** property.
     */
    public static BusinessFax: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "BusinessFax"
    );

    /**
     * Defines the **BusinessPhone** property.
     */
    public static BusinessPhone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "BusinessPhone"
    );

    /**
     * Defines the **BusinessPhone2** property.
     */
    public static BusinessPhone2: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "BusinessPhone2"
    );

    /**
     * Defines the **Callback** property.
     */
    public static Callback: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "Callback"
    );

    /**
     * Defines the **CarPhone** property.
     */
    public static CarPhone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "CarPhone"
    );

    /**
     * Defines the **CompanyMainPhone** property.
     */
    public static CompanyMainPhone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "CompanyMainPhone"
    );

    /**
     * Defines the **HomeFax** property.
     */
    public static HomeFax: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "HomeFax"
    );

    /**
     * Defines the **HomePhone** property.
     */
    public static HomePhone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "HomePhone"
    );

    /**
     * Defines the **HomePhone2** property.
     */
    public static HomePhone2: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "HomePhone2"
    );

    /**
     * Defines the **Isdn** property.
     */
    public static Isdn: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "Isdn"
    );

    /**
     * Defines the **MobilePhone** property.
     */
    public static MobilePhone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "MobilePhone"
    );

    /**
     * Defines the **OtherFax** property.
     */
    public static OtherFax: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "OtherFax"
    );

    /**
     * Defines the **OtherTelephone** property.
     */
    public static OtherTelephone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "OtherTelephone"
    );

    /**
     * Defines the **Pager** property.
     */
    public static Pager: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "Pager"
    );

    /**
     * Defines the **PrimaryPhone** property.
     */
    public static PrimaryPhone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "PrimaryPhone"
    );

    /**
     * Defines the **RadioPhone** property.
     */
    public static RadioPhone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "RadioPhone"
    );

    /**
     * Defines the **Telex** property.
     */
    public static Telex: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "Telex"
    );

    /**
     * Defines the **TtyTddPhone** property.
     */
    public static TtyTddPhone: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhoneNumber,
        "TtyTddPhone"
    );

    /**
     * Defines the **BusinessAddressStreet** property.
     */
    public static BusinessAddressStreet: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressStreet,
        "Business"
    );

    /**
     * Defines the **BusinessAddressCity** property.
     */
    public static BusinessAddressCity: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressCity,
        "Business"
    );

    /**
     * Defines the **BusinessAddressState** property.
     */
    public static BusinessAddressState: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressState,
        "Business"
    );

    /**
     * Defines the **BusinessAddressCountryOrRegion** property.
     */
    public static BusinessAddressCountryOrRegion: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressCountryOrRegion,
        "Business"
    );

    /**
     * Defines the **BusinessAddressPostalCode** property.
     */
    public static BusinessAddressPostalCode: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressPostalCode,
        "Business"
    );

    /**
     * Defines the **HomeAddressStreet** property.
     */
    public static HomeAddressStreet: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressStreet,
        "Home"
    );

    /**
     * Defines the **HomeAddressCity** property.
     */
    public static HomeAddressCity: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressCity,
        "Home"
    );

    /**
     * Defines the **HomeAddressState** property.
     */
    public static HomeAddressState: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressState,
        "Home"
    );

    /**
     * Defines the **HomeAddressCountryOrRegion** property.
     */
    public static HomeAddressCountryOrRegion: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressCountryOrRegion,
        "Home"
    );

    /**
     * Defines the **HomeAddressPostalCode** property.
     */
    public static HomeAddressPostalCode: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressPostalCode,
        "Home"
    );

    /**
     * Defines the **OtherAddressStreet** property.
     */
    public static OtherAddressStreet: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressStreet,
        "Other"
    );

    /**
     * Defines the **OtherAddressCity** property.
     */
    public static OtherAddressCity: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressCity,
        "Other"
    );

    /**
     * Defines the **OtherAddressState** property.
     */
    public static OtherAddressState: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressState,
        "Other"
    );

    /**
     * Defines the **OtherAddressCountryOrRegion** property.
     */
    public static OtherAddressCountryOrRegion: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressCountryOrRegion,
        "Other"
    );

    /**
     * Defines the **OtherAddressPostalCode** property.
     */
    public static OtherAddressPostalCode: IndexedPropertyDefinition = new IndexedPropertyDefinition(
        FieldUris.PhysicalAddressPostalCode,
        "Other"
    );

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
        this.RegisterProperty(ContactSchema, ContactSchema.FileAs);
        this.RegisterProperty(ContactSchema, ContactSchema.FileAsMapping);
        this.RegisterProperty(ContactSchema, ContactSchema.DisplayName);
        this.RegisterProperty(ContactSchema, ContactSchema.GivenName);
        this.RegisterProperty(ContactSchema, ContactSchema.Initials);
        this.RegisterProperty(ContactSchema, ContactSchema.MiddleName);
        this.RegisterProperty(ContactSchema, ContactSchema.NickName);
        this.RegisterProperty(ContactSchema, ContactSchema.CompleteName);
        this.RegisterProperty(ContactSchema, ContactSchema.CompanyName);
        this.RegisterProperty(ContactSchema, ContactSchema.EmailAddresses);
        this.RegisterProperty(ContactSchema, ContactSchema.PhysicalAddresses);
        this.RegisterProperty(ContactSchema, ContactSchema.PhoneNumbers);
        this.RegisterProperty(ContactSchema, ContactSchema.AssistantName);
        this.RegisterProperty(ContactSchema, ContactSchema.Birthday);
        this.RegisterProperty(ContactSchema, ContactSchema.BusinessHomePage);
        this.RegisterProperty(ContactSchema, ContactSchema.Children);
        this.RegisterProperty(ContactSchema, ContactSchema.Companies);
        this.RegisterProperty(ContactSchema, ContactSchema.ContactSource);
        this.RegisterProperty(ContactSchema, ContactSchema.Department);
        this.RegisterProperty(ContactSchema, ContactSchema.Generation);
        this.RegisterProperty(ContactSchema, ContactSchema.ImAddresses);
        this.RegisterProperty(ContactSchema, ContactSchema.JobTitle);
        this.RegisterProperty(ContactSchema, ContactSchema.Manager);
        this.RegisterProperty(ContactSchema, ContactSchema.Mileage);
        this.RegisterProperty(ContactSchema, ContactSchema.OfficeLocation);
        this.RegisterProperty(ContactSchema, ContactSchema.PostalAddressIndex);
        this.RegisterProperty(ContactSchema, ContactSchema.Profession);
        this.RegisterProperty(ContactSchema, ContactSchema.SpouseName);
        this.RegisterProperty(ContactSchema, ContactSchema.Surname);
        this.RegisterProperty(ContactSchema, ContactSchema.WeddingAnniversary);
        this.RegisterProperty(ContactSchema, ContactSchema.HasPicture);
        this.RegisterProperty(ContactSchema, ContactSchema.PhoneticFullName);
        this.RegisterProperty(ContactSchema, ContactSchema.PhoneticFirstName);
        this.RegisterProperty(ContactSchema, ContactSchema.PhoneticLastName);
        this.RegisterProperty(ContactSchema, ContactSchema.Alias);
        this.RegisterProperty(ContactSchema, ContactSchema.Notes);
        this.RegisterProperty(ContactSchema, ContactSchema.Photo);
        this.RegisterProperty(ContactSchema, ContactSchema.UserSMIMECertificate);
        this.RegisterProperty(ContactSchema, ContactSchema.MSExchangeCertificate);
        this.RegisterProperty(ContactSchema, ContactSchema.DirectoryId);
        this.RegisterProperty(ContactSchema, ContactSchema.ManagerMailbox);
        this.RegisterProperty(ContactSchema, ContactSchema.DirectReports);
        this.RegisterIndexedProperty(ContactSchema.EmailAddress1);
        this.RegisterIndexedProperty(ContactSchema.EmailAddress2);
        this.RegisterIndexedProperty(ContactSchema.EmailAddress3);
        this.RegisterIndexedProperty(ContactSchema.ImAddress1);
        this.RegisterIndexedProperty(ContactSchema.ImAddress2);
        this.RegisterIndexedProperty(ContactSchema.ImAddress3);
        this.RegisterIndexedProperty(ContactSchema.AssistantPhone);
        this.RegisterIndexedProperty(ContactSchema.BusinessFax);
        this.RegisterIndexedProperty(ContactSchema.BusinessPhone);
        this.RegisterIndexedProperty(ContactSchema.BusinessPhone2);
        this.RegisterIndexedProperty(ContactSchema.Callback);
        this.RegisterIndexedProperty(ContactSchema.CarPhone);
        this.RegisterIndexedProperty(ContactSchema.CompanyMainPhone);
        this.RegisterIndexedProperty(ContactSchema.HomeFax);
        this.RegisterIndexedProperty(ContactSchema.HomePhone);
        this.RegisterIndexedProperty(ContactSchema.HomePhone2);
        this.RegisterIndexedProperty(ContactSchema.Isdn);
        this.RegisterIndexedProperty(ContactSchema.MobilePhone);
        this.RegisterIndexedProperty(ContactSchema.OtherFax);
        this.RegisterIndexedProperty(ContactSchema.OtherTelephone);
        this.RegisterIndexedProperty(ContactSchema.Pager);
        this.RegisterIndexedProperty(ContactSchema.PrimaryPhone);
        this.RegisterIndexedProperty(ContactSchema.RadioPhone);
        this.RegisterIndexedProperty(ContactSchema.Telex);
        this.RegisterIndexedProperty(ContactSchema.TtyTddPhone);
        this.RegisterIndexedProperty(ContactSchema.BusinessAddressStreet);
        this.RegisterIndexedProperty(ContactSchema.BusinessAddressCity);
        this.RegisterIndexedProperty(ContactSchema.BusinessAddressState);
        this.RegisterIndexedProperty(ContactSchema.BusinessAddressCountryOrRegion);
        this.RegisterIndexedProperty(ContactSchema.BusinessAddressPostalCode);
        this.RegisterIndexedProperty(ContactSchema.HomeAddressStreet);
        this.RegisterIndexedProperty(ContactSchema.HomeAddressCity);
        this.RegisterIndexedProperty(ContactSchema.HomeAddressState);
        this.RegisterIndexedProperty(ContactSchema.HomeAddressCountryOrRegion);
        this.RegisterIndexedProperty(ContactSchema.HomeAddressPostalCode);
        this.RegisterIndexedProperty(ContactSchema.OtherAddressStreet);
        this.RegisterIndexedProperty(ContactSchema.OtherAddressCity);
        this.RegisterIndexedProperty(ContactSchema.OtherAddressState);
        this.RegisterIndexedProperty(ContactSchema.OtherAddressCountryOrRegion);
        this.RegisterIndexedProperty(ContactSchema.OtherAddressPostalCode);
    }
}

/**
 * Represents the schem for contacts.
 */
export interface ContactSchema {
    /**
     * Defines the **FileAs** property.
     */
    FileAs: PropertyDefinition;
    /**
     * Defines the **FileAsMapping** property.
     */
    FileAsMapping: PropertyDefinition;
    /**
     * Defines the **DisplayName** property.
     */
    DisplayName: PropertyDefinition;
    /**
     * Defines the **GivenName** property.
     */
    GivenName: PropertyDefinition;
    /**
     * Defines the **Initials** property.
     */
    Initials: PropertyDefinition;
    /**
     * Defines the **MiddleName** property.
     */
    MiddleName: PropertyDefinition;
    /**
     * Defines the **NickName** property.
     */
    NickName: PropertyDefinition;
    /**
     * Defines the **CompleteName** property.
     */
    CompleteName: PropertyDefinition;
    /**
     * Defines the **CompanyName** property.
     */
    CompanyName: PropertyDefinition;
    /**
     * Defines the **EmailAddresses** property.
     */
    EmailAddresses: PropertyDefinition;
    /**
     * Defines the **PhysicalAddresses** property.
     */
    PhysicalAddresses: PropertyDefinition;
    /**
     * Defines the **PhoneNumbers** property.
     */
    PhoneNumbers: PropertyDefinition;
    /**
     * Defines the **AssistantName** property.
     */
    AssistantName: PropertyDefinition;
    /**
     * Defines the **Birthday** property.
     */
    Birthday: PropertyDefinition;
    /**
     * Defines the **BusinessHomePage** property.
     */
    BusinessHomePage: PropertyDefinition;
    /**
     * Defines the **Children** property.
     */
    Children: PropertyDefinition;
    /**
     * Defines the **Companies** property.
     */
    Companies: PropertyDefinition;
    /**
     * Defines the **ContactSource** property.
     */
    ContactSource: PropertyDefinition;
    /**
     * Defines the **Department** property.
     */
    Department: PropertyDefinition;
    /**
     * Defines the **Generation** property.
     */
    Generation: PropertyDefinition;
    /**
     * Defines the **ImAddresses** property.
     */
    ImAddresses: PropertyDefinition;
    /**
     * Defines the **JobTitle** property.
     */
    JobTitle: PropertyDefinition;
    /**
     * Defines the **Manager** property.
     */
    Manager: PropertyDefinition;
    /**
     * Defines the **Mileage** property.
     */
    Mileage: PropertyDefinition;
    /**
     * Defines the **OfficeLocation** property.
     */
    OfficeLocation: PropertyDefinition;
    /**
     * Defines the **PostalAddressIndex** property.
     */
    PostalAddressIndex: PropertyDefinition;
    /**
     * Defines the **Profession** property.
     */
    Profession: PropertyDefinition;
    /**
     * Defines the **SpouseName** property.
     */
    SpouseName: PropertyDefinition;
    /**
     * Defines the **Surname** property.
     */
    Surname: PropertyDefinition;
    /**
     * Defines the **WeddingAnniversary** property.
     */
    WeddingAnniversary: PropertyDefinition;
    /**
     * Defines the **HasPicture** property.
     */
    HasPicture: PropertyDefinition;
    /**
     * Defines the **PhoneticFullName** property.
     */
    PhoneticFullName: PropertyDefinition;
    /**
     * Defines the **PhoneticFirstName** property.
     */
    PhoneticFirstName: PropertyDefinition;
    /**
     * Defines the **PhoneticLastName** property.
     */
    PhoneticLastName: PropertyDefinition;
    /**
     * Defines the **Alias** property.
     */
    Alias: PropertyDefinition;
    /**
     * Defines the **Notes** property.
     */
    Notes: PropertyDefinition;
    /**
     * Defines the **Photo** property.
     */
    Photo: PropertyDefinition;
    /**
     * Defines the **UserSMIMECertificate** property.
     */
    UserSMIMECertificate: PropertyDefinition;
    /**
     * Defines the **MSExchangeCertificate** property.
     */
    MSExchangeCertificate: PropertyDefinition;
    /**
     * Defines the **DirectoryId** property.
     */
    DirectoryId: PropertyDefinition;
    /**
     * Defines the **ManagerMailbox** property.
     */
    ManagerMailbox: PropertyDefinition;
    /**
     * Defines the **DirectReports** property.
     */
    DirectReports: PropertyDefinition;
    /**
     * Defines the **EmailAddress1** property.
     */
    EmailAddress1: IndexedPropertyDefinition;
    /**
     * Defines the **EmailAddress2** property.
     */
    EmailAddress2: IndexedPropertyDefinition;
    /**
     * Defines the **EmailAddress3** property.
     */
    EmailAddress3: IndexedPropertyDefinition;
    /**
     * Defines the **ImAddress1** property.
     */
    ImAddress1: IndexedPropertyDefinition;
    /**
     * Defines the **ImAddress2** property.
     */
    ImAddress2: IndexedPropertyDefinition;
    /**
     * Defines the **ImAddress3** property.
     */
    ImAddress3: IndexedPropertyDefinition;
    /**
     * Defines the **AssistantPhone** property.
     */
    AssistantPhone: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessFax** property.
     */
    BusinessFax: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessPhone** property.
     */
    BusinessPhone: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessPhone2** property.
     */
    BusinessPhone2: IndexedPropertyDefinition;
    /**
     * Defines the **Callback** property.
     */
    Callback: IndexedPropertyDefinition;
    /**
     * Defines the **CarPhone** property.
     */
    CarPhone: IndexedPropertyDefinition;
    /**
     * Defines the **CompanyMainPhone** property.
     */
    CompanyMainPhone: IndexedPropertyDefinition;
    /**
     * Defines the **HomeFax** property.
     */
    HomeFax: IndexedPropertyDefinition;
    /**
     * Defines the **HomePhone** property.
     */
    HomePhone: IndexedPropertyDefinition;
    /**
     * Defines the **HomePhone2** property.
     */
    HomePhone2: IndexedPropertyDefinition;
    /**
     * Defines the **Isdn** property.
     */
    Isdn: IndexedPropertyDefinition;
    /**
     * Defines the **MobilePhone** property.
     */
    MobilePhone: IndexedPropertyDefinition;
    /**
     * Defines the **OtherFax** property.
     */
    OtherFax: IndexedPropertyDefinition;
    /**
     * Defines the **OtherTelephone** property.
     */
    OtherTelephone: IndexedPropertyDefinition;
    /**
     * Defines the **Pager** property.
     */
    Pager: IndexedPropertyDefinition;
    /**
     * Defines the **PrimaryPhone** property.
     */
    PrimaryPhone: IndexedPropertyDefinition;
    /**
     * Defines the **RadioPhone** property.
     */
    RadioPhone: IndexedPropertyDefinition;
    /**
     * Defines the **Telex** property.
     */
    Telex: IndexedPropertyDefinition;
    /**
     * Defines the **TtyTddPhone** property.
     */
    TtyTddPhone: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessAddressStreet** property.
     */
    BusinessAddressStreet: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessAddressCity** property.
     */
    BusinessAddressCity: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessAddressState** property.
     */
    BusinessAddressState: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessAddressCountryOrRegion** property.
     */
    BusinessAddressCountryOrRegion: IndexedPropertyDefinition;
    /**
     * Defines the **BusinessAddressPostalCode** property.
     */
    BusinessAddressPostalCode: IndexedPropertyDefinition;
    /**
     * Defines the **HomeAddressStreet** property.
     */
    HomeAddressStreet: IndexedPropertyDefinition;
    /**
     * Defines the **HomeAddressCity** property.
     */
    HomeAddressCity: IndexedPropertyDefinition;
    /**
     * Defines the **HomeAddressState** property.
     */
    HomeAddressState: IndexedPropertyDefinition;
    /**
     * Defines the **HomeAddressCountryOrRegion** property.
     */
    HomeAddressCountryOrRegion: IndexedPropertyDefinition;
    /**
     * Defines the **HomeAddressPostalCode** property.
     */
    HomeAddressPostalCode: IndexedPropertyDefinition;
    /**
     * Defines the **OtherAddressStreet** property.
     */
    OtherAddressStreet: IndexedPropertyDefinition;
    /**
     * Defines the **OtherAddressCity** property.
     */
    OtherAddressCity: IndexedPropertyDefinition;
    /**
     * Defines the **OtherAddressState** property.
     */
    OtherAddressState: IndexedPropertyDefinition;
    /**
     * Defines the **OtherAddressCountryOrRegion** property.
     */
    OtherAddressCountryOrRegion: IndexedPropertyDefinition;
    /**
     * Defines the **OtherAddressPostalCode** property.
     */
    OtherAddressPostalCode: IndexedPropertyDefinition;
    /**
     * @internal Instance of **ContactSchema**
     */
    Instance: ContactSchema;
}

/**
 * Represents the schem for contacts.
 */
export interface ContactSchemaStatic extends ContactSchema {
}