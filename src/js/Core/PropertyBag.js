"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../ExtensionMethods");
var BasePropertySet_1 = require("../Enumerations/BasePropertySet");
var ComplexProperty_1 = require("../ComplexProperties/ComplexProperty");
var ComplexPropertyDefinitionBase_1 = require("../PropertyDefinitions/ComplexPropertyDefinitionBase");
var AltDictionary_1 = require("../AltDictionary");
var EwsLogging_1 = require("./EwsLogging");
var EwsUtilities_1 = require("./EwsUtilities");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var PropertyDefinitionFlags_1 = require("../Enumerations/PropertyDefinitionFlags");
var ServiceObjectPropertyException_1 = require("../Exceptions/ServiceObjectPropertyException");
var ServiceVersionException_1 = require("../Exceptions/ServiceVersionException");
var Strings_1 = require("../Strings");
var TypeContainer_1 = require("../TypeContainer");
var TypeGuards_1 = require("../Interfaces/TypeGuards");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
/**
 * @internal Represents a property bag keyed on PropertyDefinition objects.
 */
var PropertyBag = /** @class */ (function () {
    /**
     * @internal Initializes a new instance of **PropertyBag**.
     *
     * @param   {ServiceObject}   owner   The owner of the bag.
     */
    function PropertyBag(owner) {
        this.owner = null;
        this.isDirty = false;
        this.loading = false;
        this.onlySummaryPropertiesRequested = false;
        this.loadedProperties = [];
        this.properties = new AltDictionary_1.DictionaryWithPropertyDefitionKey();
        this.deletedProperties = new AltDictionary_1.DictionaryWithPropertyDefitionKey();
        this.modifiedProperties = [];
        this.addedProperties = [];
        this.requestedPropertySet = null;
        EwsLogging_1.EwsLogging.Assert(owner != null, "PropertyBag.ctor", "owner is null");
        this.owner = owner;
    }
    Object.defineProperty(PropertyBag.prototype, "Properties", {
        /**
         * @internal Gets a dictionary holding the bag's properties.
         */
        get: function () {
            return this.properties;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyBag.prototype, "Owner", {
        /**
         * @internal Gets the owner of this bag.
         */
        get: function () {
            return this.owner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropertyBag.prototype, "IsDirty", {
        /**
         * @internal True if the bag has pending changes, false otherwise.
         */
        get: function () {
            var changes = this.modifiedProperties.length + this.deletedProperties.length + this.addedProperties.length;
            return changes > 0 || this.isDirty;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets or sets the value of a property.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property to get or set.
     * @return  {any}                   An object representing the value of the property.
     */
    PropertyBag.prototype._getItem = function (propertyDefinition) {
        var serviceException = { outValue: null, exception: null };
        var propertyValue = this.GetPropertyValueOrException(propertyDefinition, serviceException);
        if (serviceException.outValue === null) {
            return propertyValue;
        }
        else {
            throw serviceException.exception;
        }
    };
    /**
     * @internal Gets or sets the value of a property.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property to get or set.
     * @return  {any}                   An object representing the value of the property.
     */
    PropertyBag.prototype._setItem = function (propertyDefinition, value) {
        if (propertyDefinition.Version > this.Owner.Service.RequestedServerVersion) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, propertyDefinition.Name, ExchangeVersion_1.ExchangeVersion[propertyDefinition.Version]), null);
        }
        // If the property bag is not in the loading state, we need to verify whether
        // the property can actually be set or updated.
        if (!this.loading) {
            // If the owner is new and if the property cannot be set, throw.
            if (this.Owner.IsNew && !propertyDefinition.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet, this.Owner.Service.RequestedServerVersion)) {
                throw new Error("property is readonly\n" + JSON.stringify(propertyDefinition)); //  ServiceObjectPropertyException(Strings.PropertyIsReadOnly, propertyDefinition);
            }
            if (!this.Owner.IsNew) {
                // If owner is an item attachment, properties cannot be updated (EWS doesn't support updating item attachments)
                var isItem = this.owner instanceof TypeContainer_1.TypeContainer.Item; //ref: //info: TypeContainer contains constructor of Item (not instance) to evade circular dependency. Assigned at bootstarp
                //debugger;
                //let ownerItem = <Item>this.Owner; - implemented IsAttachment on service object to remove dependency to Item object.
                if (isItem && this.owner.IsAttachment) { // ownerItem.IsAttachment) {
                    throw new ServiceObjectPropertyException_1.ServiceObjectPropertyException(Strings_1.Strings.ItemAttachmentCannotBeUpdated, propertyDefinition);
                }
                // If the property cannot be deleted, throw.
                if (value == null && !propertyDefinition.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete)) {
                    throw new ServiceObjectPropertyException_1.ServiceObjectPropertyException(Strings_1.Strings.PropertyCannotBeDeleted, propertyDefinition);
                }
                // If the property cannot be updated, throw.
                if (!propertyDefinition.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate)) {
                    throw new ServiceObjectPropertyException_1.ServiceObjectPropertyException(Strings_1.Strings.PropertyCannotBeUpdated, propertyDefinition);
                }
            }
        }
        // If the value is set to null, delete the property.
        if (value == null) {
            this.DeleteProperty(propertyDefinition);
        }
        else {
            var complexProperty = null;
            var currentValue = this.properties.get(propertyDefinition);
            if (currentValue) {
                complexProperty = currentValue;
                if (complexProperty instanceof ComplexProperty_1.ComplexProperty) {
                    ExtensionMethods_1.ArrayHelper.RemoveEntry(complexProperty.OnChange, this.PropertyChanged); //cant do += or -= in javascript (hopefully in ECMA6)                    
                }
            }
            // If the property was to be deleted, the deletion becomes an update.
            if (this.deletedProperties.remove(propertyDefinition)) {
                PropertyBag.AddToChangeList(propertyDefinition, this.modifiedProperties);
            }
            else {
                // If the property value was not set, we have a newly set property.
                if (this.properties.getStringKeys().indexOf(propertyDefinition.Name) == -1 /*.ContainsKey(propertyDefinition)*/) {
                    PropertyBag.AddToChangeList(propertyDefinition, this.addedProperties);
                }
                else {
                    // The last case is that we have a modified property.
                    if (this.modifiedProperties.indexOf(propertyDefinition) == -1 /*.Contains(propertyDefinition)*/) {
                        PropertyBag.AddToChangeList(propertyDefinition, this.modifiedProperties);
                    }
                }
            }
            this.InitComplexProperty(value instanceof ComplexProperty_1.ComplexProperty ? value : undefined);
            this.properties.set(propertyDefinition, value);
            this.Changed();
        }
    };
    /**
     * @internal Adds the specified property to the specified change list if it is not already present.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property to add to the change list.
     * @param   {PropertyDefinition[]}  changeList           The change list to add the property to.
     */
    PropertyBag.AddToChangeList = function (propertyDefinition, changeList /*System.Collections.Generic.List<PropertyDefinition>*/) {
        if (changeList.indexOf(propertyDefinition) < 0) {
            changeList.push(propertyDefinition);
        }
    };
    /**
     * @internal Sets the isDirty flag to true and triggers dispatch of the change event to the owner of the property bag.
     * Changed must be called whenever an operation that changes the state of this property bag is performed (e.g. adding or removing a property).
     */
    PropertyBag.prototype.Changed = function () {
        this.isDirty = true;
        this.owner.Changed();
    };
    /**
     * @internal Clears the bag.
     */
    PropertyBag.prototype.Clear = function () {
        this.ClearChangeLog();
        this.properties.clear();
        this.loadedProperties.splice(0);
        this.requestedPropertySet = undefined;
    };
    /**
     * @internal Clears the bag's change log.
     */
    PropertyBag.prototype.ClearChangeLog = function () {
        this.deletedProperties.clear();
        this.modifiedProperties.splice(0);
        this.addedProperties.splice(0);
        for (var _i = 0, _a = this.properties.Values; _i < _a.length; _i++) {
            var val = _a[_i];
            var complexProperty = val;
            if (complexProperty instanceof ComplexProperty_1.ComplexProperty) {
                complexProperty.ClearChangeLog();
            }
        }
        this.isDirty = false;
    };
    /**
     * @internal Determines whether the property bag contains a specific property.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property to check against.
     * @return  {boolean}               True if the specified property is in the bag, false otherwise.
     */
    PropertyBag.prototype.Contains = function (propertyDefinition) {
        return this.properties.containsKey(propertyDefinition);
    };
    /**
     * @internal Deletes the property from the bag.
     *
     * @param   {PropertyDefinition}   propertyDefinition   The property to delete.
     */
    PropertyBag.prototype.DeleteProperty = function (propertyDefinition) {
        if (!this.deletedProperties.containsKey(propertyDefinition)) {
            var propertyValue = { outValue: null };
            this.properties.tryGetValue(propertyDefinition, propertyValue);
            this.properties.remove(propertyDefinition);
            var modifiedIndex = this.modifiedProperties.indexOf(propertyDefinition);
            if (modifiedIndex >= 0)
                this.modifiedProperties.splice(modifiedIndex, 1);
            this.deletedProperties.Add(propertyDefinition, propertyValue);
            var complexProperty = propertyValue.outValue;
            if (complexProperty instanceof ComplexProperty_1.ComplexProperty) {
                ExtensionMethods_1.ArrayHelper.RemoveEntry(complexProperty.OnChange, this.PropertyChanged); // -= this.PropertyChanged; // counld not do c# like event -= in js                
            }
        }
    };
    /**
     * @internal Determines whether an EWS UpdateItem/UpdateFolder call is necessary to save the changes that occurred in the bag.
     *
     * @return  {boolean}      True if an UpdateItem/UpdateFolder call is necessary, false otherwise.
     */
    PropertyBag.prototype.GetIsUpdateCallNecessary = function () {
        var propertyDefinitions = [];
        propertyDefinitions = propertyDefinitions.concat(this.addedProperties);
        propertyDefinitions = propertyDefinitions.concat(this.modifiedProperties);
        propertyDefinitions = propertyDefinitions.concat(this.deletedProperties.Keys);
        for (var _i = 0, propertyDefinitions_1 = propertyDefinitions; _i < propertyDefinitions_1.length; _i++) {
            var propertyDefinition = propertyDefinitions_1[_i];
            if (propertyDefinition.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate)) {
                return true;
            }
        }
        return false;
    };
    /**
     * @internal Gets the name of the property update item.
     *
     * @param   {ServiceObject}     serviceObject   The service object.
     * @return  {string}            [description]
     */
    PropertyBag.GetPropertyUpdateItemName = function (serviceObject) {
        return serviceObject instanceof TypeContainer_1.TypeContainer.Folder ? //ref: //info: TypeContainer contains constructor of Folder (not instance) to evade circular dependency. Assigned at bootstarp
            XmlElementNames_1.XmlElementNames.Folder :
            XmlElementNames_1.XmlElementNames.Item;
    };
    /**
     * Gets the property value.
     *
     * @param   {PropertyDefinition}                    propertyDefinition   The property definition.
     * @param   { IOutParam<ServiceLocalException>}     exception            Exception that would be raised if there's an error retrieving the property.
     * @return  {any}                                   Propert value. May be null.
     */
    PropertyBag.prototype.GetPropertyValueOrException = function (propertyDefinition, exception) {
        var propertyValue = { outValue: null };
        if (propertyDefinition.Version > this.Owner.Service.RequestedServerVersion) {
            exception.outValue = new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.PropertyIncompatibleWithRequestVersion, propertyDefinition.Name, ExchangeVersion_1.ExchangeVersion[propertyDefinition.Version]));
            return null;
        }
        if (this.TryGetValue(propertyDefinition, propertyValue)) {
            // If the requested property is in the bag, return it.
            return propertyValue.outValue;
        }
        else {
            if (propertyDefinition.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead)) {
                // The requested property is an auto-instantiate-on-read property
                var complexPropertyDefinition = propertyDefinition;
                EwsLogging_1.EwsLogging.Assert((complexPropertyDefinition instanceof ComplexPropertyDefinitionBase_1.ComplexPropertyDefinitionBase), "PropertyBag.get_this[]", "propertyDefinition is marked with AutoInstantiateOnRead but is not a descendant of ComplexPropertyDefinitionBase");
                propertyValue.outValue = complexPropertyDefinition.CreatePropertyInstance(this.Owner);
                if (propertyValue.outValue != null) {
                    this.InitComplexProperty(propertyValue.outValue);
                    this.properties.set(propertyDefinition, propertyValue.outValue);
                }
            }
            else {
                // If the property is not the Id (we need to let developers read the Id when it's null) and if has
                // not been loaded, we throw.
                if (propertyDefinition != this.Owner.GetIdPropertyDefinition()) {
                    if (!this.IsPropertyLoaded(propertyDefinition)) {
                        exception.outValue = new ServiceObjectPropertyException_1.ServiceObjectPropertyException(Strings_1.Strings.MustLoadOrAssignPropertyBeforeAccess, propertyDefinition);
                        return null;
                    }
                    // Non-nullable properties (int, bool, etc.) must be assigned or loaded; cannot return null value.
                    if (!propertyDefinition.IsNullable) {
                        var errorMessage = this.IsRequestedProperty(propertyDefinition)
                            ? Strings_1.Strings.ValuePropertyNotLoaded
                            : Strings_1.Strings.ValuePropertyNotAssigned;
                        exception.outValue = new ServiceObjectPropertyException_1.ServiceObjectPropertyException(errorMessage, propertyDefinition);
                    }
                }
            }
            return propertyValue.outValue;
        }
    };
    /**
     * Initializes a ComplexProperty instance. When a property is inserted into the bag, it needs to be initialized in order for changes that occur on that property to be properly detected and dispatched.
     *
     * @param   {ComplexProperty}   complexProperty   The ComplexProperty instance to initialize.
     */
    PropertyBag.prototype.InitComplexProperty = function (complexProperty) {
        if (complexProperty) {
            complexProperty.OnChange.push(this.PropertyChanged.bind(this)); // can't do += in javascript;
            if (TypeGuards_1.TypeGuards.isIOwnedProperty(complexProperty)) { //IOwnedProperty ownedProperty = complexProperty as IOwnedProperty;
                complexProperty.Owner = this.Owner;
            }
        }
    };
    /**
     * @internal Determines whether specified property is loaded. This also includes properties that were requested when the property bag was loaded but were not returned by the server. In this case, the property value will be null.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property definition.
     * @return  {boolean}               true if property was loaded or requested; otherwise, false.
     */
    PropertyBag.prototype.IsPropertyLoaded = function (propertyDefinition) {
        // Is the property loaded?
        if (this.loadedProperties.indexOf(propertyDefinition) >= 0) {
            return true;
        }
        else {
            // Was the property requested?
            return this.IsRequestedProperty(propertyDefinition);
        }
    };
    /**
     * @internal Determines whether the specified property has been updated.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property definition.
     * @return  {boolean}               true if the specified property has been updated; otherwise, false.
     */
    PropertyBag.prototype.IsPropertyUpdated = function (propertyDefinition) {
        return this.modifiedProperties.indexOf(propertyDefinition) >= 0 || this.addedProperties.indexOf(propertyDefinition) >= 0;
    };
    /**
     * Determines whether specified property was requested.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property definition.
     * @return  {boolean}               true if property was requested; otherwise, false.
     */
    PropertyBag.prototype.IsRequestedProperty = function (propertyDefinition) {
        // If no requested property set, then property wasn't requested.
        if (this.requestedPropertySet == null || this.requestedPropertySet == undefined) {
            return false;
        }
        // If base property set is all first-class properties, use the appropriate list of
        // property definitions to see if this property was requested. Otherwise, property had
        // to be explicitly requested and needs to be listed in AdditionalProperties.
        if (this.requestedPropertySet.BasePropertySet == BasePropertySet_1.BasePropertySet.FirstClassProperties) {
            var firstClassProps = this.onlySummaryPropertiesRequested
                ? this.Owner.Schema.FirstClassSummaryProperties
                : this.Owner.Schema.FirstClassProperties;
            return firstClassProps.indexOf(propertyDefinition) >= 0 ||
                this.requestedPropertySet.Contains(propertyDefinition);
        }
        else {
            return this.requestedPropertySet.Contains(propertyDefinition);
        }
    };
    /**
     * @internal Loads from xml js object.
     *
     * @param   {any}   jsObject                The json service object.
     * @param   {ExchangeService}   service                          The service.
     * @param   {boolean}   clear                            Indicates whether the bag should be cleared before properties are loaded.
     * @param   {PropertySet}   requestedPropertySet             The requested property set.
     * @param   {boolean}   onlySummaryPropertiesRequested   Indicates whether summary or full properties were requested.
     */
    PropertyBag.prototype.LoadFromXmlJsObject = function (jsObject, service, clear, requestedPropertySet, onlySummaryPropertiesRequested) {
        if (clear) {
            this.Clear();
        }
        // Put the property bag in "loading" mode. When in loading mode, no checking is done
        // when setting property values.
        this.loading = true;
        this.requestedPropertySet = requestedPropertySet;
        this.onlySummaryPropertiesRequested = onlySummaryPropertiesRequested;
        try {
            for (var key in jsObject) {
                if (key.indexOf("__") === 0) //skip xmljsobject conversion entries like __type and __prefix
                    continue;
                if (jsObject.hasOwnProperty(key)) {
                    var element = jsObject[key];
                    var propertyDefinition = { outValue: null };
                    if (this.owner.Schema.TryGetPropertyDefinition(key, propertyDefinition)) {
                        EwsLogging_1.EwsLogging.Assert(false, EwsUtilities_1.EwsUtilities.GetPrintableTypeName(propertyDefinition.outValue), "\t\tLoading property :\t\t" + key);
                        propertyDefinition.outValue.LoadPropertyValueFromXmlJsObject(element, service, this);
                        this.loadedProperties.push(propertyDefinition.outValue);
                        EwsLogging_1.EwsLogging.DebugLog(this._getItem(propertyDefinition.outValue), true); //todo:remove this after testing
                    }
                }
            }
            //            let objTypeName: string = jsObject["__type"];
            //            if (StringHelper.IsNullOrEmpty(objTypeName)) {
            //                objTypeName = TypeSystem.GetJsObjectTypeName(jsObject);
            //                jsObject = jsObject[objTypeName];
            //            }
            //            if (StringHelper.IsNullOrEmpty(objTypeName))
            //                throw new Error("error determining typename");
            //
            //            let propertyDefinition: IOutParam<PropertyDefinition> = { value: null };
            //
            //            if (this.Owner.Schema.TryGetPropertyDefinition(objTypeName, propertyDefinition)) {
            //                propertyDefinition.outValue.LoadPropertyValueFromXmlJsObject(jsObject, this);
            //
            //                this.loadedProperties.push(propertyDefinition.outValue);
            //            }
            this.ClearChangeLog();
        }
        catch (exception) {
            EwsLogging_1.EwsLogging.Log(exception);
        }
        finally {
            this.loading = false;
        }
    };
    /**
     * @internal Handles a change event for the specified property.
     *
     * @param   {ComplexProperty}   complexProperty   The property that changes.
     */
    PropertyBag.prototype.PropertyChanged = function (complexProperty) {
        for (var _i = 0, _a = this.properties.Items; _i < _a.length; _i++) {
            var keyValuePair = _a[_i];
            if (keyValuePair.value == complexProperty) {
                if (!this.deletedProperties.containsKey(keyValuePair.key)) {
                    PropertyBag.AddToChangeList(keyValuePair.key, this.modifiedProperties);
                    this.Changed();
                }
            }
        }
    };
    /**
     * @internal Tries to get a property value based on a property definition.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property definition.
     * @param   {IOutParam<any>}        propertyValue        The property value.
     * @return  {boolean}               True if property was retrieved.
     */
    PropertyBag.prototype.TryGetProperty = function (propertyDefinition, propertyValue) {
        var serviceException = { outValue: null };
        propertyValue.outValue = this.GetPropertyValueOrException(propertyDefinition, serviceException);
        return serviceException.outValue == null;
    };
    /**
     * @internal Tries to get a property value based on a property definition.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property definition.
     * @param   {IOutParam<any>}        propertyValue        The property value.
     * @return  {boolean}               True if property was retrieved.
     */
    PropertyBag.prototype.TryGetPropertyAs = function (propertyDefinition, propertyValue) {
        // Verify that the type parameter and property definition's type are compatible.
        //debug: 
        //todo: fix isassignablefrom use Typed parameter and default value of that type when asking.
        //if (!typeof (T).IsAssignableFrom(propertyDefinition.Type)) {
        //    string errorMessage = ExtensionMethods.stringFormatting.Format(
        //        Strings.PropertyDefinitionTypeMismatch,
        //        EwsUtilities.GetPrintableTypeName(propertyDefinition.Type),
        //        EwsUtilities.GetPrintableTypeName(typeof (T)));
        //    throw new ArgumentException(errorMessage, "propertyDefinition");
        //}
        var outValue = { outValue: null };
        var result = this.TryGetProperty(propertyDefinition, outValue);
        propertyValue.outValue = result ? outValue.outValue : undefined;
        return result;
    };
    /**
     * @internal Tries to retrieve the value of the specified property.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property for which to retrieve a value.
     * @param   {IOutParam<any>}        propertyValue        If the method succeeds, contains the value of the property.
     * @return  {boolean}               True if the value could be retrieved, false otherwise.
     */
    PropertyBag.prototype.TryGetValue = function (propertyDefinition, propertyValue) {
        return this.properties.tryGetValue(propertyDefinition, propertyValue);
    };
    /**
     * @internal Validate property bag instance.
     */
    PropertyBag.prototype.Validate = function () {
        for (var _i = 0, _a = this.addedProperties; _i < _a.length; _i++) {
            var propertyDefinition = _a[_i];
            this.ValidatePropertyValue(propertyDefinition);
        }
        for (var _b = 0, _c = this.modifiedProperties; _b < _c.length; _b++) {
            var propertyDefinition = _c[_b];
            this.ValidatePropertyValue(propertyDefinition);
        }
    };
    /**
     * Validates the property value.
     */
    PropertyBag.prototype.ValidatePropertyValue = function (propertyDefinition) {
        var propertyValue = { outValue: null };
        if (this.TryGetProperty(propertyDefinition, propertyValue)) {
            if (TypeGuards_1.TypeGuards.isISelfValidate(propertyValue.outValue)) {
                propertyValue.outValue.Validate();
            }
        }
    };
    /**
     * Writes an EWS DeleteUpdate opeartion for the specified property.
     *
     * @param   {EwsServiceXmlWriter}   writer               The writer to write the update to.
     * @param   {PropertyDefinition}    propertyDefinition   The property fro which to write the update.
     * @param   {any}                   propertyValue        The current value of the property.
     */
    PropertyBag.prototype.WriteDeleteUpdateToXml = function (writer, propertyDefinition, propertyValue) {
        // The following test should not be necessary since the property bag prevents
        // properties to be deleted (set to null) if they don't have the CanDelete flag,
        // but it doesn't hurt...
        if (propertyDefinition.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete)) {
            var handled = false;
            if (TypeGuards_1.TypeGuards.isICustomUpdateSerializer(propertyValue)) { //ICustomUpdateSerializer updateSerializer = propertyValue as ICustomUpdateSerializer;
                handled = propertyValue.WriteDeleteUpdateToXml(writer, this.Owner);
            }
            if (!handled) {
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.Owner.GetDeleteFieldXmlElementName());
                propertyDefinition.WriteToXml(writer);
                writer.WriteEndElement();
            }
        }
    };
    /**
     * Writes an EWS SetUpdate opeartion for the specified property.
     *
     * @param   {EwsServiceXmlWriter}   writer               The writer to write the update to.
     * @param   {PropertyDefinition}    propertyDefinition   The property fro which to write the update.
     */
    PropertyBag.prototype.WriteSetUpdateToXml = function (writer, propertyDefinition) {
        // The following test should not be necessary since the property bag prevents
        // properties to be updated if they don't have the CanUpdate flag, but it
        // doesn't hurt...
        if (propertyDefinition.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate)) {
            var propertyValue = this._getItem(propertyDefinition);
            var handled = false;
            if (TypeGuards_1.TypeGuards.isICustomUpdateSerializer(propertyValue)) { //ICustomUpdateSerializer updateSerializer = propertyValue as ICustomUpdateSerializer;
                handled = propertyValue.WriteSetUpdateToXml(writer, this.Owner, propertyDefinition);
            }
            if (!handled) {
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.Owner.GetSetFieldXmlElementName());
                propertyDefinition.WriteToXml(writer);
                writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.Owner.GetXmlElementName());
                propertyDefinition.WritePropertyValueToXml(writer, this, true /* isUpdateOperation */);
                writer.WriteEndElement();
                writer.WriteEndElement();
            }
        }
    };
    /**
     * @internal Writes the bag's properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer to write the properties to.
     */
    PropertyBag.prototype.WriteToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.Owner.GetXmlElementName());
        //debug: //todo: fix Schema objects IEnumerable.
        //
        for (var _i = 0, _a = this.Owner.Schema.GetEnumerator(); _i < _a.length; _i++) {
            var propertyDefinition = _a[_i];
            // The following test should not be necessary since the property bag prevents
            // properties to be set if they don't have the CanSet flag, but it doesn't hurt...
            if (propertyDefinition.HasFlag(PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet, writer.Service.RequestedServerVersion)) {
                if (this.Contains(propertyDefinition)) {
                    propertyDefinition.WritePropertyValueToXml(writer, this, false /* isUpdateOperation */);
                }
            }
        }
        writer.WriteEndElement();
    };
    /**
     * @internal Writes the EWS update operations corresponding to the changes that occurred in the bag to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer to write the updates to.
     */
    PropertyBag.prototype.WriteToXmlForUpdate = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, this.Owner.GetChangeXmlElementName());
        this.Owner.GetId().WriteToXml(writer);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Updates);
        for (var _i = 0, _a = this.addedProperties; _i < _a.length; _i++) {
            var propertyDefinition = _a[_i];
            this.WriteSetUpdateToXml(writer, propertyDefinition);
        }
        for (var _b = 0, _c = this.modifiedProperties; _b < _c.length; _b++) {
            var propertyDefinition = _c[_b];
            this.WriteSetUpdateToXml(writer, propertyDefinition);
        }
        for (var _d = 0, _e = this.deletedProperties.Items; _d < _e.length; _d++) {
            var kv = _e[_d];
            this.WriteDeleteUpdateToXml(writer, kv.key, kv.value);
        }
        writer.WriteEndElement();
        writer.WriteEndElement();
    };
    return PropertyBag;
}());
exports.PropertyBag = PropertyBag;
