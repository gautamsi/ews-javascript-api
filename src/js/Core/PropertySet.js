"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../ExtensionMethods");
var BasePropertySet_1 = require("../Enumerations/BasePropertySet");
var BodyType_1 = require("../Enumerations/BodyType");
var AltDictionary_1 = require("../AltDictionary");
var EwsLogging_1 = require("../Core/EwsLogging");
var EwsUtilities_1 = require("./EwsUtilities");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var LazyMember_1 = require("./LazyMember");
var PropertyDefinition_1 = require("../PropertyDefinitions/PropertyDefinition");
var PropertyDefinitionFlags_1 = require("../Enumerations/PropertyDefinitionFlags");
var ServiceObjectType_1 = require("../Enumerations/ServiceObjectType");
var ServiceValidationException_1 = require("../Exceptions/ServiceValidationException");
var ServiceVersionException_1 = require("../Exceptions/ServiceVersionException");
var Strings_1 = require("../Strings");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
/**
 * Represents a set of item or folder properties. Property sets are used to indicate what properties of an item or folder should be loaded when binding to an existing item or folder or when loading an item or folder's properties.
 *
 * @sealed
 */
var PropertySet = /** @class */ (function () {
    function PropertySet(basePropertySetOrAdditionalProperties, _additionalProperties) {
        if (basePropertySetOrAdditionalProperties === void 0) { basePropertySetOrAdditionalProperties = null; }
        if (_additionalProperties === void 0) { _additionalProperties = null; }
        /**
         * The base property set this property set is based upon.
         */
        this.basePropertySet = BasePropertySet_1.BasePropertySet.IdOnly;
        /**
         * The list of additional properties included in this property set.
         */
        this.additionalProperties = [];
        /**
         * The requested body type for get and find operations. If null, the "best body" is returned.
         */
        this.requestedBodyType = null; //nullable
        /**
         * The requested unique body type for get and find operations. If null, the should return the same value as body type.
         */
        this.requestedUniqueBodyType = null; //nullable
        /**
         * The requested normalized body type for get and find operations. If null, the should return the same value as body type.
         */
        this.requestedNormalizedBodyType = null; //nullable
        /**
         * Value indicating whether or not the server should filter HTML content.
         */
        this.filterHtml = null; //nullable
        /**
         * Value indicating whether or not the server should convert HTML code page to UTF8.
         */
        this.convertHtmlCodePageToUTF8 = null; //nullable
        /**
         * Value of the URL template to use for the src attribute of inline IMG elements.
         */
        this.inlineImageUrlTemplate = null;
        /**
         * Value indicating whether or not the server should block references to external images.
         */
        this.blockExternalImages = null; //nullable
        /**
         * Value indicating whether or not to add a blank target attribute to anchor links.
         */
        this.addTargetToLinks = null; //nullable
        /**
         * Value indicating whether or not this PropertySet can be modified.
         */
        this.isReadOnly = false;
        /**
         * Value indicating the maximum body size to retrieve.
         */
        this.maximumBodySize = null; //nullable
        var argsLength = arguments.length;
        var basePropertySet = BasePropertySet_1.BasePropertySet.IdOnly;
        var additionalProperties = [];
        if (argsLength >= 1) {
            if (typeof basePropertySetOrAdditionalProperties === 'number') {
                basePropertySet = basePropertySetOrAdditionalProperties;
            }
            else if (ExtensionMethods_1.ArrayHelper.isArray(basePropertySetOrAdditionalProperties)) {
                additionalProperties = basePropertySetOrAdditionalProperties;
            }
            else {
                additionalProperties = [basePropertySetOrAdditionalProperties];
            }
        }
        if (argsLength >= 2) {
            if (ExtensionMethods_1.ArrayHelper.isArray(_additionalProperties)) {
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
    Object.defineProperty(PropertySet, "DefaultPropertySetMap", {
        /**
         * @internal Maps BasePropertySet values to EWS's BaseShape values.
         */
        get: function () {
            return this.defaultPropertySetMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet.prototype, "BasePropertySet", {
        /**
         * Gets or sets the base property set the property set is based upon.
         */
        get: function () {
            return this.basePropertySet;
        },
        set: function (value) {
            this.ThrowIfReadonly();
            this.basePropertySet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet.prototype, "RequestedBodyType", {
        /**
         * Gets or sets type of body that should be loaded on items. If RequestedBodyType is null, body is returned as HTML if available, plain text otherwise.
         *
         * @Nullable
         */
        get: function () {
            return this.requestedBodyType;
        },
        set: function (value) {
            this.ThrowIfReadonly();
            this.requestedBodyType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet.prototype, "RequestedUniqueBodyType", {
        /**
         * Gets or sets type of body that should be loaded on items. If null, the should return the same value as body type.
         *
         * @nullable
         */
        get: function () {
            return this.requestedUniqueBodyType;
        },
        set: function (value) {
            this.ThrowIfReadonly();
            this.requestedUniqueBodyType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet.prototype, "RequestedNormalizedBodyType", {
        /**
         * Gets or sets type of normalized body that should be loaded on items. If null, the should return the same value as body type.
         *
         * @nullable
         */
        get: function () {
            return this.requestedNormalizedBodyType;
        },
        set: function (value) {
            this.ThrowIfReadonly();
            this.requestedNormalizedBodyType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet.prototype, "Count", {
        /**
         * Gets the number of explicitly added properties in this set.
         */
        get: function () {
            return this.additionalProperties.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet.prototype, "FilterHtmlContent", {
        /**
         * Gets or sets value indicating whether or not to filter potentially unsafe HTML content from message bodies.
         *
         * @nullable
         */
        get: function () {
            return this.filterHtml;
        },
        set: function (value) {
            this.ThrowIfReadonly();
            this.filterHtml = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet.prototype, "ConvertHtmlCodePageToUTF8", {
        /**
         * Gets or sets value indicating whether or not to convert HTML code page to UTF8 encoding.
         *
         * @nullable
         */
        get: function () {
            return this.convertHtmlCodePageToUTF8;
        },
        set: function (value) {
            this.ThrowIfReadonly();
            this.convertHtmlCodePageToUTF8 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet.prototype, "InlineImageUrlTemplate", {
        /**
         * Gets or sets a value of the URL template to use for the src attribute of inline IMG elements.
         *
         * @nullable
         */
        get: function () {
            return this.inlineImageUrlTemplate;
        },
        set: function (value) {
            this.ThrowIfReadonly();
            this.inlineImageUrlTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet.prototype, "BlockExternalImages", {
        /**
         * Gets or sets value indicating whether or not to convert inline images to data URLs.
         *
         * @nullable
         */
        get: function () {
            return this.blockExternalImages;
        },
        set: function (value) {
            this.ThrowIfReadonly();
            this.blockExternalImages = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet.prototype, "AddBlankTargetToLinks", {
        /**
         * Gets or sets value indicating whether or not to add blank target attribute to anchor links.
         *
         * @nullable
         */
        get: function () {
            return this.addTargetToLinks;
        },
        set: function (value) {
            this.ThrowIfReadonly();
            this.addTargetToLinks = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertySet.prototype, "MaximumBodySize", {
        /**
         * Gets or sets the maximum size of the body to be retrieved.
         *
         * @nullable
         *
         * @value   The maximum size of the body to be retrieved.
         */
        get: function () {
            return this.maximumBodySize;
        },
        set: function (value) {
            this.ThrowIfReadonly();
            this.maximumBodySize = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the **PropertyDefinitionBase** at the specified index. this[int] indexer
     *
     * @param   {number}   index   Index.
     */
    PropertySet.prototype._getItem = function (index) {
        return this.additionalProperties[index];
    };
    /**
     * Adds the specified property to the property set.
     *
     * @param   {PropertyDefinitionBase}   property   The property to add.
     */
    PropertySet.prototype.Add = function (property) {
        this.ThrowIfReadonly();
        EwsUtilities_1.EwsUtilities.ValidateParam(property, "property");
        if (this.additionalProperties.indexOf(property) === -1) {
            this.additionalProperties.push(property);
        }
    };
    /**
     * Adds the specified properties to the property set.
     *
     * @param   {PropertyDefinitionBase[]}   properties   The properties to add.
     */
    PropertySet.prototype.AddRange = function (properties) {
        this.ThrowIfReadonly();
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(properties, "properties");
        for (var _a = 0, properties_1 = properties; _a < properties_1.length; _a++) {
            var property = properties_1[_a];
            this.Add(property);
        }
    };
    /**
     * Remove all explicitly added properties from the property set.
     */
    PropertySet.prototype.Clear = function () {
        this.ThrowIfReadonly();
        this.additionalProperties.splice(0);
    };
    /**
     * Determines whether the specified property has been explicitly added to this property set using the Add or AddRange methods.
     *
     * @param   {PropertyDefinitionBase}    property   The property.
     * @return  {boolean}                   true if this property set contains the specified propert]; otherwise, false.
     */
    PropertySet.prototype.Contains = function (property) { return this.additionalProperties.indexOf(property) !== -1; };
    /**
     * Creates a read-only PropertySet.
     *
     * @param   {BasePropertySet}   basePropertySet   The base property set.
     * @return  {PropertySet}       PropertySet
     */
    PropertySet.CreateReadonlyPropertySet = function (basePropertySet) {
        var propertySet = new PropertySet(basePropertySet);
        propertySet.isReadOnly = true;
        return propertySet;
    };
    /**
     *  Returns an enumerator that iterates through the collection. this case this.additionalProperties itself
     */
    PropertySet.prototype.GetEnumerator = function () {
        return this.additionalProperties;
    };
    /**
     * Gets the name of the shape.
     *
     * @param   {ServiceObjectType}     serviceObjectType   Type of the service object.
     * @return  {string}                Shape name.
     */
    PropertySet.GetShapeName = function (serviceObjectType) {
        switch (serviceObjectType) {
            case ServiceObjectType_1.ServiceObjectType.Item:
                return XmlElementNames_1.XmlElementNames.ItemShape;
            case ServiceObjectType_1.ServiceObjectType.Folder:
                return XmlElementNames_1.XmlElementNames.FolderShape;
            case ServiceObjectType_1.ServiceObjectType.Conversation:
                return XmlElementNames_1.XmlElementNames.ConversationShape;
            default:
                EwsLogging_1.EwsLogging.Assert(false, "PropertySet.GetShapeName", ExtensionMethods_1.StringHelper.Format("An unexpected object type {0} for property shape. This code path should never be reached.", serviceObjectType));
                return ExtensionMethods_1.StringHelper.Empty;
        }
    };
    /**
     * @internal Validates this property set.
     */
    PropertySet.prototype.InternalValidate = function () {
        for (var i = 0; i < this.additionalProperties.length; i++) {
            if (this.additionalProperties[i] == null) {
                throw new ServiceValidationException_1.ServiceValidationException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.AdditionalPropertyIsNull, i));
            }
        }
    };
    /**
     * Removes the specified property from the set.
     *
     * @param   {PropertyDefinitionBase}    property   The property to remove.
     * @return  {boolean}                   true if the property was successfully removed, false otherwise.
     */
    PropertySet.prototype.Remove = function (property) {
        this.ThrowIfReadonly();
        return ExtensionMethods_1.ArrayHelper.RemoveEntry(this.additionalProperties, property);
    };
    /**
     * Throws if readonly property set.
     */
    PropertySet.prototype.ThrowIfReadonly = function () {
        if (this.isReadOnly) {
            throw new Error(" PropertySet can not be modified"); // System.NotSupportedException(Strings.PropertySetCannotBeModified);
        }
    };
    /**
     * Implements ISelfValidate.Validate. Validates this property set.
     */
    PropertySet.prototype.Validate = function () {
        this.InternalValidate();
    };
    /**
     * @internal Validates this property set instance for request to ensure that:
     *  1. Properties are valid for the request server version.
     *  2. If only summary properties are legal for this request (e.g. FindItem) then only summary properties were specified.
     *
     * @param   {ServiceRequestBase}    request                 The request.
     * @param   {boolean}               summaryPropertiesOnly   if set to true then only summary properties are allowed.
     */
    PropertySet.prototype.ValidateForRequest = function (request, summaryPropertiesOnly) {
        for (var _a = 0, _b = this.additionalProperties; _a < _b.length; _a++) {
            var propDefBase = _b[_a];
            //let propDefBase: PropertyDefinitionBase = propItem;
            var propertyDefinition = propDefBase;
            if (propertyDefinition instanceof PropertyDefinition_1.PropertyDefinition /* != null*/) {
                if (propertyDefinition.Version > request.Service.RequestedServerVersion) {
                    throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, propertyDefinition.Name, ExchangeVersion_1.ExchangeVersion[propertyDefinition.Version]));
                }
                if (summaryPropertiesOnly && !propertyDefinition.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, request.Service.RequestedServerVersion)) {
                    throw new ServiceValidationException_1.ServiceValidationException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.NonSummaryPropertyCannotBeUsed, propertyDefinition.Name, request.GetXmlElementName()));
                }
            }
        }
        if (this.FilterHtmlContent /*.HasValue*/) {
            if (request.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2010) {
                throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, "FilterHtmlContent", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2010]));
            }
        }
        if (this.ConvertHtmlCodePageToUTF8 /*.HasValue*/) {
            if (request.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1) {
                throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, "ConvertHtmlCodePageToUTF8", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1]));
            }
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.InlineImageUrlTemplate)) {
            if (request.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013) {
                throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, "InlineImageUrlTemplate", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
            }
        }
        if (this.BlockExternalImages /*.HasValue*/) {
            if (request.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013) {
                throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, "BlockExternalImages", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
            }
        }
        if (this.AddBlankTargetToLinks /*.HasValue*/) {
            if (request.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013) {
                throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, "AddTargetToLinks", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
            }
        }
        if (this.MaximumBodySize /*.HasValue*/) {
            if (request.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013) {
                throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, "MaximumBodySize", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
            }
        }
    };
    /**
     * @internal Writes additonal properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer                The writer to write to.
     * @param   {PropertyDefinitionBase[]}   propertyDefinitions   The property definitions to write.
     */
    PropertySet.WriteAdditionalPropertiesToXml = function (writer, propertyDefinitions) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.AdditionalProperties);
        for (var _a = 0, propertyDefinitions_1 = propertyDefinitions; _a < propertyDefinitions_1.length; _a++) {
            var propertyDefinition = propertyDefinitions_1[_a];
            propertyDefinition.WriteToXml(writer);
        }
        writer.WriteEndElement();
    };
    /**
     * @internal Writes the property set to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer to write to.
     * @param   {ServiceObjectType}     serviceObjectType   The type of service object the property set is emitted for.
     */
    PropertySet.prototype.WriteToXml = function (writer, serviceObjectType) {
        var shapeElementName = PropertySet.GetShapeName(serviceObjectType);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, shapeElementName);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.BaseShape, PropertySet.defaultPropertySetMap.Member.get(this.BasePropertySet));
        if (serviceObjectType == ServiceObjectType_1.ServiceObjectType.Item) {
            if (this.RequestedBodyType /*.HasValue*/) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.BodyType, BodyType_1.BodyType[this.RequestedBodyType] /*.Value*/);
            }
            if (this.RequestedUniqueBodyType /*.HasValue*/) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.UniqueBodyType, BodyType_1.BodyType[this.RequestedUniqueBodyType] /*.Value*/);
            }
            if (this.RequestedNormalizedBodyType /*.HasValue*/) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.NormalizedBodyType, BodyType_1.BodyType[this.RequestedNormalizedBodyType] /*.Value*/);
            }
            if (this.FilterHtmlContent /*.HasValue*/) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.FilterHtmlContent, this.FilterHtmlContent /*.Value*/);
            }
            if (this.ConvertHtmlCodePageToUTF8 /*.HasValue*/ &&
                writer.Service.RequestedServerVersion >= ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ConvertHtmlCodePageToUTF8, this.ConvertHtmlCodePageToUTF8 /*.Value*/);
            }
            if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.InlineImageUrlTemplate) &&
                writer.Service.RequestedServerVersion >= ExchangeVersion_1.ExchangeVersion.Exchange2013) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.InlineImageUrlTemplate, this.InlineImageUrlTemplate);
            }
            if (this.BlockExternalImages /*.HasValue*/ &&
                writer.Service.RequestedServerVersion >= ExchangeVersion_1.ExchangeVersion.Exchange2013) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.BlockExternalImages, this.BlockExternalImages /*.Value*/);
            }
            if (this.AddBlankTargetToLinks /*.HasValue*/ &&
                writer.Service.RequestedServerVersion >= ExchangeVersion_1.ExchangeVersion.Exchange2013) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.AddBlankTargetToLinks, this.AddBlankTargetToLinks /*.Value*/);
            }
            if (this.MaximumBodySize /*.HasValue*/ &&
                writer.Service.RequestedServerVersion >= ExchangeVersion_1.ExchangeVersion.Exchange2013) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.MaximumBodySize, this.MaximumBodySize /*.Value*/);
            }
        }
        if (this.additionalProperties.length > 0) {
            PropertySet.WriteAdditionalPropertiesToXml(writer, this.additionalProperties);
        }
        writer.WriteEndElement(); // Item/FolderShape
    };
    /**
     * Returns a predefined property set that only includes the Id property.
     */
    PropertySet.IdOnly = PropertySet.CreateReadonlyPropertySet(BasePropertySet_1.BasePropertySet.IdOnly);
    /**
     * Returns a predefined property set that includes the first class properties of an item or folder.
     */
    PropertySet.FirstClassProperties = PropertySet.CreateReadonlyPropertySet(BasePropertySet_1.BasePropertySet.FirstClassProperties);
    /**
     * Maps BasePropertySet values to EWS's BaseShape values.
     */
    PropertySet.defaultPropertySetMap = new LazyMember_1.LazyMember(function () {
        var result = new AltDictionary_1.Dictionary(function (bps) { return BasePropertySet_1.BasePropertySet[bps]; });
        result.Add(BasePropertySet_1.BasePropertySet.IdOnly, "IdOnly");
        result.Add(BasePropertySet_1.BasePropertySet.FirstClassProperties, "AllProperties");
        return result;
    });
    return PropertySet;
}());
exports.PropertySet = PropertySet;
