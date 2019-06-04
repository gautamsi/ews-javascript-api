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
var ApprovalRequestData_1 = require("../../../ComplexProperties/ApprovalRequestData");
var BoolPropertyDefinition_1 = require("../../../PropertyDefinitions/BoolPropertyDefinition");
var ByteArrayPropertyDefinition_1 = require("../../../PropertyDefinitions/ByteArrayPropertyDefinition");
var ComplexPropertyDefinition_1 = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
var ContainedPropertyDefinition_1 = require("../../../PropertyDefinitions/ContainedPropertyDefinition");
var EmailAddress_1 = require("../../../ComplexProperties/EmailAddress");
var EmailAddressCollection_1 = require("../../../ComplexProperties/EmailAddressCollection");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var PropertyDefinitionFlags_1 = require("../../../Enumerations/PropertyDefinitionFlags");
var StringPropertyDefinition_1 = require("../../../PropertyDefinitions/StringPropertyDefinition");
var VotingInformation_1 = require("../../../ComplexProperties/VotingInformation");
var XmlElementNames_1 = require("../../XmlElementNames");
var ItemSchema_1 = require("./ItemSchema");
/**
 * Field URIs for EmailMessage.
 */
var FieldUris;
(function (FieldUris) {
    FieldUris.ConversationIndex = "message:ConversationIndex";
    FieldUris.ConversationTopic = "message:ConversationTopic";
    FieldUris.InternetMessageId = "message:InternetMessageId";
    FieldUris.IsRead = "message:IsRead";
    FieldUris.IsResponseRequested = "message:IsResponseRequested";
    FieldUris.IsReadReceiptRequested = "message:IsReadReceiptRequested";
    FieldUris.IsDeliveryReceiptRequested = "message:IsDeliveryReceiptRequested";
    FieldUris.References = "message:References";
    FieldUris.ReplyTo = "message:ReplyTo";
    FieldUris.From = "message:From";
    FieldUris.Sender = "message:Sender";
    FieldUris.ToRecipients = "message:ToRecipients";
    FieldUris.CcRecipients = "message:CcRecipients";
    FieldUris.BccRecipients = "message:BccRecipients";
    FieldUris.ReceivedBy = "message:ReceivedBy";
    FieldUris.ReceivedRepresenting = "message:ReceivedRepresenting";
    FieldUris.ApprovalRequestData = "message:ApprovalRequestData";
    FieldUris.VotingInformation = "message:VotingInformation";
})(FieldUris || (FieldUris = {}));
/**
 * Represents the schema for e-mail messages.
 */
var EmailMessageSchema = /** @class */ (function (_super) {
    __extends(EmailMessageSchema, _super);
    function EmailMessageSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    EmailMessageSchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
        this.RegisterProperty(EmailMessageSchema, EmailMessageSchema.Sender);
        this.RegisterProperty(EmailMessageSchema, EmailMessageSchema.ToRecipients);
        this.RegisterProperty(EmailMessageSchema, EmailMessageSchema.CcRecipients);
        this.RegisterProperty(EmailMessageSchema, EmailMessageSchema.BccRecipients);
        this.RegisterProperty(EmailMessageSchema, EmailMessageSchema.IsReadReceiptRequested);
        this.RegisterProperty(EmailMessageSchema, EmailMessageSchema.IsDeliveryReceiptRequested);
        this.RegisterProperty(EmailMessageSchema, EmailMessageSchema.ConversationIndex);
        this.RegisterProperty(EmailMessageSchema, EmailMessageSchema.ConversationTopic);
        this.RegisterProperty(EmailMessageSchema, EmailMessageSchema.From);
        this.RegisterProperty(EmailMessageSchema, EmailMessageSchema.InternetMessageId);
        this.RegisterProperty(EmailMessageSchema, EmailMessageSchema.IsRead);
        this.RegisterProperty(EmailMessageSchema, EmailMessageSchema.IsResponseRequested);
        this.RegisterProperty(EmailMessageSchema, EmailMessageSchema.References);
        this.RegisterProperty(EmailMessageSchema, EmailMessageSchema.ReplyTo);
        this.RegisterProperty(EmailMessageSchema, EmailMessageSchema.ReceivedBy);
        this.RegisterProperty(EmailMessageSchema, EmailMessageSchema.ReceivedRepresenting);
        this.RegisterProperty(EmailMessageSchema, EmailMessageSchema.ApprovalRequestData);
        this.RegisterProperty(EmailMessageSchema, EmailMessageSchema.VotingInformation);
    };
    /**
     * Defines the **ToRecipients** property.
     */
    EmailMessageSchema.ToRecipients = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("ToRecipients", XmlElementNames_1.XmlElementNames.ToRecipients, FieldUris.ToRecipients, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new EmailAddressCollection_1.EmailAddressCollection(); });
    /**
     * Defines the **BccRecipients** property.
     */
    EmailMessageSchema.BccRecipients = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("BccRecipients", XmlElementNames_1.XmlElementNames.BccRecipients, FieldUris.BccRecipients, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new EmailAddressCollection_1.EmailAddressCollection(); });
    /**
     * Defines the **CcRecipients** property.
     */
    EmailMessageSchema.CcRecipients = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("CcRecipients", XmlElementNames_1.XmlElementNames.CcRecipients, FieldUris.CcRecipients, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new EmailAddressCollection_1.EmailAddressCollection(); });
    /**
     * Defines the **ConversationIndex** property.
     */
    EmailMessageSchema.ConversationIndex = new ByteArrayPropertyDefinition_1.ByteArrayPropertyDefinition("ConversationIndex", XmlElementNames_1.XmlElementNames.ConversationIndex, FieldUris.ConversationIndex, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **ConversationTopic** property.
     */
    EmailMessageSchema.ConversationTopic = new StringPropertyDefinition_1.StringPropertyDefinition("ConversationTopic", XmlElementNames_1.XmlElementNames.ConversationTopic, FieldUris.ConversationTopic, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **From** property.
     */
    EmailMessageSchema.From = new ContainedPropertyDefinition_1.ContainedPropertyDefinition("From", XmlElementNames_1.XmlElementNames.From, FieldUris.From, XmlElementNames_1.XmlElementNames.Mailbox, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new EmailAddress_1.EmailAddress(); });
    /**
     * Defines the **IsDeliveryReceiptRequested** property.
     */
    EmailMessageSchema.IsDeliveryReceiptRequested = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsDeliveryReceiptRequested", XmlElementNames_1.XmlElementNames.IsDeliveryReceiptRequested, FieldUris.IsDeliveryReceiptRequested, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **IsRead** property.
     */
    EmailMessageSchema.IsRead = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsRead", XmlElementNames_1.XmlElementNames.IsRead, FieldUris.IsRead, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **IsReadReceiptRequested** property.
     */
    EmailMessageSchema.IsReadReceiptRequested = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsReadReceiptRequested", XmlElementNames_1.XmlElementNames.IsReadReceiptRequested, FieldUris.IsReadReceiptRequested, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **IsResponseRequested** property.
     */
    EmailMessageSchema.IsResponseRequested = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsResponseRequested", XmlElementNames_1.XmlElementNames.IsResponseRequested, FieldUris.IsResponseRequested, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, true);
    /**
     * Defines the **InternetMessageId** property.
     */
    EmailMessageSchema.InternetMessageId = new StringPropertyDefinition_1.StringPropertyDefinition("InternetMessageId", XmlElementNames_1.XmlElementNames.InternetMessageId, FieldUris.InternetMessageId, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **References** property.
     */
    EmailMessageSchema.References = new StringPropertyDefinition_1.StringPropertyDefinition("References", XmlElementNames_1.XmlElementNames.References, FieldUris.References, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **ReplyTo** property.
     */
    EmailMessageSchema.ReplyTo = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("ReplyTo", XmlElementNames_1.XmlElementNames.ReplyTo, FieldUris.ReplyTo, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new EmailAddressCollection_1.EmailAddressCollection(); });
    /**
     * Defines the **Sender** property.
     */
    EmailMessageSchema.Sender = new ContainedPropertyDefinition_1.ContainedPropertyDefinition("Sender", XmlElementNames_1.XmlElementNames.Sender, FieldUris.Sender, XmlElementNames_1.XmlElementNames.Mailbox, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new EmailAddress_1.EmailAddress(); });
    /**
     * Defines the **ReceivedBy** property.
     */
    EmailMessageSchema.ReceivedBy = new ContainedPropertyDefinition_1.ContainedPropertyDefinition("ReceivedBy", XmlElementNames_1.XmlElementNames.ReceivedBy, FieldUris.ReceivedBy, XmlElementNames_1.XmlElementNames.Mailbox, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new EmailAddress_1.EmailAddress(); });
    /**
     * Defines the **ReceivedRepresenting** property.
     */
    EmailMessageSchema.ReceivedRepresenting = new ContainedPropertyDefinition_1.ContainedPropertyDefinition("ReceivedRepresenting", XmlElementNames_1.XmlElementNames.ReceivedRepresenting, FieldUris.ReceivedRepresenting, XmlElementNames_1.XmlElementNames.Mailbox, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new EmailAddress_1.EmailAddress(); });
    /**
     * Defines the **ApprovalRequestData** property.
     */
    EmailMessageSchema.ApprovalRequestData = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("ApprovalRequestData", XmlElementNames_1.XmlElementNames.ApprovalRequestData, FieldUris.ApprovalRequestData, PropertyDefinitionFlags_1.PropertyDefinitionFlags.None, ExchangeVersion_1.ExchangeVersion.Exchange2013, function () { return new ApprovalRequestData_1.ApprovalRequestData(); });
    /**
     * Defines the **VotingInformation** property.
     */
    EmailMessageSchema.VotingInformation = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("VotingInformation", XmlElementNames_1.XmlElementNames.VotingInformation, FieldUris.VotingInformation, PropertyDefinitionFlags_1.PropertyDefinitionFlags.None, ExchangeVersion_1.ExchangeVersion.Exchange2013, function () { return new VotingInformation_1.VotingInformation(); });
    /**
     * @internal Instance of **EmailMessageSchema**
     */
    EmailMessageSchema.Instance = new EmailMessageSchema();
    return EmailMessageSchema;
}(ItemSchema_1.ItemSchema));
exports.EmailMessageSchema = EmailMessageSchema;
