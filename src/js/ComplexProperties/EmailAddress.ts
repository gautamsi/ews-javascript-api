import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../Core/EwsUtilities";
import { ExchangeService } from "../Core/ExchangeService";
import { IRefParam } from "../Interfaces/IRefParam";
import { ISearchStringProvider } from "../Interfaces/ISearchStringProvider";
import { ItemId } from "./ItemId";
import { MailboxType } from "../Enumerations/MailboxType";
import { StringHelper } from "../ExtensionMethods";
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

import { ComplexProperty } from "./ComplexProperty";
/**
 * Represents an e-mail address.
 */
export class EmailAddress extends ComplexProperty implements ISearchStringProvider {

    /**
     * SMTP routing type.
     */
    static SmtpRoutingType: string = "SMTP";

    /**
     * Display name.
     */
    private name: string = null;

    /**
     * Email address.
     */
    private address: string = null;

    /**
     * Routing type.
     */
    private routingType: string = null;

    /**
     * Mailbox type. 
     */
    private mailboxType: MailboxType = null;

    /**
     * ItemId - Contact or PDL.
     */
    private id: ItemId = null;

    /**
     * Gets or sets the name associated with the e-mail address.
     */
    get Name(): string {
        return this.name;
    }
    set Name(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.name, setValue: (updateValue) => { this.name = updateValue } }, value);
    }

    /**
     * Gets or sets the actual address associated with the e-mail address. The type of the Address property must match the specified routing type. If RoutingType is not set, Address is assumed to be an SMTP address.
     */
    get Address(): string {
        return this.address;
    }
    set Address(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.address, setValue: (updateValue) => { this.address = updateValue } }, value);
    }

    /**
     * Gets or sets the routing type associated with the e-mail address. If RoutingType is not set, Address is assumed to be an SMTP address.
     */
    get RoutingType(): string {
        return this.routingType;
    }
    set RoutingType(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.routingType, setValue: (updateValue) => { this.routingType = updateValue } }, value);
    }

    /**
     * Gets or sets the type of the e-mail address.
     */
    get MailboxType(): MailboxType {
        return this.mailboxType;
    }
    set MailboxType(value: MailboxType) {
        this.SetFieldValue<MailboxType>({ getValue: () => this.mailboxType, setValue: (updateValue) => { this.mailboxType = updateValue } }, value);
    }

    /**
     * Gets or sets the Id of the contact the e-mail address represents. When Id is specified, Address should be set to null.
     */
    get Id(): ItemId {
        return this.id;
    }
    set Id(value: ItemId) {
        this.SetFieldValue<ItemId>({ getValue: () => this.id, setValue: (updateValue) => { this.id = updateValue } }, value);
    }

    /**
     * Initializes a new instance of the **EmailAddress** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **EmailAddress** class.
     *
     * @param   {string}        name          The name used to initialize the EmailAddress.
     */
    constructor(smtpAddress: string);
    /**
     * Initializes a new instance of the **EmailAddress** class.
     *
     * @param   {string}        name          The name used to initialize the EmailAddress.
     * @param   {string}        address       The address used to initialize the EmailAddress.
     */
    constructor(name: string, smtpAddress: string);
    /**
     * Initializes a new instance of the **EmailAddress** class.
     *
     * @param   {string}        name          The name used to initialize the EmailAddress.
     * @param   {string}        address       The address used to initialize the EmailAddress.
     * @param   {string}        routingType   The routing type used to initialize the EmailAddress.
     */
    constructor(name: string, address: string, routingType: string);
    /**
     * Initializes a new instance of the **EmailAddress** class.
     *
     * @param   {string}        name          The name used to initialize the EmailAddress.
     * @param   {string}        address       The address used to initialize the EmailAddress.
     * @param   {string}        routingType   The routing type used to initialize the EmailAddress.
     * @param   {MailboxType}   mailboxType   Mailbox type of the participant.
     */
    constructor(name: string, address: string, routingType: string, mailboxType: MailboxType);
    /**
     * Initializes a new instance of the **EmailAddress** class.
     *
     * @param   {string}        name          The name used to initialize the EmailAddress.
     * @param   {string}        address       The address used to initialize the EmailAddress.
     * @param   {string}        routingType   The routing type used to initialize the EmailAddress.
     * @param   {MailboxType}   mailboxType   Mailbox type of the participant.
     * @param   {ItemId}        itemId        ItemId of a Contact or PDL.
     */
    constructor(name: string, address: string, routingType: string, mailboxType: MailboxType, itemId: ItemId);
    /**
     * Initializes a new instance of the **EmailAddress** class from another EmailAddress instance.
     *
     * @param   {EmailAddress}   mailbox   EMailAddress instance to copy.
     */
    constructor(mailbox: EmailAddress);
    constructor(smtpAddressOrMailbox: string | EmailAddress); //for Attendee to call super() easily
    constructor(smtpAddressOrNameOrMailbox?: EmailAddress | string, smtpAddressOrAddress?: string, routingType?: string, mailboxType?: MailboxType, itemId?: ItemId) {
        super();
        if (smtpAddressOrNameOrMailbox instanceof EmailAddress) {
            EwsUtilities.ValidateParam(smtpAddressOrNameOrMailbox, "mailbox");

            this.Name = smtpAddressOrNameOrMailbox.Name;
            this.Address = smtpAddressOrNameOrMailbox.Address;
            this.RoutingType = smtpAddressOrNameOrMailbox.RoutingType;
            this.MailboxType = smtpAddressOrNameOrMailbox.MailboxType;
            this.Id = smtpAddressOrNameOrMailbox.Id;
        }
        else {
            let argsLength = arguments.length;
            if (argsLength === 1) {
                this.address = <string>smtpAddressOrNameOrMailbox;
            }
            else if (argsLength > 1) {
                this.name = <string>smtpAddressOrNameOrMailbox;
                this.address = smtpAddressOrAddress;
                if (argsLength >= 3) {
                    this.routingType = routingType;
                }
                if (argsLength >= 4) {
                    this.mailboxType = mailboxType;
                }
                if (argsLength === 5) {
                    this.id = itemId;
                }
            }
        }
    }

    /**
     * Get a string representation for using this instance in a search filter. 
     * ISearchStringProvider.GetSearchString
     *
     * @return  {string}      String representation of instance.
     */
    GetSearchString(): string {
        return this.Address;
    }

    ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("EmailAddress.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    //todo: implement UpdateFromXmlJsObject

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        for (let key in jsObject) {
            switch (key) {
                case XmlElementNames.Name:
                    this.name = jsObject[key];
                    break;
                case XmlElementNames.EmailAddress:
                    this.address = jsObject[key];
                    break;
                case XmlElementNames.RoutingType:
                    this.routingType = jsObject[key];
                    break;
                case XmlElementNames.MailboxType:
                    this.mailboxType = MailboxType.FromEwsEnumString(jsObject[key])
                    break;
                case XmlElementNames.ItemId:
                    this.id = new ItemId();
                    this.id.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * Returns a **string** that represents the current **object**.
     *
     * @return  {string}      A **string** that represents the current **object**.
     */
    ToString(): string {
        let addressPart: string = null;

        if (StringHelper.IsNullOrEmpty(this.Address)) {
            return StringHelper.Empty;
        }

        if (!StringHelper.IsNullOrEmpty(this.RoutingType)) {
            addressPart = this.RoutingType + ":" + this.Address;
        }
        else {
            addressPart = this.Address;
        }

        if (!StringHelper.IsNullOrEmpty(this.Name)) {
            return this.Name + " <" + addressPart + ">";
        }
        else {
            return addressPart;
        }
    }
    toString(): string {
        return this.ToString();
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Name, this.Name);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.EmailAddress, this.Address);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.RoutingType, this.RoutingType);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.MailboxType, MailboxType.ToEwsEnumString(this.MailboxType));

        if (this.Id != null) {
            this.Id.WriteToXml(writer);//, XmlElementNames.ItemId);
        }
    }
}