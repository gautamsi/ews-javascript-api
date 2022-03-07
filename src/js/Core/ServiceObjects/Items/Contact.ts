import { ByteArrayArray } from "../../../ComplexProperties/ByteArrayArray";
import { CompleteName } from "../../../ComplexProperties/CompleteName";
import { ContactSource } from "../../../Enumerations/ContactSource";
import { DateTime } from "../../../DateTime";
import { EmailAddress } from "../../../ComplexProperties/EmailAddress";
import { EmailAddressCollection } from "../../../ComplexProperties/EmailAddressCollection";
import { EmailAddressDictionary } from "../../../ComplexProperties/EmailAddressDictionary";
import { EwsUtilities } from "../../EwsUtilities";
import { ExchangeService } from "../../ExchangeService";
import { ExchangeVersion } from "../../../Enumerations/ExchangeVersion";
import { FileAsMapping } from "../../../Enumerations/FileAsMapping";
import { FileAttachment } from "../../../ComplexProperties/FileAttachment";
import { IOutParam } from "../../../Interfaces/IOutParam";
import { ImAddressDictionary } from "../../../ComplexProperties/ImAddressDictionary";
import { ItemAttachment } from "../../../ComplexProperties/ItemAttachment";
import { ItemId } from "../../../ComplexProperties/ItemId";
import { PhoneNumberDictionary } from "../../../ComplexProperties/PhoneNumberDictionary";
import { PhysicalAddressDictionary } from "../../../ComplexProperties/PhysicalAddressDictionary";
import { PhysicalAddressIndex } from "../../../Enumerations/PhysicalAddressIndex";
import { PropertyException } from "../../../Exceptions/PropertyException";
import { PropertySet } from "../../PropertySet";
import { Schemas } from "../Schemas/Schemas";
import { ServiceObjectSchema } from "../Schemas/ServiceObjectSchema";
import { StringList } from "../../../ComplexProperties/StringList";
import { Strings } from "../../../Strings";
import { XmlElementNames } from "../../XmlElementNames";

import { Item } from "./Item";
/**
 * Represents a **contact**. Properties available on contacts are defined in the *ContactSchema* class.
 * 
 */
export class Contact extends Item {

    /** required to check [Attachable] attribute, AttachmentCollection.AddItemAttachment<TItem>() checks for non inherited [Attachable] attribute. */
    public static get Attachable(): boolean { return (<any>this).name === "Contact"; };

    private static ContactPictureName: string = "ContactPicture.jpg";

    /**
     * Gets or set the name under which this contact is filed as. FileAs can be manually set or can be automatically calculated based on the value of the FileAsMapping property.
     *
     */
    get FileAs(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.FileAs);
    }
    set FileAs(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.FileAs, value);
    }

    /**
     * Gets or sets a value indicating how the FileAs property should be automatically calculated.
     * 
     */
    get FileAsMapping(): FileAsMapping {
        return <FileAsMapping>this.PropertyBag._getItem(Schemas.ContactSchema.FileAsMapping);
    }
    set FileAsMapping(value: FileAsMapping) {
        this.PropertyBag._setItem(Schemas.ContactSchema.FileAsMapping, value);
    }

    /**
     * Gets or sets the display name of the contact.
     * 
     */
    get DisplayName(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.DisplayName);
    }
    set DisplayName(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.DisplayName, value);
    }

    /**
     * Gets or sets the given name of the contact.
     * 
     */
    get GivenName(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.GivenName);
    }
    set GivenName(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.GivenName, value);
    }

    /**
     * Gets or sets the initials of the contact.
     * 
     */
    get Initials(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.Initials);
    }
    set Initials(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.Initials, value);
    }

    /**
     * Gets or sets the middle mame of the contact.
     * 
     */
    get MiddleName(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.MiddleName);
    }
    set MiddleName(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.MiddleName, value);
    }

    /**
     * Gets or sets the nick name of the contact.
     * 
     */
    get NickName(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.NickName);
    }
    set NickName(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.NickName, value);
    }

    /**
     * Gets the complete name of the contact.
     * 
     */
    get CompleteName(): CompleteName {
        return <CompleteName>this.PropertyBag._getItem(Schemas.ContactSchema.CompleteName);
    }

    /**
     * Gets or sets the compnay name of the contact.
     * 
     */
    get CompanyName(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.CompanyName);
    }
    set CompanyName(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.CompanyName, value);
    }

    /**
     * Gets an indexed list of e-mail addresses for the contact. For example, to set the first e-mail address, 
     * use the following syntax: EmailAddresses[EmailAddressKey.EmailAddress1] = "john.doe@contoso.com"
     * 
     */
    get EmailAddresses(): EmailAddressDictionary {
        return <EmailAddressDictionary>this.PropertyBag._getItem(Schemas.ContactSchema.EmailAddresses);
    }

    /**
     * Gets an indexed list of physical addresses for the contact. For example, to set the business address,
     * use the following syntax: PhysicalAddresses[PhysicalAddressKey.Business] = new PhysicalAddressEntry()
     * 
     */
    get PhysicalAddresses(): PhysicalAddressDictionary {
        return <PhysicalAddressDictionary>this.PropertyBag._getItem(Schemas.ContactSchema.PhysicalAddresses);
    }

    /**
     * Gets an indexed list of phone numbers for the contact. For example, to set the home phone number,
     * use the following syntax: PhoneNumbers[PhoneNumberKey.HomePhone] = "phone number"
     * 
     */
    get PhoneNumbers(): PhoneNumberDictionary {
        return <PhoneNumberDictionary>this.PropertyBag._getItem(Schemas.ContactSchema.PhoneNumbers);
    }

    /**
     * Gets or sets the contact's assistant name.
     * 
     */
    get AssistantName(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.AssistantName);
    }
    set AssistantName(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.AssistantName, value);
    }

    /**
     * Gets or sets the birthday of the contact.
     * 
     */
    get Birthday(): DateTime {
        return <DateTime>this.PropertyBag._getItem(Schemas.ContactSchema.Birthday);
    }
    set Birthday(value: DateTime) {
        this.PropertyBag._setItem(Schemas.ContactSchema.Birthday, value);
    }

    /**
     * Gets or sets the business home page of the contact.
     * 
     */
    get BusinessHomePage(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.BusinessHomePage);
    }
    set BusinessHomePage(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.BusinessHomePage, value);
    }

    /**
     * Gets or sets a list of children for the contact.
     * 
     */
    get Children(): StringList {
        return <StringList>this.PropertyBag._getItem(Schemas.ContactSchema.Children);
    }
    set Children(value: StringList) {
        this.PropertyBag._setItem(Schemas.ContactSchema.Children, value);
    }

    /**
     * Gets or sets a list of companies for the contact.
     * 
     */
    get Companies(): StringList {
        return <StringList>this.PropertyBag._getItem(Schemas.ContactSchema.Companies);
    }
    set Companies(value: StringList) {
        this.PropertyBag._setItem(Schemas.ContactSchema.Companies, value);
    }

    /**
     * Gets the source of the contact.
     * 
     */
    get ContactSource(): ContactSource {
        return <ContactSource>this.PropertyBag._getItem(Schemas.ContactSchema.ContactSource);
    }

    /**
     * Gets or sets the department of the contact.
     * 
     */
    get Department(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.Department);
    }
    set Department(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.Department, value);
    }

    /**
     * Gets or sets the generation of the contact.
     * 
     */
    get Generation(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.Generation);
    }
    set Generation(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.Generation, value);
    }

    /**
     * Gets an indexed list of Instant Messaging addresses for the contact. 
     * For example, to set the first IM address, use the following syntax: ImAddresses[ImAddressKey.ImAddress1] = "john.doe@contoso.com"
     * 
     */
    get ImAddresses(): ImAddressDictionary {
        return <ImAddressDictionary>this.PropertyBag._getItem(Schemas.ContactSchema.ImAddresses);
    }

    /**
     * Gets or sets the contact's job title.
     * 
     */
    get JobTitle(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.JobTitle);
    }
    set JobTitle(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.JobTitle, value);
    }

    /**
     * Gets or sets the name of the contact's manager.
     * 
     */
    get Manager(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.Manager);
    }
    set Manager(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.Manager, value);
    }

    /**
     * Gets or sets the mileage for the contact.
     * 
     */
    get Mileage(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.Mileage);
    }
    set Mileage(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.Mileage, value);
    }

    /**
     * Gets or sets the location of the contact's office.
     * 
     */
    get OfficeLocation(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.OfficeLocation);
    }
    set OfficeLocation(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.OfficeLocation, value);
    }

    /**
     * Gets or sets the index of the contact's postal address. When set, PostalAddressIndex refers to an entry in the PhysicalAddresses indexed list.
     * 
     */
    get PostalAddressIndex(): PhysicalAddressIndex {
        return <PhysicalAddressIndex>this.PropertyBag._getItem(Schemas.ContactSchema.PostalAddressIndex);
    }
    set PostalAddressIndex(value: PhysicalAddressIndex) {
        this.PropertyBag._setItem(Schemas.ContactSchema.PostalAddressIndex, value);
    }

    /**
     * Gets or sets the contact's profession.
     * 
     */
    get Profession(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.Profession);
    }
    set Profession(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.Profession, value);
    }

    /**
     * Gets or sets the name of the contact's spouse.
     * 
     */
    get SpouseName(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.SpouseName);
    }
    set SpouseName(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.SpouseName, value);
    }

    /**
     * Gets or sets the surname of the contact.
     * 
     */
    get Surname(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.Surname);
    }
    set Surname(value: string) {
        this.PropertyBag._setItem(Schemas.ContactSchema.Surname, value);
    }

    /**
     * Gets or sets the date of the contact's wedding anniversary.
     * 
     */
    get WeddingAnniversary(): DateTime {
        return <DateTime>this.PropertyBag._getItem(Schemas.ContactSchema.WeddingAnniversary);
    }
    set WeddingAnniversary(value: DateTime) {
        this.PropertyBag._setItem(Schemas.ContactSchema.WeddingAnniversary, value);
    }

    /**
     * Gets a value indicating whether this contact has a picture associated with it.
     * 
     */
    get HasPicture(): boolean {
        return <boolean>this.PropertyBag._getItem(Schemas.ContactSchema.HasPicture);
    }

    /**
     * Gets the full phonetic name from the directory
     * 
     */
    get PhoneticFullName(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.PhoneticFullName);
    }

    /**
     * Gets the phonetic first name from the directory
     * 
     */
    get PhoneticFirstName(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.PhoneticFirstName);
    }

    /**
     * Gets the phonetic last name from the directory
     * 
     */
    get PhoneticLastName(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.PhoneticLastName);
    }

    /**
     * Gets the Alias from the directory
     * 
     */
    get Alias(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.Alias);
    }

    /**
     * Get the Notes from the directory
     * 
     */
    get Notes(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.Notes);
    }

    /**
     * Gets the Photo from the directory **Unstable: needs testing**
     * 
     */
    get DirectoryPhoto(): number[] {
        return <number[]>this.PropertyBag._getItem(Schemas.ContactSchema.Photo);
    }

    /**
     * Gets the User SMIME certificate from the directory **Unstable: needs testing**
     * //ref: cant use bytearray, using base64 decoded string instead -  number[][]
     * 
     */
    get UserSMIMECertificate(): string[] {
        var byteArrayArray: ByteArrayArray = <ByteArrayArray>this.PropertyBag._getItem(Schemas.ContactSchema.UserSMIMECertificate);
        return byteArrayArray.Content;
    }

    /**
     * Gets the MSExchange certificate from the directory **Unstable: needs testing**
     * //ref: cant use bytearray, using base64 decoded string instead -  number[][]
     * 
     */
    get MSExchangeCertificate(): string[] {
        var byteArrayArray: ByteArrayArray = <ByteArrayArray>this.PropertyBag._getItem(Schemas.ContactSchema.MSExchangeCertificate);
        return byteArrayArray.Content;
    }

    /**
     * Gets the DirectoryID as Guid or DN string
     * 
     */
    get DirectoryId(): string {
        return <string>this.PropertyBag._getItem(Schemas.ContactSchema.DirectoryId);
    }

    /**
     * Gets the manager mailbox information
     * 
     */
    get ManagerMailbox(): EmailAddress {
        return <EmailAddress>this.PropertyBag._getItem(Schemas.ContactSchema.ManagerMailbox);
    }

    /**
     * Get the direct reports mailbox information
     * 
     */
    get DirectReports(): EmailAddressCollection {
        return <EmailAddressCollection>this.PropertyBag._getItem(Schemas.ContactSchema.DirectReports);
    }

    /**
     * Initializes an unsaved local instance of . To bind to an existing contact, use Contact.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService object to which the contact will be bound.
     */
    constructor(service: ExchangeService);
    /**
     * @internal Initializes a new instance of the **Contact** class.
     *
     * @param   {ItemAttachment}   parentAttachment   The parent attachment.
     */
    constructor(parentAttachment: ItemAttachment);
    constructor(serviceOrParentAttachment: ExchangeService | ItemAttachment) {
        super(serviceOrParentAttachment instanceof ItemAttachment ? serviceOrParentAttachment.Service : <ExchangeService>serviceOrParentAttachment);//todo:fix -can not user instanceof with exchangeservice, creates circular loop with ewsutility 
    }

    /**
     * Binds to an existing contact and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service         The service to use to bind to the contact.
     * @param   {ItemId}            id              The Id of the contact to bind to.
     * @return  {Promise<Contact>}                 A Contact instance representing the contact corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId): Promise<Contact>;
    /**
     * Binds to an existing contact and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service         The service to use to bind to the contact.
     * @param   {ItemId}            id              The Id of the contact to bind to.
     * @param   {PropertySet}       propertySet     The set of properties to load.
     * @return  {Promise<Contact>}                 A Contact instance representing the contact corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Promise<Contact>;
    // Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): Promise<Contact> { //removed
    //     return Contact.Bind(service, id, propertySet);
    // }
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): Promise<Contact> {
        return service.BindToItem<Contact>(id, propertySet, Contact);
    }

    /**
     * Retrieves the file attachment that holds the contact's picture. **Unstable: needs testing**
     *
     * @return  {FileAttachment}      The file attachment that holds the contact's picture.
     */
    GetContactPictureAttachment(): FileAttachment {
        EwsUtilities.ValidateMethodVersion(this.Service, ExchangeVersion.Exchange2010, "GetContactPictureAttachment");

        if (!this.PropertyBag.IsPropertyLoaded(Schemas.ContactSchema.Attachments)) {
            throw new PropertyException(Strings.AttachmentCollectionNotLoaded);
        }

        for (var attachment of this.Attachments.Items) {
            //todo: implement typecasting
            var fileAttachment = <FileAttachment>attachment;
            if (fileAttachment.IsContactPhoto) {
                return fileAttachment;
            }
        }
        return null;
    }

    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }

    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema { return Schemas.ContactSchema.Instance; }

    /**
     * @internal Gets the element name of item in XML
     * 
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string { return XmlElementNames.Contact; }

    /**
     * Removes the picture from local attachment collection.     *
     */
    private InternalRemoveContactPicture(): void {
        // Iterates in reverse order to remove file attachments that have IsContactPhoto set to true.
        for (var index = this.Attachments.Count - 1; index >= 0; index--) {
            //todo: implement safe typecasting
            var fileAttachment: FileAttachment = <FileAttachment>this.Attachments._getItem(index);
            if (fileAttachment != null) {
                if (fileAttachment.IsContactPhoto) {
                    this.Attachments.Remove(fileAttachment);
                }
            }
        }
    }

    /**
     * Removes the contact's picture.     *
     */
    RemoveContactPicture(): void {
        EwsUtilities.ValidateMethodVersion(this.Service, ExchangeVersion.Exchange2010, "RemoveContactPicture");

        if (!this.PropertyBag.IsPropertyLoaded(Schemas.ContactSchema.Attachments)) {
            throw new PropertyException(Strings.AttachmentCollectionNotLoaded);
        }

        this.InternalRemoveContactPicture();
    }
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
    SetContactPicture(base64Content: string, attachmentName: string): void {
        EwsUtilities.ValidateMethodVersion(this.Service, ExchangeVersion.Exchange2010, "SetContactPicture");

        this.InternalRemoveContactPicture();
        let fileAttachment: FileAttachment = this.Attachments.AddFileAttachment(attachmentName, base64Content);
        fileAttachment.IsContactPhoto = true;
    }

    /**
     * @internal Validates this instance.     * 
     */
    Validate(): void {
        super.Validate();

        var fileAsMapping: IOutParam<any> = { outValue: null };
        if (this.TryGetProperty(Schemas.ContactSchema.FileAsMapping, fileAsMapping)) {
            // FileAsMapping is extended by 5 new values in 2010 mode. Validate that they are used according the version.
            EwsUtilities.ValidateEnumVersionValue(FileAsMapping, fileAsMapping.outValue, this.Service.RequestedServerVersion, "FileAsMapping");
        }
    }
}
