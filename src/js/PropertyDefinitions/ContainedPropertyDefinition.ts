import {ExchangeService} from "../Core/ExchangeService";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {EwsLogging} from "../Core/EwsLogging";
import {ComplexProperty} from "../ComplexProperties/ComplexProperty";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {PropertyBag} from "../Core/PropertyBag";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {CreateComplexPropertyDelegate} from "../Misc/DelegateTypes";

import {ComplexPropertyDefinition} from "./ComplexPropertyDefinition";
export class ContainedPropertyDefinition<TComplexProperty extends ComplexProperty> extends ComplexPropertyDefinition<TComplexProperty> {

    private containedXmlElementName: string;

    constructor(
        propertyName: string,
        xmlElementName: string,
        containedXmlElementName: string,
        version: ExchangeVersion,
        uri?: string,
        flags?: PropertyDefinitionFlags,
        propertyCreationDelegate?: CreateComplexPropertyDelegate<TComplexProperty>) {
        super(propertyName, xmlElementName, version, uri, flags, propertyCreationDelegate);

        EwsLogging.Assert(
            propertyCreationDelegate != null,
            "ComplexPropertyDefinition ctor",
            "CreateComplexPropertyDelegate cannot be null");

        this.containedXmlElementName = containedXmlElementName;
    }
    
    
    InternalLoadFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void {
        debugger;//check for correct contained element name
        if(jsObject[this.containedXmlElementName]){
            jsObject = jsObject[this.containedXmlElementName];
        }        
        super.InternalLoadFromXmlJsObject(jsObject, service, propertyBag);
                
        //reader.ReadStartElement(XmlNamespace.Types, this.containedXmlElementName);
        //
        //base.InternalLoadFromXml(reader, propertyBag);
        //
        //reader.ReadEndElementIfNecessary(XmlNamespace.Types, this.containedXmlElementName);
    }
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void {
        var complexProperty: ComplexProperty = <ComplexProperty>propertyBag._getItem(this);
        debugger;
        if (complexProperty != null || typeof complexProperty !== 'undefined') {
            writer.WriteStartElement(XmlNamespace.Types, this.XmlElementName);

            complexProperty.WriteToXml(writer, this.containedXmlElementName);

            writer.WriteEndElement(); // this.XmlElementName
        }
        //throw new Error("ContainedPropertyDefinition.ts - WritePropertyValueToXml : Not implemented."); 
    }
}