import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {ComplexProperty} from "./ComplexProperty";
import {StandardUser} from "../Enumerations/StandardUser";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {StringHelper} from "../ExtensionMethods";
export class UserId extends ComplexProperty {
    get SID(): string { return this.sID; }
    set SID(value) { this.SetFieldValue<string>({ getValue: () => this.sID, setValue: (data) => this.sID = data }, value); }
    get PrimarySmtpAddress(): string { return this.primarySmtpAddress; }
    set PrimarySmtpAddress(value) { this.SetFieldValue<string>({ getValue: () => this.primarySmtpAddress, setValue: (data) => this.primarySmtpAddress = data }, value); }
    get DisplayName(): string { return this.displayName; }
    set DisplayName(value) { this.SetFieldValue<string>({ getValue: () => this.displayName, setValue: (data) => this.displayName = data }, value); }
    get StandardUser(): StandardUser { return this.standardUser; }
    set StandardUser(value) { this.SetFieldValue<StandardUser>({ getValue: () => this.standardUser, setValue: (data) => this.standardUser = data }, value); }
    private sID: string;
    private primarySmtpAddress: string;
    private displayName: string;
    private standardUser: StandardUser;
    constructor();
    constructor(standardUser: StandardUser);
    constructor(primarySmtpAddress: string);
    /**this is to shim constructor with easy use within file/module. */
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

    InternalToJson(service: ExchangeService): any { throw new Error("UserId.ts - InternalToJson : Not implemented."); }
    IsValid(): boolean {
        return typeof this.StandardUser === 'number' || !StringHelper.IsNullOrEmpty(this.PrimarySmtpAddress) || !StringHelper.IsNullOrEmpty(this.SID);
    }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("UserId.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames.SID:
                    this.sID = jsonProperty[key];
                    break;
                case XmlElementNames.PrimarySmtpAddress:
                    this.primarySmtpAddress = jsonProperty[key];
                    break;
                case XmlElementNames.DisplayName:
                    this.displayName = jsonProperty[key];
                    break;
                case XmlElementNames.DistinguishedUser:
                    //debugger;//check for enum value consistency
                    this.standardUser = <StandardUser><any>StandardUser[jsonProperty[key]];
                    break;
                default:
                    break;
            }
        }
    }
    /**@internal */
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
            this.StandardUser);
    }
}


