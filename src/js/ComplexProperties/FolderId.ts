import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../Core/EwsUtilities";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { Mailbox } from "./Mailbox";
import { StringHelper, hasValue } from "../ExtensionMethods";
import { WellKnownFolderName } from "../Enumerations/WellKnownFolderName";
import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlElementNames } from "../Core/XmlElementNames";

import { ServiceId } from "./ServiceId";
/**
 * Represents the Id of a folder.
 *
 * @class FolderId
 * @extends {ServiceId}
 */
export class FolderId extends ServiceId {
    private folderName: WellKnownFolderName;
    private mailbox: Mailbox;

    /**
     * Gets the name of the folder associated with the folder Id. Name and Id are mutually exclusive; if one is set, the other is null.
     *
     * @readonly
     * @type {WellKnownFolderName}
     */
    get FolderName(): WellKnownFolderName {
        return this.folderName;
    }

    /**
     * Gets the mailbox of the folder. Mailbox is only set when FolderName is set.
     *
     * @readonly
     * @type {Mailbox}
     */
    get Mailbox(): Mailbox {
        return this.mailbox;
    }

    /**
     * True if this instance is valid, false otherthise.
     * 
     * @value   *true* if this instance is valid; otherwise, *false*.
     */
    public get IsValid(): boolean {

        if (hasValue(this.FolderName)) {
            return (this.Mailbox == null) || this.Mailbox.IsValid;
        }
        else {
            return super.IsValidProxy();
        }
    }

    /**
     * @internal Initializes a new instance of the **FolderId** class.
    *
    */
    constructor();
    /**
     * Initializes a new instance of the **FolderId** class. Use this constructor to link this FolderId to an existing folder that you have the unique Id of.
    *
    * @param   {String} uniqueId The unique Id used to initialize the FolderId.
    */
    constructor(uniqueId: string);
    /**
     * Initializes a new instance of the **FolderId** class. Use this constructor to link this FolderId to a well known folder (e.g. Inbox, Calendar or Contacts).
    *
    * @param   {WellKnownFolderName}    folderName  The folder name used to initialize the FolderId.
    */
    constructor(folderName: WellKnownFolderName);
    /**
     * Initializes a new instance of the **FolderId** class. Use this constructor to link this FolderId to a well known folder (e.g. Inbox, Calendar or Contacts) in a specific mailbox.
    *
    * @param   {WellKnownFolderName}    folderName   The folder name used to initialize the FolderId.
    * @param   {Mailbox}                mailbox      The mailbox used to initialize the FolderId.
    */
    constructor(folderName: WellKnownFolderName, mailbox: Mailbox);
    constructor(uniqueIdOrFolderName?: string | WellKnownFolderName, mailbox?: Mailbox) {
        arguments.length === 1 && typeof uniqueIdOrFolderName === 'string' ? super(uniqueIdOrFolderName) : super();

        if (arguments.length > 0 && typeof uniqueIdOrFolderName === 'number') {

            this.folderName = uniqueIdOrFolderName;
        }
        if (arguments.length > 1) {
            this.mailbox = mailbox;
        }
    }

    /**
     * Determines whether the specified *FolderId* is equal to the current *FolderId*.
     * We do not consider the ChangeKey for FolderId.Equals.
     *
     * @param   {any}       obj   The  to compare with the current .
     * @return  {boolean}   true if the specified  is equal to the current ; otherwise, false.
     */
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

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string {
        return typeof this.folderName !== 'undefined' && this.FolderName >= 0 ? XmlElementNames.DistinguishedFolderId : XmlElementNames.FolderId;
    }

    /**
     * Returns a *String* that represents the current *FolderId*.
     *
     * @return  {string}      A *String* that represents the current *FolderId*.
     */
    ToString(): string {
        if (this.IsValid) {
            if (hasValue(this.FolderName)) {
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

    /**
     * @internal Validates FolderId against a specified request version.
     *
     * @param   {ExchangeVersion}   version   The version.
     */
    Validate(version?: ExchangeVersion): void {
        if (hasValue(version)) {
            // The FolderName property is a WellKnownFolderName, an enumeration type. If the property
            // is set, make sure that the value is valid for the request version.
            if (hasValue(this.FolderName)) {
                EwsUtilities.ValidateEnumVersionValue(WellKnownFolderName, this.FolderName, version, "WellKnownFolderName");
            }
        }
        else {
            super.Validate();
        }
    }

    /**
     * @internal Writes attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        if (typeof this.folderName !== 'undefined' && this.FolderName >= 0) {
            writer.WriteAttributeValue(XmlAttributeNames.Id, WellKnownFolderName[this.FolderName].toLowerCase());

            if (this.Mailbox != null) {
                this.Mailbox.WriteToXml(writer, XmlElementNames.Mailbox);
            }
        }
        else {
            super.WriteAttributesToXml(writer);
        }
    }
}
