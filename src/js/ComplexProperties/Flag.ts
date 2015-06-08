import ComplexProperty = require("./ComplexProperty");
import ItemFlagStatus = require("../Enumerations/ItemFlagStatus");
import ExchangeService = require("../Core/ExchangeService");
import XmlElementNames = require("../Core/XmlElementNames");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import {DateTime} from "../DateTime";
class Flag extends ComplexProperty {
    FlagStatus: ItemFlagStatus;
    StartDate: DateTime;
    DueDate: DateTime;
    CompleteDate: DateTime;
    private flagStatus: ItemFlagStatus;
    private startDate: DateTime;
    private dueDate: DateTime;
    private completeDate: DateTime;
    InternalToJson(service: ExchangeService): any { throw new Error("Flag.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("Flag.ts - LoadFromJson : Not implemented."); }
    //todo: implement UpdateFromXmlJsObject
    
    LoadFromXmlJsObject(jsProperty: any, service: ExchangeService): void {//, xmlElementName: string, xmlNamespace?: XmlNamespace
        for (var key in jsProperty) {
            switch (key) {
                case XmlElementNames.FlagStatus:
                    this.flagStatus = <ItemFlagStatus><any>ItemFlagStatus[jsProperty[key]];//.ReadEnumValue<ItemFlagStatus>(key);
                    break;
                case XmlElementNames.StartDate:
                    this.startDate = service.ConvertUniversalDateTimeStringToLocalDateTime(jsProperty[key]);//.ReadAsString(key)).Value;
                    break;
                case XmlElementNames.DueDate:
                    this.dueDate = service.ConvertUniversalDateTimeStringToLocalDateTime(jsProperty[key]);//.ReadAsString(key)).Value;
                    break;
                case XmlElementNames.CompleteDate:
                    this.completeDate = service.ConvertUniversalDateTimeStringToLocalDateTime(jsProperty[key]);//.ReadAsString(key)).Value;
                    break;
                default:
                    break;
            }
        }
    }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("Flag.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    Validate(): any { throw new Error("Flag.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Flag.ts - WriteElementsToXml : Not implemented."); }
}
export = Flag;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

