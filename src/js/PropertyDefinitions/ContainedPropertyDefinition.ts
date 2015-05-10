import ComplexProperty = require("../ComplexProperties/ComplexProperty");
import ComplexPropertyDefinition = require("./ComplexPropertyDefinition");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import PropertyBag = require("../Core/PropertyBag");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");


class ContainedPropertyDefinition<TComplexProperty extends ComplexProperty> extends ComplexPropertyDefinition<TComplexProperty> {
    
    private containedXmlElementName: string;
    InternalLoadFromXmlJsObject(jsObject: any, propertyBag: PropertyBag): void {
        
        super.InternalLoadFromXmlJsObject(jsObject, propertyBag);
                
        //reader.ReadStartElement(XmlNamespace.Types, this.containedXmlElementName);
        //
        //base.InternalLoadFromXml(reader, propertyBag);
        //
        //reader.ReadEndElementIfNecessary(XmlNamespace.Types, this.containedXmlElementName);
    }
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
}
export = ContainedPropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
