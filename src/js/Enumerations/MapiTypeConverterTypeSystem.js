"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** shim to store type of data in MapiTypeConverterMapEntry */
var MapiTypeConverterTypeSystem;
(function (MapiTypeConverterTypeSystem) {
    MapiTypeConverterTypeSystem[MapiTypeConverterTypeSystem["boolean"] = 0] = "boolean";
    MapiTypeConverterTypeSystem[MapiTypeConverterTypeSystem["string"] = 1] = "string";
    MapiTypeConverterTypeSystem[MapiTypeConverterTypeSystem["number"] = 2] = "number";
    MapiTypeConverterTypeSystem[MapiTypeConverterTypeSystem["DateTime"] = 3] = "DateTime";
    MapiTypeConverterTypeSystem[MapiTypeConverterTypeSystem["guid"] = 4] = "guid";
    MapiTypeConverterTypeSystem[MapiTypeConverterTypeSystem["byteArray"] = 5] = "byteArray";
})(MapiTypeConverterTypeSystem = exports.MapiTypeConverterTypeSystem || (exports.MapiTypeConverterTypeSystem = {}));
