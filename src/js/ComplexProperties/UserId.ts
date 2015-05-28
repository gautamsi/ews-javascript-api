import ComplexProperty = require("./ComplexProperty");
import StandardUser = require("../Enumerations/StandardUser");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class UserId extends ComplexProperty {
    SID: string;
    PrimarySmtpAddress: string;
    DisplayName: string;
    StandardUser: StandardUser;
    private sID: string;
    private primarySmtpAddress: string;
    private displayName: string;
    private standardUser: StandardUser;
    InternalToJson(service: ExchangeService): any { throw new Error("UserId.ts - InternalToJson : Not implemented."); }
    IsValid(): boolean { throw new Error("UserId.ts - IsValid : Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("UserId.ts - LoadFromJson : Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("UserId.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("UserId.ts - WriteElementsToXml : Not implemented."); }
}
export = UserId;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

