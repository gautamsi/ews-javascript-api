import { ArrayHelper } from "../ExtensionMethods";
import { ComplexProperty } from "./ComplexProperty";
import { Contact } from "../Core/ServiceObjects/Items/Contact";
import { EmailAddress } from "./EmailAddress";
import { EmailAddressKey } from "../Enumerations/EmailAddressKey";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../Core/EwsUtilities";
import { ExchangeService } from "../Core/ExchangeService";
import { ItemId } from "./ItemId";
import { MailboxType } from "../Enumerations/MailboxType";
import { MemberStatus } from "../Enumerations/MemberStatus";
import { ServiceLocalException } from "../Exceptions/ServiceLocalException";
import { Strings } from "../Strings";
import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

/**
 * Represents a group member 
 * [RequiredServerVersion(ExchangeVersion.Exchange2010)] ** needs implementation
 */
export class GroupMember extends ComplexProperty { // todo: need implementation for [RequiredServerVersion(ExchangeVersion.Exchange2010)]

    /**
     * AddressInformation field.
     */
    private addressInformation: EmailAddress = null;

    /**
     * Status field.
     */
    private status: MemberStatus;

    /**
     * Member key field.
     */
    private key: string;


    /**
     * ets the key of the member.
     */
    get Key(): string {
        return this.key;
    }

    /**
     * Gets the address information of the member.
     */
    get AddressInformation(): EmailAddress {
        return this.addressInformation;
    }

    /**
     * @internal Sets the address information of the member.
     */
    set AddressInformation(value: EmailAddress) {
        if (this.addressInformation !== null) {
            ArrayHelper.RemoveEntry(this.addressInformation.OnChange, this.AddressInformationChanged);
        }
        this.addressInformation = value;
        if (this.addressInformation !== null) {
            this.addressInformation.OnChange.push(this.AddressInformationChanged.bind(this));
        }
    }

    /**
     * Gets the status of the member.
     */
    get Status(): MemberStatus {
        return this.status;
    }


    /**
     * Initializes a new instance of the **GroupMember** class.
     *
     */
    constructor();
    /**
     * Initializes a new instance of the **GroupMember** class.
     *
     * @param   {string}   smtpAddress   The SMTP address of the member.
     */
    constructor(smtpAddress: string);
    /**
     * Initializes a new instance of the **GroupMember** class.
     *
     * @param   {ItemId}   contactGroupId   The Id of the contact group to link the member to.
     */
    constructor(contactGroupId: ItemId);
    /**
     * Initializes a new instance of the **GroupMember** class.
     *
     * @param   {EmailAddress}   addressInformation   The e-mail address of the member.
     */
    constructor(addressInformation: EmailAddress);
    /**
     * @internal Initializes a new instance of the **GroupMember** class from another GroupMember instance.
     *
     * @param   {GroupMember}   member   GroupMember class instance to copy.
     */
    constructor(member: GroupMember);
    /**
     * Initializes a new instance of the **GroupMember** class.
     *
     * @param   {string}   smtpAddress   The SMTP address of the member.
     * @param   {MailboxType}   mailboxType   The mailbox type of the member.
     */
    constructor(smtpAddress: string, mailboxType: MailboxType);
    /**
     * Initializes a new instance of the **GroupMember** class.
     *
     * @param   {string}   name          The name of the one-off member.
     * @param   {string}   smtpAddress   The SMTP address of the one-off member.
     */
    constructor(name: string, smtpAddress: string);
    /**
     * Initializes a new instance of the **GroupMember** class.
     *
     * @param   {ItemId}   contactId       The Id of the contact member.
     * @param   {string}   addressToLink   The Id of the contact to link the member to.
     */
    constructor(contactId: ItemId, addressToLink: string);
    /**
     * Initializes a new instance of the **GroupMember** class from a Contact instance indexed by the specified key.
     *
     * @param   {Contact}           contact           The contact to link to.
     * @param   {EmailAddressKey}   emailAddressKey   The contact's e-mail address to link to.
     */
    constructor(contact: Contact, emailAddressKey: EmailAddressKey);
    /**
     * Initializes a new instance of the **GroupMember** class.
     *
     * @param   {string}   address       The address of the member.
     * @param   {string}   routingType   The routing type of the address.
     * @param   {MailboxType}   mailboxType   The mailbox type of the member.
     */
    constructor(address: string, routingType: string, mailboxType: MailboxType);
    /**
     * Initializes a new instance of the **GroupMember** class.
     *
     * @param   {string}   name          The name of the one-off member.
     * @param   {string}   address       The address of the one-off member.
     * @param   {string}   routingType   The routing type of the address.
     */
    constructor(name: string, address: string, routingType: string);
    constructor(_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId?: string | ItemId | EmailAddress | GroupMember | Contact,
        _2routingTypeOrMbxTypeOrAddressOrSmtpOrAddr2LinkOrEmailKey?: string | MailboxType | EmailAddressKey, _3mbxTypeOrRoutingType?: MailboxType | string) {
        super();
        // Key is assigned by server
        this.key = null;

        // Member status is calculated by server
        this.status = MemberStatus.Unrecognized;

        let argsLength = arguments.length;
        if (argsLength == 1) {
            if (typeof _1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId === 'string') { // smtpAddress
                this.AddressInformation = new EmailAddress(_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId);
            } else if (_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId instanceof ItemId) { // contactGroupId
                this.AddressInformation = new EmailAddress(
                    null,
                    null,
                    null,
                    MailboxType.ContactGroup,
                    _1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId);
            } else if (_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId instanceof GroupMember) { // contactGroupId
                EwsUtilities.ValidateParam(_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId, "member");
                this.AddressInformation = new EmailAddress(_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId.AddressInformation);
            } else {
                this.AddressInformation = new EmailAddress(<EmailAddress>_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId);
            }
        }

        if (argsLength === 2) {
            if (typeof _1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId === 'string') {
                if (typeof _2routingTypeOrMbxTypeOrAddressOrSmtpOrAddr2LinkOrEmailKey === 'string') {
                    this.AddressInformation = new EmailAddress(<string>_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId, <string>_2routingTypeOrMbxTypeOrAddressOrSmtpOrAddr2LinkOrEmailKey, EmailAddress.SmtpRoutingType, MailboxType.OneOff);
                }
                else {
                    this.constructor_str_str_mbType(<string>_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId,
                        EmailAddress.SmtpRoutingType,
                        <MailboxType>_2routingTypeOrMbxTypeOrAddressOrSmtpOrAddr2LinkOrEmailKey);
                }
            } else if (_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId instanceof ItemId) {
                this.AddressInformation = new EmailAddress(
                    null,
                    <string>_2routingTypeOrMbxTypeOrAddressOrSmtpOrAddr2LinkOrEmailKey, // addressToLink
                    null,
                    MailboxType.Contact,
                    _1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId); //contactId
            } else {

                let contact: Contact = <Contact>_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId;
                EwsUtilities.ValidateParam(contact, "contact");

                let emailAddress: EmailAddress = contact.EmailAddresses[_2routingTypeOrMbxTypeOrAddressOrSmtpOrAddr2LinkOrEmailKey /* emailAddressKey */];

                this.AddressInformation = new EmailAddress(emailAddress);

                this.addressInformation.Id = contact.Id;
            }
        }

        if (argsLength === 3) {
            if (typeof _3mbxTypeOrRoutingType === 'string') { // mailboxType
                this.AddressInformation = new EmailAddress(<string>_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId, <string>_2routingTypeOrMbxTypeOrAddressOrSmtpOrAddr2LinkOrEmailKey, _3mbxTypeOrRoutingType, MailboxType.OneOff);
            } else {

                this.constructor_str_str_mbType(<string>_1smtpOrCGIdOrAddrInfoOrMemberOrAddrOrNameOrContactOrCId, <string>_2routingTypeOrMbxTypeOrAddressOrSmtpOrAddr2LinkOrEmailKey, _3mbxTypeOrRoutingType);
            }
        }
    }

    //#region Constructor methods
    private constructor_str_str_mbType(address: string, routingType: string, mailboxType: MailboxType) {
        switch (mailboxType) {
            case MailboxType.PublicGroup:
            case MailboxType.PublicFolder:
            case MailboxType.Mailbox:
            case MailboxType.Contact:
            case MailboxType.OneOff:
                this.AddressInformation = new EmailAddress(null, address, routingType, mailboxType);
                break;

            default:
                throw new ServiceLocalException(Strings.InvalidMailboxType);
        }
    }
    //#endregion


    /**
     * AddressInformation instance is changed.
     *
     * @param   {}   complexProperty   Changed property.
     */
    private AddressInformationChanged(complexProperty: ComplexProperty): void {
        this.Changed();
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        for (let key in jsObject) {
            switch (key) {
                case XmlAttributeNames.Key:
                    this.key = jsObject[key];
                    break;
                case XmlElementNames.Status:
                    this.status = MemberStatus[<string>jsObject[key]];
                    break;
                case XmlElementNames.Mailbox:
                    this.AddressInformation = new EmailAddress();
                    this.AddressInformation.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * @internal Writes the member key attribute to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        // if this.key is null or empty, writer skips the attribute
        writer.WriteAttributeValue(XmlAttributeNames.Key, this.key);
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        // No need to write member Status back to server
        // Write only AddressInformation container element
        this.AddressInformation.WriteToXml(
            writer,
            XmlElementNames.Mailbox,
            XmlNamespace.Types);
    }
}
