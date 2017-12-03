import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { ExchangeService } from "../Core/ExchangeService";
import { StandardUser } from "../Enumerations/StandardUser";
import { StringHelper } from "../ExtensionMethods";
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

import { ComplexProperty } from "./ComplexProperty";
/**
 * Represents the Id of a user.
 * 
 * @sealed
 */
export class UserId extends ComplexProperty {

    private sID: string = null;
    private primarySmtpAddress: string = null;
    private displayName: string = null;
    private standardUser: StandardUser = null;

    /**
     * Gets or sets the SID of the user.
     */
    get SID(): string {
        return this.sID;
    }
    set SID(value) {
        this.SetFieldValue<string>({ getValue: () => this.sID, setValue: (data) => this.sID = data }, value);
    }

    /**
     * Gets or sets the primary SMTP address or the user.
     */
    get PrimarySmtpAddress(): string {
        return this.primarySmtpAddress;
    }
    set PrimarySmtpAddress(value) {
        this.SetFieldValue<string>({ getValue: () => this.primarySmtpAddress, setValue: (data) => this.primarySmtpAddress = data }, value);
    }

    /**
     * Gets or sets the display name of the user.
     */
    get DisplayName(): string {
        return this.displayName;
    }
    set DisplayName(value) {
        this.SetFieldValue<string>({ getValue: () => this.displayName, setValue: (data) => this.displayName = data }, value);
    }

    /**
     * Gets or sets a value indicating which standard user the user represents.
     * 
     * @Nullable
     */
    get StandardUser(): StandardUser {
        return this.standardUser;
    }
    set StandardUser(value) {
        this.SetFieldValue<StandardUser>({ getValue: () => this.standardUser, setValue: (data) => this.standardUser = data }, value);
    }

    /**
     * Initializes a new instance of the **UserId** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **UserId** class.
     *
     * @param   {StandardUser}   standardUser   The StandardUser value used to initialize the UserId.
     */
    constructor(standardUser: StandardUser);
    /**
     * Initializes a new instance of the **UserId** class.
     *
     * @param   {string}   primarySmtpAddress   The primary SMTP address used to initialize the UserId.
     */
    constructor(primarySmtpAddress: string);
    /** @internal this is to shim constructor with easy use within file/module. */
    constructor(primarySmtpAddressOrStandardUser?: string | StandardUser);
    constructor(primarySmtpAddressOrStandardUser?: string | StandardUser) {
        super();
        if (typeof primarySmtpAddressOrStandardUser !== 'undefined') {
            if (typeof primarySmtpAddressOrStandardUser === 'string') {
                this.primarySmtpAddress = primarySmtpAddressOrStandardUser;
            }
            else {
                this.standardUser = primarySmtpAddressOrStandardUser;
            }
        }
    }

    /**
     * @internal Determines whether this instance is valid.
     *
     * @return  {boolean}      true if this instance is valid; otherwise, false.
     */
    IsValid(): boolean {
        return typeof this.StandardUser === 'number' || !StringHelper.IsNullOrEmpty(this.PrimarySmtpAddress) || !StringHelper.IsNullOrEmpty(this.SID);
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames.SID:
                    this.sID = jsObject[key];
                    break;
                case XmlElementNames.PrimarySmtpAddress:
                    this.primarySmtpAddress = jsObject[key];
                    break;
                case XmlElementNames.DisplayName:
                    this.displayName = jsObject[key];
                    break;
                case XmlElementNames.DistinguishedUser:
                    //debugger;//check for enum value consistency
                    this.standardUser = <StandardUser><any>StandardUser[jsObject[key]];
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.SID,
            this.SID);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.PrimarySmtpAddress,
            this.PrimarySmtpAddress);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.DisplayName,
            this.DisplayName);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.DistinguishedUser,
            StandardUser[this.StandardUser]);
    }
}
