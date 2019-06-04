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
var ExtensionMethods_1 = require("../ExtensionMethods");
var DateTime_1 = require("../DateTime");
var AltDictionary_1 = require("../AltDictionary");
var EwsLogging_1 = require("../Core/EwsLogging");
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var ServiceLocalException_1 = require("../Exceptions/ServiceLocalException");
var Strings_1 = require("../Strings");
var UserConfigurationDictionaryObjectType_1 = require("../Enumerations/UserConfigurationDictionaryObjectType");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents a user configuration's Dictionary property.
 *
 * @sealed
 */
var UserConfigurationDictionary = /** @class */ (function (_super) {
    __extends(UserConfigurationDictionary, _super);
    /**
     * @internal Initializes a new instance of **UserConfigurationDictionary** class.
     */
    function UserConfigurationDictionary() {
        var _this = _super.call(this) || this;
        _this.dictionary = null;
        _this.isDirty = false;
        _this.dictionary = new AltDictionary_1.Dictionary(UserConfigurationDictionary._dictionaryKeyPicker);
        return _this;
    }
    Object.defineProperty(UserConfigurationDictionary.prototype, "Count", {
        /**
         * Gets the number of elements in the user configuration dictionary.
         */
        get: function () {
            return this.dictionary.Count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserConfigurationDictionary.prototype, "IsDirty", {
        /**
         * @internal Gets or sets the isDirty flag.
         */
        get: function () {
            return this.isDirty;
        },
        set: function (value) {
            this.isDirty = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets or sets the element with the specified key.
     *
     * @param   {string | DateTime | boolean | number}                          key   The key of the element to get or set.
     * @return  {DateTime | string | number | boolean | string[] | number[]}    The element with the specified key.
     */
    UserConfigurationDictionary.prototype._getItem = function (key) {
        return this.dictionary.get(key);
    };
    /**
     * Gets or sets the element with the specified key.
     *
     * @param   {string | DateTime | boolean | number}                          key     The key of the element to get or set.
     * @param  {DateTime | string | number | boolean | string[] | number[]}     value    The element value to update at specified key.
     */
    UserConfigurationDictionary.prototype._setItem = function (key, value) {
        this.ValidateEntry(key, value);
        this.dictionary.set(key, value);
        this.Changed();
    };
    /**
     * Adds an element with the provided key and value to the user configuration dictionary.
     *
     * @param   {string | DateTime | boolean | number}                          key     The object to use as the key of the element to add. **Restrict usage of byteArray or complex type for key, consider using string and number only**.
     * @param   {DateTime | string | number | boolean | string[] | number[]}    value   The object to use as the value of the element to add.
     */
    UserConfigurationDictionary.prototype.Add = function (key, value) {
        this.ValidateEntry(key, value);
        this.dictionary.Add(key, value);
        this.Changed();
    };
    /**
     * @internal Instance was changed.
     */
    UserConfigurationDictionary.prototype.Changed = function () {
        _super.prototype.Changed.call(this);
        this.isDirty = true;
    };
    /**
     * Removes all items from the user configuration dictionary.
     */
    UserConfigurationDictionary.prototype.Clear = function () {
        if (this.dictionary.Count != 0) {
            this.dictionary.clear();
            this.Changed();
        }
    };
    /**
     * Constructs a dictionary object (key or entry value) from the specified type and string list.
     *
     * @param   {UserConfigurationDictionaryObjectType}     type      Object type to construct.
     * @param   {string[]}                                  value     Value of the dictionary object as a string list
     * @param   {ExchangeService}                           service   The service.
     * @return  {any}                                       Dictionary object.
     */
    UserConfigurationDictionary.prototype.ConstructObject = function (type, value /*System.Collections.Generic.List<string>*/, service) {
        EwsLogging_1.EwsLogging.Assert(value != null, "UserConfigurationDictionary.ConstructObject", "value is null");
        EwsLogging_1.EwsLogging.Assert((value.length == 1 || type == UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.StringArray), "UserConfigurationDictionary.ConstructObject", "value is array but type is not StringArray");
        var dictionaryObject = null;
        switch (type) {
            case UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.Boolean:
                dictionaryObject = ExtensionMethods_1.Convert.toBool(value[0]);
                break;
            case UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.Byte:
                dictionaryObject = ExtensionMethods_1.Convert.toNumber(value[0]); //info: byte is number, no Byte type in js 
                break;
            case UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.ByteArray:
                dictionaryObject = value[0]; //Convert.FromBase64String(value[0]); //info: ByteArray is base64 string here, avoiding binary value here
                break;
            case UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.DateTime:
                var dateTime = service.ConvertUniversalDateTimeStringToLocalDateTime(value[0]);
                if (dateTime) {
                    dictionaryObject = dateTime;
                }
                else {
                    EwsLogging_1.EwsLogging.Assert(false, "UserConfigurationDictionary.ConstructObject", "DateTime is null");
                }
                break;
            case UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.Integer32:
                dictionaryObject = ExtensionMethods_1.Convert.toNumber(value[0]);
                break;
            case UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.Integer64:
                dictionaryObject = ExtensionMethods_1.Convert.toNumber(value[0]);
                break;
            case UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.String:
                dictionaryObject = value[0];
                break;
            case UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.StringArray:
                dictionaryObject = value;
                break;
            case UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.UnsignedInteger32:
                dictionaryObject = ExtensionMethods_1.Convert.toNumber(value[0]);
                break;
            case UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.UnsignedInteger64:
                dictionaryObject = ExtensionMethods_1.Convert.toNumber(value[0]);
                break;
            default:
                EwsLogging_1.EwsLogging.Assert(false, "UserConfigurationDictionary.ConstructObject", "Type not recognized: " + UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType[type]);
                break;
        }
        return dictionaryObject;
    };
    /**
     * Determines whether the user configuration dictionary contains an element with the specified key.
     *
     * @param   {any}   key     The key to locate in the user configuration dictionary.
     * @return  {boolean}       true if the user configuration dictionary contains an element with the key; otherwise false.
     */
    UserConfigurationDictionary.prototype.ContainsKey = function (key) {
        return this.dictionary.containsKey(key);
    };
    /**
     * @internal Loads from XMLJsObject collection to create a new collection item.
     *
     * @interface   IJsonCollectionDeserializer
     *
     * @param   {any}               jsObjectCollection   The json collection.
     * @param   {ExchangeService}   service          The service.
     */
    UserConfigurationDictionary.prototype.CreateFromXMLJsObjectCollection = function (jsObjectCollection, service) {
        var collection = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObjectCollection, XmlElementNames_1.XmlElementNames.DictionaryEntry);
        for (var _i = 0, collection_1 = collection; _i < collection_1.length; _i++) {
            var jsonEntry = collection_1[_i];
            var parsedKey = this.GetDictionaryObject(jsonEntry[XmlElementNames_1.XmlElementNames.DictionaryKey], service);
            var parsedValue = this.GetDictionaryObject(jsonEntry[XmlElementNames_1.XmlElementNames.DictionaryValue], service);
            this.dictionary.addUpdate(parsedKey, parsedValue);
        }
    };
    /**
     * Gets the dictionary object.
     *
     * @param   {any}               jsonObject   The json object.
     * @param   {ExchangeService}   service      The service.
     * @return  {any}               the dictionary object
     */
    UserConfigurationDictionary.prototype.GetDictionaryObject = function (jsonObject, service) {
        if (jsonObject == null) {
            return null;
        }
        var type = UserConfigurationDictionary.GetObjectType(jsonObject[XmlElementNames_1.XmlElementNames.Type]);
        var values = this.GetObjectValue(EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsonObject, XmlElementNames_1.XmlElementNames.Value));
        return this.ConstructObject(type, values, service);
    };
    UserConfigurationDictionary.prototype.GetEnumerator = function () { return this.dictionary; };
    /**
     * Gets the type of the object.
     *
     * @param   {string}   type   The type.
     * @return  {UserConfigurationDictionaryObjectType}     UserConfigurationDictionaryObjectType for the string value
     */
    UserConfigurationDictionary.GetObjectType = function (type) {
        return UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType[type];
    };
    /**
     * Gets the object value.
     *
     * @param   {any[]}   valueArray   The value array.
     * @return  {string[]}  string array from object Array
     */
    UserConfigurationDictionary.prototype.GetObjectValue = function (valueArray) {
        var stringArray = [];
        for (var _i = 0, valueArray_1 = valueArray; _i < valueArray_1.length; _i++) {
            var value = valueArray_1[_i];
            stringArray.push(value);
        }
        return stringArray;
    };
    /**
     * Gets the type code.
     *
     * @param   {ExchangeServiceBase}                                   service                The service.
     * @param   {any}                                                   dictionaryObject       The dictionary object.
     * @param   {IRefParam<UserConfigurationDictionaryObjectType>}      dictionaryObjectType   Type of the dictionary object.
     * @param   {IRefParam<string>}                                     valueAsString          The value as string.
     */
    UserConfigurationDictionary.GetTypeCode = function (service, dictionaryObject, dictionaryObjectType, valueAsString) {
        // Handle all other types by TypeCode
        var typeofDictionaryObject = typeof dictionaryObject;
        if (typeofDictionaryObject === 'string') {
            dictionaryObjectType.setValue(UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.String);
            valueAsString.setValue(dictionaryObject);
        }
        else if (typeofDictionaryObject === 'boolean') {
            dictionaryObjectType.setValue(UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.Boolean);
            valueAsString.setValue(EwsUtilities_1.EwsUtilities.BoolToXSBool(dictionaryObject));
        }
        else if (typeofDictionaryObject === 'number') {
            var num = ExtensionMethods_1.Convert.toNumber(dictionaryObject);
            dictionaryObjectType.setValue(UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.Integer32);
            if (num >= 0 && num <= 255) {
                dictionaryObjectType.setValue(UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.Byte);
            }
            else if (num < 0 && num < -2147483648) {
                dictionaryObjectType.setValue(UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.Integer64);
            }
            else if (num >= 0 && num > 2147483647) {
                dictionaryObjectType.setValue(UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.UnsignedInteger64);
            }
            else if (num >= 0 && num <= 2147483647) {
                dictionaryObjectType.setValue(UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.UnsignedInteger32);
            }
            valueAsString.setValue(num.toString());
        }
        else if (dictionaryObject instanceof DateTime_1.DateTime) {
            dictionaryObjectType.setValue(UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.DateTime);
            valueAsString.setValue(service.ConvertDateTimeToUniversalDateTimeString(dictionaryObject));
        }
        else {
            EwsLogging_1.EwsLogging.Assert(false, "UserConfigurationDictionary.WriteObjectValueToXml", "Unsupported type: " + typeof dictionaryObject);
        }
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    UserConfigurationDictionary.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        this.CreateFromXMLJsObjectCollection(jsObject, service);
    };
    /**
     * Removes the element with the specified key from the user configuration dictionary.
     *
     * @param   {key}   key     The key of the element to remove.
     * @return  {boolean}       true if the element is successfully removed; otherwise false.
     */
    UserConfigurationDictionary.prototype.Remove = function (key) {
        var isRemoved = this.dictionary.remove(key);
        if (isRemoved) {
            this.Changed();
        }
        return isRemoved;
    };
    /**
     * Gets the value associated with the specified key.
     *
     * @param   {any}   key     The key whose value to get.
     * @param   {any}   value   When this method returns, the value associated with the specified key, if the key is found; otherwise, null.
     * @return  {boolean}       true if the user configuration dictionary contains the key; otherwise false.
     */
    UserConfigurationDictionary.prototype.TryGetValue = function (key, value) {
        return this.dictionary.tryGetValue(key, value);
    };
    /**
     * @internal Loads from XMLJsObject collection to update collection Items.
     *
     * @interface   IJsonCollectionDeserializer
     *
     * @param   {any}               jsObjectCollection   The XMLJsObject collection.
     * @param   {ExchangeService}   service          The service.
     */
    UserConfigurationDictionary.prototype.UpdateFromXMLJsObjectCollection = function (jsObjectCollection, service) { throw new Error("UserConfigurationDictionary.ts - UpdateFromJsonCollection : Not implemented."); };
    /**
     * Validate the array object.
     *
     * @param   {Array<any>}   dictionaryObjectAsArray   Object to validate
     */
    UserConfigurationDictionary.prototype.ValidateArrayObject = function (dictionaryObjectAsArray /*System.Array*/) {
        // // This logic is based on Microsoft.Exchange.Data.Storage.ConfigurationDictionary.CheckElementSupportedType().
        // if (dictionaryObjectAsArray as string[]) {
        //     if (dictionaryObjectAsArray.Length > 0) {
        //         for (let arrayElement of dictionaryObjectAsArray) {
        //             if (arrayElement == null) {
        //                 throw new ServiceLocalException(Strings.NullStringArrayElementInvalid);
        //             }
        //         }
        //     }
        //     else {
        //         throw new ServiceLocalException(Strings.ZeroLengthArrayInvalid);
        //     }
        // }
        // else if (dictionaryObjectAsArray as byte[]) {
        //     if (dictionaryObjectAsArray.Length <= 0) {
        //         throw new ServiceLocalException(Strings.ZeroLengthArrayInvalid);
        //     }
        // }
        // else {
        //     throw new ServiceLocalException(string.Format(Strings.ObjectTypeNotSupported, dictionaryObjectAsArray.GetType()));
        // }
        // This logic is based on Microsoft.Exchange.Data.Storage.ConfigurationDictionary.CheckElementSupportedType().
        if (dictionaryObjectAsArray.length > 0) {
            var firstNonEmptyElement = ExtensionMethods_1.ArrayHelper.Find(dictionaryObjectAsArray, function (item) { return item != null && typeof item !== 'undefined'; });
            if (!firstNonEmptyElement) {
                throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.NullStringArrayElementInvalid);
            }
            var arrayType = typeof firstNonEmptyElement;
            if (arrayType !== 'string' && arrayType !== 'number') {
                throw new ServiceLocalException_1.ServiceLocalException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ObjectTypeNotSupported, arrayType));
            }
            for (var _i = 0, dictionaryObjectAsArray_1 = dictionaryObjectAsArray; _i < dictionaryObjectAsArray_1.length; _i++) {
                var arrayElement = dictionaryObjectAsArray_1[_i];
                var elementType = typeof arrayElement;
                if (arrayElement && elementType != arrayType) {
                    throw new ServiceLocalException_1.ServiceLocalException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ObjectTypeNotSupported, "<" + elementType + "," + arrayType + ">"));
                }
                if (arrayType === 'string' && arrayElement == null) {
                    throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.NullStringArrayElementInvalid);
                }
            }
        }
        else {
            throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.ZeroLengthArrayInvalid);
        }
    };
    /**
     * Validates the specified key and value.
     *
     * @param   {any}   key     The dictionary entry key.
     * @param   {any}   value   The dictionary entry value.
     */
    UserConfigurationDictionary.prototype.ValidateEntry = function (key, value) {
        this.ValidateObject(key);
        this.ValidateObject(value);
    };
    /**
     * Validates the dictionary object (key or entry value).
     *
     * @param   {any}   dictionaryObject   Object to validate.
     */
    UserConfigurationDictionary.prototype.ValidateObject = function (dictionaryObject) {
        // Keys may not be null but we rely on the internal dictionary to throw if the key is null.
        if (dictionaryObject != null) {
            var dictionaryObjectAsArray = dictionaryObject;
            if (ExtensionMethods_1.ArrayHelper.isArray(dictionaryObjectAsArray)) //info: c# "as" keyword does not work here
             {
                this.ValidateArrayObject(dictionaryObjectAsArray);
            }
            else {
                this.ValidateObjectType(dictionaryObject);
            }
        }
    };
    /**
     * Validates the dictionary object type.
     *
     * @param   {any}   type   Type to validate.
     */
    UserConfigurationDictionary.prototype.ValidateObjectType = function (dictionaryObject /*System.Type*/) {
        var typeofDictionaryObject = typeof dictionaryObject;
        var type = null;
        if (typeofDictionaryObject === 'string') {
            type = UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.String;
        }
        else if (typeofDictionaryObject === 'boolean') {
            type = UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.Boolean;
        }
        else if (typeofDictionaryObject === 'number') {
            var num = ExtensionMethods_1.Convert.toNumber(dictionaryObject);
            type = UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.Integer32;
            if (num >= 0 && num <= 255) {
                type = UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.Byte;
            }
            else if (num < 0 && num < -2147483648) {
                type = UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.Integer64;
            }
            else if (num >= 0 && num > 2147483647) {
                type = UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.UnsignedInteger64;
            }
            else if (num >= 0 && num <= 2147483647) {
                type = UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.UnsignedInteger32;
            }
        }
        else if (dictionaryObject instanceof DateTime_1.DateTime) {
            type = UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.DateTime;
        }
        var isValidType = false;
        switch (type) {
            case UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.Boolean:
            case UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.Byte:
            case UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.DateTime:
            case UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.Integer32:
            case UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.Integer64:
            case UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.String:
            case UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.UnsignedInteger32:
            case UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.UnsignedInteger64:
                isValidType = true;
                break;
        }
        if (!isValidType) {
            throw new ServiceLocalException_1.ServiceLocalException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ObjectTypeNotSupported, type));
        }
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    UserConfigurationDictionary.prototype.WriteElementsToXml = function (writer) {
        EwsLogging_1.EwsLogging.Assert(writer != null, "UserConfigurationDictionary.WriteElementsToXml", "writer is null");
        for (var _i = 0, _a = this.dictionary.Items; _i < _a.length; _i++) {
            var dictionaryEntry = _a[_i];
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DictionaryEntry);
            this.WriteObjectToXml(writer, XmlElementNames_1.XmlElementNames.DictionaryKey, dictionaryEntry.key);
            this.WriteObjectToXml(writer, XmlElementNames_1.XmlElementNames.DictionaryValue, dictionaryEntry.value);
            writer.WriteEndElement();
        }
    };
    /**
     * Writes a dictionary entry type to Xml.
     *
     * @param   {EwsServiceXmlWriter}                       writer                 The writer.
     * @param   {UserConfigurationDictionaryObjectType}     dictionaryObjectType   Type to write.
     */
    UserConfigurationDictionary.prototype.WriteEntryTypeToXml = function (writer, dictionaryObjectType) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Type);
        writer.WriteValue(UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType[dictionaryObjectType], XmlElementNames_1.XmlElementNames.Type);
        writer.WriteEndElement();
    };
    /**
     * Writes a dictionary entry value to Xml.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     * @param   {string}                value    Value to write.
     */
    UserConfigurationDictionary.prototype.WriteEntryValueToXml = function (writer, value) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Value);
        // While an entry value can't be null, if the entry is an array, an element of the array can be null.
        if (value != null) {
            writer.WriteValue(value, XmlElementNames_1.XmlElementNames.Value);
        }
        writer.WriteEndElement();
    };
    /**
     * Writes a dictionary object (key or value) to Xml.
     *
     * @param   {EwsServiceXmlWriter}   writer             The writer.
     * @param   {string}                xmlElementName     The Xml element name.
     * @param   {any}                   dictionaryObject   The object to write.
     */
    UserConfigurationDictionary.prototype.WriteObjectToXml = function (writer, xmlElementName, dictionaryObject) {
        EwsLogging_1.EwsLogging.Assert(writer != null, "UserConfigurationDictionary.WriteObjectToXml", "writer is null");
        EwsLogging_1.EwsLogging.Assert(xmlElementName != null, "UserConfigurationDictionary.WriteObjectToXml", "xmlElementName is null");
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, xmlElementName);
        if (dictionaryObject == null) {
            EwsLogging_1.EwsLogging.Assert(xmlElementName != XmlElementNames_1.XmlElementNames.DictionaryKey, "UserConfigurationDictionary.WriteObjectToXml", "Key is null");
            writer.WriteAttributeValue(EwsUtilities_1.EwsUtilities.EwsXmlSchemaInstanceNamespacePrefix, XmlAttributeNames_1.XmlAttributeNames.Nil, EwsUtilities_1.EwsUtilities.XSTrue);
        }
        else {
            this.WriteObjectValueToXml(writer, dictionaryObject);
        }
        writer.WriteEndElement();
    };
    /**
     * Writes a dictionary Object's value to Xml.
     *
     * @param   {EwsServiceXmlWriter}   writer             The writer.
     * @param   {any}                   dictionaryObject   The dictionary object to write.
     */
    UserConfigurationDictionary.prototype.WriteObjectValueToXml = function (writer, dictionaryObject) {
        EwsLogging_1.EwsLogging.Assert(writer != null, "UserConfigurationDictionary.WriteObjectValueToXml", "writer is null");
        EwsLogging_1.EwsLogging.Assert(dictionaryObject != null, "UserConfigurationDictionary.WriteObjectValueToXml", "dictionaryObject is null");
        // This logic is based on Microsoft.Exchange.Services.Core.GetUserConfiguration.ConstructDictionaryObject().
        //
        // Object values are either:
        //   . an array of strings
        //   . a single value
        //
        // Single values can be:
        //   . base64 string (from a byte array)
        //   . datetime, boolean, byte, short, int, long, string, ushort, unint, ulong
        //
        //Assume string value for default
        var dictionaryObjectType = UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.String;
        var valueAsString = null;
        //First check for Array
        if (ExtensionMethods_1.ArrayHelper.isArray(dictionaryObject)) {
            // First check for a string array         
            var dictionaryObjectAsStringArray = ExtensionMethods_1.ArrayHelper.OfType(dictionaryObject, function (item) { return typeof item === 'string'; });
            if (dictionaryObjectAsStringArray.length > 0) {
                //array with string
                if (dictionaryObjectAsStringArray.length === dictionaryObject.length) {
                    //all array elements are string
                    this.WriteEntryTypeToXml(writer, UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.StringArray);
                    for (var _i = 0, dictionaryObjectAsStringArray_1 = dictionaryObjectAsStringArray; _i < dictionaryObjectAsStringArray_1.length; _i++) {
                        var arrayElement = dictionaryObjectAsStringArray_1[_i];
                        this.WriteEntryValueToXml(writer, arrayElement);
                    }
                }
                else {
                    throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.NullStringArrayElementInvalid);
                }
            }
            else {
                //check for byte[] for base64 conversion to single element //todo: byte[] conversion to base64 using Buffer
                var dictionaryObjectAsByteArray = ExtensionMethods_1.ArrayHelper.OfType(dictionaryObject, function (item) { return typeof item === 'number'; });
                if (dictionaryObjectAsByteArray.length > 0 && dictionaryObjectAsByteArray.length === dictionaryObject.length) {
                    // Convert byte array to base64 string
                    dictionaryObjectType = UserConfigurationDictionaryObjectType_1.UserConfigurationDictionaryObjectType.ByteArray;
                    valueAsString = ExtensionMethods_1.Convert.ToBase64String(dictionaryObjectAsByteArray);
                    this.WriteEntryTypeToXml(writer, dictionaryObjectType);
                    this.WriteEntryValueToXml(writer, valueAsString);
                }
                else {
                    throw new ServiceLocalException_1.ServiceLocalException(Strings_1.Strings.NullStringArrayElementInvalid);
                }
            }
        }
        else {
            // if not a string array, all other object values are returned as a single element
            var refDictionaryObjectType = { getValue: function () { return dictionaryObjectType; }, setValue: function (value) { dictionaryObjectType = value; } };
            var refValueAsString = { getValue: function () { return valueAsString; }, setValue: function (value) { valueAsString = value; } };
            UserConfigurationDictionary.GetTypeCode(writer.Service, dictionaryObject, refDictionaryObjectType, refValueAsString);
            this.WriteEntryTypeToXml(writer, refDictionaryObjectType.getValue());
            this.WriteEntryValueToXml(writer, refValueAsString.getValue());
        }
    };
    /**
     * required before initializing new UserConfigurationDictionary
     */
    UserConfigurationDictionary._dictionaryKeyPicker = function (key) { return key ? key.toString() : ''; };
    return UserConfigurationDictionary;
}(ComplexProperty_1.ComplexProperty));
exports.UserConfigurationDictionary = UserConfigurationDictionary;
