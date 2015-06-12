import {IOwnedProperty} from "../Interfaces/IOwnedProperty";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {EwsLogging} from "../Core/EwsLogging";
import {ServiceObject} from "../Core/ServiceObjects/ServiceObject";

import {ComplexProperty} from "../ComplexProperties/ComplexProperty";
import {CreateComplexPropertyDelegate} from "../Misc/DelegateTypes";

import {ComplexPropertyDefinitionBase} from "./ComplexPropertyDefinitionBase";
export class ComplexPropertyDefinition<TComplexProperty extends ComplexProperty> extends ComplexPropertyDefinitionBase {
    Type: any;// System.Type;
    private propertyCreationDelegate: CreateComplexPropertyDelegate<TComplexProperty>;
    constructor(
        propertyName: string,
        xmlElementName: string,
        version: ExchangeVersion,
        uri?: string,
        flags?: PropertyDefinitionFlags,
        propertyCreationDelegate?: CreateComplexPropertyDelegate<TComplexProperty>) {
        super(propertyName, xmlElementName, version, uri, flags);

        EwsLogging.Assert(
            propertyCreationDelegate != null,
            "ComplexPropertyDefinition ctor",
            "CreateComplexPropertyDelegate cannot be null");

        this.propertyCreationDelegate = propertyCreationDelegate;
    }

    CreatePropertyInstance(owner: ServiceObject): ComplexProperty {

        var complexProperty: TComplexProperty = this.propertyCreationDelegate();
        //info: Implementation check is implemented in complexproperty by using ___ImplementsInterface array property
        var isIOwnedProperty = complexProperty["___implementsInterface"].indexOf("IOwnedProperty") >= 0;
        if (isIOwnedProperty) {
            var ownedProperty: IOwnedProperty = <any>complexProperty;
            ownedProperty.Owner = owner;
        }

        if (complexProperty)
            return complexProperty;
    }
}