"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EwsLogging_1 = require("../EwsLogging");
var ExtendedPropertyDefinition_1 = require("../../PropertyDefinitions/ExtendedPropertyDefinition");
var InvalidOperationException_1 = require("../../Exceptions/InvalidOperationException");
var NotSupportedException_1 = require("../../Exceptions/NotSupportedException");
var PropertyBag_1 = require("../PropertyBag");
var PropertyDefinition_1 = require("../../PropertyDefinitions/PropertyDefinition");
var PropertySet_1 = require("../PropertySet");
var ServiceObjectPropertyException_1 = require("../../Exceptions/ServiceObjectPropertyException");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
/**
 * Represents the base abstract class for all item and folder types.
 */
var ServiceObject = /** @class */ (function () {
    /**
     * @internal Internal constructor.
     *
     * @param   {ExchangeService}   service   EWS service to which this object belongs.
     */
    function ServiceObject(service) {
        //EwsUtilities.ValidateParam(service, "service");
        //EwsUtilities.ValidateServiceObjectVersion(this, service.RequestedServerVersion);
        this.lockObject = {};
        /**
         * Defines an event that is triggered when the service object changes.
         */
        this.OnChange = [];
        //this.Service = service;
        var innerService = service;
        this.setService = function (service) { innerService = service; };
        this.getService = function () { return innerService; };
        this.propertyBag = new PropertyBag_1.PropertyBag(this);
    }
    Object.defineProperty(ServiceObject.prototype, "PropertyBag", {
        /**
         * @internal The property bag holding property values for this object.
         */
        get: function () { return this.propertyBag; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceObject.prototype, "Schema", {
        /**
         * Gets the schema associated with this type of object.
         */
        get: function () { return this.GetSchema(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceObject.prototype, "Service", {
        /**
         * Gets the ExchangeService the object is bound to.
         */
        get: function () { return this.getService(); },
        /**@internal set*/
        set: function (value) { this.setService(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceObject.prototype, "IsNew", {
        /**
         * Indicates whether this object is a real store item, or if it's a local object that has yet to be saved.
         */
        get: function () {
            var id = this.GetId();
            return id == null ? true : !id.IsValid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceObject.prototype, "IsDirty", {
        /**
         * Gets a value indicating whether the object has been modified and should be saved.
         */
        get: function () {
            return this.PropertyBag.IsDirty;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the value of specified property in this instance.
     * This Indexer of c#
     *
     * @param   {PropertyDefinitionBase}   propertyDefinition   Definition of the property to get.
     */
    ServiceObject.prototype._getItem = function (propertyDefinition) {
        var propertyValue;
        var propDef = propertyDefinition;
        if (propDef instanceof PropertyDefinition_1.PropertyDefinition) {
            return this.PropertyBag._getItem(propDef);
        }
        else {
            var extendedPropDef = propertyDefinition;
            if (extendedPropDef instanceof ExtendedPropertyDefinition_1.ExtendedPropertyDefinition) {
                if (this.TryGetExtendedProperty(extendedPropDef, propertyValue)) {
                    return propertyValue;
                }
                else {
                    throw new ServiceObjectPropertyException_1.ServiceObjectPropertyException(Strings_1.Strings.MustLoadOrAssignPropertyBeforeAccess, propertyDefinition);
                }
            }
            else {
                // Other subclasses of PropertyDefinitionBase are not supported.
                var constructorName = "Chile of ServiceObject";
                if (propertyDefinition.constructor.name) {
                    constructorName = propertyDefinition.constructor.name;
                }
                throw new NotSupportedException_1.NotSupportedException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.OperationNotSupportedForPropertyDefinitionType, constructorName));
            }
        }
    };
    /**
     * @internal Triggers dispatch of the change event.
     */
    ServiceObject.prototype.Changed = function () {
        if (this.OnChange != null) {
            for (var _i = 0, _a = this.OnChange; _i < _a.length; _i++) {
                var changeDelegate = _a[_i];
                changeDelegate(this);
            }
        }
    };
    /**
     * @internal Clears the object's change log.
     */
    ServiceObject.prototype.ClearChangeLog = function () { this.PropertyBag.ClearChangeLog(); };
    /**
     * @internal Gets the name of the change XML element.
     *
     * @return  {string}      XML element name,
     */
    ServiceObject.prototype.GetChangeXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ItemChange; };
    /**
     * @internal Gets the name of the delete field XML element.
     *
     * @return  {string}      XML element name,
     */
    ServiceObject.prototype.GetDeleteFieldXmlElementName = function () { return XmlElementNames_1.XmlElementNames.DeleteItemField; };
    /**
     * @internal Gets the extended properties collection.
     *
     * @return  {ExtendedPropertyCollection}      Extended properties collection.
     */
    ServiceObject.prototype.GetExtendedProperties = function () { return null; };
    /**
     * @internal The unique Id of this object.
     *
     * @return  {ServiceId}      A ServiceId instance..
     */
    ServiceObject.prototype.GetId = function () {
        var idPropertyDefinition = this.GetIdPropertyDefinition();
        var serviceId = { outValue: null };
        if (idPropertyDefinition != null) {
            this.PropertyBag.TryGetValue(idPropertyDefinition, serviceId);
        }
        return serviceId.outValue;
    };
    /**
     * @internal The property definition for the Id of this object.
     *
     * @return  {PropertyDefinition}      A PropertyDefinition instance.
     */
    ServiceObject.prototype.GetIdPropertyDefinition = function () { return null; };
    /**
     * @internal Determines whether properties defined with ScopedDateTimePropertyDefinition require custom time zone scoping.
     *
     * @return  {boolean}      true if this item type requires custom scoping for scoped date/time properties; otherwise, false.
     */
    ServiceObject.prototype.GetIsCustomDateTimeScopingRequired = function () { return false; };
    /**
     * @internal Gets a value indicating whether a time zone SOAP header should be emitted in a CreateItem or UpdateItem request so this item can be property saved or updated.
     *
     * @param   {boolean}     isUpdateOperation   Indicates whether the operation being petrformed is an update operation.
     * @return  {boolean}     true if a time zone SOAP header should be emitted; otherwise, false.
     */
    ServiceObject.prototype.GetIsTimeZoneHeaderRequired = function (isUpdateOperation) { return false; };
    /**
     * Gets the collection of loaded property definitions.
     *
     * @return  {PropertyDefinitionBase[]}      Collection of property definitions.
     */
    ServiceObject.prototype.GetLoadedPropertyDefinitions = function () {
        var propDefs = [];
        for (var _i = 0, _a = this.PropertyBag.Properties.Keys; _i < _a.length; _i++) {
            var propDef = _a[_i];
            propDefs.push(propDef);
        }
        if (this.GetExtendedProperties() != null) {
            for (var _b = 0, _c = this.GetExtendedProperties().Items; _b < _c.length; _b++) {
                var extProp = _c[_b];
                propDefs.push(extProp.PropertyDefinition);
            }
        }
        return propDefs;
    };
    /**
     * @internal Gets the name of the set field XML element.
     *
     * @return  {string}      XML element name,
     */
    ServiceObject.prototype.GetSetFieldXmlElementName = function () { return XmlElementNames_1.XmlElementNames.SetItemField; };
    /**
     * @internal GetXmlElementName retrieves the XmlElementName of this type based on the EwsObjectDefinition attribute that decorates it, if present.
     *
     * @return  {string}      The XML element name associated with this type.
     */
    ServiceObject.prototype.GetXmlElementName = function () {
        throw new Error("ServiceObject.ts - GetXmlElementName -  this must be overridden by derived class - can not use reflection to get class attribute in javascript");
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.xmlElementName)) {
            this.xmlElementName = this.GetXmlElementNameOverride();
            EwsLogging_1.EwsLogging.Assert(!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.xmlElementName), "EwsObject.GetXmlElementName", ExtensionMethods_1.StringHelper.Format("The class {0} does not have an associated XML element name.", "unknown decendent of ServiceObject - in serviceObject.GetXmlElementname"));
        }
        return this.xmlElementName;
    };
    /**
     * @internal This methods lets subclasses of ServiceObject override the default mechanism by which the XML element name associated with their type is retrieved.
     *
     * @return  {string}      The XML element name associated with this type. If this method returns null or empty, the XML element name associated with this type is determined by the EwsObjectDefinition attribute that decorates the type, if present.
     */
    ServiceObject.prototype.GetXmlElementNameOverride = function () { return null; };
    ServiceObject.prototype.Load = function (propertySet) {
        return this.InternalLoad(propertySet || PropertySet_1.PropertySet.FirstClassProperties);
    };
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     * @param   {boolean}             clearPropertyBag        if set to true [clear property bag].
     * @param   {PropertySet}         requestedPropertySet    The property set.
     * @param   {boolean}             summaryPropertiesOnly   if set to true [summary props only].
     */
    ServiceObject.prototype.LoadFromXmlJsObject = function (jsObject, service, clearPropertyBag, requestedPropertySet, summaryPropertiesOnly) {
        if (requestedPropertySet === void 0) { requestedPropertySet = null; }
        if (summaryPropertiesOnly === void 0) { summaryPropertiesOnly = false; }
        this.PropertyBag.LoadFromXmlJsObject(jsObject, service, clearPropertyBag, requestedPropertySet, summaryPropertiesOnly);
    };
    /**
     * @internal Throws exception if this is a new service object.
     */
    ServiceObject.prototype.ThrowIfThisIsNew = function () {
        if (this.IsNew) {
            throw new InvalidOperationException_1.InvalidOperationException(Strings_1.Strings.ServiceObjectDoesNotHaveId);
        }
    };
    /**
     * @internal Throws exception if this is not a new service object.
     */
    ServiceObject.prototype.ThrowIfThisIsNotNew = function () {
        if (!this.IsNew) {
            throw new InvalidOperationException_1.InvalidOperationException(Strings_1.Strings.ServiceObjectAlreadyHasId);
        }
    };
    /**
     * @internal Try to get the value of a specified extended property in this instance.
     *
     * @param   {ExtendedPropertyDefinition}  propertyDefinition   The property definition.
     * @param   {IOutParam<T>}                propertyValue        The property value.
     * @return  {boolean}                     True if property retrieved, false otherwise.
     */
    ServiceObject.prototype.TryGetExtendedProperty = function (propertyDefinition, propertyValue) {
        var propertyCollection = this.GetExtendedProperties();
        if ((propertyCollection != null) &&
            propertyCollection.TryGetValue(propertyDefinition, propertyValue)) {
            return true;
        }
        else {
            propertyValue.outValue = null; //default(T);
            return false;
        }
    };
    //todo:fix - implement type casting on specific type request version. 
    //TryGetProperty<T>(propertyDefinition: PropertyDefinitionBase, propertyValue: any): boolean { throw new Error("Need implementation."); }
    //TryGetProperty(propertyDefinition: PropertyDefinitionBase, propertyValue: any): boolean { throw new Error("ServiceObject.ts - TryGetProperty : Not implemented."); }
    /**
     * Try to get the value of a specified property in this instance.
     *
     * @param   {PropertyDefinitionBase}  propertyDefinition   The property definition.
     * @param   {IOutParam<T>}            propertyValue        The property value.
     * @return  {boolean}                 True if property retrieved, false otherwise.
     */
    ServiceObject.prototype.TryGetProperty = function (propertyDefinition, propertyValue) {
        var propDef = propertyDefinition; // as PropertyDefinition;
        //info: fix for compatibility checking, if this is propertydefinition or extendedpropertydefinitionbase
        if (propDef instanceof PropertyDefinition_1.PropertyDefinition) {
            return this.PropertyBag.TryGetPropertyAs(propDef, propertyValue);
        }
        else {
            //info: fix for compatibility of extendedpropertydefition or propertydefition type.
            var extPropDef = propertyDefinition; // as ExtendedPropertyDefinition;
            if (extPropDef instanceof ExtendedPropertyDefinition_1.ExtendedPropertyDefinition) {
                return this.TryGetExtendedProperty(extPropDef, propertyValue);
            }
            else {
                // Other subclasses of PropertyDefinitionBase are not supported.
                var constructorName = "Child of ServiceObject";
                if (propertyDefinition.constructor.name) {
                    constructorName = propertyDefinition.constructor.name;
                }
                throw new NotSupportedException_1.NotSupportedException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.OperationNotSupportedForPropertyDefinitionType, propertyDefinition.Type));
            }
        }
    };
    /**
     * @internal Validates this instance.
     */
    ServiceObject.prototype.Validate = function () { this.PropertyBag.Validate(); };
    /**
     * @internal Writes service object as XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ServiceObject.prototype.WriteToXml = function (writer) { this.PropertyBag.WriteToXml(writer); };
    /**
     * @internal Writes service object for update as XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ServiceObject.prototype.WriteToXmlForUpdate = function (writer) { this.PropertyBag.WriteToXmlForUpdate(writer); };
    return ServiceObject;
}());
exports.ServiceObject = ServiceObject;
