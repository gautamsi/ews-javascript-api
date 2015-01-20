module Microsoft.Exchange.WebServices.Data {
    export class PropertyDefinitionBase {
        Version: ExchangeVersion;
        Type: any; //System.Type;
        //AddJsonProperties(jsonPropertyDefinition: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
        //GetJsonType(): string{ throw new Error("Not implemented.");}
        GetPrintableName(): string { throw new Error("abstract methos, must implement"); }
        GetXmlElementName(): string { throw new Error("abstract methos, must implement"); }
        ToString(): string { return this.GetPrintableName(); }
        //TryLoadFromJson(jsonObject: JsonObject): PropertyDefinitionBase{ throw new Error("Not implemented.");}
        static TryLoadFromXml(reader: EwsServiceXmlReader, outP: IOutParam<PropertyDefinitionBase> /* propertyDefinition: any*/): boolean {
            //var propertyDefinition = null;
            outP.value = null;
            switch (reader.LocalName) {
                case XmlElementNames.FieldURI:
                    debugger;//todo: implement serviceobjectschema method
                    outP.value /*propertyDefinition*/ = ServiceObjectSchema.FindPropertyDefinition(reader.ReadAttributeValue(XmlNamespace.NotSpecified, XmlAttributeNames.FieldURI));
                    reader.SkipCurrentElement();
                    return true;
                case XmlElementNames.IndexedFieldURI:
                    outP.value = new IndexedPropertyDefinition(
                        reader.ReadAttributeValue(XmlNamespace.NotSpecified, XmlAttributeNames.FieldURI),
                        reader.ReadAttributeValue(XmlNamespace.NotSpecified, XmlAttributeNames.FieldIndex));
                    reader.SkipCurrentElement();
                    return true;
                case XmlElementNames.ExtendedFieldURI:
                    outP.value = new ExtendedPropertyDefinition();
                    (<ExtendedPropertyDefinition>outP.value).LoadFromXml(reader);
                    return true;
                default:
                    return false;
            }
        }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): void { throw new Error("abstract methos, must implement"); }
        WriteToXml(writer: EwsServiceXmlWriter): void {
            writer.WriteStartElement(XmlNamespace.Types, this.GetXmlElementName());
            this.WriteAttributesToXml(writer);
            writer.WriteEndElement();
        }
    }

    export class ExtendedPropertyDefinition extends PropertyDefinitionBase {
        private static FieldFormat: string = "{0}: {1} ";
        private static PropertySetFieldName: string = "PropertySet";
        private static PropertySetIdFieldName: string = "PropertySetId";
        private static TagFieldName: string = "Tag";
        private static NameFieldName: string = "Name";
        private static IdFieldName: string = "Id";
        private static MapiTypeFieldName: string = "MapiType";
        get Id(): number { return this.id; }
        get MapiType(): MapiPropertyType { return this.mapiType; }
        get Name(): string { return this.name; }
        get PropertySet(): DefaultExtendedPropertySet { return this.propertySet; }
        get PropertySetId(): any { return this.propertySetId; } //System.Guid
        get Tag(): number { return this.tag; }
        get Version(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
        Type: any;// System.Type;
        private propertySet: DefaultExtendedPropertySet;
        private propertySetId: any;// System.Guid;
        private tag: number;
        private name: string;
        private id: number;
        private mapiType: MapiPropertyType;

        constructor(tag?: number,
            name?: string,
            mapiType?: MapiPropertyType,
            propertySet?: DefaultExtendedPropertySet) {
            super();
            this.tag = tag || 0;
            this.mapiType = mapiType || MapiPropertyType.String;
            this.propertySet = propertySet;
            this.name = name;
        }

        //AddJsonProperties(jsonPropertyDefinition: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        Equals(obj: any): boolean {
            var propertyDefinition = <ExtendedPropertyDefinition>obj;
            return ExtendedPropertyDefinition.IsEqualTo(propertyDefinition, this);
        }
        FormatField(name: string, fieldValue: string ): string {
            debugger;
            return (fieldValue != null)
                ? string.Format(ExtendedPropertyDefinition.FieldFormat, name, fieldValue)
                : "";
        } 
        GetHashCode(): number { throw new Error("Not implemented."); }
        //GetJsonType(): string { throw new Error("Not implemented."); }
        GetPrintableName(): string {
            debugger;
            var sb = "";
            sb += "{";
            sb += this.FormatField(ExtendedPropertyDefinition.NameFieldName, this.Name);
            sb += this.FormatField(ExtendedPropertyDefinition.MapiTypeFieldName, MapiPropertyType[this.MapiType]);
            sb += this.FormatField(ExtendedPropertyDefinition.IdFieldName, this.Id.toString());
            sb += this.FormatField(ExtendedPropertyDefinition.PropertySetFieldName, DefaultExtendedPropertySet[this.PropertySet]);
            //sb += FormatField < Guid?> (PropertySetIdFieldName, this.PropertySetId);
            sb += this.FormatField(ExtendedPropertyDefinition.PropertySetIdFieldName, this.PropertySetId.ToString ? this.PropertySetId.ToString() : this.PropertySetId);
            sb += this.FormatField(ExtendedPropertyDefinition.TagFieldName, this.Tag.toString());
            sb += "}";
            return sb;
        }
        GetXmlElementName(): string { return XmlElementNames.ExtendedFieldURI; }
        static IsEqualTo(extPropDef1: ExtendedPropertyDefinition, extPropDef2: ExtendedPropertyDefinition): boolean {
            return
            extPropDef1, extPropDef2 ||
            (extPropDef1 && extPropDef2 &&
            extPropDef1.Id == extPropDef2.Id &&
            extPropDef1.MapiType == extPropDef2.MapiType &&
            extPropDef1.Tag == extPropDef2.Tag &&
            extPropDef1.Name == extPropDef2.Name &&
            extPropDef1.PropertySet == extPropDef2.PropertySet &&
            extPropDef1.propertySetId == extPropDef2.propertySetId);
        }
        //LoadFromJson(jsonObject: JsonObject): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader): void {
            var attributeValue: string;

            attributeValue = reader.ReadAttributeValue(XmlNamespace.NotSpecified, XmlAttributeNames.DistinguishedPropertySetId);
            if (!string.IsNullOrEmpty(attributeValue)) {
                this.propertySet = DefaultExtendedPropertySet[attributeValue];
            }

            attributeValue = reader.ReadAttributeValue(XmlNamespace.NotSpecified, XmlAttributeNames.PropertySetId);
            if (!string.IsNullOrEmpty(attributeValue)) {
                this.propertySetId = attributeValue;// new Guid(attributeValue);
            }

            attributeValue = reader.ReadAttributeValue(XmlNamespace.NotSpecified, XmlAttributeNames.PropertyTag);
            if (!string.IsNullOrEmpty(attributeValue)) {
                this.tag = +(attributeValue);// Convert.ToUInt16(attributeValue, 16);
            }

            this.name = reader.ReadAttributeValue(XmlNamespace.NotSpecified, XmlAttributeNames.PropertyName);

            attributeValue = reader.ReadAttributeValue(XmlNamespace.NotSpecified, XmlAttributeNames.PropertyId);
            if (!string.IsNullOrEmpty(attributeValue)) {
                this.id = +(attributeValue);// int.Parse(attributeValue);
            }

            this.mapiType = MapiPropertyType[reader.ReadAttributeValue(XmlNamespace.NotSpecified, XmlAttributeNames.PropertyType)];
        }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
            if (this.propertySet) {
                writer.WriteAttributeValue("", XmlAttributeNames.DistinguishedPropertySetId, this.propertySet);
            }
            if (this.propertySetId) {
                writer.WriteAttributeValue("", XmlAttributeNames.PropertySetId, this.propertySetId.ToString());
            }
            if (this.tag) {
                writer.WriteAttributeValue("", XmlAttributeNames.PropertyTag, this.tag);
            }
            if (!string.IsNullOrEmpty(this.name)) {
                writer.WriteAttributeValue("", XmlAttributeNames.PropertyName, this.name);
            }
            if (this.id) {
                writer.WriteAttributeValue("", XmlAttributeNames.PropertyId, this.id);
            }

            writer.WriteAttributeValue("", XmlAttributeNames.PropertyType, this.mapiType);
        }
    }

    export class ServiceObjectPropertyDefinition extends PropertyDefinitionBase {
        get Version(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
        get Uri(): string { return this.uri; }
        private uri: string;
        constructor(uri: string) {
            super();
            EwsUtilities.Assert(
                !string.IsNullOrEmpty(uri),
                "ServiceObjectPropertyDefinition.ctor",
                "uri is null or empty");

            this.uri = uri;
        }
        //AddJsonProperties(jsonPropertyDefinition: JsonObject, service: ExchangeService): any { jsonPropertyDefinition.Add(XmlAttributeNames.FieldURI, this.Uri); }
        //GetJsonType(): string{ throw new Error("Not implemented.");}
        GetXmlElementName(): string { return XmlElementNames.FieldURI; }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
            writer.WriteAttributeValue("", XmlAttributeNames.FieldURI, this.Uri);
        }
    }

    export class GroupMemberPropertyDefinition extends ServiceObjectPropertyDefinition {
        private static FieldUri: string = "distributionlist:Members:Member";
        Key: string;
        Type: any;// System.Type;
        //private key: string;

        constructor(key: string) {
            super(GroupMemberPropertyDefinition.FieldUri);
            this.Key = key;
        }
        //AddJsonProperties(jsonPropertyDefinition: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        //GetJsonType(): string { throw new Error("Not implemented."); }

        GetPrintableName(): string { return string.Format("{0}:{1}", GroupMemberPropertyDefinition.FieldUri, this.Key); }
        GetXmlElementName(): string { return XmlElementNames.IndexedFieldURI; }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
            super.WriteAttributesToXml(writer);
            writer.WriteAttributeValue("", XmlAttributeNames.FieldIndex, this.Key);
        }
    }
    export class IndexedPropertyDefinition extends ServiceObjectPropertyDefinition {
        get Index(): string { return this.index; }
        get Type(): string { return typeof string; } //System.Type;
        private index: string;

        constructor(uri: string, index: string) {
            super(uri);
            this.index = index;
        }

        //AddJsonProperties(jsonPropertyDefinition: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        Equals(obj: any): boolean {
            var propertyDefinition = <IndexedPropertyDefinition>obj;
            return IndexedPropertyDefinition.IsEqualTo(propertyDefinition, this);
        }
        GetHashCode(): number { throw new Error("Not implemented."); }
        //GetJsonType(): string { throw new Error("Not implemented."); }
        GetPrintableName(): string { return string.Format("{0}:{1}", this.Uri, this.Index); }
        GetXmlElementName(): string { return XmlElementNames.IndexedFieldURI; }
        static IsEqualTo(idxPropDef1: IndexedPropertyDefinition, idxPropDef2: IndexedPropertyDefinition): boolean {
            return idxPropDef1 === idxPropDef2 ||
                (idxPropDef1.Uri == idxPropDef2.Uri &&
                idxPropDef1.Index == idxPropDef2.Index);
        }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
            super.WriteAttributesToXml(writer);
            writer.WriteAttributeValue("", XmlAttributeNames.FieldIndex, this.Index);
        }
    }
    export class PropertyDefinition extends ServiceObjectPropertyDefinition {
        get Version(): ExchangeVersion { return this.version; }
        get IsNullable(): boolean { return true; }
        get XmlElementName(): string { return this.xmlElementName; }
        get Name(): string { if (string.IsNullOrEmpty(this.name)) { debugger; } return this.name; }
        set Name(value: string) { this.name = value; }
        private xmlElementName: string;
        private flags: PropertyDefinitionFlags;
        private name: string;
        private version: ExchangeVersion;

        constructor(xmlElementName: string,
            version: ExchangeVersion,
            uri?: string,
            flags?: PropertyDefinitionFlags) {

            super(uri);
            this.flags = flags;
            this.xmlElementName = xmlElementName;
            this.version = version;
        }

        GetAssociatedInternalProperties(): PropertyDefinition[] /*System.Collections.Generic.List<PropertyDefinition>*/ {
            var properties: PropertyDefinition[] = [];

            this.RegisterAssociatedInternalProperties(properties);

            return properties;
        }
        GetPrintableName(): string { return this.Name; }
        //HasFlag(flag: PropertyDefinitionFlags): boolean { throw new Error("Not implemented."); }
        HasFlag(flag: PropertyDefinitionFlags, version?: ExchangeVersion): boolean {
            return (this.flags & flag) == flag;
        }
        //LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): void { throw new Error("abstract method, must implement"); }
        RegisterAssociatedInternalProperties(properties: PropertyDefinition[]/* System.Collections.Generic.List<PropertyDefinition>*/): any {
        }
        //WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void
        { throw new Error("abstract method, must implement."); }
    }

    export class ComplexPropertyDefinitionBase extends PropertyDefinition {
        CreatePropertyInstance(owner: ServiceObject): ComplexProperty { throw new Error("Not implemented."); }
        GetPropertyInstance(propertyBag: PropertyBag, complexProperty: any): boolean { throw new Error("Not implemented."); }
        InternalLoadCollectionFromJson(jsonCollection: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        InternalLoadFromJson(jsonObject: JsonObject, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        InternalLoadFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }
    export class DateTimePropertyDefinition extends PropertyDefinition {
        IsNullable: boolean;
        Type: System.Type;
        private isNullable: boolean;
        GetConvertedDateTime(service: ExchangeServiceBase, propertyBag: PropertyBag, isUpdateOperation: boolean, value: any): Date { throw new Error("Not implemented."); }
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        ScopeToTimeZone(service: ExchangeServiceBase, dateTime: Date, propertyBag: PropertyBag, isUpdateOperation: boolean): Date { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }
    export class EffectiveRightsPropertyDefinition extends PropertyDefinition {
        Type: System.Type;
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }
    export class MeetingTimeZonePropertyDefinition extends PropertyDefinition {
        Type: System.Type;
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }
    export class RecurrencePropertyDefinition extends PropertyDefinition {
        Type: System.Type;
        GetRecurrenceFromString(recurranceString: string): Recurrence { throw new Error("Not implemented."); }
        GetRecurrenceRange(recurrenceRangeString: string): RecurrenceRange { throw new Error("Not implemented."); }
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }
    export class ResponseObjectsPropertyDefinition extends PropertyDefinition {
        IsNullable: boolean;
        Type: System.Type;
        GetResponseAction(responseActionString: string): ResponseActions { throw new Error("Not implemented."); }
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }
    export class TimeZonePropertyDefinition extends PropertyDefinition {
        Type: System.Type;
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }
    export class TypedPropertyDefinition extends PropertyDefinition {
        IsNullable: boolean;
        private isNullable: boolean;
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        Parse(value: string): any { throw new Error("Not implemented."); }
        ToString(value: any): string { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }

    export class ScopedDateTimePropertyDefinition extends DateTimePropertyDefinition {
        private getPropertyDefinitionCallback: GetPropertyDefinitionCallback;
        GetTimeZoneProperty(version: ExchangeVersion): PropertyDefinition { throw new Error("Not implemented."); }
        ScopeToTimeZone(service: ExchangeServiceBase, dateTime: Date, propertyBag: PropertyBag, isUpdateOperation: boolean): Date { throw new Error("Not implemented."); }
    }

    export class StartTimeZonePropertyDefinition extends TimeZonePropertyDefinition {
        HasFlag(flag: PropertyDefinitionFlags, version: ExchangeVersion): boolean { throw new Error("Not implemented."); }
        RegisterAssociatedInternalProperties(properties: System.Collections.Generic.List<PropertyDefinition>): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class PermissionSetPropertyDefinition extends ComplexPropertyDefinitionBase {
        Type: System.Type;
        CreatePropertyInstance(owner: ServiceObject): ComplexProperty { throw new Error("Not implemented."); }
    }

    export class StringPropertyDefinition extends TypedPropertyDefinition {
        IsNullable: boolean;
        Type: System.Type;
        Parse(value: string): any { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }

    export class ByteArrayPropertyDefinition extends TypedPropertyDefinition {
        IsNullable: boolean;
        Type: System.Type;
        Parse(value: string): any { throw new Error("Not implemented."); }
        ToString(value: any): string { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }


    export class ComplexPropertyDefinition<TComplexProperty> extends ComplexPropertyDefinitionBase {
        Type: System.Type;
        private propertyCreationDelegate: CreateComplexPropertyDelegate<TComplexProperty>;
        CreatePropertyInstance(owner: ServiceObject): ComplexProperty { throw new Error("Not implemented."); }
    }

    export class ContainedPropertyDefinition<TComplexProperty> extends ComplexPropertyDefinition<TComplexProperty> {
        private containedXmlElementName: string;
        InternalLoadFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }

    export class AttachmentsPropertyDefinition extends ComplexPropertyDefinition<AttachmentCollection> {
        private static Exchange2010SP2PropertyDefinitionFlags: PropertyDefinitionFlags;
        HasFlag(flag: PropertyDefinitionFlags, version: ExchangeVersion): boolean { throw new Error("Not implemented."); }
    }


    export class GenericPropertyDefinition<TPropertyValue> extends TypedPropertyDefinition {
        Type: System.Type;
        Parse(value: string): any { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }


    export class ListValuePropertyDefinition<TPropertyValue> extends GenericPropertyDefinition<TPropertyValue> {
        Parse(value: string): any { throw new Error("Not implemented."); }
    }

    export class BoolPropertyDefinition extends GenericPropertyDefinition<boolean> {
        ToString(value: any): string { throw new Error("Not implemented."); }
    }
    export class DoublePropertyDefinition extends GenericPropertyDefinition<number> {
    }
    export class IntPropertyDefinition extends GenericPropertyDefinition<number> {
    export class TaskDelegationStatePropertyDefinition extends GenericPropertyDefinition<TaskDelegationState> {
        private static NoMatch: string = "NoMatch";
        private static OwnNew: string = "OwnNew";
        private static Owned: string = "Owned";
        private static Accepted: string = "Accepted";

        Parse(value: string): any { throw new Error("Not implemented."); }
        ToString(value: any): string { throw new Error("Not implemented."); }
    }
    export class TimeSpanPropertyDefinition extends GenericPropertyDefinition<System.TimeSpan> {
        Parse(value: string): any { throw new Error("Not implemented."); }
        ToString(value: any): string { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    }


}