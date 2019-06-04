"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AltDictionary_1 = require("../AltDictionary");
var Guid_1 = require("../Guid");
var DateTime_1 = require("../DateTime");
var ExtensionMethods_1 = require("../ExtensionMethods");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var LazyMember_1 = require("../Core/LazyMember");
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var MapiPropertyType_1 = require("../Enumerations/MapiPropertyType");
var MapiTypeConverterTypeSystem_1 = require("../Enumerations/MapiTypeConverterTypeSystem");
var MapiTypeConverterMapEntry_1 = require("./MapiTypeConverterMapEntry");
var MapiTypeConverter = /** @class */ (function () {
    function MapiTypeConverter() {
    }
    Object.defineProperty(MapiTypeConverter, "MapiTypeConverterMap", {
        get: function () { return MapiTypeConverter.mapiTypeConverterMap.Member; },
        enumerable: true,
        configurable: true
    });
    MapiTypeConverter.ChangeType = function (mapiType, value) {
        EwsUtilities_1.EwsUtilities.ValidateParam(value, "value");
        return MapiTypeConverter.MapiTypeConverterMap.get(mapiType).ChangeType(value);
    };
    MapiTypeConverter.ConvertToString = function (mapiPropType, value) {
        return (value === null || value === undefined)
            ? ExtensionMethods_1.StringHelper.Empty
            : MapiTypeConverter.MapiTypeConverterMap.get(mapiPropType).ConvertToString(value);
    };
    MapiTypeConverter.ConvertToValue = function (mapiPropType, strings) {
        if (typeof strings === 'string') {
            return MapiTypeConverter.MapiTypeConverterMap.get(mapiPropType).ConvertToValue(strings);
        }
        else if (Array.isArray(strings)) {
            EwsUtilities_1.EwsUtilities.ValidateParam(strings, "strings");
            var typeConverter = MapiTypeConverter.MapiTypeConverterMap.get(mapiPropType);
            var array = []; // = Array.CreateInstance(typeConverter.Type, strings.length);
            var index = 0;
            for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
                var stringValue = strings_1[_i];
                var value = typeConverter.ConvertToValueOrDefault(stringValue);
                array.push(value);
            }
            return array;
        }
        throw new ArgumentException_1.ArgumentException("parameter not in correct type");
    };
    MapiTypeConverter.IsArrayType = function (mapiType) { return MapiTypeConverter.MapiTypeConverterMap.get(mapiType).IsArray; };
    MapiTypeConverter.ParseMapiIntegerValue = function (s) {
        var num = ExtensionMethods_1.Convert.toNumber(s);
        if (num === NaN) {
            return s;
        }
        return num;
    };
    MapiTypeConverter.UtcDataTimeStyles = DateTime_1.DateTimeStyles.AdjustToUniversal | DateTime_1.DateTimeStyles.AssumeUniversal;
    MapiTypeConverter.mapiTypeConverterMap = new LazyMember_1.LazyMember(function () {
        var map = new AltDictionary_1.Dictionary(function (k) { return k.toString(); });
        map.Add(MapiPropertyType_1.MapiPropertyType.ApplicationTime, new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.number, //double
        function (s) { return ExtensionMethods_1.Convert.toNumber(s); }, //Parse
        function (o) { return o.toString(); } //ConvertToString 
        ));
        map.Add(MapiPropertyType_1.MapiPropertyType.ApplicationTimeArray, new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.number, //double
        function (s) { return ExtensionMethods_1.Convert.toNumber(s); }, //Parse
        function (o) { return o.toString(); }, //ConvertToString
        true //IsArray
        ));
        var byteConverter = new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.byteArray, //byte[]
        function (s) { return ExtensionMethods_1.StringHelper.IsNullOrEmpty(s) ? null : ExtensionMethods_1.Convert.FromBase64String(s); }, //Parse
        function (o) { return ExtensionMethods_1.Convert.ToBase64String(o); } //ConvertToString
        );
        map.Add(MapiPropertyType_1.MapiPropertyType.Binary, byteConverter);
        var byteArrayConverter = new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.byteArray, //byte[]
        function (s) { return ExtensionMethods_1.StringHelper.IsNullOrEmpty(s) ? null : ExtensionMethods_1.Convert.FromBase64String(s); }, //Parse
        function (o) { return ExtensionMethods_1.Convert.ToBase64String(o); }, //ConvertToString
        true //IsArray
        );
        map.Add(MapiPropertyType_1.MapiPropertyType.BinaryArray, byteArrayConverter);
        var boolConverter = new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.boolean, function (s) { return ExtensionMethods_1.Convert.toBool(s); }, //Parse
        function (o) { return o.toString().toLowerCase(); } //ConvertToString
        );
        map.Add(MapiPropertyType_1.MapiPropertyType.Boolean, boolConverter);
        var clsidConverter = new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.guid, function (s) { return new Guid_1.Guid(s); }, //Parse
        function (o) { return o.ToString(); } //ConvertToString
        );
        map.Add(MapiPropertyType_1.MapiPropertyType.CLSID, clsidConverter);
        var clsidArrayConverter = new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.guid, function (s) { return new Guid_1.Guid(s); }, //Parse
        function (o) { return o.ToString(); }, //ConvertToString
        true //IsArray
        );
        map.Add(MapiPropertyType_1.MapiPropertyType.CLSIDArray, clsidArrayConverter);
        map.Add(MapiPropertyType_1.MapiPropertyType.Currency, new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.number, //Int64
        function (s) { return ExtensionMethods_1.Convert.toNumber(s); }, //Parse
        function (o) { return o.toString(); } //ConvertToString 
        ));
        map.Add(MapiPropertyType_1.MapiPropertyType.CurrencyArray, new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.number, //Int64
        function (s) { return ExtensionMethods_1.Convert.toNumber(s); }, //Parse
        function (o) { return o.toString(); }, //ConvertToString
        true //IsArray
        ));
        map.Add(MapiPropertyType_1.MapiPropertyType.Double, new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.number, //double
        function (s) { return ExtensionMethods_1.Convert.toNumber(s); }, //Parse
        function (o) { return o.toString(); } //ConvertToString 
        ));
        map.Add(MapiPropertyType_1.MapiPropertyType.DoubleArray, new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.number, //double
        function (s) { return ExtensionMethods_1.Convert.toNumber(s); }, //Parse
        function (o) { return o.toString(); }, //ConvertToString
        true //IsArray
        ));
        map.Add(MapiPropertyType_1.MapiPropertyType.Error, new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.number, //Int32
        function (s) { return ExtensionMethods_1.Convert.toNumber(s); }, //Parse
        function (o) { return o.toString(); } //ConvertToString 
        ));
        map.Add(MapiPropertyType_1.MapiPropertyType.Float, new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.number, //float
        function (s) { return ExtensionMethods_1.Convert.toNumber(s); }, //Parse
        function (o) { return o.toString(); } //ConvertToString 
        ));
        map.Add(MapiPropertyType_1.MapiPropertyType.FloatArray, new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.number, //float
        function (s) { return ExtensionMethods_1.Convert.toNumber(s); }, //Parse
        function (o) { return o.toString(); }, //ConvertToString
        true //IsArray
        ));
        map.Add(MapiPropertyType_1.MapiPropertyType.Integer, new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.number, //Int32
        function (s) { return MapiTypeConverter.ParseMapiIntegerValue(s); }, //Parse
        function (o) { return o.toString(); } //ConvertToString 
        ));
        map.Add(MapiPropertyType_1.MapiPropertyType.IntegerArray, new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.number, //Int32
        function (s) { return ExtensionMethods_1.Convert.toNumber(s); }, //Parse //ref: check if latest ews managed api code changes this to same as Integer property type above
        function (o) { return o.toString(); }, //ConvertToString
        true //IsArray
        ));
        map.Add(MapiPropertyType_1.MapiPropertyType.Long, new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.number, //Int64
        function (s) { return ExtensionMethods_1.Convert.toNumber(s); }, //Parse
        function (o) { return o.toString(); } //ConvertToString 
        ));
        map.Add(MapiPropertyType_1.MapiPropertyType.LongArray, new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.number, //Int64
        function (s) { return ExtensionMethods_1.Convert.toNumber(s); }, //Parse
        function (o) { return o.toString(); }, //ConvertToString
        true //IsArray
        ));
        var objectConverter = new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.string, function (s) { return s; }, //Parse
        function (o) { return o.toString(); } //ConvertToString
        );
        map.Add(MapiPropertyType_1.MapiPropertyType.Object, objectConverter);
        var objectArrayConverter = new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.string, function (s) { return s; }, //Parse
        function (o) { return o.toString(); }, //ConvertToString
        true //IsArray
        );
        map.Add(MapiPropertyType_1.MapiPropertyType.ObjectArray, objectArrayConverter);
        map.Add(MapiPropertyType_1.MapiPropertyType.Short, new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.number, //short
        function (s) { return ExtensionMethods_1.Convert.toNumber(s); }, //Parse
        function (o) { return o.toString(); } //ConvertToString 
        ));
        map.Add(MapiPropertyType_1.MapiPropertyType.ShortArray, new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.number, //short
        function (s) { return ExtensionMethods_1.Convert.toNumber(s); }, //Parse
        function (o) { return o.toString(); }, //ConvertToString
        true //IsArray
        ));
        var stringConverter = new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.string, function (s) { return s; }, //Parse
        function (o) { return o.toString(); } //ConvertToString
        );
        map.Add(MapiPropertyType_1.MapiPropertyType.String, stringConverter);
        var stringArrayConverter = new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.string, function (s) { return s; }, //Parse
        function (o) { return o.toString(); }, //ConvertToString
        true //IsArray
        );
        map.Add(MapiPropertyType_1.MapiPropertyType.StringArray, stringArrayConverter);
        var sysTimeConverter = new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.DateTime, function (s) { return DateTime_1.DateTime.Parse(s); }, //Parse //ref: UtcDataTimeStyles not used, always utc, timezone not implemented
        function (o) { return EwsUtilities_1.EwsUtilities.DateTimeToXSDateTime(o); } //ConvertToString
        );
        map.Add(MapiPropertyType_1.MapiPropertyType.SystemTime, sysTimeConverter);
        var sysTimeArrayConverter = new MapiTypeConverterMapEntry_1.MapiTypeConverterMapEntry(MapiTypeConverterTypeSystem_1.MapiTypeConverterTypeSystem.DateTime, function (s) { return DateTime_1.DateTime.Parse(s); }, //Parse //ref: UtcDataTimeStyles not used, always utc, timezone not implemented
        function (o) { return EwsUtilities_1.EwsUtilities.DateTimeToXSDateTime(o); }, //ConvertToString
        true //IsArray
        );
        map.Add(MapiPropertyType_1.MapiPropertyType.SystemTimeArray, sysTimeArrayConverter);
        return map;
    });
    return MapiTypeConverter;
}());
exports.MapiTypeConverter = MapiTypeConverter;
