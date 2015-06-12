import {ItemId} from "../ComplexProperties/ItemId";
import {ExchangeService} from "../Core/ExchangeService";
import {PhoneCallId} from "./PhoneCallId";
import {PhoneCall} from "./PhoneCall";
export class UnifiedMessaging {
    private service: ExchangeService;
    DisconnectPhoneCall(id: PhoneCallId): any { throw new Error("UnifiedMessaging.ts - DisconnectPhoneCall : Not implemented."); }
    GetPhoneCallInformation(id: PhoneCallId): PhoneCall { throw new Error("UnifiedMessaging.ts - GetPhoneCallInformation : Not implemented."); }
    PlayOnPhone(itemId: ItemId, dialString: string): PhoneCall { throw new Error("UnifiedMessaging.ts - PlayOnPhone : Not implemented."); }
}


//}



