"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EwsLogging_1 = require("../Core/EwsLogging");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
/**
 * Represents a property that can be sent to or retrieved from EWS.
 */
var ComplexProperty = /** @class */ (function () {
    function ComplexProperty() {
        /**@internal */
        this.Namespace = XmlNamespace_1.XmlNamespace.Types;
        //private xmlNamespace: XmlNamespace; ^ no need for pivate property
        this.OnChange = [];
    }
    ComplexProperty.prototype.Changed = function () {
        var _this = this;
        if (this.OnChange && this.OnChange.length > 0) {
            this.OnChange.forEach(function (delegateInstance, index, array) {
                if (delegateInstance)
                    delegateInstance(_this);
            });
        }
    };
    ComplexProperty.prototype.ClearChangeLog = function () { };
    ComplexProperty.prototype.InternalLoadFromXmlJsObject = function (jsObject, service, //xmlNamespace: XmlNamespace, xmlElementName: string,
    readAction /*System.Func<T, TResult>*/) {
        //reader.EnsureCurrentNodeIsStartElement(xmlNamespace, xmlElementName);
        //debugger;//check how to implement with jsobject.
        EwsLogging_1.EwsLogging.Assert(false, this.constructor.name + ".LoadFromXmlJsObject", "ComplexProperty - InternalLoadFromXmlJsObject: todo:convert to jsobjectload. object type = " + this.constructor.name);
        throw new Error("ComplexProperty - InternalLoadFromXmlJsObject: todo:convert to jsobjectload. object type = " + this.constructor.name);
        // this.ReadAttributesFromXmlJsObject(jsObject);
        // if (!jsObject.IsEmptyElement) {
        //   do {
        //     jsObject.Read();
        //     switch (jsObject.NodeType) {
        //       case Node.ELEMENT_NODE:
        //         if (!readAction(jsObject)) {
        //           jsObject.SkipCurrentElement();
        //         }
        //         break;
        //       case Node.TEXT_NODE:
        //         this.ReadTextValueFromXmlJsObject(jsObject);
        //         break;
        //     }
        //   }
        //   while (!jsObject.HasRecursiveParent(xmlElementName));
        //   jsObject.SeekLast(); // go back for next process to read.
        //}
    };
    //InternalToJson(service: ExchangeService): any { throw new Error("ComplexProperty.ts - InternalToJson : Not implemented."); }
    ComplexProperty.prototype.InternalValidate = function () { };
    //LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("ComplexProperty.ts - LoadFromJson : Not implemented."); }
    //LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string): any { throw new Error("ComplexProperty.ts - LoadFromXml : Not implemented."); }
    ComplexProperty.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        this.InternalLoadFromXmlJsObject(jsObject, service, this.ReadElementsFromXmlJsObject);
        // xmlNamespace || this.Namespace,
        // xmlElementName,
    };
    /**@internal */
    ComplexProperty.prototype.ReadAttributesFromXmlJsObject = function (reader) { debugger; /*virtual method for derived class to implement if needed*/ };
    /**@internal */
    ComplexProperty.prototype.ReadTextValueFromXmlJsObject = function (jsObject) { debugger; /*virtual method for derived class to implement if needed*/ };
    ComplexProperty.prototype.SetFieldValue = function (field, value) {
        var applyChange = false;
        if (field.getValue() == null) {
            applyChange = value != null;
        }
        else {
            var fieldAny = field.getValue();
            if (fieldAny.CompareTo) //todo: fix this if find new ways to check if it implements certain interface - if( field is IComparable)
             {
                applyChange = fieldAny.CompareTo(value) != 0; //todo: until fix the interface check (field as IComparable).CompareTo(value) != 0;
            }
            else {
                applyChange = true;
            }
        }
        if (applyChange) {
            //debugger;//debug; check; check for ref value setting. 
            field.setValue(value);
            this.Changed();
        }
    };
    ComplexProperty.prototype.ReadElementsFromXmlJsObject = function (jsonProperty, service) { debugger; /* abstract method - should implement*/ };
    ComplexProperty.prototype.ReadElementsFromXmlJsObjectToPatch = function (jsonProperty, service) { debugger; /* abstract method - should implement*/ };
    //UpdateFromXml(reader: EwsServiceXmlReader, xmlElementName: string): any { throw new Error("ComplexProperty.ts - UpdateFromXml : Not implemented."); }
    ComplexProperty.prototype.UpdateFromXmlJsObject = function (jsObject, service /*, xmlElementName: string, xmlNamespace?: XmlNamespace*/) {
        this.InternalLoadFromXmlJsObject(jsObject, service, this.ReadElementsFromXmlJsObjectToPatch);
        // xmlNamespace || this.Namespace,
        // xmlElementName,
    };
    /// <summary>
    /// Implements ISelfValidate.Validate. Validates this instance.
    /// </summary>
    ComplexProperty.prototype.Validate = function () {
        this.InternalValidate();
    };
    /**@internal */
    ComplexProperty.prototype.WriteAttributesToXml = function (writer) { };
    /**@internal */
    ComplexProperty.prototype.WriteElementsToXml = function (writer) { };
    /** @internal reverted to simplify child class override - it breaks all derived/child class and throws error "incorrectly extends base class" due to TypeScript design */
    //WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void { throw new Error("ComplexProperty.ts - WriteToXml : Not implemented."); }
    /**@internal */
    ComplexProperty.prototype.WriteToXml = function (writer, xmlElementName, xmlNamespace) {
        if (!xmlNamespace)
            xmlNamespace = this.Namespace;
        writer.WriteStartElement(xmlNamespace, xmlElementName);
        this.WriteAttributesToXml(writer);
        this.WriteElementsToXml(writer);
        writer.WriteEndElement();
    };
    return ComplexProperty;
}());
exports.ComplexProperty = ComplexProperty;
