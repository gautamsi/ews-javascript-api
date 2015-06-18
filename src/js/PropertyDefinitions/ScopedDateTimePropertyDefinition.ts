import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {PropertyDefinition} from "./PropertyDefinition";
import {ExchangeServiceBase} from "../Core/ExchangeServiceBase";
import {PropertyBag} from "../Core/PropertyBag";
import {DateTime, DateTimeKind, TimeZoneInfo} from "../DateTime";

import {DateTimePropertyDefinition} from "./DateTimePropertyDefinition";
export class ScopedDateTimePropertyDefinition extends DateTimePropertyDefinition {
    private getPropertyDefinitionCallback: GetPropertyDefinitionCallback;
    constructor(
        propertyName: string,
        xmlElementName: string,
        version: ExchangeVersion,
        uri?: string,
        flags?: PropertyDefinitionFlags,
        getPropertyDefinitionCallback?: GetPropertyDefinitionCallback) {

        super(propertyName, xmlElementName, version, uri, flags);
        this.getPropertyDefinitionCallback = getPropertyDefinitionCallback;

    }
    GetTimeZoneProperty(version: ExchangeVersion): PropertyDefinition { throw new Error("ScopedDateTimePropertyDefinition.ts - GetTimeZoneProperty : Not implemented."); }
    ScopeToTimeZone(service: ExchangeServiceBase, dateTime: DateTime, propertyBag: PropertyBag, isUpdateOperation: boolean): DateTime { throw new Error("ScopedDateTimePropertyDefinition.ts - ScopeToTimeZone : Not implemented."); }
}

interface GetPropertyDefinitionCallback {
    (version: ExchangeVersion): PropertyDefinition
}