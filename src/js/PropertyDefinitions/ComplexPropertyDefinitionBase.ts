import {IOutParam} from "../Interfaces/IOutParam";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {PropertyBag} from "../Core/PropertyBag";
import {ExchangeService} from "../Core/ExchangeService";
import {ServiceObject} from "../Core/ServiceObjects/ServiceObject";
import {ComplexProperty} from "../ComplexProperties/ComplexProperty";
import {ComplexPropertyCollection} from "../ComplexProperties/ComplexPropertyCollection";
import {TypeSystem} from "../ExtensionMethods";

import {PropertyDefinition} from "./PropertyDefinition";
/**
 * @internal Represents abstract complex property definition.
 */
export abstract class ComplexPropertyDefinitionBase extends PropertyDefinition {

    /**
     * @internal Initializes a new instance of the **ComplexPropertyDefinitionBase** class.
     *
     * @param   {string}            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}            xmlElementName   Name of the XML element.
     * @param   {string}            uri              The URI.
     * @param   {ExchangeVersion}   version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **ComplexPropertyDefinitionBase** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    /**
     * @internal Initializes a new instance of the **ComplexPropertyDefinitionBase** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    constructor(propertyName: string, xmlElementName: string, uri: string, flags: PropertyDefinitionFlags, version: ExchangeVersion);
    constructor(propertyName: string, xmlElementName: string, uriOrFlags: string | PropertyDefinitionFlags, versionOrFlags: PropertyDefinitionFlags | ExchangeVersion, version?: ExchangeVersion) {
        switch (arguments.length) {
            case 4:
                super(propertyName, xmlElementName, <any>uriOrFlags, <ExchangeVersion>versionOrFlags);
                break;
            case 5:
                super(propertyName, xmlElementName, <string>uriOrFlags, <PropertyDefinitionFlags>versionOrFlags, version);
                break;
            default:
                break;
        }
    }

    /**
     * @internal Creates the property instance.
     *
     * @param   {ServiceObject}     owner   The owner.
     * @return  {ComplexProperty}   ComplexProperty.
     */
    abstract CreatePropertyInstance(owner: ServiceObject): ComplexProperty;

    /**
     * Gets the property instance.
     *
     * @param   {PropertyBag}       propertyBag       The property bag.
     * @param   {complexProperty}   complexProperty   The property instance.
     * @return  {boolean}    True if the instance is newly created.
     */
    private GetPropertyInstance(propertyBag: PropertyBag, complexProperty: IOutParam<ComplexProperty>): boolean {
        complexProperty.outValue = null;
        if (!propertyBag.TryGetValue(this, complexProperty) || !this.HasFlag(PropertyDefinitionFlags.ReuseInstance, propertyBag.Owner.Service.RequestedServerVersion)) {
            complexProperty.outValue = this.CreatePropertyInstance(propertyBag.Owner);
            return true;
        }

        return false;
    }

    /**
     * @internal Internals the load from XMlJsObject.
     *
     * @param   {any}               jsObject    The json object.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    InternalLoadFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void {

        var outComplexproperty: IOutParam<ComplexProperty> = { outValue: null };
        var justCreated: boolean = this.GetPropertyInstance(propertyBag, outComplexproperty);

        //assume collection type
        var complexPropertyCollection: ComplexPropertyCollection<any> = <ComplexPropertyCollection<any>>outComplexproperty.outValue
        //check for collection type //todo: implement better ComplexPropertyCollection detection
        if (complexPropertyCollection.Items) { //false if ths is not collection
            if (!justCreated && this.HasFlag(PropertyDefinitionFlags.UpdateCollectionItems, propertyBag.Owner.Service.RequestedServerVersion)) {
                complexPropertyCollection.UpdateFromXmlJsObjectCollection(jsObject, service);
            }
            else {
                complexPropertyCollection.CreateFromXmlJsObjectCollection(jsObject, service);
            }
        }
        else {
            //var typename = TypeSystem.GetJsObjectTypeName(jsObject);
            outComplexproperty.outValue.LoadFromXmlJsObject(jsObject, service);
        }

        propertyBag._setItem(this, outComplexproperty.outValue);
    }
    
    /**
     * @internal Loads the property value from XMLJsObject.
     *
     * @param   {any}               jsObject         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */    
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void {
        //debugger;//update: array type detection in next call, can not call GetPropertyInstance multiple time
        this.InternalLoadFromXmlJsObject(jsObject, service, propertyBag);        
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void {
        var complexProperty: ComplexProperty = <ComplexProperty>propertyBag._getItem(this);
        debugger;
        if (complexProperty) {
            complexProperty.WriteToXml(writer, this.XmlElementName);
        }
    }
}

