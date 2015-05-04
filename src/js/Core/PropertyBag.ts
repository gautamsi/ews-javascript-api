import ServiceObject = require("./ServiceObjects/ServiceObject");
import PropertySet = require("./PropertySet");
import ComplexProperty = require("../ComplexProperties/ComplexProperty");
import IOutParam = require("../Interfaces/IOutParam");
import Folder = require("./ServiceObjects/Folders/Folder");
import Exceptions = require("../_old/Core/Exceptions");
import ComplexPropertyDefinitionBase = require("../PropertyDefinitions/ComplexPropertyDefinitionBase");
import IOwnedProperty = require("../Interfaces/IOwnedProperty");
import BasePropertySet = require("../Enumerations/BasePropertySet");
import EwsServiceXmlReader = require("./EwsServiceXmlReader");
import ISelfValidate = require("../Interfaces/ISelfValidate");

import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import PropertyDefinitionFlags = require("../Enumerations/PropertyDefinitionFlags");
import EwsServiceXmlWriter = require("./EwsServiceXmlWriter");
import EwsUtilities = require("./EwsUtilities");
import XmlElementNames = require("../Core/XmlElementNames");
import XmlNamespace = require("../Enumerations/XmlNamespace");


import PropertyDefinition = require("../PropertyDefinitions/PropertyDefinition");


import ExtensionMethods = require("../ExtensionMethods");


//todo: should be done
class PropertyBag {
    //Properties: PropDictionary<PropertyDefinition, any> = new PropDictionary<PropertyDefinition, any>();//System.Collections.Generic.Dictionary<PropertyDefinition, any>;
    get Owner(): ServiceObject { return this.owner; }
    get IsDirty(): boolean {
        var changes = this.modifiedProperties.length + this.deletedProperties.length + this.addedProperties.length;
        return changes > 0 || this.isDirty;
    }
    Item: any;
    private owner: ServiceObject = undefined;
    private isDirty: boolean;
    private loading: boolean;
    private onlySummaryPropertiesRequested: boolean;
    private loadedProperties: PropertyDefinition[] = [];//System.Collections.Generic.List<PropertyDefinition>;
    private properties: PropDictionary<PropertyDefinition, any> = new PropDictionary<PropertyDefinition, any>();//System.Collections.Generic.Dictionary<PropertyDefinition, any>;
    private deletedProperties: PropDictionary<PropertyDefinition, any> = new PropDictionary<PropertyDefinition, any>();// System.Collections.Generic.Dictionary<PropertyDefinition, any>;
    private modifiedProperties: PropertyDefinition[] = [];//System.Collections.Generic.List<PropertyDefinition>;
    private addedProperties: PropertyDefinition[] = [];//System.Collections.Generic.List<PropertyDefinition>;
    private requestedPropertySet: PropertySet;

    constructor(serviceObject: ServiceObject) {
        throw new Error("not implemented");
    }

    static AddToChangeList(propertyDefinition: PropertyDefinition, changeList: PropertyDefinition[] /*System.Collections.Generic.List<PropertyDefinition>*/): void {
        if (changeList.indexOf(propertyDefinition) < 0) {
            changeList.push(propertyDefinition);
        }
    }
    private Changed(): void {
        //todo: implement onchange type events;
        //if (this.OnChange != null) {
        //    this.OnChange();
        //}
    }
    Clear(): void {
        this.ClearChangeLog();
        this.properties.clear();
        this.loadedProperties.splice(0);
        this.requestedPropertySet = undefined;
    }
    ClearChangeLog(): void {
        this.deletedProperties.clear();
        this.modifiedProperties.splice(0);
        this.addedProperties.splice(0);

        for (var val in this.properties.Values) {
            var complexProperty = <ComplexProperty>val;

            if (complexProperty instanceof ComplexProperty) {
                complexProperty.ClearChangeLog();
            }
        }

        this.isDirty = false;
    }
    Contains(propertyDefinition: PropertyDefinition): boolean { return this.properties.containsKey(propertyDefinition); }
    //CreateJsonDeleteUpdate(propertyDefinition: PropertyDefinitionBase, service: ExchangeService, serviceObject: ServiceObject): JsonObject { throw new Error("Not implemented."); }
    //CreateJsonSetUpdate(propertyDefinition: PropertyDefinition, service: ExchangeService, serviceObject: ServiceObject, propertyBag: PropertyBag): JsonObject { throw new Error("Not implemented."); }
    //CreateJsonSetUpdate(value: ExtendedProperty, service: ExchangeService, serviceObject: ServiceObject): JsonObject { throw new Error("Not implemented."); }
    DeleteProperty(propertyDefinition: PropertyDefinition): void {
        if (!this.deletedProperties.containsKey(propertyDefinition)) {
            var propertyValue: IOutParam<any> = { value: null };

            this.properties.tryGet(propertyDefinition, propertyValue);

            this.properties.remove(propertyDefinition);
            var modifiedIndex = this.modifiedProperties.indexOf(propertyDefinition);
            if (modifiedIndex >= 0)
                this.modifiedProperties.splice(modifiedIndex, 1);

            this.deletedProperties.add(propertyDefinition, propertyValue);

            var complexProperty = <ComplexProperty>propertyValue;

            if (complexProperty instanceof ComplexProperty) {
                var onchangeIndex = complexProperty.OnChange.indexOf(this.PropertyChanged);
                complexProperty.OnChange.splice(onchangeIndex, 1);// -= this.PropertyChanged; // counld not do c# like event -= in js
            }
        }
    }
    GetIsUpdateCallNecessary(): boolean {
        var propertyDefinitions: PropertyDefinition[] = [];

        propertyDefinitions = propertyDefinitions.concat(this.addedProperties);
        propertyDefinitions = propertyDefinitions.concat(this.modifiedProperties);
        propertyDefinitions = propertyDefinitions.concat(this.deletedProperties.Keys);

        for (var item in propertyDefinitions) {
            var propertyDefinition: PropertyDefinition = item;
            if (propertyDefinition.HasFlag(PropertyDefinitionFlags.CanUpdate)) {
                return true;
            }
        }
        return false;
    }
    static GetPropertyUpdateItemName(serviceObject: ServiceObject): string {
        return serviceObject instanceof Folder ?
            //return serviceObject.IsFolderInstance() ? //keep Folder object away from here.
            XmlElementNames.Folder :
            XmlElementNames.Item;
    }
    GetPropertyValueOrException(propertyDefinition: PropertyDefinition, exception: IOutParam<any>): any {
        var outPropertyValue: IOutParam<any> = { value: null };
        exception.value = null;
        var propertyValue;

        if (propertyDefinition.Version > this.Owner.Service.RequestedServerVersion) {
            exception.value = new Exceptions.ServiceVersionException(
                ExtensionMethods.stringFormatting.Format(
                    "property: {0} incompatible with this version: {1}"/*Strings.PropertyIncompatibleWithRequestVersion*/,
                    propertyDefinition.Name,
                    propertyDefinition.Version));
            return null;
        }

        if (this.TryGetValue(propertyDefinition, outPropertyValue)) {
            // If the requested property is in the bag, return it.
            return outPropertyValue.value;
        }
        else {
            if (propertyDefinition.HasFlag(PropertyDefinitionFlags.AutoInstantiateOnRead)) {
                // The requested property is an auto-instantiate-on-read property
                var complexPropertyDefinition = <ComplexPropertyDefinitionBase>propertyDefinition;

                EwsUtilities.Assert(
                    !(complexPropertyDefinition instanceof ComplexPropertyDefinitionBase),
                    "PropertyBag.get_this[]",
                    "propertyDefinition is marked with AutoInstantiateOnRead but is not a descendant of ComplexPropertyDefinitionBase");

                propertyValue = complexPropertyDefinition.CreatePropertyInstance(this.Owner);

                if (propertyValue != null) {
                    this.InitComplexProperty(<ComplexProperty>propertyValue);
                    this.properties.set(propertyDefinition, propertyValue);
                }
            }
            else {
                // If the property is not the Id (we need to let developers read the Id when it's null) and if has
                // not been loaded, we throw.
                if (propertyDefinition != this.Owner.GetIdPropertyDefinition()) {
                    if (!this.IsPropertyLoaded(propertyDefinition)) {
                        exception.value = new Exceptions.ServiceObjectPropertyException("Must load or assign property before access"
                            /*Strings.MustLoadOrAssignPropertyBeforeAccess*/, propertyDefinition);
                        return null;
                    }

                    // Non-nullable properties (int, bool, etc.) must be assigned or loaded; cannot return null value.
                    if (!propertyDefinition.IsNullable) {
                        var errorMessage = this.IsRequestedProperty(propertyDefinition)
                            ? "value property not loaded" //Strings.ValuePropertyNotLoaded
                            : "value property not assigned";//Strings.ValuePropertyNotAssigned;
                        exception.value = new Exceptions.ServiceObjectPropertyException(errorMessage, propertyDefinition);
                    }
                }
            }

            return propertyValue;
        }
    }
    InitComplexProperty(complexProperty: ComplexProperty): void {

        if (complexProperty) {
            complexProperty.OnChange.push(this.PropertyChanged); // can't do += in javascript;

            var isIOwnedProperty = Object.keys(complexProperty).indexOf("Owner") >= 0; //todo: until fix checking interface by some other means, checking property directly

            if (isIOwnedProperty) {
                var ownedProperty: IOwnedProperty = <any>complexProperty;
                ownedProperty.Owner = this.Owner;
            }
        }
    }
    IsPropertyLoaded(propertyDefinition: PropertyDefinition): boolean {
        // Is the property loaded?
        if (this.loadedProperties.indexOf(propertyDefinition) >= 0) {
            return true;
        }
        else {
            // Was the property requested?
            return this.IsRequestedProperty(propertyDefinition);
        }
    }
    IsPropertyUpdated(propertyDefinition: PropertyDefinition): boolean {
        return this.modifiedProperties.indexOf(propertyDefinition) >= 0 || this.addedProperties.indexOf(propertyDefinition) >= 0;
    }
    IsRequestedProperty(propertyDefinition: PropertyDefinition): boolean {
        // If no requested property set, then property wasn't requested.
        if (this.requestedPropertySet == null || this.requestedPropertySet == undefined) {
            return false;
        }

        // If base property set is all first-class properties, use the appropriate list of
        // property definitions to see if this property was requested. Otherwise, property had
        // to be explicitly requested and needs to be listed in AdditionalProperties.
        if (this.requestedPropertySet.BasePropertySet == BasePropertySet.FirstClassProperties) {
            var firstClassProps = this.onlySummaryPropertiesRequested
                ? this.Owner.Schema.FirstClassSummaryProperties
                : this.Owner.Schema.FirstClassProperties;

            return firstClassProps.indexOf(propertyDefinition) >= 0 ||
                this.requestedPropertySet.Contains(propertyDefinition);
        }
        else {
            return this.requestedPropertySet.Contains(propertyDefinition);
        }
    }
    //LoadFromJson(jsonServiceObject: JsonObject, service: ExchangeService, clear: boolean, requestedPropertySet: PropertySet, onlySummaryPropertiesRequested: boolean): any { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader, clear: boolean, requestedPropertySet: PropertySet, onlySummaryPropertiesRequested: boolean): void {
        if (clear) {
            this.Clear();
        }

        // Put the property bag in "loading" mode. When in loading mode, no checking is done
        // when setting property values.
        this.loading = true;

        this.requestedPropertySet = requestedPropertySet;
        this.onlySummaryPropertiesRequested = onlySummaryPropertiesRequested;

        try {
            do {
                reader.Read();

                if (reader.NodeType == Node.ELEMENT_NODE) {// XmlNodeType.Element) {
                    var propertyDefinition: IOutParam<PropertyDefinition> = { value: null };

                    if (this.Owner.Schema.TryGetPropertyDefinition(reader.LocalName, propertyDefinition)) {
                        propertyDefinition.value.LoadPropertyValueFromXml(reader, this);

                        this.loadedProperties.push(propertyDefinition.value);
                    }
                    else {
                        debugger;
                        reader.SkipCurrentElement();
                    }
                }
            }
            while (reader.HasRecursiveParent(this.Owner.GetXmlElementName()));

            this.ClearChangeLog();
        }
        finally {
            this.loading = false;
        }
    }
    PropertyChanged(complexProperty: ComplexProperty): void {
        for (var item in this.properties.Items) {
            var keyValuePair: KeyValuePair<PropertyDefinition, any> = item;
            if (keyValuePair.value == complexProperty) {
                if (!this.deletedProperties.containsKey(keyValuePair.key)) {
                    PropertyBag.AddToChangeList(keyValuePair.key, this.modifiedProperties);
                    this.Changed();
                }
            }
        }
    }

    _propGet(propertyDefinition: PropertyDefinition): any {
        var serviceException: Exceptions.ServiceLocalException;
        var outparam: IOutParam<any> = { value: null };
        var propertyValue = this.GetPropertyValueOrException(propertyDefinition, outparam);
        if (outparam.value == null) {
            return propertyValue;
        }
        else {
            throw serviceException;
        }
    }
    _propSet(propertyDefinition: PropertyDefinition, value: any) {
        if (propertyDefinition.Version > this.Owner.Service.RequestedServerVersion) {
            throw new Exceptions.ServiceVersionException(
                ExtensionMethods.stringFormatting.Format(
                    "property: {0} is incompatible with requested version: {1}",//Strings.PropertyIncompatibleWithRequestVersion,
                    propertyDefinition.Name,
                    ExchangeVersion[propertyDefinition.Version]), null);
        }

        // If the property bag is not in the loading state, we need to verify whether
        // the property can actually be set or updated.
        if (!this.loading) {
            // If the owner is new and if the property cannot be set, throw.
            if (this.Owner.IsNew && !propertyDefinition.HasFlag(PropertyDefinitionFlags.CanSet, this.Owner.Service.RequestedServerVersion)) {
                throw new Error("property is readonly\n" + JSON.stringify(propertyDefinition));//  Exceptions.ServiceObjectPropertyException(Strings.PropertyIsReadOnly, propertyDefinition);
            }

            if (!this.Owner.IsNew) {
                // If owner is an item attachment, properties cannot be updated (EWS doesn't support updating item attachments)
                var isItem = this.owner.IsItemInstance();// this.owner instanceof Item;
                //debugger;
                //var ownerItem = <Item>this.Owner; - implemented IsAttachment on service object to remove dependency to Item object.
                if (isItem && this.owner.IsAttachment) { // ownerItem.IsAttachment) {
                    throw new Exceptions.ServiceObjectPropertyException("Item attachment cannot be updated"/*Strings.ItemAttachmentCannotBeUpdated*/, propertyDefinition);
                }

                // If the property cannot be deleted, throw.
                if (value == null && !propertyDefinition.HasFlag(PropertyDefinitionFlags.CanDelete)) {
                    throw new Exceptions.ServiceObjectPropertyException("property can not be deleted"/*Strings.PropertyCannotBeDeleted*/, propertyDefinition);
                }

                // If the property cannot be updated, throw.
                if (!propertyDefinition.HasFlag(PropertyDefinitionFlags.CanUpdate)) {
                    throw new Exceptions.ServiceObjectPropertyException("propery can not be updated"/*Strings.PropertyCannotBeUpdated*/, propertyDefinition);
                }
            }
        }

        // If the value is set to null, delete the property.
        if (value == null) {
            this.DeleteProperty(propertyDefinition);
        }
        else {
            var complexProperty: ComplexProperty = null;
            var currentValue = this.properties.get(propertyDefinition);

            if (currentValue) {
                complexProperty = currentValue;

                if (complexProperty != null) {
                    var pos = complexProperty.OnChange.indexOf(this.PropertyChanged); //cant do += or -= in javascript (hopefully in ECMA6)
                    if (pos >= 0) complexProperty.OnChange.splice(pos, 1); //see above line comment ^
                }
            }

            // If the property was to be deleted, the deletion becomes an update.
            if (this.deletedProperties.remove(propertyDefinition)) {
                PropertyBag.AddToChangeList(propertyDefinition, this.modifiedProperties);

            }
            else {
                // If the property value was not set, we have a newly set property.
                if (this.properties.KeyNames.indexOf(propertyDefinition.Name) == -1 /*.ContainsKey(propertyDefinition)*/) {
                    PropertyBag.AddToChangeList(propertyDefinition, this.addedProperties);
                }
                else {
                    // The last case is that we have a modified property.
                    if (this.modifiedProperties.indexOf(propertyDefinition) == -1 /*.Contains(propertyDefinition)*/) {
                        PropertyBag.AddToChangeList(propertyDefinition, this.modifiedProperties);
                    }
                }
            }

            this.InitComplexProperty(value instanceof ComplexProperty ? <ComplexProperty> value : undefined);
            this.properties.set(propertyDefinition, value);

            this.Changed();
        }
    }


    //ToJson(service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    //ToJsonForCreate(service: ExchangeService, jsonObject: JsonObject): any { throw new Error("Not implemented."); }
    //ToJsonForUpdate(service: ExchangeService, jsonObject: JsonObject): any { throw new Error("Not implemented."); }
    TryGetProperty(propertyDefinition: PropertyDefinition, propertyValue: IOutParam<any>): boolean {
        var serviceException: IOutParam<Exceptions.ServiceLocalException> = { value: null };
        propertyValue.value = this.GetPropertyValueOrException(propertyDefinition, serviceException);
        return serviceException.value == null;
    }
    TryGetPropertyAs<T>(propertyDefinition: PropertyDefinition, propertyValue: IOutParam<T>): boolean {
        // Verify that the type parameter and property definition's type are compatible.
        debugger;//todo: fix isassignablefrom
        //if (!typeof (T).IsAssignableFrom(propertyDefinition.Type)) {
        //    string errorMessage = ExtensionMethods.stringFormatting.Format(
        //        Strings.PropertyDefinitionTypeMismatch,
        //        EwsUtilities.GetPrintableTypeName(propertyDefinition.Type),
        //        EwsUtilities.GetPrintableTypeName(typeof (T)));
        //    throw new ArgumentException(errorMessage, "propertyDefinition");
        //}

        var outValue: IOutParam<T>;

        var result = this.TryGetProperty(propertyDefinition, outValue);

        propertyValue.value = result ? outValue.value : undefined;

        return result;
    }
    TryGetValue(propertyDefinition: PropertyDefinition, propertyValue: IOutParam<any>): boolean { return this.properties.tryGet(propertyDefinition, propertyValue); }
    Validate(): void {
        for (var item in this.addedProperties) {
            var propertyDefinition: PropertyDefinition = item;
            this.ValidatePropertyValue(propertyDefinition);
        }

        for (var item in this.modifiedProperties) {
            var propertyDefinition: PropertyDefinition = item;
            this.ValidatePropertyValue(propertyDefinition);
        }
    }
    ValidatePropertyValue(propertyDefinition: PropertyDefinition): void {
        var propertyValue: IOutParam<any> = { value: null };
        if (this.TryGetProperty(propertyDefinition, propertyValue)) {
            //todo: check for interface somehow;
            //ISelfValidate validatingValue = propertyValue as ISelfValidate;
            //if (validatingValue != null) {
            //    validatingValue.Validate();
            //}

            //todo: fix interface check based on solution above (when available), this is alternate check
            var validatingValue: ISelfValidate = propertyValue.value;
            if (validatingValue != null && validatingValue.Validate)
                validatingValue.Validate();
        }
    }
    //WriteDeleteUpdateToJson(jsonUpdates: System.Collections.Generic.List<T>, propertyDefinition: PropertyDefinition, propertyValue: any, service: ExchangeService): any { throw new Error("Not implemented."); }
    WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, propertyDefinition: PropertyDefinition, propertyValue: any): void {
        // The following test should not be necessary since the property bag prevents
        // properties to be deleted (set to null) if they don't have the CanDelete flag,
        // but it doesn't hurt...
        if (propertyDefinition.HasFlag(PropertyDefinitionFlags.CanDelete)) {
            var handled = false;

            //todo: check interface somehow
            //ICustomUpdateSerializer updateSerializer = propertyValue as ICustomUpdateSerializer;

            //if (updateSerializer != null) {
            //    handled = updateSerializer.WriteDeleteUpdateToXml(writer, this.Owner);
            //}

            //todo: fix interface check based on solution above (when available), this is alternate check
            var updateSerializer: ICustomUpdateSerializer = propertyValue;
            if (propertyValue != null && propertyValue != undefined && propertyValue.WriteDeleteUpdateToXml)
                handled = updateSerializer.WriteDeleteUpdateToXml(writer, this.Owner);


            if (!handled) {
                writer.WriteStartElement(XmlNamespace.Types, this.Owner.GetDeleteFieldXmlElementName());
                propertyDefinition.WriteToXml(writer);
                writer.WriteEndElement();
            }
        }
    }
    //WriteSetUpdateToJson(jsonUpdates: System.Collections.Generic.List<T>, propertyDefinition: PropertyDefinition, service: ExchangeService): any { throw new Error("Not implemented."); }
    WriteSetUpdateToXml(writer: EwsServiceXmlWriter, propertyDefinition: PropertyDefinition): void {
        // The following test should not be necessary since the property bag prevents
        // properties to be updated if they don't have the CanUpdate flag, but it
        // doesn't hurt...
        if (propertyDefinition.HasFlag(PropertyDefinitionFlags.CanUpdate)) {
            var propertyValue = this._propGet(propertyDefinition);

            var handled = false;

            //todo: check interface somehow, using alternate method
            var updateSerializer: ICustomUpdateSerializer = propertyValue;

            if (updateSerializer != null && updateSerializer.WriteSetUpdateToXml) {
                handled = updateSerializer.WriteSetUpdateToXml(
                    writer,
                    this.Owner,
                    propertyDefinition);
            }

            if (!handled) {
                writer.WriteStartElement(XmlNamespace.Types, this.Owner.GetSetFieldXmlElementName());

                propertyDefinition.WriteToXml(writer);

                writer.WriteStartElement(XmlNamespace.Types, this.Owner.GetXmlElementName());
                propertyDefinition.WritePropertyValueToXml(writer, this, true /* isUpdateOperation */);
                writer.WriteEndElement();

                writer.WriteEndElement();
            }
        }
    }
    WriteToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Types, this.Owner.GetXmlElementName());

        debugger; //fix Schema objects Ienumerable.

        //
        for (var item in this.Owner.Schema.GetEnumerator()) {
            // The following test should not be necessary since the property bag prevents
            // properties to be set if they don't have the CanSet flag, but it doesn't hurt...
            var propertyDefinition: PropertyDefinition = item;
            if (propertyDefinition.HasFlag(PropertyDefinitionFlags.CanSet, writer.Service.RequestedServerVersion)) {
                if (this.Contains(propertyDefinition)) {
                    propertyDefinition.WritePropertyValueToXml(writer, this, false /* isUpdateOperation */);
                }
            }
        }

        writer.WriteEndElement();
    }
    WriteToXmlForUpdate(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Types, this.Owner.GetChangeXmlElementName());

        this.Owner.GetId().WriteToXml(writer);

        writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Updates);

        for (var item in this.addedProperties) {
            var propertyDefinition: PropertyDefinition = item;
            this.WriteSetUpdateToXml(writer, propertyDefinition);
        }

        for (var item in this.modifiedProperties) {
            var propertyDefinition: PropertyDefinition = item;
            this.WriteSetUpdateToXml(writer, propertyDefinition);
        }

        for (var kv in this.deletedProperties.Items) {
            var property: KeyValuePair<PropertyDefinition, any> = item;
            this.WriteDeleteUpdateToXml(
                writer,
                property.key,
                property.value);
        }

        writer.WriteEndElement();
        writer.WriteEndElement();
    }
}


export = PropertyBag;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
