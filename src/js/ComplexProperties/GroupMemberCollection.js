"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
var ContactGroupSchema_1 = require("../Core/ServiceObjects/Schemas/ContactGroupSchema");
var EmailAddress_1 = require("./EmailAddress");
var EwsLogging_1 = require("../Core/EwsLogging");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var GroupMember_1 = require("./GroupMember");
var GroupMemberPropertyDefinition_1 = require("../PropertyDefinitions/GroupMemberPropertyDefinition");
var MailboxType_1 = require("../Enumerations/MailboxType");
var ServiceValidationException_1 = require("../Exceptions/ServiceValidationException");
var ExtensionMethods_1 = require("../ExtensionMethods");
var Strings_1 = require("../Strings");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
/**
 * Represents a collection of members of GroupMember type.
 * @sealed
 */
var GroupMemberCollection = /** @class */ (function (_super) {
    __extends(GroupMemberCollection, _super);
    /**
     * Initializes a new instance of the  class.
     *
     */
    function GroupMemberCollection() {
        var _this = _super.call(this) || this;
        /**
         * If the collection is cleared, then store PDL members collection is updated with "SetItemField". If the collection is not cleared, then store PDL members collection is updated with "AppendToItemField".
         *
         */
        _this.collectionIsCleared = false;
        return _this;
    }
    /**
     * Adds a member to the collection.
     *
     * @param   {GroupMember}   member   The member to add.
     */
    GroupMemberCollection.prototype.Add = function (member) {
        EwsUtilities_1.EwsUtilities.ValidateParam(member, "member");
        EwsLogging_1.EwsLogging.Assert(member.Key == null, "GroupMemberCollection.Add", "member.Key is not null.");
        EwsLogging_1.EwsLogging.Assert(!this.Contains(member), "GroupMemberCollection.Add", "The member is already in the collection");
        this.InternalAdd(member);
    };
    /**
     * Adds a member that is linked to a specific e-mail address of a contact.
     *
     * @param   {Contact}   contact           The contact to link to.
     * @param   {EmailAddressKey}   emailAddressKey   The contact's e-mail address to link to.
     */
    GroupMemberCollection.prototype.AddContactEmailAddress = function (contact, emailAddressKey) {
        this.Add(new GroupMember_1.GroupMember(contact, emailAddressKey));
    };
    /**
     * Adds a member linked to a Contact Group.
     *
     * @param   {ItemId}   contactGroupId   The Id of the contact group.
     */
    GroupMemberCollection.prototype.AddContactGroup = function (contactGroupId) {
        this.Add(new GroupMember_1.GroupMember(contactGroupId));
    };
    GroupMemberCollection.prototype.AddDirectoryContact = function (address, routingType) {
        if (routingType === void 0) { routingType = EmailAddress_1.EmailAddress.SmtpRoutingType; }
        this.Add(new GroupMember_1.GroupMember(address, routingType, MailboxType_1.MailboxType.Contact));
    };
    /**
     * Adds a member linked to a mail-enabled Public Folder.
     *
     * @param   {string}   smtpAddress   The SMTP address of the mail-enabled Public Folder.
     */
    GroupMemberCollection.prototype.AddDirectoryPublicFolder = function (smtpAddress) {
        this.Add(new GroupMember_1.GroupMember(smtpAddress, EmailAddress_1.EmailAddress.SmtpRoutingType, MailboxType_1.MailboxType.PublicFolder));
    };
    GroupMemberCollection.prototype.AddDirectoryUser = function (address, routingType) {
        if (routingType === void 0) { routingType = EmailAddress_1.EmailAddress.SmtpRoutingType; }
        this.Add(new GroupMember_1.GroupMember(address, routingType, MailboxType_1.MailboxType.Mailbox));
    };
    GroupMemberCollection.prototype.AddOneOff = function (displayName, address, routingType) {
        if (routingType === void 0) { routingType = EmailAddress_1.EmailAddress.SmtpRoutingType; }
        this.Add(new GroupMember_1.GroupMember(displayName, address, routingType));
    };
    GroupMemberCollection.prototype.AddPersonalContact = function (contactId, addressToLink) {
        if (addressToLink === void 0) { addressToLink = null; }
        this.Add(new GroupMember_1.GroupMember(contactId, addressToLink));
    };
    /**
     * Adds a member linked to a Public Group.
     *
     * @param   {string}   smtpAddress   The SMTP address of the Public Group.
     */
    GroupMemberCollection.prototype.AddPublicGroup = function (smtpAddress) {
        this.Add(new GroupMember_1.GroupMember(smtpAddress, EmailAddress_1.EmailAddress.SmtpRoutingType, MailboxType_1.MailboxType.PublicGroup));
    };
    /**
     * Adds multiple members to the collection.
     *
     * @param   {GroupMember[]}   members   The members to add.
     */
    GroupMemberCollection.prototype.AddRange = function (members /*IEnumerable<T>*/) {
        EwsUtilities_1.EwsUtilities.ValidateParam(members, "members");
        for (var _i = 0, members_1 = members; _i < members_1.length; _i++) {
            var member = members_1[_i];
            this.Add(member);
        }
    };
    /**
     * Clears the collection.
     */
    GroupMemberCollection.prototype.Clear = function () {
        // mark the whole collection for deletion
        this.InternalClear();
        this.collectionIsCleared = true;
    };
    /**
     * @internal Clears the change log.
     *
     */
    GroupMemberCollection.prototype.ClearChangeLog = function () {
        _super.prototype.ClearChangeLog.call(this);
        this.collectionIsCleared = false;
    };
    /**
     * @internal Creates a GroupMember object from an XML element name.
     *
     * @param   {string}        xmlElementName   The XML element name from which to create the e-mail address.
     * @return  {GroupMember}   An GroupMember object.
     */
    GroupMemberCollection.prototype.CreateComplexProperty = function (xmlElementName) {
        return new GroupMember_1.GroupMember();
    };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {GroupMember}      An GroupMember object.
     */
    GroupMemberCollection.prototype.CreateDefaultComplexProperty = function () {
        return new GroupMember_1.GroupMember();
    };
    /**
     * Finds the member with the specified key in the collection.
     * Members that have not yet been saved do not have a key.
     *
     * @param   {}   key   The key of the member to find.
     * @return  {}         The member with the specified key.
     */
    GroupMemberCollection.prototype.Find = function (key) {
        EwsUtilities_1.EwsUtilities.ValidateParam(key, "key");
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.Key == key) {
                return item;
            }
        }
        return null;
    };
    /**
     * @internal Retrieves the XML element name corresponding to the provided GroupMember object.
     *
     * @param   {GroupMember}   member   The GroupMember object from which to determine the XML element name.
     * @return  {string}            The XML element name corresponding to the provided GroupMember object.
     */
    GroupMemberCollection.prototype.GetCollectionItemXmlElementName = function (member) {
        return XmlElementNames_1.XmlElementNames.Member;
    };
    /**
     * @internal Validates this instance.
     */
    GroupMemberCollection.prototype.InternalValidate = function () {
        _super.prototype.InternalValidate.call(this);
        for (var _i = 0, _a = this.ModifiedItems; _i < _a.length; _i++) {
            var groupMember = _a[_i];
            if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(groupMember.Key)) {
                throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.ContactGroupMemberCannotBeUpdatedWithoutBeingLoadedFirst);
            }
        }
    };
    /**
     * Removes a member from the collection.
     *
     * @param   {GroupMember}   member   The member to remove.
     * @return  {boolean}       True if the group member was successfully removed from the collection, false otherwise.
     */
    GroupMemberCollection.prototype.Remove = function (member) {
        return this.InternalRemove(member);
    };
    /**
     * Removes a member at the specified index.
     *
     * @param   {number}   index   The index of the member to remove.
     */
    GroupMemberCollection.prototype.RemoveAt = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index", Strings_1.Strings.IndexIsOutOfRange);
        }
        this.InternalRemoveAt(index);
    };
    /**
     * Delete the whole members collection.
     *
     * @param   {EwsServiceXmlWriter}   writer   Xml writer.
     */
    GroupMemberCollection.prototype.WriteDeleteMembersCollectionToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DeleteItemField);
        ContactGroupSchema_1.ContactGroupSchema.Members.WriteToXml(writer);
        writer.WriteEndElement();
    };
    /**
     * Generate XML to delete individual members.
     *
     * @param   {EwsServiceXmlWriter}   writer    Xml writer.
     * @param   {GroupMember[]}         members   Members to delete.
     */
    GroupMemberCollection.prototype.WriteDeleteMembersToXml = function (writer, members /* List<GroupMember>*/) {
        if (members.length != 0) {
            var memberPropDef = new GroupMemberPropertyDefinition_1.GroupMemberPropertyDefinition();
            for (var _i = 0, members_2 = members; _i < members_2.length; _i++) {
                var member = members_2[_i];
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DeleteItemField);
                memberPropDef.Key = member.Key;
                memberPropDef.WriteToXml(writer);
                writer.WriteEndElement(); // DeleteItemField
            }
        }
    };
    /**
     * Generate XML to Set or Append members. When members are set, the existing PDL member collection is cleared On append members are added to the PDL existing members collection.
     *
     * @param   {EwsServiceXmlWriter}   writer    Xml writer.
     * @param   {GroupMember[]}         members   Members to set or append.
     * @param   {boolean}               setMode   True - set members, false - append members.
     */
    GroupMemberCollection.prototype.WriteSetOrAppendMembersToXml = function (writer, members /*List<GroupMember>*/, setMode) {
        if (members.length != 0) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, setMode ? XmlElementNames_1.XmlElementNames.SetItemField : XmlElementNames_1.XmlElementNames.AppendToItemField);
            ContactGroupSchema_1.ContactGroupSchema.Members.WriteToXml(writer);
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DistributionList);
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Members);
            for (var _i = 0, members_3 = members; _i < members_3.length; _i++) {
                var member = members_3[_i];
                member.WriteToXml(writer, XmlElementNames_1.XmlElementNames.Member);
            }
            writer.WriteEndElement(); // Members
            writer.WriteEndElement(); // Group
            writer.WriteEndElement(); // setMode ? SetItemField : AppendItemField
        }
    };
    //#region ICustomUpdateSerializer
    /**
     * @internal Writes the deletion update to XML.
     * ICustomUpdateSerializer.WriteDeleteUpdateToXml
     *
     * @param   {EwsServiceXmlWriter}   writer      The writer.
     * @param   {ServiceObject}         ewsObject   The ews object.
     * @return  {boolean}               True if property generated serialization.
     */
    GroupMemberCollection.prototype.WriteDeleteUpdateToXml = function (writer, ewsObject) {
        return false;
    };
    /**
     * @internal Writes the update to XML.
     * ICustomUpdateSerializer.WriteSetUpdateToXml
     *
     * @param   {EwsServiceXmlWriter}   writer               The writer.
     * @param   {ServiceObject}         ewsObject            The ews object.
     * @param   {PropertyDefinition}    propertyDefinition   Property definition.
     * @return  {boolean}               True if property generated serialization.
     */
    GroupMemberCollection.prototype.WriteSetUpdateToXml = function (writer, ewsObject, propertyDefinition) {
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
    };
    return GroupMemberCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.GroupMemberCollection = GroupMemberCollection;
