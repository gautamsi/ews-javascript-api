import { ArrayHelper, Convert, StringHelper } from "../ExtensionMethods";
import { DateTime } from '../DateTime';
import { Dictionary } from '../AltDictionary';
import { EwsLogging } from '../Core/EwsLogging';
import { EwsServiceJsonReader } from '../Core/EwsServiceJsonReader';
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { EwsUtilities } from '../Core/EwsUtilities';
import { ExchangeService } from "../Core/ExchangeService";
import { ExchangeServiceBase } from "../Core/ExchangeServiceBase";
import { IOutParam } from '../Interfaces/IOutParam';
import { IRefParam } from '../Interfaces/IRefParam';
import { ServiceLocalException } from '../Exceptions/ServiceLocalException';
import { Strings } from '../Strings';
import { UserConfigurationDictionaryObjectType } from "../Enumerations/UserConfigurationDictionaryObjectType";
import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

import { ComplexProperty } from "./ComplexProperty";
/**
 * Represents a user configuration's Dictionary property.
 * 
 * @sealed
 */
export class UserConfigurationDictionary extends ComplexProperty {//IEnumerable, IJsonCollectionDeserializer

    /**
     * required before initializing new UserConfigurationDictionary
     */
    public static _dictionaryKeyPicker: (key) => string = (key) => { return key ? key.toString() : '' }
    private dictionary: Dictionary<any, any> = null;
    private isDirty: boolean = false;

    /**
     * Gets the number of elements in the user configuration dictionary.
     */
    get Count(): number {
        return this.dictionary.Count;
    }

    /**
     * @internal Gets or sets the isDirty flag.
     */
    get IsDirty(): boolean {
        return this.isDirty;
    }
    set IsDirty(value: boolean) {
        this.isDirty = value;
    }

    /**
     * @internal Initializes a new instance of **UserConfigurationDictionary** class.
     */
    constructor() {
        super();
        this.dictionary = new Dictionary<any, any>(UserConfigurationDictionary._dictionaryKeyPicker);
    }

    /**
     * Gets or sets the element with the specified key.
     *
     * @param   {string | DateTime | boolean | number}                          key   The key of the element to get or set.
     * @return  {DateTime | string | number | boolean | string[] | number[]}    The element with the specified key.
     */
    _getItem(key: string | DateTime | boolean | number): DateTime | string | number | boolean | string[] | number[] {
        return this.dictionary.get(key);
    }

    /**
     * Gets or sets the element with the specified key.
     *
     * @param   {string | DateTime | boolean | number}                          key     The key of the element to get or set.
     * @param  {DateTime | string | number | boolean | string[] | number[]}     value    The element value to update at specified key.
     */
    _setItem(key: string | DateTime | boolean | number, value: DateTime | string | number | boolean | string[] | number[]): void {
        this.ValidateEntry(key, value);
        this.dictionary.set(key, value);
        this.Changed();
    }

    /**
     * Adds an element with the provided key and value to the user configuration dictionary.
     *
     * @param   {string | DateTime | boolean | number}                          key     The object to use as the key of the element to add. **Restrict usage of byteArray or complex type for key, consider using string and number only**.
     * @param   {DateTime | string | number | boolean | string[] | number[]}    value   The object to use as the value of the element to add.
     */
    Add(key: string | DateTime | boolean | number, value: DateTime | string | number | boolean | string[] | number[]): void {
        this.ValidateEntry(key, value);

        this.dictionary.Add(key, value);

        this.Changed();
    }

    /**
     * @internal Instance was changed.
     */
    Changed(): void {
        super.Changed();

        this.isDirty = true;
    }

    /**
     * Removes all items from the user configuration dictionary.
     */
    Clear(): void {
        if (this.dictionary.Count != 0) {
            this.dictionary.clear();

            this.Changed();
        }
    }

    /**
     * Constructs a dictionary object (key or entry value) from the specified type and string list.
     *
     * @param   {UserConfigurationDictionaryObjectType}     type      Object type to construct.
     * @param   {string[]}                                  value     Value of the dictionary object as a string list
     * @param   {ExchangeService}                           service   The service.
     * @return  {any}                                       Dictionary object.
     */
    private ConstructObject(type: UserConfigurationDictionaryObjectType, value: string[] /*System.Collections.Generic.List<string>*/, service: ExchangeService): any {
        EwsLogging.Assert(
            value != null,
            "UserConfigurationDictionary.ConstructObject",
            "value is null");
        EwsLogging.Assert(
            (value.length == 1 || type == UserConfigurationDictionaryObjectType.StringArray),
            "UserConfigurationDictionary.ConstructObject",
            "value is array but type is not StringArray");

        let dictionaryObject: any = null;

        switch (type) {
            case UserConfigurationDictionaryObjectType.Boolean:
                dictionaryObject = Convert.toBool(value[0]);
                break;

            case UserConfigurationDictionaryObjectType.Byte:
                dictionaryObject = Convert.toNumber(value[0]); //info: byte is number, no Byte type in js 
                break;

            case UserConfigurationDictionaryObjectType.ByteArray:
                dictionaryObject = value[0]; //Convert.FromBase64String(value[0]); //info: ByteArray is base64 string here, avoiding binary value here
                break;

            case UserConfigurationDictionaryObjectType.DateTime:
                let dateTime: DateTime = service.ConvertUniversalDateTimeStringToLocalDateTime(value[0]);

                if (dateTime) {
                    dictionaryObject = dateTime;
                }
                else {
                    EwsLogging.Assert(
                        false,
                        "UserConfigurationDictionary.ConstructObject",
                        "DateTime is null");
                }

                break;

            case UserConfigurationDictionaryObjectType.Integer32:
                dictionaryObject = Convert.toNumber(value[0]);
                break;

            case UserConfigurationDictionaryObjectType.Integer64:
                dictionaryObject = Convert.toNumber(value[0]);
                break;

            case UserConfigurationDictionaryObjectType.String:
                dictionaryObject = value[0];
                break;

            case UserConfigurationDictionaryObjectType.StringArray:
                dictionaryObject = value;
                break;

            case UserConfigurationDictionaryObjectType.UnsignedInteger32:
                dictionaryObject = Convert.toNumber(value[0]);
                break;

            case UserConfigurationDictionaryObjectType.UnsignedInteger64:
                dictionaryObject = Convert.toNumber(value[0]);
                break;

            default:
                EwsLogging.Assert(
                    false,
                    "UserConfigurationDictionary.ConstructObject",
                    "Type not recognized: " + UserConfigurationDictionaryObjectType[<any>type]);
                break;
        }

        return dictionaryObject;
    }

    /**
     * Determines whether the user configuration dictionary contains an element with the specified key.
     *
     * @param   {any}   key     The key to locate in the user configuration dictionary.
     * @return  {boolean}       true if the user configuration dictionary contains an element with the key; otherwise false.
     */
    ContainsKey(key: any): boolean {
        return this.dictionary.containsKey(key);
    }

    /**
     * @internal Loads from XMLJsObject collection to create a new collection item.
     *
     * @interface   IJsonCollectionDeserializer
     * 
     * @param   {any}               jsObjectCollection   The json collection.
     * @param   {ExchangeService}   service          The service.
     */
    CreateFromXMLJsObjectCollection(jsObjectCollection: any, service: ExchangeService): void {
        let collection: any[] = EwsServiceJsonReader.ReadAsArray(jsObjectCollection, XmlElementNames.DictionaryEntry);

        for (let jsonEntry of collection) {
            let parsedKey: any = this.GetDictionaryObject(jsonEntry[XmlElementNames.DictionaryKey], service);
            let parsedValue: any = this.GetDictionaryObject(jsonEntry[XmlElementNames.DictionaryValue], service);
            this.dictionary.addUpdate(parsedKey, parsedValue);
        }
    }

    /**
     * Gets the dictionary object.
     *
     * @param   {any}               jsonObject   The json object.
     * @param   {ExchangeService}   service      The service.
     * @return  {any}               the dictionary object
     */
    private GetDictionaryObject(jsonObject: any, service: ExchangeService): any {
        if (jsonObject == null) {
            return null;
        }

        let type: UserConfigurationDictionaryObjectType = UserConfigurationDictionary.GetObjectType(jsonObject[XmlElementNames.Type]);

        let values: string[] = this.GetObjectValue(EwsServiceJsonReader.ReadAsArray(jsonObject, XmlElementNames.Value));

        return this.ConstructObject(type, values, service);
    }


    GetEnumerator(): Dictionary<any, any> { return this.dictionary; }

    /**
     * Gets the type of the object.
     *
     * @param   {string}   type   The type.
     * @return  {UserConfigurationDictionaryObjectType}     UserConfigurationDictionaryObjectType for the string value
     */
    private static GetObjectType(type: string): UserConfigurationDictionaryObjectType {
        return UserConfigurationDictionaryObjectType[type];
    }

    /**
     * Gets the object value.
     *
     * @param   {any[]}   valueArray   The value array.
     * @return  {string[]}  string array from object Array
     */
    private GetObjectValue(valueArray: any[]): string[] /*System.Collections.Generic.List<string>*/ {
        let stringArray: string[] = [];

        for (let value of valueArray) {
            stringArray.push(value as string);
        }

        return stringArray;
    }

    /**
     * Gets the type code.
     *
     * @param   {ExchangeServiceBase}                                   service                The service.
     * @param   {any}                                                   dictionaryObject       The dictionary object.
     * @param   {IRefParam<UserConfigurationDictionaryObjectType>}      dictionaryObjectType   Type of the dictionary object.
     * @param   {IRefParam<string>}                                     valueAsString          The value as string.
     */
    private static GetTypeCode(service: ExchangeServiceBase, dictionaryObject: any, dictionaryObjectType: IRefParam<UserConfigurationDictionaryObjectType>, valueAsString: IRefParam<string>): void {
        // Handle all other types by TypeCode

        let typeofDictionaryObject: string = typeof dictionaryObject;

        if (typeofDictionaryObject === 'string') {
            dictionaryObjectType.setValue(UserConfigurationDictionaryObjectType.String);
            valueAsString.setValue(dictionaryObject);
        }
        else if (typeofDictionaryObject === 'boolean') {
            dictionaryObjectType.setValue(UserConfigurationDictionaryObjectType.Boolean);
            valueAsString.setValue(EwsUtilities.BoolToXSBool(dictionaryObject));
        }
        else if (typeofDictionaryObject === 'number') {
            let num: number = Convert.toNumber(dictionaryObject);
            dictionaryObjectType.setValue(UserConfigurationDictionaryObjectType.Integer32);
            if (num >= 0 && num <= 255) {
                dictionaryObjectType.setValue(UserConfigurationDictionaryObjectType.Byte);
            }
            else if (num < 0 && num < -2147483648) {
                dictionaryObjectType.setValue(UserConfigurationDictionaryObjectType.Integer64);
            }
            else if (num >= 0 && num > 2147483647) {
                dictionaryObjectType.setValue(UserConfigurationDictionaryObjectType.UnsignedInteger64);
            }
            else if (num >= 0 && num <= 2147483647) {
                dictionaryObjectType.setValue(UserConfigurationDictionaryObjectType.UnsignedInteger32);
            }

            valueAsString.setValue(num.toString());
        }
        else if (dictionaryObject instanceof DateTime) {
            dictionaryObjectType.setValue(UserConfigurationDictionaryObjectType.DateTime);
            valueAsString.setValue(service.ConvertDateTimeToUniversalDateTimeString(dictionaryObject));
        }
        else {
            EwsLogging.Assert(
                false,
                "UserConfigurationDictionary.WriteObjectValueToXml",
                "Unsupported type: " + typeof dictionaryObject);
        }
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        this.CreateFromXMLJsObjectCollection(jsObject, service);
    }

    /**
     * Removes the element with the specified key from the user configuration dictionary.
     *
     * @param   {key}   key     The key of the element to remove.
     * @return  {boolean}       true if the element is successfully removed; otherwise false.
     */
    Remove(key: any): boolean {
        let isRemoved: boolean = this.dictionary.remove(key);

        if (isRemoved) {
            this.Changed();
        }

        return isRemoved;
    }

    /**
     * Gets the value associated with the specified key.
     *
     * @param   {any}   key     The key whose value to get.
     * @param   {any}   value   When this method returns, the value associated with the specified key, if the key is found; otherwise, null.
     * @return  {boolean}       true if the user configuration dictionary contains the key; otherwise false.
     */
    TryGetValue(key: any, value: IOutParam<any>): boolean {
        return this.dictionary.tryGetValue(key, value);
    }

    /**
     * @internal Loads from XMLJsObject collection to update collection Items.
     *
     * @interface   IJsonCollectionDeserializer
     * 
     * @param   {any}               jsObjectCollection   The XMLJsObject collection.
     * @param   {ExchangeService}   service          The service.
     */
    UpdateFromXMLJsObjectCollection(jsObjectCollection: any, service: ExchangeService): void { throw new Error("UserConfigurationDictionary.ts - UpdateFromJsonCollection : Not implemented."); }

    /**
     * Validate the array object.
     *
     * @param   {Array<any>}   dictionaryObjectAsArray   Object to validate
     */
    private ValidateArrayObject(dictionaryObjectAsArray: Array<any> /*System.Array*/): void {
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
            let firstNonEmptyElement = ArrayHelper.Find(dictionaryObjectAsArray, (item) => { return item != null && typeof item !== 'undefined' });
            if (!firstNonEmptyElement) {
                throw new ServiceLocalException(Strings.NullStringArrayElementInvalid);
            }

            let arrayType: string = typeof firstNonEmptyElement;
            if (arrayType !== 'string' && arrayType !== 'number') {
                throw new ServiceLocalException(StringHelper.Format(Strings.ObjectTypeNotSupported, arrayType));
            }

            for (let arrayElement of dictionaryObjectAsArray) {
                let elementType: string = typeof arrayElement;
                if (arrayElement && elementType != arrayType) {
                    throw new ServiceLocalException(StringHelper.Format(Strings.ObjectTypeNotSupported, "<" + elementType + "," + arrayType + ">"));
                }

                if (arrayType === 'string' && arrayElement == null) {
                    throw new ServiceLocalException(Strings.NullStringArrayElementInvalid);
                }
            }
        }
        else {
            throw new ServiceLocalException(Strings.ZeroLengthArrayInvalid);
        }
    }

    /**
     * Validates the specified key and value.
     *
     * @param   {any}   key     The dictionary entry key.
     * @param   {any}   value   The dictionary entry value.
     */
    private ValidateEntry(key: any, value: any): void {
        this.ValidateObject(key);
        this.ValidateObject(value);
    }

    /**
     * Validates the dictionary object (key or entry value).
     *
     * @param   {any}   dictionaryObject   Object to validate.
     */
    private ValidateObject(dictionaryObject: any): void {
        // Keys may not be null but we rely on the internal dictionary to throw if the key is null.
        if (dictionaryObject != null) {
            let dictionaryObjectAsArray: Array<any> = dictionaryObject as Array<any>;
            if (ArrayHelper.isArray(dictionaryObjectAsArray)) //info: c# "as" keyword does not work here
            {
                this.ValidateArrayObject(dictionaryObjectAsArray);
            }
            else {
                this.ValidateObjectType(dictionaryObject);
            }
        }
    }

    /**
     * Validates the dictionary object type.
     *
     * @param   {any}   type   Type to validate.
     */
    private ValidateObjectType(dictionaryObject: any/*System.Type*/): void {

        let typeofDictionaryObject: string = typeof dictionaryObject;
        let type: UserConfigurationDictionaryObjectType = null;
        if (typeofDictionaryObject === 'string') {
            type = UserConfigurationDictionaryObjectType.String;
        }
        else if (typeofDictionaryObject === 'boolean') {
            type = UserConfigurationDictionaryObjectType.Boolean;
        }
        else if (typeofDictionaryObject === 'number') {
            let num: number = Convert.toNumber(dictionaryObject);
            type = UserConfigurationDictionaryObjectType.Integer32;
            if (num >= 0 && num <= 255) {
                type = UserConfigurationDictionaryObjectType.Byte;
            }
            else if (num < 0 && num < -2147483648) {
                type = UserConfigurationDictionaryObjectType.Integer64;
            }
            else if (num >= 0 && num > 2147483647) {
                type = UserConfigurationDictionaryObjectType.UnsignedInteger64;
            }
            else if (num >= 0 && num <= 2147483647) {
                type = UserConfigurationDictionaryObjectType.UnsignedInteger32;
            }
        }
        else if (dictionaryObject instanceof DateTime) {
            type = UserConfigurationDictionaryObjectType.DateTime;
        }

        let isValidType: boolean = false;

        switch (type) {
            case UserConfigurationDictionaryObjectType.Boolean:
            case UserConfigurationDictionaryObjectType.Byte:
            case UserConfigurationDictionaryObjectType.DateTime:
            case UserConfigurationDictionaryObjectType.Integer32:
            case UserConfigurationDictionaryObjectType.Integer64:
            case UserConfigurationDictionaryObjectType.String:
            case UserConfigurationDictionaryObjectType.UnsignedInteger32:
            case UserConfigurationDictionaryObjectType.UnsignedInteger64:
                isValidType = true;
                break;
        }

        if (!isValidType) {
            throw new ServiceLocalException(StringHelper.Format(Strings.ObjectTypeNotSupported, type));
        }

    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        EwsLogging.Assert(
            writer != null,
            "UserConfigurationDictionary.WriteElementsToXml",
            "writer is null");

        for (let dictionaryEntry of this.dictionary.Items) {
            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.DictionaryEntry);

            this.WriteObjectToXml(
                writer,
                XmlElementNames.DictionaryKey,
                dictionaryEntry.key);

            this.WriteObjectToXml(
                writer,
                XmlElementNames.DictionaryValue,
                dictionaryEntry.value);

            writer.WriteEndElement();
        }
    }

    /**
     * Writes a dictionary entry type to Xml.
     *
     * @param   {EwsServiceXmlWriter}                       writer                 The writer.
     * @param   {UserConfigurationDictionaryObjectType}     dictionaryObjectType   Type to write.
     */
    private WriteEntryTypeToXml(writer: EwsServiceXmlWriter, dictionaryObjectType: UserConfigurationDictionaryObjectType): void {
        writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Type);
        writer.WriteValue(UserConfigurationDictionaryObjectType[dictionaryObjectType], XmlElementNames.Type);
        writer.WriteEndElement();
    }

    /**
     * Writes a dictionary entry value to Xml.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     * @param   {string}                value    Value to write.
     */
    private WriteEntryValueToXml(writer: EwsServiceXmlWriter, value: string): void {
        writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Value);

        // While an entry value can't be null, if the entry is an array, an element of the array can be null.
        if (value != null) {
            writer.WriteValue(value, XmlElementNames.Value);
        }

        writer.WriteEndElement();
    }

    /**
     * Writes a dictionary object (key or value) to Xml.
     *
     * @param   {EwsServiceXmlWriter}   writer             The writer.
     * @param   {string}                xmlElementName     The Xml element name.
     * @param   {any}                   dictionaryObject   The object to write.
     */
    private WriteObjectToXml(writer: EwsServiceXmlWriter, xmlElementName: string, dictionaryObject: any): void {
        EwsLogging.Assert(
            writer != null,
            "UserConfigurationDictionary.WriteObjectToXml",
            "writer is null");
        EwsLogging.Assert(
            xmlElementName != null,
            "UserConfigurationDictionary.WriteObjectToXml",
            "xmlElementName is null");

        writer.WriteStartElement(XmlNamespace.Types, xmlElementName);

        if (dictionaryObject == null) {
            EwsLogging.Assert(
                xmlElementName != XmlElementNames.DictionaryKey,
                "UserConfigurationDictionary.WriteObjectToXml",
                "Key is null");

            writer.WriteAttributeValue(
                EwsUtilities.EwsXmlSchemaInstanceNamespacePrefix,
                XmlAttributeNames.Nil,
                EwsUtilities.XSTrue);
        }
        else {
            this.WriteObjectValueToXml(writer, dictionaryObject);
        }

        writer.WriteEndElement();
    }

    /**
     * Writes a dictionary Object's value to Xml.
     *
     * @param   {EwsServiceXmlWriter}   writer             The writer.
     * @param   {any}                   dictionaryObject   The dictionary object to write.
     */
    private WriteObjectValueToXml(writer: EwsServiceXmlWriter, dictionaryObject: any): void {
        EwsLogging.Assert(
            writer != null,
            "UserConfigurationDictionary.WriteObjectValueToXml",
            "writer is null");
        EwsLogging.Assert(
            dictionaryObject != null,
            "UserConfigurationDictionary.WriteObjectValueToXml",
            "dictionaryObject is null");

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
        let dictionaryObjectType: UserConfigurationDictionaryObjectType = UserConfigurationDictionaryObjectType.String;
        let valueAsString: string = null;

        //First check for Array
        if (ArrayHelper.isArray(dictionaryObject)) {

            // First check for a string array         

            let dictionaryObjectAsStringArray: string[] = ArrayHelper.OfType<string, string>(dictionaryObject, (item) => { return typeof item === 'string' });
            if (dictionaryObjectAsStringArray.length > 0) {
                //array with string
                if (dictionaryObjectAsStringArray.length === dictionaryObject.length) {
                    //all array elements are string
                    this.WriteEntryTypeToXml(writer, UserConfigurationDictionaryObjectType.StringArray);

                    for (let arrayElement of dictionaryObjectAsStringArray) {
                        this.WriteEntryValueToXml(writer, arrayElement);
                    }
                }
                else {
                    throw new ServiceLocalException(Strings.NullStringArrayElementInvalid);
                }
            }
            //check for byte[] for base64 conversion to single element //todo: byte[] conversion to base64 using Buffer
            let dictionaryObjectAsByteArray: number[] = ArrayHelper.OfType<number, number>(dictionaryObject, (item) => { return typeof item === 'number' });
            if (dictionaryObjectAsByteArray.length > 0 && dictionaryObjectAsByteArray.length === dictionaryObject.length) {
                // Convert byte array to base64 string
                dictionaryObjectType = UserConfigurationDictionaryObjectType.ByteArray;
                valueAsString = Convert.ToBase64String(dictionaryObjectAsByteArray);
                this.WriteEntryTypeToXml(writer, dictionaryObjectType);
                this.WriteEntryValueToXml(writer, valueAsString);
            } else {
                throw new ServiceLocalException(Strings.NullStringArrayElementInvalid);
            }
        }
        else {
            // if not a string array, all other object values are returned as a single element
            let refDictionaryObjectType: IRefParam<UserConfigurationDictionaryObjectType> = { getValue: () => { return dictionaryObjectType; }, setValue: (value) => { dictionaryObjectType = value; } };
            let refValueAsString: IRefParam<string> = { getValue: () => { return valueAsString; }, setValue: (value) => { valueAsString = value } };
            UserConfigurationDictionary.GetTypeCode(writer.Service, dictionaryObject, refDictionaryObjectType, refValueAsString);
            this.WriteEntryTypeToXml(writer, refDictionaryObjectType.getValue());
            this.WriteEntryValueToXml(writer, refValueAsString.getValue());
        }
    }
}