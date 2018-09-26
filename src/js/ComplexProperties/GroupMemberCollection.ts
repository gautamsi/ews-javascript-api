import { ArgumentOutOfRangeException } from "../Exceptions/ArgumentException";
import { ComplexPropertyCollection } from "./ComplexPropertyCollection";
import { Contact } from "../Core/ServiceObjects/Items/Contact";
import { ContactGroupSchema } from "../Core/ServiceObjects/Schemas/ContactGroupSchema";
import { EmailAddress } from "./EmailAddress";
import { EmailAddressKey } from "../Enumerations/EmailAddressKey";
import { EwsLogging } from "../Core/EwsLogging";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../Core/EwsUtilities";
import { GroupMember } from "./GroupMember";
import { GroupMemberPropertyDefinition } from "../PropertyDefinitions/GroupMemberPropertyDefinition";
import { ICustomUpdateSerializer } from "../Interfaces/ICustomXmlUpdateSerializer";
import { ItemId } from "./ItemId";
import { MailboxType } from "../Enumerations/MailboxType";
import { ServiceValidationException } from "../Exceptions/ServiceValidationException";
import { StringHelper } from "../ExtensionMethods";
import { Strings } from "../Strings";
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";
import { ServiceObject } from "../Core/ServiceObjects/ServiceObject";
import { PropertyDefinition } from "../PropertyDefinitions/PropertyDefinition";

/**
 * Represents a collection of members of GroupMember type.
 * @sealed
 */
export class GroupMemberCollection extends ComplexPropertyCollection<GroupMember> implements ICustomUpdateSerializer {

    /**
     * If the collection is cleared, then store PDL members collection is updated with "SetItemField". If the collection is not cleared, then store PDL members collection is updated with "AppendToItemField".
     *
     */
    private collectionIsCleared: boolean = false;

    /**
     * Initializes a new instance of the  class.
     *
     */
    constructor() {
        super();
    }

    /**
     * Adds a member to the collection.
     *
     * @param   {GroupMember}   member   The member to add.
     */
    Add(member: GroupMember): void {
        EwsUtilities.ValidateParam(member, "member");

        EwsLogging.Assert(
            member.Key == null,
            "GroupMemberCollection.Add",
            "member.Key is not null.");

        EwsLogging.Assert(
            !this.Contains(member),
            "GroupMemberCollection.Add",
            "The member is already in the collection");

        this.InternalAdd(member);
    }

    /**
     * Adds a member that is linked to a specific e-mail address of a contact.
     *
     * @param   {Contact}   contact           The contact to link to.
     * @param   {EmailAddressKey}   emailAddressKey   The contact's e-mail address to link to.
     */
    AddContactEmailAddress(contact: Contact, emailAddressKey: EmailAddressKey): void {
        this.Add(new GroupMember(contact, emailAddressKey));
    }

    /**
     * Adds a member linked to a Contact Group.
     *
     * @param   {ItemId}   contactGroupId   The Id of the contact group.
     */
    AddContactGroup(contactGroupId: ItemId): void {
        this.Add(new GroupMember(contactGroupId));
    }

    /**
     * Adds a member linked to an Active Directory contact.
     *
     * @param   {string}   smtpAddress   The SMTP address of the Active Directory contact.
     */
    AddDirectoryContact(smtpAddress: string): void;
    /**
     * Adds a member linked to an Active Directory contact.
     *
     * @param   {string}   address       The address of the Active Directory contact.
     * @param   {string}   routingType   The routing type of the address.
     */
    AddDirectoryContact(address: string, routingType: string): void;
    AddDirectoryContact(address: string, routingType: string = EmailAddress.SmtpRoutingType): void {
        this.Add(new GroupMember(address, routingType, MailboxType.Contact));
    }

    /**
     * Adds a member linked to a mail-enabled Public Folder.
     *
     * @param   {string}   smtpAddress   The SMTP address of the mail-enabled Public Folder.
     */
    AddDirectoryPublicFolder(smtpAddress: string): void {
        this.Add(new GroupMember(smtpAddress, EmailAddress.SmtpRoutingType, MailboxType.PublicFolder));
    }

    /**
     * Adds a member linked to an Active Directory user.
     *
     * @param   {string}   smtpAddress   The SMTP address of the member.
     */
    AddDirectoryUser(smtpAddress: string): void;
    /**
     * Adds a member linked to an Active Directory user.
     *
     * @param   {string}   address       The address of the member.
     * @param   {string}   routingType   The routing type of the address.
     */
    AddDirectoryUser(address: string, routingType: string): void;
    AddDirectoryUser(address: string, routingType: string = EmailAddress.SmtpRoutingType): void {
        this.Add(new GroupMember(address, routingType, MailboxType.Mailbox));
    }

    /**
     * Adds a one-off member.
     *
     * @param   {string}   displayName   The display name of the member.
     * @param   {string}   smtpAddress   The SMTP address of the member.
     */
    AddOneOff(displayName: string, smtpAddress: string): void;
    /**
     * Adds a one-off member.
     *
     * @param   {string}   displayName   The display name of the member.
     * @param   {string}   address       The address of the member.
     * @param   {string}   routingType   The routing type of the address.
     */
    AddOneOff(displayName: string, address: string, routingType: string): void;
    AddOneOff(displayName: string, address: string, routingType: string = EmailAddress.SmtpRoutingType): void {
        this.Add(new GroupMember(displayName, address, routingType));
    }

    /**
     * Adds a member linked to a contact's first available e-mail address.
     *
     * @param   {ItemId}   contactId   The Id of the contact.
     */
    AddPersonalContact(contactId: ItemId): void;
    /**
     * Adds a member linked to a specific contact's e-mail address.
     *
     * @param   {ItemId}   contactId       The Id of the contact.
     * @param   {string}   addressToLink   The contact's address to link to.
     */
    AddPersonalContact(contactId: ItemId, addressToLink: string): void;
    AddPersonalContact(contactId: ItemId, addressToLink: string = null): void {
        this.Add(new GroupMember(contactId, addressToLink));
    }

    /**
     * Adds a member linked to a Public Group.
     *
     * @param   {string}   smtpAddress   The SMTP address of the Public Group.
     */
    AddPublicGroup(smtpAddress: string): void {
        this.Add(new GroupMember(smtpAddress, EmailAddress.SmtpRoutingType, MailboxType.PublicGroup));
    }

    /**
     * Adds multiple members to the collection.
     *
     * @param   {GroupMember[]}   members   The members to add.
     */
    AddRange(members: GroupMember[] /*IEnumerable<T>*/): void {
        EwsUtilities.ValidateParam(members, "members");

        for (let member of members) {
            this.Add(member);
        }
    }

    /**
     * Clears the collection.
     */
    Clear(): void {
        // mark the whole collection for deletion
        this.InternalClear();
        this.collectionIsCleared = true;
    }

    /**
     * @internal Clears the change log.
     *
     */
    ClearChangeLog(): void {
        super.ClearChangeLog();
        this.collectionIsCleared = false;
    }

    /**
     * @internal Creates a GroupMember object from an XML element name.
     *
     * @param   {string}        xmlElementName   The XML element name from which to create the e-mail address.
     * @return  {GroupMember}   An GroupMember object.
     */
    CreateComplexProperty(xmlElementName: string): GroupMember {
        return new GroupMember();
    }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {GroupMember}      An GroupMember object.
     */
    CreateDefaultComplexProperty(): GroupMember {
        return new GroupMember();
    }

    /**
     * Finds the member with the specified key in the collection. 
     * Members that have not yet been saved do not have a key.
     *
     * @param   {}   key   The key of the member to find.
     * @return  {}         The member with the specified key.
     */
    Find(key: string): GroupMember {
        EwsUtilities.ValidateParam(key, "key");

        for (let item of this.Items) {
            if (item.Key == key) {
                return item;
            }
        }

        return null;
    }

    /**
     * @internal Retrieves the XML element name corresponding to the provided GroupMember object.
     *
     * @param   {GroupMember}   member   The GroupMember object from which to determine the XML element name.
     * @return  {string}            The XML element name corresponding to the provided GroupMember object.
     */
    GetCollectionItemXmlElementName(member: GroupMember): string {
        return XmlElementNames.Member;
    }

    /**
     * @internal Validates this instance.
     */
    InternalValidate(): void {
        super.InternalValidate();

        for (let groupMember of this.ModifiedItems) {
            if (StringHelper.IsNullOrEmpty(groupMember.Key)) {
                throw new ServiceValidationException(Strings.ContactGroupMemberCannotBeUpdatedWithoutBeingLoadedFirst);
            }
        }
    }

    /**
     * Removes a member from the collection.
     *
     * @param   {GroupMember}   member   The member to remove.
     * @return  {boolean}       True if the group member was successfully removed from the collection, false otherwise.
     */
    Remove(member: GroupMember): boolean {
        return this.InternalRemove(member);
    }

    /**
     * Removes a member at the specified index.
     *
     * @param   {number}   index   The index of the member to remove.
     */
    RemoveAt(index: number): void {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentOutOfRangeException("index", Strings.IndexIsOutOfRange);
        }

        this.InternalRemoveAt(index);
    }

    /**
     * Delete the whole members collection.
     *
     * @param   {EwsServiceXmlWriter}   writer   Xml writer.
     */
    private WriteDeleteMembersCollectionToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.DeleteItemField);
        ContactGroupSchema.Members.WriteToXml(writer);
        writer.WriteEndElement();
    }

    /**
     * Generate XML to delete individual members.
     *
     * @param   {EwsServiceXmlWriter}   writer    Xml writer.
     * @param   {GroupMember[]}         members   Members to delete.
     */
    private WriteDeleteMembersToXml(writer: EwsServiceXmlWriter, members: GroupMember[] /* List<GroupMember>*/): void {
        if (members.length != 0) {
            let memberPropDef: GroupMemberPropertyDefinition = new GroupMemberPropertyDefinition();

            for (let member of members) {
                writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.DeleteItemField);

                memberPropDef.Key = member.Key;
                memberPropDef.WriteToXml(writer);

                writer.WriteEndElement();   // DeleteItemField
            }
        }
    }

    /**
     * Generate XML to Set or Append members. When members are set, the existing PDL member collection is cleared On append members are added to the PDL existing members collection.
     *
     * @param   {EwsServiceXmlWriter}   writer    Xml writer.
     * @param   {GroupMember[]}         members   Members to set or append.
     * @param   {boolean}               setMode   True - set members, false - append members.
     */
    private WriteSetOrAppendMembersToXml(writer: EwsServiceXmlWriter, members: GroupMember[] /*List<GroupMember>*/, setMode: boolean): void {
        if (members.length != 0) {
            writer.WriteStartElement(XmlNamespace.Types, setMode ? XmlElementNames.SetItemField : XmlElementNames.AppendToItemField);

            ContactGroupSchema.Members.WriteToXml(writer);

            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.DistributionList);
            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Members);

            for (let member of members) {
                member.WriteToXml(writer, XmlElementNames.Member);
            }

            writer.WriteEndElement();   // Members
            writer.WriteEndElement();   // Group
            writer.WriteEndElement();   // setMode ? SetItemField : AppendItemField
        }
    }

    //#region ICustomUpdateSerializer

    /**
     * @internal Writes the deletion update to XML.
     * ICustomUpdateSerializer.WriteDeleteUpdateToXml
     *
     * @param   {EwsServiceXmlWriter}   writer      The writer.
     * @param   {ServiceObject}         ewsObject   The ews object.
     * @return  {boolean}               True if property generated serialization.
     */
    WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean {
        return false;
    }

    /**
     * @internal Writes the update to XML.
     * ICustomUpdateSerializer.WriteSetUpdateToXml
     *
     * @param   {EwsServiceXmlWriter}   writer               The writer.
     * @param   {ServiceObject}         ewsObject            The ews object.
     * @param   {PropertyDefinition}    propertyDefinition   Property definition.
     * @return  {boolean}               True if property generated serialization.
     */
    WriteSetUpdateToXml(
        writer: EwsServiceXmlWriter,
        ewsObject: ServiceObject,
        propertyDefinition: PropertyDefinition): boolean {

        if (this.collectionIsCleared) {
            if (this.AddedItems.length == 0) {
                // Delete the whole members collection
                this.WriteDeleteMembersCollectionToXml(writer);
            }
            else {
                // The collection is cleared, so Set
                this.WriteSetOrAppendMembersToXml(writer, this.AddedItems, true);
            }
        }
        else {
            // The collection is not cleared, i.e. dl.Members.Clear() is not called.
            // Append AddedItems.
            this.WriteSetOrAppendMembersToXml(writer, this.AddedItems, false);

            // Since member replacement is not supported by server
            // Delete old ModifiedItems, then recreate new instead.
            this.WriteDeleteMembersToXml(writer, this.ModifiedItems);
            this.WriteSetOrAppendMembersToXml(writer, this.ModifiedItems, false);

            // Delete RemovedItems.
            this.WriteDeleteMembersToXml(writer, this.RemovedItems);
        }

        return true;
    }
    //#endregion
}
