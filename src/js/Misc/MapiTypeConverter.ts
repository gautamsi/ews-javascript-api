import LazyMember = require("../Core/LazyMember");
import MapiPropertyType = require("../Enumerations/MapiPropertyType");


class MapiTypeConverter {
    static MapiTypeConverterMap: /*System.Collections.Generic.Dictionary<MapiPropertyType, MapiTypeConverterMapEntry>*/any;
    private static mapiTypeConverterMap: LazyMember</*T*/any>;
    ChangeType(mapiType: MapiPropertyType, value: any): any { throw new Error("Not implemented."); }
    ConvertToString(mapiPropType: MapiPropertyType, value: any): string { throw new Error("Not implemented."); }
    ConvertToValue(mapiPropType: MapiPropertyType, stringValue: string): any { throw new Error("Not implemented."); }
    //ConvertToValue(mapiPropType: MapiPropertyType, strings: System.Collections.Generic.IEnumerable<string>): System.Array { throw new Error("Not implemented.");}
    IsArrayType(mapiType: MapiPropertyType): boolean { throw new Error("Not implemented."); }
    ParseMapiIntegerValue(s: string): any { throw new Error("Not implemented."); }
}
export = MapiTypeConverter;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
