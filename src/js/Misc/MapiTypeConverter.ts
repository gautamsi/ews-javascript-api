import {Dictionary} from "../AltDictionary";
import {Guid} from "../Guid";
import {DateTime, DateTimeStyles} from "../DateTime";
import {StringHelper, ArrayHelper, Convert} from "../ExtensionMethods";
import {EwsUtilities} from "../Core/EwsUtilities";
import {LazyMember} from "../Core/LazyMember";
import {ArgumentException} from "../Exceptions/ArgumentException";
import {MapiPropertyType} from "../Enumerations/MapiPropertyType";
import {MapiTypeConverterTypeSystem} from "../Enumerations/MapiTypeConverterTypeSystem";
import {MapiTypeConverterMapEntry} from "./MapiTypeConverterMapEntry";
export type MapiTypeConverterMap = Dictionary<MapiPropertyType, MapiTypeConverterMapEntry>;
export class MapiTypeConverter {
    private static UtcDataTimeStyles: DateTimeStyles = DateTimeStyles.AdjustToUniversal | DateTimeStyles.AssumeUniversal;
    static get MapiTypeConverterMap(): MapiTypeConverterMap { return MapiTypeConverter.mapiTypeConverterMap.Member; }
    private static mapiTypeConverterMap: LazyMember<MapiTypeConverterMap> = new LazyMember<MapiTypeConverterMap>(() => {

        var map: MapiTypeConverterMap = new Dictionary<MapiPropertyType, MapiTypeConverterMapEntry>((k) => k.toString());
        map.Add(
            MapiPropertyType.ApplicationTime,
            new MapiTypeConverterMapEntry(
                MapiTypeConverterTypeSystem.number, //double
                (s) => Convert.toNumber(s),         //Parse
                (o) => o.toString()                 //ConvertToString 
                ));

        map.Add(
            MapiPropertyType.ApplicationTimeArray,
            new MapiTypeConverterMapEntry(
                MapiTypeConverterTypeSystem.number, //double
                (s) => Convert.toNumber(s),         //Parse
                (o) => o.toString(),                //ConvertToString
                true                                //IsArray
                ));

        var byteConverter = new MapiTypeConverterMapEntry(
            MapiTypeConverterTypeSystem.byteArray,                                      //byte[]
            (s) => StringHelper.IsNullOrEmpty(s) ? null : Convert.FromBase64String(s),  //Parse
            (o) => Convert.ToBase64String(<number[]>o)                                  //ConvertToString
            );

        map.Add(
            MapiPropertyType.Binary,
            byteConverter);

        var byteArrayConverter = new MapiTypeConverterMapEntry(
            MapiTypeConverterTypeSystem.byteArray,                                      //byte[]
            (s) => StringHelper.IsNullOrEmpty(s) ? null : Convert.FromBase64String(s),  //Parse
            (o) => Convert.ToBase64String(<number[]>o),                                 //ConvertToString
            true                                                                        //IsArray
            );

        map.Add(
            MapiPropertyType.BinaryArray,
            byteArrayConverter);

        var boolConverter = new MapiTypeConverterMapEntry(
            MapiTypeConverterTypeSystem.boolean,
            (s) => Convert.toBool(s),                           //Parse
            (o) => (<boolean>o).toString().toLowerCase()        //ConvertToString
            );

        map.Add(
            MapiPropertyType.Boolean,
            boolConverter);

        var clsidConverter = new MapiTypeConverterMapEntry(
            MapiTypeConverterTypeSystem.guid,
            (s) => new Guid(s),             //Parse
            (o) => (<Guid>o).ToString()     //ConvertToString
            );

        map.Add(
            MapiPropertyType.CLSID,
            clsidConverter);

        var clsidArrayConverter = new MapiTypeConverterMapEntry(
            MapiTypeConverterTypeSystem.guid,
            (s) => new Guid(s),             //Parse
            (o) => (<Guid>o).ToString(),    //ConvertToString
            true                            //IsArray
            );

        map.Add(
            MapiPropertyType.CLSIDArray,
            clsidArrayConverter);

        map.Add(
            MapiPropertyType.Currency,
            new MapiTypeConverterMapEntry(
                MapiTypeConverterTypeSystem.number, //Int64
                (s) => Convert.toNumber(s),         //Parse
                (o) => o.toString()                 //ConvertToString 
                ));

        map.Add(
            MapiPropertyType.CurrencyArray,
            new MapiTypeConverterMapEntry(
                MapiTypeConverterTypeSystem.number, //Int64
                (s) => Convert.toNumber(s),         //Parse
                (o) => o.toString(),                //ConvertToString
                true                                //IsArray
                ));

        map.Add(
            MapiPropertyType.Double,
            new MapiTypeConverterMapEntry(
                MapiTypeConverterTypeSystem.number, //double
                (s) => Convert.toNumber(s),         //Parse
                (o) => o.toString()                 //ConvertToString 
                ));

        map.Add(
            MapiPropertyType.DoubleArray,
            new MapiTypeConverterMapEntry(
                MapiTypeConverterTypeSystem.number, //double
                (s) => Convert.toNumber(s),         //Parse
                (o) => o.toString(),                //ConvertToString
                true                                //IsArray
                ));

        map.Add(
            MapiPropertyType.Error,
            new MapiTypeConverterMapEntry(
                MapiTypeConverterTypeSystem.number, //Int32
                (s) => Convert.toNumber(s),         //Parse
                (o) => o.toString()                 //ConvertToString 
                ));

        map.Add(
            MapiPropertyType.Float,
            new MapiTypeConverterMapEntry(
                MapiTypeConverterTypeSystem.number, //float
                (s) => Convert.toNumber(s),         //Parse
                (o) => o.toString()                 //ConvertToString 
                ));

        map.Add(
            MapiPropertyType.FloatArray,
            new MapiTypeConverterMapEntry(
                MapiTypeConverterTypeSystem.number, //float
                (s) => Convert.toNumber(s),         //Parse
                (o) => o.toString(),                //ConvertToString
                true                                //IsArray
                ));

        map.Add(
            MapiPropertyType.Integer,
            new MapiTypeConverterMapEntry(
                MapiTypeConverterTypeSystem.number,                 //Int32
                (s) => MapiTypeConverter.ParseMapiIntegerValue(s),  //Parse
                (o) => o.toString()                                 //ConvertToString 
                ));

        map.Add(
            MapiPropertyType.IntegerArray,
            new MapiTypeConverterMapEntry(
                MapiTypeConverterTypeSystem.number, //Int32
                (s) => Convert.toNumber(s),         //Parse //ref: check if latest ews managed api code changes this to same as Integer property type above
                (o) => o.toString(),                //ConvertToString
                true                                //IsArray
                ));

        map.Add(
            MapiPropertyType.Long,
            new MapiTypeConverterMapEntry(
                MapiTypeConverterTypeSystem.number, //Int64
                (s) => Convert.toNumber(s),         //Parse
                (o) => o.toString()                 //ConvertToString 
                ));

        map.Add(
            MapiPropertyType.LongArray,
            new MapiTypeConverterMapEntry(
                MapiTypeConverterTypeSystem.number, //Int64
                (s) => Convert.toNumber(s),         //Parse
                (o) => o.toString(),                //ConvertToString
                true                                //IsArray
                ));

        var objectConverter = new MapiTypeConverterMapEntry(
            MapiTypeConverterTypeSystem.string,
            (s) => s,               //Parse
            (o) => o.toString()     //ConvertToString
            );

        map.Add(
            MapiPropertyType.Object,
            objectConverter);

        var objectArrayConverter = new MapiTypeConverterMapEntry(
            MapiTypeConverterTypeSystem.string,
            (s) => s,               //Parse
            (o) => o.toString(),    //ConvertToString
            true                    //IsArray
            );

        map.Add(
            MapiPropertyType.ObjectArray,
            objectArrayConverter);

        map.Add(
            MapiPropertyType.Short,
            new MapiTypeConverterMapEntry(
                MapiTypeConverterTypeSystem.number, //short
                (s) => Convert.toNumber(s),         //Parse
                (o) => o.toString()                 //ConvertToString 
                ));

        map.Add(
            MapiPropertyType.ShortArray,
            new MapiTypeConverterMapEntry(
                MapiTypeConverterTypeSystem.number, //short
                (s) => Convert.toNumber(s),         //Parse
                (o) => o.toString(),                //ConvertToString
                true                                //IsArray
                ));

        var stringConverter = new MapiTypeConverterMapEntry(
            MapiTypeConverterTypeSystem.string,
            (s) => s,               //Parse
            (o) => o.toString()     //ConvertToString
            );

        map.Add(
            MapiPropertyType.String,
            stringConverter);

        var stringArrayConverter = new MapiTypeConverterMapEntry(
            MapiTypeConverterTypeSystem.string,
            (s) => s,               //Parse
            (o) => o.toString(),    //ConvertToString
            true                    //IsArray
            );

        map.Add(
            MapiPropertyType.StringArray,
            stringArrayConverter);

        var sysTimeConverter = new MapiTypeConverterMapEntry(
            MapiTypeConverterTypeSystem.DateTime,
            (s) => DateTime.Parse(s),                               //Parse //ref: UtcDataTimeStyles not used, always utc, timezone not implemented
            (o) => EwsUtilities.DateTimeToXSDateTime(<DateTime>o)   //ConvertToString
            );


        map.Add(
            MapiPropertyType.SystemTime,
            sysTimeConverter);

        var sysTimeArrayConverter = new MapiTypeConverterMapEntry(
            MapiTypeConverterTypeSystem.DateTime,
            (s) => DateTime.Parse(s),                               //Parse //ref: UtcDataTimeStyles not used, always utc, timezone not implemented
            (o) => EwsUtilities.DateTimeToXSDateTime(<DateTime>o),  //ConvertToString
            true                                                    //IsArray
            );

        map.Add(
            MapiPropertyType.SystemTimeArray,
            sysTimeArrayConverter);

        return map;
    });
    static ChangeType(mapiType: MapiPropertyType, value: any): any {
        EwsUtilities.ValidateParam(value, "value");
        return MapiTypeConverter.MapiTypeConverterMap.get(mapiType).ChangeType(value);
    }
    static ConvertToString(mapiPropType: MapiPropertyType, value: any): string {
        return (value === null || value === undefined)
            ? StringHelper.Empty
            : MapiTypeConverter.MapiTypeConverterMap.get(mapiPropType).ConvertToString(value);
    }
    static ConvertToValue(mapiPropType: MapiPropertyType, stringValue: string): any;
    static ConvertToValue(mapiPropType: MapiPropertyType, strings: string[]): any[];
    static ConvertToValue(mapiPropType: MapiPropertyType, strings: string | string[]): any|any[] {
        if (typeof strings === 'string') {
            return MapiTypeConverter.MapiTypeConverterMap.get(mapiPropType).ConvertToValue(strings);
        }
        else if (Array.isArray(strings)) {
            EwsUtilities.ValidateParam(strings, "strings");
            var typeConverter: MapiTypeConverterMapEntry = MapiTypeConverter.MapiTypeConverterMap.get(mapiPropType);
            var array: any[] = [];// = Array.CreateInstance(typeConverter.Type, strings.length);

            var index: number = 0;
            for (var stringValue of strings) {
                var value: any = typeConverter.ConvertToValueOrDefault(stringValue);
                array.push(value);
            }
            return array;
        }
        throw new ArgumentException("parameter not in correct type");
    }
    static IsArrayType(mapiType: MapiPropertyType): boolean { return MapiTypeConverter.MapiTypeConverterMap.get(mapiType).IsArray; }
    static ParseMapiIntegerValue(s: string): any {
        var num = Convert.toNumber(s);
        if (Number.isNaN(num)) {
            return s;
        }
        return num;
    }
}   