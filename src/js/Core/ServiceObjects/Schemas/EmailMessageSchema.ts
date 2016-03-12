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
    public ToRecipients: PropertyDefinition;

    /**
     * Defines the **BccRecipients** property.
     */
    public BccRecipients: PropertyDefinition;

    /**
     * Defines the **CcRecipients** property.
     */
    public CcRecipients: PropertyDefinition;

    /**
     * Defines the **ConversationIndex** property.
     */
    public ConversationIndex: PropertyDefinition;

    /**
     * Defines the **ConversationTopic** property.
     */
    public ConversationTopic: PropertyDefinition;

    /**
     * Defines the **From** property.
     */
    public From: PropertyDefinition;

    /**
     * Defines the **IsDeliveryReceiptRequested** property.
     */
    public IsDeliveryReceiptRequested: PropertyDefinition;

    /**
     * Defines the **IsRead** property.
     */
    public IsRead: PropertyDefinition;

    /**
     * Defines the **IsReadReceiptRequested** property.
     */
    public IsReadReceiptRequested: PropertyDefinition;

    /**
     * Defines the **IsResponseRequested** property.
     */
    public IsResponseRequested: PropertyDefinition;

    /**
     * Defines the **InternetMessageId** property.
     */
    public InternetMessageId: PropertyDefinition;

    /**
     * Defines the **References** property.
     */
    public References: PropertyDefinition;

    /**
     * Defines the **ReplyTo** property.
     */
    public ReplyTo: PropertyDefinition;

    /**
     * Defines the **Sender** property.
     */
    public Sender: PropertyDefinition;

    /**
     * Defines the **ReceivedBy** property.
     */
    public ReceivedBy: PropertyDefinition;

    /**
     * Defines the **ReceivedRepresenting** property.
     */
    public ReceivedRepresenting: PropertyDefinition;

    /**
     * Defines the **ApprovalRequestData** property.
     */
    public ApprovalRequestData: PropertyDefinition;

    /**
     * Defines the **VotingInformation** property.
     */
    public VotingInformation: PropertyDefinition;

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
        super.RegisterProperty(this.Sender);
        super.RegisterProperty(this.ToRecipients);
        super.RegisterProperty(this.CcRecipients);
        super.RegisterProperty(this.BccRecipients);
        super.RegisterProperty(this.IsReadReceiptRequested);
        super.RegisterProperty(this.IsDeliveryReceiptRequested);
        super.RegisterProperty(this.ConversationIndex);
        super.RegisterProperty(this.ConversationTopic);
        super.RegisterProperty(this.From);
        super.RegisterProperty(this.InternetMessageId);
        super.RegisterProperty(this.IsRead);
        super.RegisterProperty(this.IsResponseRequested);
        super.RegisterProperty(this.References);
        super.RegisterProperty(this.ReplyTo);
        super.RegisterProperty(this.ReceivedBy);
        super.RegisterProperty(this.ReceivedRepresenting);
        super.RegisterProperty(this.ApprovalRequestData);
        super.RegisterProperty(this.VotingInformation);
    }

    protected init() {
        super.init();
        this.ToRecipients = new ComplexPropertyDefinition<EmailAddressCollection>(
            "ToRecipients",
            XmlElementNames.ToRecipients,
            FieldUris.ToRecipients,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new EmailAddressCollection(); }
        );

        this.BccRecipients = new ComplexPropertyDefinition<EmailAddressCollection>(
            "BccRecipients",
            XmlElementNames.BccRecipients,
            FieldUris.BccRecipients,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new EmailAddressCollection(); }
        );

        this.CcRecipients = new ComplexPropertyDefinition<EmailAddressCollection>(
            "CcRecipients",
            XmlElementNames.CcRecipients,
            FieldUris.CcRecipients,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new EmailAddressCollection(); }
        );

        this.ConversationIndex = new ByteArrayPropertyDefinition(
            "ConversationIndex",
            XmlElementNames.ConversationIndex,
            FieldUris.ConversationIndex,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.ConversationTopic = new StringPropertyDefinition(
            "ConversationTopic",
            XmlElementNames.ConversationTopic,
            FieldUris.ConversationTopic,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.From = new ContainedPropertyDefinition<EmailAddress>(
            "From",
            XmlElementNames.From,
            XmlElementNames.Mailbox,
            FieldUris.From,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new EmailAddress(); }
        );

        this.IsDeliveryReceiptRequested = new BoolPropertyDefinition(
            "IsDeliveryReceiptRequested",
            XmlElementNames.IsDeliveryReceiptRequested,
            FieldUris.IsDeliveryReceiptRequested,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IsRead = new BoolPropertyDefinition(
            "IsRead",
            XmlElementNames.IsRead,
            FieldUris.IsRead,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IsReadReceiptRequested = new BoolPropertyDefinition(
            "IsReadReceiptRequested",
            XmlElementNames.IsReadReceiptRequested,
            FieldUris.IsReadReceiptRequested,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IsResponseRequested = new BoolPropertyDefinition(
            "IsResponseRequested",
            XmlElementNames.IsResponseRequested,
            FieldUris.IsResponseRequested,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            true
        );

        this.InternetMessageId = new StringPropertyDefinition(
            "InternetMessageId",
            XmlElementNames.InternetMessageId,
            FieldUris.InternetMessageId,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.References = new StringPropertyDefinition(
            "References",
            XmlElementNames.References,
            FieldUris.References,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.ReplyTo = new ComplexPropertyDefinition<EmailAddressCollection>(
            "ReplyTo",
            XmlElementNames.ReplyTo,
            FieldUris.ReplyTo,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new EmailAddressCollection(); }
        );

        this.Sender = new ContainedPropertyDefinition<EmailAddress>(
            "Sender",
            XmlElementNames.Sender,
            XmlElementNames.Mailbox,
            FieldUris.Sender,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new EmailAddress(); }
        );

        this.ReceivedBy = new ContainedPropertyDefinition<EmailAddress>(
            "ReceivedBy",
            XmlElementNames.ReceivedBy,
            XmlElementNames.Mailbox,
            FieldUris.ReceivedBy,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new EmailAddress(); }
        );

        this.ReceivedRepresenting = new ContainedPropertyDefinition<EmailAddress>(
            "ReceivedRepresenting",
            XmlElementNames.ReceivedRepresenting,
            XmlElementNames.Mailbox,
            FieldUris.ReceivedRepresenting,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new EmailAddress(); }
        );

        this.ApprovalRequestData = new ComplexPropertyDefinition<ApprovalRequestData>(
            "ApprovalRequestData",
            XmlElementNames.ApprovalRequestData,
            FieldUris.ApprovalRequestData,
            PropertyDefinitionFlags.None,
            ExchangeVersion.Exchange2013,
            () => { return new ApprovalRequestData(); }
        );

        this.VotingInformation = new ComplexPropertyDefinition<VotingInformation>(
            "VotingInformation",
            XmlElementNames.VotingInformation,
            FieldUris.VotingInformation,
            PropertyDefinitionFlags.None,
            ExchangeVersion.Exchange2013,
            () => { return new VotingInformation(); }
        );
    }
}