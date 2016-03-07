import {EmailAddress} from "./EmailAddress";
import {ArgumentOutOfRangeException} from "../Exceptions/ArgumentException";
import {EwsUtilities} from "../Core/EwsUtilities";
import {Strings} from "../Strings";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents a collection of e-mail addresses.
 */
export class EmailAddressCollection extends ComplexPropertyCollection<EmailAddress> {
    /**
     * XML element name
     */
    private collectionItemXmlElementName: string = null;
    
    /**
     * Initializes a new instance of the **EmailAddressCollection** class.
     *
     * @remarks Note that XmlElementNames.Mailbox is the collection element name for ArrayOfRecipientsType, not ArrayOfEmailAddressesType.
     */
    constructor();
    /**
     * Initializes a new instance of the **EmailAddressCollection** class.
     *
     * @param   {string}   collectionItemXmlElementName   Name of the collection item XML element.
     */
    constructor(collectionItemXmlElementName: string);
    constructor(collectionItemXmlElementName: string = null) {
        super();
        this.collectionItemXmlElementName = collectionItemXmlElementName;
    }
    
    /**
     * Adds an e-mail address to the collection.
     *
     * @param   {EmailAddress}   emailAddress   The e-mail address to add.
     */
    Add(emailAddress: EmailAddress): void;
    /**
     * Adds an e-mail address to the collection.
     *
     * @param   {string}   smtpAddress   The SMTP address used to initialize the e-mail address.
     * @return  {EmailAddress}                 An EmailAddress object initialized with the provided SMTP address.
     */
    Add(smtpAddress: string): EmailAddress;
    /**
     * Adds an e-mail address to the collection.
     *
     * @param   {string}   name          The name used to initialize the e-mail address.
     * @param   {string}   smtpAddress   The SMTP address used to initialize the e-mail address.
     * @return  {EmailAddress}           An EmailAddress object initialized with the provided SMTP address.
     */
    Add(name: string, smtpAddress: string): EmailAddress;
    Add(nameOrSmtpAddressOrEmailAddress: string | EmailAddress, smtpAddress?: string): any | EmailAddress {
        let argsLength = arguments.length;
        let emailAddress: EmailAddress = <EmailAddress>nameOrSmtpAddressOrEmailAddress;
        if (argsLength == 1) {
            if (typeof nameOrSmtpAddressOrEmailAddress === 'string') {
                emailAddress = new EmailAddress(nameOrSmtpAddressOrEmailAddress);
            }
            else {
                emailAddress = nameOrSmtpAddressOrEmailAddress;
            }
        }
        if (argsLength === 2) {
            emailAddress = new EmailAddress(<string>nameOrSmtpAddressOrEmailAddress, smtpAddress);
        }
        this.InternalAdd(emailAddress);
        return emailAddress;
    }
    
    /**
     * Adds multiple e-mail addresses to the collection.
     *
     * @param   {EmailAddress[]}   emailAddresses   The e-mail addresses to add.
     */
    AddRange(emailAddresses: EmailAddress[]): void;
    /**
     * Adds multiple e-mail addresses to the collection.
     *
     * @param   {string[]}   smtpAddresses   The SMTP addresses used to initialize the e-mail addresses.
     */
    AddRange(smtpAddresses: string[]): void;
    AddRange(emailOrSmtpAddresses: EmailAddress[] | string[]): void {
        for (let address of emailOrSmtpAddresses) {
            let emailAddress = <EmailAddress>address;
            if (typeof address === 'string') {
                address = new EmailAddress(<string>address);
            }
            this.InternalAdd(emailAddress);
        }
    }
    
    /**
     * Clears the collection.
     */
    Clear(): void { this.InternalClear(); }

    /**
     * Creates an EmailAddress object from an XML element name.
     *
     * @param   {string}   xmlElementName   The XML element name from which to create the e-mail address.
     * @return  {EmailAddress}              An EmailAddress object.
     */
    CreateComplexProperty(xmlElementName: string): EmailAddress {
        if (xmlElementName == this.collectionItemXmlElementName) {
            return new EmailAddress();
        }
        else {
            return null;
        }
    }

    /**
     * Creates the default complex property.
     *
     * @return  {EmailAddress}      default instance of EmailAddress
     */
    CreateDefaultComplexProperty(): EmailAddress { return new EmailAddress(); }

    /**
     * Retrieves the XML element name corresponding to the provided EmailAddress object.
     *
     * @param   {EmailAddress}   emailAddress   The EmailAddress object from which to determine the XML element name.
     * @return  {string}        The XML element name corresponding to the provided EmailAddress object.
     */
    GetCollectionItemXmlElementName(emailAddress: EmailAddress): string { return this.collectionItemXmlElementName; }

    /**
     * Removes an e-mail address from the collection.
     *
     * @param   {EmailAddress}  emailAddress   The e-mail address to remove.
     * @return  {boolean}       True if the email address was successfully removed from the collection, false otherwise.
     */
    Remove(emailAddress: EmailAddress): boolean {
        EwsUtilities.ValidateParam(emailAddress, "emailAddress");
        return this.InternalRemove(emailAddress);
    }

    /**
     * Removes an e-mail address from the collection.
     *
     * @param   {number}   index   The index of the e-mail address to remove.
     */
    RemoveAt(index: number): void {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentOutOfRangeException("index", Strings.IndexIsOutOfRange);
        }
        this.InternalRemoveAt(index);
    }

    /**
     * Determine whether we should write collection to XML or not.
     *
     * @return  {true}      Always true, even if the collection is empty.
     */
    ShouldWriteToRequest(): boolean { return true; }
}