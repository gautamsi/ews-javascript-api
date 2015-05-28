import LazyMember = require("../Core/LazyMember");
import MapiPropertyType = require("../Enumerations/MapiPropertyType");


class MapiTypeConverter {
    private static UtcDataTimeStyles: any /*System.Globalization.DateTimeStyles*/ = "AdjustToUniversal, AssumeUniversal";
    static MapiTypeConverterMap: /*System.Collections.Generic.Dictionary<MapiPropertyType, MapiTypeConverterMapEntry>*/any;
    private static mapiTypeConverterMap: LazyMember</*T*/any>;
    ChangeType(mapiType: MapiPropertyType, value: any): any { throw new Error("MapiTypeConverter.ts - ChangeType : Not implemented."); }
    ConvertToString(mapiPropType: MapiPropertyType, value: any): string { throw new Error("MapiTypeConverter.ts - ConvertToString : Not implemented."); }
    ConvertToValue(mapiPropType: MapiPropertyType, stringValue: string): any { throw new Error("MapiTypeConverter.ts - ConvertToValue : Not implemented."); }
    //ConvertToValue(mapiPropType: MapiPropertyType, strings: System.Collections.Generic.IEnumerable<string>): System.Array { throw new Error("MapiTypeConverter.ts - ConvertToValue : Not implemented.");}
    IsArrayType(mapiType: MapiPropertyType): boolean { throw new Error("MapiTypeConverter.ts - IsArrayType : Not implemented."); }
    ParseMapiIntegerValue(s: string): any { throw new Error("MapiTypeConverter.ts - ParseMapiIntegerValue : Not implemented."); }
}
export = MapiTypeConverter;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
