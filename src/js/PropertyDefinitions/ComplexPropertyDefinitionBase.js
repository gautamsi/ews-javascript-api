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
var PropertyDefinitionFlags_1 = require("../Enumerations/PropertyDefinitionFlags");
var PropertyDefinition_1 = require("./PropertyDefinition");
/**
 * @internal Represents abstract complex property definition.
 */
var ComplexPropertyDefinitionBase = /** @class */ (function (_super) {
    __extends(ComplexPropertyDefinitionBase, _super);
    function ComplexPropertyDefinitionBase(propertyName, xmlElementName, uriOrFlags, versionOrFlags, version) {
        var _this = this;
        switch (arguments.length) {
            case 4:
                _this = _super.call(this, propertyName, xmlElementName, uriOrFlags, versionOrFlags) || this;
                break;
            case 5:
                _this = _super.call(this, propertyName, xmlElementName, uriOrFlags, versionOrFlags, version) || this;
                break;
            default:
                break;
        }
        return _this;
    }
    /**
     * Gets the property instance.
     *
     * @param   {PropertyBag}       propertyBag       The property bag.
     * @param   {complexProperty}   complexProperty   The property instance.
     * @return  {boolean}    True if the instance is newly created.
     */
    ComplexPropertyDefinitionBase.prototype.GetPropertyInstance = function (propertyBag, complexProperty) {
        complexProperty.outValue = null;
        if (!propertyBag.TryGetValue(this, complexProperty) || !this.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.ReuseInstance, propertyBag.Owner.Service.RequestedServerVersion)) {
            complexProperty.outValue = this.CreatePropertyInstance(propertyBag.Owner);
            return true;
        }
        return false;
    };
    /**
     * @internal Internals the load from XMlJsObject.
     *
     * @param   {any}               jsObject    The json object.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    ComplexPropertyDefinitionBase.prototype.InternalLoadFromXmlJsObject = function (jsObject, service, propertyBag) {
        var outComplexproperty = { outValue: null };
        var justCreated = this.GetPropertyInstance(propertyBag, outComplexproperty);
        //assume collection type
        var complexPropertyCollection = outComplexproperty.outValue;
        //check for collection type //todo: implement better ComplexPropertyCollection detection
        if (complexPropertyCollection.Items) { //false if ths is not collection
            if (!justCreated && this.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.UpdateCollectionItems, propertyBag.Owner.Service.RequestedServerVersion)) {
                complexPropertyCollection.UpdateFromXmlJsObjectCollection(jsObject, service);
            }
            else {
                complexPropertyCollection.CreateFromXmlJsObjectCollection(jsObject, service);
            }
        }
        else {
            //var typename = TypeSystem.GetJsObjectTypeName(jsObject);
            outComplexproperty.outValue.LoadFromXmlJsObject(jsObject, service);
        }
        propertyBag._setItem(this, outComplexproperty.outValue);
    };
    /**
     * @internal Loads the property value from XMLJsObject.
     *
     * @param   {any}               jsObject         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    ComplexPropertyDefinitionBase.prototype.LoadPropertyValueFromXmlJsObject = function (jsObject, service, propertyBag) {
        // check for null value from empty element
        if (jsObject) {
            //debugger;//update: array type detection in next call, can not call GetPropertyInstance multiple time
            this.InternalLoadFromXmlJsObject(jsObject, service, propertyBag);
        }
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    ComplexPropertyDefinitionBase.prototype.WritePropertyValueToXml = function (writer, propertyBag, isUpdateOperation) {
        var complexProperty = propertyBag._getItem(this);
        //debugger;
        if (complexProperty) {
            complexProperty.WriteToXml(writer, this.XmlElementName);
        }
    };
    return ComplexPropertyDefinitionBase;
}(PropertyDefinition_1.PropertyDefinition));
exports.ComplexPropertyDefinitionBase = ComplexPropertyDefinitionBase;
