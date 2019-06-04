"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServiceLocalException_1 = require("../Exceptions/ServiceLocalException");
var ExtensionMethods_1 = require("../ExtensionMethods");
var EwsServiceJsonReader = /** @class */ (function () {
    function EwsServiceJsonReader() {
    }
    //Service: ExchangeService;
    // constructor(service: ExchangeService){
    // 	this.Service = service;
    // }
    EwsServiceJsonReader.ReadAsArray = function (jsObject, xmlElementName) {
        if (!jsObject || !jsObject[xmlElementName]) {
            return [];
            //throw new Error("EwsServiceJsonReader - ReadAsArray - json property not found");
        }
        var collectionItems = jsObject[xmlElementName];
        if (!Array.isArray(collectionItems)) {
            collectionItems = [collectionItems];
        }
        return collectionItems;
    };
    EwsServiceJsonReader.ReadBase64ElementValue = function (obj) {
        return ExtensionMethods_1.base64Helper.atob(obj);
    };
    EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson = function (jsonResponse /*JsonObject*/, service, collectionJsonElementName, getObjectInstanceDelegate, clearPropertyBag, requestedPropertySet, summaryPropertiesOnly) {
        var serviceObjects = [];
        var serviceObject = null;
        var collectionItems = jsonResponse[collectionJsonElementName];
        for (var key in collectionItems) {
            if (key.indexOf("__") === 0)
                continue;
            var jsonServiceObjects = collectionItems[key];
            if (!Array.isArray(jsonServiceObjects)) {
                jsonServiceObjects = [jsonServiceObjects];
            }
            for (var _i = 0, jsonServiceObjects_1 = jsonServiceObjects; _i < jsonServiceObjects_1.length; _i++) {
                var jsonServiceObject = jsonServiceObjects_1[_i];
                if (jsonServiceObject != null) {
                    var typeName = ExtensionMethods_1.TypeSystem.GetJsObjectTypeName(jsonServiceObject);
                    if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(typeName))
                        debugger; //check why typeName is empty - may be invalid xml parsing by xml2js
                    serviceObject = getObjectInstanceDelegate(service, typeName || key);
                    if (serviceObject != null) {
                        if ((typeName || key) !== serviceObject.GetXmlElementName()) { //string.Compare(jsonServiceObject.ReadTypeString(), serviceObject.GetXmlElementName(), StringComparison.Ordinal) != 0)                        
                            throw new ServiceLocalException_1.ServiceLocalException(ExtensionMethods_1.StringHelper.Format("The type of the object in the store ({0}) does not match that of the local object ({1}).", typeName, serviceObject.GetXmlElementName()));
                        }
                        serviceObject.LoadFromXmlJsObject(jsonServiceObject, service, clearPropertyBag, requestedPropertySet, summaryPropertiesOnly);
                        serviceObjects.push(serviceObject);
                    }
                    // else
                    //     debugger;
                }
            }
        }
        return serviceObjects;
    };
    return EwsServiceJsonReader;
}());
exports.EwsServiceJsonReader = EwsServiceJsonReader;
