import IOwnedProperty = require("../Interfaces/IOwnedProperty");
import PropertyDefinitionFlags = require("../Enumerations/PropertyDefinitionFlags");
import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import {EwsLogging} from "../Core/EwsLogging";
import ServiceObject = require("../Core/ServiceObjects/ServiceObject");

import ComplexProperty = require("../ComplexProperties/ComplexProperty");
import {CreateComplexPropertyDelegate} from "../Misc/DelegateTypes";

import ComplexPropertyDefinitionBase = require("./ComplexPropertyDefinitionBase");
class ComplexPropertyDefinition<TComplexProperty extends ComplexProperty> extends ComplexPropertyDefinitionBase {
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

export = ComplexPropertyDefinition;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
