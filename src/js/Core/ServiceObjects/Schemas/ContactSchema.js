"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BoolPropertyDefinition_1 = require("../../../PropertyDefinitions/BoolPropertyDefinition");
var ByteArrayArray_1 = require("../../../ComplexProperties/ByteArrayArray");
var ByteArrayPropertyDefinition_1 = require("../../../PropertyDefinitions/ByteArrayPropertyDefinition");
var CompleteName_1 = require("../../../ComplexProperties/CompleteName");
var ComplexPropertyDefinition_1 = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
var ContactSource_1 = require("../../../Enumerations/ContactSource");
var ContainedPropertyDefinition_1 = require("../../../PropertyDefinitions/ContainedPropertyDefinition");
var DateTimePropertyDefinition_1 = require("../../../PropertyDefinitions/DateTimePropertyDefinition");
var EmailAddress_1 = require("../../../ComplexProperties/EmailAddress");
var EmailAddressCollection_1 = require("../../../ComplexProperties/EmailAddressCollection");
var EmailAddressDictionary_1 = require("../../../ComplexProperties/EmailAddressDictionary");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var FileAsMapping_1 = require("../../../Enumerations/FileAsMapping");
var GenericPropertyDefinition_1 = require("../../../PropertyDefinitions/GenericPropertyDefinition");
var ImAddressDictionary_1 = require("../../../ComplexProperties/ImAddressDictionary");
var IndexedPropertyDefinition_1 = require("../../../PropertyDefinitions/IndexedPropertyDefinition");
var PhoneNumberDictionary_1 = require("../../../ComplexProperties/PhoneNumberDictionary");
var PhysicalAddressDictionary_1 = require("../../../ComplexProperties/PhysicalAddressDictionary");
var PhysicalAddressIndex_1 = require("../../../Enumerations/PhysicalAddressIndex");
var PropertyDefinitionFlags_1 = require("../../../Enumerations/PropertyDefinitionFlags");
var StringList_1 = require("../../../ComplexProperties/StringList");
var StringPropertyDefinition_1 = require("../../../PropertyDefinitions/StringPropertyDefinition");
var XmlElementNames_1 = require("../../XmlElementNames");
var ItemSchema_1 = require("./ItemSchema");
/**
 * FieldURIs for contacts.
 */
var FieldUris;
(function (FieldUris) {
    FieldUris.FileAs = "contacts:FileAs";
    FieldUris.FileAsMapping = "contacts:FileAsMapping";
    FieldUris.DisplayName = "contacts:DisplayName";
    FieldUris.GivenName = "contacts:GivenName";
    FieldUris.Initials = "contacts:Initials";
    FieldUris.MiddleName = "contacts:MiddleName";
    FieldUris.NickName = "contacts:Nickname";
    FieldUris.CompleteName = "contacts:CompleteName";
    FieldUris.CompanyName = "contacts:CompanyName";
    FieldUris.EmailAddress = "contacts:EmailAddress";
    FieldUris.EmailAddresses = "contacts:EmailAddresses";
    FieldUris.PhysicalAddresses = "contacts:PhysicalAddresses";
    FieldUris.PhoneNumber = "contacts:PhoneNumber";
    FieldUris.PhoneNumbers = "contacts:PhoneNumbers";
    FieldUris.AssistantName = "contacts:AssistantName";
    FieldUris.Birthday = "contacts:Birthday";
    FieldUris.BusinessHomePage = "contacts:BusinessHomePage";
    FieldUris.Children = "contacts:Children";
    FieldUris.Companies = "contacts:Companies";
    FieldUris.ContactSource = "contacts:ContactSource";
    FieldUris.Department = "contacts:Department";
    FieldUris.Generation = "contacts:Generation";
    FieldUris.ImAddress = "contacts:ImAddress";
    FieldUris.ImAddresses = "contacts:ImAddresses";
    FieldUris.JobTitle = "contacts:JobTitle";
    FieldUris.Manager = "contacts:Manager";
    FieldUris.Mileage = "contacts:Mileage";
    FieldUris.OfficeLocation = "contacts:OfficeLocation";
    FieldUris.PhysicalAddressCity = "contacts:PhysicalAddress:City";
    FieldUris.PhysicalAddressCountryOrRegion = "contacts:PhysicalAddress:CountryOrRegion";
    FieldUris.PhysicalAddressState = "contacts:PhysicalAddress:State";
    FieldUris.PhysicalAddressStreet = "contacts:PhysicalAddress:Street";
    FieldUris.PhysicalAddressPostalCode = "contacts:PhysicalAddress:PostalCode";
    FieldUris.PostalAddressIndex = "contacts:PostalAddressIndex";
    FieldUris.Profession = "contacts:Profession";
    FieldUris.SpouseName = "contacts:SpouseName";
    FieldUris.Surname = "contacts:Surname";
    FieldUris.WeddingAnniversary = "contacts:WeddingAnniversary";
    FieldUris.HasPicture = "contacts:HasPicture";
    FieldUris.PhoneticFullName = "contacts:PhoneticFullName";
    FieldUris.PhoneticFirstName = "contacts:PhoneticFirstName";
    FieldUris.PhoneticLastName = "contacts:PhoneticLastName";
    FieldUris.Alias = "contacts:Alias";
    FieldUris.Notes = "contacts:Notes";
    FieldUris.Photo = "contacts:Photo";
    FieldUris.UserSMIMECertificate = "contacts:UserSMIMECertificate";
    FieldUris.MSExchangeCertificate = "contacts:MSExchangeCertificate";
    FieldUris.DirectoryId = "contacts:DirectoryId";
    FieldUris.ManagerMailbox = "contacts:ManagerMailbox";
    FieldUris.DirectReports = "contacts:DirectReports";
})(FieldUris || (FieldUris = {}));
/**
 * Represents the schem for contacts.
 */
var ContactSchema = /** @class */ (function (_super) {
    __extends(ContactSchema, _super);
    function ContactSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    ContactSchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
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
    };
    /**
     * Defines the **FileAs** property.
     */
    ContactSchema.FileAs = new StringPropertyDefinition_1.StringPropertyDefinition("FileAs", XmlElementNames_1.XmlElementNames.FileAs, FieldUris.FileAs, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **FileAsMapping** property.
     */
    ContactSchema.FileAsMapping = new GenericPropertyDefinition_1.GenericPropertyDefinition("FileAsMapping", XmlElementNames_1.XmlElementNames.FileAsMapping, FieldUris.FileAsMapping, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, FileAsMapping_1.FileAsMapping);
    /**
     * Defines the **DisplayName** property.
     */
    ContactSchema.DisplayName = new StringPropertyDefinition_1.StringPropertyDefinition("DisplayName", XmlElementNames_1.XmlElementNames.DisplayName, FieldUris.DisplayName, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **GivenName** property.
     */
    ContactSchema.GivenName = new StringPropertyDefinition_1.StringPropertyDefinition("GivenName", XmlElementNames_1.XmlElementNames.GivenName, FieldUris.GivenName, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **Initials** property.
     */
    ContactSchema.Initials = new StringPropertyDefinition_1.StringPropertyDefinition("Initials", XmlElementNames_1.XmlElementNames.Initials, FieldUris.Initials, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **MiddleName** property.
     */
    ContactSchema.MiddleName = new StringPropertyDefinition_1.StringPropertyDefinition("MiddleName", XmlElementNames_1.XmlElementNames.MiddleName, FieldUris.MiddleName, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **NickName** property.
     */
    ContactSchema.NickName = new StringPropertyDefinition_1.StringPropertyDefinition("Nickname", XmlElementNames_1.XmlElementNames.NickName, FieldUris.NickName, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **CompleteName** property.
     */
    ContactSchema.CompleteName = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("CompleteName", XmlElementNames_1.XmlElementNames.CompleteName, FieldUris.CompleteName, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new CompleteName_1.CompleteName(); });
    /**
     * Defines the **CompanyName** property.
     */
    ContactSchema.CompanyName = new StringPropertyDefinition_1.StringPropertyDefinition("CompanyName", XmlElementNames_1.XmlElementNames.CompanyName, FieldUris.CompanyName, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **EmailAddresses** property.
     */
    ContactSchema.EmailAddresses = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("EmailAddresses", XmlElementNames_1.XmlElementNames.EmailAddresses, FieldUris.EmailAddresses, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new EmailAddressDictionary_1.EmailAddressDictionary(); });
    /**
     * Defines the **PhysicalAddresses** property.
     */
    ContactSchema.PhysicalAddresses = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("PhysicalAddresses", XmlElementNames_1.XmlElementNames.PhysicalAddresses, FieldUris.PhysicalAddresses, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new PhysicalAddressDictionary_1.PhysicalAddressDictionary(); });
    /**
     * Defines the **PhoneNumbers** property.
     */
    ContactSchema.PhoneNumbers = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("PhoneNumbers", XmlElementNames_1.XmlElementNames.PhoneNumbers, FieldUris.PhoneNumbers, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new PhoneNumberDictionary_1.PhoneNumberDictionary(); });
    /**
     * Defines the **AssistantName** property.
     */
    ContactSchema.AssistantName = new StringPropertyDefinition_1.StringPropertyDefinition("AssistantName", XmlElementNames_1.XmlElementNames.AssistantName, FieldUris.AssistantName, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **Birthday** property.
     */
    ContactSchema.Birthday = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("Birthday", XmlElementNames_1.XmlElementNames.Birthday, FieldUris.Birthday, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **BusinessHomePage** property.
     */
    ContactSchema.BusinessHomePage = new StringPropertyDefinition_1.StringPropertyDefinition("BusinessHomePage", XmlElementNames_1.XmlElementNames.BusinessHomePage, FieldUris.BusinessHomePage, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **Children** property.
     */
    ContactSchema.Children = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("Children", XmlElementNames_1.XmlElementNames.Children, FieldUris.Children, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new StringList_1.StringList(); });
    /**
     * Defines the **Companies** property.
     */
    ContactSchema.Companies = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("Companies", XmlElementNames_1.XmlElementNames.Companies, FieldUris.Companies, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new StringList_1.StringList(); });
    /**
     * Defines the **ContactSource** property.
     */
    ContactSchema.ContactSource = new GenericPropertyDefinition_1.GenericPropertyDefinition("ContactSource", XmlElementNames_1.XmlElementNames.ContactSource, FieldUris.ContactSource, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, ContactSource_1.ContactSource);
    /**
     * Defines the **Department** property.
     */
    ContactSchema.Department = new StringPropertyDefinition_1.StringPropertyDefinition("Department", XmlElementNames_1.XmlElementNames.Department, FieldUris.Department, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **Generation** property.
     */
    ContactSchema.Generation = new StringPropertyDefinition_1.StringPropertyDefinition("Generation", XmlElementNames_1.XmlElementNames.Generation, FieldUris.Generation, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **ImAddresses** property.
     */
    ContactSchema.ImAddresses = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("ImAddresses", XmlElementNames_1.XmlElementNames.ImAddresses, FieldUris.ImAddresses, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new ImAddressDictionary_1.ImAddressDictionary(); });
    /**
     * Defines the **JobTitle** property.
     */
    ContactSchema.JobTitle = new StringPropertyDefinition_1.StringPropertyDefinition("JobTitle", XmlElementNames_1.XmlElementNames.JobTitle, FieldUris.JobTitle, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **Manager** property.
     */
    ContactSchema.Manager = new StringPropertyDefinition_1.StringPropertyDefinition("Manager", XmlElementNames_1.XmlElementNames.Manager, FieldUris.Manager, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **Mileage** property.
     */
    ContactSchema.Mileage = new StringPropertyDefinition_1.StringPropertyDefinition("Mileage", XmlElementNames_1.XmlElementNames.Mileage, FieldUris.Mileage, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **OfficeLocation** property.
     */
    ContactSchema.OfficeLocation = new StringPropertyDefinition_1.StringPropertyDefinition("OfficeLocation", XmlElementNames_1.XmlElementNames.OfficeLocation, FieldUris.OfficeLocation, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **PostalAddressIndex** property.
     */
    ContactSchema.PostalAddressIndex = new GenericPropertyDefinition_1.GenericPropertyDefinition("PostalAddressIndex", XmlElementNames_1.XmlElementNames.PostalAddressIndex, FieldUris.PostalAddressIndex, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, PhysicalAddressIndex_1.PhysicalAddressIndex);
    /**
     * Defines the **Profession** property.
     */
    ContactSchema.Profession = new StringPropertyDefinition_1.StringPropertyDefinition("Profession", XmlElementNames_1.XmlElementNames.Profession, FieldUris.Profession, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **SpouseName** property.
     */
    ContactSchema.SpouseName = new StringPropertyDefinition_1.StringPropertyDefinition("SpouseName", XmlElementNames_1.XmlElementNames.SpouseName, FieldUris.SpouseName, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **Surname** property.
     */
    ContactSchema.Surname = new StringPropertyDefinition_1.StringPropertyDefinition("Surname", XmlElementNames_1.XmlElementNames.Surname, FieldUris.Surname, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **WeddingAnniversary** property.
     */
    ContactSchema.WeddingAnniversary = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("WeddingAnniversary", XmlElementNames_1.XmlElementNames.WeddingAnniversary, FieldUris.WeddingAnniversary, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **HasPicture** property.
     */
    ContactSchema.HasPicture = new BoolPropertyDefinition_1.BoolPropertyDefinition("HasPicture", XmlElementNames_1.XmlElementNames.HasPicture, FieldUris.HasPicture, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010);
    /**
     * Defines the **PhoneticFullName** property.
     */
    ContactSchema.PhoneticFullName = new StringPropertyDefinition_1.StringPropertyDefinition("PhoneticFullName", XmlElementNames_1.XmlElementNames.PhoneticFullName, FieldUris.PhoneticFullName, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1);
    /**
     * Defines the **PhoneticFirstName** property.
     */
    ContactSchema.PhoneticFirstName = new StringPropertyDefinition_1.StringPropertyDefinition("PhoneticFirstName", XmlElementNames_1.XmlElementNames.PhoneticFirstName, FieldUris.PhoneticFirstName, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1);
    /**
     * Defines the **PhoneticLastName** property.
     */
    ContactSchema.PhoneticLastName = new StringPropertyDefinition_1.StringPropertyDefinition("PhoneticLastName", XmlElementNames_1.XmlElementNames.PhoneticLastName, FieldUris.PhoneticLastName, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1);
    /**
     * Defines the **Alias** property.
     */
    ContactSchema.Alias = new StringPropertyDefinition_1.StringPropertyDefinition("Alias", XmlElementNames_1.XmlElementNames.Alias, FieldUris.Alias, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1);
    /**
     * Defines the **Notes** property.
     */
    ContactSchema.Notes = new StringPropertyDefinition_1.StringPropertyDefinition("Notes", XmlElementNames_1.XmlElementNames.Notes, FieldUris.Notes, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1);
    /**
     * Defines the **Photo** property.
     */
    ContactSchema.Photo = new ByteArrayPropertyDefinition_1.ByteArrayPropertyDefinition("Photo", XmlElementNames_1.XmlElementNames.Photo, FieldUris.Photo, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1);
    /**
     * Defines the **UserSMIMECertificate** property.
     */
    ContactSchema.UserSMIMECertificate = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("UserSMIMECertificate", XmlElementNames_1.XmlElementNames.UserSMIMECertificate, FieldUris.UserSMIMECertificate, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, function () { return new ByteArrayArray_1.ByteArrayArray(); });
    /**
     * Defines the **MSExchangeCertificate** property.
     */
    ContactSchema.MSExchangeCertificate = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("MSExchangeCertificate", XmlElementNames_1.XmlElementNames.MSExchangeCertificate, FieldUris.MSExchangeCertificate, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, function () { return new ByteArrayArray_1.ByteArrayArray(); });
    /**
     * Defines the **DirectoryId** property.
     */
    ContactSchema.DirectoryId = new StringPropertyDefinition_1.StringPropertyDefinition("DirectoryId", XmlElementNames_1.XmlElementNames.DirectoryId, FieldUris.DirectoryId, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1);
    /**
     * Defines the **ManagerMailbox** property.
     */
    ContactSchema.ManagerMailbox = new ContainedPropertyDefinition_1.ContainedPropertyDefinition("ManagerMailbox", XmlElementNames_1.XmlElementNames.ManagerMailbox, FieldUris.ManagerMailbox, XmlElementNames_1.XmlElementNames.Mailbox, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, function () { return new EmailAddress_1.EmailAddress(); });
    /**
     * Defines the **DirectReports** property.
     */
    ContactSchema.DirectReports = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("DirectReports", XmlElementNames_1.XmlElementNames.DirectReports, FieldUris.DirectReports, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1, function () { return new EmailAddressCollection_1.EmailAddressCollection(); });
    /**
     * Defines the **EmailAddress1** property.
     */
    ContactSchema.EmailAddress1 = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.EmailAddress, "EmailAddress1");
    /**
     * Defines the **EmailAddress2** property.
     */
    ContactSchema.EmailAddress2 = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.EmailAddress, "EmailAddress2");
    /**
     * Defines the **EmailAddress3** property.
     */
    ContactSchema.EmailAddress3 = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.EmailAddress, "EmailAddress3");
    /**
     * Defines the **ImAddress1** property.
     */
    ContactSchema.ImAddress1 = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.ImAddress, "ImAddress1");
    /**
     * Defines the **ImAddress2** property.
     */
    ContactSchema.ImAddress2 = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.ImAddress, "ImAddress2");
    /**
     * Defines the **ImAddress3** property.
     */
    ContactSchema.ImAddress3 = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.ImAddress, "ImAddress3");
    /**
     * Defines the **AssistantPhone** property.
     */
    ContactSchema.AssistantPhone = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "AssistantPhone");
    /**
     * Defines the **BusinessFax** property.
     */
    ContactSchema.BusinessFax = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "BusinessFax");
    /**
     * Defines the **BusinessPhone** property.
     */
    ContactSchema.BusinessPhone = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "BusinessPhone");
    /**
     * Defines the **BusinessPhone2** property.
     */
    ContactSchema.BusinessPhone2 = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "BusinessPhone2");
    /**
     * Defines the **Callback** property.
     */
    ContactSchema.Callback = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "Callback");
    /**
     * Defines the **CarPhone** property.
     */
    ContactSchema.CarPhone = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "CarPhone");
    /**
     * Defines the **CompanyMainPhone** property.
     */
    ContactSchema.CompanyMainPhone = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "CompanyMainPhone");
    /**
     * Defines the **HomeFax** property.
     */
    ContactSchema.HomeFax = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "HomeFax");
    /**
     * Defines the **HomePhone** property.
     */
    ContactSchema.HomePhone = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "HomePhone");
    /**
     * Defines the **HomePhone2** property.
     */
    ContactSchema.HomePhone2 = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "HomePhone2");
    /**
     * Defines the **Isdn** property.
     */
    ContactSchema.Isdn = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "Isdn");
    /**
     * Defines the **MobilePhone** property.
     */
    ContactSchema.MobilePhone = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "MobilePhone");
    /**
     * Defines the **OtherFax** property.
     */
    ContactSchema.OtherFax = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "OtherFax");
    /**
     * Defines the **OtherTelephone** property.
     */
    ContactSchema.OtherTelephone = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "OtherTelephone");
    /**
     * Defines the **Pager** property.
     */
    ContactSchema.Pager = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "Pager");
    /**
     * Defines the **PrimaryPhone** property.
     */
    ContactSchema.PrimaryPhone = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "PrimaryPhone");
    /**
     * Defines the **RadioPhone** property.
     */
    ContactSchema.RadioPhone = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "RadioPhone");
    /**
     * Defines the **Telex** property.
     */
    ContactSchema.Telex = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "Telex");
    /**
     * Defines the **TtyTddPhone** property.
     */
    ContactSchema.TtyTddPhone = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhoneNumber, "TtyTddPhone");
    /**
     * Defines the **BusinessAddressStreet** property.
     */
    ContactSchema.BusinessAddressStreet = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhysicalAddressStreet, "Business");
    /**
     * Defines the **BusinessAddressCity** property.
     */
    ContactSchema.BusinessAddressCity = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhysicalAddressCity, "Business");
    /**
     * Defines the **BusinessAddressState** property.
     */
    ContactSchema.BusinessAddressState = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhysicalAddressState, "Business");
    /**
     * Defines the **BusinessAddressCountryOrRegion** property.
     */
    ContactSchema.BusinessAddressCountryOrRegion = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhysicalAddressCountryOrRegion, "Business");
    /**
     * Defines the **BusinessAddressPostalCode** property.
     */
    ContactSchema.BusinessAddressPostalCode = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhysicalAddressPostalCode, "Business");
    /**
     * Defines the **HomeAddressStreet** property.
     */
    ContactSchema.HomeAddressStreet = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhysicalAddressStreet, "Home");
    /**
     * Defines the **HomeAddressCity** property.
     */
    ContactSchema.HomeAddressCity = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhysicalAddressCity, "Home");
    /**
     * Defines the **HomeAddressState** property.
     */
    ContactSchema.HomeAddressState = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhysicalAddressState, "Home");
    /**
     * Defines the **HomeAddressCountryOrRegion** property.
     */
    ContactSchema.HomeAddressCountryOrRegion = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhysicalAddressCountryOrRegion, "Home");
    /**
     * Defines the **HomeAddressPostalCode** property.
     */
    ContactSchema.HomeAddressPostalCode = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhysicalAddressPostalCode, "Home");
    /**
     * Defines the **OtherAddressStreet** property.
     */
    ContactSchema.OtherAddressStreet = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhysicalAddressStreet, "Other");
    /**
     * Defines the **OtherAddressCity** property.
     */
    ContactSchema.OtherAddressCity = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhysicalAddressCity, "Other");
    /**
     * Defines the **OtherAddressState** property.
     */
    ContactSchema.OtherAddressState = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhysicalAddressState, "Other");
    /**
     * Defines the **OtherAddressCountryOrRegion** property.
     */
    ContactSchema.OtherAddressCountryOrRegion = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhysicalAddressCountryOrRegion, "Other");
    /**
     * Defines the **OtherAddressPostalCode** property.
     */
    ContactSchema.OtherAddressPostalCode = new IndexedPropertyDefinition_1.IndexedPropertyDefinition(FieldUris.PhysicalAddressPostalCode, "Other");
    /**
     * @internal Instance of **ContactSchema**
     */
    ContactSchema.Instance = new ContactSchema();
    return ContactSchema;
}(ItemSchema_1.ItemSchema));
exports.ContactSchema = ContactSchema;
