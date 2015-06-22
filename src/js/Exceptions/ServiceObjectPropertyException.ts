import {PropertyDefinitionBase} from "../PropertyDefinitions/PropertyDefinitionBase";
import {Exception} from "./Exception";
import {PropertyException} from "./PropertyException";
export class ServiceObjectPropertyException extends PropertyException {
    PropertyDefinition: PropertyDefinitionBase;
    //private propertyDefinition: PropertyDefinitionBase;
    constructor(message: string, propertyDefinition: PropertyDefinitionBase, innerException?: Exception) {
        super(message, propertyDefinition.GetPrintableName(), innerException);
        this.PropertyDefinition = propertyDefinition;
    }
}