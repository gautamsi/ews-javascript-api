import {EwsUtilities} from "../Core/EwsUtilities";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";

import {StringHelper} from "../ExtensionMethods";

import {WellKnownFolderName} from "../Enumerations/WellKnownFolderName";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {EnumToExchangeVersionMappingHelper} from "../Enumerations/EnumToExchangeVersionMappingHelper";

import {Mailbox} from "./Mailbox";

import {ServiceId} from "./ServiceId";
export class FolderId extends ServiceId {
    get FolderName(): WellKnownFolderName { return this.folderName; }
    get Mailbox(): Mailbox { return this.mailbox; }
    public get IsValid(): boolean {

        if (this.FolderName) {
            return (this.Mailbox == null) || this.Mailbox.IsValid;
        }
        else {
            return super.IsValidProxy();
        }
    }

    private folderName: WellKnownFolderName;
    private mailbox: Mailbox;

    //    constructor(uniqueId?: string, folderName?: WellKnownFolderName, mailbox?: Mailbox) {
    //        super(uniqueId);
    //
    //        this.mailbox = mailbox;
    //        this.folderName = folderName;
    //    }
    constructor(folderName?: WellKnownFolderName, mailbox?: Mailbox) {
        super();

        this.mailbox = mailbox;
        this.folderName = folderName;
    }
    Equals(obj: any): boolean {
        if (this === obj) {
            return true;
        }
        else {
            var other: FolderId = obj;

            if (!(other instanceof FolderId)) {
                return false;
            }
            else if (this.FolderName) {
                if (other.FolderName && this.FolderName === other.FolderName) {
                    if (this.Mailbox != null) {
                        return this.Mailbox.Equals(other.Mailbox);
                    }
                    else if (other.Mailbox == null) {
                        return true;
                    }
                }
            }
            else if (super.Equals(other)) {
                return true;
            }

            return false;
        }
    }
    //GetHashCode(): number { throw new Error("FolderId.ts - GetHashCode : Not implemented."); }
    GetXmlElementName(): string { return typeof this.folderName!== 'undefined' && this.FolderName >=0 ? XmlElementNames.DistinguishedFolderId : XmlElementNames.FolderId; }
    //InternalToJson(service: ExchangeService): any { throw new Error("FolderId.ts - InternalToJson : Not implemented."); }
    ToString(): string {
        if (this.IsValid) {
            if (this.FolderName) {
                if ((this.mailbox != null) && this.mailbox.IsValid) {
                    return StringHelper.Format("{0} ({1})", WellKnownFolderName[this.folderName], this.Mailbox.ToString());
                }
                else {
                    return WellKnownFolderName[this.FolderName];
                }
            }
            else {
                return super.ToString();
            }
        }
        else {
            return "";
        }
    }
    Validate(version?: ExchangeVersion): void {
        if (version) {
            // The FolderName property is a WellKnownFolderName, an enumeration type. If the property
            // is set, make sure that the value is valid for the request version.
            if (this.FolderName) {
                EwsUtilities.ValidateEnumVersionValue(EnumToExchangeVersionMappingHelper.WellKnownFolderName, this.FolderName, version);
            }
        }
        else {
            super.Validate();
        }
    }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        if (typeof this.folderName!== 'undefined' && this.FolderName >=0) {
            writer.WriteAttributeValue(null, XmlAttributeNames.Id, WellKnownFolderName[this.FolderName].toLowerCase());

            if (this.Mailbox != null) {
                this.Mailbox.WriteToXml(writer, XmlElementNames.Mailbox);
            }
        }
        else {
            super.WriteAttributesToXml(writer);
        }
    }
}
