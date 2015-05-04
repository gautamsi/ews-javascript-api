import PropertyDefinition = require("./PropertyDefinition");
import ExchangeService = require("../Core/ExchangeService");
import PropertyBag = require("../Core/PropertyBag");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
   class RecurrencePropertyDefinition extends PropertyDefinition {
        Type: System.Type;
        GetRecurrenceFromString(recurranceString: string): Recurrence { throw new Error("Not implemented."); }
        GetRecurrenceRange(recurrenceRangeString: string): RecurrenceRange { throw new Error("Not implemented."); }
        LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
        WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
        WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
}

   export = RecurrencePropertyDefinition;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
