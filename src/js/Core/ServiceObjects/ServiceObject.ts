import {IOutParam} from "../../Interfaces/IOutParam";
import {Strings} from "../../Strings";
import {ServiceObjectPropertyException} from "../../Exceptions/ServiceObjectPropertyException";
import {ExtendedPropertyCollection} from "../../ComplexProperties/ExtendedPropertyCollection";
import {ServiceId} from "../../ComplexProperties/ServiceId";
import {PropertyBag} from "../PropertyBag";
import {ServiceObjectSchema} from "./Schemas/ServiceObjectSchema";
import {ExchangeService} from "../ExchangeService";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
import {PropertySet} from "../PropertySet";
import {DeleteMode} from "../../Enumerations/DeleteMode";
import {ServiceObjectChangedDelegate} from "../../Misc/DelegateTypes";
import {SendCancellationsMode} from "../../Enumerations/SendCancellationsMode";
import {AffectedTaskOccurrence} from "../../Enumerations/AffectedTaskOccurrence";
import {PropertyDefinition} from "../../PropertyDefinitions/PropertyDefinition";
import {PropertyDefinitionBase} from "../../PropertyDefinitions/PropertyDefinitionBase";
import {ExtendedPropertyDefinition} from "../../PropertyDefinitions/ExtendedPropertyDefinition";
import {EwsLogging} from "../EwsLogging";
import {StringHelper} from "../../ExtensionMethods";
import {IPromise} from "../../Interfaces";

export class ServiceObject {
    get PropertyBag(): PropertyBag { return this.propertyBag; }
    get Schema(): ServiceObjectSchema { return this.GetSchema(); }
    Item: any;
    Service: ExchangeService;
    get IsNew(): boolean {
        var id = this.GetId();
        return id == null ? true : !id.IsValid;
    }
    get IsDirty(): boolean {
        return this.PropertyBag.IsDirty;
    }
    private lockObject: any = {};
    //private service: ExchangeService;
    private propertyBag: PropertyBag;
    private xmlElementName: string;
    private OnChange: ServiceObjectChangedDelegate[] = [];

    constructor(service: ExchangeService) {
        //EwsUtilities.ValidateParam(service, "service");
        //EwsUtilities.ValidateServiceObjectVersion(this, service.RequestedServerVersion);

        this.Service = service;
        this.propertyBag = new PropertyBag(this);
    }

    /**This Indexer of c# */
    _getItem(propertyDefinition: PropertyDefinitionBase): any {
        var propertyValue: any;

        var propDef: PropertyDefinition = <PropertyDefinition>propertyDefinition;
        if (propDef != null) {
            //todo: check for propertydefinitionbase type or child type;
            return this.PropertyBag._getItem(propDef);
        }
        else {
            var extendedPropDef: ExtendedPropertyDefinition = <ExtendedPropertyDefinition>propertyDefinition;
            if (extendedPropDef != null) {
                if (this.TryGetExtendedProperty(extendedPropDef, propertyValue)) {
                    return propertyValue;
                }
                else {
                    throw new ServiceObjectPropertyException(Strings.MustLoadOrAssignPropertyBeforeAccess, propertyDefinition);
                }
            }
            else {
                // Other subclasses of PropertyDefinitionBase are not supported.
                throw new Error(StringHelper.Format(
                    "not supported for property definition type: {0}",
                    propertyDefinition.constructor));
            }
        }
    }

    Changed(): void {
        if (this.OnChange != null) {
            for (var changeDelegate of this.OnChange) {
                changeDelegate(this);
            }
        }
    }
    ClearChangeLog(): void { this.PropertyBag.ClearChangeLog(); }
    GetChangeXmlElementName(): string { return XmlElementNames.ItemChange; }
    GetDeleteFieldXmlElementName(): string { return XmlElementNames.DeleteItemField; }
    GetExtendedProperties(): ExtendedPropertyCollection { return null; }
    GetId(): ServiceId {
        var idPropertyDefinition = this.GetIdPropertyDefinition();

        var serviceId: IOutParam<any> = { outValue: null };
        if (idPropertyDefinition != null) {
            this.PropertyBag.TryGetValue(idPropertyDefinition, serviceId);
        }

        return <ServiceId> serviceId.outValue;
    }
    GetIdPropertyDefinition(): PropertyDefinition { return null; }
    GetIsCustomDateTimeScopingRequired(): boolean { return false; }
    GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean { return false; }
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
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("abstract method, must implement"); }
    GetSchema(): ServiceObjectSchema { throw new Error("abstract method, must implement"); }
    GetSetFieldXmlElementName(): string { return XmlElementNames.SetItemField; }
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
    GetXmlElementNameOverride(): string { return null; }
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): void
    { throw new Error("abstract method, must implement"); }
    InternalLoad(propertySet: PropertySet): IPromise<void> { throw new Error("abstract method, must implement"); }
    //Load(): any { throw new Error("ServiceObject.ts - Load : Not implemented."); }
    Load(propertySet?: PropertySet): IPromise<void> {
        return this.InternalLoad(propertySet || PropertySet.FirstClassProperties);
    }
    //LoadFromJson(jsonObject: JsonObject, service: ExchangeService, clearPropertyBag: boolean): any { throw new Error("ServiceObject.ts - LoadFromJson : Not implemented."); }
    //LoadFromJson(jsonServiceObject: JsonObject, service: ExchangeService, clearPropertyBag: boolean, requestedPropertySet: PropertySet, summaryPropertiesOnly: boolean): any { throw new Error("ServiceObject.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService, clearPropertyBag: boolean, requestedPropertySet: PropertySet = null, summaryPropertiesOnly: boolean = false): void {
        this.PropertyBag.LoadFromXmlJsObject(
            jsObject,
            service,
            clearPropertyBag,
            requestedPropertySet,
            summaryPropertiesOnly);
    }
    //LoadFromXml(reader: EwsServiceXmlReader, clearPropertyBag: boolean): any { throw new Error("could Not implemented.");
    //    this.PropertyBag.LoadFromXml(
    //        reader,
    //        clearPropertyBag,
    //        null,       /* propertySet */
    //        false);     /* summaryPropertiesOnly */
    //}

    /// <summary>
    /// Throws exception if this is a new service object.
    /// </summary>
    ThrowIfThisIsNew(): void {
        if (this.IsNew) {
            throw new Error("service object does not have id");//InvalidOperationException(Strings.ServiceObjectDoesNotHaveId);
        }
    }
    /// <summary>
    /// Throws exception if this is not a new service object.
    /// </summary>
    ThrowIfThisIsNotNew(): void {
        if (!this.IsNew) {
            throw new Error("service object already have id");//InvalidOperationException(Strings.ServiceObjectAlreadyHasId);
        }
    }
    //ToJson(service: ExchangeService, isUpdateOperation: boolean): any { return this.PropertyBag.ToJson(service, isUpdateOperation);}
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
    //TryGetProperty<T>(propertyDefinition: PropertyDefinitionBase, propertyValue: any): boolean { throw new Error("Need implementation."); }
    //TryGetProperty(propertyDefinition: PropertyDefinitionBase, propertyValue: any): boolean { throw new Error("ServiceObject.ts - TryGetProperty : Not implemented."); }
    TryGetProperty<T>(propertyDefinition: PropertyDefinitionBase, propertyValue: IOutParam<T>): boolean {
        var propDef: PropertyDefinition = <PropertyDefinition>propertyDefinition;// as PropertyDefinition;
        debugger;//todo: fix for compatibility checking, if this is propertydefinition or propertydefinitionbase
        if (propDef != null) {
            return this.PropertyBag.TryGetPropertyAs<T>(propDef, propertyValue);
        }
        else {
            debugger;//todo: check for compatibility of extendedpropertydefition or propertydefition.
            var extPropDef: ExtendedPropertyDefinition = <ExtendedPropertyDefinition>propertyDefinition;// as ExtendedPropertyDefinition;
            if (extPropDef != null) {
                return this.TryGetExtendedProperty<T>(extPropDef, propertyValue);
            }
            else {
                // Other subclasses of PropertyDefinitionBase are not supported.
                throw new Error(StringHelper.Format(
                    Strings.OperationNotSupportedForPropertyDefinitionType,
                    propertyDefinition.Type));//NotSupportedException
            }
        }
    }

    Validate(): void { this.PropertyBag.Validate(); }
    //WriteToJsonForUpdate(service: ExchangeService): any { throw new Error("ServiceObject.ts - WriteToJsonForUpdate : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): void { this.PropertyBag.WriteToXml(writer); }
    WriteToXmlForUpdate(writer: EwsServiceXmlWriter): void { this.PropertyBag.WriteToXmlForUpdate(writer); }

    //created this to help find serviceobject type, ServiceObjectInstance instanceof Item/Folder/Attachment fails by creating circular dependency in javascript/typescript
    get InstanceType(): string { return "ServiceObject"; }
    //created this to keep item and folder object away frmo here. modularization would fail and create a larger file
    get IsAttachment(): boolean { return false; }//only item instance would return true.
}