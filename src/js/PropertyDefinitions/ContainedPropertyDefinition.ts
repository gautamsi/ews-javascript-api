import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import PropertyDefinitionFlags = require("../Enumerations/PropertyDefinitionFlags");
import {EwsLogging} from "../Core/EwsLogging";
import ComplexProperty = require("../ComplexProperties/ComplexProperty");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import PropertyBag = require("../Core/PropertyBag");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import XmlNamespace = require("../Enumerations/XmlNamespace");
import {CreateComplexPropertyDelegate} from "../Misc/DelegateTypes";

import ComplexPropertyDefinition = require("./ComplexPropertyDefinition");
class ContainedPropertyDefinition<TComplexProperty extends ComplexProperty> extends ComplexPropertyDefinition<TComplexProperty> {

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
    
    
    // InternalLoadFromXmlJsObject(jsObject: any, propertyBag: PropertyBag): void {
        
    //     super.InternalLoadFromXmlJsObject(jsObject, propertyBag);
                
    //     //reader.ReadStartElement(XmlNamespace.Types, this.containedXmlElementName);
    //     //
    //     //base.InternalLoadFromXml(reader, propertyBag);
    //     //
    //     //reader.ReadEndElementIfNecessary(XmlNamespace.Types, this.containedXmlElementName);
    // }
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void {
        var complexProperty: ComplexProperty = <ComplexProperty>propertyBag._propGet(this);
        debugger;
        if (complexProperty != null || typeof complexProperty !== 'undefined') {
            writer.WriteStartElement(XmlNamespace.Types, this.XmlElementName);

            complexProperty.WriteToXml(writer, this.containedXmlElementName);

            writer.WriteEndElement(); // this.XmlElementName
        }
        //throw new Error("ContainedPropertyDefinition.ts - WritePropertyValueToXml : Not implemented."); 
    }
}
export = ContainedPropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
