import { AffectedTaskOccurrence } from "../../Enumerations/AffectedTaskOccurrence";
import { DeleteMode } from "../../Enumerations/DeleteMode";
import { EwsLogging } from "../EwsLogging";
import { EwsServiceXmlReader } from "../EwsServiceXmlReader";
import { EwsServiceXmlWriter } from "../EwsServiceXmlWriter";
import { ExchangeService } from "../ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { ExtendedPropertyCollection } from "../../ComplexProperties/ExtendedPropertyCollection";
import { ExtendedPropertyDefinition } from "../../PropertyDefinitions/ExtendedPropertyDefinition";
import { InvalidOperationException } from "../../Exceptions/InvalidOperationException";
import { IOutParam } from "../../Interfaces/IOutParam";
import { NotSupportedException } from "../../Exceptions/NotSupportedException";
import { Promise } from "../../Promise";
import { PropertyBag } from "../PropertyBag";
import { PropertyDefinition } from "../../PropertyDefinitions/PropertyDefinition";
import { PropertyDefinitionBase } from "../../PropertyDefinitions/PropertyDefinitionBase";
import { PropertySet } from "../PropertySet";
import { SendCancellationsMode } from "../../Enumerations/SendCancellationsMode";
import { ServiceId } from "../../ComplexProperties/ServiceId";
import { ServiceObjectChangedDelegate } from "../../Misc/DelegateTypes";
import { ServiceObjectPropertyException } from "../../Exceptions/ServiceObjectPropertyException";
import { ServiceObjectSchema } from "./Schemas/ServiceObjectSchema";
import { StringHelper } from "../../ExtensionMethods";
import { Strings } from "../../Strings";
import { XmlElementNames } from "../../Core/XmlElementNames";

/**
 * Represents the base abstract class for all item and folder types.
 */
export abstract class ServiceObject {

    private lockObject: any = {};

    //private service: ExchangeService;
    /** workaround for service variable exposer in console.log */
    private getService: () => ExchangeService;
    private setService: (service: ExchangeService) => void;

    private propertyBag: PropertyBag;
    private xmlElementName: string;

    /**
     * @internal The property bag holding property values for this object.
     */
    get PropertyBag(): PropertyBag { return this.propertyBag; }
    /**
     * Gets the schema associated with this type of object.
     */
    get Schema(): ServiceObjectSchema { return this.GetSchema(); }

    /**
     * Gets the ExchangeService the object is bound to.
     */
    get Service(): ExchangeService { return this.getService(); }
    /**@internal set*/
    set Service(value: ExchangeService) { this.setService(value); }

    /**
     * Indicates whether this object is a real store item, or if it's a local object that has yet to be saved.
     */
    get IsNew(): boolean {
        var id = this.GetId();
        return id == null ? true : !id.IsValid;
    }
    /**
     * Gets a value indicating whether the object has been modified and should be saved.
     */
    get IsDirty(): boolean {
        return this.PropertyBag.IsDirty;
    }

    /**
     * Defines an event that is triggered when the service object changes.
     */
    private OnChange: ServiceObjectChangedDelegate[] = [];

    /**
     * @internal Internal constructor.
     *
     * @param   {ExchangeService}   service   EWS service to which this object belongs.
     */
    constructor(service: ExchangeService) {
        //EwsUtilities.ValidateParam(service, "service");
        //EwsUtilities.ValidateServiceObjectVersion(this, service.RequestedServerVersion);

        //this.Service = service;
        var innerService = service;
        this.setService = (service) => { innerService = service; }
        this.getService = () => { return innerService; }
        this.propertyBag = new PropertyBag(this);
    }

    /**
     * Gets the value of specified property in this instance.
     * This Indexer of c# 
     * 
     * @param   {PropertyDefinitionBase}   propertyDefinition   Definition of the property to get.
     */
    _getItem(propertyDefinition: PropertyDefinitionBase): any {
        var propertyValue: any;

        var propDef: PropertyDefinition = <PropertyDefinition>propertyDefinition;

        if (propDef instanceof PropertyDefinition) {
            return this.PropertyBag._getItem(propDef);
        }
        else {
            var extendedPropDef: ExtendedPropertyDefinition = <ExtendedPropertyDefinition>propertyDefinition;
            if (extendedPropDef instanceof ExtendedPropertyDefinition) {
                if (this.TryGetExtendedProperty(extendedPropDef, propertyValue)) {
                    return propertyValue;
                }
                else {
                    throw new ServiceObjectPropertyException(Strings.MustLoadOrAssignPropertyBeforeAccess, propertyDefinition);
                }
            }
            else {
                // Other subclasses of PropertyDefinitionBase are not supported.
                let constructorName = "Chile of ServiceObject";
                if ((<any>propertyDefinition.constructor).name) {
                    constructorName = (<any>propertyDefinition.constructor).name;
                }
                throw new NotSupportedException(StringHelper.Format(
                    Strings.OperationNotSupportedForPropertyDefinitionType,
                    constructorName));
            }
        }
    }

    /**
     * @internal Triggers dispatch of the change event.
     */
    Changed(): void {
        if (this.OnChange != null) {
            for (var changeDelegate of this.OnChange) {
                changeDelegate(this);
            }
        }
    }

    /**
     * @internal Clears the object's change log.
     */
    ClearChangeLog(): void { this.PropertyBag.ClearChangeLog(); }

    /**
     * @internal Gets the name of the change XML element.
     *
     * @return  {string}      XML element name,
     */
    GetChangeXmlElementName(): string { return XmlElementNames.ItemChange; }

    /**
     * @internal Gets the name of the delete field XML element.
     *
     * @return  {string}      XML element name,
     */
    GetDeleteFieldXmlElementName(): string { return XmlElementNames.DeleteItemField; }

    /**
     * @internal Gets the extended properties collection.
     *
     * @return  {ExtendedPropertyCollection}      Extended properties collection.
     */
    GetExtendedProperties(): ExtendedPropertyCollection { return null; }

    /**
     * @internal The unique Id of this object.
     *
     * @return  {ServiceId}      A ServiceId instance..
     */
    GetId(): ServiceId {
        var idPropertyDefinition = this.GetIdPropertyDefinition();

        var serviceId: IOutParam<any> = { outValue: null };
        if (idPropertyDefinition != null) {
            this.PropertyBag.TryGetValue(idPropertyDefinition, serviceId);
        }

        return <ServiceId>serviceId.outValue;
    }

    /**
     * @internal The property definition for the Id of this object.
     *
     * @return  {PropertyDefinition}      A PropertyDefinition instance.
     */
    GetIdPropertyDefinition(): PropertyDefinition { return null; }

    /**
     * @internal Determines whether properties defined with ScopedDateTimePropertyDefinition require custom time zone scoping.
     *
     * @return  {boolean}      true if this item type requires custom scoping for scoped date/time properties; otherwise, false.
     */
    GetIsCustomDateTimeScopingRequired(): boolean { return false; }

    /**
     * @internal Gets a value indicating whether a time zone SOAP header should be emitted in a CreateItem or UpdateItem request so this item can be property saved or updated.
     *
     * @param   {boolean}     isUpdateOperation   Indicates whether the operation being petrformed is an update operation.
     * @return  {boolean}     true if a time zone SOAP header should be emitted; otherwise, false.
     */
    GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean { return false; }

    /**
     * Gets the collection of loaded property definitions.
     *
     * @return  {PropertyDefinitionBase[]}      Collection of property definitions.
     */
    GetLoadedPropertyDefinitions(): PropertyDefinitionBase[] /*System.Collections.ObjectModel.Collection<PropertyDefinitionBase>*/ {
        var propDefs: PropertyDefinitionBase[] = [];
        for (var propDef of this.PropertyBag.Properties.Keys) {
            propDefs.push(propDef);
        }

        if (this.GetExtendedProperties() != null) {
            for (var extProp of this.GetExtendedProperties().Items) {
                propDefs.push(extProp.PropertyDefinition);
            }
        }

        return propDefs;
    }

    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    abstract GetMinimumRequiredServerVersion(): ExchangeVersion;

    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    abstract GetSchema(): ServiceObjectSchema;

    /**
     * @internal Gets the name of the set field XML element.
     *
     * @return  {string}      XML element name,
     */
    GetSetFieldXmlElementName(): string { return XmlElementNames.SetItemField; }

    /**
     * @internal GetXmlElementName retrieves the XmlElementName of this type based on the EwsObjectDefinition attribute that decorates it, if present.
     *
     * @return  {string}      The XML element name associated with this type.
     */
    GetXmlElementName(): string {
        throw new Error("ServiceObject.ts - GetXmlElementName -  this must be overridden by derived class - can not use reflection to get class attribute in javascript");
        if (StringHelper.IsNullOrEmpty(this.xmlElementName)) {
            this.xmlElementName = this.GetXmlElementNameOverride();

            EwsLogging.Assert(
                !StringHelper.IsNullOrEmpty(this.xmlElementName),
                "EwsObject.GetXmlElementName",
                StringHelper.Format("The class {0} does not have an associated XML element name.", "unknown decendent of ServiceObject - in serviceObject.GetXmlElementname"));
        }
        return this.xmlElementName;
    }

    /**
     * @internal This methods lets subclasses of ServiceObject override the default mechanism by which the XML element name associated with their type is retrieved.
     *
     * @return  {string}      The XML element name associated with this type. If this method returns null or empty, the XML element name associated with this type is determined by the EwsObjectDefinition attribute that decorates the type, if present.
     */
    GetXmlElementNameOverride(): string { return null; }

    /**
     * @internal Deletes the object.
     *
     * @param   {DeleteMode}              deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}   sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
     * @param   {AffectedTaskOccurrence}  affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
     */
    abstract InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): Promise<void>;

    /**
     * @internal Loads the specified set of properties on the object.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     */
    abstract InternalLoad(propertySet: PropertySet): Promise<void>;

    /**
     * Loads the first class properties. Calling this method results in a call to EWS.
     */
    Load(): Promise<void>;

    /**
     * Loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     */
    Load(propertySet?: PropertySet): Promise<void>;
    Load(propertySet?: PropertySet): Promise<void> {
        return this.InternalLoad(propertySet || PropertySet.FirstClassProperties);
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     * @param   {boolean}             clearPropertyBag        if set to true [clear property bag].
     * @param   {PropertySet}         requestedPropertySet    The property set.
     * @param   {boolean}             summaryPropertiesOnly   if set to true [summary props only].
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService, clearPropertyBag: boolean, requestedPropertySet: PropertySet = null, summaryPropertiesOnly: boolean = false): void {
        this.PropertyBag.LoadFromXmlJsObject(
            jsObject,
            service,
            clearPropertyBag,
            requestedPropertySet,
            summaryPropertiesOnly);
    }

    /**
     * @internal Throws exception if this is a new service object.
     */
    ThrowIfThisIsNew(): void {
        if (this.IsNew) {
            throw new InvalidOperationException(Strings.ServiceObjectDoesNotHaveId);
        }
    }

    /**
     * @internal Throws exception if this is not a new service object.
     */
    ThrowIfThisIsNotNew(): void {
        if (!this.IsNew) {
            throw new InvalidOperationException(Strings.ServiceObjectAlreadyHasId);
        }
    }

    /**
     * @internal Try to get the value of a specified extended property in this instance.
     *
     * @param   {ExtendedPropertyDefinition}  propertyDefinition   The property definition.
     * @param   {IOutParam<T>}                propertyValue        The property value.
     * @return  {boolean}                     True if property retrieved, false otherwise.
     */
    TryGetExtendedProperty<T>(propertyDefinition: ExtendedPropertyDefinition, propertyValue: IOutParam<T>): boolean {
        var propertyCollection: ExtendedPropertyCollection = this.GetExtendedProperties();

        if ((propertyCollection != null) &&
            propertyCollection.TryGetValue<T>(propertyDefinition, propertyValue)) {
            return true;
        }
        else {
            propertyValue.outValue = null;//default(T);
            return false;
        }
    }

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
    TryGetProperty<T>(propertyDefinition: PropertyDefinitionBase, propertyValue: IOutParam<T>): boolean {
        var propDef: PropertyDefinition = <PropertyDefinition>propertyDefinition;// as PropertyDefinition;
        //info: fix for compatibility checking, if this is propertydefinition or extendedpropertydefinitionbase
        if (propDef instanceof PropertyDefinition) {
            return this.PropertyBag.TryGetPropertyAs<T>(propDef, propertyValue);
        }
        else {
            //info: fix for compatibility of extendedpropertydefition or propertydefition type.
            var extPropDef: ExtendedPropertyDefinition = <ExtendedPropertyDefinition>propertyDefinition;// as ExtendedPropertyDefinition;
            if (extPropDef instanceof ExtendedPropertyDefinition) {
                return this.TryGetExtendedProperty<T>(extPropDef, propertyValue);
            }
            else {
                // Other subclasses of PropertyDefinitionBase are not supported.
                let constructorName = "Child of ServiceObject";
                if ((<any>propertyDefinition.constructor).name) {
                    constructorName = (<any>propertyDefinition.constructor).name;
                }
                throw new NotSupportedException(StringHelper.Format(
                    Strings.OperationNotSupportedForPropertyDefinitionType,
                    propertyDefinition.Type));
            }
        }
    }

    /**
     * @internal Validates this instance.
     */
    Validate(): void { this.PropertyBag.Validate(); }

    /**
     * @internal Writes service object as XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteToXml(writer: EwsServiceXmlWriter): void { this.PropertyBag.WriteToXml(writer); }

    /**
     * @internal Writes service object for update as XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteToXmlForUpdate(writer: EwsServiceXmlWriter): void { this.PropertyBag.WriteToXmlForUpdate(writer); }
}