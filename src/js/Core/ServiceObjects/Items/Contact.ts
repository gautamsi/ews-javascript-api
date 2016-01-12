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
export class Contact extends Item {
    private static ContactPictureName: string = "ContactPicture.jpg";
    get FileAs(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.FileAs);
    }
    set FileAs(value: string) {
        this.PropertyBag._setItem(ContactSchema.FileAs, value);
    }
    get FileAsMapping(): FileAsMapping {
        return <FileAsMapping>this.PropertyBag._getItem(ContactSchema.FileAsMapping);
    }
    set FileAsMapping(value: FileAsMapping) {
        this.PropertyBag._setItem(ContactSchema.FileAsMapping, value);
    }
    get DisplayName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.DisplayName);
    }
    set DisplayName(value: string) {
        this.PropertyBag._setItem(ContactSchema.DisplayName, value);
    }
    get GivenName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.GivenName);
    }
    set GivenName(value: string) {
        this.PropertyBag._setItem(ContactSchema.GivenName, value);
    }
    get Initials(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.Initials);
    }
    set Initials(value: string) {
        this.PropertyBag._setItem(ContactSchema.Initials, value);
    }
    get MiddleName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.MiddleName);
    }
    set MiddleName(value: string) {
        this.PropertyBag._setItem(ContactSchema.MiddleName, value);
    }
    get NickName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.NickName);
    }
    set NickName(value: string) {
        this.PropertyBag._setItem(ContactSchema.NickName, value);
    }
    get CompleteName(): CompleteName {
        return <CompleteName>this.PropertyBag._getItem(ContactSchema.CompleteName);
    }
    get CompanyName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.CompanyName);
    }
    set CompanyName(value: string) {
        this.PropertyBag._setItem(ContactSchema.CompanyName, value);
    }
    get EmailAddresses(): EmailAddressDictionary {
        return <EmailAddressDictionary>this.PropertyBag._getItem(ContactSchema.EmailAddresses);
    }
    get PhysicalAddresses(): PhysicalAddressDictionary {
        return <PhysicalAddressDictionary>this.PropertyBag._getItem(ContactSchema.PhysicalAddresses);
    }
    get PhoneNumbers(): PhoneNumberDictionary {
        return <PhoneNumberDictionary>this.PropertyBag._getItem(ContactSchema.PhoneNumbers);
    }
    get AssistantName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.AssistantName);
    }
    set AssistantName(value: string) {
        this.PropertyBag._setItem(ContactSchema.AssistantName, value);
    }
    get Birthday(): DateTime {
        return <DateTime>this.PropertyBag._getItem(ContactSchema.Birthday);
    }
    set Birthday(value: DateTime) {
        this.PropertyBag._setItem(ContactSchema.Birthday, value);
    }
    get BusinessHomePage(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.BusinessHomePage);
    }
    set BusinessHomePage(value: string) {
        this.PropertyBag._setItem(ContactSchema.BusinessHomePage, value);
    }
    get Children(): StringList {
        return <StringList>this.PropertyBag._getItem(ContactSchema.Children);
    }
    set Children(value: StringList) {
        this.PropertyBag._setItem(ContactSchema.Children, value);
    }
    get Companies(): StringList {
        return <StringList>this.PropertyBag._getItem(ContactSchema.Companies);
    }
    set Companies(value: StringList) {
        this.PropertyBag._setItem(ContactSchema.Companies, value);
    }
    get ContactSource(): ContactSource {
        return <ContactSource>this.PropertyBag._getItem(ContactSchema.ContactSource);
    }
    get Department(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.Department);
    }
    set Department(value: string) {
        this.PropertyBag._setItem(ContactSchema.Department, value);
    }
    get Generation(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.Generation);
    }
    set Generation(value: string) {
        this.PropertyBag._setItem(ContactSchema.Generation, value);
    }
    get ImAddresses(): ImAddressDictionary {
        return <ImAddressDictionary>this.PropertyBag._getItem(ContactSchema.ImAddresses);
    }
    get JobTitle(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.JobTitle);
    }
    set JobTitle(value: string) {
        this.PropertyBag._setItem(ContactSchema.JobTitle, value);
    }
    get Manager(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.Manager);
    }
    set Manager(value: string) {
        this.PropertyBag._setItem(ContactSchema.Manager, value);
    }
    get Mileage(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.Mileage);
    }
    set Mileage(value: string) {
        this.PropertyBag._setItem(ContactSchema.Mileage, value);
    }
    get OfficeLocation(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.OfficeLocation);
    }
    set OfficeLocation(value: string) {
        this.PropertyBag._setItem(ContactSchema.OfficeLocation, value);
    }
    get PostalAddressIndex(): PhysicalAddressIndex {
        return <PhysicalAddressIndex>this.PropertyBag._getItem(ContactSchema.PostalAddressIndex);
    }
    set PostalAddressIndex(value: PhysicalAddressIndex) {
        this.PropertyBag._setItem(ContactSchema.PostalAddressIndex, value);
    }
    get Profession(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.Profession);
    }
    set Profession(value: string) {
        this.PropertyBag._setItem(ContactSchema.Profession, value);
    }
    get SpouseName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.SpouseName);
    }
    set SpouseName(value: string) {
        this.PropertyBag._setItem(ContactSchema.SpouseName, value);
    }
    get Surname(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.Surname);
    }
    set Surname(value: string) {
        this.PropertyBag._setItem(ContactSchema.Surname, value);
    }
    get WeddingAnniversary(): DateTime {
        return <DateTime>this.PropertyBag._getItem(ContactSchema.WeddingAnniversary);
    }
    set WeddingAnniversary(value: DateTime) {
        this.PropertyBag._setItem(ContactSchema.WeddingAnniversary, value);
    }
    get HasPicture(): boolean {
        return <boolean>this.PropertyBag._getItem(ContactSchema.HasPicture);
    }
    get PhoneticFullName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.PhoneticFullName);
    }
    get PhoneticFirstName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.PhoneticFirstName);
    }
    get PhoneticLastName(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.PhoneticLastName);
    }
    get Alias(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.Alias);
    }
    get Notes(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.Notes);
    }
    get DirectoryPhoto(): number[] {
        return <number[]>this.PropertyBag._getItem(ContactSchema.Photo);
    }
    get UserSMIMECertificate(): string[] { //ref: cant use bytearray, using base64 decoded string instead -  number[][]
        var byteArrayArray: ByteArrayArray = <ByteArrayArray>this.PropertyBag._getItem(ContactSchema.UserSMIMECertificate);
        return byteArrayArray.Content;
    }
    get MSExchangeCertificate(): string[] { //ref: cant use bytearray, using base64 decoded string instead -  number[][]
        var byteArrayArray: ByteArrayArray = <ByteArrayArray>this.PropertyBag._getItem(ContactSchema.MSExchangeCertificate);
        return byteArrayArray.Content;
    }
    get DirectoryId(): string {
        return <string>this.PropertyBag._getItem(ContactSchema.DirectoryId);
    }
    get ManagerMailbox(): EmailAddress {
        return <EmailAddress>this.PropertyBag._getItem(ContactSchema.ManagerMailbox);
    }
    get DirectReports(): EmailAddressCollection {
        return <EmailAddressCollection>this.PropertyBag._getItem(ContactSchema.DirectReports);
    }

    constructor(service: ExchangeService);
    constructor(parentAttachment: ItemAttachment);
    constructor(serviceOrParentAttachment: ExchangeService | ItemAttachment) {
        super(serviceOrParentAttachment instanceof ItemAttachment ? serviceOrParentAttachment.Service : <ExchangeService>serviceOrParentAttachment);//todo:fix -can not user instanceof with exchangeservice, creates circular loop with ewsutility 
    }

    Bind(service: ExchangeService, id: ItemId): IPromise<Contact>;
    Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): IPromise<Contact>;
    Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): IPromise<Contact> {
        return Contact.Bind(service, id, propertySet);
    }
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): IPromise<Contact> {
        return service.BindToItem<Contact>(id, propertySet, Contact);
    }

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
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetSchema(): ServiceObjectSchema { return ContactSchema.Instance; }
    GetXmlElementName(): string { return XmlElementNames.Contact; }
    InternalRemoveContactPicture(): void {
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
    RemoveContactPicture(): void {
        EwsUtilities.ValidateMethodVersion(this.Service, ExchangeVersion.Exchange2010, "RemoveContactPicture");

        if (!this.PropertyBag.IsPropertyLoaded(ContactSchema.Attachments)) {
            throw new PropertyException(Strings.AttachmentCollectionNotLoaded);
        }

        this.InternalRemoveContactPicture();
    }
    //SetContactPicture(contentStream: any /*System.IO.Stream*/): any { throw new Error("Contact.ts - SetContactPicture : Not implemented."); }
    //SetContactPicture(content: number[] /*System.Byte[]*/): any { throw new Error("Contact.ts - SetContactPicture : Not implemented."); }
    //SetContactPicture(fileName: string): any { throw new Error("Contact.ts - SetContactPicture : Not implemented."); }
    SetContactPicture(fileNameOrContent: string|number[]): void { throw new Error("Contact.ts - SetContactPicture : Not implemented."); }
    Validate(): void {
        super.Validate();

        var fileAsMapping: IOutParam<any> = { outValue: null };
        if (this.TryGetProperty(ContactSchema.FileAsMapping, fileAsMapping)) {
            // FileAsMapping is extended by 5 new values in 2010 mode. Validate that they are used according the version.
            EwsUtilities.ValidateEnumVersionValue(EnumToExchangeVersionMappingHelper.FileAsMapping, fileAsMapping.outValue, this.Service.RequestedServerVersion);
        }
    }
}
