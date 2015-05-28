import TimeZonePropertyDefinition = require("./TimeZonePropertyDefinition");
import PropertyDefinition = require("./PropertyDefinition");
import PropertyDefinitionFlags = require("../Enumerations/PropertyDefinitionFlags");
import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import PropertyBag = require("../Core/PropertyBag");
   class StartTimeZonePropertyDefinition extends TimeZonePropertyDefinition {
        HasFlag(flag: PropertyDefinitionFlags, version: ExchangeVersion): boolean { throw new Error("StartTimeZonePropertyDefinition.ts - HasFlag : Not implemented."); }
        RegisterAssociatedInternalProperties(properties: PropertyDefinition[]): any { throw new Error("StartTimeZonePropertyDefinition.ts - RegisterAssociatedInternalProperties : Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("StartTimeZonePropertyDefinition.ts - WritePropertyValueToXml : Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("StartTimeZonePropertyDefinition.ts - WriteToXml : Not implemented."); }
    }
   export = StartTimeZonePropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
