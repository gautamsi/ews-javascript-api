import GroupMember = require("./GroupMember");
import ItemId = require("./ItemId");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");
import Contact = require("../Core/ServiceObjects/Items/Contact");
import EmailAddressKey = require("../Enumerations/EmailAddressKey");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

    class GroupMemberCollection extends ComplexPropertyCollection<GroupMember> {
        private collectionIsCleared: boolean;
        Add(member: GroupMember): any { throw new Error("GroupMemberCollection.ts - Add : Not implemented."); }
        AddContactEmailAddress(contact: Contact, emailAddressKey: EmailAddressKey): any { throw new Error("GroupMemberCollection.ts - AddContactEmailAddress : Not implemented."); }
        AddContactGroup(contactGroupId: ItemId): any { throw new Error("GroupMemberCollection.ts - AddContactGroup : Not implemented."); }
        AddDirectoryContact(address: string, routingType: string): any { throw new Error("GroupMemberCollection.ts - AddDirectoryContact : Not implemented."); }
        //AddDirectoryContact(smtpAddress: string): any { throw new Error("GroupMemberCollection.ts - AddDirectoryContact : Not implemented."); }
        AddDirectoryPublicFolder(smtpAddress: string): any { throw new Error("GroupMemberCollection.ts - AddDirectoryPublicFolder : Not implemented."); }
        AddDirectoryUser(address: string, routingType: string): any { throw new Error("GroupMemberCollection.ts - AddDirectoryUser : Not implemented."); }
        //AddDirectoryUser(smtpAddress: string): any { throw new Error("GroupMemberCollection.ts - AddDirectoryUser : Not implemented."); }
        AddOneOff(displayName: string, address: string, routingType: string): any { throw new Error("GroupMemberCollection.ts - AddOneOff : Not implemented."); }
        //AddOneOff(displayName: string, smtpAddress: string): any { throw new Error("GroupMemberCollection.ts - AddOneOff : Not implemented."); }
        AddPersonalContact(contactId: ItemId): any { throw new Error("GroupMemberCollection.ts - AddPersonalContact : Not implemented."); }
        //AddPersonalContact(contactId: ItemId, addressToLink: string): any { throw new Error("GroupMemberCollection.ts - AddPersonalContact : Not implemented."); }
        AddPublicGroup(smtpAddress: string): any { throw new Error("GroupMemberCollection.ts - AddPublicGroup : Not implemented."); }
        AddRange(members:GroupMember[] /*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("GroupMemberCollection.ts - AddRange : Not implemented."); }
        Clear(): any { throw new Error("GroupMemberCollection.ts - Clear : Not implemented."); }
        ClearChangeLog(): any { throw new Error("GroupMemberCollection.ts - ClearChangeLog : Not implemented."); }
        CreateComplexProperty(xmlElementName: string): GroupMember { throw new Error("GroupMemberCollection.ts - CreateComplexProperty : Not implemented."); }
        CreateDefaultComplexProperty(): GroupMember { throw new Error("GroupMemberCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
        Find(key: string): GroupMember { throw new Error("GroupMemberCollection.ts - Find : Not implemented."); }
        GetCollectionItemXmlElementName(member: GroupMember): string { throw new Error("GroupMemberCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
        InternalValidate(): any { throw new Error("GroupMemberCollection.ts - InternalValidate : Not implemented."); }
        Remove(member: GroupMember): boolean { throw new Error("GroupMemberCollection.ts - Remove : Not implemented."); }
        RemoveAt(index: number): any { throw new Error("GroupMemberCollection.ts - RemoveAt : Not implemented."); }
        WriteDeleteMembersCollectionToXml(writer: EwsServiceXmlWriter): any { throw new Error("GroupMemberCollection.ts - WriteDeleteMembersCollectionToXml : Not implemented."); }
        WriteDeleteMembersToXml(writer: EwsServiceXmlWriter, members: GroupMember[] /* System.Collections.Generic.List<GroupMember>*/): any { throw new Error("GroupMemberCollection.ts - WriteDeleteMembersToXml : Not implemented."); }
        WriteSetOrAppendMembersToXml(writer: EwsServiceXmlWriter, members: GroupMember[] /*System.Collections.Generic.List<GroupMember>*/, setMode: boolean): any { throw new Error("GroupMemberCollection.ts - WriteSetOrAppendMembersToXml : Not implemented."); }
    }
export = GroupMemberCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
