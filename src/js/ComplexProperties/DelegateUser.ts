import ComplexProperty = require("./ComplexProperty");
import DelegatePermissions = require("./DelegatePermissions");
import ExchangeService = require("../Core/ExchangeService");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class DelegateUser extends ComplexProperty {
    UserId: UserId;
    Permissions: DelegatePermissions;
    ReceiveCopiesOfMeetingMessages: boolean;
    ViewPrivateItems: boolean;
    private userId: UserId;
    private permissions: DelegatePermissions;
    private receiveCopiesOfMeetingMessages: boolean;
    private viewPrivateItems: boolean;
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    InternalValidate(): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    ValidateAddDelegate(): any { throw new Error("Not implemented."); }
    ValidateUpdateDelegate(): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = DelegateUser;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
