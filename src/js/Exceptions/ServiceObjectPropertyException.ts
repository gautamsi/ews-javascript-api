import PropertyDefinitionBase = require("../PropertyDefinitions/PropertyDefinitionBase");
import Exception = require("./Exception");
import PropertyException = require("./PropertyException");
class ServiceObjectPropertyException extends PropertyException {
    PropertyDefinition: PropertyDefinitionBase;
    //private propertyDefinition: PropertyDefinitionBase;
    constructor(message: string, propertyDefinition: PropertyDefinitionBase, innerException?: Exception) {
        super(message, propertyDefinition.GetPrintableName(), innerException);
        this.PropertyDefinition = propertyDefinition;
    }
}
export = ServiceObjectPropertyException;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
