import {PropertyException} from "../../../Exceptions/PropertyException";
import {Strings} from "../../../Strings";
import {ItemId} from "../../../ComplexProperties/ItemId";
import {PropertySet} from "../../PropertySet";
import {FileAsMapping} from "../../../Enumerations/FileAsMapping";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {EnumToExchangeVersionMappingHelper} from "../../../Enumerations/EnumToExchangeVersionMappingHelper";
import {CompleteName} from "../../../ComplexProperties/CompleteName";
import {ByteArrayArray} from "../../../ComplexProperties/ByteArrayArray";
import {EmailAddressDictionary} from "../../../ComplexProperties/EmailAddressDictionary";
import {PhysicalAddressDictionary} from "../../../ComplexProperties/PhysicalAddressDictionary";
import {FileAttachment} from "../../../ComplexProperties/FileAttachment";
import {PhoneNumberDictionary} from "../../../ComplexProperties/PhoneNumberDictionary";
import {StringList} from "../../../ComplexProperties/StringList";
import {ContactSource} from "../../../Enumerations/ContactSource";
import {ImAddressDictionary} from "../../../ComplexProperties/ImAddressDictionary";
import {PhysicalAddressIndex} from "../../../Enumerations/PhysicalAddressIndex";
import {EmailAddress} from "../../../ComplexProperties/EmailAddress";
import {EmailAddressCollection} from "../../../ComplexProperties/EmailAddressCollection";
import {ExchangeService} from "../../ExchangeService";
import {EwsUtilities} from "../../EwsUtilities";
import {ItemAttachment} from "../../../ComplexProperties/ItemAttachment";
import {XmlElementNames} from "../../XmlElementNames";
import {ContactSchema} from "../Schemas/ContactSchema";
import {ServiceObjectSchema} from "../Schemas/ServiceObjectSchema";
import {DateTime} from "../../../DateTime";
import {IPromise} from "../../../Interfaces";
import {IOutParam} from "../../../Interfaces/IOutParam";

import {Item} from "./Item";
/**
 * Represents a **contact**. Properties available on contacts are defined in the *ContactSchema* class.
 * 
 */
export class Contact extends Item {
    private static ContactPictureName: string = "ContactPicture.jpg";
    
    /**
     * Gets or set the name under which this contact is filed as. FileAs can be manually set or can be automatically calculated based on the value of the FileAsMapping property.
     *
     */
    get FileAs(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.FileAs);
    }
    set FileAs(value: string) {
        this.PropertyBag._setItem(ContactSchema.FileAs, value);
    }
    
    /**
     * Gets or sets a value indicating how the FileAs property should be automatically calculated.
     * 
     */
    get FileAsMapping(): FileAsMapping {
        return <FileAsMapping>this.PropertyBag._getItem(ContactSchema.FileAsMapping);
    }
    set FileAsMapping(value: FileAsMapping) {
        this.PropertyBag._setItem(ContactSchema.FileAsMapping, value);
    }
    
    /**
     * Gets or sets the display name of the contact.
     * 
     */
    get DisplayName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.DisplayName);
    }
    set DisplayName(value: string) {
        this.PropertyBag._setItem(ContactSchema.DisplayName, value);
    }
    
    /**
     * Gets or sets the given name of the contact.
     * 
     */    
    get GivenName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.GivenName);
    }
    set GivenName(value: string) {
        this.PropertyBag._setItem(ContactSchema.GivenName, value);
    }
    
    /**
     * Gets or sets the initials of the contact.
     * 
     */    
    get Initials(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.Initials);
    }
    set Initials(value: string) {
        this.PropertyBag._setItem(ContactSchema.Initials, value);
    }
    
    /**
     * Gets or sets the middle mame of the contact.
     * 
     */    
    get MiddleName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.MiddleName);
    }
    set MiddleName(value: string) {
        this.PropertyBag._setItem(ContactSchema.MiddleName, value);
    }
    
    /**
     * Gets or sets the nick name of the contact.
     * 
     */    
    get NickName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.NickName);
    }
    set NickName(value: string) {
        this.PropertyBag._setItem(ContactSchema.NickName, value);
    }
    
    /**
     * Gets the complete name of the contact.
     * 
     */    
    get CompleteName(): CompleteName {
        return <CompleteName>this.PropertyBag._getItem(ContactSchema.CompleteName);
    }
    
    /**
     * Gets or sets the compnay name of the contact.
     * 
     */    
    get CompanyName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.CompanyName);
    }
    set CompanyName(value: string) {
        this.PropertyBag._setItem(ContactSchema.CompanyName, value);
    }
    
    /**
     * Gets an indexed list of e-mail addresses for the contact. For example, to set the first e-mail address, 
     * use the following syntax: EmailAddresses[EmailAddressKey.EmailAddress1] = "john.doe@contoso.com"
     * 
     */    
    get EmailAddresses(): EmailAddressDictionary {
        return <EmailAddressDictionary>this.PropertyBag._getItem(ContactSchema.EmailAddresses);
    }
    
    /**
     * Gets an indexed list of physical addresses for the contact. For example, to set the business address,
     * use the following syntax: PhysicalAddresses[PhysicalAddressKey.Business] = new PhysicalAddressEntry()
     * 
     */    
    get PhysicalAddresses(): PhysicalAddressDictionary {
        return <PhysicalAddressDictionary>this.PropertyBag._getItem(ContactSchema.PhysicalAddresses);
    }
    
    /**
     * Gets an indexed list of phone numbers for the contact. For example, to set the home phone number,
     * use the following syntax: PhoneNumbers[PhoneNumberKey.HomePhone] = "phone number"
     * 
     */    
    get PhoneNumbers(): PhoneNumberDictionary {
        return <PhoneNumberDictionary>this.PropertyBag._getItem(ContactSchema.PhoneNumbers);
    }
    
    /**
     * Gets or sets the contact's assistant name.
     * 
     */    
    get AssistantName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.AssistantName);
    }
    set AssistantName(value: string) {
        this.PropertyBag._setItem(ContactSchema.AssistantName, value);
    }
    
    /**
     * Gets or sets the birthday of the contact.
     * 
     */    
    get Birthday(): DateTime {
        return <DateTime>this.PropertyBag._getItem(ContactSchema.Birthday);
    }
    set Birthday(value: DateTime) {
        this.PropertyBag._setItem(ContactSchema.Birthday, value);
    }
    
    /**
     * Gets or sets the business home page of the contact.
     * 
     */    
    get BusinessHomePage(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.BusinessHomePage);
    }
    set BusinessHomePage(value: string) {
        this.PropertyBag._setItem(ContactSchema.BusinessHomePage, value);
    }
    
    /**
     * Gets or sets a list of children for the contact.
     * 
     */    
    get Children(): StringList {
        return <StringList>this.PropertyBag._getItem(ContactSchema.Children);
    }
    set Children(value: StringList) {
        this.PropertyBag._setItem(ContactSchema.Children, value);
    }
    
    /**
     * Gets or sets a list of companies for the contact.
     * 
     */    
    get Companies(): StringList {
        return <StringList>this.PropertyBag._getItem(ContactSchema.Companies);
    }
    set Companies(value: StringList) {
        this.PropertyBag._setItem(ContactSchema.Companies, value);
    }
    
    /**
     * Gets the source of the contact.
     * 
     */    
    get ContactSource(): ContactSource {
        return <ContactSource>this.PropertyBag._getItem(ContactSchema.ContactSource);
    }
    
    /**
     * Gets or sets the department of the contact.
     * 
     */    
    get Department(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.Department);
    }
    set Department(value: string) {
        this.PropertyBag._setItem(ContactSchema.Department, value);
    }
    
    /**
     * Gets or sets the generation of the contact.
     * 
     */    
    get Generation(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.Generation);
    }
    set Generation(value: string) {
        this.PropertyBag._setItem(ContactSchema.Generation, value);
    }
    
    /**
     * Gets an indexed list of Instant Messaging addresses for the contact. 
     * For example, to set the first IM address, use the following syntax: ImAddresses[ImAddressKey.ImAddress1] = "john.doe@contoso.com"
     * 
     */    
    get ImAddresses(): ImAddressDictionary {
        return <ImAddressDictionary>this.PropertyBag._getItem(ContactSchema.ImAddresses);
    }
    
    /**
     * Gets or sets the contact's job title.
     * 
     */    
    get JobTitle(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.JobTitle);
    }
    set JobTitle(value: string) {
        this.PropertyBag._setItem(ContactSchema.JobTitle, value);
    }
    
    /**
     * Gets or sets the name of the contact's manager.
     * 
     */    
    get Manager(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.Manager);
    }
    set Manager(value: string) {
        this.PropertyBag._setItem(ContactSchema.Manager, value);
    }
    
    /**
     * Gets or sets the mileage for the contact.
     * 
     */    
    get Mileage(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.Mileage);
    }
    set Mileage(value: string) {
        this.PropertyBag._setItem(ContactSchema.Mileage, value);
    }
    
    /**
     * Gets or sets the location of the contact's office.
     * 
     */    
    get OfficeLocation(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.OfficeLocation);
    }
    set OfficeLocation(value: string) {
        this.PropertyBag._setItem(ContactSchema.OfficeLocation, value);
    }
    
    /**
     * Gets or sets the index of the contact's postal address. When set, PostalAddressIndex refers to an entry in the PhysicalAddresses indexed list.
     * 
     */    
    get PostalAddressIndex(): PhysicalAddressIndex {
        return <PhysicalAddressIndex>this.PropertyBag._getItem(ContactSchema.PostalAddressIndex);
    }
    set PostalAddressIndex(value: PhysicalAddressIndex) {
        this.PropertyBag._setItem(ContactSchema.PostalAddressIndex, value);
    }
    
    /**
     * Gets or sets the contact's profession.
     * 
     */    
    get Profession(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.Profession);
    }
    set Profession(value: string) {
        this.PropertyBag._setItem(ContactSchema.Profession, value);
    }
    
    /**
     * Gets or sets the name of the contact's spouse.
     * 
     */    
    get SpouseName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.SpouseName);
    }
    set SpouseName(value: string) {
        this.PropertyBag._setItem(ContactSchema.SpouseName, value);
    }
    
    /**
     * Gets or sets the surname of the contact.
     * 
     */    
    get Surname(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.Surname);
    }
    set Surname(value: string) {
        this.PropertyBag._setItem(ContactSchema.Surname, value);
    }
    
    /**
     * Gets or sets the date of the contact's wedding anniversary.
     * 
     */    
    get WeddingAnniversary(): DateTime {
        return <DateTime>this.PropertyBag._getItem(ContactSchema.WeddingAnniversary);
    }
    set WeddingAnniversary(value: DateTime) {
        this.PropertyBag._setItem(ContactSchema.WeddingAnniversary, value);
    }
    
    /**
     * Gets a value indicating whether this contact has a picture associated with it.
     * 
     */    
    get HasPicture(): boolean {
        return <boolean>this.PropertyBag._getItem(ContactSchema.HasPicture);
    }
    
    /**
     * Gets the full phonetic name from the directory
     * 
     */    
    get PhoneticFullName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.PhoneticFullName);
    }
    
    /**
     * Gets the phonetic first name from the directory
     * 
     */    
    get PhoneticFirstName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.PhoneticFirstName);
    }
    
    /**
     * Gets the phonetic last name from the directory
     * 
     */    
    get PhoneticLastName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.PhoneticLastName);
    }
    
    /**
     * Gets the Alias from the directory
     * 
     */    
    get Alias(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.Alias);
    }
    
    /**
     * Get the Notes from the directory
     * 
     */    
    get Notes(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.Notes);
    }
    
    /**
     * Gets the Photo from the directory **Unstable: needs testing**
     * 
     */    
    get DirectoryPhoto(): number[] {
        return <number[]>this.PropertyBag._getItem(ContactSchema.Photo);
    }
    
    /**
     * Gets the User SMIME certificate from the directory **Unstable: needs testing**
     * //ref: cant use bytearray, using base64 decoded string instead -  number[][]
     * 
     */    
    get UserSMIMECertificate(): string[] { 
        var byteArrayArray: ByteArrayArray = <ByteArrayArray>this.PropertyBag._getItem(ContactSchema.UserSMIMECertificate);
        return byteArrayArray.Content;
    }
    
    /**
     * Gets the MSExchange certificate from the directory **Unstable: needs testing**
     * //ref: cant use bytearray, using base64 decoded string instead -  number[][]
     * 
     */    
    get MSExchangeCertificate(): string[] { 
        var byteArrayArray: ByteArrayArray = <ByteArrayArray>this.PropertyBag._getItem(ContactSchema.MSExchangeCertificate);
        return byteArrayArray.Content;
    }
    
    /**
     * Gets the DirectoryID as Guid or DN string
     * 
     */    
    get DirectoryId(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.DirectoryId);
    }
    
    /**
     * Gets the manager mailbox information
     * 
     */    
    get ManagerMailbox(): EmailAddress {
        return <EmailAddress>this.PropertyBag._getItem(ContactSchema.ManagerMailbox);
    }
    
    /**
     * Get the direct reports mailbox information
     * 
     */    
    get DirectReports(): EmailAddressCollection {
        return <EmailAddressCollection>this.PropertyBag._getItem(ContactSchema.DirectReports);
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
     * @return  {IPromise<Contact>}                 A Contact instance representing the contact corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId): IPromise<Contact>;
    /**
     * Binds to an existing contact and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service         The service to use to bind to the contact.
     * @param   {ItemId}            id              The Id of the contact to bind to.
     * @param   {PropertySet}       propertySet     The set of properties to load.
     * @return  {IPromise<Contact>}                 A Contact instance representing the contact corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): IPromise<Contact>;
    // Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): IPromise<Contact> { //removed
    //     return Contact.Bind(service, id, propertySet);
    // }
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): IPromise<Contact> {
        return service.BindToItem<Contact>(id, propertySet, Contact);
    }

    /**
     * Retrieves the file attachment that holds the contact's picture. **Unstable: needs testing**
     *
     * @return  {FileAttachment}      The file attachment that holds the contact's picture.
     */
    GetContactPictureAttachment(): FileAttachment {
        EwsUtilities.ValidateMethodVersion(this.Service, ExchangeVersion.Exchange2010, "GetContactPictureAttachment");

        if (!this.PropertyBag.IsPropertyLoaded(ContactSchema.Attachments)) {
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
    GetSchema(): ServiceObjectSchema { return ContactSchema.Instance; }
    
    /**
     * @internal Gets the element name of item in XML
     * 
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string { return XmlElementNames.Contact; }
    
    /**
     * Removes the picture from local attachment collection.
     *
     */
    private InternalRemoveContactPicture(): void {
        // Iterates in reverse order to remove file attachments that have IsContactPhoto set to true.
        for (var index = this.Attachments.Count - 1; index >= 0; index--) {
            //todo: implement safe typecasting
            var fileAttachment: FileAttachment = <FileAttachment>this.Attachments.__thisIndexer(index);
            if (fileAttachment != null) {
                if (fileAttachment.IsContactPhoto) {
                    this.Attachments.Remove(fileAttachment);
                }
            }
        }
    }
    
    /**
     * Removes the contact's picture.
     *
     */
    RemoveContactPicture(): void {
        EwsUtilities.ValidateMethodVersion(this.Service, ExchangeVersion.Exchange2010, "RemoveContactPicture");

        if (!this.PropertyBag.IsPropertyLoaded(ContactSchema.Attachments)) {
            throw new PropertyException(Strings.AttachmentCollectionNotLoaded);
        }

        this.InternalRemoveContactPicture();
    }
    //ref: //todo: Not Implemented
    //SetContactPicture(contentStream: any /*System.IO.Stream*/): any { throw new Error("Contact.ts - SetContactPicture : Not implemented."); }
    //SetContactPicture(content: number[] /*System.Byte[]*/): any { throw new Error("Contact.ts - SetContactPicture : Not implemented."); }
    //SetContactPicture(fileName: string): any { throw new Error("Contact.ts - SetContactPicture : Not implemented."); }
    /**
     * ## *Not Implemented*
     */
    SetContactPicture(fileNameOrContent: string|number[]): void { throw new Error("Contact.ts - SetContactPicture : Not implemented."); }
    
    /**
     * @internal Validates this instance.
     * 
     */
    Validate(): void {
        super.Validate();

        var fileAsMapping: IOutParam<any> = { outValue: null };
        if (this.TryGetProperty(ContactSchema.FileAsMapping, fileAsMapping)) {
            // FileAsMapping is extended by 5 new values in 2010 mode. Validate that they are used according the version.
            EwsUtilities.ValidateEnumVersionValue(EnumToExchangeVersionMappingHelper.FileAsMapping, fileAsMapping.outValue, this.Service.RequestedServerVersion);
        }
    }
}
