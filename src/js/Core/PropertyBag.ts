import { ArrayHelper, StringHelper, TypeSystem } from "../ExtensionMethods";
import { BasePropertySet } from "../Enumerations/BasePropertySet";
import { ComplexProperty } from "../ComplexProperties/ComplexProperty";
import { ComplexPropertyDefinitionBase } from "../PropertyDefinitions/ComplexPropertyDefinitionBase";
import { Dictionary, DictionaryWithPropertyDefitionKey, KeyValuePair } from "../AltDictionary";
import { EwsLogging } from "./EwsLogging";
import { EwsServiceXmlReader } from "./EwsServiceXmlReader";
import { EwsServiceXmlWriter } from "./EwsServiceXmlWriter";
import { EwsUtilities } from "./EwsUtilities";
import { ExchangeService } from "./ExchangeService";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { Folder } from "./ServiceObjects/Folders/Folder";
import { ICustomUpdateSerializer } from "../Interfaces/ICustomXmlUpdateSerializer";
import { IOutParam } from "../Interfaces/IOutParam";
import { IOwnedProperty } from "../Interfaces/IOwnedProperty";
import { ISelfValidate } from "../Interfaces/ISelfValidate";
import { Item } from "./ServiceObjects/Items/Item";
import { PropertyDefinition } from "../PropertyDefinitions/PropertyDefinition";
import { PropertyDefinitionFlags } from "../Enumerations/PropertyDefinitionFlags";
import { PropertySet } from "./PropertySet";
import { ServiceLocalException } from "../Exceptions/ServiceLocalException";
import { ServiceObject } from "./ServiceObjects/ServiceObject";
import { ServiceObjectPropertyException } from "../Exceptions/ServiceObjectPropertyException";
import { ServiceVersionException } from "../Exceptions/ServiceVersionException";
import { Strings } from "../Strings";
import { TypeContainer } from "../TypeContainer";
import { TypeGuards } from "../Interfaces/TypeGuards"
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

/**
 * @internal Represents a property bag keyed on PropertyDefinition objects.
 */
export class PropertyBag {

    private owner: ServiceObject = null;
    private isDirty: boolean = false;
    private loading: boolean = false;
    private onlySummaryPropertiesRequested: boolean = false;
    private loadedProperties: PropertyDefinition[] = [];
    private properties: Dictionary<PropertyDefinition, any> = new DictionaryWithPropertyDefitionKey<PropertyDefinition, any>();
    private deletedProperties: Dictionary<PropertyDefinition, any> = new DictionaryWithPropertyDefitionKey<PropertyDefinition, any>();
    private modifiedProperties: PropertyDefinition[] = [];
    private addedProperties: PropertyDefinition[] = [];
    private requestedPropertySet: PropertySet = null;

    /**
     * @internal Gets a dictionary holding the bag's properties.
     */
    get Properties(): Dictionary<PropertyDefinition, any> {
        return this.properties;
    }

    /**
     * @internal Gets the owner of this bag.
     */
    get Owner(): ServiceObject {
        return this.owner;
    }

    /**
     * @internal True if the bag has pending changes, false otherwise.
     */
    get IsDirty(): boolean {
        let changes = this.modifiedProperties.length + this.deletedProperties.length + this.addedProperties.length;
        return changes > 0 || this.isDirty;
    }

    /**
     * @internal Initializes a new instance of **PropertyBag**.
     *
     * @param   {ServiceObject}   owner   The owner of the bag.
     */
    constructor(owner: ServiceObject) {
        EwsLogging.Assert(
            owner != null,
            "PropertyBag.ctor",
            "owner is null");

        this.owner = owner;
    }

    /**
     * @internal Gets or sets the value of a property.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property to get or set.
     * @return  {any}                   An object representing the value of the property.
     */
    _getItem(propertyDefinition: PropertyDefinition): any {
        let serviceException: IOutParam<ServiceLocalException> = { outValue: null, exception: null };
        let propertyValue = this.GetPropertyValueOrException(propertyDefinition, serviceException);
        if (serviceException.outValue === null) {
            return propertyValue;
        }
        else {
            throw serviceException.outValue;
        }
    }
    /**
     * @internal Gets or sets the value of a property.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property to get or set.
     * @return  {any}                   An object representing the value of the property.
     */
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
                let isItem = this.owner instanceof TypeContainer.Item;  //ref: //info: TypeContainer contains constructor of Item (not instance) to evade circular dependency. Assigned at bootstarp
                //debugger;
                //let ownerItem = <Item>this.Owner; - implemented IsAttachment on service object to remove dependency to Item object.
                if (isItem && (<Item>this.owner).IsAttachment) { // ownerItem.IsAttachment) {
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
            let complexProperty: ComplexProperty = null;
            let currentValue = this.properties.get(propertyDefinition);

            if (currentValue) {
                complexProperty = currentValue;

                if (complexProperty instanceof ComplexProperty) {
                    ArrayHelper.RemoveEntry(complexProperty.OnChange, this.PropertyChanged);  //cant do += or -= in javascript (hopefully in ECMA6)                    
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

            this.InitComplexProperty(value instanceof ComplexProperty ? <ComplexProperty>value : undefined);
            this.properties.set(propertyDefinition, value);

            this.Changed();
        }
    }

    /**
     * @internal Adds the specified property to the specified change list if it is not already present.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property to add to the change list.
     * @param   {PropertyDefinition[]}  changeList           The change list to add the property to.
     */
    static AddToChangeList(propertyDefinition: PropertyDefinition, changeList: PropertyDefinition[] /*System.Collections.Generic.List<PropertyDefinition>*/): void {
        if (changeList.indexOf(propertyDefinition) < 0) {
            changeList.push(propertyDefinition);
        }
    }

    /**
     * @internal Sets the isDirty flag to true and triggers dispatch of the change event to the owner of the property bag.
     * Changed must be called whenever an operation that changes the state of this property bag is performed (e.g. adding or removing a property).
     */
    Changed(): void {
        this.isDirty = true;

        this.owner.Changed();
    }

    /**
     * @internal Clears the bag.
     */
    Clear(): void {
        this.ClearChangeLog();
        this.properties.clear();
        this.loadedProperties.splice(0);
        this.requestedPropertySet = undefined;
    }

    /**
     * @internal Clears the bag's change log.
     */
    ClearChangeLog(): void {
        this.deletedProperties.clear();
        this.modifiedProperties.splice(0);
        this.addedProperties.splice(0);

        for (let val of this.properties.Values) {
            let complexProperty = <ComplexProperty>val;

            if (complexProperty instanceof ComplexProperty) {
                complexProperty.ClearChangeLog();
            }
        }

        this.isDirty = false;
    }

    /**
     * @internal Determines whether the property bag contains a specific property.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property to check against.
     * @return  {boolean}               True if the specified property is in the bag, false otherwise.
     */
    Contains(propertyDefinition: PropertyDefinition): boolean {
        return this.properties.containsKey(propertyDefinition);
    }

    /**
     * @internal Deletes the property from the bag.
     *
     * @param   {PropertyDefinition}   propertyDefinition   The property to delete.
     */
    DeleteProperty(propertyDefinition: PropertyDefinition): void {
        if (!this.deletedProperties.containsKey(propertyDefinition)) {
            let propertyValue: IOutParam<any> = { outValue: null };

            this.properties.tryGetValue(propertyDefinition, propertyValue);

            this.properties.remove(propertyDefinition);
            let modifiedIndex = this.modifiedProperties.indexOf(propertyDefinition);
            if (modifiedIndex >= 0)
                this.modifiedProperties.splice(modifiedIndex, 1);

            this.deletedProperties.Add(propertyDefinition, propertyValue);

            let complexProperty = <ComplexProperty>propertyValue.outValue;

            if (complexProperty instanceof ComplexProperty) {
                ArrayHelper.RemoveEntry(complexProperty.OnChange, this.PropertyChanged); // -= this.PropertyChanged; // counld not do c# like event -= in js                
            }
        }
    }

    /**
     * @internal Determines whether an EWS UpdateItem/UpdateFolder call is necessary to save the changes that occurred in the bag.
     *
     * @return  {boolean}      True if an UpdateItem/UpdateFolder call is necessary, false otherwise.
     */
    GetIsUpdateCallNecessary(): boolean {
        let propertyDefinitions: PropertyDefinition[] = [];

        propertyDefinitions = propertyDefinitions.concat(this.addedProperties);
        propertyDefinitions = propertyDefinitions.concat(this.modifiedProperties);
        propertyDefinitions = propertyDefinitions.concat(this.deletedProperties.Keys);

        for (let propertyDefinition of propertyDefinitions) {
            if (propertyDefinition.HasFlag(PropertyDefinitionFlags.CanUpdate)) {
                return true;
            }
        }
        return false;
    }

    /**
     * @internal Gets the name of the property update item.
     *
     * @param   {ServiceObject}     serviceObject   The service object.
     * @return  {string}            [description]
     */
    static GetPropertyUpdateItemName(serviceObject: ServiceObject): string {
        return serviceObject instanceof TypeContainer.Folder ? //ref: //info: TypeContainer contains constructor of Folder (not instance) to evade circular dependency. Assigned at bootstarp
            XmlElementNames.Folder :
            XmlElementNames.Item;
    }

    /**
     * Gets the property value.
     *
     * @param   {PropertyDefinition}                    propertyDefinition   The property definition.
     * @param   { IOutParam<ServiceLocalException>}     exception            Exception that would be raised if there's an error retrieving the property.
     * @return  {any}                                   Propert value. May be null.
     */
    private GetPropertyValueOrException(propertyDefinition: PropertyDefinition, exception: IOutParam<ServiceLocalException>): any {
        let propertyValue: IOutParam<any> = { outValue: null };

        if (propertyDefinition.Version > this.Owner.Service.RequestedServerVersion) {
            exception.outValue = new ServiceVersionException(
                StringHelper.Format(
                    Strings.PropertyIncompatibleWithRequestVersion,
                    propertyDefinition.Name,
                    ExchangeVersion[propertyDefinition.Version]));
            return null;
        }

        if (this.TryGetValue(propertyDefinition, propertyValue)) {
            // If the requested property is in the bag, return it.

            return propertyValue.outValue;
        }
        else {
            if (propertyDefinition.HasFlag(PropertyDefinitionFlags.AutoInstantiateOnRead)) {
                // The requested property is an auto-instantiate-on-read property
                let complexPropertyDefinition = <ComplexPropertyDefinitionBase>propertyDefinition;

                EwsLogging.Assert(
                    (complexPropertyDefinition instanceof ComplexPropertyDefinitionBase),
                    "PropertyBag.get_this[]",
                    "propertyDefinition is marked with AutoInstantiateOnRead but is not a descendant of ComplexPropertyDefinitionBase");

                propertyValue.outValue = complexPropertyDefinition.CreatePropertyInstance(this.Owner);

                if (propertyValue.outValue != null) {
                    this.InitComplexProperty(<ComplexProperty>propertyValue.outValue);
                    this.properties.set(propertyDefinition, propertyValue.outValue);
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
                        let errorMessage = this.IsRequestedProperty(propertyDefinition)
                            ? Strings.ValuePropertyNotLoaded
                            : Strings.ValuePropertyNotAssigned;
                        exception.outValue = new ServiceObjectPropertyException(errorMessage, propertyDefinition);
                    }
                }
            }

            return propertyValue.outValue;
        }
    }

    /**
     * Initializes a ComplexProperty instance. When a property is inserted into the bag, it needs to be initialized in order for changes that occur on that property to be properly detected and dispatched.
     *
     * @param   {ComplexProperty}   complexProperty   The ComplexProperty instance to initialize.
     */
    private InitComplexProperty(complexProperty: ComplexProperty): void {

        if (complexProperty) {
            complexProperty.OnChange.push(this.PropertyChanged.bind(this)); // can't do += in javascript;

            if (TypeGuards.isIOwnedProperty(complexProperty)) { //IOwnedProperty ownedProperty = complexProperty as IOwnedProperty;
                complexProperty.Owner = this.Owner;
            }
        }
    }

    /**
     * @internal Determines whether specified property is loaded. This also includes properties that were requested when the property bag was loaded but were not returned by the server. In this case, the property value will be null.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property definition.
     * @return  {boolean}               true if property was loaded or requested; otherwise, false.
     */
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

    /**
     * @internal Determines whether the specified property has been updated.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property definition.
     * @return  {boolean}               true if the specified property has been updated; otherwise, false.
     */    
    IsPropertyUpdated(propertyDefinition: PropertyDefinition): boolean {
        return this.modifiedProperties.indexOf(propertyDefinition) >= 0 || this.addedProperties.indexOf(propertyDefinition) >= 0;
    }

    /**
     * Determines whether specified property was requested.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property definition.
     * @return  {boolean}               true if property was requested; otherwise, false.
     */
    private IsRequestedProperty(propertyDefinition: PropertyDefinition): boolean {
        // If no requested property set, then property wasn't requested.
        if (this.requestedPropertySet == null || this.requestedPropertySet == undefined) {
            return false;
        }

        // If base property set is all first-class properties, use the appropriate list of
        // property definitions to see if this property was requested. Otherwise, property had
        // to be explicitly requested and needs to be listed in AdditionalProperties.
        if (this.requestedPropertySet.BasePropertySet == BasePropertySet.FirstClassProperties) {
            let firstClassProps = this.onlySummaryPropertiesRequested
                ? this.Owner.Schema.FirstClassSummaryProperties
                : this.Owner.Schema.FirstClassProperties;

            return firstClassProps.indexOf(propertyDefinition) >= 0 ||
                this.requestedPropertySet.Contains(propertyDefinition);
        }
        else {
            return this.requestedPropertySet.Contains(propertyDefinition);
        }
    }

    /**
     * @internal Loads from xml js object.
     *
     * @param   {any}   jsObject                The json service object.
     * @param   {ExchangeService}   service                          The service.
     * @param   {boolean}   clear                            Indicates whether the bag should be cleared before properties are loaded.
     * @param   {PropertySet}   requestedPropertySet             The requested property set.
     * @param   {boolean}   onlySummaryPropertiesRequested   Indicates whether summary or full properties were requested.
     */
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

            for (let key in jsObject) {
                if (key.indexOf("__") === 0) //skip xmljsobject conversion entries like __type and __prefix
                    continue;

                if (jsObject.hasOwnProperty(key)) {
                    let element = jsObject[key];

                    let propertyDefinition: IOutParam<PropertyDefinition> = { outValue: null };

                    if (this.owner.Schema.TryGetPropertyDefinition(key, propertyDefinition)) {
                        EwsLogging.Assert(false, EwsUtilities.GetPrintableTypeName(propertyDefinition.outValue), "\t\tLoading property :\t\t" + key);
                        propertyDefinition.outValue.LoadPropertyValueFromXmlJsObject(element, service, this);
                        this.loadedProperties.push(propertyDefinition.outValue);
                        EwsLogging.DebugLog(this._getItem(propertyDefinition.outValue), true);//todo:remove this after testing
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
            EwsLogging.Log(exception);
        }
        finally {
            this.loading = false;
        }
    }

    /**
     * @internal Handles a change event for the specified property.
     *
     * @param   {ComplexProperty}   complexProperty   The property that changes.
     */
    PropertyChanged(complexProperty: ComplexProperty): void {
        for (let keyValuePair of this.properties.Items) {
            if (keyValuePair.value == complexProperty) {
                if (!this.deletedProperties.containsKey(keyValuePair.key)) {
                    PropertyBag.AddToChangeList(keyValuePair.key, this.modifiedProperties);
                    this.Changed();
                }
            }
        }
    }

    /**
     * @internal Tries to get a property value based on a property definition.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property definition.
     * @param   {IOutParam<any>}        propertyValue        The property value.
     * @return  {boolean}               True if property was retrieved.
     */
    TryGetProperty(propertyDefinition: PropertyDefinition, propertyValue: IOutParam<any>): boolean {
        let serviceException: IOutParam<ServiceLocalException> = { outValue: null };
        propertyValue.outValue = this.GetPropertyValueOrException(propertyDefinition, serviceException);
        return serviceException.outValue == null;
    }

    /**
     * @internal Tries to get a property value based on a property definition.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property definition.
     * @param   {IOutParam<any>}        propertyValue        The property value.
     * @return  {boolean}               True if property was retrieved.
     */
    TryGetPropertyAs<T>(propertyDefinition: PropertyDefinition, propertyValue: IOutParam<T>): boolean {
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

        let outValue: IOutParam<T> = { outValue: null };

        let result = this.TryGetProperty(propertyDefinition, outValue);

        propertyValue.outValue = result ? outValue.outValue : undefined;

        return result;
    }

    /**
     * @internal Tries to retrieve the value of the specified property.
     *
     * @param   {PropertyDefinition}    propertyDefinition   The property for which to retrieve a value.
     * @param   {IOutParam<any>}        propertyValue        If the method succeeds, contains the value of the property.
     * @return  {boolean}               True if the value could be retrieved, false otherwise.
     */
    TryGetValue(propertyDefinition: PropertyDefinition, propertyValue: IOutParam<any>): boolean {
        return this.properties.tryGetValue(propertyDefinition, propertyValue);
    }

    /**
     * @internal Validate property bag instance.
     */
    Validate(): void {
        for (let propertyDefinition of this.addedProperties) {
            this.ValidatePropertyValue(propertyDefinition);
        }

        for (let propertyDefinition of this.modifiedProperties) {
            this.ValidatePropertyValue(propertyDefinition);
        }
    }

    /**
     * Validates the property value.
     */
    private ValidatePropertyValue(propertyDefinition: PropertyDefinition): void {
        let propertyValue: IOutParam<any> = { outValue: null };
        if (this.TryGetProperty(propertyDefinition, propertyValue)) {

            if (TypeGuards.isISelfValidate(propertyValue.outValue)) {
                propertyValue.outValue.Validate();
            }
        }
    }

    /**
     * Writes an EWS DeleteUpdate opeartion for the specified property.
     *
     * @param   {EwsServiceXmlWriter}   writer               The writer to write the update to.
     * @param   {PropertyDefinition}    propertyDefinition   The property fro which to write the update.
     * @param   {any}                   propertyValue        The current value of the property.
     */
    private WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, propertyDefinition: PropertyDefinition, propertyValue: any): void {
        // The following test should not be necessary since the property bag prevents
        // properties to be deleted (set to null) if they don't have the CanDelete flag,
        // but it doesn't hurt...
        if (propertyDefinition.HasFlag(PropertyDefinitionFlags.CanDelete)) {
            let handled = false;

            if (TypeGuards.isICustomUpdateSerializer(propertyValue)) { //ICustomUpdateSerializer updateSerializer = propertyValue as ICustomUpdateSerializer;
                handled = propertyValue.WriteDeleteUpdateToXml(writer, this.Owner);
            }

            if (!handled) {
                writer.WriteStartElement(XmlNamespace.Types, this.Owner.GetDeleteFieldXmlElementName());
                propertyDefinition.WriteToXml(writer);
                writer.WriteEndElement();
            }
        }
    }

    /**
     * Writes an EWS SetUpdate opeartion for the specified property.
     *
     * @param   {EwsServiceXmlWriter}   writer               The writer to write the update to.
     * @param   {PropertyDefinition}    propertyDefinition   The property fro which to write the update.
     */
    private WriteSetUpdateToXml(writer: EwsServiceXmlWriter, propertyDefinition: PropertyDefinition): void {
        // The following test should not be necessary since the property bag prevents
        // properties to be updated if they don't have the CanUpdate flag, but it
        // doesn't hurt...
        if (propertyDefinition.HasFlag(PropertyDefinitionFlags.CanUpdate)) {
            let propertyValue = this._getItem(propertyDefinition);

            let handled = false;

            if (TypeGuards.isICustomUpdateSerializer(propertyValue)) { //ICustomUpdateSerializer updateSerializer = propertyValue as ICustomUpdateSerializer;
                handled = propertyValue.WriteSetUpdateToXml(
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

    /**
     * @internal Writes the bag's properties to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer to write the properties to.
     */
    WriteToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Types, this.Owner.GetXmlElementName());

        //debug: //todo: fix Schema objects IEnumerable.

        //
        for (let propertyDefinition of this.Owner.Schema.GetEnumerator()) {
            // The following test should not be necessary since the property bag prevents
            // properties to be set if they don't have the CanSet flag, but it doesn't hurt...
            if (propertyDefinition.HasFlag(PropertyDefinitionFlags.CanSet, writer.Service.RequestedServerVersion)) {
                if (this.Contains(propertyDefinition)) {
                    propertyDefinition.WritePropertyValueToXml(writer, this, false /* isUpdateOperation */);
                }
            }
        }

        writer.WriteEndElement();
    }

    /**
     * @internal Writes the EWS update operations corresponding to the changes that occurred in the bag to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer to write the updates to.
     */
    WriteToXmlForUpdate(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Types, this.Owner.GetChangeXmlElementName());

        this.Owner.GetId().WriteToXml(writer);

        writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Updates);

        for (let propertyDefinition of this.addedProperties) {
            this.WriteSetUpdateToXml(writer, propertyDefinition);
        }

        for (let propertyDefinition of this.modifiedProperties) {
            this.WriteSetUpdateToXml(writer, propertyDefinition);
        }

        for (let kv of this.deletedProperties.Items) {
            this.WriteDeleteUpdateToXml(
                writer,
                kv.key,
                kv.value);
        }

        writer.WriteEndElement();
        writer.WriteEndElement();
    }
}