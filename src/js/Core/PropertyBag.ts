import {ExchangeService} from "./ExchangeService";
import {Strings} from "../Strings";
import {ServiceVersionException} from "../Exceptions/ServiceVersionException";
import {ServiceObjectPropertyException} from "../Exceptions/ServiceObjectPropertyException";
import {ServiceLocalException} from "../Exceptions/ServiceLocalException";
import {ServiceObject} from "./ServiceObjects/ServiceObject";
import {PropertySet} from "./PropertySet";
import {ComplexProperty} from "../ComplexProperties/ComplexProperty";
import {IOutParam} from "../Interfaces/IOutParam";
import {Folder} from "./ServiceObjects/Folders/Folder";
import {ComplexPropertyDefinitionBase} from "../PropertyDefinitions/ComplexPropertyDefinitionBase";
import {IOwnedProperty} from "../Interfaces/IOwnedProperty";
import {BasePropertySet} from "../Enumerations/BasePropertySet";
import {EwsServiceXmlReader} from "./EwsServiceXmlReader";
import {ISelfValidate} from "../Interfaces/ISelfValidate";

import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {EwsServiceXmlWriter} from "./EwsServiceXmlWriter";
import {EwsUtilities} from "./EwsUtilities";
import {EwsLogging} from "./EwsLogging";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ICustomUpdateSerializer} from "../Interfaces/ICustomXmlUpdateSerializer";

import {PropertyDefinition} from "../PropertyDefinitions/PropertyDefinition";

import {PropDictionary, KeyValuePair} from "../AltDictionary";

import {StringHelper, TypeSystem} from "../ExtensionMethods";


//todo: should be done
export class PropertyBag {
    get Properties(): PropDictionary<PropertyDefinition, any> { return this.properties; }//System.Collections.Generic.Dictionary<PropertyDefinition, any>;
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

    constructor(owner: ServiceObject) {
        EwsLogging.Assert(
            owner != null,
            "PropertyBag.ctor",
            "owner is null");

        this.owner = owner;
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

        for (var val of this.properties.Values) {
            var complexProperty = <ComplexProperty>val;

            if (complexProperty instanceof ComplexProperty) {
                complexProperty.ClearChangeLog();
            }
        }

        this.isDirty = false;
    }
    Contains(propertyDefinition: PropertyDefinition): boolean { return this.properties.containsKey(propertyDefinition); }
    //CreateJsonDeleteUpdate(propertyDefinition: PropertyDefinitionBase, service: ExchangeService, serviceObject: ServiceObject): JsonObject { throw new Error("PropertyBag.ts - CreateJsonDeleteUpdate : Not implemented."); }
    //CreateJsonSetUpdate(propertyDefinition: PropertyDefinition, service: ExchangeService, serviceObject: ServiceObject, propertyBag: PropertyBag): JsonObject { throw new Error("PropertyBag.ts - CreateJsonSetUpdate : Not implemented."); }
    //CreateJsonSetUpdate(value: ExtendedProperty, service: ExchangeService, serviceObject: ServiceObject): JsonObject { throw new Error("PropertyBag.ts - CreateJsonSetUpdate : Not implemented."); }
    DeleteProperty(propertyDefinition: PropertyDefinition): void {
        if (!this.deletedProperties.containsKey(propertyDefinition)) {
            var propertyValue: IOutParam<any> = { outValue: null };

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

        for (var item of propertyDefinitions) {
            var propertyDefinition: PropertyDefinition = item;
            if (propertyDefinition.HasFlag(PropertyDefinitionFlags.CanUpdate)) {
                return true;
            }
        }
        return false;
    }
    static GetPropertyUpdateItemName(serviceObject: ServiceObject): string {
        //return serviceObject instanceof Folder ?
        return serviceObject.IsFolderInstance() ? //keep Folder object away from here.
            XmlElementNames.Folder :
            XmlElementNames.Item;
    }
    GetPropertyValueOrException(propertyDefinition: PropertyDefinition, exception: IOutParam<any>): any {
        var outPropertyValue: IOutParam<any> = { outValue: null };
        exception.outValue = null;
        var propertyValue: any;

        if (propertyDefinition.Version > this.Owner.Service.RequestedServerVersion) {
            exception.outValue = new ServiceVersionException(
                StringHelper.Format(
                    Strings.PropertyIncompatibleWithRequestVersion,
                    propertyDefinition.Name,
                    propertyDefinition.Version));
            return null;
        }

        if (this.TryGetValue(propertyDefinition, outPropertyValue)) {
            // If the requested property is in the bag, return it.
            return outPropertyValue.outValue;
        }
        else {
            if (propertyDefinition.HasFlag(PropertyDefinitionFlags.AutoInstantiateOnRead)) {
                // The requested property is an auto-instantiate-on-read property
                var complexPropertyDefinition = <ComplexPropertyDefinitionBase>propertyDefinition;

                EwsLogging.Assert(
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
                        exception.outValue = new ServiceObjectPropertyException(Strings.MustLoadOrAssignPropertyBeforeAccess, propertyDefinition);
                        return null;
                    }

                    // Non-nullable properties (int, bool, etc.) must be assigned or loaded; cannot return null value.
                    if (!propertyDefinition.IsNullable) {
                        var errorMessage = this.IsRequestedProperty(propertyDefinition)
                            ? Strings.ValuePropertyNotLoaded
                            : Strings.ValuePropertyNotAssigned;
                        exception.outValue = new ServiceObjectPropertyException(errorMessage, propertyDefinition);
                    }
                }
            }

            return propertyValue;
        }
    }
    InitComplexProperty(complexProperty: ComplexProperty): void {

        if (complexProperty) {
            complexProperty.OnChange.push(this.PropertyChanged); // can't do += in javascript;

            //var isIOwnedProperty = Object.keys(complexProperty).indexOf("Owner") >= 0; //todo: until fix checking interface by some other means, checking property directly
            var isIOwnedProperty = complexProperty["___implementsInterface"].indexOf("IOwnedProperty") >= 0;
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
    //LoadFromJson(jsonServiceObject: JsonObject, service: ExchangeService, clear: boolean, requestedPropertySet: PropertySet, onlySummaryPropertiesRequested: boolean): any { throw new Error("PropertyBag.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService, clear: boolean, requestedPropertySet: PropertySet, onlySummaryPropertiesRequested: boolean): void {
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
                if (jsObject.hasOwnProperty(key)) {
                    var element = jsObject[key];

                    var propertyDefinition: IOutParam<PropertyDefinition> = { outValue: null };

                    if (this.owner.Schema.TryGetPropertyDefinition(key, propertyDefinition)) {
                        EwsLogging.Assert(false, EwsUtilities.GetPrintableTypeName(propertyDefinition.outValue), "\t\tLoading property :\t\t" + key);
                        propertyDefinition.outValue.LoadPropertyValueFromXmlJsObject(element, service, this);
                        this.loadedProperties.push(propertyDefinition.outValue);
                        EwsLogging.DebugLog(this._getItem(propertyDefinition.outValue), true);//todo:remove this after testing
                    }
                }
            }


            //            var objTypeName: string = jsObject["__type"];
            //            if (StringHelper.IsNullOrEmpty(objTypeName)) {
            //                objTypeName = TypeSystem.GetJsObjectTypeName(jsObject);
            //                jsObject = jsObject[objTypeName];
            //            }
            //            if (StringHelper.IsNullOrEmpty(objTypeName))
            //                throw new Error("error determining typename");
            //
            //            var propertyDefinition: IOutParam<PropertyDefinition> = { value: null };
            //
            //            if (this.Owner.Schema.TryGetPropertyDefinition(objTypeName, propertyDefinition)) {
            //                propertyDefinition.outValue.LoadPropertyValueFromXmlJsObject(jsObject, this);
            //
            //                this.loadedProperties.push(propertyDefinition.outValue);
            //            }
            this.ClearChangeLog();
        }
        finally {
            this.loading = false;
        }
    }
    PropertyChanged(complexProperty: ComplexProperty): void {
        for (var item of this.properties.Items) {
            var keyValuePair: KeyValuePair<PropertyDefinition, any> = item;
            if (keyValuePair.value == complexProperty) {
                if (!this.deletedProperties.containsKey(keyValuePair.key)) {
                    PropertyBag.AddToChangeList(keyValuePair.key, this.modifiedProperties);
                    this.Changed();
                }
            }
        }
    }

    _getItem(propertyDefinition: PropertyDefinition): any {
        var serviceException: ServiceLocalException;
        var outparam: IOutParam<any> = { outValue: null };
        var propertyValue = this.GetPropertyValueOrException(propertyDefinition, outparam);
        if (outparam.outValue == null) {
            return propertyValue;
        }
        else {
            throw serviceException;
        }
    }
    _setItem(propertyDefinition: PropertyDefinition, value: any) {
        if (propertyDefinition.Version > this.Owner.Service.RequestedServerVersion) {
            throw new ServiceVersionException(
                StringHelper.Format(
                    Strings.PropertyIncompatibleWithRequestVersion,
                    propertyDefinition.Name,
                    ExchangeVersion[propertyDefinition.Version]), null);
        }

        // If the property bag is not in the loading state, we need to verify whether
        // the property can actually be set or updated.
        if (!this.loading) {
            // If the owner is new and if the property cannot be set, throw.
            if (this.Owner.IsNew && !propertyDefinition.HasFlag(PropertyDefinitionFlags.CanSet, this.Owner.Service.RequestedServerVersion)) {
                throw new Error("property is readonly\n" + JSON.stringify(propertyDefinition));//  ServiceObjectPropertyException(Strings.PropertyIsReadOnly, propertyDefinition);
            }

            if (!this.Owner.IsNew) {
                // If owner is an item attachment, properties cannot be updated (EWS doesn't support updating item attachments)
                var isItem = this.owner.IsItemInstance();// this.owner instanceof Item;
                //debugger;
                //var ownerItem = <Item>this.Owner; - implemented IsAttachment on service object to remove dependency to Item object.
                if (isItem && this.owner.IsAttachment) { // ownerItem.IsAttachment) {
                    throw new ServiceObjectPropertyException(Strings.ItemAttachmentCannotBeUpdated, propertyDefinition);
                }

                // If the property cannot be deleted, throw.
                if (value == null && !propertyDefinition.HasFlag(PropertyDefinitionFlags.CanDelete)) {
                    throw new ServiceObjectPropertyException(Strings.PropertyCannotBeDeleted, propertyDefinition);
                }

                // If the property cannot be updated, throw.
                if (!propertyDefinition.HasFlag(PropertyDefinitionFlags.CanUpdate)) {
                    throw new ServiceObjectPropertyException(Strings.PropertyCannotBeUpdated, propertyDefinition);
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


    //ToJson(service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("PropertyBag.ts - ToJson : Not implemented."); }
    //ToJsonForCreate(service: ExchangeService, jsonObject: JsonObject): any { throw new Error("PropertyBag.ts - ToJsonForCreate : Not implemented."); }
    //ToJsonForUpdate(service: ExchangeService, jsonObject: JsonObject): any { throw new Error("PropertyBag.ts - ToJsonForUpdate : Not implemented."); }
    TryGetProperty(propertyDefinition: PropertyDefinition, propertyValue: IOutParam<any>): boolean {
        var serviceException: IOutParam<ServiceLocalException> = { outValue: null };
        propertyValue.outValue = this.GetPropertyValueOrException(propertyDefinition, serviceException);
        return serviceException.outValue == null;
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

        propertyValue.outValue = result ? outValue.outValue : undefined;

        return result;
    }
    TryGetValue(propertyDefinition: PropertyDefinition, propertyValue: IOutParam<any>): boolean { return this.properties.tryGet(propertyDefinition, propertyValue); }
    Validate(): void {
        for (var item of this.addedProperties) {
            var propertyDefinition: PropertyDefinition = item;
            this.ValidatePropertyValue(propertyDefinition);
        }

        for (var item of this.modifiedProperties) {
            var propertyDefinition: PropertyDefinition = item;
            this.ValidatePropertyValue(propertyDefinition);
        }
    }
    ValidatePropertyValue(propertyDefinition: PropertyDefinition): void {
        var propertyValue: IOutParam<any> = { outValue: null };
        if (this.TryGetProperty(propertyDefinition, propertyValue)) {
            //todo: check for interface somehow;
            //ISelfValidate validatingValue = propertyValue as ISelfValidate;
            //if (validatingValue != null) {
            //    validatingValue.Validate();
            //}

            //todo: fix interface check based on solution above (when available), this is alternate check
            var validatingValue: ISelfValidate = propertyValue.outValue;
            if (validatingValue != null && validatingValue.Validate)
                validatingValue.Validate();
        }
    }
    //WriteDeleteUpdateToJson(jsonUpdates: System.Collections.Generic.List<T>, propertyDefinition: PropertyDefinition, propertyValue: any, service: ExchangeService): any { throw new Error("PropertyBag.ts - WriteDeleteUpdateToJson : Not implemented."); }
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
    //WriteSetUpdateToJson(jsonUpdates: System.Collections.Generic.List<T>, propertyDefinition: PropertyDefinition, service: ExchangeService): any { throw new Error("PropertyBag.ts - WriteSetUpdateToJson : Not implemented."); }
    WriteSetUpdateToXml(writer: EwsServiceXmlWriter, propertyDefinition: PropertyDefinition): void {
        // The following test should not be necessary since the property bag prevents
        // properties to be updated if they don't have the CanUpdate flag, but it
        // doesn't hurt...
        if (propertyDefinition.HasFlag(PropertyDefinitionFlags.CanUpdate)) {
            var propertyValue = this._getItem(propertyDefinition);

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
        for (var item of this.Owner.Schema.GetEnumerator()) {
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

        for (var item of this.addedProperties) {
            var propertyDefinition: PropertyDefinition = item;
            this.WriteSetUpdateToXml(writer, propertyDefinition);
        }

        for (var item of this.modifiedProperties) {
            var propertyDefinition: PropertyDefinition = item;
            this.WriteSetUpdateToXml(writer, propertyDefinition);
        }

        for (var kv of this.deletedProperties.Items) {
            debugger;
            var property: KeyValuePair<PropertyDefinition, any> = <any>item;
            this.WriteDeleteUpdateToXml(
                writer,
                property.key,
                property.value);
        }

        writer.WriteEndElement();
        writer.WriteEndElement();
    }
}
