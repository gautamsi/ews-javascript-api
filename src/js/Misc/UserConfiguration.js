"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../ExtensionMethods");
var EwsLogging_1 = require("../Core/EwsLogging");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var FolderId_1 = require("../ComplexProperties/FolderId");
var InvalidOperationException_1 = require("../Exceptions/InvalidOperationException");
var ItemId_1 = require("../ComplexProperties/ItemId");
var Promise_1 = require("../Promise");
var PropertyException_1 = require("../Exceptions/PropertyException");
var ServiceVersionException_1 = require("../Exceptions/ServiceVersionException");
var Strings_1 = require("../Strings");
var UserConfigurationDictionary_1 = require("../ComplexProperties/UserConfigurationDictionary");
var UserConfigurationProperties_1 = require("../Enumerations/UserConfigurationProperties");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
/**
 * Represents an object that can be used to store user-defined configuration settings.
 */
var UserConfiguration = /** @class */ (function () {
    function UserConfiguration(service, requestedProperties) {
        if (requestedProperties === void 0) { requestedProperties = UserConfiguration.PropertiesAvailableForNewObject; }
        this.parentFolderId = null;
        this.itemId = null;
        this.dictionary = null;
        this.xmlData = null; //System.Byte[]; //info: base64 encoded value
        this.binaryData = null; //System.Byte[];
        this.propertiesAvailableForAccess = UserConfigurationProperties_1.UserConfigurationProperties.Id;
        this.updatedProperties = UserConfigurationProperties_1.UserConfigurationProperties.Id;
        /**
         * Indicates whether changes trigger an update or create operation.
         */
        this.isNew = false;
        EwsUtilities_1.EwsUtilities.ValidateParam(service, "service");
        if (service.RequestedServerVersion < UserConfiguration.ObjectVersion) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ObjectTypeIncompatibleWithRequestVersion, "UserConfiguration", ExchangeVersion_1.ExchangeVersion[UserConfiguration.ObjectVersion]));
        }
        this.service = service;
        this.isNew = true;
        this.InitializeProperties(requestedProperties);
    }
    Object.defineProperty(UserConfiguration.prototype, "Name", {
        /**
         * Gets the name of the user configuration.
         * internal set
         */
        get: function () {
            return this.name;
        },
        set: function (value) {
            this.name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserConfiguration.prototype, "ParentFolderId", {
        /**
         * Gets the Id of the folder containing the user configuration.
         * internal set
         */
        get: function () {
            return this.parentFolderId;
        },
        set: function (value) {
            this.parentFolderId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserConfiguration.prototype, "ItemId", {
        /**
         * Gets the Id of the user configuration.
         */
        get: function () {
            return this.itemId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserConfiguration.prototype, "Dictionary", {
        /**
         * Gets the dictionary of the user configuration.
         */
        get: function () {
            return this.dictionary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserConfiguration.prototype, "XmlData", {
        /**
         * Gets or sets the xml data of the user configuration.
         * ### base64 encoded value, not the memory stream or byte[]
         */
        get: function () {
            this.ValidatePropertyAccess(UserConfigurationProperties_1.UserConfigurationProperties.XmlData);
            return this.xmlData;
        },
        set: function (value) {
            this.xmlData = value;
            this.MarkPropertyForUpdate(UserConfigurationProperties_1.UserConfigurationProperties.XmlData);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserConfiguration.prototype, "BinaryData", {
        /**
         *  Gets or sets the binary data of the user configuration.
         * ### base64 encoded value, not the memory stream or byte[]
         */
        get: function () {
            this.ValidatePropertyAccess(UserConfigurationProperties_1.UserConfigurationProperties.BinaryData);
            return this.binaryData;
        },
        set: function (value) {
            this.binaryData = value;
            this.MarkPropertyForUpdate(UserConfigurationProperties_1.UserConfigurationProperties.BinaryData);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserConfiguration.prototype, "IsDirty", {
        /**
         * Gets a value indicating whether this user configuration has been modified.
         */
        get: function () {
            return (this.updatedProperties != UserConfiguration.NoProperties) || this.dictionary.IsDirty;
        },
        enumerable: true,
        configurable: true
    });
    UserConfiguration.Bind = function (service, name, parentFolderIdOrName, properties) {
        var parentFolderId = parentFolderIdOrName;
        if (typeof parentFolderIdOrName === 'number') {
            parentFolderId = new FolderId_1.FolderId(parentFolderIdOrName);
        }
        return service.GetUserConfiguration(name, parentFolderId, properties).then(function (result) {
            result.isNew = false;
            return result;
        });
    };
    /**
     * Deletes the user configuration.
     * Calling this method results in a call to EWS.
     * @return  {Promise<void>}    :Promise.
     */
    UserConfiguration.prototype.Delete = function () {
        if (this.isNew) {
            Promise_1.Promise.reject(new InvalidOperationException_1.InvalidOperationException(Strings_1.Strings.DeleteInvalidForUnsavedUserConfiguration));
        }
        else {
            return this.service.DeleteUserConfiguration(this.name, this.parentFolderId);
        }
    };
    /**
     * Gets the base64 property value.
     *
     * @param   {base64String}   bytes   The bytes.
     * @return  {string}         [description]
     */
    UserConfiguration.prototype.GetBase64PropertyValue = function (bytes /*System.Byte[]*/) { throw new Error("UserConfiguration.ts - GetBase64PropertyValue : Not implemented."); };
    /**
     * Initializes properties.
     *
     * /remarks/    InitializeProperties is called in 3 cases:
     * .  Create new object:  From the UserConfiguration constructor.
     * .  Bind to existing object:  Again from the constructor.  The constructor is called eventually by the GetUserConfiguration request.
     * .  Refresh properties:  From the Load method.
     *
     * @param   {UserConfigurationProperties}   requestedProperties   The properties requested for this UserConfiguration.
     */
    UserConfiguration.prototype.InitializeProperties = function (requestedProperties) {
        this.itemId = null;
        this.dictionary = new UserConfigurationDictionary_1.UserConfigurationDictionary();
        this.xmlData = null;
        this.binaryData = null;
        this.propertiesAvailableForAccess = requestedProperties;
        this.ResetIsDirty();
    };
    /**
     * Determines whether the specified property was updated.
     *
     * @param   {UserConfigurationProperties}   property   property to evaluate.
     * @return  {boolean}                       Boolean indicating whether to send the property Xml.
     */
    UserConfiguration.prototype.IsPropertyUpdated = function (property) {
        var isPropertyDirty = false;
        var isPropertyEmpty = false;
        switch (property) {
            case UserConfigurationProperties_1.UserConfigurationProperties.Dictionary:
                isPropertyDirty = this.Dictionary.IsDirty;
                isPropertyEmpty = this.Dictionary.Count == 0;
                break;
            case UserConfigurationProperties_1.UserConfigurationProperties.XmlData:
                isPropertyDirty = (property & this.updatedProperties) == property;
                isPropertyEmpty = (this.xmlData == null) || (this.xmlData.length == 0);
                break;
            case UserConfigurationProperties_1.UserConfigurationProperties.BinaryData:
                isPropertyDirty = (property & this.updatedProperties) == property;
                isPropertyEmpty = (this.binaryData == null) || (this.binaryData.length == 0);
                break;
            default:
                EwsLogging_1.EwsLogging.Assert(false, "UserConfiguration.IsPropertyUpdated", "property not supported: " + ExtensionMethods_1.EnumHelper.ToString(UserConfigurationProperties_1.UserConfigurationProperties, property));
                break;
        }
        // Consider the property updated, if it's been modified, and either 
        //    . there's a value or 
        //    . there's no value but the operation is update.
        return isPropertyDirty && ((!isPropertyEmpty) || (!this.isNew));
    };
    /**
     * Loads the specified properties on the user configuration.
     * Calling this method results in a call to EWS.
     * @return  {Promise<void>}    :Promise.
     */
    UserConfiguration.prototype.Load = function (properties) {
        this.InitializeProperties(properties);
        return this.service.LoadPropertiesForUserConfiguration(this, properties);
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    UserConfiguration.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.UserConfigurationName:
                    var userConfigName = jsObject[key];
                    var responseName = userConfigName[XmlAttributeNames_1.XmlAttributeNames.Name];
                    EwsLogging_1.EwsLogging.Assert(ExtensionMethods_1.StringHelper.Compare(this.name, responseName, /** StringComparison.Ordinal*/ false) == 0, "UserConfiguration.LoadFromXmlJsObject", "UserConfigurationName does not match: Expected: " + this.name + " Name in response: " + responseName);
                    break;
                case XmlElementNames_1.XmlElementNames.ItemId:
                    this.itemId = new ItemId_1.ItemId();
                    this.itemId.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.Dictionary:
                    (this.dictionary).CreateFromXMLJsObjectCollection(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.XmlData:
                    this.xmlData = jsObject[key]; //Convert.FromBase64String(jsObject.ReadAsString(key)); //info: no need to convert, using base64 as is
                    break;
                case XmlElementNames_1.XmlElementNames.BinaryData:
                    this.binaryData = jsObject[key]; //Convert.FromBase64String(jsObject.ReadAsString(key)); //info: no need to convert, using base64 as is
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * Adds the passed property to updatedProperties.
     *
     * @param   {UserConfigurationProperties}   property   Property to update.
     */
    UserConfiguration.prototype.MarkPropertyForUpdate = function (property) {
        this.updatedProperties |= property;
        this.propertiesAvailableForAccess |= property;
    };
    /**
     * Resets flags to indicate that properties haven't been modified.
     */
    UserConfiguration.prototype.ResetIsDirty = function () {
        this.updatedProperties = UserConfiguration.NoProperties;
        this.dictionary.IsDirty = false;
    };
    UserConfiguration.prototype.Save = function (name, parentFolderIdOrName) {
        var _this = this;
        var parentFolderId = parentFolderIdOrName;
        if (typeof parentFolderIdOrName === 'number') {
            parentFolderId = new FolderId_1.FolderId(parentFolderIdOrName);
        }
        EwsUtilities_1.EwsUtilities.ValidateParam(name, "name");
        EwsUtilities_1.EwsUtilities.ValidateParam(parentFolderId, "parentFolderId");
        parentFolderId.Validate(this.service.RequestedServerVersion);
        if (!this.isNew) {
            throw new InvalidOperationException_1.InvalidOperationException(Strings_1.Strings.CannotSaveNotNewUserConfiguration);
        }
        this.parentFolderId = parentFolderId;
        this.name = name;
        return this.service.CreateUserConfiguration(this).then(function () {
            _this.isNew = false;
            _this.ResetIsDirty();
        });
    };
    /**
     * Updates the user configuration by applying local changes to the Exchange server.
     * Calling this method results in a call to EWS.
     * @return  {Promise<void>}    :Promise.
     */
    UserConfiguration.prototype.Update = function () {
        var _this = this;
        if (this.isNew) {
            Promise_1.Promise.reject(new InvalidOperationException_1.InvalidOperationException(Strings_1.Strings.CannotUpdateNewUserConfiguration));
        }
        if (this.IsPropertyUpdated(UserConfigurationProperties_1.UserConfigurationProperties.BinaryData) ||
            this.IsPropertyUpdated(UserConfigurationProperties_1.UserConfigurationProperties.Dictionary) ||
            this.IsPropertyUpdated(UserConfigurationProperties_1.UserConfigurationProperties.XmlData)) {
            return this.service.UpdateUserConfiguration(this).then(function () {
                _this.ResetIsDirty();
            });
        }
        else {
            this.ResetIsDirty();
            return Promise_1.Promise.resolve();
        }
    };
    /**
     * Determines whether the specified property may be accessed.
     *
     * @param   {UserConfigurationProperties}   property   Property to access.
     */
    UserConfiguration.prototype.ValidatePropertyAccess = function (property) {
        if ((property & this.propertiesAvailableForAccess) != property) {
            throw new PropertyException_1.PropertyException(Strings_1.Strings.MustLoadOrAssignPropertyBeforeAccess, ExtensionMethods_1.EnumHelper.ToString(UserConfigurationProperties_1.UserConfigurationProperties, property));
        }
    };
    /**
     * Writes the BinaryData property to Xml.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    UserConfiguration.prototype.WriteBinaryDataToXml = function (writer) {
        EwsLogging_1.EwsLogging.Assert(writer != null, "UserConfiguration.WriteBinaryDataToXml", "writer is null");
        UserConfiguration.WriteByteArrayToXml(writer, this.binaryData, XmlElementNames_1.XmlElementNames.BinaryData);
    };
    /**
     * Writes a byte array to Xml.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {base64String}          byteArray        Byte array to write #base64 string.
     * @param   {string}                xmlElementName   Name of the Xml element.
     */
    UserConfiguration.WriteByteArrayToXml = function (writer, byteArray /*System.Byte[]*/, xmlElementName) {
        EwsLogging_1.EwsLogging.Assert(writer != null, "UserConfiguration.WriteByteArrayToXml", "writer is null");
        EwsLogging_1.EwsLogging.Assert(xmlElementName != null, "UserConfiguration.WriteByteArrayToXml", "xmlElementName is null");
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, xmlElementName);
        if (byteArray != null && byteArray.length > 0) {
            //writer.WriteValue(Convert.ToBase64String(byteArray), xmlElementName); //info: no need to convert to string, it is already base 64 encoded string
            writer.WriteValue(byteArray, xmlElementName);
        }
        writer.WriteEndElement();
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {XmlNamespace}          xmlNamespace     The XML namespace.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    UserConfiguration.prototype.WriteToXml = function (writer, xmlNamespace, xmlElementName) {
        EwsLogging_1.EwsLogging.Assert(writer != null, "UserConfiguration.WriteToXml", "writer is null");
        EwsLogging_1.EwsLogging.Assert(xmlElementName != null, "UserConfiguration.WriteToXml", "xmlElementName is null");
        writer.WriteStartElement(xmlNamespace, xmlElementName);
        // Write the UserConfigurationName element
        UserConfiguration.WriteUserConfigurationNameToXml(writer, XmlNamespace_1.XmlNamespace.Types, this.name, this.parentFolderId);
        // Write the Dictionary element
        if (this.IsPropertyUpdated(UserConfigurationProperties_1.UserConfigurationProperties.Dictionary)) {
            this.dictionary.WriteToXml(writer, XmlElementNames_1.XmlElementNames.Dictionary);
        }
        // Write the XmlData element
        if (this.IsPropertyUpdated(UserConfigurationProperties_1.UserConfigurationProperties.XmlData)) {
            this.WriteXmlDataToXml(writer);
        }
        // Write the BinaryData element
        if (this.IsPropertyUpdated(UserConfigurationProperties_1.UserConfigurationProperties.BinaryData)) {
            this.WriteBinaryDataToXml(writer);
        }
        writer.WriteEndElement();
    };
    /**
     * @internal Writes to Xml.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {XmlNamespace}          xmlNamespace     The XML namespace.
     * @param   {string}                name             The user configuration name.
     * @param   {FolderId}              parentFolderId   The Id of the folder containing the user configuration.
     */
    UserConfiguration.WriteUserConfigurationNameToXml = function (writer, xmlNamespace, name, parentFolderId) {
        EwsLogging_1.EwsLogging.Assert(writer != null, "UserConfiguration.WriteUserConfigurationNameToXml", "writer is null");
        EwsLogging_1.EwsLogging.Assert(name != null, "UserConfiguration.WriteUserConfigurationNameToXml", "name is null");
        EwsLogging_1.EwsLogging.Assert(parentFolderId != null, "UserConfiguration.WriteUserConfigurationNameToXml", "parentFolderId is null");
        writer.WriteStartElement(xmlNamespace, XmlElementNames_1.XmlElementNames.UserConfigurationName);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.Name, name);
        parentFolderId.WriteToXml(writer);
        writer.WriteEndElement();
    };
    /**
     * Writes the XmlData property to Xml.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    UserConfiguration.prototype.WriteXmlDataToXml = function (writer) {
        EwsLogging_1.EwsLogging.Assert(writer != null, "UserConfiguration.WriteXmlDataToXml", "writer is null");
        UserConfiguration.WriteByteArrayToXml(writer, this.xmlData, XmlElementNames_1.XmlElementNames.XmlData);
    };
    UserConfiguration.ObjectVersion = ExchangeVersion_1.ExchangeVersion.Exchange2010;
    // For consistency with ServiceObject behavior, access to ItemId is permitted for a new object.
    UserConfiguration.PropertiesAvailableForNewObject = UserConfigurationProperties_1.UserConfigurationProperties.BinaryData | UserConfigurationProperties_1.UserConfigurationProperties.Dictionary | UserConfigurationProperties_1.UserConfigurationProperties.XmlData;
    UserConfiguration.NoProperties = 0;
    return UserConfiguration;
}());
exports.UserConfiguration = UserConfiguration;
