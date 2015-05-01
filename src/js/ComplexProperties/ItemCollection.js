var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ComplexProperty = require("./ComplexProperty");
var ItemCollection = (function (_super) {
    __extends(ItemCollection, _super);
    function ItemCollection() {
        _super.apply(this, arguments);
        this.__implements = ["ISelfValidate", "IJsonSerializable", "IEnumerable<TItem>", "IJsonCollectionDeserializer"];
        this.items = []; // System.Collections.Generic.List<T>;
    }
    ItemCollection.prototype.GetEnumerator = function () { throw new Error("Not implemented."); }; //wil be implementedfor ES6 later with yield
    ItemCollection.prototype.LoadFromXml = function (reader, localElementName) { throw new Error("Not implemented."); };
    return ItemCollection;
})(ComplexProperty);
module.exports = ItemCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
