import ComplexPropertyDefinitionBase = require("./ComplexPropertyDefinitionBase");
import ServiceObject = require("../Core/ServiceObjects/ServiceObject");
import ComplexProperty = require("../ComplexProperties/ComplexProperty");
class PermissionSetPropertyDefinition extends ComplexPropertyDefinitionBase {
    Type: any;//System.Type;
    CreatePropertyInstance(owner: ServiceObject): ComplexProperty { throw new Error("PermissionSetPropertyDefinition.ts - CreatePropertyInstance : Not implemented."); }
}
export = PermissionSetPropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
