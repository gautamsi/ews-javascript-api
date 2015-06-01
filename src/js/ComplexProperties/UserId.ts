import XmlElementNames = require("../Core/XmlElementNames");
import XmlNamespace = require("../Enumerations/XmlNamespace");
import ComplexProperty = require("./ComplexProperty");
import StandardUser = require("../Enumerations/StandardUser");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import {StringHelper} from "../ExtensionMethods";

class UserId extends ComplexProperty {
    get SID(): string { return this.sID; }
    set SID(value) { this.SetFieldValue<string>({ refValue: this.sID }, value); }
    get PrimarySmtpAddress(): string { return this.primarySmtpAddress; }
    set PrimarySmtpAddress(value) { this.SetFieldValue<string>({ refValue: this.primarySmtpAddress }, value); }
    get DisplayName(): string { return this.displayName; }
    set DisplayName(value) { this.SetFieldValue<string>({ refValue: this.displayName }, value); }
    get StandardUser(): StandardUser { return this.standardUser; }
    set StandardUser(value) { this.SetFieldValue<StandardUser>({ refValue: this.standardUser }, value); }
    private sID: string;
    private primarySmtpAddress: string;
    private displayName: string;
    private standardUser: StandardUser;

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
    LoadFromXmlJsObject(jsonProperty: any): void {
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
export = UserId;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

