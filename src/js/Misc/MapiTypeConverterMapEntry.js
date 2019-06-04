"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MapiTypeConverterTypeSystem_1 = require("../Enumerations/MapiTypeConverterTypeSystem");
var ExtensionMethods_1 = require("../ExtensionMethods");
var EwsLogging_1 = require("../Core/EwsLogging");
var LazyMember_1 = require("../Core/LazyMember");
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var ServiceXmlDeserializationException_1 = require("../Exceptions/ServiceXmlDeserializationException");
var AltDictionary_1 = require("../AltDictionary");
var Guid_1 = require("../Guid");
var DateTime_1 = require("../DateTime");
var Strings_1 = require("../Strings");
var MapiTypeConverterMapEntry = /** @class */ (function () {
    function MapiTypeConverterMapEntry(type, parseMethod, convertToStringMethod, isArray) {
        if (isArray === void 0) { isArray = false; }
        this.Parse = null;
        this.ConvertToString = null;
        this.Type = MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.boolean;
        this.IsArray = false;
        EwsLogging_1.EwsLogging.Assert(MapiTypeConverterMapEntry.defaultValueMap.Member.containsKey(type), "MapiTypeConverterMapEntry ctor", ExtensionMethods_1.StringHelper.Format("No default value entry for type {0}", MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem[type]));
        this.Type = type;
        this.ConvertToString = convertToStringMethod;
        this.Parse = parseMethod;
        this.IsArray = isArray;
    }
    Object.defineProperty(MapiTypeConverterMapEntry.prototype, "DefaultValue", {
        get: function () { return MapiTypeConverterMapEntry.defaultValueMap.Member.get(this.Type); },
        enumerable: true,
        configurable: true
    });
    MapiTypeConverterMapEntry.prototype.ChangeType = function (value) {
        var sourcetype = typeof value;
        if (sourcetype === typeof null) {
            try {
                sourcetype = value.constructor.name;
            }
            catch (ex) { }
        }
        EwsLogging_1.EwsLogging.Assert(false, "MapiTypeConverterMapEntry.ChangeType", ExtensionMethods_1.StringHelper.Format("Not Implemented to convert type from one to another. instance Type: {0}, source Type: {1}", MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem[this.Type], sourcetype));
        return value;
    };
    MapiTypeConverterMapEntry.prototype.ConvertToValue = function (stringValue) {
        try {
            return this.Parse(stringValue);
        }
        catch (ex) {
            throw new ServiceXmlDeserializationException_1.ServiceXmlDeserializationException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ValueCannotBeConverted, stringValue, this.Type), ex);
        }
    };
    MapiTypeConverterMapEntry.prototype.ConvertToValueOrDefault = function (stringValue) { return ExtensionMethods_1.StringHelper.IsNullOrEmpty(stringValue) ? this.DefaultValue : this.ConvertToValue(stringValue); };
    MapiTypeConverterMapEntry.prototype.ValidateValueAsArray = function (value) {
        var array = value;
        if (array == null) {
            throw new ArgumentException_1.ArgumentException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.IncompatibleTypeForArray, value.GetType(), this.Type));
        }
        else if (ExtensionMethods_1.ArrayHelper.Rank(array) != 1) {
            throw new ArgumentException_1.ArgumentException(Strings_1.Strings.ArrayMustHaveSingleDimension);
        }
        else if (array.length == 0) {
            throw new ArgumentException_1.ArgumentException(Strings_1.Strings.ArrayMustHaveAtLeastOneElement);
        }
        // else if (array.GetType().GetElementType() != this.Type)
        // {
        //     throw new ArgumentException(
        //         StringHelper.Format(
        //             Strings.IncompatibleTypeForArray,
        //             value.GetType(),
        //             this.Type));
        // }
    };
    MapiTypeConverterMapEntry.defaultValueMap = new LazyMember_1.LazyMember(function () {
        var map = new AltDictionary_1.DictionaryWithNumericKey();
        map.Add(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.boolean, false);
        map.Add(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.byteArray, null);
        map.Add(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.number, 0);
        map.Add(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.DateTime, DateTime_1.DateTime.MinValue);
        map.Add(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.guid, Guid_1.Guid.Empty);
        map.Add(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.string, null);
        return map;
    });
    return MapiTypeConverterMapEntry;
}());
exports.MapiTypeConverterMapEntry = MapiTypeConverterMapEntry;
