import ItemId = require("../ComplexProperties/ItemId");
import ExchangeService = require("../Core/ExchangeService");
import PhoneCallId = require("./PhoneCallId");
import PhoneCall = require("./PhoneCall");
 class UnifiedMessaging {
    private service: ExchangeService;
    DisconnectPhoneCall(id: PhoneCallId): any { throw new Error("UnifiedMessaging.ts - DisconnectPhoneCall : Not implemented."); }
    GetPhoneCallInformation(id: PhoneCallId): PhoneCall { throw new Error("UnifiedMessaging.ts - GetPhoneCallInformation : Not implemented."); }
    PlayOnPhone(itemId: ItemId, dialString: string): PhoneCall { throw new Error("UnifiedMessaging.ts - PlayOnPhone : Not implemented."); }
}
export = UnifiedMessaging;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
