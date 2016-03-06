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

export class EmailMessageSchema extends ItemSchema {
    public ToRecipients: PropertyDefinition;
    public BccRecipients: PropertyDefinition;
    public CcRecipients: PropertyDefinition;
    public ConversationIndex: PropertyDefinition;
    public ConversationTopic: PropertyDefinition;
    public From: PropertyDefinition;
    public IsDeliveryReceiptRequested: PropertyDefinition;
    public IsRead: PropertyDefinition;
    public IsReadReceiptRequested: PropertyDefinition;
    public IsResponseRequested: PropertyDefinition;
    public InternetMessageId: PropertyDefinition;
    public References: PropertyDefinition;
    public ReplyTo: PropertyDefinition;
    public Sender: PropertyDefinition;
    public ReceivedBy: PropertyDefinition;
    public ReceivedRepresenting: PropertyDefinition;
    public ApprovalRequestData: PropertyDefinition;
    public VotingInformation: PropertyDefinition;

    static Instance: EmailMessageSchema = new EmailMessageSchema();

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
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ToRecipients,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
            () => { return new EmailAddressCollection(); }
        );

        this.BccRecipients = new ComplexPropertyDefinition<EmailAddressCollection>(
            "BccRecipients",
            XmlElementNames.BccRecipients,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.BccRecipients,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
            () => { return new EmailAddressCollection(); }
        );

        this.CcRecipients = new ComplexPropertyDefinition<EmailAddressCollection>(
            "CcRecipients",
            XmlElementNames.CcRecipients,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.CcRecipients,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
            () => { return new EmailAddressCollection(); }
        );

        this.ConversationIndex = new ByteArrayPropertyDefinition(
            "ConversationIndex",
            XmlElementNames.ConversationIndex,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ConversationIndex,
            PropertyDefinitionFlags.CanFind
        );

        this.ConversationTopic = new StringPropertyDefinition(
            "ConversationTopic",
            XmlElementNames.ConversationTopic,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ConversationTopic,
            PropertyDefinitionFlags.CanFind
        );

        this.From = new ContainedPropertyDefinition<EmailAddress>(
            "From",
            XmlElementNames.From,
            XmlElementNames.Mailbox,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.From,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            () => { return new EmailAddress(); }
        );

        this.IsDeliveryReceiptRequested = new BoolPropertyDefinition(
            "IsDeliveryReceiptRequested",
            XmlElementNames.IsDeliveryReceiptRequested,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.IsDeliveryReceiptRequested,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.IsRead = new BoolPropertyDefinition(
            "IsRead",
            XmlElementNames.IsRead,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.IsRead,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

        this.IsReadReceiptRequested = new BoolPropertyDefinition(
            "IsReadReceiptRequested",
            XmlElementNames.IsReadReceiptRequested,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.IsReadReceiptRequested,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.IsResponseRequested = new BoolPropertyDefinition(
            "IsResponseRequested",
            XmlElementNames.IsResponseRequested,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.IsResponseRequested,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            true
        );

        this.InternetMessageId = new StringPropertyDefinition(
            "InternetMessageId",
            XmlElementNames.InternetMessageId,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.InternetMessageId,
            PropertyDefinitionFlags.CanFind
        );

        this.References = new StringPropertyDefinition(
            "References",
            XmlElementNames.References,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.References,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.ReplyTo = new ComplexPropertyDefinition<EmailAddressCollection>(
            "ReplyTo",
            XmlElementNames.ReplyTo,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ReplyTo,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
            () => { return new EmailAddressCollection(); }
        );

        this.Sender = new ContainedPropertyDefinition<EmailAddress>(
            "Sender",
            XmlElementNames.Sender,
            XmlElementNames.Mailbox,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Sender,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanFind,
            () => { return new EmailAddress(); }
        );

        this.ReceivedBy = new ContainedPropertyDefinition<EmailAddress>(
            "ReceivedBy",
            XmlElementNames.ReceivedBy,
            XmlElementNames.Mailbox,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ReceivedBy,
            PropertyDefinitionFlags.CanFind,
            () => { return new EmailAddress(); }
        );

        this.ReceivedRepresenting = new ContainedPropertyDefinition<EmailAddress>(
            "ReceivedRepresenting",
            XmlElementNames.ReceivedRepresenting,
            XmlElementNames.Mailbox,
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ReceivedRepresenting,
            PropertyDefinitionFlags.CanFind,
            () => { return new EmailAddress(); }
        );

        this.ApprovalRequestData = new ComplexPropertyDefinition<ApprovalRequestData>(
            "ApprovalRequestData",
            XmlElementNames.ApprovalRequestData,
            ExchangeVersion.Exchange2013,
            FieldUris.ApprovalRequestData,
            PropertyDefinitionFlags.None,
            () => { return new ApprovalRequestData(); }
        );

        this.VotingInformation = new ComplexPropertyDefinition<VotingInformation>(
            "VotingInformation",
            XmlElementNames.VotingInformation,
            ExchangeVersion.Exchange2013,
            FieldUris.VotingInformation,
            PropertyDefinitionFlags.None,
            () => { return new VotingInformation(); }
        );
    }
}