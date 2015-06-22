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

//module EmailMessageSchema {
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
//}
export class EmailMessageSchema extends ItemSchema {
    static ToRecipients: PropertyDefinition = new ComplexPropertyDefinition<EmailAddressCollection>(
        "ToRecipients",
        XmlElementNames.ToRecipients,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ToRecipients,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        () => { return new EmailAddressCollection(); }
        );

    static BccRecipients: PropertyDefinition = new ComplexPropertyDefinition<EmailAddressCollection>(
        "BccRecipients",
        XmlElementNames.BccRecipients,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.BccRecipients,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        () => { return new EmailAddressCollection(); }
        );

    static CcRecipients: PropertyDefinition = new ComplexPropertyDefinition<EmailAddressCollection>(
        "CcRecipients",
        XmlElementNames.CcRecipients,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.CcRecipients,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        () => { return new EmailAddressCollection(); }
        );

    static ConversationIndex: PropertyDefinition = new ByteArrayPropertyDefinition(
        "ConversationIndex",
        XmlElementNames.ConversationIndex,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ConversationIndex,
        PropertyDefinitionFlags.CanFind
        );

    static ConversationTopic: PropertyDefinition = new StringPropertyDefinition(
        "ConversationTopic",
        XmlElementNames.ConversationTopic,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ConversationTopic,
        PropertyDefinitionFlags.CanFind
        );

    static From: PropertyDefinition = new ContainedPropertyDefinition<EmailAddress>(
        "From",
        XmlElementNames.From,
        XmlElementNames.Mailbox,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.From,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        () => { return new EmailAddress(); }
        );

    static IsDeliveryReceiptRequested: PropertyDefinition = new BoolPropertyDefinition(
        "IsDeliveryReceiptRequested",
        XmlElementNames.IsDeliveryReceiptRequested,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsDeliveryReceiptRequested,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    static IsRead: PropertyDefinition = new BoolPropertyDefinition(
        "IsRead",
        XmlElementNames.IsRead,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsRead,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    static IsReadReceiptRequested: PropertyDefinition = new BoolPropertyDefinition(
        "IsReadReceiptRequested",
        XmlElementNames.IsReadReceiptRequested,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsReadReceiptRequested,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    static IsResponseRequested: PropertyDefinition = new BoolPropertyDefinition(
        "IsResponseRequested",
        XmlElementNames.IsResponseRequested,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsResponseRequested,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        true
        );

    static InternetMessageId: PropertyDefinition = new StringPropertyDefinition(
        "InternetMessageId",
        XmlElementNames.InternetMessageId,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.InternetMessageId,
        PropertyDefinitionFlags.CanFind
        );

    static References: PropertyDefinition = new StringPropertyDefinition(
        "References",
        XmlElementNames.References,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.References,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    static ReplyTo: PropertyDefinition = new ComplexPropertyDefinition<EmailAddressCollection>(
        "ReplyTo",
        XmlElementNames.ReplyTo,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ReplyTo,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        () => { return new EmailAddressCollection(); }
        );

    static Sender: PropertyDefinition = new ContainedPropertyDefinition<EmailAddress>(
        "Sender",
        XmlElementNames.Sender,
        XmlElementNames.Mailbox,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Sender,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanFind,
        () => { return new EmailAddress(); }
        );

    static ReceivedBy: PropertyDefinition = new ContainedPropertyDefinition<EmailAddress>(
        "ReceivedBy",
        XmlElementNames.ReceivedBy,
        XmlElementNames.Mailbox,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ReceivedBy,
        PropertyDefinitionFlags.CanFind,
        () => { return new EmailAddress(); }
        );

    static ReceivedRepresenting: PropertyDefinition = new ContainedPropertyDefinition<EmailAddress>(
        "ReceivedRepresenting",
        XmlElementNames.ReceivedRepresenting,
        XmlElementNames.Mailbox,
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ReceivedRepresenting,
        PropertyDefinitionFlags.CanFind,
        () => { return new EmailAddress(); }
        );

    static ApprovalRequestData: PropertyDefinition = new ComplexPropertyDefinition<ApprovalRequestData>(
        "ApprovalRequestData",
        XmlElementNames.ApprovalRequestData,
        ExchangeVersion.Exchange2013,
        FieldUris.ApprovalRequestData,
        PropertyDefinitionFlags.None,
        () => { return new ApprovalRequestData(); }
        );

    static VotingInformation: PropertyDefinition = new ComplexPropertyDefinition<VotingInformation>(
        "VotingInformation",
        XmlElementNames.VotingInformation,
        ExchangeVersion.Exchange2013,
        FieldUris.VotingInformation,
        PropertyDefinitionFlags.None,
        () => { return new VotingInformation(); }
        );

    static Instance: EmailMessageSchema = new EmailMessageSchema();

    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(EmailMessageSchema.Sender);
        super.RegisterProperty(EmailMessageSchema.ToRecipients);
        super.RegisterProperty(EmailMessageSchema.CcRecipients);
        super.RegisterProperty(EmailMessageSchema.BccRecipients);
        super.RegisterProperty(EmailMessageSchema.IsReadReceiptRequested);
        super.RegisterProperty(EmailMessageSchema.IsDeliveryReceiptRequested);
        super.RegisterProperty(EmailMessageSchema.ConversationIndex);
        super.RegisterProperty(EmailMessageSchema.ConversationTopic);
        super.RegisterProperty(EmailMessageSchema.From);
        super.RegisterProperty(EmailMessageSchema.InternetMessageId);
        super.RegisterProperty(EmailMessageSchema.IsRead);
        super.RegisterProperty(EmailMessageSchema.IsResponseRequested);
        super.RegisterProperty(EmailMessageSchema.References);
        super.RegisterProperty(EmailMessageSchema.ReplyTo);
        super.RegisterProperty(EmailMessageSchema.ReceivedBy);
        super.RegisterProperty(EmailMessageSchema.ReceivedRepresenting);
        super.RegisterProperty(EmailMessageSchema.ApprovalRequestData);
        super.RegisterProperty(EmailMessageSchema.VotingInformation);
    }
}