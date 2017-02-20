import { ArrayHelper, StringHelper } from "../ExtensionMethods";
import { BasePropertySet } from "../Enumerations/BasePropertySet";
import { BodyType } from "../Enumerations/BodyType";
import { Dictionary } from "../AltDictionary";
import { EwsLogging } from "../Core/EwsLogging";
import { EwsServiceXmlWriter } from "./EwsServiceXmlWriter";
import { EwsUtilities } from "./EwsUtilities";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { IEnumerable } from "../Interfaces/IEnumerable";
import { ISelfValidate } from "../Interfaces/ISelfValidate";
import { LazyMember } from "./LazyMember";
import { PropertyDefinition } from "../PropertyDefinitions/PropertyDefinition";
import { PropertyDefinitionBase } from "../PropertyDefinitions/PropertyDefinitionBase";
import { PropertyDefinitionFlags } from "../Enumerations/PropertyDefinitionFlags";
import { ServiceObjectType } from "../Enumerations/ServiceObjectType";
import { ServiceRequestBase } from "./Requests/ServiceRequestBase";
import { ServiceValidationException } from "../Exceptions/ServiceValidationException";
import { ServiceVersionException } from "../Exceptions/ServiceVersionException";
import { Strings } from "../Strings";
import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

export type DefaultPropertySetDictionary = LazyMember<Dictionary<BasePropertySet, string>>;

/**
 * Represents a set of item or folder properties. Property sets are used to indicate what properties of an item or folder should be loaded when binding to an existing item or folder or when loading an item or folder's properties. 
 * 
 * @sealed
 */
export class PropertySet implements ISelfValidate, IEnumerable<PropertyDefinitionBase> {

    /**
     * Returns a predefined property set that only includes the Id property.
     */
    static readonly IdOnly: PropertySet = PropertySet.CreateReadonlyPropertySet(BasePropertySet.IdOnly);

    /**
     * Returns a predefined property set that includes the first class properties of an item or folder.
     */
    static readonly FirstClassProperties: PropertySet = PropertySet.CreateReadonlyPropertySet(BasePropertySet.FirstClassProperties);

    /**
     * Maps BasePropertySet values to EWS's BaseShape values.
     */
    private static defaultPropertySetMap: DefaultPropertySetDictionary = new LazyMember<Dictionary<BasePropertySet, string>>(() => {
        let result: Dictionary<BasePropertySet, string> = new Dictionary<BasePropertySet, string>((bps) => BasePropertySet[bps]);
        result.Add(BasePropertySet.IdOnly, "IdOnly");
        result.Add(BasePropertySet.FirstClassProperties, "AllProperties");
        return result;
    });

    /**
     * The base property set this property set is based upon.
     */
    private basePropertySet: BasePropertySet = BasePropertySet.IdOnly;

    /**
     * The list of additional properties included in this property set.
     */
    private additionalProperties: PropertyDefinitionBase[] = [];

    /**
     * The requested body type for get and find operations. If null, the "best body" is returned.
     */
    private requestedBodyType: BodyType = null; //nullable

    /**
     * The requested unique body type for get and find operations. If null, the should return the same value as body type.
     */
    private requestedUniqueBodyType: BodyType = null; //nullable

    /**
     * The requested normalized body type for get and find operations. If null, the should return the same value as body type.
     */
    private requestedNormalizedBodyType: BodyType = null; //nullable

    /**
     * Value indicating whether or not the server should filter HTML content.
     */
    private filterHtml: boolean = null; //nullable

    /**
     * Value indicating whether or not the server should convert HTML code page to UTF8.
     */
    private convertHtmlCodePageToUTF8: boolean = null; //nullable

    /**
     * Value of the URL template to use for the src attribute of inline IMG elements.
     */
    private inlineImageUrlTemplate: string = null;

    /**
     * Value indicating whether or not the server should block references to external images.
     */
    private blockExternalImages: boolean = null; //nullable

    /**
     * Value indicating whether or not to add a blank target attribute to anchor links.
     */
    private addTargetToLinks: boolean = null; //nullable

    /**
     * Value indicating whether or not this PropertySet can be modified.
     */
    private isReadOnly: boolean = false;

    /**
     * Value indicating the maximum body size to retrieve.
     */
    private maximumBodySize: number = null; //nullable

    /**
     * @internal Maps BasePropertySet values to EWS's BaseShape values.
     */
    static get DefaultPropertySetMap(): DefaultPropertySetDictionary {
        return this.defaultPropertySetMap;
    }

    /**
     * Gets or sets the base property set the property set is based upon.
     */
    get BasePropertySet(): BasePropertySet {
        return this.basePropertySet;
    }
    set BasePropertySet(value) {
        this.ThrowIfReadonly();
        this.basePropertySet = value;
    }

    /**
     * Gets or sets type of body that should be loaded on items. If RequestedBodyType is null, body is returned as HTML if available, plain text otherwise.
     * 
     * @Nullable
     */
    get RequestedBodyType(): BodyType {
        return this.requestedBodyType;
    }
    set RequestedBodyType(value) {
        this.ThrowIfReadonly();
        this.requestedBodyType = value;
    }

    /**
     * Gets or sets type of body that should be loaded on items. If null, the should return the same value as body type.
     * 
     * @nullable
     */
    get RequestedUniqueBodyType(): BodyType {
        return this.requestedUniqueBodyType;
    }
    set RequestedUniqueBodyType(value) {
        this.ThrowIfReadonly();
        this.requestedUniqueBodyType = value;
    }

    /**
     * Gets or sets type of normalized body that should be loaded on items. If null, the should return the same value as body type.
     * 
     * @nullable
     */
    get RequestedNormalizedBodyType(): BodyType {
        return this.requestedNormalizedBodyType;
    }
    set RequestedNormalizedBodyType(value) {
        this.ThrowIfReadonly();
        this.requestedNormalizedBodyType = value;
    }

    /**
     * Gets the number of explicitly added properties in this set.
     */
    get Count(): number {
        return this.additionalProperties.length;
    }

    /**
     * Gets or sets value indicating whether or not to filter potentially unsafe HTML content from message bodies.
     * 
     * @nullable
     */
    get FilterHtmlContent(): boolean {
        return this.filterHtml;
    }
    set FilterHtmlContent(value) {
        this.ThrowIfReadonly();
        this.filterHtml = value;
    }

    /**
     * Gets or sets value indicating whether or not to convert HTML code page to UTF8 encoding.
     * 
     * @nullable
     */
    get ConvertHtmlCodePageToUTF8(): boolean {
        return this.convertHtmlCodePageToUTF8;
    }
    set ConvertHtmlCodePageToUTF8(value) {
        this.ThrowIfReadonly();
        this.convertHtmlCodePageToUTF8 = value;
    }

    /**
     * Gets or sets a value of the URL template to use for the src attribute of inline IMG elements.
     * 
     * @nullable
     */
    get InlineImageUrlTemplate(): string {
        return this.inlineImageUrlTemplate;
    }
    set InlineImageUrlTemplate(value) {
        this.ThrowIfReadonly();
        this.inlineImageUrlTemplate = value;
    }

    /**
     * Gets or sets value indicating whether or not to convert inline images to data URLs.
     * 
     * @nullable
     */
    get BlockExternalImages(): boolean {
        return this.blockExternalImages;
    }
    set BlockExternalImages(value) {
        this.ThrowIfReadonly();
        this.blockExternalImages = value;
    }

    /**
     * Gets or sets value indicating whether or not to add blank target attribute to anchor links.
     * 
     * @nullable
     */
    get AddBlankTargetToLinks(): boolean {
        return this.addTargetToLinks;
    }
    set AddBlankTargetToLinks(value) {
        this.ThrowIfReadonly();
        this.addTargetToLinks = value;
    }

    /**
     * Gets or sets the maximum size of the body to be retrieved.
     * 
     * @nullable
     * 
     * @value   The maximum size of the body to be retrieved.
     */
    get MaximumBodySize(): number {
        return this.maximumBodySize;
    }
    set MaximumBodySize(value) {
        this.ThrowIfReadonly();
        this.maximumBodySize = value;
    }

    /**
     * Initializes a new instance of **PropertySet** based upon BasePropertySet.IdOnly.
     */
    constructor();
    /**
     * Initializes a new instance of **PropertySet** based upon BasePropertySet.IdOnly.
     *
     * @param   {BasePropertySet}   basePropertySet        The base property set to base the property set upon.
     */
    constructor(basePropertySet: BasePropertySet);

    /**
     * Initializes a new instance of **PropertySet** based upon BasePropertySet.IdOnly.
     *
     * @param   {PropertyDefinitionBase[]}  additionalProperties   Additional properties to include in the property set. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     */
    constructor(additionalProperties: PropertyDefinitionBase[]);
    /**
     * Initializes a new instance of **PropertySet**.
     *
     * @param   {PropertyDefinitionBase[]}  additionalProperties   Additional properties to include in the property set. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     */
    constructor(...additionalProperties: PropertyDefinitionBase[]);
    /**
     * Initializes a new instance of **PropertySet**.
     *
     * @param   {BasePropertySet}           basePropertySet        The base property set to base the property set upon.
     * @param   {PropertyDefinitionBase[]}  additionalProperties   Additional properties to include in the property set. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     */
    constructor(basePropertySet: BasePropertySet, additionalProperties: PropertyDefinitionBase[]);
    /**
     * Initializes a new instance of **PropertySet**.
     *
     * @param   {BasePropertySet}           basePropertySet        The base property set to base the property set upon.
     * @param   {PropertyDefinitionBase[]}  additionalProperties   Additional properties to include in the property set. Property definitions are available as static members from schema classes (for example, EmailMessageSchema.Subject, AppointmentSchema.Start, ContactSchema.GivenName, etc.)
     */
    constructor(basePropertySet: BasePropertySet, ...additionalProperties: PropertyDefinitionBase[]);
    constructor(basePropertySetOrAdditionalProperties: BasePropertySet | PropertyDefinitionBase | PropertyDefinitionBase[] = null, _additionalProperties: PropertyDefinitionBase | PropertyDefinitionBase[] = null) {

        let argsLength = arguments.length;
        let basePropertySet: BasePropertySet = BasePropertySet.IdOnly;
        let additionalProperties: PropertyDefinitionBase[] = [];

        if (argsLength >= 1) {
            if (typeof basePropertySetOrAdditionalProperties === 'number') {
                basePropertySet = basePropertySetOrAdditionalProperties;
            }
            else if (ArrayHelper.isArray(basePropertySetOrAdditionalProperties)) {
                additionalProperties = basePropertySetOrAdditionalProperties;
            }
            else {
                additionalProperties = [basePropertySetOrAdditionalProperties];
            }
        }

        if (argsLength >= 2) {
            if (ArrayHelper.isArray(_additionalProperties)) {
                additionalProperties = _additionalProperties;
            }
            else {
                additionalProperties.push(_additionalProperties);
            }
        }

        if (argsLength > 2) {
            for (var _i = 2; _i < arguments.length; _i++) {
                additionalProperties.push(arguments[_i]);
            }
        }

        this.basePropertySet = basePropertySet;
        if (additionalProperties.length > 0) {
            this.additionalProperties = additionalProperties;
            //ArrayHelper.AddRange(this.additionalProperties, <any>additionalProperties);
            //this.additionalProperties.push.apply(this.additionalProperties, additionalProperties); //todo: addrange for array - http://typescript.codeplex.com/workitem/1422
        }
    }

    /**
     * Gets the **PropertyDefinitionBase** at the specified index. this[int] indexer
     *
     * @param   {number}   index   Index.
     */
    _getItem(index: number): PropertyDefinitionBase {
        return this.additionalProperties[index];
    }

    /**
     * Adds the specified property to the property set.
     *
     * @param   {PropertyDefinitionBase}   property   The property to add.
     */
    Add(property: PropertyDefinitionBase): void {
        this.ThrowIfReadonly();
        EwsUtilities.ValidateParam(property, "property");

        if (this.additionalProperties.indexOf(property) === -1) {
            this.additionalProperties.push(property);
        }
    }

    /**
     * Adds the specified properties to the property set.
     *
     * @param   {PropertyDefinitionBase[]}   properties   The properties to add.
     */
    AddRange(properties: PropertyDefinitionBase[]): void {
        this.ThrowIfReadonly();
        EwsUtilities.ValidateParamCollection(properties, "properties");

        for (let property of properties) {
            this.Add(property);
        }
    }

    /**
     * Remove all explicitly added properties from the property set.
     */
    Clear(): void {
        this.ThrowIfReadonly();
        this.additionalProperties.splice(0);
    }

    /**
     * Determines whether the specified property has been explicitly added to this property set using the Add or AddRange methods.
     *
     * @param   {PropertyDefinitionBase}    property   The property.
     * @return  {boolean}                   true if this property set contains the specified propert]; otherwise, false.
     */
    Contains(property: PropertyDefinitionBase): boolean { return this.additionalProperties.indexOf(property) !== -1; }

    /**
     * Creates a read-only PropertySet.
     *
     * @param   {BasePropertySet}   basePropertySet   The base property set.
     * @return  {PropertySet}       PropertySet
     */
    private static CreateReadonlyPropertySet(basePropertySet: BasePropertySet): PropertySet {
        let propertySet: PropertySet = new PropertySet(basePropertySet);
        propertySet.isReadOnly = true;
        return propertySet;
    }

    /**
     *  Returns an enumerator that iterates through the collection. this case this.additionalProperties itself
     */
    GetEnumerator(): PropertyDefinitionBase[] {
        return this.additionalProperties;
    }

    /**
     * Gets the name of the shape.
     *
     * @param   {ServiceObjectType}     serviceObjectType   Type of the service object.
     * @return  {string}                Shape name.
     */
    private static GetShapeName(serviceObjectType: ServiceObjectType): string {
        switch (serviceObjectType) {
            case ServiceObjectType.Item:
                return XmlElementNames.ItemShape;
            case ServiceObjectType.Folder:
                return XmlElementNames.FolderShape;
            case ServiceObjectType.Conversation:
                return XmlElementNames.ConversationShape;
            default:
                EwsLogging.Assert(
                    false,
                    "PropertySet.GetShapeName",
                    StringHelper.Format("An unexpected object type {0} for property shape. This code path should never be reached.", serviceObjectType));
                return StringHelper.Empty;
        }
    }

    /**
     * @internal Validates this property set.
     */
    InternalValidate(): void {
        for (let i = 0; i < this.additionalProperties.length; i++) {
            if (this.additionalProperties[i] == null) {
                throw new ServiceValidationException(StringHelper.Format(Strings.AdditionalPropertyIsNull, i));
            }
        }
    }

    /**
     * Removes the specified property from the set.
     *
     * @param   {PropertyDefinitionBase}    property   The property to remove.
     * @return  {boolean}                   true if the property was successfully removed, false otherwise.
     */
    Remove(property: PropertyDefinitionBase): boolean {
        this.ThrowIfReadonly();
        return ArrayHelper.RemoveEntry(this.additionalProperties, property);
    }

    /**
     * Throws if readonly property set.
     */
    private ThrowIfReadonly(): void {
        if (this.isReadOnly) {
            throw new Error(" PropertySet can not be modified");// System.NotSupportedException(Strings.PropertySetCannotBeModified);
        }
    }

    /**
     * Implements ISelfValidate.Validate. Validates this property set.
     */
    Validate(): void {
        this.InternalValidate();
    }

    /**
     * @internal Validates this property set instance for request to ensure that:
     *  1. Properties are valid for the request server version.
     *  2. If only summary properties are legal for this request (e.g. FindItem) then only summary properties were specified.
     *
     * @param   {ServiceRequestBase}    request                 The request.
     * @param   {boolean}               summaryPropertiesOnly   if set to true then only summary properties are allowed.
     */
    ValidateForRequest(request: ServiceRequestBase, summaryPropertiesOnly: boolean): void {
        for (let propDefBase of this.additionalProperties) {
            //let propDefBase: PropertyDefinitionBase = propItem;
            let propertyDefinition = <PropertyDefinition>propDefBase;
            if (propertyDefinition instanceof PropertyDefinition/* != null*/) {
                if (propertyDefinition.Version > request.Service.RequestedServerVersion) {
                    throw new ServiceVersionException(
                        StringHelper.Format(
                            Strings.PropertyIncompatibleWithRequestVersion,
                            propertyDefinition.Name,
                            ExchangeVersion[propertyDefinition.Version]));
                }

                if (summaryPropertiesOnly && !propertyDefinition.HasFlag(PropertyDefinitionFlags.CanFind, request.Service.RequestedServerVersion)) {
                    throw new ServiceValidationException(
                        StringHelper.Format(
                            Strings.NonSummaryPropertyCannotBeUsed,
                            propertyDefinition.Name,
                            request.GetXmlElementName()));
                }
            }
        }

        if (this.FilterHtmlContent/*.HasValue*/) {
            if (request.Service.RequestedServerVersion < ExchangeVersion.Exchange2010) {
                throw new ServiceVersionException(
                    StringHelper.Format(
                        Strings.PropertyIncompatibleWithRequestVersion,
                        "FilterHtmlContent",
                        ExchangeVersion[ExchangeVersion.Exchange2010]));
            }
        }

        if (this.ConvertHtmlCodePageToUTF8/*.HasValue*/) {
            if (request.Service.RequestedServerVersion < ExchangeVersion.Exchange2010_SP1) {
                throw new ServiceVersionException(
                    StringHelper.Format(
                        Strings.PropertyIncompatibleWithRequestVersion,
                        "ConvertHtmlCodePageToUTF8",
                        ExchangeVersion[ExchangeVersion.Exchange2010_SP1]));
            }
        }

        if (!StringHelper.IsNullOrEmpty(this.InlineImageUrlTemplate)) {
            if (request.Service.RequestedServerVersion < ExchangeVersion.Exchange2013) {
                throw new ServiceVersionException(
                    StringHelper.Format(
                        Strings.PropertyIncompatibleWithRequestVersion,
                        "InlineImageUrlTemplate",
                        ExchangeVersion[ExchangeVersion.Exchange2013]));
            }
        }

        if (this.BlockExternalImages/*.HasValue*/) {
            if (request.Service.RequestedServerVersion < ExchangeVersion.Exchange2013) {
                throw new ServiceVersionException(
                    StringHelper.Format(
                        Strings.PropertyIncompatibleWithRequestVersion,
                        "BlockExternalImages",
                        ExchangeVersion[ExchangeVersion.Exchange2013]));
            }
        }

        if (this.AddBlankTargetToLinks/*.HasValue*/) {
            if (request.Service.RequestedServerVersion < ExchangeVersion.Exchange2013) {
                throw new ServiceVersionException(
                    StringHelper.Format(
                        Strings.PropertyIncompatibleWithRequestVersion,
                        "AddTargetToLinks",
                        ExchangeVersion[ExchangeVersion.Exchange2013]));
            }
        }

        if (this.MaximumBodySize/*.HasValue*/) {
            if (request.Service.RequestedServerVersion < ExchangeVersion.Exchange2013) {
                throw new ServiceVersionException(
                    StringHelper.Format(
                        Strings.PropertyIncompatibleWithRequestVersion,
                        "MaximumBodySize",
                        ExchangeVersion[ExchangeVersion.Exchange2013]));
            }
        }
    }

    /**
     * @internal Writes additonal properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer                The writer to write to.
     * @param   {PropertyDefinitionBase[]}   propertyDefinitions   The property definitions to write.
     */
    static WriteAdditionalPropertiesToXml(writer: EwsServiceXmlWriter, propertyDefinitions: PropertyDefinitionBase[]): void {
        writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.AdditionalProperties);

        for (let propertyDefinition of propertyDefinitions) {
            propertyDefinition.WriteToXml(writer);
        }

        writer.WriteEndElement();
    }

    /**
     * @internal Writes the property set to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer to write to.
     * @param   {ServiceObjectType}     serviceObjectType   The type of service object the property set is emitted for.
     */
    WriteToXml(writer: EwsServiceXmlWriter, serviceObjectType: ServiceObjectType): void {
        let shapeElementName: string = PropertySet.GetShapeName(serviceObjectType);

        writer.WriteStartElement(XmlNamespace.Messages, shapeElementName);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.BaseShape,
            PropertySet.defaultPropertySetMap.Member.get(this.BasePropertySet));

        if (serviceObjectType == ServiceObjectType.Item) {
            if (this.RequestedBodyType/*.HasValue*/) {
                writer.WriteElementValue(
                    XmlNamespace.Types,
                    XmlElementNames.BodyType,
                    BodyType[this.RequestedBodyType]/*.Value*/);
            }

            if (this.RequestedUniqueBodyType/*.HasValue*/) {
                writer.WriteElementValue(
                    XmlNamespace.Types,
                    XmlElementNames.UniqueBodyType,
                    BodyType[this.RequestedUniqueBodyType]/*.Value*/);
            }

            if (this.RequestedNormalizedBodyType/*.HasValue*/) {
                writer.WriteElementValue(
                    XmlNamespace.Types,
                    XmlElementNames.NormalizedBodyType,
                    BodyType[this.RequestedNormalizedBodyType]/*.Value*/);
            }

            if (this.FilterHtmlContent/*.HasValue*/) {
                writer.WriteElementValue(
                    XmlNamespace.Types,
                    XmlElementNames.FilterHtmlContent,
                    this.FilterHtmlContent/*.Value*/);
            }

            if (this.ConvertHtmlCodePageToUTF8/*.HasValue*/ &&
                writer.Service.RequestedServerVersion >= ExchangeVersion.Exchange2010_SP1) {
                writer.WriteElementValue(
                    XmlNamespace.Types,
                    XmlElementNames.ConvertHtmlCodePageToUTF8,
                    this.ConvertHtmlCodePageToUTF8/*.Value*/);
            }

            if (!StringHelper.IsNullOrEmpty(this.InlineImageUrlTemplate) &&
                writer.Service.RequestedServerVersion >= ExchangeVersion.Exchange2013) {
                writer.WriteElementValue(
                    XmlNamespace.Types,
                    XmlElementNames.InlineImageUrlTemplate,
                    this.InlineImageUrlTemplate);
            }

            if (this.BlockExternalImages/*.HasValue*/ &&
                writer.Service.RequestedServerVersion >= ExchangeVersion.Exchange2013) {
                writer.WriteElementValue(
                    XmlNamespace.Types,
                    XmlElementNames.BlockExternalImages,
                    this.BlockExternalImages/*.Value*/);
            }

            if (this.AddBlankTargetToLinks/*.HasValue*/ &&
                writer.Service.RequestedServerVersion >= ExchangeVersion.Exchange2013) {
                writer.WriteElementValue(
                    XmlNamespace.Types,
                    XmlElementNames.AddBlankTargetToLinks,
                    this.AddBlankTargetToLinks/*.Value*/);
            }

            if (this.MaximumBodySize/*.HasValue*/ &&
                writer.Service.RequestedServerVersion >= ExchangeVersion.Exchange2013) {
                writer.WriteElementValue(
                    XmlNamespace.Types,
                    XmlElementNames.MaximumBodySize,
                    this.MaximumBodySize/*.Value*/);
            }
        }

        if (this.additionalProperties.length > 0) {
            PropertySet.WriteAdditionalPropertiesToXml(writer, this.additionalProperties);
        }

        writer.WriteEndElement(); // Item/FolderShape
    }
}