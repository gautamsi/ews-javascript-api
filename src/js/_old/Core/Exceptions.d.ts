import svcObj = require("./ServiceObject");
declare module Microsoft.Exchange.WebServices.Data {
    class Exception {
        Message: string;
        InnerException: Exception;
        constructor(message: string, innerException?: Exception);
    }
    class ServiceLocalException extends Exception {
        constructor(message: string, innerException?: Exception);
    }
    class ServiceVersionException extends ServiceLocalException {
    }
    class ServiceValidationException extends ServiceLocalException {
    }
    class PropertyException extends ServiceLocalException {
        Name: string;
        constructor(message: string, name: string, innerException?: Exception);
    }
    class ServiceObjectPropertyException extends PropertyException {
        PropertyDefinition: svcObj.PropertyDefinitionBase;
        constructor(message: string, propertyDefinition: svcObj.PropertyDefinitionBase, innerException?: Exception);
    }
    class ServiceXmlDeserializationException extends ServiceLocalException {
    }
    class ServiceXmlSerializationException extends ServiceLocalException {
        constructor(message?: string, innerException?: any);
    }
}
import _export = Microsoft.Exchange.WebServices.Data;
export = _export;
