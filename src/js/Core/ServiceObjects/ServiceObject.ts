import Strings = require("../../Strings");
import ServiceObjectPropertyException = require("../../Exceptions/ServiceObjectPropertyException");
import ExtendedPropertyCollection = require("../../ComplexProperties/ExtendedPropertyCollection");
import ServiceId = require("../../ComplexProperties/ServiceId");
import PropertyBag = require("../PropertyBag");
import ServiceObjectSchema = require("./Schemas/ServiceObjectSchema");
import ExchangeService = require("../ExchangeService");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import XmlElementNames = require("../../Core/XmlElementNames");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
import PropertySet = require("../PropertySet");
import DeleteMode = require("../../Enumerations/DeleteMode");
import SendCancellationsMode = require("../../Enumerations/SendCancellationsMode");
import AffectedTaskOccurrence = require("../../Enumerations/AffectedTaskOccurrence");
import PropertyDefinition = require("../../PropertyDefinitions/PropertyDefinition");
import PropertyDefinitionBase = require("../../PropertyDefinitions/PropertyDefinitionBase");
import ExtendedPropertyDefinition = require("../../PropertyDefinitions/ExtendedPropertyDefinition");


import {EwsLogging} from "../EwsLogging";
import {StringHelper} from "../../ExtensionMethods";


class ServiceObject {
    get PropertyBag(): PropertyBag { return this.propertyBag; }
    get Schema(): ServiceObjectSchema { return this.GetSchema(); }
    Item: any;
    Service: ExchangeService;
    get IsNew(): boolean {
        var id = this.GetId();
        debugger;
        return id == null ? true : !id.IsValid;
    }
    get IsDirty(): boolean {
        return this.PropertyBag.IsDirty;
    }
    private lockObject: any = {};
    //private service: ExchangeService;
    private propertyBag: PropertyBag;
    private xmlElementName: string;
    private OnChange: Function;//todo: fix type-  ServiceObjectChangedDelegate;

    constructor(service: ExchangeService) {
        //EwsUtilities.ValidateParam(service, "service");
        //EwsUtilities.ValidateServiceObjectVersion(this, service.RequestedServerVersion);

        this.Service = service;
        this.propertyBag = new PropertyBag(this);
    }

    PropertyDefinition(propertyDefinition: PropertyDefinitionBase): any {
        var propertyValue: any;

        var propDef: PropertyDefinition = <PropertyDefinition>propertyDefinition;
        if (propDef != null) {
            debugger;
            return this.PropertyBag._propGet(propDef);
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
            this.OnChange(this);
        }
    }
    ClearChangeLog(): void { this.PropertyBag.ClearChangeLog(); }
    GetChangeXmlElementName(): string { return XmlElementNames.ItemChange; }
    GetDeleteFieldXmlElementName(): string { return XmlElementNames.DeleteItemField; }
    GetExtendedProperties(): ExtendedPropertyCollection { return null; }
    GetId(): ServiceId {
        var idPropertyDefinition = this.GetIdPropertyDefinition();

        var serviceId: any = null;
        debugger;
        if (idPropertyDefinition != null) {
            this.PropertyBag.TryGetValue(idPropertyDefinition, serviceId);
        }

        return <ServiceId> serviceId;
    }
    GetIdPropertyDefinition(): PropertyDefinition { return null; }
    GetIsCustomDateTimeScopingRequired(): boolean { return false; }
    GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean { return false; }
    GetLoadedPropertyDefinitions(): PropertyDefinitionBase /*System.Collections.ObjectModel.Collection<PropertyDefinitionBase>*/ {
        //var propDefs: PropertyDefinitionBase[] = [];
        //for(var propDef in this.PropertyBag.Properties.Keys)
        //{
        //    propDefs.Add(propDef);
        //}

        //if (this.GetExtendedProperties() != null) {
        //    foreach(ExtendedProperty extProp in this.GetExtendedProperties())
        //    {
        //        propDefs.Add(extProp.PropertyDefinition);
        //    }
        //}

        //return propDefs;
        return null;
    }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("abstract method, must implement"); }
    GetSchema(): ServiceObjectSchema { throw new Error("abstract method, must implement"); }
    GetSetFieldXmlElementName(): string { return XmlElementNames.SetItemField; }
    GetXmlElementName(): string {
        debugger;
        throw new Error("this must be overridden by derived class");
        if (StringHelper.IsNullOrEmpty(this.xmlElementName)) {
            this.xmlElementName = this.GetXmlElementNameOverride();

            EwsLogging.Assert(
                !StringHelper.IsNullOrEmpty(this.xmlElementName),
                "EwsObject.GetXmlElementName",
                StringHelper.Format("The class {0} does not have an associated XML element name.", this.GetType().Name));
        }
        return this.xmlElementName;
    }
    GetXmlElementNameOverride(): string { return null; }
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): void
    { throw new Error("abstract method, must implement"); }
    InternalLoad(propertySet: PropertySet): void { throw new Error("abstract method, must implement"); }
    //Load(): any { throw new Error("ServiceObject.ts - Load : Not implemented."); }
    Load(propertySet?: PropertySet): void {
        this.InternalLoad(propertySet || PropertySet.FirstClassProperties);
    }
    //LoadFromJson(jsonObject: JsonObject, service: ExchangeService, clearPropertyBag: boolean): any { throw new Error("ServiceObject.ts - LoadFromJson : Not implemented."); }
    //LoadFromJson(jsonServiceObject: JsonObject, service: ExchangeService, clearPropertyBag: boolean, requestedPropertySet: PropertySet, summaryPropertiesOnly: boolean): any { throw new Error("ServiceObject.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsObject: any, clearPropertyBag: boolean, requestedPropertySet: PropertySet = null, summaryPropertiesOnly: boolean = false): void {
        this.PropertyBag.LoadFromXmlJsObject(
            jsObject,
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
    TryGetExtendedProperty(propertyDefinition: ExtendedPropertyDefinition, propertyValue: any): boolean { throw new Error("Need implementation."); }
    TryGetProperty<T>(propertyDefinition: PropertyDefinitionBase, propertyValue: any): boolean { throw new Error("Need implementation."); }
    //TryGetProperty(propertyDefinition: PropertyDefinitionBase, propertyValue: any): boolean { throw new Error("ServiceObject.ts - TryGetProperty : Not implemented."); }
    Validate(): void { this.PropertyBag.Validate(); }
    //WriteToJsonForUpdate(service: ExchangeService): any { throw new Error("ServiceObject.ts - WriteToJsonForUpdate : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): void { this.PropertyBag.WriteToXml(writer); }
    WriteToXmlForUpdate(writer: EwsServiceXmlWriter): void { this.PropertyBag.WriteToXmlForUpdate(writer); }

    //created this to keep item and folder object away frmo here. modularization would fail and create a larger file
    IsFolderInstance(): boolean { return false; }//only folder instance would return true.
    IsItemInstance(): boolean { return false; }//only item instance would return true.
    get IsAttachment(): boolean { return false; }//only item instance would return true.
}

export = ServiceObject;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
