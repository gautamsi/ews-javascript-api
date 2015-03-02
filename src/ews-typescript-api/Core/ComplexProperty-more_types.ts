module Microsoft.Exchange.WebServices.Data {
    export class EmailAddressDictionary extends DictionaryProperty<EmailAddressKey, EmailAddressEntry> {
        Item: EmailAddress;
        CreateEntryInstance(): EmailAddressEntry { throw new Error("Not implemented."); }
        GetFieldURI(): string { throw new Error("Not implemented."); }
        TryGetValue(key: EmailAddressKey, emailAddress: any): boolean { throw new Error("Not implemented."); }
    }
    export class ImAddressDictionary extends DictionaryProperty<ImAddressKey, ImAddressEntry> {
        Item: string;
        CreateEntryInstance(): ImAddressEntry { throw new Error("Not implemented."); }
        GetFieldURI(): string { throw new Error("Not implemented."); }
        TryGetValue(key: ImAddressKey, imAddress: any): boolean { throw new Error("Not implemented."); }
    }
    export class PhoneNumberDictionary extends DictionaryProperty<PhoneNumberKey, PhoneNumberEntry> {
        Item: string;
        CreateEntryInstance(): PhoneNumberEntry { throw new Error("Not implemented."); }
        GetFieldURI(): string { throw new Error("Not implemented."); }
        TryGetValue(key: PhoneNumberKey, phoneNumber: any): boolean { throw new Error("Not implemented."); }
    }
    export class PhysicalAddressDictionary extends DictionaryProperty<PhysicalAddressKey, PhysicalAddressEntry> {
        Item: PhysicalAddressEntry;
        CreateEntryInstance(): PhysicalAddressEntry { throw new Error("Not implemented."); }
        TryGetValue(key: PhysicalAddressKey, physicalAddress: any): boolean { throw new Error("Not implemented."); }
    }


    export class AddressEntity extends ExtractedEntity {
        Address: string;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class ContactEntity extends ExtractedEntity {
        PersonName: string;
        BusinessName: string;
        PhoneNumbers: ContactPhoneEntityCollection;
        Urls: StringList;
        EmailAddresses: StringList;
        Addresses: StringList;
        ContactString: string;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class EmailAddressEntity extends ExtractedEntity {
        EmailAddress: string;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class MeetingSuggestion extends ExtractedEntity {
        Attendees: EmailUserEntityCollection;
        Location: string;
        Subject: string;
        MeetingString: string;
        StartTime: Date;
        EndTime: Date;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class PhoneEntity extends ExtractedEntity {
        OriginalPhoneString: string;
        PhoneString: string;
        Type: string;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class TaskSuggestion extends ExtractedEntity {
        TaskString: string;
        Assignees: EmailUserEntityCollection;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class UrlEntity extends ExtractedEntity {
        Url: string;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }


    export class ConversationId extends ServiceId {
        GetJsonTypeName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ToString(): string { throw new Error("Not implemented."); }
    }


    export class AppointmentOccurrenceId extends ItemId {
        OccurrenceIndex: number;
        private occurrenceIndex: number;
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class RecurringAppointmentMasterId extends ItemId {
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }


    export class CreateRuleOperation extends RuleOperation {
        Rule: Rule;
        XmlElementName: string;
        private rule: Rule;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class DeleteRuleOperation extends RuleOperation {
        RuleId: string;
        XmlElementName: string;
        private ruleId: string;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class SetRuleOperation extends RuleOperation {
        Rule: Rule;
        XmlElementName: string;
        private rule: Rule;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class EndDateRecurrenceRange extends RecurrenceRange {
        XmlElementName: string;
        EndDate: Date;
        private endDate: Date;
        AddPropertiesToJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        SetupRecurrence(recurrence: Recurrence): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class NoEndRecurrenceRange extends RecurrenceRange {
        XmlElementName: string;
        SetupRecurrence(recurrence: Recurrence): any { throw new Error("Not implemented."); }
    }
    export class NumberedRecurrenceRange extends RecurrenceRange {
        XmlElementName: string;
        NumberOfOccurrences: number;
        private numberOfOccurrences: number;
        AddPropertiesToJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        SetupRecurrence(recurrence: Recurrence): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }


    export class TextBody extends MessageBody {
    }


    export class FileAttachment extends Attachment {
        FileName: string;
        ContentStream: System.IO.Stream;
        Content: System.Byte[];
        IsContactPhoto: boolean;
        private fileName: string;
        private contentStream: System.IO.Stream;
        private content: System.Byte[];
        private loadToStream: System.IO.Stream;
        private isContactPhoto: boolean;
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        Load(stream: System.IO.Stream): any { throw new Error("Not implemented."); }
        Load(fileName: string): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        TryReadElementFromXmlToPatch(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        Validate(attachmentIndex: number): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class ItemAttachment extends Attachment {
        Item: Item;
        private item: Item;
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        ItemChanged(serviceObject: ServiceObject): any { throw new Error("Not implemented."); }
        Load(additionalProperties: any): any { throw new Error("Not implemented."); }
        Load(additionalProperties: System.Collections.Generic.IEnumerable<T>): any { throw new Error("Not implemented."); }
        Load(bodyType: BodyType, additionalProperties: any): any { throw new Error("Not implemented."); }
        Load(bodyType: BodyType, additionalProperties: System.Collections.Generic.IEnumerable<T>): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        TryReadElementFromXmlToPatch(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        Validate(attachmentIndex: number): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class ItemAttachment<TItem> extends ItemAttachment {
        Item: TItem;
    }

    export class EmailAddressEntry extends DictionaryEntryProperty<EmailAddressKey> {
        EmailAddress: EmailAddress;
        private emailAddress: EmailAddress;
        EmailAddressChanged(complexProperty: ComplexProperty): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class ImAddressEntry extends DictionaryEntryProperty<ImAddressKey> {
        ImAddress: string;
        private imAddress: string;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class PhoneNumberEntry extends DictionaryEntryProperty<PhoneNumberKey> {
        PhoneNumber: string;
        private phoneNumber: string;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadTextValueFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class PhysicalAddressEntry extends DictionaryEntryProperty<PhysicalAddressKey> {
        Street: string;
        City: string;
        State: string;
        CountryOrRegion: string;
        PostalCode: string;
        private propertyBag: SimplePropertyBag<TKey>;
        ClearChangeLog(): any { throw new Error("Not implemented."); }
        GetFieldUri(xmlElementName: string): string { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalWriteDeleteFieldToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, fieldXmlElementName: string): any { throw new Error("Not implemented."); }
        InternalWriteDeleteUpdateToJson(ewsObject: ServiceObject, propertyName: string, updates: System.Collections.Generic.List<T>): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        PropertyBagChanged(): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteDeleteUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, updates: System.Collections.Generic.List<T>): boolean { throw new Error("Not implemented."); }
        WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteSetUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition, updates: System.Collections.Generic.List<T>): boolean { throw new Error("Not implemented."); }
        WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, ownerDictionaryXmlElementName: string): boolean { throw new Error("Not implemented."); }
    }


    export class Attendee extends EmailAddress {
        ResponseType: MeetingResponseType;
        LastResponseTime: Date;
        private responseType: MeetingResponseType;
        private lastResponseTime: Date;
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }


    export class ArchiveTag extends RetentionTagBase {
    }
    export class PolicyTag extends RetentionTagBase {
    }


    export class AbsoluteDateTransition extends TimeZoneTransition {
        DateTime: Date;
        private dateTime: Date;
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InitializeFromTransitionTime(transitionTime: any): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class AbsoluteMonthTransition extends TimeZoneTransition {
        TimeOffset: System.TimeSpan;
        Month: number;
        private timeOffset: System.TimeSpan;
        private month: number;
        InitializeFromTransitionTime(transitionTime: any): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }


    export class AbsoluteDayOfMonthTransition extends AbsoluteMonthTransition {
        DayOfMonth: number;
        private dayOfMonth: number;
        CreateTransitionTime(): any { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InitializeFromTransitionTime(transitionTime: any): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }




}

