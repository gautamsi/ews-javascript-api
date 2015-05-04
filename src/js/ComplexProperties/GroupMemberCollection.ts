import GroupMember = require("./GroupMember");
import ItemId = require("./ItemId");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");
import Contact = require("../Core/ServiceObjects/Items/Contact");
import EmailAddressKey = require("../Enumerations/EmailAddressKey");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

    class GroupMemberCollection extends ComplexPropertyCollection<GroupMember> {
        private collectionIsCleared: boolean;
        Add(member: GroupMember): any { throw new Error("Not implemented."); }
        AddContactEmailAddress(contact: Contact, emailAddressKey: EmailAddressKey): any { throw new Error("Not implemented."); }
        AddContactGroup(contactGroupId: ItemId): any { throw new Error("Not implemented."); }
        AddDirectoryContact(address: string, routingType: string): any { throw new Error("Not implemented."); }
        //AddDirectoryContact(smtpAddress: string): any { throw new Error("Not implemented."); }
        AddDirectoryPublicFolder(smtpAddress: string): any { throw new Error("Not implemented."); }
        AddDirectoryUser(address: string, routingType: string): any { throw new Error("Not implemented."); }
        //AddDirectoryUser(smtpAddress: string): any { throw new Error("Not implemented."); }
        AddOneOff(displayName: string, address: string, routingType: string): any { throw new Error("Not implemented."); }
        //AddOneOff(displayName: string, smtpAddress: string): any { throw new Error("Not implemented."); }
        AddPersonalContact(contactId: ItemId): any { throw new Error("Not implemented."); }
        //AddPersonalContact(contactId: ItemId, addressToLink: string): any { throw new Error("Not implemented."); }
        AddPublicGroup(smtpAddress: string): any { throw new Error("Not implemented."); }
        AddRange(members:GroupMember[] /*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("Not implemented."); }
        Clear(): any { throw new Error("Not implemented."); }
        ClearChangeLog(): any { throw new Error("Not implemented."); }
        CreateComplexProperty(xmlElementName: string): GroupMember { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): GroupMember { throw new Error("Not implemented."); }
        Find(key: string): GroupMember { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(member: GroupMember): string { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        Remove(member: GroupMember): boolean { throw new Error("Not implemented."); }
        RemoveAt(index: number): any { throw new Error("Not implemented."); }
        WriteDeleteMembersCollectionToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteDeleteMembersToXml(writer: EwsServiceXmlWriter, members: GroupMember[] /* System.Collections.Generic.List<GroupMember>*/): any { throw new Error("Not implemented."); }
        WriteSetOrAppendMembersToXml(writer: EwsServiceXmlWriter, members: GroupMember[] /*System.Collections.Generic.List<GroupMember>*/, setMode: boolean): any { throw new Error("Not implemented."); }
    }
export = GroupMemberCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
