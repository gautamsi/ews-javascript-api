import {Convert} from "../ExtensionMethods";
import {DelegatePermissions} from "./DelegatePermissions";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../Core/ExchangeService";
import {ServiceValidationException} from '../Exceptions/ServiceValidationException';
import {StandardUser} from "../Enumerations/StandardUser";
import {Strings} from "../Strings";
import {UserId} from "./UserId";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents a delegate user.
 * 
 * @sealed
 */
export class DelegateUser extends ComplexProperty {

    private userId: UserId = new UserId();
    private permissions: DelegatePermissions = new DelegatePermissions();
    private receiveCopiesOfMeetingMessages: boolean = false;
    private viewPrivateItems: boolean = false;

    /**
     * Gets the user Id of the delegate user.
     */
    get UserId(): UserId {
        return this.userId;
    }

    /**
     * Gets the list of delegate user's permissions.
     */
    get Permissions(): DelegatePermissions {
        return this.permissions;
    }

    /**
     * Gets or sets a value indicating if the delegate user should receive copies of meeting requests.
     */
    get ReceiveCopiesOfMeetingMessages(): boolean {
        return this.receiveCopiesOfMeetingMessages;
    }
    set ReceiveCopiesOfMeetingMessages(value: boolean) {
        this.receiveCopiesOfMeetingMessages = value;
    }

    /**
     * Gets or sets a value indicating if the delegate user should be able to view the principal's private items.
     */
    get ViewPrivateItems(): boolean {
        return this.viewPrivateItems;
    }
    set ViewPrivateItems(value: boolean) {
        this.viewPrivateItems = value;
    }

    /**
     * Initializes a new instance of the **DelegateUser** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **DelegateUser** class.
     *
     * @param   {string}   primarySmtpAddress   The primary SMTP address of the delegate user.
     */
    constructor(primarySmtpAddress: string);
    /**
     * Initializes a new instance of the **DelegateUser** class.
     *
     * @param   {StandardUser}   standardUser   The standard delegate user.
     */
    constructor(standardUser: StandardUser);
    constructor(primarySmtpAddressOrStandardUser?: string | StandardUser) {
        super();

        // Confusing error message refers to Calendar folder permissions when adding delegate access for a user
        // without including Calendar Folder permissions.
        //
        this.receiveCopiesOfMeetingMessages = false;
        this.viewPrivateItems = false;

        if (typeof primarySmtpAddressOrStandardUser === 'string') {
            this.userId.PrimarySmtpAddress = primarySmtpAddressOrStandardUser;
        }
        else {
            this.userId.StandardUser = primarySmtpAddressOrStandardUser;
        }
    }

    /**
     * @internal Validates this instance.
     */
    InternalValidate(): void {
        if (this.UserId == null) {
            throw new ServiceValidationException(Strings.UserIdForDelegateUserNotSpecified);
        }
        else if (!this.UserId.IsValid()) {
            throw new ServiceValidationException(Strings.DelegateUserHasInvalidUserId);
        }
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        for (let key in jsObject) {
            switch (key) {
                case XmlElementNames.UserId:
                    this.userId = new UserId();
                    this.userId.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.DelegatePermissions:
                    this.permissions.Reset();
                    this.permissions.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.ReceiveCopiesOfMeetingMessages:
                    this.receiveCopiesOfMeetingMessages = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.ViewPrivateItems:
                    this.viewPrivateItems = Convert.toBool(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * @internal Validates this instance for AddDelegate.
     */
    ValidateAddDelegate(): void {
        this.permissions.ValidateAddDelegate();
    }

    /**
     * @internal Validates this instance for UpdateDelegate.
     */
    ValidateUpdateDelegate(): void {
        this.permissions.ValidateUpdateDelegate();
    }

    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        this.UserId.WriteToXml(writer, XmlElementNames.UserId);
        this.Permissions.WriteToXml(writer, XmlElementNames.DelegatePermissions);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.ReceiveCopiesOfMeetingMessages,
            this.ReceiveCopiesOfMeetingMessages);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.ViewPrivateItems,
            this.ViewPrivateItems);
    }
}