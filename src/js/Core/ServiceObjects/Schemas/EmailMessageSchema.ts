import {XmlElementNames} from "../../XmlElementNames";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {EmailAddressCollection} from "../../../ComplexProperties/EmailAddressCollection";
import {ByteArrayPropertyDefinition} from "../../../PropertyDefinitions/ByteArrayPropertyDefinition";
import {StringPropertyDefinition} from "../../../PropertyDefinitions/StringPropertyDefinition";
import {ContainedPropertyDefinition} from "../../../PropertyDefinitions/ContainedPropertyDefinition";
import {EmailAddress} from "../../../ComplexProperties/EmailAddress";
import {BoolPropertyDefinition} from "../../../PropertyDefinitions/BoolPropertyDefinition";
import {ApprovalRequestData} from "../../../ComplexProperties/ApprovalRequestData";
import {VotingInformation} from "../../../ComplexProperties/VotingInformation";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";

import {ItemSchema} from "./ItemSchema";

/**
 * Field URIs for EmailMessage.
 */
module FieldUris {
    export var ConversationIndex: string = "message:ConversationIndex";
    export var ConversationTopic: string = "message:ConversationTopic";
    export var InternetMessageId: string = "message:InternetMessageId";
    export var IsRead: string = "message:IsRead";
    export var IsResponseRequested: string = "message:IsResponseRequested";
    export var IsReadReceiptRequested: string = "message:IsReadReceiptRequested";
    export var IsDeliveryReceiptRequested: string = "message:IsDeliveryReceiptRequested";
    export var References: string = "message:References";
    export var ReplyTo: string = "message:ReplyTo";
    export var From: string = "message:From";
    export var Sender: string = "message:Sender";
    export var ToRecipients: string = "message:ToRecipients";
    export var CcRecipients: string = "message:CcRecipients";
    export var BccRecipients: string = "message:BccRecipients";
    export var ReceivedBy: string = "message:ReceivedBy";
    export var ReceivedRepresenting: string = "message:ReceivedRepresenting";
    export var ApprovalRequestData: string = "message:ApprovalRequestData";
    export var VotingInformation: string = "message:VotingInformation";
}

/**
 * Represents the schema for e-mail messages.
 */
export class EmailMessageSchema extends ItemSchema {

    /**
     * Defines the **ToRecipients** property.
     */
    public static ToRecipients: PropertyDefinition = new ComplexPropertyDefinition<EmailAddressCollection>(
        "ToRecipients",
        XmlElementNames.ToRecipients,
        FieldUris.ToRecipients,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new EmailAddressCollection(); }
    );

    /**
     * Defines the **BccRecipients** property.
     */
    public static BccRecipients: PropertyDefinition = new ComplexPropertyDefinition<EmailAddressCollection>(
        "BccRecipients",
        XmlElementNames.BccRecipients,
        FieldUris.BccRecipients,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new EmailAddressCollection(); }
    );

    /**
     * Defines the **CcRecipients** property.
     */
    public static CcRecipients: PropertyDefinition = new ComplexPropertyDefinition<EmailAddressCollection>(
        "CcRecipients",
        XmlElementNames.CcRecipients,
        FieldUris.CcRecipients,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new EmailAddressCollection(); }
    );

    /**
     * Defines the **ConversationIndex** property.
     */
    public static ConversationIndex: PropertyDefinition = new ByteArrayPropertyDefinition(
        "ConversationIndex",
        XmlElementNames.ConversationIndex,
        FieldUris.ConversationIndex,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **ConversationTopic** property.
     */
    public static ConversationTopic: PropertyDefinition = new StringPropertyDefinition(
        "ConversationTopic",
        XmlElementNames.ConversationTopic,
        FieldUris.ConversationTopic,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **From** property.
     */
    public static From: PropertyDefinition = new ContainedPropertyDefinition<EmailAddress>(
        "From",
        XmlElementNames.From,
        FieldUris.From,
        XmlElementNames.Mailbox,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new EmailAddress(); }
    );

    /**
     * Defines the **IsDeliveryReceiptRequested** property.
     */
    public static IsDeliveryReceiptRequested: PropertyDefinition = new BoolPropertyDefinition(
        "IsDeliveryReceiptRequested",
        XmlElementNames.IsDeliveryReceiptRequested,
        FieldUris.IsDeliveryReceiptRequested,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IsRead** property.
     */
    public static IsRead: PropertyDefinition = new BoolPropertyDefinition(
        "IsRead",
        XmlElementNames.IsRead,
        FieldUris.IsRead,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IsReadReceiptRequested** property.
     */
    public static IsReadReceiptRequested: PropertyDefinition = new BoolPropertyDefinition(
        "IsReadReceiptRequested",
        XmlElementNames.IsReadReceiptRequested,
        FieldUris.IsReadReceiptRequested,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IsResponseRequested** property.
     */
    public static IsResponseRequested: PropertyDefinition = new BoolPropertyDefinition(
        "IsResponseRequested",
        XmlElementNames.IsResponseRequested,
        FieldUris.IsResponseRequested,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        true
    );

    /**
     * Defines the **InternetMessageId** property.
     */
    public static InternetMessageId: PropertyDefinition = new StringPropertyDefinition(
        "InternetMessageId",
        XmlElementNames.InternetMessageId,
        FieldUris.InternetMessageId,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **References** property.
     */
    public static References: PropertyDefinition = new StringPropertyDefinition(
        "References",
        XmlElementNames.References,
        FieldUris.References,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **ReplyTo** property.
     */
    public static ReplyTo: PropertyDefinition = new ComplexPropertyDefinition<EmailAddressCollection>(
        "ReplyTo",
        XmlElementNames.ReplyTo,
        FieldUris.ReplyTo,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new EmailAddressCollection(); }
    );

    /**
     * Defines the **Sender** property.
     */
    public static Sender: PropertyDefinition = new ContainedPropertyDefinition<EmailAddress>(
        "Sender",
        XmlElementNames.Sender,
        FieldUris.Sender,
        XmlElementNames.Mailbox,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new EmailAddress(); }
    );

    /**
     * Defines the **ReceivedBy** property.
     */
    public static ReceivedBy: PropertyDefinition = new ContainedPropertyDefinition<EmailAddress>(
        "ReceivedBy",
        XmlElementNames.ReceivedBy,
        FieldUris.ReceivedBy,
        XmlElementNames.Mailbox,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new EmailAddress(); }
    );

    /**
     * Defines the **ReceivedRepresenting** property.
     */
    public static ReceivedRepresenting: PropertyDefinition = new ContainedPropertyDefinition<EmailAddress>(
        "ReceivedRepresenting",
        XmlElementNames.ReceivedRepresenting,
        FieldUris.ReceivedRepresenting,
        XmlElementNames.Mailbox,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new EmailAddress(); }
    );

    /**
     * Defines the **ApprovalRequestData** property.
     */
    public static ApprovalRequestData: PropertyDefinition = new ComplexPropertyDefinition<ApprovalRequestData>(
        "ApprovalRequestData",
        XmlElementNames.ApprovalRequestData,
        FieldUris.ApprovalRequestData,
        PropertyDefinitionFlags.None,
        ExchangeVersion.Exchange2013,
        () => { return new ApprovalRequestData(); }
    );

    /**
     * Defines the **VotingInformation** property.
     */
    public static VotingInformation: PropertyDefinition = new ComplexPropertyDefinition<VotingInformation>(
        "VotingInformation",
        XmlElementNames.VotingInformation,
        FieldUris.VotingInformation,
        PropertyDefinitionFlags.None,
        ExchangeVersion.Exchange2013,
        () => { return new VotingInformation(); }
    );

    /**
     * @internal Instance of **EmailMessageSchema** 
     */
    static Instance: EmailMessageSchema = new EmailMessageSchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
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
    }
}

/**
 * Represents the schema for e-mail messages.
 */
export interface EmailMessageSchema {
    /**
     * Defines the **ToRecipients** property.
     */
    ToRecipients: PropertyDefinition;
    /**
     * Defines the **BccRecipients** property.
     */
    BccRecipients: PropertyDefinition;
    /**
     * Defines the **CcRecipients** property.
     */
    CcRecipients: PropertyDefinition;
    /**
     * Defines the **ConversationIndex** property.
     */
    ConversationIndex: PropertyDefinition;
    /**
     * Defines the **ConversationTopic** property.
     */
    ConversationTopic: PropertyDefinition;
    /**
     * Defines the **From** property.
     */
    From: PropertyDefinition;
    /**
     * Defines the **IsDeliveryReceiptRequested** property.
     */
    IsDeliveryReceiptRequested: PropertyDefinition;
    /**
     * Defines the **IsRead** property.
     */
    IsRead: PropertyDefinition;
    /**
     * Defines the **IsReadReceiptRequested** property.
     */
    IsReadReceiptRequested: PropertyDefinition;
    /**
     * Defines the **IsResponseRequested** property.
     */
    IsResponseRequested: PropertyDefinition;
    /**
     * Defines the **InternetMessageId** property.
     */
    InternetMessageId: PropertyDefinition;
    /**
     * Defines the **References** property.
     */
    References: PropertyDefinition;
    /**
     * Defines the **ReplyTo** property.
     */
    ReplyTo: PropertyDefinition;
    /**
     * Defines the **Sender** property.
     */
    Sender: PropertyDefinition;
    /**
     * Defines the **ReceivedBy** property.
     */
    ReceivedBy: PropertyDefinition;
    /**
     * Defines the **ReceivedRepresenting** property.
     */
    ReceivedRepresenting: PropertyDefinition;
    /**
     * Defines the **ApprovalRequestData** property.
     */
    ApprovalRequestData: PropertyDefinition;
    /**
     * Defines the **VotingInformation** property.
     */
    VotingInformation: PropertyDefinition;
    /**
     * @internal Instance of **EmailMessageSchema**
     */
    Instance: EmailMessageSchema;
}

/**
 * Represents the schema for e-mail messages.
 */
export interface EmailMessageSchemaStatic extends EmailMessageSchema {
}