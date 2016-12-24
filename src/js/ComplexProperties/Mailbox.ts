import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../Core/EwsUtilities";
import { ExchangeService } from "../Core/ExchangeService";
import { ISearchStringProvider } from "../Interfaces/ISearchStringProvider";
import { StringHelper } from "../ExtensionMethods";
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

import { ComplexProperty } from "./ComplexProperty";
/**
 * Represents a mailbox reference.
 */
export class Mailbox extends ComplexProperty implements ISearchStringProvider {

    /**
     * True if this instance is valid, false otherthise.
     * 
     * @value   *true* if this instance is valid; otherwise, *false*.
     */
    get IsValid(): boolean {
        return !StringHelper.IsNullOrEmpty(this.Address);
    }

    /**
     * Gets or sets the address used to refer to the user mailbox.
     */
    Address: string;

    /**
     * Gets or sets the routing type of the address used to refer to the user mailbox.
     */
    RoutingType: string;

    /**
     * Initializes a new instance of the **Mailbox** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **Mailbox** class.
     *
     * @param   {string}   smtpAddress   The primary SMTP address of the mailbox.
     */
    constructor(smtpAddress: string);
    /**
     * Initializes a new instance of the **Mailbox** class.
     *
     * @param   {string}   address       The address used to reference the user mailbox.
     * @param   {string}   routingType   The routing type of the address used to reference the user mailbox.
     */
    constructor(address: string, routingType: string);
    constructor(smtpAddressOrAddress: string = null, routingType: string = null) {
        super();

        this.Address = smtpAddressOrAddress;
        this.RoutingType = routingType;
    }

    /**
     * Determines whether the specified  is equal to the current .
     *
     * @param   {any}   obj   The  to compare with the current .
     * @return  {boolean}       true if the specified  is equal to the current ; otherwise, false.
     * 
     * @exception   {NullReferenceException}    The **obj** parameter is null.
     */
    Equals(obj: any): boolean {
        if (this === obj) {
            return true;
        }
        else {
            var other: Mailbox = obj;

            if (!(other instanceof Mailbox)) {
                return false;
            }
            else if (((this.Address == null) && (other.Address == null)) ||
                ((this.Address != null) && this.Address === other.Address)) {
                return ((this.RoutingType == null) && (other.RoutingType == null)) ||
                    ((this.RoutingType != null) && this.RoutingType === other.RoutingType);
            }
            else {
                return false;
            }
        }
    }

    //GetHashCode(): number { throw new Error("Mailbox.ts - GetHashCode : Not implemented."); }

    /**
	 * @internal Validates this instance.
	 */
    InternalValidate(): void {
        super.InternalValidate();

        EwsUtilities.ValidateNonBlankStringParamAllowNull(this.Address, "address");
        EwsUtilities.ValidateNonBlankStringParamAllowNull(this.RoutingType, "routingType");
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        //debug:
        if (jsonProperty[XmlElementNames.EmailAddress]) {
            this.Address = jsonProperty[XmlElementNames.EmailAddress];//.ReadAsString(XmlElementNames.EmailAddress);
        }

        if (jsonProperty[XmlElementNames.RoutingType]) {
            this.RoutingType = jsonProperty[XmlElementNames.RoutingType];//.ReadAsString(XmlElementNames.RoutingType);
        }
    }

    /**
     * Returns a  that represents the current .
     *
     * @return  {string}      A **String** that represents the current **Object**.
     */
    ToString(): string {
        if (!this.IsValid) {
            return StringHelper.Empty;
        }
        else if (!StringHelper.IsNullOrEmpty(this.RoutingType)) {
            return this.RoutingType + ":" + this.Address;
        }
        else {
            return this.Address;
        }
    }
    toString(): string {
        return this.ToString();
    }


    /**
	 * @internal Writes the elements to XML writer.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.EmailAddress, this.Address);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.RoutingType, this.RoutingType);
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
}