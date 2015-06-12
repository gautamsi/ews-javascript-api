import {ComplexProperty} from "../ComplexProperties/ComplexProperty";
import {PhoneCallState} from "../Enumerations/PhoneCallState";
import {ConnectionFailureCause} from "../Enumerations/ConnectionFailureCause";
import {ExchangeService} from "../Core/ExchangeService";
import {PhoneCallId} from "./PhoneCallId";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class PhoneCall extends ComplexProperty {
    private static SuccessfulResponseText: string = "OK";
    private static SuccessfulResponseCode: number = 200;
    State: PhoneCallState;
    ConnectionFailureCause: ConnectionFailureCause;
    SIPResponseText: string;
    SIPResponseCode: number;
    private service: ExchangeService;
    private state: PhoneCallState;
    private connectionFailureCause: ConnectionFailureCause;
    private sipResponseText: string;
    private sipResponseCode: number;
    private id: PhoneCallId;
    Disconnect(): any { throw new Error("PhoneCall.ts - Disconnect : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("PhoneCall.ts - LoadFromJson : Not implemented."); }
    Refresh(): any { throw new Error("PhoneCall.ts - Refresh : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("PhoneCall.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


//}



