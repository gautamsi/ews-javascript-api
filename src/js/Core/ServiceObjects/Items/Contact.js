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
var EwsUtilities_1 = require("../../EwsUtilities");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var FileAsMapping_1 = require("../../../Enumerations/FileAsMapping");
var ItemAttachment_1 = require("../../../ComplexProperties/ItemAttachment");
var PropertyException_1 = require("../../../Exceptions/PropertyException");
var PropertySet_1 = require("../../PropertySet");
var Schemas_1 = require("../Schemas/Schemas");
var Strings_1 = require("../../../Strings");
var XmlElementNames_1 = require("../../XmlElementNames");
var Item_1 = require("./Item");
/**
 * Represents a **contact**. Properties available on contacts are defined in the *ContactSchema* class.
 *
 */
var Contact = /** @class */ (function (_super) {
    __extends(Contact, _super);
    function Contact(serviceOrParentAttachment) {
        return _super.call(this, serviceOrParentAttachment instanceof ItemAttachment_1.ItemAttachment ? serviceOrParentAttachment.Service : serviceOrParentAttachment) || this;
    }
    Object.defineProperty(Contact, "Attachable", {
        /** required to check [Attachable] attribute, AttachmentCollection.AddItemAttachment<TItem>() checks for non inherited [Attachable] attribute. */
        get: function () { return this.name === "Contact"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Contact.prototype, "FileAs", {
        /**
         * Gets or set the name under which this contact is filed as. FileAs can be manually set or can be automatically calculated based on the value of the FileAsMapping property.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.FileAs);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.FileAs, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "FileAsMapping", {
        /**
         * Gets or sets a value indicating how the FileAs property should be automatically calculated.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.FileAsMapping);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.FileAsMapping, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "DisplayName", {
        /**
         * Gets or sets the display name of the contact.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.DisplayName);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.DisplayName, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "GivenName", {
        /**
         * Gets or sets the given name of the contact.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.GivenName);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.GivenName, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "Initials", {
        /**
         * Gets or sets the initials of the contact.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.Initials);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.Initials, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "MiddleName", {
        /**
         * Gets or sets the middle mame of the contact.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.MiddleName);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.MiddleName, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "NickName", {
        /**
         * Gets or sets the nick name of the contact.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.NickName);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.NickName, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "CompleteName", {
        /**
         * Gets the complete name of the contact.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.CompleteName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "CompanyName", {
        /**
         * Gets or sets the compnay name of the contact.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.CompanyName);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.CompanyName, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "EmailAddresses", {
        /**
         * Gets an indexed list of e-mail addresses for the contact. For example, to set the first e-mail address,
         * use the following syntax: EmailAddresses[EmailAddressKey.EmailAddress1] = "john.doe@contoso.com"
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.EmailAddresses);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "PhysicalAddresses", {
        /**
         * Gets an indexed list of physical addresses for the contact. For example, to set the business address,
         * use the following syntax: PhysicalAddresses[PhysicalAddressKey.Business] = new PhysicalAddressEntry()
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.PhysicalAddresses);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "PhoneNumbers", {
        /**
         * Gets an indexed list of phone numbers for the contact. For example, to set the home phone number,
         * use the following syntax: PhoneNumbers[PhoneNumberKey.HomePhone] = "phone number"
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.PhoneNumbers);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "AssistantName", {
        /**
         * Gets or sets the contact's assistant name.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.AssistantName);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.AssistantName, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "Birthday", {
        /**
         * Gets or sets the birthday of the contact.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.Birthday);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.Birthday, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "BusinessHomePage", {
        /**
         * Gets or sets the business home page of the contact.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.BusinessHomePage);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.BusinessHomePage, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "Children", {
        /**
         * Gets or sets a list of children for the contact.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.Children);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.Children, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "Companies", {
        /**
         * Gets or sets a list of companies for the contact.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.Companies);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.Companies, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "ContactSource", {
        /**
         * Gets the source of the contact.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.ContactSource);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "Department", {
        /**
         * Gets or sets the department of the contact.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.Department);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.Department, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "Generation", {
        /**
         * Gets or sets the generation of the contact.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.Generation);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.Generation, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "ImAddresses", {
        /**
         * Gets an indexed list of Instant Messaging addresses for the contact.
         * For example, to set the first IM address, use the following syntax: ImAddresses[ImAddressKey.ImAddress1] = "john.doe@contoso.com"
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.ImAddresses);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "JobTitle", {
        /**
         * Gets or sets the contact's job title.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.JobTitle);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.JobTitle, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "Manager", {
        /**
         * Gets or sets the name of the contact's manager.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.Manager);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.Manager, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "Mileage", {
        /**
         * Gets or sets the mileage for the contact.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.Mileage);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.Mileage, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "OfficeLocation", {
        /**
         * Gets or sets the location of the contact's office.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.OfficeLocation);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.OfficeLocation, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "PostalAddressIndex", {
        /**
         * Gets or sets the index of the contact's postal address. When set, PostalAddressIndex refers to an entry in the PhysicalAddresses indexed list.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.PostalAddressIndex);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.PostalAddressIndex, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "Profession", {
        /**
         * Gets or sets the contact's profession.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.Profession);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.Profession, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "SpouseName", {
        /**
         * Gets or sets the name of the contact's spouse.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.SpouseName);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.SpouseName, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "Surname", {
        /**
         * Gets or sets the surname of the contact.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.Surname);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.Surname, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "WeddingAnniversary", {
        /**
         * Gets or sets the date of the contact's wedding anniversary.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.WeddingAnniversary);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ContactSchema.WeddingAnniversary, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "HasPicture", {
        /**
         * Gets a value indicating whether this contact has a picture associated with it.
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.HasPicture);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "PhoneticFullName", {
        /**
         * Gets the full phonetic name from the directory
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.PhoneticFullName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "PhoneticFirstName", {
        /**
         * Gets the phonetic first name from the directory
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.PhoneticFirstName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "PhoneticLastName", {
        /**
         * Gets the phonetic last name from the directory
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.PhoneticLastName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "Alias", {
        /**
         * Gets the Alias from the directory
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.Alias);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "Notes", {
        /**
         * Get the Notes from the directory
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.Notes);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "DirectoryPhoto", {
        /**
         * Gets the Photo from the directory **Unstable: needs testing**
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.Photo);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "UserSMIMECertificate", {
        /**
         * Gets the User SMIME certificate from the directory **Unstable: needs testing**
         * //ref: cant use bytearray, using base64 decoded string instead -  number[][]
         *
         */
        get: function () {
            var byteArrayArray = this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.UserSMIMECertificate);
            return byteArrayArray.Content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "MSExchangeCertificate", {
        /**
         * Gets the MSExchange certificate from the directory **Unstable: needs testing**
         * //ref: cant use bytearray, using base64 decoded string instead -  number[][]
         *
         */
        get: function () {
            var byteArrayArray = this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.MSExchangeCertificate);
            return byteArrayArray.Content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "DirectoryId", {
        /**
         * Gets the DirectoryID as Guid or DN string
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.DirectoryId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "ManagerMailbox", {
        /**
         * Gets the manager mailbox information
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.ManagerMailbox);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "DirectReports", {
        /**
         * Get the direct reports mailbox information
         *
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ContactSchema.DirectReports);
        },
        enumerable: true,
        configurable: true
    });
    // Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): Promise<Contact> { //removed
    //     return Contact.Bind(service, id, propertySet);
    // }
    Contact.Bind = function (service, id, propertySet) {
        if (propertySet === void 0) { propertySet = PropertySet_1.PropertySet.FirstClassProperties; }
        return service.BindToItem(id, propertySet, Contact);
    };
    /**
     * Retrieves the file attachment that holds the contact's picture. **Unstable: needs testing**
     *
     * @return  {FileAttachment}      The file attachment that holds the contact's picture.
     */
    Contact.prototype.GetContactPictureAttachment = function () {
        EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this.Service, ExchangeVersion_1.ExchangeVersion.Exchange2010, "GetContactPictureAttachment");
        if (!this.PropertyBag.IsPropertyLoaded(Schemas_1.Schemas.ContactSchema.Attachments)) {
            throw new PropertyException_1.PropertyException(Strings_1.Strings.AttachmentCollectionNotLoaded);
        }
        for (var _i = 0, _a = this.Attachments.Items; _i < _a.length; _i++) {
            var attachment = _a[_i];
            //todo: implement typecasting
            var fileAttachment = attachment;
            if (fileAttachment.IsContactPhoto) {
                return fileAttachment;
            }
        }
        return null;
    };
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    Contact.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    Contact.prototype.GetSchema = function () { return Schemas_1.Schemas.ContactSchema.Instance; };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    Contact.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.Contact; };
    /**
     * Removes the picture from local attachment collection.     *
     */
    Contact.prototype.InternalRemoveContactPicture = function () {
        // Iterates in reverse order to remove file attachments that have IsContactPhoto set to true.
        for (var index = this.Attachments.Count - 1; index >= 0; index--) {
            //todo: implement safe typecasting
            var fileAttachment = this.Attachments._getItem(index);
            if (fileAttachment != null) {
                if (fileAttachment.IsContactPhoto) {
                    this.Attachments.Remove(fileAttachment);
                }
            }
        }
    };
    /**
     * Removes the contact's picture.     *
     */
    Contact.prototype.RemoveContactPicture = function () {
        EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this.Service, ExchangeVersion_1.ExchangeVersion.Exchange2010, "RemoveContactPicture");
        if (!this.PropertyBag.IsPropertyLoaded(Schemas_1.Schemas.ContactSchema.Attachments)) {
            throw new PropertyException_1.PropertyException(Strings_1.Strings.AttachmentCollectionNotLoaded);
        }
        this.InternalRemoveContactPicture();
    };
    //ref: //todo: Not Implemented
    //SetContactPicture(contentStream: any /*System.IO.Stream*/): any { throw new Error("Contact.ts - SetContactPicture : Not implemented."); }
    //SetContactPicture(content: number[] /*System.Byte[]*/): any { throw new Error("Contact.ts - SetContactPicture : Not implemented."); }
    //SetContactPicture(fileName: string): any { throw new Error("Contact.ts - SetContactPicture : Not implemented."); }
    /**
     * Sets the contact's picture using the base64 content of file.
     *
     * @param   {string}    base64Content       base64 content of picture attachment.
     * @param   {string}    attachmentName      name of the picture attachment.
     *
     */
    Contact.prototype.SetContactPicture = function (base64Content, attachmentName) {
        EwsUtilities_1.EwsUtilities.ValidateMethodVersion(this.Service, ExchangeVersion_1.ExchangeVersion.Exchange2010, "SetContactPicture");
        this.InternalRemoveContactPicture();
        var fileAttachment = this.Attachments.AddFileAttachment(attachmentName, base64Content);
        fileAttachment.IsContactPhoto = true;
    };
    /**
     * @internal Validates this instance.     *
     */
    Contact.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        var fileAsMapping = { outValue: null };
        if (this.TryGetProperty(Schemas_1.Schemas.ContactSchema.FileAsMapping, fileAsMapping)) {
            // FileAsMapping is extended by 5 new values in 2010 mode. Validate that they are used according the version.
            EwsUtilities_1.EwsUtilities.ValidateEnumVersionValue(FileAsMapping_1.FileAsMapping, fileAsMapping.outValue, this.Service.RequestedServerVersion, "FileAsMapping");
        }
    };
    Contact.ContactPictureName = "ContactPicture.jpg";
    return Contact;
}(Item_1.Item));
exports.Contact = Contact;
