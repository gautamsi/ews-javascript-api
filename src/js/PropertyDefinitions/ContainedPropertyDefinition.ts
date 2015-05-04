import ComplexPropertyDefinition = require("./ComplexPropertyDefinition");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import PropertyBag = require("../Core/PropertyBag");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");


class ContainedPropertyDefinition<TComplexProperty> extends ComplexPropertyDefinition<TComplexProperty> {
    private containedXmlElementName: string;
    InternalLoadFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
}
export = ContainedPropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
