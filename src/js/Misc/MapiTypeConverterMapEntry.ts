import {MapiTypeConverterTypeSystem} from "../Enumerations/MapiTypeConverterTypeSystem";
import {StringHelper, Convert, ArrayHelper} from "../ExtensionMethods";
import {EwsLogging} from "../Core/EwsLogging";
import {LazyMember} from "../Core/LazyMember";
import {ArgumentException} from "../Exceptions/ArgumentException";
import {ServiceXmlDeserializationException} from "../Exceptions/ServiceXmlDeserializationException";
import {DictionaryWithNumericKey} from "../AltDictionary";
import {Guid} from "../Guid";
import {DateTime} from "../DateTime";
import {Strings} from "../Strings";
export class MapiTypeConverterMapEntry {
    Parse: (string) => any = null;
    ConvertToString: (any) => string = null;
    Type: MapiTypeConverterTypeSystem = MapiTypeConverterTypeSystem.boolean;
    IsArray: boolean = false;
    get DefaultValue(): any { return MapiTypeConverterMapEntry.defaultValueMap.Member.get(this.Type); }
    private static defaultValueMap: LazyMember<DictionaryWithNumericKey<any>> = new LazyMember<DictionaryWithNumericKey<any>>(() => {
        var map: DictionaryWithNumericKey<any> = new DictionaryWithNumericKey();

        map.Add(MapiTypeConverterTypeSystem.boolean, false);
        map.Add(MapiTypeConverterTypeSystem.byteArray, null);
        map.Add(MapiTypeConverterTypeSystem.number, 0);
        map.Add(MapiTypeConverterTypeSystem.DateTime, DateTime.MinValue);
        map.Add(MapiTypeConverterTypeSystem.guid, Guid.Empty);
        map.Add(MapiTypeConverterTypeSystem.string, null);

        return map;
    });

    constructor(type: MapiTypeConverterTypeSystem, parseMethod: (str: string) => any, convertToStringMethod: (obj: any) => string, isArray = false) {
        EwsLogging.Assert(
            MapiTypeConverterMapEntry.defaultValueMap.Member.containsKey(type),
            "MapiTypeConverterMapEntry ctor",
            StringHelper.Format("No default value entry for type {0}", MapiTypeConverterTypeSystem[type]));

        this.Type = type;
        this.ConvertToString = convertToStringMethod;
        this.Parse = parseMethod;
        this.IsArray = isArray;
    }
    ChangeType(value: any): any {
        var sourcetype = typeof value;
        if (sourcetype === typeof null) {
            try {
                sourcetype = (<any>value.constructor).name;
            }
            catch (ex) { }
        }
        EwsLogging.Assert(false, "MapiTypeConverterMapEntry.ChangeType",
            StringHelper.Format("Not Implemented to convert type from one to another. instance Type: {0}, source Type: {1}", MapiTypeConverterTypeSystem[this.Type], sourcetype));
        
        return value;
    }
    ConvertToValue(stringValue: string): any {
        try {
            return this.Parse(stringValue);
        } catch (ex) {
            throw new ServiceXmlDeserializationException(
                StringHelper.Format(
                    Strings.ValueCannotBeConverted,
                    stringValue,
                    this.Type),
                ex);
        }
    }
    ConvertToValueOrDefault(stringValue: string): any { return StringHelper.IsNullOrEmpty(stringValue) ? this.DefaultValue : this.ConvertToValue(stringValue); }
    ValidateValueAsArray(value: any): void {
        var array = <any[]>value;
        if (array == null) {
            throw new ArgumentException(
                StringHelper.Format(
                    Strings.IncompatibleTypeForArray,
                    value.GetType(),
                    this.Type));
        }
        else if (ArrayHelper.Rank(array) != 1) {
            throw new ArgumentException(Strings.ArrayMustHaveSingleDimension);
        }
        else if (array.length == 0) {
            throw new ArgumentException(Strings.ArrayMustHaveAtLeastOneElement);
        }
        // else if (array.GetType().GetElementType() != this.Type)
        // {
        //     throw new ArgumentException(
        //         StringHelper.Format(
        //             Strings.IncompatibleTypeForArray,
        //             value.GetType(),
        //             this.Type));
        // }
    }
    //private static checkType(array:any[]){}
}

