import UserId = require("./UserId");
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
    InternalToJson(service: ExchangeService): any { throw new Error("DelegateUser.ts - InternalToJson : Not implemented."); }
    InternalValidate(): any { throw new Error("DelegateUser.ts - InternalValidate : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("DelegateUser.ts - LoadFromJson : Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("DelegateUser.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    ValidateAddDelegate(): any { throw new Error("DelegateUser.ts - ValidateAddDelegate : Not implemented."); }
    ValidateUpdateDelegate(): any { throw new Error("DelegateUser.ts - ValidateUpdateDelegate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("DelegateUser.ts - WriteElementsToXml : Not implemented."); }
}
export = DelegateUser;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
